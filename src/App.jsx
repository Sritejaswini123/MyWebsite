import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      {/* Header is outside the Routes to remain constant */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/experience" className="nav-link">Experience</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          <div className="social-icons">
            <a href="https://github.com/Sritejaswini123" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.iconscout.com/icon/free/png-256/free-github-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-3073768.png?f=webp&w=256" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/sri-tejaswini/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.utdstc.com/icon/b2f/640/b2f640a83bf64c104233d05ba3222c9fe0fd81b9aa862634713fbe04de98f79f:100" alt="LinkedIn" />
            </a>

            <a href="https://x.com/SritejaA16093" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/768px-Logo_of_Twitter.svg.png?20220821125553" alt="Instagram" />
            </a>
            <a href="https://www.instagram.com/__._tez_.__/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/225px-Instagram_logo_2022.svg.png" alt="Instagram" />
            </a>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
