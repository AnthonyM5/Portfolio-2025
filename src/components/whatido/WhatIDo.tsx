import React from 'react';
import { FiCode, FiSmartphone, FiCloud } from 'react-icons/fi';
import './WhatIDo.css';

const WhatIDo: React.FC = () => {
  const services = [
    {
      icon: <FiCode size={40} />,
      title: "Develop highly interactive Front end / User Interfaces for your web and mobile applications",
      description: "Using React.js / Next.js / React Native and other modern frameworks"
    },
    {
      icon: <FiSmartphone size={40} />,
      title: "Progressive Web Applications ( PWA ) in normal and SPA Stacks",
      description: "Building responsive and performant web apps that work offline"
    },
    {
      icon: <FiCloud size={40} />,
      title: "Integration of third party services such as Firebase/ AWS / Digital Ocean",
      description: "Experience with cloud platforms and third-party integrations"
    }
  ];

  return (
    <section className="what-i-do-section">
      <div className="container">
        <h2 className="section-title animate-slide-up">What I do</h2>
        
        <div className="tech-stack-grid stagger-children">
          <div className="tech-icons">
            <img src="/icons/html5.svg" alt="HTML5" className="tech-icon" />
            <img src="/icons/css3.svg" alt="CSS3" className="tech-icon" />
            <img src="/icons/sass.svg" alt="Sass" className="tech-icon" />
            <img src="/icons/js.svg" alt="JavaScript" className="tech-icon" />
            <img src="/icons/react.svg" alt="React" className="tech-icon" />
            <img src="/icons/node.svg" alt="Node.js" className="tech-icon" />
            <img src="/icons/swift.svg" alt="Swift" className="tech-icon" />
            <img src="/icons/npm.svg" alt="npm" className="tech-icon" />
          </div>
          
          <div className="tech-icons second-row">
            <img src="/icons/sql.svg" alt="SQL" className="tech-icon" />
            <img src="/icons/aws.svg" alt="AWS" className="tech-icon" />
            <img src="/icons/firebase.svg" alt="Firebase" className="tech-icon" />
            <img src="/icons/python.svg" alt="Python" className="tech-icon" />
            <img src="/icons/docker.svg" alt="Docker" className="tech-icon" />
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="what-i-do-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo; 