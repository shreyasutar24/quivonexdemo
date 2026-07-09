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
    { title: 'Email Us', value: 'quivonexsolutions@gmail.com', icon: 'ti-mail' },
    { title: 'Call Us', value: '(+91) 9226859922 (Toll Free)', icon: 'ti-phone' },
    { title: 'Visit Us', value: '402,Shri Datta Lakxmi Banglow,Shri Krishna Colony Dhangarwadi Old MIDC Kodoli, Satara, Maharashtra 415004', icon: 'ti-map-pin' }
  ];

  socials: { icon: string; url: string }[] = [
    { icon: 'ti-brand-facebook', url: 'https://www.facebook.com/people/Quivonex-Solutions/61588563381546/' },
    { icon: 'ti-brand-whatsapp', url: 'https://api.whatsapp.com/send/?phone=919226859922&text&type=phone_number&app_absent=0' },
    { icon: 'ti-brand-instagram', url: 'https://www.instagram.com/qnxsolutions/' }

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