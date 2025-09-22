import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS_DATA } from '../../data/projects.data';
import { FUTURE_PROJECTS, LEARNING_ROADMAP, FutureProject, LearningItem } from '../../data/future-projects.data';
import { Project } from '../../models/portfolio.models';
import { getTechStackItem } from '../../data/tech-stack.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = PROJECTS_DATA;
  futureProjects = FUTURE_PROJECTS;
  learningRoadmap = LEARNING_ROADMAP;
  
  selectedCategory = signal<string>('All');
  viewMode = signal<'grid' | 'list'>('grid');
  
  categories = [...new Set(this.projects.map(project => project.category))];
  
  filteredProjects = computed(() => {
    if (this.selectedCategory() === 'All') {
      return this.projects.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    }
    return this.projects
      .filter(project => project.category === this.selectedCategory())
      .sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
  });

  setCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  setViewMode(mode: 'grid' | 'list'): void {
    this.viewMode.set(mode);
  }

  getProjectsCountByCategory(category: string): number {
    return this.projects.filter(project => project.category === category).length;
  }

  getCompletedProjectsCount(): number {
    return this.projects.filter(project => project.status === 'Completed').length;
  }

  getInProgressProjectsCount(): number {
    return this.projects.filter(project => project.status === 'In Progress').length;
  }

  getFeaturedProjectsCount(): number {
    return this.projects.filter(project => project.featured).length;
  }

  getUniqueTechnologiesCount(): number {
    const allTechs = this.projects.flatMap(project => project.techStack);
    return new Set(allTechs).size;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  }

  trackByProjectId(index: number, project: Project): string {
    return project.id;
  }

  trackByFutureProjectId(index: number, project: FutureProject): string {
    return project.id;
  }

  trackByLearningItemId(index: number, item: LearningItem): string {
    return item.id;
  }

  getTechStackItem(techName: string) {
    return getTechStackItem(techName);
  }
}
