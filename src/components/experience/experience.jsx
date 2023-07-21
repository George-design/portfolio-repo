import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <div id='experience-section'>
      <div id='experience'>
        <div className='experience-header'>
          <h3>What Skills I have</h3>
          <h2>My Experience</h2>
        </div>
        <div className='experience-content'>
          <div className='experience-left'>
            <div className='experience-left-header'>
              <h4>Frontend Development</h4>
            </div>
            <div className='experience-left-content'>
              <div className='left-side'>
                <ul>
                  <div className='experience-icon'>
                    <i>
                      <BsFillPatchCheckFill />
                    </i>
                    <li>
                      HTML
                      <br /> <p>Experienced</p>
                    </li>
                  </div>

                  <div className='experience-icon'>
                    <i>
                      <BsFillPatchCheckFill />
                    </i>
                    <li>
                      Javascript
                      <br />
                      <p>Experienced</p>
                    </li>
                  </div>

                  <div className='experience-icon'>
                    <i>
                      <BsFillPatchCheckFill />
                    </i>
                    <li>
                      TailWind
                      <br /> <p>Experienced</p>
                    </li>
                  </div>
                </ul>
              </div>

              <div className='right-side'>
                <ul>
                  <div className='experience-icon'>
                    <i>
                      <BsFillPatchCheckFill />
                    </i>
                    <li>
                      Bootstrap
                      <br /> <p>Experienced</p>
                    </li>
                  </div>

                  <div className='experience-icon'>
                    <i>
                      <BsFillPatchCheckFill />
                    </i>
                    <li>
                      React
                      <br /> <p>Experienced</p>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className='experience-right'>
            <div className='experience-right-header'>
              <h4>Backend Development</h4>
            </div>
            <div className='experience-right-content'>
              <div className='left-side'>
                <ul>
                  <div className='experience-icon'>
                    <i>
                      <BsFillPatchCheckFill />
                    </i>
                    <li>
                      Node JS
                      <br /> <p>Experienced</p>
                    </li>
                  </div>

                  <div className='experience-icon'>
                    <i>
                      <BsFillPatchCheckFill />
                    </i>
                    <li>
                      PHP
                      <br /> <p>Intermediate</p>
                    </li>
                  </div>

                  <div className='experience-icon'>
                    <i>
                      <BsFillPatchCheckFill />
                    </i>
                    <li>
                      Python
                      <br /> <p>Experienced</p>
                    </li>
                  </div>
                </ul>
              </div>

              <div className='right-side'>
                <ul>
                  <div className='experience-icon'>
                    <i>
                      <BsFillPatchCheckFill />
                    </i>
                    <li>
                      MongoDB
                      <br /> <p>Intermediate</p>
                    </li>
                  </div>

                  <div className='experience-icon'>
                    <i>
                      <BsFillPatchCheckFill />
                    </i>
                    <li>
                      MySQL
                      <br /> <p>Basic</p>
                    </li>
                  </div>

                  <div className='experience-icon'>
                    <i>
                      <BsFillPatchCheckFill />
                    </i>
                    <li>
                      HTML
                      <br /> <p>Experienced</p>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
