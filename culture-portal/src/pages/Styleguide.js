import React from "react";
import Layout from '../components/layout';

import "./scss/custom.scss";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
  Button,
  Card
} from "react-bootstrap";
import "./Styleguide.scss";
import Logotype from "../images/logo-big.png";

const Styleguide = () => {
  return (
     <Layout>
    <Container className="main">
      <Row className="main__container">
        <Col className="main__colum" xl>
          <h1>Style guide</h1>
          <p>Components designed for cultur portal</p>
          <h2>Color palette</h2>
          <Container>
            <Row>
              <Col className="bg-primary">
                <p className="text-secondary">Primary</p>
              </Col>
              <Col className="bg-secondary color-palette">
                <p>Secondary</p>
              </Col>
              <Col className="bg-info">
                <p>Info</p>
              </Col>
              <Col className="bg-light">Light</Col>
            </Row>
          </Container>

          <h2>Typography</h2>
          <Container>
            <Row>
              <Col>
                <h1>H1.Heading</h1>
                <h2>H2.Heading</h2>
                <h3>H3.Heading</h3>
                <p>
                  Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </Col>
              <Col>
                <p>Display 1</p>
                <p>Display 2</p>
                <p>Display 3</p>
              </Col>
            </Row>
          </Container>

          <h2>Buttons</h2>
          <Container>
            <Row>
              <Col>
                <Button variant="primary">Primary</Button>{" "}
              </Col>
            </Row>
          </Container>

          <h2>Cards</h2>
          <Container>
            <Row>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          <h2>Navigation</h2>
          <Container className="wrapper">
            <Row className="wrapper__container">
              <Col className="wrapper__colum" lg="11">
                <Navbar bg="dark" expand="md" className="header__navbar nav">
                  <Navbar.Brand
                    className="header__logotype logotype"
                    href="#home"
                  >
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
                      <Nav.Link bsPrefix="nav-main__link" href="#home">
                        Movie Directors
                      </Nav.Link>
                      <Nav.Link bsPrefix="nav-main__link" href="#link">
                        About
                      </Nav.Link>
                    </Nav>
                    <Nav className="header__nav-second nav-second">
                      <Nav.Link bsPrefix="nav-second__link" href="#home">
                        Developers
                      </Nav.Link>
                      <Nav.Link bsPrefix="nav-second__link" href="#styleguide">
                        Styleguide
                      </Nav.Link>
                      <Nav.Link bsPrefix="nav-second__link" href="#worklog">
                        Worklog
                      </Nav.Link>
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
        </Col>
      </Row>
    </Container>
    </Layout>
  );
};

export default Styleguide;
