// // // // "use client";

// // // // import { useEffect, useRef, useState, useCallback } from "react";

// // // // // ─── Types ────────────────────────────────────────────────────────────────────
// // // // interface Bubble { id: number; x: number; y: number; size: number; speed: number; opacity: number; delay: number; }
// // // // interface Product { name: string; tag: string; desc: string; icon: string; color: string; bg: string; stat: string; statLabel: string; }
// // // // interface Stat { value: number; suffix: string; label: string; icon: string; }
// // // // interface Testimonial { quote: string; name: string; role: string; company: string; initials: string; color: string; }

// // // // // ─── Data ─────────────────────────────────────────────────────────────────────
// // // // const products: Product[] = [
// // // //   { name: "AquaShield Pro", tag: "Immunity", desc: "Next-gen immunity booster that reduces disease mortality by up to 95% through targeted antibody stimulation.", icon: "🛡️", color: "#38bdf8", bg: "rgba(56,189,248,0.08)", stat: "95%", statLabel: "Mortality Reduction" },
// // // //   { name: "GillGuard Oxy", tag: "Respiratory", desc: "Clinically formulated for gill health and optimized oxygen absorption across all stocking densities.", icon: "🌊", color: "#60a5fa", bg: "rgba(96,165,250,0.08)", stat: "40%", statLabel: "Oxygen Uptake Boost" },
// // // //   { name: "ProbioMax Aqua", tag: "Probiotic", desc: "Proprietary probiotic complex improving feed conversion ratios and eliminating harmful gut pathogens.", icon: "🔬", color: "#818cf8", bg: "rgba(129,140,248,0.08)", stat: "20%", statLabel: "FCR Improvement" },
// // // //   { name: "VitaGrow Marine", tag: "Growth", desc: "Complete vitamin and mineral matrix engineered to accelerate growth cycles by up to 30%.", icon: "⚡", color: "#34d399", bg: "rgba(52,211,153,0.08)", stat: "30%", statLabel: "Faster Growth" },
// // // // ];

// // // // const stats: Stat[] = [
// // // //   { value: 500, suffix: "+", label: "Farms Served", icon: "🏭" },
// // // //   { value: 20, suffix: "+", label: "Years R&D", icon: "🔬" },
// // // //   { value: 98, suffix: "%", label: "Survival Rate", icon: "📈" },
// // // //   { value: 15, suffix: "+", label: "States Reached", icon: "🗺️" },
// // // // ];

// // // // const testimonials: Testimonial[] = [
// // // //   { quote: "After switching to AquaShield Pro, our shrimp mortality dropped from 18% to under 2%. The ROI in the first season alone covered 3 years of product cost.", name: "Ravi Kumar", role: "Farm Owner, 80 Acres", company: "Krishna Delta Aquafarms", initials: "RK", color: "#38bdf8" },
// // // //   { quote: "Innovare's technical team visited our farm, diagnosed the gill issue, and prescribed GillGuard Oxy. We saw measurable improvement within 5 days. Nothing short of remarkable.", name: "Anitha Reddy", role: "Aquaculture Consultant", company: "AP Coastal Farms Co.", initials: "AR", color: "#60a5fa" },
// // // //   { quote: "ProbioMax improved our FCR from 1.8 to 1.42 within two cycles. For a farm our size, that translates to lakhs saved every season. Genuinely life-changing.", name: "Suresh Naidu", role: "Chief Operations", company: "Godavari Marine Exports", initials: "SN", color: "#818cf8" },
// // // // ];

// // // // const navLinks = ["Products", "Health", "Environment", "Certification", "Events", "Contact"];

// // // // // ─── Hooks ────────────────────────────────────────────────────────────────────
// // // // function useInView(threshold = 0.12) {
// // // //   const ref = useRef<HTMLDivElement>(null);
// // // //   const [inView, setInView] = useState(false);
// // // //   useEffect(() => {
// // // //     const el = ref.current; if (!el) return;
// // // //     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
// // // //     obs.observe(el); return () => obs.disconnect();
// // // //   }, [threshold]);
// // // //   return { ref, inView };
// // // // }

// // // // function useCountUp(target: number, active: boolean) {
// // // //   const [n, setN] = useState(0);
// // // //   useEffect(() => {
// // // //     if (!active) return;
// // // //     let c = 0; const step = target / 70;
// // // //     const t = setInterval(() => { c += step; if (c >= target) { setN(target); clearInterval(t); } else setN(Math.floor(c)); }, 16);
// // // //     return () => clearInterval(t);
// // // //   }, [active, target]);
// // // //   return n;
// // // // }

// // // // // ─── Canvas Water Effect ───────────────────────────────────────────────────────
// // // // function WaterCanvas() {
// // // //   const canvasRef = useRef<HTMLCanvasElement>(null);
// // // //   useEffect(() => {
// // // //     const canvas = canvasRef.current; if (!canvas) return;
// // // //     const ctx = canvas.getContext("2d"); if (!ctx) return;
// // // //     let raf: number;
// // // //     const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
// // // //     resize();
// // // //     window.addEventListener("resize", resize);
// // // //     let t = 0;
// // // //     const draw = () => {
// // // //       t += 0.008;
// // // //       ctx.clearRect(0, 0, canvas.width, canvas.height);
// // // //       const W = canvas.width, H = canvas.height;
// // // //       // Draw 3 wave layers
// // // //       [[0.003, 0.4, "rgba(56,189,248,0.06)"], [0.005, 0.55, "rgba(96,165,250,0.05)"], [0.007, 0.7, "rgba(125,211,252,0.04)"]].forEach(([freq, amp, color], idx) => {
// // // //         ctx.beginPath();
// // // //         ctx.moveTo(0, H);
// // // //         for (let x = 0; x <= W; x += 4) {
// // // //           const y = H * (amp as number) + Math.sin(x * (freq as number) + t + idx) * 28 + Math.sin(x * 0.002 + t * 0.7) * 14;
// // // //           ctx.lineTo(x, y);
// // // //         }
// // // //         ctx.lineTo(W, H); ctx.lineTo(0, H);
// // // //         ctx.fillStyle = color as string; ctx.fill();
// // // //       });
// // // //       raf = requestAnimationFrame(draw);
// // // //     };
// // // //     draw();
// // // //     return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
// // // //   }, []);
// // // //   return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
// // // // }

// // // // // ─── Particle Field ────────────────────────────────────────────────────────────
// // // // function ParticleField() {
// // // //   const [bubbles, setBubbles] = useState<Bubble[]>([]);
// // // //   useEffect(() => {
// // // //     setBubbles(Array.from({ length: 22 }, (_, i) => ({
// // // //       id: i, x: Math.random() * 100, y: Math.random() * 100,
// // // //       size: 4 + Math.random() * 12, speed: 8 + Math.random() * 12,
// // // //       opacity: 0.06 + Math.random() * 0.16, delay: Math.random() * 10,
// // // //     })));
// // // //   }, []);
// // // //   return (
// // // //     <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
// // // //       {bubbles.map(b => (
// // // //         <div key={b.id} style={{
// // // //           position: "absolute", left: `${b.x}%`, bottom: `${b.y * 0.3}%`,
// // // //           width: b.size, height: b.size, borderRadius: "50%",
// // // //           background: `rgba(56,189,248,${b.opacity})`,
// // // //           border: `0.5px solid rgba(125,211,252,${b.opacity * 1.8})`,
// // // //           animation: `bubbleUp ${b.speed}s ${b.delay}s ease-in infinite`,
// // // //         }} />
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── Stat Card ─────────────────────────────────────────────────────────────────
// // // // function StatCard({ stat, active, index }: { stat: Stat; active: boolean; index: number }) {
// // // //   const n = useCountUp(stat.value, active);
// // // //   return (
// // // //     <div style={{
// // // //       textAlign: "center", padding: "36px 20px",
// // // //       borderRight: index < 3 ? "0.5px solid rgba(255,255,255,0.07)" : "none",
// // // //       opacity: active ? 1 : 0,
// // // //       animation: active ? `riseUp 0.7s ${index * 0.1}s ease both` : "none",
// // // //     }}>
// // // //       <div style={{ fontSize: "22px", marginBottom: "10px" }}>{stat.icon}</div>
// // // //       <div style={{
// // // //         fontFamily: "'Clash Display',sans-serif", fontSize: "52px", fontWeight: 700,
// // // //         lineHeight: 1, color: "#fff", marginBottom: "6px",
// // // //         background: "linear-gradient(135deg,#fff 40%,#7dd3fc)", WebkitBackgroundClip: "text",
// // // //         WebkitTextFillColor: "transparent", backgroundClip: "text",
// // // //       }}>{n}{stat.suffix}</div>
// // // //       <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 }}>{stat.label}</div>
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── Product Card ─────────────────────────────────────────────────────────────
// // // // function ProductCard({ product, index, active }: { product: Product; index: number; active: boolean }) {
// // // //   const [hov, setHov] = useState(false);
// // // //   return (
// // // //     <div
// // // //       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
// // // //       style={{
// // // //         background: hov ? product.bg : "rgba(255,255,255,0.02)",
// // // //         border: `0.5px solid ${hov ? product.color + "55" : "rgba(255,255,255,0.07)"}`,
// // // //         borderRadius: "24px", padding: "32px 28px",
// // // //         cursor: "pointer",
// // // //         transform: hov ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
// // // //         boxShadow: hov ? `0 32px 72px ${product.color}22, 0 0 0 0.5px ${product.color}33` : "none",
// // // //         transition: "all 0.4s cubic-bezier(0.34,1.4,0.64,1)",
// // // //         opacity: active ? 1 : 0,
// // // //         animation: active ? `riseUp 0.7s ${index * 0.12}s ease both` : "none",
// // // //         position: "relative", overflow: "hidden",
// // // //       }}
// // // //     >
// // // //       {/* Shimmer line on hover */}
// // // //       <div style={{
// // // //         position: "absolute", top: 0, left: 0, right: 0, height: "2px",
// // // //         background: `linear-gradient(90deg, transparent, ${product.color}, transparent)`,
// // // //         opacity: hov ? 1 : 0, transition: "opacity 0.4s ease",
// // // //       }} />
// // // //       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
// // // //         <div style={{ fontSize: "36px" }}>{product.icon}</div>
// // // //         <div style={{
// // // //           background: product.color + "18", border: `0.5px solid ${product.color}44`,
// // // //           color: product.color, fontSize: "10px", fontWeight: 700,
// // // //           padding: "4px 12px", borderRadius: "20px",
// // // //           textTransform: "uppercase", letterSpacing: "0.1em",
// // // //         }}>{product.tag}</div>
// // // //       </div>
// // // //       <h3 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "20px", fontWeight: 700, color: "#f0f9ff", marginBottom: "10px" }}>{product.name}</h3>
// // // //       <p style={{ fontSize: "13px", color: "rgba(240,249,255,0.5)", lineHeight: 1.7, marginBottom: "20px" }}>{product.desc}</p>
// // // //       <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
// // // //         <span style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "32px", fontWeight: 700, color: product.color }}>{product.stat}</span>
// // // //         <span style={{ fontSize: "11px", color: "rgba(240,249,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{product.statLabel}</span>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── Testimonial Card ──────────────────────────────────────────────────────────
// // // // function TestimonialCard({ t, index, active }: { t: Testimonial; index: number; active: boolean }) {
// // // //   const [hov, setHov] = useState(false);
// // // //   return (
// // // //     <div
// // // //       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
// // // //       style={{
// // // //         background: hov ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
// // // //         border: `0.5px solid ${hov ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.07)"}`,
// // // //         borderRadius: "24px", padding: "32px 28px",
// // // //         transform: hov ? "translateY(-6px)" : "translateY(0)",
// // // //         boxShadow: hov ? "0 24px 60px rgba(0,0,0,0.3)" : "none",
// // // //         transition: "all 0.35s ease",
// // // //         opacity: active ? 1 : 0,
// // // //         animation: active ? `riseUp 0.7s ${index * 0.15}s ease both` : "none",
// // // //         display: "flex", flexDirection: "column", gap: "20px",
// // // //       }}
// // // //     >
// // // //       {/* Quote mark */}
// // // //       <div style={{ fontFamily: "Georgia,serif", fontSize: "64px", lineHeight: 0.8, color: t.color, opacity: 0.4, marginBottom: "4px" }}>"</div>
// // // //       <p style={{ fontSize: "14px", color: "rgba(240,249,255,0.72)", lineHeight: 1.8, fontStyle: "italic", flex: 1 }}>{t.quote}</p>
// // // //       <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "16px", borderTop: "0.5px solid rgba(255,255,255,0.07)" }}>
// // // //         <div style={{
// // // //           width: "44px", height: "44px", borderRadius: "50%", flexShrink: 0,
// // // //           background: `linear-gradient(135deg, ${t.color}44, ${t.color}22)`,
// // // //           border: `1.5px solid ${t.color}66`,
// // // //           display: "flex", alignItems: "center", justifyContent: "center",
// // // //           fontFamily: "'Clash Display',sans-serif", fontSize: "14px", fontWeight: 700, color: t.color,
// // // //         }}>{t.initials}</div>
// // // //         <div>
// // // //           <div style={{ fontSize: "14px", fontWeight: 600, color: "#f0f9ff" }}>{t.name}</div>
// // // //           <div style={{ fontSize: "11px", color: "rgba(240,249,255,0.4)", marginTop: "2px" }}>{t.role} · {t.company}</div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── Main Page ─────────────────────────────────────────────────────────────────
// // // // export default function HomePage() {
// // // //   const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
// // // //   const [scrollY, setScrollY] = useState(0);
// // // //   const [navScrolled, setNavScrolled] = useState(false);
// // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // //   const [activeWord, setActiveWord] = useState(0);

// // // //   const heroSection   = useRef<HTMLElement>(null);
// // // //   const statsSection  = useInView(0.3);
// // // //   const productsSection = useInView(0.05);
// // // //   const missionSection  = useInView(0.2);
// // // //   const testimonialsSection = useInView(0.1);
// // // //   const ctaSection    = useInView(0.3);

// // // //   const rotatingWords = ["Healthier.", "Stronger.", "Smarter.", "Greener."];

// // // //   useEffect(() => {
// // // //     const interval = setInterval(() => setActiveWord(w => (w + 1) % rotatingWords.length), 2200);
// // // //     return () => clearInterval(interval);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => { setScrollY(window.scrollY); setNavScrolled(window.scrollY > 60); };
// // // //     const handleMouse = (e: MouseEvent) => setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
// // // //     window.addEventListener("scroll", handleScroll, { passive: true });
// // // //     window.addEventListener("mousemove", handleMouse);
// // // //     return () => { window.removeEventListener("scroll", handleScroll); window.removeEventListener("mousemove", handleMouse); };
// // // //   }, []);

// // // //   return (
// // // //     <div style={{ fontFamily: "'Satoshi','Segoe UI',sans-serif", background: "#030d1a", color: "#f0f9ff", overflowX: "hidden" }}>
// // // //       <style>{`
// // // //         @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Satoshi:wght@300;400;500;700&display=swap');
// // // //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// // // //         :root {
// // // //           --blue-900: #0c1a3a;
// // // //           --blue-800: #0e3a6e;
// // // //           --blue-600: #0369a1;
// // // //           --blue-500: #0ea5e9;
// // // //           --blue-400: #38bdf8;
// // // //           --blue-300: #7dd3fc;
// // // //           --blue-200: #bae6fd;
// // // //           --blue-50:  #f0f9ff;
// // // //         }

// // // //         html { scroll-behavior: smooth; }

// // // //         @keyframes bubbleUp {
// // // //           0%   { transform: translateY(0) scale(1); opacity: 0; }
// // // //           8%   { opacity: 1; }
// // // //           92%  { opacity: 0.7; }
// // // //           100% { transform: translateY(-100vh) scale(0.4); opacity: 0; }
// // // //         }
// // // //         @keyframes riseUp {
// // // //           from { opacity: 0; transform: translateY(44px); }
// // // //           to   { opacity: 1; transform: translateY(0); }
// // // //         }
// // // //         @keyframes fadeIn {
// // // //           from { opacity: 0; } to { opacity: 1; }
// // // //         }
// // // //         @keyframes floatY {
// // // //           0%,100% { transform: translateY(0); }
// // // //           50%      { transform: translateY(-18px); }
// // // //         }
// // // //         @keyframes rotateSlow {
// // // //           from { transform: rotate(0deg); }
// // // //           to   { transform: rotate(360deg); }
// // // //         }
// // // //         @keyframes rotateSlowReverse {
// // // //           from { transform: rotate(0deg); }
// // // //           to   { transform: rotate(-360deg); }
// // // //         }
// // // //         @keyframes pulseDot {
// // // //           0%,100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(56,189,248,0.5); }
// // // //           50%      { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(56,189,248,0); }
// // // //         }
// // // //         @keyframes shimmerText {
// // // //           0%   { background-position: -300% center; }
// // // //           100% { background-position: 300% center; }
// // // //         }
// // // //         @keyframes wordSwap {
// // // //           0%   { opacity: 0; transform: translateY(16px); }
// // // //           15%  { opacity: 1; transform: translateY(0); }
// // // //           85%  { opacity: 1; transform: translateY(0); }
// // // //           100% { opacity: 0; transform: translateY(-16px); }
// // // //         }
// // // //         @keyframes drawLine {
// // // //           from { stroke-dashoffset: 1000; }
// // // //           to   { stroke-dashoffset: 0; }
// // // //         }
// // // //         @keyframes countPop {
// // // //           0%   { transform: scale(0.8); opacity: 0; }
// // // //           60%  { transform: scale(1.05); }
// // // //           100% { transform: scale(1); opacity: 1; }
// // // //         }
// // // //         @keyframes borderGlow {
// // // //           0%,100% { border-color: rgba(56,189,248,0.2); }
// // // //           50%      { border-color: rgba(56,189,248,0.5); }
// // // //         }
// // // //         @keyframes scanLine {
// // // //           0%   { top: 0; opacity: 0.6; }
// // // //           100% { top: 100%; opacity: 0; }
// // // //         }

// // // //         .nav-pill { transition: all 0.25s ease; }
// // // //         .nav-pill:hover { color: #38bdf8 !important; }

// // // //         .hero-cta-primary {
// // // //           background: linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%);
// // // //           color: #fff; border: none;
// // // //           padding: 16px 40px; border-radius: 50px;
// // // //           font-size: 15px; font-weight: 700;
// // // //           cursor: pointer; font-family: 'Satoshi', sans-serif;
// // // //           letter-spacing: 0.02em;
// // // //           box-shadow: 0 8px 32px rgba(14,165,233,0.45), 0 0 0 1px rgba(56,189,248,0.2);
// // // //           transition: all 0.35s cubic-bezier(0.34,1.4,0.64,1);
// // // //           position: relative; overflow: hidden;
// // // //         }
// // // //         .hero-cta-primary::after {
// // // //           content: '';
// // // //           position: absolute; inset: 0;
// // // //           background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
// // // //           border-radius: 50px;
// // // //         }
// // // //         .hero-cta-primary:hover {
// // // //           transform: translateY(-4px) scale(1.04);
// // // //           box-shadow: 0 20px 56px rgba(14,165,233,0.6), 0 0 0 1px rgba(56,189,248,0.4);
// // // //         }
// // // //         .hero-cta-secondary {
// // // //           background: rgba(255,255,255,0.05);
// // // //           color: #bae6fd;
// // // //           border: 1px solid rgba(255,255,255,0.15);
// // // //           padding: 16px 40px; border-radius: 50px;
// // // //           font-size: 15px; font-weight: 500;
// // // //           cursor: pointer; font-family: 'Satoshi', sans-serif;
// // // //           transition: all 0.3s ease;
// // // //           backdrop-filter: blur(8px);
// // // //         }
// // // //         .hero-cta-secondary:hover {
// // // //           background: rgba(56,189,248,0.1);
// // // //           border-color: rgba(56,189,248,0.45);
// // // //           transform: translateY(-3px);
// // // //         }
// // // //         .section-cta {
// // // //           background: linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%);
// // // //           color: #fff; border: none;
// // // //           padding: 15px 36px; border-radius: 50px;
// // // //           font-size: 14px; font-weight: 700;
// // // //           cursor: pointer; font-family: 'Satoshi', sans-serif;
// // // //           box-shadow: 0 6px 28px rgba(14,165,233,0.4);
// // // //           transition: all 0.3s ease;
// // // //         }
// // // //         .section-cta:hover { transform: translateY(-3px); box-shadow: 0 14px 44px rgba(14,165,233,0.55); }

// // // //         .section-cta-outline {
// // // //           background: transparent;
// // // //           color: #38bdf8;
// // // //           border: 1px solid rgba(56,189,248,0.35);
// // // //           padding: 15px 36px; border-radius: 50px;
// // // //           font-size: 14px; font-weight: 500;
// // // //           cursor: pointer; font-family: 'Satoshi', sans-serif;
// // // //           transition: all 0.3s ease;
// // // //         }
// // // //         .section-cta-outline:hover { background: rgba(56,189,248,0.08); border-color: rgba(56,189,248,0.6); transform: translateY(-2px); }

// // // //         .feature-tile:hover { border-color: rgba(56,189,248,0.3) !important; transform: translateY(-4px) !important; }
// // // //         .cert-badge:hover { transform: scale(1.05) !important; border-color: rgba(56,189,248,0.5) !important; }

// // // //         .word-rotate {
// // // //           display: inline-block;
// // // //           animation: wordSwap 2.2s ease infinite;
// // // //           background: linear-gradient(90deg, #38bdf8, #7dd3fc, #bae6fd, #38bdf8);
// // // //           background-size: 200% auto;
// // // //           -webkit-background-clip: text;
// // // //           -webkit-text-fill-color: transparent;
// // // //           background-clip: text;
// // // //           animation: wordSwap 2.2s ease infinite, shimmerText 3s linear infinite;
// // // //         }
// // // //       `}</style>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           NAV
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <nav style={{
// // // //         position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
// // // //         padding: navScrolled ? "14px 52px" : "22px 52px",
// // // //         display: "flex", alignItems: "center", justifyContent: "space-between",
// // // //         background: navScrolled ? "rgba(3,13,26,0.92)" : "transparent",
// // // //         backdropFilter: navScrolled ? "blur(20px)" : "none",
// // // //         borderBottom: navScrolled ? "0.5px solid rgba(56,189,248,0.12)" : "none",
// // // //         transition: "all 0.4s ease",
// // // //       }}>
// // // //         {/* Logo */}
// // // //         <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// // // //           <div style={{
// // // //             width: "40px", height: "40px", borderRadius: "12px",
// // // //             background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)",
// // // //             display: "flex", alignItems: "center", justifyContent: "center",
// // // //             fontSize: "18px", boxShadow: "0 4px 16px rgba(14,165,233,0.4)",
// // // //           }}>🌊</div>
// // // //           <div>
// // // //             <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "16px", fontWeight: 700, color: "#f0f9ff", lineHeight: 1 }}>
// // // //               Innovare Biopharma
// // // //             </div>
// // // //             <div style={{ fontSize: "9px", color: "rgba(240,249,255,0.35)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "2px" }}>
// // // //               LLP · GMP Certified
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Links */}
// // // //         <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
// // // //           {navLinks.map((l, i) => (
// // // //             <a key={i} href="#" className="nav-pill" style={{
// // // //               color: "rgba(240,249,255,0.55)", fontSize: "13px",
// // // //               textDecoration: "none", fontWeight: 400, letterSpacing: "0.01em",
// // // //             }}>{l}</a>
// // // //           ))}
// // // //         </div>

// // // //         {/* CTA */}
// // // //         <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
// // // //           <button style={{
// // // //             background: "rgba(56,189,248,0.1)", border: "0.5px solid rgba(56,189,248,0.3)",
// // // //             color: "#7dd3fc", fontSize: "12px", fontWeight: 500,
// // // //             padding: "8px 20px", borderRadius: "24px", cursor: "pointer",
// // // //             fontFamily: "'Satoshi',sans-serif", transition: "all 0.2s",
// // // //           }}>Download Catalog</button>
// // // //           <button className="section-cta" style={{ padding: "9px 22px", fontSize: "13px" }}>
// // // //             Get in Touch
// // // //           </button>
// // // //         </div>
// // // //       </nav>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           HERO
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <section ref={heroSection as React.RefObject<HTMLElement>} style={{
// // // //         minHeight: "100vh",
// // // //         background: "linear-gradient(160deg, #030d1a 0%, #0a1628 30%, #0c2040 60%, #0e3a6e 100%)",
// // // //         position: "relative", overflow: "hidden",
// // // //         display: "flex", flexDirection: "column",
// // // //       }}>
// // // //         <ParticleField />
// // // //         <WaterCanvas />

// // // //         {/* Grid texture */}
// // // //         <div style={{
// // // //           position: "absolute", inset: 0, pointerEvents: "none",
// // // //           backgroundImage: "linear-gradient(rgba(56,189,248,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.04) 1px,transparent 1px)",
// // // //           backgroundSize: "80px 80px",
// // // //         }} />

// // // //         {/* Radial glow meshes */}
// // // //         <div style={{
// // // //           position: "absolute", inset: 0, pointerEvents: "none",
// // // //           background: `
// // // //             radial-gradient(ellipse 80% 60% at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(56,189,248,0.07) 0%, transparent 55%),
// // // //             radial-gradient(ellipse 50% 40% at 80% 20%, rgba(29,78,216,0.12) 0%, transparent 60%),
// // // //             radial-gradient(ellipse 40% 30% at 20% 80%, rgba(14,165,233,0.08) 0%, transparent 50%)
// // // //           `,
// // // //           transition: "background 0.1s",
// // // //         }} />

// // // //         {/* SVG decorative orbit rings */}
// // // //         <svg style={{ position: "absolute", right: "-80px", top: "50%", transform: "translateY(-50%)", width: "700px", height: "700px", opacity: 0.12, pointerEvents: "none" }} viewBox="0 0 700 700">
// // // //           <circle cx="350" cy="350" r="200" fill="none" stroke="url(#ringGrad)" strokeWidth="0.8" strokeDasharray="8 4" style={{ animation: "rotateSlow 25s linear infinite", transformOrigin: "350px 350px" }} />
// // // //           <circle cx="350" cy="350" r="280" fill="none" stroke="url(#ringGrad)" strokeWidth="0.5" strokeDasharray="4 8" style={{ animation: "rotateSlowReverse 35s linear infinite", transformOrigin: "350px 350px" }} />
// // // //           <circle cx="350" cy="350" r="320" fill="none" stroke="url(#ringGrad)" strokeWidth="0.3" />
// // // //           <circle cx="350" cy="350" r="120" fill="none" stroke="#38bdf8" strokeWidth="0.5" style={{ animation: "rotateSlow 15s linear infinite", transformOrigin: "350px 350px" }} />
// // // //           {/* Orbit dots */}
// // // //           {[0, 72, 144, 216, 288].map((deg, i) => {
// // // //             const rad = (deg - 90) * Math.PI / 180;
// // // //             return <circle key={i} cx={350 + 200 * Math.cos(rad)} cy={350 + 200 * Math.sin(rad)} r="5" fill="#38bdf8" opacity="0.6" />;
// // // //           })}
// // // //           <defs>
// // // //             <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
// // // //               <stop offset="0%" stopColor="#38bdf8" />
// // // //               <stop offset="100%" stopColor="#1d4ed8" />
// // // //             </linearGradient>
// // // //           </defs>
// // // //         </svg>

// // // //         {/* Hero content */}
// // // //         <div style={{
// // // //           flex: 1, display: "flex", alignItems: "center",
// // // //           maxWidth: "1200px", margin: "0 auto", padding: "120px 52px 80px",
// // // //           position: "relative", zIndex: 2, width: "100%",
// // // //         }}>
// // // //           <div style={{ maxWidth: "720px" }}>
// // // //             {/* Top badge */}
// // // //             <div style={{
// // // //               display: "inline-flex", alignItems: "center", gap: "10px",
// // // //               background: "rgba(56,189,248,0.08)",
// // // //               border: "0.5px solid rgba(56,189,248,0.25)",
// // // //               color: "#7dd3fc", fontSize: "11px", fontWeight: 600,
// // // //               padding: "8px 20px", borderRadius: "30px",
// // // //               letterSpacing: "0.1em", textTransform: "uppercase",
// // // //               marginBottom: "32px",
// // // //               animation: "riseUp 0.8s ease both",
// // // //             }}>
// // // //               <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#38bdf8", animation: "pulseDot 2s ease-in-out infinite", flexShrink: 0 }} />
// // // //               India's Leading Aquaculture Health Solutions
// // // //               <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#38bdf8", animation: "pulseDot 2s 0.5s ease-in-out infinite", flexShrink: 0 }} />
// // // //             </div>

// // // //             {/* Headline */}
// // // //             <h1 style={{
// // // //               fontFamily: "'Clash Display',sans-serif",
// // // //               fontSize: "clamp(48px, 6.5vw, 96px)",
// // // //               fontWeight: 700, lineHeight: 1.0,
// // // //               color: "#f0f9ff", marginBottom: "8px",
// // // //             }}>
// // // //               <span style={{ display: "block", animation: "riseUp 0.9s 0.1s ease both" }}>Making Aquaculture</span>
// // // //               <span style={{ display: "block", animation: "riseUp 0.9s 0.2s ease both", height: "1.1em", overflow: "hidden" }}>
// // // //                 <span className="word-rotate" key={activeWord} style={{ animation: "wordSwap 2.2s ease both, shimmerText 3s linear infinite" }}>
// // // //                   {rotatingWords[activeWord]}
// // // //                 </span>
// // // //               </span>
// // // //             </h1>

// // // //             <p style={{
// // // //               fontSize: "18px", color: "rgba(240,249,255,0.58)",
// // // //               lineHeight: 1.85, maxWidth: "560px",
// // // //               marginBottom: "44px", marginTop: "20px",
// // // //               animation: "riseUp 0.9s 0.45s ease both",
// // // //             }}>
// // // //               Innovare Biopharma LLP delivers <strong style={{ color: "#bae6fd", fontWeight: 600 }}>GMP-certified</strong> aquaculture health products — immunity boosters, probiotics, growth accelerators, and water quality solutions trusted by <strong style={{ color: "#bae6fd", fontWeight: 600 }}>500+ farms</strong> across India.
// // // //             </p>

// // // //             {/* CTAs */}
// // // //             <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", animation: "riseUp 0.9s 0.6s ease both" }}>
// // // //               <button className="hero-cta-primary">Explore Products</button>
// // // //               <button className="hero-cta-secondary">Watch Story →</button>
// // // //             </div>

// // // //             {/* Trust indicators */}
// // // //             <div style={{
// // // //               display: "flex", gap: "24px", marginTop: "52px", flexWrap: "wrap",
// // // //               animation: "riseUp 0.9s 0.75s ease both",
// // // //             }}>
// // // //               {[
// // // //                 { icon: "✓", label: "GMP Certified" },
// // // //                 { icon: "✓", label: "ISO 9001:2015" },
// // // //                 { icon: "✓", label: "Zero Toxicity" },
// // // //                 { icon: "✓", label: "Vet Approved" },
// // // //               ].map((tr, i) => (
// // // //                 <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
// // // //                   <span style={{
// // // //                     width: "18px", height: "18px", borderRadius: "50%",
// // // //                     background: "rgba(56,189,248,0.15)", border: "0.5px solid rgba(56,189,248,0.4)",
// // // //                     display: "flex", alignItems: "center", justifyContent: "center",
// // // //                     fontSize: "10px", color: "#38bdf8", fontWeight: 700, flexShrink: 0,
// // // //                   }}>{tr.icon}</span>
// // // //                   <span style={{ fontSize: "12px", color: "rgba(240,249,255,0.5)", fontWeight: 500 }}>{tr.label}</span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* Right side — floating product showcase */}
// // // //           <div style={{
// // // //             position: "absolute", right: "52px", top: "50%",
// // // //             transform: `translateY(calc(-50% + ${scrollY * 0.08}px))`,
// // // //             display: "flex", flexDirection: "column", gap: "14px",
// // // //             animation: "riseUp 1s 0.5s ease both",
// // // //           }}>
// // // //             {[
// // // //               { icon: "🛡️", name: "AquaShield Pro", stat: "95%", label: "Immunity boost", color: "#38bdf8", delay: "0s" },
// // // //               { icon: "🌊", name: "GillGuard Oxy", stat: "40%", label: "O₂ absorption", color: "#60a5fa", delay: "0.15s" },
// // // //               { icon: "⚡", name: "VitaGrow Marine", stat: "30%", label: "Faster growth", color: "#34d399", delay: "0.3s" },
// // // //             ].map((item, i) => (
// // // //               <div key={i} style={{
// // // //                 background: "rgba(12,26,58,0.7)", backdropFilter: "blur(16px)",
// // // //                 border: `0.5px solid ${item.color}33`,
// // // //                 borderRadius: "18px", padding: "16px 20px",
// // // //                 display: "flex", alignItems: "center", gap: "14px",
// // // //                 width: "260px",
// // // //                 animation: `riseUp 0.8s ${item.delay} ease both, floatY ${4 + i * 0.6}s ${i * 0.8}s ease-in-out infinite`,
// // // //                 boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 0 0.5px ${item.color}22`,
// // // //               }}>
// // // //                 <div style={{
// // // //                   width: "44px", height: "44px", borderRadius: "12px",
// // // //                   background: `${item.color}18`, border: `0.5px solid ${item.color}44`,
// // // //                   display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0,
// // // //                 }}>{item.icon}</div>
// // // //                 <div style={{ flex: 1 }}>
// // // //                   <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "13px", fontWeight: 600, color: "#f0f9ff" }}>{item.name}</div>
// // // //                   <div style={{ fontSize: "11px", color: "rgba(240,249,255,0.4)", marginTop: "1px" }}>{item.label}</div>
// // // //                 </div>
// // // //                 <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "22px", fontWeight: 700, color: item.color }}>{item.stat}</div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* Scroll indicator */}
// // // //         <div style={{
// // // //           position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
// // // //           display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
// // // //           animation: "riseUp 1s 1.2s ease both",
// // // //           zIndex: 2,
// // // //         }}>
// // // //           <span style={{ fontSize: "10px", color: "rgba(240,249,255,0.3)", textTransform: "uppercase", letterSpacing: "0.2em" }}>Scroll to explore</span>
// // // //           <div style={{
// // // //             width: "24px", height: "40px", border: "1px solid rgba(56,189,248,0.25)",
// // // //             borderRadius: "12px", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "6px",
// // // //           }}>
// // // //             <div style={{
// // // //               width: "4px", height: "8px", borderRadius: "2px", background: "#38bdf8",
// // // //               animation: "floatY 1.8s ease-in-out infinite",
// // // //             }} />
// // // //           </div>
// // // //         </div>

// // // //         {/* Wave */}
// // // //         <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
// // // //           <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ width: "100%", height: "90px", display: "block" }}>
// // // //             <path d="M0,45 C240,90 480,10 720,45 C960,80 1200,15 1440,45 L1440,90 L0,90 Z" fill="#030d1a" />
// // // //           </svg>
// // // //         </div>
// // // //       </section>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           STATS STRIP
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <section style={{
// // // //         background: "linear-gradient(135deg, #060f1e 0%, #0a1a36 100%)",
// // // //         borderTop: "0.5px solid rgba(56,189,248,0.1)",
// // // //         borderBottom: "0.5px solid rgba(56,189,248,0.08)",
// // // //       }} ref={statsSection.ref}>
// // // //         <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
// // // //           {stats.map((st, i) => <StatCard key={i} stat={st} active={statsSection.inView} index={i} />)}
// // // //         </div>
// // // //       </section>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           MARQUEE TRUST STRIP
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <div style={{ background: "#030d1a", padding: "18px 0", overflow: "hidden", borderBottom: "0.5px solid rgba(56,189,248,0.06)" }}>
// // // //         <div style={{
// // // //           display: "flex", gap: "48px",
// // // //           animation: "none",
// // // //           whiteSpace: "nowrap",
// // // //         }}>
// // // //           {[...Array(2)].map((_, repeat) => (
// // // //             <div key={repeat} style={{ display: "flex", gap: "48px", flexShrink: 0 }}>
// // // //               {["GMP Certified", "ISO 9001:2015", "ISO 14001", "Zero Toxicity", "Bureau Veritas Audited", "GSSI Aligned", "Vet Approved", "ZLD Facility", "500+ Farms"].map((item, i) => (
// // // //                 <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
// // // //                   <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#38bdf8", opacity: 0.5 }} />
// // // //                   <span style={{ fontSize: "12px", color: "rgba(240,249,255,0.3)", fontWeight: 500, letterSpacing: "0.05em" }}>{item}</span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           ABOUT / MISSION
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <section style={{ background: "#030d1a", padding: "120px 0" }} ref={missionSection.ref}>
// // // //         <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 52px" }}>
// // // //           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }}>
// // // //             {/* Left — visual */}
// // // //             <div style={{
// // // //               position: "relative",
// // // //               opacity: missionSection.inView ? 1 : 0,
// // // //               animation: missionSection.inView ? "riseUp 0.9s ease both" : "none",
// // // //             }}>
// // // //               {/* Main visual card */}
// // // //               <div style={{
// // // //                 background: "linear-gradient(135deg, #0c1a3a, #0e3a6e)",
// // // //                 border: "0.5px solid rgba(56,189,248,0.15)",
// // // //                 borderRadius: "28px", padding: "48px",
// // // //                 position: "relative", overflow: "hidden",
// // // //                 boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
// // // //               }}>
// // // //                 {/* Scan line effect */}
// // // //                 <div style={{
// // // //                   position: "absolute", left: 0, right: 0, height: "1px",
// // // //                   background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent)",
// // // //                   animation: "scanLine 3s linear infinite",
// // // //                   pointerEvents: "none",
// // // //                 }} />

// // // //                 {/* Content */}
// // // //                 <div style={{ textAlign: "center", marginBottom: "32px" }}>
// // // //                   <div style={{
// // // //                     width: "88px", height: "88px", borderRadius: "50%", margin: "0 auto 16px",
// // // //                     background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)",
// // // //                     display: "flex", alignItems: "center", justifyContent: "center",
// // // //                     fontSize: "36px", boxShadow: "0 0 48px rgba(14,165,233,0.5)",
// // // //                     animation: "pulseDot 3s ease-in-out infinite",
// // // //                   }}>🔬</div>
// // // //                   <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>20+ Years of R&D</div>
// // // //                   <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>Science-backed aquaculture solutions</div>
// // // //                 </div>

// // // //                 {/* Feature grid */}
// // // //                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
// // // //                   {[
// // // //                     { icon: "🧬", label: "Proprietary Formulas" },
// // // //                     { icon: "🌊", label: "Species-Specific" },
// // // //                     { icon: "♻️", label: "Eco-Certified" },
// // // //                     { icon: "📊", label: "Data-Driven Results" },
// // // //                   ].map((f, i) => (
// // // //                     <div key={i} className="feature-tile" style={{
// // // //                       background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.07)",
// // // //                       borderRadius: "14px", padding: "14px",
// // // //                       display: "flex", alignItems: "center", gap: "8px",
// // // //                       transition: "all 0.3s ease", cursor: "default",
// // // //                     }}>
// // // //                       <span style={{ fontSize: "18px" }}>{f.icon}</span>
// // // //                       <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{f.label}</span>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>

// // // //                 {/* Decorative ring */}
// // // //                 <div style={{
// // // //                   position: "absolute", top: "-60px", right: "-60px",
// // // //                   width: "200px", height: "200px", borderRadius: "50%",
// // // //                   border: "0.5px solid rgba(56,189,248,0.12)",
// // // //                   pointerEvents: "none",
// // // //                 }} />
// // // //               </div>

// // // //               {/* Floating accent cards */}
// // // //               <div style={{
// // // //                 position: "absolute", bottom: "-24px", right: "-24px",
// // // //                 background: "rgba(12,26,58,0.9)", backdropFilter: "blur(12px)",
// // // //                 border: "0.5px solid rgba(56,189,248,0.2)",
// // // //                 borderRadius: "16px", padding: "16px 20px",
// // // //                 animation: "floatY 4s ease-in-out infinite",
// // // //                 boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
// // // //               }}>
// // // //                 <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "28px", fontWeight: 700, color: "#38bdf8" }}>500+</div>
// // // //                 <div style={{ fontSize: "11px", color: "rgba(240,249,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Partner Farms</div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Right — text */}
// // // //             <div style={{
// // // //               opacity: missionSection.inView ? 1 : 0,
// // // //               animation: missionSection.inView ? "riseUp 0.9s 0.2s ease both" : "none",
// // // //             }}>
// // // //               <div style={{ fontSize: "11px", fontWeight: 600, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "16px" }}>
// // // //                 Who We Are
// // // //               </div>
// // // //               <h2 style={{
// // // //                 fontFamily: "'Clash Display',sans-serif",
// // // //                 fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 700,
// // // //                 color: "#f0f9ff", lineHeight: 1.05, marginBottom: "24px",
// // // //               }}>
// // // //                 Pioneering Aquatic<br />
// // // //                 <span style={{
// // // //                   background: "linear-gradient(90deg,#38bdf8,#7dd3fc)",
// // // //                   WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
// // // //                 }}>Animal Health</span>
// // // //               </h2>

// // // //               <p style={{ fontSize: "15px", color: "rgba(240,249,255,0.55)", lineHeight: 1.9, marginBottom: "20px" }}>
// // // //                 Founded with a mission to transform aquaculture health management in India, Innovare Biopharma LLP has spent over two decades developing precision-formulated solutions for shrimp, fish, and other aquatic species.
// // // //               </p>
// // // //               <p style={{ fontSize: "15px", color: "rgba(240,249,255,0.55)", lineHeight: 1.9, marginBottom: "36px" }}>
// // // //                 Every product in our portfolio is the result of rigorous scientific research, real-world farm trials, and a deep commitment to both animal health and environmental sustainability.
// // // //               </p>

// // // //               {/* Pillars */}
// // // //               <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
// // // //                 {[
// // // //                   { title: "GMP-Certified Manufacturing", desc: "All products manufactured under strict Good Manufacturing Practice standards.", color: "#38bdf8" },
// // // //                   { title: "Species-Specific Formulation", desc: "Tailored solutions for shrimp, finfish, crab, and other aquatic species.", color: "#60a5fa" },
// // // //                   { title: "Zero Environmental Harm", desc: "Eco-safe formulations with zero toxic residues in water or sediment.", color: "#34d399" },
// // // //                 ].map((p, i) => (
// // // //                   <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
// // // //                     <div style={{
// // // //                       width: "24px", height: "24px", borderRadius: "6px", flexShrink: 0, marginTop: "1px",
// // // //                       background: `${p.color}18`, border: `0.5px solid ${p.color}44`,
// // // //                       display: "flex", alignItems: "center", justifyContent: "center",
// // // //                       color: p.color, fontSize: "12px", fontWeight: 700,
// // // //                     }}>✓</div>
// // // //                     <div>
// // // //                       <div style={{ fontSize: "14px", fontWeight: 600, color: "#f0f9ff", marginBottom: "3px" }}>{p.title}</div>
// // // //                       <div style={{ fontSize: "13px", color: "rgba(240,249,255,0.45)", lineHeight: 1.6 }}>{p.desc}</div>
// // // //                     </div>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>

// // // //               <div style={{ display: "flex", gap: "12px" }}>
// // // //                 <button className="section-cta">Our Story</button>
// // // //                 <button className="section-cta-outline">Download Brochure</button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           PRODUCTS
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <section style={{ background: "linear-gradient(160deg, #060f1e 0%, #0a1a36 100%)", padding: "120px 0" }} ref={productsSection.ref}>
// // // //         <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 52px" }}>
// // // //           <div style={{
// // // //             display: "flex", justifyContent: "space-between", alignItems: "flex-end",
// // // //             marginBottom: "56px", flexWrap: "wrap", gap: "24px",
// // // //           }}>
// // // //             <div style={{ opacity: productsSection.inView ? 1 : 0, animation: productsSection.inView ? "riseUp 0.7s ease both" : "none" }}>
// // // //               <div style={{ fontSize: "11px", fontWeight: 600, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "14px" }}>
// // // //                 Product Suite
// // // //               </div>
// // // //               <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(30px,4vw,52px)", fontWeight: 700, color: "#f0f9ff", lineHeight: 1.1 }}>
// // // //                 Complete Health<br />
// // // //                 <span style={{ background: "linear-gradient(90deg,#38bdf8,#7dd3fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
// // // //                   Product Suite
// // // //                 </span>
// // // //               </h2>
// // // //             </div>
// // // //             <div style={{ opacity: productsSection.inView ? 1 : 0, animation: productsSection.inView ? "riseUp 0.7s 0.15s ease both" : "none" }}>
// // // //               <button className="section-cta-outline">View All Products →</button>
// // // //             </div>
// // // //           </div>

// // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "18px" }}>
// // // //             {products.map((p, i) => <ProductCard key={i} product={p} index={i} active={productsSection.inView} />)}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           VISUAL FEATURE SECTION
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <section style={{ background: "#030d1a", padding: "120px 0", position: "relative", overflow: "hidden" }}>
// // // //         {/* Diagonal background stripe */}
// // // //         <div style={{
// // // //           position: "absolute", inset: 0, pointerEvents: "none",
// // // //           background: "linear-gradient(160deg, rgba(29,78,216,0.04) 0%, transparent 50%, rgba(14,165,233,0.04) 100%)",
// // // //         }} />

// // // //         <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 52px" }}>
// // // //           <div style={{ textAlign: "center", marginBottom: "72px" }}>
// // // //             <div style={{ fontSize: "11px", fontWeight: 600, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "14px" }}>
// // // //               Why Choose Innovare
// // // //             </div>
// // // //             <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(30px,4vw,52px)", fontWeight: 700, color: "#f0f9ff", lineHeight: 1.1 }}>
// // // //               The Science Behind<br />
// // // //               <span style={{ background: "linear-gradient(90deg,#38bdf8,#7dd3fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
// // // //                 Every Drop
// // // //               </span>
// // // //             </h2>
// // // //           </div>

// // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
// // // //             {[
// // // //               { icon: "🔬", title: "20+ Years R&D", desc: "Two decades of dedicated aquaculture research, collaborating with marine biologists, veterinary scientists, and farm ecologists.", metric: "20+", metricLabel: "Years", color: "#38bdf8" },
// // // //               { icon: "🌿", title: "Eco-Safe Formulas", desc: "Every ingredient is evaluated for ecotoxicity. Zero residues in water, sediment, or food chain. Certified eco-safe by Bureau Veritas.", metric: "0", metricLabel: "Eco Residues", color: "#34d399" },
// // // //               { icon: "📈", title: "Measurable ROI", desc: "Farms using our full product suite report 25–40% yield improvement and significant reduction in disease-related losses within one season.", metric: "40%", metricLabel: "Yield Boost", color: "#60a5fa" },
// // // //               { icon: "🤝", title: "Farm-First Support", desc: "Dedicated technical consultants visit your farm, assess conditions, and customize product protocols for your specific species and setup.", metric: "500+", metricLabel: "Farms Helped", color: "#818cf8" },
// // // //               { icon: "🏆", title: "GMP Certified", desc: "Our manufacturing facility holds GMP certification and is regularly audited by OCV Certification Inc. for compliance and quality.", metric: "A+", metricLabel: "Audit Grade", color: "#f59e0b" },
// // // //               { icon: "🌊", title: "Species-Specific", desc: "Formulations tailored for shrimp (L. vannamei, P. monodon), finfish (tilapia, catla, rohu), crabs, and other aquatic species.", metric: "10+", metricLabel: "Species", color: "#38bdf8" },
// // // //             ].map((item, i) => (
// // // //               <div key={i} className="feature-tile" style={{
// // // //                 background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.07)",
// // // //                 borderRadius: "22px", padding: "32px 28px",
// // // //                 transition: "all 0.35s ease", cursor: "default",
// // // //                 position: "relative", overflow: "hidden",
// // // //               }}>
// // // //                 {/* Corner accent */}
// // // //                 <div style={{
// // // //                   position: "absolute", top: 0, right: 0,
// // // //                   width: "60px", height: "60px",
// // // //                   background: `radial-gradient(circle at top right, ${item.color}15, transparent 70%)`,
// // // //                 }} />
// // // //                 <div style={{ fontSize: "32px", marginBottom: "16px" }}>{item.icon}</div>
// // // //                 <h3 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "18px", fontWeight: 700, color: "#f0f9ff", marginBottom: "10px" }}>{item.title}</h3>
// // // //                 <p style={{ fontSize: "13px", color: "rgba(240,249,255,0.45)", lineHeight: 1.7, marginBottom: "20px" }}>{item.desc}</p>
// // // //                 <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
// // // //                   <span style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "28px", fontWeight: 700, color: item.color }}>{item.metric}</span>
// // // //                   <span style={{ fontSize: "11px", color: "rgba(240,249,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.metricLabel}</span>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           TESTIMONIALS
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <section style={{ background: "linear-gradient(160deg, #060f1e 0%, #0a1a36 100%)", padding: "120px 0" }} ref={testimonialsSection.ref}>
// // // //         <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 52px" }}>
// // // //           <div style={{ textAlign: "center", marginBottom: "60px" }}>
// // // //             <div style={{ fontSize: "11px", fontWeight: 600, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "14px" }}>
// // // //               What Farmers Say
// // // //             </div>
// // // //             <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(30px,4vw,52px)", fontWeight: 700, color: "#f0f9ff", lineHeight: 1.1 }}>
// // // //               Trusted by Farms<br />
// // // //               <span style={{ background: "linear-gradient(90deg,#38bdf8,#7dd3fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
// // // //                 Across India
// // // //               </span>
// // // //             </h2>
// // // //           </div>
// // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }}>
// // // //             {testimonials.map((t, i) => <TestimonialCard key={i} t={t} index={i} active={testimonialsSection.inView} />)}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           CERTIFICATIONS STRIP
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <section style={{ background: "#030d1a", padding: "72px 0", borderTop: "0.5px solid rgba(56,189,248,0.08)" }}>
// // // //         <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 52px" }}>
// // // //           <div style={{ textAlign: "center", marginBottom: "40px" }}>
// // // //             <div style={{ fontSize: "11px", fontWeight: 600, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.14em" }}>
// // // //               Certifications & Compliance
// // // //             </div>
// // // //           </div>
// // // //           <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
// // // //             {[
// // // //               { label: "GMP Certified", sub: "OCV Certification Inc.", icon: "🏆" },
// // // //               { label: "ISO 9001:2015", sub: "Quality Management", icon: "✅" },
// // // //               { label: "ISO 14001", sub: "Environmental Mgmt", icon: "🌿" },
// // // //               { label: "Zero Liquid Discharge", sub: "ZLD Facility", icon: "💧" },
// // // //               { label: "Bureau Veritas", sub: "Independently Audited", icon: "🔍" },
// // // //               { label: "GSSI Aligned", sub: "Global Seafood Std.", icon: "🌊" },
// // // //             ].map((cert, i) => (
// // // //               <div key={i} className="cert-badge" style={{
// // // //                 background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(56,189,248,0.15)",
// // // //                 borderRadius: "16px", padding: "16px 20px",
// // // //                 display: "flex", alignItems: "center", gap: "12px",
// // // //                 transition: "all 0.3s ease", cursor: "default",
// // // //                 animation: `borderGlow 3s ${i * 0.4}s ease-in-out infinite`,
// // // //               }}>
// // // //                 <span style={{ fontSize: "24px" }}>{cert.icon}</span>
// // // //                 <div>
// // // //                   <div style={{ fontSize: "13px", fontWeight: 600, color: "#f0f9ff" }}>{cert.label}</div>
// // // //                   <div style={{ fontSize: "11px", color: "rgba(240,249,255,0.35)", marginTop: "2px" }}>{cert.sub}</div>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           CTA BANNER
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <section ref={ctaSection.ref} style={{
// // // //         background: "linear-gradient(135deg, #0c1a3a 0%, #1e3a8a 40%, #0e3a6e 70%, #0c1a3a 100%)",
// // // //         padding: "120px 52px", textAlign: "center",
// // // //         position: "relative", overflow: "hidden",
// // // //       }}>
// // // //         {/* Decorative rings */}
// // // //         {[400, 600, 800].map((sz, i) => (
// // // //           <div key={i} style={{
// // // //             position: "absolute", top: "50%", left: "50%",
// // // //             width: sz, height: sz, borderRadius: "50%",
// // // //             border: `0.5px solid rgba(56,189,248,${0.1 - i * 0.025})`,
// // // //             transform: "translate(-50%,-50%)", pointerEvents: "none",
// // // //             animation: i === 0 ? "rotateSlow 30s linear infinite" : i === 1 ? "rotateSlowReverse 45s linear infinite" : "none",
// // // //           }} />
// // // //         ))}

// // // //         {/* Glow */}
// // // //         <div style={{
// // // //           position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
// // // //           width: "600px", height: "300px",
// // // //           background: "radial-gradient(ellipse, rgba(14,165,233,0.12) 0%, transparent 70%)",
// // // //           pointerEvents: "none",
// // // //         }} />

// // // //         <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
// // // //           <div style={{
// // // //             fontSize: "40px", marginBottom: "20px",
// // // //             opacity: ctaSection.inView ? 1 : 0,
// // // //             animation: ctaSection.inView ? "riseUp 0.8s ease both" : "none",
// // // //           }}>🌊</div>

// // // //           <h2 style={{
// // // //             fontFamily: "'Clash Display',sans-serif",
// // // //             fontSize: "clamp(36px,5vw,64px)", fontWeight: 700, color: "#f0f9ff",
// // // //             lineHeight: 1.05, marginBottom: "20px",
// // // //             opacity: ctaSection.inView ? 1 : 0,
// // // //             animation: ctaSection.inView ? "riseUp 0.8s 0.1s ease both" : "none",
// // // //           }}>
// // // //             Ready to Transform<br />
// // // //             <span style={{ background: "linear-gradient(90deg,#38bdf8,#7dd3fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
// // // //               Your Farm's Health?
// // // //             </span>
// // // //           </h2>

// // // //           <p style={{
// // // //             fontSize: "16px", color: "rgba(240,249,255,0.55)", lineHeight: 1.8,
// // // //             marginBottom: "44px",
// // // //             opacity: ctaSection.inView ? 1 : 0,
// // // //             animation: ctaSection.inView ? "riseUp 0.8s 0.2s ease both" : "none",
// // // //           }}>
// // // //             Join 500+ aquaculture farms across India already using Innovare Biopharma products. Our team will assess your farm and recommend the right protocol — free of charge.
// // // //           </p>

// // // //           <div style={{
// // // //             display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap",
// // // //             opacity: ctaSection.inView ? 1 : 0,
// // // //             animation: ctaSection.inView ? "riseUp 0.8s 0.3s ease both" : "none",
// // // //           }}>
// // // //             <button className="hero-cta-primary">Get Free Farm Assessment</button>
// // // //             <button className="hero-cta-secondary">Download Product Catalog</button>
// // // //           </div>

// // // //           {/* Contact strip */}
// // // //           <div style={{
// // // //             display: "flex", gap: "32px", justifyContent: "center", flexWrap: "wrap",
// // // //             marginTop: "48px", paddingTop: "36px",
// // // //             borderTop: "0.5px solid rgba(56,189,248,0.12)",
// // // //             opacity: ctaSection.inView ? 1 : 0,
// // // //             animation: ctaSection.inView ? "riseUp 0.8s 0.45s ease both" : "none",
// // // //           }}>
// // // //             {[
// // // //               { icon: "📞", label: "+91-XXX-XXX-XXXX" },
// // // //               { icon: "✉️", label: "info@innovarebiopharma.com" },
// // // //               { icon: "📍", label: "Hyderabad, Telangana" },
// // // //             ].map((c, i) => (
// // // //               <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(240,249,255,0.45)" }}>
// // // //                 <span style={{ fontSize: "16px" }}>{c.icon}</span>
// // // //                 {c.label}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           FOOTER
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <footer style={{ background: "#020810", borderTop: "0.5px solid rgba(56,189,248,0.08)", padding: "60px 52px 32px" }}>
// // // //         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
// // // //           <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "60px", marginBottom: "48px" }}>
// // // //             {/* Brand */}
// // // //             <div>
// // // //               <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
// // // //                 <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg,#1d4ed8,#0ea5e9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>🌊</div>
// // // //                 <div>
// // // //                   <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "15px", fontWeight: 700, color: "#f0f9ff" }}>Innovare Biopharma</div>
// // // //                   <div style={{ fontSize: "9px", color: "rgba(240,249,255,0.3)", letterSpacing: "0.2em", textTransform: "uppercase" }}>LLP</div>
// // // //                 </div>
// // // //               </div>
// // // //               <p style={{ fontSize: "13px", color: "rgba(240,249,255,0.35)", lineHeight: 1.8, maxWidth: "280px" }}>
// // // //                 Science that thrives underwater. GMP-certified aquaculture health solutions trusted across India.
// // // //               </p>
// // // //               <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
// // // //                 {["in", "tw", "fb", "yt"].map((s, i) => (
// // // //                   <div key={i} style={{
// // // //                     width: "32px", height: "32px", borderRadius: "8px",
// // // //                     background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.1)",
// // // //                     display: "flex", alignItems: "center", justifyContent: "center",
// // // //                     cursor: "pointer", fontSize: "11px", color: "rgba(240,249,255,0.5)",
// // // //                     fontWeight: 700, transition: "all 0.2s",
// // // //                   }}>{s.toUpperCase()}</div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>

// // // //             {/* Links */}
// // // //             {[
// // // //               { heading: "Products", links: ["AquaShield Pro", "GillGuard Oxy", "ProbioMax Aqua", "VitaGrow Marine", "MineralPlex AQ", "WaterClear Pro"] },
// // // //               { heading: "Company", links: ["About Us", "Our Team", "Certification", "Environment", "Events", "Blog"] },
// // // //               { heading: "Support", links: ["Contact Us", "Farm Assessment", "Download Catalog", "Technical Docs", "Partner Program"] },
// // // //             ].map((col, i) => (
// // // //               <div key={i}>
// // // //                 <div style={{ fontSize: "12px", fontWeight: 700, color: "#38bdf8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
// // // //                   {col.heading}
// // // //                 </div>
// // // //                 <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
// // // //                   {col.links.map((l, j) => (
// // // //                     <a key={j} href="#" style={{ fontSize: "13px", color: "rgba(240,249,255,0.35)", textDecoration: "none", transition: "color 0.2s" }}
// // // //                       onMouseEnter={e => (e.currentTarget.style.color = "#7dd3fc")}
// // // //                       onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,249,255,0.35)")}
// // // //                     >{l}</a>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           {/* Footer bottom */}
// // // //           <div style={{
// // // //             paddingTop: "24px", borderTop: "0.5px solid rgba(255,255,255,0.06)",
// // // //             display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px",
// // // //           }}>
// // // //             <div style={{ fontSize: "12px", color: "rgba(240,249,255,0.2)" }}>
// // // //               © 2025 Innovare Biopharma LLP. All rights reserved.
// // // //             </div>
// // // //             <div style={{ display: "flex", gap: "24px" }}>
// // // //               {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((l, i) => (
// // // //                 <a key={i} href="#" style={{ fontSize: "12px", color: "rgba(240,249,255,0.2)", textDecoration: "none" }}>{l}</a>
// // // //               ))}
// // // //             </div>
// // // //             <div style={{ fontSize: "11px", color: "rgba(240,249,255,0.15)", letterSpacing: "0.05em" }}>
// // // //               GMP/25819 · ISO 9001:2015 · ISO 14001
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </footer>
// // // //     </div>
// // // //   );
// // // // }
// // // // "use client";

// // // // import { useEffect, useRef, useState, useCallback } from "react";
// // // // import Footer from "./Footer";

// // // // // ─── Types ────────────────────────────────────────────────────────────────────
// // // // interface Bubble { id: number; x: number; y: number; size: number; speed: number; opacity: number; delay: number; }
// // // // interface Product { name: string; tag: string; desc: string; icon: string; color: string; bg: string; stat: string; statLabel: string; }
// // // // interface Stat { value: number; suffix: string; label: string; icon: string; }
// // // // interface Testimonial { quote: string; name: string; role: string; company: string; initials: string; color: string; }

// // // // // ─── Data ─────────────────────────────────────────────────────────────────────
// // // // const products: Product[] = [
// // // //   { name: "AquaShield Pro", tag: "Immunity", desc: "Next-gen immunity booster that reduces disease mortality by up to 95% through targeted antibody stimulation.", icon: "🛡️", color: "#38bdf8", bg: "rgba(56,189,248,0.08)", stat: "95%", statLabel: "Mortality Reduction" },
// // // //   { name: "GillGuard Oxy", tag: "Respiratory", desc: "Clinically formulated for gill health and optimized oxygen absorption across all stocking densities.", icon: "🌊", color: "#60a5fa", bg: "rgba(96,165,250,0.08)", stat: "40%", statLabel: "Oxygen Uptake Boost" },
// // // //   { name: "ProbioMax Aqua", tag: "Probiotic", desc: "Proprietary probiotic complex improving feed conversion ratios and eliminating harmful gut pathogens.", icon: "🔬", color: "#818cf8", bg: "rgba(129,140,248,0.08)", stat: "20%", statLabel: "FCR Improvement" },
// // // //   { name: "VitaGrow Marine", tag: "Growth", desc: "Complete vitamin and mineral matrix engineered to accelerate growth cycles by up to 30%.", icon: "⚡", color: "#34d399", bg: "rgba(52,211,153,0.08)", stat: "30%", statLabel: "Faster Growth" },
// // // // ];

// // // // const stats: Stat[] = [
// // // //   { value: 500, suffix: "+", label: "Farms Served", icon: "🏭" },
// // // //   { value: 20, suffix: "+", label: "Years R&D", icon: "🔬" },
// // // //   { value: 98, suffix: "%", label: "Survival Rate", icon: "📈" },
// // // //   { value: 15, suffix: "+", label: "States Reached", icon: "🗺️" },
// // // // ];

// // // // const testimonials: Testimonial[] = [
// // // //   { quote: "After switching to AquaShield Pro, our shrimp mortality dropped from 18% to under 2%. The ROI in the first season alone covered 3 years of product cost.", name: "Ravi Kumar", role: "Farm Owner, 80 Acres", company: "Krishna Delta Aquafarms", initials: "RK", color: "#38bdf8" },
// // // //   { quote: "Innovare's technical team visited our farm, diagnosed the gill issue, and prescribed GillGuard Oxy. We saw measurable improvement within 5 days. Nothing short of remarkable.", name: "Anitha Reddy", role: "Aquaculture Consultant", company: "AP Coastal Farms Co.", initials: "AR", color: "#60a5fa" },
// // // //   { quote: "ProbioMax improved our FCR from 1.8 to 1.42 within two cycles. For a farm our size, that translates to lakhs saved every season. Genuinely life-changing.", name: "Suresh Naidu", role: "Chief Operations", company: "Godavari Marine Exports", initials: "SN", color: "#818cf8" },
// // // // ];

// // // // const navLinks = ["Products", "Health", "Environment", "Certification", "Events", "Contact"];

// // // // // ─── Hooks ────────────────────────────────────────────────────────────────────
// // // // function useInView(threshold = 0.12) {
// // // //   const ref = useRef<HTMLDivElement>(null);
// // // //   const [inView, setInView] = useState(false);
// // // //   useEffect(() => {
// // // //     const el = ref.current; if (!el) return;
// // // //     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
// // // //     obs.observe(el); return () => obs.disconnect();
// // // //   }, [threshold]);
// // // //   return { ref, inView };
// // // // }

// // // // function useCountUp(target: number, active: boolean) {
// // // //   const [n, setN] = useState(0);
// // // //   useEffect(() => {
// // // //     if (!active) return;
// // // //     let c = 0; const step = target / 70;
// // // //     const t = setInterval(() => { c += step; if (c >= target) { setN(target); clearInterval(t); } else setN(Math.floor(c)); }, 16);
// // // //     return () => clearInterval(t);
// // // //   }, [active, target]);
// // // //   return n;
// // // // }

// // // // // ─── Canvas Water Effect ───────────────────────────────────────────────────────
// // // // function WaterCanvas() {
// // // //   const canvasRef = useRef<HTMLCanvasElement>(null);
// // // //   useEffect(() => {
// // // //     const canvas = canvasRef.current; if (!canvas) return;
// // // //     const ctx = canvas.getContext("2d"); if (!ctx) return;
// // // //     let raf: number;
// // // //     const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
// // // //     resize();
// // // //     window.addEventListener("resize", resize);
// // // //     let t = 0;
// // // //     const draw = () => {
// // // //       t += 0.008;
// // // //       ctx.clearRect(0, 0, canvas.width, canvas.height);
// // // //       const W = canvas.width, H = canvas.height;
// // // //       // Draw 3 wave layers
// // // //       [[0.003, 0.4, "rgba(56,189,248,0.06)"], [0.005, 0.55, "rgba(96,165,250,0.05)"], [0.007, 0.7, "rgba(125,211,252,0.04)"]].forEach(([freq, amp, color], idx) => {
// // // //         ctx.beginPath();
// // // //         ctx.moveTo(0, H);
// // // //         for (let x = 0; x <= W; x += 4) {
// // // //           const y = H * (amp as number) + Math.sin(x * (freq as number) + t + idx) * 28 + Math.sin(x * 0.002 + t * 0.7) * 14;
// // // //           ctx.lineTo(x, y);
// // // //         }
// // // //         ctx.lineTo(W, H); ctx.lineTo(0, H);
// // // //         ctx.fillStyle = color as string; ctx.fill();
// // // //       });
// // // //       raf = requestAnimationFrame(draw);
// // // //     };
// // // //     draw();
// // // //     return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
// // // //   }, []);
// // // //   return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
// // // // }

// // // // // ─── Particle Field ────────────────────────────────────────────────────────────
// // // // function ParticleField() {
// // // //   const [bubbles, setBubbles] = useState<Bubble[]>([]);
// // // //   useEffect(() => {
// // // //     setBubbles(Array.from({ length: 22 }, (_, i) => ({
// // // //       id: i, x: Math.random() * 100, y: Math.random() * 100,
// // // //       size: 4 + Math.random() * 12, speed: 8 + Math.random() * 12,
// // // //       opacity: 0.06 + Math.random() * 0.16, delay: Math.random() * 10,
// // // //     })));
// // // //   }, []);
// // // //   return (
// // // //     <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
// // // //       {bubbles.map(b => (
// // // //         <div key={b.id} style={{
// // // //           position: "absolute", left: `${b.x}%`, bottom: `${b.y * 0.3}%`,
// // // //           width: b.size, height: b.size, borderRadius: "50%",
// // // //           background: `rgba(56,189,248,${b.opacity})`,
// // // //           border: `0.5px solid rgba(125,211,252,${b.opacity * 1.8})`,
// // // //           animation: `bubbleUp ${b.speed}s ${b.delay}s ease-in infinite`,
// // // //         }} />
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── Stat Card ─────────────────────────────────────────────────────────────────
// // // // function StatCard({ stat, active, index }: { stat: Stat; active: boolean; index: number }) {
// // // //   const n = useCountUp(stat.value, active);
// // // //   return (
// // // //     <div style={{
// // // //       textAlign: "center", padding: "36px 20px",
// // // //       borderRight: index < 3 ? "0.5px solid rgba(255,255,255,0.07)" : "none",
// // // //       opacity: active ? 1 : 0,
// // // //       animation: active ? `riseUp 0.7s ${index * 0.1}s ease both` : "none",
// // // //     }}>
// // // //       <div style={{ fontSize: "22px", marginBottom: "10px" }}>{stat.icon}</div>
// // // //       <div style={{
// // // //         fontFamily: "'Clash Display',sans-serif", fontSize: "52px", fontWeight: 700,
// // // //         lineHeight: 1, color: "#fff", marginBottom: "6px",
// // // //         background: "linear-gradient(135deg,#fff 40%,#7dd3fc)", WebkitBackgroundClip: "text",
// // // //         WebkitTextFillColor: "transparent", backgroundClip: "text",
// // // //       }}>{n}{stat.suffix}</div>
// // // //       <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 }}>{stat.label}</div>
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── Product Card ─────────────────────────────────────────────────────────────
// // // // function ProductCard({ product, index, active }: { product: Product; index: number; active: boolean }) {
// // // //   const [hov, setHov] = useState(false);
// // // //   return (
// // // //     <div
// // // //       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
// // // //       style={{
// // // //         background: hov ? product.bg : "rgba(255,255,255,0.02)",
// // // //         border: `0.5px solid ${hov ? product.color + "55" : "rgba(255,255,255,0.07)"}`,
// // // //         borderRadius: "24px", padding: "32px 28px",
// // // //         cursor: "pointer",
// // // //         transform: hov ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
// // // //         boxShadow: hov ? `0 32px 72px ${product.color}22, 0 0 0 0.5px ${product.color}33` : "none",
// // // //         transition: "all 0.4s cubic-bezier(0.34,1.4,0.64,1)",
// // // //         opacity: active ? 1 : 0,
// // // //         animation: active ? `riseUp 0.7s ${index * 0.12}s ease both` : "none",
// // // //         position: "relative", overflow: "hidden",
// // // //       }}
// // // //     >
// // // //       {/* Shimmer line on hover */}
// // // //       <div style={{
// // // //         position: "absolute", top: 0, left: 0, right: 0, height: "2px",
// // // //         background: `linear-gradient(90deg, transparent, ${product.color}, transparent)`,
// // // //         opacity: hov ? 1 : 0, transition: "opacity 0.4s ease",
// // // //       }} />
// // // //       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
// // // //         <div style={{ fontSize: "36px" }}>{product.icon}</div>
// // // //         <div style={{
// // // //           background: product.color + "18", border: `0.5px solid ${product.color}44`,
// // // //           color: product.color, fontSize: "10px", fontWeight: 700,
// // // //           padding: "4px 12px", borderRadius: "20px",
// // // //           textTransform: "uppercase", letterSpacing: "0.1em",
// // // //         }}>{product.tag}</div>
// // // //       </div>
// // // //       <h3 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "20px", fontWeight: 700, color: "#f0f9ff", marginBottom: "10px" }}>{product.name}</h3>
// // // //       <p style={{ fontSize: "13px", color: "rgba(240,249,255,0.5)", lineHeight: 1.7, marginBottom: "20px" }}>{product.desc}</p>
// // // //       <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
// // // //         <span style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "32px", fontWeight: 700, color: product.color }}>{product.stat}</span>
// // // //         <span style={{ fontSize: "11px", color: "rgba(240,249,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{product.statLabel}</span>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── Testimonial Card ──────────────────────────────────────────────────────────
// // // // function TestimonialCard({ t, index, active }: { t: Testimonial; index: number; active: boolean }) {
// // // //   const [hov, setHov] = useState(false);
// // // //   return (
// // // //     <div
// // // //       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
// // // //       style={{
// // // //         background: hov ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
// // // //         border: `0.5px solid ${hov ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.07)"}`,
// // // //         borderRadius: "24px", padding: "32px 28px",
// // // //         transform: hov ? "translateY(-6px)" : "translateY(0)",
// // // //         boxShadow: hov ? "0 24px 60px rgba(0,0,0,0.3)" : "none",
// // // //         transition: "all 0.35s ease",
// // // //         opacity: active ? 1 : 0,
// // // //         animation: active ? `riseUp 0.7s ${index * 0.15}s ease both` : "none",
// // // //         display: "flex", flexDirection: "column", gap: "20px",
// // // //       }}
// // // //     >
// // // //       {/* Quote mark */}
// // // //       <div style={{ fontFamily: "Georgia,serif", fontSize: "64px", lineHeight: 0.8, color: t.color, opacity: 0.4, marginBottom: "4px" }}>"</div>
// // // //       <p style={{ fontSize: "14px", color: "rgba(240,249,255,0.72)", lineHeight: 1.8, fontStyle: "italic", flex: 1 }}>{t.quote}</p>
// // // //       <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "16px", borderTop: "0.5px solid rgba(255,255,255,0.07)" }}>
// // // //         <div style={{
// // // //           width: "44px", height: "44px", borderRadius: "50%", flexShrink: 0,
// // // //           background: `linear-gradient(135deg, ${t.color}44, ${t.color}22)`,
// // // //           border: `1.5px solid ${t.color}66`,
// // // //           display: "flex", alignItems: "center", justifyContent: "center",
// // // //           fontFamily: "'Clash Display',sans-serif", fontSize: "14px", fontWeight: 700, color: t.color,
// // // //         }}>{t.initials}</div>
// // // //         <div>
// // // //           <div style={{ fontSize: "14px", fontWeight: 600, color: "#f0f9ff" }}>{t.name}</div>
// // // //           <div style={{ fontSize: "11px", color: "rgba(240,249,255,0.4)", marginTop: "2px" }}>{t.role} · {t.company}</div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── Main Page ─────────────────────────────────────────────────────────────────
// // // // export default function HomePage() {
// // // //   const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
// // // //   const [scrollY, setScrollY] = useState(0);
// // // //   const [navScrolled, setNavScrolled] = useState(false);
// // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // //   const [activeWord, setActiveWord] = useState(0);

// // // //   const heroSection   = useRef<HTMLElement>(null);
// // // //   const statsSection  = useInView(0.3);
// // // //   const productsSection = useInView(0.05);
// // // //   const missionSection  = useInView(0.2);
// // // //   const testimonialsSection = useInView(0.1);
// // // //   const ctaSection    = useInView(0.3);

// // // //   const rotatingWords = ["Healthier.", "Stronger.", "Smarter.", "Greener."];

// // // //   useEffect(() => {
// // // //     const interval = setInterval(() => setActiveWord(w => (w + 1) % rotatingWords.length), 2200);
// // // //     return () => clearInterval(interval);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => { setScrollY(window.scrollY); setNavScrolled(window.scrollY > 60); };
// // // //     const handleMouse = (e: MouseEvent) => setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
// // // //     window.addEventListener("scroll", handleScroll, { passive: true });
// // // //     window.addEventListener("mousemove", handleMouse);
// // // //     return () => { window.removeEventListener("scroll", handleScroll); window.removeEventListener("mousemove", handleMouse); };
// // // //   }, []);

// // // //   return (
// // // //     <div style={{ fontFamily: "'Satoshi','Segoe UI',sans-serif", background: "#030d1a", color: "#f0f9ff", overflowX: "hidden" }}>
// // // //       <style>{`
// // // //         @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Satoshi:wght@300;400;500;700&display=swap');
// // // //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// // // //         :root {
// // // //           --blue-900: #0c1a3a;
// // // //           --blue-800: #0e3a6e;
// // // //           --blue-600: #0369a1;
// // // //           --blue-500: #0ea5e9;
// // // //           --blue-400: #38bdf8;
// // // //           --blue-300: #7dd3fc;
// // // //           --blue-200: #bae6fd;
// // // //           --blue-50:  #f0f9ff;
// // // //         }

// // // //         html { scroll-behavior: smooth; }

// // // //         @keyframes bubbleUp {
// // // //           0%   { transform: translateY(0) scale(1); opacity: 0; }
// // // //           8%   { opacity: 1; }
// // // //           92%  { opacity: 0.7; }
// // // //           100% { transform: translateY(-100vh) scale(0.4); opacity: 0; }
// // // //         }
// // // //         @keyframes riseUp {
// // // //           from { opacity: 0; transform: translateY(44px); }
// // // //           to   { opacity: 1; transform: translateY(0); }
// // // //         }
// // // //         @keyframes fadeIn {
// // // //           from { opacity: 0; } to { opacity: 1; }
// // // //         }
// // // //         @keyframes floatY {
// // // //           0%,100% { transform: translateY(0); }
// // // //           50%      { transform: translateY(-18px); }
// // // //         }
// // // //         @keyframes rotateSlow {
// // // //           from { transform: rotate(0deg); }
// // // //           to   { transform: rotate(360deg); }
// // // //         }
// // // //         @keyframes rotateSlowReverse {
// // // //           from { transform: rotate(0deg); }
// // // //           to   { transform: rotate(-360deg); }
// // // //         }
// // // //         @keyframes pulseDot {
// // // //           0%,100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(56,189,248,0.5); }
// // // //           50%      { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(56,189,248,0); }
// // // //         }
// // // //         @keyframes shimmerText {
// // // //           0%   { background-position: -300% center; }
// // // //           100% { background-position: 300% center; }
// // // //         }
// // // //         @keyframes wordSwap {
// // // //           0%   { opacity: 0; transform: translateY(16px); }
// // // //           15%  { opacity: 1; transform: translateY(0); }
// // // //           85%  { opacity: 1; transform: translateY(0); }
// // // //           100% { opacity: 0; transform: translateY(-16px); }
// // // //         }
// // // //         @keyframes drawLine {
// // // //           from { stroke-dashoffset: 1000; }
// // // //           to   { stroke-dashoffset: 0; }
// // // //         }
// // // //         @keyframes countPop {
// // // //           0%   { transform: scale(0.8); opacity: 0; }
// // // //           60%  { transform: scale(1.05); }
// // // //           100% { transform: scale(1); opacity: 1; }
// // // //         }
// // // //         @keyframes borderGlow {
// // // //           0%,100% { border-color: rgba(56,189,248,0.2); }
// // // //           50%      { border-color: rgba(56,189,248,0.5); }
// // // //         }
// // // //         @keyframes scanLine {
// // // //           0%   { top: 0; opacity: 0.6; }
// // // //           100% { top: 100%; opacity: 0; }
// // // //         }

// // // //         .nav-pill { transition: all 0.25s ease; }
// // // //         .nav-pill:hover { color: #38bdf8 !important; }

// // // //         .hero-cta-primary {
// // // //           background: linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%);
// // // //           color: #fff; border: none;
// // // //           padding: 16px 40px; border-radius: 50px;
// // // //           font-size: 15px; font-weight: 700;
// // // //           cursor: pointer; font-family: 'Satoshi', sans-serif;
// // // //           letter-spacing: 0.02em;
// // // //           box-shadow: 0 8px 32px rgba(14,165,233,0.45), 0 0 0 1px rgba(56,189,248,0.2);
// // // //           transition: all 0.35s cubic-bezier(0.34,1.4,0.64,1);
// // // //           position: relative; overflow: hidden;
// // // //         }
// // // //         .hero-cta-primary::after {
// // // //           content: '';
// // // //           position: absolute; inset: 0;
// // // //           background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
// // // //           border-radius: 50px;
// // // //         }
// // // //         .hero-cta-primary:hover {
// // // //           transform: translateY(-4px) scale(1.04);
// // // //           box-shadow: 0 20px 56px rgba(14,165,233,0.6), 0 0 0 1px rgba(56,189,248,0.4);
// // // //         }
// // // //         .hero-cta-secondary {
// // // //           background: rgba(255,255,255,0.05);
// // // //           color: #bae6fd;
// // // //           border: 1px solid rgba(255,255,255,0.15);
// // // //           padding: 16px 40px; border-radius: 50px;
// // // //           font-size: 15px; font-weight: 500;
// // // //           cursor: pointer; font-family: 'Satoshi', sans-serif;
// // // //           transition: all 0.3s ease;
// // // //           backdrop-filter: blur(8px);
// // // //         }
// // // //         .hero-cta-secondary:hover {
// // // //           background: rgba(56,189,248,0.1);
// // // //           border-color: rgba(56,189,248,0.45);
// // // //           transform: translateY(-3px);
// // // //         }
// // // //         .section-cta {
// // // //           background: linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%);
// // // //           color: #fff; border: none;
// // // //           padding: 15px 36px; border-radius: 50px;
// // // //           font-size: 14px; font-weight: 700;
// // // //           cursor: pointer; font-family: 'Satoshi', sans-serif;
// // // //           box-shadow: 0 6px 28px rgba(14,165,233,0.4);
// // // //           transition: all 0.3s ease;
// // // //         }
// // // //         .section-cta:hover { transform: translateY(-3px); box-shadow: 0 14px 44px rgba(14,165,233,0.55); }

// // // //         .section-cta-outline {
// // // //           background: transparent;
// // // //           color: #38bdf8;
// // // //           border: 1px solid rgba(56,189,248,0.35);
// // // //           padding: 15px 36px; border-radius: 50px;
// // // //           font-size: 14px; font-weight: 500;
// // // //           cursor: pointer; font-family: 'Satoshi', sans-serif;
// // // //           transition: all 0.3s ease;
// // // //         }
// // // //         .section-cta-outline:hover { background: rgba(56,189,248,0.08); border-color: rgba(56,189,248,0.6); transform: translateY(-2px); }

// // // //         .feature-tile:hover { border-color: rgba(56,189,248,0.3) !important; transform: translateY(-4px) !important; }
// // // //         .cert-badge:hover { transform: scale(1.05) !important; border-color: rgba(56,189,248,0.5) !important; }

// // // //         .word-rotate {
// // // //           display: inline-block;
// // // //           animation: wordSwap 2.2s ease infinite;
// // // //           background: linear-gradient(90deg, #38bdf8, #7dd3fc, #bae6fd, #38bdf8);
// // // //           background-size: 200% auto;
// // // //           -webkit-background-clip: text;
// // // //           -webkit-text-fill-color: transparent;
// // // //           background-clip: text;
// // // //           animation: wordSwap 2.2s ease infinite, shimmerText 3s linear infinite;
// // // //         }
// // // //       `}</style>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           NAV
// // // //       ══════════════════════════════════════════════════════════ */}
     

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           HERO
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <section ref={heroSection as React.RefObject<HTMLElement>} style={{
// // // //         minHeight: "100vh",
// // // //         background: "linear-gradient(160deg, #030d1a 0%, #0a1628 30%, #0c2040 60%, #0e3a6e 100%)",
// // // //         position: "relative", overflow: "hidden",
// // // //         display: "flex", flexDirection: "column",
// // // //       }}>
// // // //         <ParticleField />
// // // //         <WaterCanvas />

// // // //         {/* Grid texture */}
// // // //         <div style={{
// // // //           position: "absolute", inset: 0, pointerEvents: "none",
// // // //           backgroundImage: "linear-gradient(rgba(56,189,248,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.04) 1px,transparent 1px)",
// // // //           backgroundSize: "80px 80px",
// // // //         }} />

// // // //         {/* Radial glow meshes */}
// // // //         <div style={{
// // // //           position: "absolute", inset: 0, pointerEvents: "none",
// // // //           background: `
// // // //             radial-gradient(ellipse 80% 60% at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(56,189,248,0.07) 0%, transparent 55%),
// // // //             radial-gradient(ellipse 50% 40% at 80% 20%, rgba(29,78,216,0.12) 0%, transparent 60%),
// // // //             radial-gradient(ellipse 40% 30% at 20% 80%, rgba(14,165,233,0.08) 0%, transparent 50%)
// // // //           `,
// // // //           transition: "background 0.1s",
// // // //         }} />

// // // //         {/* SVG decorative orbit rings */}
// // // //         <svg style={{ position: "absolute", right: "-80px", top: "50%", transform: "translateY(-50%)", width: "700px", height: "700px", opacity: 0.12, pointerEvents: "none" }} viewBox="0 0 700 700">
// // // //           <circle cx="350" cy="350" r="200" fill="none" stroke="url(#ringGrad)" strokeWidth="0.8" strokeDasharray="8 4" style={{ animation: "rotateSlow 25s linear infinite", transformOrigin: "350px 350px" }} />
// // // //           <circle cx="350" cy="350" r="280" fill="none" stroke="url(#ringGrad)" strokeWidth="0.5" strokeDasharray="4 8" style={{ animation: "rotateSlowReverse 35s linear infinite", transformOrigin: "350px 350px" }} />
// // // //           <circle cx="350" cy="350" r="320" fill="none" stroke="url(#ringGrad)" strokeWidth="0.3" />
// // // //           <circle cx="350" cy="350" r="120" fill="none" stroke="#38bdf8" strokeWidth="0.5" style={{ animation: "rotateSlow 15s linear infinite", transformOrigin: "350px 350px" }} />
// // // //           {/* Orbit dots */}
// // // //           {[0, 72, 144, 216, 288].map((deg, i) => {
// // // //             const rad = (deg - 90) * Math.PI / 180;
// // // //             return <circle key={i} cx={350 + 200 * Math.cos(rad)} cy={350 + 200 * Math.sin(rad)} r="5" fill="#38bdf8" opacity="0.6" />;
// // // //           })}
// // // //           <defs>
// // // //             <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
// // // //               <stop offset="0%" stopColor="#38bdf8" />
// // // //               <stop offset="100%" stopColor="#1d4ed8" />
// // // //             </linearGradient>
// // // //           </defs>
// // // //         </svg>

// // // //         {/* Hero content */}
// // // //         <div style={{
// // // //           flex: 1, display: "flex", alignItems: "center",
// // // //           maxWidth: "1200px", margin: "0 auto", padding: "120px 52px 80px",
// // // //           position: "relative", zIndex: 2, width: "100%",
// // // //         }}>
// // // //           <div style={{ maxWidth: "720px" }}>
// // // //             {/* Top badge */}
// // // //             <div style={{
// // // //               display: "inline-flex", alignItems: "center", gap: "10px",
// // // //               background: "rgba(56,189,248,0.08)",
// // // //               border: "0.5px solid rgba(56,189,248,0.25)",
// // // //               color: "#7dd3fc", fontSize: "11px", fontWeight: 600,
// // // //               padding: "8px 20px", borderRadius: "30px",
// // // //               letterSpacing: "0.1em", textTransform: "uppercase",
// // // //               marginBottom: "32px",
// // // //               animation: "riseUp 0.8s ease both",
// // // //             }}>
// // // //               <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#38bdf8", animation: "pulseDot 2s ease-in-out infinite", flexShrink: 0 }} />
// // // //               India's Leading Aquaculture Health Solutions
// // // //               <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#38bdf8", animation: "pulseDot 2s 0.5s ease-in-out infinite", flexShrink: 0 }} />
// // // //             </div>

// // // //             {/* Headline */}
// // // //             <h1 style={{
// // // //               fontFamily: "'Clash Display',sans-serif",
// // // //               fontSize: "clamp(48px, 6.5vw, 96px)",
// // // //               fontWeight: 700, lineHeight: 1.0,
// // // //               color: "#f0f9ff", marginBottom: "8px",
// // // //             }}>
// // // //               <span style={{ display: "block", animation: "riseUp 0.9s 0.1s ease both" }}>Making Aquaculture</span>
// // // //               <span style={{ display: "block", animation: "riseUp 0.9s 0.2s ease both", height: "1.1em", overflow: "hidden" }}>
// // // //                 <span className="word-rotate" key={activeWord} style={{ animation: "wordSwap 2.2s ease both, shimmerText 3s linear infinite" }}>
// // // //                   {rotatingWords[activeWord]}
// // // //                 </span>
// // // //               </span>
// // // //             </h1>

// // // //             <p style={{
// // // //               fontSize: "18px", color: "rgba(240,249,255,0.58)",
// // // //               lineHeight: 1.85, maxWidth: "560px",
// // // //               marginBottom: "44px", marginTop: "20px",
// // // //               animation: "riseUp 0.9s 0.45s ease both",
// // // //             }}>
// // // //               Innovare Biopharma LLP delivers <strong style={{ color: "#bae6fd", fontWeight: 600 }}>GMP-certified</strong> aquaculture health products — immunity boosters, probiotics, growth accelerators, and water quality solutions trusted by <strong style={{ color: "#bae6fd", fontWeight: 600 }}>500+ farms</strong> across India.
// // // //             </p>

// // // //             {/* CTAs */}
// // // //             <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", animation: "riseUp 0.9s 0.6s ease both" }}>
// // // //               <button className="hero-cta-primary">Explore Products</button>
// // // //               <button className="hero-cta-secondary">Watch Story →</button>
// // // //             </div>

// // // //             {/* Trust indicators */}
// // // //             <div style={{
// // // //               display: "flex", gap: "24px", marginTop: "52px", flexWrap: "wrap",
// // // //               animation: "riseUp 0.9s 0.75s ease both",
// // // //             }}>
// // // //               {[
// // // //                 { icon: "✓", label: "GMP Certified" },
// // // //                 { icon: "✓", label: "ISO 9001:2015" },
// // // //                 { icon: "✓", label: "Zero Toxicity" },
// // // //                 { icon: "✓", label: "Vet Approved" },
// // // //               ].map((tr, i) => (
// // // //                 <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
// // // //                   <span style={{
// // // //                     width: "18px", height: "18px", borderRadius: "50%",
// // // //                     background: "rgba(56,189,248,0.15)", border: "0.5px solid rgba(56,189,248,0.4)",
// // // //                     display: "flex", alignItems: "center", justifyContent: "center",
// // // //                     fontSize: "10px", color: "#38bdf8", fontWeight: 700, flexShrink: 0,
// // // //                   }}>{tr.icon}</span>
// // // //                   <span style={{ fontSize: "12px", color: "rgba(240,249,255,0.5)", fontWeight: 500 }}>{tr.label}</span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* Right side — floating product showcase */}
// // // //           <div style={{
// // // //             position: "absolute", right: "52px", top: "50%",
// // // //             transform: `translateY(calc(-50% + ${scrollY * 0.08}px))`,
// // // //             display: "flex", flexDirection: "column", gap: "14px",
// // // //             animation: "riseUp 1s 0.5s ease both",
// // // //           }}>
// // // //             {[
// // // //               { icon: "🛡️", name: "AquaShield Pro", stat: "95%", label: "Immunity boost", color: "#38bdf8", delay: "0s" },
// // // //               { icon: "🌊", name: "GillGuard Oxy", stat: "40%", label: "O₂ absorption", color: "#60a5fa", delay: "0.15s" },
// // // //               { icon: "⚡", name: "VitaGrow Marine", stat: "30%", label: "Faster growth", color: "#34d399", delay: "0.3s" },
// // // //             ].map((item, i) => (
// // // //               <div key={i} style={{
// // // //                 background: "rgba(12,26,58,0.7)", backdropFilter: "blur(16px)",
// // // //                 border: `0.5px solid ${item.color}33`,
// // // //                 borderRadius: "18px", padding: "16px 20px",
// // // //                 display: "flex", alignItems: "center", gap: "14px",
// // // //                 width: "260px",
// // // //                 animation: `riseUp 0.8s ${item.delay} ease both, floatY ${4 + i * 0.6}s ${i * 0.8}s ease-in-out infinite`,
// // // //                 boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 0 0.5px ${item.color}22`,
// // // //               }}>
// // // //                 <div style={{
// // // //                   width: "44px", height: "44px", borderRadius: "12px",
// // // //                   background: `${item.color}18`, border: `0.5px solid ${item.color}44`,
// // // //                   display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0,
// // // //                 }}>{item.icon}</div>
// // // //                 <div style={{ flex: 1 }}>
// // // //                   <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "13px", fontWeight: 600, color: "#f0f9ff" }}>{item.name}</div>
// // // //                   <div style={{ fontSize: "11px", color: "rgba(240,249,255,0.4)", marginTop: "1px" }}>{item.label}</div>
// // // //                 </div>
// // // //                 <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "22px", fontWeight: 700, color: item.color }}>{item.stat}</div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* Scroll indicator */}
// // // //         <div style={{
// // // //           position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
// // // //           display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
// // // //           animation: "riseUp 1s 1.2s ease both",
// // // //           zIndex: 2,
// // // //         }}>
// // // //           <span style={{ fontSize: "10px", color: "rgba(240,249,255,0.3)", textTransform: "uppercase", letterSpacing: "0.2em" }}>Scroll to explore</span>
// // // //           <div style={{
// // // //             width: "24px", height: "40px", border: "1px solid rgba(56,189,248,0.25)",
// // // //             borderRadius: "12px", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "6px",
// // // //           }}>
// // // //             <div style={{
// // // //               width: "4px", height: "8px", borderRadius: "2px", background: "#38bdf8",
// // // //               animation: "floatY 1.8s ease-in-out infinite",
// // // //             }} />
// // // //           </div>
// // // //         </div>

// // // //         {/* Wave */}
// // // //         <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
// // // //           <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ width: "100%", height: "90px", display: "block" }}>
// // // //             <path d="M0,45 C240,90 480,10 720,45 C960,80 1200,15 1440,45 L1440,90 L0,90 Z" fill="#030d1a" />
// // // //           </svg>
// // // //         </div>
// // // //       </section>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           STATS STRIP
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <section style={{
// // // //         background: "linear-gradient(135deg, #060f1e 0%, #0a1a36 100%)",
// // // //         borderTop: "0.5px solid rgba(56,189,248,0.1)",
// // // //         borderBottom: "0.5px solid rgba(56,189,248,0.08)",
// // // //       }} ref={statsSection.ref}>
// // // //         <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
// // // //           {stats.map((st, i) => <StatCard key={i} stat={st} active={statsSection.inView} index={i} />)}
// // // //         </div>
// // // //       </section>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           MARQUEE TRUST STRIP
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <div style={{ background: "#030d1a", padding: "18px 0", overflow: "hidden", borderBottom: "0.5px solid rgba(56,189,248,0.06)" }}>
// // // //         <div style={{
// // // //           display: "flex", gap: "48px",
// // // //           animation: "none",
// // // //           whiteSpace: "nowrap",
// // // //         }}>
// // // //           {[...Array(2)].map((_, repeat) => (
// // // //             <div key={repeat} style={{ display: "flex", gap: "48px", flexShrink: 0 }}>
// // // //               {["GMP Certified", "ISO 9001:2015", "ISO 14001", "Zero Toxicity", "Bureau Veritas Audited", "GSSI Aligned", "Vet Approved", "ZLD Facility", "500+ Farms"].map((item, i) => (
// // // //                 <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
// // // //                   <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#38bdf8", opacity: 0.5 }} />
// // // //                   <span style={{ fontSize: "12px", color: "rgba(240,249,255,0.3)", fontWeight: 500, letterSpacing: "0.05em" }}>{item}</span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           ABOUT / MISSION
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <section style={{ background: "#030d1a", padding: "120px 0" }} ref={missionSection.ref}>
// // // //         <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 52px" }}>
// // // //           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }}>
// // // //             {/* Left — visual */}
// // // //             <div style={{
// // // //               position: "relative",
// // // //               opacity: missionSection.inView ? 1 : 0,
// // // //               animation: missionSection.inView ? "riseUp 0.9s ease both" : "none",
// // // //             }}>
// // // //               {/* Main visual card */}
// // // //               <div style={{
// // // //                 background: "linear-gradient(135deg, #0c1a3a, #0e3a6e)",
// // // //                 border: "0.5px solid rgba(56,189,248,0.15)",
// // // //                 borderRadius: "28px", padding: "48px",
// // // //                 position: "relative", overflow: "hidden",
// // // //                 boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
// // // //               }}>
// // // //                 {/* Scan line effect */}
// // // //                 <div style={{
// // // //                   position: "absolute", left: 0, right: 0, height: "1px",
// // // //                   background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent)",
// // // //                   animation: "scanLine 3s linear infinite",
// // // //                   pointerEvents: "none",
// // // //                 }} />

// // // //                 {/* Content */}
// // // //                 <div style={{ textAlign: "center", marginBottom: "32px" }}>
// // // //                   <div style={{
// // // //                     width: "88px", height: "88px", borderRadius: "50%", margin: "0 auto 16px",
// // // //                     background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)",
// // // //                     display: "flex", alignItems: "center", justifyContent: "center",
// // // //                     fontSize: "36px", boxShadow: "0 0 48px rgba(14,165,233,0.5)",
// // // //                     animation: "pulseDot 3s ease-in-out infinite",
// // // //                   }}>🔬</div>
// // // //                   <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>20+ Years of R&D</div>
// // // //                   <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>Science-backed aquaculture solutions</div>
// // // //                 </div>

// // // //                 {/* Feature grid */}
// // // //                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
// // // //                   {[
// // // //                     { icon: "🧬", label: "Proprietary Formulas" },
// // // //                     { icon: "🌊", label: "Species-Specific" },
// // // //                     { icon: "♻️", label: "Eco-Certified" },
// // // //                     { icon: "📊", label: "Data-Driven Results" },
// // // //                   ].map((f, i) => (
// // // //                     <div key={i} className="feature-tile" style={{
// // // //                       background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.07)",
// // // //                       borderRadius: "14px", padding: "14px",
// // // //                       display: "flex", alignItems: "center", gap: "8px",
// // // //                       transition: "all 0.3s ease", cursor: "default",
// // // //                     }}>
// // // //                       <span style={{ fontSize: "18px" }}>{f.icon}</span>
// // // //                       <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{f.label}</span>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>

// // // //                 {/* Decorative ring */}
// // // //                 <div style={{
// // // //                   position: "absolute", top: "-60px", right: "-60px",
// // // //                   width: "200px", height: "200px", borderRadius: "50%",
// // // //                   border: "0.5px solid rgba(56,189,248,0.12)",
// // // //                   pointerEvents: "none",
// // // //                 }} />
// // // //               </div>

// // // //               {/* Floating accent cards */}
// // // //               <div style={{
// // // //                 position: "absolute", bottom: "-24px", right: "-24px",
// // // //                 background: "rgba(12,26,58,0.9)", backdropFilter: "blur(12px)",
// // // //                 border: "0.5px solid rgba(56,189,248,0.2)",
// // // //                 borderRadius: "16px", padding: "16px 20px",
// // // //                 animation: "floatY 4s ease-in-out infinite",
// // // //                 boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
// // // //               }}>
// // // //                 <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "28px", fontWeight: 700, color: "#38bdf8" }}>500+</div>
// // // //                 <div style={{ fontSize: "11px", color: "rgba(240,249,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Partner Farms</div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Right — text */}
// // // //             <div style={{
// // // //               opacity: missionSection.inView ? 1 : 0,
// // // //               animation: missionSection.inView ? "riseUp 0.9s 0.2s ease both" : "none",
// // // //             }}>
// // // //               <div style={{ fontSize: "11px", fontWeight: 600, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "16px" }}>
// // // //                 Who We Are
// // // //               </div>
// // // //               <h2 style={{
// // // //                 fontFamily: "'Clash Display',sans-serif",
// // // //                 fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 700,
// // // //                 color: "#f0f9ff", lineHeight: 1.05, marginBottom: "24px",
// // // //               }}>
// // // //                 Pioneering Aquatic<br />
// // // //                 <span style={{
// // // //                   background: "linear-gradient(90deg,#38bdf8,#7dd3fc)",
// // // //                   WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
// // // //                 }}>Animal Health</span>
// // // //               </h2>

// // // //               <p style={{ fontSize: "15px", color: "rgba(240,249,255,0.55)", lineHeight: 1.9, marginBottom: "20px" }}>
// // // //                 Founded with a mission to transform aquaculture health management in India, Innovare Biopharma LLP has spent over two decades developing precision-formulated solutions for shrimp, fish, and other aquatic species.
// // // //               </p>
// // // //               <p style={{ fontSize: "15px", color: "rgba(240,249,255,0.55)", lineHeight: 1.9, marginBottom: "36px" }}>
// // // //                 Every product in our portfolio is the result of rigorous scientific research, real-world farm trials, and a deep commitment to both animal health and environmental sustainability.
// // // //               </p>

// // // //               {/* Pillars */}
// // // //               <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
// // // //                 {[
// // // //                   { title: "GMP-Certified Manufacturing", desc: "All products manufactured under strict Good Manufacturing Practice standards.", color: "#38bdf8" },
// // // //                   { title: "Species-Specific Formulation", desc: "Tailored solutions for shrimp, finfish, crab, and other aquatic species.", color: "#60a5fa" },
// // // //                   { title: "Zero Environmental Harm", desc: "Eco-safe formulations with zero toxic residues in water or sediment.", color: "#34d399" },
// // // //                 ].map((p, i) => (
// // // //                   <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
// // // //                     <div style={{
// // // //                       width: "24px", height: "24px", borderRadius: "6px", flexShrink: 0, marginTop: "1px",
// // // //                       background: `${p.color}18`, border: `0.5px solid ${p.color}44`,
// // // //                       display: "flex", alignItems: "center", justifyContent: "center",
// // // //                       color: p.color, fontSize: "12px", fontWeight: 700,
// // // //                     }}>✓</div>
// // // //                     <div>
// // // //                       <div style={{ fontSize: "14px", fontWeight: 600, color: "#f0f9ff", marginBottom: "3px" }}>{p.title}</div>
// // // //                       <div style={{ fontSize: "13px", color: "rgba(240,249,255,0.45)", lineHeight: 1.6 }}>{p.desc}</div>
// // // //                     </div>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>

// // // //               <div style={{ display: "flex", gap: "12px" }}>
// // // //                 <button className="section-cta">Our Story</button>
// // // //                 <button className="section-cta-outline">Download Brochure</button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           PRODUCTS
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <section style={{ background: "linear-gradient(160deg, #060f1e 0%, #0a1a36 100%)", padding: "120px 0" }} ref={productsSection.ref}>
// // // //         <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 52px" }}>
// // // //           <div style={{
// // // //             display: "flex", justifyContent: "space-between", alignItems: "flex-end",
// // // //             marginBottom: "56px", flexWrap: "wrap", gap: "24px",
// // // //           }}>
// // // //             <div style={{ opacity: productsSection.inView ? 1 : 0, animation: productsSection.inView ? "riseUp 0.7s ease both" : "none" }}>
// // // //               <div style={{ fontSize: "11px", fontWeight: 600, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "14px" }}>
// // // //                 Product Suite
// // // //               </div>
// // // //               <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(30px,4vw,52px)", fontWeight: 700, color: "#f0f9ff", lineHeight: 1.1 }}>
// // // //                 Complete Health<br />
// // // //                 <span style={{ background: "linear-gradient(90deg,#38bdf8,#7dd3fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
// // // //                   Product Suite
// // // //                 </span>
// // // //               </h2>
// // // //             </div>
// // // //             <div style={{ opacity: productsSection.inView ? 1 : 0, animation: productsSection.inView ? "riseUp 0.7s 0.15s ease both" : "none" }}>
// // // //               <button className="section-cta-outline">View All Products →</button>
// // // //             </div>
// // // //           </div>

// // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "18px" }}>
// // // //             {products.map((p, i) => <ProductCard key={i} product={p} index={i} active={productsSection.inView} />)}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           VISUAL FEATURE SECTION
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <section style={{ background: "#030d1a", padding: "120px 0", position: "relative", overflow: "hidden" }}>
// // // //         {/* Diagonal background stripe */}
// // // //         <div style={{
// // // //           position: "absolute", inset: 0, pointerEvents: "none",
// // // //           background: "linear-gradient(160deg, rgba(29,78,216,0.04) 0%, transparent 50%, rgba(14,165,233,0.04) 100%)",
// // // //         }} />

// // // //         <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 52px" }}>
// // // //           <div style={{ textAlign: "center", marginBottom: "72px" }}>
// // // //             <div style={{ fontSize: "11px", fontWeight: 600, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "14px" }}>
// // // //               Why Choose Innovare
// // // //             </div>
// // // //             <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(30px,4vw,52px)", fontWeight: 700, color: "#f0f9ff", lineHeight: 1.1 }}>
// // // //               The Science Behind<br />
// // // //               <span style={{ background: "linear-gradient(90deg,#38bdf8,#7dd3fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
// // // //                 Every Drop
// // // //               </span>
// // // //             </h2>
// // // //           </div>

// // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
// // // //             {[
// // // //               { icon: "🔬", title: "20+ Years R&D", desc: "Two decades of dedicated aquaculture research, collaborating with marine biologists, veterinary scientists, and farm ecologists.", metric: "20+", metricLabel: "Years", color: "#38bdf8" },
// // // //               { icon: "🌿", title: "Eco-Safe Formulas", desc: "Every ingredient is evaluated for ecotoxicity. Zero residues in water, sediment, or food chain. Certified eco-safe by Bureau Veritas.", metric: "0", metricLabel: "Eco Residues", color: "#34d399" },
// // // //               { icon: "📈", title: "Measurable ROI", desc: "Farms using our full product suite report 25–40% yield improvement and significant reduction in disease-related losses within one season.", metric: "40%", metricLabel: "Yield Boost", color: "#60a5fa" },
// // // //               { icon: "🤝", title: "Farm-First Support", desc: "Dedicated technical consultants visit your farm, assess conditions, and customize product protocols for your specific species and setup.", metric: "500+", metricLabel: "Farms Helped", color: "#818cf8" },
// // // //               { icon: "🏆", title: "GMP Certified", desc: "Our manufacturing facility holds GMP certification and is regularly audited by OCV Certification Inc. for compliance and quality.", metric: "A+", metricLabel: "Audit Grade", color: "#f59e0b" },
// // // //               { icon: "🌊", title: "Species-Specific", desc: "Formulations tailored for shrimp (L. vannamei, P. monodon), finfish (tilapia, catla, rohu), crabs, and other aquatic species.", metric: "10+", metricLabel: "Species", color: "#38bdf8" },
// // // //             ].map((item, i) => (
// // // //               <div key={i} className="feature-tile" style={{
// // // //                 background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.07)",
// // // //                 borderRadius: "22px", padding: "32px 28px",
// // // //                 transition: "all 0.35s ease", cursor: "default",
// // // //                 position: "relative", overflow: "hidden",
// // // //               }}>
// // // //                 {/* Corner accent */}
// // // //                 <div style={{
// // // //                   position: "absolute", top: 0, right: 0,
// // // //                   width: "60px", height: "60px",
// // // //                   background: `radial-gradient(circle at top right, ${item.color}15, transparent 70%)`,
// // // //                 }} />
// // // //                 <div style={{ fontSize: "32px", marginBottom: "16px" }}>{item.icon}</div>
// // // //                 <h3 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "18px", fontWeight: 700, color: "#f0f9ff", marginBottom: "10px" }}>{item.title}</h3>
// // // //                 <p style={{ fontSize: "13px", color: "rgba(240,249,255,0.45)", lineHeight: 1.7, marginBottom: "20px" }}>{item.desc}</p>
// // // //                 <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
// // // //                   <span style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "28px", fontWeight: 700, color: item.color }}>{item.metric}</span>
// // // //                   <span style={{ fontSize: "11px", color: "rgba(240,249,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.metricLabel}</span>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           TESTIMONIALS
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <section style={{ background: "linear-gradient(160deg, #060f1e 0%, #0a1a36 100%)", padding: "120px 0" }} ref={testimonialsSection.ref}>
// // // //         <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 52px" }}>
// // // //           <div style={{ textAlign: "center", marginBottom: "60px" }}>
// // // //             <div style={{ fontSize: "11px", fontWeight: 600, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "14px" }}>
// // // //               What Farmers Say
// // // //             </div>
// // // //             <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(30px,4vw,52px)", fontWeight: 700, color: "#f0f9ff", lineHeight: 1.1 }}>
// // // //               Trusted by Farms<br />
// // // //               <span style={{ background: "linear-gradient(90deg,#38bdf8,#7dd3fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
// // // //                 Across India
// // // //               </span>
// // // //             </h2>
// // // //           </div>
// // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }}>
// // // //             {testimonials.map((t, i) => <TestimonialCard key={i} t={t} index={i} active={testimonialsSection.inView} />)}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           CERTIFICATIONS STRIP
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <section style={{ background: "#030d1a", padding: "72px 0", borderTop: "0.5px solid rgba(56,189,248,0.08)" }}>
// // // //         <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 52px" }}>
// // // //           <div style={{ textAlign: "center", marginBottom: "40px" }}>
// // // //             <div style={{ fontSize: "11px", fontWeight: 600, color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.14em" }}>
// // // //               Certifications & Compliance
// // // //             </div>
// // // //           </div>
// // // //           <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
// // // //             {[
// // // //               { label: "GMP Certified", sub: "OCV Certification Inc.", icon: "🏆" },
// // // //               { label: "ISO 9001:2015", sub: "Quality Management", icon: "✅" },
// // // //               { label: "ISO 14001", sub: "Environmental Mgmt", icon: "🌿" },
// // // //               { label: "Zero Liquid Discharge", sub: "ZLD Facility", icon: "💧" },
// // // //               { label: "Bureau Veritas", sub: "Independently Audited", icon: "🔍" },
// // // //               { label: "GSSI Aligned", sub: "Global Seafood Std.", icon: "🌊" },
// // // //             ].map((cert, i) => (
// // // //               <div key={i} className="cert-badge" style={{
// // // //                 background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(56,189,248,0.15)",
// // // //                 borderRadius: "16px", padding: "16px 20px",
// // // //                 display: "flex", alignItems: "center", gap: "12px",
// // // //                 transition: "all 0.3s ease", cursor: "default",
// // // //                 animation: `borderGlow 3s ${i * 0.4}s ease-in-out infinite`,
// // // //               }}>
// // // //                 <span style={{ fontSize: "24px" }}>{cert.icon}</span>
// // // //                 <div>
// // // //                   <div style={{ fontSize: "13px", fontWeight: 600, color: "#f0f9ff" }}>{cert.label}</div>
// // // //                   <div style={{ fontSize: "11px", color: "rgba(240,249,255,0.35)", marginTop: "2px" }}>{cert.sub}</div>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ══════════════════════════════════════════════════════════
// // // //           CTA BANNER
// // // //       ══════════════════════════════════════════════════════════ */}
// // // //       <section ref={ctaSection.ref} style={{
// // // //         background: "linear-gradient(135deg, #0c1a3a 0%, #1e3a8a 40%, #0e3a6e 70%, #0c1a3a 100%)",
// // // //         padding: "120px 52px", textAlign: "center",
// // // //         position: "relative", overflow: "hidden",
// // // //       }}>
// // // //         {/* Decorative rings */}
// // // //         {[400, 600, 800].map((sz, i) => (
// // // //           <div key={i} style={{
// // // //             position: "absolute", top: "50%", left: "50%",
// // // //             width: sz, height: sz, borderRadius: "50%",
// // // //             border: `0.5px solid rgba(56,189,248,${0.1 - i * 0.025})`,
// // // //             transform: "translate(-50%,-50%)", pointerEvents: "none",
// // // //             animation: i === 0 ? "rotateSlow 30s linear infinite" : i === 1 ? "rotateSlowReverse 45s linear infinite" : "none",
// // // //           }} />
// // // //         ))}

// // // //         {/* Glow */}
// // // //         <div style={{
// // // //           position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
// // // //           width: "600px", height: "300px",
// // // //           background: "radial-gradient(ellipse, rgba(14,165,233,0.12) 0%, transparent 70%)",
// // // //           pointerEvents: "none",
// // // //         }} />

// // // //         <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
// // // //           <div style={{
// // // //             fontSize: "40px", marginBottom: "20px",
// // // //             opacity: ctaSection.inView ? 1 : 0,
// // // //             animation: ctaSection.inView ? "riseUp 0.8s ease both" : "none",
// // // //           }}></div>

// // // //           <h2 style={{
// // // //             fontFamily: "'Clash Display',sans-serif",
// // // //             fontSize: "clamp(36px,5vw,64px)", fontWeight: 700, color: "#f0f9ff",
// // // //             lineHeight: 1.05, marginBottom: "20px",
// // // //             opacity: ctaSection.inView ? 1 : 0,
// // // //             animation: ctaSection.inView ? "riseUp 0.8s 0.1s ease both" : "none",
// // // //           }}>
// // // //             Ready to Transform<br />
// // // //             <span style={{ background: "linear-gradient(90deg,#38bdf8,#7dd3fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
// // // //               Your Farm's Health?
// // // //             </span>
// // // //           </h2>

// // // //           <p style={{
// // // //             fontSize: "16px", color: "rgba(240,249,255,0.55)", lineHeight: 1.8,
// // // //             marginBottom: "44px",
// // // //             opacity: ctaSection.inView ? 1 : 0,
// // // //             animation: ctaSection.inView ? "riseUp 0.8s 0.2s ease both" : "none",
// // // //           }}>
// // // //             Join 500+ aquaculture farms across India already using Innovare Biopharma products. Our team will assess your farm and recommend the right protocol — free of charge.
// // // //           </p>

// // // //           <div style={{
// // // //             display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap",
// // // //             opacity: ctaSection.inView ? 1 : 0,
// // // //             animation: ctaSection.inView ? "riseUp 0.8s 0.3s ease both" : "none",
// // // //           }}>
// // // //             <button className="hero-cta-primary">Get Free Farm Assessment</button>
// // // //             <button className="hero-cta-secondary">Download Product Catalog</button>
// // // //           </div>

// // // //           {/* Contact strip */}
// // // //           <div style={{
// // // //             display: "flex", gap: "32px", justifyContent: "center", flexWrap: "wrap",
// // // //             marginTop: "48px", paddingTop: "36px",
// // // //             borderTop: "0.5px solid rgba(56,189,248,0.12)",
// // // //             opacity: ctaSection.inView ? 1 : 0,
// // // //             animation: ctaSection.inView ? "riseUp 0.8s 0.45s ease both" : "none",
// // // //           }}>
// // // //             {[
// // // //               { icon: "📞", label: "+91-7799872555 " },
// // // //               { icon: "✉️", label: "info@innovarebiopharma.com" },
// // // //               { icon: "📍", label: "Hyderabad, Telangana" },
// // // //             ].map((c, i) => (
// // // //               <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(240,249,255,0.45)" }}>
// // // //                 <span style={{ fontSize: "16px" }}>{c.icon}</span>
// // // //                 {c.label}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //                 <Footer></Footer>

// // // //     </div>
// // // //   );
// // // // }
// // // "use client";

// // // import { useEffect, useRef, useState } from "react";

// // // // ─── Types ─────────────────────────────────────────────────────────────────────
// // // interface Particle  { x:number; y:number; vx:number; vy:number; size:number; opacity:number; hue:number; phase:number; }
// // // interface Caustic   { x:number; y:number; r:number; speed:number; phase:number; }
// // // interface Ray       { x:number; spread:number; tilt:number; intensity:number; phase:number; }
// // // interface Fish      { x:number; y:number; vx:number; vy:number; size:number; hue:number; phase:number; tail:number; flip:boolean; }
// // // interface Shrimp    { x:number; y:number; vx:number; vy:number; size:number; phase:number; legPhase:number; flip:boolean; }
// // // interface Seagrass  { x:number; height:number; segments:number; phase:number; hue:number; sway:number; }
// // // interface Coral     { x:number; y:number; type:number; size:number; hue:number; branches:number; }
// // // interface Plankton  { x:number; y:number; r:number; phase:number; hue:number; opacity:number; }
// // // interface Jellyfish { x:number; y:number; r:number; phase:number; hue:number; vy:number; }

// // // // ─── Main Aquafield Canvas ─────────────────────────────────────────────────────
// // // export function AquafieldCanvas() {
// // //   const canvasRef = useRef<HTMLCanvasElement>(null);

// // //   useEffect(() => {
// // //     const canvas = canvasRef.current;
// // //     if (!canvas) return;
// // //     const ctx = canvas.getContext("2d");
// // //     if (!ctx) return;

// // //     let raf: number;
// // //     let W = 0, H = 0, t = 0;

// // //     let particles:  Particle[]  = [];
// // //     let caustics:   Caustic[]   = [];
// // //     let rays:       Ray[]       = [];
// // //     let fishes:     Fish[]      = [];
// // //     let shrimps:    Shrimp[]    = [];
// // //     let seagrasses: Seagrass[]  = [];
// // //     let corals:     Coral[]     = [];
// // //     let planktons:  Plankton[]  = [];
// // //     let jellies:    Jellyfish[] = [];

// // //     const init = () => {
// // //       const dpr = window.devicePixelRatio || 1;
// // //       W = canvas.offsetWidth;
// // //       H = canvas.offsetHeight;
// // //       canvas.width  = W * dpr;
// // //       canvas.height = H * dpr;
// // //       ctx.setTransform(1,0,0,1,0,0);
// // //       ctx.scale(dpr, dpr);

// // //       particles = Array.from({ length: 90 }, () => ({
// // //         x: Math.random() * W, y: Math.random() * H,
// // //         vx: (Math.random()-0.5)*0.2, vy: -(0.12 + Math.random()*0.45),
// // //         size: 0.7 + Math.random()*2.5, opacity: 0.06 + Math.random()*0.42,
// // //         hue: 190 + Math.random()*35, phase: Math.random()*Math.PI*2,
// // //       }));

// // //       caustics = Array.from({ length: 20 }, () => ({
// // //         x: Math.random()*W, y: Math.random()*H*0.6,
// // //         r: 20+Math.random()*85, speed: 0.002+Math.random()*0.006,
// // //         phase: Math.random()*Math.PI*2,
// // //       }));

// // //       rays = Array.from({ length: 10 }, (_, i) => ({
// // //         x: W*(0.05 + (i/9)*0.9),
// // //         spread: 0.035+Math.random()*0.038,
// // //         tilt: (Math.random()-0.5)*0.1,
// // //         intensity: 0.01+Math.random()*0.013,
// // //         phase: Math.random()*Math.PI*2,
// // //       }));

// // //       // Fish school
// // //       fishes = Array.from({ length: 14 }, (_, i) => ({
// // //         x: Math.random()*W, y: H*0.15 + Math.random()*H*0.55,
// // //         vx: (Math.random()<0.5?-1:1)*(0.5+Math.random()*1.2),
// // //         vy: (Math.random()-0.5)*0.25,
// // //         size: 10 + Math.random()*18,
// // //         hue: 185+Math.random()*40,
// // //         phase: Math.random()*Math.PI*2,
// // //         tail: 0, flip: Math.random()<0.5,
// // //       }));

// // //       // Shrimp
// // //       shrimps = Array.from({ length: 6 }, () => ({
// // //         x: Math.random()*W, y: H*0.6 + Math.random()*H*0.32,
// // //         vx: (Math.random()<0.5?-1:1)*(0.2+Math.random()*0.5),
// // //         vy: (Math.random()-0.5)*0.1,
// // //         size: 14+Math.random()*12,
// // //         phase: Math.random()*Math.PI*2,
// // //         legPhase: Math.random()*Math.PI*2,
// // //         flip: Math.random()<0.5,
// // //       }));

// // //       // Seagrass on bottom
// // //       seagrasses = Array.from({ length: 28 }, (_, i) => ({
// // //         x: (i/(27))*W*1.1 - W*0.05 + (Math.random()-0.5)*40,
// // //         height: 55+Math.random()*110,
// // //         segments: 6+Math.floor(Math.random()*5),
// // //         phase: Math.random()*Math.PI*2,
// // //         hue: 125+Math.random()*40,
// // //         sway: 0.6+Math.random()*1.2,
// // //       }));

// // //       // Coral formations
// // //       corals = Array.from({ length: 8 }, (_, i) => ({
// // //         x: (i/7)*W*1.05 - W*0.03,
// // //         y: H,
// // //         type: Math.floor(Math.random()*3),
// // //         size: 22+Math.random()*40,
// // //         hue: [355,15,200,275,165,30][Math.floor(Math.random()*6)],
// // //         branches: 3+Math.floor(Math.random()*5),
// // //       }));

// // //       // Plankton glow
// // //       planktons = Array.from({ length: 40 }, () => ({
// // //         x: Math.random()*W, y: Math.random()*H,
// // //         r: 2+Math.random()*5,
// // //         phase: Math.random()*Math.PI*2,
// // //         hue: 170+Math.random()*60,
// // //         opacity: 0.04+Math.random()*0.18,
// // //       }));

// // //       // Jellyfish
// // //       jellies = Array.from({ length: 3 }, (_, i) => ({
// // //         x: W*(0.15+i*0.35), y: H*0.1+Math.random()*H*0.4,
// // //         r: 22+Math.random()*28,
// // //         phase: i*1.4+Math.random(),
// // //         hue: 170+Math.random()*80,
// // //         vy: -(0.08+Math.random()*0.12),
// // //       }));
// // //     };

// // //     const ro = new ResizeObserver(() => init());
// // //     ro.observe(canvas);
// // //     init();

// // //     // ── Draw layers ──────────────────────────────────────────────────────────────

// // //     const drawBackground = () => {
// // //       const g = ctx.createLinearGradient(0,0,0,H);
// // //       g.addColorStop(0.00, "#020912");
// // //       g.addColorStop(0.22, "#030d1c");
// // //       g.addColorStop(0.55, "#041328");
// // //       g.addColorStop(0.82, "#051830");
// // //       g.addColorStop(1.00, "#030f22");
// // //       ctx.fillStyle = g;
// // //       ctx.fillRect(0,0,W,H);
// // //     };

// // //     const drawAmbientGlow = () => {
// // //       [
// // //         { cx:W*0.15, cy:H*0.28, r:W*0.38, c:"rgba(29,78,216,0.055)"  },
// // //         { cx:W*0.82, cy:H*0.48, r:W*0.35, c:"rgba(14,165,233,0.045)" },
// // //         { cx:W*0.50, cy:H*0.82, r:W*0.48, c:"rgba(56,189,248,0.030)" },
// // //       ].forEach(({cx,cy,r,c}) => {
// // //         const g = ctx.createRadialGradient(cx,cy,0,cx,cy,r);
// // //         g.addColorStop(0,c); g.addColorStop(1,"rgba(0,0,0,0)");
// // //         ctx.fillStyle = g; ctx.fillRect(0,0,W,H);
// // //       });
// // //     };

// // //     const drawGridTexture = () => {
// // //       ctx.save();
// // //       ctx.globalAlpha = 0.022;
// // //       ctx.strokeStyle = "#38bdf8";
// // //       ctx.lineWidth = 0.4;
// // //       const gridY = H*0.62;
// // //       // Converging perspective lines
// // //       for (let i=-14; i<=14; i++) {
// // //         ctx.beginPath();
// // //         ctx.moveTo(W*0.5, gridY);
// // //         ctx.lineTo(W*0.5 + i*(W/12), H);
// // //         ctx.stroke();
// // //       }
// // //       for (let j=0;j<8;j++) {
// // //         const fy = gridY + (H-gridY)*Math.pow(j/7,1.8);
// // //         ctx.beginPath(); ctx.moveTo(0,fy); ctx.lineTo(W,fy); ctx.stroke();
// // //       }
// // //       ctx.restore();
// // //     };

// // //     const drawGodRays = () => {
// // //       rays.forEach(ray => {
// // //         const flicker = 0.65+0.35*Math.sin(t*1.9+ray.phase);
// // //         const spread  = ray.spread+Math.sin(t*0.55+ray.phase)*0.012;
// // //         const alpha   = ray.intensity * flicker;
// // //         ctx.save();
// // //         ctx.translate(ray.x + Math.sin(t*0.38+ray.phase)*20, 0);
// // //         const g = ctx.createLinearGradient(0,0,0,H*0.88);
// // //         g.addColorStop(0.00, `rgba(125,211,252,${alpha*2.6})`);
// // //         g.addColorStop(0.15, `rgba(56,189,248,${alpha*1.5})`);
// // //         g.addColorStop(0.50, `rgba(14,165,233,${alpha*0.6})`);
// // //         g.addColorStop(1.00, "rgba(14,165,233,0)");
// // //         const hTop=5, hBot=H*0.88*Math.tan(spread)+hTop;
// // //         const toff=H*0.88*Math.tan(ray.tilt+Math.sin(t*0.28+ray.phase)*0.022);
// // //         ctx.beginPath();
// // //         ctx.moveTo(-hTop,0); ctx.lineTo(hTop,0);
// // //         ctx.lineTo(hBot+toff,H*0.88); ctx.lineTo(-hBot+toff,H*0.88);
// // //         ctx.closePath(); ctx.fillStyle=g; ctx.fill();
// // //         ctx.restore();
// // //       });
// // //     };

// // //     const drawCaustics = () => {
// // //       caustics.forEach(c => {
// // //         const ph = c.phase + t*c.speed;
// // //         const cx = c.x + Math.sin(ph)*42 + Math.cos(ph*0.6)*16;
// // //         const cy = c.y + Math.cos(ph*0.7)*20;
// // //         const flicker = 0.35+0.65*Math.sin(t*4.8+c.phase*3.9);
// // //         ctx.save();
// // //         ctx.globalAlpha = (0.012+flicker*0.026);
// // //         for (let j=0;j<3;j++) {
// // //           const ox=Math.sin(ph+j*2.09)*c.r*0.38, oy=Math.cos(ph*0.85+j*1.57)*c.r*0.22;
// // //           ctx.beginPath();
// // //           ctx.ellipse(cx+ox,cy+oy,c.r*(0.27+Math.abs(Math.sin(ph+j))*0.1),c.r*(0.13+Math.abs(Math.cos(ph+j))*0.06),ph*0.45+j,0,Math.PI*2);
// // //           ctx.strokeStyle="rgba(125,211,252,0.9)";
// // //           ctx.lineWidth=0.7; ctx.stroke();
// // //         }
// // //         ctx.restore();
// // //       });
// // //     };

// // //     const drawPlankton = () => {
// // //       planktons.forEach(p => {
// // //         p.phase += 0.012;
// // //         p.x += Math.sin(p.phase*0.4)*0.18;
// // //         p.y += Math.cos(p.phase*0.3)*0.12 - 0.05;
// // //         if (p.y < -10) { p.y = H+5; p.x = Math.random()*W; }
// // //         const glow = 0.4+0.6*Math.sin(p.phase*3.2);
// // //         ctx.save();
// // //         ctx.globalAlpha = p.opacity*glow;
// // //         const rg = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*2);
// // //         rg.addColorStop(0,`hsla(${p.hue},85%,72%,1)`);
// // //         rg.addColorStop(1,`hsla(${p.hue},70%,55%,0)`);
// // //         ctx.fillStyle=rg;
// // //         ctx.beginPath(); ctx.arc(p.x,p.y,p.r*2,0,Math.PI*2); ctx.fill();
// // //         ctx.restore();
// // //       });
// // //     };

// // //     // ── Seagrass ─────────────────────────────────────────────────────────────────
// // //     const drawSeagrass = () => {
// // //       seagrasses.forEach(sg => {
// // //         const baseX = sg.x;
// // //         const baseY = H;
// // //         const segH  = sg.height / sg.segments;
// // //         ctx.save();
// // //         ctx.strokeStyle = `hsla(${sg.hue},65%,38%,0.75)`;
// // //         ctx.lineWidth = 2.2;
// // //         ctx.lineCap = "round";

// // //         // Each blade
// // //         for (let b=-1; b<=1; b+=2) {
// // //           ctx.beginPath();
// // //           let px = baseX + b*4, py = baseY;
// // //           ctx.moveTo(px, py);
// // //           for (let s=0;s<sg.segments;s++) {
// // //             const frac = (s+1)/sg.segments;
// // //             const sway = Math.sin(t*sg.sway + sg.phase + s*0.4) * frac * frac * 18;
// // //             const nx = px + b*2 + sway;
// // //             const ny = py - segH;
// // //             ctx.quadraticCurveTo(px + b*4 + sway*0.5, py - segH*0.5, nx, ny);
// // //             px = nx; py = ny;
// // //           }
// // //           ctx.stroke();

// // //           // Leaf tip glow
// // //           ctx.save();
// // //           ctx.globalAlpha=0.35;
// // //           const tg = ctx.createRadialGradient(px,py,0,px,py,5);
// // //           tg.addColorStop(0,`hsla(${sg.hue+20},80%,65%,0.8)`);
// // //           tg.addColorStop(1,`hsla(${sg.hue},70%,50%,0)`);
// // //           ctx.fillStyle=tg;
// // //           ctx.beginPath(); ctx.arc(px,py,5,0,Math.PI*2); ctx.fill();
// // //           ctx.restore();
// // //         }
// // //         ctx.restore();
// // //       });
// // //     };

// // //     // ── Coral ────────────────────────────────────────────────────────────────────
// // //     const drawCoral = () => {
// // //       corals.forEach(c => {
// // //         ctx.save();
// // //         ctx.translate(c.x, c.y);

// // //         if (c.type === 0) {
// // //           // Branch coral
// // //           const drawBranch = (x:number, y:number, angle:number, len:number, depth:number) => {
// // //             if (depth===0||len<4) return;
// // //             const ex = x + Math.cos(angle)*len;
// // //             const ey = y + Math.sin(angle)*len;
// // //             ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(ex,ey);
// // //             ctx.strokeStyle = `hsla(${c.hue},${55+depth*8}%,${35+depth*7}%,${0.5+depth*0.1})`;
// // //             ctx.lineWidth = depth*1.4;
// // //             ctx.stroke();
// // //             // Tip glow
// // //             if (depth===1) {
// // //               ctx.save();
// // //               ctx.globalAlpha=0.5;
// // //               const tg=ctx.createRadialGradient(ex,ey,0,ex,ey,5);
// // //               tg.addColorStop(0,`hsla(${c.hue+20},90%,75%,0.9)`);
// // //               tg.addColorStop(1,"rgba(0,0,0,0)");
// // //               ctx.fillStyle=tg;
// // //               ctx.beginPath(); ctx.arc(ex,ey,5,0,Math.PI*2); ctx.fill();
// // //               ctx.restore();
// // //             }
// // //             const sway = Math.sin(t*0.5+c.x)*0.08;
// // //             drawBranch(ex,ey,angle-0.5+sway,len*0.68,depth-1);
// // //             drawBranch(ex,ey,angle+0.42+sway,len*0.65,depth-1);
// // //             if (depth>2) drawBranch(ex,ey,angle+sway*0.5,len*0.6,depth-2);
// // //           };
// // //           drawBranch(0,0,-Math.PI/2,c.size,c.branches-1);

// // //         } else if (c.type === 1) {
// // //           // Fan/plate coral
// // //           for (let i=0;i<c.branches;i++) {
// // //             const ang = -Math.PI + (i/c.branches)*Math.PI*2;
// // //             const r   = c.size*(0.6+0.4*Math.sin(ang*2));
// // //             const ex  = Math.cos(ang)*r, ey = Math.sin(ang)*r*0.4;
// // //             ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(ex,ey);
// // //             ctx.strokeStyle=`hsla(${c.hue},60%,45%,0.55)`;
// // //             ctx.lineWidth=2.5; ctx.stroke();
// // //           }
// // //           // Center glow
// // //           const cg=ctx.createRadialGradient(0,0,0,0,0,c.size*0.5);
// // //           cg.addColorStop(0,`hsla(${c.hue},70%,65%,0.25)`);
// // //           cg.addColorStop(1,`hsla(${c.hue},60%,45%,0)`);
// // //           ctx.fillStyle=cg; ctx.beginPath(); ctx.arc(0,0,c.size*0.5,0,Math.PI*2); ctx.fill();

// // //         } else {
// // //           // Bubble coral / anemone
// // //           for (let i=0;i<c.branches+4;i++) {
// // //             const ang = (i/(c.branches+4))*Math.PI*2;
// // //             const r   = c.size*(0.4+0.3*Math.sin(ang*2.5));
// // //             const bx  = Math.cos(ang)*r*0.8, by = Math.sin(ang)*r*0.5;
// // //             const br  = 5+3*Math.sin(ang*3);
// // //             const bg=ctx.createRadialGradient(bx,by-br*0.3,0,bx,by,br);
// // //             bg.addColorStop(0,`hsla(${c.hue},75%,70%,0.45)`);
// // //             bg.addColorStop(1,`hsla(${c.hue},60%,45%,0)`);
// // //             ctx.fillStyle=bg; ctx.beginPath(); ctx.arc(bx,by,br,0,Math.PI*2); ctx.fill();
// // //           }
// // //         }
// // //         ctx.restore();
// // //       });
// // //     };

// // //     // ── Jellyfish ─────────────────────────────────────────────────────────────────
// // //     const drawJellyfish = () => {
// // //       jellies.forEach(j => {
// // //         j.phase += 0.018;
// // //         j.y += j.vy + Math.sin(j.phase)*0.06;
// // //         j.x += Math.sin(j.phase*0.4)*0.3;
// // //         if (j.y < -80) { j.y = H+40; j.x=Math.random()*W; }

// // //         const pulse = 0.82 + 0.18*Math.sin(j.phase*2.2);
// // //         ctx.save();

// // //         // Outer glow
// // //         const og=ctx.createRadialGradient(j.x,j.y,0,j.x,j.y,j.r*pulse*2.5);
// // //         og.addColorStop(0,`hsla(${j.hue},80%,65%,0.08)`);
// // //         og.addColorStop(1,"rgba(0,0,0,0)");
// // //         ctx.fillStyle=og; ctx.fillRect(0,0,W,H);

// // //         // Bell body
// // //         ctx.globalAlpha=0.55;
// // //         const bg=ctx.createRadialGradient(j.x,j.y-j.r*0.1*pulse,0,j.x,j.y,j.r*pulse);
// // //         bg.addColorStop(0,`hsla(${j.hue},80%,80%,0.6)`);
// // //         bg.addColorStop(0.5,`hsla(${j.hue},70%,60%,0.3)`);
// // //         bg.addColorStop(1,`hsla(${j.hue},60%,50%,0)`);
// // //         ctx.fillStyle=bg;
// // //         ctx.beginPath();
// // //         ctx.ellipse(j.x,j.y,j.r*pulse,j.r*pulse*0.62,0,Math.PI,Math.PI*2);
// // //         ctx.fill();

// // //         // Inner organs
// // //         ctx.globalAlpha=0.3;
// // //         const ig=ctx.createRadialGradient(j.x,j.y,0,j.x,j.y,j.r*pulse*0.5);
// // //         ig.addColorStop(0,`hsla(${j.hue+30},90%,85%,0.7)`);
// // //         ig.addColorStop(1,`hsla(${j.hue},70%,60%,0)`);
// // //         ctx.fillStyle=ig;
// // //         ctx.beginPath();
// // //         ctx.ellipse(j.x,j.y,j.r*pulse*0.45,j.r*pulse*0.3,0,Math.PI,Math.PI*2);
// // //         ctx.fill();

// // //         // Tentacles
// // //         ctx.globalAlpha=0.22;
// // //         for (let k=0;k<8;k++) {
// // //           const tx = j.x + (k-3.5)*j.r*pulse*0.22;
// // //           const len = j.r*(1.5+0.8*(k%3));
// // //           ctx.beginPath();
// // //           ctx.moveTo(tx, j.y);
// // //           ctx.bezierCurveTo(
// // //             tx+Math.sin(j.phase+k*0.8)*16, j.y+len*0.33,
// // //             tx-Math.sin(j.phase*1.3+k)*12, j.y+len*0.66,
// // //             tx+Math.sin(j.phase*0.7+k*1.3)*8, j.y+len
// // //           );
// // //           ctx.strokeStyle=`hsla(${j.hue},75%,75%,1)`;
// // //           ctx.lineWidth=0.8; ctx.stroke();
// // //         }
// // //         ctx.restore();
// // //       });
// // //     };

// // //     // ── Fish ─────────────────────────────────────────────────────────────────────
// // //     const drawFish = () => {
// // //       fishes.forEach(f => {
// // //         f.tail += 0.12;
// // //         f.x += f.vx;
// // //         f.y += f.vy + Math.sin(f.phase + t*0.4)*0.15;
// // //         f.phase += 0.008;

// // //         // School steering — gently follow center
// // //         const cx = fishes.reduce((s,ff)=>s+ff.x,0)/fishes.length;
// // //         const cy = fishes.reduce((s,ff)=>s+ff.y,0)/fishes.length;
// // //         f.vx += (cx-f.x)*0.0003 + (Math.random()-0.5)*0.04;
// // //         f.vy += (cy-f.y)*0.0003 + (Math.random()-0.5)*0.02;
// // //         f.vx = Math.max(-2, Math.min(2, f.vx));
// // //         f.vy = Math.max(-0.8, Math.min(0.8, f.vy));
// // //         f.flip = f.vx < 0;

// // //         // Wrap
// // //         if (f.x > W+30) f.x = -30;
// // //         if (f.x < -30) f.x = W+30;
// // //         f.y = Math.max(H*0.08, Math.min(H*0.78, f.y));

// // //         ctx.save();
// // //         ctx.translate(f.x, f.y);
// // //         ctx.scale(f.flip?-1:1, 1);

// // //         const speed = Math.abs(f.vx);
// // //         const tailSwing = Math.sin(f.tail) * (8+speed*4);

// // //         // Body glow
// // //         ctx.globalAlpha=0.12;
// // //         const glow=ctx.createRadialGradient(0,0,0,0,0,f.size*2.2);
// // //         glow.addColorStop(0,`hsla(${f.hue},80%,70%,0.5)`);
// // //         glow.addColorStop(1,"rgba(0,0,0,0)");
// // //         ctx.fillStyle=glow; ctx.fillRect(-f.size*2.5,-f.size*2.5,f.size*5,f.size*5);

// // //         // Tail
// // //         ctx.globalAlpha=0.7;
// // //         ctx.fillStyle=`hsla(${f.hue},70%,58%,0.8)`;
// // //         ctx.beginPath();
// // //         ctx.moveTo(-f.size*0.9, tailSwing*0.3);
// // //         ctx.lineTo(-f.size*1.8, tailSwing+f.size*0.6);
// // //         ctx.lineTo(-f.size*1.8, tailSwing-f.size*0.6);
// // //         ctx.closePath(); ctx.fill();

// // //         // Body
// // //         ctx.globalAlpha=0.85;
// // //         const bg=ctx.createLinearGradient(-f.size,0,f.size,0);
// // //         bg.addColorStop(0,`hsla(${f.hue},70%,48%,0.9)`);
// // //         bg.addColorStop(0.5,`hsla(${f.hue+15},80%,65%,0.95)`);
// // //         bg.addColorStop(1,`hsla(${f.hue},65%,45%,0.8)`);
// // //         ctx.fillStyle=bg;
// // //         ctx.beginPath();
// // //         ctx.ellipse(0, 0, f.size*1.05, f.size*0.42, 0, 0, Math.PI*2);
// // //         ctx.fill();

// // //         // Belly shine
// // //         ctx.globalAlpha=0.3;
// // //         ctx.fillStyle=`rgba(255,255,255,0.4)`;
// // //         ctx.beginPath();
// // //         ctx.ellipse(f.size*0.1,-f.size*0.1,f.size*0.5,f.size*0.18,0,0,Math.PI*2);
// // //         ctx.fill();

// // //         // Dorsal fin
// // //         ctx.globalAlpha=0.6;
// // //         ctx.fillStyle=`hsla(${f.hue},65%,50%,0.7)`;
// // //         ctx.beginPath();
// // //         ctx.moveTo(0,-f.size*0.42);
// // //         ctx.quadraticCurveTo(0,-f.size*0.85,f.size*0.5,-f.size*0.42);
// // //         ctx.closePath(); ctx.fill();

// // //         // Eye
// // //         ctx.globalAlpha=1;
// // //         ctx.fillStyle="#fff";
// // //         ctx.beginPath(); ctx.arc(f.size*0.7,-f.size*0.06,f.size*0.13,0,Math.PI*2); ctx.fill();
// // //         ctx.fillStyle="#0a1628";
// // //         ctx.beginPath(); ctx.arc(f.size*0.72,-f.size*0.06,f.size*0.07,0,Math.PI*2); ctx.fill();
// // //         // Eye shine
// // //         ctx.fillStyle="rgba(255,255,255,0.8)";
// // //         ctx.beginPath(); ctx.arc(f.size*0.74,-f.size*0.09,f.size*0.03,0,Math.PI*2); ctx.fill();

// // //         // Scale pattern
// // //         ctx.globalAlpha=0.15;
// // //         ctx.strokeStyle=`hsla(${f.hue+20},80%,80%,0.6)`;
// // //         ctx.lineWidth=0.5;
// // //         for (let s=0;s<3;s++) {
// // //           ctx.beginPath();
// // //           ctx.arc(-f.size*0.2+s*f.size*0.35, 0, f.size*0.35, -Math.PI*0.6, Math.PI*0.6);
// // //           ctx.stroke();
// // //         }

// // //         ctx.restore();
// // //       });
// // //     };

// // //     // ── Shrimp ───────────────────────────────────────────────────────────────────
// // //     const drawShrimp = () => {
// // //       shrimps.forEach(s => {
// // //         s.phase    += 0.02;
// // //         s.legPhase += 0.08;
// // //         s.x += s.vx + Math.sin(s.phase*0.7)*0.12;
// // //         s.y += s.vy + Math.sin(s.phase*0.5)*0.08;
// // //         if (s.x > W+40) { s.x=-40; s.flip=false; }
// // //         if (s.x < -40)  { s.x=W+40; s.flip=true;  }
// // //         s.y = Math.max(H*0.55, Math.min(H*0.92, s.y));

// // //         ctx.save();
// // //         ctx.translate(s.x, s.y);
// // //         ctx.scale(s.flip?-1:1, 1);

// // //         const bodyBend = Math.sin(s.phase)*0.18;
// // //         const sc = s.size/26;

// // //         // Glow
// // //         ctx.globalAlpha=0.1;
// // //         const glow=ctx.createRadialGradient(0,0,0,0,0,s.size*1.5);
// // //         glow.addColorStop(0,"rgba(255,150,100,0.4)");
// // //         glow.addColorStop(1,"rgba(0,0,0,0)");
// // //         ctx.fillStyle=glow; ctx.fillRect(-s.size*2,-s.size*2,s.size*4,s.size*4);

// // //         // Tail fan
// // //         ctx.globalAlpha=0.65;
// // //         for (let i=-2;i<=2;i++) {
// // //           const fa = bodyBend + i*0.28;
// // //           ctx.fillStyle=`hsla(15,65%,55%,0.7)`;
// // //           ctx.beginPath();
// // //           ctx.moveTo(-18*sc,5*sc);
// // //           ctx.lineTo(-18*sc-Math.cos(fa)*10*sc, 5*sc+Math.sin(fa)*12*sc);
// // //           ctx.lineTo(-18*sc-Math.cos(fa)*10*sc+4*sc, 5*sc+Math.sin(fa)*12*sc);
// // //           ctx.closePath(); ctx.fill();
// // //         }

// // //         // Body segments (6)
// // //         for (let seg=0;seg<6;seg++) {
// // //           const bx = -14*sc + seg*5*sc + Math.sin(bodyBend + seg*0.5)*seg*1.5*sc;
// // //           const by = Math.sin(bodyBend + seg*0.8)*2*sc;
// // //           const bw = (6-seg*0.6)*sc, bh = (4-seg*0.4)*sc;
// // //           ctx.globalAlpha=0.8;
// // //           const sg2=ctx.createLinearGradient(bx-bw,by-bh,bx+bw,by+bh);
// // //           sg2.addColorStop(0,"hsla(15,70%,65%,0.9)");
// // //           sg2.addColorStop(1,"hsla(355,65%,52%,0.8)");
// // //           ctx.fillStyle=sg2;
// // //           ctx.beginPath(); ctx.ellipse(bx,by,bw,bh,bodyBend*0.3,0,Math.PI*2); ctx.fill();
// // //           // Segment line
// // //           ctx.globalAlpha=0.3;
// // //           ctx.strokeStyle="rgba(255,180,140,0.5)"; ctx.lineWidth=0.4;
// // //           ctx.beginPath(); ctx.moveTo(bx+bw,by-bh); ctx.lineTo(bx+bw,by+bh); ctx.stroke();
// // //         }

// // //         // Swimmerets/legs
// // //         ctx.globalAlpha=0.5;
// // //         for (let leg=0;leg<5;leg++) {
// // //           const lx = -8*sc + leg*4.5*sc;
// // //           const swing = Math.sin(s.legPhase + leg*0.9)*5*sc;
// // //           ctx.strokeStyle="hsla(15,60%,55%,0.6)"; ctx.lineWidth=0.7;
// // //           ctx.beginPath();
// // //           ctx.moveTo(lx, 3*sc);
// // //           ctx.lineTo(lx + swing*0.5, 3*sc + 8*sc);
// // //           ctx.stroke();
// // //         }

// // //         // Antennae
// // //         ctx.globalAlpha=0.55;
// // //         ctx.strokeStyle="hsla(15,60%,65%,0.7)"; ctx.lineWidth=0.6;
// // //         for (let a=-1;a<=1;a+=2) {
// // //           ctx.beginPath();
// // //           ctx.moveTo(16*sc, -2*sc);
// // //           ctx.quadraticCurveTo(22*sc+a*4*sc, -8*sc, 28*sc+a*8*sc+Math.sin(s.phase)*3*sc, -14*sc);
// // //           ctx.stroke();
// // //         }

// // //         // Rostrum (pointy head spike)
// // //         ctx.globalAlpha=0.75;
// // //         ctx.fillStyle="hsla(15,65%,62%,0.85)";
// // //         ctx.beginPath();
// // //         ctx.moveTo(14*sc,-1*sc); ctx.lineTo(20*sc,-3*sc); ctx.lineTo(14*sc,1*sc);
// // //         ctx.closePath(); ctx.fill();

// // //         // Eye
// // //         ctx.globalAlpha=1;
// // //         ctx.fillStyle="#1a0a05";
// // //         ctx.beginPath(); ctx.arc(15*sc,0,2*sc,0,Math.PI*2); ctx.fill();
// // //         ctx.fillStyle="rgba(255,255,255,0.7)";
// // //         ctx.beginPath(); ctx.arc(15.5*sc,-0.5*sc,0.7*sc,0,Math.PI*2); ctx.fill();

// // //         ctx.restore();
// // //       });
// // //     };

// // //     // ── Waves ────────────────────────────────────────────────────────────────────
// // //     const drawWaves = () => {
// // //       [
// // //         { yfrac:0.40, amp:24, kx:0.0040, speed:1.12, color:"rgba(56,189,248,0.072)"  },
// // //         { yfrac:0.52, amp:17, kx:0.0060, speed:0.76, color:"rgba(96,165,250,0.056)"  },
// // //         { yfrac:0.65, amp:12, kx:0.0078, speed:1.48, color:"rgba(125,211,252,0.042)" },
// // //         { yfrac:0.78, amp: 7, kx:0.0098, speed:0.58, color:"rgba(56,189,248,0.030)"  },
// // //       ].forEach(({ yfrac, amp, kx, speed, color }) => {
// // //         const baseY = H*yfrac;
// // //         ctx.beginPath(); ctx.moveTo(0,H);
// // //         for (let x=0;x<=W;x+=3) {
// // //           const y = baseY
// // //             + Math.sin(x*kx + t*speed)*amp
// // //             + Math.sin(x*kx*0.52 + t*speed*0.66 + 1.1)*amp*0.44
// // //             + Math.sin(x*kx*1.85 + t*speed*1.32 + 2.4)*amp*0.17;
// // //           ctx.lineTo(x,y);
// // //         }
// // //         ctx.lineTo(W,H); ctx.fillStyle=color; ctx.fill();
// // //       });
// // //     };

// // //     const drawParticles = () => {
// // //       particles.forEach(p => {
// // //         p.x += p.vx + Math.sin(t*0.6+p.phase)*0.11;
// // //         p.y += p.vy + Math.cos(t*0.4+p.phase*1.3)*0.05;
// // //         p.phase += 0.004;
// // //         if (p.y<-8) { p.y=H+4; p.x=Math.random()*W; }
// // //         if (p.x<-8) p.x=W+4; if (p.x>W+8) p.x=-4;
// // //         const pulse = 0.55+0.45*Math.sin(p.phase*7);
// // //         ctx.save();
// // //         ctx.globalAlpha = p.opacity*pulse;
// // //         const rg=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.size*2.2);
// // //         rg.addColorStop(0,`hsla(${p.hue},88%,78%,1)`);
// // //         rg.addColorStop(1,`hsla(${p.hue},70%,55%,0)`);
// // //         ctx.fillStyle=rg; ctx.beginPath(); ctx.arc(p.x,p.y,p.size*2.2,0,Math.PI*2); ctx.fill();
// // //         ctx.restore();
// // //       });
// // //     };

// // //     // ── Sand / seafloor ───────────────────────────────────────────────────────────
// // //     const drawSeafloor = () => {
// // //       const floorY = H*0.88;
// // //       const g = ctx.createLinearGradient(0,floorY,0,H);
// // //       g.addColorStop(0,"rgba(8,28,60,0.9)");
// // //       g.addColorStop(0.3,"rgba(6,22,48,0.95)");
// // //       g.addColorStop(1,"rgba(4,16,36,1)");
// // //       ctx.fillStyle=g;
// // //       ctx.beginPath(); ctx.moveTo(0,H);
// // //       for (let x=0;x<=W;x+=6) {
// // //         const y = floorY + Math.sin(x*0.012)*6 + Math.sin(x*0.028+1)*3;
// // //         ctx.lineTo(x,y);
// // //       }
// // //       ctx.lineTo(W,H); ctx.closePath(); ctx.fill();
// // //     };

// // //     // ── Main loop ────────────────────────────────────────────────────────────────
// // //     const loop = () => {
// // //       ctx.clearRect(0,0,W,H);
// // //       drawBackground();
// // //       drawAmbientGlow();
// // //       drawGridTexture();
// // //       drawGodRays();
// // //       drawCaustics();
// // //       drawPlankton();
// // //       drawJellyfish();
// // //       drawFish();
// // //       drawSeafloor();
// // //       drawCoral();
// // //       drawSeagrass();
// // //       drawShrimp();
// // //       drawWaves();
// // //       drawParticles();
// // //       t += 0.011;
// // //       raf = requestAnimationFrame(loop);
// // //     };

// // //     loop();
// // //     return () => { cancelAnimationFrame(raf); ro.disconnect(); };
// // //   }, []);

// // //   return (
// // //     <canvas ref={canvasRef} style={{
// // //       position:"absolute", inset:0, width:"100%", height:"100%",
// // //       pointerEvents:"none", zIndex:0,
// // //     }}/>
// // //   );
// // // }

// // // // ─── Rotating word hook ────────────────────────────────────────────────────────
// // // function useRotatingWord(words: string[], interval = 2200) {
// // //   const [idx, setIdx] = useState(0);
// // //   useEffect(() => {
// // //     const id = setInterval(() => setIdx(i => (i+1)%words.length), interval);
// // //     return () => clearInterval(id);
// // //   }, [words.length, interval]);
// // //   return words[idx];
// // // }

// // // // ─── Scroll/parallax hook ─────────────────────────────────────────────────────
// // // function useScrollY() {
// // //   const [y, setY] = useState(0);
// // //   useEffect(() => {
// // //     const h = () => setY(window.scrollY);
// // //     window.addEventListener("scroll", h, { passive:true });
// // //     return () => window.removeEventListener("scroll", h);
// // //   }, []);
// // //   return y;
// // // }

// // // // ─── Hero Section ─────────────────────────────────────────────────────────────
// // // const ROTATING_WORDS = ["Healthier.", "Stronger.", "Smarter.", "Greener."];
// // // const WORD_COLORS   = ["#38bdf8", "#34d399", "#818cf8", "#4ade80"];

// // // export default function HeroSection() {
// // //   const word    = useRotatingWord(ROTATING_WORDS);
// // //   const wordIdx = ROTATING_WORDS.indexOf(word);
// // //   const scrollY = useScrollY();

// // //   const floatingCards = [
// // //     { icon:"🛡️", name:"AquaShield Pro",  stat:"95%", label:"Immunity boost",  color:"#38bdf8", delay:"0s",   dur:"4.2s" },
// // //     { icon:"🌊", name:"GillGuard Oxy",   stat:"40%", label:"O₂ absorption",    color:"#60a5fa", delay:"0.18s", dur:"5.0s" },
// // //     { icon:"⚡", name:"VitaGrow Marine", stat:"30%", label:"Faster growth",   color:"#34d399", delay:"0.36s", dur:"4.6s" },
// // //   ];

// // //   const trustBadges = [
// // //     { icon:"✓", label:"GMP Certified" },
// // //     { icon:"✓", label:"ISO 9001:2015" },
// // //     { icon:"✓", label:"Zero Toxicity" },
// // //     { icon:"✓", label:"Vet Approved"  },
// // //   ];

// // //   return (
// // //     <>
// // //       <style>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Satoshi:wght@300;400;500;700&display=swap');
// // //         *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
// // //         html { scroll-behavior:smooth; }

// // //         @keyframes riseUp   { from{opacity:0;transform:translateY(44px)} to{opacity:1;transform:translateY(0)} }
// // //         @keyframes floatY   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
// // //         @keyframes pulseDot { 0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(56,189,248,0.55)} 50%{transform:scale(1.12);box-shadow:0 0 0 10px rgba(56,189,248,0)} }
// // //         @keyframes shimmer  { 0%{background-position:-300% center} 100%{background-position:300% center} }
// // //         @keyframes wordIn   { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
// // //         @keyframes wordOut  { from{opacity:1;transform:translateY(0)} to{opacity:0;transform:translateY(-18px)} }
// // //         @keyframes scanLine { 0%{top:0;opacity:0.5} 100%{top:100%;opacity:0} }
// // //         @keyframes rotateSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
// // //         @keyframes rotateSlowRev { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
// // //         @keyframes orbDot   { 0%,100%{opacity:0.5} 50%{opacity:1} }

// // //         .hero-cta-primary {
// // //           background:linear-gradient(135deg,#1d4ed8 0%,#0ea5e9 100%);
// // //           color:#fff; border:none; padding:16px 40px; border-radius:50px;
// // //           font-size:15px; font-weight:700; cursor:pointer;
// // //           font-family:'Satoshi',sans-serif; letter-spacing:0.02em;
// // //           box-shadow:0 8px 32px rgba(14,165,233,0.45),0 0 0 1px rgba(56,189,248,0.2);
// // //           transition:all 0.35s cubic-bezier(0.34,1.4,0.64,1); position:relative; overflow:hidden;
// // //         }
// // //         .hero-cta-primary::after {
// // //           content:''; position:absolute; inset:0;
// // //           background:linear-gradient(135deg,rgba(255,255,255,0.15) 0%,transparent 60%);
// // //           border-radius:50px;
// // //         }
// // //         .hero-cta-primary:hover { transform:translateY(-4px) scale(1.04); box-shadow:0 20px 56px rgba(14,165,233,0.6),0 0 0 1px rgba(56,189,248,0.4); }

// // //         .hero-cta-secondary {
// // //           background:rgba(255,255,255,0.05); color:#bae6fd;
// // //           border:1px solid rgba(255,255,255,0.15); padding:16px 40px;
// // //           border-radius:50px; font-size:15px; font-weight:500; cursor:pointer;
// // //           font-family:'Satoshi',sans-serif; transition:all 0.3s ease;
// // //           backdrop-filter:blur(8px);
// // //         }
// // //         .hero-cta-secondary:hover { background:rgba(56,189,248,0.1); border-color:rgba(56,189,248,0.45); transform:translateY(-3px); }

// // //         .floating-card { transition:transform 0.3s ease, box-shadow 0.3s ease; }
// // //         .floating-card:hover { transform:translateX(-6px) !important; box-shadow:0 16px 48px rgba(0,0,0,0.5) !important; }

// // //         @media (max-width:900px) {
// // //           .hero-right { display:none !important; }
// // //           .hero-content { max-width:100% !important; }
// // //         }
// // //       `}</style>

// // //       <section style={{
// // //         minHeight:"100vh",
// // //         background:"linear-gradient(160deg,#020912 0%,#030d1c 30%,#041328 60%,#061840 100%)",
// // //         position:"relative", overflow:"hidden",
// // //         display:"flex", flexDirection:"column",
// // //         fontFamily:"'Satoshi','Segoe UI',sans-serif",
// // //       }}>
// // //         {/* ── Aquafield canvas background ── */}
// // //         <AquafieldCanvas />

// // //         {/* ── Grid overlay ── */}
// // //         <div style={{
// // //           position:"absolute", inset:0, pointerEvents:"none", zIndex:1,
// // //           backgroundImage:"linear-gradient(rgba(56,189,248,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.035) 1px,transparent 1px)",
// // //           backgroundSize:"80px 80px",
// // //         }}/>

// // //         {/* ── Mouse-reactive glow mesh ── */}
// // //         <div style={{
// // //           position:"absolute", inset:0, pointerEvents:"none", zIndex:1,
// // //           background:`
// // //             radial-gradient(ellipse 70% 55% at 20% 25%, rgba(29,78,216,0.1) 0%, transparent 60%),
// // //             radial-gradient(ellipse 50% 45% at 80% 15%, rgba(14,165,233,0.09) 0%, transparent 55%),
// // //             radial-gradient(ellipse 55% 40% at 55% 85%, rgba(56,189,248,0.06) 0%, transparent 50%)
// // //           `,
// // //         }}/>

// // //         {/* ── SVG Orbit rings (top right) ── */}
// // //         <svg style={{
// // //           position:"absolute", right:"-60px", top:"50%", transform:"translateY(-50%)",
// // //           width:"680px", height:"680px", opacity:0.1, pointerEvents:"none", zIndex:2,
// // //         }} viewBox="0 0 680 680">
// // //           <defs>
// // //             <linearGradient id="rg1" x1="0%" y1="0%" x2="100%" y2="100%">
// // //               <stop offset="0%" stopColor="#38bdf8"/>
// // //               <stop offset="100%" stopColor="#1d4ed8"/>
// // //             </linearGradient>
// // //           </defs>
// // //           <circle cx="340" cy="340" r="190" fill="none" stroke="url(#rg1)" strokeWidth="0.7" strokeDasharray="7 5"
// // //             style={{ animation:"rotateSlow 28s linear infinite", transformOrigin:"340px 340px" }}/>
// // //           <circle cx="340" cy="340" r="265" fill="none" stroke="url(#rg1)" strokeWidth="0.45" strokeDasharray="4 9"
// // //             style={{ animation:"rotateSlowRev 40s linear infinite", transformOrigin:"340px 340px" }}/>
// // //           <circle cx="340" cy="340" r="310" fill="none" stroke="#38bdf8" strokeWidth="0.28" strokeDasharray="2 12"/>
// // //           <circle cx="340" cy="340" r="115" fill="none" stroke="#38bdf8" strokeWidth="0.5"
// // //             style={{ animation:"rotateSlow 16s linear infinite", transformOrigin:"340px 340px" }}/>
// // //           {/* Orbit dots */}
// // //           {[0,72,144,216,288].map((deg,i) => {
// // //             const r=(deg-90)*Math.PI/180;
// // //             return <circle key={i} cx={340+190*Math.cos(r)} cy={340+190*Math.sin(r)} r="5" fill="#38bdf8" opacity="0.7"
// // //               style={{ animation:`orbDot ${2+i*0.3}s ${i*0.2}s ease-in-out infinite` }}/>;
// // //           })}
// // //         </svg>

// // //         {/* ── Hero content ── */}
// // //         <div style={{
// // //           flex:1, display:"flex", alignItems:"center",
// // //           maxWidth:"1280px", margin:"0 auto",
// // //           padding:"130px 56px 90px", position:"relative", zIndex:3, width:"100%",
// // //         }}>

// // //           {/* Left content */}
// // //           <div className="hero-content" style={{ maxWidth:"680px" }}>

// // //             {/* Top badge */}
// // //             <div style={{
// // //               display:"inline-flex", alignItems:"center", gap:"10px",
// // //               background:"rgba(56,189,248,0.08)", border:"0.5px solid rgba(56,189,248,0.28)",
// // //               color:"#7dd3fc", fontSize:"11px", fontWeight:600,
// // //               padding:"8px 20px", borderRadius:"30px",
// // //               letterSpacing:"0.12em", textTransform:"uppercase",
// // //               marginBottom:"32px", animation:"riseUp 0.8s ease both",
// // //             }}>
// // //               <span style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#38bdf8", animation:"pulseDot 2s ease-in-out infinite", flexShrink:0 }}/>
// // //               India's Leading Aquaculture Health Solutions
// // //               <span style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#38bdf8", animation:"pulseDot 2s 0.5s ease-in-out infinite", flexShrink:0 }}/>
// // //             </div>

// // //             {/* Headline */}
// // //             <h1 style={{
// // //               fontFamily:"'Clash Display',sans-serif",
// // //               fontSize:"clamp(48px,6.2vw,96px)", fontWeight:700,
// // //               lineHeight:1.0, color:"#f0f9ff", marginBottom:"8px",
// // //             }}>
// // //               <span style={{ display:"block", animation:"riseUp 0.9s 0.1s ease both" }}>
// // //                 Making Aquaculture
// // //               </span>
// // //               <span style={{ display:"block", height:"1.12em", overflow:"hidden", animation:"riseUp 0.9s 0.2s ease both" }}>
// // //                 <span key={word} style={{
// // //                   display:"inline-block",
// // //                   animation:"wordIn 0.45s cubic-bezier(0.34,1.4,0.64,1) both",
// // //                   background:`linear-gradient(90deg, ${WORD_COLORS[wordIdx]}, #bae6fd, ${WORD_COLORS[wordIdx]})`,
// // //                   backgroundSize:"200% auto",
// // //                   WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
// // //                   backgroundClip:"text",
// // //                   animationName:"wordIn, shimmer",
// // //                   animationDuration:"0.45s, 3s",
// // //                   animationTimingFunction:"cubic-bezier(0.34,1.4,0.64,1), linear",
// // //                   animationIterationCount:"1, infinite",
// // //                   animationFillMode:"both, none",
// // //                 }}>
// // //                   {word}
// // //                 </span>
// // //               </span>
// // //             </h1>

// // //             {/* Subhead */}
// // //             <p style={{
// // //               fontSize:"17px", color:"rgba(240,249,255,0.56)",
// // //               lineHeight:1.88, maxWidth:"540px",
// // //               marginBottom:"44px", marginTop:"22px",
// // //               animation:"riseUp 0.9s 0.45s ease both",
// // //             }}>
// // //               Innovare Biopharma LLP delivers{" "}
// // //               <strong style={{ color:"#bae6fd", fontWeight:600 }}>GMP-certified</strong> aquaculture
// // //               health products — immunity boosters, probiotics, growth accelerators, and water quality
// // //               solutions trusted by{" "}
// // //               <strong style={{ color:"#bae6fd", fontWeight:600 }}>500+ farms</strong> across India.
// // //             </p>

// // //             {/* CTAs */}
// // //             <div style={{ display:"flex", gap:"14px", flexWrap:"wrap", animation:"riseUp 0.9s 0.6s ease both" }}>
// // //               <button className="hero-cta-primary">Explore Products</button>
// // //               <button className="hero-cta-secondary">Watch Story →</button>
// // //             </div>

// // //             {/* Trust badges */}
// // //             <div style={{
// // //               display:"flex", gap:"22px", marginTop:"52px", flexWrap:"wrap",
// // //               animation:"riseUp 0.9s 0.75s ease both",
// // //             }}>
// // //               {trustBadges.map((tr,i) => (
// // //                 <div key={i} style={{ display:"flex", alignItems:"center", gap:"7px" }}>
// // //                   <span style={{
// // //                     width:"19px", height:"19px", borderRadius:"50%",
// // //                     background:"rgba(56,189,248,0.14)", border:"0.5px solid rgba(56,189,248,0.42)",
// // //                     display:"flex", alignItems:"center", justifyContent:"center",
// // //                     fontSize:"10px", color:"#38bdf8", fontWeight:700, flexShrink:0,
// // //                   }}>{tr.icon}</span>
// // //                   <span style={{ fontSize:"12px", color:"rgba(240,249,255,0.48)", fontWeight:500 }}>{tr.label}</span>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             {/* Live field stats bar */}
// // //             <div style={{
// // //               marginTop:"48px", padding:"18px 22px",
// // //               background:"rgba(6,20,48,0.72)", backdropFilter:"blur(14px)",
// // //               border:"0.5px solid rgba(56,189,248,0.18)", borderRadius:"18px",
// // //               display:"grid", gridTemplateColumns:"repeat(4,1fr)",
// // //               gap:"0", animation:"riseUp 0.9s 0.88s ease both",
// // //               maxWidth:"460px",
// // //             }}>
// // //               {[
// // //                 { val:"500+", label:"Farms",    col:"#38bdf8" },
// // //                 { val:"95%",  label:"Survival", col:"#34d399" },
// // //                 { val:"20+",  label:"Yrs R&D",  col:"#818cf8" },
// // //                 { val:"15+",  label:"States",   col:"#60a5fa" },
// // //               ].map((s,i) => (
// // //                 <div key={i} style={{
// // //                   textAlign:"center",
// // //                   borderRight:i<3?"0.5px solid rgba(56,189,248,0.12)":"none",
// // //                   padding:"0 12px",
// // //                 }}>
// // //                   <div style={{
// // //                     fontFamily:"'Clash Display',sans-serif", fontSize:"22px", fontWeight:700,
// // //                     color:s.col, lineHeight:1.1,
// // //                   }}>{s.val}</div>
// // //                   <div style={{ fontSize:"10px", color:"rgba(240,249,255,0.38)", textTransform:"uppercase", letterSpacing:"0.08em", marginTop:"3px" }}>{s.label}</div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* Right: floating product cards */}
// // //           <div className="hero-right" style={{
// // //             position:"absolute", right:"56px", top:"50%",
// // //             transform:`translateY(calc(-50% + ${scrollY*0.07}px))`,
// // //             display:"flex", flexDirection:"column", gap:"14px",
// // //             animation:"riseUp 1s 0.5s ease both",
// // //             zIndex:4,
// // //           }}>
// // //             {floatingCards.map((item,i) => (
// // //               <div key={i} className="floating-card" style={{
// // //                 background:"rgba(8,20,52,0.78)", backdropFilter:"blur(20px)",
// // //                 border:`0.5px solid ${item.color}38`,
// // //                 borderRadius:"20px", padding:"18px 22px",
// // //                 display:"flex", alignItems:"center", gap:"14px",
// // //                 width:"272px",
// // //                 animation:`riseUp 0.8s ${item.delay} ease both, floatY ${item.dur} ${item.delay} ease-in-out infinite`,
// // //                 boxShadow:`0 8px 36px rgba(0,0,0,0.38), 0 0 0 0.5px ${item.color}20`,
// // //               }}>
// // //                 <div style={{
// // //                   width:"46px", height:"46px", borderRadius:"13px",
// // //                   background:`${item.color}18`, border:`0.5px solid ${item.color}42`,
// // //                   display:"flex", alignItems:"center", justifyContent:"center",
// // //                   fontSize:"22px", flexShrink:0,
// // //                 }}>{item.icon}</div>
// // //                 <div style={{ flex:1 }}>
// // //                   <div style={{ fontFamily:"'Clash Display',sans-serif", fontSize:"13.5px", fontWeight:600, color:"#f0f9ff" }}>{item.name}</div>
// // //                   <div style={{ fontSize:"11px", color:"rgba(240,249,255,0.38)", marginTop:"2px" }}>{item.label}</div>
// // //                 </div>
// // //                 <div style={{ fontFamily:"'Clash Display',sans-serif", fontSize:"24px", fontWeight:700, color:item.color }}>{item.stat}</div>
// // //               </div>
// // //             ))}

// // //             {/* Aqua species indicator card */}
// // //             <div style={{
// // //               background:"rgba(8,20,52,0.78)", backdropFilter:"blur(20px)",
// // //               border:"0.5px solid rgba(52,211,153,0.25)",
// // //               borderRadius:"20px", padding:"16px 22px",
// // //               width:"272px",
// // //               animation:`riseUp 0.8s 0.52s ease both, floatY 5.5s 0.9s ease-in-out infinite`,
// // //               boxShadow:"0 8px 36px rgba(0,0,0,0.38)",
// // //             }}>
// // //               <div style={{ fontSize:"10px", color:"rgba(240,249,255,0.38)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"10px" }}>
// // //                 Supported Species
// // //               </div>
// // //               <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
// // //                 {[
// // //                   { name:"Vannamei",  icon:"🦐", col:"#f97316" },
// // //                   { name:"Monodon",   icon:"🦐", col:"#fb923c" },
// // //                   { name:"Tilapia",   icon:"🐟", col:"#38bdf8" },
// // //                   { name:"Rohu",      icon:"🐟", col:"#60a5fa" },
// // //                   { name:"Catla",     icon:"🐟", col:"#818cf8" },
// // //                   { name:"Crab",      icon:"🦀", col:"#f87171" },
// // //                 ].map((sp,i) => (
// // //                   <div key={i} style={{
// // //                     background:`${sp.col}15`, border:`0.5px solid ${sp.col}38`,
// // //                     borderRadius:"8px", padding:"4px 8px",
// // //                     display:"flex", alignItems:"center", gap:"4px",
// // //                   }}>
// // //                     <span style={{ fontSize:"12px" }}>{sp.icon}</span>
// // //                     <span style={{ fontSize:"10px", color:`${sp.col}`, fontWeight:600 }}>{sp.name}</span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* ── Scroll indicator ── */}
// // //         <div style={{
// // //           position:"absolute", bottom:"32px", left:"50%", transform:"translateX(-50%)",
// // //           display:"flex", flexDirection:"column", alignItems:"center", gap:"8px",
// // //           animation:"riseUp 1s 1.3s ease both", zIndex:3,
// // //         }}>
// // //           <span style={{ fontSize:"10px", color:"rgba(240,249,255,0.28)", textTransform:"uppercase", letterSpacing:"0.2em" }}>
// // //             Scroll to explore
// // //           </span>
// // //           <div style={{
// // //             width:"24px", height:"40px", border:"1px solid rgba(56,189,248,0.22)",
// // //             borderRadius:"12px", display:"flex", alignItems:"flex-start", justifyContent:"center", padding:"6px",
// // //           }}>
// // //             <div style={{
// // //               width:"4px", height:"8px", borderRadius:"2px", background:"#38bdf8",
// // //               animation:"floatY 1.8s ease-in-out infinite",
// // //             }}/>
// // //           </div>
// // //         </div>

// // //         {/* ── Bottom wave transition ── */}
// // //         <div style={{ position:"absolute", bottom:0, left:0, right:0, lineHeight:0, zIndex:3 }}>
// // //           <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ width:"100%", height:"90px", display:"block" }}>
// // //             <path d="M0,45 C240,90 480,10 720,45 C960,80 1200,15 1440,45 L1440,90 L0,90 Z" fill="#030d1a"/>
// // //           </svg>
// // //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // }
// // "use client";

// // import { useEffect, useRef, useState, useCallback } from "react";

// // // ─────────────────────────────────────────────────────────────────────────────
// // // CANVAS: Biopharma Waterfield Animation
// // // Floating microorganisms, DNA helix rings, water caustics on soft teal bg
// // // ─────────────────────────────────────────────────────────────────────────────
// // function BioCanvas() {
// //   const ref = useRef<HTMLCanvasElement>(null);
// //   useEffect(() => {
// //     const c = ref.current!;
// //     const ctx = c.getContext("2d")!;
// //     let W = 0, H = 0, T = 0, raf = 0;
// //     const dpr = window.devicePixelRatio || 1;

// //     // Entities
// //     let orbs: { x: number; y: number; r: number; vx: number; vy: number; phase: number; hue: number; pulse: number }[] = [];
// //     let rings: { x: number; y: number; r: number; rot: number; speed: number; opacity: number; segments: number }[] = [];
// //     let helices: { x: number; y: number; len: number; phase: number; speed: number; color: string }[] = [];
// //     let spores: { x: number; y: number; vx: number; vy: number; r: number; phase: number; alpha: number }[] = [];
// //     let waves: { y: number; amp: number; freq: number; speed: number; color: string }[] = [];

// //     const rnd = (a: number, b: number) => a + Math.random() * (b - a);

// //     const resize = () => {
// //       W = c.offsetWidth; H = c.offsetHeight;
// //       c.width = W * dpr; c.height = H * dpr;
// //       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

// //       orbs = Array.from({ length: 18 }, () => ({
// //         x: rnd(0, W), y: rnd(0, H),
// //         vx: rnd(-0.18, 0.18), vy: rnd(-0.12, 0.12),
// //         r: rnd(30, 90), phase: rnd(0, Math.PI * 2),
// //         hue: rnd(155, 195), pulse: rnd(0.003, 0.008),
// //       }));

// //       rings = Array.from({ length: 12 }, () => ({
// //         x: rnd(50, W - 50), y: rnd(50, H - 50),
// //         r: rnd(20, 65), rot: rnd(0, Math.PI * 2),
// //         speed: rnd(0.003, 0.012) * (Math.random() < 0.5 ? 1 : -1),
// //         opacity: rnd(0.06, 0.18),
// //         segments: Math.floor(rnd(5, 12)),
// //       }));

// //       helices = Array.from({ length: 5 }, (_, i) => ({
// //         x: rnd(80, W - 80),
// //         y: rnd(H * 0.1, H * 0.9),
// //         len: rnd(120, 200),
// //         phase: (i / 5) * Math.PI * 2,
// //         speed: rnd(0.008, 0.018),
// //         color: ["#0d9488", "#059669", "#0891b2", "#0ea5e9", "#14b8a6"][i % 5],
// //       }));

// //       spores = Array.from({ length: 40 }, () => ({
// //         x: rnd(0, W), y: rnd(0, H),
// //         vx: rnd(-0.3, 0.3), vy: rnd(-0.5, -0.1),
// //         r: rnd(2, 6), phase: rnd(0, Math.PI * 2), alpha: rnd(0.1, 0.4),
// //       }));

// //       waves = [
// //         { y: H * 0.55, amp: 22, freq: 0.006, speed: 0.6,  color: "rgba(13,148,136,0.045)" },
// //         { y: H * 0.65, amp: 16, freq: 0.009, speed: 0.9,  color: "rgba(5,150,105,0.04)"  },
// //         { y: H * 0.75, amp: 12, freq: 0.012, speed: 1.2,  color: "rgba(8,145,178,0.035)" },
// //       ];
// //     };

// //     const drawBg = () => {
// //       const g = ctx.createLinearGradient(0, 0, W * 0.6, H);
// //       g.addColorStop(0, "#f0fdf9");
// //       g.addColorStop(0.4, "#ecfdf5");
// //       g.addColorStop(0.75, "#f0fdfa");
// //       g.addColorStop(1, "#e0f2fe");
// //       ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
// //     };

// //     const drawNoise = () => {
// //       // Subtle dot texture
// //       ctx.save();
// //       ctx.globalAlpha = 0.018;
// //       for (let i = 0; i < 120; i++) {
// //         const nx = rnd(0, W), ny = rnd(0, H);
// //         ctx.fillStyle = "#0d9488";
// //         ctx.beginPath(); ctx.arc(nx, ny, 0.7, 0, Math.PI * 2); ctx.fill();
// //       }
// //       ctx.restore();
// //     };

// //     const drawMeshGlow = () => {
// //       [
// //         { cx: W * 0.15, cy: H * 0.25, r: W * 0.35, c: "rgba(13,148,136,0.08)" },
// //         { cx: W * 0.85, cy: H * 0.6,  r: W * 0.3,  c: "rgba(5,150,105,0.06)"  },
// //         { cx: W * 0.5,  cy: H * 0.85, r: W * 0.4,  c: "rgba(8,145,178,0.07)"  },
// //         { cx: W * 0.7,  cy: H * 0.15, r: W * 0.25, c: "rgba(20,184,166,0.06)" },
// //       ].forEach(({ cx, cy, r, c }) => {
// //         const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
// //         g.addColorStop(0, c); g.addColorStop(1, "rgba(0,0,0,0)");
// //         ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
// //       });
// //     };

// //     const drawOrbs = () => {
// //       orbs.forEach(o => {
// //         o.x += o.vx; o.y += o.vy; o.phase += o.pulse;
// //         if (o.x < -o.r) o.x = W + o.r; if (o.x > W + o.r) o.x = -o.r;
// //         if (o.y < -o.r) o.y = H + o.r; if (o.y > H + o.r) o.y = -o.r;
// //         const pulsed = o.r * (0.88 + 0.12 * Math.sin(o.phase));
// //         const alpha = 0.06 + 0.04 * Math.sin(o.phase * 1.3);
// //         const g = ctx.createRadialGradient(o.x - pulsed * 0.2, o.y - pulsed * 0.2, 0, o.x, o.y, pulsed);
// //         g.addColorStop(0, `hsla(${o.hue},75%,65%,${alpha * 2.5})`);
// //         g.addColorStop(0.5, `hsla(${o.hue},70%,55%,${alpha})`);
// //         g.addColorStop(1, `hsla(${o.hue},65%,50%,0)`);
// //         ctx.fillStyle = g;
// //         ctx.beginPath(); ctx.arc(o.x, o.y, pulsed, 0, Math.PI * 2); ctx.fill();
// //       });
// //     };

// //     const drawRings = () => {
// //       rings.forEach(r => {
// //         r.rot += r.speed;
// //         ctx.save();
// //         ctx.translate(r.x, r.y);
// //         ctx.rotate(r.rot);
// //         ctx.globalAlpha = r.opacity;

// //         // Outer ring
// //         ctx.beginPath(); ctx.arc(0, 0, r.r, 0, Math.PI * 2);
// //         ctx.strokeStyle = "#0d9488"; ctx.lineWidth = 0.8; ctx.stroke();

// //         // Dashed inner
// //         ctx.setLineDash([3, 4]);
// //         ctx.beginPath(); ctx.arc(0, 0, r.r * 0.65, 0, Math.PI * 2);
// //         ctx.strokeStyle = "#059669"; ctx.lineWidth = 0.5; ctx.stroke();
// //         ctx.setLineDash([]);

// //         // Dots on ring
// //         for (let i = 0; i < r.segments; i++) {
// //           const a = (i / r.segments) * Math.PI * 2;
// //           const dx = Math.cos(a) * r.r, dy = Math.sin(a) * r.r;
// //           ctx.beginPath(); ctx.arc(dx, dy, 2.5, 0, Math.PI * 2);
// //           ctx.fillStyle = "#0d9488"; ctx.fill();
// //         }

// //         // Center dot
// //         ctx.beginPath(); ctx.arc(0, 0, 3, 0, Math.PI * 2);
// //         ctx.fillStyle = "#059669"; ctx.fill();

// //         ctx.restore();
// //       });
// //     };

// //     const drawHelices = () => {
// //       helices.forEach(h => {
// //         h.phase += h.speed;
// //         ctx.save();
// //         ctx.globalAlpha = 0.3;
// //         const steps = 60;
// //         const dx = h.len / steps;

// //         // Strand A
// //         ctx.beginPath();
// //         for (let i = 0; i <= steps; i++) {
// //           const px = h.x - h.len / 2 + i * dx;
// //           const py = h.y + Math.sin(h.phase + i * 0.18) * 18;
// //           i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
// //         }
// //         ctx.strokeStyle = h.color; ctx.lineWidth = 1.5; ctx.stroke();

// //         // Strand B
// //         ctx.beginPath();
// //         for (let i = 0; i <= steps; i++) {
// //           const px = h.x - h.len / 2 + i * dx;
// //           const py = h.y + Math.sin(h.phase + i * 0.18 + Math.PI) * 18;
// //           i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
// //         }
// //         ctx.strokeStyle = h.color; ctx.lineWidth = 1.5; ctx.stroke();

// //         // Rungs
// //         ctx.globalAlpha = 0.15;
// //         for (let i = 0; i <= steps; i += 4) {
// //           const px = h.x - h.len / 2 + i * dx;
// //           const pyA = h.y + Math.sin(h.phase + i * 0.18) * 18;
// //           const pyB = h.y + Math.sin(h.phase + i * 0.18 + Math.PI) * 18;
// //           ctx.beginPath(); ctx.moveTo(px, pyA); ctx.lineTo(px, pyB);
// //           ctx.strokeStyle = h.color; ctx.lineWidth = 0.8; ctx.stroke();
// //         }
// //         ctx.restore();
// //       });
// //     };

// //     const drawSpores = () => {
// //       spores.forEach(s => {
// //         s.x += s.vx + Math.sin(T * 0.4 + s.phase) * 0.2;
// //         s.y += s.vy;
// //         s.phase += 0.02;
// //         if (s.y < -10) { s.y = H + 5; s.x = Math.random() * W; }
// //         if (s.x < -10) s.x = W + 5; if (s.x > W + 10) s.x = -5;
// //         const pulse = 0.6 + 0.4 * Math.sin(s.phase * 3);
// //         ctx.save();
// //         ctx.globalAlpha = s.alpha * pulse;
// //         const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 2);
// //         g.addColorStop(0, "rgba(13,148,136,1)");
// //         g.addColorStop(1, "rgba(13,148,136,0)");
// //         ctx.fillStyle = g;
// //         ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 2, 0, Math.PI * 2); ctx.fill();
// //         ctx.restore();
// //       });
// //     };

// //     const drawWaves = () => {
// //       waves.forEach(w => {
// //         ctx.beginPath(); ctx.moveTo(0, H);
// //         for (let x = 0; x <= W; x += 3) {
// //           const y = w.y
// //             + Math.sin(x * w.freq + T * w.speed) * w.amp
// //             + Math.sin(x * w.freq * 0.6 + T * w.speed * 0.7 + 1) * w.amp * 0.4;
// //           ctx.lineTo(x, y);
// //         }
// //         ctx.lineTo(W, H); ctx.fillStyle = w.color; ctx.fill();
// //       });
// //     };

// //     const drawGrid = () => {
// //       ctx.save();
// //       ctx.globalAlpha = 0.028;
// //       ctx.strokeStyle = "#0d9488";
// //       ctx.lineWidth = 0.5;
// //       const gx = 60, gy = 60;
// //       for (let x = 0; x <= W; x += gx) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
// //       for (let y = 0; y <= H; y += gy) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
// //       ctx.restore();
// //     };

// //     const loop = () => {
// //       ctx.clearRect(0, 0, W, H);
// //       drawBg(); drawMeshGlow(); drawGrid();
// //       drawOrbs(); drawRings(); drawHelices(); drawSpores(); drawWaves();
// //       T += 0.012;
// //       raf = requestAnimationFrame(loop);
// //     };

// //     const ro = new ResizeObserver(resize);
// //     ro.observe(c); resize(); loop();
// //     return () => { cancelAnimationFrame(raf); ro.disconnect(); };
// //   }, []);

// //   return (
// //     <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // ROTATING WORD HOOK
// // // ─────────────────────────────────────────────────────────────────────────────
// // function useRotatingWord(words: string[], ms = 2600) {
// //   const [i, setI] = useState(0);
// //   const [visible, setVisible] = useState(true);
// //   useEffect(() => {
// //     const id = setInterval(() => {
// //       setVisible(false);
// //       setTimeout(() => { setI(p => (p + 1) % words.length); setVisible(true); }, 400);
// //     }, ms);
// //     return () => clearInterval(id);
// //   }, [words.length, ms]);
// //   return { word: words[i], visible, idx: i };
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // DATA
// // // ─────────────────────────────────────────────────────────────────────────────
// // const WORDS  = ["Healthier.", "Stronger.", "Smarter.", "Greener."];
// // const ACCENTS = ["#0d9488", "#059669", "#0284c7", "#0f766e"];

// // const STATS = [
// //   { val: "500+", sub: "Farms Served",      icon: "🌾" },
// //   { val: "95%",  sub: "Survival Rate",     icon: "💪" },
// //   { val: "20+",  sub: "Years of R&D",      icon: "🔬" },
// //   { val: "15+",  sub: "Indian States",     icon: "🗺️" },
// // ];

// // const SOLUTIONS = [
// //   { icon: "🌿", title: "Nutrition",    color: "#059669", light: "#f0fdf4", desc: "Precision feed supplements, vitamins, and probiotics optimised for FCR and rapid growth across all species." },
// //   { icon: "💊", title: "Health",       color: "#0d9488", light: "#f0fdfa", desc: "Antibiotic-free immunity boosters, antiparasitic agents, and curative solutions with zero consumer residue." },
// //   { icon: "🌊", title: "Environment",  color: "#0284c7", light: "#eff6ff", desc: "Water quality management, algae control, and pond probiotic systems for sustainable high-density culture." },
// // ];

// // const PRODUCTS = {
// //   Aquaculture: [
// //     { e:"🛡️", n:"AquaShield Pro",   b:"Boosts innate immunity by 95%",        tag:"Best Seller" },
// //     { e:"🌊", n:"GillGuard Oxy",    b:"Improves O₂ absorption by 40%",        tag:"New Formula" },
// //     { e:"⚡", n:"VitaGrow Marine",  b:"Accelerates growth rate by 30%",       tag:"Top Rated"   },
// //     { e:"🧪", n:"PondBalance Pro",  b:"Stabilises pH & eliminates ammonia",   tag:"Eco-Safe"    },
// //     { e:"🦠", n:"BioProtect Plus",  b:"Competitive exclusion of Vibrio",      tag:"Probiotic"   },
// //     { e:"💧", n:"AlgaeGuard CW",   b:"Selective cyanobacteria control",       tag:"Eco-Safe"    },
// //   ],
// //   Poultry: [
// //     { e:"🐔", n:"PoultryShield Imm", b:"Broad-spectrum broiler immunity",     tag:"Best Seller" },
// //     { e:"🥚", n:"LayerMax Pro",      b:"+22% egg production consistency",     tag:"Layer Spec." },
// //     { e:"🌾", n:"FeedConvert Plus",  b:"Improved FCR for broiler farms",      tag:"Cost Saver"  },
// //   ],
// //   Cattle: [
// //     { e:"🐄", n:"CattleCare Boost", b:"Boosts milk yield & immunity",        tag:"Dairy Farms" },
// //     { e:"💪", n:"BeefMax Growth",   b:"Optimised weight gain & muscle",      tag:"Beef Spec."  },
// //   ],
// // };
// // type ProductTab = keyof typeof PRODUCTS;

// // const CERTS = [
// //   { medal: "🏅", name: "GMP Certificate",      body: "Pharmaceutical-grade manufacturing practice, every batch." },
// //   { medal: "📋", name: "ISO 9001:2015",         body: "International quality management across all operations." },
// //   { medal: "📜", name: "CAA Approved",          body: "Central Aquaculture Authority product certifications." },
// // ];

// // const EVENTS_DATA = [
// //   { d:"14", m:"JUN", title:"India Aqua Expo 2026",        loc:"Hyderabad ITEC, Telangana",     tag:"Exhibition" },
// //   { d:"28", m:"JUN", title:"Aquaculture Health Symposium", loc:"CIBA Campus, Chennai",          tag:"Symposium"  },
// //   { d:"12", m:"JUL", title:"Farmer Training Programme",    loc:"Nellore District, Andhra Pradesh", tag:"Training" },
// //   { d:"05", m:"AUG", title:"Shrimp Farmers' Conclave",    loc:"Vijayawada Convention Centre",   tag:"Conclave"  },
// // ];

// // const SPECIES = [
// //   { name: "Vannamei", icon: "🦐", col: "#f97316" },
// //   { name: "Monodon",  icon: "🦐", col: "#fb923c" },
// //   { name: "Tilapia",  icon: "🐟", col: "#0ea5e9" },
// //   { name: "Rohu",     icon: "🐟", col: "#6366f1" },
// //   { name: "Catla",    icon: "🐟", col: "#8b5cf6" },
// //   { name: "Crab",     icon: "🦀", col: "#ef4444" },
// // ];

// // // ─────────────────────────────────────────────────────────────────────────────
// // // TINY SHARED COMPONENTS
// // // ─────────────────────────────────────────────────────────────────────────────
// // function Chip({ children, color = "#0d9488", bg = "#f0fdfa" }: { children: React.ReactNode; color?: string; bg?: string }) {
// //   return (
// //     <span style={{ display:"inline-block", fontSize:10, fontWeight:700, letterSpacing:".06em", textTransform:"uppercase", padding:"3px 10px", borderRadius:20, background:bg, color, border:`1px solid ${color}30` }}>
// //       {children}
// //     </span>
// //   );
// // }

// // function SectionLabel({ children }: { children: React.ReactNode }) {
// //   return (
// //     <div style={{ display:"inline-flex", alignItems:"center", gap:8, marginBottom:18 }}>
// //       <div style={{ width:24, height:2, background:"#0d9488", borderRadius:2 }} />
// //       <span style={{ fontSize:11, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"#0d9488" }}>{children}</span>
// //     </div>
// //   );
// // }

// // function SectionTitle({ children }: { children: React.ReactNode }) {
// //   return <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(30px,4vw,52px)", fontWeight:700, color:"#0a2520", lineHeight:1.1, marginBottom:16 }}>{children}</h2>;
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // NAVBAR
// // // ─────────────────────────────────────────────────────────────────────────────
// // function Navbar() {
// //   const [scrolled, setScrolled] = useState(false);
// //   const [open, setOpen] = useState(false);
// //   useEffect(() => {
// //     const fn = () => setScrolled(window.scrollY > 20);
// //     window.addEventListener("scroll", fn, { passive: true });
// //     return () => window.removeEventListener("scroll", fn);
// //   }, []);

// //   const goto = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };

// //   const navStyle: React.CSSProperties = {
// //     position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
// //     height: 68,
// //     background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
// //     backdropFilter: scrolled ? "blur(16px)" : "none",
// //     borderBottom: scrolled ? "1px solid rgba(13,148,136,0.12)" : "none",
// //     boxShadow: scrolled ? "0 2px 24px rgba(13,148,136,0.08)" : "none",
// //     transition: "all .4s ease",
// //     display: "flex", alignItems: "center",
// //   };

// //   const links = [
// //     { label: "About",          id: "about" },
// //     { label: "Solutions",      id: "solutions" },
// //     { label: "Products",       id: "products" },
// //     { label: "Sustainability", id: "sustainability" },
// //     { label: "Certificates",   id: "certs" },
// //     { label: "Events",         id: "events" },
// //     { label: "Contact",        id: "contact" },
// //   ];

// //   return (
// //     <nav style={navStyle}>
// //       <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 40px", width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
// //         {/* Logo */}
// //         <button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{ display:"flex", alignItems:"center", gap:12, background:"none", border:"none", cursor:"pointer", padding:0 }}>
// //           <div style={{ width:42, height:42, background:"linear-gradient(135deg,#0d9488,#059669)", borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, boxShadow:"0 4px 14px rgba(13,148,136,.3)" }}>🦐</div>
// //           <div style={{ textAlign:"left" }}>
// //             <div style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:15, fontWeight:700, color:"#0a2520", lineHeight:1.1 }}>Innovare Biopharma</div>
// //             <div style={{ fontSize:9, color:"#6b7280", letterSpacing:".5px", marginTop:1 }}>Solution to Aquaculture Health</div>
// //           </div>
// //         </button>

// //         {/* Desktop links */}
// //         <div style={{ display:"flex", alignItems:"center", gap:2 }}>
// //           {links.map(l => (
// //             <button key={l.id} onClick={()=>goto(l.id)} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, fontWeight:600, color:"#374151", padding:"7px 14px", borderRadius:8, background:"none", border:"none", cursor:"pointer", letterSpacing:".02em", transition:"all .2s" }}
// //               onMouseEnter={e=>(e.currentTarget.style.background="rgba(13,148,136,.08)")}
// //               onMouseLeave={e=>(e.currentTarget.style.background="none")}
// //             >{l.label}</button>
// //           ))}
// //         </div>

// //         {/* CTA */}
// //         <button onClick={()=>goto("contact")} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, fontWeight:700, color:"#fff", background:"linear-gradient(135deg,#0d9488,#059669)", border:"none", padding:"10px 24px", borderRadius:24, cursor:"pointer", boxShadow:"0 4px 16px rgba(13,148,136,.35)", transition:"all .3s", letterSpacing:".02em" }}
// //           onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 28px rgba(13,148,136,.45)"; }}
// //           onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 4px 16px rgba(13,148,136,.35)"; }}
// //         >Get in Touch</button>
// //       </div>
// //     </nav>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // HERO
// // // ─────────────────────────────────────────────────────────────────────────────
// // function Hero() {
// //   const { word, visible, idx } = useRotatingWord(WORDS, 2600);
// //   const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

// //   return (
// //     <section id="home" style={{ minHeight:"100vh", position:"relative", overflow:"hidden", display:"flex", alignItems:"center", paddingTop:68 }}>
// //       <BioCanvas />

// //       {/* Diagonal accent band */}
// //       <div style={{ position:"absolute", top:0, right:0, width:"45%", height:"100%", background:"linear-gradient(160deg,rgba(13,148,136,0.06) 0%,rgba(5,150,105,0.04) 100%)", clipPath:"polygon(18% 0,100% 0,100% 100%,0% 100%)", pointerEvents:"none" }} />

// //       <div style={{ position:"relative", zIndex:2, maxWidth:1280, margin:"0 auto", padding:"80px 40px 100px", width:"100%", display:"grid", gridTemplateColumns:"1fr 440px", gap:80, alignItems:"center" }}>

// //         {/* LEFT */}
// //         <div style={{ animation:"fadeUp .9s ease both" }}>
// //           {/* Top badge */}
// //           <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(13,148,136,.1)", border:"1px solid rgba(13,148,136,.22)", borderRadius:30, padding:"6px 16px", marginBottom:32 }}>
// //             <span style={{ width:6, height:6, borderRadius:"50%", background:"#0d9488", animation:"blink 2s ease-in-out infinite", flexShrink:0 }} />
// //             <span style={{ fontSize:10, fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", color:"#0d9488" }}>India&apos;s #1 Aquaculture Health Solutions</span>
// //           </div>

// //           {/* Headline */}
// //           <h1 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(44px,6vw,88px)", fontWeight:700, lineHeight:1.0, color:"#0a2520", marginBottom:12 }}>
// //             <span style={{ display:"block" }}>Making</span>
// //             <span style={{ display:"block" }}>Aquaculture</span>
// //             <span style={{ display:"block", minHeight:"1.1em" }}>
// //               <span style={{
// //                 color: ACCENTS[idx],
// //                 opacity: visible ? 1 : 0,
// //                 transform: visible ? "translateY(0)" : "translateY(24px)",
// //                 display:"inline-block",
// //                 transition:"all .4s cubic-bezier(.34,1.4,.64,1)",
// //                 fontStyle:"italic",
// //               }}>{word}</span>
// //             </span>
// //           </h1>

// //           {/* Sub */}
// //           <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:17, color:"#374151", lineHeight:1.85, maxWidth:500, marginBottom:44 }}>
// //             GMP-certified health products trusted by <strong style={{ color:"#0d9488" }}>500+ farms</strong> across India — from immunity boosters to precision water management.
// //           </p>

// //           {/* CTAs */}
// //           <div style={{ display:"flex", gap:14, flexWrap:"wrap", marginBottom:52 }}>
// //             <button onClick={()=>goto("products")} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, fontWeight:700, color:"#fff", background:"linear-gradient(135deg,#0d9488,#059669)", border:"none", padding:"15px 38px", borderRadius:50, cursor:"pointer", boxShadow:"0 8px 28px rgba(13,148,136,.38)", transition:"all .3s", letterSpacing:".02em" }}
// //               onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 16px 40px rgba(13,148,136,.55)"; }}
// //               onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 8px 28px rgba(13,148,136,.38)"; }}
// //             >Explore Products</button>
// //             <button onClick={()=>goto("about")} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, fontWeight:600, color:"#0d9488", background:"transparent", border:"2px solid rgba(13,148,136,.35)", padding:"14px 36px", borderRadius:50, cursor:"pointer", transition:"all .3s" }}
// //               onMouseEnter={e=>{ e.currentTarget.style.borderColor="#0d9488"; e.currentTarget.style.background="rgba(13,148,136,.06)"; }}
// //               onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(13,148,136,.35)"; e.currentTarget.style.background="transparent"; }}
// //             >Our Story</button>
// //           </div>

// //           {/* Trust strip */}
// //           <div style={{ display:"flex", gap:24, flexWrap:"wrap" }}>
// //             {["GMP Certified","ISO 9001:2015","Zero Toxicity","CAA Approved"].map(t => (
// //               <div key={t} style={{ display:"flex", alignItems:"center", gap:6 }}>
// //                 <div style={{ width:18, height:18, borderRadius:"50%", background:"rgba(13,148,136,.15)", border:"1px solid rgba(13,148,136,.3)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, color:"#0d9488", fontWeight:700 }}>✓</div>
// //                 <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, color:"#6b7280", fontWeight:500 }}>{t}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* RIGHT — glass card stack */}
// //         <div style={{ display:"flex", flexDirection:"column", gap:16, animation:"fadeUp .9s .2s ease both" }}>
// //           {/* Stats card */}
// //           <div style={{ background:"rgba(255,255,255,0.82)", backdropFilter:"blur(20px)", border:"1px solid rgba(13,148,136,.18)", borderRadius:24, padding:"28px 24px", boxShadow:"0 12px 48px rgba(13,148,136,.1)" }}>
// //             <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:"#9ca3af", marginBottom:20 }}>By The Numbers</div>
// //             <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
// //               {STATS.map(s => (
// //                 <div key={s.sub}>
// //                   <div style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:30, fontWeight:700, color:"#0d9488", lineHeight:1 }}>{s.val}</div>
// //                   <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"#6b7280", marginTop:4 }}>{s.sub}</div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Species card */}
// //           <div style={{ background:"rgba(255,255,255,0.82)", backdropFilter:"blur(20px)", border:"1px solid rgba(13,148,136,.14)", borderRadius:24, padding:"24px", boxShadow:"0 12px 48px rgba(13,148,136,.08)", animation:"floatCard 5s ease-in-out infinite" }}>
// //             <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:"#9ca3af", marginBottom:16 }}>Supported Species</div>
// //             <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
// //               {SPECIES.map(sp => (
// //                 <div key={sp.name} style={{ background:`${sp.col}12`, border:`1px solid ${sp.col}30`, borderRadius:10, padding:"5px 10px", display:"flex", alignItems:"center", gap:5 }}>
// //                   <span style={{ fontSize:13 }}>{sp.icon}</span>
// //                   <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, fontWeight:700, color:sp.col }}>{sp.name}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Live banner */}
// //           <div style={{ background:"linear-gradient(135deg,#0d9488,#059669)", borderRadius:20, padding:"20px 24px", display:"flex", alignItems:"center", gap:16, boxShadow:"0 8px 32px rgba(13,148,136,.3)", animation:"floatCard 6s 1s ease-in-out infinite" }}>
// //             <div style={{ width:44, height:44, background:"rgba(255,255,255,.18)", borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>🔬</div>
// //             <div>
// //               <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, fontWeight:700, color:"#fff" }}>20+ Years of R&D Excellence</div>
// //               <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"rgba(255,255,255,.7)", marginTop:2 }}>Science-first aquaculture innovation since 2004</div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Scroll indicator */}
// //       <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8, zIndex:3 }}>
// //         <div style={{ width:1, height:48, background:"linear-gradient(to bottom,transparent,#0d9488)", marginBottom:4 }} />
// //         <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:9, letterSpacing:".2em", textTransform:"uppercase", color:"#9ca3af" }}>Scroll</span>
// //       </div>
// //     </section>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // ABOUT
// // // ─────────────────────────────────────────────────────────────────────────────
// // function About() {
// //   const facts = [
// //     { n:"2004", l:"Year Founded",      c:"#0d9488" },
// //     { n:"16",   l:"Expert Scientists", c:"#059669" },
// //     { n:"500+", l:"Partner Farms",     c:"#0284c7" },
// //     { n:"15+",  l:"Indian States",     c:"#0f766e" },
// //   ];
// //   return (
// //     <section id="about" style={{ padding:"100px 0", background:"#fff" }}>
// //       <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 40px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
// //         {/* Text */}
// //         <div>
// //           <SectionLabel>About Us</SectionLabel>
// //           <SectionTitle>Two Decades of Aquaculture Science</SectionTitle>
// //           <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:16, color:"#4b5563", lineHeight:1.85, marginBottom:20 }}>
// //             Founded in 2004, Innovare Biopharma LLP was built on one belief: that every pond, every farmer, and every fish deserves the best of modern science. We combine veterinary expertise, marine biology, and biopharmaceutical innovation to create products that work in the real world.
// //           </p>
// //           <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:16, color:"#4b5563", lineHeight:1.85, marginBottom:44 }}>
// //             Today, our GMP-certified portfolio covers aquaculture, poultry, and cattle — trusted by <strong style={{ color:"#0d9488" }}>500+ farms</strong> across 15 states, with zero antibiotic use and full regulatory approval.
// //           </p>

// //           <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:0, border:"1px solid #e5e7eb", borderRadius:18, overflow:"hidden" }}>
// //             {facts.map((f, i) => (
// //               <div key={f.l} style={{ padding:"24px 20px", textAlign:"center", borderRight: i < 3 ? "1px solid #e5e7eb" : "none" }}>
// //                 <div style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:28, fontWeight:700, color:f.c }}>{f.n}</div>
// //                 <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"#9ca3af", marginTop:4 }}>{f.l}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Visual */}
// //         <div style={{ position:"relative" }}>
// //           {/* Large circle */}
// //           <div style={{ width:"100%", paddingBottom:"100%", borderRadius:"50%", background:"linear-gradient(135deg,#f0fdfa,#ecfdf5)", border:"2px solid rgba(13,148,136,.12)", position:"relative", overflow:"hidden" }}>
// //             <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
// //               <div style={{ textAlign:"center" }}>
// //                 <div style={{ fontSize:80 }}>🧬</div>
// //                 <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, fontWeight:600, color:"#0d9488", marginTop:8 }}>Science-first Innovation</div>
// //               </div>
// //             </div>
// //           </div>
// //           {/* Floating badges */}
// //           {[
// //             { text:"GMP Certified",  top:"8%",  left:"-10%", bg:"#0d9488" },
// //             { text:"Zero Toxicity",  bottom:"8%",right:"-10%", bg:"#059669" },
// //             { text:"ISO 9001:2015",  top:"50%",  left:"-18%", bg:"#0284c7" },
// //             { text:"Vet Approved",   top:"50%",  right:"-14%", bg:"#0f766e" },
// //           ].map(b => (
// //             <div key={b.text} style={{ position:"absolute", ...Object.fromEntries(Object.entries(b).filter(([k])=>["top","bottom","left","right"].includes(k))), background:b.bg, color:"#fff", fontSize:10, fontWeight:700, padding:"6px 14px", borderRadius:20, whiteSpace:"nowrap", boxShadow:"0 4px 12px rgba(0,0,0,.15)", transform:"translateY(-50%)" }}>
// //               {b.text}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // SOLUTIONS
// // // ─────────────────────────────────────────────────────────────────────────────
// // function Solutions() {
// //   return (
// //     <section id="solutions" style={{ padding:"100px 0", background:"linear-gradient(160deg,#f0fdf9,#f0fdfa)" }}>
// //       <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 40px" }}>
// //         <div style={{ textAlign:"center", marginBottom:64 }}>
// //           <SectionLabel>Our Solutions</SectionLabel>
// //           <SectionTitle>End-to-End Aquaculture Care</SectionTitle>
// //           <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:17, color:"#4b5563", maxWidth:520, margin:"0 auto" }}>Three pillars that cover every critical phase of your aquaculture operation.</p>
// //         </div>

// //         <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:28 }}>
// //           {SOLUTIONS.map(s => (
// //             <div key={s.title} style={{ background:"#fff", border:`1px solid ${s.color}20`, borderRadius:24, padding:"44px 36px", transition:"all .3s", cursor:"pointer", boxShadow:"0 2px 12px rgba(0,0,0,.04)" }}
// //               onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.transform="translateY(-6px)"; el.style.boxShadow=`0 24px 56px ${s.color}22`; el.style.borderColor=`${s.color}40`; }}
// //               onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.transform="none"; el.style.boxShadow="0 2px 12px rgba(0,0,0,.04)"; el.style.borderColor=`${s.color}20`; }}
// //             >
// //               <div style={{ width:72, height:72, borderRadius:20, background:s.light, border:`1px solid ${s.color}20`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:34, marginBottom:24 }}>{s.icon}</div>
// //               <h3 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:24, fontWeight:700, color:"#0a2520", marginBottom:14 }}>{s.title}</h3>
// //               <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:15, color:"#6b7280", lineHeight:1.75 }}>{s.desc}</p>
// //               <div style={{ marginTop:24, display:"inline-flex", alignItems:"center", gap:6, fontFamily:"'DM Sans',sans-serif", fontSize:13, fontWeight:600, color:s.color }}>
// //                 Learn more <span>→</span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // PRODUCTS
// // // ─────────────────────────────────────────────────────────────────────────────
// // function Products() {
// //   const [tab, setTab] = useState<ProductTab>("Aquaculture");
// //   const tabs: ProductTab[] = ["Aquaculture", "Poultry", "Cattle"];
// //   const tabIcons: Record<ProductTab, string> = { Aquaculture:"🦐", Poultry:"🐔", Cattle:"🐄" };
// //   const products = PRODUCTS[tab];

// //   return (
// //     <section id="products" style={{ padding:"100px 0", background:"#fff" }}>
// //       <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 40px" }}>
// //         <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"flex-end", marginBottom:52 }}>
// //           <div>
// //             <SectionLabel>Products</SectionLabel>
// //             <SectionTitle>Our Product Range</SectionTitle>
// //           </div>
// //           <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:16, color:"#4b5563", lineHeight:1.8 }}>16 precision-formulated products across three livestock categories, each backed by rigorous clinical testing and GMP certification.</p>
// //         </div>

// //         {/* Tab bar */}
// //         <div style={{ display:"flex", gap:0, background:"#f9fafb", borderRadius:16, padding:6, marginBottom:44, width:"fit-content", border:"1px solid #e5e7eb" }}>
// //           {tabs.map(t => (
// //             <button key={t} onClick={()=>setTab(t)} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, fontWeight:600, padding:"10px 24px", borderRadius:12, border:"none", cursor:"pointer", transition:"all .25s", background: tab===t ? "#0d9488" : "transparent", color: tab===t ? "#fff" : "#6b7280", boxShadow: tab===t ? "0 4px 14px rgba(13,148,136,.3)" : "none" }}>
// //               {tabIcons[t]} {t}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Grid */}
// //         <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
// //           {products.map(p => (
// //             <div key={p.n} style={{ border:"1px solid #e5e7eb", borderRadius:18, padding:"28px", background:"#fff", transition:"all .25s", cursor:"pointer" }}
// //               onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="#0d9488"; el.style.boxShadow="0 12px 40px rgba(13,148,136,.1)"; el.style.transform="translateY(-3px)"; }}
// //               onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="#e5e7eb"; el.style.boxShadow="none"; el.style.transform="none"; }}
// //             >
// //               <div style={{ fontSize:36, marginBottom:16 }}>{p.e}</div>
// //               <div style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:17, fontWeight:700, color:"#0a2520", marginBottom:8 }}>{p.n}</div>
// //               <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, color:"#6b7280", lineHeight:1.65, marginBottom:16 }}>{p.b}</div>
// //               <Chip>{p.tag}</Chip>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // SUSTAINABILITY
// // // ─────────────────────────────────────────────────────────────────────────────
// // function Sustainability() {
// //   const items = [
// //     { icon:"🌱", title:"Zero Antibiotic Policy",      desc:"Every product is formulated as an antibiotic-free alternative, protecting consumer health and preventing AMR in aquatic systems." },
// //     { icon:"♻️", title:"Biodegradable Formulations",  desc:"Water treatments break down within 72 hours with zero residue in sediment or surrounding ecosystems." },
// //     { icon:"🌊", title:"Water Conservation",           desc:"PondBalance Pro reduces water exchange by 60%, saving millions of litres annually across our farm network." },
// //     { icon:"🐠", title:"Biodiversity Protection",      desc:"All products pass ecotoxicology screening to confirm zero risk to non-target species and surrounding flora." },
// //     { icon:"📦", title:"Sustainable Packaging",        desc:"80% recycled or biodegradable packaging today, targeting 100% by 2026." },
// //     { icon:"👩‍🌾", title:"Farmer Education",           desc:"200+ training programmes annually, reaching 8,000+ farmers with best practices for sustainable pond management." },
// //   ];

// //   return (
// //     <section id="sustainability" style={{ padding:"100px 0", background:"#0a2520", position:"relative", overflow:"hidden" }}>
// //       {/* Decorative */}
// //       <div style={{ position:"absolute", top:-100, right:-100, width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(13,148,136,.15) 0%,transparent 70%)", pointerEvents:"none" }} />
// //       <div style={{ position:"absolute", bottom:-80, left:-80, width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(5,150,105,.12) 0%,transparent 70%)", pointerEvents:"none" }} />

// //       <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 40px", position:"relative", zIndex:1 }}>
// //         <div style={{ textAlign:"center", marginBottom:64 }}>
// //           <div style={{ display:"inline-flex", alignItems:"center", gap:8, marginBottom:18 }}>
// //             <div style={{ width:24, height:2, background:"#34d399", borderRadius:2 }} />
// //             <span style={{ fontSize:11, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"#34d399" }}>Sustainability</span>
// //           </div>
// //           <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(30px,4vw,52px)", fontWeight:700, color:"#fff", lineHeight:1.1, marginBottom:16 }}>Farming with the Planet</h2>
// //           <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:17, color:"rgba(255,255,255,.5)", maxWidth:520, margin:"0 auto" }}>Profitability and ecological responsibility are not competing values — they define everything we make.</p>
// //         </div>

// //         <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
// //           {items.map(item => (
// //             <div key={item.title} style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.08)", borderRadius:20, padding:"36px 28px", transition:"all .3s", cursor:"pointer" }}
// //               onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(13,148,136,.1)"; el.style.borderColor="rgba(13,148,136,.3)"; el.style.transform="translateY(-4px)"; }}
// //               onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,.04)"; el.style.borderColor="rgba(255,255,255,.08)"; el.style.transform="none"; }}
// //             >
// //               <div style={{ fontSize:38, marginBottom:18 }}>{item.icon}</div>
// //               <h4 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:19, fontWeight:700, color:"#fff", marginBottom:12 }}>{item.title}</h4>
// //               <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, color:"rgba(255,255,255,.45)", lineHeight:1.75 }}>{item.desc}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // CERTIFICATES
// // // ─────────────────────────────────────────────────────────────────────────────
// // function Certificates() {
// //   return (
// //     <section id="certs" style={{ padding:"100px 0", background:"#f9fafb" }}>
// //       <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 40px" }}>
// //         <div style={{ textAlign:"center", marginBottom:64 }}>
// //           <SectionLabel>Certificates</SectionLabel>
// //           <SectionTitle>Independently Verified Quality</SectionTitle>
// //           <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:17, color:"#4b5563", maxWidth:480, margin:"0 auto" }}>Every claim we make is backed by India&apos;s top regulatory and certification bodies.</p>
// //         </div>
// //         <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
// //           {CERTS.map(c => (
// //             <div key={c.name} style={{ background:"#fff", border:"1px solid #e5e7eb", borderRadius:24, padding:"48px 36px", textAlign:"center", transition:"all .3s", cursor:"pointer" }}
// //               onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="#0d9488"; el.style.boxShadow="0 20px 60px rgba(13,148,136,.1)"; el.style.transform="translateY(-6px)"; }}
// //               onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="#e5e7eb"; el.style.boxShadow="none"; el.style.transform="none"; }}
// //             >
// //               <div style={{ fontSize:56, marginBottom:20 }}>{c.medal}</div>
// //               <h4 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:20, fontWeight:700, color:"#0a2520", marginBottom:12 }}>{c.name}</h4>
// //               <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, color:"#6b7280", lineHeight:1.7, marginBottom:24 }}>{c.body}</p>
// //               <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, fontWeight:700, color:"#0d9488", letterSpacing:".04em" }}>VIEW CERTIFICATE →</span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // EVENTS
// // // ─────────────────────────────────────────────────────────────────────────────
// // function Events() {
// //   const tagColors: Record<string, string> = { Exhibition:"#0284c7", Symposium:"#7c3aed", Training:"#059669", Conclave:"#d97706" };
// //   return (
// //     <section id="events" style={{ padding:"100px 0", background:"#fff" }}>
// //       <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 40px" }}>
// //         <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"flex-end", marginBottom:52 }}>
// //           <div>
// //             <SectionLabel>Events</SectionLabel>
// //             <SectionTitle>Meet Us at the Field</SectionTitle>
// //           </div>
// //           <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:16, color:"#4b5563", lineHeight:1.8 }}>Find the Innovare team at aquaculture exhibitions, farmer training camps, and industry symposia across India.</p>
// //         </div>
// //         <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:20 }}>
// //           {EVENTS_DATA.map(ev => (
// //             <div key={ev.title} style={{ background:"#fff", border:"1px solid #e5e7eb", borderRadius:20, overflow:"hidden", transition:"all .25s", cursor:"pointer" }}
// //               onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.boxShadow="0 16px 48px rgba(0,0,0,.08)"; el.style.transform="translateY(-3px)"; el.style.borderColor="#0d9488"; }}
// //               onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.boxShadow="none"; el.style.transform="none"; el.style.borderColor="#e5e7eb"; }}
// //             >
// //               <div style={{ display:"flex", gap:0 }}>
// //                 {/* Date block */}
// //                 <div style={{ width:90, background:"linear-gradient(160deg,#0d9488,#059669)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"24px 0", flexShrink:0 }}>
// //                   <div style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:32, fontWeight:700, color:"#fff", lineHeight:1 }}>{ev.d}</div>
// //                   <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:".1em", color:"rgba(255,255,255,.7)" }}>{ev.m}</div>
// //                 </div>
// //                 {/* Content */}
// //                 <div style={{ padding:"24px 28px", flex:1 }}>
// //                   <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, fontWeight:700, letterSpacing:".06em", textTransform:"uppercase", color:tagColors[ev.tag]||"#0d9488", background:`${tagColors[ev.tag]||"#0d9488"}15`, padding:"3px 10px", borderRadius:12 }}>{ev.tag}</span>
// //                   <h4 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:18, fontWeight:700, color:"#0a2520", margin:"10px 0 6px" }}>{ev.title}</h4>
// //                   <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, color:"#9ca3af" }}>📍 {ev.loc}</div>
// //                   <div style={{ marginTop:16, fontFamily:"'DM Sans',sans-serif", fontSize:12, fontWeight:700, color:"#0d9488" }}>Register →</div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // CONTACT
// // // ─────────────────────────────────────────────────────────────────────────────
// // function Contact() {
// //   const [form, setForm] = useState({ name:"", phone:"", location:"", species:"", message:"" });
// //   const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => setForm(f=>({...f,[k]:e.target.value}));

// //   const inputStyle: React.CSSProperties = {
// //     width:"100%", fontFamily:"'DM Sans',sans-serif", fontSize:14, color:"#0a2520",
// //     background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.15)",
// //     borderRadius:12, padding:"13px 18px", outline:"none", transition:"border .2s",
// //   };

// //   return (
// //     <section id="contact" style={{ padding:"100px 0", background:"linear-gradient(160deg,#0a2520,#0d3b30)" }}>
// //       <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 40px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>

// //         {/* Info */}
// //         <div>
// //           <div style={{ display:"inline-flex", alignItems:"center", gap:8, marginBottom:18 }}>
// //             <div style={{ width:24, height:2, background:"#34d399", borderRadius:2 }} />
// //             <span style={{ fontSize:11, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"#34d399", fontFamily:"'DM Sans',sans-serif" }}>Contact</span>
// //           </div>
// //           <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(30px,4vw,52px)", fontWeight:700, color:"#fff", lineHeight:1.1, marginBottom:20 }}>Let&apos;s Grow Your Farm Together</h2>
// //           <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:16, color:"rgba(255,255,255,.5)", lineHeight:1.85, marginBottom:48, maxWidth:420 }}>Our aquaculture specialists will help you select the right protocol for your species and pond conditions.</p>

// //           {[
// //             { icon:"📍", label:"Address", val:"Innovare Biopharma LLP, Hyderabad, Telangana, India" },
// //             { icon:"📞", label:"Phone",   val:"+91 98491 XXXXX" },
// //             { icon:"✉️", label:"Email",   val:"info@innovarebiopharma.com" },
// //           ].map(item => (
// //             <div key={item.label} style={{ display:"flex", gap:16, alignItems:"flex-start", marginBottom:28 }}>
// //               <div style={{ width:48, height:48, background:"rgba(13,148,136,.2)", border:"1px solid rgba(13,148,136,.3)", borderRadius:14, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>{item.icon}</div>
// //               <div>
// //                 <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(255,255,255,.35)", marginBottom:4 }}>{item.label}</div>
// //                 <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:15, fontWeight:500, color:"#fff" }}>{item.val}</div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Form */}
// //         <div style={{ background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.1)", borderRadius:28, padding:"44px 40px", backdropFilter:"blur(12px)" }}>
// //           <h3 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:22, fontWeight:700, color:"#fff", marginBottom:28 }}>Send an Enquiry</h3>

// //           {[
// //             { label:"Full Name",        key:"name",     type:"text", placeholder:"Your name" },
// //             { label:"Phone / WhatsApp", key:"phone",    type:"tel",  placeholder:"+91 XXXXX XXXXX" },
// //             { label:"Farm Location",    key:"location", type:"text", placeholder:"State, District" },
// //           ].map(f => (
// //             <div key={f.key} style={{ marginBottom:16 }}>
// //               <label style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, fontWeight:700, letterSpacing:".08em", textTransform:"uppercase", color:"rgba(255,255,255,.4)", display:"block", marginBottom:7 }}>{f.label}</label>
// //               <input type={f.type} placeholder={f.placeholder} value={(form as any)[f.key]} onChange={set(f.key)} style={{ ...inputStyle, color:"#fff" }} />
// //             </div>
// //           ))}

// //           <div style={{ marginBottom:16 }}>
// //             <label style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, fontWeight:700, letterSpacing:".08em", textTransform:"uppercase", color:"rgba(255,255,255,.4)", display:"block", marginBottom:7 }}>Species Farmed</label>
// //             <select value={form.species} onChange={set("species")} style={{ ...inputStyle, cursor:"pointer", color:"#fff" }}>
// //               <option value="" style={{ color:"#000" }}>Select species...</option>
// //               {["Vannamei Shrimp","Monodon Shrimp","Tilapia","Rohu / Catla","Crab","Poultry","Cattle"].map(s=><option key={s} value={s} style={{ color:"#000" }}>{s}</option>)}
// //             </select>
// //           </div>

// //           <div style={{ marginBottom:24 }}>
// //             <label style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, fontWeight:700, letterSpacing:".08em", textTransform:"uppercase", color:"rgba(255,255,255,.4)", display:"block", marginBottom:7 }}>Message</label>
// //             <textarea rows={3} placeholder="Describe your needs..." value={form.message} onChange={set("message")} style={{ ...inputStyle, resize:"none", color:"#fff" }} />
// //           </div>

// //           <button style={{ width:"100%", fontFamily:"'DM Sans',sans-serif", fontSize:15, fontWeight:700, color:"#fff", background:"linear-gradient(135deg,#0d9488,#059669)", border:"none", padding:"16px", borderRadius:16, cursor:"pointer", boxShadow:"0 8px 28px rgba(13,148,136,.35)", transition:"all .3s", letterSpacing:".02em" }}
// //             onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 14px 40px rgba(13,148,136,.5)"; }}
// //             onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 8px 28px rgba(13,148,136,.35)"; }}
// //           >Send Enquiry →</button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // FOOTER
// // // ─────────────────────────────────────────────────────────────────────────────
// // function Footer() {
// //   const cols = {
// //     Products:  ["Aquaculture","Poultry","Cattle","View All"],
// //     Solutions: ["Nutrition","Health","Environment"],
// //     Company:   ["About Us","Certificates","Events","Contact"],
// //   };
// //   return (
// //     <footer style={{ background:"#061411", padding:"64px 40px 32px" }}>
// //       <div style={{ maxWidth:1280, margin:"0 auto" }}>
// //         <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:48, marginBottom:52 }}>
// //           <div>
// //             <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
// //               <div style={{ width:40, height:40, background:"linear-gradient(135deg,#0d9488,#059669)", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20 }}>🦐</div>
// //               <div style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:16, fontWeight:700, color:"#fff" }}>Innovare Biopharma LLP</div>
// //             </div>
// //             <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, color:"rgba(255,255,255,.35)", lineHeight:1.8 }}>Solution to Aquaculture Health.<br />GMP-certified, trusted by 500+ farms across India.</p>
// //             <div style={{ display:"flex", gap:10, marginTop:20 }}>
// //               {["📘","🐦","📸"].map(icon=>(
// //                 <div key={icon} style={{ width:34, height:34, background:"rgba(255,255,255,.07)", border:"1px solid rgba(255,255,255,.1)", borderRadius:9, display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, cursor:"pointer" }}>{icon}</div>
// //               ))}
// //             </div>
// //           </div>
// //           {Object.entries(cols).map(([heading, links]) => (
// //             <div key={heading}>
// //               <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"rgba(255,255,255,.4)", marginBottom:16 }}>{heading}</div>
// //               {links.map(link=>(
// //                 <a key={link} href="#" style={{ display:"block", fontFamily:"'DM Sans',sans-serif", fontSize:14, color:"rgba(255,255,255,.28)", marginBottom:10, textDecoration:"none", transition:"color .2s" }}
// //                   onMouseEnter={e=>((e.currentTarget as HTMLElement).style.color="#34d399")}
// //                   onMouseLeave={e=>((e.currentTarget as HTMLElement).style.color="rgba(255,255,255,.28)")}
// //                 >{link}</a>
// //               ))}
// //             </div>
// //           ))}
// //         </div>
// //         <div style={{ borderTop:"1px solid rgba(255,255,255,.06)", paddingTop:24, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
// //           <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, color:"rgba(255,255,255,.25)" }}>© 2026 Innovare Biopharma LLP. All rights reserved.</div>
// //           <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, color:"rgba(255,255,255,.25)" }}>GMP · ISO 9001:2015 · CAA Approved</div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // PAGE + GLOBAL STYLES
// // // ─────────────────────────────────────────────────────────────────────────────
// // export default function HomePage() {
// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
// //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// //         html { scroll-behavior: smooth; }
// //         body { font-family: 'DM Sans', sans-serif; background: #fff; overflow-x: hidden; }

// //         @keyframes fadeUp  { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
// //         @keyframes blink   { 0%,100% { opacity: .5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2); } }
// //         @keyframes floatCard { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
// //         @keyframes spin    { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
// //         @keyframes spinRev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }

// //         input::placeholder, textarea::placeholder, select::placeholder { color: rgba(255,255,255,.3); }

// //         @media (max-width: 1024px) {
// //           section > div[style*="gridTemplateColumns: 1fr 1fr"],
// //           section > div[style*="grid-template-columns: 1fr 1fr"],
// //           div[style*="gridTemplateColumns: 1fr 440px"],
// //           div[style*="grid-template-columns: 1fr 440px"] {
// //             grid-template-columns: 1fr !important;
// //           }
// //           div[style*="gridTemplateColumns: repeat(3,1fr)"],
// //           div[style*="grid-template-columns: repeat(3,1fr)"] {
// //             grid-template-columns: 1fr 1fr !important;
// //           }
// //         }
// //         @media (max-width: 640px) {
// //           div[style*="gridTemplateColumns: repeat(2,1fr)"],
// //           div[style*="grid-template-columns: repeat(2,1fr)"],
// //           div[style*="gridTemplateColumns: 1fr 1fr"],
// //           div[style*="grid-template-columns: 1fr 1fr"],
// //           div[style*="gridTemplateColumns: repeat(3,1fr)"],
// //           div[style*="grid-template-columns: repeat(3,1fr)"],
// //           div[style*="gridTemplateColumns: 2fr 1fr 1fr 1fr"],
// //           div[style*="grid-template-columns: 2fr 1fr 1fr 1fr"],
// //           div[style*="gridTemplateColumns: 1fr 440px"],
// //           div[style*="grid-template-columns: 1fr 440px"] {
// //             grid-template-columns: 1fr !important;
// //           }
// //           section { padding: 64px 0 !important; }
// //           div[style*="padding: 0 40px"] { padding: 0 20px !important; }
// //         }
// //       `}</style>
// //       <Navbar />
// //         <Hero />
// //         <About />
// //         <Solutions />
// //         <Products />
// //         <Sustainability />
// //         <Certificates />
// //         <Events />
// //         <Contact />
// //      <Footer></Footer>
// //     </>
// //   );
// // }

// "use client";

// import { useEffect, useRef, useState, useCallback } from "react";

// // ─────────────────────────────────────────────────────────────────────────────
// // CANVAS: Biopharma Waterfield Animation
// // Floating microorganisms, DNA helix rings, water caustics on soft teal bg
// // ─────────────────────────────────────────────────────────────────────────────
// function BioCanvas() {
//   const ref = useRef<HTMLCanvasElement>(null);
//   useEffect(() => {
//     const c = ref.current!;
//     const ctx = c.getContext("2d")!;
//     let W = 0, H = 0, T = 0, raf = 0;
//     const dpr = window.devicePixelRatio || 1;

//     // Entities
//     let orbs: { x: number; y: number; r: number; vx: number; vy: number; phase: number; hue: number; pulse: number }[] = [];
//     let rings: { x: number; y: number; r: number; rot: number; speed: number; opacity: number; segments: number }[] = [];
//     let helices: { x: number; y: number; len: number; phase: number; speed: number; color: string }[] = [];
//     let spores: { x: number; y: number; vx: number; vy: number; r: number; phase: number; alpha: number }[] = [];
//     let waves: { y: number; amp: number; freq: number; speed: number; color: string }[] = [];

//     const rnd = (a: number, b: number) => a + Math.random() * (b - a);

//     const resize = () => {
//       W = c.offsetWidth; H = c.offsetHeight;
//       c.width = W * dpr; c.height = H * dpr;
//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

//       orbs = Array.from({ length: 18 }, () => ({
//         x: rnd(0, W), y: rnd(0, H),
//         vx: rnd(-0.18, 0.18), vy: rnd(-0.12, 0.12),
//         r: rnd(30, 90), phase: rnd(0, Math.PI * 2),
//         hue: rnd(155, 195), pulse: rnd(0.003, 0.008),
//       }));

//       rings = Array.from({ length: 12 }, () => ({
//         x: rnd(50, W - 50), y: rnd(50, H - 50),
//         r: rnd(20, 65), rot: rnd(0, Math.PI * 2),
//         speed: rnd(0.003, 0.012) * (Math.random() < 0.5 ? 1 : -1),
//         opacity: rnd(0.06, 0.18),
//         segments: Math.floor(rnd(5, 12)),
//       }));

//       helices = Array.from({ length: 5 }, (_, i) => ({
//         x: rnd(80, W - 80),
//         y: rnd(H * 0.1, H * 0.9),
//         len: rnd(120, 200),
//         phase: (i / 5) * Math.PI * 2,
//         speed: rnd(0.008, 0.018),
//         color: ["#0d9488", "#059669", "#0891b2", "#0ea5e9", "#14b8a6"][i % 5],
//       }));

//       spores = Array.from({ length: 40 }, () => ({
//         x: rnd(0, W), y: rnd(0, H),
//         vx: rnd(-0.3, 0.3), vy: rnd(-0.5, -0.1),
//         r: rnd(2, 6), phase: rnd(0, Math.PI * 2), alpha: rnd(0.1, 0.4),
//       }));

//       waves = [
//         { y: H * 0.55, amp: 22, freq: 0.006, speed: 0.6,  color: "rgba(13,148,136,0.045)" },
//         { y: H * 0.65, amp: 16, freq: 0.009, speed: 0.9,  color: "rgba(5,150,105,0.04)"  },
//         { y: H * 0.75, amp: 12, freq: 0.012, speed: 1.2,  color: "rgba(8,145,178,0.035)" },
//       ];
//     };

//     const drawBg = () => {
//       const g = ctx.createLinearGradient(0, 0, W * 0.6, H);
//       g.addColorStop(0, "#f0fdf9");
//       g.addColorStop(0.4, "#ecfdf5");
//       g.addColorStop(0.75, "#f0fdfa");
//       g.addColorStop(1, "#e0f2fe");
//       ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
//     };

//     const drawNoise = () => {
//       // Subtle dot texture
//       ctx.save();
//       ctx.globalAlpha = 0.018;
//       for (let i = 0; i < 120; i++) {
//         const nx = rnd(0, W), ny = rnd(0, H);
//         ctx.fillStyle = "#0d9488";
//         ctx.beginPath(); ctx.arc(nx, ny, 0.7, 0, Math.PI * 2); ctx.fill();
//       }
//       ctx.restore();
//     };

//     const drawMeshGlow = () => {
//       [
//         { cx: W * 0.15, cy: H * 0.25, r: W * 0.35, c: "rgba(13,148,136,0.08)" },
//         { cx: W * 0.85, cy: H * 0.6,  r: W * 0.3,  c: "rgba(5,150,105,0.06)"  },
//         { cx: W * 0.5,  cy: H * 0.85, r: W * 0.4,  c: "rgba(8,145,178,0.07)"  },
//         { cx: W * 0.7,  cy: H * 0.15, r: W * 0.25, c: "rgba(20,184,166,0.06)" },
//       ].forEach(({ cx, cy, r, c }) => {
//         const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
//         g.addColorStop(0, c); g.addColorStop(1, "rgba(0,0,0,0)");
//         ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
//       });
//     };

//     const drawOrbs = () => {
//       orbs.forEach(o => {
//         o.x += o.vx; o.y += o.vy; o.phase += o.pulse;
//         if (o.x < -o.r) o.x = W + o.r; if (o.x > W + o.r) o.x = -o.r;
//         if (o.y < -o.r) o.y = H + o.r; if (o.y > H + o.r) o.y = -o.r;
//         const pulsed = o.r * (0.88 + 0.12 * Math.sin(o.phase));
//         const alpha = 0.06 + 0.04 * Math.sin(o.phase * 1.3);
//         const g = ctx.createRadialGradient(o.x - pulsed * 0.2, o.y - pulsed * 0.2, 0, o.x, o.y, pulsed);
//         g.addColorStop(0, `hsla(${o.hue},75%,65%,${alpha * 2.5})`);
//         g.addColorStop(0.5, `hsla(${o.hue},70%,55%,${alpha})`);
//         g.addColorStop(1, `hsla(${o.hue},65%,50%,0)`);
//         ctx.fillStyle = g;
//         ctx.beginPath(); ctx.arc(o.x, o.y, pulsed, 0, Math.PI * 2); ctx.fill();
//       });
//     };

//     const drawRings = () => {
//       rings.forEach(r => {
//         r.rot += r.speed;
//         ctx.save();
//         ctx.translate(r.x, r.y);
//         ctx.rotate(r.rot);
//         ctx.globalAlpha = r.opacity;

//         // Outer ring
//         ctx.beginPath(); ctx.arc(0, 0, r.r, 0, Math.PI * 2);
//         ctx.strokeStyle = "#0d9488"; ctx.lineWidth = 0.8; ctx.stroke();

//         // Dashed inner
//         ctx.setLineDash([3, 4]);
//         ctx.beginPath(); ctx.arc(0, 0, r.r * 0.65, 0, Math.PI * 2);
//         ctx.strokeStyle = "#059669"; ctx.lineWidth = 0.5; ctx.stroke();
//         ctx.setLineDash([]);

//         // Dots on ring
//         for (let i = 0; i < r.segments; i++) {
//           const a = (i / r.segments) * Math.PI * 2;
//           const dx = Math.cos(a) * r.r, dy = Math.sin(a) * r.r;
//           ctx.beginPath(); ctx.arc(dx, dy, 2.5, 0, Math.PI * 2);
//           ctx.fillStyle = "#0d9488"; ctx.fill();
//         }

//         // Center dot
//         ctx.beginPath(); ctx.arc(0, 0, 3, 0, Math.PI * 2);
//         ctx.fillStyle = "#059669"; ctx.fill();

//         ctx.restore();
//       });
//     };

//     const drawHelices = () => {
//       helices.forEach(h => {
//         h.phase += h.speed;
//         ctx.save();
//         ctx.globalAlpha = 0.3;
//         const steps = 60;
//         const dx = h.len / steps;

//         // Strand A
//         ctx.beginPath();
//         for (let i = 0; i <= steps; i++) {
//           const px = h.x - h.len / 2 + i * dx;
//           const py = h.y + Math.sin(h.phase + i * 0.18) * 18;
//           i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
//         }
//         ctx.strokeStyle = h.color; ctx.lineWidth = 1.5; ctx.stroke();

//         // Strand B
//         ctx.beginPath();
//         for (let i = 0; i <= steps; i++) {
//           const px = h.x - h.len / 2 + i * dx;
//           const py = h.y + Math.sin(h.phase + i * 0.18 + Math.PI) * 18;
//           i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
//         }
//         ctx.strokeStyle = h.color; ctx.lineWidth = 1.5; ctx.stroke();

//         // Rungs
//         ctx.globalAlpha = 0.15;
//         for (let i = 0; i <= steps; i += 4) {
//           const px = h.x - h.len / 2 + i * dx;
//           const pyA = h.y + Math.sin(h.phase + i * 0.18) * 18;
//           const pyB = h.y + Math.sin(h.phase + i * 0.18 + Math.PI) * 18;
//           ctx.beginPath(); ctx.moveTo(px, pyA); ctx.lineTo(px, pyB);
//           ctx.strokeStyle = h.color; ctx.lineWidth = 0.8; ctx.stroke();
//         }
//         ctx.restore();
//       });
//     };

//     const drawSpores = () => {
//       spores.forEach(s => {
//         s.x += s.vx + Math.sin(T * 0.4 + s.phase) * 0.2;
//         s.y += s.vy;
//         s.phase += 0.02;
//         if (s.y < -10) { s.y = H + 5; s.x = Math.random() * W; }
//         if (s.x < -10) s.x = W + 5; if (s.x > W + 10) s.x = -5;
//         const pulse = 0.6 + 0.4 * Math.sin(s.phase * 3);
//         ctx.save();
//         ctx.globalAlpha = s.alpha * pulse;
//         const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 2);
//         g.addColorStop(0, "rgba(13,148,136,1)");
//         g.addColorStop(1, "rgba(13,148,136,0)");
//         ctx.fillStyle = g;
//         ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 2, 0, Math.PI * 2); ctx.fill();
//         ctx.restore();
//       });
//     };

//     const drawWaves = () => {
//       waves.forEach(w => {
//         ctx.beginPath(); ctx.moveTo(0, H);
//         for (let x = 0; x <= W; x += 3) {
//           const y = w.y
//             + Math.sin(x * w.freq + T * w.speed) * w.amp
//             + Math.sin(x * w.freq * 0.6 + T * w.speed * 0.7 + 1) * w.amp * 0.4;
//           ctx.lineTo(x, y);
//         }
//         ctx.lineTo(W, H); ctx.fillStyle = w.color; ctx.fill();
//       });
//     };

//     const drawGrid = () => {
//       ctx.save();
//       ctx.globalAlpha = 0.028;
//       ctx.strokeStyle = "#0d9488";
//       ctx.lineWidth = 0.5;
//       const gx = 60, gy = 60;
//       for (let x = 0; x <= W; x += gx) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
//       for (let y = 0; y <= H; y += gy) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
//       ctx.restore();
//     };

//     const loop = () => {
//       ctx.clearRect(0, 0, W, H);
//       drawBg(); drawMeshGlow(); drawGrid();
//       drawOrbs(); drawRings(); drawHelices(); drawSpores(); drawWaves();
//       T += 0.012;
//       raf = requestAnimationFrame(loop);
//     };

//     const ro = new ResizeObserver(resize);
//     ro.observe(c); resize(); loop();
//     return () => { cancelAnimationFrame(raf); ro.disconnect(); };
//   }, []);

//   return (
//     <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // ROTATING WORD HOOK
// // ─────────────────────────────────────────────────────────────────────────────
// function useRotatingWord(words: string[], ms = 2600) {
//   const [i, setI] = useState(0);
//   const [visible, setVisible] = useState(true);
//   useEffect(() => {
//     const id = setInterval(() => {
//       setVisible(false);
//       setTimeout(() => { setI(p => (p + 1) % words.length); setVisible(true); }, 400);
//     }, ms);
//     return () => clearInterval(id);
//   }, [words.length, ms]);
//   return { word: words[i], visible, idx: i };
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // DATA
// // ─────────────────────────────────────────────────────────────────────────────
// const WORDS  = ["Healthier.", "Stronger.", "Smarter.", "Greener."];
// const ACCENTS = ["#0d9488", "#059669", "#0284c7", "#0f766e"];

// const STATS = [
//   { val: "500+", sub: "Farms Served",      icon: "🌾" },
//   { val: "95%",  sub: "Survival Rate",     icon: "💪" },
//   { val: "20+",  sub: "Years of R&D",      icon: "🔬" },
//   { val: "15+",  sub: "Indian States",     icon: "🗺️" },
// ];

// const SOLUTIONS = [
//   { icon: "🌿", title: "Nutrition",    color: "#059669", light: "#f0fdf4", desc: "Precision feed supplements, vitamins, and probiotics optimised for FCR and rapid growth across all species." },
//   { icon: "💊", title: "Health",       color: "#0d9488", light: "#f0fdfa", desc: "Antibiotic-free immunity boosters, antiparasitic agents, and curative solutions with zero consumer residue." },
//   { icon: "🌊", title: "Environment",  color: "#0284c7", light: "#eff6ff", desc: "Water quality management, algae control, and pond probiotic systems for sustainable high-density culture." },
// ];

// const PRODUCTS = {
//   Aquaculture: [
//     { e:"🛡️", n:"AquaShield Pro",   b:"Boosts innate immunity by 95%",        tag:"Best Seller" },
//     { e:"🌊", n:"GillGuard Oxy",    b:"Improves O₂ absorption by 40%",        tag:"New Formula" },
//     { e:"⚡", n:"VitaGrow Marine",  b:"Accelerates growth rate by 30%",       tag:"Top Rated"   },
//     { e:"🧪", n:"PondBalance Pro",  b:"Stabilises pH & eliminates ammonia",   tag:"Eco-Safe"    },
//     { e:"🦠", n:"BioProtect Plus",  b:"Competitive exclusion of Vibrio",      tag:"Probiotic"   },
//     { e:"💧", n:"AlgaeGuard CW",   b:"Selective cyanobacteria control",       tag:"Eco-Safe"    },
//   ],
//   Poultry: [
//     { e:"🐔", n:"PoultryShield Imm", b:"Broad-spectrum broiler immunity",     tag:"Best Seller" },
//     { e:"🥚", n:"LayerMax Pro",      b:"+22% egg production consistency",     tag:"Layer Spec." },
//     { e:"🌾", n:"FeedConvert Plus",  b:"Improved FCR for broiler farms",      tag:"Cost Saver"  },
//   ],
//   Cattle: [
//     { e:"🐄", n:"CattleCare Boost", b:"Boosts milk yield & immunity",        tag:"Dairy Farms" },
//     { e:"💪", n:"BeefMax Growth",   b:"Optimised weight gain & muscle",      tag:"Beef Spec."  },
//   ],
// };
// type ProductTab = keyof typeof PRODUCTS;

// const CERTS = [
//   { medal: "🏅", name: "GMP Certificate",      body: "Pharmaceutical-grade manufacturing practice, every batch." },
//   { medal: "📋", name: "ISO 9001:2015",         body: "International quality management across all operations." },
//   { medal: "📜", name: "CAA Approved",          body: "Central Aquaculture Authority product certifications." },
// ];

// const EVENTS_DATA = [
//   { d:"14", m:"JUN", title:"India Aqua Expo 2026",        loc:"Hyderabad ITEC, Telangana",     tag:"Exhibition" },
//   { d:"28", m:"JUN", title:"Aquaculture Health Symposium", loc:"CIBA Campus, Chennai",          tag:"Symposium"  },
//   { d:"12", m:"JUL", title:"Farmer Training Programme",    loc:"Nellore District, Andhra Pradesh", tag:"Training" },
//   { d:"05", m:"AUG", title:"Shrimp Farmers' Conclave",    loc:"Vijayawada Convention Centre",   tag:"Conclave"  },
// ];

// const SPECIES = [
//   { name: "Vannamei", icon: "🦐", col: "#f97316" },
//   { name: "Monodon",  icon: "🦐", col: "#fb923c" },
//   { name: "Tilapia",  icon: "🐟", col: "#0ea5e9" },
//   { name: "Rohu",     icon: "🐟", col: "#6366f1" },
//   { name: "Catla",    icon: "🐟", col: "#8b5cf6" },
//   { name: "Crab",     icon: "🦀", col: "#ef4444" },
// ];

// // ─────────────────────────────────────────────────────────────────────────────
// // TINY SHARED COMPONENTS
// // ─────────────────────────────────────────────────────────────────────────────
// function Chip({ children, color = "#0d9488", bg = "#f0fdfa" }: { children: React.ReactNode; color?: string; bg?: string }) {
//   return (
//     <span style={{ display:"inline-block", fontSize:10, fontWeight:700, letterSpacing:".06em", textTransform:"uppercase", padding:"3px 10px", borderRadius:20, background:bg, color, border:`1px solid ${color}30` }}>
//       {children}
//     </span>
//   );
// }

// function SectionLabel({ children }: { children: React.ReactNode }) {
//   return (
//     <div style={{ display:"inline-flex", alignItems:"center", gap:8, marginBottom:18 }}>
//       <div style={{ width:24, height:2, background:"#0d9488", borderRadius:2 }} />
//       <span style={{ fontSize:11, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"#0d9488" }}>{children}</span>
//     </div>
//   );
// }

// function SectionTitle({ children }: { children: React.ReactNode }) {
//   return <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(30px,4vw,52px)", fontWeight:700, color:"#0a2520", lineHeight:1.1, marginBottom:16 }}>{children}</h2>;
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // NAVBAR
// // ─────────────────────────────────────────────────────────────────────────────
// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", fn, { passive: true });
//     return () => window.removeEventListener("scroll", fn);
//   }, []);

//   const goto = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };

//   const navStyle: React.CSSProperties = {
//     position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
//     height: 68,
//     background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
//     backdropFilter: scrolled ? "blur(16px)" : "none",
//     borderBottom: scrolled ? "1px solid rgba(13,148,136,0.12)" : "none",
//     boxShadow: scrolled ? "0 2px 24px rgba(13,148,136,0.08)" : "none",
//     transition: "all .4s ease",
//     display: "flex", alignItems: "center",
//   };

//   const links = [
//     { label: "About",          id: "about" },
//     { label: "Solutions",      id: "solutions" },
//     { label: "Products",       id: "products" },
//     { label: "Sustainability", id: "sustainability" },
//     { label: "Certificates",   id: "certs" },
//     { label: "Events",         id: "events" },
//     { label: "Contact",        id: "contact" },
//   ];

//   return (
//     <nav style={navStyle}>
//       <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 40px", width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
//         {/* Logo */}
//         <button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{ display:"flex", alignItems:"center", gap:12, background:"none", border:"none", cursor:"pointer", padding:0 }}>
//           <div style={{ width:42, height:42, background:"linear-gradient(135deg,#0d9488,#059669)", borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, boxShadow:"0 4px 14px rgba(13,148,136,.3)" }}>🦐</div>
//           <div style={{ textAlign:"left" }}>
//             <div style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:15, fontWeight:700, color:"#0a2520", lineHeight:1.1 }}>Innovare Biopharma</div>
//             <div style={{ fontSize:9, color:"#6b7280", letterSpacing:".5px", marginTop:1 }}>Solution to Aquaculture Health</div>
//           </div>
//         </button>

//         {/* Desktop links */}
//         <div style={{ display:"flex", alignItems:"center", gap:2 }}>
//           {links.map(l => (
//             <button key={l.id} onClick={()=>goto(l.id)} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, fontWeight:600, color:"#374151", padding:"7px 14px", borderRadius:8, background:"none", border:"none", cursor:"pointer", letterSpacing:".02em", transition:"all .2s" }}
//               onMouseEnter={e=>(e.currentTarget.style.background="rgba(13,148,136,.08)")}
//               onMouseLeave={e=>(e.currentTarget.style.background="none")}
//             >{l.label}</button>
//           ))}
//         </div>

//         {/* CTA */}
//         <button onClick={()=>goto("contact")} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, fontWeight:700, color:"#fff", background:"linear-gradient(135deg,#0d9488,#059669)", border:"none", padding:"10px 24px", borderRadius:24, cursor:"pointer", boxShadow:"0 4px 16px rgba(13,148,136,.35)", transition:"all .3s", letterSpacing:".02em" }}
//           onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 28px rgba(13,148,136,.45)"; }}
//           onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 4px 16px rgba(13,148,136,.35)"; }}
//         >Get in Touch</button>
//       </div>
//     </nav>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // HERO
// // ─────────────────────────────────────────────────────────────────────────────
// function Hero() {
//   const { word, visible, idx } = useRotatingWord(WORDS, 2600);
//   const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

//   return (
//     <section id="home" style={{ minHeight:"100vh", position:"relative", overflow:"hidden", display:"flex", alignItems:"center", paddingTop:68 }}>
//       <BioCanvas />

//       {/* Diagonal accent band */}
//       <div style={{ position:"absolute", top:0, right:0, width:"45%", height:"100%", background:"linear-gradient(160deg,rgba(13,148,136,0.06) 0%,rgba(5,150,105,0.04) 100%)", clipPath:"polygon(18% 0,100% 0,100% 100%,0% 100%)", pointerEvents:"none" }} />

//       <div style={{ position:"relative", zIndex:2, maxWidth:1280, margin:"0 auto", padding:"80px 40px 100px", width:"100%", display:"grid", gridTemplateColumns:"1fr 440px", gap:80, alignItems:"center" }}>

//         {/* LEFT */}
//         <div style={{ animation:"fadeUp .9s ease both" }}>
//           {/* Top badge */}
//           <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(13,148,136,.1)", border:"1px solid rgba(13,148,136,.22)", borderRadius:30, padding:"6px 16px", marginBottom:32 }}>
//             <span style={{ width:6, height:6, borderRadius:"50%", background:"#0d9488", animation:"blink 2s ease-in-out infinite", flexShrink:0 }} />
//             <span style={{ fontSize:10, fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", color:"#0d9488" }}>India&apos;s #1 Aquaculture Health Solutions</span>
//           </div>

//           {/* Headline */}
//           <h1 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(44px,6vw,88px)", fontWeight:700, lineHeight:1.0, color:"#0a2520", marginBottom:12 }}>
//             <span style={{ display:"block" }}>Making</span>
//             <span style={{ display:"block" }}>Aquaculture</span>
//             <span style={{ display:"block", minHeight:"1.1em" }}>
//               <span style={{
//                 color: ACCENTS[idx],
//                 opacity: visible ? 1 : 0,
//                 transform: visible ? "translateY(0)" : "translateY(24px)",
//                 display:"inline-block",
//                 transition:"all .4s cubic-bezier(.34,1.4,.64,1)",
//                 fontStyle:"italic",
//               }}>{word}</span>
//             </span>
//           </h1>

//           {/* Sub */}
//           <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:17, color:"#374151", lineHeight:1.85, maxWidth:500, marginBottom:44 }}>
//             GMP-certified health products trusted by <strong style={{ color:"#0d9488" }}>500+ farms</strong> across India — from immunity boosters to precision water management.
//           </p>

//           {/* CTAs */}
//           <div style={{ display:"flex", gap:14, flexWrap:"wrap", marginBottom:52 }}>
//             <button onClick={()=>goto("products")} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, fontWeight:700, color:"#fff", background:"linear-gradient(135deg,#0d9488,#059669)", border:"none", padding:"15px 38px", borderRadius:50, cursor:"pointer", boxShadow:"0 8px 28px rgba(13,148,136,.38)", transition:"all .3s", letterSpacing:".02em" }}
//               onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 16px 40px rgba(13,148,136,.55)"; }}
//               onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 8px 28px rgba(13,148,136,.38)"; }}
//             >Explore Products</button>
//             <button onClick={()=>goto("about")} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, fontWeight:600, color:"#0d9488", background:"transparent", border:"2px solid rgba(13,148,136,.35)", padding:"14px 36px", borderRadius:50, cursor:"pointer", transition:"all .3s" }}
//               onMouseEnter={e=>{ e.currentTarget.style.borderColor="#0d9488"; e.currentTarget.style.background="rgba(13,148,136,.06)"; }}
//               onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(13,148,136,.35)"; e.currentTarget.style.background="transparent"; }}
//             >Our Story</button>
//           </div>

//           {/* Trust strip */}
//           <div style={{ display:"flex", gap:24, flexWrap:"wrap" }}>
//             {["GMP Certified","ISO 9001:2015","Zero Toxicity","CAA Approved"].map(t => (
//               <div key={t} style={{ display:"flex", alignItems:"center", gap:6 }}>
//                 <div style={{ width:18, height:18, borderRadius:"50%", background:"rgba(13,148,136,.15)", border:"1px solid rgba(13,148,136,.3)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, color:"#0d9488", fontWeight:700 }}>✓</div>
//                 <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, color:"#6b7280", fontWeight:500 }}>{t}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT — glass card stack */}
//         <div style={{ display:"flex", flexDirection:"column", gap:16, animation:"fadeUp .9s .2s ease both" }}>
//           {/* Stats card */}
//           <div style={{ background:"rgba(255,255,255,0.82)", backdropFilter:"blur(20px)", border:"1px solid rgba(13,148,136,.18)", borderRadius:24, padding:"28px 24px", boxShadow:"0 12px 48px rgba(13,148,136,.1)" }}>
//             <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:"#9ca3af", marginBottom:20 }}>By The Numbers</div>
//             <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
//               {STATS.map(s => (
//                 <div key={s.sub}>
//                   <div style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:30, fontWeight:700, color:"#0d9488", lineHeight:1 }}>{s.val}</div>
//                   <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"#6b7280", marginTop:4 }}>{s.sub}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Species card */}
//           <div style={{ background:"rgba(255,255,255,0.82)", backdropFilter:"blur(20px)", border:"1px solid rgba(13,148,136,.14)", borderRadius:24, padding:"24px", boxShadow:"0 12px 48px rgba(13,148,136,.08)", animation:"floatCard 5s ease-in-out infinite" }}>
//             <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:"#9ca3af", marginBottom:16 }}>Supported Species</div>
//             <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
//               {SPECIES.map(sp => (
//                 <div key={sp.name} style={{ background:`${sp.col}12`, border:`1px solid ${sp.col}30`, borderRadius:10, padding:"5px 10px", display:"flex", alignItems:"center", gap:5 }}>
//                   <span style={{ fontSize:13 }}>{sp.icon}</span>
//                   <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, fontWeight:700, color:sp.col }}>{sp.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Live banner */}
//           <div style={{ background:"linear-gradient(135deg,#0d9488,#059669)", borderRadius:20, padding:"20px 24px", display:"flex", alignItems:"center", gap:16, boxShadow:"0 8px 32px rgba(13,148,136,.3)", animation:"floatCard 6s 1s ease-in-out infinite" }}>
//             <div style={{ width:44, height:44, background:"rgba(255,255,255,.18)", borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>🔬</div>
//             <div>
//               <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, fontWeight:700, color:"#fff" }}>20+ Years of R&D Excellence</div>
//               <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"rgba(255,255,255,.7)", marginTop:2 }}>Science-first aquaculture innovation since 2004</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8, zIndex:3 }}>
//         <div style={{ width:1, height:48, background:"linear-gradient(to bottom,transparent,#0d9488)", marginBottom:4 }} />
//         <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:9, letterSpacing:".2em", textTransform:"uppercase", color:"#9ca3af" }}>Scroll</span>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // ABOUT
// // ─────────────────────────────────────────────────────────────────────────────
// function About() {
//   const facts = [
//     { n:"2004", l:"Year Founded",      c:"#0d9488" },
//     { n:"16",   l:"Expert Scientists", c:"#059669" },
//     { n:"500+", l:"Partner Farms",     c:"#0284c7" },
//     { n:"15+",  l:"Indian States",     c:"#0f766e" },
//   ];
//   return (
//     <section id="about" style={{ padding:"100px 0", background:"#fff" }}>
//       <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 40px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
//         {/* Text */}
//         <div>
//           <SectionLabel>About Us</SectionLabel>
//           <SectionTitle>Two Decades of Aquaculture Science</SectionTitle>
//           <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:16, color:"#4b5563", lineHeight:1.85, marginBottom:20 }}>
//             Founded in 2004, Innovare Biopharma LLP was built on one belief: that every pond, every farmer, and every fish deserves the best of modern science. We combine veterinary expertise, marine biology, and biopharmaceutical innovation to create products that work in the real world.
//           </p>
//           <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:16, color:"#4b5563", lineHeight:1.85, marginBottom:44 }}>
//             Today, our GMP-certified portfolio covers aquaculture, poultry, and cattle — trusted by <strong style={{ color:"#0d9488" }}>500+ farms</strong> across 15 states, with zero antibiotic use and full regulatory approval.
//           </p>

//           <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:0, border:"1px solid #e5e7eb", borderRadius:18, overflow:"hidden" }}>
//             {facts.map((f, i) => (
//               <div key={f.l} style={{ padding:"24px 20px", textAlign:"center", borderRight: i < 3 ? "1px solid #e5e7eb" : "none" }}>
//                 <div style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:28, fontWeight:700, color:f.c }}>{f.n}</div>
//                 <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"#9ca3af", marginTop:4 }}>{f.l}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Visual */}
//         <div style={{ position:"relative" }}>
//           {/* Large circle */}
//           <div style={{ width:"100%", paddingBottom:"100%", borderRadius:"50%", background:"linear-gradient(135deg,#f0fdfa,#ecfdf5)", border:"2px solid rgba(13,148,136,.12)", position:"relative", overflow:"hidden" }}>
//             <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
//               <div style={{ textAlign:"center" }}>
//                 <div style={{ fontSize:80 }}>🧬</div>
//                 <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, fontWeight:600, color:"#0d9488", marginTop:8 }}>Science-first Innovation</div>
//               </div>
//             </div>
//           </div>
//           {/* Floating badges */}
//           {[
//             { text:"GMP Certified",  top:"8%",  left:"-10%", bg:"#0d9488" },
//             { text:"Zero Toxicity",  bottom:"8%",right:"-10%", bg:"#059669" },
//             { text:"ISO 9001:2015",  top:"50%",  left:"-18%", bg:"#0284c7" },
//             { text:"Vet Approved",   top:"50%",  right:"-14%", bg:"#0f766e" },
//           ].map(b => (
//             <div key={b.text} style={{ position:"absolute", ...Object.fromEntries(Object.entries(b).filter(([k])=>["top","bottom","left","right"].includes(k))), background:b.bg, color:"#fff", fontSize:10, fontWeight:700, padding:"6px 14px", borderRadius:20, whiteSpace:"nowrap", boxShadow:"0 4px 12px rgba(0,0,0,.15)", transform:"translateY(-50%)" }}>
//               {b.text}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // SOLUTIONS
// // ─────────────────────────────────────────────────────────────────────────────
// function Solutions() {
//   return (
//     <section id="solutions" style={{ padding:"100px 0", background:"linear-gradient(160deg,#f0fdf9,#f0fdfa)" }}>
//       <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 40px" }}>
//         <div style={{ textAlign:"center", marginBottom:64 }}>
//           <SectionLabel>Our Solutions</SectionLabel>
//           <SectionTitle>End-to-End Aquaculture Care</SectionTitle>
//           <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:17, color:"#4b5563", maxWidth:520, margin:"0 auto" }}>Three pillars that cover every critical phase of your aquaculture operation.</p>
//         </div>

//         <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:28 }}>
//           {SOLUTIONS.map(s => (
//             <div key={s.title} style={{ background:"#fff", border:`1px solid ${s.color}20`, borderRadius:24, padding:"44px 36px", transition:"all .3s", cursor:"pointer", boxShadow:"0 2px 12px rgba(0,0,0,.04)" }}
//               onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.transform="translateY(-6px)"; el.style.boxShadow=`0 24px 56px ${s.color}22`; el.style.borderColor=`${s.color}40`; }}
//               onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.transform="none"; el.style.boxShadow="0 2px 12px rgba(0,0,0,.04)"; el.style.borderColor=`${s.color}20`; }}
//             >
//               <div style={{ width:72, height:72, borderRadius:20, background:s.light, border:`1px solid ${s.color}20`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:34, marginBottom:24 }}>{s.icon}</div>
//               <h3 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:24, fontWeight:700, color:"#0a2520", marginBottom:14 }}>{s.title}</h3>
//               <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:15, color:"#6b7280", lineHeight:1.75 }}>{s.desc}</p>
//               <div style={{ marginTop:24, display:"inline-flex", alignItems:"center", gap:6, fontFamily:"'DM Sans',sans-serif", fontSize:13, fontWeight:600, color:s.color }}>
//                 Learn more <span>→</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // PRODUCTS
// // ─────────────────────────────────────────────────────────────────────────────
// function Products() {
//   const [tab, setTab] = useState<ProductTab>("Aquaculture");
//   const tabs: ProductTab[] = ["Aquaculture", "Poultry", "Cattle"];
//   const tabIcons: Record<ProductTab, string> = { Aquaculture:"🦐", Poultry:"🐔", Cattle:"🐄" };
//   const products = PRODUCTS[tab];

//   return (
//     <section id="products" style={{ padding:"100px 0", background:"#fff" }}>
//       <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 40px" }}>
//         <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"flex-end", marginBottom:52 }}>
//           <div>
//             <SectionLabel>Products</SectionLabel>
//             <SectionTitle>Our Product Range</SectionTitle>
//           </div>
//           <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:16, color:"#4b5563", lineHeight:1.8 }}>16 precision-formulated products across three livestock categories, each backed by rigorous clinical testing and GMP certification.</p>
//         </div>

//         {/* Tab bar */}
//         <div style={{ display:"flex", gap:0, background:"#f9fafb", borderRadius:16, padding:6, marginBottom:44, width:"fit-content", border:"1px solid #e5e7eb" }}>
//           {tabs.map(t => (
//             <button key={t} onClick={()=>setTab(t)} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, fontWeight:600, padding:"10px 24px", borderRadius:12, border:"none", cursor:"pointer", transition:"all .25s", background: tab===t ? "#0d9488" : "transparent", color: tab===t ? "#fff" : "#6b7280", boxShadow: tab===t ? "0 4px 14px rgba(13,148,136,.3)" : "none" }}>
//               {tabIcons[t]} {t}
//             </button>
//           ))}
//         </div>

//         {/* Grid */}
//         <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
//           {products.map(p => (
//             <div key={p.n} style={{ border:"1px solid #e5e7eb", borderRadius:18, padding:"28px", background:"#fff", transition:"all .25s", cursor:"pointer" }}
//               onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="#0d9488"; el.style.boxShadow="0 12px 40px rgba(13,148,136,.1)"; el.style.transform="translateY(-3px)"; }}
//               onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="#e5e7eb"; el.style.boxShadow="none"; el.style.transform="none"; }}
//             >
//               <div style={{ fontSize:36, marginBottom:16 }}>{p.e}</div>
//               <div style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:17, fontWeight:700, color:"#0a2520", marginBottom:8 }}>{p.n}</div>
//               <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, color:"#6b7280", lineHeight:1.65, marginBottom:16 }}>{p.b}</div>
//               <Chip>{p.tag}</Chip>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // SUSTAINABILITY
// // ─────────────────────────────────────────────────────────────────────────────
// function Sustainability() {
//   const items = [
//     { icon:"🌱", title:"Zero Antibiotic Policy",      desc:"Every product is formulated as an antibiotic-free alternative, protecting consumer health and preventing AMR in aquatic systems." },
//     { icon:"♻️", title:"Biodegradable Formulations",  desc:"Water treatments break down within 72 hours with zero residue in sediment or surrounding ecosystems." },
//     { icon:"🌊", title:"Water Conservation",           desc:"PondBalance Pro reduces water exchange by 60%, saving millions of litres annually across our farm network." },
//     { icon:"🐠", title:"Biodiversity Protection",      desc:"All products pass ecotoxicology screening to confirm zero risk to non-target species and surrounding flora." },
//     { icon:"📦", title:"Sustainable Packaging",        desc:"80% recycled or biodegradable packaging today, targeting 100% by 2026." },
//     { icon:"👩‍🌾", title:"Farmer Education",           desc:"200+ training programmes annually, reaching 8,000+ farmers with best practices for sustainable pond management." },
//   ];

//   return (
//     <section id="sustainability" style={{ padding:"100px 0", background:"#0a2520", position:"relative", overflow:"hidden" }}>
//       {/* Decorative */}
//       <div style={{ position:"absolute", top:-100, right:-100, width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(13,148,136,.15) 0%,transparent 70%)", pointerEvents:"none" }} />
//       <div style={{ position:"absolute", bottom:-80, left:-80, width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(5,150,105,.12) 0%,transparent 70%)", pointerEvents:"none" }} />

//       <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 40px", position:"relative", zIndex:1 }}>
//         <div style={{ textAlign:"center", marginBottom:64 }}>
//           <div style={{ display:"inline-flex", alignItems:"center", gap:8, marginBottom:18 }}>
//             <div style={{ width:24, height:2, background:"#34d399", borderRadius:2 }} />
//             <span style={{ fontSize:11, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"#34d399" }}>Sustainability</span>
//           </div>
//           <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(30px,4vw,52px)", fontWeight:700, color:"#fff", lineHeight:1.1, marginBottom:16 }}>Farming with the Planet</h2>
//           <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:17, color:"rgba(255,255,255,.5)", maxWidth:520, margin:"0 auto" }}>Profitability and ecological responsibility are not competing values — they define everything we make.</p>
//         </div>

//         <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
//           {items.map(item => (
//             <div key={item.title} style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.08)", borderRadius:20, padding:"36px 28px", transition:"all .3s", cursor:"pointer" }}
//               onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(13,148,136,.1)"; el.style.borderColor="rgba(13,148,136,.3)"; el.style.transform="translateY(-4px)"; }}
//               onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,.04)"; el.style.borderColor="rgba(255,255,255,.08)"; el.style.transform="none"; }}
//             >
//               <div style={{ fontSize:38, marginBottom:18 }}>{item.icon}</div>
//               <h4 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:19, fontWeight:700, color:"#fff", marginBottom:12 }}>{item.title}</h4>
//               <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, color:"rgba(255,255,255,.45)", lineHeight:1.75 }}>{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // CERTIFICATES
// // ─────────────────────────────────────────────────────────────────────────────
// function Certificates() {
//   return (
//     <section id="certs" style={{ padding:"100px 0", background:"#f9fafb" }}>
//       <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 40px" }}>
//         <div style={{ textAlign:"center", marginBottom:64 }}>
//           <SectionLabel>Certificates</SectionLabel>
//           <SectionTitle>Independently Verified Quality</SectionTitle>
//           <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:17, color:"#4b5563", maxWidth:480, margin:"0 auto" }}>Every claim we make is backed by India&apos;s top regulatory and certification bodies.</p>
//         </div>
//         <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
//           {CERTS.map(c => (
//             <div key={c.name} style={{ background:"#fff", border:"1px solid #e5e7eb", borderRadius:24, padding:"48px 36px", textAlign:"center", transition:"all .3s", cursor:"pointer" }}
//               onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="#0d9488"; el.style.boxShadow="0 20px 60px rgba(13,148,136,.1)"; el.style.transform="translateY(-6px)"; }}
//               onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="#e5e7eb"; el.style.boxShadow="none"; el.style.transform="none"; }}
//             >
//               <div style={{ fontSize:56, marginBottom:20 }}>{c.medal}</div>
//               <h4 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:20, fontWeight:700, color:"#0a2520", marginBottom:12 }}>{c.name}</h4>
//               <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, color:"#6b7280", lineHeight:1.7, marginBottom:24 }}>{c.body}</p>
//               <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, fontWeight:700, color:"#0d9488", letterSpacing:".04em" }}>VIEW CERTIFICATE →</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // EVENTS
// // ─────────────────────────────────────────────────────────────────────────────
// function Events() {
//   const tagColors: Record<string, string> = { Exhibition:"#0284c7", Symposium:"#7c3aed", Training:"#059669", Conclave:"#d97706" };
//   return (
//     <section id="events" style={{ padding:"100px 0", background:"#fff" }}>
//       <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 40px" }}>
//         <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"flex-end", marginBottom:52 }}>
//           <div>
//             <SectionLabel>Events</SectionLabel>
//             <SectionTitle>Meet Us at the Field</SectionTitle>
//           </div>
//           <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:16, color:"#4b5563", lineHeight:1.8 }}>Find the Innovare team at aquaculture exhibitions, farmer training camps, and industry symposia across India.</p>
//         </div>
//         <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:20 }}>
//           {EVENTS_DATA.map(ev => (
//             <div key={ev.title} style={{ background:"#fff", border:"1px solid #e5e7eb", borderRadius:20, overflow:"hidden", transition:"all .25s", cursor:"pointer" }}
//               onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.boxShadow="0 16px 48px rgba(0,0,0,.08)"; el.style.transform="translateY(-3px)"; el.style.borderColor="#0d9488"; }}
//               onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.boxShadow="none"; el.style.transform="none"; el.style.borderColor="#e5e7eb"; }}
//             >
//               <div style={{ display:"flex", gap:0 }}>
//                 {/* Date block */}
//                 <div style={{ width:90, background:"linear-gradient(160deg,#0d9488,#059669)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"24px 0", flexShrink:0 }}>
//                   <div style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:32, fontWeight:700, color:"#fff", lineHeight:1 }}>{ev.d}</div>
//                   <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:".1em", color:"rgba(255,255,255,.7)" }}>{ev.m}</div>
//                 </div>
//                 {/* Content */}
//                 <div style={{ padding:"24px 28px", flex:1 }}>
//                   <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, fontWeight:700, letterSpacing:".06em", textTransform:"uppercase", color:tagColors[ev.tag]||"#0d9488", background:`${tagColors[ev.tag]||"#0d9488"}15`, padding:"3px 10px", borderRadius:12 }}>{ev.tag}</span>
//                   <h4 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:18, fontWeight:700, color:"#0a2520", margin:"10px 0 6px" }}>{ev.title}</h4>
//                   <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, color:"#9ca3af" }}>📍 {ev.loc}</div>
//                   <div style={{ marginTop:16, fontFamily:"'DM Sans',sans-serif", fontSize:12, fontWeight:700, color:"#0d9488" }}>Register →</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // CONTACT
// // ─────────────────────────────────────────────────────────────────────────────
// function Contact() {
//   const [form, setForm] = useState({ name:"", phone:"", location:"", species:"", message:"" });
//   const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => setForm(f=>({...f,[k]:e.target.value}));

//   const inputStyle: React.CSSProperties = {
//     width:"100%", fontFamily:"'DM Sans',sans-serif", fontSize:14, color:"#0a2520",
//     background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.15)",
//     borderRadius:12, padding:"13px 18px", outline:"none", transition:"border .2s",
//   };

//   return (
//     <section id="contact" style={{ padding:"100px 0", background:"linear-gradient(160deg,#0a2520,#0d3b30)" }}>
//       <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 40px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>

//         {/* Info */}
//         <div>
//           <div style={{ display:"inline-flex", alignItems:"center", gap:8, marginBottom:18 }}>
//             <div style={{ width:24, height:2, background:"#34d399", borderRadius:2 }} />
//             <span style={{ fontSize:11, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"#34d399", fontFamily:"'DM Sans',sans-serif" }}>Contact</span>
//           </div>
//           <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(30px,4vw,52px)", fontWeight:700, color:"#fff", lineHeight:1.1, marginBottom:20 }}>Let&apos;s Grow Your Farm Together</h2>
//           <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:16, color:"rgba(255,255,255,.5)", lineHeight:1.85, marginBottom:48, maxWidth:420 }}>Our aquaculture specialists will help you select the right protocol for your species and pond conditions.</p>

//           {[
//             { icon:"📍", label:"Address", val:"Innovare Biopharma LLP, Hyderabad, Telangana, India" },
//             { icon:"📞", label:"Phone",   val:"+91 98491 XXXXX" },
//             { icon:"✉️", label:"Email",   val:"info@innovarebiopharma.com" },
//           ].map(item => (
//             <div key={item.label} style={{ display:"flex", gap:16, alignItems:"flex-start", marginBottom:28 }}>
//               <div style={{ width:48, height:48, background:"rgba(13,148,136,.2)", border:"1px solid rgba(13,148,136,.3)", borderRadius:14, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>{item.icon}</div>
//               <div>
//                 <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(255,255,255,.35)", marginBottom:4 }}>{item.label}</div>
//                 <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:15, fontWeight:500, color:"#fff" }}>{item.val}</div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Form */}
//         <div style={{ background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.1)", borderRadius:28, padding:"44px 40px", backdropFilter:"blur(12px)" }}>
//           <h3 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:22, fontWeight:700, color:"#fff", marginBottom:28 }}>Send an Enquiry</h3>

//           {[
//             { label:"Full Name",        key:"name",     type:"text", placeholder:"Your name" },
//             { label:"Phone / WhatsApp", key:"phone",    type:"tel",  placeholder:"+91 XXXXX XXXXX" },
//             { label:"Farm Location",    key:"location", type:"text", placeholder:"State, District" },
//           ].map(f => (
//             <div key={f.key} style={{ marginBottom:16 }}>
//               <label style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, fontWeight:700, letterSpacing:".08em", textTransform:"uppercase", color:"rgba(255,255,255,.4)", display:"block", marginBottom:7 }}>{f.label}</label>
//               <input type={f.type} placeholder={f.placeholder} value={(form as any)[f.key]} onChange={set(f.key)} style={{ ...inputStyle, color:"#fff" }} />
//             </div>
//           ))}

//           <div style={{ marginBottom:16 }}>
//             <label style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, fontWeight:700, letterSpacing:".08em", textTransform:"uppercase", color:"rgba(255,255,255,.4)", display:"block", marginBottom:7 }}>Species Farmed</label>
//             <select value={form.species} onChange={set("species")} style={{ ...inputStyle, cursor:"pointer", color:"#fff" }}>
//               <option value="" style={{ color:"#000" }}>Select species...</option>
//               {["Vannamei Shrimp","Monodon Shrimp","Tilapia","Rohu / Catla","Crab","Poultry","Cattle"].map(s=><option key={s} value={s} style={{ color:"#000" }}>{s}</option>)}
//             </select>
//           </div>

//           <div style={{ marginBottom:24 }}>
//             <label style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, fontWeight:700, letterSpacing:".08em", textTransform:"uppercase", color:"rgba(255,255,255,.4)", display:"block", marginBottom:7 }}>Message</label>
//             <textarea rows={3} placeholder="Describe your needs..." value={form.message} onChange={set("message")} style={{ ...inputStyle, resize:"none", color:"#fff" }} />
//           </div>

//           <button style={{ width:"100%", fontFamily:"'DM Sans',sans-serif", fontSize:15, fontWeight:700, color:"#fff", background:"linear-gradient(135deg,#0d9488,#059669)", border:"none", padding:"16px", borderRadius:16, cursor:"pointer", boxShadow:"0 8px 28px rgba(13,148,136,.35)", transition:"all .3s", letterSpacing:".02em" }}
//             onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 14px 40px rgba(13,148,136,.5)"; }}
//             onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 8px 28px rgba(13,148,136,.35)"; }}
//           >Send Enquiry →</button>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // FOOTER
// // ─────────────────────────────────────────────────────────────────────────────
// function Footer() {
//   const cols = {
//     Products:  ["Aquaculture","Poultry","Cattle","View All"],
//     Solutions: ["Nutrition","Health","Environment"],
//     Company:   ["About Us","Certificates","Events","Contact"],
//   };
//   return (
//     <footer style={{ background:"#061411", padding:"64px 40px 32px" }}>
//       <div style={{ maxWidth:1280, margin:"0 auto" }}>
//         <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:48, marginBottom:52 }}>
//           <div>
//             <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
//               <div style={{ width:40, height:40, background:"linear-gradient(135deg,#0d9488,#059669)", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20 }}>🦐</div>
//               <div style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:16, fontWeight:700, color:"#fff" }}>Innovare Biopharma LLP</div>
//             </div>
//             <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, color:"rgba(255,255,255,.35)", lineHeight:1.8 }}>Solution to Aquaculture Health.<br />GMP-certified, trusted by 500+ farms across India.</p>
//             <div style={{ display:"flex", gap:10, marginTop:20 }}>
//               {["📘","🐦","📸"].map(icon=>(
//                 <div key={icon} style={{ width:34, height:34, background:"rgba(255,255,255,.07)", border:"1px solid rgba(255,255,255,.1)", borderRadius:9, display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, cursor:"pointer" }}>{icon}</div>
//               ))}
//             </div>
//           </div>
//           {Object.entries(cols).map(([heading, links]) => (
//             <div key={heading}>
//               <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"rgba(255,255,255,.4)", marginBottom:16 }}>{heading}</div>
//               {links.map(link=>(
//                 <a key={link} href="#" style={{ display:"block", fontFamily:"'DM Sans',sans-serif", fontSize:14, color:"rgba(255,255,255,.28)", marginBottom:10, textDecoration:"none", transition:"color .2s" }}
//                   onMouseEnter={e=>((e.currentTarget as HTMLElement).style.color="#34d399")}
//                   onMouseLeave={e=>((e.currentTarget as HTMLElement).style.color="rgba(255,255,255,.28)")}
//                 >{link}</a>
//               ))}
//             </div>
//           ))}
//         </div>
//         <div style={{ borderTop:"1px solid rgba(255,255,255,.06)", paddingTop:24, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
//           <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, color:"rgba(255,255,255,.25)" }}>© 2026 Innovare Biopharma LLP. All rights reserved.</div>
//           <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, color:"rgba(255,255,255,.25)" }}>GMP · ISO 9001:2015 · CAA Approved</div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // PAGE + GLOBAL STYLES
// // ─────────────────────────────────────────────────────────────────────────────
// export default function HomePage() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         html { scroll-behavior: smooth; }
//         body { font-family: 'DM Sans', sans-serif; background: #fff; overflow-x: hidden; }

//         @keyframes fadeUp  { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
//         @keyframes blink   { 0%,100% { opacity: .5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2); } }
//         @keyframes floatCard { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
//         @keyframes spin    { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//         @keyframes spinRev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }

//         input::placeholder, textarea::placeholder, select::placeholder { color: rgba(255,255,255,.3); }

//         @media (max-width: 1024px) {
//           section > div[style*="gridTemplateColumns: 1fr 1fr"],
//           section > div[style*="grid-template-columns: 1fr 1fr"],
//           div[style*="gridTemplateColumns: 1fr 440px"],
//           div[style*="grid-template-columns: 1fr 440px"] {
//             grid-template-columns: 1fr !important;
//           }
//           div[style*="gridTemplateColumns: repeat(3,1fr)"],
//           div[style*="grid-template-columns: repeat(3,1fr)"] {
//             grid-template-columns: 1fr 1fr !important;
//           }
//         }
//         @media (max-width: 640px) {
//           div[style*="gridTemplateColumns: repeat(2,1fr)"],
//           div[style*="grid-template-columns: repeat(2,1fr)"],
//           div[style*="gridTemplateColumns: 1fr 1fr"],
//           div[style*="grid-template-columns: 1fr 1fr"],
//           div[style*="gridTemplateColumns: repeat(3,1fr)"],
//           div[style*="grid-template-columns: repeat(3,1fr)"],
//           div[style*="gridTemplateColumns: 2fr 1fr 1fr 1fr"],
//           div[style*="grid-template-columns: 2fr 1fr 1fr 1fr"],
//           div[style*="gridTemplateColumns: 1fr 440px"],
//           div[style*="grid-template-columns: 1fr 440px"] {
//             grid-template-columns: 1fr !important;
//           }
//           section { padding: 64px 0 !important; }
//           div[style*="padding: 0 40px"] { padding: 0 20px !important; }
//         }
//       `}</style>
   
//       <main>
//         <Hero />
//         <About />
//         <Solutions />
//         <Products />
//         <Sustainability />
//         <Certificates />
//         <Events />
//         <Contact />
//       </main>
//     </>
//   );
// }

export default function BioPharmaLandingPage() {
  const navItems = [
    'ABOUT US',
    'OUR SOLUTIONS',
    'PRODUCTS',
    'SUSTAINABILITY',
    'CERTIFICATES',
    'EVENTS',
    'CONTACT',
  ];

  return (
    <main className="min-h-screen bg-[#f4f9ff] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl font-bold text-white shadow-lg">
              i
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-blue-900">
                Innovare Biopharma LLP
              </h1>
              <p className="text-sm text-slate-500">
                Solution to Aquaculture Health
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-semibold tracking-wide text-slate-700 transition hover:text-blue-600"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="rounded-2xl border border-blue-100 bg-blue-50 px-6 py-3 font-semibold text-blue-700 shadow-sm transition hover:bg-blue-100">
            Cart
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a4fbf] via-[#1565d8] to-[#4db7ff] py-24 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-300 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-300 blur-3xl"></div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="w-fit rounded-full border border-cyan-300/30 bg-white/10 px-5 py-2 text-sm font-semibold tracking-[0.2em] text-cyan-100 backdrop-blur-md">
              INNOVARE BIOPHARMA — SCIENCE DIVISION
            </div>

            <h1 className="mt-8 text-6xl font-extrabold leading-tight tracking-tight lg:text-7xl">
              Precision Nutrition
              <span className="block text-cyan-300">
                for Aquaculture Health
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-blue-100">
              From hatchery to harvest, Innovare Biopharma delivers
              scientifically formulated feed supplements, probiotics, and
              mineral solutions that optimise growth, immunity, and pond health
              across every production stage.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <button className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-700 shadow-xl transition hover:bg-blue-50">
                View Our Products →
              </button>

              <button className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
                Our Solutions
              </button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Aquaculture Products',
                value: '15+',
                desc: 'GMP certified formulations',
                icon: '🧪',
              },
              {
                title: 'Customer Satisfaction',
                value: '98%',
                desc: 'Across shrimp farms',
                icon: '🦐',
              },
              {
                title: 'Farm Partners',
                value: '50+',
                desc: 'Andhra Pradesh & beyond',
                icon: '📦',
              },
              {
                title: 'Quality Assured',
                value: 'Lab Tested',
                desc: 'Scientifically validated formulations',
                icon: '🔬',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
              >
                <div className="text-4xl">{card.icon}</div>
                <h3 className="mt-8 text-5xl font-bold text-cyan-300">
                  {card.value}
                </h3>
                <p className="mt-4 text-2xl font-semibold text-white">
                  {card.title}
                </p>
                <p className="mt-2 text-blue-100">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */ }
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              About BioPharma
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
              Pioneering the Future of Medicine
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              BioPharma is committed to advancing human health through
              breakthrough pharmaceutical innovation. Our multidisciplinary teams
              collaborate to develop therapies that address critical healthcare
              challenges worldwide.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="rounded-3xl bg-blue-50 p-6">
                <h3 className="text-3xl font-bold text-emerald-600">25+</h3>
                <p className="mt-2 text-slate-600">Years of Innovation</p>
              </div>
              <div className="rounded-3xl bg-blue-50 p-6">
                <h3 className="text-3xl font-bold text-emerald-600">50+</h3>
                <p className="mt-2 text-slate-600">Global Research Partners</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[32px] bg-gradient-to-br from-emerald-500 to-cyan-500 p-1 shadow-2xl">
              <div className="rounded-[30px] bg-white p-10">
                <div className="space-y-6">
                  <div className="rounded-2xl bg-emerald-50 p-6">
                    <h4 className="text-lg font-semibold text-slate-900">
                      Precision Medicine
                    </h4>
                    <p className="mt-2 text-slate-600">
                      Personalized treatment approaches powered by biotechnology.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-cyan-50 p-6">
                    <h4 className="text-lg font-semibold text-slate-900">
                      Sustainable Manufacturing
                    </h4>
                    <p className="mt-2 text-slate-600">
                      Eco-conscious pharmaceutical production and supply chains.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-100 p-6">
                    <h4 className="text-lg font-semibold text-slate-900">
                      Global Patient Access
                    </h4>
                    <p className="mt-2 text-slate-600">
                      Expanding access to innovative medicines worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-b from-[#eef7ff] to-[#dfefff] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              Our Services
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Comprehensive Biopharma Solutions
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Delivering integrated pharmaceutical services from discovery to
              commercialization.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              'Drug Discovery',
              'Clinical Research',
              'Biologic Manufacturing',
              'Regulatory Consulting',
            ].map((service) => (
              <div
                key={service}
                className="rounded-[28px] border border-blue-100 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-xl font-bold text-blue-700">
                  ✓
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {service}
                </h3>
                <p className="mt-4 text-slate-600">
                  High-quality expertise and innovation tailored for modern
                  healthcare challenges.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0d5fd8] to-[#35a2ff] py-24 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Partner With BioPharma Today
          </h2>
          <p className="mt-6 text-lg text-blue-100">
            Join us in shaping the future of healthcare through innovation,
            research, and advanced pharmaceutical technologies.
          </p>

          <div className="mt-10 flex justify-center">
            <button className="rounded-2xl bg-white px-8 py-4 text-base font-semibold text-blue-700 shadow-lg transition hover:bg-slate-100">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-slate-500 md:flex-row lg:px-8">
          <p>© 2026 BioPharma. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald-600">
              Terms of Service
            </a>
            <a href="#" className="hover:text-emerald-600">
              Careers
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}































// /* ══ CTA ══ */
// function CTASection(){
//   return(
//     <section style={{background:`linear-gradient(135deg,${C.blue},${C.mid})`,padding:"96px 7vw",textAlign:"center",position:"relative",overflow:"hidden"}}>
//       <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",backgroundSize:"40px 40px",pointerEvents:"none"}}/>
//       <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"clamp(100px,16vw,240px)",fontWeight:800,color:"rgba(255,255,255,0.04)",pointerEvents:"none",userSelect:"none",letterSpacing:-6,lineHeight:1}}>GROW</div>
//       <div style={{maxWidth:600,margin:"0 auto",position:"relative",zIndex:1}}>
//         <SLabel text="Ready to grow?"/>
//         <h2 style={{fontSize:"clamp(32px,5vw,60px)",fontWeight:800,color:C.white,lineHeight:1.02,letterSpacing:-2,marginBottom:20}}>
//           Ready to grow<br/><span style={{color:C.teal,fontWeight:300}}>with us?</span>
//         </h2>
//         <p style={{fontSize:16,color:"rgba(255,255,255,.65)",lineHeight:1.85,fontWeight:300,marginBottom:44}}>Connect with our aquaculture experts and discover the right Innovare Biopharma solutions for your operation.</p>
//         <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
//           <Link href="/contact" style={{background:C.white,color:C.blue,fontWeight:700,fontSize:13,letterSpacing:1,textTransform:"uppercase",padding:"15px 40px",borderRadius:100,textDecoration:"none",display:"inline-block"}}>Get in Touch</Link>
//           <Link href="/products" style={{border:"1.5px solid rgba(255,255,255,.4)",color:C.white,fontWeight:500,fontSize:13,letterSpacing:1,textTransform:"uppercase",padding:"13px 38px",borderRadius:100,textDecoration:"none",display:"inline-block"}}>View Products</Link>
//         </div>
//       </div>
//     </section>
//   );
// }

