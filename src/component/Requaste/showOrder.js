import { useEffect, useState } from "react";
import { httpHelper } from "../../helper/http_helper";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../../utils/constants";
import SnackBar from "../../snackBar";
function ViewReq(props) {
  const [SnackBarGo, setSnackBarGo] = useState(false);
  const [SnackBarType, setSnackBarType] = useState(false);
  const [SnackBarMs, setSnackBarMs] = useState("");
  const [data, setdata] = useState();
  const [path, setpath] = useState();
  const  setshowRj = props.setshowRj;
  const setshowAC = props.setshowAC;
  const [re, setRe] = useState();
  const navigate = useNavigate();
  const hrf = useParams();
  
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  useEffect(() => {
    setdata(props.data);
  }, []);

  return (
    <>
      <SnackBar
        run={SnackBarGo}
        off={setSnackBarGo}
        data={SnackBarMs}
        type={SnackBarType}
      />
            <SnackBar
        run={SnackBarGo}
        off={setSnackBarGo}
        data={SnackBarMs}
        type={SnackBarType}
      />
      {data && (
        <div className="showOrderToDR">
          <div className="showOrderToDRuserInfo">
            <img src={data.request_obj.image} />
            <span>
              <h1>{data.request_obj.user_name}</h1>
              <h2>
                {data.request_obj.account_type_name} , {data.type_name}
              </h2>
            </span>
            <a style={{backgroundColor:data.state==2&&"red"}}>{data.state_name}</a>
            <svg
              onClick={(e) => {
                props.back(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 6.5 11.5"
            >
              <path
                id="Arrow"
                d="M.22,10.22A.75.75,0,0,0,1.28,11.28l5-5a.75.75,0,0,0,0-1.061l-5-5A.75.75,0,0,0,.22,1.28l4.47,4.47Z"
                fill="#2a2d37"
              />
            </svg>
          </div>
          <div className="showOrderToDRBody">
            <span>
              <h1>: الاسم كامل</h1>
              <br />
              <h2>{data.full_name}</h2>
            </span>
            <br />
            <span>
              <h1>: رقم الهاتف </h1>
              <br />
              <div>
                <img src={data.country_flag} />
                {data.mobile_without_prefix} {data.country_key}
              </div>
            </span>
            <br />
            {data.type==1&&<span>
              <h1>:المحافظة</h1>
              <br />
              <h2>{data.city_name}</h2>
            </span>}
            <br />
            <span>
              <h1>:تاريخ الحجز</h1>
              <br />
              <h2>{data.date}</h2>
            </span>
            <br />
            <span>
              <h1>:وصف الحالة</h1>
              <br />
              <h2>
                دكتور ، لدي ألم في الجانب الأيسر من الخصر دكتور ، لدي ألم في
                الجانب الأيسر من الخصر دكتور ، لدي ألم في الجانب الأيسر من الخصر
              </h2>
            </span>
            <br />
            <span>
              <h1>: طريقة الدفع </h1>
              <br />
              <img src={data.payment_image} />
            </span>
            <br />
            {data.state==0&&<div className="showOrderToDRBodybutton">
              <button
                onClick={(e) => {
                  setshowRj(true);
                }}
                style={{
                  width: "30%",
                  backgroundColor: "white",
                  borderColor: "#EC1C2E",
                  color: "#EC1C2E",
                }}
              >
                رفض
              </button>
              <button style={{ width: "60%" }}
              onClick={e=>{
                  setshowAC(true)
              }}
              >قبول</button>
            </div>}
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      )}

    </>
  );
}

export default ViewReq;
