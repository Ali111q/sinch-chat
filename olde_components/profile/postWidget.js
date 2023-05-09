import React, { Component } from 'react'
import { Route, useHistory } from 'react-router-dom';

function PostWidget() {

    const history = useHistory()
    const onClick = ()=>{
        history.push("/vPost")
      
       }
    return (
    <>
            <button onClick={()=>{onClick()}} ><img srcSet="male-hispanic-workers-technology-camera.png" alt="" /></button>
    </>
    )
  }


export default PostWidget
