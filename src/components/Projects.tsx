import React from 'react';
import LottieAnimation from './LottieAnimation';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
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

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="text-4xl font-bold">My Projects</h2>
          <div className="w-64 h-64">
            <LottieAnimation 
              animationPath="/assets/lottie/technology.json"
              height="200px"
              className="animation-visible"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center p-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
