import React, { Component } from 'react'
import MapPicker from "react-google-map-picker";
export default class Map_controller extends Component {
    constructor(){ 
        super()
        this.state = {
     location: { lat: 10, lng: 106 },
     zoom : 10,
     rep:1
    }

    }   
     handleChangeLocation(lat, lng) {
        this.setState({location:{ lat:lat , lng: lng }});
      }
     handleChangeZoom(newZoom) {
        this.setState({zoom:newZoom});
      }
      componentDidMount(){
      }
  render() {


    return (<>
        <MapPicker
          defaultLocation={this.state.location}
          zoom={this.state.zoom}
          style={{height:"70%",width:"100%"}}
          onChangeLocation={(lat,lng)=>{this.handleChangeLocation(lat,lng)}}
          onChangeZoom={(e)=>{this.handleChangeZoom(e)}}
          apiKey="AIzaSyAkBhTU6Tc8FNdu64ZRG4rPm2bin7H7OOI"
        />
      </>
    );


  }
}

