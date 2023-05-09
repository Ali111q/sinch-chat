import  AppBar  from '../components/home/appBar';
import Instastory from '../components/home/storyList';
import Instastorymob from '../components/home/storyListmob';
import Posts from '../components/home/posts';
import DeviceOrientation, { Orientation } from 'react-screen-orientation' 
import Footer from '../components/home/footer';
import { useEffect } from 'react';
import { getHomeData, posts, returnData } from '../controllers/home_controller';

function Home() {



  return (
    <>
      <section> 
      <DeviceOrientation lockOrientation={'landscape'}>
      <Orientation orientation='portrait' alwaysRender={false}>
      <Instastorymob></Instastorymob>

      <Posts/>
 <Footer/>

    </Orientation>
    <Orientation orientation='landscape' alwaysRender={false}>
      <AppBar/>
      <Instastory></Instastory>


  

      <Posts/>
     
        </Orientation></DeviceOrientation>
       </section>
    </>
  );


}

export default Home;