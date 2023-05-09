import React, { useEffect, useState } from "react";
import { httpHelper } from "../../helper/http_helper";
import Images from "./imgSwper";
import { savePost, like, showPost } from "../../utils/constants";
import { useNavigate, useParams } from "react-router-dom";
import Back from "../else/back";
import Alert from "./alert";
import EditPost from "./editPost";
import { addComent } from "../../utils/constants";
import { isEditable } from "@testing-library/user-event/dist/utils";
import Loadind from "../../assets/imgs/newLoading.gif";

function PostView(props) {
  const [isLiked, setIsLiked] = useState();
  const [isSaved, setIsSaved] = useState();
  const [show, setshow] = useState(false);
  const id = useParams();
  const [sher, setsher] = useState(false);
  const [comment, setcomment] = useState();
  const [path, setpath] = useState();
  const [userPostData, setuserPostData] = useState(false);
  const [ShowEdit, setShowEdit] = useState(false);
  const [viewData, setviewData] = useState(false);
  const [edtDataImg, setedtDataImg] = useState(false);
  const [isLoding, setisLoding] = useState(false);
  const navigate = useNavigate();
  const [isEdi, setisEdi] = useState(false);
  const [nexPath, setnexPath] = useState(false);
  const [userPostDatacomments, setuserPostDatacomments] = useState(false);

  useEffect(() => {
    path && navigate(path);
  }, [path]);
  useEffect(() => {
    httpHelper(
      showPost(id.id),
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
      {},
      "get"
    ).then((e) => {
      console.log(e);
      setuserPostDatacomments(e.data.comments);
      setnexPath(e.pages.next_page_url);
      setuserPostData(e.data);
      setviewData(() => {
        var list = [];
        e.data.post.file_posts.map((Element) => {
          list.push({
            path: Element.file,
            type: Element.file_type,
            id: Element.id,
          });
        });
        return list;
      });
      setIsSaved(e.data.post.is_saved);
      setIsLiked(e.data.post.is_liked);
    });
  }, [show, isLiked]);
  function action(url, Type) {
    var set = Type == 1 ? setIsSaved : setIsLiked;
    httpHelper(
      url,
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
      {
        id: id.id,
      },
      "post"
    ).then((e) => {
      e.status && set((e) => !e);
    });
  }

  if (userPostData) {
    return (
      <>
        <div
          id="EDITPOST"
          style={ShowEdit ? { top: "10vh" } : { top: "110vh" }}
        >
          <EditPost
            off={setShowEdit}
            data={{
              id: id.id,
              files: userPostData.post.file_posts,
              stop_comments: userPostData.post.stop_comments,
              description: userPostData.post.description,
              view: viewData,
            }}
          />
        </div>
        {sher && <Alert data={id.id} Show={sher} off={setsher} id={"sh"} />}
        <div style={{ zIndex: "1" }} className="shadopost">
          <div className="BackNvCon">
            <Back
              title={"Post"}
              path={-1}
              run={props.run}
              edt={localStorage.getItem("id") == userPostData.post.user_id}
              Go={setShowEdit}
            />
          </div>
          <div className="post-con-n">
            <a className="user-post-info" style={{ justifyContent: "end" }}>
              <span className="user-post-info-name">
                <h2>{userPostData.user.name}</h2>
                <p>{userPostData.post.created_time}</p>
              </span>
              {userPostData.user.has_stories ? (
                <span
                  onClick={(e) => {
                    setpath(`/story/${userPostData.user_id}`);
                  }}
                  className={"user-post-info-imgslider"}
                >
                  <img srcSet={userPostData.user.image} />
                </span>
              ) : (
                <span
                  style={{
                    backgroundColor: "transparent",
                    border: "0",
                  }}
                  className={"user-post-info-imgslider"}
                >
                  <img srcSet={userPostData.user.image} />
                </span>
              )}
            </a>
            <div className="post-img-contaner">
              <Images ok={true} data={userPostData.post.file_posts} />
            </div>

            <div className="post-reviw-n">
              <ul>
                <button onClick={() => action(like, 0)}>
                  <svg
                    id="Heart"
                    xmlns="http://www.w3.org/2000/svg"
                    width="3vw"
                    height="3vw"
                    viewBox="0 0 67 63"
                  >
                    <g id="Light" transform="translate(0 0)">
                      {isLiked ? (
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          id="Path"
                          d="M51.843.97A19.042,19.042,0,0,0,45.7,0,20.489,20.489,0,0,0,33,4.345a10.017,10.017,0,0,0-.99-.632c-.33-.2-.924-.7-1.419-.97l-1.254-.569A11.549,11.549,0,0,0,27.258,1.3a1.152,1.152,0,0,0-.3-.2h-.195A20.336,20.336,0,0,0,20.724,0h-.363a18.883,18.883,0,0,0-2.772.2h-.4a14.747,14.747,0,0,0-2.934.7C1.947,4.984-2.442,18.53,1.287,30.37a43.342,43.342,0,0,0,9.936,16.051A125.949,125.949,0,0,0,32.241,63.01l.858.539.825-.505A127.162,127.162,0,0,0,54.816,46.454a42.658,42.658,0,0,0,9.93-16.084c3.666-11.84-.723-25.386-12.9-29.4Z"
                          transform="translate(0)"
                          fill="#f5404f"
                        />
                      ) : (
                        <path
                          id="Heart-2"
                          data-name="Heart"
                          d="M33.521,63a2.484,2.484,0,0,1-1.26-.343l-.82-.489A116.22,116.22,0,0,1,11.327,46.673,40.853,40.853,0,0,1,1.361,30.935a25.483,25.483,0,0,1,.672-18.229A21.024,21.024,0,0,1,15.02,1.045,22.177,22.177,0,0,1,32.6,2.839l.883.525.9-.528A22.215,22.215,0,0,1,51.072.783l.892.263a21.043,21.043,0,0,1,13,11.67,25.548,25.548,0,0,1,.672,18.273,41.374,41.374,0,0,1-9.969,15.706A116.267,116.267,0,0,1,35.583,62.161l-.769.474A2.47,2.47,0,0,1,33.521,63ZM21.748,4.846a17.2,17.2,0,0,0-5.227.813A16.243,16.243,0,0,0,6.443,14.827,20.624,20.624,0,0,0,6.006,29.4a36.481,36.481,0,0,0,8.755,13.82,111.244,111.244,0,0,0,19.221,14.8l-.476-.3,1.565-.976A111.052,111.052,0,0,0,50.46,44.9l1.77-1.665a36.317,36.317,0,0,0,8.758-13.787,20.666,20.666,0,0,0-.433-14.614A16.268,16.268,0,0,0,50.463,5.659a17.251,17.251,0,0,0-15.5,2.587,2.477,2.477,0,0,1-2.9.03l-.66-.469A17.161,17.161,0,0,0,21.748,4.846Z"
                          fill="#2A2D37"
                        />
                      )}
                    </g>
                  </svg>
                </button>
                <a
                  onClick={() => {
                    !userPostData.post.stop_comments && setshow((e) => !e);
                  }}
                >
                  <svg
                    id="Chat"
                    xmlns="http://www.w3.org/2000/svg"
                    width="3vw"
                    height="3vw"
                    viewBox="0 0 67 67"
                  >
                    <path
                      id="Chat-2"
                      data-name="Chat"
                      d="M33.441,67h0a33.708,33.708,0,0,1-15.626-3.859l-.154-.054a.054.054,0,0,1-.032-.04l-2.286-1.3a2.513,2.513,0,0,0-.924-.182,1.6,1.6,0,0,0-.375.04,59.327,59.327,0,0,1-7.272,2.1l-.452.054-.134,0a3.74,3.74,0,0,1-2.958-1.188,4.591,4.591,0,0,1-.99-3.08L2.3,58.95A61.879,61.879,0,0,1,4.57,51.566a1.762,1.762,0,0,0-.145-1.357l-.615-1.2A33.518,33.518,0,0,1,33.563,0h.13a33.5,33.5,0,0,1-.252,67Zm-19-10.089a7.3,7.3,0,0,1,2.8.574c.307.148.7.358,1.239.66l1.414.814.021.005.961.489a28.916,28.916,0,0,0,30.905-3.687l.739-.627A28.828,28.828,0,0,0,33.66,4.674l-.941.012A28.82,28.82,0,0,0,7.962,46.86l.606,1.182a6.5,6.5,0,0,1,.422,5.041A59.279,59.279,0,0,0,6.846,60.05l.314-1.233,1.324-.347c.957-.264,1.855-.536,2.747-.832l1.4-.482A6.848,6.848,0,0,1,14.443,56.911Z"
                      fill="#2a2d37"
                    />
                  </svg>
                </a>
                <button
                  onClick={(e) => {
                    setsher(true);
                  }}
                >
                  <svg
                    id="Send"
                    xmlns="http://www.w3.org/2000/svg"
                    width="3vw"
                    height="3vw"
                    viewBox="0 0 64.964 64.965"
                  >
                    <path
                      id="Send-2"
                      data-name="Send"
                      d="M43.057,64.965A6.262,6.262,0,0,1,37.9,62.311l-.294-.444-12.976-21.5L3.059,27.088A6.44,6.44,0,0,1,4.121,15.6l.5-.165L56.782.26A6.5,6.5,0,0,1,58.588,0a6.429,6.429,0,0,1,6.223,7.8l-.12.468-15.474,52.1A6.384,6.384,0,0,1,43.057,64.965Zm2.27-47.9a2.475,2.475,0,0,1,1.479.485l.282.24a2.515,2.515,0,0,1,.252,3.253l-.24.282L29.6,38.934,41.886,59.283a1.367,1.367,0,0,0,1.191.683,1.389,1.389,0,0,0,1.246-.761l.1-.255L59.9,6.847a1.428,1.428,0,0,0-.221-1.273A1.407,1.407,0,0,0,58.56,5a1.368,1.368,0,0,0-.144.008l-.243.048L6.019,20.234a1.4,1.4,0,0,0-.979,1.04,1.439,1.439,0,0,0,.418,1.392l.219.165,20.4,12.557L43.553,17.8A2.488,2.488,0,0,1,45.327,17.063Z"
                      transform="translate(0 0)"
                      fill="#2a2d37"
                    />
                  </svg>
                </button>
              </ul>
              <button onClick={() => action(savePost, 1)}>
                <svg
                  id="Bookmark"
                  xmlns="http://www.w3.org/2000/svg"
                  width="3vw"
                  height="3vw"
                  viewBox="0 0 50 61"
                >
                  <rect
                    id="Rectangle_2417"
                    data-name="Rectangle 2417"
                    height="36"
                    fill="none"
                  />
                  <g id="Light" transform="translate(1 0)">
                    {!isSaved ? (
                      <path
                        id="Bookmark-2"
                        data-name="Bookmark"
                        d="M43.978,61a5.272,5.272,0,0,1-2.37-.618L24.42,50.824,7.3,60.4a4.892,4.892,0,0,1-2.286.574,5.072,5.072,0,0,1-3.838-1.812l-.3-.384L.59,58.31a5.394,5.394,0,0,1-.59-2.4V13.525C0,9.139,1.383,5.735,4.112,3.406,6.759,1.146,10.542,0,15.355,0H33.642C43.4,0,49,4.733,49,12.987V55.911a5.115,5.115,0,0,1-1.461,3.6A4.94,4.94,0,0,1,43.978,61ZM24.419,46.408a4.268,4.268,0,0,1,2.052.529l17.157,9.542a.918.918,0,0,0,.386.107.652.652,0,0,0,.469-.2.686.686,0,0,0,.193-.478V12.987c0-5.687-3.712-8.57-11.033-8.57H15.355c-7.422,0-11.03,2.979-11.03,9.108V55.872c0,.051.006.1.011.143.007.061.008.081,0,.085l-.017-.007.117.185A.709.709,0,0,0,5,56.57a.568.568,0,0,0,.265-.063l17.111-9.572A4.236,4.236,0,0,1,24.419,46.408Z"
                        transform="translate(0 0)"
                        fill="#2a2d37"
                      />
                    ) : (
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        id="Bookmark-2"
                        data-name="Bookmark"
                        d="M34.594,0H15.313C6.875,0,0,3.263,0,11.559v46.3a3.136,3.136,0,0,0,3.156,3.111,3.387,3.387,0,0,0,1.531-.4l20.281-9.882,20.25,9.882a3.188,3.188,0,0,0,2.469.3,3.221,3.221,0,0,0,1.938-1.525A3.123,3.123,0,0,0,50,57.856v-46.3C49.906,3.263,43.063,0,34.594,0"
                        fill="#2a2d37"
                      />
                    )}
                  </g>
                </svg>
              </button>
            </div>
            <div className="post-reviw-info">
              <p>{userPostData.post.likes_no}</p>
              <p>أعجاب</p>
              <p>{userPostData.post.views_no}</p>
              <p>مشاهدة</p>
            </div>
            <div className="post-body-n">
              <h2 style={{
                  whiteSpace: "normal",
                  overflow: "normal",
                  textOverflow: "normal",
                  fontWeight:"bolder"
              }}>{userPostData.post.description}</h2>
            </div>
            <ul className="text-post-comentm">
              <span>
                <h2>التعليقات({userPostData.post.comments_no})</h2>
              </span>
              {userPostDatacomments.map((e) => {
                return (
                  <a key={e.id}>
                    <span className="group-118667m" key={e.id}>
                      <img src={e.user_image}></img>
                    </span>
                    <div className="group-containerm">
                      <span
                        className="groupm-containerm"
                        onClick={(n) => {
                          setpath(`/UserProfile/${e.user_id}`);
                        }}
                      >
                        <h1> {e.user_name}</h1>
                        <p>{e.created_time}</p>
                      </span>
                      <span className="groupm-contai">
                        <h2>{e.comment}</h2>
                      </span>
                    </div>
                    {(e.user_id == localStorage.getItem("id") ||
                      userPostData.id == localStorage.getItem("id")) && (
                      <ul className="EdtCommentPostView">
                        <li
                          onClick={() => {
                            e.id == isEdi ? setisEdi(false) : setisEdi(e.id);
                          }}
                          style={{ opacity: "1" }}
                        >
                          {" "}
                          ...{" "}
                        </li>
                        <li
                          style={{
                            opacity: isEdi == e.id ? "1" : "0",
                            color: "red",
                            display: isEdi == e.id ? "flex" : "none",
                          }}
                        >
                          حذف
                        </li>
                        <li
                          style={{
                            opacity: isEdi == e.id ? "1" : "0",
                            color: "#0199EC",
                            display: isEdi == e.id ? "flex" : "none",
                          }}
                        >
                          ابلاغ
                        </li>
                      </ul>
                    )}
                  </a>
                );
              })}
              {isLoding && (
                <div className="lodingHome">
                  <img src={Loadind} />
                </div>
              )}
              {userPostData.post.comments_no > userPostDatacomments.length &&(
                <span>
                  {!isLoding&&<h2
                    onClick={() => {
                      setisLoding(true)
                      console.log(nexPath);
                      httpHelper(
                        `${nexPath}&id=${id.id}`,
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
                        {},
                        "get"
                      ).then((e) => {
                        console.log(e);
                        setuserPostDatacomments((k) => [
                          ...k,
                          ...e.data.comments,
                        ]);
                        setnexPath(e.pages.next_page_url);
                        setisLoding(false)
                      });
                    }}
                    style={{ cursor: "pointer", opacity: "0.7" }}
                  >
                    عرض المزيد ...
                  </h2>}
                </span>
              )}
            </ul>
          </div>
          <div className="inputForComent">
            {show && (
              <span id="SHOWF">
                <button
                  onClick={(e) => {
                    httpHelper(
                      addComent,
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
                      {
                        post_id: id.id,
                        comment: comment,
                      },
                      "post"
                    ).then((e) => {
                      e.status && setshow((e) => !e);
                    });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48.15 48.15"
                  >
                    <path
                      id="Send"
                      d="M.961.991A3.291,3.291,0,0,1,4.248.134L31.65,8.1a3.267,3.267,0,0,1,2.355,2.589,3.836,3.836,0,0,1-1.706,3.58l-8.568,5.266a2.221,2.221,0,0,1-2.74-.329L11.179,9.336a1.249,1.249,0,0,0-1.805,0,1.3,1.3,0,0,0,0,1.816L19.2,21.027a2.253,2.253,0,0,1,.329,2.756L14.3,32.436a3.252,3.252,0,0,1-2.827,1.611,3.538,3.538,0,0,1-.426-.017,3.319,3.319,0,0,1-2.776-2.365L.144,4.3A3.344,3.344,0,0,1,.961.991"
                      transform="translate(0 24.075) rotate(-45)"
                      fill="#0199ec"
                    />
                  </svg>{" "}
                </button>
                <input
                  onChange={(e) => {
                    setcomment(e.target.value);
                  }}
                  placeholder="اكتب تعليقك"
                />
              </span>
            )}
          </div>
        </div>
        <div style={{ zIndex: "2" }} className={ShowEdit ? "alert" : ""}></div>
      </>
    );
  }
}
export default PostView;
