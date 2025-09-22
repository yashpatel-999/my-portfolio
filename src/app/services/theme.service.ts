import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  
  // Signal to manage theme state
  private _theme = signal<Theme>(this.getInitialTheme());
  
  // Public readonly signal
  readonly theme = this._theme.asReadonly();
  
  constructor() {
    // Effect to update document class and localStorage when theme changes
    effect(() => {
      const currentTheme = this._theme();
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem(this.THEME_KEY, currentTheme);
    });
  }
  
  private getInitialTheme(): Theme {
    // Check localStorage first
    const stored = localStorage.getItem(this.THEME_KEY) as Theme;
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    
    // Fallback to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  }
  
  toggleTheme(): void {
    this._theme.update(current => current === 'light' ? 'dark' : 'light');
  }
  
  setTheme(theme: Theme): void {
    this._theme.set(theme);
  }
  
  isDark(): boolean {
    return this._theme() === 'dark';
  }
  
  isLight(): boolean {
    return this._theme() === 'light';
  }
}