import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Press & Editorial Coverage | The Studio Mayfair",
  description:
    "Editorial coverage and feature stories of The Studio Mayfair in GQ, Robb Report, Vogue, and Financial Times.",
};

const PRESS_ARTICLES = [
  {
    publication: "Robb Report",
    headline: "The New Wave of Bespoke Tailoring in Houston & London",
    excerpt:
      "The Studio Mayfair marries classic Savile Row proportions with the lightweight ease of Italian unlined cashmere.",
    date: "September 2026",
    linkText: "Read Article on Robb Report",
  },
  {
    publication: "GQ Magazine",
    headline: "The 10 Best Custom Suits You Can Order Today",
    excerpt:
      "Guided by European craftsmanship, Mayfair's bespoke fitting experience offers unprecedented precision.",
    date: "August 2026",
    linkText: "Featured in GQ Style",
  },
  {
    publication: "Financial Times - How To Spend It",
    headline: "Travelling Tailors: Private Trunk Shows for the Global Elite",
    excerpt:
      "Bringing the fitting room to the client: How The Studio Mayfair hosts intimate trunk show appointments worldwide.",
    date: "June 2026",
    linkText: "Read Story on FT",
  },
  {
    publication: "Vogue International",
    headline: "Quiet Luxury Meets Modern Sartorial Elegance",
    excerpt:
      "Subtle hand-stitching, horn buttons, and Loro Piana fabrics define Mayfair's signature ready-to-wear jackets.",
    date: "Spring 2026",
    linkText: "View Feature on Vogue",
  },
];

export default function PressPage() {
  return (
    <div className="bg-[#FCFCFC] py-16 sm:py-24 text-[#313131]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#7C856E] font-medium">
            MEDIA &amp; EDITORIALS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl uppercase tracking-wider text-[#313131]">
            Press &amp; Publications
          </h1>
          <p className="max-w-xl mx-auto text-sm text-gray-600 font-light leading-relaxed">
            Discover feature stories, editorials, and accolades highlighting The Studio Mayfair in global luxury publications.
          </p>
        </div>

        {/* Press Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRESS_ARTICLES.map((article, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E8E8] p-8 space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="uppercase tracking-[0.2em] font-medium text-[#7C856E]">
                    {article.publication}
                  </span>
                  <span>{article.date}</span>
                </div>
                <h3 className="font-serif text-2xl uppercase tracking-wide text-[#313131] leading-snug">
                  &ldquo;{article.headline}&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0F0F0] flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-medium text-[#313131] flex items-center gap-1">
                  {article.linkText} <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Press Inquiries */}
        <div className="mt-16 text-center bg-[#F7F7F5] p-8 border border-[#E8E8E8]">
          <h4 className="font-serif text-xl uppercase tracking-wide text-[#313131] mb-2">
            Press &amp; Media Inquiries
          </h4>
          <p className="text-xs text-gray-600 font-light max-w-md mx-auto mb-4">
            For sample pulls, editorial interviews, or press kits, please contact our public relations team.
          </p>
          <a
            href="mailto:press@thestudiomayfair.com"
            className="inline-block bg-[#484D40] text-white px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#3B3F34] transition-colors"
          >
            press@thestudiomayfair.com
          </a>
        </div>
      </div>
    </div>
  );
}
