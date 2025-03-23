import React from "react";
import "../styles/Experience.scss";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Education Support Services Company: Mobile App Development",
      details: [
        "Modernized a legacy app with Angular/Ionic and NgRX/RxJS, improving performance and UX.",
        "Created shared components and middleware for staff-parent communication.",
        "Focused on code quality, unit testing (Jest), and collaboration.",
      ],
    },
    {
      title: "Mirakl/Hybris Ecommerce Marketplace: Web App Development",
      details: [
        "Integrated middleware platforms (Hybris/Mirakl) for SAP-based eCommerce apps.",
        "Collaborated with business teams to maintain web standards and resolve bugs.",
        "Integrated APIs for merchant and product data.",
      ],
    },
    {
      title: "Synchronous Learning/Training Platform",
      details: [
        "Resolved access issues with a custom Heroku domain for Node.js services.",
        "Developed a React.js MVP for in-person data collection using Redis and Socket.io.",
        "Resolved security issues from SAST assessments.",
      ],
    },
  ];

  return (
    <section id="experience">
      <h1>Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index}>
          <h2>{exp.title}</h2>
          <ul>
            {exp.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
