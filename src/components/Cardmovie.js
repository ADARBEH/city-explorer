import React from "react";
import Card from 'react-bootstrap/Card';



class Cardmovie extends React.Component {
render(){
    return(
        <>

{this.props.movie.map(item =>{
            return(
              <>
              <Card border="warning" style={{ width: '18rem'}}>
        <Card.Header> title : {item.title} </Card.Header>
        <Card.Body>
          <Card.Text>
          <img src={`${item.image_url}`} style={{ width: '15rem'}}  ></img> 
          <h5>{item.title}</h5>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

              </>
            )
          })}
        </>
    )
}
}

export default Cardmovie;
