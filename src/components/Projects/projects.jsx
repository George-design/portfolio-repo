import React from "react";
import "./projects.css";
import portfolio1 from "../../images/portfolio1.jpg";
import portfolio2 from "../../images/portfolio2.jpg";
import portfolio3 from "../../images/portfolio3.jpg";
import portfolio4 from "../../images/portfolio4.jpg";
import portfolio6 from "../../images/portfolio6.jpg";

const Projects = () => {
  return (
    <div className='projects-section'>
      <div className='projects'>
        <div className='projects-header'>
          <h3>My Recent Work</h3>
          <h2>Portifolio</h2>
        </div>
        <div className='projects-content'>
          <div className='projects-content-card'>
            <div className='card'>
              <img src={portfolio1} />
              <p>Crpyto Currency Dashboard & Financial Visualisartion</p>
              <div className='projects-btn'>
                <input type='button' value='Github' />
                <input type='button' value='Live Demo' id='demo' />
              </div>
            </div>
          </div>
          <div className='projects-content-card'>
            <div className='card'>
              <img src={portfolio2} />
              <p>Crpyto Currency Dashboard & Financial Visualisartion</p>
              <div className='projects-btn'>
                <input type='button' value='Github' />
                <input type='button' value='Live Demo' id='demo' />
              </div>
            </div>
          </div>
          <div className='projects-content-card'>
            <div className='card'>
              <img src={portfolio3} />
              <p>Crpyto Currency Dashboard & Financial Visualisartion</p>
              <div className='projects-btn'>
                <input type='button' value='Github' />
                <input type='button' value='Live Demo' id='demo' />
              </div>
            </div>
          </div>
          <div className='projects-content-card'>
            <div className='card'>
              <img src={portfolio4} />
              <p>Crpyto Currency Dashboard & Financial Visualisartion</p>
              <div className='projects-btn'>
                <input type='button' value='Github' />
                <input type='button' value='Live Demo' id='demo' />
              </div>
            </div>
          </div>
          <div className='projects-content-card'>
            <div className='card'>
              <img src={portfolio4} />
              <p>Crpyto Currency Dashboard & Financial Visualisartion</p>
              <div className='projects-btn'>
                <input type='button' value='Github' />
                <input type='button' value='Live Demo' id='demo' />
              </div>
            </div>
          </div>
          <div className='projects-content-card'>
            <div className='card'>
              <img src={portfolio6} />
              <p>Crpyto Currency Dashboard & Financial Visualisartion</p>
              <div className='projects-btn'>
                <input type='button' value='Github' />
                <input type='button' value='Live Demo' id='demo' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
