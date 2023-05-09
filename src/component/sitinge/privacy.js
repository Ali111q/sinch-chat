import { httpHelper } from "../../helper/http_helper";
import { useState,useEffect } from "react";
import Splash from "./splash";
import { url } from "../../utils/constants";
function  PRIV() {
    const [data,setdata] = useState()
    const [go,setgo] = useState(true)    

    useEffect(()=>{
        httpHelper(`${url}/profile/privacy`,
            [],
            {},
            "get"
          ).then(e=>{
            setdata(e.data)
            setgo(false)
          })
    },[])
    return (
    <>
   
    <div className="ABUTST">
    {go&&<Splash go={go} />}
     {data&& <div>
    <h1>{data.setting_title}</h1>
    <p>{data.setting_description}</p>
    </div>}</div>
    </>
    )
    
}
export default PRIV