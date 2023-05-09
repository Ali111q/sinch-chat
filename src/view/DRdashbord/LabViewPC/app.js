import React, { useState, useEffect } from "react";
import "../dashbord.css";
import Info from "./Info";
import NavBar from "../navBar";
import Patients from "./Patients";
import Schedule from "./Schedule";
import useOrientationchange from "../../../hooks/orientationchange";
function AppForLab(props) {

  const [selcted, setselcted] = useState(1);
  const isPC = useOrientationchange();
  return (
    <>
      {isPC && (
        <div className="NewDashbordApp">
          <NavBar selcted={selcted} setselcted={setselcted} />
          {selcted == 1 ? <Patients /> : selcted == 2 ? <Schedule /> : <Info />}
        </div>
      )}
    </>
  );
}

export default AppForLab;
