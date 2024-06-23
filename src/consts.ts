import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Raveendran Thirisan",
  DESCRIPTION: "Bienvenue sur Astro Sphere, un portfolio et blog pour les designers et développeurs.",
  AUTHOR: "Raveendran Thirisan",
}

// Page Travail
export const WORK: Page = {
  TITLE: "Parcours",
  DESCRIPTION: "Lieux où j'ai travaillé.",
}

// Page Blog
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Écrits sur des sujets qui me passionnent.",
}

// Page Projets
export const PROJECTS: Page = {
  TITLE: "Projets",
  DESCRIPTION: "Projets récents sur lesquels j'ai travaillé.",
}

// Page Recherche
export const SEARCH: Page = {
  TITLE: "Recherche",
  DESCRIPTION: "Recherchez tous les articles et projets par mot-clé.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Accueil", 
    HREF: "/", 
  },
  { 
    TEXT: "Expériences", 
    HREF: "/work", 
  },
 
  { 
    TEXT: "Projets", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "raveendran.thirisan@gmail.com",
    HREF: "raveendran.thirisan@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Raveendran Thirisan",
    HREF: "https://github.com/Raveendran-Thirisan"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Raveendran Thirisan",
    HREF: "https://www.linkedin.com/in/thirisan-raveendran/",
  },
  
]

