import React, { Component } from 'react'
import ChatScreen from '../components/chat/chatScreen'
import ChatList from '../components/chat/chatList'
import DeviceOrientation, { Orientation } from 'react-screen-orientation'
import ChatListMobile from '../components/chat/chatListMobile'
import ChatScreenMobile from '../components/chat/chatScreenMobile'
import AppBar from '../components/home/appBar'

export class Chat extends Component {
  render() {
    return (
    <>
      <DeviceOrientation lockOrientation={'landscape'}>
      <Orientation orientation='landscape' alwaysRender={false}>
      <AppBar/>
    
    <div className="mom">
    <ChatScreen/>
    <ChatList/>
    </div>
    </Orientation>
    <Orientation orientation='portrait' alwaysRender={false}>


<ChatScreenMobile/>
</Orientation>
    </DeviceOrientation>
    
    </>
    )
  }
}

export default Chat
