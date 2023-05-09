import { React, useState } from "react";
import god from "../../assets/imgs/god.jpg"
import jf from "../../assets/imgs/loading.gif"
function Img(props) {
    const [url, seturl] = useState(false);
  return (
    <>
      {props.data.file && props.data.file_type == "image" ? 
        <img src={props.data.file} onLoad={()=>{
            seturl(true)
        }}/>
        : 
        <img src={props.data.thumbnail} onLoad={()=>{
            seturl(true)
        }} />
      }<div style={{position:"absolute",width:"100%",height:"100%",backgroundColor:"white",transition:"2s",opacity:url?"0":"1"}}><img src={jf} alt="loading..." /></div>
    </>
  );
}

export default Img;
