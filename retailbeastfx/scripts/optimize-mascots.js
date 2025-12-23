const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SOURCE_DIR = 'c:/Users/Owner/Downloads/RETAIL BEAST/transparent';
const OUTPUT_DIR = 'c:/Users/Owner/Desktop/MyTradingApps/retailbeastfx-website/public/mascot';

const sourceFiles = [
    { src: 'bg-removed-result.png', name: 'beast-pose-1' },
    { src: 'bg-removed-result(1).png', name: 'beast-pose-2' },
    { src: 'bg-removed-result(2).png', name: 'beast-pose-3' },
    { src: 'bg-removed-result(3).png', name: 'beast-pose-4' },
];

const sizes = [
    { suffix: 'hero', width: 800 },
    { suffix: 'card', width: 400 },
    { suffix: 'thumb', width: 200 },
];

async function optimizeImages() {
    console.log('🦾 Starting image optimization...\n');

    for (const file of sourceFiles) {
        const inputPath = path.join(SOURCE_DIR, file.src);

        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  Skipping ${file.src} - not found`);
            continue;
        }

        console.log(`📸 Processing ${file.src}...`);

        for (const size of sizes) {
            const outputPath = path.join(OUTPUT_DIR, `${file.name}-${size.suffix}.png`);

            try {
                const info = await sharp(inputPath)
                    .resize(size.width, null, {
                        fit: 'contain',
                        withoutEnlargement: true
                    })
                    .png({
                        quality: 85,
                        compressionLevel: 9,
                        palette: true
                    })
                    .toFile(outputPath);

                const sizeKB = (info.size / 1024).toFixed(1);
                console.log(`   ✅ ${file.name}-${size.suffix}.png (${size.width}px) - ${sizeKB}KB`);
            } catch (err) {
                console.log(`   ❌ Error: ${err.message}`);
            }
        }
        console.log('');
    }

    console.log('🎉 Image optimization complete!');
}

optimizeImages().catch(console.error);
