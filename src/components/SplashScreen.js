import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { loadLottieAnimation } from '../utils/lottieLoader';
import styles from './SplashScreen.module.scss';
var SplashScreen = function () {
    var _a = useState(null), animationData = _a[0], setAnimationData = _a[1];
    useEffect(function () {
        // The animation is now in the public directory, so we use a path relative to the public root
        var animationPath = '/assets/lottie/splashAnimation.json';
        loadLottieAnimation(animationPath)
            .then(function (data) {
            setAnimationData(data);
        })
            .catch(function (err) {
            console.error("Failed to load animation:", err);
        });
    }, []);
    return (_jsx(motion.div, { className: styles.splashScreen, initial: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.5 }, children: _jsxs("div", { className: styles.logoContainer, children: [animationData && (_jsx(Lottie, { animationData: animationData, loop: true, autoplay: true, style: { width: 200, height: 200 }, className: styles.animation })), _jsx(motion.div, { className: styles.logo, initial: { scale: 0 }, animate: { scale: 1 }, transition: { duration: 0.5, delay: 0.2 }, children: "Anthony Mai" })] }) }));
};
export default SplashScreen;
