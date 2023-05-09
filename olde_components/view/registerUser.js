
import { Link,useHistory } from 'react-router-dom'
import { useState,useEffect,state } from 'react';
import { getCon,getHe } from '../controllers/get_contre';
import { ReactDialogBox } from 'react-js-dialog-box';
import LocationPicker from 'react-location-picker';
import { regester } from '../controllers/register_controller';

import MapPicker_con from '../controllers/map_controller';

function RegisterUser (props){
    const history = useHistory()
    const [name, setname] = useState("");
    const [union, setunion] = useState("");
    const [date_of_birth, setdate_of_birth] = useState("");
    const [gender, setgender] = useState("");
    const [healthcare_specialty_id, sethealthcare_specialty_id] = useState("");
    const [usname, setusname] = useState("");
    const [mobilenun, setmobilenun] = useState("");
    const [contres,setcontres] =useState();
    const [citie,setcitie] =useState()
    const [location ,setLocation]=useState()
    const [isOpen,setIsOpen]=useState()
    const [helth,sethelth]=useState()
    const [key,setkey]=useState()
    const [selectcontry,setselectcontry]=useState()
    const [selectsitie,setselectsitie]=useState()


useEffect(()=>{
    getHe().then((e)=>{
        helth? console.log(): sethelth(e.data)
        
    })

    getCon().then((e)=>{
        contres? console.log(): setcontres(e.data)
        citie? console.log(): setcitie(e.data[0].cities)
        key? console.log(): setkey(e.data[0].country_key)

    })
})


if (props.location.pathname.split('/')[2]==1) {
    return(  
        <>
              <div class="father-sing">
        <div class="usr-tip">
            <Link onClick={()=>{
                history.goBack()
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1vw" height="2vw" viewBox="0 0 15.34 27.14">
                <path id="Arrow" d="M.518,24.118a1.77,1.77,0,0,0,2.5,2.5l11.8-11.8a1.77,1.77,0,0,0,0-2.5L3.022.518a1.77,1.77,0,0,0-2.5,2.5L11.067,13.57Z" fill="#2a2d37"/>
              </svg>
              </Link>
              <h1 className='title_log'></h1>
        </div>
        <button class="add-img-sing">
            <input id='imgfile' type="file" />
        <svg xmlns="http://www.w3.org/2000/svg" width="40%" height="" viewBox="0 0 37 33">
     <g id="Iconly_Bold_Camera" data-name="Iconly/Bold/Camera" transform="translate(0.671 0.691)">
     <g id="Camera" transform="translate(0 0)">
      <path id="Camera-2" data-name="Camera" d="M28.153,32H7.847A7.8,7.8,0,0,1,0,24.258V13.709A7.8,7.8,0,0,1,7.847,5.966a.356.356,0,0,0,.343-.213L8.3,5.541l.15-.311c.47-.979,1-2.085,1.326-2.726A4.384,4.384,0,0,1,13.752,0H22.23a4.4,4.4,0,0,1,4,2.5c.283.559.713,1.457,1.129,2.326l.256.534.181.39a.407.407,0,0,0,.36.213A7.8,7.8,0,0,1,36,13.709V24.258A7.8,7.8,0,0,1,28.153,32ZM18,11.382a7.1,7.1,0,0,0-5.022,2.061,6.832,6.832,0,0,0-2.053,4.918A6.954,6.954,0,0,0,13,23.3a7.147,7.147,0,0,0,5,2.042A7.057,7.057,0,0,0,22.986,23.3,6.9,6.9,0,0,0,23,13.426,7.074,7.074,0,0,0,18,11.382Zm10.1-.426a1.608,1.608,0,1,0,1.639,1.616A1.62,1.62,0,0,0,28.1,10.957ZM18,22.677a4.375,4.375,0,0,1-3.1-1.261,4.258,4.258,0,0,1-1.278-3.054v-.018a4.128,4.128,0,0,1,1.26-3.019,4.431,4.431,0,0,1,6.21-.018,4.263,4.263,0,0,1,1.278,3.054A4.373,4.373,0,0,1,18,22.677Z" transform="translate(-0.171 -0.191)" fill="#0199ec" stroke="rgba(0,0,0,0)" stroke-width="1"/>
      </g>
     </g>    
        </svg>
        </button>
        <span class="add-name-sing">
            <h1 className='title_log'>user name</h1>
            <input type="text"  id="" 
             onChange={(val) => {
                setusname(val.target.value)
                console.log(name);
              }}
             placeholder="user name"/>
        </span>
        <span class="add-contry-sing">
            <h1 className='title_log'>mobile number</h1>
            <div>
                <input type="tel" name="" id="" placeholder=" mobile number"onChange={(val) => {
                setmobilenun(val.target.value)
                console.log(name);
              }}/>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="3.771vw"
                        height="1.911vw" viewBox="0 0 54.771 37.911">
                        <defs>
                            <clipPath id="clip-path">
                                <rect id="Rectangle_140" data-name="Rectangle 140" width="54.771" height="37.911" rx="2"
                                    fill="#fff" />
                            </clipPath>
                        </defs>
                        <g id="Mask_Group_1" data-name="Mask Group 1" clip-path="url(#clip-path)">
                            <g id="iq" transform="translate(-4.066 -2.815)">
                                <path id="Path_172" data-name="Path 172" d="M0,0H62.9V43.54H0Z" fill="#ce1126" />
                                <path id="Path_173" data-name="Path 173" d="M0,200H62.9v29.027H0Z"
                                    transform="translate(0 -185.487)" fill="#fff" />
                                <path id="Path_174" data-name="Path 174" d="M0,400H62.9v14.513H0Z"
                                    transform="translate(0 -370.973)" fill="#2a2d37" />
                                <g id="Group_16" data-name="Group 16" transform="translate(18.916 17.477)">
                                    <path id="Path_175" data-name="Path 175"
                                        d="M290.327,243.007a.768.768,0,0,1-.214-.167c-.048-.07-.02-.072.178-.017a.769.769,0,0,0,.811-.139l.2-.175.236.125a.723.723,0,0,0,.307.1.7.7,0,0,0,.307-.407c-.008-.121.09-.09.137.042a.477.477,0,0,1-.285.623.63.63,0,0,1-.407-.045c-.22-.08-.258-.078-.368.009A.808.808,0,0,1,290.327,243.007Zm.878-.833a1.322,1.322,0,0,1-.156-.65c.029-.092.06-.11.14-.084.141.046.173.146.152.487C291.324,242.2,291.284,242.278,291.2,242.173Zm-10.333-.309a1.413,1.413,0,0,0,.529.82c-.118.055-.265.03-.373.092-.6.627-2.811,2.861-3.214,3.4,1.194.025,2.517-.017,3.637-.07,0-.842.768-.885,1.283-1.192.265.433.93.4,1.013,1.051,0,.78,0,1.956,0,2.8h-10.2a1.485,1.485,0,0,1-1.891,1.192c.308-.334.827-.449,1.013-.911a3.2,3.2,0,0,0-.617-2.21,3.628,3.628,0,0,0,1.09-.594c-.359,1.131.932,1.007,1.891.981.032-.384.014-.838-.27-.894a2.605,2.605,0,0,0,1.013-.7v1.524c2.278,0,4.736-.018,7.062-.018,0-.477.122-1.243-.242-1.243-.347,0-.016.981-.286.981h-5.453c0-.211-.005-.652-.005-.97.231-.24.2-.219,1.783-1.859C278.794,243.88,279.9,242.841,280.871,241.864Zm13.631-.04a4.834,4.834,0,0,0,1.148.631c-.054.2-.226.28-.271.491v4.276c.521.119.63-.187.878-.35.068.684.488,1.355.473,1.893H294.5Q294.5,245.295,294.5,241.824Zm-2.971,2.29s.811-.71.811-.738v3.732h.584c0-1.422-.018-2.864-.018-4.185a5.208,5.208,0,0,0,.817-.851v6.684l-5.118,0c-.075-1.387-.088-2.824,1.469-2.515v-.566c-.048-.1-.133.023-.153-.1.247-.257.331-.322,1-.93,0,.733.012,2.463.012,2.463h.59S291.531,244.21,291.531,244.114Zm-1.921,2.956c.11.171.483.168.465-.12C290.012,246.713,289.521,246.8,289.609,247.07Z"
                                        transform="translate(-271.66 -241.429)" fill="#007a3d" />
                                    <ellipse id="Ellipse_38" data-name="Ellipse 38" cx="0.313" cy="0.324" rx="0.313"
                                        ry="0.324" transform="translate(2.82 7.798)" fill="#007a3d" />
                                    <path id="Path_176" data-name="Path 176"
                                        d="M454.483,246.961a4.834,4.834,0,0,0,1.148.631c-.054.2-.226.28-.271.491v4.276c.521.119.63-.188.878-.351.067.685.487,1.355.473,1.893h-2.229Q454.483,250.432,454.483,246.961Z"
                                        transform="translate(-441.704 -246.56)" fill="#007a3d" />
                                </g>
                            </g>
                        </g>
                    </svg>
                    <h2>{key}</h2>
                </button>
            </div>
        </span>
        <span class="cand">
            <h1 className='title_log'>select your contres</h1>
            <select placeholder="" name="cars" id="cars"  onChange={(val)=>{
                setselectcontry(val.target.value)
                         setcitie(contres[val.target.value].cities)
                         setkey(contres[val.target.va].country_key)
                }}>
                {

                contres? contres.map((e,index)=>{
                        return <option value={index}>{e.country_name}</option>
                    }):console.log()
                }
            </select>
        </span>


        <span class="cand">
            <h1 className='title_log'>select your citie</h1>
            <select name="cars" id="cars"  onChange={(val)=>{
                            setselectsitie(val.target.value)
                            console.log(selectsitie);
                        }}>
                {

                  citie? citie.map((e)=>{
                        return <option value={e.id}>{e.city_name}</option>
                    }):console.log()
                }
            </select>
        </span>

        <span class="cand111">
            <h1 className='title_log'>birth day</h1>
            <input type="date" name="" onChange={(val)=>{
                setdate_of_birth(val.target.value)
            }} id=""/>
        </span>
<span class="cand">

        
          <h1 className='title_log'>select your gender</h1>
          <select name="cars" id="cars"  onChange={(val)=>{
            setgender(val.target.value)
          }}>
            <option value="2">female</option>
        <option value="1">male</option>
              </select>
        </span>
        <span class="add-name-sing">
            <h1 className='title_log'>location</h1>
            <input type=""  id="" 
             onChange={(val) => {
                setusname(val.target.value)
                console.log(name);
              }}
             placeholder="user name"/>
        </span>



        <button class="sing-don" onClick={()=>{
regester(3,usname,name,mobilenun,1,selectsitie,"",'',"","",union,healthcare_specialty_id,date_of_birth,gender)
// function regester(account_type_id,full_name,name,mobile,country_id,city_id,image,location,lat,lng,union_id_no,healthcare_specialty_id,date_of_birth,gender){


        }}>تسجيل</button>

     </div>
        </>
    )
    
}else if(props.location.pathname.split('/')[2]==7){
    return(  
        <>
              <div class="father-sing">
        <div class="usr-tip">
            <Link onClick={()=>{
                history.goBack()
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1vw" height="2vw" viewBox="0 0 15.34 27.14">
                <path id="Arrow" d="M.518,24.118a1.77,1.77,0,0,0,2.5,2.5l11.8-11.8a1.77,1.77,0,0,0,0-2.5L3.022.518a1.77,1.77,0,0,0-2.5,2.5L11.067,13.57Z" fill="#2a2d37"/>
              </svg>
              </Link>
              <h1 className='title_log'></h1>
        </div>
        <button class="add-img-sing">
            <input id='imgfile' type="file" />
        <svg xmlns="http://www.w3.org/2000/svg" width="40%" height="" viewBox="0 0 37 33">
     <g id="Iconly_Bold_Camera" data-name="Iconly/Bold/Camera" transform="translate(0.671 0.691)">
     <g id="Camera" transform="translate(0 0)">
      <path id="Camera-2" data-name="Camera" d="M28.153,32H7.847A7.8,7.8,0,0,1,0,24.258V13.709A7.8,7.8,0,0,1,7.847,5.966a.356.356,0,0,0,.343-.213L8.3,5.541l.15-.311c.47-.979,1-2.085,1.326-2.726A4.384,4.384,0,0,1,13.752,0H22.23a4.4,4.4,0,0,1,4,2.5c.283.559.713,1.457,1.129,2.326l.256.534.181.39a.407.407,0,0,0,.36.213A7.8,7.8,0,0,1,36,13.709V24.258A7.8,7.8,0,0,1,28.153,32ZM18,11.382a7.1,7.1,0,0,0-5.022,2.061,6.832,6.832,0,0,0-2.053,4.918A6.954,6.954,0,0,0,13,23.3a7.147,7.147,0,0,0,5,2.042A7.057,7.057,0,0,0,22.986,23.3,6.9,6.9,0,0,0,23,13.426,7.074,7.074,0,0,0,18,11.382Zm10.1-.426a1.608,1.608,0,1,0,1.639,1.616A1.62,1.62,0,0,0,28.1,10.957ZM18,22.677a4.375,4.375,0,0,1-3.1-1.261,4.258,4.258,0,0,1-1.278-3.054v-.018a4.128,4.128,0,0,1,1.26-3.019,4.431,4.431,0,0,1,6.21-.018,4.263,4.263,0,0,1,1.278,3.054A4.373,4.373,0,0,1,18,22.677Z" transform="translate(-0.171 -0.191)" fill="#0199ec" stroke="rgba(0,0,0,0)" stroke-width="1"/>
      </g>
     </g>    
        </svg>
        </button>
        <span class="add-name-sing">
            <h1 className='title_log'>user name</h1>
            <input type="text"  id="" 
             onChange={(val) => {
                setname(val.target.value)
                console.log(name);
              }}
             placeholder="user name"/>
        </span>
        <span class="add-contry-sing">
            <h1 className='title_log'>mobile number</h1>
            <div>
                <input type="tel" name="" id="" placeholder=" mobile number"onChange={(val) => {
                setmobilenun(val.target.value)
                console.log(name);
              }}/>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="3.771vw"
                        height="1.911vw" viewBox="0 0 54.771 37.911">
                        <defs>
                            <clipPath id="clip-path">
                                <rect id="Rectangle_140" data-name="Rectangle 140" width="54.771" height="37.911" rx="2"
                                    fill="#fff" />
                            </clipPath>
                        </defs>
                        <g id="Mask_Group_1" data-name="Mask Group 1" clip-path="url(#clip-path)">
                            <g id="iq" transform="translate(-4.066 -2.815)">
                                <path id="Path_172" data-name="Path 172" d="M0,0H62.9V43.54H0Z" fill="#ce1126" />
                                <path id="Path_173" data-name="Path 173" d="M0,200H62.9v29.027H0Z"
                                    transform="translate(0 -185.487)" fill="#fff" />
                                <path id="Path_174" data-name="Path 174" d="M0,400H62.9v14.513H0Z"
                                    transform="translate(0 -370.973)" fill="#2a2d37" />
                                <g id="Group_16" data-name="Group 16" transform="translate(18.916 17.477)">
                                    <path id="Path_175" data-name="Path 175"
                                        d="M290.327,243.007a.768.768,0,0,1-.214-.167c-.048-.07-.02-.072.178-.017a.769.769,0,0,0,.811-.139l.2-.175.236.125a.723.723,0,0,0,.307.1.7.7,0,0,0,.307-.407c-.008-.121.09-.09.137.042a.477.477,0,0,1-.285.623.63.63,0,0,1-.407-.045c-.22-.08-.258-.078-.368.009A.808.808,0,0,1,290.327,243.007Zm.878-.833a1.322,1.322,0,0,1-.156-.65c.029-.092.06-.11.14-.084.141.046.173.146.152.487C291.324,242.2,291.284,242.278,291.2,242.173Zm-10.333-.309a1.413,1.413,0,0,0,.529.82c-.118.055-.265.03-.373.092-.6.627-2.811,2.861-3.214,3.4,1.194.025,2.517-.017,3.637-.07,0-.842.768-.885,1.283-1.192.265.433.93.4,1.013,1.051,0,.78,0,1.956,0,2.8h-10.2a1.485,1.485,0,0,1-1.891,1.192c.308-.334.827-.449,1.013-.911a3.2,3.2,0,0,0-.617-2.21,3.628,3.628,0,0,0,1.09-.594c-.359,1.131.932,1.007,1.891.981.032-.384.014-.838-.27-.894a2.605,2.605,0,0,0,1.013-.7v1.524c2.278,0,4.736-.018,7.062-.018,0-.477.122-1.243-.242-1.243-.347,0-.016.981-.286.981h-5.453c0-.211-.005-.652-.005-.97.231-.24.2-.219,1.783-1.859C278.794,243.88,279.9,242.841,280.871,241.864Zm13.631-.04a4.834,4.834,0,0,0,1.148.631c-.054.2-.226.28-.271.491v4.276c.521.119.63-.187.878-.35.068.684.488,1.355.473,1.893H294.5Q294.5,245.295,294.5,241.824Zm-2.971,2.29s.811-.71.811-.738v3.732h.584c0-1.422-.018-2.864-.018-4.185a5.208,5.208,0,0,0,.817-.851v6.684l-5.118,0c-.075-1.387-.088-2.824,1.469-2.515v-.566c-.048-.1-.133.023-.153-.1.247-.257.331-.322,1-.93,0,.733.012,2.463.012,2.463h.59S291.531,244.21,291.531,244.114Zm-1.921,2.956c.11.171.483.168.465-.12C290.012,246.713,289.521,246.8,289.609,247.07Z"
                                        transform="translate(-271.66 -241.429)" fill="#007a3d" />
                                    <ellipse id="Ellipse_38" data-name="Ellipse 38" cx="0.313" cy="0.324" rx="0.313"
                                        ry="0.324" transform="translate(2.82 7.798)" fill="#007a3d" />
                                    <path id="Path_176" data-name="Path 176"
                                        d="M454.483,246.961a4.834,4.834,0,0,0,1.148.631c-.054.2-.226.28-.271.491v4.276c.521.119.63-.188.878-.351.067.685.487,1.355.473,1.893h-2.229Q454.483,250.432,454.483,246.961Z"
                                        transform="translate(-441.704 -246.56)" fill="#007a3d" />
                                </g>
                            </g>
                        </g>
                    </svg>
                    <h2>{key}</h2>
                </button>
            </div>
        </span>

        <span class="add-name-sing">
            <h1 className='title_log'>union id</h1>
            <input type="text"  id="" 
             onChange={(val) => {

                console.log(name);
              }}
             placeholder="union id "/>
        </span>
        <span class="cand">
            <h1 className='title_log'>select your contres</h1>
            <select placeholder="" name="cars" id="cars"  onChange={(val)=>{
                setselectcontry(val.target.value)
                         setcitie(contres[val.target.value].cities)
                         setkey(contres[val.target.va].country_key)
                }}>
                {

                contres? contres.map((e,index)=>{
                        return <option value={index}>{e.country_name}</option>
                    }):console.log()
                }
            </select>
        </span>


        <span class="cand">
            <h1 className='title_log'>select your citie</h1>
            <select name="cars" id="cars"  onChange={(val)=>{
                            setselectsitie(val.target.value)
                            console.log(selectsitie);
                        }}>
                {

                  citie? citie.map((e)=>{
                        return <option value={e.id}>{e.city_name}</option>
                    }):console.log('')
                }
            </select>
        </span>
        <span class="cand">
            <h1 className='title_log'>select healthcare specialties</h1>
            <select name="cars" id="cars"  onClick={()=>{
                   
                }}>
                {

                  helth? helth.map((e)=>{
                        return <option value={e.id}>{e.title}</option>
                    }):console.log('')
                }
            </select>
        </span>
        
        <span class="cand">

        
            <h1 className='title_log'>select your gender</h1>
             <select name="cars" id="cars"  onClick={()=>{}}>
            <option value="2">female</option>
            <option value="1">male</option>
            </select>
        </span>

        <span class="cand111">
            <h1 className='title_log'>birth day</h1>
            <input type="date" name="" id=""/>
        </span>

        <button class="sing-don" onClick={()=>{

        }}>تسجيل</button>

     </div>
        </>
    )
    

}else{
    return(  
        <>
              <div class="father-sing">
        <div class="usr-tip">
            <Link onClick={()=>{
                history.goBack()
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1vw" height="2vw" viewBox="0 0 15.34 27.14">
                <path id="Arrow" d="M.518,24.118a1.77,1.77,0,0,0,2.5,2.5l11.8-11.8a1.77,1.77,0,0,0,0-2.5L3.022.518a1.77,1.77,0,0,0-2.5,2.5L11.067,13.57Z" fill="#2a2d37"/>
              </svg>
              </Link>
              <h1 className='title_log'></h1>
        </div>
        <button class="add-img-sing">
            <input id='imgfile' type="file" />
        <svg xmlns="http://www.w3.org/2000/svg" width="40%" height="" viewBox="0 0 37 33">
     <g id="Iconly_Bold_Camera" data-name="Iconly/Bold/Camera" transform="translate(0.671 0.691)">
     <g id="Camera" transform="translate(0 0)">
      <path id="Camera-2" data-name="Camera" d="M28.153,32H7.847A7.8,7.8,0,0,1,0,24.258V13.709A7.8,7.8,0,0,1,7.847,5.966a.356.356,0,0,0,.343-.213L8.3,5.541l.15-.311c.47-.979,1-2.085,1.326-2.726A4.384,4.384,0,0,1,13.752,0H22.23a4.4,4.4,0,0,1,4,2.5c.283.559.713,1.457,1.129,2.326l.256.534.181.39a.407.407,0,0,0,.36.213A7.8,7.8,0,0,1,36,13.709V24.258A7.8,7.8,0,0,1,28.153,32ZM18,11.382a7.1,7.1,0,0,0-5.022,2.061,6.832,6.832,0,0,0-2.053,4.918A6.954,6.954,0,0,0,13,23.3a7.147,7.147,0,0,0,5,2.042A7.057,7.057,0,0,0,22.986,23.3,6.9,6.9,0,0,0,23,13.426,7.074,7.074,0,0,0,18,11.382Zm10.1-.426a1.608,1.608,0,1,0,1.639,1.616A1.62,1.62,0,0,0,28.1,10.957ZM18,22.677a4.375,4.375,0,0,1-3.1-1.261,4.258,4.258,0,0,1-1.278-3.054v-.018a4.128,4.128,0,0,1,1.26-3.019,4.431,4.431,0,0,1,6.21-.018,4.263,4.263,0,0,1,1.278,3.054A4.373,4.373,0,0,1,18,22.677Z" transform="translate(-0.171 -0.191)" fill="#0199ec" stroke="rgba(0,0,0,0)" stroke-width="1"/>
      </g>
     </g>    
        </svg>
        </button>
        <span class="add-name-sing">
            <h1 className='title_log'>user name</h1>
            <input type="text"  id=""
             onChange={(val)=>{
                setname(val.target.value)
                console.log(name);
              }}
             placeholder="user name"/>
        </span>
        <span class="add-contry-sing">
            <h1 className='title_log'>mobile number</h1>
            <div>
                <input type="tel" name="" id="" placeholder=" mobile number"onChange={(val) => {
                setmobilenun(val.target.value)
                console.log(name);
              }}/>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="3.771vw"
                        height="1.911vw" viewBox="0 0 54.771 37.911">
                        <defs>
                            <clipPath id="clip-path">
                                <rect id="Rectangle_140" data-name="Rectangle 140" width="54.771" height="37.911" rx="2"
                                    fill="#fff" />
                            </clipPath>
                        </defs>
                        <g id="Mask_Group_1" data-name="Mask Group 1" clip-path="url(#clip-path)">
                            <g id="iq" transform="translate(-4.066 -2.815)">
                                <path id="Path_172" data-name="Path 172" d="M0,0H62.9V43.54H0Z" fill="#ce1126" />
                                <path id="Path_173" data-name="Path 173" d="M0,200H62.9v29.027H0Z"
                                    transform="translate(0 -185.487)" fill="#fff" />
                                <path id="Path_174" data-name="Path 174" d="M0,400H62.9v14.513H0Z"
                                    transform="translate(0 -370.973)" fill="#2a2d37" />
                                <g id="Group_16" data-name="Group 16" transform="translate(18.916 17.477)">
                                    <path id="Path_175" data-name="Path 175"
                                        d="M290.327,243.007a.768.768,0,0,1-.214-.167c-.048-.07-.02-.072.178-.017a.769.769,0,0,0,.811-.139l.2-.175.236.125a.723.723,0,0,0,.307.1.7.7,0,0,0,.307-.407c-.008-.121.09-.09.137.042a.477.477,0,0,1-.285.623.63.63,0,0,1-.407-.045c-.22-.08-.258-.078-.368.009A.808.808,0,0,1,290.327,243.007Zm.878-.833a1.322,1.322,0,0,1-.156-.65c.029-.092.06-.11.14-.084.141.046.173.146.152.487C291.324,242.2,291.284,242.278,291.2,242.173Zm-10.333-.309a1.413,1.413,0,0,0,.529.82c-.118.055-.265.03-.373.092-.6.627-2.811,2.861-3.214,3.4,1.194.025,2.517-.017,3.637-.07,0-.842.768-.885,1.283-1.192.265.433.93.4,1.013,1.051,0,.78,0,1.956,0,2.8h-10.2a1.485,1.485,0,0,1-1.891,1.192c.308-.334.827-.449,1.013-.911a3.2,3.2,0,0,0-.617-2.21,3.628,3.628,0,0,0,1.09-.594c-.359,1.131.932,1.007,1.891.981.032-.384.014-.838-.27-.894a2.605,2.605,0,0,0,1.013-.7v1.524c2.278,0,4.736-.018,7.062-.018,0-.477.122-1.243-.242-1.243-.347,0-.016.981-.286.981h-5.453c0-.211-.005-.652-.005-.97.231-.24.2-.219,1.783-1.859C278.794,243.88,279.9,242.841,280.871,241.864Zm13.631-.04a4.834,4.834,0,0,0,1.148.631c-.054.2-.226.28-.271.491v4.276c.521.119.63-.187.878-.35.068.684.488,1.355.473,1.893H294.5Q294.5,245.295,294.5,241.824Zm-2.971,2.29s.811-.71.811-.738v3.732h.584c0-1.422-.018-2.864-.018-4.185a5.208,5.208,0,0,0,.817-.851v6.684l-5.118,0c-.075-1.387-.088-2.824,1.469-2.515v-.566c-.048-.1-.133.023-.153-.1.247-.257.331-.322,1-.93,0,.733.012,2.463.012,2.463h.59S291.531,244.21,291.531,244.114Zm-1.921,2.956c.11.171.483.168.465-.12C290.012,246.713,289.521,246.8,289.609,247.07Z"
                                        transform="translate(-271.66 -241.429)" fill="#007a3d" />
                                    <ellipse id="Ellipse_38" data-name="Ellipse 38" cx="0.313" cy="0.324" rx="0.313"
                                        ry="0.324" transform="translate(2.82 7.798)" fill="#007a3d" />
                                    <path id="Path_176" data-name="Path 176"
                                        d="M454.483,246.961a4.834,4.834,0,0,0,1.148.631c-.054.2-.226.28-.271.491v4.276c.521.119.63-.188.878-.351.067.685.487,1.355.473,1.893h-2.229Q454.483,250.432,454.483,246.961Z"
                                        transform="translate(-441.704 -246.56)" fill="#007a3d" />
                                </g>
                            </g>
                        </g>
                    </svg>
                    <h2>{key}</h2>
                </button>
            </div>
        </span>
        <span class="cand">
            <h1 className='title_log'>select your contres</h1>
            <select placeholder="" name="cars" id="cars"  onChange={(val)=>{
                setselectcontry(val.target.value)
                         setcitie(contres[val.target.value].cities)
                         setkey(contres[val.target.va].country_key)
                }}>
                {

                contres? contres.map((e,index)=>{
                        return <option value={index}>{e.country_name}</option>
                    }):console.log()
                }
            </select>
        </span>


        <span class="cand">
            <h1 className='title_log'>select your citie</h1>
            <select name="cars" id="cars"  onChange={(val)=>{
                            setselectsitie(val.target.value)
                            console.log(selectsitie);
                        }}>
                {

                  citie? citie.map((e)=>{
                        return <option value={e.id}>{e.city_name}</option>
                    }):console.log()
                }
            </select>
        </span>
        {props.location.pathname.split('/')[2]!=8?<>
<span class="cand">
<h1 className='title_log'>select your gender</h1>
 <select name="cars" id="cars"  onClick={()=>{}}>
<option value="2">female</option>
<option value="1">male</option>
</select>
</span>
<span class="cand111">
<h1 className='title_log'>birth day</h1>
<input type="date" name="" id=""/>
</span>
</>:console.log()}


        <button class="sing-don" onClick={()=>{
        console.log('ghj');
        setIsOpen(true)
        }}>تسجيل</button>
     </div>
     {
     isOpen?<>
    <div>
        <div class="map-alert">
            <MapPicker_con></MapPicker_con>
            
             {/* <LocationPicker containerElement={ <div className="alert" /> }
            mapElement={ <div  class="map-alert" /> }
            defaultPosition={{
                lat: 27.9878,
                lng: 86.9250
              }}
            onChange={(e)=>{console.log(e);}}></LocationPicker>  */}
           
        <button class="map-save">حفظ</button>
    </div>
    </div>

    
    </>:console.log('ikeowd')} </>


    
    )
    
}

}
export default RegisterUser



