import React from "react";
import Lottie from "lottie-react";

interface DisplayLottieProps {
  animationData: any;
}

const DisplayLottie: React.FC<DisplayLottieProps> = ({ animationData }) => {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ width: "100%", height: "100%" }}
      rendererSettings={{
        preserveAspectRatio: "xMidYMid slice"
      }}
    />
  );
};

export default DisplayLottie;
