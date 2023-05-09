import { useEffect, useState } from "react";
import { httpHelper } from "../../helper/http_helper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SnackBar from "../../snackBar";
import { url } from "../../utils/constants";
function ADD(props) {
  const [SnackBarGo, setSnackBarGo] = useState(false);
  const [SnackBarType, setSnackBarType] = useState(false);
  const [SnackBarMs, setSnackBarMs] = useState("");
  const [Listimage, setListImage] = useState([]);
  const [data, setdata] = useState([]);
  const [images, setImages] = useState([]);
  const [ShowAD, setShowAD] = useState(true);
  const [Day, setDay] = useState(1);
  const [msg, setmsg] = useState({});
  const [path, setpath] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  const handleChange = (e) => {
    setImages((k) => [...k, e.target.files[0]]);
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setListImage((e) => [...e, URL.createObjectURL(event.target.files[0])]);
    }
  };
  useEffect(() => {
    httpHelper(
      `${url}/profile/ads`,
      [
        {
          key: "Authorization",
          value: `Bearer ${localStorage.getItem("token")}`,
        },
      ],
      {},
      "get"
    ).then((e) => {
        setdata(e.data)
    });
  }, []);
  function handlePost() {
    const formData = new FormData();
    formData.append("description", msg);
    formData.append("files", images[0]);
    formData.append("days_no", Day);
    axios
      .post(`${url}/profile/ads/store`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((result) => {
        props.SnackBarType(result.data.status);
        props.SnackBarGo(true)
        props.SnackBarMs(result.data.message)
      });
  }
  return (
    <>
      <SnackBar run={SnackBarGo} off={setSnackBarGo} data={SnackBarMs} type={SnackBarType}/> 
      <div className="stingProfile">
        {ShowAD ? (
          <>
            <div className="stingProfileImageCon"></div>
            <div

              className="stingProfileCon"
            >
              <div className="stingProfileConData">
                <div className="allAddCon">
                  <h1> المرفقات </h1>
                  <div className="allAddConAD">
                    <span>
                      <input
                        id=""
                        type={"file"}
                        accept="image/png, image/jpeg"
                        onChange={(e) => {
                          handleChange(e);
                          onImageChange(e);
                        }}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 35"
                      >
                        <g id="Camera" transform="translate(0.174 0.457)">
                          <path
                            id="Camera-2"
                            data-name="Camera"
                            d="M31.281,35H8.719A8.606,8.606,0,0,1,0,26.532V14.994A8.606,8.606,0,0,1,8.719,6.526.4.4,0,0,0,9.1,6.293L9.22,6.06l.166-.34c.523-1.07,1.113-2.28,1.474-2.981A4.878,4.878,0,0,1,15.28,0H24.7A4.894,4.894,0,0,1,29.14,2.739c.315.612.793,1.594,1.255,2.544l.284.584.2.427a.453.453,0,0,0,.4.233A8.606,8.606,0,0,1,40,14.994V26.532A8.606,8.606,0,0,1,31.281,35ZM20,12.449A7.958,7.958,0,0,0,14.42,14.7a7.414,7.414,0,0,0-2.281,5.379,7.547,7.547,0,0,0,2.3,5.4A8.007,8.007,0,0,0,20,27.716a7.906,7.906,0,0,0,5.54-2.233,7.465,7.465,0,0,0,.02-10.8A7.925,7.925,0,0,0,20,12.449Zm11.22-.465a1.759,1.759,0,1,0,1.822,1.767A1.786,1.786,0,0,0,31.22,11.984ZM20,24.8a4.9,4.9,0,0,1-3.44-1.379,4.621,4.621,0,0,1-1.42-3.341v-.019a4.481,4.481,0,0,1,1.4-3.3,4.979,4.979,0,0,1,6.9-.019,4.627,4.627,0,0,1,1.42,3.341A4.822,4.822,0,0,1,20,24.8Z"
                            transform="translate(-0.174 -0.457)"
                            fill="#626262"
                          />
                        </g>
                      </svg>
                      <h1>صور</h1>
                    </span>
                    <span>
                      <input
                        id=""
                        type={"file"}
                        accept="image/png, image/jpeg"
                        onChange={(e) => {
                          handleChange(e);
                          onImageChange(e);
                        }}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40.863 34.883"
                      >
                        <path
                          id="Vector"
                          d="M38.671,5.821c-.817-.439-2.532-.9-4.864.738l-2.93,2.073C30.658,2.432,27.967,0,21.428,0H9.468C2.651,0,0,2.651,0,9.468V25.415C0,30,2.492,34.883,9.468,34.883h11.96c6.538,0,9.229-2.432,9.448-8.631l2.93,2.073a5.485,5.485,0,0,0,3.169,1.156,3.625,3.625,0,0,0,1.694-.419c.817-.419,2.193-1.555,2.193-4.405V10.226C40.863,7.375,39.488,6.239,38.671,5.821ZM18.438,16.206a3.747,3.747,0,1,1,3.747-3.747A3.756,3.756,0,0,1,18.438,16.206Z"
                          transform="translate(0)"
                          fill="#626262"
                        />
                      </svg>
                      <h1>فيديو</h1>
                      <h2>30 ثانية</h2>
                    </span>
                  </div>
                  <div className="allAddConSH">
                    {Listimage.map((e, index) => {
                      return (
                        <span>
                          <svg
                            onClick={(e) => {
                              var list = [];
                              var listK = [];
                              images.map((kL, ind) => {
                                if (ind != index) {
                                  listK.push(kL);
                                } 
                              });
                              Listimage.map((k, inde) => {
                                if (inde != index) {
                                  list.push(k);
                                } 
                                setImages(listK);
                                setListImage(list);
                              });
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 35 35"
                          >
                            <g id="close" transform="translate(0.193 0.302)">
                              <circle
                                id="Ellipse_54"
                                data-name="Ellipse 54"
                                cx="17.5"
                                cy="17.5"
                                r="17.5"
                                transform="translate(-0.193 -0.302)"
                                fill="#2a2d37"
                                opacity="0.5"
                              />
                              <g
                                id="close-2"
                                data-name="close"
                                transform="translate(5.283 5.238)"
                              >
                                <path
                                  id="Path_54354"
                                  data-name="Path 54354"
                                  d="M0,0H24.34V24.34H0Z"
                                  fill="none"
                                />
                                <path
                                  id="Path_54355"
                                  data-name="Path 54355"
                                  d="M18.483,5.714a1.01,1.01,0,0,0-1.43,0l-4.959,4.949L7.134,5.7A1.011,1.011,0,0,0,5.7,7.134l4.959,4.959L5.7,17.053a1.011,1.011,0,0,0,1.43,1.43l4.959-4.959,4.959,4.959a1.011,1.011,0,0,0,1.43-1.43l-4.959-4.959,4.959-4.959A1.016,1.016,0,0,0,18.483,5.714Z"
                                  transform="translate(0.077 0.077)"
                                  fill="#fff"
                                />
                              </g>
                            </g>
                          </svg>
                          <img src={e} />
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="stingProfileConDataInput">
                  <h1>الوصف</h1>
                  <textarea
                    placeholder=" ادخل الوصف"
                    name="msg"
                    onChange={(e) => {
                      setmsg(e.target.value);
                    }}
                  ></textarea>
                </div>
                <br />

                <div className="ADDADDay">
                  <ul>
                    <li
                      id={Day == 1 ? "ADDADDaySel" : ""}
                      onClick={() => setDay(1)}
                    >
                      1 من الايام
                    </li>
                    <li
                      id={Day == 2 ? "ADDADDaySel" : ""}
                      onClick={() => setDay(2)}
                    >
                      2 من الايام
                    </li>
                    <li
                      id={Day == 3 ? "ADDADDaySel" : ""}
                      onClick={() => setDay(3)}
                    >
                      3 من الايام
                    </li>
                    <li
                      id={Day == 4 ? "ADDADDaySel" : ""}
                      onClick={() => setDay(4)}
                    >
                      4 من الايام
                    </li>
                    <li
                      id={Day == 5 ? "ADDADDaySel" : ""}
                      onClick={() => setDay(5)}
                    >
                      5 من الايام
                    </li>
                  </ul>
                </div>
                <br />

                <div className="ADDADButton">
                  <button
                    className="ADDADButtonSher"
                    onClick={(e) => handlePost()}
                  >
                    نشر
                  </button>
                  <button
                    className="ADDADButtonShow"
                    onClick={(e) => setShowAD(false)}
                  >
                    اعلاناتك
                  </button>
                </div>
              </div>
            </div>
          </>
        ) :(
          <div className="stingProfileImageConUL">
            <ul>
              {data.map(e=>{
              
              return(<li>
                <div className="stingProfileImageConULDO"> 
                  <h1>{e.title}</h1>
                  <h3>{e.description}</h3>
                  <div className="stingProfileImageConULDiv">
                    <button
                    onClick={()=>setpath(`/post/${e.id}`)}
                    >عرض</button>
                    <div>
                      <h2>{e.created_date}</h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 36 40"
                      >
                        <path
                          id="Calendar"
                          d="M10.193,40a10.286,10.286,0,0,1-7.45-2.707A10.254,10.254,0,0,1,0,29.808V12.971A10,10,0,0,1,2.743,5.6,9.965,9.965,0,0,1,9.167,2.973V1.4a1.384,1.384,0,0,1,2.756-.189l.013.189V2.938H24.08V1.4a1.385,1.385,0,0,1,2.758-.189l.013.189V2.973a9.9,9.9,0,0,1,6.5,2.7A10.007,10.007,0,0,1,36,12.971V29.949a10.033,10.033,0,0,1-2.74,7.384A10.371,10.371,0,0,1,25.807,40ZM2.768,29.808c0,4.774,2.637,7.4,7.425,7.4H25.807c4.786,0,7.423-2.578,7.423-7.261V16.566H2.768ZM33.23,13.776v-.808a7.222,7.222,0,0,0-1.843-5.328,6.994,6.994,0,0,0-4.536-1.871v1.75a1.385,1.385,0,0,1-2.758.189l-.013-.189V5.728H11.936V7.519a1.384,1.384,0,0,1-2.756.189l-.013-.189V5.77c-4.137.35-6.4,2.875-6.4,7.2v.8ZM24.817,29.668a1.39,1.39,0,0,1,1.2-1.382l.2-.013a1.4,1.4,0,0,1,.189,2.777l-.189.013A1.393,1.393,0,0,1,24.817,29.668Zm-8.194,0a1.392,1.392,0,0,1,1.2-1.382l.205-.013a1.4,1.4,0,0,1,.189,2.777l-.189.013A1.394,1.394,0,0,1,16.623,29.668Zm-8.208,0a1.39,1.39,0,0,1,1.2-1.382l.2-.013A1.4,1.4,0,0,1,10,31.05l-.205.013A1.389,1.389,0,0,1,8.415,29.668Zm16.4-7.231a1.39,1.39,0,0,1,1.2-1.382l.2-.013a1.4,1.4,0,0,1,.189,2.777l-.189.013A1.393,1.393,0,0,1,24.817,22.437Zm-8.194,0a1.392,1.392,0,0,1,1.2-1.382l.205-.013a1.4,1.4,0,0,1,.189,2.777l-.189.013A1.394,1.394,0,0,1,16.623,22.437Zm-8.208,0a1.39,1.39,0,0,1,1.2-1.382l.2-.013A1.4,1.4,0,0,1,10,23.82l-.205.013A1.389,1.389,0,0,1,8.415,22.437Z"
                          fill="#626262"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="stingProfileImageConULIMG">
                  <img src={e.file_post.file}/>
                 </div>
              </li>)})}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
export default ADD;
