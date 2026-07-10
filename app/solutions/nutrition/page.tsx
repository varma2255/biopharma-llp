// "use client";
// import { useState, useEffect, useRef, useCallback } from "react";

// /* ═══════════════════════════════════════════════════════
//    GLOBAL STYLES
// ═══════════════════════════════════════════════════════ */
// const CSS = `
// @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

// *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

// :root{
//   --ocean-deep:   #010D1A;
//   --ocean-abyss:  #020F20;
//   --ocean-900:    #031628;
//   --ocean-800:    #042038;
//   --ocean-700:    #063354;
//   --ocean-600:    #0A4F80;
//   --ocean-500:    #1172B6;
//   --ocean-400:    #2196E8;
//   --ocean-300:    #5BB8F5;
//   --ocean-200:    #9DD4F9;
//   --ocean-100:    #CBE9FC;
//   --ocean-50:     #EAF6FF;
//   --teal:         #0ECFB0;
//   --teal-dim:     #0A9B84;
//   --foam:         #D8F5FF;
//   --biolum:       #40E8D0;
//   --amber-fin:    #F5A623;
//   --coral:        #FF6B5E;
//   --kelp:         #2A7D4F;
//   --surface:      rgba(255,255,255,0.04);
//   --border:       rgba(255,255,255,0.07);
// }

// html{scroll-behavior:smooth}
// body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--ocean-deep);color:#fff;overflow-x:hidden}

// /* ── scroll reveal ── */
// .rv{opacity:0;transform:translateY(44px);transition:opacity .85s ease,transform .85s ease}
// .rv.in{opacity:1;transform:none}
// .rv-l{opacity:0;transform:translateX(-44px);transition:opacity .85s ease,transform .85s ease}
// .rv-l.in{opacity:1;transform:none}
// .rv-r{opacity:0;transform:translateX(44px);transition:opacity .85s ease,transform .85s ease}
// .rv-r.in{opacity:1;transform:none}

// /* ── keyframes ── */
// @keyframes bubble-rise{
//   0%  {transform:translateY(0) translateX(0) scale(1);opacity:.7}
//   25% {transform:translateY(-25%) translateX(6px) scale(1.05)}
//   50% {transform:translateY(-52%) translateX(-5px) scale(.97)}
//   75% {transform:translateY(-76%) translateX(7px) scale(1.03)}
//   100%{transform:translateY(-110%) translateX(0) scale(.9);opacity:0}
// }
// @keyframes wave-drift{
//   0%,100%{d:path("M0,60 C180,20 360,100 540,60 C720,20 900,80 1080,60 L1080,120 L0,120 Z")}
//   50%    {d:path("M0,80 C180,40 360,120 540,70 C720,30 900,100 1080,80 L1080,120 L0,120 Z")}
// }
// @keyframes swim-lr{
//   0%  {transform:translateX(-120px) translateY(0px)}
//   25% {transform:translateX(25vw)  translateY(-18px)}
//   50% {transform:translateX(55vw)  translateY(12px)}
//   75% {transform:translateX(80vw)  translateY(-8px)}
//   100%{transform:translateX(110vw) translateY(4px)}
// }
// @keyframes swim-rl{
//   0%  {transform:translateX(110vw) translateY(0) scaleX(-1)}
//   100%{transform:translateX(-120px) translateY(20px) scaleX(-1)}
// }
// @keyframes kelp-sway{
//   0%,100%{transform:rotate(-6deg) scaleY(1)}
//   50%    {transform:rotate(6deg) scaleY(1.04)}
// }
// @keyframes glow-pulse{
//   0%,100%{filter:drop-shadow(0 0 6px var(--biolum))}
//   50%    {filter:drop-shadow(0 0 20px var(--biolum)) drop-shadow(0 0 40px rgba(64,232,208,.4))}
// }
// @keyframes ripple{
//   0%  {transform:scale(.5);opacity:.6}
//   100%{transform:scale(3);opacity:0}
// }
// @keyframes float-slow{
//   0%,100%{transform:translateY(0)}
//   50%    {transform:translateY(-12px)}
// }
// @keyframes spin-slow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
// @keyframes counter-spin{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
// @keyframes shimmer{
//   0%  {background-position:-400px 0}
//   100%{background-position:400px 0}
// }
// @keyframes bar-grow{from{width:0%}}
// @keyframes plankton-drift{
//   0%  {transform:translate(0,0) scale(1)}
//   33% {transform:translate(8px,-12px) scale(1.1)}
//   66% {transform:translate(-6px,6px) scale(.9)}
//   100%{transform:translate(0,0) scale(1)}
// }
// @keyframes depth-scan{
//   0%  {top:-10%}
//   100%{top:110%}
// }
// @keyframes sonar{
//   0%  {transform:scale(.1);opacity:.8}
//   100%{transform:scale(4);opacity:0}
// }
// @keyframes tail-flap{
//   0%,100%{transform:skewX(0deg)}
//   50%    {transform:skewX(8deg)}
// }

// /* ── glass card ── */
// .gc{
//   background:rgba(2,32,56,0.55);
//   border:1px solid rgba(91,184,245,.12);
//   border-radius:20px;
//   backdrop-filter:blur(16px);
//   transition:border-color .3s,box-shadow .3s,transform .3s;
// }
// .gc:hover{
//   border-color:rgba(91,184,245,.35);
//   box-shadow:0 20px 60px rgba(17,114,182,.22);
//   transform:translateY(-5px);
// }

// /* ── gradient text ── */
// .gt{
//   background:linear-gradient(120deg,#fff 20%,var(--ocean-200) 55%,var(--teal));
//   -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
// }

// /* ── buttons ── */
// .btn-ocean{
//   display:inline-flex;align-items:center;gap:8px;
//   padding:13px 32px;border-radius:40px;border:none;
//   background:linear-gradient(130deg,var(--ocean-600),var(--ocean-400));
//   color:#fff;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;
//   cursor:pointer;letter-spacing:.02em;position:relative;overflow:hidden;
//   transition:transform .25s,box-shadow .3s;
// }
// .btn-ocean:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(33,150,232,.45)}
// .btn-teal{
//   display:inline-flex;align-items:center;gap:8px;
//   padding:12px 28px;border-radius:40px;
//   border:1.5px solid rgba(14,207,176,.4);background:transparent;
//   color:var(--teal);font-family:'Plus Jakarta Sans',sans-serif;
//   font-size:14px;font-weight:500;cursor:pointer;transition:all .25s;
// }
// .btn-teal:hover{background:rgba(14,207,176,.1);border-color:var(--teal)}

// /* ── tag pill ── */
// .pill{
//   display:inline-flex;align-items:center;gap:6px;
//   padding:5px 14px;border-radius:20px;font-size:11px;font-weight:600;
//   background:rgba(14,207,176,.1);border:1px solid rgba(14,207,176,.25);
//   color:var(--teal);letter-spacing:.08em;text-transform:uppercase;
// }

// /* ── nutrient bar ── */
// .nbar{height:6px;border-radius:3px;background:rgba(255,255,255,.07);overflow:hidden}
// .nbar-fill{height:100%;border-radius:3px;animation:bar-grow 1.4s cubic-bezier(.22,.68,0,1.2) both}

// /* scrollbar */
// ::-webkit-scrollbar{width:5px}
// ::-webkit-scrollbar-track{background:var(--ocean-deep)}
// ::-webkit-scrollbar-thumb{background:var(--ocean-700);border-radius:3px}
// `;

// /* ═══════════════════════════════════════════════════════
//    HOOKS
// ═══════════════════════════════════════════════════════ */
// function useReveal(t = 0.12) {
//   const ref = useRef(null);
//   const [v, setV] = useState(false);
//   useEffect(() => {
//     const el = ref.current; if (!el) return;
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold: t });
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);
//   return [ref, v];
// }

// function useCounter(target, trigger, dur = 1600) {
//   const [v, setV] = useState(0);
//   useEffect(() => {
//     if (!trigger) return;
//     let s = null;
//     const step = ts => { if (!s) s = ts; const p = Math.min((ts - s) / dur, 1); setV(Math.round(p * target)); if (p < 1) requestAnimationFrame(step); };
//     requestAnimationFrame(step);
//   }, [trigger, target]);
//   return v;
// }

// /* ═══════════════════════════════════════════════════════
//    UNDERWATER CANVAS  (shared background layer)
// ═══════════════════════════════════════════════════════ */
// function OceanCanvas() {
//   const ref = useRef(null);
//   useEffect(() => {
//     const c = ref.current; if (!c) return;
//     const ctx = c.getContext("2d");
//     let W = c.width = window.innerWidth;
//     let H = c.height = window.innerHeight;
//     const onResize = () => { W = c.width = window.innerWidth; H = c.height = window.innerHeight; };
//     window.addEventListener("resize", onResize);

//     // Floating particles (plankton / dust)
//     const pts = Array.from({ length: 80 }, () => ({
//       x: Math.random() * W, y: Math.random() * H,
//       r: .5 + Math.random() * 1.8,
//       vx: (Math.random() - .5) * .2,
//       vy: -.1 - Math.random() * .25,
//       alpha: .1 + Math.random() * .4,
//       biolum: Math.random() > .85,
//     }));

//     let raf;
//     const draw = () => {
//       ctx.clearRect(0, 0, W, H);
//       pts.forEach(p => {
//         p.x += p.vx + Math.sin(Date.now() * .0005 + p.y) * .15;
//         p.y += p.vy;
//         if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         if (p.biolum) {
//           ctx.shadowColor = "rgba(64,232,208,0.8)";
//           ctx.shadowBlur = 8;
//           ctx.fillStyle = `rgba(64,232,208,${p.alpha})`;
//         } else {
//           ctx.shadowBlur = 0;
//           ctx.fillStyle = `rgba(91,184,245,${p.alpha})`;
//         }
//         ctx.fill();
//         ctx.shadowBlur = 0;
//       });
//       raf = requestAnimationFrame(draw);
//     };
//     draw();
//     return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
//   }, []);
//   return <canvas ref={ref} style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, opacity: .7 }} />;
// }

// /* ═══════════════════════════════════════════════════════
//    FISH SVG COMPONENT  (animated swimmer)
// ═══════════════════════════════════════════════════════ */
// function SwimmingFish({ color = "#5BB8F5", size = 1, style = {} }) {
//   return (
//     <svg width={60 * size} height={28 * size} viewBox="0 0 60 28" style={{ ...style, filter: `drop-shadow(0 0 6px ${color}88)` }}>
//       {/* Body */}
//       <ellipse cx="28" cy="14" rx="20" ry="9" fill={color} opacity=".9" />
//       {/* Tail */}
//       <polygon points="8,14 0,5 0,23" fill={color} opacity=".75"
//         style={{ transformOrigin: "8px 14px", animation: "tail-flap .6s ease-in-out infinite" }} />
//       {/* Dorsal fin */}
//       <path d="M22 14 Q26 5 34 8" fill="none" stroke={color} strokeWidth="1.5" opacity=".6" />
//       {/* Eye */}
//       <circle cx="42" cy="12" r="2.5" fill="#fff" />
//       <circle cx="43" cy="12" r="1.2" fill="#1a3a5c" />
//       {/* Scale lines */}
//       <path d="M24 10 Q28 14 24 18" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="1" />
//       <path d="M30 9 Q35 14 30 19" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="1" />
//     </svg>
//   );
// }

// /* ═══════════════════════════════════════════════════════
//    SECTION 1 — HERO
// ═══════════════════════════════════════════════════════ */
// function Hero() {
//   const bubbles = Array.from({ length: 18 }, (_, i) => ({
//     left: `${5 + i * 5.2}%`,
//     size: 6 + Math.random() * 14,
//     delay: i * 0.6,
//     dur: 5 + Math.random() * 5,
//   }));

//   return (
//     <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>

//       {/* Deep gradient bg */}
//       <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,#010A14 0%,#021628 40%,#031E38 100%)", zIndex: 0 }} />

//       {/* Light rays from surface */}
//       <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: .08, zIndex: 1 }} preserveAspectRatio="none">
//         {[15, 28, 42, 58, 70, 84].map((x, i) => (
//           <polygon key={i} points={`${x}%,0 ${x + 3}%,0 ${x + 12}%,100% ${x - 4}%,100%`}
//             fill={`rgba(91,184,245,${0.4 + i * 0.08})`} />
//         ))}
//       </svg>

//       {/* Bubbles */}
//       {bubbles.map((b, i) => (
//         <div key={i} style={{
//           position: "absolute", bottom: "-10%", left: b.left, zIndex: 1,
//           width: b.size, height: b.size, borderRadius: "50%",
//           border: "1.5px solid rgba(91,184,245,0.5)",
//           background: "rgba(91,184,245,0.06)",
//           animation: `bubble-rise ${b.dur}s ${b.delay}s ease-in-out infinite`,
//         }} />
//       ))}

//       {/* Swimming fish */}
//       <div style={{ position: "absolute", top: "28%", zIndex: 2, animation: "swim-lr 18s 1s linear infinite" }}>
//         <SwimmingFish color="#2196E8" size={1.2} />
//       </div>
//       <div style={{ position: "absolute", top: "62%", zIndex: 2, animation: "swim-lr 24s 6s linear infinite" }}>
//         <SwimmingFish color="#5BB8F5" size={0.85} />
//       </div>
//       <div style={{ position: "absolute", top: "45%", zIndex: 2, animation: "swim-rl 20s 3s linear infinite" }}>
//         <SwimmingFish color="#0ECFB0" size={1} />
//       </div>

//       {/* Kelp left */}
//       <svg style={{ position: "absolute", bottom: 0, left: "3%", zIndex: 1, opacity: .45 }} width="60" height="320" viewBox="0 0 60 320">
//         {[0, 1, 2].map(k => (
//           <path key={k} d={`M${20 + k * 12},320 Q${10 + k * 15},240 ${25 + k * 8},180 Q${8 + k * 16},120 ${20 + k * 10},60 Q${14 + k * 12},30 ${18 + k * 9},0`}
//             fill="none" stroke={`rgba(42,125,79,${.6 - k * .15})`} strokeWidth="6" strokeLinecap="round"
//             style={{ transformOrigin: `${20 + k * 12}px 320px`, animation: `kelp-sway ${3 + k}s ease-in-out infinite`, animationDelay: `${k * .4}s` }} />
//         ))}
//       </svg>
//       <svg style={{ position: "absolute", bottom: 0, right: "5%", zIndex: 1, opacity: .35 }} width="50" height="260" viewBox="0 0 50 260">
//         {[0, 1].map(k => (
//           <path key={k} d={`M${15 + k * 14},260 Q${8 + k * 12},200 ${18 + k * 10},140 Q${6 + k * 14},80 ${16 + k * 8},0`}
//             fill="none" stroke={`rgba(42,125,79,${.5 - k * .1})`} strokeWidth="5" strokeLinecap="round"
//             style={{ transformOrigin: `${15 + k * 14}px 260px`, animation: `kelp-sway ${3.5 + k}s ease-in-out infinite`, animationDelay: `${k * .6}s` }} />
//         ))}
//       </svg>

//       {/* Hero content */}
//       <div style={{ position: "relative", zIndex: 5, maxWidth: 1100, margin: "0 auto", padding: "120px 48px 100px", width: "100%" }}>
//         <div style={{ maxWidth: 680 }}>
//           <div className="pill" style={{ marginBottom: 28, animation: "float-slow 3s ease-in-out infinite" }}>
//             <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--teal)", display: "inline-block", boxShadow: "0 0 8px var(--teal)" }} />
//             Aquaculture Nutrition Science
//           </div>

//           <h1 style={{
//             fontFamily: "'Playfair Display',serif",
//             fontSize: "clamp(44px,6vw,82px)", fontWeight: 800,
//             lineHeight: 1.02, letterSpacing: "-.03em", marginBottom: 28,
//           }}>
//             <span className="gt">Feed the ocean.</span><br />
//             <em style={{ fontStyle: "italic", color: "rgba(255,255,255,.85)" }}>Nourish</em> the world.
//           </h1>

//           <p style={{ fontSize: 17, color: "rgba(255,255,255,.55)", lineHeight: 1.85, maxWidth: 500, marginBottom: 44 }}>
//             Precision nutrition formulations designed for aquatic species — optimised for
//             growth performance, feed conversion, and sustainable aquafarm health
//             from hatchery to harvest.
//           </p>

//           <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
//             <button className="btn-ocean">Explore formulations →</button>
//             <button className="btn-teal">Download feed guide</button>
//           </div>

//           {/* Stats */}
//           <div style={{ display: "flex", gap: 48, marginTop: 72, flexWrap: "wrap" }}>
//             {[
//               { icon: "🐟", n: "40+", label: "Species formulations" },
//               { icon: "🌊", n: "98%", label: "Digestibility rate" },
//               { icon: "📈", n: "2.8×", label: "Avg. growth uplift" },
//             ].map(s => (
//               <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                 <span style={{ fontSize: 28 }}>{s.icon}</span>
//                 <div>
//                   <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 700, color: "var(--teal)", lineHeight: 1 }}>{s.n}</div>
//                   <div style={{ fontSize: 12, color: "rgba(255,255,255,.38)", marginTop: 5 }}>{s.label}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Wave footer */}
//       <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3 }}>
//         <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ width: "100%", height: 90, display: "block" }}>
//           <path d="M0,40 C240,80 480,10 720,45 C960,80 1200,15 1440,50 L1440,90 L0,90 Z"
//             fill="var(--ocean-abyss)" opacity=".9" />
//           <path d="M0,60 C300,20 600,75 900,50 C1200,25 1350,70 1440,55 L1440,90 L0,90 Z"
//             fill="var(--ocean-deep)" />
//         </svg>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════
//    SECTION 2 — NUTRITION WHEEL
// ═══════════════════════════════════════════════════════ */
// const WHEEL_SEGMENTS = [
//   { label: "Protein",    pct: 38, color: "#2196E8", icon: "💪" },
//   { label: "Lipids",     pct: 22, color: "#0ECFB0", icon: "💧" },
//   { label: "Carbs",      pct: 18, color: "#5BB8F5", icon: "⚡" },
//   { label: "Minerals",   pct: 12, color: "#9DD4F9", icon: "🪨" },
//   { label: "Vitamins",   pct: 7,  color: "#F5A623", icon: "✨" },
//   { label: "Probiotics", pct: 3,  color: "#0ECFB0", icon: "🦠" },
// ];

// function NutritionWheel({ visible }) {
//   const [active, setActive] = useState(0);
//   const cx = 160, cy = 160, R = 130, innerR = 75;
//   let cum = 0;
//   const segs = WHEEL_SEGMENTS.map(s => {
//     const start = cum / 100 * 2 * Math.PI - Math.PI / 2;
//     cum += s.pct;
//     const end = cum / 100 * 2 * Math.PI - Math.PI / 2;
//     return { ...s, start, end };
//   });

//   const arc = (s, r) => {
//     const x1 = cx + r * Math.cos(s.start), y1 = cy + r * Math.sin(s.start);
//     const x2 = cx + r * Math.cos(s.end),   y2 = cy + r * Math.sin(s.end);
//     const big = s.end - s.start > Math.PI ? 1 : 0;
//     return `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${big} 1 ${x2},${y2} Z`;
//   };

//   const seg = segs[active];
//   const midA = (seg.start + seg.end) / 2;
//   const lx = cx + (R * .65) * Math.cos(midA);
//   const ly = cy + (R * .65) * Math.sin(midA);

//   return (
//     <div style={{ display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap", justifyContent: "center" }}>
//       {/* Wheel */}
//       <div style={{ position: "relative", flexShrink: 0 }}>
//         {/* Sonar ripple */}
//         <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
//           width: 300, height: 300, borderRadius: "50%",
//           border: `1px solid rgba(14,207,176,.15)`,
//           animation: "sonar 4s ease-out infinite" }} />

//         <svg width={320} height={320} viewBox="0 0 320 320"
//           style={{ filter: visible ? "drop-shadow(0 0 30px rgba(33,150,232,.25))" : "none", transition: "filter 1s" }}>
//           {segs.map((s, i) => {
//             const isActive = i === active;
//             const scale = isActive ? 1.06 : 1;
//             const midA = (s.start + s.end) / 2;
//             const ox = isActive ? Math.cos(midA) * 8 : 0;
//             const oy = isActive ? Math.sin(midA) * 8 : 0;
//             return (
//               <g key={s.label} onClick={() => setActive(i)} style={{ cursor: "pointer", transition: "transform .3s" }}
//                 transform={`translate(${ox},${oy})`}>
//                 <path d={arc(s, R)} fill={s.color}
//                   opacity={isActive ? 1 : 0.55}
//                   style={{ transition: "opacity .3s" }}
//                   stroke="var(--ocean-deep)" strokeWidth="3" />
//               </g>
//             );
//           })}
//           {/* Inner hole */}
//           <circle cx={cx} cy={cy} r={innerR} fill="var(--ocean-900)"
//             stroke="rgba(91,184,245,.15)" strokeWidth="2" />
//           {/* Centre content */}
//           <text x={cx} y={cy - 14} textAnchor="middle" fontSize="28">{seg.icon}</text>
//           <text x={cx} y={cy + 12} textAnchor="middle" fontSize="13" fontWeight="700" fill={seg.color}
//             fontFamily="'Plus Jakarta Sans',sans-serif">{seg.label}</text>
//           <text x={cx} y={cy + 30} textAnchor="middle" fontSize="22" fontWeight="800" fill="#fff"
//             fontFamily="'Playfair Display',serif">{seg.pct}%</text>
//         </svg>
//       </div>

//       {/* Legend */}
//       <div style={{ display: "flex", flexDirection: "column", gap: 14, minWidth: 220 }}>
//         {WHEEL_SEGMENTS.map((s, i) => (
//           <div key={s.label} onClick={() => setActive(i)} style={{
//             display: "flex", alignItems: "center", gap: 12, cursor: "pointer",
//             padding: "10px 16px", borderRadius: 12,
//             background: active === i ? `${s.color}18` : "transparent",
//             border: `1px solid ${active === i ? s.color + "45" : "transparent"}`,
//             transition: "all .25s",
//           }}>
//             <div style={{ width: 12, height: 12, borderRadius: "50%", background: s.color, flexShrink: 0, boxShadow: `0 0 8px ${s.color}` }} />
//             <div style={{ flex: 1 }}>
//               <div style={{ fontSize: 13, fontWeight: 600, color: active === i ? s.color : "rgba(255,255,255,.75)" }}>{s.label}</div>
//               <div className="nbar" style={{ marginTop: 5 }}>
//                 <div className="nbar-fill" style={{ width: `${s.pct * 2.5}%`, background: s.color, animationDelay: `${i * .1}s` }} />
//               </div>
//             </div>
//             <span style={{ fontSize: 13, fontWeight: 700, color: s.color }}>{s.pct}%</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function MacroSection() {
//   const [ref, vis] = useReveal(0.1);
//   return (
//     <section style={{ position: "relative", overflow: "hidden" }}>
//       <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,var(--ocean-deep) 0%,var(--ocean-900) 100%)" }} />
//       <div ref={ref} style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "100px 48px" }}>
//         <div className={`rv ${vis ? "in" : ""}`} style={{ textAlign: "center", marginBottom: 64 }}>
//           <div className="pill" style={{ marginBottom: 18, display: "inline-flex" }}>Feed composition</div>
//           <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-.025em" }}>
//             Precision-balanced<br /><span className="gt">nutrient profiles</span>
//           </h2>
//         </div>
//         <div className={`rv ${vis ? "in" : ""}`}>
//           <NutritionWheel visible={vis} />
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════
//    SECTION 3 — SPECIES CARDS
// ═══════════════════════════════════════════════════════ */
// const SPECIES = [
//   {
//     emoji: "🐟", name: "Atlantic Salmon",    sci: "Salmo salar",
//     protein: 42, lipid: 26, fcr: "1.1", temp: "8–14°C",
//     highlight: "High EPA/DHA omega-3 retention for premium flesh quality",
//     color: "#2196E8",
//     tags: ["Marine", "Carnivore", "Cold water"],
//   },
//   {
//     emoji: "🦐", name: "Pacific White Shrimp", sci: "Litopenaeus vannamei",
//     protein: 38, lipid: 8, fcr: "1.4", temp: "23–30°C",
//     highlight: "Amino acid-balanced diets with optimised chitin-rich attractants",
//     color: "#F5A623",
//     tags: ["Brackish", "Omnivore", "Tropical"],
//   },
//   {
//     emoji: "🐡", name: "Nile Tilapia",       sci: "Oreochromis niloticus",
//     protein: 32, lipid: 6, fcr: "1.6", temp: "25–30°C",
//     highlight: "Plant-protein diets with phytase supplementation for phosphorus efficiency",
//     color: "#0ECFB0",
//     tags: ["Freshwater", "Omnivore", "Tropical"],
//   },
//   {
//     emoji: "🦑", name: "European Sea Bass", sci: "Dicentrarchus labrax",
//     protein: 46, lipid: 18, fcr: "1.2", temp: "15–25°C",
//     highlight: "Marine-sourced ingredients with taurine supplementation for larval development",
//     color: "#9DD4F9",
//     tags: ["Marine", "Carnivore", "Mediterranean"],
//   },
// ];

// function SpeciesSection() {
//   const [ref, vis] = useReveal(0.08);
//   const [active, setActive] = useState(0);
//   const sp = SPECIES[active];

//   return (
//     <section style={{ background: "rgba(2,20,38,0.9)", borderTop: "1px solid rgba(91,184,245,.08)", borderBottom: "1px solid rgba(91,184,245,.08)" }}>
//       <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 48px" }}>
//         <div className={`rv ${vis ? "in" : ""}`} style={{ marginBottom: 48 }}>
//           <div className="pill" style={{ marginBottom: 18 }}>Species-specific feeds</div>
//           <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-.025em" }}>
//             Tailored for every<br /><span className="gt">aquatic species</span>
//           </h2>
//         </div>

//         {/* Species tabs */}
//         <div className={`rv ${vis ? "in" : ""}`} style={{ display: "flex", gap: 12, marginBottom: 44, flexWrap: "wrap" }}>
//           {SPECIES.map((s, i) => (
//             <button key={s.name} onClick={() => setActive(i)} style={{
//               padding: "10px 22px", borderRadius: 30, border: `1.5px solid ${active === i ? s.color : "rgba(255,255,255,.1)"}`,
//               background: active === i ? `${s.color}18` : "transparent",
//               color: active === i ? s.color : "rgba(255,255,255,.5)",
//               fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, fontWeight: 500, cursor: "pointer",
//               transition: "all .25s", display: "flex", alignItems: "center", gap: 8,
//             }}>
//               <span>{s.emoji}</span>{s.name}
//             </button>
//           ))}
//         </div>

//         {/* Detail panel */}
//         <div className={`rv ${vis ? "in" : ""}`} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>

//           {/* Left — info */}
//           <div className="gc" style={{ padding: "40px", borderColor: `${sp.color}30` }}>
//             <div style={{ fontSize: 56, marginBottom: 20, filter: `drop-shadow(0 0 16px ${sp.color}88)`, animation: "float-slow 4s ease-in-out infinite" }}>{sp.emoji}</div>
//             <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 700, marginBottom: 4 }}>{sp.name}</h3>
//             <div style={{ fontStyle: "italic", fontSize: 14, color: "rgba(255,255,255,.38)", marginBottom: 20 }}>{sp.sci}</div>
//             <p style={{ fontSize: 14, color: sp.color, lineHeight: 1.7, marginBottom: 28, padding: "14px 18px",
//               background: `${sp.color}10`, borderRadius: 10, border: `1px solid ${sp.color}25` }}>{sp.highlight}</p>

//             {/* Nutrient dials */}
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
//               {[
//                 { l: "Crude Protein", v: sp.protein, unit: "%", c: "#2196E8" },
//                 { l: "Crude Lipid",   v: sp.lipid,   unit: "%", c: "#0ECFB0" },
//                 { l: "Feed Conv. Ratio", v: sp.fcr,  unit: "",  c: "#F5A623" },
//                 { l: "Temp. Range",  v: sp.temp,     unit: "",  c: "#9DD4F9" },
//               ].map(d => (
//                 <div key={d.l} style={{ padding: "14px 16px", background: `${d.c}0A`, borderRadius: 12, border: `1px solid ${d.c}20` }}>
//                   <div style={{ fontSize: 11, color: "rgba(255,255,255,.38)", marginBottom: 6, textTransform: "uppercase", letterSpacing: ".08em" }}>{d.l}</div>
//                   <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, fontWeight: 700, color: d.c }}>{d.v}{d.unit}</div>
//                 </div>
//               ))}
//             </div>

//             <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//               {sp.tags.map(t => (
//                 <span key={t} style={{ padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 600,
//                   background: `${sp.color}15`, border: `1px solid ${sp.color}28`, color: sp.color }}>
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Right — nutrient breakdown visual */}
//           <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
//             <div style={{ fontSize: 12, color: "rgba(255,255,255,.3)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 4 }}>
//               Nutrient requirements
//             </div>
//             {[
//               { n: "Crude Protein",    v: sp.protein,     max: 55, unit: "%",    c: "#2196E8",  icon: "🧬" },
//               { n: "Crude Lipid",      v: sp.lipid,       max: 35, unit: "%",    c: "#0ECFB0",  icon: "💧" },
//               { n: "Digestible Energy",v: 18,             max: 25, unit:" MJ/kg",c: "#F5A623",  icon: "⚡" },
//               { n: "Lysine",           v: 2.8,            max: 5,  unit: "%",    c: "#9DD4F9",  icon: "🔬" },
//               { n: "Methionine",       v: 1.2,            max: 3,  unit: "%",    c: "#FF6B5E",  icon: "🧪" },
//               { n: "Omega-3 (n-3)",    v: 3.4,            max: 8,  unit: "%",    c: "#5BB8F5",  icon: "🌊" },
//               { n: "Phosphorus",       v: 0.9,            max: 2,  unit: "%",    c: "#CBE9FC",  icon: "🪨" },
//               { n: "Vitamin C",        v: 50,             max: 100,unit:" mg/kg",c: "#0ECFB0",  icon: "✨" },
//             ].map((item, i) => (
//               <div key={item.n} className="gc" style={{ padding: "14px 20px" }}>
//                 <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
//                   <span style={{ fontSize: 16 }}>{item.icon}</span>
//                   <span style={{ fontSize: 13, flex: 1 }}>{item.n}</span>
//                   <span style={{ fontSize: 13, fontWeight: 700, color: item.c }}>{item.v}{item.unit}</span>
//                 </div>
//                 <div className="nbar">
//                   <div className="nbar-fill" style={{
//                     width: vis ? `${(item.v / item.max) * 100}%` : "0%",
//                     background: `linear-gradient(90deg,${item.c}88,${item.c})`,
//                     boxShadow: `0 0 8px ${item.c}55`,
//                     transition: `width 1.2s ${0.2 + i * 0.08}s cubic-bezier(.22,.68,0,1.2)`,
//                   }} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════
//    SECTION 4 — STATS BANNER
// ═══════════════════════════════════════════════════════ */
// const STATS = [
//   { icon: "🌊", n: 40, suffix: "+", label: "Species covered", color: "#5BB8F5" },
//   { icon: "🐟", n: 98,  suffix: "%", label: "Digestibility rate", color: "#0ECFB0" },
//   { icon: "📊", n: 35,  suffix: "%", label: "Reduced feed waste", color: "#2196E8" },
//   { icon: "🌿", n: 60,  suffix: "%", label: "Sustainable ingredients", color: "#F5A623" },
// ];

// function StatsSection() {
//   const [ref, vis] = useReveal(0.2);
//   return (
//     <section style={{ position: "relative", overflow: "hidden" }}>
//       <div style={{ position: "absolute", inset: 0,
//         background: "linear-gradient(135deg,rgba(10,79,128,.25) 0%,rgba(1,13,26,0) 100%)",
//         borderTop: "1px solid rgba(91,184,245,.1)", borderBottom: "1px solid rgba(91,184,245,.1)" }} />

//       {/* Animated sonar rings */}
//       {[200, 350, 500].map((s, i) => (
//         <div key={s} style={{
//           position: "absolute", top: "50%", right: "10%",
//           width: s, height: s, borderRadius: "50%",
//           border: "1px solid rgba(91,184,245,.07)",
//           transform: "translateY(-50%)",
//           animation: `sonar ${5 + i * 2}s ${i * 1.2}s ease-out infinite`,
//         }} />
//       ))}

//       <div ref={ref} style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "80px 48px" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }}>
//           {STATS.map((s, i) => {
//             const count = useCounter(s.n, vis);
//             return (
//               <div key={s.label} className={`rv gc ${vis ? "in" : ""}`}
//                 style={{ textAlign: "center", padding: "36px 24px", transitionDelay: `${i * 0.1}s`, borderColor: `${s.color}20` }}>
//                 <div style={{ fontSize: 36, marginBottom: 12, filter: `drop-shadow(0 0 10px ${s.color}66)`, animation: "float-slow 4s ease-in-out infinite", animationDelay: `${i * .5}s` }}>{s.icon}</div>
//                 <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 52, fontWeight: 700, color: s.color, lineHeight: 1 }}>
//                   {count}{s.suffix}
//                 </div>
//                 <div style={{ fontSize: 13, color: "rgba(255,255,255,.42)", marginTop: 10 }}>{s.label}</div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════
//    SECTION 5 — SUSTAINABILITY (underwater ecosystem)
// ═══════════════════════════════════════════════════════ */
// const SUSTAIN = [
//   { icon: "🌿", title: "Marine-free protein", body: "Up to 70% plant-based protein inclusion using novel processing that maintains palatability and amino-acid profiles identical to fishmeal.", color: "#0ECFB0" },
//   { icon: "🔄", title: "Circular feed loops", body: "Insect meal, single-cell proteins, and algal biomass transform agricultural by-products into premium aquafeed ingredients.", color: "#5BB8F5" },
//   { icon: "🌊", title: "Zero-effluent farms", body: "Our phosphorus-optimised, low-nitrogen diets slash pond effluent by up to 40%, protecting surrounding watersheds and coastal ecosystems.", color: "#2196E8" },
//   { icon: "🧪", title: "Probiotic health stacks", body: "Gut-health formulations reduce antibiotic dependency by building a robust microbiome — healthier fish, lower medication costs.", color: "#F5A623" },
//   { icon: "📡", title: "Smart feed monitoring", body: "Sensor-integrated feed management couples our precision diets with real-time palatability data to eliminate waste and over-feeding.", color: "#9DD4F9" },
//   { icon: "🏭", title: "Low-carbon manufacturing", body: "Cold-press extrusion at our net-zero facility cuts energy use by 35% versus conventional steam pelleting lines.", color: "#CBE9FC" },
// ];

// function SustainSection() {
//   const [ref, vis] = useReveal(0.08);
//   return (
//     <section style={{ background: "var(--ocean-900)" }}>
//       <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 48px" }}>
//         <div className={`rv ${vis ? "in" : ""}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
//           <div>
//             <div className="pill" style={{ marginBottom: 18 }}>Sustainability</div>
//             <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-.025em" }}>
//               Ocean health<br /><span className="gt">is our mandate</span>
//             </h2>
//           </div>
//           <button className="btn-teal">Sustainability report →</button>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
//           {SUSTAIN.map((s, i) => (
//             <div key={s.title} className={`gc rv ${vis ? "in" : ""}`}
//               style={{ padding: "30px 28px", transitionDelay: `${i * 0.09}s` }}>
//               <div style={{
//                 width: 50, height: 50, borderRadius: 14,
//                 background: `${s.color}14`, border: `1.5px solid ${s.color}28`,
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 fontSize: 24, marginBottom: 18,
//                 animation: "float-slow 5s ease-in-out infinite", animationDelay: `${i * .4}s`,
//               }}>{s.icon}</div>
//               <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, marginBottom: 10, letterSpacing: "-.01em" }}>{s.title}</h3>
//               <p style={{ fontSize: 13.5, color: "rgba(255,255,255,.5)", lineHeight: 1.75 }}>{s.body}</p>
//               <div style={{ height: 2, marginTop: 20, borderRadius: 1,
//                 background: `linear-gradient(90deg, ${s.color}60, transparent)` }} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════
//    SECTION 6 — GROWTH CYCLE TIMELINE
// ═══════════════════════════════════════════════════════ */
// const CYCLE = [
//   { stage: "Larval",     icon: "🥚",  days: "D0–30",   protein: "60%", lipid: "18%", note: "Micro-diets with high DHA for eye and neural development" },
//   { stage: "Fry",        icon: "🐠",  days: "D30–90",  protein: "55%", lipid: "20%", note: "Increased lysine for rapid muscle fibre recruitment" },
//   { stage: "Fingerling", icon: "🐟",  days: "D90–180", protein: "48%", lipid: "22%", note: "Balanced EAA profile supports exponential weight gain phase" },
//   { stage: "Juvenile",   icon: "🐡",  days: "D180–300",protein: "44%", lipid: "24%", note: "Energy-dense pellets maximise FCR efficiency" },
//   { stage: "Grow-out",   icon: "🐳",  days: "D300–450",protein: "40%", lipid: "26%", note: "Omega-3 loading for premium flesh and colour deposition" },
//   { stage: "Harvest",    icon: "🏆",  days: "D450+",   protein: "38%", lipid: "28%", note: "Withdrawal diet clears pigment while maintaining condition" },
// ];

// function CycleSection() {
//   const [ref, vis] = useReveal(0.08);
//   const [hover, setHover] = useState(null);

//   return (
//     <section style={{ position: "relative", overflow: "hidden" }}>
//       <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,var(--ocean-900) 0%,var(--ocean-800) 100%)" }} />

//       <div ref={ref} style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "100px 48px" }}>
//         <div className={`rv ${vis ? "in" : ""}`} style={{ marginBottom: 60 }}>
//           <div className="pill" style={{ marginBottom: 18 }}>Life-stage nutrition</div>
//           <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-.025em" }}>
//             Nutrition across<br /><span className="gt">every growth stage</span>
//           </h2>
//         </div>

//         {/* Horizontal timeline */}
//         <div className={`rv ${vis ? "in" : ""}`} style={{ position: "relative" }}>
//           {/* Connector line */}
//           <div style={{ position: "absolute", top: 44, left: 44, right: 44, height: 2,
//             background: "linear-gradient(90deg,transparent,var(--ocean-500),var(--teal),var(--ocean-500),transparent)",
//             opacity: .4 }} />

//           {/* Flowing fish along timeline */}
//           <div style={{ position: "absolute", top: 30, left: 0, animation: "swim-lr 12s 2s linear infinite", zIndex: 0 }}>
//             <SwimmingFish color="#0ECFB0" size={0.7} />
//           </div>

//           {/* Nodes */}
//           <div style={{ display: "grid", gridTemplateColumns: `repeat(${CYCLE.length}, 1fr)`, gap: 0, position: "relative", zIndex: 1 }}>
//             {CYCLE.map((st, i) => (
//               <div key={st.stage}
//                 onMouseEnter={() => setHover(i)}
//                 onMouseLeave={() => setHover(null)}
//                 style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
//                 {/* Node circle */}
//                 <div style={{
//                   width: 56, height: 56, borderRadius: "50%", fontSize: 24,
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   background: hover === i ? "rgba(14,207,176,.25)" : "rgba(6,51,84,.8)",
//                   border: `2px solid ${hover === i ? "var(--teal)" : "rgba(91,184,245,.25)"}`,
//                   boxShadow: hover === i ? "0 0 24px rgba(14,207,176,.45)" : "none",
//                   transition: "all .3s", marginBottom: 16,
//                   animation: hover === i ? "glow-pulse .8s ease-in-out infinite" : "none",
//                 }}>{st.icon}</div>

//                 <div style={{ fontSize: 12, fontWeight: 700, color: hover === i ? "var(--teal)" : "rgba(255,255,255,.75)", marginBottom: 4 }}>{st.stage}</div>
//                 <div style={{ fontSize: 10, color: "rgba(255,255,255,.3)", marginBottom: 12 }}>{st.days}</div>

//                 {/* Tooltip card */}
//                 <div style={{
//                   padding: "14px 16px", borderRadius: 12,
//                   background: "rgba(3,22,40,.9)", border: "1px solid rgba(14,207,176,.2)",
//                   fontSize: 12, lineHeight: 1.6, textAlign: "center",
//                   opacity: hover === i ? 1 : 0.4,
//                   transform: hover === i ? "translateY(0)" : "translateY(4px)",
//                   transition: "all .3s",
//                   maxWidth: 130,
//                 }}>
//                   <div style={{ color: "var(--teal)", fontWeight: 700, marginBottom: 4 }}>P: {st.protein} · L: {st.lipid}</div>
//                   <div style={{ color: "rgba(255,255,255,.5)", fontSize: 11 }}>{st.note}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════
//    SECTION 7 — SCIENCE TEAM
// ═══════════════════════════════════════════════════════ */
// const EXPERTS = [
//   { initials: "NK", name: "Dr Nadia Karlsson", role: "Head of Aqua Nutrition", spec: "Fish physiology & lipid metabolism, 20+ years in salmonid nutrition research.", color: "#5BB8F5" },
//   { initials: "PM", name: "Prof Pedro Morais",  role: "Formulation Scientist",   spec: "Novel protein ingredient evaluation and palatability science for marine species.", color: "#0ECFB0" },
//   { initials: "LW", name: "Dr Li Wei",          role: "Microbiome Lead",         spec: "Gut microbiome engineering, probiotic formulation and immunostimulant research.", color: "#2196E8" },
//   { initials: "SR", name: "Dr Sunita Rao",      role: "Sustainability Director", spec: "Life-cycle assessment, alternative ingredient validation and circular economy feed design.", color: "#F5A623" },
// ];

// function TeamSection() {
//   const [ref, vis] = useReveal(0.1);
//   return (
//     <section style={{ background: "rgba(2,20,38,0.9)", borderTop: "1px solid rgba(91,184,245,.08)" }}>
//       <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 48px" }}>
//         <div className={`rv ${vis ? "in" : ""}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: 20 }}>
//           <div>
//             <div className="pill" style={{ marginBottom: 18 }}>Our scientists</div>
//             <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-.025em" }}>
//               Experts who live<br /><span className="gt">and breathe aqua</span>
//             </h2>
//           </div>
//           <button className="btn-teal">Meet the full team →</button>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22 }}>
//           {EXPERTS.map((e, i) => (
//             <div key={e.name} className={`gc rv ${vis ? "in" : ""}`}
//               style={{ padding: "28px 24px", transitionDelay: `${i * 0.1}s` }}>
//               {/* Avatar with ripple */}
//               <div style={{ position: "relative", width: 60, height: 60, marginBottom: 18 }}>
//                 <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: `1px solid ${e.color}40`, animation: "ripple 3s ease-out infinite", animationDelay: `${i * .5}s` }} />
//                 <div style={{
//                   width: 60, height: 60, borderRadius: "50%",
//                   background: `${e.color}18`, border: `2px solid ${e.color}40`,
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: e.color,
//                 }}>{e.initials}</div>
//               </div>
//               <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 3 }}>{e.name}</div>
//               <div style={{ fontSize: 12, color: e.color, marginBottom: 14, fontWeight: 500 }}>{e.role}</div>
//               <p style={{ fontSize: 13, color: "rgba(255,255,255,.44)", lineHeight: 1.65 }}>{e.spec}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════
//    SECTION 8 — CTA
// ═══════════════════════════════════════════════════════ */
// function CTASection() {
//   const [ref, vis] = useReveal(0.15);
//   const bubbles = Array.from({ length: 12 }, (_, i) => ({
//     left: `${8 + i * 7.5}%`, size: 8 + Math.random() * 18,
//     delay: i * 0.5, dur: 6 + Math.random() * 6,
//   }));

//   return (
//     <section ref={ref} style={{ position: "relative", overflow: "hidden" }}>
//       {/* Deep water bg */}
//       <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,var(--ocean-800) 0%,var(--ocean-deep) 100%)" }} />
//       {/* Bioluminescent glow */}
//       <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
//         width: 600, height: 600, borderRadius: "50%",
//         background: "radial-gradient(circle,rgba(14,207,176,.12) 0%,transparent 65%)" }} />

//       {/* Rising bubbles */}
//       {bubbles.map((b, i) => (
//         <div key={i} style={{
//           position: "absolute", bottom: "-8%", left: b.left,
//           width: b.size, height: b.size, borderRadius: "50%",
//           border: "1.5px solid rgba(91,184,245,0.4)",
//           background: "rgba(91,184,245,0.04)",
//           animation: `bubble-rise ${b.dur}s ${b.delay}s ease-in-out infinite`,
//         }} />
//       ))}

//       {/* Kelp silhouettes */}
//       <svg style={{ position: "absolute", bottom: 0, left: "8%", opacity: .3 }} width="80" height="340" viewBox="0 0 80 340">
//         {[0,1,2].map(k => (
//           <path key={k} d={`M${24+k*16},340 Q${10+k*18},260 ${28+k*10},180 Q${8+k*18},100 ${24+k*12},20`}
//             fill="none" stroke="rgba(42,125,79,.8)" strokeWidth="7" strokeLinecap="round"
//             style={{transformOrigin:`${24+k*16}px 340px`,animation:`kelp-sway ${3+k*.8}s ease-in-out infinite`,animationDelay:`${k*.4}s`}} />
//         ))}
//       </svg>

//       {/* Fish swimming across */}
//       <div style={{ position: "absolute", top: "30%", animation: "swim-rl 16s 2s linear infinite" }}>
//         <SwimmingFish color="#5BB8F5" size={1.4} />
//       </div>

//       <div className={`rv ${vis ? "in" : ""}`} style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto", padding: "120px 48px", textAlign: "center" }}>
//         <div className="pill" style={{ marginBottom: 24, display: "inline-flex" }}>Start optimising</div>
//         <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(36px,5.5vw,68px)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-.03em", marginBottom: 24 }}>
//           Ready to transform<br /><span className="gt">your aquafarm?</span>
//         </h2>
//         <p style={{ fontSize: 16, color: "rgba(255,255,255,.5)", lineHeight: 1.85, maxWidth: 480, margin: "0 auto 48px" }}>
//           Our nutritionists will design a precision feed programme matched to your species,
//           grow-out system, and sustainability targets — from hatchery to plate.
//         </p>
//         <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
//           <button className="btn-ocean" style={{ padding: "15px 38px", fontSize: 15 }}>Request a consultation →</button>
//           <button className="btn-teal" style={{ padding: "14px 32px", fontSize: 15 }}>Download feed catalogue</button>
//         </div>
//       </div>

//       {/* Wave top */}
//       <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
//         <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: 80, display: "block" }}>
//           <path d="M0,40 C360,80 720,0 1080,50 C1260,75 1380,20 1440,40 L1440,0 L0,0 Z" fill="var(--ocean-800)" />
//         </svg>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════
//    ROOT
// ═══════════════════════════════════════════════════════ */
// export default function AquacultureNutritionPage() {
//   useEffect(() => {
//     const tag = document.createElement("style");
//     tag.textContent = CSS;
//     document.head.appendChild(tag);
//     return () => document.head.removeChild(tag);
//   }, []);

//   return (
//     <main style={{ position: "relative" }}>
//       <OceanCanvas />
//       <div style={{ position: "relative", zIndex: 1 }}>
//         <Hero />
//         <MacroSection />
//         <SpeciesSection />
//         <StatsSection />
//         <SustainSection />
//         <CycleSection />
//         <TeamSection />
//         <CTASection />
//       </div>
//     </main>
//   );
// }
// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Footer from "@/components/Footer";

// /* ══════════════════════════════════════════════════
//    BRAND TOKENS  (matches Innovare Biopharma site)
// ══════════════════════════════════════════════════ */
// const B = {
//   blue:        "#2A5DA8",
//   blueDark:    "#1e4a8a",
//   blueDeep:    "#0f2f5e",
//   blueMid:     "#eff6ff",
//   blueLight:   "#dbeafe",
//   teal:        "#0891b2",
//   tealLight:   "#e0f2fe",
//   navy:        "#0f172a",
//   slate:       "#475569",
//   muted:       "#94a3b8",
//   border:      "#e2e8f0",
//   surface:     "#f8fafc",
//   pageBg:      "#f0f4f8",
//   green:       "#15803d",
//   greenBg:     "#f0fdf4",
//   amber:       "#d97706",
//   amberBg:     "#fffbeb",
// };

// /* ══════════════════════════════════════════════════
//    SCROLL REVEAL HOOK
// ══════════════════════════════════════════════════ */
// function useReveal(threshold = 0.12) {
//   const ref  = useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const el = ref.current; if (!el) return;
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
//       { threshold }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);
//   return [ref, visible] as const;
// }

// /* ══════════════════════════════════════════════════
//    ANIMATED COUNTER HOOK
// ══════════════════════════════════════════════════ */
// function useCounter(target: number, trigger: boolean, dur = 1600) {
//   const [val, setVal] = useState(0);
//   useEffect(() => {
//     if (!trigger) return;
//     let start: number | null = null;
//     const step = (ts: number) => {
//       if (!start) start = ts;
//       const p = Math.min((ts - start) / dur, 1);
//       setVal(Math.round(p * target));
//       if (p < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [trigger, target]);
//   return val;
// }

// /* ══════════════════════════════════════════════════
//    SECTION — HERO
// ══════════════════════════════════════════════════ */
// function Hero() {
//   return (
//     // <section style={{
//     //   background: `linear-gradient(135deg, ${B.blueDeep} 0%, ${B.blue} 60%, ${B.teal} 100%)`,
//     //   position: "relative", overflow: "hidden", padding: "120px 48px 100px",
//     // }}>
//     //   {/* Dot grid overlay */}
//     //   <div style={{
//     //     position: "absolute", inset: 0, zIndex: 0,
//     //     backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
//     //     backgroundSize: "28px 28px", pointerEvents: "none",
//     //   }} />
//     //   {/* Decorative circles */}
//     //   <div style={{ position: "absolute", right: "-80px", top: "-80px", width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.04)", zIndex: 0 }} />
//     //   <div style={{ position: "absolute", right: "10%", bottom: "-60px", width: 260, height: 260, borderRadius: "50%", background: "rgba(255,255,255,0.05)", zIndex: 0 }} />

//     //   <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>
//     //     {/* Breadcrumb */}
//     //     <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 32 }}>
//     //       <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
//     //       <span>/</span>
//     //       <span style={{ color: "#fff" }}>Aquaculture Nutrition</span>
//     //     </div>

//     //     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
//     //       <div>
//     //         <div style={{
//     //           display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px",
//     //           borderRadius: 100, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
//     //           fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.9)", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 28,
//     //         }}>
//     //           <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5eead4", display: "inline-block" }} />
//     //           Innovare Biopharma — Science Division
//     //         </div>

//     //         <h1 style={{ fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: -1, marginBottom: 20 }}>
//     //           Precision Nutrition<br />
//     //           <span style={{ color: "#5eead4" }}>for Aquaculture Health</span>
//     //         </h1>

//     //         <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, marginBottom: 40, maxWidth: 480 }}>
//     //           From hatchery to harvest, Innovare Biopharma delivers scientifically formulated
//     //           feed supplements, probiotics, and mineral solutions that optimise growth,
//     //           immunity, and pond health across every production stage.
//     //         </p>

//     //         <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
//     //           <Link href="/products" style={{
//     //             display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px",
//     //             borderRadius: 40, background: "#fff", color: B.blue, fontSize: 14, fontWeight: 700,
//     //             textDecoration: "none", transition: "all .2s",
//     //           }}>
//     //             View Our Products →
//     //           </Link>
//     //           <a href="#solutions" style={{
//     //             display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px",
//     //             borderRadius: 40, border: "1.5px solid rgba(255,255,255,0.35)", background: "transparent",
//     //             color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none",
//     //           }}>
//     //             Our Solutions
//     //           </a>
//     //         </div>
//     //       </div>

//     //       {/* Right — Key numbers */}
//     //       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
//     //         {[
//     //           { icon: "🧪", n: "15+", label: "Aquaculture Products", sub: "GMP certified formulations" },
//     //           { icon: "🦐", n: "98%", label: "Customer Satisfaction", sub: "Across shrimp farms" },
//     //           { icon: "📦", n: "50+", label: "Farm Partners", sub: "Andhra Pradesh & beyond" },
//     //           { icon: "🏭", n: "ISO", label: "9001 Certified", sub: "Quality assured manufacturing" },
//     //         ].map(s => (
//     //           <div key={s.label} style={{
//     //             background: "rgba(255,255,255,0.1)", borderRadius: 16,
//     //             border: "1px solid rgba(255,255,255,0.15)", padding: "22px 20px",
//     //             backdropFilter: "blur(10px)",
//     //           }}>
//     //             <span style={{ fontSize: 28, display: "block", marginBottom: 8 }}>{s.icon}</span>
//     //             <div style={{ fontSize: 28, fontWeight: 800, color: "#5eead4", lineHeight: 1 }}>{s.n}</div>
//     //             <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginTop: 4, marginBottom: 2 }}>{s.label}</div>
//     //             <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>{s.sub}</div>
//     //           </div>
//     //         ))}
//     //       </div>
//     //     </div>
//     //   </div>
//     // </section>
// //   <section style={{
// //   position: "relative",
// //   overflow: "hidden",
// //   padding: "120px 48px 100px",
// // }}>


// //   {/* Gradient Overlay */}
// //   <div style={{
// //     position: "absolute",
// //     inset: 0,
// //     background: `linear-gradient(135deg, ${B.blueDeep} 0%, ${B.blue} 60%, ${B.teal} 100%)`,
// //     zIndex: 1,
// //   }} />

// //   {/* Dot grid overlay */}
// //   <div style={{
// //     position: "absolute",
// //     inset: 0,
// //     zIndex: 0,
// //     backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
// //     backgroundSize: "28px 28px",
// //     pointerEvents: "none",
// //   }} />

// //   {/* Decorative circles */}
// //   <div style={{
// //     position: "absolute",
// //     right: "-80px",
// //     top: "-80px",
// //     width: 400,
// //     height: 400,
// //     borderRadius: "50%",
// //     background: "rgba(255,255,255,0.04)",
// //     zIndex: 0
// //   }} />
// //   <div style={{
// //     position: "absolute",
// //     right: "10%",
// //     bottom: "-60px",
// //     width: 260,
// //     height: 260,
// //     borderRadius: "50%",
// //     background: "rgba(255,255,255,0.05)",
// //     zIndex: 0
// //   }} />

// //   {/* CONTENT */}
// //   <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto" }}>

// //     {/* Breadcrumb */}
// //     <div style={{
// //       display: "flex",
// //       gap: 8,
// //       alignItems: "center",
// //       fontSize: 13,
// //       color: "rgba(255,255,255,0.5)",
// //       marginBottom: 32
// //     }}>
// //       <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
// //         Home
// //       </Link>
// //       <span>/</span>
// //       <span style={{ color: "#fff" }}>Aquaculture Nutrition</span>
// //     </div>

// //     <div style={{
// //       display: "grid",
// //       gridTemplateColumns: "1fr 1fr",
// //       gap: 64,
// //       alignItems: "center"
// //     }}>

// //       {/* LEFT */}
// //       <div>
// //         <div style={{
// //           display: "inline-flex",
// //           alignItems: "center",
// //           gap: 8,
// //           padding: "6px 16px",
// //           borderRadius: 100,
// //           background: "rgba(255,255,255,0.12)",
// //           border: "1px solid rgba(255,255,255,0.2)",
// //           fontSize: 12,
// //           fontWeight: 600,
// //           color: "rgba(255,255,255,0.9)",
// //           letterSpacing: 1.2,
// //           textTransform: "uppercase",
// //           marginBottom: 28,
// //         }}>
// //           <span style={{
// //             width: 7,
// //             height: 7,
// //             borderRadius: "50%",
// //             background: "#5eead4"
// //           }} />
// //           Innovare Biopharma — Science Division
// //         </div>

// //         <h1 style={{
// //           fontSize: "clamp(36px, 4.5vw, 60px)",
// //           fontWeight: 800,
// //           color: "#fff",
// //           lineHeight: 1.1,
// //           letterSpacing: -1,
// //           marginBottom: 20
// //         }}>
// //           Precision Nutrition<br />
// //           <span style={{ color: "#5eead4" }}>
// //             for Aquaculture Health
// //           </span>
// //         </h1>

// //         <p style={{
// //           fontSize: 16,
// //           color: "rgba(255,255,255,0.65)",
// //           lineHeight: 1.85,
// //           marginBottom: 40,
// //           maxWidth: 480
// //         }}>
// //           From hatchery to harvest, Innovare Biopharma delivers scientifically formulated
// //           feed supplements, probiotics, and mineral solutions that optimise growth,
// //           immunity, and pond health across every production stage.
// //         </p>

// //         <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
// //           <Link href="/products" style={{
// //             display: "inline-flex",
// //             alignItems: "center",
// //             gap: 8,
// //             padding: "13px 28px",
// //             borderRadius: 40,
// //             background: "#fff",
// //             color: B.blue,
// //             fontSize: 14,
// //             fontWeight: 700,
// //             textDecoration: "none",
// //           }}>
// //             View Our Products →
// //           </Link>

// //           <a href="#solutions" style={{
// //             display: "inline-flex",
// //             alignItems: "center",
// //             gap: 8,
// //             padding: "12px 24px",
// //             borderRadius: 40,
// //             border: "1.5px solid rgba(255,255,255,0.35)",
// //             background: "transparent",
// //             color: "#fff",
// //             fontSize: 14,
// //             fontWeight: 500,
// //             textDecoration: "none",
// //           }}>
// //             Our Solutions
// //           </a>
// //         </div>
// //       </div>

// //       {/* RIGHT */}
// //       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
// //         {[
// //           { icon: "🧪", n: "15+", label: "Aquaculture Products", sub: "GMP certified formulations" },
// //           { icon: "🦐", n: "98%", label: "Customer Satisfaction", sub: "Across shrimp farms" },
// //           { icon: "📦", n: "50+", label: "Farm Partners", sub: "Andhra Pradesh & beyond" },
// //           { icon: "🏭", n: "ISO", label: "9001 Certified", sub: "Quality assured manufacturing" },
// //         ].map(s => (
// //           <div key={s.label} style={{
// //             background: "rgba(255,255,255,0.1)",
// //             borderRadius: 16,
// //             border: "1px solid rgba(255,255,255,0.15)",
// //             padding: "22px 20px",
// //             backdropFilter: "blur(10px)",
// //           }}>
// //             <span style={{ fontSize: 28, display: "block", marginBottom: 8 }}>{s.icon}</span>
// //             <div style={{ fontSize: 28, fontWeight: 800, color: "#5eead4" }}>{s.n}</div>
// //             <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginTop: 4 }}>{s.label}</div>
// //             <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>{s.sub}</div>
// //           </div>
// //         ))}
// //       </div>

// //     </div>
// //   </div>
// // </section>
// <section style={{
//   position: "relative",
//   overflow: "hidden",
//   padding: "120px 48px 100px",

//   // ✅ ADD THIS
//   minHeight: "100vh",   // full screen height
//   display: "flex",
//   alignItems: "center",
//   // ✅ Correct background setup
//   backgroundImage: `
//     linear-gradient(135deg, rgba(30,58,138,0.75), rgba(37,99,235,0.65), rgba(14,165,233,0.6)),
//     url('/images/nut.png')
//   `,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
// }}>

//   {/* Dot grid overlay */}
//   <div style={{
//     position: "absolute",
//     inset: 0,
//     zIndex: 0,
//     backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
//     backgroundSize: "28px 28px",
//     pointerEvents: "none",
//   }} />

//   {/* Decorative circles */}
//   <div style={{
//     position: "absolute",
//     right: "-80px",
//     top: "-80px",
//     width: 400,
//     height: 400,
//     borderRadius: "50%",
//     background: "rgba(255,255,255,0.04)",
//     zIndex: 0
//   }} />

//   <div style={{
//     position: "absolute",
//     right: "10%",
//     bottom: "-60px",
//     width: 260,
//     height: 260,
//     borderRadius: "50%",
//     background: "rgba(255,255,255,0.05)",
//     zIndex: 0
//   }} />

//   {/* CONTENT */}
//   <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>

//     {/* Breadcrumb */}
//     <div style={{
//       display: "flex",
//       gap: 8,
//       alignItems: "center",
//       fontSize: 13,
//       color: "rgba(255,255,255,0.5)",
//       marginBottom: 32
//     }}>
//       <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
//         Home
//       </Link>
//       <span>/</span>
//       <span style={{ color: "#fff" }}>Aquaculture Nutrition</span>
//     </div>

//     <div style={{
//       display: "grid",
//       gridTemplateColumns: "1fr 1fr",
//       gap: 64,
//       alignItems: "center"
//     }}>

//       {/* LEFT */}
//       <div>
//         <div style={{
//           display: "inline-flex",
//           alignItems: "center",
//           gap: 8,
//           padding: "6px 16px",
//           borderRadius: 100,
//           background: "rgba(255,255,255,0.12)",
//           border: "1px solid rgba(255,255,255,0.2)",
//           fontSize: 12,
//           fontWeight: 600,
//           color: "rgba(255,255,255,0.9)",
//           letterSpacing: 1.2,
//           textTransform: "uppercase",
//           marginBottom: 28,
//         }}>
//           <span style={{
//             width: 7,
//             height: 7,
//             borderRadius: "50%",
//             background: "#5eead4"
//           }} />
//           Innovare Biopharma — Science Division
//         </div>

//         <h1 style={{
//           fontSize: "clamp(36px, 4.5vw, 60px)",
//           fontWeight: 800,
//           color: "#fff",
//           lineHeight: 1.1,
//           letterSpacing: -1,
//           marginBottom: 20
//         }}>
//           Precision Nutrition<br />
//           <span style={{ color: "#5eead4" }}>
//             for Aquaculture Health
//           </span>
//         </h1>

//         <p style={{
//           fontSize: 16,
//           color: "rgba(255,255,255,0.65)",
//           lineHeight: 1.85,
//           marginBottom: 40,
//           maxWidth: 480
//         }}>
//           From hatchery to harvest, Innovare Biopharma delivers scientifically formulated
//           feed supplements, probiotics, and mineral solutions that optimise growth,
//           immunity, and pond health across every production stage.
//         </p>

//         <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
//           <Link href="/products" style={{
//             display: "inline-flex",
//             alignItems: "center",
//             gap: 8,
//             padding: "13px 28px",
//             borderRadius: 40,
//             background: "#fff",
//             color: B.blue,
//             fontSize: 14,
//             fontWeight: 700,
//             textDecoration: "none",
//           }}>
//             View Our Products →
//           </Link>

//           <a href="#solutions" style={{
//             display: "inline-flex",
//             alignItems: "center",
//             gap: 8,
//             padding: "12px 24px",
//             borderRadius: 40,
//             border: "1.5px solid rgba(255,255,255,0.35)",
//             background: "transparent",
//             color: "#fff",
//             fontSize: 14,
//             fontWeight: 500,
//             textDecoration: "none",
//           }}>
//             Our Solutions
//           </a>
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
//         {[
//           { icon: "🧪", n: "33+", label: "Aquaculture Products", sub: "GMP certified formulations" },
//           { icon: "🦐", n: "98%", label: "Customer Satisfaction", sub: "Across shrimp farms" },
//           { icon: "📦", n: "1000+", label: "Farm Partners", sub: "Andhra Pradesh & beyond" },
//           // { icon: "🏭", n: "ISO", label: "9001 Certified", sub: "Quality assured manufacturing" },
//           {
//   icon: "🔬",
//   n: "Lab Tested",
//   label: "Quality Assured",
//   sub: "Scientifically validated formulations"
// },
//         ].map(s => (
//           <div key={s.label} style={{
//             background: "rgba(255,255,255,0.1)",
//             borderRadius: 16,
//             border: "1px solid rgba(255,255,255,0.15)",
//             padding: "22px 20px",
//             backdropFilter: "blur(10px)",
//           }}>
//             <span style={{ fontSize: 28, display: "block", marginBottom: 8 }}>{s.icon}</span>
//             <div style={{ fontSize: 28, fontWeight: 800, color: "#5eead4" }}>{s.n}</div>
//             <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginTop: 4 }}>{s.label}</div>
//             <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>{s.sub}</div>
//           </div>
//         ))}
//       </div>

//     </div>
//   </div>
// </section>
// );
// }

// /* ══════════════════════════════════════════════════
//    SECTION — WHAT IS AQUACULTURE NUTRITION?
// ══════════════════════════════════════════════════ */
// function WhatIsSection() {
//   const [ref, vis] = useReveal(0.1);
//   return (
//     <section style={{ background: "#fff", padding: "100px 48px" }}>
//       <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
//           <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(-32px)", transition: "all .8s ease" }}>
//             <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" }}>The Foundation</span>
//             <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 12, marginBottom: 20 }}>
//               Why Aquaculture Nutrition Matters
//             </h2>
//             <p style={{ fontSize: 15, color: B.slate, lineHeight: 1.9, marginBottom: 18 }}>
//               Aquaculture accounts for more than half of the world's seafood supply. The productivity
//               and health of farmed shrimp, fish, and other aquatic species depend directly on the
//               quality and balance of the nutrients they receive throughout their life cycle.
//             </p>
//             <p style={{ fontSize: 15, color: B.slate, lineHeight: 1.9, marginBottom: 28 }}>
//               Poor nutrition leads to slow growth, weakened immunity, increased disease susceptibility,
//               and high feed conversion ratios — all of which directly impact profitability and
//               sustainability. At Innovare Biopharma, we develop targeted nutritional solutions that
//               address these challenges at every production stage.
//             </p>
//             <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//               {[
//                 "Optimised FCR (Feed Conversion Ratio) through precision mineral and vitamin blends",
//                 "Enhanced immunity reducing disease-related mortality",
//                 "Healthy pond ecology via water & soil probiotic management",
//                 "Faster, uniform growth cycles from larval to harvest stage",
//               ].map((point, i) => (
//                 <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
//                   <div style={{
//                     width: 22, height: 22, borderRadius: "50%", background: B.tealLight,
//                     border: `1px solid ${B.teal}40`, flexShrink: 0, marginTop: 1,
//                     display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: B.teal,
//                   }}>✓</div>
//                   <span style={{ fontSize: 14, color: B.slate, lineHeight: 1.6 }}>{point}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right — visual blocks */}
//           <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(32px)", transition: "all .8s ease .15s" }}>
//             <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
//               {[
//                 { icon: "🦠", title: "Gut Microbiome Health", desc: "A balanced gut microbiome improves digestion, nutrient absorption and natural immunity — reducing antibiotic dependency on farms.", color: B.teal },
//                 { icon: "🧬", title: "Mineral & Vitamin Balance", desc: "Deficiencies in calcium, phosphorus, magnesium or vitamin C impair moulting, bone formation and stress response in shrimp and fish.", color: B.blue },
//                 { icon: "💧", title: "Water Quality & Pond Ecology", desc: "Ammonia and H₂S build-up from overfeeding and poor digestion create toxic environments. Probiotic pond treatments restore healthy chemistry.", color: "#7c3aed" },
//               ].map((item, i) => (
//                 <div key={i} style={{
//                   padding: "22px 24px", borderRadius: 16, background: B.surface,
//                   border: `1px solid ${B.border}`, display: "flex", gap: 18, alignItems: "flex-start",
//                   transition: "transform .2s, box-shadow .2s",
//                   transitionDelay: `${i * 0.1}s`,
//                 }}>
//                   <div style={{
//                     width: 48, height: 48, borderRadius: 12, flexShrink: 0,
//                     background: `${item.color}14`, border: `1px solid ${item.color}30`,
//                     display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
//                   }}>{item.icon}</div>
//                   <div>
//                     <div style={{ fontSize: 14, fontWeight: 700, color: B.navy, marginBottom: 6 }}>{item.title}</div>
//                     <div style={{ fontSize: 13, color: B.slate, lineHeight: 1.65 }}>{item.desc}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ══════════════════════════════════════════════════
//    SECTION — NUTRITION LIFECYCLE (growth stages)
// ══════════════════════════════════════════════════ */
// const STAGES = [
//   {
//     stage: "Hatchery",
//     icon: "🥚",
//     days: "Day 0–15",
//     focus: "Larval nutrition & pond preparation",
//     products: ["Pond Minerals (i-MINVARE PM)", "Vitamin C (i-CEEVARE)", "Water Probiotics (i-PROPONDVARE)"],
//     desc: "Optimal water chemistry and mineral balance are critical from day one. Vitamin C supplementation supports stress resistance, while pond probiotics establish a healthy microbial baseline.",
//     color: "#0891b2",
//     pct: 16,
//   },
//   {
//     stage: "Post-Larvae",
//     icon: "🦐",
//     days: "Day 15–45",
//     focus: "Immunity building & moulting support",
//     products: ["Feed Minerals (i-MINVARE FM)", "Gut Probiotics (i-PROVARE GUT)", "i-IMMUNOVARE"],
//     desc: "Rapid moulting cycles demand calcium, phosphorus, and magnesium. Feed mineral premixes and gut probiotics improve nutrient uptake and reinforce the innate immune system.",
//     color: "#2A5DA8",
//     pct: 32,
//   },
//   {
//     stage: "Juvenile",
//     icon: "🐟",
//     days: "Day 45–90",
//     focus: "Growth acceleration & disease prevention",
//     products: ["i-VIBRIOVARE", "i-PHYTOVARE", "i-HEPTOPANCVARE"],
//     desc: "The juvenile phase is highest-risk for Vibrio and EHP infections. Targeted probiotics competitively exclude pathogens, while phytogenic additives stimulate appetite and reduce oxidative stress.",
//     color: "#7c3aed",
//     pct: 62,
//   },
//   {
//     stage: "Grow-out",
//     icon: "🦑",
//     days: "Day 90–120",
//     focus: "FCR optimisation & biomass gain",
//     products: ["i-LIVOVARE GEL", "i-BIO'YEAST'VARE", "i-CEEVARE"],
//     desc: "During grow-out, feed efficiency determines profitability. Liver-support gels, active yeast, and stable vitamin C work together to maximise feed utilisation and uniform weight gain.",
//     color: B.green,
//     pct: 80,
//   },
//   {
//     stage: "Pre-Harvest",
//     icon: "🏆",
//     days: "Day 120+",
//     focus: "Quality finish & stress management",
//     products: ["i-OXYVARE", "POTASSIUM CHLORIDE", "i-IMMUNOVARE"],
//     desc: "Harvesting is a high-stress event. Oxygen granules maintain dissolved oxygen during crowding, potassium chloride restores ionic balance, and immunity boosters reduce handling mortality.",
//     color: B.amber,
//     pct: 100,
//   },
// ];

// function LifecycleSection() {
//   const [ref, vis] = useReveal(0.06);
//   const [active, setActive] = useState(0);
//   const stage = STAGES[active];

//   return (
//     <section id="solutions" style={{ background: B.pageBg, padding: "100px 48px" }}>
//       <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
//         {/* Header */}
//         <div style={{ textAlign: "center", marginBottom: 56, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)", transition: "all .7s" }}>
//           <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" }}>Life-Stage Nutrition</span>
//           <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 12, marginBottom: 16 }}>
//             The Right Nutrition at Every Stage
//           </h2>
//           <p style={{ fontSize: 15, color: B.slate, maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
//             Shrimp and fish have different nutritional needs at each production stage.
//             Our product range is designed to cover every phase from hatchery to harvest.
//           </p>
//         </div>

//         {/* Progress bar timeline */}
//         <div style={{ marginBottom: 40, opacity: vis ? 1 : 0, transition: "opacity .7s .2s" }}>
//           <div style={{ position: "relative", height: 4, background: B.border, borderRadius: 2, marginBottom: 0 }}>
//             <div style={{
//               position: "absolute", left: 0, top: 0, height: "100%", borderRadius: 2,
//               background: `linear-gradient(90deg, ${B.teal}, ${B.blue})`,
//               width: vis ? `${stage.pct}%` : "0%",
//               transition: "width .6s cubic-bezier(.22,.68,0,1.2)",
//             }} />
//           </div>
//           <div style={{ display: "flex", justifyContent: "space-between", marginTop: 0 }}>
//             {STAGES.map((s, i) => (
//               <button key={s.stage} onClick={() => setActive(i)}
//                 style={{
//                   display: "flex", flexDirection: "column", alignItems: "center", gap: 0,
//                   background: "none", border: "none", cursor: "pointer", padding: "12px 8px",
//                   flex: 1,
//                 }}>
//                 <div style={{
//                   width: 40, height: 40, borderRadius: "50%", fontSize: 18,
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   background: active === i ? s.color : "#fff",
//                   border: `2px solid ${active === i ? s.color : B.border}`,
//                   boxShadow: active === i ? `0 4px 14px ${s.color}44` : "0 2px 6px rgba(0,0,0,0.06)",
//                   transition: "all .25s", marginBottom: 8,
//                 }}>{s.icon}</div>
//                 <span style={{ fontSize: 11, fontWeight: 700, color: active === i ? s.color : B.muted, textAlign: "center", lineHeight: 1.3 }}>{s.stage}</span>
//                 <span style={{ fontSize: 10, color: B.muted, marginTop: 2 }}>{s.days}</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Detail panel */}
//         <div style={{
//           display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28,
//           opacity: vis ? 1 : 0, transition: "opacity .7s .3s",
//         }}>
//           {/* Left */}
//           <div style={{
//             background: "#fff", borderRadius: 20, padding: "36px",
//             border: `1px solid ${stage.color}30`,
//             boxShadow: `0 4px 24px ${stage.color}12`,
//           }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
//               <div style={{
//                 width: 56, height: 56, borderRadius: 16, background: `${stage.color}14`,
//                 border: `1.5px solid ${stage.color}30`, display: "flex",
//                 alignItems: "center", justifyContent: "center", fontSize: 28,
//               }}>{stage.icon}</div>
//               <div>
//                 <div style={{ fontSize: 11, color: B.muted, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>{stage.days}</div>
//                 <div style={{ fontSize: 20, fontWeight: 800, color: B.navy }}>{stage.stage} Stage</div>
//               </div>
//             </div>

//             <div style={{ padding: "12px 16px", borderRadius: 10, background: `${stage.color}0f`, border: `1px solid ${stage.color}25`, marginBottom: 20 }}>
//               <div style={{ fontSize: 12, fontWeight: 700, color: stage.color, marginBottom: 4 }}>Primary Focus</div>
//               <div style={{ fontSize: 14, color: B.slate, fontWeight: 600 }}>{stage.focus}</div>
//             </div>

//             <p style={{ fontSize: 14, color: B.slate, lineHeight: 1.8, marginBottom: 24 }}>{stage.desc}</p>

//             <Link href="/products" style={{
//               display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px",
//               borderRadius: 10, background: `linear-gradient(135deg, ${B.blue}, ${B.teal})`,
//               color: "#fff", fontSize: 13, fontWeight: 700, textDecoration: "none",
//             }}>
//               View Related Products →
//             </Link>
//           </div>

//           {/* Right — recommended products */}
//           <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//             <div style={{ fontSize: 12, fontWeight: 700, color: B.muted, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 4 }}>
//               Recommended Innovare Products
//             </div>
//             {stage.products.map((p, i) => (
//               <div key={p} style={{
//                 padding: "16px 20px", borderRadius: 14, background: "#fff",
//                 border: `1px solid ${B.border}`, display: "flex", alignItems: "center", gap: 14,
//                 opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(20px)",
//                 transition: `all .4s ${0.4 + i * 0.1}s`,
//               }}>
//                 <div style={{
//                   width: 38, height: 38, borderRadius: 10, background: `${stage.color}12`,
//                   border: `1px solid ${stage.color}25`, display: "flex",
//                   alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0,
//                 }}>💊</div>
//                 <div style={{ flex: 1 }}>
//                   <div style={{ fontSize: 13, fontWeight: 700, color: B.navy }}>{p}</div>
//                   <div style={{ fontSize: 11, color: B.muted, marginTop: 2 }}>Innovare Biopharma</div>
//                 </div>
//                 <div style={{
//                   fontSize: 10, padding: "3px 10px", borderRadius: 100,
//                   background: `${stage.color}12`, color: stage.color, fontWeight: 700,
//                 }}>GMP ✓</div>
//               </div>
//             ))}

//             {/* Nutrition tip card */}
//             <div style={{
//               padding: "18px 20px", borderRadius: 14, background: B.amberBg,
//               border: `1px solid ${B.amber}40`, marginTop: 4,
//             }}>
//               <div style={{ fontSize: 12, fontWeight: 700, color: B.amber, marginBottom: 6 }}>⚠ Technical Tip</div>
//               <div style={{ fontSize: 13, color: "#78350f", lineHeight: 1.65 }}>
//                 Always consult an Innovare Biopharma field technician to confirm dosage rates
//                 for your specific pond density, salinity, and temperature conditions.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ══════════════════════════════════════════════════
//    SECTION — NUTRIENT CATEGORIES (wheel replaced by grid)
// ══════════════════════════════════════════════════ */
// const NUTRIENTS = [
//   {
//     icon: "🪨",
//     title: "Pond Minerals",
//     items: ["Calcium — shell & exoskeleton formation", "Phosphorus — energy metabolism & bone structure", "Magnesium — enzyme activation & osmoregulation", "Potassium — muscle contraction & ionic balance"],
//     color: B.teal,
//     product: "i.MINVARE PM / AM / WS / LIQ",
//   },
//   {
//     icon: "🌿",
//     title: "Feed Minerals & Vitamins",
//     items: ["Ascorbic acid (Vit C) — immunity & wound healing", "Mineral premix — complete micronutrient profile", "Trace elements — enzyme co-factors", "Anti-oxidants — oxidative stress protection"],
//     color: B.blue,
//     product: "i.MINVARE FM · i.CEEVARE",
//   },
//   {
//     icon: "🦠",
//     title: "Probiotics",
//     items: ["Bacillus strains — competitive pathogen exclusion", "Lactic acid bacteria — gut microflora balance", "Anti-Vibrio strains — EMS/AHPND prevention", "Soil & water probiotics — pond bottom health"],
//     color: "#7c3aed",
//     product: "i.VIBRIOVARE · i.PROVARE GUT",
//   },
//   {
//     icon: "🌱",
//     title: "Growth Promoters",
//     items: ["Phytogenic plant extracts — appetite stimulation", "Yeast beta-glucans — immune modulation", "Hepatoprotective agents — liver & digestive gland support", "Gel-form boosters — high feed adhesion coating"],
//     color: B.green,
//     product: "i.LIVOVARE GEL",
//   },
//   {
//     icon: "💧",
//     title: "Water & Soil Treatments",
//     items: ["Dissolved oxygen granules — emergency O₂ release", "Zeolite-based products — ammonia adsorption", "EDTA — heavy metal chelation", "Potassium chloride — ionic balance restoration"],
//     color: B.amber,
//     product: "i.OXYVARE · Potassium Chloride",
//   },
//   {
//     icon: "🛡️",
//     title: "Disease Management",
//     items: ["Hepatopancreas protectors — EHP impact reduction", "Vibrio control programs — farm biosecurity", "Yucca powder — ammonia toxicity reduction", "Immune stack programmes — seasonal disease cycles"],
//     color: "#dc2626",
//     product: "i.HEPTOPANCVARE · i.IMMUNOVARE · i.PHYTOVARE",
//   },
// ];

// function NutrientSection() {
//   const [ref, vis] = useReveal(0.06);
//   const [active, setActive] = useState<number | null>(null);

//   return (
//     <section style={{ background: "#fff", padding: "100px 48px" }}>
//       <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: 56, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)", transition: "all .7s" }}>
//           <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" }}>Our Product Categories</span>
//           <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 12, marginBottom: 16 }}>
//             Six Pillars of Aquaculture Nutrition
//           </h2>
//           <p style={{ fontSize: 15, color: B.slate, maxWidth: 540, margin: "0 auto", lineHeight: 1.75 }}>
//             Every Innovare Biopharma product is developed with a specific nutritional or
//             health function in mind — building a complete system for farm success.
//           </p>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
//           {NUTRIENTS.map((n, i) => (
//             <div
//               key={n.title}
//               onClick={() => setActive(active === i ? null : i)}
//               style={{
//                 padding: "28px 24px", borderRadius: 18,
//                 background: active === i ? `${n.color}08` : B.surface,
//                 border: `1.5px solid ${active === i ? n.color : B.border}`,
//                 cursor: "pointer", transition: "all .25s",
//                 boxShadow: active === i ? `0 8px 24px ${n.color}18` : "0 2px 8px rgba(0,0,0,0.04)",
//                 opacity: vis ? 1 : 0,
//                 transform: vis ? "none" : "translateY(20px)",
//                 transitionDelay: `${i * 0.07}s`,
//               }}
//             >
//               <div style={{
//                 width: 48, height: 48, borderRadius: 12, background: `${n.color}14`,
//                 border: `1.5px solid ${n.color}30`, display: "flex", alignItems: "center",
//                 justifyContent: "center", fontSize: 22, marginBottom: 16,
//               }}>{n.icon}</div>

//               <div style={{ fontSize: 15, fontWeight: 800, color: B.navy, marginBottom: 8 }}>{n.title}</div>

//               <div style={{
//                 maxHeight: active === i ? 300 : 0, overflow: "hidden",
//                 transition: "max-height .4s ease",
//               }}>
//                 <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 16, paddingTop: 4 }}>
//                   {n.items.map((item, j) => (
//                     <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
//                       <div style={{ width: 6, height: 6, borderRadius: "50%", background: n.color, flexShrink: 0, marginTop: 6 }} />
//                       <span style={{ fontSize: 12.5, color: B.slate, lineHeight: 1.55 }}>{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div style={{
//                 fontSize: 11, padding: "4px 12px", borderRadius: 100, display: "inline-flex",
//                 background: `${n.color}12`, color: n.color, fontWeight: 700, letterSpacing: 0.5, marginTop: 4,
//               }}>
//                 {n.product}
//               </div>

//               <div style={{ fontSize: 12, color: n.color, fontWeight: 600, marginTop: 12 }}>
//                 {active === i ? "▲ Show less" : "▼ View nutrients"}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ══════════════════════════════════════════════════
//    SECTION — STATS COUNTER BANNER
// ══════════════════════════════════════════════════ */
// const STATS = [
//   { icon: "🧪", n: 33, suffix: "+", label: "Aquaculture products", color: B.teal },
//   { icon: "🦐", n: 1000, suffix: "+", label: "Active farm partners", color: B.blue },
//   { icon: "📉", n: 35, suffix: "%", label: "Avg. FCR improvement", color: "#7c3aed" },
//   { icon: "🌿", n: 100, suffix: "%", label: "GMP certified range", color: B.green },
// ];

// function StatsSection() {
//   const [ref, vis] = useReveal(0.15);
//   return (
//     <section style={{
//       background: `linear-gradient(135deg, ${B.blueDeep} 0%, ${B.blue} 100%)`,
//       padding: "80px 48px", position: "relative", overflow: "hidden",
//     }}>
//       <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
//       <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
//           {STATS.map((s, i) => {
//             const count = useCounter(s.n, vis);
//             return (
//               <div key={s.label} style={{
//                 textAlign: "center", padding: "36px 20px",
//                 background: "rgba(255,255,255,0.08)", borderRadius: 20,
//                 border: "1px solid rgba(255,255,255,0.12)",
//                 opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)",
//                 transition: `all .6s ${i * 0.1}s`,
//               }}>
//                 <span style={{ fontSize: 32, display: "block", marginBottom: 12 }}>{s.icon}</span>
//                 <div style={{ fontSize: 48, fontWeight: 800, color: "#fff", lineHeight: 1 }}>
//                   {count}{s.suffix}
//                 </div>
//                 <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 10 }}>{s.label}</div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ══════════════════════════════════════════════════
//    SECTION — WHY INNOVARE BIOPHARMA
// ══════════════════════════════════════════════════ */
// const PILLARS = [
//   // { icon: "🏭", title: "GMP Certified Manufacturing", body: "All Innovare Biopharma products are manufactured under Good Manufacturing Practice standards, ensuring consistent quality, purity, and safety in every batch.", color: B.blue },
//   // { icon: "📋", title: "CAA Registered Products", body: "Our aquaculture products carry valid Coastal Aquaculture Authority (CAA) registrations, making them fully compliant for use in shrimp and fish farms across India.", color: B.teal },
//   { icon: "🔬", title: "Science-Backed Formulations", body: "Each product is developed by aquaculture and veterinary science specialists, with field-validated efficacy data from partner farms across Andhra Pradesh and Telangana.", color: "#7c3aed" },
//   { icon: "📞", title: "On-Farm Technical Support", body: "Our team of aquaculture technicians provides direct on-farm consultation — from pond preparation through grow-out — ensuring protocols are correctly implemented.", color: B.green },
//   { icon: "🌿", title: "Natural & Safe Ingredients", body: "Innovare Biopharma prioritises natural, non-antibiotic solutions: probiotics, phytogenics, and mineral supplements that improve outcomes without chemical residue risks.", color: B.amber },
//   { icon: "📦", title: "Full Product Ecosystem", body: "From pond minerals and feed premixes to gut probiotics and oxygen granules, we provide a complete, integrated nutrition and health system for every farm type.", color: "#dc2626" },
// ];

// function WhyUsSection() {
//   const [ref, vis] = useReveal(0.06);
//   return (
//     <section style={{ background: B.pageBg, padding: "100px 48px" }}>
//       <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: 56, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)", transition: "all .7s" }}>
//           <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" }}>Why Choose Us</span>
//           <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 12, marginBottom: 16 }}>
//             The Innovare Biopharma Advantage
//           </h2>
//         </div>
//         {/* <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
//           {PILLARS.map((p, i) => (
//             <div key={p.title} style={{
//               padding: "28px 24px", borderRadius: 18, background: "#fff",
//               border: `1px solid ${B.border}`,
//               boxShadow: "0 2px 8px rgba(15,23,42,0.05)",
//               opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)",
//               transition: `all .6s ${i * 0.08}s`,
//             }}>
//               <div style={{
//                 width: 48, height: 48, borderRadius: 12, background: `${p.color}12`,
//                 border: `1.5px solid ${p.color}28`, display: "flex", alignItems: "center",
//                 justifyContent: "center", fontSize: 22, marginBottom: 18,
//               }}>{p.icon}</div>
//               <h3 style={{ fontSize: 15, fontWeight: 800, color: B.navy, marginBottom: 10 }}>{p.title}</h3>
//               <p style={{ fontSize: 13.5, color: B.slate, lineHeight: 1.75 }}>{p.body}</p>
//               <div style={{ height: 2, marginTop: 20, borderRadius: 1, background: `linear-gradient(90deg, ${p.color}60, transparent)` }} />
//             </div>
//           ))}
//         </div> */}
//         <div style={{
//   display: "grid",
//   gridTemplateColumns: "repeat(4, 1fr)", // ✅ 4 equal boxes
//   gap: 32,
//   width: "100%",
//   maxWidth: 1200,
//   margin: "0 auto",
// }}>
//   {PILLARS.map((p, i) => (
//     <div
//       key={p.title}
//       style={{
//         padding: "36px 28px",
//         borderRadius: 20,
//         background: "#fff",
//         border: `1px solid ${B.border}`,
//         boxShadow: "0 10px 30px rgba(15,23,42,0.06)",

//         height: "100%", // ✅ full height
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",

//         transition: "all .3s",
//         cursor: "pointer",

//         opacity: vis ? 1 : 0,
//         transform: vis ? "translateY(0)" : "translateY(20px)",
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.transform = "translateY(-6px)";
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.transform = "translateY(0)";
//       }}
//     >

//       {/* ICON */}
//       <div style={{
//         width: 56,
//         height: 56,
//         borderRadius: 14,
//         background: `${p.color}12`,
//         border: `1.5px solid ${p.color}28`,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontSize: 26,
//         marginBottom: 20,
//       }}>
//         {p.icon}
//       </div>

//       {/* CONTENT */}
//       <div style={{ flex: 1 }}>
//         <h3 style={{
//           fontSize: 16,
//           fontWeight: 800,
//           color: B.navy,
//           marginBottom: 12,
//         }}>
//           {p.title}
//         </h3>

//         <p style={{
//           fontSize: 14,
//           color: B.slate,
//           lineHeight: 1.8,
//         }}>
//           {p.body}
//         </p>
//       </div>

//       {/* BOTTOM LINE */}
//       <div style={{
//         height: 2,
//         marginTop: 20,
//         borderRadius: 1,
//         background: `linear-gradient(90deg, ${p.color}60, transparent)`
//       }} />
//     </div>
//   ))}
// </div>
//       </div>
//     </section>
//   );
// }

// /* ══════════════════════════════════════════════════
//    SECTION — FAQ
// ══════════════════════════════════════════════════ */
// const NUTRITION_FAQS = [
//   {
//     icon: "🐟",
//     q: "What is the optimal protein-to-energy ratio for farmed salmon at different life stages?",
//     a: "Protein-to-energy (P/E) ratios shift significantly across life stages. Fry and smolts require a higher P/E (~21–23 mg protein/kcal) to support rapid tissue growth, while larger harvest-size fish perform better at lower P/E ratios (~18–20 mg protein/kcal) as dietary energy is increasingly partitioned toward lipid deposition. Over-supplying protein beyond requirement elevates ammonia excretion and feed costs without improving growth.",
//   },
//   {
//     icon: "🌿",
//     q: "How much fishmeal can be replaced with plant-based proteins without impacting performance?",
//     a: "Modern diets can reduce fishmeal to 5–15% inclusion while maintaining growth parity, provided anti-nutritional factors such as saponins, phytate, and trypsin inhibitors are adequately processed. Soy protein concentrate, canola meal, and insect meal are leading alternatives. Amino acid balancing — especially lysine, methionine, and threonine — is essential when transitioning away from fishmeal.",
//   },
//   {
//     icon: "⚗️",
//     q: "What role do nucleotides play in aquafeed, and when are they worth including?",
//     a: "Nucleotides support intestinal cell proliferation and mucosal integrity, particularly under stress conditions such as first-feeding, disease challenge, or after antibiotic treatment. Their benefit is most pronounced in fast-growing larval and juvenile stages. Typical inclusion rates are 0.1–0.5%, and ROI is highest during health challenges rather than standard grow-out.",
//   },
//   {
//     icon: "💊",
//     q: "How should vitamin and mineral premixes be adjusted for high-oil diets?",
//     a: "High dietary lipid levels elevate the requirement for fat-soluble antioxidants — primarily vitamin E and vitamin C — to protect PUFA-rich tissues from lipid peroxidation. Selenium should also be reviewed for its antioxidant synergy with vitamin E. Fat-soluble vitamin bioavailability (A, D, K) is enhanced in high-oil diets, so over-supplementation should be monitored.",
//   },
//   {
//     icon: "📊",
//     q: "How do feed conversion ratios (FCR) vary between species and how should targets be set?",
//     a: "FCR benchmarks differ substantially: Atlantic salmon typically achieve 1.0–1.2; rainbow trout 0.9–1.15; shrimp (L. vannamei) 1.5–2.2 due to broadcast feeding losses. Targets should be set relative to species baseline, water temperature, fish size, and feeding technology. Automated feeding systems with feed-waste sensors can reduce FCR by 10–20% versus manual regimes.",
//   },
//   {
//     icon: "🧪",
//     q: "What are the signs of nutritional deficiency vs. infectious disease in farmed fish?",
//     a: "Nutritional deficiencies tend to present gradually and symmetrically: lordosis/scoliosis (vitamin C or phosphorus), cataracts (riboflavin or zinc), fin erosion (pantothenic acid), pale musculature (selenium/vitamin E). Infectious disease more often presents asymmetrically with focal lesions and sudden mortality spikes. Histopathology and feed audit in parallel is the most reliable diagnostic approach.",
//   },
// ];

// function FAQSection() {
//   const [openNutritionFaq, setOpenNutritionFaq] = useState<number | null>(null);
//   const [ref, vis] = useReveal(0.1);

//   return (
//     <section style={{ background: "#fff", padding: "100px 48px" }}>
//       <div ref={ref} style={{ maxWidth: 860, margin: "0 auto" }}>

//         {/* Header */}
//         <div style={{ textAlign: "center", marginBottom: 52, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)", transition: "all .7s" }}>
//           <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" }}>
//             Technical FAQs
//           </span>
//           <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 12 }}>
//             Common Nutrition<br />
//             <span style={{ color: B.blue }}>Questions Answered</span>
//           </h2>
//           <p style={{ fontSize: 15, color: B.slate, maxWidth: 480, margin: "14px auto 0", lineHeight: 1.75 }}>
//             Science-backed answers to the most common aquaculture nutrition questions from our partner farms.
//           </p>
//         </div>

//         {/* Accordion */}
//         <div style={{ opacity: vis ? 1 : 0, transition: "opacity .7s .2s" }}>
//           {NUTRITION_FAQS.map((faq, i) => {
//             const isOpen = openNutritionFaq === i;
//             return (
//               <div
//                 key={i}
//                 onClick={() => setOpenNutritionFaq(isOpen ? null : i)}
//                 style={{
//                   background: isOpen ? "#f0f9ff" : "#fff",
//                   border: `1.5px solid ${isOpen ? B.blue : B.border}`,
//                   borderRadius: 16,
//                   marginBottom: 12,
//                   cursor: "pointer",
//                   transition: "border-color .25s, background .25s, box-shadow .25s",
//                   boxShadow: isOpen ? "0 4px 32px rgba(14,165,233,0.10)" : "0 2px 8px rgba(14,165,233,0.04)",
//                   overflow: "hidden",
//                 }}
//               >
//                 {/* Question row */}
//                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 26px", gap: 16 }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
//                     <div style={{
//                       width: 36, height: 36, borderRadius: 10,
//                       background: isOpen ? "rgba(42,93,168,0.12)" : B.tealLight,
//                       border: `1px solid ${isOpen ? "rgba(42,93,168,0.28)" : B.blueLight}`,
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
//                     fontSize: 20, color: B.blue, flexShrink: 0, fontWeight: 300, lineHeight: 1,
//                     transition: "transform .3s",
//                     transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
//                     display: "inline-block",
//                   }}>+</span>
//                 </div>

//                 {/* Answer */}
//                 <div style={{ maxHeight: isOpen ? 400 : 0, overflow: "hidden", transition: "max-height .38s cubic-bezier(.4,0,.2,1)" }}>
//                   <div style={{ padding: "0 26px 22px", fontSize: 14, color: B.slate, lineHeight: 1.85, borderTop: `1px solid ${B.border}`, paddingTop: 16 }}>
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
//           background: B.tealLight,
//           border: `1px solid ${B.blueLight}`,
//           borderRadius: 16, padding: "26px 32px",
//           display: "flex", alignItems: "center",
//           justifyContent: "space-between", flexWrap: "wrap", gap: 16,
//           opacity: vis ? 1 : 0, transition: "opacity .7s .4s",
//         }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
//             <div style={{
//               width: 44, height: 44, borderRadius: 12,
//               background: `linear-gradient(135deg, ${B.teal}, ${B.blue})`,
//               display: "flex", alignItems: "center", justifyContent: "center",
//               fontSize: 20, flexShrink: 0, boxShadow: "0 4px 14px rgba(14,165,233,0.30)",
//             }}>🥗</div>
//             <div>
//               <div style={{ fontSize: 14, fontWeight: 700, color: B.navy }}>Still have a nutrition question?</div>
//               <div style={{ fontSize: 12, color: B.slate, marginTop: 2 }}>Our aquaculture nutritionists are available to advise your farm directly.</div>
//             </div>
//           </div>
//           <a href="mailto:info@innovarebiopharma.com" style={{
//             display: "inline-flex", alignItems: "center", gap: 8,
//             padding: "11px 26px", borderRadius: 40,
//             background: `linear-gradient(135deg, ${B.blue}, ${B.teal})`,
//             color: "#fff", fontSize: 13, fontWeight: 700,
//             textDecoration: "none", whiteSpace: "nowrap",
//           }}>
//             Ask a Nutritionist →
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default function NutritionPage() {
//   return (
//     <main style={{ position: "relative", background: B.pageBg }}>
//       <Hero />
//       <WhatIsSection />
//       <LifecycleSection />
//       <NutrientSection />
//       <StatsSection />
//       <WhyUsSection />
//       <FAQSection />   {/* ← moved above CTA */}
//       {/* <CTASection /> */}
//       <Footer />
//     </main>
//   );
// }
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

/* ══════════════════════════════════════════════════
   BRAND TOKENS  (matches Innovare Biopharma site)
══════════════════════════════════════════════════ */
const B = {
  blue:        "#2A5DA8",
  blueDark:    "#1e4a8a",
  blueDeep:    "#0f2f5e",
  blueMid:     "#eff6ff",
  blueLight:   "#dbeafe",
  teal:        "#0891b2",
  tealLight:   "#e0f2fe",
  navy:        "#0f172a",
  slate:       "#475569",
  muted:       "#94a3b8",
  border:      "#e2e8f0",
  surface:     "#f8fafc",
  pageBg:      "#f0f4f8",
  green:       "#15803d",
  greenBg:     "#f0fdf4",
  amber:       "#d97706",
  amberBg:     "#fffbeb",
};

/* ══════════════════════════════════════════════════
   RESPONSIVE STYLESHEET
   (Since this page is built with inline styles, these
   rules use !important to override inline grid/padding
   values at each breakpoint. classNames are attached
   alongside the existing style={{}} props below.)
══════════════════════════════════════════════════ */
const RESPONSIVE_CSS = `
  .nut-page img { max-width: 100%; }
  .nut-page * { box-sizing: border-box; }

  /* ── Large desktop ── */
  @media (min-width: 1440px) {
    .nut-hero-inner, .nut-inner-1100, .nut-inner-860 { max-width: 1200px; }
  }

  /* ── Small laptops / large tablets ── */
  @media (max-width: 1100px) {
    .nut-section-pad-100 { padding: 84px 40px !important; }
    .nut-section-pad-80  { padding: 68px 40px !important; }
    .nut-hero-section    { padding: 100px 40px 80px !important; }
  }

  /* ── Tablets ── */
  @media (max-width: 900px) {
    .nut-hero-grid        { grid-template-columns: 1fr !important; gap: 40px !important; }
    .nut-whatis-grid      { grid-template-columns: 1fr !important; gap: 40px !important; }
    .nut-lifecycle-detail { grid-template-columns: 1fr !important; }
    .nut-nutrient-grid    { grid-template-columns: repeat(2, 1fr) !important; }
    .nut-stats-grid       { grid-template-columns: repeat(2, 1fr) !important; }
    .nut-whyus-grid       { grid-template-columns: repeat(2, 1fr) !important; }
  }

  /* ── Mobile ── */
  @media (max-width: 640px) {
    .nut-section-pad-100 { padding: 56px 20px !important; }
    .nut-section-pad-80  { padding: 48px 20px !important; }
    .nut-hero-section    { padding: 88px 20px 56px !important; }
    .nut-hero-right-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
    .nut-nutrient-grid   { grid-template-columns: 1fr !important; }
    .nut-stats-grid      { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
    .nut-whyus-grid      { grid-template-columns: 1fr !important; gap: 18px !important; }
    .nut-stage-row       { overflow-x: auto !important; justify-content: flex-start !important; padding-bottom: 4px !important; }
    .nut-stage-row > button { flex: 0 0 auto !important; min-width: 72px !important; }
    .nut-faq-card        { flex-direction: column !important; align-items: flex-start !important; }
    .nut-faq-card a      { width: 100%; justify-content: center; }
  }

  /* ── Small phones ── */
  @media (max-width: 480px) {
    .nut-hero-right-grid { grid-template-columns: 1fr !important; }
    .nut-stats-grid      { grid-template-columns: 1fr 1fr !important; }
    .nut-breadcrumb      { flex-wrap: wrap; }
    .nut-hero-btns       { width: 100%; }
    .nut-hero-btns a     { flex: 1 1 auto; justify-content: center; text-align: center; }
  }
`;

/* ══════════════════════════════════════════════════
   SCROLL REVEAL HOOK
══════════════════════════════════════════════════ */
function useReveal(threshold = 0.12) {
  const ref  = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}

/* ══════════════════════════════════════════════════
   ANIMATED COUNTER HOOK
══════════════════════════════════════════════════ */
function useCounter(target: number, trigger: boolean, dur = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setVal(Math.round(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, target]);
  return val;
}

/* ══════════════════════════════════════════════════
   SECTION — HERO
══════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="nut-hero-section" style={{
      position: "relative",
      overflow: "hidden",
      padding: "120px 48px 100px",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      backgroundImage: `
        linear-gradient(135deg, rgba(30,58,138,0.75), rgba(37,99,235,0.65), rgba(14,165,233,0.6)),
        url('/images/nut.png')
      `,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>

      {/* Dot grid overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        pointerEvents: "none",
      }} />

      {/* Decorative circles */}
      <div style={{
        position: "absolute",
        right: "-80px",
        top: "-80px",
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.04)",
        zIndex: 0
      }} />

      <div style={{
        position: "absolute",
        right: "10%",
        bottom: "-60px",
        width: 260,
        height: 260,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.05)",
        zIndex: 0
      }} />

      {/* CONTENT */}
      <div className="nut-hero-inner" style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", width: "100%" }}>

        {/* Breadcrumb */}
        <div className="nut-breadcrumb" style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          fontSize: 13,
          color: "rgba(255,255,255,0.5)",
          marginBottom: 32
        }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Home
          </Link>
          <span>/</span>
          <span style={{ color: "#fff" }}>Aquaculture Nutrition</span>
        </div>

        <div className="nut-hero-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center"
        }}>

          {/* LEFT */}
          <div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              fontSize: 12,
              fontWeight: 600,
              color: "rgba(255,255,255,0.9)",
              letterSpacing: 1.2,
              textTransform: "uppercase",
              marginBottom: 28,
              maxWidth: "100%",
            }}>
              <span style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#5eead4",
                flexShrink: 0,
              }} />
              Innovare Biopharma — Science Division
            </div>

            <h1 style={{
              fontSize: "clamp(32px, 4.5vw, 60px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: -1,
              marginBottom: 20
            }}>
              Precision Nutrition<br />
              <span style={{ color: "#5eead4" }}>
                for Aquaculture Health
              </span>
            </h1>

            <p style={{
              fontSize: "clamp(14px, 1.6vw, 16px)",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.85,
              marginBottom: 40,
              maxWidth: 480
            }}>
              From hatchery to harvest, Innovare Biopharma delivers scientifically formulated
              feed supplements, probiotics, and mineral solutions that optimise growth,
              immunity, and pond health across every production stage.
            </p>

            <div className="nut-hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/products" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 28px",
                borderRadius: 40,
                background: "#fff",
                color: B.blue,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
              }}>
                View Our Products →
              </Link>

              <a href="#solutions" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                borderRadius: 40,
                border: "1.5px solid rgba(255,255,255,0.35)",
                background: "transparent",
                color: "#fff",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
              }}>
                Our Solutions
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="nut-hero-right-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, minWidth: 0 }}>
            {[
              { icon: "🧪", n: "33+", label: "Aquaculture Products", sub: "GMP certified formulations" },
              { icon: "🦐", n: "98%", label: "Customer Satisfaction", sub: "Across shrimp farms" },
              { icon: "📦", n: "1000+", label: "Farm Partners", sub: "Andhra Pradesh & beyond" },
              {
                icon: "🔬",
                n: "Lab Tested",
                label: "Quality Assured",
                sub: "Scientifically validated formulations"
              },
            ].map(s => (
              <div key={s.label} style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "22px 20px",
                backdropFilter: "blur(10px)",
                minWidth: 0,
              }}>
                <span style={{ fontSize: 28, display: "block", marginBottom: 8 }}>{s.icon}</span>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#5eead4" }}>{s.n}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginTop: 4 }}>{s.label}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>{s.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   SECTION — WHAT IS AQUACULTURE NUTRITION?
══════════════════════════════════════════════════ */
function WhatIsSection() {
  const [ref, vis] = useReveal(0.1);
  return (
    <section className="nut-section-pad-100" style={{ background: "#fff", padding: "100px 48px" }}>
      <div ref={ref} className="nut-inner-1100" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="nut-whatis-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(-32px)", transition: "all .8s ease", minWidth: 0 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" }}>The Foundation</span>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 12, marginBottom: 20 }}>
              Why Aquaculture Nutrition Matters
            </h2>
            <p style={{ fontSize: 15, color: B.slate, lineHeight: 1.9, marginBottom: 18 }}>
              Aquaculture accounts for more than half of the world's seafood supply. The productivity
              and health of farmed shrimp, fish, and other aquatic species depend directly on the
              quality and balance of the nutrients they receive throughout their life cycle.
            </p>
            <p style={{ fontSize: 15, color: B.slate, lineHeight: 1.9, marginBottom: 28 }}>
              Poor nutrition leads to slow growth, weakened immunity, increased disease susceptibility,
              and high feed conversion ratios — all of which directly impact profitability and
              sustainability. At Innovare Biopharma, we develop targeted nutritional solutions that
              address these challenges at every production stage.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Optimised FCR (Feed Conversion Ratio) through precision mineral and vitamin blends",
                "Enhanced immunity reducing disease-related mortality",
                "Healthy pond ecology via water & soil probiotic management",
                "Faster, uniform growth cycles from larval to harvest stage",
              ].map((point, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: "50%", background: B.tealLight,
                    border: `1px solid ${B.teal}40`, flexShrink: 0, marginTop: 1,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: B.teal,
                  }}>✓</div>
                  <span style={{ fontSize: 14, color: B.slate, lineHeight: 1.6 }}>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual blocks */}
          <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(32px)", transition: "all .8s ease .15s", minWidth: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "🦠", title: "Gut Microbiome Health", desc: "A balanced gut microbiome improves digestion, nutrient absorption and natural immunity — reducing antibiotic dependency on farms.", color: B.teal },
                { icon: "🧬", title: "Mineral & Vitamin Balance", desc: "Deficiencies in calcium, phosphorus, magnesium or vitamin C impair moulting, bone formation and stress response in shrimp and fish.", color: B.blue },
                { icon: "💧", title: "Water Quality & Pond Ecology", desc: "Ammonia and H₂S build-up from overfeeding and poor digestion create toxic environments. Probiotic pond treatments restore healthy chemistry.", color: "#7c3aed" },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: "22px 24px", borderRadius: 16, background: B.surface,
                  border: `1px solid ${B.border}`, display: "flex", gap: 18, alignItems: "flex-start",
                  transition: "transform .2s, box-shadow .2s",
                  transitionDelay: `${i * 0.1}s`,
                  minWidth: 0,
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                    background: `${item.color}14`, border: `1px solid ${item.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
                  }}>{item.icon}</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: B.navy, marginBottom: 6 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: B.slate, lineHeight: 1.65 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   SECTION — NUTRITION LIFECYCLE (growth stages)
══════════════════════════════════════════════════ */
const STAGES = [
  {
    stage: "Hatchery",
    icon: "🥚",
    days: "Day 0–15",
    focus: "Larval nutrition & pond preparation",
    products: ["Pond Minerals (i-MINVARE PM)", "Vitamin C (i-CEEVARE)", "Water Probiotics (i-PROPONDVARE)"],
    desc: "Optimal water chemistry and mineral balance are critical from day one. Vitamin C supplementation supports stress resistance, while pond probiotics establish a healthy microbial baseline.",
    color: "#0891b2",
    pct: 16,
  },
  {
    stage: "Post-Larvae",
    icon: "🦐",
    days: "Day 15–45",
    focus: "Immunity building & moulting support",
    products: ["Feed Minerals (i-MINVARE FM)", "Gut Probiotics (i-PROVARE GUT)", "i-IMMUNOVARE"],
    desc: "Rapid moulting cycles demand calcium, phosphorus, and magnesium. Feed mineral premixes and gut probiotics improve nutrient uptake and reinforce the innate immune system.",
    color: "#2A5DA8",
    pct: 32,
  },
  {
    stage: "Juvenile",
    icon: "🐟",
    days: "Day 45–90",
    focus: "Growth acceleration & disease prevention",
    products: ["i-VIBRIOVARE", "i-PHYTOVARE", "i-HEPTOPANCVARE"],
    desc: "The juvenile phase is highest-risk for Vibrio and EHP infections. Targeted probiotics competitively exclude pathogens, while phytogenic additives stimulate appetite and reduce oxidative stress.",
    color: "#7c3aed",
    pct: 62,
  },
  {
    stage: "Grow-out",
    icon: "🦑",
    days: "Day 90–120",
    focus: "FCR optimisation & biomass gain",
    products: ["i-LIVOVARE GEL", "i-BIO'YEAST'VARE", "i-CEEVARE"],
    desc: "During grow-out, feed efficiency determines profitability. Liver-support gels, active yeast, and stable vitamin C work together to maximise feed utilisation and uniform weight gain.",
    color: B.green,
    pct: 80,
  },
  {
    stage: "Pre-Harvest",
    icon: "🏆",
    days: "Day 120+",
    focus: "Quality finish & stress management",
    products: ["i-OXYVARE", "POTASSIUM CHLORIDE", "i-IMMUNOVARE"],
    desc: "Harvesting is a high-stress event. Oxygen granules maintain dissolved oxygen during crowding, potassium chloride restores ionic balance, and immunity boosters reduce handling mortality.",
    color: B.amber,
    pct: 100,
  },
];

function LifecycleSection() {
  const [ref, vis] = useReveal(0.06);
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <section id="solutions" className="nut-section-pad-100" style={{ background: B.pageBg, padding: "100px 48px" }}>
      <div ref={ref} className="nut-inner-1100" style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)", transition: "all .7s" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" }}>Life-Stage Nutrition</span>
          <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 12, marginBottom: 16 }}>
            The Right Nutrition at Every Stage
          </h2>
          <p style={{ fontSize: 15, color: B.slate, maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            Shrimp and fish have different nutritional needs at each production stage.
            Our product range is designed to cover every phase from hatchery to harvest.
          </p>
        </div>

        {/* Progress bar timeline */}
        <div style={{ marginBottom: 40, opacity: vis ? 1 : 0, transition: "opacity .7s .2s" }}>
          <div style={{ position: "relative", height: 4, background: B.border, borderRadius: 2, marginBottom: 0 }}>
            <div style={{
              position: "absolute", left: 0, top: 0, height: "100%", borderRadius: 2,
              background: `linear-gradient(90deg, ${B.teal}, ${B.blue})`,
              width: vis ? `${stage.pct}%` : "0%",
              transition: "width .6s cubic-bezier(.22,.68,0,1.2)",
            }} />
          </div>
          <div className="nut-stage-row" style={{ display: "flex", justifyContent: "space-between", marginTop: 0 }}>
            {STAGES.map((s, i) => (
              <button key={s.stage} onClick={() => setActive(i)}
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 0,
                  background: "none", border: "none", cursor: "pointer", padding: "12px 8px",
                  flex: 1,
                }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%", fontSize: 18,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: active === i ? s.color : "#fff",
                  border: `2px solid ${active === i ? s.color : B.border}`,
                  boxShadow: active === i ? `0 4px 14px ${s.color}44` : "0 2px 6px rgba(0,0,0,0.06)",
                  transition: "all .25s", marginBottom: 8,
                }}>{s.icon}</div>
                <span style={{ fontSize: 11, fontWeight: 700, color: active === i ? s.color : B.muted, textAlign: "center", lineHeight: 1.3, whiteSpace: "nowrap" }}>{s.stage}</span>
                <span style={{ fontSize: 10, color: B.muted, marginTop: 2, whiteSpace: "nowrap" }}>{s.days}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        <div className="nut-lifecycle-detail" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28,
          opacity: vis ? 1 : 0, transition: "opacity .7s .3s",
        }}>
          {/* Left */}
          <div style={{
            background: "#fff", borderRadius: 20, padding: "36px",
            border: `1px solid ${stage.color}30`,
            boxShadow: `0 4px 24px ${stage.color}12`,
            minWidth: 0,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 16, background: `${stage.color}14`,
                border: `1.5px solid ${stage.color}30`, display: "flex",
                alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0,
              }}>{stage.icon}</div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 11, color: B.muted, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>{stage.days}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: B.navy }}>{stage.stage} Stage</div>
              </div>
            </div>

            <div style={{ padding: "12px 16px", borderRadius: 10, background: `${stage.color}0f`, border: `1px solid ${stage.color}25`, marginBottom: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: stage.color, marginBottom: 4 }}>Primary Focus</div>
              <div style={{ fontSize: 14, color: B.slate, fontWeight: 600 }}>{stage.focus}</div>
            </div>

            <p style={{ fontSize: 14, color: B.slate, lineHeight: 1.8, marginBottom: 24 }}>{stage.desc}</p>

            <Link href="/products" style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px",
              borderRadius: 10, background: `linear-gradient(135deg, ${B.blue}, ${B.teal})`,
              color: "#fff", fontSize: 13, fontWeight: 700, textDecoration: "none",
            }}>
              View Related Products →
            </Link>
          </div>

          {/* Right — recommended products */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: B.muted, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 4 }}>
              Recommended Innovare Products
            </div>
            {stage.products.map((p, i) => (
              <div key={p} style={{
                padding: "16px 20px", borderRadius: 14, background: "#fff",
                border: `1px solid ${B.border}`, display: "flex", alignItems: "center", gap: 14,
                opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(20px)",
                transition: `all .4s ${0.4 + i * 0.1}s`,
                minWidth: 0,
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 10, background: `${stage.color}12`,
                  border: `1px solid ${stage.color}25`, display: "flex",
                  alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0,
                }}>💊</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: B.navy }}>{p}</div>
                  <div style={{ fontSize: 11, color: B.muted, marginTop: 2 }}>Innovare Biopharma</div>
                </div>
                <div style={{
                  fontSize: 10, padding: "3px 10px", borderRadius: 100,
                  background: `${stage.color}12`, color: stage.color, fontWeight: 700, flexShrink: 0,
                }}>GMP ✓</div>
              </div>
            ))}

            {/* Nutrition tip card */}
            <div style={{
              padding: "18px 20px", borderRadius: 14, background: B.amberBg,
              border: `1px solid ${B.amber}40`, marginTop: 4,
            }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: B.amber, marginBottom: 6 }}>⚠ Technical Tip</div>
              <div style={{ fontSize: 13, color: "#78350f", lineHeight: 1.65 }}>
                Always consult an Innovare Biopharma field technician to confirm dosage rates
                for your specific pond density, salinity, and temperature conditions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   SECTION — NUTRIENT CATEGORIES (wheel replaced by grid)
══════════════════════════════════════════════════ */
const NUTRIENTS = [
  {
    icon: "🪨",
    title: "Pond Minerals",
    items: ["Calcium — shell & exoskeleton formation", "Phosphorus — energy metabolism & bone structure", "Magnesium — enzyme activation & osmoregulation", "Potassium — muscle contraction & ionic balance"],
    color: B.teal,
    product: "i.MINVARE PM / AM / WS / LIQ",
  },
  {
    icon: "🌿",
    title: "Feed Minerals & Vitamins",
    items: ["Ascorbic acid (Vit C) — immunity & wound healing", "Mineral premix — complete micronutrient profile", "Trace elements — enzyme co-factors", "Anti-oxidants — oxidative stress protection"],
    color: B.blue,
    product: "i.MINVARE FM · i.CEEVARE",
  },
  {
    icon: "🦠",
    title: "Probiotics",
    items: ["Bacillus strains — competitive pathogen exclusion", "Lactic acid bacteria — gut microflora balance", "Anti-Vibrio strains — EMS/AHPND prevention", "Soil & water probiotics — pond bottom health"],
    color: "#7c3aed",
    product: "i.VIBRIOVARE · i.PROVARE GUT",
  },
  {
    icon: "🌱",
    title: "Growth Promoters",
    items: ["Phytogenic plant extracts — appetite stimulation", "Yeast beta-glucans — immune modulation", "Hepatoprotective agents — liver & digestive gland support", "Gel-form boosters — high feed adhesion coating"],
    color: B.green,
    product: "i.LIVOVARE GEL",
  },
  {
    icon: "💧",
    title: "Water & Soil Treatments",
    items: ["Dissolved oxygen granules — emergency O₂ release", "Zeolite-based products — ammonia adsorption", "EDTA — heavy metal chelation", "Potassium chloride — ionic balance restoration"],
    color: B.amber,
    product: "i.OXYVARE · Potassium Chloride",
  },
  {
    icon: "🛡️",
    title: "Disease Management",
    items: ["Hepatopancreas protectors — EHP impact reduction", "Vibrio control programs — farm biosecurity", "Yucca powder — ammonia toxicity reduction", "Immune stack programmes — seasonal disease cycles"],
    color: "#dc2626",
    product: "i.HEPTOPANCVARE · i.IMMUNOVARE · i.PHYTOVARE",
  },
];

function NutrientSection() {
  const [ref, vis] = useReveal(0.06);
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="nut-section-pad-100" style={{ background: "#fff", padding: "100px 48px" }}>
      <div ref={ref} className="nut-inner-1100" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)", transition: "all .7s" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" }}>Our Product Categories</span>
          <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 12, marginBottom: 16 }}>
            Six Pillars of Aquaculture Nutrition
          </h2>
          <p style={{ fontSize: 15, color: B.slate, maxWidth: 540, margin: "0 auto", lineHeight: 1.75 }}>
            Every Innovare Biopharma product is developed with a specific nutritional or
            health function in mind — building a complete system for farm success.
          </p>
        </div>

        <div className="nut-nutrient-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {NUTRIENTS.map((n, i) => (
            <div
              key={n.title}
              onClick={() => setActive(active === i ? null : i)}
              style={{
                padding: "28px 24px", borderRadius: 18,
                background: active === i ? `${n.color}08` : B.surface,
                border: `1.5px solid ${active === i ? n.color : B.border}`,
                cursor: "pointer", transition: "all .25s",
                boxShadow: active === i ? `0 8px 24px ${n.color}18` : "0 2px 8px rgba(0,0,0,0.04)",
                opacity: vis ? 1 : 0,
                transform: vis ? "none" : "translateY(20px)",
                transitionDelay: `${i * 0.07}s`,
                minWidth: 0,
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12, background: `${n.color}14`,
                border: `1.5px solid ${n.color}30`, display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 22, marginBottom: 16,
              }}>{n.icon}</div>

              <div style={{ fontSize: 15, fontWeight: 800, color: B.navy, marginBottom: 8 }}>{n.title}</div>

              <div style={{
                maxHeight: active === i ? 300 : 0, overflow: "hidden",
                transition: "max-height .4s ease",
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 16, paddingTop: 4 }}>
                  {n.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: n.color, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontSize: 12.5, color: B.slate, lineHeight: 1.55 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                fontSize: 11, padding: "4px 12px", borderRadius: 100, display: "inline-flex",
                background: `${n.color}12`, color: n.color, fontWeight: 700, letterSpacing: 0.5, marginTop: 4,
              }}>
                {n.product}
              </div>

              <div style={{ fontSize: 12, color: n.color, fontWeight: 600, marginTop: 12 }}>
                {active === i ? "▲ Show less" : "▼ View nutrients"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   SECTION — STATS COUNTER BANNER
══════════════════════════════════════════════════ */
const STATS = [
  { icon: "🧪", n: 33, suffix: "+", label: "Aquaculture products", color: B.teal },
  { icon: "🦐", n: 1000, suffix: "+", label: "Active farm partners", color: B.blue },
  { icon: "📉", n: 35, suffix: "%", label: "Avg. FCR improvement", color: "#7c3aed" },
  { icon: "🌿", n: 100, suffix: "%", label: "GMP certified range", color: B.green },
];

function StatsSection() {
  const [ref, vis] = useReveal(0.15);
  return (
    <section className="nut-section-pad-80" style={{
      background: `linear-gradient(135deg, ${B.blueDeep} 0%, ${B.blue} 100%)`,
      padding: "80px 48px", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
      <div ref={ref} className="nut-inner-1100" style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="nut-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {STATS.map((s, i) => {
            const count = useCounter(s.n, vis);
            return (
              <div key={s.label} style={{
                textAlign: "center", padding: "36px 20px",
                background: "rgba(255,255,255,0.08)", borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.12)",
                opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)",
                transition: `all .6s ${i * 0.1}s`,
                minWidth: 0,
              }}>
                <span style={{ fontSize: 32, display: "block", marginBottom: 12 }}>{s.icon}</span>
                <div style={{ fontSize: "clamp(30px,4vw,48px)", fontWeight: 800, color: "#fff", lineHeight: 1 }}>
                  {count}{s.suffix}
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 10 }}>{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   SECTION — WHY INNOVARE BIOPHARMA
══════════════════════════════════════════════════ */
const PILLARS = [
  { icon: "🔬", title: "Science-Backed Formulations", body: "Each product is developed by aquaculture and veterinary science specialists, with field-validated efficacy data from partner farms across Andhra Pradesh and Telangana.", color: "#7c3aed" },
  { icon: "📞", title: "On-Farm Technical Support", body: "Our team of aquaculture technicians provides direct on-farm consultation — from pond preparation through grow-out — ensuring protocols are correctly implemented.", color: B.green },
  { icon: "🌿", title: "Natural & Safe Ingredients", body: "Innovare Biopharma prioritises natural, non-antibiotic solutions: probiotics, phytogenics, and mineral supplements that improve outcomes without chemical residue risks.", color: B.amber },
  { icon: "📦", title: "Full Product Ecosystem", body: "From pond minerals and feed premixes to gut probiotics and oxygen granules, we provide a complete, integrated nutrition and health system for every farm type.", color: "#dc2626" },
];

function WhyUsSection() {
  const [ref, vis] = useReveal(0.06);
  return (
    <section className="nut-section-pad-100" style={{ background: B.pageBg, padding: "100px 48px" }}>
      <div ref={ref} className="nut-inner-1100" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)", transition: "all .7s" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" }}>Why Choose Us</span>
          <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 12, marginBottom: 16 }}>
            The Innovare Biopharma Advantage
          </h2>
        </div>

        <div className="nut-whyus-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
        }}>
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              style={{
                padding: "36px 28px",
                borderRadius: 20,
                background: "#fff",
                border: `1px solid ${B.border}`,
                boxShadow: "0 10px 30px rgba(15,23,42,0.06)",

                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minWidth: 0,

                transition: "all .3s",
                cursor: "pointer",

                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(20px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >

              {/* ICON */}
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: `${p.color}12`,
                border: `1.5px solid ${p.color}28`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                marginBottom: 20,
              }}>
                {p.icon}
              </div>

              {/* CONTENT */}
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: B.navy,
                  marginBottom: 12,
                }}>
                  {p.title}
                </h3>

                <p style={{
                  fontSize: 14,
                  color: B.slate,
                  lineHeight: 1.8,
                }}>
                  {p.body}
                </p>
              </div>

              {/* BOTTOM LINE */}
              <div style={{
                height: 2,
                marginTop: 20,
                borderRadius: 1,
                background: `linear-gradient(90deg, ${p.color}60, transparent)`
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   SECTION — FAQ
══════════════════════════════════════════════════ */
const NUTRITION_FAQS = [
  {
    icon: "🐟",
    q: "What is the optimal protein-to-energy ratio for farmed salmon at different life stages?",
    a: "Protein-to-energy (P/E) ratios shift significantly across life stages. Fry and smolts require a higher P/E (~21–23 mg protein/kcal) to support rapid tissue growth, while larger harvest-size fish perform better at lower P/E ratios (~18–20 mg protein/kcal) as dietary energy is increasingly partitioned toward lipid deposition. Over-supplying protein beyond requirement elevates ammonia excretion and feed costs without improving growth.",
  },
  {
    icon: "🌿",
    q: "How much fishmeal can be replaced with plant-based proteins without impacting performance?",
    a: "Modern diets can reduce fishmeal to 5–15% inclusion while maintaining growth parity, provided anti-nutritional factors such as saponins, phytate, and trypsin inhibitors are adequately processed. Soy protein concentrate, canola meal, and insect meal are leading alternatives. Amino acid balancing — especially lysine, methionine, and threonine — is essential when transitioning away from fishmeal.",
  },
  {
    icon: "⚗️",
    q: "What role do nucleotides play in aquafeed, and when are they worth including?",
    a: "Nucleotides support intestinal cell proliferation and mucosal integrity, particularly under stress conditions such as first-feeding, disease challenge, or after antibiotic treatment. Their benefit is most pronounced in fast-growing larval and juvenile stages. Typical inclusion rates are 0.1–0.5%, and ROI is highest during health challenges rather than standard grow-out.",
  },
  {
    icon: "💊",
    q: "How should vitamin and mineral premixes be adjusted for high-oil diets?",
    a: "High dietary lipid levels elevate the requirement for fat-soluble antioxidants — primarily vitamin E and vitamin C — to protect PUFA-rich tissues from lipid peroxidation. Selenium should also be reviewed for its antioxidant synergy with vitamin E. Fat-soluble vitamin bioavailability (A, D, K) is enhanced in high-oil diets, so over-supplementation should be monitored.",
  },
  {
    icon: "📊",
    q: "How do feed conversion ratios (FCR) vary between species and how should targets be set?",
    a: "FCR benchmarks differ substantially: Atlantic salmon typically achieve 1.0–1.2; rainbow trout 0.9–1.15; shrimp (L. vannamei) 1.5–2.2 due to broadcast feeding losses. Targets should be set relative to species baseline, water temperature, fish size, and feeding technology. Automated feeding systems with feed-waste sensors can reduce FCR by 10–20% versus manual regimes.",
  },
  {
    icon: "🧪",
    q: "What are the signs of nutritional deficiency vs. infectious disease in farmed fish?",
    a: "Nutritional deficiencies tend to present gradually and symmetrically: lordosis/scoliosis (vitamin C or phosphorus), cataracts (riboflavin or zinc), fin erosion (pantothenic acid), pale musculature (selenium/vitamin E). Infectious disease more often presents asymmetrically with focal lesions and sudden mortality spikes. Histopathology and feed audit in parallel is the most reliable diagnostic approach.",
  },
];

function FAQSection() {
  const [openNutritionFaq, setOpenNutritionFaq] = useState<number | null>(null);
  const [ref, vis] = useReveal(0.1);

  return (
    <section className="nut-section-pad-100" style={{ background: "#fff", padding: "100px 48px" }}>
      <div ref={ref} className="nut-inner-860" style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)", transition: "all .7s" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: B.teal, letterSpacing: 2, textTransform: "uppercase" }}>
            Technical FAQs
          </span>
          <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 800, color: B.navy, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 12 }}>
            Common Nutrition<br />
            <span style={{ color: B.blue }}>Questions Answered</span>
          </h2>
          <p style={{ fontSize: 15, color: B.slate, maxWidth: 480, margin: "14px auto 0", lineHeight: 1.75 }}>
            Science-backed answers to the most common aquaculture nutrition questions from our partner farms.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ opacity: vis ? 1 : 0, transition: "opacity .7s .2s" }}>
          {NUTRITION_FAQS.map((faq, i) => {
            const isOpen = openNutritionFaq === i;
            return (
              <div
                key={i}
                onClick={() => setOpenNutritionFaq(isOpen ? null : i)}
                style={{
                  background: isOpen ? "#f0f9ff" : "#fff",
                  border: `1.5px solid ${isOpen ? B.blue : B.border}`,
                  borderRadius: 16,
                  marginBottom: 12,
                  cursor: "pointer",
                  transition: "border-color .25s, background .25s, box-shadow .25s",
                  boxShadow: isOpen ? "0 4px 32px rgba(14,165,233,0.10)" : "0 2px 8px rgba(14,165,233,0.04)",
                  overflow: "hidden",
                }}
              >
                {/* Question row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 26px", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: isOpen ? "rgba(42,93,168,0.12)" : B.tealLight,
                      border: `1px solid ${isOpen ? "rgba(42,93,168,0.28)" : B.blueLight}`,
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
                    fontSize: 20, color: B.blue, flexShrink: 0, fontWeight: 300, lineHeight: 1,
                    transition: "transform .3s",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    display: "inline-block",
                  }}>+</span>
                </div>

                {/* Answer */}
                <div style={{ maxHeight: isOpen ? 400 : 0, overflow: "hidden", transition: "max-height .38s cubic-bezier(.4,0,.2,1)" }}>
                  <div style={{ padding: "0 26px 22px", fontSize: 14, color: B.slate, lineHeight: 1.85, borderTop: `1px solid ${B.border}`, paddingTop: 16 }}>
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="nut-faq-card" style={{
          marginTop: 28,
          background: B.tealLight,
          border: `1px solid ${B.blueLight}`,
          borderRadius: 16, padding: "26px 32px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: 16,
          opacity: vis ? 1 : 0, transition: "opacity .7s .4s",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: `linear-gradient(135deg, ${B.teal}, ${B.blue})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20, flexShrink: 0, boxShadow: "0 4px 14px rgba(14,165,233,0.30)",
            }}>🥗</div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: B.navy }}>Still have a nutrition question?</div>
              <div style={{ fontSize: 12, color: B.slate, marginTop: 2 }}>Our aquaculture nutritionists are available to advise your farm directly.</div>
            </div>
          </div>
          <a href="mailto:info@innovarebiopharma.com" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "11px 26px", borderRadius: 40,
            background: `linear-gradient(135deg, ${B.blue}, ${B.teal})`,
            color: "#fff", fontSize: 13, fontWeight: 700,
            textDecoration: "none", whiteSpace: "nowrap",
          }}>
            Ask a Nutritionist →
          </a>
        </div>

      </div>
    </section>
  );
}

export default function NutritionPage() {
  return (
    <main className="nut-page" style={{ position: "relative", background: B.pageBg }}>
      <style>{RESPONSIVE_CSS}</style>
      <Hero />
      <WhatIsSection />
      <LifecycleSection />
      <NutrientSection />
      <StatsSection />
      <WhyUsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}