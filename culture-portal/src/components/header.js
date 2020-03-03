import React, {useContext} from 'react'
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css";
import {GlobalStateContext, GlobalDispatchContext} from "../components/context/GlobalContextProvider"
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form
} from "react-bootstrap";
import {header as translate}  from "../data/dictionary"

import "./header.css";
import Logotype from "../images/logo-big.png";

let directors;
let developers;
let styleguide;
let worklog;

let currLang = "en";

  const shortLang = {
    en: 'EN',
    ru: 'RU',
    be: 'BY',
  }

const Header = () => {

  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);

  currLang = state.language;

  let ind_language;
  if (currLang === 'en') {
    ind_language = 0
  } else if (currLang === 'ru') {
    ind_language = 1
  } else ind_language = 2;


  directors = translate.directors[currLang];
  developers = translate.developers[currLang];
  styleguide = translate.styleguide[currLang];
  worklog = translate.worklog[currLang];


  const changeLang = (val) => {
    if (val === 'EN') {
      dispatch ({type: 'SET_EN'})
    } else if (val === 'RU') {
      dispatch ({type: 'SET_RU'})
    } else dispatch ({type: 'SET_BY'})
  }

  const oneSelectArr = ['EN','RU','BY'].map((item, ind) => {
    return (
      (ind === ind_language)?<option className='option' key={ind} >{item}</option>:<option className='option' key={ind}>{item}</option>
    );
  });


  return (
    <Container className="header">
      <Row className="header__container">
        <Col className="header__colum" xl>
          <Navbar variant="dark" expand="lg" className="header__navbar nav">
            <Navbar.Toggle
              className="header__toggle toggle"
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse
              className="header__navigation"
              id="basic-navbar-nav"
            >
              <Nav className="header__nav-primary nav-main">
                <Link className="nav-main__link" to="/">
                <img className='img-item' src={Logotype} alt="The Movie Director" />
                </Link>
                <Link className="nav-main__link movie-link" to="/ListOfAuthors/">
                  {directors}
                </Link>
              </Nav>
              <Nav className="header__nav-second nav-second">
                <Link className="nav-second__link head-link" to="/Developers/">
                  {developers} |
                </Link>
                <Link className="nav-second__link head-link" to="/Styleguide/">
                  {styleguide} |
                </Link>
                <Link className="nav-second__link head-link" to="/Worklog/">
                  {worklog} |
                </Link>
                <Nav.Link className="nav-second__link head-link">
                  <Form>
                      <Form.Control as="select" defaultValue={shortLang[currLang]} onChange={(e)=>changeLang(e.target.value)}>
                        {oneSelectArr}
                      </Form.Control>
                    </Form>
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
