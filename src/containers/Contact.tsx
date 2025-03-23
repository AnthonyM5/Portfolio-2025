import React from "react";
import "../styles/Contact.scss";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h1>Contact</h1>
      <p>Anthony Mai</p>
      <p>Brooklyn, NY</p>
      <p>917-887-0970</p>
      <p>
        <a href="mailto:anthony.mai@accenture.com">anthony.mai@accenture.com</a>
      </p>
      <p>
        <a href="https://anthonym-portfolio.netlify.app" target="_blank" rel="noopener noreferrer">
          Portfolio
        </a>
      </p>
    </section>
  );
};

export default Contact;
