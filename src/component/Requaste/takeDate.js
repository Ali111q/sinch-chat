import { httpHelper } from "../../helper/http_helper";
import { useState, useEffect } from "react";
import god from "../../assets/imgs/god.jpg";
import { useNavigate, useParams } from "react-router-dom";
import img from "../../assets/imgs/don.svg";
import { url } from "../../utils/constants";
function TakeDate(props) {
  const today = Date.now();
  const [path, setpath] = useState();
  const navigate = useNavigate();
  const DrData = useParams();
  const userDat = props.data;
  const [don, setdon] = useState(false);
  const [selcted, setselcted] = useState(1);
  const [ctiyList, setctiyList] = useState([]);
  const [payType, setpayType] = useState([]);
  const [data, setdata] = useState({
    type: 1,
    user_id: DrData.id,
    country_id: 1,
    mobile: localStorage.getItem("mobile"),
    consultation_type: 1,
  });
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  useEffect(() => {
    httpHelper(
      `${url}/cities?country_id=${userDat.country_id}`,
      [
        {
          key: "Authorization",
          value: `Bearer ${localStorage.getItem("token")}`,
        },
      ],
      {},
      "get"
    ).then((e) => {
      setctiyList(e.data);
      !e.status && alert(e.message);
    });
    httpHelper(
      `${url}/payment_ways`,
      [
        {
          key: "Authorization",
          value: `Bearer ${localStorage.getItem("token")}`,
        },
      ],
      {},
      "get"
    ).then((e) => {
      setpayType(e.data);
      setselcted(e.data[0].id);
      setdata((defaultData) => {
        return {
          ...defaultData,
          payment_way_id: e.data[0].id,
        };
      });
    });
  }, []);
  function handelPoset() {
    httpHelper(
      `${url}/orders/add`,
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
      data,
      "post"
    ).then((e) => {
      e.status ? setdon(true) : alert(e.message);
    });
  }
  if (don == false) {
    return (
      <>
        {userDat && (
          <div className="stingProfile">
            <div className="stingProfileImageCon">
              <div className="positionabsolute">
                <div className="stingProfileImageConspan">
                  <img src={userDat.image} />
                </div>
              </div>
              <h1>{userDat.user_name}</h1>
              <br />
              <p>{userDat.account_type_name}</p>
            </div>
            <div className="stingProfileCon">
              <div className="stingProfileConData">
                <div className="stingProfileConDataInput">
                  <h1>الاسم كامل</h1>
                  <input
                    type={"text"}
                    placeholder="الاسم كامل"
                    onChange={(e) => {
                      setdata((defaultData) => {
                        return {
                          ...defaultData,
                          full_name: e.target.value,
                        };
                      });
                    }}
                  />
                </div>
                <div className="RequasteCoInput">
                  <h1>رقم الهاتف</h1>
                  <div className="stingProfileConDataInputspanNum">
                    <input
                      type={"number"}
                      maxLength="12"
                      placeholder="رقم الهاتف"
                      defaultValue={localStorage.getItem("mobile")}
                      onChange={(e) => {
                        setdata((defaultData) => {
                          return {
                            ...defaultData,
                            mobile: e.target.value,
                          };
                        });
                      }}
                    />
                    <div>
                      <p>+964</p>
                      <svg
                        id="iq"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50.47 33.647"
                      >
                        <path
                          id="Path_172"
                          data-name="Path 172"
                          d="M0,0H50.47V33.647H0Z"
                          fill="#ce1126"
                        />
                        <path
                          id="Path_173"
                          data-name="Path 173"
                          d="M0,200H50.47v22.431H0Z"
                          transform="translate(0 -188.784)"
                          fill="#fff"
                        />
                        <path
                          id="Path_174"
                          data-name="Path 174"
                          d="M0,400H50.47v11.216H0Z"
                          transform="translate(0 -377.569)"
                          fill="#2a2d37"
                        />
                        <g
                          id="Group_16"
                          data-name="Group 16"
                          transform="translate(15.178 13.506)"
                        >
                          <path
                            id="Path_175"
                            data-name="Path 175"
                            d="M286.637,242.648a.611.611,0,0,1-.171-.129c-.039-.054-.016-.056.143-.013a.635.635,0,0,0,.651-.107l.161-.135.189.1a.6.6,0,0,0,.247.081.541.541,0,0,0,.246-.315c-.007-.093.072-.07.11.032a.365.365,0,0,1-.229.481.523.523,0,0,1-.327-.035c-.177-.062-.207-.061-.3.007A.669.669,0,0,1,286.637,242.648Zm.7-.644a.991.991,0,0,1-.125-.5c.024-.071.048-.085.112-.065.113.035.139.113.122.376C287.437,242.028,287.405,242.085,287.341,242Zm-8.291-.239c-.023.161.285.561.425.633-.095.042-.212.023-.3.071-.485.485-2.255,2.211-2.579,2.624.958.019,2.02-.013,2.918-.054,0-.651.616-.684,1.029-.921.212.335.746.309.813.813,0,.6,0,1.511,0,2.167h-8.181a1.192,1.192,0,0,1-1.517.921c.247-.258.664-.347.813-.7a2.412,2.412,0,0,0-.495-1.708,2.948,2.948,0,0,0,.874-.459c-.288.874.748.778,1.517.758.026-.3.011-.647-.217-.691a2.1,2.1,0,0,0,.813-.542v1.178c1.828,0,3.8-.014,5.666-.014,0-.369.1-.961-.194-.961s-.013.758-.23.758h-4.375c0-.163,0-.5,0-.75.185-.185.163-.169,1.43-1.436C277.384,243.323,278.273,242.52,279.05,241.765Zm10.936-.031a3.926,3.926,0,0,0,.921.488c-.043.155-.181.216-.217.379v3.3c.418.092.506-.145.7-.271.054.529.391,1.047.379,1.462h-1.788Q289.987,244.416,289.987,241.734ZM287.6,243.5s.65-.549.65-.57v2.884h.468c0-1.1-.015-2.213-.015-3.234a4.093,4.093,0,0,0,.656-.658v5.165h-4.107c-.061-1.072-.071-2.182,1.179-1.943v-.438c-.038-.075-.107.018-.123-.079.2-.2.266-.249.8-.719,0,.566.01,1.9.01,1.9h.474S287.6,243.578,287.6,243.5Zm-1.541,2.284c.088.132.387.13.373-.093C286.384,245.512,285.991,245.582,286.062,245.788Z"
                            transform="translate(-271.66 -241.429)"
                            fill="#007a3d"
                          />
                          <circle
                            id="Ellipse_38"
                            data-name="Ellipse 38"
                            cx="0.251"
                            cy="0.251"
                            r="0.251"
                            transform="translate(2.263 6.026)"
                            fill="#007a3d"
                          />
                          <path
                            id="Path_176"
                            data-name="Path 176"
                            d="M454.482,246.961a3.924,3.924,0,0,0,.921.488c-.043.155-.181.216-.217.379v3.3c.418.092.506-.145.7-.271.054.529.391,1.047.379,1.463h-1.788Q454.483,249.643,454.482,246.961Z"
                            transform="translate(-444.23 -246.651)"
                            fill="#007a3d"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="stingProfileConDataInput">
                  <h1 className="title_log">تاريخ</h1>
                  <input
                    type="date"
                    min={today}
                    defaultValue={userDat}
                    onChange={(e) => {
                      setdata((defaultData) => {
                        return {
                          ...defaultData,
                          date: e.target.value,
                        };
                      });
                    }}
                  />
                </div>
                <div className="stingProfileConDataInput">
                  <h1 className="title_log">الوقت</h1>
                  <input
                    type={"time"}
                    onChange={(e) => {
                      setdata((defaultData) => {
                        return {
                          ...defaultData,
                          time: e.target.value,
                        };
                      });
                    }}
                  />
                </div>
                <span className="stingProfileConDataInput">
                  <h1>المحافظة</h1>
                  <div className="stingProfileConDataInputdiv">
                    <select
                      onChange={(e) => {
                        setdata((defaultData) => {
                          return {
                            ...defaultData,
                            city_id: e.target.value,
                          };
                        });
                      }}
                      name="city_id"
                    >
                      {ctiyList.map((e) => {
                        return (
                          <option key={e.id} value={e.id}>
                            {e.city_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </span>
                <div className="stingProfileConDataInput">
                  <h1>وصف الحالة</h1>
                  <textarea
                    placeholder="أذكر حالتك بالتفصيل"
                    name="bio"
                    onChange={(e) => {
                      setdata((defaultData) => {
                        return {
                          ...defaultData,
                          description: e.target.value,
                        };
                      });
                    }}
                  ></textarea>
                </div>
                <br />
                <div className="stingProfileConDataInput">
                  <h1>طريقة الدفع</h1>
                  <ul className="requestePayType">
                    {payType.map((e, index) => {
                      return (
                        <li
                          id={selcted == e.id ? "requestePayTypeli" : ""}
                          key={index}
                          onClick={() => {
                            setselcted(e.id);
                            setdata((defaultData) => {
                              return {
                                ...defaultData,
                                payment_way_id: e.id,
                              };
                            });
                          }}
                        >
                          <img src={e.image} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <br />
                <button
                  className="stingProfileConDataButton"
                  onClick={(e) => handelPoset()}
                >
                  إرسال الطلب
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        <div className="RequasteCoDonImage">
          <img src={img} />
          <h1>تم ارسال طلبك بنجاح</h1>
          <br />
          <p>ستتم الموافقة عليه وسنرد عليك في أقرب وقت ممكن</p>
          <br />
          <button>طلباتي</button>
          <br />
          <button id="RequasteCoDonImagebutton" onClick={() => setpath(-1)}>
            تم
          </button>
        </div>
      </>
    );
  }
}
export default TakeDate;
