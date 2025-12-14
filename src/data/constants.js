// ! Skills Section Logo's
import htmlLogo from "../assets/tech_logo/html.png";
import cssLogo from "../assets/tech_logo/css.png";
import tailwindcssLogo from "../assets/tech_logo/tailwindcss.png";
import javascriptLogo from "../assets/tech_logo/javascript.png";
import typescriptLogo from "../assets/tech_logo/typescript.png";
import reactjsLogo from "../assets/tech_logo/reactjs.png";
import reduxLogo from "../assets/tech_logo/redux.png";
import bootstrapLogo from "../assets/tech_logo/bootstrap.png";
import nodejsLogo from "../assets/tech_logo/nodejs.png";
import expressjsLogo from "../assets/tech_logo/express.png";
import mysqlLogo from "../assets/tech_logo/mysql.png";
import mongodbLogo from "../assets/tech_logo/mongodb.png";
import cLogo from "../assets/tech_logo/c.png";
import cppLogo from "../assets/tech_logo/cpp.png";
import javaLogo from "../assets/tech_logo/java.png";
import gitLogo from "../assets/tech_logo/git.png";
import githubLogo from "../assets/tech_logo/github.png";
import vscodeLogo from "../assets/tech_logo/vscode.png";
import postmanLogo from "../assets/tech_logo/postman.png";
import mcLogo from "../assets/tech_logo/mc.png";
import netlifyLogo from "../assets/tech_logo/netlify.png";
import vercelLogo from "../assets/tech_logo/vercel.png";
import antDesignLogo from "../assets/tech_logo/antDesign.svg";
import materialUILogo from "../assets/tech_logo/materialui.png";
import csharpLogo from "../assets/tech_logo/csharp.png";

//!Experience Section Logo's
import techGrowLogo from "../assets/company_logo/TechGrow_logo.jpg";
import HKDigiVerseLogo from "../assets/company_logo/HKDigiVerseLogo.png";

//! Education Section Logo's
import OmSLogo from "../assets/education_logo/Om-Sankul-Kumbhariya.jpg";
import SmtLogo from "../assets/education_logo/Smt_KB_Parekh_Logo.jpg";
import JNMLogo from "../assets/education_logo/Govt_School_Logo.png";

//! Project Section Logo's
import PrjPortfolio from "../assets/work_logo/Prj_PortfolioImg.png";
import PrjBharatExamFest from "../assets/work_logo/Prj_BEF.png"; 
import PrjHRMS from "../assets/work_logo/Prj_HRMS_Panel.png";
import PrjExpense from "../assets/work_logo/Prj_ExpenseTrackerImg.png";
import PrjWorldAtlas from "../assets/work_logo/Prj_WorldAtlasImg.png";
import PrjCasualVibe from "../assets/work_logo/Prj_CasualVibeImg.png";
import PrjAnimatedWeb from "../assets/work_logo/Prj_AnimatedWebImg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux Tool Kit", logo: reduxLogo },
      { name: "Material UI", logo: materialUILogo },
      { name: "Ant Design", logo: antDesignLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Axios", logo: "" },
      { name: "TanStack Query", logo: "" },
      { name: "RTK Query", logo: "" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "C-Sharp", logo: csharpLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: techGrowLogo,
    role: "Frontend Intern",
    company: "Tech Grow",
    date: "25 Dec 2024 - 25 Jan 2025",
    desc: "Completed a Frontend Development internship focused on React.js at Tech Grow. Worked on designing and implementing scalable, reusable UI components and building fully responsive web interfaces. Integrated public APIs using Axios and followed modern frontend best practices with React, Tailwind CSS, and React Router to deliver clean and maintainable code.",
    skills: ["HTML", "React.js", "Tailwind CSS", "React Router DOM", "Axios"],
  },
  {
    id: 1,
    img: HKDigiVerseLogo,
    role: "Full Stack Develpoer",
    company: "HK DigiVerse & IT Consultancy",
    date: "07 Aug 2025 - Present ",
    desc: "Working as a Full Stack Developer at HK DigiVerse & IT Consultancy, leading development workflows and mentoring interns. Actively contributed to multiple live production projects including HRMS, Bharat Exam Fest, HK DigiSkill, and AI-Setu (ERP). Specialized in building scalable, high-performance web applications by developing intuitive user interfaces, optimizing frontend performance, and implementing secure, reliable backend APIs using modern full-stack technologies.",
    skills: [
      "React.js",
      "React Router",
      "Redux Toolkit",
      "RTK Query",
      "TanStack Query",
      "TypeScript",
      "Tailwind CSS",
      "Ant Design",
      "Material UI",
      "Axios",

      "Node.js",
      "Express.js",
      "Multer",
      "JSON Web Token (JWT)",
      "Bcrypt.js",
      "Nodemailer",
      "JOI Validation",

      "Mentoring & Training Interns",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: SmtLogo,
    school: "SMT K.B. PAREKH B.C.A COLLEGE - MAHUVA",
    date: "Sept 2022 - Aug 2025",
    grade: "73.2%",
    desc: "I completed my Bachelor's degree in Computer Science (BCA) from SMT K.B. PAREKH B.C.A COLLEGE - MAHUVA. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at PAREKH College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Computer Application - BCA",
  },
  {
    id: 1,
    img: JNMLogo,
    school: "SHREE J.N MEHTA HIGH SCHOOL - DUNGAR",
    date: "Apr 2021 - March 2022",
    grade: "74.5%",
    desc: "I completed my class 12 education from SHREE J.N MEHTA HIGH SCHOOL - DUNGAR, under the GSEB board, where I studied English ,   Economics , Psychology With Other Subjects From Arts .",
    degree: "GSEB Class 12 - Arts Stream",
  },
  {
    id: 2,
    img: OmSLogo,
    school: "OM INTERNATIONAL VIDYA SANKUL - KUMBHARIYA",
    date: "Apr 2019 - March 2020",
    grade: "46.6%",
    desc: "I completed my class 10 education from OM INTERNATIONAL VIDYA SANKUL - KUMBHARIYA, under the GSEB board.",
    degree: "GSEB Class 10",
  },
];

export const projects = [
  {
    id: 0,
    title: "Bharat Exam Fest (LIVE Project)",
    description:
      "Bharat Exam Fest is a live UPSC-focused educational platform built with React.js and TypeScript, designed to sell premium courses and host competitive contests. The application allows users to explore and purchase courses, participate in skill-based contests, and win real cash rewards through secure Razorpay payment integration. It features real-time data handling with RTK Query, role-based workflows, and a responsive, modern UI built using Tailwind CSS, Ant Design, and Material UI for a seamless learning and competition experience.",
    image: PrjBharatExamFest,
    tags: [
      "React Js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "Ant Design",
      "Material UI",
      "Razorpay",
    ],
    github: null,
    webapp: "https://www.bharatexamfest.com/",
  },

  {
    id: 1,
    title: "HRMS Panel (LIVE Project)",
    description:
      "A live, enterprise-level Human Resource Management System built with React.js and TypeScript to manage employees, attendance, and leave operations. The application features role-based access control, real-time data handling using RTK Query, and a responsive, professional dashboard designed with Tailwind CSS and Ant Design for scalable and efficient HR workflows.",
    image: PrjHRMS,
    tags: [
      "React Js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "Ant Design",
    ],
    github: null,
    webapp: "https://hrms.hkdigiverse.com/",
  },
  {
    id: 2,
    title: "Casual Vibe",
    description:
      "CasualVibe is a full-stack e-commerce site built with the MERN stack and styled using Tailwind CSS. It features product listings, cart, orders, and admin controls (ADMIN PANEL). Key features include SwiperJS sliders, Framer Motion animations, and TanStack Query for efficient data fetching. The backend uses Zod for validation, Multer for file uploads, Bcrypt for password hashing, and JWT for secure authentication.",
    image: PrjCasualVibe,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "Tanstack Query",
      "Validation",
    ],
    github: "https://github.com/Shakilgaha/MERN-CasualVibe.git",
    webapp: null,
  },
  {
    id: 3,
    title: "Shakil-Gaha-Portfolio",
    description:
      "A sleek and responsive personal portfolio built using React.js and Tailwind CSS, showcasing a developer’s profile in an elegant and modern layout. The application features dedicated sections for About, Experience, Projects, Skills, and Education, offering a clear and engaging overview of professional background and capabilities. Integrated with EmailJS for seamless contact form functionality, enhanced with dynamic typing effects using Typewriter, and real-time feedback with Toastify notifications, this portfolio ensures both interactivity and a polished user experience. Designed to leave a strong impression on visitors, clients, and recruiters alike.",
    image: PrjPortfolio,
    tags: ["React Js", "Tailwind CSS", "JavaScript", "Email Js"],
    github: "https://github.com/Shakilgaha/React-Portfolio.git",
    webapp: "https://shakilgaha-portfolio.netlify.app/",
  },
  {
    id: 4,
    title: "Expense-Tracker",
    description:
      "An interactive and visually engaging Expense Tracker application built with React.js and Tailwind CSS, designed to help users manage their finances effortlessly. It features dynamic data visualization through Recharts, providing clear insights into income and expenses. Smooth navigation is handled with React Router DOM, while Framer Motion adds fluid animations for a modern UI feel. Real-time feedback and alerts are powered by React Hot Toast, enhancing user interaction. With intuitive controls and a clean layout, this tool offers a seamless experience for anyone looking to track and analyze their spending habits effectively.",
    image: PrjExpense,
    tags: [
      "React JS",
      "JavaScript",
      "Tailwind CSS",
      "ReCharts",
      "Framer-Motion",
    ],
    github: "https://github.com/Shakilgaha/React-Expense_Tracker.git",
    webapp: "https://shakilgaha-expense-tracker.netlify.app/",
  },
  {
    id: 5,
    title: "World-Atlas",
    description:
      "A modern and informative World Atlas web application developed using React.js and Tailwind CSS, designed to explore countries and their detailed information in an interactive format. The app fetches real-time data for all countries via Axios and displays key details such as name, capital, population, region, and flags. Users can click on any country to navigate to a dedicated page showcasing comprehensive data about the selected nation, thanks to seamless routing handled by React Router DOM. With a clean UI and responsive design, the World Atlas offers an intuitive way to learn about countries across the globe.",
    image: PrjWorldAtlas,
    tags: ["React JS", "JavaScript", "API", "Tailwind CSS", "Axios"],
    github: "https://github.com/Shakilgaha/React-World_Atlas.git",
    webapp: "https://shakilgaha-world-atlas.netlify.app/",
  },

  // {
  //   id: 6,
  //   title: "Animated-Landing-Page",
  //   description:
  //     "A visually striking animated landing page built with React.js and Tailwind CSS, designed to showcase modern UI design skills. Features include smooth Framer Motion animations and responsive SwiperJS sliders for an engaging, scroll-friendly experience. Built purely for design and aesthetic presentation.",
  //   image: PrjAnimatedWeb,
  //   tags: ["React JS", "Tailwind CSS", "Framer-Motion", "Swiper Js"],
  //   github: "https://github.com/Shakilgaha/React-Animated-Landing-Page.git",
  //   webapp: "https://shakilgaha-animated-landing-page.netlify.app/",
  // },
];
