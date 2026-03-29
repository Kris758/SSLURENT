import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import VehicleCard, { type Vehicle } from "./VehicleCard";

interface InventorySectionProps {
  id: string;
  title: string;
  subtitle: string;
  vehicles: Vehicle[];
  icon?: ReactNode;
}

const InventorySection = ({ id, title, subtitle, vehicles, icon }: InventorySectionProps) => {
  const isMobile = useIsMobile();

  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={isMobile ? undefined : { once: true, amount: 0.2 }}
          transition={isMobile ? { duration: 0 } : { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-display gold-text mb-2">
            {icon} {title}
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl">{subtitle}</p>
          <div className="h-px bg-gradient-to-r from-gold/50 to-transparent mt-4 max-w-xs" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {vehicles.map((v, i) => (
            <VehicleCard key={v.name + v.price} vehicle={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InventorySection;
