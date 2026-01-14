import BrandsSection from "@/components/sections/BrandsSection";
import CareersSection from "@/components/sections/CareersSection ";
import Footer from "@/components/sections/Footer";
import GiveBackSection from "@/components/sections/GiveBackSection";
import HeroSection from "@/components/sections/HeroSection";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <BrandsSection />
      <GiveBackSection />
      <CareersSection />
      <Footer />
    </main>
  );
}
