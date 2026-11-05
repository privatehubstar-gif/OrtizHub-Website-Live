import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { blogPosts } from "../src/data/blog-posts";

const appRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const publicDir = path.join(appRoot, "dist/public");
const failures: string[] = [];

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function readMetaContent(
  html: string,
  attribute: "name" | "property",
  key: string,
  articleId: string,
) {
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${escapeRegExp(key)}"\\s+content="([^"]*)"\\s*\\/?>`,
    "gi",
  );
  const matches = [...html.matchAll(pattern)];
  if (matches.length !== 1) {
    failures.push(
      `${articleId}: expected one ${attribute}="${key}" meta tag, found ${matches.length}.`,
    );
    return undefined;
  }
  return matches[0][1];
}

function expectValue(
  articleId: string,
  label: string,
  actual: string | undefined,
  expected: string,
) {
  if (actual !== expected) {
    failures.push(`${articleId}: ${label} does not match article data.`);
  }
}

function readArticleRewrites(artifactToml: string) {
  const rewrites: Array<{ from: string; to: string }> = [];
  let current: { from?: string; to?: string } | undefined;

  const finishRewrite = () => {
    if (!current) return;
    if (!current.from || !current.to) {
      failures.push("artifact.toml: found an incomplete production rewrite.");
    } else {
      rewrites.push({ from: current.from, to: current.to });
    }
    current = undefined;
  };

  for (const line of artifactToml.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed === "[[services.production.rewrites]]") {
      finishRewrite();
      current = {};
      continue;
    }
    if (trimmed.startsWith("[")) {
      finishRewrite();
      continue;
    }
    if (!current) continue;

    const assignment = trimmed.match(/^(from|to)\s*=\s*"([^"]*)"\s*$/);
    if (assignment) {
      current[assignment[1] as "from" | "to"] = assignment[2];
    }
  }
  finishRewrite();

  return rewrites;
}

async function verifyArticlePreviews() {
  if (blogPosts.length !== 6) {
    failures.push(`Expected six article records, found ${blogPosts.length}.`);
  }

  const configuredSiteUrl = process.env.ORTIZHUB_SITE_URL?.trim();
  let siteOrigin: string | undefined;
  if (configuredSiteUrl) {
    const parsedUrl = new URL(configuredSiteUrl);
    if (
      !["http:", "https:"].includes(parsedUrl.protocol) ||
      parsedUrl.pathname !== "/" ||
      parsedUrl.search ||
      parsedUrl.hash
    ) {
      throw new Error(
        "ORTIZHUB_SITE_URL must be an http(s) origin without a path, query, or hash.",
      );
    }
    siteOrigin = parsedUrl.origin;
  }

  const artifactToml = await readFile(
    path.join(appRoot, ".replit-artifact/artifact.toml"),
    "utf8",
  );
  const articleRewrites = readArticleRewrites(artifactToml).filter((rewrite) =>
    rewrite.from.startsWith("/blog/"),
  );

  if (articleRewrites.length !== blogPosts.length) {
    failures.push(
      `artifact.toml: expected ${blogPosts.length} article rewrites, found ${articleRewrites.length}.`,
    );
  }

  for (const post of blogPosts) {
    const route = `/blog/${post.id}`;
    const matchingRewrites = articleRewrites.filter(
      (rewrite) => rewrite.from === route,
    );
    if (
      matchingRewrites.length !== 1 ||
      matchingRewrites[0]?.to !== `${route}/index.html`
    ) {
      failures.push(
        `${post.id}: expected exactly one rewrite from ${route} to ${route}/index.html.`,
      );
    }

    const previewPath = path.join(publicDir, "blog", post.id, "index.html");
    let html: string;
    try {
      html = await readFile(previewPath, "utf8");
    } catch {
      failures.push(
        `${post.id}: generated preview is missing at ${previewPath}.`,
      );
      continue;
    }

    const title = `${post.title} | OrtizHub`;
    const imageUrl = siteOrigin
      ? new URL(post.shareImage, siteOrigin).href
      : post.shareImage;

    const pageTitle = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1];
    expectValue(post.id, "page title", pageTitle, escapeHtml(title));
    expectValue(
      post.id,
      "description",
      readMetaContent(html, "name", "description", post.id),
      escapeHtml(post.excerpt),
    );
    expectValue(
      post.id,
      "Open Graph title",
      readMetaContent(html, "property", "og:title", post.id),
      escapeHtml(title),
    );
    expectValue(
      post.id,
      "Open Graph description",
      readMetaContent(html, "property", "og:description", post.id),
      escapeHtml(post.excerpt),
    );
    expectValue(
      post.id,
      "Open Graph image",
      readMetaContent(html, "property", "og:image", post.id),
      escapeHtml(imageUrl),
    );
    expectValue(
      post.id,
      "Twitter title",
      readMetaContent(html, "name", "twitter:title", post.id),
      escapeHtml(title),
    );
    expectValue(
      post.id,
      "Twitter description",
      readMetaContent(html, "name", "twitter:description", post.id),
      escapeHtml(post.excerpt),
    );
    expectValue(
      post.id,
      "Twitter image",
      readMetaContent(html, "name", "twitter:image", post.id),
      escapeHtml(imageUrl),
    );

    const imagePath = post.shareImage.split(/[?#]/, 1)[0];
    if (!imagePath.startsWith("/")) {
      failures.push(`${post.id}: share image must use a local public path.`);
    } else {
      try {
        await access(path.join(publicDir, imagePath.slice(1)));
      } catch {
        failures.push(`${post.id}: generated share image asset is missing.`);
      }
    }
  }

  if (failures.length > 0) {
    console.error(
      `Article preview verification failed:\n- ${failures.join("\n- ")}`,
    );
    process.exitCode = 1;
    return;
  }

  console.log(
    `Verified all ${blogPosts.length} generated article previews and rewrites.`,
  );
}

await verifyArticlePreviews();
