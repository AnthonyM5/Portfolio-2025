import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { portfolio } from "@/config/portfolio";
import "./Footer.scss";

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
            {portfolio.social?.github && (
              <a 
                href={portfolio.social.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            )}
            {portfolio.social?.linkedin && (
              <a 
                href={portfolio.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            )}
            {portfolio.email && (
              <a 
                href={`mailto:${portfolio.email}`} 
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            )}
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