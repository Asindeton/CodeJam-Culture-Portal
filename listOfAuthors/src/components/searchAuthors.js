import React from 'react';

import Form from 'react-bootstrap/Form';
//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchAuthor = () => (
  <Form style={{ margin: `2rem` }} >
    <Form.Row>
      <Col>
        <Form.Control placeholder="Name" />
      </Col>
      <Col>
        <Form.Control placeholder="Place of birth" />
      </Col>
    </Form.Row>
  </Form>
)

export default SearchAuthor