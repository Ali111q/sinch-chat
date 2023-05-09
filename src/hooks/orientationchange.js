import React from "react";

const useOrientationchange = () => {
  const [isPC, setisPS] = React.useState(
    window.innerHeight > window.innerWidth ? false : true
  );
  function setFalse() {
    setisPS(false);
  }
  function setTrue() {
    setisPS(true);
  }
  window.addEventListener("resize", () => {
    if (window.innerHeight - window.innerWidth > 0) {
      setFalse(isPC);
    }
    if (window.innerHeight - window.innerWidth < 0) {
      setTrue(isPC);
    }
  });
  return isPC;
};
export default useOrientationchange;
