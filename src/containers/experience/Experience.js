import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolio } from '@/config/portfolio';
import ExperienceCard from '@/components/experienceCard/ExperienceCard';
import './Experience.scss';
export var Experience = function () {
    var _a = useInView({
        threshold: 0.1,
        triggerOnce: true
    }), ref = _a.ref, inView = _a.inView;
    return (_jsx("section", { className: "experience-section", id: "experience", ref: ref, children: _jsxs("div", { className: "experience-container", children: [_jsx(motion.h2, { className: "section-title", initial: { opacity: 0, y: -20 }, animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }, transition: { duration: 0.6 }, children: portfolio.experience.title }), _jsx(motion.p, { className: "section-subtitle", initial: { opacity: 0 }, animate: inView ? { opacity: 1 } : { opacity: 0 }, transition: { duration: 0.6, delay: 0.2 }, children: portfolio.experience.subtitle }), _jsx("div", { className: "experience-timeline", children: portfolio.experience.experiences.map(function (experience, index) { return (_jsx(ExperienceCard, { index: index, company: experience.company, position: experience.position, logo: experience.logo, location: experience.location, description: experience.description, technologies: experience.technologies, website: experience.website }, index)); }) })] }) }));
};
export default Experience;
