
function dataState(props) {
    
 const data= [
    //this list for pation user
    {
        full_name: "",
        mobile: "",
        account_type: props.accountName,
        account_type_id: Number.parseInt(props.id),
        gender: 1,
        country_id: 0,
        city_id: 0,
        lat: 33.2938487,
        lng: 44.4251367,
        date_of_birth: "",
        location: "none"
    },
    // this data list for healthcare type
    {
        full_name: "",
        name: "",
        mobile: "",
        account_type: props.accountName,
        account_type_id: Number.parseInt(props.id),
        union_id_no: "",
        healthcare_specialty_id: "",
        gender: 1,
        country_id: 0,
        city_id: 0,
        lat: 33.2938487,
        lng: 44.4251367,
        date_of_birth: "",
        location: "none"
    },
    // this data list for hospital user 
    {
        full_name: "",
        name: "",
        mobile: "",
        account_type: props.accountName,
        account_type_id: Number.parseInt(props.id),
        union_id_no: "",
        country_id: 0,
        city_id: 0,
        lat: 33.2938487,
        lng: 44.4251367,
        location: "none"
    },
    //this list for else
    {
        full_name: "",
        name: "",
        mobile: "",
        account_type: props.accountName,
        account_type_id: Number.parseInt(props.id),
        mage: "",
        union_id_no: "",
        gender: 1,
        country_id: 0,
        city_id: 0,
        lat: 33.2938487,
        lng: 44.4251367,
        date_of_birth: "",
        location: "none"
    },
]
if (props.id==1) {
    return data[0]
} else if(props.id==7) {
    return data[1]
}else if(props.id==8) {
    return data[2]
}else{
    return data[3]
}
}
export {dataState}