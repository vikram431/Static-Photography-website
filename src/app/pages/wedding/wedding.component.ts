import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { GalleryGridComponent } from '../../components/gallery-grid/gallery-grid.component';

@Component({
  selector: 'app-wedding',
  imports:[HeaderComponent,GalleryGridComponent],
  templateUrl: './wedding.component.html',
  styleUrl: './wedding.component.css'
})
export class WeddingComponent {
  @Input() category: string = 'wedding';
}
