import React from "react";
import "../../new.css";
import "./profile.css";
import AppBar from "../../component/home/appBar";
import { useState, useEffect } from "react";
import { httpHelper } from "../../helper/http_helper";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../../utils/constants";
import god from "../../assets/imgs/god.jpg";
import Story from "./story";
import Highligths from "../../component/profile/highligths";
import nopost from "../../assets/noPost.png";
import ProfileMap from "./ProfileMap";
function UserProfile(props) {
  const navigate = useNavigate();
  const harfId = useParams();
  const [path, setpath] = useState();
  const [DrugsSerch, setDrugsSerch] = useState(false);
  const [data, setdata] = useState();
  const [story, setstory] = useState();
  const [type, settype] = useState();
  const [Ind, setInd] = useState();
  const [follow, setfollow] = useState();
  const [serchval, setserchval] = useState();
  const [off, setoff] = useState(true);
  const [isFriend, setIsFriend] = useState();
  const [isRequestFriend, setIsRequestFriend] = useState();
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    path && navigate(path);
  }, [path]);
  useEffect(() => {
    if (harfId.id == localStorage.getItem("id")) {
      setpath("/profile");
    }
    httpHelper(
      `${url}/profile/pages?id=${harfId.id}`,
      [
        {
          key: "Authorization",
          value: `Bearer ${localStorage.getItem("token")}`,
        },
      ],
      {},
      "get"
    ).then((e) => {
      if (e.status) {
        console.log(e);
        setdata(e.data);
        setfollow(e.data.user.is_follow);
        setIsFriend(Boolean(e.data.user.isFriend || 1));
        setIsRequestFriend(Boolean(e.data.user.isRequestFriend));
        setoff(true);
      }
    });
  }, [harfId]);

  function handelFolo() {
    var hurl = `${url}/profile/pages/follow`;
    var datat = {
      user_id: data.user.id,
    };
    if (follow) {
      hurl = `${url}/profile/pages/cancel_following`;
      datat = {
        user_id: data.user.id,
        type: 1,
      };
    }
    httpHelper(
      hurl,
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
      datat,
      "post"
    ).then((e) => {
      e.status && setfollow((e) => !e);
    });
  }
  function handleFriendReq(param) {
    if (param === "req") {
      httpHelper(
        `${url}/friends/add-cancle`,
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
          user_id: data.user.id,
        },
        "post"
      ).then((res) =>
        setIsRequestFriend(
          res.message === "friend request sended" ? true : false
        )
      );
    } else {
      httpHelper(
        `${url}/friends/delete-friend`,
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
          user_id: data.user.id,
        },
        "post"
      ).then((res) => setIsFriend(false));
    }
  }


  if (story) {
    return (
      <Story
        data={data}
        run={props.run}
        show={setstory}
        type={type}
        ind={Ind}
      />
    );
  } else {
    return (
      <>
        {DrugsSerch && (
          <div
            onClick={(e) => {
              setDrugsSerch(false);
            }}
            className="alert"
          ></div>
        )}
        <div
          style={{ bottom: DrugsSerch ? "0" : "-100vh" }}
          className="DrugsSerchPRO"
        >
          <span
            id="DrugsSerchPROLin"
            onClick={(e) => {
              setDrugsSerch(false);
            }}
          ></span>
          <h1>العلاجات</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              httpHelper(
                `${url}/profile/drugs?name=${serchval}&id=${data.user.id}`,
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
                setDrugsSerch(e.data);
              });
            }}
            className="DrugsSerchPROSEr"
          >
            <button type={"submit"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.12 34.12">
                <path
                  id="icons8-search"
                  d="M17.217,3A14.217,14.217,0,1,0,26.2,28.215L34.693,36.7A1.422,1.422,0,1,0,36.7,34.693L28.215,26.2a14.2,14.2,0,0,0-11-23.2Zm0,2.843A11.373,11.373,0,1,1,5.843,17.217,11.352,11.352,0,0,1,17.217,5.843Z"
                  transform="translate(-3 -3)"
                  fill="#2a2d37"
                />
              </svg>
            </button>

            <input
              type={"text"}
              onChange={(e) => {
                setserchval(e.target.value);
              }}
              placeholder="ابحث عن علاج"
            />
          </form>
          <ul>
            {DrugsSerch &&
              DrugsSerch.map((e, i) => {
                return (
                  <li>
                    <button
                      onClick={(e) => {
                        setpath(`/chat/${data.user.id}`);
                      }}
                    >
                      {" "}
                      تواصل{" "}
                    </button>
                    <span>
                      <h1>{e.name}</h1>
                      <p>{e.company_name}</p>
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
        <AppBar offf={setoff} run={props.run} start={0} />
        {data && (
          <div className="profileContainer">
            <div className="profileContainerInfo">
              {data.user.has_stories ? (
                <span className="profileContainerInfoImg">
                  {data.user.image && (
                    <img
                      onClick={(e) => {
                        setpath(`/storyScreen/${data.user.id}`);
                      }}
                      src={data.user.image}
                    />
                  )}
                </span>
              ) : (
                <span
                  style={{
                    background: "white",
                  }}
                  className="profileContainerInfoImg"
                >
                  {data.user.image && <img src={data.user.image} />}
                </span>
              )}

              <br></br>

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
                {data.user.account_type_id !== 1 && (
                  <div className="consultationDataUser">
                    <br></br>
                    <span>
                      <p1 style={{ color: "#0199EC" }}>
                        {data.user.start_time_format} -
                        {data.user.end_time_format}
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
                )}

                <p>{data.user.bio}</p>
              </span>
            </div>
            <div className="profileContainerAction">
              <ul>
                {data.user.account_type_id === 1 ? (
                  <>
                    {isFriend ? (
                      <li
                        onClick={() => handleFriendReq("delete")}
                        className={isFriend && "cancel-friend-button"}
                      >
                        الغاء الصداقة
                      </li>
                    ) : isRequestFriend ? (
                      <li onClick={() => handleFriendReq("req")}>
                        تم ارسال الطلب
                      </li>
                    ) : (
                      <li onClick={() => handleFriendReq("req")}>إضافة صديق</li>
                    )}
                    <li
                      onClick={(e) => {
                        setpath(`/chat/${data.user.id}`);
                        sessionStorage.setItem(
                          "newCahtData",
                          JSON.stringify({
                            name: data.user.user_name,
                            id: data.user.id,
                          })
                        );
                      }}
                    >
                      مراسلة
                    </li>
                    {!isFriend &&
                      (follow ? (
                        <li
                          onClick={(e) => {
                            handelFolo();
                          }}
                          style={{ background: "#F0F0F0", color: "black" }}
                        >
                          الغاء المتابعة
                        </li>
                      ) : (
                        <li
                          onClick={(e) => {
                            handelFolo();
                          }}
                        >
                          متابعة
                        </li>
                      ))}
                  </>
                ) : data.user.account_type_id == 2 ? (
                  <>
                    {showMap && (
                      <div class="alert" onClick={() => setShowMap(false)}>
                        <div
                          class="map-alert"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ProfileMap lat={data.user.lat} lng={data.user.lng} />
                        </div>
                      </div>
                    )}
                    <li
                      className="location__svg-container"
                      onClick={() => setShowMap(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <g id="Location" transform="translate(0.308 0.282)">
                          <path
                            id="Location-2"
                            data-name="Location"
                            d="M6.188,16.73l-.05-.041-.34-.236a17.328,17.328,0,0,1-3.734-3.618l-.26-.351A9.279,9.279,0,0,1,0,7.247L0,7A7.328,7.328,0,0,1,2.129,2.042,6.843,6.843,0,0,1,7,0h.024l.21,0a6.854,6.854,0,0,1,4.8,2.208A7.339,7.339,0,0,1,14,7.27v.087a10.42,10.42,0,0,1-3.063,6.708,17.568,17.568,0,0,1-3.084,2.63l-.041.035a1.356,1.356,0,0,1-1.624,0ZM6.822,1.293a5.637,5.637,0,0,0-3.942,1.8A6.033,6.033,0,0,0,1.246,7.224l.016.3A7.958,7.958,0,0,0,2.8,11.706a16,16,0,0,0,4.037,3.914l.067.053a.145.145,0,0,0,.2,0l.07-.054a16.279,16.279,0,0,0,2.868-2.444,9.132,9.132,0,0,0,2.718-5.829l0-.282a6.022,6.022,0,0,0-1.734-4.08,5.622,5.622,0,0,0-4-1.692ZM4.333,7.351A2.718,2.718,0,0,1,7,4.591,2.718,2.718,0,0,1,9.666,7.351,2.718,2.718,0,0,1,7,10.112,2.718,2.718,0,0,1,4.333,7.351Zm1.246,0A1.422,1.422,0,1,0,7,5.88,1.448,1.448,0,0,0,5.579,7.351Z"
                            transform="translate(-0.308 -0.282)"
                            fill="#2a2d37"
                          />
                        </g>
                      </svg>
                    </li>
                    {isFriend ? (
                      <li
                        onClick={() => handleFriendReq("delete")}
                        className={isFriend && "cancel-friend-button"}
                      >
                        الغاء الصداقة
                      </li>
                    ) : isRequestFriend ? (
                      <li onClick={() => handleFriendReq("req")}>
                        تم ارسال الطلب
                      </li>
                    ) : (
                      <li onClick={() => handleFriendReq("req")}>إضافة صديق</li>
                    )}
                    {isFriend && (
                      <li
                        onClick={(e) => {
                          setpath(`/chat/${data.user.id}`);
                          sessionStorage.setItem(
                            "newCahtData",
                            JSON.stringify({
                              name: data.user.user_name,
                              id: data.user.id,
                            })
                          );
                        }}
                      >
                        مراسلة
                      </li>
                    )}
                    <li
                      onClick={() => {
                        setpath(`/Requaste/${data.user.id}`);
                      }}
                      className="request-date"
                    >
                      حجز موعد
                    </li>
                    {!isFriend &&
                      (follow ? (
                        <li
                          onClick={(e) => {
                            handelFolo();
                          }}
                          style={{ background: "#F0F0F0", color: "black" }}
                        >
                          الغاء المتابعة
                        </li>
                      ) : (
                        <li
                          onClick={(e) => {
                            handelFolo();
                          }}
                        >
                          متابعة
                        </li>
                      ))}
                    <li>طلب استشارة</li>
                  </>
                ) : data.user.account_type_id == 3 ? (
                  <>
                    {showMap && (
                      <div class="alert" onClick={() => setShowMap(false)}>
                        <div
                          class="map-alert"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ProfileMap lat={data.user.lat} lng={data.user.lng} />
                        </div>
                      </div>
                    )}
                    <li
                      className="location__svg-container"
                      onClick={() => setShowMap(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <g id="Location" transform="translate(0.308 0.282)">
                          <path
                            id="Location-2"
                            data-name="Location"
                            d="M6.188,16.73l-.05-.041-.34-.236a17.328,17.328,0,0,1-3.734-3.618l-.26-.351A9.279,9.279,0,0,1,0,7.247L0,7A7.328,7.328,0,0,1,2.129,2.042,6.843,6.843,0,0,1,7,0h.024l.21,0a6.854,6.854,0,0,1,4.8,2.208A7.339,7.339,0,0,1,14,7.27v.087a10.42,10.42,0,0,1-3.063,6.708,17.568,17.568,0,0,1-3.084,2.63l-.041.035a1.356,1.356,0,0,1-1.624,0ZM6.822,1.293a5.637,5.637,0,0,0-3.942,1.8A6.033,6.033,0,0,0,1.246,7.224l.016.3A7.958,7.958,0,0,0,2.8,11.706a16,16,0,0,0,4.037,3.914l.067.053a.145.145,0,0,0,.2,0l.07-.054a16.279,16.279,0,0,0,2.868-2.444,9.132,9.132,0,0,0,2.718-5.829l0-.282a6.022,6.022,0,0,0-1.734-4.08,5.622,5.622,0,0,0-4-1.692ZM4.333,7.351A2.718,2.718,0,0,1,7,4.591,2.718,2.718,0,0,1,9.666,7.351,2.718,2.718,0,0,1,7,10.112,2.718,2.718,0,0,1,4.333,7.351Zm1.246,0A1.422,1.422,0,1,0,7,5.88,1.448,1.448,0,0,0,5.579,7.351Z"
                            transform="translate(-0.308 -0.282)"
                            fill="#2a2d37"
                          />
                        </g>
                      </svg>
                    </li>
                    {isFriend ? (
                      <li
                        onClick={() => handleFriendReq("delete")}
                        className={isFriend && "cancel-friend-button"}
                      >
                        الغاء الصداقة
                      </li>
                    ) : isRequestFriend ? (
                      <li onClick={() => handleFriendReq("req")}>
                        تم ارسال الطلب
                      </li>
                    ) : (
                      <li onClick={() => handleFriendReq("req")}>إضافة صديق</li>
                    )}
                    <li
                      onClick={(e) => {
                        setpath(`/chat/${data.user.id}`);

                        sessionStorage.setItem(
                          "newCahtData",
                          JSON.stringify({
                            name: data.user.user_name,
                            id: data.user.id,
                          })
                        );
                      }}
                    >
                      مراسلة
                    </li>

                    {!isFriend &&
                      (follow ? (
                        <li
                          onClick={(e) => {
                            handelFolo();
                          }}
                          style={{ background: "#F0F0F0", color: "black" }}
                        >
                          الغاء المتابعة
                        </li>
                      ) : (
                        <li
                          onClick={(e) => {
                            handelFolo();
                          }}
                        >
                          متابعة
                        </li>
                      ))}
                    <li
                      className="request-date"
                      onClick={() => {
                        httpHelper(
                          `${url}/profile/drugs?id=${data.user.id}`,
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
                          setDrugsSerch(e.data);
                        });
                      }}
                    >
                      {" "}
                      البجث عن دواء{" "}
                    </li>
                  </>
                ) : (
                  <>
                    {showMap && (
                      <div class="alert" onClick={() => setShowMap(false)}>
                        <div
                          class="map-alert"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ProfileMap lat={data.user.lat} lng={data.user.lng} />
                        </div>
                      </div>
                    )}
                    <li
                      className="location__svg-container position-normal"
                      onClick={() => setShowMap(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <g id="Location" transform="translate(0.308 0.282)">
                          <path
                            id="Location-2"
                            data-name="Location"
                            d="M6.188,16.73l-.05-.041-.34-.236a17.328,17.328,0,0,1-3.734-3.618l-.26-.351A9.279,9.279,0,0,1,0,7.247L0,7A7.328,7.328,0,0,1,2.129,2.042,6.843,6.843,0,0,1,7,0h.024l.21,0a6.854,6.854,0,0,1,4.8,2.208A7.339,7.339,0,0,1,14,7.27v.087a10.42,10.42,0,0,1-3.063,6.708,17.568,17.568,0,0,1-3.084,2.63l-.041.035a1.356,1.356,0,0,1-1.624,0ZM6.822,1.293a5.637,5.637,0,0,0-3.942,1.8A6.033,6.033,0,0,0,1.246,7.224l.016.3A7.958,7.958,0,0,0,2.8,11.706a16,16,0,0,0,4.037,3.914l.067.053a.145.145,0,0,0,.2,0l.07-.054a16.279,16.279,0,0,0,2.868-2.444,9.132,9.132,0,0,0,2.718-5.829l0-.282a6.022,6.022,0,0,0-1.734-4.08,5.622,5.622,0,0,0-4-1.692ZM4.333,7.351A2.718,2.718,0,0,1,7,4.591,2.718,2.718,0,0,1,9.666,7.351,2.718,2.718,0,0,1,7,10.112,2.718,2.718,0,0,1,4.333,7.351Zm1.246,0A1.422,1.422,0,1,0,7,5.88,1.448,1.448,0,0,0,5.579,7.351Z"
                            transform="translate(-0.308 -0.282)"
                            fill="#2a2d37"
                          />
                        </g>
                      </svg>
                    </li>
                    {follow ? (
                      <li
                        onClick={(e) => {
                          handelFolo();
                        }}
                        style={{ background: "#F0F0F0", color: "black" }}
                      >
                        الغاء المتابعة
                      </li>
                    ) : (
                      <li
                        onClick={(e) => {
                          handelFolo();
                        }}
                      >
                        متابعة
                      </li>
                    )}
                    <li
                      onClick={(e) => {
                        setpath(`/chat/${data.user.id}`);
                        sessionStorage.setItem(
                          "newCahtData",
                          JSON.stringify({
                            name: data.user.user_name,
                            id: data.user.id,
                          })
                        );
                      }}
                    >
                      مراسلة
                    </li>
                    {!isFriend &&
                      (follow ? (
                        <li
                          onClick={(e) => {
                            handelFolo();
                          }}
                          style={{ background: "#F0F0F0", color: "black" }}
                        >
                          الغاء المتابعة
                        </li>
                      ) : (
                        <li
                          onClick={(e) => {
                            handelFolo();
                          }}
                        >
                          متابعة
                        </li>
                      ))}
                  </>
                )}
              </ul>
            </div>
            {data.highlights.length == 0 ? (
              ""
            ) : (
              <div className="profileContainerHighligths">
                <Highligths
                  data={data}
                  type={settype}
                  ind={setInd}
                  show={setstory}
                />
              </div>
            )}

            <div className="profileContainerPost">
              {data.posts.length == 0
                ? nopost && (
                    <img
                      style={{
                        width: "30%",
                        marginLeft: "35%",
                        cursor: "auto",
                      }}
                      src={nopost}
                    />
                  )
                : ""}
              {data.posts.map((e) => {
                return (
                  <span
                    key={e.id}
                    onClick={() => {
                      setpath(`/post/${e.id}`);
                    }}
                  >
                    {e.file_post.file && e.file_post.file_type == "image" ? (
                      <img src={e.file_post.file} />
                    ) : (
                      <video src={e.file_post.file} muted />
                    )}
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
export default UserProfile;
