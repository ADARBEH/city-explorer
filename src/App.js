import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Formuser from './components/Formuser';
import React, { Component } from 'react';
import axios from 'axios';
import Tableuser from './components/Tableuser';
import Imguser from './components/Imguser';
import Modeluser from './components/Modeluser';







class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      citydata : "",
      display_name : "",
      latitude : "",
      longitude : "",
      erorrmessage : "",
      erorr : false
    }

  }






  
  onsearch = async (city_name) => {

    try {
    const datalink = await axios.get(
    `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_KEY}&q=${city_name}&format=json`)
  
    this.setState({
    citydata : datalink.data[0],
    error_info : false
    })
    } 
    catch (error) {
    this.setState({
    error_info : true,
    erorrmessage : "reroor here"  
    })}
    
  };

  handleClose = () => {
    this.setState({
      error_info : false 
    })
  }



  render(){
  return(
  <>
  <Formuser 
  onsearch={this.onsearch}  
  />

  <Tableuser 
  display_name={this.state.citydata.display_name} 
  latitude={this.state.citydata.lat}
  longitude={this.state.citydata.lon}
  />
  {this.state.citydata &&
  <Imguser
  latitude={this.state.citydata.lat}
  longitude={this.state.citydata.lon}
  />
  }
  {this.state.error_info && 

  <Modeluser 
  error_info={this.state.error_info}
  handleClose={this.handleClose}
  />



  }
  

  </>
  )
 }

}

export default App;
