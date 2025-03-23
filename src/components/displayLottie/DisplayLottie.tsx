import React, { FC, Suspense } from "react";
import Lottie, { Options } from "lottie-react";
import Loading from "../../containers/loading/Loading"; // adjust if needed

interface DisplayLottieProps {
  animationData: any;
  height?: number;
  width?: number;
}

const DisplayLottie: FC<DisplayLottieProps> = ({ animationData, height = 300, width = 300 }) => {
  const options: Options = {
    animationData,
    loop: true,
    autoplay: true,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  return (
    <Suspense fallback={<Loading />}>
      <Lottie {...options} height={height} width={width} />
    </Suspense>
  );
};

export default DisplayLottie;
