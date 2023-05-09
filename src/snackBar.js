import { useState, useEffect } from "react";

function SnackBar(props) {
  const [start, setstart] = useState(false);
  const [show, setshow] = useState(false);
  useEffect(() => {
    if (props.run) {
      document.getElementById("SnackBarShow").style.opacity = "1";
      document.getElementById("SnackBarShow").style.bottom = "5vh";
      setTimeout(() => {
        document.getElementById("SnackBarShow").style.opacity = "0";
        document.getElementById("SnackBarShow").style.bottom = "-5vh";

        props.off(false)
      }, 3000);
    }
  }, [props.run]);
  return (
    <div className={"SnackBarStart"} id={"SnackBarShow"}>
      <span
        style={
          props.type == true
            ? {
                backgroundColor: "#00cc81",
              }
            : {
                backgroundColor: "red",
              }
        }
      >
        <h1>{props.data}</h1>
      </span>
    </div>
  );
}
export default SnackBar;
