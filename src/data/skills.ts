export enum Skillname {
  PHP = "php",
  REACT = "react",
  LARAVEL = "laravel",
  MYSQL = "mysql",
  CSS = "css",
  EXPRESS = "express",
  POSTGRES = "postgres",
  VERCEL = "vercel",
  HTML = "html",
  NODEJS = "nodejs",
  NPM = "npm",
  PROXMOX = "proxmox",
  TS = "ts",
  TAILWIND = "tailwind",
  GITHUB = "github",
  DOCKER = "docker",
  JS = "js",
  NEXTJS = "nextjs",
  GIT = "git",
  LINUX = "linux",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  description: string;
};

export const SKILLS: Record<Skillname, Skill> = {
  [Skillname.PHP]: {
    id: 1,
    name: "php",
    label: "PHP",
    description:
      "A popular general-purpose scripting language for web development.",
  },
  [Skillname.REACT]: {
    id: 2,
    name: "react",
    label: "React",
    description: "A JavaScript library for building user interfaces.",
  },
  [Skillname.LARAVEL]: {
    id: 3,
    name: "laravel",
    label: "Laravel",
    description: "A PHP framework for building modern web applications.",
  },
  [Skillname.MYSQL]: {
    id: 4,
    name: "mysql",
    label: "MySQL",
    description: "An open-source relational database management system.",
  },
  [Skillname.CSS]: {
    id: 5,
    name: "css",
    label: "CSS",
    description:
      "A style sheet language used for describing the look and formatting of a document written in HTML.",
  },
  [Skillname.EXPRESS]: {
    id: 6,
    name: "express",
    label: "Express",
    description: "A minimal and flexible Node.js web application framework.",
  },
  [Skillname.POSTGRES]: {
    id: 7,
    name: "postgres",
    label: "PostgreSQL",
    description: "A powerful, open-source object-relational database system.",
  },
  [Skillname.VERCEL]: {
    id: 8,
    name: "vercel",
    label: "Vercel",
    description: "A cloud platform for static sites and serverless functions.",
  },
  [Skillname.HTML]: {
    id: 9,
    name: "html",
    label: "HTML",
    description: "The standard markup language for creating web pages.",
  },
  [Skillname.NODEJS]: {
    id: 10,
    name: "nodejs",
    label: "Node.js",
    description:
      "A JavaScript runtime built on Chrome's V8 engine for building scalable network applications.",
  },
  [Skillname.NPM]: {
    id: 11,
    name: "npm",
    label: "NPM",
    description: "A package manager for the JavaScript programming language.",
  },
  [Skillname.PROXMOX]: {
    id: 12,
    name: "proxmox",
    label: "Proxmox",
    description:
      "An open-source server management platform for virtualized environments.",
  },
  [Skillname.TS]: {
    id: 13,
    name: "ts",
    label: "TypeScript",
    description:
      "A strongly typed programming language that builds on JavaScript.",
  },
  [Skillname.TAILWIND]: {
    id: 14,
    name: "tailwind",
    label: "TailwindCSS",
    description: "A utility-first CSS framework for rapid UI development.",
  },
  [Skillname.GITHUB]: {
    id: 15,
    name: "github",
    label: "GitHub",
    description:
      "A platform for hosting and collaborating on Git repositories.",
  },
  [Skillname.DOCKER]: {
    id: 16,
    name: "docker",
    label: "Docker",
    description:
      "A platform for developing, shipping, and running applications in containers.",
  },
  [Skillname.JS]: {
    id: 17,
    name: "js",
    label: "JavaScript",
    description:
      "A high-level programming language used primarily for web development.",
  },
  [Skillname.NEXTJS]: {
    id: 18,
    name: "nextjs",
    label: "Next.js",
    description: "A React framework for production-ready web applications.",
  },
  [Skillname.GIT]: {
    id: 19,
    name: "git",
    label: "Git",
    description:
      "A distributed version control system for tracking changes in source code.",
  },
  [Skillname.LINUX]: {
    id: 20,
    name: "linux",
    label: "Linux",
    description: "An open-source operating system based on the Linux kernel.",
  },
};
