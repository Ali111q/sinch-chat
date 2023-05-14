import { useState, useRef } from "react";
import { motion, useDragControls } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setReplay } from "../../../../store/chat/replaySlice";
import {
  leftShare,
  rightShare,
  send,
  seen,
} from "../../../../assets/svges/Chat_SVGs";
import Forward from "../Forward/Forward";
import OptionList from "./optionList";
import { chatAction } from "../../../../store/chat/chatSlice";
import useOrientationchange from "../../../../hooks/orientationchange";
const ReplayMessage = ({ data }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const controls = useDragControls();
  const dispatch = useDispatch();
  const { messageContextID } = useSelector((state) => state.chat);
  const isPC = useOrientationchange();
  const eleRef = useRef();
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
        onDragEnd={startDrag}
        style={{
          touchAction: "none",
          marginTop: !isPC && data.reply.type === 2 && "20vw",
        }}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className={`message text ${
          (data?.type === 1 || data?.type === 5) && "replay"
        } ${data?.is_sender ? "end" : "start"}`}
        onContextMenu={handleRightClick}
      >
        <div className="message-share-icon">
          {data.is_sender ? rightShare : leftShare}
        </div>
        <div
          className="replay-msg"
          style={{ padding: data.reply.type === 2 && 0 }}
        >
          {data.reply.type === 1 ? (
            <p>{data.reply.body}</p>
          ) : data.reply.type === 2 ? (
            <div className="replay-msg-img">
              <img draggable={false} src={data.reply.file_url} />
            </div>
          ) : data.reply.type === 6 ? (
            <p>رسالة صوتية</p>
          ) : data.reply.type === 3 ? (
            <p>فديو</p>
          ) : (
            <p>ملف</p>
          )}
        </div>

        <h6>
          {data.type === 5 ? data.forward?.body : data?.body}
          {data.is_sender && (
            <div
              className={`seen__message ${data.is_seen ? "seened" : "notSeen"}`}
            >
              {data.is_seen ? seen : send}
            </div>
          )}
        </h6>
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

export default ReplayMessage;
