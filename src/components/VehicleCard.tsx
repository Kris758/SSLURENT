import { motion } from "framer-motion";
import { MapPin, Clock, ExternalLink } from "lucide-react";

export interface Vehicle {
  name: string;
  price: string;
  image: string;
  eta: string;
  destination: string;
  deposit?: string;
  link: string;
  status: "available" | "reserved" | "sold";
}

const statusStyles = {
  available: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  reserved: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  sold: "bg-red-500/20 text-red-400 border-red-500/30",
};

const statusLabels = {
  available: "Available",
  reserved: "Reserved",
  sold: "Sold",
};

const VehicleCard = ({ vehicle, index }: { vehicle: Vehicle; index: number }) => {
  return (
    <motion.a
      href={vehicle.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card rounded-xl overflow-hidden hover:border-gold/40 transition-all duration-300 block"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${statusStyles[vehicle.status]}`}>
            {statusLabels[vehicle.status]}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-xl text-foreground group-hover:text-gold transition-colors">
            {vehicle.name}
          </h3>
          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
        </div>

        <p className="text-2xl font-bold gold-text">{vehicle.price}</p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {vehicle.destination}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {vehicle.eta}
          </span>
        </div>

        {vehicle.deposit && (
          <p className="text-xs text-gold/80">
            Deposit: {vehicle.deposit}
          </p>
        )}
      </div>
    </motion.a>
  );
};

export default VehicleCard;
