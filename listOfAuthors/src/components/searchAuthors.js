import React from 'react';

import Form from 'react-bootstrap/Form';
//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchAuthor = ({searchNameF,searchPlaceF}) => (
  <Form style={{ margin: `2rem` }} >
    <Form.Row>
      <Col onChange={(e) => {searchNameF(e.target.value);}}>
        <Form.Control placeholder="Name" />
      </Col>
      <Col onChange={(e) => {searchPlaceF(e.target.value);}}>
        <Form.Control placeholder="Place of birth" />
      </Col>
    </Form.Row>
  </Form>
)

export default SearchAuthor