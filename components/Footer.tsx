// // // // // // // // // // // // // // // "use client";
// // // // // // // // // // // // // // // import { Dna, Linkedin, Twitter, Youtube, Github } from "lucide-react";

// // // // // // // // // // // // // // // const footerLinks = {
// // // // // // // // // // // // // // //   "Solutions": ["Drug Discovery AI", "Genomic Medicine", "Clinical Trials", "Regulatory Intelligence", "Biomarker Analytics"],
// // // // // // // // // // // // // // //   "Company": ["About Us", "Leadership", "Careers", "News & Press", "Investor Relations"],
// // // // // // // // // // // // // // //   "Research": ["Publications", "Whitepapers", "Clinical Data", "Open Science", "Grants"],
// // // // // // // // // // // // // // //   "Support": ["Partner Portal", "Documentation", "Contact Us", "Privacy Policy", "Terms of Use"],
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default function Footer() {
// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <footer className="border-t border-green-500/10 pt-20 pb-10 relative">
// // // // // // // // // // // // // // //       <div className="max-w-7xl mx-auto px-6">
// // // // // // // // // // // // // // //         <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
// // // // // // // // // // // // // // //           {/* Brand */}
// // // // // // // // // // // // // // //           <div className="col-span-2">
// // // // // // // // // // // // // // //             <div className="flex items-center gap-2 mb-5">
// // // // // // // // // // // // // // //               <div className="w-9 h-9 rounded-lg bg-green-500 flex items-center justify-center">
// // // // // // // // // // // // // // //                 <Dna size={18} className="text-black" />
// // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // //               <span className="font-display font-bold text-xl">
// // // // // // // // // // // // // // //                 Bio<span className="text-green-500">Pharma</span>
// // // // // // // // // // // // // // //                 <span className="text-white/40 font-body text-sm ml-1 font-normal">LLP</span>
// // // // // // // // // // // // // // //               </span>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //             <p className="text-white/35 font-body text-sm leading-relaxed mb-6">
// // // // // // // // // // // // // // //               Pioneering the future of pharmaceutical innovation through AI-driven
// // // // // // // // // // // // // // //               research and precision medicine.
// // // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // // //             <div className="flex gap-3">
// // // // // // // // // // // // // // //               {[Linkedin, Twitter, Youtube, Github].map((Icon, i) => (
// // // // // // // // // // // // // // //                 <a
// // // // // // // // // // // // // // //                   key={i}
// // // // // // // // // // // // // // //                   href="#"
// // // // // // // // // // // // // // //                   className="w-8 h-8 rounded-lg bg-white/5 hover:bg-green-500/20 border border-white/10 hover:border-green-500/30 flex items-center justify-center transition-all duration-200"
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   <Icon size={14} className="text-white/40 hover:text-green-400" />
// // // // // // // // // // // // // // //                 </a>
// // // // // // // // // // // // // // //               ))}
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // // //           {/* Links */}
// // // // // // // // // // // // // // //           {Object.entries(footerLinks).map(([category, links]) => (
// // // // // // // // // // // // // // //             <div key={category}>
// // // // // // // // // // // // // // //               <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">
// // // // // // // // // // // // // // //                 {category}
// // // // // // // // // // // // // // //               </h4>
// // // // // // // // // // // // // // //               <ul className="space-y-2.5">
// // // // // // // // // // // // // // //                 {links.map((link) => (
// // // // // // // // // // // // // // //                   <li key={link}>
// // // // // // // // // // // // // // //                     <a
// // // // // // // // // // // // // // //                       href="#"
// // // // // // // // // // // // // // //                       className="text-white/40 hover:text-green-400 font-body text-sm transition-colors duration-200"
// // // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // // //                       {link}
// // // // // // // // // // // // // // //                     </a>
// // // // // // // // // // // // // // //                   </li>
// // // // // // // // // // // // // // //                 ))}
// // // // // // // // // // // // // // //               </ul>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // //         {/* Bottom bar */}
// // // // // // // // // // // // // // //         <div className="border-t border-green-500/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
// // // // // // // // // // // // // // //           <p className="text-white/25 text-xs font-mono">
// // // // // // // // // // // // // // //             © 2024 BioPharma LLP. All rights reserved. Registered in India.
// // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // //           <div className="flex items-center gap-2 text-xs font-mono text-white/25">
// // // // // // // // // // // // // // //             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
// // // // // // // // // // // // // // //             All systems operational
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     </footer>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // "use client";
// // // // // // // // // // // // // // import Image from "next/image";
// // // // // // // // // // // // // // import { Dna, Linkedin, Twitter, Youtube, Github } from "lucide-react";

// // // // // // // // // // // // // // const footerLinks = {
// // // // // // // // // // // // // //   Solutions: ["Nutritions", "Health", "Environment",],
// // // // // // // // // // // // // //   Company: ["About Us", "Leadership", "Careers", "News & Press", "Investor Relations"],
// // // // // // // // // // // // // //   Research: ["Publications", "Whitepapers", "Clinical Data", "Open Science", "Grants"],
// // // // // // // // // // // // // //   Support: ["Partner Portal", "Documentation", "Contact Us", "Privacy Policy", "Terms of Use"],
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default function Footer() {
// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <footer className="border-t border-blue-500/10 pt-16 pb-4 relative">
// // // // // // // // // // // // // //       <div className="max-w-7xl mx-auto px-6 pb-6">

// // // // // // // // // // // // // //         <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 mb-10">

// // // // // // // // // // // // // //           {/* 🔷 BRAND */}
// // // // // // // // // // // // // //           <div className="col-span-2">
// // // // // // // // // // // // // //             <div className="flex items-center gap-3 mb-5">

// // // // // // // // // // // // // //               {/* ✅ LOGO */}
// // // // // // // // // // // // // //               <Image
// // // // // // // // // // // // // //                 src="/images/logo.png"   // 👉 put your logo in /public/logo.png
// // // // // // // // // // // // // //                 alt="logo"
// // // // // // // // // // // // // //                 width={46}
// // // // // // // // // // // // // //                 height={46}
// // // // // // // // // // // // // //                 className="rounded-md"
// // // // // // // // // // // // // //               />

// // // // // // // // // // // // // //               {/* TEXT */}
// // // // // // // // // // // // // //               <span className="font-bold text-xl">
// // // // // // // // // // // // // //                  Innovare Biopharma <span className="text-blue-500"> </span>
// // // // // // // // // // // // // //                 <span className="text-white/40 text-sm ml-1 font-normal">LLP</span>
// // // // // // // // // // // // // //               </span>
// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //             <p className="text-white/35 text-sm leading-relaxed mb-6">
// // // // // // // // // // // // // //               Pioneering the future of pharmaceutical innovation through AI-driven
// // // // // // // // // // // // // //               research and precision medicine.
// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //             {/* SOCIAL */}
// // // // // // // // // // // // // //             <div className="flex gap-3">
// // // // // // // // // // // // // //               {[Linkedin, Twitter, Youtube, Github].map((Icon, i) => (
// // // // // // // // // // // // // //                 <a
// // // // // // // // // // // // // //                   key={i}
// // // // // // // // // // // // // //                   href="#"
// // // // // // // // // // // // // //                   className="w-8 h-8 rounded-lg bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/30 flex items-center justify-center transition-all duration-200"
// // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // //                   <Icon size={14} className="text-white/40 hover:text-blue-400" />
// // // // // // // // // // // // // //                 </a>
// // // // // // // // // // // // // //               ))}
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //           {/* 🔷 LINKS */}
// // // // // // // // // // // // // //           {Object.entries(footerLinks).map(([category, links]) => (
// // // // // // // // // // // // // //             <div key={category}>
// // // // // // // // // // // // // //               <h4 className="text-xs text-white/40 uppercase tracking-widest mb-4">
// // // // // // // // // // // // // //                 {category}
// // // // // // // // // // // // // //               </h4>
// // // // // // // // // // // // // //               <ul className="space-y-2.5">
// // // // // // // // // // // // // //                 {links.map((link) => (
// // // // // // // // // // // // // //                   <li key={link}>
// // // // // // // // // // // // // //                     <a
// // // // // // // // // // // // // //                       href="#"
// // // // // // // // // // // // // //                       className="text-white/40 hover:text-blue-400 text-sm transition-colors duration-200"
// // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // //                       {link}
// // // // // // // // // // // // // //                     </a>
// // // // // // // // // // // // // //                   </li>
// // // // // // // // // // // // // //                 ))}
// // // // // // // // // // // // // //               </ul>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* 🔷 BOTTOM */}
// // // // // // // // // // // // // //         <div className="border-t border-blue-500/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">

// // // // // // // // // // // // // //           <p className="text-white/25 text-xs">
// // // // // // // // // // // // // //             © 2026 Innovare BioPharma LLP. All rights reserved.
// // // // // // // // // // // // // //           </p>

// // // // // // // // // // // // // //           <div className="flex items-center gap-2 text-xs text-white/25">
// // // // // // // // // // // // // //             <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
// // // // // // // // // // // // // //             All systems operational
// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     </footer>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // "use client";
// // // // // // // // // // // // // import Image from "next/image";
// // // // // // // // // // // // // import { Linkedin, Twitter, Youtube, Github } from "lucide-react";

// // // // // // // // // // // // // const footerLinks = {
// // // // // // // // // // // // //   Solutions: ["Nutritions", "Health", "Environment"],
// // // // // // // // // // // // //   Company: ["About Us", "Leadership", "Careers", "News & Press", "Investor Relations"],
// // // // // // // // // // // // //   Research: ["Publications", "Whitepapers", "Clinical Data", "Open Science", "Grants"],
// // // // // // // // // // // // //   Support: ["Partner Portal", "Documentation", "Contact Us", "Privacy Policy", "Terms of Use"],
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default function Footer() {
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <footer className="relative border-t border-blue-500/10 pt-16 pb-6 overflow-hidden">

// // // // // // // // // // // // //       {/* 🌊 WAVE DIVIDER */}
// // // // // // // // // // // // //       <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
// // // // // // // // // // // // //         <svg
// // // // // // // // // // // // //           className="relative block w-[calc(100%+1.3px)] h-[60px]"
// // // // // // // // // // // // //           viewBox="0 0 1200 120"
// // // // // // // // // // // // //           preserveAspectRatio="none"
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <path
// // // // // // // // // // // // //             d="M0,0V46.29c47.79,22,103.59,29.05,158,17,70.36-15.52,136.33-47.93,206.8-56.23C438.64-2.23,512,20.58,583,34.3c59,11.31,117.2,11.62,176.2,0,31.93-6.35,62.8-17.54,94.5-26.9,58.6-17.16,119.7-20.67,178.3-9.56V0Z"
// // // // // // // // // // // // //             className="fill-[#081A2E]"
// // // // // // // // // // // // //           ></path>
// // // // // // // // // // // // //         </svg>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       <div className="max-w-7xl mx-auto px-6 pb-6 relative z-10">

// // // // // // // // // // // // //         <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 mb-10">

// // // // // // // // // // // // //           {/* 🔷 BRAND */}
// // // // // // // // // // // // //           <div className="col-span-2">
// // // // // // // // // // // // //             <div className="flex items-center gap-3 mb-5">

// // // // // // // // // // // // //               <Image
// // // // // // // // // // // // //                 src="/images/logo.png"
// // // // // // // // // // // // //                 alt="logo"
// // // // // // // // // // // // //                 width={46}
// // // // // // // // // // // // //                 height={46}
// // // // // // // // // // // // //                 className="rounded-md shadow-lg"
// // // // // // // // // // // // //               />

// // // // // // // // // // // // //               <span className="font-bold text-xl tracking-wide">
// // // // // // // // // // // // //                 Innovare <span className="text-blue-500">Biopharma</span>
// // // // // // // // // // // // //                 <span className="text-white/40 text-sm ml-1 font-normal">LLP</span>
// // // // // // // // // // // // //               </span>
// // // // // // // // // // // // //             </div>

// // // // // // // // // // // // //             <p className="text-white/40 text-sm leading-relaxed mb-6">
// // // // // // // // // // // // //               Pioneering the future of pharmaceutical innovation through AI-driven
// // // // // // // // // // // // //               research and precision medicine.
// // // // // // // // // // // // //             </p>

// // // // // // // // // // // // //             {/* SOCIAL */}
// // // // // // // // // // // // //             <div className="flex gap-3">
// // // // // // // // // // // // //               {[Linkedin, Twitter, Youtube, Github].map((Icon, i) => (
// // // // // // // // // // // // //                 <a
// // // // // // // // // // // // //                   key={i}
// // // // // // // // // // // // //                   href="#"
// // // // // // // // // // // // //                   className="group w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-500/40"
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   <Icon
// // // // // // // // // // // // //                     size={16}
// // // // // // // // // // // // //                     className="text-white/40 group-hover:text-blue-400 transition"
// // // // // // // // // // // // //                   />
// // // // // // // // // // // // //                 </a>
// // // // // // // // // // // // //               ))}
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //           {/* 🔷 LINKS */}
// // // // // // // // // // // // //           {Object.entries(footerLinks).map(([category, links]) => (
// // // // // // // // // // // // //             <div key={category}>
// // // // // // // // // // // // //               <h4 className="text-xs text-white/40 uppercase tracking-widest mb-4">
// // // // // // // // // // // // //                 {category}
// // // // // // // // // // // // //               </h4>
// // // // // // // // // // // // //               <ul className="space-y-2.5">
// // // // // // // // // // // // //                 {links.map((link) => (
// // // // // // // // // // // // //                   <li key={link}>
// // // // // // // // // // // // //                     <a
// // // // // // // // // // // // //                       href="#"
// // // // // // // // // // // // //                       className="relative text-white/40 text-sm transition duration-300 hover:text-blue-400 group"
// // // // // // // // // // // // //                     >
// // // // // // // // // // // // //                       {link}

// // // // // // // // // // // // //                       {/* ✨ UNDERLINE GLOW */}
// // // // // // // // // // // // //                       <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
// // // // // // // // // // // // //                     </a>
// // // // // // // // // // // // //                   </li>
// // // // // // // // // // // // //                 ))}
// // // // // // // // // // // // //               </ul>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           ))}
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* 🔷 BOTTOM */}
// // // // // // // // // // // // //         <div className="border-t border-blue-500/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">

// // // // // // // // // // // // //           <p className="text-white/25 text-xs">
// // // // // // // // // // // // //             © 2026 Innovare Biopharma LLP. All rights reserved.
// // // // // // // // // // // // //           </p>

// // // // // // // // // // // // //           <div className="flex items-center gap-2 text-xs text-white/25">
// // // // // // // // // // // // //             <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
// // // // // // // // // // // // //             All systems operational
// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </footer>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }
// // // // // // // // // // // // "use client";

// // // // // // // // // // // // import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

// // // // // // // // // // // // export default function Footer() {
// // // // // // // // // // // //   const navy  = "#07162a";
// // // // // // // // // // // //   const blue  = "#1565c0";
// // // // // // // // // // // //   const teal  = "#4db8cc";

// // // // // // // // // // // //   const cols = [
// // // // // // // // // // // //     { title: "Solutions", links: ["Feed Supplements", "Sanitizers", "Water Treatments", "Growth Promoters", "Vitamins & Minerals"] },
// // // // // // // // // // // //     { title: "Company", links: ["About Us", "Our Story", "Sustainability", "Careers", "News"] },
// // // // // // // // // // // //     { title: "Support", links: ["Technical Helpdesk", "Product Catalogue", "FAQs", "Contact Us", "Partner Portal"] },
// // // // // // // // // // // //   ];

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <footer style={{ background: navy, borderTop: "1px solid rgba(77,184,204,0.12)" }}>
      
// // // // // // // // // // // //       {/* TOP BAR */}
// // // // // // // // // // // //       <div style={{
// // // // // // // // // // // //         background: `linear-gradient(90deg,${blue}18,${teal}10,${blue}18)`,
// // // // // // // // // // // //         padding: "22px 60px",
// // // // // // // // // // // //         display: "flex",
// // // // // // // // // // // //         justifyContent: "space-between",
// // // // // // // // // // // //         flexWrap: "wrap",
// // // // // // // // // // // //         gap: 16
// // // // // // // // // // // //       }}>
// // // // // // // // // // // //         <div>
// // // // // // // // // // // //           <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>
// // // // // // // // // // // //             Subscribe to Innovare Updates
// // // // // // // // // // // //           </p>
// // // // // // // // // // // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
// // // // // // // // // // // //             Get the latest product innovations, aquaculture insights & expert tips.
// // // // // // // // // // // //           </p>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         <div style={{ display: "flex" }}>
// // // // // // // // // // // //           <input
// // // // // // // // // // // //             placeholder="your@email.com"
// // // // // // // // // // // //             style={{
// // // // // // // // // // // //               padding: "10px",
// // // // // // // // // // // //               border: "none",
// // // // // // // // // // // //               background: "rgba(255,255,255,0.05)",
// // // // // // // // // // // //               color: "#fff"
// // // // // // // // // // // //             }}
// // // // // // // // // // // //           />
// // // // // // // // // // // //           <button style={{
// // // // // // // // // // // //             background: blue,
// // // // // // // // // // // //             color: "#fff",
// // // // // // // // // // // //             border: "none",
// // // // // // // // // // // //             padding: "10px 20px"
// // // // // // // // // // // //           }}>
// // // // // // // // // // // //             Subscribe
// // // // // // // // // // // //           </button>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* MAIN */}
// // // // // // // // // // // //       <div style={{
// // // // // // // // // // // //         maxWidth: 1200,
// // // // // // // // // // // //         margin: "0 auto",
// // // // // // // // // // // //         padding: "50px 30px",
// // // // // // // // // // // //         display: "grid",
// // // // // // // // // // // //         gridTemplateColumns: "2fr 1fr 1fr 1fr",
// // // // // // // // // // // //         gap: 40
// // // // // // // // // // // //       }}>
        
// // // // // // // // // // // //         {/* BRAND */}
// // // // // // // // // // // //         <div>
// // // // // // // // // // // //           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// // // // // // // // // // // //             <img src="/images/logo.png" style={{ width: 50 }} />
// // // // // // // // // // // //             <div>
// // // // // // // // // // // //               <p style={{ color: "#fff", fontWeight: 800 }}>
// // // // // // // // // // // //                 Innovare Biopharma
// // // // // // // // // // // //               </p>
// // // // // // // // // // // //               <p style={{ color: teal, fontSize: 12 }}>LLP</p>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           <p style={{ color: "rgba(255,255,255,0.4)", marginTop: 16 }}>
// // // // // // // // // // // //             Aquaculture healthcare solutions.
// // // // // // // // // // // //           </p>

// // // // // // // // // // // //           {/* SOCIAL */}
// // // // // // // // // // // //           <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
// // // // // // // // // // // //             {[Linkedin, Twitter, Youtube, Facebook].map((Icon, i) => (
// // // // // // // // // // // //               <div key={i} style={{
// // // // // // // // // // // //                 width: 34,
// // // // // // // // // // // //                 height: 34,
// // // // // // // // // // // //                 display: "flex",
// // // // // // // // // // // //                 alignItems: "center",
// // // // // // // // // // // //                 justifyContent: "center",
// // // // // // // // // // // //                 background: "rgba(255,255,255,0.05)",
// // // // // // // // // // // //                 borderRadius: 8,
// // // // // // // // // // // //                 cursor: "pointer"
// // // // // // // // // // // //               }}>
// // // // // // // // // // // //                 <Icon size={16} color="#fff" />
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             ))}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* LINKS */}
// // // // // // // // // // // //         {cols.map(col => (
// // // // // // // // // // // //           <div key={col.title}>
// // // // // // // // // // // //             <h4 style={{ color: teal }}>{col.title}</h4>
// // // // // // // // // // // //             {col.links.map(link => (
// // // // // // // // // // // //               <p key={link} style={{ color: "rgba(255,255,255,0.4)" }}>
// // // // // // // // // // // //                 {link}
// // // // // // // // // // // //               </p>
// // // // // // // // // // // //             ))}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         ))}
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* BOTTOM */}
// // // // // // // // // // // //       <div style={{
// // // // // // // // // // // //         borderTop: "1px solid rgba(255,255,255,0.1)",
// // // // // // // // // // // //         padding: 20,
// // // // // // // // // // // //         textAlign: "center",
// // // // // // // // // // // //         color: "rgba(255,255,255,0.3)"
// // // // // // // // // // // //       }}>
// // // // // // // // // // // //         © 2026 Innovare Biopharma LLP
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //     </footer>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }


// // // // // // // // // // //  "use client";

// // // // // // // // // // // import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

// // // // // // // // // // // export default function Footer() {
// // // // // // // // // // // const navy = "#07162a";
// // // // // // // // // // // const blue = "#1565c0";
// // // // // // // // // // // const teal = "#4db8cc";

// // // // // // // // // // // const cols = [
// // // // // // // // // // //   { title: "Solutions", links: ["Feed Supplements", "Sanitizers", "Water Treatments", "Growth Promoters", "Vitamins & Minerals"] },
// // // // // // // // // // //   { title: "Company",   links: ["About Us", "Our Story", "Sustainability", "Careers", "News"] },
// // // // // // // // // // //   { title: "Support",   links: ["Technical Helpdesk", "Product Catalogue", "FAQs", "Contact Us", "Partner Portal"] },
// // // // // // // // // // // ];

// // // // // // // // // // // const socialLinks = [
// // // // // // // // // // //   {
// // // // // // // // // // //     label: "YouTube",
// // // // // // // // // // //     href: "https://youtube.com",
// // // // // // // // // // //     icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     label: "Facebook",
// // // // // // // // // // //     href: "https://facebook.com",
// // // // // // // // // // //     icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     label: "Instagram",
// // // // // // // // // // //     href: "https://instagram.com",
// // // // // // // // // // //     icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>,
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     label: "LinkedIn",
// // // // // // // // // // //     href: "https://linkedin.com",
// // // // // // // // // // //     icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
// // // // // // // // // // //   },
// // // // // // // // // // // ];

// // // // // // // // // // // export default function Footer() {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <footer style={{ background: navy, borderTop: "1px solid rgba(77,184,204,0.12)" }}>

// // // // // // // // // // //       {/* ── Newsletter band ── */}
// // // // // // // // // // //       <div style={{ background: `linear-gradient(90deg,${blue}18,${teal}10,${blue}18)`, borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "22px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
// // // // // // // // // // //         <div>
// // // // // // // // // // //           <p style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Subscribe to our Aqua Insights Newsletter</p>
// // // // // // // // // // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Science-backed tips, product launches & exclusive offers.</p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <div style={{ display: "flex", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", flexShrink: 0 }}>
// // // // // // // // // // //           <input
// // // // // // // // // // //             type="email"
// // // // // // // // // // //             placeholder="your@email.com"
// // // // // // // // // // //             style={{ padding: "11px 18px", background: "rgba(255,255,255,0.05)", border: "none", color: "#fff", fontSize: 13, outline: "none", width: 220 }}
// // // // // // // // // // //           />
// // // // // // // // // // //           <button style={{ padding: "11px 22px", background: `linear-gradient(135deg,${blue},#0288d1)`, color: "#fff", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13 }}>
// // // // // // // // // // //             Subscribe
// // // // // // // // // // //           </button>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* ── Main grid ── */}
// // // // // // // // // // //       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px 40px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>

// // // // // // // // // // //         {/* Brand column */}
// // // // // // // // // // //         <div>
// // // // // // // // // // //           {/* Logo */}
// // // // // // // // // // //           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
// // // // // // // // // // //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
// // // // // // // // // // //   <img
// // // // // // // // // // //     src="/images/logo.png"
// // // // // // // // // // //     alt="Innovare Biopharma Logo"
// // // // // // // // // // //     style={{ width: 48, height: 48, objectFit: "contain" }}
// // // // // // // // // // //   />
// // // // // // // // // // //   <div>
// // // // // // // // // // //     <p style={{ fontSize: 16, fontWeight: 800, color: "#fff", lineHeight: 1 }}>Innovare Biopharma</p>
// // // // // // // // // // //     <p style={{ fontSize: 10, color: teal, letterSpacing: 2, textTransform: "uppercase" }}>LLP</p>
// // // // // // // // // // //   </div>
// // // // // // // // // // // </div>

// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Tagline */}
// // // // // // // // // // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.85, maxWidth: 260, fontWeight: 300 }}>
// // // // // // // // // // //             India's innovative manufacturer & exporter of aquaculture healthcare products. From hatchery to harvest.
// // // // // // // // // // //           </p>

// // // // // // // // // // //           {/* Contact details */}
// // // // // // // // // // //           <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 8 }}>
// // // // // // // // // // //             {[
// // // // // // // // // // //               { icon: "📍", text: "Hyderabad, Telangana, India" },
// // // // // // // // // // //               { icon: "📧", text: "info@innovarebiopharma.com" },
// // // // // // // // // // //               { icon: "📞", text: "+91 40 XXXX XXXX" },
// // // // // // // // // // //             ].map(c => (
// // // // // // // // // // //               <div key={c.text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
// // // // // // // // // // //                 <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>{c.icon}</span>
// // // // // // // // // // //                 <span style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", lineHeight: 1.6 }}>{c.text}</span>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Social icons */}
// // // // // // // // // // //           <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
// // // // // // // // // // //             {socialLinks.map(s => (
// // // // // // // // // // //               <a
// // // // // // // // // // //                 key={s.label}
// // // // // // // // // // //                 href={s.href}
// // // // // // // // // // //                 target="_blank"
// // // // // // // // // // //                 rel="noopener noreferrer"
// // // // // // // // // // //                 title={s.label}
// // // // // // // // // // //                 style={{
// // // // // // // // // // //                   width: 36, height: 36, borderRadius: 8,
// // // // // // // // // // //                   background: "rgba(255,255,255,0.05)",
// // // // // // // // // // //                   border: "1px solid rgba(255,255,255,0.1)",
// // // // // // // // // // //                   display: "flex", alignItems: "center", justifyContent: "center",
// // // // // // // // // // //                   color: "rgba(255,255,255,0.45)",
// // // // // // // // // // //                   textDecoration: "none",
// // // // // // // // // // //                   transition: "all .2s",
// // // // // // // // // // //                 }}
// // // // // // // // // // //                 onMouseEnter={e => {
// // // // // // // // // // //                   const el = e.currentTarget as HTMLAnchorElement;
// // // // // // // // // // //                   el.style.background = "rgba(255,255,255,0.12)";
// // // // // // // // // // //                   el.style.borderColor = `${teal}50`;
// // // // // // // // // // //                   el.style.color = teal;
// // // // // // // // // // //                   el.style.transform = "translateY(-2px)";
// // // // // // // // // // //                 }}
// // // // // // // // // // //                 onMouseLeave={e => {
// // // // // // // // // // //                   const el = e.currentTarget as HTMLAnchorElement;
// // // // // // // // // // //                   el.style.background = "rgba(255,255,255,0.05)";
// // // // // // // // // // //                   el.style.borderColor = "rgba(255,255,255,0.1)";
// // // // // // // // // // //                   el.style.color = "rgba(255,255,255,0.45)";
// // // // // // // // // // //                   el.style.transform = "none";
// // // // // // // // // // //                 }}
// // // // // // // // // // //               >
// // // // // // // // // // //                 {s.icon}
// // // // // // // // // // //               </a>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Link columns */}
// // // // // // // // // // //         {cols.map(col => (
// // // // // // // // // // //           <div key={col.title}>
// // // // // // // // // // //             <h4 style={{ fontSize: 11, fontWeight: 700, color: teal, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>
// // // // // // // // // // //               {col.title}
// // // // // // // // // // //             </h4>
// // // // // // // // // // //             <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
// // // // // // // // // // //               {col.links.map(link => (
// // // // // // // // // // //                 <a
// // // // // // // // // // //                   key={link}
// // // // // // // // // // //                   href="#"
// // // // // // // // // // //                   style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color .2s" }}
// // // // // // // // // // //                   onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = teal; }}
// // // // // // // // // // //                   onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)"; }}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   {link}
// // // // // // // // // // //                 </a>
// // // // // // // // // // //               ))}
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         ))}
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* ── Bottom bar ── */}
// // // // // // // // // // //       <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "18px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
// // // // // // // // // // //         <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© 2024 Innovare Biopharma LLP. All rights reserved.</p>
// // // // // // // // // // //         <div style={{ display: "flex", gap: 24 }}>
// // // // // // // // // // //           {["Privacy Policy", "Terms of Use", "Cookie Policy"].map(t => (
// // // // // // // // // // //             <a key={t} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.22)", textDecoration: "none" }}>{t}</a>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <div style={{ display: "flex", gap: 8 }}>
// // // // // // // // // // //           {["GMP Certified", "ISO 9001", "Export Approved"].map(c => (
// // // // // // // // // // //             <span key={c} style={{ fontSize: 10, padding: "3px 10px", borderRadius: 4, background: `${teal}14`, border: `1px solid ${teal}28`, color: teal, letterSpacing: 1, fontWeight: 600 }}>
// // // // // // // // // // //               {c}
// // // // // // // // // // //             </span>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //     </footer>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // "use client";

// // // // // // // // // // export default function Footer() {
// // // // // // // // // //   const navy = "#07162a";
// // // // // // // // // //   const blue = "#1565c0";
// // // // // // // // // //   const teal = "#4db8cc";

// // // // // // // // // //   const cols = [
// // // // // // // // // //     {
// // // // // // // // // //       title: "Solutions",
// // // // // // // // // //       links: [
// // // // // // // // // //         "Feed Supplements",
// // // // // // // // // //         "Sanitizers",
// // // // // // // // // //         "Water Treatments",
// // // // // // // // // //         "Growth Promoters",
// // // // // // // // // //         "Vitamins & Minerals",
// // // // // // // // // //       ],
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Company",
// // // // // // // // // //       links: ["About Us", "Our Story", "Sustainability", "Careers", "News"],
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Support",
// // // // // // // // // //       links: [
// // // // // // // // // //         "Technical Helpdesk",
// // // // // // // // // //         "Product Catalogue",
// // // // // // // // // //         "FAQs",
// // // // // // // // // //         "Contact Us",
// // // // // // // // // //         "Partner Portal",
// // // // // // // // // //       ],
// // // // // // // // // //     },
// // // // // // // // // //   ];

// // // // // // // // // //   const socialLinks = [
// // // // // // // // // //     {
// // // // // // // // // //       label: "YouTube",
// // // // // // // // // //       href: "https://youtube.com",
// // // // // // // // // //       icon: "▶",
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       label: "Facebook",
// // // // // // // // // //       href: "https://facebook.com",
// // // // // // // // // //       icon: "f",
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       label: "Instagram",
// // // // // // // // // //       href: "https://instagram.com",
// // // // // // // // // //       icon: "◎",
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       label: "LinkedIn",
// // // // // // // // // //       href: "https://linkedin.com",
// // // // // // // // // //       icon: "in",
// // // // // // // // // //     },
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <footer style={{ background: navy, borderTop: "1px solid rgba(77,184,204,0.12)" }}>
// // // // // // // // // //       <div
// // // // // // // // // //         style={{
// // // // // // // // // //           maxWidth: 1200,
// // // // // // // // // //           margin: "0 auto",
// // // // // // // // // //           padding: "60px 40px 40px",
// // // // // // // // // //           display: "grid",
// // // // // // // // // //           gridTemplateColumns: "2fr 1fr 1fr 1fr",
// // // // // // // // // //           gap: 48,
// // // // // // // // // //         }}
// // // // // // // // // //       >
// // // // // // // // // //         <div>
// // // // // // // // // //           {/* Logo with Glow */}
// // // // // // // // // //           <div
// // // // // // // // // //             style={{
// // // // // // // // // //               display: "flex",
// // // // // // // // // //               alignItems: "center",
// // // // // // // // // //               gap: 12,
// // // // // // // // // //               marginBottom: 16,
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             <div
// // // // // // // // // //               style={{
// // // // // // // // // //                 position: "relative",
// // // // // // // // // //                 width: 60,
// // // // // // // // // //                 height: 60,
// // // // // // // // // //                 display: "flex",
// // // // // // // // // //                 alignItems: "center",
// // // // // // // // // //                 justifyContent: "center",
// // // // // // // // // //               }}
// // // // // // // // // //             >
// // // // // // // // // //               <div
// // // // // // // // // //                 style={{
// // // // // // // // // //                   position: "absolute",
// // // // // // // // // //                   inset: 6,
// // // // // // // // // //                   borderRadius: "50%",
// // // // // // // // // //                   background:
// // // // // // // // // //                     "linear-gradient(135deg, #00E5FF 0%, #00FFA3 45%, #3B82F6 100%)",
// // // // // // // // // //                   filter: "blur(16px)",
// // // // // // // // // //                   opacity: 0.85,
// // // // // // // // // //                 }}
// // // // // // // // // //               />

// // // // // // // // // //               <img
// // // // // // // // // //                 src="/images/logo.png"
// // // // // // // // // //                 alt="Innovare Biopharma Logo"
// // // // // // // // // //                 style={{
// // // // // // // // // //                   width: 48,
// // // // // // // // // //                   height: 48,
// // // // // // // // // //                   objectFit: "contain",
// // // // // // // // // //                   position: "relative",
// // // // // // // // // //                   zIndex: 1,
// // // // // // // // // //                 }}
// // // // // // // // // //               />
// // // // // // // // // //             </div>

// // // // // // // // // //             <div>
// // // // // // // // // //               <p
// // // // // // // // // //                 style={{
// // // // // // // // // //                   fontSize: 16,
// // // // // // // // // //                   fontWeight: 800,
// // // // // // // // // //                   color: "#fff",
// // // // // // // // // //                   lineHeight: 1,
// // // // // // // // // //                   margin: 0,
// // // // // // // // // //                 }}
// // // // // // // // // //               >
// // // // // // // // // //                 Innovare Biopharma
// // // // // // // // // //               </p>

// // // // // // // // // //               <p
// // // // // // // // // //                 style={{
// // // // // // // // // //                   fontSize: 10,
// // // // // // // // // //                   color: teal,
// // // // // // // // // //                   letterSpacing: 2,
// // // // // // // // // //                   textTransform: "uppercase",
// // // // // // // // // //                   margin: 0,
// // // // // // // // // //                   marginTop: 4,
// // // // // // // // // //                 }}
// // // // // // // // // //               >
// // // // // // // // // //                 LLP
// // // // // // // // // //               </p>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)" }}>
// // // // // // // // // //             India's innovative manufacturer & exporter of aquaculture healthcare
// // // // // // // // // //             products.
// // // // // // // // // //           </p>

// // // // // // // // // //           <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
// // // // // // // // // //             {socialLinks.map((s) => (
// // // // // // // // // //               <a
// // // // // // // // // //                 key={s.label}
// // // // // // // // // //                 href={s.href}
// // // // // // // // // //                 target="_blank"
// // // // // // // // // //                 rel="noopener noreferrer"
// // // // // // // // // //                 style={{
// // // // // // // // // //                   width: 36,
// // // // // // // // // //                   height: 36,
// // // // // // // // // //                   borderRadius: 8,
// // // // // // // // // //                   background: "rgba(255,255,255,0.05)",
// // // // // // // // // //                   display: "flex",
// // // // // // // // // //                   alignItems: "center",
// // // // // // // // // //                   justifyContent: "center",
// // // // // // // // // //                   color: teal,
// // // // // // // // // //                   textDecoration: "none",
// // // // // // // // // //                 }}
// // // // // // // // // //               >
// // // // // // // // // //                 {s.icon}
// // // // // // // // // //               </a>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {cols.map((col) => (
// // // // // // // // // //           <div key={col.title}>
// // // // // // // // // //             <h4 style={{ color: teal }}>{col.title}</h4>
// // // // // // // // // //             {col.links.map((link) => (
// // // // // // // // // //               <a
// // // // // // // // // //                 key={link}
// // // // // // // // // //                 href="#"
// // // // // // // // // //                 style={{
// // // // // // // // // //                   display: "block",
// // // // // // // // // //                   color: "rgba(255,255,255,0.38)",
// // // // // // // // // //                   marginBottom: 8,
// // // // // // // // // //                   textDecoration: "none",
// // // // // // // // // //                 }}
// // // // // // // // // //               >
// // // // // // // // // //                 {link}
// // // // // // // // // //               </a>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>


      
// // // // // // // // // //   {/* ── Bottom bar ── */}
// // // // // // // // // //       <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "18px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
// // // // // // // // // //          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>© 2024 Innovare Biopharma LLP. All rights reserved.</p>
// // // // // // // // // //          <div style={{ display: "flex", gap: 24 }}>
// // // // // // // // // //            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map(t => (
// // // // // // // // // //             <a key={t} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.22)", textDecoration: "none" }}>{t}</a>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //         <div style={{ display: "flex", gap: 8 }}>
// // // // // // // // // //           {["GMP Certified", "ISO 9001", "Export Approved"].map(c => (
// // // // // // // // // //             <span key={c} style={{ fontSize: 10, padding: "3px 10px", borderRadius: 4, background: `${teal}14`, border: `1px solid ${teal}28`, color: teal, letterSpacing: 1, fontWeight: 600 }}>
// // // // // // // // // //               {c}
// // // // // // // // // //             </span>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //     </footer>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // "use client";

// // // // // // // // // export default function Footer() {
// // // // // // // // //   const navy = "#07162a";
// // // // // // // // //   const blue = "#1565c0";
// // // // // // // // //   const teal = "#4db8cc";

// // // // // // // // //   const cols = [
// // // // // // // // //     {
// // // // // // // // //       title: "Solutions",
// // // // // // // // //       links: [
// // // // // // // // //         "Feed Supplements",
// // // // // // // // //         "Sanitizers",
// // // // // // // // //         "Water Treatments",
// // // // // // // // //         "Growth Promoters",
// // // // // // // // //         "Vitamins & Minerals",
// // // // // // // // //       ],
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Company",
// // // // // // // // //       links: ["About Us", "Our Story", "Sustainability", "Careers", "News"],
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Support",
// // // // // // // // //       links: [
// // // // // // // // //         "Technical Helpdesk",
// // // // // // // // //         "Product Catalogue",
// // // // // // // // //         "FAQs",
// // // // // // // // //         "Contact Us",
// // // // // // // // //         "Partner Portal",
// // // // // // // // //       ],
// // // // // // // // //     },
// // // // // // // // //   ];

// // // // // // // // //   const socialLinks = [
// // // // // // // // //     { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
// // // // // // // // //     { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
// // // // // // // // //     { label: "YouTube", href: "https://youtube.com", icon: "▶" },
// // // // // // // // //     { label: "Facebook", href: "https://facebook.com", icon: "f" },
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <footer
// // // // // // // // //       style={{
// // // // // // // // //         background: navy,
// // // // // // // // //         borderTop: "1px solid rgba(77,184,204,0.12)",
// // // // // // // // //       }}
// // // // // // // // //     >
// // // // // // // // //       {/* Newsletter Band */}
// // // // // // // // //       <div
// // // // // // // // //         style={{
// // // // // // // // //           background: `linear-gradient(90deg, ${blue}18, ${teal}10, ${blue}18)`,
// // // // // // // // //           borderBottom: "1px solid rgba(255,255,255,0.05)",
// // // // // // // // //           padding: "22px 60px",
// // // // // // // // //           display: "flex",
// // // // // // // // //           alignItems: "center",
// // // // // // // // //           justifyContent: "space-between",
// // // // // // // // //           flexWrap: "wrap",
// // // // // // // // //           gap: 16,
// // // // // // // // //         }}
// // // // // // // // //       >
// // // // // // // // //         <div>
// // // // // // // // //           <p style={{ fontSize: 16, fontWeight: 800, color: "#fff", margin: 0 }}>
// // // // // // // // //             Subscribe to our Aqua Insights Newsletter
// // // // // // // // //           </p>
// // // // // // // // //           <p
// // // // // // // // //             style={{
// // // // // // // // //               fontSize: 13,
// // // // // // // // //               color: "rgba(255,255,255,0.4)",
// // // // // // // // //               marginTop: 4,
// // // // // // // // //               marginBottom: 0,
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             Science-backed tips, product launches & exclusive offers.
// // // // // // // // //           </p>
// // // // // // // // //         </div>

// // // // // // // // //         <div
// // // // // // // // //           style={{
// // // // // // // // //             display: "flex",
// // // // // // // // //             borderRadius: 10,
// // // // // // // // //             overflow: "hidden",
// // // // // // // // //             border: "1px solid rgba(255,255,255,0.08)",
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           <input
// // // // // // // // //             type="email"
// // // // // // // // //             placeholder="your@email.com"
// // // // // // // // //             style={{
// // // // // // // // //               padding: "12px 18px",
// // // // // // // // //               background: "rgba(255,255,255,0.05)",
// // // // // // // // //               border: "none",
// // // // // // // // //               color: "#fff",
// // // // // // // // //               width: 240,
// // // // // // // // //               outline: "none",
// // // // // // // // //             }}
// // // // // // // // //           />
// // // // // // // // //           <button
// // // // // // // // //             style={{
// // // // // // // // //               padding: "12px 24px",
// // // // // // // // //               background: `linear-gradient(135deg, ${blue}, #0288d1)`,
// // // // // // // // //               color: "#fff",
// // // // // // // // //               border: "none",
// // // // // // // // //               fontWeight: 700,
// // // // // // // // //               cursor: "pointer",
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             Subscribe
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Main Grid */}
// // // // // // // // //       <div
// // // // // // // // //         style={{
// // // // // // // // //           maxWidth: 1400,
// // // // // // // // //           margin: "0 auto",
// // // // // // // // //           padding: "60px 60px 40px",
// // // // // // // // //           display: "grid",
// // // // // // // // //           gridTemplateColumns: "2fr 1fr 1fr 1fr",
// // // // // // // // //           gap: 60,
// // // // // // // // //         }}
// // // // // // // // //       >
// // // // // // // // //         {/* Brand Column */}
// // // // // // // // //         <div>
// // // // // // // // //           <div
// // // // // // // // //             style={{
// // // // // // // // //               display: "flex",
// // // // // // // // //               alignItems: "center",
// // // // // // // // //               gap: 14,
// // // // // // // // //               marginBottom: 18,
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             <div
// // // // // // // // //               style={{
// // // // // // // // //                 position: "relative",
// // // // // // // // //                 width: 62,
// // // // // // // // //                 height: 62,
// // // // // // // // //                 display: "flex",
// // // // // // // // //                 alignItems: "center",
// // // // // // // // //                 justifyContent: "center",
// // // // // // // // //               }}
// // // // // // // // //             >
// // // // // // // // //               <div
// // // // // // // // //                 style={{
// // // // // // // // //                   position: "absolute",
// // // // // // // // //                   inset: 7,
// // // // // // // // //                   borderRadius: "50%",
// // // // // // // // //                   background:
// // // // // // // // //                     "linear-gradient(135deg, #00E5FF 0%, #00FFA3 45%, #3B82F6 100%)",
// // // // // // // // //                   filter: "blur(16px)",
// // // // // // // // //                   opacity: 0.85,
// // // // // // // // //                 }}
// // // // // // // // //               />

// // // // // // // // //               <img
// // // // // // // // //                 src="/images/logo.png"
// // // // // // // // //                 alt="Innovare Biopharma Logo"
// // // // // // // // //                 style={{
// // // // // // // // //                   width: 50,
// // // // // // // // //                   height: 50,
// // // // // // // // //                   objectFit: "contain",
// // // // // // // // //                   position: "relative",
// // // // // // // // //                   zIndex: 1,
// // // // // // // // //                 }}
// // // // // // // // //               />
// // // // // // // // //             </div>

// // // // // // // // //             <div>
// // // // // // // // //               <p
// // // // // // // // //                 style={{
// // // // // // // // //                   fontSize: 16,
// // // // // // // // //                   fontWeight: 800,
// // // // // // // // //                   color: "#fff",
// // // // // // // // //                   margin: 0,
// // // // // // // // //                   lineHeight: 1.1,
// // // // // // // // //                 }}
// // // // // // // // //               >
// // // // // // // // //                 Innovare Biopharma
// // // // // // // // //               </p>
// // // // // // // // //               <p
// // // // // // // // //                 style={{
// // // // // // // // //                   fontSize: 10,
// // // // // // // // //                   color: teal,
// // // // // // // // //                   letterSpacing: 2,
// // // // // // // // //                   textTransform: "uppercase",
// // // // // // // // //                   margin: "4px 0 0",
// // // // // // // // //                 }}
// // // // // // // // //               >
// // // // // // // // //                 LLP
// // // // // // // // //               </p>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           <p
// // // // // // // // //             style={{
// // // // // // // // //               fontSize: 14,
// // // // // // // // //               color: "rgba(255,255,255,0.35)",
// // // // // // // // //               lineHeight: 1.9,
// // // // // // // // //               maxWidth: 320,
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             India's innovative manufacturer & exporter of aquaculture healthcare
// // // // // // // // //             products. From hatchery to harvest.
// // // // // // // // //           </p>

// // // // // // // // //           <div
// // // // // // // // //             style={{
// // // // // // // // //               marginTop: 24,
// // // // // // // // //               display: "flex",
// // // // // // // // //               flexDirection: "column",
// // // // // // // // //               gap: 12,
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             <span style={{ color: "rgba(255,255,255,0.35)" }}>
// // // // // // // // //               📍 Hyderabad, Telangana, India
// // // // // // // // //             </span>
// // // // // // // // //             <span style={{ color: "rgba(255,255,255,0.35)" }}>
// // // // // // // // //               📧 info@innovarebiopharma.com
// // // // // // // // //             </span>
// // // // // // // // //             <span style={{ color: "rgba(255,255,255,0.35)" }}>
// // // // // // // // //               📞 +91 40 XXXX XXXX
// // // // // // // // //             </span>
// // // // // // // // //           </div>

// // // // // // // // //           <div style={{ display: "flex", gap: 12, marginTop: 26 }}>
// // // // // // // // //             {socialLinks.map((s) => (
// // // // // // // // //               <a
// // // // // // // // //                 key={s.label}
// // // // // // // // //                 href={s.href}
// // // // // // // // //                 target="_blank"
// // // // // // // // //                 rel="noopener noreferrer"
// // // // // // // // //                 style={{
// // // // // // // // //                   width: 40,
// // // // // // // // //                   height: 40,
// // // // // // // // //                   borderRadius: 10,
// // // // // // // // //                   background: "rgba(255,255,255,0.05)",
// // // // // // // // //                   border: "1px solid rgba(255,255,255,0.08)",
// // // // // // // // //                   display: "flex",
// // // // // // // // //                   alignItems: "center",
// // // // // // // // //                   justifyContent: "center",
// // // // // // // // //                   color: "rgba(255,255,255,0.5)",
// // // // // // // // //                   textDecoration: "none",
// // // // // // // // //                 }}
// // // // // // // // //               >
// // // // // // // // //                 {s.icon}
// // // // // // // // //               </a>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Link Columns */}
// // // // // // // // //         {cols.map((col) => (
// // // // // // // // //           <div key={col.title}>
// // // // // // // // //             <h4
// // // // // // // // //               style={{
// // // // // // // // //                 fontSize: 12,
// // // // // // // // //                 fontWeight: 700,
// // // // // // // // //                 color: teal,
// // // // // // // // //                 letterSpacing: 2,
// // // // // // // // //                 textTransform: "uppercase",
// // // // // // // // //                 marginBottom: 20,
// // // // // // // // //               }}
// // // // // // // // //             >
// // // // // // // // //               {col.title}
// // // // // // // // //             </h4>

// // // // // // // // //             <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// // // // // // // // //               {col.links.map((link) => (
// // // // // // // // //                 <a
// // // // // // // // //                   key={link}
// // // // // // // // //                   href="#"
// // // // // // // // //                   style={{
// // // // // // // // //                     fontSize: 14,
// // // // // // // // //                     color: "rgba(255,255,255,0.35)",
// // // // // // // // //                     textDecoration: "none",
// // // // // // // // //                   }}
// // // // // // // // //                 >
// // // // // // // // //                   {link}
// // // // // // // // //                 </a>
// // // // // // // // //               ))}
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         ))}
// // // // // // // // //       </div>

// // // // // // // // //       {/* Bottom Bar */}
// // // // // // // // //       <div
// // // // // // // // //         style={{
// // // // // // // // //           borderTop: "1px solid rgba(255,255,255,0.06)",
// // // // // // // // //           padding: "18px 60px",
// // // // // // // // //           display: "grid",
// // // // // // // // //           gridTemplateColumns: "1fr auto 1fr",
// // // // // // // // //           alignItems: "center",
// // // // // // // // //           gap: 20,
// // // // // // // // //         }}
// // // // // // // // //       >
// // // // // // // // //         <p
// // // // // // // // //           style={{
// // // // // // // // //             fontSize: 12,
// // // // // // // // //             color: "rgba(255,255,255,0.22)",
// // // // // // // // //             margin: 0,
// // // // // // // // //             justifySelf: "start",
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           © 2026 Innovare Biopharma LLP. All rights reserved.
// // // // // // // // //         </p>

// // // // // // // // //         <div
// // // // // // // // //           style={{
// // // // // // // // //             display: "flex",
// // // // // // // // //             gap: 28,
// // // // // // // // //             justifyContent: "center",
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((t) => (
// // // // // // // // //             <a
// // // // // // // // //               key={t}
// // // // // // // // //               href="#"
// // // // // // // // //               style={{
// // // // // // // // //                 fontSize: 12,
// // // // // // // // //                 color: "rgba(255,255,255,0.22)",
// // // // // // // // //                 textDecoration: "none",
// // // // // // // // //               }}
// // // // // // // // //             >
// // // // // // // // //               {t}
// // // // // // // // //             </a>
// // // // // // // // //           ))}
// // // // // // // // //         </div>

// // // // // // // // //         <div
// // // // // // // // //           style={{
// // // // // // // // //             display: "flex",
// // // // // // // // //             gap: 10,
// // // // // // // // //             justifyContent: "flex-end",
// // // // // // // // //             flexWrap: "wrap",
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           {["GMP Certified", "ISO 9001", "Export Approved"].map((c) => (
// // // // // // // // //             <span
// // // // // // // // //               key={c}
// // // // // // // // //               style={{
// // // // // // // // //                 fontSize: 10,
// // // // // // // // //                 padding: "5px 12px",
// // // // // // // // //                 borderRadius: 6,
// // // // // // // // //                 background: `${teal}14`,
// // // // // // // // //                 border: `1px solid ${teal}35`,
// // // // // // // // //                 color: teal,
// // // // // // // // //                 letterSpacing: 1.2,
// // // // // // // // //                 fontWeight: 600,
// // // // // // // // //               }}
// // // // // // // // //             >
// // // // // // // // //               {c}
// // // // // // // // //             </span>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </footer>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // "use client";

// // // // // // // // export default function Footer() {
// // // // // // // //   const navy = "#07162a";
// // // // // // // //   const blue = "#1565c0";
// // // // // // // //   const teal = "#4db8cc";

// // // // // // // //   const cols = [
// // // // // // // //     {
// // // // // // // //       title: "Solutions",
// // // // // // // //       links: [
// // // // // // // //         "Feed Supplements",
// // // // // // // //         "Sanitizers",
// // // // // // // //         "Water Treatments",
// // // // // // // //         "Growth Promoters",
// // // // // // // //         "Vitamins & Minerals",
// // // // // // // //       ],
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Company",
// // // // // // // //       links: ["About Us", "Our Story", "Sustainability", "Careers", "News"],
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Support",
// // // // // // // //       links: [
// // // // // // // //         "Technical Helpdesk",
// // // // // // // //         "Product Catalogue",
// // // // // // // //         "FAQs",
// // // // // // // //         "Contact Us",
// // // // // // // //         "Partner Portal",
// // // // // // // //       ],
// // // // // // // //     },
// // // // // // // //   ];

// // // // // // // //   const socialLinks = [
// // // // // // // //     { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
// // // // // // // //     { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
// // // // // // // //     { label: "YouTube", href: "https://youtube.com", icon: "▶" },
// // // // // // // //     { label: "Facebook", href: "https://facebook.com", icon: "f" },
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <footer
// // // // // // // //       style={{
// // // // // // // //         background: navy,
// // // // // // // //         borderTop: "1px solid rgba(77,184,204,0.12)",
// // // // // // // //       }}
// // // // // // // //     >
// // // // // // // //       {/* Newsletter */}
// // // // // // // //       <div
// // // // // // // //         style={{
// // // // // // // //           background: `linear-gradient(90deg, ${blue}18, ${teal}10, ${blue}18)`,
// // // // // // // //           borderBottom: "1px solid rgba(255,255,255,0.05)",
// // // // // // // //           padding: "22px 60px",
// // // // // // // //           display: "flex",
// // // // // // // //           alignItems: "center",
// // // // // // // //           justifyContent: "space-between",
// // // // // // // //           flexWrap: "wrap",
// // // // // // // //           gap: 16,
// // // // // // // //         }}
// // // // // // // //       >
// // // // // // // //         <div>
// // // // // // // //           <p style={{ fontSize: 16, fontWeight: 800, color: "#fff", margin: 0 }}>
// // // // // // // //             Subscribe to our Aqua Insights Newsletter
// // // // // // // //           </p>
// // // // // // // //           <p
// // // // // // // //             style={{
// // // // // // // //               fontSize: 13,
// // // // // // // //               color: "rgba(255,255,255,0.4)",
// // // // // // // //               marginTop: 4,
// // // // // // // //               marginBottom: 0,
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             Science-backed tips, product launches & exclusive offers.
// // // // // // // //           </p>
// // // // // // // //         </div>

// // // // // // // //         <div
// // // // // // // //           style={{
// // // // // // // //             display: "flex",
// // // // // // // //             borderRadius: 10,
// // // // // // // //             overflow: "hidden",
// // // // // // // //             border: "1px solid rgba(255,255,255,0.08)",
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           <input
// // // // // // // //             type="email"
// // // // // // // //             placeholder="your@email.com"
// // // // // // // //             style={{
// // // // // // // //               padding: "12px 18px",
// // // // // // // //               background: "rgba(255,255,255,0.05)",
// // // // // // // //               border: "none",
// // // // // // // //               color: "#fff",
// // // // // // // //               width: 240,
// // // // // // // //               outline: "none",
// // // // // // // //             }}
// // // // // // // //           />
// // // // // // // //           <button
// // // // // // // //             style={{
// // // // // // // //               padding: "12px 24px",
// // // // // // // //               background: `linear-gradient(135deg, ${blue}, #0288d1)`,
// // // // // // // //               color: "#fff",
// // // // // // // //               border: "none",
// // // // // // // //               fontWeight: 700,
// // // // // // // //               cursor: "pointer",
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             Subscribe
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Main Grid */}
// // // // // // // //       <div
// // // // // // // //         style={{
// // // // // // // //           maxWidth: 1400,
// // // // // // // //           margin: "0 auto",
// // // // // // // //           padding: "60px 60px 40px",
// // // // // // // //           display: "grid",
// // // // // // // //           gridTemplateColumns: "2fr 1fr 1fr 1fr",
// // // // // // // //           gap: 60,
// // // // // // // //         }}
// // // // // // // //       >
// // // // // // // //         {/* Brand */}
// // // // // // // //         <div>
// // // // // // // //           <div
// // // // // // // //             style={{
// // // // // // // //               display: "flex",
// // // // // // // //               alignItems: "center",
// // // // // // // //               gap: 14,
// // // // // // // //               marginBottom: 18,
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             {/* Logo Glow */}
// // // // // // // //             <div
// // // // // // // //               style={{
// // // // // // // //                 position: "relative",
// // // // // // // //                 width: 70,
// // // // // // // //                 height: 70,
// // // // // // // //                 display: "flex",
// // // // // // // //                 alignItems: "center",
// // // // // // // //                 justifyContent: "center",
// // // // // // // //                 flexShrink: 0,
// // // // // // // //               }}
// // // // // // // //             >
// // // // // // // //               <div
// // // // // // // //                 style={{
// // // // // // // //                   position: "absolute",
// // // // // // // //                   width: 58,
// // // // // // // //                   height: 58,
// // // // // // // //                   borderRadius: "50%",
// // // // // // // //                   background:
// // // // // // // //                     "radial-gradient(circle, rgba(0,229,255,0.55) 0%, rgba(0,255,163,0.35) 40%, rgba(59,130,246,0.15) 70%, transparent 100%)",
// // // // // // // //                   filter: "blur(18px)",
// // // // // // // //                   transform: "scale(1.35)",
// // // // // // // //                   zIndex: 0,
// // // // // // // //                 }}
// // // // // // // //               />

// // // // // // // //               <div
// // // // // // // //                 style={{
// // // // // // // //                   position: "absolute",
// // // // // // // //                   width: 54,
// // // // // // // //                   height: 54,
// // // // // // // //                   borderRadius: "50%",
// // // // // // // //                   background:
// // // // // // // //                     "linear-gradient(135deg, rgba(0,229,255,0.35), rgba(0,255,163,0.25), rgba(59,130,246,0.35))",
// // // // // // // //                   filter: "blur(10px)",
// // // // // // // //                   zIndex: 0,
// // // // // // // //                 }}
// // // // // // // //               />

// // // // // // // //               <img
// // // // // // // //                 src="/images/logo.png"
// // // // // // // //                 alt="Innovare Biopharma Logo"
// // // // // // // //                 style={{
// // // // // // // //                   width: 50,
// // // // // // // //                   height: 50,
// // // // // // // //                   objectFit: "contain",
// // // // // // // //                   position: "relative",
// // // // // // // //                   zIndex: 1,
// // // // // // // //                 }}
// // // // // // // //               />
// // // // // // // //             </div>

// // // // // // // //             <div>
// // // // // // // //               <p
// // // // // // // //                 style={{
// // // // // // // //                   fontSize: 16,
// // // // // // // //                   fontWeight: 800,
// // // // // // // //                   color: "#fff",
// // // // // // // //                   margin: 0,
// // // // // // // //                   lineHeight: 1.1,
// // // // // // // //                 }}
// // // // // // // //               >
// // // // // // // //                 Innovare Biopharma
// // // // // // // //               </p>

// // // // // // // //               <p
// // // // // // // //                 style={{
// // // // // // // //                   fontSize: 10,
// // // // // // // //                   color: teal,
// // // // // // // //                   letterSpacing: 2,
// // // // // // // //                   textTransform: "uppercase",
// // // // // // // //                   margin: "4px 0 0",
// // // // // // // //                 }}
// // // // // // // //               >
// // // // // // // //                 LLP
// // // // // // // //               </p>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           <p
// // // // // // // //             style={{
// // // // // // // //               fontSize: 14,
// // // // // // // //               color: "rgba(255,255,255,0.35)",
// // // // // // // //               lineHeight: 1.9,
// // // // // // // //               maxWidth: 320,
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             India's innovative manufacturer & exporter of aquaculture healthcare
// // // // // // // //             products. From hatchery to harvest.
// // // // // // // //           </p>

// // // // // // // //           <div
// // // // // // // //             style={{
// // // // // // // //               marginTop: 24,
// // // // // // // //               display: "flex",
// // // // // // // //               flexDirection: "column",
// // // // // // // //               gap: 12,
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             <span style={{ color: "rgba(255,255,255,0.35)" }}>
// // // // // // // //               📍 Hyderabad, Telangana, India
// // // // // // // //             </span>
// // // // // // // //             <span style={{ color: "rgba(255,255,255,0.35)" }}>
// // // // // // // //               📧 info@innovarebiopharma.com
// // // // // // // //             </span>
// // // // // // // //             <span style={{ color: "rgba(255,255,255,0.35)" }}>
// // // // // // // //               📞 +91 40 XXXX XXXX
// // // // // // // //             </span>
// // // // // // // //           </div>

// // // // // // // //           <div style={{ display: "flex", gap: 12, marginTop: 26 }}>
// // // // // // // //             {socialLinks.map((s) => (
// // // // // // // //               <a
// // // // // // // //                 key={s.label}
// // // // // // // //                 href={s.href}
// // // // // // // //                 target="_blank"
// // // // // // // //                 rel="noopener noreferrer"
// // // // // // // //                 style={{
// // // // // // // //                   width: 40,
// // // // // // // //                   height: 40,
// // // // // // // //                   borderRadius: 10,
// // // // // // // //                   background: "rgba(255,255,255,0.05)",
// // // // // // // //                   border: "1px solid rgba(255,255,255,0.08)",
// // // // // // // //                   display: "flex",
// // // // // // // //                   alignItems: "center",
// // // // // // // //                   justifyContent: "center",
// // // // // // // //                   color: "rgba(255,255,255,0.5)",
// // // // // // // //                   textDecoration: "none",
// // // // // // // //                 }}
// // // // // // // //               >
// // // // // // // //                 {s.icon}
// // // // // // // //               </a>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Links */}
// // // // // // // //         {cols.map((col) => (
// // // // // // // //           <div key={col.title}>
// // // // // // // //             <h4
// // // // // // // //               style={{
// // // // // // // //                 fontSize: 12,
// // // // // // // //                 fontWeight: 700,
// // // // // // // //                 color: teal,
// // // // // // // //                 letterSpacing: 2,
// // // // // // // //                 textTransform: "uppercase",
// // // // // // // //                 marginBottom: 20,
// // // // // // // //               }}
// // // // // // // //             >
// // // // // // // //               {col.title}
// // // // // // // //             </h4>

// // // // // // // //             <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// // // // // // // //               {col.links.map((link) => (
// // // // // // // //                 <a
// // // // // // // //                   key={link}
// // // // // // // //                   href="#"
// // // // // // // //                   style={{
// // // // // // // //                     fontSize: 14,
// // // // // // // //                     color: "rgba(255,255,255,0.35)",
// // // // // // // //                     textDecoration: "none",
// // // // // // // //                   }}
// // // // // // // //                 >
// // // // // // // //                   {link}
// // // // // // // //                 </a>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         ))}
// // // // // // // //       </div>

// // // // // // // //       {/* Bottom Bar */}
// // // // // // // //       <div
// // // // // // // //         style={{
// // // // // // // //           borderTop: "1px solid rgba(255,255,255,0.06)",
// // // // // // // //           padding: "18px 60px",
// // // // // // // //           display: "grid",
// // // // // // // //           gridTemplateColumns: "1fr auto 1fr",
// // // // // // // //           alignItems: "center",
// // // // // // // //           gap: 20,
// // // // // // // //         }}
// // // // // // // //       >
// // // // // // // //         <p
// // // // // // // //           style={{
// // // // // // // //             fontSize: 12,
// // // // // // // //             color: "rgba(255,255,255,0.22)",
// // // // // // // //             margin: 0,
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           © 2026 Innovare Biopharma LLP. All rights reserved.
// // // // // // // //         </p>

// // // // // // // //         <div style={{ display: "flex", gap: 28 }}>
// // // // // // // //           {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((t) => (
// // // // // // // //             <a
// // // // // // // //               key={t}
// // // // // // // //               href="#"
// // // // // // // //               style={{
// // // // // // // //                 fontSize: 12,
// // // // // // // //                 color: "rgba(255,255,255,0.22)",
// // // // // // // //                 textDecoration: "none",
// // // // // // // //               }}
// // // // // // // //             >
// // // // // // // //               {t}
// // // // // // // //             </a>
// // // // // // // //           ))}
// // // // // // // //         </div>

// // // // // // // //         <div
// // // // // // // //           style={{
// // // // // // // //             display: "flex",
// // // // // // // //             gap: 10,
// // // // // // // //             justifyContent: "flex-end",
// // // // // // // //             flexWrap: "wrap",
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           {["GMP Certified", "ISO 9001", "Export Approved"].map((c) => (
// // // // // // // //             <span
// // // // // // // //               key={c}
// // // // // // // //               style={{
// // // // // // // //                 fontSize: 10,
// // // // // // // //                 padding: "5px 12px",
// // // // // // // //                 borderRadius: 6,
// // // // // // // //                 background: `${teal}14`,
// // // // // // // //                 border: `1px solid ${teal}35`,
// // // // // // // //                 color: teal,
// // // // // // // //                 letterSpacing: 1.2,
// // // // // // // //                 fontWeight: 600,
// // // // // // // //               }}
// // // // // // // //             >
// // // // // // // //               {c}
// // // // // // // //             </span>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </footer>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // "use client";

// // // // // // // export default function Footer() {
// // // // // // //   const navy = "#07162a";
// // // // // // //   const blue = "#1565c0";
// // // // // // //   const teal = "#4db8cc";

// // // // // // //   const cols = [
// // // // // // //     {
// // // // // // //       title: "Solutions",
// // // // // // //       links: [
// // // // // // //         "Feed Supplements",
// // // // // // //         "Sanitizers",
// // // // // // //         "Water Treatments",
// // // // // // //         "Growth Promoters",
// // // // // // //         "Vitamins & Minerals",
// // // // // // //       ],
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Company",
// // // // // // //       links: ["About Us", "Our Story", "Sustainability", "Careers", "News"],
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Support",
// // // // // // //       links: [
// // // // // // //         "Technical Helpdesk",
// // // // // // //         "Product Catalogue",
// // // // // // //         "FAQs",
// // // // // // //         "Contact Us",
// // // // // // //         "Partner Portal",
// // // // // // //       ],
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   const socialLinks = [
// // // // // // //     { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
// // // // // // //     { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
// // // // // // //     { label: "YouTube", href: "https://youtube.com", icon: "▶" },
// // // // // // //     { label: "Facebook", href: "https://facebook.com", icon: "f" },
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <footer
// // // // // // //       style={{
// // // // // // //         background: navy,
// // // // // // //         borderTop: "1px solid rgba(77,184,204,0.12)",
// // // // // // //         overflow: "visible",
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       {/* Newsletter */}
// // // // // // //       <div
// // // // // // //         style={{
// // // // // // //           background: `linear-gradient(90deg, ${blue}18, ${teal}10, ${blue}18)`,
// // // // // // //           borderBottom: "1px solid rgba(255,255,255,0.05)",
// // // // // // //           padding: "22px 60px",
// // // // // // //           display: "flex",
// // // // // // //           alignItems: "center",
// // // // // // //           justifyContent: "space-between",
// // // // // // //           flexWrap: "wrap",
// // // // // // //           gap: 16,
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         <div>
// // // // // // //           <p style={{ fontSize: 16, fontWeight: 800, color: "#fff", margin: 0 }}>
// // // // // // //             Subscribe to our Aqua Insights Newsletter
// // // // // // //           </p>
// // // // // // //           <p
// // // // // // //             style={{
// // // // // // //               fontSize: 13,
// // // // // // //               color: "rgba(255,255,255,0.4)",
// // // // // // //               marginTop: 4,
// // // // // // //               marginBottom: 0,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             Science-backed tips, product launches & exclusive offers.
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         <div
// // // // // // //           style={{
// // // // // // //             display: "flex",
// // // // // // //             borderRadius: 10,
// // // // // // //             overflow: "hidden",
// // // // // // //             border: "1px solid rgba(255,255,255,0.08)",
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           <input
// // // // // // //             type="email"
// // // // // // //             placeholder="your@email.com"
// // // // // // //             style={{
// // // // // // //               padding: "12px 18px",
// // // // // // //               background: "rgba(255,255,255,0.05)",
// // // // // // //               border: "none",
// // // // // // //               color: "#fff",
// // // // // // //               width: 240,
// // // // // // //               outline: "none",
// // // // // // //             }}
// // // // // // //           />
// // // // // // //           <button
// // // // // // //             style={{
// // // // // // //               padding: "12px 24px",
// // // // // // //               background: `linear-gradient(135deg, ${blue}, #0288d1)`,
// // // // // // //               color: "#fff",
// // // // // // //               border: "none",
// // // // // // //               fontWeight: 700,
// // // // // // //               cursor: "pointer",
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             Subscribe
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Main Grid */}
// // // // // // //       <div
// // // // // // //         style={{
// // // // // // //           maxWidth: 1400,
// // // // // // //           margin: "0 auto",
// // // // // // //           padding: "60px 60px 40px",
// // // // // // //           display: "grid",
// // // // // // //           gridTemplateColumns: "2fr 1fr 1fr 1fr",
// // // // // // //           gap: 60,
// // // // // // //           overflow: "visible",
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         {/* Brand */}
// // // // // // //         <div>
// // // // // // //           <div
// // // // // // //             style={{
// // // // // // //               display: "flex",
// // // // // // //               alignItems: "center",
// // // // // // //               gap: 14,
// // // // // // //               marginBottom: 18,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             {/* Strong Glow Logo */}
// // // // // // //             <div
// // // // // // //               style={{
// // // // // // //                 position: "relative",
// // // // // // //                 width: 80,
// // // // // // //                 height: 80,
// // // // // // //                 display: "flex",
// // // // // // //                 alignItems: "center",
// // // // // // //                 justifyContent: "center",
// // // // // // //                 overflow: "visible",
// // // // // // //                 flexShrink: 0,
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               <div
// // // // // // //                 style={{
// // // // // // //                   position: "absolute",
// // // // // // //                   width: 90,
// // // // // // //                   height: 90,
// // // // // // //                   borderRadius: "50%",
// // // // // // //                   background:
// // // // // // //                     "radial-gradient(circle, rgba(0,229,255,0.85) 0%, rgba(0,255,163,0.55) 35%, rgba(59,130,246,0.35) 60%, transparent 80%)",
// // // // // // //                   filter: "blur(26px)",
// // // // // // //                   zIndex: 0,
// // // // // // //                   pointerEvents: "none",
// // // // // // //                 }}
// // // // // // //               />

// // // // // // //               <div
// // // // // // //                 style={{
// // // // // // //                   position: "absolute",
// // // // // // //                   width: 65,
// // // // // // //                   height: 65,
// // // // // // //                   borderRadius: "50%",
// // // // // // //                   background:
// // // // // // //                     "linear-gradient(135deg, rgba(0,229,255,0.55), rgba(0,255,163,0.45), rgba(59,130,246,0.45))",
// // // // // // //                   filter: "blur(14px)",
// // // // // // //                   zIndex: 0,
// // // // // // //                   pointerEvents: "none",
// // // // // // //                 }}
// // // // // // //               />

// // // // // // //               <img
// // // // // // //                 src="/images/logo.png"
// // // // // // //                 alt="Innovare Biopharma Logo"
// // // // // // //                 style={{
// // // // // // //                   width: 52,
// // // // // // //                   height: 52,
// // // // // // //                   objectFit: "contain",
// // // // // // //                   position: "relative",
// // // // // // //                   zIndex: 2,
// // // // // // //                 }}
// // // // // // //               />
// // // // // // //             </div>

// // // // // // //             <div>
// // // // // // //               <p
// // // // // // //                 style={{
// // // // // // //                   fontSize: 16,
// // // // // // //                   fontWeight: 800,
// // // // // // //                   color: "#fff",
// // // // // // //                   margin: 0,
// // // // // // //                   lineHeight: 1.1,
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 Innovare Biopharma
// // // // // // //               </p>

// // // // // // //               <p
// // // // // // //                 style={{
// // // // // // //                   fontSize: 10,
// // // // // // //                   color: teal,
// // // // // // //                   letterSpacing: 2,
// // // // // // //                   textTransform: "uppercase",
// // // // // // //                   margin: "4px 0 0",
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 LLP
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           <p
// // // // // // //             style={{
// // // // // // //               fontSize: 14,
// // // // // // //               color: "rgba(255,255,255,0.35)",
// // // // // // //               lineHeight: 1.9,
// // // // // // //               maxWidth: 320,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             India's innovative manufacturer & exporter of aquaculture healthcare
// // // // // // //             products. From hatchery to harvest.
// // // // // // //           </p>

// // // // // // //           <div
// // // // // // //             style={{
// // // // // // //               marginTop: 24,
// // // // // // //               display: "flex",
// // // // // // //               flexDirection: "column",
// // // // // // //               gap: 12,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <span style={{ color: "rgba(255,255,255,0.35)" }}>
// // // // // // //               📍 Hyderabad, Telangana, India
// // // // // // //             </span>
// // // // // // //             <span style={{ color: "rgba(255,255,255,0.35)" }}>
// // // // // // //               📧 info@innovarebiopharma.com
// // // // // // //             </span>
// // // // // // //             <span style={{ color: "rgba(255,255,255,0.35)" }}>
// // // // // // //               📞 +91 40 XXXX XXXX
// // // // // // //             </span>
// // // // // // //           </div>

// // // // // // //           <div style={{ display: "flex", gap: 12, marginTop: 26 }}>
// // // // // // //             {socialLinks.map((s) => (
// // // // // // //               <a
// // // // // // //                 key={s.label}
// // // // // // //                 href={s.href}
// // // // // // //                 target="_blank"
// // // // // // //                 rel="noopener noreferrer"
// // // // // // //                 style={{
// // // // // // //                   width: 40,
// // // // // // //                   height: 40,
// // // // // // //                   borderRadius: 10,
// // // // // // //                   background: "rgba(255,255,255,0.05)",
// // // // // // //                   border: "1px solid rgba(255,255,255,0.08)",
// // // // // // //                   display: "flex",
// // // // // // //                   alignItems: "center",
// // // // // // //                   justifyContent: "center",
// // // // // // //                   color: "rgba(255,255,255,0.5)",
// // // // // // //                   textDecoration: "none",
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 {s.icon}
// // // // // // //               </a>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Link Columns */}
// // // // // // //         {cols.map((col) => (
// // // // // // //           <div key={col.title}>
// // // // // // //             <h4
// // // // // // //               style={{
// // // // // // //                 fontSize: 12,
// // // // // // //                 fontWeight: 700,
// // // // // // //                 color: teal,
// // // // // // //                 letterSpacing: 2,
// // // // // // //                 textTransform: "uppercase",
// // // // // // //                 marginBottom: 20,
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               {col.title}
// // // // // // //             </h4>

// // // // // // //             <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// // // // // // //               {col.links.map((link) => (
// // // // // // //                 <a
// // // // // // //                   key={link}
// // // // // // //                   href="#"
// // // // // // //                   style={{
// // // // // // //                     fontSize: 14,
// // // // // // //                     color: "rgba(255,255,255,0.35)",
// // // // // // //                     textDecoration: "none",
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   {link}
// // // // // // //                 </a>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>

// // // // // // //       {/* Bottom Bar */}
// // // // // // //       <div
// // // // // // //         style={{
// // // // // // //           borderTop: "1px solid rgba(255,255,255,0.06)",
// // // // // // //           padding: "18px 60px",
// // // // // // //           display: "grid",
// // // // // // //           gridTemplateColumns: "1fr auto 1fr",
// // // // // // //           alignItems: "center",
// // // // // // //           gap: 20,
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)", margin: 0 }}>
// // // // // // //           © 2026 Innovare Biopharma LLP. All rights reserved.
// // // // // // //         </p>

// // // // // // //         <div style={{ display: "flex", gap: 28 }}>
// // // // // // //           {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((t) => (
// // // // // // //             <a
// // // // // // //               key={t}
// // // // // // //               href="#"
// // // // // // //               style={{
// // // // // // //                 fontSize: 12,
// // // // // // //                 color: "rgba(255,255,255,0.22)",
// // // // // // //                 textDecoration: "none",
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               {t}
// // // // // // //             </a>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         <div
// // // // // // //           style={{
// // // // // // //             display: "flex",
// // // // // // //             gap: 10,
// // // // // // //             justifyContent: "flex-end",
// // // // // // //             flexWrap: "wrap",
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           {["GMP Certified", "ISO 9001", "Export Approved"].map((c) => (
// // // // // // //             <span
// // // // // // //               key={c}
// // // // // // //               style={{
// // // // // // //                 fontSize: 10,
// // // // // // //                 padding: "5px 12px",
// // // // // // //                 borderRadius: 6,
// // // // // // //                 background: `${teal}14`,
// // // // // // //                 border: `1px solid ${teal}35`,
// // // // // // //                 color: teal,
// // // // // // //                 letterSpacing: 1.2,
// // // // // // //                 fontWeight: 600,
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               {c}
// // // // // // //             </span>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </footer>
// // // // // // //   );
// // // // // // // }
// // // // // // // "use client";

// // // // // // // export default function Footer() {
// // // // // // //   const navy = "#07162a";
// // // // // // //   const blue = "#1565c0";
// // // // // // //   const teal = "#4db8cc";

// // // // // // //   const cols = [
// // // // // // //     {
// // // // // // //       title: "Solutions",
// // // // // // //       links: [
// // // // // // //         "Feed Supplements",
// // // // // // //         "Sanitizers",
// // // // // // //         "Water Treatments",
// // // // // // //         "Growth Promoters",
// // // // // // //         "Vitamins & Minerals",
// // // // // // //       ],
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Company",
// // // // // // //       links: ["About Us", "Our Story", "Sustainability", "Careers", "News"],
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Support",
// // // // // // //       links: [
// // // // // // //         "Technical Helpdesk",
// // // // // // //         "Product Catalogue",
// // // // // // //         "FAQs",
// // // // // // //         "Contact Us",
// // // // // // //         "Partner Portal",
// // // // // // //       ],
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   const socialLinks = [
// // // // // // //     { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
// // // // // // //     { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
// // // // // // //     { label: "YouTube", href: "https://youtube.com", icon: "▶" },
// // // // // // //     { label: "Facebook", href: "https://facebook.com", icon: "f" },
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <footer
// // // // // // //       style={{
// // // // // // //         background: navy,
// // // // // // //         borderTop: "1px solid rgba(77,184,204,0.12)",
// // // // // // //         overflow: "visible",
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       {/* Newsletter */}
// // // // // // //       <div
// // // // // // //         style={{
// // // // // // //           background: `linear-gradient(90deg, ${blue}18, ${teal}10, ${blue}18)`,
// // // // // // //           borderBottom: "1px solid rgba(255,255,255,0.05)",
// // // // // // //           padding: "22px 60px",
// // // // // // //           display: "flex",
// // // // // // //           alignItems: "center",
// // // // // // //           justifyContent: "space-between",
// // // // // // //           flexWrap: "wrap",
// // // // // // //           gap: 16,
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         <div>
// // // // // // //           <p style={{ fontSize: 16, fontWeight: 800, color: "#fff", margin: 0 }}>
// // // // // // //             Subscribe to our Aqua Insights Newsletter
// // // // // // //           </p>
// // // // // // //           <p
// // // // // // //             style={{
// // // // // // //               fontSize: 13,
// // // // // // //               color: "rgba(255,255,255,0.4)",
// // // // // // //               marginTop: 4,
// // // // // // //               marginBottom: 0,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             Science-backed tips, product launches & exclusive offers.
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         <div
// // // // // // //           style={{
// // // // // // //             display: "flex",
// // // // // // //             borderRadius: 10,
// // // // // // //             overflow: "hidden",
// // // // // // //             border: "1px solid rgba(255,255,255,0.08)",
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           <input
// // // // // // //             type="email"
// // // // // // //             placeholder="your@email.com"
// // // // // // //             style={{
// // // // // // //               padding: "12px 18px",
// // // // // // //               background: "rgba(255,255,255,0.05)",
// // // // // // //               border: "none",
// // // // // // //               color: "#fff",
// // // // // // //               width: 240,
// // // // // // //               outline: "none",
// // // // // // //             }}
// // // // // // //           />
// // // // // // //           <button
// // // // // // //             style={{
// // // // // // //               padding: "12px 24px",
// // // // // // //               background: `linear-gradient(135deg, ${blue}, #0288d1)`,
// // // // // // //               color: "#fff",
// // // // // // //               border: "none",
// // // // // // //               fontWeight: 700,
// // // // // // //               cursor: "pointer",
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             Subscribe
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Main Grid */}
// // // // // // //       <div
// // // // // // //         style={{
// // // // // // //           maxWidth: 1400,
// // // // // // //           margin: "0 auto",
// // // // // // //           padding: "60px 60px 40px",
// // // // // // //           display: "grid",
// // // // // // //           gridTemplateColumns: "2fr 1fr 1fr 1fr",
// // // // // // //           gap: 60,
// // // // // // //           overflow: "visible",
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         {/* Brand */}
// // // // // // //         <div>
// // // // // // //           <div
// // // // // // //             style={{
// // // // // // //               display: "flex",
// // // // // // //               alignItems: "center",
// // // // // // //               gap: 14,
// // // // // // //               marginBottom: 18,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             {/* 🔥 Updated Glow Logo */}
// // // // // // //             <div
// // // // // // //               style={{
// // // // // // //                 position: "relative",
// // // // // // //                 width: 80,
// // // // // // //                 height: 80,
// // // // // // //                 display: "flex",
// // // // // // //                 alignItems: "center",
// // // // // // //                 justifyContent: "center",
// // // // // // //                 overflow: "visible",
// // // // // // //                 flexShrink: 0,
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               {/* Outer Glow */}
// // // // // // //               <div
// // // // // // //                 style={{
// // // // // // //                   position: "absolute",
// // // // // // //                   width: 100,
// // // // // // //                   height: 100,
// // // // // // //                   borderRadius: "50%",
// // // // // // //                   // background:
// // // // // // //                   //   "radial-gradient(circle, rgba(0,229,255,0.9) 0%, rgba(0,255,163,0.6) 40%, rgba(59,130,246,0.3) 70%, transparent 85%)",
// // // // // // //                   filter: "blur(30px)",
// // // // // // //                   zIndex: 0,
// // // // // // //                 }}
// // // // // // //               />

// // // // // // //               {/* Mid Glow */}
// // // // // // //               <div
// // // // // // //                 style={{
// // // // // // //                   position: "absolute",
// // // // // // //                   width: 70,
// // // // // // //                   height: 70,
// // // // // // //                   borderRadius: "50%",
// // // // // // //                   // background:
// // // // // // //                   //   "linear-gradient(135deg, rgba(0,229,255,0.6), rgba(0,255,163,0.5), rgba(59,130,246,0.4))",
// // // // // // //                   filter: "blur(16px)",
// // // // // // //                   zIndex: 0,
// // // // // // //                 }}
// // // // // // //               />

// // // // // // //               {/* Logo */}
// // // // // // //               <img
// // // // // // //                 src="/images/logo.png"
// // // // // // //                 alt="Innovare Biopharma Logo"
// // // // // // //                 style={{
// // // // // // //                   width: 54,
// // // // // // //                   height: 54,
// // // // // // //                   objectFit: "contain",
// // // // // // //                   position: "relative",
// // // // // // //                   zIndex: 2,
// // // // // // //                   filter: "drop-shadow(0 0 10px rgba(255,255,255,0.9))",
// // // // // // //                 }}
// // // // // // //               />
// // // // // // //             </div>

// // // // // // //             <div>
// // // // // // //               <p
// // // // // // //                 style={{
// // // // // // //                   fontSize: 16,
// // // // // // //                   fontWeight: 800,
// // // // // // //                   color: "#fff",
// // // // // // //                   margin: 0,
// // // // // // //                   lineHeight: 1.1,
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 Innovare Biopharma
// // // // // // //               </p>

// // // // // // //               <p
// // // // // // //                 style={{
// // // // // // //                   fontSize: 10,
// // // // // // //                   color: teal,
// // // // // // //                   letterSpacing: 2,
// // // // // // //                   textTransform: "uppercase",
// // // // // // //                   margin: "4px 0 0",
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 LLP
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           <p
// // // // // // //             style={{
// // // // // // //               fontSize: 14,
// // // // // // //               color: "rgba(255,255,255,0.35)",
// // // // // // //               lineHeight: 1.9,
// // // // // // //               maxWidth: 320,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             India's innovative manufacturer & exporter of aquaculture healthcare
// // // // // // //             products. From hatchery to harvest.
// // // // // // //           </p>

// // // // // // //           <div
// // // // // // //             style={{
// // // // // // //               marginTop: 24,
// // // // // // //               display: "flex",
// // // // // // //               flexDirection: "column",
// // // // // // //               gap: 12,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <span style={{ color: "rgba(255,255,255,0.35)" }}>
// // // // // // //               📍 Plot No: 256, H No:36-130, Defence Colony, Sainikpuri Post, Malkajgiri Mandal, Hyderabad, Telangana 500094
// // // // // // //             </span>
// // // // // // //             <span style={{ color: "rgba(255,255,255,0.35)" }}>
// // // // // // //               📧 info@innovarebiopharma.com
// // // // // // //             </span>
// // // // // // //             <span style={{ color: "rgba(255,255,255,0.35)" }}>
// // // // // // //               📞 +91 9848019985 | +914035837199
// // // // // // //             </span>
// // // // // // //           </div>

// // // // // // //           <div style={{ display: "flex", gap: 12, marginTop: 26 }}>
// // // // // // //             {socialLinks.map((s) => (
// // // // // // //               <a
// // // // // // //                 key={s.label}
// // // // // // //                 href={s.href}
// // // // // // //                 target="_blank"
// // // // // // //                 rel="noopener noreferrer"
// // // // // // //                 style={{
// // // // // // //                   width: 40,
// // // // // // //                   height: 40,
// // // // // // //                   borderRadius: 10,
// // // // // // //                   background: "rgba(255,255,255,0.05)",
// // // // // // //                   border: "1px solid rgba(255,255,255,0.08)",
// // // // // // //                   display: "flex",
// // // // // // //                   alignItems: "center",
// // // // // // //                   justifyContent: "center",
// // // // // // //                   color: "rgba(255,255,255,0.5)",
// // // // // // //                   textDecoration: "none",
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 {s.icon}
// // // // // // //               </a>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Link Columns */}
// // // // // // //         {cols.map((col) => (
// // // // // // //           <div key={col.title}>
// // // // // // //             <h4
// // // // // // //               style={{
// // // // // // //                 fontSize: 12,
// // // // // // //                 fontWeight: 700,
// // // // // // //                 color: teal,
// // // // // // //                 letterSpacing: 2,
// // // // // // //                 textTransform: "uppercase",
// // // // // // //                 marginBottom: 20,
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               {col.title}
// // // // // // //             </h4>

// // // // // // //             <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// // // // // // //               {col.links.map((link) => (
// // // // // // //                 <a
// // // // // // //                   key={link}
// // // // // // //                   href="#"
// // // // // // //                   style={{
// // // // // // //                     fontSize: 14,
// // // // // // //                     color: "rgba(255,255,255,0.35)",
// // // // // // //                     textDecoration: "none",
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   {link}
// // // // // // //                 </a>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>

// // // // // // //       {/* Bottom Bar */}
// // // // // // //       <div
// // // // // // //         style={{
// // // // // // //           borderTop: "1px solid rgba(255,255,255,0.06)",
// // // // // // //           padding: "18px 60px",
// // // // // // //           display: "grid",
// // // // // // //           gridTemplateColumns: "1fr auto 1fr",
// // // // // // //           alignItems: "center",
// // // // // // //           gap: 20,
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)", margin: 0 }}>
// // // // // // //           © 2026 Innovare Biopharma LLP. All rights reserved.
// // // // // // //         </p>

// // // // // // //         <div style={{ display: "flex", gap: 28 }}>
// // // // // // //           {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((t) => (
// // // // // // //             <a
// // // // // // //               key={t}
// // // // // // //               href="#"
// // // // // // //               style={{
// // // // // // //                 fontSize: 12,
// // // // // // //                 color: "rgba(255,255,255,0.22)",
// // // // // // //                 textDecoration: "none",
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               {t}
// // // // // // //             </a>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         <div
// // // // // // //           style={{
// // // // // // //             display: "flex",
// // // // // // //             gap: 10,
// // // // // // //             justifyContent: "flex-end",
// // // // // // //             flexWrap: "wrap",
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           {["GMP Certified", "ISO 9001", "Export Approved"].map((c) => (
// // // // // // //             <span
// // // // // // //               key={c}
// // // // // // //               style={{
// // // // // // //                 fontSize: 10,
// // // // // // //                 padding: "5px 12px",
// // // // // // //                 borderRadius: 6,
// // // // // // //                 background: `${teal}14`,
// // // // // // //                 border: `1px solid ${teal}35`,
// // // // // // //                 color: teal,
// // // // // // //                 letterSpacing: 1.2,
// // // // // // //                 fontWeight: 600,
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               {c}
// // // // // // //             </span>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </footer>
// // // // // // //   );
// // // // // // // }
// // // // // // "use client";

// // // // // // export default function Footer() {
// // // // // //   const navy = "#07162a";
// // // // // //   const blue = "#1565c0";
// // // // // //   const teal = "#4db8cc";

// // // // // //   const cols = [
// // // // // //     {
// // // // // //       title: "Solutions",
// // // // // //       links: [
// // // // // //         "Feed Supplements",
// // // // // //         "Sanitizers",
// // // // // //         "Water Treatments",
// // // // // //         "Growth Promoters",
// // // // // //         "Vitamins & Minerals",
// // // // // //       ],
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Company",
// // // // // //       links: ["About Us", "Our Story", "Sustainability", "Careers", "News"],
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Support",
// // // // // //       links: [
// // // // // //         "Technical Helpdesk",
// // // // // //         "Product Catalogue",
// // // // // //         "FAQs",
// // // // // //         "Contact Us",
// // // // // //         "Partner Portal",
// // // // // //       ],
// // // // // //     },
// // // // // //   ];

// // // // // //   const socialLinks = [
// // // // // //     { label: "LinkedIn", href: "#", icon: "in" },
// // // // // //     { label: "Twitter", href: "#", icon: "𝕏" },
// // // // // //     { label: "YouTube", href: "#", icon: "▶" },
// // // // // //     { label: "Facebook", href: "#", icon: "f" },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <footer style={{ background: navy }}>
      
// // // // // //       {/* Newsletter */}
// // // // // //       <div
// // // // // //         style={{
// // // // // //           background: `linear-gradient(90deg, ${blue}18, ${teal}10, ${blue}18)`,
// // // // // //           padding: "28px 60px",
// // // // // //           display: "flex",
// // // // // //           justifyContent: "space-between",
// // // // // //           flexWrap: "wrap",
// // // // // //           gap: 20,
// // // // // //         }}
// // // // // //       >
// // // // // //         <div>
// // // // // //           <p style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>
// // // // // //             Subscribe to our Aqua Insights Newsletter
// // // // // //           </p>
// // // // // //           <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 6 }}>
// // // // // //             Science-backed tips, product launches & exclusive offers.
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         <div style={{ display: "flex", borderRadius: 10, overflow: "hidden" }}>
// // // // // //           <input
// // // // // //             type="email"
// // // // // //             placeholder="your@email.com"
// // // // // //             style={{
// // // // // //               padding: "12px 16px",
// // // // // //               background: "rgba(255,255,255,0.06)",
// // // // // //               border: "none",
// // // // // //               color: "#fff",
// // // // // //               width: 220,
// // // // // //               fontSize: 14,
// // // // // //             }}
// // // // // //           />
// // // // // //           <button
// // // // // //             style={{
// // // // // //               padding: "12px 20px",
// // // // // //               background: `linear-gradient(135deg, ${blue}, #0288d1)`,
// // // // // //               color: "#fff",
// // // // // //               fontWeight: 700,
// // // // // //               fontSize: 14,
// // // // // //               border: "none",
// // // // // //               cursor: "pointer",
// // // // // //             }}
// // // // // //           >
// // // // // //             Subscribe
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Main Grid */}
// // // // // //       <div
// // // // // //         style={{
// // // // // //           maxWidth: 1300,
// // // // // //           margin: "0 auto",
// // // // // //           padding: "70px 60px 50px",
// // // // // //           display: "grid",
// // // // // //           gridTemplateColumns: "2fr 1fr 1fr 1fr",
// // // // // //           gap: 60,
// // // // // //         }}
// // // // // //       >
// // // // // //         {/* Brand */}
// // // // // //         <div>
// // // // // //           <div style={{ display: "flex", gap: 14, marginBottom: 20 }}>
// // // // // //             <img
// // // // // //               src="/images/logo.png"
// // // // // //               alt="logo"
// // // // // //               style={{ width: 50, height: 50 }}
// // // // // //             />

// // // // // //             <div>
// // // // // //               <p style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>
// // // // // //                 Innovare Biopharma
// // // // // //               </p>
// // // // // //               <p style={{ fontSize: 11, color: teal, letterSpacing: 2 }}>
// // // // // //                 LLP
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.45)" }}>
// // // // // //             India's innovative manufacturer & exporter of aquaculture healthcare
// // // // // //             products. From hatchery to harvest.
// // // // // //           </p>

// // // // // //           <div style={{ marginTop: 20, fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
// // // // // //             <p>📍 Hyderabad, India</p>
// // // // // //             <p>📧 info@innovarebiopharma.com</p>
// // // // // //             <p>📞 +91 9848019985</p>
// // // // // //           </div>

// // // // // //           <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
// // // // // //             {socialLinks.map((s) => (
// // // // // //               <a
// // // // // //                 key={s.label}
// // // // // //                 href={s.href}
// // // // // //                 style={{
// // // // // //                   width: 36,
// // // // // //                   height: 36,
// // // // // //                   borderRadius: 8,
// // // // // //                   background: "rgba(255,255,255,0.06)",
// // // // // //                   display: "flex",
// // // // // //                   alignItems: "center",
// // // // // //                   justifyContent: "center",
// // // // // //                   fontSize: 13,
// // // // // //                   color: "#fff",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 {s.icon}
// // // // // //               </a>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Links */}
// // // // // //         {cols.map((col) => (
// // // // // //           <div key={col.title}>
// // // // // //             <h4
// // // // // //               style={{
// // // // // //                 fontSize: 13,
// // // // // //                 fontWeight: 700,
// // // // // //                 color: teal,
// // // // // //                 marginBottom: 18,
// // // // // //                 letterSpacing: 1,
// // // // // //               }}
// // // // // //             >
// // // // // //               {col.title}
// // // // // //             </h4>

// // // // // //             <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
// // // // // //               {col.links.map((link) => (
// // // // // //                 <a
// // // // // //                   key={link}
// // // // // //                   href="#"
// // // // // //                   style={{
// // // // // //                     fontSize: 14,
// // // // // //                     color: "rgba(255,255,255,0.45)",
// // // // // //                     textDecoration: "none",
// // // // // //                     transition: "0.2s",
// // // // // //                   }}
// // // // // //                   onMouseEnter={(e) =>
// // // // // //                     (e.currentTarget.style.color = "#fff")
// // // // // //                   }
// // // // // //                   onMouseLeave={(e) =>
// // // // // //                     (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
// // // // // //                   }
// // // // // //                 >
// // // // // //                   {link}
// // // // // //                 </a>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {/* Bottom */}
// // // // // //       <div
// // // // // //         style={{
// // // // // //           borderTop: "1px solid rgba(255,255,255,0.08)",
// // // // // //           padding: "18px 60px",
// // // // // //           display: "flex",
// // // // // //           justifyContent: "space-between",
// // // // // //           flexWrap: "wrap",
// // // // // //           gap: 10,
// // // // // //           fontSize: 12,
// // // // // //           color: "rgba(255,255,255,0.35)",
// // // // // //         }}
// // // // // //       >
// // // // // //         <span>© 2026 Innovare Biopharma LLP</span>

// // // // // //         <div style={{ display: "flex", gap: 20 }}>
// // // // // //           <span>Privacy Policy</span>
// // // // // //           <span>Terms</span>
// // // // // //           <span>Cookies</span>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </footer>
// // // // // //   );
// // // // // // }
// // // // // // "use client";

// // // // // // export default function Footer() {
// // // // // //   const navy = "#07162a";
// // // // // //   const blue = "#1565c0";
// // // // // //   const teal = "#4db8cc";

// // // // // //   const cols = [
// // // // // //     {
// // // // // //       title: "Solutions",
// // // // // //       links: [
// // // // // //         "Feed Supplements",
// // // // // //         "Sanitizers",
// // // // // //         "Water Treatments",
// // // // // //         "Growth Promoters",
// // // // // //         "Vitamins & Minerals",
// // // // // //       ],
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Company",
// // // // // //       links: ["About Us", "Our Story", "Sustainability", "Careers", "News"],
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Support",
// // // // // //       links: [
// // // // // //         "Technical Helpdesk",
// // // // // //         "Product Catalogue",
// // // // // //         "FAQs",
// // // // // //         "Contact Us",
// // // // // //         "Partner Portal",
// // // // // //       ],
// // // // // //     },
// // // // // //   ];

// // // // // //   const socialLinks = [
// // // // // //     { label: "LinkedIn", href: "#", icon: "in" },
// // // // // //     { label: "Twitter", href: "#", icon: "𝕏" },
// // // // // //     { label: "YouTube", href: "#", icon: "▶" },
// // // // // //     { label: "Facebook", href: "#", icon: "f" },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <footer style={{ background: navy }}>
      
// // // // // //       {/* Newsletter */}
// // // // // //       <div
// // // // // //         style={{
// // // // // //           background: `linear-gradient(90deg, ${blue}18, ${teal}10, ${blue}18)`,
// // // // // //           padding: "28px 60px",
// // // // // //           display: "flex",
// // // // // //           justifyContent: "space-between",
// // // // // //           flexWrap: "wrap",
// // // // // //           gap: 20,
// // // // // //         }}
// // // // // //       >
// // // // // //         <div>
// // // // // //           <p style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>
// // // // // //             Subscribe to our Aqua Insights Newsletter
// // // // // //           </p>
// // // // // //           <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 6 }}>
// // // // // //             Science-backed tips, product launches & exclusive offers.
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         <div style={{ display: "flex", borderRadius: 10, overflow: "hidden" }}>
// // // // // //           <input
// // // // // //             type="email"
// // // // // //             placeholder="your@email.com"
// // // // // //             style={{
// // // // // //               padding: "12px 16px",
// // // // // //               background: "rgba(255,255,255,0.06)",
// // // // // //               border: "none",
// // // // // //               color: "#fff",
// // // // // //               width: 220,
// // // // // //               fontSize: 14,
// // // // // //               outline: "none",
// // // // // //             }}
// // // // // //           />
// // // // // //           <button
// // // // // //             style={{
// // // // // //               padding: "12px 20px",
// // // // // //               background: `linear-gradient(135deg, ${blue}, #0288d1)`,
// // // // // //               color: "#fff",
// // // // // //               fontWeight: 700,
// // // // // //               fontSize: 14,
// // // // // //               border: "none",
// // // // // //               cursor: "pointer",
// // // // // //             }}
// // // // // //           >
// // // // // //             Subscribe
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Main Grid */}
// // // // // //       <div
// // // // // //         style={{
// // // // // //           maxWidth: 1300,
// // // // // //           margin: "0 auto",
// // // // // //           padding: "70px 60px 50px",
// // // // // //           display: "grid",
// // // // // //           gridTemplateColumns: "2fr 1fr 1fr 1fr",
// // // // // //           gap: 60,
// // // // // //         }}
// // // // // //       >
// // // // // //         {/* Brand */}
// // // // // //         <div>
// // // // // //           <div style={{ display: "flex", gap: 14, marginBottom: 20 }}>
            
// // // // // //             {/* 🔥 LOGO WITH WHITE GLOW */}
// // // // // //             <div
// // // // // //               style={{
// // // // // //                 position: "relative",
// // // // // //                 width: 80,
// // // // // //                 height: 80,
// // // // // //                 display: "flex",
// // // // // //                 alignItems: "center",
// // // // // //                 justifyContent: "center",
// // // // // //               }}
// // // // // //             >
// // // // // //               {/* Outer Glow */}
// // // // // //               <div
// // // // // //                 style={{
// // // // // //                   position: "absolute",
// // // // // //                   width: 50,
// // // // // //                   height: 50,
// // // // // //                   borderRadius: "50%",
// // // // // //                   background:
// // // // // //                     "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
// // // // // //                   filter: "blur(18px)",
// // // // // //                 }}
// // // // // //               />

// // // // // //               {/* Inner Glow */}
// // // // // //               <div
// // // // // //                 style={{
// // // // // //                   position: "absolute",
// // // // // //                   width: 40,
// // // // // //                   height: 40,
// // // // // //                   borderRadius: "30%",
// // // // // //                   background:
// // // // // //                     "radial-gradient(circle, rgba(255,255,255,0.6), transparent 70%)",
// // // // // //                   filter: "blur(10px)",
// // // // // //                 }}
// // // // // //               />

// // // // // //               <img
// // // // // //                 src="/images/logo.png"
// // // // // //                 alt="logo"
// // // // // //                 style={{
// // // // // //                   width: 54,
// // // // // //                   height: 54,
// // // // // //                   position: "relative",
// // // // // //                   zIndex: 2,
// // // // // //                   objectFit: "contain",
// // // // // //                   filter: "drop-shadow(0 0 12px rgba(255,255,255,0.9))",
// // // // // //                 }}
// // // // // //               />
// // // // // //             </div>

// // // // // //             <div className="mt-5 ">
// // // // // //               <p style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>
// // // // // //                 Innovare Biopharma
// // // // // //               </p>
// // // // // //               <p style={{ fontSize: 11, color: teal, letterSpacing: 2 }}>
// // // // // //                 LLP
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.45)" }}>
// // // // // //             India's innovative manufacturer & exporter of aquaculture healthcare
// // // // // //             products. From hatchery to harvest.
// // // // // //           </p>

// // // // // //           <div style={{ marginTop: 20, fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
// // // // // //             <p>📍  
// // // // // //               <a
// // // // // //   href="https://www.google.com/maps/search/?api=1&query=Plot+No+256+Defence+Colony+Sainikpuri+Hyderabad"
// // // // // //   target="_blank"
// // // // // //   style={{
// // // // // //     color: "rgba(255,255,255,0.45)",
// // // // // //     textDecoration: "none",
// // // // // //     lineHeight: 1.7,
// // // // // //   }}
// // // // // // >
// // // // // //     Plot No: 256, H No: 36-130,<br />
// // // // // //   Defence Colony, Sainikpuri Post,<br />
// // // // // //   Malkajgiri Mandal,<br />
// // // // // //   Hyderabad, Telangana 500094
// // // // // // </a>
// // // // // //             </p>
// // // // // //             <p>📧 info@innovarebiopharma.com</p>
// // // // // //             <p>📞 +91 9848019985</p>
// // // // // //           </div>

// // // // // //           <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
// // // // // //             {socialLinks.map((s) => (
// // // // // //               <a
// // // // // //                 key={s.label}
// // // // // //                 href={s.href}
// // // // // //                 style={{
// // // // // //                   width: 36,
// // // // // //                   height: 36,
// // // // // //                   borderRadius: 8,
// // // // // //                   background: "rgba(255,255,255,0.06)",
// // // // // //                   display: "flex",
// // // // // //                   alignItems: "center",
// // // // // //                   justifyContent: "center",
// // // // // //                   fontSize: 13,
// // // // // //                   color: "#fff",
// // // // // //                   textDecoration: "none",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 {s.icon}
// // // // // //               </a>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Links */}
// // // // // //         {cols.map((col) => (
// // // // // //           <div key={col.title}>
// // // // // //             <h4
// // // // // //               style={{
// // // // // //                 fontSize: 13,
// // // // // //                 fontWeight: 700,
// // // // // //                 color: teal,
// // // // // //                 marginBottom: 18,
// // // // // //                 letterSpacing: 1,
// // // // // //               }}
// // // // // //             >
// // // // // //               {col.title}
// // // // // //             </h4>

// // // // // //             <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
// // // // // //               {col.links.map((link) => (
// // // // // //                 <a
// // // // // //                   key={link}
// // // // // //                   href="#"
// // // // // //                   style={{
// // // // // //                     fontSize: 14,
// // // // // //                     color: "rgba(255,255,255,0.45)",
// // // // // //                     textDecoration: "none",
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   {link}
// // // // // //                 </a>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {/* Bottom Bar */}
// // // // // //       <div
// // // // // //         style={{
// // // // // //           borderTop: "1px solid rgba(255,255,255,0.08)",
// // // // // //           padding: "18px 60px",
// // // // // //           display: "grid",
// // // // // //           gridTemplateColumns: "1fr auto 1fr",
// // // // // //           alignItems: "center",
// // // // // //         }}
// // // // // //       >
// // // // // //         {/* Left */}
// // // // // //         <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
// // // // // //           © 2026 Innovare Biopharma LLP
// // // // // //         </span>

// // // // // //         {/* Center */}
// // // // // //         <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
// // // // // //           <span>Privacy Policy</span>
// // // // // //           <span>Terms</span>
// // // // // //           <span>Cookies</span>
// // // // // //         </div>

// // // // // //         {/* Right Certifications */}
// // // // // //         <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
// // // // // //           {["GMP Certified", "ISO 9001", "Export Approved"].map((c) => (
// // // // // //             <span
// // // // // //               key={c}
// // // // // //               style={{
// // // // // //                 fontSize: 11,
// // // // // //                 padding: "6px 14px",
// // // // // //                 borderRadius: 8,
// // // // // //                 background: "rgba(77,184,204,0.08)",
// // // // // //                 border: "1px solid rgba(77,184,204,0.4)",
// // // // // //                 color: "#4db8cc",
// // // // // //                 letterSpacing: 1,
// // // // // //                 fontWeight: 600,
// // // // // //               }}
// // // // // //             >
// // // // // //               {c}
// // // // // //             </span>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </footer>
// // // // // //   );
// // // // // // }
// // // // // "use client";

// // // // // export default function Footer() {
// // // // //   const navy = "#07162a";
// // // // //   const blue = "#1565c0";
// // // // //   const teal = "#4db8cc";

// // // // //   const cols = [
// // // // //     {
// // // // //       title: "Solutions",
// // // // //       links: [
// // // // //         "Feed Supplements",
// // // // //         "Sanitizers",
// // // // //         "Water Treatments",
// // // // //         "Growth Promoters",
// // // // //         "Vitamins & Minerals",
// // // // //       ],
// // // // //     },
// // // // //     {
// // // // //       title: "Company",
// // // // //       links: ["About Us", "Our Story", "Sustainability", "Careers", "News"],
// // // // //     },
// // // // //     {
// // // // //       title: "Support",
// // // // //       links: [
// // // // //         "Technical Helpdesk",
// // // // //         "Product Catalogue",
// // // // //         "FAQs",
// // // // //         "Contact Us",
// // // // //         "Partner Portal",
// // // // //       ],
// // // // //     },
// // // // //   ];

// // // // //   const socialLinks = [
// // // // //     { label: "LinkedIn", href: "#", icon: "in" },
// // // // //     { label: "Twitter", href: "#", icon: "𝕏" },
// // // // //     { label: "YouTube", href: "#", icon: "▶" },
// // // // //     { label: "Facebook", href: "#", icon: "f" },
// // // // //   ];

// // // // //   return (
// // // // //     <footer style={{ background: navy }}>
      
// // // // //       {/* Newsletter */}
// // // // //       <div
// // // // //         style={{
// // // // //           background: `linear-gradient(90deg, ${blue}18, ${teal}10, ${blue}18)`,
// // // // //           padding: "28px 60px",
// // // // //           display: "flex",
// // // // //           justifyContent: "space-between",
// // // // //           flexWrap: "wrap",
// // // // //           gap: 20,
// // // // //         }}
// // // // //       >
// // // // //         <div>
// // // // //           <p style={{ fontSize: 18, fontWeight: 800, color: "#fff", margin: 0 }}>
// // // // //             Subscribe to our Aqua Insights Newsletter
// // // // //           </p>
// // // // //           <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 6 }}>
// // // // //             Science-backed tips, product launches & exclusive offers.
// // // // //           </p>
// // // // //         </div>

// // // // //         <div style={{ display: "flex", borderRadius: 10, overflow: "hidden" }}>
// // // // //           <input
// // // // //             type="email"
// // // // //             placeholder="your@email.com"
// // // // //             style={{
// // // // //               padding: "12px 16px",
// // // // //               background: "rgba(255,255,255,0.06)",
// // // // //               border: "none",
// // // // //               color: "#fff",
// // // // //               width: 220,
// // // // //               fontSize: 14,
// // // // //               outline: "none",
// // // // //             }}
// // // // //           />
// // // // //           <button
// // // // //             style={{
// // // // //               padding: "12px 20px",
// // // // //               background: `linear-gradient(135deg, ${blue}, #0288d1)`,
// // // // //               color: "#fff",
// // // // //               fontWeight: 700,
// // // // //               fontSize: 14,
// // // // //               border: "none",
// // // // //               cursor: "pointer",
// // // // //             }}
// // // // //           >
// // // // //             Subscribe
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Main Grid */}
// // // // //       <div
// // // // //         style={{
// // // // //           maxWidth: 1300,
// // // // //           margin: "0 auto",
// // // // //           padding: "70px 60px 50px",
// // // // //           display: "grid",
// // // // //           gridTemplateColumns: "2fr 1fr 1fr 1fr",
// // // // //           gap: 60,
// // // // //         }}
// // // // //       >
// // // // //         {/* Brand */}
// // // // //         <div>
// // // // //           <div style={{ display: "flex", gap: 14, marginBottom: 20 }}>
            
// // // // //             {/* LOGO WITH GLOW */}
// // // // //             <div
// // // // //               style={{
// // // // //                 position: "relative",
// // // // //                 width: 80,
// // // // //                 height: 80,
// // // // //                 display: "flex",
// // // // //                 alignItems: "center",
// // // // //                 justifyContent: "center",
// // // // //               }}
// // // // //             >
// // // // //               {/* Outer Glow */}
// // // // //               <div
// // // // //                 style={{
// // // // //                   position: "absolute",
// // // // //                   width: 100,
// // // // //                   height: 100,
// // // // //                   borderRadius: "50%",
// // // // //                   background:
// // // // //                     "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
// // // // //                   filter: "blur(18px)",
// // // // //                 }}
// // // // //               />

// // // // //               {/* Inner Glow */}
// // // // //               <div
// // // // //                 style={{
// // // // //                   position: "absolute",
// // // // //                   width: 70,
// // // // //                   height: 70,
// // // // //                   borderRadius: "50%",
// // // // //                   background:
// // // // //                     "radial-gradient(circle, rgba(255,255,255,0.6), transparent 70%)",
// // // // //                   filter: "blur(10px)",
// // // // //                 }}
// // // // //               />

// // // // //               <img
// // // // //                 src="/images/logo.png"
// // // // //                 alt="logo"
// // // // //                 style={{
// // // // //                   width: 54,
// // // // //                   height: 54,
// // // // //                   position: "relative",
// // // // //                   zIndex: 2,
// // // // //                   objectFit: "contain",
// // // // //                   filter: "drop-shadow(0 0 12px rgba(255,255,255,0.9))",
// // // // //                 }}
// // // // //               />
// // // // //             </div>

// // // // //             <div style={{ marginTop: 20}}>
// // // // //               <p style={{ fontSize: 18, fontWeight: 800, color: "#fff", margin: 0 }}>
// // // // //                 Innovare Biopharma
// // // // //               </p>
// // // // //               <p style={{ fontSize: 11, color: teal, letterSpacing: 2, margin: 0 }}>
// // // // //                 LLP
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>

// // // // //           <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.45)" }}>
// // // // //             India's innovative manufacturer & exporter of aquaculture healthcare
// // // // //             products. From hatchery to harvest.
// // // // //           </p>

// // // // //           {/* ADDRESS BLOCK */}
// // // // //           <div
// // // // //             style={{
// // // // //               marginTop: 22,
// // // // //               fontSize: 13,
// // // // //               color: "rgba(255,255,255,0.45)",
// // // // //               lineHeight: 1.75,
// // // // //             }}
// // // // //           >
// // // // //             <a
// // // // //               href="https://www.google.com/maps/search/?api=1&query=Plot+No+256+Defence+Colony+Sainikpuri+Hyderabad"
// // // // //               target="_blank"
// // // // //               style={{
// // // // //                 display: "block",
// // // // //                 color: "rgba(255,255,255,0.45)",
// // // // //                 textDecoration: "none",
// // // // //                 marginBottom: 10,
// // // // //               }}
// // // // //             >
// // // // //               📍 Plot No: 256, H No: 36-130,<br />
// // // // //               Defence Colony, Sainikpuri Post,<br />
// // // // //               Malkajgiri Mandal,<br />
// // // // //               Hyderabad, Telangana 500094
// // // // //             </a>

// // // // //             <p style={{ margin: "6px 0" }}>
// // // // //               📧 info@innovarebiopharma.com
// // // // //             </p>

// // // // //             <p style={{ margin: "6px 0" }}>
// // // // //               📞 +91 9848019985 | +91 4035837199
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* SOCIAL */}
// // // // //           <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
// // // // //             {socialLinks.map((s) => (
// // // // //               <a
// // // // //                 key={s.label}
// // // // //                 href={s.href}
// // // // //                 style={{
// // // // //                   width: 36,
// // // // //                   height: 36,
// // // // //                   borderRadius: 8,
// // // // //                   background: "rgba(255,255,255,0.06)",
// // // // //                   display: "flex",
// // // // //                   alignItems: "center",
// // // // //                   justifyContent: "center",
// // // // //                   fontSize: 13,
// // // // //                   color: "#fff",
// // // // //                   textDecoration: "none",
// // // // //                 }}
// // // // //               >
// // // // //                 {s.icon}
// // // // //               </a>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Links */}
// // // // //         {cols.map((col) => (
// // // // //           <div key={col.title}>
// // // // //             <h4
// // // // //               style={{
// // // // //                 fontSize: 13,
// // // // //                 fontWeight: 700,
// // // // //                 color: teal,
// // // // //                 marginBottom: 18,
// // // // //                 letterSpacing: 1,
// // // // //               }}
// // // // //             >
// // // // //               {col.title}
// // // // //             </h4>

// // // // //             <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
// // // // //               {col.links.map((link) => (
// // // // //                 <a
// // // // //                   key={link}
// // // // //                   href="#"
// // // // //                   style={{
// // // // //                     fontSize: 14,
// // // // //                     color: "rgba(255,255,255,0.45)",
// // // // //                     textDecoration: "none",
// // // // //                   }}
// // // // //                 >
// // // // //                   {link}
// // // // //                 </a>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Bottom Bar */}
// // // // //       <div
// // // // //         style={{
// // // // //           borderTop: "1px solid rgba(255,255,255,0.08)",
// // // // //           padding: "18px 60px",
// // // // //           display: "grid",
// // // // //           gridTemplateColumns: "1fr auto 1fr",
// // // // //           alignItems: "center",
// // // // //         }}
// // // // //       >
// // // // //         <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
// // // // //           © 2026 Innovare Biopharma LLP
// // // // //         </span>

// // // // //         <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
// // // // //           <span>Privacy Policy</span>
// // // // //           <span>Terms</span>
// // // // //           <span>Cookies</span>
// // // // //         </div>

// // // // //         <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
// // // // //           {["GMP Certified", "ISO 9001", "Export Approved"].map((c) => (
// // // // //             <span
// // // // //               key={c}
// // // // //               style={{
// // // // //                 fontSize: 11,
// // // // //                 padding: "6px 14px",
// // // // //                 borderRadius: 8,
// // // // //                 background: "rgba(77,184,204,0.08)",
// // // // //                 border: "1px solid rgba(77,184,204,0.4)",
// // // // //                 color: "#4db8cc",
// // // // //                 letterSpacing: 1,
// // // // //                 fontWeight: 600,
// // // // //               }}
// // // // //             >
// // // // //               {c}
// // // // //             </span>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </footer>
// // // // //   );
// // // // // }
// // // // // "use client";

// // // // // export default function Footer() {
// // // // // const navy = "#07162a";
// // // // // const blue = "#1565c0";
// // // // // const teal = "#4db8cc";

// // // // // const cols = [
// // // // // {
// // // // // title: "Solutions",
// // // // // links: [
// // // // // "Feed Supplements",
// // // // // "Sanitizers",
// // // // // "Water Treatments",
// // // // // "Growth Promoters",
// // // // // "Vitamins & Minerals",
// // // // // "Gut Probiotics",
// // // // // "Immunity",
// // // // // ],
// // // // // },
// // // // // {
// // // // // title: "Company",
// // // // // links: ["About Us", "Our Solutions", "Products" ,"Sustainability", "Certificates", "Events","Contact"],
// // // // // },
// // // // // {
// // // // // title: "Support",
// // // // // links: [
// // // // // "Technical Helpdesk",
// // // // // "Product Catalogue",
// // // // // "FAQs",
// // // // // "Contact Us",
// // // // // "Partner Portal",
// // // // // ],
// // // // // },
// // // // // ];

// // // // // const socialLinks = [
// // // // // { label: "LinkedIn", href: "#", icon: "in" },
// // // // // { label: "Twitter", href: "#", icon: "𝕏" },
// // // // // { label: "YouTube", href: "#", icon: "▶" },
// // // // // { label: "Facebook", href: "#", icon: "f" },
// // // // // ];

// // // // // return (
// // // // // <footer style={{ background: navy }}>
// // // // //   {/* Newsletter */}
// // // // //   {/* <div
// // // // //     style={{
// // // // //       // background: `linear-gradient(90deg, ${blue}18, ${teal}10, ${blue}18)`,
// // // // //       background:"gray-200",
// // // // //       padding: "18px 50px",
// // // // //       display: "flex",
// // // // //       justifyContent: "space-between",
// // // // //       flexWrap: "wrap",
// // // // //       gap: 16,
// // // // //     }}
// // // // //   >
// // // // //     <div>
// // // // //       <p style={{ fontSize: 16, fontWeight: 800, color: "#ffffff00", margin: 0 }}>
// // // // //         Subscribe to our Aqua Insights Newsletter
// // // // //       </p>
// // // // //       <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>
// // // // //         Science-backed tips, product launches & exclusive offers.
// // // // //       </p>
// // // // //     </div>

// // // // //     <div style={{ display: "flex", borderRadius: 8, overflow: "hidden" }}>
// // // // //       <input
// // // // //         type="email"
// // // // //         placeholder="your@email.com"
// // // // //         style={{
// // // // //           padding: "10px 14px",
// // // // //           background: "rgba(255,255,255,0.06)",
// // // // //           border: "none",
// // // // //           color: "#fff",
// // // // //           width: 200,
// // // // //           fontSize: 13,
// // // // //           outline: "none",
// // // // //         }}
// // // // //       />
// // // // //       <button
// // // // //         style={{
// // // // //           padding: "10px 16px",
// // // // //           background: `linear-gradient(135deg, ${blue}, #0288d1)`,
// // // // //           color: "#fff",
// // // // //           fontWeight: 700,
// // // // //           fontSize: 13,
// // // // //           border: "none",
// // // // //           cursor: "pointer",
// // // // //         }}
// // // // //       >
// // // // //         Subscribe
// // // // //       </button>
// // // // //     </div>
// // // // //   </div> */}
// // // // //   <div
// // // // //   style={{
// // // // //     padding: "30px 20px",
// // // // //     display: "flex",
// // // // //     justifyContent: "center",
// // // // //   }}
// // // // // >
// // // // //   {/* <div
// // // // //     style={{
// // // // //       width: "100%",
// // // // //       maxWidth: 1100,
// // // // //       background: "linear-gradient(135deg, #0f172a, #1e293b)",
// // // // //       borderRadius: 16,
// // // // //       padding: "22px 28px",
// // // // //       display: "flex",
// // // // //       justifyContent: "space-between",
// // // // //       alignItems: "center",
// // // // //       flexWrap: "wrap",
// // // // //       gap: 20,
// // // // //       boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
// // // // //       marginTop: "-60px",
// // // // // position: "relative",
// // // // // zIndex: 10,
// // // // //     }}
// // // // //   >
// // // // //     {/* LEFT CONTENT */}
// // // // //     {/* <div style={{ maxWidth: 520 }}>
// // // // //       <p
// // // // //         style={{
// // // // //           fontSize: 12,
// // // // //           fontWeight: 600,
// // // // //           color: "#38bdf8",
// // // // //           margin: 0,
// // // // //           marginBottom: 6,
// // // // //           letterSpacing: 1,
// // // // //         }}
// // // // //       >
// // // // //         STAY UPDATED
// // // // //       </p>

// // // // //   <h3
// // // // //     style={{
// // // // //       fontSize: 18,
// // // // //       fontWeight: 700,
// // // // //       color: "#ffffff",
// // // // //       margin: 0,
// // // // //       lineHeight: 1.4,
// // // // //     }}
// // // // //   >
// // // // //     Get aquaculture insights & product updates
// // // // //   </h3>

// // // // //   <p
// // // // //     style={{
// // // // //       fontSize: 13,
// // // // //       color: "rgba(255,255,255,0.6)",
// // // // //       marginTop: 6,
// // // // //     }}
// // // // //   >
// // // // //     No spam. Only useful science-backed content.
// // // // //   </p>
// // // // // </div> */}

// // // // // {/* RIGHT INPUT
// // // // // <div
// // // // //   style={{
// // // // //     display: "flex",
// // // // //     alignItems: "center",
// // // // //     background: "#ffffff",
// // // // //     borderRadius: 999,
// // // // //     padding: "6px",
// // // // //     minWidth: 280,
// // // // //     flexGrow: 1,
// // // // //     maxWidth: 420,
// // // // //   }}
// // // // // >
// // // // //   <input
// // // // //     type="email"
// // // // //     placeholder="Enter your email"
// // // // //     style={{
// // // // //       flex: 1,
// // // // //       border: "none",
// // // // //       outline: "none",
// // // // //       padding: "10px 14px",
// // // // //       fontSize: 13,
// // // // //       color: "#111827",
// // // // //       borderRadius: 999,
// // // // //     }}
// // // // //   />

// // // // //   <button
// // // // //     style={{
// // // // //       padding: "10px 18px",
// // // // //       borderRadius: 999,
// // // // //       border: "none",
// // // // //       background: "linear-gradient(135deg, #1565c0, #0288d1)",
// // // // //       color: "#fff",
// // // // //       fontWeight: 600,
// // // // //       fontSize: 13,
// // // // //       cursor: "pointer",
// // // // //       whiteSpace: "nowrap",
// // // // //     }}
// // // // //   >
// // // // //     Subscribe
// // // // //   </button>
// // // // // </div> */}
// // // // // {/* 
// // // // //   </div> */}
// // // // // </div>


// // // // //   {/* Main Grid */}
// // // // //   <div
// // // // //     style={{
// // // // //       maxWidth: 1300,
// // // // //       margin: "0 auto",
// // // // //       padding: "45px 50px 30px",
// // // // //       display: "grid",
// // // // //       gridTemplateColumns: "2fr 1fr 1fr 1fr",
// // // // //       gap: 40,
// // // // //       alignItems: "start",
// // // // //     }}
// // // // //   >
// // // // //     {/* Brand */}
// // // // //     <div>
// // // // //       <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        
// // // // //         {/* Logo */}
// // // // //         <div
// // // // //           style={{
// // // // //             position: "relative",
// // // // //             width: 60,
// // // // //             height: 60,
// // // // //             display: "flex",
// // // // //             alignItems: "center",
// // // // //             justifyContent: "center",
// // // // //           }}
// // // // //         >
// // // // //           <div
// // // // //             style={{
// // // // //               position: "absolute",
// // // // //               width: 80,
// // // // //               height: 80,
// // // // //               borderRadius: "50%",
// // // // //               background:
// // // // //                 "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)",
// // // // //               filter: "blur(14px)",
// // // // //             }}
// // // // //           />

// // // // //           <img
// // // // //             src="/images/logo.png"
// // // // //             alt="logo"
// // // // //             style={{
// // // // //               width: 44,
// // // // //               height: 44,
// // // // //               position: "relative",
// // // // //               zIndex: 2,
// // // // //               objectFit: "contain",
// // // // //             }}
// // // // //           />
// // // // //         </div>

// // // // //         <div style={{ marginTop: 12 }}>
// // // // //           <p style={{ fontSize: 16, fontWeight: 800, color: "#fff", margin: 0 }}>
// // // // //             Innovare Biopharma 
// // // // //             <p style={{ fontSize: 10, color: teal, letterSpacing: 2, margin: 0 }}>
// // // // //             LLP
// // // // //           </p>
// // // // //           </p>
          
// // // // //         </div>
// // // // //       </div>

// // // // //       <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.45)" }}>
// // // // //         India's innovative manufacturer & exporter of aquaculture <br></br>healthcare
// // // // //         products. From hatchery to harvest.
// // // // //       </p>

// // // // //       {/* Address */}
// // // // //       <div
// // // // //         style={{
// // // // //           marginTop: 16,
// // // // //           fontSize: 12,
// // // // //           color: "rgba(255,255,255,0.45)",
// // // // //           lineHeight: 1.6,
// // // // //         }}
// // // // //       >
// // // // //         <p style={{ margin: "4px 0" }}>
// // // // //           📍 Plot No: 256, H No:36-130, Defence Colony,
// // // // //             Sainikpuri Post,<br></br> Malkajgiri Mandal, Hyderabad,
// // // // //             Telangana 500094
// // // // //         </p>
// // // // //         <p style={{ margin: "4px 0" }}>
// // // // //           📧 info@innovarebiopharma.com
// // // // //         </p>
// // // // //         <p style={{ margin: "4px 0" }}>
// // // // //           📞 +91 9848019985 | +91 4035837199
// // // // //         </p>
// // // // //       </div>

// // // // //       {/* Social */}
// // // // //       <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
// // // // //         {socialLinks.map((s) => (
// // // // //           <a
// // // // //             key={s.label}
// // // // //             href={s.href}
// // // // //             style={{
// // // // //               width: 30,
// // // // //               height: 30,
// // // // //               borderRadius: 6,
// // // // //               background: "rgba(255,255,255,0.06)",
// // // // //               display: "flex",
// // // // //               alignItems: "center",
// // // // //               justifyContent: "center",
// // // // //               fontSize: 12,
// // // // //               color: "#fff",
// // // // //               textDecoration: "none",
// // // // //             }}
// // // // //           >
// // // // //             {s.icon}
// // // // //           </a>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>

// // // // //     {/* Links */}
// // // // //     {cols.map((col) => (
// // // // //       <div key={col.title}>
// // // // //         <h4
// // // // //           style={{
// // // // //             fontSize: 12,
// // // // //             fontWeight: 700,
// // // // //             color: teal,
// // // // //             marginBottom: 12,
// // // // //             letterSpacing: 1,
// // // // //           }}
// // // // //         >
// // // // //           {col.title}
// // // // //         </h4>

// // // // //         <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
// // // // //           {col.links.map((link) => (
// // // // //             <a
// // // // //               key={link}
// // // // //               href="#"
// // // // //               style={{
// // // // //                 fontSize: 13,
// // // // //                 color: "rgba(255,255,255,0.45)",
// // // // //                 textDecoration: "none",
// // // // //               }}
// // // // //             >
// // // // //               {link}
// // // // //             </a>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     ))}
// // // // //   </div>

// // // // //   {/* Bottom Bar */}
// // // // //   <div
// // // // //     style={{
// // // // //       borderTop: "1px solid rgba(255,255,255,0.08)",
// // // // //       padding: "12px 50px",
// // // // //       display: "grid",
// // // // //       gridTemplateColumns: "1fr auto 1fr",
// // // // //       alignItems: "center",
// // // // //     }}
// // // // //   >
// // // // //     <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
// // // // //       © 2026 Innovare Biopharma LLP
// // // // //     </span>

// // // // //     <div style={{ display: "flex", gap: 16, justifyContent: "center", fontSize: 11 }}>
// // // // //       <span>Privacy Policy</span>
// // // // //       <span>Terms</span>
// // // // //       <span>Cookies</span>
// // // // //     </div>

// // // // //     <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
// // // // //       {["GMP Certified", "ISO 9001", "Export Approved"].map((c) => (
// // // // //         <span
// // // // //           key={c}
// // // // //           style={{
// // // // //             fontSize: 10,
// // // // //             padding: "4px 10px",
// // // // //             borderRadius: 6,
// // // // //             background: "rgba(77,184,204,0.08)",
// // // // //             border: "1px solid rgba(77,184,204,0.4)",
// // // // //             color: "#4db8cc",
// // // // //             letterSpacing: 1,
// // // // //             fontWeight: 600,
// // // // //           }}
// // // // //         >
// // // // //           {c}
// // // // //         </span>
// // // // //       ))}
// // // // //     </div>
// // // // //   </div>
// // // // // </footer>

// // // // // );
// // // // // }

// // // // // "use client";

// // // // // export default function Footer() {
// // // // //   const blue    = "#2A5DA8";
// // // // //   const accent  = "#0EA5E9";
// // // // //   const teal    = "#4db8cc";

// // // // //   const cols = [
// // // // //     {
// // // // //       title: "Solutions",
// // // // //       links: [
// // // // //         "Feed Supplements", "Sanitizers", "Water Treatments",
// // // // //         "Growth Promoters", "Vitamins & Minerals", "Gut Probiotics", "Immunity",
// // // // //       ],
// // // // //     },
// // // // //     {
// // // // //       title: "Company",
// // // // //       links: ["About Us", "Our Solutions", "Products", "Sustainability", "Certificates", "Events", "Contact"],
// // // // //     },
// // // // //     {
// // // // //       title: "Support",
// // // // //       links: ["Technical Helpdesk", "Product Catalogue", "FAQs", "Contact Us",],
// // // // //     },
// // // // //   ];

// // // // //   const socialLinks = [
// // // // //     { label: "LinkedIn", href: "#", icon: "in" },
// // // // //     { label: "Twitter",  href: "#", icon: "𝕏"  },
// // // // //     { label: "YouTube",  href: "#", icon: "▶"  },
// // // // //     { label: "Facebook", href: "#", icon: "f"  },
// // // // //   ];

// // // // //   return (
// // // // //     <footer style={{ position: "relative", overflow: "hidden", fontFamily: "'Trebuchet MS', sans-serif" }}>

// // // // //       {/* ── Background layers ── */}
// // // // //       {/* Base deep navy */}
// // // // //       <div style={{
// // // // //         position: "absolute", inset: 0,
// // // // //         background: "linear-gradient(160deg, #040e24 0%, #071530 45%, #051228 100%)",
// // // // //         zIndex: 0,
// // // // //       }} />

// // // // //       {/* Large top-left radial glow */}
// // // // //       <div style={{
// // // // //         position: "absolute", top: -120, left: -80,
// // // // //         width: 500, height: 500, borderRadius: "50%",
// // // // //         background: `radial-gradient(circle, rgba(42,93,168,0.28) 0%, transparent 70%)`,
// // // // //         zIndex: 0, pointerEvents: "none",
// // // // //       }} />

// // // // //       {/* Mid-right accent glow */}
// // // // //       <div style={{
// // // // //         position: "absolute", top: "30%", right: -60,
// // // // //         width: 360, height: 360, borderRadius: "50%",
// // // // //         background: `radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 70%)`,
// // // // //         zIndex: 0, pointerEvents: "none",
// // // // //       }} />

// // // // //       {/* Bottom-center subtle glow */}
// // // // //       <div style={{
// // // // //         position: "absolute", bottom: -60, left: "40%",
// // // // //         width: 420, height: 300, borderRadius: "50%",
// // // // //         background: `radial-gradient(circle, rgba(42,93,168,0.18) 0%, transparent 70%)`,
// // // // //         zIndex: 0, pointerEvents: "none",
// // // // //       }} />

// // // // //       {/* Dot grid texture */}
// // // // //       <div style={{
// // // // //         position: "absolute", inset: 0,
// // // // //         backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
// // // // //         backgroundSize: "28px 28px",
// // // // //         zIndex: 0, pointerEvents: "none",
// // // // //       }} />

// // // // //       {/* Diagonal mesh lines top-right */}
// // // // //       <svg
// // // // //         style={{ position: "absolute", top: 0, right: 0, width: 340, height: 280, opacity: 0.06, zIndex: 0, pointerEvents: "none" }}
// // // // //         viewBox="0 0 340 280" fill="none"
// // // // //       >
// // // // //         {[0,1,2,3,4,5,6,7,8].map(i => (
// // // // //           <line key={i} x1={i * 42} y1="0" x2={i * 42 + 280} y2="280" stroke="#60a5fa" strokeWidth="1" />
// // // // //         ))}
// // // // //       </svg>

// // // // //       {/* Top border glow line */}
// // // // //       <div style={{
// // // // //         position: "absolute", top: 0, left: 0, right: 0, height: 2,
// // // // //         background: `linear-gradient(90deg, transparent, ${blue}, ${accent}, ${blue}, transparent)`,
// // // // //         zIndex: 1,
// // // // //       }} />

// // // // //       {/* ───────────── MAIN GRID ───────────── */}
// // // // //       <div style={{
// // // // //         position: "relative", zIndex: 2,
// // // // //         maxWidth: 1300, margin: "0 auto",
// // // // //         padding: "60px 50px 32px",
// // // // //         display: "grid",
// // // // //         gridTemplateColumns: "2fr 1fr 1fr 1fr",
// // // // //         gap: 40,
// // // // //         alignItems: "start",
// // // // //       }}>

// // // // //         {/* ── Brand column ── */}
// // // // //         <div>
// // // // //           <div style={{ display: "flex", gap: 12, marginBottom: 18, alignItems: "center" }}>
// // // // //             {/* Logo glow */}
// // // // //             <div style={{ position: "relative", width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center" }}>
// // // // //               <div style={{
// // // // //                 position: "absolute", width: 72, height: 72, borderRadius: "50%",
// // // // //                 background: "radial-gradient(circle, rgba(42,93,168,0.5) 0%, transparent 70%)",
// // // // //                 filter: "blur(10px)",
// // // // //               }} />
// // // // //               <img
// // // // //     src="/images/logo.png"
// // // // //     alt="Logo"
// // // // //     style={{
// // // // //       width: 80,
// // // // //       height: 80,
// // // // //       objectFit: "contain",
// // // // //       filter: `
// // // // //         drop-shadow(0 0 8px rgba(255,255,255,0.9))
// // // // //         drop-shadow(0 0 16px rgba(255,255,255,0.7))
// // // // //         drop-shadow(0 0 24px rgba(255,255,255,0.5))
// // // // //       `,
// // // // //     }}
// // // // //   />
// // // // //             </div>
// // // // //            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
// // // // //   <p
// // // // //     style={{
// // // // //       fontSize: 20,
// // // // //       fontWeight: 800,
// // // // //       color: "#fff",
// // // // //       margin: 0,
// // // // //       lineHeight: 1.2,
// // // // //     }}
// // // // //   >
// // // // //     Innovare Biopharma 
// // // // //   </p>

// // // // //   <p
// // // // //     style={{
// // // // //       fontSize: 10,
// // // // //       color: teal,
// // // // //       letterSpacing: 2,
// // // // //       margin: 0,
// // // // //       fontWeight: 700,
// // // // //     }}
// // // // //   >
// // // // //       LLP
// // // // //   </p>
// // // // // </div>
// // // // //           </div>

// // // // //           <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", marginBottom: 18 }}>
// // // // //             India's innovative manufacturer & exporter of aquaculture products. From hatchery to harvest.
// // // // //           </p>

// // // // //           {/* Address block */}
// // // // //           <div style={{
// // // // //             background: "rgba(42,93,168,0.1)",
// // // // //             border: "1px solid rgba(42,93,168,0.22)",
// // // // //             borderRadius: 12, padding: "14px 16px",
// // // // //             fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.7,
// // // // //             marginBottom: 18,
// // // // //           }}>
// // // // //             <p style={{ margin: "0 0 6px" }}>
// // // // //               📍 Plot No: 256, H No:36-130, Defence Colony,<br />
// // // // //               Sainikpuri Post, Malkajgiri Mandal,<br />
// // // // //               Hyderabad, Telangana 500094
// // // // //             </p>
// // // // //             <p style={{ margin: "4px 0" }}>📧 info@innovarebiopharma.com</p>
// // // // //             <p style={{ margin: "4px 0" }}>📞 +91 7799872555 | +91 040-35837199</p>
// // // // //           </div>

// // // // //           {/* Social icons */}
// // // // //           <div style={{ display: "flex", gap: 8 }}>
// // // // //             {socialLinks.map(s => (
// // // // //               <a
// // // // //                 key={s.label}
// // // // //                 href={s.href}
// // // // //                 style={{
// // // // //                   width: 32, height: 32, borderRadius: 8,
// // // // //                   background: "rgba(42,93,168,0.18)",
// // // // //                   border: "1px solid rgba(42,93,168,0.3)",
// // // // //                   display: "flex", alignItems: "center", justifyContent: "center",
// // // // //                   fontSize: 12, color: "#fff", textDecoration: "none",
// // // // //                   transition: "all .2s",
// // // // //                 }}
// // // // //                 onMouseEnter={e => {
// // // // //                   (e.currentTarget as HTMLElement).style.background = blue;
// // // // //                   (e.currentTarget as HTMLElement).style.borderColor = blue;
// // // // //                 }}
// // // // //                 onMouseLeave={e => {
// // // // //                   (e.currentTarget as HTMLElement).style.background = "rgba(42,93,168,0.18)";
// // // // //                   (e.currentTarget as HTMLElement).style.borderColor = "rgba(42,93,168,0.3)";
// // // // //                 }}
// // // // //               >
// // // // //                 {s.icon}
// // // // //               </a>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* ── Link columns ── */}
// // // // //         {cols.map(col => (
// // // // //           <div key={col.title}>
// // // // //             <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
// // // // //               <div style={{ width: 3, height: 14, borderRadius: 2, background: `linear-gradient(180deg, ${blue}, ${accent})` }} />
// // // // //               <h4 style={{ fontSize: 12, fontWeight: 700, color: "#fff", margin: 0, letterSpacing: "1px", textTransform: "uppercase" }}>
// // // // //                 {col.title}
// // // // //               </h4>
// // // // //             </div>
// // // // //             <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
// // // // //               {col.links.map(link => (
// // // // //                 <a
// // // // //                   key={link}
// // // // //                   href="#"
// // // // //                   style={{
// // // // //                     fontSize: 13, color: "rgba(255,255,255,0.42)",
// // // // //                     textDecoration: "none", transition: "color .2s",
// // // // //                     display: "flex", alignItems: "center", gap: 6,
// // // // //                   }}
// // // // //                   onMouseEnter={e => {
// // // // //                     (e.currentTarget as HTMLElement).style.color = "#93c5fd";
// // // // //                   }}
// // // // //                   onMouseLeave={e => {
// // // // //                     (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.42)";
// // // // //                   }}
// // // // //                 >
// // // // //                   <span style={{ fontSize: 8, color: "rgba(42,93,168,0.5)", flexShrink: 0 }}>▶</span>
// // // // //                   {link}
// // // // //                 </a>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* ───────────── DIVIDER ───────────── */}
// // // // //       <div style={{
// // // // //         position: "relative", zIndex: 2,
// // // // //         maxWidth: 1300, margin: "0 auto", padding: "0 50px",
// // // // //       }}>
// // // // //         <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(42,93,168,0.5), rgba(14,165,233,0.3), rgba(42,93,168,0.5), transparent)" }} />
// // // // //       </div>

// // // // //       {/* ───────────── BOTTOM BAR ───────────── */}
// // // // //       <div style={{
// // // // //         position: "relative", zIndex: 2,
// // // // //         padding: "16px 50px",
// // // // //         display: "grid",
// // // // //         gridTemplateColumns: "1fr auto 1fr",
// // // // //         alignItems: "center",
// // // // //         maxWidth: 1300, margin: "0 auto",
// // // // //         gap: 16,
// // // // //       }}>
// // // // //         <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
// // // // //           © 2026 Innovare Biopharma LLP. All rights reserved.
// // // // //         </span>

// // // // //         <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
// // // // //           {["Privacy Policy", "Terms", "Cookies"].map(t => (
// // // // //             <a
// // // // //               key={t}
// // // // //               href="#"
// // // // //               style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
// // // // //               onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#93c5fd")}
// // // // //               onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
// // // // //             >
// // // // //               {t}
// // // // //             </a>
// // // // //           ))}
// // // // //         </div>

// // // // //         <div
// // // // //   style={{
// // // // //     position: "relative",
// // // // //     zIndex: 2,
// // // // //     padding: "16px 50px",
// // // // //     display: "grid",
// // // // //     gridTemplateColumns: "1fr auto 1fr", // left | center | right
// // // // //     alignItems: "center",
// // // // //     maxWidth: 1300,
// // // // //     margin: "0 auto",
// // // // //     gap: 16,
// // // // //   }}
// // // // // >
// // // // //   {/* Left: copyright */}
// // // // //   {/* <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
// // // // //     © 2026 Innovare Biopharma LLP. All rights reserved.
// // // // //   </span> */}

// // // // //   {/* Middle: empty / placeholder */}
// // // // //   <div style={{}} />

// // // // //   {/* Right: Privacy Policy, Terms, Cookies */}
// // // // //   <div style={{ display: "flex", gap: 20, justifyContent: "flex-end" }}>
// // // // //     {["Privacy Policy", "Terms", "Cookies"].map((t) => (
// // // // //       <a
// // // // //         key={t}
// // // // //         href="#"
// // // // //         style={{
// // // // //           fontSize: 11,
// // // // //           color: "rgba(255,255,255,0.3)",
// // // // //           textDecoration: "none",
// // // // //         }}
// // // // //         onMouseEnter={(e) => {
// // // // //           (e.currentTarget as HTMLElement).style.color = "#93c5fd";
// // // // //         }}
// // // // //         onMouseLeave={(e) => {
// // // // //           (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)";
// // // // //         }}
// // // // //       >
// // // // //         {t}
// // // // //       </a>
// // // // //     ))}
// // // // //   </div>
// // // // // </div>
// // // // //       </div>

// // // // //     </footer>
// // // // //   );
// // // // // }
// // // // "use client";

// // // // export default function Footer() {
// // // //   const blue   = "#2A5DA8";
// // // //   const accent = "#0EA5E9";
// // // //   const teal   = "#4db8cc";

// // // //   const cols = [
// // // //     {
// // // //       title: "Solutions",
// // // //       links: [
// // // //         "Feed Supplements", "Sanitizers", "Water Treatments",
// // // //         "Growth Promoters", "Vitamins & Minerals", "Gut Probiotics", "Immunity",
// // // //       ],
// // // //     },
// // // //     {
// // // //       title: "Company",
// // // //       links: ["About Us", "Our Solutions", "Products", "Sustainability", "Certificates", "Events", "Contact"],
// // // //     },
// // // //     {
// // // //       title: "Support",
// // // //       links: ["Product Catalogue", "FAQs", "Contact Us"],
// // // //     },
    
// // // //   ];

// // // //   const socialLinks = [
// // // //     { label: "LinkedIn", href: "#", icon: "in" },
// // // //     { label: "Twitter",  href: "#", icon: "𝕏"  },
// // // //     { label: "YouTube",  href: "#", icon: "▶"  },
// // // //     { label: "Facebook", href: "#", icon: "f"  },
// // // //   ];

// // // //   return (
// // // //     <footer style={{ position: "relative", overflow: "hidden", fontFamily: "'Trebuchet MS', sans-serif" }}>

// // // //       {/* ── Background layers ── */}
// // // //       <div style={{
// // // //         position: "absolute", inset: 0,
// // // //         background: "linear-gradient(160deg, #040e24 0%, #071530 45%, #051228 100%)",
// // // //         zIndex: 0,
// // // //       }} />
// // // //       <div style={{
// // // //         position: "absolute", top: -120, left: -80,
// // // //         width: 500, height: 500, borderRadius: "50%",
// // // //         background: "radial-gradient(circle, rgba(42,93,168,0.28) 0%, transparent 70%)",
// // // //         zIndex: 0, pointerEvents: "none",
// // // //       }} />
// // // //       <div style={{
// // // //         position: "absolute", top: "30%", right: -60,
// // // //         width: 360, height: 360, borderRadius: "50%",
// // // //         background: "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 70%)",
// // // //         zIndex: 0, pointerEvents: "none",
// // // //       }} />
// // // //       <div style={{
// // // //         position: "absolute", bottom: -60, left: "40%",
// // // //         width: 420, height: 300, borderRadius: "50%",
// // // //         background: "radial-gradient(circle, rgba(42,93,168,0.18) 0%, transparent 70%)",
// // // //         zIndex: 0, pointerEvents: "none",
// // // //       }} />
// // // //       <div style={{
// // // //         position: "absolute", inset: 0,
// // // //         backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
// // // //         backgroundSize: "28px 28px",
// // // //         zIndex: 0, pointerEvents: "none",
// // // //       }} />
// // // //       <svg
// // // //         style={{ position: "absolute", top: 0, right: 0, width: 340, height: 280, opacity: 0.06, zIndex: 0, pointerEvents: "none" }}
// // // //         viewBox="0 0 340 280" fill="none"
// // // //       >
// // // //         {[0,1,2,3,4,5,6,7,8].map(i => (
// // // //           <line key={i} x1={i * 42} y1="0" x2={i * 42 + 280} y2="280" stroke="#60a5fa" strokeWidth="1" />
// // // //         ))}
// // // //       </svg>
// // // //       {/* Top border glow */}
// // // //       <div style={{
// // // //         position: "absolute", top: 0, left: 0, right: 0, height: 2,
// // // //         background: `linear-gradient(90deg, transparent, ${blue}, ${accent}, ${blue}, transparent)`,
// // // //         zIndex: 1,
// // // //       }} />

// // // //       {/* ── MAIN GRID ── */}
// // // //       <div style={{
// // // //         position: "relative", zIndex: 2,
// // // //         maxWidth: 1300, margin: "0 auto",
// // // //         padding: "60px 50px 32px",
// // // //         display: "grid",
// // // //         gridTemplateColumns: "2fr 1fr 1fr 1fr",
// // // //         gap: 40,
// // // //         alignItems: "start",
// // // //       }}>

// // // //         {/* Brand column */}
// // // //         <div>
// // // //           {/* Logo + name */}
// // // //           <div style={{ display: "flex", gap: 12, marginBottom: 18, alignItems: "center" }}>
// // // //             <div style={{ position: "relative", width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // //               <div style={{
// // // //                 position: "absolute", width: 72, height: 72, borderRadius: "50%",
// // // //                 background: "radial-gradient(circle, rgba(42,93,168,0.5) 0%, transparent 70%)",
// // // //                 filter: "blur(10px)",
// // // //               }} />
// // // //               <img
// // // //                 src="/images/logo.png"
// // // //                 alt="Logo"
// // // //                 style={{
// // // //                   width: 80, height: 80, objectFit: "contain",
// // // //                   filter: "drop-shadow(0 0 8px rgba(255,255,255,0.9)) drop-shadow(0 0 16px rgba(255,255,255,0.7))",
// // // //                 }}
// // // //               />
// // // //             </div>
// // // //             <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
// // // //               <p style={{ fontSize: 20, fontWeight: 800, color: "#fff", margin: 0, lineHeight: 1.2 }}>
// // // //                 Innovare Biopharma LLP
// // // //               </p>
// // // //               <p style={{ fontSize: 10, color: teal, letterSpacing: 2, margin: 0, fontWeight: 700 }}>
// // // //                 {/* LLP */}
// // // //               </p>
// // // //             </div>
// // // //           </div>

// // // //           <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", marginBottom: 18 }}>
// // // //             India's innovative manufacturer & exporter of aquaculture products. From hatchery to harvest.
// // // //           </p>

// // // //           {/* Address block — each line aligned consistently */}
// // // //           <div style={{
// // // //             background: "rgba(42,93,168,0.1)",
// // // //             border: "1px solid rgba(42,93,168,0.22)",
// // // //             borderRadius: 12,
// // // //             padding: "14px 16px",
// // // //             marginBottom: 18,
// // // //           }}>
// // // //             {/* Address row */}
// // // //             <div style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
// // // //               <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>📍</span>
// // // //               <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
// // // //                 Plot No: 256, H No:36-130, Defence Colony,
// // // //                 Sainikpuri Post, Medchal-Malkajgiri Mandal,
// // // //                 Hyderabad, Telangana ,India-500094
// // // //               </span>
// // // //             </div>
// // // //             {/* Email row */}
// // // //             <div style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "center" }}>
// // // //               <span style={{ fontSize: 13, flexShrink: 0 }}>📧</span>
// // // //               <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
// // // //                 info@innovarebiopharma.com
// // // //               </span>
// // // //             </div>
// // // //             {/* Phone row */}
// // // //             <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
// // // //               <span style={{ fontSize: 13, flexShrink: 0 }}>📞</span>
// // // //               <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
// // // //                 +91 7799872555 &nbsp;|&nbsp; +91 040-35837199
// // // //               </span>
// // // //             </div>
// // // //           </div>

// // // //           {/* Social icons */}
// // // //           <div style={{ display: "flex", gap: 8 }}>
// // // //             {socialLinks.map(s => (
// // // //               <a
// // // //                 key={s.label}
// // // //                 href={s.href}
// // // //                 aria-label={s.label}
// // // //                 style={{
// // // //                   width: 32, height: 32, borderRadius: 8,
// // // //                   background: "rgba(42,93,168,0.18)",
// // // //                   border: "1px solid rgba(42,93,168,0.3)",
// // // //                   display: "flex", alignItems: "center", justifyContent: "center",
// // // //                   fontSize: 12, color: "#fff", textDecoration: "none",
// // // //                   transition: "all .2s",
// // // //                 }}
// // // //                 onMouseEnter={e => {
// // // //                   (e.currentTarget as HTMLElement).style.background = blue;
// // // //                   (e.currentTarget as HTMLElement).style.borderColor = blue;
// // // //                 }}
// // // //                 onMouseLeave={e => {
// // // //                   (e.currentTarget as HTMLElement).style.background = "rgba(42,93,168,0.18)";
// // // //                   (e.currentTarget as HTMLElement).style.borderColor = "rgba(42,93,168,0.3)";
// // // //                 }}
// // // //               >
// // // //                 {s.icon}
// // // //               </a>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* Link columns */}
// // // //         {cols.map(col => (
// // // //           <div key={col.title} style={{ marginLeft: "100px" }}>
// // // //             <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
// // // //               <div style={{ width: 3, height: 14, borderRadius: 2, background: `linear-gradient(180deg, ${blue}, ${accent})` }} />
// // // //               <h4 style={{
// // // //                 fontSize: 12, fontWeight: 700, color: "#fff",
// // // //                 margin: 0, letterSpacing: "1px", textTransform: "uppercase",
// // // //               }}>
// // // //                 {col.title}
// // // //               </h4>
// // // //             </div>
// // // //             <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
// // // //               {col.links.map(link => (
// // // //                 <a
// // // //                   key={link}
// // // //                   href="#"
// // // //                   style={{
// // // //                     fontSize: 13, color: "rgba(255,255,255,0.42)",
// // // //                     textDecoration: "none", transition: "color .2s",
// // // //                     display: "flex", alignItems: "center", gap: 6,
// // // //                   }}
// // // //                   onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#93c5fd")}
// // // //                   onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.42)")}
// // // //                 >
// // // //                   <span style={{ fontSize: 8, color: "rgba(42,93,168,0.5)", flexShrink: 0 }}>▶</span>
// // // //                   {link}
// // // //                 </a>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       {/* ── DIVIDER ── */}
// // // //       <div style={{
// // // //         position: "relative", zIndex: 2,
// // // //         maxWidth: 1300, margin: "0 auto", padding: "0 50px",
// // // //       }}>
// // // //         <div style={{
// // // //           height: 1,
// // // //           background: "linear-gradient(90deg, transparent, rgba(42,93,168,0.5), rgba(14,165,233,0.3), rgba(42,93,168,0.5), transparent)",
// // // //         }} />
// // // //       </div>

// // // //       {/* ── BOTTOM BAR — single row, three columns ── */}
// // // //       <div style={{
// // // //         position: "relative", zIndex: 2,
// // // //         maxWidth: 1300, margin: "0 auto",
// // // //         padding: "16px 50px",
// // // //         display: "flex",
// // // //         alignItems: "center",
// // // //         justifyContent: "space-between",
// // // //         gap: 16,
// // // //         flexWrap: "wrap",
// // // //       }}>
// // // //         {/* Left: copyright */}
// // // //         <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
// // // //           © 2026 Innovare Biopharma LLP. All rights reserved.
// // // //         </span>

// // // //         {/* Right: policy links */}
// // // //         <div style={{ display: "flex", gap: 20 }}>
// // // //           {["Privacy Policy", "Terms", "Cookies"].map(t => (
// // // //             <a
// // // //               key={t}
// // // //               href="#"
// // // //               style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
// // // //               onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#93c5fd")}
// // // //               onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
// // // //             >
// // // //               {t}
// // // //             </a>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //     </footer>
// // // //   );
// // // // }
// // // // "use client";

// // // // import Link from "next/link";

// // // // export default function Footer() {
// // // //   const blue   = "#2A5DA8";
// // // //   const accent = "#0EA5E9";
// // // //   const teal   = "#4db8cc";

// // // //   const cols = [
// // // //     {
// // // //       title: "Solutions",
// // // //       links: [
// // // //         { label: "Feed Supplements",    href: "/products?category=feed-supplements" },
// // // //         { label: "Sanitizers",          href: "/products?category=sanitizers" },
// // // //         { label: "Water Treatments",    href: "/products?category=water-treatments" },
// // // //         { label: "Growth Promoters",    href: "/products?category=growth-promoters" },
// // // //         { label: "Vitamins & Minerals", href: "/products?category=vitamins-minerals" },
// // // //         { label: "Gut Probiotics",      href: "/products?category=gut-probiotics" },
// // // //         { label: "Immunity",            href: "/products?category=immunity" },
// // // //       ],
// // // //     },
// // // //     {
// // // //       title: "Company",
// // // //       links: [
// // // //         { label: "About Us",       href: "/about" },
// // // //         { label: "Our Solutions",  href: "/solutions/nutrition" },
// // // //         { label: "Products",       href: "/products" },
// // // //         { label: "Sustainability", href: "/sustainability" },
// // // //         { label: "Certificates",   href: "/certifications/products" },
// // // //         { label: "Events",         href: "/event" },
// // // //         { label: "Contact",        href: "/contact" },
// // // //       ],
// // // //     },
// // // //     {
// // // //       title: "Support",
// // // //       links: [
// // // //         { label: "Product Catalogue", href: "/cata" },
// // // //         { label: "FAQs",              href: "/faq" },
// // // //         { label: "Contact Us",        href: "/contact" },
// // // //       ],
// // // //     },
// // // //   ];

// // // //   const socialLinks = [
// // // //     { label: "LinkedIn", href: "#", icon: "in" },
// // // //     { label: "Twitter",  href: "#", icon: "𝕏"  },
// // // //     { label: "YouTube",  href: "#", icon: "▶"  },
// // // //     { label: "Facebook", href: "#", icon: "f"  },
// // // //   ];

// // // //   return (
// // // //     <footer style={{ position: "relative", overflow: "hidden", fontFamily: "'Trebuchet MS', sans-serif" }}>

// // // //       {/* ── Background layers ── */}
// // // //       <div style={{
// // // //         position: "absolute", inset: 0,
// // // //         background: "linear-gradient(160deg, #040e24 0%, #071530 45%, #051228 100%)",
// // // //         zIndex: 0,
// // // //       }} />
// // // //       <div style={{
// // // //         position: "absolute", top: -120, left: -80,
// // // //         width: 500, height: 500, borderRadius: "50%",
// // // //         background: "radial-gradient(circle, rgba(42,93,168,0.28) 0%, transparent 70%)",
// // // //         zIndex: 0, pointerEvents: "none",
// // // //       }} />
// // // //       <div style={{
// // // //         position: "absolute", top: "30%", right: -60,
// // // //         width: 360, height: 360, borderRadius: "50%",
// // // //         background: "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 70%)",
// // // //         zIndex: 0, pointerEvents: "none",
// // // //       }} />
// // // //       <div style={{
// // // //         position: "absolute", bottom: -60, left: "40%",
// // // //         width: 420, height: 300, borderRadius: "50%",
// // // //         background: "radial-gradient(circle, rgba(42,93,168,0.18) 0%, transparent 70%)",
// // // //         zIndex: 0, pointerEvents: "none",
// // // //       }} />
// // // //       <div style={{
// // // //         position: "absolute", inset: 0,
// // // //         backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
// // // //         backgroundSize: "28px 28px",
// // // //         zIndex: 0, pointerEvents: "none",
// // // //       }} />
// // // //       <svg
// // // //         style={{ position: "absolute", top: 0, right: 0, width: 340, height: 280, opacity: 0.06, zIndex: 0, pointerEvents: "none" }}
// // // //         viewBox="0 0 340 280" fill="none"
// // // //       >
// // // //         {[0,1,2,3,4,5,6,7,8].map(i => (
// // // //           <line key={i} x1={i * 42} y1="0" x2={i * 42 + 280} y2="280" stroke="#60a5fa" strokeWidth="1" />
// // // //         ))}
// // // //       </svg>
// // // //       {/* Top border glow */}
// // // //       <div style={{
// // // //         position: "absolute", top: 0, left: 0, right: 0, height: 2,
// // // //         background: `linear-gradient(90deg, transparent, ${blue}, ${accent}, ${blue}, transparent)`,
// // // //         zIndex: 1,
// // // //       }} />

// // // //       {/* ── MAIN GRID ── */}
// // // //       <div style={{
// // // //         position: "relative", zIndex: 2,
// // // //         maxWidth: 1300, margin: "0 auto",
// // // //         padding: "60px 50px 32px",
// // // //         display: "grid",
// // // //         gridTemplateColumns: "2fr 1fr 1fr 1fr",
// // // //         gap: 40,
// // // //         alignItems: "start",
// // // //       }}>

// // // //         {/* Brand column */}
// // // //         <div>
// // // //           {/* Logo + name */}
// // // //           <div style={{ display: "flex", gap: 12, marginBottom: 18, alignItems: "center" }}>
// // // //             <div style={{ position: "relative", width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // //               <div style={{
// // // //                 position: "absolute", width: 72, height: 72, borderRadius: "50%",
// // // //                 background: "radial-gradient(circle, rgba(42,93,168,0.5) 0%, transparent 70%)",
// // // //                 filter: "blur(10px)",
// // // //               }} />
// // // //               <img
// // // //                 src="/images/logo.png"
// // // //                 alt="Logo"
// // // //                 style={{
// // // //                   width: 80, height: 80, objectFit: "contain",
// // // //                   filter: "drop-shadow(0 0 8px rgba(255,255,255,0.9)) drop-shadow(0 0 16px rgba(255,255,255,0.7))",
// // // //                 }}
// // // //               />
// // // //             </div>
// // // //             <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
// // // //               <p style={{ fontSize: 20, fontWeight: 800, color: "#fff", margin: 0, lineHeight: 1.2 }}>
// // // //                 Innovare Biopharma LLP
// // // //               </p>
// // // //               <p style={{ fontSize: 10, color: teal, letterSpacing: 2, margin: 0, fontWeight: 700 }}>
// // // //                 {/* LLP */}
// // // //               </p>
// // // //             </div>
// // // //           </div>

// // // //           <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", marginBottom: 18 }}>
// // // //             India's innovative manufacturer & exporter of aquaculture products. From hatchery to harvest.
// // // //           </p>

// // // //           {/* Address block */}
// // // //           <div style={{
// // // //             background: "rgba(42,93,168,0.1)",
// // // //             border: "1px solid rgba(42,93,168,0.22)",
// // // //             borderRadius: 12,
// // // //             padding: "14px 16px",
// // // //             marginBottom: 18,
// // // //           }}>
// // // //             <div style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
// // // //               <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>📍</span>
// // // //               <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
// // // //                 Plot No: 256, H No:36-130, Defence Colony,
// // // //                 Sainikpuri Post, Medchal-Malkajgiri Mandal,
// // // //                 Hyderabad, Telangana, India-500094
// // // //               </span>
// // // //             </div>
// // // //             <div style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "center" }}>
// // // //               <span style={{ fontSize: 13, flexShrink: 0 }}>📧</span>
// // // //               <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
// // // //                 info@innovarebiopharma.com
// // // //               </span>
// // // //             </div>
// // // //             <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
// // // //               <span style={{ fontSize: 13, flexShrink: 0 }}>📞</span>
// // // //               <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
// // // //                 +91 7799872555 &nbsp;|&nbsp; +91 040-35837199
// // // //               </span>
// // // //             </div>
// // // //           </div>

// // // //           {/* Social icons */}
// // // //           <div style={{ display: "flex", gap: 8 }}>
// // // //             {socialLinks.map(s => (
// // // //               <a
// // // //                 key={s.label}
// // // //                 href={s.href}
// // // //                 aria-label={s.label}
// // // //                 style={{
// // // //                   width: 32, height: 32, borderRadius: 8,
// // // //                   background: "rgba(42,93,168,0.18)",
// // // //                   border: "1px solid rgba(42,93,168,0.3)",
// // // //                   display: "flex", alignItems: "center", justifyContent: "center",
// // // //                   fontSize: 12, color: "#fff", textDecoration: "none",
// // // //                   transition: "all .2s",
// // // //                 }}
// // // //                 onMouseEnter={e => {
// // // //                   (e.currentTarget as HTMLElement).style.background = blue;
// // // //                   (e.currentTarget as HTMLElement).style.borderColor = blue;
// // // //                 }}
// // // //                 onMouseLeave={e => {
// // // //                   (e.currentTarget as HTMLElement).style.background = "rgba(42,93,168,0.18)";
// // // //                   (e.currentTarget as HTMLElement).style.borderColor = "rgba(42,93,168,0.3)";
// // // //                 }}
// // // //               >
// // // //                 {s.icon}
// // // //               </a>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* Link columns */}
// // // //         {cols.map(col => (
// // // //           <div key={col.title} style={{ marginLeft: "100px" }}>
// // // //             <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
// // // //               <div style={{ width: 3, height: 14, borderRadius: 2, background: `linear-gradient(180deg, ${blue}, ${accent})` }} />
// // // //               <h4 style={{
// // // //                 fontSize: 12, fontWeight: 700, color: "#fff",
// // // //                 margin: 0, letterSpacing: "1px", textTransform: "uppercase",
// // // //               }}>
// // // //                 {col.title}
// // // //               </h4>
// // // //             </div>
// // // //             <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
// // // //               {col.links.map(link => (
// // // //                 <Link
// // // //                   key={link.label}
// // // //                   href={link.href}
// // // //                   style={{
// // // //                     fontSize: 13, color: "rgba(255,255,255,0.42)",
// // // //                     textDecoration: "none", transition: "color .2s",
// // // //                     display: "flex", alignItems: "center", gap: 6,
// // // //                   }}
// // // //                   onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#93c5fd")}
// // // //                   onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.42)")}
// // // //                 >
// // // //                   <span style={{ fontSize: 8, color: "rgba(42,93,168,0.5)", flexShrink: 0 }}>▶</span>
// // // //                   {link.label}
// // // //                 </Link>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       {/* ── DIVIDER ── */}
// // // //       <div style={{
// // // //         position: "relative", zIndex: 2,
// // // //         maxWidth: 1300, margin: "0 auto", padding: "0 50px",
// // // //       }}>
// // // //         <div style={{
// // // //           height: 1,
// // // //           background: "linear-gradient(90deg, transparent, rgba(42,93,168,0.5), rgba(14,165,233,0.3), rgba(42,93,168,0.5), transparent)",
// // // //         }} />
// // // //       </div>

// // // //       {/* ── BOTTOM BAR ── */}
// // // //       <div style={{
// // // //         position: "relative", zIndex: 2,
// // // //         maxWidth: 1300, margin: "0 auto",
// // // //         padding: "16px 50px",
// // // //         display: "flex",
// // // //         alignItems: "center",
// // // //         justifyContent: "space-between",
// // // //         gap: 16,
// // // //         flexWrap: "wrap",
// // // //       }}>
// // // //         <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
// // // //           © 2026 Innovare Biopharma LLP. All rights reserved.
// // // //         </span>

// // // //         <div style={{ display: "flex", gap: 20 }}>
// // // //           {["Privacy Policy", "Terms", "Cookies"].map(t => (
// // // //             <a
// // // //               key={t}
// // // //               href="#"
// // // //               style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
// // // //               onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#93c5fd")}
// // // //               onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
// // // //             >
// // // //               {t}
// // // //             </a>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //     </footer>
// // // //   );
// // // // }
// // // "use client";

// // // import Link from "next/link";

// // // export default function Footer() {
// // //   const blue   = "#2A5DA8";
// // //   const accent = "#0EA5E9";
// // //   const teal   = "#4db8cc";

// // //   const cols = [
// // //     {
// // //       title: "Solutions",
// // //       links: [
// // //         { label: "Feed Supplements",    href: "/products?category=feed-supplements" },
// // //         { label: "Sanitizers",          href: "/products?category=sanitizers" },
// // //         { label: "Water Treatments",    href: "/products?category=water-treatments" },
// // //         { label: "Growth Promoters",    href: "/products?category=growth-promoters" },
// // //         { label: "Vitamins & Minerals", href: "/products?category=vitamins-minerals" },
// // //         { label: "Gut Probiotics",      href: "/products?category=gut-probiotics" },
// // //         { label: "Immunity",            href: "/products?category=immunity" },
// // //       ],
// // //     },
// // //     {
// // //       title: "Company",
// // //       links: [
// // //         { label: "About Us",       href: "/about" },
// // //         { label: "Our Solutions",  href: "/solutions" },
// // //         { label: "Products",       href: "/products" },
// // //         { label: "Sustainability", href: "/sustainability" },
// // //         { label: "Certificates",   href: "/certificates" },
// // //         { label: "Events",         href: "/events" },
// // //         { label: "Contact",        href: "/contact" },
// // //       ],
// // //     },
// // //     {
// // //       title: "Support",
// // //       links: [
// // //         { label: "Product Catalogue", href: "/catalogue" },
// // //         { label: "FAQs",              href: "/faq" },
// // //         { label: "Contact Us",        href: "/contact" },
// // //       ],
// // //     },
// // //   ];

// // //   const socialLinks = [
// // //     { label: "Instagram", href: "#", icon: "📷" },
// // //     { label: "YouTube",   href: "#", icon: "▶"  },
// // //     { label: "Facebook",  href: "#", icon: "f"  },
// // //   ];

// // //   return (
// // //     <footer style={{ position: "relative", overflow: "hidden", fontFamily: "'Trebuchet MS', sans-serif" }}>

// // //       {/* ── Background layers ── */}
// // //       <div style={{
// // //         position: "absolute", inset: 0,
// // //         background: "linear-gradient(160deg, #040e24 0%, #071530 45%, #051228 100%)",
// // //         zIndex: 0,
// // //       }} />
// // //       <div style={{
// // //         position: "absolute", top: -120, left: -80,
// // //         width: 500, height: 500, borderRadius: "50%",
// // //         background: "radial-gradient(circle, rgba(42,93,168,0.28) 0%, transparent 70%)",
// // //         zIndex: 0, pointerEvents: "none",
// // //       }} />
// // //       <div style={{
// // //         position: "absolute", top: "30%", right: -60,
// // //         width: 360, height: 360, borderRadius: "50%",
// // //         background: "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 70%)",
// // //         zIndex: 0, pointerEvents: "none",
// // //       }} />
// // //       <div style={{
// // //         position: "absolute", bottom: -60, left: "40%",
// // //         width: 420, height: 300, borderRadius: "50%",
// // //         background: "radial-gradient(circle, rgba(42,93,168,0.18) 0%, transparent 70%)",
// // //         zIndex: 0, pointerEvents: "none",
// // //       }} />
// // //       <div style={{
// // //         position: "absolute", inset: 0,
// // //         backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
// // //         backgroundSize: "28px 28px",
// // //         zIndex: 0, pointerEvents: "none",
// // //       }} />
// // //       <svg
// // //         style={{ position: "absolute", top: 0, right: 0, width: 340, height: 280, opacity: 0.06, zIndex: 0, pointerEvents: "none" }}
// // //         viewBox="0 0 340 280" fill="none"
// // //       >
// // //         {[0,1,2,3,4,5,6,7,8].map(i => (
// // //           <line key={i} x1={i * 42} y1="0" x2={i * 42 + 280} y2="280" stroke="#60a5fa" strokeWidth="1" />
// // //         ))}
// // //       </svg>
// // //       {/* Top border glow */}
// // //       <div style={{
// // //         position: "absolute", top: 0, left: 0, right: 0, height: 2,
// // //         background: `linear-gradient(90deg, transparent, ${blue}, ${accent}, ${blue}, transparent)`,
// // //         zIndex: 1,
// // //       }} />

// // //       {/* ── MAIN GRID ── */}
// // //       <div style={{
// // //         position: "relative", zIndex: 2,
// // //         maxWidth: 1300, margin: "0 auto",
// // //         padding: "60px 50px 32px",
// // //         display: "grid",
// // //         gridTemplateColumns: "2fr 1fr 1fr 1fr",
// // //         gap: 40,
// // //         alignItems: "start",
// // //       }}>

// // //         {/* Brand column */}
// // //         <div>
// // //           {/* Logo + name */}
// // //           <div style={{ display: "flex", gap: 12, marginBottom: 18, alignItems: "center" }}>
// // //             <div style={{ position: "relative", width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // //               <div style={{
// // //                 position: "absolute", width: 72, height: 72, borderRadius: "50%",
// // //                 background: "radial-gradient(circle, rgba(42,93,168,0.5) 0%, transparent 70%)",
// // //                 filter: "blur(10px)",
// // //               }} />
// // //               <img
// // //                 src="/images/logo.png"
// // //                 alt="Logo"
// // //                 style={{
// // //                   width: 80, height: 80, objectFit: "contain",
// // //                   filter: "drop-shadow(0 0 8px rgba(255,255,255,0.9)) drop-shadow(0 0 16px rgba(255,255,255,0.7))",
// // //                 }}
// // //               />
// // //             </div>
// // //             <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
// // //               <p style={{ fontSize: 20, fontWeight: 800, color: "#fff", margin: 0, lineHeight: 1.2 }}>
// // //                 Innovare Biopharma LLP
// // //               </p>
// // //               <p style={{ fontSize: 10, color: teal, letterSpacing: 2, margin: 0, fontWeight: 700 }}>
// // //                 {/* LLP */}
// // //               </p>
// // //             </div>
// // //           </div>

// // //           <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", marginBottom: 18 }}>
// // //             India's innovative manufacturer & exporter of aquaculture products. From hatchery to harvest.
// // //           </p>

// // //           {/* Address block */}
// // //           <div style={{
// // //             background: "rgba(42,93,168,0.1)",
// // //             border: "1px solid rgba(42,93,168,0.22)",
// // //             borderRadius: 12,
// // //             padding: "14px 16px",
// // //             marginBottom: 18,
// // //           }}>
// // //             <div style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
// // //               <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>📍</span>
// // //               <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
// // //                 Plot No: 256, H No:36-130, Defence Colony,
// // //                 Sainikpuri Post, Medchal-Malkajgiri Mandal,
// // //                 Hyderabad, Telangana, India-500094
// // //               </span>
// // //             </div>
// // //             <div style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "center" }}>
// // //               <span style={{ fontSize: 13, flexShrink: 0 }}>📧</span>
// // //               <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
// // //                 info@innovarebiopharma.com
// // //               </span>
// // //             </div>
// // //             <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
// // //               <span style={{ fontSize: 13, flexShrink: 0 }}>📞</span>
// // //               <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
// // //                 +91 7799872555 &nbsp;|&nbsp; +91 040-35837199
// // //               </span>
// // //             </div>
// // //           </div>

// // //           {/* Social icons */}
// // //           <div style={{ display: "flex", gap: 8 }}>
// // //             {socialLinks.map(s => (
// // //               <a
// // //                 key={s.label}
// // //                 href={s.href}
// // //                 aria-label={s.label}
// // //                 style={{
// // //                   width: 32, height: 32, borderRadius: 8,
// // //                   background: "rgba(42,93,168,0.18)",
// // //                   border: "1px solid rgba(42,93,168,0.3)",
// // //                   display: "flex", alignItems: "center", justifyContent: "center",
// // //                   fontSize: 12, color: "#fff", textDecoration: "none",
// // //                   transition: "all .2s",
// // //                 }}
// // //                 onMouseEnter={e => {
// // //                   (e.currentTarget as HTMLElement).style.background = blue;
// // //                   (e.currentTarget as HTMLElement).style.borderColor = blue;
// // //                 }}
// // //                 onMouseLeave={e => {
// // //                   (e.currentTarget as HTMLElement).style.background = "rgba(42,93,168,0.18)";
// // //                   (e.currentTarget as HTMLElement).style.borderColor = "rgba(42,93,168,0.3)";
// // //                 }}
// // //               >
// // //                 {s.icon}
// // //               </a>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Link columns */}
// // //         {cols.map(col => (
// // //           <div key={col.title} style={{ marginLeft: "100px" }}>
// // //             <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
// // //               <div style={{ width: 3, height: 14, borderRadius: 2, background: `linear-gradient(180deg, ${blue}, ${accent})` }} />
// // //               <h4 style={{
// // //                 fontSize: 12, fontWeight: 700, color: "#fff",
// // //                 margin: 0, letterSpacing: "1px", textTransform: "uppercase",
// // //               }}>
// // //                 {col.title}
// // //               </h4>
// // //             </div>
// // //             <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
// // //               {col.links.map(link => (
// // //                 <Link
// // //                   key={link.label}
// // //                   href={link.href}
// // //                   style={{
// // //                     fontSize: 13, color: "rgba(255,255,255,0.42)",
// // //                     textDecoration: "none", transition: "color .2s",
// // //                     display: "flex", alignItems: "center", gap: 6,
// // //                   }}
// // //                   onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#93c5fd")}
// // //                   onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.42)")}
// // //                 >
// // //                   <span style={{ fontSize: 8, color: "rgba(42,93,168,0.5)", flexShrink: 0 }}>▶</span>
// // //                   {link.label}
// // //                 </Link>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* ── DIVIDER ── */}
// // //       <div style={{
// // //         position: "relative", zIndex: 2,
// // //         maxWidth: 1300, margin: "0 auto", padding: "0 50px",
// // //       }}>
// // //         <div style={{
// // //           height: 1,
// // //           background: "linear-gradient(90deg, transparent, rgba(42,93,168,0.5), rgba(14,165,233,0.3), rgba(42,93,168,0.5), transparent)",
// // //         }} />
// // //       </div>

// // //       {/* ── BOTTOM BAR ── */}
// // //       <div style={{
// // //         position: "relative", zIndex: 2,
// // //         maxWidth: 1300, margin: "0 auto",
// // //         padding: "16px 50px",
// // //         display: "flex",
// // //         alignItems: "center",
// // //         justifyContent: "space-between",
// // //         gap: 16,
// // //         flexWrap: "wrap",
// // //       }}>
// // //         <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
// // //           © 2026 Innovare Biopharma LLP. All rights reserved.
// // //         </span>

// // //         <div style={{ display: "flex", gap: 20 }}>
// // //           {["Privacy Policy", "Terms", "Cookies"].map(t => (
// // //             <a
// // //               key={t}
// // //               href="#"
// // //               style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
// // //               onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#93c5fd")}
// // //               onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
// // //             >
// // //               {t}
// // //             </a>
// // //           ))}
// // //         </div>
// // //       </div>

// // //     </footer>
// // //   );
// // // }
// // "use client";

// // import React from "react";
// // import Link from "next/link";

// // export default function Footer() {
// //   const blue   = "#2A5DA8";
// //   const accent = "#0EA5E9";
// //   const teal   = "#4db8cc";

// //   const cols = [
// //     {
// //       title: "Solutions",
// //       links: [
// //         { label: "Feed Supplements",    href: "/products?category=feed-supplements" },
// //         { label: "Sanitizers",          href: "/products?category=sanitizers" },
// //         { label: "Water Treatments",    href: "/products?category=water-treatments" },
// //         { label: "Growth Promoters",    href: "/products?category=growth-promoters" },
// //         { label: "Vitamins & Minerals", href: "/products?category=vitamins-minerals" },
// //         { label: "Gut Probiotics",      href: "/products?category=gut-probiotics" },
// //         { label: "Immunity",            href: "/products?category=immunity" },
// //       ],
// //     },
// //     {
// //       title: "Company",
// //       links: [
// //         { label: "About Us",       href: "/about" },
// //         { label: "Our Solutions",  href: "/solutions" },
// //         { label: "Products",       href: "/products" },
// //         { label: "Sustainability", href: "/sustainability" },
// //         { label: "Certificates",   href: "/certificates" },
// //         { label: "Events",         href: "/events" },
// //         { label: "Contact",        href: "/contact" },
// //       ],
// //     },
// //     {
// //       title: "Support",
// //       links: [
// //         { label: "Product Catalogue", href: "/catalogue" },
// //         { label: "FAQs",              href: "/faq" },
// //         { label: "Contact Us",        href: "/contact" },
// //       ],
// //     },
// //   ];

// //   const socialLinks: { label: string; href: string; icon: React.ReactNode }[] = [
// //     { label: "Instagram", href: "#", icon: (
// //       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //         <defs>
// //           <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
// //             <stop offset="0%"   stopColor="#f09433" />
// //             <stop offset="25%"  stopColor="#e6683c" />
// //             <stop offset="50%"  stopColor="#dc2743" />
// //             <stop offset="75%"  stopColor="#cc2366" />
// //             <stop offset="100%" stopColor="#bc1888" />
// //           </linearGradient>
// //         </defs>
// //         <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad)" strokeWidth="2" fill="none"/>
// //         <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad)" strokeWidth="2" fill="none"/>
// //         <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-grad)"/>
// //       </svg>
// //     )},
// //     { label: "YouTube",   href: "#", icon: "▶"  },
// //     { label: "Facebook",  href: "#", icon: "f"  },
// //   ];

// //   return (
// //     <footer style={{ position: "relative", overflow: "hidden", fontFamily: "'Trebuchet MS', sans-serif" }}>

// //       {/* ── Background layers ── */}
// //       <div style={{
// //         position: "absolute", inset: 0,
// //         background: "linear-gradient(160deg, #040e24 0%, #071530 45%, #051228 100%)",
// //         zIndex: 0,
// //       }} />
// //       <div style={{
// //         position: "absolute", top: -120, left: -80,
// //         width: 500, height: 500, borderRadius: "50%",
// //         background: "radial-gradient(circle, rgba(42,93,168,0.28) 0%, transparent 70%)",
// //         zIndex: 0, pointerEvents: "none",
// //       }} />
// //       <div style={{
// //         position: "absolute", top: "30%", right: -60,
// //         width: 360, height: 360, borderRadius: "50%",
// //         background: "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 70%)",
// //         zIndex: 0, pointerEvents: "none",
// //       }} />
// //       <div style={{
// //         position: "absolute", bottom: -60, left: "40%",
// //         width: 420, height: 300, borderRadius: "50%",
// //         background: "radial-gradient(circle, rgba(42,93,168,0.18) 0%, transparent 70%)",
// //         zIndex: 0, pointerEvents: "none",
// //       }} />
// //       <div style={{
// //         position: "absolute", inset: 0,
// //         backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
// //         backgroundSize: "28px 28px",
// //         zIndex: 0, pointerEvents: "none",
// //       }} />
// //       <svg
// //         style={{ position: "absolute", top: 0, right: 0, width: 340, height: 280, opacity: 0.06, zIndex: 0, pointerEvents: "none" }}
// //         viewBox="0 0 340 280" fill="none"
// //       >
// //         {[0,1,2,3,4,5,6,7,8].map(i => (
// //           <line key={i} x1={i * 42} y1="0" x2={i * 42 + 280} y2="280" stroke="#60a5fa" strokeWidth="1" />
// //         ))}
// //       </svg>
// //       {/* Top border glow */}
// //       <div style={{
// //         position: "absolute", top: 0, left: 0, right: 0, height: 2,
// //         background: `linear-gradient(90deg, transparent, ${blue}, ${accent}, ${blue}, transparent)`,
// //         zIndex: 1,
// //       }} />

// //       {/* ── MAIN GRID ── */}
// //       <div style={{
// //         position: "relative", zIndex: 2,
// //         maxWidth: 1300, margin: "0 auto",
// //         padding: "60px 50px 32px",
// //         display: "grid",
// //         gridTemplateColumns: "2fr 1fr 1fr 1fr",
// //         gap: 40,
// //         alignItems: "start",
// //       }}>

// //         {/* Brand column */}
// //         <div>
// //           {/* Logo + name */}
// //           <div style={{ display: "flex", gap: 12, marginBottom: 18, alignItems: "center" }}>
// //             <div style={{ position: "relative", width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// //               <div style={{
// //                 position: "absolute", width: 72, height: 72, borderRadius: "50%",
// //                 background: "radial-gradient(circle, rgba(42,93,168,0.5) 0%, transparent 70%)",
// //                 filter: "blur(10px)",
// //               }} />
// //               <img
// //                 src="/images/logo.png"
// //                 alt="Logo"
// //                 style={{
// //                   width: 80, height: 80, objectFit: "contain",
// //                   filter: "drop-shadow(0 0 8px rgba(255,255,255,0.9)) drop-shadow(0 0 16px rgba(255,255,255,0.7))",
// //                 }}
// //               />
// //             </div>
// //             <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
// //               <p style={{ fontSize: 20, fontWeight: 800, color: "#fff", margin: 0, lineHeight: 1.2 }}>
// //                 Innovare Biopharma LLP
// //               </p>
// //               <p style={{ fontSize: 10, color: teal, letterSpacing: 2, margin: 0, fontWeight: 700 }}>
// //                 {/* LLP */}
// //               </p>
// //             </div>
// //           </div>

// //           <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", marginBottom: 18 }}>
// //             India's innovative manufacturer & exporter of aquaculture products. From hatchery to harvest.
// //           </p>

// //           {/* Address block */}
// //           <div style={{
// //             background: "rgba(42,93,168,0.1)",
// //             border: "1px solid rgba(42,93,168,0.22)",
// //             borderRadius: 12,
// //             padding: "14px 16px",
// //             marginBottom: 18,
// //           }}>
// //             <div style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
// //               <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>📍</span>
// //               <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
// //                 Plot No: 256, H No:36-130, Defence Colony,
// //                 Sainikpuri Post, Medchal-Malkajgiri Mandal,
// //                 Hyderabad, Telangana, India-500094
// //               </span>
// //             </div>
// //             <div style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "center" }}>
// //               <span style={{ fontSize: 13, flexShrink: 0 }}>📧</span>
// //               <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
// //                 info@innovarebiopharma.com
// //               </span>
// //             </div>
// //             <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
// //               <span style={{ fontSize: 13, flexShrink: 0 }}>📞</span>
// //               <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
// //                 +91 7799872555 &nbsp;|&nbsp; +91 040-35837199
// //               </span>
// //             </div>
// //           </div>

// //           {/* Social icons */}
// //           <div style={{ display: "flex", gap: 8 }}>
// //             {socialLinks.map(s => (
// //               <a
// //                 key={s.label}
// //                 href={s.href}
// //                 aria-label={s.label}
// //                 style={{
// //                   width: 32, height: 32, borderRadius: 8,
// //                   background: "rgba(42,93,168,0.18)",
// //                   border: "1px solid rgba(42,93,168,0.3)",
// //                   display: "flex", alignItems: "center", justifyContent: "center",
// //                   fontSize: 12, color: "#fff", textDecoration: "none",
// //                   transition: "all .2s",
// //                 }}
// //                 onMouseEnter={e => {
// //                   (e.currentTarget as HTMLElement).style.background = blue;
// //                   (e.currentTarget as HTMLElement).style.borderColor = blue;
// //                 }}
// //                 onMouseLeave={e => {
// //                   (e.currentTarget as HTMLElement).style.background = "rgba(42,93,168,0.18)";
// //                   (e.currentTarget as HTMLElement).style.borderColor = "rgba(42,93,168,0.3)";
// //                 }}
// //               >
// //                 {typeof s.icon === "string" ? s.icon : s.icon}
// //               </a>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Link columns */}
// //         {cols.map(col => (
// //           <div key={col.title} style={{ marginLeft: "100px" }}>
// //             <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
// //               <div style={{ width: 3, height: 14, borderRadius: 2, background: `linear-gradient(180deg, ${blue}, ${accent})` }} />
// //               <h4 style={{
// //                 fontSize: 12, fontWeight: 700, color: "#fff",
// //                 margin: 0, letterSpacing: "1px", textTransform: "uppercase",
// //               }}>
// //                 {col.title}
// //               </h4>
// //             </div>
// //             <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
// //               {col.links.map(link => (
// //                 <Link
// //                   key={link.label}
// //                   href={link.href}
// //                   style={{
// //                     fontSize: 13, color: "rgba(255,255,255,0.42)",
// //                     textDecoration: "none", transition: "color .2s",
// //                     display: "flex", alignItems: "center", gap: 6,
// //                   }}
// //                   onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#93c5fd")}
// //                   onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.42)")}
// //                 >
// //                   <span style={{ fontSize: 8, color: "rgba(42,93,168,0.5)", flexShrink: 0 }}>▶</span>
// //                   {link.label}
// //                 </Link>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* ── DIVIDER ── */}
// //       <div style={{
// //         position: "relative", zIndex: 2,
// //         maxWidth: 1300, margin: "0 auto", padding: "0 50px",
// //       }}>
// //         <div style={{
// //           height: 1,
// //           background: "linear-gradient(90deg, transparent, rgba(42,93,168,0.5), rgba(14,165,233,0.3), rgba(42,93,168,0.5), transparent)",
// //         }} />
// //       </div>

// //       {/* ── BOTTOM BAR ── */}
// //       <div style={{
// //         position: "relative", zIndex: 2,
// //         maxWidth: 1300, margin: "0 auto",
// //         padding: "16px 50px",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "space-between",
// //         gap: 16,
// //         flexWrap: "wrap",
// //       }}>
// //         <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
// //           © 2026 Innovare Biopharma LLP. All rights reserved.
// //         </span>

// //         <div style={{ display: "flex", gap: 20 }}>
// //           {["Privacy Policy", "Terms", "Cookies"].map(t => (
// //             <a
// //               key={t}
// //               href="#"
// //               style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
// //               onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#93c5fd")}
// //               onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
// //             >
// //               {t}
// //             </a>
// //           ))}
// //         </div>
// //       </div>

// //     </footer>
// //   );
// // }
// "use client";

// import React from "react";
// import Link from "next/link";

// export default function Footer() {
//   const blue   = "#2A5DA8";
//   const accent = "#0EA5E9";
//   const teal   = "#4db8cc";

//   const cols = [
//     {
//       title: "Solutions",
//       links: [
//         { label: "Feed Supplements",    href: "/products?category=feed-supplements" },
//         { label: "Sanitizers",          href: "/products?category=sanitizers" },
//         { label: "Water Treatments",    href: "/products?category=water-treatments" },
//         { label: "Growth Promoters",    href: "/products?category=growth-promoters" },
//         { label: "Vitamins & Minerals", href: "/products?category=vitamins-minerals" },
//         { label: "Gut Probiotics",      href: "/products?category=gut-probiotics" },
//         { label: "Immunity",            href: "/products?category=immunity" },
//       ],
//     },
//     {
//       title: "Company",
//       links: [
//         { label: "About Us",       href: "/about" },
//         { label: "Our Solutions",  href: "/solutions" },
//         { label: "Products",       href: "/products" },
//         { label: "Sustainability", href: "/sustainability" },
//         { label: "Certificates",   href: "/certificates" },
//         { label: "Events",         href: "/events" },
//         { label: "Contact",        href: "/contact" },
//       ],
//     },
//     {
//       title: "Support",
//       links: [
//         { label: "Product Catalogue", href: "/catalogue" },
//         { label: "FAQs",              href: "/faq" },
//         { label: "Contact Us",        href: "/contact" },
//       ],
//     },
//   ];

//   const socialLinks: { label: string; href: string; icon: React.ReactNode; hoverBg: string }[] = [
//     {
//       label: "Instagram", href: "#", hoverBg: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
//       icon: (
//         <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
//               <stop offset="0%"   stopColor="#f09433" />
//               <stop offset="25%"  stopColor="#e6683c" />
//               <stop offset="50%"  stopColor="#dc2743" />
//               <stop offset="75%"  stopColor="#cc2366" />
//               <stop offset="100%" stopColor="#bc1888" />
//             </linearGradient>
//           </defs>
//           <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad)" strokeWidth="2" fill="none"/>
//           <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad)" strokeWidth="2" fill="none"/>
//           <circle cx="17.5" cy="6.5" r="1.3" fill="url(#ig-grad)"/>
//         </svg>
//       ),
//     },
//     {
//       label: "YouTube", href: "#", hoverBg: "#FF0000",
//       icon: (
//         <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <rect x="2" y="5" width="20" height="14" rx="4" fill="#FF0000"/>
//           <polygon points="10,8.5 10,15.5 16,12" fill="#fff"/>
//         </svg>
//       ),
//     },
//     {
//       label: "Facebook", href: "#", hoverBg: "#1877F2",
//       icon: (
//         <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <circle cx="12" cy="12" r="10" fill="#1877F2"/>
//           <path d="M15 8h-1.5C12.67 8 12 8.67 12 9.5V11h3l-.5 3H12v7h-3v-7H7v-3h2V9.5C9 7.57 10.57 6 12.5 6H15v2z" fill="#fff"/>
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <footer style={{ position: "relative", overflow: "hidden", fontFamily: "'Trebuchet MS', sans-serif" }}>

//       {/* ── Background layers ── */}
//       <div style={{
//         position: "absolute", inset: 0,
//         background: "linear-gradient(160deg, #040e24 0%, #071530 45%, #051228 100%)",
//         zIndex: 0,
//       }} />
//       <div style={{
//         position: "absolute", top: -120, left: -80,
//         width: 500, height: 500, borderRadius: "50%",
//         background: "radial-gradient(circle, rgba(42,93,168,0.28) 0%, transparent 70%)",
//         zIndex: 0, pointerEvents: "none",
//       }} />
//       <div style={{
//         position: "absolute", top: "30%", right: -60,
//         width: 360, height: 360, borderRadius: "50%",
//         background: "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 70%)",
//         zIndex: 0, pointerEvents: "none",
//       }} />
//       <div style={{
//         position: "absolute", bottom: -60, left: "40%",
//         width: 420, height: 300, borderRadius: "50%",
//         background: "radial-gradient(circle, rgba(42,93,168,0.18) 0%, transparent 70%)",
//         zIndex: 0, pointerEvents: "none",
//       }} />
//       <div style={{
//         position: "absolute", inset: 0,
//         backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
//         backgroundSize: "28px 28px",
//         zIndex: 0, pointerEvents: "none",
//       }} />
//       <svg
//         style={{ position: "absolute", top: 0, right: 0, width: 340, height: 280, opacity: 0.06, zIndex: 0, pointerEvents: "none" }}
//         viewBox="0 0 340 280" fill="none"
//       >
//         {[0,1,2,3,4,5,6,7,8].map(i => (
//           <line key={i} x1={i * 42} y1="0" x2={i * 42 + 280} y2="280" stroke="#60a5fa" strokeWidth="1" />
//         ))}
//       </svg>
//       {/* Top border glow */}
//       <div style={{
//         position: "absolute", top: 0, left: 0, right: 0, height: 2,
//         background: `linear-gradient(90deg, transparent, ${blue}, ${accent}, ${blue}, transparent)`,
//         zIndex: 1,
//       }} />

//       {/* ── MAIN GRID ── */}
//       <div style={{
//         position: "relative", zIndex: 2,
//         maxWidth: 1300, margin: "0 auto",
//         padding: "60px 50px 32px",
//         display: "grid",
//         gridTemplateColumns: "2fr 1fr 1fr 1fr",
//         gap: 40,
//         alignItems: "start",
//       }}>

//         {/* Brand column */}
//         <div>
//           {/* Logo + name */}
//           <div style={{ display: "flex", gap: 12, marginBottom: 18, alignItems: "center" }}>
//             <div style={{ position: "relative", width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//               <div style={{
//                 position: "absolute", width: 72, height: 72, borderRadius: "50%",
//                 background: "radial-gradient(circle, rgba(42,93,168,0.5) 0%, transparent 70%)",
//                 filter: "blur(10px)",
//               }} />
//               <img
//                 src="/images/logo.png"
//                 alt="Logo"
//                 style={{
//                   width: 80, height: 80, objectFit: "contain",
//                   filter: "drop-shadow(0 0 8px rgba(255,255,255,0.9)) drop-shadow(0 0 16px rgba(255,255,255,0.7))",
//                 }}
//               />
//             </div>
//             <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
//               <p style={{ fontSize: 20, fontWeight: 800, color: "#fff", margin: 0, lineHeight: 1.2 }}>
//                 Innovare Biopharma LLP
//               </p>
//               <p style={{ fontSize: 10, color: teal, letterSpacing: 2, margin: 0, fontWeight: 700 }}>
//                 {/* LLP */}
//               </p>
//             </div>
//           </div>

//           <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", marginBottom: 18 }}>
//             India's innovative manufacturer & exporter of aquaculture products. From hatchery to harvest.
//           </p>

//           {/* Address block */}
//           <div style={{
//             background: "rgba(42,93,168,0.1)",
//             border: "1px solid rgba(42,93,168,0.22)",
//             borderRadius: 12,
//             padding: "14px 16px",
//             marginBottom: 18,
//           }}>
//             <div style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
//               <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>📍</span>
//               <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
//                 Plot No: 256, H No:36-130, Defence Colony,
//                 Sainikpuri Post, Medchal-Malkajgiri Mandal,
//                 Hyderabad, Telangana, India-500094
//               </span>
//             </div>
//             <div style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "center" }}>
//               <span style={{ fontSize: 13, flexShrink: 0 }}>📧</span>
//               <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
//                 info@innovarebiopharma.com
//               </span>
//             </div>
//             <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//               <span style={{ fontSize: 13, flexShrink: 0 }}>📞</span>
//               <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
//                 +91 7799872555 &nbsp;|&nbsp; +91 040-35837199
//               </span>
//             </div>
//           </div>

//           {/* Social icons */}
//           <div style={{ display: "flex", gap: 8 }}>
//             {socialLinks.map(s => (
//               <a
//                 key={s.label}
//                 href={s.href}
//                 aria-label={s.label}
//                 style={{
//                   width: 34, height: 34, borderRadius: 8,
//                   background: "rgba(255,255,255,0.06)",
//                   border: "1px solid rgba(255,255,255,0.12)",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   textDecoration: "none",
//                   transition: "all .2s",
//                 }}
//                 onMouseEnter={e => {
//                   (e.currentTarget as HTMLElement).style.background = s.hoverBg;
//                   (e.currentTarget as HTMLElement).style.borderColor = "transparent";
//                   (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
//                   (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 12px rgba(0,0,0,0.3)`;
//                 }}
//                 onMouseLeave={e => {
//                   (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
//                   (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
//                   (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
//                   (e.currentTarget as HTMLElement).style.boxShadow = "none";
//                 }}
//               >
//                 {s.icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Link columns */}
//         {cols.map(col => (
//           <div key={col.title} style={{ marginLeft: "100px" }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
//               <div style={{ width: 3, height: 14, borderRadius: 2, background: `linear-gradient(180deg, ${blue}, ${accent})` }} />
//               <h4 style={{
//                 fontSize: 12, fontWeight: 700, color: "#fff",
//                 margin: 0, letterSpacing: "1px", textTransform: "uppercase",
//               }}>
//                 {col.title}
//               </h4>
//             </div>
//             <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
//               {col.links.map(link => (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   style={{
//                     fontSize: 13, color: "rgba(255,255,255,0.42)",
//                     textDecoration: "none", transition: "color .2s",
//                     display: "flex", alignItems: "center", gap: 6,
//                   }}
//                   onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#93c5fd")}
//                   onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.42)")}
//                 >
//                   <span style={{ fontSize: 8, color: "rgba(42,93,168,0.5)", flexShrink: 0 }}>▶</span>
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ── DIVIDER ── */}
//       <div style={{
//         position: "relative", zIndex: 2,
//         maxWidth: 1300, margin: "0 auto", padding: "0 50px",
//       }}>
//         <div style={{
//           height: 1,
//           background: "linear-gradient(90deg, transparent, rgba(42,93,168,0.5), rgba(14,165,233,0.3), rgba(42,93,168,0.5), transparent)",
//         }} />
//       </div>

//       {/* ── BOTTOM BAR ── */}
//       <div style={{
//         position: "relative", zIndex: 2,
//         maxWidth: 1300, margin: "0 auto",
//         padding: "16px 50px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         gap: 16,
//         flexWrap: "wrap",
//       }}>
//         <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
//           © 2026 Innovare Biopharma LLP. All rights reserved.
//         </span>

//         <div style={{ display: "flex", gap: 20 }}>
//           {["Privacy Policy", "Terms", "Cookies"].map(t => (
//             <a
//               key={t}
//               href="#"
//               style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
//               onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#93c5fd")}
//               onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
//             >
//               {t}
//             </a>
//           ))}
//         </div>
//       </div>

//     </footer>
//   );
// }
"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const blue   = "#2A5DA8";
  const accent = "#0EA5E9";
  const teal   = "#4db8cc";

  const cols = [
    {
      title: "Solutions",
      links: [
        { label: "Feed Supplements",    href: "/products?category=feed-supplements" },
        { label: "Sanitizers",          href: "/products?category=sanitizers" },
        { label: "Water Treatments",    href: "/products?category=water-treatments" },
        { label: "Growth Promoters",    href: "/products?category=growth-promoters" },
        { label: "Vitamins & Minerals", href: "/products?category=vitamins-minerals" },
        { label: "Gut Probiotics",      href: "/products?category=gut-probiotics" },
        { label: "Immunity",            href: "/products?category=immunity" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us",       href: "/about" },
        { label: "Our Solutions",  href: "/solutions" },
        { label: "Products",       href: "/products" },
        { label: "Sustainability", href: "/sustainability" },
        { label: "Certificates",   href: "/certificates" },
        { label: "Events",         href: "/events" },
        { label: "Contact",        href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Product Catalogue", href: "/catalogue" },
        { label: "FAQs",              href: "/faq" },
        { label: "Contact Us",        href: "/contact" },
      ],
    },
  ];

  const socialLinks: { label: string; href: string; icon: React.ReactNode; hoverBg: string }[] = [
    {
      label: "Instagram", href: "#", hoverBg: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#f09433" />
              <stop offset="25%"  stopColor="#e6683c" />
              <stop offset="50%"  stopColor="#dc2743" />
              <stop offset="75%"  stopColor="#cc2366" />
              <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad)" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad)" strokeWidth="2" fill="none"/>
          <circle cx="17.5" cy="6.5" r="1.3" fill="url(#ig-grad)"/>
        </svg>
      ),
    },
    {
      label: "YouTube", href: "#", hoverBg: "#FF0000",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="5" width="20" height="14" rx="4" fill="#FF0000"/>
          <polygon points="10,8.5 10,15.5 16,12" fill="#fff"/>
        </svg>
      ),
    },
    {
      label: "Facebook", href: "#", hoverBg: "#1877F2",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#1877F2"/>
          <path d="M15 8h-1.5C12.67 8 12 8.67 12 9.5V11h3l-.5 3H12v7h-3v-7H7v-3h2V9.5C9 7.57 10.57 6 12.5 6H15v2z" fill="#fff"/>
        </svg>
      ),
    },
  ];

  return (
    <footer style={{ position: "relative", overflow: "hidden", fontFamily: "'Trebuchet MS', sans-serif" }}>

      <style jsx>{`
        .footer-grid {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          margin: 0 auto;
          padding: 60px 50px 32px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        .footer-link-col {
          margin-left: 60px;
        }
        .footer-logo-wrap {
          position: relative;
          width: clamp(44px, 6vw, 56px);
          height: clamp(44px, 6vw, 56px);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .footer-logo-glow {
          position: absolute;
          width: clamp(56px, 7.5vw, 72px);
          height: clamp(56px, 7.5vw, 72px);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(42,93,168,0.5) 0%, transparent 70%);
          filter: blur(10px);
        }
        .footer-logo-img {
          width: clamp(52px, 7vw, 80px);
          height: clamp(52px, 7vw, 80px);
          object-fit: contain;
          filter: drop-shadow(0 0 8px rgba(255,255,255,0.9)) drop-shadow(0 0 16px rgba(255,255,255,0.7));
        }
        .footer-brand-name {
          font-size: clamp(17px, 2.4vw, 20px);
        }
        .footer-bottom-bar {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          margin: 0 auto;
          padding: 16px 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (min-width: 1200px) {
          .footer-link-col { margin-left: 60px; }
        }

        @media (max-width: 1100px) {
          .footer-grid {
            grid-template-columns: 1.4fr 1fr 1fr;
            padding: 52px 36px 28px;
            gap: 28px;
          }
          .footer-link-col { margin-left: 0; }
          .footer-brand-col { grid-column: 1 / -1; }
        }

        @media (max-width: 760px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            padding: 44px 24px 24px;
            gap: 28px 20px;
          }
        }

        @media (max-width: 520px) {
          .footer-grid {
            grid-template-columns: 1fr;
            padding: 36px 20px 20px;
            gap: 30px;
          }
          .footer-bottom-bar {
            padding: 16px 20px;
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>

      {/* ── Background layers ── */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(160deg, #040e24 0%, #071530 45%, #051228 100%)",
        zIndex: 0,
      }} />
      <div style={{
        position: "absolute", top: -120, left: -80,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(42,93,168,0.28) 0%, transparent 70%)",
        zIndex: 0, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "30%", right: -60,
        width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 70%)",
        zIndex: 0, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -60, left: "40%",
        width: 420, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(42,93,168,0.18) 0%, transparent 70%)",
        zIndex: 0, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        zIndex: 0, pointerEvents: "none",
      }} />
      <svg
        style={{ position: "absolute", top: 0, right: 0, width: 340, height: 280, opacity: 0.06, zIndex: 0, pointerEvents: "none" }}
        viewBox="0 0 340 280" fill="none"
      >
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <line key={i} x1={i * 42} y1="0" x2={i * 42 + 280} y2="280" stroke="#60a5fa" strokeWidth="1" />
        ))}
      </svg>
      {/* Top border glow */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${blue}, ${accent}, ${blue}, transparent)`,
        zIndex: 1,
      }} />

      {/* ── MAIN GRID ── */}
      <div className="footer-grid">

        {/* Brand column */}
        <div className="footer-brand-col">
          {/* Logo + name */}
          <div style={{ display: "flex", gap: 12, marginBottom: 18, alignItems: "center" }}>
            <div className="footer-logo-wrap">
              <div className="footer-logo-glow" />
              <img
                src="/images/logo.png"
                alt="Logo"
                className="footer-logo-img"
              />
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <p className="footer-brand-name" style={{ fontWeight: 800, color: "#fff", margin: 0, lineHeight: 1.2 }}>
                Innovare Biopharma LLP
              </p>
              <p style={{ fontSize: 10, color: teal, letterSpacing: 2, margin: 0, fontWeight: 700 }}>
                {/* LLP */}
              </p>
            </div>
          </div>

          <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", marginBottom: 18 }}>
            India's innovative manufacturer & exporter of aquaculture products. From hatchery to harvest.
          </p>

          {/* Address block */}
          <div style={{
            background: "rgba(42,93,168,0.1)",
            border: "1px solid rgba(42,93,168,0.22)",
            borderRadius: 12,
            padding: "14px 16px",
            marginBottom: 18,
          }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
              <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>📍</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
                Plot No: 256, H No:36-130, Defence Colony,
                Sainikpuri Post, Medchal-Malkajgiri Mandal,
                Hyderabad, Telangana, India-500094
              </span>
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, flexShrink: 0 }}>📧</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5, wordBreak: "break-all" }}>
                info@innovarebiopharma.com
              </span>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ fontSize: 13, flexShrink: 0 }}>📞</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                +91 7799872555 &nbsp;|&nbsp; +91 040-35837199
              </span>
            </div>
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 8 }}>
            {socialLinks.map(s => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                style={{
                  width: 34, height: 34, borderRadius: 8,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  textDecoration: "none",
                  transition: "all .2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = s.hoverBg;
                  (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 12px rgba(0,0,0,0.3)`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {cols.map(col => (
          <div key={col.title} className="footer-link-col">
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
              <div style={{ width: 3, height: 14, borderRadius: 2, background: `linear-gradient(180deg, ${blue}, ${accent})` }} />
              <h4 style={{
                fontSize: 12, fontWeight: 700, color: "#fff",
                margin: 0, letterSpacing: "1px", textTransform: "uppercase",
              }}>
                {col.title}
              </h4>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {col.links.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: 13, color: "rgba(255,255,255,0.42)",
                    textDecoration: "none", transition: "color .2s",
                    display: "flex", alignItems: "center", gap: 6,
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#93c5fd")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.42)")}
                >
                  <span style={{ fontSize: 8, color: "rgba(42,93,168,0.5)", flexShrink: 0 }}>▶</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── DIVIDER ── */}
      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: 1300, margin: "0 auto", padding: "0 50px",
      }}>
        <div style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(42,93,168,0.5), rgba(14,165,233,0.3), rgba(42,93,168,0.5), transparent)",
        }} />
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="footer-bottom-bar">
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
          © 2026 Innovare Biopharma LLP. All rights reserved.
        </span>

        <div style={{ display: "flex", gap: 20 }}>
          {["Privacy Policy", "Terms", "Cookies"].map(t => (
            <a
              key={t}
              href="#"
              style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#93c5fd")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
            >
              {t}
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
}