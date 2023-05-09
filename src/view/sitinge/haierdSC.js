import { useState } from "react";
import React from "react";
import { httpHelper } from "../../helper/http_helper";
import { url } from "../../utils/constants";
function Haired(props) {
const [type,settype]=useState(1)
    function addSc() {
        httpHelper(
          `${url}/profile/secretaries/assign`,
          [
            {
              key: "Content-Type",
              value: "application/json",
            },
            {
              key: "Authorization",
              value: `Bearer ${localStorage.getItem("token")}`,
            },
          ],
          {
            id:props.userdata.id,
            type:type
          },
          "post"
        ).then((e) => {
            props.SnackBarType(e.status);
            props.SnackBarGo(true)
            props.SnackBarMs(e.message)
        });
      }
  return (
    <>
    <div class="alert" onClick={() => props.setScrAlerr(false)}></div>
      <div className="request-alert22SearchSCSearchSC">
        <h1>تعيين سكرتير</h1>
        <div className="request-alert22SearchSCSearchSCDD">
          <span>
            <h1> سكرتير ثانوي </h1>
            <p>
              {" "}
              يمكن قبول ورفض الحجوزات والرد على الاستشارات وتعديل أوقات الدوام
            </p>
          </span>
          <div onClick={() => settype(1)}>
            <span>
              <div id={type == 1 ? "isBlue" : ""}></div>
            </span>
          </div>
        </div>
        <div className="request-alert22SearchSCSearchSCDD">
          <span>
            <h1> سكرتير رئيسي</h1>
            <p>
              {" "}
              يمكن قبول ورفض الحجوزات والرد على الاستشارات وتعديل أوقات الدوام
            </p>
          </span>
          <div onClick={() => settype(2)}>
            <span>
              <div id={type == 2 ? "isBlue" : ""}></div>
            </span>
          </div>
        </div>
        <button onClick={() => {
            addSc()}}>تعيين</button>
      </div>
    </>
  );
}
export default Haired