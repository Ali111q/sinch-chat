import React, { useEffect,useState } from 'react';
import { useNavigate,Navigate,Link, Route } from 'react-router-dom';
import { svgList,backSvg } from '../../assets/rejster_svg';
import { getType } from '../../controllers/register_info_controller';

export function Register (props){
const [path, setpath] = useState();
const navigate = useNavigate();
const [Type, setType] = useState();
useEffect(()=>{
  const urlData =(path);
  path && navigate(urlData);
},[path]);
useEffect(() => {
  getType().then((e)=>{
    setType(e.data);
  })
},[]);


return (
    <>
        <div className="father-singin">
        <div className="usr-tip">
            <a onClick={()=>{setpath(-1)}}>
                 {backSvg}
              </a>
             
              <h1 id="kasemmmm" onClick={()=>{
                props.up({
                  key:'value'
                })
              }}>Accounts {props.data.key}</h1>
        </div>
            <ul className="father-scroll">
         {Type && Type.map((e,i)=>{
          return <a key={i} onClick={()=>{
            setpath(`/registerUser/${e["id"]}/${e["account_name"]}`)
          }}>
             {svgList[i]}
          <span>
          <h1>{e["account_name"]}</h1>
          <p>{e["account_title"]}</p>
          </span>
          </a>
        })}

            </ul> 
    </div></>
    )
  }


export default Register




{/* <ul className="father-scroll">
<Link to="registerUser">

      <span>
    <h1>مريض </h1>
    <p>احجز و استشير من المستخدمين</p></span>
</Link>
<Link to="/registerDoctor">

  
      <span>
    <h1>dr </h1>
    <p>احجز و استشير من المستخدمين</p></span>
</Link>
<Link to="/registerPh">

  
      <span>
    <h1>صيدليه </h1>
    <p>احجز و استشير من المستخدمين</p></span>
</Link>
<Link to="registerXray">

  
      <span>
    <h1>طبيب اشعة و مفراس </h1>
    <p>احجز و استشير من المستخدمين</p></span>
</Link>
<Link to="/registerUltrasound">

  
      <span>
    <h1>طبيب  سونار  </h1>
    <p>احجز و استشير من المستخدمين</p></span>
</Link>
<Link to="registerLab">

  
  
      <span>
    <h1>  مختبر  </h1>
    <p>احجز و استشير من المستخدمين</p></span>
</Link>

<Link to="/registerCare"
>

  
  
  
      <span>
    <h1>  مقدم رعاية صحية  </h1>
    <p>احجز و استشير من المستخدمين</p></span>
</Link>

<Link to="registerHospital">

  
  
  
      <span>
    <h1>  مستشفيات خاصة  </h1>
    <p>احجز و استشير من المستخدمين</p></span>
</Link>

</ul>  */}