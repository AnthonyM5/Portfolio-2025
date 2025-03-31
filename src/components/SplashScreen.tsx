import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { loadLottieAnimation } from '../utils/lottieLoader';
import styles from './SplashScreen.module.scss';

const SplashScreen = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // The animation is now in the public directory, so we use a path relative to the public root
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
      className={styles.splashScreen}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.logoContainer}>
        {animationData && (
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: 200, height: 200 }}
            className={styles.animation}
          />
        )}
        <motion.div
          className={styles.logo}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          AM
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;