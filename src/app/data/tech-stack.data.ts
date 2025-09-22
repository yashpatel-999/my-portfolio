export interface TechStackItem {
  name: string;
  icon: string;
  color: string;
  category: 'Frontend' | 'Backend' | 'Language' | 'Database' | 'Tools' | 'Framework';
}

export const TECH_STACK_MAP: Record<string, TechStackItem> = {
  // Frontend Technologies
  'Angular': {
    name: 'Angular',
    icon: 'fab fa-angular',
    color: '#000000',
    category: 'Frontend'
  },
  'React': {
    name: 'React',
    icon: 'fab fa-react',
    color: '#333333',
    category: 'Frontend'
  },
  'HTML5': {
    name: 'HTML5',
    icon: 'fab fa-html5',
    color: '#333333',
    category: 'Frontend'
  },
  'CSS3': {
    name: 'CSS3',
    icon: 'fab fa-css3-alt',
    color: '#333333',
    category: 'Frontend'
  },
  'Bootstrap': {
    name: 'Bootstrap',
    icon: 'fab fa-bootstrap',
    color: '#555555',
    category: 'Framework'
  },
  'JavaScript': {
    name: 'JavaScript',
    icon: 'fab fa-js-square',
    color: '#555555',
    category: 'Language'
  },
  'TypeScript': {
    name: 'TypeScript',
    icon: 'fas fa-code',
    color: '#555555',
    category: 'Language'
  },

  // Backend & Languages
  'Rust': {
    name: 'Rust',
    icon: 'fas fa-cog',
    color: '#000000',
    category: 'Language'
  },
  'Python': {
    name: 'Python',
    icon: 'fab fa-python',
    color: '#777777',
    category: 'Language'
  },
  'Java': {
    name: 'Java',
    icon: 'fab fa-java',
    color: '#444444',
    category: 'Language'
  },
  'C': {
    name: 'C',
    icon: 'fas fa-terminal',
    color: '#666666',
    category: 'Language'
  },
  'C++': {
    name: 'C++',
    icon: 'fas fa-microchip',
    color: '#666666',
    category: 'Language'
  },
  'Node.js': {
    name: 'Node.js',
    icon: 'fab fa-node-js',
    color: '#888888',
    category: 'Backend'
  },

  // Databases
  'PostgreSQL': {
    name: 'PostgreSQL',
    icon: 'fas fa-database',
    color: '#666666',
    category: 'Database'
  },
  'MongoDB': {
    name: 'MongoDB',
    icon: 'fas fa-leaf',
    color: '#999999',
    category: 'Database'
  },

  // Tools & Frameworks
  'Docker': {
    name: 'Docker',
    icon: 'fab fa-docker',
    color: '#888888',
    category: 'Tools'
  },
  'Kubernetes': {
    name: 'Kubernetes',
    icon: 'fas fa-dharmachakra',
    color: '#000000',
    category: 'Tools'
  },
  'Git': {
    name: 'Git',
    icon: 'fab fa-git-alt',
    color: '#555555',
    category: 'Tools'
  },
  'GitHub': {
    name: 'GitHub',
    icon: 'fab fa-github',
    color: '#000000',
    category: 'Tools'
  },

  // Specific Technologies
  'RxJS': {
    name: 'RxJS',
    icon: 'fas fa-stream',
    color: '#666666',
    category: 'Framework'
  },
  'Actix-web': {
    name: 'Actix-web',
    icon: 'fas fa-server',
    color: '#000000',
    category: 'Framework'
  },
  'JWT': {
    name: 'JWT',
    icon: 'fas fa-key',
    color: '#555555',
    category: 'Tools'
  },
  'Clap': {
    name: 'Clap',
    icon: 'fas fa-terminal',
    color: '#666666',
    category: 'Framework'
  },
  'Tokio': {
    name: 'Tokio',
    icon: 'fas fa-bolt',
    color: '#000000',
    category: 'Framework'
  },
  'Serde': {
    name: 'Serde',
    icon: 'fas fa-exchange-alt',
    color: '#777777',
    category: 'Framework'
  },
  'gRPC': {
    name: 'gRPC',
    icon: 'fas fa-network-wired',
    color: '#555555',
    category: 'Framework'
  }
};

// Helper function to get tech stack item by name
export function getTechStackItem(name: string): TechStackItem {
  return TECH_STACK_MAP[name] || {
    name,
    icon: 'fas fa-cube',
    color: '#666666',
    category: 'Tools'
  };
}

// Helper function to get all tech stack items
export function getAllTechStackItems(): TechStackItem[] {
  return Object.values(TECH_STACK_MAP);
}