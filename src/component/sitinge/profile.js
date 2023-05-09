import { useEffect, useState } from "react";
import god from "../../assets/imgs/god.jpg";
import MapPickera from "../else/map";
import { url } from "../../utils/constants";
import axios from "axios";
import ImgCrop from "../else/imgCropApp";
function ProfileSiting(props) {
  const data = props.data;
  const [img, setimg] = useState(data.image);
  const [updateData, setupdateData] = useState();
  const [show, setshow] = useState(false);
  const [registerData, setregisterData] = useState({
    full_name: data.full_name,
    lat: data.alt,
    lng: data.lng,
    location: data.location,
    consultation_start_format: data.consultation_start_format,
    consultation_end_format: data.consultation_end_format,
  });
  const [image, setImage] = useState("");
  const [imageSrc, setImageSrc] = useState('')
  const def = {
    lat: data.alt,
    lng: data.lng,
  };

  const today = Date.now();
  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;

    setregisterData((defaultdata) => {
      var val = value;
      return {
        ...defaultdata,
        [name]: type === "checkbox" ? checked : val,
      };
    });
  }
  function handleImageCrop(e){
    setImage(e)
  }
  function handlePost() {
    const hurl = `${url}/profile/edit`;
    const formData = new FormData();
    formData.append("image", image);
    formData.append("type", 2);
    for (let index = 0; index < Object.keys(registerData).length; index++) {
      formData.append(
        `${Object.keys(registerData)[index]}`,
        Object.values(registerData)[index]
      );
    }
    axios
      .post(hurl, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((result) => {
        props.SnackBarType(result.data.status);
        props.SnackBarGo(true)
        props.SnackBarMs(result.data.message)
        localStorage.setItem("userData",JSON.stringify(result.data.data))
        console.log(result.data)
      })
  }
  return (
    <>
      <div className="stingProfile">
        <div className="stingProfileImageCon">
          <div className="positionabsolute">
            <div className="stingProfileImageConspan">
              <img src={imageSrc ? imageSrc : img} />
            </div>
            <div className="stingProfileImageConaddimgsing">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 26">
                <g id="Camera" transform="translate(-0.414 -0.057)">
                  <path
                    id="Camera-2"
                    data-name="Camera"
                    d="M21.9,26H6.1A6.206,6.206,0,0,1,0,19.709V11.138A6.206,6.206,0,0,1,6.1,4.848a.277.277,0,0,0,.267-.173L6.454,4.5l.116-.253c.366-.8.779-1.694,1.032-2.214A3.4,3.4,0,0,1,10.7,0H17.29A3.41,3.41,0,0,1,20.4,2.034c.22.454.555,1.184.878,1.89l.2.433.141.317a.314.314,0,0,0,.28.173A6.206,6.206,0,0,1,28,11.138v8.571A6.206,6.206,0,0,1,21.9,26ZM14,9.248a5.406,5.406,0,0,0-3.906,1.674,5.678,5.678,0,0,0-1.6,4,5.779,5.779,0,0,0,1.61,4.012A5.438,5.438,0,0,0,14,20.589a5.371,5.371,0,0,0,3.878-1.659,5.783,5.783,0,0,0,.014-8.022A5.383,5.383,0,0,0,14,9.248ZM21.854,8.9a1.306,1.306,0,1,0,1.275,1.313A1.289,1.289,0,0,0,21.854,8.9ZM14,18.425A3.329,3.329,0,0,1,11.592,17.4a3.538,3.538,0,0,1-.994-2.482V14.9a3.431,3.431,0,0,1,.98-2.453,3.342,3.342,0,0,1,4.83-.014,3.543,3.543,0,0,1,.994,2.482A3.477,3.477,0,0,1,14,18.425Z"
                    transform="translate(0.414 0.057)"
                    fill="#0199EC"
                  />
                </g>
              </svg>
              <ImgCrop setimg={handleImageCrop} setSrc={setImageSrc} />
            </div>
          </div>
          <button onClick={(e) => handlePost()}>حفظ</button>
        </div>
        <div className="stingProfileCon">
          <div className="stingProfileConData">
            <div className="stingProfileConDataInput">
              <h1>الاسم كامل</h1>
              <input
                placeholder={data.full_name}
                name="full_name"
                onChange={handleInputChange}
                type={"text"}
              />
            </div>
            <div className="stingProfileConDataInput">
              <h1>النبذة</h1>
              <textarea name="bio" onChange={handleInputChange} maxLength={140}>
                {data.bio}
              </textarea>
            </div>
            <div className="stingProfileConDataInput">
              <h1>الموقع</h1>
              <span onClick={(e) => setshow(true)}>
                <h1>حدد موقعك على الخريطة</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22.354 26.299"
                >
                  <g id="Location" transform="translate(0 0)">
                    <path
                      id="Location-2"
                      data-name="Location"
                      d="M9.88,25.882,9.8,25.819l-.543-.366a27.3,27.3,0,0,1-5.962-5.6l-.415-.543A14.07,14.07,0,0,1,0,11.212l.006-.375A11.193,11.193,0,0,1,11.176,0h.038l.336.006a11.2,11.2,0,0,1,10.8,11.24v.135c-.066,3.471-1.757,7.06-4.891,10.378a27.838,27.838,0,0,1-4.924,4.069l-.065.054a2.221,2.221,0,0,1-2.593,0ZM10.892,2a9.2,9.2,0,0,0-8.9,9.176l.025.47a12.08,12.08,0,0,0,2.452,6.463,25.207,25.207,0,0,0,6.446,6.054l.108.082a.237.237,0,0,0,.314,0l.111-.084a25.8,25.8,0,0,0,4.58-3.781c2.782-2.946,4.283-6.064,4.34-9.018l0-.437A9.2,9.2,0,0,0,11.208,2ZM6.918,11.373a4.258,4.258,0,1,1,4.258,4.271A4.269,4.269,0,0,1,6.918,11.373Zm1.989,0A2.269,2.269,0,1,0,11.176,9.1,2.274,2.274,0,0,0,8.908,11.373Z"
                      transform="translate(0 0)"
                      fill="#2a2d37"
                    />
                  </g>
                </svg>
              </span>
            </div>
            {data.account_type_id != 1 && (
              <div className="stingProfileConDataInput">
                <h1> clinic Name </h1>
                <input
                  type="text"
                  placeholder={data.name}
                  name="name"
                  onChange={handleInputChange}
                />
              </div>
            )}
            {data.account_type_id != 1 && (
              <div className="stingProfileConDataInput">
                <h1> أوقات الدوام</h1>
                <div className="stingProfileConDataInputTime">
                  <input
                    type={"time"}
                    style={{
                    }}
                    name="consultation_end_time"
                    defaultValue={data.consultation_end_time}
                    onChange={handleInputChange}
                  />
                  <input
                    style={{
                    }}
                    type={"time"}
                    name="consultation_start_time"
                    defaultValue={data.consultation_start_time}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}
            {data.account_type_id != 1 && (
              <div className="stingProfileConDataInput">
                <h1> أوقات الاستشارة</h1>
                <div className="stingProfileConDataInputTime">
                  <input
                    style={{
                    }}
                    type={"time"}
                    name="consultation_end_time"
                    defaultValue={data.consultation_end_time}
                    onChange={handleInputChange}
                  />
                  <input
                    style={{
                    }}
                    type={"time"}
                    name="consultation_start_time"
                    defaultValue={data.consultation_start_time}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}
            {data.account_type_id != 1 && (
              <div className="stingProfileConDataInput">
                <h1> الحد الأقصى لعدد الطلبات اليومية </h1>
                <input
                  type={"number"}
                  placeholder={data.max_limit_orders}
                  name="max_limit_orders"
                  onChange={handleInputChange}
                />
              </div>
            )}
            {data.account_type_id != 8 && (
              <div className="stingProfileConDataInput">
                <h1 className="title_log">تاريخ الميلاد</h1>
                <input
                  defaultValue={data.date_of_birth}
                  max={`${
                    new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                    }).format(today) - 18
                  }-${new Intl.DateTimeFormat("en-US", {
                    month: "numeric",
                  }).format(today)}-${new Intl.DateTimeFormat("en-US", {
                    day: "numeric",
                  }).format(today)}`}
                  min={`${
                    new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                    }).format(today) - 100
                  }-${new Intl.DateTimeFormat("en-US", {
                    month: "numeric",
                  }).format(today)}-${new Intl.DateTimeFormat("en-US", {
                    day: "numeric",
                  }).format(today)}`}
                  onChange={handleInputChange}
                  type="date"
                  name="date_of_birth"
                />
              </div>
            )}
            {show && (
              <div class="alert">
                <div class="map-alert">
                  <MapPickera
                    onhange={setregisterData}
                    show={setshow}
                    DefaultLocation={def}
                  ></MapPickera>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfileSiting;
