// TechnicalSkills.jsx

import React from 'react';
import './TechnicalSkills.css'
const TechnicalSkills = () => {
    return (
      <div className="skills-section">
        <div className="skills-card">
          <h2 className="skills-title">My Technical Skills</h2>
          
          <div className="skills-content">
            <div className="skill-group">
              <span className="skill-label">Programming Language:</span>
              <span className="skill-items">C, C++, Java, JavaScript,  Python</span>
            </div>
            
            <div className="skill-group">
              <span className="skill-label">Frameworks/ Libraries:</span>
              <span className="skill-items">Springboot,React.js, React Native Using Javascript , CSS,Html, REST APIs  </span> 
            </div>
            
            <div className="skill-group">
              <span className="skill-label">Database:</span>
              <span className="skill-items">MySQL,Postman</span>
            </div>

            <div className="skill-group">
              <span className="skill-label">Developer Tools:</span>
              <span className="skill-items"> Vs code , eclispe, Spring Tool Suite, SQL Workbench, Postman, Android Studio</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default TechnicalSkills  