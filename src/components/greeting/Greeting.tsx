import React from 'react';
import { motion } from 'framer-motion';
import { portfolio } from "@/config/portfolio";
import "./Greeting.scss";
import LottieAnimation from '../LottieAnimation';

export const Greeting = () => {
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
            <a href="#contact" className="primary-button">Contact Me</a>
            <a href={portfolio.resumeLink} target="_blank" rel="noopener noreferrer" className="secondary-button">
              View Resume
            </a>
          </motion.div>
        </div>
        <div className="greeting-animation">
          <LottieAnimation
            animationPath="/assets/lottie/landingPerson.json"
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Greeting;