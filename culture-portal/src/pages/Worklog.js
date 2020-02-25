import React from 'react'
import { Link } from "gatsby"

import Footer from './Footer';
import Header from '../components/Header/Header'

class Worklog extends React.Component {
   constructor(props){
      super(props)

   }
   render(){
      return(
         <>
           <Header />
           <div className='table'>
            <table>
               <tr>
                <th>Task</th>
                <th>Name</th>
                <th>Functionality</th>
                <th>Time</th>
               </tr>
               <tr>
                 <td>18|02|20</td>
                 <td>Nikolay Shebeko</td>
                 <td>Design UI</td>
                 <td>1h</td>
              </tr>
              <tr>
                <td>18|02|20</td>
                <td>...</td>
                <td>...</td>
                <td>1h</td>
             </tr>
            </table>
            </div>
           <Footer/>
         </>
      )
   }
}

export default Worklog
