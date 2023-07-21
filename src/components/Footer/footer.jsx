import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div id='footer-section'>
      <div id='footer' className='footer'>
        <h3>GEORGE</h3>
        <div className='footer-nav'>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Experience</a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
            <li>
              <a href='#'>Portfolio</a>
            </li>
            <li>
              <a href='#'>Testimonials</a>
            </li>
            <li>
              <a href='#'>Contacts</a>
            </li>
          </ul>
        </div>
        <div className='footer-socials'>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <p>© GEORGE Tutorials. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
