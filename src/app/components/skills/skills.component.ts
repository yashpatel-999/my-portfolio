import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS_DATA } from '../../data/skills.data';

interface Skill {
  name: string;
  category: string;
  proficiency: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
  proficiencyLevel: number;
  color: string;
  icon?: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills = SKILLS_DATA;
  futureSkills: any[] = [
    { name: 'Rust', category: 'Systems Programming', icon: 'fas fa-cogs' },
    { name: 'Kubernetes', category: 'DevOps', icon: 'fas fa-layer-group' },
    { name: 'GraphQL', category: 'API Development', icon: 'fas fa-project-diagram' },
    { name: 'Machine Learning', category: 'AI/ML', icon: 'fas fa-robot' },
    { name: 'WebAssembly', category: 'Web Technologies', icon: 'fas fa-code' },
    { name: 'Blockchain', category: 'Emerging Tech', icon: 'fas fa-link' }
  ];
  
  selectedFilter = signal<string>('All');
  
  // Computed properties
  filteredSkills = computed(() => {
    const filter = this.selectedFilter();
    if (filter === 'All') {
      return this.skills;
    }
    return this.skills.filter((skill: any) => skill.category === filter);
  });

  skillCategories = computed(() => {
    const categories = [...new Set(this.skills.map((skill: any) => skill.category))];
    return ['All', ...categories.sort()];
  });

  constructor() { }

  ngOnInit(): void {
  }

  setFilter(category: string): void {
    this.selectedFilter.set(category);
  }

  trackBySkill(index: number, skill: any): string {
    return skill.name;
  }

  trackByCategory(index: number, category: string): string {
    return category;
  }

  toggleSkillDetails(skill: any): void {
    skill.showDetails = !skill.showDetails;
  }

  getProficiencyColor(level: number): string {
    if (level >= 90) return '#4ade80'; // Expert - Green
    if (level >= 75) return '#3b82f6'; // Advanced - Blue
    if (level >= 60) return '#f59e0b'; // Intermediate - Orange
    return '#ef4444'; // Beginner - Red
  }

  getProficiencyWidth(proficiency: string): number {
    const levels = {
      'Expert': 95,
      'Advanced': 85,
      'Intermediate': 70,
      'Beginner': 50
    };
    return levels[proficiency as keyof typeof levels] || 50;
  }

  getProgressBarClass(level: number): string {
    if (level >= 90) return 'expert';
    if (level >= 75) return 'advanced';
    if (level >= 60) return 'intermediate';
    return 'beginner';
  }

  startSkillAnimation(): void {
    // Animation trigger for skill bars
    const skillBars = document.querySelectorAll('.skill-progress-fill');
    skillBars.forEach((bar, index) => {
      setTimeout(() => {
        bar.classList.add('animate');
      }, index * 100);
    });
  }

  getTrendClass(skill: any): string {
    // Add trending indicator for in-demand skills
    const trendingSkills = ['React', 'Angular', 'Vue.js', 'Python', 'TypeScript', 'Docker', 'AWS', 'Node.js'];
    return trendingSkills.includes(skill.name) ? 'trending' : '';
  }

  getExperienceYears(skill: any): number {
    // Mock data for experience years - in real app this would come from data
    const experienceMap: {[key: string]: number} = {
      'JavaScript': 5,
      'TypeScript': 3,
      'Python': 4,
      'React': 3,
      'Angular': 2,
      'Vue.js': 2,
      'Node.js': 4,
      'Express.js': 3,
      'MongoDB': 3,
      'MySQL': 4,
      'PostgreSQL': 2,
      'Git': 5,
      'Docker': 2,
      'AWS': 2
    };
    return experienceMap[skill.name] || 1;
  }

  getCertificationBadge(skill: any): string {
    // Mock certification badges
    const certifiedSkills = ['AWS', 'Docker', 'MongoDB'];
    return certifiedSkills.includes(skill.name) ? 'certified' : '';
  }

  getSkillProjectCount(skill: any): number {
    // Mock project count for each skill
    const projectCounts: {[key: string]: number} = {
      'JavaScript': 15,
      'TypeScript': 8,
      'Python': 12,
      'React': 10,
      'Angular': 6,
      'Vue.js': 4,
      'Node.js': 11,
      'Express.js': 9,
      'MongoDB': 8,
      'MySQL': 7,
      'PostgreSQL': 5,
      'Git': 15,
      'Docker': 6,
      'AWS': 4
    };
    return projectCounts[skill.name] || 2;
  }

  formatProficiencyLevel(level: number): string {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced'; 
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  }

  getSkillLevel(proficiency: string): number {
    const levels = {
      'Expert': 95,
      'Advanced': 85,
      'Intermediate': 70,
      'Beginner': 50
    };
    return levels[proficiency as keyof typeof levels] || 50;
  }

  onSkillHover(skill: any, isHovering: boolean): void {
    skill.isHovering = isHovering;
  }

  onSkillClick(skill: any): void {
    // Handle skill card click - could show details modal or navigate
    console.log('Skill clicked:', skill.name);
    this.toggleSkillDetails(skill);
  }

  getSkillIcon(skill: any): string {
    return skill.icon || 'fas fa-code';
  }

  trackByFutureSkill(index: number, skill: any): string {
    return skill.name;
  }

  onFutureSkillClick(skill: any): void {
    // Handle future skill click
    console.log('Future skill clicked:', skill.name);
  }
}