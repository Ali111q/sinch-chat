import React, { useState, useEffect } from "react";
import "./dashbord.css";
import AppForLab from "./LabViewPC/app";
import AppForDr from "./DrViewPC/app";
function DashBordApp(props) {

  const [selcted, setselcted] = useState(1);
  return (
    <>
      {localStorage.getItem("type") == 2 ? (
        <AppForDr run={props.run} />
      ) : (
        <AppForLab run={props.run} />
      )}
    </>
  );
}

export default DashBordApp;
