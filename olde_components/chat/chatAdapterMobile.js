import React, { Component } from 'react'

export class ChatAdapterMobile extends Component {
  render() {


    return (
    <>
           <a href="/chat" className="msegindecater"  >
              <span className="dateinfo">
                <div className="danum"><p >date</p></div>
                <p className="msnum">9+</p>
              </span>
              <span className="bodyinfo">
                <h1>name_sender</h1>
                <p>hi can you help me</p>
              </span>
              <span className="msegindecater_img">
                <img srcset="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vD36qJsInLtK1kHtazl8T3Z8UX5tnCN7YW8gbEt2HA&s" alt="" />
              </span>
            </a>
            

    </>
    )
  }
}

export default ChatAdapterMobile
