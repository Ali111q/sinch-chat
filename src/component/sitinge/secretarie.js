import { useState, useEffect } from "react";
import { httpHelper } from "../../helper/http_helper";
import { useNavigate } from "react-router-dom";
import SearchSC from "./SecretariesSER";
import Splash from "./splash";
import { url } from "../../utils/constants";
function Secretaries(props) {
  const userData = props.data;
  const [data, setData] = useState();
  const [ser, setser] = useState(true);
  const [go, setgo] = useState(true);
  const [path, setpath] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  useEffect(() => {
    httpHelper(
      `${url}/profile/secretaries`,
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
      setgo(false);
    });
  },[]);
  return (
    <>
      {go ? (
        <div className="secretariesST">
          <Splash go={go}/>
        </div>
      ) : ser ? (
        <SearchSC setScrAlerrType={props.setScrAlerrType} SCRALert={props.SCRALert} SCRData={props.SCRData} data={userData} st={setser} run={props.run} />
      ) : (
        data &&
            <>
              <div className="secretariesST">
                <div
                  className="secretariesSTADD"
                  onClick={() => {
                    setser((e) => !e);
                  }}
                >
                  <h1> إضافة سكرتير</h1>
                  <svg
                    id="vuesax_outline_user-cirlce-add"
                    data-name="vuesax/outline/user-cirlce-add"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 51.458 51.458"
                  >
                    <g id="user-cirlce-add" transform="translate(0)">
                      <path
                        id="Vector"
                        d="M7.633,15.266a7.633,7.633,0,1,1,7.633-7.633A7.65,7.65,0,0,1,7.633,15.266Zm0-12.028A4.417,4.417,0,1,0,12.05,7.654,4.424,4.424,0,0,0,7.633,3.238Z"
                        transform="translate(16.938 15.78)"
                        fill="white"
                      />
                      <path
                        id="Vector-2"
                        data-name="Vector"
                        d="M23.863,12.286a1.62,1.62,0,0,1-1.608-1.608c0-4.117-4.267-7.461-9.52-7.461s-9.52,3.345-9.52,7.461a1.62,1.62,0,0,1-1.608,1.608A1.62,1.62,0,0,1,0,10.678C0,4.8,5.7,0,12.736,0S25.471,4.781,25.471,10.678A1.62,1.62,0,0,1,23.863,12.286Z"
                        transform="translate(11.835 32.633)"
                        fill="white"
                      />
                      <path
                        id="Vector-3"
                        data-name="Vector"
                        d="M21.977,43.953A21.977,21.977,0,1,1,30.531,1.715a1.6,1.6,0,0,1,.9,1.973A6.993,6.993,0,0,0,31.089,5.9,6.794,6.794,0,0,0,32.1,9.477,6.229,6.229,0,0,0,33.4,11.063a6.972,6.972,0,0,0,6.8,1.458,1.587,1.587,0,0,1,2.015.9,21.97,21.97,0,0,1-20.24,30.531Zm0-40.737A18.761,18.761,0,1,0,40.737,21.977a19.307,19.307,0,0,0-.986-6.046,10.184,10.184,0,0,1-8.469-2.487,9.179,9.179,0,0,1-1.93-2.316A10.066,10.066,0,0,1,27.894,5.9a8.888,8.888,0,0,1,.15-1.694A18.742,18.742,0,0,0,21.977,3.216Z"
                        transform="translate(2.68 4.824)"
                        fill="white"
                      />
                      <path
                        id="Vector-4"
                        data-name="Vector"
                        d="M10.184,20.369a10.078,10.078,0,0,1-6.8-2.637,9.179,9.179,0,0,1-1.93-2.316A10.137,10.137,0,0,1,.515,6.99a9.8,9.8,0,0,1,2.38-3.9,10.2,10.2,0,0,1,17.5,7.1,9.008,9.008,0,0,1-.322,2.4,9.139,9.139,0,0,1-1.179,2.852,9.882,9.882,0,0,1-5.532,4.4A8.965,8.965,0,0,1,10.184,20.369Zm0-17.153a6.9,6.9,0,0,0-5,2.1A6.673,6.673,0,0,0,3.581,7.976a6.993,6.993,0,0,0-.343,2.208,6.794,6.794,0,0,0,1.008,3.581,6.229,6.229,0,0,0,1.308,1.587,6.972,6.972,0,0,0,6.8,1.458,6.8,6.8,0,0,0,3.816-3.023,6.344,6.344,0,0,0,.793-1.951,6.235,6.235,0,0,0,.214-1.651,7,7,0,0,0-6.99-6.968Z"
                        transform="translate(30.553 0.536)"
                        fill="white"
                      />
                      <path
                        id="Vector-5"
                        data-name="Vector"
                        d="M8.019,3.216H1.608A1.62,1.62,0,0,1,0,1.608,1.62,1.62,0,0,1,1.608,0H8.019a1.608,1.608,0,1,1,0,3.216Z"
                        transform="translate(35.913 9.069)"
                        fill="white"
                      />
                      <path
                        id="Vector-6"
                        data-name="Vector"
                        d="M1.608,9.627A1.62,1.62,0,0,1,0,8.019V1.608A1.62,1.62,0,0,1,1.608,0,1.62,1.62,0,0,1,3.216,1.608V8.019A1.606,1.606,0,0,1,1.608,9.627Z"
                        transform="translate(39.129 5.939)"
                        fill="white"
                      />
                      <path
                        id="Vector-7"
                        data-name="Vector"
                        d="M0,0H51.458V51.458H0Z"
                        fill="none"
                        opacity="0"
                      />
                    </g>
                  </svg>
                </div>
                <ul>
                  {data.map(e=>{
                    return(
                    <li>
                    <button
                    onClick={()=>{
                      props.SCRALert(true)
                      props.SCRData(e)
                      props.setScrAlerrType(1)

                    }}
                    >{e.type_name}</button>
                    <div
                      onClick={(k)=> setpath(`/UserProfile/${e.patient_id}`)}
                      className="secretariesSTuser"
                    >
                      <span>
                        <h1>{e.name}</h1>
                        <p>{e.type_name}</p>
                      </span>
                      <div className="secretariesSTimg">
                        <img src={e.image} />
                      </div>
                    </div>
                  </li>)
                  })}
                </ul>
              </div>
            </>
      )}
    </>
  );
}

export default Secretaries;
