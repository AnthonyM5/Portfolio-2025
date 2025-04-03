import { motion } from 'framer-motion';
import { portfolio } from "@/config/portfolio";
import "./SplashScreen.scss";
import LottieAnimation from '../LottieAnimation';

const SplashScreen = () => {
  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo-container">
        <LottieAnimation
          animationPath="/assets/lottie/splashAnimation.json"
          loop={true}
          autoplay={true}
          width={200}
          height={200}
          className="animation"
        />
      </div>
    </motion.div>
  );
};

export default SplashScreen;