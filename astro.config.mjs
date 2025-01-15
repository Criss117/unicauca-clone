// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  env: {
    schema: {
      UNICAUCA_BASE_URL: envField.string({
        context: "server",
        access: "public",
        url: true,
      }),
      BASE_URL: envField.string({
        context: "server",
        access: "public",
        url: true,
      }),
      PUBLIC_UNICAUCA_BASE_URL: envField.string({
        context: "client",
        access: "public",
        url: true,
      }),
    },
  },
  experimental: {
    svg: true,
  },
});
