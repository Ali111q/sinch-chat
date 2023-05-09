import React, { Component } from 'react'


function SettingsAdapter({name ,isSelected ,onClick,className1 , img})  {

    return (
   <>
   <button className= {className1} onClick={onClick} > <p>{name}</p> {img}
 </button>
   </>
    )
  
}

export default SettingsAdapter
