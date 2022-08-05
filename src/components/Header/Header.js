import headerData from "@/data/headerData";
import useScroll from "@/hooks/useScroll";
import React from "react";
import { Col, Container, Row, Button} from "react-bootstrap";
import MainHeaderItem from "./MainHeaderItem";
import Social from "./Social";

const { logo, navItems, phone, icon } = headerData;

const Header = ({ className = "" }) => {
  const { scrollTop } = useScroll(160);

  return (
    <header>
      <div className={`main-header${scrollTop ? " sticky" : ""}`}>
        <Container>
          <MainHeaderItem
            logo={logo}
            navItems={navItems}
          />
        </Container>
      </div>
    </header>
  );
};

export default Header;
