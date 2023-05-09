import React, { useEffect, useState } from "react";
import { httpHelper, postAction } from "../../helper/http_helper";
import { useParams, useNavigate } from "react-router-dom";
import { url, home } from "../../utils/constants";
function StoryScreen(props) {
  const navigate = useNavigate();
  const harfId = useParams();
  const [path, setpath] = useState();
  const [storyData, setstoryData] = useState();
  const [storyArry, setstoryArry] = useState();
  const [storyIndex, setstoryIndex] = useState(0);
  const [storynum, setstorynum] = useState(0);
  const [show, setShow] = useState(false);
  const [stop, setstop] = useState(false);
  let mytime = null;
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  useEffect(() => {
    var isSaved = false;
    JSON.parse(sessionStorage.getItem("storyData")).map((e, index) => {
      if (e.id == harfId.id) {
        isSaved = true;
        setstoryData(e);
        setstoryArry(JSON.parse(sessionStorage.getItem("storyData")));
        setstorynum(index);
      }
    });
    if (!isSaved) {
      console.log(JSON.parse(sessionStorage.getItem("storyData")));
      httpHelper(
        home,
        [
          {
            key: "Authorization",
            value: `Bearer ${localStorage.getItem("token")}`,
          },
        ],
        {},
        "get"
      ).then((e) => {
        setstoryData(e.data.users.items);
      });
    }
  }, []);
  function myTimeFun(time) {
    if (storyArry[storynum].stories_available_objs.length - 1 == storyIndex) {
      if (storynum == storyArry.length - 1) {
        mytime = setTimeout(() => {
          setpath("/home");
        }, time * 1000);
      } else {
        mytime = setTimeout(() => {
          setstorynum((e) => e + 1);
          setstoryIndex(0);
        }, time * 1000);
      }
    } else {
      mytime = setTimeout(() => {
        setstoryIndex((e) => e + 1);
      }, time * 1000);
    }
  }
  return (
    <>
      <div
        className="storyButtonAlert"
        style={{ bottom: show ? "0" : "-40vh" }}
      >
        <button
          onClick={() => {
            httpHelper(
              `${url}/home/stories/delete?id=${storyArry[storynum].stories_available_objs[storyIndex].id}`,
              [
                {
                  key: "Authorization",
                  value: `Bearer ${localStorage.getItem("token")}`,
                },
              ],
              {},
              "DELETE"
            ).then((e) => {
              e.status && setShow(false);
              setpath(-1);
            });
          }}
        >
          حذف
        </button>
        <button id="tm" onClick={() => setShow(false)}>
          تم
        </button>
      </div>
      {storyData && (
        <div className="StoryScreenContaner">
          {storyArry &&
            storyArry.map((element, indext) => {
              if (indext == storynum) {
                return (
                  <>
                    <ul className="StoryScreenContanerList">
                      {element.stories_available_objs.map((e, ind) => {
                        return (
                          <>
                            {
                              <li>
                                <span
                                  style={{
                                    animation:
                                      storyIndex == ind &&
                                      `storyMove ${e.time}s`,
                                    right:
                                      storyIndex > ind
                                        ? "0"
                                        : storyIndex < ind
                                        ? "100%"
                                        : "",
                                    animationPlayState: stop
                                      ? "paused"
                                      : "running",
                                  }}
                                  id="StoryScreenContanerListColor"
                                ></span>
                              </li>
                            }
                          </>
                        );
                      })}
                    </ul>
                    <div className="StoryScreenContanerUserData">
                      <div className="storyScreenConulUserInfo">
                        <div className="storyScreenConulUserInfobutton">
                          <button
                            onClick={() => {
                              setpath(-1);
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
                        </div>

                        <span>
                          <h1>{element.user_name}</h1>
                          <h1>
                            {
                              element.stories_available_objs[storyIndex]
                                .created_time
                            }
                          </h1>
                          <img src={element.image}></img>
                        </span>
                      </div>
                    </div>
                    <div className="StoryScreenContanerImage">
                      <div
                        className="ClickR"
                        onMouseDown={() => {
                          if(element.stories_available_objs[storyIndex].file_type == "mp4"){document
                            .getElementById(`videoPlay${storyIndex}${storynum}`)
                            .pause();}
                          clearTimeout(mytime);
                          setstop(true);
                        }}
                        onMouseUp={() => {
                          clearTimeout(mytime);
                          document
                            .getElementById(`videoPlay${storyIndex}${storynum}`)
                            .play();
                          setstop(false);
                        }}
                        onClick={() => {
                          clearTimeout(mytime);
                          myTimeFun(0);
                        }}
                      ></div>
                      <div
                        className="ClickL"
                        onMouseDown={() => {
                          if(element.stories_available_objs[storyIndex].file_type == "mp4"){document
                            .getElementById(`videoPlay${storyIndex}${storynum}`)
                            .pause();}
                          clearTimeout(mytime);
                          setstop(true);
                        }}
                        onMouseUp={() => {
                          clearTimeout(mytime);
                          document
                            .getElementById(`videoPlay${storyIndex}${storynum}`)
                            .play();
                          setstop(false);
                        }}
                        onClick={() => {
                          clearTimeout(mytime);
                          if (storyIndex == 0) {
                            if (storynum == 0) {
                              setpath(-1);
                            } else {
                              setstorynum((e) => e - 1);
                            }
                          } else {
                            setstoryIndex((e) => e - 1);
                          }
                        }}
                      ></div>
                      {element.stories_available_objs.map((e, ind) => {
                        if (ind == storyIndex) {
                          if (e.file_type == "mp4") {
                            return (
                              <video
                                onLoad={storyIndex == ind && myTimeFun(e.time)}
                                src={e.file}
                                autoPlay={ind == storyIndex}
                                id={`videoPlay${ind}${storynum}`}
                              />
                            );
                          } else {
                            return (
                              <img
                                onLoad={storyIndex == ind && myTimeFun(e.time)}
                                src={e.file}
                                id={`videoPlay${ind}${storynum}`}
                              />
                            );
                          }
                        }
                      })}
                    </div>
                    <div className="storyScreenConulFoter">
                      <div>
                        <h1>
                          مشاهدة (
                          {element.stories_available_objs[storyIndex].views_no})
                        </h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 26 20"
                        >
                          <path
                            d="M12.987,20C7.619,20,2.793,16.393.076,10.351a.874.874,0,0,1,0-.714C2.79,3.6,7.616,0,12.987,0H13a12.4,12.4,0,0,1,7.457,2.557,17.872,17.872,0,0,1,5.466,7.08.874.874,0,0,1,0,.714C23.207,16.393,18.376,20,13,20ZM7.927,10A4.965,4.965,0,0,0,13,14.836,4.958,4.958,0,0,0,18.06,10,4.963,4.963,0,0,0,13,5.151,4.97,4.97,0,0,0,7.927,10Zm1.9,0A2.994,2.994,0,0,1,9.895,9.4h.063a2.552,2.552,0,0,0,2.6-2.4A2.687,2.687,0,0,1,13,6.967,3.1,3.1,0,0,1,16.16,10,3.1,3.1,0,0,1,13,13.015,3.1,3.1,0,0,1,9.831,10Z"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                      {element.id == localStorage.getItem("id") && (
                        <h2
                          onClick={() => {
                            setShow(true);
                          }}
                        >
                          ...
                        </h2>
                      )}
                    </div>
                  </>
                );
              }
            })}
        </div>
      )}
    </>
  );
}
export default StoryScreen;
