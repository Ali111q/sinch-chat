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
export function App() {
  const location = useLocation();
  const [go, setgo] = useState(false);
  useEffect(() => {
    console.log();
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
  return (
    <>
      {/* <NOT /> */}
      {/* <Intro run={setgo} go={go} /> */}
      <Routes>
        <Route path="/login" element={<Login run={setgo} />} />
        <Route path="/Drugs" element={<Drugs run={setgo} />} />
        <Route path="/emergincy" element={<Emergincy run={setgo} />} />
        <Route path="/post/:id" element={<PostView run={setgo} />} />
        <Route path="/register" element={<Register run={setgo} />} />
        <Route path="/ResponsiveDialog" element={<ResponsiveDialog />} />
        <Route path="/registerUser/:id/:nam" element={<RegisterUser />} />
        <Route path="/otp" element={<Otp run={setgo} />} />
        <Route path="/story/:id" element={<StoryView run={setgo} />} />
        <Route path="/storyScreen/:id" element={<StoryScreen run={setgo} />} />
        <Route path="/UserProfile/:id" element={<UserProfile run={setgo} />} />
        <Route path="/addPost" element={<AddPost run={setgo} />} />
        <Route path="/AddPatientApp" element={<AddPatientApp run={setgo} />} />
        <Route path="/Addstory" element={<Addstory run={setgo} />} />
        <Route path="/profile" element={<Profile run={setgo} />} />
        <Route path="/DashBordApp/:nav" element={<DashBordApp run={setgo} />} />
        <Route path="/Requaste/:id" element={<Requaste run={setgo} />} />
        <Route path="/ViewMyReq/:id" element={<ViewMyReq run={setgo} />} />
        <Route path="/chat" element={<ChatScreen run={setgo} />} />
        <Route path="/orderList/:type" element={<OrderList run={setgo} />} />
        <Route path="/settings" element={<Siting run={setgo} />} />
        <Route path="/call" element={<Call run={setgo} />} />
        <Route path="/*" element={<Home run={setgo} />} />
      </Routes>
    </>
  );
}

export default App;
