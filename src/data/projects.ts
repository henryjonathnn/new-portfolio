export interface Project {
  title: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  overview: string;
  keyFeatures: string[];
  techStack: string[];
  role: string;
  githubLink?: string;
  liveLink?: string;
  relatedProjects?: { title: string; slug: string }[];
}

export const projects: Project[] = [
  {
    title: "Booktopia",
    year: "2025",
    description: "A modern digital library platform for browsing, reading, and managing books online.",
    image: "/projects/booktopia.png",
    tags: ["Laravel", "Livewire", "MySQL", "Library"],
    overview: "Booktopia is a comprehensive digital library platform designed to provide users with seamless access to a vast collection of books. The platform features an intuitive interface for browsing, reading, and managing personal book collections with advanced search and recommendation capabilities.",
    keyFeatures: [
      "Browse and search through a vast collection of books with advanced filtering.",
      "Personal library management with reading history and bookmarks.",
      "Social features including book ratings and reviews.",
      "Responsive design for reading on any device."
    ],
    techStack: ["Laravel", "Livewire", "MySQL", "Tailwind CSS"],
    role: "Fullstack Developer",
    githubLink: "https://github.com/henryjonathnn/booktopia",
    liveLink: "https://booktopia-demo.vercel.app/",
  },
  {
    title: "Abel Putra's Portfolio",
    year: "2025",
    description: "A portfolio website for Abel Putra, showcasing his skills and projects with a modern, minimalist design.",
    image: "/projects/abel.png",
    tags: ["Astro", "Tailwind", "Bun", "Portfolio"],
    overview: "A beautiful and performant portfolio website built for Abel Putra to showcase his professional work, skills, and projects. Built with cutting-edge technologies focusing on performance and excellent user experience.",
    keyFeatures: [
      "Modern, minimalist portfolio design with smooth animations.",
      "Fast page loads and optimal performance with Astro.",
      "Responsive design that looks great on all devices.",
      "Easy-to-manage content structure."
    ],
    techStack: ["Astro", "Tailwind CSS", "Bun"],
    role: "Fullstack Developer",
    liveLink: "https://abelputra.vercel.app/",
  },
  {
    title: "Asetku",
    year: "2024",
    description: "A web-based IT assets management system for efficient asset tracking and management in RSU Daha Husada Kediri.",
    image: "/projects/asetku.png",
    tags: ["Laravel", "React", "Inertia", "Inventory"],
    overview: "Asetku is a comprehensive asset management system designed for RSU Daha Husada Kediri to track and manage IT assets efficiently. The system provides real-time visibility into asset inventory, maintenance schedules, and depreciation calculations.",
    keyFeatures: [
      "Complete asset inventory tracking with detailed asset information.",
      "Asset lifecycle management from acquisition to disposal.",
      "Maintenance scheduling and reporting capabilities.",
      "Real-time asset location and status monitoring."
    ],
    techStack: ["Laravel", "React", "Inertia", "MySQL", "Tailwind CSS"],
    role: "Fullstack Developer",
  },
  {
    title: "PatroTrack",
    year: "2024",
    description: "A monitoring system for security patrol and cleaning service reports, ensuring efficiency and accountability through real-time tracking and analytics.",
    image: "/projects/patro-track.png",
    tags: ["Laravel", "React", "Real-time"],
    overview: "PatroTrack is an advanced monitoring system designed for RSU Daha Husada Kediri to track security patrol and cleaning service operations. The system ensures accountability through real-time tracking, automated reporting, and comprehensive analytics dashboards.",
    keyFeatures: [
      "Real-time tracking of security patrol routes and activities.",
      "Automated cleaning service report generation with timestamped entries.",
      "Performance analytics and efficiency metrics dashboard.",
      "Alert system for missed patrols or service issues."
    ],
    techStack: ["Laravel", "React", "Inertia", "MySQL", "Tailwind CSS"],
    role: "Fullstack Developer",
  },
  {
    title: "Furnisia",
    year: "2025",
    description: "An online furniture store application with complete features for inventory management, staff management, transactions, and customer operations.",
    image: "/projects/furnisia.png",
    tags: ["Laravel", "Vue", "PostgreSQL", "E-Commerce"],
    overview: "Furnisia is a comprehensive e-commerce platform for furniture retail operations. The application provides complete management tools for handling product inventory, staff operations, customer transactions, and sales analytics. Built with a modern tech stack to ensure scalability and reliability.",
    keyFeatures: [
      "Complete product and inventory management system with stock tracking.",
      "Staff management and role-based access control.",
      "Seamless transaction processing with payment integration.",
      "Customer order management and order history tracking.",
      "Real-time sales analytics and reporting dashboard.",
      "Responsive design for desktop and mobile shopping."
    ],
    techStack: ["Laravel", "Vue", "PostgreSQL", "Tailwind CSS"],
    role: "Fullstack Developer",
  },
  {
    title: "SDN Ganungkidul 2 Nganjuk Smart Library System",
    year: "2025",
    description: "A digitalized library catalog system designed to make library operations efficient, accessible, and increase reader engagement through intelligent book recommendations.",
    image: "/projects/sistem-katalog-perpustakan.png",
    tags: ["Hono", "Bun", "Vue", "MySQL", "Docker", "Library"],
    overview: "Sistem Katalog Perpustakan SDN Ganungkidul 2 Nganjuk is a comprehensive digital library management system built for SDN Ganungkidul 2 Nganjuk. The system transforms traditional library operations into a modern, efficient digital platform with advanced recommendation algorithms to help readers discover relevant books based on their interests.",
    keyFeatures: [
      "Complete digital library catalog with advanced search functionality.",
      "Intelligent book recommendation system using TF-IDF algorithm and content-based filtering.",
      "Member management and borrowing history tracking.",
      "Efficient library operations and resource management.",
      "Easy-to-use interface designed for students and library staff.",
      "Real-time book availability status and reservation system."
    ],
    techStack: ["Hono", "Bun", "Vue", "MySQL", "Tailwind CSS", "Docker"],
    role: "Fullstack Developer",
  },
  {
    title: "Middleplays",
    year: "2026",
    description: "A secure digital e-commerce and escrow platform for game account trading with advanced automation and KYC verification.",
    image: "/projects/middleplays.png",
    tags: ["Bun", "Elysia", "PostgreSQL", "Qwik"],
    overview: "Middleplays is a cutting-edge digital marketplace and escrow platform designed specifically for game account trading. The platform combines sophisticated automation systems with robust security features including KYC/KTP verification for sellers and intelligent fund holding mechanisms to protect both buyers and sellers from fraud and human error.",
    keyFeatures: [
      "Smart escrow system with fund holding from buyer until transaction completion.",
      "Comprehensive KYC/KTP verification for seller accounts ensuring legitimacy and accountability.",
      "Advanced automation systems for seamless transaction processing and dispute resolution.",
      "Real-time fraud detection and prevention mechanisms.",
      "Secure payment gateway integration with multiple payment methods.",
      "Detailed transaction history and analytics dashboard."
    ],
    techStack: ["Bun", "Elysia JS", "PostgreSQL", "BullMQ", "Redis", "Drizzle", "Qwik JS", "Tailwind CSS"],
    role: "Founder & Lead Developer",
  },
];

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => generateSlug(project.title) === slug);
}

export function getProjectIndex(slug: string): number {
  return projects.findIndex((project) => generateSlug(project.title) === slug);
}

export function getRelatedProjects(currentSlug: string): Project[] {
  const currentIndex = getProjectIndex(currentSlug);
  if (currentIndex === -1) return [];
  
  // Return next 2 projects, or wrap around if at the end
  const relatedIndices = [
    (currentIndex + 1) % projects.length,
    (currentIndex + 2) % projects.length,
  ];
  
  return relatedIndices.map((i) => projects[i]);
}
