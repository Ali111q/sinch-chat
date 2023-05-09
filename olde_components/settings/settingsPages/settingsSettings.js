import React, { Component } from 'react'
import {useEffect, useState} from 'react';
import Switch from "react-switch";

export class SettingsSettings extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(checked) {
        this.setState({ checked });
      }
      
  render() { 
    console.log(Math.trunc(window.innerWidth*0.02));
   
    return (
<>
<div class="setingcontant-set">
        <div class="notifcation">
          
       
        <Switch height={Math.trunc(window.innerWidth*0.02)} width={Math.trunc(window.innerWidth*0.038)} color="white" onChange={this.handleChange} checked={this.state.checked}uncheckedIcon={false} checkedIcon={false} />
     
            <h1>الإشعارات</h1>
            <img src="Icon.png" alt=""/>
        </div>
        <button class="language">
            <img class="arrow" src="Arrow.png" alt=""/>
            <h1>اللغة</h1>
            <img src="language_FILL0_wght300_GRAD0_opsz40.png" class="arroww" alt=""/>
        </button>
        


        
      </div>
</>
    )
  }
}

export default SettingsSettings
