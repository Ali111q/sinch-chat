import { useEffect, useState } from "react";
import { httpHelper } from "../../helper/http_helper";
import { useNavigate } from "react-router-dom";
import god from "../../assets/imgs/god.jpg";
import Splash from "./splash";
import { url } from "../../utils/constants";
function Save(params) {
  const [data, setdata] = useState();
  const [path, setpath] = useState();
  const navigate = useNavigate();
  const [go, setgo] = useState(true);

  useEffect(() => {
    path && navigate(path);
  }, [path]);
  useEffect(() => {
    httpHelper(
      `${url}/profile/saved_posts`,
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
        setdata(e.data);
        setgo(false)
      }
    });
  }, []);
  if (go) {
    return(<div style={{position:"relative"}} className="savePosts">
      <Splash go={go}/>
    </div>)
  } else {
      return (
    <>
      {data && data.length != 0 ? (
        <div className="savePosts">
          <div className="savePostsScroll">
            {data &&
              data.map((e) => {
                return (
                  <div
                    onClick={(k) => setpath(`/post/${e.id}`)}
                    className="savePostsScrollspan"
                  >
                    <img src={e.file_post.file} />
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div className="savePostsNo">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.833 90.077">
              <path
                id="Path"
                d="M51.084,0H22.612C10.152,0,0,4.819,0,17.069V85.435a4.631,4.631,0,0,0,4.661,4.594,5,5,0,0,0,2.261-.585L36.871,74.851l29.9,14.592a4.708,4.708,0,0,0,3.646.45,4.756,4.756,0,0,0,2.861-2.252,4.612,4.612,0,0,0,.554-2.207V17.069C73.7,4.819,63.589,0,51.084,0"
                fill="#2a2d37"
              />
            </svg>
          </span>
          <h1>لا توجد أي محفوظات</h1>
          <button>إضافة محفوظات</button>
        </div>
      )}
    </>
  );
  }

}
export default Save;
