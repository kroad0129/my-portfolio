export interface NavItem {
  name: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  image: string;
  github?: string;
  report?: string;
  thesis?: string;
  essay?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}
