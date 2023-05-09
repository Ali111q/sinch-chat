import React from "react";
import "../../new.css";
import AppBar from "../../component/home/appBar";
import { useState, useEffect } from "react";
import { httpHelper } from "../../helper/http_helper";
import { Link, useNavigate, useParams } from "react-router-dom";
import { url } from "../../utils/constants";
import Story from "./story";
import Highligths from "../../component/profile/highligths";
import nopost from "../../assets/noPost.png";
import Siting from "../sitinge/sitinge";
import SnackBar from "../../snackBar";
import Img from "./img";
import IconsAddBill from "../../assets/newIcons/button.png";
import IconsMen from "../../assets/newIcons/menu.png";
import IconsSet from "../../assets/newIcons/settings.png";
import Iconsbill from "../../assets/newIcons/browser.png";
import IconsOrder from "../../assets/newIcons/reminders.png";
import IconsChat from "../../assets/newIcons/chat.png";
import Iconsfollow from "../../assets/newIcons/friendly.png";
import IconsunremoveFrend from "../../assets/newIcons/followe.png";
import IconsAddFre from "../../assets/newIcons/follower.png";
import Iconsmap from "../../assets/newIcons/map.png";
function Profile(props) {
  const [SnackBarGo, setSnackBarGo] = useState(false);
  const [SnackBarType, setSnackBarType] = useState(false);
  const [SnackBarMs, setSnackBarMs] = useState("");
  const [selctedH, setselctedH] = useState();
  const navigate = useNavigate();
  const [path, setpath] = useState();
  const [Addhighlight, setAddhighlight] = useState();
  const [data, setdata] = useState();
  const [story, setstory] = useState();
  const [type, settype] = useState();
  const [Ind, setInd] = useState();
  const [off, setoff] = useState(true);
  const [seting, setseting] = useState(false);
  const [highlightData, sethighlightData] = useState(false);
  const [storiesIds, setstoriesIds] = useState([]);
  const [EditHighlligt, setEditHighlligt] = useState(false);
  const [highlightTitle, sethighlightTitle] = useState("");
  const [EditId, setEditId] = useState();
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  useEffect(() => {
    var st = localStorage.getItem("st");
    httpHelper(
      `${url}/profile/pages?id=${localStorage.getItem("id")}`,
      [
        {
          key: "Authorization",
          value: `Bearer ${localStorage.getItem("token")}`,
        },
      ],
      {},
      "get"
    ).then((e) => {
      console.log(e);
      if (e.status) {
        setdata(e.data);
        setoff(true);
      }
    });
  }, []);

  if (story) {
    return (
      <>
        {
          <Story
            data={data}
            run={props.run}
            show={setstory}
            type={type}
            ind={Ind}
            Edet={setEditHighlligt}
            Edet1={setAddhighlight}
            EditId={setEditId}
            highlightData={sethighlightData}
            Ids={setstoriesIds}
          />
        }
      </>
    );
  } else {
    return (
      <>
        <SnackBar
          run={SnackBarGo}
          off={setSnackBarGo}
          data={SnackBarMs}
          type={SnackBarType}
        />
        <div
          id={Addhighlight ? "SowAddhighlight" : "hideAddhighlight"}
          className="Addhighlight"
        >
          <div className="AddhighlightStoris">
            {highlightData.data &&
              highlightData.data.map((e, index) => {
                return (
                  <>
                    <ul class="sher-alert-list-scrollul">
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
                    <div className="AddhighlightStorisCon">
                      {e.stories.map((Element) => {
                        var isSelcted = false;
                        storiesIds.map((stortId) => {
                          if (Element.id == stortId) {
                            isSelcted = true;
                          }
                        });
                        return (
                          <div
                            onClick={() => {
                              var myList = [];
                              if (!isSelcted) {
                                setstoriesIds((list) => {
                                  return [...list, Element.id];
                                });
                              } else {
                                storiesIds.map((stortId) => {
                                  if (Element.id != stortId) {
                                    myList.push(stortId);
                                  }
                                });
                                setstoriesIds(myList);
                              }
                            }}
                          >
                            {Element.file_type == "image" ? (
                              <img src={Element.file} />
                            ) : (
                              <video src={Element.file} muted />
                            )}

                            <span>{isSelcted && <a></a>}</span>
                          </div>
                        );
                      })}
                    </div>
                  </>
                );
              })}
          </div>
          <div className="AddhighlightStorisButton">
            {EditHighlligt && (
              <button
                style={{ backgroundColor: "red" }}
                onClick={() => {
                  httpHelper(
                    `${url}/profile/pages/highligths/delete?id=${EditId}`,
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
                    {},
                    "delete"
                  ).then((e) => {
                    setSnackBarType(e.status);
                    setSnackBarGo(true);
                    setSnackBarMs(e.message);
                  });
                }}
              >
                حذف
              </button>
            )}
            {console.log(EditHighlligt ? highlightTitle : "vwnekvejwb")}
            <input
              type={"text"}
              defaultValue={EditHighlligt ? highlightTitle : ""}
              placeholder={"title"}
              onChange={(e) => {
                sethighlightTitle(e.target.value);
              }}
            />
            <button
              onClick={() => {
                var Url = `${url}/profile/pages/highligths/store`;
                var data = {
                  stories_ids: storiesIds,
                  title: highlightTitle,
                };
                if (EditHighlligt) {
                  Url = `${url}/profile/pages/highligths/edit`;
                  data = {
                    stories_ids: storiesIds,
                    id: EditId,
                    title: highlightTitle,
                  };
                }
                httpHelper(
                  Url,
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
                  data,
                  "post"
                ).then((e) => {
                  setSnackBarType(e.status);
                  setSnackBarGo(true);
                  setSnackBarMs(e.message);
                });
              }}
            >
              حفظ
            </button>
          </div>
        </div>
        <div
          style={{ transition: "2s" }}
          onClick={() => setAddhighlight(false)}
          className={Addhighlight ? "alert" : ""}
        ></div>
        <AppBar offf={off} run={props.run} st={setseting} start={0} />
        {data && (
          <div className="profileContainer">
            <div className="profileContainerInfo">
              {data.user.has_stories ? (
                <span className="profileContainerInfoImg">
                  <img
                    onClick={(e) => {
                      setpath(`/storyScreen/${data.user.id}`);
                    }}
                    src={data.user.image}
                  />
                </span>
              ) : (
                <span
                  style={{
                    background: "white",
                  }}
                  className="profileContainerInfoImg"
                >
                  <img src={data.user.image} />
                </span>
              )}

              <span className="profileContainerInfoBio">
                <h1>{data.user.user_name}</h1>
                <br></br>
                <h3>{data.user.account_type_name}</h3>
                <br></br>
                <ul>
                  <li>
                    <h1>{data.user.followings_no}</h1>
                    <h2>يتابع</h2>
                  </li>
                  <li>
                    <h1>{data.user.followers_no}</h1>
                    <h2>متابعون</h2>
                  </li>
                  <li>
                    <h1>{data.posts.length}</h1>
                    <h2>منشور</h2>
                  </li>
                </ul>
                <div className="consultationDataUser">
                  <br></br>
                  <span>
                    <p1 style={{ color: "#0199EC" }}>
                      {data.user.start_time_format} -{data.user.end_time_format}
                    </p1>
                    <h7> : أوقات الدوام</h7>
                  </span>
                  <br></br>
                  <span>
                    <p1 style={{ color: "#F7227F" }}>
                      {data.user.consultation_start_format} -
                      {data.user.consultation_end_format}
                    </p1>

                    <h7>: أوقات الاستشارة</h7>
                  </span>
                </div>
                <p>{data.user.bio}</p>
              </span>
            </div>

            <div className="profileContainerAction edit__profile-button">
              <ul>
                <li
                  style={{
                    width: "fit-content",
                    backgroundColor: "#F0F0F0",
                    color: "black",
                    border: "0",
                  }}
                  id="profileContainerActionSting"
                  onClick={(e) => {
                    localStorage.setItem("st", true);
                  }}
                >
                  <Link className="link" to="/settings">
                    تعديل ملفي الشخصي
                  </Link>
                </li>
                {localStorage.getItem("type") == 3 && (
                  <li
                    id="profileContainerActionSting"
                    onClick={(e) => {
                      localStorage.setItem("st", true);
                      setTimeout(() => {
                        setseting(true);
                      }, 200);
                    }}
                  >
                    إضافة دواء
                  </li>
                )}
              </ul>
            </div>
            <div className="profileContainerHighligths">
              <Highligths
                selctedH={setselctedH}
                Edit={setEditHighlligt}
                data={data}
                type={settype}
                ind={setInd}
                show={setstory}
                Addhighlight={setAddhighlight}
                highlightData={sethighlightData}
                title={sethighlightTitle}
              />
            </div>
            <div className="profileContainerPost">
              {data.posts.length == 0 ? (
                <img
                  style={{
                    width: "30%",
                    marginLeft: "35%",
                    cursor: "auto",
                  }}
                  src={nopost}
                />
              ) : (
                ""
              )}
              {data.posts.map((e) => {
                return (
                  <span
                    key={e.id}
                    onClick={() => {
                      setpath(`/post/${e.id}`);
                    }}
                    style={{ position: "relative" }}
                  >
                    <Img data={e.file_post} />
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Profile;
