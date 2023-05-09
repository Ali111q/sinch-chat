import React, { Component } from 'react'
import AppBar from '../components/home/appBar'
import Profileinfo from '../components/profile/profileinfo'
import HighLights from '../components/profile/highLights'
import ProfilePost from '../components/profile/profilePost'
import DeviceOrientation, { Orientation } from 'react-screen-orientation'
import Footer from '../components/home/footer'
import ProfileinfoMobile from '../components/profile/profileinfoMobile'
import HighLightsMobile from '../components/profile/highLightsMobile'
import ProfilePostsMobile from '../components/profile/profilePostsMobile'
import { Route } from 'react-router-dom'


export class Profile extends Component {
  constructor(){
    this.state={
      data:''
    }
  }
  async componentDidMount(){
    const response = await fetch('');
    const json = await response.json();
    this.setState({ items: json });
       console.log(this.state.items);
    
  }

  render() {
    return (
     <>
     <DeviceOrientation lockOrientation={'landscape'}>
        <Orientation  orientation='landscape' alwaysRender={false}>
     <AppBar/>
        <Profileinfo/>
        <HighLights/>
        <ProfilePost/></Orientation>
        <Orientation  orientation='portrait' alwaysRender={false}>
            <ProfileinfoMobile/>
             <HighLightsMobile/> 
             <ProfilePostsMobile/>
            <Footer/>
           
</Orientation>
        </DeviceOrientation>
     </>
    )
  }
}

export default Profile
