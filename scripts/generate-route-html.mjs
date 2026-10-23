import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error(`Error: Base template not found at ${templatePath}. Run vite build first.`);
  process.exit(1);
}

const templateHtml = fs.readFileSync(templatePath, 'utf-8');

const routes = [
  {
    path: 'projects/habitto',
    title: 'Habitto — Local-First Habit Tracker | Kağan Kurubaş',
    description: 'Engineering case study of Habitto, a privacy-first Flutter habit and routine tracker designed to work locally on-device.',
    canonical: 'https://kagankurubas.github.io/projects/habitto',
    ogType: 'article',
    ogTitle: 'Habitto — Local-First Habit Tracker | Kağan Kurubaş',
    ogDescription: 'Engineering case study of Habitto, a privacy-first Flutter habit and routine tracker designed to work locally on-device.',
    ogUrl: 'https://kagankurubas.github.io/projects/habitto',
    ogImage: 'https://kagankurubas.github.io/og/habitto.png',
    ogImageAlt: 'Habitto — Local-First Habit Tracker Engineering Case Study',
    twitterTitle: 'Habitto — Local-First Habit Tracker | Kağan Kurubaş',
    twitterDescription: 'Engineering case study of Habitto, a privacy-first Flutter habit and routine tracker designed to work locally on-device.',
    twitterImage: 'https://kagankurubas.github.io/og/habitto.png',
    twitterImageAlt: 'Habitto — Local-First Habit Tracker Engineering Case Study',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Habitto',
      'applicationCategory': 'LifestyleApplication',
      'operatingSystem': 'Android',
      'softwareVersion': '1.1.0',
      'description': 'Privacy-first, local-first habit and routine tracker for Android.',
      'author': {
        '@type': 'Person',
        'name': 'Kağan Kurubaş',
        'url': 'https://kagankurubas.github.io/'
      }
    }
  },
  {
    path: 'projects/plugvan',
    title: 'Plugvan — Validated MCP Server | Kağan Kurubaş',
    description: 'Engineering case study of a local MCP server connecting AI assistants with Todoist through structured tools, validated API interactions, and a tested Python backend.',
    canonical: 'https://kagankurubas.github.io/projects/plugvan',
    ogType: 'article',
    ogTitle: 'Plugvan — Validated MCP Server | Kağan Kurubaş',
    ogDescription: 'Engineering case study of a local MCP server connecting AI assistants with Todoist through structured tools, validated API interactions, and a tested Python backend.',
    ogUrl: 'https://kagankurubas.github.io/projects/plugvan',
    ogImage: 'https://kagankurubas.github.io/og/plugvan.png',
    ogImageAlt: 'Plugvan — Validated MCP Server Case Study',
    twitterTitle: 'Plugvan — Validated MCP Server | Kağan Kurubaş',
    twitterDescription: 'Engineering case study of a local MCP server connecting AI assistants with Todoist through structured tools, validated API interactions, and a tested Python backend.',
    twitterImage: 'https://kagankurubas.github.io/og/plugvan.png',
    twitterImageAlt: 'Plugvan — Validated MCP Server Case Study',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareSourceCode',
      'name': 'Plugvan',
      'programmingLanguage': 'Python',
      'codeRepository': 'https://github.com/kagankurubas/plugvan',
      'license': 'https://opensource.org/licenses/MIT',
      'description': 'An open-source MCP server giving AI assistants validated access to the Todoist API.',
      'author': {
        '@type': 'Person',
        'name': 'Kağan Kurubaş',
        'url': 'https://kagankurubas.github.io/'
      }
    }
  },
  {
    path: 'projects/bookshelf',
    title: 'BookShelf — Personal Library & AI Reading Assistant | Kağan Kurubaş',
    description: 'Engineering case study of BookShelf, a personal book cataloging app with barcode-scan adding, a Gemini-powered AI reading assistant, and Supabase-backed accounts.',
    canonical: 'https://kagankurubas.github.io/projects/bookshelf',
    ogType: 'article',
    ogTitle: 'BookShelf — Personal Library & AI Reading Assistant | Kağan Kurubaş',
    ogDescription: 'Engineering case study of BookShelf, a personal book cataloging app with barcode-scan adding, a Gemini-powered AI reading assistant, and Supabase-backed accounts.',
    ogUrl: 'https://kagankurubas.github.io/projects/bookshelf',
    ogImage: 'https://kagankurubas.github.io/og/bookshelf.png',
    ogImageAlt: 'BookShelf — Personal Library & AI Reading Assistant Case Study',
    twitterTitle: 'BookShelf — Personal Library & AI Reading Assistant | Kağan Kurubaş',
    twitterDescription: 'Engineering case study of BookShelf, a personal book cataloging app with barcode-scan adding, a Gemini-powered AI reading assistant, and Supabase-backed accounts.',
    twitterImage: 'https://kagankurubas.github.io/og/bookshelf.png',
    twitterImageAlt: 'BookShelf — Personal Library & AI Reading Assistant Case Study',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareSourceCode',
      'name': 'BookShelf',
      'programmingLanguage': 'JavaScript',
      'codeRepository': 'https://github.com/kagankurubas/bookshelf',
      'description': 'A personal book cataloging app with barcode scanning, a Gemini-powered AI reading assistant, and a bilingual (Turkish/English) interface.',
      'author': {
        '@type': 'Person',
        'name': 'Kağan Kurubaş',
        'url': 'https://kagankurubas.github.io/'
      }
    }
  }
];

// Renamed routes. GitHub Pages has no server-side redirects, so each legacy path gets a static page
// with the target's metadata (canonical = target) that redirects in the browser.
const legacyRoutes = [
  { path: 'projects/todoist', target: 'projects/plugvan' }
];

function renderRoute(route) {
  let html = templateHtml;

  // 1. Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

  // 2. Replace Meta Description
  html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${route.description}" />`);

  // 3. Replace Canonical Link
  html = html.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${route.canonical}" />`);

  // 4. Replace Open Graph Tags
  html = html.replace(/<meta property="og:type" content=".*?" \/>/i, `<meta property="og:type" content="${route.ogType}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${route.ogUrl}" />`);
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${route.ogTitle}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${route.ogDescription}" />`);
  html = html.replace(/<meta property="og:image" content=".*?" \/>/i, `<meta property="og:image" content="${route.ogImage}" />`);
  html = html.replace(/<meta property="og:image:alt" content=".*?" \/>/i, `<meta property="og:image:alt" content="${route.ogImageAlt}" />`);

  // 5. Replace Twitter Tags
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${route.twitterTitle}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${route.twitterDescription}" />`);
  html = html.replace(/<meta name="twitter:image" content=".*?" \/>/i, `<meta name="twitter:image" content="${route.twitterImage}" />`);
  html = html.replace(/<meta name="twitter:image:alt" content=".*?" \/>/i, `<meta name="twitter:image:alt" content="${route.twitterImageAlt}" />`);

  // 6. Replace Structured Data
  const structuredDataJson = JSON.stringify(route.structuredData, null, 2);
  html = html.replace(
    /<script id="app-structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script id="app-structured-data" type="application/ld+json">\n${structuredDataJson}\n    </script>`
  );

  return html;
}

function writeRoute(routePath, html, kind) {
  const targetDir = path.join(distDir, routePath);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');
  console.log(`[generate-route-html] Generated ${kind}: dist/${routePath}/index.html`);
}

for (const route of routes) {
  writeRoute(route.path, renderRoute(route), 'static entrypoint');
}

for (const legacy of legacyRoutes) {
  const target = routes.find((route) => route.path === legacy.target);
  if (!target) {
    console.error(`Error: Legacy route ${legacy.path} points at unknown route ${legacy.target}.`);
    process.exit(1);
  }
  const targetUrl = `/${legacy.target}`;
  // The script keeps the query and hash; meta refresh is the no-JS fallback.
  const redirect =
    `<meta http-equiv="refresh" content="0; url=${targetUrl}" />\n` +
    `    <script>location.replace('${targetUrl}' + location.search + location.hash);</script>`;
  const html = renderRoute(target).replace(/<meta charset="UTF-8" \/>/i, (charset) => `${charset}\n    ${redirect}`);
  if (!html.includes('http-equiv="refresh"')) {
    console.error(`Error: Could not insert the redirect into ${legacy.path}.`);
    process.exit(1);
  }
  writeRoute(legacy.path, html, `redirect ${legacy.path} -> ${legacy.target}`);
}
