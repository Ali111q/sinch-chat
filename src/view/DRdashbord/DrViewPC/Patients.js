import React, { useState, useEffect } from "react";
import svg from "../svgList";
import { useNavigate } from "react-router-dom";
function Patients() {
  const navigate = useNavigate();
  const [showPatients, setshowPatients] = useState(false);
  const list = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  return (
    <>
      <div className="patientsLIstDrView">
        <button
        onClick={e=>{
          navigate("/AddPatientApp")
          
        }}
        >
          {svg.addPatients}
          <h1>Add patients</h1>
        </button>
        <div className="patientsLIstDrViewBody">
          <br />
          {list.map((e, i) => {
            return (
              <div key={i} className="patientsLIstDrViewItem">
                <span>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLdLG3dKnE_XxyJ_mMs7R72tEeOXpYGLj6A&usqp=CAU" />
                </span>
                
                <div>
                  <span id="borderTop"></span>
                  <span id="borderBottom"></span>
                  <span id="borderLeft"></span>
                  <span id="borderRight"></span>
                  <h1>Name: Sara Ali kadhim</h1>
                  <h1>Gender: Female</h1>
                  <h1>Age: 29y</h1>
                  <h1>Id: 398477492</h1>
                  <h1>Date: 12/12/2022</h1>
                  <h1>Phone No: 07729003346</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Patients;
