import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PatientDRmob() {
  const hrf = useParams();
  const [selcted, setselcted] = useState(hrf.nav);
  const navigate = useNavigate();
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
    <div className="BODYmobFDRdashBord">
      <div className="BODYmobFDRdashBordNAVbotton">
        <button
          style={{
            backgroundColor: selcted == 1 ? "#0199EC" : "transparent",
            color: selcted == 1 ? "white" : "black",
            zIndex: selcted == 1 ? "2" : "1",
            transition: selcted == 1 ? "0" : "1s",
          }}
          onClick={(e) => {
            setselcted(1);
            navigate("/DashBordApp/1");
          }}
        >
          Patient
        </button>
        <button
          style={{
            backgroundColor: selcted == 2 ? "#F7227F" : "transparent",
            color: selcted == 2 ? "white" : "black",
            zIndex: selcted == 2 ? "2" : "1",
            transition: selcted == 2 ? "0" : "1s",
          }}
          onClick={(e) => {
            setselcted(2);
            navigate("/DashBordApp/2");
          }}
        >
          Schedule
        </button>
      </div>
      <div className="BODYmobFDRdashBordCON">
        <div className="BODYmobFDRdashBordCONSERCHbar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
          >
            <circle
              id="Ellipse_249"
              data-name="Ellipse 249"
              cx="8.5"
              cy="8.5"
              r="8.5"
              fill="#ebebeb"
            />
          </svg>
          <input placeholder="Search…" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.206"
            height="18.206"
            viewBox="0 0 17.206 18.206"
          >
            <g
              id="Group_118777"
              data-name="Group 118777"
              transform="translate(-281 -3)"
            >
              <g
                id="Ellipse_428"
                data-name="Ellipse 428"
                transform="translate(281 3)"
                fill="none"
                stroke="#c2c2c2"
                stroke-width="1"
              >
                <circle cx="7" cy="7" r="7" stroke="none" />
                <circle cx="7" cy="7" r="6.5" fill="none" />
              </g>
              <line
                id="Line_85"
                data-name="Line 85"
                x2="5"
                y2="5.5"
                transform="translate(292.5 15)"
                fill="none"
                stroke="#c2c2c2"
                stroke-linecap="round"
                stroke-width="1"
              />
            </g>
          </svg>
        </div>
        <ul>
          {
            list.map((e,i)=>{
              return<li>
            <div>
              <a>
              <img src={"https://gudstory.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/12/29061447/Alina-Becker.jpg"}/>
              </a>
              <span>
              <h1 style={{paddingLeft:"3vw"}}>Patient Name: Israa ali mohammed</h1>
              <h1 style={{paddingLeft:"6vw"}}>Gender: Female</h1>
              <h1 style={{paddingLeft:"6vw"}}>Age: 29y</h1>
              <h1 style={{paddingLeft:"3vw"}}>Id: 43342334566 Date: 12/5/2022</h1>
              </span>
            </div>
          </li>
            })
          }
          
        </ul>
      </div>
    </div>
  );
}

export default PatientDRmob;
