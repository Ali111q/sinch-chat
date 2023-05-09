import React, { useEffect, useRef, useState } from "react";
import "./FriendsList.css";
import { HomeSvgList } from "../../../assets/svges/home_lst_svg";
import { friendsList } from "../../../data";
import FriendItem from "./FriendItem";
import usePagination from "../../../hooks/pagination";
import useOrientationchange from "../../../hooks/orientationchange";
import { getChat } from "../../../utils/constants";
import Api from "../../../helper/api";
import { useDispatch, useSelector } from "react-redux";
import { chatAction } from "../../../store/chat/chatSlice";
const FriendsList = () => {
  const [friends, setFriends] = useState([...friendsList]);
  const [data, setData] = useState([]);
  const chats = useSelector(state => state.chat.data.chats)
  const lastElement = useRef();
  const dispatch = useDispatch();
  const { handelScroll } = usePagination({
    data: friends,
    setData: () => {
      setFriends((r) => [...r, ...r]);
    },
    lastCard: lastElement,
  });
  const isPC = useOrientationchange();
    useEffect(() => {
      setData(chats)
    }, [chats])
    const handleSearch = e => {
      setData(chats.filter(user => user.users[0].name.toLowerCase().includes(e.target.value.toLowerCase())))
    }
  return (
    <>
      <div className="search">
        <div className="search__icon">
          {HomeSvgList(`${isPC ? "1.6vw" : "3vw"}`).search}
        </div>
        <input type="text" placeholder="ابحث في محادثتك" onChange={handleSearch} />
      </div>
      <div className="items" onScroll={handelScroll}>
        {data&&data.map((ele, index) => {
          return<div
            key={ele.id}
            ref={index == friends.length - 1 ? lastElement : null}
          >
            <FriendItem data={ele} />
          </div>
        })}
      </div>
    </>
  );
};

export default FriendsList;
