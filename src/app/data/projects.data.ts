import { Project } from '../models/portfolio.models';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    description: 'A responsive Netflix homepage clone built with modern web technologies',
    longDescription: 'A pixel-perfect recreation of Netflix\'s homepage featuring responsive design, hover effects, and modern CSS techniques. Built as a learning project to master HTML5, CSS3, and Bootstrap framework.',
    techStack: ['HTML5', 'CSS3', 'Bootstrap', 'React'],
    category: 'Frontend',
    status: 'Completed',
    githubUrl: 'https://github.com/yashpatel-999/netflix_clone.git',
    featured: true,
    createdAt: '2024-01-15'
  },
  {
    id: 'jobby',
    title: 'Jobby - Smart Task Manager',
    description: 'A React-based productivity app powered by prebuilt APIs for seamless task management.',
    longDescription: 'Jobby is a task management web application built with React. It integrates with prebuilt APIs to handle user authentication, task creation, and real-time updates.',
    techStack: ['React', 'TypeScript', 'CSS3', 'RxJS'],
    category: 'Frontend',
    status: 'Completed',
    githubUrl: 'https://github.com/yashpatel-999/jobby.git',
    featured: true,
    createdAt: '2024-03-10'
  },
  {
    id: 'fifo-gains',
    title: 'FIFO Gains - Rust API Server',
    description: 'High-performance RESTful API server built with Rust and Actix-web',
    longDescription: 'A blazingly fast and memory-safe REST API server built with Rust. Features include  database connection pooling, comprehensive error handling, and automated API documentation.',
    techStack: ['Rust', 'Actix-web', 'PostgreSQL'],
    category: 'Backend',
    status: 'Completed',
    githubUrl: 'https://github.com/yashpatel-999/fifo_gains.git',
    featured: true,
    createdAt: '2024-05-20'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website built with Angular 19',
    longDescription: 'A professional portfolio website showcasing projects, skills, and experience. Features dark/light mode toggle, smooth animations, responsive design, and modern UI components.',
    techStack: ['Angular', 'TypeScript', 'CSS3', 'HTML5'],
    category: 'Frontend',
    status: 'Completed',
    githubUrl: 'https://github.com/yashpatel-999/my-portfolio.git',
    liveUrl: 'https://yashwanththota-portfolio.netlify.app/',
    featured: false,
    createdAt: '2024-06-01'
  },
  {
    id: 'habit-tracker',
    title: 'Habit Tracker',
    description: 'A web app to track and manage daily habits',
    longDescription: 'Habit Tracker is a web application designed to help users build and maintain good habits. It includes features like habit creation, progress tracking, reminders, and analytics to visualize habit performance over time.',
    techStack: ['Angular', 'TypeScript', 'Rust', 'HTML', 'CSS'],
    category: 'Fullstack',
    status: 'Completed',
    githubUrl: 'https://github.com/yashpatel-999/habit-track.git',
    featured: false,
    createdAt: '2025-07-15'
  },
  {
    id: 'expense-share',
    title: 'Expense Share',
    description: 'A smart app to split and manage shared expenses',
    longDescription: 'Expense Share is a web application that helps users track, split, and manage shared expenses among friends, family, or roommates. It includes features like group creation, real-time balance calculation, expense history, and reminders. The focus is on simplicity, transparency, and reducing conflicts over money sharing.',
    techStack: ['Angular', 'TypeScript', 'Rust', 'HTML', 'CSS', 'PostgreSQL'],
    category: 'Fullstack',
    status: 'Completed',
    githubUrl: 'https://github.com/yashpatel-999/expense-share.git',
    liveUrl: 'https://expense-share.netlify.app',
    featured: true,
    createdAt: '2025-09-22'
  }
];