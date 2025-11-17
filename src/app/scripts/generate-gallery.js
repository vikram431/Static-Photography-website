// src/app/scripts/generate-gallery.js
const fs = require('fs');
const path = require('path');

// Point to assets/images directory
const assetsFolder = path.join(__dirname, '../../assets/images');

// Final output object
const output = {};

// Read everything inside /assets/images
const items = fs.readdirSync(assetsFolder, { withFileTypes: true });

// Loop all folders dynamically
items.forEach(item => {
  if (item.isDirectory()) {
    const category = item.name; // folder name becomes category

    const categoryPath = path.join(assetsFolder, category);

    // Read files inside the folder
    const files = fs.readdirSync(categoryPath)
      .filter(file => /\.(jpg|jpeg|png|svg|webp|jfif)$/i.test(file));

    output[category] = files;
  }
});

// Output file path
const outputPath = path.join(assetsFolder, 'gallery.json');

// Write JSON
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`Gallery JSON generated at: ${outputPath}`);
