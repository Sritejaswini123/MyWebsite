// Projects.jsx
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
        title: "Anedium Application",
        description: "Developed a real-time mobile application from scratch using React Native CLI, featuring professional UI design, Firebase authentication, REST API integration, reusable components, and deployment-ready builds for Play Store launch.",
        image: "./src/assets/Anedium-frontpage.jpeg",
        githubLink: "https://github.com/yourusername/code-geass"
      },
      {
        title: "Meals App",
        description: "Developed the 'Meals App' using React Native, enabling users to discover, explore, and manage recipes with an intuitive and user-friendly interface.",
        image: "./src/assets/Meals App.png",
        githubLink: "https://github.com/Sritejaswini123/MEALS-APP-USING-REACT-NATIVE"
      },
    {
      title: "Netflix Gpt",
      description: "Developed Netflix GPT, a dynamic web app utilizing HTML, Tailwind CSS, React.js, Redux, Firebase, and REST API calls to deliver seamless user authentication, personalized content integration, and optimized navigation for enhanced user engagement.",
      image: "./src/assets/netflix.jpg",
      githubLink: "https://github.com/Sritejaswini123/NetflixGPT"
    },
    {
      title: "Restaurant System - Book your spot",
      description: "Designed and developed a Restaurant Management System website using CSS3 properties like background, flex, and box model, while seamlessly integrating front-end and back-end systems through cross-functional collaboration.",
      image: "./src/assets/REST.webp",
      githubLink: "https://github.com/Sritejaswini123/RESTAURANT-WEBSITE"
    },
    {
      title: "Career Startup - Online Job Portal",
      description: "Orchestrated the development of the Career Startup Online Job Portal using HTML, CSS, JavaScript, PHP, and MySQL to address students' job search challenges with efficient backend integration and database management.",
      image: "./src/assets/job-portal.jpg",
      githubLink: "https://github.com/Sritejaswini123/JOB-SEARCH-AND-RECURITMENT-PLLATFORM"
    },
   
  ];

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="card-content">
              <h2 className="card-title">{project.title}</h2>
              <p className="card-description">{project.description}</p>
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-actions">
                <button className="try-now-btn">
                  Try now <span className="arrow">→</span>
                </button>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="github-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;