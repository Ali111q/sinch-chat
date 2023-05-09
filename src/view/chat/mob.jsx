import React, { useState , useEffect} from "react";
import ChatBody from "../../component/chat/ChatBody/ChatBody";
import FriendsList from "../../component/chat/FriendsList/FriendsList";
import "./Chat.css";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "../../component/home/appBar";
const Mobile = () => {
  const [showChatBody, setShowChatBody] = useState(false);
  const { chat_id } = useSelector(state=>state.chat.data.chatData)
  useEffect(() => {
    if (chat_id === -1){
      setShowChatBody(false)
    }else{
      setShowChatBody(true)
    }
  })
  return (
    <>
      {showChatBody ? (
        <div className="chat__body mobile">
          <ChatBody setShowChatBody={setShowChatBody} />
        </div>
      ) : (<>
        <AppBar />
        <div className="nchat mobile">
          <div className="ncontainer">
            <div className="chat__list">
              <FriendsList  />
            </div>
          </div>
        </div>
        </>
      )}
    </>
  );
};
export default Mobile