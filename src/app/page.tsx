import { HeroBanner } from "@/components/home/HeroBanner";
import { BrandStatement } from "@/components/home/BrandStatement";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { LookbookBanner } from "@/components/home/LookbookBanner";
import { BrandPhilosophy } from "@/components/home/BrandPhilosophy";
import { PressSection } from "@/components/home/PressSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <BrandStatement />
      <FeaturedCollection />
      <LookbookBanner />
      <BrandPhilosophy />
      <PressSection />
    </>
  );
}

