
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getCon, getHe } from '../../controllers/register_info_controller.js';
import { contreFlag, addImageSvg, backSvg } from '../../assets/rejster_svg';
import axios from 'axios';
import MapPickera from '../map.js';
import { dataState } from '../../helper/dataManger.js';
import { httpHelper } from '../../helper/http_helper.js';
import { url } from '../../utils/constants.js';

function RegisterUser(props) {
    let def = {}
    const [contresSel, setContresSel] = useState(1)
    const [city, setcity] = useState(1)
    const { id,nam } = useParams();
    const [show, setshow] = useState(false)
    const [contres, setContres] = useState()
    const [healthcareList, sethealthcareList] = useState()
    const [registerData, setregisterData] = useState(
        dataState({
            accountName:nam,
            id:id,
            account_type:0
        }))
    const [path, setpath] = useState()
    const navigate = useNavigate()
    const [image, setImage] = useState('')
    const handleChange = (e) => {
      console.log(e.target.files)
      setImage(e.target.files[0])
    }
    function handleInputChange(event) {
        const { name, type, value, checked } = event.target;
        setregisterData(defaultdata => {
            var val ;
            name == "city_id" ? val = Number.parseInt(value) :val=value
            name == "gender" ? val = Number.parseInt(value) :val=value
            return {
                ...defaultdata,
                 [name]: type === "checkbox" ? checked : val
            }
        });
    }
    useEffect(() => {
        
        path && navigate(path)
    }, [path]);
    useEffect(() => {
       
        getCon().then((e) => {
            setContres(e.data);

        })
        getHe().then((e) => {
            sethealthcareList(e.data);
            console.log(e.data);
        })

    }, [])
    useEffect(() => {
        const geolocation = navigator.geolocation;
        geolocation.getCurrentPosition(
          position => {
            def = {
                lat: position.coords.latitude,
                lng:position.coords.longitude
            }
          },
          () => {
            console.log(new Error("Permission denied"));
          }
        );
}, []);

   

function handlePost(){

    const surl = `${url}/register`
    const formData = new FormData()
    formData.append('image', image)
    console.log(...formData);
    for (let index = 0; index < Object.keys(registerData).length; index++) {
        formData.append(`${Object.keys(registerData)[index]}`,Object.values(registerData)[index])
        if (Object.keys(registerData)[index]=="country_id" || Object.values(registerData)[index]==0) {
            formData.append("country_id",1)
        }
        if (Object.keys(registerData)[index]=="city_id" || Object.values(registerData)[index]==0){
            formData.append("city_id",1)
        }
    }
    axios.post(surl,formData).then(result=>{
                
        localStorage.setItem("mobile",result.data.data.mobile)
        if (result.status==200) {
            httpHelper(`${url}/login`,[],{
                mobile: result.data.data.mobile,
        },"poSt")
            .then(e=>{
            localStorage.setItem("fcm_token",`7|cXjIVlcPavE8DMkTOQ4O8SyX6z55de82zl49fCyF`);
            JSON.parse(e).code==200?setpath('/Otp'):console.log(JSON.parse(e));
          })
    }
    }).catch(error => {
        console.log(error)
      })
  }


    return (
        <>
            <div className="father-sing">
                <div className="usr-tip">
                    <a onClick={() => { setpath(-1) }}>
                        {backSvg}
                    </a>

                    <h1>{nam}</h1>
                </div>

                <button className="add-img-sing">
                    <input id='' type="file" accept='image/png, image/jpeg' onChange={handleChange}/>
                    {addImageSvg}
                </button>
                <span className="add-name-sing">
                    <h1 className='title_log'>user name</h1>
                    <input
                        type="text"
                        placeholder="user name"
                        name="full_name"
                        onChange={handleInputChange}
                    />
                </span>
                <span className="add-contry-sing">
                    <h1 className='title_log'>mobile number</h1>
                    <div>
                        <input
                            type="number"
                            name="mobile"
                            onChange={handleInputChange}
                            placeholder="mobile number" />
                        <button>
                            {contreFlag}
                            <h2>{contres && contres[registerData.country_id].country_key}</h2>
                        </button>
                    </div>
                </span>
                { id != 1 &&  <span className="add-name-sing">
                    <h1 className='title_log'> union id </h1>
                    <input
                        type="text"
                        placeholder="user name"
                        name="full_name"
                        onChange={handleInputChange}
                    />
                </span>}
                { id == 7 && <span className="cand">
                    <h1 className='title_log'>select your healthcare specialties </h1>
                    <select
                        onChange={handleInputChange}
                        name="healthcare_specialty_id"
                        id="cars">
                        {healthcareList && healthcareList.map((e, index) => {
                            return <option key={index}
                                value={e.id}
                            >{e.title}</option>
                        })}
                    </select>
                </span>}
                <span className="cand">
                    <h1 className='title_log'>select your contre</h1>
                    <select
                        onChange={handleInputChange}
                        name="country_id"
                        id="cars">
                        {contres && contres.map((e, index) => {
                            return <option key={index}
                                value={index}
                            >{e.country_name}</option>
                        })}
                    </select>
                </span>
                <span className="cand">
                    <h1 className='title_log'>select your city</h1>
                    <select
                        onChange={handleInputChange}
                        name="city_id">
                        {contres && contres[registerData.country_id].cities.map((e, index) => {
                            return <option key={index} value={e.id}>{e.city_name}</option>
                        })}
                    </select>
                </span>

                { id != 8 &&<span className="cand111">
                    <h1 className='title_log'>birth day</h1>
                    <input
                        onChange={handleInputChange}
                        type="date"
                        name="date_of_birth"
                        id="" />
                </span>}

                { id != 8 && <span className="cand">
                    <h1 className='title_log'>select your gender</h1>
                    <select
                        onChange={handleInputChange}
                        name="gender"
                        id="cars">
                        <option value={1}>male</option>
                        <option value={2}>female</option>
                    </select>
                </span>}
                <span className="candselctLocation">
                <h1 className='title_log'>location</h1>

                <button
                className='selctLocation'
                 onClick={()=>{
                    setshow(true)
                }}>
                    <img src={require("../../assets/outpu.gif")} alt="loading..." />
                    <h1>location</h1>

                </button></span>
                <button
                    className="sing-don"
                    onClick={() => {handlePost()}}
                >سجل</button>
                {show && <div class="alert">
                    <div class="map-alert">
                        <MapPickera onhange={setregisterData} show={setshow} DefaultLocation={def}></MapPickera>
                    </div>
                </div>}

            </div>
        </>
    )

}


export default RegisterUser



