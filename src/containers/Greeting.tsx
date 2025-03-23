import React from "react";
import "./Greeting.css";
import { greeting } from "../portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Greeting = () => {
  return (
    <div className="greeting-main" id="greeting">
      <div className="greeting-main-div">
        <div className="greeting-text-div">
          <h1 className="greeting-text">
            {greeting.title}{" "}
            <span className="wave-emoji">👋</span>
          </h1>
          <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
          <div className="social-media-div">
            <a
              href={greeting.github}
              className="icon-button github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href={greeting.linkedin}
              className="icon-button linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
          </div>
          <div className="button-greeting-div">
            <button className="main-button">Contact me</button>
            <button className="main-button">See my resume</button>
          </div>
        </div>
        <div className="greeting-image-div">
          {/* You can add your profile image here */}
          <img 
            src="/path-to-your-image.png"
            alt="Anthony working"
            className="greeting-image"
          />
        </div>
      </div>
    </div>
  );
}; 