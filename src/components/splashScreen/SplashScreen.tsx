import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';
import { portfolio } from "@/config/portfolio";
import "./SplashScreen.scss";
import { loadLottieAnimation } from '../../utils/lottieLoader';

const SplashScreen = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const animationPath = '/assets/lottie/splashAnimation.json';
    
    loadLottieAnimation(animationPath)
      .then(data => {
        setAnimationData(data);
      })
      .catch(err => {
        console.error("Failed to load animation:", err);
      });
  }, []);

  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo-container">
        {animationData && (
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            style={{ width: 200, height: 200 }}
            className="animation"
          />
        )}
        <motion.div
          className="logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {portfolio.firstName[0]}{portfolio.lastName[0]}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;