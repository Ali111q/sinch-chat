import React, { useMemo, useState } from "react";
// import video from "../../../../assets/video/2pac.mp4";
import video from "../../../../assets/video/2pac.mp4";
import { motion, useDragControls } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setReplay } from "../../../../store/chat/replaySlice";
import { useRef } from "react";
import { leftShare, rightShare } from "../../../../assets/svges/Chat_SVGs";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { useEffect } from "react";
import Forward from "../Forward/Forward";
import OptionList from "./optionList";
import { chatAction } from "../../../../store/chat/chatSlice";

const VideoMessage = ({ data }) => {
  const plyrProps = useMemo(
    () => ({
      source: {
        type: "video",
        sources: [
          {
            src: data.type === 5 ? data?.forward?.file_url : data.file_url,
            type: "video/mp4",
          },
        ],
      },
      options: {
        clickToPlay: true,
        clickToPause: true,
        controls: ["play-large", "play", "enabled", "fullscreen"],
      },
    }),
    [data.file_url, data?.forward?.file_url]
  );
  const [showOptions, setShowOptions] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const eleRef = useRef(null);
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
          file_url: data.file_url,

          type: data.type,
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
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onDragEnd={startDrag}
        className={`message video ${data.type === 2 && "img"} ${
          data?.is_sender ? "start" : "end"
        }`}
        ref={eleRef}
        onContextMenu={handleRightClick}
      >
        <div className="message-share-icon">
          {data.is_sender ? rightShare : leftShare}
        </div>
        <div className="img-message">
          {data.type === 5 && (
            <p className="forward-sender-name">
              Forward from <strong>{data?.forward?.user?.name}</strong>
            </p>
          )}
          <Plyr {...plyrProps} />
          {data.type === 5 ? <p>{data.forward.body}</p> : <p>{data.body}</p>}
        </div>
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

export default VideoMessage;
