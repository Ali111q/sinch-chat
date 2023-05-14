import React from "react";
import "./input.css";

function Input(props) {
  const { type, name, id, style, t, onfocus, onch, value ,maxLength } = props;
  return (
    <React.Fragment>
      <input
        value={value}
        onFocus={(e) => onfocus && onfocus(e)}
        style={style && style}
        onChange={onch}
        type={type ? type : "text"}
        placeholder={name}
        className={`input-style t${t}`}
        id={id}
        maxLength={maxLength}
        autocomplete="off"
      />
    </React.Fragment>
  );
}
export default Input;
