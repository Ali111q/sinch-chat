import React from "react";

function PatientSlid() {
  return (
    <div>
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={position}
        bounds={{ top: 0, left: 0, right: 50, bottom: 0 }}
        onDrag={(e, x)=>{
        handleStop(x.x);
        }}>
        <div
          className="handle"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        ></div>
      </Draggable>
    </div>
  );
}

export default PatientSlid;
