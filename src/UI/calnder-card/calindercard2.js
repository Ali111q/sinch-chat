import React from "react";
import H from "../text/text";
import "./card.css";

function CalinderSlide(props) {
  var hstyle = {
    width: "90%",
    height: "7vh",
    overflow: "hidden",
    color: "#787993",
  };
  const data = props.data
  console.log(data);
  return (
    <div className="CalinderSlide-con">
      {/* {data.map((e, i) => {
        return (
          <div key={i} className="calinder-slide-con">
            <div className="calinder-slide-con-title">
              <H t={6}>08:30</H>
              <span></span>
            </div>
            <div className="calinder-slide-list">
              <div className="calinder-slide-list-red">
                <span></span>
                <div>
                  <H t={7} style={{ color: "#FB5E1B" }}>
                    Ahmed Khalid
                  </H>
                  <H t={7} style={{ color: "#FB5E1B", alignSelf: "center" }}>
                    08:00am-09:00am
                  </H>
                  <H t={7} style={hstyle}>
                    Case summary case summary case summary case summary case
                    summary Case summary case summary case summary case summary
                    case summary Case summary case summary case summary case
                    summary case summary Case summary case summary case summary
                    case summary case summary Case summary case summary case
                    summary case summary case summary
                  </H>
                </div>
              </div>
              <div className="calinder-slide-list-blue">
                <span></span>
                <div>
                  <H t={7} style={{ color: "#0199EC" }}>
                    Ahmed Khalid
                  </H>
                  <H t={7} style={{ color: "#0199EC", alignSelf: "center" }}>
                    08:00am-09:00am
                  </H>
                  <H style={hstyle} t={7}>
                    Case summary case summary case summary case summary case
                    summary case summary case summar
                  </H>
                </div>
              </div>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}

export default CalinderSlide;
