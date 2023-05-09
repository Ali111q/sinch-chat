import React, { Component } from 'react'
import ChatAdapterMobile from './chatAdapterMobile'
import search from '../../assets/icons/search.png'
import { Route , Router } from 'react-router-dom'


export class ChatListMobile extends Component {
    render() {
        return (
            <>
                <div className="chatlist">
                    <div className="chatserch">
                        <button><img srcset={search} alt="" /></button>
                        <input type="text" />
                    </div>
                   
                        <div className="listscroll" >
                      
                    <ChatAdapterMobile></ChatAdapterMobile>

                        </div>

                </div>
            </>
        )
    }
}

export default ChatListMobile
