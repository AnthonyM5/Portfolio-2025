import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import "./SplashScreen.scss";
import LottieAnimation from '../LottieAnimation';
var SplashScreen = function () {
    return (_jsx(motion.div, { className: "splash-screen", initial: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.5 }, children: _jsx("div", { className: "logo-container", children: _jsx(LottieAnimation, { animationPath: "/assets/lottie/splashAnimation.json", loop: true, autoplay: true, width: 200, height: 200, className: "animation" }) }) }));
};
export default SplashScreen;
