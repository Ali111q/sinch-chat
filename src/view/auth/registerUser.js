import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCon, getHe } from "../../controllers/auth/register_info_controller";
import {
  contreFlag,
  addImageSvg,
  backSvg,
} from "../../assets/svges/rejster_svg";
import axios from "axios";
import MapPickera from "../../component/else/map";
import { dataState } from "../../helper/data_manger_userType";
import { httpHelper } from "../../helper/http_helper.js";
import { regester, loginUrl } from "../../utils/constants";
import Back from "../../component/else/back";
import ImgCrop from "../../component/else/imgCropApp";
function RegisterUser(props) {
  const today = Date.now();
  let def = {};
  const [contresSel, setContresSel] = useState(1);
  const [city, setcity] = useState(1);
  const { id, nam } = useParams();
  const [show, setshow] = useState(false);
  const [userImg, setuserImg] = useState();
  const [contres, setContres] = useState();
  const [healthcareList, sethealthcareList] = useState();
  const [imageFile, setImageFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  const [registerData, setregisterData] = useState(
    dataState({
      accountName: nam,
      id: id,
    })
  );
  const [path, setpath] = useState();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  function handleChange(e) {
    console.log("image: ", e);
    setImageFile(e);
  }
  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;
    setregisterData((defaultdata) => {
      var val;
      name == "city_id" ? (val = Number.parseInt(value)) : (val = value);
      name == "gender" ? (val = Number.parseInt(value)) : (val = value);
      name == "mobile"
        ? (val = `${contres[registerData.country_id].country_key}${value}`)
        : (val = value);
      return {
        ...defaultdata,
        [name]: type === "checkbox" ? checked : val,
      };
    });
  }
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  useEffect(() => {
    localStorage.getItem("onLine") && setpath("/home");
    getCon().then((e) => {
      setContres(e.data);
    });
    getHe().then((e) => {
      sethealthcareList(e.data);
    });
  }, []);
  useEffect(() => {
    const geolocation = navigator.geolocation;
    geolocation.getCurrentPosition(
      (position) => {
        def = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      },
      () => {
        console.log(new Error("Permission denied"));
      }
    );
  }, []);
  function handlePost() {
    const url = regester;
    const formData = new FormData();
    formData.append("image", imageFile);
    console.log(...formData);
    for (let index = 0; index < Object.keys(registerData).length; index++) {
      formData.append(
        `${Object.keys(registerData)[index]}`,
        Object.values(registerData)[index]
      );
      if (
        Object.keys(registerData)[index] == "country_id" ||
        Object.values(registerData)[index] == 0
      ) {
        formData.append("country_id", 1);
      }
      if (
        Object.keys(registerData)[index] == "city_id" ||
        Object.values(registerData)[index] == 0
      ) {
        formData.append("city_id", 1);
      }
    }
    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        console.log(result);
        localStorage.setItem("mobile", result.data.data.mobile);
        if (result.data.status) {
          httpHelper(
            loginUrl,
            [],
            {
              mobile: result.data.data.mobile,
            },
            "post"
          ).then((e) => {
            console.log(JSON.parse(e));
            localStorage.setItem(
              "fcm_token",
              `7|cXjIVlcPavE8DMkTOQ4O8SyX6z55de82zl49fCyF`
            );
            e.code == 200 ? setpath("/Otp") : console.log(JSON.parse(e));
            e.code == 200 && setpath("/Otp")
            alert("failed to register check your data");
          });
        } else {
          alert("حدث خلل اثناء عملية التسجيل حاول التسجيل في وقت لاحق");

        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <div className="father-sing">
        <Back title={"Accounts"} path={-1} run={props.run} />
        <button className="add-img-sing">
          <ImgCrop setimg={handleChange} setSrc={setImageSrc} />
          {imageSrc ? (
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={imageSrc}
            />
          ) : (
            addImageSvg
          )}
        </button>
        <span className="add-name-sing">
          <h1 className="title_log">user name</h1>
          <input
            type="text"
            placeholder="user name"
            name="full_name"
            onChange={handleInputChange}
          />
        </span>
        <span className="add-contry-sing">
          <h1 className="title_log">mobile number</h1>
          <div>
            <input
              type={"tel"}
              name="mobile"
              onChange={handleInputChange}
              placeholder="mobile number"
            />
            <button>
              {contreFlag}
              <h2>{contres && contres[registerData.country_id].country_key}</h2>
            </button>
          </div>
        </span>
        {id != 1 && (
          <span className="add-name-sing">
            <h1 className="title_log"> union id </h1>
            <input
              type="text"
              placeholder="user name"
              name="union_id_no"
              onChange={handleInputChange}
            />
          </span>
        )}
        {id != 1 && (
          <span className="add-name-sing">
            <h1 className="title_log"> clinic Name </h1>
            <input
              type="text"
              placeholder="user name"
              name="name"
              onChange={handleInputChange}
            />
          </span>
        )}
        {id == 7 && (
          <span className="cand">
            <h1 className="title_log">select your healthcare specialties </h1>
            <select
              onChange={handleInputChange}
              name="healthcare_specialty_id"
              id="cars"
            >
              {healthcareList &&
                healthcareList.map((e, index) => {
                  return (
                    <option key={index} value={e.id}>
                      {e.title}
                    </option>
                  );
                })}
            </select>
          </span>
        )}
        <span className="cand">
          <h1 className="title_log">select your contre</h1>
          <select onChange={handleInputChange} name="country_id" id="cars">
            {contres &&
              contres.map((e, index) => {
                return (
                  <option key={index} value={index}>
                    {e.country_name}
                  </option>
                );
              })}
          </select>
        </span>
        <span className="cand">
          <h1 className="title_log">select your city</h1>
          <select onChange={handleInputChange} name="city_id">
            {contres &&
              contres[registerData.country_id].cities.map((e, index) => {
                return (
                  <option key={index} value={e.id}>
                    {e.city_name}
                  </option>
                );
              })}
          </select>
        </span>

        {id != 8 && (
          <span className="cand111HH">
            <h1 className="title_log">birth day</h1>
            {/* <input
                    max="2004-12-14"
                    min="1922-12-14"
                    type="date"
                    name="date_of_birth"
                    defaultValue={userDat}
                  /> */}
            <input
              defaultValue={`${
                new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
                  today
                ) - 18
              }-${new Intl.DateTimeFormat("en-US", { month: "numeric" }).format(
                today
              )}-${new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(
                today
              )}`}
              max={`${
                new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
                  today
                ) - 18
              }-${new Intl.DateTimeFormat("en-US", { month: "numeric" }).format(
                today
              )}-${new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(
                today
              )}`}
              min={`${
                new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
                  today
                ) - 100
              }-${new Intl.DateTimeFormat("en-US", { month: "numeric" }).format(
                today
              )}-${new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(
                today
              )}`}
              onChange={handleInputChange}
              type="date"
              name="date_of_birth"
              id=""
            />
          </span>
        )}

        {id != 8 && (
          <span className="cand">
            <h1 className="title_log">select your gender</h1>
            <select onChange={handleInputChange} name="gender" id="cars">
              <option value={2}>male</option>
              <option value={1}>female</option>
            </select>
          </span>
        )}
        <span className="candselctLocation">
          <h1 className="title_log">location</h1>

          <button
            className="selctLocation"
            onClick={() => {
              setshow(true);
            }}
          >
            <img src={require("../../assets/outpu.gif")} alt="loading..." />
            <h1>location</h1>
          </button>
        </span>
        <button
          className="sing-don"
          onClick={() => {
            handlePost();
          }}
        >
          سجل
        </button>
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
    </>
  );
}

export default RegisterUser;
