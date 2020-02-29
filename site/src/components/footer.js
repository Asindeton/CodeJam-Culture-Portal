import React, {useContext} from 'react'
import { Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css";
import './footer.css'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from '../images/logo-big.png'
import mail from '../images/mail.svg'
import book from '../images/book.svg'
import law from '../images/law.svg'
import paper from '../images/paper-plane.svg'
import ScrollUpButton from "react-scroll-up-button"

import {GlobalStateContext} from "../context/GlobalContextProvider" 

import {footer as translate}  from "../data/dictionary"


let menu;      
let support;
let main;
let directors;
let developers;
let worklog;
let styleguide;
let contacts;
let about;

let currLang;

const Footer = () => {
  
      const state = useContext(GlobalStateContext);
      currLang = state.language;
  
      menu = translate.menu[currLang];
      support = translate.support[currLang];
      main = translate.main[currLang];
      directors = translate.directors[currLang];
      about = translate.about[currLang];
      developers = translate.developers[currLang];
      styleguide = translate.styleguide[currLang];
      worklog = translate.worklog[currLang];
      contacts = translate.contacts[currLang]; 

  
      return (
         <MDBFooter color="white" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className='footer-row'>
          <MDBCol md="3">
             <img src={logo} className='logo' alt=''/>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">{menu}<img src={book}  alt=''/></h5>
                 <ul>
                     <li><Link to="/" className='list-unstyled' >{main}</Link></li>
                     <li><Link to="/listOfAuthors/" className='list-unstyled' >{directors}</Link></li>
                     <li><Link to="/About/" className='list-unstyled' >{about}</Link></li>
                 </ul>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">{support}<img src={mail}  alt=''/></h5>
            <ul>
                <li><Link to="/Developers/" className='list-unstyled' >{developers}</Link></li>
                <li><Link to="/Worklog/" className='list-unstyled' >{worklog}</Link></li>
                <li><Link to="/Styleguide/" className='list-unstyled' >{styleguide}</Link></li>
            </ul>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">BY RSSCHOOL<img src={law} alt=''/></h5>
            <ul>
                <li><a href="https://github.com/Asindeton" className='list-unstyled' >Dmitry Legankov</a></li>
                <li><a href="https://github.com/shebekocom" className='list-unstyled' >Nikolay Shebeko</a></li>
                <li><a href="https://github.com/Kr-Mx" className='list-unstyled' >Maksim Kryshneu</a></li>
                <li><a href="https://github.com/GurbanovAli" className='list-unstyled' >Ali Gurbanov</a></li>
                <li><a href="https://github.com/vukzh" className='list-unstyled' >Vladimir Zhdanov</a></li>
                <li><a href="https://github.com/pavlenstory" className='list-unstyled' >Pavel Andreikovets</a></li>
            </ul>
          </MDBCol>
          <MDBCol md="2">
                <h5 className="title">{contacts}<img src={paper}  alt=''/></h5>
                <button className='footer-button'>Feedback on Rsschool</button>
                <button className='footer-button'>Submit bag</button>
          </MDBCol>
        </MDBRow>
        <ScrollUpButton />
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer  fluid>
          &copy; {new Date().getFullYear()} BY RSSCHOOL: <Link to="/" className="list-unstyled">Culture Portal</Link>
        </MDBContainer>
      </div>
    </MDBFooter>
      )
}

export default Footer