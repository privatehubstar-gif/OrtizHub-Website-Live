import { useState } from "react";
import { Check, Copy, Link2 } from "lucide-react";
import { trackAnalyticsEvent } from "@/lib/analytics";

type ShareButtonsProps = {
  title: string;
  contentType: "article" | "book" | "page";
  contentId: string;
};

export function ShareButtons({ title, contentType, contentId }: ShareButtonsProps) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const pageUrl = typeof window === "undefined" ? "" : window.location.href;
  const shareText = `${title} ${pageUrl}`;
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(shareText);

  async function copyLink() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(pageUrl);
      } else {
        const field = document.createElement("textarea");
        field.value = pageUrl;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        const copied = document.execCommand("copy");
        field.remove();
        if (!copied) throw new Error("Clipboard copy was not available");
      }
      setCopyState("copied");
      trackAnalyticsEvent("copy_link", {
        content_type: contentType,
        item_id: contentId,
      });
    } catch {
      setCopyState("error");
    }
    window.setTimeout(() => setCopyState("idle"), 2500);
  }

  const shareLinks = [
    {
      label: "X",
      method: "x",
      href: `https://twitter.com/intent/tweet?text=${encodedText}`,
    },
    {
      label: "WhatsApp",
      method: "whatsapp",
      href: `https://wa.me/?text=${encodedText}`,
    },
    {
      label: "Facebook",
      method: "facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
    },
    {
      label: "LinkedIn",
      method: "linkedin",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}`,
    },
  ];

  return (
    <div className="flex flex-col gap-3" aria-label={`Share ${title}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        Share this page
      </span>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={copyLink}
          className="inline-flex min-h-10 items-center gap-2 border border-primary/50 px-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Copy this page link"
        >
          {copyState === "copied" ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
          {copyState === "copied" ? "Link copied" : "Copy link"}
        </button>
        {shareLinks.map((share) => (
          <a
            key={share.label}
            href={share.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackAnalyticsEvent("share", {
                method: share.method,
                content_type: contentType,
                item_id: contentId,
              });
            }}
            className="inline-flex min-h-10 items-center gap-2 border border-border px-3 text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Share on ${share.label}`}
          >
            <Link2 size={14} aria-hidden="true" />
            {share.label}
          </a>
        ))}
      </div>
      {copyState !== "idle" && (
        <span
          className={`text-xs ${copyState === "copied" ? "text-primary" : "text-red-400"}`}
          role="status"
          aria-live="polite"
        >
          {copyState === "copied"
            ? "Page link copied to clipboard."
            : "Could not copy the link. You can copy it from your browser address bar."}
        </span>
      )}
    </div>
  );
}
