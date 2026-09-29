import { Product } from '../types/product';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "the-no-1-blazer",
    name: "The No. 1 Blazer",
    tagline: "Navy Italian Wool Tailored Jacket",
    description: "The cornerstone of Mayfair tailoring. Hand-crafted from 100% fine Italian virgin wool with structured shoulders and horn brass buttons.",
    price: 1250,
    category: "blazers",
    isMadeToOrder: true,
    leadTimeWeeks: 3,
    isBestSeller: true,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop"
    ],
    variants: [
      { id: "v1-48", name: "EU 48 (US 38)", size: "48", color: "Navy", price: 1250, inStock: true },
      { id: "v1-50", name: "EU 50 (US 40)", size: "50", color: "Navy", price: 1250, inStock: true },
      { id: "v1-52", name: "EU 52 (US 42)", size: "52", color: "Navy", price: 1250, inStock: true }
    ],
    fabricInfo: "100% Loro Piana Italian Super 130s Wool",
    careInstructions: "Dry clean only by specialist."
  },
  {
    id: "p2",
    slug: "signature-johnny-collar",
    name: "The Signature Johnny Collar",
    tagline: "Silk-Cashmere Fluid Knit Polo",
    description: "Ultra-soft, lightweight fine gauge knit featuring a soft polo collar without buttons. Designed for fluid drape and understated elegance.",
    price: 580,
    category: "knits",
    isMadeToOrder: false,
    isBestSeller: true,
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop"
    ],
    variants: [
      { id: "v2-s", name: "Small", size: "S", color: "Ivory", price: 580, inStock: true },
      { id: "v2-m", name: "Medium", size: "M", color: "Ivory", price: 580, inStock: true },
      { id: "v2-l", name: "Large", size: "L", color: "Ivory", price: 580, inStock: true }
    ],
    fabricInfo: "70% Silk, 30% Mongolian Cashmere",
    careInstructions: "Hand wash cold or gentle dry clean."
  },
  {
    id: "p3",
    slug: "mayfair-safari-jacket",
    name: "The Mayfair Safari Jacket",
    tagline: "Tailored Forest Green Safari Coat",
    description: "An iconic European jacket modified for modern bespoke wear. Features four patch bellows pockets and an adjustable internal waist drawstring.",
    price: 980,
    category: "blazers",
    isMadeToOrder: true,
    leadTimeWeeks: 2,
    images: [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1000&auto=format&fit=crop"
    ],
    variants: [
      { id: "v3-48", name: "EU 48 (US 38)", size: "48", color: "Forest Green", price: 980, inStock: true },
      { id: "v3-50", name: "EU 50 (US 40)", size: "50", color: "Forest Green", price: 980, inStock: true }
    ],
    fabricInfo: "Heavy Irish Linen Blend",
    careInstructions: "Specialist dry clean."
  },
  {
    id: "p4",
    slug: "mayfair-pima-crewneck",
    name: "The Mayfair Crewneck",
    tagline: "100% Peruvian Pima Cotton Sweater",
    description: "Crafted from long-staple Pima cotton for unmatched silkiness and durability. Perfect for layering under tailoring.",
    price: 340,
    category: "knits",
    isMadeToOrder: false,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop"
    ],
    variants: [
      { id: "v4-m", name: "Medium", size: "M", color: "Oatmeal", price: 340, inStock: true },
      { id: "v4-l", name: "Large", size: "L", color: "Oatmeal", price: 340, inStock: true }
    ],
    fabricInfo: "100% Peruvian Pima Cotton",
    careInstructions: "Machine wash cold flat dry."
  }
];
