"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, BarChart3, Play } from "lucide-react";

function CounterNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-mono text-4xl font-bold text-green-400">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function MiniChart() {
  const values = [30, 45, 35, 60, 55, 75, 70, 90];
  return (
    <div className="flex items-end gap-1 h-16">
      {values.map((v, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm bg-gradient-to-t from-green-500/80 to-green-400/20"
          initial={{ height: 0 }}
          animate={{ height: `${v}%` }}
          transition={{ delay: 0.1 * i, duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="research" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-green-500 text-xs font-mono uppercase tracking-widest mb-6"
          >
            <div className="w-8 h-px bg-green-500/40" />
            Why Innovare Biopharma LLP
            <div className="w-8 h-px bg-green-500/40" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl lg:text-5xl font-bold"
          >
            Built to scale with{" "}
            <span className="gradient-text">your ambitions</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">

          {/* Feature 1 — Scalability (large) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1 lg:row-span-2 bg-gradient-to-br from-green-500/25 to-emerald-600/10 border border-green-500/25 rounded-2xl p-7 card-hover relative overflow-hidden group"
          >
            <div className="absolute top-3 right-3">
              <span className="text-[10px] font-mono text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full">
                Scalability
              </span>
            </div>

            {/* Animated grid pattern inside */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="mb-6 mt-4">
                  {/* Molecule-like viz */}
                  <div className="w-full h-32 flex items-center justify-center relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-28 h-28 rounded-full border border-green-500/20 absolute"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                      className="w-20 h-20 rounded-full border border-green-400/30 absolute"
                    />
                    <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                      <TrendingUp size={20} className="text-green-400" />
                    </div>
                    {/* Orbiting dots */}
                    {[0, 120, 240].map((angle) => (
                      <motion.div
                        key={angle}
                        className="absolute w-3 h-3 rounded-full bg-green-400/70 border border-green-400/40"
                        animate={{ rotate: [angle, angle + 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: "56px center", left: "calc(50% - 56px)" }}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold mb-3">
                  Build scalable research with our AI platform
                </h3>
                <p className="text-white/40 font-body text-sm leading-relaxed">
                  Elastically scale computational resources for molecular simulations
                  up or down based on research demands — without hardware constraints.
                </p>
              </div>

              <div className="flex items-center gap-2 text-green-400 text-sm font-mono mt-4 group-hover:gap-3 transition-all">
                <span>Explore Platform</span>
                <span>→</span>
              </div>
            </div>
          </motion.div>

          {/* Feature 2 — Video/Demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="lg:col-span-1 bg-[#0d1410] border border-green-500/15 rounded-2xl overflow-hidden card-hover relative group"
          >
            <div className="relative h-48 bg-gradient-to-br from-green-900/30 to-[#080c0a] flex items-center justify-center">
              {/* Video thumbnail bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />
              <div className="absolute inset-0 hex-pattern opacity-40" />
              
              {/* Researcher silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-t from-green-900/60 to-transparent blur-2xl" />
              </div>

              {/* Play button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 w-14 h-14 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-2xl"
              >
                <Play size={18} className="text-green-800 ml-1" fill="currentColor" />
              </motion.button>
            </div>

            <div className="p-5">
              <h3 className="font-display text-lg font-bold mb-1">
                See Our Lab in Action
              </h3>
              <p className="text-white/40 text-sm font-body">
                A 3-minute tour of our automated synthesis facility in Hyderabad.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 — Cost effectiveness */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="lg:col-span-1 bg-[#0d1410] border border-green-500/15 rounded-2xl p-6 card-hover relative overflow-hidden"
          >
            {/* Subscription badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-green-500" />
              </div>
              <div>
                <div className="text-xs font-mono text-white font-semibold">Partnership Active</div>
                <div className="text-[10px] font-mono text-white/40">Onboarded Today</div>
              </div>
            </div>

            <h3 className="font-display text-xl font-bold mb-2">Cost-Effectiveness</h3>
            <p className="text-white/40 text-sm font-body leading-relaxed">
              Reduce R&D costs by up to 60% with our subscription-based platform. No
              upfront capital expenditure required.
            </p>

            {/* Mini bar */}
            <div className="mt-5">
              <div className="flex justify-between text-xs font-mono text-white/30 mb-1.5">
                <span>Cost Savings</span>
                <span className="text-green-400">60%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: "60%" } : {}}
                  transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Feature 4 — Chart / Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-1 bg-[#0d1410] border border-green-500/15 rounded-2xl p-6 card-hover"
          >
            <div className="mb-4">
              <MiniChart />
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <CounterNumber target={90} suffix="%" />
            </div>
            <p className="text-white/40 text-sm font-body">
              Trial success rate improvement over industry average through adaptive protocols.
            </p>
          </motion.div>

          {/* Feature 5 — Global users */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="lg:col-span-1 bg-gradient-to-br from-green-500/15 to-[#0d1410] border border-green-500/25 rounded-2xl p-6 card-hover"
          >
            <div className="flex -space-x-2 mb-4">
              {["#4ade80", "#22c55e", "#16a34a", "#15803d", "#166534"].map((color, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-[#0d1410] flex items-center justify-center"
                  style={{ background: `${color}30`, borderColor: color + "40" }}
                >
                  <Users size={14} style={{ color }} />
                </div>
              ))}
              <div className="w-9 h-9 rounded-full border-2 border-[#0d1410] bg-green-500/10 flex items-center justify-center text-[10px] font-mono text-green-400">
                +2K
              </div>
            </div>
            <p className="text-white/50 text-sm font-body leading-relaxed">
              Our researchers span across{" "}
              <span className="text-white font-semibold">42 countries</span>, driving
              globally coordinated clinical programs.
            </p>
          </motion.div>

          {/* Feature 6 — Analytics & Insights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-1 bg-gradient-to-br from-green-600/20 to-[#0d1410] border border-green-500/25 rounded-2xl p-6 card-hover"
          >
            <div className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-4">
              <BarChart3 size={18} className="text-green-400" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">Analytics & Insights</h3>
            <p className="text-white/40 text-sm font-body leading-relaxed">
              Gain actionable intelligence through built-in analytics tools, enabling
              data-driven decisions and real-time optimization across your entire
              research pipeline.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
