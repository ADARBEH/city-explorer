import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



class Cardmovie extends React.Component {
render(){
  return(
  <>
  <p className="test-card" > THE WEATHER DATA FOR YOUR CITY SEARCH : </p>
  <Row xs={2} md={4} className="g-4">
  {this.props.movie.map(item =>{
  return(
    <Col>
    <Card border="warning" style={{ width: '18rem'}}>
      <Card.Header> title : {item.title} </Card.Header>
      <Card.Body>
        <Card.Text>
        <img src={`${item.image_url}`} style={{ width: '15rem'}}  ></img> 
        <h5>{item.title}</h5>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
  )
  })}
  </Row>
  </>
)
}
}

export default Cardmovie;
