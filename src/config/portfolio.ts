interface Social {
  github: string;
  linkedin: string;
  twitter?: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
  category: string;
}

interface Skill {
  name: string;
  description: string;
  icon?: string;
}

interface Achievement {
  title: string;
  description: string;
  date?: string;
  link?: string;
  icon?: string;
}

interface Blog {
  title: string;
  summary: string;
  date: string;
  category: string;
  image: string;
  url: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const portfolio = {
  firstName: "Anthony",
  lastName: "Mai",
  title: "Software Engineer",
  description: "Building digital experiences with code and creativity",
  resumeLink: "/Resume_2025.pdf",
  
  greeting: {
    title: "Hi, I'm Anthony Mai",
    subtitle: "A passionate software engineer with expertise in building modern web applications and solving complex problems."
  },
  
  skills: {
    title: "Skills",
    subtitle: "My technical expertise and tools I work with",
    skills: [
      {
        name: "Frontend Development",
        description: "Building responsive and interactive user interfaces with modern frameworks",
        icon: "fa-solid fa-code"
      },
      {
        name: "React.js",
        description: "Creating dynamic and efficient user interfaces with React ecosystem",
        icon: "fa-brands fa-react"
      },
      {
        name: "JavaScript/TypeScript",
        description: "Developing robust applications with modern JavaScript and TypeScript",
        icon: "fa-brands fa-js"
      },
      {
        name: "Node.js",
        description: "Building scalable backend services and API integrations",
        icon: "fa-brands fa-node-js"
      },
      {
        name: "Python",
        description: "Developing applications and scripts for various purposes including data analysis",
        icon: "fa-brands fa-python"
      },
      {
        name: "CI/CD",
        description: "Setting up continuous integration and deployment pipelines",
        icon: "fa-solid fa-rocket"
      },
      {
        name: "AWS",
        description: "Deploying and managing cloud infrastructure and services",
        icon: "fa-brands fa-aws"
      },
      {
        name: "UI/UX Design",
        description: "Creating intuitive and appealing user experiences",
        icon: "fa-solid fa-palette"
      }
    ]
  },
  
  projects: {
    title: "Projects",
    subtitle: "A showcase of my recent work and personal projects",
    categories: ["Web", "Mobile", "Backend", "Design"],
    projects: [
      {
        title: "Personal Blog",
        description: "A blog built with Gatsby and React to share technical articles and thoughts on web development.",
        image: "/assets/image/placeholder.jpg",
        technologies: ["React", "Gatsby", "GraphQL", "Netlify"],
        demoLink: "https://anthonym5.github.io/my-awesome-blog/",
        codeLink: "https://github.com/AnthonyM5/my-awesome-blog",
        category: "Web"
      },
      {
        title: "Portfolio Website",
        description: "A modern portfolio website built with React and Framer Motion to showcase my skills and projects.",
        image: "/assets/image/placeholder.jpg",
        technologies: ["React", "TypeScript", "SCSS", "Framer Motion"],
        demoLink: "https://anthonym-portfolio.netlify.app/",
        codeLink: "https://github.com/AnthonyM5/portfolio-2025",
        category: "Web"
      },
      {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce application with product management, cart functionality, and payment integration.",
        image: "/assets/image/placeholder.jpg",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        demoLink: "https://anthonym-shop.herokuapp.com",
        codeLink: "https://github.com/AnthonyM5/ecommerce-platform",
        category: "Web"
      },
      {
        title: "Task Management App",
        description: "A mobile application for managing daily tasks and productivity with notifications and reminders.",
        image: "/assets/image/placeholder.jpg",
        technologies: ["React Native", "Redux", "Firebase"],
        demoLink: "https://expo.io/@anthonym/task-manager",
        codeLink: "https://github.com/AnthonyM5/task-manager-app",
        category: "Mobile"
      },
      {
        title: "API Gateway Service",
        description: "A backend service that handles API routing, authentication, and rate limiting for microservices.",
        image: "/assets/image/placeholder.jpg",
        technologies: ["Node.js", "Express", "JWT", "Redis"],
        codeLink: "https://github.com/AnthonyM5/api-gateway",
        category: "Backend"
      },
      {
        title: "Dashboard UI Kit",
        description: "A collection of reusable UI components for creating admin dashboards and data visualization interfaces.",
        image: "/assets/image/placeholder.jpg",
        technologies: ["React", "Storybook", "SCSS", "Chart.js"],
        demoLink: "https://anthonym-ui-kit.netlify.app",
        codeLink: "https://github.com/AnthonyM5/dashboard-ui-kit",
        category: "Design"
      }
    ]
  },
  
  achievements: {
    title: "Achievements",
    subtitle: "Recognition and milestones in my professional journey",
    achievements: [
      {
        title: "AWS Certified Developer",
        description: "Earned AWS Developer Associate certification demonstrating expertise in developing, deploying, and debugging cloud-based applications.",
        date: "June 2023",
        icon: "fa-brands fa-aws"
      },
      {
        title: "Top Contributor Award",
        description: "Recognized as a top contributor to the company's open-source projects, with over 200 merged pull requests.",
        date: "December 2022",
        icon: "fa-solid fa-trophy"
      },
      {
        title: "Speaker at React Conference",
        description: "Delivered a talk on 'Optimizing React Performance' at the annual React Developers Conference.",
        date: "September 2022",
        link: "https://reactconf.org/speakers/anthony-mai",
        icon: "fa-solid fa-microphone"
      },
      {
        title: "Published Technical Article",
        description: "Published an in-depth article on 'Modern Frontend Architecture' in a leading tech magazine.",
        date: "March 2022",
        link: "https://techmagazine.com/articles/modern-frontend-architecture",
        icon: "fa-solid fa-newspaper"
      }
    ]
  },
  
  blogs: {
    title: "Blog Posts",
    subtitle: "My thoughts and ideas on technology, development, and more",
    viewAllLink: "https://anthonym5.github.io/my-awesome-blog/",
    blogs: [
      {
        title: "The Evolution of React: From Hooks to Server Components",
        summary: "An exploration of how React has evolved over the years and what the future holds for the popular library.",
        date: "May 15, 2023",
        category: "React",
        image: "/assets/image/placeholder.jpg",
        url: "https://anthonym5.github.io/my-awesome-blog/react-evolution"
      },
      {
        title: "Mastering TypeScript: Advanced Types and Patterns",
        summary: "A deep dive into advanced TypeScript features that can make your code more robust and maintainable.",
        date: "April 2, 2023",
        category: "TypeScript",
        image: "/assets/image/placeholder.jpg",
        url: "https://anthonym5.github.io/my-awesome-blog/mastering-typescript"
      },
      {
        title: "Building Microservices with Node.js and Docker",
        summary: "A practical guide to creating scalable microservices architecture using Node.js and containerization.",
        date: "March 10, 2023",
        category: "Backend",
        image: "/assets/image/placeholder.jpg",
        url: "https://anthonym5.github.io/my-awesome-blog/microservices-nodejs"
      }
    ]
  },
  
  contact: {
    title: "Get in Touch",
    subtitle: "Have a project in mind or just want to say hello? Feel free to reach out!",
    email: "anthony.mai@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA"
  },
  
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/AnthonyM5",
      icon: "fa-brands fa-github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/anthonymai",
      icon: "fa-brands fa-linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/anthonymai",
      icon: "fa-brands fa-twitter"
    },
    {
      name: "Medium",
      url: "https://medium.com/@anthonymai",
      icon: "fa-brands fa-medium"
    }
  ]
};