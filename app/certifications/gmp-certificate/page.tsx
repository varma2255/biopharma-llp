// // // // // // // // // export default function GMPCertificatePage() {
// // // // // // // // //   return (
// // // // // // // // //     <div className="max-w-6xl mx-auto px-6 py-24">

// // // // // // // // //       {/* Title */}
// // // // // // // // //       <h1 className="text-3xl font-bold text-[#2A5DA8] mb-4">
// // // // // // // // //         GMP Certification
// // // // // // // // //       </h1>

// // // // // // // // //       {/* Description */}
// // // // // // // // //       <p className="text-gray-600 mb-10 max-w-2xl">
// // // // // // // // //         Innovare Biopharma LLP follows Good Manufacturing Practices (GMP)
// // // // // // // // //         to ensure high quality, safety, and consistency in all products.
// // // // // // // // //       </p>

// // // // // // // // //       {/* Certificate Viewer */}
// // // // // // // // //       <div className="bg-white border rounded-xl shadow p-4 mb-10">
// // // // // // // // //         <iframe
// // // // // // // // //           src="/certificates/gmp.pdf"
// // // // // // // // //           className="w-full h-[600px] rounded"
// // // // // // // // //         />
// // // // // // // // //       </div>

// // // // // // // // //       {/* Info */}
// // // // // // // // //       <div className="grid md:grid-cols-3 gap-6 mb-10">
// // // // // // // // //         <div className="p-4 border rounded-lg">
// // // // // // // // //           <h3 className="font-semibold">Issued To</h3>
// // // // // // // // //           <p>Innovare Biopharma LLP</p>
// // // // // // // // //         </div>

// // // // // // // // //         <div className="p-4 border rounded-lg">
// // // // // // // // //           <h3 className="font-semibold">Issued By</h3>
// // // // // // // // //           <p>Optimum Certifications Inc.</p>
// // // // // // // // //         </div>

// // // // // // // // //         <div className="p-4 border rounded-lg">
// // // // // // // // //           <h3 className="font-semibold">Valid Till</h3>
// // // // // // // // //           <p>July 2028</p>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Download */}
// // // // // // // // //       <a
// // // // // // // // //         href="/certificates/gmp.pdf"
// // // // // // // // //         download
// // // // // // // // //         className="bg-[#2A5DA8] text-white px-6 py-3 rounded-lg"
// // // // // // // // //       >
// // // // // // // // //         Download Certificate
// // // // // // // // //       </a>

// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // "use client";
// // // // // // // // import { useState } from "react";

// // // // // // // // export default function GMPCertificatePage() {
// // // // // // // //   const [zoomed, setZoomed] = useState(false);

// // // // // // // //   return (
// // // // // // // //     <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 py-20">

// // // // // // // //       {/* Title (minimal) */}
// // // // // // // //       <h1 className="text-white text-2xl font-semibold mb-6 tracking-wide">
// // // // // // // //         GMP Certification
// // // // // // // //       </h1>

// // // // // // // //       {/* Certificate Container */}
// // // // // // // //       <div
// // // // // // // //         className="relative max-w-5xl w-full cursor-zoom-in"
// // // // // // // //         onClick={() => setZoomed(true)}
// // // // // // // //       >
// // // // // // // //         <img
// // // // // // // //           src="/certificates/gmp.jpg"
// // // // // // // //           alt="GMP Certificate"
// // // // // // // //           className="w-full rounded-lg shadow-2xl transition duration-300 hover:scale-[1.02]"
// // // // // // // //         />
// // // // // // // //       </div>

// // // // // // // //       {/* Actions */}
// // // // // // // //       <div className="mt-6 flex gap-4">
// // // // // // // //         <a
// // // // // // // //           href="/certificates/gmp.pdf"
// // // // // // // //           target="_blank"
// // // // // // // //           className="text-white border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
// // // // // // // //         >
// // // // // // // //           Open PDF
// // // // // // // //         </a>

// // // // // // // //         <a
// // // // // // // //           href="/certificates/gmp.pdf"
// // // // // // // //           download
// // // // // // // //           className="text-black bg-white px-5 py-2 rounded-lg hover:opacity-80 transition"
// // // // // // // //         >
// // // // // // // //           Download
// // // // // // // //         </a>
// // // // // // // //       </div>

// // // // // // // //       {/* Fullscreen Zoom Modal */}
// // // // // // // //       {zoomed && (
// // // // // // // //         <div
// // // // // // // //           className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 cursor-zoom-out"
// // // // // // // //           onClick={() => setZoomed(false)}
// // // // // // // //         >
// // // // // // // //           <img
// // // // // // // //             src="/certificates/gmp.jpg"
// // // // // // // //             className="max-w-[95%] max-h-[95%] rounded-lg shadow-2xl"
// // // // // // // //           />
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // "use client";

// // // // // // // import { motion } from "framer-motion";
// // // // // // // import { useState } from "react";

// // // // // // // export default function GMPCertificatePage() {
// // // // // // //   const [zoomed, setZoomed] = useState(false);

// // // // // // //   return (
// // // // // // //     <div className="bg-[#0b0f19] min-h-screen text-white">

// // // // // // //       {/* 🔷 HERO SECTION */}
// // // // // // //       <div className="relative flex flex-col items-center justify-center pt-32 pb-20 text-center">

// // // // // // //         {/* Glow background */}
// // // // // // //         <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>

// // // // // // //         <motion.h1
// // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // //           className="text-4xl font-semibold z-10"
// // // // // // //         >
// // // // // // //           GMP Certification
// // // // // // //         </motion.h1>

// // // // // // //         <motion.p
// // // // // // //           initial={{ opacity: 0 }}
// // // // // // //           animate={{ opacity: 1 }}
// // // // // // //           className="text-gray-400 mt-3 z-10"
// // // // // // //         >
// // // // // // //           Verified Quality & Manufacturing Compliance
// // // // // // //         </motion.p>

// // // // // // //       </div>

// // // // // // //       {/* 🔷 CERTIFICATE VIEW */}
// // // // // // //       <div className="flex justify-center px-6">
// // // // // // //         <motion.div
// // // // // // //           initial={{ opacity: 0, scale: 0.96 }}
// // // // // // //           animate={{ opacity: 1, scale: 1 }}
// // // // // // //           className="max-w-5xl w-full"
// // // // // // //         >
// // // // // // //           <div
// // // // // // //             onClick={() => setZoomed(true)}
// // // // // // //             className="rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.7)] cursor-zoom-in"
// // // // // // //           >
// // // // // // //             <img
// // // // // // //               src="/certificates/gmp.jpg"
// // // // // // //               alt="GMP Certificate"
// // // // // // //               className="w-full hover:scale-[1.02] transition duration-300"
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         </motion.div>
// // // // // // //       </div>

// // // // // // //       {/* 🔷 ACTION BUTTONS */}
// // // // // // //       <div className="flex justify-center mt-10 gap-4">
// // // // // // //         <a
// // // // // // //           href="/certificates/gmp.pdf"
// // // // // // //           target="_blank"
// // // // // // //           className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
// // // // // // //         >
// // // // // // //           View Full Certificate
// // // // // // //         </a>

// // // // // // //         <a
// // // // // // //           href="/certificates/gmp.pdf"
// // // // // // //           download
// // // // // // //           className="border border-white px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black transition"
// // // // // // //         >
// // // // // // //           Download PDF
// // // // // // //         </a>
// // // // // // //       </div>

// // // // // // //       {/* 🔷 INFO SECTION */}
// // // // // // //       <div className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-3 gap-6">

// // // // // // //         <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
// // // // // // //           <p className="text-gray-400 text-sm">Issued To</p>
// // // // // // //           <h3 className="text-lg font-semibold mt-1">
// // // // // // //             Innovare Biopharma LLP
// // // // // // //           </h3>
// // // // // // //         </div>

// // // // // // //         <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
// // // // // // //           <p className="text-gray-400 text-sm">Issued By</p>
// // // // // // //           <h3 className="text-lg font-semibold mt-1">
// // // // // // //             Optimum Certifications Inc.
// // // // // // //           </h3>
// // // // // // //         </div>

// // // // // // //         <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
// // // // // // //           <p className="text-gray-400 text-sm">Valid Until</p>
// // // // // // //           <h3 className="text-lg font-semibold mt-1">
// // // // // // //             July 2028
// // // // // // //           </h3>
// // // // // // //         </div>

// // // // // // //       </div>

// // // // // // //       {/* 🔷 TRUST TEXT */}
// // // // // // //       <div className="max-w-3xl mx-auto text-center mt-20 px-6">
// // // // // // //         <p className="text-gray-400 leading-relaxed">
// // // // // // //           This certification ensures that Innovare Biopharma LLP follows globally recognized
// // // // // // //           Good Manufacturing Practices (GMP), maintaining high standards in quality,
// // // // // // //           safety, and operational excellence.
// // // // // // //         </p>
// // // // // // //       </div>

// // // // // // //       {/* 🔷 FULLSCREEN MODAL */}
// // // // // // //       {zoomed && (
// // // // // // //         <motion.div
// // // // // // //           className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
// // // // // // //           onClick={() => setZoomed(false)}
// // // // // // //           initial={{ opacity: 0 }}
// // // // // // //           animate={{ opacity: 1 }}
// // // // // // //         >
// // // // // // //           <motion.img
// // // // // // //             src="/certificates/gmp.jpg"
// // // // // // //             initial={{ scale: 0.9 }}
// // // // // // //             animate={{ scale: 1 }}
// // // // // // //             className="max-w-[95%] max-h-[95%] rounded-xl"
// // // // // // //           />
// // // // // // //         </motion.div>
// // // // // // //       )}

// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // "use client";

// // // // // // import { motion } from "framer-motion";

// // // // // // export default function GMPCertificatePage() {
// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gradient-to-br from-[#071226] via-[#0f1f3d] to-[#020617] flex items-center justify-center px-6 relative overflow-hidden">

// // // // // //       {/* 🔷 BACKGROUND GLOW */}
// // // // // //       <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>
// // // // // //       <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>

// // // // // //       {/* 🔷 HERO CARD */}
// // // // // //       <div className="w-full max-w-5xl rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-10 shadow-2xl text-center relative z-10">

// // // // // //         {/* Title */}
// // // // // //         <motion.h1
// // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // //           className="text-4xl font-semibold text-white"
// // // // // //         >
// // // // // //           GMP Certification
// // // // // //         </motion.h1>

// // // // // //         {/* Subtitle */}
// // // // // //         <p className="text-gray-300 mt-3">
// // // // // //           Verified Quality & Manufacturing Compliance
// // // // // //         </p>

// // // // // //         {/* 🔷 SMALL IMAGE */}
// // // // // //         <div className="mt-10 flex justify-center">
// // // // // //           <img
// // // // // //             src="/certificates/gmp.jpg"
// // // // // //             alt="GMP Certificate"
// // // // // //             className="w-[140px] md:w-[160px] rounded-lg shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
// // // // // //           />
// // // // // //         </div>

// // // // // //         {/* 🔷 BUTTONS */}
// // // // // //         <div className="mt-10 flex justify-center gap-4 flex-wrap">

// // // // // //           <a
// // // // // //             href="/certificates/gmp.pdf"
// // // // // //             target="_blank"
// // // // // //             className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
// // // // // //           >
// // // // // //             View Full Certificate
// // // // // //           </a>

// // // // // //           <a
// // // // // //             href="/certificates/gmp.pdf"
// // // // // //             download
// // // // // //             className="border border-white text-white px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black transition"
// // // // // //           >
// // // // // //             Download PDF
// // // // // //           </a>

// // // // // //         </div>

// // // // // //         {/* 🔷 DOWN ARROW */}
// // // // // //         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 text-xl animate-bounce">
// // // // // //           ↓
// // // // // //         </div>

// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // "use client";

// // // // // import { motion } from "framer-motion";

// // // // // export default function GMPCertificatePage() {
// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br from-[#071226] via-[#0f1f3d] to-[#020617] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">

// // // // //       {/* 🔷 BACKGROUND GLOW */}
// // // // //       <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>
// // // // //       <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>

// // // // //       {/* 🔷 TITLE */}
// // // // //       <motion.h1
// // // // //         initial={{ opacity: 0, y: 20 }}
// // // // //         animate={{ opacity: 1, y: 0 }}
// // // // //         className="text-5xl md:text-6xl font-semibold text-white"
// // // // //       >
// // // // //         GMP Certification
// // // // //       </motion.h1>

// // // // //       {/* 🔷 SUBTITLE */}
// // // // //       <motion.p
// // // // //         initial={{ opacity: 0 }}
// // // // //         animate={{ opacity: 1 }}
// // // // //         className="text-gray-400 mt-4 text-lg"
// // // // //       >
// // // // //         Verified Quality & Manufacturing Compliance
// // // // //       </motion.p>

// // // // //       {/* 🔷 SMALL IMAGE (FOCUSED PREVIEW) */}
// // // // //       <motion.div
// // // // //         initial={{ opacity: 0, scale: 0.9 }}
// // // // //         animate={{ opacity: 1, scale: 1 }}
// // // // //         className="mt-16"
// // // // //       >
// // // // //         <img
// // // // //           src="/certificates/gmp.jpg"
// // // // //           alt="GMP Certificate"
// // // // //           className="w-[140px] md:w-[160px] rounded-lg shadow-2xl hover:scale-110 transition duration-300 cursor-pointer"
// // // // //         />
// // // // //       </motion.div>

// // // // //       {/* 🔷 BUTTONS */}
// // // // //       <div className="mt-12 flex gap-4 flex-wrap justify-center">

// // // // //         <a
// // // // //           href="/certificates/gmp.pdf"
// // // // //           target="_blank"
// // // // //           className="bg-white text-black px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
// // // // //         >
// // // // //           View Full Certificate
// // // // //         </a>

// // // // //         <a
// // // // //           href="/certificates/gmp.pdf"
// // // // //           download
// // // // //           className="border border-white text-white px-8 py-3 rounded-full text-sm hover:bg-white hover:text-black transition"
// // // // //         >
// // // // //           Download PDF
// // // // //         </a>

// // // // //       </div>

// // // // //       {/* 🔷 DOWN INDICATOR */}
// // // // //       <div className="absolute bottom-6 text-gray-400 text-xl animate-bounce">
// // // // //         ↓
// // // // //       </div>

// // // // //     </div>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import { useState } from "react";
// // // // import { CSSProperties } from "react";

// // // // export default function IsoCertificationPage() {
// // // //   const [hovered, setHovered] = useState(null);

// // // //   const details = [
// // // //     { label: "Standard", value: "Good Manufacturing Practices", color: "#60a5fa" },
// // // //     { label: "Certificate No.", value: "GMP/25819", color: "#e2e8f0" },
// // // //     { label: "Date of Certification", value: "01 August 2025", color: "#e2e8f0" },
// // // //     { label: "Re-certification Due", value: "31 July 2028", color: "#e2e8f0" },
// // // //     { label: "Expiry Date", value: "31 July 2028", color: "#e2e8f0" },
// // // //     { label: "Status", value: "● Active & Valid", color: "#34d399" },
// // // //   ];

// // // //   const infoTiles = [
// // // //     {
// // // //       icon: "🏭",
// // // //       title: "What this certifies",
// // // //       desc: "Research, development, manufacture & marketing of Aqua Culture food supplements.",
// // // //     },
// // // //     {
// // // //       icon: "🌐",
// // // //       title: "International standard",
// // // //       desc: "ISO 9001:2015 is the world's most recognized quality management standard, adopted in many countries.",
// // // //     },
// // // //     {
// // // //       icon: "🔍",
// // // //       title: "Audit & compliance",
// // // //       desc: "Independently audited by OCV Certification Inc., ensuring full compliance with manufacturing protocols.",
// // // //     },
// // // //   ];

// // // //   const scopeTags = [
// // // //     "Aqua Culture Food Supplements",
// // // //     "Animal Feed & Minerals",
// // // //     "R&D",
// // // //     "Manufacturing",
// // // //     "Quality Management",
// // // //     "Marketing",
// // // //   ];

// // // //   return (
// // // //     <div style={styles.page}>
// // // //       {/* Background glow */}
// // // //       <div style={styles.bgGlow} />

// // // //       {/* HERO */}
// // // //       <div style={styles.hero}>
// // // //         <div style={styles.badgeRow} className="mt-20">
// // // //           {["✦ ISO Certified", "Quality Assured", "Internationally Recognized"].map((b, i) => (
// // // //             <span key={i} style={{ ...styles.badge, ...(i === 0 ? styles.badgeGold : {}) }}>
// // // //               {b}
// // // //             </span>
// // // //           ))}
// // // //         </div>
// // // //         <h1 style={styles.h1}>GMP Certification</h1>
// // // //         <p style={styles.heroSub}>Verified Quality & Manufacturing Compliance</p>
// // // //         <p style={styles.certType}>GMP · Good Manufacturing Practices</p>
// // // //       </div>

// // // //       {/* CONTENT */}
// // // //       <div style={styles.content}>

// // // //         {/* Certificate showcase */}
// // // //         <div style={styles.certShowcase}>

// // // //           {/* Certificate visual card */}
// // // //           <img
// // // //   src="/certificates/gmp.jpg"
// // // //   alt="Certificate"
// // // //   style={styles.certImage}
// // // // />

// // // //           {/* Details panel */}
// // // //           <div style={styles.certCard}>
// // // //             <div style={styles.certAccentBar} />
// // // //             <h2 style={styles.detailH2}>Innovare Biopharma LLP</h2>
// // // //             <p style={styles.detailOrg}>OCV Certification Body</p>

// // // //             {details.map((d, i) => (
// // // //               <div key={i} style={styles.detailRow}>
// // // //                 <span style={styles.detailLabel}>{d.label}</span>
// // // //                 <span style={{ ...styles.detailVal, color: d.color }}>{d.value}</span>
// // // //               </div>
// // // //             ))}

// // // //             <div style={styles.statusStrip}>
// // // //               <div style={styles.statusDot} />
// // // //               <span style={styles.statusText}>
// // // //                 Verify certificate at www.ocicert.com
// // // //               </span>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Info tiles */}
// // // //         <div style={styles.infoGrid}>
// // // //           {infoTiles.map((tile, i) => (
// // // //             <div key={i} style={styles.infoTile}>
// // // //               <div style={styles.tileIcon}>{tile.icon}</div>
// // // //               <h3 style={styles.tileH3}>{tile.title}</h3>
// // // //               <p style={styles.tileP}>{tile.desc}</p>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Scope */}
// // // //         <div style={styles.scopeBox}>
// // // //           <h3 style={styles.scopeH3}>Scope of Certification</h3>
// // // //           <div style={styles.scopeItems}>
// // // //             {scopeTags.map((tag, i) => (
// // // //               <span key={i} style={styles.scopeTag}>{tag}</span>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* Divider */}
// // // //         <div style={styles.divider} />

// // // //         {/* Bottom CTAs */}
// // // //         <div style={styles.ctaRow}>
// // // //           <a
// // // //   href="/certificates/iso.pdf"
// // // //   target="_blank"
// // // //   rel="noopener noreferrer"
// // // //   style={{ textDecoration: "none" }}
// // // // >
// // // //   <button
// // // //     style={{
// // // //       ...styles.btnPrimary,
// // // //       ...(hovered === "view2" ? styles.btnPrimaryHover : {}),
// // // //     }}
// // // //     onMouseEnter={() => setHovered("view2")}
// // // //     onMouseLeave={() => setHovered(null)}
// // // //   >
// // // //     ◎ View Full Certificate
// // // //   </button>
// // // // </a>
// // // //           <button
// // // //             style={{ ...styles.btnSecondary, ...(hovered === "dl2" ? styles.btnSecondaryHover : {}) }}
// // // //             onMouseEnter={() => setHovered("dl2")}
// // // //             onMouseLeave={() => setHovered(null)}
// // // //           >
// // // //             ⬇ Download PDF
// // // //           </button>
// // // //           <button
// // // //             style={{ ...styles.btnSecondary, ...(hovered === "verify" ? styles.btnSecondaryHover : {}) }}
// // // //             onMouseEnter={() => setHovered("verify")}
// // // //             onMouseLeave={() => setHovered(null)}
// // // //           >
// // // //             ✓ Verify Online
// // // //           </button>
// // // //         </div>

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // const styles = {
// // // //   page: {
// // // //     background: "linear-gradient(135deg, #0a1628 0%, #0d2247 50%, #0a1628 100%)",
// // // //     minHeight: "100vh",
// // // //     fontFamily: "'Segoe UI', system-ui, sans-serif",
// // // //     color: "#fff",
// // // //     position: "relative",
// // // //     overflowX: "hidden",
// // // //   },
// // // //   bgGlow: {
// // // //     position: "absolute",
// // // //     top: "-80px",
// // // //     left: "50%",
// // // //     transform: "translateX(-50%)",
// // // //     width: "700px",
// // // //     height: "700px",
// // // //     background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)",
// // // //     pointerEvents: "none",
// // // //   },
// // // //   hero: {
// // // //     textAlign: "center",
// // // //     padding: "64px 40px 40px",
// // // //     position: "relative",
// // // //   },
// // // //   badgeRow: {
// // // //     display: "flex",
// // // //     justifyContent: "center",
// // // //     gap: "10px",
// // // //     marginBottom: "20px",
// // // //     flexWrap: "wrap",
// // // //   },
// // // //   badge: {
// // // //     background: "rgba(59,130,246,0.15)",
// // // //     border: "0.5px solid rgba(59,130,246,0.4)",
// // // //     color: "#93c5fd",
// // // //     fontSize: "11px",
// // // //     padding: "4px 14px",
// // // //     borderRadius: "20px",
// // // //     letterSpacing: "0.08em",
// // // //     textTransform: "uppercase",
// // // //   },
// // // //   badgeGold: {
// // // //     background: "rgba(234,179,8,0.12)",
// // // //     border: "0.5px solid rgba(234,179,8,0.35)",
// // // //     color: "#fde68a",
// // // //   },
// // // //   h1: {
// // // //     fontSize: "52px",
// // // //     fontWeight: 700,
// // // //     letterSpacing: "-1px",
// // // //     marginBottom: "12px",
// // // //     background: "linear-gradient(135deg, #fff 40%, #93c5fd)",
// // // //     WebkitBackgroundClip: "text",
// // // //     WebkitTextFillColor: "transparent",
// // // //     backgroundClip: "text",
// // // //   },
// // // //   heroSub: {
// // // //     color: "#94a3b8",
// // // //     fontSize: "16px",
// // // //     margin: "0 0 8px",
// // // //   },
// // // //   certType: {
// // // //     color: "#60a5fa",
// // // //     fontSize: "13px",
// // // //     fontWeight: 500,
// // // //     letterSpacing: "0.05em",
// // // //   },
// // // //   content: {
// // // //     maxWidth: "960px",
// // // //     margin: "0 auto",
// // // //     padding: "0 32px 60px",
// // // //   },
// // // //   certShowcase: {
// // // //     display: "grid",
// // // //     gridTemplateColumns: "1fr 1fr",
// // // //     gap: "28px",
// // // //     marginBottom: "32px",
// // // //     alignItems: "start",
// // // //   },
// // // //   certCard: {
// // // //     background: "rgba(255,255,255,0.04)",
// // // //     border: "0.5px solid rgba(255,255,255,0.10)",
// // // //     borderRadius: "20px",
// // // //     padding: "28px",
// // // //     position: "relative",
// // // //     overflow: "hidden",
// // // //   },
// // // //   certAccentBar: {
// // // //     position: "absolute",
// // // //     top: 0,
// // // //     left: 0,
// // // //     right: 0,
// // // //     height: "2px",
// // // //     background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
// // // //   },
// // // //   certImgWrap: {
// // // //     background: "rgba(255,255,255,0.06)",
// // // //     border: "0.5px solid rgba(255,255,255,0.08)",
// // // //     borderRadius: "12px",
// // // //     padding: "16px",
// // // //     marginBottom: "20px",
// // // //   },
// // // //   certPlaceholder: {
// // // //     background: "linear-gradient(135deg, #ff9a00, #ff6b00)",
// // // //     borderRadius: "10px",
// // // //     padding: "24px 20px",
// // // //   },
// // // //   ocvLogo: {
// // // //     fontSize: "22px",
// // // //     fontWeight: 800,
// // // //     color: "#fff",
// // // //     letterSpacing: "-0.5px",
// // // //     marginBottom: "2px",
// // // //   },
// // // //   certLabel: {
// // // //     fontSize: "11px",
// // // //     color: "rgba(255,255,255,0.85)",
// // // //     fontStyle: "italic",
// // // //     marginBottom: "10px",
// // // //   },
// // // //   certBody: {
// // // //     background: "#fff",
// // // //     borderRadius: "6px",
// // // //     padding: "12px",
// // // //   },
// // // //   company: {
// // // //     fontSize: "9px",
// // // //     fontWeight: 700,
// // // //     color: "#1e3a5f",
// // // //     textAlign: "center",
// // // //     marginBottom: "6px",
// // // //   },
// // // //   isoBig: {
// // // //     fontSize: "14px",
// // // //     fontWeight: 800,
// // // //     color: "#1e3a5f",
// // // //     textAlign: "center",
// // // //   },
// // // //   isoSub: {
// // // //     fontSize: "8px",
// // // //     color: "#475569",
// // // //     textAlign: "center",
// // // //     marginBottom: "8px",
// // // //   },
// // // //   lines: {
// // // //     display: "flex",
// // // //     flexDirection: "column",
// // // //     gap: "4px",
// // // //   },
// // // //   line: {
// // // //     height: "4px",
// // // //     background: "#e2e8f0",
// // // //     borderRadius: "2px",
// // // //   },
// // // //   certBadgesRow: {
// // // //     display: "flex",
// // // //     gap: "8px",
// // // //     justifyContent: "center",
// // // //     marginTop: "10px",
// // // //   },
// // // //   miniBadge: {
// // // //     width: "28px",
// // // //     height: "28px",
// // // //     borderRadius: "50%",
// // // //     border: "2px solid #ff9a00",
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //     fontSize: "7px",
// // // //     fontWeight: 700,
// // // //     color: "#ff9a00",
// // // //     background: "#fff",
// // // //   },
// // // //   ctaRow: {
// // // //     display: "flex",
// // // //     gap: "10px",
// // // //     justifyContent: "center",
// // // //     flexWrap: "wrap",
// // // //   },
// // // //   btnPrimary: {
// // // //     background: "#2563eb",
// // // //     color: "#fff",
// // // //     border: "none",
// // // //     padding: "12px 24px",
// // // //     borderRadius: "30px",
// // // //     fontSize: "13px",
// // // //     fontWeight: 600,
// // // //     cursor: "pointer",
// // // //     transition: "background 0.2s",
// // // //   },
// // // //   btnPrimaryHover: {
// // // //     background: "#1d4ed8",
// // // //   },
// // // //   btnSecondary: {
// // // //     background: "transparent",
// // // //     color: "#e2e8f0",
// // // //     border: "1px solid rgba(255,255,255,0.2)",
// // // //     padding: "12px 24px",
// // // //     borderRadius: "30px",
// // // //     fontSize: "13px",
// // // //     fontWeight: 500,
// // // //     cursor: "pointer",
// // // //     transition: "background 0.2s",
// // // //   },
// // // //   btnSecondaryHover: {
// // // //     background: "rgba(255,255,255,0.06)",
// // // //   },
// // // //   detailH2: {
// // // //     fontSize: "20px",
// // // //     fontWeight: 600,
// // // //     marginBottom: "4px",
// // // //     color: "#e2e8f0",
// // // //     marginTop: "12px",
// // // //   },
// // // //   detailOrg: {
// // // //     color: "#60a5fa",
// // // //     fontSize: "13px",
// // // //     marginBottom: "20px",
// // // //   },
// // // //   detailRow: {
// // // //     display: "flex",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "center",
// // // //     padding: "10px 0",
// // // //     borderBottom: "0.5px solid rgba(255,255,255,0.06)",
// // // //   },
// // // //   detailLabel: {
// // // //     fontSize: "11px",
// // // //     color: "#64748b",
// // // //     textTransform: "uppercase",
// // // //     letterSpacing: "0.06em",
// // // //   },
// // // //   detailVal: {
// // // //     fontSize: "13px",
// // // //     fontWeight: 500,
// // // //   },
// // // //   statusStrip: {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "8px",
// // // //     background: "rgba(52,211,153,0.08)",
// // // //     border: "0.5px solid rgba(52,211,153,0.25)",
// // // //     borderRadius: "10px",
// // // //     padding: "10px 14px",
// // // //     marginTop: "20px",
// // // //   },
// // // //   statusDot: {
// // // //     width: "8px",
// // // //     height: "8px",
// // // //     borderRadius: "50%",
// // // //     background: "#34d399",
// // // //     flexShrink: 0,
// // // //   },
// // // //   statusText: {
// // // //     fontSize: "12px",
// // // //     color: "#34d399",
// // // //     fontWeight: 500,
// // // //   },
// // // //   infoGrid: {
// // // //     display: "grid",
// // // //     gridTemplateColumns: "repeat(3, 1fr)",
// // // //     gap: "16px",
// // // //     marginBottom: "28px",
// // // //   },
// // // //   infoTile: {
// // // //     background: "rgba(255,255,255,0.04)",
// // // //     border: "0.5px solid rgba(255,255,255,0.08)",
// // // //     borderRadius: "14px",
// // // //     padding: "20px 18px",
// // // //   },
// // // //   tileIcon: {
// // // //     fontSize: "20px",
// // // //     marginBottom: "10px",
// // // //   },
// // // //   tileH3: {
// // // //     fontSize: "13px",
// // // //     fontWeight: 600,
// // // //     color: "#e2e8f0",
// // // //     marginBottom: "6px",
// // // //   },
// // // //   tileP: {
// // // //     fontSize: "12px",
// // // //     color: "#64748b",
// // // //     lineHeight: 1.6,
// // // //   },
// // // //   scopeBox: {
// // // //     background: "rgba(255,255,255,0.03)",
// // // //     border: "0.5px solid rgba(255,255,255,0.07)",
// // // //     borderRadius: "14px",
// // // //     padding: "24px",
// // // //     marginBottom: "32px",
// // // //   },
// // // //   scopeH3: {
// // // //     fontSize: "12px",
// // // //     fontWeight: 600,
// // // //     color: "#94a3b8",
// // // //     textTransform: "uppercase",
// // // //     letterSpacing: "0.08em",
// // // //     marginBottom: "16px",
// // // //   },
// // // //   scopeItems: {
// // // //     display: "flex",
// // // //     flexWrap: "wrap",
// // // //     gap: "8px",
// // // //   },
// // // //   scopeTag: {
// // // //     background: "rgba(59,130,246,0.10)",
// // // //     border: "0.5px solid rgba(59,130,246,0.25)",
// // // //     color: "#93c5fd",
// // // //     fontSize: "12px",
// // // //     padding: "5px 14px",
// // // //     borderRadius: "20px",
// // // //   },
// // // //   divider: {
// // // //     height: "0.5px",
// // // //     background: "rgba(255,255,255,0.06)",
// // // //     margin: "0 0 32px",
// // // //   },
// // // // };
// // // "use client";

// // // import { useState } from "react";

// // // const details = [
// // //   { label: "Standard", value: "Good Manufacturing Practices", type: "blue" },
// // //   { label: "Certificate No.", value: "GMP/25819", type: "default" },
// // //   { label: "Date of Certification", value: "01 August 2025", type: "default" },
// // //   { label: "Re-certification Due", value: "31 July 2028", type: "default" },
// // //   { label: "Expiry Date", value: "31 July 2028", type: "default" },
// // //   { label: "Status", value: "● Active & Valid", type: "green" },
// // // ];

// // // const infoTiles = [
// // //   {
// // //     icon: "🏭",
// // //     title: "What this certifies",
// // //     desc: "Research, development, manufacture & marketing of Aqua Culture food supplements.",
// // //   },
// // //   {
// // //     icon: "🌐",
// // //     title: "International standard",
// // //     desc: "ISO 9001:2015 is the world's most recognized quality management standard, adopted globally.",
// // //   },
// // //   {
// // //     icon: "🔍",
// // //     title: "Audit & compliance",
// // //     desc: "Independently audited by OCV Certification Inc., ensuring full compliance with manufacturing protocols.",
// // //   },
// // // ];

// // // const scopeTags = [
// // //   "Aqua Culture Food Supplements",
// // //   "Animal Feed & Minerals",
// // //   "R&D",
// // //   "Manufacturing",
// // //   "Quality Management",
// // //   "Marketing",
// // // ];

// // // type HoverKey = "view" | "download" | "verify" | null;

// // // export default function IsoCertificationPage() {
// // //   const [hovered, setHovered] = useState<HoverKey>(null);

// // //   return (
// // //     <div style={styles.page}>
// // //       {/* Hero */}
// // //       <div style={styles.hero} className="mt-10">
// // //         <div style={styles.badgeRow}>
// // //           <span style={{ ...styles.badge, ...styles.badgeGold }}>✦ ISO Certified</span>
// // //           <span style={styles.badge}>Quality Assured</span>
// // //           <span style={styles.badge}>Internationally Recognized</span>
// // //         </div>
// // //         <h1 style={styles.h1}>GMP Certification</h1>
// // //         <p style={styles.heroSub}>Verified Quality &amp; Manufacturing Compliance</p>
// // //         <p style={styles.certType}>GMP · Good Manufacturing Practices</p>
// // //       </div>

// // //       {/* Content */}
// // //       <div style={styles.content}>
// // //         {/* Certificate showcase */}
// // //         <div style={styles.certShowcase}>
// // //           {/* Certificate image */}
// // //           <img
// // //             src="/certificates/gmp.jpg"
// // //             alt="GMP Certificate"
// // //             style={styles.certImage}
// // //           />

// // //           {/* Details card */}
// // //           <div style={styles.certCard}>
// // //             <div style={styles.accentBar} />
// // //             <h2 style={styles.detailH2}>Innovare Biopharma LLP</h2>
// // //             <p style={styles.detailOrg}>OCV Certification Body</p>

// // //             {details.map((d, i) => (
// // //               <div
// // //                 key={i}
// // //                 style={{
// // //                   ...styles.detailRow,
// // //                   ...(i === details.length - 1 ? { borderBottom: "none" } : {}),
// // //                 }}
// // //               >
// // //                 <span style={styles.detailLabel}>{d.label}</span>
// // //                 <span
// // //                   style={{
// // //                     ...styles.detailVal,
// // //                     ...(d.type === "blue" ? styles.detailValBlue : {}),
// // //                     ...(d.type === "green" ? styles.detailValGreen : {}),
// // //                   }}
// // //                 >
// // //                   {d.value}
// // //                 </span>
// // //               </div>
// // //             ))}

// // //             <div style={styles.statusStrip}>
// // //               <div style={styles.statusDot} />
// // //               <span style={styles.statusText}>
// // //                 Verify certificate at www.ocicert.com
// // //               </span>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Info tiles */}
// // //         <div style={styles.infoGrid}>
// // //           {infoTiles.map((tile, i) => (
// // //             <div key={i} style={styles.infoTile}>
// // //               <div style={styles.tileIcon}>{tile.icon}</div>
// // //               <h3 style={styles.tileH3}>{tile.title}</h3>
// // //               <p style={styles.tileP}>{tile.desc}</p>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Scope */}
// // //         <div style={styles.scopeBox}>
// // //           <p style={styles.scopeH3}>Scope of Certification</p>
// // //           <div style={styles.scopeTags}>
// // //             {scopeTags.map((tag, i) => (
// // //               <span key={i} style={styles.scopeTag}>
// // //                 {tag}
// // //               </span>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Divider */}
// // //         <div style={styles.divider} />

// // //         {/* CTAs */}
// // //         <div style={styles.ctaRow}>
// // //           <a
// // //             href="/certificates/gmp.pdf"
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             style={{ textDecoration: "none" }}
// // //           >
// // //             <button
// // //               style={{
// // //                 ...styles.btnPrimary,
// // //                 ...(hovered === "view" ? styles.btnPrimaryHover : {}),
// // //               }}
// // //               onMouseEnter={() => setHovered("view")}
// // //               onMouseLeave={() => setHovered(null)}
// // //             >
// // //               ◎ View Full Certificate
// // //             </button>
// // //           </a>

// // //           <button
// // //             style={{
// // //               ...styles.btnSecondary,
// // //               ...(hovered === "download" ? styles.btnSecondaryHover : {}),
// // //             }}
// // //             onMouseEnter={() => setHovered("download")}
// // //             onMouseLeave={() => setHovered(null)}
// // //           >
// // //             ⬇ Download PDF
// // //           </button>

// // //           <button
// // //             style={{
// // //               ...styles.btnSecondary,
// // //               ...(hovered === "verify" ? styles.btnSecondaryHover : {}),
// // //             }}
// // //             onMouseEnter={() => setHovered("verify")}
// // //             onMouseLeave={() => setHovered(null)}
// // //           >
// // //             ✓ Verify Online
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // const styles: Record<string, React.CSSProperties> = {
// // //   page: {
// // //     background: "#f8f9fb",
// // //     minHeight: "100vh",
// // //     fontFamily: "'Segoe UI', system-ui, sans-serif",
// // //     color: "#1a1a2e",
// // //   },
// // //   hero: {
// // //     background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #2563eb 100%)",
// // //     padding: "64px 40px 48px",
// // //     textAlign: "center",
// // //     position: "relative",
// // //     overflow: "hidden",
// // //   },
// // //   badgeRow: {
// // //     display: "flex",
// // //     justifyContent: "center",
// // //     gap: "8px",
// // //     flexWrap: "wrap",
// // //     marginBottom: "20px",
// // //   },
// // //   badge: {
// // //     background: "rgba(255,255,255,0.15)",
// // //     border: "0.5px solid rgba(255,255,255,0.3)",
// // //     color: "#e0eaff",
// // //     fontSize: "11px",
// // //     padding: "4px 14px",
// // //     borderRadius: "20px",
// // //     letterSpacing: "0.08em",
// // //     textTransform: "uppercase",
// // //   },
// // //   badgeGold: {
// // //     background: "rgba(251,191,36,0.18)",
// // //     border: "0.5px solid rgba(251,191,36,0.45)",
// // //     color: "#fde68a",
// // //   },
// // //   h1: {
// // //     fontSize: "48px",
// // //     fontWeight: 700,
// // //     color: "#ffffff",
// // //     letterSpacing: "-1px",
// // //     marginBottom: "10px",
// // //     marginTop: 0,
// // //   },
// // //   heroSub: {
// // //     color: "rgba(255,255,255,0.75)",
// // //     fontSize: "16px",
// // //     marginBottom: "6px",
// // //     marginTop: 0,
// // //   },
// // //   certType: {
// // //     color: "#93c5fd",
// // //     fontSize: "13px",
// // //     fontWeight: 500,
// // //     letterSpacing: "0.05em",
// // //     margin: 0,
// // //   },
// // //   content: {
// // //     maxWidth: "960px",
// // //     margin: "0 auto",
// // //     padding: "36px 32px 60px",
// // //   },
// // //   certShowcase: {
// // //     display: "grid",
// // //     gridTemplateColumns: "1fr 1fr",
// // //     gap: "24px",
// // //     marginBottom: "28px",
// // //     alignItems: "start",
// // //   },
// // //   certImage: {
// // //     width: "100%",
// // //     borderRadius: "14px",
// // //     border: "0.5px solid #e2e8f0",
// // //     boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
// // //     display: "block",
// // //     background: "#fff",
// // //   },
// // //   certCard: {
// // //     background: "#ffffff",
// // //     border: "0.5px solid #e2e8f0",
// // //     borderRadius: "16px",
// // //     padding: "28px",
// // //     position: "relative",
// // //     overflow: "hidden",
// // //     boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
// // //   },
// // //   accentBar: {
// // //     position: "absolute",
// // //     top: 0,
// // //     left: 0,
// // //     right: 0,
// // //     height: "3px",
// // //     background: "linear-gradient(90deg, #1d4ed8, #06b6d4)",
// // //   },
// // //   detailH2: {
// // //     fontSize: "19px",
// // //     fontWeight: 600,
// // //     color: "#1e293b",
// // //     marginTop: "12px",
// // //     marginBottom: "4px",
// // //   },
// // //   detailOrg: {
// // //     color: "#2563eb",
// // //     fontSize: "13px",
// // //     marginBottom: "20px",
// // //     fontWeight: 500,
// // //     marginTop: 0,
// // //   },
// // //   detailRow: {
// // //     display: "flex",
// // //     justifyContent: "space-between",
// // //     alignItems: "center",
// // //     padding: "10px 0",
// // //     borderBottom: "0.5px solid #f1f5f9",
// // //   },
// // //   detailLabel: {
// // //     fontSize: "11px",
// // //     color: "#94a3b8",
// // //     textTransform: "uppercase",
// // //     letterSpacing: "0.06em",
// // //   },
// // //   detailVal: {
// // //     fontSize: "13px",
// // //     fontWeight: 500,
// // //     color: "#1e293b",
// // //   },
// // //   detailValBlue: {
// // //     color: "#2563eb",
// // //   },
// // //   detailValGreen: {
// // //     color: "#059669",
// // //   },
// // //   statusStrip: {
// // //     display: "flex",
// // //     alignItems: "center",
// // //     gap: "8px",
// // //     background: "#f0fdf4",
// // //     border: "0.5px solid #bbf7d0",
// // //     borderRadius: "10px",
// // //     padding: "10px 14px",
// // //     marginTop: "20px",
// // //   },
// // //   statusDot: {
// // //     width: "8px",
// // //     height: "8px",
// // //     borderRadius: "50%",
// // //     background: "#10b981",
// // //     flexShrink: 0,
// // //   },
// // //   statusText: {
// // //     fontSize: "12px",
// // //     color: "#047857",
// // //     fontWeight: 500,
// // //   },
// // //   infoGrid: {
// // //     display: "grid",
// // //     gridTemplateColumns: "repeat(3, 1fr)",
// // //     gap: "14px",
// // //     marginBottom: "24px",
// // //   },
// // //   infoTile: {
// // //     background: "#ffffff",
// // //     border: "0.5px solid #e2e8f0",
// // //     borderRadius: "14px",
// // //     padding: "20px 18px",
// // //     boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
// // //   },
// // //   tileIcon: {
// // //     fontSize: "18px",
// // //     marginBottom: "10px",
// // //   },
// // //   tileH3: {
// // //     fontSize: "13px",
// // //     fontWeight: 600,
// // //     color: "#1e293b",
// // //     marginBottom: "6px",
// // //     marginTop: 0,
// // //   },
// // //   tileP: {
// // //     fontSize: "12px",
// // //     color: "#64748b",
// // //     lineHeight: 1.6,
// // //     margin: 0,
// // //   },
// // //   scopeBox: {
// // //     background: "#ffffff",
// // //     border: "0.5px solid #e2e8f0",
// // //     borderRadius: "14px",
// // //     padding: "24px",
// // //     marginBottom: "28px",
// // //     boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
// // //   },
// // //   scopeH3: {
// // //     fontSize: "11px",
// // //     fontWeight: 600,
// // //     color: "#94a3b8",
// // //     textTransform: "uppercase",
// // //     letterSpacing: "0.08em",
// // //     marginBottom: "14px",
// // //     marginTop: 0,
// // //   },
// // //   scopeTags: {
// // //     display: "flex",
// // //     flexWrap: "wrap",
// // //     gap: "8px",
// // //   },
// // //   scopeTag: {
// // //     background: "#eff6ff",
// // //     border: "0.5px solid #bfdbfe",
// // //     color: "#1d4ed8",
// // //     fontSize: "12px",
// // //     padding: "5px 14px",
// // //     borderRadius: "20px",
// // //     fontWeight: 500,
// // //   },
// // //   divider: {
// // //     height: "0.5px",
// // //     background: "#e2e8f0",
// // //     margin: "0 0 28px",
// // //   },
// // //   ctaRow: {
// // //     display: "flex",
// // //     gap: "10px",
// // //     justifyContent: "center",
// // //     flexWrap: "wrap",
// // //   },
// // //   btnPrimary: {
// // //     background: "#1d4ed8",
// // //     color: "#ffffff",
// // //     border: "none",
// // //     padding: "12px 24px",
// // //     borderRadius: "30px",
// // //     fontSize: "13px",
// // //     fontWeight: 600,
// // //     cursor: "pointer",
// // //     transition: "background 0.2s",
// // //   },
// // //   btnPrimaryHover: {
// // //     background: "#1e40af",
// // //   },
// // //   btnSecondary: {
// // //     background: "#ffffff",
// // //     color: "#374151",
// // //     border: "1px solid #d1d5db",
// // //     padding: "12px 24px",
// // //     borderRadius: "30px",
// // //     fontSize: "13px",
// // //     fontWeight: 500,
// // //     cursor: "pointer",
// // //     transition: "background 0.2s",
// // //   },
// // //   btnSecondaryHover: {
// // //     background: "#f9fafb",
// // //   },
// // // };
// // "use client";

// // import { useState, useEffect, useRef } from "react";

// // function useInView(threshold = 0.15) {
// //   const ref = useRef<HTMLDivElement>(null);
// //   const [inView, setInView] = useState(false);
// //   useEffect(() => {
// //     const el = ref.current;
// //     if (!el) return;
// //     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
// //     obs.observe(el);
// //     return () => obs.disconnect();
// //   }, [threshold]);
// //   return { ref, inView };
// // }

// // const details = [
// //   { label: "Standard", value: "Good Manufacturing Practices" },
// //   { label: "Certificate No.", value: "GMP/25819" },
// //   { label: "Certification Body", value: "Optimum Certifications Inc." },
// //   { label: "Date of Certification", value: "01 August 2025" },
// //   { label: "Initial Registration", value: "01 August 2025" },
// //   { label: "Recertification Due", value: "31 July 2028" },
// //   { label: "Certificate Expiry", value: "31 July 2028" },
// // ];

// // const scopeTags = [
// //   "Research & Development",
// //   "Manufacture & Marketing",
// //   "Aqua Culture Feed Supplements",
// //   "Aqua Health Care Products",
// //   "Probiotics & Minerals",
// //   "Animal / Fish & Shrimp",
// //   "Raw Materials & Chemicals",
// //   "Industrial & Environmental Use",
// // ];

// // const pillars = [
// //   {
// //     icon: "◈",
// //     title: "Manufacturing Standards",
// //     desc: "Full compliance with GMP guidelines ensuring every product is consistently produced and controlled to quality standards.",
// //   },
// //   {
// //     icon: "◉",
// //     title: "Facility Compliance",
// //     desc: "Factory at Medchal-Malkajgiri, Hyderabad assessed and certified by Optimum Certifications Inc. for GMP adherence.",
// //   },
// //   {
// //     icon: "◎",
// //     title: "Annual Surveillance",
// //     desc: "Validity maintained through successful annual surveillance audits confirming ongoing compliance with required standards.",
// //   },
// //   {
// //     icon: "⊕",
// //     title: "Verified Online",
// //     desc: "Certificate authenticity can be independently verified at www.ocicert.com using the certificate number GMP/25819.",
// //   },
// // ];

// // export default function GmpCertificationPage() {
// //   const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);
// //   const heroRef = useInView(0.1);
// //   const certRef = useInView(0.1);
// //   const pillarsRef = useInView(0.1);
// //   const scopeRef = useInView(0.1);

// //   const sysFont = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

// //   return (
// //     <div style={{
// //       background: "#060d1a",
// //       minHeight: "100vh",
// //       fontFamily: sysFont,
// //       color: "#daeeff",
// //       overflowX: "hidden",
// //       position: "relative",
// //     }}>
// //       <style>{`
// //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// //         @keyframes fadeUp {
// //           from { opacity: 0; transform: translateY(36px); }
// //           to   { opacity: 1; transform: translateY(0); }
// //         }
// //         @keyframes fadeIn {
// //           from { opacity: 0; }
// //           to   { opacity: 1; }
// //         }
// //         @keyframes shimmerLine {
// //           0%   { transform: translateX(-100%); }
// //           100% { transform: translateX(400%); }
// //         }
// //         @keyframes rotateSlow {
// //           from { transform: rotate(0deg); }
// //           to   { transform: rotate(360deg); }
// //         }
// //         @keyframes pulseDot {
// //           0%, 100% { box-shadow: 0 0 0 0 rgba(56,189,248,0.5); }
// //           50%       { box-shadow: 0 0 0 8px rgba(56,189,248,0); }
// //         }

// //         .cert-img-wrap {
// //           transition: transform 0.5s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.5s ease;
// //         }
// //         .cert-img-wrap:hover {
// //           transform: scale(1.025) rotate(0.5deg);
// //           box-shadow: 0 40px 100px rgba(56,189,248,0.2), 0 0 0 1px rgba(56,189,248,0.3) !important;
// //         }
// //         .pillar-card {
// //           transition: transform 0.35s ease, border-color 0.35s ease, background 0.35s ease;
// //         }
// //         .pillar-card:hover {
// //           transform: translateY(-6px);
// //           border-color: rgba(56,189,248,0.35) !important;
// //           background: rgba(56,189,248,0.05) !important;
// //         }
// //         .scope-tag {
// //           transition: all 0.25s ease;
// //           cursor: default;
// //         }
// //         .scope-tag:hover {
// //           background: rgba(56,189,248,0.15) !important;
// //           border-color: rgba(56,189,248,0.5) !important;
// //           color: #38bdf8 !important;
// //         }
// //         .action-btn { transition: all 0.3s ease; }
// //       `}</style>

// //       {/* Background grid */}
// //       <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
// //       {/* Top glow */}
// //       <div style={{ position: "fixed", top: "-200px", left: "50%", transform: "translateX(-50%)", width: "900px", height: "600px", background: "radial-gradient(ellipse, rgba(56,189,248,0.06) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
// //       {/* Corner ornaments */}
// //       {([["40px","40px","left","top"],["50px","50px","left","top"],["40px","40px","right","top"],["50px","50px","right","top"]] as const).map(([s, s2, h, v], i) => (
// //         <div key={i} style={{ position: "fixed", [v]: s, [h]: s, width: i%2===0?"80px":"60px", height: i%2===0?"80px":"60px", border: `0.5px solid rgba(56,189,248,${i%2===0?0.12:0.07})`, borderRadius: "2px", pointerEvents: "none", zIndex: 0 }} />
// //       ))}

// //       {/* ── HERO ── */}
// //       <section ref={heroRef.ref} style={{ position: "relative", zIndex: 1, padding: "140px 48px 80px", textAlign: "center" }}>
// //         {/* Rotating ring */}
// //         <div style={{ position: "absolute", top: "80px", left: "50%", transform: "translateX(-50%)", width: "300px", height: "300px", border: "0.5px solid rgba(56,189,248,0.08)", borderRadius: "50%", animation: "rotateSlow 40s linear infinite", pointerEvents: "none" }}>
// //           {[0,60,120,180,240,300].map((deg) => (
// //             <div key={deg} style={{ position: "absolute", top: "50%", left: "50%", width: "6px", height: "6px", marginTop: "-3px", marginLeft: "-3px", background: "rgba(56,189,248,0.25)", borderRadius: "50%", transform: `rotate(${deg}deg) translateX(149px)` }} />
// //           ))}
// //         </div>

// //         {/* Status badge */}
// //         <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(56,189,248,0.08)", border: "0.5px solid rgba(56,189,248,0.3)", color: "#38bdf8", fontSize: "10px", fontWeight: 600, padding: "6px 18px", borderRadius: "20px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "32px", fontFamily: sysFont, opacity: heroRef.inView ? 1 : 0, animation: heroRef.inView ? "fadeIn 0.6s ease both" : "none" }}>
// //           <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#38bdf8", animation: "pulseDot 2s infinite" }} />
// //           Certified & Verified · Active
// //         </div>

// //         {/* Heading */}
// //         <h1 style={{ fontFamily: sysFont, fontSize: "clamp(42px, 7vw, 88px)", fontWeight: 800, color: "#e8f4ff", lineHeight: 1.05, letterSpacing: "-2px", marginBottom: "16px", opacity: heroRef.inView ? 1 : 0, animation: heroRef.inView ? "fadeUp 0.8s 0.1s ease both" : "none" }}>
// //           GMP
// //           <span style={{ display: "block", background: "linear-gradient(90deg, #38bdf8 0%, #7dd3fc 40%, #0ea5e9 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
// //             Certified
// //           </span>
// //         </h1>

// //         <p style={{ fontFamily: sysFont, fontSize: "17px", color: "rgba(218,238,255,0.5)", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto 12px", opacity: heroRef.inView ? 1 : 0, animation: heroRef.inView ? "fadeUp 0.8s 0.2s ease both" : "none" }}>
// //           Good Manufacturing Practices — Ensuring every product is consistently manufactured, controlled, and compliant with quality standards.
// //         </p>

// //         <p style={{ fontFamily: sysFont, fontSize: "13px", color: "#38bdf8", letterSpacing: "0.08em", opacity: heroRef.inView ? 1 : 0, animation: heroRef.inView ? "fadeUp 0.8s 0.3s ease both" : "none" }}>
// //           Innovare Biopharma LLP · Certificate No. GMP/25819
// //         </p>

// //         {/* Decorative line */}
// //         <div style={{ width: heroRef.inView ? "120px" : "0px", height: "1px", background: "linear-gradient(90deg, transparent, #38bdf8, transparent)", margin: "32px auto 0", transition: "width 1.2s 0.5s ease" }} />
// //       </section>

// //       {/* ── CERTIFICATE + DETAILS ── */}
// //       <section ref={certRef.ref} style={{ position: "relative", zIndex: 1, maxWidth: "1060px", margin: "0 auto", padding: "0 48px 80px" }}>
// //         <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "32px", alignItems: "start" }}>

// //           {/* Certificate image */}
// //           <div className="cert-img-wrap" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(56,189,248,0.2)", opacity: certRef.inView ? 1 : 0, animation: certRef.inView ? "fadeUp 0.9s 0.05s ease both" : "none", position: "relative" }}>
// //             <img src="/certificates/gmp.jpg" alt="GMP Certificate — Innovare Biopharma LLP" style={{ width: "100%", height: "auto", display: "block" }} />
// //             <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(56,189,248,0.04) 0%, transparent 50%, rgba(56,189,248,0.04) 100%)", pointerEvents: "none" }} />
// //           </div>

// //           {/* Details panel */}
// //           <div style={{ opacity: certRef.inView ? 1 : 0, animation: certRef.inView ? "fadeUp 0.9s 0.15s ease both" : "none" }}>

// //             {/* Panel header */}
// //             <div style={{ background: "rgba(56,189,248,0.06)", border: "0.5px solid rgba(56,189,248,0.2)", borderRadius: "14px 14px 0 0", padding: "20px 24px", borderBottom: "none", position: "relative", overflow: "hidden" }}>
// //               <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent 0%, #38bdf8 50%, transparent 100%)" }}>
// //                 <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)", width: "30%", animation: "shimmerLine 3s 1s ease-in-out infinite" }} />
// //               </div>
// //               <div style={{ fontFamily: sysFont, fontSize: "10px", color: "#38bdf8", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px", fontWeight: 600 }}>Certificate Details</div>
// //               <div style={{ fontFamily: sysFont, fontSize: "20px", fontWeight: 700, color: "#e8f4ff" }}>Innovare Biopharma LLP</div>
// //               <div style={{ fontFamily: sysFont, fontSize: "12px", color: "rgba(218,238,255,0.4)", marginTop: "2px" }}>Optimum Certifications Inc.</div>
// //             </div>

// //             {/* Detail rows */}
// //             <div style={{ background: "rgba(255,255,255,0.025)", border: "0.5px solid rgba(56,189,248,0.15)", borderTop: "none", borderRadius: "0 0 14px 14px", overflow: "hidden" }}>
// //               {details.map((d, i) => (
// //                 <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 24px", borderBottom: i < details.length - 1 ? "0.5px solid rgba(255,255,255,0.05)" : "none", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)" }}>
// //                   <span style={{ fontFamily: sysFont, fontSize: "11px", color: "rgba(218,238,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500 }}>{d.label}</span>
// //                   <span style={{ fontFamily: sysFont, fontSize: "13px", fontWeight: 600, color: d.label === "Standard" ? "#38bdf8" : d.label === "Certificate Expiry" ? "#7dd3fc" : "#e8f4ff" }}>{d.value}</span>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Status */}
// //             <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(56,189,248,0.06)", border: "0.5px solid rgba(56,189,248,0.2)", borderRadius: "10px", padding: "12px 18px", marginTop: "16px", fontFamily: sysFont }}>
// //               <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#38bdf8", flexShrink: 0, animation: "pulseDot 2s infinite" }} />
// //               <span style={{ fontSize: "12px", color: "#7dd3fc", fontWeight: 500 }}>Active & Valid</span>
// //               <span style={{ fontSize: "11px", color: "rgba(56,189,248,0.45)", marginLeft: "auto" }}>ocicert.com</span>
// //             </div>

// //             {/* Address info */}
// //             <div style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(56,189,248,0.1)", borderRadius: "10px", padding: "14px 18px", marginTop: "12px" }}>
// //               <div style={{ fontFamily: sysFont, fontSize: "10px", color: "#38bdf8", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "8px" }}>Factory Address</div>
// //               <p style={{ fontFamily: sysFont, fontSize: "11px", color: "rgba(218,238,255,0.4)", lineHeight: 1.6 }}>
// //                 P. No. 50 & 51 (Part), H No. 4-125, Teachers Colony, Athvelly Village, Medchal-Mandal, Medchal-Malkajgiri District, Hyderabad - 501401, Telangana, INDIA
// //               </p>
// //             </div>

// //             {/* Buttons */}
// //             <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
// //               <a href="/certificates/gmp.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", flex: 1 }}>
// //                 <button className="action-btn" onMouseEnter={() => setHoveredBtn("view")} onMouseLeave={() => setHoveredBtn(null)} style={{ width: "100%", background: hoveredBtn === "view" ? "linear-gradient(135deg,#0284c7,#38bdf8)" : "linear-gradient(135deg,#38bdf8,#7dd3fc)", border: "none", color: "#060d1a", padding: "12px 20px", borderRadius: "10px", fontSize: "12px", fontWeight: 700, cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: sysFont, boxShadow: hoveredBtn === "view" ? "0 8px 32px rgba(56,189,248,0.4)" : "0 4px 16px rgba(56,189,248,0.2)", transform: hoveredBtn === "view" ? "translateY(-1px)" : "none" }}>
// //                   ◎ View Certificate
// //                 </button>
// //               </a>
// //               <button className="action-btn" onMouseEnter={() => setHoveredBtn("dl")} onMouseLeave={() => setHoveredBtn(null)} style={{ flex: 1, background: "transparent", border: `0.5px solid ${hoveredBtn === "dl" ? "rgba(56,189,248,0.5)" : "rgba(56,189,248,0.2)"}`, color: hoveredBtn === "dl" ? "#38bdf8" : "rgba(218,238,255,0.6)", padding: "12px 20px", borderRadius: "10px", fontSize: "12px", fontWeight: 600, cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: sysFont, transform: hoveredBtn === "dl" ? "translateY(-1px)" : "none" }}>
// //                 ⬇ Download
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Divider */}
// //       <div style={{ maxWidth: "1060px", margin: "0 auto 80px", padding: "0 48px" }}>
// //         <div style={{ height: "0.5px", background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.2), transparent)" }} />
// //       </div>

// //       {/* ── QUALITY PILLARS ── */}
// //       <section ref={pillarsRef.ref} style={{ position: "relative", zIndex: 1, maxWidth: "1060px", margin: "0 auto", padding: "0 48px 80px" }}>
// //         <div style={{ textAlign: "center", marginBottom: "48px", opacity: pillarsRef.inView ? 1 : 0, animation: pillarsRef.inView ? "fadeUp 0.7s ease both" : "none" }}>
// //           <div style={{ fontFamily: sysFont, fontSize: "10px", color: "#38bdf8", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "12px", fontWeight: 600 }}>Foundation of Compliance</div>
// //           <h2 style={{ fontFamily: sysFont, fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 800, color: "#e8f4ff", letterSpacing: "-1px" }}>
// //             GMP <span style={{ color: "#38bdf8" }}>Principles</span>
// //           </h2>
// //         </div>

// //         <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
// //           {pillars.map((p, i) => (
// //             <div key={i} className="pillar-card" style={{ background: "rgba(255,255,255,0.025)", border: "0.5px solid rgba(56,189,248,0.12)", borderRadius: "16px", padding: "28px", opacity: pillarsRef.inView ? 1 : 0, animation: pillarsRef.inView ? `fadeUp 0.7s ${0.1 + i * 0.08}s ease both` : "none" }}>
// //               <div style={{ fontFamily: sysFont, fontSize: "24px", color: "#38bdf8", marginBottom: "14px", lineHeight: 1 }}>{p.icon}</div>
// //               <h3 style={{ fontFamily: sysFont, fontSize: "15px", fontWeight: 700, color: "#e8f4ff", marginBottom: "10px" }}>{p.title}</h3>
// //               <p style={{ fontFamily: sysFont, fontSize: "13px", color: "rgba(218,238,255,0.45)", lineHeight: 1.7 }}>{p.desc}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* ── SCOPE ── */}
// //       <section ref={scopeRef.ref} style={{ position: "relative", zIndex: 1, maxWidth: "1060px", margin: "0 auto", padding: "0 48px 120px" }}>
// //         <div style={{ border: "0.5px solid rgba(56,189,248,0.15)", borderRadius: "20px", overflow: "hidden", opacity: scopeRef.inView ? 1 : 0, animation: scopeRef.inView ? "fadeUp 0.8s ease both" : "none" }}>
// //           <div style={{ height: "1px", background: "linear-gradient(90deg, transparent 0%, #38bdf8 40%, #7dd3fc 60%, transparent 100%)" }} />
// //           <div style={{ padding: "40px 48px" }}>
// //             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
// //               <div>
// //                 <div style={{ fontFamily: sysFont, fontSize: "10px", color: "#38bdf8", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>Scope of Certification</div>
// //                 <h3 style={{ fontFamily: sysFont, fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 800, color: "#e8f4ff", letterSpacing: "-0.5px" }}>
// //                   Certified Activities &<br /><span style={{ color: "#38bdf8" }}>Operations</span>
// //                 </h3>
// //               </div>
// //               <div style={{ background: "rgba(56,189,248,0.08)", border: "0.5px solid rgba(56,189,248,0.25)", borderRadius: "12px", padding: "16px 24px", textAlign: "center" }}>
// //                 <div style={{ fontFamily: sysFont, fontSize: "32px", fontWeight: 800, color: "#38bdf8", lineHeight: 1 }}>8</div>
// //                 <div style={{ fontFamily: sysFont, fontSize: "10px", color: "rgba(218,238,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "4px" }}>Certified Areas</div>
// //               </div>
// //             </div>

// //             {/* Full scope text */}
// //             <div style={{ background: "rgba(56,189,248,0.04)", border: "0.5px solid rgba(56,189,248,0.1)", borderRadius: "12px", padding: "16px 20px", marginBottom: "20px" }}>
// //               <p style={{ fontFamily: sysFont, fontSize: "13px", color: "rgba(218,238,255,0.55)", lineHeight: 1.7, fontStyle: "italic" }}>
// //                 "Research & Development, Manufacture & Marketing of Aqua Culture Feed Supplements & Aqua Health Care Products, Probiotics & Minerals for Animal/Fish & Shrimp, Raw Materials & Chemicals for Industrial and Environmental Use"
// //               </p>
// //             </div>

// //             <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
// //               {scopeTags.map((tag, i) => (
// //                 <span key={i} className="scope-tag" style={{ background: "rgba(56,189,248,0.07)", border: "0.5px solid rgba(56,189,248,0.2)", color: "rgba(218,238,255,0.7)", fontSize: "13px", padding: "8px 18px", borderRadius: "24px", fontFamily: sysFont, fontWeight: 500 }}>{tag}</span>
// //               ))}
// //             </div>
// //           </div>
// //           <div style={{ height: "0.5px", background: "rgba(56,189,248,0.08)" }} />
// //           <div style={{ padding: "20px 48px", background: "rgba(56,189,248,0.03)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
// //             <span style={{ fontFamily: sysFont, fontSize: "11px", color: "rgba(218,238,255,0.3)" }}>Verified by Optimum Certifications Inc. · Cert No. GMP/25819</span>
// //             <span style={{ fontFamily: sysFont, fontSize: "11px", color: "#38bdf8", opacity: 0.6 }}>Valid through 31 July 2028</span>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <div style={{ position: "relative", zIndex: 1, borderTop: "0.5px solid rgba(56,189,248,0.08)", padding: "32px 48px", textAlign: "center" }}>
// //         <div style={{ fontFamily: sysFont, fontSize: "12px", color: "rgba(218,238,255,0.2)", letterSpacing: "0.06em" }}>
// //           © 2025 Innovare Biopharma LLP · GMP Certified · ISO 9001:2015 Certified
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// "use client";

// import Footer from "@/components/Footer";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { X, ExternalLink, Download, ShieldCheck, Award, FileText } from "lucide-react";

// const gmpCertificate = {
//   image: "/certificate-images/gmp.jpg",
//   title: "GMP Certificate",
//   category: "Good Manufacturing Practice",
//   tag: "GMP",
//   issuedBy: "Certified Authority",
//   validUntil: "2026",
// };

// const isPdf = (src: string) => src.toLowerCase().endsWith(".pdf");

// const C = {
//   bg:        "#EFF6FF",
//   bgCard:    "#FFFFFF",
//   blue:      "#2A5DA8",
//   blueMid:   "#3B7DD8",
//   blueLight: "#DBEAFE",
//   bluePale:  "#EFF6FF",
//   border:    "#BFDBFE",
//   text:      "#0F1F3D",
//   muted:     "#64748B",
//   accent:    "#0EA5E9",
//   gold:      "#D97706",
//   goldLight: "#FEF3C7",
// };

// export default function GmpCertificatePage() {
//   const [lightbox, setLightbox] = useState(false);

//   return (
//     <>
//       <div
//         style={{
//           minHeight: "100vh",
//           background: C.bg,
//           fontFamily: "'Trebuchet MS', sans-serif",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         {/* watermark */}
//         <div
//           style={{
//             position: "fixed",
//             top: "30%",
//             left: "50%",
//             transform: "translate(-50%,-50%) rotate(-18deg)",
//             fontSize: "clamp(80px,14vw,180px)",
//             fontWeight: 900,
//             letterSpacing: "-4px",
//             color: "rgba(42,93,168,0.04)",
//             pointerEvents: "none",
//             userSelect: "none",
//             whiteSpace: "nowrap",
//             zIndex: 0,
//           }}
//         >
//           CERTIFIED
//         </div>

//         {/* top wave */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             height: 520,
//             background:
//               "linear-gradient(160deg, #2A5DA8 0%, #1e4a9a 45%, #2563b8 70%, #EFF6FF 100%)",
//             clipPath: "polygon(0 0, 100% 0, 100% 78%, 55% 96%, 0 78%)",
//             zIndex: 0,
//           }}
//         />

//         {/* dot grid */}
//         <div
//           style={{
//             position: "fixed",
//             inset: 0,
//             backgroundImage: "radial-gradient(#BFDBFE 1px, transparent 1px)",
//             backgroundSize: "28px 28px",
//             opacity: 0.45,
//             pointerEvents: "none",
//             zIndex: 0,
//           }}
//         />

//         {/* HERO */}
//         <section
//           style={{
//             position: "relative",
//             zIndex: 1,
//             paddingTop: 120,
//             paddingBottom: 70,
//             textAlign: "center",
//           }}
//         >
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 8,
//               background: "rgba(255,255,255,0.18)",
//               backdropFilter: "blur(8px)",
//               border: "1px solid rgba(255,255,255,0.35)",
//               borderRadius: 99,
//               padding: "6px 18px",
//               marginBottom: 22,
//             }}
//           >
//             <Award size={14} color="#fff" />
//             <span
//               style={{
//                 fontSize: 11,
//                 fontWeight: 700,
//                 color: "#fff",
//                 letterSpacing: "2px",
//                 textTransform: "uppercase",
//               }}
//             >
//               Good Manufacturing Practice
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             style={{
//               fontSize: "clamp(34px,5vw,58px)",
//               fontWeight: 800,
//               color: "#fff",
//               lineHeight: 1.1,
//               letterSpacing: "-1px",
//               margin: "0 auto 16px",
//             }}
//           >
//             GMP Certificate
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.25 }}
//             style={{
//               fontSize: 15,
//               color: "rgba(255,255,255,0.75)",
//               maxWidth: 480,
//               margin: "0 auto 52px",
//               lineHeight: 1.7,
//             }}
//           >
//             Independently certified for Good Manufacturing Practice — ensuring
//             the highest standards in production, quality control, and safety.
//           </motion.p>

//           {/* stat chips */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.35 }}
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               gap: 14,
//               flexWrap: "wrap",
//               paddingBottom: 10,
//             }}
//           >
//             {[
//               { val: "GMP",  sub: "Accredited"      },
//               { val: "100%", sub: "Compliance Rate"  },
//               { val: "SOP",  sub: "Standard Operating Procedure"    },
//             ].map((s) => (
//               <div
//                 key={s.val}
//                 style={{
//                   background: "#fff",
//                   borderRadius: 16,
//                   padding: "16px 28px",
//                   boxShadow: "0 8px 32px rgba(42,93,168,0.18)",
//                   minWidth: 120,
//                   textAlign: "center",
//                 }}
//               >
//                 <p
//                   style={{
//                     fontSize: 26,
//                     fontWeight: 800,
//                     color: C.blue,
//                     lineHeight: 1,
//                     margin: 0,
//                   }}
//                 >
//                   {s.val}
//                 </p>
//                 <p
//                   style={{
//                     fontSize: 11,
//                     color: C.muted,
//                     marginTop: 4,
//                     marginBottom: 0,
//                     fontWeight: 600,
//                     letterSpacing: "0.3px",
//                   }}
//                 >
//                   {s.sub}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </section>

//         {/* SECTION LABEL */}
//         <div
//           style={{
//             maxWidth: 900,
//             margin: "0 auto",
//             padding: "40px 32px 28px",
//             position: "relative",
//             zIndex: 1,
//             display: "flex",
//             alignItems: "center",
//             gap: 16,
//           }}
//         >
//           <div style={{ flex: 1, height: 1, background: C.border }} />
//           <span
//             style={{
//               fontSize: 11,
//               fontWeight: 700,
//               color: C.blue,
//               letterSpacing: "2px",
//               textTransform: "uppercase",
//               whiteSpace: "nowrap",
//             }}
//           >
//             GMP Certificate
//           </span>
//           <div style={{ flex: 1, height: 1, background: C.border }} />
//         </div>

//         {/* SINGLE CERTIFICATE CARD */}
//         <section
//           style={{
//             maxWidth: 900,
//             margin: "0 auto",
//             padding: "0 32px 100px",
//             position: "relative",
//             zIndex: 1,
//           }}
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.55 }}
//             viewport={{ once: true }}
//             style={{
//               background: "#fff",
//               borderRadius: 24,
//               border: "1.5px solid " + C.border,
//               overflow: "hidden",
//               boxShadow: "0 8px 48px rgba(42,93,168,0.12)",
//             }}
//           >
//             {/* top gradient bar */}
//             <div
//               style={{
//                 height: 5,
//                 background:
//                   "linear-gradient(90deg, #2A5DA8, #0EA5E9, #D97706)",
//               }}
//             />

//             {/* card header */}
//             <div
//               style={{
//                 padding: "28px 36px 24px",
//                 borderBottom: "1px solid " + C.blueLight,
//                 background: C.bluePale,
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 flexWrap: "wrap",
//                 gap: 16,
//               }}
//             >
//               <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//                 {/* shield icon */}
//                 <div
//                   style={{
//                     width: 56,
//                     height: 56,
//                     borderRadius: 16,
//                     background: C.blue,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     boxShadow: "0 6px 20px rgba(42,93,168,0.35)",
//                     flexShrink: 0,
//                   }}
//                 >
//                   <ShieldCheck size={26} color="#fff" />
//                 </div>

//                 <div>
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 8,
//                       marginBottom: 4,
//                     }}
//                   >
//                     <span
//                       style={{
//                         display: "inline-block",
//                         background: C.gold,
//                         color: "#fff",
//                         fontSize: 10,
//                         fontWeight: 800,
//                         letterSpacing: "1.5px",
//                         padding: "3px 10px",
//                         borderRadius: 99,
//                       }}
//                     >
//                       GMP
//                     </span>
//                     <span
//                       style={{
//                         display: "inline-block",
//                         background: C.blueLight,
//                         color: C.blue,
//                         fontSize: 10,
//                         fontWeight: 700,
//                         letterSpacing: "1px",
//                         padding: "3px 10px",
//                         borderRadius: 99,
//                       }}
//                     >
//                       VERIFIED
//                     </span>
//                   </div>
//                   <p
//                     style={{
//                       fontSize: 22,
//                       fontWeight: 800,
//                       color: C.text,
//                       margin: 0,
//                       lineHeight: 1.2,
//                     }}
//                   >
//                     {gmpCertificate.title}
//                   </p>
//                   <p
//                     style={{
//                       fontSize: 13,
//                       color: C.muted,
//                       margin: "4px 0 0",
//                       fontWeight: 600,
//                     }}
//                   >
//                     {gmpCertificate.category}
//                   </p>
//                 </div>
//               </div>

//               {/* action buttons */}
//               <div style={{ display: "flex", gap: 10 }}>
//                 <button
//                   onClick={() => setLightbox(true)}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 8,
//                     padding: "10px 20px",
//                     borderRadius: 10,
//                     background: C.blue,
//                     color: "#fff",
//                     fontSize: 13,
//                     fontWeight: 700,
//                     border: "none",
//                     cursor: "pointer",
//                     boxShadow: "0 4px 16px rgba(42,93,168,0.35)",
//                     fontFamily: "'Trebuchet MS', sans-serif",
//                   }}
//                 >
//                   <ExternalLink size={14} /> View Full
//                 </button>
//                 <a
//                   href={gmpCertificate.image}
//                   download
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 8,
//                     padding: "10px 20px",
//                     borderRadius: 10,
//                     background: C.blueLight,
//                     color: C.blue,
//                     border: "1.5px solid " + C.border,
//                     fontSize: 13,
//                     fontWeight: 700,
//                     textDecoration: "none",
//                     fontFamily: "'Trebuchet MS', sans-serif",
//                   }}
//                 >
//                   <Download size={14} /> Download
//                 </a>
//               </div>
//             </div>

//             {/* LARGE CERTIFICATE PREVIEW */}
//             <div
//               onClick={() => setLightbox(true)}
//               style={{
//                 padding: "40px 48px",
//                 background: "#F8FBFF",
//                 minHeight: 520,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 cursor: "pointer",
//                 position: "relative",
//               }}
//             >
//               {/* click hint */}
//               <div
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   background: "transparent",
//                   zIndex: 2,
//                   display: "flex",
//                   alignItems: "flex-end",
//                   justifyContent: "flex-end",
//                   padding: 20,
//                   pointerEvents: "none",
//                 }}
//               >
//                 <div
//                   style={{
//                     background: "rgba(42,93,168,0.85)",
//                     color: "#fff",
//                     fontSize: 11,
//                     fontWeight: 700,
//                     letterSpacing: "1.5px",
//                     padding: "6px 14px",
//                     borderRadius: 99,
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 6,
//                     backdropFilter: "blur(4px)",
//                   }}
//                 >
//                   <ExternalLink size={11} color="#fff" /> CLICK TO ENLARGE
//                 </div>
//               </div>

//               {isPdf(gmpCertificate.image) ? (
//                 <>
//                   <iframe
//                     src={gmpCertificate.image + "#toolbar=0&navpanes=0&scrollbar=0&view=FitH"}
//                     style={{
//                       width: "100%",
//                       height: 500,
//                       border: "none",
//                       borderRadius: 12,
//                       pointerEvents: "none",
//                       boxShadow: "0 8px 40px rgba(42,93,168,0.12)",
//                     }}
//                     title={gmpCertificate.title}
//                   />
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: 20,
//                       left: 20,
//                       background: C.blue,
//                       color: "#fff",
//                       fontSize: 10,
//                       fontWeight: 800,
//                       letterSpacing: "1px",
//                       padding: "4px 10px",
//                       borderRadius: 6,
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 5,
//                     }}
//                   >
//                     <FileText size={11} color="#fff" /> PDF
//                   </div>
//                 </>
//               ) : (
//                 <img
//                   src={gmpCertificate.image}
//                   alt={gmpCertificate.title}
//                   style={{
//                     maxWidth: "100%",
//                     maxHeight: 520,
//                     objectFit: "contain",
//                     borderRadius: 12,
//                     boxShadow: "0 8px 40px rgba(42,93,168,0.12)",
//                   }}
//                   onError={(e) => {
//                     const target = e.currentTarget;
//                     target.style.display = "none";
//                     const parent = target.parentElement;
//                     if (parent && !parent.querySelector(".img-fallback")) {
//                       const fb = document.createElement("div");
//                       fb.className = "img-fallback";
//                       fb.style.cssText =
//                         "display:flex;flex-direction:column;align-items:center;gap:12px;color:#64748B;font-size:14px;font-weight:600;font-family:'Trebuchet MS',sans-serif";
//                       fb.innerHTML =
//                         '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2A5DA8" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>Certificate image not found';
//                       parent.appendChild(fb);
//                     }
//                   }}
//                 />
//               )}
//             </div>

//             {/* footer info strip */}
//             <div
//               style={{
//                 padding: "20px 36px",
//                 borderTop: "1px solid " + C.blueLight,
//                 background: "#fff",
//                 display: "flex",
//                 gap: 32,
//                 flexWrap: "wrap",
//               }}
//             >
//               {[
//                 { label: "Certificate Type", value: "GMP — Good Manufacturing Practice" },
//                 // { label: "Standard",          value: "ISO / WHO GMP Compliant"          },
//                 { label: "Scope",             value: "Aquaculture, Poultry & Livestock"  },
//               ].map((item) => (
//                 <div key={item.label}>
//                   <p
//                     style={{
//                       fontSize: 10,
//                       fontWeight: 700,
//                       color: C.blue,
//                       letterSpacing: "1.5px",
//                       textTransform: "uppercase",
//                       margin: "0 0 4px",
//                     }}
//                   >
//                     {item.label}
//                   </p>
//                   <p
//                     style={{
//                       fontSize: 13,
//                       fontWeight: 600,
//                       color: C.text,
//                       margin: 0,
//                     }}
//                   >
//                     {item.value}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </section>

//         {/* LIGHTBOX */}
//         <AnimatePresence>
//           {lightbox && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setLightbox(false)}
//               style={{
//                 position: "fixed",
//                 inset: 0,
//                 zIndex: 100,
//                 background: "rgba(10,25,70,0.55)",
//                 backdropFilter: "blur(18px)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 padding: 24,
//               }}
//             >
//               <motion.div
//                 initial={{ scale: 0.94, y: 16 }}
//                 animate={{ scale: 1, y: 0 }}
//                 exit={{ scale: 0.94, y: 16 }}
//                 onClick={(e) => e.stopPropagation()}
//                 style={{
//                   background: "#fff",
//                   borderRadius: 22,
//                   overflow: "hidden",
//                   maxWidth: 720,
//                   width: "100%",
//                   boxShadow:
//                     "0 32px 80px rgba(42,93,168,0.25), 0 0 0 1px rgba(42,93,168,0.1)",
//                   fontFamily: "'Trebuchet MS', sans-serif",
//                 }}
//               >
//                 {/* top bar */}
//                 <div
//                   style={{
//                     height: 5,
//                     background:
//                       "linear-gradient(90deg, #2A5DA8, #0EA5E9, #D97706)",
//                   }}
//                 />

//                 {/* lightbox header */}
//                 <div
//                   style={{
//                     padding: "18px 24px",
//                     borderBottom: "1px solid " + C.blueLight,
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     background: C.bluePale,
//                   }}
//                 >
//                   <div>
//                     <p
//                       style={{
//                         fontSize: 10,
//                         fontWeight: 700,
//                         color: C.blue,
//                         letterSpacing: "2px",
//                         textTransform: "uppercase",
//                         margin: 0,
//                       }}
//                     >
//                       {gmpCertificate.category}
//                     </p>
//                     <p
//                       style={{
//                         fontSize: 17,
//                         fontWeight: 700,
//                         color: C.text,
//                         marginTop: 2,
//                         marginBottom: 0,
//                       }}
//                     >
//                       {gmpCertificate.title}
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => setLightbox(false)}
//                     style={{
//                       width: 36,
//                       height: 36,
//                       borderRadius: "50%",
//                       background: C.blueLight,
//                       border: "1px solid " + C.border,
//                       cursor: "pointer",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <X size={15} color={C.blue} />
//                   </button>
//                 </div>

//                 {/* lightbox preview */}
//                 <div
//                   style={{
//                     padding: 32,
//                     background: "#F8FBFF",
//                     minHeight: 440,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {isPdf(gmpCertificate.image) ? (
//                     <iframe
//                       src={gmpCertificate.image + "#toolbar=0&navpanes=0&scrollbar=0&view=FitH"}
//                       style={{
//                         width: "100%",
//                         height: 440,
//                         border: "none",
//                         borderRadius: 10,
//                       }}
//                       title={gmpCertificate.title}
//                     />
//                   ) : (
//                     <img
//                       src={gmpCertificate.image}
//                       alt={gmpCertificate.title}
//                       style={{
//                         maxWidth: "100%",
//                         maxHeight: 440,
//                         objectFit: "contain",
//                         borderRadius: 10,
//                       }}
//                     />
//                   )}
//                 </div>

//                 {/* lightbox actions */}
//                 <div
//                   style={{
//                     padding: "16px 24px",
//                     borderTop: "1px solid " + C.blueLight,
//                     display: "flex",
//                     gap: 12,
//                     background: "#fff",
//                   }}
//                 >
//                   <a
//                     href={gmpCertificate.image}
//                     target="_blank"
//                     rel="noreferrer"
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 8,
//                       padding: "10px 22px",
//                       borderRadius: 10,
//                       background: C.blue,
//                       color: "#fff",
//                       fontSize: 13,
//                       fontWeight: 700,
//                       textDecoration: "none",
//                       boxShadow: "0 4px 16px rgba(42,93,168,0.35)",
//                       fontFamily: "'Trebuchet MS', sans-serif",
//                     }}
//                   >
//                     <ExternalLink size={14} /> Open Full View
//                   </a>
//                   <a
//                     href={gmpCertificate.image}
//                     download
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 8,
//                       padding: "10px 22px",
//                       borderRadius: 10,
//                       background: C.blueLight,
//                       color: C.blue,
//                       border: "1.5px solid " + C.border,
//                       fontSize: 13,
//                       fontWeight: 700,
//                       textDecoration: "none",
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
"use client";

import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink, Download, ShieldCheck, Award, FileText } from "lucide-react";

const gmpCertificate = {
  image: "/certificate-images/gmp.jpg",
  title: "GMP Certificate",
  category: "Good Manufacturing Practice",
  tag: "GMP",
  issuedBy: "Certified Authority",
  validUntil: "2026",
};

const isPdf = (src: string) => src.toLowerCase().endsWith(".pdf");

const C = {
  bg:        "#EFF6FF",
  bgCard:    "#FFFFFF",
  blue:      "#2A5DA8",
  blueMid:   "#3B7DD8",
  blueLight: "#DBEAFE",
  bluePale:  "#EFF6FF",
  border:    "#BFDBFE",
  text:      "#0F1F3D",
  muted:     "#64748B",
  accent:    "#0EA5E9",
  gold:      "#D97706",
  goldLight: "#FEF3C7",
};

export default function GmpCertificatePage() {
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: C.bg,
          fontFamily: "'Trebuchet MS', sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <style>{`
          /* ═══════ RESPONSIVE BREAKPOINT LADDER ═══════
             Mobile:  <= 480px
             Phablet: 481–640px
             Tablet:  641–1024px
             Desktop: >= 1025px
          */

          .gmp-wave        { height: 520px; }
          .gmp-hero        { padding: 120px 24px 70px; }
          .gmp-hero-stats  { gap: 14px; }
          .gmp-stat-chip   { padding: 16px 28px; min-width: 120px; }

          .gmp-section-label { padding: 40px 24px 28px; }
          .gmp-card-section  { padding: 0 24px 100px; }

          .gmp-card-header    { padding: 28px 36px 24px; gap: 16px; }
          .gmp-card-header-left { gap: 16px; }
          .gmp-shield-icon    { width: 56px; height: 56px; border-radius: 16px; }
          .gmp-action-buttons { display: flex; gap: 10px; }
          .gmp-action-btn     { padding: 10px 20px; font-size: 13px; }

          .gmp-preview        { padding: 40px 48px; }
          .gmp-media-box      { width: 100%; height: 500px; }
          .gmp-click-hint     { padding: 20px; }
          .gmp-click-hint-badge { font-size: 11px; padding: 6px 14px; }

          .gmp-footer-strip   { padding: 20px 36px; gap: 32px; }

          .gmp-lightbox-overlay  { padding: 24px; }
          .gmp-lightbox-header   { padding: 18px 24px; }
          .gmp-lightbox-title    { font-size: 17px; }
          .gmp-lightbox-preview  { padding: 32px; }
          .gmp-lightbox-media    { height: 440px; }
          .gmp-lightbox-actions  { padding: 16px 24px; gap: 12px; }
          .gmp-lightbox-action-btn { padding: 10px 22px; font-size: 13px; }

          /* ── Tablet (≤1024px) ── */
          @media (max-width: 1024px) {
            .gmp-wave { height: 440px; }
            .gmp-hero { padding: 100px 24px 60px; }
            .gmp-preview { padding: 32px 28px; }
            .gmp-media-box { height: 420px; }
          }

          /* ── Small tablet / phablet (≤768px) ── */
          @media (max-width: 768px) {
            .gmp-wave { height: 380px; }
            .gmp-hero { padding: 90px 20px 52px; }
            .gmp-section-label { padding: 32px 20px 24px; }
            .gmp-card-section { padding: 0 20px 80px; }

            .gmp-card-header { padding: 22px 24px 20px; flex-direction: column; align-items: flex-start; }
            .gmp-action-buttons { width: 100%; }
            .gmp-action-btn { flex: 1; justify-content: center; }

            .gmp-preview { padding: 24px 20px; }
            .gmp-media-box { height: 340px; }
            .gmp-click-hint-badge { font-size: 10px; padding: 5px 12px; }

            .gmp-footer-strip { padding: 18px 24px; gap: 20px; }

            .gmp-lightbox-overlay { padding: 14px; }
            .gmp-lightbox-header { padding: 16px 18px; }
            .gmp-lightbox-preview { padding: 20px; }
            .gmp-lightbox-media { height: 340px; }
            .gmp-lightbox-actions { padding: 14px 18px; flex-direction: column; }
            .gmp-lightbox-action-btn { justify-content: center; }
          }

          /* ── Mobile (≤640px) ── */
          @media (max-width: 640px) {
            .gmp-wave { height: 320px; }
            .gmp-hero { padding: 76px 16px 44px; }
            .gmp-hero-stats { gap: 10px; }
            .gmp-stat-chip { padding: 12px 18px; min-width: 96px; border-radius: 14px; }

            .gmp-section-label { padding: 26px 16px 20px; }
            .gmp-card-section { padding: 0 16px 60px; }

            .gmp-card-header { padding: 18px 18px 16px; }
            .gmp-card-header-left { gap: 12px; }
            .gmp-shield-icon { width: 46px; height: 46px; border-radius: 13px; }
            .gmp-action-btn { padding: 9px 14px; font-size: 12px; }

            .gmp-preview { padding: 18px 14px; }
            .gmp-media-box { height: 260px; }
            .gmp-click-hint { padding: 12px; }

            .gmp-footer-strip { padding: 16px 18px; gap: 16px; flex-direction: column; }

            .gmp-lightbox-preview { padding: 14px; }
            .gmp-lightbox-media { height: 260px; }
            .gmp-lightbox-title { font-size: 15px; }
          }

          /* ── Small phones (≤400px) ── */
          @media (max-width: 400px) {
            .gmp-hero { padding: 64px 12px 36px; }
            .gmp-wave { height: 280px; }
            .gmp-media-box { height: 220px; }
            .gmp-lightbox-media { height: 220px; }
          }
        `}</style>

        {/* watermark */}
        <div
          style={{
            position: "fixed",
            top: "30%",
            left: "50%",
            transform: "translate(-50%,-50%) rotate(-18deg)",
            fontSize: "clamp(80px,14vw,180px)",
            fontWeight: 900,
            letterSpacing: "-4px",
            color: "rgba(42,93,168,0.04)",
            pointerEvents: "none",
            userSelect: "none",
            whiteSpace: "nowrap",
            zIndex: 0,
          }}
        >
          CERTIFIED
        </div>

        {/* top wave */}
        <div
          className="gmp-wave"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            background:
              "linear-gradient(160deg, #2A5DA8 0%, #1e4a9a 45%, #2563b8 70%, #EFF6FF 100%)",
            clipPath: "polygon(0 0, 100% 0, 100% 78%, 55% 96%, 0 78%)",
            zIndex: 0,
          }}
        />

        {/* dot grid */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundImage: "radial-gradient(#BFDBFE 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.45,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* HERO */}
        <section
          className="gmp-hero"
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.35)",
              borderRadius: 99,
              padding: "6px 18px",
              marginBottom: 22,
            }}
          >
            <Award size={14} color="#fff" />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Good Manufacturing Practice
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: "clamp(30px,7vw,58px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: "-1px",
              margin: "0 auto 16px",
            }}
          >
            GMP Certificate
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              fontSize: "clamp(13px,3vw,15px)",
              color: "rgba(255,255,255,0.75)",
              maxWidth: 480,
              margin: "0 auto 52px",
              lineHeight: 1.7,
            }}
          >
            Independently certified for Good Manufacturing Practice — ensuring
            the highest standards in production, quality control, and safety.
          </motion.p>

          {/* stat chips */}
          <motion.div
            className="gmp-hero-stats"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              paddingBottom: 10,
            }}
          >
            {[
              { val: "GMP",  sub: "Accredited"      },
              { val: "100%", sub: "Compliance Rate"  },
              { val: "SOP",  sub: "Standard Operating Procedure"    },
            ].map((s) => (
              <div
                key={s.val}
                className="gmp-stat-chip"
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  boxShadow: "0 8px 32px rgba(42,93,168,0.18)",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(20px,4.5vw,26px)",
                    fontWeight: 800,
                    color: C.blue,
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  {s.val}
                </p>
                <p
                  style={{
                    fontSize: 11,
                    color: C.muted,
                    marginTop: 4,
                    marginBottom: 0,
                    fontWeight: 600,
                    letterSpacing: "0.3px",
                  }}
                >
                  {s.sub}
                </p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* SECTION LABEL */}
        <div
          className="gmp-section-label"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div style={{ flex: 1, height: 1, background: C.border }} />
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: C.blue,
              letterSpacing: "2px",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            GMP Certificate
          </span>
          <div style={{ flex: 1, height: 1, background: C.border }} />
        </div>

        {/* SINGLE CERTIFICATE CARD */}
        <section
          className="gmp-card-section"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            style={{
              background: "#fff",
              borderRadius: 24,
              border: "1.5px solid " + C.border,
              overflow: "hidden",
              boxShadow: "0 8px 48px rgba(42,93,168,0.12)",
            }}
          >
            {/* top gradient bar */}
            <div
              style={{
                height: 5,
                background:
                  "linear-gradient(90deg, #2A5DA8, #0EA5E9, #D97706)",
              }}
            />

            {/* card header */}
            <div
              className="gmp-card-header"
              style={{
                borderBottom: "1px solid " + C.blueLight,
                background: C.bluePale,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div className="gmp-card-header-left" style={{ display: "flex", alignItems: "center" }}>
                {/* shield icon */}
                <div
                  className="gmp-shield-icon"
                  style={{
                    background: C.blue,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 20px rgba(42,93,168,0.35)",
                    flexShrink: 0,
                  }}
                >
                  <ShieldCheck size={26} color="#fff" />
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 4,
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        background: C.gold,
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: "1.5px",
                        padding: "3px 10px",
                        borderRadius: 99,
                      }}
                    >
                      GMP
                    </span>
                    <span
                      style={{
                        display: "inline-block",
                        background: C.blueLight,
                        color: C.blue,
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "1px",
                        padding: "3px 10px",
                        borderRadius: 99,
                      }}
                    >
                      VERIFIED
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "clamp(18px,4vw,22px)",
                      fontWeight: 800,
                      color: C.text,
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {gmpCertificate.title}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: C.muted,
                      margin: "4px 0 0",
                      fontWeight: 600,
                    }}
                  >
                    {gmpCertificate.category}
                  </p>
                </div>
              </div>

              {/* action buttons */}
              <div className="gmp-action-buttons">
                <button
                  onClick={() => setLightbox(true)}
                  className="gmp-action-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    borderRadius: 10,
                    background: C.blue,
                    color: "#fff",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(42,93,168,0.35)",
                    fontFamily: "'Trebuchet MS', sans-serif",
                  }}
                >
                  <ExternalLink size={14} /> View Full
                </button>
                <a
                  href={gmpCertificate.image}
                  download
                  className="gmp-action-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    borderRadius: 10,
                    background: C.blueLight,
                    color: C.blue,
                    border: "1.5px solid " + C.border,
                    fontWeight: 700,
                    textDecoration: "none",
                    fontFamily: "'Trebuchet MS', sans-serif",
                  }}
                >
                  <Download size={14} /> Download
                </a>
              </div>
            </div>

            {/* LARGE CERTIFICATE PREVIEW */}
            <div
              className="gmp-preview"
              onClick={() => setLightbox(true)}
              style={{
                background: "#F8FBFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                position: "relative",
              }}
            >
              {/* click hint */}
              <div
                className="gmp-click-hint"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "transparent",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  pointerEvents: "none",
                }}
              >
                <div
                  className="gmp-click-hint-badge"
                  style={{
                    background: "rgba(42,93,168,0.85)",
                    color: "#fff",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    borderRadius: 99,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <ExternalLink size={11} color="#fff" /> CLICK TO ENLARGE
                </div>
              </div>

              <div className="gmp-media-box" style={{ position: "relative" }}>
                {isPdf(gmpCertificate.image) ? (
                  <>
                    <iframe
                      src={gmpCertificate.image + "#toolbar=0&navpanes=0&scrollbar=0&view=FitH"}
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        borderRadius: 12,
                        pointerEvents: "none",
                        boxShadow: "0 8px 40px rgba(42,93,168,0.12)",
                      }}
                      title={gmpCertificate.title}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        background: C.blue,
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: "1px",
                        padding: "4px 10px",
                        borderRadius: 6,
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <FileText size={11} color="#fff" /> PDF
                    </div>
                  </>
                ) : (
                  <img
                    src={gmpCertificate.image}
                    alt={gmpCertificate.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: 12,
                      boxShadow: "0 8px 40px rgba(42,93,168,0.12)",
                    }}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector(".img-fallback")) {
                        const fb = document.createElement("div");
                        fb.className = "img-fallback";
                        fb.style.cssText =
                          "display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;color:#64748B;font-size:14px;font-weight:600;font-family:'Trebuchet MS',sans-serif;width:100%;height:100%";
                        fb.innerHTML =
                          '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2A5DA8" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>Certificate image not found';
                        parent.appendChild(fb);
                      }
                    }}
                  />
                )}
              </div>
            </div>

            {/* footer info strip */}
            <div
              className="gmp-footer-strip"
              style={{
                borderTop: "1px solid " + C.blueLight,
                background: "#fff",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "Certificate Type", value: "GMP — Good Manufacturing Practice" },
                // { label: "Standard",          value: "ISO / WHO GMP Compliant"          },
                { label: "Scope",             value: "Aquaculture, Poultry & Livestock"  },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: C.blue,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      margin: "0 0 4px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: C.text,
                      margin: 0,
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* LIGHTBOX */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              className="gmp-lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 100,
                background: "rgba(10,25,70,0.55)",
                backdropFilter: "blur(18px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <motion.div
                initial={{ scale: 0.94, y: 16 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.94, y: 16 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: "#fff",
                  borderRadius: 22,
                  overflow: "hidden",
                  maxWidth: 720,
                  width: "100%",
                  maxHeight: "94vh",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow:
                    "0 32px 80px rgba(42,93,168,0.25), 0 0 0 1px rgba(42,93,168,0.1)",
                  fontFamily: "'Trebuchet MS', sans-serif",
                }}
              >
                {/* top bar */}
                <div
                  style={{
                    height: 5,
                    background:
                      "linear-gradient(90deg, #2A5DA8, #0EA5E9, #D97706)",
                    flexShrink: 0,
                  }}
                />

                {/* lightbox header */}
                <div
                  className="gmp-lightbox-header"
                  style={{
                    borderBottom: "1px solid " + C.blueLight,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: C.bluePale,
                    flexShrink: 0,
                    gap: 12,
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: C.blue,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        margin: 0,
                      }}
                    >
                      {gmpCertificate.category}
                    </p>
                    <p
                      className="gmp-lightbox-title"
                      style={{
                        fontWeight: 700,
                        color: C.text,
                        marginTop: 2,
                        marginBottom: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {gmpCertificate.title}
                    </p>
                  </div>
                  <button
                    onClick={() => setLightbox(false)}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: C.blueLight,
                      border: "1px solid " + C.border,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <X size={15} color={C.blue} />
                  </button>
                </div>

                {/* lightbox preview */}
                <div
                  className="gmp-lightbox-preview"
                  style={{
                    background: "#F8FBFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "auto",
                  }}
                >
                  <div className="gmp-lightbox-media" style={{ width: "100%" }}>
                    {isPdf(gmpCertificate.image) ? (
                      <iframe
                        src={gmpCertificate.image + "#toolbar=0&navpanes=0&scrollbar=0&view=FitH"}
                        style={{
                          width: "100%",
                          height: "100%",
                          border: "none",
                          borderRadius: 10,
                        }}
                        title={gmpCertificate.title}
                      />
                    ) : (
                      <img
                        src={gmpCertificate.image}
                        alt={gmpCertificate.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          borderRadius: 10,
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* lightbox actions */}
                <div
                  className="gmp-lightbox-actions"
                  style={{
                    borderTop: "1px solid " + C.blueLight,
                    display: "flex",
                    background: "#fff",
                    flexShrink: 0,
                  }}
                >
                  <a
                    href={gmpCertificate.image}
                    target="_blank"
                    rel="noreferrer"
                    className="gmp-lightbox-action-btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      borderRadius: 10,
                      background: C.blue,
                      color: "#fff",
                      fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 4px 16px rgba(42,93,168,0.35)",
                      fontFamily: "'Trebuchet MS', sans-serif",
                    }}
                  >
                    <ExternalLink size={14} /> Open Full View
                  </a>
                  <a
                    href={gmpCertificate.image}
                    download
                    className="gmp-lightbox-action-btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      borderRadius: 10,
                      background: C.blueLight,
                      color: C.blue,
                      border: "1.5px solid " + C.border,
                      fontWeight: 700,
                      textDecoration: "none",
                      fontFamily: "'Trebuchet MS', sans-serif",
                    }}
                  >
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