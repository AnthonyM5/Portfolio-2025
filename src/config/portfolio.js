export var portfolio = {
    firstName: "Anthony",
    lastName: "Mai",
    title: "Product Engineering Specialist",
    description: "Front-end developer specializing in Angular, React.js, and Ionic for web and mobile applications",
    resumeLink: "/Resume_2025.pdf",
    greeting: {
        title: "Hi, I'm Anthony Mai",
        subtitle: "I'm an engineer specializing in front-end development with Angular, (Ionic) and React.js. I've built single-page applications (SPAs) and worked on mobile apps, focusing on performance and seamless user experiences in multiple industries including retail/eCommerce/logistics, B2B/B2C, early childhood education, and banking."
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
                icon: "fa-solid fa-code"
            },
            {
                name: "Angular & Ionic",
                description: "Creating performant applications with NgRX/RxJS-based state management",
                icon: "fa-brands fa-angular"
            },
            {
                name: "React.js/Native",
                description: "Developing modern applications with React ecosystem technologies",
                icon: "fa-brands fa-react"
            },
            {
                name: "TypeScript",
                description: "Writing type-safe, maintainable code for complex applications",
                icon: "fa-brands fa-js"
            },
            {
                name: "API Integration",
                description: "Working with middleware platforms like Hybris and Apigee for SAP based web apps",
                icon: "fa-solid fa-plug"
            },
            {
                name: "Testing",
                description: "Implementing Jest and Cypress for unit and regression testing",
                icon: "fa-solid fa-vial"
            },
            {
                name: "Backend Development",
                description: "Building services with Node.js and Ruby on Rails",
                icon: "fa-solid fa-server"
            },
            {
                name: "AWS",
                description: "Cloud Practitioner certified with experience in deployment and services",
                icon: "fa-brands fa-aws"
            }
        ]
    },
    projects: {
        title: "Projects",
        subtitle: "A showcase of my professional work and experience",
        categories: ["Web", "Mobile", "Integration", "Analytics"],
        projects: [
            {
                title: "Educational Mobile App Modernization",
                description: "Successfully modernized a legacy application for an education support services company, leveraging Angular/Ionic and NgRX/RxJS-based state management, resulting in notable performance improvements and enhanced user experience.",
                image: "assets/image/mybrightday.jpg",
                technologies: ["Angular", "Ionic", "NgRX", "RxJS", "Jest"],
                category: "Mobile"
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
                company: "Education Support Services Company",
                position: "Mobile App Developer",
                logo: "assets/images/mybrightday.jpg",
                location: "New York, NY",
                description: [
                    "Successfully modernized the legacy application, leveraging Angular/Ionic and the NgRX/RxJS-based state management, resulting in notable performance improvements and enhanced user experience.",
                    "Worked with several libraries to increase re-usability across multiple apps including a design system with Ionic to create shared components.",
                    "Created a middleware layer (Next.js/Socket.io) for communications between staff/parents.",
                    "Through rigorous focus on code quality, reduced complexity and code reviews we fostered a collaborative environment within the development team.",
                    "Emphasis on Unit Testing with Jest helped to document issues and prevent regressions."
                ],
                technologies: ["Angular", "Ionic", "NgRX", "RxJS", "Jest", "Next.js", "Socket.io"],
                website: "#"
            },
            {
                company: "Mirakl/Hybris Ecommerce Marketplace",
                position: "Web Developer",
                logo: "assets/images/SGWS.jpg",
                location: "New York, NY",
                description: [
                    "Integrated middleware platforms (Hybris/Mirakl) for SAP based eCommerce web app as part of the frontend development team.",
                    "Worked with Hybris/Apigee developers to integrate APIs and troubleshoot bugs during UAT testing.",
                    "Maintained web standards, design and usability, and best practices in web screen design.",
                    "Collaborated frequently with client demos and walkthroughs to align features and resolve bugs.",
                    "Successfully integrated middleware API layers (Apigee) to source and update data through web application and meet functional requirements."
                ],
                technologies: ["JavaScript", "SAP", "Hybris", "Apigee", "API Integration"],
                website: "#"
            },
            {
                company: "Synchronous Learning/Training Platform",
                position: "Full Stack Developer",
                logo: "assets/images/root-logo-share-fb.jpg",
                location: "New York, NY",
                description: [
                    "Resolved access issues (especially for regions like China) by creating and deploying a custom Heroku Domain for existing Node.js service.",
                    "Developed a React.js MVP for a feature enhancement for an in-person data collection initiative.",
                    "Used Redis and Socket.io to create a synchronous experience for users on a mobile device.",
                    "Worked through SAST assessment and resolved 100% of open findings related to the scan.",
                    "Resolved security issues including restricting ports, unnecessary HTTP methods and headers."
                ],
                technologies: ["React.js", "Node.js", "Redis", "Socket.io", "Heroku", "Security Assessment"],
                website: "#"
            },
            {
                company: "Financial Services/Banking",
                position: "Frontend Developer",
                logo: "assets/image/Banking-Finance.png",
                location: "New York, NY",
                description: [
                    "Supported an effort to add analytics to a massive online Angular web application for banking customers.",
                    "Used RxJS to track user flows for Domestic Wires and Cashiers Checks and visualized in Google Analytics.",
                    "Developed UI/UX features (Angular) with reactive state (NGRX) for an internal web application used by bank associates.",
                    "Assisted customers with their debit cards through the developed application.",
                    "Resolved production level bugs in a timely manner to reduce friction for bank associates.",
                    "Worked with product managers to streamline development work to prioritize impact in each sprint."
                ],
                technologies: ["Angular", "RxJS", "NGRX", "Google Analytics", "TypeScript"],
                website: "#"
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
                icon: "fa-solid fa-graduation-cap"
            },
            {
                title: "AWS Cloud Practitioner",
                description: "Certified in fundamental AWS cloud knowledge and services",
                icon: "fa-brands fa-aws"
            },
            {
                title: "Full Stack Development",
                description: "Specialized in both frontend and backend technologies across multiple stacks",
                icon: "fa-solid fa-layer-group"
            },
            {
                title: "Testing & Quality Assurance",
                description: "Jest and Cypress testing frameworks for comprehensive application testing",
                icon: "fa-solid fa-check-circle"
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
                image: "assets/image/mybrightday.jpg",
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
            icon: "fa-brands fa-github"
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/anthonymai5",
            icon: "fa-brands fa-linkedin"
        },
        {
            name: "Portfolio",
            url: "https://anthonym-portfolio.netlify.app",
            icon: "fa-solid fa-globe"
        }
    ],
    email: 'thereisnoneo1@gmail.com'
};
