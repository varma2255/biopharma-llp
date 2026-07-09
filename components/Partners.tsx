"use client";
import { motion } from "framer-motion";

const partners = [
  "Novartis", "Pfizer Research", "BioNTech", "Illumina", "Roche Diagnostics",
  "AstraZeneca", "Moderna Labs", "Genentech", "Sanofi", "Merck & Co",
];

export default function Partners() {
  return (
    <section className="py-16 border-y border-green-500/10 overflow-hidden relative">
      {/* Label */}
      <div className="text-center mb-10">
        <p className="text-white/30 text-xs font-mono uppercase tracking-widest">
          Trusted by Global Leaders in Life Sciences
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#080c0a] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080c0a] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-0">
          <div className="marquee-track flex gap-16 items-center whitespace-nowrap">
            {[...partners, ...partners].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center gap-3 group cursor-default"
              >
                {/* Icon placeholder */}
                <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-green-500/40" />
                </div>
                <span className="text-white/40 group-hover:text-white/70 font-body text-sm font-medium transition-colors duration-300">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
