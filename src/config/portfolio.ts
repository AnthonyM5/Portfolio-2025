interface Social {
  github: string;
  linkedin: string;
  twitter?: string;
}

export interface Portfolio {
  name: string;
  role: string;
  description: string;
  image: string;
  social: Social;
  resume: string;
}

export const portfolio: Portfolio = {
  name: "Anthony Mai",
  role: "Software Engineer",
  description: "Building innovative solutions with modern web technologies",
  image: "/profile.jpg",
  social: {
    github: "https://github.com/AnthonyM5",
    linkedin: "https://linkedin.com/in/anthonymai5",
    twitter: "https://twitter.com/yourusername"
  },
  resume: '/path/to/your/resume.pdf'
}; 