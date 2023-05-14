import React from "react";
import img from "../../../../assets/imgs/god.jpg";
import { motion, useDragControls } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setReplay } from "../../../../store/chat/replaySlice";
import { useRef } from "react";
import {
  leftShare,
  rightShare,
  send,
  seen,
} from "../../../../assets/svges/Chat_SVGs";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useState } from "react";
import Forward from "../Forward/Forward";
import OptionList from "./optionList";
import { chatAction } from "../../../../store/chat/chatSlice";

const ImgMessage = ({ data }) => {
  const [zoomMode, setZoomMode] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const eleRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);
  const controls = useDragControls();
  const dispatch = useDispatch();
  const { messageContextID } = useSelector((state) => state.chat);

  const {
    data: { chats },
  } = useSelector((state) => state.chat);
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
          file_url: data.type === 5 ? data.forward.file_url : data.file_url,
          type: data.type,
          is_sender: data.is_sender,
        })
      );
    } else if (isReceiverCheck) {
      dispatch(
        setReplay({
          id: data.id,
          body: data.body,
          file_url: data.type === 5 ? data.forward.file_url : data.file_url,
          type: data.type,
          is_sender: data.is_sender,
        })
      );
    }
  };
  const zoomImageMode = (e) => {
    setZoomMode(true);
    e.stopPropagation();
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
        drag={zoomMode ? false : "x"}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onDragEnd={startDrag}
        style={{ touchAction: "none" }}
        className={`message ${
          (data?.type === 2 || data?.type === 5) && "img"
        } ${data?.is_sender ? "end" : "start"} ${
          zoomMode && "zoom__image__mode"
        }`}
        ref={eleRef}
        onClick={() => setZoomMode(false)}
        onContextMenu={handleRightClick}
      >
        <div className="message-share-icon">
          {data.is_sender ? rightShare : leftShare}
        </div>
        {!zoomMode ? (
          <div className="img-message" onClick={zoomImageMode}>
            {data.type === 5 && (
              <p
                className="forward-sender-name"
                style={{ padding: 10, paddingBottom: 0 }}
              >
                Forward from <strong>{data?.forward?.user?.name}</strong>
              </p>
            )}
            <img
              src={data.type === 5 ? data.forward.file_url : data.file_url}
              alt=""
              draggable={false}
            />
            <p>
              {data.type === 5 ? data.forward.body : data.body}{" "}
              {data.is_sender && (
                <div
                  className={`seen__message ${
                    data.is_seen ? "seened" : "notSeen"
                  }`}
                >
                  {data.is_seen ? seen : send}
                </div>
              )}
            </p>
          </div>
        ) : (
          <div className="img-message" onClick={zoomImageMode}>
            <TransformWrapper>
              <TransformComponent>
                <img
                  src={data.type === 5 ? data.forward.file_url : data.file_url}
                  alt=""
                  draggable={false}
                />
              </TransformComponent>
            </TransformWrapper>
          </div>
        )}
        <span>{data?.time}</span>
        <OptionList
          setShowOptions={setShowOptions}
          setShowAlert={setShowAlert}
          data={data}
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

export default ImgMessage;
