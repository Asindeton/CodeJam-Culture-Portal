import React from 'react'
import { Link } from "gatsby"

const Footer = () => {

      return (
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
                   <li><Link to="/Dmitry/" className='link' >Dmitry Legankov</Link></li>
                   <li><Link to="/Nikolay/" className='link' >Nikolay Shebeko</Link></li>
                   <li><Link to="/Maksim/" className='link' >Maksim Kryshneu</Link></li>
                   <li><Link to="/Ali/" className='link' >Ali Gurbanov</Link></li>
                   <li><Link to="/Vladimir/" className='link' >Vladimir Zhdanov</Link></li>
                   <li><Link to="/Pavel/" className='link' >Pavel Andreikovets</Link></li>
                </ul>
             </div>
             <div className='block-footer'>
                 Contacts
                <button>Feedback on Rsschool</button>
                <button>Submit bag</button>
                <button>Go up</button>
             </div>
         </div>
      )
}

export default Footer
