import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolio } from '@/config/portfolio';
import './Blogs.scss';

export const Blogs = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="blogs-section" id="blogs" ref={ref}>
      <div className="blogs-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {portfolio.blogs.title}
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {portfolio.blogs.subtitle}
        </motion.p>
        
        <motion.div 
          className="blogs-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {portfolio.blogs.blogs.map((blog, index) => (
            <motion.div 
              key={index} 
              className="blog-card"
              variants={itemVariants}
            >
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-date">{blog.date}</div>
              </div>
              <div className="blog-content">
                <span className="blog-category">{blog.category}</span>
                <h3>{blog.title}</h3>
                <p>{blog.summary}</p>
                <a href={blog.url} target="_blank" rel="noreferrer" className="read-more">
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="blogs-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href={portfolio.blogs.viewAllLink} target="_blank" rel="noreferrer" className="view-all-btn">
            View All Posts
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
