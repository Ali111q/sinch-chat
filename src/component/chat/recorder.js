import React, { useState,useEffect } from "react";
import Recorder from "recorder-js";
import axios from "axios";
import { ReactMic } from "react-mic";
import { url } from "../../utils/constants";
import stop from "../../assets/imgs/stop.gif";
import start from "../../assets/imgs/start.gif";

function AppRecorder(props) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedData, setRecordedData] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const startRecording = () => {
    setIsRecording(true);
    setElapsedTime(0);
  };
  useEffect(() => {
  },[recordedData])
  useEffect(() => {
    let intervalId;
    if (isRecording) {
      intervalId = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRecording]);
  const stopRecording = () => {
    setIsRecording(false);
  };
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  const onData = (recordedBlob) => {};

  const onStop = (recordedBlob) => {
    setRecordedData(recordedBlob.blob);
  };

  const uploadAudio = () => {
    const formData = new FormData();
    formData.append("file", recordedData, "recording.webm");
    axios
      .post(`${url}/chat-upload`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
      })
      .catch((error) => {
      });
  };

  return (
    <div>
      <div 
      style={{display:"none"}}>
        <ReactMic
        record={isRecording}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
      </div>
      {recordedData && (
        <div>
          <audio src={URL.createObjectURL(recordedData)} controls />
        </div>
      )}
      <div className="Recorder">
        {!isRecording&&<button
          onClick={startRecording}
          className={"inputVoisButton"}
          disabled={isRecording}
        >
          <span>
            <img src={start} alt="loading..." />
          </span>
        </button>}
        {isRecording&&<button
          onClick={stopRecording}
          style={{backgroundColor:"#EC1C2E"}}
          className={"inputVoisButton"}
          disabled={!isRecording}
        >
          {" "}
          <span>
            {formatTime(elapsedTime)}
            <img src={stop} alt="loading..." />
            
          </span>
        </button>}
      </div>
    </div>
  );
}

export default AppRecorder;
