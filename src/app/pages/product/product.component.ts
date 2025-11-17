import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { GalleryGridComponent } from '../../components/gallery-grid/gallery-grid.component';

@Component({
  selector: 'app-product',
  imports:[HeaderComponent,GalleryGridComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  @Input() category: string = 'product';
}
