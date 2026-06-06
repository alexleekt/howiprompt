import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  base: process.env.ASTRO_BASE || '/',

  build: {
    format: 'directory',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});