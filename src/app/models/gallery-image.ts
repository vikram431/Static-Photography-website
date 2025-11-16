// src/app/models/gallery-image.model.ts
export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
   aspectRatio: string; // required
}
