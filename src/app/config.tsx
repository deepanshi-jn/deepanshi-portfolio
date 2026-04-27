import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter, FaDiscord, FaThreads } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { SiBluesky } from "react-icons/si";
import {
    RiNextjsFill,
    RiTailwindCssFill,
    RiOpenaiFill,
    RiWordpressFill,
} from "react-icons/ri";
import {
    SiTypescript,
    SiShadcnui,
    SiReact,
    SiExpress,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiNodedotjs,
    SiMongodb,
    SiMui,
    SiGit,
    SiC,
    SiCplusplus,
    SiPython,
    SiRedux,
    SiReactquery,
    SiNetlify,
    SiPostman,
    SiFramer,
    SiWoocommerce,
    SiPrisma,
    SiSupabase,
    SiSocketdotio,
    SiBootstrap,
    SiClerk,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import { DiRedis } from "react-icons/di";


export const siteConfig = {
    name: "Deepanshi Goyal",
    title: "Deepanshi Goyal | Full-Stack Developer",
    email: "deepanshigoyal04@gmail.com",
    alias: "Deepanshi",
    description:
        "Deepanshi Goyal is a web developer who builds scalable, user-centric applications using Next.js, and other frameworks. With a focus on performance, accessibility, and clean code, Deepanshi creates digital solutions that are both functional and aesthetically pleasing.",
    keywords:
        "Deepanshi Goyal, full-stack developer, web development, Next.js, React, Node.js, scalable applications, clean code",
    url: "https://DeepanshiGoyal.dev",
    taglines: [
        "🚀 Coding Simplicity, Crafting Solutions: Bringing Ideas to Life, One Line at a Time. ✨ Let's transform challenges into digital possibilities with precision and creativity!",
        "🎨 Where Code Meets Creativity: Building Digital Experiences that Matter. 🌐 From intuitive interfaces to powerful backend systems, I create solutions that engage and inspire.",
        "💡 Innovating Beyond the Screen: Crafting Seamless Digital Journeys. 🌟 From concept to completion, let's build the future, one pixel and one line of code at a time.",
    ],
    titles: ["Frontend Developer", "MERN Developer", "NextJS Developer"],
    socialLinks: [
        {
            icon: <FaGithub />,
            url: "https://github.com/deepanshi-jn",
        },
        {
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/deepanshigoyal04",
        },
        {
            icon: <FaInstagram />,
            url: "https://www.instagram.com/deepanshi_jn",
        },
        {
            icon: <IoIosMail />,
            url: "mailto:deepanshigoyal04@gmail.com",
        },
    ],
    sections: {
        tableOfContents: [
            {
                id: "about-me",
                label: "ABOUT ME",
            },
            {
                id: "experiences",
                label: "EXPERIENCES",
            },
            {
                id: "projects",
                label: "PROJECTS",
            },
            {
                id: "technologies",
                label: "TECHNOLOGIES",
            },

            {
                id: "contact",
                label: "CONTACT",
            },
        ],
        aboutMe: `
            <p style="margin-bottom: 1rem;">
              Hi! I'm Deepanshi, a <strong>full-stack developer</strong> specializing in building <strong>responsive websites</strong>, e-commerce solutions, and interactive streaming platforms. I focus on crafting <strong>clean and efficient code</strong>, from polished front-end designs to robust back-end systems.
            </p>
            <p style="margin-bottom: 1rem;">
              When I'm not developing web applications, you'll find me experimenting in the kitchen or exploring the latest tech trends. Let's connect to discuss your next <strong>web or API project</strong>!
            </p>
        `,
        experiences: [
            {
                company: "SoftSensor AI",
                position: "Software Developer",
                duration: "Apr 2026 - Present",
                description:
                    "Working on frontend development using TypeScript, React, TanStack Query, Tailwind CSS, and Material UI. Developing reusable, responsive UI components for scalable web applications. Optimized frontend rendering and asynchronous state flow using Redux Toolkit and Redux Saga.",
            },
            {
                company: "SoftSensor AI",
                position: "MERN Developer Intern",
                duration: "Jan 2026 - Mar 2026",
                description:
                    "Contributed to frontend development utilizing TypeScript, React, and Tailwind CSS. Assisted in developing responsive UI components and optimizing state management using Redux Toolkit.",
            },
            {
                company: "MediaAMP",
                position: "Software Developer Intern",
                duration: "May 2025 - Oct 2025",
                description:
                    "Led frontend development of a key product module using React.js, TailwindCSS, and Kendo UI. Improved frontend performance by 25% through optimized rendering and efficient state management. Supported backend integration using Flask and PostgreSQL following RESTful design principles.",
            },
        ],
        projects: [
            {
                title: "Interview Prep AI",
                description:
                    "Built an AI-powered interview preparation platform simulating technical interviews with structured feedback. Developed reusable React components and backend APIs for interview sessions and analytics.",
                logo: "/interview.jpg",
                repoLink: "https://github.com/deepanshi-jn/InterviewPrepAI",
                technologies: [
                    {
                        icon: <SiReact className="text-[#61DAFB]" />,
                        name: "React.js",
                    },
                    {
                        icon: <SiNodedotjs className="text-[#339933]" />,
                        name: "Node.js",
                    },
                    {
                        icon: <SiExpress className="text-[#FFF]" />,
                        name: "Express.js",
                    },
                    {
                        icon: <RiOpenaiFill className="text-[#412991]" />,
                        name: "AI APIs",
                    },
                ],
                link: "",
            },
            {
                title: "RouteXpress (Route Optimization System)",
                description:
                    "Built a route optimization system in C++ using Dijkstra’s algorithm to calculate shortest paths based on distance, time, or cost. Created an interactive GUI with animations to visualize optimized routes and simulate real-time bus movement. Enabled user interaction for selecting source and destination cities, improving engagement and understanding.",
                logo: "/routexpress.jpg",
                repoLink: "https://github.com/deepanshi-jn/RouteXpress",
                technologies: [
                    {
                        icon: <SiCplusplus className="text-[#00599C]" />,
                        name: "C++",
                    },
                ],
                link: "",
            },
            {
                title: "Snappy (Chat Application)",
                description:
                    "Developed a secure full-stack chat platform using React.js, Node.js, and Express.js with JWT based authentication for user security. Implemented real-time messaging with Socket.IO for group and personal chats, supporting emojis and file/image uploads. Designed a modern, responsive UI using TailwindCSS and ShadCN to ensure seamless experience across devices.",
                logo: "/snappyy.jpg",
                repoLink: "https://github.com/deepanshi-jn/Snappy",
                technologies: [
                    {
                        icon: <SiReact className="text-[#61DAFB]" />,
                        name: "React.js",
                    },
                    {
                        icon: <SiNodedotjs className="text-[#339933]" />,
                        name: "Node.js",
                    },
                    {
                        icon: <SiExpress className="text-[#FFF]" />,
                        name: "Express.js",
                    },
                    {
                        icon: <SiSocketdotio className="text-[#FFF]" />,
                        name: "Socket.IO",
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS",
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "ShadCN",
                    },
                ],
                link: "https://snappy-frontend-44w6.onrender.com/",
            },
            {
                title: "GameVault",
                description:
                    "GameVault is a fully responsive, modern web application built with React that lets users explore and discover a vast collection of video games. Provides game listings with search, filters, pagination, detailed pages, user authentication, and bookmarking capabilities.",
                logo: "/gamevault.png",
                repoLink: "https://github.com/deepanshi-jn/GameVault",
                technologies: [
                    {
                        icon: <SiReact className="text-[#61DAFB]" />,
                        name: "React",
                    },
                    {
                        icon: <SiBootstrap className="text-[#7952B3]" />,
                        name: "Bootstrap",
                    },
                    {
                        icon: <SiRedux className="text-[#764ABC]" />,
                        name: "Redux Toolkit",
                    },
                    {
                        icon: <SiClerk className="text-[#6C47FF]" />,
                        name: "Clerk",
                    },
                ],
                link: "https://gamevault-0f8m.onrender.com/",
            },
        ],
        technologies: {
            main: [
                {
                    name: "React.js",
                    icon: <SiReact className="text-[#61DAFB]" />,
                    description: "A JavaScript UI library",
                },
                {
                    name: "Next.js",
                    icon: <RiNextjsFill className="text-[#FFF]" />,
                    description: "A React framework",
                },
                {
                    name: "TypeScript",
                    icon: <SiTypescript className="text-[#3178C6]" />,
                    description: "Typed Javascript",
                },
                {
                    name: "Node.js",
                    icon: <SiNodedotjs className="text-[#339933]" />,
                    description: "JavaScript runtime",
                },
                {
                    name: "Express.js",
                    icon: <SiExpress className="text-[#FFF]" />,
                    description: "A Node.js framework",
                },
                {
                    name: "MongoDB",
                    icon: <SiMongodb className="text-[#47A248]" />,
                    description: "NoSQL Database",
                },
                {
                    name: "Tailwind CSS",
                    icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                    description: "A CSS framework",
                },
                {
                    name: "Redux Toolkit",
                    icon: <SiRedux className="text-[#764ABC]" />,
                    description: "State Management",
                },
                {
                    name: "React Query",
                    icon: <SiReactquery className="text-[#FF4154]" />,
                    description: "Data fetching",
                },
            ],
            other: [
                {
                    name: "C",
                    icon: <SiC className="text-[#A8B9CC]" />,
                },
                {
                    name: "C++",
                    icon: <SiCplusplus className="text-[#00599C]" />,
                },
                {
                    name: "Python",
                    icon: <SiPython className="text-[#3776AB]" />,
                },
                {
                    name: "HTML5",
                    icon: <SiHtml5 className="text-[#E34F26]" />,
                },
                {
                    name: "CSS",
                    icon: <SiCss3 className="text-[#1572B6]" />,
                },
                {
                    name: "JavaScript",
                    icon: <SiJavascript className="text-[#F7DF1E]" />,
                },
                {
                    name: "Redux Saga",
                    icon: <SiRedux className="text-[#999999]" />,
                },
                {
                    name: "Zustand",
                    icon: <span className="text-xl">🐻</span>,
                },
                {
                    name: "Kendo UI",
                    icon: <span className="text-sm font-bold text-slate-300">K</span>,
                },
                {
                    name: "Material UI",
                    icon: <SiMui className="text-[#007FFF]" />,
                },
                {
                    name: "ShadCN",
                    icon: <SiShadcnui className="text-[#FFF]" />,
                },
                {
                    name: "Git",
                    icon: <SiGit className="text-[#F05032]" />,
                },
                {
                    name: "GitHub",
                    icon: <FaGithub className="text-[#FFF]" />,
                },
                {
                    name: "Netlify",
                    icon: <SiNetlify className="text-[#00C7B7]" />,
                },
                {
                    name: "Postman",
                    icon: <SiPostman className="text-[#FF6C37]" />,
                },
            ],
        },
    },
};
