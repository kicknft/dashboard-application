import React, { useEffect, useState } from "react";
import { Col, Image, Row, Button } from "react-bootstrap";
import Link from "../Reuseable/Link";
import HeaderInfo from "./HeaderInfo";
import HeaderMenu from "./HeaderMenu";



const MainHeaderItem = ({
  logo,
  navItems = [],
  icon,
  phone = "",
  socials,
  searchColor,
}) => {

  const [currentAccount, setCurrentAccount] = useState('');
  // Implement connectWallet method
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask -> https://metamask.io/");
        return;
      }
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      // Boom! This should print out public address once we authorize Metamask.
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Make sure you have metamask!');
      return;
    } else {
      console.log('We have the ethereum object', ethereum);
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log('Found an authorized account:', account);
      setCurrentAccount(account);
    } else {
      console.log('No authorized account found');
    }

    // This is the new part, we check the user's network chain ID
    const chainId = await ethereum.request({ method: 'eth_chainId' });

    ethereum.on('chainChanged', handleChainChanged);

    // Reload the page when they change networks
    function handleChainChanged(_chainId) {
      window.location.reload();
    }
  };



  // Render Methods
  const renderNotConnectedContainer = () => (<>
    <center>
      <div className="text-6xl pt-32">
        <Button variant="primary" size="lg" onClick={connectWallet} >Connect Wallet</Button>
      </div>
    </center>
  </>
  );

  const renderConnectedContainer = () => {
    return (<div >
      <Button variant="primary" size="lg" >{currentAccount ? <p >{currentAccount.slice(0, 6)}...{currentAccount.slice(-4)} </p> : <p> Not connected </p>}</Button>
    </div>);
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <Row>
      <Col lg={12}>
        <div className="main-header-item">
          <div className="main-header-menus d-flex justify-content-between align-items-center">
            <div className="header-logo">
              <Link href="/projects">
                <Image src={logo.src} alt="logo" />
              </Link>
            </div>
            <HeaderMenu navItems={navItems} />
            <HeaderInfo
              icon={icon}
              phone={phone}
              socials={socials}
              searchColor={searchColor}
            />
            {!currentAccount && renderNotConnectedContainer()}
            {currentAccount && renderConnectedContainer()}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MainHeaderItem;
