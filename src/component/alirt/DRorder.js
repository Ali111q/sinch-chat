import {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
function DRorder(props) {
    const [path, setpath] = useState();
    const navigate = useNavigate();
    useEffect(() => {
      path && navigate(path);
    }, [path]);
  return (
   <>
   <div className='alert' onClick={()=>{
    props.off(false)
    }}></div>
   <div className='TheDrDashbordalert'>
   <svg xmlns="http://www.w3.org/2000/svg" width="67" height="4" viewBox="0 0 67 4">
  <path id="Path_54411" data-name="Path 54411" d="M0,0H63" transform="translate(2 2)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="4" opacity="0.23"/>
  </svg>
    <ul>
        <li className='TheDrDashbordalertFirst'>
            <button onClick={()=>{
             setpath(`/OrderList/0`)
            }}>Consultations</button>
            <button onClick={()=>{
             setpath(`/OrderList/1`)
            }}>Bookings</button>
        </li>
    </ul>
   </div>
   </>
  )
}

export default DRorder