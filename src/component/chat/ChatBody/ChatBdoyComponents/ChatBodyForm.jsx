import { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelRepaly } from "../../../../store/chat/replaySlice";
import { cancle, record, trash } from "../../../../assets/svges/Chat_SVGs";
import img from "../../../../assets/imgs/god.jpg";
import { imgSVG, sendSVG } from "../../../../assets/svges/chatsvg";
import { chatAction } from "../../../../store/chat/chatSlice";
import Api from "../../../../helper/api";
import { uploadAudio, uploadFile } from "../../../../utils/constants";
import ReplayType from "../MessagesType/replayType";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
const ChatBodyForm = () => {
  const replayMessage = useSelector((state) => state.replay);
  const { io, typing } = useSelector((state) => state.channel.data);
  const { user } = useSelector((state) => state.chat.data.chatData);
  const { inputVal, chatData } = useSelector((state) => state.chat.data);
  const dispatch = useDispatch();
  const [recording, setRecording] = useState(false);
  const [time, setTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [showUploadDetails, setShowUploadDetails] = useState(false);
  const [element, setElement] = useState({
    body: null,
    type: null,
    errorMsg: null,
  });
  const [caption, setCaption] = useState('')
  const [file, setFile] = useState(null);
  useEffect(() => {
    if (audioBlob) {
      setAudioBlob(null);
    }
  }, [audioBlob]);

  const startRecording = async () => {
    setAudioBlob(null);
    setMediaRecorder(null);
    setMediaStream(null);
    try {
      const stream = await navigator?.mediaDevices?.getUserMedia({
        audio: true,
      });
      const recorder = new MediaRecorder(stream);
      setMediaStream(stream);
      setMediaRecorder(recorder);

      const audioChunks = [];
      recorder.addEventListener("dataavailable", (event) => {
        audioChunks.push(event.data);
      });

      recorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
        setAudioBlob(audioBlob);
      });

      recorder.start();
      setRecording(true);
    } catch (error) {
      console.error(error);
    }
  };
  const stopRecording = () => {
    mediaRecorder.stop();
    mediaStream.getTracks().forEach((track) => track.stop());
    setRecording(false);
    dispatch(cancelRepaly());
  };

  useEffect(() => {
    setTime(0);
    if (recording) {
      const interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [recording]);
  useEffect(() => {
    audioBlob &&
      Api({
        url: uploadAudio,
        method: "post",
        data: {
          file: audioBlob,
          type: "mp3",
        },
      }).then((e) => {
        console.log(e);
        io.send({
          command: "message",
          userId: chatData.user.id,
          body: e.data.data.file,
          type: 6,
        });
      });
    setAudioBlob(null);
  }, [audioBlob]);
  useEffect(() => {
    setTime(0);
    if (recording) {
      const interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [recording]);
  const handleSend = (e) => {
    e.preventDefault();
    if (inputVal != "") {
      dispatch(chatAction.setVal(""));
      if (replayMessage.id) {
        io.send({
          command: "reply",
          userId: chatData.user.id,
          body: inputVal,
          type: 1,
          replyId: replayMessage.id,
        });
      } else {
        io.send({
          command: "message",
          userId: chatData.user.id,
          body: inputVal,
          type: 1,
        });
      }
      dispatch(chatAction.setVal(""));
      io.send({
        command: "end_typing",
        user_id: localStorage.getItem("id"),
        to: user.id,
        chatId: chatData.chat_id,
      });
      dispatch(cancelRepaly());
    }
  };
  function previewFile(file) {
    if (file.target.files[0]?.type.includes("video")) {
      const video = document.createElement("video");
      const src = URL?.createObjectURL(file.target.files[0]);
      video.src = src;
      video.onloadedmetadata = function () {
        window.URL.revokeObjectURL(video.src);
        const duration = video.duration;
        setElement({
          body: src,
          type: file.target.files[0].type,
          errorMsg:
            duration > 120 ? "يجب ان يكون طول الفديو اقل من دقيقتن" : null,
        });
        setShowUploadDetails(true);
      };
    } else {
      const src = URL.createObjectURL(file.target.files[0]);
      setElement({
        body: src,
        type: file.target.files[0].type,
        errorMsg: null,
      });
      setShowUploadDetails(true);
    }
    setFile(file)
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (replayMessage.id) {
      Api({
        url: uploadFile,
        method: "post",
        data: {
          file: file.target.files[0],
        },
      }).then((e) => {
        io.send({
          command: "reply",
          replyId: replayMessage.id,
          userId: chatData.user.id,
          file_url: e.data.data.file,
          body: caption,
          type: file.target.files[0].type.includes("image")
            ? 2
            : file.target.files[0].type.includes("video")
            ? 3
            : 4,
        });
        setFile(null);
        setShowUploadDetails(false);
        setElement({
          body: null,
          type: null,
          errorMsg: null,
        });
      });
    } else {
      Api({
        url: uploadFile,
        method: "post",
        data: {
          file: file?.target?.files[0],
        },
      }).then((e) => {
        io.send({
          command: "message",
          userId: chatData.user.id,
          file_url: e.data.data.file,
          body: caption,
          type: file.target.files[0].type.includes("image")
            ? 2
            : file.target.files[0].type.includes("video")
            ? 3
            : 4,
        });
        setFile(null);
        setShowUploadDetails(false);
        setElement({
          body: null,
          type: null,
          errorMsg: null,
        });
      });
    }
  }
  const options = useMemo(() => ({
    source:{
      type: "video",
      sources: [{ src: element.body, type: element.type }],
    },
    options:{
      controls: [
        "play-large",
        "play",
        "enabled",
        "fullscreen",
        "progress",
      ],
    }
  }), [element.body])

  return (
    <>
      <div
        className={`chat-body-from ${replayMessage.id !== null && "there-is-replay"}`}
      >
        {typing.typing && (
          <div className="typing">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        {replayMessage.id !== null && (
          <ReplayType
            time={replayMessage.time}
            user={user}
            type={replayMessage.type}
            body={replayMessage.body}
            file_url={replayMessage.file_url}
          />
        )}
        <div className="hform-chat">
          {!recording ? (
            <form className="form-chat-text" onSubmit={handleSend}>
              <div className="media" style={{ position: "relative" }}>
                <input
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    opacity: "0",
                    zIndex: "100",
                    cursor: "pointer",
                  }}
                  type="file"
                  onChange={previewFile}
                />
                <div className="img-svg">{imgSVG}</div>
              </div>
              <input
                value={inputVal}
                type="text"
                onChange={(e) => {
                  dispatch(chatAction.setVal(e.target.value));
                  io.send({
                    command:
                      e.target.value == "" ? "end_typing" : "start_typing",
                    user_id: localStorage.getItem("id"),
                    to: user.id,
                    chatId: chatData.chat_id,
                  });
                }}
              />
            </form>
          ) : (
            <div className="form-chat-voice">
              <div onClick={() => stopRecording()}>{trash}</div>
              <p>
                {Math.floor(time / 60)
                  .toString()
                  .padStart(2, "0")}
                :
                {Math.floor(time - Math.floor(time / 60) * 60)
                  .toString()
                  .padStart(2, "0")}
              </p>
            </div>
          )}
          {!inputVal ? (
            <div>
              <button onClick={recording ? stopRecording : startRecording}>
                {recording ? sendSVG : record}
              </button>
            </div>
          ) : (
            <button onClick={handleSend}>{sendSVG}</button>
          )}
        </div>
      </div>
      {showUploadDetails && (
        <div class="alert" onClick={() => setShowUploadDetails(false)}>
          <div class="map-alert" onClick={(e) => e.stopPropagation()}>
            {element.type.includes("video") ? (
              element.errorMsg ? (
                <h5
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "20vw",
                  }}
                >
                  {element.errorMsg}
                </h5>
              ) : (
                <div className="video-upload-checker">
                  <Plyr
                    {...options}
                  />
                  <form onSubmit={handleSubmit} className="form__upload">
                    <input type="text" placeholder="Caption..." onChange={e => setCaption(e.target.value)} />
                    <button type="submit" className="upload-video-button">
                      ارسال
                    </button>
                  </form>
                </div>
              )
            ) : element.type.includes("image") ? (
              <>
                <div className="img-upload-container">
                  <img src={element.body} alt="" />
                </div>
                <form className="form__upload" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Caption..." onChange={e => setCaption(e.target.value)} />
                  <button type="submit" className="upload-video-button">
                    ارسال
                  </button>
                </form>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBodyForm;
