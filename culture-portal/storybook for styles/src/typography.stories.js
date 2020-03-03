import React from 'react';

export default { title: 'Typography' };

export const withText = () => <h1 className='typography'>Typography</h1>;

export const heading1 = () => <h1 className='typography'>H1.Heading</h1>;

export const heading2 = () => <h2 className='typography'>H2.Heading</h2>;

export const heading3 = () => <h3 className='typography'>H3.Heading</h3>;

export const paragraph = () => <p className='typography'>
  Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
  elit.
</p>;

export const display = () =>  <div>
     <p className='typography'>Display 1</p>
     <p className='typography'>Display 2</p>
     <p className='typography'>Display 3</p>
</div>;
