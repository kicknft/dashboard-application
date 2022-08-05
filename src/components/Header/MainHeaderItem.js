import React from "react";
import { Col, Image, Row, Button} from "react-bootstrap";
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
              <Button variant="primary" size="lg" >Connect Wallet</Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MainHeaderItem;
