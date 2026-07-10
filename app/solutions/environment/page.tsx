// // // "use client";

// // // import { useEffect, useRef, useState, useCallback } from "react";

// // // // ─── Types ────────────────────────────────────────────────────────────────────
// // // interface Particle {
// // //   id: number;
// // //   x: number;
// // //   size: number;
// // //   speed: number;
// // //   opacity: number;
// // //   delay: number;
// // // }

// // // interface Commitment {
// // //   icon: string;
// // //   title: string;
// // //   metric: string;
// // //   metricLabel: string;
// // //   desc: string;
// // //   accent: string;
// // //   bg: string;
// // //   border: string;
// // // }

// // // interface Initiative {
// // //   year: string;
// // //   title: string;
// // //   desc: string;
// // //   tag: string;
// // //   tagColor: string;
// // // }

// // // interface EcoProduct {
// // //   name: string;
// // //   claim: string;
// // //   icon: string;
// // //   tags: string[];
// // // }

// // // interface PillarItem {
// // //   label: string;
// // //   icon: string;
// // //   pct: number;
// // // }

// // // // ─── Data ─────────────────────────────────────────────────────────────────────
// // // const commitments: Commitment[] = [
// // //   {
// // //     icon: "🌿",
// // //     title: "Zero Harmful Residues",
// // //     metric: "100%",
// // //     metricLabel: "Residue-Free",
// // //     desc: "All formulations are tested to ensure zero persistence in aquatic environments — safe for fish, shrimp, sediment, and the wider food chain.",
// // //     accent: "#38bdf8",
// // //     bg: "rgba(56,189,248,0.07)",
// // //     border: "rgba(56,189,248,0.2)",
// // //   },
// // //   {
// // //     icon: "♻️",
// // //     title: "Circular Packaging",
// // //     metric: "80%",
// // //     metricLabel: "Recycled Materials",
// // //     desc: "Our packaging is 80% recycled polymer, designed for a second life. We partner with waste aggregators to close the packaging loop completely.",
// // //     accent: "#60a5fa",
// // //     bg: "rgba(96,165,250,0.07)",
// // //     border: "rgba(96,165,250,0.2)",
// // //   },
// // //   {
// // //     icon: "💧",
// // //     title: "Water Stewardship",
// // //     metric: "60%",
// // //     metricLabel: "Water Reduction",
// // //     desc: "Our manufacturing uses 60% less water than industry average. Effluent is treated to near-potable standards before any discharge.",
// // //     accent: "#7dd3fc",
// // //     bg: "rgba(125,211,252,0.07)",
// // //     border: "rgba(125,211,252,0.2)",
// // //   },
// // //   {
// // //     icon: "🌍",
// // //     title: "Carbon Neutrality",
// // //     metric: "2030",
// // //     metricLabel: "Net-Zero Target",
// // //     desc: "Committed to net-zero emissions by 2030 through renewable energy transition, operational efficiency, and verified carbon offsets.",
// // //     accent: "#93c5fd",
// // //     bg: "rgba(147,197,253,0.07)",
// // //     border: "rgba(147,197,253,0.2)",
// // //   },
// // //   {
// // //     icon: "🐟",
// // //     title: "Aquatic Biodiversity",
// // //     metric: "0",
// // //     metricLabel: "Ecosystem Harm",
// // //     desc: "Every ingredient is evaluated for ecotoxicity. We maintain a strict exclusion list of substances harmful to non-target aquatic species.",
// // //     accent: "#38bdf8",
// // //     bg: "rgba(56,189,248,0.07)",
// // //     border: "rgba(56,189,248,0.2)",
// // //   },
// // //   {
// // //     icon: "🌱",
// // //     title: "Mangrove Restoration",
// // //     metric: "10K",
// // //     metricLabel: "Trees Planted",
// // //     desc: "For every tonne of product sold, we fund mangrove restoration in coastal Andhra Pradesh and Odisha — critical habitat for aquatic life.",
// // //     accent: "#60a5fa",
// // //     bg: "rgba(96,165,250,0.07)",
// // //     border: "rgba(96,165,250,0.2)",
// // //   },
// // // ];

// // // const initiatives: Initiative[] = [
// // //   {
// // //     year: "2019",
// // //     title: "Green Manufacturing Pledge",
// // //     desc: "Transitioned our primary facility to solar-powered operations, reducing Scope 1 emissions by 42% in the first year.",
// // //     tag: "Energy",
// // //     tagColor: "#fbbf24",
// // //   },
// // //   {
// // //     year: "2021",
// // //     title: "Bio-Safe Formulation Standard",
// // //     desc: "Introduced our proprietary ecotoxicity testing protocol — now the basis for all new product development at Innovare.",
// // //     tag: "Research",
// // //     tagColor: "#34d399",
// // //   },
// // //   {
// // //     year: "2022",
// // //     title: "Coastal Restoration Partnership",
// // //     desc: "Partnered with WWF-India and local fishing communities to plant 10,000 mangrove saplings across 3 coastal states.",
// // //     tag: "Restoration",
// // //     tagColor: "#38bdf8",
// // //   },
// // //   {
// // //     year: "2023",
// // //     title: "Zero-Liquid Discharge",
// // //     desc: "Achieved ZLD certification at our Hyderabad facility — all process water is recycled and recirculated internally.",
// // //     tag: "Water",
// // //     tagColor: "#60a5fa",
// // //   },
// // //   {
// // //     year: "2024",
// // //     title: "Circular Packaging Launch",
// // //     desc: "Replaced all HDPE containers with 80% recycled polymer alternatives, diverting 12 tonnes of virgin plastic annually.",
// // //     tag: "Packaging",
// // //     tagColor: "#a78bfa",
// // //   },
// // //   {
// // //     year: "2025",
// // //     title: "Net-Zero Roadmap Published",
// // //     desc: "Released our comprehensive Net-Zero 2030 roadmap, audited by Bureau Veritas, with quarterly progress reporting.",
// // //     tag: "Climate",
// // //     tagColor: "#f472b6",
// // //   },
// // // ];

// // // const ecoProducts: EcoProduct[] = [
// // //   { name: "AquaShield Pro", claim: "Biodegrades in 72 hours", icon: "🛡️", tags: ["Zero Toxicity", "Bio-Safe"] },
// // //   { name: "GillGuard Oxy", claim: "Plant-derived actives only", icon: "🌿", tags: ["Botanical", "Organic"] },
// // //   { name: "ProbioMax Aqua", claim: "Naturally sourced probiotics", icon: "🦠", tags: ["Probiotic", "No Synthetics"] },
// // //   { name: "WaterClear Pro", claim: "Non-toxic water treatment", icon: "💧", tags: ["Eco-Safe", "pH Neutral"] },
// // // ];

// // // const pillars: PillarItem[] = [
// // //   { label: "Air Quality", icon: "🌬️", pct: 88 },
// // //   { label: "Water Safety", icon: "💧", pct: 96 },
// // //   { label: "Soil Impact", icon: "🌱", pct: 94 },
// // //   { label: "Biodiversity", icon: "🐟", pct: 91 },
// // //   { label: "Carbon Offset", icon: "♻️", pct: 78 },
// // // ];

// // // // ─── Hooks ────────────────────────────────────────────────────────────────────
// // // function useInView(threshold = 0.15) {
// // //   const ref = useRef<HTMLDivElement>(null);
// // //   const [inView, setInView] = useState(false);
// // //   useEffect(() => {
// // //     const el = ref.current;
// // //     if (!el) return;
// // //     const obs = new IntersectionObserver(
// // //       ([e]) => { if (e.isIntersecting) setInView(true); },
// // //       { threshold }
// // //     );
// // //     obs.observe(el);
// // //     return () => obs.disconnect();
// // //   }, [threshold]);
// // //   return { ref, inView };
// // // }

// // // function useCountUp(target: number, active: boolean, duration = 1600) {
// // //   const [count, setCount] = useState(0);
// // //   useEffect(() => {
// // //     if (!active) return;
// // //     let cur = 0;
// // //     const step = target / (duration / 16);
// // //     const t = setInterval(() => {
// // //       cur += step;
// // //       if (cur >= target) { setCount(target); clearInterval(t); }
// // //       else setCount(Math.floor(cur));
// // //     }, 16);
// // //     return () => clearInterval(t);
// // //   }, [active, target, duration]);
// // //   return count;
// // // }

// // // // ─── Sub-components ───────────────────────────────────────────────────────────
// // // function BubbleParticles() {
// // //   const [particles, setParticles] = useState<Particle[]>([]);
// // //   useEffect(() => {
// // //     setParticles(
// // //       Array.from({ length: 18 }, (_, i) => ({
// // //         id: i,
// // //         x: Math.random() * 100,
// // //         size: 5 + Math.random() * 14,
// // //         speed: 7 + Math.random() * 10,
// // //         opacity: 0.08 + Math.random() * 0.18,
// // //         delay: Math.random() * 8,
// // //       }))
// // //     );
// // //   }, []);
// // //   return (
// // //     <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
// // //       {particles.map((p) => (
// // //         <div
// // //           key={p.id}
// // //           style={{
// // //             position: "absolute",
// // //             left: `${p.x}%`,
// // //             bottom: "-20px",
// // //             width: `${p.size}px`,
// // //             height: `${p.size}px`,
// // //             borderRadius: "50%",
// // //             background: `rgba(56,189,248,${p.opacity})`,
// // //             border: `0.5px solid rgba(125,211,252,${p.opacity * 1.5})`,
// // //             animation: `bubbleRise ${p.speed}s ${p.delay}s ease-in infinite`,
// // //           }}
// // //         />
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // function PillarBar({ label, icon, pct, active, delay }: { label: string; icon: string; pct: number; active: boolean; delay: number }) {
// // //   const [w, setW] = useState(0);
// // //   const num = useCountUp(pct, active);
// // //   useEffect(() => {
// // //     if (!active) return;
// // //     const t = setTimeout(() => setW(pct), delay);
// // //     return () => clearTimeout(t);
// // //   }, [active, pct, delay]);
// // //   return (
// // //     <div style={{ marginBottom: "22px" }}>
// // //       <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
// // //         <span style={{ fontSize: "16px" }}>{icon}</span>
// // //         <span style={{ flex: 1, fontSize: "13px", color: "#bae6fd", fontWeight: 500 }}>{label}</span>
// // //         <span style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "20px", color: "#38bdf8", fontWeight: 700 }}>{num}%</span>
// // //       </div>
// // //       <div style={{ height: "7px", background: "rgba(56,189,248,0.1)", borderRadius: "7px", overflow: "hidden" }}>
// // //         <div style={{
// // //           height: "100%", borderRadius: "7px",
// // //           background: "linear-gradient(90deg, #1d4ed8, #0ea5e9, #38bdf8)",
// // //           boxShadow: "0 0 14px rgba(56,189,248,0.5)",
// // //           width: `${w}%`,
// // //           transition: "width 1.4s cubic-bezier(0.34,1.2,0.64,1)",
// // //         }} />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function CommitmentCard({ c, index, inView }: { c: Commitment; index: number; inView: boolean }) {
// // //   const [hovered, setHovered] = useState(false);
// // //   return (
// // //     <div
// // //       style={{
// // //         borderRadius: "20px", padding: "32px 26px",
// // //         border: `0.5px solid ${hovered ? c.border : "rgba(255,255,255,0.08)"}`,
// // //         background: hovered ? c.bg : "rgba(255,255,255,0.03)",
// // //         transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
// // //         boxShadow: hovered ? `0 24px 60px ${c.accent}22` : "none",
// // //         opacity: inView ? 1 : 0,
// // //         animation: inView ? `riseUp 0.7s ${index * 0.1}s ease both` : "none",
// // //         transition: "transform 0.35s ease, background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
// // //         cursor: "default",
// // //       }}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //     >
// // //       <div style={{ fontSize: "30px", marginBottom: "12px" }}>{c.icon}</div>
// // //       <div style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "44px", fontWeight: 700, lineHeight: 1, marginBottom: "2px", color: c.accent }}>{c.metric}</div>
// // //       <div style={{ fontSize: "11px", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: "14px", fontWeight: 500, color: c.accent + "99" }}>{c.metricLabel}</div>
// // //       <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#f0f9ff", marginBottom: "10px" }}>{c.title}</h3>
// // //       <p style={{ fontSize: "13px", color: "rgba(240,249,255,0.45)", lineHeight: 1.7 }}>{c.desc}</p>
// // //     </div>
// // //   );
// // // }

// // // function TimelineItem({ item, index, inView }: { item: Initiative; index: number; inView: boolean }) {
// // //   const isRight = index % 2 === 1;
// // //   return (
// // //     <div style={{
// // //       display: "flex", alignItems: "center",
// // //       flexDirection: isRight ? "row-reverse" : "row",
// // //       paddingBottom: "52px",
// // //       opacity: inView ? 1 : 0,
// // //       animation: inView ? `riseUp 0.7s ${index * 0.12}s ease both` : "none",
// // //     }}>
// // //       <div style={{ flex: 1, padding: "0 40px", display: "flex", flexDirection: "column", gap: "6px", textAlign: isRight ? "right" : "left" }}>
// // //         <span style={{
// // //           fontSize: "10px", fontWeight: 600, textTransform: "uppercase" as const,
// // //           letterSpacing: "0.1em", padding: "3px 12px", borderRadius: "20px",
// // //           display: "inline-block", marginBottom: "4px",
// // //           alignSelf: isRight ? "flex-end" : "flex-start",
// // //           background: item.tagColor + "18", color: item.tagColor,
// // //         }}>{item.tag}</span>
// // //         <div style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "36px", color: "#bae6fd", fontWeight: 700, lineHeight: 1 }}>{item.year}</div>
// // //         <h3 style={{ fontSize: "17px", fontWeight: 600, color: "#1e293b" }}>{item.title}</h3>
// // //         <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.7, maxWidth: "340px", alignSelf: isRight ? "flex-end" : "flex-start" }}>{item.desc}</p>
// // //       </div>
// // //       <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1 }}>
// // //         <div style={{
// // //           width: "14px", height: "14px", borderRadius: "50%",
// // //           border: `2px solid ${item.tagColor}`,
// // //           boxShadow: `0 0 16px ${item.tagColor}66`,
// // //           background: "#f0f9ff", flexShrink: 0,
// // //         }} />
// // //       </div>
// // //       <div style={{ flex: 1 }} />
// // //     </div>
// // //   );
// // // }

// // // // ─── Main Page ────────────────────────────────────────────────────────────────
// // // export default function EnvironmentPage() {
// // //   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

// // //   const commitsSection = useInView(0.05);
// // //   const pillarsSection = useInView(0.2);
// // //   const timelineSection = useInView(0.05);
// // //   const productsSection = useInView(0.1);
// // //   const pledgeSection = useInView(0.25);

// // //   const handleMouse = useCallback((e: MouseEvent) => {
// // //     setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
// // //   }, []);

// // //   useEffect(() => {
// // //     window.addEventListener("mousemove", handleMouse);
// // //     return () => window.removeEventListener("mousemove", handleMouse);
// // //   }, [handleMouse]);

// // //   return (
// // //     <div style={{ fontFamily: "'Satoshi','Segoe UI',sans-serif", background: "#f0f9ff", overflowX: "hidden", color: "#0f172a" }}>
// // //       <style>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Satoshi:wght@300;400;500;700&display=swap');
// // //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// // //         @keyframes bubbleRise {
// // //           0%   { transform: translateY(0) scale(1); opacity: 0; }
// // //           10%  { opacity: 1; }
// // //           90%  { opacity: 0.6; }
// // //           100% { transform: translateY(-110vh) scale(0.5); opacity: 0; }
// // //         }
// // //         @keyframes riseUp {
// // //           from { opacity: 0; transform: translateY(36px); }
// // //           to   { opacity: 1; transform: translateY(0); }
// // //         }
// // //         @keyframes floatY {
// // //           0%, 100% { transform: translateY(0px); }
// // //           50%       { transform: translateY(-14px); }
// // //         }
// // //         @keyframes pulse {
// // //           0%, 100% { transform: scale(1); opacity: 1; }
// // //           50%       { transform: scale(1.07); opacity: 0.85; }
// // //         }
// // //         @keyframes rotateSlow {
// // //           from { transform: translate(-50%,-50%) rotate(0deg); }
// // //           to   { transform: translate(-50%,-50%) rotate(360deg); }
// // //         }

// // //         .nav-link:hover { color: #7dd3fc !important; }
// // //         .nav-cta-btn:hover { background: rgba(56,189,248,0.2) !important; }

// // //         .cta-primary {
// // //           background: linear-gradient(135deg, #1d4ed8, #0ea5e9);
// // //           color: #fff; border: none;
// // //           padding: 15px 36px; border-radius: 50px;
// // //           font-size: 14px; font-weight: 600;
// // //           cursor: pointer; font-family: 'Satoshi', sans-serif;
// // //           letter-spacing: 0.02em;
// // //           transition: all 0.3s ease;
// // //           box-shadow: 0 6px 28px rgba(14,165,233,0.4);
// // //         }
// // //         .cta-primary:hover { transform: translateY(-3px); box-shadow: 0 14px 44px rgba(14,165,233,0.55); }

// // //         .cta-outline {
// // //           background: transparent; color: #93c5fd;
// // //           border: 1px solid rgba(147,197,253,0.35);
// // //           padding: 15px 36px; border-radius: 50px;
// // //           font-size: 14px; font-weight: 500;
// // //           cursor: pointer; font-family: 'Satoshi', sans-serif;
// // //           transition: all 0.3s ease;
// // //         }
// // //         .cta-outline:hover { background: rgba(147,197,253,0.08); border-color: rgba(147,197,253,0.6); transform: translateY(-2px); }

// // //         .timeline-spine {
// // //           position: absolute; left: 50%; top: 0; bottom: 0; width: 1px;
// // //           background: linear-gradient(to bottom, transparent 0%, rgba(56,189,248,0.25) 8%, rgba(56,189,248,0.25) 92%, transparent 100%);
// // //           transform: translateX(-50%);
// // //         }

// // //         .eco-card-wrap { transition: all 0.3s ease; }
// // //         .eco-card-wrap:hover { transform: translateY(-8px) !important; border-color: rgba(56,189,248,0.4) !important; box-shadow: 0 24px 60px rgba(14,165,233,0.18) !important; }

// // //         .eco-tag-item { transition: transform 0.2s ease; cursor: default; }
// // //         .eco-tag-item:hover { transform: scale(1.06); }

// // //         .cert-chip { transition: all 0.25s ease; cursor: default; }
// // //         .cert-chip:hover { background: rgba(56,189,248,0.12) !important; border-color: rgba(56,189,248,0.4) !important; color: #bae6fd !important; }

// // //         .stat-float { transition: all 0.3s ease; }
// // //         .stat-float:hover { transform: translateY(-5px); box-shadow: 0 20px 60px rgba(14,165,233,0.25) !important; }
// // //       `}</style>

// // //       {/* ── HERO ── */}
// // //       <section style={{
// // //         background: "linear-gradient(150deg, #0c1a3a 0%, #0e3a6e 40%, #0369a1 80%, #0284c7 100%)",
// // //         minHeight: "100vh", position: "relative",
// // //         display: "flex", flexDirection: "column", overflow: "hidden",
// // //       }}>
// // //         <BubbleParticles />

// // //         {/* Grid */}
// // //         <div style={{
// // //           position: "absolute", inset: 0, pointerEvents: "none",
// // //           backgroundImage: "linear-gradient(rgba(56,189,248,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.05) 1px,transparent 1px)",
// // //           backgroundSize: "72px 72px",
// // //         }} />

// // //         {/* Mouse glow */}
// // //         <div style={{
// // //           position: "absolute", inset: 0, pointerEvents: "none",
// // //           background: `radial-gradient(ellipse 65% 55% at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(56,189,248,0.1) 0%, transparent 65%)`,
// // //           transition: "background 0.12s",
// // //         }} />

// // //         {/* Nav */}
// // //         <nav style={{
// // //           display: "flex", alignItems: "center", justifyContent: "space-between",
// // //           padding: "20px 52px", position: "relative", zIndex: 10,
// // //           borderBottom: "0.5px solid rgba(56,189,248,0.1)",
// // //         }}>
// // //           <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
// // //             <span style={{ fontSize: "20px" }}>🌊</span>
// // //             <span style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "17px", color: "#f0f9ff", fontWeight: 600 }}>
// // //               Innovare Biopharma
// // //             </span>
// // //           </div>
// // //           <div style={{ display: "flex", gap: "32px" }}>
// // //             {["Commitment", "Initiatives", "Eco Products", "Reports"].map((l, i) => (
// // //               <a key={i} href="#" className="nav-link" style={{ color: "rgba(240,249,255,0.5)", fontSize: "13px", textDecoration: "none", fontWeight: 400 }}>{l}</a>
// // //             ))}
// // //           </div>
// // //           <button className="nav-cta-btn" style={{
// // //             background: "rgba(56,189,248,0.12)", border: "0.5px solid rgba(56,189,248,0.35)",
// // //             color: "#7dd3fc", fontSize: "12px", fontWeight: 500, padding: "8px 20px",
// // //             borderRadius: "24px", cursor: "pointer", fontFamily: "'Satoshi',sans-serif", transition: "all 0.2s",
// // //           }}>
// // //             Download ESG Report
// // //           </button>
// // //         </nav>

// // //         {/* Hero body */}
// // //         <div style={{
// // //           flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
// // //           maxWidth: "1100px", margin: "0 auto", padding: "60px 52px 120px",
// // //           position: "relative", zIndex: 2,
// // //         }}>
// // //           {/* Badge */}
// // //           <div style={{
// // //             display: "inline-flex", alignItems: "center", gap: "10px",
// // //             background: "rgba(56,189,248,0.1)", border: "0.5px solid rgba(56,189,248,0.3)",
// // //             color: "#7dd3fc", fontSize: "11px", fontWeight: 500,
// // //             padding: "7px 18px", borderRadius: "24px", letterSpacing: "0.08em",
// // //             textTransform: "uppercase", marginBottom: "28px",
// // //             animation: "riseUp 0.7s ease both",
// // //           }}>
// // //             <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#38bdf8", display: "inline-block", boxShadow: "0 0 8px rgba(56,189,248,0.8)", animation: "pulse 2s ease-in-out infinite" }} />
// // //             Environmental Stewardship · Since 2019
// // //           </div>

// // //           {/* Headline */}
// // //           <h1 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(44px,6.5vw,88px)", fontWeight: 700, lineHeight: 1.0, color: "#f0f9ff", marginBottom: "24px", display: "flex", flexDirection: "column", gap: "4px" }}>
// // //             <span style={{ display: "block", animation: "riseUp 0.9s 0s ease both" }}>Protecting the</span>
// // //             <span style={{
// // //               display: "block",
// // //               background: "linear-gradient(90deg, #38bdf8, #7dd3fc, #bae6fd)",
// // //               WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
// // //               animation: "riseUp 0.9s 0.15s ease both",
// // //             }}>
// // //               Oceans We Rely On.
// // //             </span>
// // //           </h1>

// // //           <p style={{ fontSize: "17px", color: "rgba(240,249,255,0.62)", lineHeight: 1.8, maxWidth: "540px", marginBottom: "36px", animation: "riseUp 0.9s 0.35s ease both" }}>
// // //             Every product we formulate, every facility we run — designed to leave aquatic ecosystems healthier than we found them. Our environmental commitment is not a policy. It's our purpose.
// // //           </p>

// // //           <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", animation: "riseUp 0.9s 0.5s ease both" }}>
// // //             <button className="cta-primary">Explore Our Initiatives</button>
// // //             <button className="cta-outline">View ESG Report →</button>
// // //           </div>

// // //           {/* Floating stat badges */}
// // //           <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "52px" }}>
// // //             {[
// // //               { val: "Net-Zero", sub: "Target 2030", icon: "🌍", delay: "0.6s", dur: "3.5s", fdur: "0.8s" },
// // //               { val: "10,000+", sub: "Trees Planted", icon: "🌱", delay: "0.75s", dur: "4.0s", fdur: "0.9s" },
// // //               { val: "ZLD", sub: "Zero Liquid Discharge", icon: "💧", delay: "0.9s", dur: "3.8s", fdur: "1.0s" },
// // //               { val: "GMP", sub: "Green Certified", icon: "♻️", delay: "1.05s", dur: "4.2s", fdur: "1.1s" },
// // //             ].map((m, i) => (
// // //               <div key={i} className="stat-float" style={{
// // //                 display: "flex", alignItems: "center", gap: "12px",
// // //                 background: "rgba(12,26,58,0.65)", backdropFilter: "blur(14px)",
// // //                 border: "0.5px solid rgba(56,189,248,0.2)", borderRadius: "16px", padding: "14px 22px",
// // //                 boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
// // //                 animation: `riseUp ${m.fdur} ${m.delay} ease both, floatY ${m.dur} ${i * 0.7}s ease-in-out infinite`,
// // //               }}>
// // //                 <span style={{ fontSize: "22px" }}>{m.icon}</span>
// // //                 <div>
// // //                   <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "19px", color: "#f0f9ff", fontWeight: 600, lineHeight: 1 }}>{m.val}</div>
// // //                   <div style={{ fontSize: "10px", color: "rgba(240,249,255,0.4)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "3px" }}>{m.sub}</div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Wave */}
// // //         <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
// // //           <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ width: "100%", height: "90px", display: "block" }}>
// // //             <path d="M0,50 C200,10 400,80 600,45 C800,10 1000,80 1200,50 C1320,30 1400,65 1440,55 L1440,90 L0,90 Z" fill="#f0f9ff" />
// // //             <path d="M0,68 C300,40 600,85 900,60 C1100,45 1300,80 1440,70 L1440,90 L0,90 Z" fill="#e0f2fe" opacity="0.5" />
// // //           </svg>
// // //         </div>
// // //       </section>

// // //       {/* ── INTRO QUOTE ── */}
// // //       <section style={{ background: "#fff", padding: "72px 40px", borderBottom: "0.5px solid #e0f2fe" }}>
// // //         <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
// // //           <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg,#1d4ed8,#0ea5e9)", borderRadius: "2px", margin: "0 auto 28px" }} />
// // //           <blockquote style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(18px,2.2vw,24px)", fontWeight: 500, color: "#1e293b", lineHeight: 1.65, marginBottom: "28px", fontStyle: "italic" }}>
// // //             "We believe aquaculture's future depends on the health of the very ecosystems it relies upon. Our environmental commitment isn't a policy — it's the foundation of every decision we make."
// // //           </blockquote>
// // //           <div style={{ fontSize: "14px", fontWeight: 600, color: "#1d4ed8", marginBottom: "3px" }}>Dr. Ravi Shankar</div>
// // //           <div style={{ fontSize: "12px", color: "#94a3b8", letterSpacing: "0.02em" }}>Chief Science Officer, Innovare Biopharma LLP</div>
// // //         </div>
// // //       </section>

// // //       {/* ── SIX COMMITMENTS ── */}
// // //       <section style={{ background: "linear-gradient(135deg,#0c1a3a 0%,#0d2247 100%)", padding: "100px 0" }} ref={commitsSection.ref}>
// // //         <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 52px" }}>
// // //           <div style={{ textAlign: "center", marginBottom: "56px" }}>
// // //             <div style={{ fontSize: "11px", fontWeight: 600, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "14px" }}>Our Six Commitments</div>
// // //             <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(30px,4vw,52px)", fontWeight: 700, color: "#f0f9ff", lineHeight: 1.1, marginBottom: "16px" }}>
// // //               Built Around <span style={{ color: "#38bdf8" }}>Responsibility</span>
// // //             </h2>
// // //             <p style={{ fontSize: "15px", color: "rgba(240,249,255,0.45)", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto" }}>
// // //               Six binding environmental commitments that govern how we formulate, manufacture, and deliver every single product.
// // //             </p>
// // //           </div>
// // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
// // //             {commitments.map((c, i) => (
// // //               <CommitmentCard key={i} c={c} index={i} inView={commitsSection.inView} />
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ── SCORECARD ── */}
// // //       <section style={{ background: "linear-gradient(150deg,#0c1a3a 0%,#0e3a6e 100%)", padding: "100px 0", borderTop: "0.5px solid rgba(56,189,248,0.12)", borderBottom: "0.5px solid rgba(56,189,248,0.12)" }} ref={pillarsSection.ref}>
// // //         <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 52px" }}>
// // //           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
// // //             <div>
// // //               <div style={{ fontSize: "11px", fontWeight: 600, color: "#38bdf8", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "14px" }}>Environmental Scorecard</div>
// // //               <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(30px,4vw,52px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: "16px" }}>
// // //                 Measuring What <span style={{ color: "#38bdf8" }}>Matters Most</span>
// // //               </h2>
// // //               <p style={{ fontSize: "15px", color: "rgba(240,249,255,0.5)", lineHeight: 1.8, marginBottom: "24px" }}>
// // //                 Independent annual audits across five environmental pillars. Benchmarked against global aquaculture standards — GSSI, ASC, and GlobalGAP.
// // //               </p>
// // //               <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "rgba(240,249,255,0.35)" }}>
// // //                 <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#38bdf8", flexShrink: 0, boxShadow: "0 0 6px rgba(56,189,248,0.8)" }} />
// // //                 Audited by Bureau Veritas · 2024 Data
// // //               </div>
// // //             </div>
// // //             <div>
// // //               {pillars.map((p, i) => (
// // //                 <PillarBar key={i} {...p} active={pillarsSection.inView} delay={i * 180} />
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ── TIMELINE ── */}
// // //       <section style={{ background: "#f0f9ff", padding: "100px 0" }} ref={timelineSection.ref}>
// // //         <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 52px" }}>
// // //           <div style={{ textAlign: "center", marginBottom: "56px" }}>
// // //             <div style={{ fontSize: "11px", fontWeight: 600, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "14px" }}>Our Journey</div>
// // //             <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(30px,4vw,52px)", fontWeight: 700, color: "#0f172a", lineHeight: 1.1 }}>
// // //               Six Years of <span style={{ color: "#1d4ed8" }}>Environmental Action</span>
// // //             </h2>
// // //           </div>
// // //           <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
// // //             <div className="timeline-spine" />
// // //             {initiatives.map((item, i) => (
// // //               <TimelineItem key={i} item={item} index={i} inView={timelineSection.inView} />
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ── ECO PRODUCTS ── */}
// // //       <section style={{ background: "#fff", padding: "100px 0", borderTop: "0.5px solid #e0f2fe" }} ref={productsSection.ref}>
// // //         <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 52px" }}>
// // //           <div style={{ textAlign: "center", marginBottom: "56px" }}>
// // //             <div style={{ fontSize: "11px", fontWeight: 600, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "14px" }}>Eco-Certified Range</div>
// // //             <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(30px,4vw,52px)", fontWeight: 700, color: "#0f172a", lineHeight: 1.1 }}>
// // //               Products as Kind to <span style={{ color: "#1d4ed8" }}>Ocean as to Farm</span>
// // //             </h2>
// // //           </div>
// // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px", marginBottom: "36px" }}>
// // //             {ecoProducts.map((p, i) => (
// // //               <div key={i} className="eco-card-wrap" style={{
// // //                 background: "#f0f9ff", border: "0.5px solid #bae6fd", borderRadius: "20px",
// // //                 padding: "28px 22px", display: "flex", flexDirection: "column", gap: "8px",
// // //                 position: "relative", overflow: "hidden",
// // //                 boxShadow: "0 2px 12px rgba(14,165,233,0.06)",
// // //                 opacity: productsSection.inView ? 1 : 0,
// // //                 animation: productsSection.inView ? `riseUp 0.7s ${i * 0.12}s ease both` : "none",
// // //               }}>
// // //                 <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg,#1d4ed8,#0ea5e9)" }} />
// // //                 <div style={{ fontSize: "30px", marginTop: "4px" }}>{p.icon}</div>
// // //                 <h3 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "18px", fontWeight: 700, color: "#0f172a" }}>{p.name}</h3>
// // //                 <p style={{ fontSize: "12px", color: "#0ea5e9", fontWeight: 600 }}>✓ {p.claim}</p>
// // //                 <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "4px" }}>
// // //                   {p.tags.map((tag, j) => (
// // //                     <span key={j} className="eco-tag-item" style={{
// // //                       fontSize: "10px", fontWeight: 600,
// // //                       background: "rgba(14,165,233,0.08)", border: "0.5px solid rgba(14,165,233,0.25)",
// // //                       color: "#0369a1", padding: "3px 10px", borderRadius: "20px",
// // //                       letterSpacing: "0.05em", textTransform: "uppercase",
// // //                     }}>{tag}</span>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //           {/* Certs strip */}
// // //           <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", paddingTop: "28px", borderTop: "0.5px solid #e0f2fe" }}>
// // //             {["GMP Certified", "ISO 14001", "Zero Toxicity", "Bio-Safe", "GSSI Aligned", "ZLD Facility"].map((cert, i) => (
// // //               <div key={i} className="cert-chip" style={{
// // //                 display: "flex", alignItems: "center", gap: "6px",
// // //                 background: "rgba(14,165,233,0.06)", border: "0.5px solid rgba(14,165,233,0.2)",
// // //                 color: "#0369a1", fontSize: "12px", fontWeight: 500,
// // //                 padding: "6px 16px", borderRadius: "20px",
// // //               }}>
// // //                 <span style={{ color: "#0ea5e9", fontWeight: 700 }}>✓</span> {cert}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ── PLEDGE BANNER ── */}
// // //       <section style={{
// // //         background: "linear-gradient(135deg,#0c1a3a 0%,#1e3a8a 50%,#0c1a3a 100%)",
// // //         padding: "120px 52px", textAlign: "center",
// // //         position: "relative", overflow: "hidden",
// // //       }} ref={pledgeSection.ref}>
// // //         {/* Concentric rings */}
// // //         {[500, 700, 900].map((size, i) => (
// // //           <div key={i} style={{
// // //             position: "absolute", top: "50%", left: "50%",
// // //             width: `${size}px`, height: `${size}px`, borderRadius: "50%",
// // //             border: `0.5px solid rgba(56,189,248,${0.12 - i * 0.03})`,
// // //             transform: "translate(-50%,-50%)", pointerEvents: "none",
// // //           }} />
// // //         ))}
// // //         {/* Rotating ring */}
// // //         <div style={{
// // //           position: "absolute", top: "50%", left: "50%",
// // //           width: "600px", height: "600px", borderRadius: "50%",
// // //           border: "1px dashed rgba(56,189,248,0.15)",
// // //           animation: "rotateSlow 30s linear infinite",
// // //           pointerEvents: "none",
// // //         }} />

// // //         <div style={{ position: "relative", zIndex: 1 }}>
// // //           <div style={{ fontSize: "52px", marginBottom: "20px", opacity: pledgeSection.inView ? 1 : 0, animation: pledgeSection.inView ? "riseUp 0.8s ease both" : "none" }}>🌊</div>
// // //           <h2 style={{
// // //             fontFamily: "'Clash Display',sans-serif",
// // //             fontSize: "clamp(34px,5vw,60px)", fontWeight: 700, color: "#f0f9ff",
// // //             lineHeight: 1.1, marginBottom: "20px",
// // //             opacity: pledgeSection.inView ? 1 : 0,
// // //             animation: pledgeSection.inView ? "riseUp 0.8s 0.1s ease both" : "none",
// // //           }}>
// // //             Our Pledge to the Planet
// // //           </h2>
// // //           <p style={{
// // //             fontSize: "16px", color: "rgba(240,249,255,0.6)", lineHeight: 1.8,
// // //             maxWidth: "560px", margin: "0 auto 40px", fontStyle: "italic",
// // //             opacity: pledgeSection.inView ? 1 : 0,
// // //             animation: pledgeSection.inView ? "riseUp 0.8s 0.2s ease both" : "none",
// // //           }}>
// // //             By 2030, every litre of product we manufacture will be carbon-neutral, every gram of packaging recyclable, and every farm we serve will have the tools to operate in harmony with the natural world.
// // //           </p>
// // //           <div style={{
// // //             display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginBottom: "56px",
// // //             opacity: pledgeSection.inView ? 1 : 0,
// // //             animation: pledgeSection.inView ? "riseUp 0.8s 0.3s ease both" : "none",
// // //           }}>
// // //             <button className="cta-primary">Join Our Green Mission</button>
// // //             <button className="cta-outline">Download ESG Report</button>
// // //           </div>
// // //           <div style={{
// // //             display: "flex", gap: "64px", justifyContent: "center", flexWrap: "wrap",
// // //             paddingTop: "40px", borderTop: "0.5px solid rgba(56,189,248,0.15)",
// // //             opacity: pledgeSection.inView ? 1 : 0,
// // //             animation: pledgeSection.inView ? "riseUp 0.8s 0.45s ease both" : "none",
// // //           }}>
// // //             {[{ val: "2030", label: "Net-Zero Target" }, { val: "100%", label: "Recyclable Packaging" }, { val: "0", label: "Ecosystem Harm" }].map((kpi, i) => (
// // //               <div key={i} style={{ textAlign: "center" }}>
// // //                 <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "40px", fontWeight: 700, color: "#38bdf8", lineHeight: 1, marginBottom: "6px" }}>{kpi.val}</div>
// // //                 <div style={{ fontSize: "11px", color: "rgba(240,249,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 }}>{kpi.label}</div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ── FOOTER ── */}
// // //       <footer style={{ background: "#0a1628", borderTop: "0.5px solid rgba(56,189,248,0.1)", padding: "48px 52px" }}>
// // //         <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
// // //           <div>
// // //             <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "17px", color: "#e0f2fe", fontWeight: 600, marginBottom: "4px" }}>🌊 Innovare Biopharma</div>
// // //             <p style={{ fontSize: "12px", color: "rgba(224,242,254,0.3)" }}>Science that thrives underwater. Earth that thrives above.</p>
// // //           </div>
// // //           <div style={{ display: "flex", gap: "28px" }}>
// // //             {["Environment", "Products", "Certification", "Research", "Contact"].map((l, i) => (
// // //               <a key={i} href="#" style={{ color: "rgba(224,242,254,0.35)", fontSize: "13px", textDecoration: "none" }}>{l}</a>
// // //             ))}
// // //           </div>
// // //           <div style={{ fontSize: "11px", color: "rgba(224,242,254,0.18)", letterSpacing: "0.02em" }}>
// // //             © 2025 Innovare Biopharma LLP · GMP Certified · ISO 9001:2015 · ISO 14001
// // //           </div>
// // //         </div>
// // //       </footer>
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { useEffect, useRef, useState, useCallback } from "react";
// // import Link from "next/link";
// // import Footer from "@/components/Footer";

// // /* ══════════════════════════════════════════════════
// //    BRAND TOKENS — matches rest of site
// // ══════════════════════════════════════════════════ */
// // const B = {
// //   blue:      "#2A5DA8",
// //   blueDark:  "#1e4a8a",
// //   blueDeep:  "#0f2f5e",
// //   blueMid:   "#eff6ff",
// //   blueLight: "#dbeafe",
// //   teal:      "#0891b2",
// //   tealLight: "#e0f2fe",
// //   navy:      "#0f172a",
// //   slate:     "#475569",
// //   muted:     "#94a3b8",
// //   border:    "#e2e8f0",
// //   surface:   "#f8fafc",
// //   pageBg:    "#f0f4f8",
// //   green:     "#15803d",
// //   greenBg:   "#f0fdf4",
// //   greenBd:   "#bbf7d0",
// //   amber:     "#d97706",
// //   amberBg:   "#fffbeb",
// //   red:       "#dc2626",
// // };

// // /* ══════════════════════════════════════════════════
// //    HOOKS
// // ══════════════════════════════════════════════════ */
// // function useReveal(threshold = 0.1) {
// //   const ref = useRef<HTMLDivElement>(null);
// //   const [vis, setVis] = useState(false);
// //   useEffect(() => {
// //     const el = ref.current; if (!el) return;
// //     const obs = new IntersectionObserver(
// //       ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
// //       { threshold }
// //     );
// //     obs.observe(el);
// //     return () => obs.disconnect();
// //   }, []);
// //   return [ref, vis] as const;
// // }

// // function useCounter(target: number, active: boolean, dur = 1600) {
// //   const [val, setVal] = useState(0);
// //   useEffect(() => {
// //     if (!active) return;
// //     let start: number | null = null;
// //     const step = (ts: number) => {
// //       if (!start) start = ts;
// //       const p = Math.min((ts - start) / dur, 1);
// //       setVal(Math.round(p * target));
// //       if (p < 1) requestAnimationFrame(step);
// //     };
// //     requestAnimationFrame(step);
// //   }, [active, target, dur]);
// //   return val;
// // }

// // /* ══════════════════════════════════════════════════
// //    DATA
// // ══════════════════════════════════════════════════ */
// // const COMMITMENTS = [
// //   {
// //     icon: "🌿", title: "Zero Harmful Residues", metric: "100%", metricLabel: "Residue-Free",
// //     desc: "Every Innovare formulation is tested to confirm zero persistence in aquatic environments — safe for shrimp, fish, pond sediment, and the wider food chain.",
// //     color: B.teal,
// //   },
// //   {
// //     icon: "♻️", title: "Eco-Responsible Packaging", metric: "80%", metricLabel: "Recycled Materials",
// //     desc: "Our packaging uses 80% recycled polymer content. We work with waste aggregators in Andhra Pradesh and Telangana to close the packaging loop.",
// //     color: B.blue,
// //   },
// //   {
// //     icon: "💧", title: "Water Stewardship", metric: "60%", metricLabel: "Water Reduction",
// //     desc: "Our Hyderabad manufacturing unit operates with 60% less water than the industry average, with effluent treated to near-potable standards before any discharge.",
// //     color: "#7c3aed",
// //   },
// //   {
// //     icon: "🌍", title: "Carbon Neutrality Goal", metric: "2030", metricLabel: "Net-Zero Target",
// //     desc: "Committed to net-zero operations by 2030 through renewable energy, operational efficiency improvements, and verified offset partnerships.",
// //     color: B.green,
// //   },
// //   {
// //     icon: "🐟", title: "Aquatic Biodiversity", metric: "0", metricLabel: "Ecosystem Harm",
// //     desc: "Every ingredient is evaluated for ecotoxicity before inclusion. We maintain a strict exclusion list of substances harmful to non-target aquatic species.",
// //     color: B.amber,
// //   },
// //   {
// //     icon: "🌱", title: "Coastal Restoration", metric: "10K+", metricLabel: "Trees Planted",
// //     desc: "For every tonne of product sold, we fund mangrove restoration along the Andhra Pradesh and Odisha coastline — critical nursery habitat for aquatic life.",
// //     color: "#dc2626",
// //   },
// // ];

// // const INITIATIVES = [
// //   { year: "2019", title: "Green Manufacturing Pledge", desc: "Transitioned our primary Hyderabad facility to partially solar-powered operations, reducing Scope 1 emissions by 42% in the first operational year.", tag: "Energy", color: B.amber },
// //   { year: "2021", title: "Bio-Safe Formulation Standard", desc: "Introduced our proprietary ecotoxicity screening protocol, now applied to every new product development project at Innovare Biopharma.", tag: "Research", color: B.green },
// //   { year: "2022", title: "Coastal Restoration Partnership", desc: "Partnered with local fishing cooperatives in coastal Andhra Pradesh and Odisha to plant over 10,000 mangrove saplings across three districts.", tag: "Restoration", color: B.teal },
// //   { year: "2023", title: "Zero-Liquid Discharge Achieved", desc: "Our Hyderabad manufacturing facility achieved ZLD certification — all process water is now recycled and recirculated internally with zero discharge.", tag: "Water", color: B.blue },
// //   { year: "2024", title: "Recycled Packaging Rollout", desc: "Replaced all HDPE containers with 80% recycled polymer alternatives across the full product range, diverting over 12 tonnes of virgin plastic annually.", tag: "Packaging", color: "#7c3aed" },
// //   { year: "2025", title: "Net-Zero 2030 Roadmap", desc: "Published our comprehensive Net-Zero 2030 roadmap with quarterly reporting, setting binding targets across manufacturing, logistics, and supply chain.", tag: "Climate", color: "#dc2626" },
// // ];

// // const PILLARS = [
// //   { label: "Water Safety Score",     icon: "💧", pct: 96, color: B.teal   },
// //   { label: "Aquatic Biodiversity",   icon: "🐟", pct: 94, color: B.blue   },
// //   { label: "Soil / Sediment Impact", icon: "🌱", pct: 91, color: B.green  },
// //   { label: "Carbon Offset Progress", icon: "♻️", pct: 78, color: B.amber  },
// //   { label: "Air Quality Compliance", icon: "🌬️", pct: 88, color: "#7c3aed"},
// // ];

// // const ECO_PRODUCTS = [
// //   {
// //     name: "i-PROPONDVARE", claim: "Pond-safe beneficial bacteria only", icon: "🦠",
// //     tags: ["Zero Toxicity", "Bio-Safe", "Probiotic"],
// //     desc: "Water & soil probiotic that eliminates ammonia and H₂S without chemical intervention.",
// //     color: B.teal,
// //   },
// //   {
// //     name: "i-VIBRIOVARE", claim: "No antibiotics — competitive exclusion", icon: "🛡️",
// //     tags: ["Antibiotic-Free", "Eco-Safe"],
// //     desc: "Vibrio control through natural Bacillus strains. No chemical residue in water or sediment.",
// //     color: B.blue,
// //   },
// //   {
// //     name: "i-PHYTOVARE", claim: "100% plant-derived active ingredients", icon: "🌿",
// //     tags: ["Botanical", "Organic", "Natural"],
// //     desc: "Phytogenic growth promoter from plant extracts — zero synthetic additives.",
// //     color: B.green,
// //   },
// //   {
// //     name: "i-OXYVARE", claim: "Calcium peroxide — naturally degrades", icon: "💧",
// //     tags: ["pH Neutral", "Biodegradable"],
// //     desc: "Emergency oxygen release via calcium peroxide. Leaves only calcium and oxygen — no residue.",
// //     color: "#7c3aed",
// //   },
// // ];

// // /* ══════════════════════════════════════════════════
// //    PILLAR BAR COMPONENT
// // ══════════════════════════════════════════════════ */
// // function PillarBar({ label, icon, pct, color, active, delay }: {
// //   label: string; icon: string; pct: number; color: string; active: boolean; delay: number;
// // }) {
// //   const [w, setW] = useState(0);
// //   const count = useCounter(pct, active);
// //   useEffect(() => {
// //     if (!active) return;
// //     const t = setTimeout(() => setW(pct), delay);
// //     return () => clearTimeout(t);
// //   }, [active, pct, delay]);

// //   return (
// //     <div style={{ marginBottom: 20 }}>
// //       <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
// //         <span style={{ fontSize: 16 }}>{icon}</span>
// //         <span style={{ flex: 1, fontSize: 13, color: B.slate, fontWeight: 500 }}>{label}</span>
// //         <span style={{ fontSize: 18, fontWeight: 800, color }}>{count}%</span>
// //       </div>
// //       <div style={{ height: 7, background: B.border, borderRadius: 7, overflow: "hidden" }}>
// //         <div style={{
// //           height: "100%", borderRadius: 7,
// //           background: `linear-gradient(90deg, ${color}88, ${color})`,
// //           boxShadow: `0 0 10px ${color}44`,
// //           width: `${w}%`,
// //           transition: "width 1.4s cubic-bezier(.34,1.2,.64,1)",
// //         }} />
// //       </div>
// //     </div>
// //   );
// // }

// // /* ══════════════════════════════════════════════════
// //    HERO
// // ══════════════════════════════════════════════════ */
// // function Hero() {
// //   return (
// //     <section style={{
// //       background: `linear-gradient(135deg, ${B.blueDeep} 0%, ${B.blue} 60%, ${B.teal} 100%)`,
// //       position: "relative", overflow: "hidden", padding: "120px 48px 100px",
// //     }}>
// //       <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
// //       <div style={{ position: "absolute", right: "-80px", top: "-80px", width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
// //       <div style={{ position: "absolute", right: "12%", bottom: "-80px", width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
// //       <div style={{ position: "absolute", left: "-60px", bottom: "10%", width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

// //       <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>
// //         {/* Breadcrumb */}
// //         <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 32 }}>
// //           <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
// //           <span>/</span>
// //           <span style={{ color: "#fff" }}>Environment</span>
// //         </div>

// //         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
// //           <div>
// //             <div style={{
// //               display: "inline-flex", alignItems: "center", gap: 8,
// //               padding: "6px 16px", borderRadius: 100,
// //               background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
// //               fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.9)",
// //               letterSpacing: 1.2, textTransform: "uppercase" as const, marginBottom: 28,
// //             }}>
// //               <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5eead4", display: "inline-block" }} />
// //               Environmental Stewardship · Since 2019
// //             </div>

// //             <h1 style={{
// //               fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 800,
// //               color: "#fff", lineHeight: 1.1, letterSpacing: -1, marginBottom: 20,
// //             }}>
// //               Protecting the Oceans<br />
// //               <span style={{ color: "#5eead4" }}>We Rely On</span>
// //             </h1>

// //             <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, marginBottom: 40, maxWidth: 480 }}>
// //               Every product Innovare Biopharma formulates, every facility we run —
// //               designed to leave aquatic ecosystems healthier than we found them.
// //               Our environmental commitment is not a policy. It is our purpose.
// //             </p>

// //             <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
// //               <a href="#commitments" style={{
// //                 display: "inline-flex", alignItems: "center", gap: 8,
// //                 padding: "13px 28px", borderRadius: 40,
// //                 background: "#fff", color: B.blue, fontSize: 14, fontWeight: 700,
// //                 textDecoration: "none",
// //               }}>
// //                 Our Commitments →
// //               </a>
// //               <a href="#initiatives" style={{
// //                 display: "inline-flex", alignItems: "center", gap: 8,
// //                 padding: "12px 24px", borderRadius: 40,
// //                 border: "1.5px solid rgba(255,255,255,0.35)", background: "transparent",
// //                 color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none",
// //               }}>
// //                 View Initiatives
// //               </a>
// //             </div>
// //           </div>

// //           {/* Stat badges */}
// //           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
// //             {[
// //               { icon: "🌍", val: "Net-Zero", sub: "Target by 2030", },
// //               { icon: "🌱", val: "10,000+", sub: "Mangrove Trees Planted", },
// //               { icon: "💧", val: "ZLD", sub: "Zero Liquid Discharge", },
// //               { icon: "♻️", val: "GMP+ISO", sub: "14001 Certified", },
// //             ].map((s, i) => (
// //               <div key={i} style={{
// //                 background: "rgba(255,255,255,0.1)", borderRadius: 16,
// //                 border: "1px solid rgba(255,255,255,0.15)",
// //                 padding: "22px 20px", backdropFilter: "blur(10px)",
// //               }}>
// //                 <span style={{ fontSize: 28, display: "block", marginBottom: 8 }}>{s.icon}</span>
// //                 <div style={{ fontSize: 26, fontWeight: 800, color: "#5eead4", lineHeight: 1 }}>{s.val}</div>
// //                 <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 6, lineHeight: 1.4 }}>{s.sub}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ══════════════════════════════════════════════════
// //    INTRO QUOTE
// // ══════════════════════════════════════════════════ */
// // function QuoteSection() {
// //   const [ref, vis] = useReveal(0.2);
// //   return (
// //     <section style={{ background: "#fff", padding: "72px 48px", borderBottom: `1px solid ${B.border}` }}>
// //       <div ref={ref} style={{
// //         maxWidth: 680, margin: "0 auto", textAlign: "center",
// //         opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)",
// //         transition: "all .7s ease",
// //       }}>
// //         <div style={{ width: 40, height: 3, background: `linear-gradient(90deg, ${B.blue}, ${B.teal})`, borderRadius: 2, margin: "0 auto 28px" }} />
// //         <blockquote style={{
// //           fontSize: "clamp(17px, 2vw, 22px)", fontWeight: 600,
// //           color: B.navy, lineHeight: 1.7, marginBottom: 28, fontStyle: "italic",
// //         }}>
// //           "Aquaculture's future depends on the health of the very ecosystems it relies upon.
// //           Our environmental commitment is the foundation of every decision we make at Innovare Biopharma."
// //         </blockquote>
// //         <div style={{ fontSize: 14, fontWeight: 700, color: B.blue, marginBottom: 4 }}>
// //           Innovare Biopharma LLP — Leadership Team
// //         </div>
// //         <div style={{ fontSize: 12, color: B.muted, letterSpacing: 0.5 }}>
// //           Hyderabad, Telangana, India
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ══════════════════════════════════════════════════
// //    SIX COMMITMENTS
// // ══════════════════════════════════════════════════ */
// // function CommitmentsSection() {
// //   const [ref, vis] = useReveal(0.05);
// //   const [hovered, setHovered] = useState<number | null>(null);

// //   return (
// //     <section id="commitments" style={{
// //       background: `linear-gradient(135deg, ${B.blueDeep} 0%, #0d2247 100%)`,
// //       padding: "100px 48px",
// //     }}>
// //       <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
// //         {/* Header */}
// //         <div style={{ textAlign: "center", marginBottom: 56, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)", transition: "all .7s" }}>
// //           <span style={{ fontSize: 11, fontWeight: 700, color: "#5eead4", letterSpacing: 2, textTransform: "uppercase" as const }}>Our Six Commitments</span>
// //           <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: -0.5, marginTop: 12, marginBottom: 16 }}>
// //             Built Around <span style={{ color: "#5eead4" }}>Responsibility</span>
// //           </h2>
// //           <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 480, margin: "0 auto" }}>
// //             Six binding environmental commitments that govern how we formulate, manufacture,
// //             and deliver every Innovare Biopharma product.
// //           </p>
// //         </div>

// //         <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
// //           {COMMITMENTS.map((c, i) => (
// //             <div
// //               key={i}
// //               onMouseEnter={() => setHovered(i)}
// //               onMouseLeave={() => setHovered(null)}
// //               style={{
// //                 borderRadius: 20, padding: "32px 26px",
// //                 background: hovered === i ? `${c.color}12` : "rgba(255,255,255,0.04)",
// //                 border: `1px solid ${hovered === i ? `${c.color}40` : "rgba(255,255,255,0.08)"}`,
// //                 transform: hovered === i ? "translateY(-6px)" : "none",
// //                 boxShadow: hovered === i ? `0 20px 50px ${c.color}20` : "none",
// //                 opacity: vis ? 1 : 0,
// //                 transition: `all .3s ease, opacity .6s ${i * 0.08}s ease, transform .6s ${i * 0.08}s ease`,
// //                 cursor: "default",
// //               }}
// //             >
// //               <div style={{ fontSize: 30, marginBottom: 12 }}>{c.icon}</div>
// //               <div style={{ fontSize: 42, fontWeight: 800, lineHeight: 1, marginBottom: 2, color: c.color }}>{c.metric}</div>
// //               <div style={{ fontSize: 11, textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 14, fontWeight: 600, color: `${c.color}99` }}>{c.metricLabel}</div>
// //               <h3 style={{ fontSize: 16, fontWeight: 700, color: "#f0f9ff", marginBottom: 10 }}>{c.title}</h3>
// //               <p style={{ fontSize: 13, color: "rgba(240,249,255,0.48)", lineHeight: 1.75 }}>{c.desc}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ══════════════════════════════════════════════════
// //    ENVIRONMENTAL SCORECARD
// // ══════════════════════════════════════════════════ */
// // function ScorecardSection() {
// //   const [ref, vis] = useReveal(0.15);

// //   return (
// //     <section style={{
// //       background: `linear-gradient(150deg, ${B.blueDeep} 0%, #0e3a6e 100%)`,
// //       padding: "100px 48px",
// //       borderTop: "1px solid rgba(255,255,255,0.06)",
// //     }}>
// //       <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
// //         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
// //           {/* Left text */}
// //           <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(-24px)", transition: "all .7s" }}>
// //             <span style={{ fontSize: 11, fontWeight: 700, color: "#5eead4", letterSpacing: 2, textTransform: "uppercase" as const }}>Environmental Scorecard</span>
// //             <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: -0.5, marginTop: 12, marginBottom: 16 }}>
// //               Measuring What <span style={{ color: "#5eead4" }}>Matters Most</span>
// //             </h2>
// //             <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 28 }}>
// //               Independent annual audits across five environmental pillars.
// //               Benchmarked against GSSI, ASC, and GlobalGAP aquaculture standards.
// //             </p>
// //             <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
// //               {["GSSI Aligned", "ASC Standards", "ISO 14001", "ZLD Certified"].map(c => (
// //                 <div key={c} style={{
// //                   fontSize: 11, padding: "4px 14px", borderRadius: 100, fontWeight: 600,
// //                   background: "rgba(94,234,212,0.1)", border: "1px solid rgba(94,234,212,0.25)",
// //                   color: "#5eead4",
// //                 }}>{c}</div>
// //               ))}
// //             </div>
// //             <div style={{ marginTop: 24, fontSize: 12, color: "rgba(255,255,255,0.28)", display: "flex", alignItems: "center", gap: 8 }}>
// //               <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#5eead4", display: "inline-block" }} />
// //               Audited annually · 2024 data
// //             </div>
// //           </div>

// //           {/* Right bars */}
// //           <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(24px)", transition: "all .7s .15s" }}>
// //             {PILLARS.map((p, i) => (
// //               <PillarBar key={i} {...p} active={vis} delay={i * 180} />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ══════════════════════════════════════════════════
// //    TIMELINE
// // ══════════════════════════════════════════════════ */
// // function TimelineSection() {
// //   const [ref, vis] = useReveal(0.05);

// //   return (
// //     <section id="initiatives" style={{ background: B.pageBg, padding: "100px 48px" }}>
// //       <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
// //         <div style={{ textAlign: "center", marginBottom: 60, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)", transition: "all .7s" }}>
// //           <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" as const }}>Our Journey</span>
// //           <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 800, color: B.navy, lineHeight: 1.1, letterSpacing: -0.5, marginTop: 12 }}>
// //             Six Years of <span style={{ color: B.blue }}>Environmental Action</span>
// //           </h2>
// //         </div>

// //         {/* Timeline */}
// //         <div style={{ position: "relative" }}>
// //           {/* Centre spine */}
// //           <div style={{
// //             position: "absolute", left: "50%", top: 0, bottom: 0, width: 1,
// //             background: `linear-gradient(to bottom, transparent, ${B.border} 8%, ${B.border} 92%, transparent)`,
// //             transform: "translateX(-50%)",
// //           }} />

// //           {INITIATIVES.map((item, i) => {
// //             const isRight = i % 2 === 1;
// //             return (
// //               <div key={i} style={{
// //                 display: "flex", alignItems: "center",
// //                 flexDirection: isRight ? "row-reverse" : "row",
// //                 paddingBottom: 52,
// //                 opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)",
// //                 transition: `all .6s ${i * 0.1}s ease`,
// //               }}>
// //                 {/* Content */}
// //                 <div style={{ flex: 1, padding: "0 40px", textAlign: isRight ? "right" : "left" }}>
// //                   <span style={{
// //                     fontSize: 10, fontWeight: 700, textTransform: "uppercase" as const,
// //                     letterSpacing: "0.1em", padding: "3px 12px", borderRadius: 20,
// //                     display: "inline-block", marginBottom: 8,
// //                     background: `${item.color}14`, color: item.color,
// //                   }}>{item.tag}</span>
// //                   <div style={{ fontSize: 36, fontWeight: 800, color: B.blue, lineHeight: 1, marginBottom: 6 }}>{item.year}</div>
// //                   <h3 style={{ fontSize: 17, fontWeight: 700, color: B.navy, marginBottom: 8 }}>{item.title}</h3>
// //                   <p style={{ fontSize: 13, color: B.slate, lineHeight: 1.75, maxWidth: 340, marginLeft: isRight ? "auto" : 0 }}>{item.desc}</p>
// //                 </div>

// //                 {/* Node */}
// //                 <div style={{ flexShrink: 0, zIndex: 1 }}>
// //                   <div style={{
// //                     width: 14, height: 14, borderRadius: "50%",
// //                     border: `2px solid ${item.color}`,
// //                     background: "#fff",
// //                     boxShadow: `0 0 12px ${item.color}55`,
// //                   }} />
// //                 </div>

// //                 <div style={{ flex: 1 }} />
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ══════════════════════════════════════════════════
// //    ECO PRODUCTS
// // ══════════════════════════════════════════════════ */
// // function EcoProductsSection() {
// //   const [ref, vis] = useReveal(0.08);
// //   const [hovered, setHovered] = useState<number | null>(null);

// //   return (
// //     <section style={{ background: "#fff", padding: "100px 48px", borderTop: `1px solid ${B.border}` }}>
// //       <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
// //         <div style={{ textAlign: "center", marginBottom: 56, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)", transition: "all .7s" }}>
// //           <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" as const }}>Eco-Safe Range</span>
// //           <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 800, color: B.navy, lineHeight: 1.1, letterSpacing: -0.5, marginTop: 12, marginBottom: 16 }}>
// //             Products as Kind to Ocean<br />as to Farm
// //           </h2>
// //           <p style={{ fontSize: 15, color: B.slate, maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
// //             These Innovare Biopharma products are specifically highlighted for their
// //             minimal environmental footprint and ecologically responsible formulation.
// //           </p>
// //         </div>

// //         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 36 }}>
// //           {ECO_PRODUCTS.map((p, i) => (
// //             <div
// //               key={i}
// //               onMouseEnter={() => setHovered(i)}
// //               onMouseLeave={() => setHovered(null)}
// //               style={{
// //                 background: B.surface, border: `1.5px solid ${hovered === i ? p.color : B.border}`,
// //                 borderRadius: 20, padding: "28px 22px",
// //                 display: "flex", flexDirection: "column", gap: 8,
// //                 position: "relative", overflow: "hidden",
// //                 boxShadow: hovered === i ? `0 16px 40px ${p.color}16` : "0 2px 8px rgba(0,0,0,0.04)",
// //                 transform: hovered === i ? "translateY(-6px)" : "none",
// //                 opacity: vis ? 1 : 0, transition: `all .3s ease, opacity .6s ${i * 0.1}s ease`,
// //               }}
// //             >
// //               {/* Top accent bar */}
// //               <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${p.color}, ${p.color}66)` }} />
// //               <div style={{ fontSize: 30, marginTop: 6 }}>{p.icon}</div>
// //               <h3 style={{ fontSize: 16, fontWeight: 800, color: B.navy }}>{p.name}</h3>
// //               <p style={{ fontSize: 12, color: B.teal, fontWeight: 600 }}>✓ {p.claim}</p>
// //               <p style={{ fontSize: 12.5, color: B.slate, lineHeight: 1.6, flex: 1 }}>{p.desc}</p>
// //               <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
// //                 {p.tags.map((tag, j) => (
// //                   <span key={j} style={{
// //                     fontSize: 10, fontWeight: 600,
// //                     background: `${p.color}10`, border: `1px solid ${p.color}25`,
// //                     color: p.color, padding: "3px 10px", borderRadius: 20,
// //                     letterSpacing: "0.05em", textTransform: "uppercase" as const,
// //                   }}>{tag}</span>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Certification strip */}
// //         <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", paddingTop: 28, borderTop: `1px solid ${B.border}` }}>
// //           {["GMP Certified", "ISO 14001", "Zero Toxicity", "Bio-Safe", "GSSI Aligned", "ZLD Facility", "CAA Registered", "Antibiotic-Free"].map(cert => (
// //             <div key={cert} style={{
// //               display: "flex", alignItems: "center", gap: 6,
// //               background: B.tealLight, border: `1px solid ${B.teal}30`,
// //               color: B.teal, fontSize: 12, fontWeight: 600,
// //               padding: "6px 16px", borderRadius: 20,
// //             }}>
// //               <span style={{ color: B.teal, fontWeight: 800 }}>✓</span> {cert}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ══════════════════════════════════════════════════
// //    STATS BANNER
// // ══════════════════════════════════════════════════ */
// // const STATS = [
// //   { icon: "🌊", n: 60, suffix: "%", label: "Less water than industry avg", color: B.teal },
// //   { icon: "🌱", n: 10, suffix: "K+", label: "Mangrove trees planted", color: B.green },
// //   { icon: "♻️", n: 80, suffix: "%", label: "Recycled packaging content", color: "#7c3aed" },
// //   { icon: "💧", n: 100, suffix: "%", label: "Residue-free formulations", color: B.blue },
// // ];

// // function StatsSection() {
// //   const [ref, vis] = useReveal(0.15);
// //   return (
// //     <section style={{
// //       background: `linear-gradient(135deg, ${B.blueDeep} 0%, ${B.blue} 100%)`,
// //       padding: "80px 48px", position: "relative", overflow: "hidden",
// //     }}>
// //       <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
// //       <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
// //         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
// //           {STATS.map((s, i) => {
// //             const count = useCounter(s.n, vis);
// //             return (
// //               <div key={i} style={{
// //                 textAlign: "center", padding: "36px 20px",
// //                 background: "rgba(255,255,255,0.08)", borderRadius: 20,
// //                 border: "1px solid rgba(255,255,255,0.12)",
// //                 opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)",
// //                 transition: `all .6s ${i * 0.1}s ease`,
// //               }}>
// //                 <span style={{ fontSize: 32, display: "block", marginBottom: 12 }}>{s.icon}</span>
// //                 <div style={{ fontSize: 46, fontWeight: 800, color: "#fff", lineHeight: 1 }}>
// //                   {count}{s.suffix}
// //                 </div>
// //                 <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 10, lineHeight: 1.4 }}>{s.label}</div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ══════════════════════════════════════════════════
// //    PLEDGE / CTA
// // ══════════════════════════════════════════════════ */
// // function PledgeSection() {
// //   const [ref, vis] = useReveal(0.15);
// //   return (
// //     <section style={{
// //       background: `linear-gradient(135deg, ${B.blueDeep} 0%, ${B.blue} 60%, ${B.teal} 100%)`,
// //       padding: "120px 48px", textAlign: "center",
// //       position: "relative", overflow: "hidden",
// //     }}>
// //       <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
// //       {/* Rings */}
// //       {[400, 560, 720].map((s, i) => (
// //         <div key={i} style={{
// //           position: "absolute", top: "50%", left: "50%",
// //           width: s, height: s, borderRadius: "50%",
// //           border: `1px solid rgba(255,255,255,${0.06 - i * 0.015})`,
// //           transform: "translate(-50%, -50%)", pointerEvents: "none",
// //         }} />
// //       ))}

// //       <div ref={ref} style={{
// //         position: "relative", zIndex: 1, maxWidth: 680, margin: "0 auto",
// //         opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)",
// //         transition: "all .7s ease",
// //       }}>
// //         <div style={{ fontSize: 52, marginBottom: 20 }}>🌊</div>

// //         <div style={{
// //           display: "inline-flex", alignItems: "center", gap: 8,
// //           padding: "6px 16px", borderRadius: 100,
// //           background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
// //           fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.9)",
// //           letterSpacing: 1.2, textTransform: "uppercase" as const, marginBottom: 28,
// //         }}>
// //           <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5eead4", display: "inline-block" }} />
// //           Our Pledge to the Planet
// //         </div>

// //         <h2 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: -1, marginBottom: 20 }}>
// //           By 2030, every gram of our product will be carbon-neutral.
// //         </h2>
// //         <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginBottom: 44, fontStyle: "italic" }}>
// //           Every litre manufactured: carbon-neutral. Every gram of packaging: recyclable.
// //           Every farm we serve: equipped to operate in harmony with the natural world.
// //         </p>

// //         <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
// //           <Link href="/products" style={{
// //             display: "inline-flex", alignItems: "center", gap: 8,
// //             padding: "14px 32px", borderRadius: 40,
// //             background: "#fff", color: B.blue, fontSize: 14, fontWeight: 700, textDecoration: "none",
// //           }}>
// //             Browse Eco-Safe Products →
// //           </Link>
// //           <a href="mailto:info@innovarebiopharma.com" style={{
// //             display: "inline-flex", alignItems: "center", gap: 8,
// //             padding: "13px 28px", borderRadius: 40,
// //             border: "1.5px solid rgba(255,255,255,0.35)", background: "transparent",
// //             color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none",
// //           }}>
// //             📧 Contact Our Team
// //           </a>
// //         </div>

// //         {/* KPIs */}
// //         <div style={{ display: "flex", gap: 56, justifyContent: "center", flexWrap: "wrap", paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
// //           {[
// //             { val: "2030", label: "Net-Zero Target" },
// //             { val: "100%", label: "Recyclable Packaging" },
// //             { val: "0", label: "Ecosystem Harm" },
// //           ].map((kpi, i) => (
// //             <div key={i} style={{ textAlign: "center" }}>
// //               <div style={{ fontSize: 38, fontWeight: 800, color: "#5eead4", lineHeight: 1, marginBottom: 6 }}>{kpi.val}</div>
// //               <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" as const, letterSpacing: "0.1em", fontWeight: 600 }}>{kpi.label}</div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ══════════════════════════════════════════════════
// //    ROOT
// // ══════════════════════════════════════════════════ */
// // export default function EnvironmentPage() {
// //   return (
// //     <main style={{ background: B.pageBg }}>
// //       <Hero />
// //       <QuoteSection />
// //       <CommitmentsSection />
// //       <ScorecardSection />
// //       <TimelineSection />
// //       <EcoProductsSection />
// //       <StatsSection />
// //       <PledgeSection />
// //       <Footer />
// //     </main>
// //   );
// // }
// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { Center } from "@react-three/drei";
// import Footer from "@/components/Footer";

// const B = {
//   blue:      "#2A5DA8",
//   blueDark:  "#1e4a8a",
//   blueDeep:  "#0f2f5e",
//   blueMid:   "#eff6ff",
//   blueLight: "#dbeafe",
//   teal:      "#0891b2",
//   tealLight: "#e0f2fe",
//   navy:      "#0f172a",
//   slate:     "#475569",
//   muted:     "#94a3b8",
//   border:    "#e2e8f0",
//   surface:   "#f8fafc",
//   pageBg:    "#f0f4f8",
//   green:     "#15803d",
//   greenBg:   "#f0fdf4",
//   greenBd:   "#bbf7d0",
//   amber:     "#d97706",
//   red:       "#dc2626",
// };

// /* ── Reveal hook ── */
// function useReveal(threshold = 0.1) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [vis, setVis] = useState(false);
//   useEffect(() => {
//     const el = ref.current; if (!el) return;
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
//       { threshold }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);
//   return [ref, vis] as const;
// }

// /* ── Counter hook ── */
// function useCounter(target: number, active: boolean, dur = 1400) {
//   const [val, setVal] = useState(0);
//   useEffect(() => {
//     if (!active) return;
//     let s: number | null = null;
//     const step = (ts: number) => {
//       if (!s) s = ts;
//       const p = Math.min((ts - s) / dur, 1);
//       setVal(Math.round(p * target));
//       if (p < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [active, target, dur]);
//   return val;
// }

// /* ════════════════════════════════════════════════
//    GRAPHICS
// ════════════════════════════════════════════════ */
// // function PondGraphic() {
// //   return (
// //     // <svg viewBox="0 0 480 300" width="100%" style={{ maxWidth: 480, display: "block" }}>
// //     //   <defs>
// //     //     <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
// //     //       <stop offset="0%" stopColor="#bfdbfe" />
// //     //       <stop offset="100%" stopColor="#e0f2fe" />
// //     //     </linearGradient>
// //     //     <linearGradient id="waterG" x1="0" y1="0" x2="0" y2="1">
// //     //       <stop offset="0%" stopColor="#0891b2" stopOpacity="0.45" />
// //     //       <stop offset="100%" stopColor="#2A5DA8" stopOpacity="0.65" />
// //     //     </linearGradient>
// //     //     <style>{`
// //     //       @keyframes fish1{0%,100%{transform:translate(0,0)}50%{transform:translate(10px,-4px)}}
// //     //       @keyframes fish2{0%,100%{transform:translate(0,0)}50%{transform:translate(-8px,3px)}}
// //     //       @keyframes shrimp1{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
// //     //       @keyframes bub{0%{transform:translateY(0);opacity:.6}100%{transform:translateY(-20px);opacity:0}}
// //     //       @keyframes ripple2{0%{rx:60;ry:14;opacity:.35}100%{rx:95;ry:22;opacity:0}}
// //     //       @keyframes sway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}
// //     //     `}</style>
// //     //   </defs>

// //     //   {/* Sky */}
// //     //   <rect width="480" height="300" fill="url(#skyG)" rx="18" />

// //     //   {/* Sun */}
// //     //   <circle cx="420" cy="50" r="26" fill="#fef3c7" stroke="#fbbf24" strokeWidth="2" opacity="0.9" />
// //     //   {[0,40,80,120,160,200,240,280,320].map((a,i) => (
// //     //     <line key={i}
// //     //       x1={420+Math.cos(a*Math.PI/180)*30} y1={50+Math.sin(a*Math.PI/180)*30}
// //     //       x2={420+Math.cos(a*Math.PI/180)*40} y2={50+Math.sin(a*Math.PI/180)*40}
// //     //       stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
// //     //   ))}

// //     //   {/* Cloud */}
// //     //   <ellipse cx="90" cy="46" rx="38" ry="16" fill="white" opacity="0.85" />
// //     //   <ellipse cx="116" cy="38" rx="26" ry="15" fill="white" opacity="0.85" />
// //     //   <ellipse cx="66" cy="42" rx="20" ry="13" fill="white" opacity="0.85" />
// //     //   <ellipse cx="240" cy="32" rx="28" ry="12" fill="white" opacity="0.6" />
// //     //   <ellipse cx="262" cy="26" rx="20" ry="11" fill="white" opacity="0.6" />

// //     //   {/* Ground */}
// //     //   <ellipse cx="240" cy="215" rx="195" ry="38" fill="#bbf7d0" opacity="0.55" />
// //     //   <rect x="0" y="220" width="480" height="80" fill="#f0fdf4" />

// //     //   {/* Pond water */}
// //     //   <ellipse cx="240" cy="212" rx="165" ry="48" fill="url(#waterG)" />
// //     //   {/* Ripples */}
// //     //   <ellipse cx="240" cy="210" rx="60" ry="14" fill="none" stroke="white" strokeWidth="1" opacity="0.3"
// //     //     style={{ animation: "ripple2 2.5s ease-out infinite" }} />
// //     //   <ellipse cx="240" cy="210" rx="90" ry="20" fill="none" stroke="white" strokeWidth="0.8" opacity="0.18"
// //     //     style={{ animation: "ripple2 2.5s 0.8s ease-out infinite" }} />

// //     //   {/* Mangrove LEFT */}
// //     //   <rect x="28" y="172" width="7" height="52" fill="#166534" rx="2"
// //     //     style={{ transformOrigin:"32px 224px", animation:"sway 3.5s ease-in-out infinite" }} />
// //     //   <ellipse cx="32" cy="166" rx="20" ry="26" fill="#16a34a" opacity="0.9"
// //     //     style={{ transformOrigin:"32px 224px", animation:"sway 3.5s ease-in-out infinite" }} />
// //     //   <ellipse cx="20" cy="178" rx="13" ry="18" fill="#15803d" opacity="0.75"
// //     //     style={{ transformOrigin:"32px 224px", animation:"sway 3.5s ease-in-out infinite" }} />
// //     //   <ellipse cx="44" cy="176" rx="14" ry="19" fill="#166534" opacity="0.8"
// //     //     style={{ transformOrigin:"32px 224px", animation:"sway 3.5s ease-in-out infinite" }} />
// //     //   {[24,28,32,36,40].map((x,i) => (
// //     //     <line key={i} x1={x} y1="224" x2={x-3+i*2} y2="236" stroke="#15803d" strokeWidth="1.8" opacity="0.55" />
// //     //   ))}

// //     //   {/* Mangrove RIGHT */}
// //     //   <rect x="442" y="176" width="7" height="48" fill="#166534" rx="2"
// //     //     style={{ transformOrigin:"446px 224px", animation:"sway 4s 1s ease-in-out infinite" }} />
// //     //   <ellipse cx="446" cy="170" rx="18" ry="24" fill="#16a34a" opacity="0.9"
// //     //     style={{ transformOrigin:"446px 224px", animation:"sway 4s 1s ease-in-out infinite" }} />
// //     //   <ellipse cx="434" cy="181" rx="12" ry="16" fill="#15803d" opacity="0.7"
// //     //     style={{ transformOrigin:"446px 224px", animation:"sway 4s 1s ease-in-out infinite" }} />
// //     //   <ellipse cx="458" cy="179" rx="13" ry="17" fill="#166534" opacity="0.75"
// //     //     style={{ transformOrigin:"446px 224px", animation:"sway 4s 1s ease-in-out infinite" }} />

// //     //   {/* Fish 1 */}
// //     //   <g style={{ animation: "fish1 4s ease-in-out infinite" }}>
// //     //     <ellipse cx="185" cy="210" rx="15" ry="6.5" fill="#fbbf24" opacity="0.9" />
// //     //     <polygon points="170,210 162,204 162,216" fill="#fbbf24" opacity="0.75" />
// //     //     <circle cx="196" cy="208" r="2.2" fill="#1e3a5f" />
// //     //   </g>
// //     //   {/* Fish 2 */}
// //     //   <g style={{ animation: "fish2 5.5s 1.5s ease-in-out infinite" }}>
// //     //     <ellipse cx="300" cy="220" rx="12" ry="5.5" fill="#5eead4" opacity="0.85" />
// //     //     <polygon points="288,220 282,215 282,225" fill="#5eead4" opacity="0.7" />
// //     //     <circle cx="309" cy="218" r="1.9" fill="#1e3a5f" />
// //     //   </g>

// //     //   {/* Shrimp */}
// //     //   <g style={{ animation: "shrimp1 2.8s 0.5s ease-in-out infinite" }}>
// //     //     <path d="M252 224 Q260 216 268 224 Q260 230 252 224Z" fill="#f97316" opacity="0.92" />
// //     //     <line x1="255" y1="218" x2="251" y2="211" stroke="#f97316" strokeWidth="1.3" />
// //     //     <line x1="260" y1="216" x2="260" y2="209" stroke="#f97316" strokeWidth="1.3" />
// //     //     <line x1="265" y1="218" x2="269" y2="211" stroke="#f97316" strokeWidth="1.3" />
// //     //   </g>

// //     //   {/* Probiotic bubbles */}
// //     //   {[{x:160,y:205,d:2},{x:200,y:215,d:0},{x:310,y:207,d:1.2},{x:270,y:218,d:0.6}].map((b,i) => (
// //     //     <circle key={i} cx={b.x} cy={b.y} r={4+i} fill="none" stroke="#0891b2" strokeWidth="1" opacity="0.6"
// //     //       style={{ animation: `bub ${2+i*0.4}s ${b.d}s ease-out infinite` }} />
// //     //   ))}

// //     //   {/* Labels */}
// //     //   <rect x="290" y="188" width="80" height="20" rx="10" fill="white" opacity="0.88" />
// //     //   <text x="330" y="202" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#0891b2">✓ DO+ i-OXYVARE</text>

// //     //   <rect x="108" y="194" width="82" height="20" rx="10" fill="white" opacity="0.88" />
// //     //   <text x="149" y="208" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#2A5DA8">✓ PROBIOTICS ACTIVE</text>

// //     //   {/* Pond floor */}
// //     //   <rect x="75" y="252" width="330" height="14" rx="4" fill="#d97706" opacity="0.1" />
// //     //   <text x="240" y="263" textAnchor="middle" fontSize="8" fontWeight="600" fill="#92400e" opacity="0.75">Zero harmful residue in pond sediment</text>
// //     // </svg>
// //   );
// // }

// function WaterCycleGraphic() {
//   const steps = [
//     { label: "Probiotic\nApplication", icon: "🦠", color: B.teal,    angle: -90 },
//     { label: "Ammonia\nReduction",     icon: "💨", color: B.blue,    angle: -18 },
//     { label: "DO\nImprovement",        icon: "💧", color: "#7c3aed", angle: 54  },
//     { label: "Pathogen\nControl",      icon: "🛡️", color: B.green,  angle: 126 },
//     { label: "Healthy\nPond",          icon: "🦐", color: B.amber,  angle: 198 },
//   ];
//   const cx = 150, cy = 150, R = 100;
//   return (
//     <svg viewBox="0 0 300 300" width="280" height="280" style={{ display: "block", margin: "0 auto" }}>
//       <defs>
//         <marker id="arr" markerWidth="7" markerHeight="5" refX="5" refY="2.5" orient="auto">
//           <polygon points="0 0, 7 2.5, 0 5" fill={B.muted} opacity="0.45" />
//         </marker>
//       </defs>
//       <circle cx={cx} cy={cy} r={R} fill="none" stroke={B.border} strokeWidth="1.5" strokeDasharray="6 4" />
//       <circle cx={cx} cy={cy} r={R-18} fill="none" stroke={B.blueLight} strokeWidth="1" opacity="0.5" />
//       <circle cx={cx} cy={cy} r={40} fill={B.blueMid} stroke={B.blueLight} strokeWidth="1.5" />
//       <text x={cx} y={cy-5} textAnchor="middle" fontSize="10" fontWeight="800" fill={B.blue}>Water</text>
//       <text x={cx} y={cy+9} textAnchor="middle" fontSize="10" fontWeight="800" fill={B.blue}>Quality</text>
//       <text x={cx} y={cy+21} textAnchor="middle" fontSize="8" fill={B.muted}>Cycle</text>
//       {steps.map((s, i) => {
//         const rad = (s.angle * Math.PI) / 180;
//         const x = cx + R * Math.cos(rad), y = cy + R * Math.sin(rad);
//         const prevRad = ((s.angle - 72) * Math.PI) / 180;
//         const px = cx + (R-2)*Math.cos(prevRad), py = cy + (R-2)*Math.sin(prevRad);
//         const midRad = ((s.angle-36)*Math.PI)/180;
//         const mx = cx+(R+16)*Math.cos(midRad), my = cy+(R+16)*Math.sin(midRad);
//         const lx = cx+(R+42)*Math.cos(rad), ly = cy+(R+42)*Math.sin(rad);
//         const lines = s.label.split("\n");
//         return (
//           <g key={i}>
//             <path d={`M${px},${py} Q${mx},${my} ${x},${y}`}
//               fill="none" stroke={B.muted} strokeWidth="1.1" strokeDasharray="4 3"
//               markerEnd="url(#arr)" opacity="0.4" />
//             <circle cx={x} cy={y} r={20} fill="white" stroke={s.color} strokeWidth="2"
//               style={{ filter: `drop-shadow(0 2px 5px ${s.color}33)` }} />
//             <text x={x} y={y+5} textAnchor="middle" fontSize="13">{s.icon}</text>
//             {lines.map((line, li) => (
//               <text key={li} x={lx} y={ly+li*11-(lines.length-1)*5.5}
//                 textAnchor="middle" fontSize="8.5" fontWeight="700" fill={s.color}>{line}</text>
//             ))}
//           </g>
//         );
//       })}
//     </svg>
//   );
// }

// function ImpactChart({ vis }: { vis: boolean }) {
//   const bars = [
//     { label: "Ammonia reduction",    pct: 72, color: B.teal,    product: "i-PROPONDVARE" },
//     { label: "Vibrio control",       pct: 88, color: B.blue,    product: "i-VIBRIOVARE"  },
//     { label: "DO improvement",       pct: 65, color: "#7c3aed", product: "i-OXYVARE"     },
//     { label: "FCR improvement",      pct: 80, color: B.green,   product: "i-PROVARE GUT" },
//     { label: "Disease mortality ↓",  pct: 55, color: B.amber,   product: "i-IMMUNOVARE"  },
//   ];
//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
//       {bars.map((b, i) => (
//         <div key={i}>
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
//             <div>
//               <span style={{ fontSize: 13, fontWeight: 700, color: B.navy }}>{b.label}</span>
//               <span style={{ fontSize: 11, color: B.muted, marginLeft: 8 }}>via {b.product}</span>
//             </div>
//             <span style={{ fontSize: 14, fontWeight: 800, color: b.color }}>{b.pct}%</span>
//           </div>
//           <div style={{ height: 10, background: B.border, borderRadius: 10, overflow: "hidden" }}>
//             <div style={{
//               height: "100%", borderRadius: 10,
//               background: `linear-gradient(90deg, ${b.color}88, ${b.color})`,
//               width: vis ? `${b.pct}%` : "0%",
//               transition: `width 1.2s ${i*0.15}s cubic-bezier(.34,1.1,.64,1)`,
//               boxShadow: `0 0 8px ${b.color}44`,
//             }} />
//           </div>
//         </div>
//       ))}
//       <p style={{ fontSize: 11, color: B.muted, marginTop: 4 }}>
//         * Average field data — partner farms in Andhra Pradesh, 2023/24 grow-out cycles
//       </p>
//     </div>
//   );
// }

// /* ════════════════════════════════════════════════
//    PAGE SECTIONS
// ════════════════════════════════════════════════ */
// function Hero() {
//   return (
//     <section style={{
//   position: "relative",
//   overflow: "hidden",
//   padding: "110px 48px 90px",

//   // ✅ AI IMAGE + DARK ECO GRADIENT
//   backgroundImage: `
//     linear-gradient(135deg, rgba(6,12,30,0.9) 0%, rgba(14,58,110,0.85) 40%, rgba(16,185,129,0.6) 100%),
//     url('/images/en.png')
//   `,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
// }}>
//       <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
//       <div style={{ position: "absolute", right: "-80px", top: "-80px", width: 420, height: 420, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
//       <div style={{ position: "absolute", left: "-60px", bottom: "-40px", width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

//       <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>
//         <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 32 }}>
//           <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
//           <span>/</span><span style={{ color: "#fff" }}>Environment</span>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
//           <div>
//             <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 100, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", fontSize: 12, fontWeight: 600, color: "#fff", letterSpacing: 1.2, textTransform: "uppercase" as const, marginBottom: 24 }}>
//               <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5eead4", display: "inline-block" }} />
//               Responsible Aquaculture
//             </div>
//             <h1 style={{ fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: -1, marginBottom: 18 }}>
//               Healthier Ponds.<br /><span style={{ color: "#5eead4" }}>Healthier Planet.</span>
//             </h1>
//             <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, marginBottom: 32, maxWidth: 460 }}>
//               Innovare Biopharma manufactures and exports aquaculture healthcare products —
//               probiotics, minerals, vitamins, and water treatments — formulated to improve
//               farm performance while protecting the pond ecosystems farms depend on.
//             </p>
//             <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
//               {["🦠 Probiotic Formulations","🪨 Pond Minerals","💧 Water Treatments","🛡️ Disease Management","⚗️ GMP Manufacturing"].map(chip => (
//                 <span key={chip} style={{ fontSize: 12, padding: "5px 14px", borderRadius: 100, fontWeight: 600, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}>{chip}</span>
//               ))}
//             </div>
//             <div style={{ display: "flex", gap: 12 }}>
//               <a href="#eco-products" style={{ padding: "12px 26px", borderRadius: 40, background: "#fff", color: B.blue, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Our Eco Products →</a>
//               <a href="#do-dont" style={{ padding: "11px 22px", borderRadius: 40, border: "1.5px solid rgba(255,255,255,0.35)", background: "transparent", color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>Best Practices</a>
//             </div>
//           </div>
//           <div style={{ display: "flex", justifyContent: "center" }}>
//             {/* <PondGraphic /> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function WhatWeDoSection() {
//   const [ref, vis] = useReveal(0.08);
//   const pillars = [
//     { icon: "🏭", title: "GMP Manufacturing", desc: "All products manufactured in our Hyderabad GMP-certified facility under strict quality controls — consistent batch quality every time.", color: B.blue },
//     { icon: "🌿", title: "Antibiotic-Free", desc: "Natural probiotic and phytogenic solutions replace chemical treatments, reducing antibiotic dependency on shrimp and fish farms.", color: B.green },
//     { icon: "🔬", title: "CAA Registered", desc: "Every applicable product carries valid Coastal Aquaculture Authority registration — legal and safe use on farms across India.", color: B.teal },
//     { icon: "📦", title: "Hatchery to Harvest", desc: "Our range covers every production stage — pond preparation, grow-out nutrition, disease prevention, and pre-harvest management.", color: "#7c3aed" },
//   ];
//   return (
//     <section style={{ background: "#fff", padding: "90px 48px" }}>
//       <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: 48, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: "all .7s" }}>
//           <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" as const }}>What We Do</span>
//           <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 10, marginBottom: 12 }}>Innovare Biopharma — Core Business</h2>
//           <p style={{ fontSize: 15, color: B.slate, maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
//             India's innovative manufacturer and exporter of aquaculture healthcare products,
//             delivering science-backed solutions for shrimp and fish farms.
//           </p>
//         </div>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
//           {pillars.map((p, i) => (
//             <div key={i} style={{ padding: "26px 22px", borderRadius: 18, background: B.surface, border: `1px solid ${B.border}`, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: `all .6s ${i*0.1}s ease` }}>
//               <div style={{ width: 46, height: 46, borderRadius: 12, background: `${p.color}12`, border: `1.5px solid ${p.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 14 }}>{p.icon}</div>
//               <h3 style={{ fontSize: 14, fontWeight: 800, color: B.navy, marginBottom: 8 }}>{p.title}</h3>
//               <p style={{ fontSize: 13, color: B.slate, lineHeight: 1.7 }}>{p.desc}</p>
//               <div style={{ height: 2, marginTop: 16, background: `linear-gradient(90deg, ${p.color}60, transparent)`, borderRadius: 1 }} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// const ECO_PRODUCTS = [
//   { name: "i-PROPONDVARE", icon: "🦠", color: B.teal,    role: "Water & Soil Probiotic",    envImpact: "Reduces ammonia & H₂S by introducing beneficial bacteria — eliminates need for chemical pond treatments.", badges: ["Zero Chemicals","Biodegradable","CAA Registered"], route: "/products/7" },
//   { name: "i-VIBRIOVARE",  icon: "🛡️", color: B.blue,    role: "Vibrio Control Probiotic",  envImpact: "Controls Vibrio naturally via competitive bacterial exclusion — replaces antibiotic dosing with zero pond residue.", badges: ["Antibiotic-Free","Residue-Free","GMP Certified"], route: "/products/9" },
//   { name: "Ferric CHLORIDE",   icon: "🌿", color: B.green,   role: "Phytogenic Growth Promoter", envImpact: "100% plant-extract-based growth promoter — no synthetic additives, safe for pond ecology and surrounding waterways.", badges: ["Plant-Derived","Botanical","Zero Toxicity"], route: "/products/11" },
//   { name: "Magnesium Chloride",     icon: "💧", color: "#7c3aed", role: "Oxygen Granules",            envImpact: "Releases dissolved oxygen via calcium peroxide — degrades to calcium and oxygen with no harmful residue in sediment.", badges: ["pH Neutral","No Residue","Emergency Safe"], route: "/products/20" },
//   { name: "CALICUM CHLORIDE", icon: "💊", color: B.amber,   role: "Gut Probiotic",              envImpact: "Improves feed conversion ratio — less wasted feed means less organic load and ammonia entering pond water.", badges: ["Improved FCR","Less Feed Waste","Natural"], route: "/products/8" },
//   { name: "POTASSIUM CHLORIDE", icon: "🪨", color: "#64748b", role: "Ionic Balance Treatment", envImpact: "Pharmaceutical-grade mineral restoring pond ionic balance without synthetic buffers or artificial chemical inputs.", badges: ["Pharma-Grade","No Synthetics","Safe Mineral"], route: "/products/27" },
// ];

// function EcoProductsSection() {
//   const [ref, vis] = useReveal(0.06);
//   const [hovered, setHovered] = useState<number | null>(null);
//   return (
//     <section id="eco-products" style={{ background: B.pageBg, padding: "90px 48px" }}>
//       <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: 48, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: "all .7s" }}>
//           <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" as const }}>Eco-Safe Product Range</span>
//           <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 10, marginBottom: 12 }}>Products That Protect the Pond</h2>
//           <p style={{ fontSize: 15, color: B.slate, maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>These Innovare Biopharma products deliver farm results while actively reducing chemical load, antibiotic use, and ecological harm.</p>
//         </div>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
//           {ECO_PRODUCTS.map((p, i) => (
//             <div key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: `1.5px solid ${hovered===i ? p.color : B.border}`, boxShadow: hovered===i ? `0 12px 32px ${p.color}16` : "0 2px 8px rgba(0,0,0,0.04)", transform: hovered===i ? "translateY(-5px)" : "none", opacity: vis ? 1 : 0, transition: `all .3s ease, opacity .6s ${i*0.08}s ease` }}>
//               <div style={{ height: 4, background: `linear-gradient(90deg, ${p.color}, ${p.color}55)` }} />
//               <div style={{ padding: "22px 20px" }}>
//                 <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
//                   <div style={{ width: 44, height: 44, borderRadius: 12, background: `${p.color}12`, border: `1.5px solid ${p.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{p.icon}</div>
//                   <div>
//                     <div style={{ fontSize: 15, fontWeight: 800, color: B.navy }}>{p.name}</div>
//                     <div style={{ fontSize: 11, color: p.color, fontWeight: 600 }}>{p.role}</div>
//                   </div>
//                 </div>
//                 <div style={{ padding: "10px 14px", borderRadius: 10, background: `${p.color}08`, border: `1px solid ${p.color}18`, marginBottom: 12 }}>
//                   <div style={{ fontSize: 10, fontWeight: 700, color: p.color, letterSpacing: 1, textTransform: "uppercase" as const, marginBottom: 4 }}>🌿 Environmental Impact</div>
//                   <p style={{ fontSize: 13, color: B.slate, lineHeight: 1.65 }}>{p.envImpact}</p>
//                 </div>
//                 <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
//                   {p.badges.map((b, j) => (<span key={j} style={{ fontSize: 10, padding: "3px 10px", borderRadius: 100, fontWeight: 700, background: `${p.color}10`, border: `1px solid ${p.color}25`, color: p.color }}>{b}</span>))}
//                 </div>
//                 <Link href={p.route} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "9px 0", borderRadius: 10, textDecoration: "none", background: `linear-gradient(135deg, ${p.color}, ${p.color}bb)`, color: "#fff", fontSize: 13, fontWeight: 700 }}>View Product →</Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function WaterQualitySection() {
//   const [ref, vis] = useReveal(0.08);
//   return (
//     <section style={{ background: "#fff", padding: "90px 48px" }}>
//       <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
//           <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(-24px)", transition: "all .7s" }}>
//             <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" as const }}>How It Works</span>
//             <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 10, marginBottom: 14 }}>The Probiotic<br />Water Quality Cycle</h2>
//             <p style={{ fontSize: 14, color: B.slate, lineHeight: 1.8, marginBottom: 28 }}>
//               Our probiotic products create a continuous beneficial cycle — bacteria
//               outcompete pathogens, break down organic waste, reduce ammonia and H₂S,
//               and restore a healthy pond microbiome without any chemical intervention.
//             </p>
//             <WaterCycleGraphic />
//           </div>
//           <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(24px)", transition: "all .7s .15s" }}>
//             <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" as const }}>Field Performance</span>
//             <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 10, marginBottom: 24 }}>Measured Environmental<br />& Farm Benefits</h2>
//             <ImpactChart vis={vis} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function DoDonotSection() {
//   const [ref, vis] = useReveal(0.08);
//   const dos = [
//     "Use probiotics to control Vibrio naturally — avoid antibiotics",
//     "Apply pond minerals to maintain correct water chemistry",
//     "Use i-OXYVARE oxygen granules during DO crash emergencies",
//     "Follow recommended dosage rates on every product label",
//     "Store products in cool, dry, shaded conditions",
//     "Maintain treatment records for each pond cycle",
//   ];
//   const donts = [
//     "Never exceed recommended application rates in pond",
//     "Do not mix two products without technician guidance",
//     "Avoid overfeeding — excess feed degrades water quality fast",
//     "Do not discharge untreated pond water into open waterways",
//     "Never use antibiotics when probiotics are prescribed",
//     "Do not dispose of empty pouches in or near water bodies",
//   ];
//   return (
//     <section id="do-dont" style={{ background: B.pageBg, padding: "90px 48px" }}>
//       <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: 48, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: "all .7s" }}>
//           <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" as const }}>Responsible Use</span>
//           <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 10, marginBottom: 12 }}>What To Do & What To Avoid</h2>
//           <p style={{ fontSize: 15, color: B.slate, maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>Using Innovare Biopharma products correctly ensures maximum farm benefit and minimum environmental impact.</p>
//         </div>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: "all .7s .15s" }}>
//           {/* DO */}
//           <div style={{ background: B.greenBg, border: `1.5px solid ${B.greenBd}`, borderRadius: 20, padding: "28px 24px" }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
//               <div style={{ width: 36, height: 36, borderRadius: "50%", background: B.green, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 18 }}>✓</div>
//               <span style={{ fontSize: 16, fontWeight: 800, color: B.green }}>Best Practices</span>
//             </div>
//             <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//               {dos.map((d, i) => (
//                 <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
//                   <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>✅</span>
//                   <span style={{ fontSize: 13.5, color: B.slate, lineHeight: 1.55 }}>{d}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* DON'T */}
//           <div style={{ background: "#fff5f5", border: "1.5px solid #fecaca", borderRadius: 20, padding: "28px 24px" }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
//               <div style={{ width: 36, height: 36, borderRadius: "50%", background: B.red, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 16 }}>✕</div>
//               <span style={{ fontSize: 16, fontWeight: 800, color: B.red }}>What to Avoid</span>
//             </div>
//             <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//               {donts.map((d, i) => (
//                 <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
//                   <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>❌</span>
//                   <span style={{ fontSize: 13.5, color: B.slate, lineHeight: 1.55 }}>{d}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// const ENVIRONMENT_FAQS = [
//   {
//     icon: "💧",
//     q: "How do Innovare probiotics affect pond water quality?",
//     a: "Probiotics like i-PROPONDVARE introduce beneficial Bacillus strains that break down organic waste — excess feed, faecal matter, and dead algae — reducing ammonia, nitrite, and hydrogen sulphide build-up. Regular application maintains a stable microbial balance in the pond bottom, preventing toxic gas accumulation and keeping dissolved oxygen levels optimal.",
//   },
//   {
//     icon: "🌿",
//     q: "Are Innovare products safe for the surrounding ecosystem?",
//     a: "Yes. All Innovare Biopharma products are formulated without antibiotics, heavy metals, or persistent synthetic chemicals. Our probiotics are GRAS-listed bacterial strains and our mineral supplements use food-grade ingredients. Treated pond water, when properly managed, does not pose a risk to adjacent water bodies or soil.",
//   },
//   {
//     icon: "♻️",
//     q: "How should I dispose of empty product pouches and containers?",
//     a: "Empty pouches and containers should never be disposed of in or near water bodies. Rinse containers thoroughly with clean water, allow to dry, and dispose through your local solid waste collection. Do not burn plastic pouches — incineration of treated packaging releases harmful fumes. Contact your Innovare field technician for bulk disposal guidance.",
//   },
//   {
//     icon: "🐠",
//     q: "What happens if I overdose a pond with mineral supplements?",
//     a: "Over-application of pond minerals can shift water pH and alkalinity beyond safe ranges, stressing shrimp and fish gill tissue. Sudden ionic imbalances may trigger osmotic stress and moulting failure in shrimp. Always follow the label dosage rate and conduct a water quality test before and after application. If overdose is suspected, increase water exchange immediately and contact our technical team.",
//   },
//   {
//     icon: "🌱",
//     q: "Do Innovare products support organic or low-chemical aquaculture systems?",
//     a: "Our probiotic and phytogenic product lines are well-suited to low-chemical production systems. i-VIBRIOVARE, i-PHYTOVARE, and i-PROPONDVARE replace the need for chemical disinfectants and antibiotic growth promoters. While full organic certification depends on your certifying body's approved inputs list, our non-antibiotic formulations align with responsible and residue-free aquaculture principles.",
//   },
//   {
//     icon: "⚠️",
//     q: "What should I do during an emergency dissolved oxygen crash?",
//     a: "Immediately broadcast i-OXYVARE oxygen granules at 5–10 kg per hectare-metre across the pond surface, prioritising areas where fish or shrimp are showing surfacing behaviour. Simultaneously run all paddle-wheels at full capacity. Reduce or stop feeding entirely until DO recovers above 5 mg/L. Record the event and review aeration infrastructure and stocking density with your technician.",
//   },
// ];

// function EnvironmentFAQSection() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);
//   const [ref, vis] = useReveal(0.1);

//   return (
//     <section style={{ background: "#fff", padding: "100px 48px" }}>
//       <div ref={ref} style={{ maxWidth: 860, margin: "0 auto" }}>

//         {/* Header */}
//         <div style={{ textAlign: "center", marginBottom: 52, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)", transition: "all .7s" }}>
//           <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" as const }}>
//             Technical FAQs
//           </span>
//           <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 12 }}>
//             Environment & Safety<br />
//             <span style={{ color: B.teal }}>Questions Answered</span>
//           </h2>
//           <p style={{ fontSize: 15, color: B.slate, maxWidth: 480, margin: "14px auto 0", lineHeight: 1.75 }}>
//             Practical answers on responsible product use, pond ecology, and environmental compliance.
//           </p>
//         </div>

//         {/* Accordion */}
//         <div style={{ opacity: vis ? 1 : 0, transition: "opacity .7s .2s" }}>
//           {ENVIRONMENT_FAQS.map((faq, i) => {
//             const isOpen = openFaq === i;
//             return (
//               <div
//                 key={i}
//                 onClick={() => setOpenFaq(isOpen ? null : i)}
//                 style={{
//                   background: isOpen ? B.greenBg : "#fff",
//                   border: `1.5px solid ${isOpen ? B.green : B.border}`,
//                   borderRadius: 16,
//                   marginBottom: 12,
//                   cursor: "pointer",
//                   transition: "border-color .25s, background .25s, box-shadow .25s",
//                   boxShadow: isOpen ? "0 4px 32px rgba(21,128,61,0.10)" : "0 2px 8px rgba(0,0,0,0.04)",
//                   overflow: "hidden",
//                 }}
//               >
//                 {/* Question row */}
//                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 26px", gap: 16 }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
//                     <div style={{
//                       width: 36, height: 36, borderRadius: 10,
//                       background: isOpen ? "rgba(21,128,61,0.12)" : B.greenBg,
//                       border: `1px solid ${isOpen ? "rgba(21,128,61,0.28)" : B.greenBd}`,
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                       fontSize: 16, flexShrink: 0, transition: "background .25s, border-color .25s",
//                     }}>
//                       {faq.icon}
//                     </div>
//                     <span style={{ fontSize: 14, fontWeight: 700, color: B.navy, lineHeight: 1.4 }}>
//                       {faq.q}
//                     </span>
//                   </div>
//                   <span style={{
//                     fontSize: 20, color: B.green, flexShrink: 0, fontWeight: 300, lineHeight: 1,
//                     transition: "transform .3s", display: "inline-block",
//                     transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
//                   }}>+</span>
//                 </div>

//                 {/* Answer */}
//                 <div style={{ maxHeight: isOpen ? 400 : 0, overflow: "hidden", transition: "max-height .38s cubic-bezier(.4,0,.2,1)" }}>
//                   <div style={{ padding: "16px 26px 22px", fontSize: 14, color: B.slate, lineHeight: 1.85, borderTop: `1px solid ${B.greenBd}` }}>
//                     {faq.a}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Still have questions card */}
//         <div style={{
//           marginTop: 28,
//           background: B.greenBg,
//           border: `1px solid ${B.greenBd}`,
//           borderRadius: 16, padding: "26px 32px",
//           display: "flex", alignItems: "center",
//           justifyContent: "space-between", flexWrap: "wrap", gap: 16,
//           opacity: vis ? 1 : 0, transition: "opacity .7s .4s",
//         }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
//             <div style={{
//               width: 44, height: 44, borderRadius: 12,
//               background: `linear-gradient(135deg, ${B.green}, ${B.teal})`,
//               display: "flex", alignItems: "center", justifyContent: "center",
//               fontSize: 20, flexShrink: 0, boxShadow: "0 4px 14px rgba(21,128,61,0.25)",
//             }}>🌿</div>
//             <div>
//               <div style={{ fontSize: 14, fontWeight: 700, color: B.navy }}>Still have an environment or safety question?</div>
//               <div style={{ fontSize: 12, color: B.slate, marginTop: 2 }}>Our field technicians are available to advise on responsible farm practices.</div>
//             </div>
//           </div>
//           <a href="mailto:info@innovarebiopharma.com" style={{
//             display: "inline-flex", alignItems: "center", gap: 8,
//             padding: "11px 26px", borderRadius: 40,
//             background: `linear-gradient(135deg, ${B.green}, ${B.teal})`,
//             color: "#fff", fontSize: 13, fontWeight: 700,
//             textDecoration: "none", whiteSpace: "nowrap",
//           }}>
//             Ask a Technician →
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// }

// function StatsSection() {
//   const [ref, vis] = useReveal(0.15);
//   const STATS = [
//     { icon: "🦠", n: 100, suffix: "%", label: "Antibiotic-free formulations" },
//     { icon: "💧", n: 60,  suffix: "%", label: "Less water than industry avg" },
//     { icon: "🌱", n: 10,  suffix: "K+", label: "Mangrove trees planted" },
//     { icon: "♻️", n: 80,  suffix: "%", label: "Recycled packaging content" },
//   ];
//   return (
//     <section style={{ background: `linear-gradient(135deg, ${B.blueDeep} 0%, ${B.blue} 100%)`, padding: "70px 48px", position: "relative", overflow: "hidden" }}>
//       <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
//       <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
//           {STATS.map((s, i) => {
//             const count = useCounter(s.n, vis);
//             return (
//               <div key={i} style={{ textAlign: "center", padding: "32px 16px", background: "rgba(255,255,255,0.08)", borderRadius: 18, border: "1px solid rgba(255,255,255,0.12)", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: `all .6s ${i*0.1}s ease` }}>
//                 <span style={{ fontSize: 30, display: "block", marginBottom: 10 }}>{s.icon}</span>
//                 <div style={{ fontSize: 42, fontWeight: 800, color: "#fff", lineHeight: 1 }}>{count}{s.suffix}</div>
//                 <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 8, lineHeight: 1.4 }}>{s.label}</div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// function CTASection() {
//   const [ref, vis] = useReveal(0.15);
//   return (
//     <section style={{ background: `linear-gradient(135deg, ${B.blueDeep} 0%, ${B.blue} 60%, ${B.teal} 100%)`, padding: "100px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
//       <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
//       {[380,520,660].map((s, i) => (
//         <div key={i} style={{ position: "absolute", top: "50%", left: "50%", width: s, height: s, borderRadius: "50%", border: `1px solid rgba(255,255,255,${0.06-i*0.015})`, transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
//       ))}
//       <div ref={ref} style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)", transition: "all .7s" }}>
//         <div style={{ fontSize: 48, marginBottom: 16 ,display: "flex",
//     justifyContent: "center"}}>
//           <img
//     src="/images/logo.png"
//     alt="Logo"
//     style={{
//       width: 80,
//       height: 80,
//       objectFit: "contain",
//       filter: `
//         drop-shadow(0 0 8px rgba(255,255,255,0.9))
//         drop-shadow(0 0 16px rgba(255,255,255,0.7))
//         drop-shadow(0 0 24px rgba(255,255,255,0.5))
//       `,
//     }}
//   />
//         </div>
//         <h2 style={{ fontSize: "clamp(28px,4vw,50px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: -1, marginBottom: 16 }}>
//           Farm better.<br /><span style={{ color: "#5eead4" }}>Protect what matters.</span>
//         </h2>
//         <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginBottom: 40 }}>
//           Choose Innovare Biopharma products that work as hard for your pond's ecology
//           as they do for your harvest yield.
//         </p>
//         <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
//           <Link href="/products" style={{ padding: "13px 30px", borderRadius: 40, background: "#fff", color: B.blue, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Browse All Products →</Link>
//           <a href="mailto:info@innovarebiopharma.com" style={{ padding: "12px 24px", borderRadius: 40, border: "1.5px solid rgba(255,255,255,0.35)", background: "transparent", color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>📧 Contact Us</a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function EnvironmentPage() {
//   return (
//     <main style={{ background: B.pageBg }}>
//       <Hero />
//       <WhatWeDoSection />
//       <EcoProductsSection />
//       <StatsSection />
//       <WaterQualitySection />
//        <CTASection />
//       <DoDonotSection />
//      <EnvironmentFAQSection />  
//       <Footer></Footer>
//     </main>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Center } from "@react-three/drei";
import Footer from "@/components/Footer";

const B = {
  blue:      "#2A5DA8",
  blueDark:  "#1e4a8a",
  blueDeep:  "#0f2f5e",
  blueMid:   "#eff6ff",
  blueLight: "#dbeafe",
  teal:      "#0891b2",
  tealLight: "#e0f2fe",
  navy:      "#0f172a",
  slate:     "#475569",
  muted:     "#94a3b8",
  border:    "#e2e8f0",
  surface:   "#f8fafc",
  pageBg:    "#f0f4f8",
  green:     "#15803d",
  greenBg:   "#f0fdf4",
  greenBd:   "#bbf7d0",
  amber:     "#d97706",
  red:       "#dc2626",
};

/* ── Reveal hook ── */
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, vis] as const;
}

/* ── Counter hook ── */
function useCounter(target: number, active: boolean, dur = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let s: number | null = null;
    const step = (ts: number) => {
      if (!s) s = ts;
      const p = Math.min((ts - s) / dur, 1);
      setVal(Math.round(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, dur]);
  return val;
}

/* ════════════════════════════════════════════════
   GRAPHICS
════════════════════════════════════════════════ */
function WaterCycleGraphic() {
  const steps = [
    { label: "Probiotic\nApplication", icon: "🦠", color: B.teal,    angle: -90 },
    { label: "Ammonia\nReduction",     icon: "💨", color: B.blue,    angle: -18 },
    { label: "DO\nImprovement",        icon: "💧", color: "#7c3aed", angle: 54  },
    { label: "Pathogen\nControl",      icon: "🛡️", color: B.green,  angle: 126 },
    { label: "Healthy\nPond",          icon: "🦐", color: B.amber,  angle: 198 },
  ];
  const cx = 150, cy = 150, R = 100;
  return (
    <svg viewBox="0 0 300 300" width="100%" height="100%" style={{ display: "block", margin: "0 auto", maxWidth: 280 }}>
      <defs>
        <marker id="arr" markerWidth="7" markerHeight="5" refX="5" refY="2.5" orient="auto">
          <polygon points="0 0, 7 2.5, 0 5" fill={B.muted} opacity="0.45" />
        </marker>
      </defs>
      <circle cx={cx} cy={cy} r={R} fill="none" stroke={B.border} strokeWidth="1.5" strokeDasharray="6 4" />
      <circle cx={cx} cy={cy} r={R-18} fill="none" stroke={B.blueLight} strokeWidth="1" opacity="0.5" />
      <circle cx={cx} cy={cy} r={40} fill={B.blueMid} stroke={B.blueLight} strokeWidth="1.5" />
      <text x={cx} y={cy-5} textAnchor="middle" fontSize="10" fontWeight="800" fill={B.blue}>Water</text>
      <text x={cx} y={cy+9} textAnchor="middle" fontSize="10" fontWeight="800" fill={B.blue}>Quality</text>
      <text x={cx} y={cy+21} textAnchor="middle" fontSize="8" fill={B.muted}>Cycle</text>
      {steps.map((s, i) => {
        const rad = (s.angle * Math.PI) / 180;
        const x = cx + R * Math.cos(rad), y = cy + R * Math.sin(rad);
        const prevRad = ((s.angle - 72) * Math.PI) / 180;
        const px = cx + (R-2)*Math.cos(prevRad), py = cy + (R-2)*Math.sin(prevRad);
        const midRad = ((s.angle-36)*Math.PI)/180;
        const mx = cx+(R+16)*Math.cos(midRad), my = cy+(R+16)*Math.sin(midRad);
        const lx = cx+(R+42)*Math.cos(rad), ly = cy+(R+42)*Math.sin(rad);
        const lines = s.label.split("\n");
        return (
          <g key={i}>
            <path d={`M${px},${py} Q${mx},${my} ${x},${y}`}
              fill="none" stroke={B.muted} strokeWidth="1.1" strokeDasharray="4 3"
              markerEnd="url(#arr)" opacity="0.4" />
            <circle cx={x} cy={y} r={20} fill="white" stroke={s.color} strokeWidth="2"
              style={{ filter: `drop-shadow(0 2px 5px ${s.color}33)` }} />
            <text x={x} y={y+5} textAnchor="middle" fontSize="13">{s.icon}</text>
            {lines.map((line, li) => (
              <text key={li} x={lx} y={ly+li*11-(lines.length-1)*5.5}
                textAnchor="middle" fontSize="8.5" fontWeight="700" fill={s.color}>{line}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

function ImpactChart({ vis }: { vis: boolean }) {
  const bars = [
    { label: "Ammonia reduction",    pct: 72, color: B.teal,    product: "i-PROPONDVARE" },
    { label: "Vibrio control",       pct: 88, color: B.blue,    product: "i-VIBRIOVARE"  },
    { label: "DO improvement",       pct: 65, color: "#7c3aed", product: "i-OXYVARE"     },
    { label: "FCR improvement",      pct: 80, color: B.green,   product: "i-PROVARE GUT" },
    { label: "Disease mortality ↓",  pct: 55, color: B.amber,   product: "i-IMMUNOVARE"  },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      {bars.map((b, i) => (
        <div key={i}>
          <div className="env-bar-label-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6, flexWrap: "wrap", gap: 6 }}>
            <div>
              <span style={{ fontSize: 13, fontWeight: 700, color: B.navy }}>{b.label}</span>
              <span style={{ fontSize: 11, color: B.muted, marginLeft: 8 }}>via {b.product}</span>
            </div>
            <span style={{ fontSize: 14, fontWeight: 800, color: b.color }}>{b.pct}%</span>
          </div>
          <div style={{ height: 10, background: B.border, borderRadius: 10, overflow: "hidden" }}>
            <div style={{
              height: "100%", borderRadius: 10,
              background: `linear-gradient(90deg, ${b.color}88, ${b.color})`,
              width: vis ? `${b.pct}%` : "0%",
              transition: `width 1.2s ${i*0.15}s cubic-bezier(.34,1.1,.64,1)`,
              boxShadow: `0 0 8px ${b.color}44`,
            }} />
          </div>
        </div>
      ))}
      <p style={{ fontSize: 11, color: B.muted, marginTop: 4 }}>
        * Average field data — partner farms in Andhra Pradesh, 2023/24 grow-out cycles
      </p>
    </div>
  );
}

/* ════════════════════════════════════════════════
   PAGE SECTIONS
════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="env-hero-pad" style={{
      position: "relative",
      overflow: "hidden",
      padding: "110px 48px 90px",
      backgroundImage: `
        linear-gradient(135deg, rgba(6,12,30,0.9) 0%, rgba(14,58,110,0.85) 40%, rgba(16,185,129,0.6) 100%),
        url('/images/en.png')
      `,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: "-80px", top: "-80px", width: 420, height: 420, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
      <div style={{ position: "absolute", left: "-60px", bottom: "-40px", width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 32, flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
          <span>/</span><span style={{ color: "#fff" }}>Environment</span>
        </div>

        <div className="env-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 100, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", fontSize: 12, fontWeight: 600, color: "#fff", letterSpacing: 1.2, textTransform: "uppercase" as const, marginBottom: 24 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5eead4", display: "inline-block" }} />
              Responsible Aquaculture
            </div>
            <h1 style={{ fontSize: "clamp(30px,4.5vw,58px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: -1, marginBottom: 18 }}>
              Healthier Ponds.<br /><span style={{ color: "#5eead4" }}>Healthier Planet.</span>
            </h1>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, marginBottom: 32, maxWidth: 460 }}>
              Innovare Biopharma manufactures and exports aquaculture healthcare products —
              probiotics, minerals, vitamins, and water treatments — formulated to improve
              farm performance while protecting the pond ecosystems farms depend on.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
              {["🦠 Probiotic Formulations","🪨 Pond Minerals","💧 Water Treatments","🛡️ Disease Management","⚗️ GMP Manufacturing"].map(chip => (
                <span key={chip} style={{ fontSize: 12, padding: "5px 14px", borderRadius: 100, fontWeight: 600, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}>{chip}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#eco-products" style={{ padding: "12px 26px", borderRadius: 40, background: "#fff", color: B.blue, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Our Eco Products →</a>
              <a href="#do-dont" style={{ padding: "11px 22px", borderRadius: 40, border: "1.5px solid rgba(255,255,255,0.35)", background: "transparent", color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>Best Practices</a>
            </div>
          </div>
          <div className="env-hero-graphic" style={{ display: "flex", justifyContent: "center" }}>
            {/* <PondGraphic /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  const [ref, vis] = useReveal(0.08);
  const pillars = [
    { icon: "🏭", title: "GMP Manufacturing", desc: "All products manufactured in our Hyderabad GMP-certified facility under strict quality controls — consistent batch quality every time.", color: B.blue },
    { icon: "🌿", title: "Antibiotic-Free", desc: "Natural probiotic and phytogenic solutions replace chemical treatments, reducing antibiotic dependency on shrimp and fish farms.", color: B.green },
    { icon: "🔬", title: "CAA Registered", desc: "Every applicable product carries valid Coastal Aquaculture Authority registration — legal and safe use on farms across India.", color: B.teal },
    { icon: "📦", title: "Hatchery to Harvest", desc: "Our range covers every production stage — pond preparation, grow-out nutrition, disease prevention, and pre-harvest management.", color: "#7c3aed" },
  ];
  return (
    <section className="env-section-pad" style={{ background: "#fff", padding: "90px 48px" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: "all .7s" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" as const }}>What We Do</span>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 10, marginBottom: 12 }}>Innovare Biopharma — Core Business</h2>
          <p style={{ fontSize: 15, color: B.slate, maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
            India's innovative manufacturer and exporter of aquaculture healthcare products,
            delivering science-backed solutions for shrimp and fish farms.
          </p>
        </div>
        <div className="env-pillars-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
          {pillars.map((p, i) => (
            <div key={i} style={{ padding: "26px 22px", borderRadius: 18, background: B.surface, border: `1px solid ${B.border}`, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: `all .6s ${i*0.1}s ease` }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: `${p.color}12`, border: `1.5px solid ${p.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 14 }}>{p.icon}</div>
              <h3 style={{ fontSize: 14, fontWeight: 800, color: B.navy, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: B.slate, lineHeight: 1.7 }}>{p.desc}</p>
              <div style={{ height: 2, marginTop: 16, background: `linear-gradient(90deg, ${p.color}60, transparent)`, borderRadius: 1 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ECO_PRODUCTS = [
  { name: "i-PROPONDVARE", icon: "🦠", color: B.teal,    role: "Water & Soil Probiotic",    envImpact: "Reduces ammonia & H₂S by introducing beneficial bacteria — eliminates need for chemical pond treatments.", badges: ["Zero Chemicals","Biodegradable","CAA Registered"], route: "/products/7" },
  { name: "i-VIBRIOVARE",  icon: "🛡️", color: B.blue,    role: "Vibrio Control Probiotic",  envImpact: "Controls Vibrio naturally via competitive bacterial exclusion — replaces antibiotic dosing with zero pond residue.", badges: ["Antibiotic-Free","Residue-Free","GMP Certified"], route: "/products/9" },
  { name: "Ferric CHLORIDE",   icon: "🌿", color: B.green,   role: "Phytogenic Growth Promoter", envImpact: "100% plant-extract-based growth promoter — no synthetic additives, safe for pond ecology and surrounding waterways.", badges: ["Plant-Derived","Botanical","Zero Toxicity"], route: "/products/11" },
  { name: "Magnesium Chloride",     icon: "💧", color: "#7c3aed", role: "Oxygen Granules",            envImpact: "Releases dissolved oxygen via calcium peroxide — degrades to calcium and oxygen with no harmful residue in sediment.", badges: ["pH Neutral","No Residue","Emergency Safe"], route: "/products/20" },
  { name: "CALICUM CHLORIDE", icon: "💊", color: B.amber,   role: "Gut Probiotic",              envImpact: "Improves feed conversion ratio — less wasted feed means less organic load and ammonia entering pond water.", badges: ["Improved FCR","Less Feed Waste","Natural"], route: "/products/8" },
  { name: "POTASSIUM CHLORIDE", icon: "🪨", color: "#64748b", role: "Ionic Balance Treatment", envImpact: "Pharmaceutical-grade mineral restoring pond ionic balance without synthetic buffers or artificial chemical inputs.", badges: ["Pharma-Grade","No Synthetics","Safe Mineral"], route: "/products/27" },
];

function EcoProductsSection() {
  const [ref, vis] = useReveal(0.06);
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section id="eco-products" className="env-section-pad" style={{ background: B.pageBg, padding: "90px 48px" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: "all .7s" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" as const }}>Eco-Safe Product Range</span>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 10, marginBottom: 12 }}>Products That Protect the Pond</h2>
          <p style={{ fontSize: 15, color: B.slate, maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>These Innovare Biopharma products deliver farm results while actively reducing chemical load, antibiotic use, and ecological harm.</p>
        </div>
        <div className="env-eco-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {ECO_PRODUCTS.map((p, i) => (
            <div key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: `1.5px solid ${hovered===i ? p.color : B.border}`, boxShadow: hovered===i ? `0 12px 32px ${p.color}16` : "0 2px 8px rgba(0,0,0,0.04)", transform: hovered===i ? "translateY(-5px)" : "none", opacity: vis ? 1 : 0, transition: `all .3s ease, opacity .6s ${i*0.08}s ease` }}>
              <div style={{ height: 4, background: `linear-gradient(90deg, ${p.color}, ${p.color}55)` }} />
              <div style={{ padding: "22px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${p.color}12`, border: `1.5px solid ${p.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{p.icon}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: B.navy }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: p.color, fontWeight: 600 }}>{p.role}</div>
                  </div>
                </div>
                <div style={{ padding: "10px 14px", borderRadius: 10, background: `${p.color}08`, border: `1px solid ${p.color}18`, marginBottom: 12 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: p.color, letterSpacing: 1, textTransform: "uppercase" as const, marginBottom: 4 }}>🌿 Environmental Impact</div>
                  <p style={{ fontSize: 13, color: B.slate, lineHeight: 1.65 }}>{p.envImpact}</p>
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                  {p.badges.map((b, j) => (<span key={j} style={{ fontSize: 10, padding: "3px 10px", borderRadius: 100, fontWeight: 700, background: `${p.color}10`, border: `1px solid ${p.color}25`, color: p.color }}>{b}</span>))}
                </div>
                <Link href={p.route} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "9px 0", borderRadius: 10, textDecoration: "none", background: `linear-gradient(135deg, ${p.color}, ${p.color}bb)`, color: "#fff", fontSize: 13, fontWeight: 700 }}>View Product →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaterQualitySection() {
  const [ref, vis] = useReveal(0.08);
  return (
    <section className="env-section-pad" style={{ background: "#fff", padding: "90px 48px" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="env-water-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(-24px)", transition: "all .7s" }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" as const }}>How It Works</span>
            <h2 style={{ fontSize: "clamp(22px,3vw,38px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 10, marginBottom: 14 }}>The Probiotic<br />Water Quality Cycle</h2>
            <p style={{ fontSize: 14, color: B.slate, lineHeight: 1.8, marginBottom: 28 }}>
              Our probiotic products create a continuous beneficial cycle — bacteria
              outcompete pathogens, break down organic waste, reduce ammonia and H₂S,
              and restore a healthy pond microbiome without any chemical intervention.
            </p>
            <WaterCycleGraphic />
          </div>
          <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(24px)", transition: "all .7s .15s" }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" as const }}>Field Performance</span>
            <h2 style={{ fontSize: "clamp(22px,3vw,38px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 10, marginBottom: 24 }}>Measured Environmental<br />& Farm Benefits</h2>
            <ImpactChart vis={vis} />
          </div>
        </div>
      </div>
    </section>
  );
}

function DoDonotSection() {
  const [ref, vis] = useReveal(0.08);
  const dos = [
    "Use probiotics to control Vibrio naturally — avoid antibiotics",
    "Apply pond minerals to maintain correct water chemistry",
    "Use i-OXYVARE oxygen granules during DO crash emergencies",
    "Follow recommended dosage rates on every product label",
    "Store products in cool, dry, shaded conditions",
    "Maintain treatment records for each pond cycle",
  ];
  const donts = [
    "Never exceed recommended application rates in pond",
    "Do not mix two products without technician guidance",
    "Avoid overfeeding — excess feed degrades water quality fast",
    "Do not discharge untreated pond water into open waterways",
    "Never use antibiotics when probiotics are prescribed",
    "Do not dispose of empty pouches in or near water bodies",
  ];
  return (
    <section id="do-dont" className="env-section-pad" style={{ background: B.pageBg, padding: "90px 48px" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: "all .7s" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" as const }}>Responsible Use</span>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 10, marginBottom: 12 }}>What To Do & What To Avoid</h2>
          <p style={{ fontSize: 15, color: B.slate, maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>Using Innovare Biopharma products correctly ensures maximum farm benefit and minimum environmental impact.</p>
        </div>
        <div className="env-dodont-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: "all .7s .15s" }}>
          {/* DO */}
          <div style={{ background: B.greenBg, border: `1.5px solid ${B.greenBd}`, borderRadius: 20, padding: "28px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: B.green, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 18 }}>✓</div>
              <span style={{ fontSize: 16, fontWeight: 800, color: B.green }}>Best Practices</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {dos.map((d, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>✅</span>
                  <span style={{ fontSize: 13.5, color: B.slate, lineHeight: 1.55 }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
          {/* DON'T */}
          <div style={{ background: "#fff5f5", border: "1.5px solid #fecaca", borderRadius: 20, padding: "28px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: B.red, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 16 }}>✕</div>
              <span style={{ fontSize: 16, fontWeight: 800, color: B.red }}>What to Avoid</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {donts.map((d, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>❌</span>
                  <span style={{ fontSize: 13.5, color: B.slate, lineHeight: 1.55 }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ENVIRONMENT_FAQS = [
  {
    icon: "💧",
    q: "How do Innovare probiotics affect pond water quality?",
    a: "Probiotics like i-PROPONDVARE introduce beneficial Bacillus strains that break down organic waste — excess feed, faecal matter, and dead algae — reducing ammonia, nitrite, and hydrogen sulphide build-up. Regular application maintains a stable microbial balance in the pond bottom, preventing toxic gas accumulation and keeping dissolved oxygen levels optimal.",
  },
  {
    icon: "🌿",
    q: "Are Innovare products safe for the surrounding ecosystem?",
    a: "Yes. All Innovare Biopharma products are formulated without antibiotics, heavy metals, or persistent synthetic chemicals. Our probiotics are GRAS-listed bacterial strains and our mineral supplements use food-grade ingredients. Treated pond water, when properly managed, does not pose a risk to adjacent water bodies or soil.",
  },
  {
    icon: "♻️",
    q: "How should I dispose of empty product pouches and containers?",
    a: "Empty pouches and containers should never be disposed of in or near water bodies. Rinse containers thoroughly with clean water, allow to dry, and dispose through your local solid waste collection. Do not burn plastic pouches — incineration of treated packaging releases harmful fumes. Contact your Innovare field technician for bulk disposal guidance.",
  },
  {
    icon: "🐠",
    q: "What happens if I overdose a pond with mineral supplements?",
    a: "Over-application of pond minerals can shift water pH and alkalinity beyond safe ranges, stressing shrimp and fish gill tissue. Sudden ionic imbalances may trigger osmotic stress and moulting failure in shrimp. Always follow the label dosage rate and conduct a water quality test before and after application. If overdose is suspected, increase water exchange immediately and contact our technical team.",
  },
  {
    icon: "🌱",
    q: "Do Innovare products support organic or low-chemical aquaculture systems?",
    a: "Our probiotic and phytogenic product lines are well-suited to low-chemical production systems. i-VIBRIOVARE, i-PHYTOVARE, and i-PROPONDVARE replace the need for chemical disinfectants and antibiotic growth promoters. While full organic certification depends on your certifying body's approved inputs list, our non-antibiotic formulations align with responsible and residue-free aquaculture principles.",
  },
  {
    icon: "⚠️",
    q: "What should I do during an emergency dissolved oxygen crash?",
    a: "Immediately broadcast i-OXYVARE oxygen granules at 5–10 kg per hectare-metre across the pond surface, prioritising areas where fish or shrimp are showing surfacing behaviour. Simultaneously run all paddle-wheels at full capacity. Reduce or stop feeding entirely until DO recovers above 5 mg/L. Record the event and review aeration infrastructure and stocking density with your technician.",
  },
];

function EnvironmentFAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [ref, vis] = useReveal(0.1);

  return (
    <section className="env-faq-pad" style={{ background: "#fff", padding: "100px 48px" }}>
      <div ref={ref} style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)", transition: "all .7s" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" as const }}>
            Technical FAQs
          </span>
          <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 12 }}>
            Environment & Safety<br />
            <span style={{ color: B.teal }}>Questions Answered</span>
          </h2>
          <p style={{ fontSize: 15, color: B.slate, maxWidth: 480, margin: "14px auto 0", lineHeight: 1.75 }}>
            Practical answers on responsible product use, pond ecology, and environmental compliance.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ opacity: vis ? 1 : 0, transition: "opacity .7s .2s" }}>
          {ENVIRONMENT_FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                onClick={() => setOpenFaq(isOpen ? null : i)}
                style={{
                  background: isOpen ? B.greenBg : "#fff",
                  border: `1.5px solid ${isOpen ? B.green : B.border}`,
                  borderRadius: 16,
                  marginBottom: 12,
                  cursor: "pointer",
                  transition: "border-color .25s, background .25s, box-shadow .25s",
                  boxShadow: isOpen ? "0 4px 32px rgba(21,128,61,0.10)" : "0 2px 8px rgba(0,0,0,0.04)",
                  overflow: "hidden",
                }}
              >
                {/* Question row */}
                <div className="env-faq-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 26px", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: isOpen ? "rgba(21,128,61,0.12)" : B.greenBg,
                      border: `1px solid ${isOpen ? "rgba(21,128,61,0.28)" : B.greenBd}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 16, flexShrink: 0, transition: "background .25s, border-color .25s",
                    }}>
                      {faq.icon}
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 700, color: B.navy, lineHeight: 1.4 }}>
                      {faq.q}
                    </span>
                  </div>
                  <span style={{
                    fontSize: 20, color: B.green, flexShrink: 0, fontWeight: 300, lineHeight: 1,
                    transition: "transform .3s", display: "inline-block",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}>+</span>
                </div>

                {/* Answer */}
                <div style={{ maxHeight: isOpen ? 500 : 0, overflow: "hidden", transition: "max-height .38s cubic-bezier(.4,0,.2,1)" }}>
                  <div style={{ padding: "16px 26px 22px", fontSize: 14, color: B.slate, lineHeight: 1.85, borderTop: `1px solid ${B.greenBd}` }}>
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="env-faq-cta" style={{
          marginTop: 28,
          background: B.greenBg,
          border: `1px solid ${B.greenBd}`,
          borderRadius: 16, padding: "26px 32px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: 16,
          opacity: vis ? 1 : 0, transition: "opacity .7s .4s",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: `linear-gradient(135deg, ${B.green}, ${B.teal})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20, flexShrink: 0, boxShadow: "0 4px 14px rgba(21,128,61,0.25)",
            }}>🌿</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: B.navy }}>Still have an environment or safety question?</div>
              <div style={{ fontSize: 12, color: B.slate, marginTop: 2 }}>Our field technicians are available to advise on responsible farm practices.</div>
            </div>
          </div>
          <a href="mailto:info@innovarebiopharma.com" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "11px 26px", borderRadius: 40,
            background: `linear-gradient(135deg, ${B.green}, ${B.teal})`,
            color: "#fff", fontSize: 13, fontWeight: 700,
            textDecoration: "none", whiteSpace: "nowrap",
          }}>
            Ask a Technician →
          </a>
        </div>

      </div>
    </section>
  );
}

function StatsSection() {
  const [ref, vis] = useReveal(0.15);
  const STATS = [
    { icon: "🦠", n: 100, suffix: "%", label: "Antibiotic-free formulations" },
    { icon: "💧", n: 60,  suffix: "%", label: "Less water than industry avg" },
    { icon: "🌱", n: 10,  suffix: "K+", label: "Mangrove trees planted" },
    { icon: "♻️", n: 80,  suffix: "%", label: "Recycled packaging content" },
  ];
  return (
    <section className="env-stats-pad" style={{ background: `linear-gradient(135deg, ${B.blueDeep} 0%, ${B.blue} 100%)`, padding: "70px 48px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="env-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {STATS.map((s, i) => {
            const count = useCounter(s.n, vis);
            return (
              <div key={i} style={{ textAlign: "center", padding: "32px 16px", background: "rgba(255,255,255,0.08)", borderRadius: 18, border: "1px solid rgba(255,255,255,0.12)", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: `all .6s ${i*0.1}s ease` }}>
                <span style={{ fontSize: 30, display: "block", marginBottom: 10 }}>{s.icon}</span>
                <div style={{ fontSize: 36, fontWeight: 800, color: "#fff", lineHeight: 1 }}>{count}{s.suffix}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 8, lineHeight: 1.4 }}>{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const [ref, vis] = useReveal(0.15);
  return (
    <section className="env-cta-pad" style={{ background: `linear-gradient(135deg, ${B.blueDeep} 0%, ${B.blue} 60%, ${B.teal} 100%)`, padding: "100px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      {[380,520,660].map((s, i) => (
        <div key={i} style={{ position: "absolute", top: "50%", left: "50%", width: s, height: s, borderRadius: "50%", border: `1px solid rgba(255,255,255,${0.06-i*0.015})`, transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
      ))}
      <div ref={ref} style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)", transition: "all .7s" }}>
        <div style={{ fontSize: 48, marginBottom: 16, display: "flex", justifyContent: "center" }}>
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{
              width: 80,
              height: 80,
              objectFit: "contain",
              filter: `
                drop-shadow(0 0 8px rgba(255,255,255,0.9))
                drop-shadow(0 0 16px rgba(255,255,255,0.7))
                drop-shadow(0 0 24px rgba(255,255,255,0.5))
              `,
            }}
          />
        </div>
        <h2 style={{ fontSize: "clamp(26px,4vw,50px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: -1, marginBottom: 16 }}>
          Farm better.<br /><span style={{ color: "#5eead4" }}>Protect what matters.</span>
        </h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginBottom: 40 }}>
          Choose Innovare Biopharma products that work as hard for your pond's ecology
          as they do for your harvest yield.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/products" style={{ padding: "13px 30px", borderRadius: 40, background: "#fff", color: B.blue, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Browse All Products →</Link>
          <a href="mailto:info@innovarebiopharma.com" style={{ padding: "12px 24px", borderRadius: 40, border: "1.5px solid rgba(255,255,255,0.35)", background: "transparent", color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>📧 Contact Us</a>
        </div>
      </div>
    </section>
  );
}

export default function EnvironmentPage() {
  return (
    <main style={{ background: B.pageBg }}>
      <Hero />
      <WhatWeDoSection />
      <EcoProductsSection />
      <StatsSection />
      <WaterQualitySection />
      <CTASection />
      <DoDonotSection />
      <EnvironmentFAQSection />
      <Footer></Footer>

      <style jsx global>{`
        /* ===== Tablet / small-desktop (≤ 1024px) ===== */
        @media (max-width: 1024px) {
          .env-pillars-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .env-eco-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        /* ===== Tablet (≤ 900px) ===== */
        @media (max-width: 900px) {
          .env-hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .env-hero-graphic { display: none !important; }
          .env-water-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .env-dodont-grid { grid-template-columns: 1fr !important; gap: 18px !important; }
          .env-stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }

          .env-section-pad { padding: 64px 28px !important; }
          .env-hero-pad { padding: 84px 28px 56px !important; }
          .env-stats-pad { padding: 56px 28px !important; }
          .env-cta-pad { padding: 72px 28px !important; }
          .env-faq-pad { padding: 72px 28px !important; }
        }

        /* ===== Mobile (≤ 640px) ===== */
        @media (max-width: 640px) {
          .env-pillars-grid { grid-template-columns: 1fr !important; }
          .env-eco-grid { grid-template-columns: 1fr !important; }
          .env-stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }

          .env-section-pad { padding: 48px 18px !important; }
          .env-hero-pad { padding: 64px 18px 44px !important; }
          .env-stats-pad { padding: 44px 18px !important; }
          .env-cta-pad { padding: 56px 18px !important; }
          .env-faq-pad { padding: 56px 18px !important; }

          .env-faq-row { align-items: flex-start !important; }
          .env-faq-cta { flex-direction: column !important; align-items: flex-start !important; }
          .env-faq-cta a { width: 100% !important; justify-content: center !important; }
        }

        /* ===== Small mobile (≤ 400px) ===== */
        @media (max-width: 400px) {
          .env-stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}