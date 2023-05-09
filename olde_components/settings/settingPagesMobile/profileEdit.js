import React, { Component } from 'react'

export class ProfileEdit extends Component {
  render() {
    return (
      <>
          <div className="setingcontant">
        <div className="userstimg">
            <span className="">
                
                <img className="img-user-prof" src="lady.png" alt=""/>
                <button className="add-img-set"><img src="Camera.png" alt=""/></button>
                <button className="saveimgs">حفظ</button>
            </span>
        </div>
        <div className="setingprofil">
            <span className="set-prof-name">
                <h1 >الاسم كامل</h1>
                <input type="text"  placeholder="عزيزة محمد" />
            </span>
            <span className="set-prof-spa">
                <h1>التخصص</h1>
            <select name="cars" id="cars">
                <option value="طبيب">طبيب</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </span>
            <span className="set-prof-bio">
                <h1>النبذة</h1>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <p></p>
            </span>
            <div className="work-timr">
                <h1>أوقات الدوام</h1>
                <div>
                <span className="from">
                    
                    <select name="cars" id="cars">
                        <option value="volvo">من</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                      <img src="Iconly-Light-outline-Time Circle.png" alt=""/>
                </span>

                    <span className="to">
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

            <div className="advis-time">
                <h1>أوقات الاستشارة</h1>
                <div>
                <span className="from">
                    <select name="cars" id="cars">
                        <option value="volvo">من</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                      <img src="Iconly-Light-outline-Time Circle.png" alt=""/>

                </span>

                    <span className="to">
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
            <span className="daly-max-work">
                <h1>الحد الأقصى لعدد الطلبات اليومية</h1>
                <input type="number" value="ادخل العدد"/> 
            </span>      
            <span className="location-set">
                <h1>الموقع</h1>
                <button><p>حدد موقعك على الخريطة</p><img src="Location.png" alt=""/></button>

            </span>      


        </div>


    </div>
      </>
    )
  }
}

export default ProfileEdit
