import { Phone, Facebook, Globe } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 mt-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display text-2xl gold-text">SSLU</span>
          <span className="font-display text-2xl text-foreground">rent.com</span>
          <p className="text-xs text-muted-foreground mt-1">
            We Bid &amp; Buy — Direct from Japan's auction to you.
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="tel:5182378" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Phone className="w-4 h-4" /> 518-2378
          </a>
          <a href="tel:2851135" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Phone className="w-4 h-4" /> 285-1135
          </a>
          <a
            href="https://www.facebook.com/sslucarImportsRentals"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <Facebook className="w-4 h-4" /> Facebook
          </a>
          <a
            href="https://sslurent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <Globe className="w-4 h-4" /> Website
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-8">
        © {new Date().getFullYear()} SSLUrent.com — St. Lucia. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
