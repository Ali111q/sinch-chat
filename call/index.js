import { setupLogin } from "./common/common.js";

const keyVisibilityElem = document.getElementById("keyVisibility");
const secretVisibilityElem = document.getElementById("secretVisibility");
const videoCallBtn = document.getElementById("videocall");
const voiceCallBtn = document.getElementById("voicecall");
const numberCallBtn = document.getElementById("numbercall");
const sipCallBtn = document.getElementById("sipcall");

export const demo = function () {
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
  const type = params.type;
  const applicationKey = document.getElementById("key").value;
  const applicationSecret = document.getElementById("secret").value;
  const userid = document.getElementById("userid");
  setupLogin(applicationKey, applicationSecret, params.user_id).then(() => {
    if (window) {
      window.location.href = `videoCall/index.html?user_id=${params.user_id}}&rec_id=${params.rec_id}&image=${params.image}&name=${params.name}&type=${params.callType}`;
    }
  });
};

demo();
// [videoCallBtn, voiceCallBtn, numberCallBtn, sipCallBtn].forEach((btn) => {
//   btn.addEventListener("click", demo);
// });
