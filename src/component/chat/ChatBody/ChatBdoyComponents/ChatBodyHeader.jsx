import React, { useEffect, useState } from "react";
import { videoCall, audioCall } from "../../../../assets/svges/chatsvg";
import useOrientationchange from "../../../../hooks/orientationchange";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { chatAction } from "../../../../store/chat/chatSlice";
import { callAction } from "../../../../store/chat/call";
const ChatBodyHeader = () => {
  const dispatch = useDispatch();
  const isPC = useOrientationchange();
  const { user } = useSelector((state) => state.chat.data.chatData);
  function handleCall(type) {
    dispatch(callAction.setShowCall({ showCall: true }));
    sessionStorage.setItem("userToCall", JSON.stringify(user));
    const iframe = document.querySelector("iframe");
    iframe.contentWindow.postMessage("start_call", "*");
    console.log(iframe);
  }
  return (
    <>
      <div className="chat-body-header">
        <div className="chat-body-icons">
          <div className="videoCall" onClick={handleCall}>
            {videoCall}
          </div>
          <div className="audioCall" onClick={handleCall}>
            {audioCall}
          </div>
        </div>
        <h4>{user && user.name}</h4>
        <div className="chat-body-icons">
          {isPC ? (
            <>
              <div className="videoCall">{videoCall}</div>
              <div className="audioCall">{audioCall}</div>
            </>
          ) : (
            <div
              onClick={() =>
                dispatch(
                  chatAction.selectChat({
                    chat_id: -1,
                    user: null,
                    messages: null,
                  })
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="43"
                viewBox="0 0 50 43"
              >
                <g id="Back" transform="translate(62 7)">
                  <rect
                    id="BG"
                    width="50"
                    height="43"
                    transform="translate(-62 -7)"
                    fill="none"
                  />
                  <path
                    id="Arrow"
                    d="M.22,10.22A.75.75,0,0,0,1.28,11.28l5-5a.75.75,0,0,0,0-1.061l-5-5A.75.75,0,0,0,.22,1.28l4.47,4.47Z"
                    transform="translate(-43 9)"
                    fill="#2a2d37"
                  />
                </g>
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatBodyHeader;
