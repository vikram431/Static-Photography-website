import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BeautyComponent } from './pages/beauty/beauty.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FashionComponent } from './pages/fashion/fashion.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'beauty', component: BeautyComponent },
  { path: 'fashion', component: FashionComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
