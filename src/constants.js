
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";
import alpha from "./assets/education_logo/alpha.png";
import kaka from "./assets/education_logo/kaka.jpg";
import nirmala from "./assets/education_logo/nirmala.png";
import peter from "./assets/education_logo/peter.png";

// Project Section Logo's
import spotify from "./assets/work_logo/spotify.png";
import azure from "./assets/work_logo/azure.png";
import doordash from "./assets/work_logo/doordash.png";
import airbnb from "./assets/work_logo/airbnb.png";
import ubereats from "./assets/work_logo/ubereat.png";
import croma from "./assets/work_logo/croma.png";
import clara from "./assets/work_logo/clara.png";
import edemy from "./assets/work_logo/edemy.png";
import gemini from "./assets/work_logo/gemini.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },

      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },

      { name: "Tailwind CSS", logo: tailwindcssLogo },

      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "JavaScript", logo: javascriptLogo },

      { name: "Python", logo: pythonLogo },
      { name: "Java", logo: javaLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },

      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo, 
    role: "Fullstack Developer Intern",
    company: "Vonnue",
    date: "2025",
    desc: "Worked as a Fullstack Developer Intern, where I contributed to building and maintaining scalable web applications using the MERN stack. Focused on both frontend and backend development, and collaborated with cross-functional teams to enhance application performance and user interface.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "NodeJS",
      "MongoDB",
      "ExpressJS",
      "Git",
      "Tailwind CSS",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Front-End Developer",
    company: "Disha Soft",
    date: "2024",
    desc: "Worked as a Front-End Developer, designing and implementing responsive interfaces, collaborating with backend teams, and optimizing user experience. Improved web application performance by reducing bounce rates and enhancing UI components.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "Tailwind CSS",
      "Git",
      "Bootstrap",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: nirmala,
    school: "Nirmala College, Muvattupuzha",
    date: "2022 - 2024",
    grade: "CGPA: 7",
    desc: "Completed Master's in Computer Applications (MCA), where I built a solid understanding of advanced programming, web development, and software engineering principles. Focused on practical learning through real-world projects and academic coursework.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: alpha,
    school: "Aphonsa Arts and Science College, Sulthan Bathery",
    date: "2019 - 2022",
    grade: "CGPA: 6.3",
    desc: "Earned a Bachelor's degree in Computer Applications (BCA), covering foundational areas such as programming languages, databases, and system design. Actively participated in academic projects and tech-related activities.",
    degree: "Bachelor of Computer Applications - BCA",
  },
  {
    id: 2,
    img: kaka,
    school: "GHSS Kakkavayal, Wayanad",
    date: "2017 - 2019",
    grade: "76%",
    desc: "Completed Higher Secondary Education in Computer commerce stream under the Kerala State Board. Developed early interest in computing and digital systems.",
    degree: "Higher Secondary (Class XII) - Computer Science",
  },
  {
    id: 3,
    img: peter,
    school: "St. Peter's & St. Paul's School, Meenangadi",
    date: "2015 - 2017",
    grade: "89%",
    desc: "Completed Secondary School (Class X) under the Kerala State Board with a strong focus on Science and Computer Applications.",
    degree: "Secondary School (Class X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "DoorDash Clone",
    description:
      "A pixel-perfect and fully responsive DoorDash homepage replica built using pure HTML and CSS. The design closely mirrors the original with precise layout and styling.",
    image: doordash,  
    tags: ["HTML", "CSS", "Responsive Design"],
    github: "https://github.com/RoshanPoulose/DoorDash",                      
    webapp: "https://roshanpoulose.github.io/DoorDash/",                                                                                                         
  },    
  {
    id: 1,
    title: "Airbnb Clone",
    description:
      "A responsive front-end clone of Airbnb created using HTML and CSS. It accurately replicates the layout, UI elements, and mobile responsiveness of the original platform.",
    image: airbnb,
    tags: ["HTML", "CSS", "Responsive Design"],
    github: "https://github.com/RoshanPoulose/airbnb",
    webapp: "https://airbnvclone.netlify.app/",
  },
  {
    id: 2,
    title: "Azure Website Clone",
    description:
      "A clean and responsive clone of Microsoft's Azure website using only HTML and CSS. Focused on layout structuring, spacing, and replicating professional UI design.",
    image: azure,
    tags: ["HTML", "CSS", "Responsive UI"],
    github: "https://github.com/RoshanPoulose/Azure",
    webapp: "https://azurecloner.netlify.app/",
  },
  {
    id: 3,
    title: "Spotify Clone",
    description:
      "A stylish and responsive front-end clone of the Spotify web player using HTML and CSS. Captures the sleek design and modern layout of the original app.",
    image: spotify,
    tags: ["HTML", "CSS", "Web Design"],
    github: "https://github.com/RoshanPoulose/Spotify",
    webapp: "https://spotifycloners.netlify.app/",
  },
  {
    id: 4,
    title: "Uber Eats Clone",
    description:
      "A responsive front-end clone of Uber Eats built with HTML and CSS. It closely replicates the visual layout and design for a real-world food delivery experience.",
    image: ubereats,
    tags: ["HTML", "CSS", "Responsive Design"],
    github: "https://github.com/RoshanPoulose/UberEats",
    webapp: "https://ubereatscloner.netlify.app/",
  },
  {
    id: 5,
    title: "Croma E-commerce Clone",
    description:
      "A dynamic and functional e-commerce clone of Croma with product filtering, search functionality, and UI enhancements using JavaScript. Built with attention to user interaction and DOM manipulation.",
    image: croma,
    tags: ["HTML", "CSS", "JavaScript", "Filtering", "DOM Manipulation"],
    github: "https://github.com/RoshanPoulose/Croma",
    webapp: "https://cromacloner.netlify.app/",
  },
  {
    id: 6,
    title: "Clara – Full-Stack E-commerce Web App",
    description:
      "Clara is a modern, full-stack e-commerce application built with the MERN stack and powered by Vite for a fast frontend experience. It features secure user authentication, product management, category filtering, and seamless Stripe payment integration. The app is designed to deliver a smooth shopping experience with responsive UI and dynamic functionality.",
    image: clara,
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "MERN",
      "Full-Stack",
    ],
    github: "https://github.com/RoshanPoulose/clara",
    webapp: "https://clara-shop.vercel.app/",
  },
  {
    id: 7,
    title: "Edemy – Online Learning Platform (Frontend)",
    description:
      "Edemy is a fully responsive Learning Management System (LMS) frontend built with React.js. It allows educators to showcase courses and learners to explore content with a clean and intuitive UI. The project is designed for future full-stack integration with Clerk for authentication and Stripe for secure payments, enabling students to enroll and educators to earn through course sales.",
    image: edemy,
    tags: [
      "React",
      "Vite",
      "LMS",
      "Responsive UI",
      "Clerk (Planned)",
      "Stripe (Planned)",
    ],
    github: "https://github.com/RoshanPoulose/edemy",
    webapp: "https://edemy-online.vercel.app/",
  },
  {
    id: 7,
    title: "Gemini 2.0 – AI Chat App (Google Gemini Clone)",
    description:
      "A modern AI-powered chat application built with React.js and integrated with the Google Gemini API. Gemini 2.0 replicates the core features of Google Gemini and ChatGPT, offering intelligent responses, a clean conversational UI, and real-time user interaction. Built as a personal project following GreatStack's tutorial, this app demonstrates integration of AI APIs and dynamic frontend behavior.",
    image: gemini,
    tags: [
      "React",
      "Google Gemini API",
      "AI Integration",
      "Chat UI",   
      "Vite",        
      "OpenAI Clone",                       
    ],
    github: "https://github.com/RoshanPoulose/Gemini",   
    webapp: "https://clone-gemini.vercel.app/",
  },
];
                                               