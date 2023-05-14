import React from "react";
import "./image.css"
import useOrientationchange from "../../hooks/orientationchange";
function Image(props) {
  const { ZP, ZM, src, style, idC, idM ,onClick } = props;
  const isPC = useOrientationchange()
  return (
    <div
      onClick={onClick}
      className="img-ui"
      id={idC}
      style={{ width: `${isPC?ZP:ZM}vw`, height: `${isPC?ZP:ZM}vw`, ...style }}
    >
      <img
        id={idM}
        src={src}
        onLoad={(e) => {
          e.target.style.opacity = "1";
        }}
      />
      <span
        style={{
          height: `${isPC?ZP*2:ZM*2}vw`,
          width: `${isPC?ZP/5:ZM/5}vw`,
        }}
      ></span>
    </div>
  );
}

export default Image;
