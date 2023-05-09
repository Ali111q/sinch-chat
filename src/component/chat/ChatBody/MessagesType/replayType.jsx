import React from "react";
import { useDispatch } from "react-redux";
import { cancle, record, trash } from "../../../../assets/svges/Chat_SVGs";
import { cancelRepaly } from "../../../../store/chat/replaySlice";

function ReplayType(props) {
  const dispatch = useDispatch();
  const { time, user, type, body , file_url} = props;
  return (
    <>
      {type === 1 ? (
        <div className="replay">
          <div className="replay_message_info">
            <div className="hinfo_message">
              <p>{time}</p>
              <h3>{user.name && user.name}</h3>
            </div>
            <div className="replay_message_info_body">
                {body}
            </div>
          </div>
          <div className="cancle" onClick={() => dispatch(cancelRepaly())}>
            {cancle}
          </div>
        </div>
      ) : type === 2 ? (
        <div className="replay img-replay">
          <div className="replay_message_info">
            <div className="img-replay-form">
              <img src={file_url} alt="" />
            </div>
            <div>
              <div className="hinfo_message">
                <p>{time}</p>
                <h3>{user.name && user.name}</h3>
              </div>
              <div className="replay_message_info_body"></div>
            </div>
          </div>
          <div className="cancle" onClick={() => dispatch(cancelRepaly())}>
            {cancle}
          </div>
        </div>
      ) : type === 3 ? (
        <div className="replay img-replay">
          <div className="replay_message_info">
            <div className="img-replay-form">
              <video autoPlay={false} src={file_url} alt="" />
            </div>
            <div>
              <div className="hinfo_message">
                <p>{time}</p>
                <h3>{user.name && user.name}</h3>
              </div>
              <div className="replay_message_info_body"></div>
            </div>
          </div>
          <div className="cancle" onClick={() => dispatch(cancelRepaly())}>
            {cancle}
          </div>
        </div>
      ) : type === 4 ? (
        <div className="replay img-replay">
          <div className="replay_message_info">
            <div className="img-replay-form">
              <video autoPlay={false} src={file_url} alt="" />
            </div>
            <div>
              <div className="hinfo_message">
                <p>{time}</p>
                <h3>{user.name && user.name}</h3>
              </div>
              <div className="replay_message_info_body">
                File
              </div>
            </div>
          </div>
          <div className="cancle" onClick={() => dispatch(cancelRepaly())}>
            {cancle}
          </div>
        </div>
      ) : type === 5 ?
      (
        <div className="replay img-replay">
          <div className="replay_message_info">
            <div className="img-replay-form">
              <img src={file_url} alt="" />
            </div>
            <div>
              <div className="hinfo_message">
                <p>{time}</p>
                <h3>{user.name && user.name}</h3>
              </div>
              <div className="replay_message_info_body">
                {body}
              </div>
            </div>
          </div>
          <div className="cancle" onClick={() => dispatch(cancelRepaly())}>
            {cancle}
          </div>
        </div>
      ) 
      : type === 6 ?
      <div className="replay img-replay">
          <div className="replay_message_info">
            <div className="img-replay-form">
              <video autoPlay={false} src={body} alt="" />
            </div>
            <div>
              <div className="hinfo_message">
                <p>{time}</p>
                <h3>{user.name && user.name}</h3>
              </div>
              <div className="replay_message_info_body">
                voice
              </div>
            </div>
          </div>
          <div className="cancle" onClick={() => dispatch(cancelRepaly())}>
            {cancle}
          </div>
        </div>
       :(
        ""
      )}
    </>
  );
}
export default ReplayType;

{
  /* {(type === 6 ? (
            <div className="replay">
              <div className="replay_message_info">
                <div className="hinfo_message">
                  <p>{time}</p>
                  <h3>{user.name&&user.name}</h3>
                </div>
                <div className="replay_message_info_body">رسالة صوتية</div>
              </div>
              <div className="cancle" onClick={() => dispatch(cancelRepaly())}>
                {cancle}
              </div>
            </div>
          ) : type === 2 ? (
            <div className="replay img-replay">
              <div className="replay_message_info">
                <div className="img-replay-form">
                  <img src={body} alt="" />
                </div>
                <div>
                  <div className="hinfo_message">
                    <p>{time}</p>
                    <h3>{user.name&&user.name}</h3>
                  </div>
                  <div className="replay_message_info_body">صورة</div>
                </div>
              </div>
              <div className="cancle" onClick={() => dispatch(cancelRepaly())}>
                {cancle}
              </div>
            </div>
          ) :type === 1 ? 
            <div className="replay">
              <div className="replay_message_info">
                <div className="hinfo_message">
                  <p>{time}</p>
                  <h3>{user.name&&user.name}</h3>
                </div>
                <div className="replay_message_info_body">
                {body}
                </div>
              </div>
              <div className="cancle" onClick={() => dispatch(cancelRepaly())}>
                {cancle}
              </div>
            </div>
          :<div className="replay">
          <div className="replay_message_info">
            <div className="hinfo_message">
              <p>{time}</p>
              <h3>{user.name&&user.name}</h3>
            </div>
            <div className="replay_message_info_body">
              File
            </div>
          </div>
          <div className="cancle" onClick={() => dispatch(cancelRepaly())}>
            {cancle}
          </div>
        </div>)} */
}
