import React, { Component } from "react";
import Settings from "../components/settings/setting";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import MobSetting from "../components/setting/mobSetting";
import Footer from "../components/home/footer";
function settings() {
  return (
    <>
      <section>
        <DeviceOrientation lockOrientation={"landscape"}>
          <Orientation orientation="portrait" alwaysRender={false}>
            <MobSetting></MobSetting>
          </Orientation>
          <Orientation orientation="landscape" alwaysRender={false}>
            <Settings></Settings>
          </Orientation>
        </DeviceOrientation>
      </section>
    </>
  );
}

export default settings;
