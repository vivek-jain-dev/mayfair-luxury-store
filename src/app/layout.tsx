import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { BRAND_NAME, BRAND_SLOGAN } from "@/lib/constants";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sansFont = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${BRAND_NAME} | ${BRAND_SLOGAN}`,
  description: "A Houston-based tailoring house guided by Italian textiles and European craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-[#FCFCFC] text-[#313131]">
        <Header />
        <main className="flex-1">{children}</main>
        <CartDrawer />
        <Footer />
      </body>
    </html>
  );
}
