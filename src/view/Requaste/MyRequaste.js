import { httpHelper } from "../../helper/http_helper";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import RequasteCo from "../../component/Requaste/requaste";
import AppBar from "../../component/home/appBar";
import { url } from "../../utils/constants";
import TakeDate from "../../component/Requaste/takeDate";
function Requaste(props) {
  const DrData = useParams();
  const [path, setpath] = useState();
  const [selcted, setselcted] = useState(false);
  const [userDat, setuserDat] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  useEffect(() => {
    httpHelper(
      `${url}/profile/pages?id=${DrData.id}`,
      [
        {
          key: "Authorization",
          value: `Bearer ${localStorage.getItem("token")}`,
        },

      ],
      {},
      "get"
    ).then((e) => {
      setuserDat(e.data.user);
    });
  }, []);
  return (
    <>
    <AppBar run={props.run}/>
      <div className="Requastemain">
        <div className="Requastemaincon">
        {userDat&&(selcted?<TakeDate run={props.run} data={userDat}/>:<RequasteCo run={props.run} data={userDat} />)}
        </div>
        <div className="AddList">
            <ul>
              <li onClick={()=>setselcted(e=>!e)} id={selcted?"AddListulli":""}>استشارة</li>
              <li onClick={()=>setselcted(e=>!e)} id={selcted?"":"AddListulli"}>حجز موعد</li>
            </ul>
        </div>
      </div>
    </>
  );
}
export default Requaste;
