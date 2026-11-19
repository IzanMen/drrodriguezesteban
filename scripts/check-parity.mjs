import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const routes = [
  'index.html',
  'aviso-legal/index.html',
  'contacto/index.html',
  'cookies/index.html',
  'coolpeel-laser-madrid/index.html',
  'hifu-facial-madrid/index.html',
  'laser-co2-regenerativo-madrid/index.html',
  'monalisa-touch-madrid/index.html',
  'por-que-elegirnos/index.html',
  'privacidad/index.html',
  'rellenos-naturales-acido-hialuronico-madrid/index.html',
  'sobre-nosotros/index.html',
  'testimonios/index.html',
  'tratamientos-faciales/index.html',
  '_astro/aviso-legal.CjDSgnlO.css',
  '_astro/page.sJrt8mpm.js',
  'favicon.svg',
  'doctor-hero.png',
  'doctor-hero.webp',
  'opengraph.jpg',
  'robots.txt',
  'sitemap-0.xml',
  'sitemap-index.xml',
];

function digest(buffer) {
  return createHash('sha256').update(buffer).digest('hex');
}

let failed = false;
for (const route of routes) {
  const [reference, generated] = await Promise.all([
    readFile(new URL(`../${route}`, import.meta.url)),
    readFile(new URL(`../dist/${route}`, import.meta.url)),
  ]);
  const matches = reference.equals(generated);
  console.log(`${matches ? 'OK' : 'DIFF'}  ${route}  ${digest(generated)}`);
  failed ||= !matches;
}

if (failed) {
  console.error('\nThe generated build differs from the recovered production build.');
  process.exitCode = 1;
} else {
  console.log('\nExact byte-for-byte parity verified.');
}
