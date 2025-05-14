import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolio } from '@/config/portfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Skills.scss';
export var Skills = function () {
    var _a = useInView({
        threshold: 0.1,
        triggerOnce: true
    }), ref = _a.ref, inView = _a.inView;
    var containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
    return (_jsx("section", { className: "skills-section", id: "skills", ref: ref, children: _jsxs("div", { className: "skills-container", children: [_jsx(motion.h2, { className: "section-title", initial: { opacity: 0, y: -20 }, animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }, transition: { duration: 0.6 }, children: portfolio.skills.title }), _jsx(motion.p, { className: "section-subtitle", initial: { opacity: 0 }, animate: inView ? { opacity: 1 } : { opacity: 0 }, transition: { duration: 0.6, delay: 0.2 }, children: portfolio.skills.subtitle }), _jsx(motion.div, { className: "skills-grid", variants: containerVariants, initial: "hidden", animate: inView ? "visible" : "hidden", children: portfolio.skills.skills.map(function (skill, index) { return (_jsxs(motion.div, { className: "skill-card", variants: itemVariants, children: [_jsx("div", { className: "skill-icon", children: skill.icon && _jsx(FontAwesomeIcon, { icon: skill.icon }) }), _jsx("h3", { children: skill.name }), _jsx("p", { children: skill.description })] }, index)); }) })] }) }));
};
export default Skills;
