import React, { Component } from 'react'

export class EditProfile extends Component {
  render() {
    return (
   <>
           <div class="setingcontant">
            <div class="userstimg">
                <span class="">
                    
                    <img class="img-user-prof" src="lady.png" alt=""/>
                    <button class="add-img-set"><img src="Camera.png" alt=""/></button>
                    <button class="saveimgs">حفظ</button>
                </span>
            </div>
            <div class="setingprofil">
                <span class="set-prof-name">
                    <h1 >الاسم كامل</h1>
                    <input type="text" value="عزيزة محمد" ></input>
                </span>
                <span class="set-prof-spa">
                    <h1>التخصص</h1>
                <select name="cars" id="cars">
                    <option value="طبيب">طبيب</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </span>
                <span class="set-prof-bio">
                    <h1>النبذة</h1>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <p></p>
                </span>
                <div class="work-timr">
                    <h1>أوقات الدوام</h1>
                    <div>
                    <span class="from">
                        
                        <select name="cars" id="cars">
                            <option value="volvo">من</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                          </select>
                          <img src="Iconly-Light-outline-Time Circle.png" alt=""/>
                    </span>

                        <span class="to">
                            <select name="cars" id="cars">
                                <option value="volvo">إلى</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>

                              </select>
                              <img src="Iconly-Light-outline-Time Circle.png" alt=""/>

                        </span>

                    </div>
                </div>

                <div class="advis-time">
                    <h1>أوقات الاستشارة</h1>
                    <div>
                    <span class="from">
                        <select name="cars" id="cars">
                            <option value="volvo">من</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                          </select>
                          <img src="Iconly-Light-outline-Time Circle.png" alt=""/>

                    </span>

                        <span class="to">
                            <select name="cars" id="cars">
                                <option value="volvo">إلى</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                              </select>
                              <img src="Iconly-Light-outline-Time Circle.png" alt=""/>

                        </span>

                    </div>
                </div>
                <span class="daly-max-work">
                    <h1>الحد الأقصى لعدد الطلبات اليومية</h1>
                    <input type="number" value="ادخل العدد"/> 
                </span>      
                <span class="location-set">
                    <h1>الموقع</h1>
                    <button><p>حدد موقعك على الخريطة</p><img src="Location.png" alt=""/></button>

                </span>      


            </div>


        </div>
   </>
    )
  }
}

export default EditProfile
