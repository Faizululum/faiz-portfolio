export const workLastUpdated = "31 August 2026";

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: "Intern" | "Full-time" | "Part-time" | "Freelance";
  points: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    id: "duta-beton-mandiri",
    role: "Full-Stack Developer",
    company: "PT Duta Beton Mandiri",
    period: "2025",
    type: "Intern",
    points: [
      "Developing the company profile and product catalog website, and ensuring a highly responsive.",
      "Designing comprehensive UI/UX wireframes, high-fidelity, and a scalable design system.",
      "Building a robust REST API for dynamic product data management."
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Prisma",
      "MongoDB",
      "UploadThing",
      "Figma",
      "Vercel",
    ],
  },
  {
    id: "eduhub-frontend",
    role: "Frontend Web Developer",
    company: "Eduhub.id",
    period: "2025", 
    type: "Intern",
    points: [
      "Developing an interactive and highly responsive company profile website.",
      "Collaborating within a team to plan, execute, and deliver real-world web projects.",
      "Translating high-fidelity wireframes and design systems into accessible and seamless user interfaces."
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "HeroUI",
      "Framer Motion",
      "Figma"
    ],
  },
  {
    id: "stechoq-robotika",
    role: "Full-Stack Developer",
    company: "PT Stechoq Robotika Indonesia",
    period: "2024",
    type: "Intern",
    points: [
      "Developing a full-stack Inventory Management System.",
      "Implementing secure user authentication and role-based authorization middleware",
      "Designing relational database schemas (ERD) and scalable RESTful APIs."
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Vue.js",
      "Pinia",
      "Bootstrap",
    ],
  },
  {
    id: "faperta-upnjatim",
    role: "Web Developer",
    company: "Fakultas Pertanian, UPN 'Veteran' Jawa Timur",
    period: "2024",
    type: "Freelance",
    points: [
      "Maintaining and optimizing the official faculty website and academic journal platform.",
      "Customizing the user interface to enhance accessibility for students and researchers.",
      "Managing routine content updates and troubleshooting technical issues promptly."
    ],
    techStack: [
      "WordPress",
      "PHP",
      "CSS",
      "OJS (Open Journal Systems)",
    ],
  },
];

export type ProjectType =
  | "Full-Stack Development"
  | "Frontend Development"
  | "Web Development"
  | "UI/UX Design"
  | "Mobile App"
  | "Personal Project"
  | "Graphic Design";

export type ProjectStatus = "Completed" | "In Progress";

export interface DesignApproachPoint {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  type: ProjectType;
  status: ProjectStatus;
  year: string;
  role: string;
  summary: string;
  description: string;
  thumbnail: string;
  gallery?: string[];
  techStack: string[];
  contributions: string[];
  keyFeatures?: string[];
  designApproach?: DesignApproachPoint[];
  outcome?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "ukki-inventory-system",
    slug: "ukki-inventory-ocr",
    title: "UKKI Inventory Management",
    type: "Full-Stack Development",
    status: "Completed",
    year: "2025", 
    role: "Full-Stack Developer",
    summary: "An automated inventory rental system featuring OCR-based identity validation and QR Code transaction verification.",
    description: "A comprehensive web-based inventory rental system developed for UKKI UPN \"Veteran\" Jawa Timur. Built using the Rapid Application Development (RAD) methodology, this system automates the rental process and replaces vulnerable manual spreadsheet tracking. The core innovation is the integration of Optical Character Recognition (OCR) for automated Student ID (KTM) validation, enhanced with Regular Expression (Regex) and Levenshtein Distance algorithms to ensure high data extraction accuracy. It features a fully automated booking flow, Midtrans payment integration, and a dynamic QR Code system for secure item handovers.",
    thumbnail: "/img/work/ukki-inventory-1.png",
    gallery: [
      "/img/work/ukki-inventory-2.png", 
      "/img/work/ukki-inventory-3.png"
    ],
    techStack: [
      "Vite",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Midtrans",
      "Figma",
      "Python",
      "OCR",
      "Docker",
    ],
    contributions: [
      "Developed a centralized inventory database to replace manual spreadsheet records, significantly improving data accuracy and organizational coordination.",
      "Engineered an automated identity validation module using OCR to extract Student ID (KTM) data, supported by Levenshtein Distance for string correction.",
      "Integrated the Midtrans payment gateway for automated transaction processing with strict timeout handling mechanisms.",
      "Implemented a dynamic QR Code generation and scanning feature to securely verify item pickups and returns at the secretariat."
    ],
    keyFeatures: [
      "Automated OCR-based Student ID (KTM) validation system",
      "Dynamic QR Code generation and scanning for transaction verification",
      "Integrated Midtrans payment gateway with automated status updates",
      "Role-based admin dashboard for inventory tracking and schedule blocking"
    ],
    outcome: "Successfully delivered a centralized, secure, and automated asset management platform that minimizes manual data entry errors and prevents unauthorized asset retrieval.",
    liveUrl: "https://ukki-inventory.vercel.app/",
    // githubUrl: "https://github.com/Faizululum/ukki-inventory",
    featured: true,
  },
  {
    id: "duta-beton-mandiri",
    slug: "duta-beton-mandiri-company-profile",
    title: "Duta Beton Mandiri",
    type: "Full-Stack Development",
    status: "Completed",
    year: "2025",
    role: "Fullstack Developer & UI/UX Designer",
    summary: "A modern company profile and dynamic product catalog built with Next.js 15.",
    description: "The official website for PT Duta Beton Mandiri, featuring a dynamic product catalog and administrative capabilities. I managed the entire project lifecycle, starting from crafting low-to-high fidelity wireframes and a design system in Figma to developing the frontend with Next.js 15 and Framer Motion. The backend is powered by Prisma and MongoDB, integrating secure image uploads via UploadThing.",
    thumbnail: "/img/work/duta-beton-1.png",
    gallery: [
      "/img/work/duta-beton-2.png"
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Prisma",
      "MongoDB",
      "UploadThing",
      "Figma"
    ],
    contributions: [
      "Designed a comprehensive UI/UX layout and scalable Design System using Figma.",
      "Built a highly responsive and animated frontend interface using Next.js App Router.",
      "Developed a RESTful backend API with Prisma ORM for dynamic product data management.",
      "Implemented a secure admin authentication system using bcryptjs.",
      "Integrated UploadThing for seamless product image management."
    ],
    keyFeatures: [
      "Dynamic product catalog and categorization",
      "Secure admin dashboard for content management",
      "Interactive UI with Framer Motion animations",
      "Seamless image uploading system"
    ],
    designApproach: [
      {
        title: "Professional & Trustworthy",
        description: "The UI design utilizes strong, structured layouts and a solid color palette to reflect the reliability of the construction and concrete industry."
      },
      {
        title: "Scalable Design System",
        description: "Built entirely with reusable components in Figma, ensuring visual consistency across both customer-facing pages and the admin dashboard."
      }
    ],
    outcome: "Successfully deployed on Vercel, providing the company with a professional online presence and an easy-to-use platform to manage their product inventory.",
    liveUrl: "https://duta-beton.vercel.app/",
    featured: true,
  },
  {
    id: "ukki-mobile-app",
    slug: "ukki-mobile-app-design",
    title: "UKKI Mobile App",
    type: "UI/UX Design",
    status: "Completed",
    year: "2023",
    role: "UI/UX Designer",
    summary: "Interactive mobile app prototype for a student organization featuring a comprehensive design system.",
    description: "Designed a complete mobile application interface for UKKI (Unit Kegiatan Kerohanian Islam) using Figma. The project focused on delivering a highly interactive prototype to simulate real-world app behavior, complete with page transitions and micro-animations. I established a scalable design system from scratch, utilizing Figma's advanced features like reusable components, variants, and Auto Layout to ensure visual consistency across all screens.",
    thumbnail: "/img/work/ukki-app-1.png",
    // gallery: [
    //   "/img/work/portofolio_1.png",
    //   "/img/work/portofolio_2.png",
    //   "/img/work/portofolio_3.png"
    // ],
    techStack: [
      "Figma",
      "UI/UX Design",
      "Interactive Prototyping",
      "Design System",
      "Wireframing"
    ],
    contributions: [
      "Built a robust Design System incorporating reusable components, variant sets, and standardized typography/colors.",
      "Created high-fidelity, clickable prototypes with custom animations for seamless user flows.",
      "Designed specialized mobile features including a QR code scanner for attendance/points, event calendars, and user profiles."
    ],
    keyFeatures: [
      "Interactive QR Code scanning interface for activity points",
      "Dynamic event calendar and department information modules",
      "Smooth onboarding and authentication flows with micro-animations",
      "Scalable component library utilizing Figma Variants"
    ],
    outcome: "Delivered a visually engaging and developer-ready Figma prototype that streamlined the organization's mobile app development planning.",
    liveUrl: "https://www.figma.com/proto/K5skNivHVPuALuLGta1SOx/UKKI-App?node-id=353-1146&starting-point-node-id=2%3A2",
    // githubUrl: "",
    featured: true,
  },
  {
    id: "faperta-website",
    slug: "faperta-website",
    title: "Faperta UPN Jatim",
    type: "Web Development",
    status: "Completed",
    year: "2024",
    role: "Web Developer & Administrator",
    summary: "Official website management and frontend optimization for the Faculty of Agriculture.",
    description: "I managed and optimized the official website for the Faculty of Agriculture at UPN \"Veteran\" Jawa Timur. My responsibilities centered around customizing the frontend interface to improve accessibility, maintaining system stability, and ensuring academic content remains accessible and up-to-date for students and faculty members.",
    thumbnail: "/img/work/faperta-1.png",
    gallery: [
      "/img/work/faperta-2.png",
    ],
    techStack: [
      "WordPress",
      "PHP",
      "CSS",
    ],
    contributions: [
      "Customized the frontend user interface and modernized the navigation structure.",
      "Managed routine content updates and faculty publication pages.",
      "Performed regular system maintenance and resolved technical issues (troubleshooting)."
    ],
    keyFeatures: [
      "Responsive faculty information portal",
      "Dynamic academic news and announcement feeds",
      "Optimized navigation for students and lecturers"
    ],
    outcome: "Improved website accessibility and ensured a stable, highly available digital presence for the faculty's academic community.",
    liveUrl: "https://faperta.upnjatim.ac.id/",
    featured: true,
  },
  {
    id: "agrocentrum-ojs",
    slug: "agrocentrum-journal",
    title: "Agrocentrum Journal",
    type: "Web Development",
    status: "Completed",
    year: "2024",
    role: "Web Developer & Administrator",
    summary: "Frontend customization and system maintenance for the faculty's Open Journal Systems (OJS) platform.",
    description: "Managed the Agrocentrum academic journal platform for the Faculty of Agriculture using Open Journal Systems (OJS). My work involved customizing the frontend display to improve reader accessibility, maintaining system stability during manuscript submissions, and supporting the faculty's scientific publication workflow.",
    thumbnail: "/img/work/agrocentrum-1.png",
    gallery: [
      "/img/work/agrocentrum-2.png",
    ],
    techStack: [
      "OJS (Open Journal Systems)",
      "PHP",
      "CSS",
    ],
    contributions: [
      "Customized OJS frontend themes and CSS to align with the faculty's visual branding.",
      "Maintained system stability and provided troubleshooting for paper submission workflows.",
      "Managed routine database backups and ensured seamless access to archived articles."
    ],
    keyFeatures: [
      "Academic journal publication workflow",
      "Customized frontend reader interface",
      "Article indexing and archiving system"
    ],
    outcome: "Ensured a stable, accessible, and user-friendly publication platform to support researchers and academics in submitting and reviewing scientific journals.",
    liveUrl: "https://agrocentrum.upnjatim.ac.id/index.php/agrocentrum",
    featured: true,
  },
  {
    id: "ukki-upnjatim",
    slug: "ukki-upnjatim-website",
    title: "UKKI UPN Jatim",
    type: "Web Development",
    status: "Completed",
    year: "2023",
    role: "Web Developer & Administrator",
    summary: "Frontend customization and content management for the UKKI student organization website.",
    description: "Managed the official WordPress website for UKKI (Unit Kegiatan Kerohanian Islam) at UPN \"Veteran\" Jawa Timur. My role involved customizing the frontend UI to align with the organization's branding, managing content for student activities and Islamic articles, and performing routine maintenance to ensure the site's security and performance.",
    thumbnail: "/img/work/ukki-web-1.png",
    gallery: [
      "/img/work/ukki-web-2.png", 
      "/img/work/ukki-web-3.png"
    ],
    techStack: [
      "WordPress",
      "PHP",
      "CSS",
      "MySQL",
      "cPanel"
    ],
    contributions: [
      "Customized WordPress themes and adjusted frontend layouts for better readability and mobile responsiveness.",
      "Managed the publication of organizational news, event documentation, and academic articles.",
      "Maintained website stability, monitored performance, and resolved technical bugs."
    ],
    keyFeatures: [
      "Student organization profile and activity showcase",
      "Dynamic blog for articles and event announcements",
      "Responsive and accessible user interface"
    ],
    outcome: "Delivered a reliable digital platform that successfully boosted the organization's online presence and effectively broadcasted information to students and members.",
    liveUrl: "https://ukki.upnjatim.ac.id/",
    featured: true,
  },
  {
    id: "faiz-shop",
    slug: "faiz-shop-ecommerce",
    title: "Faiz-Shop",
    type: "Web Development",
    status: "In Progress",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "A modern headless e-commerce platform built to explore Next.js and Wix integrations.",
    description: "Faiz-Shop is a personal exploration project aimed at mastering headless commerce architecture. By integrating Wix as a headless backend with a custom Next.js frontend, the project focuses on delivering fast page loads, a streamlined checkout flow, and a scalable codebase for future feature additions.",
    thumbnail: "/img/work/tes/faiz-shop-1.png",
    gallery: [
      "/img/work/faiz-shop-2.png", 
      "/img/work/faiz-shop-3.png"
    ],
    techStack: [
      "Next.js",
      "Wix Headless API",
      "Tailwind CSS",
      "TypeScript",
      "React"
    ],
    contributions: [
      "Architected the application structure and integrated the Wix Headless API for product data fetching.",
      "Developed dynamic routing for product detail pages using the Next.js App Router.",
      // "Implemented a custom shopping cart state and streamlined the checkout flow."
    ],
    keyFeatures: [
      "Dynamic product catalog with filtering",
      "Custom shopping cart and cart state management",
      // "Seamless checkout integrated with Wix backend"
    ],
    outcome: "Serving as a sandbox for headless architecture, this project strengthened my understanding of decoupling backend logic from frontend performance optimization.",
    liveUrl: "https://faiz-shop.vercel.app/",
    githubUrl: "https://github.com/Faizululum/Faiz-Shop",
    featured: false,
  },
  {
    id: "car-rental-platform",
    slug: "car-rental-platform",
    title: "CarRental Platform",
    type: "Full-Stack Development",
    status: "In Progress",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "A modern vehicle reservation system featuring secure authentication, booking management, and cloud-based image hosting.",
    description: "Developed a comprehensive vehicle reservation platform utilizing a modern MERN stack architecture. The frontend is highly optimized and responsive, built with Vite, React 19, and Tailwind CSS v4, delivering a seamless user experience for browsing and booking cars. The robust backend, powered by Express.js 5 and MongoDB, handles complex relationships between users, vehicles, and reservations. Key technical implementations include secure JWT-based authentication with bcrypt password hashing, and a streamlined media upload pipeline using Multer integrated with ImageKit for fast, cloud-based delivery of car listing images.",
    thumbnail: "/img/work/tes/car-rental-1.png",
    gallery: [
      "/img/work/tes/car-rental-2.png",
      "/img/work/tes/car-rental-3.png",
      "/img/work/tes/car-rental-4.png",
    ],
    techStack: [
      "Vite",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "ImageKit",
      "Axios",
      "Vercel",
      "Render"
    ],
    contributions: [
      "Architected a scalable RESTful API with Node.js and Express to manage users, vehicle listings, and reservation workflows.",
      "Implemented secure user authentication and session management utilizing JSON Web Tokens (JWT) and bcrypt.",
      "Integrated Multer and ImageKit for efficient, cloud-based image uploading and optimization for vehicle galleries.",
      "Built a high-performance frontend interface using the latest React 19 and Tailwind CSS v4, ensuring pixel-perfect responsiveness across devices."
    ],
    keyFeatures: [
      "Dynamic vehicle search and filtering by location, pick-up, and return dates",
      "Secure user authentication (Login/Register) and protected routes",
      "Peer-to-peer vehicle listing functionality with cloud image uploads",
      "Dedicated booking management dashboard for users"
    ],
    outcome: "Successfully deployed a fully functional, high-performance web application with decoupled frontend (Vercel) and backend (Render) infrastructures.",
    liveUrl: "https://car-rental-fe-gray.vercel.app/",
    githubUrl: "https://github.com/Faizululum/car-rental",
    featured: false,
  },
  {
    id: "hilink-travel-landing",
    slug: "hilink-travel-landing",
    title: "Hilink Travel App Landing Page",
    type: "Frontend Development",
    status: "Completed",
    year: "2024",
    role: "Front-End Developer",
    summary: "A modern, fully responsive static landing page for a camping and travel application built with Next.js and Tailwind CSS.",
    description: "Developed a pixel-perfect, modern landing page for the Hilink travel and camping app. The project focuses on delivering a highly responsive user interface through precise UI slicing with Tailwind CSS. Recently refactored and updated to the latest Next.js 16.3 and React 19 to patch security vulnerabilities and maintain best practices. The layout ensures a seamless visual experience across desktop and mobile devices, demonstrating strong foundational frontend skills and attention to code maintainability.",
    thumbnail: "/img/work/hilink-1.png",
    gallery: [
      "/img/work/hilink-2.png",
      "/img/work/hilink-3.png",
      "/img/work/hilink-4.png",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel"
    ],
    contributions: [
      "Translated UI/UX design into interactive, pixel-perfect frontend components.",
      "Ensured cross-device responsiveness utilizing Tailwind CSS utility classes.",
      "Performed dependency maintenance to patch security vulnerabilities and upgrade to React 19."
    ],
    keyFeatures: [
      "Highly responsive hero sections and feature grids",
      "Modern UI slicing without complex backend logic",
      "Fast static site generation (SSG) for optimal loading speeds"
    ],
    outcome: "Delivered a visually engaging and fast-loading static landing page, successfully deployed on Vercel.",
    liveUrl: "https://hilink-cyan.vercel.app/",
    githubUrl: "https://github.com/Faizululum/Travel_App",
    featured: false,
  },
  {
    id: "faiz-zool-video-conference",
    slug: "faiz-zool-video-conference",
    title: "Faiz Zool Video Conferencing",
    type: "Full-Stack Development",
    status: "Completed",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "A modern, real-time video conferencing application featuring secure authentication, meeting scheduling, and recording capabilities.",
    description: "Developed a robust video conferencing platform inspired by Zoom and Google Meet, utilizing the latest Next.js 15 and React 19. The application architecture integrates Clerk for highly secure, seamless user authentication and session management. For the core WebRTC communication engine, I implemented the Stream Video React SDK, enabling low-latency real-time audio, video, and screen sharing. The user interface was meticulously crafted using Tailwind CSS and Shadcn UI, resulting in a clean, accessible, and fully responsive dashboard for creating, scheduling, and managing virtual meetings.",
    thumbnail: "/img/work/faiz-zool-1.png",
    gallery: [
      "/img/work/faiz-zool-2.png",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Clerk Auth",
      "Stream SDK",
      "WebRTC",
      "Vercel"
    ],
    contributions: [
      "Integrated Clerk for streamlined user authentication, robust identity management, and secure route protection.",
      "Implemented real-time video, audio, and meeting recording functionalities utilizing Stream SDK's WebRTC infrastructure.",
      "Designed and structured a responsive dashboard using Radix UI primitives (Shadcn) for highly accessible user interactions."
    ],
    keyFeatures: [
      "Instant video meetings and future scheduling with personal rooms",
      "Secure user authentication (Login/Register) via Clerk",
      "Cloud-based meeting recording and playback history",
      "Shareable invitation links and secure meeting access"
    ],
    outcome: "Successfully delivered a scalable, high-performance communication platform with enterprise-grade authentication and video streaming.",
    liveUrl: "https://faiz-zool.vercel.app/",
    githubUrl: "https://github.com/Faizululum/faiz-zool",
    featured: true,
  },
  {
    id: "faiz-talk-ai-interview",
    slug: "faiz-talk-ai-interview",
    title: "FaizTalk AI Interview Platform",
    type: "Full-Stack Development",
    status: "In Progress",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "An AI-powered voice agent platform designed to conduct highly realistic, real-time mock interviews and provide actionable feedback.",
    description: "Developed FaizTalk, an advanced mock interview platform utilizing Next.js 15 and React 19. The application leverages Vapi AI to deploy a highly responsive, conversational voice agent that simulates real-world technical and behavioral interviews. I integrated the Vercel AI SDK (with Google generative models) to dynamically generate personalized interview questions based on user roles and tech stacks. The backend infrastructure relies on Firebase Authentication for secure user access and Firebase Firestore to store interview histories and detailed, AI-generated performance feedback. The UI/UX was meticulously designed with Tailwind CSS, Shadcn UI, and React Hook Form to ensure a seamless, modern, and accessible experience.",
    thumbnail: "/img/work/faiz-talk-1.png",
    gallery: [
      "/img/work/faiz-talk-2.png",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Vapi AI (Voice)",
      "Vercel AI SDK",
      "Google AI",
      "Firebase Auth",
      "Firestore",
      "Shadcn UI",
      "Zod"
    ],
    contributions: [
      "Integrated Vapi AI and Vercel AI SDK to orchestrate real-time, bi-directional voice conversations and dynamic question generation.",
      "Implemented Firebase Authentication and Firestore to manage secure user sessions and store detailed interview feedback metrics.",
      "Built a highly responsive and accessible user interface using Shadcn UI, Tailwind CSS, and Zod for robust form validation."
    ],
    keyFeatures: [
      "Real-time, voice-based AI mock interviews with a lifelike conversational agent",
      "Dynamic interview generation based on specific roles, experience levels, and tech stacks",
      "Detailed, AI-generated performance feedback and scoring system post-interview",
      "Secure user authentication and comprehensive dashboard for interview history"
    ],
    outcome: "Successfully deployed a cutting-edge AI application demonstrating expertise in combining modern frontend frameworks with advanced voice and generative AI APIs.",
    liveUrl: "https://faiz-talk.vercel.app/",
    githubUrl: "https://github.com/Faizululum/Faiz-Talk",
    featured: true,
  },
];