import { useState } from "react";
import axios from "axios";

function File(props) {
  const [image, setImage] = useState('')

  const handleChange = (e) => {
    setImage(e.target.files[0])
  }
  const handleApi = () => {
    var data=[{key:"full_name",value:"3434r"},{key:"mobile",value:"34434343433"},{key:"account_type",value:"patient"},{key:"account_type_id",value:1},{key:"gender",value:1},{key:"country_id",value:1},{key:"city_id",value:"4"},{key:"date_of_birth",value:"2022-11-16"}];
    const url = 'https://web.azu-app.com/api/register'
    const formData = new FormData()
    formData.append('image', image)
    axios.post(url, formData).then(result => {
      alert('success')
    })
      .catch(error => {
        alert('service error')
      })
  }

  return (
    <div>
      IMAGE UPLOAD
      <input type="file" onChange={handleChange} /> <br />
      <button onClick={handleApi} >SUBMIT</button>
    </div>
  );
}

export default File;