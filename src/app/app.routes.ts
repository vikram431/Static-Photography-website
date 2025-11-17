import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BeautyComponent } from './pages/beauty/beauty.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FashionComponent } from './pages/fashion/fashion.component';
import { ProductComponent } from './pages/product/product.component';
import { KidsComponent } from './pages/kids/kids.component'; 
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
import { WeddingComponent } from './pages/wedding/wedding.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'beauty', component: BeautyComponent },
  { path: 'fashion', component: FashionComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'ecommerce', component: EcommerceComponent },
  { path: 'wedding', component: WeddingComponent },
  { path: '**', redirectTo: '' }
];
