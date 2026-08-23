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
    <radialGradient id="lavenderGlow" cx="55%" cy="45%" r="45%">
      <stop offset="0%" stop-color="#9B7CFF" stop-opacity="0.14" />
      <stop offset="60%" stop-color="#9B7CFF" stop-opacity="0.03" />
      <stop offset="100%" stop-color="#080B12" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="cyanGlow" cx="88%" cy="15%" r="35%">
      <stop offset="0%" stop-color="#65B8FF" stop-opacity="0.07" />
      <stop offset="100%" stop-color="#080B12" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="cornerGlow" cx="10%" cy="85%" r="35%">
      <stop offset="0%" stop-color="#9B7CFF" stop-opacity="0.06" />
      <stop offset="100%" stop-color="#080B12" stop-opacity="0" />
    </radialGradient>

    <!-- Text Gradients -->
    <linearGradient id="creativityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F5F7FB" />
      <stop offset="45%" stop-color="#C4B5FD" />
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
  <rect width="1200" height="630" fill="url(#cyanGlow)" />
  <rect width="1200" height="630" fill="url(#cornerGlow)" />

  <!-- 3. Engineering Drafting Grid -->
  <rect width="1200" height="630" fill="url(#grid)" />

  <!-- 4. Subtle Outer Framing Rail -->
  <rect x="36" y="36" width="1128" height="558" rx="16" fill="none" stroke="#94A3B8" stroke-width="1" stroke-opacity="0.1" />

  <!-- 5. System Rhythm Tracks & Nodes (Abstract Structural Motif) -->
  <!-- Top decorative line & nodes -->
  <line x1="80" y1="140" x2="420" y2="140" stroke="url(#lineGradH)" stroke-width="1" />
  <circle cx="80" cy="140" r="2.5" fill="#B69CFF" fill-opacity="0.6" />
  <circle cx="280" cy="140" r="2" fill="#B69CFF" fill-opacity="0.4" />
  <circle cx="420" cy="140" r="2.5" fill="#B69CFF" fill-opacity="0.6" />

  <!-- Right side system track -->
  <line x1="1040" y1="80" x2="1040" y2="400" stroke="#9B7CFF" stroke-width="1" stroke-opacity="0.08" stroke-dasharray="4 8" />
  <circle cx="1040" cy="180" r="3" fill="#B69CFF" fill-opacity="0.4" />
  <circle cx="1040" cy="320" r="3" fill="#B69CFF" fill-opacity="0.3" />

  <!-- ============================================================ -->
  <!-- TOP LEFT: IDENTITY & ROLES                                   -->
  <!-- ============================================================ -->
  <!-- Eyebrow Tag -->
  <g transform="translate(80, 84)">
    <circle cx="0" cy="-4" r="3.5" fill="#B69CFF" />
    <circle cx="0" cy="-4" r="7" fill="none" stroke="#B69CFF" stroke-width="1" stroke-opacity="0.4" />
    <text x="16" y="0" fill="#F5F7FB" class="font-mono" font-size="14" font-weight="700" letter-spacing="2.5">KAĞAN KURUBAŞ</text>
    <text x="195" y="0" fill="#8E9BB0" class="font-mono" font-size="13" font-weight="400" letter-spacing="1">/ COMPUTER ENGINEER · GAME DEVELOPER · MUSICIAN</text>
  </g>

  <!-- TOP RIGHT: METADATA / COORDINATES -->
  <g transform="translate(1120, 84)" text-anchor="end">
    <text x="0" y="0" fill="#8E9BB0" class="font-mono" font-size="12" font-weight="500" letter-spacing="1.5">PORTFOLIO · 2026</text>
  </g>

  <!-- ============================================================ -->
  <!-- CENTER: DOMINANT EDITORIAL HEADLINE                          -->
  <!-- ============================================================ -->
  <g transform="translate(80, 240)">
    <text x="0" y="0" fill="#F5F7FB" class="font-sans" font-size="64" font-weight="800" letter-spacing="-2.5">ENGINEERING</text>
    <text x="0" y="74" fill="#F5F7FB" class="font-sans" font-size="64" font-weight="800" letter-spacing="-2.5">MEETS</text>
    <text x="0" y="148" fill="url(#creativityGrad)" class="font-sans" font-size="64" font-weight="800" letter-spacing="-2.5">CREATIVITY<tspan fill="#B69CFF">.</tspan></text>
  </g>

  <!-- Lead Statement Description (Under Headline) -->
  <g transform="translate(80, 435)">
    <text x="0" y="0" fill="#8E9BB0" class="font-sans" font-size="18" font-weight="400" letter-spacing="-0.2">
      Building products, systems, and interactive experiences with engineering rigor.
    </text>
  </g>

  <!-- ============================================================ -->
  <!-- BOTTOM: SUPPORTING SYSTEM / DISCIPLINES RAIL                 -->
  <!-- ============================================================ -->
  <g transform="translate(80, 500)">
    <!-- Connecting Rail Line -->
    <line x1="0" y1="0" x2="1040" y2="0" stroke="#94A3B8" stroke-width="1" stroke-opacity="0.14" />
    
    <!-- Discipline 01 -->
    <g transform="translate(0, 32)">
      <circle cx="3" cy="-14" r="2.5" fill="#B69CFF" fill-opacity="0.7" />
      <text x="0" y="0" fill="#B69CFF" class="font-mono" font-size="12" font-weight="700" letter-spacing="1">01</text>
      <text x="28" y="0" fill="#F5F7FB" class="font-mono" font-size="13" font-weight="600" letter-spacing="1">PRODUCT ENGINEERING</text>
      <text x="28" y="20" fill="#8E9BB0" class="font-sans" font-size="13" font-weight="400">Flutter · Dart · Local-First UX</text>
    </g>

    <!-- Discipline 02 -->
    <g transform="translate(360, 32)">
      <circle cx="3" cy="-14" r="2.5" fill="#B69CFF" fill-opacity="0.7" />
      <text x="0" y="0" fill="#B69CFF" class="font-mono" font-size="12" font-weight="700" letter-spacing="1">02</text>
      <text x="28" y="0" fill="#F5F7FB" class="font-mono" font-size="13" font-weight="600" letter-spacing="1">SYSTEMS &amp; AI</text>
      <text x="28" y="20" fill="#8E9BB0" class="font-sans" font-size="13" font-weight="400">Python · FastMCP · Automation</text>
    </g>

    <!-- Discipline 03 -->
    <g transform="translate(720, 32)">
      <circle cx="3" cy="-14" r="2.5" fill="#B69CFF" fill-opacity="0.7" />
      <text x="0" y="0" fill="#B69CFF" class="font-mono" font-size="12" font-weight="700" letter-spacing="1">03</text>
      <text x="28" y="0" fill="#F5F7FB" class="font-mono" font-size="13" font-weight="600" letter-spacing="1">GAME DEVELOPMENT</text>
      <text x="28" y="20" fill="#8E9BB0" class="font-sans" font-size="13" font-weight="400">Unity · C# · Systems</text>
    </g>
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

const targetFile = path.join(publicOgDir, 'home.png');
fs.writeFileSync(targetFile, pngBuffer);

// Also copy to artifacts directory for visual inspection
const artifactDir = 'C:/Users/Gaming/.gemini/antigravity-ide/brain/41cb3d4d-8d31-414e-aee0-880e0d207c2a';
if (fs.existsSync(artifactDir)) {
  fs.writeFileSync(path.join(artifactDir, 'og_home_preview.png'), pngBuffer);
}

console.log(`[generate-og-home] Successfully generated 1200x630 OG image at: ${targetFile} (${pngBuffer.length} bytes)`);
