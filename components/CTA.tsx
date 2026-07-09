"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="animated-border rounded-3xl p-1"
        >
          <div className="bg-gradient-to-br from-green-900/30 via-[#0d1410] to-[#080c0a] rounded-[22px] px-10 py-16 relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-green-500 text-xs font-mono uppercase tracking-widest mb-7">
                <div className="w-8 h-px bg-green-500/40" />
                Start Your Journey
                <div className="w-8 h-px bg-green-500/40" />
              </div>

              <h2 className="font-display text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Ready to accelerate your{" "}
                <span className="gradient-text">drug discovery?</span>
              </h2>

              <p className="text-white/50 font-body text-lg mb-10 leading-relaxed">
                Partner with BioPharma LLP to leverage AI-powered research infrastructure,
                expert regulatory support, and a global network of clinical sites.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="mailto:partnerships@biopharma.llp"
                  className="btn-shimmer flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-black font-semibold font-body px-8 py-4 rounded-full transition-all duration-300 glow-green group"
                >
                  <span>Request Partnership</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#solutions"
                  className="flex items-center justify-center gap-2 border border-green-500/30 hover:border-green-500/60 text-white/70 hover:text-white font-body px-8 py-4 rounded-full transition-all duration-300"
                >
                  Schedule a Demo
                </a>
              </div>

              {/* Contact info */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="mailto:info@biopharma.llp"
                  className="flex items-center gap-2 text-white/40 hover:text-green-400 text-sm font-mono transition-colors"
                >
                  <Mail size={14} />
                  info@biopharma.llp
                </a>
                <div className="w-px h-4 bg-white/10 hidden sm:block" />
                <a
                  href="tel:+914012345678"
                  className="flex items-center gap-2 text-white/40 hover:text-green-400 text-sm font-mono transition-colors"
                >
                  <Phone size={14} />
                  +91 40 1234 5678
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
