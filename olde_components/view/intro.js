import React, { Component ,useRef} from 'react'
import docphoto from '../assets/imgs/doctor.png'
import docphoto2 from '../assets/imgs/doctor2.png'
import docphoto3 from '../assets/imgs/doctor1.png'
import {getPosts} from '../utils/constant'
import Err from './404'

export class intro extends Component {
    
    constructor (){
        super()
        this.state={
            index :0,
            faded:false,
            error: null,
            isLoaded: false,
            items: []
        }
    }
   async componentDidMount() {
      const response = await fetch(getPosts);
      const json = await response.json();
      this.setState({ items: json });
         console.log(this.state.items);
      }
    
  render() {
    

     const slide  =()=>{
        
      

        if (this.state.index <2) {  this.setState({faded:true})

        setTimeout(() => {
            this.setState({faded:false})
        }, 1000);
            {   this.setState({index:this.state.index+1})
      
         }
    }
else{
    this.props.history.push("/login");
}}
const photos =[
    docphoto , docphoto2,docphoto3
]
if (this.state.items['code']!=200) {
  return <Err/>
}
    return (
      <>
          <div class="first-sc">
       <div className="first-sc-img" >
            <img src={this.state.items['data'][this.state.index]['image']} id={this.state.faded? 'animation':null} />
        </div> 
<h1>{this.state.items['data'][this.state.index]['introduction_name']}</h1>
        <ul>
           
                <span id={ this.state.index==0?'first-sculspan':null}></span>

            
           
                <span id={ this.state.index==1?'first-sculspan':null}></span>

           
            
                <span id={ this.state.index==2?'first-sculspan':null}></span>

         
        </ul>
        <button class="log-first-next" onClick={()=>{slide()}}>التالي</button>

    </div>
      </>
    )
  }
}

export default intro
