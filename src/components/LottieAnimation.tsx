import React, { FC, Suspense, useEffect, useState, CSSProperties } from "react";
import Lottie from "lottie-react";
import { loadLottieAnimation } from '../utils/lottieLoader';

// Simple loading component as fallback
const LoadingFallback = () => (
  <div style={{ textAlign: 'center', padding: '1rem' }}>Loading animation...</div>
);

interface LottieAnimationProps {
  animationPath: string;
  height?: number | string;
  width?: number | string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const LottieAnimation: FC<LottieAnimationProps> = ({
  animationPath,
  height,
  width,
  loop = true,
  autoplay = true,
  className = '',
  style = {},
}) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    
    // Ensure path starts with / for public directory
    const path = animationPath.startsWith('/') ? animationPath : `/${animationPath}`;
    
    loadLottieAnimation(path)
      .then(data => {
        if (isMounted) {
          setAnimationData(data);
          setError(false);
        }
      })
      .catch(err => {
        console.error("Failed to load animation:", path, err);
        if (isMounted) {
          setError(true);
        }
      });
      
    return () => {
      isMounted = false;
    };
  }, [animationPath]);

  // Apply height and width to style if provided - Fix TypeScript error with correct typing
  const combinedStyle: CSSProperties = {
    ...style,
    ...(height ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
    ...(width ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
    visibility: 'visible' as const,
    opacity: 1,
    display: 'block'
  };

  if (error) {
    return <div className={className} style={combinedStyle}>Failed to load animation</div>;
  }

  if (!animationData) {
    return <LoadingFallback />;
  }

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Lottie 
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={combinedStyle}
        className={`lottie-animation ${className}`}
        rendererSettings={{ 
          preserveAspectRatio: "xMidYMid slice",
          progressiveLoad: false
        }}
      />
    </Suspense>
  );
};

export default LottieAnimation;
