// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import remarkBreaks from "remark-breaks";
import remarkCallout from "@r4ai/remark-callout";
import remarkLinkCard from "remark-link-card-plus";
import expressiveCode from "astro-expressive-code";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [icon(), expressiveCode(), react(), ...(import.meta.env.PROD ? [] : [keystatic()])],
    markdown: {
        remarkPlugins: [
            remarkBreaks,
            remarkCallout,
            [remarkLinkCard, { cache: true }],
        ],
    },
    site: "https://blog.minittu.net"
});