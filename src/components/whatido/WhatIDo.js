import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FiCode, FiSmartphone, FiCloud } from 'react-icons/fi';
import './WhatIDo.css';
var WhatIDo = function () {
    var services = [
        {
            icon: _jsx(FiCode, { size: 40 }),
            title: "Develop highly interactive Front end / User Interfaces for your web and mobile applications",
            description: "Using React.js / Next.js / React Native and other modern frameworks"
        },
        {
            icon: _jsx(FiSmartphone, { size: 40 }),
            title: "Progressive Web Applications ( PWA ) in normal and SPA Stacks",
            description: "Building responsive and performant web apps that work offline"
        },
        {
            icon: _jsx(FiCloud, { size: 40 }),
            title: "Integration of third party services such as Firebase/ AWS / Digital Ocean",
            description: "Experience with cloud platforms and third-party integrations"
        }
    ];
    return (_jsx("section", { className: "what-i-do-section", children: _jsxs("div", { className: "container", children: [_jsx("h2", { className: "section-title animate-slide-up", children: "What I do" }), _jsxs("div", { className: "tech-stack-grid stagger-children", children: [_jsxs("div", { className: "tech-icons", children: [_jsx("img", { src: "/icons/html5.svg", alt: "HTML5", className: "tech-icon" }), _jsx("img", { src: "/icons/css3.svg", alt: "CSS3", className: "tech-icon" }), _jsx("img", { src: "/icons/sass.svg", alt: "Sass", className: "tech-icon" }), _jsx("img", { src: "/icons/js.svg", alt: "JavaScript", className: "tech-icon" }), _jsx("img", { src: "/icons/react.svg", alt: "React", className: "tech-icon" }), _jsx("img", { src: "/icons/node.svg", alt: "Node.js", className: "tech-icon" }), _jsx("img", { src: "/icons/swift.svg", alt: "Swift", className: "tech-icon" }), _jsx("img", { src: "/icons/npm.svg", alt: "npm", className: "tech-icon" })] }), _jsxs("div", { className: "tech-icons second-row", children: [_jsx("img", { src: "/icons/sql.svg", alt: "SQL", className: "tech-icon" }), _jsx("img", { src: "/icons/aws.svg", alt: "AWS", className: "tech-icon" }), _jsx("img", { src: "/icons/firebase.svg", alt: "Firebase", className: "tech-icon" }), _jsx("img", { src: "/icons/python.svg", alt: "Python", className: "tech-icon" }), _jsx("img", { src: "/icons/docker.svg", alt: "Docker", className: "tech-icon" })] })] }), _jsx("div", { className: "services-grid", children: services.map(function (service, index) { return (_jsxs("div", { className: "what-i-do-card", style: { animationDelay: "".concat(index * 0.2, "s") }, children: [_jsx("div", { className: "card-icon", children: service.icon }), _jsx("h3", { children: service.title }), _jsx("p", { children: service.description })] }, index)); }) })] }) }));
};
export default WhatIDo;
