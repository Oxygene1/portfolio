import nupat from "../assets/nupat.webp";
import bpm from "../assets/NLPC-BPM.webp";
import sokozuri from "../assets/sokozuri.webp";
import lasmab from "../assets/lasmab.webp";
import with_jara from "../assets/withJara.webp";
import { ResumeData } from "../types";
export interface ProjectTypes {
  image: string;
  title: string;
  description: string;
  link: string;
  type?: "desktop" | "mobile";
}

export const testimonials: ProjectTypes[] = [
  {
    image: nupat,
    title: "Nupat Technologies",
    description: "Nupat Code camp is an intensive practical training program",
    link: "https://nupat.africa/",
    type: "desktop",
  },
  {
    image: bpm,
    title: "NLPC BPM Application",
    description: "BPM is a business process management platform for NLPC PFA ",
    link: "",
    type: "desktop",
  },
  {
    image: sokozuri,
    title: "Sokozuri Africa",
    description: "Africa's premier e-commerce platform for goods and services",
    link: "https://www.sokozuri.com/",
    type: "desktop",
  },
  {
    image: lasmab,
    title: "LASMAB",
    description:
      "Exploring the latest Updates, Innovations and Breakthroughs in Lagos Anglican Schools",
    link: "https://admin.lasmab.org/",
    type: "desktop",
  },
  {
    image: with_jara,
    title: "With Jara",
    description:
      "Sell your products online and unlock the power of withJara's growing marketplace.",
    link: "https://www.withjara.com/",
    type: "desktop",
  },
];

export const skillIcons: { [key: string]: string } = {
  TypeScript: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#3178C6"/><path d="M8.889 13.556v-1.778h14.222v1.778h-5.778v10.222h-2.667V13.556H8.889zm10.667 7.333c.222.667.889 1.333 2.111 1.333 1.111 0 1.889-.556 1.889-1.333 0-.889-.667-1.222-2.111-1.667-2.111-.556-3.111-1.333-3.111-2.889 0-1.667 1.444-2.778 3.444-2.778 1.556 0 2.667.444 3.333 1.667l-1.556 1c-.333-.556-.889-.889-1.778-.889-.889 0-1.444.444-1.444 1.111 0 .667.444.889 2 1.333 2.222.556 3.222 1.333 3.222 2.889 0 1.889-1.556 3-3.667 3-1.889 0-3.111-.889-3.667-2.111l1.556-.889z" fill="#fff"/></svg>`,
  "JavaScript (ES6+)": `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><path d="M13.333 22.667c0 1.333-.889 2.111-2.444 2.111-1.333 0-2.111-.667-2.667-1.556l1.556-.889c.222.444.556.778 1.111.778.556 0 .889-.222.889-.889v-5.333h1.556v5.778zm3.333 2.111c-.444 0-.889-.111-1.222-.333l.444-1.444c.222.111.444.222.667.222.444 0 .667-.222.667-.556 0-.333-.222-.444-.667-.667l-.222-.111c-.889-.444-1.333-.889-1.333-1.889 0-1.111.889-1.889 2.111-1.889.667 0 1.222.111 1.667.333l-.444 1.444c-.222-.111-.444-.222-.667-.222-.333 0-.556.111-.556.444 0 .222.222.333.667.556l.222.111c1 .444 1.444.889 1.444 1.889 0 1.222-.889 2-2.222 2z" fill="#222"/></svg>`,
  HTML5: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#E44D26"/><path d="M10.667 24.222l-1.111-12.444h12.889l-1.111 12.444-5.333 1.556-5.334-1.556zm1.556-9.333l.222 2.444h5.111l-.222 2.444h-4.667l.222 2.444 3.111.889 3.111-.889.222-2.444h-1.556l-.111 1.111-1.666.444-1.667-.444-.111-1.111h-1.556zm7.111-2.444h-7.778l.222 2.444h7.334l.222-2.444z" fill="#fff"/></svg>`,
  CSS3: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#1572B6"/><path d="M10.667 24.222l-1.111-12.444h12.889l-1.111 12.444-5.333 1.556-5.334-1.556zm1.556-9.333l.222 2.444h5.111l-.222 2.444h-4.667l.222 2.444 3.111.889 3.111-.889.222-2.444h-1.556l-.111 1.111-1.666.444-1.667-.444-.111-1.111h-1.556zm7.111-2.444h-7.778l.222 2.444h7.334l.222-2.444z" fill="#fff"/></svg>`,
  "SASS/SCSS": `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#CD6799"/><path d="M16.222 10.889c-4.111 1.111-6.444 2.889-6.444 4.667 0 1.222 1.111 2.111 2.889 2.111 2.222 0 4.889-1.333 6.222-3.111.889-1.222.444-2.444-1.111-3.111-.667-.222-1.333-.222-1.556-.222zm-3.111 8.444c-1.111 0-2.111-.444-2.111-1.111 0-.444.444-.889 1.111-1.222.667-.333 1.556-.444 2.222-.444.889 0 1.556.222 1.556.889 0 .667-.889 1.889-2.778 1.889zm7.333-6.667c.667.444 1.111 1.111 1.111 1.889 0 2.222-3.111 4.889-7.111 4.889-2.222 0-3.556-.889-3.556-2.222 0-2.222 4.222-4.222 9.111-4.222.889 0 1.667.111 2.445.222zm-2.889 7.333c.444 0 .889-.222 1.111-.444.222-.222.333-.444.333-.667 0-.444-.444-.667-1.111-.667-.444 0-.889.222-1.111.444-.222.222-.333.444-.333.667 0 .444.444.667 1.111.667z" fill="#fff"/></svg>`,
  React: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#222"/><g><ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" stroke-width="2" fill="none"/><ellipse cx="16" cy="16" rx="4" ry="10" stroke="#61DAFB" stroke-width="2" fill="none" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="4" ry="10" stroke="#61DAFB" stroke-width="2" fill="none" transform="rotate(120 16 16)"/><circle cx="16" cy="16" r="2.5" fill="#61DAFB"/></g></svg>`,
  "Next.js": `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#fff"/><path d="M10.5 10.5h2v11h-2v-11zm5.5 0h2v7.5l4-7.5h2l-4.5 8 4.5 8h-2l-4-7.5v7.5h-2v-16z" fill="#222"/></svg>`,
  "React Native": `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#222"/><g><ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" stroke-width="2" fill="none"/><ellipse cx="16" cy="16" rx="4" ry="10" stroke="#61DAFB" stroke-width="2" fill="none" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="4" ry="10" stroke="#61DAFB" stroke-width="2" fill="none" transform="rotate(120 16 16)"/><circle cx="16" cy="16" r="2.5" fill="#61DAFB"/></g></svg>`,
  "Node.js": `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#222"/><path d="M16 7l8 4.5v9L16 25l-8-4.5v-9L16 7zm0 2.2l-6.4 3.6v7.4L16 22.8l6.4-3.6v-7.4L16 9.2zm0 3.3a2.5 2.5 0 012.5 2.5c0 1.2-.8 2.1-1.9 2.4l.4 1.2h-1.2l.4-1.2a2.5 2.5 0 01-1.9-2.4A2.5 2.5 0 0116 12.5zm0 1.2a1.3 1.3 0 100 2.6 1.3 1.3 0 000-2.6z" fill="#8CC84B"/></svg>`,
  "Express.js": `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#222"/><text x="8" y="22" font-size="10" fill="#fff" font-family="Arial, Helvetica, sans-serif">Ex</text></svg>`,
  "Redux Toolkit": `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#764ABC"/><path d="M16 10a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8z" fill="#fff"/><circle cx="16" cy="16" r="2" fill="#fff"/></svg>`,
  GraphQL: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#E535AB"/><g stroke="#fff" stroke-width="2"><polygon points="16,7 27,24 5,24"/><line x1="16" y1="7" x2="16" y2="27"/><line x1="5" y1="24" x2="27" y2="24"/></g></svg>`,
  TailwindCSS: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#222"/><path d="M10 20c1.5-3 3.5-4.5 6-4.5s4.5 1.5 6 4.5c-1.5-3-3.5-4.5-6-4.5s-4.5 1.5-6 4.5zm0-8c1.5-3 3.5-4.5 6-4.5s4.5 1.5 6 4.5c-1.5-3-3.5-4.5-6-4.5s-4.5 1.5-6 4.5z" fill="#38BDF8"/></svg>`,
  "Material-UI": `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#222"/><path d="M8 10l8 5 8-5-8-5-8 5zm0 2.5v7l8 5v-7l-8-5zm16 0l-8 5v7l8-5v-7z" fill="#00B0FF"/></svg>`,
  "Styled-Components": `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#222"/><ellipse cx="16" cy="16" rx="8" ry="4" fill="#DB7093"/><ellipse cx="16" cy="16" rx="4" ry="8" fill="#fff" fill-opacity="0.2"/></svg>`,
  Shadcn: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#fff"/><circle cx="16" cy="16" r="8" fill="#222"/><text x="12" y="21" font-size="8" fill="#fff" font-family="Arial, Helvetica, sans-serif">sh</text></svg>`,
  "Ant Design": `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#fff"/><rect x="8" y="8" width="16" height="16" rx="4" fill="#1890FF"/><rect x="12" y="12" width="8" height="8" rx="2" fill="#fff"/></svg>`,
  FlowBite: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#38BDF8"/><circle cx="16" cy="16" r="6" fill="#fff"/><circle cx="16" cy="16" r="3" fill="#38BDF8"/></svg>`,
  "Git/GitHub": `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#222"/><circle cx="16" cy="16" r="8" fill="#fff"/><path d="M16 12a4 4 0 00-1.27 7.8c.2.04.27-.09.27-.2v-.7c-1.1.24-1.33-.53-1.33-.53-.18-.45-.44-.57-.44-.57-.36-.25.03-.25.03-.25.4.03.62.41.62.41.36.62.94.44 1.17.34.04-.26.14-.44.25-.54-0.88-.1-1.8-.44-1.8-1.96 0-.43.15-.78.4-1.06-.04-.1-.18-.5.04-1.04 0 0 .33-.1 1.08.4a3.7 3.7 0 012 0c.75-.5 1.08-.4 1.08-.4.22.54.08.94.04 1.04.25.28.4.63.4 1.06 0 1.52-.92 1.86-1.8 1.96.14.12.27.36.27.72v1.07c0 .11.07.24.27.2A4 4 0 0016 12z" fill="#222"/></svg>`,
  Webpack: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#222"/><polygon points="16,7 25,12 25,20 16,25 7,20 7,12" fill="#8DD6F9"/><polygon points="16,9 23,13 16,17 9,13" fill="#222"/></svg>`,
  Babel: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#F9DC3E"/><text x="10" y="22" font-size="10" fill="#222" font-family="Arial, Helvetica, sans-serif">Babel</text></svg>`,
  Jest: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#99425B"/><circle cx="16" cy="16" r="6" fill="#fff"/><path d="M16 10v8" stroke="#99425B" stroke-width="2"/><path d="M12 18h8" stroke="#99425B" stroke-width="2"/></svg>`,
  "React Testing Library": `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#E53935"/><circle cx="16" cy="16" r="6" fill="#fff"/><path d="M16 12v8" stroke="#E53935" stroke-width="2"/><path d="M12 16h8" stroke="#E53935" stroke-width="2"/></svg>`,
  Cypress: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#222"/><circle cx="16" cy="16" r="8" fill="#fff"/><text x="12" y="21" font-size="8" fill="#222" font-family="Arial, Helvetica, sans-serif">cy</text></svg>`,
  XCode: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#1575F9"/><rect x="10" y="10" width="12" height="12" rx="2" fill="#fff"/><rect x="13" y="13" width="6" height="6" rx="1" fill="#1575F9"/></svg>`,
  "Android Studio": `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#3DDC84"/><circle cx="16" cy="16" r="6" fill="#fff"/><rect x="15" y="13" width="2" height="6" rx="1" fill="#3DDC84"/></svg>`,
  "CI/CD Pipelines (Jenkins, GitLab CI)": `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#222"/><circle cx="16" cy="16" r="8" fill="#fff"/><path d="M16 12a4 4 0 100 8 4 4 0 000-8z" fill="#F36D38"/><path d="M16 10v2M16 20v2M10 16h2M20 16h2" stroke="#F36D38" stroke-width="2"/></svg>`,
  Docker: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#222"/><rect x="10" y="16" width="2" height="4" fill="#2496ED"/><rect x="14" y="16" width="2" height="4" fill="#2496ED"/><rect x="18" y="16" width="2" height="4" fill="#2496ED"/><rect x="22" y="16" width="2" height="4" fill="#2496ED"/><rect x="12" y="12" width="2" height="4" fill="#2496ED"/><rect x="16" y="12" width="2" height="4" fill="#2496ED"/><rect x="20" y="12" width="2" height="4" fill="#2496ED"/><circle cx="24" cy="20" r="2" fill="#2496ED"/></svg>`,
  "AWS (S3, EC2, Lambda)": `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#fff"/><ellipse cx="16" cy="20" rx="8" ry="4" fill="#FF9900"/><rect x="12" y="8" width="8" height="8" rx="2" fill="#232F3E"/></svg>`,
  Agile: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#fff"/><circle cx="16" cy="16" r="8" fill="#222"/><path d="M16 12a4 4 0 100 8" stroke="#00BFAE" stroke-width="2"/></svg>`,
  Scrum: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#fff"/><circle cx="16" cy="16" r="8" fill="#222"/><path d="M16 12a4 4 0 100 8" stroke="#FF7043" stroke-width="2"/><path d="M20 20l2 2" stroke="#FF7043" stroke-width="2"/></svg>`,
  "Microservices Architecture": `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#222"/><rect x="8" y="8" width="6" height="6" rx="2" fill="#fff"/><rect x="18" y="8" width="6" height="6" rx="2" fill="#fff"/><rect x="8" y="18" width="6" height="6" rx="2" fill="#fff"/><rect x="18" y="18" width="6" height="6" rx="2" fill="#fff"/><path d="M14 11h4M11 14v4M21 14v4M14 21h4" stroke="#00BFAE" stroke-width="2"/></svg>`,
};

export const resumeData: ResumeData = {
  name: "Ibrahim Abdulganiyu",
  title: "Senior Frontend Engineer | React & React Native Expert",
  location: "Ketu, Lagos, Nigeria",
  email: "abdulganiyutechng@gmail.com",
  phone: "+2347039901318",
  linkedin: "https://linkedin.com/in/ibrahimxtech",
  github: "https://github.com/Oxygene1",
  resume: "https://limewire.com/d/XEkP3#5LYwrC22yr",
  summary:
    "Senior Frontend Engineer with 5+ years of experience developing web and mobile applications using React, React Native, and TypeScript. Led development teams, improved application performance, and reduced deployment times. Experience with Agile methodologies, CI/CD pipelines, and AWS cloud services.",
  experience: [
    {
      company: "NLPC Pension Fund Administrators LTD",
      role: "Frontend Engineer - Contract",
      location: "Lagos, NG",
      duration: "03/2025 – Present",
      points: [
        "Delivered project tasks 17% faster than team average.",
        "Reduced application load time by 33% through legacy code optimization.",
        "Implemented accessibility features that improved process approval speed by 16%.",
        "Introduced AI development tools to improve team productivity.",
        "Recommended Vite framework adoption for improved development performance.",
      ],
    },
    {
      company: "Vastlearn Technology",
      role: "Lead Frontend Engineer",
      location: "Lagos, NG",
      duration: "12/2023 – 03/2025",
      points: [
        "Improved system performance by 60% using React microservices architecture.",
        "Managed team of 8 developers building 5 applications with 90% code coverage.",
        "Reduced deployment time from 45 minutes to 10 minutes using CI/CD pipelines.",
        "Built Progressive Web App with Next.js, improving page load time by 60%.",
        "Trained 20+ developers on TypeScript and React development practices.",
        "Reduced runtime errors by 30% through TypeScript implementation.",
      ],
    },
    {
      company: "NUPAT Technology",
      role: "Frontend Developer (Web & Mobile)",
      location: "Lagos, NG",
      duration: "06/2020 – 11/2023",
      points: [
        "Migrated WordPress website to React/Next.js, increasing monthly leads from 200 to 4,000.",
        "Developed Ulego fintech application using React Native and GraphQL.",
        "Built Learning Management System with real-time WebSocket features.",
        "Mentored 15 interns with 80% promotion rate to junior developer positions.",
        "Implemented A/B testing that increased conversion rates by 25%.",
        "Reduced technical debt by 40% through coding standards implementation.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science (B.Sc) in Social Work",
      school: "University of Ilorin",
      duration: "",
    },
  ],
  skills: {
    languages: [
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SASS/SCSS",
    ],
    frameworks: [
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "Express.js",
      "Redux Toolkit",
      "GraphQL",
    ],
    styling: [
      "TailwindCSS",
      "Material-UI",
      "Styled-Components",
      "Shadcn",
      "Ant Design",
      "FlowBite",
    ],
    tools: [
      "Git/GitHub",
      "Webpack",
      "Babel",
      "Jest",
      "React Testing Library",
      "Cypress",
      "XCode",
      "Android Studio",
    ],
    devops: [
      "CI/CD Pipelines (Jenkins, GitLab CI)",
      "Docker",
      "AWS (S3, EC2, Lambda)",
    ],
    methodologies: ["Agile", "Scrum", "Microservices Architecture"],
  },
  certifications: [
    "Frontend Engineer | SimpliLearn (2024)",
    "Frontend Engineer | Nupat Code Camp (2020)",
  ],
  additional: {
    languages: "Fluent in English; Native Yoruba and Pidgin English",
    engagements:
      "Presented 'Optimizing React Performance' at Nupat Code Camp Developer Conference (2024)",
    openSource: [
      {
        name: "IB Image Optimizer",
        description:
          "A React component for optimizing images with loading states and error handling.",
        link: "https://www.npmjs.com/package/ib-image-optimizer",
      },
    ],
    mobileApps: [
      {
        name: "Ulego",
        link: "https://play.google.com/store/apps/details?id=com.ulegoapp_app",
      },
      {
        name: "Coinstrick",
        link: "https://play.google.com/store/apps/details?id=com.coinstick.myapp",
      },
    ],
  },
};
