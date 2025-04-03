import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { portfolio } from "@/config/portfolio";
import "./Greeting.scss";
import LottieAnimation from '../LottieAnimation';
export var Greeting = function () {
    return (_jsx("section", { className: "greeting-section", id: "greeting", children: _jsxs("div", { className: "greeting-container", children: [_jsxs("div", { className: "greeting-text-box", children: [_jsx(motion.h1, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "greeting-title", children: portfolio.greeting.title }), _jsx(motion.p, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, className: "greeting-subtitle", children: portfolio.greeting.subtitle }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.4 }, className: "greeting-buttons", children: [_jsx("a", { href: "#contact", className: "primary-button", children: "Contact Me" }), _jsx("a", { href: portfolio.resumeLink, target: "_blank", rel: "noopener noreferrer", className: "secondary-button", children: "View Resume" })] })] }), _jsx("div", { className: "greeting-animation", children: _jsx(LottieAnimation, { animationPath: "/assets/lottie/landingPerson.json", loop: true, autoplay: true, style: { width: '100%', height: '100%' } }) })] }) }));
};
export default Greeting;
