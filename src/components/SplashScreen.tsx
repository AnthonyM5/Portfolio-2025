import { motion } from 'framer-motion';
import styles from './SplashScreen.module.scss';
import LottieAnimation from './LottieAnimation';

const SplashScreen = () => {
  return (
    <motion.div
      className={styles.splashScreen}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.logoContainer}>
        <LottieAnimation
          animationPath="/assets/lottie/splashAnimation.json"
          loop={true}
          autoplay={true}
          width={200}
          height={200}
          className={styles.animation}
        />
        <motion.div
          className={styles.logo}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Anthony Mai
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;