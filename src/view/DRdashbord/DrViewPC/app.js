import React, { useState, useEffect } from "react";
import "../dashbord.css";
import "../dashbordMB.css";
import Info from "./Info";
import NavBar from "../navBar";
import Patients from "./Patients";
import Schedule from "./Schedule";
import { useNavigate, useParams } from "react-router-dom";
import PatientDRmob from "./DRviewMB/patient";
import NVBAR from "./DRviewMB/NVBAR";
import useOrientationchange from "../../../hooks/orientationchange";
function AppForDr(props) {
  const hrf = useParams();
  const [selcted, setselcted] = useState(hrf.nav);
  const isPC = useOrientationchange();

  return (
    <>
      {isPC ? (
        <div className="NewDashbordApp">
          <NavBar selcted={selcted} setselcted={setselcted} />
          {selcted == 1 ? <Patients /> : selcted == 2 ? <Schedule /> : <Info />}
        </div>
      ) : (
        <div className="DRdashBordMB">
          <NVBAR
            selcted={selcted}
            setselcted={setselcted}
            pathName={"Patients"}
            add={true}
          />
          {selcted == 1 ? (
            <PatientDRmob />
          ) : selcted == 2 ? (
            <PatientDRmob />
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

export default AppForDr;
