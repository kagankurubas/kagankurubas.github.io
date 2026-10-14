import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Construct SVG with exact 1200x630 dimensions
const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradients -->
    <radialGradient id="lavenderGlow" cx="70%" cy="45%" r="45%">
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
  <!-- LEFT: TITLE, TAGLINE, STACK                                  -->
  <!-- ============================================================ -->
  <line x1="80" y1="170" x2="420" y2="170" stroke="url(#lineGradH)" stroke-width="1" />

  <g transform="translate(80, 222)">
    <text x="0" y="0" fill="#B69CFF" class="font-mono" font-size="15" font-weight="600" letter-spacing="2">OPEN-SOURCE MCP SERVER</text>
  </g>

  <g transform="translate(76, 318)">
    <text x="0" y="0" fill="url(#titleGrad)" class="font-sans" font-size="96" font-weight="800" letter-spacing="-3">PLUGVAN</text>
  </g>

  <g transform="translate(80, 380)">
    <text x="0" y="0" fill="#D5DBE6" class="font-sans" font-size="28" font-weight="500" letter-spacing="-0.4">Validated Todoist tools for AI assistants</text>
  </g>

  <!-- Bottom rail -->
  <g transform="translate(80, 500)">
    <line x1="0" y1="0" x2="1040" y2="0" stroke="#94A3B8" stroke-width="1" stroke-opacity="0.14" />
    <circle cx="3" cy="38" r="2.5" fill="#B69CFF" fill-opacity="0.7" />
    <text x="18" y="43" fill="#8E9BB0" class="font-mono" font-size="15" font-weight="500" letter-spacing="1">Python · FastMCP · Pydantic v2</text>
  </g>

  <!-- ============================================================ -->
  <!-- RIGHT: ABSTRACT TOOL-BOUNDARY MOTIF (no text)                -->
  <!-- ============================================================ -->
  <g transform="translate(860, 150)">
    <!-- Vertical track -->
    <line x1="120" y1="0" x2="120" y2="290" stroke="#9B7CFF" stroke-width="1" stroke-opacity="0.18" stroke-dasharray="4 8" />

    <!-- Host node -->
    <rect x="70" y="0" width="100" height="44" rx="10" fill="#0E1320" stroke="#94A3B8" stroke-opacity="0.22" />
    <circle cx="120" cy="22" r="4" fill="#8E9BB0" />

    <!-- Boundary: validate + resolve -->
    <rect x="20" y="104" width="200" height="82" rx="12" fill="#121426" stroke="#9B7CFF" stroke-opacity="0.45" />
    <rect x="40" y="124" width="72" height="42" rx="8" fill="#9B7CFF" fill-opacity="0.12" stroke="#B69CFF" stroke-opacity="0.4" />
    <rect x="128" y="124" width="72" height="42" rx="8" fill="#9B7CFF" fill-opacity="0.12" stroke="#B69CFF" stroke-opacity="0.4" />
    <path d="M 64 145 l 8 8 l 16 -16" fill="none" stroke="#C4B5FD" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="152" cy="145" r="6" fill="none" stroke="#C4B5FD" stroke-width="2.5" />
    <line x1="164" y1="145" x2="178" y2="145" stroke="#C4B5FD" stroke-width="2.5" stroke-linecap="round" />

    <!-- Target node -->
    <rect x="70" y="246" width="100" height="44" rx="10" fill="#0E1A16" stroke="#4ADE80" stroke-opacity="0.35" />
    <circle cx="120" cy="268" r="4" fill="#4ADE80" fill-opacity="0.8" />

    <!-- Flow dots -->
    <circle cx="120" cy="74" r="3" fill="#B69CFF" fill-opacity="0.6" />
    <circle cx="120" cy="216" r="3" fill="#B69CFF" fill-opacity="0.6" />
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

const targetFile = path.join(publicOgDir, 'todoist.png');
if (fs.existsSync(targetFile) && !process.argv.includes('--force')) {
  console.log(`[generate-og-todoist] Preserving approved manual file at: ${targetFile}`);
  process.exit(0);
}
fs.writeFileSync(targetFile, pngBuffer);

// Optionally copy a preview for visual inspection to OG_PREVIEW_DIR
const artifactDir = process.env.OG_PREVIEW_DIR;
if (artifactDir) {
  if (!fs.existsSync(artifactDir)) {
    console.error(`[generate-og-todoist] OG_PREVIEW_DIR does not exist: ${artifactDir}`);
    process.exit(1);
  }
  fs.writeFileSync(path.join(artifactDir, 'og_todoist_preview.png'), pngBuffer);
}

console.log(`[generate-og-todoist] Successfully generated 1200x630 OG image at: ${targetFile} (${pngBuffer.length} bytes)`);
