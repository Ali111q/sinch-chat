import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Qr(props) {
  const [data, setdata] = useState();
  const [path, setpath] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  return (
    <>
      <div className="Qrcode">
        <div>
          <img src={props.data.qr_code_image}/>
        </div>
        <a
        >حفظ الصورة</a>
      </div>
    </>
  );
}
export default Qr;
