import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';
import { portfolio } from "@/config/portfolio";
import "./SplashScreen.scss";
import { loadLottieAnimation } from '../../utils/lottieLoader';
var SplashScreen = function () {
    var _a = useState(null), animationData = _a[0], setAnimationData = _a[1];
    useEffect(function () {
        var animationPath = '/assets/lottie/splashAnimation.json';
        loadLottieAnimation(animationPath)
            .then(function (data) {
            setAnimationData(data);
        })
            .catch(function (err) {
            console.error("Failed to load animation:", err);
        });
    }, []);
    return (_jsx(motion.div, { className: "splash-screen", initial: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.5 }, children: _jsxs("div", { className: "logo-container", children: [animationData && (_jsx(Lottie, { animationData: animationData, loop: true, autoplay: true, rendererSettings: { preserveAspectRatio: "xMidYMid slice" }, style: { width: 200, height: 200 }, className: "animation" })), _jsxs(motion.div, { className: "logo", initial: { scale: 0 }, animate: { scale: 1 }, transition: { duration: 0.5, delay: 0.2 }, children: [portfolio.firstName[0], portfolio.lastName[0]] })] }) }));
};
export default SplashScreen;
