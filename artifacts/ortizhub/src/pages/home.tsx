import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";
import { ShareButtons } from "@/components/share-buttons";
import { SystemsSection } from "@/components/systems-section";
import { AUTHOR_BIO } from "@/data/site";
import { GUMROAD_LINKS } from "@/data/gumroad-links";
import ortizPhoto from "@assets/DE2B6B70-8672-486C-9E66-E59B7F031EFD_1783385337182.png";
import eatToHealCover from "@assets/Untitled_design_1783383336903.jpeg";
import disciplineWithinCover from "@assets/Untitled_design_1783383833804.jpeg";
import bornToBuildCover from "@assets/85A4B0E9-4B52-4BD9-BEF2-9B524D235864_1783382977469.png";
import blessedBoyCover from "@assets/1ED08B71-FE14-4EEC-A05D-7480AB1BCEDD_1783382977469.png";
import clarityResetCover from "@assets/44160B54-A9BC-4F14-A2D1-A4940B5D7DD7_1783382977469.png";
const bundleImage = "/images/bundle-promo-clean.png";

const FREE_GUIDE_LINK = GUMROAD_LINKS.clarityReset;
const BUNDLE_LINK = GUMROAD_LINKS.bundle;

const featuredBooks = [
  { id: "eat-to-heal", title: "Eat to Heal", image: eatToHealCover },
  { id: "the-discipline-within", title: "The Discipline Within", image: disciplineWithinCover },
  { id: "born-to-build", title: "Born to Build", image: bornToBuildCover },
];

const bundleBooks = [
  { title: "Eat to Heal", image: eatToHealCover },
  { title: "Blessed Boy", image: blessedBoyCover },
  { title: "The Discipline Within", image: disciplineWithinCover },
  { title: "Born to Build", image: bornToBuildCover },
  { title: "The 7-Day Clarity Reset", image: clarityResetCover },
];

function TestimonialsSection() {
  const reviews = [
    {
      quote: "Ortiz's books have completely changed how I think about discipline.",
      name: "Sarah J.",
      book: "The Discipline Within",
    },
    {
      quote: "I couldn't put Born to Build down. A must-read for any first-gen entrepreneur.",
      name: "Mark T.",
      book: "Born to Build",
    },
    {
      quote: "Eat to Heal gave me practical tools I use every day.",
      name: "Rachel K.",
      book: "Eat to Heal",
    },
  ];

  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            Reader Love
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            What Readers Are <span className="text-primary">Saying</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real moments from real people who took the step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex min-h-64 flex-col justify-between border border-border bg-secondary/30 p-7 transition-colors hover:border-primary/40"
            >
              <div>
                <div className="mb-5 flex gap-1 text-primary" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} aria-hidden="true">★</span>
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed text-white">
                  “{review.quote}”
                </blockquote>
              </div>
              <div className="mt-8 border-t border-border pt-4">
                <p className="font-bold uppercase tracking-widest text-white">{review.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  {review.book}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CredibilityBar() {
  const items = [
    "Available exclusively on Gumroad",
    "Free 7-Day Clarity Reset",
    "Faith · Discipline · Healing · Legacy",
  ];

  return (
    <section aria-label="OrtizHub at a glance" className="border-y border-border bg-secondary/20">
      <div className="container mx-auto flex flex-col items-center justify-center gap-3 px-6 py-5 text-center sm:flex-row sm:gap-0">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-5 sm:px-6">
            {index > 0 && <span className="hidden h-1 w-1 rounded-full bg-primary sm:block" aria-hidden="true" />}
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80 md:text-sm">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("https://formsubmit.co/ajax/Imana.junior9@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          _subject: "New Newsletter Subscriber — OrtizHub",
          message: `New subscriber: ${email}`,
          _template: "table",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">
            Join the Community
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Get Wisdom Delivered <span className="text-primary">Weekly</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Insights on faith, discipline, and building a life of purpose — straight to your inbox. No spam. Just value.
          </p>

          {status === "success" ? (
            <div className="border border-primary/40 bg-primary/10 rounded-none p-6">
              <p className="text-primary font-bold text-lg uppercase tracking-widest mb-1">You're in!</p>
              <p className="text-muted-foreground text-sm">Welcome to the OrtizHub community. Watch your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={status === "loading"}
                className="flex-1 h-14 px-5 bg-secondary border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary text-sm disabled:opacity-60"
              />
              <Button
                type="submit"
                disabled={status === "loading"}
                className="h-14 px-8 bg-primary text-black hover:bg-primary/90 text-sm font-bold uppercase tracking-widest rounded-none border-0 disabled:opacity-60"
              >
                {status === "loading" ? "Subscribing…" : "Subscribe"}
              </Button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-4 text-sm text-red-400">Something went wrong. Please try again.</p>
          )}

          <p className="mt-6 text-xs text-muted-foreground uppercase tracking-widest">
            No spam · Unsubscribe anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ortizPhoto}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-top opacity-40"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/80 to-transparent" />

        <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-primary tracking-[0.3em] text-sm md:text-base font-semibold uppercase mb-6 block">
              Ortiz Imana Jnr
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-8 tracking-tight">
              Create. <br className="md:hidden" />
              Grow. <br className="md:hidden" />
              <span className="text-primary">Rise.</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {AUTHOR_BIO}
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-12">
              {["Health", "Discipline", "Legacy"].map((value, i) => (
                <span key={value} className="flex items-center gap-4 sm:gap-8">
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                    {value}
                  </span>
                  {i < 2 && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-12">
              No shortcuts. No pretending.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/books">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base tracking-wider uppercase font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-none">
                  Explore My Books
                </Button>
              </Link>
              <a href={FREE_GUIDE_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base tracking-wider uppercase font-semibold border-border hover:bg-white/5 hover:text-white rounded-none">
                  Get Free Resources
                </Button>
              </a>
            </div>
            <div className="mt-10 flex justify-center">
              <ShareButtons
                title="OrtizHub — Ortiz Imana Jnr"
                contentType="page"
                contentId="home"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <CredibilityBar />

      {/* Featured Books Section */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-primary">Books</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Wisdom for the builder who refuses to stay stuck.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {featuredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-full aspect-[3/4] bg-secondary rounded-lg overflow-hidden border border-border shadow-2xl mb-4 transition-transform duration-500 group-hover:scale-[1.03]">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">{book.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/books">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base tracking-wider uppercase font-semibold border-border hover:bg-white/5 hover:text-white rounded-none">
                View All Books
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Bundle Section */}
      <section className="py-24 lg:py-32 border-t border-border bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden border border-primary/40"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black/60 to-primary/5 pointer-events-none z-10" />

            {/* Bundle promo image as background */}
            <div className="absolute inset-0">
              <img
                src={bundleImage}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover opacity-20"
              />
            </div>

            <div className="relative z-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 p-10 lg:p-0">
              {/* Left — book stack preview */}
              <div className="w-full lg:w-1/2 lg:p-14">
                <div className="flex items-end justify-center gap-3">
                  {bundleBooks.map((book, i) => (
                    <motion.div
                      key={book.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="flex-1 max-w-[100px]"
                      style={{ marginBottom: i === 2 ? "24px" : "0px" }}
                    >
                      <div className="aspect-[3/4] rounded-md overflow-hidden border border-primary/30 shadow-xl">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right — copy + CTA */}
              <div className="w-full lg:w-1/2 lg:p-14 space-y-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="text-xs bg-primary text-black font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Special Offer
                  </span>
                  <span className="text-xs text-primary font-semibold uppercase tracking-widest">
                    Gumroad Exclusive
                  </span>
                </div>

                <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                  The Ultimate<br />
                  <span className="text-primary">Faith & Mindset</span><br />
                  Bundle
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  Every core book bundled together at the best possible value. Everything you need to build faith, discipline, health, clarity, and legacy.
                </p>

                <ul className="space-y-2">
                  {bundleBooks.map((book) => (
                    <li key={book.title} className="flex items-center justify-center lg:justify-start gap-3 text-sm text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {book.title}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
                  <span className="text-4xl font-bold text-white">$34.99</span>
                  <a href={BUNDLE_LINK} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="h-14 px-10 bg-primary text-black hover:bg-primary/90 text-base font-bold uppercase tracking-widest rounded-none"
                    >
                      Get the Bundle
                    </Button>
                  </a>
                </div>

                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  Bundled for max value · Available on Gumroad
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SystemsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Free Lead Magnet Section */}
      <section className="py-24 lg:py-32 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">
              Free Guide
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Start Your 7-Day Clarity Reset Today
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              A free framework to help you cut through the noise and build clarity.
            </p>
            <a href={FREE_GUIDE_LINK} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button size="lg" className="h-14 px-10 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-bold uppercase tracking-widest rounded-none">
                Download Free Guide
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
