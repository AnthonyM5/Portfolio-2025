import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import './ExperienceCard.scss';
var ExperienceCard = function (_a) {
    var company = _a.company, position = _a.position, logo = _a.logo, location = _a.location, description = _a.description, technologies = _a.technologies, website = _a.website, _b = _a.index, index = _b === void 0 ? 0 : _b;
    return (_jsxs(motion.div, { className: "experience-card", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, children: [_jsxs("div", { className: "experience-header", children: [logo && (_jsx("div", { className: "company-logo", children: _jsx("img", { src: logo, alt: "".concat(company, " logo") }) })), _jsxs("div", { className: "experience-title", children: [_jsx("h3", { children: position }), _jsxs("div", { className: "company-info", children: [_jsx("h4", { children: website ? (_jsx("p", { children: company })) : (company) }), _jsx("div", { className: "experience-meta", children: _jsx("span", { className: "location", children: location }) })] })] })] }), _jsx("div", { className: "experience-content", children: _jsx("ul", { className: "responsibilities", children: description.map(function (item, i) { return (_jsx("li", { children: item }, i)); }) }) }), _jsx("div", { className: "experience-footer", children: _jsx("div", { className: "technologies", children: technologies.map(function (tech, i) { return (_jsx("span", { className: "tech-tag", children: tech }, i)); }) }) })] }));
};
export default ExperienceCard;
