import React, { Component, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.css";
import { httpHelper } from "../../helper/http_helper";
import { url } from "../../utils/constants";
import { useNavigate, useParams } from "react-router-dom";

function SwiperStory(props) {
  const id = useParams();
  const [path, setpath] = useState();
  const navigate = useNavigate();
  const [data, setdata] = useState();
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  useEffect(() => {
    httpHelper(
      `${url}/profile/pages?id=${localStorage.getItem("id")}`,
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
      }
    });
  }, []);

  SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);
  return (
    <>
      <div>
        <div className="story">
          <Swiper slidesPerView={"auto"} spaceBetween={10}>
            {data &&
              (data.user.has_stories ? (
                <SwiperSlide
                  onClick={(h) => {
                    setpath(`/storyScreen/${data.user.id}`);
                  }}
                >
                  <span className="user-post-info-imgslider">
                    <img src={data.user.image} />
                  </span>
                </SwiperSlide>
              ) : (
                <SwiperSlide
                  onClick={(h) => {
                    setpath(`/Addstory`);
                  }}
                >
                  <svg
                    id="ADDstorySVG"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 53 53"
                    >
                      <g id="Light" transform="translate(0 -0.25)">
                        <path
                          id="Stroke_1"
                          d="M26.5,53A26.5,26.5,0,1,1,53,26.5,26.53,26.53,0,0,1,26.5,53Zm0-49.024A22.525,22.525,0,1,0,49.027,26.5,22.55,22.55,0,0,0,26.5,3.976Z"
                          transform="translate(0 0.25)"
                          fill="#F7227F"
                        />
                        <path
                          id="Fill_4"
                          d="M8.454,0A1.992,1.992,0,0,0,6.473,2V6.539H1.981a2,2,0,0,0,0,4H6.473v4.535a1.982,1.982,0,1,0,3.963,0V10.541h4.494a2,2,0,0,0,0-4H10.436V2A1.992,1.992,0,0,0,8.454,0"
                          transform="translate(18.02 18.02)"
                          fill="#F7227F"
                        />
                      </g>
                    </svg>
                  <span
                    style={{
                      background: "white",
                      position: "relative",
                    }}
                    className="user-post-info-imgslider"
                  >

                    <img src={data.user.image} />
                  </span>
                </SwiperSlide>
              ))}
            {props.data.map((e, i) => {
              if (e.has_stories && e.id != localStorage.getItem("id")) {
                return (
                  <SwiperSlide
                    onClick={(h) => {
                      setpath(`/storyScreen/${e.id}`);
                    }}
                    key={`slide-${i}`}
                  >
                    <span className="user-post-info-imgslider">
                      <img src={e.image} />
                    </span>
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SwiperStory;
