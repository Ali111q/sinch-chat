import ProfileSiting from "./profile";
import Save from "./save";
import Qr from "./Qrcode";
import ST from "./st";
import CON from "./contact";
import ABUT from "./abutUs";
import PRIV from "./privacy";
import Secretaries from "./secretarie";
import ADD from "./AddAd";
function SitingCont(props) {
  const data = props.data;
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {props.type == 1 && <ProfileSiting SnackBarGo={props.SnackBarGo} SnackBarType={props.SnackBarType} SnackBarMs={props.SnackBarMs} run={props.run} data={data} />}
        {props.type == 2 && <Save />}
        {props.type == 6 && <Qr data={data} />}
        {props.type == 3 && <ADD SnackBarGo={props.SnackBarGo} SnackBarType={props.SnackBarType} SnackBarMs={props.SnackBarMs} data={data} />}
        {props.type == 4 && <Secretaries setScrAlerrType={props.setScrAlerrType} SCRALert={props.SCRALert} SCRData={props.SCRData} SnackBarGo={props.SnackBarGo} SnackBarType={props.SnackBarType} SnackBarMs={props.SnackBarMs} data={data} run={props.run}/>}
        {props.type == 5 && <ST SnackBarGo={props.SnackBarGo} SnackBarType={props.SnackBarType} SnackBarMs={props.SnackBarMs} checked={data} />}
        {props.type == 7 && <CON SnackBarGo={props.SnackBarGo} SnackBarType={props.SnackBarType} SnackBarMs={props.SnackBarMs} data={data} />}
        {props.type == 9 && <PRIV />}
        {props.type == 8 && <ABUT />}
      </div>
    </>
  );
}
export default SitingCont;
