import React from "react";
import FriendsList from "../../component/chat/FriendsList/FriendsList";
import "./Chat.css";
import ChatBody from "../../component/chat/ChatBody/ChatBody";
const Desctop = () => {
  return (
    <>
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

export default Desctop;
