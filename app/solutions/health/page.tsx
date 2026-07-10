// // // // "use client";

// // // // import { useEffect, useRef, useState } from "react";
// // // // import Footer, {footer} from "@/components/Footer";

// // // // // ─── Types ────────────────────────────────────────────────────────────────────
// // // // interface Product {
// // // //   id: number;
// // // //   name: string;
// // // //   tagline: string;
// // // //   category: string;
// // // //   badge: string;
// // // //   color: string;
// // // //   accent: string;
// // // //   textColor: string;
// // // //   benefits: string[];
// // // //   usage: string;
// // // //   icon: string;
// // // // }

// // // // interface Stat {
// // // //   value: string;
// // // //   label: string;
// // // //   suffix?: string;
// // // // }

// // // // interface Benefit {
// // // //   icon: string;
// // // //   title: string;
// // // //   desc: string;
// // // // }

// // // // // ─── Data ─────────────────────────────────────────────────────────────────────
// // // // const products: Product[] = [
// // // //   {
// // // //     id: 1,
// // // //     name: "AquaShield Pro",
// // // //     tagline: "Immunity Booster & Disease Resistance",
// // // //     category: "Immunity",
// // // //     badge: "Best Seller",
// // // //     color: "#0ea5e9",
// // // //     accent: "#e0f2fe",
// // // //     textColor: "#0369a1",
// // // //     benefits: ["Strengthens immune response", "Reduces mortality rates", "Anti-viral & anti-bacterial"],
// // // //     usage: "5 ml per kg feed daily",
// // // //     icon: "🛡️",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     name: "GillGuard Oxy",
// // // //     tagline: "Gill Health & Oxygen Optimization",
// // // //     category: "Respiratory",
// // // //     badge: "New Formula",
// // // //     color: "#10b981",
// // // //     accent: "#d1fae5",
// // // //     textColor: "#065f46",
// // // //     benefits: ["Prevents gill disease", "Improves oxygen absorption", "Reduces stress mortality"],
// // // //     usage: "10 ml per 1000 L water",
// // // //     icon: "🌿",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     name: "ProbioMax Aqua",
// // // //     tagline: "Gut Health & Feed Conversion",
// // // //     category: "Probiotic",
// // // //     badge: "GMP Certified",
// // // //     color: "#f59e0b",
// // // //     accent: "#fef3c7",
// // // //     textColor: "#92400e",
// // // //     benefits: ["Enhances FCR by 20%", "Promotes beneficial microflora", "Reduces ammonia levels"],
// // // //     usage: "2 g per kg feed",
// // // //     icon: "🦠",
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     name: "VitaGrow Marine",
// // // //     tagline: "Growth Accelerator & Vitamin Complex",
// // // //     category: "Growth",
// // // //     badge: "Top Rated",
// // // //     color: "#8b5cf6",
// // // //     accent: "#ede9fe",
// // // //     textColor: "#5b21b6",
// // // //     benefits: ["Accelerates growth by 30%", "Complete vitamin complex", "Improves feed palatability"],
// // // //     usage: "3 ml per kg feed",
// // // //     icon: "⚡",
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     name: "MineralPlex AQ",
// // // //     tagline: "Essential Minerals & Bone Development",
// // // //     category: "Minerals",
// // // //     badge: "Vet Approved",
// // // //     color: "#ef4444",
// // // //     accent: "#fee2e2",
// // // //     textColor: "#991b1b",
// // // //     benefits: ["Calcium & phosphorus balance", "Prevents skeletal deformities", "Supports scale formation"],
// // // //     usage: "4 g per kg feed",
// // // //     icon: "💎",
// // // //   },
// // // //   {
// // // //     id: 6,
// // // //     name: "WaterClear Pro",
// // // //     tagline: "Water Quality & Stress Reduction",
// // // //     category: "Water Quality",
// // // //     badge: "Eco-Safe",
// // // //     color: "#06b6d4",
// // // //     accent: "#cffafe",
// // // //     textColor: "#155e75",
// // // //     benefits: ["Reduces toxic ammonia", "Balances pH levels", "Clears turbid water"],
// // // //     usage: "15 ml per 1000 L water",
// // // //     icon: "💧",
// // // //   },
// // // // ];

// // // // const stats: Stat[] = [
// // // //   { value: "98", label: "Survival Rate", suffix: "%" },
// // // //   { value: "30", label: "Faster Growth", suffix: "%" },
// // // //   { value: "500", label: "Farms Served", suffix: "+" },
// // // //   { value: "20", label: "Years R&D", suffix: "+" },
// // // // ];

// // // // const benefits: Benefit[] = [
// // // //   {
// // // //     icon: "🔬",
// // // //     title: "Science-Backed Formulas",
// // // //     desc: "Every product is developed through rigorous research and validated by aquaculture scientists.",
// // // //   },
// // // //   {
// // // //     icon: "🌊",
// // // //     title: "Species-Specific Solutions",
// // // //     desc: "Tailored formulations for shrimp, fish, crab, and other aquatic species across all life stages.",
// // // //   },
// // // //   {
// // // //     icon: "🌱",
// // // //     title: "Eco-Friendly & Sustainable",
// // // //     desc: "Zero harmful residues, safe for ecosystems, and compliant with international aquaculture standards.",
// // // //   },
// // // //   {
// // // //     icon: "📊",
// // // //     title: "Proven ROI",
// // // //     desc: "Farms using our suite report 25–40% improvement in yield and significant reduction in disease losses.",
// // // //   },
// // // // ];

// // // // const healthAreas = [
// // // //   { label: "Immunity", pct: 95, color: "#0ea5e9" },
// // // //   { label: "Growth Rate", pct: 88, color: "#10b981" },
// // // //   { label: "Feed Conversion", pct: 92, color: "#f59e0b" },
// // // //   { label: "Water Quality", pct: 85, color: "#8b5cf6" },
// // // //   { label: "Survival Rate", pct: 98, color: "#ef4444" },
// // // // ];

// // // // // ─── Hooks ────────────────────────────────────────────────────────────────────
// // // // function useInView(threshold = 0.15) {
// // // //   const ref = useRef<HTMLDivElement>(null);
// // // //   const [inView, setInView] = useState(false);

// // // //   useEffect(() => {
// // // //     const el = ref.current;
// // // //     if (!el) return;
// // // //     const observer = new IntersectionObserver(
// // // //       ([entry]) => { if (entry.isIntersecting) setInView(true); },
// // // //       { threshold }
// // // //     );
// // // //     observer.observe(el);
// // // //     return () => observer.disconnect();
// // // //   }, [threshold]);

// // // //   return { ref, inView };
// // // // }

// // // // function useCountUp(target: number, active: boolean, duration = 1800) {
// // // //   const [count, setCount] = useState(0);

// // // //   useEffect(() => {
// // // //     if (!active) return;
// // // //     let start = 0;
// // // //     const step = target / (duration / 16);
// // // //     const timer = setInterval(() => {
// // // //       start += step;
// // // //       if (start >= target) { setCount(target); clearInterval(timer); }
// // // //       else setCount(Math.floor(start));
// // // //     }, 16);
// // // //     return () => clearInterval(timer);
// // // //   }, [active, target, duration]);

// // // //   return count;
// // // // }

// // // // // ─── Sub-components ───────────────────────────────────────────────────────────
// // // // function StatCard({ value, label, suffix, active }: Stat & { active: boolean }) {
// // // //   const num = useCountUp(parseInt(value), active);
// // // //   return (
// // // //     <div style={s.statCard}>
// // // //       <div style={s.statNum}>{num}{suffix}</div>
// // // //       <div style={s.statLabel}>{label}</div>
// // // //     </div>
// // // //   );
// // // // }

// // // // function ProductCard({ product, index }: { product: Product; index: number }) {
// // // //   const [flipped, setFlipped] = useState(false);
// // // //   const [hovered, setHovered] = useState(false);

// // // //   return (
// // // //     <div
// // // //       style={{
// // // //         ...s.cardOuter,
// // // //         animationDelay: `${index * 0.1}s`,
// // // //       }}
// // // //       onMouseEnter={() => setHovered(true)}
// // // //       onMouseLeave={() => { setHovered(false); setFlipped(false); }}
// // // //     >
// // // //       <div style={{ ...s.cardInner, transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
// // // //         {/* Front */}
// // // //         <div style={{ ...s.cardFace, ...s.cardFront, background: product.accent, borderColor: product.color + "44" }}>
// // // //           <div style={{ ...s.cardAccentLine, background: product.color }} />
// // // //           <div style={{ ...s.cardBadge, background: product.color + "22", color: product.textColor, borderColor: product.color + "44" }}>
// // // //             {product.badge}
// // // //           </div>
// // // //           <div style={s.cardIcon}>{product.icon}</div>
// // // //           <h3 style={{ ...s.cardName, color: product.textColor }}>{product.name}</h3>
// // // //           <p style={s.cardTagline}>{product.tagline}</p>
// // // //           <div style={{ ...s.cardCategory, background: product.color + "18", color: product.textColor }}>
// // // //             {product.category}
// // // //           </div>
// // // //           <button
// // // //             onClick={() => setFlipped(true)}
// // // //             style={{ ...s.cardBtn, background: product.color, boxShadow: `0 4px 20px ${product.color}55` }}
// // // //           >
// // // //             View Details →
// // // //           </button>
// // // //         </div>

// // // //         {/* Back */}
// // // //         <div style={{ ...s.cardFace, ...s.cardBack, background: product.color }}>
// // // //           <div style={s.backIcon}>{product.icon}</div>
// // // //           <h3 style={s.backName}>{product.name}</h3>
// // // //           <div style={s.backSection}>
// // // //             <p style={s.backSubtitle}>Key Benefits</p>
// // // //             {product.benefits.map((b, i) => (
// // // //               <div key={i} style={s.backBenefit}>
// // // //                 <span style={s.backCheck}>✓</span>
// // // //                 <span style={s.backBenefitText}>{b}</span>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //           <div style={s.backSection}>
// // // //             <p style={s.backSubtitle}>Usage</p>
// // // //             <p style={s.backUsage}>{product.usage}</p>
// // // //           </div>
// // // //           <button onClick={() => setFlipped(false)} style={s.backBtn}>
// // // //             ← Back
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // function HealthBar({ label, pct, color, active, delay }: { label: string; pct: number; color: string; active: boolean; delay: number }) {
// // // //   const [width, setWidth] = useState(0);

// // // //   useEffect(() => {
// // // //     if (!active) return;
// // // //     const t = setTimeout(() => setWidth(pct), delay);
// // // //     return () => clearTimeout(t);
// // // //   }, [active, pct, delay]);

// // // //   return (
// // // //     <div style={s.barRow}>
// // // //       <div style={s.barTop}>
// // // //         <span style={s.barLabel}>{label}</span>
// // // //         <span style={{ ...s.barPct, color }}>{width}%</span>
// // // //       </div>
// // // //       <div style={s.barTrack}>
// // // //         <div style={{ ...s.barFill, width: `${width}%`, background: color, boxShadow: `0 0 12px ${color}66`, transition: "width 1.2s cubic-bezier(0.34,1.56,0.64,1)" }} />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── Main Page ────────────────────────────────────────────────────────────────
// // // // export default function AquacultureHealthPage() {
// // // //   const heroRef = useRef<HTMLDivElement>(null);
// // // //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// // // //   const statsSection = useInView(0.3);
// // // //   const productsSection = useInView(0.1);
// // // //   const healthSection = useInView(0.3);
// // // //   const benefitsSection = useInView(0.2);
// // // //   const [activeProduct, setActiveProduct] = useState<number | null>(null);

// // // //   useEffect(() => {
// // // //     const handleMouse = (e: MouseEvent) => {
// // // //       setMousePos({ x: e.clientX, y: e.clientY });
// // // //     };
// // // //     window.addEventListener("mousemove", handleMouse);
// // // //     return () => window.removeEventListener("mousemove", handleMouse);
// // // //   }, []);

// // // //   return (
// // // //     <div style={s.page}>
// // // //       <style>{`
// // // //         @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Satoshi:wght@400;500;700&display=swap');

// // // //         * { box-sizing: border-box; margin: 0; padding: 0; }

// // // //         @keyframes floatUp {
// // // //           from { opacity: 0; transform: translateY(40px); }
// // // //           to   { opacity: 1; transform: translateY(0); }
// // // //         }
// // // //         @keyframes fadeIn {
// // // //           from { opacity: 0; }
// // // //           to   { opacity: 1; }
// // // //         }
// // // //         @keyframes bubble {
// // // //           0%   { transform: translateY(0) scale(1); opacity: 0.6; }
// // // //           50%  { opacity: 1; }
// // // //           100% { transform: translateY(-120vh) scale(0.6); opacity: 0; }
// // // //         }
// // // //         @keyframes wave {
// // // //           0%   { transform: translateX(0); }
// // // //           100% { transform: translateX(-50%); }
// // // //         }
// // // //         @keyframes shimmer {
// // // //           0%   { background-position: -200% center; }
// // // //           100% { background-position: 200% center; }
// // // //         }
// // // //         @keyframes pulse {
// // // //           0%, 100% { transform: scale(1); opacity: 1; }
// // // //           50%       { transform: scale(1.05); opacity: 0.85; }
// // // //         }
// // // //         @keyframes rotateGlow {
// // // //           from { transform: rotate(0deg); }
// // // //           to   { transform: rotate(360deg); }
// // // //         }
// // // //         @keyframes cardEntrance {
// // // //           from { opacity: 0; transform: translateY(50px) scale(0.95); }
// // // //           to   { opacity: 1; transform: translateY(0) scale(1); }
// // // //         }
// // // //         @keyframes droplet {
// // // //           0%   { transform: scaleY(0) translateY(-10px); opacity:0; }
// // // //           60%  { transform: scaleY(1.1) translateY(0); opacity:1; }
// // // //           100% { transform: scaleY(1) translateY(0); opacity:1; }
// // // //         }

// // // //         .hero-title {
// // // //           font-family: 'Clash Display', sans-serif;
// // // //           font-size: clamp(42px, 6vw, 88px);
// // // //           font-weight: 700;
// // // //           line-height: 1.0;
// // // //           color: #fff;
// // // //           animation: floatUp 1s ease both;
// // // //         }
// // // //         .hero-sub {
// // // //           font-family: 'Satoshi', sans-serif;
// // // //           font-size: clamp(16px, 2vw, 20px);
// // // //           color: rgba(255,255,255,0.75);
// // // //           max-width: 560px;
// // // //           line-height: 1.7;
// // // //           animation: floatUp 1s 0.2s ease both;
// // // //         }
// // // //         .hero-cta {
// // // //           animation: floatUp 1s 0.4s ease both;
// // // //         }
// // // //         .section-title {
// // // //           font-family: 'Clash Display', sans-serif;
// // // //           font-size: clamp(30px, 4vw, 52px);
// // // //           font-weight: 700;
// // // //           color: #0f172a;
// // // //           line-height: 1.1;
// // // //         }
// // // //         .card-animate {
// // // //           animation: cardEntrance 0.7s ease both;
// // // //         }
// // // //         .benefit-animate {
// // // //           animation: floatUp 0.6s ease both;
// // // //         }
// // // //         .bubble {
// // // //           position: absolute;
// // // //           border-radius: 50%;
// // // //           background: rgba(255,255,255,0.12);
// // // //           animation: bubble linear infinite;
// // // //         }
// // // //         .wave-wrap {
// // // //           position: absolute;
// // // //           bottom: 0; left: 0; right: 0;
// // // //           height: 80px;
// // // //           overflow: hidden;
// // // //         }
// // // //         .wave-svg {
// // // //           display: block;
// // // //           width: 200%;
// // // //           animation: wave 8s linear infinite;
// // // //         }
// // // //         .stat-card-hover:hover {
// // // //           transform: translateY(-6px) scale(1.03);
// // // //           box-shadow: 0 20px 60px rgba(14,165,233,0.25);
// // // //         }
// // // //         .product-card:hover {
// // // //           transform: translateY(-8px);
// // // //           box-shadow: 0 30px 80px rgba(0,0,0,0.15);
// // // //         }
// // // //         .btn-glow:hover {
// // // //           transform: translateY(-2px);
// // // //           box-shadow: 0 8px 32px rgba(14,165,233,0.5) !important;
// // // //         }
// // // //         .btn-outline:hover {
// // // //           background: rgba(255,255,255,0.12) !important;
// // // //         }
// // // //       `}</style>

// // // //       {/* ── HERO ── */}
// // // //       <section style={s.hero} ref={heroRef}>
// // // //         {/* Animated bubbles */}
// // // //         {[...Array(14)].map((_, i) => (
// // // //           <div
// // // //             key={i}
// // // //             className="bubble"
// // // //             style={{
// // // //               width: `${8 + Math.random() * 24}px`,
// // // //               height: `${8 + Math.random() * 24}px`,
// // // //               left: `${Math.random() * 100}%`,
// // // //               bottom: `${Math.random() * 20}%`,
// // // //               animationDuration: `${5 + Math.random() * 8}s`,
// // // //               animationDelay: `${Math.random() * 5}s`,
// // // //             }}
// // // //           />
// // // //         ))}

// // // //         {/* Radial glow that follows mouse */}
// // // //         <div style={{
// // // //           position: "absolute", inset: 0, pointerEvents: "none",
// // // //           background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56,189,248,0.12), transparent 60%)`,
// // // //           transition: "background 0.1s",
// // // //         }} />

// // // //         {/* Grid overlay */}
// // // //         <div style={s.heroGrid} />

// // // //         <div style={s.heroContent}>
// // // //           <div style={s.heroBadge}>
// // // //             <span style={s.heroBadgeDot} />
// // // //             Aquaculture Health Solutions
// // // //           </div>

// // // //           <h3 className="hero-title">
// // // //             Advanced Health  <br />
// // // //             <span style={s.heroGradientText}>Solutions</span> for Aquaculture
// // // //           </h3>

// // // //           <p className="hero-sub">
// // // //             Complete health management for aquatic species — from immunity and growth to water quality and gut health. Trusted by 500+ farms across India.
// // // //           </p>

// // // //           <div className="hero-cta" style={s.heroCtas}>
// // // //             <button className="btn-glow" style={s.btnPrimary}>
// // // //               Explore Products
// // // //             </button>
// // // //             <button className="btn-outline" style={s.btnOutline}>
// // // //               View Research →
// // // //             </button>
// // // //           </div>

// // // //           {/* Floating cards */}
// // // //           <div style={s.heroCards}>
// // // //             {[
// // // //               { icon: "🛡️", label: "Immunity Boost", val: "+95%" },
// // // //               { icon: "⚡", label: "Faster Growth", val: "+30%" },
// // // //               { icon: "💧", label: "Water Quality", val: "98/100" },
// // // //             ].map((c, i) => (
// // // //               <div key={i} style={{ ...s.heroFloatCard, animationDelay: `${0.6 + i * 0.15}s` }} className="card-animate">
// // // //                 <span style={s.heroFloatIcon}>{c.icon}</span>
// // // //                 <div>
// // // //                   <div style={s.heroFloatVal}>{c.val}</div>
// // // //                   <div style={s.heroFloatLabel}>{c.label}</div>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* Wave bottom */}
// // // //         <div className="wave-wrap">
// // // //           <svg className="wave-svg" viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height: "80px" }}>
// // // //             <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#f0f9ff" />
// // // //             <path d="M0,55 C360,20 720,70 1080,40 C1260,25 1380,55 1440,55 L1440,80 L0,80 Z" fill="#e0f2fe" opacity="0.5" />
// // // //           </svg>
// // // //         </div>
// // // //       </section>

// // // //       {/* ── STATS ── */}
// // // //       <section style={s.statsSection} ref={statsSection.ref}>
// // // //         <div style={s.statsInner}>
// // // //           {stats.map((stat, i) => (
// // // //             <div key={i} className="stat-card-hover" style={{ ...s.statCard, transition: "all 0.3s ease", animationDelay: `${i * 0.1}s`, ...(statsSection.inView ? { animation: `floatUp 0.7s ${i * 0.1}s ease both` } : { opacity: 0 }) }}>
// // // //               <StatCard {...stat} active={statsSection.inView} />
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </section>

// // // //       {/* ── HEALTH METRICS ── */}
// // // //       <section style={s.healthSection} ref={healthSection.ref}>
// // // //         <div style={s.sectionInner}>
// // // //           <div style={s.healthGrid}>
// // // //             <div style={s.healthLeft}>
// // // //               <div style={s.eyebrow}>Performance Metrics</div>
// // // //               <h2 className="section-title">Farm Health<br /><span style={s.blueText}>at a Glance</span></h2>
// // // //               <p style={s.bodyText}>
// // // //                 Our product suite delivers measurable, consistent results across all key aquaculture health indicators. Real data from 500+ partner farms.
// // // //               </p>
// // // //               <div style={s.healthBars}>
// // // //                 {healthAreas.map((h, i) => (
// // // //                   <HealthBar key={i} {...h} active={healthSection.inView} delay={i * 180} />
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //             <div style={s.healthRight}>
// // // //               <div style={s.healthVisual}>
// // // //                 <div style={s.orbOuter}>
// // // //                   <div style={s.orbMiddle}>
// // // //                     <div style={s.orbInner}>
// // // //                       <span style={s.orbIcon}>🌊</span>
// // // //                       <span style={s.orbLabel}>Aqua Health</span>
// // // //                       <span style={s.orbScore}>9.8/10</span>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //                 {/* Orbit items */}
// // // //                 {[
// // // //                   { icon: "🛡️", label: "Immunity", angle: 0 },
// // // //                   { icon: "🌿", label: "Gills", angle: 72 },
// // // //                   { icon: "🦠", label: "Gut", angle: 144 },
// // // //                   { icon: "⚡", label: "Growth", angle: 216 },
// // // //                   { icon: "💧", label: "Water", angle: 288 },
// // // //                 ].map((item, i) => {
// // // //                   const rad = (item.angle - 90) * (Math.PI / 180);
// // // //                   const r = 120;
// // // //                   const x = 50 + (r / 2.4) * Math.cos(rad);
// // // //                   const y = 50 + (r / 2.4) * Math.sin(rad);
// // // //                   return (
// // // //                     <div key={i} style={{ ...s.orbitItem, left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)", animationDelay: `${i * 0.4}s` }}>
// // // //                       <div style={s.orbitIcon}>{item.icon}</div>
// // // //                       <div style={s.orbitLabel}>{item.label}</div>
// // // //                     </div>
// // // //                   );
// // // //                 })}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ── PRODUCTS ── */}
// // // //       <section style={s.productsSection} ref={productsSection.ref}>
// // // //         <div style={s.sectionInner}>
// // // //           <div style={s.sectionHeader}>
// // // //             <div style={s.eyebrow}>Our Product Range</div>
// // // //             <h2 className="section-title">Complete Health<br /><span style={s.blueText}>Product Suite</span></h2>
// // // //             <p style={{ ...s.bodyText, maxWidth: "500px", margin: "0 auto" }}>
// // // //               Six targeted solutions covering every aspect of aquatic animal health — hover a card and flip to see full details.
// // // //             </p>
// // // //           </div>
// // // //           <div style={s.productsGrid}>
// // // //             {products.map((product, i) => (
// // // //               <div
// // // //                 key={product.id}
// // // //                 className="product-card card-animate"
// // // //                 style={{ transition: "all 0.4s ease", ...(productsSection.inView ? {} : { opacity: 0 }), animationDelay: `${i * 0.1}s` }}
// // // //               >
// // // //                 <ProductCard product={product} index={i} />
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ── WHY CHOOSE US ── */}
// // // //       <section style={s.benefitsSection} ref={benefitsSection.ref}>
// // // //         <div style={s.benefitsBg} />
// // // //         <div style={s.sectionInner}>
// // // //           <div style={s.sectionHeader}>
// // // //             <div style={{ ...s.eyebrow, color: "#38bdf8" }}>Why Innovare Biopharma</div>
// // // //             <h2 className="section-title" style={{ color: "#fff" }}>
// // // //               Built for<br />Aquaculture Excellence
// // // //             </h2>
// // // //           </div>
// // // //           <div style={s.benefitsGrid}>
// // // //             {benefits.map((b, i) => (
// // // //               <div
// // // //                 key={i}
// // // //                 className="benefit-animate"
// // // //                 style={{
// // // //                   ...s.benefitCard,
// // // //                   ...(benefitsSection.inView ? {} : { opacity: 0 }),
// // // //                   animationDelay: `${i * 0.15}s`,
// // // //                 }}
// // // //               >
// // // //                 <div style={s.benefitIcon}>{b.icon}</div>
// // // //                 <h3 style={s.benefitTitle}>{b.title}</h3>
// // // //                 <p style={s.benefitDesc}>{b.desc}</p>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ── USAGE GUIDE ── */}
// // // //       <section style={s.usageSection}>
// // // //         <div style={s.sectionInner}>
// // // //           <div style={s.sectionHeader}>
// // // //             <div style={s.eyebrow}>How It Works</div>
// // // //             <h2 className="section-title">Simple 3-Step<br /><span style={s.blueText}>Protocol</span></h2>
// // // //           </div>
// // // //           <div style={s.stepsGrid}>
// // // //             {[
// // // //               { num: "01", title: "Diagnose", desc: "Our experts assess your farm's species, stocking density, water parameters, and health history.", icon: "🔬" },
// // // //               { num: "02", title: "Prescribe", desc: "Get a customized product protocol designed for your specific species and production cycle.", icon: "📋" },
// // // //               { num: "03", title: "Thrive", desc: "Apply products as directed, monitor health metrics, and watch your farm performance improve.", icon: "📈" },
// // // //             ].map((step, i) => (
// // // //               <div key={i} style={s.stepCard}>
// // // //                 <div style={s.stepNum}>{step.num}</div>
// // // //                 <div style={s.stepIcon}>{step.icon}</div>
// // // //                 <h3 style={s.stepTitle}>{step.title}</h3>
// // // //                 <p style={s.stepDesc}>{step.desc}</p>
// // // //                 {i < 2 && <div style={s.stepArrow}>→</div>}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ── CTA BANNER ── */}
// // // //       <section style={s.ctaBanner}>
// // // //         <div style={s.ctaGlow} />
// // // //         <div style={s.ctaContent}>
// // // //           <h2 className="section-title" style={{ color: "#fff", textAlign: "center" }}>
// // // //             Ready to Transform<br />Your Farm's Health?
// // // //           </h2>
// // // //           <p style={s.ctaBody}>
// // // //             Join 500+ aquaculture farms already using Innovare Biopharma products.
// // // //           </p>
// // // //           <div style={s.ctaBtns}>
// // // //             <button className="btn-glow" style={s.btnPrimary}>Get Started Today</button>
// // // //             <button className="btn-outline" style={s.btnOutline}>Download Catalog</button>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //       <Footer>
        
// // // //       </Footer>
      
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── Styles ───────────────────────────────────────────────────────────────────
// // // // const s: Record<string, React.CSSProperties> = {
// // // //   page: {
// // // //     fontFamily: "'Satoshi', 'Segoe UI', sans-serif",
// // // //     background: "#f0f9ff",
// // // //     overflowX: "hidden",
// // // //   },

// // // //   // Hero
// // // //   // hero: {
// // // //   //   background: "linear-gradient(135deg, #0c1a3a 0%, #0e3a6e 40%, #0369a1 100%)",
// // // //   //   minHeight: "100vh",
// // // //   //   position: "relative",
// // // //   //   display: "flex",
// // // //   //   alignItems: "center",
// // // //   //   overflow: "hidden",
// // // //   //   paddingBottom: "80px",
// // // //   // },
// // // // //   hero: {
// // // // //   backgroundImage: `
// // // // //     linear-gradient(135deg, rgba(12,26,58,0.65) 0%, rgba(14,58,110,0.55) 40%, rgba(3,105,161,0.5) 100%),
// // // // //     url('/images/prawn.jpeg')
// // // // //   `,
// // // // //   backgroundSize: "cover",
// // // // //   backgroundPosition: "center",
// // // // //   backgroundRepeat: "no-repeat",

// // // // //   minHeight: "100vh",
// // // // //   position: "relative",
// // // // //   display: "flex",
// // // // //   alignItems: "center",
// // // // //   overflow: "hidden",
// // // // //   paddingBottom: "80px",
// // // // // },

// // // // hero: {
// // // //   backgroundImage: `
// // // //     linear-gradient(135deg, rgba(6,12,30,0.85) 0%, rgba(10,30,60,0.8) 40%, rgba(14,165,233,0.55) 100%),
// // // //     url('/images/prawn.jpeg')
// // // //   `,
// // // //   backgroundSize: "cover",
// // // //   backgroundPosition: "center",
// // // //   backgroundRepeat: "no-repeat",

// // // //   minHeight: "100vh",
// // // //   position: "relative",
// // // //   display: "flex",
// // // //   alignItems: "center",
// // // //   overflow: "hidden",
// // // //   paddingBottom: "80px",
// // // // },
// // // //   heroGrid: {
// // // //     position: "absolute", inset: 0, pointerEvents: "none",
// // // //     backgroundImage: "linear-gradient(rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.06) 1px, transparent 1px)",
// // // //     backgroundSize: "60px 60px",
// // // //   },
// // // //   heroContent: {
// // // //     maxWidth: "1100px", margin: "0 auto", padding: "80px 40px 40px",
// // // //     position: "relative", zIndex: 2,
// // // //   },
// // // //   heroBadge: {
// // // //     display: "inline-flex", alignItems: "center", gap: "8px",
// // // //     background: "rgba(56,189,248,0.15)", border: "0.5px solid rgba(56,189,248,0.4)",
// // // //     color: "#7dd3fc", fontSize: "12px", fontWeight: 500,
// // // //     padding: "6px 16px", borderRadius: "20px", letterSpacing: "0.05em",
// // // //     marginBottom: "24px",
// // // //     animation: "floatUp 0.8s ease both",
// // // //   },
// // // //   heroBadgeDot: {
// // // //     width: "6px", height: "6px", borderRadius: "50%",
// // // //     background: "#38bdf8", display: "inline-block",
// // // //     boxShadow: "0 0 8px #38bdf8",
// // // //   },
// // // //   heroGradientText: {
// // // //     background: "linear-gradient(90deg, #38bdf8, #22d3ee, #34d399)",
// // // //     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
// // // //     backgroundClip: "text",
// // // //   },
// // // //   heroCtas: {
// // // //     display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "36px",
// // // //   },
// // // //   btnPrimary: {
// // // //     background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
// // // //     color: "#fff", border: "none", padding: "14px 32px",
// // // //     borderRadius: "40px", fontSize: "15px", fontWeight: 600,
// // // //     cursor: "pointer", transition: "all 0.3s ease",
// // // //     boxShadow: "0 4px 24px rgba(14,165,233,0.4)",
// // // //     letterSpacing: "0.01em",
// // // //   },
// // // //   btnOutline: {
// // // //     background: "rgba(255,255,255,0.08)",
// // // //     color: "#e0f2fe", border: "1px solid rgba(255,255,255,0.25)",
// // // //     padding: "14px 32px", borderRadius: "40px",
// // // //     fontSize: "15px", fontWeight: 500,
// // // //     cursor: "pointer", transition: "all 0.3s ease",
// // // //   },
// // // //   heroCards: {
// // // //     display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "48px",
// // // //   },
// // // //   heroFloatCard: {
// // // //     background: "rgba(255,255,255,0.1)",
// // // //     backdropFilter: "blur(12px)",
// // // //     border: "0.5px solid rgba(255,255,255,0.2)",
// // // //     borderRadius: "14px", padding: "14px 20px",
// // // //     display: "flex", alignItems: "center", gap: "12px",
// // // //   },
// // // //   heroFloatIcon: { fontSize: "24px" },
// // // //   heroFloatVal: {
// // // //     color: "#fff", fontSize: "18px", fontWeight: 700,
// // // //     fontFamily: "'Clash Display', sans-serif",
// // // //   },
// // // //   heroFloatLabel: {
// // // //     color: "rgba(255,255,255,0.6)", fontSize: "11px",
// // // //     textTransform: "uppercase", letterSpacing: "0.06em",
// // // //   },

// // // //   // Stats
// // // //   statsSection: {
// // // //     background: "#fff",
// // // //     padding: "0",
// // // //   },
// // // //   statsInner: {
// // // //     maxWidth: "1100px", margin: "0 auto",
// // // //     display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
// // // //     gap: "0",
// // // //   },
// // // //   statCard: {
// // // //     padding: "40px 32px",
// // // //     borderRight: "0.5px solid #e0f2fe",
// // // //     textAlign: "center",
// // // //     background: "#fff",
// // // //     cursor: "default",
// // // //   },
// // // //   statNum: {
// // // //     fontFamily: "'Clash Display', sans-serif",
// // // //     fontSize: "52px", fontWeight: 700,
// // // //     color: "#0369a1", lineHeight: 1,
// // // //     marginBottom: "8px",
// // // //   },
// // // //   statLabel: {
// // // //     fontSize: "13px", color: "#64748b",
// // // //     textTransform: "uppercase", letterSpacing: "0.08em",
// // // //     fontWeight: 500,
// // // //   },

// // // //   // Health section
// // // //   healthSection: {
// // // //     background: "#f0f9ff", padding: "100px 0",
// // // //   },
// // // //   sectionInner: {
// // // //     maxWidth: "1100px", margin: "0 auto", padding: "0 40px",
// // // //   },
// // // //   healthGrid: {
// // // //     display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center",
// // // //   },
// // // //   healthLeft: {},
// // // //   healthRight: {
// // // //     display: "flex", justifyContent: "center", alignItems: "center",
// // // //   },
// // // //   healthVisual: {
// // // //     position: "relative", width: "320px", height: "320px",
// // // //   },
// // // //   orbOuter: {
// // // //     position: "absolute", inset: 0,
// // // //     borderRadius: "50%",
// // // //     border: "1.5px dashed rgba(14,165,233,0.3)",
// // // //     display: "flex", alignItems: "center", justifyContent: "center",
// // // //     animation: "rotateGlow 20s linear infinite",
// // // //   },
// // // //   orbMiddle: {
// // // //     width: "220px", height: "220px", borderRadius: "50%",
// // // //     border: "1px solid rgba(14,165,233,0.2)",
// // // //     display: "flex", alignItems: "center", justifyContent: "center",
// // // //   },
// // // //   orbInner: {
// // // //     width: "150px", height: "150px", borderRadius: "50%",
// // // //     background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
// // // //     display: "flex", flexDirection: "column",
// // // //     alignItems: "center", justifyContent: "center",
// // // //     boxShadow: "0 0 60px rgba(14,165,233,0.4)",
// // // //     animation: "pulse 3s ease-in-out infinite",
// // // //   },
// // // //   orbIcon: { fontSize: "28px" },
// // // //   orbLabel: { color: "rgba(255,255,255,0.8)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.08em", marginTop: "4px" },
// // // //   orbScore: { color: "#fff", fontSize: "18px", fontWeight: 700, fontFamily: "'Clash Display', sans-serif" },
// // // //   orbitItem: {
// // // //     position: "absolute",
// // // //     display: "flex", flexDirection: "column", alignItems: "center", gap: "2px",
// // // //     animation: "floatUp 0.6s ease both",
// // // //   },
// // // //   orbitIcon: {
// // // //     width: "44px", height: "44px", borderRadius: "50%",
// // // //     background: "#fff", border: "1.5px solid #bae6fd",
// // // //     display: "flex", alignItems: "center", justifyContent: "center",
// // // //     fontSize: "18px", boxShadow: "0 4px 16px rgba(14,165,233,0.15)",
// // // //   },
// // // //   orbitLabel: {
// // // //     fontSize: "10px", color: "#0369a1", fontWeight: 600,
// // // //     textTransform: "uppercase", letterSpacing: "0.05em",
// // // //   },
// // // //   eyebrow: {
// // // //     fontSize: "11px", fontWeight: 600, color: "#0ea5e9",
// // // //     textTransform: "uppercase", letterSpacing: "0.12em",
// // // //     marginBottom: "12px",
// // // //   },
// // // //   blueText: { color: "#0369a1" },
// // // //   bodyText: {
// // // //     fontSize: "15px", color: "#475569", lineHeight: 1.8, marginTop: "16px",
// // // //   },
// // // //   healthBars: { marginTop: "32px", display: "flex", flexDirection: "column", gap: "20px" },
// // // //   barRow: {},
// // // //   barTop: {
// // // //     display: "flex", justifyContent: "space-between",
// // // //     marginBottom: "6px",
// // // //   },
// // // //   barLabel: { fontSize: "13px", color: "#334155", fontWeight: 500 },
// // // //   barPct: { fontSize: "13px", fontWeight: 700 },
// // // //   barTrack: {
// // // //     height: "8px", background: "#e0f2fe", borderRadius: "8px", overflow: "hidden",
// // // //   },
// // // //   barFill: { height: "100%", borderRadius: "8px" },

// // // //   // Products
// // // //   productsSection: {
// // // //     background: "#fff", padding: "100px 0",
// // // //   },
// // // //   sectionHeader: {
// // // //     textAlign: "center", marginBottom: "56px",
// // // //   },
// // // //   productsGrid: {
// // // //     display: "grid",
// // // //     gridTemplateColumns: "repeat(3, 1fr)",
// // // //     gap: "24px",
// // // //   },

// // // //   // Card flip
// // // //   cardOuter: {
// // // //     perspective: "1000px",
// // // //     height: "360px",
// // // //   },
// // // //   cardInner: {
// // // //     position: "relative", width: "100%", height: "100%",
// // // //     transformStyle: "preserve-3d",
// // // //     transition: "transform 0.65s cubic-bezier(0.34,1.56,0.64,1)",
// // // //   },
// // // //   cardFace: {
// // // //     position: "absolute", inset: 0,
// // // //     backfaceVisibility: "hidden",
// // // //     WebkitBackfaceVisibility: "hidden",
// // // //     borderRadius: "20px",
// // // //     padding: "28px",
// // // //     border: "0.5px solid",
// // // //     display: "flex", flexDirection: "column",
// // // //   },
// // // //   cardFront: {},
// // // //   cardBack: {
// // // //     transform: "rotateY(180deg)",
// // // //   },
// // // //   cardAccentLine: {
// // // //     position: "absolute", top: 0, left: "28px", right: "28px",
// // // //     height: "3px", borderRadius: "0 0 3px 3px",
// // // //   },
// // // //   cardBadge: {
// // // //     alignSelf: "flex-start", fontSize: "10px", fontWeight: 600,
// // // //     padding: "3px 10px", borderRadius: "20px", border: "0.5px solid",
// // // //     letterSpacing: "0.05em", textTransform: "uppercase",
// // // //     marginBottom: "12px",
// // // //   },
// // // //   cardIcon: { fontSize: "36px", marginBottom: "12px" },
// // // //   cardName: {
// // // //     fontFamily: "'Clash Display', sans-serif",
// // // //     fontSize: "20px", fontWeight: 700, marginBottom: "6px",
// // // //   },
// // // //   cardTagline: {
// // // //     fontSize: "12px", color: "#64748b", lineHeight: 1.5,
// // // //     flexGrow: 1, marginBottom: "12px",
// // // //   },
// // // //   cardCategory: {
// // // //     alignSelf: "flex-start", fontSize: "11px", fontWeight: 500,
// // // //     padding: "4px 12px", borderRadius: "20px", marginBottom: "16px",
// // // //   },
// // // //   cardBtn: {
// // // //     color: "#fff", border: "none", padding: "10px 20px",
// // // //     borderRadius: "24px", fontSize: "12px", fontWeight: 600,
// // // //     cursor: "pointer", alignSelf: "flex-start",
// // // //     transition: "all 0.2s",
// // // //   },

// // // //   // Card back
// // // //   backIcon: { fontSize: "28px", marginBottom: "8px" },
// // // //   backName: {
// // // //     fontFamily: "'Clash Display', sans-serif",
// // // //     fontSize: "17px", fontWeight: 700, color: "#fff",
// // // //     marginBottom: "16px",
// // // //   },
// // // //   backSection: { marginBottom: "14px" },
// // // //   backSubtitle: {
// // // //     fontSize: "10px", color: "rgba(255,255,255,0.6)",
// // // //     textTransform: "uppercase", letterSpacing: "0.08em",
// // // //     marginBottom: "6px", fontWeight: 600,
// // // //   },
// // // //   backBenefit: {
// // // //     display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "4px",
// // // //   },
// // // //   backCheck: { color: "#fff", fontWeight: 700, fontSize: "12px", marginTop: "1px" },
// // // //   backBenefitText: { color: "rgba(255,255,255,0.9)", fontSize: "12px", lineHeight: 1.4 },
// // // //   backUsage: {
// // // //     color: "#fff", fontSize: "13px", fontWeight: 600,
// // // //     background: "rgba(255,255,255,0.15)",
// // // //     borderRadius: "8px", padding: "8px 12px",
// // // //   },
// // // //   backBtn: {
// // // //     background: "rgba(255,255,255,0.2)", color: "#fff",
// // // //     border: "0.5px solid rgba(255,255,255,0.4)",
// // // //     padding: "8px 18px", borderRadius: "20px", fontSize: "12px",
// // // //     fontWeight: 500, cursor: "pointer", marginTop: "8px",
// // // //     transition: "background 0.2s",
// // // //   },

// // // //   // Benefits
// // // //   benefitsSection: {
// // // //     background: "linear-gradient(135deg, #0c1a3a 0%, #0e3a6e 100%)",
// // // //     padding: "100px 0", position: "relative", overflow: "hidden",
// // // //   },
// // // //   benefitsBg: {
// // // //     position: "absolute", inset: 0,
// // // //     backgroundImage: "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
// // // //     backgroundSize: "60px 60px",
// // // //   },
// // // //   benefitsGrid: {
// // // //     display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px",
// // // //     position: "relative", zIndex: 1,
// // // //   },
// // // //   benefitCard: {
// // // //     background: "rgba(255,255,255,0.05)",
// // // //     border: "0.5px solid rgba(255,255,255,0.1)",
// // // //     borderRadius: "20px", padding: "28px 22px",
// // // //     transition: "all 0.3s ease",
// // // //   },
// // // //   benefitIcon: { fontSize: "28px", marginBottom: "14px" },
// // // //   benefitTitle: {
// // // //     fontFamily: "'Clash Display', sans-serif",
// // // //     fontSize: "16px", fontWeight: 600, color: "#fff",
// // // //     marginBottom: "10px",
// // // //   },
// // // //   benefitDesc: {
// // // //     fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7,
// // // //   },

// // // //   // Usage steps
// // // //   usageSection: { background: "#f0f9ff", padding: "100px 0" },
// // // //   stepsGrid: {
// // // //     display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
// // // //     gap: "0", position: "relative",
// // // //   },
// // // //   stepCard: {
// // // //     background: "#fff", border: "0.5px solid #bae6fd",
// // // //     borderRadius: "20px", padding: "36px 28px",
// // // //     position: "relative", margin: "0 12px",
// // // //     boxShadow: "0 4px 24px rgba(14,165,233,0.08)",
// // // //   },
// // // //   stepNum: {
// // // //     fontFamily: "'Clash Display', sans-serif",
// // // //     fontSize: "60px", fontWeight: 700, color: "#e0f2fe",
// // // //     lineHeight: 1, marginBottom: "16px",
// // // //   },
// // // //   stepIcon: { fontSize: "28px", marginBottom: "12px" },
// // // //   stepTitle: {
// // // //     fontFamily: "'Clash Display', sans-serif",
// // // //     fontSize: "22px", fontWeight: 700, color: "#0f172a",
// // // //     marginBottom: "10px",
// // // //   },
// // // //   stepDesc: { fontSize: "14px", color: "#64748b", lineHeight: 1.7 },
// // // //   stepArrow: {
// // // //     position: "absolute", right: "-28px", top: "50%",
// // // //     transform: "translateY(-50%)",
// // // //     fontSize: "24px", color: "#0ea5e9", zIndex: 2, fontWeight: 700,
// // // //   },

// // // //   // CTA Banner
// // // //   ctaBanner: {
// // // //     background: "linear-gradient(135deg, #0369a1, #0ea5e9)",
// // // //     padding: "100px 40px", textAlign: "center", position: "relative", overflow: "hidden",
// // // //   },
// // // //   ctaGlow: {
// // // //     position: "absolute", top: "50%", left: "50%",
// // // //     transform: "translate(-50%,-50%)",
// // // //     width: "600px", height: "600px", borderRadius: "50%",
// // // //     background: "radial-gradient(circle, rgba(255,255,255,0.1), transparent 70%)",
// // // //   },
// // // //   ctaContent: { position: "relative", zIndex: 1 },
// // // //   ctaBody: {
// // // //     color: "rgba(255,255,255,0.8)", fontSize: "16px",
// // // //     marginTop: "16px", marginBottom: "32px",
// // // //   },
// // // //   ctaBtns: { display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" },

// // // //   // Footer
// // // //   footer: { background: "#0c1a3a", padding: "48px 40px" },
// // // //   footerInner: {
// // // //     maxWidth: "1100px", margin: "0 auto",
// // // //     display: "flex", alignItems: "center", justifyContent: "space-between",
// // // //     flexWrap: "wrap", gap: "24px",
// // // //   },
// // // //   footerBrand: {},
// // // //   footerLogo: {
// // // //     fontFamily: "'Clash Display', sans-serif",
// // // //     fontSize: "18px", fontWeight: 700, color: "#fff", marginBottom: "4px",
// // // //   },
// // // //   footerTagline: { fontSize: "12px", color: "#64748b" },
// // // //   footerLinks: { display: "flex", gap: "28px" },
// // // //   footerLink: {
// // // //     color: "#94a3b8", fontSize: "13px", textDecoration: "none",
// // // //     transition: "color 0.2s",
// // // //   },
// // // //   footerCopy: { color: "#334155", fontSize: "12px" },
// // // // };
// // // "use client";

// // // import { useEffect, useRef, useState } from "react";
// // // import Footer from "@/components/Footer";

// // // // ─── Types ────────────────────────────────────────────────────────────────────
// // // interface Product {
// // //   id: number;
// // //   name: string;
// // //   tagline: string;
// // //   category: string;
// // //   badge: string;
// // //   color: string;
// // //   accent: string;
// // //   textColor: string;
// // //   benefits: string[];
// // //   usage: string;
// // //   icon: string;
// // // }

// // // interface Stat {
// // //   value: string;
// // //   label: string;
// // //   suffix?: string;
// // // }

// // // interface Benefit {
// // //   icon: string;
// // //   title: string;
// // //   desc: string;
// // // }

// // // // ─── Data ─────────────────────────────────────────────────────────────────────
// // // const products: Product[] = [
// // //   {
// // //     id: 1,
// // //     name: "AquaShield Pro",
// // //     tagline: "Immunity Booster & Disease Resistance",
// // //     category: "Immunity",
// // //     badge: "Best Seller",
// // //     color: "#0ea5e9",
// // //     accent: "#e0f2fe",
// // //     textColor: "#0369a1",
// // //     benefits: ["Strengthens immune response", "Reduces mortality rates", "Anti-viral & anti-bacterial"],
// // //     usage: "5 ml per kg feed daily",
// // //     icon: "🛡️",
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "GillGuard Oxy",
// // //     tagline: "Gill Health & Oxygen Optimization",
// // //     category: "Respiratory",
// // //     badge: "New Formula",
// // //     color: "#10b981",
// // //     accent: "#d1fae5",
// // //     textColor: "#065f46",
// // //     benefits: ["Prevents gill disease", "Improves oxygen absorption", "Reduces stress mortality"],
// // //     usage: "10 ml per 1000 L water",
// // //     icon: "🌿",
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "ProbioMax Aqua",
// // //     tagline: "Gut Health & Feed Conversion",
// // //     category: "Probiotic",
// // //     badge: "GMP Certified",
// // //     color: "#f59e0b",
// // //     accent: "#fef3c7",
// // //     textColor: "#92400e",
// // //     benefits: ["Enhances FCR by 20%", "Promotes beneficial microflora", "Reduces ammonia levels"],
// // //     usage: "2 g per kg feed",
// // //     icon: "🦠",
// // //   },
// // //   {
// // //     id: 4,
// // //     name: "VitaGrow Marine",
// // //     tagline: "Growth Accelerator & Vitamin Complex",
// // //     category: "Growth",
// // //     badge: "Top Rated",
// // //     color: "#8b5cf6",
// // //     accent: "#ede9fe",
// // //     textColor: "#5b21b6",
// // //     benefits: ["Accelerates growth by 30%", "Complete vitamin complex", "Improves feed palatability"],
// // //     usage: "3 ml per kg feed",
// // //     icon: "⚡",
// // //   },
// // //   {
// // //     id: 5,
// // //     name: "MineralPlex AQ",
// // //     tagline: "Essential Minerals & Bone Development",
// // //     category: "Minerals",
// // //     badge: "Vet Approved",
// // //     color: "#ef4444",
// // //     accent: "#fee2e2",
// // //     textColor: "#991b1b",
// // //     benefits: ["Calcium & phosphorus balance", "Prevents skeletal deformities", "Supports scale formation"],
// // //     usage: "4 g per kg feed",
// // //     icon: "💎",
// // //   },
// // //   {
// // //     id: 6,
// // //     name: "WaterClear Pro",
// // //     tagline: "Water Quality & Stress Reduction",
// // //     category: "Water Quality",
// // //     badge: "Eco-Safe",
// // //     color: "#06b6d4",
// // //     accent: "#cffafe",
// // //     textColor: "#155e75",
// // //     benefits: ["Reduces toxic ammonia", "Balances pH levels", "Clears turbid water"],
// // //     usage: "15 ml per 1000 L water",
// // //     icon: "💧",
// // //   },
// // // ];

// // // const stats: Stat[] = [
// // //   { value: "98",  label: "Survival Rate",  suffix: "%" },
// // //   { value: "30",  label: "Faster Growth",  suffix: "%" },
// // //   { value: "500", label: "Farms Served",   suffix: "+" },
// // //   { value: "5",  label: "Years",      suffix: "+" },
// // // ];

// // // const benefits: Benefit[] = [
// // //   { icon: "🔬", title: "Science-Backed Formulas",      desc: "Every product is developed through rigorous research and validated by aquaculture scientists." },
// // //   { icon: "🌊", title: "Species-Specific Solutions",   desc: "Tailored formulations for shrimp, fish, crab, and other aquatic species across all life stages." },
// // //   { icon: "🌱", title: "Eco-Friendly & Sustainable",   desc: "Zero harmful residues, safe for ecosystems, and compliant with international aquaculture standards." },
// // //   { icon: "📊", title: "Proven ROI",                   desc: "Farms using our suite report 25–40% improvement in yield and significant reduction in disease losses." },
// // // ];

// // // const healthAreas = [
// // //   { label: "Immunity",        pct: 95, color: "#0ea5e9" },
// // //   { label: "Growth Rate",     pct: 88, color: "#10b981" },
// // //   { label: "Feed Conversion", pct: 92, color: "#f59e0b" },
// // //   { label: "Water Quality",   pct: 85, color: "#8b5cf6" },
// // //   { label: "Survival Rate",   pct: 98, color: "#ef4444" },
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

// // // function useCountUp(target: number, active: boolean, duration = 1800) {
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
// // // function StatCard({ value, label, suffix, active }: Stat & { active: boolean }) {
// // //   const num = useCountUp(parseInt(value), active);
// // //   return (
// // //     <div style={s.statCard}>
// // //       <div style={s.statNum}>{num}{suffix}</div>
// // //       <div style={s.statLabel}>{label}</div>
// // //     </div>
// // //   );
// // // }

// // // function ProductCard({ product, index }: { product: Product; index: number }) {
// // //   const [flipped, setFlipped] = useState(false);
// // //   const [hovered, setHovered] = useState(false);

// // //   return (
// // //     <div
// // //       style={{ ...s.cardOuter, animationDelay: `${index * 0.1}s` }}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => { setHovered(false); setFlipped(false); }}
// // //     >
// // //       <div style={{ ...s.cardInner, transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>

// // //         {/* Front */}
// // //         <div style={{ ...s.cardFace, ...s.cardFront, background: product.accent, borderColor: product.color + "44" }}>
// // //           <div style={{ ...s.cardAccentLine, background: product.color }} />
// // //           <div style={{ ...s.cardBadge, background: product.color + "22", color: product.textColor, borderColor: product.color + "44" }}>
// // //             {product.badge}
// // //           </div>
// // //           <div style={s.cardIcon}>{product.icon}</div>
// // //           <h3 style={{ ...s.cardName, color: product.textColor }}>{product.name}</h3>
// // //           <p style={s.cardTagline}>{product.tagline}</p>
// // //           <div style={{ ...s.cardCategory, background: product.color + "18", color: product.textColor }}>
// // //             {product.category}
// // //           </div>
// // //           <button
// // //             onClick={() => setFlipped(true)}
// // //             style={{ ...s.cardBtn, background: product.color, boxShadow: `0 4px 20px ${product.color}55` }}
// // //           >
// // //             View Details →
// // //           </button>
// // //         </div>

// // //         {/* Back */}
// // //         <div style={{ ...s.cardFace, ...s.cardBack, background: product.color }}>
// // //           <div style={s.backIcon}>{product.icon}</div>
// // //           <h3 style={s.backName}>{product.name}</h3>
// // //           <div style={s.backSection}>
// // //             <p style={s.backSubtitle}>Key Benefits</p>
// // //             {product.benefits.map((b, i) => (
// // //               <div key={i} style={s.backBenefit}>
// // //                 <span style={s.backCheck}>✓</span>
// // //                 <span style={s.backBenefitText}>{b}</span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //           <div style={s.backSection}>
// // //             <p style={s.backSubtitle}>Usage</p>
// // //             <p style={s.backUsage}>{product.usage}</p>
// // //           </div>
// // //           <button onClick={() => setFlipped(false)} style={s.backBtn}>← Back</button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function HealthBar({ label, pct, color, active, delay }: {
// // //   label: string; pct: number; color: string; active: boolean; delay: number;
// // // }) {
// // //   const [width, setWidth] = useState(0);
// // //   useEffect(() => {
// // //     if (!active) return;
// // //     const t = setTimeout(() => setWidth(pct), delay);
// // //     return () => clearTimeout(t);
// // //   }, [active, pct, delay]);
// // //   return (
// // //     <div style={s.barRow}>
// // //       <div style={s.barTop}>
// // //         <span style={s.barLabel}>{label}</span>
// // //         <span style={{ ...s.barPct, color }}>{width}%</span>
// // //       </div>
// // //       <div style={s.barTrack}>
// // //         <div style={{ ...s.barFill, width: `${width}%`, background: color, boxShadow: `0 0 10px ${color}66`, transition: "width 1.2s cubic-bezier(0.34,1.56,0.64,1)" }} />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // // ─── Main Page ────────────────────────────────────────────────────────────────
// // // export default function AquacultureHealthPage() {
// // //   const heroRef = useRef<HTMLDivElement>(null);
// // //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

// // //   const statsSection    = useInView(0.3);
// // //   const productsSection = useInView(0.1);
// // //   const healthSection   = useInView(0.3);
// // //   const benefitsSection = useInView(0.2);

// // //   useEffect(() => {
// // //     const h = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
// // //     window.addEventListener("mousemove", h);
// // //     return () => window.removeEventListener("mousemove", h);
// // //   }, []);

// // //   return (
// // //     <div style={s.page}>
// // //       <style>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@500;600;700&family=Satoshi:wght@400;500;600;700&display=swap');
// // //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// // //         @keyframes floatUp {
// // //           from { opacity: 0; transform: translateY(36px); }
// // //           to   { opacity: 1; transform: translateY(0); }
// // //         }
// // //         @keyframes bubble {
// // //           0%   { transform: translateY(0) scale(1); opacity: 0.5; }
// // //           50%  { opacity: 0.9; }
// // //           100% { transform: translateY(-120vh) scale(0.5); opacity: 0; }
// // //         }
// // //         @keyframes wave {
// // //           0%   { transform: translateX(0); }
// // //           100% { transform: translateX(-50%); }
// // //         }
// // //         @keyframes pulse {
// // //           0%, 100% { transform: scale(1); opacity: 1; }
// // //           50%       { transform: scale(1.05); opacity: 0.85; }
// // //         }
// // //         @keyframes rotateGlow {
// // //           from { transform: rotate(0deg); }
// // //           to   { transform: rotate(360deg); }
// // //         }
// // //         @keyframes cardEntrance {
// // //           from { opacity: 0; transform: translateY(40px) scale(0.96); }
// // //           to   { opacity: 1; transform: translateY(0) scale(1); }
// // //         }

// // //         /* ── Hero typography ── */
// // //         .hero-title {
// // //           font-family: 'Clash Display', sans-serif;
// // //           font-size: clamp(36px, 5vw, 64px);
// // //           font-weight: 700;
// // //           line-height: 1.08;
// // //           color: #fff;
// // //           letter-spacing: -0.02em;
// // //           animation: floatUp 0.9s ease both;
// // //         }
// // //         .hero-sub {
// // //           font-family: 'Satoshi', sans-serif;
// // //           font-size: 16px;
// // //           color: rgba(255,255,255,0.72);
// // //           max-width: 520px;
// // //           line-height: 1.75;
// // //           animation: floatUp 0.9s 0.2s ease both;
// // //         }
// // //         .hero-cta { animation: floatUp 0.9s 0.38s ease both; }

// // //         /* ── Section titles ── */
// // //         .section-title {
// // //           font-family: 'Clash Display', sans-serif;
// // //           font-size: clamp(26px, 3.2vw, 42px);
// // //           font-weight: 700;
// // //           color: #0f172a;
// // //           line-height: 1.15;
// // //           letter-spacing: -0.01em;
// // //         }
// // //         .section-title-white {
// // //           font-family: 'Clash Display', sans-serif;
// // //           font-size: clamp(26px, 3.2vw, 42px);
// // //           font-weight: 700;
// // //           color: #fff;
// // //           line-height: 1.15;
// // //           letter-spacing: -0.01em;
// // //         }

// // //         /* ── Shared ── */
// // //         .bubble {
// // //           position: absolute;
// // //           border-radius: 50%;
// // //           background: rgba(255,255,255,0.12);
// // //           animation: bubble linear infinite;
// // //         }
// // //         .wave-wrap {
// // //           position: absolute; bottom: 0; left: 0; right: 0;
// // //           height: 72px; overflow: hidden;
// // //         }
// // //         .wave-svg {
// // //           display: block; width: 200%;
// // //           animation: wave 9s linear infinite;
// // //         }

// // //         /* ── Hover states ── */
// // //         .stat-hover:hover {
// // //           transform: translateY(-5px) scale(1.02);
// // //           box-shadow: 0 16px 48px rgba(14,165,233,0.2);
// // //         }
// // //         .product-hover:hover {
// // //           transform: translateY(-6px);
// // //           box-shadow: 0 24px 64px rgba(0,0,0,0.13);
// // //         }
// // //         .benefit-hover:hover {
// // //           background: rgba(255,255,255,0.08) !important;
// // //           border-color: rgba(96,165,250,0.3) !important;
// // //           transform: translateY(-3px);
// // //         }
// // //         .step-hover:hover {
// // //           box-shadow: 0 12px 40px rgba(14,165,233,0.15) !important;
// // //           transform: translateY(-3px);
// // //         }
// // //         .btn-primary:hover {
// // //           transform: translateY(-2px);
// // //           box-shadow: 0 10px 36px rgba(14,165,233,0.55) !important;
// // //         }
// // //         .btn-outline:hover { background: rgba(255,255,255,0.12) !important; }
// // //       `}</style>

// // //       {/* ══════════ HERO ══════════ */}
// // //       <section style={s.hero} ref={heroRef}>
// // //         {[...Array(12)].map((_, i) => (
// // //           <div key={i} className="bubble" style={{
// // //             width:  `${7 + (i % 5) * 7}px`,
// // //             height: `${7 + (i % 5) * 7}px`,
// // //             left:   `${(i * 8.4) % 100}%`,
// // //             bottom: `${(i * 7) % 22}%`,
// // //             animationDuration: `${6 + i}s`,
// // //             animationDelay:    `${i * 0.55}s`,
// // //           }} />
// // //         ))}

// // //         <div style={{
// // //           position: "absolute", inset: 0, pointerEvents: "none",
// // //           background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56,189,248,0.1), transparent 55%)`,
// // //           transition: "background 0.1s",
// // //         }} />

// // //         <div style={{
// // //           position: "absolute", inset: 0, pointerEvents: "none",
// // //           backgroundImage: "linear-gradient(rgba(56,189,248,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.05) 1px, transparent 1px)",
// // //           backgroundSize: "56px 56px",
// // //         }} />

// // //         <div style={s.heroContent}>
// // //           {/* Eyebrow badge */}
// // //           <div style={s.heroBadge}>
// // //             <span style={s.heroBadgeDot} />
// // //             Aquaculture Health Solutions
// // //           </div>

// // //           <h1 className="hero-title">
// // //             Advanced Health<br />
// // //             <span style={s.heroGradient}>Solutions</span> for Aquaculture
// // //           </h1>

// // //           <p className="hero-sub" style={{ marginTop: "20px" }}>
// // //             Complete health management for aquatic species — from immunity and growth to water quality and gut health. Trusted by 500+ farms across India.
// // //           </p>

// // //           <div className="hero-cta" style={s.heroCtas}>
// // //             <button className="btn-primary" style={s.btnPrimary}>Explore Products</button>
// // //             <button className="btn-outline" style={s.btnOutline}>View Research →</button>
// // //           </div>

// // //           {/* Float cards */}
// // //           <div style={s.heroCards}>
// // //             {[
// // //               { icon: "🛡️", label: "Immunity Boost", val: "+95%" },
// // //               { icon: "⚡", label: "Faster Growth",   val: "+30%" },
// // //               { icon: "💧", label: "Water Quality",   val: "98/100" },
// // //             ].map((c, i) => (
// // //               <div key={i} style={{ ...s.heroFloatCard, animationDelay: `${0.6 + i * 0.14}s` }}>
// // //                 <span style={{ fontSize: "22px" }}>{c.icon}</span>
// // //                 <div>
// // //                   <div style={s.heroFloatVal}>{c.val}</div>
// // //                   <div style={s.heroFloatLabel}>{c.label}</div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="wave-wrap">
// // //           <svg className="wave-svg" viewBox="0 0 1440 72" preserveAspectRatio="none" style={{ height: "72px" }}>
// // //             <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" fill="#f0f9ff" />
// // //             <path d="M0,50 C360,18 720,64 1080,38 C1260,22 1380,50 1440,50 L1440,72 L0,72 Z" fill="#e0f2fe" opacity="0.45" />
// // //           </svg>
// // //         </div>
// // //       </section>

// // //       {/* ══════════ STATS STRIP ══════════ */}
// // //       <section style={s.statsSection} ref={statsSection.ref}>
// // //         <div style={s.statsInner}>
// // //           {stats.map((stat, i) => (
// // //             <div
// // //               key={i}
// // //               className="stat-hover"
// // //               style={{
// // //                 ...s.statWrap,
// // //                 transition: "all 0.3s ease",
// // //                 opacity: statsSection.inView ? 1 : 0,
// // //                 animation: statsSection.inView ? `floatUp 0.65s ${i * 0.1}s ease both` : "none",
// // //               }}
// // //             >
// // //               <StatCard {...stat} active={statsSection.inView} />
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* ══════════ HEALTH METRICS ══════════ */}
// // //       <section style={s.healthSection} ref={healthSection.ref}>
// // //         <div style={s.sectionInner}>
// // //           <div style={s.healthGrid}>

// // //             {/* Left — bars */}
// // //             <div>
// // //               <p style={s.eyebrow}>Performance Metrics</p>
// // //               <h2 className="section-title">
// // //                 Farm Health<br />
// // //                 <span style={{ color: "#0369a1" }}>at a Glance</span>
// // //               </h2>
// // //               <p style={s.bodyText}>
// // //                 Our product suite delivers measurable, consistent results across all key aquaculture health indicators. Real data from 500+ partner farms.
// // //               </p>
// // //               <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "18px" }}>
// // //                 {healthAreas.map((h, i) => (
// // //                   <HealthBar key={i} {...h} active={healthSection.inView} delay={i * 170} />
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* Right — orb visual */}
// // //             <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
// // //               <div style={{ position: "relative", width: "300px", height: "300px" }}>
// // //                 {/* Spinning ring */}
// // //                 <div style={{
// // //                   position: "absolute", inset: 0, borderRadius: "50%",
// // //                   border: "1.5px dashed rgba(14,165,233,0.28)",
// // //                   display: "flex", alignItems: "center", justifyContent: "center",
// // //                   animation: "rotateGlow 22s linear infinite",
// // //                 }}>
// // //                   <div style={{
// // //                     width: "210px", height: "210px", borderRadius: "50%",
// // //                     border: "1px solid rgba(14,165,233,0.15)",
// // //                     display: "flex", alignItems: "center", justifyContent: "center",
// // //                   }}>
// // //                     {/* Core */}
// // //                     <div style={{
// // //                       width: "140px", height: "140px", borderRadius: "50%",
// // //                       background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
// // //                       display: "flex", flexDirection: "column",
// // //                       alignItems: "center", justifyContent: "center",
// // //                       boxShadow: "0 0 60px rgba(14,165,233,0.38)",
// // //                       animation: "pulse 3.2s ease-in-out infinite",
// // //                     }}>
// // //                       <span style={{ fontSize: "26px" }}></span>
// // //                       <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em", marginTop: "5px", textTransform: "uppercase" }}>Aqua Health</span>
// // //                       <span style={{ color: "#fff", fontSize: "17px", fontWeight: 700, fontFamily: "'Clash Display', sans-serif" }}>9.8 / 10</span>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Orbit icons */}
// // //                 {[
// // //                   { icon: "🛡️", label: "Immunity", angle: 0   },
// // //                   { icon: "🌿", label: "Gills",    angle: 72  },
// // //                   { icon: "🦠", label: "Gut",      angle: 144 },
// // //                   { icon: "⚡", label: "Growth",   angle: 216 },
// // //                   { icon: "💧", label: "Water",    angle: 288 },
// // //                 ].map((item, i) => {
// // //                   const rad = (item.angle - 90) * (Math.PI / 180);
// // //                   const r = 50; // % from center
// // //                   const x = 50 + r * Math.cos(rad);
// // //                   const y = 50 + r * Math.sin(rad);
// // //                   return (
// // //                     <div key={i} style={{
// // //                       position: "absolute",
// // //                       left: `${x}%`, top: `${y}%`,
// // //                       transform: "translate(-50%,-50%)",
// // //                       display: "flex", flexDirection: "column", alignItems: "center", gap: "3px",
// // //                     }}>
// // //                       <div style={{
// // //                         width: "42px", height: "42px", borderRadius: "50%",
// // //                         background: "#fff", border: "1.5px solid #bae6fd",
// // //                         display: "flex", alignItems: "center", justifyContent: "center",
// // //                         fontSize: "17px", boxShadow: "0 4px 14px rgba(14,165,233,0.14)",
// // //                       }}>
// // //                         {item.icon}
// // //                       </div>
// // //                       <span style={{ fontSize: "9px", color: "#0369a1", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
// // //                         {item.label}
// // //                       </span>
// // //                     </div>
// // //                   );
// // //                 })}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ══════════ PRODUCTS ══════════ */}
// // //       <section style={s.productsSection} ref={productsSection.ref}>
// // //         <div style={s.sectionInner}>
// // //           <div style={{ textAlign: "center", marginBottom: "52px" }}>
// // //             <p style={s.eyebrow}>Our Product Range</p>
// // //             <h2 className="section-title">
// // //               Complete Health<br />
// // //               <span style={{ color: "#0369a1" }}>Product Suite</span>
// // //             </h2>
// // //             <p style={{ ...s.bodyText, maxWidth: "480px", margin: "14px auto 0" }}>
// // //               Six targeted solutions covering every aspect of aquatic animal health — click a card to see full details.
// // //             </p>
// // //           </div>

// // //           <div style={s.productsGrid}>
// // //             {products.map((product, i) => (
// // //               <div
// // //                 key={product.id}
// // //                 className="product-hover"
// // //                 style={{
// // //                   transition: "all 0.35s ease",
// // //                   opacity: productsSection.inView ? 1 : 0,
// // //                   animation: productsSection.inView ? `cardEntrance 0.65s ${i * 0.09}s ease both` : "none",
// // //                 }}
// // //               >
// // //                 <ProductCard product={product} index={i} />
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ══════════ WHY CHOOSE US ══════════ */}
// // //       <section style={s.benefitsSection} ref={benefitsSection.ref}>
// // //         <div style={s.benefitsBg} />
// // //         <div style={s.sectionInner}>
// // //           <div style={{ textAlign: "center", marginBottom: "52px", position: "relative", zIndex: 1 }}>
// // //             <p style={{ ...s.eyebrow, color: "#38bdf8" }}>Why Innovare Biopharma</p>
// // //             <h2 className="section-title-white">
// // //               Built for<br />Aquaculture Excellence
// // //             </h2>
// // //           </div>
// // //           <div style={s.benefitsGrid}>
// // //             {benefits.map((b, i) => (
// // //               <div
// // //                 key={i}
// // //                 className="benefit-hover"
// // //                 style={{
// // //                   ...s.benefitCard,
// // //                   opacity: benefitsSection.inView ? 1 : 0,
// // //                   animation: benefitsSection.inView ? `floatUp 0.65s ${i * 0.13}s ease both` : "none",
// // //                   transition: "all 0.3s ease",
// // //                 }}
// // //               >
// // //                 <div style={s.benefitIconWrap}>{b.icon}</div>
// // //                 <h3 style={s.benefitTitle}>{b.title}</h3>
// // //                 <p style={s.benefitDesc}>{b.desc}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ══════════ HOW IT WORKS ══════════ */}
// // //       <section style={s.usageSection}>
// // //         <div style={s.sectionInner}>
// // //           <div style={{ textAlign: "center", marginBottom: "52px" }}>
// // //             <p style={s.eyebrow}>How It Works</p>
// // //             <h2 className="section-title">
// // //               Simple 3-Step<br />
// // //               <span style={{ color: "#0369a1" }}>Protocol</span>
// // //             </h2>
// // //           </div>

// // //           <div style={s.stepsGrid}>
// // //             {[
// // //               { num: "01", title: "Diagnose",  desc: "Our experts assess your farm's species, stocking density, water parameters, and health history.", icon: "🔬" },
// // //               { num: "02", title: "Prescribe", desc: "Get a customized product protocol designed for your specific species and production cycle.",        icon: "📋" },
// // //               { num: "03", title: "Thrive",    desc: "Apply products as directed, monitor health metrics, and watch your farm performance improve.",      icon: "📈" },
// // //             ].map((step, i) => (
// // //               <div key={i} className="step-hover" style={s.stepCard}>
// // //                 {/* Step number — decorative, big and light */}
// // //                 <div style={s.stepNum}>{step.num}</div>
// // //                 <div style={{ fontSize: "28px", marginBottom: "14px" }}>{step.icon}</div>
// // //                 <h3 style={s.stepTitle}>{step.title}</h3>
// // //                 <p style={s.stepDesc}>{step.desc}</p>
// // //                 {i < 2 && (
// // //                   <div style={{
// // //                     position: "absolute", right: "-22px", top: "50%",
// // //                     transform: "translateY(-50%)",
// // //                     fontSize: "22px", color: "#0ea5e9", zIndex: 2, fontWeight: 700,
// // //                   }}>→</div>
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ══════════ CTA BANNER ══════════ */}
// // //       <section style={s.ctaBanner}>
// // //         <div style={s.ctaGlow} />
// // //         <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
// // //           <h2 className="section-title-white" style={{ marginBottom: "16px" }}>
// // //             Ready to Transform<br />Your Farm's Health?
// // //           </h2>
// // //           <p style={s.ctaBody}>
// // //             Join 500+ aquaculture farms already using Innovare Biopharma products.
// // //           </p>
// // //           <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "32px" }}>
// // //             {/* <button className="btn-primary" style={s.btnPrimary}>Get Started Today</button> */}
// // //             <button className="btn-outline" style={s.btnOutline}>Contact Catalog</button>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <Footer />
// // //     </div>
// // //   );
// // // }

// // // // ─── Styles ───────────────────────────────────────────────────────────────────
// // // const s: Record<string, React.CSSProperties> = {
// // //   page: {
// // //     fontFamily: "'Satoshi', 'Segoe UI', sans-serif",
// // //     background: "#f0f9ff",
// // //     overflowX: "hidden",
// // //   },

// // //   // ── Hero ──
// // //   hero: {
// // //     backgroundImage: `
// // //       linear-gradient(135deg, rgba(6,12,30,0.86) 0%, rgba(10,30,60,0.80) 42%, rgba(14,165,233,0.52) 100%),
// // //       url('/images/prawn.jpeg')
// // //     `,
// // //     backgroundSize: "cover",
// // //     backgroundPosition: "center",
// // //     backgroundRepeat: "no-repeat",
// // //     minHeight: "100vh",
// // //     position: "relative",
// // //     display: "flex",
// // //     alignItems: "center",
// // //     overflow: "hidden",
// // //     paddingBottom: "72px",
// // //   },
// // //   heroContent: {
// // //     maxWidth: "1100px",
// // //     margin: "0 auto",
// // //     padding: "100px 48px 48px",
// // //     position: "relative",
// // //     zIndex: 2,
// // //     width: "100%",
// // //   },
// // //   heroBadge: {
// // //     display: "inline-flex", alignItems: "center", gap: "8px",
// // //     background: "rgba(56,189,248,0.14)",
// // //     border: "0.5px solid rgba(56,189,248,0.38)",
// // //     color: "#7dd3fc",
// // //     fontSize: "11px", fontWeight: 600,
// // //     padding: "6px 16px", borderRadius: "20px",
// // //     letterSpacing: "0.07em", textTransform: "uppercase",
// // //     marginBottom: "22px",
// // //     animation: "floatUp 0.75s ease both",
// // //   },
// // //   heroBadgeDot: {
// // //     width: "6px", height: "6px", borderRadius: "50%",
// // //     background: "#38bdf8", boxShadow: "0 0 8px #38bdf8",
// // //     display: "inline-block",
// // //   },
// // //   heroGradient: {
// // //     background: "linear-gradient(90deg, #38bdf8, #22d3ee, #34d399)",
// // //     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
// // //     backgroundClip: "text",
// // //   },
// // //   heroCtas: {
// // //     display: "flex", gap: "12px", flexWrap: "wrap",
// // //     marginTop: "32px",
// // //   },
// // //   btnPrimary: {
// // //     background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
// // //     color: "#fff", border: "none",
// // //     padding: "13px 30px", borderRadius: "40px",
// // //     fontSize: "14px", fontWeight: 600,
// // //     cursor: "pointer", transition: "all 0.3s ease",
// // //     boxShadow: "0 4px 22px rgba(14,165,233,0.4)",
// // //     letterSpacing: "0.02em",
// // //   },
// // //   btnOutline: {
// // //     background: "rgba(255,255,255,0.08)",
// // //     color: "#e0f2fe",
// // //     border: "1px solid rgba(255,255,255,0.22)",
// // //     padding: "13px 30px", borderRadius: "40px",
// // //     fontSize: "14px", fontWeight: 500,
// // //     cursor: "pointer", transition: "all 0.3s ease",
// // //   },
// // //   heroCards: {
// // //     display: "flex", gap: "12px", flexWrap: "wrap",
// // //     marginTop: "44px",
// // //   },
// // //   heroFloatCard: {
// // //     background: "rgba(255,255,255,0.09)",
// // //     backdropFilter: "blur(12px)",
// // //     border: "0.5px solid rgba(255,255,255,0.18)",
// // //     borderRadius: "14px", padding: "13px 18px",
// // //     display: "flex", alignItems: "center", gap: "12px",
// // //     animation: "cardEntrance 0.7s ease both",
// // //   },
// // //   heroFloatVal: {
// // //     color: "#fff", fontSize: "17px", fontWeight: 700,
// // //     fontFamily: "'Clash Display', sans-serif",
// // //     lineHeight: 1.1,
// // //   },
// // //   heroFloatLabel: {
// // //     color: "rgba(255,255,255,0.55)", fontSize: "10px",
// // //     textTransform: "uppercase", letterSpacing: "0.08em",
// // //     fontWeight: 500, marginTop: "2px",
// // //   },

// // //   // ── Stats strip ──
// // //   statsSection: { background: "#fff" },
// // //   statsInner: {
// // //     maxWidth: "1100px", margin: "0 auto",
// // //     display: "grid", gridTemplateColumns: "repeat(4,1fr)",
// // //   },
// // //   statWrap: {
// // //     padding: "36px 28px",
// // //     borderRight: "0.5px solid #e0f2fe",
// // //     textAlign: "center", background: "#fff",
// // //     cursor: "default",
// // //   },
// // //   statCard: {},
// // //   statNum: {
// // //     fontFamily: "'Clash Display', sans-serif",
// // //     fontSize: "46px", fontWeight: 700,
// // //     color: "#0369a1", lineHeight: 1,
// // //     marginBottom: "6px",
// // //   },
// // //   statLabel: {
// // //     fontSize: "11px", color: "#64748b",
// // //     textTransform: "uppercase", letterSpacing: "0.1em",
// // //     fontWeight: 600,
// // //   },

// // //   // ── Section shared ──
// // //   sectionInner: {
// // //     maxWidth: "1100px", margin: "0 auto", padding: "0 48px",
// // //   },
// // //   eyebrow: {
// // //     fontSize: "11px", fontWeight: 700, color: "#0ea5e9",
// // //     textTransform: "uppercase", letterSpacing: "0.14em",
// // //     marginBottom: "10px",
// // //   },
// // //   bodyText: {
// // //     fontSize: "14px", color: "#475569", lineHeight: 1.8, marginTop: "14px",
// // //   },

// // //   // ── Health metrics ──
// // //   healthSection: { background: "#f0f9ff", padding: "96px 0" },
// // //   healthGrid: {
// // //     display: "grid", gridTemplateColumns: "1fr 1fr",
// // //     gap: "72px", alignItems: "center",
// // //   },

// // //   barRow: { marginBottom: "2px" },
// // //   barTop: { display: "flex", justifyContent: "space-between", marginBottom: "6px" },
// // //   barLabel: { fontSize: "13px", color: "#334155", fontWeight: 500 },
// // //   barPct:   { fontSize: "13px", fontWeight: 700 },
// // //   barTrack: { height: "7px", background: "#e0f2fe", borderRadius: "8px", overflow: "hidden" },
// // //   barFill:  { height: "100%", borderRadius: "8px" },

// // //   // ── Products ──
// // //   productsSection: { background: "#fff", padding: "96px 0" },
// // //   productsGrid: {
// // //     display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px",
// // //   },

// // //   // Product card flip
// // //   cardOuter: { perspective: "1000px", height: "355px" },
// // //   cardInner: {
// // //     position: "relative", width: "100%", height: "100%",
// // //     transformStyle: "preserve-3d",
// // //     transition: "transform 0.65s cubic-bezier(0.34,1.56,0.64,1)",
// // //   },
// // //   cardFace: {
// // //     position: "absolute", inset: 0,
// // //     backfaceVisibility: "hidden",
// // //     WebkitBackfaceVisibility: "hidden",
// // //     borderRadius: "18px", padding: "26px",
// // //     border: "0.5px solid",
// // //     display: "flex", flexDirection: "column",
// // //   },
// // //   cardFront: {},
// // //   cardBack:  { transform: "rotateY(180deg)" },
// // //   cardAccentLine: {
// // //     position: "absolute", top: 0, left: "26px", right: "26px",
// // //     height: "3px", borderRadius: "0 0 3px 3px",
// // //   },
// // //   cardBadge: {
// // //     alignSelf: "flex-start", fontSize: "9px", fontWeight: 700,
// // //     padding: "3px 10px", borderRadius: "20px", border: "0.5px solid",
// // //     letterSpacing: "0.07em", textTransform: "uppercase",
// // //     marginBottom: "14px",
// // //   },
// // //   cardIcon:    { fontSize: "34px", marginBottom: "10px" },
// // //   cardName: {
// // //     fontFamily: "'Clash Display', sans-serif",
// // //     fontSize: "18px", fontWeight: 700, marginBottom: "6px", lineHeight: 1.2,
// // //   },
// // //   cardTagline: {
// // //     fontSize: "12px", color: "#64748b", lineHeight: 1.55,
// // //     flexGrow: 1, marginBottom: "12px",
// // //   },
// // //   cardCategory: {
// // //     alignSelf: "flex-start", fontSize: "10px", fontWeight: 600,
// // //     padding: "4px 12px", borderRadius: "20px", marginBottom: "16px",
// // //     letterSpacing: "0.04em",
// // //   },
// // //   cardBtn: {
// // //     color: "#fff", border: "none", padding: "9px 20px",
// // //     borderRadius: "24px", fontSize: "12px", fontWeight: 600,
// // //     cursor: "pointer", alignSelf: "flex-start",
// // //     transition: "all 0.2s", letterSpacing: "0.02em",
// // //   },

// // //   // Card back
// // //   backIcon: { fontSize: "26px", marginBottom: "8px" },
// // //   backName: {
// // //     fontFamily: "'Clash Display', sans-serif",
// // //     fontSize: "16px", fontWeight: 700, color: "#fff", marginBottom: "14px",
// // //   },
// // //   backSection: { marginBottom: "12px" },
// // //   backSubtitle: {
// // //     fontSize: "9px", color: "rgba(255,255,255,0.58)",
// // //     textTransform: "uppercase", letterSpacing: "0.1em",
// // //     marginBottom: "6px", fontWeight: 700,
// // //   },
// // //   backBenefit: { display: "flex", alignItems: "flex-start", gap: "7px", marginBottom: "5px" },
// // //   backCheck:   { color: "#fff", fontWeight: 700, fontSize: "11px", marginTop: "1px", flexShrink: 0 },
// // //   backBenefitText: { color: "rgba(255,255,255,0.88)", fontSize: "12px", lineHeight: 1.45 },
// // //   backUsage: {
// // //     color: "#fff", fontSize: "12px", fontWeight: 600,
// // //     background: "rgba(255,255,255,0.15)", borderRadius: "8px", padding: "8px 12px",
// // //   },
// // //   backBtn: {
// // //     background: "rgba(255,255,255,0.18)", color: "#fff",
// // //     border: "0.5px solid rgba(255,255,255,0.35)",
// // //     padding: "8px 18px", borderRadius: "20px", fontSize: "11px",
// // //     fontWeight: 500, cursor: "pointer", marginTop: "10px",
// // //     transition: "background 0.2s",
// // //   },

// // //   // ── Benefits / Why Us ──
// // //   benefitsSection: {
// // //     background: "linear-gradient(140deg, #0c1a3a 0%, #0e3a6e 100%)",
// // //     padding: "96px 0", position: "relative", overflow: "hidden",
// // //   },
// // //   benefitsBg: {
// // //     position: "absolute", inset: 0,
// // //     backgroundImage: "linear-gradient(rgba(56,189,248,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.04) 1px,transparent 1px)",
// // //     backgroundSize: "56px 56px",
// // //   },
// // //   benefitsGrid: {
// // //     display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px",
// // //     position: "relative", zIndex: 1,
// // //   },
// // //   benefitCard: {
// // //     background: "rgba(255,255,255,0.045)",
// // //     border: "0.5px solid rgba(255,255,255,0.09)",
// // //     borderRadius: "18px", padding: "28px 22px",
// // //   },
// // //   benefitIconWrap: { fontSize: "26px", marginBottom: "16px" },
// // //   benefitTitle: {
// // //     fontFamily: "'Clash Display', sans-serif",
// // //     fontSize: "15px", fontWeight: 600, color: "#fff",
// // //     marginBottom: "10px", lineHeight: 1.3,
// // //   },
// // //   benefitDesc: {
// // //     fontSize: "13px", color: "rgba(255,255,255,0.52)", lineHeight: 1.72,
// // //   },

// // //   // ── How it works ──
// // //   usageSection: { background: "#f0f9ff", padding: "96px 0" },
// // //   stepsGrid: {
// // //     display: "grid", gridTemplateColumns: "repeat(3,1fr)",
// // //     gap: "0", position: "relative",
// // //   },
// // //   stepCard: {
// // //     background: "#fff",
// // //     border: "0.5px solid #bae6fd",
// // //     borderRadius: "18px", padding: "34px 26px",
// // //     position: "relative", margin: "0 10px",
// // //     boxShadow: "0 4px 20px rgba(14,165,233,0.07)",
// // //     transition: "all 0.3s ease",
// // //   },
// // //   stepNum: {
// // //     fontFamily: "'Clash Display', sans-serif",
// // //     fontSize: "52px", fontWeight: 700, color: "#e0f2fe",
// // //     lineHeight: 1, marginBottom: "14px",
// // //   },
// // //   stepTitle: {
// // //     fontFamily: "'Clash Display', sans-serif",
// // //     fontSize: "20px", fontWeight: 700, color: "#0f172a",
// // //     marginBottom: "10px",
// // //   },
// // //   stepDesc: { fontSize: "13px", color: "#64748b", lineHeight: 1.72 },

// // //   // ── CTA ──
// // //   ctaBanner: {
// // //     background: "linear-gradient(140deg, #0369a1, #0ea5e9)",
// // //     padding: "96px 48px", textAlign: "center",
// // //     position: "relative", overflow: "hidden",
// // //   },
// // //   ctaGlow: {
// // //     position: "absolute", top: "50%", left: "50%",
// // //     transform: "translate(-50%,-50%)",
// // //     width: "600px", height: "500px", borderRadius: "50%",
// // //     background: "radial-gradient(circle, rgba(255,255,255,0.1), transparent 68%)",
// // //   },
// // //   ctaBody: {
// // //     color: "rgba(255,255,255,0.78)", fontSize: "15px",
// // //     marginTop: "14px", lineHeight: 1.7,
// // //   },
// // // };
// // "use client";

// // import { useEffect, useRef, useState } from "react";
// // import { useRouter } from "next/navigation";
// // import Footer from "@/components/Footer";

// // // ─── Types ────────────────────────────────────────────────────────────────────
// // interface Product {
// //   id: number;
// //   name: string;
// //   tagline: string;
// //   category: string;
// //   badge: string;
// //   color: string;
// //   accent: string;
// //   textColor: string;
// //   benefits: string[];
// //   usage: string;
// //   icon: string;
// // }

// // interface Stat {
// //   value: string;
// //   label: string;
// //   suffix?: string;
// // }

// // interface Benefit {
// //   icon: string;
// //   title: string;
// //   desc: string;
// // }

// // // ─── Data ─────────────────────────────────────────────────────────────────────
// // const products: Product[] = [
// //   {
// //     id: 1,
// //     name: "AquaShield Pro",
// //     tagline: "Immunity Booster & Disease Resistance",
// //     category: "Immunity",
// //     badge: "Best Seller",
// //     color: "#0ea5e9",
// //     accent: "#e0f2fe",
// //     textColor: "#0369a1",
// //     benefits: ["Strengthens immune response", "Reduces mortality rates", "Anti-viral & anti-bacterial"],
// //     usage: "5 ml per kg feed daily",
// //     icon: "🛡️",
// //   },
// //   {
// //     id: 2,
// //     name: "GillGuard Oxy",
// //     tagline: "Gill Health & Oxygen Optimization",
// //     category: "Respiratory",
// //     badge: "New Formula",
// //     color: "#10b981",
// //     accent: "#d1fae5",
// //     textColor: "#065f46",
// //     benefits: ["Prevents gill disease", "Improves oxygen absorption", "Reduces stress mortality"],
// //     usage: "10 ml per 1000 L water",
// //     icon: "🌿",
// //   },
// //   {
// //     id: 3,
// //     name: "ProbioMax Aqua",
// //     tagline: "Gut Health & Feed Conversion",
// //     category: "Probiotic",
// //     badge: "GMP Certified",
// //     color: "#f59e0b",
// //     accent: "#fef3c7",
// //     textColor: "#92400e",
// //     benefits: ["Enhances FCR by 20%", "Promotes beneficial microflora", "Reduces ammonia levels"],
// //     usage: "2 g per kg feed",
// //     icon: "🦠",
// //   },
// //   {
// //     id: 4,
// //     name: "VitaGrow Marine",
// //     tagline: "Growth Accelerator & Vitamin Complex",
// //     category: "Growth",
// //     badge: "Top Rated",
// //     color: "#8b5cf6",
// //     accent: "#ede9fe",
// //     textColor: "#5b21b6",
// //     benefits: ["Accelerates growth by 30%", "Complete vitamin complex", "Improves feed palatability"],
// //     usage: "3 ml per kg feed",
// //     icon: "⚡",
// //   },
// //   {
// //     id: 5,
// //     name: "MineralPlex AQ",
// //     tagline: "Essential Minerals & Bone Development",
// //     category: "Minerals",
// //     badge: "Vet Approved",
// //     color: "#ef4444",
// //     accent: "#fee2e2",
// //     textColor: "#991b1b",
// //     benefits: ["Calcium & phosphorus balance", "Prevents skeletal deformities", "Supports scale formation"],
// //     usage: "4 g per kg feed",
// //     icon: "💎",
// //   },
// //   {
// //     id: 6,
// //     name: "WaterClear Pro",
// //     tagline: "Water Quality & Stress Reduction",
// //     category: "Water Quality",
// //     badge: "Eco-Safe",
// //     color: "#06b6d4",
// //     accent: "#cffafe",
// //     textColor: "#155e75",
// //     benefits: ["Reduces toxic ammonia", "Balances pH levels", "Clears turbid water"],
// //     usage: "15 ml per 1000 L water",
// //     icon: "💧",
// //   },
// // ];

// // const stats: Stat[] = [
// //   { value: "98",  label: "Survival Rate", suffix: "%" },
// //   { value: "30",  label: "Faster Growth", suffix: "%" },
// //   { value: "500", label: "Farms Served",  suffix: "+" },
// //   { value: "5",   label: "Years",         suffix: "+" },
// // ];

// // const benefits: Benefit[] = [
// //   { icon: "🔬", title: "Science-Backed Formulas",    desc: "Every product is developed through rigorous research and validated by aquaculture scientists." },
// //   { icon: "🌊", title: "Species-Specific Solutions", desc: "Tailored formulations for shrimp, fish, crab, and other aquatic species across all life stages." },
// //   { icon: "🌱", title: "Eco-Friendly & Sustainable", desc: "Zero harmful residues, safe for ecosystems, and compliant with international aquaculture standards." },
// //   { icon: "📊", title: "Proven ROI",                 desc: "Farms using our suite report 25–40% improvement in yield and significant reduction in disease losses." },
// // ];

// // const healthAreas = [
// //   { label: "Immunity",        pct: 95, color: "#0ea5e9" },
// //   { label: "Growth Rate",     pct: 88, color: "#10b981" },
// //   { label: "Feed Conversion", pct: 92, color: "#f59e0b" },
// //   { label: "Water Quality",   pct: 85, color: "#8b5cf6" },
// //   { label: "Survival Rate",   pct: 98, color: "#ef4444" },
// // ];

// // // ─── Hooks ────────────────────────────────────────────────────────────────────
// // function useInView(threshold = 0.15) {
// //   const ref = useRef<HTMLDivElement>(null);
// //   const [inView, setInView] = useState(false);
// //   useEffect(() => {
// //     const el = ref.current;
// //     if (!el) return;
// //     const obs = new IntersectionObserver(
// //       ([e]) => { if (e.isIntersecting) setInView(true); },
// //       { threshold }
// //     );
// //     obs.observe(el);
// //     return () => obs.disconnect();
// //   }, [threshold]);
// //   return { ref, inView };
// // }

// // function useCountUp(target: number, active: boolean, duration = 1800) {
// //   const [count, setCount] = useState(0);
// //   useEffect(() => {
// //     if (!active) return;
// //     let cur = 0;
// //     const step = target / (duration / 16);
// //     const t = setInterval(() => {
// //       cur += step;
// //       if (cur >= target) { setCount(target); clearInterval(t); }
// //       else setCount(Math.floor(cur));
// //     }, 16);
// //     return () => clearInterval(t);
// //   }, [active, target, duration]);
// //   return count;
// // }

// // // ─── Contact Modal ────────────────────────────────────────────────────────────
// // function ContactModal({ onClose }: { onClose: () => void }) {
// //   const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
// //   const [submitted, setSubmitted] = useState(false);
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!form.name || !form.email || !form.message) return;
// //     setLoading(true);
// //     // Simulate API call — replace with your actual endpoint
// //     await new Promise(res => setTimeout(res, 1200));
// //     setLoading(false);
// //     setSubmitted(true);
// //   };

// //   // Close on backdrop click
// //   const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
// //     if (e.target === e.currentTarget) onClose();
// //   };

// //   // Close on Escape
// //   useEffect(() => {
// //     const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
// //     window.addEventListener("keydown", h);
// //     return () => window.removeEventListener("keydown", h);
// //   }, [onClose]);

// //   return (
// //     <div
// //       onClick={handleBackdrop}
// //       style={{
// //         position: "fixed", inset: 0, zIndex: 9999,
// //         background: "rgba(5,15,45,0.82)",
// //         backdropFilter: "blur(16px)",
// //         display: "flex", alignItems: "center", justifyContent: "center",
// //         padding: "24px",
// //         animation: "fadeIn 0.25s ease both",
// //       }}
// //     >
// //       <div style={{
// //         background: "#fff",
// //         borderRadius: "24px",
// //         width: "100%", maxWidth: "480px",
// //         boxShadow: "0 40px 100px rgba(0,0,0,0.25)",
// //         overflow: "hidden",
// //         animation: "slideUp 0.3s ease both",
// //       }}>
// //         {/* Modal header */}
// //         <div style={{
// //           background: "linear-gradient(135deg, #0c1a3a, #0e3a6e)",
// //           padding: "28px 32px 24px",
// //           position: "relative",
// //         }}>
// //           <div style={{
// //             position: "absolute", inset: 0, opacity: 0.04,
// //             backgroundImage: "linear-gradient(rgba(56,189,248,1) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,1) 1px,transparent 1px)",
// //             backgroundSize: "40px 40px",
// //           }} />
// //           <button
// //             onClick={onClose}
// //             style={{
// //               position: "absolute", top: "16px", right: "16px",
// //               background: "rgba(255,255,255,0.1)",
// //               border: "0.5px solid rgba(255,255,255,0.2)",
// //               color: "#fff", width: "32px", height: "32px",
// //               borderRadius: "50%", cursor: "pointer",
// //               fontSize: "15px", display: "flex",
// //               alignItems: "center", justifyContent: "center",
// //             }}
// //           >
// //             ✕
// //           </button>
// //           <div style={{ fontSize: "28px", marginBottom: "8px" }}>💬</div>
// //           <h3 style={{
// //             fontFamily: "'Clash Display', sans-serif",
// //             fontSize: "20px", fontWeight: 700, color: "#fff", marginBottom: "4px",
// //           }}>
// //             Get in Touch
// //           </h3>
// //           <p style={{ fontSize: "13px", color: "rgba(186,230,253,0.65)" }}>
// //             Our team will respond within 24 hours.
// //           </p>
// //         </div>

// //         {/* Modal body */}
// //         <div style={{ padding: "28px 32px 32px" }}>
// //           {submitted ? (
// //             <div style={{ textAlign: "center", padding: "20px 0" }}>
// //               <div style={{ fontSize: "52px", marginBottom: "16px" }}>✅</div>
// //               <h4 style={{
// //                 fontFamily: "'Clash Display', sans-serif",
// //                 fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: "8px",
// //               }}>
// //                 Message Sent!
// //               </h4>
// //               <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>
// //                 Thank you, <strong>{form.name}</strong>. Our aquaculture specialists will reach out to you shortly.
// //               </p>
// //               <button
// //                 onClick={onClose}
// //                 style={{
// //                   marginTop: "24px",
// //                   background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
// //                   color: "#fff", border: "none",
// //                   padding: "11px 28px", borderRadius: "24px",
// //                   fontSize: "13px", fontWeight: 600, cursor: "pointer",
// //                 }}
// //               >
// //                 Close
// //               </button>
// //             </div>
// //           ) : (
// //             <form onSubmit={handleSubmit}>
// //               {[
// //                 { key: "name",    label: "Full Name *",         type: "text",  placeholder: "Your name" },
// //                 { key: "email",   label: "Email Address *",     type: "email", placeholder: "your@email.com" },
// //                 { key: "phone",   label: "Phone (optional)",    type: "tel",   placeholder: "+91 9876543210" },
// //               ].map(field => (
// //                 <div key={field.key} style={{ marginBottom: "16px" }}>
// //                   <label style={{
// //                     display: "block", fontSize: "11px", fontWeight: 700,
// //                     color: "#334155", textTransform: "uppercase",
// //                     letterSpacing: "0.08em", marginBottom: "6px",
// //                   }}>
// //                     {field.label}
// //                   </label>
// //                   <input
// //                     type={field.type}
// //                     placeholder={field.placeholder}
// //                     value={(form as any)[field.key]}
// //                     onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
// //                     required={field.key !== "phone"}
// //                     style={{
// //                       width: "100%", padding: "10px 14px",
// //                       border: "1px solid #e0f2fe",
// //                       borderRadius: "10px", fontSize: "14px",
// //                       color: "#0f172a", background: "#f8faff",
// //                       outline: "none", transition: "border-color 0.2s",
// //                       fontFamily: "'Satoshi', sans-serif",
// //                     }}
// //                     onFocus={e => (e.target.style.borderColor = "#0ea5e9")}
// //                     onBlur={e => (e.target.style.borderColor = "#e0f2fe")}
// //                   />
// //                 </div>
// //               ))}

// //               <div style={{ marginBottom: "22px" }}>
// //                 <label style={{
// //                   display: "block", fontSize: "11px", fontWeight: 700,
// //                   color: "#334155", textTransform: "uppercase",
// //                   letterSpacing: "0.08em", marginBottom: "6px",
// //                 }}>
// //                   Message *
// //                 </label>
// //                 <textarea
// //                   rows={3}
// //                   placeholder="Tell us about your farm and what you need..."
// //                   value={form.message}
// //                   onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
// //                   required
// //                   style={{
// //                     width: "100%", padding: "10px 14px",
// //                     border: "1px solid #e0f2fe",
// //                     borderRadius: "10px", fontSize: "14px",
// //                     color: "#0f172a", background: "#f8faff",
// //                     outline: "none", resize: "vertical",
// //                     fontFamily: "'Satoshi', sans-serif",
// //                     transition: "border-color 0.2s",
// //                   }}
// //                   onFocus={e => (e.target.style.borderColor = "#0ea5e9")}
// //                   onBlur={e => (e.target.style.borderColor = "#e0f2fe")}
// //                 />
// //               </div>

// //               <button
// //                 type="submit"
// //                 disabled={loading}
// //                 style={{
// //                   width: "100%",
// //                   background: loading
// //                     ? "rgba(14,165,233,0.6)"
// //                     : "linear-gradient(135deg, #0ea5e9, #06b6d4)",
// //                   color: "#fff", border: "none",
// //                   padding: "13px", borderRadius: "24px",
// //                   fontSize: "14px", fontWeight: 600,
// //                   cursor: loading ? "not-allowed" : "pointer",
// //                   boxShadow: "0 4px 20px rgba(14,165,233,0.35)",
// //                   transition: "all 0.3s ease",
// //                   fontFamily: "'Satoshi', sans-serif",
// //                   letterSpacing: "0.02em",
// //                 }}
// //               >
// //                 {loading ? "Sending…" : "Send Message →"}
// //               </button>

// //               {/* Quick contact alternatives */}
// //               <div style={{
// //                 marginTop: "20px", paddingTop: "18px",
// //                 borderTop: "1px solid #f0f9ff",
// //                 display: "flex", gap: "10px",
// //               }}>
// //                 <a
// //                   href="mailto:info@innovarebiopharma.com"
// //                   style={{
// //                     flex: 1, textAlign: "center",
// //                     background: "#f0f9ff",
// //                     border: "1px solid #bae6fd",
// //                     borderRadius: "10px", padding: "9px 8px",
// //                     fontSize: "12px", fontWeight: 600,
// //                     color: "#0369a1", textDecoration: "none",
// //                     display: "flex", alignItems: "center",
// //                     justifyContent: "center", gap: "5px",
// //                   }}
// //                 >
// //                   ✉️ Email Us
// //                 </a>
// //                 <a
// //                   href="tel:+919999999999"
// //                   style={{
// //                     flex: 1, textAlign: "center",
// //                     background: "#f0f9ff",
// //                     border: "1px solid #bae6fd",
// //                     borderRadius: "10px", padding: "9px 8px",
// //                     fontSize: "12px", fontWeight: 600,
// //                     color: "#0369a1", textDecoration: "none",
// //                     display: "flex", alignItems: "center",
// //                     justifyContent: "center", gap: "5px",
// //                   }}
// //                 >
// //                   📞 Call Us
// //                 </a>
// //                 <a
// //                   href="https://wa.me/919999999999"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   style={{
// //                     flex: 1, textAlign: "center",
// //                     background: "#f0fdf4",
// //                     border: "1px solid #bbf7d0",
// //                     borderRadius: "10px", padding: "9px 8px",
// //                     fontSize: "12px", fontWeight: 600,
// //                     color: "#166534", textDecoration: "none",
// //                     display: "flex", alignItems: "center",
// //                     justifyContent: "center", gap: "5px",
// //                   }}
// //                 >
// //                   💬 WhatsApp
// //                 </a>
// //               </div>
// //             </form>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // ─── Sub-components ───────────────────────────────────────────────────────────
// // function StatCard({ value, label, suffix, active }: Stat & { active: boolean }) {
// //   const num = useCountUp(parseInt(value), active);
// //   return (
// //     <div style={s.statCard}>
// //       <div style={s.statNum}>{num}{suffix}</div>
// //       <div style={s.statLabel}>{label}</div>
// //     </div>
// //   );
// // }

// // function ProductCard({ product, index }: { product: Product; index: number }) {
// //   const [flipped, setFlipped] = useState(false);

// //   return (
// //     <div
// //       style={{ ...s.cardOuter, animationDelay: `${index * 0.1}s` }}
// //       onMouseLeave={() => setFlipped(false)}
// //     >
// //       <div style={{ ...s.cardInner, transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>

// //         {/* Front */}
// //         <div style={{ ...s.cardFace, ...s.cardFront, background: product.accent, borderColor: product.color + "44" }}>
// //           <div style={{ ...s.cardAccentLine, background: product.color }} />
// //           <div style={{ ...s.cardBadge, background: product.color + "22", color: product.textColor, borderColor: product.color + "44" }}>
// //             {product.badge}
// //           </div>
// //           <div style={s.cardIcon}>{product.icon}</div>
// //           <h3 style={{ ...s.cardName, color: product.textColor }}>{product.name}</h3>
// //           <p style={s.cardTagline}>{product.tagline}</p>
// //           <div style={{ ...s.cardCategory, background: product.color + "18", color: product.textColor }}>
// //             {product.category}
// //           </div>
// //           <button
// //             onClick={() => setFlipped(true)}
// //             style={{ ...s.cardBtn, background: product.color, boxShadow: `0 4px 20px ${product.color}55` }}
// //           >
// //             View Details →
// //           </button>
// //         </div>

// //         {/* Back */}
// //         <div style={{ ...s.cardFace, ...s.cardBack, background: product.color }}>
// //           <div style={s.backIcon}>{product.icon}</div>
// //           <h3 style={s.backName}>{product.name}</h3>
// //           <div style={s.backSection}>
// //             <p style={s.backSubtitle}>Key Benefits</p>
// //             {product.benefits.map((b, i) => (
// //               <div key={i} style={s.backBenefit}>
// //                 <span style={s.backCheck}>✓</span>
// //                 <span style={s.backBenefitText}>{b}</span>
// //               </div>
// //             ))}
// //           </div>
// //           <div style={s.backSection}>
// //             <p style={s.backSubtitle}>Usage</p>
// //             <p style={s.backUsage}>{product.usage}</p>
// //           </div>
// //           <button onClick={() => setFlipped(false)} style={s.backBtn}>← Back</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function HealthBar({ label, pct, color, active, delay }: {
// //   label: string; pct: number; color: string; active: boolean; delay: number;
// // }) {
// //   const [width, setWidth] = useState(0);
// //   useEffect(() => {
// //     if (!active) return;
// //     const t = setTimeout(() => setWidth(pct), delay);
// //     return () => clearTimeout(t);
// //   }, [active, pct, delay]);
// //   return (
// //     <div style={s.barRow}>
// //       <div style={s.barTop}>
// //         <span style={s.barLabel}>{label}</span>
// //         <span style={{ ...s.barPct, color }}>{width}%</span>
// //       </div>
// //       <div style={s.barTrack}>
// //         <div style={{ ...s.barFill, width: `${width}%`, background: color, boxShadow: `0 0 10px ${color}66`, transition: "width 1.2s cubic-bezier(0.34,1.56,0.64,1)" }} />
// //       </div>
// //     </div>
// //   );
// // }

// // // ─── Main Page ────────────────────────────────────────────────────────────────
// // export default function AquacultureHealthPage() {
// //   const router = useRouter();
// //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// //   const [showContact, setShowContact] = useState(false);

// //   // Section refs for smooth scroll
// //   const productsRef = useRef<HTMLElement>(null);
// //   const aboutRef    = useRef<HTMLElement>(null);

// //   const statsSection    = useInView(0.3);
// //   const productsSection = useInView(0.1);
// //   const healthSection   = useInView(0.3);
// //   const benefitsSection = useInView(0.2);

// //   useEffect(() => {
// //     const h = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
// //     window.addEventListener("mousemove", h);
// //     return () => window.removeEventListener("mousemove", h);
// //   }, []);

// //   // Lock body scroll when modal is open
// //   useEffect(() => {
// //     document.body.style.overflow = showContact ? "hidden" : "";
// //     return () => { document.body.style.overflow = ""; };
// //   }, [showContact]);

// //   // ── Navigation helpers ───────────────────────────────────────────────────
// //   const scrollToProducts = () => {
// //     productsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
// //   };

// //   const goToAbout = () => {
// //     router.push("/about");           // ← change to your About page route
// //   };

// //   const goToGallery = () => {
// //     router.push("/gallery");         // ← change to your Gallery/Events route
// //   };

// //   const openContact = () => setShowContact(true);

// //   const downloadCatalog = () => {
// //     // Opens the PDF in a new tab; replace with actual file path
// //     window.open("/documents/innovare-catalog.pdf", "_blank");
// //   };

// //   return (
// //     <div style={s.page}>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@500;600;700&family=Satoshi:wght@400;500;600;700&display=swap');
// //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// //         @keyframes floatUp  { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }
// //         @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
// //         @keyframes slideUp  { from{opacity:0;transform:translateY(32px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
// //         @keyframes bubble   { 0%{transform:translateY(0) scale(1);opacity:0.5} 50%{opacity:0.9} 100%{transform:translateY(-120vh) scale(0.5);opacity:0} }
// //         @keyframes wave     { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
// //         @keyframes pulse    { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.05);opacity:0.85} }
// //         @keyframes rotateGlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
// //         @keyframes cardEntrance { from{opacity:0;transform:translateY(40px) scale(0.96)} to{opacity:1;transform:translateY(0) scale(1)} }

// //         .hero-title {
// //           font-family: 'Clash Display', sans-serif;
// //           font-size: clamp(36px, 5vw, 64px);
// //           font-weight: 700; line-height: 1.08;
// //           color: #fff; letter-spacing: -0.02em;
// //           animation: floatUp 0.9s ease both;
// //         }
// //         .hero-sub {
// //           font-family: 'Satoshi', sans-serif;
// //           font-size: 16px; color: rgba(255,255,255,0.72);
// //           max-width: 520px; line-height: 1.75;
// //           animation: floatUp 0.9s 0.2s ease both;
// //         }
// //         .hero-cta { animation: floatUp 0.9s 0.38s ease both; }

// //         .section-title {
// //           font-family: 'Clash Display', sans-serif;
// //           font-size: clamp(26px, 3.2vw, 42px);
// //           font-weight: 700; color: #0f172a;
// //           line-height: 1.15; letter-spacing: -0.01em;
// //         }
// //         .section-title-white {
// //           font-family: 'Clash Display', sans-serif;
// //           font-size: clamp(26px, 3.2vw, 42px);
// //           font-weight: 700; color: #fff;
// //           line-height: 1.15; letter-spacing: -0.01em;
// //         }

// //         .bubble { position:absolute; border-radius:50%; background:rgba(255,255,255,0.12); animation:bubble linear infinite; }
// //         .wave-wrap { position:absolute; bottom:0; left:0; right:0; height:72px; overflow:hidden; }
// //         .wave-svg  { display:block; width:200%; animation:wave 9s linear infinite; }

// //         /* Button hover states */
// //         .btn-primary:hover   { transform:translateY(-2px); box-shadow:0 10px 36px rgba(14,165,233,0.55) !important; }
// //         .btn-outline:hover   { background:rgba(255,255,255,0.14) !important; }
// //         .btn-outline-d:hover { background:rgba(14,165,233,0.08) !important; border-color:rgba(14,165,233,0.5) !important; }

// //         .stat-hover:hover    { transform:translateY(-5px) scale(1.02); box-shadow:0 16px 48px rgba(14,165,233,0.2); }
// //         .product-hover:hover { transform:translateY(-6px); box-shadow:0 24px 64px rgba(0,0,0,0.13); }
// //         .benefit-hover:hover { background:rgba(255,255,255,0.08) !important; border-color:rgba(96,165,250,0.3) !important; transform:translateY(-3px); }
// //         .step-hover:hover    { box-shadow:0 12px 40px rgba(14,165,233,0.15) !important; transform:translateY(-3px); }
// //         .link-card:hover     { border-color:rgba(14,165,233,0.5) !important; background:#e0f2fe !important; }
// //       `}</style>

// //       {/* ══════════ HERO ══════════ */}
// //       <section style={s.hero}>
// //         {[...Array(12)].map((_, i) => (
// //           <div key={i} className="bubble" style={{
// //             width: `${7 + (i % 5) * 7}px`, height: `${7 + (i % 5) * 7}px`,
// //             left: `${(i * 8.4) % 100}%`,   bottom: `${(i * 7) % 22}%`,
// //             animationDuration: `${6 + i}s`, animationDelay: `${i * 0.55}s`,
// //           }} />
// //         ))}

// //         <div style={{ position:"absolute", inset:0, pointerEvents:"none",
// //           background:`radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56,189,248,0.1), transparent 55%)`,
// //           transition:"background 0.1s" }} />

// //         <div style={{ position:"absolute", inset:0, pointerEvents:"none",
// //           backgroundImage:"linear-gradient(rgba(56,189,248,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.05) 1px,transparent 1px)",
// //           backgroundSize:"56px 56px" }} />

// //         <div style={s.heroContent}>
// //           <div style={s.heroBadge}>
// //             <span style={s.heroBadgeDot} />
// //             Aquaculture Health Solutions
// //           </div>

// //           <h1 className="hero-title">
// //             Advanced Health<br />
// //             <span style={s.heroGradient}>Solutions</span> for Aquaculture
// //           </h1>

// //           <p className="hero-sub" style={{ marginTop: "20px" }}>
// //             Complete health management for aquatic species — from immunity and growth to water quality and gut health. Trusted by 500+ farms across India.
// //           </p>

// //           {/* ── Hero CTAs — all wired up ── */}
// //           <div className="hero-cta" style={s.heroCtas}>
// //             <button
// //               className="btn-primary"
// //               style={s.btnPrimary}
// //               onClick={scrollToProducts}
// //               title="Scroll to our product range"
// //             >
// //               Explore Products ↓
// //             </button>
// //             <button
// //               className="btn-outline"
// //               style={s.btnOutline}
// //               onClick={goToAbout}
// //               title="Learn about Innovare Biopharma"
// //             >
// //               About Us →
// //             </button>
// //           </div>

// //           {/* Float cards */}
// //           <div style={s.heroCards}>
// //             {[
// //               { icon: "🛡️", label: "Immunity Boost", val: "+95%" },
// //               { icon: "⚡", label: "Faster Growth",   val: "+30%" },
// //               { icon: "💧", label: "Water Quality",   val: "98/100" },
// //             ].map((c, i) => (
// //               <div key={i} style={{ ...s.heroFloatCard, animationDelay: `${0.6 + i * 0.14}s` }}>
// //                 <span style={{ fontSize: "22px" }}>{c.icon}</span>
// //                 <div>
// //                   <div style={s.heroFloatVal}>{c.val}</div>
// //                   <div style={s.heroFloatLabel}>{c.label}</div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="wave-wrap">
// //           <svg className="wave-svg" viewBox="0 0 1440 72" preserveAspectRatio="none" style={{ height: "72px" }}>
// //             <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" fill="#f0f9ff" />
// //             <path d="M0,50 C360,18 720,64 1080,38 C1260,22 1380,50 1440,50 L1440,72 L0,72 Z" fill="#e0f2fe" opacity="0.45" />
// //           </svg>
// //         </div>
// //       </section>

// //       {/* ══════════ STATS ══════════ */}
// //       <section style={s.statsSection} ref={statsSection.ref}>
// //         <div style={s.statsInner}>
// //           {stats.map((stat, i) => (
// //             <div key={i} className="stat-hover" style={{
// //               ...s.statWrap, transition:"all 0.3s ease",
// //               opacity: statsSection.inView ? 1 : 0,
// //               animation: statsSection.inView ? `floatUp 0.65s ${i * 0.1}s ease both` : "none",
// //             }}>
// //               <StatCard {...stat} active={statsSection.inView} />
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* ══════════ HEALTH METRICS ══════════ */}
// //       <section style={s.healthSection} ref={healthSection.ref}>
// //         <div style={s.sectionInner}>
// //           <div style={s.healthGrid}>
// //             <div>
// //               <p style={s.eyebrow}>Performance Metrics</p>
// //               <h2 className="section-title">
// //                 Farm Health<br /><span style={{ color: "#0369a1" }}>at a Glance</span>
// //               </h2>
// //               <p style={s.bodyText}>
// //                 Our product suite delivers measurable, consistent results across all key aquaculture health indicators. Real data from 500+ partner farms.
// //               </p>
// //               <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "18px" }}>
// //                 {healthAreas.map((h, i) => (
// //                   <HealthBar key={i} {...h} active={healthSection.inView} delay={i * 170} />
// //                 ))}
// //               </div>
// //             </div>

// //             <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
// //               <div style={{ position: "relative", width: "300px", height: "300px" }}>
// //                 <div style={{
// //                   position: "absolute", inset: 0, borderRadius: "50%",
// //                   border: "1.5px dashed rgba(14,165,233,0.28)",
// //                   display: "flex", alignItems: "center", justifyContent: "center",
// //                   animation: "rotateGlow 22s linear infinite",
// //                 }}>
// //                   <div style={{
// //                     width: "210px", height: "210px", borderRadius: "50%",
// //                     border: "1px solid rgba(14,165,233,0.15)",
// //                     display: "flex", alignItems: "center", justifyContent: "center",
// //                   }}>
// //                     <div style={{
// //                       width: "140px", height: "140px", borderRadius: "50%",
// //                       background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
// //                       display: "flex", flexDirection: "column",
// //                       alignItems: "center", justifyContent: "center",
// //                       boxShadow: "0 0 60px rgba(14,165,233,0.38)",
// //                       animation: "pulse 3.2s ease-in-out infinite",
// //                     }}>
// //                       <span style={{ fontSize: "26px" }}>🌊</span>
// //                       <span style={{ color:"rgba(255,255,255,0.75)", fontSize:"9px", fontWeight:600, letterSpacing:"0.1em", marginTop:"5px", textTransform:"uppercase" }}>Aqua Health</span>
// //                       <span style={{ color:"#fff", fontSize:"17px", fontWeight:700, fontFamily:"'Clash Display',sans-serif" }}>9.8 / 10</span>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {[
// //                   { icon:"🛡️", label:"Immunity", angle:0   },
// //                   { icon:"🌿", label:"Gills",    angle:72  },
// //                   { icon:"🦠", label:"Gut",      angle:144 },
// //                   { icon:"⚡", label:"Growth",   angle:216 },
// //                   { icon:"💧", label:"Water",    angle:288 },
// //                 ].map((item, i) => {
// //                   const rad = (item.angle - 90) * (Math.PI / 180);
// //                   const x = 50 + 50 * Math.cos(rad);
// //                   const y = 50 + 50 * Math.sin(rad);
// //                   return (
// //                     <div key={i} style={{
// //                       position:"absolute", left:`${x}%`, top:`${y}%`,
// //                       transform:"translate(-50%,-50%)",
// //                       display:"flex", flexDirection:"column", alignItems:"center", gap:"3px",
// //                     }}>
// //                       <div style={{
// //                         width:"42px", height:"42px", borderRadius:"50%",
// //                         background:"#fff", border:"1.5px solid #bae6fd",
// //                         display:"flex", alignItems:"center", justifyContent:"center",
// //                         fontSize:"17px", boxShadow:"0 4px 14px rgba(14,165,233,0.14)",
// //                       }}>
// //                         {item.icon}
// //                       </div>
// //                       <span style={{ fontSize:"9px", color:"#0369a1", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.06em" }}>
// //                         {item.label}
// //                       </span>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ══════════ PRODUCTS ══════════ */}
// //       <section style={s.productsSection} ref={(el) => {
// //         // Merge both refs
// //         (productsRef as any).current = el;
// //         (productsSection.ref as any).current = el;
// //       }}>
// //         <div style={s.sectionInner}>
// //           <div style={{ textAlign: "center", marginBottom: "52px" }}>
// //             <p style={s.eyebrow}>Our Product Range</p>
// //             <h2 className="section-title" id="products">
// //               Complete Health<br /><span style={{ color: "#0369a1" }}>Product Suite</span>
// //             </h2>
// //             <p style={{ ...s.bodyText, maxWidth:"480px", margin:"14px auto 0" }}>
// //               Six targeted solutions covering every aspect of aquatic animal health — click a card to see full details.
// //             </p>
// //           </div>

// //           <div style={s.productsGrid}>
// //             {products.map((product, i) => (
// //               <div key={product.id} className="product-hover" style={{
// //                 transition:"all 0.35s ease",
// //                 opacity: productsSection.inView ? 1 : 0,
// //                 animation: productsSection.inView ? `cardEntrance 0.65s ${i * 0.09}s ease both` : "none",
// //               }}>
// //                 <ProductCard product={product} index={i} />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ══════════ WHY CHOOSE US ══════════ */}
// //       <section style={s.benefitsSection} ref={benefitsSection.ref}>
// //         <div style={s.benefitsBg} />
// //         <div style={s.sectionInner}>
// //           <div style={{ textAlign:"center", marginBottom:"52px", position:"relative", zIndex:1 }}>
// //             <p style={{ ...s.eyebrow, color:"#38bdf8" }}>Why Innovare Biopharma</p>
// //             <h2 className="section-title-white">
// //               Built for<br />Aquaculture Excellence
// //             </h2>
// //           </div>
// //           <div style={s.benefitsGrid}>
// //             {benefits.map((b, i) => (
// //               <div key={i} className="benefit-hover" style={{
// //                 ...s.benefitCard,
// //                 opacity: benefitsSection.inView ? 1 : 0,
// //                 animation: benefitsSection.inView ? `floatUp 0.65s ${i * 0.13}s ease both` : "none",
// //                 transition: "all 0.3s ease",
// //               }}>
// //                 <div style={s.benefitIconWrap}>{b.icon}</div>
// //                 <h3 style={s.benefitTitle}>{b.title}</h3>
// //                 <p style={s.benefitDesc}>{b.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ══════════ HOW IT WORKS ══════════ */}
// //       <section style={s.usageSection}>
// //         <div style={s.sectionInner}>
// //           <div style={{ textAlign:"center", marginBottom:"52px" }}>
// //             <p style={s.eyebrow}>How It Works</p>
// //             <h2 className="section-title">
// //               Simple 3-Step<br /><span style={{ color:"#0369a1" }}>Protocol</span>
// //             </h2>
// //           </div>
// //           <div style={s.stepsGrid}>
// //             {[
// //               { num:"01", title:"Diagnose",  desc:"Our experts assess your farm's species, stocking density, water parameters, and health history.", icon:"🔬" },
// //               { num:"02", title:"Prescribe", desc:"Get a customized product protocol designed for your specific species and production cycle.",        icon:"📋" },
// //               { num:"03", title:"Thrive",    desc:"Apply products as directed, monitor health metrics, and watch your farm performance improve.",      icon:"📈" },
// //             ].map((step, i) => (
// //               <div key={i} className="step-hover" style={s.stepCard}>
// //                 <div style={s.stepNum}>{step.num}</div>
// //                 <div style={{ fontSize:"28px", marginBottom:"14px" }}>{step.icon}</div>
// //                 <h3 style={s.stepTitle}>{step.title}</h3>
// //                 <p style={s.stepDesc}>{step.desc}</p>
// //                 {i < 2 && (
// //                   <div style={{
// //                     position:"absolute", right:"-22px", top:"50%",
// //                     transform:"translateY(-50%)",
// //                     fontSize:"22px", color:"#0ea5e9", zIndex:2, fontWeight:700,
// //                   }}>→</div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ══════════ CTA BANNER ══════════ */}
// //       <section style={s.ctaBanner}>
// //         <div style={s.ctaGlow} />
// //         <div style={{ position:"relative", zIndex:1, textAlign:"center" }}>
// //           <h2 className="section-title-white" style={{ marginBottom:"16px" }}>
// //             Ready to Transform<br />Your Farm's Health?
// //           </h2>
// //           <p style={s.ctaBody}>
// //             Join 500+ aquaculture farms already using Innovare Biopharma products.
// //           </p>

// //           {/* ── All 4 CTA buttons wired up ── */}
// //           <div style={{ display:"flex", gap:"12px", justifyContent:"center", flexWrap:"wrap", marginTop:"32px" }}>

// //             {/* 1 — Contact us → opens modal */}
// //             <button
// //               className="btn-primary"
// //               style={s.btnPrimary}
// //               onClick={openContact}
// //               title="Open contact form"
// //             >
// //               Contact Us
// //             </button>

// //             {/* 2 — Download catalog → opens PDF */}
// //             <button
// //               className="btn-outline"
// //               style={s.btnOutline}
// //               onClick={downloadCatalog}
// //               title="Download product catalog PDF"
// //             >
// //               Download Catalog ↓
// //             </button>

// //             {/* 3 — Our Events / Gallery */}
// //             <button
// //               className="btn-outline"
// //               style={s.btnOutline}
// //               onClick={goToGallery}
// //               title="View our events and gallery"
// //             >
// //               Our Events →
// //             </button>

// //           </div>

// //           {/* Quick-access links row */}
// //           <div style={{ display:"flex", gap:"10px", justifyContent:"center", flexWrap:"wrap", marginTop:"20px" }}>
// //             {[
// //               { label:"📧 Email", href:"mailto:info@innovarebiopharma.com" },
// //               { label:"📞 Call",  href:"tel:+919999999999" },
// //               { label:"💬 WhatsApp", href:"https://wa.me/919999999999" },
// //             ].map((lk, i) => (
// //               <a
// //                 key={i}
// //                 href={lk.href}
// //                 target={lk.href.startsWith("http") ? "_blank" : undefined}
// //                 rel="noopener noreferrer"
// //                 className="link-card"
// //                 style={{
// //                   background:"rgba(255,255,255,0.12)",
// //                   border:"0.5px solid rgba(255,255,255,0.25)",
// //                   color:"#e0f2fe",
// //                   fontSize:"12px", fontWeight:600,
// //                   padding:"8px 18px", borderRadius:"24px",
// //                   textDecoration:"none",
// //                   transition:"all 0.25s ease",
// //                   letterSpacing:"0.03em",
// //                 }}
// //               >
// //                 {lk.label}
// //               </a>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <Footer />

// //       {/* Contact modal */}
// //       {showContact && <ContactModal onClose={() => setShowContact(false)} />}
// //     </div>
// //   );
// // }

// // // ─── Styles ───────────────────────────────────────────────────────────────────
// // const s: Record<string, React.CSSProperties> = {
// //   page: { fontFamily:"'Satoshi','Segoe UI',sans-serif", background:"#f0f9ff", overflowX:"hidden" },

// //   hero: {
// //     backgroundImage:`
// //       linear-gradient(135deg,rgba(6,12,30,0.86) 0%,rgba(10,30,60,0.80) 42%,rgba(14,165,233,0.52) 100%),
// //       url('/images/prawn.jpeg')
// //     `,
// //     backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat",
// //     minHeight:"100vh", position:"relative", display:"flex", alignItems:"center",
// //     overflow:"hidden", paddingBottom:"72px",
// //   },
// //   heroContent: {
// //     maxWidth:"1100px", margin:"0 auto", padding:"100px 48px 48px",
// //     position:"relative", zIndex:2, width:"100%",
// //   },
// //   heroBadge: {
// //     display:"inline-flex", alignItems:"center", gap:"8px",
// //     background:"rgba(56,189,248,0.14)", border:"0.5px solid rgba(56,189,248,0.38)",
// //     color:"#7dd3fc", fontSize:"11px", fontWeight:600,
// //     padding:"6px 16px", borderRadius:"20px", letterSpacing:"0.07em",
// //     textTransform:"uppercase", marginBottom:"22px",
// //     animation:"floatUp 0.75s ease both",
// //   },
// //   heroBadgeDot: {
// //     width:"6px", height:"6px", borderRadius:"50%",
// //     background:"#38bdf8", boxShadow:"0 0 8px #38bdf8", display:"inline-block",
// //   },
// //   heroGradient: {
// //     background:"linear-gradient(90deg,#38bdf8,#22d3ee,#34d399)",
// //     WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
// //   },
// //   heroCtas: { display:"flex", gap:"12px", flexWrap:"wrap", marginTop:"32px" },
// //   btnPrimary: {
// //     background:"linear-gradient(135deg,#0ea5e9,#06b6d4)",
// //     color:"#fff", border:"none", padding:"13px 30px", borderRadius:"40px",
// //     fontSize:"14px", fontWeight:600, cursor:"pointer", transition:"all 0.3s ease",
// //     boxShadow:"0 4px 22px rgba(14,165,233,0.4)", letterSpacing:"0.02em",
// //   },
// //   btnOutline: {
// //     background:"rgba(255,255,255,0.08)", color:"#e0f2fe",
// //     border:"1px solid rgba(255,255,255,0.22)",
// //     padding:"13px 30px", borderRadius:"40px",
// //     fontSize:"14px", fontWeight:500, cursor:"pointer", transition:"all 0.3s ease",
// //   },
// //   heroCards: { display:"flex", gap:"12px", flexWrap:"wrap", marginTop:"44px" },
// //   heroFloatCard: {
// //     background:"rgba(255,255,255,0.09)", backdropFilter:"blur(12px)",
// //     border:"0.5px solid rgba(255,255,255,0.18)",
// //     borderRadius:"14px", padding:"13px 18px",
// //     display:"flex", alignItems:"center", gap:"12px",
// //     animation:"cardEntrance 0.7s ease both",
// //   },
// //   heroFloatVal:   { color:"#fff", fontSize:"17px", fontWeight:700, fontFamily:"'Clash Display',sans-serif", lineHeight:1.1 },
// //   heroFloatLabel: { color:"rgba(255,255,255,0.55)", fontSize:"10px", textTransform:"uppercase", letterSpacing:"0.08em", fontWeight:500, marginTop:"2px" },

// //   statsSection: { background:"#fff" },
// //   statsInner:   { maxWidth:"1100px", margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)" },
// //   statWrap:     { padding:"36px 28px", borderRight:"0.5px solid #e0f2fe", textAlign:"center", background:"#fff", cursor:"default" },
// //   statCard:     {},
// //   statNum:      { fontFamily:"'Clash Display',sans-serif", fontSize:"46px", fontWeight:700, color:"#0369a1", lineHeight:1, marginBottom:"6px" },
// //   statLabel:    { fontSize:"11px", color:"#64748b", textTransform:"uppercase", letterSpacing:"0.1em", fontWeight:600 },

// //   sectionInner: { maxWidth:"1100px", margin:"0 auto", padding:"0 48px" },
// //   eyebrow:      { fontSize:"11px", fontWeight:700, color:"#0ea5e9", textTransform:"uppercase", letterSpacing:"0.14em", marginBottom:"10px" },
// //   bodyText:     { fontSize:"14px", color:"#475569", lineHeight:1.8, marginTop:"14px" },

// //   healthSection: { background:"#f0f9ff", padding:"96px 0" },
// //   healthGrid:    { display:"grid", gridTemplateColumns:"1fr 1fr", gap:"72px", alignItems:"center" },

// //   barRow:   { marginBottom:"2px" },
// //   barTop:   { display:"flex", justifyContent:"space-between", marginBottom:"6px" },
// //   barLabel: { fontSize:"13px", color:"#334155", fontWeight:500 },
// //   barPct:   { fontSize:"13px", fontWeight:700 },
// //   barTrack: { height:"7px", background:"#e0f2fe", borderRadius:"8px", overflow:"hidden" },
// //   barFill:  { height:"100%", borderRadius:"8px" },

// //   productsSection: { background:"#fff", padding:"96px 0" },
// //   productsGrid:    { display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"22px" },

// //   cardOuter: { perspective:"1000px", height:"355px" },
// //   cardInner: { position:"relative", width:"100%", height:"100%", transformStyle:"preserve-3d", transition:"transform 0.65s cubic-bezier(0.34,1.56,0.64,1)" },
// //   cardFace:  { position:"absolute", inset:0, backfaceVisibility:"hidden", WebkitBackfaceVisibility:"hidden", borderRadius:"18px", padding:"26px", border:"0.5px solid", display:"flex", flexDirection:"column" },
// //   cardFront: {},
// //   cardBack:  { transform:"rotateY(180deg)" },
// //   cardAccentLine: { position:"absolute", top:0, left:"26px", right:"26px", height:"3px", borderRadius:"0 0 3px 3px" },
// //   cardBadge:    { alignSelf:"flex-start", fontSize:"9px", fontWeight:700, padding:"3px 10px", borderRadius:"20px", border:"0.5px solid", letterSpacing:"0.07em", textTransform:"uppercase", marginBottom:"14px" },
// //   cardIcon:     { fontSize:"34px", marginBottom:"10px" },
// //   cardName:     { fontFamily:"'Clash Display',sans-serif", fontSize:"18px", fontWeight:700, marginBottom:"6px", lineHeight:1.2 },
// //   cardTagline:  { fontSize:"12px", color:"#64748b", lineHeight:1.55, flexGrow:1, marginBottom:"12px" },
// //   cardCategory: { alignSelf:"flex-start", fontSize:"10px", fontWeight:600, padding:"4px 12px", borderRadius:"20px", marginBottom:"16px", letterSpacing:"0.04em" },
// //   cardBtn:      { color:"#fff", border:"none", padding:"9px 20px", borderRadius:"24px", fontSize:"12px", fontWeight:600, cursor:"pointer", alignSelf:"flex-start", transition:"all 0.2s", letterSpacing:"0.02em" },

// //   backIcon:        { fontSize:"26px", marginBottom:"8px" },
// //   backName:        { fontFamily:"'Clash Display',sans-serif", fontSize:"16px", fontWeight:700, color:"#fff", marginBottom:"14px" },
// //   backSection:     { marginBottom:"12px" },
// //   backSubtitle:    { fontSize:"9px", color:"rgba(255,255,255,0.58)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"6px", fontWeight:700 },
// //   backBenefit:     { display:"flex", alignItems:"flex-start", gap:"7px", marginBottom:"5px" },
// //   backCheck:       { color:"#fff", fontWeight:700, fontSize:"11px", marginTop:"1px", flexShrink:0 },
// //   backBenefitText: { color:"rgba(255,255,255,0.88)", fontSize:"12px", lineHeight:1.45 },
// //   backUsage:       { color:"#fff", fontSize:"12px", fontWeight:600, background:"rgba(255,255,255,0.15)", borderRadius:"8px", padding:"8px 12px" },
// //   backBtn:         { background:"rgba(255,255,255,0.18)", color:"#fff", border:"0.5px solid rgba(255,255,255,0.35)", padding:"8px 18px", borderRadius:"20px", fontSize:"11px", fontWeight:500, cursor:"pointer", marginTop:"10px", transition:"background 0.2s" },

// //   benefitsSection: { background:"linear-gradient(140deg,#0c1a3a 0%,#0e3a6e 100%)", padding:"96px 0", position:"relative", overflow:"hidden" },
// //   benefitsBg:      { position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(56,189,248,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.04) 1px,transparent 1px)", backgroundSize:"56px 56px" },
// //   benefitsGrid:    { display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"20px", position:"relative", zIndex:1 },
// //   benefitCard:     { background:"rgba(255,255,255,0.045)", border:"0.5px solid rgba(255,255,255,0.09)", borderRadius:"18px", padding:"28px 22px" },
// //   benefitIconWrap: { fontSize:"26px", marginBottom:"16px" },
// //   benefitTitle:    { fontFamily:"'Clash Display',sans-serif", fontSize:"15px", fontWeight:600, color:"#fff", marginBottom:"10px", lineHeight:1.3 },
// //   benefitDesc:     { fontSize:"13px", color:"rgba(255,255,255,0.52)", lineHeight:1.72 },

// //   usageSection: { background:"#f0f9ff", padding:"96px 0" },
// //   stepsGrid:    { display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"0", position:"relative" },
// //   stepCard:     { background:"#fff", border:"0.5px solid #bae6fd", borderRadius:"18px", padding:"34px 26px", position:"relative", margin:"0 10px", boxShadow:"0 4px 20px rgba(14,165,233,0.07)", transition:"all 0.3s ease" },
// //   stepNum:      { fontFamily:"'Clash Display',sans-serif", fontSize:"52px", fontWeight:700, color:"#e0f2fe", lineHeight:1, marginBottom:"14px" },
// //   stepTitle:    { fontFamily:"'Clash Display',sans-serif", fontSize:"20px", fontWeight:700, color:"#0f172a", marginBottom:"10px" },
// //   stepDesc:     { fontSize:"13px", color:"#64748b", lineHeight:1.72 },

// //   ctaBanner: { background:"linear-gradient(140deg,#0369a1,#0ea5e9)", padding:"96px 48px", textAlign:"center", position:"relative", overflow:"hidden" },
// //   ctaGlow:   { position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"600px", height:"500px", borderRadius:"50%", background:"radial-gradient(circle,rgba(255,255,255,0.1),transparent 68%)" },
// //   ctaBody:   { color:"rgba(255,255,255,0.78)", fontSize:"15px", marginTop:"14px", lineHeight:1.7 },
// // };

// "use client";
// import Footer from "@/components/Footer";
// import { useState, useEffect, useRef, useCallback } from "react";

// /* ─────────────────────────── DATA ─────────────────────────── */

// const stats = [
//   { label: "Years of R&D",     value: 5,    suffix: "+", icon: "🔬" },
//    { label: "Products",         value: 33,   suffix: "+", icon: "🧪" },
//    { label: "Export Countries", value: 15,   suffix: "+", icon: "🌍" },
//   { label: "Partner Farms",    value: 1000,  suffix: "+", icon: "🏡" },
 
  
  
// ];

// const healthAreas = [
//   { label: "Immunity Response",  pct: 95, color: "#0ea5e9" },
//   { label: "Growth Rate",        pct: 88, color: "#06b6d4" },
//   { label: "Water Quality Score",pct: 98, color: "#0369a1" },
//   { label: "Disease Resistance", pct: 91, color: "#38bdf8" },
//   { label: "Feed Conversion",    pct: 84, color: "#0284c7" },
// ];

// const products = [
//   {
//     id: 1, icon: "🛡️", name: "i-IMMUNVARE", category: "Immunity",
//     tagline: "Advanced immunostimulant for superior disease resistance",
//     color: "#0ea5e9", bg: "#f0f9ff", border: "#bae6fd",
//     benefits: ["Boosts haemocyte activity by 95%","Reduces EMS & WSSV risk","Supports moulting cycles"],
//     usage: "Apply 5g/kg feed during high-risk periods",
//   },
//   {
//     id: 2, icon: "🌱", name: "i-PROVARE GUT", category: "Probiotics",
//     tagline: "Multi-strain probiotic for gut health and water quality",
//     color: "#06b6d4", bg: "#ecfeff", border: "#a5f3fc",
//     benefits: ["Restores beneficial gut microflora","Degrades ammonia & H₂S","Stabilises pond plankton"],
//     usage: "Broadcast 1kg/acre every 7–10 days",
//   },
//   {
//     id: 3, icon: "💧", name: "i.Heptopancvare", category: "Water Quality",
//     tagline: "Complete pond health management system",
//     color: "#0369a1", bg: "#f0f9ff", border: "#bae6fd",
//     benefits: ["Reduces toxic sludge buildup","Stabilises pH and alkalinity","Improves dissolved oxygen"],
//     usage: "Apply 2kg/acre during early morning",
//   },
//   {
//     id: 4, icon: "⚡", name: "i-CEEVARE", category: "Growth",
//     tagline: "Precision growth promoter for faster, uniform harvests",
//     color: "#0284c7", bg: "#f0f9ff", border: "#bae6fd",
//     benefits: ["Accelerates growth by 30%","Improves feed conversion ratio","Uniform size at harvest"],
//     usage: "Mix 3g/kg feed throughout crop cycle",
//   },
//   {
//     id: 5, icon: "💧", name: "i-OXYVARE", category: "Oxygenation",
//     tagline: "Emergency & preventive dissolved oxygen granules",
//     color: "#38bdf8", bg: "#f0f9ff", border: "#bae6fd",
//     benefits: ["Rapid O₂ release in minutes","Safe for all life stages","Prevents hypoxic mortality"],
//     usage: "Broadcast 500g/acre when DO < 4 ppm",
//   },
//   {
//     id: 6, icon: "⚗️", name: "i.Wfsvare Gel", category: "Minerals",
//     tagline: "Activated zeolite for ammonia control and water clarity",
//     color: "#0ea5e9", bg: "#f0f9ff", border: "#bae6fd",
//     benefits: ["Adsorbs ammonium ions rapidly","Improves water transparency","Safe for continuous use"],
//     usage: "Apply 20kg/acre monthly or after heavy rain",
//   },
// ];

// const benefits = [
//   { icon: "🏭", title: "GMP-Certified Manufacturing",   desc: "Every batch produced under strict Good Manufacturing Practice standards with full traceability." },
//   { icon: "🔬", title: "Science-Backed Formulations",   desc: "All products developed by PhD-level aquaculture scientists with field-validated efficacy data." },
//   { icon: "🌿", title: "Eco-Safe Ingredients",          desc: "Biodegradable actives — safe for non-target organisms, waterways, and export-destined shrimp." },
//   { icon: "🤝", title: "Dedicated Farm Support",        desc: "On-call technical experts available to every partner farm throughout the production cycle." },
// ];

// const HEALTH_FAQS = [
//   { icon: "🛡️", q: "How do Innovare probiotics improve shrimp immunity?",
//     a: "Innovare probiotic formulations introduce beneficial bacterial strains that colonise the shrimp gut, outcompete pathogenic bacteria, and stimulate the innate immune response. Regular application results in enhanced haemocyte activity, improved disease resistance, and lower mortality rates across the crop cycle." },
//   { icon: "💉", q: "What is the role of i-IMMUNVARE in disease prevention?",
//     a: "i-IMMUNVARE is a concentrated immunostimulant blend combining beta-glucans, vitamin C derivatives, and organic minerals. It primes the shrimp immune system before high-risk periods — such as post-stocking, moulting, and monsoon season — reducing the incidence of White Spot Syndrome, EMS, and bacterial infections." },
//   { icon: "🌿", q: "How do Innovare products support a healthy pond environment?",
//     a: "Our water and soil probiotic range (i-PONDVARE series) degrades excess organic sludge, reduces toxic ammonia and hydrogen sulphide build-up, and stabilises plankton bloom. This creates a balanced pond ecosystem that directly supports shrimp health and reduces the need for chemical interventions." },
//   { icon: "💧", q: "When should I apply oxygen-boosting products like i-OXYVARE?",
//     a: "i-OXYVARE oxygen granules are recommended during early morning hours (2 AM–6 AM) when dissolved oxygen levels are at their lowest, during high stocking density phases, after heavy rainfall that disturbs the pond, or when shrimp display surface-gulping behaviour indicating hypoxic stress." },
//   { icon: "🌊", q: "Are Innovare health products safe for the surrounding aquatic ecosystem?",
//     a: "Yes. All Innovare Biopharma health products are formulated with eco-safety as a core principle. Active ingredients are biodegradable, do not bioaccumulate in sediment, and have been tested for non-toxicity to non-target organisms including fish, molluscs, and beneficial zooplankton." },
//   { icon: "⚗️", q: "How does zeolite help in maintaining water quality?",
//     a: "Zeolite is a natural mineral adsorbent that selectively binds ammonium ions in pond water, preventing toxic ammonia spikes — especially critical in high-density ponds. Our i-ZEOVARE grade is sized and activated for rapid action, and can be broadcast directly or applied through paddle-wheel aeration." },
//   { icon: "🔬", q: "Can Innovare products be used during antibiotic treatment periods?",
//     a: "Probiotic products should be paused during active antibiotic dosing to avoid antagonism, then reintroduced 48–72 hours after the last antibiotic dose to restore beneficial microflora. Mineral, vitamin, and water-quality products are generally compatible and can continue throughout. Our technical team can advise a precise schedule." },
//   { icon: "🌱", q: "What is the environmental impact of using Innovare soil probiotics?",
//     a: "Soil probiotics such as i-SOILVARE accelerate the breakdown of accumulated organic matter and reduce BOD/COD loads in pond effluent. This significantly lowers the environmental footprint of discharge water, supporting compliance with aquaculture effluent standards and protecting surrounding waterways." },
// ];

// /* ─────────────────────────── HOOKS ─────────────────────────── */

// function useInView(threshold = 0.15) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current; if (!el) return;
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
//       { threshold }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return { ref, inView };
// }

// function useCounter(target: number, active: boolean, duration = 1400) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!active) return;
//     let start = 0; const step = target / (duration / 16);
//     const id = setInterval(() => {
//       start += step;
//       if (start >= target) { setCount(target); clearInterval(id); }
//       else setCount(Math.floor(start));
//     }, 16);
//     return () => clearInterval(id);
//   }, [active, target, duration]);
//   return count;
// }

// /* ─────────────────────────── SUB-COMPONENTS ─────────────────────────── */

// function StatCard({ label, value, suffix, icon, active }: { label: string; value: number; suffix: string; icon: string; active: boolean }) {
//   const count = useCounter(value, active);
//   return (
//     <div style={{ textAlign: "center" }}>
//       <div style={{ fontSize: "28px", marginBottom: "8px" }}>{icon}</div>
//       <div style={s.statNum}>{count}{suffix}</div>
//       <div style={s.statLabel}>{label}</div>
//     </div>
//   );
// }

// function HealthBar({ label, pct, color, active, delay }: { label: string; pct: number; color: string; active: boolean; delay: number }) {
//   const [width, setWidth] = useState(0);
//   useEffect(() => {
//     if (!active) return;
//     const t = setTimeout(() => setWidth(pct), delay);
//     return () => clearTimeout(t);
//   }, [active, pct, delay]);
//   return (
//     <div style={s.barRow}>
//       <div style={s.barTop}>
//         <span style={s.barLabel}>{label}</span>
//         <span style={{ ...s.barPct, color }}>{pct}%</span>
//       </div>
//       <div style={s.barTrack}>
//         <div style={{ ...s.barFill, width: `${width}%`, background: color, transition: "width 1.1s cubic-bezier(.4,0,.2,1)" }} />
//       </div>
//     </div>
//   );
// }

// function ProductCard({ product }: { product: typeof products[0] }) {
//   const [flipped, setFlipped] = useState(false);
//   return (
//     <div style={s.cardOuter} onClick={() => setFlipped(f => !f)}>
//       <div style={{ ...s.cardInner, transform: flipped ? "rotateY(180deg)" : "none" }}>
//         {/* Front */}
//         <div style={{ ...s.cardFace, ...s.cardFront, background: product.bg, borderColor: product.border }}>
//           <div style={{ ...s.cardAccentLine, background: product.color }} />
//           <div style={{ ...s.cardBadge, color: product.color, borderColor: product.border, background: "#fff" }}>{product.category}</div>
//           <div style={s.cardIcon}>{product.icon}</div>
//           <div style={{ ...s.cardName, color: "#0f172a" }}>{product.name}</div>
//           <div style={s.cardTagline}>{product.tagline}</div>
//           <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: product.color, fontWeight: 600 }}>
//             Tap for details <span>→</span>
//           </div>
//         </div>
//         {/* Back */}
//         <div style={{ ...s.cardFace, ...s.cardBack, background: `linear-gradient(145deg,${product.color},#0c1a3a)`, borderColor: "transparent" }}>
//           <div style={s.backIcon}>{product.icon}</div>
//           <div style={s.backName}>{product.name}</div>
//           <div style={s.backSection}>
//             <div style={s.backSubtitle}>Key Benefits</div>
//             {product.benefits.map((b, i) => (
//               <div key={i} style={s.backBenefit}>
//                 <span style={s.backCheck}>✓</span>
//                 <span style={s.backBenefitText}>{b}</span>
//               </div>
//             ))}
//           </div>
//           <div style={s.backSection}>
//             <div style={s.backSubtitle}>Recommended Usage</div>
//             <div style={s.backUsage}>{product.usage}</div>
//           </div>
//           <button style={s.backBtn} onClick={e => { e.stopPropagation(); setFlipped(false); }}>← Back</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ContactModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }} onClick={onClose}>
//       <div style={{ background: "#fff", borderRadius: "20px", padding: "40px", maxWidth: "480px", width: "100%", position: "relative" }} onClick={e => e.stopPropagation()}>
//         <button onClick={onClose} style={{ position: "absolute", top: "16px", right: "20px", background: "none", border: "none", fontSize: "22px", cursor: "pointer", color: "#64748b" }}>×</button>
//         <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "24px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>Get in Touch</h2>
//         <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "28px", lineHeight: 1.6 }}>Our aquaculture experts will respond within 24 hours.</p>
//         {["Your Name", "Email Address", "Farm Location"].map(ph => (
//           <input key={ph} placeholder={ph} style={{ width: "100%", padding: "12px 16px", border: "1.5px solid #e0f2fe", borderRadius: "10px", fontSize: "14px", marginBottom: "12px", outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
//         ))}
//         <textarea placeholder="Your question or requirement" rows={3} style={{ width: "100%", padding: "12px 16px", border: "1.5px solid #e0f2fe", borderRadius: "10px", fontSize: "14px", marginBottom: "16px", outline: "none", fontFamily: "inherit", resize: "none", boxSizing: "border-box" }} />
//         <button style={{ width: "100%", background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", color: "#fff", border: "none", padding: "14px", borderRadius: "40px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>Send Message →</button>
//       </div>
//     </div>
//   );
// }
// /* ─────────────────────────── MAIN PAGE ─────────────────────────── */

// export default function HealthPage() {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [showContact, setShowContact] = useState(false);
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   const statsSection    = useInView(0.2);
//   const healthSection   = useInView(0.2);
//   const productsSection = useInView(0.1);
//   const benefitsSection = useInView(0.15);
//   const faqSection      = useInView(0.1);

//   const productsRef = useRef<HTMLDivElement>(null);

//   const onMouseMove = useCallback((e: React.MouseEvent) => {
//     setMousePos({ x: e.clientX, y: e.clientY });
//   }, []);

//   const scrollToProducts = () => productsRef.current?.scrollIntoView({ behavior: "smooth" });
//   const openContact      = () => setShowContact(true);
//   const downloadCatalog  = () => window.open("/catalog.pdf", "_blank");
//   const goToAbout        = () => window.location.href = "/about";
//   const goToGallery      = () => window.location.href = "/gallery";

//   return (
//     <div style={s.page} onMouseMove={onMouseMove}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@500;600;700&family=Satoshi:wght@400;500;600;700&display=swap');
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         @keyframes floatUp    { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }
//         @keyframes fadeIn     { from{opacity:0} to{opacity:1} }
//         @keyframes slideUp    { from{opacity:0;transform:translateY(32px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
//         @keyframes bubble     { 0%{transform:translateY(0) scale(1);opacity:0.5} 50%{opacity:0.9} 100%{transform:translateY(-120vh) scale(0.5);opacity:0} }
//         @keyframes wave       { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
//         @keyframes pulse      { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.05);opacity:0.85} }
//         @keyframes rotateGlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
//         @keyframes cardEntrance { from{opacity:0;transform:translateY(40px) scale(0.96)} to{opacity:1;transform:translateY(0) scale(1)} }
//         @keyframes faqSlide   { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

//         .hero-title {
//           font-family: 'Clash Display', sans-serif;
//           font-size: clamp(36px, 5vw, 64px);
//           font-weight: 700; line-height: 1.08;
//           color: #fff; letter-spacing: -0.02em;
//           animation: floatUp 0.9s ease both;
//         }
//         .hero-sub {
//           font-family: 'Satoshi', sans-serif;
//           font-size: 16px; color: rgba(255,255,255,0.72);
//           max-width: 520px; line-height: 1.75;
//           animation: floatUp 0.9s 0.2s ease both;
//         }
//         .hero-cta { animation: floatUp 0.9s 0.38s ease both; }

//         .section-title {
//           font-family: 'Clash Display', sans-serif;
//           font-size: clamp(26px, 3.2vw, 42px);
//           font-weight: 700; color: #0f172a;
//           line-height: 1.15; letter-spacing: -0.01em;
//         }
//         .section-title-white {
//           font-family: 'Clash Display', sans-serif;
//           font-size: clamp(26px, 3.2vw, 42px);
//           font-weight: 700; color: #fff;
//           line-height: 1.15; letter-spacing: -0.01em;
//         }

//         .bubble { position:absolute; border-radius:50%; background:rgba(255,255,255,0.12); animation:bubble linear infinite; }
//         .wave-wrap { position:absolute; bottom:0; left:0; right:0; height:72px; overflow:hidden; }
//         .wave-svg  { display:block; width:200%; animation:wave 9s linear infinite; }

//         .btn-primary:hover   { transform:translateY(-2px); box-shadow:0 10px 36px rgba(14,165,233,0.55) !important; }
//         .btn-outline:hover   { background:rgba(255,255,255,0.14) !important; }
//         .stat-hover:hover    { transform:translateY(-5px) scale(1.02); box-shadow:0 16px 48px rgba(14,165,233,0.2); }
//         .product-hover:hover { transform:translateY(-6px); box-shadow:0 24px 64px rgba(0,0,0,0.13); }
//         .benefit-hover:hover { background:rgba(255,255,255,0.08) !important; border-color:rgba(96,165,250,0.3) !important; transform:translateY(-3px); }
//         .step-hover:hover    { box-shadow:0 12px 40px rgba(14,165,233,0.15) !important; transform:translateY(-3px); }
//         .faq-card:hover      { border-color:#93c5fd !important; box-shadow:0 4px 20px rgba(14,165,233,0.08) !important; }
//       `}</style>

//       {/* ══ HERO ══ */}
//       <section style={s.hero}>
//         {[...Array(12)].map((_, i) => (
//           <div key={i} className="bubble" style={{
//             width: `${7 + (i % 5) * 7}px`, height: `${7 + (i % 5) * 7}px`,
//             left: `${(i * 8.4) % 100}%`, bottom: `${(i * 7) % 22}%`,
//             animationDuration: `${6 + i}s`, animationDelay: `${i * 0.55}s`,
//           }} />
//         ))}
//         <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56,189,248,0.10), transparent 55%)`, transition: "background 0.1s" }} />
//         <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(56,189,248,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.05) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />

//         <div style={s.heroContent}>
//           <div style={s.heroBadge}>
//             <span style={s.heroBadgeDot} />
//             Aquaculture Health Solutions
//           </div>
//           <h1 className="hero-title">
//             Advanced Health<br />
//             <span style={s.heroGradient}>Solutions</span> for Aquaculture
//           </h1>
//           <p className="hero-sub" style={{ marginTop: "20px" }}>
//             Complete health management for aquatic species — from immunity and growth to water quality and gut health. Trusted by 1000+ farms across India.
//           </p>
//           <div className="hero-cta" style={s.heroCtas}>
//             <button className="btn-primary" style={s.btnPrimary} onClick={scrollToProducts}>Explore Products ↓</button>
//             <button className="btn-outline" style={s.btnOutline} onClick={goToAbout}>About Us →</button>
//           </div>
//           <div style={s.heroCards}>
//             {[
//               { icon: "🛡️", label: "Immunity Boost", val: "+95%" },
//               { icon: "⚡",  label: "Faster Growth",  val: "+30%" },
//               // { icon: "💧",  label: "Water Quality",  val: "98/100" },
//             ].map((c, i) => (
//               <div key={i} style={{ ...s.heroFloatCard, animationDelay: `${0.6 + i * 0.14}s` }}>
//                 <span style={{ fontSize: "22px" }}>{c.icon}</span>
//                 <div>
//                   <div style={s.heroFloatVal}>{c.val}</div>
//                   <div style={s.heroFloatLabel}>{c.label}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="wave-wrap">
//           <svg className="wave-svg" viewBox="0 0 1440 72" preserveAspectRatio="none" style={{ height: "72px" }}>
//             <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" fill="#f0f9ff" />
//             <path d="M0,50 C360,18 720,64 1080,38 C1260,22 1380,50 1440,50 L1440,72 L0,72 Z" fill="#e0f2fe" opacity="0.45" />
//           </svg>
//         </div>
//       </section>

//       {/* ══ STATS ══ */}
//       <section style={s.statsSection} ref={statsSection.ref as React.RefObject<HTMLElement>}>
//         <div style={s.statsInner}>
//           {stats.map((stat, i) => (
//             <div key={i} className="stat-hover" style={{
//               ...s.statWrap, transition: "all 0.3s ease",
//               opacity: statsSection.inView ? 1 : 0,
//               animation: statsSection.inView ? `floatUp 0.65s ${i * 0.1}s ease both` : "none",
//             }}>
//               <StatCard {...stat} active={statsSection.inView} />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ══ HEALTH METRICS ══ */}
//       <section style={s.healthSection} ref={healthSection.ref as React.RefObject<HTMLElement>}>
//         <div style={s.sectionInner}>
//           <div style={s.healthGrid}>
//             <div>
//               <p style={s.eyebrow}>Performance Metrics</p>
//               <h2 className="section-title">
//                 Farm Health<br /><span style={{ color: "#0369a1" }}>at a Glance</span>
//               </h2>
//               <p style={s.bodyText}>
//                 Our product suite delivers measurable, consistent results across all key aquaculture health indicators. Real data from 500+ partner farms.
//               </p>
//               <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "18px" }}>
//                 {healthAreas.map((h, i) => (
//                   <HealthBar key={i} {...h} active={healthSection.inView} delay={i * 170} />
//                 ))}
//               </div>
//             </div>

//             <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//               <div style={{ position: "relative", width: "300px", height: "300px" }}>
//                 <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1.5px dashed rgba(14,165,233,0.28)", display: "flex", alignItems: "center", justifyContent: "center", animation: "rotateGlow 22s linear infinite" }}>
//                   <div style={{ width: "210px", height: "210px", borderRadius: "50%", border: "1px solid rgba(14,165,233,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                     <div style={{ width: "140px", height: "140px", borderRadius: "50%", background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 0 60px rgba(14,165,233,0.38)", animation: "pulse 3.2s ease-in-out infinite" }}>
//                       <span style={{ fontSize: "26px" }}>🌊</span>
//                       <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em", marginTop: "5px", textTransform: "uppercase" }}>Aqua Health</span>
//                       <span style={{ color: "#fff", fontSize: "17px", fontWeight: 700, fontFamily: "'Clash Display',sans-serif" }}>9.8 / 10</span>
//                     </div>
//                   </div>
//                 </div>
//                 {[
//                   { icon: "🛡️", label: "Immunity", angle: 0   },
//                   { icon: "🌿", label: "Gills",    angle: 72  },
//                   { icon: "🦠", label: "Gut",      angle: 144 },
//                   { icon: "⚡", label: "Growth",   angle: 216 },
//                   { icon: "💧", label: "Water",    angle: 288 },
//                 ].map((item, i) => {
//                   const rad = (item.angle - 90) * (Math.PI / 180);
//                   const x = 50 + 50 * Math.cos(rad);
//                   const y = 50 + 50 * Math.sin(rad);
//                   return (
//                     <div key={i} style={{ position: "absolute", left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
//                       <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#fff", border: "1.5px solid #bae6fd", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", boxShadow: "0 4px 14px rgba(14,165,233,0.14)" }}>{item.icon}</div>
//                       <span style={{ fontSize: "9px", color: "#0369a1", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.label}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ══ PRODUCTS ══ */}
//       <section style={s.productsSection} ref={el => { (productsRef as any).current = el; (productsSection.ref as any).current = el; }}>
//         <div style={s.sectionInner}>
//           <div style={{ textAlign: "center", marginBottom: "52px" }}>
//             <p style={s.eyebrow}>Our Product Range</p>
//             <h2 className="section-title" id="products">
//               Complete Health<br /><span style={{ color: "#0369a1" }}>Product Suite</span>
//             </h2>
//             <p style={{ ...s.bodyText, maxWidth: "480px", margin: "14px auto 0" }}>
//               Six targeted solutions covering every aspect of aquatic animal health — tap a card to see full details.
//             </p>
//           </div>
//           <div style={s.productsGrid}>
//             {products.map((product, i) => (
//               <div key={product.id} className="product-hover" style={{
//                 transition: "all 0.35s ease",
//                 opacity: productsSection.inView ? 1 : 0,
//                 animation: productsSection.inView ? `cardEntrance 0.65s ${i * 0.09}s ease both` : "none",
//               }}>
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ WHY CHOOSE US ══ */}
//       <section style={s.benefitsSection} ref={benefitsSection.ref as React.RefObject<HTMLElement>}>
//         <div style={s.benefitsBg} />
//         <div style={s.sectionInner}>
//           <div style={{ textAlign: "center", marginBottom: "52px", position: "relative", zIndex: 1 }}>
//             <p style={{ ...s.eyebrow, color: "#38bdf8" }}>Why Innovare Biopharma</p>
//             <h2 className="section-title-white">Built for<br />Aquaculture Excellence</h2>
//           </div>
//           <div style={s.benefitsGrid}>
//             {benefits.map((b, i) => (
//               <div key={i} className="benefit-hover" style={{
//                 ...s.benefitCard,
//                 opacity: benefitsSection.inView ? 1 : 0,
//                 animation: benefitsSection.inView ? `floatUp 0.65s ${i * 0.13}s ease both` : "none",
//                 transition: "all 0.3s ease",
//               }}>
//                 <div style={s.benefitIconWrap}>{b.icon}</div>
//                 <h3 style={s.benefitTitle}>{b.title}</h3>
//                 <p style={s.benefitDesc}>{b.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ HOW IT WORKS ══ */}
//       <section style={s.usageSection}>
//         <div style={s.sectionInner}>
//           <div style={{ textAlign: "center", marginBottom: "52px" }}>
//             <p style={s.eyebrow}>How It Works</p>
//             <h2 className="section-title">Simple 3-Step<br /><span style={{ color: "#0369a1" }}>Protocol</span></h2>
//           </div>
//           <div style={s.stepsGrid}>
//             {[
//               { num: "01", title: "Diagnose",  desc: "Our experts assess your farm's species, stocking density, water parameters, and health history.", icon: "🔬" },
//               { num: "02", title: "Prescribe", desc: "Get a customized product protocol designed for your specific species and production cycle.",        icon: "📋" },
//               { num: "03", title: "Thrive",    desc: "Apply products as directed, monitor health metrics, and watch your farm performance improve.",      icon: "📈" },
//             ].map((step, i) => (
//               <div key={i} className="step-hover" style={s.stepCard}>
//                 <div style={s.stepNum}>{step.num}</div>
//                 <div style={{ fontSize: "28px", marginBottom: "14px" }}>{step.icon}</div>
//                 <h3 style={s.stepTitle}>{step.title}</h3>
//                 <p style={s.stepDesc}>{step.desc}</p>
//                 {i < 2 && (
//                   <div style={{ position: "absolute", right: "-22px", top: "50%", transform: "translateY(-50%)", fontSize: "22px", color: "#0ea5e9", zIndex: 2, fontWeight: 700 }}>→</div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* ══ CTA BANNER ══ */}
// <section style={s.ctaBanner}>
//         <div style={s.ctaGlow} />
//         <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
//           <h2 className="section-title-white" style={{ marginBottom: "16px" }}>
//             Ready to Transform<br />Your Farm's Health?
//           </h2>
//           <p style={s.ctaBody}>Join 500+ aquaculture farms already using Innovare Biopharma products.</p>
//           <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "32px" }}>
//             <button className="btn-primary" style={s.btnPrimary} onClick={openContact}>Contact Us</button>
//             <button className="btn-outline" style={s.btnOutline} onClick={downloadCatalog}>Download Catalog ↓</button>
//             {/* <button className="btn-outline" style={s.btnOutline} onClick={goToGallery}>Our Events →</button> */}
//           </div>
//           {/* <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>
//             {[
//               { label: "📧 Email",    href: "mailto:info@innovarebiopharma.com" },
//               { label: "📞 Call",     href: "tel:+919999999999" },
//               { label: "💬 WhatsApp", href: "https://wa.me/919999999999" },
//             ].map((lk, i) => (
//               <a key={i} href={lk.href} target={lk.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ background: "rgba(255,255,255,0.12)", border: "0.5px solid rgba(255,255,255,0.25)", color: "#e0f2fe", fontSize: "12px", fontWeight: 600, padding: "8px 18px", borderRadius: "24px", textDecoration: "none", letterSpacing: "0.03em" }}>
//                 {lk.label}
//               </a>
//             ))}
//           </div> */}
//         </div>
//       </section>
//       {/* ══ HEALTH & ENVIRONMENT FAQS ══ */}
//       <section style={s.faqSection} ref={faqSection.ref as React.RefObject<HTMLElement>}>
//         <div style={s.sectionInner}>

//           {/* Header */}
//           <div style={{ textAlign: "center", marginBottom: "52px" }}>
//             <p style={s.eyebrow}>Technical FAQs</p>
//             <h2 className="section-title">
//               Health & Environment<br />
//               <span style={{ color: "#0369a1" }}>Questions Answered</span>
//             </h2>
//             <p style={{ ...s.bodyText, maxWidth: "480px", margin: "14px auto 0" }}>
//               Science-backed answers to the most common aquaculture health and environmental questions from our partner farms.
//             </p>
//           </div>

//           {/* Accordion */}
//           <div style={{ maxWidth: "820px", margin: "0 auto" }}>
//             {HEALTH_FAQS.map((faq, i) => {
//               const isOpen = openFaq === i;
//               return (
//                 <div
//                   key={i}
//                   className="faq-card"
//                   onClick={() => setOpenFaq(isOpen ? null : i)}
//                   style={{
//                     background: isOpen ? "#f0f9ff" : "#fff",
//                     border: `1.5px solid ${isOpen ? "#0369a1" : "#e0f2fe"}`,
//                     borderRadius: "16px",
//                     marginBottom: "12px",
//                     cursor: "pointer",
//                     transition: "border-color .25s, background .25s, box-shadow .25s",
//                     boxShadow: isOpen ? "0 4px 32px rgba(14,165,233,0.10)" : "0 2px 8px rgba(14,165,233,0.04)",
//                     overflow: "hidden",
//                     opacity: faqSection.inView ? 1 : 0,
//                     animation: faqSection.inView ? `faqSlide 0.5s ${i * 0.07}s ease both` : "none",
//                   }}
//                 >
//                   {/* Question row */}
//                   <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 26px", gap: "16px" }}>
//                     <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
//                       <div style={{
//                         width: "36px", height: "36px", borderRadius: "10px",
//                         background: isOpen ? "rgba(14,165,233,0.12)" : "#f0f9ff",
//                         border: `1px solid ${isOpen ? "rgba(14,165,233,0.28)" : "#bae6fd"}`,
//                         display: "flex", alignItems: "center", justifyContent: "center",
//                         fontSize: "16px", flexShrink: 0, transition: "background .25s, border-color .25s",
//                       }}>
//                         {faq.icon}
//                       </div>
//                       <span style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "15px", fontWeight: 600, color: isOpen ? "#0c1a3a" : "#0f172a", lineHeight: 1.35 }}>
//                         {faq.q}
//                       </span>
//                     </div>
//                     <div style={{
//                       width: "30px", height: "30px", borderRadius: "50%",
//                       border: `1.5px solid ${isOpen ? "#0369a1" : "#cbd5e1"}`,
//                       background: isOpen ? "rgba(14,165,233,0.08)" : "transparent",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                       flexShrink: 0, color: "#0369a1", fontSize: "18px", fontWeight: 300, lineHeight: 1,
//                       transition: "border-color .2s, background .2s, transform .3s",
//                       transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
//                     }}>+</div>
//                   </div>

//                   {/* Answer */}
//                   <div style={{ maxHeight: isOpen ? "300px" : "0px", opacity: isOpen ? 1 : 0, overflow: "hidden", transition: "max-height .38s cubic-bezier(.4,0,.2,1), opacity .28s ease" }}>
//                     <div style={{ margin: "0 26px", padding: "16px 0 24px", borderTop: "1px solid #e0f2fe", fontSize: "14px", fontFamily: "'Satoshi',sans-serif", color: "#475569", lineHeight: 1.85, fontWeight: 400 }}>
//                       {faq.a}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Still have questions card */}
//           <div style={{
//             maxWidth: "820px", margin: "28px auto 0",
//             background: "linear-gradient(135deg,#f0f9ff,#e0f2fe)",
//             border: "1px solid #bae6fd", borderRadius: "16px",
//             padding: "26px 32px", display: "flex",
//             alignItems: "center", justifyContent: "space-between",
//             flexWrap: "wrap", gap: "16px",
//           }}>
//             <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
//               <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0, boxShadow: "0 4px 14px rgba(14,165,233,0.30)" }}>🔬</div>
//               <div>
//                 <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "14px", fontWeight: 700, color: "#0c1a3a" }}>Still have a technical question?</div>
//                 <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>Our aquaculture experts are available to advise your farm directly.</div>
//               </div>
//             </div>
//             <button className="btn-primary" style={{ ...s.btnPrimary, fontSize: "13px", padding: "11px 26px", whiteSpace: "nowrap" }} onClick={openContact}>
//               Ask an Expert →
//             </button>
//           </div>
//         </div>
//       </section>

//       <Footer></Footer>
      

//       {showContact && <ContactModal onClose={() => setShowContact(false)} />}
//     </div>
//   );
// }

// /* ─────────────────────────── STYLES ─────────────────────────── */
// const s: Record<string, React.CSSProperties> = {
//   page: { fontFamily: "'Satoshi','Segoe UI',sans-serif", background: "#f0f9ff", overflowX: "hidden" },

//   hero: {
//     backgroundImage: "linear-gradient(135deg,rgba(6,12,30,0.86) 0%,rgba(10,30,60,0.80) 42%,rgba(14,165,233,0.52) 100%), url('/images/prawn.jpeg')",
//     backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",
//     minHeight: "100vh", position: "relative", display: "flex", alignItems: "center",
//     overflow: "hidden", paddingBottom: "72px",
//   },
//   heroContent: { maxWidth: "1100px", margin: "0 auto", padding: "100px 48px 48px", position: "relative", zIndex: 2, width: "100%" },
//   heroBadge: { display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(56,189,248,0.14)", border: "0.5px solid rgba(56,189,248,0.38)", color: "#7dd3fc", fontSize: "11px", fontWeight: 600, padding: "6px 16px", borderRadius: "20px", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "22px", animation: "floatUp 0.75s ease both" },
//   heroBadgeDot: { width: "6px", height: "6px", borderRadius: "50%", background: "#38bdf8", boxShadow: "0 0 8px #38bdf8", display: "inline-block" },
//   heroGradient: { background: "linear-gradient(90deg,#38bdf8,#22d3ee,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" },
//   heroCtas: { display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "32px" },
//   btnPrimary: { background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", color: "#fff", border: "none", padding: "13px 30px", borderRadius: "40px", fontSize: "14px", fontWeight: 600, cursor: "pointer", transition: "all 0.3s ease", boxShadow: "0 4px 22px rgba(14,165,233,0.4)", letterSpacing: "0.02em" },
//   btnOutline: { background: "rgba(255,255,255,0.08)", color: "#e0f2fe", border: "1px solid rgba(255,255,255,0.22)", padding: "13px 30px", borderRadius: "40px", fontSize: "14px", fontWeight: 500, cursor: "pointer", transition: "all 0.3s ease" },
//   heroCards: { display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "44px" },
//   heroFloatCard: { background: "rgba(255,255,255,0.09)", backdropFilter: "blur(12px)", border: "0.5px solid rgba(255,255,255,0.18)", borderRadius: "14px", padding: "13px 18px", display: "flex", alignItems: "center", gap: "12px", animation: "cardEntrance 0.7s ease both" },
//   heroFloatVal:   { color: "#fff", fontSize: "17px", fontWeight: 700, fontFamily: "'Clash Display',sans-serif", lineHeight: 1.1 },
//   heroFloatLabel: { color: "rgba(255,255,255,0.55)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500, marginTop: "2px" },

//   statsSection: { background: "#fff" },
//   statsInner:   { maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)" },
//   statWrap:     { padding: "36px 28px", borderRight: "0.5px solid #e0f2fe", textAlign: "center", background: "#fff", cursor: "default" },
//   statNum:      { fontFamily: "'Clash Display',sans-serif", fontSize: "46px", fontWeight: 700, color: "#0369a1", lineHeight: 1, marginBottom: "6px" },
//   statLabel:    { fontSize: "11px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 },

//   sectionInner: { maxWidth: "1100px", margin: "0 auto", padding: "0 48px" },
//   eyebrow:      { fontSize: "11px", fontWeight: 700, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "10px" },
//   bodyText:     { fontSize: "14px", color: "#475569", lineHeight: 1.8, marginTop: "14px" },

//   healthSection: { background: "#f0f9ff", padding: "96px 0" },
//   healthGrid:    { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center" },

//   barRow:   { marginBottom: "2px" },
//   barTop:   { display: "flex", justifyContent: "space-between", marginBottom: "6px" },
//   barLabel: { fontSize: "13px", color: "#334155", fontWeight: 500 },
//   barPct:   { fontSize: "13px", fontWeight: 700 },
//   barTrack: { height: "7px", background: "#e0f2fe", borderRadius: "8px", overflow: "hidden" },
//   barFill:  { height: "100%", borderRadius: "8px" },

//   productsSection: { background: "#fff", padding: "96px 0" },
//   productsGrid:    { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" },

//   cardOuter: { perspective: "1000px", height: "355px" },
//   cardInner: { position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d", transition: "transform 0.65s cubic-bezier(0.34,1.56,0.64,1)" },
//   cardFace:  { position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", borderRadius: "18px", padding: "26px", border: "0.5px solid", display: "flex", flexDirection: "column" },
//   cardFront: {},
//   cardBack:  { transform: "rotateY(180deg)" },
//   cardAccentLine: { position: "absolute", top: 0, left: "26px", right: "26px", height: "3px", borderRadius: "0 0 3px 3px" },
//   cardBadge:   { alignSelf: "flex-start", fontSize: "9px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", border: "0.5px solid", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "14px" },
//   cardIcon:    { fontSize: "34px", marginBottom: "10px" },
//   cardName:    { fontFamily: "'Clash Display',sans-serif", fontSize: "18px", fontWeight: 700, marginBottom: "6px", lineHeight: 1.2 },
//   cardTagline: { fontSize: "12px", color: "#64748b", lineHeight: 1.55, flexGrow: 1, marginBottom: "12px" },
//   backIcon:        { fontSize: "26px", marginBottom: "8px" },
//   backName:        { fontFamily: "'Clash Display',sans-serif", fontSize: "16px", fontWeight: 700, color: "#fff", marginBottom: "14px" },
//   backSection:     { marginBottom: "12px" },
//   backSubtitle:    { fontSize: "9px", color: "rgba(255,255,255,0.58)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px", fontWeight: 700 },
//   backBenefit:     { display: "flex", alignItems: "flex-start", gap: "7px", marginBottom: "5px" },
//   backCheck:       { color: "#fff", fontWeight: 700, fontSize: "11px", marginTop: "1px", flexShrink: 0 },
//   backBenefitText: { color: "rgba(255,255,255,0.88)", fontSize: "12px", lineHeight: 1.45 },
//   backUsage:       { color: "#fff", fontSize: "12px", fontWeight: 600, background: "rgba(255,255,255,0.15)", borderRadius: "8px", padding: "8px 12px" },
//   backBtn:         { background: "rgba(255,255,255,0.18)", color: "#fff", border: "0.5px solid rgba(255,255,255,0.35)", padding: "8px 18px", borderRadius: "20px", fontSize: "11px", fontWeight: 500, cursor: "pointer", marginTop: "10px", transition: "background 0.2s" },

//   benefitsSection: { background: "linear-gradient(140deg,#0c1a3a 0%,#0e3a6e 100%)", padding: "96px 0", position: "relative", overflow: "hidden" },
//   benefitsBg:      { position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(56,189,248,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.04) 1px,transparent 1px)", backgroundSize: "56px 56px" },
//   benefitsGrid:    { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px", position: "relative", zIndex: 1 },
//   benefitCard:     { background: "rgba(255,255,255,0.045)", border: "0.5px solid rgba(255,255,255,0.09)", borderRadius: "18px", padding: "28px 22px" },
//   benefitIconWrap: { fontSize: "26px", marginBottom: "16px" },
//   benefitTitle:    { fontFamily: "'Clash Display',sans-serif", fontSize: "15px", fontWeight: 600, color: "#fff", marginBottom: "10px", lineHeight: 1.3 },
//   benefitDesc:     { fontSize: "13px", color: "rgba(255,255,255,0.52)", lineHeight: 1.72 },

//   usageSection: { background: "#f0f9ff", padding: "96px 0" },
//   stepsGrid:    { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0", position: "relative" },
//   stepCard:     { background: "#fff", border: "0.5px solid #bae6fd", borderRadius: "18px", padding: "34px 26px", position: "relative", margin: "0 10px", boxShadow: "0 4px 20px rgba(14,165,233,0.07)", transition: "all 0.3s ease" },
//   stepNum:      { fontFamily: "'Clash Display',sans-serif", fontSize: "52px", fontWeight: 700, color: "#e0f2fe", lineHeight: 1, marginBottom: "14px" },
//   stepTitle:    { fontFamily: "'Clash Display',sans-serif", fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: "10px" },
//   stepDesc:     { fontSize: "13px", color: "#64748b", lineHeight: 1.72 },

//   faqSection: { background: "#fff", padding: "96px 0", borderTop: "1px solid #e0f2fe" },

//   ctaBanner: { background: "linear-gradient(140deg,#0369a1,#0ea5e9)", padding: "96px 48px", textAlign: "center", position: "relative", overflow: "hidden" },
//   ctaGlow:   { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.1),transparent 68%)" },
//   ctaBody:   { color: "rgba(255,255,255,0.78)", fontSize: "15px", marginTop: "14px", lineHeight: 1.7 },
// };
"use client";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef, useCallback } from "react";

/* ─────────────────────────── DATA ─────────────────────────── */

const stats = [
  { label: "Years of R&D",     value: 5,    suffix: "+", icon: "🔬" },
   { label: "Products",         value: 33,   suffix: "+", icon: "🧪" },
   { label: "Export Countries", value: 15,   suffix: "+", icon: "🌍" },
  { label: "Partner Farms",    value: 1000,  suffix: "+", icon: "🏡" },
 
  
  
];

const healthAreas = [
  { label: "Immunity Response",  pct: 95, color: "#0ea5e9" },
  { label: "Growth Rate",        pct: 88, color: "#06b6d4" },
  { label: "Water Quality Score",pct: 98, color: "#0369a1" },
  { label: "Disease Resistance", pct: 91, color: "#38bdf8" },
  { label: "Feed Conversion",    pct: 84, color: "#0284c7" },
];

const products = [
  {
    id: 1, icon: "🛡️", name: "i-IMMUNVARE", category: "Immunity",
    tagline: "Advanced immunostimulant for superior disease resistance",
    color: "#0ea5e9", bg: "#f0f9ff", border: "#bae6fd",
    benefits: ["Boosts haemocyte activity by 95%","Reduces EMS & WSSV risk","Supports moulting cycles"],
    usage: "Apply 5g/kg feed during high-risk periods",
  },
  {
    id: 2, icon: "🌱", name: "i-PROVARE GUT", category: "Probiotics",
    tagline: "Multi-strain probiotic for gut health and water quality",
    color: "#06b6d4", bg: "#ecfeff", border: "#a5f3fc",
    benefits: ["Restores beneficial gut microflora","Degrades ammonia & H₂S","Stabilises pond plankton"],
    usage: "Broadcast 1kg/acre every 7–10 days",
  },
  {
    id: 3, icon: "💧", name: "i.Heptopancvare", category: "Water Quality",
    tagline: "Complete pond health management system",
    color: "#0369a1", bg: "#f0f9ff", border: "#bae6fd",
    benefits: ["Reduces toxic sludge buildup","Stabilises pH and alkalinity","Improves dissolved oxygen"],
    usage: "Apply 2kg/acre during early morning",
  },
  {
    id: 4, icon: "⚡", name: "i-CEEVARE", category: "Growth",
    tagline: "Precision growth promoter for faster, uniform harvests",
    color: "#0284c7", bg: "#f0f9ff", border: "#bae6fd",
    benefits: ["Accelerates growth by 30%","Improves feed conversion ratio","Uniform size at harvest"],
    usage: "Mix 3g/kg feed throughout crop cycle",
  },
  {
    id: 5, icon: "💧", name: "i-OXYVARE", category: "Oxygenation",
    tagline: "Emergency & preventive dissolved oxygen granules",
    color: "#38bdf8", bg: "#f0f9ff", border: "#bae6fd",
    benefits: ["Rapid O₂ release in minutes","Safe for all life stages","Prevents hypoxic mortality"],
    usage: "Broadcast 500g/acre when DO < 4 ppm",
  },
  {
    id: 6, icon: "⚗️", name: "i.Wfsvare Gel", category: "Minerals",
    tagline: "Activated zeolite for ammonia control and water clarity",
    color: "#0ea5e9", bg: "#f0f9ff", border: "#bae6fd",
    benefits: ["Adsorbs ammonium ions rapidly","Improves water transparency","Safe for continuous use"],
    usage: "Apply 20kg/acre monthly or after heavy rain",
  },
];

const benefits = [
  { icon: "🏭", title: "GMP-Certified Manufacturing",   desc: "Every batch produced under strict Good Manufacturing Practice standards with full traceability." },
  { icon: "🔬", title: "Science-Backed Formulations",   desc: "All products developed by PhD-level aquaculture scientists with field-validated efficacy data." },
  { icon: "🌿", title: "Eco-Safe Ingredients",          desc: "Biodegradable actives — safe for non-target organisms, waterways, and export-destined shrimp." },
  { icon: "🤝", title: "Dedicated Farm Support",        desc: "On-call technical experts available to every partner farm throughout the production cycle." },
];

const HEALTH_FAQS = [
  { icon: "🛡️", q: "How do Innovare probiotics improve shrimp immunity?",
    a: "Innovare probiotic formulations introduce beneficial bacterial strains that colonise the shrimp gut, outcompete pathogenic bacteria, and stimulate the innate immune response. Regular application results in enhanced haemocyte activity, improved disease resistance, and lower mortality rates across the crop cycle." },
  { icon: "💉", q: "What is the role of i-IMMUNVARE in disease prevention?",
    a: "i-IMMUNVARE is a concentrated immunostimulant blend combining beta-glucans, vitamin C derivatives, and organic minerals. It primes the shrimp immune system before high-risk periods — such as post-stocking, moulting, and monsoon season — reducing the incidence of White Spot Syndrome, EMS, and bacterial infections." },
  { icon: "🌿", q: "How do Innovare products support a healthy pond environment?",
    a: "Our water and soil probiotic range (i-PONDVARE series) degrades excess organic sludge, reduces toxic ammonia and hydrogen sulphide build-up, and stabilises plankton bloom. This creates a balanced pond ecosystem that directly supports shrimp health and reduces the need for chemical interventions." },
  { icon: "💧", q: "When should I apply oxygen-boosting products like i-OXYVARE?",
    a: "i-OXYVARE oxygen granules are recommended during early morning hours (2 AM–6 AM) when dissolved oxygen levels are at their lowest, during high stocking density phases, after heavy rainfall that disturbs the pond, or when shrimp display surface-gulping behaviour indicating hypoxic stress." },
  { icon: "🌊", q: "Are Innovare health products safe for the surrounding aquatic ecosystem?",
    a: "Yes. All Innovare Biopharma health products are formulated with eco-safety as a core principle. Active ingredients are biodegradable, do not bioaccumulate in sediment, and have been tested for non-toxicity to non-target organisms including fish, molluscs, and beneficial zooplankton." },
  { icon: "⚗️", q: "How does zeolite help in maintaining water quality?",
    a: "Zeolite is a natural mineral adsorbent that selectively binds ammonium ions in pond water, preventing toxic ammonia spikes — especially critical in high-density ponds. Our i-ZEOVARE grade is sized and activated for rapid action, and can be broadcast directly or applied through paddle-wheel aeration." },
  { icon: "🔬", q: "Can Innovare products be used during antibiotic treatment periods?",
    a: "Probiotic products should be paused during active antibiotic dosing to avoid antagonism, then reintroduced 48–72 hours after the last antibiotic dose to restore beneficial microflora. Mineral, vitamin, and water-quality products are generally compatible and can continue throughout. Our technical team can advise a precise schedule." },
  { icon: "🌱", q: "What is the environmental impact of using Innovare soil probiotics?",
    a: "Soil probiotics such as i-SOILVARE accelerate the breakdown of accumulated organic matter and reduce BOD/COD loads in pond effluent. This significantly lowers the environmental footprint of discharge water, supporting compliance with aquaculture effluent standards and protecting surrounding waterways." },
];

/* ─────────────────────────── HOOKS ─────────────────────────── */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCounter(target: number, active: boolean, duration = 1400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0; const step = target / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(id);
  }, [active, target, duration]);
  return count;
}

/* ─────────────────────────── SUB-COMPONENTS ─────────────────────────── */

function StatCard({ label, value, suffix, icon, active }: { label: string; value: number; suffix: string; icon: string; active: boolean }) {
  const count = useCounter(value, active);
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "28px", marginBottom: "8px" }}>{icon}</div>
      <div style={s.statNum}>{count}{suffix}</div>
      <div style={s.statLabel}>{label}</div>
    </div>
  );
}

function HealthBar({ label, pct, color, active, delay }: { label: string; pct: number; color: string; active: boolean; delay: number }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setWidth(pct), delay);
    return () => clearTimeout(t);
  }, [active, pct, delay]);
  return (
    <div style={s.barRow}>
      <div style={s.barTop}>
        <span style={s.barLabel}>{label}</span>
        <span style={{ ...s.barPct, color }}>{pct}%</span>
      </div>
      <div style={s.barTrack}>
        <div style={{ ...s.barFill, width: `${width}%`, background: color, transition: "width 1.1s cubic-bezier(.4,0,.2,1)" }} />
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="card-outer" style={s.cardOuter} onClick={() => setFlipped(f => !f)}>
      <div style={{ ...s.cardInner, transform: flipped ? "rotateY(180deg)" : "none" }}>
        {/* Front */}
        <div style={{ ...s.cardFace, ...s.cardFront, background: product.bg, borderColor: product.border }}>
          <div style={{ ...s.cardAccentLine, background: product.color }} />
          <div style={{ ...s.cardBadge, color: product.color, borderColor: product.border, background: "#fff" }}>{product.category}</div>
          <div style={s.cardIcon}>{product.icon}</div>
          <div style={{ ...s.cardName, color: "#0f172a" }}>{product.name}</div>
          <div style={s.cardTagline}>{product.tagline}</div>
          <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: product.color, fontWeight: 600 }}>
            Tap for details <span>→</span>
          </div>
        </div>
        {/* Back */}
        <div style={{ ...s.cardFace, ...s.cardBack, background: `linear-gradient(145deg,${product.color},#0c1a3a)`, borderColor: "transparent" }}>
          <div style={s.backIcon}>{product.icon}</div>
          <div style={s.backName}>{product.name}</div>
          <div style={s.backSection}>
            <div style={s.backSubtitle}>Key Benefits</div>
            {product.benefits.map((b, i) => (
              <div key={i} style={s.backBenefit}>
                <span style={s.backCheck}>✓</span>
                <span style={s.backBenefitText}>{b}</span>
              </div>
            ))}
          </div>
          <div style={s.backSection}>
            <div style={s.backSubtitle}>Recommended Usage</div>
            <div style={s.backUsage}>{product.usage}</div>
          </div>
          <button style={s.backBtn} onClick={e => { e.stopPropagation(); setFlipped(false); }}>← Back</button>
        </div>
      </div>
    </div>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }} onClick={onClose}>
      <div style={{ background: "#fff", borderRadius: "20px", padding: "40px", maxWidth: "480px", width: "100%", position: "relative" }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: "absolute", top: "16px", right: "20px", background: "none", border: "none", fontSize: "22px", cursor: "pointer", color: "#64748b" }}>×</button>
        <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "24px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>Get in Touch</h2>
        <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "28px", lineHeight: 1.6 }}>Our aquaculture experts will respond within 24 hours.</p>
        {["Your Name", "Email Address", "Farm Location"].map(ph => (
          <input key={ph} placeholder={ph} style={{ width: "100%", padding: "12px 16px", border: "1.5px solid #e0f2fe", borderRadius: "10px", fontSize: "14px", marginBottom: "12px", outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
        ))}
        <textarea placeholder="Your question or requirement" rows={3} style={{ width: "100%", padding: "12px 16px", border: "1.5px solid #e0f2fe", borderRadius: "10px", fontSize: "14px", marginBottom: "16px", outline: "none", fontFamily: "inherit", resize: "none", boxSizing: "border-box" }} />
        <button style={{ width: "100%", background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", color: "#fff", border: "none", padding: "14px", borderRadius: "40px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>Send Message →</button>
      </div>
    </div>
  );
}
/* ─────────────────────────── MAIN PAGE ─────────────────────────── */

export default function HealthPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showContact, setShowContact] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const statsSection    = useInView(0.2);
  const healthSection   = useInView(0.2);
  const productsSection = useInView(0.1);
  const benefitsSection = useInView(0.15);
  const faqSection      = useInView(0.1);

  const productsRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const scrollToProducts = () => productsRef.current?.scrollIntoView({ behavior: "smooth" });
  const openContact      = () => setShowContact(true);
  const downloadCatalog  = () => window.open("/catalog.pdf", "_blank");
  const goToAbout        = () => window.location.href = "/about";
  const goToGallery      = () => window.location.href = "/gallery";

  return (
    <div style={s.page} onMouseMove={onMouseMove}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@500;600;700&family=Satoshi:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        img { max-width: 100%; }

        @keyframes floatUp    { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn     { from{opacity:0} to{opacity:1} }
        @keyframes slideUp    { from{opacity:0;transform:translateY(32px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes bubble     { 0%{transform:translateY(0) scale(1);opacity:0.5} 50%{opacity:0.9} 100%{transform:translateY(-120vh) scale(0.5);opacity:0} }
        @keyframes wave       { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes pulse      { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.05);opacity:0.85} }
        @keyframes rotateGlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes cardEntrance { from{opacity:0;transform:translateY(40px) scale(0.96)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes faqSlide   { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

        .hero-title {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 700; line-height: 1.08;
          color: #fff; letter-spacing: -0.02em;
          animation: floatUp 0.9s ease both;
        }
        .hero-sub {
          font-family: 'Satoshi', sans-serif;
          font-size: 16px; color: rgba(255,255,255,0.72);
          max-width: 520px; line-height: 1.75;
          animation: floatUp 0.9s 0.2s ease both;
        }
        .hero-cta { animation: floatUp 0.9s 0.38s ease both; }

        .section-title {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(24px, 3.2vw, 42px);
          font-weight: 700; color: #0f172a;
          line-height: 1.15; letter-spacing: -0.01em;
        }
        .section-title-white {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(24px, 3.2vw, 42px);
          font-weight: 700; color: #fff;
          line-height: 1.15; letter-spacing: -0.01em;
        }

        .bubble { position:absolute; border-radius:50%; background:rgba(255,255,255,0.12); animation:bubble linear infinite; }
        .wave-wrap { position:absolute; bottom:0; left:0; right:0; height:72px; overflow:hidden; }
        .wave-svg  { display:block; width:200%; animation:wave 9s linear infinite; }

        .btn-primary:hover   { transform:translateY(-2px); box-shadow:0 10px 36px rgba(14,165,233,0.55) !important; }
        .btn-outline:hover   { background:rgba(255,255,255,0.14) !important; }
        .stat-hover:hover    { transform:translateY(-5px) scale(1.02); box-shadow:0 16px 48px rgba(14,165,233,0.2); }
        .product-hover:hover { transform:translateY(-6px); box-shadow:0 24px 64px rgba(0,0,0,0.13); }
        .benefit-hover:hover { background:rgba(255,255,255,0.08) !important; border-color:rgba(96,165,250,0.3) !important; transform:translateY(-3px); }
        .step-hover:hover    { box-shadow:0 12px 40px rgba(14,165,233,0.15) !important; transform:translateY(-3px); }
        .faq-card:hover      { border-color:#93c5fd !important; box-shadow:0 4px 20px rgba(14,165,233,0.08) !important; }

        /* ═══════════════════════ RESPONSIVE ═══════════════════════ */

        /* Small laptops */
        @media (max-width: 1100px) {
          .section-inner    { padding: 0 36px !important; }
          .hero-content      { padding: 88px 36px 40px !important; }
          .health-section    { padding: 76px 0 !important; }
          .products-section  { padding: 76px 0 !important; }
          .benefits-section  { padding: 76px 0 !important; }
          .usage-section     { padding: 76px 0 !important; }
          .faq-section       { padding: 76px 0 !important; }
          .cta-banner        { padding: 76px 36px !important; }
        }

        /* Tablets */
        @media (max-width: 900px) {
          .stats-inner    { grid-template-columns: repeat(2,1fr) !important; }
          .stat-wrap:nth-child(2n) { border-right: none !important; }
          .stat-wrap      { border-bottom: 0.5px solid #e0f2fe !important; }
          .health-grid    { grid-template-columns: 1fr !important; gap: 40px !important; }
          .products-grid  { grid-template-columns: repeat(2,1fr) !important; }
          .benefits-grid  { grid-template-columns: repeat(2,1fr) !important; }
          .steps-grid     { grid-template-columns: 1fr !important; gap: 36px !important; }
          .step-card      { margin: 0 !important; }
          .step-arrow     { display: none !important; }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .section-inner     { padding: 0 20px !important; }
          .hero-content       { padding: 76px 20px 32px !important; }
          .health-section     { padding: 56px 0 !important; }
          .products-section   { padding: 56px 0 !important; }
          .benefits-section   { padding: 56px 0 !important; }
          .usage-section      { padding: 56px 0 !important; }
          .faq-section        { padding: 56px 0 !important; }
          .cta-banner         { padding: 56px 20px !important; }
          .stats-inner        { grid-template-columns: 1fr 1fr !important; }
          .stat-wrap          { padding: 24px 16px !important; }
          .stat-num           { font-size: 32px !important; }
          .health-grid        { gap: 32px !important; }
          .products-grid      { grid-template-columns: 1fr !important; }
          .card-outer         { height: auto !important; }
          .benefits-grid      { grid-template-columns: 1fr !important; }
          .hero-ctas          { width: 100%; }
          .hero-ctas button   { flex: 1 1 auto; }
          .faq-cta-card       { flex-direction: column !important; align-items: flex-start !important; }
          .faq-cta-card button{ width: 100%; }
        }

        /* Small phones */
        @media (max-width: 420px) {
          .stats-inner { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section style={s.hero}>
        {[...Array(12)].map((_, i) => (
          <div key={i} className="bubble" style={{
            width: `${7 + (i % 5) * 7}px`, height: `${7 + (i % 5) * 7}px`,
            left: `${(i * 8.4) % 100}%`, bottom: `${(i * 7) % 22}%`,
            animationDuration: `${6 + i}s`, animationDelay: `${i * 0.55}s`,
          }} />
        ))}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56,189,248,0.10), transparent 55%)`, transition: "background 0.1s" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(56,189,248,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.05) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />

        <div className="hero-content" style={s.heroContent}>
          <div style={s.heroBadge}>
            <span style={s.heroBadgeDot} />
            Aquaculture Health Solutions
          </div>
          <h1 className="hero-title">
            Advanced Health<br />
            <span style={s.heroGradient}>Solutions</span> for Aquaculture
          </h1>
          <p className="hero-sub" style={{ marginTop: "20px" }}>
            Complete health management for aquatic species — from immunity and growth to water quality and gut health. Trusted by 1000+ farms across India.
          </p>
          <div className="hero-cta hero-ctas" style={s.heroCtas}>
            <button className="btn-primary" style={s.btnPrimary} onClick={scrollToProducts}>Explore Products ↓</button>
            <button className="btn-outline" style={s.btnOutline} onClick={goToAbout}>About Us →</button>
          </div>
          <div style={s.heroCards}>
            {[
              { icon: "🛡️", label: "Immunity Boost", val: "+95%" },
              { icon: "⚡",  label: "Faster Growth",  val: "+30%" },
              // { icon: "💧",  label: "Water Quality",  val: "98/100" },
            ].map((c, i) => (
              <div key={i} style={{ ...s.heroFloatCard, animationDelay: `${0.6 + i * 0.14}s` }}>
                <span style={{ fontSize: "22px" }}>{c.icon}</span>
                <div>
                  <div style={s.heroFloatVal}>{c.val}</div>
                  <div style={s.heroFloatLabel}>{c.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wave-wrap">
          <svg className="wave-svg" viewBox="0 0 1440 72" preserveAspectRatio="none" style={{ height: "72px" }}>
            <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" fill="#f0f9ff" />
            <path d="M0,50 C360,18 720,64 1080,38 C1260,22 1380,50 1440,50 L1440,72 L0,72 Z" fill="#e0f2fe" opacity="0.45" />
          </svg>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section style={s.statsSection} ref={statsSection.ref as React.RefObject<HTMLElement>}>
        <div className="stats-inner" style={s.statsInner}>
          {stats.map((stat, i) => (
            <div key={i} className="stat-hover stat-wrap" style={{
              ...s.statWrap, transition: "all 0.3s ease",
              opacity: statsSection.inView ? 1 : 0,
              animation: statsSection.inView ? `floatUp 0.65s ${i * 0.1}s ease both` : "none",
            }}>
              <StatCard {...stat} active={statsSection.inView} />
            </div>
          ))}
        </div>
      </section>

      {/* ══ HEALTH METRICS ══ */}
      <section className="health-section" style={s.healthSection} ref={healthSection.ref as React.RefObject<HTMLElement>}>
        <div className="section-inner" style={s.sectionInner}>
          <div className="health-grid" style={s.healthGrid}>
            <div>
              <p style={s.eyebrow}>Performance Metrics</p>
              <h2 className="section-title">
                Farm Health<br /><span style={{ color: "#0369a1" }}>at a Glance</span>
              </h2>
              <p style={s.bodyText}>
                Our product suite delivers measurable, consistent results across all key aquaculture health indicators. Real data from 500+ partner farms.
              </p>
              <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "18px" }}>
                {healthAreas.map((h, i) => (
                  <HealthBar key={i} {...h} active={healthSection.inView} delay={i * 170} />
                ))}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ position: "relative", width: "300px", height: "300px", maxWidth: "100%" }}>
                <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1.5px dashed rgba(14,165,233,0.28)", display: "flex", alignItems: "center", justifyContent: "center", animation: "rotateGlow 22s linear infinite" }}>
                  <div style={{ width: "210px", height: "210px", borderRadius: "50%", border: "1px solid rgba(14,165,233,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "140px", height: "140px", borderRadius: "50%", background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 0 60px rgba(14,165,233,0.38)", animation: "pulse 3.2s ease-in-out infinite" }}>
                      <span style={{ fontSize: "26px" }}>🌊</span>
                      <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em", marginTop: "5px", textTransform: "uppercase" }}>Aqua Health</span>
                      <span style={{ color: "#fff", fontSize: "17px", fontWeight: 700, fontFamily: "'Clash Display',sans-serif" }}>9.8 / 10</span>
                    </div>
                  </div>
                </div>
                {[
                  { icon: "🛡️", label: "Immunity", angle: 0   },
                  { icon: "🌿", label: "Gills",    angle: 72  },
                  { icon: "🦠", label: "Gut",      angle: 144 },
                  { icon: "⚡", label: "Growth",   angle: 216 },
                  { icon: "💧", label: "Water",    angle: 288 },
                ].map((item, i) => {
                  const rad = (item.angle - 90) * (Math.PI / 180);
                  const x = 50 + 50 * Math.cos(rad);
                  const y = 50 + 50 * Math.sin(rad);
                  return (
                    <div key={i} style={{ position: "absolute", left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
                      <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#fff", border: "1.5px solid #bae6fd", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", boxShadow: "0 4px 14px rgba(14,165,233,0.14)" }}>{item.icon}</div>
                      <span style={{ fontSize: "9px", color: "#0369a1", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRODUCTS ══ */}
      <section className="products-section" style={s.productsSection} ref={el => { (productsRef as any).current = el; (productsSection.ref as any).current = el; }}>
        <div className="section-inner" style={s.sectionInner}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <p style={s.eyebrow}>Our Product Range</p>
            <h2 className="section-title" id="products">
              Complete Health<br /><span style={{ color: "#0369a1" }}>Product Suite</span>
            </h2>
            <p style={{ ...s.bodyText, maxWidth: "480px", margin: "14px auto 0" }}>
              Six targeted solutions covering every aspect of aquatic animal health — tap a card to see full details.
            </p>
          </div>
          <div className="products-grid" style={s.productsGrid}>
            {products.map((product, i) => (
              <div key={product.id} className="product-hover" style={{
                transition: "all 0.35s ease",
                opacity: productsSection.inView ? 1 : 0,
                animation: productsSection.inView ? `cardEntrance 0.65s ${i * 0.09}s ease both` : "none",
              }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section className="benefits-section" style={s.benefitsSection} ref={benefitsSection.ref as React.RefObject<HTMLElement>}>
        <div style={s.benefitsBg} />
        <div className="section-inner" style={s.sectionInner}>
          <div style={{ textAlign: "center", marginBottom: "52px", position: "relative", zIndex: 1 }}>
            <p style={{ ...s.eyebrow, color: "#38bdf8" }}>Why Innovare Biopharma</p>
            <h2 className="section-title-white">Built for<br />Aquaculture Excellence</h2>
          </div>
          <div className="benefits-grid" style={s.benefitsGrid}>
            {benefits.map((b, i) => (
              <div key={i} className="benefit-hover" style={{
                ...s.benefitCard,
                opacity: benefitsSection.inView ? 1 : 0,
                animation: benefitsSection.inView ? `floatUp 0.65s ${i * 0.13}s ease both` : "none",
                transition: "all 0.3s ease",
              }}>
                <div style={s.benefitIconWrap}>{b.icon}</div>
                <h3 style={s.benefitTitle}>{b.title}</h3>
                <p style={s.benefitDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="usage-section" style={s.usageSection}>
        <div className="section-inner" style={s.sectionInner}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <p style={s.eyebrow}>How It Works</p>
            <h2 className="section-title">Simple 3-Step<br /><span style={{ color: "#0369a1" }}>Protocol</span></h2>
          </div>
          <div className="steps-grid" style={s.stepsGrid}>
            {[
              { num: "01", title: "Diagnose",  desc: "Our experts assess your farm's species, stocking density, water parameters, and health history.", icon: "🔬" },
              { num: "02", title: "Prescribe", desc: "Get a customized product protocol designed for your specific species and production cycle.",        icon: "📋" },
              { num: "03", title: "Thrive",    desc: "Apply products as directed, monitor health metrics, and watch your farm performance improve.",      icon: "📈" },
            ].map((step, i) => (
              <div key={i} className="step-hover step-card" style={s.stepCard}>
                <div style={s.stepNum}>{step.num}</div>
                <div style={{ fontSize: "28px", marginBottom: "14px" }}>{step.icon}</div>
                <h3 style={s.stepTitle}>{step.title}</h3>
                <p style={s.stepDesc}>{step.desc}</p>
                {i < 2 && (
                  <div className="step-arrow" style={{ position: "absolute", right: "-22px", top: "50%", transform: "translateY(-50%)", fontSize: "22px", color: "#0ea5e9", zIndex: 2, fontWeight: 700 }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ══ CTA BANNER ══ */}
<section className="cta-banner" style={s.ctaBanner}>
        <div style={s.ctaGlow} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 className="section-title-white" style={{ marginBottom: "16px" }}>
            Ready to Transform<br />Your Farm's Health?
          </h2>
          <p style={s.ctaBody}>Join 500+ aquaculture farms already using Innovare Biopharma products.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "32px" }}>
            <button className="btn-primary" style={s.btnPrimary} onClick={openContact}>Contact Us</button>
            <button className="btn-outline" style={s.btnOutline} onClick={downloadCatalog}>Download Catalog ↓</button>
            {/* <button className="btn-outline" style={s.btnOutline} onClick={goToGallery}>Our Events →</button> */}
          </div>
          {/* <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>
            {[
              { label: "📧 Email",    href: "mailto:info@innovarebiopharma.com" },
              { label: "📞 Call",     href: "tel:+919999999999" },
              { label: "💬 WhatsApp", href: "https://wa.me/919999999999" },
            ].map((lk, i) => (
              <a key={i} href={lk.href} target={lk.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ background: "rgba(255,255,255,0.12)", border: "0.5px solid rgba(255,255,255,0.25)", color: "#e0f2fe", fontSize: "12px", fontWeight: 600, padding: "8px 18px", borderRadius: "24px", textDecoration: "none", letterSpacing: "0.03em" }}>
                {lk.label}
              </a>
            ))}
          </div> */}
        </div>
      </section>
      {/* ══ HEALTH & ENVIRONMENT FAQS ══ */}
      <section className="faq-section" style={s.faqSection} ref={faqSection.ref as React.RefObject<HTMLElement>}>
        <div className="section-inner" style={s.sectionInner}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <p style={s.eyebrow}>Technical FAQs</p>
            <h2 className="section-title">
              Health & Environment<br />
              <span style={{ color: "#0369a1" }}>Questions Answered</span>
            </h2>
            <p style={{ ...s.bodyText, maxWidth: "480px", margin: "14px auto 0" }}>
              Science-backed answers to the most common aquaculture health and environmental questions from our partner farms.
            </p>
          </div>

          {/* Accordion */}
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            {HEALTH_FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="faq-card"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  style={{
                    background: isOpen ? "#f0f9ff" : "#fff",
                    border: `1.5px solid ${isOpen ? "#0369a1" : "#e0f2fe"}`,
                    borderRadius: "16px",
                    marginBottom: "12px",
                    cursor: "pointer",
                    transition: "border-color .25s, background .25s, box-shadow .25s",
                    boxShadow: isOpen ? "0 4px 32px rgba(14,165,233,0.10)" : "0 2px 8px rgba(14,165,233,0.04)",
                    overflow: "hidden",
                    opacity: faqSection.inView ? 1 : 0,
                    animation: faqSection.inView ? `faqSlide 0.5s ${i * 0.07}s ease both` : "none",
                  }}
                >
                  {/* Question row */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 26px", gap: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: 0 }}>
                      <div style={{
                        width: "36px", height: "36px", borderRadius: "10px",
                        background: isOpen ? "rgba(14,165,233,0.12)" : "#f0f9ff",
                        border: `1px solid ${isOpen ? "rgba(14,165,233,0.28)" : "#bae6fd"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "16px", flexShrink: 0, transition: "background .25s, border-color .25s",
                      }}>
                        {faq.icon}
                      </div>
                      <span style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "15px", fontWeight: 600, color: isOpen ? "#0c1a3a" : "#0f172a", lineHeight: 1.35 }}>
                        {faq.q}
                      </span>
                    </div>
                    <div style={{
                      width: "30px", height: "30px", borderRadius: "50%",
                      border: `1.5px solid ${isOpen ? "#0369a1" : "#cbd5e1"}`,
                      background: isOpen ? "rgba(14,165,233,0.08)" : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, color: "#0369a1", fontSize: "18px", fontWeight: 300, lineHeight: 1,
                      transition: "border-color .2s, background .2s, transform .3s",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}>+</div>
                  </div>

                  {/* Answer */}
                  <div style={{ maxHeight: isOpen ? "300px" : "0px", opacity: isOpen ? 1 : 0, overflow: "hidden", transition: "max-height .38s cubic-bezier(.4,0,.2,1), opacity .28s ease" }}>
                    <div style={{ margin: "0 26px", padding: "16px 0 24px", borderTop: "1px solid #e0f2fe", fontSize: "14px", fontFamily: "'Satoshi',sans-serif", color: "#475569", lineHeight: 1.85, fontWeight: 400 }}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still have questions card */}
          <div className="faq-cta-card" style={{
            maxWidth: "820px", margin: "28px auto 0",
            background: "linear-gradient(135deg,#f0f9ff,#e0f2fe)",
            border: "1px solid #bae6fd", borderRadius: "16px",
            padding: "26px 32px", display: "flex",
            alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: "16px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: 0 }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0, boxShadow: "0 4px 14px rgba(14,165,233,0.30)" }}>🔬</div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "14px", fontWeight: 700, color: "#0c1a3a" }}>Still have a technical question?</div>
                <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>Our aquaculture experts are available to advise your farm directly.</div>
              </div>
            </div>
            <button className="btn-primary" style={{ ...s.btnPrimary, fontSize: "13px", padding: "11px 26px", whiteSpace: "nowrap" }} onClick={openContact}>
              Ask an Expert →
            </button>
          </div>
        </div>
      </section>

      <Footer></Footer>
      

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </div>
  );
}

/* ─────────────────────────── STYLES ─────────────────────────── */
const s: Record<string, React.CSSProperties> = {
  page: { fontFamily: "'Satoshi','Segoe UI',sans-serif", background: "#f0f9ff", overflowX: "hidden" },

  hero: {
    backgroundImage: "linear-gradient(135deg,rgba(6,12,30,0.86) 0%,rgba(10,30,60,0.80) 42%,rgba(14,165,233,0.52) 100%), url('/images/prawn.jpeg')",
    backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",
    minHeight: "100vh", position: "relative", display: "flex", alignItems: "center",
    overflow: "hidden", paddingBottom: "72px",
  },
  heroContent: { maxWidth: "1100px", margin: "0 auto", padding: "100px 48px 48px", position: "relative", zIndex: 2, width: "100%" },
  heroBadge: { display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(56,189,248,0.14)", border: "0.5px solid rgba(56,189,248,0.38)", color: "#7dd3fc", fontSize: "11px", fontWeight: 600, padding: "6px 16px", borderRadius: "20px", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "22px", animation: "floatUp 0.75s ease both", maxWidth: "100%" },
  heroBadgeDot: { width: "6px", height: "6px", borderRadius: "50%", background: "#38bdf8", boxShadow: "0 0 8px #38bdf8", display: "inline-block", flexShrink: 0 },
  heroGradient: { background: "linear-gradient(90deg,#38bdf8,#22d3ee,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" },
  heroCtas: { display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "32px" },
  btnPrimary: { background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", color: "#fff", border: "none", padding: "13px 30px", borderRadius: "40px", fontSize: "14px", fontWeight: 600, cursor: "pointer", transition: "all 0.3s ease", boxShadow: "0 4px 22px rgba(14,165,233,0.4)", letterSpacing: "0.02em" },
  btnOutline: { background: "rgba(255,255,255,0.08)", color: "#e0f2fe", border: "1px solid rgba(255,255,255,0.22)", padding: "13px 30px", borderRadius: "40px", fontSize: "14px", fontWeight: 500, cursor: "pointer", transition: "all 0.3s ease" },
  heroCards: { display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "44px" },
  heroFloatCard: { background: "rgba(255,255,255,0.09)", backdropFilter: "blur(12px)", border: "0.5px solid rgba(255,255,255,0.18)", borderRadius: "14px", padding: "13px 18px", display: "flex", alignItems: "center", gap: "12px", animation: "cardEntrance 0.7s ease both" },
  heroFloatVal:   { color: "#fff", fontSize: "17px", fontWeight: 700, fontFamily: "'Clash Display',sans-serif", lineHeight: 1.1 },
  heroFloatLabel: { color: "rgba(255,255,255,0.55)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500, marginTop: "2px" },

  statsSection: { background: "#fff" },
  statsInner:   { maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)" },
  statWrap:     { padding: "36px 28px", borderRight: "0.5px solid #e0f2fe", textAlign: "center", background: "#fff", cursor: "default", minWidth: 0 },
  statNum:      { fontFamily: "'Clash Display',sans-serif", fontSize: "46px", fontWeight: 700, color: "#0369a1", lineHeight: 1, marginBottom: "6px" },
  statLabel:    { fontSize: "11px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 },

  sectionInner: { maxWidth: "1100px", margin: "0 auto", padding: "0 48px" },
  eyebrow:      { fontSize: "11px", fontWeight: 700, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "10px" },
  bodyText:     { fontSize: "14px", color: "#475569", lineHeight: 1.8, marginTop: "14px" },

  healthSection: { background: "#f0f9ff", padding: "96px 0" },
  healthGrid:    { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center" },

  barRow:   { marginBottom: "2px" },
  barTop:   { display: "flex", justifyContent: "space-between", marginBottom: "6px" },
  barLabel: { fontSize: "13px", color: "#334155", fontWeight: 500 },
  barPct:   { fontSize: "13px", fontWeight: 700 },
  barTrack: { height: "7px", background: "#e0f2fe", borderRadius: "8px", overflow: "hidden" },
  barFill:  { height: "100%", borderRadius: "8px" },

  productsSection: { background: "#fff", padding: "96px 0" },
  productsGrid:    { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" },

  cardOuter: { perspective: "1000px", height: "355px" },
  cardInner: { position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d", transition: "transform 0.65s cubic-bezier(0.34,1.56,0.64,1)" },
  cardFace:  { position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", borderRadius: "18px", padding: "26px", border: "0.5px solid", display: "flex", flexDirection: "column" },
  cardFront: {},
  cardBack:  { transform: "rotateY(180deg)" },
  cardAccentLine: { position: "absolute", top: 0, left: "26px", right: "26px", height: "3px", borderRadius: "0 0 3px 3px" },
  cardBadge:   { alignSelf: "flex-start", fontSize: "9px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", border: "0.5px solid", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "14px" },
  cardIcon:    { fontSize: "34px", marginBottom: "10px" },
  cardName:    { fontFamily: "'Clash Display',sans-serif", fontSize: "18px", fontWeight: 700, marginBottom: "6px", lineHeight: 1.2 },
  cardTagline: { fontSize: "12px", color: "#64748b", lineHeight: 1.55, flexGrow: 1, marginBottom: "12px" },
  backIcon:        { fontSize: "26px", marginBottom: "8px" },
  backName:        { fontFamily: "'Clash Display',sans-serif", fontSize: "16px", fontWeight: 700, color: "#fff", marginBottom: "14px" },
  backSection:     { marginBottom: "12px" },
  backSubtitle:    { fontSize: "9px", color: "rgba(255,255,255,0.58)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px", fontWeight: 700 },
  backBenefit:     { display: "flex", alignItems: "flex-start", gap: "7px", marginBottom: "5px" },
  backCheck:       { color: "#fff", fontWeight: 700, fontSize: "11px", marginTop: "1px", flexShrink: 0 },
  backBenefitText: { color: "rgba(255,255,255,0.88)", fontSize: "12px", lineHeight: 1.45 },
  backUsage:       { color: "#fff", fontSize: "12px", fontWeight: 600, background: "rgba(255,255,255,0.15)", borderRadius: "8px", padding: "8px 12px" },
  backBtn:         { background: "rgba(255,255,255,0.18)", color: "#fff", border: "0.5px solid rgba(255,255,255,0.35)", padding: "8px 18px", borderRadius: "20px", fontSize: "11px", fontWeight: 500, cursor: "pointer", marginTop: "10px", transition: "background 0.2s" },

  benefitsSection: { background: "linear-gradient(140deg,#0c1a3a 0%,#0e3a6e 100%)", padding: "96px 0", position: "relative", overflow: "hidden" },
  benefitsBg:      { position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(56,189,248,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.04) 1px,transparent 1px)", backgroundSize: "56px 56px" },
  benefitsGrid:    { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px", position: "relative", zIndex: 1 },
  benefitCard:     { background: "rgba(255,255,255,0.045)", border: "0.5px solid rgba(255,255,255,0.09)", borderRadius: "18px", padding: "28px 22px", minWidth: 0 },
  benefitIconWrap: { fontSize: "26px", marginBottom: "16px" },
  benefitTitle:    { fontFamily: "'Clash Display',sans-serif", fontSize: "15px", fontWeight: 600, color: "#fff", marginBottom: "10px", lineHeight: 1.3 },
  benefitDesc:     { fontSize: "13px", color: "rgba(255,255,255,0.52)", lineHeight: 1.72 },

  usageSection: { background: "#f0f9ff", padding: "96px 0" },
  stepsGrid:    { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0", position: "relative" },
  stepCard:     { background: "#fff", border: "0.5px solid #bae6fd", borderRadius: "18px", padding: "34px 26px", position: "relative", margin: "0 10px", boxShadow: "0 4px 20px rgba(14,165,233,0.07)", transition: "all 0.3s ease", minWidth: 0 },
  stepNum:      { fontFamily: "'Clash Display',sans-serif", fontSize: "52px", fontWeight: 700, color: "#e0f2fe", lineHeight: 1, marginBottom: "14px" },
  stepTitle:    { fontFamily: "'Clash Display',sans-serif", fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: "10px" },
  stepDesc:     { fontSize: "13px", color: "#64748b", lineHeight: 1.72 },

  faqSection: { background: "#fff", padding: "96px 0", borderTop: "1px solid #e0f2fe" },

  ctaBanner: { background: "linear-gradient(140deg,#0369a1,#0ea5e9)", padding: "96px 48px", textAlign: "center", position: "relative", overflow: "hidden" },
  ctaGlow:   { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.1),transparent 68%)" },
  ctaBody:   { color: "rgba(255,255,255,0.78)", fontSize: "15px", marginTop: "14px", lineHeight: 1.7 },
};