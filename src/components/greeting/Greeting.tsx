import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';
import { portfolio } from "@/config/portfolio";
import { loadLottieAnimation } from '../../utils/lottieLoader';
import "./Greeting.scss";

export const Greeting = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const animationPath = '/assets/lottie/landingPerson.json';
    
    loadLottieAnimation(animationPath)
      .then(data => {
        setAnimationData(data);
      })
      .catch(err => {
        console.error("Failed to load animation:", err);
      });
  }, []);

  return (
    <section className="greeting-section" id="greeting">
      <div className="greeting-container">
        <div className="greeting-text-box">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="greeting-title"
          >
            {portfolio.greeting.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="greeting-subtitle"
          >
            {portfolio.greeting.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="greeting-buttons"
          >
            <a href="#contact" className="primary-button">Get In Touch</a>
            <a href={portfolio.resumeLink} target="_blank" rel="noopener noreferrer" className="secondary-button">
              See My Resume
            </a>
          </motion.div>
        </div>
        <div className="greeting-animation">
          {animationData && (
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Greeting;