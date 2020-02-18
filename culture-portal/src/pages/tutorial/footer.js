import React from 'react'
import { Link } from "gatsby"

import ScrollUpButton from "react-scroll-up-button"

const Footer = () => {

      return (
         <>
         <div className='footer-main'>
             <img className='block-footer'/>
             <div className='block-footer'>
                 Menu
                <ul>
                   <li><Link to="/Main/" className='link' >Main Home</Link></li>
                   <li><Link to="/Movie/" className='link' >Movie Directors</Link></li>
                   <li><Link to="/About/" className='link' >About</Link></li>
                </ul>
             </div>
             <div className='block-footer' >
                 Support
                <ul>
                   <li><Link to="/Developers/" className='link' >Developers</Link></li>
                   <li><Link to="/Movie/" className='link' >Worklog</Link></li>
                   <li><Link to="/Movie/" className='link' >Styleguide</Link></li>
                </ul>
             </div>
             <div className='block-footer'>
                 By Rsschool
                <ul>
                   <li><a href="https://github.com/Asindeton" className='link' >Dmitry Legankov</a></li>
                   <li><a href="https://github.com/shebekocom" className='link' >Nikolay Shebeko</a></li>
                   <li><a href="https://github.com/Kr-Mx" className='link' >Maksim Kryshneu</a></li>
                   <li><a href="https://github.com/GurbanovAli" className='link' >Ali Gurbanov</a></li>
                   <li><a href="https://github.com/vukzh" className='link' >Vladimir Zhdanov</a></li>
                   <li><a href="https://github.com/pavlenstory" className='link' >Pavel Andreikovets</a></li>
                </ul>
             </div>
             <div className='block-footer'>
                 Contacts
                <button>Feedback on Rsschool</button>
                <button>Submit bag</button>
             </div>
             <ScrollUpButton />
         </div>
         </>
      )
}

export default Footer
