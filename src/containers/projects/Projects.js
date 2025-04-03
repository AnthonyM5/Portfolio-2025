import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolio } from '@/config/portfolio';
import './Projects.scss';
export var Projects = function () {
    var _a = useInView({
        threshold: 0.1,
        triggerOnce: true
    }), ref = _a.ref, inView = _a.inView;
    var _b = useState('all'), filter = _b[0], setFilter = _b[1];
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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    var filteredProjects = filter === 'all'
        ? portfolio.projects.projects
        : portfolio.projects.projects.filter(function (project) { return project.category === filter; });
    return (_jsx("section", { className: "projects-section", id: "projects", ref: ref, children: _jsxs("div", { className: "projects-container", children: [_jsx(motion.h2, { className: "section-title", initial: { opacity: 0, y: -20 }, animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }, transition: { duration: 0.6 }, children: portfolio.projects.title }), _jsx(motion.p, { className: "section-subtitle", initial: { opacity: 0 }, animate: inView ? { opacity: 1 } : { opacity: 0 }, transition: { duration: 0.6, delay: 0.2 }, children: portfolio.projects.subtitle }), _jsxs(motion.div, { className: "project-filters", initial: { opacity: 0, y: 20 }, animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }, transition: { duration: 0.6, delay: 0.3 }, children: [_jsx("button", { className: filter === 'all' ? 'active' : '', onClick: function () { return setFilter('all'); }, children: "All" }), portfolio.projects.categories.map(function (category, index) { return (_jsx("button", { className: filter === category ? 'active' : '', onClick: function () { return setFilter(category); }, children: category }, index)); })] }), _jsx(motion.div, { className: "projects-grid", variants: containerVariants, initial: "hidden", animate: inView ? "visible" : "hidden", children: filteredProjects.map(function (project, index) { return (_jsxs(motion.div, { className: "project-card", variants: itemVariants, children: [_jsx("div", { className: "project-image", children: _jsx("img", { src: project.image, alt: project.title }) }), _jsxs("div", { className: "project-content", children: [_jsx("h3", { children: project.title }), _jsx("p", { children: project.description }), _jsx("div", { className: "project-tags", children: project.technologies.map(function (tech, techIndex) { return (_jsx("span", { className: "project-tag", children: tech }, techIndex)); }) })] })] }, index)); }) })] }) }));
};
export default Projects;
