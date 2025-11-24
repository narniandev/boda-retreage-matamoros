// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({

  site: 'https://TU_USUARIO_GITHUB.github.io',
  base: '/nombre-de-tu-repo', // Ejemplo: '/boda-david-abigail'

  vite: {
    plugins: [tailwindcss()],
  },
});