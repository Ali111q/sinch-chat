import React from "react";
import "./Select.css";
import H from "../text/text";
import truth from "../../assets/icons/true";
function Select(props) {
  const { t, name, data, Selected ,style,hstyle,onch } = props;
  const hStyle = {
    color: "#0199EC",
    ...hstyle
  };
  const [show, setshow] = React.useState(false);
  const [selecttedID, setselecttedID] = React.useState(Selected);
  const [selecttedname, setselecttedname] = React.useState(Selected!=null&&data.find((e)=>e.id==Selected).name);
  return (
    <div className="Select-con-man" style={style}>
      <div  className="Custom-select"  onClick={(e) => setshow((e) => !e)}>
        <H t={t} style={hStyle}>
          {selecttedname? selecttedname : name}
        </H>
        <div className="Custom-select-lin-con">
          <span
            style={{ transform: show ? "rotateZ(-45deg)" : "rotateZ(45deg)" }}
            id="Custom-select-lin-left"
          ></span>
          <span
            style={{ transform: show ? "rotateZ(45deg)" : "rotateZ(-45deg)" }}
            id="Custom-select-lin-right"
          ></span>
        </div>
      </div>
      <div
        className="Custom-select-list-con"
        style={{ display: show ? "flex" : "none" }}
      >
        {data.map((e, i) => {
          return (
            <div
              key={i}
              className="Custom-select-list-item"
              onClick={() => {
                setselecttedID(e.id);
                setselecttedname(e.name);
                setshow(false);
                onch(e)
              }}
              style={{
                borderBottom:
                selecttedID == e.id
                  ? " 0.1vw solid #F7227F"
                  : " 0.1vw solid #0199EC",
              }}
            >
              <H
                t={t + 1}
                style={{
                  color: selecttedID == e.id ? "#F7227F" : "#0199EC",
                }}
              >
                {e.name}
              </H>
              {selecttedID == e.id && (
                <span className="selectted">
                  {truth}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Select;
