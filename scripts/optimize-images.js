const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all files in the directory
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    const inputPath = path.join(inputDir, file);
    
    // Skip directories and non-image files
    if (fs.statSync(inputPath).isDirectory() || 
        !file.match(/\.(jpg|jpeg|png|gif)$/i)) {
      return;
    }
    
    const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);
    
    sharp(inputPath)
      .resize(1200) // Resize if larger than 1200px wide (maintain aspect ratio)
      .webp({ quality: 75 }) // 75% quality usually good balance for <100KB
      .toFile(outputPath)
      .then(info => {
        console.log(`Converted ${file} to WebP: ${(info.size/1024).toFixed(2)} KB`);
      })
      .catch(err => {
        console.error(`Error converting ${file}:`, err);
      });
  });
});
