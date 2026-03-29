import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InventorySection from "@/components/InventorySection";
import Footer from "@/components/Footer";
import {
  onIslandVehicles,
  shippingVehicles,
  japanStockVehicles,
  deliveredVehicles,
} from "@/data/vehicles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <InventorySection
        id="inventory"
        icon="🏝️"
        title="On Island — Ready to Own"
        subtitle="These vehicles are already in St. Lucia. Ask for documents to begin the ownership process."
        vehicles={onIslandVehicles}
      />

      <InventorySection
        id="shipping"
        icon="🚢"
        title="Currently Shipping"
        subtitle="Vehicles in transit from Japan. Secure yours with a deposit — landing March through July 2026."
        vehicles={shippingVehicles}
      />

      <InventorySection
        id="japan"
        icon="🇯🇵"
        title="Stock in Japan"
        subtitle="Won from auction and ready for shipping regionally. Ships to Bahamas, Jamaica, Dominica, St. Lucia, and Grenada."
        vehicles={japanStockVehicles}
      />

      <InventorySection
        id="delivered"
        icon="✅"
        title="Successfully Delivered"
        subtitle="Delivered to their respectful owners — proof of our track record."
        vehicles={deliveredVehicles}
      />

      <Footer />
    </div>
  );
};

export default Index;
