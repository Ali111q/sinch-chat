import React from "react";
import FriendsList from "../../component/chat/FriendsList/FriendsList";
import AppBar from "../../component/home/appBar";
import "./Chat.css";
import ChatBody from "../../component/chat/ChatBody/ChatBody";
const Desctop = () => {
  return (
    <>
    <AppBar />
    <div className="nchat">
      <div className="ncontainer">
        <div className="chat__body">
          <ChatBody />
        </div>
        <div className="chat__list">
          <FriendsList />
        </div>
      </div>
    </div>
    </>
  );
};

export default Desctop