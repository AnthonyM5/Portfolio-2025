import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { portfolio } from "@/config/portfolio";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>{portfolio.firstName}</h3>
          <p>{portfolio.description}</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <h4>Connect With Me</h4>
          <div className="social-icons">
            {portfolio.socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label={link.name}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {portfolio.firstName} {portfolio.lastName}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 