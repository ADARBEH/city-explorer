import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Formuser from './components/Formuser';
import React, { Component } from 'react';
import axios from 'axios';
import Tableuser from './components/Tableuser';
import Imguser from './components/Imguser';
import Modeluser from './components/Modeluser';
import Carduser from './components/Carduser';
import Cardmovie from './components/Cardmovie.js';







class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      citydata : "",
      display_name : "",
      latitude : "",
      longitude : "",
      erorrmessage : "",
      erorr : false,
      weathardata :[],
      movie :[]
    }

  }






  
  onsearch = async (searchQuery ) => {

  
    const datalink = await axios.get(
    `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_KEY}&q=${searchQuery}&format=json`)
    
    
   
      
    this.setState({
    citydata : datalink.data[0],
    error_info : false,
    latitude : datalink.data[0].lat,
    longitude : datalink.data[0].lon

    })
    console.log(this.state.citydata)


    
    this.secondfun (this.state.latitude,this.state.longitude)
    this.therdfun (searchQuery)

    

  };
  
  secondfun = async ( lat, lon) => {
    const weathar = await axios.get(`http://localhost:3005/weather?lat=${lat}&lon=${lon}`)
    // console.log(weathar.array.forEach(element => {
      
    // });)

    this.setState({
      weathardata:weathar.data,
    })

    console.log(this.state.weathardata)
  }

  therdfun = async ( searchQuery) => {
    const moviedata = await axios.get(`http://localhost:3005/movies?key=${process.env.REACT_APP_MOVIE_API_KEY}&searchQuery=${searchQuery}`)
    console.log(moviedata)

    this.setState({
      movie:moviedata.data,
    })

  }


  
      

  


  



  
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

   {this.state.weathardata &&
   <Tableuser
  display_name={this.state.citydata.display_name} 
  latitude={this.state.citydata.lat}
  longitude={this.state.citydata.lon}

  />
  }
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
  <Carduser 
  weathardata={this.state.weathardata}
  />
  <Cardmovie 
  movie={this.state.movie}
  />

  </>
  )
 }

}

export default App;
