import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { GalleryGridComponent } from '../../components/gallery-grid/gallery-grid.component';
@Component({
  selector: 'app-fashion',
  imports:[HeaderComponent,GalleryGridComponent],
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent {
  
  @Input() category: string = 'fashion';
  
}
