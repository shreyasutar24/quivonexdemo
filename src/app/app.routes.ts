import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { Services } from './services/services';
import { Gallary } from './gallary/gallary';
import { Contact } from './contact/contact';
import { About } from './about/about';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'products',
        component: Products
    },
     {
        path: 'services',
        component: Services
    },
     {
        path: 'gallary',
        component: Gallary
    },
    {
        path: 'contact',
        component: Contact
    },
     {
        path: 'about',
        component: About
    },
];