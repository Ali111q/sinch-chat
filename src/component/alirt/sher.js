import "../../new.css";
import { useState, useEffect } from "react";
import { httpHelper } from "../../helper/http_helper";
import { url } from "../../utils/constants";
import useOrientationchange from "../../hooks/orientationchange";
function SherAlert(props) {
  const [users, setUsers] = useState();
  const [style, setstyle] = useState([]);
  const isPC = useOrientationchange();
  useEffect(() => {
    httpHelper(
      `${url}/home/get_users_to_share`,
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
      "get"
    ).then((e) => setUsers(e.data));
  }, []);

  return (
    <>
      {isPC ? (
        <div className="request-alert2233">
          <span className="top-alert"></span>
          <h2>مشاركة</h2>
          <span className="alert-serch">
            <input type="text" name="" id="" />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2vw"
                height="2vw"
                viewBox="0 0 42 42"
              >
                <g id="search" transform="translate(0.359 -0.209)">
                  <rect
                    id="Rectangle_12125"
                    data-name="Rectangle 12125"
                    width="42"
                    height="42"
                    transform="translate(-0.359 0.209)"
                    fill="none"
                  />
                  <path
                    id="icons8-search"
                    d="M17.217,3A14.217,14.217,0,1,0,26.2,28.215L34.693,36.7A1.422,1.422,0,1,0,36.7,34.693L28.215,26.2a14.2,14.2,0,0,0-11-23.2Zm0,2.843A11.373,11.373,0,1,1,5.843,17.217,11.352,11.352,0,0,1,17.217,5.843Z"
                    transform="translate(1.674 1.674)"
                    fill="#2a2d37"
                  />
                </g>
              </svg>
            </button>
          </span>

          <div className="sher-alert-list" id="style1">
            <ul className="sher-alert-list-scroll">
              {users &&
                users.map((e, index) => {
                  return (
                    <a>
                      <div className="sher-us-data">
                        <span className="sher-us-data-img">
                          <img src={e.image} alt="" />
                        </span>
                        <span className="sher-us-data-name">
                          <h2>{e.user_name}</h2>
                        </span>
                      </div>
                      <button
                        className="sher-us-data-button"
                        onClick={(f) => {
                          f.target.id == "chosenOne"
                            ? (f.target.id = "chOne") &&
                              setstyle((newData) => {
                                var list = [];
                                newData.map((oldData) => {
                                  if (oldData[1].e.id != e.id) {
                                    list.push(oldData);
                                  }
                                });
                                return list;
                              })
                            : (f.target.id = "chosenOne") &&
                              setstyle((ff) => {
                                return [...ff, [f.target.id, { e }]];
                              });
                        }}
                      ></button>
                    </a>
                  );
                })}
            </ul>
          </div>
          <button
            className="alert-din-rq33411111"
            onClick={(e) => {
              let ides = [];
              style.map((f) => {
                ides.push(f[1].e.id);
              });
              httpHelper(
                "https://web.azu-app.com/api/home/posts/share",
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
                { post_id: props.data, user_ids: ides },
                "post"
              ).then((e) => e.status && props.off(false));
            }}
          >
            إرسال{" "}
          </button>
        </div>
      ) : (
        <div className="request-alert2233">
          <span className="top-alert"></span>
          <h2>مشاركة</h2>
          <span className="alert-serch">
            <input type="text" name="" id="" />
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42">
                <g id="search" transform="translate(0.359 -0.209)">
                  <rect
                    id="Rectangle_12125"
                    data-name="Rectangle 12125"
                    width="42"
                    height="42"
                    transform="translate(-0.359 0.209)"
                    fill="none"
                  />
                  <path
                    id="icons8-search"
                    d="M17.217,3A14.217,14.217,0,1,0,26.2,28.215L34.693,36.7A1.422,1.422,0,1,0,36.7,34.693L28.215,26.2a14.2,14.2,0,0,0-11-23.2Zm0,2.843A11.373,11.373,0,1,1,5.843,17.217,11.352,11.352,0,0,1,17.217,5.843Z"
                    transform="translate(1.674 1.674)"
                    fill="#2a2d37"
                  />
                </g>
              </svg>
            </button>
          </span>

          <div className="sher-alert-list" id="style1">
            <ul className="sher-alert-list-scroll">
              {users &&
                users.map((e) => {
                  return (
                    <a key={e.id}>
                      <div className="sher-us-data">
                        <span className="sher-us-data-img">
                          <img src={e.image} alt="" />
                        </span>
                        <span className="sher-us-data-name">
                          <h2>{e.user_name}</h2>
                        </span>
                      </div>
                      <button
                        className="sher-us-data-button"
                        onClick={(e) => {
                          e.target.id == "chosenOne"
                            ? (e.target.id = "chOne")
                            : (e.target.id = "chosenOne");
                        }}
                      ></button>
                    </a>
                  );
                })}
            </ul>
          </div>
          <button
            className="alert-din-rq33411111"
            onClick={(e) => {
              props.off(false);
            }}
          >
            إرسال{" "}
          </button>
        </div>
      )}
      <div
        className="alert"
        onClick={(e) => {
          props.off(false);
        }}
      ></div>
    </>
  );
}
export default SherAlert;
