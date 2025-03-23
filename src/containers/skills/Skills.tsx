import React from "react";
import "./Skills.css";
import { skills } from "../../portfolio";
import { FaCode, FaDatabase, FaMobile, FaServer } from "react-icons/fa";

const getIconForSkill = (skillName: string) => {
  const name = skillName.toLowerCase();
  if (name.includes("react")) return <FaCode />;
  if (name.includes("node")) return <FaServer />;
  if (name.includes("mobile")) return <FaMobile />;
  if (name.includes("database")) return <FaDatabase />;
  return <FaCode />;
};

export const Skills = () => {
  return (
    <div className="skills-main" id="skills">
      <div className="skills-container">
        <h1 className="skills-heading">What I Do</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                {getIconForSkill(skill.name)}
              </div>
              <div className="skill-text">
                <h2 className="skill-title">{skill.name}</h2>
                <div className="skill-level">
                  <div 
                    className="skill-progress"
                    style={{
                      width: skill.level === "Advanced" ? "90%" :
                             skill.level === "Intermediate" ? "70%" :
                             "50%"
                    }}
                  />
                </div>
                <p className="skill-description">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 