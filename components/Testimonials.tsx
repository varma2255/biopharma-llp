"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "BioPharma LLP's AI platform cut our lead optimization phase from 18 months to just 4. Their molecular screening technology is genuinely transformative for drug discovery.",
    name: "Dr. Priya Nair",
    role: "Chief Scientific Officer",
    org: "GenVista Therapeutics",
    initials: "PN",
    color: "#22c55e",
  },
  {
    quote: "The precision of their genomic targeting platform is unmatched in the industry. We've seen a 3× improvement in biomarker identification for our oncology programs.",
    name: "Prof. Robert Chen",
    role: "Head of Oncology Research",
    org: "MedGenomics Institute",
    initials: "RC",
    color: "#4ade80",
  },
  {
    quote: "Regulatory navigation across 42 countries used to be our biggest bottleneck. BioPharma's regulatory intelligence suite resolved that entirely — we got EMA approval 6 months ahead of schedule.",
    name: "Anika Sharma",
    role: "VP Regulatory Affairs",
    org: "Helix Global Pharma",
    initials: "AS",
    color: "#34d399",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-green-500 text-xs font-mono uppercase tracking-widest mb-5"
          >
            <div className="w-8 h-px bg-green-500/40" />
            Trusted by Researchers
            <div className="w-8 h-px bg-green-500/40" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl lg:text-5xl font-bold"
          >
            What scientists say{" "}
            <span className="gradient-text">about us</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="bg-[#0d1410] border border-green-500/15 rounded-2xl p-7 card-hover relative overflow-hidden group"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5">
                <Quote size={18} className="text-green-400" />
              </div>

              <p className="text-white/60 font-body text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 border-t border-green-500/10 pt-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-mono font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color + "20", color: t.color, border: `1px solid ${t.color}40` }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white font-body">{t.name}</div>
                  <div className="text-xs text-white/40 font-mono">{t.role} · {t.org}</div>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
