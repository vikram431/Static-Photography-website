// src/app/scripts/generate-gallery.js
const fs = require('fs');
const path = require('path');

// Since __dirname = src/app/scripts, go up one level to src/app
// const assetsFolder = path.join(__dirname, '../assets/images');
const assetsFolder = path.join(__dirname, '../../assets/images');

const categories = ['fashion', 'beauty'];
const output = {};

categories.forEach(category => {
  const folderPath = path.join(assetsFolder, category); // e.g., src/app/assets/images/fashion
  if (!fs.existsSync(folderPath)) {
    console.error(`Folder does not exist: ${folderPath}`);
    return;
  }
  const files = fs.readdirSync(folderPath).filter(file => /\.(jpg|jpeg|png|svg)$/i.test(file));
  output[category] = files;
});

const outputPath = path.join(assetsFolder, 'gallery.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`Gallery JSON generated at ${outputPath}`);
