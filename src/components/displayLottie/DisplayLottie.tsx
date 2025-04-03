import React from "react";
import LottieAnimation from "../LottieAnimation";

interface DisplayLottieProps {
  animationPath: string;
  className?: string;
}

const DisplayLottie: React.FC<DisplayLottieProps> = ({ animationPath, className }) => {
  return (
    <LottieAnimation
      animationPath={animationPath}
      loop={true}
      autoplay={true}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default DisplayLottie;
