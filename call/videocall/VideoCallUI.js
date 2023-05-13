import {
  CALLING,
  DISABLE,
  ENABLE,
  HIDE,
  IDLE,
  INCOMING_RINGTONE,
  OUTGOING_RINGTONE,
  ringtone,
  setAnswerPulse,
  setState,
  setVisibility,
  SHOW,
  setText,
} from "../common/common.js";
import { ip, url } from "./constants.js";
const temp = window.location.search.slice(
  window.location.search.indexOf("image=")
);
const muteMic = `<svg
xmlns="http://www.w3.org/2000/svg"
id="OBJECT"
viewBox="0 0 32 32"
width="31.179"
height="47.43"
>
<path
  fill="#fff"
  d="m30.71 29.29-6.27-6.29a10.92 10.92 0 0 0 2.56-7 1 1 0 0 0 -2 0 9 9 0 0 1 -2 5.61l-2.57-2.61a6 6 0 0 0 1.57-4v-8a6 6 0 0 0 -12 0v1.59l-7.29-7.3a1 1 0 0 0 -1.42 1.42l28 28a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zm-18.71-22.29a4 4 0 0 1 8 0v8a3.94 3.94 0 0 1 -1 2.6l-7-7z"
/>
<path
  fill="#fff"
  d="m16.74 21-2.26-2.3a4.08 4.08 0 0 1 -2.18-2.18l-2.3-2.31v.79a6 6 0 0 0 6 6 6.13 6.13 0 0 0 .74 0z"
/>
<path
  fill="#fff"
  d="m19.89 24.1a9 9 0 0 1 -12.89-8.1 1 1 0 0 0 -2 0 11 11 0 0 0 10 11v3a1 1 0 0 0 2 0v-3.07a10.79 10.79 0 0 0 4.37-1.34z"
/>
</svg>`;
const unMuteMic = `<svg
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
version="1.1"
id="Capa_1"
x="0px"
y="0px"
width="31.179"
height="47.43"
viewBox="0 0 475.085 475.085"
xml:space="preserve"
>
<g>
  <g>
    <path
      fill="#fff"
      d="M237.541,328.897c25.128,0,46.632-8.946,64.523-26.83c17.888-17.884,26.833-39.399,26.833-64.525V91.365    c0-25.126-8.938-46.632-26.833-64.525C284.173,8.951,262.669,0,237.541,0c-25.125,0-46.632,8.951-64.524,26.84    c-17.893,17.89-26.838,39.399-26.838,64.525v146.177c0,25.125,8.949,46.641,26.838,64.525    C190.906,319.951,212.416,328.897,237.541,328.897z"
    />
    <path
      fill="#fff"
      d="M396.563,188.15c-3.606-3.617-7.898-5.426-12.847-5.426c-4.944,0-9.226,1.809-12.847,5.426    c-3.613,3.616-5.421,7.898-5.421,12.845v36.547c0,35.214-12.518,65.333-37.548,90.362c-25.022,25.03-55.145,37.545-90.36,37.545    c-35.214,0-65.334-12.515-90.365-37.545c-25.028-25.022-37.541-55.147-37.541-90.362v-36.547c0-4.947-1.809-9.229-5.424-12.845    c-3.617-3.617-7.895-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426c-3.618,3.616-5.426,7.898-5.426,12.845v36.547    c0,42.065,14.04,78.659,42.112,109.776c28.073,31.118,62.762,48.961,104.068,53.526v37.691h-73.089    c-4.949,0-9.231,1.811-12.847,5.428c-3.617,3.614-5.426,7.898-5.426,12.847c0,4.941,1.809,9.233,5.426,12.847    c3.616,3.614,7.898,5.428,12.847,5.428h182.719c4.948,0,9.236-1.813,12.847-5.428c3.621-3.613,5.431-7.905,5.431-12.847    c0-4.948-1.81-9.232-5.431-12.847c-3.61-3.617-7.898-5.428-12.847-5.428h-73.08v-37.691    c41.299-4.565,75.985-22.408,104.061-53.526c28.076-31.117,42.12-67.711,42.12-109.776v-36.547    C401.998,196.049,400.185,191.77,396.563,188.15z"
    />
  </g>
</g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
</svg>`;
const onCamera = `<svg
xmlns="http://www.w3.org/2000/svg"
fill="#fff"
width="50.101"
height="46.289"
viewBox="0 0 24 24"
>
<path
  d="m2.53038 1.46967c-.29289-.29289-.76777-.29289-1.06066 0s-.29289.76777 0 1.06066l1.79539 1.7954c-.08105.01443-.15935.03161-.23563.05205-1.2941.34675-2.304901 1.35755-2.651652 2.65165-.128257.47866-.128073 1.03681-.127804 1.85477l.000025.1158v5.2.0321c-.000007.8128-.000013 1.4685.043364 1.9994.044662.5466.139021 1.0267.365362 1.471.359525.7056.933205 1.2792 1.638815 1.6388.44421.2263.92435.3207 1.47099.3653.53091.0434 1.18651.0434 1.99935.0434h.03212 7.19995c1.5382 0 2.86-.926 3.4384-2.251l5.0313 5.0313c.2929.2929.7678.2929 1.0607 0s.2929-.7677 0-1.0606l-6-6-11.00002-11.00003zm.88733 4.357c.23223-.06223.52721-.07438 1.27201-.07633l10.54158 10.54156c-.1431 1.1047-1.0875 1.9581-2.2313 1.9581h-7.19995c-.85245 0-1.44669-.0006-1.90932-.0384-.45388-.0371-.71464-.1062-.91216-.2068-.42336-.2158-.76757-.56-.98329-.9833-.10064-.1975-.16977-.4583-.20685-.9122-.0378-.4626-.03838-1.0568-.03838-1.9093v-5.2c0-.97826.00644-1.32026.07667-1.58234.20805-.77646.81453-1.38294 1.59099-1.59099zm7.78229-.07667c.8525 0 1.4467.00058 1.9094.03838.4538.03708.7146.10622.9121.20686.4234.21571.7676.55992.9833.98328.1007.19752.1698.45828.2069.91216.0378.46263.0383 1.05687.0383 1.90932v1.7h1.5v-1.7-.03212c.0001-.81283.0001-1.46844-.0433-1.99935-.0447-.54664-.139-1.02678-.3654-1.47099-.3595-.70561-.9332-1.27929-1.6388-1.63881-.4442-.22635-.9243-.3207-1.471-.36537-.5309-.04337-1.1865-.04337-1.9994-.04336h-.0321-1.69995v1.5zm12.55 2.99104c0-1.35064-1.4651-2.19216-2.6317-1.51162l-2 1.16667c-.5377.31362-.8683.8892-.8683 1.51161v4.1846c0 .6224.3306 1.198.8683 1.5116l2 1.1667c1.1666.6805 2.6317-.161 2.6317-1.5116zm-1.8759-.21595c.1666-.09722.3759.023.3759.21595v6.51796c0 .1929-.2093.3131-.3759.2159l-2-1.1667c-.0768-.0448-.1241-.127-.1241-.2159v-4.1846c0-.08891.0473-.17114.1241-.21594z"
  fill="#fff"
/>
</svg>`;
const offCamera = `<svg
xmlns="http://www.w3.org/2000/svg"
width="50.101"
height="46.289"
viewBox="0 0 24 24"
>
<path
  clip-rule="evenodd"
  d="m5.8 4.25h-.0321-.00002c-.81284-.00001-1.46844-.00001-1.99935.04336-.54663.04467-1.02678.13903-1.47099.36537-.70561.35952-1.27929.9332-1.638814 1.63881-.226341.44421-.3207.92436-.365362 1.47099-.043377.53091-.043371 1.18652-.043364 1.99935v.00002.0321 4.4.0321c-.000007.8129-.000013 1.4685.043364 1.9994.044662.5466.139021 1.0267.365362 1.471.359524.7056.933204 1.2792 1.638814 1.6388.44421.2263.92436.3207 1.47099.3653.53091.0434 1.18652.0434 1.99935.0434h.03212 5.4.0321c.8129 0 1.4685 0 1.9994-.0434.5466-.0446 1.0267-.139 1.471-.3653.7056-.3596 1.2792-.9332 1.6388-1.6388.2263-.4443.3207-.9244.3653-1.471.0434-.5309.0434-1.1866.0434-1.9994v-.0321-4.4-.03207c0-.81286 0-1.46848-.0434-1.9994-.0446-.54663-.139-1.02678-.3653-1.47099-.3596-.70561-.9332-1.27929-1.6388-1.63881-.4443-.22634-.9244-.3207-1.471-.36537-.5309-.04337-1.1865-.04337-1.9994-.04336h-.0321zm-2.82148 1.74524c.19752-.10064.45828-.16977.91216-.20686.46263-.0378 1.05687-.03838 1.90932-.03838h5.4c.8525 0 1.4467.00058 1.9093.03838.4539.03709.7147.10622.9122.20686.4233.21571.7675.55992.9833.98328.1006.19752.1697.45829.2068.91216.0378.46263.0384 1.05687.0384 1.90932v4.4c0 .8525-.0006 1.4467-.0384 1.9093-.0371.4539-.1062.7147-.2068.9122-.2158.4233-.56.7675-.9833.9833-.1975.1006-.4583.1697-.9122.2068-.4626.0378-1.0568.0384-1.9093.0384h-5.4c-.85245 0-1.44669-.0006-1.90932-.0384-.45388-.0371-.71464-.1062-.91216-.2068-.42336-.2158-.76757-.56-.98328-.9833-.10064-.1975-.16977-.4583-.20686-.9122-.0378-.4626-.03838-1.0568-.03838-1.9093v-4.4c0-.85245.00058-1.44669.03838-1.90932.03709-.45387.10622-.71464.20686-.91216.21571-.42336.55992-.76757.98328-.98328zm20.77148 2.7458c0-1.35064-1.4651-2.19216-2.6318-1.51162l-2 1.16667c-.5376.31362-.8682.8892-.8682 1.51161v4.1846c0 .6224.3306 1.198.8682 1.5116l2 1.1667c1.1667.6805 2.6318-.161 2.6318-1.5116zm-1.876-.21595c.1667-.09722.376.023.376.21595v6.51796c0 .1929-.2093.3131-.376.2159l-2-1.1667c-.0768-.0448-.124-.127-.124-.2159v-4.1846c0-.08891.0472-.17114.124-.21594z"
  fill="#fff"
/>
</svg>`;
let type = "audio";
let my_image = "";
let second = 0;
const image = temp.slice(temp.indexOf("h"), temp.indexOf("&"));
export default class VideoCallUI {
  constructor(sinchClientWrapper) {
    this.sinchClientWrapper = sinchClientWrapper;
    this.handleMakeCallClick();
    this.isMute = false;
    this.time = document.createElement("p");
    this.interval = null;
    this.callerInfo = null;

    setState("call", DISABLE);
    setState("answer", DISABLE);
    setState("hangup", DISABLE);
    this.params = JSON.parse(
      `{ ${window.location.search
        .replaceAll("=", ":")
        .replaceAll("&", ",")
        .slice(1)
        .split(",")
        .map(
          (params) =>
            `"${params.split(":")[0]}": ${
              +params.split(":")[1]
                ? +params.split(":")[1]
                : '"' + params.split(":")[1] + '"'
            }`
        )
        .join(",")}}`
    );
    this.isCameraOff = type === "audio" ? true : false;
    console.log("is camera off: " + this.isCameraOff);
    this.params.image = image;
    this.params.my_image = my_image;
    document.getElementById(
      "caller_name"
    ).innerHTML = `${this.params.name} <span></span>`;
    document.getElementById("caller_image").src = this.params.image;
  }

  onClientStarted(sinchClient) {
    this.setStatus(`Client started for ${sinchClient.userId}`);
    setText("statusclient-userid", `${sinchClient.userId}`);
    setState("call", ENABLE);
    setVisibility("callcontrol", SHOW);
    setVisibility("calldestination", SHOW);
    window.addEventListener("message", function (event) {
      const data = JSON.parse(event.data);
      if (data.message === "start_call") {
        type = data.type;
        this.isCameraOff = data.type;
        my_image = data.image;
        document.getElementById("call").click();
        console.log(event.data);
      }
    });
    window.addEventListener("message", function (event) {
      const data = event.data;
      this.callerInfo = data.from_user;
      console.log(this.callerInfo);
      if (data.message === "cameraOff") {
        const videoImageContainer = document.getElementById(
          "video-image-container-incoming"
        );
        const imageCircle = document.getElementById("circle__image-incoming");
        videoImageContainer && (videoImageContainer.style.display = "block");
        imageCircle && (imageCircle.style.display = "flex");
      } else if (data.message === "cameraOn") {
        const videoImageContainer = document.getElementById(
          "video-image-container-incoming"
        );
        const imageCircle = document.getElementById("circle__image-incoming");
        videoImageContainer && (videoImageContainer.style.display = "none");
        imageCircle && (imageCircle.style.display = "none");
      }
    });
  }

  async makeCall() {
    const callee = this.getCallee();
    this.setStatus(`Make call to ${callee}`);
    await this.handleVideoCloseClick();
    await this.sinchClientWrapper.makeCall(callee);
    document.body.classList.remove("recive_call");
    setState("call", ENABLE);
    setState("answer", DISABLE);
    setState("hangup", ENABLE);
  }
  onOutboundCall(call) {
    this.handleVideoCloseClick();
    this.playRingtone(OUTGOING_RINGTONE);
    this.handleHangupClick(call);
    this.playStream(call.incomingStream, "incoming", false, false);
    this.playStream(call.outgoingStream, "outgoing", false, false);
    this.muteVideoStream("outgoing-video");
    setState("hangup", ENABLE);
    window.addEventListener("message", function (event) {
      if (event.data === "close-call") {
        this.handleHangupClick();
      }
    });
  }
  onIncomingCall(call) {
    this.setStatus(`Incoming call from ${call.remoteUserId}`);
    this.handleAnswerClick(call);
    this.handleHangupClick(call);
    this.playRingtone(INCOMING_RINGTONE);
    setState("call", DISABLE);
    setState("answer", ENABLE);
    setState("hangup", ENABLE);
    setAnswerPulse(CALLING);
    this.playStream(call.incomingStream, "incoming", false, false);
    this.playStream(call.outgoingStream, "outgoing", false, false);
    this.muteVideoStream("outgoing-video");
    fetch(
      `${url}/get-data-by-id?id=${this.params.rec_id.slice(
        this.params.rec_id.indexOf("-") + 1
      )}`
    )
      .then((e) => e.json())
      .then((data) => {
        document.getElementById("caller_image").src = data.data.image;
        document.getElementById("caller_name").innerHTML =
          data.data.full_name ?? "No Name" + " <span></span>";
      });
    document.body.classList.add("recive_call");
    window.parent.postMessage("reciveCall", "*");
    window.addEventListener("message", function (event) {
      if (event.data === "close-call") {
        this.handleHangupClick();
      }
    });
  }

  onCallProgressing(call) {
    this.setStatus(`Call progressing ${call.remoteUserId}`);
  }
  onRemoteTrack(call, track) {
    console.log("There Is Track");
    console.log(track);
  }
  onCallEstablished(call, sinchClient) {
    this.setStatus(`Call established with ${call.remoteUserId}`);
    document.body.classList.remove("recive_call");
    this.handleMuteClick(call);
    this.handleVideoCloseClick(call);
    this.handleChangeScreen();
    this.pauseRingtone();
    setVisibility("videos-container", SHOW);
    this.interval = setInterval(() => {
      second += 1;
      this.time.innerText = `${Math.floor(second / 60)
        .toString()
        .padStart(2, "0")}:${Math.floor(second - Math.floor(second / 60) * 60)
        .toString()
        .padStart(2, "0")}`;
    }, 1000);
    document.getElementById("info").style.display = "none";
    setVisibility("calldestination", HIDE);
    setState("call", DISABLE);
    setState("answer", DISABLE);
    setState("hangup", ENABLE);
    setAnswerPulse(IDLE);
    window.addEventListener("message", function (event) {
      if (event.data === "close-call") {
        this.handleHangupClick();
      }
    });
  }
  onCallEnded(call) {
    this.setStatus(`Call ended ${call.remoteUserId}`);
    this.pauseRingtone();
    setVisibility("videos-container", HIDE);
    setVisibility("calldestination", SHOW);
    setState("call", ENABLE);
    setState("hangup", DISABLE);
    setState("answer", DISABLE);
    setAnswerPulse(IDLE);
    this.removeVideoStream("outgoing-video");
    this.removeVideoStream("incoming-video");
    this.time.innerText = "00:00";
    second = 0;
    clearInterval(this.interval);
    window.parent.postMessage("end__call", "*");
    window.location.reload();
  }

  playStream(stream, direction, mute = true, emptyContainer = true) {
    const video = document.createElement("video");
    const videoElement = document.createElement("div");
    videoElement.appendChild(video);
    const videoImageContainer = document.createElement("div");
    const videoImage = document.createElement("img");
    const circleContainer = document.createElement("div");
    const circleImage = document.createElement("div");
    const imgCircle = document.createElement("img");
    circleContainer.setAttribute("class", "circle__image");
    circleContainer.setAttribute("id", `circle__image-${direction}`);
    circleImage.setAttribute("class", "circle__image-container");
    circleImage.setAttribute("id", `circle__image-container`);
    imgCircle.setAttribute("class", "circle__image-img");
    imgCircle.setAttribute("id", `circle__image-img`);
    console.log("wijfweoifjewoifjweoi");
    console.log(my_image, image);
    const userData = JSON.parse(document.cookie.split("userData=")[1]);
    console.log(userData);
    if (direction === "incoming") {
      videoImage.src = image;
      imgCircle.src = image;
      circleContainer.appendChild(this.time);
    } else {
      videoImage.src = userData.image;
      imgCircle.src = userData.image;
    }
    circleImage.appendChild(imgCircle);
    circleContainer.appendChild(circleImage);

    videoImageContainer.appendChild(videoImage);
    videoElement.appendChild(videoImageContainer);
    videoElement.appendChild(circleContainer);
    videoImageContainer.setAttribute(
      "id",
      `video-image-container-${direction}`
    );
    videoImageContainer.setAttribute("class", "video-image-container");
    videoElement.setAttribute("id", `${direction}-video`);
    videoElement.setAttribute("class", `${direction}-video`);
    video.srcObject = stream;

    video.autoplay = true;
    video.playsinline = true;
    video.muted = mute;

    const container = document.getElementById("videos-container");
    if (emptyContainer) {
      container.innerHTML = "";
    }

    container.appendChild(videoElement);
  }

  setStatus(text) {
    setText("statusheader", text);
    console.log(`Status: ${text}`);
  }

  setText(id, text) {
    document.getElementById(id).innerHTML = text;
  }
  handleMakeCallClick() {
    document
      .getElementById("call")
      .addEventListener("click", () => this.makeCall());
  }
  handleChangeScreen() {
    let outgoingStream = document.getElementById("outgoing-video");
    outgoingStream.removeEventListener("click", this.handleScreen);
    this.handleScreen = () => {
      const outgoing = document.getElementById("outgoing-video");
      const incoming = document.getElementById("incoming-video");
      console.log(outgoingStream);
      incoming.className = "outgoing-video";
      incoming.id = "outgoing-video";
      outgoing.className = "incoming-video";
      outgoing.id = "incoming-video";
    };
    outgoingStream.addEventListener("click", this.handleScreen);
  }
  handleHangupClick(call) {
    const hangupElement = document.getElementById("hangup");
    hangupElement.removeEventListener("click", this.handleHangup);
    this.handleHangup = () => call.hangup();
    hangupElement.addEventListener("click", this.handleHangup);
  }
  handleAnswerClick(call) {
    const answerElement = document.getElementById("answer");
    answerElement.removeEventListener("click", this.handleAnswer);
    this.handleAnswer = () => call.answer();
    answerElement.addEventListener("click", this.handleAnswer);
  }
  handleMuteClick(call) {
    const mic = document.getElementById("call_mic");
    mic.removeEventListener("click", this.handleMic);

    this.handleMic = () => {
      if (this.isMute) {
        call.unmute();
        this.isMute = false;
        mic.innerHTML = unMuteMic;
      } else {
        call.mute();
        this.isMute = true;
        mic.innerHTML = muteMic;
      }
    };
    mic.addEventListener("click", this.handleMic);
  }
  handleVideoNotification(action) {
    fetch(`${ip}:8000/api/call/send`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.params.token}`,
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to_user: +this.params.rec_id.slice(this.params.rec_id.indexOf("-") + 1),
        from_user: +this.params.user_id.slice(
          this.params.rec_id.indexOf("-") + 1,
          this.params.rec_id.indexOf("}")
        ),
        message: action,
        type: "camera",
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }
  handleVideoCloseClick(call) {
    const video = document.getElementById("vidoeControll");
    const videoImageContainer = document.getElementById(
      "video-image-container-outgoing"
    );
    const imageCircle = document.getElementById("circle__image-outgoing");
    video.removeEventListener("click", this.handleCloseVideo);
    this.handleCloseVideo = () => {
      if (this.isCameraOff) {
        call?.pauseVideo();
        this.isCameraOff = false;
        video.innerHTML = onCamera;
        this.handleVideoNotification("cameraOff");
        videoImageContainer && (videoImageContainer.style.display = "block");
        imageCircle && (imageCircle.style.display = "flex");
      } else {
        call?.resumeVideo();
        this.isCameraOff = true;
        video.innerHTML = offCamera;
        this.handleVideoNotification("cameraOn");
        videoImageContainer && (videoImageContainer.style.display = "none");
        imageCircle && (imageCircle.style.display = "none");
      }
    };
    this.handleCloseVideo();
    video.addEventListener("click", this.handleCloseVideo);
  }

  muteVideoStream(id) {
    const video = document.getElementById(id);
    video.muted = true;
  }

  removeVideoStream(id) {
    console.log("Action: Remove videosteam ==>", id);
    const videostream = document.getElementById(id);
    videostream?.remove();
  }

  getCallee() {
    return this.params.rec_id;
  }

  playRingtone(directionRingtone) {
    this.ringToneAudio = ringtone(directionRingtone);
    this.ringToneAudio.play();
  }

  pauseRingtone() {
    this.ringToneAudio?.pause();
  }
}
