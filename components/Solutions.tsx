"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Dna, Brain, FlaskConical, Activity, Shield, Microscope } from "lucide-react";

const solutions = [
  {
    icon: Brain,
    tag: "AI-Powered",
    title: "Machine Learning Drug Discovery",
    desc: "Our proprietary AI models analyze billions of molecular combinations to identify promising drug candidates in weeks, not years.",
    color: "from-green-500/20 to-emerald-500/10",
    stat: "10×",
    statLabel: "Faster Discovery",
  },
  {
    icon: Dna,
    tag: "Genomics",
    title: "Precision Genomic Medicine",
    desc: "Harness whole-genome sequencing and CRISPR-based platforms to develop targeted therapies tailored to individual patient genomes.",
    color: "from-teal-500/20 to-green-500/10",
    stat: "98.7%",
    statLabel: "Gene Targeting Accuracy",
  },
  {
    icon: FlaskConical,
    tag: "Synthesis",
    title: "Automated Compound Synthesis",
    desc: "Robotic high-throughput screening labs test 100,000+ compounds per day with AI-optimized protocols and real-time analytics.",
    color: "from-green-600/20 to-emerald-400/10",
    stat: "100K+",
    statLabel: "Daily Screenings",
  },
  {
    icon: Activity,
    tag: "Clinical",
    title: "Adaptive Clinical Trials",
    desc: "Real-world evidence integration and adaptive trial designs reduce time-to-approval while maintaining the highest safety standards.",
    color: "from-emerald-500/20 to-green-500/5",
    stat: "138",
    statLabel: "Active Phase III Trials",
  },
  {
    icon: Shield,
    tag: "Regulatory",
    title: "Regulatory Intelligence",
    desc: "AI-driven regulatory strategy and automated compliance documentation across FDA, EMA, and global health authorities.",
    color: "from-green-400/20 to-teal-500/10",
    stat: "42",
    statLabel: "Countries Covered",
  },
  {
    icon: Microscope,
    tag: "Biomarkers",
    title: "Biomarker Identification",
    desc: "Advanced proteomics and metabolomics platforms identify novel biomarkers for early disease detection and patient stratification.",
    color: "from-teal-400/20 to-green-500/10",
    stat: "2,847",
    statLabel: "Biomarkers Catalogued",
  },
];

function SolutionCard({ solution, index }: { solution: typeof solutions[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className={`relative bg-gradient-to-br ${solution.color} border border-green-500/15 rounded-2xl p-6 card-hover group overflow-hidden`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 hex-pattern opacity-50 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Tag + Icon row */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-[10px] font-mono text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full">
            {solution.tag}
          </span>
          <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
            <solution.icon size={18} className="text-green-400" />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-bold text-white mb-3 leading-snug">
          {solution.title}
        </h3>

        {/* Description */}
        <p className="text-white/45 font-body text-sm leading-relaxed mb-6">
          {solution.desc}
        </p>

        {/* Stat */}
        <div className="flex items-baseline gap-2 border-t border-green-500/10 pt-4">
          <span className="font-mono text-2xl font-bold text-green-400">
            {solution.stat}
          </span>
          <span className="text-xs text-white/30 font-mono">{solution.statLabel}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Solutions() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="solutions" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-green-500 text-xs font-mono uppercase tracking-widest mb-6"
          >
            <div className="w-8 h-px bg-green-500/40" />
            Our Solutions
            <div className="w-8 h-px bg-green-500/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-4xl lg:text-5xl font-bold mb-5"
          >
            Access to the future{" "}
            <span className="gradient-text">of medicine</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/40 font-body text-lg max-w-2xl mx-auto"
          >
            Experience AI-driven drug discovery, seamless regulatory navigation, and
            real-time clinical insights — empowering your research teams to work smarter.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((solution, i) => (
            <SolutionCard key={solution.title} solution={solution} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
