import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class registerUltrasound extends Component {
  render() {
    return (
     <>
      <div class="father-sing">
      <div class="usr-tip">
            <Link onClick={()=>{
                this.props.history.goBack()
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1vw" height="2vw" viewBox="0 0 15.34 27.14">
                <path id="Arrow" d="M.518,24.118a1.77,1.77,0,0,0,2.5,2.5l11.8-11.8a1.77,1.77,0,0,0,0-2.5L3.022.518a1.77,1.77,0,0,0-2.5,2.5L11.067,13.57Z" fill="#2a2d37"/>
              </svg>
              </Link>
              <h1> مستشفة خاص </h1>
        </div>
        <button class="add-img-sing"><img src="Camera.png" alt=""/></button>
        <span class="add-name-sing">
            <p> اسم المستشفة</p>
            <input type="text" placeholder=" اسم العيادة" name="name" id=""/>
        </span>
        <span class="add-name-sing">
            <p> البريد الالكتروني </p>
            <input type="text" placeholder=" اسم العيادة" name="name" id=""/>
        </span>
        <span class="add-contry-sing">
            <p>رقم الهاتف</p>
            <div>
                <input type="tel" name="" id="" placeholder="ادخل رقم الهاتف"/>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="8.771vw"
                        height="5.911vw" viewBox="0 0 54.771 37.911">
                        <defs>
                            <clipPath id="clip-path">
                                <rect id="Rectangle_140" data-name="Rectangle 140" width="54.771" height="37.911" rx="2"
                                    fill="#fff" />
                            </clipPath>
                        </defs>
                        <g id="Mask_Group_1" data-name="Mask Group 1" clip-path="url(#clip-path)">
                            <g id="iq" transform="translate(-4.066 -2.815)">
                                <path id="Path_172" data-name="Path 172" d="M0,0H62.9V43.54H0Z" fill="#ce1126" />
                                <path id="Path_173" data-name="Path 173" d="M0,200H62.9v29.027H0Z"
                                    transform="translate(0 -185.487)" fill="#fff" />
                                <path id="Path_174" data-name="Path 174" d="M0,400H62.9v14.513H0Z"
                                    transform="translate(0 -370.973)" fill="#2a2d37" />
                                <g id="Group_16" data-name="Group 16" transform="translate(18.916 17.477)">
                                    <path id="Path_175" data-name="Path 175"
                                        d="M290.327,243.007a.768.768,0,0,1-.214-.167c-.048-.07-.02-.072.178-.017a.769.769,0,0,0,.811-.139l.2-.175.236.125a.723.723,0,0,0,.307.1.7.7,0,0,0,.307-.407c-.008-.121.09-.09.137.042a.477.477,0,0,1-.285.623.63.63,0,0,1-.407-.045c-.22-.08-.258-.078-.368.009A.808.808,0,0,1,290.327,243.007Zm.878-.833a1.322,1.322,0,0,1-.156-.65c.029-.092.06-.11.14-.084.141.046.173.146.152.487C291.324,242.2,291.284,242.278,291.2,242.173Zm-10.333-.309a1.413,1.413,0,0,0,.529.82c-.118.055-.265.03-.373.092-.6.627-2.811,2.861-3.214,3.4,1.194.025,2.517-.017,3.637-.07,0-.842.768-.885,1.283-1.192.265.433.93.4,1.013,1.051,0,.78,0,1.956,0,2.8h-10.2a1.485,1.485,0,0,1-1.891,1.192c.308-.334.827-.449,1.013-.911a3.2,3.2,0,0,0-.617-2.21,3.628,3.628,0,0,0,1.09-.594c-.359,1.131.932,1.007,1.891.981.032-.384.014-.838-.27-.894a2.605,2.605,0,0,0,1.013-.7v1.524c2.278,0,4.736-.018,7.062-.018,0-.477.122-1.243-.242-1.243-.347,0-.016.981-.286.981h-5.453c0-.211-.005-.652-.005-.97.231-.24.2-.219,1.783-1.859C278.794,243.88,279.9,242.841,280.871,241.864Zm13.631-.04a4.834,4.834,0,0,0,1.148.631c-.054.2-.226.28-.271.491v4.276c.521.119.63-.187.878-.35.068.684.488,1.355.473,1.893H294.5Q294.5,245.295,294.5,241.824Zm-2.971,2.29s.811-.71.811-.738v3.732h.584c0-1.422-.018-2.864-.018-4.185a5.208,5.208,0,0,0,.817-.851v6.684l-5.118,0c-.075-1.387-.088-2.824,1.469-2.515v-.566c-.048-.1-.133.023-.153-.1.247-.257.331-.322,1-.93,0,.733.012,2.463.012,2.463h.59S291.531,244.21,291.531,244.114Zm-1.921,2.956c.11.171.483.168.465-.12C290.012,246.713,289.521,246.8,289.609,247.07Z"
                                        transform="translate(-271.66 -241.429)" fill="#007a3d" />


                                    <ellipse id="Ellipse_38" data-name="Ellipse 38" cx="0.313" cy="0.324" rx="0.313"
                                        ry="0.324" transform="translate(2.82 7.798)" fill="#007a3d" />
                                    <path id="Path_176" data-name="Path 176"
                                        d="M454.483,246.961a4.834,4.834,0,0,0,1.148.631c-.054.2-.226.28-.271.491v4.276c.521.119.63-.188.878-.351.067.685.487,1.355.473,1.893h-2.229Q454.483,250.432,454.483,246.961Z"
                                        transform="translate(-441.704 -246.56)" fill="#007a3d" />
                                </g>
                            </g>
                        </g>
                    </svg>
                    <h2>+964</h2>
                </button>
            </div>
        </span>

        <span class="cand">
            <h1>المدينة</h1>
            <select value="الجنس" name="cars" id="cars">
                <option value="ذكر">المدينه</option>
                <option value="انثا">انثا</option>

            </select>
        </span>

        <span class="add-contry-sing">
            <p>رقم الهويه النقابيه</p>
            <div>
                <input type="texts" name="" id=""/>

            </div>
        </span>

        <span class="add-contry-sin-dr">
            <p>الموقع</p>
            <div>
                <button >حدد موقعك على الخريطة</button>
                <svg id="Iconly_Light-outline_Location" data-name="Iconly/Light-outline/Location" xmlns="http://www.w3.org/2000/svg" width="7.244vw" height="7.252vw" viewBox="0 0 31.244 35.252">
                    <g id="Location" transform="translate(0 0)">
                      <path id="Location-2" data-name="Location" d="M13.81,34.692l-.111-.084-.759-.49a37.557,37.557,0,0,1-8.333-7.5l-.581-.728A18.382,18.382,0,0,1,0,15.028l.008-.5A14.7,14.7,0,0,1,4.751,4.235,15.873,15.873,0,0,1,15.621,0h.053l.47.008a15.82,15.82,0,0,1,10.714,4.58,14.64,14.64,0,0,1,4.387,10.487v.181c-.093,4.653-2.456,9.464-6.836,13.91a38.6,38.6,0,0,1-6.883,5.454l-.091.073a3.212,3.212,0,0,1-3.624,0ZM15.224,2.681A13.018,13.018,0,0,0,6.428,6.4a12.044,12.044,0,0,0-3.647,8.577l.035.63a15.805,15.805,0,0,0,3.427,8.663,34.682,34.682,0,0,0,9.01,8.115l.151.109a.342.342,0,0,0,.438,0L16,32.385a35.774,35.774,0,0,0,6.4-5.068c3.889-3.948,5.986-8.128,6.066-12.087l-.007-.585a12.07,12.07,0,0,0-3.871-8.461,13.034,13.034,0,0,0-8.921-3.509ZM9.67,15.244a5.848,5.848,0,0,1,5.951-5.725,5.848,5.848,0,0,1,5.951,5.725,5.848,5.848,0,0,1-5.951,5.725A5.848,5.848,0,0,1,9.67,15.244Zm2.781,0a3.173,3.173,0,1,0,3.171-3.05A3.115,3.115,0,0,0,12.45,15.244Z" transform="translate(0 0)" fill="#2a2d37"/>
                    </g>
                  </svg>
            </div>
        </span>
        <button class="sing-don">تسجيل</button>
    </div>
     </>
    )
  }
}

export default registerUltrasound
