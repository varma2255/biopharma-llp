// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { useState } from "react";

// // // const certificates = [
// // //   { image: "/certificates/product1.jpg", title: "Product Certificate 1" },
// // //   { image: "/certificates/product2.jpg", title: "Product Certificate 2" },
// // //   { image: "/certificates/product3.jpg", title: "Product Certificate 3" },
// // //   { image: "/certificates/product4.jpg", title: "Product Certificate 4" },
// // // ];

// // // export default function ProductCertificatesPage() {
// // //   const [selected, setSelected] = useState<string | null>(null);

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-[#071226] via-[#0f1f3d] to-[#020617] text-white px-6 py-24">

// // //       {/* 🔷 HEADER */}
// // //       <div className="text-center mb-16">
// // //         <h1 className="text-5xl font-semibold">
// // //           Product Certifications
// // //         </h1>
// // //         <p className="text-gray-400 mt-3">
// // //           Verified compliance across our product range
// // //         </p>
// // //       </div>

// // //       {/* 🔷 GRID */}
// // //       <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">

// // //         {certificates.map((cert, index) => (
// // //           <motion.div
// // //             key={index}
// // //             whileHover={{ scale: 1.05 }}
// // //             className="bg-white/5 border border-white/10 rounded-xl p-3 cursor-pointer backdrop-blur"
// // //             onClick={() => setSelected(cert.image)}
// // //           >
// // //             <img
// // //               src={cert.image}
// // //               alt={cert.title}
// // //               className="w-full h-[180px] object-contain rounded-lg"
// // //             />

// // //             <p className="text-sm text-gray-300 mt-2 text-center">
// // //               {cert.title}
// // //             </p>
// // //           </motion.div>
// // //         ))}

// // //       </div>

// // //       {/* 🔷 LIGHTBOX */}
// // //       {selected && (
// // //         <div
// // //           className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
// // //           onClick={() => setSelected(null)}
// // //         >
// // //           <img
// // //             src={selected}
// // //             className="max-w-[95%] max-h-[95%] rounded-xl shadow-2xl"
// // //           />
// // //         </div>
// // //       )}

// // //     </div>
// // //   );
// // // }
// // "use client";

// // import Footer from "@/components/Footer";
// // import { motion } from "framer-motion";
// // import { useState } from "react";

// // const certificates = [
// //   { image: "/certificates/product1.jpg", title: "Product Certificate 1" },
// //   { image: "/certificates/product2.jpg", title: "Product Certificate 2" },
// //   { image: "/certificates/product3.jpg", title: "Product Certificate 3" },
// //   { image: "/certificates/product4.jpg", title: "Product Certificate 4" },
// // ];

// // export default function ProductCertificatesPage() {
// //   const [selected, setSelected] = useState<any>(null);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-[#071226] via-[#0f1f3d] to-[#020617] text-white relative overflow-hidden">

// //       {/* 🔷 BACKGROUND GLOW */}
// //       <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>
// //       <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>

// //       {/* 🔷 HERO */}
// //       <div className="text-center pt-28 pb-16 px-6 relative z-10">
// //         <motion.h1
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="text-5xl font-semibold"
// //         >
// //           Product Certifications
// //         </motion.h1>

// //         <motion.p
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           className="text-gray-400 mt-4 max-w-xl mx-auto"
// //         >
// //           Each product is backed by certified quality standards ensuring safety,
// //           reliability, and compliance across all applications.
// //         </motion.p>
// //       </div>

// //       {/* 🔷 GRID */}
// //       <div className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-2 md:grid-cols-3 gap-8 relative z-10">

// //         {certificates.map((cert, index) => (
// //           <motion.div
// //             key={index}
// //             initial={{ opacity: 0, y: 60 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ delay: index * 0.1 }}
// //             viewport={{ once: true }}
// //             whileHover={{ scale: 1.06 }}
// //             className="group bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl cursor-pointer relative overflow-hidden"
// //             onClick={() => setSelected(cert)}
// //           >

// //             {/* Glow on hover */}
// //             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-blue-500/10 blur-2xl"></div>

// //             {/* Image */}
// //             <img
// //               src={cert.image}
// //               alt={cert.title}
// //               className="w-full h-[160px] object-contain rounded-lg"
// //             />

// //             {/* Title */}
// //             <p className="text-sm text-gray-300 mt-3 text-center">
// //               {cert.title}
// //             </p>

// //           </motion.div>
// //         ))}

// //       </div>

// //       {/* 🔷 LIGHTBOX (UPGRADED) */}
// //       {selected && (
// //         <motion.div
// //           className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center z-50 px-6"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           onClick={() => setSelected(null)}
// //         >

// //           {/* Image */}
// //           <motion.img
// //             src={selected.image}
// //             initial={{ scale: 0.9 }}
// //             animate={{ scale: 1 }}
// //             className="max-w-[95%] max-h-[80%] rounded-xl shadow-2xl"
// //           />

// //           {/* Title */}
// //           <p className="text-gray-300 mt-4">
// //             {selected.title}
// //           </p>

// //           {/* Actions */}
// //           <div className="mt-4 flex gap-4">
// //             <a
// //               href={selected.image}
// //               target="_blank"
// //               className="bg-white text-black px-4 py-2 rounded-lg text-sm"
// //             >
// //               Open
// //             </a>

// //             <a
// //               href={selected.image}
// //               download
// //               className="border border-white px-4 py-2 rounded-lg text-sm"
// //             >
// //               Download
// //             </a>
// //           </div>

// //         </motion.div>
// //       )}
// // <Footer></Footer>
// //     </div>
// //   );
// // }
// "use client";

// import Footer from "@/components/Footer";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { X, ExternalLink, Download, Award, Shield, CheckCircle } from "lucide-react";

// const certificates = [
//   { image: "/certificates/product1.jpg", title: "Product Certificate 1", category: "Quality Assurance" },
//   { image: "/certificates/product2.jpg", title: "Product Certificate 2", category: "Safety Compliance" },
//   { image: "/certificates/product3.jpg", title: "Product Certificate 3", category: "International Standard" },
//   { image: "/certificates/product4.jpg", title: "Product Certificate 4", category: "Quality Assurance" },
// ];

// const stats = [
//   { icon: Award, value: "4+", label: "Certified Products" },
//   { icon: Shield, value: "100%", label: "Compliance Rate" },
//   { icon: CheckCircle, value: "ISO", label: "Accredited" },
// ];

// export default function ProductCertificatesPage() {
//   const [selected, setSelected] = useState<any>(null);

//   return (
//     <>
//       <div
//         className="min-h-screen relative overflow-hidden"
//         style={{ background: "#f8faff", fontFamily: "'Georgia', serif" }}
//       >
//         {/* ── Subtle grid texture ── */}
//         <div
//           style={{
//             position: "fixed",
//             inset: 0,
//             backgroundImage: `
//               linear-gradient(rgba(42,93,168,0.035) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(42,93,168,0.035) 1px, transparent 1px)
//             `,
//             backgroundSize: "48px 48px",
//             pointerEvents: "none",
//             zIndex: 0,
//           }}
//         />

//         {/* ── Top accent bar ── */}
//         <div style={{ height: 4, background: "linear-gradient(90deg, #2A5DA8, #0ea5e9, #2A5DA8)", width: "100%" }} />

//         {/* ── HERO ── */}
//         <section
//           style={{
//             paddingTop: 120,
//             paddingBottom: 80,
//             position: "relative",
//             zIndex: 1,
//           }}
//         >
//           {/* Watermark circle */}
//           <div style={{
//             position: "absolute",
//             top: 40,
//             right: "8%",
//             width: 320,
//             height: 320,
//             borderRadius: "50%",
//             border: "1px solid rgba(42,93,168,0.1)",
//             pointerEvents: "none",
//           }} />
//           <div style={{
//             position: "absolute",
//             top: 80,
//             right: "10%",
//             width: 220,
//             height: 220,
//             borderRadius: "50%",
//             border: "1px solid rgba(42,93,168,0.08)",
//             pointerEvents: "none",
//           }} />

//           <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
//             {/* Eyebrow */}
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}
//             >
//               <div style={{ width: 32, height: 2, background: "#2A5DA8" }} />
//               <span style={{
//                 fontSize: 11, fontWeight: 700, letterSpacing: "2.5px",
//                 color: "#2A5DA8", textTransform: "uppercase",
//                 fontFamily: "'Trebuchet MS', sans-serif",
//               }}>
//                 Certifications & Compliance
//               </span>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 24 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               style={{
//                 fontSize: "clamp(36px, 5vw, 58px)",
//                 fontWeight: 400,
//                 color: "#0f1f3d",
//                 lineHeight: 1.15,
//                 maxWidth: 640,
//                 marginBottom: 20,
//                 letterSpacing: "-0.5px",
//               }}
//             >
//               Product <span style={{ color: "#2A5DA8", fontStyle: "italic" }}>Certificates</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.25 }}
//               style={{
//                 fontSize: 16,
//                 color: "#64748b",
//                 maxWidth: 520,
//                 lineHeight: 1.75,
//                 fontFamily: "'Trebuchet MS', sans-serif",
//                 fontWeight: 400,
//               }}
//             >
//               Every product we manufacture is independently certified, ensuring
//               the highest standards of safety, efficacy, and quality compliance
//               for aquaculture, poultry, and livestock applications.
//             </motion.p>

//             {/* Stats row */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               style={{ display: "flex", gap: 40, marginTop: 48 }}
//             >
//               {stats.map(({ icon: Icon, value, label }) => (
//                 <div key={label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                   <div style={{
//                     width: 40, height: 40, borderRadius: 10,
//                     background: "rgba(42,93,168,0.08)",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     flexShrink: 0,
//                   }}>
//                     <Icon size={18} color="#2A5DA8" />
//                   </div>
//                   <div>
//                     <p style={{ fontSize: 20, fontWeight: 700, color: "#0f1f3d", lineHeight: 1 }}>{value}</p>
//                     <p style={{ fontSize: 11, color: "#94a3b8", fontFamily: "'Trebuchet MS', sans-serif", marginTop: 2 }}>{label}</p>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* ── Divider ── */}
//         <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
//           <div style={{ height: 1, background: "linear-gradient(90deg, #2A5DA8, rgba(42,93,168,0.1))", marginBottom: 64 }} />
//         </div>

//         {/* ── CERTIFICATES GRID ── */}
//         <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 100px", position: "relative", zIndex: 1 }}>
//           <div style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
//             gap: 28,
//           }}>
//             {certificates.map((cert, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.08 }}
//                 viewport={{ once: true }}
//                 onClick={() => setSelected(cert)}
//                 style={{ cursor: "pointer" }}
//               >
//                 <CertCard cert={cert} index={index} />
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* ── LIGHTBOX ── */}
//         <AnimatePresence>
//           {selected && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelected(null)}
//               style={{
//                 position: "fixed", inset: 0, zIndex: 100,
//                 background: "rgba(10, 20, 50, 0.92)",
//                 backdropFilter: "blur(12px)",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 padding: 24,
//               }}
//             >
//               <motion.div
//                 initial={{ scale: 0.92, y: 20 }}
//                 animate={{ scale: 1, y: 0 }}
//                 exit={{ scale: 0.92, y: 20 }}
//                 onClick={e => e.stopPropagation()}
//                 style={{
//                   background: "#fff",
//                   borderRadius: 20,
//                   overflow: "hidden",
//                   maxWidth: 680,
//                   width: "100%",
//                   boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
//                 }}
//               >
//                 {/* Header */}
//                 <div style={{
//                   padding: "16px 20px",
//                   borderBottom: "1px solid #f0f4ff",
//                   display: "flex", justifyContent: "space-between", alignItems: "center",
//                   background: "#fafcff",
//                 }}>
//                   <div>
//                     <p style={{ fontSize: 11, color: "#2A5DA8", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "'Trebuchet MS', sans-serif" }}>
//                       {selected.category}
//                     </p>
//                     <p style={{ fontSize: 16, fontWeight: 600, color: "#0f1f3d", marginTop: 2 }}>{selected.title}</p>
//                   </div>
//                   <button
//                     onClick={() => setSelected(null)}
//                     style={{
//                       width: 36, height: 36, borderRadius: "50%",
//                       background: "#f1f5f9", border: "none", cursor: "pointer",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}
//                   >
//                     <X size={16} color="#64748b" />
//                   </button>
//                 </div>

//                 {/* Image */}
//                 <div style={{ padding: 24, background: "#f8faff", minHeight: 360, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                   <img
//                     src={selected.image}
//                     alt={selected.title}
//                     style={{ maxWidth: "100%", maxHeight: 420, objectFit: "contain", borderRadius: 10 }}
//                   />
//                 </div>

//                 {/* Actions */}
//                 <div style={{
//                   padding: "16px 24px",
//                   borderTop: "1px solid #f0f4ff",
//                   display: "flex", gap: 12,
//                   background: "#fafcff",
//                 }}>
//                   <a
//                     href={selected.image}
//                     target="_blank"
//                     rel="noreferrer"
//                     style={{
//                       display: "flex", alignItems: "center", gap: 8,
//                       padding: "10px 22px", borderRadius: 10,
//                       background: "#2A5DA8", color: "#fff",
//                       fontSize: 13, fontWeight: 600, textDecoration: "none",
//                       fontFamily: "'Trebuchet MS', sans-serif",
//                       transition: "background .2s",
//                     }}
//                     onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#1e4a8f")}
//                     onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#2A5DA8")}
//                   >
//                     <ExternalLink size={14} /> Open Full View
//                   </a>
//                   <a
//                     href={selected.image}
//                     download
//                     style={{
//                       display: "flex", alignItems: "center", gap: 8,
//                       padding: "10px 22px", borderRadius: 10,
//                       background: "#fff", color: "#2A5DA8",
//                       border: "1.5px solid #2A5DA8",
//                       fontSize: 13, fontWeight: 600, textDecoration: "none",
//                       fontFamily: "'Trebuchet MS', sans-serif",
//                     }}
//                   >
//                     <Download size={14} /> Download
//                   </a>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       <Footer />
//     </>
//   );
// }

// /* ── Certificate Card Component ── */
// function CertCard({ cert, index }: { cert: any; index: number }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         background: "#fff",
//         borderRadius: 16,
//         border: `1.5px solid ${hovered ? "#2A5DA8" : "#e8eef8"}`,
//         overflow: "hidden",
//         boxShadow: hovered
//           ? "0 20px 60px rgba(42,93,168,0.15)"
//           : "0 4px 20px rgba(0,0,0,0.06)",
//         transition: "all 0.3s ease",
//         transform: hovered ? "translateY(-6px)" : "none",
//       }}
//     >
//       {/* Top accent stripe */}
//       <div style={{
//         height: 3,
//         background: hovered
//           ? "linear-gradient(90deg, #2A5DA8, #0ea5e9)"
//           : "linear-gradient(90deg, #e8eef8, #e8eef8)",
//         transition: "background 0.3s",
//       }} />

//       {/* Image area */}
//       <div style={{
//         padding: "28px 24px 20px",
//         background: hovered ? "#f5f9ff" : "#fafcff",
//         transition: "background 0.3s",
//         display: "flex", alignItems: "center", justifyContent: "center",
//         minHeight: 180,
//       }}>
//         <img
//           src={cert.image}
//           alt={cert.title}
//           style={{
//             maxHeight: 160,
//             maxWidth: "100%",
//             objectFit: "contain",
//             filter: hovered ? "none" : "grayscale(10%)",
//             transition: "filter 0.3s, transform 0.3s",
//             transform: hovered ? "scale(1.04)" : "scale(1)",
//           }}
//         />
//       </div>

//       {/* Footer */}
//       <div style={{
//         padding: "16px 20px",
//         borderTop: "1px solid #f0f4ff",
//         display: "flex", justifyContent: "space-between", alignItems: "center",
//       }}>
//         <div>
//           <p style={{
//             fontSize: 13, fontWeight: 700, color: "#0f1f3d",
//             marginBottom: 3,
//           }}>
//             {cert.title}
//           </p>
//           <p style={{
//             fontSize: 10, color: "#2A5DA8", fontWeight: 700,
//             letterSpacing: "1px", textTransform: "uppercase",
//             fontFamily: "'Trebuchet MS', sans-serif",
//           }}>
//             {cert.category}
//           </p>
//         </div>
//         <div style={{
//           width: 32, height: 32, borderRadius: 8,
//           background: hovered ? "#2A5DA8" : "#f1f5f9",
//           display: "flex", alignItems: "center", justifyContent: "center",
//           transition: "background 0.3s",
//           flexShrink: 0,
//         }}>
//           <ExternalLink size={14} color={hovered ? "#fff" : "#94a3b8"} />
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";

// import Footer from "@/components/Footer";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { X, ExternalLink, Download, ShieldCheck } from "lucide-react";

// const certificates = [
//   { image: "/certificates/oxvare.jpg", title: "Product Certificate 1", category: "Quality Assurance",      tag: "QA" },
//   { image: "/certificates/CEEVARE.pdf", title: "Product Certificate 2", category: "Safety Compliance",     tag: "SC" },
//   { image: "/certificates/product3.jpg", title: "Product Certificate 3", category: "International Standard", tag: "IS" },
//   { image: "/certificates/product4.jpg", title: "Product Certificate 4", category: "Quality Assurance",      tag: "QA" },
// ];

// /* ─── palette ─── */
// const C = {
//   bg:        "#EFF6FF",   // very light blue page bg
//   bgCard:    "#FFFFFF",
//   blue:      "#2A5DA8",
//   blueMid:   "#3B7DD8",
//   blueLight: "#DBEAFE",
//   bluePale:  "#EFF6FF",
//   border:    "#BFDBFE",
//   text:      "#0F1F3D",
//   muted:     "#64748B",
//   accent:    "#0EA5E9",
// };

// export default function ProductCertificatesPage() {
//   const [selected, setSelected] = useState<any>(null);

//   return (
//     <>
//       <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "'Trebuchet MS', sans-serif", position: "relative", overflow: "hidden" }}>

//         {/* ── large watermark "CERTIFIED" diagonal ── */}
//         <div style={{
//           position: "fixed", top: "30%", left: "50%",
//           transform: "translate(-50%,-50%) rotate(-18deg)",
//           fontSize: "clamp(80px,14vw,180px)",
//           fontWeight: 900, letterSpacing: "-4px",
//           color: "rgba(42,93,168,0.04)",
//           pointerEvents: "none", userSelect: "none",
//           whiteSpace: "nowrap", zIndex: 0,
//         }}>
//           CERTIFIED
//         </div>

//         {/* ── soft top wave shape ── */}
//         <div style={{
//           position: "absolute", top: 0, left: 0, right: 0, height: 520,
//           background: `linear-gradient(160deg, ${C.blue} 0%, #1e4a9a 45%, #2563b8 70%, ${C.bg} 100%)`,
//           clipPath: "polygon(0 0, 100% 0, 100% 78%, 55% 96%, 0 78%)",
//           zIndex: 0,
//         }} />

//         {/* ── dot grid ── */}
//         <div style={{
//           position: "fixed", inset: 0,
//           backgroundImage: `radial-gradient(${C.border} 1px, transparent 1px)`,
//           backgroundSize: "28px 28px",
//           opacity: 0.45,
//           pointerEvents: "none", zIndex: 0,
//         }} />

//         {/* ─────────────── HERO ─────────────── */}
//         <section style={{ position: "relative", zIndex: 1, paddingTop: 120, paddingBottom: 70, textAlign: "center" }}>
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             style={{
//               display: "inline-flex", alignItems: "center", gap: 8,
//               background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)",
//               border: "1px solid rgba(255,255,255,0.35)",
//               borderRadius: 99, padding: "6px 18px", marginBottom: 22,
//             }}
//           >
//             <ShieldCheck size={14} color="#fff" />
//             <span style={{ fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "2px", textTransform: "uppercase" }}>
//               Verified & Accredited
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             style={{ fontSize: "clamp(34px,5vw,58px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-1px", margin: "0 auto 16px" }}
//           >
//             Product Certificates
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.25 }}
//             style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", maxWidth: 480, margin: "0 auto 52px", lineHeight: 1.7 }}
//           >
//             Every product independently certified for safety, efficacy,
//             and quality across aquaculture, poultry, and livestock.
//           </motion.p>

//           {/* ── 3 stat chips floating on the wave ── */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.35 }}
//             style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", paddingBottom: 10 }}
//           >
//             {[
//               { val: "4+",   sub: "Certified Products" },
//               { val: "100%", sub: "Compliance Rate"    },
//               { val: "GMP",  sub: "& ISO Accredited"   },
//             ].map(s => (
//               <div key={s.val} style={{
//                 background: "#fff",
//                 borderRadius: 16, padding: "16px 28px",
//                 boxShadow: "0 8px 32px rgba(42,93,168,0.18)",
//                 minWidth: 120, textAlign: "center",
//               }}>
//                 <p style={{ fontSize: 26, fontWeight: 800, color: C.blue, lineHeight: 1 }}>{s.val}</p>
//                 <p style={{ fontSize: 11, color: C.muted, marginTop: 4, fontWeight: 600, letterSpacing: "0.3px" }}>{s.sub}</p>
//               </div>
//             ))}
//           </motion.div>
//         </section>

//         {/* ─────────────── SECTION LABEL ─────────────── */}
//         <div style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 32px 28px", position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 16 }}>
//           <div style={{ flex: 1, height: 1, background: C.border }} />
//           <span style={{ fontSize: 11, fontWeight: 700, color: C.blue, letterSpacing: "2px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
//             All Certificates
//           </span>
//           <div style={{ flex: 1, height: 1, background: C.border }} />
//         </div>

//         {/* ─────────────── GRID ─────────────── */}
//         <section style={{ maxWidth: 1120, margin: "0 auto", padding: "0 32px 100px", position: "relative", zIndex: 1 }}>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 24 }}>
//             {certificates.map((cert, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 36 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.45, delay: i * 0.07 }}
//                 viewport={{ once: true }}
//                 onClick={() => setSelected(cert)}
//               >
//                 <CertCard cert={cert} index={i} />
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* ─────────────── LIGHTBOX ─────────────── */}
//         <AnimatePresence>
//           {selected && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelected(null)}
//               style={{
//                 position: "fixed", inset: 0, zIndex: 100,
//                 background: "rgba(10,25,70,0.55)",
//                 backdropFilter: "blur(18px)",
//                 display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
//               }}
//             >
//               <motion.div
//                 initial={{ scale: 0.94, y: 16 }}
//                 animate={{ scale: 1, y: 0 }}
//                 exit={{ scale: 0.94, y: 16 }}
//                 onClick={e => e.stopPropagation()}
//                 style={{
//                   background: "#fff",
//                   borderRadius: 22, overflow: "hidden",
//                   maxWidth: 660, width: "100%",
//                   boxShadow: "0 32px 80px rgba(42,93,168,0.25), 0 0 0 1px rgba(42,93,168,0.1)",
//                   fontFamily: "'Trebuchet MS', sans-serif",
//                 }}
//               >
//                 {/* top blue strip */}
//                 <div style={{ height: 5, background: `linear-gradient(90deg, ${C.blue}, ${C.accent})` }} />

//                 {/* header */}
//                 <div style={{
//                   padding: "18px 24px",
//                   borderBottom: `1px solid ${C.blueLight}`,
//                   display: "flex", justifyContent: "space-between", alignItems: "center",
//                   background: C.bluePale,
//                 }}>
//                   <div>
//                     <p style={{ fontSize: 10, fontWeight: 700, color: C.blue, letterSpacing: "2px", textTransform: "uppercase" }}>
//                       {selected.category}
//                     </p>
//                     <p style={{ fontSize: 17, fontWeight: 700, color: C.text, marginTop: 2 }}>{selected.title}</p>
//                   </div>
//                   <button
//                     onClick={() => setSelected(null)}
//                     style={{
//                       width: 36, height: 36, borderRadius: "50%",
//                       background: C.blueLight, border: `1px solid ${C.border}`,
//                       cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
//                     }}
//                   >
//                     <X size={15} color={C.blue} />
//                   </button>
//                 </div>

//                 {/* image */}
//                 <div style={{
//                   padding: 32, background: "#F8FBFF",
//                   minHeight: 340, display: "flex", alignItems: "center", justifyContent: "center",
//                 }}>
//                   <img src={selected.image} alt={selected.title} style={{ maxWidth: "100%", maxHeight: 380, objectFit: "contain", borderRadius: 10 }} />
//                 </div>

//                 {/* actions */}
//                 <div style={{
//                   padding: "16px 24px", borderTop: `1px solid ${C.blueLight}`,
//                   display: "flex", gap: 12, background: "#fff",
//                 }}>
//                   <a
//                     href={selected.image} target="_blank" rel="noreferrer"
//                     style={{
//                       display: "flex", alignItems: "center", gap: 8,
//                       padding: "10px 22px", borderRadius: 10,
//                       background: C.blue, color: "#fff",
//                       fontSize: 13, fontWeight: 700, textDecoration: "none",
//                       boxShadow: `0 4px 16px rgba(42,93,168,0.35)`,
//                       fontFamily: "'Trebuchet MS', sans-serif",
//                     }}
//                   >
//                     <ExternalLink size={14} /> Open Full View
//                   </a>
//                   <a
//                     href={selected.image} download
//                     style={{
//                       display: "flex", alignItems: "center", gap: 8,
//                       padding: "10px 22px", borderRadius: 10,
//                       background: C.blueLight, color: C.blue,
//                       border: `1.5px solid ${C.border}`,
//                       fontSize: 13, fontWeight: 700, textDecoration: "none",
//                       fontFamily: "'Trebuchet MS', sans-serif",
//                     }}
//                   >
//                     <Download size={14} /> Download
//                   </a>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       <Footer />
//     </>
//   );
// }

// /* ─── Card ─── */
// function CertCard({ cert, index }: { cert: any; index: number }) {
//   const [hov, setHov] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       style={{
//         background: "#fff",
//         borderRadius: 20,
//         border: `1.5px solid ${hov ? C.blue : C.border}`,
//         overflow: "hidden", cursor: "pointer",
//         boxShadow: hov
//           ? `0 20px 56px rgba(42,93,168,0.18), 0 0 0 3px rgba(42,93,168,0.08)`
//           : `0 2px 16px rgba(42,93,168,0.07)`,
//         transition: "all 0.3s ease",
//         transform: hov ? "translateY(-7px)" : "none",
//         position: "relative",
//         fontFamily: "'Trebuchet MS', sans-serif",
//       }}
//     >
//       {/* number stamp top-right */}
//       <div style={{
//         position: "absolute", top: 14, right: 16,
//         fontSize: 11, fontWeight: 800, color: hov ? C.blue : C.border,
//         letterSpacing: "1px", transition: "color 0.3s",
//         fontFamily: "'Trebuchet MS', sans-serif",
//       }}>
//         {String(index + 1).padStart(2, "0")}
//       </div>

//       {/* top accent bar */}
//       <div style={{
//         height: 4,
//         background: hov
//           ? `linear-gradient(90deg, ${C.blue}, ${C.accent})`
//           : `linear-gradient(90deg, ${C.blueLight}, ${C.blueLight})`,
//         transition: "background 0.3s",
//       }} />

//       {/* tag pill */}
//       <div style={{ padding: "20px 20px 0" }}>
//         <span style={{
//           display: "inline-block",
//           background: hov ? C.blue : C.blueLight,
//           color: hov ? "#fff" : C.blue,
//           fontSize: 10, fontWeight: 800, letterSpacing: "1.5px",
//           padding: "4px 12px", borderRadius: 99,
//           transition: "all 0.3s",
//         }}>
//           {cert.tag}
//         </span>
//       </div>

//       {/* image */}
//       <div style={{
//         margin: "16px 20px",
//         background: C.bluePale,
//         borderRadius: 14,
//         height: 170,
//         display: "flex", alignItems: "center", justifyContent: "center",
//         overflow: "hidden",
//         border: `1px solid ${C.blueLight}`,
//       }}>
//         <img
//           src={cert.image}
//           alt={cert.title}
//           style={{
//             maxHeight: 140, maxWidth: "90%", objectFit: "contain",
//             transition: "transform 0.35s",
//             transform: hov ? "scale(1.06)" : "scale(1)",
//           }}
//         />
//       </div>

//       {/* footer */}
//       <div style={{
//         padding: "0 20px 20px",
//         display: "flex", justifyContent: "space-between", alignItems: "flex-end",
//       }}>
//         <div>
//           <p style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 4, lineHeight: 1.3 }}>{cert.title}</p>
//           <p style={{ fontSize: 11, color: C.muted, fontWeight: 600, letterSpacing: "0.3px" }}>{cert.category}</p>
//         </div>
//         <div style={{
//           width: 36, height: 36, borderRadius: 10, flexShrink: 0,
//           background: hov ? C.blue : C.blueLight,
//           display: "flex", alignItems: "center", justifyContent: "center",
//           transition: "all 0.3s",
//           boxShadow: hov ? `0 6px 18px rgba(42,93,168,0.4)` : "none",
//         }}>
//           <ExternalLink size={15} color={hov ? "#fff" : C.blue} />
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink, Download, ShieldCheck, FileText } from "lucide-react";

const certificates = [
  // { image: "/certificate-images/LIVOVARE.pdf",   title: "i.Livovare Gel Certificate ", category: "Feed Additive",      tag: "FA" },
  // { image: "/certificate-images/CEEVARE.pdf",  title: "i.Ceevare Certificate ", category: "Feed Additive",      tag: "FA" },
  // { image: "/certificate-images/MINVARE.PDF", title: "i.Minvare FM Certificate ", category: "Feed Additive", tag: "FA" },
  // { image: "/certificate-images/MINVARE-PM.PDF", title: "i.Minvare PM Certificate ", category: "Feed Additive",      tag: "FA" },
  // { image: "/certificate-images/OXYVARE.PDF", title: "i.Oxyvare Certificate ", category: "Chemical",      tag: "QA" },
  // { image: "/certificate-images/PROPONDVARE.PDF", title: "i.Propondvare Certificate ", category: "Quality Assurance",      tag: "QA" },
  // { image: "/certificate-images/ PROVARE-GUT.pdf", title: "i.Provare Gut Certificate ", category: "Quality Assurance",      tag: "QA" },
  // { image: "/certificate-images/CALCIUM-CHLORIDE.PDF", title: "Calicum Chloride Certificate ", category: "Quality Assurance",      tag: "QA" },
  // { image: "/certificate-images/YEAST.PDF", title: " i.Bio'YEAST'vare Certificate ", category: "Quality Assurance",      tag: "QA" },
  // { image: "/certificate-images/NITRONILVARE.PDF", title: "i.nitronilvare Certificate ", category: "Quality Assurance",      tag: "QA" },
  // { image: "/certificate-images/PSBVARE.PDF", title: "i.Psbvare Certificate ", category: "Quality Assurance",      tag: "QA" },
  // { image: "/certificate-images/TOXIVARE.PDF", title: "i.Toxivare Certificate ", category: "Quality Assurance",      tag: "QA" },
  // { image: "/certificate-images/VIRAHEALVARE.PDF", title: "i.Virahealvare Certificate ", category: "Quality Assurance",      tag: "QA" },
  // { image: "/certificate-images/MAGNESIUM-CHLORIDE.PDF", title: "i.Magnesium Chloride Certificate ", category: "Quality Assurance",      tag: "QA" },
  // { image: "/certificate-images/POTASSIUM-CHLORIDE.PDF", title: "i.Potassium Chloride Certificate", category: "Quality Assurance",      tag: "QA" },
  // { image: "/certificate-images/OXVARE-T.JPG", title: "i.Oxyvare T ", category: "Quality Assurance",      tag: "QA" },
  // { image: "/certificate-images/Potassium-CHLORIDE.PDF", title: "i.Potassium Chloride ", category: "Quality Assurance",      tag: "QA" },
  // { image: "/certificate-images/Potassium-CHLORIDE.PDF", title: "i.Potassium Chloride ", category: "Quality Assurance",      tag: "QA" },
  // { image: "/certificate-images/Potassium-CHLORIDE.PDF", title: "i.Potassium Chloride ", category: "Quality Assurance",      tag: "QA" },
  { image: "/certificate-images/LIVOVARE.pdf", title: "i.Livovare Gel Certificate", category: "Feed Additive", tag: "FA" },
  { image: "/certificate-images/CEEVARE.pdf", title: "i.Ceevare Certificate", category: "Feed Additive", tag: "FA" },
  { image: "/certificate-images/MINVARE.PDF", title: "i.Minvare FM Certificate", category: "Feed Additive", tag: "FA" },
  { image: "/certificate-images/MINVARE-PM.PDF", title: "i.Minvare PM Certificate", category: "Feed Additive", tag: "FA" },
  { image: "/certificate-images/OXYVARE.PDF", title: "i.Oxyvare Certificate", category: "Chemical", tag: "QA" },
  { image: "/certificate-images/PROPONDVARE.PDF", title: "i.Propondvare Certificate", category: "Quality Assurance", tag: "QA" },
  { image: "/certificate-images/GUT.pdf", title: "i.Provare Gut Certificate", category: "Quality Assurance", tag: "QA" },
  { image: "/certificate-images/CALCIUM-CHLORIDE.PDF", title: "Calcium Chloride Certificate", category: "Quality Assurance", tag: "QA" },
  { image: "/certificate-images/YEAST.PDF", title: "i.Bio'YEAST'vare Certificate", category: "Quality Assurance", tag: "QA" },
  { image: "/certificate-images/NITRONILVARE.PDF", title: "i.Nitronilvare Certificate", category: "Quality Assurance", tag: "QA" },
  { image: "/certificate-images/PSBVARE.PDF", title: "i.Psbvare Certificate", category: "Quality Assurance", tag: "QA" },
  { image: "/certificate-images/TOXIVARE.PDF", title: "i.Toxivare Certificate", category: "Quality Assurance", tag: "QA" },
  { image: "/certificate-images/VIRAHEALVARE.PDF", title: "i.Virahealvare Certificate", category: "Quality Assurance", tag: "QA" },
  { image: "/certificate-images/MAGNESIUM-CHLORIDE.PDF", title: "i.Magnesium Chloride Certificate", category: "Quality Assurance", tag: "QA" },
  { image: "/certificate-images/POTASSIUM-CHLORIDE.PDF", title: "i.Potassium Chloride Certificate", category: "Quality Assurance", tag: "QA" },
  { image: "/certificate-images/oxy-t.pdf", title: "i.Oxyvare T", category: "Quality Assurance", tag: "QA" },
  { image: "/certificate-images/wsf.pdf", title: "i.Wsfvare", category: "Feed Additive", tag: "FA" },
  { image: "/certificate-images/heptop.pdf", title: "i.Heptopancvare", category: "Feed Additive", tag: "FA" },
  { image: "/certificate-images/immo.pdf", title: "i.Immunovare", category: "Feed Additive", tag: "FA" },
  { image: "/certificate-images/ferric.pdf", title: "i.Ferricchlorivare", category: "Feed Additive", tag: "FA" },

  // Products from product images
  // { image: "/product-images/ceevare_2.png",             title: "i.Ceevare",                        category: "Feed Additive",      tag: "FA" },
  // { image: "/product-images/ferric_chloride_2.png",     title: "Ferric Chloride Anhydrous",        category: "Chemical",           tag: "QA" },
  // { image: "/product-images/geoprovare_p_2.png",        title: "i.Geoprovare P",                   category: "Feed Additive",      tag: "FA" },
  // { image: "/product-images/geovare_p_2.png",           title: "i.Geovare P",                      category: "Feed Additive",      tag: "FA" },
  // { image: "/product-images/heptopancvare_2.png",       title: "i.Heptopancvare",                  category: "Feed Additive",      tag: "FA" },
  // { image: "/product-images/immunovare_2.png",          title: "i.Immunovare",                     category: "Feed Additive",      tag: "FA" },
  // { image: "/product-images/minvare_fm_2.png",          title: "i.Minvare FM",                     category: "Feed Additive",      tag: "FA" },
  // { image: "/product-images/oxyvar_2.png",              title: "i.Oxyvare",                        category: "Chemical",           tag: "QA" },
  // { image: "/product-images/phytovare_2.png",           title: "i.Phytovare",                      category: "Feed Additive",      tag: "FA" },
  // { image: "/product-images/propondvare_2.png",         title: "i.Propondvare",                    category: "Feed Additive",      tag: "FA" },
  // { image: "/product-images/provare_gut_2.png",         title: "i.Provare Gut",                    category: "Feed Additive",      tag: "FA" },
  // { image: "/product-images/psbvare_2.png",             title: "i.Psbvare",                        category: "Feed Additive",      tag: "FA" },
  // { image: "/product-images/sanvare_td_2.png",          title: "i.Sanvare TD",                     category: "Feed Additive",      tag: "FA" },
  // { image: "/product-images/vibriovare_2.png",          title: "i.Vibriovare",                     category: "Feed Additive",      tag: "FA" },
  // { image: "/product-images/virahealvare_2.png",        title: "i.Virahealvare",                   category: "Feed Additive",      tag: "FA" },
  // { image: "/product-images/wfsvare_gel_2.png",         title: "i.Wfsvare Gel",                    category: "Feed Additive",      tag: "FA" },
];

const isPdf = (src: string) => src.toLowerCase().endsWith(".pdf");

/* ─── palette ─── */
const C = {
  bg: "#EFF6FF",
  bgCard: "#FFFFFF",
  blue: "#2A5DA8",
  blueMid: "#3B7DD8",
  blueLight: "#DBEAFE",
  bluePale: "#EFF6FF",
  border: "#BFDBFE",
  text: "#0F1F3D",
  muted: "#64748B",
  accent: "#0EA5E9",
};

export default function ProductCertificatesPage() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <>
      <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "'Trebuchet MS', sans-serif", position: "relative", overflow: "hidden" }}>

        {/* watermark */}
        <div style={{ position: "fixed", top: "30%", left: "50%", transform: "translate(-50%,-50%) rotate(-18deg)", fontSize: "clamp(80px,14vw,180px)", fontWeight: 900, letterSpacing: "-4px", color: "rgba(42,93,168,0.04)", pointerEvents: "none", userSelect: "none", whiteSpace: "nowrap", zIndex: 0 }}>CERTIFIED</div>

        {/* top wave */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 520, background: `linear-gradient(160deg, ${C.blue} 0%, #1e4a9a 45%, #2563b8 70%, ${C.bg} 100%)`, clipPath: "polygon(0 0, 100% 0, 100% 78%, 55% 96%, 0 78%)", zIndex: 0 }} />

        {/* dot grid */}
        <div style={{ position: "fixed", inset: 0, backgroundImage: `radial-gradient(${C.border} 1px, transparent 1px)`, backgroundSize: "28px 28px", opacity: 0.45, pointerEvents: "none", zIndex: 0 }} />

        {/* HERO */}
        <section style={{ position: "relative", zIndex: 1, paddingTop: 120, paddingBottom: 70, textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.35)", borderRadius: 99, padding: "6px 18px", marginBottom: 22 }}>
            <ShieldCheck size={14} color="#fff" />
            <span style={{ fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "2px", textTransform: "uppercase" }}>Verified & Accredited</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} style={{ fontSize: "clamp(34px,5vw,58px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-1px", margin: "0 auto 16px" }}>
            CAA Approved Certificates
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }} style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", maxWidth: 480, margin: "0 auto 52px", lineHeight: 1.7 }}>
            Every product independently certified for safety, efficacy, and quality across aquaculture, poultry, and livestock.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", paddingBottom: 10 }}>
            {[{ val: "20+", sub: "Certified Products" }, { val: "100%", sub: "Compliance Rate" }, { val: "CAA", sub: "Approved" }].map(s => (
              <div key={s.val} style={{ background: "#fff", borderRadius: 16, padding: "16px 28px", boxShadow: "0 8px 32px rgba(42,93,168,0.18)", minWidth: 120, textAlign: "center" }}>
                <p style={{ fontSize: 26, fontWeight: 800, color: C.blue, lineHeight: 1 }}>{s.val}</p>
                <p style={{ fontSize: 11, color: C.muted, marginTop: 4, fontWeight: 600, letterSpacing: "0.3px" }}>{s.sub}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* SECTION LABEL */}
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 32px 28px", position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ flex: 1, height: 1, background: C.border }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: C.blue, letterSpacing: "2px", textTransform: "uppercase", whiteSpace: "nowrap" }}>All Certificates</span>
          <div style={{ flex: 1, height: 1, background: C.border }} />
        </div>

        {/* GRID */}
        <section style={{ maxWidth: 1120, margin: "0 auto", padding: "0 32px 100px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 24 }}>
            {certificates.map((cert, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.07 }} viewport={{ once: true }} onClick={() => setSelected(cert)}>
                <CertCard cert={cert} index={i} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* LIGHTBOX */}
        <AnimatePresence>
          {selected && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(10,25,70,0.55)", backdropFilter: "blur(18px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
              <motion.div initial={{ scale: 0.94, y: 16 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 16 }} onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: 22, overflow: "hidden", maxWidth: 660, width: "100%", boxShadow: "0 32px 80px rgba(42,93,168,0.25), 0 0 0 1px rgba(42,93,168,0.1)", fontFamily: "'Trebuchet MS', sans-serif" }}>
                <div style={{ height: 5, background: `linear-gradient(90deg, ${C.blue}, ${C.accent})` }} />

                <div style={{ padding: "18px 24px", borderBottom: `1px solid ${C.blueLight}`, display: "flex", justifyContent: "space-between", alignItems: "center", background: C.bluePale }}>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: C.blue, letterSpacing: "2px", textTransform: "uppercase" }}>{selected.category}</p>
                    <p style={{ fontSize: 17, fontWeight: 700, color: C.text, marginTop: 2 }}>{selected.title}</p>
                  </div>
                  <button onClick={() => setSelected(null)} style={{ width: 36, height: 36, borderRadius: "50%", background: C.blueLight, border: `1px solid ${C.border}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <X size={15} color={C.blue} />
                  </button>
                </div>

                {/* ── LIGHTBOX PREVIEW: PDF vs Image ── */}
                <div style={{ padding: 32, background: "#F8FBFF", minHeight: 420, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {isPdf(selected.image) ? (
                    <iframe
                      src={`${selected.image}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      style={{ width: "100%", height: 380, border: "none", borderRadius: 10 }}
                      title={selected.title}
                    />
                  ) : (
                    <img src={selected.image} alt={selected.title} style={{ maxWidth: "100%", maxHeight: 380, objectFit: "contain", borderRadius: 10 }} />
                  )}
                </div>

                <div style={{ padding: "16px 24px", borderTop: `1px solid ${C.blueLight}`, display: "flex", gap: 12, background: "#fff" }}>
                  <a href={selected.image} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 22px", borderRadius: 10, background: C.blue, color: "#fff", fontSize: 13, fontWeight: 700, textDecoration: "none", boxShadow: `0 4px 16px rgba(42,93,168,0.35)`, fontFamily: "'Trebuchet MS', sans-serif" }}>
                    <ExternalLink size={14} /> Open Full View
                  </a>
                  <a href={selected.image} download style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 22px", borderRadius: 10, background: C.blueLight, color: C.blue, border: `1.5px solid ${C.border}`, fontSize: 13, fontWeight: 700, textDecoration: "none", fontFamily: "'Trebuchet MS', sans-serif" }}>
                    <Download size={14} /> Download
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </>
  );
}

/* ─── Card ─── */
function CertCard({ cert, index }: { cert: any; index: number }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ background: "#fff", borderRadius: 20, border: `1.5px solid ${hov ? C.blue : C.border}`, overflow: "hidden", cursor: "pointer", boxShadow: hov ? `0 20px 56px rgba(42,93,168,0.18), 0 0 0 3px rgba(42,93,168,0.08)` : `0 2px 16px rgba(42,93,168,0.07)`, transition: "all 0.3s ease", transform: hov ? "translateY(-7px)" : "none", position: "relative", fontFamily: "'Trebuchet MS', sans-serif" }}
    >
      <div style={{ position: "absolute", top: 14, right: 16, fontSize: 11, fontWeight: 800, color: hov ? C.blue : C.border, letterSpacing: "1px", transition: "color 0.3s" }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      <div style={{ height: 4, background: hov ? `linear-gradient(90deg, ${C.blue}, ${C.accent})` : `linear-gradient(90deg, ${C.blueLight}, ${C.blueLight})`, transition: "background 0.3s" }} />

      <div style={{ padding: "20px 20px 0" }}>
        <span style={{ display: "inline-block", background: hov ? C.blue : C.blueLight, color: hov ? "#fff" : C.blue, fontSize: 10, fontWeight: 800, letterSpacing: "1.5px", padding: "4px 12px", borderRadius: 99, transition: "all 0.3s" }}>
          {cert.tag}
        </span>
      </div>

      {/* ── THUMBNAIL: PDF vs Image ── */}
      <div style={{ margin: "16px 20px", background: C.bluePale, borderRadius: 14, height: 170, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", border: `1px solid ${C.blueLight}`, position: "relative" }}>
        {isPdf(cert.image) ? (
          <>
            {/* PDF rendered via iframe — first page visible */}
            <iframe
              src={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&page=1`}
              style={{ width: "100%", height: "100%", border: "none", borderRadius: 14, pointerEvents: "none", transform: hov ? "scale(1.04)" : "scale(1)", transition: "transform 0.35s" }}
              title={cert.title}
            />
            {/* PDF label badge */}
            <div style={{ position: "absolute", bottom: 8, right: 8, background: C.blue, color: "#fff", fontSize: 9, fontWeight: 800, letterSpacing: "1px", padding: "3px 8px", borderRadius: 6, display: "flex", alignItems: "center", gap: 4 }}>
              <FileText size={10} color="#fff" /> PDF
            </div>
          </>
        ) : (
          <img
            src={cert.image}
            alt={cert.title}
            style={{ maxHeight: 140, maxWidth: "90%", objectFit: "contain", transition: "transform 0.35s", transform: hov ? "scale(1.06)" : "scale(1)" }}
            onError={(e) => {
              // fallback: hide broken image, show placeholder
              const target = e.currentTarget;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent && !parent.querySelector(".img-fallback")) {
                const fb = document.createElement("div");
                fb.className = "img-fallback";
                fb.style.cssText = `display:flex;flex-direction:column;align-items:center;gap:8px;color:${C.muted};font-size:12px;font-weight:600`;
                fb.innerHTML = `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="${C.blue}" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>Image`;
                parent.appendChild(fb);
              }
            }}
          />
        )}
      </div>

      <div style={{ padding: "0 20px 20px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <p style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 4, lineHeight: 1.3 }}>{cert.title}</p>
          <p style={{ fontSize: 11, color: C.muted, fontWeight: 600, letterSpacing: "0.3px" }}>{cert.category}</p>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: hov ? C.blue : C.blueLight, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s", boxShadow: hov ? `0 6px 18px rgba(42,93,168,0.4)` : "none" }}>
          <ExternalLink size={15} color={hov ? "#fff" : C.blue} />
        </div>
      </div>
    </div>
  );
}