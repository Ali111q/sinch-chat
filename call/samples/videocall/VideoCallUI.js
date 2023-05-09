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
const temp = window.location.search.slice(
  window.location.search.indexOf("image=")
);

const image = temp.slice(temp.indexOf("h"), temp.indexOf("&"));
export default class VideoCallUI {
  constructor(sinchClientWrapper) {
    this.sinchClientWrapper = sinchClientWrapper;
    this.handleMakeCallClick();
    setState("call", DISABLE);
    setState("answer", DISABLE);
    setState("hangup", DISABLE);
    this.params = JSON.parse(
      `{${window.location.search
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
    this.params.image = image;
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
      if (event.data === "start_call") {
        document.getElementById("call").click();
        console.log(event.data);
      }
    });
  }

  async makeCall() {
    const callee = this.getCallee();
    this.setStatus(`Make call to ${callee}`);
    await this.sinchClientWrapper.makeCall(callee);
    document.body.classList.remove("recive_call");

    setState("call", ENABLE);
    setState("answer", DISABLE);
    setState("hangup", ENABLE);
  }

  onOutboundCall(call) {
    this.playRingtone(OUTGOING_RINGTONE);
    this.handleHangupClick(call);
    this.playStream(call.incomingStream, "incoming", true, true);
    this.playStream(call.outgoingStream, "outgoing", false, false);
    this.muteVideoStream("outgoing-video");
    setState("hangup", ENABLE);
  }
  onIncomingCall(call) {
    this.setStatus(`Incoming call from ${call.remoteUserId}`);
    this.handleAnswerClick(call);
    this.handleMuteClick(call);
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
      `http://192.168.0.114/api/get-data-by-id?id=${this.params.rec_id.slice(
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
  }

  onCallProgressing(call) {
    this.setStatus(`Call progressing ${call.remoteUserId}`);
  }

  onCallEstablished(call) {
    this.setStatus(`Call established with ${call.remoteUserId}`);
    document.body.classList.remove("recive_call");
    this.pauseRingtone();
    setVisibility("videos-container", SHOW);
    document.getElementById("info").style.display = "none";
    setVisibility("calldestination", HIDE);
    setState("call", DISABLE);
    setState("answer", DISABLE);
    setState("hangup", ENABLE);
    setAnswerPulse(IDLE);
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
    const videoTracks = call.outgoingStream.getVideoTracks();
    videoTracks.forEach((track) => track.stop());
    window.parent.postMessage("end__call", "*");
  }

  playStream(stream, direction, mute = true, emptyContainer = true) {
    const videoElement = document.createElement("video");
    videoElement.setAttribute("id", `${direction}-video`);
    videoElement.setAttribute("class", `${direction}-video`);
    videoElement.srcObject = stream;

    videoElement.autoplay = true;
    videoElement.playsinline = true;
    videoElement.muted = mute;

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
    this.handleMic = () => call.mute();
    mic.addEventListener("click", this.handleMic);
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
