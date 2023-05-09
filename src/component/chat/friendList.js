import { React, useState, useEffect } from "react";
import { useFetcher } from "react-router-dom";
import god from "../../assets/imgs/god.jpg";
import { httpHelper } from "../../helper/http_helper";
import { useNavigate } from "react-router-dom";
function FriendList(props) {
  const navigate = useNavigate();
  const [chatList, setchatList] = useState([]);
  const [chatdata, setchatdata] = useState();
  useEffect(() => {
    httpHelper(
      "http://192.168.0.190:8000/api/all",
      [
        {
          key: "Authorization",
          value: `Bearer ${localStorage.getItem("token")}`,
        },
        ,
      ],
      {},
      "get"
    ).then((e) => {
      setchatList(e.chats);
    });
  }, []);
  useEffect(()=>{
    if(props.newCahtData){
    var mylist = [{...props.newCahtData,seen:false},]
    chatList.map((e)=>{
      if (e.chat.id!=props.newCahtData.chat.id){
        mylist.push(e)
      }
    })
    setchatList(mylist);
  }
  },[props.newCahtData])
  useEffect(()=>{
    var mylist = []
    chatList.map((e)=>{
      if (e.chat.id==chatdata.chat.id){
        mylist.push({...chatdata,seen:true})
      }else{
        mylist.push(e)
      }
    })
    setchatList(mylist);
  },[chatdata])
  return (
    <>
      {<div id="mediaQueryForPc">
        <div className="ChatConMainFriendListCon">
          <div className="ChatConMainFriendListConSerchBar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.174"
              height="25.174"
              viewBox="0 0 25.174 25.174"
            >
              <path
                id="icons8-search"
                d="M13.489,3a10.489,10.489,0,1,0,6.631,18.6l6.263,6.263a1.049,1.049,0,1,0,1.483-1.483L21.6,20.121A10.478,10.478,0,0,0,13.489,3Zm0,2.1A8.391,8.391,0,1,1,5.1,13.489,8.375,8.375,0,0,1,13.489,5.1Z"
                transform="translate(-3 -3)"
                fill="#2a2d37"
              />
            </svg>
            <input placeholder="ابحث في محادثتك" />
          </div>
          <div className="friendListScroll">
            <ul>
              {chatList &&
                chatList.map((e,i) => {
                  return (
                    <li key={i} onClick={()=>{
                      setchatdata(e)
                      props.selctedID(e.chat.id)
                      props.userData(e.user)
                      props.setshowbody(true)
                      sessionStorage.setItem("selctedID",e.chat.id)
                      sessionStorage.setItem("userData",JSON.stringify(e.user))
                      navigate("/chat/0")
                    }}>
                      <p className="friendListScrollTime">
                        {e.lastMessage.date}
                      </p>
                      <span style={{opacity:e.unseen_count==0?"0":"1"}} className="friendListScrollMSGNUM">
                        {e.unseen_count}
                      </span>
                      <div>
                        <img src={e.user.image&&e.user.image} />
                      </div>
                      <div className="friendListScrollullispan">
                        <h1>{e.user.name}</h1>
                        <p>{e.lastMessage.body}</p>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>}
      <div id="mediaQueryForMobile">
        <div className="ChatConMainFriendListConSerchBar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.174"
            height="25.174"
            viewBox="0 0 25.174 25.174"
          >
            <path
              id="icons8-search"
              d="M13.489,3a10.489,10.489,0,1,0,6.631,18.6l6.263,6.263a1.049,1.049,0,1,0,1.483-1.483L21.6,20.121A10.478,10.478,0,0,0,13.489,3Zm0,2.1A8.391,8.391,0,1,1,5.1,13.489,8.375,8.375,0,0,1,13.489,5.1Z"
              transform="translate(-3 -3)"
              fill="#2a2d37"
            />
          </svg>
          <input placeholder="ابحث في محادثتك" />
        </div>
        <div className="friendListScroll">
          <ul>
            {chatList &&
              chatList.map((e) => {
                return (
                  <li onClick={()=>{
                    props.selctedID(e.chat.id)
                    props.userData(e.user)
                    props.setshowbody(true)
                    sessionStorage.setItem("selctedID",e.chat.id)
                    sessionStorage.setItem("userData",JSON.stringify(e.user))
                  }}>
                    <p className="friendListScrollTime">{e.lastMessage.date}</p>
                    <span style={{opacity:e.unseen_count==0?"0":"1"}} className="friendListScrollMSGNUM">
                      {e.unseen_count}
                    </span>
                    <div>
                      <img src={e.user.image} />
                    </div>
                    <div className="friendListScrollullispan">
                      <h1>{e.user.name}</h1>
                      <p>{e.lastMessage.body}</p>
                    </div>
                  </li>
                );
              })}
              
          </ul>
        </div>
      </div>
    </>
  );
}

export default FriendList;
