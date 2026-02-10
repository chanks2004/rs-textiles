const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SOURCE_DIR = path.join(__dirname, "../public/images/playeras");
const CROP_TOP_RATIO = 0.88; // Mantener 88% superior (recortar ~12% inferior donde suele ir el logo)

const OUTPUT_NAMES = [
  "playeras-hero.png",      // Pila de playeras de colores
  "playeras-telas.png",     // Tipos de tela
  "playeras-serigrafia.png",
  "playeras-bordado.png",
  "playeras-digital.png",
];

async function cropImage(srcPath, destPath) {
  const meta = await sharp(srcPath).metadata();
  const { width, height } = meta;
  const cropHeight = Math.floor(height * CROP_TOP_RATIO);
  await sharp(srcPath)
    .extract({ left: 0, top: 0, width, height: cropHeight })
    .png()
    .toFile(destPath);
  console.log("Recortada:", path.basename(srcPath), "->", path.basename(destPath));
}

async function main() {
  const files = fs.readdirSync(SOURCE_DIR)
    .filter((f) => f.endsWith(".png") && f.startsWith("Gemini"))
    .sort();
  if (files.length !== 5) {
    console.warn("Se esperaban 5 imágenes Gemini, se encontraron:", files.length);
  }
  // Orden: [2]=pile, [1]=man white, [0]=woman cafe, [4]=close up, [3]=woman white
  const order = [2, 1, 0, 4, 3];
  for (let i = 0; i < Math.min(OUTPUT_NAMES.length, 5); i++) {
    const idx = order[i] ?? i;
    const src = path.join(SOURCE_DIR, files[idx]);
    const dest = path.join(SOURCE_DIR, OUTPUT_NAMES[i]);
    await cropImage(src, dest);
  }
  console.log("Listo. Imágenes recortadas en public/images/playeras/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
