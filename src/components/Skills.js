import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import LottieAnimation from './LottieAnimation';
var Skills = function () {
    var skillCategories = [
        {
            name: "Frontend",
            skills: [
                { name: "React", level: 90, icon: "🔵" },
                { name: "JavaScript", level: 85, icon: "🟡" },
                { name: "HTML5", level: 95, icon: "🟠" },
                { name: "CSS3", level: 88, icon: "🔷" },
                { name: "Tailwind CSS", level: 80, icon: "🔷" },
                { name: "Vue.js", level: 75, icon: "🟢" }
            ]
        },
        {
            name: "Backend",
            skills: [
                { name: "Node.js", level: 85, icon: "🟢" },
                { name: "Express", level: 82, icon: "⚪" },
                { name: "Python", level: 78, icon: "🟡" },
                { name: "Django", level: 76, icon: "🟢" },
                { name: "PHP", level: 70, icon: "🟣" },
                { name: "Laravel", level: 72, icon: "🔴" }
            ]
        },
        {
            name: "Tools & Others",
            skills: [
                { name: "Git", level: 92, icon: "🟠" },
                { name: "Docker", level: 80, icon: "🔵" },
                { name: "AWS", level: 75, icon: "🟠" },
                { name: "Figma", level: 78, icon: "🟣" },
                { name: "CI/CD", level: 83, icon: "🟢" },
                { name: "Agile", level: 88, icon: "🔵" }
            ]
        }
    ];
    return (_jsx("section", { id: "skills", className: "py-20 bg-gray-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-5xl font-bold mb-8", children: "Skills & Proficiency" }), _jsx("div", { className: "w-64 h-64 mx-auto mb-8", children: _jsx(LottieAnimation, { animationPath: "/assets/lottie/codingPerson.json", height: "200px", className: "animation-visible" }) }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "My technical level in various technologies and tools that I've worked with" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto", children: skillCategories.map(function (category, index) { return (_jsxs("div", { className: "flex flex-col", children: [_jsx("h3", { className: "text-2xl font-bold mb-6 text-purple-700", children: category.name }), _jsx("div", { className: "space-y-6 flex-grow", children: category.skills.map(function (skill, i) { return (_jsxs("div", { className: "bg-white p-4 rounded-lg shadow-md", children: [_jsxs("div", { className: "flex items-center mb-3", children: [_jsx("span", { className: "text-2xl mr-3", "aria-hidden": "true", children: skill.icon }), _jsx("h4", { className: "text-lg font-semibold", children: skill.name })] }), _jsx("div", { className: "w-full bg-gray-200 rounded-full h-3", children: _jsx("div", { className: "bg-purple-600 h-3 rounded-full transition-all duration-1000 ease-out", style: { width: "".concat(skill.level, "%") } }) }), _jsxs("div", { className: "text-right mt-1 text-sm text-gray-600", children: [skill.level, "%"] })] }, i)); }) })] }, index)); }) })] }) }));
};
export default Skills;
