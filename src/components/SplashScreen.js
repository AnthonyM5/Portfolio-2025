import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import styles from './SplashScreen.module.scss';
import LottieAnimation from './LottieAnimation';
var SplashScreen = function () {
    return (_jsx(motion.div, { className: styles.splashScreen, initial: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.5 }, children: _jsxs("div", { className: styles.logoContainer, children: [_jsx(LottieAnimation, { animationPath: "/assets/lottie/splashAnimation.json", loop: true, autoplay: true, width: 200, height: 200, className: styles.animation }), _jsx(motion.div, { className: styles.logo, initial: { scale: 0 }, animate: { scale: 1 }, transition: { duration: 0.5, delay: 0.2 }, children: "Anthony Mai" })] }) }));
};
export default SplashScreen;
