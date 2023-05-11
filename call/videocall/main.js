function minCall() {
  const exitFullScreen = document.getElementById("exit_fullscreen");
  const body = document.body;
  exitFullScreen.addEventListener("click", () => {
    console.log("HEllo");
    console.log("Clicked");
    window.parent.postMessage("min_call_screen", "*");
  });
  window.addEventListener("message", function (event) {
    if (event.data === "min_call_screen") {
      body.classList.add("min_call_screen");
    }
  });
  document.body.addEventListener("click", () => {
    if (body.classList.contains("min_call_screen")) {
      body.classList.remove("min_call_screen");
      window.parent.postMessage("remove_min_call_screen", "*");
    }
  });
}
minCall();
document.forms[0].onsubmit = (e) => e.preventDefault();
