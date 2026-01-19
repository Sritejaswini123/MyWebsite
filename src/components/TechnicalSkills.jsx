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
              <span className="skill-items">C,JavaScript,Typescript</span>
            </div>
            
            <div className="skill-group">
              <span className="skill-label">Frontend:</span>
              <span className="skill-items">React.js, React Native Using Javascript , CSS,Html  </span> 
            </div>
               <div className="skill-group">
              <span className="skill-label">Backend:</span>
              <span className="skill-items">NodeJS, Hono, Drizzle ORM, REST APIs, JSON </span> 
            </div>
            
            <div className="skill-group">
              <span className="skill-label">Database:</span>
              <span className="skill-items">MySQL,PostgerSQL</span>
            </div>

            <div className="skill-group">
              <span className="skill-label">Developer Tools:</span>
              <span className="skill-items"> Vs code, SQL Workbench, Postman, Android Studio, Avien</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default TechnicalSkills  