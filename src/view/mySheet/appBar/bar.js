import React from "react";
import "./bar.css";
import H from "../../UI/text/text";
import addUser from "../../assets/icons/adduser";
import arrow from "../../assets/icons/arroe";
import { useNavigate } from "react-router-dom";
import useOrientationchange from "../../hooks/orientationchange";
import { useLocation } from "react-router-dom";
import calinder from "../../assets/icons/calinder";
import CalinderMO from "../alert/calinderMO";
import BarPC from "./pcbar";
function Bar() {
  const path = useLocation().pathname;
  const isPC = useOrientationchange();
  const type = localStorage.getItem("type")
  const navigate = useNavigate();
  const [selected, setSelected] = React.useState(path == "/archive" ? 1 : 2);
  const [showAlert, setShowAlert] = React.useState(false);
  const style = {
    transition: "0.2s",
    width: "50%",
    zIndex: "2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };
  return (
    <React.Fragment>
      <CalinderMO isOn={showAlert} off={setShowAlert}/>
      {isPC ? (<BarPC/>
      ) : (
        <div className="app-mo-bar-con">
          <div className="Base-bar-con">
            <a
              onClick={() => {
                navigate(-1);
              }}
            >
              {path != "/archive" && path != "/calender" && arrow[0]}
            </a>
            <H t={1}>Patient</H>
            <a
              onClick={() => {
                path == "/archive"&&navigate("/add-patient");
                path.includes("/show-patient")&&setShowAlert(true)
              }}
            >
              {type==2&&path.includes("/show-patient")&& calinder}
              {type==2&&path == "/archive" && addUser}
            </a>
          </div>
          {(path == "/archive" || path == "/calender") && (
            <div className="bar-sconde-con">
              <span id={selected == 1 ? "" : "bar-sconde-conspan-red"}></span>
              <H
                onClick={() => {
                  
                  setSelected(1);
                  navigate("/archive");
                }}
                style={{ color: selected == 1 ? "white" : "black", ...style }}
                t={1}
              >
                Patient
              </H>
              <H
                onClick={() => {
                  // setSelected(2);
                  // navigate("/calender");
                }}
                style={{ color: selected == 2 ? "white" : "black", ...style }}
                t={1}
              >
                Schedule
              </H>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
}

export default Bar;
