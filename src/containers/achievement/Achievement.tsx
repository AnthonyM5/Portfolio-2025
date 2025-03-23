import React from "react";
import "./Achievement.css";
import { FaTrophy, FaMedal, FaAward } from "react-icons/fa";

export const Achievement = () => {
  return (
    <div className="achievement-main" id="achievements">
      <div className="achievement-container">
        <h1 className="achievement-heading">Achievements And Certifications</h1>
        <div className="achievement-cards-div">
          <div className="achievement-card">
            <div className="achievement-card-icon">
              <FaTrophy />
            </div>
            <div className="achievement-card-title">AWS Certified Solutions Architect</div>
            <div className="achievement-card-description">
              Certified in designing distributed systems and deploying applications on AWS.
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-card-icon">
              <FaMedal />
            </div>
            <div className="achievement-card-title">Google Cloud Professional</div>
            <div className="achievement-card-description">
              Expertise in building scalable applications using Google Cloud Platform.
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-card-icon">
              <FaAward />
            </div>
            <div className="achievement-card-title">Meta Frontend Developer</div>
            <div className="achievement-card-description">
              Advanced certification in modern frontend development practices and React.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 