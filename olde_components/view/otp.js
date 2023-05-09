import React, { Component } from 'react'
import OtpInput from "react-otp-input";
import { useState } from 'react';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';
import { verifyCode } from '../utils/constant';
import { otpController } from '../controllers/login_controller';
function Otp({ mobile }) {


  const [code, setCode] = useState();
  const handleChange = (code) => setCode(code);
  function handleClick() {

    const postBody = {
      mobile: localStorage.getItem('phone'),
      code: code,
      fcm_token: "assad",
      device: "android"
    };
    const requestMetadata = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postBody)
    };

    // Simple POST request with a JSON body using fetch
    fetch(verifyCode, requestMetadata)
      .then(res =>  res.json())
      .then(recipes => {

        console.log(recipes);
        

      });
  }
  return (
    <>
      <div class="father-otp">
        <span>
          <h1>رمز التحقق</h1>
          <p>ادخل رمز التحقق المرسل إلى رقم الهاتف</p>
          <p>+964 123456789</p>
        </span>

        <div class="otp">
          <DeviceOrientation lockOrientation={'landscape'} >
            <Orientation orientation='landscape' alwaysRender={false}>
              <OtpInput
                value={code}
                onChange={handleChange}
                numInputs={6}
                separator={<span style={{ width: "1vw" }}></span>}
                isInputNum={true}
                shouldAutoFocus={true}
                inputStyle={{
                  border: "0.1vw solid transparent",
                  borderRadius: "0.2vw",
                  width: "4vw",
                  height: "4vw",
                  fontSize: "2vw",
                  color: "black",
                  backgroundColor: "#f6f6f6",
                  fontWeight: "400",
                  caretColor: "blue"
                }}
                focusStyle={{
                  border: "1px solid #CFD3DB",
                  outline: "none"
                }}
              />
            </Orientation>
            <Orientation orientation='portrait' alwaysRender={false}>
              <OtpInput
                value={code}
                onChange={handleChange}
                numInputs={6}
                separator={<span style={{ width: "1vw" }}></span>}
                isInputNum={true}
                shouldAutoFocus={true}
                inputStyle={{
                  border: "0.3vw solid transparent",
                  borderRadius: "0.4vw",
                  width: "12vw",
                  height: "12vw",
                  fontSize: "5vw",
                  color: "black",
                  backgroundColor: "#f6f6f6",
                  fontWeight: "400",
                  caretColor: "blue"
                }}
                focusStyle={{
                  border: "1px solid #CFD3DB",
                  outline: "none"
                }}
              />
            </Orientation>
          </DeviceOrientation>
        </div>

        <span class="otp-timer">
          <div>
            <p>إعادة إرسال الرمز</p>
            <p class="color-read">1:34</p>
          </div>

          <button onClick={() => { otpController(code) }} >تحقق</button>
        </span>
      </div>

    </>
  )
}


export default Otp
