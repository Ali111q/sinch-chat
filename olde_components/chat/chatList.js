import React, { Component } from 'react'
import ChatAdapter from './chatAdapter'

export class ChatList extends Component {
  render() {
    return (
      <><div class="chatlist">
      <div class="chatserch">
        <button><img src="search.png" alt="" /></button>
        <input type="text" />
      </div>
       <div className="minscrolch"id="style-1">
          <div className="listscroll" >
<ChatAdapter/>
          </div>
        </div>
        </div>
      </>
    )
  }
}

export default ChatList
