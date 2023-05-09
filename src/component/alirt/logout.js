import { useState,useEffect } from "react"
import { httpHelper } from "../../helper/http_helper"
import logout from "../../assets/logout.png"
import { useNavigate } from "react-router-dom"
import { url } from "../../utils/constants"
 function LogOut(props) {
    const [path,setpath] =useState()
    const navigate = useNavigate()
    useEffect(() => {
      path && navigate(path)
    }, [path]);
  return (<>
      <div class="logout-alert2299">
        <span class="top-alert99"></span>
        <h2 class="logout-alert2299h2">هل تريد تسجيل الخروج حقا؟</h2>
        <div class="logout-img-alert">
            <img src={logout}/>
        </div>
          <button
          onClick={()=>{
            httpHelper(`${url}/logout`,[
            {
                key: "Authorization",
                value: `Bearer ${localStorage.getItem("token")}`,
              }],
              {},
              "post").then(e=>{
                localStorage.clear()
                setpath("/login")
            }
              )
          }}
           class="logout-alert-but">تسجيل الخروج</button>
      </div>
  <div className='alert'
  onClick={e=>props.off(false)}
  ></div>
   </>
  )
}
export default LogOut