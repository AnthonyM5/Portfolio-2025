// Ensure you have installed required packages:
// npm install react-reveal colorthief @types/colorthief
import React, { useContext } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../portfolio/ExperienceCard";
import { workExperiences } from "../../portfolio"; // now from our TS portfolio file
import { Fade } from "react-awesome-reveal"; // replaced react-reveal with react-awesome-reveal
import StyleContext from "../../contexts/StyleContext";

const WorkExperience: React.FC = () => {
  const { isDark } = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade direction="up" duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card: any, i: number) => (
                  <ExperienceCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
};

export default WorkExperience;