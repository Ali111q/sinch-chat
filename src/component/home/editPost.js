import { useEffect, useState } from "react";
import axios from "axios";
import { httpHelper } from "../../helper/http_helper";
import { useNavigate ,useParams} from "react-router-dom";
import SnackBar from "../../snackBar";
import { url } from "../../utils/constants";
function EditPost(props) {
  const [SnackBarGo, setSnackBarGo] = useState(false);
  const [path, setpath] = useState(false);
  const [SnackBarType, setSnackBarType] = useState(false);
  const [SnackBarMs, setSnackBarMs] = useState("");
  const [Listimage, setListImage] = useState(props.data.view);
  const [images, setImages] = useState([]);
  const [deleteID, setdeleteID] = useState([]);
  const [data, setdata] = useState(props.data.description);
  const navigate = useNavigate();
  const hrf = useParams();
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  const handleChange = (e) => {
    setImages((k) => [...k,e.target.files[0]]);
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setListImage((e) => [...e, {path:URL.createObjectURL(event.target.files[0]),type:event.target.files[0].type }]);
    }
  };
  function handlePost() {
    const formData = new FormData();
    formData.append("id", props.data.id);
    formData.append("description", data);
    images.map((e) => {
      formData.append("files[]", e);
    });
    deleteID.map((e) => {
      formData.append("deleted_files_ids[]", e);
    });
    axios
      .post(`${url}/home/posts/edit`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((result) => {
        setSnackBarType(result.data.status);
        setSnackBarGo(true);
        setSnackBarMs(result.data.message);
      });
  }
  return (
    <>
      <button
        onClick={() => {
          props.off(false);
        }}
        id="EDITpostICON"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13.683 13.684"
          width="90%"
        >
          <path
            id="Icon"
            d="M-5.016.439A1.343,1.343,0,0,0-5.006,2.3a1.353,1.353,0,0,0,1.856.01L1.457-2.3,6.063,2.3A1.32,1.32,0,0,0,7.929.429l-4.6-4.6,4.6-4.606a1.334,1.334,0,0,0-.01-1.856,1.324,1.324,0,0,0-1.856-.01l-4.606,4.6-4.606-4.606a1.353,1.353,0,0,0-1.856.01,1.356,1.356,0,0,0-.01,1.866L-.41-4.167Z"
            transform="translate(5.383 11.014)"
            fill="#fff"
          />
        </svg>
      </button>
      <SnackBar
        run={SnackBarGo}
        off={setSnackBarGo}
        data={SnackBarMs}
        type={SnackBarType}
      />
      <div id="mediaQueryForPc">
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
                    onClick={() => {
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
                        }else{
                          setdeleteID(ff=>[...ff,k.id])
                        }
                      });
                      setImages(listK);
                      setListImage(list);
                    }}>
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
            <h1>الوصف</h1>
            <textarea
              placeholder="ادخل الوصف"
              defaultValue={data}
              onChange={(e) => {
                setdata(e.target.value);
              }}
            ></textarea>
            <button
              onClick={(e) => {
                handlePost();
              }}
            >
              حفظ التعديل
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#0199EC",
                border: "#0199EC 0.1vw solid",
              }}
              onClick={() => {
                httpHelper(
                  `${url}/home/posts/stop_comments`,
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
                  },
                  "post"
                ).then((e) => {
                  setSnackBarType(e.status);
                  setSnackBarGo(true);
                  setSnackBarMs(e.message);
                });

          }}>
              {props.data.stop_comments ? "تفعيل التعليقات" : "ايقاف التعليقات"}
            </button>
            <button style={{ background: "red" }}
             onClick={() => {
                  httpHelper(
                    `${url}/home/posts/delete?id=${hrf.id}`,
                    [
                      {
                        key: "Authorization",
                        value: `Bearer ${localStorage.getItem("token")}`,
                      },
                    ],
                    {},
                    "DELETE"
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

            }}>
              حذف المنشور
            </button>
          </div>
        </div>
      </div>
      <div id="mediaQueryForMobile">
        <div className="AddPostScreen">
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
                      onClick={() => {
                        var list = [];
                        var listK = [];
                        images.map((kL, ind) => {
                          if (!ind == index) {
                            listK.push(kL);
                          }
                        });
                        Listimage.map((k, inde) => {
                          if (inde != index) {
                            list.push(k);
                          }else{
                            setdeleteID(ff=>[...ff,k.id])
                          }
                        });
                          setImages(listK);
                          setListImage(list);
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
              <h1>الوصف</h1>
              <textarea
                placeholder="ادخل الوصف"
                defaultValue={data}
                onChange={(e) => {
                  setdata(e.target.value);
                }}
              ></textarea>
              <button
                onClick={(e) => {
                  handlePost();
                }}
              >
                حفظ التعديل
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "#0199EC",
                  border: "#0199EC 0.1vw solid",
                }}
                onClick={() => {}}
              >
                {props.data.stop_comments
                  ? "تفعيل التعليقات"
                  : "ايقاف التعليقات"}
              </button>
              <button style={{ background: "red" }} onClick={() => {}}>
                حذف المنشور
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPost;
