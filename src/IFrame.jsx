import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { callAction } from "./store/chat/call";

const IFrame = () => {
  const { showCall, CallType, showMinScreen } = useSelector(
    (state) => state.call
  );
  const [call, setCall] = useState(false);
  const [callType, setCallType] = useState("voicecall");
  const [minScreen, setMinScreen] = useState(false);
  useEffect(() => {
    setCall(showCall);
    // setCallType(callType);
    // setMinScreen(showMinScreen);
  }, [showCall, callType, showMinScreen]);
  const dispatch = useDispatch();
  const user = JSON.parse(sessionStorage.getItem("userToCall"));
  const { full_name, id } = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    window.addEventListener("message", (e) => {
      if (e.data === "min_call_screen") {
        const iframe = document.querySelector("iframe");
        iframe.contentWindow.postMessage("min_call_screen", "*");
        // dispatch(callAction.setMinScreen(true));
        setMinScreen(true);
      } else if (e.data === "remove_min_call_screen") {
        // dispatch(callAction.setMinScreen(false));
        setMinScreen(false);
      } else if (e.data === "end__call") {
        dispatch(callAction.setShowCall(false));
        setCall(false);
      } else if (e.data === "reciveCall") {
        setCall(true);
        console.log("Reciveced Call");
      }
    });
  }, []);
  return (
    <>
      <div
        class={`call__screen ${minScreen ? "min_call_screen" : ""} ${
          call ? "show__call__screen" : "hide__call_screen"
        }`}
        id="call-screen"
      >
        <iframe
          allow="camera;microphone"
          src={`http://127.0.0.1:5500/call/samples/?user_id=user-${id}&rec_id=user-${user.id}&image=${user.image}&name=${user.name}&type=${callType}`}
          frameborder="0"
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </div>
    </>
  );
};

export default IFrame;
