export interface FutureProject {
  id: string;
  title: string;
  description: string;
  icon: string;
  techStack: string[];
  status: 'planned' | 'in-development' | 'research';
}

export interface LearningItem {
  id: string;
  name: string;
  category: string;
  icon: string;
  progress: number; // 0-100
  priority: 'high' | 'medium' | 'low';
}

export const FUTURE_PROJECTS: FutureProject[] = [
  {
    id: 'task-management-app',
    title: 'Advanced Task Manager',
    description: 'Full-stack task management application with team collaboration features',
    icon: 'fas fa-tasks',
    techStack: ['Angular', 'Node.js', 'PostgreSQL'],
    status: 'in-development'
  },
  {
    id: 'api-gateway',
    title: 'Rust API Gateway',
    description: 'High-performance API gateway built with Rust for microservices',
    icon: 'fas fa-server',
    techStack: ['Rust', 'Docker', 'Redis'],
    status: 'planned'
  },
  {
    id: 'portfolio-v2',
    title: 'Portfolio 2.0',
    description: 'Enhanced portfolio with 3D elements and interactive features',
    icon: 'fas fa-cube',
    techStack: ['Angular', 'Three.js', 'TypeScript'],
    status: 'research'
  }
];

export const LEARNING_ROADMAP: LearningItem[] = [
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    category: 'AI/ML',
    icon: 'fas fa-robot',
    progress: 30,
    priority: 'high'
  },
  {
    id: 'cloud-architecture',
    name: 'Cloud Architecture',
    category: 'DevOps',
    icon: 'fab fa-aws',
    progress: 60,
    priority: 'high'
  },
  {
    id: 'blockchain-dev',
    name: 'Blockchain Development',
    category: 'Web3',
    icon: 'fas fa-link',
    progress: 20,
    priority: 'medium'
  },
  {
    id: 'mobile-development',
    name: 'Mobile Development',
    category: 'Frontend',
    icon: 'fas fa-mobile-alt',
    progress: 45,
    priority: 'medium'
  },
  {
    id: 'devops-automation',
    name: 'DevOps Automation',
    category: 'Infrastructure',
    icon: 'fas fa-cogs',
    progress: 75,
    priority: 'high'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    category: 'Security',
    icon: 'fas fa-shield-alt',
    progress: 25,
    priority: 'medium'
  }
];

// Helper functions
export const getFutureProjectsByStatus = (status: FutureProject['status']) => {
  return FUTURE_PROJECTS.filter(project => project.status === status);
};

export const getLearningItemsByPriority = (priority: LearningItem['priority']) => {
  return LEARNING_ROADMAP.filter(item => item.priority === priority).sort((a, b) => b.progress - a.progress);
};

export const getAverageProgress = () => {
  const total = LEARNING_ROADMAP.reduce((sum, item) => sum + item.progress, 0);
  return Math.round(total / LEARNING_ROADMAP.length);
};