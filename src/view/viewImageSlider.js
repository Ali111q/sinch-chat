import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import god from ".././assets/imgs/god.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative, Pagination, Navigation } from "swiper";

function ViewImageSlider(props) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.com/svgjs"
        version="1.1"
        style={{position:"fixed",top:"7vw",left:"7vw",width:"5%"}}
        x="0"
        y="0"
        viewBox="0 0 512.021 512.021"
        xmlSpace="preserve"
        onClick={()=>{props.show(false)}}
      >
        <g>
          <path
            d="M301.258 256.01 502.645 54.645c12.501-12.501 12.501-32.769 0-45.269-12.501-12.501-32.769-12.501-45.269 0L256.01 210.762 54.645 9.376c-12.501-12.501-32.769-12.501-45.269 0s-12.501 32.769 0 45.269L210.762 256.01 9.376 457.376c-12.501 12.501-12.501 32.769 0 45.269s32.769 12.501 45.269 0L256.01 301.258l201.365 201.387c12.501 12.501 32.769 12.501 45.269 0 12.501-12.501 12.501-32.769 0-45.269L301.258 256.01z"
            fill="#0070ff"
            data-original="#000000"
          />
        </g>
      </svg>
      <Swiper
        style={{
          width: "70vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCreative, Pagination, Navigation]}
        className="mySwiper"
      >
        {props.showimgData.map(e=>{
            return<>
            <SwiperSlide
          style={{
            width: "100%",
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            alignSelf: "center",
          }}
        >
          <img src={e.file} style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </SwiperSlide>
            </>
        })}


      </Swiper>
    </div>
  );
}

export default ViewImageSlider;
