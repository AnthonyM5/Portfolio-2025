import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import './Greeting.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolio } from '@/config/portfolio';

// Import the JSON file URL
import animationUrl from '@/assets/lottie/landingPerson.json?url';

export const Greeting = () => {
  const [animationData, setAnimationData] = useState(null);
  const [animationError, setAnimationError] = useState(false);

  useEffect(() => {
    fetch(animationUrl)
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => {
        console.error('Failed to load animation:', error);
        setAnimationError(true);
      });
  }, []);

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
          {animationData && !animationError ? (
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              className="lottie-animation"
              style={{ width: '100%', height: 'auto' }}
              rendererSettings={{
                preserveAspectRatio: 'xMidYMid slice'
              }}
            />
          ) : animationError ? (
            <div className="animation-error">
              Failed to load animation. Please check the console for details.
            </div>
          ) : (
            <div className="animation-loading">
              Loading animation...
            </div>
          )}
        </div>
      </div>
      <div className="greeting__background" />
    </section>
  );
}; 