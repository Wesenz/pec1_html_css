const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputBase = './images-originales';
const outputBase = './static/images-optim';

const categories = {
  asian: async (inputPath, fileNameNoExt, outputDir) => {
    const sizes = [400, 800];
    for (let size of sizes) {
      await sharp(inputPath)
        .resize({ width: size })
        .toFormat('webp')
        .toFile(path.join(outputDir, `${fileNameNoExt}-${size}.webp`));
    }
  },
  spanish: async (inputPath, fileNameNoExt, outputDir) => {
    await sharp(inputPath).toFile(path.join(outputDir, `${fileNameNoExt}.jpg`));
    await sharp(inputPath).toFormat('webp').toFile(path.join(outputDir, `${fileNameNoExt}.webp`));
  },
  italian: async (inputPath, fileNameNoExt, outputDir) => {
    await sharp(inputPath).toFile(path.join(outputDir, `${fileNameNoExt}.jpg`));
  },
  french: async (inputPath, fileNameNoExt, outputDir) => {
    await sharp(inputPath)
      .resize({ width: 400 })
      .toFile(path.join(outputDir, `${fileNameNoExt}-small.jpg`));
    await sharp(inputPath)
      .resize({ width: 1000 })
      .toFile(path.join(outputDir, `${fileNameNoExt}-large.jpg`));
  },
  english: async (inputPath, fileNameNoExt, outputDir) => {
    await sharp(inputPath).toFile(path.join(outputDir, `${fileNameNoExt}.jpg`));
    await sharp(inputPath).toFormat('avif').toFile(path.join(outputDir, `${fileNameNoExt}.avif`));
  }
};

(async () => {
  for (let category of Object.keys(categories)) {
    const inputDir = path.join(inputBase, category);
    const outputDir = path.join(outputBase, category);

    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    const files = fs.readdirSync(inputDir).filter(file => /\.(jpg|jpeg|png)$/i.test(file));

    for (let file of files) {
      const inputPath = path.join(inputDir, file);
      const fileNameNoExt = path.parse(file).name;

      try {
        await categories[category](inputPath, fileNameNoExt, outputDir);
        console.log(`✔ ${category}/${file} procesado`);
      } catch (err) {
        console.error(`✘ Error procesando ${category}/${file}:`, err.message);
      }
    }
  }
})();