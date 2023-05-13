import Echo from "laravel-echo";
import Pusher from "pusher-js";

export default function Notification() {
  const { id, token } = JSON.parse(localStorage.getItem("userData") || "{}");
  const echo = new Echo({
    broadcaster: "pusher",
    key: "osamah",
    cluster: "mt1",
    wsHost: "192.168.0.114",
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
    authEndpoint: "http://192.168.0.114:8000/api/broadcasting/auth",
    auth: {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
  echo.connector.pusher.connection.bind("connected", () => {
    console.log("Pusher Has Been Connected");
  });
  echo.private(`call.${id}`).listen(".call", (data) => {
    const iframe = document.querySelector("iframe");
    iframe.contentWindow.postMessage(data.data, "*");
  });
}
