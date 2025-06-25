// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import preact from "@astrojs/preact";
import remarkToc from "remark-toc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from 'rehype-pretty-code';
import {transformerCopyButton} from "@rehype-pretty/transformers";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],

    },
    server: {
        host: "0.0.0.0",
    },

    site: "https://desonglll.netlify.app",
    integrations: [preact()],
    markdown: {
        // shikiConfig: {theme: "catppuccin-frappe"},
        syntaxHighlight: false,
        remarkPlugins: [[remarkToc, {
            heading: "table of contents",
        }], remarkGfm],
        rehypePlugins: [
            [
                rehypePrettyCode,
                {
                    theme: "one-dark-pro",
                    transformers: [
                        transformerCopyButton({
                            visibility: 'always',
                            feedbackDuration: 3_000,
                        }),
                    ],
                    keepBackground: false,
                }
            ]
        ]
    }
});