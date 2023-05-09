import { React, useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import god from "../../assets/google-docs.png";
import Draggable from "react-draggable";
import useOrientationchange from "../../hooks/orientationchange";
function Message(props) {
  const data = props.data;
  const is_sender = props.is_sender;
  const type = data.type;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isPC = useOrientationchange();
  const handleStop = (e) => {
    if (e > 40) {
      setPosition({ x: 0, y: 0 });
      props.setreplayData(data);
    }
  };
  return (
    <>
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={position}
        bounds={{ top: 0, left: 0, right: 50, bottom: 0 }}
        onDrag={(e, x) => {
          handleStop(x.x);
        }}
      >
        <div
          className="handle"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {type == 1 ? (
            <span id={is_sender && "is_senderspan"}>
              <h1 id={is_sender && "is_senderh1"}>
                {data.reply_message && (
                  <>
                    {data.reply_message.type == 1 ? (
                      <a>
                        <h5>{props.userName}</h5>
                        <h4>{data.reply_message.body}</h4>
                        <a1
                          style={{ right: "0.2vw", height: "80%" }}
                          className="ChatBodyCONinputreplaybefore"
                        ></a1>
                      </a>
                    ) : data.reply_message.type == 2 ? (
                      <a className="ChatBodyCONMSGspanh1a">
                        <h5>{props.userName}</h5>
                        <img
                          id="ChatBodyCONMSGspanh1ah4img"
                          src={data.reply_message.body}
                        />
                        <a1
                          style={{ right: "0.2vw", height: "80%" }}
                          className="ChatBodyCONinputreplaybefore"
                        ></a1>
                      </a>
                    ) : data.reply_message.type == 3 ? (
                      <a className="ChatBodyCONMSGspanh1a">
                        <h5>{props.userName}</h5>
                        <video
                          id="ChatBodyCONMSGspanh1ah4img"
                          src={data.reply_message.body}
                        />
                        <a1
                          style={{ right: "0.2vw", height: "80%" }}
                          className="ChatBodyCONinputreplaybefore"
                        ></a1>
                      </a>
                    ) : data.reply_message.type == 4 ? (
                      <a className="ChatBodyCONMSGspanh1a">
                        <h5>{props.userName}</h5>
                        <h4>voice note</h4>
                        <a1
                          style={{ right: "0.2vw", height: "80%" }}
                          className="ChatBodyCONinputreplaybefore"
                        ></a1>
                      </a>
                    ) : (
                      <a className="ChatBodyCONMSGspanh1a">
                        <h5>{props.userName}</h5>
                        {isPC ? (
                          <img
                            src={god}
                            style={{ height: "35px" }}
                            onClick={(e) => {
                              const fileUrl = data.body;
                              const link = document.createElement("a");
                              link.href = fileUrl;
                              link.download = "file";
                              document.body.appendChild(link);
                              link.click();
                              document.body.removeChild(link);
                            }}
                          />
                        ) : (
                          <img
                            src={god}
                            style={{ height: "20px" }}
                            onClick={(e) => {
                              const fileUrl = data.body;
                              const link = document.createElement("a");
                              link.href = fileUrl;
                              link.download = "file";
                              document.body.appendChild(link);
                              link.click();
                              document.body.removeChild(link);
                            }}
                          />
                        )}

                        <a1
                          style={{ right: "0.2vw", height: "80%" }}
                          className="ChatBodyCONinputreplaybefore"
                        ></a1>
                      </a>
                    )}
                  </>
                )}
                {data.body}
              </h1>
              <p
                className={is_sender && data.seen && "ChatBodyCONMSGspanp"}
                id={is_sender && !data.seen && "is_senderP"}
              >
                {data.date}
              </p>
            </span>
          ) : type == 2 ? (
            <span
              id={is_sender && "is_senderspan"}
              style={{ backgroundColor: "transparent" }}
            >
              {data.reply_message && (
                <>
                  {data.reply_message.type == 1 ? (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      <h4>{data.reply_message.body}</h4>
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  ) : data.reply_message.type == 2 ? (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      <img
                        id="ChatBodyCONMSGspanh1ah4img"
                        src={data.reply_message.body}
                      />
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  ) : data.reply_message.type == 3 ? (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      <video
                        id="ChatBodyCONMSGspanh1ah4img"
                        src={data.reply_message.body}
                      />
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  ) : data.reply_message.type == 4 ? (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      <h4>voice note</h4>
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  ) : (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      {isPC ? (
                        <img
                          src={god}
                          style={{ height: "35px" }}
                          onClick={(e) => {
                            const fileUrl = data.body;
                            const link = document.createElement("a");
                            link.href = fileUrl;
                            link.download = "file";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                        />
                      ) : (
                        <img
                          src={god}
                          style={{ height: "20px" }}
                          onClick={(e) => {
                            const fileUrl = data.body;
                            const link = document.createElement("a");
                            link.href = fileUrl;
                            link.download = "file";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                        />
                      )}
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  )}
                </>
              )}
              {
                <img
                  draggable={false}
                  src={data.body}
                  id={is_sender && "is_senderh1"}
                  style={{ backgroundColor: "transparent" }}
                />
              }
              <p
                className={is_sender && data.seen && "ChatBodyCONMSGspanp"}
                id={is_sender && !data.seen && "is_senderP"}
              >
                {data.date}
              </p>
            </span>
          ) : type == 3 ? (
            <span id={is_sender && "is_senderspan"}>
              {data.reply_message && (
                <>
                  {data.reply_message.type == 1 ? (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      <h4>{data.reply_message.body}</h4>
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  ) : data.reply_message.type == 2 ? (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      <img
                        id="ChatBodyCONMSGspanh1ah4img"
                        src={data.reply_message.body}
                      />
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  ) : data.reply_message.type == 3 ? (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      <video
                        id="ChatBodyCONMSGspanh1ah4img"
                        src={data.reply_message.body}
                      />
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  ) : data.reply_message.type == 4 ? (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      <h4>voice note</h4>
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  ) : (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      {isPC ? (
                        <img
                          src={god}
                          style={{ height: "35px" }}
                          onClick={(e) => {
                            const fileUrl = data.body;
                            const link = document.createElement("a");
                            link.href = fileUrl;
                            link.download = "file";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                        />
                      ) : (
                        <img
                          src={god}
                          style={{ height: "20px" }}
                          onClick={(e) => {
                            const fileUrl = data.body;
                            const link = document.createElement("a");
                            link.href = fileUrl;
                            link.download = "file";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                        />
                      )}
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  )}
                </>
              )}
              <video
                id={is_sender && "is_senderspan"}
                controls
                src={data.body}
              />
              <p
                className={is_sender && data.seen && "ChatBodyCONMSGspanp"}
                id={is_sender && !data.seen && "is_senderP"}
              >
                {data.date}
              </p>
            </span>
          ) : type == 4 ? (
            <span id={is_sender && "is_senderspan"}>
              {data.reply_message && (
                <>
                  {data.reply_message.type == 1 ? (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      <h4>{data.reply_message.body}</h4>
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  ) : data.reply_message.type == 2 ? (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      <img
                        id="ChatBodyCONMSGspanh1ah4img"
                        src={data.reply_message.body}
                      />
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  ) : data.reply_message.type == 3 ? (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      <video
                        id="ChatBodyCONMSGspanh1ah4img"
                        src={data.reply_message.body}
                      />
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  ) : data.reply_message.type == 4 ? (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      <h4>voice note</h4>
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  ) : (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      {isPC ? (
                        <img
                          src={god}
                          style={{ height: "35px" }}
                          onClick={(e) => {
                            const fileUrl = data.body;
                            const link = document.createElement("a");
                            link.href = fileUrl;
                            link.download = "file";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                        />
                      ) : (
                        <img
                          src={god}
                          style={{ height: "20px" }}
                          onClick={(e) => {
                            const fileUrl = data.body;
                            const link = document.createElement("a");
                            link.href = fileUrl;
                            link.download = "file";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                        />
                      )}
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  )}
                </>
              )}
              {isPC ? (
                <ReactAudioPlayer
                  src={data.body}
                  controls
                  controlsList={"nodownload"}
                  width={1}
                  height={2}
                  style={{ width: "300px" }}
                  color={is_sender ? "#0199EC" : "#F6F6F6"}
                  volumeOrientationDown
                />
              ) : (
                <ReactAudioPlayer
                  src={data.body}
                  controls
                  controlsList={"nodownload"}
                  width={1}
                  height={2}
                  style={{ width: "150px" }}
                  color={is_sender ? "#0199EC" : "#F6F6F6"}
                  volumeOrientationDown
                />
              )}
              <p
                className={is_sender && data.seen && "ChatBodyCONMSGspanp"}
                id={is_sender && !data.seen && "is_senderP"}
              >
                {data.date}
              </p>
            </span>
          ) : (
            <span id={is_sender && "is_senderspan"}>
              {data.reply_message && (
                <>
                  {data.reply_message.type == 1 ? (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      <h4>{data.reply_message.body}</h4>
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  ) : data.reply_message.type == 2 ? (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      <img
                        id="ChatBodyCONMSGspanh1ah4img"
                        src={data.reply_message.body}
                      />
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  ) : data.reply_message.type == 3 ? (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      <video
                        id="ChatBodyCONMSGspanh1ah4img"
                        src={data.reply_message.body}
                      />
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  ) : data.reply_message.type == 4 ? (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      <h4>voice note</h4>
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  ) : (
                    <a className="ChatBodyCONMSGspanh1a">
                      <h5>{props.userName}</h5>
                      {isPC ? (
                        <img
                          src={god}
                          style={{ height: "35px" }}
                          onClick={(e) => {
                            const fileUrl = data.body;
                            const link = document.createElement("a");
                            link.href = fileUrl;
                            link.download = "file";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                        />
                      ) : (
                        <img
                          src={god}
                          style={{ height: "20px" }}
                          onClick={(e) => {
                            const fileUrl = data.body;
                            const link = document.createElement("a");
                            link.href = fileUrl;
                            link.download = "file";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                        />
                      )}
                      <a1
                        style={{ right: "0.2vw", height: "80%" }}
                        className="ChatBodyCONinputreplaybefore"
                      ></a1>
                    </a>
                  )}
                </>
              )}
              {isPC ? (
                <img
                  src={god}
                  style={{ height: "120px" }}
                  onClick={(e) => {
                    const fileUrl = data.body;
                    const link = document.createElement("a");
                    link.href = fileUrl;
                    link.download = "file";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                />
              ) : (
                <img
                  src={god}
                  style={{ height: "70px" }}
                  onClick={(e) => {
                    const fileUrl = data.body;
                    const link = document.createElement("a");
                    link.href = fileUrl;
                    link.download = "file";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                />
              )}
              <p
                className={is_sender && data.seen && "ChatBodyCONMSGspanp"}
                id={is_sender && !data.seen && "is_senderP"}
              >
                {data.date}
              </p>
            </span>
          )}
        </div>
      </Draggable>
    </>
  );
}

export default Message;
