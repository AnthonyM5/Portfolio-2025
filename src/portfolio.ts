export interface WorkExperienceItem {
  role: string;
  company: string;
  companylogo: string;
  date: string;
  desc: string;
  descBullets?: string[];
}

export const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: "/assets/images/facebookLogo.png",
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      descBullets: ["Improved UI performance", "Implemented shared components"]
    },
    // ...additional items as needed...
  ]
};

export interface ProjectItem {
  image?: string;
  projectName: string;
  projectDesc: string;
  footerLink?: { name: string; url: string }[];
}

export const bigProjects = {
  display: true,
  title: "Big Projects",
  subtitle: "Startups and companies I helped create their tech",
  projects: [
    {
      image: "/assets/images/saayaHealthLogo.webp",
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      footerLink: [
        { name: "Visit Website", url: "http://saayahealth.com/" }
      ]
    },
    // ...additional projects as needed...
  ]
};

interface GreetingType {
  title: string;
  subTitle: string;
  github: string;
  linkedin: string;
}

interface SkillType {
  name: string;
  level: string;
  description: string;
}

interface ProjectType {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
}

export const greeting: GreetingType = {
  title: "Hi, I'm Anthony Mai",
  subTitle: "A passionate Full Stack Developer specializing in building exceptional digital experiences",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername"
};

export const skills: SkillType[] = [
  {
    name: "React & React Native",
    level: "Advanced",
    description: "Building responsive web applications and mobile apps"
  },
  {
    name: "TypeScript",
    level: "Advanced",
    description: "Developing type-safe applications"
  },
  {
    name: "Node.js",
    level: "Intermediate",
    description: "Creating scalable backend services"
  },
  {
    name: "Python",
    level: "Intermediate",
    description: "Data analysis and automation"
  }
];

export const projects: ProjectType[] = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and TypeScript",
    image: "/projects/portfolio.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com"
  }
  // Add more projects here
];
