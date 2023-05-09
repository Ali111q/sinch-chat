import React, { Component } from 'react'
import vedio from '../../assets/icons/video.png'
import voice from '../../assets/icons/Voice.png'
import call from '../../assets/icons/call.png'

export class ChatScreenMobile extends Component {
  render() {
    return (
   <>


    <div className="chat">
        <div className="chatnvb">
          <ul>
            <a href="">
              <button><img srcset={vedio} alt="" /></button>
            </a>
            <a href="">
              <button><img srcset={call} alt="" /></button>
            </a>
          </ul>
          <span className="chusinfo">
            <h1>name</h1>
            <p>date</p>
          </span>
        </div>
        <div className="chatmseg">
          <div className="scrollmsg">
   
          <span className="user">
              <h1 lang="ar" dir="rtl">
                body fhgwrgegfwhuefiuheufhwiufhweufhwuefh wiufhufhweuhfiu
              </h1>
              <p>time(8:01)</p>
            </span>
          </div> 
        </div>
        <div className="chatinput">
          <button className="send"><img src="Send.png" alt="" /></button>
          <input type="text" className="input" />
          <button><img className="butonali" src="Image 2.png" alt="" /></button>
          <button><img className="butonali" src={voice} alt="" /></button>
        </div>
      </div>

   </>
    )
  }
}

export default ChatScreenMobile
