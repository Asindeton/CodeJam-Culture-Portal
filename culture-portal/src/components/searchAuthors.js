import React, {useContext}  from 'react';

import Form from 'react-bootstrap/Form';
//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import {GlobalStateContext, GlobalDispatchContext} from "../components/context/GlobalContextProvider"


const SearchAuthor = ({searchNamePlaceholder,searchPlacePlaceholder}) => {

  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);

  const changeName = (val) => {
    dispatch ({type: 'SET_NAME', payload: val})
  }

  const changePlace = (val) => {
    dispatch ({type: 'SET_PLACE', payload: val})
  }




  return (
    <Form style={{ margin: `2rem` }} >
      <Form.Row>
        <Col onChange={(e) => {changeName(e.target.value);}}>
          <Form.Control placeholder={searchNamePlaceholder} />
        </Col>
        <Col onChange={(e) => {changePlace(e.target.value);}}>
          <Form.Control placeholder={searchPlacePlaceholder} />
        </Col>
      </Form.Row>
    </Form>
  )

}

export default SearchAuthor
