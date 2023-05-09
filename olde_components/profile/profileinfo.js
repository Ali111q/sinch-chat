import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function Profileinfo({ props})  {

    return (
     
        
    <div className="head">
        <div className="userdata">
          <div className="poto">
          <Link to="/storyScreen" >  <div className="imgcon"> <img className="gradient-border-bg" srcset="lady@2x.png" alt=""/></div> 
          </Link>
                <Link to={'/settings'} className='settingRoute' > <h1>تعديل الملف الشخصي</h1></Link>
            </div>
            <div className="info">
                <h1 className="name">ali hazim</h1>
                <p className="dr">dr</p>
                <div className="discr">
                <div className="num">
                    <span>
                        <h1 className="bold">1766 </h1>
                    <h1 className="nob">مشاهدات</h1>                    
                    </span>
                    <span>
                        <h1 className="bold">1766 </h1>
                        <h1 className="nob">متايع</h1>                  
                    </span>
                    <span>
                        <h1 className="bold">1766 </h1>
                        <h1 className="nob">منشور</h1>
                    </span>
                    

                </div>

                </div>

                <div class="bio">
                <div class="time">
                    <p class="blue">7:00Pm</p>
                    <p >:اوقات الدوام </p></div>

                    <div class="time2">
                        <p class="read">7:00pm</p>
                        <p>:اوقات الاستشاره</p>

                    </div>


                <div class="bio2">
                    <p>ergweg rrgew</p>
                    <p>erggrw gewrgwe rgerg</p>
                    <p>ergegw ergwrge

                    </p>
                </div>
                </div>

            </div>
        </div>
      </div>
    )
  }


export default Profileinfo
