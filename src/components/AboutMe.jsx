// AboutMe.jsx
import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          Hi Everyone, I am Sritejaswini from AndhraPradesh, India. I have done my graduation from IIIT Srikakulam.
        </p>
        
        <div className="achievements">
          <p className="achievement-title">Some of my competitive programming achievements are:</p>
          <ul className="achievement-list">
            <li><span className="star">★</span> Built mobile apps using React Native for enhanced user functionality.</li>
            <li><span className="star">★</span>Developed web apps with ReactJS, Firebase, and REST APIs.</li>
            <li><span className="star">★</span>Created full-stack projects with PHP, MySQL, and JavaScript.</li>
            <li><span className="star">★</span>Designed database-driven systems using SQL and Firebase.</li>
            <li><span className="star">★</span>Streamlined development with tools like VS Code and Postman.</li>
          </ul>
        </div>
      </div>
      <div className="about-image">
        <img src="https://13designstreet.com/img/static-website-development.png" alt="Developer Illustration" className="dev-image" />
      </div>
    </div>
  );
};
export default AboutMe;