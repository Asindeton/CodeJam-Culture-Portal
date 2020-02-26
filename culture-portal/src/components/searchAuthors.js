import React from 'react';

import Form from 'react-bootstrap/Form';
//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchAuthor = ({searchNameF,searchPlaceF,searchNamePlaceholder,searchPlacePlaceholder}) => (
  <Form style={{ margin: `2rem` }} >
    <Form.Row>
      <Col onChange={(e) => {searchNameF(e.target.value);}}>
        <Form.Control placeholder={searchNamePlaceholder} />
      </Col>
      <Col onChange={(e) => {searchPlaceF(e.target.value);}}>
        <Form.Control placeholder={searchPlacePlaceholder} />
      </Col>
    </Form.Row>
  </Form>
)

export default SearchAuthor
