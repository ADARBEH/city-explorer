import React from "react";



class Imguser extends React.Component {
render(){
    return(
   <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.props.latitude},${this.props.longitude}&zoom=7`} className="img-map"></img>       
    )
}
}

export default Imguser;
