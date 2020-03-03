import React from 'react';

export default { title: 'Developers' };

const vuk = 'https://media.discordapp.net/attachments/677931489135951891/683726511442100224/vuk.jpg?width=459&height=612';
const ali = 'https://sun9-55.userapi.com/c854228/v854228864/207742/bLc21B1ozps.jpg';


export const developers = () => <div>
<h2>First version</h2>
<ul className='team'>
                <li className='team-list' >
                   <img className='dev-img'  src={ali} />
                   <h2><a href="https://github.com/GurbanovAli" className='team-link' >Ali Gurbanov</a></h2>
                   <h3 style={{textAlign:'center', fontFamily:'sans-serif'}}> Role in the team:<br/>
                   Developer
                   </h3>
                </li>
                <li className='team-list' >
                   <img className='dev-img'  src={vuk} />
                   <h2><a href="https://github.com/vukzh" className='team-link' >Vladimir Zhdanov</a></h2>
                   <h3 style={{textAlign:'center', fontFamily:'sans-serif'}}> Role in the team:<br/>
                   Developer
                   </h3>
                </li>
            </ul>
      </div>


export const developers2 = () => <div>
<h2>Second used version</h2>
<ul className='team-2' >
               <li className='team-list-2' >
                  <div className='photo photo__4'/>
                  <h2 className='dev-name-2'><a href="https://github.com/GurbanovAli" className='team-link-2' >Ali Gurbanov</a></h2>
                  <h3 style={{textAlign:'center', fontFamily:'sans-serif'}}> Role in the team:<br/>
                  Developer
                  </h3>
               </li>
               <li className='team-list-2' >
                  <div className='photo photo__5'/>
                  <h2 className='dev-name-2'><a href="https://github.com/vukzh" className='team-link-2 ' >Vladimir Zhdanov</a></h2>
                  <h3 style={{textAlign:'center', fontFamily:'sans-serif'}}> Role in the team:<br/>
                  Developer
                  </h3>
               </li>
           </ul>
   </div>
