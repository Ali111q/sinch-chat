import React, { useEffect, useState } from "react";
import { videoCall, audioCall } from "../../../../assets/svges/chatsvg";
import useOrientationchange from "../../../../hooks/orientationchange";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { chatAction } from "../../../../store/chat/chatSlice";
const ChatBodyHeader = () => {
  const [call, setCall] = useState(false);
  const [callType, setCallType] = useState("voicecall");
  const [minScreen, setMinScreen] = useState(false);
  const dispatch = useDispatch();
  const isPC = useOrientationchange();
  const { user } = useSelector((state) => state.chat.data.chatData);
  const { full_name, id } = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    window.addEventListener("message", (e) => {
      if (e.data === "min_call_screen") {
        const iframe = document.querySelector("iframe");
        iframe.contentWindow.postMessage("min_call_screen", "*");
        setMinScreen(true);
      } else if (e.data === "remove_min_call_screen") {
        setMinScreen(false);
      } else if (e.data === "end__call") {
        setCall(false);
      }
    });
  }, []);
  return (
    <>
      {call && (
        <div
          class={`call__screen ${minScreen ? "min_call_screen" : ""}`}
          onClick={() => setCall(false)}
          id="call-screen"
        >
          <iframe
            allow="camera;microphone"
            src={`http://127.0.0.1:5500/call/samples/?user_id=${full_name}${id}&rec_id=${user.name}${user.id}&image=${user.image}&name=${user.name}&type=${callType}`}
            frameborder="0"
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </div>
      )}
      <div className="chat-body-header">
        <div className="chat-body-icons">
          <div
            className="videoCall"
            onClick={() => {
              setCallType("videocall");
              setCall(true);
            }}
          >
            {videoCall}
          </div>
          <div
            className="audioCall"
            onClick={() => {
              setCallType("voicecall");
              setCall(true);
            }}
          >
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
