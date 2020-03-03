import React, {useState}  from 'react';

import {
  Modal,
  Button,
  Form
} from "react-bootstrap";

function SubmitBug({submit}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='footer-button' onClick={handleShow}>{submit}</button>

      <Modal size="sm" show={show} onHide={handleClose} style={{ margin: `5%`, maxWidth: `300px` }}>
        <Modal.Header closeButton>
          <Modal.Title>Bug report</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please select an error type, fill in the problem and send an error report</Modal.Body>
    
        <Form.Group controlId="exampleForm.ControlSelect" style={{ margin: `5%` }}>
          <Form.Label>Type of error</Form.Label>
          <Form.Control as="select">
            <option>Visual error</option>
            <option>Functional error</option>
          </Form.Control>
        </Form.Group>
    
        <Form.Group controlId="exampleForm.ControlTextarea" style={{ margin: `5%` }}>
          <Form.Label>Error description</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>

    
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SubmitBug;