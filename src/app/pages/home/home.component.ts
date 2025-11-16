import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { GalleryGridComponent } from '../../components/gallery-grid/gallery-grid.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports:[HeaderComponent,GalleryGridComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
