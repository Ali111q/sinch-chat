import React from 'react'

 function RequestRj(props) {
  return (<>
 
 <div class="request-alert">
        <span class="top-alert"></span>
        <h1>رفض الاستشارة</h1>
        <div class="pric-req">
            <div><h1>ما سبب رفضك للاستشارة ؟</h1></div>
            <textarea  name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button class="alert-din-rq">رفض </button>
      </div>
      <div className='alert'
  onClick={e=>props.off(false)}
  ></div>
   </>
  )
}
export default RequestRj