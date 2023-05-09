import { useState, useEffect } from "react";
import SitingList from "../../component/sitinge/sitingList";
import AppBar from "../../component/home/appBar";
import SitingCont from "../../component/sitinge/all";
import "../../new.css";
import SnackBar from "../../snackBar";
import { httpHelper } from "../../helper/http_helper";
import Remov from "./removSecretarie";
import Haired from "./haierdSC";
function Siting(props) {
  const [SnackBarGo, setSnackBarGo] = useState(false);
  const [SnackBarType, setSnackBarType] = useState(false);
  const [SnackBarMs, setSnackBarMs] = useState("");
  const [ScrAlerr, setScrAlerr] = useState(false);
  const [ScrAlerrType, setScrAlerrType] = useState();
  const [userdata, setuserdata] = useState(false);
  const [mov, setmov] = useState(true);
  const data = JSON.parse(localStorage.getItem('userData'))
  const [type, settype] = useState(1);
  return (
    <>
    {ScrAlerr&&(
      ScrAlerrType == 1?
    <Remov
    setScrAlerr={setScrAlerr}
    userdata={userdata}
    SnackBarGo={setSnackBarGo}
    SnackBarType={setSnackBarType}
    SnackBarMs={setSnackBarMs}
     />
     :
     <Haired
     setScrAlerr={setScrAlerr}
     userdata={userdata}
     SnackBarGo={setSnackBarGo}
     SnackBarType={setSnackBarType}
     SnackBarMs={setSnackBarMs}
      />
     )}
      <SnackBar
        run={SnackBarGo}
        off={setSnackBarGo}
        data={SnackBarMs}
        type={SnackBarType}
      />
      <div className="sitingMane">
        {!mov && (
          <div onClick={() => setmov(true)} className="mobmov">
            <p>.</p>
            <h1>رجوع</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.5 11.5">
              <path
                id="Arrow"
                d="M.22,10.22A.75.75,0,0,0,1.28,11.28l5-5a.75.75,0,0,0,0-1.061l-5-5A.75.75,0,0,0,.22,1.28l4.47,4.47Z"
                fill="#2a2d37"
              />
            </svg>
          </div>
        )}
        <div className="sitingManeCon" id={!mov ? "" : "no"}>
          <SitingCont
            setScrAlerrType={setScrAlerrType}
            SCRALert={setScrAlerr}
            SCRData={setuserdata}
            SnackBarGo={setSnackBarGo}
            SnackBarType={setSnackBarType}
            SnackBarMs={setSnackBarMs}
            run={props.run}
            data={data}
            type={type}
          />
        </div>
        <div id={mov ? "sitingManeList" : ""} className="sitingManeList">
          <SitingList run={props.run} type={settype} stmov={setmov} />
        </div>
      </div>
    </>
  );
}
export default Siting;
