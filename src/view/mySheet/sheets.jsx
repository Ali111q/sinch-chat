import React from "react";
import useOrientationchange from "../../hooks/orientationchange";
import MoSheet from "./mosheet";
import PcSheet from "./pcsheet";
import "./style.css";
function Sheets() {
  const isPc = useOrientationchange();
  return <>{isPc ? <PcSheet /> : <MoSheet />}</>;
}

export default Sheets;
