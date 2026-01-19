import { HeroSection } from "@/components/sections/HeroSection";
import { ProductShowcase } from "@/components/sections/ProductShowcase";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <ProductShowcase />
    </div>
  );
}
