import { Component, OnInit,input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GalleryService } from '../../services/gallery.service';
import { ActivatedRoute } from '@angular/router';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  aspectRatio: string;
}

@Component({
  selector: 'app-gallery-grid',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.css'],
  providers: [GalleryService]
})
export class GalleryGridComponent implements OnInit {

 category = input<string>('home');
 
  images: GalleryImage[] = [];
  filteredImages: GalleryImage[] = [];
  selectedImage: GalleryImage | null = null;

  constructor(
    private galleryService: GalleryService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {

      const finalCategory = this.category() || 'home';

    // Step 1: Fetch all images
    this.images = await this.galleryService.getImages();
       
    console.log('category',finalCategory);
    // Step 2: Filter based on category
    if (finalCategory === 'home') {
      this.filteredImages = this.images;   // Show all
    } else {
      this.filteredImages = this.images.filter(
        img => img.category.toLowerCase() === finalCategory.toLowerCase()
      );
    }
  }
}
