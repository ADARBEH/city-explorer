import React from "react";
import Table from 'react-bootstrap/Table';




class Tableuser extends React.Component {


  
render(){
    return(
      <>

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
      <thead>
        <tr>
          <th>City Name</th>
          <th>data</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.props.display_name}</td>
          <td>{this.props.weathardata.map(item =>{
            return(
              <>
              <th>{item.data}</th>
              </>
            )
          })}</td>
          <td>{this.props.weathardata.map(item =>{
            return(
              <>
              <th>{item.description}</th>
              </>
            )
          })}</td>

          
        </tr>
      </tbody>
      
    </Table>
    </>
    )
}
}

export default Tableuser;