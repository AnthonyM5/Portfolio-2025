import React from "react";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import splashAnimation from "../../assets/lottie/splashAnimation.json"; // Ensure this asset is present

const SplashScreen: React.FC = () => {
  return (
    <div className="splash-container">
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashAnimation} />
      </div>
      <div className="splash-title-container">
        <h1 className="splash-title">Welcome to My Portfolio</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
