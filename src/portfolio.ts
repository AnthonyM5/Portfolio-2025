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
