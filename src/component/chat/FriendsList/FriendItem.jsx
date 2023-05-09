import React from "react";
import { useState } from "react";
import { setChatID } from "../../../store/chat/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { chatAction } from "../../../store/chat/chatSlice";
import Api from "../../../helper/api";
import useOrientationchange from "../../../hooks/orientationchange";
import { getMessages } from "../../../utils/constants";
import { useLocation } from "react-router-dom";
import { deleteM } from "../../../assets/svges/Chat_SVGs/index";
const FriendItem = ({ data }) => {
  const io = useSelector((state) => state.channel.data.io);
  const { chatID, userID } = useSelector((state) => state.chat.chatRightMenu);
  const dispatch = useDispatch();
  const { chats, chatData } = useSelector((state) => state.chat.data);
  const isPc = useOrientationchange();
  const location = useLocation();
  const handleClick = () => {
    chatData.chat_id != -1 &&
      chatData.chat_id != data.id &&
      io.send({ command: "leave", channel: chatData.chat_id });
    io.send({ command: "join", channel: data.id });
    const ids = chats.map((e) => {
      return e.chat_id;
    });
    if (ids.includes(data.id)) {
      dispatch(chatAction.selectChat(chats.find((e) => e.chat_id == data.id)));
    } else {
      Api({
        method: "get",
        url: `${getMessages}?id=${data.id}`,
      }).then((e) => {
        dispatch(
          chatAction.selectChat({
            chat_id: data.id,
            user: data.users[0],
            messages: e.data.data,
          })
        );
      });
    }
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    console.log(data);
    if (chatID === null) {
      dispatch(
        chatAction.setChatMenuInfo({
          chatID: data.id,
          userID: data.users[0].id,
        })
      );
    } else {
      dispatch(
        chatAction.setChatMenuInfo({
          chatID: null,
          userID: null,
        })
      );
    }
  };
  const handleDelete = (e) => {
    e.stopPropagation()
    io.send({ command: "chat_delete", user_id: data.users[0].id, id: data.id });
    
    
    dispatch(chatAction.selectChat({
      chat_id: -1,
      user:{
        id: 0,
        image: "",
        name: "",
      },
      messages: [],
    }))
    dispatch(chatAction.deleteChat({id: data.id}))
  };
  return (
    <div
      className={`item ${chatData.chat_id === data.id && 'opened'}`}
      onClick={handleClick}
      onContextMenu={handleRightClick}
    >
      <div className="img_container">
        <img src={data.users[0].image} alt="img" />
      </div>
      <div className="ninfo">
        <h4>{data.users[0].name}</h4>
        <p>{data.last_message.body}</p>
      </div>
      <div className="msgInfo">
        <p>{data.last_message.time}</p>
        {data.unseenCount !== 0 && <span>{data.unseenCount}</span>}
      </div>
      <div className={`chat__menu ${chatID === data.id ? "show" : "hidden"}`}>
        <button onClick={handleDelete}>
          <div>{deleteM}</div>
          <h6 style={{ color: "#fc0005" }}>Delete</h6>
        </button>
      </div>
    </div>
  );
};

export default FriendItem;
