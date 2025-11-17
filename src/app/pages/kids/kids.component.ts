import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { GalleryGridComponent } from '../../components/gallery-grid/gallery-grid.component';

@Component({
  selector: 'app-kids',
  imports:[HeaderComponent,GalleryGridComponent],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css'
})
export class KidsComponent {
  @Input() category: string = 'kids';
}
