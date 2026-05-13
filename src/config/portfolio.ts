import { faGithub, faLinkedin, faAws, faAngular, faReact, faJs } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faObjectGroup, faPlug, faVial, faServer, faGraduationCap, faLayerGroup, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  repoUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  logo: string;
  location: string;
  description: string[];
  technologies: string[];
  website?: string;
  links?: ProjectLink[];
}

export interface PortfolioConfig {
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  resumeLink: string;
  greeting: {
    title: string;
    subtitle: string;
  };
  social: {
    github: string;
    linkedin: string;
  };
  skills: {
    title: string;
    subtitle: string;
    skills: Array<{
      name: string;
      description: string;
      icon: IconDefinition;
    }>;
  };
  projects: {
    title: string;
    subtitle: string;
    categories: string[];
    projects: ProjectItem[];
  };
  experience: {
    title: string;
    subtitle: string;
    experiences: ExperienceItem[];
  };
  achievements: {
    title: string;
    subtitle: string;
    achievements: Array<{
      title: string;
      description: string;
      icon: IconDefinition;
    }>;
  };
  blogs: {
    title: string;
    subtitle: string;
    viewAllLink: string;
    blogs: Array<{
      title: string;
      summary: string;
      date: string;
      category: string;
      image: string;
      url: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    location: string;
  };
  socialLinks: Array<{
    name: string;
    url: string;
    icon: IconDefinition;
  }>;
  email: string;
}

export const portfolio: PortfolioConfig = {
  firstName: "Anthony",
  lastName: "Mai",
  title: "Product Engineering Specialist",
  description: "Front-end developer specializing in Angular, React.js, and Ionic for web and mobile applications",
  resumeLink: "/Resume_2025.pdf",
  
  greeting: {
    title: "Hi, I'm Anthony",
    subtitle: "Frontend Engineer with over 4 years of consulting experience at Accenture, delivering scalable, high-impact web and mobile applications across education, e-commerce, and banking domains. Proven track record in Angular/NgRX and React.js development, state management, and cross-platform UI/UX optimization. Skilled in managing multiple frontend libraries across large codebases using modular architectures, Nx monorepos, and custom design systems. Adept at implementing real-time features with Socket.io/Redis, building analytics pipelines with RxJS, and integrating third-party services like Google Analytics, Stripe, and DNS configurations. Known for debugging complex production issues, driving agile ceremonies, and collaborating with cross-functional teams to ship enterprise-grade software that is performant, maintainable, and secure."
  },

  social: {
    github: 'AnthonyM5',
    linkedin: 'AnthonyMai5'
  },
  
  skills: {
    title: "Skills",
    subtitle: "My technical expertise and industry experience",
    skills: [
      {
        name: "Frontend Development",
        description: "Building responsive web and mobile apps with Angular, React.js, and Ionic",
        icon: faObjectGroup
      },
      {
        name: "Angular & Ionic",
        description: "Creating performant applications with NgRX/RxJS-based state management",
        icon: faAngular
      },
      {
        name: "React.js/Native",
        description: "Developing modern applications with React ecosystem technologies",
        icon: faReact
      },
      {
        name: "TypeScript",
        description: "Writing type-safe, maintainable code for complex applications",
        icon: faJs
      },
      {
        name: "API Integration",
        description: "Working with middleware platforms like Hybris and Apigee for SAP based web apps",
        icon: faPlug
      },
      {
        name: "Testing",
        description: "Implementing Jest and Cypress for unit and regression testing",
        icon: faVial
      },
      {
        name: "Backend Development",
        description: "Building services with Node.js and Ruby on Rails",
        icon: faServer
      },
      {
        name: "AWS",
        description: "Cloud Practitioner certified with experience in deployment and services",
        icon: faAws
      }
    ]
  },
  
  projects: {
    title: "Projects",
    subtitle: "A showcase of my professional work and experience",
    categories: ["Web", "Mobile", "Integration", "Analytics"],
    projects: [
      {
        title: "Next Platform Chart",
        description: "A production-ready crypto tracking dashboard with real-time price data, interactive charts, and technical indicators including RSI, SMA, MACD, and Bollinger Bands.",
        image: "assets/images/image-placeholder-icon-15-1769662654.png",
        technologies: ["Next.js", "TypeScript", "Chart.js", "CoinGecko API"],
        category: "Web",
        liveUrl: "https://thechart.netlify.app/"
      },
      {
        title: "Educational Mobile App Modernization",
        description: "Successfully modernized a legacy application for an education support services company, leveraging Angular/Ionic and NgRX/RxJS-based state management, resulting in notable performance improvements and enhanced user experience.",
        image: "assets/images/mybrightday.jpg",
        technologies: ["Angular", "Ionic", "NgRX", "RxJS", "Jest"],
        category: "Mobile",
        appStoreUrl: "https://apps.apple.com/us/app/my-bright-day/id1025221590?see-all=reviews",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.brighthorizons.mybrightday&hl=en"
      },
      {
        title: "eCommerce Integration",
        description: "Integrated middleware platforms (Hybris/Mirakl) for SAP based eCommerce web app, collaborating with Hybris/Apigee developers to integrate APIs and troubleshoot bugs during UAT testing.",
        image: "assets/images/E-Commerce-Logo-Transparent-File-2932804878.png",
        technologies: ["JavaScript", "SAP", "Hybris", "Apigee", "API Integration"],
        category: "Integration"
      },
      {
        title: "Learning Platform Enhancement",
        description: "Developed a React.js MVP for a feature enhancement on a synchronous learning/training platform, using Redis and Socket.io to create a synchronous experience for users on mobile devices.",
        image: "assets/images/root-logo-share-fb.jpg",
        technologies: ["React.js", "Node.js", "Redis", "Socket.io", "Heroku"],
        category: "Web"
      },
      {
        title: "Banking Analytics Implementation",
        description: "Added analytics to a massive online Angular web application for banking customers to track user flows using RxJS to gather metrics for Domestic Wires and Cashiers Checks, visualized in Google Analytics.",
        image: "assets/images/Finance-Banking-PNG-Image-1748650174.png",
        technologies: ["Angular", "RxJS", "Google Analytics", "TypeScript"],
        category: "Analytics"
      }
    ]
  },
  
  experience: {
  title: "Professional Experience",
  subtitle: "My career journey in software development",
  experiences: [
    {
      company: "Financial Services/Banking",
      position: "Frontend Developer",
      logo: "assets/images/Banking-Finance.png",
      location: "New York, NY",
      description: [
        "Built and maintained role-based access control across a high-traffic internal Angular application, gating UI paths and feature visibility based on a combination of associate role and customer profile status -- ensuring associates only accessed what their entitlements allowed.",
        "Designed and shipped multi-step form workflows from scratch, including a reactivation feature with dynamic branching logic that adapted based on associate and customer inputs across complex conditional paths.",
        "Instrumented analytics across critical user flows using RxJS and Google Analytics, giving product teams visibility into how customers moved through Domestic Wires and Cashier's Check journeys.",
        "Resolved production-level bugs under time pressure to reduce friction for bank associates and maintain SLA commitments on a mission-critical internal platform."
      ],
      technologies: ["Angular", "RxJS", "NGRX", "Google Analytics", "TypeScript"],
      website: "#"
    },
    {
      company: "Synchronous Learning/Training Platform",
      position: "Full Stack Developer",
      logo: "assets/images/root-logo-share-fb.jpg",
      location: "New York, NY",
      description: [
        "Built a React MVP for a real-time, in-person data collection feature, using Redis and Socket.io to keep mobile users synchronized across sessions with low-latency state updates.",
        "Restored international platform access -- including for users in China -- by deploying a custom Heroku domain configuration for an existing Node.js service.",
        "Led a full SAST security assessment, resolving 100% of open findings including port restrictions, unnecessary HTTP methods, and exposed headers."
      ],
      technologies: ["React.js", "Node.js", "Redis", "Socket.io", "Heroku"],
      website: "#"
    },
    {
      company: "Mirakl/Hybris eCommerce Marketplace",
      position: "Web Developer",
      logo: "assets/images/SGWS.jpg",
      location: "New York, NY",
      description: [
        "Integrated Hybris and Mirakl middleware into customer-facing frontend flows, including a checkout rework and Stripe payment integration; coordinated directly with Stripe on testing and resolved key integration blockers to ship the feature.",
        "Partnered with Hybris and Apigee developers to integrate and troubleshoot APIs across UAT cycles, keeping the client demo timeline on track.",
        "Maintained web standards and usability across the platform while collaborating directly with clients during walkthroughs to align features and surface bugs early."
      ],
      technologies: ["JavaScript", "SAP", "Hybris", "Mirakl", "Apigee", "Stripe"],
      website: "#"
    },
    {
      company: "Education Support Services Company",
      position: "Mobile App Developer",
      logo: "assets/images/mybrightday.jpg",
      location: "New York, NY",
      description: [
        "Modernized a legacy mobile application using Angular, Ionic, and NgRX/RxJS-based state management, delivering meaningful performance improvements and a more reliable user experience for parents and staff.",
        "Built a shared component library and design system using Ionic, increasing reusability across multiple apps in the product suite and reducing duplication across teams.",
        "Architected a Nest.js middleware layer to handle real-time communications between staff and parents, improving reliability and decoupling the communication layer from the client.",
        "Established a unit testing culture using Jest, reducing regressions and making the codebase easier for the team to iterate on with confidence."
      ],
      technologies: ["Angular", "Ionic", "NgRX", "RxJS", "Jest", "Nest.js", "Socket.io"],
      website: "https://apps.apple.com/us/app/my-bright-day/id1025221590?see-all=reviews",
      links: [
        {
          label: "App Store",
          url: "https://apps.apple.com/us/app/my-bright-day/id1025221590?see-all=reviews"
        },
        {
          label: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.brighthorizons.mybrightday&hl=en"
        }
      ]
    }
  ]
},
  
  achievements: {
    title: "Education & Certifications",
    subtitle: "Academic background and professional qualifications",
    achievements: [
      {
        title: "CUNY School of Professional Studies",
        description: "Information Systems",
        icon: faGraduationCap
      },
      {
        title: "AWS Cloud Practitioner",
        description: "Certified in fundamental AWS cloud knowledge and services",
        icon: faAws
      },
      {
        title: "Full Stack Development",
        description: "Specialized in both frontend and backend technologies across multiple stacks",
        icon: faLayerGroup
      },
      {
        title: "Testing & Quality Assurance",
        description: "Jest and Cypress testing frameworks for comprehensive application testing",
        icon: faCheckCircle
      }
    ]
  },
  
  blogs: {
    title: "Industry Experience",
    subtitle: "Sectors where I've applied my development expertise",
    viewAllLink: "#",
    blogs: [
      {
        title: "Retail/eCommerce/Logistics",
        summary: "Developing eCommerce platforms with middleware integration and optimized user experiences.",
        date: "",
        category: "Industry",
        image: "assets/images/Ecommerce-Free-PNG-Image-1130990915.png",
        url: "#"
      },
      {
        title: "Early Childhood Education",
        summary: "Building mobile applications for educational support services with enhanced communication features.",
        date: "",
        category: "Industry",
        image: "assets/images/mybrightday.jpg",
        url: "#"
      },
      {
        title: "Financial Services/Banking",
        summary: "Implementing analytics and developing secure, high-performance applications for banking customers.",
        date: "",
        category: "Industry",
        image: "assets/images/Finance-Banking-PNG-Image-1748650174.png",
        url: "#"
      }
    ]
  },
  
  contact: {
    title: "Get in Touch",
    subtitle: "Interested in working together or have a question? Feel free to reach out!",
    email: "thereisnoneo1@gmail.com",
    phone: "917-887-0970",
    location: "Astoria, NY"
  },
  
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/AnthonyM5",
      icon: faGithub
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/anthonymai5",
      icon: faLinkedin
    },
    {
      name: "Portfolio",
      url: "https://anthonym-portfolio.netlify.app",
      icon: faGlobe
    }
  ],
  email: 'thereisnoneo1@gmail.com'
};