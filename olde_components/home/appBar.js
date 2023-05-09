import React, { Component } from 'react'
import applogo from '../../assets/icons/logo.png'
import chatIcon from'../../assets/icons/Chat.png'
import doc from '../../assets/icons/Document.png'
import home from '../../assets/icons/Home@2x.png'
import heart from '../../assets/icons/heart@2x.png'
import profile from '../../assets/icons/Profile@2x.png'
import add from '../../assets/icons/Add@2x.png'
import search from '../../assets/icons/icons-dark-search.png'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import MessageBox from '../helper/messageBox'
import axios from 'axios'







class AppBar extends Component   {

  state = { 
  
    // Initially, no file is selected 
    selectedFile: null
  }; 

      onFileChange = event => { 
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] }); 
      console.log(this.state.file.name);
    }; 
  
      onFileUpload = () => { 
      // Create an object of formData 
      const formData = {
        files:[this.state.selectedFile],
        discription:'lllll'
      }; 
     
      // Update the formData object 
    
     
      // Details of the uploaded file 
      console.log(this.state.selectedFile); 
     
      // Request made to the backend api 
      // Send formData object 
      axios.post("https://web.azu-app.com/api/home/posts/store", formData,{'Authorization':'Bearer YqQWNdnswFYSbNyiV2JWJ0s0ryleNKx43AJOwyxf'}).then((response)=>{
        console.log(response);
      }); 
    }; 
render(){
    return (
      <div>
        <div id="rem" className= "nvb">

<div id="rem" className="pagnum" >
  <li id="rem">

    <Link to={"chat"} id="rem" className="notification">
      <span><img id="rem"srcset={chatIcon} alt=""></img></span>
      <span id="rem" className="badge">5</span>
    </Link>

    <a id="rem"href="#" className="notification">
      <span><img id="rem" srcset={doc} alt=""></img></span>
      <span id="rem"className="badge">3</span>
    </a>



    <Link className="pagnuma" id="rem" to="/home" ><img className="pagnumaimg" id="rem"  srcset={home} alt=""></img></Link>

    <Link to="/request" className="pagnuma" id="rem" href="#"><img className="pagnumaimg" id="rem"  srcset={heart} alt=""></img></Link>

    <a   className="pagnuma"  id="rem" ><img className="pagnumaimg" id="rem"  srcset={add} alt=""></img></a>

    <Link className="pagnuma" id="rem" to="/myProfile"><img className="pagnumaimg" id="rem"  srcset={profile}alt=""></img></Link>
  </li>
</div>
<div id="rem" className="serch">

  <button id="rem" onClick={()=>{this.onFileUpload()}} ><img id="rem" srcset={search} alt="" ></img></button>
  <input id="rem" onChange={()=>{ this.onFileChange()}} type="file" placeholder="serch"></input>
</div>

<div id="rem"className="logo" >
  <img id="rem"srcset={applogo} alt=""></img>

</div>

</div>
      </div>
    )
    }
}

export default AppBar
