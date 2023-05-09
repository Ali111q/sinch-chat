import React,{useState,useEffect} from 'react';
import svg from './svgList';
import { useNavigate } from "react-router-dom";
function NavBar(props) {
    const selcted=props.selcted
    const setselcted=props.setselcted
    const navigate = useNavigate();
  return (
    <div className='NewDashbordAppNavBar'>
        <a>
            {svg.back}
        </a>
        <ul>
            <li onClick={e=>{
                setselcted&&setselcted(1)
                navigate("/DashBordApp/1")
            }} id={selcted==1?'NewDashbordAppNavBarselcted':""}>Patients</li>
            <li onClick={e=>{
                setselcted&&setselcted(2)
                navigate("/DashBordApp/2")
            }} id={selcted==2?'NewDashbordAppNavBarselcted':""}>Schedule</li>
            
            <li id={selcted==3?'NewDashbordAppNavBarselcted':""}>Info</li>
        </ul>
        <span>
            <input type={"text"} placeholder="Search…"/>
            {svg.serch}
        </span>
        <div></div>
    </div>
  );
}

export default NavBar;



{/* <li onClick={e=>{
    setselcted(3)
}} id={selcted==3?'NewDashbordAppNavBarselcted':""}>Info</li> */}