import { useNavigate } from "react-router-dom";
function Back(props) {
    const navigate = useNavigate() 
    return(<>
    <div className="BackNv">
        <button style={{opacity:props.edt?"1":"0"}}>
        {
        props.edt?
                <h1 onClick={e=>{props.Go(true)}}>
                    ...
                </h1>
        :
        <svg  xmlns="http://www.w3.org/2000/svg"viewBox="0 0 6.5 11.5">
        <path id="Arrow" d="M.22,10.22A.75.75,0,0,0,1.28,11.28l5-5a.75.75,0,0,0,0-1.061l-5-5A.75.75,0,0,0,.22,1.28l4.47,4.47Z" fill="#2a2d37"/>
        </svg>
            }
        </button>
        <h1>
            {props.title}
        </h1>
        <button onClick={()=>{
           navigate(props.path) 
        }}>
            
        <svg  xmlns="http://www.w3.org/2000/svg"viewBox="0 0 6.5 11.5">
        <path id="Arrow" d="M.22,10.22A.75.75,0,0,0,1.28,11.28l5-5a.75.75,0,0,0,0-1.061l-5-5A.75.75,0,0,0,.22,1.28l4.47,4.47Z" fill="#2a2d37"/>
        </svg>
        </button>
    </div>
    </>
    )
    
}

export default Back