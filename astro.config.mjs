// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

import purgecss from "astro-purgecss";

import compressor from "astro-compressor";

import frontendistahtmlMinify from "@frontendista/astro-html-minify";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "never",
  },
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  }), sitemap(), compressor({
    fileExtensions: [
      ".html",
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".css",
      ".xml",
      ".cjs",
      ".mjs",
      ".svg",
    ],
  }), purgecss({
    extractors: [
      {
        extractor: (content) =>
          content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
        extensions: ["astro", "html", "js", "jsx", "ts", "tsx"],
      },
    ],
  }), frontendistahtmlMinify()],
  site: "https://carlospretto.com",

  output: "hybrid",

  adapter: cloudflare(),
});