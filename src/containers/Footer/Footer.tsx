import React from "react";
import "./Footer.scss";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { portfolio } from "@/config/portfolio";

export const Footer = () => {
  const navigationLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{portfolio.name}</h3>
            <p>{portfolio.role}</p>
          </div>
          
          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-links">
              <a href={portfolio.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={portfolio.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              {portfolio.social.twitter && (
                <a href={portfolio.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}; 