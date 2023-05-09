import React from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import "./profile.css";

const ProfileMap = (props) => {
  return (
    <Map
      google={props.google}
      zoom={14}
      initialCenter={{ lat: props.lat, lng: props.lng }}
    >
      <Marker position={{ lat: props.lat, lng: props.lng }} />
    </Map>
  );
};
const Loading = () => (
  <div id="wrapper">
    <div class="profile-main-loader">
      <div class="loader">
        <svg class="circular-loader" viewBox="25 25 50 50">
          <circle
            class="loader-path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="#70c542"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  </div>
);

export default GoogleApiWrapper((props) => ({
  apiKey: "AIzaSyBe24p6TkeQzDxl7kH1iuDdI5Iyxmbsoqk",
  LoadingContainer: Loading,
}))(ProfileMap);
