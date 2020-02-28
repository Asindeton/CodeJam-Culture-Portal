import React from 'react'
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  DropdownButton,
  Dropdown
} from "react-bootstrap";
import "./Header.scss";
import Logotype from "../../images/logo-big.png";

const Header = () => {
  return (
    <Container className="header">
      <Row className="header__container">
        <Col className="header__colum" xl>
          <Navbar variant="dark" expand="lg" className="header__navbar nav">
            <Navbar.Brand className="header__logotype logotype" href="#home">
              <img src={Logotype} alt="The Movie Director" />
            </Navbar.Brand>
            <Navbar.Toggle
              className="header__toggle toggle"
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse
              className="header__navigation"
              id="basic-navbar-nav"
            >
              <Nav className="header__nav-primary nav-main">
                <Link className="nav-main__link" to="/ListOfAuthors/">
                  Movie Directors
                </Link>
                <Link className="nav-main__link" to="/About/">
                  About
                </Link>
              </Nav>
              <Nav className="header__nav-second nav-second">
                <Link className="nav-second__link" to="/Developers/">
                  Developers
                </Link>
                <Link className="nav-second__link" to="/Styleguide/">
                  Styleguide
                </Link>
                <Link className="nav-second__link" to="/Worklog/">
                  Worklog
                </Link>
                <Nav.Link className="nav-second__link" href="#dropdowm">
                  <DropdownButton
                    size="sm"
                    bsPrefix="nav_second__dropdown"
                    id="dropdown-basic-button"
                    title="EN"
                  >
                    <Dropdown.Item href="#/action-1">EN</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">RU</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">BE</Dropdown.Item>
                  </DropdownButton>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
