import { React, useState, useRef } from "react";
import AppRecord from "./recorder";
import { url } from "../../utils/constants";
import axios from "axios";
function InputChat(props) {
  const [isrecord, setisrecord] = useState(false);
  const [msg, setmsg] = useState("");
  const [voise, setvoise] = useState(false);
  const inputRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form behavior
    // add code to handle message submission
    document.getElementById("ChatBodyCONMSGChatBodyCONMSG").scrollTo(0, 1000);
    if (isrecord) {
      props.lodingData({
        body: voise,
        type: 4,
      });
      const formData = new FormData();
      formData.append("file", voise, "recording.webm");
      axios
        .post(`${url}/chat-upload`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          props.lodingData(false);
          props.replayData == false
            ? props.ws.send(
                JSON.stringify({
                  command: "message",
                  user: props.usetId,
                  body: response.data.data.file,
                  type: 4,
                })
              )
            : props.ws.send(
                JSON.stringify({
                  command: "message",
                  user: props.usetId,
                  body: response.data.data.file,
                  type: 4,
                  replyId: props.replayData.id,
                })
              );
        })
    } else {
      props.replayData == false
        ? msg !== "" &&
          props.ws.send(
            JSON.stringify({
              command: "message",
              user: props.usetId,
              body: msg,
              type: 1,
            })
          )
        : msg !== "" &&
          props.ws.send(
            JSON.stringify({
              command: "message",
              user: props.usetId,
              body: msg,
              type: 1,
              replyId: props.replayData.id,
            })
          );
    }
    setmsg(""); // clear input field
    props.setreplayData(false);
    inputRef.current.focus(); // set focus back to the input field
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="ChatBodyCONinput">
        {props.replayData && (
          <div className="ChatBodyCONinputreplay">
            <span>
              <h1>{props.userName}</h1>
              <p>{props.replayData.body}</p>
              <a className="ChatBodyCONinputreplaybefore"></a>
            </span>
            <svg
              onClick={(e) => {
                props.setreplayData(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13.828 13.828"
            >
              <g
                id="Group_118776"
                data-name="Group 118776"
                transform="translate(-327.086 -1098.086)"
              >
                <line
                  id="Line_48"
                  data-name="Line 48"
                  x2="11"
                  y2="11"
                  transform="translate(328.5 1099.5)"
                  fill="none"
                  stroke="#f7227f"
                  stroke-linecap="round"
                  stroke-width="2"
                />
                <path
                  id="Path_54415"
                  data-name="Path 54415"
                  d="M11,0,8.25,2.75h0L5.844,5.156,0,11"
                  transform="translate(328.5 1099.5)"
                  fill="none"
                  stroke="#f7227f"
                  stroke-linecap="round"
                  stroke-width="2"
                />
              </g>
            </svg>
          </div>
        )}
        <div className="ChatBodyCONinputdiv">
          <button
            type="submit"
            style={{ border: "0", backgroundColor: "transparent" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32.523"
              height="32.523"
              viewBox="0 0 32.523 32.523"
              id="Send222"
            >
              <path
                d="M.649.669A2.223,2.223,0,0,1,2.869.09L21.378,5.473a2.207,2.207,0,0,1,1.591,1.749A2.591,2.591,0,0,1,21.816,9.64L16.029,13.2a1.5,1.5,0,0,1-1.851-.222L7.551,6.306a.844.844,0,0,0-1.219,0,.877.877,0,0,0,0,1.227L12.97,14.2a1.522,1.522,0,0,1,.222,1.861L9.656,21.909A2.2,2.2,0,0,1,7.747,23a2.389,2.389,0,0,1-.288-.012,2.242,2.242,0,0,1-1.875-1.6L.1,2.9A2.259,2.259,0,0,1,.649.669"
                transform="translate(0 16.261) rotate(-45)"
                fill="#0199ec"
              />
            </svg>
          </button>
          {isrecord ? (
            <AppRecord data={setvoise} />
          ) : (
            <input
              value={msg}
              ref={inputRef}
              onChange={(e) => {
                setmsg(e.target.value);
              }}
              name="message"
            />
          )}
          {msg == "" && (
            <span>
              {!isrecord && (
                <div className="fileInput">
                  <input
                    onChange={(e) => {
                      props.lodingData({
                        date: "loding...",
                        body: URL.createObjectURL(e.target.files[0]),
                        type: e.target.files[0].type.includes("image")
                          ? 2
                          : e.target.files[0].type.includes("video")
                          ? 3
                          : 5,
                      });
                      const formData = new FormData();
                      formData.append("file", e.target.files[0]);
                      axios
                        .post(`${url}/chat-upload`, formData, {
                          headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                              "token"
                            )}`,
                          },
                        })
                        .then((k) => {
                          props.lodingData(false);
                          props.replayData == false
                          ? 
                          props.ws.send(
                            JSON.stringify({
                              command: "message",
                              user: props.usetId,
                              body: k.data.data.file,
                              type: e.target.files[0].type.includes("image")
                                ? 2
                                : e.target.files[0].type.includes("video")
                                ? 3
                                : 5,
                            })
                            )
                          : props.ws.send(
                            JSON.stringify({
                              command: "message",
                              user: props.usetId,
                              body: k.data.data.file,
                              replyId: props.replayData.id,
                              type: e.target.files[0].type.includes("image")
                                ? 2
                                : e.target.files[0].type.includes("video")
                                ? 3
                                : 5,
                            })
                            );
                        });
                    }}
                    type={"file"}
                  />
                  <svg
                    style={{ zIndex: "1" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                  >
                    <g
                      id="Image_2"
                      data-name="Image 2"
                      transform="translate(0.41 0.205)"
                    >
                      <path
                        id="Image_2-2"
                        data-name="Image 2"
                        d="M6.516,23A6.328,6.328,0,0,1,1.79,21.1,6.953,6.953,0,0,1,0,16.2V6.8A6.95,6.95,0,0,1,1.793,1.9,6.329,6.329,0,0,1,6.516,0h9.967A6.328,6.328,0,0,1,21.21,1.9,6.953,6.953,0,0,1,23,6.8V16.2A6.953,6.953,0,0,1,21.21,21.1,6.331,6.331,0,0,1,16.483,23Zm0-1.728h9.966a4.649,4.649,0,0,0,3.494-1.382A5.269,5.269,0,0,0,21.272,16.2v-.884l-.056-.05c-.12-.111-.248-.232-.4-.379l-.8-.774a9.752,9.752,0,0,0-1.776-1.432,1.846,1.846,0,0,0-2.513.667l-.144.194c-.048.067-.1.138-.149.217l-.45.714a5.95,5.95,0,0,1-2.293,2.5A2.913,2.913,0,0,1,9.476,16.8l-.5-.318L8.548,16.2a3.974,3.974,0,0,0-.582-.311c-.771-.323-1.456.034-2.4,1.156L3.487,19.587l-.348.421A4.687,4.687,0,0,0,6.516,21.272ZM1.728,6.8V16.2a6.125,6.125,0,0,0,.414,2.3l1.323-1.606.584-.72c1.472-1.823,2.82-2.61,4.586-1.87a5.43,5.43,0,0,1,.791.415l.76.491c.759.48,1.12.55,1.675.249A3.779,3.779,0,0,0,13.226,14l.345-.55.235-.377a9.593,9.593,0,0,1,.545-.791,3.552,3.552,0,0,1,4.773-1.09,11.433,11.433,0,0,1,2.147,1.727V6.8a5.26,5.26,0,0,0-1.295-3.693,4.643,4.643,0,0,0-3.493-1.383H6.516C3.608,1.728,1.728,3.721,1.728,6.8ZM4.912,7.821A2.991,2.991,0,1,1,7.9,10.812,2.995,2.995,0,0,1,4.912,7.821Zm1.728,0A1.263,1.263,0,1,0,7.9,6.557,1.264,1.264,0,0,0,6.641,7.821Z"
                        transform="translate(-0.41 -0.205)"
                        fill="#2a2d37"
                      />
                    </g>
                  </svg>
                </div>
              )}
              <div className="fileInput">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="23"
                  onClick={() => {
                    setisrecord((e) => !e);
                  }}
                  viewBox="0 0 18 23"
                >
                  <path
                    id="Voice"
                    d="M8.18,22.253l-.007-.118V19.717A9.257,9.257,0,0,1,0,10.348a.847.847,0,0,1,.828-.865.847.847,0,0,1,.827.865A7.516,7.516,0,0,0,9,18.026a7.516,7.516,0,0,0,7.345-7.678.829.829,0,1,1,1.655,0,9.257,9.257,0,0,1-8.172,9.369v2.418a.827.827,0,0,1-1.648.118Zm.681-6.825A4.987,4.987,0,0,1,3.993,10.34V5.088A4.987,4.987,0,0,1,8.861,0H9.14a4.986,4.986,0,0,1,4.867,5.088V10.34A4.986,4.986,0,0,1,9.14,15.428ZM5.649,5.088V10.34A3.291,3.291,0,0,0,8.861,13.7H9.14a3.291,3.291,0,0,0,3.212-3.358V5.088A3.291,3.291,0,0,0,9.14,1.731H8.861A3.291,3.291,0,0,0,5.649,5.088Z"
                    fill="#2a2d37"
                  />
                </svg>
              </div>
            </span>
          )}
        </div>
      </form>
    </>
  );
}

export default InputChat;
