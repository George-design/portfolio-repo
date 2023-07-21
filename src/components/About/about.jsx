import React from "react";
import "./about.css";
import aboutImage from "../../images/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";

const About = () => {
  return (
    <div id='about-section'>
      <div id='about'>
        <div className='about-header'>
          <h3>Get to know</h3>
          <h2>About Me</h2>
        </div>
        <div className='about-content'>
          <div className='about-content-image'>
            <img src={aboutImage} />
          </div>
          <div className='about-content-content'>
            <div className='about-content-content-card'>
              <div className='card'>
                <i>
                  <FaAward />
                </i>
                <h3>Experience</h3>
                <p>3+ Years Working</p>
              </div>
              <div className='card'>
                <i>
                  <FiUsers />
                </i>

                <h3>Clients</h3>
                <p>200+ Worldwide</p>
              </div>
              <div className='card'>
                <i>
                  <BsFillBookmarkFill />
                </i>

                <h3>Projects</h3>
                <p>80+ Completed</p>
              </div>
            </div>
            <div id='content-p'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='home-content-button'>
              <input type='button' value="Let's Talk" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
