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
    // gallery: [
    //   "/img/work/ukki-inventory-1.png", 
    //   "/img/work/ukki-inventory-1.png"
    // ],
    techStack: [
      "Vite",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
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
    // gallery: ["/img/work/duta-beton-1.png", "/img/work/duta-beton-1.png"],
    techStack: [
      "Next.js 15",
      "React 19",
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
    // gallery: ["/img/work/faperta-1.png", "/img/work/faperta-1.png"],
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
    // gallery: [
    //   "/img/work/agrocentrum-1.png", 
    //   "/img/work/agrocentrum-1.png"
    // ],
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
    // gallery: [
    //   "/img/work/ukki-web-1.png", 
    //   "/img/work/ukki-web-1.png"
    // ],
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
    year: "2024",
    role: "Full-Stack Developer",
    summary: "A modern headless e-commerce platform built to explore Next.js and Wix integrations.",
    description: "Faiz-Shop is a personal exploration project aimed at mastering headless commerce architecture. By integrating Wix as a headless backend with a custom Next.js frontend, the project focuses on delivering fast page loads, a streamlined checkout flow, and a scalable codebase for future feature additions.",
    thumbnail: "/img/work/portofolio_7.png",
    // gallery: [
    //   "/img/work/faiz-shop-1.png", 
    //   "/img/work/faiz-shop-2.png"
    // ],
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
    githubUrl: "",
    featured: false,
  },
];