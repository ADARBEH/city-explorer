import React from "react";
import Table from 'react-bootstrap/Table';




class Tableuser extends React.Component {


  
render(){
    return(
      <>
{/* {console.log(this.props.weathardata)} */}
    <Table striped >
      <thead>
        <tr className="tabel">
          <th>City Name</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
      </thead>
      <tbody>
        <tr className="tabel-all" >
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