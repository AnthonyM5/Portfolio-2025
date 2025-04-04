import React from 'react';
import { motion } from 'framer-motion';
import './ExperienceCard.scss';

interface ExperienceCardProps {
  company: string;
  position: string;
  logo?: string;
  location: string;
  description: string[];
  technologies: string[];
  website?: string;
  index?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  position,
  logo,
  location,
  description,
  technologies,
  website,
  index = 0
}) => {
  return (
    <motion.div 
      className="experience-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="experience-header">
        {logo && (
          <div className="company-logo">
            <img src={logo} alt={`${company} logo`} />
          </div>
        )}
        <div className="experience-title">
          <h3>{position}</h3>
          <div className="company-info">
            <h4>
              {website ? (
                <p>
                  {company}
                </p>
              ) : (
                company
              )}
            </h4>
            <div className="experience-meta">
              <span className="location">{location}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="experience-content">
        <ul className="responsibilities">
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      
      <div className="experience-footer">
        <div className="technologies">
          {technologies.reverse().map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
