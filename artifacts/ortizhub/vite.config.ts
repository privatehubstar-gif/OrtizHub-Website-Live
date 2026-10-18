import { defineConfig } from "vite";
import type { Plugin, PreviewServer, ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { blogPosts, type BlogPost } from "./src/data/blog-posts";

const appRoot = path.resolve(import.meta.dirname);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceMeta(html: string, attribute: "name" | "property", key: string, value: string) {
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`;
  const pattern = new RegExp(`<meta\\s+${attribute}="${key}"\\s+content="[^"]*"\\s*\\/?>`, "i");
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `    ${tag}\n  </head>`);
}

function articleHtml(html: string, post: BlogPost, siteUrl?: string) {
  const title = `${post.title} | OrtizHub`;
  const imageUrl = siteUrl ? new URL(post.shareImage, siteUrl).href : post.shareImage;
  let result = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

  result = replaceMeta(result, "name", "description", post.excerpt);
  result = replaceMeta(result, "property", "og:title", title);
  result = replaceMeta(result, "property", "og:description", post.excerpt);
  result = replaceMeta(result, "property", "og:type", "article");
  result = replaceMeta(result, "property", "og:image", imageUrl);
  result = replaceMeta(result, "property", "og:image:width", "1200");
  result = replaceMeta(result, "property", "og:image:height", "630");
  result = replaceMeta(result, "name", "twitter:title", title);
  result = replaceMeta(result, "name", "twitter:description", post.excerpt);
  result = replaceMeta(result, "name", "twitter:image", imageUrl);

  if (siteUrl) {
    const articleUrl = new URL(`/blog/${post.id}`, siteUrl).href;
    result = replaceMeta(result, "property", "og:url", articleUrl);
    const canonicalTag = `<link rel="canonical" href="${escapeHtml(articleUrl)}" />`;
    result = /<link\s+rel="canonical"[^>]*>/i.test(result)
      ? result.replace(/<link\s+rel="canonical"[^>]*>/i, canonicalTag)
      : result.replace("</head>", `    ${canonicalTag}\n  </head>`);
  }

  return result;
}

function articleFromUrl(url: string | undefined) {
  const pathname = url?.split("?")[0];
  const match = pathname?.match(/^\/blog\/([^/]+)\/?$/);
  if (!match) return undefined;

  try {
    const id = decodeURIComponent(match[1]);
    return blogPosts.find((post) => post.id === id);
  } catch {
    return undefined;
  }
}

function getSiteUrl() {
  const configuredUrl = process.env.ORTIZHUB_SITE_URL?.trim();
  if (!configuredUrl) return undefined;

  const parsedUrl = new URL(configuredUrl);
  if (!["http:", "https:"].includes(parsedUrl.protocol) || parsedUrl.pathname !== "/" || parsedUrl.search || parsedUrl.hash) {
    throw new Error("ORTIZHUB_SITE_URL must be an http(s) origin without a path, query, or hash.");
  }
  return parsedUrl.origin;
}

function articleMetadataPlugin(): Plugin {
  const siteUrl = getSiteUrl();

  return {
    name: "ortizhub-article-metadata",

    configureServer(server: ViteDevServer) {
      server.middlewares.use((request, response, next) => {
        const post = articleFromUrl(request.url);
        if (!post) return next();

        void (async () => {
          const template = await readFile(path.join(appRoot, "index.html"), "utf8");
          const html = await server.transformIndexHtml(request.url ?? "/", template);
          const requestOrigin = siteUrl
            ?? `${request.headers["x-forwarded-proto"] ?? "http"}://${request.headers.host ?? "localhost"}`;
          response.statusCode = 200;
          response.setHeader("Content-Type", "text/html; charset=utf-8");
          response.end(articleHtml(html, post, requestOrigin));
        })().catch(next);
      });
    },

    configurePreviewServer(server: PreviewServer) {
      server.middlewares.use((request, response, next) => {
        const post = articleFromUrl(request.url);
        if (!post) return next();

        void (async () => {
          const staticPage = path.join(appRoot, "dist/public/blog", post.id, "index.html");
          const html = await readFile(staticPage, "utf8");
          response.statusCode = 200;
          response.setHeader("Content-Type", "text/html; charset=utf-8");
          response.end(html);
        })().catch(next);
      });
    },

    async closeBundle() {
      const outputDir = path.join(appRoot, "dist/public");
      const shell = await readFile(path.join(outputDir, "index.html"), "utf8");

      await Promise.all(
        blogPosts.map(async (post) => {
          const articleDir = path.join(outputDir, "blog", post.id);
          await mkdir(articleDir, { recursive: true });
          await writeFile(
            path.join(articleDir, "index.html"),
            articleHtml(shell, post, siteUrl),
          );
        }),
      );
    },
  };
}

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH;

if (!basePath) {
  throw new Error(
    "BASE_PATH environment variable is required but was not provided.",
  );
}

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    articleMetadataPlugin(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
