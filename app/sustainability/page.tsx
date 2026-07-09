// // // "use client";

// // // import { useState, useEffect, useRef } from "react";
// // // import { motion, useInView, AnimatePresence } from "framer-motion";
// // // import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

// // // /* ══════════════════════════════════════════════════
// // //    BRAND THEME — exact tokens from ProductDetails
// // // ══════════════════════════════════════════════════ */
// // // const T = {
// // //   pageBg:        "#f0f4f8",
// // //   cardBg:        "#ffffff",
// // //   surfaceBg:     "#f8fafc",
// // //   imagePanelBg:  "#eef4fb",
// // //   borderLight:   "#e2e8f0",
// // //   borderMed:     "#cbd5e1",
// // //   blue:          "#1565c0",
// // //   blueDark:      "#0d47a1",
// // //   blueLight:     "#dbeafe",
// // //   blueMid:       "#eff6ff",
// // //   teal:          "#0891b2",
// // //   tealLight:     "#e0f2fe",
// // //   textPrimary:   "#0f172a",
// // //   textSecondary: "#475569",
// // //   textMuted:     "#94a3b8",
// // //   green:         "#15803d",
// // //   greenBg:       "#f0fdf4",
// // //   greenBorder:   "#bbf7d0",
// // //   amber:         "#92400e",
// // //   amberBg:       "#fffbeb",
// // //   amberBorder:   "#fcd34d",
// // //   red:           "#dc2626",
// // //   footerBg:      "#0f172a",
// // //   footerTeal:    "#38bdf8",
// // // };

// // // /* ══════════════════════════════════════════════════
// // //    ANIMATED COUNTER
// // // ══════════════════════════════════════════════════ */
// // // function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
// // //   const [val, setVal] = useState(0);
// // //   const ref = useRef<HTMLSpanElement>(null);
// // //   const inView = useInView(ref, { once: true });
// // //   useEffect(() => {
// // //     if (!inView) return;
// // //     let s = 0;
// // //     const inc = to / (1600 / 16);
// // //     const id = setInterval(() => {
// // //       s += inc;
// // //       if (s >= to) { setVal(to); clearInterval(id); }
// // //       else setVal(Math.floor(s));
// // //     }, 16);
// // //     return () => clearInterval(id);
// // //   }, [inView, to]);
// // //   return <span ref={ref}>{val}{suffix}</span>;
// // // }

// // // /* ══════════════════════════════════════════════════
// // //    SCROLL REVEAL
// // // ══════════════════════════════════════════════════ */
// // // function Reveal({ children, delay = 0, x = 0, y = 24 }: {
// // //   children: React.ReactNode; delay?: number; x?: number; y?: number;
// // // }) {
// // //   const ref = useRef<HTMLDivElement>(null);
// // //   const inView = useInView(ref, { once: true, margin: "-60px" });
// // //   return (
// // //     <motion.div ref={ref}
// // //       initial={{ opacity: 0, x, y }}
// // //       animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
// // //       transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
// // //     >{children}</motion.div>
// // //   );
// // // }

// // // /* ══════════════════════════════════════════════════
// // //    SECTION TAG — dossier label style
// // // ══════════════════════════════════════════════════ */
// // // function SectionTag({ code, label }: { code: string; label: string }) {
// // //   return (
// // //     <div style={{ display: "inline-flex", alignItems: "stretch", marginBottom: 20, borderRadius: 7, overflow: "hidden", boxShadow: `0 2px 8px rgba(21,101,192,0.12)` }}>
// // //       <div style={{ padding: "4px 12px", background: T.blue, color: "#fff", fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" as const, fontFamily: "monospace", display: "flex", alignItems: "center" }}>{code}</div>
// // //       <div style={{ padding: "4px 14px", background: T.blueLight, color: T.blue, fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" as const, fontFamily: "monospace", display: "flex", alignItems: "center" }}>{label}</div>
// // //     </div>
// // //   );
// // // }

// // // /* ══════════════════════════════════════════════════
// // //    TAB BUTTON
// // // ══════════════════════════════════════════════════ */
// // // function TabBtn({ active, label, onClick, accent }: { active: boolean; label: string; onClick: () => void; accent: string }) {
// // //   return (
// // //     <button onClick={onClick} style={{
// // //       padding: "8px 20px", fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer",
// // //       borderRadius: 8, transition: "all .22s",
// // //       background: active ? `linear-gradient(135deg,${accent},${accent}cc)` : T.surfaceBg,
// // //       color: active ? "#fff" : T.textSecondary,
// // //       boxShadow: active ? `0 4px 14px ${accent}40` : "none",
// // //     }}>{label}</button>
// // //   );
// // // }

// // // /* ══════════════════════════════════════════════════
// // //    POND CROSS-SECTION SVG DIAGRAM
// // // ══════════════════════════════════════════════════ */
// // // function PondDiagram() {
// // //   return (
// // //     <div style={{ position: "relative", width: "100%", maxWidth: 780, margin: "0 auto" }}>
// // //       <div style={{
// // //         border: `2px solid ${T.borderMed}`, borderRadius: 16, overflow: "hidden",
// // //         boxShadow: "0 20px 60px rgba(21,101,192,0.12), 0 4px 16px rgba(15,23,42,0.08)",
// // //         background: "#fff",
// // //       }}>
// // //         {/* Report header bar */}
// // //         <div style={{ padding: "9px 20px", background: T.surfaceBg, borderBottom: `1px solid ${T.borderLight}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // //           <span style={{ fontSize: 9, fontWeight: 700, color: T.textMuted, letterSpacing: 2, textTransform: "uppercase" as const, fontFamily: "monospace" }}>FIG. 1 — POND CROSS-SECTION · INNOVARE BIOPHARMA LLP</span>
// // //           <span style={{ fontSize: 9, color: T.textMuted, fontFamily: "monospace" }}>REF: IBP-SUS-2026</span>
// // //         </div>

// // //         <svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
// // //           <defs>
// // //             <linearGradient id="skyG"      x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f0f9ff" /><stop offset="100%" stopColor="#e0f2fe" /></linearGradient>
// // //             <linearGradient id="waterG"    x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={T.tealLight} stopOpacity="0.9" /><stop offset="100%" stopColor={T.blueMid} /></linearGradient>
// // //             <linearGradient id="aerobicG"  x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ffe8cc" /><stop offset="100%" stopColor="#d4a060" /></linearGradient>
// // //             <linearGradient id="anaerobicG"x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c09070" /><stop offset="100%" stopColor="#8b5e3c" /></linearGradient>
// // //             <linearGradient id="bedG"      x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7a4a2a" /><stop offset="100%" stopColor="#4a2c12" /></linearGradient>
// // //             <pattern id="bubP" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
// // //               <circle cx="10" cy="30" r="2" fill={T.teal} opacity="0.22" />
// // //               <circle cx="28" cy="14" r="1.5" fill={T.teal} opacity="0.16" />
// // //               <circle cx="5"  cy="8"  r="1"   fill={T.teal} opacity="0.13" />
// // //             </pattern>
// // //             <marker id="arrowM" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
// // //               <path d="M0,0 L6,3 L0,6 Z" fill={T.teal} opacity="0.5" />
// // //             </marker>
// // //           </defs>

// // //           {/* Sky */}
// // //           <rect x="0" y="0" width="760" height="38" fill="url(#skyG)" />
// // //           {/* Sun */}
// // //           <circle cx="706" cy="18" r="11" fill="#fbbf24" opacity="0.85" />
// // //           {[0,45,90,135,180,225,270,315].map((a,i) => (
// // //             <line key={i} x1={706+Math.cos(a*Math.PI/180)*14} y1={18+Math.sin(a*Math.PI/180)*14} x2={706+Math.cos(a*Math.PI/180)*17} y2={18+Math.sin(a*Math.PI/180)*17} stroke="#fbbf24" strokeWidth="1.5" opacity="0.55" />
// // //           ))}

// // //           {/* Berms */}
// // //           <polygon points="0,38 82,38 122,62 122,340 0,340" fill="#a09070" opacity="0.45" />
// // //           <polygon points="760,38 678,38 638,62 638,340 760,340" fill="#a09070" opacity="0.45" />

// // //           {/* Water */}
// // //           <rect x="122" y="38" width="516" height="168" fill="url(#waterG)" opacity="0.88" />
// // //           <rect x="122" y="38" width="516" height="168" fill="url(#bubP)" />
// // //           {/* Ripples */}
// // //           <path d="M132,44 Q200,38 270,44 Q340,50 412,44 Q482,38 550,44 Q604,48 628,44" stroke={T.teal} strokeWidth="1.2" fill="none" opacity="0.4" />
// // //           <path d="M132,51 Q190,46 252,51 Q320,57 390,50 Q460,44 530,51 Q590,55 628,51" stroke={T.teal} strokeWidth="0.7" fill="none" opacity="0.25" />

// // //           {/* Shrimp */}
// // //           {[[225,108],[390,130],[515,100],[305,152],[460,80]].map(([cx,cy],i) => (
// // //             <g key={i} opacity="0.5">
// // //               <ellipse cx={cx} cy={cy} rx="10" ry="5" fill={T.teal} opacity="0.65" transform={`rotate(-20,${cx},${cy})`} />
// // //               <circle cx={cx+8} cy={cy-2} r="1.8" fill={T.teal} opacity="0.55" />
// // //               <line x1={cx+9} y1={cy-3} x2={cx+15} y2={cy-6} stroke={T.teal} strokeWidth="0.7" opacity="0.5" />
// // //               <line x1={cx+9} y1={cy-1} x2={cx+15} y2={cy-1} stroke={T.teal} strokeWidth="0.7" opacity="0.5" />
// // //             </g>
// // //           ))}

// // //           {/* Aerator */}
// // //           <rect x="356" y="40" width="48" height="5" rx="2.5" fill={T.blue} opacity="0.65" />
// // //           <rect x="377" y="34" width="6" height="28" rx="2" fill={T.blue} opacity="0.5" />
// // //           <circle cx="380" cy="34" r="4" fill={T.blue} opacity="0.8" />
// // //           {[-14,-7,0,7,14].map((dx,i) => (
// // //             <line key={i} x1={380+dx} y1={45} x2={380+dx*1.5} y2={66} stroke="#bae6fd" strokeWidth="1" opacity="0.45" strokeDasharray="2,2" />
// // //           ))}

// // //           {/* Floc layer */}
// // //           <rect x="122" y="206" width="516" height="10" fill="#c8e6a0" opacity="0.75" />
// // //           <path d="M122,206 Q200,203 280,206 Q360,209 440,206 Q520,203 638,206" stroke="#6aaa50" strokeWidth="0.9" fill="none" opacity="0.55" />

// // //           {/* Aerobic sediment */}
// // //           <rect x="122" y="216" width="516" height="36" fill="url(#aerobicG)" opacity="0.85" />

// // //           {/* Anaerobic sediment */}
// // //           <rect x="122" y="252" width="516" height="32" fill="url(#anaerobicG)" opacity="0.88" />

// // //           {/* Pond bed */}
// // //           <rect x="122" y="284" width="516" height="56" fill="url(#bedG)" />

// // //           {/* Left ruler */}
// // //           <line x1="108" y1="38" x2="108" y2="300" stroke={T.borderMed} strokeWidth="0.8" />
// // //           {[{y:38,l:"0 m"},{y:100,l:"0.6m"},{y:160,l:"1.2m"},{y:206,l:"1.7m"},{y:252,l:"▸ ana"},{y:284,l:"▸ bed"}].map((t,i) => (
// // //             <g key={i}>
// // //               <line x1="108" y1={t.y} x2="122" y2={t.y} stroke={T.textMuted} strokeWidth="0.8" />
// // //               <text x="105" y={t.y+4} textAnchor="end" fontSize="7" fill={T.textMuted} fontFamily="monospace">{t.l}</text>
// // //             </g>
// // //           ))}

// // //           {/* Right callout lines */}
// // //           {[
// // //             {y:118, label:"Water Column",         sub:"DO · pH · Temp · Salinity",   color:T.blue },
// // //             {y:211, label:"Floc / Biofilm",        sub:"Active microbial zone",        color:"#5a8f45"},
// // //             {y:234, label:"Aerobic Sediment",      sub:"+50 to +200 mV redox",        color:"#a07040"},
// // //             {y:268, label:"Anaerobic Sediment",    sub:"H₂S risk — managed daily",    color:"#7a4a28"},
// // //             {y:306, label:"Pond Bed",              sub:"Clay · post-harvest drying",  color:"#5c3317"},
// // //           ].map((l,i) => (
// // //             <g key={i}>
// // //               <line x1="638" y1={l.y} x2="656" y2={l.y} stroke={l.color} strokeWidth="0.9" strokeDasharray="3,2" opacity="0.65" />
// // //               <line x1="656" y1={l.y} x2="660" y2={l.y} stroke={l.color} strokeWidth="2" opacity="0.85" />
// // //               <text x="663" y={l.y-2}  fontSize="8.5" fill={T.textPrimary} fontWeight="700" fontFamily="monospace">{l.label}</text>
// // //               <text x="663" y={l.y+8}  fontSize="7"   fill={T.textSecondary} fontFamily="monospace">{l.sub}</text>
// // //             </g>
// // //           ))}

// // //           {/* O2 arrow */}
// // //           <path d="M380,66 L380,200" stroke={T.teal} strokeWidth="1" strokeDasharray="4,3" opacity="0.3" markerEnd="url(#arrowM)" />
// // //           <text x="385" y="140" fontSize="8" fill={T.teal} fontFamily="monospace" opacity="0.65">O₂ ↓</text>

// // //           {/* Probe icons */}
// // //           <rect x="242" y="50" width="5" height="26" rx="2.5" fill={T.blue} opacity="0.55" />
// // //           <rect x="239" y="48" width="11" height="5" rx="2" fill={T.blue} opacity="0.8" />
// // //           <text x="253" y="60" fontSize="7" fill={T.blue} fontFamily="monospace" opacity="0.75">pH probe</text>
// // //           <rect x="488" y="66" width="5" height="20" rx="2.5" fill={T.teal} opacity="0.55" />
// // //           <rect x="485" y="64" width="11" height="5" rx="2" fill={T.teal} opacity="0.8" />
// // //           <text x="499" y="73" fontSize="7" fill={T.teal} fontFamily="monospace" opacity="0.75">DO sensor</text>

// // //           {/* Caption */}
// // //           <rect x="0" y="326" width="760" height="14" fill={T.surfaceBg} />
// // //           <text x="380" y="336" textAnchor="middle" fontSize="7" fill={T.textMuted} fontFamily="monospace">Schematic cross-section of intensive shrimp pond · Not to scale · © Innovare Biopharma LLP 2026</text>
// // //         </svg>
// // //       </div>
// // //       {/* Corner pins */}
// // //       {[0,1,2,3].map(i => (
// // //         <div key={i} style={{ position: "absolute", top: i < 2 ? -5 : "auto", bottom: i >= 2 ? -5 : "auto", left: i%2===0 ? -5 : "auto", right: i%2!==0 ? -5 : "auto", width: 10, height: 10, borderRadius: "50%", background: T.blue, boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${T.blueLight}` }} />
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // /* ══════════════════════════════════════════════════
// // //    TOPBAR
// // // ══════════════════════════════════════════════════ */
// // // function Topbar() {
// // //   const [scrolled, setScrolled] = useState(false);
// // //   useEffect(() => {
// // //     const h = () => setScrolled(window.scrollY > 30);
// // //     window.addEventListener("scroll", h);
// // //     return () => window.removeEventListener("scroll", h);
// // //   }, []);
// // //   return (
// // //     <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, height: 64, background: scrolled ? "rgba(255,255,255,0.94)" : "rgba(255,255,255,0.85)", backdropFilter: "blur(18px)", borderBottom: `1px solid ${scrolled ? T.borderLight : "transparent"}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 48px", boxShadow: scrolled ? "0 1px 12px rgba(15,23,42,0.07)" : "none", transition: "all 0.35s" }}>
// // //       <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// // //         <div style={{ width: 34, height: 34, borderRadius: 8, background: T.blue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🦐</div>
// // //         <span style={{ fontSize: 15, fontWeight: 800, color: T.textPrimary, letterSpacing: -0.3 }}>Innovare Biopharma</span>
// // //         <span style={{ fontSize: 10, color: T.teal, letterSpacing: 2, textTransform: "uppercase" as const }}>LLP</span>
// // //       </div>
// // //       <nav style={{ display: "flex", gap: 28 }}>
// // //         {["Products", "Solutions", "Sustainability", "About", "Contact"].map(n => (
// // //           <a key={n} href="#" style={{ fontSize: 13, fontWeight: n === "Sustainability" ? 700 : 500, color: n === "Sustainability" ? T.blue : T.textSecondary, textDecoration: "none", transition: "color .2s", borderBottom: n === "Sustainability" ? `2px solid ${T.blue}` : "2px solid transparent", paddingBottom: 2 }}
// // //             onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = T.blue}
// // //             onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = n === "Sustainability" ? T.blue : T.textSecondary}
// // //           >{n}</a>
// // //         ))}
// // //       </nav>
// // //       <button style={{ padding: "8px 20px", borderRadius: 8, background: `linear-gradient(135deg,${T.blue},#0288d1)`, color: "#fff", fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer", boxShadow: "0 4px 14px rgba(21,101,192,0.3)", transition: "all .2s" }}
// // //         onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; }}
// // //         onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; }}
// // //       >Get in Touch</button>
// // //     </nav>
// // //   );
// // // }

// // // /* ══════════════════════════════════════════════════
// // //    FOOTER
// // // ══════════════════════════════════════════════════ */
// // // function Footer() {
// // //   const cols = [
// // //     { title: "Solutions",  links: ["Feed Supplements", "Sanitizers", "Water Treatments", "Growth Promoters", "Vitamins & Minerals"] },
// // //     { title: "Company",    links: ["About Us", "Our Story", "Sustainability", "Careers", "News"] },
// // //     { title: "Support",    links: ["Technical Helpdesk", "Product Catalogue", "FAQs", "Contact Us", "Partner Portal"] },
// // //   ];
// // //   return (
// // //     <footer style={{ background: T.footerBg, borderTop: "1px solid rgba(56,189,248,0.12)" }}>
// // //       <div style={{ background: "rgba(21,101,192,0.12)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "22px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
// // //         <div>
// // //           <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Subscribe to our Aqua Insights Newsletter</p>
// // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Science-backed tips, product launches & exclusive offers.</p>
// // //         </div>
// // //         <div style={{ display: "flex", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)" }}>
// // //           <input type="email" placeholder="your@email.com" style={{ padding: "11px 18px", background: "rgba(255,255,255,0.05)", border: "none", color: "#fff", fontSize: 13, outline: "none", width: 220 }} />
// // //           <button style={{ padding: "11px 22px", background: `linear-gradient(135deg,${T.blue},#0288d1)`, color: "#fff", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13 }}>Subscribe</button>
// // //         </div>
// // //       </div>
// // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 48px 36px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
// // //         <div>
// // //           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
// // //             <div style={{ width: 40, height: 40, borderRadius: 10, background: T.blue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🦐</div>
// // //             <div>
// // //               <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Innovare Biopharma</p>
// // //               <p style={{ fontSize: 11, color: T.footerTeal, letterSpacing: 2, textTransform: "uppercase" as const }}>LLP</p>
// // //             </div>
// // //           </div>
// // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.85, maxWidth: 260 }}>India's innovative manufacturer & exporter of aquaculture healthcare products.</p>
// // //           <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
// // //             {[<Linkedin size={15}/>, <Twitter size={15}/>, <Youtube size={15}/>, <Facebook size={15}/>].map((icon,i) => (
// // //               <a key={i} href="#" style={{ width: 32, height: 32, borderRadius: 7, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)", transition: "all .2s", textDecoration: "none" }}
// // //                 onMouseEnter={e => { const el = e.currentTarget; el.style.background = T.blue; el.style.color = "#fff"; }}
// // //                 onMouseLeave={e => { const el = e.currentTarget; el.style.background = "rgba(255,255,255,0.05)"; el.style.color = "rgba(255,255,255,0.5)"; }}
// // //               >{icon}</a>
// // //             ))}
// // //           </div>
// // //         </div>
// // //         {cols.map(col => (
// // //           <div key={col.title}>
// // //             <h4 style={{ fontSize: 10, fontWeight: 700, color: T.footerTeal, letterSpacing: 2.5, textTransform: "uppercase" as const, marginBottom: 18 }}>{col.title}</h4>
// // //             <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
// // //               {col.links.map(link => (
// // //                 <a key={link} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color .2s" }}
// // //                   onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = T.footerTeal}
// // //                   onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)"}
// // //                 >{link}</a>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //       <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "16px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
// // //         <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© 2026 Innovare Biopharma LLP. All rights reserved.</p>
// // //         <div style={{ display: "flex", gap: 8 }}>
// // //           {["GMP Certified", "ISO 9001", "Export Approved"].map(c => (
// // //             <span key={c} style={{ fontSize: 10, padding: "3px 10px", borderRadius: 4, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.25)", color: T.footerTeal, letterSpacing: 1 }}>{c}</span>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // }

// // // /* ══════════════════════════════════════════════════
// // //    MAIN PAGE
// // // ══════════════════════════════════════════════════ */
// // // export default function SustainabilityPage() {
// // //   const [soilTab, setSoilTab]   = useState<"parameters"|"layers"|"practices">("parameters");
// // //   const [waterTab, setWaterTab] = useState<"parameters"|"schedule"|"treatments">("parameters");

// // //   const soilParams = [
// // //     { label: "Soil pH",           ideal: "6.5 – 7.5",     icon: "⚖️", color: T.blue,   desc: "Prevents nutrient lock-up; eliminates acid-sulphate toxicity risk." },
// // //     { label: "Organic Matter",    ideal: "2 – 4 %",        icon: "🌱", color: T.green,  desc: "Sustains beneficial microbial biomass without triggering hypoxia." },
// // //     { label: "Redox Potential",   ideal: "+50 to +200 mV", icon: "⚡", color: T.teal,   desc: "Aerobic sediment suppresses H₂S generation and anaerobic fermentation." },
// // //     { label: "Phosphorus",        ideal: "20 – 40 ppm",    icon: "💊", color: T.blue,   desc: "Supports phytoplankton without driving eutrophication events." },
// // //     { label: "Hydrogen Sulfide",  ideal: "< 0.01 mg/L",   icon: "⚠️", color: T.red,    desc: "Lethal at trace levels; managed via aeration and liming protocols." },
// // //     { label: "Silt Content",      ideal: "< 30 %",         icon: "🪴", color: "#a05c20",desc: "Limits resuspension events that devastate water clarity and gill function." },
// // //   ];

// // //   const waterParams = [
// // //     { label: "Dissolved Oxygen", ideal: "≥ 5.0 mg/L",  icon: "🫧", color: T.teal,         urgency: "Critical" },
// // //     { label: "pH",               ideal: "7.5 – 8.5",   icon: "⚗️", color: T.blue,         urgency: "Critical" },
// // //     { label: "Ammonia (NH₃)",   ideal: "< 0.1 mg/L",  icon: "☣️", color: T.red,           urgency: "Critical" },
// // //     { label: "Temperature",      ideal: "26 – 30 °C",  icon: "🌡️", color: "#f59e0b",      urgency: "High"     },
// // //     { label: "Salinity",         ideal: "10 – 25 ppt", icon: "🧂", color: T.blue,         urgency: "High"     },
// // //     { label: "Alkalinity",       ideal: "100–150 mg/L",icon: "🪨", color: T.teal,         urgency: "Medium"   },
// // //     { label: "Nitrite (NO₂⁻)", ideal: "< 0.5 mg/L",  icon: "🔬", color: "#7c3aed",      urgency: "Medium"   },
// // //     { label: "Turbidity",        ideal: "30–60 cm SD", icon: "👁️", color: T.textSecondary, urgency: "Standard" },
// // //   ];

// // //   const urgencyColor: Record<string,string> = { Critical: T.red, High: "#f59e0b", Medium: T.teal, Standard: T.textMuted };

// // //   const soilLayers = [
// // //     { name: "Water Column",       depth: "Surface – 1.7 m", color: T.tealLight,  border: T.teal,    icon: "💧", desc: "Main habitat. Precise chemistry maintained through our water treatments." },
// // //     { name: "Floc / Biofilm",     depth: "0 – 2 cm",       color: "#d9f0c8",    border: T.green,   icon: "🦠", desc: "Living microbial mat. Probiotics colonise here to out-compete pathogens." },
// // //     { name: "Aerobic Sediment",   depth: "2 – 5 cm",       color: "#ffe8cc",    border: "#c08040", icon: "🌬️", desc: "Active nitrification zone. Maintained by strategic paddle-wheel placement." },
// // //     { name: "Anaerobic Sediment", depth: "5 – 15 cm",      color: "#f3dece",    border: "#8b5e3c", icon: "⚠️", desc: "Risk zone for H₂S and methane. Managed with zeolite and liming." },
// // //     { name: "Pond Bed",           depth: "> 15 cm",        color: "#e8d5c0",    border: "#6b3f2a", icon: "🪨", desc: "Clay substrate. Sun-dried post-harvest to oxidise residual organics." },
// // //   ];

// // //   const monitoringSchedule = [
// // //     { param: "Dissolved Oxygen",   freq: "Every 6 hours", urgency: "Critical", tool: "DO meter / probe"  },
// // //     { param: "pH",                 freq: "Twice daily",   urgency: "Critical", tool: "Digital pH meter"  },
// // //     { param: "Temperature",        freq: "Twice daily",   urgency: "High",     tool: "Thermometer"       },
// // //     { param: "Ammonia",            freq: "Daily",         urgency: "High",     tool: "Photometric test"  },
// // //     { param: "Salinity",           freq: "Daily",         urgency: "High",     tool: "Refractometer"     },
// // //     { param: "Alkalinity",         freq: "Weekly",        urgency: "Medium",   tool: "Titration kit"     },
// // //     { param: "Nitrite / Nitrate",  freq: "Weekly",        urgency: "Medium",   tool: "Test strips / kit" },
// // //     { param: "Turbidity (Secchi)", freq: "Weekly",        urgency: "Standard", tool: "Secchi disk"       },
// // //   ];

// // //   const treatments = [
// // //     { name: "Potassium Chloride Pro", cat: "Ionic Correction",   icon: "⚡", color: T.teal,   targets: "K⁺ deficiency · Osmoregulation", dose: "10–15 kg / ha·m" },
// // //     { name: "Pond Guard Pro",         cat: "Sanitizer",          icon: "🛡️", color: T.blue,   targets: "Vibrio bloom · Bacterial load",   dose: "2–3 L / ha"      },
// // //     { name: "AquaClear Probiotic",    cat: "Biological",         icon: "🦠", color: T.green,  targets: "Ammonia · Organic overload",      dose: "500 g / ha"      },
// // //     { name: "pH Buffer Plus",         cat: "pH Management",      icon: "⚖️", color: T.teal,   targets: "Morning pH dip · Low alkalinity", dose: "5 kg / ha"       },
// // //     { name: "ZeoFresh",               cat: "Zeolite Amendment",  icon: "🪨", color: "#a05c20",targets: "Ammonia spike · Turbidity",       dose: "20–50 kg / ha"   },
// // //     { name: "OxyBoost Granules",      cat: "Emergency O₂",      icon: "🫧", color: T.teal,   targets: "Acute DO crash",                  dose: "3–5 kg / ha"     },
// // //   ];

// // //   return (
// // //     <div style={{ minHeight: "100vh", background: T.pageBg, color: T.textPrimary, overflowX: "hidden" }}>
// // //       {/* Dot grid */}
// // //       <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle, ${T.blue}07 1px, transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

// // //       <Topbar />

// // //       {/* ══ HERO ══ */}
// // //       <section style={{ position: "relative", zIndex: 1, paddingTop: 88 }}>
// // //         {/* Classification bar */}
// // //         <div style={{ background: T.blue, color: "#fff", padding: "7px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 10, fontFamily: "monospace", letterSpacing: 1.8, fontWeight: 600 }}>
// // //           <span>DOCUMENT CLASS: SUSTAINABILITY REPORT · UNRESTRICTED</span>
// // //           <span>IBP-SR-2026 · REV 3.1 · APRIL 2026</span>
// // //           <span>INNOVARE BIOPHARMA LLP · HYDERABAD</span>
// // //         </div>

// // //         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 48px 40px", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "start" }}>
// // //           {/* Left */}
// // //           <div>
// // //             <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
// // //               <SectionTag code="§ 01" label="Mission Statement" />
// // //             </motion.div>
// // //             <motion.h1
// // //               initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
// // //               style={{ fontSize: 54, fontWeight: 900, letterSpacing: -2.5, lineHeight: 0.97, color: T.textPrimary, marginBottom: 24 }}
// // //             >
// // //               Science That<br />
// // //               <span style={{ color: T.blue }}>Protects</span><br />
// // //               the Pond.
// // //             </motion.h1>
// // //             <motion.p
// // //               initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
// // //               style={{ fontSize: 16, color: T.textSecondary, lineHeight: 1.8, maxWidth: 460, marginBottom: 32 }}
// // //             >
// // //               Every formula Innovare develops is stress-tested against one measure beyond efficacy: does it leave the pond — and the planet — in better condition than it found it?
// // //             </motion.p>

// // //             {/* KPI row */}
// // //             <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.6 }}
// // //               style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 36 }}>
// // //               {[
// // //                 { val: 40,    suf: "%",  label: "Chemical reduction",   icon: "🧪" },
// // //                 { val: 92,    suf: "%",  label: "Biodegradable inputs", icon: "🌱" },
// // //                 { val: 15000, suf: "+",  label: "Farmers supported",    icon: "👨‍🌾" },
// // //               ].map((s,i) => (
// // //                 <div key={i} style={{ padding: "16px 14px", borderRadius: 12, background: T.cardBg, border: `1px solid ${T.borderLight}`, boxShadow: "0 2px 8px rgba(15,23,42,0.06)", textAlign: "center" }}>
// // //                   <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>
// // //                   <div style={{ fontSize: 28, fontWeight: 900, color: T.blue, letterSpacing: -1 }}><Counter to={s.val} suffix={s.suf} /></div>
// // //                   <div style={{ fontSize: 11, color: T.textMuted, marginTop: 3 }}>{s.label}</div>
// // //                 </div>
// // //               ))}
// // //             </motion.div>

// // //             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
// // //               style={{ display: "flex", gap: 12, flexWrap: "wrap" as const }}>
// // //               <a href="#soil" style={{ padding: "12px 28px", borderRadius: 10, background: `linear-gradient(135deg,${T.blue},#0288d1)`, color: "#fff", fontWeight: 700, fontSize: 13, textDecoration: "none", boxShadow: "0 6px 20px rgba(21,101,192,0.3)", transition: "all .25s" }}
// // //                 onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
// // //                 onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "none"; }}
// // //               >🌍 Explore Our Science</a>
// // //               <a href="#" style={{ padding: "12px 24px", borderRadius: 10, background: T.cardBg, border: `1px solid ${T.borderMed}`, color: T.textSecondary, fontWeight: 600, fontSize: 13, textDecoration: "none", transition: "all .25s" }}
// // //                 onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = T.blue; el.style.color = T.blue; el.style.background = T.blueMid; }}
// // //                 onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = T.borderMed; el.style.color = T.textSecondary; el.style.background = T.cardBg; }}
// // //               >Download Report →</a>
// // //             </motion.div>
// // //           </div>

// // //           {/* Right — diagram */}
// // //           <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
// // //             <PondDiagram />
// // //             <p style={{ textAlign: "center", fontSize: 9, color: T.textMuted, marginTop: 10, fontFamily: "monospace", letterSpacing: 1 }}>FIG. 1 — POND CROSS-SECTION SCHEMATIC · NOT TO SCALE</p>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* ── Rule ── */}
// // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
// // //         <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "8px 0" }}>
// // //           <div style={{ flex: 1, height: 1, background: T.borderLight }} />
// // //           <span style={{ fontSize: 9, color: T.textMuted, letterSpacing: 3, textTransform: "uppercase" as const, fontFamily: "monospace", flexShrink: 0 }}>§ 02 · SOIL QUALITY</span>
// // //           <div style={{ flex: 1, height: 1, background: T.borderLight }} />
// // //         </div>
// // //       </div>

// // //       {/* ══ SOIL QUALITY ══ */}
// // //       <section id="soil" style={{ position: "relative", zIndex: 1, padding: "48px 0 72px" }}>
// // //         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
// // //           <Reveal>
// // //             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 20 }}>
// // //               <div>
// // //                 <SectionTag code="§ 02" label="Soil Quality Management" />
// // //                 <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -2, color: T.textPrimary, lineHeight: 1.05 }}>The Foundation<br /><span style={{ color: T.blue }}>of Every Harvest</span></h2>
// // //               </div>
// // //               <p style={{ fontSize: 14, color: T.textSecondary, maxWidth: 400, lineHeight: 1.8 }}>Pond sediment is a living ecosystem. Neglected soil accumulates ammonia, hydrogen sulfide, and pathogens that cascade into crop losses. Our protocols actively restore and maintain sediment chemistry.</p>
// // //             </div>
// // //           </Reveal>

// // //           <Reveal delay={0.08}>
// // //             <div style={{ display: "flex", gap: 6, marginBottom: 28, padding: "6px", background: T.cardBg, borderRadius: 12, border: `1px solid ${T.borderLight}`, width: "fit-content", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}>
// // //               <TabBtn active={soilTab==="parameters"} label="Key Parameters"   onClick={() => setSoilTab("parameters")} accent={T.blue} />
// // //               <TabBtn active={soilTab==="layers"}     label="Sediment Layers"  onClick={() => setSoilTab("layers")}     accent={T.blue} />
// // //               <TabBtn active={soilTab==="practices"}  label="Best Practices"   onClick={() => setSoilTab("practices")}  accent={T.blue} />
// // //             </div>
// // //           </Reveal>

// // //           <AnimatePresence mode="wait">
// // //             <motion.div key={soilTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>

// // //               {soilTab === "parameters" && (
// // //                 <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
// // //                   {soilParams.map((p, i) => (
// // //                     <div key={i} style={{ background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 16, padding: "22px 20px", boxShadow: "0 2px 8px rgba(15,23,42,0.05)", position: "relative", overflow: "hidden", transition: "all .25s" }}
// // //                       onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = `${p.color}50`; el.style.transform = "translateY(-4px)"; el.style.boxShadow = `0 12px 32px rgba(21,101,192,0.1)`; }}
// // //                       onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.borderLight; el.style.transform = "none"; el.style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
// // //                     >
// // //                       <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${p.color},${p.color}44)`, borderRadius: "16px 16px 0 0" }} />
// // //                       <div style={{ position: "absolute", top: -8, right: -4, fontSize: 64, opacity: 0.04 }}>{p.icon}</div>
// // //                       <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
// // //                         <div style={{ width: 38, height: 38, borderRadius: 10, background: `${p.color}15`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{p.icon}</div>
// // //                         <span style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary }}>{p.label}</span>
// // //                       </div>
// // //                       <div style={{ marginBottom: 10 }}>
// // //                         <span style={{ fontSize: 9, color: T.textMuted, letterSpacing: 2, textTransform: "uppercase" as const, fontFamily: "monospace" }}>Ideal Range</span>
// // //                         <p style={{ fontSize: 20, fontWeight: 800, color: p.color, letterSpacing: -0.5, marginTop: 2 }}>{p.ideal}</p>
// // //                       </div>
// // //                       <p style={{ fontSize: 13, color: T.textSecondary, lineHeight: 1.65 }}>{p.desc}</p>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}

// // //               {soilTab === "layers" && (
// // //                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 24 }}>
// // //                   <div style={{ display: "flex", flexDirection: "column", gap: 0, borderRadius: 16, overflow: "hidden", border: `1px solid ${T.borderLight}`, boxShadow: "0 4px 16px rgba(15,23,42,0.07)" }}>
// // //                     {soilLayers.map((layer, i) => (
// // //                       <div key={i} style={{ padding: "16px 18px", background: layer.color, borderBottom: i < soilLayers.length-1 ? `1px solid ${layer.border}30` : "none", display: "flex", alignItems: "center", gap: 12, transition: "padding .2s" }}
// // //                         onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = "26px"; }}
// // //                         onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = "18px"; }}
// // //                       >
// // //                         <div style={{ width: 4, height: 36, background: layer.border, borderRadius: 4, flexShrink: 0 }} />
// // //                         <div style={{ fontSize: 20, flexShrink: 0 }}>{layer.icon}</div>
// // //                         <div style={{ flex: 1 }}>
// // //                           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
// // //                             <span style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>{layer.name}</span>
// // //                             <span style={{ fontSize: 10, color: T.textMuted, fontFamily: "monospace" }}>{layer.depth}</span>
// // //                           </div>
// // //                           <p style={{ fontSize: 12, color: T.textSecondary, lineHeight: 1.5 }}>{layer.desc}</p>
// // //                         </div>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                   <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// // //                     <div style={{ padding: "20px 22px", background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 14, boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}>
// // //                       <p style={{ fontSize: 11, fontWeight: 700, color: T.blue, letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 12, fontFamily: "monospace" }}>Nitrogen Cycle in Sediment</p>
// // //                       {[
// // //                         { from:"Feed Protein", to:"NH₃ / NH₄⁺", color:"#f59e0b", label:"Excretion & decomposition" },
// // //                         { from:"NH₃ / NH₄⁺",  to:"NO₂⁻",       color:T.teal,    label:"Nitrosomonas (aerobic)" },
// // //                         { from:"NO₂⁻",        to:"NO₃⁻",       color:T.blue,    label:"Nitrobacter (aerobic)"  },
// // //                         { from:"NO₃⁻",        to:"N₂ gas",      color:T.green,   label:"Denitrification (anoxic)"},
// // //                       ].map((step,i) => (
// // //                         <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: i<3 ? `1px solid ${T.borderLight}` : "none" }}>
// // //                           <span style={{ fontSize: 11, fontWeight: 700, color: step.color, fontFamily: "monospace", minWidth: 80 }}>{step.from}</span>
// // //                           <span style={{ fontSize: 13, color: step.color }}>→</span>
// // //                           <span style={{ fontSize: 11, fontWeight: 700, color: step.color, fontFamily: "monospace", minWidth: 70 }}>{step.to}</span>
// // //                           <span style={{ fontSize: 11, color: T.textMuted, borderLeft: `1px solid ${T.borderLight}`, paddingLeft: 8 }}>{step.label}</span>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                     {[
// // //                       { icon:"🧬", title:"Probiotic Colonisation", color:T.green, text:"Bacillus strains dosed bi-weekly colonise the floc layer, out-competing Vibrio pathogens without antibiotics." },
// // //                       { icon:"🪨", title:"Liming Protocol",        color:T.blue,  text:"Agricultural lime applied to the dry pond floor neutralises acidity, kills overwintering pathogens, and binds excess phosphorus." },
// // //                       { icon:"🌬️", title:"Aeration Management",   color:T.teal,  text:"Paddle-wheel positioning ensures sediment redox stays above +100 mV across the entire pond floor." },
// // //                     ].map((card,i) => (
// // //                       <div key={i} style={{ padding: "15px 18px", background: T.cardBg, border: `1px solid ${T.borderLight}`, borderLeft: `3px solid ${card.color}`, borderRadius: 12, display: "flex", gap: 12, boxShadow: "0 2px 6px rgba(15,23,42,0.04)" }}>
// // //                         <span style={{ fontSize: 20, flexShrink: 0 }}>{card.icon}</span>
// // //                         <div>
// // //                           <p style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary, marginBottom: 4 }}>{card.title}</p>
// // //                           <p style={{ fontSize: 12, color: T.textSecondary, lineHeight: 1.65 }}>{card.text}</p>
// // //                         </div>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               )}

// // //               {soilTab === "practices" && (
// // //                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
// // //                   {[
// // //                     { step:"01", icon:"☀️", title:"Post-harvest Sun Drying",   color:"#f59e0b", desc:"Full pond drainage and 2–3 weeks of solar drying oxidises residual organic matter, resets microbial communities, and reduces pathogen carryover." },
// // //                     { step:"02", icon:"🪨", title:"Lime Application",           color:T.blue,   desc:"Agricultural lime (2–3 t/ha) broadcast across dry pond floor. Target: soil pH 7.0–7.5, elimination of acid-sulphate conditions." },
// // //                     { step:"03", icon:"🌬️", title:"Aerator Grid Placement",    color:T.teal,   desc:"Paddle-wheel aerators positioned per pond geometry to ensure complete water turnover every 6 hours and sediment redox > +100 mV." },
// // //                     { step:"04", icon:"🧬", title:"Probiotic Seeding",          color:T.green,  desc:"Bacillus-based consortium applied at stocking and bi-weekly thereafter. Accelerates organic decomposition and produces bacteriocins." },
// // //                     { step:"05", icon:"🪣", title:"Sludge Centralisation",      color:"#a05c20",desc:"Pond slope (1% grade to central drain) channels settled sludge for periodic removal — preventing anaerobic dead zones." },
// // //                     { step:"06", icon:"📊", title:"Weekly Sediment Testing",    color:T.blue,   desc:"BOD, COD, redox, and Secchi disk logged weekly. Trend analysis triggers corrective action before critical thresholds breach." },
// // //                   ].map((p,i) => (
// // //                     <div key={i} style={{ padding: "20px 20px", background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 14, display: "flex", gap: 14, alignItems: "flex-start", boxShadow: "0 2px 8px rgba(15,23,42,0.05)", transition: "all .25s" }}
// // //                       onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = `${p.color}50`; el.style.transform = "translateX(4px)"; el.style.boxShadow = `0 6px 20px ${p.color}18`; }}
// // //                       onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.borderLight; el.style.transform = "none"; el.style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
// // //                     >
// // //                       <div style={{ width: 44, height: 44, borderRadius: 12, background: `${p.color}12`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{p.icon}</div>
// // //                       <div>
// // //                         <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
// // //                           <span style={{ fontSize: 9, color: p.color, fontWeight: 800, letterSpacing: 2, fontFamily: "monospace" }}>STEP {p.step}</span>
// // //                           <span style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary }}>{p.title}</span>
// // //                         </div>
// // //                         <p style={{ fontSize: 13, color: T.textSecondary, lineHeight: 1.7 }}>{p.desc}</p>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}

// // //             </motion.div>
// // //           </AnimatePresence>
// // //         </div>
// // //       </section>

// // //       {/* ── Rule ── */}
// // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
// // //         <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "8px 0" }}>
// // //           <div style={{ flex: 1, height: 1, background: T.borderLight }} />
// // //           <span style={{ fontSize: 9, color: T.textMuted, letterSpacing: 3, textTransform: "uppercase" as const, fontFamily: "monospace", flexShrink: 0 }}>§ 03 · WATER QUALITY</span>
// // //           <div style={{ flex: 1, height: 1, background: T.borderLight }} />
// // //         </div>
// // //       </div>

// // //       {/* ══ WATER QUALITY ══ */}
// // //       <section id="water" style={{ position: "relative", zIndex: 1, padding: "48px 0 72px" }}>
// // //         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
// // //           <Reveal>
// // //             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 20 }}>
// // //               <div>
// // //                 <SectionTag code="§ 03" label="Water Quality Management" />
// // //                 <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -2, color: T.textPrimary, lineHeight: 1.05 }}>Every Drop<br /><span style={{ color: T.teal }}>Held to a Standard</span></h2>
// // //               </div>
// // //               <p style={{ fontSize: 14, color: T.textSecondary, maxWidth: 400, lineHeight: 1.8 }}>Water chemistry in intensive ponds fluctuates hourly. Our treatments are precision tools — not broad-spectrum chemicals — designed to correct specific deficits without disrupting natural ecology.</p>
// // //             </div>
// // //           </Reveal>

// // //           <Reveal delay={0.08}>
// // //             <div style={{ display: "flex", gap: 6, marginBottom: 28, padding: "6px", background: T.cardBg, borderRadius: 12, border: `1px solid ${T.borderLight}`, width: "fit-content", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}>
// // //               <TabBtn active={waterTab==="parameters"} label="Key Parameters"      onClick={() => setWaterTab("parameters")} accent={T.teal} />
// // //               <TabBtn active={waterTab==="schedule"}   label="Monitoring Schedule" onClick={() => setWaterTab("schedule")}   accent={T.teal} />
// // //               <TabBtn active={waterTab==="treatments"} label="Our Treatments"      onClick={() => setWaterTab("treatments")} accent={T.teal} />
// // //             </div>
// // //           </Reveal>

// // //           <AnimatePresence mode="wait">
// // //             <motion.div key={waterTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>

// // //               {waterTab === "parameters" && (
// // //                 <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
// // //                   {waterParams.map((p, i) => (
// // //                     <div key={i} style={{ background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 14, padding: "20px 18px", boxShadow: "0 2px 8px rgba(15,23,42,0.05)", position: "relative", overflow: "hidden", transition: "all .25s" }}
// // //                       onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = `${p.color}50`; el.style.transform = "translateY(-4px)"; el.style.boxShadow = `0 12px 30px rgba(15,23,42,0.1)`; }}
// // //                       onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.borderLight; el.style.transform = "none"; el.style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
// // //                     >
// // //                       <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: p.color, borderRadius: "14px 14px 0 0" }} />
// // //                       <div style={{ position: "absolute", top: 10, right: 10 }}>
// // //                         <span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 5, background: `${urgencyColor[p.urgency]}18`, color: urgencyColor[p.urgency], fontWeight: 700, letterSpacing: 0.5, fontFamily: "monospace" }}>{p.urgency}</span>
// // //                       </div>
// // //                       <div style={{ fontSize: 24, marginBottom: 12, marginTop: 4 }}>{p.icon}</div>
// // //                       <p style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary, marginBottom: 8 }}>{p.label}</p>
// // //                       <div>
// // //                         <span style={{ fontSize: 9, color: T.textMuted, letterSpacing: 2, textTransform: "uppercase" as const, fontFamily: "monospace" }}>Target</span>
// // //                         <p style={{ fontSize: 16, fontWeight: 800, color: p.color, letterSpacing: -0.3, marginTop: 2 }}>{p.ideal}</p>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}

// // //               {waterTab === "schedule" && (
// // //                 <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 20 }}>
// // //                   <div style={{ background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 16px rgba(15,23,42,0.07)" }}>
// // //                     <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1.2fr 1fr 1fr", padding: "12px 20px", background: `linear-gradient(135deg,${T.blue},${T.teal})` }}>
// // //                       {["Parameter","Frequency","Urgency","Tool"].map(h => (
// // //                         <span key={h} style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: 1.5, textTransform: "uppercase" as const, fontFamily: "monospace" }}>{h}</span>
// // //                       ))}
// // //                     </div>
// // //                     {monitoringSchedule.map((row,i) => (
// // //                       <div key={i} style={{ display: "grid", gridTemplateColumns: "1.5fr 1.2fr 1fr 1fr", padding: "11px 20px", background: i%2===0 ? T.surfaceBg : T.cardBg, borderTop: `1px solid ${T.borderLight}`, alignItems: "center", transition: "background .2s" }}
// // //                         onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = T.blueMid; }}
// // //                         onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = i%2===0 ? T.surfaceBg : T.cardBg; }}
// // //                       >
// // //                         <span style={{ fontSize: 13, color: T.textPrimary, fontWeight: 500 }}>{row.param}</span>
// // //                         <span style={{ fontSize: 12, color: T.textSecondary }}>{row.freq}</span>
// // //                         <span style={{ fontSize: 9, padding: "2px 8px", borderRadius: 5, background: `${urgencyColor[row.urgency]}15`, color: urgencyColor[row.urgency], fontWeight: 700, letterSpacing: 0.5, width: "fit-content", fontFamily: "monospace" }}>{row.urgency}</span>
// // //                         <span style={{ fontSize: 11, color: T.textMuted }}>{row.tool}</span>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                   <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// // //                     <div style={{ padding: "20px 20px", background: "#fff5f5", border: `1px solid #fecaca`, borderLeft: `4px solid ${T.red}`, borderRadius: 14 }}>
// // //                       <p style={{ fontSize: 11, fontWeight: 800, color: T.red, letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 12, fontFamily: "monospace" }}>🚨 Emergency Thresholds</p>
// // //                       {[
// // //                         { t:"DO < 3.0 mg/L",     a:"Activate all aerators. Stop feeding immediately."  },
// // //                         { t:"pH < 7.0 or > 9.2", a:"Lime or water exchange correction within 2 hours." },
// // //                         { t:"NH₃ > 0.5 mg/L",    a:"50% water exchange + emergency probiotic dose."    },
// // //                         { t:"NO₂⁻ > 1.0 mg/L",  a:"Salt addition 5 ppt + maximum aeration."           },
// // //                       ].map((a,i) => (
// // //                         <div key={i} style={{ padding: "8px 0", borderBottom: i<3 ? "1px solid #fee2e2" : "none" }}>
// // //                           <p style={{ fontSize: 12, fontWeight: 700, color: T.red, fontFamily: "monospace" }}>{a.t}</p>
// // //                           <p style={{ fontSize: 12, color: T.textSecondary, marginTop: 2 }}>{a.a}</p>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                     <div style={{ padding: "20px 20px", background: T.tealLight, border: `1px solid #bae6fd`, borderLeft: `4px solid ${T.teal}`, borderRadius: 14 }}>
// // //                       <p style={{ fontSize: 11, fontWeight: 800, color: T.teal, letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 12, fontFamily: "monospace" }}>💡 Pro Tips</p>
// // //                       {[
// // //                         "Measure DO at dawn — the natural daily minimum.",
// // //                         "Calibrate probes weekly; drift kills faster than disease.",
// // //                         "Post-rain: check salinity & pH within 30 minutes.",
// // //                         "Log all readings digitally — trends matter more than snapshots.",
// // //                       ].map((tip,i) => (
// // //                         <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "6px 0", borderBottom: i<3 ? "1px solid rgba(8,145,178,0.15)" : "none" }}>
// // //                           <div style={{ width: 5, height: 5, borderRadius: "50%", background: T.teal, marginTop: 5, flexShrink: 0 }} />
// // //                           <p style={{ fontSize: 12, color: T.textSecondary, lineHeight: 1.6 }}>{tip}</p>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               )}

// // //               {waterTab === "treatments" && (
// // //                 <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
// // //                   {treatments.map((prod,i) => (
// // //                     <div key={i} style={{ background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 16, padding: "22px 20px", boxShadow: "0 2px 8px rgba(15,23,42,0.05)", position: "relative", overflow: "hidden", transition: "all .25s" }}
// // //                       onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = `${prod.color}50`; el.style.transform = "translateY(-4px)"; el.style.boxShadow = `0 14px 36px rgba(15,23,42,0.1)`; }}
// // //                       onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.borderLight; el.style.transform = "none"; el.style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
// // //                     >
// // //                       <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: prod.color, borderRadius: "16px 16px 0 0" }} />
// // //                       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
// // //                         <div style={{ width: 42, height: 42, borderRadius: 12, background: `${prod.color}15`, border: `1px solid ${prod.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{prod.icon}</div>
// // //                         <span style={{ fontSize: 9, padding: "3px 9px", borderRadius: 5, background: `${prod.color}12`, color: prod.color, fontWeight: 700, letterSpacing: 0.5, fontFamily: "monospace" }}>{prod.cat}</span>
// // //                       </div>
// // //                       <h4 style={{ fontSize: 15, fontWeight: 800, color: T.textPrimary, marginBottom: 8 }}>{prod.name}</h4>
// // //                       <div style={{ marginBottom: 10 }}>
// // //                         <span style={{ fontSize: 9, color: T.textMuted, textTransform: "uppercase" as const, letterSpacing: 1.5, fontFamily: "monospace" }}>Targets</span>
// // //                         <p style={{ fontSize: 12, color: T.textSecondary, marginTop: 3 }}>{prod.targets}</p>
// // //                       </div>
// // //                       <div style={{ padding: "8px 14px", background: `${prod.color}10`, border: `1px solid ${prod.color}25`, borderRadius: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // //                         <span style={{ fontSize: 10, color: T.textMuted, fontFamily: "monospace" }}>Typical dose</span>
// // //                         <span style={{ fontSize: 13, fontWeight: 700, color: prod.color, fontFamily: "monospace" }}>{prod.dose}</span>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}

// // //             </motion.div>
// // //           </AnimatePresence>
// // //         </div>
// // //       </section>

// // //       {/* ══ CERTIFICATIONS ══ */}
// // //       <section style={{ background: T.cardBg, borderTop: `1px solid ${T.borderLight}`, borderBottom: `1px solid ${T.borderLight}`, padding: "56px 48px", position: "relative", zIndex: 1 }}>
// // //         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
// // //           <Reveal>
// // //             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 40 }}>
// // //               <div>
// // //                 <SectionTag code="§ 04" label="Accreditations" />
// // //                 <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: -1.5, color: T.textPrimary }}>Independently Verified</h2>
// // //                 <p style={{ fontSize: 14, color: T.textSecondary, marginTop: 6, maxWidth: 340, lineHeight: 1.7 }}>Every sustainability claim is backed by third-party audit, not marketing copy.</p>
// // //               </div>
// // //               <div style={{ display: "flex", gap: 14, flexWrap: "wrap" as const }}>
// // //                 {[
// // //                   { label:"GMP+",            body:"Feed Safety",        icon:"✅", color:T.green },
// // //                   { label:"ISO 9001:2015",   body:"Quality Mgmt",       icon:"🏅", color:T.blue  },
// // //                   { label:"ISO 14001",       body:"Environmental Mgmt", icon:"🌍", color:T.teal  },
// // //                   { label:"HACCP",           body:"Food Safety",        icon:"🔬", color:T.blue  },
// // //                   { label:"Export Approved", body:"MPEDA / EIC",        icon:"🚢", color:T.teal  },
// // //                 ].map((cert,i) => (
// // //                   <div key={i} style={{ padding: "16px 20px", background: T.surfaceBg, border: `1px solid ${T.borderLight}`, borderTop: `3px solid ${cert.color}`, borderRadius: 12, textAlign: "center", minWidth: 120, transition: "all .25s" }}
// // //                     onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-3px)"; el.style.boxShadow = `0 8px 24px ${cert.color}20`; }}
// // //                     onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "none"; el.style.boxShadow = "none"; }}
// // //                   >
// // //                     <div style={{ fontSize: 24, marginBottom: 6 }}>{cert.icon}</div>
// // //                     <p style={{ fontSize: 13, fontWeight: 800, color: cert.color }}>{cert.label}</p>
// // //                     <p style={{ fontSize: 11, color: T.textMuted, marginTop: 3 }}>{cert.body}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </Reveal>
// // //         </div>
// // //       </section>

// // //       {/* ══ CTA ══ */}
// // //       <section style={{ position: "relative", zIndex: 1, padding: "80px 48px" }}>
// // //         <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(ellipse 60% 80% at 50% 50%, ${T.blueLight} 0%, transparent 65%)`, pointerEvents: "none" }} />
// // //         <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative" }}>
// // //           <Reveal>
// // //             <SectionTag code="§ 05" label="Take Action" />
// // //             <h2 style={{ fontSize: 42, fontWeight: 900, letterSpacing: -2, color: T.textPrimary, lineHeight: 1.05, marginBottom: 16 }}>Ready to Farm<br /><span style={{ color: T.blue }}>More Responsibly?</span></h2>
// // //             <p style={{ fontSize: 15, color: T.textSecondary, lineHeight: 1.8, marginBottom: 36 }}>Our technical team will build a tailored soil and water management protocol for your farm — at no cost. Backed by data, not guesswork.</p>
// // //             <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const }}>
// // //               <button style={{ padding: "14px 36px", borderRadius: 12, background: `linear-gradient(135deg,${T.blue},#0288d1)`, color: "#fff", fontWeight: 800, fontSize: 14, border: "none", cursor: "pointer", boxShadow: "0 8px 28px rgba(21,101,192,0.3)", transition: "all .25s" }}
// // //                 onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 14px 40px rgba(21,101,192,0.4)"; }}
// // //                 onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 28px rgba(21,101,192,0.3)"; }}
// // //               >Request a Free Consultation</button>
// // //               <button style={{ padding: "14px 30px", borderRadius: 12, background: T.cardBg, border: `1px solid ${T.borderMed}`, color: T.textSecondary, fontWeight: 600, fontSize: 14, cursor: "pointer", transition: "all .25s" }}
// // //                 onMouseEnter={e => { const el = e.currentTarget as HTMLButtonElement; el.style.borderColor = T.blue; el.style.color = T.blue; el.style.background = T.blueMid; }}
// // //                 onMouseLeave={e => { const el = e.currentTarget as HTMLButtonElement; el.style.borderColor = T.borderMed; el.style.color = T.textSecondary; el.style.background = T.cardBg; }}
// // //               >Download Sustainability Report →</button>
// // //             </div>
// // //           </Reveal>
// // //         </div>
// // //       </section>

// // //       <Footer />
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { useState, useEffect, useRef } from "react";
// // import { motion, useInView, AnimatePresence } from "framer-motion";
// // import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

// // /* ══════════════════════════════════════════════════
// //    BRAND THEME — exact tokens from ProductDetails
// // ══════════════════════════════════════════════════ */
// // const T = {
// //   pageBg:        "#f0f4f8",
// //   cardBg:        "#ffffff",
// //   surfaceBg:     "#f8fafc",
// //   imagePanelBg:  "#eef4fb",
// //   borderLight:   "#e2e8f0",
// //   borderMed:     "#cbd5e1",
// //   blue:          "#1565c0",
// //   blueDark:      "#0d47a1",
// //   blueLight:     "#dbeafe",
// //   blueMid:       "#eff6ff",
// //   teal:          "#0891b2",
// //   tealLight:     "#e0f2fe",
// //   textPrimary:   "#0f172a",
// //   textSecondary: "#475569",
// //   textMuted:     "#94a3b8",
// //   green:         "#15803d",
// //   greenBg:       "#f0fdf4",
// //   greenBorder:   "#bbf7d0",
// //   amber:         "#92400e",
// //   amberBg:       "#fffbeb",
// //   amberBorder:   "#fcd34d",
// //   red:           "#dc2626",
// //   footerBg:      "#0f172a",
// //   footerTeal:    "#38bdf8",
// // };

// // /* ══════════════════════════════════════════════════
// //    ANIMATED COUNTER
// // ══════════════════════════════════════════════════ */
// // function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
// //   const [val, setVal] = useState(0);
// //   const ref = useRef<HTMLSpanElement>(null);
// //   const inView = useInView(ref, { once: true });
// //   useEffect(() => {
// //     if (!inView) return;
// //     let s = 0;
// //     const inc = to / (1600 / 16);
// //     const id = setInterval(() => {
// //       s += inc;
// //       if (s >= to) { setVal(to); clearInterval(id); }
// //       else setVal(Math.floor(s));
// //     }, 16);
// //     return () => clearInterval(id);
// //   }, [inView, to]);
// //   return <span ref={ref}>{val}{suffix}</span>;
// // }

// // /* ══════════════════════════════════════════════════
// //    SCROLL REVEAL
// // ══════════════════════════════════════════════════ */
// // function Reveal({ children, delay = 0, x = 0, y = 24 }: {
// //   children: React.ReactNode; delay?: number; x?: number; y?: number;
// // }) {
// //   const ref = useRef<HTMLDivElement>(null);
// //   const inView = useInView(ref, { once: true, margin: "-60px" });
// //   return (
// //     <motion.div ref={ref}
// //       initial={{ opacity: 0, x, y }}
// //       animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
// //       transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
// //     >{children}</motion.div>
// //   );
// // }

// // /* ══════════════════════════════════════════════════
// //    SECTION TAG — dossier label style
// // ══════════════════════════════════════════════════ */
// // function SectionTag({ code, label }: { code: string; label: string }) {
// //   return (
// //     <div style={{ display: "inline-flex", alignItems: "stretch", marginBottom: 20, borderRadius: 7, overflow: "hidden", boxShadow: `0 2px 8px rgba(21,101,192,0.12)` }}>
// //       <div style={{ padding: "4px 12px", background: T.blue, color: "#fff", fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" as const, fontFamily: "monospace", display: "flex", alignItems: "center" }}>{code}</div>
// //       <div style={{ padding: "4px 14px", background: T.blueLight, color: T.blue, fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" as const, fontFamily: "monospace", display: "flex", alignItems: "center" }}>{label}</div>
// //     </div>
// //   );
// // }

// // /* ══════════════════════════════════════════════════
// //    TAB BUTTON
// // ══════════════════════════════════════════════════ */
// // function TabBtn({ active, label, onClick, accent }: { active: boolean; label: string; onClick: () => void; accent: string }) {
// //   return (
// //     <button onClick={onClick} style={{
// //       padding: "8px 20px", fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer",
// //       borderRadius: 8, transition: "all .22s",
// //       background: active ? `linear-gradient(135deg,${accent},${accent}cc)` : T.surfaceBg,
// //       color: active ? "#fff" : T.textSecondary,
// //       boxShadow: active ? `0 4px 14px ${accent}40` : "none",
// //     }}>{label}</button>
// //   );
// // }

// // /* ══════════════════════════════════════════════════
// //    POND CROSS-SECTION SVG DIAGRAM
// // ══════════════════════════════════════════════════ */
// // function PondDiagram() {
// //   return (
// //     <div style={{ position: "relative", width: "100%", maxWidth: 780, margin: "0 auto" }}>
// //       <div style={{
// //         border: `2px solid ${T.borderMed}`, borderRadius: 16, overflow: "hidden",
// //         boxShadow: "0 20px 60px rgba(21,101,192,0.12), 0 4px 16px rgba(15,23,42,0.08)",
// //         background: "#fff",
// //       }}>
// //         {/* Report header bar */}
// //         <div style={{ padding: "9px 20px", background: T.surfaceBg, borderBottom: `1px solid ${T.borderLight}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// //           <span style={{ fontSize: 9, fontWeight: 700, color: T.textMuted, letterSpacing: 2, textTransform: "uppercase" as const, fontFamily: "monospace" }}>FIG. 1 — POND CROSS-SECTION · INNOVARE BIOPHARMA LLP</span>
// //           <span style={{ fontSize: 9, color: T.textMuted, fontFamily: "monospace" }}>REF: IBP-SUS-2026</span>
// //         </div>

// //         <svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
// //           <defs>
// //             <linearGradient id="skyG"      x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f0f9ff" /><stop offset="100%" stopColor="#e0f2fe" /></linearGradient>
// //             <linearGradient id="waterG"    x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={T.tealLight} stopOpacity="0.9" /><stop offset="100%" stopColor={T.blueMid} /></linearGradient>
// //             <linearGradient id="aerobicG"  x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ffe8cc" /><stop offset="100%" stopColor="#d4a060" /></linearGradient>
// //             <linearGradient id="anaerobicG"x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c09070" /><stop offset="100%" stopColor="#8b5e3c" /></linearGradient>
// //             <linearGradient id="bedG"      x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7a4a2a" /><stop offset="100%" stopColor="#4a2c12" /></linearGradient>
// //             <pattern id="bubP" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
// //               <circle cx="10" cy="30" r="2" fill={T.teal} opacity="0.22" />
// //               <circle cx="28" cy="14" r="1.5" fill={T.teal} opacity="0.16" />
// //               <circle cx="5"  cy="8"  r="1"   fill={T.teal} opacity="0.13" />
// //             </pattern>
// //             <marker id="arrowM" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
// //               <path d="M0,0 L6,3 L0,6 Z" fill={T.teal} opacity="0.5" />
// //             </marker>
// //           </defs>

// //           {/* Sky */}
// //           <rect x="0" y="0" width="760" height="38" fill="url(#skyG)" />
// //           {/* Sun */}
// //           <circle cx="706" cy="18" r="11" fill="#fbbf24" opacity="0.85" />
// //           {[0,45,90,135,180,225,270,315].map((a,i) => (
// //             <line key={i} x1={706+Math.cos(a*Math.PI/180)*14} y1={18+Math.sin(a*Math.PI/180)*14} x2={706+Math.cos(a*Math.PI/180)*17} y2={18+Math.sin(a*Math.PI/180)*17} stroke="#fbbf24" strokeWidth="1.5" opacity="0.55" />
// //           ))}

// //           {/* Berms */}
// //           <polygon points="0,38 82,38 122,62 122,340 0,340" fill="#a09070" opacity="0.45" />
// //           <polygon points="760,38 678,38 638,62 638,340 760,340" fill="#a09070" opacity="0.45" />

// //           {/* Water */}
// //           <rect x="122" y="38" width="516" height="168" fill="url(#waterG)" opacity="0.88" />
// //           <rect x="122" y="38" width="516" height="168" fill="url(#bubP)" />
// //           {/* Ripples */}
// //           <path d="M132,44 Q200,38 270,44 Q340,50 412,44 Q482,38 550,44 Q604,48 628,44" stroke={T.teal} strokeWidth="1.2" fill="none" opacity="0.4" />
// //           <path d="M132,51 Q190,46 252,51 Q320,57 390,50 Q460,44 530,51 Q590,55 628,51" stroke={T.teal} strokeWidth="0.7" fill="none" opacity="0.25" />

// //           {/* Shrimp */}
// //           {[[225,108],[390,130],[515,100],[305,152],[460,80]].map(([cx,cy],i) => (
// //             <g key={i} opacity="0.5">
// //               <ellipse cx={cx} cy={cy} rx="10" ry="5" fill={T.teal} opacity="0.65" transform={`rotate(-20,${cx},${cy})`} />
// //               <circle cx={cx+8} cy={cy-2} r="1.8" fill={T.teal} opacity="0.55" />
// //               <line x1={cx+9} y1={cy-3} x2={cx+15} y2={cy-6} stroke={T.teal} strokeWidth="0.7" opacity="0.5" />
// //               <line x1={cx+9} y1={cy-1} x2={cx+15} y2={cy-1} stroke={T.teal} strokeWidth="0.7" opacity="0.5" />
// //             </g>
// //           ))}

// //           {/* Aerator */}
// //           <rect x="356" y="40" width="48" height="5" rx="2.5" fill={T.blue} opacity="0.65" />
// //           <rect x="377" y="34" width="6" height="28" rx="2" fill={T.blue} opacity="0.5" />
// //           <circle cx="380" cy="34" r="4" fill={T.blue} opacity="0.8" />
// //           {[-14,-7,0,7,14].map((dx,i) => (
// //             <line key={i} x1={380+dx} y1={45} x2={380+dx*1.5} y2={66} stroke="#bae6fd" strokeWidth="1" opacity="0.45" strokeDasharray="2,2" />
// //           ))}

// //           {/* Floc layer */}
// //           <rect x="122" y="206" width="516" height="10" fill="#c8e6a0" opacity="0.75" />
// //           <path d="M122,206 Q200,203 280,206 Q360,209 440,206 Q520,203 638,206" stroke="#6aaa50" strokeWidth="0.9" fill="none" opacity="0.55" />

// //           {/* Aerobic sediment */}
// //           <rect x="122" y="216" width="516" height="36" fill="url(#aerobicG)" opacity="0.85" />

// //           {/* Anaerobic sediment */}
// //           <rect x="122" y="252" width="516" height="32" fill="url(#anaerobicG)" opacity="0.88" />

// //           {/* Pond bed */}
// //           <rect x="122" y="284" width="516" height="56" fill="url(#bedG)" />

// //           {/* Left ruler */}
// //           <line x1="108" y1="38" x2="108" y2="300" stroke={T.borderMed} strokeWidth="0.8" />
// //           {[{y:38,l:"0 m"},{y:100,l:"0.6m"},{y:160,l:"1.2m"},{y:206,l:"1.7m"},{y:252,l:"▸ ana"},{y:284,l:"▸ bed"}].map((t,i) => (
// //             <g key={i}>
// //               <line x1="108" y1={t.y} x2="122" y2={t.y} stroke={T.textMuted} strokeWidth="0.8" />
// //               <text x="105" y={t.y+4} textAnchor="end" fontSize="7" fill={T.textMuted} fontFamily="monospace">{t.l}</text>
// //             </g>
// //           ))}

// //           {/* Right callout lines */}
// //           {[
// //             {y:118, label:"Water Column",         sub:"DO · pH · Temp · Salinity",   color:T.blue },
// //             {y:211, label:"Floc / Biofilm",        sub:"Active microbial zone",        color:"#5a8f45"},
// //             {y:234, label:"Aerobic Sediment",      sub:"+50 to +200 mV redox",        color:"#a07040"},
// //             {y:268, label:"Anaerobic Sediment",    sub:"H₂S risk — managed daily",    color:"#7a4a28"},
// //             {y:306, label:"Pond Bed",              sub:"Clay · post-harvest drying",  color:"#5c3317"},
// //           ].map((l,i) => (
// //             <g key={i}>
// //               <line x1="638" y1={l.y} x2="656" y2={l.y} stroke={l.color} strokeWidth="0.9" strokeDasharray="3,2" opacity="0.65" />
// //               <line x1="656" y1={l.y} x2="660" y2={l.y} stroke={l.color} strokeWidth="2" opacity="0.85" />
// //               <text x="663" y={l.y-2}  fontSize="8.5" fill={T.textPrimary} fontWeight="700" fontFamily="monospace">{l.label}</text>
// //               <text x="663" y={l.y+8}  fontSize="7"   fill={T.textSecondary} fontFamily="monospace">{l.sub}</text>
// //             </g>
// //           ))}

// //           {/* O2 arrow */}
// //           <path d="M380,66 L380,200" stroke={T.teal} strokeWidth="1" strokeDasharray="4,3" opacity="0.3" markerEnd="url(#arrowM)" />
// //           <text x="385" y="140" fontSize="8" fill={T.teal} fontFamily="monospace" opacity="0.65">O₂ ↓</text>

// //           {/* Probe icons */}
// //           <rect x="242" y="50" width="5" height="26" rx="2.5" fill={T.blue} opacity="0.55" />
// //           <rect x="239" y="48" width="11" height="5" rx="2" fill={T.blue} opacity="0.8" />
// //           <text x="253" y="60" fontSize="7" fill={T.blue} fontFamily="monospace" opacity="0.75">pH probe</text>
// //           <rect x="488" y="66" width="5" height="20" rx="2.5" fill={T.teal} opacity="0.55" />
// //           <rect x="485" y="64" width="11" height="5" rx="2" fill={T.teal} opacity="0.8" />
// //           <text x="499" y="73" fontSize="7" fill={T.teal} fontFamily="monospace" opacity="0.75">DO sensor</text>

// //           {/* Caption */}
// //           <rect x="0" y="326" width="760" height="14" fill={T.surfaceBg} />
// //           <text x="380" y="336" textAnchor="middle" fontSize="7" fill={T.textMuted} fontFamily="monospace">Schematic cross-section of intensive shrimp pond · Not to scale · © Innovare Biopharma LLP 2026</text>
// //         </svg>
// //       </div>
// //       {/* Corner pins */}
// //       {[0,1,2,3].map(i => (
// //         <div key={i} style={{ position: "absolute", top: i < 2 ? -5 : "auto", bottom: i >= 2 ? -5 : "auto", left: i%2===0 ? -5 : "auto", right: i%2!==0 ? -5 : "auto", width: 10, height: 10, borderRadius: "50%", background: T.blue, boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${T.blueLight}` }} />
// //       ))}
// //     </div>
// //   );
// // }

// // /* ══════════════════════════════════════════════════
// //    TOPBAR
// // ══════════════════════════════════════════════════ */
// // function Topbar() {
// //   const [scrolled, setScrolled] = useState(false);
// //   useEffect(() => {
// //     const h = () => setScrolled(window.scrollY > 30);
// //     window.addEventListener("scroll", h);
// //     return () => window.removeEventListener("scroll", h);
// //   }, []);
// //   return (
// //     <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, height: 64, background: scrolled ? "rgba(255,255,255,0.94)" : "rgba(255,255,255,0.85)", backdropFilter: "blur(18px)", borderBottom: `1px solid ${scrolled ? T.borderLight : "transparent"}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 48px", boxShadow: scrolled ? "0 1px 12px rgba(15,23,42,0.07)" : "none", transition: "all 0.35s" }}>
// //       <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// //         <div style={{ width: 34, height: 34, borderRadius: 8, background: T.blue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🦐</div>
// //         <span style={{ fontSize: 15, fontWeight: 800, color: T.textPrimary, letterSpacing: -0.3 }}>Innovare Biopharma</span>
// //         <span style={{ fontSize: 10, color: T.teal, letterSpacing: 2, textTransform: "uppercase" as const }}>LLP</span>
// //       </div>
// //       <nav style={{ display: "flex", gap: 28 }}>
// //         {["Products", "Solutions", "Sustainability", "About", "Contact"].map(n => (
// //           <a key={n} href="#" style={{ fontSize: 13, fontWeight: n === "Sustainability" ? 700 : 500, color: n === "Sustainability" ? T.blue : T.textSecondary, textDecoration: "none", transition: "color .2s", borderBottom: n === "Sustainability" ? `2px solid ${T.blue}` : "2px solid transparent", paddingBottom: 2 }}
// //             onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = T.blue}
// //             onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = n === "Sustainability" ? T.blue : T.textSecondary}
// //           >{n}</a>
// //         ))}
// //       </nav>
// //       <button style={{ padding: "8px 20px", borderRadius: 8, background: `linear-gradient(135deg,${T.blue},#0288d1)`, color: "#fff", fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer", boxShadow: "0 4px 14px rgba(21,101,192,0.3)", transition: "all .2s" }}
// //         onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; }}
// //         onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; }}
// //       >Get in Touch</button>
// //     </nav>
// //   );
// // }

// // /* ══════════════════════════════════════════════════
// //    FOOTER
// // ══════════════════════════════════════════════════ */
// // function Footer() {
// //   const cols = [
// //     { title: "Solutions",  links: ["Feed Supplements", "Sanitizers", "Water Treatments", "Growth Promoters", "Vitamins & Minerals"] },
// //     { title: "Company",    links: ["About Us", "Our Story", "Sustainability", "Careers", "News"] },
// //     { title: "Support",    links: ["Technical Helpdesk", "Product Catalogue", "FAQs", "Contact Us", "Partner Portal"] },
// //   ];
// //   return (
// //     <footer style={{ background: T.footerBg, borderTop: "1px solid rgba(56,189,248,0.12)" }}>
// //       <div style={{ background: "rgba(21,101,192,0.12)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "22px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
// //         <div>
// //           <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Subscribe to our Aqua Insights Newsletter</p>
// //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Science-backed tips, product launches & exclusive offers.</p>
// //         </div>
// //         <div style={{ display: "flex", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)" }}>
// //           <input type="email" placeholder="your@email.com" style={{ padding: "11px 18px", background: "rgba(255,255,255,0.05)", border: "none", color: "#fff", fontSize: 13, outline: "none", width: 220 }} />
// //           <button style={{ padding: "11px 22px", background: `linear-gradient(135deg,${T.blue},#0288d1)`, color: "#fff", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13 }}>Subscribe</button>
// //         </div>
// //       </div>
// //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 48px 36px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
// //         <div>
// //           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
// //             <div style={{ width: 40, height: 40, borderRadius: 10, background: T.blue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🦐</div>
// //             <div>
// //               <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Innovare Biopharma</p>
// //               <p style={{ fontSize: 11, color: T.footerTeal, letterSpacing: 2, textTransform: "uppercase" as const }}>LLP</p>
// //             </div>
// //           </div>
// //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.85, maxWidth: 260 }}>India's innovative manufacturer & exporter of aquaculture healthcare products.</p>
// //           <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
// //             {[<Linkedin size={15}/>, <Twitter size={15}/>, <Youtube size={15}/>, <Facebook size={15}/>].map((icon,i) => (
// //               <a key={i} href="#" style={{ width: 32, height: 32, borderRadius: 7, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)", transition: "all .2s", textDecoration: "none" }}
// //                 onMouseEnter={e => { const el = e.currentTarget; el.style.background = T.blue; el.style.color = "#fff"; }}
// //                 onMouseLeave={e => { const el = e.currentTarget; el.style.background = "rgba(255,255,255,0.05)"; el.style.color = "rgba(255,255,255,0.5)"; }}
// //               >{icon}</a>
// //             ))}
// //           </div>
// //         </div>
// //         {cols.map(col => (
// //           <div key={col.title}>
// //             <h4 style={{ fontSize: 10, fontWeight: 700, color: T.footerTeal, letterSpacing: 2.5, textTransform: "uppercase" as const, marginBottom: 18 }}>{col.title}</h4>
// //             <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
// //               {col.links.map(link => (
// //                 <a key={link} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color .2s" }}
// //                   onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = T.footerTeal}
// //                   onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)"}
// //                 >{link}</a>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "16px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
// //         <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© 2026 Innovare Biopharma LLP. All rights reserved.</p>
// //         <div style={{ display: "flex", gap: 8 }}>
// //           {["GMP Certified", "ISO 9001", "Export Approved"].map(c => (
// //             <span key={c} style={{ fontSize: 10, padding: "3px 10px", borderRadius: 4, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.25)", color: T.footerTeal, letterSpacing: 1 }}>{c}</span>
// //           ))}
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// // /* ══════════════════════════════════════════════════
// //    MAIN PAGE
// // ══════════════════════════════════════════════════ */
// // export default function SustainabilityPage() {
// //   const [soilTab, setSoilTab]   = useState<"parameters"|"layers"|"practices">("parameters");
// //   const [waterTab, setWaterTab] = useState<"parameters"|"schedule"|"treatments">("parameters");

// //   const soilParams = [
// //     { label: "Soil pH",           ideal: "6.5 – 7.5",     icon: "⚖️", color: T.blue,   desc: "Prevents nutrient lock-up; eliminates acid-sulphate toxicity risk." },
// //     { label: "Organic Matter",    ideal: "2 – 4 %",        icon: "🌱", color: T.green,  desc: "Sustains beneficial microbial biomass without triggering hypoxia." },
// //     { label: "Redox Potential",   ideal: "+50 to +200 mV", icon: "⚡", color: T.teal,   desc: "Aerobic sediment suppresses H₂S generation and anaerobic fermentation." },
// //     { label: "Phosphorus",        ideal: "20 – 40 ppm",    icon: "💊", color: T.blue,   desc: "Supports phytoplankton without driving eutrophication events." },
// //     { label: "Hydrogen Sulfide",  ideal: "< 0.01 mg/L",   icon: "⚠️", color: T.red,    desc: "Lethal at trace levels; managed via aeration and liming protocols." },
// //     { label: "Silt Content",      ideal: "< 30 %",         icon: "🪴", color: "#a05c20",desc: "Limits resuspension events that devastate water clarity and gill function." },
// //   ];

// //   const waterParams = [
// //     { label: "Dissolved Oxygen", ideal: "≥ 5.0 mg/L",  icon: "🫧", color: T.teal,         urgency: "Critical" },
// //     { label: "pH",               ideal: "7.5 – 8.5",   icon: "⚗️", color: T.blue,         urgency: "Critical" },
// //     { label: "Ammonia (NH₃)",   ideal: "< 0.1 mg/L",  icon: "☣️", color: T.red,           urgency: "Critical" },
// //     { label: "Temperature",      ideal: "26 – 30 °C",  icon: "🌡️", color: "#f59e0b",      urgency: "High"     },
// //     { label: "Salinity",         ideal: "10 – 25 ppt", icon: "🧂", color: T.blue,         urgency: "High"     },
// //     { label: "Alkalinity",       ideal: "100–150 mg/L",icon: "🪨", color: T.teal,         urgency: "Medium"   },
// //     { label: "Nitrite (NO₂⁻)", ideal: "< 0.5 mg/L",  icon: "🔬", color: "#7c3aed",      urgency: "Medium"   },
// //     { label: "Turbidity",        ideal: "30–60 cm SD", icon: "👁️", color: T.textSecondary, urgency: "Standard" },
// //   ];

// //   const urgencyColor: Record<string,string> = { Critical: T.red, High: "#f59e0b", Medium: T.teal, Standard: T.textMuted };

// //   const soilLayers = [
// //     { name: "Water Column",       depth: "Surface – 1.7 m", color: T.tealLight,  border: T.teal,    icon: "💧", desc: "Main habitat. Precise chemistry maintained through our water treatments." },
// //     { name: "Floc / Biofilm",     depth: "0 – 2 cm",       color: "#d9f0c8",    border: T.green,   icon: "🦠", desc: "Living microbial mat. Probiotics colonise here to out-compete pathogens." },
// //     { name: "Aerobic Sediment",   depth: "2 – 5 cm",       color: "#ffe8cc",    border: "#c08040", icon: "🌬️", desc: "Active nitrification zone. Maintained by strategic paddle-wheel placement." },
// //     { name: "Anaerobic Sediment", depth: "5 – 15 cm",      color: "#f3dece",    border: "#8b5e3c", icon: "⚠️", desc: "Risk zone for H₂S and methane. Managed with zeolite and liming." },
// //     { name: "Pond Bed",           depth: "> 15 cm",        color: "#e8d5c0",    border: "#6b3f2a", icon: "🪨", desc: "Clay substrate. Sun-dried post-harvest to oxidise residual organics." },
// //   ];

// //   const monitoringSchedule = [
// //     { param: "Dissolved Oxygen",   freq: "Every 6 hours", urgency: "Critical", tool: "DO meter / probe"  },
// //     { param: "pH",                 freq: "Twice daily",   urgency: "Critical", tool: "Digital pH meter"  },
// //     { param: "Temperature",        freq: "Twice daily",   urgency: "High",     tool: "Thermometer"       },
// //     { param: "Ammonia",            freq: "Daily",         urgency: "High",     tool: "Photometric test"  },
// //     { param: "Salinity",           freq: "Daily",         urgency: "High",     tool: "Refractometer"     },
// //     { param: "Alkalinity",         freq: "Weekly",        urgency: "Medium",   tool: "Titration kit"     },
// //     { param: "Nitrite / Nitrate",  freq: "Weekly",        urgency: "Medium",   tool: "Test strips / kit" },
// //     { param: "Turbidity (Secchi)", freq: "Weekly",        urgency: "Standard", tool: "Secchi disk"       },
// //   ];

// //   const treatments = [
// //     { name: "Potassium Chloride Pro", cat: "Ionic Correction",   icon: "⚡", color: T.teal,   targets: "K⁺ deficiency · Osmoregulation", dose: "10–15 kg / ha·m" },
// //     { name: "Pond Guard Pro",         cat: "Sanitizer",          icon: "🛡️", color: T.blue,   targets: "Vibrio bloom · Bacterial load",   dose: "2–3 L / ha"      },
// //     { name: "AquaClear Probiotic",    cat: "Biological",         icon: "🦠", color: T.green,  targets: "Ammonia · Organic overload",      dose: "500 g / ha"      },
// //     { name: "pH Buffer Plus",         cat: "pH Management",      icon: "⚖️", color: T.teal,   targets: "Morning pH dip · Low alkalinity", dose: "5 kg / ha"       },
// //     { name: "ZeoFresh",               cat: "Zeolite Amendment",  icon: "🪨", color: "#a05c20",targets: "Ammonia spike · Turbidity",       dose: "20–50 kg / ha"   },
// //     { name: "OxyBoost Granules",      cat: "Emergency O₂",      icon: "🫧", color: T.teal,   targets: "Acute DO crash",                  dose: "3–5 kg / ha"     },
// //   ];

// //   return (
// //     <div style={{ minHeight: "100vh", background: T.pageBg, color: T.textPrimary, overflowX: "hidden" }}>
// //       {/* Dot grid */}
// //       <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle, ${T.blue}07 1px, transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

// //       <Topbar />

// //       {/* ══ HERO ══ */}
// //       <section style={{ position: "relative", zIndex: 1, paddingTop: 88 }}>
// //         {/* Classification bar */}
// //         <div style={{ background: T.blue, color: "#fff", padding: "7px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 10, fontFamily: "monospace", letterSpacing: 1.8, fontWeight: 600 }}>
// //           <span>DOCUMENT CLASS: SUSTAINABILITY REPORT · UNRESTRICTED</span>
// //           <span>IBP-SR-2026 · REV 3.1 · APRIL 2026</span>
// //           <span>INNOVARE BIOPHARMA LLP · HYDERABAD</span>
// //         </div>

// //         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 48px 40px", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "start" }}>
// //           {/* Left */}
// //           <div>
// //             <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
// //               <SectionTag code="§ 01" label="Mission Statement" />
// //             </motion.div>
// //             <motion.h1
// //               initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
// //               style={{ fontSize: 54, fontWeight: 900, letterSpacing: -2.5, lineHeight: 0.97, color: T.textPrimary, marginBottom: 24 }}
// //             >
// //               Science That<br />
// //               <span style={{ color: T.blue }}>Protects</span><br />
// //               the Pond.
// //             </motion.h1>
// //             <motion.p
// //               initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
// //               style={{ fontSize: 16, color: T.textSecondary, lineHeight: 1.8, maxWidth: 460, marginBottom: 32 }}
// //             >
// //               Every formula Innovare develops is stress-tested against one measure beyond efficacy: does it leave the pond — and the planet — in better condition than it found it?
// //             </motion.p>

// //             {/* KPI row */}
// //             <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.6 }}
// //               style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 36 }}>
// //               {[
// //                 { val: 40,    suf: "%",  label: "Chemical reduction",   icon: "🧪" },
// //                 { val: 92,    suf: "%",  label: "Biodegradable inputs", icon: "🌱" },
// //                 { val: 15000, suf: "+",  label: "Farmers supported",    icon: "👨‍🌾" },
// //               ].map((s,i) => (
// //                 <div key={i} style={{ padding: "16px 14px", borderRadius: 12, background: T.cardBg, border: `1px solid ${T.borderLight}`, boxShadow: "0 2px 8px rgba(15,23,42,0.06)", textAlign: "center" }}>
// //                   <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>
// //                   <div style={{ fontSize: 28, fontWeight: 900, color: T.blue, letterSpacing: -1 }}><Counter to={s.val} suffix={s.suf} /></div>
// //                   <div style={{ fontSize: 11, color: T.textMuted, marginTop: 3 }}>{s.label}</div>
// //                 </div>
// //               ))}
// //             </motion.div>

// //             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
// //               style={{ display: "flex", gap: 12, flexWrap: "wrap" as const }}>
// //               <a href="#soil" style={{ padding: "12px 28px", borderRadius: 10, background: `linear-gradient(135deg,${T.blue},#0288d1)`, color: "#fff", fontWeight: 700, fontSize: 13, textDecoration: "none", boxShadow: "0 6px 20px rgba(21,101,192,0.3)", transition: "all .25s" }}
// //                 onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
// //                 onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "none"; }}
// //               >🌍 Explore Our Science</a>
// //               <a href="#" style={{ padding: "12px 24px", borderRadius: 10, background: T.cardBg, border: `1px solid ${T.borderMed}`, color: T.textSecondary, fontWeight: 600, fontSize: 13, textDecoration: "none", transition: "all .25s" }}
// //                 onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = T.blue; el.style.color = T.blue; el.style.background = T.blueMid; }}
// //                 onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = T.borderMed; el.style.color = T.textSecondary; el.style.background = T.cardBg; }}
// //               >Download Report →</a>
// //             </motion.div>
// //           </div>

// //           {/* Right — diagram */}
// //           <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
// //             <PondDiagram />
// //             <p style={{ textAlign: "center", fontSize: 9, color: T.textMuted, marginTop: 10, fontFamily: "monospace", letterSpacing: 1 }}>FIG. 1 — POND CROSS-SECTION SCHEMATIC · NOT TO SCALE</p>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ── Rule ── */}
// //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
// //         <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "8px 0" }}>
// //           <div style={{ flex: 1, height: 1, background: T.borderLight }} />
// //           <span style={{ fontSize: 9, color: T.textMuted, letterSpacing: 3, textTransform: "uppercase" as const, fontFamily: "monospace", flexShrink: 0 }}>§ 02 · SOIL QUALITY</span>
// //           <div style={{ flex: 1, height: 1, background: T.borderLight }} />
// //         </div>
// //       </div>

// //       {/* ══ SOIL QUALITY ══ */}
// //       <section id="soil" style={{ position: "relative", zIndex: 1, padding: "48px 0 72px" }}>
// //         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
// //           <Reveal>
// //             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 20 }}>
// //               <div>
// //                 <SectionTag code="§ 02" label="Soil Quality Management" />
// //                 <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -2, color: T.textPrimary, lineHeight: 1.05 }}>The Foundation<br /><span style={{ color: T.blue }}>of Every Harvest</span></h2>
// //               </div>
// //               <p style={{ fontSize: 14, color: T.textSecondary, maxWidth: 400, lineHeight: 1.8 }}>Pond sediment is a living ecosystem. Neglected soil accumulates ammonia, hydrogen sulfide, and pathogens that cascade into crop losses. Our protocols actively restore and maintain sediment chemistry.</p>
// //             </div>
// //           </Reveal>

// //           <Reveal delay={0.08}>
// //             <div style={{ display: "flex", gap: 6, marginBottom: 28, padding: "6px", background: T.cardBg, borderRadius: 12, border: `1px solid ${T.borderLight}`, width: "fit-content", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}>
// //               <TabBtn active={soilTab==="parameters"} label="Key Parameters"   onClick={() => setSoilTab("parameters")} accent={T.blue} />
// //               <TabBtn active={soilTab==="layers"}     label="Sediment Layers"  onClick={() => setSoilTab("layers")}     accent={T.blue} />
// //               <TabBtn active={soilTab==="practices"}  label="Best Practices"   onClick={() => setSoilTab("practices")}  accent={T.blue} />
// //             </div>
// //           </Reveal>

// //           <AnimatePresence mode="wait">
// //             <motion.div key={soilTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>

// //               {soilTab === "parameters" && (
// //                 <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
// //                   {soilParams.map((p, i) => (
// //                     <div key={i} style={{ background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 16, padding: "22px 20px", boxShadow: "0 2px 8px rgba(15,23,42,0.05)", position: "relative", overflow: "hidden", transition: "all .25s" }}
// //                       onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = `${p.color}50`; el.style.transform = "translateY(-4px)"; el.style.boxShadow = `0 12px 32px rgba(21,101,192,0.1)`; }}
// //                       onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.borderLight; el.style.transform = "none"; el.style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
// //                     >
// //                       <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${p.color},${p.color}44)`, borderRadius: "16px 16px 0 0" }} />
// //                       <div style={{ position: "absolute", top: -8, right: -4, fontSize: 64, opacity: 0.04 }}>{p.icon}</div>
// //                       <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
// //                         <div style={{ width: 38, height: 38, borderRadius: 10, background: `${p.color}15`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{p.icon}</div>
// //                         <span style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary }}>{p.label}</span>
// //                       </div>
// //                       <div style={{ marginBottom: 10 }}>
// //                         <span style={{ fontSize: 9, color: T.textMuted, letterSpacing: 2, textTransform: "uppercase" as const, fontFamily: "monospace" }}>Ideal Range</span>
// //                         <p style={{ fontSize: 20, fontWeight: 800, color: p.color, letterSpacing: -0.5, marginTop: 2 }}>{p.ideal}</p>
// //                       </div>
// //                       <p style={{ fontSize: 13, color: T.textSecondary, lineHeight: 1.65 }}>{p.desc}</p>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}

// //               {soilTab === "layers" && (
// //                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 24 }}>
// //                   <div style={{ display: "flex", flexDirection: "column", gap: 0, borderRadius: 16, overflow: "hidden", border: `1px solid ${T.borderLight}`, boxShadow: "0 4px 16px rgba(15,23,42,0.07)" }}>
// //                     {soilLayers.map((layer, i) => (
// //                       <div key={i} style={{ padding: "16px 18px", background: layer.color, borderBottom: i < soilLayers.length-1 ? `1px solid ${layer.border}30` : "none", display: "flex", alignItems: "center", gap: 12, transition: "padding .2s" }}
// //                         onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = "26px"; }}
// //                         onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = "18px"; }}
// //                       >
// //                         <div style={{ width: 4, height: 36, background: layer.border, borderRadius: 4, flexShrink: 0 }} />
// //                         <div style={{ fontSize: 20, flexShrink: 0 }}>{layer.icon}</div>
// //                         <div style={{ flex: 1 }}>
// //                           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
// //                             <span style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>{layer.name}</span>
// //                             <span style={{ fontSize: 10, color: T.textMuted, fontFamily: "monospace" }}>{layer.depth}</span>
// //                           </div>
// //                           <p style={{ fontSize: 12, color: T.textSecondary, lineHeight: 1.5 }}>{layer.desc}</p>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                   <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// //                     <div style={{ padding: "20px 22px", background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 14, boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}>
// //                       <p style={{ fontSize: 11, fontWeight: 700, color: T.blue, letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 12, fontFamily: "monospace" }}>Nitrogen Cycle in Sediment</p>
// //                       {[
// //                         { from:"Feed Protein", to:"NH₃ / NH₄⁺", color:"#f59e0b", label:"Excretion & decomposition" },
// //                         { from:"NH₃ / NH₄⁺",  to:"NO₂⁻",       color:T.teal,    label:"Nitrosomonas (aerobic)" },
// //                         { from:"NO₂⁻",        to:"NO₃⁻",       color:T.blue,    label:"Nitrobacter (aerobic)"  },
// //                         { from:"NO₃⁻",        to:"N₂ gas",      color:T.green,   label:"Denitrification (anoxic)"},
// //                       ].map((step,i) => (
// //                         <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: i<3 ? `1px solid ${T.borderLight}` : "none" }}>
// //                           <span style={{ fontSize: 11, fontWeight: 700, color: step.color, fontFamily: "monospace", minWidth: 80 }}>{step.from}</span>
// //                           <span style={{ fontSize: 13, color: step.color }}>→</span>
// //                           <span style={{ fontSize: 11, fontWeight: 700, color: step.color, fontFamily: "monospace", minWidth: 70 }}>{step.to}</span>
// //                           <span style={{ fontSize: 11, color: T.textMuted, borderLeft: `1px solid ${T.borderLight}`, paddingLeft: 8 }}>{step.label}</span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                     {[
// //                       { icon:"🧬", title:"Probiotic Colonisation", color:T.green, text:"Bacillus strains dosed bi-weekly colonise the floc layer, out-competing Vibrio pathogens without antibiotics." },
// //                       { icon:"🪨", title:"Liming Protocol",        color:T.blue,  text:"Agricultural lime applied to the dry pond floor neutralises acidity, kills overwintering pathogens, and binds excess phosphorus." },
// //                       { icon:"🌬️", title:"Aeration Management",   color:T.teal,  text:"Paddle-wheel positioning ensures sediment redox stays above +100 mV across the entire pond floor." },
// //                     ].map((card,i) => (
// //                       <div key={i} style={{ padding: "15px 18px", background: T.cardBg, border: `1px solid ${T.borderLight}`, borderLeft: `3px solid ${card.color}`, borderRadius: 12, display: "flex", gap: 12, boxShadow: "0 2px 6px rgba(15,23,42,0.04)" }}>
// //                         <span style={{ fontSize: 20, flexShrink: 0 }}>{card.icon}</span>
// //                         <div>
// //                           <p style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary, marginBottom: 4 }}>{card.title}</p>
// //                           <p style={{ fontSize: 12, color: T.textSecondary, lineHeight: 1.65 }}>{card.text}</p>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               )}

// //               {soilTab === "practices" && (
// //                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
// //                   {[
// //                     { step:"01", icon:"☀️", title:"Post-harvest Sun Drying",   color:"#f59e0b", desc:"Full pond drainage and 2–3 weeks of solar drying oxidises residual organic matter, resets microbial communities, and reduces pathogen carryover." },
// //                     { step:"02", icon:"🪨", title:"Lime Application",           color:T.blue,   desc:"Agricultural lime (2–3 t/ha) broadcast across dry pond floor. Target: soil pH 7.0–7.5, elimination of acid-sulphate conditions." },
// //                     { step:"03", icon:"🌬️", title:"Aerator Grid Placement",    color:T.teal,   desc:"Paddle-wheel aerators positioned per pond geometry to ensure complete water turnover every 6 hours and sediment redox > +100 mV." },
// //                     { step:"04", icon:"🧬", title:"Probiotic Seeding",          color:T.green,  desc:"Bacillus-based consortium applied at stocking and bi-weekly thereafter. Accelerates organic decomposition and produces bacteriocins." },
// //                     { step:"05", icon:"🪣", title:"Sludge Centralisation",      color:"#a05c20",desc:"Pond slope (1% grade to central drain) channels settled sludge for periodic removal — preventing anaerobic dead zones." },
// //                     { step:"06", icon:"📊", title:"Weekly Sediment Testing",    color:T.blue,   desc:"BOD, COD, redox, and Secchi disk logged weekly. Trend analysis triggers corrective action before critical thresholds breach." },
// //                   ].map((p,i) => (
// //                     <div key={i} style={{ padding: "20px 20px", background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 14, display: "flex", gap: 14, alignItems: "flex-start", boxShadow: "0 2px 8px rgba(15,23,42,0.05)", transition: "all .25s" }}
// //                       onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = `${p.color}50`; el.style.transform = "translateX(4px)"; el.style.boxShadow = `0 6px 20px ${p.color}18`; }}
// //                       onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.borderLight; el.style.transform = "none"; el.style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
// //                     >
// //                       <div style={{ width: 44, height: 44, borderRadius: 12, background: `${p.color}12`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{p.icon}</div>
// //                       <div>
// //                         <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
// //                           <span style={{ fontSize: 9, color: p.color, fontWeight: 800, letterSpacing: 2, fontFamily: "monospace" }}>STEP {p.step}</span>
// //                           <span style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary }}>{p.title}</span>
// //                         </div>
// //                         <p style={{ fontSize: 13, color: T.textSecondary, lineHeight: 1.7 }}>{p.desc}</p>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}

// //             </motion.div>
// //           </AnimatePresence>
// //         </div>
// //       </section>

// //       {/* ── Rule ── */}
// //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
// //         <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "8px 0" }}>
// //           <div style={{ flex: 1, height: 1, background: T.borderLight }} />
// //           <span style={{ fontSize: 9, color: T.textMuted, letterSpacing: 3, textTransform: "uppercase" as const, fontFamily: "monospace", flexShrink: 0 }}>§ 03 · WATER QUALITY</span>
// //           <div style={{ flex: 1, height: 1, background: T.borderLight }} />
// //         </div>
// //       </div>

// //       {/* ══ WATER QUALITY ══ */}
// //       <section id="water" style={{ position: "relative", zIndex: 1, padding: "48px 0 72px" }}>
// //         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
// //           <Reveal>
// //             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 20 }}>
// //               <div>
// //                 <SectionTag code="§ 03" label="Water Quality Management" />
// //                 <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -2, color: T.textPrimary, lineHeight: 1.05 }}>Every Drop<br /><span style={{ color: T.teal }}>Held to a Standard</span></h2>
// //               </div>
// //               <p style={{ fontSize: 14, color: T.textSecondary, maxWidth: 400, lineHeight: 1.8 }}>Water chemistry in intensive ponds fluctuates hourly. Our treatments are precision tools — not broad-spectrum chemicals — designed to correct specific deficits without disrupting natural ecology.</p>
// //             </div>
// //           </Reveal>

// //           <Reveal delay={0.08}>
// //             <div style={{ display: "flex", gap: 6, marginBottom: 28, padding: "6px", background: T.cardBg, borderRadius: 12, border: `1px solid ${T.borderLight}`, width: "fit-content", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}>
// //               <TabBtn active={waterTab==="parameters"} label="Key Parameters"      onClick={() => setWaterTab("parameters")} accent={T.teal} />
// //               <TabBtn active={waterTab==="schedule"}   label="Monitoring Schedule" onClick={() => setWaterTab("schedule")}   accent={T.teal} />
// //               <TabBtn active={waterTab==="treatments"} label="Our Treatments"      onClick={() => setWaterTab("treatments")} accent={T.teal} />
// //             </div>
// //           </Reveal>

// //           <AnimatePresence mode="wait">
// //             <motion.div key={waterTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>

// //               {waterTab === "parameters" && (
// //                 <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
// //                   {waterParams.map((p, i) => (
// //                     <div key={i} style={{ background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 14, padding: "20px 18px", boxShadow: "0 2px 8px rgba(15,23,42,0.05)", position: "relative", overflow: "hidden", transition: "all .25s" }}
// //                       onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = `${p.color}50`; el.style.transform = "translateY(-4px)"; el.style.boxShadow = `0 12px 30px rgba(15,23,42,0.1)`; }}
// //                       onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.borderLight; el.style.transform = "none"; el.style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
// //                     >
// //                       <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: p.color, borderRadius: "14px 14px 0 0" }} />
// //                       <div style={{ position: "absolute", top: 10, right: 10 }}>
// //                         <span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 5, background: `${urgencyColor[p.urgency]}18`, color: urgencyColor[p.urgency], fontWeight: 700, letterSpacing: 0.5, fontFamily: "monospace" }}>{p.urgency}</span>
// //                       </div>
// //                       <div style={{ fontSize: 24, marginBottom: 12, marginTop: 4 }}>{p.icon}</div>
// //                       <p style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary, marginBottom: 8 }}>{p.label}</p>
// //                       <div>
// //                         <span style={{ fontSize: 9, color: T.textMuted, letterSpacing: 2, textTransform: "uppercase" as const, fontFamily: "monospace" }}>Target</span>
// //                         <p style={{ fontSize: 16, fontWeight: 800, color: p.color, letterSpacing: -0.3, marginTop: 2 }}>{p.ideal}</p>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}

// //               {waterTab === "schedule" && (
// //                 <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 20 }}>
// //                   <div style={{ background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 16px rgba(15,23,42,0.07)" }}>
// //                     <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1.2fr 1fr 1fr", padding: "12px 20px", background: `linear-gradient(135deg,${T.blue},${T.teal})` }}>
// //                       {["Parameter","Frequency","Urgency","Tool"].map(h => (
// //                         <span key={h} style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: 1.5, textTransform: "uppercase" as const, fontFamily: "monospace" }}>{h}</span>
// //                       ))}
// //                     </div>
// //                     {monitoringSchedule.map((row,i) => (
// //                       <div key={i} style={{ display: "grid", gridTemplateColumns: "1.5fr 1.2fr 1fr 1fr", padding: "11px 20px", background: i%2===0 ? T.surfaceBg : T.cardBg, borderTop: `1px solid ${T.borderLight}`, alignItems: "center", transition: "background .2s" }}
// //                         onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = T.blueMid; }}
// //                         onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = i%2===0 ? T.surfaceBg : T.cardBg; }}
// //                       >
// //                         <span style={{ fontSize: 13, color: T.textPrimary, fontWeight: 500 }}>{row.param}</span>
// //                         <span style={{ fontSize: 12, color: T.textSecondary }}>{row.freq}</span>
// //                         <span style={{ fontSize: 9, padding: "2px 8px", borderRadius: 5, background: `${urgencyColor[row.urgency]}15`, color: urgencyColor[row.urgency], fontWeight: 700, letterSpacing: 0.5, width: "fit-content", fontFamily: "monospace" }}>{row.urgency}</span>
// //                         <span style={{ fontSize: 11, color: T.textMuted }}>{row.tool}</span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                   <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// //                     <div style={{ padding: "20px 20px", background: "#fff5f5", border: `1px solid #fecaca`, borderLeft: `4px solid ${T.red}`, borderRadius: 14 }}>
// //                       <p style={{ fontSize: 11, fontWeight: 800, color: T.red, letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 12, fontFamily: "monospace" }}>🚨 Emergency Thresholds</p>
// //                       {[
// //                         { t:"DO < 3.0 mg/L",     a:"Activate all aerators. Stop feeding immediately."  },
// //                         { t:"pH < 7.0 or > 9.2", a:"Lime or water exchange correction within 2 hours." },
// //                         { t:"NH₃ > 0.5 mg/L",    a:"50% water exchange + emergency probiotic dose."    },
// //                         { t:"NO₂⁻ > 1.0 mg/L",  a:"Salt addition 5 ppt + maximum aeration."           },
// //                       ].map((a,i) => (
// //                         <div key={i} style={{ padding: "8px 0", borderBottom: i<3 ? "1px solid #fee2e2" : "none" }}>
// //                           <p style={{ fontSize: 12, fontWeight: 700, color: T.red, fontFamily: "monospace" }}>{a.t}</p>
// //                           <p style={{ fontSize: 12, color: T.textSecondary, marginTop: 2 }}>{a.a}</p>
// //                         </div>
// //                       ))}
// //                     </div>
// //                     <div style={{ padding: "20px 20px", background: T.tealLight, border: `1px solid #bae6fd`, borderLeft: `4px solid ${T.teal}`, borderRadius: 14 }}>
// //                       <p style={{ fontSize: 11, fontWeight: 800, color: T.teal, letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 12, fontFamily: "monospace" }}>💡 Pro Tips</p>
// //                       {[
// //                         "Measure DO at dawn — the natural daily minimum.",
// //                         "Calibrate probes weekly; drift kills faster than disease.",
// //                         "Post-rain: check salinity & pH within 30 minutes.",
// //                         "Log all readings digitally — trends matter more than snapshots.",
// //                       ].map((tip,i) => (
// //                         <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "6px 0", borderBottom: i<3 ? "1px solid rgba(8,145,178,0.15)" : "none" }}>
// //                           <div style={{ width: 5, height: 5, borderRadius: "50%", background: T.teal, marginTop: 5, flexShrink: 0 }} />
// //                           <p style={{ fontSize: 12, color: T.textSecondary, lineHeight: 1.6 }}>{tip}</p>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}

// //               {waterTab === "treatments" && (
// //                 <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
// //                   {treatments.map((prod,i) => (
// //                     <div key={i} style={{ background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 16, padding: "22px 20px", boxShadow: "0 2px 8px rgba(15,23,42,0.05)", position: "relative", overflow: "hidden", transition: "all .25s" }}
// //                       onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = `${prod.color}50`; el.style.transform = "translateY(-4px)"; el.style.boxShadow = `0 14px 36px rgba(15,23,42,0.1)`; }}
// //                       onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.borderLight; el.style.transform = "none"; el.style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
// //                     >
// //                       <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: prod.color, borderRadius: "16px 16px 0 0" }} />
// //                       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
// //                         <div style={{ width: 42, height: 42, borderRadius: 12, background: `${prod.color}15`, border: `1px solid ${prod.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{prod.icon}</div>
// //                         <span style={{ fontSize: 9, padding: "3px 9px", borderRadius: 5, background: `${prod.color}12`, color: prod.color, fontWeight: 700, letterSpacing: 0.5, fontFamily: "monospace" }}>{prod.cat}</span>
// //                       </div>
// //                       <h4 style={{ fontSize: 15, fontWeight: 800, color: T.textPrimary, marginBottom: 8 }}>{prod.name}</h4>
// //                       <div style={{ marginBottom: 10 }}>
// //                         <span style={{ fontSize: 9, color: T.textMuted, textTransform: "uppercase" as const, letterSpacing: 1.5, fontFamily: "monospace" }}>Targets</span>
// //                         <p style={{ fontSize: 12, color: T.textSecondary, marginTop: 3 }}>{prod.targets}</p>
// //                       </div>
// //                       <div style={{ padding: "8px 14px", background: `${prod.color}10`, border: `1px solid ${prod.color}25`, borderRadius: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// //                         <span style={{ fontSize: 10, color: T.textMuted, fontFamily: "monospace" }}>Typical dose</span>
// //                         <span style={{ fontSize: 13, fontWeight: 700, color: prod.color, fontFamily: "monospace" }}>{prod.dose}</span>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}

// //             </motion.div>
// //           </AnimatePresence>
// //         </div>
// //       </section>

// //       {/* ══ CERTIFICATIONS ══ */}
// //       <section style={{ background: T.cardBg, borderTop: `1px solid ${T.borderLight}`, borderBottom: `1px solid ${T.borderLight}`, padding: "56px 48px", position: "relative", zIndex: 1 }}>
// //         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
// //           <Reveal>
// //             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 40 }}>
// //               <div>
// //                 <SectionTag code="§ 04" label="Accreditations" />
// //                 <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: -1.5, color: T.textPrimary }}>Independently Verified</h2>
// //                 <p style={{ fontSize: 14, color: T.textSecondary, marginTop: 6, maxWidth: 340, lineHeight: 1.7 }}>Every sustainability claim is backed by third-party audit, not marketing copy.</p>
// //               </div>
// //               <div style={{ display: "flex", gap: 14, flexWrap: "wrap" as const }}>
// //                 {[
// //                   { label:"GMP+",            body:"Feed Safety",        icon:"✅", color:T.green },
// //                   { label:"ISO 9001:2015",   body:"Quality Mgmt",       icon:"🏅", color:T.blue  },
// //                   { label:"ISO 14001",       body:"Environmental Mgmt", icon:"🌍", color:T.teal  },
// //                   { label:"HACCP",           body:"Food Safety",        icon:"🔬", color:T.blue  },
// //                   { label:"Export Approved", body:"MPEDA / EIC",        icon:"🚢", color:T.teal  },
// //                 ].map((cert,i) => (
// //                   <div key={i} style={{ padding: "16px 20px", background: T.surfaceBg, border: `1px solid ${T.borderLight}`, borderTop: `3px solid ${cert.color}`, borderRadius: 12, textAlign: "center", minWidth: 120, transition: "all .25s" }}
// //                     onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-3px)"; el.style.boxShadow = `0 8px 24px ${cert.color}20`; }}
// //                     onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "none"; el.style.boxShadow = "none"; }}
// //                   >
// //                     <div style={{ fontSize: 24, marginBottom: 6 }}>{cert.icon}</div>
// //                     <p style={{ fontSize: 13, fontWeight: 800, color: cert.color }}>{cert.label}</p>
// //                     <p style={{ fontSize: 11, color: T.textMuted, marginTop: 3 }}>{cert.body}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </Reveal>
// //         </div>
// //       </section>

// //       {/* ══ CTA ══ */}
// //       <section style={{ position: "relative", zIndex: 1, padding: "80px 48px" }}>
// //         <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(ellipse 60% 80% at 50% 50%, ${T.blueLight} 0%, transparent 65%)`, pointerEvents: "none" }} />
// //         <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative" }}>
// //           <Reveal>
// //             <SectionTag code="§ 05" label="Take Action" />
// //             <h2 style={{ fontSize: 42, fontWeight: 900, letterSpacing: -2, color: T.textPrimary, lineHeight: 1.05, marginBottom: 16 }}>Ready to Farm<br /><span style={{ color: T.blue }}>More Responsibly?</span></h2>
// //             <p style={{ fontSize: 15, color: T.textSecondary, lineHeight: 1.8, marginBottom: 36 }}>Our technical team will build a tailored soil and water management protocol for your farm — at no cost. Backed by data, not guesswork.</p>
// //             <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const }}>
// //               <button style={{ padding: "14px 36px", borderRadius: 12, background: `linear-gradient(135deg,${T.blue},#0288d1)`, color: "#fff", fontWeight: 800, fontSize: 14, border: "none", cursor: "pointer", boxShadow: "0 8px 28px rgba(21,101,192,0.3)", transition: "all .25s" }}
// //                 onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 14px 40px rgba(21,101,192,0.4)"; }}
// //                 onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 28px rgba(21,101,192,0.3)"; }}
// //               >Request a Free Consultation</button>
// //               <button style={{ padding: "14px 30px", borderRadius: 12, background: T.cardBg, border: `1px solid ${T.borderMed}`, color: T.textSecondary, fontWeight: 600, fontSize: 14, cursor: "pointer", transition: "all .25s" }}
// //                 onMouseEnter={e => { const el = e.currentTarget as HTMLButtonElement; el.style.borderColor = T.blue; el.style.color = T.blue; el.style.background = T.blueMid; }}
// //                 onMouseLeave={e => { const el = e.currentTarget as HTMLButtonElement; el.style.borderColor = T.borderMed; el.style.color = T.textSecondary; el.style.background = T.cardBg; }}
// //               >Download Sustainability Report →</button>
// //             </div>
// //           </Reveal>
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   );
// // }
// "use client";
// import { useState, useRef, useEffect } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

// // ✅ FIXED HERE
// import Footer from "@/components/Footer";
// /* ══════════════════════════════════════════════════
//    BRAND THEME — exact tokens from ProductDetails
// ══════════════════════════════════════════════════ */
// const T = {
//   pageBg:        "#f0f4f8",
//   cardBg:        "#ffffff",
//   surfaceBg:     "#f8fafc",
//   imagePanelBg:  "#eef4fb",
//   borderLight:   "#e2e8f0",
//   borderMed:     "#cbd5e1",
//   blue:          "#1565c0",
//   blueDark:      "#0d47a1",
//   blueLight:     "#dbeafe",
//   blueMid:       "#eff6ff",
//   teal:          "#0891b2",
//   tealLight:     "#e0f2fe",
//   textPrimary:   "#0f172a",
//   textSecondary: "#475569",
//   textMuted:     "#94a3b8",
//   green:         "#15803d",
//   greenBg:       "#f0fdf4",
//   greenBorder:   "#bbf7d0",
//   amber:         "#92400e",
//   amberBg:       "#fffbeb",
//   amberBorder:   "#fcd34d",
//   red:           "#dc2626",
//   footerBg:      "#0f172a",
//   footerTeal:    "#38bdf8",
// };

// /* ══════════════════════════════════════════════════
//    ANIMATED COUNTER
// ══════════════════════════════════════════════════ */
// function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
//   const [val, setVal] = useState(0);
//   const ref = useRef<HTMLSpanElement>(null);
//   const inView = useInView(ref, { once: true });
//   useEffect(() => {
//     if (!inView) return;
//     let s = 0;
//     const inc = to / (1600 / 16);
//     const id = setInterval(() => {
//       s += inc;
//       if (s >= to) { setVal(to); clearInterval(id); }
//       else setVal(Math.floor(s));
//     }, 16);
//     return () => clearInterval(id);
//   }, [inView, to]);
//   return <span ref={ref}>{val}{suffix}</span>;
// }

// /* ══════════════════════════════════════════════════
//    SCROLL REVEAL
// ══════════════════════════════════════════════════ */
// function Reveal({ children, delay = 0, x = 0, y = 24 }: {
//   children: React.ReactNode; delay?: number; x?: number; y?: number;
// }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });
//   return (
//     <motion.div ref={ref}
//       initial={{ opacity: 0, x, y }}
//       animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
//       transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
//     >{children}</motion.div>
//   );
// }

// /* ══════════════════════════════════════════════════
//    SECTION TAG — dossier label style
// ══════════════════════════════════════════════════ */
// function SectionTag({ code, label }: { code: string; label: string }) {
//   return (
//     <div style={{ display: "inline-flex", alignItems: "stretch", marginBottom: 20, borderRadius: 7, overflow: "hidden", boxShadow: `0 2px 8px rgba(21,101,192,0.12)` }}>
//       <div style={{ padding: "4px 12px", background: T.blue, color: "#fff", fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" as const, fontFamily: "monospace", display: "flex", alignItems: "center" }}>{code}</div>
//       <div style={{ padding: "4px 14px", background: T.blueLight, color: T.blue, fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" as const, fontFamily: "monospace", display: "flex", alignItems: "center" }}>{label}</div>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════════
//    TAB BUTTON
// ══════════════════════════════════════════════════ */
// function TabBtn({ active, label, onClick, accent }: { active: boolean; label: string; onClick: () => void; accent: string }) {
//   return (
//     <button onClick={onClick} style={{
//       padding: "8px 20px", fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer",
//       borderRadius: 8, transition: "all .22s",
//       background: active ? `linear-gradient(135deg,${accent},${accent}cc)` : T.surfaceBg,
//       color: active ? "#fff" : T.textSecondary,
//       boxShadow: active ? `0 4px 14px ${accent}40` : "none",
//     }}>{label}</button>
//   );
// }

// /* ══════════════════════════════════════════════════
//    POND CROSS-SECTION SVG DIAGRAM
// ══════════════════════════════════════════════════ */
// function PondDiagram() {
//   return (
//     <div style={{ position: "relative", width: "100%", maxWidth: 780, margin: "0 auto" }}>
//       <div style={{
//         border: `2px solid ${T.borderMed}`, borderRadius: 16, overflow: "hidden",
//         boxShadow: "0 20px 60px rgba(21,101,192,0.12), 0 4px 16px rgba(15,23,42,0.08)",
//         background: "#fff",
//       }}>
//         {/* Report header bar */}
//         <div style={{ padding: "9px 20px", background: T.surfaceBg, borderBottom: `1px solid ${T.borderLight}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <span style={{ fontSize: 9, fontWeight: 700, color: T.textMuted, letterSpacing: 2, textTransform: "uppercase" as const, fontFamily: "monospace" }}>FIG. 1 — POND CROSS-SECTION · INNOVARE BIOPHARMA LLP</span>
//           <span style={{ fontSize: 9, color: T.textMuted, fontFamily: "monospace" }}>REF: IBP-SUS-2026</span>
//         </div>

//         <svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
//           <defs>
//             <linearGradient id="skyG"      x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f0f9ff" /><stop offset="100%" stopColor="#e0f2fe" /></linearGradient>
//             <linearGradient id="waterG"    x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={T.tealLight} stopOpacity="0.9" /><stop offset="100%" stopColor={T.blueMid} /></linearGradient>
//             <linearGradient id="aerobicG"  x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ffe8cc" /><stop offset="100%" stopColor="#d4a060" /></linearGradient>
//             <linearGradient id="anaerobicG"x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c09070" /><stop offset="100%" stopColor="#8b5e3c" /></linearGradient>
//             <linearGradient id="bedG"      x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7a4a2a" /><stop offset="100%" stopColor="#4a2c12" /></linearGradient>
//             <pattern id="bubP" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
//               <circle cx="10" cy="30" r="2" fill={T.teal} opacity="0.22" />
//               <circle cx="28" cy="14" r="1.5" fill={T.teal} opacity="0.16" />
//               <circle cx="5"  cy="8"  r="1"   fill={T.teal} opacity="0.13" />
//             </pattern>
//             <marker id="arrowM" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
//               <path d="M0,0 L6,3 L0,6 Z" fill={T.teal} opacity="0.5" />
//             </marker>
//           </defs>

//           {/* Sky */}
//           <rect x="0" y="0" width="760" height="38" fill="url(#skyG)" />
//           {/* Sun */}
//           <circle cx="706" cy="18" r="11" fill="#fbbf24" opacity="0.85" />
//           {[0,45,90,135,180,225,270,315].map((a,i) => (
//             <line key={i} x1={706+Math.cos(a*Math.PI/180)*14} y1={18+Math.sin(a*Math.PI/180)*14} x2={706+Math.cos(a*Math.PI/180)*17} y2={18+Math.sin(a*Math.PI/180)*17} stroke="#fbbf24" strokeWidth="1.5" opacity="0.55" />
//           ))}

//           {/* Berms */}
//           <polygon points="0,38 82,38 122,62 122,340 0,340" fill="#a09070" opacity="0.45" />
//           <polygon points="760,38 678,38 638,62 638,340 760,340" fill="#a09070" opacity="0.45" />

//           {/* Water */}
//           <rect x="122" y="38" width="516" height="168" fill="url(#waterG)" opacity="0.88" />
//           <rect x="122" y="38" width="516" height="168" fill="url(#bubP)" />
//           {/* Ripples */}
//           <path d="M132,44 Q200,38 270,44 Q340,50 412,44 Q482,38 550,44 Q604,48 628,44" stroke={T.teal} strokeWidth="1.2" fill="none" opacity="0.4" />
//           <path d="M132,51 Q190,46 252,51 Q320,57 390,50 Q460,44 530,51 Q590,55 628,51" stroke={T.teal} strokeWidth="0.7" fill="none" opacity="0.25" />

//           {/* Shrimp */}
//           {[[225,108],[390,130],[515,100],[305,152],[460,80]].map(([cx,cy],i) => (
//             <g key={i} opacity="0.5">
//               <ellipse cx={cx} cy={cy} rx="10" ry="5" fill={T.teal} opacity="0.65" transform={`rotate(-20,${cx},${cy})`} />
//               <circle cx={cx+8} cy={cy-2} r="1.8" fill={T.teal} opacity="0.55" />
//               <line x1={cx+9} y1={cy-3} x2={cx+15} y2={cy-6} stroke={T.teal} strokeWidth="0.7" opacity="0.5" />
//               <line x1={cx+9} y1={cy-1} x2={cx+15} y2={cy-1} stroke={T.teal} strokeWidth="0.7" opacity="0.5" />
//             </g>
//           ))}

//           {/* Aerator */}
//           <rect x="356" y="40" width="48" height="5" rx="2.5" fill={T.blue} opacity="0.65" />
//           <rect x="377" y="34" width="6" height="28" rx="2" fill={T.blue} opacity="0.5" />
//           <circle cx="380" cy="34" r="4" fill={T.blue} opacity="0.8" />
//           {[-14,-7,0,7,14].map((dx,i) => (
//             <line key={i} x1={380+dx} y1={45} x2={380+dx*1.5} y2={66} stroke="#bae6fd" strokeWidth="1" opacity="0.45" strokeDasharray="2,2" />
//           ))}

//           {/* Floc layer */}
//           <rect x="122" y="206" width="516" height="10" fill="#c8e6a0" opacity="0.75" />
//           <path d="M122,206 Q200,203 280,206 Q360,209 440,206 Q520,203 638,206" stroke="#6aaa50" strokeWidth="0.9" fill="none" opacity="0.55" />

//           {/* Aerobic sediment */}
//           <rect x="122" y="216" width="516" height="36" fill="url(#aerobicG)" opacity="0.85" />

//           {/* Anaerobic sediment */}
//           <rect x="122" y="252" width="516" height="32" fill="url(#anaerobicG)" opacity="0.88" />

//           {/* Pond bed */}
//           <rect x="122" y="284" width="516" height="56" fill="url(#bedG)" />

//           {/* Left ruler */}
//           <line x1="108" y1="38" x2="108" y2="300" stroke={T.borderMed} strokeWidth="0.8" />
//           {[{y:38,l:"0 m"},{y:100,l:"0.6m"},{y:160,l:"1.2m"},{y:206,l:"1.7m"},{y:252,l:"▸ ana"},{y:284,l:"▸ bed"}].map((t,i) => (
//             <g key={i}>
//               <line x1="108" y1={t.y} x2="122" y2={t.y} stroke={T.textMuted} strokeWidth="0.8" />
//               <text x="105" y={t.y+4} textAnchor="end" fontSize="7" fill={T.textMuted} fontFamily="monospace">{t.l}</text>
//             </g>
//           ))}

//           {/* Right callout lines */}
//           {[
//             {y:118, label:"Water Column",         sub:"DO · pH · Temp · Salinity",   color:T.blue },
//             {y:211, label:"Floc / Biofilm",        sub:"Active microbial zone",        color:"#5a8f45"},
//             {y:234, label:"Aerobic Sediment",      sub:"+50 to +200 mV redox",        color:"#a07040"},
//             {y:268, label:"Anaerobic Sediment",    sub:"H₂S risk — managed daily",    color:"#7a4a28"},
//             {y:306, label:"Pond Bed",              sub:"Clay · post-harvest drying",  color:"#5c3317"},
//           ].map((l,i) => (
//             <g key={i}>
//               <line x1="638" y1={l.y} x2="656" y2={l.y} stroke={l.color} strokeWidth="0.9" strokeDasharray="3,2" opacity="0.65" />
//               <line x1="656" y1={l.y} x2="660" y2={l.y} stroke={l.color} strokeWidth="2" opacity="0.85" />
//               <text x="663" y={l.y-2}  fontSize="8.5" fill={T.textPrimary} fontWeight="700" fontFamily="monospace">{l.label}</text>
//               <text x="663" y={l.y+8}  fontSize="7"   fill={T.textSecondary} fontFamily="monospace">{l.sub}</text>
//             </g>
//           ))}

//           {/* O2 arrow */}
//           <path d="M380,66 L380,200" stroke={T.teal} strokeWidth="1" strokeDasharray="4,3" opacity="0.3" markerEnd="url(#arrowM)" />
//           <text x="385" y="140" fontSize="8" fill={T.teal} fontFamily="monospace" opacity="0.65">O₂ ↓</text>

//           {/* Probe icons */}
//           <rect x="242" y="50" width="5" height="26" rx="2.5" fill={T.blue} opacity="0.55" />
//           <rect x="239" y="48" width="11" height="5" rx="2" fill={T.blue} opacity="0.8" />
//           <text x="253" y="60" fontSize="7" fill={T.blue} fontFamily="monospace" opacity="0.75">pH probe</text>
//           <rect x="488" y="66" width="5" height="20" rx="2.5" fill={T.teal} opacity="0.55" />
//           <rect x="485" y="64" width="11" height="5" rx="2" fill={T.teal} opacity="0.8" />
//           <text x="499" y="73" fontSize="7" fill={T.teal} fontFamily="monospace" opacity="0.75">DO sensor</text>

//           {/* Caption */}
//           <rect x="0" y="326" width="760" height="14" fill={T.surfaceBg} />
//           <text x="380" y="336" textAnchor="middle" fontSize="7" fill={T.textMuted} fontFamily="monospace">Schematic cross-section of intensive shrimp pond · Not to scale · © Innovare Biopharma LLP 2026</text>
//         </svg>
//       </div>
//       {/* Corner pins */}
//       {[0,1,2,3].map(i => (
//         <div key={i} style={{ position: "absolute", top: i < 2 ? -5 : "auto", bottom: i >= 2 ? -5 : "auto", left: i%2===0 ? -5 : "auto", right: i%2!==0 ? -5 : "auto", width: 10, height: 10, borderRadius: "50%", background: T.blue, boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${T.blueLight}` }} />
//       ))}
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════════
//    TOPBAR — shared with ProductDetails
// ══════════════════════════════════════════════════ */
// function Topbar() {
//   return (
//     <div style={{
//       position: "sticky", top: 0, zIndex: 30,
//       background: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)",
//       borderBottom: `1px solid ${T.borderLight}`,
//       padding: "0 40px",
//       display: "flex", alignItems: "center", justifyContent: "space-between", height: 64,
//       boxShadow: "0 1px 3px rgba(15,23,42,0.06)",
//     }}>
//       <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//         <div style={{ width: 34, height: 34, borderRadius: 8, background: T.blue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🦐</div>
//         <span style={{ fontSize: 15, fontWeight: 800, color: T.textPrimary }}>Innovare Biopharma</span>
//         <span style={{ fontSize: 10, color: T.teal, letterSpacing: 2, textTransform: "uppercase" as const, marginTop: 2 }}>LLP</span>
//       </div>
//       <nav style={{ display: "flex", gap: 28 }}>
//         {["Products", "Solutions", "About", "Contact"].map(n => (
//           <a key={n} href="#" style={{ fontSize: 13, color: T.textSecondary, textDecoration: "none", transition: "color .2s", fontWeight: 500 }}
//             onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = T.blue; }}
//             onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = T.textSecondary; }}
//           >{n}</a>
//         ))}
//       </nav>
//       <a href="#" style={{
//         position: "relative", background: T.blueMid,
//         border: `1px solid ${T.blueLight}`,
//         borderRadius: 10, padding: "8px 16px",
//         color: T.blue, cursor: "pointer",
//         display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600,
//         textDecoration: "none", transition: "all .2s",
//       }}
//         onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = T.blueLight; }}
//         onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = T.blueMid; }}
//       >
//         📞 Contact Us
//       </a>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════════
//    FOOTER — shared with ProductDetails
// ══════════════════════════════════════════════════ */
// // function Footer() {
// //   const navy = "#0f172a";
// //   const blue = T.blue;
// //   const teal = T.footerTeal;

// //   const cols = [
// //     { title: "Solutions", links: ["Feed Supplements", "Sanitizers", "Water Treatments", "Growth Promoters", "Vitamins & Minerals"] },
// //     { title: "Company",   links: ["About Us", "Our Story", "Sustainability", "Careers", "News"] },
// //     { title: "Support",   links: ["Technical Helpdesk", "Product Catalogue", "FAQs", "Contact Us", "Partner Portal"] },
// //   ];

// //   return (
// //     <footer style={{ background: navy, borderTop: "1px solid rgba(56,189,248,0.12)", marginTop: 0 }}>
// //       {/* newsletter band */}
// //       <div style={{ background: "rgba(21,101,192,0.12)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "22px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
// //         <div>
// //           <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Subscribe to our Aqua Insights Newsletter</p>
// //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Science-backed tips, product launches & exclusive offers.</p>
// //         </div>
// //         <div style={{ display: "flex", gap: 0, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", flexShrink: 0 }}>
// //           <input type="email" placeholder="your@email.com" style={{ padding: "11px 18px", background: "rgba(255,255,255,0.05)", border: "none", color: "#fff", fontSize: 13, outline: "none", width: 220 }} />
// //           <button style={{ padding: "11px 22px", background: `linear-gradient(135deg,${blue},#0288d1)`, color: "#fff", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13 }}>Subscribe</button>
// //         </div>
// //       </div>

// //       {/* main grid */}
// //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px 40px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
// //         <div>
// //           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
// //             <img src="/images/logo.png" alt="Innovare Logo" style={{ width: 60, height: 60, borderRadius: 10, objectFit: "cover" as const, padding: 2 }} />
// //             <div>
// //               <p style={{ fontSize: 18, fontWeight: 800, color: "#fff", lineHeight: 1 }}>Innovare Biopharma</p>
// //               <p style={{ fontSize: 12, color: teal, letterSpacing: 2, textTransform: "uppercase" as const }}>LLP</p>
// //             </div>
// //           </div>
// //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.85, maxWidth: 260, fontWeight: 300 }}>
// //             India's innovative manufacturer & exporter of aquaculture healthcare products. From hatchery to harvest.
// //           </p>
// //           <div style={{ marginTop: 24, display: "flex", flexDirection: "column" as const, gap: 8 }}>
// //             {[
// //               { icon: "📍", text: "Hyderabad, Telangana, India" },
// //               { icon: "📧", text: "info@innovarebiopharma.com" },
// //               { icon: "📞", text: "+91 40 XXXX XXXX" },
// //             ].map(c => (
// //               <div key={c.text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
// //                 <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>{c.icon}</span>
// //                 <span style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", lineHeight: 1.6 }}>{c.text}</span>
// //               </div>
// //             ))}
// //           </div>
// //           <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
// //             {[
// //               { icon: <Linkedin size={16} />, link: "#" },
// //               { icon: <Twitter size={16} />,  link: "#" },
// //               { icon: <Youtube size={16} />,  link: "#" },
// //               { icon: <Facebook size={16} />, link: "#" },
// //             ].map((item, i) => (
// //               <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
// //                 style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", transition: "all 0.3s" }}
// //                 onMouseEnter={e => { const el = e.currentTarget; el.style.background = blue; el.style.color = "#fff"; el.style.transform = "translateY(-2px)"; }}
// //                 onMouseLeave={e => { const el = e.currentTarget; el.style.background = "rgba(255,255,255,0.05)"; el.style.color = "rgba(255,255,255,0.6)"; el.style.transform = "none"; }}
// //               >{item.icon}</a>
// //             ))}
// //           </div>
// //         </div>

// //         {cols.map(col => (
// //           <div key={col.title}>
// //             <h4 style={{ fontSize: 11, fontWeight: 700, color: teal, letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 20 }}>{col.title}</h4>
// //             <div style={{ display: "flex", flexDirection: "column" as const, gap: 11 }}>
// //               {col.links.map(link => (
// //                 <a key={link} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color .2s" }}
// //                   onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = teal; }}
// //                   onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)"; }}>
// //                   {link}
// //                 </a>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* bottom bar */}
// //       <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "18px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
// //         <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© 2026 Innovare Biopharma LLP. All rights reserved.</p>
// //         <div style={{ display: "flex", gap: 24 }}>
// //           {["Privacy Policy", "Terms of Use", "Cookie Policy"].map(t => (
// //             <a key={t} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.22)", textDecoration: "none" }}>{t}</a>
// //           ))}
// //         </div>
// //         <div style={{ display: "flex", gap: 8 }}>
// //           {["GMP Certified", "ISO 9001", "Export Approved"].map(c => (
// //             <span key={c} style={{ fontSize: 10, padding: "3px 10px", borderRadius: 4, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.25)", color: teal, letterSpacing: 1, fontWeight: 600 }}>{c}</span>
// //           ))}
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// /* ══════════════════════════════════════════════════
//    MAIN PAGE
// ══════════════════════════════════════════════════ */
// export default function SustainabilityPage() {
//   const [soilTab, setSoilTab]   = useState<"parameters"|"layers"|"practices">("parameters");
//   const [waterTab, setWaterTab] = useState<"parameters"|"schedule"|"treatments">("parameters");

//   const soilParams = [
//     { label: "Soil pH",           ideal: "6.5 – 7.5",     icon: "⚖️", color: T.blue,   desc: "Prevents nutrient lock-up; eliminates acid-sulphate toxicity risk." },
//     { label: "Organic Matter",    ideal: "2 – 4 %",        icon: "🌱", color: T.green,  desc: "Sustains beneficial microbial biomass without triggering hypoxia." },
//     { label: "Redox Potential",   ideal: "+50 to +200 mV", icon: "⚡", color: T.teal,   desc: "Aerobic sediment suppresses H₂S generation and anaerobic fermentation." },
//     { label: "Phosphorus",        ideal: "20 – 40 ppm",    icon: "💊", color: T.blue,   desc: "Supports phytoplankton without driving eutrophication events." },
//     { label: "Hydrogen Sulfide",  ideal: "< 0.01 mg/L",   icon: "⚠️", color: T.red,    desc: "Lethal at trace levels; managed via aeration and liming protocols." },
//     { label: "Silt Content",      ideal: "< 30 %",         icon: "🪴", color: "#a05c20",desc: "Limits resuspension events that devastate water clarity and gill function." },
//   ];

//   const waterParams = [
//     { label: "Dissolved Oxygen", ideal: "≥ 5.0 mg/L",  icon: "🫧", color: T.teal,         urgency: "Critical" },
//     { label: "pH",               ideal: "7.5 – 8.5",   icon: "⚗️", color: T.blue,         urgency: "Critical" },
//     { label: "Ammonia (NH₃)",   ideal: "< 0.1 mg/L",  icon: "☣️", color: T.red,           urgency: "Critical" },
//     { label: "Temperature",      ideal: "26 – 30 °C",  icon: "🌡️", color: "#f59e0b",      urgency: "High"     },
//     { label: "Salinity",         ideal: "10 – 25 ppt", icon: "🧂", color: T.blue,         urgency: "High"     },
//     { label: "Alkalinity",       ideal: "100–150 mg/L",icon: "🪨", color: T.teal,         urgency: "Medium"   },
//     { label: "Nitrite (NO₂⁻)", ideal: "< 0.5 mg/L",  icon: "🔬", color: "#7c3aed",      urgency: "Medium"   },
//     { label: "Turbidity",        ideal: "30–60 cm SD", icon: "👁️", color: T.textSecondary, urgency: "Standard" },
//   ];

//   const urgencyColor: Record<string,string> = { Critical: T.red, High: "#f59e0b", Medium: T.teal, Standard: T.textMuted };

//   const soilLayers = [
//     { name: "Water Column",       depth: "Surface – 1.7 m", color: T.tealLight,  border: T.teal,    icon: "💧", desc: "Main habitat. Precise chemistry maintained through our water treatments." },
//     { name: "Floc / Biofilm",     depth: "0 – 2 cm",       color: "#d9f0c8",    border: T.green,   icon: "🦠", desc: "Living microbial mat. Probiotics colonise here to out-compete pathogens." },
//     { name: "Aerobic Sediment",   depth: "2 – 5 cm",       color: "#ffe8cc",    border: "#c08040", icon: "🌬️", desc: "Active nitrification zone. Maintained by strategic paddle-wheel placement." },
//     { name: "Anaerobic Sediment", depth: "5 – 15 cm",      color: "#f3dece",    border: "#8b5e3c", icon: "⚠️", desc: "Risk zone for H₂S and methane. Managed with zeolite and liming." },
//     { name: "Pond Bed",           depth: "> 15 cm",        color: "#e8d5c0",    border: "#6b3f2a", icon: "🪨", desc: "Clay substrate. Sun-dried post-harvest to oxidise residual organics." },
//   ];

//   const monitoringSchedule = [
//     { param: "Dissolved Oxygen",   freq: "Every 6 hours", urgency: "Critical", tool: "DO meter / probe"  },
//     { param: "pH",                 freq: "Twice daily",   urgency: "Critical", tool: "Digital pH meter"  },
//     { param: "Temperature",        freq: "Twice daily",   urgency: "High",     tool: "Thermometer"       },
//     { param: "Ammonia",            freq: "Daily",         urgency: "High",     tool: "Photometric test"  },
//     { param: "Salinity",           freq: "Daily",         urgency: "High",     tool: "Refractometer"     },
//     { param: "Alkalinity",         freq: "Weekly",        urgency: "Medium",   tool: "Titration kit"     },
//     { param: "Nitrite / Nitrate",  freq: "Weekly",        urgency: "Medium",   tool: "Test strips / kit" },
//     { param: "Turbidity (Secchi)", freq: "Weekly",        urgency: "Standard", tool: "Secchi disk"       },
//   ];

//   const treatments = [
//     { name: "Potassium Chloride Pro", cat: "Ionic Correction",   icon: "⚡", color: T.teal,   targets: "K⁺ deficiency · Osmoregulation", dose: "10–15 kg / ha·m" },
//     { name: "Pond Guard Pro",         cat: "Sanitizer",          icon: "🛡️", color: T.blue,   targets: "Vibrio bloom · Bacterial load",   dose: "2–3 L / ha"      },
//     { name: "AquaClear Probiotic",    cat: "Biological",         icon: "🦠", color: T.green,  targets: "Ammonia · Organic overload",      dose: "500 g / ha"      },
//     { name: "pH Buffer Plus",         cat: "pH Management",      icon: "⚖️", color: T.teal,   targets: "Morning pH dip · Low alkalinity", dose: "5 kg / ha"       },
//     { name: "ZeoFresh",               cat: "Zeolite Amendment",  icon: "🪨", color: "#a05c20",targets: "Ammonia spike · Turbidity",       dose: "20–50 kg / ha"   },
//     { name: "OxyBoost Granules",      cat: "Emergency O₂",      icon: "🫧", color: T.teal,   targets: "Acute DO crash",                  dose: "3–5 kg / ha"     },
//   ];

//   return (
//     <div style={{ minHeight: "100vh", background: T.pageBg, color: T.textPrimary, position: "relative", overflowX: "hidden" }}>
//       {/* Dot grid */}
//       <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle, rgba(21,101,192,0.06) 1px, transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

//       <Topbar />

//       {/* ══ HERO ══ */}
//       <section style={{ position: "relative", zIndex: 1 ,marginTop:20}}>
//         {/* Classification bar */}
//         <div style={{ background: T.blue, color: "#fff", padding: "7px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 10, fontFamily: "monospace", letterSpacing: 1.8, fontWeight: 600 }}>
//           <span>DOCUMENT CLASS: SUSTAINABILITY REPORT · UNRESTRICTED</span>
//           <span>IBP-SR-2026 · REV 3.1 · APRIL 2026</span>
//           <span>INNOVARE BIOPHARMA LLP · HYDERABAD</span>
//         </div>

//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 48px 40px", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "start" }}>
//           {/* Left */}
//           <div>
//             <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//               <SectionTag code="§ 01" label="Mission Statement" />
//             </motion.div>
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
//               style={{ fontSize: 54, fontWeight: 900, letterSpacing: -2.5, lineHeight: 0.97, color: T.textPrimary, marginBottom: 24 }}
//             >
//               Science That<br />
//               <span style={{ color: T.blue }}>Protects</span><br />
//               the Pond.
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
//               style={{ fontSize: 16, color: T.textSecondary, lineHeight: 1.8, maxWidth: 460, marginBottom: 32 }}
//             >
//               Every formula Innovare develops is stress-tested against one measure beyond efficacy: does it leave the pond — and the planet — in better condition than it found it?
//             </motion.p>

//             {/* KPI row */}
//             <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.6 }}
//               style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 36 }}>
//               {[
//                 { val: 40,    suf: "%",  label: "Chemical reduction",   icon: "🧪" },
//                 { val: 92,    suf: "%",  label: "Biodegradable inputs", icon: "🌱" },
//                 { val: 15000, suf: "+",  label: "Farmers supported",    icon: "👨‍🌾" },
//               ].map((s,i) => (
//                 <div key={i} style={{ padding: "16px 14px", borderRadius: 12, background: T.cardBg, border: `1px solid ${T.borderLight}`, boxShadow: "0 2px 8px rgba(15,23,42,0.06)", textAlign: "center" }}>
//                   <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>
//                   <div style={{ fontSize: 28, fontWeight: 900, color: T.blue, letterSpacing: -1 }}><Counter to={s.val} suffix={s.suf} /></div>
//                   <div style={{ fontSize: 11, color: T.textMuted, marginTop: 3 }}>{s.label}</div>
//                 </div>
//               ))}
//             </motion.div>

//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
//               style={{ display: "flex", gap: 12, flexWrap: "wrap" as const }}>
//               <a href="#soil" style={{ padding: "12px 28px", borderRadius: 10, background: `linear-gradient(135deg,${T.blue},#0288d1)`, color: "#fff", fontWeight: 700, fontSize: 13, textDecoration: "none", boxShadow: "0 6px 20px rgba(21,101,192,0.3)", transition: "all .25s" }}
//                 onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
//                 onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "none"; }}
//               >🌍 Explore Our Science</a>
//               <a href="#" style={{ padding: "12px 24px", borderRadius: 10, background: T.cardBg, border: `1px solid ${T.borderMed}`, color: T.textSecondary, fontWeight: 600, fontSize: 13, textDecoration: "none", transition: "all .25s" }}
//                 onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = T.blue; el.style.color = T.blue; el.style.background = T.blueMid; }}
//                 onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = T.borderMed; el.style.color = T.textSecondary; el.style.background = T.cardBg; }}
//               >Download Report →</a>
//             </motion.div>
//           </div>

//           {/* Right — diagram */}
//           <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
//             <PondDiagram />
//             <p style={{ textAlign: "center", fontSize: 9, color: T.textMuted, marginTop: 10, fontFamily: "monospace", letterSpacing: 1 }}>FIG. 1 — POND CROSS-SECTION SCHEMATIC · NOT TO SCALE</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── Rule ── */}
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "8px 0" }}>
//           <div style={{ flex: 1, height: 1, background: T.borderLight }} />
//           <span style={{ fontSize: 9, color: T.textMuted, letterSpacing: 3, textTransform: "uppercase" as const, fontFamily: "monospace", flexShrink: 0 }}>§ 02 · SOIL QUALITY</span>
//           <div style={{ flex: 1, height: 1, background: T.borderLight }} />
//         </div>
//       </div>

//       {/* ══ SOIL QUALITY ══ */}
//       <section id="soil" style={{ position: "relative", zIndex: 1, padding: "48px 0 72px" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
//           <Reveal>
//             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 20 }}>
//               <div>
//                 <SectionTag code="§ 02" label="Soil Quality Management" />
//                 <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -2, color: T.textPrimary, lineHeight: 1.05 }}>The Foundation<br /><span style={{ color: T.blue }}>of Every Harvest</span></h2>
//               </div>
//               <p style={{ fontSize: 14, color: T.textSecondary, maxWidth: 400, lineHeight: 1.8 }}>Pond sediment is a living ecosystem. Neglected soil accumulates ammonia, hydrogen sulfide, and pathogens that cascade into crop losses. Our protocols actively restore and maintain sediment chemistry.</p>
//             </div>
//           </Reveal>

//           <Reveal delay={0.08}>
//             <div style={{ display: "flex", gap: 6, marginBottom: 28, padding: "6px", background: T.cardBg, borderRadius: 12, border: `1px solid ${T.borderLight}`, width: "fit-content", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}>
//               <TabBtn active={soilTab==="parameters"} label="Key Parameters"   onClick={() => setSoilTab("parameters")} accent={T.blue} />
//               <TabBtn active={soilTab==="layers"}     label="Sediment Layers"  onClick={() => setSoilTab("layers")}     accent={T.blue} />
//               <TabBtn active={soilTab==="practices"}  label="Best Practices"   onClick={() => setSoilTab("practices")}  accent={T.blue} />
//             </div>
//           </Reveal>

//           <AnimatePresence mode="wait">
//             <motion.div key={soilTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>

//               {soilTab === "parameters" && (
//                 <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
//                   {soilParams.map((p, i) => (
//                     <div key={i} style={{ background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 16, padding: "22px 20px", boxShadow: "0 2px 8px rgba(15,23,42,0.05)", position: "relative", overflow: "hidden", transition: "all .25s" }}
//                       onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = `${p.color}50`; el.style.transform = "translateY(-4px)"; el.style.boxShadow = `0 12px 32px rgba(21,101,192,0.1)`; }}
//                       onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.borderLight; el.style.transform = "none"; el.style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
//                     >
//                       <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${p.color},${p.color}44)`, borderRadius: "16px 16px 0 0" }} />
//                       <div style={{ position: "absolute", top: -8, right: -4, fontSize: 64, opacity: 0.04 }}>{p.icon}</div>
//                       <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
//                         <div style={{ width: 38, height: 38, borderRadius: 10, background: `${p.color}15`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{p.icon}</div>
//                         <span style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary }}>{p.label}</span>
//                       </div>
//                       <div style={{ marginBottom: 10 }}>
//                         <span style={{ fontSize: 9, color: T.textMuted, letterSpacing: 2, textTransform: "uppercase" as const, fontFamily: "monospace" }}>Ideal Range</span>
//                         <p style={{ fontSize: 20, fontWeight: 800, color: p.color, letterSpacing: -0.5, marginTop: 2 }}>{p.ideal}</p>
//                       </div>
//                       <p style={{ fontSize: 13, color: T.textSecondary, lineHeight: 1.65 }}>{p.desc}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {soilTab === "layers" && (
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 24 }}>
//                   <div style={{ display: "flex", flexDirection: "column", gap: 0, borderRadius: 16, overflow: "hidden", border: `1px solid ${T.borderLight}`, boxShadow: "0 4px 16px rgba(15,23,42,0.07)" }}>
//                     {soilLayers.map((layer, i) => (
//                       <div key={i} style={{ padding: "16px 18px", background: layer.color, borderBottom: i < soilLayers.length-1 ? `1px solid ${layer.border}30` : "none", display: "flex", alignItems: "center", gap: 12, transition: "padding .2s" }}
//                         onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = "26px"; }}
//                         onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = "18px"; }}
//                       >
//                         <div style={{ width: 4, height: 36, background: layer.border, borderRadius: 4, flexShrink: 0 }} />
//                         <div style={{ fontSize: 20, flexShrink: 0 }}>{layer.icon}</div>
//                         <div style={{ flex: 1 }}>
//                           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
//                             <span style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>{layer.name}</span>
//                             <span style={{ fontSize: 10, color: T.textMuted, fontFamily: "monospace" }}>{layer.depth}</span>
//                           </div>
//                           <p style={{ fontSize: 12, color: T.textSecondary, lineHeight: 1.5 }}>{layer.desc}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
//                     <div style={{ padding: "20px 22px", background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 14, boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}>
//                       <p style={{ fontSize: 11, fontWeight: 700, color: T.blue, letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 12, fontFamily: "monospace" }}>Nitrogen Cycle in Sediment</p>
//                       {[
//                         { from:"Feed Protein", to:"NH₃ / NH₄⁺", color:"#f59e0b", label:"Excretion & decomposition" },
//                         { from:"NH₃ / NH₄⁺",  to:"NO₂⁻",       color:T.teal,    label:"Nitrosomonas (aerobic)" },
//                         { from:"NO₂⁻",        to:"NO₃⁻",       color:T.blue,    label:"Nitrobacter (aerobic)"  },
//                         { from:"NO₃⁻",        to:"N₂ gas",      color:T.green,   label:"Denitrification (anoxic)"},
//                       ].map((step,i) => (
//                         <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: i<3 ? `1px solid ${T.borderLight}` : "none" }}>
//                           <span style={{ fontSize: 11, fontWeight: 700, color: step.color, fontFamily: "monospace", minWidth: 80 }}>{step.from}</span>
//                           <span style={{ fontSize: 13, color: step.color }}>→</span>
//                           <span style={{ fontSize: 11, fontWeight: 700, color: step.color, fontFamily: "monospace", minWidth: 70 }}>{step.to}</span>
//                           <span style={{ fontSize: 11, color: T.textMuted, borderLeft: `1px solid ${T.borderLight}`, paddingLeft: 8 }}>{step.label}</span>
//                         </div>
//                       ))}
//                     </div>
//                     {[
//                       { icon:"🧬", title:"Probiotic Colonisation", color:T.green, text:"Bacillus strains dosed bi-weekly colonise the floc layer, out-competing Vibrio pathogens without antibiotics." },
//                       { icon:"🪨", title:"Liming Protocol",        color:T.blue,  text:"Agricultural lime applied to the dry pond floor neutralises acidity, kills overwintering pathogens, and binds excess phosphorus." },
//                       { icon:"🌬️", title:"Aeration Management",   color:T.teal,  text:"Paddle-wheel positioning ensures sediment redox stays above +100 mV across the entire pond floor." },
//                     ].map((card,i) => (
//                       <div key={i} style={{ padding: "15px 18px", background: T.cardBg, border: `1px solid ${T.borderLight}`, borderLeft: `3px solid ${card.color}`, borderRadius: 12, display: "flex", gap: 12, boxShadow: "0 2px 6px rgba(15,23,42,0.04)" }}>
//                         <span style={{ fontSize: 20, flexShrink: 0 }}>{card.icon}</span>
//                         <div>
//                           <p style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary, marginBottom: 4 }}>{card.title}</p>
//                           <p style={{ fontSize: 12, color: T.textSecondary, lineHeight: 1.65 }}>{card.text}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {soilTab === "practices" && (
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
//                   {[
//                     { step:"01", icon:"☀️", title:"Post-harvest Sun Drying",   color:"#f59e0b", desc:"Full pond drainage and 2–3 weeks of solar drying oxidises residual organic matter, resets microbial communities, and reduces pathogen carryover." },
//                     { step:"02", icon:"🪨", title:"Lime Application",           color:T.blue,   desc:"Agricultural lime (2–3 t/ha) broadcast across dry pond floor. Target: soil pH 7.0–7.5, elimination of acid-sulphate conditions." },
//                     { step:"03", icon:"🌬️", title:"Aerator Grid Placement",    color:T.teal,   desc:"Paddle-wheel aerators positioned per pond geometry to ensure complete water turnover every 6 hours and sediment redox > +100 mV." },
//                     { step:"04", icon:"🧬", title:"Probiotic Seeding",          color:T.green,  desc:"Bacillus-based consortium applied at stocking and bi-weekly thereafter. Accelerates organic decomposition and produces bacteriocins." },
//                     { step:"05", icon:"🪣", title:"Sludge Centralisation",      color:"#a05c20",desc:"Pond slope (1% grade to central drain) channels settled sludge for periodic removal — preventing anaerobic dead zones." },
//                     { step:"06", icon:"📊", title:"Weekly Sediment Testing",    color:T.blue,   desc:"BOD, COD, redox, and Secchi disk logged weekly. Trend analysis triggers corrective action before critical thresholds breach." },
//                   ].map((p,i) => (
//                     <div key={i} style={{ padding: "20px 20px", background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 14, display: "flex", gap: 14, alignItems: "flex-start", boxShadow: "0 2px 8px rgba(15,23,42,0.05)", transition: "all .25s" }}
//                       onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = `${p.color}50`; el.style.transform = "translateX(4px)"; el.style.boxShadow = `0 6px 20px ${p.color}18`; }}
//                       onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.borderLight; el.style.transform = "none"; el.style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
//                     >
//                       <div style={{ width: 44, height: 44, borderRadius: 12, background: `${p.color}12`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{p.icon}</div>
//                       <div>
//                         <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
//                           <span style={{ fontSize: 9, color: p.color, fontWeight: 800, letterSpacing: 2, fontFamily: "monospace" }}>STEP {p.step}</span>
//                           <span style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary }}>{p.title}</span>
//                         </div>
//                         <p style={{ fontSize: 13, color: T.textSecondary, lineHeight: 1.7 }}>{p.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}

//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* ── Rule ── */}
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "8px 0" }}>
//           <div style={{ flex: 1, height: 1, background: T.borderLight }} />
//           <span style={{ fontSize: 9, color: T.textMuted, letterSpacing: 3, textTransform: "uppercase" as const, fontFamily: "monospace", flexShrink: 0 }}>§ 03 · WATER QUALITY</span>
//           <div style={{ flex: 1, height: 1, background: T.borderLight }} />
//         </div>
//       </div>

//       {/* ══ WATER QUALITY ══ */}
//       <section id="water" style={{ position: "relative", zIndex: 1, padding: "48px 0 72px" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
//           <Reveal>
//             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 20 }}>
//               <div>
//                 <SectionTag code="§ 03" label="Water Quality Management" />
//                 <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -2, color: T.textPrimary, lineHeight: 1.05 }}>Every Drop<br /><span style={{ color: T.teal }}>Held to a Standard</span></h2>
//               </div>
//               <p style={{ fontSize: 14, color: T.textSecondary, maxWidth: 400, lineHeight: 1.8 }}>Water chemistry in intensive ponds fluctuates hourly. Our treatments are precision tools — not broad-spectrum chemicals — designed to correct specific deficits without disrupting natural ecology.</p>
//             </div>
//           </Reveal>

//           <Reveal delay={0.08}>
//             <div style={{ display: "flex", gap: 6, marginBottom: 28, padding: "6px", background: T.cardBg, borderRadius: 12, border: `1px solid ${T.borderLight}`, width: "fit-content", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}>
//               <TabBtn active={waterTab==="parameters"} label="Key Parameters"      onClick={() => setWaterTab("parameters")} accent={T.teal} />
//               <TabBtn active={waterTab==="schedule"}   label="Monitoring Schedule" onClick={() => setWaterTab("schedule")}   accent={T.teal} />
//               <TabBtn active={waterTab==="treatments"} label="Our Treatments"      onClick={() => setWaterTab("treatments")} accent={T.teal} />
//             </div>
//           </Reveal>

//           <AnimatePresence mode="wait">
//             <motion.div key={waterTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>

//               {waterTab === "parameters" && (
//                 <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
//                   {waterParams.map((p, i) => (
//                     <div key={i} style={{ background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 14, padding: "20px 18px", boxShadow: "0 2px 8px rgba(15,23,42,0.05)", position: "relative", overflow: "hidden", transition: "all .25s" }}
//                       onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = `${p.color}50`; el.style.transform = "translateY(-4px)"; el.style.boxShadow = `0 12px 30px rgba(15,23,42,0.1)`; }}
//                       onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.borderLight; el.style.transform = "none"; el.style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
//                     >
//                       <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: p.color, borderRadius: "14px 14px 0 0" }} />
//                       <div style={{ position: "absolute", top: 10, right: 10 }}>
//                         <span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 5, background: `${urgencyColor[p.urgency]}18`, color: urgencyColor[p.urgency], fontWeight: 700, letterSpacing: 0.5, fontFamily: "monospace" }}>{p.urgency}</span>
//                       </div>
//                       <div style={{ fontSize: 24, marginBottom: 12, marginTop: 4 }}>{p.icon}</div>
//                       <p style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary, marginBottom: 8 }}>{p.label}</p>
//                       <div>
//                         <span style={{ fontSize: 9, color: T.textMuted, letterSpacing: 2, textTransform: "uppercase" as const, fontFamily: "monospace" }}>Target</span>
//                         <p style={{ fontSize: 16, fontWeight: 800, color: p.color, letterSpacing: -0.3, marginTop: 2 }}>{p.ideal}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {waterTab === "schedule" && (
//                 <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 20 }}>
//                   <div style={{ background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 16px rgba(15,23,42,0.07)" }}>
//                     <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1.2fr 1fr 1fr", padding: "12px 20px", background: `linear-gradient(135deg,${T.blue},${T.teal})` }}>
//                       {["Parameter","Frequency","Urgency","Tool"].map(h => (
//                         <span key={h} style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: 1.5, textTransform: "uppercase" as const, fontFamily: "monospace" }}>{h}</span>
//                       ))}
//                     </div>
//                     {monitoringSchedule.map((row,i) => (
//                       <div key={i} style={{ display: "grid", gridTemplateColumns: "1.5fr 1.2fr 1fr 1fr", padding: "11px 20px", background: i%2===0 ? T.surfaceBg : T.cardBg, borderTop: `1px solid ${T.borderLight}`, alignItems: "center", transition: "background .2s" }}
//                         onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = T.blueMid; }}
//                         onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = i%2===0 ? T.surfaceBg : T.cardBg; }}
//                       >
//                         <span style={{ fontSize: 13, color: T.textPrimary, fontWeight: 500 }}>{row.param}</span>
//                         <span style={{ fontSize: 12, color: T.textSecondary }}>{row.freq}</span>
//                         <span style={{ fontSize: 9, padding: "2px 8px", borderRadius: 5, background: `${urgencyColor[row.urgency]}15`, color: urgencyColor[row.urgency], fontWeight: 700, letterSpacing: 0.5, width: "fit-content", fontFamily: "monospace" }}>{row.urgency}</span>
//                         <span style={{ fontSize: 11, color: T.textMuted }}>{row.tool}</span>
//                       </div>
//                     ))}
//                   </div>
//                   <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
//                     <div style={{ padding: "20px 20px", background: "#fff5f5", border: `1px solid #fecaca`, borderLeft: `4px solid ${T.red}`, borderRadius: 14 }}>
//                       <p style={{ fontSize: 11, fontWeight: 800, color: T.red, letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 12, fontFamily: "monospace" }}>🚨 Emergency Thresholds</p>
//                       {[
//                         { t:"DO < 3.0 mg/L",     a:"Activate all aerators. Stop feeding immediately."  },
//                         { t:"pH < 7.0 or > 9.2", a:"Lime or water exchange correction within 2 hours." },
//                         { t:"NH₃ > 0.5 mg/L",    a:"50% water exchange + emergency probiotic dose."    },
//                         { t:"NO₂⁻ > 1.0 mg/L",  a:"Salt addition 5 ppt + maximum aeration."           },
//                       ].map((a,i) => (
//                         <div key={i} style={{ padding: "8px 0", borderBottom: i<3 ? "1px solid #fee2e2" : "none" }}>
//                           <p style={{ fontSize: 12, fontWeight: 700, color: T.red, fontFamily: "monospace" }}>{a.t}</p>
//                           <p style={{ fontSize: 12, color: T.textSecondary, marginTop: 2 }}>{a.a}</p>
//                         </div>
//                       ))}
//                     </div>
//                     <div style={{ padding: "20px 20px", background: T.tealLight, border: `1px solid #bae6fd`, borderLeft: `4px solid ${T.teal}`, borderRadius: 14 }}>
//                       <p style={{ fontSize: 11, fontWeight: 800, color: T.teal, letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 12, fontFamily: "monospace" }}>💡 Pro Tips</p>
//                       {[
//                         "Measure DO at dawn — the natural daily minimum.",
//                         "Calibrate probes weekly; drift kills faster than disease.",
//                         "Post-rain: check salinity & pH within 30 minutes.",
//                         "Log all readings digitally — trends matter more than snapshots.",
//                       ].map((tip,i) => (
//                         <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "6px 0", borderBottom: i<3 ? "1px solid rgba(8,145,178,0.15)" : "none" }}>
//                           <div style={{ width: 5, height: 5, borderRadius: "50%", background: T.teal, marginTop: 5, flexShrink: 0 }} />
//                           <p style={{ fontSize: 12, color: T.textSecondary, lineHeight: 1.6 }}>{tip}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {waterTab === "treatments" && (
//                 <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
//                   {treatments.map((prod,i) => (
//                     <div key={i} style={{ background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 16, padding: "22px 20px", boxShadow: "0 2px 8px rgba(15,23,42,0.05)", position: "relative", overflow: "hidden", transition: "all .25s" }}
//                       onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = `${prod.color}50`; el.style.transform = "translateY(-4px)"; el.style.boxShadow = `0 14px 36px rgba(15,23,42,0.1)`; }}
//                       onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.borderLight; el.style.transform = "none"; el.style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
//                     >
//                       <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: prod.color, borderRadius: "16px 16px 0 0" }} />
//                       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
//                         <div style={{ width: 42, height: 42, borderRadius: 12, background: `${prod.color}15`, border: `1px solid ${prod.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{prod.icon}</div>
//                         <span style={{ fontSize: 9, padding: "3px 9px", borderRadius: 5, background: `${prod.color}12`, color: prod.color, fontWeight: 700, letterSpacing: 0.5, fontFamily: "monospace" }}>{prod.cat}</span>
//                       </div>
//                       <h4 style={{ fontSize: 15, fontWeight: 800, color: T.textPrimary, marginBottom: 8 }}>{prod.name}</h4>
//                       <div style={{ marginBottom: 10 }}>
//                         <span style={{ fontSize: 9, color: T.textMuted, textTransform: "uppercase" as const, letterSpacing: 1.5, fontFamily: "monospace" }}>Targets</span>
//                         <p style={{ fontSize: 12, color: T.textSecondary, marginTop: 3 }}>{prod.targets}</p>
//                       </div>
//                       <div style={{ padding: "8px 14px", background: `${prod.color}10`, border: `1px solid ${prod.color}25`, borderRadius: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                         <span style={{ fontSize: 10, color: T.textMuted, fontFamily: "monospace" }}>Typical dose</span>
//                         <span style={{ fontSize: 13, fontWeight: 700, color: prod.color, fontFamily: "monospace" }}>{prod.dose}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}

//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* ══ CERTIFICATIONS ══ */}
//       <section style={{ background: T.cardBg, borderTop: `1px solid ${T.borderLight}`, borderBottom: `1px solid ${T.borderLight}`, padding: "56px 48px", position: "relative", zIndex: 1 }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <Reveal>
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 40 }}>
//               <div>
//                 <SectionTag code="§ 04" label="Accreditations" />
//                 <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: -1.5, color: T.textPrimary }}>Independently Verified</h2>
//                 <p style={{ fontSize: 14, color: T.textSecondary, marginTop: 6, maxWidth: 340, lineHeight: 1.7 }}>Every sustainability claim is backed by third-party audit, not marketing copy.</p>
//               </div>
//               <div style={{ display: "flex", gap: 14, flexWrap: "wrap" as const }}>
//                 {[
//                   { label:"GMP+",            body:"Feed Safety",        icon:"✅", color:T.green },
//                   { label:"ISO 9001:2015",   body:"Quality Mgmt",       icon:"🏅", color:T.blue  },
//                   { label:"ISO 14001",       body:"Environmental Mgmt", icon:"🌍", color:T.teal  },
//                   { label:"HACCP",           body:"Food Safety",        icon:"🔬", color:T.blue  },
//                   { label:"Export Approved", body:"MPEDA / EIC",        icon:"🚢", color:T.teal  },
//                 ].map((cert,i) => (
//                   <div key={i} style={{ padding: "16px 20px", background: T.surfaceBg, border: `1px solid ${T.borderLight}`, borderTop: `3px solid ${cert.color}`, borderRadius: 12, textAlign: "center", minWidth: 120, transition: "all .25s" }}
//                     onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-3px)"; el.style.boxShadow = `0 8px 24px ${cert.color}20`; }}
//                     onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "none"; el.style.boxShadow = "none"; }}
//                   >
//                     <div style={{ fontSize: 24, marginBottom: 6 }}>{cert.icon}</div>
//                     <p style={{ fontSize: 13, fontWeight: 800, color: cert.color }}>{cert.label}</p>
//                     <p style={{ fontSize: 11, color: T.textMuted, marginTop: 3 }}>{cert.body}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ══ CTA ══ */}
//       <section style={{ position: "relative", zIndex: 1, padding: "80px 48px" }}>
//         <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(ellipse 60% 80% at 50% 50%, ${T.blueLight} 0%, transparent 65%)`, pointerEvents: "none" }} />
//         <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative" }}>
//           <Reveal>
//             <SectionTag code="§ 05" label="Take Action" />
//             <h2 style={{ fontSize: 42, fontWeight: 900, letterSpacing: -2, color: T.textPrimary, lineHeight: 1.05, marginBottom: 16 }}>Ready to Farm<br /><span style={{ color: T.blue }}>More Responsibly?</span></h2>
//             <p style={{ fontSize: 15, color: T.textSecondary, lineHeight: 1.8, marginBottom: 36 }}>Our technical team will build a tailored soil and water management protocol for your farm — at no cost. Backed by data, not guesswork.</p>
//             <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const }}>
//               <button style={{ padding: "14px 36px", borderRadius: 12, background: `linear-gradient(135deg,${T.blue},#0288d1)`, color: "#fff", fontWeight: 800, fontSize: 14, border: "none", cursor: "pointer", boxShadow: "0 8px 28px rgba(21,101,192,0.3)", transition: "all .25s" }}
//                 onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 14px 40px rgba(21,101,192,0.4)"; }}
//                 onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 28px rgba(21,101,192,0.3)"; }}
//               >Request a Free Consultation</button>
//               <button style={{ padding: "14px 30px", borderRadius: 12, background: T.cardBg, border: `1px solid ${T.borderMed}`, color: T.textSecondary, fontWeight: 600, fontSize: 14, cursor: "pointer", transition: "all .25s" }}
//                 onMouseEnter={e => { const el = e.currentTarget as HTMLButtonElement; el.style.borderColor = T.blue; el.style.color = T.blue; el.style.background = T.blueMid; }}
//                 onMouseLeave={e => { const el = e.currentTarget as HTMLButtonElement; el.style.borderColor = T.borderMed; el.style.color = T.textSecondary; el.style.background = T.cardBg; }}
//               >Download Sustainability Report →</button>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//       <Footer></Footer>
//     </div>
//   );
// }

"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

import Footer from "@/components/Footer";

/* ══════════════════════════════════════════════════
   FONT CONSTANTS
══════════════════════════════════════════════════ */
const FONT_SANS = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const FONT_MONO = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

/* ══════════════════════════════════════════════════
   BRAND THEME
══════════════════════════════════════════════════ */
const T = {
  pageBg:        "#f0f4f8",
  cardBg:        "#ffffff",
  surfaceBg:     "#f8fafc",
  imagePanelBg:  "#eef4fb",
  borderLight:   "#e2e8f0",
  borderMed:     "#cbd5e1",
  blue:          "#1565c0",
  blueDark:      "#0d47a1",
  blueLight:     "#dbeafe",
  blueMid:       "#eff6ff",
  teal:          "#0891b2",
  tealLight:     "#e0f2fe",
  textPrimary:   "#0f172a",
  textSecondary: "#475569",
  textMuted:     "#94a3b8",
  green:         "#15803d",
  greenBg:       "#f0fdf4",
  greenBorder:   "#bbf7d0",
  amber:         "#92400e",
  amberBg:       "#fffbeb",
  amberBorder:   "#fcd34d",
  red:           "#dc2626",
  footerBg:      "#0f172a",
  footerTeal:    "#38bdf8",
};

/* ══════════════════════════════════════════════════
   ANIMATED COUNTER
══════════════════════════════════════════════════ */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let s = 0;
    const inc = to / (1600 / 16);
    const id = setInterval(() => {
      s += inc;
      if (s >= to) { setVal(to); clearInterval(id); }
      else setVal(Math.floor(s));
    }, 16);
    return () => clearInterval(id);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ══════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════ */
function Reveal({ children, delay = 0, x = 0, y = 24 }: {
  children: React.ReactNode; delay?: number; x?: number; y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

/* ══════════════════════════════════════════════════
   SECTION TAG
══════════════════════════════════════════════════ */
function SectionTag({ code, label }: { code: string; label: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "stretch", marginBottom: 20, borderRadius: 7, overflow: "hidden", boxShadow: `0 2px 8px rgba(21,101,192,0.12)` }}>
      <div style={{ padding: "4px 12px", background: T.blue, color: "#fff", fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" as const, fontFamily: FONT_MONO, display: "flex", alignItems: "center" }}>{code}</div>
      <div style={{ padding: "4px 14px", background: T.blueLight, color: T.blue, fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" as const, fontFamily: FONT_MONO, display: "flex", alignItems: "center" }}>{label}</div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   TAB BUTTON
══════════════════════════════════════════════════ */
function TabBtn({ active, label, onClick, accent }: { active: boolean; label: string; onClick: () => void; accent: string }) {
  return (
    <button onClick={onClick} style={{
      padding: "8px 20px", fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer",
      borderRadius: 8, transition: "all .22s", fontFamily: FONT_SANS,
      background: active ? `linear-gradient(135deg,${accent},${accent}cc)` : T.surfaceBg,
      color: active ? "#fff" : T.textSecondary,
      boxShadow: active ? `0 4px 14px ${accent}40` : "none",
    }}>{label}</button>
  );
}

/* ══════════════════════════════════════════════════
   POND CROSS-SECTION SVG DIAGRAM
══════════════════════════════════════════════════ */
function PondDiagram() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 780, margin: "0 auto" }}>
      <div style={{
        border: `2px solid ${T.borderMed}`, borderRadius: 16, overflow: "hidden",
        boxShadow: "0 20px 60px rgba(21,101,192,0.12), 0 4px 16px rgba(15,23,42,0.08)",
        background: "#fff",
      }}>
        <div style={{ padding: "9px 20px", background: T.surfaceBg, borderBottom: `1px solid ${T.borderLight}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 9, fontWeight: 700, color: T.textMuted, letterSpacing: 2, textTransform: "uppercase" as const, fontFamily: FONT_MONO }}>FIG. 1 — POND CROSS-SECTION · INNOVARE BIOPHARMA LLP</span>
          <span style={{ fontSize: 9, color: T.textMuted, fontFamily: FONT_MONO }}>REF: IBP-SUS-2026</span>
        </div>

        <svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <defs>
            <linearGradient id="skyG"      x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f0f9ff" /><stop offset="100%" stopColor="#e0f2fe" /></linearGradient>
            <linearGradient id="waterG"    x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={T.tealLight} stopOpacity="0.9" /><stop offset="100%" stopColor={T.blueMid} /></linearGradient>
            <linearGradient id="aerobicG"  x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ffe8cc" /><stop offset="100%" stopColor="#d4a060" /></linearGradient>
            <linearGradient id="anaerobicG"x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c09070" /><stop offset="100%" stopColor="#8b5e3c" /></linearGradient>
            <linearGradient id="bedG"      x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7a4a2a" /><stop offset="100%" stopColor="#4a2c12" /></linearGradient>
            <pattern id="bubP" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="30" r="2" fill={T.teal} opacity="0.22" />
              <circle cx="28" cy="14" r="1.5" fill={T.teal} opacity="0.16" />
              <circle cx="5"  cy="8"  r="1"   fill={T.teal} opacity="0.13" />
            </pattern>
            <marker id="arrowM" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill={T.teal} opacity="0.5" />
            </marker>
          </defs>

          <rect x="0" y="0" width="760" height="38" fill="url(#skyG)" />
          <circle cx="706" cy="18" r="11" fill="#fbbf24" opacity="0.85" />
          {[0,45,90,135,180,225,270,315].map((a,i) => (
            <line key={i} x1={706+Math.cos(a*Math.PI/180)*14} y1={18+Math.sin(a*Math.PI/180)*14} x2={706+Math.cos(a*Math.PI/180)*17} y2={18+Math.sin(a*Math.PI/180)*17} stroke="#fbbf24" strokeWidth="1.5" opacity="0.55" />
          ))}
          <polygon points="0,38 82,38 122,62 122,340 0,340" fill="#a09070" opacity="0.45" />
          <polygon points="760,38 678,38 638,62 638,340 760,340" fill="#a09070" opacity="0.45" />
          <rect x="122" y="38" width="516" height="168" fill="url(#waterG)" opacity="0.88" />
          <rect x="122" y="38" width="516" height="168" fill="url(#bubP)" />
          <path d="M132,44 Q200,38 270,44 Q340,50 412,44 Q482,38 550,44 Q604,48 628,44" stroke={T.teal} strokeWidth="1.2" fill="none" opacity="0.4" />
          <path d="M132,51 Q190,46 252,51 Q320,57 390,50 Q460,44 530,51 Q590,55 628,51" stroke={T.teal} strokeWidth="0.7" fill="none" opacity="0.25" />
          {[[225,108],[390,130],[515,100],[305,152],[460,80]].map(([cx,cy],i) => (
            <g key={i} opacity="0.5">
              <ellipse cx={cx} cy={cy} rx="10" ry="5" fill={T.teal} opacity="0.65" transform={`rotate(-20,${cx},${cy})`} />
              <circle cx={cx+8} cy={cy-2} r="1.8" fill={T.teal} opacity="0.55" />
              <line x1={cx+9} y1={cy-3} x2={cx+15} y2={cy-6} stroke={T.teal} strokeWidth="0.7" opacity="0.5" />
              <line x1={cx+9} y1={cy-1} x2={cx+15} y2={cy-1} stroke={T.teal} strokeWidth="0.7" opacity="0.5" />
            </g>
          ))}
          <rect x="356" y="40" width="48" height="5" rx="2.5" fill={T.blue} opacity="0.65" />
          <rect x="377" y="34" width="6" height="28" rx="2" fill={T.blue} opacity="0.5" />
          <circle cx="380" cy="34" r="4" fill={T.blue} opacity="0.8" />
          {[-14,-7,0,7,14].map((dx,i) => (
            <line key={i} x1={380+dx} y1={45} x2={380+dx*1.5} y2={66} stroke="#bae6fd" strokeWidth="1" opacity="0.45" strokeDasharray="2,2" />
          ))}
          <rect x="122" y="206" width="516" height="10" fill="#c8e6a0" opacity="0.75" />
          <path d="M122,206 Q200,203 280,206 Q360,209 440,206 Q520,203 638,206" stroke="#6aaa50" strokeWidth="0.9" fill="none" opacity="0.55" />
          <rect x="122" y="216" width="516" height="36" fill="url(#aerobicG)" opacity="0.85" />
          <rect x="122" y="252" width="516" height="32" fill="url(#anaerobicG)" opacity="0.88" />
          <rect x="122" y="284" width="516" height="56" fill="url(#bedG)" />
          <line x1="108" y1="38" x2="108" y2="300" stroke={T.borderMed} strokeWidth="0.8" />
          {[{y:38,l:"0 m"},{y:100,l:"0.6m"},{y:160,l:"1.2m"},{y:206,l:"1.7m"},{y:252,l:"▸ ana"},{y:284,l:"▸ bed"}].map((t,i) => (
            <g key={i}>
              <line x1="108" y1={t.y} x2="122" y2={t.y} stroke={T.textMuted} strokeWidth="0.8" />
              <text x="105" y={t.y+4} textAnchor="end" fontSize="7" fill={T.textMuted} fontFamily="monospace">{t.l}</text>
            </g>
          ))}
          {[
            {y:118, label:"Water Column",         sub:"DO · pH · Temp · Salinity",   color:T.blue },
            {y:211, label:"Floc / Biofilm",        sub:"Active microbial zone",        color:"#5a8f45"},
            {y:234, label:"Aerobic Sediment",      sub:"+50 to +200 mV redox",        color:"#a07040"},
            {y:268, label:"Anaerobic Sediment",    sub:"H₂S risk — managed daily",    color:"#7a4a28"},
            {y:306, label:"Pond Bed",              sub:"Clay · post-harvest drying",  color:"#5c3317"},
          ].map((l,i) => (
            <g key={i}>
              <line x1="638" y1={l.y} x2="656" y2={l.y} stroke={l.color} strokeWidth="0.9" strokeDasharray="3,2" opacity="0.65" />
              <line x1="656" y1={l.y} x2="660" y2={l.y} stroke={l.color} strokeWidth="2" opacity="0.85" />
              <text x="663" y={l.y-2}  fontSize="8.5" fill={T.textPrimary} fontWeight="700" fontFamily="monospace">{l.label}</text>
              <text x="663" y={l.y+8}  fontSize="7"   fill={T.textSecondary} fontFamily="monospace">{l.sub}</text>
            </g>
          ))}
          <path d="M380,66 L380,200" stroke={T.teal} strokeWidth="1" strokeDasharray="4,3" opacity="0.3" markerEnd="url(#arrowM)" />
          <text x="385" y="140" fontSize="8" fill={T.teal} fontFamily="monospace" opacity="0.65">O₂ ↓</text>
          <rect x="242" y="50" width="5" height="26" rx="2.5" fill={T.blue} opacity="0.55" />
          <rect x="239" y="48" width="11" height="5" rx="2" fill={T.blue} opacity="0.8" />
          <text x="253" y="60" fontSize="7" fill={T.blue} fontFamily="monospace" opacity="0.75">pH probe</text>
          <rect x="488" y="66" width="5" height="20" rx="2.5" fill={T.teal} opacity="0.55" />
          <rect x="485" y="64" width="11" height="5" rx="2" fill={T.teal} opacity="0.8" />
          <text x="499" y="73" fontSize="7" fill={T.teal} fontFamily="monospace" opacity="0.75">DO sensor</text>
          <rect x="0" y="326" width="760" height="14" fill={T.surfaceBg} />
          <text x="380" y="336" textAnchor="middle" fontSize="7" fill={T.textMuted} fontFamily="monospace">Schematic cross-section of intensive shrimp pond · Not to scale · © Innovare Biopharma LLP 2026</text>
        </svg>
      </div>
      {[0,1,2,3].map(i => (
        <div key={i} style={{ position: "absolute", top: i < 2 ? -5 : "auto", bottom: i >= 2 ? -5 : "auto", left: i%2===0 ? -5 : "auto", right: i%2!==0 ? -5 : "auto", width: 10, height: 10, borderRadius: "50%", background: T.blue, boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${T.blueLight}` }} />
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════
   TOPBAR
══════════════════════════════════════════════════ */
function Topbar() {
  return (
    <div style={{
      position: "sticky", top: 0, zIndex: 30,
      background: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)",
      borderBottom: `1px solid ${T.borderLight}`,
      padding: "0 40px",
      display: "flex", alignItems: "center", justifyContent: "space-between", height: 64,
      boxShadow: "0 1px 3px rgba(15,23,42,0.06)",
      fontFamily: FONT_SANS,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 34, height: 34, borderRadius: 8, background: T.blue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🦐</div>
        <span style={{ fontSize: 15, fontWeight: 800, color: T.textPrimary, fontFamily: FONT_SANS }}>Innovare Biopharma</span>
        <span style={{ fontSize: 10, color: T.teal, letterSpacing: 2, textTransform: "uppercase" as const, marginTop: 2, fontFamily: FONT_SANS }}>LLP</span>
      </div>
      <nav style={{ display: "flex", gap: 28 }}>
        {["Products", "Solutions", "About", "Contact"].map(n => (
          <a key={n} href="#" style={{ fontSize: 13, color: T.textSecondary, textDecoration: "none", transition: "color .2s", fontWeight: 500, fontFamily: FONT_SANS }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = T.blue; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = T.textSecondary; }}
          >{n}</a>
        ))}
      </nav>
      <a href="#" style={{
        position: "relative", background: T.blueMid,
        border: `1px solid ${T.blueLight}`,
        borderRadius: 10, padding: "8px 16px",
        color: T.blue, cursor: "pointer",
        display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600,
        textDecoration: "none", transition: "all .2s", fontFamily: FONT_SANS,
      }}
        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = T.blueLight; }}
        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = T.blueMid; }}
      >
        📞 Contact Us
      </a>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════ */
export default function SustainabilityPage() {
  const [soilTab, setSoilTab]   = useState<"parameters"|"layers"|"practices">("parameters");
  const [waterTab, setWaterTab] = useState<"parameters"|"schedule"|"treatments">("parameters");

  const soilParams = [
    { label: "Soil pH",           ideal: "6.5 – 7.5",     icon: "⚖️", color: T.blue,   desc: "Prevents nutrient lock-up; eliminates acid-sulphate toxicity risk." },
    { label: "Organic Matter",    ideal: "2 – 4 %",        icon: "🌱", color: T.green,  desc: "Sustains beneficial microbial biomass without triggering hypoxia." },
    { label: "Redox Potential",   ideal: "+50 to +200 mV", icon: "⚡", color: T.teal,   desc: "Aerobic sediment suppresses H₂S generation and anaerobic fermentation." },
    { label: "Phosphorus",        ideal: "20 – 40 ppm",    icon: "💊", color: T.blue,   desc: "Supports phytoplankton without driving eutrophication events." },
    { label: "Hydrogen Sulfide",  ideal: "< 0.01 mg/L",   icon: "⚠️", color: T.red,    desc: "Lethal at trace levels; managed via aeration and liming protocols." },
    { label: "Silt Content",      ideal: "< 30 %",         icon: "🪴", color: "#a05c20",desc: "Limits resuspension events that devastate water clarity and gill function." },
  ];

  const waterParams = [
    { label: "Dissolved Oxygen", ideal: "≥ 5.0 mg/L",  icon: "🫧", color: T.teal,         urgency: "Critical" },
    { label: "pH",               ideal: "7.5 – 8.5",   icon: "⚗️", color: T.blue,         urgency: "Critical" },
    { label: "Ammonia (NH₃)",   ideal: "< 0.1 mg/L",  icon: "☣️", color: T.red,           urgency: "Critical" },
    { label: "Temperature",      ideal: "26 – 30 °C",  icon: "🌡️", color: "#f59e0b",      urgency: "High"     },
    { label: "Salinity",         ideal: "10 – 25 ppt", icon: "🧂", color: T.blue,         urgency: "High"     },
    { label: "Alkalinity",       ideal: "100–150 mg/L",icon: "🪨", color: T.teal,         urgency: "Medium"   },
    { label: "Nitrite (NO₂⁻)", ideal: "< 0.5 mg/L",  icon: "🔬", color: "#7c3aed",      urgency: "Medium"   },
    { label: "Turbidity",        ideal: "30–60 cm SD", icon: "👁️", color: T.textSecondary, urgency: "Standard" },
  ];

  const urgencyColor: Record<string,string> = { Critical: T.red, High: "#f59e0b", Medium: T.teal, Standard: T.textMuted };

  const soilLayers = [
    { name: "Water Column",       depth: "Surface – 1.7 m", color: T.tealLight,  border: T.teal,    icon: "💧", desc: "Main habitat. Precise chemistry maintained through our water treatments." },
    { name: "Floc / Biofilm",     depth: "0 – 2 cm",       color: "#d9f0c8",    border: T.green,   icon: "🦠", desc: "Living microbial mat. Probiotics colonise here to out-compete pathogens." },
    { name: "Aerobic Sediment",   depth: "2 – 5 cm",       color: "#ffe8cc",    border: "#c08040", icon: "🌬️", desc: "Active nitrification zone. Maintained by strategic paddle-wheel placement." },
    { name: "Anaerobic Sediment", depth: "5 – 15 cm",      color: "#f3dece",    border: "#8b5e3c", icon: "⚠️", desc: "Risk zone for H₂S and methane. Managed with zeolite and liming." },
    { name: "Pond Bed",           depth: "> 15 cm",        color: "#e8d5c0",    border: "#6b3f2a", icon: "🪨", desc: "Clay substrate. Sun-dried post-harvest to oxidise residual organics." },
  ];

  const monitoringSchedule = [
    { param: "Dissolved Oxygen",   freq: "Every 6 hours", urgency: "Critical", tool: "DO meter / probe"  },
    { param: "pH",                 freq: "Twice daily",   urgency: "Critical", tool: "Digital pH meter"  },
    { param: "Temperature",        freq: "Twice daily",   urgency: "High",     tool: "Thermometer"       },
    { param: "Ammonia",            freq: "Daily",         urgency: "High",     tool: "Photometric test"  },
    { param: "Salinity",           freq: "Daily",         urgency: "High",     tool: "Refractometer"     },
    { param: "Alkalinity",         freq: "Weekly",        urgency: "Medium",   tool: "Titration kit"     },
    { param: "Nitrite / Nitrate",  freq: "Weekly",        urgency: "Medium",   tool: "Test strips / kit" },
    { param: "Turbidity (Secchi)", freq: "Weekly",        urgency: "Standard", tool: "Secchi disk"       },
  ];

  const treatments = [
    { name: "Potassium Chloride", cat: "Ionic Correction",   icon: "⚡", color: T.teal,   targets: "K⁺ deficiency · Osmoregulation", dose: "10–15 kg / ha·m" },
    { name: "Vibriovare",         cat: "Sanitizer",          icon: "🛡️", color: T.blue,   targets: "Vibrio bloom · Bacterial load",   dose: "2–3 L / ha"      },
    { name: "Propondvare",    cat: "Biological",         icon: "🦠", color: T.green,  targets: "Ammonia · Organic overload",      dose: "500 g / ha"      },
    { name: "pH Buffer Plus",         cat: "pH Management",      icon: "⚖️", color: T.teal,   targets: "Morning pH dip · Low alkalinity", dose: "5 kg / ha"       },
    { name: "Zeolite",               cat: "Zeolite Amendment",  icon: "🪨", color: "#a05c20",targets: "Ammonia spike · Turbidity",       dose: "20–50 kg / ha"   },
    { name: "Oxyvare Tablets",      cat: "Emergency O₂",      icon: "🫧", color: T.teal,   targets: "Acute DO crash",                  dose: "3–5 kg / ha"     },
  ];

  return (
    <div style={{ minHeight: "100vh", background: T.pageBg, color: T.textPrimary, position: "relative", overflowX: "hidden", fontFamily: FONT_SANS }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle, rgba(21,101,192,0.06) 1px, transparent 1px)`, backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />

      <Topbar />

      {/* ══ HERO ══ */}
      <section style={{ position: "relative", zIndex: 1, marginTop: 20 }}>
        <div style={{ background: T.blue, color: "#fff", padding: "7px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 10, fontFamily: FONT_MONO, letterSpacing: 1.8, fontWeight: 600 }}>
          <span>DOCUMENT CLASS: SUSTAINABILITY REPORT · UNRESTRICTED</span>
          <span>IBP-SR-2026 · REV 3.1 · APRIL 2026</span>
          <span>INNOVARE BIOPHARMA LLP · HYDERABAD</span>
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 48px 40px", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "start" }}>
          <div>
            <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <SectionTag code="§ 01" label="Mission Statement" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: 54, fontWeight: 900, letterSpacing: -2.5, lineHeight: 0.97, color: T.textPrimary, marginBottom: 24, fontFamily: FONT_SANS }}
            >
              Science That<br />
              <span style={{ color: T.blue }}>Protects</span><br />
              the Pond.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
              style={{ fontSize: 16, color: T.textSecondary, lineHeight: 1.8, maxWidth: 460, marginBottom: 32, fontFamily: FONT_SANS }}
            >
              Every formula Innovare develops is stress-tested against one measure beyond efficacy: does it leave the pond — and the planet — in better condition than it found it?
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.6 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 36 }}>
              {[
                { val: 40,    suf: "%",  label: "Chemical reduction",   icon: "🧪" },
                { val: 92,    suf: "%",  label: "Biodegradable inputs", icon: "🌱" },
                { val: 15000, suf: "+",  label: "Farmers supported",    icon: "👨‍🌾" },
              ].map((s,i) => (
                <div key={i} style={{ padding: "16px 14px", borderRadius: 12, background: T.cardBg, border: `1px solid ${T.borderLight}`, boxShadow: "0 2px 8px rgba(15,23,42,0.06)", textAlign: "center" }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: T.blue, letterSpacing: -1, fontFamily: FONT_SANS }}><Counter to={s.val} suffix={s.suf} /></div>
                  <div style={{ fontSize: 11, color: T.textMuted, marginTop: 3, fontFamily: FONT_SANS }}>{s.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap" as const }}>
              <a href="#soil" style={{ padding: "12px 28px", borderRadius: 10, background: `linear-gradient(135deg,${T.blue},#0288d1)`, color: "#fff", fontWeight: 700, fontSize: 13, textDecoration: "none", boxShadow: "0 6px 20px rgba(21,101,192,0.3)", transition: "all .25s", fontFamily: FONT_SANS }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "none"; }}
              >🌍 Explore Our Science</a>
              <a href="#" style={{ padding: "12px 24px", borderRadius: 10, background: T.cardBg, border: `1px solid ${T.borderMed}`, color: T.textSecondary, fontWeight: 600, fontSize: 13, textDecoration: "none", transition: "all .25s", fontFamily: FONT_SANS }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = T.blue; el.style.color = T.blue; el.style.background = T.blueMid; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = T.borderMed; el.style.color = T.textSecondary; el.style.background = T.cardBg; }}
              >Download Report →</a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            <PondDiagram />
            <p style={{ textAlign: "center", fontSize: 9, color: T.textMuted, marginTop: 10, fontFamily: FONT_MONO, letterSpacing: 1 }}>FIG. 1 — POND CROSS-SECTION SCHEMATIC · NOT TO SCALE</p>
          </motion.div>
        </div>
      </section>

      {/* ── Rule ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "8px 0" }}>
          <div style={{ flex: 1, height: 1, background: T.borderLight }} />
          <span style={{ fontSize: 9, color: T.textMuted, letterSpacing: 3, textTransform: "uppercase" as const, fontFamily: FONT_MONO, flexShrink: 0 }}>§ 02 · SOIL QUALITY</span>
          <div style={{ flex: 1, height: 1, background: T.borderLight }} />
        </div>
      </div>

      {/* ══ SOIL QUALITY ══ */}
      <section id="soil" style={{ position: "relative", zIndex: 1, padding: "48px 0 72px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 20 }}>
              <div>
                <SectionTag code="§ 02" label="Soil Quality Management" />
                <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -2, color: T.textPrimary, lineHeight: 1.05, fontFamily: FONT_SANS }}>The Foundation<br /><span style={{ color: T.blue }}>of Every Harvest</span></h2>
              </div>
              <p style={{ fontSize: 14, color: T.textSecondary, maxWidth: 400, lineHeight: 1.8, fontFamily: FONT_SANS }}>Pond sediment is a living ecosystem. Neglected soil accumulates ammonia, hydrogen sulfide, and pathogens that cascade into crop losses. Our protocols actively restore and maintain sediment chemistry.</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div style={{ display: "flex", gap: 6, marginBottom: 28, padding: "6px", background: T.cardBg, borderRadius: 12, border: `1px solid ${T.borderLight}`, width: "fit-content", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}>
              <TabBtn active={soilTab==="parameters"} label="Key Parameters"   onClick={() => setSoilTab("parameters")} accent={T.blue} />
              <TabBtn active={soilTab==="layers"}     label="Sediment Layers"  onClick={() => setSoilTab("layers")}     accent={T.blue} />
              <TabBtn active={soilTab==="practices"}  label="Best Practices"   onClick={() => setSoilTab("practices")}  accent={T.blue} />
            </div>
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div key={soilTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
              {soilTab === "parameters" && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
                  {soilParams.map((p, i) => (
                    <div key={i} style={{ background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 16, padding: "22px 20px", boxShadow: "0 2px 8px rgba(15,23,42,0.05)", position: "relative", overflow: "hidden", transition: "all .25s" }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = `${p.color}50`; el.style.transform = "translateY(-4px)"; el.style.boxShadow = `0 12px 32px rgba(21,101,192,0.1)`; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.borderLight; el.style.transform = "none"; el.style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
                    >
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${p.color},${p.color}44)`, borderRadius: "16px 16px 0 0" }} />
                      <div style={{ position: "absolute", top: -8, right: -4, fontSize: 64, opacity: 0.04 }}>{p.icon}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                        <div style={{ width: 38, height: 38, borderRadius: 10, background: `${p.color}15`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{p.icon}</div>
                        <span style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary, fontFamily: FONT_SANS }}>{p.label}</span>
                      </div>
                      <div style={{ marginBottom: 10 }}>
                        <span style={{ fontSize: 9, color: T.textMuted, letterSpacing: 2, textTransform: "uppercase" as const, fontFamily: FONT_MONO }}>Ideal Range</span>
                        <p style={{ fontSize: 20, fontWeight: 800, color: p.color, letterSpacing: -0.5, marginTop: 2, fontFamily: FONT_SANS }}>{p.ideal}</p>
                      </div>
                      <p style={{ fontSize: 13, color: T.textSecondary, lineHeight: 1.65, fontFamily: FONT_SANS }}>{p.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {soilTab === "layers" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 24 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 0, borderRadius: 16, overflow: "hidden", border: `1px solid ${T.borderLight}`, boxShadow: "0 4px 16px rgba(15,23,42,0.07)" }}>
                    {soilLayers.map((layer, i) => (
                      <div key={i} style={{ padding: "16px 18px", background: layer.color, borderBottom: i < soilLayers.length-1 ? `1px solid ${layer.border}30` : "none", display: "flex", alignItems: "center", gap: 12, transition: "padding .2s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = "26px"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = "18px"; }}
                      >
                        <div style={{ width: 4, height: 36, background: layer.border, borderRadius: 4, flexShrink: 0 }} />
                        <div style={{ fontSize: 20, flexShrink: 0 }}>{layer.icon}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
                            <span style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary, fontFamily: FONT_SANS }}>{layer.name}</span>
                            <span style={{ fontSize: 10, color: T.textMuted, fontFamily: FONT_MONO }}>{layer.depth}</span>
                          </div>
                          <p style={{ fontSize: 12, color: T.textSecondary, lineHeight: 1.5, fontFamily: FONT_SANS }}>{layer.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div style={{ padding: "20px 22px", background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 14, boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: T.blue, letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 12, fontFamily: FONT_MONO }}>Nitrogen Cycle in Sediment</p>
                      {[
                        { from:"Feed Protein", to:"NH₃ / NH₄⁺", color:"#f59e0b", label:"Excretion & decomposition" },
                        { from:"NH₃ / NH₄⁺",  to:"NO₂⁻",       color:T.teal,    label:"Nitrosomonas (aerobic)" },
                        { from:"NO₂⁻",        to:"NO₃⁻",       color:T.blue,    label:"Nitrobacter (aerobic)"  },
                        { from:"NO₃⁻",        to:"N₂ gas",      color:T.green,   label:"Denitrification (anoxic)"},
                      ].map((step,i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: i<3 ? `1px solid ${T.borderLight}` : "none" }}>
                          <span style={{ fontSize: 11, fontWeight: 700, color: step.color, fontFamily: FONT_MONO, minWidth: 80 }}>{step.from}</span>
                          <span style={{ fontSize: 13, color: step.color }}>→</span>
                          <span style={{ fontSize: 11, fontWeight: 700, color: step.color, fontFamily: FONT_MONO, minWidth: 70 }}>{step.to}</span>
                          <span style={{ fontSize: 11, color: T.textMuted, borderLeft: `1px solid ${T.borderLight}`, paddingLeft: 8, fontFamily: FONT_SANS }}>{step.label}</span>
                        </div>
                      ))}
                    </div>
                    {[
                      { icon:"🧬", title:"Probiotic Colonisation", color:T.green, text:"Bacillus strains dosed bi-weekly colonise the floc layer, out-competing Vibrio pathogens without antibiotics." },
                      { icon:"🪨", title:"Liming Protocol",        color:T.blue,  text:"Agricultural lime applied to the dry pond floor neutralises acidity, kills overwintering pathogens, and binds excess phosphorus." },
                      { icon:"🌬️", title:"Aeration Management",   color:T.teal,  text:"Paddle-wheel positioning ensures sediment redox stays above +100 mV across the entire pond floor." },
                    ].map((card,i) => (
                      <div key={i} style={{ padding: "15px 18px", background: T.cardBg, border: `1px solid ${T.borderLight}`, borderLeft: `3px solid ${card.color}`, borderRadius: 12, display: "flex", gap: 12, boxShadow: "0 2px 6px rgba(15,23,42,0.04)" }}>
                        <span style={{ fontSize: 20, flexShrink: 0 }}>{card.icon}</span>
                        <div>
                          <p style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary, marginBottom: 4, fontFamily: FONT_SANS }}>{card.title}</p>
                          <p style={{ fontSize: 12, color: T.textSecondary, lineHeight: 1.65, fontFamily: FONT_SANS }}>{card.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {soilTab === "practices" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    { step:"01", icon:"☀️", title:"Post-harvest Sun Drying",   color:"#f59e0b", desc:"Full pond drainage and 2–3 weeks of solar drying oxidises residual organic matter, resets microbial communities, and reduces pathogen carryover." },
                    { step:"02", icon:"🪨", title:"Lime Application",           color:T.blue,   desc:"Agricultural lime (2–3 t/ha) broadcast across dry pond floor. Target: soil pH 7.0–7.5, elimination of acid-sulphate conditions." },
                    { step:"03", icon:"🌬️", title:"Aerator Grid Placement",    color:T.teal,   desc:"Paddle-wheel aerators positioned per pond geometry to ensure complete water turnover every 6 hours and sediment redox > +100 mV." },
                    { step:"04", icon:"🧬", title:"Probiotic Seeding",          color:T.green,  desc:"Bacillus-based consortium applied at stocking and bi-weekly thereafter. Accelerates organic decomposition and produces bacteriocins." },
                    { step:"05", icon:"🪣", title:"Sludge Centralisation",      color:"#a05c20",desc:"Pond slope (1% grade to central drain) channels settled sludge for periodic removal — preventing anaerobic dead zones." },
                    { step:"06", icon:"📊", title:"Weekly Sediment Testing",    color:T.blue,   desc:"BOD, COD, redox, and Secchi disk logged weekly. Trend analysis triggers corrective action before critical thresholds breach." },
                  ].map((p,i) => (
                    <div key={i} style={{ padding: "20px 20px", background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 14, display: "flex", gap: 14, alignItems: "flex-start", boxShadow: "0 2px 8px rgba(15,23,42,0.05)", transition: "all .25s" }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = `${p.color}50`; el.style.transform = "translateX(4px)"; el.style.boxShadow = `0 6px 20px ${p.color}18`; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.borderLight; el.style.transform = "none"; el.style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
                    >
                      <div style={{ width: 44, height: 44, borderRadius: 12, background: `${p.color}12`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{p.icon}</div>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                          <span style={{ fontSize: 9, color: p.color, fontWeight: 800, letterSpacing: 2, fontFamily: FONT_MONO }}>STEP {p.step}</span>
                          <span style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary, fontFamily: FONT_SANS }}>{p.title}</span>
                        </div>
                        <p style={{ fontSize: 13, color: T.textSecondary, lineHeight: 1.7, fontFamily: FONT_SANS }}>{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Rule ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "8px 0" }}>
          <div style={{ flex: 1, height: 1, background: T.borderLight }} />
          <span style={{ fontSize: 9, color: T.textMuted, letterSpacing: 3, textTransform: "uppercase" as const, fontFamily: FONT_MONO, flexShrink: 0 }}>§ 03 · WATER QUALITY</span>
          <div style={{ flex: 1, height: 1, background: T.borderLight }} />
        </div>
      </div>

      {/* ══ WATER QUALITY ══ */}
      <section id="water" style={{ position: "relative", zIndex: 1, padding: "48px 0 72px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 20 }}>
              <div>
                <SectionTag code="§ 03" label="Water Quality Management" />
                <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -2, color: T.textPrimary, lineHeight: 1.05, fontFamily: FONT_SANS }}>Every Drop<br /><span style={{ color: T.teal }}>Held to a Standard</span></h2>
              </div>
              <p style={{ fontSize: 14, color: T.textSecondary, maxWidth: 400, lineHeight: 1.8, fontFamily: FONT_SANS }}>Water chemistry in intensive ponds fluctuates hourly. Our treatments are precision tools — not broad-spectrum chemicals — designed to correct specific deficits without disrupting natural ecology.</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div style={{ display: "flex", gap: 6, marginBottom: 28, padding: "6px", background: T.cardBg, borderRadius: 12, border: `1px solid ${T.borderLight}`, width: "fit-content", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}>
              <TabBtn active={waterTab==="parameters"} label="Key Parameters"      onClick={() => setWaterTab("parameters")} accent={T.teal} />
              <TabBtn active={waterTab==="schedule"}   label="Monitoring Schedule" onClick={() => setWaterTab("schedule")}   accent={T.teal} />
              <TabBtn active={waterTab==="treatments"} label="Our Treatments"      onClick={() => setWaterTab("treatments")} accent={T.teal} />
            </div>
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div key={waterTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
              {waterTab === "parameters" && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
                  {waterParams.map((p, i) => (
                    <div key={i} style={{ background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 14, padding: "20px 18px", boxShadow: "0 2px 8px rgba(15,23,42,0.05)", position: "relative", overflow: "hidden", transition: "all .25s" }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = `${p.color}50`; el.style.transform = "translateY(-4px)"; el.style.boxShadow = `0 12px 30px rgba(15,23,42,0.1)`; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.borderLight; el.style.transform = "none"; el.style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
                    >
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: p.color, borderRadius: "14px 14px 0 0" }} />
                      <div style={{ position: "absolute", top: 10, right: 10 }}>
                        <span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 5, background: `${urgencyColor[p.urgency]}18`, color: urgencyColor[p.urgency], fontWeight: 700, letterSpacing: 0.5, fontFamily: FONT_MONO }}>{p.urgency}</span>
                      </div>
                      <div style={{ fontSize: 24, marginBottom: 12, marginTop: 4 }}>{p.icon}</div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary, marginBottom: 8, fontFamily: FONT_SANS }}>{p.label}</p>
                      <div>
                        <span style={{ fontSize: 9, color: T.textMuted, letterSpacing: 2, textTransform: "uppercase" as const, fontFamily: FONT_MONO }}>Target</span>
                        <p style={{ fontSize: 16, fontWeight: 800, color: p.color, letterSpacing: -0.3, marginTop: 2, fontFamily: FONT_SANS }}>{p.ideal}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {waterTab === "schedule" && (
                <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 20 }}>
                  <div style={{ background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 16px rgba(15,23,42,0.07)" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1.2fr 1fr 1fr", padding: "12px 20px", background: `linear-gradient(135deg,${T.blue},${T.teal})` }}>
                      {["Parameter","Frequency","Urgency","Tool"].map(h => (
                        <span key={h} style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: 1.5, textTransform: "uppercase" as const, fontFamily: FONT_MONO }}>{h}</span>
                      ))}
                    </div>
                    {monitoringSchedule.map((row,i) => (
                      <div key={i} style={{ display: "grid", gridTemplateColumns: "1.5fr 1.2fr 1fr 1fr", padding: "11px 20px", background: i%2===0 ? T.surfaceBg : T.cardBg, borderTop: `1px solid ${T.borderLight}`, alignItems: "center", transition: "background .2s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = T.blueMid; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = i%2===0 ? T.surfaceBg : T.cardBg; }}
                      >
                        <span style={{ fontSize: 13, color: T.textPrimary, fontWeight: 500, fontFamily: FONT_SANS }}>{row.param}</span>
                        <span style={{ fontSize: 12, color: T.textSecondary, fontFamily: FONT_SANS }}>{row.freq}</span>
                        <span style={{ fontSize: 9, padding: "2px 8px", borderRadius: 5, background: `${urgencyColor[row.urgency]}15`, color: urgencyColor[row.urgency], fontWeight: 700, letterSpacing: 0.5, width: "fit-content", fontFamily: FONT_MONO }}>{row.urgency}</span>
                        <span style={{ fontSize: 11, color: T.textMuted, fontFamily: FONT_SANS }}>{row.tool}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div style={{ padding: "20px 20px", background: "#fff5f5", border: `1px solid #fecaca`, borderLeft: `4px solid ${T.red}`, borderRadius: 14 }}>
                      <p style={{ fontSize: 11, fontWeight: 800, color: T.red, letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 12, fontFamily: FONT_MONO }}>🚨 Emergency Thresholds</p>
                      {[
                        { t:"DO < 3.0 mg/L",     a:"Activate all aerators. Stop feeding immediately."  },
                        { t:"pH < 7.0 or > 9.2", a:"Lime or water exchange correction within 2 hours." },
                        { t:"NH₃ > 0.5 mg/L",    a:"50% water exchange + emergency probiotic dose."    },
                        { t:"NO₂⁻ > 1.0 mg/L",  a:"Salt addition 5 ppt + maximum aeration."           },
                      ].map((a,i) => (
                        <div key={i} style={{ padding: "8px 0", borderBottom: i<3 ? "1px solid #fee2e2" : "none" }}>
                          <p style={{ fontSize: 12, fontWeight: 700, color: T.red, fontFamily: FONT_MONO }}>{a.t}</p>
                          <p style={{ fontSize: 12, color: T.textSecondary, marginTop: 2, fontFamily: FONT_SANS }}>{a.a}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ padding: "20px 20px", background: T.tealLight, border: `1px solid #bae6fd`, borderLeft: `4px solid ${T.teal}`, borderRadius: 14 }}>
                      <p style={{ fontSize: 11, fontWeight: 800, color: T.teal, letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 12, fontFamily: FONT_MONO }}>💡 Pro Tips</p>
                      {[
                        "Measure DO at dawn — the natural daily minimum.",
                        "Calibrate probes weekly; drift kills faster than disease.",
                        "Post-rain: check salinity & pH within 30 minutes.",
                        "Log all readings digitally — trends matter more than snapshots.",
                      ].map((tip,i) => (
                        <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "6px 0", borderBottom: i<3 ? "1px solid rgba(8,145,178,0.15)" : "none" }}>
                          <div style={{ width: 5, height: 5, borderRadius: "50%", background: T.teal, marginTop: 5, flexShrink: 0 }} />
                          <p style={{ fontSize: 12, color: T.textSecondary, lineHeight: 1.6, fontFamily: FONT_SANS }}>{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {waterTab === "treatments" && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
                  {treatments.map((prod,i) => (
                    <div key={i} style={{ background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 16, padding: "22px 20px", boxShadow: "0 2px 8px rgba(15,23,42,0.05)", position: "relative", overflow: "hidden", transition: "all .25s" }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = `${prod.color}50`; el.style.transform = "translateY(-4px)"; el.style.boxShadow = `0 14px 36px rgba(15,23,42,0.1)`; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.borderLight; el.style.transform = "none"; el.style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
                    >
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: prod.color, borderRadius: "16px 16px 0 0" }} />
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                        <div style={{ width: 42, height: 42, borderRadius: 12, background: `${prod.color}15`, border: `1px solid ${prod.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{prod.icon}</div>
                        <span style={{ fontSize: 9, padding: "3px 9px", borderRadius: 5, background: `${prod.color}12`, color: prod.color, fontWeight: 700, letterSpacing: 0.5, fontFamily: FONT_MONO }}>{prod.cat}</span>
                      </div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, color: T.textPrimary, marginBottom: 8, fontFamily: FONT_SANS }}>{prod.name}</h4>
                      <div style={{ marginBottom: 10 }}>
                        <span style={{ fontSize: 9, color: T.textMuted, textTransform: "uppercase" as const, letterSpacing: 1.5, fontFamily: FONT_MONO }}>Targets</span>
                        <p style={{ fontSize: 12, color: T.textSecondary, marginTop: 3, fontFamily: FONT_SANS }}>{prod.targets}</p>
                      </div>
                      <div style={{ padding: "8px 14px", background: `${prod.color}10`, border: `1px solid ${prod.color}25`, borderRadius: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 10, color: T.textMuted, fontFamily: FONT_MONO }}>Typical dose</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: prod.color, fontFamily: FONT_MONO }}>{prod.dose}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      
{/* ══ AQUACULTURE STANDARDS ══ */}
<section style={{ position: "relative", zIndex: 1, background: "#fff", padding: "72px 0" }}>
  <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
    <Reveal>
      <div style={{ marginBottom: 36 }}>
        <SectionTag code="§ 04" label="Aquaculture Standards" />
        <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -2, color: T.textPrimary, lineHeight: 1.05, fontFamily: FONT_SANS }}>
          Industry <span style={{ color: T.blue }}>Standards We Follow</span>
        </h2>
      </div>
    </Reveal>

    <Reveal delay={0.06}>
      <div style={{ padding: "24px 28px", background: T.blueMid, border: `1px solid ${T.blueLight}`, borderLeft: `4px solid ${T.blue}`, borderRadius: 14, marginBottom: 36 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: T.blue, marginBottom: 10, fontFamily: FONT_SANS }}>Introduction to Aquaculture Standards</h3>
        <p style={{ fontSize: 14, color: T.textSecondary, lineHeight: 1.8, marginBottom: 10, fontFamily: FONT_SANS }}>
          Aquaculture entails managed farming or culture of organisms in saline or brackishwater areas for the purpose of enhancing production, both for domestic and export markets — including shrimp, prawn, crabs, lobsters, finfishes like groupers, and oysters.
        </p>
        <p style={{ fontSize: 14, color: T.textSecondary, lineHeight: 1.8, fontFamily: FONT_SANS }}>
          To ensure orderly and sustainable development, the industry is guided by environmentally responsible and socially acceptable standards covering farm management, wastewater treatment, and mitigation of adverse environmental impacts.
        </p>
      </div>
    </Reveal>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
      {[
        { icon: "🌿", title: "Environmental Responsibility",  note: "ISO 14001 aligned",  color: T.green,    text: "Farms must operate within defined environmental carrying capacities, with effluent treatment systems and regular impact assessments to minimize ecosystem disruption." },
        { icon: "🦐", title: "Animal Health & Welfare",       note: "GAP / BAP certified", color: T.teal,     text: "Species-specific stocking densities, disease prevention programs, and veterinary oversight ensure animals are raised under humane and healthy conditions." },
        { icon: "🍽️", title: "Food Safety & Traceability",   note: "HACCP / GlobalG.A.P", color: T.blue,     text: "Complete batch-level traceability from broodstock to harvest, with residue testing for antibiotics, heavy metals, and chemical contaminants before export." },
        { icon: "👷", title: "Worker Safety & Social Equity", note: "ILO standards",        color: "#7c3aed",  text: "Fair wages, safe working conditions, prohibition of child and forced labour, and access to grievance mechanisms are mandatory across certified supply chains." },
        { icon: "💧", title: "Water Use & Discharge",         note: "MPEDA / EIA norms",   color: T.teal,     text: "Licensed water abstraction limits, settling pond requirements, and zero-discharge goals for high-density systems and to protect shared water resources." },
        { icon: "📋", title: "Record Keeping & Audits",       note: "ASC / BAP audited",   color: T.blue,     text: "Third-party annual audits verify compliance. Farm records covering feed lots, treatments, mortalities, and harvests must be retained for a minimum of three years." },
      ].map((s, i) => (
        <Reveal key={i} delay={i * 0.06}>
          <div style={{ background: T.cardBg, border: `1px solid ${T.borderLight}`, borderRadius: 16, padding: "22px 20px", boxShadow: "0 2px 8px rgba(15,23,42,0.05)", position: "relative", overflow: "hidden", transition: "all .25s" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = `${s.color}50`; el.style.transform = "translateY(-4px)"; el.style.boxShadow = `0 12px 32px rgba(21,101,192,0.1)`; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.borderLight; el.style.transform = "none"; el.style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)"; }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: s.color, borderRadius: "16px 16px 0 0" }} />
            <div style={{ width: 42, height: 42, borderRadius: 12, background: `${s.color}15`, border: `1px solid ${s.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 14 }}>{s.icon}</div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary, marginBottom: 8, fontFamily: FONT_SANS }}>{s.title}</h4>
            <p style={{ fontSize: 13, color: T.textSecondary, lineHeight: 1.7, marginBottom: 14, fontFamily: FONT_SANS }}>{s.text}</p>
            <span style={{ fontSize: 10, padding: "3px 10px", borderRadius: 6, background: `${s.color}12`, color: s.color, fontWeight: 700, letterSpacing: 0.5, fontFamily: FONT_MONO }}>{s.note}</span>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
      {/* ══ CTA ══ */}
      <section style={{ position: "relative", zIndex: 1, padding: "80px 48px" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(ellipse 60% 80% at 50% 50%, ${T.blueLight} 0%, transparent 65%)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <Reveal>
            <SectionTag code="§ 05" label="Take Action" />
            <h2 style={{ fontSize: 42, fontWeight: 900, letterSpacing: -2, color: T.textPrimary, lineHeight: 1.05, marginBottom: 16, fontFamily: FONT_SANS }}>Ready to Farm<br /><span style={{ color: T.blue }}>More Responsibly?</span></h2>
            <p style={{ fontSize: 15, color: T.textSecondary, lineHeight: 1.8, marginBottom: 36, fontFamily: FONT_SANS }}>Our technical team will build a tailored soil and water management protocol for your farm — at no cost. Backed by data, not guesswork.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const }}>
              <button style={{ padding: "14px 36px", borderRadius: 12, background: `linear-gradient(135deg,${T.blue},#0288d1)`, color: "#fff", fontWeight: 800, fontSize: 14, border: "none", cursor: "pointer", boxShadow: "0 8px 28px rgba(21,101,192,0.3)", transition: "all .25s", fontFamily: FONT_SANS }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 14px 40px rgba(21,101,192,0.4)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 28px rgba(21,101,192,0.3)"; }}
              >Request a Free Consultation</button>
              <button style={{ padding: "14px 30px", borderRadius: 12, background: T.cardBg, border: `1px solid ${T.borderMed}`, color: T.textSecondary, fontWeight: 600, fontSize: 14, cursor: "pointer", transition: "all .25s", fontFamily: FONT_SANS }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLButtonElement; el.style.borderColor = T.blue; el.style.color = T.blue; el.style.background = T.blueMid; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLButtonElement; el.style.borderColor = T.borderMed; el.style.color = T.textSecondary; el.style.background = T.cardBg; }}
              >Download Sustainability Report →</button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}