import { useRef } from 'react';
import useScrollOnDrag from 'react-scroll-ondrag';
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


// swiper bundle styles
import 'swiper/css/bundle'

// swiper core styles
import 'swiper/css'

// modules styles
import 'swiper/css/navigation'
import 'swiper/css/pagination'

var vw =window.innerWidth;
var space_Between = vw * 0.01;
window.addEventListener('resize', (event) => {
  vw =window.innerWidth;
  space_Between = vw * 0.01;


});

const Instastory = () => {
  const storie=[2,
    
    44,
    3,
    4,
    5,
    6,
    4,
    32,
    5,
    6,
    2,
    3,
    44,
    
 ];
  const ref = useRef();
  const { events } = useScrollOnDrag(ref);



  return ( <>
     <div className='story'>
     <Swiper
        slidesPerView={7}
        spaceBetween={space_Between}
        freeMode={true}

        modules={[FreeMode, Pagination]}
        className="mySwiper"
    id='swiper'

  >
      <div className="swiper-wrapper">
    {storie.map((e)=>{ return  <SwiperSlide id='swiper-slide'>
      <div>
        <img src='https://static.remove.bg/remove-bg-web/f9c9a2813e0321c04d66062f8cca92aedbefced7/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'></img>

      </div>
    </SwiperSlide>})}


    </div>



    </Swiper>

    </div>


  </>
  )
};
export default Instastory