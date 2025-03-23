import React from "react";
import "../styles/Skills.scss";

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h1>Skills</h1>
      <h2>Industry Expertise</h2>
      <ul>
        <li>Retail/ECommerce/Logistics</li>
        <li>B2B/B2C</li>
        <li>Early Childhood Education</li>
        <li>Banking</li>
      </ul>
      <h2>Technical Skills</h2>
      <ul>
        <li>HTML, CSS, JavaScript, TypeScript</li>
        <li>ReactJS/Native, Angular, Ionic</li>
        <li>NodeJS, Ruby on Rails</li>
        <li>Jest, Cypress Testing Framework</li>
        <li>AWS Cloud Practitioner, Postman</li>
      </ul>
    </section>
  );
};

export default Skills;
