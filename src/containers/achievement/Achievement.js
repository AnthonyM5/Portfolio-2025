import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolio } from '@/config/portfolio';
import './Achievement.scss';
export var Achievement = function () {
    var _a = useInView({
        threshold: 0.1,
        triggerOnce: true
    }), ref = _a.ref, inView = _a.inView;
    var containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    var itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    return (_jsx("section", { className: "achievement-section", id: "achievements", ref: ref, children: _jsxs("div", { className: "achievement-container", children: [_jsx(motion.h2, { className: "section-title", initial: { opacity: 0, y: -20 }, animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }, transition: { duration: 0.6 }, children: portfolio.achievements.title }), _jsx(motion.p, { className: "section-subtitle", initial: { opacity: 0 }, animate: inView ? { opacity: 1 } : { opacity: 0 }, transition: { duration: 0.6, delay: 0.2 }, children: portfolio.achievements.subtitle }), _jsx(motion.div, { className: "achievements-grid", variants: containerVariants, initial: "hidden", animate: inView ? "visible" : "hidden", children: portfolio.achievements.achievements.map(function (achievement, index) { return (_jsxs(motion.div, { className: "achievement-card", variants: itemVariants, children: [_jsx("div", { className: "achievement-icon", children: achievement.icon && _jsx("i", { className: achievement.icon }) }), _jsxs("div", { className: "achievement-content", children: [_jsx("h3", { children: achievement.title }), _jsx("p", { children: achievement.description })] })] }, index)); }) })] }) }));
};
export default Achievement;
