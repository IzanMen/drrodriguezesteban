import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.drrodriguezesteban.es',
  output: 'static',
  outDir: './dist',
  publicDir: './public',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
