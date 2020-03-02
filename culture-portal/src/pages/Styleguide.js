import React from "react";
import Layout from '../components/layout';
import SEO from "../components/seo"
import { Link } from "gatsby"

import "./scss/custom.scss";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Card,
  Form
} from "react-bootstrap";


import "./Styleguide.scss";
import Logotype from "../images/logo-big.png";



const Styleguide = () => {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
     <Layout>
    <SEO title="Styleguide" />
    <Container className="main">
      <Row className="main__container">
        <Col className="main__colum" xl>
          <div className='storybook'>
            <h1>Style guide</h1>
            <h1><a className='story-link' target="_blank" href='https://ecstatic-ardinghelli-8d7a85.netlify.com/?path=/story/about-culture-portal--about'>
              <button className='story-button'>Storybook</button></a></h1>
          </div>
          <p>Components designed for cultur portal</p>
          <h2>Color palette</h2>
          <Container>
            <Row>
              <Col style={{ backgroundColor: "black" }}>
                <p style={{ color: "rgb(129, 138, 145)"}}>Primary</p>
              </Col>
              <Col className="bg-secondary color-palette">
                <p>Secondary</p>
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

          <h2>Input</h2>
          <Container>
            <Row>
              <Col>

                <Form style={{ margin: `2rem` }} >
                  <Form.Row>
                    <Col>
                      <Form.Control className = 'search' placeholder={'Input'} type="number" readonly/>
                    </Col>
                  </Form.Row>
                </Form>


              </Col>
            </Row>
          </Container>

          <h2>Buttons</h2>
          <Container>
            <Row>
              <Col>
                <Link to={''} className="description-button" onClick={handleClick} >Button</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to={''} className="data-button" onClick={handleClick} >Button</Link>
              </Col>
            </Row>
          </Container>

          <h2>Cards</h2>
          <Container>
            <Row>
              <Col>
                <Card bg="light" style={{ width: "18rem" }}>
                  <Card.Img className="img__animation" variant="top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                  <Card.Body>
                    <Card.Title className='center text-muted'>Card Title</Card.Title>
                    <Card.Text className='text-muted'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          <h2>Navigation</h2>
          <Container className="wrapper">
            <Row className="wrapper__container">
              <Col className="wrapper__colum" lg="11">
                <Navbar expand="md" className="header__navbar nav">
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
                      <Nav.Link className="nav-second__link" >
                      <Form>
                          <Form.Control as="select">
                              <option>EN</option>
                              <option>RU</option>
                              <option>BY</option>
                          </Form.Control>
                        </Form>
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
