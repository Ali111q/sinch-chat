import React from "react";
import { useState, useEffect } from "react";
import AddPatient from "./DrViewPC/addPatient";
import NavBar from "./navBar";
import useOrientationchange from "../../hooks/orientationchange";

function AddPatientApp(props) {
  const isPC = useOrientationchange();
  return (
    <>
      {isPC && (
        <div className="NewDashbordApp">
          <div className="whiteCON"></div>
          <NavBar selcted={"1"} setselcted={false} />
          <AddPatient run={props.run} />
        </div>
      )}
    </>
  );
}

export default AddPatientApp;
