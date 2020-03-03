import React from 'react';

export default { title: 'Cards' };

export const withText = () =>
<div  className='card' style={{width:'286px', background:'#f8f9fa',borderRadius: '.25rem', margin:'50px'}}>
<img  src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg' style={{width:'286px', height:'190px', borderRadius: '.25rem'}}/>
<h5  style={{fontSize: '1.25rem', fontWeight:'500', lineHeight:'1.2em', textAlign:'center', color:'#6c757d',fontFamily: 'Palatino,sans-serif'}}>Card Title</h5>
<p  style={{fontSize: '1rem', fontWeight:'400', margin:'15px', lineHeight:'1.5em', color:'#6c757d',fontFamily: 'Palatino,sans-serif'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>;
