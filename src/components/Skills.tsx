import React from 'react';
import LottieAnimation from './LottieAnimation';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
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

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-8">Skills & Proficiency</h2>
          <div className="w-64 h-64 mx-auto mb-8">
            <LottieAnimation 
              animationPath="/assets/lottie/codingPerson.json" 
              height="200px"
              className="animation-visible"
            />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My technical level in various technologies and tools that I've worked with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-purple-700">{category.name}</h3>
              <div className="space-y-6 flex-grow">
                {category.skills.map((skill, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3" aria-hidden="true">{skill.icon}</span>
                      <h4 className="text-lg font-semibold">{skill.name}</h4>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="text-right mt-1 text-sm text-gray-600">{skill.level}%</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
