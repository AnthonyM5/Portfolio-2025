import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolio } from '@/config/portfolio';
import ExperienceCard from '@/components/experienceCard/ExperienceCard';
import './Experience.scss';

export const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="experience-section" id="experience" ref={ref}>
      <div className="experience-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {portfolio.experience.title}
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {portfolio.experience.subtitle}
        </motion.p>
        
        <div className="experience-timeline">
          {portfolio.experience.experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              index={index}
              company={experience.company}
              position={experience.position}
              logo={experience.logo}
              location={experience.location}
              description={experience.description}
              technologies={experience.technologies}
              website={experience.website}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
