import { defineConfig } from "astro/config";
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://travel.digiimpact.in',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'dracula' },
      remarkRehype: { footnoteLabel: 'Footnotes' },
      gfm: false,
    }),
  ],
});