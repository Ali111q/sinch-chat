import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { httpHelper } from "./helper/http_helper";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./view/auth/login";
import Emergincy from "./view/auth/emergincy";
import Register from "./view/auth/register";
import RegisterUser from "./view/auth/registerUser";
import ResponsiveDialog from "react-google-map-picker";
import Otp from "./view/auth/otp";
import Home from "./view/home/home";
import PostView from "./component/home/viewPost";
import Intro from "./view/intro";
import StoryView from "./view/home/storyView";
import AddPost from "./view/home/addPost";
import Addstory from "./view/home/AddStory";
import UserProfile from "./view/profile/UProfile";
import Profile from "./view/profile/Profile";
import ViewMyReq from "./view/Requaste/viewMyReq";
import Requaste from "./view/Requaste/MyRequaste";
import Drugs from "./view/Requaste/drugs";
import StoryScreen from "./view/home/storyScreen";
import ChatScreen from "./view/chat/chatScreen";
import OrderList from "./component/Requaste/orderList";
import ViewReq from "./component/Requaste/showOrder";
import NOT from "./not";
import axios from "axios";
import DashBordApp from "./view/DRdashbord/dashBordApp";
import AddPatientApp from "./view/DRdashbord/addPatientApp";
import Siting from "./view/sitinge/sitinge";
import Call from "./view/call";
import Notification from "./IFrame/Notification";
import Sheets from "./view/mySheet/sheets";
import AppBar from "./component/home/appBar";
import useOrientationchange from "./hooks/orientationchange";
document.cookie = `userData=${localStorage.getItem(
  "userData"
)}; domain=192.168.0.190; path=/;`;

// console.log(JSON.parse(document.cookie || null));

const routes = ["chat", "storyScreen"];
export function App() {
  const path = useLocation().pathname;
  const isPC = useOrientationchange();
  const location = useLocation();
  const [go, setgo] = useState(false);
  useEffect(() => {
    localStorage.getItem("onLine") &&
      axios
        .get("http://192.168.0.190:8000/api/adduser", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((e) => {
          if (!e.data.status) {
            localStorage.clear();
            alert("you should login first");
          }
        });
  }, [location.pathname]);
  Notification();
  return (
    <>
      {/* <NOT /> */}
      {/* <Intro run={setgo} go={go} /> */}
      {!isPC && (path.includes("chat") || path.includes("storyScreen")) ? (
        <></>
      ) : (
        <AppBar run={setgo} />
      )}
      {/* <AppBar run={setgo} /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Drugs" element={<Drugs />} />
        <Route path="/emergincy" element={<Emergincy />} />
        <Route path="/post/:id" element={<PostView />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ResponsiveDialog" element={<ResponsiveDialog />} />
        <Route path="/registerUser/:id/:nam" element={<RegisterUser />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/story/:id" element={<StoryView />} />
        <Route path="/storyScreen/:id" element={<StoryScreen />} />
        <Route path="/UserProfile/:id" element={<UserProfile />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/AddPatientApp" element={<AddPatientApp />} />
        <Route path="/Addstory" element={<Addstory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/DashBordApp/:nav" element={<DashBordApp />} />
        <Route path="/Requaste/:id" element={<Requaste />} />
        <Route path="/ViewMyReq/:id" element={<ViewMyReq />} />
        <Route path="/chat" element={<ChatScreen />} />
        <Route path="/orderList/:type" element={<OrderList />} />
        <Route path="/sheet" element={<Sheets />} />
        <Route path="/settings" element={<Siting />} />
        <Route path="/call" element={<Call />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
