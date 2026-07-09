import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  stats = [
    { value: '120+', label: 'Projects Delivered' },
    { value: '80+', label: 'Happy Clients' },
    { value: '9', label: 'Years of Experience' },
    { value: '25+', label: 'Team Members' }
  ];
 
  values = [
    {
      icon: 'ti-bulb',
      title: 'Innovation First',
      description: 'We stay ahead of the curve, adopting modern tools and practices to build future-ready software.'
    },
    {
      icon: 'ti-shield-check',
      title: 'Reliability',
      description: 'Every product we ship is tested, secure, and built to scale with your business.'
    },
    {
      icon: 'ti-users',
      title: 'Client Focused',
      description: 'We work as an extension of your team, prioritizing clear communication and shared goals.'
    }
  ];
 
  team = [
    { photo: 'https://i.pravatar.cc/150?img=12', name: 'Aditi Kapoor', role: 'Founder & CEO' },
    { photo: 'https://i.pravatar.cc/150?img=33', name: 'Rohan Shah', role: 'Lead Engineer' },
    { photo: 'https://i.pravatar.cc/150?img=47', name: 'Meera Verma', role: 'Product Designer' },
    { photo: 'https://i.pravatar.cc/150?img=51', name: 'Jason Tan', role: 'DevOps Lead' }
  ];
}