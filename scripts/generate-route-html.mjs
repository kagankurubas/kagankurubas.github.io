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
    path: 'projects/todoist',
    title: 'Todoist MCP Bridge — MCP & Automation System | Kağan Kurubaş',
    description: 'Engineering case study of a local MCP server connecting AI assistants with Todoist through structured tools, validated API interactions, and a tested Python backend.',
    canonical: 'https://kagankurubas.github.io/projects/todoist',
    ogType: 'article',
    ogTitle: 'Todoist MCP Bridge — MCP & Automation System | Kağan Kurubaş',
    ogDescription: 'Engineering case study of a local MCP server connecting AI assistants with Todoist through structured tools, validated API interactions, and a tested Python backend.',
    ogUrl: 'https://kagankurubas.github.io/projects/todoist',
    ogImage: 'https://kagankurubas.github.io/og/todoist.png',
    ogImageAlt: 'Todoist MCP Bridge — MCP & Automation Infrastructure Case Study',
    twitterTitle: 'Todoist MCP Bridge — MCP & Automation System | Kağan Kurubaş',
    twitterDescription: 'Engineering case study of a local MCP server connecting AI assistants with Todoist through structured tools, validated API interactions, and a tested Python backend.',
    twitterImage: 'https://kagankurubas.github.io/og/todoist.png',
    twitterImageAlt: 'Todoist MCP Bridge — MCP & Automation Infrastructure Case Study',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareSourceCode',
      'name': 'Todoist MCP Bridge',
      'programmingLanguage': 'Python',
      'codeRepository': 'https://github.com/kagankurubas/Todoist-MCP-Bridge',
      'license': 'https://opensource.org/licenses/MIT',
      'description': 'Model Context Protocol server and automation bridge connecting AI assistants and Google Tasks to Todoist.',
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
      'programmingLanguage': 'TypeScript',
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

for (const route of routes) {
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

  const targetDir = path.join(distDir, route.path);
  fs.mkdirSync(targetDir, { recursive: true });
  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, html, 'utf-8');

  console.log(`[generate-route-html] Generated static entrypoint: dist/${route.path}/index.html`);
}
