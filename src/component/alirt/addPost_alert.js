import "../../new.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useOrientationchange from "../../hooks/orientationchange";
function AddPost(props) {
  const [path, setpath] = useState();
  const navigate = useNavigate();
  const isPC = useOrientationchange();
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  return (
    <>
      {isPC ? (
        <div className="request-alert2233">
          <span className="top-alert"></span>
          <h2>إنشاء</h2>
          <div className="AddPost">
            <ul>
              <li
                onClick={(e) => {
                  setpath("/addstory");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.449 19.453"
                >
                  <g id="story-plus" transform="translate(-1.35 -1.35)">
                    <path
                      id="Path_10713"
                      data-name="Path 10713"
                      d="M11.731,22.628a9.743,9.743,0,0,1-2.942-.455.7.7,0,1,1,.423-1.335,8.346,8.346,0,0,0,5.842-.3.7.7,0,1,1,.557,1.284A9.746,9.746,0,0,1,11.731,22.628Z"
                      transform="translate(-0.663 -1.825)"
                      fill="#2a2d37"
                    />
                    <path
                      id="Path_10714"
                      data-name="Path 10714"
                      d="M6.65,21.011a.7.7,0,0,1-.349-.094A9.759,9.759,0,0,1,2.734,17.35a.7.7,0,0,1,1.212-.7A8.357,8.357,0,0,0,7,19.7a.7.7,0,0,1-.351,1.306Z"
                      transform="translate(-0.123 -1.426)"
                      fill="#2a2d37"
                    />
                    <path
                      id="Path_10715"
                      data-name="Path 10715"
                      d="M2.466,15.319a.7.7,0,0,1-.667-.489A9.653,9.653,0,0,1,1.35,11.9V11a.7.7,0,0,1,1.4,0v.9a8.256,8.256,0,0,0,.384,2.5.7.7,0,0,1-.668.911Z"
                      transform="translate(0 -0.854)"
                      fill="#2a2d37"
                    />
                    <path
                      id="Path_10716"
                      data-name="Path 10716"
                      d="M2.46,9.414a.7.7,0,0,1-.668-.91,9.722,9.722,0,0,1,1.5-2.924.7.7,0,1,1,1.12.84,8.325,8.325,0,0,0-1.285,2.5A.7.7,0,0,1,2.46,9.414Z"
                      transform="translate(-0.039 -0.377)"
                      fill="#2a2d37"
                    />
                    <path
                      id="Path_10717"
                      data-name="Path 10717"
                      d="M6,4.587a.7.7,0,0,1-.425-1.257A9.622,9.622,0,0,1,7.527,2.179a.7.7,0,0,1,.564,1.281,8.22,8.22,0,0,0-1.667.984A.7.7,0,0,1,6,4.587Z"
                      transform="translate(-0.377 -0.073)"
                      fill="#2a2d37"
                    />
                    <path
                      id="Path_10718"
                      data-name="Path 10718"
                      d="M17.524,18.988a.7.7,0,0,1-.421-1.26A8.346,8.346,0,0,0,12.93,2.746a.7.7,0,1,1,.14-1.393,9.746,9.746,0,0,1,4.873,17.494A.7.7,0,0,1,17.524,18.988Z"
                      transform="translate(-1.045)"
                      fill="#2a2d37"
                    />
                    <path
                      id="Line_73"
                      data-name="Line 73"
                      d="M0,7.032a.7.7,0,0,1-.7-.7V0A.7.7,0,0,1,0-.7.7.7,0,0,1,.7,0V6.332A.7.7,0,0,1,0,7.032Z"
                      transform="translate(11.051 7.885)"
                      fill="#2a2d37"
                    />
                    <path
                      id="Line_74"
                      data-name="Line 74"
                      d="M6.332.7H0A.7.7,0,0,1-.7,0,.7.7,0,0,1,0-.7H6.332a.7.7,0,0,1,.7.7A.7.7,0,0,1,6.332.7Z"
                      transform="translate(7.885 11.051)"
                      fill="#2a2d37"
                    />
                  </g>
                </svg>

                <h1>قصة</h1>
              </li>
              <li
                onClick={(e) => {
                  setpath("/addpost");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 17.467 17.467"
                >
                  <path
                    id="grid_on_FILL0_wght300_GRAD0_opsz40"
                    d="M6.528,22.467A1.533,1.533,0,0,1,5,20.938V6.528A1.533,1.533,0,0,1,6.528,5h14.41a1.533,1.533,0,0,1,1.528,1.528v14.41a1.533,1.533,0,0,1-1.528,1.528Zm-.316-5.41v3.882a.334.334,0,0,0,.316.316H10.41v-4.2Zm5.435,0v4.2H15.82v-4.2Zm5.409,4.2h3.882a.334.334,0,0,0,.316-.316V17.057h-4.2ZM6.213,15.844h4.2v-4.2h-4.2Zm5.435,0H15.82v-4.2H11.647Zm5.409,0h4.2v-4.2h-4.2ZM10.41,6.213H6.528a.334.334,0,0,0-.316.316V10.41h4.2Zm1.237,4.2H15.82v-4.2H11.647Zm5.409,0h4.2V6.528a.334.334,0,0,0-.316-.316H17.057Z"
                    transform="translate(-5 -5)"
                    fill="#2a2d37"
                  />
                </svg>
                <h1>منشور</h1>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="request-alert2233">
          <span className="top-alert"></span>
          <h2>إنشاء</h2>
          <div className="AddPost">
            <ul>
              <li
                onClick={(e) => {
                  setpath("/addstory");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.449 19.453"
                >
                  <g id="story-plus" transform="translate(-1.35 -1.35)">
                    <path
                      id="Path_10713"
                      data-name="Path 10713"
                      d="M11.731,22.628a9.743,9.743,0,0,1-2.942-.455.7.7,0,1,1,.423-1.335,8.346,8.346,0,0,0,5.842-.3.7.7,0,1,1,.557,1.284A9.746,9.746,0,0,1,11.731,22.628Z"
                      transform="translate(-0.663 -1.825)"
                      fill="#2a2d37"
                    />
                    <path
                      id="Path_10714"
                      data-name="Path 10714"
                      d="M6.65,21.011a.7.7,0,0,1-.349-.094A9.759,9.759,0,0,1,2.734,17.35a.7.7,0,0,1,1.212-.7A8.357,8.357,0,0,0,7,19.7a.7.7,0,0,1-.351,1.306Z"
                      transform="translate(-0.123 -1.426)"
                      fill="#2a2d37"
                    />
                    <path
                      id="Path_10715"
                      data-name="Path 10715"
                      d="M2.466,15.319a.7.7,0,0,1-.667-.489A9.653,9.653,0,0,1,1.35,11.9V11a.7.7,0,0,1,1.4,0v.9a8.256,8.256,0,0,0,.384,2.5.7.7,0,0,1-.668.911Z"
                      transform="translate(0 -0.854)"
                      fill="#2a2d37"
                    />
                    <path
                      id="Path_10716"
                      data-name="Path 10716"
                      d="M2.46,9.414a.7.7,0,0,1-.668-.91,9.722,9.722,0,0,1,1.5-2.924.7.7,0,1,1,1.12.84,8.325,8.325,0,0,0-1.285,2.5A.7.7,0,0,1,2.46,9.414Z"
                      transform="translate(-0.039 -0.377)"
                      fill="#2a2d37"
                    />
                    <path
                      id="Path_10717"
                      data-name="Path 10717"
                      d="M6,4.587a.7.7,0,0,1-.425-1.257A9.622,9.622,0,0,1,7.527,2.179a.7.7,0,0,1,.564,1.281,8.22,8.22,0,0,0-1.667.984A.7.7,0,0,1,6,4.587Z"
                      transform="translate(-0.377 -0.073)"
                      fill="#2a2d37"
                    />
                    <path
                      id="Path_10718"
                      data-name="Path 10718"
                      d="M17.524,18.988a.7.7,0,0,1-.421-1.26A8.346,8.346,0,0,0,12.93,2.746a.7.7,0,1,1,.14-1.393,9.746,9.746,0,0,1,4.873,17.494A.7.7,0,0,1,17.524,18.988Z"
                      transform="translate(-1.045)"
                      fill="#2a2d37"
                    />
                    <path
                      id="Line_73"
                      data-name="Line 73"
                      d="M0,7.032a.7.7,0,0,1-.7-.7V0A.7.7,0,0,1,0-.7.7.7,0,0,1,.7,0V6.332A.7.7,0,0,1,0,7.032Z"
                      transform="translate(11.051 7.885)"
                      fill="#2a2d37"
                    />
                    <path
                      id="Line_74"
                      data-name="Line 74"
                      d="M6.332.7H0A.7.7,0,0,1-.7,0,.7.7,0,0,1,0-.7H6.332a.7.7,0,0,1,.7.7A.7.7,0,0,1,6.332.7Z"
                      transform="translate(7.885 11.051)"
                      fill="#2a2d37"
                    />
                  </g>
                </svg>

                <h1>قصة</h1>
              </li>
              <li
                onClick={(e) => {
                  setpath("/addpost");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 17.467 17.467"
                >
                  <path
                    id="grid_on_FILL0_wght300_GRAD0_opsz40"
                    d="M6.528,22.467A1.533,1.533,0,0,1,5,20.938V6.528A1.533,1.533,0,0,1,6.528,5h14.41a1.533,1.533,0,0,1,1.528,1.528v14.41a1.533,1.533,0,0,1-1.528,1.528Zm-.316-5.41v3.882a.334.334,0,0,0,.316.316H10.41v-4.2Zm5.435,0v4.2H15.82v-4.2Zm5.409,4.2h3.882a.334.334,0,0,0,.316-.316V17.057h-4.2ZM6.213,15.844h4.2v-4.2h-4.2Zm5.435,0H15.82v-4.2H11.647Zm5.409,0h4.2v-4.2h-4.2ZM10.41,6.213H6.528a.334.334,0,0,0-.316.316V10.41h4.2Zm1.237,4.2H15.82v-4.2H11.647Zm5.409,0h4.2V6.528a.334.334,0,0,0-.316-.316H17.057Z"
                    transform="translate(-5 -5)"
                    fill="#2a2d37"
                  />
                </svg>
                <h1>منشور</h1>
              </li>
            </ul>
          </div>
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
export default AddPost;
