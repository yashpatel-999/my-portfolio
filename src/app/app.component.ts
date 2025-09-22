import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <div class="app">
      <app-header></app-header>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .main-content {
      flex: 1;
      width: 100%;
    }

    /* Smooth scrolling */
    html {
      scroll-behavior: smooth;
    }

    /* Focus styles for accessibility */
    *:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
      border-radius: 4px;
    }

    /* Selection styles */
    ::selection {
      background: var(--primary-color);
      color: white;
    }

    ::-moz-selection {
      background: var(--primary-color);
      color: white;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  private themeService = inject(ThemeService);

  ngOnInit() {
    // Theme service will automatically initialize from constructor
    // This ensures the theme is applied on app start
  }
}
