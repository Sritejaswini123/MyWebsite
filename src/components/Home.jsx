import React from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate(); // React Router hook for navigation

    const handleNavigateToProjects = () => {
        navigate("/projects"); // Navigate to the Projects page
      };
      const handleNavigateToContact = () => {
        navigate("/contact"); // Navigate to Contact page
    };

  return (
    <div className="home-container">
      <div className="section">
        <p className="subtitle">Transforming Ideas into Functional Software</p>
        <h1 className="title typewriter">
          Hi, I am Sritejaswini, a Software <span className="highlight">Engineer.</span>
        </h1>
        <div className="buttons">
            <button className="btn hire-me" onClick={handleNavigateToContact}>Hire Me</button>
          <button className="btn projects"  onClick={handleNavigateToProjects} >Projects</button>
        </div>
      </div>
    </div>
  );
}

export default Home;