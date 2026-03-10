// import { FaFigma, FaAws, FaJava, FaPython, FaDocker, FaDatabase, FaServer, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
// import { SiSpringboot, SiDjango, SiPostgresql, SiFastapi, SiMysql, SiTypescript, SiN8N, SiNextdotjs, SiTailwindcss, SiFramer, SiGreensock, SiMongodb, SiPostman, SiExpress, SiRedux, SiSocketdotio, SiFirebase, SiJavascript } from "react-icons/si";
import {  FaCuttlefish,} from "react-icons/fa";
import {  SiVercel,} from "react-icons/si";
import { LuSquareCode } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io";

import {
  FaAws,
  FaJava,
  FaPython,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaBootstrap,
  FaDatabase,
  FaServer,
  FaFigma,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiDjango,
  SiPostgresql,
  SiFastapi,
  SiMysql,
  SiTypescript,
  SiN8N,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiGreensock,
  SiMongodb,
  SiPostman,
  SiExpress,
  SiRedux,
  SiSocketdotio,
  SiFirebase,
  SiOpenai,
  SiCanva,
  SiJavascript
} from "react-icons/si";


export const skills = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Java", icon: FaJava, color: "#38BDF8" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Git", icon: FaGit, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "MySQL", icon: SiMysql, color: "#38BDF8" },
  { name: "Django", icon: SiDjango, color: "#339933" },
  { name: "Next.js", icon: SiNextdotjs, color: "#fffffff" },
  { name: "OpenAI", icon: SiOpenai, color: "#10A37F" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC" },
];


export const projects = [
  {
  name: "Deepali Enterprises",
  description: "A responsive business website built with Next.js to showcase company services and digital presence.",
  points: [
    "Developed a responsive company website using Next.js and modern frontend practices.",
    "Implemented clean UI layouts with mobile-first design and optimized performance.",
    "Deployed the project on Vercel with automated builds and continuous deployment."
  ],
  techStack: [
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Vercel", icon: SiVercel, color: "#000000" }
  ],
  liveLink: "https://deepali-enterprises.vercel.app",
  githubLink: "https://github.com/Sumit-Bhosle",
  image: "/images/Deepalienterprises.png",
  video: "/videos/Deepalienterprises.mp4"
},
    {
    name: "Anghari",
    description: "A dynamic and visually engaging web platform built with modern animations and responsive design.",
    points: [
      "Developed with Next.js for server-side rendering and fast performance.",
      "Integrated GSAP animations for smooth and interactive transitions.",
      "Used Bootstrap for a mobile-first, responsive layout."
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
      { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
    ],
    // liveLink: "#",
    githubLink: "https://github.com/Sumit-Bhosle",
    image: "/images/anghari.png",
    video: "/videos/anghari.mp4" // 👈 add your video path here
  },
  {
    name: "Innomantra",
    description: "An innovation management event site designed with an old-school theme to match the client’s brand identity.",
    points: [
      "Custom front-end design aligned with existing corporate website aesthetics.",
      "Optimized for fast load times and cross-browser compatibility.",
      "Simple UI for easy event updates and information display."
    ],
    techStack: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    ],
    // liveLink: "https://innovation.innomantra.com/",
    githubLink: "https://github.com/Sumit-Bhosle",
    image: "/images/innomantra.png",
    video: "/videos/Innomantra.mp4" // 👈 add your video path here
  },
  {
    name: "BRI Institute",
    description: "Official website for Bambhri Research Institute, crafted with Hostinger’s website builder and Canva for visuals.",
    points: [
      "Designed to be simple and professional for academic visitors.",
      "Used Canva for creating banners and brand-aligned graphics.",
      "Fully hosted and optimized through Hostinger's web tools."
    ],
    techStack: [
      { name: "Hostinger Builder", icon: FaServer, color: "#FF6600" },
      { name: "Canva", icon: SiCanva, color: "#00C4CC" },
    ],
    liveLink: "https://www.bambhari.in/",
    githubLink: "https://github.com/Sumit-Bhosle",
    image: "/images/BRI.png",
    video: "/videos/BRI.mp4"
  },
  // {
  //   name: "TheClothStore",
  //   description: "An e-commerce platform for clothing products with an integrated admin panel for inventory and order management.",
  //   points: [
  //     "Built with Django and Python for robust backend handling.",
  //     "Implemented Jinja templating for dynamic content rendering.",
  //     "Created REST APIs for seamless front-end and backend communication."
  //   ],
  //   techStack: [
  //     { name: "Python", icon: FaPython, color: "#3776AB" },
  //     { name: "Django", icon: SiDjango, color: "#339933" },
  //     { name: "REST API", icon: FaServer, color: "#6DB33F" },
  //   ],
  //   liveLink: "https://the-cloth-store.onrender.com",
  //   githubLink: "https://github.com/Sumit-Bhosle",
  //   image: "/images/TheClothStore.png",
  //   video: "/videos/TheClothStore.mp4" // 👈 add your video path here
  // },
];

export const expCards = [
  {
    logoPath: "/images/ess.png",
    title: "Freelance Web & Infrastructure Engineer",
    date: "Feb 2026 - Present",
    companyName: "ESS Infraproject Pvt. Ltd.",
    responsibilities: [
      "Migrated email infrastructure from Cpanel hosting to Business Email platform.",
      "Configured domain DNS records including MX, SPF, DKIM, and DMARC.",
      "Backed up legacy mailboxes and deployed 13 Outlook IMAP email accounts.",
      "Provided remote technical support during infrastructure and email migration.",
      "Developing and deploying the company website with hosting integration.",
      "Managing DNS routing and hosting configuration to ensure service continuity.",
    ],
  },

  {
    logoPath: "/images/bambhari.webp",
    title: "Full Stack Developer Intern",
    date: "May 2025 - November 2025",
    companyName: "Bambhari Pvt. Ltd.",
    responsibilities: [
      "Developed and maintained responsive web applications using modern frontend technologies.",
      "Assisted with cloud deployment and infrastructure setup using AWS services.",
      "Collaborated with cross-functional teams following Agile development workflows.",
      "Reviewed code, debugged issues, and improved application performance.",
      "Gained hands-on experience with professional software development practices.",
    ],
  },
  {
    logoPath: "/images/prodocs.png",
    title: "System Engineer",
    date: "Nov 2022 - Jun 2023",
    companyName: "Prodocs Solutions Pvt. Ltd.",
    responsibilities: [
      "Provided IT infrastructure support for 300+ workplace systems.",
      "Handled OS installations, domain user management, and system configuration.",
      "Configured Microsoft Outlook and resolved enterprise email issues.",
      "Managed NAS storage systems and assisted with firewall and router setup.",
      "Improved internal IT processes to enhance system reliability and service delivery.",
    ],
  },
];  