import React from "react";
import Card from 'react-bootstrap/Card';



class Carduser extends React.Component {
render(){
    return(
        <>

{this.props.weathardata.map(item =>{
            return(
              <>
              <Card border="warning" style={{ width: '18rem'}}>
        <Card.Header> data : {item.data}</Card.Header>
        <Card.Body>
          <Card.Text>
          description : {item.description }
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

export default Carduser;
