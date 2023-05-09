import { useEffect, useState } from "react";
import { httpHelper } from "../../helper/http_helper";
import { useNavigate, useParams } from "react-router-dom";
import AppBar from "../../component/home/appBar";
import { url } from "../../utils/constants";
import SnackBar from "../../snackBar";
function ViewMyReq(props) {
  const [SnackBarGo, setSnackBarGo] = useState(false);
  const [SnackBarType, setSnackBarType] = useState(false);
  const [SnackBarMs, setSnackBarMs] = useState("");
  const [data, setdata] = useState();
  const [path, setpath] = useState();
  const [alert, setalert] = useState(false);
  const [re, setRe] = useState();
  const navigate = useNavigate();
  const hrf = useParams();
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  useEffect(() => {
    httpHelper(
      `${url}/orders/show?id=${hrf.id}&type=2`,
      [
        {
          key: "Authorization",
          value: `Bearer ${localStorage.getItem("token")}`,
        },
      ],
      {},
      "get"
    ).then((e) => {
      setdata(e.data);
    });
  }, []);
  function HandelCancel() {
    httpHelper(
      `${url}/orders/cancel`,
      [
        {
          key: "Authorization",
          value: `Bearer ${localStorage.getItem("token")}`,
        },
        {
          key: "Content-Type",
          value: "application/json",
        },
      ],
      {
        id: hrf.id,
        reason: `${re}`,
      },
      "post"
    ).then((e) => {
      setSnackBarType(e.status);
      setSnackBarGo(true);
      setSnackBarMs(e.message);
      if (e.status) {
        setTimeout(() => {
          setpath(-1);
        }, 3000);
      }
    });
  }
  return (
    <>
      <AppBar run={props.run} />
      {data && (
        <div className="ViewMyReq">
          <div className="ViewMyReQDrInformation">
            <img src={data.received_obj.image} />
            <h1>{data.received_obj.user_name}</h1>
            <p>{data.received_obj.account_type_name}</p>
          </div>
          <div className="ViewMyReQforInputCon">
            <div className="ViewMyReQforInput">
              <h1>الاسم كامل</h1>
              <p>{data.full_name}</p>
            </div>
            <div className="ViewMyReQforInput">
              <h1> رقم الهاتف</h1>
              <div className="ViewMyReQforInputNum">
                <div>
                  <img src={data.country_flag} />
                  <h2>{data.country_key}</h2>
                </div>
                <h1>{data.mobile_without_prefix}</h1>
              </div>
            </div>
            {data.description&&<div className="ViewMyReQforInput">
              <h1> وصف الحالة</h1>
              <p>{data.description}</p>
            </div>}
            {data.state==1&&<div className="ViewMyReQforInput">
              <h1> التكلفة</h1>
              <p>{data.cost_format} {data.currency}</p>
            </div>}
            {data.state==1&&data.minute&&<div className="ViewMyReQforInput">
              <h1> الوقت</h1>
              <p>{data.minute} دقيقة</p>
            </div>}
            <div className="ViewMyReQforInput">
              <h1> تاريخ الحجز</h1>
              <p>{data.date}</p>
            </div>
            <br/>
            <span
            id="showOrderToDRBodyspan"
             className="showOrderToDRBodyspan">
              <h1> طريقة الدفع </h1>
              <br />
              <img src={data.payment_image} />
            </span>
            {data.state == 1&&
              <button
                style={{
                  background:"#0199EC",
                  marginBottom:"0"
                }}
                onClick={() => {
                  httpHelper(
                    `${url}/orders/pay`,
                    [
                      {
                        key: "Authorization",
                        value: `Bearer ${localStorage.getItem("token")}`,
                      },
                      {
                        key: "Content-Type",
                        value: "application/json",
                      },
                    ],
                    {
                      id:data.id,
                    },
                    "post"
                  ).then((e)=>{
                    window.open(e.data.new_url)
                  })
                }}
                className="ViewMyReQforInputButton"
              >
                دفع
              </button>
            }
            <button
              style={{
                background: data.state == 4 && "#0199EC",
              }}
              onClick={() => {
                data.state == 4 ? setpath(-1) : setalert(true);
              }}
              className="ViewMyReQforInputButton"
            >
              {data.state == 4 ? "تم" : "إلغاء"}
            </button>

            <br></br>
          </div>
        </div>
      )}
      <div
        onClick={() => {
          setalert(false);
        }}
        className={alert ? "alert" : ""}
      ></div>
      <div style={{ bottom: alert ? "" : "-110vh" }} class="request-alert">
        <span class="top-alert"></span>
        <h1>إلغاء الطلب</h1>
        <div class="pric-req">
          <div>
            <h1>ما سبب إلغاء الطلب ؟</h1>
          </div>
          <textarea
            onChange={(e) => {
              setRe(e);
            }}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button onClick={() => HandelCancel()} class="alert-din-rq">
          إلغاء
        </button>
      </div>
    </>
  );
}

export default ViewMyReq;
