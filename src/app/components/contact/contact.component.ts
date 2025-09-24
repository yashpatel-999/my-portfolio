import { Component, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PERSONAL_INFO } from '../../data/personal.data';
import { environment } from '../../../environments/environment';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: NgForm;
  
  personalInfo = PERSONAL_INFO;
  
  // Web3Forms configuration
  private readonly WEB3_FORMS_ACCESS_KEY = environment.web3FormsAccessKey;
  private readonly WEB3_FORMS_API = 'https://api.web3forms.com/submit';
  
  formData: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = signal(false);
  submitMessage = signal('');
  submitSuccess = signal(false);
  showToast = signal(false);
  private toastTimer: any;

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    if (this.isSubmitting()) return;
    
    this.isSubmitting.set(true);
    this.submitMessage.set('');

    // Prepare form data for Web3Forms
    const formData = new FormData();
    formData.append('access_key', this.WEB3_FORMS_ACCESS_KEY);
    formData.append('name', this.formData.name);
    formData.append('email', this.formData.email);
    formData.append('message', this.formData.message);
    formData.append('from_name', this.formData.name);
    formData.append('subject', `New Portfolio Contact from ${this.formData.name}`);
    
    // Submit to Web3Forms API
    this.http.post(this.WEB3_FORMS_API, formData).subscribe({
      next: (response: any) => {
        console.log('Form submitted successfully:', response);
        this.isSubmitting.set(false);
        this.submitSuccess.set(true);
        this.submitMessage.set('Thank you for your message! I\'ll get back to you soon.');
        this.showToastMessage();
        
        // Reset form with a slight delay to ensure proper reset
        setTimeout(() => {
          this.resetForm();
        }, 100);
      },
      error: (error) => {
        console.error('Form submission failed:', error);
        this.isSubmitting.set(false);
        this.submitSuccess.set(false);
        this.submitMessage.set('Sorry, there was an error sending your message. Please try again or email me directly.');
        this.showToastMessage();
      }
    });
  }

  private resetForm(): void {
    // Reset form data
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
    
    // Reset form validation state
    if (this.contactForm) {
      this.contactForm.resetForm();
      // Mark all controls as untouched to hide validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.controls[key];
        control.markAsUntouched();
        control.markAsPristine();
      });
    }
  }

  onFormInput(): void {
    // Clear success/error messages when user starts typing again
    if (this.submitMessage()) {
      this.submitMessage.set('');
      this.submitSuccess.set(false);
    }
  }

  showToastMessage(): void {
    this.showToast.set(true);
    
    // Clear any existing timer
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }
    
    // Auto-hide toast after 5 seconds
    this.toastTimer = setTimeout(() => {
      this.closeToast();
    }, 5000);
  }

  closeToast(): void {
    this.showToast.set(false);
    this.submitMessage.set('');
    this.submitSuccess.set(false);
    
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
      this.toastTimer = null;
    }
  }
}