export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Language' | 'Tools';
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon?: string; // Optional icon class or path
  color?: string; // Optional color for the badge
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  category: 'Frontend' | 'Backend' | 'Fullstack' | 'Mobile' | 'Desktop';
  status: 'Completed' | 'In Progress' | 'Planned';
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  createdAt: string; // ISO date string
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  location?: string;
  resume?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  profileImage?: string;
  contact: ContactInfo;
}