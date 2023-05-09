import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgLOD from "./imgLod";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import { useEffect, useState } from "react";
import "swiper/swiper-bundle.css";
import {DefaultPlayer as Video} from "react-html5video"
import  "react-html5video/dist/styles.css"
function Images(props) {
  const [play, setplay] = useState(false);
  SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);
  return (
    <>
      <div style={{ display: "none" }}>
        <span id="post-imgslider" className="user-post-imgslider"></span>
      </div>
      <Swiper
        id="post-img-contanerID"
        virtual
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
      >
        {window.location.pathname == "/home"
          ? props.data.map((e, i) => {
              return (
                <SwiperSlide key={`slide-${i}`} style={{ listStyle: "none" }}>
                  <span className="user-post-imgslider">
                    {e.file_type == "image" ? (
                      <ImgLOD data={e}/>
                    ) : (
                      <>
                        <video
                        id={`myvideo${e.id}`}
                        onClick={()=>{
                          if (!play) {
                            // props.path()
                            document.getElementById(`myvideo${e.id}`).play(); 
                          }else{
                            document.getElementById(`myvideo${e.id}`).pause(); 
                          }
                          setplay(e=>!e)
                        }}
                          src={e.file}
                          className="storyScreenConimage"
                        />
                        <button
                        onClick={()=>{
                          if (!play) {
                          document.getElementById(`myvideo${e.id}`).play(); 
                          }else{
                          document.getElementById(`myvideo${e.id}`).pause(); 
                          }
                          setplay(e=>!e)
                        }}
                          style={play?{
                            transition:"1s",
                            width: "15%",
                            zIndex: "3",
                            position: "absolute",
                            backgroundColor: "transparent",
                            border: "0",
                            opacity:"0",
                          }:{
                            transition:"1s",
                            width: "15%",
                            zIndex: "3",
                            position: "absolute",
                            backgroundColor: "transparent",
                            border: "0",
                            
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="100%"
                            fill="white"
                          >
                            <path d="m19 24h-14a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v14a5.006 5.006 0 0 1 -5 5zm-14-22a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-14a3 3 0 0 0 -3-3zm4.342 15.005a2.368 2.368 0 0 1 -1.186-.323 2.313 2.313 0 0 1 -1.164-2.021v-5.322a2.337 2.337 0 0 1 3.5-2.029l5.278 2.635a2.336 2.336 0 0 1 .049 4.084l-5.376 2.687a2.2 2.2 0 0 1 -1.101.289zm-.025-8a.314.314 0 0 0 -.157.042.327.327 0 0 0 -.168.292v5.322a.337.337 0 0 0 .5.293l5.376-2.688a.314.314 0 0 0 .12-.266.325.325 0 0 0 -.169-.292l-5.274-2.635a.462.462 0 0 0 -.228-.068z" />
                          </svg>
                        </button>
                      </>
                    )}
                  </span>
                </SwiperSlide>
              );
            })
          : props.data.map((e, i) => {
              return (
                <SwiperSlide key={`slide-${i}`} style={{ listStyle: "none" }}>
                  <span className="user-post-imgslider">
                    {e.file_type == "image" ? (
                      <img
                        className="storyScreenConimage"
                        src={e.file}
                      />
                    ) : (
                    // <Video Autoplay={false}  controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen','Overlay']}>
                     
                    //   <source  src={e.file} type="video/webm"/>
                    // </Video>
                      <video
                        className="storyScreenConimage"
                        muted
                        src={e.file}
                        controls
                        contentEditable
                        controlsList="nodownload"
                      />
                    )}
                  </span>
                </SwiperSlide>
              );
            })}
      </Swiper>
    </>
  );
}
export default Images;
