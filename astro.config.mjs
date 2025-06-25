// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import preact from "@astrojs/preact";
import remarkToc from "remark-toc";
import remarkGfm from "remark-gfm";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],

    },

    site: "https://desonglll.netlify.app",
    integrations: [preact()],
    markdown: {
        shikiConfig: {theme: "catppuccin-frappe"},
        remarkPlugins: [
            [
                remarkToc, {
                heading: "table of contents",
            }
            ], remarkGfm]
    }
});