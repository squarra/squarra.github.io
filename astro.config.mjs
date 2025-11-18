import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [mdx()],
  build: {
    assets: '_assets'
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: '_assets/[hash].js',
        }
      }
    }
  }
});