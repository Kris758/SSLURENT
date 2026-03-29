import { motion } from "framer-motion";
import { Ship, Award, ArrowDown } from "lucide-react";
import CountryFlag from "./CountryFlag";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
      
      {/* Background image */}
      <img
        src="https://sslurent.com/pictures/wstock/2024%20yaris%20cross%204x4%20sslu/2024%20yaris%20cross.jpg"
        alt="Featured vehicle"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display gold-text mb-4">
            SSLU RENT
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
            Only <span className="text-gold font-semibold">the best</span> vehicle trims — shipped directly from Japan's vehicle auction to the Caribbean.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            <span className="inline-flex items-center gap-2">
              St. Lucia <CountryFlag code="LC" label="St. Lucia flag" className="w-4 h-4 inline-block" />
            </span>{" "}
            &bull;{" "}
            <span className="inline-flex items-center gap-2">
              Jamaica <CountryFlag code="JM" label="Jamaica flag" className="w-4 h-4 inline-block" />
            </span>{" "}
            &bull;{" "}
            <span className="inline-flex items-center gap-2">
              Bahamas <CountryFlag code="BS" label="Bahamas flag" className="w-4 h-4 inline-block" />
            </span>{" "}
            &bull;{" "}
            <span className="inline-flex items-center gap-2">
              Dominica <CountryFlag code="DM" label="Dominica flag" className="w-4 h-4 inline-block" />
            </span>{" "}
            &bull;{" "}
            <span className="inline-flex items-center gap-2">
              Grenada <CountryFlag code="GD" label="Grenada flag" className="w-4 h-4 inline-block" />
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a
            href="#inventory"
            className="gold-gradient text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <Award className="w-5 h-5" />
            Browse Inventory
          </a>
          <a
            href="#shipping"
            className="border border-gold text-gold font-semibold px-8 py-3 rounded-lg hover:bg-gold/10 transition-colors flex items-center gap-2"
          >
            <Ship className="w-5 h-5" />
            Track Shipments
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex justify-center"
        >
          <a href="#inventory" className="text-muted-foreground animate-bounce">
            <ArrowDown className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
