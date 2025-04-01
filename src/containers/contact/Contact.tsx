import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolio } from '@/config/portfolio';
import './Contact.scss';

export const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  // Add form ref to maintain access to the form element
  const formRef = useRef<HTMLFormElement>(null);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("Sending....");
    
    const formData = new FormData(event.currentTarget);
    
    // Add the access key from environment variables
    formData.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setSubmitStatus('success');
        setSubmitMessage("Message sent successfully! I will get back to you soon.");
        // Use the ref to reset the form instead of event.currentTarget
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.message || "Something went wrong. Please try again later.");
        console.error("Form submission error:", data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
      setSubmitMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <div className="contact-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {portfolio.contact.title}
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {portfolio.contact.subtitle}
        </motion.p>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>{portfolio.contact.location}</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p><a href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}</a></p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p><a href={`tel:${portfolio.contact.phone}`}>{portfolio.contact.phone}</a></p>
              </div>
            </div>
            
            <div className="social-links">
              {portfolio.socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noreferrer" aria-label={link.name}>
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.form 
            ref={formRef} // Add the ref to the form element
            className="contact-form"
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
              />
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                required 
              />
            </div>
            
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                required
                rows={6}
              />
            </div>
            
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitMessage && (
              <p className={`submit-message ${submitStatus}`}>{submitMessage}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
