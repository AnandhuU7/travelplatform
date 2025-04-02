import { defineConfig } from "astro/config";
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import robotsTxt from 'astro-robots-txt';
import sitemap from "@astrojs/sitemap";
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://travelplatformuae.com',

  integrations: [
    robotsTxt(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'dracula' },
      remarkRehype: { footnoteLabel: 'Footnotes' },
      gfm: false,
    }),
    react(),
  ],
});