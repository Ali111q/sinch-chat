function httpHelper(link, headers, data, method) {
  return new Promise((res, rej) => {

    var url = link;

    var xhr = new XMLHttpRequest();

    xhr.open(method.toUpperCase(), url);

    headers.length == 0 ? xhr.setRequestHeader("Content-Type", "application/json")
    :headers.map(e => {
      console.log('fghj');
      xhr.setRequestHeader(e.key, e.value);
    })
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log();
        return res(JSON.parse(xhr.response))
      }
    };
    console.log(data)
    xhr.send(JSON.stringify(data));
  })

}


//----------------------------------------------------------------------------------------



function postAction (id,methode,comment){
  return new Promise((res,rej)=>{
     var url = `https://web.azu-app.com/api/home/posts/${methode}`;

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Authorization", `Bearer ${localStorage.getItem('token')}`);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
     console.log(xhr.status);
     console.log(xhr.responseText);
     return res(JSON.parse(xhr.response).status)
  }};
var data = methode=='comments/store'? `{"post_id":"${id}","comment":"${comment}"}` :`{"id":"${id}"}`;
xhr.send(data);
})}



export {
  httpHelper,
  postAction

}