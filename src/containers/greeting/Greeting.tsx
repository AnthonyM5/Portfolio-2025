import React from 'react';
import './Greeting.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolio } from '@/config/portfolio';

export const Greeting = () => {
  return (
    <section className="greeting">
      <div className="greeting-container">
        <div className="greeting-content">
          <h1>
            Hi, I'm {portfolio.name}
            <span className="wave-emoji" role="img" aria-label="waving hand">
              👋
            </span>
          </h1>
          <p>{portfolio.description}</p>
          
          <div className="cta-buttons">
            <a href="#contact" className="primary-button">Get in touch</a>
            <a href={portfolio.resume} className="secondary-button">See my resume</a>
          </div>

          <div className="social-links">
            {portfolio.social.github && (
              <a 
                href={portfolio.social.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
            )}
            {portfolio.social.linkedin && (
              <a 
                href={portfolio.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
            )}
          </div>
        </div>

        <div className="greeting-image">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 800 600"
            className="developer-svg"
          >
            {/* Background clouds */}
            <path 
              className="cloud"
              fill="#E6E6FA" 
              d="M100,200 Q130,180 160,200 Q190,220 220,200 Q250,180 280,200 L280,240 L100,240 Z"
            />
            <path 
              className="cloud"
              fill="#E6E6FA" 
              d="M500,150 Q530,130 560,150 Q590,170 620,150 Q650,130 680,150 L680,190 L500,190 Z"
            />
            
            {/* Developer figure */}
            <g className="developer">
              {/* Body */}
              <path 
                fill="#6366F1" 
                d="M400,300 L450,300 L450,400 L400,400 Z"
              />
              
              {/* Head */}
              <circle 
                fill="#FFD700" 
                cx="425" 
                cy="270" 
                r="30"
              />
              
              {/* Arms */}
              <path 
                className="arm-right"
                fill="#6366F1" 
                d="M450,320 L500,300 L490,330 L450,350 Z"
              />
              <path 
                className="arm-left"
                fill="#6366F1" 
                d="M400,320 L350,300 L360,330 L400,350 Z"
              />
              
              {/* Telescope */}
              <g className="telescope">
                <path 
                  fill="#4C4C4C" 
                  d="M490,290 L560,270 L570,290 L500,310 Z"
                />
                <circle 
                  fill="#3B82F6" 
                  cx="565" 
                  cy="280" 
                  r="10"
                />
              </g>
            </g>
            
            {/* Stars */}
            <g className="stars">
              <circle fill="#FFD700" cx="200" cy="100" r="2" />
              <circle fill="#FFD700" cx="300" cy="150" r="2" />
              <circle fill="#FFD700" cx="700" cy="200" r="2" />
              <circle fill="#FFD700" cx="600" cy="100" r="2" />
              <circle fill="#FFD700" cx="400" cy="150" r="2" />
            </g>
          </svg>
        </div>
      </div>
      <div className="greeting__background" />
    </section>
  );
}; 