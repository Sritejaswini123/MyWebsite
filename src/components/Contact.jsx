// ContactCard.jsx
import React from 'react';
import './Contact.css';
import { Mail, MapPin } from 'lucide-react';
const Contact = () => {
  return (
    <div className="container">
      {/* Contact Card */}
      <div className="card">
        <h1 className="card-title">
          Get in touch with Me
        </h1>
        
        <div className="contact-info">
          <div className="info-item">
          <Mail className="icon" />
            <div>
              <span>Email: </span>
              <a href="mailto:sritejaswini1234@gmail.com">
                sritejaswini1234@gmail.com
              </a>
            </div>
          </div>

          <div className="info-item">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/768px-Logo_of_Twitter.svg.png?20220821125553" 
              alt="twitter" 
              className="icon"
            />
            <div>
              <span>DM on Twitter: </span>
              <a href="https://x.com/SritejaA16093">
              @SritejaA16093
              </a>
            </div>
          </div>

          <div className="info-item">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/225px-Instagram_logo_2022.svg.png" 
              alt="instagram" 
              className="icon"
            />
            <div>
              <span>DM on Instagram: </span>
              <a href="https://www.instagram.com/__._tez_.__/">
                @ __._tez_.__
              </a>
            </div>
          </div>

          <div className="info-item">
          <MapPin className="icon" />
            <div>
              <span>Address: </span>
              <span>
                Rajahmundry, East Godavari, PinCode - 533232, AndhraPradesh, India
              </span>
            </div>
          </div>
        </div>
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

export default Contact