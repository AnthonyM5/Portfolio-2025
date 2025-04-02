import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm, ValidationError } from '@formspree/react';
import { portfolio } from '@/config/portfolio';
import './Contact.scss';

export const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [state, handleSubmit] = useForm("mjkyakgl");

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
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {state.succeeded ? (
              <div className="form-success-message">
                <div className="success-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you as soon as possible!</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    placeholder="Your Name" 
                    required 
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    placeholder="Your Email" 
                    required 
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                
                <div className="form-group">
                  <input 
                    type="text" 
                    id="subject"
                    name="subject" 
                    placeholder="Subject" 
                    required 
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>
                
                <div className="form-group">
                  <textarea 
                    id="message"
                    name="message" 
                    placeholder="Your Message" 
                    required
                    rows={6}
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                
                <button type="submit" className="submit-btn" disabled={state.submitting}>
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {state.errors && Object.keys(state.errors).length > 0 && (
                  <p className="submit-message error">
                    There was an error submitting the form. Please check the fields and try again.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
