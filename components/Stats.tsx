"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const stats = [
  { value: 2847, suffix: "+", label: "Drug Compounds Screened", desc: "Across all disease areas" },
  { value: 14, suffix: "", label: "FDA Approved Drugs", desc: "In the last 5 years" },
  { value: 94, suffix: "%", label: "Trial Success Rate", desc: "Phase III programs" },
  { value: 42, suffix: "+", label: "Countries Covered", desc: "Global distribution network" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-mono text-5xl lg:text-6xl font-bold text-white">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-green-500/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="px-8 py-10 text-center first:pl-0 last:pr-0 relative group"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-green-500/30 group-hover:bg-green-500/60 transition-colors" />

              <AnimatedCounter target={stat.value} suffix={stat.suffix} />

              <div className="mt-3 mb-1 text-green-400 font-mono text-sm font-semibold">
                {stat.label}
              </div>
              <div className="text-white/30 text-xs font-body">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
