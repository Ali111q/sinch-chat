import "./card.css";
import Img from "../../image-circle/image";
import H from "../../text/text";
import { useNavigate } from "react-router-dom";
function MOCard(props) {
  const navigate = useNavigate()
  return (
    <div className="card-mo-con">
      <Img
        ZP={6}
        ZM={20}
        src={props.image ?props.image : props.data.user_image}
        style={{
          left: "0",
          zIndex: "2",
          position: "absolute",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          border: "solid #F7227F 0.5vw",
        }}
      />
      {localStorage.getItem("type") == 2 ? (
        <div className="card-mo-body">
          <H t={3}>Patient Name: {props.data.patient_name}</H>
          <H style={{ marginLeft: "3vw" }} t={3}>
            Gender: {props.data.gender}
          </H>
          <H style={{ marginLeft: "3vw" }} t={3}>
            Age: {props.data.age}
          </H>
          <H t={3}>
            Id: {props.data.id} Date: {props.data.date}
          </H>
        </div>
      ) : (
        <div style={{height:"13vw"}} className="card-mo-body" 
        onClick={()=>{
          navigate(`/show-patient/${props.data.update_id}`)
        }}
        >
          <H style={{ marginLeft: "3vw" }} t={3}>Patient Name: {props.data.user_info.name}</H>
          <H style={{ marginLeft: "3vw" }} t={3}> Date: {props.data.user_info.date}</H>
        </div>
      )}
    </div>
  );
}

export default MOCard;
