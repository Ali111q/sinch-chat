import React, { useState, useEffect } from "react";
import useOrientationchange from "../../hooks/orientationchange";
import Desctop from "./pc";
import Mobile from "./mob";
import "./Chat.css";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "../../component/home/appBar";
import io from "socket.io-client";
import { channelAction } from "../../store/chat/channel";
import { chatAction } from "../../store/chat/chatSlice";
import Api from "../../helper/api";
import { getChat } from "../../utils/constants";
const ChatScreen = (props) => {
  const data = useSelector((state) => state.channel.data.io);
  const socket = useSelector((state) => state.chat.data.io);
  console.log(socket);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const SOCKET_SERVER_URL = "ws://192.168.0.128:3000"; // Replace with your server URL
  const headers = { authorization: token }; // Replace with your headers
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    const socket = io(SOCKET_SERVER_URL, {
      withCredentials: true,
      extraHeaders: headers,
    });
    socket.on("connect", () => {
      console.log("Connected to server");
      dispatch(channelAction.io(socket));
    });
    socket.on("receivedMessage", (e) => {
      dispatch(chatAction.addMS(e));
      console.log(e);
    });
    socket.on("sentMessage", (e) => {
      dispatch(chatAction.addMS(e));
      console.log(e);
    });
    socket.on("typing", (e) => {
      console.log(e);
      dispatch(channelAction.new({ typing: e }));
    });
    socket.on("deleteMessage", (e) => {
      dispatch(chatAction.removeMS(e));
    });
    socket.on("error", (e) => {
      console.log(e, "errr");
      dispatch(channelAction.new({ error: e }));
    });
    socket.on("sentChat", (e) => {
      console.log("sendChat");
      console.log(e);
      dispatch(chatAction.orderChats({ id: e.id }));
      // dispatch(channelAction.new({sentChat:e}))
    });
    socket.on("receivedChat", (e) => {
      console.log("receivedChat");
      console.log(e);
      dispatch(chatAction.orderChats({ id: e.id, chat: e }));
    });
  }, []);
  useEffect(() => {
    Api({
      url: getChat,
      method: "get",
    }).then((e) => {
      console.log(e);
      dispatch(
        chatAction.setChatsList({
          chats: e.data.data,
        })
      );
    });
  }, []);
  const isPC = useOrientationchange();
  return <>{isPC ? <Desctop /> : <Mobile />}</>;
};
export default ChatScreen;
