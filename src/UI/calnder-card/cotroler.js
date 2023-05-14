import React from "react";
import H from "../text/text";
import "./card.css";
import arrow from "../../assets/icons/arroe";
function calinderConrroler() {
  return (
    <div className="calinder-controler">
        <div className="calinder-controler-back">
            {arrow[0]}
            <H t={5}>Des</H>
        </div>
        <div className="calinder-controler-center">
            <div className="calinder-controler-center-min-calinder">
            </div>
            <span className="calinder-controler-center-back">
                {arrow[1]}
            </span>
            <H t={5}>
            JANUARY 18,2022
            </H>
            <span className="calinder-controler-center-forword">
                {arrow[1]}
            </span>
        </div>
        <div className="calinder-controler-forword">
        <H t={5}>Des</H>
         {arrow[0]}    
        </div>
    </div>
  );
}

export default calinderConrroler;
