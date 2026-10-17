import { motion } from "framer-motion";
import { Link } from "wouter";
import { AUTHOR_BIO } from "@/data/site";
import ortizPhoto from "@assets/DE2B6B70-8672-486C-9E66-E59B7F031EFD_1783385337182.png";

export default function About() {
  const logoImg = "/images/logo.png";

  return (
    <div>
      {/* Hero — photo + logo */}
      <div className="relative w-full h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={ortizPhoto}
          alt="Ortiz Imana Jnr — CEO, OrtizHub International"
          className="w-full h-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16 flex flex-col lg:flex-row items-end lg:items-center justify-between gap-6">
          <div>
            <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-2">Founder & CEO</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">Ortiz Imana Jnr</h1>
          </div>
          <Link href="/" aria-label="OrtizHub International home" className="inline-flex">
            <img src={logoImg} alt="OrtizHub International logo" className="h-12 w-auto object-contain opacity-95 md:h-16" />
          </Link>
        </div>
      </div>

    <div className="container mx-auto px-6 py-20 lg:py-32 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary tracking-widest text-sm uppercase font-semibold mb-4 block">
          The Origin
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight">
          Built from the <span className="text-primary">Ground Up.</span>
        </h2>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {AUTHOR_BIO}
          </p>

          <div className="my-16 h-px w-full bg-border" />

          <h2 className="text-3xl font-bold text-white mb-6">The Mission</h2>
          <p className="text-muted-foreground mb-8">
            To equip builders with the tools, frameworks, and mindset they need to break generational cycles and build legacies that outlast them.
          </p>
          <p className="text-muted-foreground mb-8">
            There are no shortcuts. There is no pretending. True wealth is built on a foundation of physical vitality and mental fortitude. We provide the digital products, literature, and insights required to build an undeniable life.
          </p>

          <blockquote className="border-l-2 border-primary pl-6 my-12 py-2">
            <p className="text-2xl font-semibold text-white italic m-0">
              "You cannot build a lasting legacy on a weak foundation. Your health is your first business. Your discipline is your greatest asset."
            </p>
          </blockquote>

          <h2 className="text-3xl font-bold text-white mb-6">Why We Build</h2>
          <p className="text-muted-foreground mb-8">
            We build to prove what's possible. To show the next generation that where you start does not dictate where you finish. Through our books and courses, we are transferring the wisdom of wealth creation and spiritual grounding to those hungry enough to execute.
          </p>
          <p className="text-muted-foreground mb-8">
            OrtizHub exists for the person who was never handed a roadmap — the first in their family to build a business, the believer trying to steward their gifts with integrity, the young creator tired of chasing trends with nothing to show for it. If that's you, you're already home.
          </p>
        </div>
      </motion.div>
    </div>
    </div>
  );
}
