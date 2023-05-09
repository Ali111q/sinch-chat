import Notfcation from "../alirt/notfication"
import "../../new.css"
import SherAlert from "../alirt/sher";
import Search from "../alirt/serch";
import AddPost from "../alirt/addPost_alert";
import RequestAc from "../alirt/requestAc";
import { useEffect,useState } from "react";
import { httpHelper } from "../../helper/http_helper";
import TackeDate from "../alirt/tackDate";
import RequestRj from "../alirt/requestRj";
import LogOut from "../alirt/logout";
import DRorder from "../alirt/DRorder";
import Order from "../alirt/order";
function Alert(props) {

    return(
        <>
        {(props.Show && props.id=="not")&&<Notfcation off={props.off}/>}
        {(props.Show && props.id=="order" && localStorage.getItem("type")== 2)&&<DRorder off={props.off}/>}
        {(props.Show && props.id=="order" && localStorage.getItem("type")!= 2)&&<Order off={props.off}/>}
        {(props.Show && props.id=="sh")&&<SherAlert data={props.data} off={props.off}/>}
        {(props.Show && props.id=="ser")&&<Search data={props.data} run={props.run} off={props.off}/>}
        {(props.Show && props.id=="add")&&<AddPost run={props.run} data={props.data} off={props.off}/>}
        {(props.Show && props.id=="REQAc")&&<RequestAc data={props.data} off={props.off}/>}
        {(props.Show && props.id=="REQRj")&&<RequestRj data={props.data} off={props.off}/>}
        {(props.Show && props.id=="REQTd")&&<TackeDate data={props.data} off={props.off}/>}
        {(props.Show && props.id=="LogOut")&&<LogOut data={props.data} off={props.off}/>}


        </>
    )
}
export default Alert