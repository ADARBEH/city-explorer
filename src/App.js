import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Formuser from './components/Formuser';
import React, { Component } from 'react';
import axios from 'axios';
import Tableuser from './components/Tableuser';
import Imguser from './components/Imguser';
import Modeluser from './components/Modeluser';
import Carduser from './components/WeatherDay';
import Cardmovie from './components/Movie.js';
import './Style.css';








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
      movie :[],
      showdata : false
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
    const weathar = await axios.get(`https://server-adarbeh.herokuapp.com/weather?lat=${lat}&lon=${lon}`)
   
    this.setState({
      weathardata:weathar.data,
      showdata : true

    })

    console.log(this.state.weathardata)
  }

  therdfun = async ( searchQuery) => {
    const moviedata = await axios.get(`https://server-adarbeh.herokuapp.com/movies?key=${process.env.REACT_APP_MOVIE_API_KEY}&searchQuery=${searchQuery}`)
    console.log(moviedata)

    this.setState({
      movie:moviedata.data,
      showdata : true

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

  <p className="test-nav"  > city searching</p>

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
  {this.state.showdata &&

  <Carduser 
  weathardata={this.state.weathardata}
  />
  }

{this.state.showdata &&

  <Cardmovie 
  movie={this.state.movie}
  />
}
  
  </>
  )
 }

}

export default App;
