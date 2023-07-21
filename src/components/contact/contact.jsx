import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div id='contact-section'>
      <div className='contact' id='contact'>
        <div className='contact-header'>
          <h3>Get In Touch</h3>
          <h2>Contact Me</h2>
        </div>
        <div className='contact-content'>
          <div className='contact-socials'>
            <div className='email'>
              <h3>Email</h3>
              <p>dummygetar@gmail.com</p>
              <a href='#'>send a message</a>
            </div>
            <div className='email'>
              <h3>Messenger</h3>
              <p>dummygetar@gmail.com</p>
              <a href='#'>send a message</a>
            </div>
            <div className='email'>
              <h3>Whatsapp</h3>
              <p>dummygetar@gmail.com</p>
              <a href='#'>send a message</a>
            </div>
          </div>
          <div className='contact-form'>
            <input type='text' placeholder='Your Full Name' className='input' />
            <input type='text' placeholder='Your Full Name' className='input' />
            <textarea placeholder='Your Message' cols='50' rows='7'></textarea>
            <div id='contact-btn'>
              <input type='button' value='send message' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
