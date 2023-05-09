import React, { useEffect, useState } from "react";
import { httpHelper, postAction } from "../../helper/http_helper";
import { useParams, useNavigate } from "react-router-dom";

function HighligthsView(props) {
  const story = props.data
  const [itemidex,setitemindex] = useState(0)
return (
  <>
 <div className="storyScreen">


        <div className="storyScreenCon">
          <div
            className="ClickL"
            onClick={e=>{
              if (itemidex>0) {
                setitemindex(e=>e-1)
              }
              if (itemidex==0) {
                    props.show(false)
                }
            }}
          >
          </div>
          <div
            className="ClickR"
            onClick={e=>{
              if (itemidex<story.stories_available_objs.length-1) {
                setitemindex(e=>e+1)
              }
              if (itemidex == story.stories_available_objs.length-1){
                props.show(false)
              }
            }}
          >
          </div>
          <img
            className="storyScreenConimage"
            src={story.stories_available_objs[itemidex].file}
          />
          <ul className="storyScreenConul">
            {
              story.stories_available_objs.map((e,idex)=>{
                return(
                  <li id={ 
                    itemidex < idex ?
                     "seeen":
                     ""
                     }>
                    <h1>.</h1>
                    <h1>.</h1>
                  </li>
                )
              })
            }


          </ul>
          <div className="storyScreenConulUserInfo">
            <div className="storyScreenConulUserInfobutton">
              <button
                onClick={(e) => {
                    props.show(false)
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 13.683 13.684"
                >
                  <path
                    id="Icon"
                    d="M-5.016.439A1.343,1.343,0,0,0-5.006,2.3a1.353,1.353,0,0,0,1.856.01L1.457-2.3,6.063,2.3A1.32,1.32,0,0,0,7.929.429l-4.6-4.6,4.6-4.606a1.334,1.334,0,0,0-.01-1.856,1.324,1.324,0,0,0-1.856-.01l-4.606,4.6-4.606-4.606a1.353,1.353,0,0,0-1.856.01,1.356,1.356,0,0,0-.01,1.866L-.41-4.167Z"
                    transform="translate(5.383 11.014)"
                    fill="#fff"
                  />
                </svg>
              </button>
            </div>

            <span>
              <h1>{story.stories_available_objs[itemidex].createdTime}</h1>
              <h1>{story.user_name}</h1>
              <img src={story.image}></img>
            </span>
          </div>
          <div className="storyScreenConulFoter">
            <h1>مشاهدة ({story.stories_available_objs[itemidex].views_no})</h1>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 20">
              <path
                d="M12.987,20C7.619,20,2.793,16.393.076,10.351a.874.874,0,0,1,0-.714C2.79,3.6,7.616,0,12.987,0H13a12.4,12.4,0,0,1,7.457,2.557,17.872,17.872,0,0,1,5.466,7.08.874.874,0,0,1,0,.714C23.207,16.393,18.376,20,13,20ZM7.927,10A4.965,4.965,0,0,0,13,14.836,4.958,4.958,0,0,0,18.06,10,4.963,4.963,0,0,0,13,5.151,4.97,4.97,0,0,0,7.927,10Zm1.9,0A2.994,2.994,0,0,1,9.895,9.4h.063a2.552,2.552,0,0,0,2.6-2.4A2.687,2.687,0,0,1,13,6.967,3.1,3.1,0,0,1,16.16,10,3.1,3.1,0,0,1,13,13.015,3.1,3.1,0,0,1,9.831,10Z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>    </div>


  </>
);
}
export default HighligthsView;


