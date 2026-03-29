import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inventory", href: "#inventory" },
  { label: "Shipping", href: "#shipping" },
  { label: "In Japan", href: "#japan" },
  { label: "Track Cargo", href: "https://sslurent.com/Track%20Cargo.html", external: true },
  { label: "About Us", href: "https://sslurent.com/about%20us.html", external: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="font-display text-3xl tracking-wider gold-text">
          SSLU<span className="text-foreground">rent</span>.com
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.facebook.com/sslucarImportsRentals"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
          >
            Facebook
          </a>
        </div>

        <div className="hidden md:flex items-center gap-2 text-gold">
          <Phone className="w-4 h-4" />
          <span className="text-sm font-semibold">518-2378 / 285-1135</span>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass-card border-t border-border"
          >
            <div className="flex flex-col gap-3 px-4 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-2 text-gold pt-2 border-t border-border">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-semibold">518-2378 / 285-1135</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
