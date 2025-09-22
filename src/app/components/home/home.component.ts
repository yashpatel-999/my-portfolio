import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PERSONAL_INFO } from '../../data/personal.data';
import { getTechStackItem } from '../../data/tech-stack.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  personalInfo = PERSONAL_INFO;
  
  featuredTechnologies = [
    getTechStackItem('Angular'),
    getTechStackItem('React'),
    getTechStackItem('TypeScript'),
    getTechStackItem('Rust'),
    getTechStackItem('Python'),
    getTechStackItem('PostgreSQL')
  ];

  getInitials(): string {
    return this.personalInfo.name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase();
  }
}