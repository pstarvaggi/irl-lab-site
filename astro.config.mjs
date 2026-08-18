import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://irl-lab.starvaggi.us",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/notes/"),
    }),
  ],
  output: "static",
});
