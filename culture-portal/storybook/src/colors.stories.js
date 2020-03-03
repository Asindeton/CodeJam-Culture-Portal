import React from 'react';

export default { title: 'Colors' };

export const withText = () =><div style={{display:'flex'}}>
<p className='typograph' style={{ width:'360px', height:'40px', background: 'black', fontSize: '20px', paddingLeft:'10px', color:'#818a91'}}>Primary</p>
<p className='typograph' style={{width:'360px', height:'40px', background: '#6c757d', fontSize: '20px', paddingLeft:'10px', color:'#0b0b0b'}}>Secondary</p>
<p className='typograph' style={{width:'360px', height:'40px', background: '#f8f9fa', fontSize: '20px', paddingLeft:'10px', color:'#0b0b0b'}}>Light</p>   </div>;
