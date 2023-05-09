
// import React, { Component } from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Favorite from '@material-ui/icons/Favorite';
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
// import saveIcon from '../../assets/icons/saveIcon.svg'
// import savedIcon from '../../assets/icons/save-icon.svg'
// import comment from '../../assets/icons/Chat.svg'
// import sendPost from '../../assets/icons/Send.svg'
// import Profile from '../../view/profile';
// import { Pagination } from "swiper";
// import { Route, useHistory, Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


// import "swiper/css";
// import "swiper/css/pagination";



// function Post({ name }) {
//    const history = useHistory()
//     const commentClick = ()=>{
//         history.push("/vPost")
//     }
//     const images = [

//         {
//             img: 'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
//             id: 0,
//         }
//     ]
 
//     const navigate = () => {
//         history.push("/profile")
//     }
//     return (
//         <>
//             <div>
//                 <div className="component-16-6">
//                     <Link to="user" className="flex-row">
//                         <div className="group-container">
//                             <div className="group-118665">
//                                 <h1 className="text-1 neosansarabic-medium-charade-41px" onClick={navigate}>عزيزة محمد</h1>
//                             </div>
//                             <div className="overlap-group">
//                                 <div className="rectangle-12265">
//                                     <p>منذ 10 دقائق</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="group-118667">
//                             <img className="image"
//                                 srcSet={images[0].img} />
//                         </div>
//                     </Link>
//                     <div className="flex-col">
//                         <div className="overlap-group2">
//                             <div className="overlap-group1">
//                                 <div className="image-1">
//                                     <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
//                                         <SwiperSlide> 
//                                             <img srcSet={images[0].img} />
//                                         </SwiperSlide>
//                                         <SwiperSlide>
//                                             <img srcSet='' />
//                                         </SwiperSlide>

//                                     </Swiper>
//                                 </div>
//                                 <div className="but">
//                                     <ul>

//                                         <Checkbox style={{
//                                             width: '3vw',
//                                             height: '3vw',
//                                             backgroundColor: 'transparent',
//                                             border: '0',
//                                             marginLeft: '1vw',
//                                         }} icon={<FavoriteBorder id='ll' />}
//                                             checkedIcon={<Favorite id='lled' />}
//                                             name="liked" />

//                                         <button onClick={()=>{commentClick()}} ><img srcSet={comment} alt=""></img></button>
//                                         <button><img srcSet={sendPost} alt=""></img></button>
//                                         <Checkbox className='ll' id='ll' style={{
//                                             width: '3vw',
//                                             height: '3vw',
//                                             backgroundColor: 'transparent',
//                                             border: '0',
//                                             marginLeft: '1vw',
//                                             position: 'absolute',
//                                             right: '1vw',
//                                         }} icon={<img srcSet={saveIcon} id='ll' />}
//                                             checkedIcon={<img srcSet={savedIcon} id='ll' />}
//                                             name="saved" />
//                                     </ul>


//                                 </div>

//                                 <div className="postfoter">
//                                     <p>120</p>
//                                     <p>اعجاب </p>
//                                     <p>400</p>
//                                     <p>تعليق</p>
//                                 </div>




//                             </div>
//                         </div>
//                     </div>
//                 </div></div>

//         </>)
// }


// export default Post