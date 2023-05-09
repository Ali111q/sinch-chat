import React, { useRef, useEffect} from "react";
import { setReplay } from "../../../../store/chat/replaySlice";
import {
  copy,
  replayIcon,
  forward,
  deleteM,
  download
} from "../../../../assets/svges/Chat_SVGs";
import { useSelector, useDispatch } from "react-redux";
function OptionList({ showOptions, data, setShowOptions, setShowAlert }) {
  const {messageContextID} = useSelector(state => state.chat)
  useEffect(() => {
    setShowOptions(messageContextID === data.id);
  })
  const { chatData } = useSelector((state) => state.chat.data);
  const { io } = useSelector((state) => state.channel.data);
  const dispatch = useDispatch()
  const copyText = async (text) => {
    if ("clipboard" in navigator) {
      setShowOptions(false);
      return await navigator.clipboard.writeText(text);
    } else {
      setShowOptions(false);
      return document.execCommand(text, true, text);
    }
  };
  const handleReplay = () => {
    dispatch(
      setReplay({
        id: data.id,
        body: data.body,
        file_url: data.file_url,
        type: data.type,
        is_sender: data.is_sender,
      })
    );
    setShowOptions(false);
  };
  const handleForward = () => {
    setShowOptions(false);
    setShowAlert(true);
  };
  const handleDownload = () => {
    downloadRef?.current?.click()
    setShowOptions(false)
  }
  const handleDelete = () => {
    io.send({
      command: "message_delete",
      user_id: chatData.user.id,
      chat_id:chatData.chat_id,
      id:data.id
    });
    setShowOptions(false);
  }
  const downloadRef = useRef(null)
  return (
    <div className={`message__menu ${showOptions ? "show" : "hide"}`}>
      {data.type === 1 && <button onClick={() => copyText(data.body)}>
        <div>{copy}</div>
        <h6>Copy</h6>
      </button>}
      {(data.type === 2 || data.type === 3) && <button onClick={handleDownload}>
        <a href={data.body} download ref={downloadRef} />
          <div>{download}</div>
          <h6>Download</h6>
        </button>
      }

      <button onClick={handleReplay}>
        <div>{replayIcon}</div>
        <h6>Reply</h6>
      </button>
      <button onClick={handleForward}>
        <div>{forward}</div>
        <h6>Forward</h6>
      </button>
      {data.is_sender && (
        <button
          onClick={handleDelete}
        >
          <div>{deleteM}</div>
          <h6 style={{ color: "#fc0005" }}>Delete</h6>
        </button>
      )}
    </div>
  );
}

export default OptionList;
