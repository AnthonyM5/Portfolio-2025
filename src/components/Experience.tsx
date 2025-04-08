import React from 'react';
import LottieAnimation from './LottieAnimation';

interface Experience {
  company: string;
  position: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const experiences: Experience[] = [
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

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="text-4xl font-bold">Work Experience</h2>
          <div className="w-64 h-64 relative">
            <img 
              src="/assets/images/developeractivity.svg" 
              alt="Developer Activity"
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
            <LottieAnimation 
              animationPath="/assets/lottie/build.json"
              height="200px"
              className="animation-visible"
            />
          </div>
        </div>
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-xl font-bold">{experience.company}</h3>
                <img 
                  src={`/assets/images/${experience.company.toLowerCase().replace(/\s+/g, '-')}.svg`} 
                  alt={experience.company}
                  className="w-16 h-16 mt-2"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    (e.target as HTMLImageElement).src = '/assets/images/company.svg';
                  }}
                />
              </div>
              <div className="md:w-2/3">
                <h4 className="text-lg font-semibold">{experience.position}</h4>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  {experience.responsibilities.map((resp, i) => (
                    <li key={i} className="text-gray-700">{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
