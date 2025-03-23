import React from "react";
import "./Greeting.css";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Greeting = () => {
  return (
    <div className="greeting-main" id="greeting">
      <div className="greeting-container">
        <div className="greeting-text">
          <h1>Hi, I'm Anthony Mai</h1>
          <h2>Full Stack Developer</h2>
          <p>
            I build exceptional and accessible digital experiences for the web.
            Passionate about creating innovative solutions and learning new technologies.
          </p>
          
          <div className="greeting-buttons">
            <Link to="contact" smooth={true} duration={500} className="contact-button">
              Get in Touch
            </Link>
            <Link to="projects" smooth={true} duration={500} className="projects-button">
              View Projects
            </Link>
          </div>

          <div className="social-links">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:your.email@example.com"
              aria-label="Email Contact"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}; 