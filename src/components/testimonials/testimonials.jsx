import React from "react";
import "./testimonials.css";
import avatar1 from "../../images/avatar1.jpg";
import avatar2 from "../../images/avatar2.jpg";
import avatar3 from "../../images/avatar3.jpg";
import avatar4 from "../../images/avatar4.jpg";

const Testimonials = () => {
  return (
    <div id='testimonials-section'>
      <div className='testimonials' id='testimonials'>
        <div className='testimonials-header'>
          <h3>Review from clients</h3>
          <h2>Testimonials</h2>
        </div>
        <div className='testimonials-content'>
          <div className='testimonials-card'>
            <div className='testimonials-card-img'>
              <img src={avatar1} />
            </div>
            <h4>Tina Snow</h4>
            <p>
              You are always here on time, never leave early and adhere to all
              company break times. On the rare occassion that you have missed
              work, you have provided ample notice and made arrangements to
              ensure your responsibilities are covered. You have proven to be a
              reliable employee by arriving each day prepared to tackle your
              work with a positive attitude. You have frequently returned late
              from your lunch breaks, and are often late reporting to work.
            </p>
          </div>

          <div className='testimonials-card'>
            <div className='testimonials-card-img'>
              <img src={avatar2} />
            </div>
            <h4>Tina Snow</h4>
            <p>
              You are always here on time, never leave early and adhere to all
              company break times. On the rare occassion that you have missed
              work, you have provided ample notice and made arrangements to
              ensure your responsibilities are covered. You have proven to be a
              reliable employee by arriving each day prepared to tackle your
              work with a positive attitude. You have frequently returned late
              from your lunch breaks, and are often late reporting to work.
            </p>
          </div>

          <div className='testimonials-card'>
            <div className='testimonials-card-img'>
              <img src={avatar3} />
            </div>
            <h4>Tina Snow</h4>
            <p>
              You are always here on time, never leave early and adhere to all
              company break times. On the rare occassion that you have missed
              work, you have provided ample notice and made arrangements to
              ensure your responsibilities are covered. You have proven to be a
              reliable employee by arriving each day prepared to tackle your
              work with a positive attitude. You have frequently returned late
              from your lunch breaks, and are often late reporting to work.
            </p>
          </div>

          <div className='testimonials-card'>
            <div className='testimonials-card-img'>
              <img src={avatar4} />
            </div>
            <h4>Tina Snow</h4>
            <p>
              You are always here on time, never leave early and adhere to all
              company break times. On the rare occassion that you have missed
              work, you have provided ample notice and made arrangements to
              ensure your responsibilities are covered. You have proven to be a
              reliable employee by arriving each day prepared to tackle your
              work with a positive attitude. You have frequently returned late
              from your lunch breaks, and are often late reporting to work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
