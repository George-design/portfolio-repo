import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div id='home'>
      <div className='home-content'>
        <p>Hello I'm</p>
        <h2>George Irungu</h2>
        <p>Fullstack developer</p>
        <div className='home-content-btn'>
          <input type='button' value='Download CV' />
          <input type='button' value="Let's talk" />
        </div>
      </div>
      <div className='home-image'></div>
    </div>
  );
};

export default Home;
