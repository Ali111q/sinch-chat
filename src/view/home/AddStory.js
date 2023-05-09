import React from "react";
import { useEffect, useState } from "react";
import AppBar from "../../component/home/appBar";
import axios from "axios";
import Back from "../../component/else/back";
import gg from "../../assets/imgs/god.jpg";
import { useNavigate } from "react-router-dom";
import { url } from "../../utils/constants";
import SnackBar from "../../snackBar";
import ADD from "../../component/sitinge/AddAd";
function Addstory(props) {
  const [SnackBarGo, setSnackBarGo] = useState(false);
  const [SnackBarType, setSnackBarType] = useState(false);
  const [SnackBarMs, setSnackBarMs] = useState("");
  const [Listimage, setListImage] = useState([]);
  const [images, setImages] = useState([]);
  const [path, setpath] = useState();
  const [selcted, setselcted] = useState(0);
  const [Add, setAdd] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  const handleChange = (e) => {
    setImages((k) => [...k, e.target.files[0]]);
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setListImage((e) => [
        ...e,
        {
          path: URL.createObjectURL(event.target.files[0]),
          type: event.target.files[0].type,
        },
      ]);
    }
  };
  function handlePost() {
    const formData = new FormData();
    images.map((e) => {
      formData.append("files[]", e);
    });
    axios
      .post(`${url}/home/stories/store`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((result) => {
        setSnackBarType(result.data.status);
        setSnackBarGo(true);
        setSnackBarMs(result.data.message);
      });
  }
  <ADD
    SnackBarGo={props.SnackBarGo}
    SnackBarType={props.SnackBarType}
    SnackBarMs={props.SnackBarMs}
  />;

  return (
    <>
      <SnackBar
        run={SnackBarGo}
        off={setSnackBarGo}
        data={SnackBarMs}
        type={SnackBarType}
      />
      <div id="mediaQueryForPc">
        <AppBar run={props.run} />
        <div className="addNewPost">
          <div className="AddPostScreen_container">
            <div className="AddPostScreen_containerScroll">
              <div className="addimgsing">
                <input
                  id=""
                  type={"file"}
                  accept="image/png, image/jpeg ,video/mp4"
                  onChange={(e) => {
                    handleChange(e);
                    onImageChange(e);
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4vw"
                  height="4vw"
                  viewBox="0 0 28 26"
                >
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
              </div>
              <div className="display_img">
                {Listimage.map((e, index) => {
                  return (
                    <span key={index}>
                      {e.type == "video/mp4" ? (
                        <video muted autoPlay src={e.path} />
                      ) : (
                        <img src={e.path} />
                      )}
                      <button
                        onClick={(e) => {
                          var list = [];
                          var listK = [];
                          images.map((kL, ind) => {
                            if (ind == index) {
                              console.log(kL);
                            } else {
                              listK.push(kL);
                            }
                          });
                          Listimage.map((k, inde) => {
                            if (inde == index) {
                              console.log(k);
                            } else {
                              list.push(k);
                            }
                            console.log(list);
                            console.log(listK);
                            setImages(listK);
                            setListImage(list);
                          });
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 13.683 13.684"
                        >
                          <path
                            id="Icon"
                            d="M-5.016.439A1.343,1.343,0,0,0-5.006,2.3a1.353,1.353,0,0,0,1.856.01L1.457-2.3,6.063,2.3A1.32,1.32,0,0,0,7.929.429l-4.6-4.6,4.6-4.606a1.334,1.334,0,0,0-.01-1.856,1.324,1.324,0,0,0-1.856-.01l-4.606,4.6-4.606-4.606a1.353,1.353,0,0,0-1.856.01,1.356,1.356,0,0,0-.01,1.866L-.41-4.167Z"
                            transform="translate(5.383 11.014)"
                            fill="#fff"
                          />
                        </svg>
                      </button>
                    </span>
                  );
                })}
              </div>
              <div className="dicription">
                <button
                  onClick={(e) => {
                    handlePost();
                  }}
                >
                  نشر
                </button>
              </div>
            </div>
          </div>
          <div className="AddList">
            <ul>
              <li
                id={selcted == 0 ? "" : "AddListulli"}
                onClick={(e) => {
                  setselcted(0);
                }}
              >
                قصة
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="mediaQueryForMobile">
        <div className="AddPostScreen">
          <Back title={"Add story"} path={-1} run={props.run} />
          <div className="AddPostScreen_container">
            <div className="addimgsing">
              <input
                id=""
                type={"file"}
                accept="image/png, image/jpeg ,video/mp4"
                onChange={(e) => {
                  handleChange(e);
                  onImageChange(e);
                }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12vw"
                height="12vw"
                viewBox="0 0 28 26"
              >
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
            </div>
            <div className="display_img">
              {Listimage.map((e, index) => {
                return (
                  <span key={index}>
                    {e.type == "video/mp4" ? (
                      <video muted autoPlay src={e.path} />
                    ) : (
                      <img src={e.path} />
                    )}
                    <button
                      onClick={(e) => {
                        var list = [];
                        var listK = [];
                        images.map((kL, ind) => {
                          if (ind == index) {
                            console.log(kL);
                          } else {
                            listK.push(kL);
                          }
                        });
                        Listimage.map((k, inde) => {
                          if (inde == index) {
                            console.log(k);
                          } else {
                            list.push(k);
                          }
                          console.log(list);
                          console.log(listK);
                          setImages(listK);
                          setListImage(list);
                        });
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 13.683 13.684"
                      >
                        <path
                          id="Icon"
                          d="M-5.016.439A1.343,1.343,0,0,0-5.006,2.3a1.353,1.353,0,0,0,1.856.01L1.457-2.3,6.063,2.3A1.32,1.32,0,0,0,7.929.429l-4.6-4.6,4.6-4.606a1.334,1.334,0,0,0-.01-1.856,1.324,1.324,0,0,0-1.856-.01l-4.606,4.6-4.606-4.606a1.353,1.353,0,0,0-1.856.01,1.356,1.356,0,0,0-.01,1.866L-.41-4.167Z"
                          transform="translate(5.383 11.014)"
                          fill="#fff"
                        />
                      </svg>
                    </button>
                  </span>
                );
              })}
            </div>
            <div className="dicription">
              <button
                onClick={(e) => {
                  handlePost();
                }}
              >
                نشر
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Addstory;
