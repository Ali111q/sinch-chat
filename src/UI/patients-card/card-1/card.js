import React from "react";
import "./card.css";
import Img from "../../image-circle/image";
import H from "../../text/text";
function Card(props) {
  const styleP = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: "500",
    wordBreak: "normal",
    width: "55%",
  };
  const style = { display: "flex", alignItems: "center", paddingTop: "0.7vw" };
  const  {data} = props
  return (
    <>
      <Img
        ZP={6}
        ZM={6}
        src={data.user_image}
        style={{
          top: "0",
          zIndex:"2",
          position: "absolute",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          border: "solid white 0.05vw",
          transition:"1s",
        }}/>
      <div className="Card-patients-1-info">
        <H t={4}
        style={style}
        >
          Name:
          <H
            t={6}
            style={{
              ...styleP,
              width: "70%",
            }}
          >
            {data.patient_name}
          </H>
        </H>
        <H t={4}
        style={style}
        >
          Gender:
          <H t={6} style={styleP}>
            {data.gender}
          </H>
        </H>
        <H t={4}
        style={style}
        >
          Age:
          <H t={6} style={styleP}>
            {data.age}
          </H>
        </H>
        <H t={4}
        style={style}
        >
          Id:
          <H t={6} style={styleP}>
            {data.id}
          </H>
        </H>
        <H t={4}
        style={style}
        >
          Date:
          <H t={6} style={{...styleP,width: "75%"}}>
            {data.date}
          </H>
        </H>
        <H t={4}
        style={style}
        >
          Phone No:
          <H t={6} style={styleP}>
            {data.id}
          </H>
        </H>
      </div>
    </>
  );
}

export default Card;
