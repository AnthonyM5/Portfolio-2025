import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolio } from '@/config/portfolio';
import Carousel from '@/components/carousel/Carousel';
import './Projects.scss';

export const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [filter, setFilter] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const filteredProjects = filter === 'all' 
    ? portfolio.projects.projects 
    : portfolio.projects.projects.filter(project => project.category === filter);

  return (
    <section className="projects-section" id="projects" ref={ref}>
      <div className="projects-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {portfolio.projects.title}
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {portfolio.projects.subtitle}
        </motion.p>
        
        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          {portfolio.projects.categories.map((category, index) => (
            <button 
              key={index} 
              className={filter === category ? 'active' : ''} 
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <motion.div
          className="projects-carousel"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Carousel ariaLabel="Projects carousel">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={itemVariants}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="project-overlay" aria-hidden="true" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="project-tag">{tech}</span>
                    ))}
                  </div>
                  {(project.liveUrl || project.repoUrl || project.appStoreUrl || project.playStoreUrl) && (
                    <div className="project-links">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      )}
                      {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          Repo
                        </a>
                      )}
                      {project.appStoreUrl && (
                        <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer">
                          App Store
                        </a>
                      )}
                      {project.playStoreUrl && (
                        <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                          Google Play
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
