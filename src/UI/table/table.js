import React from "react";
import "./table.css";
function Table(props) {
  return (
    <div className="Table-con">
      {
        <div
          key={0}
          style={{
            backgroundColor: 0 % 2 ? "#ffffff" : "rgb(240, 240, 240)",
            borderRadius: "1vw 1vw 0 0",
            ...props.titleStyle
          }}
          className={"table-title"}
        >
          {props.title}
        </div>
      }
      {props.selcted&&
      <div style={{display:props.selcted.length==0&&"none"}} className="table-item-selcted-con">
      {props.selcted.map((e, i) => {
        return (
          <div
            key={i}
            className={"table-item-selcted"}
          >
            {e}
          </div>
        );
      })}
      </div>}

      {props.children && props.children.map((e, i) => {
        return (
          <div
            key={i}
            style={{
              backgroundColor: i % 2 ? "rgb(240, 240, 240)" : "#ffffff",
              borderRadius: 1 == props.children.length - 1 ? "0 0 1vw 1vw" : "",
              zIndex:props.children.length-i
            }}
            className={"table-item"}
          >
            {e}
          </div>
        );
      })}
    </div>
  );
}
export default Table;
