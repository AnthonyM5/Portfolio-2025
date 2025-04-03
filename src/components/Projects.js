import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import LottieAnimation from './LottieAnimation';
var Projects = function () {
    var projects = [
        {
            title: 'Banking Dashboard',
            description: 'A modern banking dashboard application with real-time transaction monitoring and financial analytics.',
            image: '/assets/images/developer.svg', // Using SVG as fallback
            technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
            githubUrl: 'https://github.com/yourusername/banking-dashboard',
            liveUrl: '#banking-dashboard'
        },
        {
            title: 'Virtual Learning Platform',
            description: 'An interactive virtual learning platform with customizable courses, quizzes, and progress tracking.',
            image: '/assets/images/education.svg', // Using SVG as fallback
            technologies: ['Vue.js', 'Firebase', 'TailwindCSS'],
            githubUrl: 'https://github.com/yourusername/virtual-learning',
            liveUrl: '#virtual-learning'
        },
        {
            title: 'Early Childhood Education App',
            description: 'A child-friendly educational application with games and activities designed for early childhood development.',
            image: '/assets/images/mobile.svg', // Using SVG as fallback
            technologies: ['React Native', 'Redux', 'Firebase'],
            githubUrl: 'https://github.com/yourusername/education-app',
            liveUrl: '#education-app'
        }
    ];
    return (_jsx("section", { id: "projects", className: "py-20 bg-gray-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between mb-12", children: [_jsx("h2", { className: "text-4xl font-bold", children: "My Projects" }), _jsx("div", { className: "w-64 h-64", children: _jsx(LottieAnimation, { animationPath: "/assets/lottie/technology.json", height: "200px", className: "animation-visible" }) })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.map(function (project, index) { return (_jsxs("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden", children: [_jsx("div", { className: "w-full h-48 bg-gray-100 flex items-center justify-center p-4", children: _jsx("img", { src: project.image, alt: project.title, className: "max-h-full max-w-full object-contain" }) }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-xl font-bold mb-2", children: project.title }), _jsx("p", { className: "text-gray-600 mb-4", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: project.technologies.map(function (tech, i) { return (_jsx("span", { className: "px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm", children: tech }, i)); }) }), _jsxs("div", { className: "flex space-x-4", children: [project.githubUrl && (_jsx("a", { href: project.githubUrl, target: "_blank", rel: "noopener noreferrer", className: "text-purple-600 hover:underline", children: "GitHub" })), project.liveUrl && (_jsx("a", { href: project.liveUrl, target: "_blank", rel: "noopener noreferrer", className: "text-purple-600 hover:underline", children: "Live Demo" }))] })] })] }, index)); }) })] }) }));
};
export default Projects;
