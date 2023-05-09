import React, { useEffect, useState } from "react";
import Echo from "laravel-echo";
import axios from "axios";
import god from "./assets/imgs/god.jpg";
function NOT() {
  const [messages, setMessages] = useState([]);
  window.Pusher = require("pusher-js");
  const echo = new Echo({
    broadcaster: "pusher",
    key: "osamah",
    cluster: "mt1",
    wsHost: "192.168.12.196",
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
    authEndpoint: "http://192.168.12.196:8000/api/broadcasting/auth",
    auth: {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });
  echo.connector.pusher.connection.bind("connected", (e) => {
    console.log(e);
  });
  const mytimer = () =>
    setTimeout(() => {
      document.getElementById(
        `NotificationsCss${messages.length}`
      ).style.opacity = "0";
      document.getElementById(
        `NotificationsCss${messages.length}`
      ).style.display = "none";
      setMessages([]);
    }, 5000);
  echo
    .private(`App.Models.User.${localStorage.getItem("id")}`)
    .notification((e) => {
      var list = [...messages];
      list.push(e);
      console.log("Bitch");
      setMessages(list);
      mytimer();
    });
  return (
    <>
      {messages.map((e, i) => {
        return (
          <>
            <div
              onMouseEnter={() => {}}
              style={{ opacity: "1", display: "flex", zIndex: 10 + i }}
              id={"NotificationsCss" + i}
              className="NotificationsCss"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.5 11.5">
                <path
                  id="Arrow"
                  d="M6.28,10.22A.75.75,0,0,1,5.22,11.28l-5-5a.75.75,0,0,1,0-1.061l5-5A.75.75,0,0,1,6.28,1.28L1.811,5.75Z"
                  transform="translate(0 0)"
                  fill="#2a2d37"
                />
              </svg>
              <div className="NotificationsCsscon">
                <span>
                  <h1>{e.header}</h1>
                  <p>{e.body}</p>
                </span>
                <div className="NotificationsCssimg">
                  <img src={e.from_user.image} />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
export default NOT;
