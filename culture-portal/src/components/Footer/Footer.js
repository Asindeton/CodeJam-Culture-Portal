import React from 'react'
import { Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css";
import './Footer.css'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from '../../images/logo-big.png'
import ScrollUpButton from "react-scroll-up-button"

const Footer = () => {
      return (
         <MDBFooter color="white" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className='footer-row'>
          <MDBCol md="3">
             <img src={logo} className='logo'/>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">MENU</h5>
                 <ul>
                     <li><Link to="/Main/" className='list-unstyled' >Main Home</Link></li>
                     <li><Link to="/ListOfAuthors/" className='list-unstyled' >Movie Directors</Link></li>
                     <li><Link to="/About/" className='list-unstyled' >About</Link></li>
                 </ul>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">SUPPORT</h5>
            <ul>
                <li><Link to="/Developers/" className='list-unstyled' >Developers</Link></li>
                <li><Link to="/Worklog/" className='list-unstyled' >Worklog</Link></li>
                <li><Link to="/Styleguide/" className='list-unstyled' >Styleguide</Link></li>
            </ul>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">BY RSSCHOOL</h5>
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
                <h5 className="title">CONTACTS</h5>
                <button className='footer-button'>Feedback on Rsschool</button>
                <button className='footer-button'>Submit bag</button>
          </MDBCol>
        </MDBRow>
        <ScrollUpButton />
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer  fluid>
          &copy; {new Date().getFullYear()} BY RSSCHOOL: <a  href=""> Culture Portal </a>
        </MDBContainer>
      </div>
    </MDBFooter>
      )
}

export default Footer
