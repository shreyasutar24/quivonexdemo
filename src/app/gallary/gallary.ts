import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 
interface GalleryItem {
  title: string;
  category: string;
  image: string;
  description: string;
}
@Component({
  selector: 'app-gallary',
  imports: [CommonModule],
  templateUrl: './gallary.html',
  styleUrl: './gallary.css',
})
export class Gallary {
  categories = ['All', 'Web', 'Mobile', 'Branding', 'UI/UX'];
  activeFilter = 'All';
 
  stats = [
    { value: '120+', label: 'Projects' },
    { value: '80+', label: 'Clients' },
    { value: '9', label: 'Years' }
  ];
 
  items: GalleryItem[] = [
    { title: 'Finflow Dashboard', category: 'Web', image: 'https://picsum.photos/seed/finflow/600/450', description: 'A real-time analytics dashboard built for a fintech client, focused on clarity and speed.' },
    { title: 'Orbit Mobile Banking', category: 'Mobile', image: 'https://picsum.photos/seed/orbit/600/450', description: 'A mobile-first banking app redesigned for simplicity and everyday use.' },
    { title: 'Lumen Brand Identity', category: 'Branding', image: 'https://picsum.photos/seed/lumen/600/450', description: 'Full brand identity system including logo, typography, and color language.' },
    { title: 'Nimbus Cloud Console', category: 'Web', image: 'https://picsum.photos/seed/nimbus/600/450', description: 'A cloud infrastructure console with real-time monitoring and alerts.' },
    { title: 'Pulse Fitness App', category: 'Mobile', image: 'https://picsum.photos/seed/pulse/600/450', description: 'A fitness tracking app with a focus on habit-building and streaks.' },
    { title: 'Aurora UI Kit', category: 'UI/UX', image: 'https://picsum.photos/seed/aurora/600/450', description: 'A component library and design system built for scale.' },
    { title: 'Vertex E-commerce', category: 'Web', image: 'https://picsum.photos/seed/vertex/600/450', description: 'A headless e-commerce storefront with a streamlined checkout flow.' },
    { title: 'Sable Studio Branding', category: 'Branding', image: 'https://picsum.photos/seed/sable/600/450', description: 'Visual identity for a creative studio, blending minimalism and warmth.' },
    { title: 'Halo Onboarding Flow', category: 'UI/UX', image: 'https://picsum.photos/seed/halo/600/450', description: 'A guided onboarding experience designed to reduce drop-off by 40%.' }
  ];
 
  filteredItems: GalleryItem[] = this.items;
  activeItem: GalleryItem | null = null;
  private activeIndex = 0;
 
  setFilter(category: string): void {
    this.activeFilter = category;
    this.filteredItems = category === 'All'
      ? this.items
      : this.items.filter(item => item.category === category);
  }
 
  openLightbox(item: GalleryItem): void {
    this.activeItem = item;
    this.activeIndex = this.filteredItems.indexOf(item);
  }
 
  closeLightbox(): void {
    this.activeItem = null;
  }
 
  nextItem(): void {
    this.activeIndex = (this.activeIndex + 1) % this.filteredItems.length;
    this.activeItem = this.filteredItems[this.activeIndex];
  }
 
  prevItem(): void {
    this.activeIndex = (this.activeIndex - 1 + this.filteredItems.length) % this.filteredItems.length;
    this.activeItem = this.filteredItems[this.activeIndex];
  }
}

