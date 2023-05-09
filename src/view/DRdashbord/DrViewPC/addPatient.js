import React, { useState, useEffect } from "react";
import svg from "../svgList";
import RXandDXform from "./RX&DXform";
function AddPatient(props) {

  const [formData, setFormData] = useState([]);
  return (
    <>
      <div className="AddNewPatient">
        <div className="AddNewPatientNAV">
          <span>{svg.RAD}</span>
          <span>{svg.RAD}</span>
          <span>{svg.RAD}</span>
          <span>{svg.RAD}</span>
          <span>{svg.RAD}</span>
          <span>{svg.RAD}</span>
        </div>
        <div className="AddNewPatientBody">
          <div className="AddNewPatientBodyAddControlar">
            <div>
              <span>
                <button className="hoverAddDrugs">
                  {svg.RAD}
                  <h1 className="hoverAddDrugsh1">Add Drug</h1>
                </button>
              </span>
              <span
                onMouseEnter={(e) => {
                  document.getElementById("hoverShowItem").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  document.getElementById("hoverShowItem").style.opacity = "0";
                }}
              >
                <button className="hoverAddTest">
                  {svg.RAD}
                  <h1>Add Test</h1>
                </button>
              </span>
            </div>
            <ul
              id="hoverShowItem"
              onMouseEnter={(e) => {
                document.getElementById("hoverShowItem").style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                document.getElementById("hoverShowItem").style.opacity = "0";
              }}
            >
              <li>{svg.RAD} Radiology</li>
              <li>{svg.RAD} UltraSound</li>
              <li>{svg.RAD} UltraSound</li>
              <li>{svg.RAD} UltraSound</li>
            </ul>
            <br />
          </div>
          <div className="AddNewPatientDRifo">
            <li>
              <a>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1juq8VJ3O3qoI-wBw_BNH8x9vEYqEmKFZqg&usqp=CAU" />
              </a>
            </li>
            <div>
              <span>
                <h1>Doctor name: Ahmed Ali Hadi</h1>
                <br />
                <h1>Speciality =Bio</h1>
              </span>
              <span>
                <h1>Id: 39867785</h1>
                <br />
                <h1>Adress: baghdad/al-mansoor</h1>
              </span>
              <a>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1juq8VJ3O3qoI-wBw_BNH8x9vEYqEmKFZqg&usqp=CAU" />
              </a>
            </div>
          </div>
          <br />
          <div className="AddNewPatientDRifo">
            <li>
              <a style={{ width: "12vw", height: "12vw" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1juq8VJ3O3qoI-wBw_BNH8x9vEYqEmKFZqg&usqp=CAU" />
              </a>
            </li>
            <div>
              <span>
                <h1>
                  Patient Name:
                  <input type={"text"} />
                </h1>
                <br />
                <h1>
                  <h1>Gender:</h1>
                  <select>
                    <option>male</option>
                    <option>female</option>
                  </select>
                </h1>
                <br />
                <h1>
                  Age:
                  <input style={{ width: "15%" }} type={"number"} />
                </h1>
                <br />
                <h1>
                  Date:
                  <input style={{ width: "37%" }} type={"date"} />
                </h1>
                <br />
                <h1>
                  Phone No:
                  <input type={"number"} />
                </h1>
                <br />
              </span>
              <span>
                <h1>
                  Id:
                  <input type={"number"} />
                </h1>
                <br />
                <h1>
                  Adress:
                  <input type={"text"} />
                </h1>
                <br />
              </span>
            </div>
          </div>
          <br />
          <RXandDXform type={"DX"} />
        </div>

        {}
        <ul className="AddNewPatientUl">
          <li id="AddNewPatientUlLI1">Save</li>
          <li id="AddNewPatientUlLI2">Delete</li>
          <li id="AddNewPatientUlLI3">Send</li>
          <li style={{ opacity: "1" }}>{svg.RAD}</li>
          <li
            onClick={() => {
              setFormData((e) => [
                ...e,
                {
                  RX: false,
                  DX: true,
                  SideNot: false,
                },
              ]);
            }}
          >
            {svg.RAD}
          </li>
          <li
            onClick={() => {
              setFormData((e) => [
                ...e,
                {
                  RX: true,
                  DX: false,
                  SideNot: false,
                },
              ]);
            }}
          >
            {svg.RAD}
          </li>
          <li
            onClick={() => {
              setFormData((e) => [
                ...e,
                {
                  RX: false,
                  DX: false,
                  SideNot: true,
                },
              ]);
            }}
          >
            {svg.RAD}
          </li>
        </ul>
      </div>
    </>
  );
}

export default AddPatient;
