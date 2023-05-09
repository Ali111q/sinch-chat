import  QRCode  from "qrcode"
import {useEffect, useState} from "react"

function QrCode() {
        const url= 'https://linktr.ee/nun_cars';
        const [qrCode, setQrCode] = useState('')
        const generateQrCode=()=>{
            QRCode.toDataURL(url,(err,url)=>{
                if(err)return console.error(err);
                setQrCode(url)
                console.log(url);
            })
        }
useEffect(()=>{

    generateQrCode()
},[])
    return (
    <>
       <div class="setingcontant-qr">
     <div class="img-cont-qr">
            <img srcSet={qrCode} alt=""/>
        </div>
        <a class="save-qrcode" href={qrCode} download="qrCode.png" >حفظ الصورة</a>

        </div>
    </>
    )
  }


export default QrCode
