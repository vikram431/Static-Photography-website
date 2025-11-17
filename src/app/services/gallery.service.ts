import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { GalleryImage } from '../models/gallery-image';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  async getImages(): Promise<GalleryImage[]> {
    const images: GalleryImage[] = [];
    let idCounter = 1;

    const data = await firstValueFrom(
      this.http.get<{ [key: string]: string[] }>('/Static-Photography-website/assets/images/gallery.json')
    );

    Object.keys(data).forEach(category => {
      data[category].forEach(file => {
        images.push({
          id: idCounter++,
          src: `/Static-Photography-website/assets/images/${category}/${file}`,
          alt: `${category} image`,
          category,
          aspectRatio: '1'
        });
      });
    });

    console.log('images', images);
    return images;
  }
}
