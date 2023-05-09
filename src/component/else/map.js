import React, { useState, useEffect } from "react";
import MapPicker from "react-google-map-picker";


const DefaultZoom = 10;

const MapPickera = (props) => {
    const DefaultLocation = props.DefaultLocation.lat ? props.DefaultLocation : { lat: 33.2938487, lng: 44.4251367 };
    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);

    function handleChangeLocation(lat, lng) {
        setLocation({ lat: lat, lng: lng });
        props.onhange(e => {
            console.log(e);
            return {
                ...e,
                lat: lat,
                 lng: lng
            }

        })
    }
    function handleLocation(props) {
        var url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${props.lat},${props.lng}&language=ar&key=${props.apiKey}`;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.onreadystatechange = function () {
           if (xhr.readyState === 4) {
              console.log(xhr.status);
              props.set(e => {
                console.log(e);
                return {
                    ...e,
                    location:JSON.parse(xhr.response).results[3].formatted_address

                }
    
            })
             
           }};
        xhr.send();
    }
    function handleChangeZoom(newZoom) {
        setZoom(newZoom);
    }

    function handleResetLocation() {
        setDefaultLocation({ ...DefaultLocation });
        setZoom(DefaultZoom);
    }

    return (
        <>
            <MapPicker
                defaultLocation={defaultLocation}
                zoom={zoom}
                style={{ height: '80vh' }}
                className="map_map"
                onChangeLocation={handleChangeLocation}
                onChangeZoom={handleChangeZoom}
                apiKey="AIzaSyDtYZCH92-eusQCrQByzDeN79a0L1MB5HI"
            />
            <button
                onClick={() => {
                    handleResetLocation()
                }}
                className="map-point"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.688 28.688">
                    <path id="path" d="M28.449,18.148a11.647,11.647,0,0,1-10.3,10.3v1.434a1.3,1.3,0,1,1-2.608,0V28.449a11.41,11.41,0,0,1-10.3-10.3H3.8a1.3,1.3,0,1,1,0-2.608H5.238a11.41,11.41,0,0,1,10.3-10.3V3.8a1.3,1.3,0,1,1,2.608,0V5.238a11.647,11.647,0,0,1,10.3,10.3h1.434a1.3,1.3,0,1,1,0,2.608ZM16.844,25.972a9.128,9.128,0,1,0-9.128-9.128,9.072,9.072,0,0,0,9.128,9.128Zm0-3.912a5.216,5.216,0,1,1,5.216-5.216,5.231,5.231,0,0,1-5.216,5.216Zm0-2.608a2.608,2.608,0,1,0-2.608-2.608,2.616,2.616,0,0,0,2.608,2.608Z" transform="translate(-2.5 -2.5)" fill="#2a2d37" />
                </svg>
            </button>
            <button className="map-save" onClick={() => {
                handleLocation({
                    ...location,
                    apiKey:"AIzaSyBe24p6TkeQzDxl7kH1iuDdI5Iyxmbsoqk",
                    set:props.onhange
                })
                props.show(false)
            }}>حفظ</button>
        </>
    );
};


export default MapPickera;