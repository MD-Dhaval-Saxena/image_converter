import { existsSync, mkdirSync, readdirSync } from 'fs';
import imagemin from 'imagemin'; 
import imageminWebp from 'imagemin-webp';

const inputDir = 'images/png';
const outputDir = 'images/webp';

if (!existsSync(outputDir)) {
  mkdirSync(outputDir); 
}

readdirSync(inputDir)
  .filter(file => file.endsWith('.png'))
  .forEach(async file => {

    const inputFile = `${inputDir}/${file}`;
    const outputFile = `${outputDir}/${file.replace('.png', '.webp')}`;

    await imagemin([inputFile], {
      destination: outputDir,
      plugins: [
        imageminWebp({quality: 50}) 
      ]
    });

    console.log(`Converted ${inputFile} to ${outputFile}`);

  });
