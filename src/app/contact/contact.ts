import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  submitting = false;
  submitted = false;

  contactForm!: FormGroup;

  contactInfo = [
    { title: 'Email Us', value: 'hello@quivonex.com', icon: 'ti-mail' },
    { title: 'Call Us', value: '+1 (555) 123-4567', icon: 'ti-phone' },
    { title: 'Visit Us', value: '123 Tech Park, San Francisco, CA', icon: 'ti-map-pin' }
  ];

  socials = [
    { icon: 'ti-brand-facebook' },
    { icon: 'ti-brand-twitter' },
    { icon: 'ti-brand-instagram' }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) return;

    this.submitting = true;
    this.submitted = false;

    setTimeout(() => {
      this.submitting = false;
      this.submitted = true;
      this.contactForm.reset();
    }, 1200);
  }
}