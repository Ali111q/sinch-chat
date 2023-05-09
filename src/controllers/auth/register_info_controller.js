const path = "http://192.168.12.196/api";
function getCon() {
  return new Promise((res, rej) => {
    var url = `${path}/countries`;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        return res(JSON.parse(xhr.response));
      }
    };

    xhr.send();
  });
}
function getHe() {
  return new Promise((res, rej) => {
    var url = `${path}/healthcare_specialties`;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        return res(JSON.parse(xhr.response));
      }
    };
    xhr.send();
  });
}
function getType() {
  return new Promise((res, rej) => {
    var url = `${path}/account_types`;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("Accept-Language", "en");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        return res(JSON.parse(xhr.response));
      }
    };
    xhr.send();
  });
}
export { getCon, getHe, getType };
