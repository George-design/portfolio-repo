import React from "react";
import "./home.css";
import homeImage from "../../images/me.png";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Home = () => {
  return (
    <div className='home-section'>
      <div id='home'>
        <div className='home-content left'>
          <div className='icons'>
            <a href='#'>
              <AiOutlineLinkedin />
            </a>
          </div>
          <div className='icons'>
            <a href='#'>
              <AiOutlineGithub />
            </a>
          </div>
          <div className='icons'>
            <a href='#'>
              <AiOutlineInstagram />
            </a>
          </div>
          <div className='icons div'></div>
        </div>

        <div className='center'>
          <div className='home-content'>
            <p>Hello I'm</p>
            <h2>Lemuel Macharia</h2>
            <p>Fullstack developer</p>
            <div className='home-content-btn'>
              <input type='button' value='Download CV' id='btn-download' />
              <input type='button' value="Let's talk" id='btn-talk' />
            </div>
          </div>

          <div className='home-image'>
            <img src={homeImage} />
          </div>
        </div>

        <div className='home-content right'>
          <a href='#'>scroll down</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
