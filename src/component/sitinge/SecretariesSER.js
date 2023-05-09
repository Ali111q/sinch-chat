import "../../new.css";
import { useState, useEffect } from "react";
import { httpHelper } from "../../helper/http_helper";
import god from "../../assets/imgs/god.jpg";
import { useNavigate } from "react-router-dom";
import { url } from "../../utils/constants";
function SearchSC(props) {
  const userData = props.data;
  const [ser, setser] = useState(true);
  const [data, setData] = useState();
  const [serchFor, setserchFor] = useState("");
  const [path, setpath] = useState();
  const navigate = useNavigate()
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  useEffect(() => {
    httpHelper(
      `${url}/profile/secretaries/users_to_assign?name=${serchFor}`,
      [
        {
          key: "Authorization",
          value: `Bearer ${localStorage.getItem("token")}`,
        },
      ],
      {},
      "get"
    ).then((e) => {
      setData(e.data);
    });
  }, [serchFor]);
  
  return (
    <>
    
      {data && (
        <div className="SearchSC">
          <div
            onClick={(e) => {
              props.st((e) => !e);
            }}
            className="secretariesSTADD"
          >
            <h1> قائمة السكرتارية</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 49">
              <path
                id="Document"
                d="M31.513,48H11.49C4.188,48,0,43.766,0,36.383V11.593C0,8,1.045,5.047,3.022,3.051S7.928,0,11.49,0H31.513C38.813,0,43,4.225,43,11.593V36.383c0,3.706-1,6.6-2.977,8.6S35.182,48,31.513,48ZM11.941,32.967a1.862,1.862,0,0,0-1.6.9,1.913,1.913,0,0,0,0,2.015,1.879,1.879,0,0,0,1.559.879,1.665,1.665,0,0,0,.232-.015H30.865a1.9,1.9,0,0,0,0-3.767H12.135A1.9,1.9,0,0,0,11.941,32.967Zm.194-10.937a1.873,1.873,0,0,0,0,3.745H30.865a1.873,1.873,0,0,0,0-3.745Zm0-10.869v.024l-.007,0a1.87,1.87,0,0,0,.007,3.741h7.142a1.884,1.884,0,0,0,0-3.767Z"
                transform="translate(0.5 0.5)"
                fill="#fff"
                stroke="rgba(0,0,0,0)"
                stroke-width="1"
              />
            </svg>
          </div>
          <div className="SearchSCserch">
            {ser ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 43">
                <g
                  id="icons_dark_search"
                  data-name="icons/dark/search"
                  opacity="0.3"
                >
                  <rect
                    id="bg"
                    width="43"
                    height="43"
                    fill="rgba(52,151,253,0)"
                  />
                  <path
                    id="ico"
                    d="M28.142,25.836,37.4,35.09A1.631,1.631,0,0,1,35.09,37.4l-9.254-9.254a14.674,14.674,0,1,1,2.306-2.306ZM16.676,28.09A11.414,11.414,0,1,0,5.261,16.676,11.414,11.414,0,0,0,16.676,28.09Z"
                    transform="translate(1.674 1.674)"
                    fill="#454f63"
                  />
                </g>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                <g id="close" transform="translate(0.193 0.302)">
                  <circle
                    id="Ellipse_54"
                    data-name="Ellipse 54"
                    cx="17.5"
                    cy="17.5"
                    r="17.5"
                    transform="translate(-0.193 -0.302)"
                    fill="#2a2d37"
                    opacity="0.5"
                  />
                  <g
                    id="close-2"
                    data-name="close"
                    transform="translate(5.283 5.238)"
                  >
                    <path
                      id="Path_54354"
                      data-name="Path 54354"
                      d="M0,0H24.34V24.34H0Z"
                      fill="none"
                    />
                    <path
                      id="Path_54355"
                      data-name="Path 54355"
                      d="M18.483,5.714a1.01,1.01,0,0,0-1.43,0l-4.959,4.949L7.134,5.7A1.011,1.011,0,0,0,5.7,7.134l4.959,4.959L5.7,17.053a1.011,1.011,0,0,0,1.43,1.43l4.959-4.959,4.959,4.959a1.011,1.011,0,0,0,1.43-1.43l-4.959-4.959,4.959-4.959A1.016,1.016,0,0,0,18.483,5.714Z"
                      transform="translate(0.077 0.077)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
            )}
            <input
              type={"text"}
              placeholder={"Search"}
              onChange={(e) => setserchFor(e.target.value)}
            />
          </div>
          <br />
          <br />
          <div
            className="secretariesST"
            style={{
              padding: "0",
              height: "75%",
            }}
          >
            <ul className="SearchSCconul">
              {data.map((e) => {
                return (
                  <li key={e.id}>
                    <button
                    onClick={()=>{
                      if (!e.is_assigned) {
                      props.SCRALert(true)
                      props.SCRData(e)
                      props.setScrAlerrType(2)}
                    }}>
                      {e.button_txt}
                    </button>
                    <div
                      onClick={(k) => {
                        setpath(`/UserProfile/${e.id}`);
                      }}
                      className="secretariesSTuser"
                    >
                      <span>
                        <h1 >{e.user_name}</h1>
                        <p>{e.button_txt}</p>
                      </span>
                      <div
                        className="secretariesSTimg"

                      >
                        <img src={e.image} />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
export default SearchSC;
