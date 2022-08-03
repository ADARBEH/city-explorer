import React from "react";
import Table from 'react-bootstrap/Table';




class Tableuser extends React.Component {


  
render(){
    return(
      <>
{/* {console.log(this.props.weathardata)} */}
    <Table striped>
      <thead>
        <tr>
          <th>City Name</th>
          <th>latitude</th>
          <th>longitude</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.props.display_name}</td>
          <td>{this.props.latitude}</td>
          <td>{this.props.longitude}</td>
        </tr>
      </tbody>
    </Table>
    </>
    )
}
}

export default Tableuser;