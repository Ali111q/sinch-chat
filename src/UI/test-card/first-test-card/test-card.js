import React from "react";
import "./test-card.css";
import Image from "../../image-circle/image";
import H from "../../text/text";
import dImg from "../../../assets/image/dr.png"
import oImg from "../../../assets/image/do.png"
function TestCard(props) {
  const { i, type ,data , rad ,isAccepted} = props;
  function OnImgClick() {
    var title = document.getElementById(
      `${type + i}-title-click-anmation`
    ).style;
    var caption = document.getElementById(
      `${type + i}-caption-click-anmation`
    ).style;
    var img = document.getElementById(`${type + i}-image-click-anmation`).style;
    caption.pointerEvents = "none";
    setTimeout(() => {
      caption.pointerEvents = "initial";
      console.log("Wefwebfyuwegfuy");
    }, 300);
    if (img.width == "22vw") {
      img.width = "12vw";
      img.height = "12vw";
      title.display = "inline";
      caption.bottom = "1vw";
      caption.opacity = "1";
    } else {
      caption.zIndex = "1";
      img.zIndex = "2";
      title.display = "none";
      caption.bottom = "10vw";
      caption.opacity = "0";
      caption.position = "absolute";
      img.width = "22vw";
      img.height = "22vw";
    }
  }
  function onCaptionClick() {
    var title = document.getElementById(
      `${type + i}-title-click-anmation`
    ).style;
    var caption = document.getElementById(
      `${type + i}-caption-click-anmation`
    ).style;
    var con = document.getElementById(
      `${type + i}-caption-con-click-anmation`
    ).style;
    var img = document.getElementById(`${type + i}-image-click-anmation`).style;
    img.pointerEvents = "none";
    if (caption.height == "23vw") {
      con.overflowY = "hidden";
      caption.height = "13vw";
      caption.bottom = "1vw";
      img.opacity = "1";
      img.top = "0";
      title.display = "inline";
    } else {
      con.overflowY = "scroll";
      title.display = "none";
      caption.height = "23vw";
      caption.bottom = "1vw";
      caption.zIndex = "2";
      img.zIndex = "1";
      img.opacity = "0";
      img.top = "10vw";
    }
    setTimeout(() => {
      img.pointerEvents = "initial";
      console.log("Wefwebfyuwegfuy");
    }, 300);
  }
  const caption = {
    t: 7,
    style: { transition: "0.5s",width:"100%",wordBreak:"break-all",padding:"3%"},
  };
  const image = {
    idC: `${type + i}-image-click-anmation`,
    ZM: 12,
    onClick: OnImgClick,
    ZP: 12,
    style: {
      transition: "1s",
      position: "absolute",
      top: "0",
      border: "solid #0199EC 0.15vw",
      zIndex:"2",
    },
  };
  const title = {
    id: `${type + i}-title-click-anmation`,
    t: 3,
  };
  return (
    <div className="test-card-con">
      {rad?
      <Image src={data} {...image} />
      :<Image src={data.isAccepted==1?data.file_url[0]&&data.file_url[0].file:type=="other"?oImg:dImg} {...image} />
      }
      <div style={{background:isAccepted==0?"#ECE401":isAccepted==1?"#00A5FF":"#F7227F"}} className="test-card-con-isAccepted">
        <H style={{color:"white"}} t={1}>
          {
            isAccepted==0?
            "W":isAccepted==1?
            "A":"R"
          }
        </H>
      </div>
      <div
        className="test-caption-click-anmation"
        id={`${type + i}-caption-click-anmation`}
      >
        <H {...title}>{props.name}</H>
        <br></br>
        <div
          onClick={onCaptionClick}
          className="test-card-con-info"
          id={`${type + i}-caption-con-click-anmation`}
        >
          <H {...caption}>{props.not}</H>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
