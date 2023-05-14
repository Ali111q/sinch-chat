import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.css";
import "./swiper.css";
function SwiperUi(props) {
  const {children,id,style,newclassName,spaceBetween} = props
  return (
    <div
     style={style}
     className={newclassName?newclassName:"SwiperUi-con"}
     id={id?id:""}
     >
      <Swiper
       slidesPerView={"auto"}
       spaceBetween={spaceBetween?spaceBetween:0}>
        {children.map((e, i) => {
          return <SwiperSlide key={i}>{e}</SwiperSlide>;
        })}
      </Swiper>
      </div>
  );
}

export default SwiperUi;
