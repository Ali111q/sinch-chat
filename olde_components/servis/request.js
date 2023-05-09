import React, { Component } from 'react'
import DateBody from './dateBody'
import RequestBody from './request-Body'
export class Request extends Component {

    constructor() {
        super()
        this.state = {
          selelcted: 0,
          secertarys: 1
        }
    }
    onClick(ind) {
        { this.setState({ selelcted: ind }) }
        console.log(this.state.selelcted);
      }

      

  render() {
    const pages = [{
        id:0,pageName:'حجز موعد',comp:<RequestBody/>,

    },{
        id:1,pageName:'استشارة',comp:<DateBody/>,

    }] 

    return (
      <>
    <div className="grandmother">
      
        <div className="request-tip">
            
           
            {pages.map((e,index)=>{return <button className={this.state.selelcted==index? "request-tip-style1":"request-tip-style"} key={index} onClick={()=>{ this.onClick(e.id)}}> {e.pageName} </button>})}
  

  
        </div>




       {pages[this.state.selelcted].comp}
    </div>
       


       




      </>
    )
  }
}

export default Request
