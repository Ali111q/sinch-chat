

import { useState,useEffect} from "react"
import { svg } from "./svg"
import "../../new.css"
import Alert from "../home/alert";
function SitingList(props) {
const [This , setThis] = useState(1);
const [showSelcted , setshowSelcted] = useState(false);


    return(
    <>
        <Alert Show={showSelcted} id={"LogOut"} off={setshowSelcted} />
    <div className="sitingList">
        <ul className="sitingListul">
        <li 
        onClick={e=>{
            props.stmov(false)
            setThis(1)
            props.type(1)
        }}
        >
            <h1>الملف الشخصي</h1>
            {svg.pro}
            <div id={This==1?"sitingListulli":"22"}></div>
        </li>
        <li 
        onClick={e=>{
            props.stmov(false)
            setThis(2)
            props.type(2)
        }}
        >
            <h1>تم الحفظ</h1>
            {svg.sv}
            <div id={This==2?"sitingListulli":"22"}></div>
        </li>
        {localStorage.getItem("type")==2&&<li 
        onClick={e=>{
            props.stmov(false)
            setThis(3)
            props.type(3)
        }}
        >
        <h1>إضافة إعلان</h1>
            {svg.Ad}
            <div id={This==3?"sitingListulli":"22"}></div>
        </li>}
        {localStorage.getItem("type")==2&&<li 
        onClick={e=>{
            props.stmov(false)
            setThis(4)
            props.type(4)
        }}
        >
            <h1>إضافة سكرتير</h1>
            {svg.sc}
            <div id={This==4?"sitingListulli":"22"}></div>
        </li>}
        <li 
        onClick={e=>{
            props.stmov(false)
            setThis(5)
            props.type(5)
        }}
        >
            <h1>الإعدادات</h1>
            {svg.st}
            <div id={This==5?"sitingListulli":"22"}></div>
        </li>
        <li 
        onClick={e=>{
            props.stmov(false)
            setThis(6)
            props.type(6)
        }}
        >
            <h1>رمز الاستجابة</h1>
            {svg.qr}
            <div id={This==6?"sitingListulli":"22"}></div>
        </li>
        <li 
        onClick={e=>{
            props.stmov(false)
            setThis(7)
            props.type(7)
        }}
        >
            <h1>اتصل بنا</h1>
            {svg.ca}
            <div id={This==7?"sitingListulli":"22"}></div>
        </li>
        <li 
        onClick={e=>{
            props.stmov(false)
            setThis(8)
            props.type(8)
        }}
        >
            <h1>حول</h1>
            {svg.ho}
            <div id={This==8?"sitingListulli":"22"}></div>
        </li>
        <li 
        onClick={e=>{
            props.stmov(false)
            setThis(9)
            props.type(9)
        }}
        >
            <h1>سياسة الخصوصية</h1>
            {svg.pr}
            <div id={This==9?"sitingListulli":"22"}></div>
        </li>
        <li 
        onClick={e=>{
            setshowSelcted(true)
            setThis(10)
        }}
        >
            <h1>تسجيل خروج</h1>
            {svg.logo}
        </li>
        </ul>
    </div>
    </>
    )
}
export default SitingList