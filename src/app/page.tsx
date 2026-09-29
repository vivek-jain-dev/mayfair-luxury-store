import { HeroBanner } from "@/components/home/HeroBanner";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { BrandPhilosophy } from "@/components/home/BrandPhilosophy";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturedCollection />
      <BrandPhilosophy />
    </>
  );
}
