import SwiperStory from "../../component/home/storyList";
import Posts from "../../component/home/posts";
import { httpHelper } from "../../helper/http_helper";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { home } from "../../utils/constants";
import axios from "axios";
import Loadind from "../../assets/imgs/newLoading.gif";
function Home(props) {
  const [PostsData, setPostsData] = useState();
  const [isLoding, setisLoding] = useState(true);
  const [checkHeigth, setcheckHeigth] = useState();
  const [pages, setpages] = useState();
  const [story, setstory] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    httpHelper(
      home,
      [
        {
          key: "Authorization",
          value: `Bearer ${localStorage.getItem("token")}`,
        },
      ],
      {},
      "get"
    ).then((e) => {
      setPostsData(e.data.posts.items);
      setstory(e.data.users.items);
      setpages(e.data.posts.pages);
      sessionStorage.setItem("storyData", JSON.stringify(e.data.users.items));
      console.log(e.data.posts.pages);
      console.log(e);
    });
  }, []);
  function anyScroll() {
    if (checkHeigth) {
      var h = document.getElementById("offsetHeight");
      var a = document.getElementById("anyScroll");
      var height = h.offsetHeight;
      var num = PostsData.length;
      var avr = height / num;
      var per = num - 3;
      var last = avr * per;
      if (a.scrollTop > last) {
        setcheckHeigth(false);
        console.log(pages.next_page_url);
        if (pages.next_page_url != null) {
          httpHelper(
            pages.next_page_url,
            [
              {
                key: "Authorization",
                value: `Bearer ${localStorage.getItem("token")}`,
              },
            ],
            {},
            "get"
          ).then((e) => {
            console.log(e);
            var mYlist = PostsData;
            setcheckHeigth(false);
            mYlist.push(...e.data.posts.items);
            setpages(e.data.posts.pages);
            setPostsData(mYlist);
          });
        } else {
          setisLoding(false);
        }
      }
    }
  }
  return (
    <>
      <div
        id="anyScroll"
        onScroll={anyScroll}
        style={{ width: "100%", height: "100vh", overflowY: "scroll" }}
      >
        <SwiperStory run={props.run} data={story} />
        <div id="offsetHeight">
          {PostsData && (
            <Posts
              checkHeigth={setcheckHeigth}
              data={PostsData}
              run={props.run}
            />
          )}
        </div>
        {isLoding && (
          <div className="lodingHome">
            <img src={Loadind} />
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
