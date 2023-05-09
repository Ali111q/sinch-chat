import "../../new.css";
import { useState, useEffect } from "react";
import { httpHelper } from "../../helper/http_helper";
import { searchUsers } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { url } from "../../utils/constants";
import useOrientationchange from "../../hooks/orientationchange";
function Search(props) {
  const [style, setstyle] = useState(`slected0`);
  const [filterdName, setfilterdName] = useState("");
  const [account_types, setaccount_types] = useState([]);
  const [users, setusers] = useState([]);
  const [typeid, settypeid] = useState("");
  const [type, settype] = useState();
  const navigate = useNavigate();
  const [path, setpath] = useState();
  const isPC = useOrientationchange();
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  useEffect(() => {
    httpHelper(
      `${url}/home/histories/users?name=${
        filterdName + props.data
      }&account_type_id=${typeid}`,
      [
        {
          key: "Authorization",
          value: `Bearer ${localStorage.getItem("token")}`,
        },
      ],
      {},
      "get"
    ).then((e) => {
      e.data.account_types && setaccount_types(e.data.account_types);
      setusers(e.data.users);
    });
  }, [filterdName, typeid, props.data]);

  return (
    <>
      {isPC ? (
        <>
          <div className="alertSerchHome">
            <span className="alertSerchHomeinfo">
              <h1>سجل البحث</h1>
              <div className="scroool">
                <ul>
                  <li
                    id="slected2"
                    className={style == `slected0` && "slected"}
                    onClick={(f) => {
                      setstyle(`slected0`);
                      settypeid("");
                    }}
                  >
                    All
                  </li>
                  {account_types &&
                    account_types.map((e, index) => {
                      return (
                        <li
                          key={index}
                          id="slected2"
                          className={style == `slected${e.id}` && "slected"}
                          onClick={(f) => {
                            setstyle(`slected${e.id}`);
                            settypeid(e.id);
                          }}
                        >
                          {e.account_name}({e.users_count})
                        </li>
                      );
                    })}
                </ul>
              </div>
              <button>مسح الكل</button>
            </span>
            <ul className="alertSerchHomeUser">
              {users &&
                users.map((e, index) => {
                  return (
                    !e.is_block && (
                      <li
                        key={index}
                        onClick={(n) => {
                          setpath(`/UserProfile/${e.id}`);
                        }}
                      >
                        <div>
                          <img src={e.image}></img>
                          <span>
                            <h1>{e.user_name}</h1>
                            <p>{e.bio && e.bio}</p>
                          </span>
                        </div>
                        <h1>{e.account_type_name}</h1>
                      </li>
                    )
                  );
                })}
            </ul>
          </div>
          <span className="mthlth"></span>
        </>
      ) : (
        <div className="request-alert2233">
          <span className="top-alert"></span>
          <h2>البحث</h2>
          <span className="alert-serch">
            <input
              type="text"
              name=""
              placeholder="ابحث عن طبيب أو صيدلية والمزيد"
              id=""
              onChange={(e) => {
                setfilterdName(e.target.value);
              }}
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6vw"
                height="6vw"
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
          <span className="alertSerchHomeinfo">
            <div className="scroool">
              <ul>
                <li
                  id="slected2"
                  className={style == `slected0` && "slected"}
                  onClick={(f) => {
                    setstyle(`slected0`);
                    settypeid("");
                  }}
                >
                  All
                </li>
                {account_types &&
                  account_types.map((e, index) => {
                    return (
                      <li
                        key={index}
                        id="slected2"
                        className={
                          style == `slected${e.id}` ? "slected" : "slected3"
                        }
                        onClick={(f) => {
                          setstyle(`slected${e.id}`);
                          settypeid(e.id);
                        }}
                      >
                        {e.account_name}({e.users_count})
                      </li>
                    );
                  })}
              </ul>
            </div>
          </span>
          <ul className="alertSerchHomeUser">
            {users &&
              users.map((e, index) => {
                return (
                  !e.is_block && (
                    <li
                      key={index}
                      onClick={(n) => {
                        setpath(`/UserProfile/${e.id}`);
                      }}
                    >
                      <div>
                        <img src={e.image}></img>
                        <span>
                          <h1>{e.user_name}</h1>
                          <p>{e.bio && e.bio}</p>
                        </span>
                      </div>
                      <h1>{e.account_type_name}</h1>
                    </li>
                  )
                );
              })}
          </ul>
        </div>
      )}
      <div
        className="alert"
        onClick={() => {
          props.off(false);
        }}
      ></div>
    </>
  );
}
export default Search;
