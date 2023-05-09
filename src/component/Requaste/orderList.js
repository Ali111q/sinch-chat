import { httpHelper } from "../../helper/http_helper";
import { useState, useEffect } from "react";
import god from "../../assets/imgs/god.jpg";
import { useNavigate, useParams } from "react-router-dom";
import img from "../../assets/imgs/don.svg";
import { orders, url } from "../../utils/constants";
import AppBar from "../home/appBar";
import ViewReq from "./showOrder";
import SnackBar from "../../snackBar";
function OrderList(props) {
  const [SnackBarGo, setSnackBarGo] = useState(false);
  const [SnackBarType, setSnackBarType] = useState(false);
  const [SnackBarMs, setSnackBarMs] = useState("");
  const [path, setpath] = useState();
  const navigate = useNavigate();
  const [selcted, setselcted] = useState(1);
  const [reason, setreason] = useState(1);
  const [data, setdata] = useState([]);
  const [olddata, setolddata] = useState([]);
  const [prices, setprices] = useState();
  const [showOrderData, setshowOrderData] = useState(false);
  const [orderData, setorderData] = useState();
  const orderType = useParams();
  const [showRj, setshowRj] = useState(false);
  const [showAC, setshowAC] = useState(false);
  const [showACdataprices, setshowACdataprices] = useState();
  const [showACdatatime, setshowACdatatime] = useState();
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  useEffect(() => {
    httpHelper(
      `${url}/prices?type=2`,
      [
        {
          key: "Authorization",
          value: `Bearer ${localStorage.getItem("token")}`,
        },
      ],
      {},
      "get"
    ).then((e) => {
      setprices(e.data)
      setshowACdataprices(e.data[0].product_id)
    });
  }, []);
  useEffect(() => {
    httpHelper(
      `${url}/orders/?type=${selcted}&isBooking=${orderType.type}`,
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
      setolddata(e.data);
    });
  }, [selcted, orderType.type]);
  return (
    <>
      <AppBar run={props.run} />
      <SnackBar
        run={SnackBarGo}
        off={setSnackBarGo}
        data={SnackBarMs}
        type={SnackBarType}
      />
      <div className="orderListMainCON">
        {showOrderData ? (
          <ViewReq
            data={orderData}
            back={setshowOrderData}
            setshowRj={setshowRj}
            setshowAC={setshowAC}
          />
        ) : (
          <div className="orderListMainCONbody">
            <div className="orderListMainCONbodySerchBar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35.874"
                height="35.874"
                viewBox="0 0 35.874 35.874"
              >
                <path
                  id="ico"
                  d="M28.142,25.836,37.4,35.09A1.631,1.631,0,0,1,35.09,37.4l-9.254-9.254a14.674,14.674,0,1,1,2.306-2.306ZM16.676,28.09A11.414,11.414,0,1,0,5.261,16.676,11.414,11.414,0,0,0,16.676,28.09Z"
                  transform="translate(-2 -2)"
                  fill="#454f63"
                />
              </svg>
              <input
                placeholder="Search"
                onChange={(j) => {
                  setdata(olddata);
                  var newList = [];
                  var name = j.target.value;
                  var nameLingth = j.target.value.split("").length;
                  olddata.map((e) => {
                    e.orders.map((k) => {
                      if (k.received_obj.user_name.includes(name)) {
                        newList.push(k);
                      }
                    });
                  });
                  if (nameLingth != 0) {
                    setdata([
                      {
                        date: j.target.value,
                        orders: newList,
                      },
                    ]);
                  } else {
                    setdata(olddata);
                  }
                }}
              />
            </div>
            <div className="orderListMainCONbodyItemList">
              <ul>
                {data && data.length != 0 ? (
                  data.map((e, i) => {
                    return (
                      <>
                        <ul className="sher-alert-list-scrollul" key={i}>
                          <span>
                            <p>.</p>
                            <p>.</p>
                          </span>
                          <h1>{e.date}</h1>
                          <span>
                            <p>.</p>
                            <p>.</p>
                          </span>
                        </ul>
                        {e.orders.map((e) => {
                          if (e.received_obj) {
                            return (
                              <li>
                                <button
                                  style={{
                                    backgroundColor:
                                      e.state == 4
                                        ? "red"
                                        : e.state == 0
                                        ? ""
                                        : "#0199EC",
                                  }}
                                  onClick={() => {
                                    setpath(`/ViewMyReq/${e.id}`);
                                  }}
                                >
                                  {e.state_name}
                                </button>
                                <div>
                                  <span>
                                    <h1>{e.received_obj.user_name}</h1>
                                    <p>{e.received_obj.account_type_name}</p>
                                  </span>
                                  <div className="imgCi">
                                    <img src={e.received_obj.image} />
                                  </div>
                                </div>
                              </li>
                            );
                          } else {
                            return (
                              <li>
                                <button
                                  onClick={() => {
                                    setorderData(e);
                                    setshowOrderData(true);
                                  }}
                                  style={{
                                    backgroundColor:
                                      e.state == 2
                                        ? "red"
                                        : e.state == 0
                                        ? "#0199EC"
                                        : "#0199EC",
                                  }}
                                >
                                  {e.state_name}
                                </button>
                                <div>
                                  <span>
                                    <h1>{e.request_obj.user_name}</h1>
                                    <p>{e.request_obj.account_type_name}</p>
                                  </span>
                                  <div className="imgCi">
                                    <img src={e.request_obj.image} />
                                  </div>
                                </div>
                              </li>
                            );
                          }
                        })}
                      </>
                    );
                  })
                ) : (
                  <div className="RequasteCoDonImage">
                    <img src={img} />
                    <h1>no order yet</h1>
                    <button
                      id="RequasteCoDonImagebutton"
                      onClick={() => setpath(-1)}
                    >
                      تم
                    </button>
                  </div>
                )}
              </ul>
            </div>
          </div>
        )}
        <div className="orderListMainCONtype">
          <ul>
            <li
              id={selcted == 2 ? "sel" : ""}
              onClick={() => {
                setselcted(1);
              }}
            >
              Riceved
            </li>
            <li
              id={selcted == 1 ? "sel" : ""}
              onClick={() => {
                setselcted(2);
              }}
            >
              Sent
            </li>
          </ul>
        </div>
      </div>
      {orderData && (
        <div
          style={{
            bottom: showRj ? "0" : "-100vh",
          }}
          class="request-alert"
        >
          <span class="top-alert"></span>
          <h1>رفض الاستشارة</h1>
          <div class="pric-req">
            <div>
              <h1>ما سبب رفضك للاستشارة ؟</h1>
            </div>
            <textarea onChange={e=>{
              setreason(e.target.value)
            }} name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button class="alert-din-rq"

          onClick={()=>{
            httpHelper(
              `${url}/orders/reject`,
              [
                {
                  key: "Content-Type",
                  value: "application/json",
                },
                {
                  key: "Authorization",
                  value: `Bearer ${localStorage.getItem("token")}`,
                },
              ],
              {
                id:orderData.id,
                reason:reason
              },
              "post"
            ).then((e) => {
              setSnackBarType(e.status);
              setSnackBarGo(true);
              setSnackBarMs(e.message);
              setshowRj(false);
            });
          }}
          >رفض</button>
        </div>
      )}
      {(showRj || showAC) && (
        <div
          className="alert"
          onClick={(e) => {
            setshowRj(false);
            setshowAC(false);
          }}
        ></div>
      )}
      {orderData && (
        <div
          style={{
            bottom: showAC ? "0" : "-100vh",
          }}
          class="request-alert"
        >
          <span class="top-alert"></span>
          <h1>قبول</h1>
          <div class="pric-req">
            <span>
              <div class="color-back1">
                <p>د.ع</p>
              </div>
              <div class="color-back11">
              <div class="color-back11">
              {orderData.type==2?
              <select onChange={(e)=>{
                setshowACdataprices(e.target.value)
              }}>
                {prices&&
                prices.map(e=>{
                  return <option value={e.product_id}>{e.price}</option> 
                })
                }
                </select>:<p>{orderData.cost_format}</p>
                }
              </div>
              </div>
              <div class="color-back111">
                <p>التكلفة</p>
              </div>
            </span>
            {orderData.type==2&&<span>
              <div class="color-back1">
                <p>دقيقة</p>
              </div>
              <div class="color-back11">
                <input type={"number"} placeholder={0}
                onChange={e=>{
                  setshowACdatatime(e.target.value)
                }}
                />
              </div>
              <div class="color-back111">
                <p>الوقت</p>
              </div>
            </span>}
          </div>
          <button 
          onClick={e=>{
            var postData = {}
            if (orderData.type==2) {
              postData ={
                id:orderData.id,
                minute:showACdatatime,
                product_id:showACdataprices
              }
            } else {
              postData ={
                id:orderData.id,
                product_id:orderData.product_id
              }
            }
            httpHelper(
              `${url}/orders/accept`,
              [
                {
                  key: "Content-Type",
                  value: "application/json",
                },
                {
                  key: "Authorization",
                  value: `Bearer ${localStorage.getItem("token")}`,
                },
              ],
              postData,
              "post"
            ).then((e) => {
              setSnackBarType(e.status);
              setSnackBarGo(true);
              setSnackBarMs(e.message);
              setshowRj(false);
            });
          }}
           class="alert-acs-rq">{orderData.type==1?"قبول":" بدء الاستشارة"}</button>
         
        </div>
      )}
    </>
  );
}

export default OrderList;
