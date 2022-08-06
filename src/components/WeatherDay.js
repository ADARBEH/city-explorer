import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Carduser extends React.Component {
render(){
  return(
    <>
    <p className="test-card" > THE WEATHER DATA FOR YOUR CITY SEARCH : </p>
      <Row xs={2} md={4} className="g-4">

      {this.props.weathardata.map(item =>{
      return(
        <Col>
         <Card className="card-date" border="warning" style={{ width: '18rem' }  }>
          <Card.Header> Data : {item.data}</Card.Header>
          <Card.Body>
          <Card.Text>
          Description : {item.description }
          </Card.Text>
          </Card.Body>
         </Card>
        </Col>
      
      )
    })}
    </Row>
    </>
  )
}}

export default Carduser;
