import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Book spines for the shelf motif: [x, width, height, fill, opacity]
const spines = [
  [0, 34, 168, '#9B7CFF', 0.55],
  [38, 26, 196, '#C4B5FD', 0.35],
  [68, 40, 150, '#65B8FF', 0.35],
  [112, 30, 184, '#9B7CFF', 0.3],
  [146, 36, 160, '#4ADE80', 0.3],
  [186, 24, 204, '#C4B5FD', 0.5],
  [214, 38, 176, '#9B7CFF', 0.4],
];
const shelfY = 230;
const spineRects = spines
  .map(([x, w, h, fill, opacity]) => `
    <rect x="${x}" y="${shelfY - h}" width="${w}" height="${h}" rx="4" fill="${fill}" fill-opacity="${opacity}" stroke="#F5F7FB" stroke-opacity="0.08" />
    <line x1="${x + 6}" y1="${shelfY - h + 18}" x2="${x + w - 6}" y2="${shelfY - h + 18}" stroke="#F5F7FB" stroke-opacity="0.18" stroke-width="1.5" />`)
  .join('');

const tags = ['React 19', 'Supabase RLS', 'Gemini API'];
const tagWidths = tags.map((tag) => Math.round(tag.length * 9.6 + 36));
let tagX = 0;
const tagChips = tags
  .map((tag, i) => {
    const x = tagX;
    tagX += tagWidths[i] + 12;
    return `
    <rect x="${x}" y="0" width="${tagWidths[i]}" height="38" rx="19" fill="#9B7CFF" fill-opacity="0.08" stroke="#B69CFF" stroke-opacity="0.35" />
    <text x="${x + tagWidths[i] / 2}" y="25" text-anchor="middle" fill="#D5DBE6" class="font-mono" font-size="15" font-weight="500" letter-spacing="0.5">${tag}</text>`;
  })
  .join('');

// Construct SVG with exact 1200x630 dimensions
const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradients -->
    <radialGradient id="lavenderGlow" cx="72%" cy="45%" r="45%">
      <stop offset="0%" stop-color="#9B7CFF" stop-opacity="0.12" />
      <stop offset="60%" stop-color="#9B7CFF" stop-opacity="0.03" />
      <stop offset="100%" stop-color="#080B12" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="cornerGlow" cx="10%" cy="85%" r="35%">
      <stop offset="0%" stop-color="#9B7CFF" stop-opacity="0.06" />
      <stop offset="100%" stop-color="#080B12" stop-opacity="0" />
    </radialGradient>

    <!-- Text Gradient -->
    <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F5F7FB" />
      <stop offset="55%" stop-color="#C4B5FD" />
      <stop offset="100%" stop-color="#9B7CFF" />
    </linearGradient>

    <linearGradient id="lineGradH" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9B7CFF" stop-opacity="0.3" />
      <stop offset="50%" stop-color="#9B7CFF" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#9B7CFF" stop-opacity="0" />
    </linearGradient>

    <!-- Grid Pattern -->
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#FFFFFF" stroke-width="1" stroke-opacity="0.018" />
    </pattern>
  </defs>

  <style>
    .font-sans {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
    .font-mono {
      font-family: "JetBrains Mono", "SF Mono", Consolas, "Courier New", monospace;
    }
  </style>

  <!-- 1. Deep Background Canvas -->
  <rect width="1200" height="630" fill="#080B12" />

  <!-- 2. Ambient Atmosphere Glows -->
  <rect width="1200" height="630" fill="url(#lavenderGlow)" />
  <rect width="1200" height="630" fill="url(#cornerGlow)" />

  <!-- 3. Engineering Drafting Grid -->
  <rect width="1200" height="630" fill="url(#grid)" />

  <!-- 4. Subtle Outer Framing Rail -->
  <rect x="36" y="36" width="1128" height="558" rx="16" fill="none" stroke="#94A3B8" stroke-width="1" stroke-opacity="0.1" />

  <!-- ============================================================ -->
  <!-- TOP LEFT: IDENTITY                                           -->
  <!-- ============================================================ -->
  <g transform="translate(80, 84)">
    <circle cx="0" cy="-4" r="3.5" fill="#B69CFF" />
    <circle cx="0" cy="-4" r="7" fill="none" stroke="#B69CFF" stroke-width="1" stroke-opacity="0.4" />
    <text x="16" y="0" fill="#F5F7FB" class="font-mono" font-size="14" font-weight="700" letter-spacing="2.5">KAĞAN KURUBAŞ</text>
  </g>

  <!-- ============================================================ -->
  <!-- LEFT: TITLE, SUBTITLE                                        -->
  <!-- ============================================================ -->
  <line x1="80" y1="170" x2="420" y2="170" stroke="url(#lineGradH)" stroke-width="1" />

  <g transform="translate(76, 300)">
    <text x="0" y="0" fill="url(#titleGrad)" class="font-sans" font-size="104" font-weight="800" letter-spacing="-3">BookShelf</text>
  </g>

  <g transform="translate(80, 362)">
    <text x="0" y="0" fill="#D5DBE6" class="font-sans" font-size="30" font-weight="500" letter-spacing="-0.4">Personal Library &amp; AI Reading Assistant</text>
  </g>

  <!-- Bottom rail with tags -->
  <g transform="translate(80, 470)">
    <line x1="0" y1="0" x2="1040" y2="0" stroke="#94A3B8" stroke-width="1" stroke-opacity="0.14" />
    <g transform="translate(0, 30)">${tagChips}
    </g>
  </g>

  <!-- ============================================================ -->
  <!-- RIGHT: ABSTRACT SHELF MOTIF (no text)                        -->
  <!-- ============================================================ -->
  <g transform="translate(860, 150)">${spineRects}
    <rect x="-14" y="${shelfY}" width="282" height="10" rx="3" fill="#94A3B8" fill-opacity="0.22" />
  </g>
</svg>
`;

// Render using Resvg
const resvg = new Resvg(svg, {
  fitTo: {
    mode: 'width',
    value: 1200
  }
});

const pngData = resvg.render();
const pngBuffer = pngData.asPng();

const publicOgDir = path.resolve(__dirname, '../public/og');
fs.mkdirSync(publicOgDir, { recursive: true });

const targetFile = path.join(publicOgDir, 'bookshelf.png');
if (fs.existsSync(targetFile) && !process.argv.includes('--force')) {
  console.log(`[generate-og-bookshelf] Preserving approved manual file at: ${targetFile}`);
  process.exit(0);
}
fs.writeFileSync(targetFile, pngBuffer);

// Optionally copy a preview for visual inspection to OG_PREVIEW_DIR
const artifactDir = process.env.OG_PREVIEW_DIR;
if (artifactDir) {
  if (!fs.existsSync(artifactDir)) {
    console.error(`[generate-og-bookshelf] OG_PREVIEW_DIR does not exist: ${artifactDir}`);
    process.exit(1);
  }
  fs.writeFileSync(path.join(artifactDir, 'og_bookshelf_preview.png'), pngBuffer);
}

console.log(`[generate-og-bookshelf] Successfully generated 1200x630 OG image at: ${targetFile} (${pngBuffer.length} bytes)`);
