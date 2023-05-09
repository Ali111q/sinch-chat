import React, { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { httpHelper } from "../../helper/http_helper";
import { verifyCode, url } from "../../utils/constants";
import useOrientationchange from "../../hooks/orientationchange";
function Otp(props) {
  const [code, setCode] = useState();
  const [path, setpath] = useState();
  const [Time, setTime] = useState(90);
  const [resend, setresend] = useState(false);
  const isPC = useOrientationchange();
  useEffect(() => {
    for (let time = 0; time <= 90; time++) {
      setTimeout(() => {
        setTime(time);
      }, [1000 * time]);
    }
  }, [resend]);
  const navigate = useNavigate();
  useEffect(() => {
    const urlData = path;
    path && navigate(urlData);
  }, [path]);

  const handleChange = (code) => setCode(code);
  const postBody = {
    mobile: localStorage.getItem("mobile"),
    code: code,
    fcm_token: localStorage.getItem("fcm_token"),
    device: "android",
  };
  function Go() {
    httpHelper(verifyCode, [], postBody, "post").then((e) => {
      console.log(e);

      if (e.code == 200) {
        console.log(e);
        localStorage.setItem("userData", JSON.stringify(e.data));
        localStorage.setItem("token", e.data.token);
        localStorage.setItem("onLine", true);
        localStorage.setItem("id", e.data.id);
        localStorage.setItem("type", e.data.account_type_id);
        setpath("/home");
      }
    });
  }
  return (
    <>
      <div className="father-otp">
        <span>
          <h1>رمز التحقق</h1>
          <p>ادخل رمز التحقق المرسل إلى رقم الهاتف</p>
          <p>+964 123456789</p>
        </span>

        <div className="otp">
          {isPC ? (
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
                caretColor: "blue",
              }}
              focusStyle={{
                border: "1px solid #CFD3DB",
                outline: "none",
              }}
            />
          ) : (
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
                caretColor: "blue",
              }}
              focusStyle={{
                border: "1px solid #CFD3DB",
                outline: "none",
              }}
            />
          )}
        </div>

        <span className="otp-timer">
          <div>
            <p>إعادة إرسال الرمز</p>
            {Time == 90 ? (
              <p
                style={{ cursor: "pointer" }}
                onClick={() => {
                  httpHelper(`${url}/resend_code`, [], postBody, "post").then(
                    (e) => {
                      console.log(e);
                      e.status
                        ? setresend((e) => !e)
                        : alert("فشل إعادة إرسال الرمز");
                    }
                  );
                }}
                class="color-read"
              >
                إعادة إرسال الرمز
              </p>
            ) : (
              <p class="color-read">
                {90 - Time > 60 ? 1 : 0}:
                {90 - Time > 60 ? 30 - Time : 90 - Time}
              </p>
            )}
          </div>
          <button
            onClick={() => {
              Go();
            }}
          >
            تحقق
          </button>
        </span>
      </div>
    </>
  );
}

export default Otp;
