import React, { useEffect, useState } from "react";
import { httpHelper, postAction } from "../../helper/http_helper";
import { useParams, useNavigate } from "react-router-dom";
import { url, home } from "../../utils/constants";
import Stories from "stories-react"
import "../../new.css"
import "stories-react/dist/index.css";

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
  const myList = [];
  window.addEventListener("orientationchange",()=>{
    if(window.location.pathname==`/storyScreen/${harfId.id}`){window.location.reload()}
  })
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
        sessionStorage.setItem("storyData",e.data.users.items)
        setstoryData(e.data.users.items);
      });
    }
    
  }, []);
  return (
    <>
      {storyData && (
        <div className="StoryScreenContaner">
          {storyArry &&
            storyArry.map((element, indext) => {
              if (indext == storynum) {
                element.stories_available_objs.map((e) => {
                  myList.push({
                    url: e.file,
                    duration: e.time * 1000,
                    type: e.file_type == "image" ? "image" : "video",
                    header: (
                      <>
                        <div
                          onLoad={() => {}}
                          className="storyScreenConulUserInfo"
                        >
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
                          <span
                            style={{
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                flexDirection: "column",
                              }}
                            >
                              <h1>{e.user_name}</h1>
                              <h1>{e.created_time}</h1>
                            </span>
                            <img src={e.user_image}></img>
                          </span>
                        </div>
                        <div className="storyScreenConulFoter">
                          <div>
                            <h1>مشاهدة ({e.views_no})</h1>
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

                          <h2 onClick={e=>{setShow(true)}}>...</h2>
                        </div>
                      </>
                    ),
                  });
                });
                var mynum =0
                return (
                  <div className="StoryScreenContaner">
                    <Stories
                      currentIndex={element.story_index_to_start}
                      defaultInterval={10000}
                      stories={myList}
                      width={window.innerWidth>window.innerHeight?`40vw`:`100%`}
                      onStoryChange={e=>mynum=e}
                      onAllStoriesEnd={(s, st) => {
                        if (indext == storyArry.length - 1) {
                          setpath(-1);
                        } else {
                          setstorynum((e) => e + 1);
                        }
                      }}
                    />
                    <div
                      className="storyButtonAlert"
                      style={{ bottom: show ? "0" : "-40vh" }}
                    >
                      <button
                        onClick={() => {
                          httpHelper(
                            `${url}/home/stories/delete?id=${element.stories_available_objs[mynum].id}`,
                            [
                              {
                                key: "Authorization",
                                value: `Bearer ${localStorage.getItem(
                                  "token"
                                )}`,
                              },
                            ],
                            {},
                            "DELETE"
                          ).then((e) => {
                            sessionStorage.setItem("storyData",e.data.users.items)
                            e.status && setShow(false);
                          });
                        }}
                      >
                        حذف
                      </button>
                      <button id="tm" onClick={() => setShow(false)}>
                        تم
                      </button>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      )}
    </>
  );
}
export default StoryScreen;
