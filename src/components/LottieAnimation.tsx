import React, { FC, Suspense } from "react";
import Lottie from "lottie-react";

// Simple loading component as fallback
const LoadingFallback = () => (
  <div style={{ textAlign: 'center', padding: '1rem' }}>Loading animation...</div>
);

interface LottieAnimationProps {
  animationData: any;
  height?: number;
  width?: number;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const LottieAnimation: FC<LottieAnimationProps> = ({
  animationData,
  height,
  width,
  loop = true,
  autoplay = true,
  className = '',
  style = {},
}) => {
  // Prepare options for Lottie component
  const options = {
    animationData,
    loop,
    autoplay,
    rendererSettings: { 
      preserveAspectRatio: "xMidYMid slice" 
    },
  };

  // Apply height and width to style if provided
  const combinedStyle = {
    ...style,
    ...(height ? { height: `${height}px` } : {}),
    ...(width ? { width: `${width}px` } : {})
  };

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Lottie 
        {...options} 
        style={combinedStyle}
        className={className}
      />
    </Suspense>
  );
};

export default LottieAnimation;
