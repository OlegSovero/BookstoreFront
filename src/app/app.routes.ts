import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
    {
        path:'', component: HomeComponent, title: 'Home Page'
    },
    {path:'checkout', component: CheckoutComponent, title: 'Checkout'}
];
