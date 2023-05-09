import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ProfileinfoMobile extends Component {
  render() {
    return (
  <>
      <div class="head">
        <div class="userdata">

            <div class="poto">
                <div class="discr">
                <h1 class="name">ali hazim</h1>
                <p class="dr">dr</p>

                <div class="num">
                    <span>
                        <h1 class="bold">1766 </h1>
                    <h1 class="nob">مشاهدات</h1>                    
                    </span>
                    <span>
                        <h1 class="bold">1766 </h1>
                        <h1 class="nob">متايع</h1>                  
                    </span>
                    <span>
                        <h1 class="bold">1766 </h1>
                        <h1 class="nob">منشور</h1>
                    </span>
                    

                     </div>
                 </div>

                <div class="imgcon"> <img class="gradient-border-bg" src="lady@2x.png" alt=""/>
                </div>
            </div>

            <div class="info">
                <div class="bio">
                <div class="time">
                    <p class="blue">7:00Pm</p>
                    <p >:اوقات الدوام </p>
                </div>

                    <div class="time2">
                        <p class="read">7:00pm</p>
                        <p>:اوقات الاستشاره</p>

                    </div>
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
    <Link class="edet" to={'/settings'}><h1>تعديل الملف الشخصي</h1></Link>

  </>
    )
  }
}

export default ProfileinfoMobile
