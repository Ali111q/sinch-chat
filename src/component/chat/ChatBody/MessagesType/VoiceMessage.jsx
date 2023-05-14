import React, { useEffect, useRef } from "react";
import { useState } from "react";
import WaveSurfer from "wavesurfer.js";
import {
  leftShare,
  play,
  rightShare,
  stop,
  seen,
  send,
} from "../../../../assets/svges/Chat_SVGs";
import { motion, useDragControls } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setReplay } from "../../../../store/chat/replaySlice";
import { getAudio } from "../../../../utils/constants";
import Forward from "../Forward/Forward";
import OptionList from "./optionList";
import { chatAction } from "../../../../store/chat/chatSlice";

function VoiceMessage({ data }) {
  const [showOptions, setShowOptions] = useState(false);
  const controls = useDragControls();
  const [showAlert, setShowAlert] = useState(false);
  const { messageContextID } = useSelector((state) => state.chat);
  const eleRef = useRef();
  const dispatch = useDispatch();
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
          file_url: data.file_url,
          type: data.type,
          is_sender: data.is_sender,
        })
      );
    } else if (isReceiverCheck) {
      dispatch(
        setReplay({
          id: data.id,
          file_url: data.file_url,
          type: data.type,
          is_sender: data.is_sender,
        })
      );
    }
  };
  const wavesurferRef = useRef(null);
  const [wave, setWave] = useState(null);
  const [played, setPlayed] = useState(false);
  const [time, setTime] = useState("00:00");
  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: wavesurferRef.current,
      waveColor: data.is_sender ? "#F6F6F7" : "#626262",
      progressColor: data.is_sender ? "#333" : "#0199EC",
      responsive: true,
      hideScrollbar: true,
      height: 50,
      barWidth: 5,
      barRadius: 6,
      xhr: {
        method: "GET",
        mode: "cors",
      },
    });

    wavesurfer.load(
      `${getAudio}?file_name=${data.type === 5 ? data.forward.body : data.body}`
    );
    setWave(wavesurfer);
    wavesurfer.on("ready", () => {
      setTime(
        `${Math.floor(wavesurfer.getDuration() / 60)
          .toString()
          .padStart(2, "0")}:${Math.floor(
          wavesurfer.getDuration() -
            Math.floor(wavesurfer.getDuration() / 60) * 60
        )
          .toString()
          .padStart(2, "0")}`
      );
    });
    wavesurfer.on("finish", () => {
      setPlayed(false);
    });
    return () => wavesurfer.destroy();
  }, [data]);

  const handleClick = () => {
    wave.playPause();
    setPlayed(wave.isPlaying());
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
        style={{ touchAction: "none", position: "relative" }}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onDragEnd={startDrag}
        className={`voice-message-container ${
          data.is_sender ? "end" : "start"
        }`}
        onContextMenu={handleRightClick}
      >
        <div
          className="message voice-message"
          style={{ paddingTop: data.type === 5 && 30 }}
        >
          {data.type === 5 && (
            <p className="forward-sender-name">
              Forward from <strong>{data?.forward?.user?.name}</strong>
            </p>
          )}
          <div className="message-share-icon">
            {data.is_sender ? rightShare : leftShare}
          </div>
          <button onClick={handleClick}>
            {played
              ? stop(data.is_sender ? "#fff" : "#0199ec")
              : play(data.is_sender ? "#fff" : "#0199ec")}
          </button>

          <div className="voice">
            <div ref={wavesurferRef} />
          </div>
          <p className="voice-tiem">{time}</p>
          {data.is_sender && (
            <div
              style={{ position: "absolute", bottom: 7, right: 15 }}
              className={`seen__message ${data.is_seen ? "seened" : "notSeen"}`}
            >
              {data.is_seen ? seen : send}
            </div>
          )}
        </div>
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
}

export default VoiceMessage;
