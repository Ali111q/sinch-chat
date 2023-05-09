import { httpHelper } from "../../helper/http_helper";
import { url } from "../../utils/constants";
function Remov(props) {
  return (
    <>
<div class="alert" onClick={() => props.setScrAlerr(false)}></div>
        <div style={{ zIndex: "5" }} class="request-alert22">
          <span class="top-alert"></span>
          <span class="img-cek">
            <img src={props.userdata.image} alt="" />
          </span>
          <h2>{props.userdata.name}</h2>
          <p>{props.userdata.type_name} </p>

          <div class="pric-req">
            <div>
              <h1>هل تريد إزالة السكرتير ؟</h1>
            </div>
          </div>
          <button
            onClick={() => {
              httpHelper(
                `${url}/profile/secretaries/delete?id=${props.userdata.id}`,
                [
                  {
                    key: "Authorization",
                    value: `Bearer ${localStorage.getItem("token")}`,
                  },
                ],
                {},
                "DELETE"
              ).then((e) => {
                props.SnackBarType(e.status);
                props.SnackBarGo(true)
                props.SnackBarMs(e.message)
              });
            }}
            class="alert-din-rq333"
          >
            إزالة{" "}
          </button>
        </div>
    </>
  );
}
export default Remov;
