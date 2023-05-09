import { useEffect, useState } from "react";
import axios from "axios";
import SnackBar from "../../snackBar";
import { url } from "../../utils/constants";
function CON(props) {

  const [Listimage, setListImage] = useState([]);
  const [images, setImages] = useState([]);
  const [title, settitle] = useState({});
  const [msg, setmsg] = useState({});
  const handleChange = (e) => {
    setImages((k) => [...k, e.target.files[0]]);
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setListImage((e) => [...e, URL.createObjectURL(event.target.files[0])]);
    }
  };
  function handlePost() {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("msg", msg);
    images.map((e) => {
      formData.append("images[]", e);
    });

    axios
      .post(`${url}/profile/contact_us`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((result) => {
        props.SnackBarType(result.data.status);
        props.SnackBarGo(true)
        props.SnackBarMs(result.data.message)
      });  }
  return (
    <>
      <div className="stingProfile">
        <div className="stingProfileImageCon"></div>
        <div
          style={{

          }}
          className="stingProfileCon"
        >
          <div className="stingProfileConData">
            <div className="stingProfileConDataInput">
              <h1> عنوان الرسالة</h1>
              <input
                placeholder="عنوان الرسالة"
                name="title"
                onChange={e=>{
                  settitle(e.target.value)
                }}
                type={"text"}
              />
            </div>
            <div className="stingProfileConDataInput">
              <h1>الرسالة</h1>
              <textarea
                placeholder=" الرسالة"
                name="msg"
                onChange={e=>{
                  setmsg(e.target.value)
                }}
              ></textarea>
            </div>
            <div className="allAddCon">
              <h1> المرفقات ( إختياري )</h1>
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 35">
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
              <button 
              onClick={e=>handlePost()}
              >إرسال</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CON;
