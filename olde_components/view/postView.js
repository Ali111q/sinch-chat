import React, { Component } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import saveIcon from '../assets/icons/saveIcon.svg'
import savedIcon from '../assets/icons/save-icon.svg'
import comment from '../assets/icons/Chat.svg'
import sendPost from '../assets/icons/Send.svg'
import { Pagination } from "swiper";
import { Route, useHistory } from 'react-router-dom';




function PostView({ name }) {
    let isportrait = false
    window.screen.orientation.onchange = function (e) {
        e.target.type === 'portrait-primary' ? isportrait = true : isportrait = false
        console.log(isportrait);
    }
    const history = useHistory()
    const navigate = () => {
        history.push("/profile")
    }
    return (
        <>


            <div className='post'>


                <div>
                    <div className="component-16-6">
                        <div className="flex-row">
                            <div className="group-container">
                                <div className="group-118665">
                                    <h1 className="text-1 neosansarabic-medium-charade-41px" onClick={navigate}>عزيزة محمد</h1>
                                </div>
                                <div className="overlap-group">
                                    <div className="rectangle-12265">
                                        <p>منذ 10 دقائق</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group-118667">
                                <img className="image"
                                    srcSet="https://anima-uploads.s3.amazonaws.com/projects/62d7bd92fc45333b7dcf25d7/releases/62d7bdb2bdfcbf0e72d7fca8/img/image-1@1x.png" />
                            </div>
                        </div>
                        <div className="flex-col">
                            <div className="overlap-group2">
                                <div className="overlap-group1">
                                    <div className="image-1">
                                    <Swiper pagination={true} modules={[Pagination]} draggable={true} className="mySwiper">
                                        <SwiperSlide> 
                                            <img srcSet="https://anima-uploads.s3.amazonaws.com/projects/62d7bd92fc45333b7dcf25d7/releases/62d7bdb2bdfcbf0e72d7fca8/img/image-1@1x.png" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img srcSet="https://anima-uploads.s3.amazonaws.com/projects/62d7bd92fc45333b7dcf25d7/releases/62d7bdb2bdfcbf0e72d7fca8/img/image-1@1x.png" />
                                        </SwiperSlide>

                                    </Swiper>
                                    </div>
                                    <div className="but">
                                        <ul>

                                            <Checkbox style={{
                                                width: '8vw',
                                                height: '4vw',
                                                backgroundColor: 'transparent',
                                                border: '0',
                                                marginLeft: '1vw',
                                                marginRigh: '1vw',
                                            }} icon={<FavoriteBorder id='ll' />}
                                                checkedIcon={<Favorite id='lled' />}
                                                name="liked" />

                                            <button><img srcSet={comment} alt=""></img></button>
                                            <button><img srcSet={sendPost} alt=""></img></button>
                                            <Checkbox className='ll' id='ll' style={{
                                                width: '3vw',
                                                height: '3vw',
                                                backgroundColor: 'transparent',
                                                border: '0',
                                                marginLeft: '1vw',
                                                position: 'absolute',
                                                right: '1vw',
                                            }} icon={<img srcSet={saveIcon} id='ll' />}
                                                checkedIcon={<img srcSet={savedIcon} id='ll' />}
                                                name="saved" />
                                        </ul>


                                    </div>

                                    <div className="postfoter">
                                        <p>120</p>
                                        <p>اعجاب </p>
                                        <p>400</p>
                                        <p>تعليق</p>
                                    </div>
                                    <div className='text-post-body'>
                                        <h2>
                                            hhhhhhhhhhhhhhhhhhhhhhhhdssdtfyguioutyrtrhtstdfyguuytrdytyuutythkwdphoff3ghjkphgjkfopghf3kf3ko3fjkopkfp3jofghkrjopfr5khjop7hnybgy438wyfyhr4i3qf4e7rfgq7gfruwyrgf87qgrf87qrgwf87rgf7wgf7reg
                                        </h2>
                                        <p>time</p>

                                    </div>
                                    <ul className='text-post-comentm'>
                                        <a>
                                            <span className="group-118667m">
                                                <img srcSet="https://anima-uploads.s3.amazonaws.com/projects/62d7bd92fc45333b7dcf25d7/releases/62d7bdb2bdfcbf0e72d7fca8/img/image-1@1x.png" />
                                            </span>
                                            <div className="group-containerm">
                                                <span className="groupm-containerm">
                                                    <h1>عزيزة محمد</h1>
                                                    <p>منذ 10 دقائق</p>
                                                </span>
                                                <span className='groupm-contai'>
                                                    <h2>
                                                        jebfwibwehufvqweuvfhgevf uqvfuqvfuqvyefvwuy
                                                    </h2>
                                                </span>
                                            </div>

                                        </a>
                                        <a>
                                            <span className="group-118667m">
                                                <img srcSet="https://anima-uploads.s3.amazonaws.com/projects/62d7bd92fc45333b7dcf25d7/releases/62d7bdb2bdfcbf0e72d7fca8/img/image-1@1x.png" />
                                            </span>
                                            <div className="group-containerm">
                                                <span className="groupm-containerm">
                                                    <h1>عزيزة محمد</h1>
                                                    <p>منذ 10 دقائق</p>
                                                </span>
                                                <span className='groupm-contai'>
                                                    <h2>
                                                        jebfwibwehufvqweuvfhgevf uqvfuqvfuqvyefvwuy
                                                    </h2>
                                                </span>
                                            </div>

                                        </a>
                                        <a>
                                            <span className="group-118667m">
                                                <img srcSet="https://anima-uploads.s3.amazonaws.com/projects/62d7bd92fc45333b7dcf25d7/releases/62d7bdb2bdfcbf0e72d7fca8/img/image-1@1x.png" />
                                            </span>
                                            <div className="group-containerm">
                                                <span className="groupm-containerm">
                                                    <h1>عزيزة محمد</h1>
                                                    <p>منذ 10 دقائق</p>
                                                </span>
                                                <span className='groupm-contai'>
                                                    <h2>
                                                        jebfwibwehufvqweuvfhgevf uqvfuqvfuqvyefvwuy
                                                    </h2>
                                                </span>
                                            </div>

                                        </a>
                                        <a>
                                            <span className="group-118667m">
                                                <img srcSet="https://anima-uploads.s3.amazonaws.com/projects/62d7bd92fc45333b7dcf25d7/releases/62d7bdb2bdfcbf0e72d7fca8/img/image-1@1x.png" />
                                            </span>
                                            <div className="group-containerm">
                                                <span className="groupm-containerm">
                                                    <h1>عزيزة محمد</h1>
                                                    <p>منذ 10 دقائق</p>
                                                </span>
                                                <span className='groupm-contai'>
                                                    <h2>
                                                        jebfwibwehufvqweuvfhgevf uqvfuqvfuqvyefvwuy
                                                    </h2>
                                                </span>
                                            </div>

                                        </a>
                                        <a>
                                            <span className="group-118667m">
                                                <img srcSet="https://anima-uploads.s3.amazonaws.com/projects/62d7bd92fc45333b7dcf25d7/releases/62d7bdb2bdfcbf0e72d7fca8/img/image-1@1x.png" />
                                            </span>
                                            <div className="group-containerm">
                                                <span className="groupm-containerm">
                                                    <h1>عزيزة محمد</h1>
                                                    <p>منذ 10 دقائق</p>
                                                </span>
                                                <span className='groupm-contai'>
                                                    <h2>
                                                        jebfwibwehufvqweuvfhgevf uqvfuqvfuqvyefvwuy
                                                    </h2>
                                                </span>
                                            </div>

                                        </a>
                                        <a>
                                            <span className="group-118667m">
                                                <img srcSet="https://anima-uploads.s3.amazonaws.com/projects/62d7bd92fc45333b7dcf25d7/releases/62d7bdb2bdfcbf0e72d7fca8/img/image-1@1x.png" />
                                            </span>
                                            <div className="group-containerm">
                                                <span className="groupm-containerm">
                                                    <h1>عزيزة محمد</h1>
                                                    <p>منذ 10 دقائق</p>
                                                </span>
                                                <span className='groupm-contai'>
                                                    <h2>
                                                        jebfwibwehufvqweuvfhgevf uqvfuqvfuqvyefvwuy
                                                    </h2>
                                                </span>
                                            </div>

                                        </a>

                                    </ul>
                                    <div className='coment-input'>
                                        <span className='coment-input1'>
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 48.15 48.15">
                                                    <path id="Send" d="M.961.991A3.291,3.291,0,0,1,4.248.134L31.65,8.1a3.267,3.267,0,0,1,2.355,2.589,3.836,3.836,0,0,1-1.706,3.58l-8.568,5.266a2.221,2.221,0,0,1-2.74-.329L11.179,9.336a1.249,1.249,0,0,0-1.805,0,1.3,1.3,0,0,0,0,1.816L19.2,21.027a2.253,2.253,0,0,1,.329,2.756L14.3,32.436a3.252,3.252,0,0,1-2.827,1.611,3.538,3.538,0,0,1-.426-.017,3.319,3.319,0,0,1-2.776-2.365L.144,4.3A3.344,3.344,0,0,1,.961.991" transform="translate(0 24.075) rotate(-45)" fill="#0199ec" />
                                                </svg>
                                            </button>
                                            <input type={"text"}></input>
                                        </span>
                                    </div>







                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>)
}


export default PostView
