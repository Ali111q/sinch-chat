import { React, useState } from "react";
import god from "../../assets/imgs/god.jpg"
import jf from "../../assets/imgs/loading.gif"
function ImgLOD(props) {
    const [url, seturl] = useState(false);
  return (
    <>
        <img
        className="storyScreenConimage"
         src={props.data.file} onLoad={()=>{
            seturl(true)
        }}/>
     <div style={{position:"absolute",width:"100%",height:"100%",backgroundColor:"white",transition:"2s",opacity:url?"0":"1", display:"flex",justifyContent:"center",alignItems:"center"}}><img src={jf} alt="loading..." /></div>
    </>
  );
}

export default ImgLOD;
