import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../MessagesType/Message";
import Api from "../../../../helper/api";
import { getMessages } from "../../../../utils/constants";
import { chatAction } from "../../../../store/chat/chatSlice";
const ChatBodyMessages = () => {
  const [pageNum, setPageNum] = React.useState(2);
  const dispatch = useDispatch();
  const replayMessage = useSelector((state) => state.replay);
  const { messages, chat_id, user } = useSelector(
    (state) => state.chat.data.chatData
  );
  const [isCheck, setIsCheck] = React.useState(true);
  const lastElement = React.useRef(null);
  const { messageContextID } = useSelector((state) => state.chat);
  React.useEffect(() => {
    setIsCheck(true);
  }, [messages?.length]);
  const handelScroll = (event) => {
    var scroll = event.currentTarget.scrollTop * -1;
    var check = lastElement.current.offsetTop * -1 < scroll;
    if (check && isCheck) {
      setIsCheck(false);
      setPageNum((e) => e + 1);
      Api({
        method: "get",
        url: `${getMessages}?id=${chat_id}&page=${pageNum}`,
      }).then((e) => {
        setPageNum((e) => e++);
        dispatch(chatAction.pag({ data: e.data.data, id: chat_id }));
      });
    }
  };
  return (
    <div
      className={`chat-body-messages ${
        replayMessage.body && "padding-for-replay"
      }`}
      onScroll={(e) => {
        handelScroll(e);
      }}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(chatAction.setContextMenuID({ id: null }));
      }}
      onContextMenu={(e) => {
        e.stopPropagation();
        if (messageContextID !== null) {
          dispatch(chatAction.setContextMenuID({ id: null }));
        }
      }}
    >
      {messages?.map((ele, i) => {
        return (
          <>
            <Message key={i} data={ele} type={ele.type} />
            <h1 ref={i == messages.length - 1 ? lastElement : null}></h1>
          </>
        );
      })}
    </div>
  );
};

export default ChatBodyMessages;
