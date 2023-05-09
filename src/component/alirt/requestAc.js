import React from 'react'

 function RequestAc(props) {
  return (<>
 
    <div class="request-alert">
    <span class="top-alert"></span>
    <h1>قبول</h1>
    <div class="pric-req">
      <span>
        <div class="color-back1"><p>د.ع</p></div>
        <div class="color-back11"><p>2000</p></div>
        <div class="color-back111"><p>التكلفة</p></div>
      </span>
      <span>
        <div class="color-back1"><p>دقيقة</p></div>
        <div class="color-back11"><p>2000</p></div>
        <div class="color-back111"><p>الوقت</p></div>
      </span>
    </div>
    <button class="alert-acs-rq">بدء الاستشارة</button>
  </div>
  <div className='alert'
  onClick={e=>props.off(false)}
  ></div>
   </>
  )
}
export default RequestAc