import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Youtube, Twitter, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/80C3D8EF-992D-45BC-A5D9-F9E0860C73B5_1783385337180.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/books", label: "Books" },
  { href: "/digital-products", label: "Digital Products" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/books", label: "Books" },
  { href: "/digital-products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = {
  youtube: "https://youtube.com/@ortizimanajnr",
  linkedin: "https://www.linkedin.com/in/ortiz-imana-jnr",
  x: "https://twitter.com/ImanaJunior1",
};

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      {/* Navbar */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <img src={logoImg} alt="OrtizHub International" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide uppercase transition-colors hover:text-primary ${
                  location === link.href ? "text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20"
          >
            <nav className="flex flex-col items-center gap-8 w-full px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-2xl font-serif transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative pt-[80px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex-1 flex flex-col"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border py-16 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <img src={logoImg} alt="OrtizHub International" className="h-14 w-auto" />
              </Link>
              <p className="text-muted-foreground max-w-sm mt-4 leading-relaxed">
                Helping builders break generational cycles through wisdom and wealth.
                Health. Discipline. Legacy. No shortcuts. No pretending.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-6 text-white">Navigate</h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6 text-white">Connect</h4>
              <div className="flex gap-4">
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                  <Youtube size={18} />
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                  <Linkedin size={18} />
                </a>
                <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                  <Twitter size={18} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                contact@ortizhub.com
              </p>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              &copy; {new Date().getFullYear()} OrtizHub. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Create. Grow. Rise.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
