import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { GalleryGridComponent } from '../../components/gallery-grid/gallery-grid.component';
@Component({
  selector: 'app-beauty',
  imports:[HeaderComponent,GalleryGridComponent],
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent {

    @Input() category: string = 'beauty';
}
