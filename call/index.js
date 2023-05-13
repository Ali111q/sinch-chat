import { setupLogin } from "./common/common.js";

const keyVisibilityElem = document.getElementById("keyVisibility");
const secretVisibilityElem = document.getElementById("secretVisibility");
const videoCallBtn = document.getElementById("videocall");
const voiceCallBtn = document.getElementById("voicecall");
const numberCallBtn = document.getElementById("numbercall");
const sipCallBtn = document.getElementById("sipcall");
export const demo = function () {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      // The stream has been successfully captured
    })
    .catch((err) => {
      // There was an error capturing the stream
    });
  const temp = window.location.search.slice(
    window.location.search.indexOf("image=")
  );
  const image = temp.slice(temp.indexOf("h"), temp.indexOf("&"));
  const params = JSON.parse(
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
  params.image = image;
  const applicationKey = document.getElementById("key").value;
  const applicationSecret = document.getElementById("secret").value;
  setupLogin(applicationKey, applicationSecret, params.user_id).then(() => {
    if (window) {
      window.location.href = `videoCall/index.html?user_id=${params.user_id}}&rec_id=${params.rec_id}&image=${params.image}&name=${params.name}&type=${params.type}`;
    }
  });
};

demo();
