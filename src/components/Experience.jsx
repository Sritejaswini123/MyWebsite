// ExperienceCard.jsx
import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      {/* Experience Card */}


  {/* Backend Experience */}
      <div className="experience-card">
        <div className="card-header">
          <div className="company-info">
            <h2 className="company-name">ActaNos</h2>
            <h3 className="position">Backend Developer</h3>
          </div>
          <div className="date">
            April 2025 - September 2025
          </div>
        </div>

        <ul className="experience-list">
          <li className="experience-item">
            <div className="bullet-point"></div>
            <p className="experience-text">
              Developed backend services using <strong>Node.js, Hono, and TypeScript</strong> for scalable applications.
            </p>
          </li>

          <li className="experience-item">
            <div className="bullet-point"></div>
            <p className="experience-text">
              Implemented WhatsApp automation features using <strong>Meta WhatsApp Business API</strong>, including template management.
            </p>
          </li>

          <li className="experience-item">
            <div className="bullet-point"></div>
            <p className="experience-text">
              Designed and integrated REST APIs for structured message handling and data workflows.
            </p>
          </li>

          <li className="experience-item">
            <div className="bullet-point"></div>
            <p className="experience-text">
              Managed databases using <strong>PostgreSQL and Drizzle ORM</strong>, ensuring data consistency and quality.
            </p>
          </li>

          <li className="experience-item">
            <div className="bullet-point"></div>
            <p className="experience-text">
              Scheduled and maintained <strong>Cron Jobs</strong> for periodic data evaluation and AI-driven messaging.
            </p>
          </li>
        </ul>
      </div>


      <div className="experience-card">
        <div className="card-header">
          <div className="company-info">
            <h2 className="company-name">Anedium App</h2>
            <h3 className="position">Founding  Engineer (Intern)</h3>
          </div>
          <div className="date">
        August 2024 - December 2024
          </div>
        </div>
        
        <ul className="experience-list">
          <li className="experience-item">
            <div className="bullet-point"></div>
            <p className="experience-text">
            Spearheaded the end-to-end development of a real-time mobile application using React Native CLI, establishing the foundation for the project from scratch.
            </p>
          </li>
          
          <li className="experience-item">
            <div className="bullet-point"></div>
            <p className="experience-text">
            Implemented robust user authentication workflows (signup/login) with Firebase, ensuring secure and seamless access.
            </p>
          </li>
          
          <li className="experience-item">
            <div className="bullet-point"></div>
            <p className="experience-text">
            Engineered dynamic data fetching and synchronization by integrating REST APIs, enabling real-time job and course-related information.
            </p>
          </li>
          
          <li className="experience-item">
            <div className="bullet-point"></div>
            <p className="experience-text">
            Built reusable components and applied a constant stylesheet, leveraging React Native libraries for scalable and maintainable architecture.
            </p>
          </li>
          <li className="experience-item">
            <div className="bullet-point"></div>
            <p className="experience-text">
            Developed an intuitive and visually appealing user interface (UI) with React Native libraries, vector icons, and consistent styling for an enhanced user experience (UX).
            </p>
          </li>

          <li className="experience-item">
            <div className="bullet-point"></div>
            <p className="experience-text">
            Built and signed APK and AAB files with secure keys, ensuring readiness for Play Store deployment.
            </p>
          </li>
        </ul>
      </div>





      {/* Footer Section */}
      <div className="footer">
        <p className="footer-text">
          Designed and Developed by Sritejaswini Gulla
        </p>
        
        <div className="social-icons">
          <a href="https://github.com/Sritejaswini123" className="social-link">
            <img 
              src="https://cdn.iconscout.com/icon/free/png-256/free-github-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-3073768.png?f=webp&w=256" 
              alt="github" 
              className="social-icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/sri-tejaswini/" className="social-link">
            <img 
              src="https://img.utdstc.com/icon/b2f/640/b2f640a83bf64c104233d05ba3222c9fe0fd81b9aa862634713fbe04de98f79f:100" 
              alt="linkedin" 
              className="social-icon"
            />
          </a>
          <a href="https://x.com/SritejaA16093" className="social-link">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/768px-Logo_of_Twitter.svg.png?20220821125553" 
              alt="twitter" 
              className="social-icon"
            />
          </a>
          <a href="https://www.instagram.com/__._tez_.__/" className="social-link">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/225px-Instagram_logo_2022.svg.png" 
              alt="instagram" 
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
