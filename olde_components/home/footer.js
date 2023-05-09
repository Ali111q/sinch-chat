import React, { Component } from 'react'


import home from '../../assets/icons/Home@2x.png'
import heart from '../../assets/icons/heart@2x.png'
import profile from '../../assets/icons/Profile@2x.png'
import add from '../../assets/icons/Add@2x.png'
import search from '../../assets/icons/icons-dark-search.png'
import { Link, Router } from 'react-router-dom'


export class Footer extends Component {
  render() {
    return (
        <>

      <div>
         <ul className="foter">
    <Link className="pagnuma"  to="/myprofile"><img className="pagnumaimg"   srcset={profile} alt=""/></Link>


    <a className="pagnuma"  href="#"><img className="pagnumaimg"   srcset={heart} alt=""/></a>

    <a className="pagnuma"  href="#"><img className="pagnumaimg"   srcset={add}alt=""/></a>

    
  <button className="pagnuma1" ><img  srcset={search} alt="" /></button>

    < Link className="pagnuma"  to="home"><img className="pagnumaimg"   srcset={home} alt=""/></Link>

</ul> 
      </div>
     
      </>
    )
  }
}



export default Footer;