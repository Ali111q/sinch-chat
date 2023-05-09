import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import { httpHelper } from "../../helper/http_helper";
import "swiper/swiper-bundle.css";
import { url } from "../../utils/constants";

function Highligths(props) {
  return (
    <>
      <div>
        <Swiper slidesPerView={"auto"} spaceBetween={10}>
          <SwiperSlide>
            <div onClick={()=>{
                props.Edit(false)
                props.Addhighlight(true)
                props.title("")
                httpHelper(
                  `${url}/profile/pages/highligths/stories`,
                  [
                    {
                      key: "Authorization",
                      value: `Bearer ${localStorage.getItem("token")}`,
                    },
                  ],
                  {},
                  "get"
                ).then(e=>{
                  props.highlightData(e)
                })
              }} className="Highligths">
              <span
              
                style={{
                  background: "#F6F6F6",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  cursor:"pointer"

                }}
                className="user-post-info-imgslider"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50%"
                  height=""
                  viewBox="0 0 53 53"
                >
                  <g id="Light" transform="translate(0 -0.25)">
                    <path
                      id="Stroke_1"
                      d="M26.5,53A26.5,26.5,0,1,1,53,26.5,26.53,26.53,0,0,1,26.5,53Zm0-49.024A22.525,22.525,0,1,0,49.027,26.5,22.55,22.55,0,0,0,26.5,3.976Z"
                      transform="translate(0 0.25)"
                      fill="#2a2d37"
                    />
                    <path
                      id="Fill_4"
                      d="M8.454,0A1.992,1.992,0,0,0,6.473,2V6.539H1.981a2,2,0,0,0,0,4H6.473v4.535a1.982,1.982,0,1,0,3.963,0V10.541h4.494a2,2,0,0,0,0-4H10.436V2A1.992,1.992,0,0,0,8.454,0"
                      transform="translate(18.02 18.02)"
                      fill="#2a2d37"
                    />
                  </g>
                </svg>
              </span>
              <h1>Add highlight</h1>
            </div>
          </SwiperSlide>
          {props.data.highlights.map((e, index) => {
            props.title&&props.title(e.title)
            return (
              <SwiperSlide key={e.id}>
                <div
                  className="Highligths"
                  onClick={(e) => {
                    props.type(2);
                    props.ind(index);
                    props.show(true);
                  }}
                >
                  <span
                    style={{
                      background: "transparent",
                    }}
                    className="user-post-info-imgslider"
                  >
                    <img src={e.image} 
                    />
                  </span>
                  <h1>{e.title}</h1>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default Highligths;
