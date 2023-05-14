import React, { useState, useEffect } from "react";
import { motion, useDragControls } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setReplay } from "../../../../store/chat/replaySlice";
import { useRef } from "react";
import { leftShare, rightShare } from "../../../../assets/svges/Chat_SVGs";
import Forward from "../Forward/Forward";
import OptionList from "./optionList";
import { chatAction } from "../../../../store/chat/chatSlice";
import SeenMessage from "./SeenMessage";

const TextMessage = ({ data }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const eleRef = useRef(null);
  const dispatch = useDispatch();
  const { messageContextID } = useSelector((state) => state.chat);
  const {
    data: { chats },
  } = useSelector((state) => state.chat);
  const controls = useDragControls();
  const startDrag = (e, info) => {
    var width = eleRef.current.offsetWidth;
    var isSenderCheck = data.is_sender && info.offset.x * -1 > width;
    var isReceiverCheck = !data.is_sender && info.offset.x > width;
    controls.start(e, { snapToCursor: true });
    if (isSenderCheck) {
      dispatch(
        setReplay({
          id: data.id,
          body: data.body,
          time: data.time,
          file_url: data.file_url,

          type: data.type,
          is_sender: data.is_sender,
        })
      );
    } else if (isReceiverCheck) {
      dispatch(
        setReplay({
          id: data.id,
          body: data.body,
          type: data.type,
          file_url: data.file_url,

          is_sender: data.is_sender,
        })
      );
    }
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    if (messageContextID === data.id) {
      dispatch(chatAction.setContextMenuID({ id: null }));
    } else {
      dispatch(chatAction.setContextMenuID({ id: data.id }));
    }
  };
  return (
    <>
      <motion.div
        drag="x"
        onDragEnd={startDrag}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className={`message ${
          (data?.type === 1 || data?.type === 5) && "text"
        } ${data?.is_sender ? "end" : "start"}`}
        ref={eleRef}
        onContextMenu={handleRightClick}
      >
        <div className="message-share-icon">
          {data.is_sender ? rightShare : leftShare}
        </div>

        {data.type === 5 && (
          <p
            className="forward-sender-name"
            style={{ color: !data.is_sender && "rgb(0 0 0 / 69%)" }}
          >
            Forward from <strong>{data?.forward?.user?.name}</strong>
          </p>
        )}
        <h6>
          {data.type === 5 ? data.forward?.body : data?.body}-({data.id})
        </h6>
        <SeenMessage />
        <span>{data?.time}</span>
        <OptionList
          data={data}
          setShowOptions={setShowOptions}
          setShowAlert={setShowAlert}
          showOptions={showOptions}
        />
      </motion.div>
      {showAlert && (
        <Forward
          messageId={data.id}
          data={chats}
          Show={showAlert}
          off={setShowAlert}
        />
      )}
    </>
  );
};

export default TextMessage;
