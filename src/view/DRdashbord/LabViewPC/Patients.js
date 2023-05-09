import React, { useState, useEffect } from "react";
function Patients() {
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
      <div className="whiteCON"></div>
      {showPatients ? (
        <div className="PatientsShet">
          <div className="PatientsShetDRifo">
            <a>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1juq8VJ3O3qoI-wBw_BNH8x9vEYqEmKFZqg&usqp=CAU" />
            </a>
            <div>
              <span>
                <h1>Doctor name: Ahmed Ali Hadi</h1>
                <h1>Speciality = Bio</h1>
              </span>
              <span>
                <h1>Id: 39867785</h1>
                <h1>Adress: baghdad/al-mansoor</h1>
              </span>
            </div>
          </div>
          <br/>
          <br/>
          <div className="PatientsShetPATifo">
            <a>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1juq8VJ3O3qoI-wBw_BNH8x9vEYqEmKFZqg&usqp=CAU" />
            </a>
            <div>
              <span>
                <h1>Patient Name: Sara Ali kadhim</h1>
                <h1>Gender: Female</h1>
                <h1>Age: 28y</h1>
                <h1>Date: 12/12/2022</h1>
                <h1>Phone No: 07729003346</h1>
              </span>
              <span>
                <h1>Id: 39867785</h1>
                <h1>Adress: baghdad/al-mansoor</h1>
              </span>
            </div>
          </div>
          <div
            style={{
              position: "initial",
            }}
            className="NewDashbordAppPatients"
          >
            <ul>
              <li>
                <h1 style={{ color: "#0199EC" }}>Other test name</h1>
                <span className="NewDashbordAppPatientsButton">
                  <button style={{width:"90%"}}>Accept all</button>
                </span>
              </li>
              {list.map((e, i) => {
                return (
                  <li
                    onClick={() => {
                      setshowPatients(true);
                    }}
                    style={{
                      backgroundColor: i % 2 ? "" : "white",
                      cursor: "pointer",
                    }}
                  >
                    <span>
                      <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1juq8VJ3O3qoI-wBw_BNH8x9vEYqEmKFZqg&usqp=CAU" />
                      </div>
                      <h1>Patient name</h1>
                    </span>
                    <span className="NewDashbordAppPatientsButton">
                      <button>Accept</button>
                      <button style={{backgroundColor:"red"}}>Reject</button>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div className="NewDashbordAppPatients">
          <ul>
            <li>
              <h1 style={{ color: "#0199EC" }}>Patient name</h1>
              <h2 style={{ color: "#0199EC" }}>Date</h2>
            </li>
            {list.map((e, i) => {
              return (
                <li
                  onClick={() => {
                    setshowPatients(true);
                  }}
                  style={{
                    backgroundColor: i % 2 ? "" : "white",
                    cursor: "pointer",
                  }}
                >
                  <span>
                    <div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1juq8VJ3O3qoI-wBw_BNH8x9vEYqEmKFZqg&usqp=CAU" />
                    </div>
                    <h1>Patient name</h1>
                  </span>
                  <h2>2021/10/11</h2>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default Patients;
