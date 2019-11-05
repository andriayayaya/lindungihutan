import React from 'react';
import Navbar from '../../component/navbar';
import Navigations from '../../component/navigation';
import Card from '../../component/card';
import ImgCard from'../../component/card2';
import  MediaControlCards from '../../component/card3';
import Card4 from'../../component/card4';
import Card5 from'../../component/card5';
import SLKP from '../../component/selengkapnya';


function Home() {
  return (
    <div className="App">
      <Navbar />
      <Navigations />
      <Card />
      <ImgCard />
      < MediaControlCards />
      <Card4 />
      <Card5 />
      <SLKP />
    </div>
  );
}

export default Home;
