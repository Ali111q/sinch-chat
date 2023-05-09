import React, { Component } from 'react'
import lady from "../../assets/lady.png"

export class DatetBody extends Component {
  render() {
    return (
    <>
            <div className="request-body">

<div className="body-request-info">
    <span className="add-name-rq">
        <h2>الاسم</h2>
        <input type="text"/>
    </span>
    <span className="phon">
        <h2>رقم الهاتف</h2>
        <span>
            <input type="tel" placeholder='رقم الهاتف'></input>
            <button>
                <h2 className="key">964+</h2>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="3.771vw" height="1.911vw" viewBox="0 0 54.771 37.911">
                    <defs>
                        <clipPath id="clip-path">
                            <rect id="Rectangle_140" data-name="Rectangle 140" width="54.771"
                                height="37.911" rx="2" fill="#fff" />
                        </clipPath>
                    </defs>
                    <g id="Mask_Group_1" data-name="Mask Group 1" clip-path="url(#clip-path)">
                        <g id="iq" transform="translate(-4.066 -2.815)">
                            <path id="Path_172" data-name="Path 172" d="M0,0H62.9V43.54H0Z"
                                fill="#ce1126" />
                            <path id="Path_173" data-name="Path 173" d="M0,200H62.9v29.027H0Z"
                                transform="translate(0 -185.487)" fill="#fff" />
                            <path id="Path_174" data-name="Path 174" d="M0,400H62.9v14.513H0Z"
                                transform="translate(0 -370.973)" fill="#2a2d37" />
                            <g id="Group_16" data-name="Group 16" transform="translate(18.916 17.477)">
                                <path id="Path_175" data-name="Path 175"
                                    d="M290.327,243.007a.768.768,0,0,1-.214-.167c-.048-.07-.02-.072.178-.017a.769.769,0,0,0,.811-.139l.2-.175.236.125a.723.723,0,0,0,.307.1.7.7,0,0,0,.307-.407c-.008-.121.09-.09.137.042a.477.477,0,0,1-.285.623.63.63,0,0,1-.407-.045c-.22-.08-.258-.078-.368.009A.808.808,0,0,1,290.327,243.007Zm.878-.833a1.322,1.322,0,0,1-.156-.65c.029-.092.06-.11.14-.084.141.046.173.146.152.487C291.324,242.2,291.284,242.278,291.2,242.173Zm-10.333-.309a1.413,1.413,0,0,0,.529.82c-.118.055-.265.03-.373.092-.6.627-2.811,2.861-3.214,3.4,1.194.025,2.517-.017,3.637-.07,0-.842.768-.885,1.283-1.192.265.433.93.4,1.013,1.051,0,.78,0,1.956,0,2.8h-10.2a1.485,1.485,0,0,1-1.891,1.192c.308-.334.827-.449,1.013-.911a3.2,3.2,0,0,0-.617-2.21,3.628,3.628,0,0,0,1.09-.594c-.359,1.131.932,1.007,1.891.981.032-.384.014-.838-.27-.894a2.605,2.605,0,0,0,1.013-.7v1.524c2.278,0,4.736-.018,7.062-.018,0-.477.122-1.243-.242-1.243-.347,0-.016.981-.286.981h-5.453c0-.211-.005-.652-.005-.97.231-.24.2-.219,1.783-1.859C278.794,243.88,279.9,242.841,280.871,241.864Zm13.631-.04a4.834,4.834,0,0,0,1.148.631c-.054.2-.226.28-.271.491v4.276c.521.119.63-.187.878-.35.068.684.488,1.355.473,1.893H294.5Q294.5,245.295,294.5,241.824Zm-2.971,2.29s.811-.71.811-.738v3.732h.584c0-1.422-.018-2.864-.018-4.185a5.208,5.208,0,0,0,.817-.851v6.684l-5.118,0c-.075-1.387-.088-2.824,1.469-2.515v-.566c-.048-.1-.133.023-.153-.1.247-.257.331-.322,1-.93,0,.733.012,2.463.012,2.463h.59S291.531,244.21,291.531,244.114Zm-1.921,2.956c.11.171.483.168.465-.12C290.012,246.713,289.521,246.8,289.609,247.07Z"
                                    transform="translate(-271.66 -241.429)" fill="#007a3d" />
                                <ellipse id="Ellipse_38" data-name="Ellipse 38" cx="0.313" cy="0.324"
                                    rx="0.313" ry="0.324" transform="translate(2.82 7.798)"
                                    fill="#007a3d" />
                                <path id="Path_176" data-name="Path 176"
                                    d="M454.483,246.961a4.834,4.834,0,0,0,1.148.631c-.054.2-.226.28-.271.491v4.276c.521.119.63-.188.878-.351.067.685.487,1.355.473,1.893h-2.229Q454.483,250.432,454.483,246.961Z"
                                    transform="translate(-441.704 -246.56)" fill="#007a3d" />
                            </g>
                        </g>
                    </g>
                </svg>
            </button>


        </span>
    </span>
    <span className="what-do-you-fel">
        <h2>وصف الحاله</h2>
        <textarea name="" id="" cols="30" rows="10"></textarea>
    </span>
    <span>
        <h2>نوع الحجز</h2>
        <span className="request-pric">
            <button className="request-pric1">مدفوع</button>
            <button className="request-pric2">مجاني</button>
        </span>
    </span>
    <button className="send-rq11">ارسال</button>
</div>
<div class="body-prof-img">
              <span>

                    <img src={lady} alt=""/>
              </span>
              <div>
              <h2>rgeewrgewrg</h2>
              <h2 id='blueeee'>rgewwrgewrg</h2>
              </div>

            </div>
</div>
    </>
    )
  }
}

export default DatetBody
