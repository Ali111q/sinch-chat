import React from "react";
import H from "../text/text";
import clo from "../../assets/icons/clock";
import "./card.css"
function CardCalnderF(props) {
  const data = props.data
  const hasOrder =data.book_count&&data.book_count.count
  const hasConsultation =data.consultation_count&&data.consultation_count.count
  return (
    <div className="calinder-card-first-con" 
    onClick={()=>props.onclick(data)}
    >
      <div className="calinder-card-first-date">
        <H t={7}>{data.consultation_count&&data.consultation_count.day_name}</H>
        <H t={7}>{hasConsultation+hasOrder}</H>
        <span>
          {clo}
          {data.book_count&&
          <H t={7}>
            
          </H>
          }
        </span>
      </div>
      <div className="calinder-card-first-line">
        <span style={{width:`${100*hasOrder/(hasConsultation+hasOrder)}%`,zIndex:hasOrder}} className="calinder-card-first-line-red"></span>
        <span style={{width:`${100*hasConsultation/(hasConsultation+hasOrder)}%`,zIndex:hasConsultation}} className="calinder-card-first-line-blue"></span>
      </div>
      <div className="calinder-card-first-info-num">
      <H t={7} style={{color:"#8FB7A0"}}>{hasConsultation}</H>
      -
      <H t={7} style={{color:"#D0021B"}}>{hasOrder}</H>
      </div>
    </div>
  );
}
export default CardCalnderF;
