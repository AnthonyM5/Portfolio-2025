import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import LottieAnimation from './LottieAnimation';
var Experience = function () {
    var experiences = [
        {
            company: 'Capital One',
            position: 'Senior Developer',
            responsibilities: [
                'Led development of key features for banking products',
                'Mentored junior developers and conducted code reviews',
                'Improved CI/CD pipeline, reducing deployment time by 30%'
            ]
        },
        {
            company: 'Root Learning',
            position: 'Full Stack Engineer',
            responsibilities: [
                'Developed interactive virtual learning platforms',
                'Implemented responsive designs for cross-platform compatibility',
                'Integrated third-party APIs for enhanced learning experiences'
            ]
        },
        {
            company: 'MBD Early Childhood Center',
            position: 'Educational Technology Specialist',
            responsibilities: [
                'Created child-friendly educational applications',
                'Maintained and improved existing educational technology systems',
                'Provided technical support for educational staff'
            ]
        }
    ];
    return (_jsx("section", { id: "experience", className: "py-20", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between mb-12", children: [_jsx("h2", { className: "text-4xl font-bold", children: "Work Experience" }), _jsx("div", { className: "w-64 h-64", children: _jsx(LottieAnimation, { animationPath: "/assets/lottie/build.json", height: "200px", className: "animation-visible" }) })] }), _jsx("div", { className: "space-y-12", children: experiences.map(function (experience, index) { return (_jsxs("div", { className: "flex flex-col md:flex-row", children: [_jsxs("div", { className: "md:w-1/3 mb-4 md:mb-0", children: [_jsx("h3", { className: "text-xl font-bold", children: experience.company }), _jsx("img", { src: "/assets/images/".concat(experience.company.toLowerCase().replace(/\s+/g, '-'), ".svg"), alt: experience.company, className: "w-16 h-16 mt-2", onError: function (e) {
                                            // Fallback if image doesn't exist
                                            e.target.src = '/assets/images/company.svg';
                                        } })] }), _jsxs("div", { className: "md:w-2/3", children: [_jsx("h4", { className: "text-lg font-semibold", children: experience.position }), _jsx("ul", { className: "list-disc pl-5 mt-2 space-y-2", children: experience.responsibilities.map(function (resp, i) { return (_jsx("li", { className: "text-gray-700", children: resp }, i)); }) })] })] }, index)); }) })] }) }));
};
export default Experience;
