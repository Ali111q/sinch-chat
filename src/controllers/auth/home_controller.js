import { home } from "../../utils/constants";
    


var users = []
var posts = []
function getHomeData(){
   
   return new Promise ((res,rej)=>{
      try {
         var url = home;

         var xhr = new XMLHttpRequest();
         xhr.open("GET", url);
         
         xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
               return res(JSON.parse(xhr.response))
            }};   
         xhr.send();
      } catch (error) {
      }})}
   function  returnData(){
      return new Promise(async(res,rej)=>{
          getHomeData().then((e)=>{
            posts = e.data.posts.items
            return res(e)})
})}
function postAction (id,methode,comment){
   return new Promise((res,rej)=>{
      var url = `https://web.azu-app.com/api/home/posts/${methode}`;

var xhr = new XMLHttpRequest();
xhr.open("POST", url);


xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      return res(JSON.parse(xhr.response).status)
   }};
var data = methode=='comments/store'? `{"post_id":"${id}","comment":"${comment}"}` :`{"id":"${id}"}`;
xhr.send(data);
})}
export {getHomeData,returnData,posts, postAction}