import React, { useEffect } from "react";
import "./ChatBody.css";
import useOrientationchange from "../../../hooks/orientationchange";
import { useSelector } from "react-redux";
import ChatBodyHeader from "./ChatBdoyComponents/ChatBodyHeader";
import ChatBodyMessages from "./ChatBdoyComponents/ChatBodyMessages";
import ChatBodyForm from "./ChatBdoyComponents/ChatBodyForm";

const ChatBody = () => {
  const isPC = useOrientationchange();
  const replayMessage = useSelector((state) => state.replay);
  const { chat_id } = useSelector(state=>state.chat.data.chatData)
  const {typing} = useSelector(state=>state.channel.data)
  return (
    <>
    {chat_id!=-1&&<div
      className={`chat-body-container ${!isPC && "mobile"} ${
        replayMessage.body && "replay-container-body"
      } ${typing && "there-is-typing"}`}
    >
      <ChatBodyHeader />
      <ChatBodyMessages />
      <ChatBodyForm />
    </div>}
    </>
    
  );
};

export default ChatBody;
