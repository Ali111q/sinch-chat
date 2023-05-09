

function regester(account_type_id,full_name,name,mobile,country_id,city_id,image,location,lat,lng,union_id_no,healthcare_specialty_id,date_of_birth,gender){

    return new Promise((res, rej) => {
        var url = "https://web.azu-app.com/api/register";
var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");


if (account_type_id==1) {

    var data =JSON.stringify({
        account_type_id: account_type_id,
        full_name: full_name,
        mobile: `+964${mobile}`,
        country_id: country_id,
        city_id: city_id,
        image:image,
        location:location,
        lat:lat,
        lng:lng,
        date_of_birth: date_of_birth,
        gender: gender,
    });
}else if(account_type_id==7){
    var data =JSON.stringify({
        account_type_id: account_type_id,
        full_name: full_name,
        mobile: `+964${mobile}`,
        country_id: country_id,
        city_id: city_id,
        image:image,
        location:location,
        lat:lat,
        lng:lng,
        union_id_no: union_id_no,
        healthcare_specialty_id: healthcare_specialty_id,
        date_of_birth: date_of_birth,
        gender: gender,
    });

}else if(account_type_id==8){
    var data =JSON.stringify({
        account_type_id: account_type_id,
        full_name: full_name,
        name: name,
        mobile: `+964${mobile}`,
        country_id: country_id,
        city_id: city_id,
        image:image,
        location:location,
        lat:lat,
        lng:lng,
        union_id_no: union_id_no,

    });

}else{
    var data =JSON.stringify({
        account_type_id: account_type_id,
        full_name: full_name,
        name: name,
        mobile: `+964${mobile}`,
        country_id: country_id,
        city_id: city_id,
        image:image,
        location:location,
        lat:lat,
        lng:lng,
        union_id_no: union_id_no,
        date_of_birth: date_of_birth,
        gender: gender,
    });

}
xhr.send(data);
xhr.onload=()=>{
  if(JSON.parse( xhr.response).status) { 
    localStorage.setItem('phone',mobile)
    res(true)}else{res(false)}
}})}

export {regester}