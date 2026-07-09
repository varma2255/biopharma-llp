"use client";
import { motion } from "framer-motion";

const pipeline = [
  {
    name: "BP-2401",
    disease: "Non-Small Cell Lung Cancer",
    mechanism: "PD-L1 / TIGIT Bispecific",
    phase: "Phase III",
    progress: 85,
    status: "active",
    milestone: "NDA Filing Q2 2025",
  },
  {
    name: "BP-1892",
    disease: "Alzheimer's Disease",
    mechanism: "Tau Aggregation Inhibitor",
    phase: "Phase II",
    progress: 55,
    status: "active",
    milestone: "Data Readout Q4 2024",
  },
  {
    name: "BP-3305",
    disease: "Type 2 Diabetes",
    mechanism: "GLP-1R / GIPR Dual Agonist",
    phase: "Phase II",
    progress: 40,
    status: "enrolling",
    milestone: "Enrollment Complete Q1 2025",
  },
  {
    name: "BP-0978",
    disease: "Rheumatoid Arthritis",
    mechanism: "JAK1 Selective Inhibitor",
    phase: "Phase I",
    progress: 20,
    status: "enrolling",
    milestone: "Phase I Complete Q3 2025",
  },
  {
    name: "BP-4412",
    disease: "Rare Genetic Disease (FH)",
    mechanism: "siRNA Gene Silencing",
    phase: "Preclinical",
    progress: 10,
    status: "preclinical",
    milestone: "IND Filing Q2 2025",
  },
];

const phaseColors: Record<string, string> = {
  "Phase III": "text-green-400 bg-green-500/20 border-green-500/30",
  "Phase II": "text-emerald-400 bg-emerald-500/15 border-emerald-500/25",
  "Phase I": "text-teal-400 bg-teal-500/10 border-teal-500/20",
  "Preclinical": "text-white/40 bg-white/5 border-white/10",
};

export default function Pipeline() {
  return (
    <section id="pipeline" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-green-500 text-xs font-mono uppercase tracking-widest mb-5"
            >
              <div className="w-8 h-px bg-green-500/40" />
              Drug Pipeline
              <div className="w-8 h-px bg-green-500/40" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-4xl lg:text-5xl font-bold"
            >
              Our clinical{" "}
              <span className="gradient-text">pipeline</span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#contact"
            className="text-sm font-mono text-green-400 hover:text-green-300 border border-green-500/30 hover:border-green-500/60 px-5 py-2.5 rounded-full transition-all self-start lg:self-auto"
          >
            Partner on a Program →
            the Duplicate server requested by the client by the database can be done trough the client server of the request sent by the termianl 
          </motion.a>
        </div>

        {/* Pipeline table */}
        <div className="space-y-3">
          {/* Header row */}
          <div className="hidden lg:grid grid-cols-[2fr_3fr_2fr_1fr_3fr] gap-4 px-5 pb-2 border-b border-green-500/10">
            {["Compound", "Indication", "Mechanism", "Phase", "Development Milestone"].map((h) => (
              <div key={h} className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                {h}
              </div>
            ))}
          </div>

          {pipeline.map((drug, i) => (
            <motion.div
              key={drug.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group bg-[#0d1410] hover:bg-[#111a14] border border-green-500/10 hover:border-green-500/25 rounded-xl p-5 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr_2fr_1fr_3fr] gap-3 lg:gap-4 items-center">
                {/* Compound */}
                <div>
                  <div className="font-mono font-bold text-green-400 text-base group-hover:glow-green-text transition-all">
                    {drug.name}
                  </div>
                  <div className="text-[10px] text-white/30 font-mono mt-0.5">{drug.status.toUpperCase()}</div>
                </div>

                {/* Indication */}
                <div>
                  <div className="text-white/80 font-body text-sm">{drug.disease}</div>
                </div>

                {/* Mechanism */}
                <div>
                  <div className="text-white/40 font-mono text-xs">{drug.mechanism}</div>
                </div>

                {/* Phase */}
                <div>
                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${phaseColors[drug.phase]}`}>
                    {drug.phase}
                  </span>
                </div>

                {/* Milestone + progress */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono text-white/40">{drug.milestone}</span>
                    <span className="text-xs font-mono text-green-400">{drug.progress}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${drug.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
