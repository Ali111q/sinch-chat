import React, { Component } from 'react'
import ChatScreen from '../components/chat/chatScreen'
import ChatList from '../components/chat/chatList'
import DeviceOrientation, { Orientation } from 'react-screen-orientation'
import ChatListMobile from '../components/chat/chatListMobile'
import ChatScreenMobile from '../components/chat/chatScreenMobile'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export class Err extends Component {
  constructor(){
    super()
    this.state={
     prog:0
      
    }
  }
  componentDidMount(){
  
  }
  render() {
    return (
    <>

<div style={{ width: 200, height: 200 ,justifyContent:'center' ,justifySelf:'center' }}>
  <CircularProgressbar value={this.state.prog} />
</div>
    </>
    )
  }
}

export default Err