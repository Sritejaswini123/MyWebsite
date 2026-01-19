// AboutMe.jsx
import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>

        <p className="about-description">
          I’m <strong>Sri Tejaswini Gulla</strong>, a passionate Software Developer from Andhra Pradesh, India.
          I graduated with a Bachelor’s degree in Computer Science and Engineering from
          <strong> IIIT Srikakulam</strong>. I enjoy building scalable web and mobile applications
          and love turning ideas into real-world products.
        </p>

        <p className="about-description">
          I have hands-on experience working as a <strong>React Native Developer</strong> and
          <strong> Backend Developer</strong>, where I developed production-ready applications,
          integrated APIs, handled authentication, and worked with modern backend frameworks.
          I’m always eager to learn new technologies and improve my problem-solving skills.
        </p>

        <div className="achievements">
          <p className="achievement-title">What I do best:</p>
          <ul className="achievement-list">
            <li><span className="star">★</span> Built feature-rich mobile applications using <strong>React Native CLI</strong> and Firebase.</li>
            <li><span className="star">★</span> Developed dynamic web applications using <strong>React.js, Redux, and REST APIs</strong>.</li>
            <li><span className="star">★</span> Worked on backend systems using <strong>Node.js, Hono, TypeScript, and Drizzle ORM</strong>.</li>
            <li><span className="star">★</span> Designed and managed databases with <strong>PostgreSQL, MySQL, and MongoDB</strong>.</li>
            <li><span className="star">★</span> Experienced with tools like <strong>Git, GitHub, Postman, VS Code, and Android Studio</strong>.</li>
          </ul>
        </div>
      </div>

      <div className="about-image">
        <img
          src="https://13designstreet.com/img/static-website-development.png"
          alt="Developer Illustration"
          className="dev-image"
        />
      </div>
    </div>
  );
};

export default AboutMe;
