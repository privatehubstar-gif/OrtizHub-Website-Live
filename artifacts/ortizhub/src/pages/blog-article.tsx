import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/share-buttons";
import { blogPosts } from "@/data/blog-posts";
import { trackAnalyticsEvent } from "@/lib/analytics";

function updateMetaContent(selector: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  const created = !tag;

  if (!tag) {
    tag = document.createElement("meta");
    const [, attribute, value] = selector.match(/meta\[(name|property)="([^"]+)"\]/) ?? [];
    if (!attribute || !value) return () => {};
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }

  const previousContent = tag.getAttribute("content");
  tag.setAttribute("content", content);

  return () => {
    if (created) {
      tag?.remove();
    } else if (previousContent !== null) {
      tag?.setAttribute("content", previousContent);
    } else {
      tag?.removeAttribute("content");
    }
  };
}

export default function BlogArticle() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((article) => article.id === id);
  const readNext = blogPosts.filter((article) => article.id !== post?.id).slice(0, 2);

  useEffect(() => {
    const previousTitle = document.title;
    const restoreMeta = post
      ? [
          updateMetaContent('meta[name="description"]', post.excerpt),
          updateMetaContent('meta[property="og:title"]', `${post.title} | OrtizHub`),
          updateMetaContent('meta[property="og:description"]', post.excerpt),
          updateMetaContent('meta[property="og:type"]', "article"),
          updateMetaContent(
            'meta[property="og:image"]',
            new URL(post.shareImage, window.location.origin).href,
          ),
          updateMetaContent('meta[property="og:image:width"]', "1200"),
          updateMetaContent('meta[property="og:image:height"]', "630"),
          updateMetaContent('meta[property="og:url"]', window.location.href),
          updateMetaContent('meta[name="twitter:title"]', `${post.title} | OrtizHub`),
          updateMetaContent('meta[name="twitter:description"]', post.excerpt),
          updateMetaContent(
            'meta[name="twitter:image"]',
            new URL(post.shareImage, window.location.origin).href,
          ),
        ]
      : [];

    if (post) document.title = `${post.title} | OrtizHub`;
    return () => {
      restoreMeta.reverse().forEach((restore) => restore());
      document.title = previousTitle;
    };
  }, [post]);

  if (!post) {
    return (
      <main className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Article not found</h1>
        <p className="mb-8 text-muted-foreground">This article may have moved or is not available yet.</p>
        <Link href="/blog">
          <Button className="rounded-none bg-primary font-bold uppercase tracking-widest text-black hover:bg-primary/90">
            Back to the Journal
          </Button>
        </Link>
      </main>
    );
  }

  const article = post;
  const trackRelatedProductClick = () => {
    trackAnalyticsEvent("article_cta_click", {
      article_id: article.id,
      product_id: article.relatedProductId,
      product_type: article.relatedProductType,
      destination: article.ctaExternal ? "gumroad" : "ortizhub",
    });
  };

  return (
    <article className="min-h-screen">
      <div className="container mx-auto max-w-4xl px-6 pb-24 pt-32 lg:pt-40">
        <Link
          href="/blog"
          className="mb-12 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          All articles
        </Link>

        <header className="border-b border-border pb-10">
          <span className="mb-5 inline-flex border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            {post.category}
          </span>
          <h1 className="mb-7 text-4xl font-bold leading-tight text-white md:text-6xl">
            {post.title}
          </h1>
          <p className="mb-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <div className="mb-8 flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar size={14} aria-hidden="true" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={14} aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
          <ShareButtons
            title={`${post.title} | OrtizHub`}
            contentType="article"
            contentId={post.id}
          />
        </header>

        <div className="mx-auto max-w-3xl py-12">
          {post.content.map((paragraph, index) => (
            <p
              key={index}
              className="mb-7 text-lg leading-[1.9] text-white/85 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <section className="py-10" aria-labelledby="read-next-heading">
          <h2 id="read-next-heading" className="mb-5 text-xl font-bold text-white">
            Read next
          </h2>
          {readNext.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {readNext.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className="group flex min-h-24 items-center justify-between gap-4 border border-border bg-secondary/20 p-5 transition-colors hover:border-primary/50"
                >
                  <span>
                    <span className="mb-1 block text-xs uppercase tracking-widest text-primary">
                      {article.category}
                    </span>
                    <span className="font-semibold text-white transition-colors group-hover:text-primary">
                      {article.title}
                    </span>
                  </span>
                  <ArrowRight size={18} className="shrink-0 text-primary" aria-hidden="true" />
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">More articles are coming soon.</p>
          )}
        </section>

        <section className="mt-4 flex flex-col items-start justify-between gap-6 border border-primary/30 bg-primary/5 p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
              Related product
            </p>
            <h2 className="text-2xl font-bold text-white">{post.relatedProductTitle}</h2>
          </div>
          {post.ctaExternal ? (
            <a
              href={post.relatedProductHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackRelatedProductClick}
            >
              <Button className="min-h-12 rounded-none bg-primary px-7 font-bold uppercase tracking-widest text-black hover:bg-primary/90">
                {post.ctaLabel}
              </Button>
            </a>
          ) : (
            <Link href={post.relatedProductHref}>
              <Button
                onClick={trackRelatedProductClick}
                className="min-h-12 rounded-none bg-primary px-7 font-bold uppercase tracking-widest text-black hover:bg-primary/90"
              >
                {post.ctaLabel}
              </Button>
            </Link>
          )}
        </section>
      </div>
    </article>
  );
}
