import { useState } from "react";
import "./textarea.css";
function Textarea( props ) {
  const [state, setstate] = useState({
    value: "",
    rows: 5,
    minRows: props.minRows,
    maxRows: props.maxRows,
  });
  const handleChange = (event) => {
    const textareaLineHeight = window.innerWidth*0.02;
    const { minRows, maxRows } = state;
    const previousRows = event.target.rows;
    event.target.rows = minRows;
    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    setstate((e) => {
      return {
        ...e,
        value: event.target.value,
        rows: currentRows < maxRows ? currentRows : maxRows,
      };
    });
  };

  return (
    <textarea
      rows={state.rows}
      value={state.value}
      placeholder={`Enter ${props.name} here...`}
      className={props.classname}
      onChange={e=>{
        handleChange(e)
        props.onch(e)
      }}
      style={props.style}
    />
  );
}

export default Textarea;
