// "use client";
// import { useState, useEffect, useRef } from "react";
// import Footer from "./Footer";

// // ─── Intersection Observer Hook ───────────────────────────────────────────────
// function useInView(threshold = 0.1) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
//       { threshold }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return { ref, visible };
// }

// // ─── Global Styles ────────────────────────────────────────────────────────────
// const styles = `
//   @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

//   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//   html { scroll-behavior: smooth; }
//   body { font-family: 'Inter', sans-serif; overflow-x: hidden; background: #fff; color: #0d1b2a; }

//   :root {
//     --navy:    #080f1e;
//     --navy2:   #0d1b2a;
//     --navy3:   #112240;
//     --teal:    #00c9c8;
//     --teal2:   #0ea5a5;
//     --teal3:   #38d9d9;
//     --red:     #e63946;
//     --light:   #f4f7fa;
//     --light2:  #edf2f7;
//     --white:   #ffffff;
//     --gray:    #64748b;
//     --gray2:   #94a3b8;
//     --border:  rgba(255,255,255,0.08);
//     --border2: rgba(0,0,0,0.08);
//   }

//   /* ── Dot grid background ── */
//   .dot-bg {
//     background-image: radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px);
//     background-size: 32px 32px;
//   }
//   .dot-bg-dark {
//     background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px);
//     background-size: 28px 28px;
//   }
//   .hex-bg {
//     background-image: url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 17.3V34.7L30 52L0 34.7V17.3Z' fill='none' stroke='%23e2e8f0' stroke-width='1'/%3E%3C/svg%3E");
//     background-size: 60px 52px;
//   }

//   /* ── HERO ── */
//   .hero { position: relative; min-height: 100vh; background: var(--navy); overflow: hidden; display: flex; align-items: center; padding: 100px 0 60px; }
//   .hero-geo { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
//   .hero-hex { position: absolute; opacity: 0.15; }
//   .hero-hex svg { fill: none; stroke: var(--teal); }
//   .hero-dot-cluster { position: absolute; display: grid; grid-template-columns: repeat(5,1fr); gap: 12px; }
//   .hero-dot-cluster span { width: 4px; height: 4px; border-radius: 50%; background: rgba(0,201,200,0.4); display: block; }

//   /* ── ABOUT ── */
//   .about-img-card { position: relative; border-radius: 24px; overflow: hidden; }
//   .about-img-card img { width: 100%; height: 460px; object-fit: cover; display: block; }
//   .about-img-overlay { position: absolute; bottom: 20px; left: 20px; right: 20px; background: rgba(255,255,255,0.95); backdrop-filter: blur(12px); border-radius: 16px; padding: 16px 20px; display: flex; align-items: center; gap: 14px; box-shadow: 0 8px 32px rgba(0,0,0,0.12); }
//   .about-icon-box { width: 44px; height: 44px; border-radius: 12px; background: var(--navy2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
//   .about-feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 28px; }
//   .about-feature { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 22px 20px; }
//   .about-feature-icon { width: 44px; height: 44px; border-radius: 12px; background: #e6f7f7; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
//   .about-feature-title { font-weight: 700; font-size: 15px; color: var(--navy2); margin-bottom: 4px; }
//   .about-feature-desc { font-size: 13px; color: var(--gray); line-height: 1.6; }

//   /* ── SOLUTIONS ── */
//   .stage-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 36px 28px; flex: 1; position: relative; overflow: hidden; transition: border-color .25s, background .25s; }
//   .stage-card:hover { border-color: rgba(0,201,200,0.3); background: rgba(0,201,200,0.04); }
//   .stage-num { font-family: 'Syne', sans-serif; font-size: 72px; font-weight: 800; color: rgba(0,201,200,0.12); line-height: 1; margin-bottom: 16px; letter-spacing: -2px; }
//   .stage-title { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 12px; }
//   .stage-desc { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.7; margin-bottom: 20px; }
//   .stage-check { display: flex; align-items: flex-start; gap: 9px; margin-bottom: 8px; font-size: 12.5px; color: rgba(255,255,255,0.65); }
//   .stage-check-icon { width: 16px; height: 16px; border-radius: 50%; background: rgba(0,201,200,0.2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
//   .stage-hex-bg { position: absolute; bottom: -20px; right: -20px; opacity: 0.06; }

//   /* ── WHY CHOOSE ── */
//   .reason-card { background: #fff; border: 1.5px solid #e8edf3; border-radius: 20px; padding: 30px 26px; transition: border-color .2s, box-shadow .2s, transform .2s; cursor: default; }
//   .reason-card:hover { border-color: #00c9c8; box-shadow: 0 12px 40px rgba(0,201,200,0.1); transform: translateY(-3px); }
//   .reason-card.featured { border-color: #00c9c8; box-shadow: 0 12px 40px rgba(0,201,200,0.15); }
//   .reason-icon { width: 50px; height: 50px; border-radius: 14px; background: #0ea5a5; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
//   .reason-num { font-family: 'Syne', sans-serif; font-size: 48px; font-weight: 800; color: #f0f4f8; position: absolute; top: 20px; right: 22px; line-height: 1; }
//   .reason-title { font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 700; color: var(--navy2); margin-bottom: 10px; }
//   .reason-desc { font-size: 13.5px; color: var(--gray); line-height: 1.7; }

//   /* ── PRODUCTS ── */
//   .product-card-large { background: #fff; border: 1.5px solid #e8edf3; border-radius: 20px; overflow: hidden; transition: box-shadow .2s; }
//   .product-card-large:hover { box-shadow: 0 16px 48px rgba(0,0,0,0.1); }
//   .product-card-small { background: #fff; border: 1.5px solid #e8edf3; border-radius: 20px; padding: 28px 24px; transition: box-shadow .2s, border-color .2s; }
//   .product-card-small:hover { box-shadow: 0 12px 36px rgba(0,0,0,0.08); border-color: #00c9c8; }
//   .product-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
//   .product-explore { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: var(--teal2); margin-top: 14px; cursor: pointer; }
//   .flagship-badge { display: inline-block; background: var(--red); color: #fff; font-size: 10px; font-weight: 700; letter-spacing: 1px; padding: 4px 10px; border-radius: 6px; margin-bottom: 0; }

//   /* ── CONTACT ── */
//   .contact-info-card { background: #fff; border: 1px solid #e8edf3; border-radius: 16px; padding: 18px 20px; display: flex; align-items: flex-start; gap: 14px; }
//   .contact-info-icon { width: 42px; height: 42px; border-radius: 12px; background: var(--navy2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
//   .contact-form-wrap { background: #fff; border: 1px solid #e2e8f0; border-radius: 24px; padding: 36px; box-shadow: 0 4px 24px rgba(0,0,0,0.06); }
//   .contact-input { width: 100%; background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 13px 16px; font-size: 14px; font-family: 'Inter', sans-serif; color: var(--navy2); outline: none; transition: border-color .2s; }
//   .contact-input:focus { border-color: var(--teal); }
//   .contact-input::placeholder { color: #94a3b8; }
//   .contact-label { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gray); margin-bottom: 8px; display: block; }

//   /* ── SECTIONS ── */
//   .sec { padding: 96px 72px; }
//   .sec-dark { background: var(--navy); color: #fff; }
//   .sec-light { background: var(--light); }
//   .sec-white { background: #fff; }
//   .sec-pill { display: inline-flex; align-items: center; gap: 8px; border-radius: 999px; padding: 6px 14px; font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 20px; }
//   .sec-pill-teal { background: rgba(0,201,200,0.12); color: var(--teal); border: 1px solid rgba(0,201,200,0.2); }
//   .sec-pill-red { background: rgba(230,57,70,0.1); color: var(--red); border: 1px solid rgba(230,57,70,0.15); }
//   .sec-pill-dark { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.1); }
//   .max { max-width: 1200px; margin: 0 auto; }

//   /* ── ANIMATE ── */
//   .fade-up { opacity: 0; transform: translateY(28px); transition: opacity .7s, transform .7s; }
//   .fade-up.in { opacity: 1; transform: none; }

//   @media (max-width: 900px) {
//     .sec { padding: 60px 24px; }
//     .hero { padding: 120px 24px 80px; }
//   }
// `;

// // ─── SVG Icons ────────────────────────────────────────────────────────────────
// const TealDot = () => (
//   <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00c9c8", display: "inline-block", boxShadow: "0 0 6px #00c9c8", flexShrink: 0 }} />
// );

// const ArrowRight = ({ size = 16, color = "currentColor" }: { size?: number; color?: string }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M5 12h14M12 5l7 7-7 7" />
//   </svg>
// );

// const PlayIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21" /></svg>
// );

// const CheckIcon = () => (
//   <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#00c9c8" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
// );

// const MapPinIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
// );
// const PhoneIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.47 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6z"/></svg>
// );
// const MailIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
// );

// // Teal icon SVGs for product/feature cards
// const icons = {
//   flask:   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M9 3h6M9 3v8L5.5 17A2 2 0 0 0 7.3 20h9.4a2 2 0 0 0 1.8-3L15 11V3"/></svg>,
//   globe:   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
//   cert:    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
//   leaf:    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
//   chart:   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
//   heart:   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
//   headset: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
//   droplet: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,
//   pill:    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M10.5 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7.5"/><path d="M16.5 19.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/><path d="M14.26 17.74 18.74 13.26"/></svg>,
//   shield:  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
//   fish:    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M6.5 12c.94-3.46 4.94-6 10-6 1.62 0 3.06.33 4.67.92L18 12l3.17 5.08C19.56 17.67 18.12 18 16.5 18c-5.06 0-9.06-2.54-10-6z"/><path d="M2 12c0-2 2-4 4-4"/><circle cx="14" cy="12" r="1"/></svg>,
//   micro:   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14H4s.55-3.03 2-4"/><path d="M14 9c1.38 0 2.5-1.12 2.5-2.5S15.38 4 14 4H9"/></svg>,
//   send:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
// };

// // ─── HERO SECTION ─────────────────────────────────────────────────────────────
// function HeroSection() {
//   const [bar, setBar] = useState(0);
//   useEffect(() => {
//     const t = setTimeout(() => {
//       const id = setInterval(() => setBar(b => { if (b >= 87) { clearInterval(id); return 87; } return b + 1; }), 18);
//     }, 1000);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <section className="hero dot-bg">
//       {/* Geometric decorations */}
//       <div className="hero-geo">
//         {/* Top-right hexagons */}
//         <div style={{ position: "absolute", top: -40, right: -40, opacity: 0.2 }}>
//           <svg width="200" height="200" viewBox="0 0 200 200"><path d="M100 10L185 55V145L100 190L15 145V55Z" fill="none" stroke="#00c9c8" strokeWidth="1.5"/><path d="M100 40L155 70V130L100 160L45 130V70Z" fill="none" stroke="#00c9c8" strokeWidth="1"/></svg>
//         </div>
//         {/* Left hexagon outline */}
//         <div style={{ position: "absolute", bottom: 80, left: 20, opacity: 0.15 }}>
//           <svg width="90" height="90" viewBox="0 0 90 90"><path d="M45 5L80 24V62L45 85L10 62V24Z" fill="none" stroke="#00c9c8" strokeWidth="1.5"/></svg>
//         </div>
//         {/* Dot grid clusters */}
//         <div className="hero-dot-cluster" style={{ top: 120, right: 500 }}>
//           {Array.from({ length: 15 }).map((_, i) => <span key={i} />)}
//         </div>
//         <div className="hero-dot-cluster" style={{ bottom: 120, left: 60 }}>
//           {Array.from({ length: 10 }).map((_, i) => <span key={i} />)}
//         </div>
//         {/* Glow */}
//         <div style={{ position: "absolute", top: "30%", left: "35%", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,200,0.06) 0%,transparent 70%)", pointerEvents: "none" }} />
//       </div>

//       <div className="max" style={{ width: "100%", padding: "0 72px", display: "grid", gridTemplateColumns: "1fr 420px", gap: 64, alignItems: "center" }}>
//         {/* Left content */}
//         <div>
//           <div className="sec-pill sec-pill-dark" style={{ marginBottom: 28 }}>
//             <TealDot /> AQUACULTURE BIOPHARMA
//           </div>
//           <h1 style={{
//             fontFamily: "'Syne', sans-serif", fontWeight: 800,
//             fontSize: "clamp(44px,6vw,80px)", lineHeight: 1.08,
//             color: "#fff", marginBottom: 28, letterSpacing: "-1px",
//           }}>
//             Science that protects{" "}
//             <span style={{ color: "#00c9c8", fontStyle: "italic", textDecoration: "underline", textDecorationColor: "rgba(0,201,200,0.4)", textUnderlineOffset: 6 }}>every drop</span>{" "}
//             of your pond.
//           </h1>
//           <p style={{ fontSize: 16, color: "rgba(255,255,255,0.58)", lineHeight: 1.8, maxWidth: 520, marginBottom: 40 }}>
//             Innovare Biopharma LLP engineers next-generation probiotics, feed additives, and disease-management solutions — built for sustainable shrimp and fish farming across the world.
//           </p>
//           <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
//             <button style={{
//               background: "#00c9c8", color: "#fff", border: "none", borderRadius: 999,
//               padding: "14px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer",
//               display: "flex", alignItems: "center", gap: 10, fontFamily: "'Inter',sans-serif",
//               boxShadow: "0 0 32px rgba(0,201,200,0.35)", transition: "opacity .2s",
//             }}>
//               Explore Products <ArrowRight color="#fff" />
//             </button>
//             <button style={{
//               background: "rgba(255,255,255,0.08)", color: "#fff",
//               border: "1px solid rgba(255,255,255,0.15)", borderRadius: 999,
//               padding: "14px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer",
//               display: "flex", alignItems: "center", gap: 12, fontFamily: "'Inter',sans-serif",
//               backdropFilter: "blur(8px)",
//             }}>
//               <span style={{ width: 34, height: 34, borderRadius: "50%", background: "#e63946", display: "flex", alignItems: "center", justifyContent: "center" }}><PlayIcon /></span>
//               Our Story
//             </button>
//           </div>

//           {/* Stats row */}
//           <div style={{ display: "flex", gap: 0, marginTop: 60 }}>
//             {[
//               { n: "12+", l: "Years of R&D" },
//               { n: "40+", l: "Countries served" },
//               { n: "98%", l: "Survival uplift" },
//             ].map((s, i) => (
//               <div key={i} style={{ paddingRight: 32, marginRight: 32, borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
//                 <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 32, fontWeight: 800, color: "#fff", lineHeight: 1 }}>{s.n}</div>
//                 <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 6, letterSpacing: "0.02em" }}>{s.l}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right — Live Trial card */}
//         <div style={{ position: "relative" }}>
//           <div style={{
//             background: "rgba(13,27,42,0.9)", border: "1px solid rgba(255,255,255,0.1)",
//             borderRadius: 20, padding: "28px 28px 32px", backdropFilter: "blur(20px)",
//             boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
//           }}>
//             {/* Red close-like dot in corner */}
//             <div style={{ position: "absolute", top: 20, right: 20, width: 32, height: 32, borderRadius: "50%", background: "#e63946", display: "flex", alignItems: "center", justifyContent: "center" }}>
//               <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#fff" }} />
//             </div>

//             <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "#00c9c8", marginBottom: 8 }}>LIVE TRIAL</div>
//             <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 20 }}>Vibrio reduction</div>

//             <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
//               <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 72, fontWeight: 800, color: "#00c9c8", lineHeight: 1 }}>{bar}</span>
//               <span style={{ fontSize: 28, fontWeight: 700, color: "#00c9c8" }}>%</span>
//             </div>
//             <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.45)", marginBottom: 20 }}>
//               Avg. drop after 14 days of ProBio-X application
//             </div>

//             {/* Progress bar */}
//             <div style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 999, overflow: "hidden", marginBottom: 18 }}>
//               <div style={{
//                 height: "100%", borderRadius: 999,
//                 background: "linear-gradient(to right,#00c9c8,#e63946)",
//                 width: `${bar}%`, transition: "width .05s",
//               }} />
//             </div>

//             <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "rgba(255,255,255,0.5)" }}>
//               <TealDot /> Field-tested at 200+ farms
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Wave bottom */}
//       <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
//         <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ width: "100%", height: 70 }}>
//           <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#f4f7fa" />
//         </svg>
//       </div>
//     </section>
//   );
// }

// // ─── ABOUT SECTION ────────────────────────────────────────────────────────────
// function AboutSection() {
//   const { ref, visible } = useInView();
//   return (
//     <section id="about" className="sec sec-light">
//       <div className="max" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
//         {/* Left — image */}
//         <div ref={ref} className={`fade-up ${visible ? "in" : ""}`}>
//           <div className="about-img-card" style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.15)" }}>
//             {/* Blobs */}
//             <div style={{ position: "absolute", top: -30, left: -30, width: 160, height: 160, borderRadius: "50%", background: "rgba(200,230,230,0.55)", zIndex: 0 }} />
//             <div style={{ position: "absolute", bottom: -20, right: -20, width: 120, height: 120, borderRadius: "50%", background: "rgba(240,200,200,0.4)", zIndex: 0 }} />
//             <img src="/images/solutions.jpg" alt="Research Lab" style={{ position: "relative", zIndex: 1 }} />
//             <div className="about-img-overlay">
//               <div className="about-icon-box">
//                 {icons.micro}
//               </div>
//               <div>
//                 <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 2 }}>INNOVATION HUB</div>
//                 <div style={{ fontWeight: 700, fontSize: 15, color: "#0d1b2a" }}>Marine Biotech Facility</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right — content */}
//         <div>
//           <div className="sec-pill sec-pill-red">
//             <TealDot /> ABOUT INNOVARE
//           </div>
//           <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, lineHeight: 1.12, color: "#0d1b2a", marginBottom: 20 }}>
//             Where <span style={{ color: "#00c9c8" }}>marine science</span> meets farm-floor reality.
//           </h2>
//           <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.85, marginBottom: 16 }}>
//             Innovare Biopharma LLP is an Indian aquaculture biopharmaceutical company committed to building healthier, more productive, and antibiotic-free shrimp and fish farms. We combine peer-reviewed research with hands-on field application to deliver measurable results for hatcheries, nurseries, and grow-out farmers.
//           </p>
//           <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.85, marginBottom: 28 }}>
//             From probiotic blends and immunomodulators to disease diagnostics and water-quality solutions, every product we ship is field-validated, lab-tested and farmer-approved.
//           </p>

//           <div className="about-feature-grid">
//             {[
//               { icon: icons.micro,  title: "Research-led",   desc: "Patent-backed strains & marine microbiology lab" },
//               { icon: icons.globe,  title: "Global reach",   desc: "Distributors across India, SE Asia & LATAM" },
//               { icon: icons.cert,   title: "ISO 9001 + GMP", desc: "Certified manufacturing & quality control" },
//               { icon: icons.leaf,   title: "Sustainable",    desc: "Antibiotic-free, residue-free formulations" },
//             ].map((f, i) => (
//               <div key={i} className="about-feature">
//                 <div className="about-feature-icon" style={{ background: "rgba(0,201,200,0.1)" }}>
//                   <span style={{ color: "#00c9c8" }}>{f.icon}</span>
//                 </div>
//                 <div className="about-feature-title">{f.title}</div>
//                 <div className="about-feature-desc">{f.desc}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── SOLUTIONS BY STAGE ───────────────────────────────────────────────────────
// function SolutionsSection() {
//   const { ref, visible } = useInView();
//   const stages = [
//     {
//       num: "01", title: "Hatchery",
//       desc: "Larval probiotics, water conditioners & PL conditioning protocols for stronger seed.",
//       checks: ["Vibrio control from day-1", "Survival uplift up to 22%", "Stress-resistant PL"],
//     },
//     {
//       num: "02", title: "Nursery",
//       desc: "Gut-conditioning blends and immune primers built for the critical 30-day window.",
//       checks: ["Robust microbiome seeding", "Faster molting cycles", "Lower DOC mortality"],
//     },
//     {
//       num: "03", title: "Grow-out",
//       desc: "Pond bioremediation, feed efficiency boosters and disease-readiness protocols.",
//       checks: ["FCR reduction up to 0.2", "Stable alkalinity & pH", "EHP/WSSV preparedness"],
//     },
//     {
//       num: "04", title: "Harvest+",
//       desc: "Pre-harvest cleansing, residue-free withdrawal and post-cycle pond regeneration.",
//       checks: ["Export-grade harvests", "Sludge digestion", "Faster pond turnaround"],
//     },
//   ];

//   return (
//     <section id="solutions" className="sec sec-dark dot-bg-dark">
//       <div className="max">
//         <div className="sec-pill sec-pill-dark" style={{ marginBottom: 20 }}>
//           <TealDot /> SOLUTIONS BY STAGE
//         </div>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, marginBottom: 56 }}>
//           <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(30px,4vw,52px)", fontWeight: 800, lineHeight: 1.1, color: "#fff" }}>
//             End-to-end protocols, from{" "}
//             <span style={{ color: "#00c9c8" }}>post-larva</span> to{" "}
//             <span style={{ color: "#00c9c8" }}>post-harvest.</span>
//           </h2>
//           <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, alignSelf: "end", paddingLeft: 40 }}>
//             Whether you're running a 500m² hatchery or a 200-acre grow-out farm — our solutions plug into every stage of your cycle.
//           </p>
//         </div>

//         <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
//           {stages.map((s, i) => (
//             <div key={i} className="stage-card" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)", transition: `all .6s ${i * 0.1}s` }}>
//               {/* Hex bg decoration */}
//               <div className="stage-hex-bg">
//                 <svg width="120" height="120" viewBox="0 0 120 120"><path d="M60 5L110 32V88L60 115L10 88V32Z" fill="none" stroke="#00c9c8" strokeWidth="1"/></svg>
//               </div>
//               <div className="stage-num">{s.num}</div>
//               <div className="stage-title">{s.title}</div>
//               <div className="stage-desc">{s.desc}</div>
//               {s.checks.map((c, j) => (
//                 <div key={j} className="stage-check">
//                   <div className="stage-check-icon"><CheckIcon /></div>
//                   {c}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── WHY CHOOSE US ────────────────────────────────────────────────────────────
// function WhySection() {
//   const { ref, visible } = useInView();
//   const reasons = [
//     { icon: icons.flask,   num: "01", title: "Lab to Pond R&D",       desc: "Every formulation is validated in our microbiology lab and field-tested across geographies before launch." },
//     { icon: icons.cert,    num: "02", title: "Certified Quality",      desc: "ISO 9001, GMP, and HACCP-compliant production with strict batch traceability and third-party assays.", featured: false },
//     { icon: icons.leaf,    num: "03", title: "Antibiotic-free",        desc: "Residue-free, export-friendly formulations that align with EU, US FDA & Japan import standards." },
//     { icon: icons.chart,   num: "04", title: "Measurable Outcomes",    desc: "Trial data, FCR reports & survival numbers — we share results, not just claims." },
//     { icon: icons.heart,   num: "05", title: "Farmer-first",           desc: "Dedicated agronomists on call. We don't just sell — we co-manage your cycle with you.", featured: true },
//     { icon: icons.headset, num: "06", title: "24/7 Support",           desc: "WhatsApp, phone or on-farm visits. Disease alerts handled within hours, not days." },
//   ];

//   return (
//     <section id="why" className="sec sec-white">
//       <div className="max">
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 56 }}>
//           <div>
//             <div className="sec-pill sec-pill-red" style={{ marginBottom: 20 }}>
//               <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#e63946", display: "inline-block" }} /> WHY CHOOSE US
//             </div>
//             <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, lineHeight: 1.12, color: "#0d1b2a" }}>
//               Six reasons farmers from{" "}
//               <span style={{ color: "#00c9c8" }}>Andhra to Ecuador</span>{" "}
//               partner with us.
//             </h2>
//           </div>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.85 }}>
//               We are not a feed-store brand. Innovare is a research partner — accountable, certified, and present where it matters: on your pond bund.
//             </p>
//           </div>
//         </div>

//         <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
//           {reasons.map((r, i) => (
//             <div key={i} className={`reason-card ${r.featured ? "featured" : ""}`} style={{
//               position: "relative",
//               opacity: visible ? 1 : 0,
//               transform: visible ? "none" : "translateY(20px)",
//               transition: `all .55s ${i * 0.08}s`,
//             }}>
//               <div className="reason-num">{r.num}</div>
//               <div className="reason-icon" style={{ background: r.featured ? "#0d1b2a" : "#0ea5a5" }}>
//                 {r.icon}
//               </div>
//               <div className="reason-title">{r.title}</div>
//               <div className="reason-desc">{r.desc}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── PRODUCTS SECTION ─────────────────────────────────────────────────────────
// function ProductsSection() {
//   const products = [
//     {
//       large: true, flagship: true,
//       img: "/images/sustainability.jpg",
//       iconBg: "#0d1b2a", icon: icons.shield,
//       title: "Shrimp Health",
//       desc: "Specialty additives for vannamei & monodon — boost growth, gut integrity and survival.",
//     },
//     {
//       large: false, iconBg: "#0ea5a5", icon: icons.micro,
//       title: "Probiotics",
//       desc: "Multi-strain Bacillus & Lactobacillus blends for water & gut microbiome.",
//     },
//     {
//       large: true,
//       img: "/images/solutions.jpg",
//       iconBg: "#0d1b2a", icon: icons.fish,
//       title: "Fish Feed Additives",
//       desc: "Amino acids, enzymes & immunomodulators for tilapia, carp, seabass.",
//     },
//     {
//       large: false, iconBg: "#e63946", icon: icons.micro,
//       title: "Disease Management",
//       desc: "Targeted protocols for EHP, WSSV, EMS & vibriosis outbreaks.",
//     },
//     {
//       large: false, iconBg: "#0d1b2a", icon: icons.droplet,
//       title: "Water Treatment",
//       desc: "Bioremediation & alkalinity builders for pond stability.",
//     },
//     {
//       large: false, iconBg: "#0d1b2a", icon: icons.pill,
//       title: "Nutraceuticals",
//       desc: "Liver tonics, vitamin premixes & natural herbal extracts.",
//     },
//   ];

//   return (
//     <section id="products" className="sec hex-bg" style={{ background: "#f8fafc" }}>
//       <div className="max">
//         <div className="sec-pill sec-pill-teal" style={{ marginBottom: 20 }}>
//           <TealDot /> PRODUCTS &amp; SERVICES
//         </div>
//         <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(28px,3.8vw,50px)", fontWeight: 800, lineHeight: 1.1, color: "#0d1b2a", marginBottom: 12 }}>
//           A complete biopharma toolkit for{" "}
//           <span style={{ color: "#00c9c8" }}>modern aquaculture.</span>
//         </h2>
//         <p style={{ fontSize: 15, color: "#64748b", marginBottom: 40 }}>
//           Six product families. One mission — healthier stock, cleaner ponds, predictable harvests.
//         </p>

//         {/* Row 1: large + small */}
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
//           {/* Large — Shrimp Health */}
//           <div className="product-card-large">
//             <div style={{ position: "relative" }}>
//               <img src={products[0].img} alt={products[0].title} style={{ width: "100%", height: 300, objectFit: "cover", display: "block" }} />
//               <div style={{ position: "absolute", top: 16, left: 16 }}>
//                 <span className="flagship-badge">FLAGSHIP</span>
//               </div>
//             </div>
//             <div style={{ padding: "22px 24px 26px" }}>
//               <div className="product-icon" style={{ background: products[0].iconBg }}>{products[0].icon}</div>
//               <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 700, color: "#0d1b2a", marginBottom: 8 }}>{products[0].title}</div>
//               <div style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.7, marginBottom: 4 }}>{products[0].desc}</div>
//               <div className="product-explore">Explore range <ArrowRight size={14} color="#0ea5a5" /></div>
//             </div>
//           </div>

//           {/* Small — Probiotics */}
//           <div className="product-card-small" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
//             <div className="product-icon" style={{ background: products[1].iconBg }}>{products[1].icon}</div>
//             <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 700, color: "#0d1b2a", marginBottom: 8 }}>{products[1].title}</div>
//             <div style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.7 }}>{products[1].desc}</div>
//             <div className="product-explore">Explore range <ArrowRight size={14} color="#0ea5a5" /></div>
//           </div>
//         </div>

//         {/* Row 2: large + small */}
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
//           {/* Large — Fish Feed */}
//           <div className="product-card-large">
//             <div style={{ position: "relative" }}>
//               <img src={products[2].img} alt={products[2].title} style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }} />
//             </div>
//             <div style={{ padding: "22px 24px 26px" }}>
//               <div className="product-icon" style={{ background: products[2].iconBg }}>{products[2].icon}</div>
//               <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 700, color: "#0d1b2a", marginBottom: 8 }}>{products[2].title}</div>
//               <div style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.7 }}>{products[2].desc}</div>
//               <div className="product-explore">Explore range <ArrowRight size={14} color="#0ea5a5" /></div>
//             </div>
//           </div>

//           {/* Small — Disease Management */}
//           <div className="product-card-small" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
//             <div className="product-icon" style={{ background: products[3].iconBg }}>{products[3].icon}</div>
//             <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 700, color: "#0d1b2a", marginBottom: 8 }}>{products[3].title}</div>
//             <div style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.7 }}>{products[3].desc}</div>
//             <div className="product-explore">Explore range <ArrowRight size={14} color="#0ea5a5" /></div>
//           </div>
//         </div>

//         {/* Row 3: two smalls */}
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
//           {[products[4], products[5]].map((p, i) => (
//             <div key={i} className="product-card-small">
//               <div className="product-icon" style={{ background: p.iconBg }}>{p.icon}</div>
//               <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 700, color: "#0d1b2a", marginBottom: 8 }}>{p.title}</div>
//               <div style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.7 }}>{p.desc}</div>
//               <div className="product-explore">Explore range <ArrowRight size={14} color="#0ea5a5" /></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── CONTACT SECTION ──────────────────────────────────────────────────────────
// function ContactSection() {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
//   return (
//     <section id="contact" className="sec" style={{ background: "#f4f7fa" }}>
//       <div className="max" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
//         {/* Left */}
//         <div>
//           <div className="sec-pill sec-pill-red" style={{ marginBottom: 20 }}>
//             <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#e63946", display: "inline-block" }} /> CONTACT US
//           </div>
//           <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(28px,3vw,44px)", fontWeight: 800, lineHeight: 1.12, color: "#0d1b2a", marginBottom: 16 }}>
//             Talk to a marine{" "}
//             <span style={{ color: "#00c9c8" }}>biotech expert.</span>
//           </h2>
//           <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.85, maxWidth: 400, marginBottom: 36 }}>
//             Whether you need product literature, a sample, or a free pond audit — drop us a line and we'll respond within one business day.
//           </p>

//           <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
//             {[
//               { icon: <MapPinIcon />, label: "HEAD OFFICE",    text: "Innovare Biopharma LLP, Hyderabad, Telangana 500032, India" },
//               { icon: <PhoneIcon />, label: "SALES & SUPPORT", text: "+91 98765 43210" },
//               { icon: <MailIcon />,  label: "EMAIL",           text: "hello@innovarebiopharma.com" },
//             ].map((c, i) => (
//               <div key={i} className="contact-info-card">
//                 <div className="contact-info-icon">{c.icon}</div>
//                 <div>
//                   <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 4 }}>{c.label}</div>
//                   <div style={{ fontSize: 14, color: "#0d1b2a", fontWeight: 500 }}>{c.text}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right — Form */}
//         <div className="contact-form-wrap">
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
//             <div>
//               <label className="contact-label">Your Name</label>
//               <input className="contact-input" placeholder="John Doe" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
//             </div>
//             <div>
//               <label className="contact-label">Email</label>
//               <input className="contact-input" placeholder="you@farm.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
//             </div>
//           </div>
//           <div style={{ marginBottom: 14 }}>
//             <label className="contact-label">Phone (Optional)</label>
//             <input className="contact-input" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
//           </div>
//           <div style={{ marginBottom: 20 }}>
//             <label className="contact-label">How Can We Help?</label>
//             <textarea
//               className="contact-input"
//               placeholder="Tell us about your farm, species & current challenges..."
//               rows={5}
//               value={form.message}
//               onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
//               style={{ resize: "vertical" }}
//             />
//           </div>
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
//             <p style={{ fontSize: 12, color: "#94a3b8", maxWidth: 280, lineHeight: 1.6 }}>
//               By submitting, you agree to our privacy terms. We'll never spam.
//             </p>
//             <button style={{
//               background: "#0d1b2a", color: "#fff", border: "none",
//               borderRadius: 999, padding: "14px 26px", fontSize: 14,
//               fontWeight: 600, cursor: "pointer", display: "flex",
//               alignItems: "center", gap: 10, fontFamily: "'Inter',sans-serif",
//             }}>
//               Send message {icons.send}
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── MAIN EXPORT ──────────────────────────────────────────────────────────────
// export default function InnovareLanding() {
//   return (
//     <>
//       <style>{styles}</style>
//       <HeroSection />
//       <AboutSection />
//       <SolutionsSection />
//       <WhySection />
//       <ProductsSection />
//       <ContactSection />
//       <Footer />
//     </>
//   );
// }