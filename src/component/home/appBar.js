import React, { Component } from "react";
import "../../new.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { HomeSvgList } from "../../assets/svges/home_lst_svg";
import Alert from "./alert";
import useOrientationchange from "../../hooks/orientationchange";
export function AppBar(props) {
  const [path, setpath] = useState();
  const navigate = useNavigate();
  const [showSelcted, setshowSelcted] = useState();
  const [selctedData, setselctedData] = useState(false);
  const [targit, settargit] = useState(false);
  const isPC = useOrientationchange();
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  useEffect(() => {
    if (props.offf == false) {
      setshowSelcted(false);
    }
  }, [props.offf]);

  return (
    <>
      <Alert
        run={props.run}
        data={selctedData}
        Show={showSelcted}
        id={targit}
        off={setshowSelcted}
      />
      {isPC ? (
        <div className="newNVB">
          <ul>
            <button
              onClick={(e) => {
                sessionStorage.removeItem("selctedID");
                sessionStorage.removeItem("userData");
                setpath("/chat");
              }}
            >
              {HomeSvgList("2vw").chatIcon}
              <span>
                <h1>42</h1>
              </span>
            </button>
            <button
              onClick={(e) => {
                setshowSelcted(true);
                settargit("order");
              }}
            >
              {HomeSvgList("2vw").doc}
              <span>
                <h1>4</h1>
              </span>
            </button>

            <button
              onClick={(e) => {
                setpath("/home");
              }}
            >
              {HomeSvgList("2vw").home}
            </button>

            <button
              onClick={(e) => {
                setshowSelcted(true);
                settargit("not");
              }}
            >
              {HomeSvgList("2vw").heart}
            </button>

            <button
              onClick={(e) => {
                setshowSelcted(true);
                settargit("add");
              }}
            >
              {" "}
              {HomeSvgList("2vw").add}
            </button>

            <button
              onClick={(e) => {
                localStorage.setItem("st", false);
                setpath("/profile");
              }}
            >
              {HomeSvgList("2vw").profile}
            </button>
          </ul>
          <div className="serch_NVB">
            <div
              onClick={(e) => {
                setselctedData("");
                settargit("ser");
                setshowSelcted(true);
              }}
            >
              {HomeSvgList("2vw").search}
            </div>
            <input
              onChange={(e) => {
                setselctedData(e.target.value);
                settargit("ser");
                setshowSelcted(true);
              }}
              placeholder="Search"
            />
          </div>
          {HomeSvgList("3.5vw").applogo}
        </div>
      ) : (
        <>
          <div className="newNVBMOB">
            <ul>
              <button
                onClick={(e) => {
                  sessionStorage.removeItem("selctedID");
                  sessionStorage.removeItem("userData");
                  setpath("/chat");
                }}
              >
                {HomeSvgList("8vw").chatIcon}
                <span>
                  <h1>42</h1>
                </span>
              </button>
              <button
                onClick={(e) => {
                  setshowSelcted(true);
                  settargit("order");
                }}
              >
                {HomeSvgList("8vw").doc}
                <span>
                  <h1>4</h1>
                </span>
              </button>
            </ul>
            {HomeSvgList("12.5vw").applogo}
          </div>
          <div className="newFOTMOB">
            <ul>
              <button
                onClick={(e) => {
                  localStorage.setItem("st", false);
                  setpath("/profile");
                  window.location.pathname == "/profile" &&
                    window.location.reload();
                }}
              >
                {window.location.pathname == "/profile"
                  ? HomeSvgList("7vw", true).profile
                  : HomeSvgList("7vw", false).profile}
              </button>

              <button
                onClick={(e) => {
                  setshowSelcted(true);
                  settargit("not");
                }}
              >
                {HomeSvgList("7vw", false).heart}
              </button>

              <button
                onClick={(e) => {
                  setshowSelcted(true);
                  settargit("add");
                }}
              >
                {HomeSvgList("7vw", false).add}
              </button>
              <button
                onClick={(e) => {
                  setselctedData("");
                  settargit("ser");
                  setshowSelcted(true);
                }}
              >
                {HomeSvgList("7vw", false).searchMob}
              </button>
              <button
                onClick={(e) => {
                  setpath("/home");
                }}
              >
                {window.location.pathname == "/home"
                  ? HomeSvgList("7vw", true).home
                  : HomeSvgList("7vw", false).home}
              </button>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default AppBar;
