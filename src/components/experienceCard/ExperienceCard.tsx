import React, { useState, useRef, FC } from "react";
import "./ExperienceCard.scss";
// Replace colorthief with fast-average-color
import { FastAverageColor } from 'fast-average-color';

interface CardInfo {
  company: string;
  desc: string;
  date: string;
  companylogo: string;
  role: string;
  descBullets?: string[];
}

interface ExperienceCardProps {
  cardInfo: CardInfo;
  isDark: boolean;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ cardInfo, isDark }) => {
  const [avgColor, setAvgColor] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const getColorArrays = () => {
    if (imgRef.current) {
      const fac = new FastAverageColor();
      // fac.getColor returns a promise; we update our state with the computed RGB string
      fac.getColorAsync(imgRef.current)
        .then((color: { rgba: string }) => {
          setAvgColor(color.rgba);
        })
        .catch((error: Error) => {
          console.error('Error getting average color:', error);
        });
    }
  };

  const GetDescBullets: FC<{ descBullets?: string[]; isDark: boolean }> = ({ descBullets, isDark }) => (
    <>
      {descBullets &&
        descBullets.map((item, i) => (
          <li key={i} className={isDark ? "subTitle dark-mode-text" : "subTitle"}>
            {item}
          </li>
        ))}
    </>
  );

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{ background: avgColor || undefined }} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>
        <img
          crossOrigin="anonymous"
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={getColorArrays}
        />
      </div>
      <div className="experience-text-details">
        <h5 className={isDark ? "experience-text-role dark-mode-text" : "experience-text-role"}>
          {cardInfo.role}
        </h5>
        <h5 className={isDark ? "experience-text-date dark-mode-text" : "experience-text-date"}>
          {cardInfo.date}
        </h5>
        <p className={isDark ? "subTitle experience-text-desc dark-mode-text" : "subTitle experience-text-desc"}>
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
