import React from 'react';
import { Link } from "gatsby"
import Image from "./image"

import Card from 'react-bootstrap/Card';

const CardOfAuthor = ({imgName,name,years,description,detail}) => (
  <Card bg="light" style={{ width: '16rem' }}>
      <div style={{ maxWidth: `16rem`, marginBottom: `1.45rem` }}>
        <Image imgName={imgName}/>
      </div>
    <Card.Body>
      <Card.Subtitle style={{ marginBottom: `1.45rem` }} className='center mb-2'>{name}</Card.Subtitle >
      <Card.Text style={{ marginBottom: `1.45rem` }} className='center text-muted'>
        {years}
      </Card.Text>
      <Card.Text className='text-muted'>
        {description}
      </Card.Text>


      <Link to="/listOfAuthors/"  className='bottom'>{detail}</Link>


    </Card.Body>
  </Card>
)

export default CardOfAuthor
