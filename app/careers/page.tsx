// // // // // // // // // // // // // "use client";
// // // // // // // // // // // // // import { useState, useMemo } from "react";
// // // // // // // // // // // // // import { X, MapPin, Clock, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";

// // // // // // // // // // // // // /* ────────────────────────────────────────────────────────────
// // // // // // // // // // // // //    JOB DATA
// // // // // // // // // // // // //    Replace / extend this array with real openings. Each entry
// // // // // // // // // // // // //    drives both the listing card and the detail panel — nothing
// // // // // // // // // // // // //    else needs to change when you add or remove a role.
// // // // // // // // // // // // //    ──────────────────────────────────────────────────────────── */
// // // // // // // // // // // // // type Job = {
// // // // // // // // // // // // //   id: string;
// // // // // // // // // // // // //   title: string;
// // // // // // // // // // // // //   department: "Aquaculture" | "Poultry" | "Cattle" | "Corporate";
// // // // // // // // // // // // //   location: string;
// // // // // // // // // // // // //   type: "Full-time" | "Part-time" | "Internship";
// // // // // // // // // // // // //   experience: string;
// // // // // // // // // // // // //   summary: string;
// // // // // // // // // // // // //   responsibilities: string[];
// // // // // // // // // // // // //   requirements: string[];
// // // // // // // // // // // // // };

// // // // // // // // // // // // // const departmentAccent: Record<Job["department"], string> = {
// // // // // // // // // // // // //   Aquaculture: "#0ea5e9",
// // // // // // // // // // // // //   Poultry: "#f59e0b",
// // // // // // // // // // // // //   Cattle: "#22c55e",
// // // // // // // // // // // // //   Corporate: "#2A5DA8",
// // // // // // // // // // // // // };

// // // // // // // // // // // // // const departmentIcon: Record<Job["department"], string> = {
// // // // // // // // // // // // //   Aquaculture: "🦐",
// // // // // // // // // // // // //   Poultry: "🐔",
// // // // // // // // // // // // //   Cattle: "🐄",
// // // // // // // // // // // // //   Corporate: "🏢",
// // // // // // // // // // // // // };

// // // // // // // // // // // // // const jobs: Job[] = [
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: "aqua-tech-sales-hyd",
// // // // // // // // // // // // //     title: "Aquaculture Technical Sales Executive",
// // // // // // // // // // // // //     department: "Aquaculture",
// // // // // // // // // // // // //     location: "Hyderabad, Telangana",
// // // // // // // // // // // // //     type: "Full-time",
// // // // // // // // // // // // //     experience: "2-4 years",
// // // // // // // // // // // // //     summary:
// // // // // // // // // // // // //       "Work directly with shrimp and fish farmers across the region, recommending health and nutrition products and building long-term farm relationships.",
// // // // // // // // // // // // //     responsibilities: [
// // // // // // // // // // // // //       "Visit farms to assess water quality, stock health, and product needs",
// // // // // // // // // // // // //       "Recommend Innovare probiotic, mineral, and health products to farmers and distributors",
// // // // // // // // // // // // //       "Build and maintain a territory of repeat farm accounts",
// // // // // // // // // // // // //       "Report field feedback to the product and R&D teams",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //     requirements: [
// // // // // // // // // // // // //       "Degree in Aquaculture, Fisheries Science, or related field",
// // // // // // // // // // // // //       "Comfortable with frequent farm-site travel",
// // // // // // // // // // // // //       "Strong communication skills in Telugu and English",
// // // // // // // // // // // // //       "Two-wheeler and valid driving license preferred",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: "qc-microbiologist",
// // // // // // // // // // // // //     title: "Quality Control Microbiologist",
// // // // // // // // // // // // //     department: "Corporate",
// // // // // // // // // // // // //     location: "Manufacturing Unit, Telangana",
// // // // // // // // // // // // //     type: "Full-time",
// // // // // // // // // // // // //     experience: "1-3 years",
// // // // // // // // // // // // //     summary:
// // // // // // // // // // // // //       "Own day-to-day quality testing for probiotic and mineral formulations, keeping our GMP and ISO processes airtight.",
// // // // // // // // // // // // //     responsibilities: [
// // // // // // // // // // // // //       "Run microbial and chemical QC tests on raw materials and finished batches",
// // // // // // // // // // // // //       "Maintain documentation for GMP and ISO 9001 compliance",
// // // // // // // // // // // // //       "Flag and escalate any batch deviations to production",
// // // // // // // // // // // // //       "Support internal and third-party certification audits",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //     requirements: [
// // // // // // // // // // // // //       "M.Sc. in Microbiology, Biotechnology, or related field",
// // // // // // // // // // // // //       "Familiarity with GMP-regulated lab environments",
// // // // // // // // // // // // //       "Meticulous documentation habits",
// // // // // // // // // // // // //       "Prior pharma or nutraceutical QC experience is a plus",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: "poultry-field-officer",
// // // // // // // // // // // // //     title: "Poultry Field Officer",
// // // // // // // // // // // // //     department: "Poultry",
// // // // // // // // // // // // //     location: "Telangana & Andhra Pradesh (Field)",
// // // // // // // // // // // // //     type: "Full-time",
// // // // // // // // // // // // //     experience: "1-3 years",
// // // // // // // // // // // // //     summary:
// // // // // // // // // // // // //       "Support poultry farms with health and hygiene product guidance, acting as the on-ground face of Innovare in your territory.",
// // // // // // // // // // // // //     responsibilities: [
// // // // // // // // // // // // //       "Conduct farm visits and demonstrate proper product usage",
// // // // // // // // // // // // //       "Track flock health outcomes and share reports with the team",
// // // // // // // // // // // // //       "Coordinate with distributors on stock and delivery schedules",
// // // // // // // // // // // // //       "Identify new farm accounts within the assigned territory",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //     requirements: [
// // // // // // // // // // // // //       "Diploma or degree in Veterinary Science, Poultry Science, or Agriculture",
// // // // // // // // // // // // //       "Willingness to travel extensively within the territory",
// // // // // // // // // // // // //       "Basic understanding of poultry health and biosecurity",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: "digital-marketing-associate",
// // // // // // // // // // // // //     title: "Digital Marketing Associate",
// // // // // // // // // // // // //     department: "Corporate",
// // // // // // // // // // // // //     location: "Hyderabad, Telangana (Hybrid)",
// // // // // // // // // // // // //     type: "Full-time",
// // // // // // // // // // // // //     experience: "0-2 years",
// // // // // // // // // // // // //     summary:
// // // // // // // // // // // // //       "Help tell the Innovare story across our website, social channels, and farmer-facing content — this role sits close to product and sales.",
// // // // // // // // // // // // //     responsibilities: [
// // // // // // // // // // // // //       "Plan and publish content across LinkedIn, Instagram, and Facebook",
// // // // // // // // // // // // //       "Support website updates and product catalogue content",
// // // // // // // // // // // // //       "Coordinate photo/video shoots at farms and events",
// // // // // // // // // // // // //       "Track campaign performance and report on key metrics",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //     requirements: [
// // // // // // // // // // // // //       "Degree in Marketing, Mass Communication, or related field",
// // // // // // // // // // // // //       "Hands-on experience with content creation and scheduling tools",
// // // // // // // // // // // // //       "Basic design sense; Canva or similar tools",
// // // // // // // // // // // // //       "Interest in agriculture or life-sciences marketing is a plus",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: "cattle-nutrition-intern",
// // // // // // // // // // // // //     title: "Cattle Nutrition Intern",
// // // // // // // // // // // // //     department: "Cattle",
// // // // // // // // // // // // //     location: "Hyderabad, Telangana",
// // // // // // // // // // // // //     type: "Internship",
// // // // // // // // // // // // //     experience: "Final-year students",
// // // // // // // // // // // // //     summary:
// // // // // // // // // // // // //       "A hands-on internship supporting our cattle supplement line — from formulation trials to farm feedback collection.",
// // // // // // // // // // // // //     responsibilities: [
// // // // // // // // // // // // //       "Assist with documentation for supplement trials",
// // // // // // // // // // // // //       "Compile farm feedback on product performance",
// // // // // // // // // // // // //       "Support the technical team with literature research",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //     requirements: [
// // // // // // // // // // // // //       "Pursuing a degree in Veterinary Science or Animal Nutrition",
// // // // // // // // // // // // //       "Available for a minimum 3-month internship",
// // // // // // // // // // // // //       "Curious, organized, and comfortable in a small team",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //   },
// // // // // // // // // // // // // ];

// // // // // // // // // // // // // const departments = ["All", "Aquaculture", "Poultry", "Cattle", "Corporate"] as const;

// // // // // // // // // // // // // /* Replace with your real HR contact details */
// // // // // // // // // // // // // const APPLY_WHATSAPP_NUMBER = "919999999999"; // country code + number, no symbols
// // // // // // // // // // // // // const APPLY_EMAIL = "careers@innovarebiopharma.com";

// // // // // // // // // // // // // export default function CareersPage() {
// // // // // // // // // // // // //   const [activeDept, setActiveDept] = useState<(typeof departments)[number]>("All");
// // // // // // // // // // // // //   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

// // // // // // // // // // // // //   const filteredJobs = useMemo(
// // // // // // // // // // // // //     () => (activeDept === "All" ? jobs : jobs.filter((j) => j.department === activeDept)),
// // // // // // // // // // // // //     [activeDept]
// // // // // // // // // // // // //   );

// // // // // // // // // // // // //   const waLink = (job: Job) =>
// // // // // // // // // // // // //     `https://wa.me/${APPLY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
// // // // // // // // // // // // //       `Hi Innovare Biopharma, I'd like to apply for the ${job.title} role (${job.location}).`
// // // // // // // // // // // // //     )}`;

// // // // // // // // // // // // //   const mailLink = (job: Job) =>
// // // // // // // // // // // // //     `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
// // // // // // // // // // // // //       `Application: ${job.title}`
// // // // // // // // // // // // //     )}&body=${encodeURIComponent(
// // // // // // // // // // // // //       `Hi Innovare Biopharma team,\n\nI'd like to apply for the ${job.title} role (${job.location}).\n\nName:\nPhone:\nResume link:\n\n`
// // // // // // // // // // // // //     )}`;

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <main className="min-h-screen bg-white pt-16 sm:pt-[76px] lg:pt-[84px] xl:pt-[92px]">
// // // // // // // // // // // // //       {/* ── Hero ── */}
// // // // // // // // // // // // //       <section
// // // // // // // // // // // // //         className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
// // // // // // // // // // // // //         style={{
// // // // // // // // // // // // //           background:
// // // // // // // // // // // // //             "radial-gradient(120% 140% at 15% 0%, #0f2942 0%, #0a1e33 45%, #071726 100%)",
// // // // // // // // // // // // //         }}
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         {/* soft hexagon watermark, echoes the logo mark */}
// // // // // // // // // // // // //         <svg
// // // // // // // // // // // // //           className="pointer-events-none absolute -right-24 -top-24 opacity-[0.07]"
// // // // // // // // // // // // //           width="520"
// // // // // // // // // // // // //           height="520"
// // // // // // // // // // // // //           viewBox="0 0 100 100"
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <polygon
// // // // // // // // // // // // //             points="50,3 93,26 93,74 50,97 7,74 7,26"
// // // // // // // // // // // // //             fill="none"
// // // // // // // // // // // // //             stroke="#5FA8E0"
// // // // // // // // // // // // //             strokeWidth="1.4"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </svg>

// // // // // // // // // // // // //         <div className="relative max-w-4xl mx-auto text-center">
// // // // // // // // // // // // //           <div
// // // // // // // // // // // // //             className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-[11px] sm:text-[12px] font-semibold tracking-wide"
// // // // // // // // // // // // //             style={{
// // // // // // // // // // // // //               color: "#7fd4ff",
// // // // // // // // // // // // //               border: "1px solid rgba(127,212,255,0.25)",
// // // // // // // // // // // // //               background: "rgba(127,212,255,0.06)",
// // // // // // // // // // // // //             }}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <span
// // // // // // // // // // // // //               className="inline-block w-2 h-2 rounded-full"
// // // // // // // // // // // // //               style={{ background: "#38bdf8" }}
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //             WE&apos;RE HIRING
// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //           <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] mb-5">
// // // // // // // // // // // // //             Build the future of{" "}
// // // // // // // // // // // // //             <span style={{ color: "#5FA8E0" }}>aquaculture health</span> with us
// // // // // // // // // // // // //           </h1>

// // // // // // // // // // // // //           <p className="text-[14px] sm:text-[16px] text-slate-300 max-w-2xl mx-auto leading-relaxed">
// // // // // // // // // // // // //             From farm-level fieldwork to formulation science, every role at Innovare
// // // // // // // // // // // // //             connects back to healthier ponds, farms, and livelihoods. Here&apos;s what
// // // // // // // // // // // // //             we&apos;re hiring for right now.
// // // // // // // // // // // // //           </p>

// // // // // // // // // // // // //           <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-10 pt-8 border-t border-white/10">
// // // // // // // // // // // // //             {[
// // // // // // // // // // // // //               { label: "OPEN ROLES", value: String(jobs.length) },
// // // // // // // // // // // // //               { label: "DEPARTMENTS", value: "4" },
// // // // // // // // // // // // //               { label: "FIELD + OFFICE", value: "Hybrid" },
// // // // // // // // // // // // //             ].map((s) => (
// // // // // // // // // // // // //               <div key={s.label} className="text-center">
// // // // // // // // // // // // //                 <div className="text-[22px] sm:text-[26px] font-bold text-white">{s.value}</div>
// // // // // // // // // // // // //                 <div className="text-[10px] sm:text-[11px] tracking-[0.15em] text-slate-400 mt-1">
// // // // // // // // // // // // //                   {s.label}
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //             ))}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </section>

// // // // // // // // // // // // //       {/* ── Filters + listing ── */}
// // // // // // // // // // // // //       <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
// // // // // // // // // // // // //         <div className="flex flex-wrap gap-2 mb-10 justify-center">
// // // // // // // // // // // // //           {departments.map((d) => {
// // // // // // // // // // // // //             const active = activeDept === d;
// // // // // // // // // // // // //             return (
// // // // // // // // // // // // //               <button
// // // // // // // // // // // // //                 key={d}
// // // // // // // // // // // // //                 onClick={() => setActiveDept(d)}
// // // // // // // // // // // // //                 className="px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all"
// // // // // // // // // // // // //                 style={{
// // // // // // // // // // // // //                   background: active ? "#2A5DA8" : "#f1f5f9",
// // // // // // // // // // // // //                   color: active ? "#fff" : "#475569",
// // // // // // // // // // // // //                   border: active ? "1px solid #2A5DA8" : "1px solid #e2e8f0",
// // // // // // // // // // // // //                 }}
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 {d}
// // // // // // // // // // // // //               </button>
// // // // // // // // // // // // //             );
// // // // // // // // // // // // //           })}
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {filteredJobs.length === 0 ? (
// // // // // // // // // // // // //           <div className="text-center py-20">
// // // // // // // // // // // // //             <p className="text-[15px] text-slate-500">
// // // // // // // // // // // // //               No open roles in this department right now — check back soon, or reach out
// // // // // // // // // // // // //               anyway at{" "}
// // // // // // // // // // // // //               <a href={`mailto:${APPLY_EMAIL}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // // // // // // // // // // // //                 {APPLY_EMAIL}
// // // // // // // // // // // // //               </a>
// // // // // // // // // // // // //               .
// // // // // // // // // // // // //             </p>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         ) : (
// // // // // // // // // // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
// // // // // // // // // // // // //             {filteredJobs.map((job) => {
// // // // // // // // // // // // //               const accent = departmentAccent[job.department];
// // // // // // // // // // // // //               return (
// // // // // // // // // // // // //                 <button
// // // // // // // // // // // // //                   key={job.id}
// // // // // // // // // // // // //                   onClick={() => setSelectedJob(job)}
// // // // // // // // // // // // //                   className="text-left rounded-2xl p-6 border transition-all duration-200 flex flex-col h-full bg-white hover:-translate-y-1"
// // // // // // // // // // // // //                   style={{
// // // // // // // // // // // // //                     borderColor: "#e8edf5",
// // // // // // // // // // // // //                     boxShadow: "0 2px 10px rgba(15,41,66,0.05)",
// // // // // // // // // // // // //                   }}
// // // // // // // // // // // // //                   onMouseEnter={(e) => {
// // // // // // // // // // // // //                     e.currentTarget.style.boxShadow = `0 14px 32px ${accent}22`;
// // // // // // // // // // // // //                     e.currentTarget.style.borderColor = accent;
// // // // // // // // // // // // //                   }}
// // // // // // // // // // // // //                   onMouseLeave={(e) => {
// // // // // // // // // // // // //                     e.currentTarget.style.boxShadow = "0 2px 10px rgba(15,41,66,0.05)";
// // // // // // // // // // // // //                     e.currentTarget.style.borderColor = "#e8edf5";
// // // // // // // // // // // // //                   }}
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   <div className="flex items-center justify-between mb-4">
// // // // // // // // // // // // //                     <span
// // // // // // // // // // // // //                       className="w-11 h-11 rounded-xl flex items-center justify-center text-lg"
// // // // // // // // // // // // //                       style={{ background: `${accent}14` }}
// // // // // // // // // // // // //                     >
// // // // // // // // // // // // //                       {departmentIcon[job.department]}
// // // // // // // // // // // // //                     </span>
// // // // // // // // // // // // //                     <span
// // // // // // // // // // // // //                       className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full"
// // // // // // // // // // // // //                       style={{ color: accent, background: `${accent}14` }}
// // // // // // // // // // // // //                     >
// // // // // // // // // // // // //                       {job.department.toUpperCase()}
// // // // // // // // // // // // //                     </span>
// // // // // // // // // // // // //                   </div>

// // // // // // // // // // // // //                   <h3 className="text-[16px] font-bold text-slate-800 mb-2 leading-snug">
// // // // // // // // // // // // //                     {job.title}
// // // // // // // // // // // // //                   </h3>
// // // // // // // // // // // // //                   <p className="text-[13px] text-slate-500 leading-relaxed mb-5 flex-1">
// // // // // // // // // // // // //                     {job.summary}
// // // // // // // // // // // // //                   </p>

// // // // // // // // // // // // //                   <div className="flex flex-col gap-1.5 text-[12px] text-slate-500 mb-4">
// // // // // // // // // // // // //                     <span className="flex items-center gap-1.5">
// // // // // // // // // // // // //                       <MapPin size={13} /> {job.location}
// // // // // // // // // // // // //                     </span>
// // // // // // // // // // // // //                     <span className="flex items-center gap-1.5">
// // // // // // // // // // // // //                       <Clock size={13} /> {job.type} · {job.experience}
// // // // // // // // // // // // //                     </span>
// // // // // // // // // // // // //                   </div>

// // // // // // // // // // // // //                   <span
// // // // // // // // // // // // //                     className="inline-flex items-center gap-1 text-[12.5px] font-bold mt-auto"
// // // // // // // // // // // // //                     style={{ color: accent }}
// // // // // // // // // // // // //                   >
// // // // // // // // // // // // //                     View role <ArrowRight size={14} />
// // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // //               );
// // // // // // // // // // // // //             })}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         )}
// // // // // // // // // // // // //       </section>

// // // // // // // // // // // // //       {/* ── Detail modal ── */}
// // // // // // // // // // // // //       {selectedJob && (
// // // // // // // // // // // // //         <div
// // // // // // // // // // // // //           className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/50 px-0 sm:px-4"
// // // // // // // // // // // // //           onClick={() => setSelectedJob(null)}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <div
// // // // // // // // // // // // //             className="bg-white w-full sm:max-w-2xl sm:rounded-3xl rounded-t-3xl max-h-[90vh] overflow-y-auto"
// // // // // // // // // // // // //             onClick={(e) => e.stopPropagation()}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <div
// // // // // // // // // // // // //               className="sticky top-0 flex items-start justify-between p-6 border-b bg-white z-10"
// // // // // // // // // // // // //               style={{ borderColor: "#f0f0f0" }}
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <div>
// // // // // // // // // // // // //                 <span
// // // // // // // // // // // // //                   className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full inline-block mb-3"
// // // // // // // // // // // // //                   style={{
// // // // // // // // // // // // //                     color: departmentAccent[selectedJob.department],
// // // // // // // // // // // // //                     background: `${departmentAccent[selectedJob.department]}14`,
// // // // // // // // // // // // //                   }}
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   {selectedJob.department.toUpperCase()}
// // // // // // // // // // // // //                 </span>
// // // // // // // // // // // // //                 <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-800 leading-snug">
// // // // // // // // // // // // //                   {selectedJob.title}
// // // // // // // // // // // // //                 </h2>
// // // // // // // // // // // // //                 <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[12.5px] text-slate-500">
// // // // // // // // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // // // // // // // //                     <MapPin size={13} /> {selectedJob.location}
// // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // // // // // // // //                     <Briefcase size={13} /> {selectedJob.type}
// // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // // // // // // // //                     <Clock size={13} /> {selectedJob.experience}
// // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //               <button
// // // // // // // // // // // // //                 onClick={() => setSelectedJob(null)}
// // // // // // // // // // // // //                 className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full"
// // // // // // // // // // // // //                 style={{ background: "#f8fafc", color: "#64748b" }}
// // // // // // // // // // // // //                 aria-label="Close"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <X size={18} />
// // // // // // // // // // // // //               </button>
// // // // // // // // // // // // //             </div>

// // // // // // // // // // // // //             <div className="p-6 space-y-6">
// // // // // // // // // // // // //               <p className="text-[13.5px] text-slate-600 leading-relaxed">
// // // // // // // // // // // // //                 {selectedJob.summary}
// // // // // // // // // // // // //               </p>

// // // // // // // // // // // // //               <div>
// // // // // // // // // // // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3">What you&apos;ll do</h3>
// // // // // // // // // // // // //                 <ul className="space-y-2">
// // // // // // // // // // // // //                   {selectedJob.responsibilities.map((r, i) => (
// // // // // // // // // // // // //                     <li key={i} className="flex items-start gap-2 text-[13px] text-slate-600">
// // // // // // // // // // // // //                       <CheckCircle2
// // // // // // // // // // // // //                         size={15}
// // // // // // // // // // // // //                         className="mt-0.5 shrink-0"
// // // // // // // // // // // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // // // // // // // //                       />
// // // // // // // // // // // // //                       {r}
// // // // // // // // // // // // //                     </li>
// // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // //                 </ul>
// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //               <div>
// // // // // // // // // // // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3">What we&apos;re looking for</h3>
// // // // // // // // // // // // //                 <ul className="space-y-2">
// // // // // // // // // // // // //                   {selectedJob.requirements.map((r, i) => (
// // // // // // // // // // // // //                     <li key={i} className="flex items-start gap-2 text-[13px] text-slate-600">
// // // // // // // // // // // // //                       <CheckCircle2
// // // // // // // // // // // // //                         size={15}
// // // // // // // // // // // // //                         className="mt-0.5 shrink-0"
// // // // // // // // // // // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // // // // // // // //                       />
// // // // // // // // // // // // //                       {r}
// // // // // // // // // // // // //                     </li>
// // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // //                 </ul>
// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //               <div className="flex flex-col sm:flex-row gap-3 pt-2">
// // // // // // // // // // // // //                 <a
// // // // // // // // // // // // //                   href={waLink(selectedJob)}
// // // // // // // // // // // // //                   target="_blank"
// // // // // // // // // // // // //                   rel="noopener noreferrer"
// // // // // // // // // // // // //                   className="flex-1 flex items-center justify-center gap-2 rounded-full py-3 text-[13.5px] font-bold text-white no-underline"
// // // // // // // // // // // // //                   style={{ background: "#25D366" }}
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   Apply via WhatsApp
// // // // // // // // // // // // //                 </a>
// // // // // // // // // // // // //                 <a
// // // // // // // // // // // // //                   href={mailLink(selectedJob)}
// // // // // // // // // // // // //                   className="flex-1 flex items-center justify-center gap-2 rounded-full py-3 text-[13.5px] font-bold no-underline"
// // // // // // // // // // // // //                   style={{ border: "1.5px solid #2A5DA8", color: "#2A5DA8" }}
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   Apply via Email
// // // // // // // // // // // // //                 </a>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //     </main>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }
// // // // // // // // // // // // "use client";
// // // // // // // // // // // // import { useState, useMemo } from "react";
// // // // // // // // // // // // import { X, MapPin, Clock, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";

// // // // // // // // // // // // /* ────────────────────────────────────────────────────────────
// // // // // // // // // // // //    JOB DATA
// // // // // // // // // // // //    Replace / extend this array with real openings. Each entry
// // // // // // // // // // // //    drives both the listing card and the detail panel — nothing
// // // // // // // // // // // //    else needs to change when you add or remove a role.
// // // // // // // // // // // //    ──────────────────────────────────────────────────────────── */
// // // // // // // // // // // // type Job = {
// // // // // // // // // // // //   id: string;
// // // // // // // // // // // //   title: string;
// // // // // // // // // // // //   department: "Aquaculture" | "Poultry" | "Cattle" | "Corporate";
// // // // // // // // // // // //   location: string;
// // // // // // // // // // // //   type: "Full-time" | "Part-time" | "Internship";
// // // // // // // // // // // //   experience: string;
// // // // // // // // // // // //   summary: string;
// // // // // // // // // // // //   responsibilities: string[];
// // // // // // // // // // // //   requirements: string[];
// // // // // // // // // // // // };

// // // // // // // // // // // // const departmentAccent: Record<Job["department"], string> = {
// // // // // // // // // // // //   Aquaculture: "#0ea5e9",
// // // // // // // // // // // //   Poultry: "#f59e0b",
// // // // // // // // // // // //   Cattle: "#22c55e",
// // // // // // // // // // // //   Corporate: "#2A5DA8",
// // // // // // // // // // // // };

// // // // // // // // // // // // const departmentIcon: Record<Job["department"], string> = {
// // // // // // // // // // // //   Aquaculture: "🦐",
// // // // // // // // // // // //   Poultry: "🐔",
// // // // // // // // // // // //   Cattle: "🐄",
// // // // // // // // // // // //   Corporate: "🏢",
// // // // // // // // // // // // };

// // // // // // // // // // // // const jobs: Job[] = [
// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: "aqua-tech-sales-hyd",
// // // // // // // // // // // //     title: "Aquaculture Technical Sales Executive",
// // // // // // // // // // // //     department: "Aquaculture",
// // // // // // // // // // // //     location: "Hyderabad, Telangana",
// // // // // // // // // // // //     type: "Full-time",
// // // // // // // // // // // //     experience: "2-4 years",
// // // // // // // // // // // //     summary:
// // // // // // // // // // // //       "Work directly with shrimp and fish farmers across the region, recommending health and nutrition products and building long-term farm relationships.",
// // // // // // // // // // // //     responsibilities: [
// // // // // // // // // // // //       "Visit farms to assess water quality, stock health, and product needs",
// // // // // // // // // // // //       "Recommend Innovare probiotic, mineral, and health products to farmers and distributors",
// // // // // // // // // // // //       "Build and maintain a territory of repeat farm accounts",
// // // // // // // // // // // //       "Report field feedback to the product and R&D teams",
// // // // // // // // // // // //     ],
// // // // // // // // // // // //     requirements: [
// // // // // // // // // // // //       "Degree in Aquaculture, Fisheries Science, or related field",
// // // // // // // // // // // //       "Comfortable with frequent farm-site travel",
// // // // // // // // // // // //       "Strong communication skills in Telugu and English",
// // // // // // // // // // // //       "Two-wheeler and valid driving license preferred",
// // // // // // // // // // // //     ],
// // // // // // // // // // // //   },
// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: "qc-microbiologist",
// // // // // // // // // // // //     title: "Quality Control Microbiologist",
// // // // // // // // // // // //     department: "Corporate",
// // // // // // // // // // // //     location: "Manufacturing Unit, Telangana",
// // // // // // // // // // // //     type: "Full-time",
// // // // // // // // // // // //     experience: "1-3 years",
// // // // // // // // // // // //     summary:
// // // // // // // // // // // //       "Own day-to-day quality testing for probiotic and mineral formulations, keeping our GMP and ISO processes airtight.",
// // // // // // // // // // // //     responsibilities: [
// // // // // // // // // // // //       "Run microbial and chemical QC tests on raw materials and finished batches",
// // // // // // // // // // // //       "Maintain documentation for GMP and ISO 9001 compliance",
// // // // // // // // // // // //       "Flag and escalate any batch deviations to production",
// // // // // // // // // // // //       "Support internal and third-party certification audits",
// // // // // // // // // // // //     ],
// // // // // // // // // // // //     requirements: [
// // // // // // // // // // // //       "M.Sc. in Microbiology, Biotechnology, or related field",
// // // // // // // // // // // //       "Familiarity with GMP-regulated lab environments",
// // // // // // // // // // // //       "Meticulous documentation habits",
// // // // // // // // // // // //       "Prior pharma or nutraceutical QC experience is a plus",
// // // // // // // // // // // //     ],
// // // // // // // // // // // //   },
// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: "poultry-field-officer",
// // // // // // // // // // // //     title: "Poultry Field Officer",
// // // // // // // // // // // //     department: "Poultry",
// // // // // // // // // // // //     location: "Telangana & Andhra Pradesh (Field)",
// // // // // // // // // // // //     type: "Full-time",
// // // // // // // // // // // //     experience: "1-3 years",
// // // // // // // // // // // //     summary:
// // // // // // // // // // // //       "Support poultry farms with health and hygiene product guidance, acting as the on-ground face of Innovare in your territory.",
// // // // // // // // // // // //     responsibilities: [
// // // // // // // // // // // //       "Conduct farm visits and demonstrate proper product usage",
// // // // // // // // // // // //       "Track flock health outcomes and share reports with the team",
// // // // // // // // // // // //       "Coordinate with distributors on stock and delivery schedules",
// // // // // // // // // // // //       "Identify new farm accounts within the assigned territory",
// // // // // // // // // // // //     ],
// // // // // // // // // // // //     requirements: [
// // // // // // // // // // // //       "Diploma or degree in Veterinary Science, Poultry Science, or Agriculture",
// // // // // // // // // // // //       "Willingness to travel extensively within the territory",
// // // // // // // // // // // //       "Basic understanding of poultry health and biosecurity",
// // // // // // // // // // // //     ],
// // // // // // // // // // // //   },
// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: "digital-marketing-associate",
// // // // // // // // // // // //     title: "Digital Marketing Associate",
// // // // // // // // // // // //     department: "Corporate",
// // // // // // // // // // // //     location: "Hyderabad, Telangana (Hybrid)",
// // // // // // // // // // // //     type: "Full-time",
// // // // // // // // // // // //     experience: "0-2 years",
// // // // // // // // // // // //     summary:
// // // // // // // // // // // //       "Help tell the Innovare story across our website, social channels, and farmer-facing content — this role sits close to product and sales.",
// // // // // // // // // // // //     responsibilities: [
// // // // // // // // // // // //       "Plan and publish content across LinkedIn, Instagram, and Facebook",
// // // // // // // // // // // //       "Support website updates and product catalogue content",
// // // // // // // // // // // //       "Coordinate photo/video shoots at farms and events",
// // // // // // // // // // // //       "Track campaign performance and report on key metrics",
// // // // // // // // // // // //     ],
// // // // // // // // // // // //     requirements: [
// // // // // // // // // // // //       "Degree in Marketing, Mass Communication, or related field",
// // // // // // // // // // // //       "Hands-on experience with content creation and scheduling tools",
// // // // // // // // // // // //       "Basic design sense; Canva or similar tools",
// // // // // // // // // // // //       "Interest in agriculture or life-sciences marketing is a plus",
// // // // // // // // // // // //     ],
// // // // // // // // // // // //   },
// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: "cattle-nutrition-intern",
// // // // // // // // // // // //     title: "Cattle Nutrition Intern",
// // // // // // // // // // // //     department: "Cattle",
// // // // // // // // // // // //     location: "Hyderabad, Telangana",
// // // // // // // // // // // //     type: "Internship",
// // // // // // // // // // // //     experience: "Final-year students",
// // // // // // // // // // // //     summary:
// // // // // // // // // // // //       "A hands-on internship supporting our cattle supplement line — from formulation trials to farm feedback collection.",
// // // // // // // // // // // //     responsibilities: [
// // // // // // // // // // // //       "Assist with documentation for supplement trials",
// // // // // // // // // // // //       "Compile farm feedback on product performance",
// // // // // // // // // // // //       "Support the technical team with literature research",
// // // // // // // // // // // //     ],
// // // // // // // // // // // //     requirements: [
// // // // // // // // // // // //       "Pursuing a degree in Veterinary Science or Animal Nutrition",
// // // // // // // // // // // //       "Available for a minimum 3-month internship",
// // // // // // // // // // // //       "Curious, organized, and comfortable in a small team",
// // // // // // // // // // // //     ],
// // // // // // // // // // // //   },
// // // // // // // // // // // // ];

// // // // // // // // // // // // const departments = ["All", "Aquaculture", "Poultry", "Cattle", "Corporate"] as const;

// // // // // // // // // // // // /* Replace with your real HR contact details */
// // // // // // // // // // // // const APPLY_WHATSAPP_NUMBER = "919999999999"; // country code + number, no symbols
// // // // // // // // // // // // const APPLY_EMAIL = "careers@innovarebiopharma.com";

// // // // // // // // // // // // export default function CareersPage() {
// // // // // // // // // // // //   const [activeDept, setActiveDept] = useState<(typeof departments)[number]>("All");
// // // // // // // // // // // //   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

// // // // // // // // // // // //   const filteredJobs = useMemo(
// // // // // // // // // // // //     () => (activeDept === "All" ? jobs : jobs.filter((j) => j.department === activeDept)),
// // // // // // // // // // // //     [activeDept]
// // // // // // // // // // // //   );

// // // // // // // // // // // //   const waLink = (job: Job) =>
// // // // // // // // // // // //     `https://wa.me/${APPLY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
// // // // // // // // // // // //       `Hi Innovare Biopharma, I'd like to apply for the ${job.title} role (${job.location}).`
// // // // // // // // // // // //     )}`;

// // // // // // // // // // // //   const mailLink = (job: Job) =>
// // // // // // // // // // // //     `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
// // // // // // // // // // // //       `Application: ${job.title}`
// // // // // // // // // // // //     )}&body=${encodeURIComponent(
// // // // // // // // // // // //       `Hi Innovare Biopharma team,\n\nI'd like to apply for the ${job.title} role (${job.location}).\n\nName:\nPhone:\nResume link:\n\n`
// // // // // // // // // // // //     )}`;

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <main className="min-h-screen bg-white pt-16 sm:pt-[76px] lg:pt-[84px] xl:pt-[92px]">
// // // // // // // // // // // //       {/* ── Hero ── */}
// // // // // // // // // // // //       <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
// // // // // // // // // // // //         {/* Background photo — drop your image at public/images/careers-hero.jpg.
// // // // // // // // // // // //             Swap the src below if you want a different filename/path. */}
// // // // // // // // // // // //         <img
// // // // // // // // // // // //           src="/images/careers.png"
// // // // // // // // // // // //           alt=""
// // // // // // // // // // // //           aria-hidden="true"
// // // // // // // // // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // // // // // // // // //         />

// // // // // // // // // // // //         <div className="relative max-w-4xl mx-auto text-center">
// // // // // // // // // // // //           <div
// // // // // // // // // // // //             className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-[11px] sm:text-[12px] font-semibold tracking-wide"
// // // // // // // // // // // //             style={{
// // // // // // // // // // // //               color: "#7fd4ff",
// // // // // // // // // // // //               border: "1px solid rgba(127,212,255,0.4)",
// // // // // // // // // // // //               background: "rgba(7,23,38,0.55)",
// // // // // // // // // // // //             }}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <span
// // // // // // // // // // // //               className="inline-block w-2 h-2 rounded-full"
// // // // // // // // // // // //               style={{ background: "#38bdf8" }}
// // // // // // // // // // // //             />
// // // // // // // // // // // //             WE&apos;RE HIRING
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           <h1
// // // // // // // // // // // //             className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] mb-5"
// // // // // // // // // // // //             style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             Build the future of{" "}
// // // // // // // // // // // //             <span style={{ color: "#8fd0ff" }}>aquaculture health</span> with us
// // // // // // // // // // // //           </h1>

// // // // // // // // // // // //           <p
// // // // // // // // // // // //             className="text-[14px] sm:text-[16px] text-white max-w-2xl mx-auto leading-relaxed"
// // // // // // // // // // // //             style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55)" }}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             From farm-level fieldwork to formulation science, every role at Innovare
// // // // // // // // // // // //             connects back to healthier ponds, farms, and livelihoods. Here&apos;s what
// // // // // // // // // // // //             we&apos;re hiring for right now.
// // // // // // // // // // // //           </p>

// // // // // // // // // // // //           <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-10 pt-8 border-t border-white/30">
// // // // // // // // // // // //             {[
// // // // // // // // // // // //               { label: "OPEN ROLES", value: String(jobs.length) },
// // // // // // // // // // // //               { label: "DEPARTMENTS", value: "4" },
// // // // // // // // // // // //               { label: "FIELD + OFFICE", value: "Hybrid" },
// // // // // // // // // // // //             ].map((s) => (
// // // // // // // // // // // //               <div key={s.label} className="text-center">
// // // // // // // // // // // //                 <div
// // // // // // // // // // // //                   className="text-[22px] sm:text-[26px] font-bold text-white"
// // // // // // // // // // // //                   style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   {s.value}
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <div
// // // // // // // // // // // //                   className="text-[10px] sm:text-[11px] tracking-[0.15em] text-white/90 mt-1"
// // // // // // // // // // // //                   style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   {s.label}
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             ))}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </section>

// // // // // // // // // // // //       {/* ── Filters + listing ── */}
// // // // // // // // // // // //       <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
// // // // // // // // // // // //         <div className="flex flex-wrap gap-2 mb-10 justify-center">
// // // // // // // // // // // //           {departments.map((d) => {
// // // // // // // // // // // //             const active = activeDept === d;
// // // // // // // // // // // //             return (
// // // // // // // // // // // //               <button
// // // // // // // // // // // //                 key={d}
// // // // // // // // // // // //                 onClick={() => setActiveDept(d)}
// // // // // // // // // // // //                 className="px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all"
// // // // // // // // // // // //                 style={{
// // // // // // // // // // // //                   background: active ? "#2A5DA8" : "#f1f5f9",
// // // // // // // // // // // //                   color: active ? "#fff" : "#475569",
// // // // // // // // // // // //                   border: active ? "1px solid #2A5DA8" : "1px solid #e2e8f0",
// // // // // // // // // // // //                 }}
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 {d}
// // // // // // // // // // // //               </button>
// // // // // // // // // // // //             );
// // // // // // // // // // // //           })}
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {filteredJobs.length === 0 ? (
// // // // // // // // // // // //           <div className="text-center py-20">
// // // // // // // // // // // //             <p className="text-[15px] text-slate-500">
// // // // // // // // // // // //               No open roles in this department right now — check back soon, or reach out
// // // // // // // // // // // //               anyway at{" "}
// // // // // // // // // // // //               <a href={`mailto:${APPLY_EMAIL}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // // // // // // // // // // //                 {APPLY_EMAIL}
// // // // // // // // // // // //               </a>
// // // // // // // // // // // //               .
// // // // // // // // // // // //             </p>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         ) : (
// // // // // // // // // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
// // // // // // // // // // // //             {filteredJobs.map((job) => {
// // // // // // // // // // // //               const accent = departmentAccent[job.department];
// // // // // // // // // // // //               return (
// // // // // // // // // // // //                 <button
// // // // // // // // // // // //                   key={job.id}
// // // // // // // // // // // //                   onClick={() => setSelectedJob(job)}
// // // // // // // // // // // //                   className="text-left rounded-2xl p-6 border transition-all duration-200 flex flex-col h-full bg-white hover:-translate-y-1"
// // // // // // // // // // // //                   style={{
// // // // // // // // // // // //                     borderColor: "#e8edf5",
// // // // // // // // // // // //                     boxShadow: "0 2px 10px rgba(15,41,66,0.05)",
// // // // // // // // // // // //                   }}
// // // // // // // // // // // //                   onMouseEnter={(e) => {
// // // // // // // // // // // //                     e.currentTarget.style.boxShadow = `0 14px 32px ${accent}22`;
// // // // // // // // // // // //                     e.currentTarget.style.borderColor = accent;
// // // // // // // // // // // //                   }}
// // // // // // // // // // // //                   onMouseLeave={(e) => {
// // // // // // // // // // // //                     e.currentTarget.style.boxShadow = "0 2px 10px rgba(15,41,66,0.05)";
// // // // // // // // // // // //                     e.currentTarget.style.borderColor = "#e8edf5";
// // // // // // // // // // // //                   }}
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   <div className="flex items-center justify-between mb-4">
// // // // // // // // // // // //                     <span
// // // // // // // // // // // //                       className="w-11 h-11 rounded-xl flex items-center justify-center text-lg"
// // // // // // // // // // // //                       style={{ background: `${accent}14` }}
// // // // // // // // // // // //                     >
// // // // // // // // // // // //                       {departmentIcon[job.department]}
// // // // // // // // // // // //                     </span>
// // // // // // // // // // // //                     <span
// // // // // // // // // // // //                       className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full"
// // // // // // // // // // // //                       style={{ color: accent, background: `${accent}14` }}
// // // // // // // // // // // //                     >
// // // // // // // // // // // //                       {job.department.toUpperCase()}
// // // // // // // // // // // //                     </span>
// // // // // // // // // // // //                   </div>

// // // // // // // // // // // //                   <h3 className="text-[16px] font-bold text-slate-800 mb-2 leading-snug">
// // // // // // // // // // // //                     {job.title}
// // // // // // // // // // // //                   </h3>
// // // // // // // // // // // //                   <p className="text-[13px] text-slate-500 leading-relaxed mb-5 flex-1">
// // // // // // // // // // // //                     {job.summary}
// // // // // // // // // // // //                   </p>

// // // // // // // // // // // //                   <div className="flex flex-col gap-1.5 text-[12px] text-slate-500 mb-4">
// // // // // // // // // // // //                     <span className="flex items-center gap-1.5">
// // // // // // // // // // // //                       <MapPin size={13} /> {job.location}
// // // // // // // // // // // //                     </span>
// // // // // // // // // // // //                     <span className="flex items-center gap-1.5">
// // // // // // // // // // // //                       <Clock size={13} /> {job.type} · {job.experience}
// // // // // // // // // // // //                     </span>
// // // // // // // // // // // //                   </div>

// // // // // // // // // // // //                   <span
// // // // // // // // // // // //                     className="inline-flex items-center gap-1 text-[12.5px] font-bold mt-auto"
// // // // // // // // // // // //                     style={{ color: accent }}
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     View role <ArrowRight size={14} />
// // // // // // // // // // // //                   </span>
// // // // // // // // // // // //                 </button>
// // // // // // // // // // // //               );
// // // // // // // // // // // //             })}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         )}
// // // // // // // // // // // //       </section>

// // // // // // // // // // // //       {/* ── Detail modal ── */}
// // // // // // // // // // // //       {selectedJob && (
// // // // // // // // // // // //         <div
// // // // // // // // // // // //           className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/50 px-0 sm:px-4"
// // // // // // // // // // // //           onClick={() => setSelectedJob(null)}
// // // // // // // // // // // //         >
// // // // // // // // // // // //           <div
// // // // // // // // // // // //             className="bg-white w-full sm:max-w-2xl sm:rounded-3xl rounded-t-3xl max-h-[90vh] overflow-y-auto"
// // // // // // // // // // // //             onClick={(e) => e.stopPropagation()}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <div
// // // // // // // // // // // //               className="sticky top-0 flex items-start justify-between p-6 border-b bg-white z-10"
// // // // // // // // // // // //               style={{ borderColor: "#f0f0f0" }}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <div>
// // // // // // // // // // // //                 <span
// // // // // // // // // // // //                   className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full inline-block mb-3"
// // // // // // // // // // // //                   style={{
// // // // // // // // // // // //                     color: departmentAccent[selectedJob.department],
// // // // // // // // // // // //                     background: `${departmentAccent[selectedJob.department]}14`,
// // // // // // // // // // // //                   }}
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   {selectedJob.department.toUpperCase()}
// // // // // // // // // // // //                 </span>
// // // // // // // // // // // //                 <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-800 leading-snug">
// // // // // // // // // // // //                   {selectedJob.title}
// // // // // // // // // // // //                 </h2>
// // // // // // // // // // // //                 <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[12.5px] text-slate-500">
// // // // // // // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // // // // // // //                     <MapPin size={13} /> {selectedJob.location}
// // // // // // // // // // // //                   </span>
// // // // // // // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // // // // // // //                     <Briefcase size={13} /> {selectedJob.type}
// // // // // // // // // // // //                   </span>
// // // // // // // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // // // // // // //                     <Clock size={13} /> {selectedJob.experience}
// // // // // // // // // // // //                   </span>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //               <button
// // // // // // // // // // // //                 onClick={() => setSelectedJob(null)}
// // // // // // // // // // // //                 className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full"
// // // // // // // // // // // //                 style={{ background: "#f8fafc", color: "#64748b" }}
// // // // // // // // // // // //                 aria-label="Close"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <X size={18} />
// // // // // // // // // // // //               </button>
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             <div className="p-6 space-y-6">
// // // // // // // // // // // //               <p className="text-[13.5px] text-slate-600 leading-relaxed">
// // // // // // // // // // // //                 {selectedJob.summary}
// // // // // // // // // // // //               </p>

// // // // // // // // // // // //               <div>
// // // // // // // // // // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3">What you&apos;ll do</h3>
// // // // // // // // // // // //                 <ul className="space-y-2">
// // // // // // // // // // // //                   {selectedJob.responsibilities.map((r, i) => (
// // // // // // // // // // // //                     <li key={i} className="flex items-start gap-2 text-[13px] text-slate-600">
// // // // // // // // // // // //                       <CheckCircle2
// // // // // // // // // // // //                         size={15}
// // // // // // // // // // // //                         className="mt-0.5 shrink-0"
// // // // // // // // // // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // // // // // // //                       />
// // // // // // // // // // // //                       {r}
// // // // // // // // // // // //                     </li>
// // // // // // // // // // // //                   ))}
// // // // // // // // // // // //                 </ul>
// // // // // // // // // // // //               </div>

// // // // // // // // // // // //               <div>
// // // // // // // // // // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3">What we&apos;re looking for</h3>
// // // // // // // // // // // //                 <ul className="space-y-2">
// // // // // // // // // // // //                   {selectedJob.requirements.map((r, i) => (
// // // // // // // // // // // //                     <li key={i} className="flex items-start gap-2 text-[13px] text-slate-600">
// // // // // // // // // // // //                       <CheckCircle2
// // // // // // // // // // // //                         size={15}
// // // // // // // // // // // //                         className="mt-0.5 shrink-0"
// // // // // // // // // // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // // // // // // //                       />
// // // // // // // // // // // //                       {r}
// // // // // // // // // // // //                     </li>
// // // // // // // // // // // //                   ))}
// // // // // // // // // // // //                 </ul>
// // // // // // // // // // // //               </div>

// // // // // // // // // // // //               <div className="flex flex-col sm:flex-row gap-3 pt-2">
// // // // // // // // // // // //                 <a
// // // // // // // // // // // //                   href={waLink(selectedJob)}
// // // // // // // // // // // //                   target="_blank"
// // // // // // // // // // // //                   rel="noopener noreferrer"
// // // // // // // // // // // //                   className="flex-1 flex items-center justify-center gap-2 rounded-full py-3 text-[13.5px] font-bold text-white no-underline"
// // // // // // // // // // // //                   style={{ background: "#25D366" }}
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   Apply via WhatsApp
// // // // // // // // // // // //                 </a>
// // // // // // // // // // // //                 <a
// // // // // // // // // // // //                   href={mailLink(selectedJob)}
// // // // // // // // // // // //                   className="flex-1 flex items-center justify-center gap-2 rounded-full py-3 text-[13.5px] font-bold no-underline"
// // // // // // // // // // // //                   style={{ border: "1.5px solid #2A5DA8", color: "#2A5DA8" }}
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   Apply via Email
// // // // // // // // // // // //                 </a>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )}
// // // // // // // // // // // //     </main>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }
// // // // // // // // // // // "use client";
// // // // // // // // // // // import { useState, useMemo } from "react";
// // // // // // // // // // // import { X, MapPin, Clock, Briefcase, ArrowRight, CheckCircle2, GraduationCap } from "lucide-react";
// // // // // // // // // // // import Navbar from "@/components/Navbar";
// // // // // // // // // // // import Footer from "@/components/Footer";

// // // // // // // // // // // /* ────────────────────────────────────────────────────────────
// // // // // // // // // // //    JOB DATA
// // // // // // // // // // //    Replace / extend this array with real openings. Each entry
// // // // // // // // // // //    drives both the listing card and the detail panel — nothing
// // // // // // // // // // //    else needs to change when you add or remove a role.
// // // // // // // // // // //    ──────────────────────────────────────────────────────────── */
// // // // // // // // // // // type Job = {
// // // // // // // // // // //   id: string;
// // // // // // // // // // //   title: string;
// // // // // // // // // // //   department: "Aquaculture" | "Poultry" | "Cattle" | "Corporate";
// // // // // // // // // // //   location: string;
// // // // // // // // // // //   type: "Full-time" | "Part-time" | "Internship";
// // // // // // // // // // //   experience: string;
// // // // // // // // // // //   qualification?: string;
// // // // // // // // // // //   summary: string;
// // // // // // // // // // //   responsibilities: string[];
// // // // // // // // // // //   requirements: string[];
// // // // // // // // // // //   /** Flyer / poster image for this role — shown above the details in the card and modal. */
// // // // // // // // // // //   image?: string;
// // // // // // // // // // // };

// // // // // // // // // // // const departmentAccent: Record<Job["department"], string> = {
// // // // // // // // // // //   Aquaculture: "#0ea5e9",
// // // // // // // // // // //   Poultry: "#f59e0b",
// // // // // // // // // // //   Cattle: "#22c55e",
// // // // // // // // // // //   Corporate: "#2A5DA8",
// // // // // // // // // // // };

// // // // // // // // // // // const departmentIcon: Record<Job["department"], string> = {
// // // // // // // // // // //   Aquaculture: "🦐",
// // // // // // // // // // //   Poultry: "🐔",
// // // // // // // // // // //   Cattle: "🐄",
// // // // // // // // // // //   Corporate: "🏢",
// // // // // // // // // // // };

// // // // // // // // // // // const jobs: Job[] = [
// // // // // // // // // // //   {
// // // // // // // // // // //     id: "area-sales-executive-aqua",
// // // // // // // // // // //     title: "Area Sales Executive",
// // // // // // // // // // //     department: "Aquaculture",
// // // // // // // // // // //     location: "Bhimavaram, Kaikaluru, Amalapuram, Kakinada",
// // // // // // // // // // //     type: "Full-time",
// // // // // // // // // // //     experience: "2-3 years (aqua medicine marketing experience preferred)",
// // // // // // // // // // //     qualification: "B.Sc / M.Sc in Fisheries Science or a related field",
// // // // // // // // // // //     summary:
// // // // // // // // // // //       "Drive sales of Innovare's aquaculture health products across the Bhimavaram–Kakinada belt, working directly with farmers and distributors to grow a loyal territory.",
// // // // // // // // // // //     image: "/images/job.jpeg",
// // // // // // // // // // //     responsibilities: [
// // // // // // // // // // //       "Promote and sell aquaculture health products across the assigned territory",
// // // // // // // // // // //       "Build and maintain relationships with farmers and distributors",
// // // // // // // // // // //       "Meet sales targets and report field activity regularly",
// // // // // // // // // // //       "Provide on-ground product guidance and support to farmers",
// // // // // // // // // // //     ],
// // // // // // // // // // //     requirements: [
// // // // // // // // // // //       "B.Sc / M.Sc in Fisheries Science or a related field",
// // // // // // // // // // //       "2-3 years of experience, aqua medicine marketing preferred",
// // // // // // // // // // //       "Willingness to travel across Bhimavaram, Kaikaluru, Amalapuram, and Kakinada",
// // // // // // // // // // //       "Strong communication skills in Telugu and English",
// // // // // // // // // // //     ],
// // // // // // // // // // //   },
// // // // // // // // // // // ];

// // // // // // // // // // // const departments = ["All", "Aquaculture", "Poultry", "Cattle", "Corporate"] as const;

// // // // // // // // // // // /* Contact details from the official job flyer */
// // // // // // // // // // // const APPLY_WHATSAPP_NUMBER = "917799872555"; // country code + number, no symbols
// // // // // // // // // // // const APPLY_EMAIL = "info@innovarebiopharma.com";
// // // // // // // // // // // const APPLY_PHONE_DISPLAY = "77998 72555";

// // // // // // // // // // // export default function CareersPage() {
// // // // // // // // // // //   const [activeDept, setActiveDept] = useState<(typeof departments)[number]>("All");
// // // // // // // // // // //   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

// // // // // // // // // // //   const filteredJobs = useMemo(
// // // // // // // // // // //     () => (activeDept === "All" ? jobs : jobs.filter((j) => j.department === activeDept)),
// // // // // // // // // // //     [activeDept]
// // // // // // // // // // //   );

// // // // // // // // // // //   const waLink = (job: Job) =>
// // // // // // // // // // //     `https://wa.me/${APPLY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
// // // // // // // // // // //       `Hi Innovare Biopharma, I'd like to apply for the ${job.title} role (${job.location}).`
// // // // // // // // // // //     )}`;

// // // // // // // // // // //   const mailLink = (job: Job) =>
// // // // // // // // // // //     `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
// // // // // // // // // // //       `Application: ${job.title}`
// // // // // // // // // // //     )}&body=${encodeURIComponent(
// // // // // // // // // // //       `Hi Innovare Biopharma team,\n\nI'd like to apply for the ${job.title} role (${job.location}).\n\nName:\nPhone:\nResume link:\n\n`
// // // // // // // // // // //     )}`;

// // // // // // // // // // //   return (
// // // // // // // // // // //     <>
// // // // // // // // // // //       <Navbar />
// // // // // // // // // // //       <main className="min-h-screen bg-white pt-16 sm:pt-[76px] lg:pt-[84px] xl:pt-[92px]">
// // // // // // // // // // //       {/* ── Hero ── */}
// // // // // // // // // // //       <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
// // // // // // // // // // //         {/* Background photo — drop your image at public/images/careers-hero.jpg.
// // // // // // // // // // //             Swap the src below if you want a different filename/path. */}
// // // // // // // // // // //         <img
// // // // // // // // // // //           src="/images/careers.png"
// // // // // // // // // // //           alt=""
// // // // // // // // // // //           aria-hidden="true"
// // // // // // // // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // // // // // // // //         />

// // // // // // // // // // //         <div className="relative max-w-4xl mx-auto text-center">
// // // // // // // // // // //           <div
// // // // // // // // // // //             className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-[11px] sm:text-[12px] font-semibold tracking-wide"
// // // // // // // // // // //             style={{
// // // // // // // // // // //               color: "#7fd4ff",
// // // // // // // // // // //               border: "1px solid rgba(127,212,255,0.4)",
// // // // // // // // // // //               background: "rgba(7,23,38,0.55)",
// // // // // // // // // // //             }}
// // // // // // // // // // //           >
// // // // // // // // // // //             <span
// // // // // // // // // // //               className="inline-block w-2 h-2 rounded-full"
// // // // // // // // // // //               style={{ background: "#38bdf8" }}
// // // // // // // // // // //             />
// // // // // // // // // // //             WE&apos;RE HIRING
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <h1
// // // // // // // // // // //             className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] mb-5"
// // // // // // // // // // //             style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}
// // // // // // // // // // //           >
// // // // // // // // // // //             Build the future of{" "}
// // // // // // // // // // //             <span style={{ color: "#8fd0ff" }}>aquaculture health</span> with us
// // // // // // // // // // //           </h1>

// // // // // // // // // // //           <p
// // // // // // // // // // //             className="text-[14px] sm:text-[16px] text-white max-w-2xl mx-auto leading-relaxed"
// // // // // // // // // // //             style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55)" }}
// // // // // // // // // // //           >
// // // // // // // // // // //             From farm-level fieldwork to formulation science, every role at Innovare
// // // // // // // // // // //             connects back to healthier ponds, farms, and livelihoods. Here&apos;s what
// // // // // // // // // // //             we&apos;re hiring for right now.
// // // // // // // // // // //           </p>

// // // // // // // // // // //           <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-10 pt-8 border-t border-white/30">
// // // // // // // // // // //             {[
// // // // // // // // // // //               { label: "OPEN ROLES", value: String(jobs.length) },
// // // // // // // // // // //               { label: "DEPARTMENTS", value: String(new Set(jobs.map((j) => j.department)).size) },
// // // // // // // // // // //               { label: "FIELD + OFFICE", value: "Hybrid" },
// // // // // // // // // // //             ].map((s) => (
// // // // // // // // // // //               <div key={s.label} className="text-center">
// // // // // // // // // // //                 <div
// // // // // // // // // // //                   className="text-[22px] sm:text-[26px] font-bold text-white"
// // // // // // // // // // //                   style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   {s.value}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <div
// // // // // // // // // // //                   className="text-[10px] sm:text-[11px] tracking-[0.15em] text-white/90 mt-1"
// // // // // // // // // // //                   style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   {s.label}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* ── Filters + listing ── */}
// // // // // // // // // // //       <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
// // // // // // // // // // //         <div className="flex flex-wrap gap-2 mb-10 justify-center">
// // // // // // // // // // //           {departments.map((d) => {
// // // // // // // // // // //             const active = activeDept === d;
// // // // // // // // // // //             return (
// // // // // // // // // // //               <button
// // // // // // // // // // //                 key={d}
// // // // // // // // // // //                 onClick={() => setActiveDept(d)}
// // // // // // // // // // //                 className="px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all"
// // // // // // // // // // //                 style={{
// // // // // // // // // // //                   background: active ? "#2A5DA8" : "#f1f5f9",
// // // // // // // // // // //                   color: active ? "#fff" : "#475569",
// // // // // // // // // // //                   border: active ? "1px solid #2A5DA8" : "1px solid #e2e8f0",
// // // // // // // // // // //                 }}
// // // // // // // // // // //               >
// // // // // // // // // // //                 {d}
// // // // // // // // // // //               </button>
// // // // // // // // // // //             );
// // // // // // // // // // //           })}
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {filteredJobs.length === 0 ? (
// // // // // // // // // // //           <div className="text-center py-20">
// // // // // // // // // // //             <p className="text-[15px] text-slate-500">
// // // // // // // // // // //               No open roles in this department right now — check back soon, or reach out
// // // // // // // // // // //               anyway at{" "}
// // // // // // // // // // //               <a href={`mailto:${APPLY_EMAIL}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // // // // // // // // // //                 {APPLY_EMAIL}
// // // // // // // // // // //               </a>
// // // // // // // // // // //               .
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         ) : (
// // // // // // // // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
// // // // // // // // // // //             {filteredJobs.map((job) => {
// // // // // // // // // // //               const accent = departmentAccent[job.department];
// // // // // // // // // // //               return (
// // // // // // // // // // //                 <button
// // // // // // // // // // //                   key={job.id}
// // // // // // // // // // //                   onClick={() => setSelectedJob(job)}
// // // // // // // // // // //                   className="text-left rounded-2xl border transition-all duration-200 flex flex-col h-full bg-white hover:-translate-y-1 overflow-hidden"
// // // // // // // // // // //                   style={{
// // // // // // // // // // //                     borderColor: "#e8edf5",
// // // // // // // // // // //                     boxShadow: "0 2px 10px rgba(15,41,66,0.05)",
// // // // // // // // // // //                   }}
// // // // // // // // // // //                   onMouseEnter={(e) => {
// // // // // // // // // // //                     e.currentTarget.style.boxShadow = `0 14px 32px ${accent}22`;
// // // // // // // // // // //                     e.currentTarget.style.borderColor = accent;
// // // // // // // // // // //                   }}
// // // // // // // // // // //                   onMouseLeave={(e) => {
// // // // // // // // // // //                     e.currentTarget.style.boxShadow = "0 2px 10px rgba(15,41,66,0.05)";
// // // // // // // // // // //                     e.currentTarget.style.borderColor = "#e8edf5";
// // // // // // // // // // //                   }}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   {job.image ? (
// // // // // // // // // // //                     <div className="relative w-full aspect-[4/3] shrink-0">
// // // // // // // // // // //                       <img
// // // // // // // // // // //                         src={job.image}
// // // // // // // // // // //                         alt={`${job.title} job opening`}
// // // // // // // // // // //                         className="w-full h-full object-cover"
// // // // // // // // // // //                       />
// // // // // // // // // // //                       <span
// // // // // // // // // // //                         className="absolute top-3 right-3 text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full text-white"
// // // // // // // // // // //                         style={{ background: accent }}
// // // // // // // // // // //                       >
// // // // // // // // // // //                         {job.department.toUpperCase()}
// // // // // // // // // // //                       </span>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   ) : null}

// // // // // // // // // // //                   <div className="p-6 flex flex-col flex-1">
// // // // // // // // // // //                     {!job.image && (
// // // // // // // // // // //                       <div className="flex items-center justify-between mb-4">
// // // // // // // // // // //                         <span
// // // // // // // // // // //                           className="w-11 h-11 rounded-xl flex items-center justify-center text-lg"
// // // // // // // // // // //                           style={{ background: `${accent}14` }}
// // // // // // // // // // //                         >
// // // // // // // // // // //                           {departmentIcon[job.department]}
// // // // // // // // // // //                         </span>
// // // // // // // // // // //                         <span
// // // // // // // // // // //                           className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full"
// // // // // // // // // // //                           style={{ color: accent, background: `${accent}14` }}
// // // // // // // // // // //                         >
// // // // // // // // // // //                           {job.department.toUpperCase()}
// // // // // // // // // // //                         </span>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     )}

// // // // // // // // // // //                     <h3 className="text-[16px] font-bold text-slate-800 mb-2 leading-snug">
// // // // // // // // // // //                       {job.title}
// // // // // // // // // // //                     </h3>
// // // // // // // // // // //                     <p className="text-[13px] text-slate-500 leading-relaxed mb-5 flex-1">
// // // // // // // // // // //                       {job.summary}
// // // // // // // // // // //                     </p>

// // // // // // // // // // //                     <div className="flex flex-col gap-1.5 text-[12px] text-slate-500 mb-4">
// // // // // // // // // // //                       <span className="flex items-center gap-1.5">
// // // // // // // // // // //                         <MapPin size={13} /> {job.location}
// // // // // // // // // // //                       </span>
// // // // // // // // // // //                       <span className="flex items-center gap-1.5">
// // // // // // // // // // //                         <Clock size={13} /> {job.type} · {job.experience}
// // // // // // // // // // //                       </span>
// // // // // // // // // // //                     </div>

// // // // // // // // // // //                     <span
// // // // // // // // // // //                       className="inline-flex items-center gap-1 text-[12.5px] font-bold mt-auto"
// // // // // // // // // // //                       style={{ color: accent }}
// // // // // // // // // // //                     >
// // // // // // // // // // //                       View role <ArrowRight size={14} />
// // // // // // // // // // //                     </span>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               );
// // // // // // // // // // //             })}
// // // // // // // // // // //           </div>
// // // // // // // // // // //         )}
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* ── Detail modal ── */}
// // // // // // // // // // //       {selectedJob && (
// // // // // // // // // // //         <div
// // // // // // // // // // //           className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/50 px-0 sm:px-4"
// // // // // // // // // // //           onClick={() => setSelectedJob(null)}
// // // // // // // // // // //         >
// // // // // // // // // // //           <div
// // // // // // // // // // //             className="bg-white w-full sm:max-w-2xl sm:rounded-3xl rounded-t-3xl max-h-[90vh] overflow-y-auto"
// // // // // // // // // // //             onClick={(e) => e.stopPropagation()}
// // // // // // // // // // //           >
// // // // // // // // // // //             {selectedJob.image && (
// // // // // // // // // // //               <img
// // // // // // // // // // //                 src={selectedJob.image}
// // // // // // // // // // //                 alt={`${selectedJob.title} job opening`}
// // // // // // // // // // //                 className="w-full max-h-[60vh] object-contain bg-slate-50 border-b"
// // // // // // // // // // //                 style={{ borderColor: "#f0f0f0" }}
// // // // // // // // // // //               />
// // // // // // // // // // //             )}
// // // // // // // // // // //             <div
// // // // // // // // // // //               className="sticky top-0 flex items-start justify-between p-6 border-b bg-white z-10"
// // // // // // // // // // //               style={{ borderColor: "#f0f0f0" }}
// // // // // // // // // // //             >
// // // // // // // // // // //               <div>
// // // // // // // // // // //                 <span
// // // // // // // // // // //                   className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full inline-block mb-3"
// // // // // // // // // // //                   style={{
// // // // // // // // // // //                     color: departmentAccent[selectedJob.department],
// // // // // // // // // // //                     background: `${departmentAccent[selectedJob.department]}14`,
// // // // // // // // // // //                   }}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   {selectedJob.department.toUpperCase()}
// // // // // // // // // // //                 </span>
// // // // // // // // // // //                 <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-800 leading-snug">
// // // // // // // // // // //                   {selectedJob.title}
// // // // // // // // // // //                 </h2>
// // // // // // // // // // //                 <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[12.5px] text-slate-500">
// // // // // // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // // // // // //                     <MapPin size={13} /> {selectedJob.location}
// // // // // // // // // // //                   </span>
// // // // // // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // // // // // //                     <Briefcase size={13} /> {selectedJob.type}
// // // // // // // // // // //                   </span>
// // // // // // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // // // // // //                     <Clock size={13} /> {selectedJob.experience}
// // // // // // // // // // //                   </span>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>
// // // // // // // // // // //               <button
// // // // // // // // // // //                 onClick={() => setSelectedJob(null)}
// // // // // // // // // // //                 className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full"
// // // // // // // // // // //                 style={{ background: "#f8fafc", color: "#64748b" }}
// // // // // // // // // // //                 aria-label="Close"
// // // // // // // // // // //               >
// // // // // // // // // // //                 <X size={18} />
// // // // // // // // // // //               </button>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <div className="p-6 space-y-6">
// // // // // // // // // // //               <p className="text-[13.5px] text-slate-600 leading-relaxed">
// // // // // // // // // // //                 {selectedJob.summary}
// // // // // // // // // // //               </p>

// // // // // // // // // // //               {selectedJob.qualification && (
// // // // // // // // // // //                 <div className="flex items-start gap-2.5 text-[13px] text-slate-600">
// // // // // // // // // // //                   <GraduationCap
// // // // // // // // // // //                     size={16}
// // // // // // // // // // //                     className="mt-0.5 shrink-0"
// // // // // // // // // // //                     style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // // // // // //                   />
// // // // // // // // // // //                   <span>
// // // // // // // // // // //                     <span className="font-bold text-slate-800">Qualification: </span>
// // // // // // // // // // //                     {selectedJob.qualification}
// // // // // // // // // // //                   </span>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               )}

// // // // // // // // // // //               <div>
// // // // // // // // // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3">What you&apos;ll do</h3>
// // // // // // // // // // //                 <ul className="space-y-2">
// // // // // // // // // // //                   {selectedJob.responsibilities.map((r, i) => (
// // // // // // // // // // //                     <li key={i} className="flex items-start gap-2 text-[13px] text-slate-600">
// // // // // // // // // // //                       <CheckCircle2
// // // // // // // // // // //                         size={15}
// // // // // // // // // // //                         className="mt-0.5 shrink-0"
// // // // // // // // // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // // // // // //                       />
// // // // // // // // // // //                       {r}
// // // // // // // // // // //                     </li>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </ul>
// // // // // // // // // // //               </div>

// // // // // // // // // // //               <div>
// // // // // // // // // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3">What we&apos;re looking for</h3>
// // // // // // // // // // //                 <ul className="space-y-2">
// // // // // // // // // // //                   {selectedJob.requirements.map((r, i) => (
// // // // // // // // // // //                     <li key={i} className="flex items-start gap-2 text-[13px] text-slate-600">
// // // // // // // // // // //                       <CheckCircle2
// // // // // // // // // // //                         size={15}
// // // // // // // // // // //                         className="mt-0.5 shrink-0"
// // // // // // // // // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // // // // // //                       />
// // // // // // // // // // //                       {r}
// // // // // // // // // // //                     </li>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </ul>
// // // // // // // // // // //               </div>

// // // // // // // // // // //               <div className="flex flex-col sm:flex-row gap-3 pt-2">
// // // // // // // // // // //                 <a
// // // // // // // // // // //                   href={waLink(selectedJob)}
// // // // // // // // // // //                   target="_blank"
// // // // // // // // // // //                   rel="noopener noreferrer"
// // // // // // // // // // //                   className="flex-1 flex items-center justify-center gap-2 rounded-full py-3 text-[13.5px] font-bold text-white no-underline"
// // // // // // // // // // //                   style={{ background: "#25D366" }}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Apply via WhatsApp
// // // // // // // // // // //                 </a>
// // // // // // // // // // //                 <a
// // // // // // // // // // //                   href={mailLink(selectedJob)}
// // // // // // // // // // //                   className="flex-1 flex items-center justify-center gap-2 rounded-full py-3 text-[13.5px] font-bold no-underline"
// // // // // // // // // // //                   style={{ border: "1.5px solid #2A5DA8", color: "#2A5DA8" }}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Apply via Email
// // // // // // // // // // //                 </a>
// // // // // // // // // // //               </div>

// // // // // // // // // // //               <p className="text-center text-[12px] text-slate-400">
// // // // // // // // // // //                 Or call us directly at{" "}
// // // // // // // // // // //                 <a href={`tel:+${APPLY_WHATSAPP_NUMBER}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // // // // // // // // // //                   {APPLY_PHONE_DISPLAY}
// // // // // // // // // // //                 </a>
// // // // // // // // // // //               </p>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
// // // // // // // // // // //       </main>
// // // // // // // // // // //       <Footer />
// // // // // // // // // // //     </>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // "use client";
// // // // // // // // // // import { useState, useMemo } from "react";
// // // // // // // // // // import { X, MapPin, Clock, Briefcase, ArrowRight, CheckCircle2, GraduationCap, MessageCircle, Mail, Phone } from "lucide-react";
// // // // // // // // // // import Navbar from "@/components/Navbar";
// // // // // // // // // // import Footer from "@/components/Footer";

// // // // // // // // // // /* ────────────────────────────────────────────────────────────
// // // // // // // // // //    JOB DATA
// // // // // // // // // //    Replace / extend this array with real openings. Each entry
// // // // // // // // // //    drives both the listing card and the detail panel — nothing
// // // // // // // // // //    else needs to change when you add or remove a role.
// // // // // // // // // //    ──────────────────────────────────────────────────────────── */
// // // // // // // // // // type Job = {
// // // // // // // // // //   id: string;
// // // // // // // // // //   title: string;
// // // // // // // // // //   department: "Aquaculture" | "Poultry" | "Cattle" | "Corporate";
// // // // // // // // // //   location: string;
// // // // // // // // // //   type: "Full-time" | "Part-time" | "Internship";
// // // // // // // // // //   experience: string;
// // // // // // // // // //   qualification?: string;
// // // // // // // // // //   summary: string;
// // // // // // // // // //   responsibilities: string[];
// // // // // // // // // //   requirements: string[];
// // // // // // // // // //   /** Flyer / poster image for this role — shown above the details in the card and modal. */
// // // // // // // // // //   image?: string;
// // // // // // // // // // };

// // // // // // // // // // const departmentAccent: Record<Job["department"], string> = {
// // // // // // // // // //   Aquaculture: "#0ea5e9",
// // // // // // // // // //   Poultry: "#f59e0b",
// // // // // // // // // //   Cattle: "#22c55e",
// // // // // // // // // //   Corporate: "#2A5DA8",
// // // // // // // // // // };

// // // // // // // // // // const departmentIcon: Record<Job["department"], string> = {
// // // // // // // // // //   Aquaculture: "🦐",
// // // // // // // // // //   Poultry: "🐔",
// // // // // // // // // //   Cattle: "🐄",
// // // // // // // // // //   Corporate: "🏢",
// // // // // // // // // // };

// // // // // // // // // // const jobs: Job[] = [
// // // // // // // // // //   {
// // // // // // // // // //     id: "area-sales-executive-aqua",
// // // // // // // // // //     title: "Area Sales Executive",
// // // // // // // // // //     department: "Aquaculture",
// // // // // // // // // //     location: "Bhimavaram, Kaikaluru, Amalapuram, Kakinada",
// // // // // // // // // //     type: "Full-time",
// // // // // // // // // //     experience: "2-3 years (aqua medicine marketing experience preferred)",
// // // // // // // // // //     qualification: "B.Sc / M.Sc in Fisheries Science or a related field",
// // // // // // // // // //     summary:
// // // // // // // // // //       "Drive sales of Innovare's aquaculture health products across the Bhimavaram–Kakinada belt, working directly with farmers and distributors to grow a loyal territory.",
// // // // // // // // // //     image: "/images/careers/area-sales-executive.jpeg",
// // // // // // // // // //     responsibilities: [
// // // // // // // // // //       "Promote and sell aquaculture health products across the assigned territory",
// // // // // // // // // //       "Build and maintain relationships with farmers and distributors",
// // // // // // // // // //       "Meet sales targets and report field activity regularly",
// // // // // // // // // //       "Provide on-ground product guidance and support to farmers",
// // // // // // // // // //     ],
// // // // // // // // // //     requirements: [
// // // // // // // // // //       "B.Sc / M.Sc in Fisheries Science or a related field",
// // // // // // // // // //       "2-3 years of experience, aqua medicine marketing preferred",
// // // // // // // // // //       "Willingness to travel across Bhimavaram, Kaikaluru, Amalapuram, and Kakinada",
// // // // // // // // // //       "Strong communication skills in Telugu and English",
// // // // // // // // // //     ],
// // // // // // // // // //   },
// // // // // // // // // // ];

// // // // // // // // // // const departments = ["All", "Aquaculture", "Poultry", "Cattle", "Corporate"] as const;

// // // // // // // // // // /* Contact details from the official job flyer */
// // // // // // // // // // const APPLY_WHATSAPP_NUMBER = "917799872555"; // country code + number, no symbols
// // // // // // // // // // const APPLY_EMAIL = "info@innovarebiopharma.com";
// // // // // // // // // // const APPLY_PHONE_DISPLAY = "77998 72555";

// // // // // // // // // // export default function CareersPage() {
// // // // // // // // // //   const [activeDept, setActiveDept] = useState<(typeof departments)[number]>("All");
// // // // // // // // // //   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

// // // // // // // // // //   const filteredJobs = useMemo(
// // // // // // // // // //     () => (activeDept === "All" ? jobs : jobs.filter((j) => j.department === activeDept)),
// // // // // // // // // //     [activeDept]
// // // // // // // // // //   );

// // // // // // // // // //   const waLink = (job: Job) =>
// // // // // // // // // //     `https://wa.me/${APPLY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
// // // // // // // // // //       `Hi Innovare Biopharma, I'd like to apply for the ${job.title} role (${job.location}).`
// // // // // // // // // //     )}`;

// // // // // // // // // //   const mailLink = (job: Job) =>
// // // // // // // // // //     `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
// // // // // // // // // //       `Application: ${job.title}`
// // // // // // // // // //     )}&body=${encodeURIComponent(
// // // // // // // // // //       `Hi Innovare Biopharma team,\n\nI'd like to apply for the ${job.title} role (${job.location}).\n\nName:\nPhone:\nResume link:\n\n`
// // // // // // // // // //     )}`;

// // // // // // // // // //   return (
// // // // // // // // // //     <>
// // // // // // // // // //       <Navbar />
// // // // // // // // // //       <main className="min-h-screen bg-white pt-16 sm:pt-[76px] lg:pt-[84px] xl:pt-[92px]">
// // // // // // // // // //       {/* ── Hero ── */}
// // // // // // // // // //       <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
// // // // // // // // // //         {/* Background photo — drop your image at public/images/careers-hero.jpg.
// // // // // // // // // //             Swap the src below if you want a different filename/path. */}
// // // // // // // // // //         <img
// // // // // // // // // //           src="/images/careers.png"
// // // // // // // // // //           alt=""
// // // // // // // // // //           aria-hidden="true"
// // // // // // // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // // // // // // //         />

// // // // // // // // // //         <div className="relative max-w-4xl mx-auto text-center">
// // // // // // // // // //           <div
// // // // // // // // // //             className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-[11px] sm:text-[12px] font-semibold tracking-wide"
// // // // // // // // // //             style={{
// // // // // // // // // //               color: "#7fd4ff",
// // // // // // // // // //               border: "1px solid rgba(127,212,255,0.4)",
// // // // // // // // // //               background: "rgba(7,23,38,0.55)",
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             <span
// // // // // // // // // //               className="inline-block w-2 h-2 rounded-full"
// // // // // // // // // //               style={{ background: "#38bdf8" }}
// // // // // // // // // //             />
// // // // // // // // // //             WE&apos;RE HIRING
// // // // // // // // // //           </div>

// // // // // // // // // //           <h1
// // // // // // // // // //             className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] mb-5"
// // // // // // // // // //             style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}
// // // // // // // // // //           >
// // // // // // // // // //             Build the future of{" "}
// // // // // // // // // //             <span style={{ color: "#8fd0ff" }}>aquaculture health</span> with us
// // // // // // // // // //           </h1>

// // // // // // // // // //           <p
// // // // // // // // // //             className="text-[14px] sm:text-[16px] text-white max-w-2xl mx-auto leading-relaxed"
// // // // // // // // // //             style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55)" }}
// // // // // // // // // //           >
// // // // // // // // // //             From farm-level fieldwork to formulation science, every role at Innovare
// // // // // // // // // //             connects back to healthier ponds, farms, and livelihoods. Here&apos;s what
// // // // // // // // // //             we&apos;re hiring for right now.
// // // // // // // // // //           </p>

// // // // // // // // // //           <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-10 pt-8 border-t border-white/30">
// // // // // // // // // //             {[
// // // // // // // // // //               { label: "OPEN ROLES", value: String(jobs.length) },
// // // // // // // // // //               { label: "DEPARTMENTS", value: String(new Set(jobs.map((j) => j.department)).size) },
// // // // // // // // // //               { label: "FIELD + OFFICE", value: "Hybrid" },
// // // // // // // // // //             ].map((s) => (
// // // // // // // // // //               <div key={s.label} className="text-center">
// // // // // // // // // //                 <div
// // // // // // // // // //                   className="text-[22px] sm:text-[26px] font-bold text-white"
// // // // // // // // // //                   style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
// // // // // // // // // //                 >
// // // // // // // // // //                   {s.value}
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div
// // // // // // // // // //                   className="text-[10px] sm:text-[11px] tracking-[0.15em] text-white/90 mt-1"
// // // // // // // // // //                   style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
// // // // // // // // // //                 >
// // // // // // // // // //                   {s.label}
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* ── Filters + listing ── */}
// // // // // // // // // //       <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
// // // // // // // // // //         <div className="flex flex-wrap gap-2 mb-10 justify-center">
// // // // // // // // // //           {departments.map((d) => {
// // // // // // // // // //             const active = activeDept === d;
// // // // // // // // // //             return (
// // // // // // // // // //               <button
// // // // // // // // // //                 key={d}
// // // // // // // // // //                 onClick={() => setActiveDept(d)}
// // // // // // // // // //                 className="px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all"
// // // // // // // // // //                 style={{
// // // // // // // // // //                   background: active ? "#2A5DA8" : "#f1f5f9",
// // // // // // // // // //                   color: active ? "#fff" : "#475569",
// // // // // // // // // //                   border: active ? "1px solid #2A5DA8" : "1px solid #e2e8f0",
// // // // // // // // // //                 }}
// // // // // // // // // //               >
// // // // // // // // // //                 {d}
// // // // // // // // // //               </button>
// // // // // // // // // //             );
// // // // // // // // // //           })}
// // // // // // // // // //         </div>

// // // // // // // // // //         {filteredJobs.length === 0 ? (
// // // // // // // // // //           <div className="text-center py-20">
// // // // // // // // // //             <p className="text-[15px] text-slate-500">
// // // // // // // // // //               No open roles in this department right now — check back soon, or reach out
// // // // // // // // // //               anyway at{" "}
// // // // // // // // // //               <a href={`mailto:${APPLY_EMAIL}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // // // // // // // // //                 {APPLY_EMAIL}
// // // // // // // // // //               </a>
// // // // // // // // // //               .
// // // // // // // // // //             </p>
// // // // // // // // // //           </div>
// // // // // // // // // //         ) : (
// // // // // // // // // //           <div
// // // // // // // // // //             className={
// // // // // // // // // //               filteredJobs.length === 1
// // // // // // // // // //                 ? "flex justify-center"
// // // // // // // // // //                 : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
// // // // // // // // // //             }
// // // // // // // // // //           >
// // // // // // // // // //             {filteredJobs.map((job) => {
// // // // // // // // // //               const accent = departmentAccent[job.department];
// // // // // // // // // //               return (
// // // // // // // // // //                 <button
// // // // // // // // // //                   key={job.id}
// // // // // // // // // //                   onClick={() => setSelectedJob(job)}
// // // // // // // // // //                   className={
// // // // // // // // // //                     "text-left rounded-2xl border transition-all duration-200 flex flex-col h-full bg-white hover:-translate-y-1 overflow-hidden" +
// // // // // // // // // //                     (filteredJobs.length === 1 ? " w-full max-w-sm" : "")
// // // // // // // // // //                   }
// // // // // // // // // //                   style={{
// // // // // // // // // //                     borderColor: "#e8edf5",
// // // // // // // // // //                     boxShadow: "0 2px 10px rgba(15,41,66,0.05)",
// // // // // // // // // //                   }}
// // // // // // // // // //                   onMouseEnter={(e) => {
// // // // // // // // // //                     e.currentTarget.style.boxShadow = `0 14px 32px ${accent}22`;
// // // // // // // // // //                     e.currentTarget.style.borderColor = accent;
// // // // // // // // // //                   }}
// // // // // // // // // //                   onMouseLeave={(e) => {
// // // // // // // // // //                     e.currentTarget.style.boxShadow = "0 2px 10px rgba(15,41,66,0.05)";
// // // // // // // // // //                     e.currentTarget.style.borderColor = "#e8edf5";
// // // // // // // // // //                   }}
// // // // // // // // // //                 >
// // // // // // // // // //                   {job.image ? (
// // // // // // // // // //                     <div className="relative w-full aspect-[4/3] shrink-0">
// // // // // // // // // //                       <img
// // // // // // // // // //                         src={job.image}
// // // // // // // // // //                         alt={`${job.title} job opening`}
// // // // // // // // // //                         className="w-full h-full object-cover"
// // // // // // // // // //                       />
// // // // // // // // // //                       <span
// // // // // // // // // //                         className="absolute top-3 right-3 text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full text-white"
// // // // // // // // // //                         style={{ background: accent }}
// // // // // // // // // //                       >
// // // // // // // // // //                         {job.department.toUpperCase()}
// // // // // // // // // //                       </span>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   ) : null}

// // // // // // // // // //                   <div className="p-6 flex flex-col flex-1">
// // // // // // // // // //                     {!job.image && (
// // // // // // // // // //                       <div className="flex items-center justify-between mb-4">
// // // // // // // // // //                         <span
// // // // // // // // // //                           className="w-11 h-11 rounded-xl flex items-center justify-center text-lg"
// // // // // // // // // //                           style={{ background: `${accent}14` }}
// // // // // // // // // //                         >
// // // // // // // // // //                           {departmentIcon[job.department]}
// // // // // // // // // //                         </span>
// // // // // // // // // //                         <span
// // // // // // // // // //                           className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full"
// // // // // // // // // //                           style={{ color: accent, background: `${accent}14` }}
// // // // // // // // // //                         >
// // // // // // // // // //                           {job.department.toUpperCase()}
// // // // // // // // // //                         </span>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     )}

// // // // // // // // // //                     <h3 className="text-[16px] font-bold text-slate-800 mb-2 leading-snug">
// // // // // // // // // //                       {job.title}
// // // // // // // // // //                     </h3>
// // // // // // // // // //                     <p className="text-[13px] text-slate-500 leading-relaxed mb-5 flex-1">
// // // // // // // // // //                       {job.summary}
// // // // // // // // // //                     </p>

// // // // // // // // // //                     <div className="flex flex-col gap-1.5 text-[12px] text-slate-500 mb-4">
// // // // // // // // // //                       <span className="flex items-center gap-1.5">
// // // // // // // // // //                         <MapPin size={13} /> {job.location}
// // // // // // // // // //                       </span>
// // // // // // // // // //                       <span className="flex items-center gap-1.5">
// // // // // // // // // //                         <Clock size={13} /> {job.type} · {job.experience}
// // // // // // // // // //                       </span>
// // // // // // // // // //                     </div>

// // // // // // // // // //                     <span
// // // // // // // // // //                       className="inline-flex items-center gap-1 text-[12.5px] font-bold mt-auto"
// // // // // // // // // //                       style={{ color: accent }}
// // // // // // // // // //                     >
// // // // // // // // // //                       View role <ArrowRight size={14} />
// // // // // // // // // //                     </span>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </button>
// // // // // // // // // //               );
// // // // // // // // // //             })}
// // // // // // // // // //           </div>
// // // // // // // // // //         )}
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* ── Detail modal ── */}
// // // // // // // // // //       {selectedJob && (
// // // // // // // // // //         <div
// // // // // // // // // //           className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
// // // // // // // // // //           style={{
// // // // // // // // // //             background: "rgba(10,20,35,0.6)",
// // // // // // // // // //             backdropFilter: "blur(3px)",
// // // // // // // // // //             animation: "careersModalFade 0.22s ease-out",
// // // // // // // // // //           }}
// // // // // // // // // //           onClick={() => setSelectedJob(null)}
// // // // // // // // // //         >
// // // // // // // // // //           <div
// // // // // // // // // //             className="bg-white w-full max-w-2xl rounded-[28px] max-h-[88vh] overflow-y-auto shadow-2xl"
// // // // // // // // // //             style={{ animation: "careersModalScale 0.28s cubic-bezier(0.16, 1, 0.3, 1)" }}
// // // // // // // // // //             onClick={(e) => e.stopPropagation()}
// // // // // // // // // //           >
// // // // // // // // // //             {selectedJob.image && (
// // // // // // // // // //               <img
// // // // // // // // // //                 src={selectedJob.image}
// // // // // // // // // //                 alt={`${selectedJob.title} job opening`}
// // // // // // // // // //                 className="w-full max-h-[46vh] object-contain bg-slate-50"
// // // // // // // // // //               />
// // // // // // // // // //             )}

// // // // // // // // // //             <div
// // // // // // // // // //               className="sticky top-0 flex items-start justify-between gap-4 px-6 sm:px-8 py-5 sm:py-6 bg-white z-10"
// // // // // // // // // //               style={{ borderBottom: "1px solid #f0f0f0" }}
// // // // // // // // // //             >
// // // // // // // // // //               <div className="min-w-0">
// // // // // // // // // //                 <span
// // // // // // // // // //                   className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full inline-block mb-3"
// // // // // // // // // //                   style={{
// // // // // // // // // //                     color: departmentAccent[selectedJob.department],
// // // // // // // // // //                     background: `${departmentAccent[selectedJob.department]}14`,
// // // // // // // // // //                   }}
// // // // // // // // // //                 >
// // // // // // // // // //                   {selectedJob.department.toUpperCase()}
// // // // // // // // // //                 </span>
// // // // // // // // // //                 <h2 className="text-[19px] sm:text-[23px] font-bold text-slate-800 leading-snug">
// // // // // // // // // //                   {selectedJob.title}
// // // // // // // // // //                 </h2>
// // // // // // // // // //                 <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2.5 text-[12.5px] text-slate-500">
// // // // // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // // // // //                     <MapPin size={13} className="shrink-0" /> {selectedJob.location}
// // // // // // // // // //                   </span>
// // // // // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // // // // //                     <Briefcase size={13} className="shrink-0" /> {selectedJob.type}
// // // // // // // // // //                   </span>
// // // // // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // // // // //                     <Clock size={13} className="shrink-0" /> {selectedJob.experience}
// // // // // // // // // //                   </span>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //               <button
// // // // // // // // // //                 onClick={() => setSelectedJob(null)}
// // // // // // // // // //                 className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
// // // // // // // // // //                 style={{ background: "#f8fafc", color: "#64748b" }}
// // // // // // // // // //                 onMouseEnter={(e) => {
// // // // // // // // // //                   e.currentTarget.style.background = "#f1f5f9";
// // // // // // // // // //                   e.currentTarget.style.color = "#334155";
// // // // // // // // // //                 }}
// // // // // // // // // //                 onMouseLeave={(e) => {
// // // // // // // // // //                   e.currentTarget.style.background = "#f8fafc";
// // // // // // // // // //                   e.currentTarget.style.color = "#64748b";
// // // // // // // // // //                 }}
// // // // // // // // // //                 aria-label="Close"
// // // // // // // // // //               >
// // // // // // // // // //                 <X size={18} />
// // // // // // // // // //               </button>
// // // // // // // // // //             </div>

// // // // // // // // // //             <div className="px-6 sm:px-8 py-6 sm:py-7 space-y-7">
// // // // // // // // // //               <p className="text-[13.5px] text-slate-600 leading-relaxed">
// // // // // // // // // //                 {selectedJob.summary}
// // // // // // // // // //               </p>

// // // // // // // // // //               {selectedJob.qualification && (
// // // // // // // // // //                 <div
// // // // // // // // // //                   className="flex items-start gap-3 rounded-2xl px-4 py-3.5"
// // // // // // // // // //                   style={{ background: `${departmentAccent[selectedJob.department]}0c` }}
// // // // // // // // // //                 >
// // // // // // // // // //                   <GraduationCap
// // // // // // // // // //                     size={17}
// // // // // // // // // //                     className="mt-0.5 shrink-0"
// // // // // // // // // //                     style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // // // // //                   />
// // // // // // // // // //                   <p className="text-[13px] text-slate-600 leading-relaxed">
// // // // // // // // // //                     <span className="font-bold text-slate-800">Qualification — </span>
// // // // // // // // // //                     {selectedJob.qualification}
// // // // // // // // // //                   </p>
// // // // // // // // // //                 </div>
// // // // // // // // // //               )}

// // // // // // // // // //               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // // // // // // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
// // // // // // // // // //                   <span
// // // // // // // // // //                     className="w-1 h-4 rounded-full inline-block"
// // // // // // // // // //                     style={{ background: departmentAccent[selectedJob.department] }}
// // // // // // // // // //                   />
// // // // // // // // // //                   What you&apos;ll do
// // // // // // // // // //                 </h3>
// // // // // // // // // //                 <ul className="space-y-2.5">
// // // // // // // // // //                   {selectedJob.responsibilities.map((r, i) => (
// // // // // // // // // //                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
// // // // // // // // // //                       <CheckCircle2
// // // // // // // // // //                         size={15}
// // // // // // // // // //                         className="mt-0.5 shrink-0"
// // // // // // // // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // // // // //                       />
// // // // // // // // // //                       {r}
// // // // // // // // // //                     </li>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </ul>
// // // // // // // // // //               </div>

// // // // // // // // // //               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // // // // // // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
// // // // // // // // // //                   <span
// // // // // // // // // //                     className="w-1 h-4 rounded-full inline-block"
// // // // // // // // // //                     style={{ background: departmentAccent[selectedJob.department] }}
// // // // // // // // // //                   />
// // // // // // // // // //                   What we&apos;re looking for
// // // // // // // // // //                 </h3>
// // // // // // // // // //                 <ul className="space-y-2.5">
// // // // // // // // // //                   {selectedJob.requirements.map((r, i) => (
// // // // // // // // // //                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
// // // // // // // // // //                       <CheckCircle2
// // // // // // // // // //                         size={15}
// // // // // // // // // //                         className="mt-0.5 shrink-0"
// // // // // // // // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // // // // //                       />
// // // // // // // // // //                       {r}
// // // // // // // // // //                     </li>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </ul>
// // // // // // // // // //               </div>

// // // // // // // // // //               <div className="pt-2 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // // // // // // // //                 <div className="flex flex-col sm:flex-row gap-3 mt-6">
// // // // // // // // // //                   <a
// // // // // // // // // //                     href={waLink(selectedJob)}
// // // // // // // // // //                     target="_blank"
// // // // // // // // // //                     rel="noopener noreferrer"
// // // // // // // // // //                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
// // // // // // // // // //                     style={{ background: "#25D366", boxShadow: "0 8px 20px rgba(37,211,102,0.28)" }}
// // // // // // // // // //                   >
// // // // // // // // // //                     <MessageCircle size={16} /> Apply via WhatsApp
// // // // // // // // // //                   </a>
// // // // // // // // // //                   <a
// // // // // // // // // //                     href={mailLink(selectedJob)}
// // // // // // // // // //                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold no-underline transition-transform hover:-translate-y-0.5"
// // // // // // // // // //                     style={{ border: "1.5px solid #2A5DA8", color: "#2A5DA8" }}
// // // // // // // // // //                   >
// // // // // // // // // //                     <Mail size={16} /> Apply via Email
// // // // // // // // // //                   </a>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 <p className="flex items-center justify-center gap-1.5 text-[12px] text-slate-400 mt-5">
// // // // // // // // // //                   <Phone size={12} />
// // // // // // // // // //                   Or call us directly at{" "}
// // // // // // // // // //                   <a href={`tel:+${APPLY_WHATSAPP_NUMBER}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // // // // // // // // //                     {APPLY_PHONE_DISPLAY}
// // // // // // // // // //                   </a>
// // // // // // // // // //                 </p>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //       </main>
// // // // // // // // // //       <Footer />

// // // // // // // // // //       <style>{`
// // // // // // // // // //         @keyframes careersModalFade {
// // // // // // // // // //           from { opacity: 0; }
// // // // // // // // // //           to { opacity: 1; }
// // // // // // // // // //         }
// // // // // // // // // //         @keyframes careersModalScale {
// // // // // // // // // //           from { opacity: 0; transform: scale(0.94) translateY(8px); }
// // // // // // // // // //           to { opacity: 1; transform: scale(1) translateY(0); }
// // // // // // // // // //         }
// // // // // // // // // //       `}</style>
// // // // // // // // // //     </>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // "use client";
// // // // // // // // // import { useState, useMemo } from "react";
// // // // // // // // // import { X, MapPin, Clock, Briefcase, ArrowRight, CheckCircle2, GraduationCap, MessageCircle, Mail, Phone } from "lucide-react";
// // // // // // // // // import Navbar from "@/components/Navbar";
// // // // // // // // // import Footer from "@/components/Footer";

// // // // // // // // // /* ────────────────────────────────────────────────────────────
// // // // // // // // //    JOB DATA
// // // // // // // // //    Replace / extend this array with real openings. Each entry
// // // // // // // // //    drives both the listing card and the detail panel — nothing
// // // // // // // // //    else needs to change when you add or remove a role.
// // // // // // // // //    ──────────────────────────────────────────────────────────── */
// // // // // // // // // type Job = {
// // // // // // // // //   id: string;
// // // // // // // // //   title: string;
// // // // // // // // //   department: "Aquaculture" | "Poultry" | "Cattle" | "Corporate";
// // // // // // // // //   location: string;
// // // // // // // // //   type: "Full-time" | "Part-time" | "Internship";
// // // // // // // // //   experience: string;
// // // // // // // // //   qualification?: string;
// // // // // // // // //   summary: string;
// // // // // // // // //   responsibilities: string[];
// // // // // // // // //   requirements: string[];
// // // // // // // // //   /** Flyer / poster image for this role — shown above the details in the card and modal. */
// // // // // // // // //   image?: string;
// // // // // // // // // };

// // // // // // // // // const departmentAccent: Record<Job["department"], string> = {
// // // // // // // // //   Aquaculture: "#0ea5e9",
// // // // // // // // //   Poultry: "#f59e0b",
// // // // // // // // //   Cattle: "#22c55e",
// // // // // // // // //   Corporate: "#2A5DA8",
// // // // // // // // // };

// // // // // // // // // const departmentIcon: Record<Job["department"], string> = {
// // // // // // // // //   Aquaculture: "🦐",
// // // // // // // // //   Poultry: "🐔",
// // // // // // // // //   Cattle: "🐄",
// // // // // // // // //   Corporate: "🏢",
// // // // // // // // // };

// // // // // // // // // const jobs: Job[] = [
// // // // // // // // //   {
// // // // // // // // //     id: "area-sales-executive-aqua",
// // // // // // // // //     title: "Area Sales Executive",
// // // // // // // // //     department: "Aquaculture",
// // // // // // // // //     location: "Bhimavaram, Kaikaluru, Amalapuram, Kakinada",
// // // // // // // // //     type: "Full-time",
// // // // // // // // //     experience: "2-3 years (aqua medicine marketing experience preferred)",
// // // // // // // // //     qualification: "B.Sc / M.Sc in Fisheries Science or a related field",
// // // // // // // // //     summary:
// // // // // // // // //       "Drive sales of Innovare's aquaculture health products across the Bhimavaram–Kakinada belt, working directly with farmers and distributors to grow a loyal territory.",
// // // // // // // // //     image: "/images/job.jpeg",
// // // // // // // // //     responsibilities: [
// // // // // // // // //       "Promote and sell aquaculture health products across the assigned territory",
// // // // // // // // //       "Build and maintain relationships with farmers and distributors",
// // // // // // // // //       "Meet sales targets and report field activity regularly",
// // // // // // // // //       "Provide on-ground product guidance and support to farmers",
// // // // // // // // //     ],
// // // // // // // // //     requirements: [
// // // // // // // // //       "B.Sc / M.Sc in Fisheries Science or a related field",
// // // // // // // // //       "2-3 years of experience, aqua medicine marketing preferred",
// // // // // // // // //       "Willingness to travel across Bhimavaram, Kaikaluru, Amalapuram, and Kakinada",
// // // // // // // // //       "Strong communication skills in Telugu and English",
// // // // // // // // //     ],
// // // // // // // // //   },
// // // // // // // // // ];

// // // // // // // // // const departments = ["All", "Aquaculture", "Poultry", "Cattle", "Corporate"] as const;

// // // // // // // // // /* Contact details from the official job flyer */
// // // // // // // // // const APPLY_WHATSAPP_NUMBER = "917799872555"; // country code + number, no symbols
// // // // // // // // // const APPLY_EMAIL = "info@innovarebiopharma.com";
// // // // // // // // // const APPLY_PHONE_DISPLAY = "77998 72555";

// // // // // // // // // export default function CareersPage() {
// // // // // // // // //   const [activeDept, setActiveDept] = useState<(typeof departments)[number]>("All");
// // // // // // // // //   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

// // // // // // // // //   const filteredJobs = useMemo(
// // // // // // // // //     () => (activeDept === "All" ? jobs : jobs.filter((j) => j.department === activeDept)),
// // // // // // // // //     [activeDept]
// // // // // // // // //   );

// // // // // // // // //   const waLink = (job: Job) =>
// // // // // // // // //     `https://wa.me/${APPLY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
// // // // // // // // //       `Hi Innovare Biopharma, I'd like to apply for the ${job.title} role (${job.location}).`
// // // // // // // // //     )}`;

// // // // // // // // //   const mailLink = (job: Job) =>
// // // // // // // // //     `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
// // // // // // // // //       `Application: ${job.title}`
// // // // // // // // //     )}&body=${encodeURIComponent(
// // // // // // // // //       `Hi Innovare Biopharma team,\n\nI'd like to apply for the ${job.title} role (${job.location}).\n\nName:\nPhone:\nResume link:\n\n`
// // // // // // // // //     )}`;

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       <Navbar />
// // // // // // // // //       <main className="min-h-screen bg-white pt-16 sm:pt-[76px] lg:pt-[84px] xl:pt-[92px]">
// // // // // // // // //       {/* ── Hero ── */}
// // // // // // // // //       <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
// // // // // // // // //         {/* Background photo — drop your image at public/images/careers-hero.jpg.
// // // // // // // // //             Swap the src below if you want a different filename/path. */}
// // // // // // // // //         <img
// // // // // // // // //           src="/images/careers.png"
// // // // // // // // //           alt=""
// // // // // // // // //           aria-hidden="true"
// // // // // // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // // // // // //         />

// // // // // // // // //         <div className="relative max-w-4xl mx-auto text-center">
// // // // // // // // //           <div
// // // // // // // // //             className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-[11px] sm:text-[12px] font-semibold tracking-wide"
// // // // // // // // //             style={{
// // // // // // // // //               color: "#7fd4ff",
// // // // // // // // //               border: "1px solid rgba(127,212,255,0.4)",
// // // // // // // // //               background: "rgba(7,23,38,0.55)",
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             <span
// // // // // // // // //               className="inline-block w-2 h-2 rounded-full"
// // // // // // // // //               style={{ background: "#38bdf8" }}
// // // // // // // // //             />
// // // // // // // // //             WE&apos;RE HIRING
// // // // // // // // //           </div>

// // // // // // // // //           <h1
// // // // // // // // //             className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] mb-5"
// // // // // // // // //             style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}
// // // // // // // // //           >
// // // // // // // // //             Build the future of{" "}
// // // // // // // // //             <span
// // // // // // // // //               style={{
// // // // // // // // //                 background: "linear-gradient(90deg, #3b6ef0 0%, #8fc4ff 100%)",
// // // // // // // // //                 WebkitBackgroundClip: "text",
// // // // // // // // //                 WebkitTextFillColor: "transparent",
// // // // // // // // //                 backgroundClip: "text",
// // // // // // // // //               }}
// // // // // // // // //             >
// // // // // // // // //               aquaculture health
// // // // // // // // //             </span>{" "}
// // // // // // // // //             with us
// // // // // // // // //           </h1>

// // // // // // // // //           <p
// // // // // // // // //             className="text-[14px] sm:text-[16px] text-white max-w-2xl mx-auto leading-relaxed"
// // // // // // // // //             style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55)" }}
// // // // // // // // //           >
// // // // // // // // //             From farm-level fieldwork to formulation science, every role at Innovare
// // // // // // // // //             connects back to healthier ponds, farms, and livelihoods. Here&apos;s what
// // // // // // // // //             we&apos;re hiring for right now.
// // // // // // // // //           </p>

// // // // // // // // //           <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-10 pt-8 border-t border-white/30">
// // // // // // // // //             {[
// // // // // // // // //               { label: "OPEN ROLES", value: String(jobs.length) },
// // // // // // // // //               { label: "DEPARTMENTS", value: String(new Set(jobs.map((j) => j.department)).size) },
// // // // // // // // //               { label: "FIELD + OFFICE", value: "Hybrid" },
// // // // // // // // //             ].map((s) => (
// // // // // // // // //               <div key={s.label} className="text-center">
// // // // // // // // //                 <div
// // // // // // // // //                   className="text-[22px] sm:text-[26px] font-bold text-white"
// // // // // // // // //                   style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
// // // // // // // // //                 >
// // // // // // // // //                   {s.value}
// // // // // // // // //                 </div>
// // // // // // // // //                 <div
// // // // // // // // //                   className="text-[10px] sm:text-[11px] tracking-[0.15em] text-white/90 mt-1"
// // // // // // // // //                   style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
// // // // // // // // //                 >
// // // // // // // // //                   {s.label}
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ── Filters + listing ── */}
// // // // // // // // //       <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
// // // // // // // // //         <div className="flex flex-wrap gap-2 mb-10 justify-center">
// // // // // // // // //           {departments.map((d) => {
// // // // // // // // //             const active = activeDept === d;
// // // // // // // // //             return (
// // // // // // // // //               <button
// // // // // // // // //                 key={d}
// // // // // // // // //                 onClick={() => setActiveDept(d)}
// // // // // // // // //                 className="px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all"
// // // // // // // // //                 style={{
// // // // // // // // //                   background: active ? "#2A5DA8" : "#f1f5f9",
// // // // // // // // //                   color: active ? "#fff" : "#475569",
// // // // // // // // //                   border: active ? "1px solid #2A5DA8" : "1px solid #e2e8f0",
// // // // // // // // //                 }}
// // // // // // // // //               >
// // // // // // // // //                 {d}
// // // // // // // // //               </button>
// // // // // // // // //             );
// // // // // // // // //           })}
// // // // // // // // //         </div>

// // // // // // // // //         {filteredJobs.length === 0 ? (
// // // // // // // // //           <div className="text-center py-20">
// // // // // // // // //             <p className="text-[15px] text-slate-500">
// // // // // // // // //               No open roles in this department right now — check back soon, or reach out
// // // // // // // // //               anyway at{" "}
// // // // // // // // //               <a href={`mailto:${APPLY_EMAIL}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // // // // // // // //                 {APPLY_EMAIL}
// // // // // // // // //               </a>
// // // // // // // // //               .
// // // // // // // // //             </p>
// // // // // // // // //           </div>
// // // // // // // // //         ) : (
// // // // // // // // //           <div
// // // // // // // // //             className={
// // // // // // // // //               filteredJobs.length === 1
// // // // // // // // //                 ? "flex justify-center"
// // // // // // // // //                 : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
// // // // // // // // //             }
// // // // // // // // //           >
// // // // // // // // //             {filteredJobs.map((job) => {
// // // // // // // // //               const accent = departmentAccent[job.department];
// // // // // // // // //               return (
// // // // // // // // //                 <button
// // // // // // // // //                   key={job.id}
// // // // // // // // //                   onClick={() => setSelectedJob(job)}
// // // // // // // // //                   className={
// // // // // // // // //                     "text-left rounded-2xl border transition-all duration-200 flex flex-col h-full bg-white hover:-translate-y-1 overflow-hidden" +
// // // // // // // // //                     (filteredJobs.length === 1 ? " w-full max-w-sm" : "")
// // // // // // // // //                   }
// // // // // // // // //                   style={{
// // // // // // // // //                     borderColor: "#e8edf5",
// // // // // // // // //                     boxShadow: "0 2px 10px rgba(15,41,66,0.05)",
// // // // // // // // //                   }}
// // // // // // // // //                   onMouseEnter={(e) => {
// // // // // // // // //                     e.currentTarget.style.boxShadow = `0 14px 32px ${accent}22`;
// // // // // // // // //                     e.currentTarget.style.borderColor = accent;
// // // // // // // // //                   }}
// // // // // // // // //                   onMouseLeave={(e) => {
// // // // // // // // //                     e.currentTarget.style.boxShadow = "0 2px 10px rgba(15,41,66,0.05)";
// // // // // // // // //                     e.currentTarget.style.borderColor = "#e8edf5";
// // // // // // // // //                   }}
// // // // // // // // //                 >
// // // // // // // // //                   {job.image ? (
// // // // // // // // //                     <div className="relative w-full aspect-[4/3] shrink-0">
// // // // // // // // //                       <img
// // // // // // // // //                         src={job.image}
// // // // // // // // //                         alt={`${job.title} job opening`}
// // // // // // // // //                         className="w-full h-full object-cover"
// // // // // // // // //                       />
// // // // // // // // //                       <span
// // // // // // // // //                         className="absolute top-3 right-3 text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full text-white"
// // // // // // // // //                         style={{ background: accent }}
// // // // // // // // //                       >
// // // // // // // // //                         {job.department.toUpperCase()}
// // // // // // // // //                       </span>
// // // // // // // // //                     </div>
// // // // // // // // //                   ) : null}

// // // // // // // // //                   <div className="p-6 flex flex-col flex-1">
// // // // // // // // //                     {!job.image && (
// // // // // // // // //                       <div className="flex items-center justify-between mb-4">
// // // // // // // // //                         <span
// // // // // // // // //                           className="w-11 h-11 rounded-xl flex items-center justify-center text-lg"
// // // // // // // // //                           style={{ background: `${accent}14` }}
// // // // // // // // //                         >
// // // // // // // // //                           {departmentIcon[job.department]}
// // // // // // // // //                         </span>
// // // // // // // // //                         <span
// // // // // // // // //                           className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full"
// // // // // // // // //                           style={{ color: accent, background: `${accent}14` }}
// // // // // // // // //                         >
// // // // // // // // //                           {job.department.toUpperCase()}
// // // // // // // // //                         </span>
// // // // // // // // //                       </div>
// // // // // // // // //                     )}

// // // // // // // // //                     <h3 className="text-[16px] font-bold text-slate-800 mb-2 leading-snug">
// // // // // // // // //                       {job.title}
// // // // // // // // //                     </h3>
// // // // // // // // //                     <p className="text-[13px] text-slate-500 leading-relaxed mb-5 flex-1">
// // // // // // // // //                       {job.summary}
// // // // // // // // //                     </p>

// // // // // // // // //                     <div className="flex flex-col gap-1.5 text-[12px] text-slate-500 mb-4">
// // // // // // // // //                       <span className="flex items-center gap-1.5">
// // // // // // // // //                         <MapPin size={13} /> {job.location}
// // // // // // // // //                       </span>
// // // // // // // // //                       <span className="flex items-center gap-1.5">
// // // // // // // // //                         <Clock size={13} /> {job.type} · {job.experience}
// // // // // // // // //                       </span>
// // // // // // // // //                     </div>

// // // // // // // // //                     <span
// // // // // // // // //                       className="inline-flex items-center gap-1 text-[12.5px] font-bold mt-auto"
// // // // // // // // //                       style={{ color: accent }}
// // // // // // // // //                     >
// // // // // // // // //                       View role <ArrowRight size={14} />
// // // // // // // // //                     </span>
// // // // // // // // //                   </div>
// // // // // // // // //                 </button>
// // // // // // // // //               );
// // // // // // // // //             })}
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //       </section>

// // // // // // // // //       {/* ── Detail modal ── */}
// // // // // // // // //       {selectedJob && (
// // // // // // // // //         <div
// // // // // // // // //           className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
// // // // // // // // //           style={{
// // // // // // // // //             background: "rgba(10,20,35,0.6)",
// // // // // // // // //             backdropFilter: "blur(3px)",
// // // // // // // // //             animation: "careersModalFade 0.22s ease-out",
// // // // // // // // //           }}
// // // // // // // // //           onClick={() => setSelectedJob(null)}
// // // // // // // // //         >
// // // // // // // // //           <div
// // // // // // // // //             className="careers-modal-scroll bg-white w-full max-w-2xl rounded-[28px] max-h-[88vh] overflow-y-auto shadow-2xl"
// // // // // // // // //             style={{ animation: "careersModalScale 0.28s cubic-bezier(0.16, 1, 0.3, 1)" }}
// // // // // // // // //             onClick={(e) => e.stopPropagation()}
// // // // // // // // //           >
// // // // // // // // //             {selectedJob.image && (
// // // // // // // // //               <img
// // // // // // // // //                 src={selectedJob.image}
// // // // // // // // //                 alt={`${selectedJob.title} job opening`}
// // // // // // // // //                 className="w-full max-h-[46vh] object-contain bg-slate-50"
// // // // // // // // //               />
// // // // // // // // //             )}

// // // // // // // // //             <div
// // // // // // // // //               className="sticky top-0 flex items-start justify-between gap-4 px-6 sm:px-8 py-5 sm:py-6 bg-white z-10"
// // // // // // // // //               style={{ borderBottom: "1px solid #f0f0f0" }}
// // // // // // // // //             >
// // // // // // // // //               <div className="min-w-0">
// // // // // // // // //                 <span
// // // // // // // // //                   className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full inline-block mb-3"
// // // // // // // // //                   style={{
// // // // // // // // //                     color: departmentAccent[selectedJob.department],
// // // // // // // // //                     background: `${departmentAccent[selectedJob.department]}14`,
// // // // // // // // //                   }}
// // // // // // // // //                 >
// // // // // // // // //                   {selectedJob.department.toUpperCase()}
// // // // // // // // //                 </span>
// // // // // // // // //                 <h2 className="text-[19px] sm:text-[23px] font-bold text-slate-800 leading-snug">
// // // // // // // // //                   {selectedJob.title}
// // // // // // // // //                 </h2>
// // // // // // // // //                 <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2.5 text-[12.5px] text-slate-500">
// // // // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // // // //                     <MapPin size={13} className="shrink-0" /> {selectedJob.location}
// // // // // // // // //                   </span>
// // // // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // // // //                     <Briefcase size={13} className="shrink-0" /> {selectedJob.type}
// // // // // // // // //                   </span>
// // // // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // // // //                     <Clock size={13} className="shrink-0" /> {selectedJob.experience}
// // // // // // // // //                   </span>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <button
// // // // // // // // //                 onClick={() => setSelectedJob(null)}
// // // // // // // // //                 className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
// // // // // // // // //                 style={{ background: "#f8fafc", color: "#64748b" }}
// // // // // // // // //                 onMouseEnter={(e) => {
// // // // // // // // //                   e.currentTarget.style.background = "#f1f5f9";
// // // // // // // // //                   e.currentTarget.style.color = "#334155";
// // // // // // // // //                 }}
// // // // // // // // //                 onMouseLeave={(e) => {
// // // // // // // // //                   e.currentTarget.style.background = "#f8fafc";
// // // // // // // // //                   e.currentTarget.style.color = "#64748b";
// // // // // // // // //                 }}
// // // // // // // // //                 aria-label="Close"
// // // // // // // // //               >
// // // // // // // // //                 <X size={18} />
// // // // // // // // //               </button>
// // // // // // // // //             </div>

// // // // // // // // //             <div className="px-6 sm:px-8 py-6 sm:py-7 space-y-7">
// // // // // // // // //               <p className="text-[13.5px] text-slate-600 leading-relaxed">
// // // // // // // // //                 {selectedJob.summary}
// // // // // // // // //               </p>

// // // // // // // // //               {selectedJob.qualification && (
// // // // // // // // //                 <div
// // // // // // // // //                   className="flex items-start gap-3 rounded-2xl px-4 py-3.5"
// // // // // // // // //                   style={{ background: `${departmentAccent[selectedJob.department]}0c` }}
// // // // // // // // //                 >
// // // // // // // // //                   <GraduationCap
// // // // // // // // //                     size={17}
// // // // // // // // //                     className="mt-0.5 shrink-0"
// // // // // // // // //                     style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // // // //                   />
// // // // // // // // //                   <p className="text-[13px] text-slate-600 leading-relaxed">
// // // // // // // // //                     <span className="font-bold text-slate-800">Qualification — </span>
// // // // // // // // //                     {selectedJob.qualification}
// // // // // // // // //                   </p>
// // // // // // // // //                 </div>
// // // // // // // // //               )}

// // // // // // // // //               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // // // // // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
// // // // // // // // //                   <span
// // // // // // // // //                     className="w-1 h-4 rounded-full inline-block"
// // // // // // // // //                     style={{ background: departmentAccent[selectedJob.department] }}
// // // // // // // // //                   />
// // // // // // // // //                   What you&apos;ll do
// // // // // // // // //                 </h3>
// // // // // // // // //                 <ul className="space-y-2.5">
// // // // // // // // //                   {selectedJob.responsibilities.map((r, i) => (
// // // // // // // // //                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
// // // // // // // // //                       <CheckCircle2
// // // // // // // // //                         size={15}
// // // // // // // // //                         className="mt-0.5 shrink-0"
// // // // // // // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // // // //                       />
// // // // // // // // //                       {r}
// // // // // // // // //                     </li>
// // // // // // // // //                   ))}
// // // // // // // // //                 </ul>
// // // // // // // // //               </div>

// // // // // // // // //               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // // // // // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
// // // // // // // // //                   <span
// // // // // // // // //                     className="w-1 h-4 rounded-full inline-block"
// // // // // // // // //                     style={{ background: departmentAccent[selectedJob.department] }}
// // // // // // // // //                   />
// // // // // // // // //                   What we&apos;re looking for
// // // // // // // // //                 </h3>
// // // // // // // // //                 <ul className="space-y-2.5">
// // // // // // // // //                   {selectedJob.requirements.map((r, i) => (
// // // // // // // // //                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
// // // // // // // // //                       <CheckCircle2
// // // // // // // // //                         size={15}
// // // // // // // // //                         className="mt-0.5 shrink-0"
// // // // // // // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // // // //                       />
// // // // // // // // //                       {r}
// // // // // // // // //                     </li>
// // // // // // // // //                   ))}
// // // // // // // // //                 </ul>
// // // // // // // // //               </div>

// // // // // // // // //               <div className="pt-2 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // // // // // // //                 <div className="flex flex-col sm:flex-row gap-3 mt-6">
// // // // // // // // //                   <a
// // // // // // // // //                     href={waLink(selectedJob)}
// // // // // // // // //                     target="_blank"
// // // // // // // // //                     rel="noopener noreferrer"
// // // // // // // // //                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
// // // // // // // // //                     style={{ background: "#25D366", boxShadow: "0 8px 20px rgba(37,211,102,0.28)" }}
// // // // // // // // //                   >
// // // // // // // // //                     <MessageCircle size={16} /> Apply via WhatsApp
// // // // // // // // //                   </a>
// // // // // // // // //                   <a
// // // // // // // // //                     href={mailLink(selectedJob)}
// // // // // // // // //                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold no-underline transition-transform hover:-translate-y-0.5"
// // // // // // // // //                     style={{ border: "1.5px solid #2A5DA8", color: "#2A5DA8" }}
// // // // // // // // //                   >
// // // // // // // // //                     <Mail size={16} /> Apply via Email
// // // // // // // // //                   </a>
// // // // // // // // //                 </div>

// // // // // // // // //                 <p className="flex items-center justify-center gap-1.5 text-[12px] text-slate-400 mt-5">
// // // // // // // // //                   <Phone size={12} />
// // // // // // // // //                   Or call us directly at{" "}
// // // // // // // // //                   <a href={`tel:+${APPLY_WHATSAPP_NUMBER}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // // // // // // // //                     {APPLY_PHONE_DISPLAY}
// // // // // // // // //                   </a>
// // // // // // // // //                 </p>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //       </main>
// // // // // // // // //       <Footer />

// // // // // // // // //       <style>{`
// // // // // // // // //         @keyframes careersModalFade {
// // // // // // // // //           from { opacity: 0; }
// // // // // // // // //           to { opacity: 1; }
// // // // // // // // //         }
// // // // // // // // //         @keyframes careersModalScale {
// // // // // // // // //           from { opacity: 0; transform: scale(0.94) translateY(8px); }
// // // // // // // // //           to { opacity: 1; transform: scale(1) translateY(0); }
// // // // // // // // //         }
// // // // // // // // //       `}</style>
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // "use client";
// // // // // // // // import { useState, useMemo } from "react";
// // // // // // // // import { X, MapPin, Clock, Briefcase, ArrowRight, CheckCircle2, GraduationCap, MessageCircle, Mail, Phone } from "lucide-react";
// // // // // // // // import Navbar from "@/components/Navbar";
// // // // // // // // import Footer from "@/components/Footer";

// // // // // // // // /* ────────────────────────────────────────────────────────────
// // // // // // // //    JOB DATA
// // // // // // // //    Replace / extend this array with real openings. Each entry
// // // // // // // //    drives both the listing card and the detail panel — nothing
// // // // // // // //    else needs to change when you add or remove a role.
// // // // // // // //    ──────────────────────────────────────────────────────────── */
// // // // // // // // type Job = {
// // // // // // // //   id: string;
// // // // // // // //   title: string;
// // // // // // // //   department: "Aquaculture" | "Poultry" | "Cattle" | "Corporate";
// // // // // // // //   location: string;
// // // // // // // //   type: "Full-time" | "Part-time" | "Internship";
// // // // // // // //   experience: string;
// // // // // // // //   qualification?: string;
// // // // // // // //   summary: string;
// // // // // // // //   responsibilities: string[];
// // // // // // // //   requirements: string[];
// // // // // // // //   /** Flyer / poster image for this role — shown above the details in the card and modal. */
// // // // // // // //   image?: string;
// // // // // // // // };

// // // // // // // // const departmentAccent: Record<Job["department"], string> = {
// // // // // // // //   Aquaculture: "#0ea5e9",
// // // // // // // //   Poultry: "#f59e0b",
// // // // // // // //   Cattle: "#22c55e",
// // // // // // // //   Corporate: "#2A5DA8",
// // // // // // // // };

// // // // // // // // const departmentIcon: Record<Job["department"], string> = {
// // // // // // // //   Aquaculture: "🦐",
// // // // // // // //   Poultry: "🐔",
// // // // // // // //   Cattle: "🐄",
// // // // // // // //   Corporate: "🏢",
// // // // // // // // };

// // // // // // // // const jobs: Job[] = [
// // // // // // // //   {
// // // // // // // //     id: "area-sales-executive-aqua",
// // // // // // // //     title: "Area Sales Executive",
// // // // // // // //     department: "Aquaculture",
// // // // // // // //     location: "Bhimavaram, Kaikaluru, Amalapuram, Kakinada",
// // // // // // // //     type: "Full-time",
// // // // // // // //     experience: "2-3 years (aqua medicine marketing experience preferred)",
// // // // // // // //     qualification: "B.Sc / M.Sc in Fisheries Science or a related field",
// // // // // // // //     summary:
// // // // // // // //       "Drive sales of Innovare's aquaculture health products across the Bhimavaram–Kakinada belt, working directly with farmers and distributors to grow a loyal territory.",
// // // // // // // //     image: "/images/job.jpeg",
// // // // // // // //     responsibilities: [
// // // // // // // //       "Promote and sell aquaculture health products across the assigned territory",
// // // // // // // //       "Build and maintain relationships with farmers and distributors",
// // // // // // // //       "Meet sales targets and report field activity regularly",
// // // // // // // //       "Provide on-ground product guidance and support to farmers",
// // // // // // // //     ],
// // // // // // // //     requirements: [
// // // // // // // //       "B.Sc / M.Sc in Fisheries Science or a related field",
// // // // // // // //       "2-3 years of experience, aqua medicine marketing preferred",
// // // // // // // //       "Willingness to travel across Bhimavaram, Kaikaluru, Amalapuram, and Kakinada",
// // // // // // // //       "Strong communication skills in Telugu and English",
// // // // // // // //     ],
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // const departments = ["All", "Aquaculture", "Poultry", "Cattle", "Corporate"] as const;

// // // // // // // // /* Contact details from the official job flyer */
// // // // // // // // const APPLY_WHATSAPP_NUMBER = "917799872555"; // country code + number, no symbols
// // // // // // // // const APPLY_EMAIL = "info@innovarebiopharma.com";
// // // // // // // // const APPLY_PHONE_DISPLAY = "77998 72555";

// // // // // // // // export default function CareersPage() {
// // // // // // // //   const [activeDept, setActiveDept] = useState<(typeof departments)[number]>("All");
// // // // // // // //   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

// // // // // // // //   const filteredJobs = useMemo(
// // // // // // // //     () => (activeDept === "All" ? jobs : jobs.filter((j) => j.department === activeDept)),
// // // // // // // //     [activeDept]
// // // // // // // //   );

// // // // // // // //   const waLink = (job: Job) =>
// // // // // // // //     `https://wa.me/${APPLY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
// // // // // // // //       `Hi Innovare Biopharma, I'd like to apply for the ${job.title} role (${job.location}).`
// // // // // // // //     )}`;

// // // // // // // //   const mailLink = (job: Job) =>
// // // // // // // //     `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
// // // // // // // //       `Application: ${job.title}`
// // // // // // // //     )}&body=${encodeURIComponent(
// // // // // // // //       `Hi Innovare Biopharma team,\n\nI'd like to apply for the ${job.title} role (${job.location}).\n\nName:\nPhone:\nResume link:\n\n`
// // // // // // // //     )}`;

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       <Navbar />
// // // // // // // //       <main className="careers-page-scroll min-h-screen bg-white pt-16 sm:pt-[76px] lg:pt-[84px] xl:pt-[92px]">
// // // // // // // //       {/* ── Hero ── */}
// // // // // // // //       <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
// // // // // // // //         {/* Background photo — drop your image at public/images/careers-hero.jpg.
// // // // // // // //             Swap the src below if you want a different filename/path. */}
// // // // // // // //         <img
// // // // // // // //           src="/images/careers.png"
// // // // // // // //           alt=""
// // // // // // // //           aria-hidden="true"
// // // // // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // // // // //         />

// // // // // // // //         <div className="relative max-w-4xl mx-auto text-center">
// // // // // // // //           <div
// // // // // // // //             className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-[11px] sm:text-[12px] font-semibold tracking-wide"
// // // // // // // //             style={{
// // // // // // // //               color: "#7fd4ff",
// // // // // // // //               border: "1px solid rgba(127,212,255,0.4)",
// // // // // // // //               background: "rgba(7,23,38,0.55)",
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             <span
// // // // // // // //               className="inline-block w-2 h-2 rounded-full"
// // // // // // // //               style={{ background: "#38bdf8" }}
// // // // // // // //             />
// // // // // // // //             WE&apos;RE HIRING
// // // // // // // //           </div>

// // // // // // // //           <h1
// // // // // // // //             className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] mb-5"
// // // // // // // //             style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}
// // // // // // // //           >
// // // // // // // //             Build the future of{" "}
// // // // // // // //             <span
// // // // // // // //               style={{
// // // // // // // //                 background: "linear-gradient(90deg, #3b6ef0 0%, #8fc4ff 100%)",
// // // // // // // //                 WebkitBackgroundClip: "text",
// // // // // // // //                 WebkitTextFillColor: "transparent",
// // // // // // // //                 backgroundClip: "text",
// // // // // // // //               }}
// // // // // // // //             >
// // // // // // // //               aquaculture health
// // // // // // // //             </span>{" "}
// // // // // // // //             with us
// // // // // // // //           </h1>

// // // // // // // //           <p
// // // // // // // //             className="text-[14px] sm:text-[16px] text-white max-w-2xl mx-auto leading-relaxed"
// // // // // // // //             style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55)" }}
// // // // // // // //           >
// // // // // // // //             From farm-level fieldwork to formulation science, every role at Innovare
// // // // // // // //             connects back to healthier ponds, farms, and livelihoods. Here&apos;s what
// // // // // // // //             we&apos;re hiring for right now.
// // // // // // // //           </p>

// // // // // // // //           <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-10 pt-8 border-t border-white/30">
// // // // // // // //             {[
// // // // // // // //               { label: "OPEN ROLES", value: String(jobs.length) },
// // // // // // // //               { label: "DEPARTMENTS", value: String(new Set(jobs.map((j) => j.department)).size) },
// // // // // // // //               { label: "FIELD + OFFICE", value: "Hybrid" },
// // // // // // // //             ].map((s) => (
// // // // // // // //               <div key={s.label} className="text-center">
// // // // // // // //                 <div
// // // // // // // //                   className="text-[22px] sm:text-[26px] font-bold text-white"
// // // // // // // //                   style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
// // // // // // // //                 >
// // // // // // // //                   {s.value}
// // // // // // // //                 </div>
// // // // // // // //                 <div
// // // // // // // //                   className="text-[10px] sm:text-[11px] tracking-[0.15em] text-white/90 mt-1"
// // // // // // // //                   style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
// // // // // // // //                 >
// // // // // // // //                   {s.label}
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* ── Filters + listing ── */}
// // // // // // // //       <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
// // // // // // // //         <div className="flex flex-wrap gap-2 mb-10 justify-center">
// // // // // // // //           {departments.map((d) => {
// // // // // // // //             const active = activeDept === d;
// // // // // // // //             return (
// // // // // // // //               <button
// // // // // // // //                 key={d}
// // // // // // // //                 onClick={() => setActiveDept(d)}
// // // // // // // //                 className="px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all"
// // // // // // // //                 style={{
// // // // // // // //                   background: active ? "#2A5DA8" : "#f1f5f9",
// // // // // // // //                   color: active ? "#fff" : "#475569",
// // // // // // // //                   border: active ? "1px solid #2A5DA8" : "1px solid #e2e8f0",
// // // // // // // //                 }}
// // // // // // // //               >
// // // // // // // //                 {d}
// // // // // // // //               </button>
// // // // // // // //             );
// // // // // // // //           })}
// // // // // // // //         </div>

// // // // // // // //         {filteredJobs.length === 0 ? (
// // // // // // // //           <div className="text-center py-20">
// // // // // // // //             <p className="text-[15px] text-slate-500">
// // // // // // // //               No open roles in this department right now — check back soon, or reach out
// // // // // // // //               anyway at{" "}
// // // // // // // //               <a href={`mailto:${APPLY_EMAIL}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // // // // // // //                 {APPLY_EMAIL}
// // // // // // // //               </a>
// // // // // // // //               .
// // // // // // // //             </p>
// // // // // // // //           </div>
// // // // // // // //         ) : (
// // // // // // // //           <div
// // // // // // // //             className={
// // // // // // // //               filteredJobs.length === 1
// // // // // // // //                 ? "flex justify-center"
// // // // // // // //                 : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
// // // // // // // //             }
// // // // // // // //           >
// // // // // // // //             {filteredJobs.map((job) => {
// // // // // // // //               const accent = departmentAccent[job.department];
// // // // // // // //               const isSingle = filteredJobs.length === 1;

// // // // // // // //               return (
// // // // // // // //                 <button
// // // // // // // //                   key={job.id}
// // // // // // // //                   onClick={() => setSelectedJob(job)}
// // // // // // // //                   className={
// // // // // // // //                     "text-left rounded-[26px] border transition-all duration-300 bg-white hover:-translate-y-1 overflow-hidden group" +
// // // // // // // //                     (isSingle
// // // // // // // //                       ? " w-full max-w-4xl flex flex-col sm:flex-row"
// // // // // // // //                       : " flex flex-col h-full")
// // // // // // // //                   }
// // // // // // // //                   style={{
// // // // // // // //                     borderColor: "#e8edf5",
// // // // // // // //                     boxShadow: "0 4px 18px rgba(15,41,66,0.06)",
// // // // // // // //                   }}
// // // // // // // //                   onMouseEnter={(e) => {
// // // // // // // //                     e.currentTarget.style.boxShadow = `0 18px 40px ${accent}26`;
// // // // // // // //                     e.currentTarget.style.borderColor = accent;
// // // // // // // //                   }}
// // // // // // // //                   onMouseLeave={(e) => {
// // // // // // // //                     e.currentTarget.style.boxShadow = "0 4px 18px rgba(15,41,66,0.06)";
// // // // // // // //                     e.currentTarget.style.borderColor = "#e8edf5";
// // // // // // // //                   }}
// // // // // // // //                 >
// // // // // // // //                   {job.image && (
// // // // // // // //                     <div
// // // // // // // //                       className={
// // // // // // // //                         "relative shrink-0 bg-slate-50 overflow-hidden" +
// // // // // // // //                         (isSingle ? " w-full sm:w-[42%] aspect-[3/4] sm:aspect-auto" : " w-full aspect-[3/4]")
// // // // // // // //                       }
// // // // // // // //                     >
// // // // // // // //                       <img
// // // // // // // //                         src={job.image}
// // // // // // // //                         alt={`${job.title} job opening`}
// // // // // // // //                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
// // // // // // // //                         style={{ objectPosition: "top" }}
// // // // // // // //                       />
// // // // // // // //                       {/* soft fade at the bottom edge so the crop feels intentional, not abrupt */}
// // // // // // // //                       <div
// // // // // // // //                         className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
// // // // // // // //                         style={{
// // // // // // // //                           background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)",
// // // // // // // //                         }}
// // // // // // // //                       />
// // // // // // // //                     </div>
// // // // // // // //                   )}

// // // // // // // //                   <div className={"flex flex-col flex-1 p-6" + (isSingle ? " sm:p-8" : "")}>
// // // // // // // //                     <div className="flex items-center gap-2.5 mb-4">
// // // // // // // //                       <span
// // // // // // // //                         className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
// // // // // // // //                         style={{ background: `${accent}14` }}
// // // // // // // //                       >
// // // // // // // //                         {departmentIcon[job.department]}
// // // // // // // //                       </span>
// // // // // // // //                       <span
// // // // // // // //                         className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full"
// // // // // // // //                         style={{ color: accent, background: `${accent}14` }}
// // // // // // // //                       >
// // // // // // // //                         {job.department.toUpperCase()}
// // // // // // // //                       </span>
// // // // // // // //                     </div>

// // // // // // // //                     <h3
// // // // // // // //                       className={
// // // // // // // //                         "font-bold text-slate-800 mb-2.5 leading-snug" +
// // // // // // // //                         (isSingle ? " text-[19px] sm:text-[22px]" : " text-[16px]")
// // // // // // // //                       }
// // // // // // // //                     >
// // // // // // // //                       {job.title}
// // // // // // // //                     </h3>
// // // // // // // //                     <p
// // // // // // // //                       className={
// // // // // // // //                         "text-slate-500 leading-relaxed flex-1" +
// // // // // // // //                         (isSingle ? " text-[13.5px] mb-6" : " text-[13px] mb-5")
// // // // // // // //                       }
// // // // // // // //                     >
// // // // // // // //                       {job.summary}
// // // // // // // //                     </p>

// // // // // // // //                     <div className="flex flex-wrap gap-2 mb-5">
// // // // // // // //                       <span
// // // // // // // //                         className="flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full"
// // // // // // // //                         style={{ background: "#f8fafc", color: "#475569" }}
// // // // // // // //                       >
// // // // // // // //                         <MapPin size={12} className="shrink-0" />
// // // // // // // //                         {job.location}
// // // // // // // //                       </span>
// // // // // // // //                       <span
// // // // // // // //                         className="flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full"
// // // // // // // //                         style={{ background: "#f8fafc", color: "#475569" }}
// // // // // // // //                       >
// // // // // // // //                         <Clock size={12} className="shrink-0" />
// // // // // // // //                         {job.type} · {job.experience}
// // // // // // // //                       </span>
// // // // // // // //                     </div>

// // // // // // // //                     <span
// // // // // // // //                       className="inline-flex items-center justify-center gap-1.5 text-[13px] font-bold rounded-xl py-3 px-5 mt-auto w-full sm:w-auto transition-colors"
// // // // // // // //                       style={{ background: accent, color: "#fff" }}
// // // // // // // //                     >
// // // // // // // //                       View Full Details <ArrowRight size={15} />
// // // // // // // //                     </span>
// // // // // // // //                   </div>
// // // // // // // //                 </button>
// // // // // // // //               );
// // // // // // // //             })}
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </section>

// // // // // // // //       {/* ── Detail modal ── */}
// // // // // // // //       {selectedJob && (
// // // // // // // //         <div
// // // // // // // //           className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
// // // // // // // //           style={{
// // // // // // // //             background: "rgba(10,20,35,0.6)",
// // // // // // // //             backdropFilter: "blur(3px)",
// // // // // // // //             animation: "careersModalFade 0.22s ease-out",
// // // // // // // //           }}
// // // // // // // //           onClick={() => setSelectedJob(null)}
// // // // // // // //         >
// // // // // // // //           <div
// // // // // // // //             className="careers-modal-scroll bg-white w-full max-w-2xl rounded-[28px] max-h-[88vh] overflow-y-auto shadow-2xl"
// // // // // // // //             style={{ animation: "careersModalScale 0.28s cubic-bezier(0.16, 1, 0.3, 1)" }}
// // // // // // // //             onClick={(e) => e.stopPropagation()}
// // // // // // // //           >
// // // // // // // //             {selectedJob.image && (
// // // // // // // //               <img
// // // // // // // //                 src={selectedJob.image}
// // // // // // // //                 alt={`${selectedJob.title} job opening`}
// // // // // // // //                 className="w-full max-h-[46vh] object-contain bg-slate-50"
// // // // // // // //               />
// // // // // // // //             )}

// // // // // // // //             <div
// // // // // // // //               className="sticky top-0 flex items-start justify-between gap-4 px-6 sm:px-8 py-5 sm:py-6 bg-white z-10"
// // // // // // // //               style={{ borderBottom: "1px solid #f0f0f0" }}
// // // // // // // //             >
// // // // // // // //               <div className="min-w-0">
// // // // // // // //                 <span
// // // // // // // //                   className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full inline-block mb-3"
// // // // // // // //                   style={{
// // // // // // // //                     color: departmentAccent[selectedJob.department],
// // // // // // // //                     background: `${departmentAccent[selectedJob.department]}14`,
// // // // // // // //                   }}
// // // // // // // //                 >
// // // // // // // //                   {selectedJob.department.toUpperCase()}
// // // // // // // //                 </span>
// // // // // // // //                 <h2 className="text-[19px] sm:text-[23px] font-bold text-slate-800 leading-snug">
// // // // // // // //                   {selectedJob.title}
// // // // // // // //                 </h2>
// // // // // // // //                 <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2.5 text-[12.5px] text-slate-500">
// // // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // // //                     <MapPin size={13} className="shrink-0" /> {selectedJob.location}
// // // // // // // //                   </span>
// // // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // // //                     <Briefcase size={13} className="shrink-0" /> {selectedJob.type}
// // // // // // // //                   </span>
// // // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // // //                     <Clock size={13} className="shrink-0" /> {selectedJob.experience}
// // // // // // // //                   </span>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //               <button
// // // // // // // //                 onClick={() => setSelectedJob(null)}
// // // // // // // //                 className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
// // // // // // // //                 style={{ background: "#f8fafc", color: "#64748b" }}
// // // // // // // //                 onMouseEnter={(e) => {
// // // // // // // //                   e.currentTarget.style.background = "#f1f5f9";
// // // // // // // //                   e.currentTarget.style.color = "#334155";
// // // // // // // //                 }}
// // // // // // // //                 onMouseLeave={(e) => {
// // // // // // // //                   e.currentTarget.style.background = "#f8fafc";
// // // // // // // //                   e.currentTarget.style.color = "#64748b";
// // // // // // // //                 }}
// // // // // // // //                 aria-label="Close"
// // // // // // // //               >
// // // // // // // //                 <X size={18} />
// // // // // // // //               </button>
// // // // // // // //             </div>

// // // // // // // //             <div className="px-6 sm:px-8 py-6 sm:py-7 space-y-7">
// // // // // // // //               <p className="text-[13.5px] text-slate-600 leading-relaxed">
// // // // // // // //                 {selectedJob.summary}
// // // // // // // //               </p>

// // // // // // // //               {selectedJob.qualification && (
// // // // // // // //                 <div
// // // // // // // //                   className="flex items-start gap-3 rounded-2xl px-4 py-3.5"
// // // // // // // //                   style={{ background: `${departmentAccent[selectedJob.department]}0c` }}
// // // // // // // //                 >
// // // // // // // //                   <GraduationCap
// // // // // // // //                     size={17}
// // // // // // // //                     className="mt-0.5 shrink-0"
// // // // // // // //                     style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // // //                   />
// // // // // // // //                   <p className="text-[13px] text-slate-600 leading-relaxed">
// // // // // // // //                     <span className="font-bold text-slate-800">Qualification — </span>
// // // // // // // //                     {selectedJob.qualification}
// // // // // // // //                   </p>
// // // // // // // //                 </div>
// // // // // // // //               )}

// // // // // // // //               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // // // // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
// // // // // // // //                   <span
// // // // // // // //                     className="w-1 h-4 rounded-full inline-block"
// // // // // // // //                     style={{ background: departmentAccent[selectedJob.department] }}
// // // // // // // //                   />
// // // // // // // //                   What you&apos;ll do
// // // // // // // //                 </h3>
// // // // // // // //                 <ul className="space-y-2.5">
// // // // // // // //                   {selectedJob.responsibilities.map((r, i) => (
// // // // // // // //                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
// // // // // // // //                       <CheckCircle2
// // // // // // // //                         size={15}
// // // // // // // //                         className="mt-0.5 shrink-0"
// // // // // // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // // //                       />
// // // // // // // //                       {r}
// // // // // // // //                     </li>
// // // // // // // //                   ))}
// // // // // // // //                 </ul>
// // // // // // // //               </div>

// // // // // // // //               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // // // // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
// // // // // // // //                   <span
// // // // // // // //                     className="w-1 h-4 rounded-full inline-block"
// // // // // // // //                     style={{ background: departmentAccent[selectedJob.department] }}
// // // // // // // //                   />
// // // // // // // //                   What we&apos;re looking for
// // // // // // // //                 </h3>
// // // // // // // //                 <ul className="space-y-2.5">
// // // // // // // //                   {selectedJob.requirements.map((r, i) => (
// // // // // // // //                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
// // // // // // // //                       <CheckCircle2
// // // // // // // //                         size={15}
// // // // // // // //                         className="mt-0.5 shrink-0"
// // // // // // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // // //                       />
// // // // // // // //                       {r}
// // // // // // // //                     </li>
// // // // // // // //                   ))}
// // // // // // // //                 </ul>
// // // // // // // //               </div>

// // // // // // // //               <div className="pt-2 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // // // // // //                 <div className="flex flex-col sm:flex-row gap-3 mt-6">
// // // // // // // //                   <a
// // // // // // // //                     href={waLink(selectedJob)}
// // // // // // // //                     target="_blank"
// // // // // // // //                     rel="noopener noreferrer"
// // // // // // // //                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
// // // // // // // //                     style={{ background: "#25D366", boxShadow: "0 8px 20px rgba(37,211,102,0.28)" }}
// // // // // // // //                   >
// // // // // // // //                     <MessageCircle size={16} /> Apply via WhatsApp
// // // // // // // //                   </a>
// // // // // // // //                   <a
// // // // // // // //                     href={mailLink(selectedJob)}
// // // // // // // //                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold no-underline transition-transform hover:-translate-y-0.5"
// // // // // // // //                     style={{ border: "1.5px solid #2A5DA8", color: "#2A5DA8" }}
// // // // // // // //                   >
// // // // // // // //                     <Mail size={16} /> Apply via Email
// // // // // // // //                   </a>
// // // // // // // //                 </div>

// // // // // // // //                 <p className="flex items-center justify-center gap-1.5 text-[12px] text-slate-400 mt-5">
// // // // // // // //                   <Phone size={12} />
// // // // // // // //                   Or call us directly at{" "}
// // // // // // // //                   <a href={`tel:+${APPLY_WHATSAPP_NUMBER}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // // // // // // //                     {APPLY_PHONE_DISPLAY}
// // // // // // // //                   </a>
// // // // // // // //                 </p>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //       </main>
// // // // // // // //       <Footer />

// // // // // // // //       <style>{`
// // // // // // // //         @keyframes careersModalFade {
// // // // // // // //           from { opacity: 0; }
// // // // // // // //           to { opacity: 1; }
// // // // // // // //         }
// // // // // // // //         @keyframes careersModalScale {
// // // // // // // //           from { opacity: 0; transform: scale(0.94) translateY(8px); }
// // // // // // // //           to { opacity: 1; transform: scale(1) translateY(0); }
// // // // // // // //         }

// // // // // // // //         /* Neutral scrollbar override — this page previously inherited a green
// // // // // // // //            scrollbar thumb from a global style; force it back to a plain gray. */
// // // // // // // //         .careers-page-scroll,
// // // // // // // //         .careers-modal-scroll {
// // // // // // // //           scrollbar-color: #cbd5e1 transparent;
// // // // // // // //         }
// // // // // // // //         .careers-page-scroll::-webkit-scrollbar,
// // // // // // // //         .careers-modal-scroll::-webkit-scrollbar {
// // // // // // // //           width: 8px;
// // // // // // // //         }
// // // // // // // //         .careers-page-scroll::-webkit-scrollbar-track,
// // // // // // // //         .careers-modal-scroll::-webkit-scrollbar-track {
// // // // // // // //           background: transparent;
// // // // // // // //         }
// // // // // // // //         .careers-page-scroll::-webkit-scrollbar-thumb,
// // // // // // // //         .careers-modal-scroll::-webkit-scrollbar-thumb {
// // // // // // // //           background-color: #cbd5e1;
// // // // // // // //           border-radius: 8px;
// // // // // // // //         }
// // // // // // // //         .careers-page-scroll::-webkit-scrollbar-thumb:hover,
// // // // // // // //         .careers-modal-scroll::-webkit-scrollbar-thumb:hover {
// // // // // // // //           background-color: #94a3b8;
// // // // // // // //         }
// // // // // // // //       `}</style>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // "use client";
// // // // // // // import { useState, useMemo } from "react";
// // // // // // // import { X, MapPin, Clock, Briefcase, ArrowRight, CheckCircle2, GraduationCap, MessageCircle, Mail, Phone } from "lucide-react";
// // // // // // // import Navbar from "@/components/Navbar";
// // // // // // // import Footer from "@/components/Footer";

// // // // // // // /* ────────────────────────────────────────────────────────────
// // // // // // //    JOB DATA
// // // // // // //    Replace / extend this array with real openings. Each entry
// // // // // // //    drives both the listing card and the detail panel — nothing
// // // // // // //    else needs to change when you add or remove a role.
// // // // // // //    ──────────────────────────────────────────────────────────── */
// // // // // // // type Job = {
// // // // // // //   id: string;
// // // // // // //   title: string;
// // // // // // //   department: "Aquaculture" | "Poultry" | "Cattle" | "Corporate";
// // // // // // //   location: string;
// // // // // // //   type: "Full-time" | "Part-time" | "Internship";
// // // // // // //   experience: string;
// // // // // // //   qualification?: string;
// // // // // // //   summary: string;
// // // // // // //   responsibilities: string[];
// // // // // // //   requirements: string[];
// // // // // // //   /** Flyer / poster image for this role — shown above the details in the card and modal. */
// // // // // // //   image?: string;
// // // // // // // };

// // // // // // // const departmentAccent: Record<Job["department"], string> = {
// // // // // // //   Aquaculture: "#0ea5e9",
// // // // // // //   Poultry: "#f59e0b",
// // // // // // //   Cattle: "#22c55e",
// // // // // // //   Corporate: "#2A5DA8",
// // // // // // // };

// // // // // // // const departmentIcon: Record<Job["department"], string> = {
// // // // // // //   Aquaculture: "🦐",
// // // // // // //   Poultry: "🐔",
// // // // // // //   Cattle: "🐄",
// // // // // // //   Corporate: "🏢",
// // // // // // // };

// // // // // // // const jobs: Job[] = [
// // // // // // //   {
// // // // // // //     id: "area-sales-executive-aqua",
// // // // // // //     title: "Area Sales Executive",
// // // // // // //     department: "Aquaculture",
// // // // // // //     location: "Bhimavaram, Kaikaluru, Amalapuram, Kakinada",
// // // // // // //     type: "Full-time",
// // // // // // //     experience: "2-3 years (aqua medicine marketing experience preferred)",
// // // // // // //     qualification: "B.Sc / M.Sc in Fisheries Science or a related field",
// // // // // // //     summary:
// // // // // // //       "Drive sales of Innovare's aquaculture health products across the Bhimavaram–Kakinada belt, working directly with farmers and distributors to grow a loyal territory.",
// // // // // // //     image: "/images/job.jpeg",
// // // // // // //     responsibilities: [
// // // // // // //       "Promote and sell aquaculture health products across the assigned territory",
// // // // // // //       "Build and maintain relationships with farmers and distributors",
// // // // // // //       "Meet sales targets and report field activity regularly",
// // // // // // //       "Provide on-ground product guidance and support to farmers",
// // // // // // //     ],
// // // // // // //     requirements: [
// // // // // // //       "B.Sc / M.Sc in Fisheries Science or a related field",
// // // // // // //       "2-3 years of experience, aqua medicine marketing preferred",
// // // // // // //       "Willingness to travel across Bhimavaram, Kaikaluru, Amalapuram, and Kakinada",
// // // // // // //       "Strong communication skills in Telugu and English",
// // // // // // //     ],
// // // // // // //   },
// // // // // // // ];

// // // // // // // const departments = ["All", "Aquaculture", "Poultry", "Cattle", "Corporate"] as const;

// // // // // // // /* Contact details from the official job flyer */
// // // // // // // const APPLY_WHATSAPP_NUMBER = "917799872555"; // country code + number, no symbols
// // // // // // // const APPLY_EMAIL = "info@innovarebiopharma.com";
// // // // // // // const APPLY_PHONE_DISPLAY = "77998 72555";

// // // // // // // export default function CareersPage() {
// // // // // // //   const [activeDept, setActiveDept] = useState<(typeof departments)[number]>("All");
// // // // // // //   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

// // // // // // //   const filteredJobs = useMemo(
// // // // // // //     () => (activeDept === "All" ? jobs : jobs.filter((j) => j.department === activeDept)),
// // // // // // //     [activeDept]
// // // // // // //   );

// // // // // // //   const waLink = (job: Job) =>
// // // // // // //     `https://wa.me/${APPLY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
// // // // // // //       `Hi Innovare Biopharma, I'd like to apply for the ${job.title} role (${job.location}).`
// // // // // // //     )}`;

// // // // // // //   const mailLink = (job: Job) =>
// // // // // // //     `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
// // // // // // //       `Application: ${job.title}`
// // // // // // //     )}&body=${encodeURIComponent(
// // // // // // //       `Hi Innovare Biopharma team,\n\nI'd like to apply for the ${job.title} role (${job.location}).\n\nName:\nPhone:\nResume link:\n\n`
// // // // // // //     )}`;

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <Navbar />
// // // // // // //       <main className="careers-page-scroll min-h-screen bg-white pt-16 sm:pt-[76px] lg:pt-[84px] xl:pt-[92px]">
// // // // // // //       {/* ── Hero ── */}
// // // // // // //       <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
// // // // // // //         {/* Background photo — drop your image at public/images/careers-hero.jpg.
// // // // // // //             Swap the src below if you want a different filename/path. */}
// // // // // // //         <img
// // // // // // //           src="/images/careers.png"
// // // // // // //           alt=""
// // // // // // //           aria-hidden="true"
// // // // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // // // //         />

// // // // // // //         <div className="relative max-w-4xl mx-auto text-center">
// // // // // // //           <div
// // // // // // //             className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-[11px] sm:text-[12px] font-semibold tracking-wide"
// // // // // // //             style={{
// // // // // // //               color: "#7fd4ff",
// // // // // // //               border: "1px solid rgba(127,212,255,0.4)",
// // // // // // //               background: "rgba(7,23,38,0.55)",
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <span
// // // // // // //               className="inline-block w-2 h-2 rounded-full"
// // // // // // //               style={{ background: "#38bdf8" }}
// // // // // // //             />
// // // // // // //             WE&apos;RE HIRING
// // // // // // //           </div>

// // // // // // //           <h1
// // // // // // //             className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] mb-5"
// // // // // // //             style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}
// // // // // // //           >
// // // // // // //             Build the future of{" "}
// // // // // // //             <span
// // // // // // //               style={{
// // // // // // //                 background: "linear-gradient(90deg, #3b6ef0 0%, #8fc4ff 100%)",
// // // // // // //                 WebkitBackgroundClip: "text",
// // // // // // //                 WebkitTextFillColor: "transparent",
// // // // // // //                 backgroundClip: "text",
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               aquaculture health
// // // // // // //             </span>{" "}
// // // // // // //             with us
// // // // // // //           </h1>

// // // // // // //           <p
// // // // // // //             className="text-[14px] sm:text-[16px] text-white max-w-2xl mx-auto leading-relaxed"
// // // // // // //             style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55)" }}
// // // // // // //           >
// // // // // // //             From farm-level fieldwork to formulation science, every role at Innovare
// // // // // // //             connects back to healthier ponds, farms, and livelihoods. Here&apos;s what
// // // // // // //             we&apos;re hiring for right now.
// // // // // // //           </p>

// // // // // // //           <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-10 pt-8 border-t border-white/30">
// // // // // // //             {[
// // // // // // //               { label: "OPEN ROLES", value: String(jobs.length) },
// // // // // // //               { label: "DEPARTMENTS", value: String(new Set(jobs.map((j) => j.department)).size) },
// // // // // // //               { label: "FIELD + OFFICE", value: "Hybrid" },
// // // // // // //             ].map((s) => (
// // // // // // //               <div key={s.label} className="text-center">
// // // // // // //                 <div
// // // // // // //                   className="text-[22px] sm:text-[26px] font-bold text-white"
// // // // // // //                   style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
// // // // // // //                 >
// // // // // // //                   {s.value}
// // // // // // //                 </div>
// // // // // // //                 <div
// // // // // // //                   className="text-[10px] sm:text-[11px] tracking-[0.15em] text-white/90 mt-1"
// // // // // // //                   style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
// // // // // // //                 >
// // // // // // //                   {s.label}
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* ── Filters + listing ── */}
// // // // // // //       <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
// // // // // // //         <div className="flex flex-wrap gap-2 mb-10 justify-center">
// // // // // // //           {departments.map((d) => {
// // // // // // //             const active = activeDept === d;
// // // // // // //             return (
// // // // // // //               <button
// // // // // // //                 key={d}
// // // // // // //                 onClick={() => setActiveDept(d)}
// // // // // // //                 className="px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all"
// // // // // // //                 style={{
// // // // // // //                   background: active ? "#2A5DA8" : "#f1f5f9",
// // // // // // //                   color: active ? "#fff" : "#475569",
// // // // // // //                   border: active ? "1px solid #2A5DA8" : "1px solid #e2e8f0",
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 {d}
// // // // // // //               </button>
// // // // // // //             );
// // // // // // //           })}
// // // // // // //         </div>

// // // // // // //         {filteredJobs.length === 0 ? (
// // // // // // //           <div className="text-center py-20">
// // // // // // //             <p className="text-[15px] text-slate-500">
// // // // // // //               No open roles in this department right now — check back soon, or reach out
// // // // // // //               anyway at{" "}
// // // // // // //               <a href={`mailto:${APPLY_EMAIL}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // // // // // //                 {APPLY_EMAIL}
// // // // // // //               </a>
// // // // // // //               .
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //         ) : (
// // // // // // //           <div
// // // // // // //             className={
// // // // // // //               filteredJobs.length === 1
// // // // // // //                 ? "flex justify-center"
// // // // // // //                 : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
// // // // // // //             }
// // // // // // //           >
// // // // // // //             {filteredJobs.map((job) => {
// // // // // // //               const accent = departmentAccent[job.department];
// // // // // // //               const isSingle = filteredJobs.length === 1;

// // // // // // //               return (
// // // // // // //                 <button
// // // // // // //                   key={job.id}
// // // // // // //                   onClick={() => setSelectedJob(job)}
// // // // // // //                   className={
// // // // // // //                     "text-left rounded-[26px] border transition-all duration-300 bg-white hover:-translate-y-1 overflow-hidden group" +
// // // // // // //                     (isSingle
// // // // // // //                       ? " w-full max-w-4xl grid grid-cols-1 sm:grid-cols-[42%_1fr] items-stretch"
// // // // // // //                       : " flex flex-col h-full")
// // // // // // //                   }
// // // // // // //                   style={{
// // // // // // //                     borderColor: "#e8edf5",
// // // // // // //                     boxShadow: "0 4px 18px rgba(15,41,66,0.06)",
// // // // // // //                   }}
// // // // // // //                   onMouseEnter={(e) => {
// // // // // // //                     e.currentTarget.style.boxShadow = `0 18px 40px ${accent}26`;
// // // // // // //                     e.currentTarget.style.borderColor = accent;
// // // // // // //                   }}
// // // // // // //                   onMouseLeave={(e) => {
// // // // // // //                     e.currentTarget.style.boxShadow = "0 4px 18px rgba(15,41,66,0.06)";
// // // // // // //                     e.currentTarget.style.borderColor = "#e8edf5";
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   {job.image && (
// // // // // // //                     <div
// // // // // // //                       className={
// // // // // // //                         "relative shrink-0 bg-slate-50 overflow-hidden" +
// // // // // // //                         (isSingle
// // // // // // //                           ? " w-full h-full aspect-[3/4] sm:aspect-auto"
// // // // // // //                           : " w-full aspect-[3/4]")
// // // // // // //                       }
// // // // // // //                     >
// // // // // // //                       <img
// // // // // // //                         src={job.image}
// // // // // // //                         alt={`${job.title} job opening`}
// // // // // // //                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
// // // // // // //                         style={{ objectPosition: "top" }}
// // // // // // //                       />
// // // // // // //                       {/* soft fade at the bottom edge — only needed on mobile where the
// // // // // // //                           image is a fixed-aspect crop above the text, not full-height */}
// // // // // // //                       <div
// // // // // // //                         className={
// // // // // // //                           "absolute inset-x-0 bottom-0 h-16 pointer-events-none" +
// // // // // // //                           (isSingle ? " sm:hidden" : "")
// // // // // // //                         }
// // // // // // //                         style={{
// // // // // // //                           background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)",
// // // // // // //                         }}
// // // // // // //                       />
// // // // // // //                     </div>
// // // // // // //                   )}

// // // // // // //                   <div className={"flex flex-col flex-1 p-6" + (isSingle ? " sm:p-8" : "")}>
// // // // // // //                     <div className="flex items-center gap-2.5 mb-4">
// // // // // // //                       <span
// // // // // // //                         className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
// // // // // // //                         style={{ background: `${accent}14` }}
// // // // // // //                       >
// // // // // // //                         {departmentIcon[job.department]}
// // // // // // //                       </span>
// // // // // // //                       <span
// // // // // // //                         className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full"
// // // // // // //                         style={{ color: accent, background: `${accent}14` }}
// // // // // // //                       >
// // // // // // //                         {job.department.toUpperCase()}
// // // // // // //                       </span>
// // // // // // //                     </div>

// // // // // // //                     <h3
// // // // // // //                       className={
// // // // // // //                         "font-bold text-slate-800 mb-2.5 leading-snug" +
// // // // // // //                         (isSingle ? " text-[19px] sm:text-[22px]" : " text-[16px]")
// // // // // // //                       }
// // // // // // //                     >
// // // // // // //                       {job.title}
// // // // // // //                     </h3>
// // // // // // //                     <p
// // // // // // //                       className={
// // // // // // //                         "text-slate-500 leading-relaxed flex-1" +
// // // // // // //                         (isSingle ? " text-[13.5px] mb-6" : " text-[13px] mb-5")
// // // // // // //                       }
// // // // // // //                     >
// // // // // // //                       {job.summary}
// // // // // // //                     </p>

// // // // // // //                     <div className="flex flex-wrap gap-2 mb-5">
// // // // // // //                       <span
// // // // // // //                         className="flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full"
// // // // // // //                         style={{ background: "#f8fafc", color: "#475569" }}
// // // // // // //                       >
// // // // // // //                         <MapPin size={12} className="shrink-0" />
// // // // // // //                         {job.location}
// // // // // // //                       </span>
// // // // // // //                       <span
// // // // // // //                         className="flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full"
// // // // // // //                         style={{ background: "#f8fafc", color: "#475569" }}
// // // // // // //                       >
// // // // // // //                         <Clock size={12} className="shrink-0" />
// // // // // // //                         {job.type} · {job.experience}
// // // // // // //                       </span>
// // // // // // //                     </div>

// // // // // // //                     <span
// // // // // // //                       className="inline-flex items-center justify-center gap-1.5 text-[13px] font-bold rounded-xl py-3 px-5 mt-auto w-full sm:w-auto transition-colors"
// // // // // // //                       style={{ background: accent, color: "#fff" }}
// // // // // // //                     >
// // // // // // //                       View Full Details <ArrowRight size={15} />
// // // // // // //                     </span>
// // // // // // //                   </div>
// // // // // // //                 </button>
// // // // // // //               );
// // // // // // //             })}
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </section>

// // // // // // //       {/* ── Detail modal ── */}
// // // // // // //       {selectedJob && (
// // // // // // //         <div
// // // // // // //           className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
// // // // // // //           style={{
// // // // // // //             background: "rgba(10,20,35,0.6)",
// // // // // // //             backdropFilter: "blur(3px)",
// // // // // // //             animation: "careersModalFade 0.22s ease-out",
// // // // // // //           }}
// // // // // // //           onClick={() => setSelectedJob(null)}
// // // // // // //         >
// // // // // // //           <div
// // // // // // //             className="careers-modal-scroll bg-white w-full max-w-2xl rounded-[28px] max-h-[88vh] overflow-y-auto shadow-2xl"
// // // // // // //             style={{ animation: "careersModalScale 0.28s cubic-bezier(0.16, 1, 0.3, 1)" }}
// // // // // // //             onClick={(e) => e.stopPropagation()}
// // // // // // //           >
// // // // // // //             {selectedJob.image && (
// // // // // // //               <img
// // // // // // //                 src={selectedJob.image}
// // // // // // //                 alt={`${selectedJob.title} job opening`}
// // // // // // //                 className="w-full max-h-[46vh] object-contain bg-slate-50"
// // // // // // //               />
// // // // // // //             )}

// // // // // // //             <div
// // // // // // //               className="sticky top-0 flex items-start justify-between gap-4 px-6 sm:px-8 py-5 sm:py-6 bg-white z-10"
// // // // // // //               style={{ borderBottom: "1px solid #f0f0f0" }}
// // // // // // //             >
// // // // // // //               <div className="min-w-0">
// // // // // // //                 <span
// // // // // // //                   className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full inline-block mb-3"
// // // // // // //                   style={{
// // // // // // //                     color: departmentAccent[selectedJob.department],
// // // // // // //                     background: `${departmentAccent[selectedJob.department]}14`,
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   {selectedJob.department.toUpperCase()}
// // // // // // //                 </span>
// // // // // // //                 <h2 className="text-[19px] sm:text-[23px] font-bold text-slate-800 leading-snug">
// // // // // // //                   {selectedJob.title}
// // // // // // //                 </h2>
// // // // // // //                 <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2.5 text-[12.5px] text-slate-500">
// // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // //                     <MapPin size={13} className="shrink-0" /> {selectedJob.location}
// // // // // // //                   </span>
// // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // //                     <Briefcase size={13} className="shrink-0" /> {selectedJob.type}
// // // // // // //                   </span>
// // // // // // //                   <span className="flex items-center gap-1.5">
// // // // // // //                     <Clock size={13} className="shrink-0" /> {selectedJob.experience}
// // // // // // //                   </span>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //               <button
// // // // // // //                 onClick={() => setSelectedJob(null)}
// // // // // // //                 className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
// // // // // // //                 style={{ background: "#f8fafc", color: "#64748b" }}
// // // // // // //                 onMouseEnter={(e) => {
// // // // // // //                   e.currentTarget.style.background = "#f1f5f9";
// // // // // // //                   e.currentTarget.style.color = "#334155";
// // // // // // //                 }}
// // // // // // //                 onMouseLeave={(e) => {
// // // // // // //                   e.currentTarget.style.background = "#f8fafc";
// // // // // // //                   e.currentTarget.style.color = "#64748b";
// // // // // // //                 }}
// // // // // // //                 aria-label="Close"
// // // // // // //               >
// // // // // // //                 <X size={18} />
// // // // // // //               </button>
// // // // // // //             </div>

// // // // // // //             <div className="px-6 sm:px-8 py-6 sm:py-7 space-y-7">
// // // // // // //               <p className="text-[13.5px] text-slate-600 leading-relaxed">
// // // // // // //                 {selectedJob.summary}
// // // // // // //               </p>

// // // // // // //               {selectedJob.qualification && (
// // // // // // //                 <div
// // // // // // //                   className="flex items-start gap-3 rounded-2xl px-4 py-3.5"
// // // // // // //                   style={{ background: `${departmentAccent[selectedJob.department]}0c` }}
// // // // // // //                 >
// // // // // // //                   <GraduationCap
// // // // // // //                     size={17}
// // // // // // //                     className="mt-0.5 shrink-0"
// // // // // // //                     style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // //                   />
// // // // // // //                   <p className="text-[13px] text-slate-600 leading-relaxed">
// // // // // // //                     <span className="font-bold text-slate-800">Qualification — </span>
// // // // // // //                     {selectedJob.qualification}
// // // // // // //                   </p>
// // // // // // //                 </div>
// // // // // // //               )}

// // // // // // //               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // // // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
// // // // // // //                   <span
// // // // // // //                     className="w-1 h-4 rounded-full inline-block"
// // // // // // //                     style={{ background: departmentAccent[selectedJob.department] }}
// // // // // // //                   />
// // // // // // //                   What you&apos;ll do
// // // // // // //                 </h3>
// // // // // // //                 <ul className="space-y-2.5">
// // // // // // //                   {selectedJob.responsibilities.map((r, i) => (
// // // // // // //                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
// // // // // // //                       <CheckCircle2
// // // // // // //                         size={15}
// // // // // // //                         className="mt-0.5 shrink-0"
// // // // // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // //                       />
// // // // // // //                       {r}
// // // // // // //                     </li>
// // // // // // //                   ))}
// // // // // // //                 </ul>
// // // // // // //               </div>

// // // // // // //               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // // // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
// // // // // // //                   <span
// // // // // // //                     className="w-1 h-4 rounded-full inline-block"
// // // // // // //                     style={{ background: departmentAccent[selectedJob.department] }}
// // // // // // //                   />
// // // // // // //                   What we&apos;re looking for
// // // // // // //                 </h3>
// // // // // // //                 <ul className="space-y-2.5">
// // // // // // //                   {selectedJob.requirements.map((r, i) => (
// // // // // // //                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
// // // // // // //                       <CheckCircle2
// // // // // // //                         size={15}
// // // // // // //                         className="mt-0.5 shrink-0"
// // // // // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // // // // //                       />
// // // // // // //                       {r}
// // // // // // //                     </li>
// // // // // // //                   ))}
// // // // // // //                 </ul>
// // // // // // //               </div>

// // // // // // //               <div className="pt-2 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // // // // //                 <div className="flex flex-col sm:flex-row gap-3 mt-6">
// // // // // // //                   <a
// // // // // // //                     href={waLink(selectedJob)}
// // // // // // //                     target="_blank"
// // // // // // //                     rel="noopener noreferrer"
// // // // // // //                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
// // // // // // //                     style={{ background: "#25D366", boxShadow: "0 8px 20px rgba(37,211,102,0.28)" }}
// // // // // // //                   >
// // // // // // //                     <MessageCircle size={16} /> Apply via WhatsApp
// // // // // // //                   </a>
// // // // // // //                   <a
// // // // // // //                     href={mailLink(selectedJob)}
// // // // // // //                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold no-underline transition-transform hover:-translate-y-0.5"
// // // // // // //                     style={{ border: "1.5px solid #2A5DA8", color: "#2A5DA8" }}
// // // // // // //                   >
// // // // // // //                     <Mail size={16} /> Apply via Email
// // // // // // //                   </a>
// // // // // // //                 </div>

// // // // // // //                 <p className="flex items-center justify-center gap-1.5 text-[12px] text-slate-400 mt-5">
// // // // // // //                   <Phone size={12} />
// // // // // // //                   Or call us directly at{" "}
// // // // // // //                   <a href={`tel:+${APPLY_WHATSAPP_NUMBER}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // // // // // //                     {APPLY_PHONE_DISPLAY}
// // // // // // //                   </a>
// // // // // // //                 </p>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //       </main>
// // // // // // //       <Footer />

// // // // // // //       <style>{`
// // // // // // //         @keyframes careersModalFade {
// // // // // // //           from { opacity: 0; }
// // // // // // //           to { opacity: 1; }
// // // // // // //         }
// // // // // // //         @keyframes careersModalScale {
// // // // // // //           from { opacity: 0; transform: scale(0.94) translateY(8px); }
// // // // // // //           to { opacity: 1; transform: scale(1) translateY(0); }
// // // // // // //         }

// // // // // // //         /* Neutral scrollbar override — this page previously inherited a green
// // // // // // //            scrollbar thumb from a global style; force it back to a plain gray. */
// // // // // // //         .careers-page-scroll,
// // // // // // //         .careers-modal-scroll {
// // // // // // //           scrollbar-color: #cbd5e1 transparent;
// // // // // // //         }
// // // // // // //         .careers-page-scroll::-webkit-scrollbar,
// // // // // // //         .careers-modal-scroll::-webkit-scrollbar {
// // // // // // //           width: 8px;
// // // // // // //         }
// // // // // // //         .careers-page-scroll::-webkit-scrollbar-track,
// // // // // // //         .careers-modal-scroll::-webkit-scrollbar-track {
// // // // // // //           background: transparent;
// // // // // // //         }
// // // // // // //         .careers-page-scroll::-webkit-scrollbar-thumb,
// // // // // // //         .careers-modal-scroll::-webkit-scrollbar-thumb {
// // // // // // //           background-color: #cbd5e1;
// // // // // // //           border-radius: 8px;
// // // // // // //         }
// // // // // // //         .careers-page-scroll::-webkit-scrollbar-thumb:hover,
// // // // // // //         .careers-modal-scroll::-webkit-scrollbar-thumb:hover {
// // // // // // //           background-color: #94a3b8;
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }
// // // // // // "use client";
// // // // // // import { useState, useMemo } from "react";
// // // // // // import { X, MapPin, Clock, Briefcase, ArrowRight, CheckCircle2, GraduationCap, MessageCircle, Mail, Phone } from "lucide-react";
// // // // // // import Navbar from "@/components/Navbar";
// // // // // // import Footer from "@/components/Footer";

// // // // // // /* ────────────────────────────────────────────────────────────
// // // // // //    JOB DATA
// // // // // //    Replace / extend this array with real openings. Each entry
// // // // // //    drives both the listing card and the detail panel — nothing
// // // // // //    else needs to change when you add or remove a role.
// // // // // //    ──────────────────────────────────────────────────────────── */
// // // // // // type Job = {
// // // // // //   id: string;
// // // // // //   title: string;
// // // // // //   department: "Aquaculture" | "Poultry" | "Cattle" | "Corporate";
// // // // // //   location: string;
// // // // // //   type: "Full-time" | "Part-time" | "Internship";
// // // // // //   experience: string;
// // // // // //   qualification?: string;
// // // // // //   summary: string;
// // // // // //   responsibilities: string[];
// // // // // //   requirements: string[];
// // // // // //   /** Flyer / poster image for this role — shown on the listing card. */
// // // // // //   image?: string;
// // // // // //   /** Optional image shown instead of `image` inside the detail popup/modal. */
// // // // // //   popupImage?: string;
// // // // // // };

// // // // // // const departmentAccent: Record<Job["department"], string> = {
// // // // // //   Aquaculture: "#0ea5e9",
// // // // // //   Poultry: "#f59e0b",
// // // // // //   Cattle: "#22c55e",
// // // // // //   Corporate: "#2A5DA8",
// // // // // // };

// // // // // // const departmentIcon: Record<Job["department"], string> = {
// // // // // //   Aquaculture: "🦐",
// // // // // //   Poultry: "🐔",
// // // // // //   Cattle: "🐄",
// // // // // //   Corporate: "🏢",
// // // // // // };

// // // // // // const jobs: Job[] = [
// // // // // //   {
// // // // // //     id: "area-sales-executive-aqua",
// // // // // //     title: "Area Sales Executive",
// // // // // //     department: "Aquaculture",
// // // // // //     location: "Bhimavaram, Kaikaluru, Amalapuram, Kakinada",
// // // // // //     type: "Full-time",
// // // // // //     experience: "2-3 years (aqua medicine marketing experience preferred)",
// // // // // //     qualification: "B.Sc / M.Sc in Fisheries Science or a related field",
// // // // // //     summary:
// // // // // //       "Drive sales of Innovare's aquaculture health products across the Bhimavaram–Kakinada belt, working directly with farmers and distributors to grow a loyal territory.",
// // // // // //     image: "/images/job.jpeg",
// // // // // //     popupImage: "/images/pop.png",
// // // // // //     responsibilities: [
// // // // // //       "Promote and sell aquaculture health products across the assigned territory",
// // // // // //       "Build and maintain relationships with farmers and distributors",
// // // // // //       "Meet sales targets and report field activity regularly",
// // // // // //       "Provide on-ground product guidance and support to farmers",
// // // // // //     ],
// // // // // //     requirements: [
// // // // // //       "B.Sc / M.Sc in Fisheries Science or a related field",
// // // // // //       "2-3 years of experience, aqua medicine marketing preferred",
// // // // // //       "Willingness to travel across Bhimavaram, Kaikaluru, Amalapuram, and Kakinada",
// // // // // //       "Strong communication skills in Telugu and English",
// // // // // //     ],
// // // // // //   },
// // // // // // ];

// // // // // // const departments = ["All", "Aquaculture", "Poultry", "Cattle", "Corporate"] as const;

// // // // // // /* Contact details from the official job flyer */
// // // // // // const APPLY_WHATSAPP_NUMBER = "917799872555"; // country code + number, no symbols
// // // // // // const APPLY_EMAIL = "info@innovarebiopharma.com";
// // // // // // const APPLY_PHONE_DISPLAY = "77998 72555";

// // // // // // export default function CareersPage() {
// // // // // //   const [activeDept, setActiveDept] = useState<(typeof departments)[number]>("All");
// // // // // //   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

// // // // // //   const filteredJobs = useMemo(
// // // // // //     () => (activeDept === "All" ? jobs : jobs.filter((j) => j.department === activeDept)),
// // // // // //     [activeDept]
// // // // // //   );

// // // // // //   const waLink = (job: Job) =>
// // // // // //     `https://wa.me/${APPLY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
// // // // // //       `Hi Innovare Biopharma, I'd like to apply for the ${job.title} role (${job.location}).`
// // // // // //     )}`;

// // // // // //   const mailLink = (job: Job) =>
// // // // // //     `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
// // // // // //       `Application: ${job.title}`
// // // // // //     )}&body=${encodeURIComponent(
// // // // // //       `Hi Innovare Biopharma team,\n\nI'd like to apply for the ${job.title} role (${job.location}).\n\nName:\nPhone:\nResume link:\n\n`
// // // // // //     )}`;

// // // // // //   return (
// // // // // //     <>
// // // // // //       <Navbar />
// // // // // //       <main className="careers-page-scroll min-h-screen bg-white pt-16 sm:pt-[76px] lg:pt-[84px] xl:pt-[92px]">
// // // // // //       {/* ── Hero ── */}
// // // // // //       <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
// // // // // //         {/* Background photo — drop your image at public/images/careers-hero.jpg.
// // // // // //             Swap the src below if you want a different filename/path. */}
// // // // // //         <img
// // // // // //           src="/images/careers.png"
// // // // // //           alt=""
// // // // // //           aria-hidden="true"
// // // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // // //         />

// // // // // //         <div className="relative max-w-4xl mx-auto text-center">
// // // // // //           <div
// // // // // //             className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-[11px] sm:text-[12px] font-semibold tracking-wide"
// // // // // //             style={{
// // // // // //               color: "#7fd4ff",
// // // // // //               border: "1px solid rgba(127,212,255,0.4)",
// // // // // //               background: "rgba(7,23,38,0.55)",
// // // // // //             }}
// // // // // //           >
// // // // // //             <span
// // // // // //               className="inline-block w-2 h-2 rounded-full"
// // // // // //               style={{ background: "#38bdf8" }}
// // // // // //             />
// // // // // //             WE&apos;RE HIRING
// // // // // //           </div>

// // // // // //           <h1
// // // // // //             className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] mb-5"
// // // // // //             style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}
// // // // // //           >
// // // // // //             Build the future of{" "}
// // // // // //             <span
// // // // // //               style={{
// // // // // //                 background: "linear-gradient(90deg, #3b6ef0 0%, #8fc4ff 100%)",
// // // // // //                 WebkitBackgroundClip: "text",
// // // // // //                 WebkitTextFillColor: "transparent",
// // // // // //                 backgroundClip: "text",
// // // // // //               }}
// // // // // //             >
// // // // // //               aquaculture health
// // // // // //             </span>{" "}
// // // // // //             with us
// // // // // //           </h1>

// // // // // //           <p
// // // // // //             className="text-[14px] sm:text-[16px] text-white max-w-2xl mx-auto leading-relaxed"
// // // // // //             style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55)" }}
// // // // // //           >
// // // // // //             From farm-level fieldwork to formulation science, every role at Innovare
// // // // // //             connects back to healthier ponds, farms, and livelihoods. Here&apos;s what
// // // // // //             we&apos;re hiring for right now.
// // // // // //           </p>

// // // // // //           <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-10 pt-8 border-t border-white/30">
// // // // // //             {[
// // // // // //               { label: "OPEN ROLES", value: String(jobs.length) },
// // // // // //               { label: "DEPARTMENTS", value: String(new Set(jobs.map((j) => j.department)).size) },
// // // // // //               { label: "FIELD + OFFICE", value: "Hybrid" },
// // // // // //             ].map((s) => (
// // // // // //               <div key={s.label} className="text-center">
// // // // // //                 <div
// // // // // //                   className="text-[22px] sm:text-[26px] font-bold text-white"
// // // // // //                   style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
// // // // // //                 >
// // // // // //                   {s.value}
// // // // // //                 </div>
// // // // // //                 <div
// // // // // //                   className="text-[10px] sm:text-[11px] tracking-[0.15em] text-white/90 mt-1"
// // // // // //                   style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
// // // // // //                 >
// // // // // //                   {s.label}
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ── Filters + listing ── */}
// // // // // //       <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
// // // // // //         <div className="flex flex-wrap gap-2 mb-10 justify-center">
// // // // // //           {departments.map((d) => {
// // // // // //             const active = activeDept === d;
// // // // // //             return (
// // // // // //               <button
// // // // // //                 key={d}
// // // // // //                 onClick={() => setActiveDept(d)}
// // // // // //                 className="px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all"
// // // // // //                 style={{
// // // // // //                   background: active ? "#2A5DA8" : "#f1f5f9",
// // // // // //                   color: active ? "#fff" : "#475569",
// // // // // //                   border: active ? "1px solid #2A5DA8" : "1px solid #e2e8f0",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 {d}
// // // // // //               </button>
// // // // // //             );
// // // // // //           })}
// // // // // //         </div>

// // // // // //         {filteredJobs.length === 0 ? (
// // // // // //           <div className="text-center py-20">
// // // // // //             <p className="text-[15px] text-slate-500">
// // // // // //               No open roles in this department right now — check back soon, or reach out
// // // // // //               anyway at{" "}
// // // // // //               <a href={`mailto:${APPLY_EMAIL}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // // // // //                 {APPLY_EMAIL}
// // // // // //               </a>
// // // // // //               .
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         ) : (
// // // // // //           <div
// // // // // //             className={
// // // // // //               filteredJobs.length === 1
// // // // // //                 ? "flex justify-center"
// // // // // //                 : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
// // // // // //             }
// // // // // //           >
// // // // // //             {filteredJobs.map((job) => {
// // // // // //               const accent = departmentAccent[job.department];
// // // // // //               const isSingle = filteredJobs.length === 1;

// // // // // //               return (
// // // // // //                 <button
// // // // // //                   key={job.id}
// // // // // //                   onClick={() => setSelectedJob(job)}
// // // // // //                   className={
// // // // // //                     "text-left rounded-[26px] border transition-all duration-300 bg-white hover:-translate-y-1 overflow-hidden group" +
// // // // // //                     (isSingle
// // // // // //                       ? " w-full max-w-4xl grid grid-cols-1 sm:grid-cols-[42%_1fr] items-stretch"
// // // // // //                       : " flex flex-col h-full")
// // // // // //                   }
// // // // // //                   style={{
// // // // // //                     borderColor: "#e8edf5",
// // // // // //                     boxShadow: "0 4px 18px rgba(15,41,66,0.06)",
// // // // // //                   }}
// // // // // //                   onMouseEnter={(e) => {
// // // // // //                     e.currentTarget.style.boxShadow = `0 18px 40px ${accent}26`;
// // // // // //                     e.currentTarget.style.borderColor = accent;
// // // // // //                   }}
// // // // // //                   onMouseLeave={(e) => {
// // // // // //                     e.currentTarget.style.boxShadow = "0 4px 18px rgba(15,41,66,0.06)";
// // // // // //                     e.currentTarget.style.borderColor = "#e8edf5";
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   {job.image && (
// // // // // //                     <div
// // // // // //                       className={
// // // // // //                         "relative shrink-0 bg-slate-50 overflow-hidden" +
// // // // // //                         (isSingle
// // // // // //                           ? " w-full h-full aspect-[3/4] sm:aspect-auto"
// // // // // //                           : " w-full aspect-[3/4]")
// // // // // //                       }
// // // // // //                     >
// // // // // //                       <img
// // // // // //                         src={job.image}
// // // // // //                         alt={`${job.title} job opening`}
// // // // // //                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
// // // // // //                         style={{ objectPosition: "top" }}
// // // // // //                       />
// // // // // //                       {/* soft fade at the bottom edge — only needed on mobile where the
// // // // // //                           image is a fixed-aspect crop above the text, not full-height */}
// // // // // //                       <div
// // // // // //                         className={
// // // // // //                           "absolute inset-x-0 bottom-0 h-16 pointer-events-none" +
// // // // // //                           (isSingle ? " sm:hidden" : "")
// // // // // //                         }
// // // // // //                         style={{
// // // // // //                           background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)",
// // // // // //                         }}
// // // // // //                       />
// // // // // //                     </div>
// // // // // //                   )}

// // // // // //                   <div className={"flex flex-col flex-1 p-6" + (isSingle ? " sm:p-8" : "")}>
// // // // // //                     <div className="flex items-center gap-2.5 mb-4">
// // // // // //                       <span
// // // // // //                         className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
// // // // // //                         style={{ background: `${accent}14` }}
// // // // // //                       >
// // // // // //                         {departmentIcon[job.department]}
// // // // // //                       </span>
// // // // // //                       <span
// // // // // //                         className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full"
// // // // // //                         style={{ color: accent, background: `${accent}14` }}
// // // // // //                       >
// // // // // //                         {job.department.toUpperCase()}
// // // // // //                       </span>
// // // // // //                     </div>

// // // // // //                     <h3
// // // // // //                       className={
// // // // // //                         "font-bold text-slate-800 mb-2.5 leading-snug" +
// // // // // //                         (isSingle ? " text-[19px] sm:text-[22px]" : " text-[16px]")
// // // // // //                       }
// // // // // //                     >
// // // // // //                       {job.title}
// // // // // //                     </h3>
// // // // // //                     <p
// // // // // //                       className={
// // // // // //                         "text-slate-500 leading-relaxed flex-1" +
// // // // // //                         (isSingle ? " text-[13.5px] mb-6" : " text-[13px] mb-5")
// // // // // //                       }
// // // // // //                     >
// // // // // //                       {job.summary}
// // // // // //                     </p>

// // // // // //                     <div className="flex flex-wrap gap-2 mb-5">
// // // // // //                       <span
// // // // // //                         className="flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full"
// // // // // //                         style={{ background: "#f8fafc", color: "#475569" }}
// // // // // //                       >
// // // // // //                         <MapPin size={12} className="shrink-0" />
// // // // // //                         {job.location}
// // // // // //                       </span>
// // // // // //                       <span
// // // // // //                         className="flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full"
// // // // // //                         style={{ background: "#f8fafc", color: "#475569" }}
// // // // // //                       >
// // // // // //                         <Clock size={12} className="shrink-0" />
// // // // // //                         {job.type} · {job.experience}
// // // // // //                       </span>
// // // // // //                     </div>

// // // // // //                     <span
// // // // // //                       className="inline-flex items-center justify-center gap-1.5 text-[13px] font-bold rounded-xl py-3 px-5 mt-auto w-full sm:w-auto transition-colors"
// // // // // //                       style={{ background: accent, color: "#fff" }}
// // // // // //                     >
// // // // // //                       View Full Details <ArrowRight size={15} />
// // // // // //                     </span>
// // // // // //                   </div>
// // // // // //                 </button>
// // // // // //               );
// // // // // //             })}
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </section>

// // // // // //       {/* ── Detail modal ── */}
// // // // // //       {selectedJob && (
// // // // // //         <div
// // // // // //           className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
// // // // // //           style={{
// // // // // //             background: "rgba(10,20,35,0.6)",
// // // // // //             backdropFilter: "blur(3px)",
// // // // // //             animation: "careersModalFade 0.22s ease-out",
// // // // // //           }}
// // // // // //           onClick={() => setSelectedJob(null)}
// // // // // //         >
// // // // // //           <div
// // // // // //             className="careers-modal-scroll bg-white w-full max-w-2xl rounded-[28px] max-h-[88vh] overflow-y-auto shadow-2xl"
// // // // // //             style={{ animation: "careersModalScale 0.28s cubic-bezier(0.16, 1, 0.3, 1)" }}
// // // // // //             onClick={(e) => e.stopPropagation()}
// // // // // //           >
// // // // // //             {(selectedJob.popupImage || selectedJob.image) && (
// // // // // //               <img
// // // // // //                 src={selectedJob.popupImage || selectedJob.image}
// // // // // //                 alt={`${selectedJob.title} job opening`}
// // // // // //                 className="w-full max-h-[46vh] object-cover bg-slate-50"
// // // // // //               />
// // // // // //             )}

// // // // // //             <div
// // // // // //               className="sticky top-0 flex items-start justify-between gap-4 px-6 sm:px-8 py-5 sm:py-6 bg-white z-10"
// // // // // //               style={{ borderBottom: "1px solid #f0f0f0" }}
// // // // // //             >
// // // // // //               <div className="min-w-0">
// // // // // //                 <span
// // // // // //                   className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full inline-block mb-3"
// // // // // //                   style={{
// // // // // //                     color: departmentAccent[selectedJob.department],
// // // // // //                     background: `${departmentAccent[selectedJob.department]}14`,
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   {selectedJob.department.toUpperCase()}
// // // // // //                 </span>
// // // // // //                 <h2 className="text-[19px] sm:text-[23px] font-bold text-slate-800 leading-snug">
// // // // // //                   {selectedJob.title}
// // // // // //                 </h2>
// // // // // //                 <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2.5 text-[12.5px] text-slate-500">
// // // // // //                   <span className="flex items-center gap-1.5">
// // // // // //                     <MapPin size={13} className="shrink-0" /> {selectedJob.location}
// // // // // //                   </span>
// // // // // //                   <span className="flex items-center gap-1.5">
// // // // // //                     <Briefcase size={13} className="shrink-0" /> {selectedJob.type}
// // // // // //                   </span>
// // // // // //                   <span className="flex items-center gap-1.5">
// // // // // //                     <Clock size={13} className="shrink-0" /> {selectedJob.experience}
// // // // // //                   </span>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //               <button
// // // // // //                 onClick={() => setSelectedJob(null)}
// // // // // //                 className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
// // // // // //                 style={{ background: "#f8fafc", color: "#64748b" }}
// // // // // //                 onMouseEnter={(e) => {
// // // // // //                   e.currentTarget.style.background = "#f1f5f9";
// // // // // //                   e.currentTarget.style.color = "#334155";
// // // // // //                 }}
// // // // // //                 onMouseLeave={(e) => {
// // // // // //                   e.currentTarget.style.background = "#f8fafc";
// // // // // //                   e.currentTarget.style.color = "#64748b";
// // // // // //                 }}
// // // // // //                 aria-label="Close"
// // // // // //               >
// // // // // //                 <X size={18} />
// // // // // //               </button>
// // // // // //             </div>

// // // // // //             <div className="px-6 sm:px-8 py-6 sm:py-7 space-y-7">
// // // // // //               <p className="text-[13.5px] text-slate-600 leading-relaxed">
// // // // // //                 {selectedJob.summary}
// // // // // //               </p>

// // // // // //               {selectedJob.qualification && (
// // // // // //                 <div
// // // // // //                   className="flex items-start gap-3 rounded-2xl px-4 py-3.5"
// // // // // //                   style={{ background: `${departmentAccent[selectedJob.department]}0c` }}
// // // // // //                 >
// // // // // //                   <GraduationCap
// // // // // //                     size={17}
// // // // // //                     className="mt-0.5 shrink-0"
// // // // // //                     style={{ color: departmentAccent[selectedJob.department] }}
// // // // // //                   />
// // // // // //                   <p className="text-[13px] text-slate-600 leading-relaxed">
// // // // // //                     <span className="font-bold text-slate-800">Qualification — </span>
// // // // // //                     {selectedJob.qualification}
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
// // // // // //                   <span
// // // // // //                     className="w-1 h-4 rounded-full inline-block"
// // // // // //                     style={{ background: departmentAccent[selectedJob.department] }}
// // // // // //                   />
// // // // // //                   What you&apos;ll do
// // // // // //                 </h3>
// // // // // //                 <ul className="space-y-2.5">
// // // // // //                   {selectedJob.responsibilities.map((r, i) => (
// // // // // //                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
// // // // // //                       <CheckCircle2
// // // // // //                         size={15}
// // // // // //                         className="mt-0.5 shrink-0"
// // // // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // // // //                       />
// // // // // //                       {r}
// // // // // //                     </li>
// // // // // //                   ))}
// // // // // //                 </ul>
// // // // // //               </div>

// // // // // //               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
// // // // // //                   <span
// // // // // //                     className="w-1 h-4 rounded-full inline-block"
// // // // // //                     style={{ background: departmentAccent[selectedJob.department] }}
// // // // // //                   />
// // // // // //                   What we&apos;re looking for
// // // // // //                 </h3>
// // // // // //                 <ul className="space-y-2.5">
// // // // // //                   {selectedJob.requirements.map((r, i) => (
// // // // // //                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
// // // // // //                       <CheckCircle2
// // // // // //                         size={15}
// // // // // //                         className="mt-0.5 shrink-0"
// // // // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // // // //                       />
// // // // // //                       {r}
// // // // // //                     </li>
// // // // // //                   ))}
// // // // // //                 </ul>
// // // // // //               </div>

// // // // // //               <div className="pt-2 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // // // //                 <div className="flex flex-col sm:flex-row gap-3 mt-6">
// // // // // //                   <a
// // // // // //                     href={waLink(selectedJob)}
// // // // // //                     target="_blank"
// // // // // //                     rel="noopener noreferrer"
// // // // // //                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
// // // // // //                     style={{ background: "#25D366", boxShadow: "0 8px 20px rgba(37,211,102,0.28)" }}
// // // // // //                   >
// // // // // //                     <MessageCircle size={16} /> Apply via WhatsApp
// // // // // //                   </a>
// // // // // //                   <a
// // // // // //                     href={mailLink(selectedJob)}
// // // // // //                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold no-underline transition-transform hover:-translate-y-0.5"
// // // // // //                     style={{ border: "1.5px solid #2A5DA8", color: "#2A5DA8" }}
// // // // // //                   >
// // // // // //                     <Mail size={16} /> Apply via Email
// // // // // //                   </a>
// // // // // //                 </div>

// // // // // //                 <p className="flex items-center justify-center gap-1.5 text-[12px] text-slate-400 mt-5">
// // // // // //                   <Phone size={12} />
// // // // // //                   Or call us directly at{" "}
// // // // // //                   <a href={`tel:+${APPLY_WHATSAPP_NUMBER}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // // // // //                     {APPLY_PHONE_DISPLAY}
// // // // // //                   </a>
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //       </main>
// // // // // //       <Footer />

// // // // // //       <style>{`
// // // // // //         @keyframes careersModalFade {
// // // // // //           from { opacity: 0; }
// // // // // //           to { opacity: 1; }
// // // // // //         }
// // // // // //         @keyframes careersModalScale {
// // // // // //           from { opacity: 0; transform: scale(0.94) translateY(8px); }
// // // // // //           to { opacity: 1; transform: scale(1) translateY(0); }
// // // // // //         }

// // // // // //         /* Neutral scrollbar override — this page previously inherited a green
// // // // // //            scrollbar thumb from a global style; force it back to a plain gray. */
// // // // // //         .careers-page-scroll,
// // // // // //         .careers-modal-scroll {
// // // // // //           scrollbar-color: #cbd5e1 transparent;
// // // // // //         }
// // // // // //         .careers-page-scroll::-webkit-scrollbar,
// // // // // //         .careers-modal-scroll::-webkit-scrollbar {
// // // // // //           width: 8px;
// // // // // //         }
// // // // // //         .careers-page-scroll::-webkit-scrollbar-track,
// // // // // //         .careers-modal-scroll::-webkit-scrollbar-track {
// // // // // //           background: transparent;
// // // // // //         }
// // // // // //         .careers-page-scroll::-webkit-scrollbar-thumb,
// // // // // //         .careers-modal-scroll::-webkit-scrollbar-thumb {
// // // // // //           background-color: #cbd5e1;
// // // // // //           border-radius: 8px;
// // // // // //         }
// // // // // //         .careers-page-scroll::-webkit-scrollbar-thumb:hover,
// // // // // //         .careers-modal-scroll::-webkit-scrollbar-thumb:hover {
// // // // // //           background-color: #94a3b8;
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </>
// // // // // //   );
// // // // // // }
// // // // // "use client";
// // // // // import { useState, useMemo } from "react";
// // // // // import { X, MapPin, Clock, Briefcase, ArrowRight, CheckCircle2, GraduationCap, MessageCircle, Mail, Phone } from "lucide-react";
// // // // // import Navbar from "@/components/Navbar";
// // // // // import Footer from "@/components/Footer";

// // // // // /* ────────────────────────────────────────────────────────────
// // // // //    JOB DATA
// // // // //    Replace / extend this array with real openings. Each entry
// // // // //    drives both the listing card and the detail panel — nothing
// // // // //    else needs to change when you add or remove a role.
// // // // //    ──────────────────────────────────────────────────────────── */
// // // // // type Job = {
// // // // //   id: string;
// // // // //   title: string;
// // // // //   department: "Aquaculture" | "Poultry" | "Cattle" | "Corporate";
// // // // //   location: string;
// // // // //   type: "Full-time" | "Part-time" | "Internship";
// // // // //   experience: string;
// // // // //   qualification?: string;
// // // // //   summary: string;
// // // // //   responsibilities: string[];
// // // // //   requirements: string[];
// // // // //   /** Flyer / poster image for this role — shown on the listing card. */
// // // // //   image?: string;
// // // // //   /** Optional image shown instead of `image` inside the detail popup/modal. */
// // // // //   popupImage?: string;
// // // // // };

// // // // // const departmentAccent: Record<Job["department"], string> = {
// // // // //   Aquaculture: "#0ea5e9",
// // // // //   Poultry: "#f59e0b",
// // // // //   Cattle: "#22c55e",
// // // // //   Corporate: "#2A5DA8",
// // // // // };

// // // // // const departmentIcon: Record<Job["department"], string> = {
// // // // //   Aquaculture: "🦐",
// // // // //   Poultry: "🐔",
// // // // //   Cattle: "🐄",
// // // // //   Corporate: "🏢",
// // // // // };

// // // // // const jobs: Job[] = [
// // // // //   {
// // // // //     id: "area-sales-executive-aqua",
// // // // //     title: "Area Sales Executive",
// // // // //     department: "Aquaculture",
// // // // //     location: "Bhimavaram, Kaikaluru, Amalapuram, Kakinada",
// // // // //     type: "Full-time",
// // // // //     experience: "2-3 years (aqua medicine marketing experience preferred)",
// // // // //     qualification: "B.Sc / M.Sc in Fisheries Science or a related field",
// // // // //     summary:
// // // // //       "Drive sales of Innovare's aquaculture health products across the Bhimavaram–Kakinada belt, working directly with farmers and distributors to grow a loyal territory.",
// // // // //     image: "/images/job.jpeg",
// // // // //     popupImage: "/images/pop.png",
// // // // //     responsibilities: [
// // // // //       "Promote and sell aquaculture health products across the assigned territory",
// // // // //       "Build and maintain relationships with farmers and distributors",
// // // // //       "Meet sales targets and report field activity regularly",
// // // // //       "Provide on-ground product guidance and support to farmers",
// // // // //     ],
// // // // //     requirements: [
// // // // //       "B.Sc / M.Sc in Fisheries Science or a related field",
// // // // //       "2-3 years of experience, aqua medicine marketing preferred",
// // // // //       "Willingness to travel across Bhimavaram, Kaikaluru, Amalapuram, and Kakinada",
// // // // //       "Strong communication skills in Telugu and English",
// // // // //     ],
// // // // //   },
// // // // // ];

// // // // // const departments = ["All", "Aquaculture", "Poultry", "Cattle", "Corporate"] as const;

// // // // // /* Contact details from the official job flyer */
// // // // // const APPLY_WHATSAPP_NUMBER = "917799872555"; // country code + number, no symbols
// // // // // const APPLY_EMAIL = "info@innovarebiopharma.com";
// // // // // const APPLY_PHONE_DISPLAY = "77998 72555";

// // // // // export default function CareersPage() {
// // // // //   const [activeDept, setActiveDept] = useState<(typeof departments)[number]>("All");
// // // // //   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

// // // // //   const filteredJobs = useMemo(
// // // // //     () => (activeDept === "All" ? jobs : jobs.filter((j) => j.department === activeDept)),
// // // // //     [activeDept]
// // // // //   );

// // // // //   const waLink = (job: Job) =>
// // // // //     `https://wa.me/${APPLY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
// // // // //       `Hi Innovare Biopharma, I'd like to apply for the ${job.title} role (${job.location}).`
// // // // //     )}`;

// // // // //   const mailLink = (job: Job) =>
// // // // //     `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
// // // // //       `Application: ${job.title}`
// // // // //     )}&body=${encodeURIComponent(
// // // // //       `Hi Innovare Biopharma team,\n\nI'd like to apply for the ${job.title} role (${job.location}).\n\nName:\nPhone:\nResume link:\n\n`
// // // // //     )}`;

// // // // //   return (
// // // // //     <>
// // // // //       <Navbar />
// // // // //       <main className="careers-page-scroll min-h-screen bg-white pt-16 sm:pt-[76px] lg:pt-[84px] xl:pt-[92px]">
// // // // //       {/* ── Hero ── */}
// // // // //       <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
// // // // //         {/* Background photo — drop your image at public/images/careers-hero.jpg.
// // // // //             Swap the src below if you want a different filename/path. */}
// // // // //         <img
// // // // //           src="/images/careers.png"
// // // // //           alt=""
// // // // //           aria-hidden="true"
// // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // //         />

// // // // //         <div className="relative max-w-4xl mx-auto text-center">
// // // // //           <div
// // // // //             className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-[11px] sm:text-[12px] font-semibold tracking-wide"
// // // // //             style={{
// // // // //               color: "#7fd4ff",
// // // // //               border: "1px solid rgba(127,212,255,0.4)",
// // // // //               background: "rgba(7,23,38,0.55)",
// // // // //             }}
// // // // //           >
// // // // //             <span
// // // // //               className="inline-block w-2 h-2 rounded-full"
// // // // //               style={{ background: "#38bdf8" }}
// // // // //             />
// // // // //             WE&apos;RE HIRING
// // // // //           </div>

// // // // //           <h1
// // // // //             className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] mb-5"
// // // // //             style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}
// // // // //           >
// // // // //             Build the future of{" "}
// // // // //             <span
// // // // //               style={{
// // // // //                 background: "linear-gradient(90deg, #3b6ef0 0%, #8fc4ff 100%)",
// // // // //                 WebkitBackgroundClip: "text",
// // // // //                 WebkitTextFillColor: "transparent",
// // // // //                 backgroundClip: "text",
// // // // //               }}
// // // // //             >
// // // // //               aquaculture health
// // // // //             </span>{" "}
// // // // //             with us
// // // // //           </h1>

// // // // //           <p
// // // // //             className="text-[14px] sm:text-[16px] text-white max-w-2xl mx-auto leading-relaxed"
// // // // //             style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55)" }}
// // // // //           >
// // // // //             From farm-level fieldwork to formulation science, every role at Innovare
// // // // //             connects back to healthier ponds, farms, and livelihoods. Here&apos;s what
// // // // //             we&apos;re hiring for right now.
// // // // //           </p>

// // // // //           <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-10 pt-8 border-t border-white/30">
// // // // //             {[
// // // // //               { label: "OPEN ROLES", value: String(jobs.length) },
// // // // //               { label: "DEPARTMENTS", value: String(new Set(jobs.map((j) => j.department)).size) },
// // // // //               { label: "FIELD + OFFICE", value: "Hybrid" },
// // // // //             ].map((s) => (
// // // // //               <div key={s.label} className="text-center">
// // // // //                 <div
// // // // //                   className="text-[22px] sm:text-[26px] font-bold text-white"
// // // // //                   style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
// // // // //                 >
// // // // //                   {s.value}
// // // // //                 </div>
// // // // //                 <div
// // // // //                   className="text-[10px] sm:text-[11px] tracking-[0.15em] text-white/90 mt-1"
// // // // //                   style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
// // // // //                 >
// // // // //                   {s.label}
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── Filters + listing ── */}
// // // // //       <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
// // // // //         <div className="flex flex-wrap gap-2 mb-10 justify-center">
// // // // //           {departments.map((d) => {
// // // // //             const active = activeDept === d;
// // // // //             return (
// // // // //               <button
// // // // //                 key={d}
// // // // //                 onClick={() => setActiveDept(d)}
// // // // //                 className="px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all"
// // // // //                 style={{
// // // // //                   background: active ? "#2A5DA8" : "#f1f5f9",
// // // // //                   color: active ? "#fff" : "#475569",
// // // // //                   border: active ? "1px solid #2A5DA8" : "1px solid #e2e8f0",
// // // // //                 }}
// // // // //               >
// // // // //                 {d}
// // // // //               </button>
// // // // //             );
// // // // //           })}
// // // // //         </div>

// // // // //         {filteredJobs.length === 0 ? (
// // // // //           <div className="text-center py-20">
// // // // //             <p className="text-[15px] text-slate-500">
// // // // //               No open roles in this department right now — check back soon, or reach out
// // // // //               anyway at{" "}
// // // // //               <a href={`mailto:${APPLY_EMAIL}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // // // //                 {APPLY_EMAIL}
// // // // //               </a>
// // // // //               .
// // // // //             </p>
// // // // //           </div>
// // // // //         ) : (
// // // // //           <div
// // // // //             className={
// // // // //               filteredJobs.length === 1
// // // // //                 ? "flex justify-center"
// // // // //                 : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
// // // // //             }
// // // // //           >
// // // // //             {filteredJobs.map((job) => {
// // // // //               const accent = departmentAccent[job.department];
// // // // //               const isSingle = filteredJobs.length === 1;

// // // // //               return (
// // // // //                 <button
// // // // //                   key={job.id}
// // // // //                   onClick={() => setSelectedJob(job)}
// // // // //                   className={
// // // // //                     "text-left rounded-[26px] border transition-all duration-300 bg-white hover:-translate-y-1 overflow-hidden group" +
// // // // //                     (isSingle
// // // // //                       ? " w-full max-w-4xl grid grid-cols-1 sm:grid-cols-[42%_1fr] items-stretch"
// // // // //                       : " flex flex-col h-full")
// // // // //                   }
// // // // //                   style={{
// // // // //                     borderColor: "#e8edf5",
// // // // //                     boxShadow: "0 4px 18px rgba(15,41,66,0.06)",
// // // // //                   }}
// // // // //                   onMouseEnter={(e) => {
// // // // //                     e.currentTarget.style.boxShadow = `0 18px 40px ${accent}26`;
// // // // //                     e.currentTarget.style.borderColor = accent;
// // // // //                   }}
// // // // //                   onMouseLeave={(e) => {
// // // // //                     e.currentTarget.style.boxShadow = "0 4px 18px rgba(15,41,66,0.06)";
// // // // //                     e.currentTarget.style.borderColor = "#e8edf5";
// // // // //                   }}
// // // // //                 >
// // // // //                   {job.image && (
// // // // //                     <div
// // // // //                       className={
// // // // //                         "relative shrink-0 bg-slate-50 overflow-hidden" +
// // // // //                         (isSingle
// // // // //                           ? " w-full h-full aspect-[3/4] sm:aspect-auto"
// // // // //                           : " w-full aspect-[3/4]")
// // // // //                       }
// // // // //                     >
// // // // //                       <img
// // // // //                         src={job.image}
// // // // //                         alt={`${job.title} job opening`}
// // // // //                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
// // // // //                         style={{ objectPosition: "top" }}
// // // // //                       />
// // // // //                       {/* soft fade at the bottom edge — only needed on mobile where the
// // // // //                           image is a fixed-aspect crop above the text, not full-height */}
// // // // //                       <div
// // // // //                         className={
// // // // //                           "absolute inset-x-0 bottom-0 h-16 pointer-events-none" +
// // // // //                           (isSingle ? " sm:hidden" : "")
// // // // //                         }
// // // // //                         style={{
// // // // //                           background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)",
// // // // //                         }}
// // // // //                       />
// // // // //                     </div>
// // // // //                   )}

// // // // //                   <div className={"flex flex-col flex-1 p-6" + (isSingle ? " sm:p-8" : "")}>
// // // // //                     <div className="flex items-center gap-2.5 mb-4">
// // // // //                       <span
// // // // //                         className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
// // // // //                         style={{ background: `${accent}14` }}
// // // // //                       >
// // // // //                         {departmentIcon[job.department]}
// // // // //                       </span>
// // // // //                       <span
// // // // //                         className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full"
// // // // //                         style={{ color: accent, background: `${accent}14` }}
// // // // //                       >
// // // // //                         {job.department.toUpperCase()}
// // // // //                       </span>
// // // // //                     </div>

// // // // //                     <h3
// // // // //                       className={
// // // // //                         "font-bold text-slate-800 mb-2.5 leading-snug" +
// // // // //                         (isSingle ? " text-[19px] sm:text-[22px]" : " text-[16px]")
// // // // //                       }
// // // // //                     >
// // // // //                       {job.title}
// // // // //                     </h3>
// // // // //                     <p
// // // // //                       className={
// // // // //                         "text-slate-500 leading-relaxed flex-1" +
// // // // //                         (isSingle ? " text-[13.5px] mb-6" : " text-[13px] mb-5")
// // // // //                       }
// // // // //                     >
// // // // //                       {job.summary}
// // // // //                     </p>

// // // // //                     <div className="flex flex-wrap gap-2 mb-5">
// // // // //                       <span
// // // // //                         className="flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full"
// // // // //                         style={{ background: "#f8fafc", color: "#475569" }}
// // // // //                       >
// // // // //                         <MapPin size={12} className="shrink-0" />
// // // // //                         {job.location}
// // // // //                       </span>
// // // // //                       <span
// // // // //                         className="flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full"
// // // // //                         style={{ background: "#f8fafc", color: "#475569" }}
// // // // //                       >
// // // // //                         <Clock size={12} className="shrink-0" />
// // // // //                         {job.type} · {job.experience}
// // // // //                       </span>
// // // // //                     </div>

// // // // //                     <span
// // // // //                       className="inline-flex items-center justify-center gap-1.5 text-[13px] font-bold rounded-xl py-3 px-5 mt-auto w-full sm:w-auto transition-colors"
// // // // //                       style={{ background: accent, color: "#fff" }}
// // // // //                     >
// // // // //                       View Full Details <ArrowRight size={15} />
// // // // //                     </span>
// // // // //                   </div>
// // // // //                 </button>
// // // // //               );
// // // // //             })}
// // // // //           </div>
// // // // //         )}
// // // // //       </section>

// // // // //       {/* ── Detail modal ── */}
// // // // //       {selectedJob && (
// // // // //         <div
// // // // //           className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
// // // // //           style={{
// // // // //             background: "rgba(10,20,35,0.6)",
// // // // //             backdropFilter: "blur(3px)",
// // // // //             animation: "careersModalFade 0.22s ease-out",
// // // // //           }}
// // // // //           onClick={() => setSelectedJob(null)}
// // // // //         >
// // // // //           <div
// // // // //             className="bg-white w-full max-w-2xl rounded-[28px] max-h-[88vh] overflow-hidden shadow-2xl"
// // // // //             style={{ animation: "careersModalScale 0.28s cubic-bezier(0.16, 1, 0.3, 1)" }}
// // // // //             onClick={(e) => e.stopPropagation()}
// // // // //           >
// // // // //           <div className="careers-modal-scroll max-h-[88vh] overflow-y-auto">
// // // // //             {(selectedJob.popupImage || selectedJob.image) && (
// // // // //               <img
// // // // //                 src={selectedJob.popupImage || selectedJob.image}
// // // // //                 alt={`${selectedJob.title} job opening`}
// // // // //                 className="w-full h-[220px] sm:h-[300px] object-cover bg-slate-50"
// // // // //               />
// // // // //             )}

// // // // //             <div
// // // // //               className="sticky top-0 flex items-start justify-between gap-4 px-6 sm:px-8 py-5 sm:py-6 bg-white z-10"
// // // // //               style={{ borderBottom: "1px solid #f0f0f0" }}
// // // // //             >
// // // // //               <div className="min-w-0">
// // // // //                 <span
// // // // //                   className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full inline-block mb-3"
// // // // //                   style={{
// // // // //                     color: departmentAccent[selectedJob.department],
// // // // //                     background: `${departmentAccent[selectedJob.department]}14`,
// // // // //                   }}
// // // // //                 >
// // // // //                   {selectedJob.department.toUpperCase()}
// // // // //                 </span>
// // // // //                 <h2 className="text-[19px] sm:text-[23px] font-bold text-slate-800 leading-snug">
// // // // //                   {selectedJob.title}
// // // // //                 </h2>
// // // // //                 <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2.5 text-[12.5px] text-slate-500">
// // // // //                   <span className="flex items-center gap-1.5">
// // // // //                     <MapPin size={13} className="shrink-0" /> {selectedJob.location}
// // // // //                   </span>
// // // // //                   <span className="flex items-center gap-1.5">
// // // // //                     <Briefcase size={13} className="shrink-0" /> {selectedJob.type}
// // // // //                   </span>
// // // // //                   <span className="flex items-center gap-1.5">
// // // // //                     <Clock size={13} className="shrink-0" /> {selectedJob.experience}
// // // // //                   </span>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <button
// // // // //                 onClick={() => setSelectedJob(null)}
// // // // //                 className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
// // // // //                 style={{ background: "#f8fafc", color: "#64748b" }}
// // // // //                 onMouseEnter={(e) => {
// // // // //                   e.currentTarget.style.background = "#f1f5f9";
// // // // //                   e.currentTarget.style.color = "#334155";
// // // // //                 }}
// // // // //                 onMouseLeave={(e) => {
// // // // //                   e.currentTarget.style.background = "#f8fafc";
// // // // //                   e.currentTarget.style.color = "#64748b";
// // // // //                 }}
// // // // //                 aria-label="Close"
// // // // //               >
// // // // //                 <X size={18} />
// // // // //               </button>
// // // // //             </div>

// // // // //             <div className="px-6 sm:px-8 py-6 sm:py-7 space-y-7">
// // // // //               <p className="text-[13.5px] text-slate-600 leading-relaxed">
// // // // //                 {selectedJob.summary}
// // // // //               </p>

// // // // //               {selectedJob.qualification && (
// // // // //                 <div
// // // // //                   className="flex items-start gap-3 rounded-2xl px-4 py-3.5"
// // // // //                   style={{ background: `${departmentAccent[selectedJob.department]}0c` }}
// // // // //                 >
// // // // //                   <GraduationCap
// // // // //                     size={17}
// // // // //                     className="mt-0.5 shrink-0"
// // // // //                     style={{ color: departmentAccent[selectedJob.department] }}
// // // // //                   />
// // // // //                   <p className="text-[13px] text-slate-600 leading-relaxed">
// // // // //                     <span className="font-bold text-slate-800">Qualification — </span>
// // // // //                     {selectedJob.qualification}
// // // // //                   </p>
// // // // //                 </div>
// // // // //               )}

// // // // //               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
// // // // //                   <span
// // // // //                     className="w-1 h-4 rounded-full inline-block"
// // // // //                     style={{ background: departmentAccent[selectedJob.department] }}
// // // // //                   />
// // // // //                   What you&apos;ll do
// // // // //                 </h3>
// // // // //                 <ul className="space-y-2.5">
// // // // //                   {selectedJob.responsibilities.map((r, i) => (
// // // // //                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
// // // // //                       <CheckCircle2
// // // // //                         size={15}
// // // // //                         className="mt-0.5 shrink-0"
// // // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // // //                       />
// // // // //                       {r}
// // // // //                     </li>
// // // // //                   ))}
// // // // //                 </ul>
// // // // //               </div>

// // // // //               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
// // // // //                   <span
// // // // //                     className="w-1 h-4 rounded-full inline-block"
// // // // //                     style={{ background: departmentAccent[selectedJob.department] }}
// // // // //                   />
// // // // //                   What we&apos;re looking for
// // // // //                 </h3>
// // // // //                 <ul className="space-y-2.5">
// // // // //                   {selectedJob.requirements.map((r, i) => (
// // // // //                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
// // // // //                       <CheckCircle2
// // // // //                         size={15}
// // // // //                         className="mt-0.5 shrink-0"
// // // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // // //                       />
// // // // //                       {r}
// // // // //                     </li>
// // // // //                   ))}
// // // // //                 </ul>
// // // // //               </div>

// // // // //               <div className="pt-2 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // // //                 <div className="flex flex-col sm:flex-row gap-3 mt-6">
// // // // //                   <a
// // // // //                     href={waLink(selectedJob)}
// // // // //                     target="_blank"
// // // // //                     rel="noopener noreferrer"
// // // // //                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
// // // // //                     style={{ background: "#25D366", boxShadow: "0 8px 20px rgba(37,211,102,0.28)" }}
// // // // //                   >
// // // // //                     <MessageCircle size={16} /> Apply via WhatsApp
// // // // //                   </a>
// // // // //                   <a
// // // // //                     href={mailLink(selectedJob)}
// // // // //                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold no-underline transition-transform hover:-translate-y-0.5"
// // // // //                     style={{ border: "1.5px solid #2A5DA8", color: "#2A5DA8" }}
// // // // //                   >
// // // // //                     <Mail size={16} /> Apply via Email
// // // // //                   </a>
// // // // //                 </div>

// // // // //                 <p className="flex items-center justify-center gap-1.5 text-[12px] text-slate-400 mt-5">
// // // // //                   <Phone size={12} />
// // // // //                   Or call us directly at{" "}
// // // // //                   <a href={`tel:+${APPLY_WHATSAPP_NUMBER}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // // // //                     {APPLY_PHONE_DISPLAY}
// // // // //                   </a>
// // // // //                 </p>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //       </main>
// // // // //       <Footer />

// // // // //       <style>{`
// // // // //         @keyframes careersModalFade {
// // // // //           from { opacity: 0; }
// // // // //           to { opacity: 1; }
// // // // //         }
// // // // //         @keyframes careersModalScale {
// // // // //           from { opacity: 0; transform: scale(0.94) translateY(8px); }
// // // // //           to { opacity: 1; transform: scale(1) translateY(0); }
// // // // //         }

// // // // //         /* Neutral scrollbar override — this page previously inherited a green
// // // // //            scrollbar thumb from a global style; force it back to a plain gray. */
// // // // //         .careers-page-scroll {
// // // // //           scrollbar-color: #cbd5e1 transparent;
// // // // //         }
// // // // //         .careers-page-scroll::-webkit-scrollbar {
// // // // //           width: 8px;
// // // // //         }
// // // // //         .careers-page-scroll::-webkit-scrollbar-track {
// // // // //           background: transparent;
// // // // //         }
// // // // //         .careers-page-scroll::-webkit-scrollbar-thumb {
// // // // //           background-color: #cbd5e1;
// // // // //           border-radius: 8px;
// // // // //         }
// // // // //         .careers-page-scroll::-webkit-scrollbar-thumb:hover {
// // // // //           background-color: #94a3b8;
// // // // //         }

// // // // //         /* Modal scroll container — scrolling stays functional, the scrollbar
// // // // //            itself is just not shown so it doesn't poke out past the rounded corners. */
// // // // //         .careers-modal-scroll {
// // // // //           scrollbar-width: none; /* Firefox */
// // // // //           -ms-overflow-style: none; /* old Edge/IE */
// // // // //         }
// // // // //         .careers-modal-scroll::-webkit-scrollbar {
// // // // //           display: none; /* Chrome/Safari */
// // // // //         }
// // // // //       `}</style>
// // // // //     </>
// // // // //   );
// // // // // }
// // // // "use client";
// // // // import { useState, useMemo } from "react";
// // // // import { X, MapPin, Clock, Briefcase, ArrowRight, CheckCircle2, GraduationCap, MessageCircle, Mail, Phone } from "lucide-react";
// // // // import Navbar from "@/components/Navbar";
// // // // import Footer from "@/components/Footer";

// // // // /* ────────────────────────────────────────────────────────────
// // // //    JOB DATA
// // // //    Replace / extend this array with real openings. Each entry
// // // //    drives both the listing card and the detail panel — nothing
// // // //    else needs to change when you add or remove a role.
// // // //    ──────────────────────────────────────────────────────────── */
// // // // type Job = {
// // // //   id: string;
// // // //   title: string;
// // // //   department: "Aquaculture" | "Poultry" | "Cattle" | "Corporate";
// // // //   location: string;
// // // //   type: "Full-time" | "Part-time" | "Internship";
// // // //   experience: string;
// // // //   qualification?: string;
// // // //   summary: string;
// // // //   responsibilities: string[];
// // // //   requirements: string[];
// // // //   /** Flyer / poster image for this role — shown on the listing card. */
// // // //   image?: string;
// // // //   /** Optional image shown instead of `image` inside the detail popup/modal. */
// // // //   popupImage?: string;
// // // // };

// // // // const departmentAccent: Record<Job["department"], string> = {
// // // //   Aquaculture: "#0ea5e9",
// // // //   Poultry: "#f59e0b",
// // // //   Cattle: "#22c55e",
// // // //   Corporate: "#2A5DA8",
// // // // };

// // // // const departmentIcon: Record<Job["department"], string> = {
// // // //   Aquaculture: "🦐",
// // // //   Poultry: "🐔",
// // // //   Cattle: "🐄",
// // // //   Corporate: "🏢",
// // // // };

// // // // const jobs: Job[] = [
// // // //   {
// // // //     id: "area-sales-executive-aqua",
// // // //     title: "Area Sales Executive",
// // // //     department: "Aquaculture",
// // // //     location: "Bhimavaram, Kaikaluru, Amalapuram, Kakinada",
// // // //     type: "Full-time",
// // // //     experience: "2-3 years (aqua medicine marketing experience preferred)",
// // // //     qualification: "B.Sc / M.Sc in Fisheries Science or a related field",
// // // //     summary:
// // // //       "Drive sales of Innovare's aquaculture health products across the Bhimavaram–Kakinada belt, working directly with farmers and distributors to grow a loyal territory.",
// // // //     image: "/images/job.jpeg",
// // // //     popupImage: "/images/job-popup.jpg",
// // // //     responsibilities: [
// // // //       "Promote and sell aquaculture health products across the assigned territory",
// // // //       "Build and maintain relationships with farmers and distributors",
// // // //       "Meet sales targets and report field activity regularly",
// // // //       "Provide on-ground product guidance and support to farmers",
// // // //     ],
// // // //     requirements: [
// // // //       "B.Sc / M.Sc in Fisheries Science or a related field",
// // // //       "2-3 years of experience, aqua medicine marketing preferred",
// // // //       "Willingness to travel across Bhimavaram, Kaikaluru, Amalapuram, and Kakinada",
// // // //       "Strong communication skills in Telugu and English",
// // // //     ],
// // // //   },
// // // // ];

// // // // const departments = ["All", "Aquaculture", "Poultry", "Cattle", "Corporate"] as const;

// // // // /* Contact details from the official job flyer */
// // // // const APPLY_WHATSAPP_NUMBER = "917799872555"; // country code + number, no symbols
// // // // const APPLY_EMAIL = "info@innovarebiopharma.com";
// // // // const APPLY_PHONE_DISPLAY = "77998 72555";

// // // // export default function CareersPage() {
// // // //   const [activeDept, setActiveDept] = useState<(typeof departments)[number]>("All");
// // // //   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

// // // //   const filteredJobs = useMemo(
// // // //     () => (activeDept === "All" ? jobs : jobs.filter((j) => j.department === activeDept)),
// // // //     [activeDept]
// // // //   );

// // // //   const waLink = (job: Job) =>
// // // //     `https://wa.me/${APPLY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
// // // //       `Hi Innovare Biopharma, I'd like to apply for the ${job.title} role (${job.location}).`
// // // //     )}`;

// // // //   const mailLink = (job: Job) =>
// // // //     `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
// // // //       `Application: ${job.title}`
// // // //     )}&body=${encodeURIComponent(
// // // //       `Hi Innovare Biopharma team,\n\nI'd like to apply for the ${job.title} role (${job.location}).\n\nName:\nPhone:\nResume link:\n\n`
// // // //     )}`;

// // // //   return (
// // // //     <>
// // // //       <Navbar />
// // // //       <main className="careers-page-scroll min-h-screen bg-white pt-16 sm:pt-[76px] lg:pt-[84px] xl:pt-[92px]">
// // // //       {/* ── Hero ── */}
// // // //       <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
// // // //         {/* Background photo — drop your image at public/images/careers-hero.jpg.
// // // //             Swap the src below if you want a different filename/path. */}
// // // //         <img
// // // //           src="/images/careers.png"
// // // //           alt=""
// // // //           aria-hidden="true"
// // // //           className="absolute inset-0 w-full h-full object-cover"
// // // //         />

// // // //         <div className="relative max-w-4xl mx-auto text-center">
// // // //           <div
// // // //             className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-[11px] sm:text-[12px] font-semibold tracking-wide"
// // // //             style={{
// // // //               color: "#7fd4ff",
// // // //               border: "1px solid rgba(127,212,255,0.4)",
// // // //               background: "rgba(7,23,38,0.55)",
// // // //             }}
// // // //           >
// // // //             <span
// // // //               className="inline-block w-2 h-2 rounded-full"
// // // //               style={{ background: "#38bdf8" }}
// // // //             />
// // // //             WE&apos;RE HIRING
// // // //           </div>

// // // //           <h1
// // // //             className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] mb-5"
// // // //             style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}
// // // //           >
// // // //             Build the future of{" "}
// // // //             <span
// // // //               style={{
// // // //                 background: "linear-gradient(90deg, #3b6ef0 0%, #8fc4ff 100%)",
// // // //                 WebkitBackgroundClip: "text",
// // // //                 WebkitTextFillColor: "transparent",
// // // //                 backgroundClip: "text",
// // // //               }}
// // // //             >
// // // //               aquaculture health
// // // //             </span>{" "}
// // // //             with us
// // // //           </h1>

// // // //           <p
// // // //             className="text-[14px] sm:text-[16px] text-white max-w-2xl mx-auto leading-relaxed"
// // // //             style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55)" }}
// // // //           >
// // // //             From farm-level fieldwork to formulation science, every role at Innovare
// // // //             connects back to healthier ponds, farms, and livelihoods. Here&apos;s what
// // // //             we&apos;re hiring for right now.
// // // //           </p>

// // // //           <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-10 pt-8 border-t border-white/30">
// // // //             {[
// // // //               { label: "OPEN ROLES", value: String(jobs.length) },
// // // //               { label: "DEPARTMENTS", value: String(new Set(jobs.map((j) => j.department)).size) },
// // // //               { label: "FIELD + OFFICE", value: "Hybrid" },
// // // //             ].map((s) => (
// // // //               <div key={s.label} className="text-center">
// // // //                 <div
// // // //                   className="text-[22px] sm:text-[26px] font-bold text-white"
// // // //                   style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
// // // //                 >
// // // //                   {s.value}
// // // //                 </div>
// // // //                 <div
// // // //                   className="text-[10px] sm:text-[11px] tracking-[0.15em] text-white/90 mt-1"
// // // //                   style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
// // // //                 >
// // // //                   {s.label}
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ── Filters + listing ── */}
// // // //       <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
// // // //         <div className="flex flex-wrap gap-2 mb-10 justify-center">
// // // //           {departments.map((d) => {
// // // //             const active = activeDept === d;
// // // //             return (
// // // //               <button
// // // //                 key={d}
// // // //                 onClick={() => setActiveDept(d)}
// // // //                 className="px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all"
// // // //                 style={{
// // // //                   background: active ? "#2A5DA8" : "#f1f5f9",
// // // //                   color: active ? "#fff" : "#475569",
// // // //                   border: active ? "1px solid #2A5DA8" : "1px solid #e2e8f0",
// // // //                 }}
// // // //               >
// // // //                 {d}
// // // //               </button>
// // // //             );
// // // //           })}
// // // //         </div>

// // // //         {filteredJobs.length === 0 ? (
// // // //           <div className="text-center py-20">
// // // //             <p className="text-[15px] text-slate-500">
// // // //               No open roles in this department right now — check back soon, or reach out
// // // //               anyway at{" "}
// // // //               <a href={`mailto:${APPLY_EMAIL}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // // //                 {APPLY_EMAIL}
// // // //               </a>
// // // //               .
// // // //             </p>
// // // //           </div>
// // // //         ) : (
// // // //           <div
// // // //             className={
// // // //               filteredJobs.length === 1
// // // //                 ? "flex justify-center"
// // // //                 : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
// // // //             }
// // // //           >
// // // //             {filteredJobs.map((job) => {
// // // //               const accent = departmentAccent[job.department];
// // // //               const isSingle = filteredJobs.length === 1;

// // // //               return (
// // // //                 <button
// // // //                   key={job.id}
// // // //                   onClick={() => setSelectedJob(job)}
// // // //                   className={
// // // //                     "text-left rounded-[26px] border transition-all duration-300 bg-white hover:-translate-y-1 overflow-hidden group" +
// // // //                     (isSingle
// // // //                       ? " w-full max-w-4xl grid grid-cols-1 sm:grid-cols-[42%_1fr] items-stretch"
// // // //                       : " flex flex-col h-full")
// // // //                   }
// // // //                   style={{
// // // //                     borderColor: "#e8edf5",
// // // //                     boxShadow: "0 4px 18px rgba(15,41,66,0.06)",
// // // //                   }}
// // // //                   onMouseEnter={(e) => {
// // // //                     e.currentTarget.style.boxShadow = `0 18px 40px ${accent}26`;
// // // //                     e.currentTarget.style.borderColor = accent;
// // // //                   }}
// // // //                   onMouseLeave={(e) => {
// // // //                     e.currentTarget.style.boxShadow = "0 4px 18px rgba(15,41,66,0.06)";
// // // //                     e.currentTarget.style.borderColor = "#e8edf5";
// // // //                   }}
// // // //                 >
// // // //                   {job.image && (
// // // //                     <div
// // // //                       className={
// // // //                         "relative shrink-0 bg-slate-50 overflow-hidden" +
// // // //                         (isSingle
// // // //                           ? " w-full h-full aspect-[3/4] sm:aspect-auto"
// // // //                           : " w-full aspect-[3/4]")
// // // //                       }
// // // //                     >
// // // //                       <img
// // // //                         src={job.image}
// // // //                         alt={`${job.title} job opening`}
// // // //                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
// // // //                         style={{ objectPosition: "top" }}
// // // //                       />
// // // //                       {/* soft fade at the bottom edge — only needed on mobile where the
// // // //                           image is a fixed-aspect crop above the text, not full-height */}
// // // //                       <div
// // // //                         className={
// // // //                           "absolute inset-x-0 bottom-0 h-16 pointer-events-none" +
// // // //                           (isSingle ? " sm:hidden" : "")
// // // //                         }
// // // //                         style={{
// // // //                           background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)",
// // // //                         }}
// // // //                       />
// // // //                     </div>
// // // //                   )}

// // // //                   <div className={"flex flex-col flex-1 p-6" + (isSingle ? " sm:p-8" : "")}>
// // // //                     <div className="flex items-center gap-2.5 mb-4">
// // // //                       <span
// // // //                         className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
// // // //                         style={{ background: `${accent}14` }}
// // // //                       >
// // // //                         {departmentIcon[job.department]}
// // // //                       </span>
// // // //                       <span
// // // //                         className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full"
// // // //                         style={{ color: accent, background: `${accent}14` }}
// // // //                       >
// // // //                         {job.department.toUpperCase()}
// // // //                       </span>
// // // //                     </div>

// // // //                     <h3
// // // //                       className={
// // // //                         "font-bold text-slate-800 mb-2.5 leading-snug" +
// // // //                         (isSingle ? " text-[19px] sm:text-[22px]" : " text-[16px]")
// // // //                       }
// // // //                     >
// // // //                       {job.title}
// // // //                     </h3>
// // // //                     <p
// // // //                       className={
// // // //                         "text-slate-500 leading-relaxed" +
// // // //                         (isSingle ? " text-[13.5px] mb-6" : " text-[13px] mb-5 flex-1")
// // // //                       }
// // // //                     >
// // // //                       {job.summary}
// // // //                     </p>

// // // //                     <div className={"flex flex-wrap gap-2 mb-5" + (isSingle ? " mt-auto" : "")}>
// // // //                       <span
// // // //                         className="flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full"
// // // //                         style={{ background: "#f8fafc", color: "#475569" }}
// // // //                       >
// // // //                         <MapPin size={12} className="shrink-0" />
// // // //                         {job.location}
// // // //                       </span>
// // // //                       <span
// // // //                         className="flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full"
// // // //                         style={{ background: "#f8fafc", color: "#475569" }}
// // // //                       >
// // // //                         <Clock size={12} className="shrink-0" />
// // // //                         {job.type} · {job.experience}
// // // //                       </span>
// // // //                     </div>

// // // //                     <span
// // // //                       className="inline-flex items-center justify-center gap-1.5 text-[13px] font-bold rounded-xl py-3 px-5 mt-auto w-full sm:w-auto transition-colors"
// // // //                       style={{ background: accent, color: "#fff" }}
// // // //                     >
// // // //                       View Full Details <ArrowRight size={15} />
// // // //                     </span>
// // // //                   </div>
// // // //                 </button>
// // // //               );
// // // //             })}
// // // //           </div>
// // // //         )}
// // // //       </section>

// // // //       {/* ── Detail modal ── */}
// // // //       {selectedJob && (
// // // //         <div
// // // //           className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
// // // //           style={{
// // // //             background: "rgba(10,20,35,0.6)",
// // // //             backdropFilter: "blur(3px)",
// // // //             animation: "careersModalFade 0.22s ease-out",
// // // //           }}
// // // //           onClick={() => setSelectedJob(null)}
// // // //         >
// // // //           <div
// // // //             className="bg-white w-full max-w-2xl rounded-[28px] max-h-[88vh] overflow-hidden shadow-2xl"
// // // //             style={{ animation: "careersModalScale 0.28s cubic-bezier(0.16, 1, 0.3, 1)" }}
// // // //             onClick={(e) => e.stopPropagation()}
// // // //           >
// // // //           <div className="careers-modal-scroll max-h-[88vh] overflow-y-auto">
// // // //             {(selectedJob.popupImage || selectedJob.image) && (
// // // //               <img
// // // //                 src={selectedJob.popupImage || selectedJob.image}
// // // //                 alt={`${selectedJob.title} job opening`}
// // // //                 className="w-full h-[220px] sm:h-[300px] object-cover bg-slate-50"
// // // //               />
// // // //             )}

// // // //             <div
// // // //               className="sticky top-0 flex items-start justify-between gap-4 px-6 sm:px-8 py-5 sm:py-6 bg-white z-10"
// // // //               style={{ borderBottom: "1px solid #f0f0f0" }}
// // // //             >
// // // //               <div className="min-w-0">
// // // //                 <span
// // // //                   className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full inline-block mb-3"
// // // //                   style={{
// // // //                     color: departmentAccent[selectedJob.department],
// // // //                     background: `${departmentAccent[selectedJob.department]}14`,
// // // //                   }}
// // // //                 >
// // // //                   {selectedJob.department.toUpperCase()}
// // // //                 </span>
// // // //                 <h2 className="text-[19px] sm:text-[23px] font-bold text-slate-800 leading-snug">
// // // //                   {selectedJob.title}
// // // //                 </h2>
// // // //                 <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2.5 text-[12.5px] text-slate-500">
// // // //                   <span className="flex items-center gap-1.5">
// // // //                     <MapPin size={13} className="shrink-0" /> {selectedJob.location}
// // // //                   </span>
// // // //                   <span className="flex items-center gap-1.5">
// // // //                     <Briefcase size={13} className="shrink-0" /> {selectedJob.type}
// // // //                   </span>
// // // //                   <span className="flex items-center gap-1.5">
// // // //                     <Clock size={13} className="shrink-0" /> {selectedJob.experience}
// // // //                   </span>
// // // //                 </div>
// // // //               </div>
// // // //               <button
// // // //                 onClick={() => setSelectedJob(null)}
// // // //                 className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
// // // //                 style={{ background: "#f8fafc", color: "#64748b" }}
// // // //                 onMouseEnter={(e) => {
// // // //                   e.currentTarget.style.background = "#f1f5f9";
// // // //                   e.currentTarget.style.color = "#334155";
// // // //                 }}
// // // //                 onMouseLeave={(e) => {
// // // //                   e.currentTarget.style.background = "#f8fafc";
// // // //                   e.currentTarget.style.color = "#64748b";
// // // //                 }}
// // // //                 aria-label="Close"
// // // //               >
// // // //                 <X size={18} />
// // // //               </button>
// // // //             </div>

// // // //             <div className="px-6 sm:px-8 py-6 sm:py-7 space-y-7">
// // // //               <p className="text-[13.5px] text-slate-600 leading-relaxed">
// // // //                 {selectedJob.summary}
// // // //               </p>

// // // //               {selectedJob.qualification && (
// // // //                 <div
// // // //                   className="flex items-start gap-3 rounded-2xl px-4 py-3.5"
// // // //                   style={{ background: `${departmentAccent[selectedJob.department]}0c` }}
// // // //                 >
// // // //                   <GraduationCap
// // // //                     size={17}
// // // //                     className="mt-0.5 shrink-0"
// // // //                     style={{ color: departmentAccent[selectedJob.department] }}
// // // //                   />
// // // //                   <p className="text-[13px] text-slate-600 leading-relaxed">
// // // //                     <span className="font-bold text-slate-800">Qualification — </span>
// // // //                     {selectedJob.qualification}
// // // //                   </p>
// // // //                 </div>
// // // //               )}

// // // //               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
// // // //                   <span
// // // //                     className="w-1 h-4 rounded-full inline-block"
// // // //                     style={{ background: departmentAccent[selectedJob.department] }}
// // // //                   />
// // // //                   What you&apos;ll do
// // // //                 </h3>
// // // //                 <ul className="space-y-2.5">
// // // //                   {selectedJob.responsibilities.map((r, i) => (
// // // //                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
// // // //                       <CheckCircle2
// // // //                         size={15}
// // // //                         className="mt-0.5 shrink-0"
// // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // //                       />
// // // //                       {r}
// // // //                     </li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </div>

// // // //               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
// // // //                   <span
// // // //                     className="w-1 h-4 rounded-full inline-block"
// // // //                     style={{ background: departmentAccent[selectedJob.department] }}
// // // //                   />
// // // //                   What we&apos;re looking for
// // // //                 </h3>
// // // //                 <ul className="space-y-2.5">
// // // //                   {selectedJob.requirements.map((r, i) => (
// // // //                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
// // // //                       <CheckCircle2
// // // //                         size={15}
// // // //                         className="mt-0.5 shrink-0"
// // // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // // //                       />
// // // //                       {r}
// // // //                     </li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </div>

// // // //               <div className="pt-2 border-t" style={{ borderColor: "#f1f5f9" }}>
// // // //                 <div className="flex flex-col sm:flex-row gap-3 mt-6">
// // // //                   <a
// // // //                     href={waLink(selectedJob)}
// // // //                     target="_blank"
// // // //                     rel="noopener noreferrer"
// // // //                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
// // // //                     style={{ background: "#25D366", boxShadow: "0 8px 20px rgba(37,211,102,0.28)" }}
// // // //                   >
// // // //                     <MessageCircle size={16} /> Apply via WhatsApp
// // // //                   </a>
// // // //                   <a
// // // //                     href={mailLink(selectedJob)}
// // // //                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold no-underline transition-transform hover:-translate-y-0.5"
// // // //                     style={{ border: "1.5px solid #2A5DA8", color: "#2A5DA8" }}
// // // //                   >
// // // //                     <Mail size={16} /> Apply via Email
// // // //                   </a>
// // // //                 </div>

// // // //                 <p className="flex items-center justify-center gap-1.5 text-[12px] text-slate-400 mt-5">
// // // //                   <Phone size={12} />
// // // //                   Or call us directly at{" "}
// // // //                   <a href={`tel:+${APPLY_WHATSAPP_NUMBER}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // // //                     {APPLY_PHONE_DISPLAY}
// // // //                   </a>
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //       </main>
// // // //       <Footer />

// // // //       <style>{`
// // // //         @keyframes careersModalFade {
// // // //           from { opacity: 0; }
// // // //           to { opacity: 1; }
// // // //         }
// // // //         @keyframes careersModalScale {
// // // //           from { opacity: 0; transform: scale(0.94) translateY(8px); }
// // // //           to { opacity: 1; transform: scale(1) translateY(0); }
// // // //         }

// // // //         /* Neutral scrollbar override — this page previously inherited a green
// // // //            scrollbar thumb from a global style; force it back to a plain gray. */
// // // //         .careers-page-scroll {
// // // //           scrollbar-color: #cbd5e1 transparent;
// // // //         }
// // // //         .careers-page-scroll::-webkit-scrollbar {
// // // //           width: 8px;
// // // //         }
// // // //         .careers-page-scroll::-webkit-scrollbar-track {
// // // //           background: transparent;
// // // //         }
// // // //         .careers-page-scroll::-webkit-scrollbar-thumb {
// // // //           background-color: #cbd5e1;
// // // //           border-radius: 8px;
// // // //         }
// // // //         .careers-page-scroll::-webkit-scrollbar-thumb:hover {
// // // //           background-color: #94a3b8;
// // // //         }

// // // //         /* Modal scroll container — scrolling stays functional, the scrollbar
// // // //            itself is just not shown so it doesn't poke out past the rounded corners. */
// // // //         .careers-modal-scroll {
// // // //           scrollbar-width: none; /* Firefox */
// // // //           -ms-overflow-style: none; /* old Edge/IE */
// // // //         }
// // // //         .careers-modal-scroll::-webkit-scrollbar {
// // // //           display: none; /* Chrome/Safari */
// // // //         }
// // // //       `}</style>
// // // //     </>
// // // //   );
// // // // }
// // // "use client";
// // // import { useState, useMemo } from "react";
// // // import { X, MapPin, Clock, Briefcase, ArrowRight, CheckCircle2, GraduationCap, MessageCircle, Mail, Phone } from "lucide-react";
// // // import Navbar from "@/components/Navbar";
// // // import Footer from "@/components/Footer";

// // // /* ────────────────────────────────────────────────────────────
// // //    JOB DATA
// // //    Replace / extend this array with real openings. Each entry
// // //    drives both the listing card and the detail panel — nothing
// // //    else needs to change when you add or remove a role.
// // //    ──────────────────────────────────────────────────────────── */
// // // type Job = {
// // //   id: string;
// // //   title: string;
// // //   department: "Aquaculture" | "Poultry" | "Cattle" | "Corporate";
// // //   location: string;
// // //   type: "Full-time" | "Part-time" | "Internship";
// // //   experience: string;
// // //   qualification?: string;
// // //   summary: string;
// // //   responsibilities: string[];
// // //   requirements: string[];
// // //   /** Flyer / poster image for this role — shown on the listing card. */
// // //   image?: string;
// // //   /** Optional image shown instead of `image` inside the detail popup/modal. */
// // //   popupImage?: string;
// // // };

// // // const departmentAccent: Record<Job["department"], string> = {
// // //   Aquaculture: "#0ea5e9",
// // //   Poultry: "#f59e0b",
// // //   Cattle: "#22c55e",
// // //   Corporate: "#2A5DA8",
// // // };

// // // const departmentIcon: Record<Job["department"], string> = {
// // //   Aquaculture: "🦐",
// // //   Poultry: "🐔",
// // //   Cattle: "🐄",
// // //   Corporate: "🏢",
// // // };

// // // const jobs: Job[] = [
// // //   {
// // //     id: "area-sales-executive-aqua",
// // //     title: "Area Sales Executive",
// // //     department: "Aquaculture",
// // //     location: "Bhimavaram, Kaikaluru, Amalapuram, Kakinada",
// // //     type: "Full-time",
// // //     experience: "2-3 years (aqua medicine marketing experience preferred)",
// // //     qualification: "B.Sc / M.Sc in Fisheries Science or a related field",
// // //     summary:
// // //       "Drive sales of Innovare's aquaculture health products across the Bhimavaram–Kakinada belt, working directly with farmers and distributors to grow a loyal territory.",
// // //     image: "/images/job.jpeg",
// // //     popupImage: "/images/job-popup.jpg",
// // //     responsibilities: [
// // //       "Promote and sell aquaculture health products across the assigned territory",
// // //       "Build and maintain relationships with farmers and distributors",
// // //       "Meet sales targets and report field activity regularly",
// // //       "Provide on-ground product guidance and support to farmers",
// // //     ],
// // //     requirements: [
// // //       "B.Sc / M.Sc in Fisheries Science or a related field",
// // //       "2-3 years of experience, aqua medicine marketing preferred",
// // //       "Willingness to travel across Bhimavaram, Kaikaluru, Amalapuram, and Kakinada",
// // //       "Strong communication skills in Telugu and English",
// // //     ],
// // //   },
// // // ];

// // // const departments = ["All", "Aquaculture", "Poultry", "Cattle", "Corporate"] as const;

// // // /* Contact details from the official job flyer */
// // // const APPLY_WHATSAPP_NUMBER = "917799872555"; // country code + number, no symbols
// // // const APPLY_EMAIL = "info@innovarebiopharma.com";
// // // const APPLY_PHONE_DISPLAY = "77998 72555";

// // // export default function CareersPage() {
// // //   const [activeDept, setActiveDept] = useState<(typeof departments)[number]>("All");
// // //   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

// // //   const filteredJobs = useMemo(
// // //     () => (activeDept === "All" ? jobs : jobs.filter((j) => j.department === activeDept)),
// // //     [activeDept]
// // //   );

// // //   const waLink = (job: Job) =>
// // //     `https://wa.me/${APPLY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
// // //       `Hi Innovare Biopharma, I'd like to apply for the ${job.title} role (${job.location}).`
// // //     )}`;

// // //   const mailLink = (job: Job) =>
// // //     `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
// // //       `Application: ${job.title}`
// // //     )}&body=${encodeURIComponent(
// // //       `Hi Innovare Biopharma team,\n\nI'd like to apply for the ${job.title} role (${job.location}).\n\nName:\nPhone:\nResume link:\n\n`
// // //     )}`;

// // //   return (
// // //     <>
// // //       <Navbar />
// // //       <main className="careers-page-scroll min-h-screen bg-white pt-16 sm:pt-[76px] lg:pt-[84px] xl:pt-[92px]">
// // //       {/* ── Hero ── */}
// // //       <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
// // //         {/* Background photo — drop your image at public/images/careers-hero.jpg.
// // //             Swap the src below if you want a different filename/path. */}
// // //         <img
// // //           src="/images/careers.png"
// // //           alt=""
// // //           aria-hidden="true"
// // //           className="absolute inset-0 w-full h-full object-cover"
// // //         />

// // //         <div className="relative max-w-4xl mx-auto text-center">
// // //           <div
// // //             className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-[11px] sm:text-[12px] font-semibold tracking-wide"
// // //             style={{
// // //               color: "#7fd4ff",
// // //               border: "1px solid rgba(127,212,255,0.4)",
// // //               background: "rgba(7,23,38,0.55)",
// // //             }}
// // //           >
// // //             <span
// // //               className="inline-block w-2 h-2 rounded-full"
// // //               style={{ background: "#38bdf8" }}
// // //             />
// // //             WE&apos;RE HIRING
// // //           </div>

// // //           <h1
// // //             className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] mb-5"
// // //             style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}
// // //           >
// // //             Build the future of{" "}
// // //             <span
// // //               style={{
// // //                 background: "linear-gradient(90deg, #3b6ef0 0%, #8fc4ff 100%)",
// // //                 WebkitBackgroundClip: "text",
// // //                 WebkitTextFillColor: "transparent",
// // //                 backgroundClip: "text",
// // //               }}
// // //             >
// // //               aquaculture health
// // //             </span>{" "}
// // //             with us
// // //           </h1>

// // //           <p
// // //             className="text-[14px] sm:text-[16px] text-white max-w-2xl mx-auto leading-relaxed"
// // //             style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55)" }}
// // //           >
// // //             From farm-level fieldwork to formulation science, every role at Innovare
// // //             connects back to healthier ponds, farms, and livelihoods. Here&apos;s what
// // //             we&apos;re hiring for right now.
// // //           </p>

// // //           <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-10 pt-8 border-t border-white/30">
// // //             {[
// // //               { label: "OPEN ROLES", value: String(jobs.length) },
// // //               { label: "DEPARTMENTS", value: String(new Set(jobs.map((j) => j.department)).size) },
// // //               { label: "FIELD + OFFICE", value: "Hybrid" },
// // //             ].map((s) => (
// // //               <div key={s.label} className="text-center">
// // //                 <div
// // //                   className="text-[22px] sm:text-[26px] font-bold text-white"
// // //                   style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
// // //                 >
// // //                   {s.value}
// // //                 </div>
// // //                 <div
// // //                   className="text-[10px] sm:text-[11px] tracking-[0.15em] text-white/90 mt-1"
// // //                   style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
// // //                 >
// // //                   {s.label}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ── Filters + listing ── */}
// // //       <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
// // //         <div className="flex flex-wrap gap-2 mb-10 justify-center">
// // //           {departments.map((d) => {
// // //             const active = activeDept === d;
// // //             return (
// // //               <button
// // //                 key={d}
// // //                 onClick={() => setActiveDept(d)}
// // //                 className="px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all"
// // //                 style={{
// // //                   background: active ? "#2A5DA8" : "#f1f5f9",
// // //                   color: active ? "#fff" : "#475569",
// // //                   border: active ? "1px solid #2A5DA8" : "1px solid #e2e8f0",
// // //                 }}
// // //               >
// // //                 {d}
// // //               </button>
// // //             );
// // //           })}
// // //         </div>

// // //         {filteredJobs.length === 0 ? (
// // //           <div className="text-center py-20">
// // //             <p className="text-[15px] text-slate-500">
// // //               No open roles in this department right now — check back soon, or reach out
// // //               anyway at{" "}
// // //               <a href={`mailto:${APPLY_EMAIL}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // //                 {APPLY_EMAIL}
// // //               </a>
// // //               .
// // //             </p>
// // //           </div>
// // //         ) : (
// // //           <div
// // //             className={
// // //               filteredJobs.length === 1
// // //                 ? "flex justify-center"
// // //                 : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
// // //             }
// // //           >
// // //             {filteredJobs.map((job) => {
// // //               const accent = departmentAccent[job.department];
// // //               const isSingle = filteredJobs.length === 1;

// // //               return (
// // //                 <button
// // //                   key={job.id}
// // //                   onClick={() => setSelectedJob(job)}
// // //                   className={
// // //                     "text-left rounded-[26px] border transition-all duration-300 bg-white hover:-translate-y-1 overflow-hidden group" +
// // //                     (isSingle
// // //                       ? " w-full max-w-4xl grid grid-cols-1 sm:grid-cols-[42%_1fr] items-stretch"
// // //                       : " flex flex-col h-full")
// // //                   }
// // //                   style={{
// // //                     borderColor: "#e8edf5",
// // //                     boxShadow: "0 4px 18px rgba(15,41,66,0.06)",
// // //                   }}
// // //                   onMouseEnter={(e) => {
// // //                     e.currentTarget.style.boxShadow = `0 18px 40px ${accent}26`;
// // //                     e.currentTarget.style.borderColor = accent;
// // //                   }}
// // //                   onMouseLeave={(e) => {
// // //                     e.currentTarget.style.boxShadow = "0 4px 18px rgba(15,41,66,0.06)";
// // //                     e.currentTarget.style.borderColor = "#e8edf5";
// // //                   }}
// // //                 >
// // //                   {job.image && (
// // //                     <div
// // //                       className={
// // //                         "relative shrink-0 bg-slate-50 overflow-hidden" +
// // //                         (isSingle
// // //                           ? " w-full h-full aspect-[3/4] sm:aspect-auto"
// // //                           : " w-full aspect-[3/4]")
// // //                       }
// // //                     >
// // //                       <img
// // //                         src={job.image}
// // //                         alt={`${job.title} job opening`}
// // //                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
// // //                         style={{ objectPosition: "top" }}
// // //                       />
// // //                       {/* soft fade at the bottom edge — only needed on mobile where the
// // //                           image is a fixed-aspect crop above the text, not full-height */}
// // //                       <div
// // //                         className={
// // //                           "absolute inset-x-0 bottom-0 h-16 pointer-events-none" +
// // //                           (isSingle ? " sm:hidden" : "")
// // //                         }
// // //                         style={{
// // //                           background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)",
// // //                         }}
// // //                       />
// // //                     </div>
// // //                   )}

// // //                   <div className={"flex flex-col flex-1 p-6" + (isSingle ? " sm:p-8" : "")}>
// // //                     <div className="flex items-center gap-2.5 mb-4">
// // //                       <span
// // //                         className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
// // //                         style={{ background: `${accent}14` }}
// // //                       >
// // //                         {departmentIcon[job.department]}
// // //                       </span>
// // //                       <span
// // //                         className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full"
// // //                         style={{ color: accent, background: `${accent}14` }}
// // //                       >
// // //                         {job.department.toUpperCase()}
// // //                       </span>
// // //                     </div>

// // //                     <h3
// // //                       className={
// // //                         "font-bold text-slate-800 mb-2.5 leading-snug" +
// // //                         (isSingle ? " text-[19px] sm:text-[22px]" : " text-[16px]")
// // //                       }
// // //                     >
// // //                       {job.title}
// // //                     </h3>
// // //                     <p
// // //                       className={
// // //                         "text-slate-500 leading-relaxed" +
// // //                         (isSingle ? " text-[13.5px] mb-6" : " text-[13px] mb-5 flex-1")
// // //                       }
// // //                     >
// // //                       {job.summary}
// // //                     </p>

// // //                     <div className={"flex flex-wrap gap-2 mb-5"}>
// // //                       <span
// // //                         className="flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full"
// // //                         style={{ background: "#f8fafc", color: "#475569" }}
// // //                       >
// // //                         <MapPin size={12} className="shrink-0" />
// // //                         {job.location}
// // //                       </span>
// // //                       <span
// // //                         className="flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full"
// // //                         style={{ background: "#f8fafc", color: "#475569" }}
// // //                       >
// // //                         <Clock size={12} className="shrink-0" />
// // //                         {job.type} · {job.experience}
// // //                       </span>
// // //                     </div>

// // //                     <span
// // //                       className={
// // //                         "inline-flex items-center justify-center gap-1.5 text-[13px] font-bold rounded-xl py-3 px-5 w-full sm:w-auto transition-colors" +
// // //                         (isSingle ? "" : " mt-auto")
// // //                       }
// // //                       style={{ background: accent, color: "#fff" }}
// // //                     >
// // //                       View Full Details <ArrowRight size={15} />
// // //                     </span>
// // //                   </div>
// // //                 </button>
// // //               );
// // //             })}
// // //           </div>
// // //         )}
// // //       </section>

// // //       {/* ── Detail modal ── */}
// // //       {selectedJob && (
// // //         <div
// // //           className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
// // //           style={{
// // //             background: "rgba(10,20,35,0.6)",
// // //             backdropFilter: "blur(3px)",
// // //             animation: "careersModalFade 0.22s ease-out",
// // //           }}
// // //           onClick={() => setSelectedJob(null)}
// // //         >
// // //           <div
// // //             className="bg-white w-full max-w-2xl rounded-[28px] max-h-[88vh] overflow-hidden shadow-2xl"
// // //             style={{ animation: "careersModalScale 0.28s cubic-bezier(0.16, 1, 0.3, 1)" }}
// // //             onClick={(e) => e.stopPropagation()}
// // //           >
// // //           <div className="careers-modal-scroll max-h-[88vh] overflow-y-auto">
// // //             {(selectedJob.popupImage || selectedJob.image) && (
// // //               <img
// // //                 src={selectedJob.popupImage || selectedJob.image}
// // //                 alt={`${selectedJob.title} job opening`}
// // //                 className="w-full h-[220px] sm:h-[300px] object-cover bg-slate-50"
// // //               />
// // //             )}

// // //             <div
// // //               className="sticky top-0 flex items-start justify-between gap-4 px-6 sm:px-8 py-5 sm:py-6 bg-white z-10"
// // //               style={{ borderBottom: "1px solid #f0f0f0" }}
// // //             >
// // //               <div className="min-w-0">
// // //                 <span
// // //                   className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full inline-block mb-3"
// // //                   style={{
// // //                     color: departmentAccent[selectedJob.department],
// // //                     background: `${departmentAccent[selectedJob.department]}14`,
// // //                   }}
// // //                 >
// // //                   {selectedJob.department.toUpperCase()}
// // //                 </span>
// // //                 <h2 className="text-[19px] sm:text-[23px] font-bold text-slate-800 leading-snug">
// // //                   {selectedJob.title}
// // //                 </h2>
// // //                 <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2.5 text-[12.5px] text-slate-500">
// // //                   <span className="flex items-center gap-1.5">
// // //                     <MapPin size={13} className="shrink-0" /> {selectedJob.location}
// // //                   </span>
// // //                   <span className="flex items-center gap-1.5">
// // //                     <Briefcase size={13} className="shrink-0" /> {selectedJob.type}
// // //                   </span>
// // //                   <span className="flex items-center gap-1.5">
// // //                     <Clock size={13} className="shrink-0" /> {selectedJob.experience}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //               <button
// // //                 onClick={() => setSelectedJob(null)}
// // //                 className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
// // //                 style={{ background: "#f8fafc", color: "#64748b" }}
// // //                 onMouseEnter={(e) => {
// // //                   e.currentTarget.style.background = "#f1f5f9";
// // //                   e.currentTarget.style.color = "#334155";
// // //                 }}
// // //                 onMouseLeave={(e) => {
// // //                   e.currentTarget.style.background = "#f8fafc";
// // //                   e.currentTarget.style.color = "#64748b";
// // //                 }}
// // //                 aria-label="Close"
// // //               >
// // //                 <X size={18} />
// // //               </button>
// // //             </div>

// // //             <div className="px-6 sm:px-8 py-6 sm:py-7 space-y-7">
// // //               <p className="text-[13.5px] text-slate-600 leading-relaxed">
// // //                 {selectedJob.summary}
// // //               </p>

// // //               {selectedJob.qualification && (
// // //                 <div
// // //                   className="flex items-start gap-3 rounded-2xl px-4 py-3.5"
// // //                   style={{ background: `${departmentAccent[selectedJob.department]}0c` }}
// // //                 >
// // //                   <GraduationCap
// // //                     size={17}
// // //                     className="mt-0.5 shrink-0"
// // //                     style={{ color: departmentAccent[selectedJob.department] }}
// // //                   />
// // //                   <p className="text-[13px] text-slate-600 leading-relaxed">
// // //                     <span className="font-bold text-slate-800">Qualification — </span>
// // //                     {selectedJob.qualification}
// // //                   </p>
// // //                 </div>
// // //               )}

// // //               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
// // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
// // //                   <span
// // //                     className="w-1 h-4 rounded-full inline-block"
// // //                     style={{ background: departmentAccent[selectedJob.department] }}
// // //                   />
// // //                   What you&apos;ll do
// // //                 </h3>
// // //                 <ul className="space-y-2.5">
// // //                   {selectedJob.responsibilities.map((r, i) => (
// // //                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
// // //                       <CheckCircle2
// // //                         size={15}
// // //                         className="mt-0.5 shrink-0"
// // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // //                       />
// // //                       {r}
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>

// // //               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
// // //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
// // //                   <span
// // //                     className="w-1 h-4 rounded-full inline-block"
// // //                     style={{ background: departmentAccent[selectedJob.department] }}
// // //                   />
// // //                   What we&apos;re looking for
// // //                 </h3>
// // //                 <ul className="space-y-2.5">
// // //                   {selectedJob.requirements.map((r, i) => (
// // //                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
// // //                       <CheckCircle2
// // //                         size={15}
// // //                         className="mt-0.5 shrink-0"
// // //                         style={{ color: departmentAccent[selectedJob.department] }}
// // //                       />
// // //                       {r}
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>

// // //               <div className="pt-2 border-t" style={{ borderColor: "#f1f5f9" }}>
// // //                 <div className="flex flex-col sm:flex-row gap-3 mt-6">
// // //                   <a
// // //                     href={waLink(selectedJob)}
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
// // //                     style={{ background: "#25D366", boxShadow: "0 8px 20px rgba(37,211,102,0.28)" }}
// // //                   >
// // //                     <MessageCircle size={16} /> Apply via WhatsApp
// // //                   </a>
// // //                   <a
// // //                     href={mailLink(selectedJob)}
// // //                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold no-underline transition-transform hover:-translate-y-0.5"
// // //                     style={{ border: "1.5px solid #2A5DA8", color: "#2A5DA8" }}
// // //                   >
// // //                     <Mail size={16} /> Apply via Email
// // //                   </a>
// // //                 </div>

// // //                 <p className="flex items-center justify-center gap-1.5 text-[12px] text-slate-400 mt-5">
// // //                   <Phone size={12} />
// // //                   Or call us directly at{" "}
// // //                   <a href={`tel:+${APPLY_WHATSAPP_NUMBER}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// // //                     {APPLY_PHONE_DISPLAY}
// // //                   </a>
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //       </main>
// // //       <Footer />

// // //       <style>{`
// // //         @keyframes careersModalFade {
// // //           from { opacity: 0; }
// // //           to { opacity: 1; }
// // //         }
// // //         @keyframes careersModalScale {
// // //           from { opacity: 0; transform: scale(0.94) translateY(8px); }
// // //           to { opacity: 1; transform: scale(1) translateY(0); }
// // //         }

// // //         /* Neutral scrollbar override — this page previously inherited a green
// // //            scrollbar thumb from a global style; force it back to a plain gray. */
// // //         .careers-page-scroll {
// // //           scrollbar-color: #cbd5e1 transparent;
// // //         }
// // //         .careers-page-scroll::-webkit-scrollbar {
// // //           width: 8px;
// // //         }
// // //         .careers-page-scroll::-webkit-scrollbar-track {
// // //           background: transparent;
// // //         }
// // //         .careers-page-scroll::-webkit-scrollbar-thumb {
// // //           background-color: #cbd5e1;
// // //           border-radius: 8px;
// // //         }
// // //         .careers-page-scroll::-webkit-scrollbar-thumb:hover {
// // //           background-color: #94a3b8;
// // //         }

// // //         /* Modal scroll container — scrolling stays functional, the scrollbar
// // //            itself is just not shown so it doesn't poke out past the rounded corners. */
// // //         .careers-modal-scroll {
// // //           scrollbar-width: none; /* Firefox */
// // //           -ms-overflow-style: none; /* old Edge/IE */
// // //         }
// // //         .careers-modal-scroll::-webkit-scrollbar {
// // //           display: none; /* Chrome/Safari */
// // //         }
// // //       `}</style>
// // //     </>
// // //   );
// // // }
// // "use client";
// // import { useState, useMemo } from "react";
// // import { X, MapPin, Clock, Briefcase, ArrowRight, CheckCircle2, GraduationCap, MessageCircle, Mail, Phone } from "lucide-react";
// // import Navbar from "@/components/Navbar";
// // import Footer from "@/components/Footer";

// // /* ────────────────────────────────────────────────────────────
// //    JOB DATA
// //    Replace / extend this array with real openings. Each entry
// //    drives both the listing card and the detail panel — nothing
// //    else needs to change when you add or remove a role.
// //    ──────────────────────────────────────────────────────────── */
// // type Job = {
// //   id: string;
// //   title: string;
// //   department: "Aquaculture" | "Poultry" | "Cattle" | "Corporate";
// //   location: string;
// //   type: "Full-time" | "Part-time" | "Internship";
// //   experience: string;
// //   qualification?: string;
// //   summary: string;
// //   responsibilities: string[];
// //   requirements: string[];
// //   /** Short perks shown as checkmark chips in the "Key Highlights" section on the card. */
// //   highlights?: string[];
// //   /** Flyer / poster image for this role — shown on the listing card. */
// //   image?: string;
// //   /** Optional image shown instead of `image` inside the detail popup/modal. */
// //   popupImage?: string;
// // };

// // const departmentAccent: Record<Job["department"], string> = {
// //   Aquaculture: "#0ea5e9",
// //   Poultry: "#f59e0b",
// //   Cattle: "#22c55e",
// //   Corporate: "#2A5DA8",
// // };

// // const departmentIcon: Record<Job["department"], string> = {
// //   Aquaculture: "🦐",
// //   Poultry: "🐔",
// //   Cattle: "🐄",
// //   Corporate: "🏢",
// // };

// // const jobs: Job[] = [
// //   {
// //     id: "area-sales-executive-aqua",
// //     title: "Area Sales Executive",
// //     department: "Aquaculture",
// //     location: "Bhimavaram, Kaikaluru, Amalapuram, Kakinada",
// //     type: "Full-time",
// //     experience: "2-3 years (aqua medicine marketing experience preferred)",
// //     qualification: "B.Sc / M.Sc in Fisheries Science or a related field",
// //     summary:
// //       "Drive sales of Innovare's aquaculture health products across the Bhimavaram–Kakinada belt, working directly with farmers and distributors to grow a loyal territory.",
// //     image: "/images/job.jpeg",
// //     popupImage: "/images/job-popup.jpg",
// //     highlights: [
// //       "Attractive Incentives",
// //       "Career Growth",
// //       "Fuel Allowance",
// //       "Performance Bonus",
// //       "Training Provided",
// //     ],
// //     responsibilities: [
// //       "Promote and sell aquaculture health products across the assigned territory",
// //       "Build and maintain relationships with farmers and distributors",
// //       "Meet sales targets and report field activity regularly",
// //       "Provide on-ground product guidance and support to farmers",
// //     ],
// //     requirements: [
// //       "B.Sc / M.Sc in Fisheries Science or a related field",
// //       "2-3 years of experience, aqua medicine marketing preferred",
// //       "Willingness to travel across Bhimavaram, Kaikaluru, Amalapuram, and Kakinada",
// //       "Strong communication skills in Telugu and English",
// //     ],
// //   },
// // ];

// // const departments = ["All", "Aquaculture", "Poultry", "Cattle", "Corporate"] as const;

// // /* Contact details from the official job flyer */
// // const APPLY_WHATSAPP_NUMBER = "917799872555"; // country code + number, no symbols
// // const APPLY_EMAIL = "info@innovarebiopharma.com";
// // const APPLY_PHONE_DISPLAY = "77998 72555";

// // export default function CareersPage() {
// //   const [activeDept, setActiveDept] = useState<(typeof departments)[number]>("All");
// //   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

// //   const filteredJobs = useMemo(
// //     () => (activeDept === "All" ? jobs : jobs.filter((j) => j.department === activeDept)),
// //     [activeDept]
// //   );

// //   const waLink = (job: Job) =>
// //     `https://wa.me/${APPLY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
// //       `Hi Innovare Biopharma, I'd like to apply for the ${job.title} role (${job.location}).`
// //     )}`;

// //   const mailLink = (job: Job) =>
// //     `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
// //       `Application: ${job.title}`
// //     )}&body=${encodeURIComponent(
// //       `Hi Innovare Biopharma team,\n\nI'd like to apply for the ${job.title} role (${job.location}).\n\nName:\nPhone:\nResume link:\n\n`
// //     )}`;

// //   return (
// //     <>
// //       <Navbar />
// //       <main className="careers-page-scroll min-h-screen bg-white pt-16 sm:pt-[76px] lg:pt-[84px] xl:pt-[92px]">
// //       {/* ── Hero ── */}
// //       <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
// //         {/* Background photo — drop your image at public/images/careers-hero.jpg.
// //             Swap the src below if you want a different filename/path. */}
// //         <img
// //           src="/images/careers.png"
// //           alt=""
// //           aria-hidden="true"
// //           className="absolute inset-0 w-full h-full object-cover"
// //         />

// //         <div className="relative max-w-4xl mx-auto text-center">
// //           <div
// //             className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-[11px] sm:text-[12px] font-semibold tracking-wide"
// //             style={{
// //               color: "#7fd4ff",
// //               border: "1px solid rgba(127,212,255,0.4)",
// //               background: "rgba(7,23,38,0.55)",
// //             }}
// //           >
// //             <span
// //               className="inline-block w-2 h-2 rounded-full"
// //               style={{ background: "#38bdf8" }}
// //             />
// //             WE&apos;RE HIRING
// //           </div>

// //           <h1
// //             className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] mb-5"
// //             style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}
// //           >
// //             Build the future of{" "}
// //             <span
// //               style={{
// //                 background: "linear-gradient(90deg, #3b6ef0 0%, #8fc4ff 100%)",
// //                 WebkitBackgroundClip: "text",
// //                 WebkitTextFillColor: "transparent",
// //                 backgroundClip: "text",
// //               }}
// //             >
// //               aquaculture health
// //             </span>{" "}
// //             with us
// //           </h1>

// //           <p
// //             className="text-[14px] sm:text-[16px] text-white max-w-2xl mx-auto leading-relaxed"
// //             style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55)" }}
// //           >
// //             From farm-level fieldwork to formulation science, every role at Innovare
// //             connects back to healthier ponds, farms, and livelihoods. Here&apos;s what
// //             we&apos;re hiring for right now.
// //           </p>

// //           <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-10 pt-8 border-t border-white/30">
// //             {[
// //               { label: "OPEN ROLES", value: String(jobs.length) },
// //               { label: "DEPARTMENTS", value: String(new Set(jobs.map((j) => j.department)).size) },
// //               { label: "FIELD + OFFICE", value: "Hybrid" },
// //             ].map((s) => (
// //               <div key={s.label} className="text-center">
// //                 <div
// //                   className="text-[22px] sm:text-[26px] font-bold text-white"
// //                   style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
// //                 >
// //                   {s.value}
// //                 </div>
// //                 <div
// //                   className="text-[10px] sm:text-[11px] tracking-[0.15em] text-white/90 mt-1"
// //                   style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
// //                 >
// //                   {s.label}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── Filters + listing ── */}
// //       <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
// //         <div className="flex flex-wrap gap-2 mb-10 justify-center">
// //           {departments.map((d) => {
// //             const active = activeDept === d;
// //             return (
// //               <button
// //                 key={d}
// //                 onClick={() => setActiveDept(d)}
// //                 className="px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all"
// //                 style={{
// //                   background: active ? "#2A5DA8" : "#f1f5f9",
// //                   color: active ? "#fff" : "#475569",
// //                   border: active ? "1px solid #2A5DA8" : "1px solid #e2e8f0",
// //                 }}
// //               >
// //                 {d}
// //               </button>
// //             );
// //           })}
// //         </div>

// //         {filteredJobs.length === 0 ? (
// //           <div className="text-center py-20">
// //             <p className="text-[15px] text-slate-500">
// //               No open roles in this department right now — check back soon, or reach out
// //               anyway at{" "}
// //               <a href={`mailto:${APPLY_EMAIL}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// //                 {APPLY_EMAIL}
// //               </a>
// //               .
// //             </p>
// //           </div>
// //         ) : (
// //           <div
// //             className={
// //               filteredJobs.length === 1
// //                 ? "flex justify-center"
// //                 : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
// //             }
// //           >
// //             {filteredJobs.map((job) => {
// //               const accent = departmentAccent[job.department];
// //               const isSingle = filteredJobs.length === 1;

// //               if (isSingle) {
// //                 const metaItems = [
// //                   { icon: MapPin, label: "Location", value: job.location },
// //                   { icon: Briefcase, label: "Employment Type", value: job.type },
// //                   { icon: Clock, label: "Experience", value: job.experience },
// //                   ...(job.qualification
// //                     ? [{ icon: GraduationCap, label: "Qualification", value: job.qualification }]
// //                     : []),
// //                 ];

// //                 return (
// //                   <div
// //                     key={job.id}
// //                     className="w-full max-w-4xl rounded-[22px] border bg-white overflow-hidden grid grid-cols-1 sm:grid-cols-[36%_1fr] transition-all duration-300 hover:-translate-y-1"
// //                     style={{
// //                       borderColor: "#e8edf5",
// //                       boxShadow: "0 4px 18px rgba(15,41,66,0.06)",
// //                     }}
// //                     onMouseEnter={(e) => {
// //                       e.currentTarget.style.boxShadow = `0 18px 40px ${accent}26`;
// //                       e.currentTarget.style.borderColor = accent;
// //                     }}
// //                     onMouseLeave={(e) => {
// //                       e.currentTarget.style.boxShadow = "0 4px 18px rgba(15,41,66,0.06)";
// //                       e.currentTarget.style.borderColor = "#e8edf5";
// //                     }}
// //                   >
// //                     {job.image && (
// //                       <div className="relative shrink-0 bg-slate-50 overflow-hidden aspect-[3/4] sm:aspect-auto">
// //                         <img
// //                           src={job.image}
// //                           alt={`${job.title} job opening`}
// //                           className="w-full h-full object-cover"
// //                           style={{ objectPosition: "top" }}
// //                         />
// //                         <div
// //                           className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10.5px] font-bold tracking-wide backdrop-blur-md"
// //                           style={{ background: "rgba(255,255,255,0.92)", color: accent }}
// //                         >
// //                           <span className="text-[13px] leading-none">{departmentIcon[job.department]}</span>
// //                           {job.department.toUpperCase()}
// //                         </div>
// //                       </div>
// //                     )}

// //                     <div className="flex flex-col p-7 sm:p-9 gap-5">
// //                       <h3 className="text-[22px] sm:text-[26px] font-bold text-slate-800 leading-snug">
// //                         {job.title}
// //                       </h3>

// //                       <p className="line-clamp-2 text-[13.5px] text-slate-500 leading-relaxed">
// //                         {job.summary}
// //                       </p>

// //                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// //                         {metaItems.map(({ icon: Icon, label, value }) => (
// //                           <div
// //                             key={label}
// //                             className="flex items-start gap-2.5 rounded-xl border p-3.5"
// //                             style={{ borderColor: "#eef1f6", background: "#f9fafb" }}
// //                           >
// //                             <span
// //                               className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
// //                               style={{ background: `${accent}14`, color: accent }}
// //                             >
// //                               <Icon size={15} />
// //                             </span>
// //                             <div className="min-w-0">
// //                               <div className="text-[9.5px] font-bold tracking-wide text-slate-400 mb-0.5">
// //                                 {label.toUpperCase()}
// //                               </div>
// //                               <div className="text-[12.5px] font-semibold text-slate-700 leading-snug">
// //                                 {value}
// //                               </div>
// //                             </div>
// //                           </div>
// //                         ))}
// //                       </div>

// //                       {job.highlights && job.highlights.length > 0 && (
// //                         <div>
// //                           <div className="text-[11px] font-bold tracking-wide text-slate-400 mb-2.5">
// //                             KEY HIGHLIGHTS
// //                           </div>
// //                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
// //                             {job.highlights.map((h) => (
// //                               <div key={h} className="flex items-center gap-2 text-[12.5px] font-medium text-slate-600">
// //                                 <CheckCircle2 size={15} className="shrink-0" style={{ color: accent }} />
// //                                 {h}
// //                               </div>
// //                             ))}
// //                           </div>
// //                         </div>
// //                       )}

// //                       <div className="flex flex-col sm:flex-row gap-3 pt-1">
// //                         <button
// //                           onClick={() => setSelectedJob(job)}
// //                           className="flex-1 flex items-center justify-center gap-1.5 rounded-xl py-3 text-[13px] font-bold transition-colors"
// //                           style={{ border: `1.5px solid ${accent}`, color: accent, background: "transparent" }}
// //                           onMouseEnter={(e) => (e.currentTarget.style.background = `${accent}0c`)}
// //                           onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
// //                         >
// //                           View Details
// //                         </button>
// //                         <a
// //                           href={waLink(job)}
// //                           target="_blank"
// //                           rel="noopener noreferrer"
// //                           className="flex-1 flex items-center justify-center gap-1.5 rounded-xl py-3 text-[13px] font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
// //                           style={{ background: accent, boxShadow: `0 8px 20px ${accent}33` }}
// //                         >
// //                           Apply Now <ArrowRight size={15} />
// //                         </a>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 );
// //               }

// //               return (
// //                 <button
// //                   key={job.id}
// //                   onClick={() => setSelectedJob(job)}
// //                   className="text-left rounded-[26px] border transition-all duration-300 bg-white hover:-translate-y-1 overflow-hidden group flex flex-col h-full"
// //                   style={{
// //                     borderColor: "#e8edf5",
// //                     boxShadow: "0 4px 18px rgba(15,41,66,0.06)",
// //                   }}
// //                   onMouseEnter={(e) => {
// //                     e.currentTarget.style.boxShadow = `0 18px 40px ${accent}26`;
// //                     e.currentTarget.style.borderColor = accent;
// //                   }}
// //                   onMouseLeave={(e) => {
// //                     e.currentTarget.style.boxShadow = "0 4px 18px rgba(15,41,66,0.06)";
// //                     e.currentTarget.style.borderColor = "#e8edf5";
// //                   }}
// //                 >
// //                   {job.image && (
// //                     <div className="relative shrink-0 bg-slate-50 overflow-hidden w-full aspect-[3/4]">
// //                       <img
// //                         src={job.image}
// //                         alt={`${job.title} job opening`}
// //                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
// //                         style={{ objectPosition: "top" }}
// //                       />
// //                       {/* soft fade at the bottom edge so the crop feels intentional, not abrupt */}
// //                       <div
// //                         className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
// //                         style={{
// //                           background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)",
// //                         }}
// //                       />
// //                     </div>
// //                   )}

// //                   <div className="flex flex-col flex-1 p-6">
// //                     <div className="flex items-center gap-2.5 mb-4">
// //                       <span
// //                         className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
// //                         style={{ background: `${accent}14` }}
// //                       >
// //                         {departmentIcon[job.department]}
// //                       </span>
// //                       <span
// //                         className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full"
// //                         style={{ color: accent, background: `${accent}14` }}
// //                       >
// //                         {job.department.toUpperCase()}
// //                       </span>
// //                     </div>

// //                     <h3 className="font-bold text-slate-800 mb-2.5 leading-snug text-[16px]">
// //                       {job.title}
// //                     </h3>
// //                     <p className="text-slate-500 leading-relaxed text-[13px] mb-5 flex-1">
// //                       {job.summary}
// //                     </p>

// //                     <div className="flex flex-wrap gap-2 mb-5">
// //                       <span
// //                         className="flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full"
// //                         style={{ background: "#f8fafc", color: "#475569" }}
// //                       >
// //                         <MapPin size={12} className="shrink-0" />
// //                         {job.location}
// //                       </span>
// //                       <span
// //                         className="flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full"
// //                         style={{ background: "#f8fafc", color: "#475569" }}
// //                       >
// //                         <Clock size={12} className="shrink-0" />
// //                         {job.type} · {job.experience}
// //                       </span>
// //                     </div>

// //                     <span
// //                       className="inline-flex items-center justify-center gap-1.5 text-[13px] font-bold rounded-xl py-3 px-5 w-full sm:w-auto transition-colors mt-auto"
// //                       style={{ background: accent, color: "#fff" }}
// //                     >
// //                       View Full Details <ArrowRight size={15} />
// //                     </span>
// //                   </div>
// //                 </button>
// //               );
// //             })}
// //           </div>
// //         )}
// //       </section>

// //       {/* ── Detail modal ── */}
// //       {selectedJob && (
// //         <div
// //           className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
// //           style={{
// //             background: "rgba(10,20,35,0.6)",
// //             backdropFilter: "blur(3px)",
// //             animation: "careersModalFade 0.22s ease-out",
// //           }}
// //           onClick={() => setSelectedJob(null)}
// //         >
// //           <div
// //             className="bg-white w-full max-w-2xl rounded-[28px] max-h-[88vh] overflow-hidden shadow-2xl"
// //             style={{ animation: "careersModalScale 0.28s cubic-bezier(0.16, 1, 0.3, 1)" }}
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //           <div className="careers-modal-scroll max-h-[88vh] overflow-y-auto">
// //             {(selectedJob.popupImage || selectedJob.image) && (
// //               <img
// //                 src={selectedJob.popupImage || selectedJob.image}
// //                 alt={`${selectedJob.title} job opening`}
// //                 className="w-full h-[220px] sm:h-[300px] object-cover bg-slate-50"
// //               />
// //             )}

// //             <div
// //               className="sticky top-0 flex items-start justify-between gap-4 px-6 sm:px-8 py-5 sm:py-6 bg-white z-10"
// //               style={{ borderBottom: "1px solid #f0f0f0" }}
// //             >
// //               <div className="min-w-0">
// //                 <span
// //                   className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full inline-block mb-3"
// //                   style={{
// //                     color: departmentAccent[selectedJob.department],
// //                     background: `${departmentAccent[selectedJob.department]}14`,
// //                   }}
// //                 >
// //                   {selectedJob.department.toUpperCase()}
// //                 </span>
// //                 <h2 className="text-[19px] sm:text-[23px] font-bold text-slate-800 leading-snug">
// //                   {selectedJob.title}
// //                 </h2>
// //                 <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2.5 text-[12.5px] text-slate-500">
// //                   <span className="flex items-center gap-1.5">
// //                     <MapPin size={13} className="shrink-0" /> {selectedJob.location}
// //                   </span>
// //                   <span className="flex items-center gap-1.5">
// //                     <Briefcase size={13} className="shrink-0" /> {selectedJob.type}
// //                   </span>
// //                   <span className="flex items-center gap-1.5">
// //                     <Clock size={13} className="shrink-0" /> {selectedJob.experience}
// //                   </span>
// //                 </div>
// //               </div>
// //               <button
// //                 onClick={() => setSelectedJob(null)}
// //                 className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
// //                 style={{ background: "#f8fafc", color: "#64748b" }}
// //                 onMouseEnter={(e) => {
// //                   e.currentTarget.style.background = "#f1f5f9";
// //                   e.currentTarget.style.color = "#334155";
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.currentTarget.style.background = "#f8fafc";
// //                   e.currentTarget.style.color = "#64748b";
// //                 }}
// //                 aria-label="Close"
// //               >
// //                 <X size={18} />
// //               </button>
// //             </div>

// //             <div className="px-6 sm:px-8 py-6 sm:py-7 space-y-7">
// //               <p className="text-[13.5px] text-slate-600 leading-relaxed">
// //                 {selectedJob.summary}
// //               </p>

// //               {selectedJob.qualification && (
// //                 <div
// //                   className="flex items-start gap-3 rounded-2xl px-4 py-3.5"
// //                   style={{ background: `${departmentAccent[selectedJob.department]}0c` }}
// //                 >
// //                   <GraduationCap
// //                     size={17}
// //                     className="mt-0.5 shrink-0"
// //                     style={{ color: departmentAccent[selectedJob.department] }}
// //                   />
// //                   <p className="text-[13px] text-slate-600 leading-relaxed">
// //                     <span className="font-bold text-slate-800">Qualification — </span>
// //                     {selectedJob.qualification}
// //                   </p>
// //                 </div>
// //               )}

// //               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
// //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
// //                   <span
// //                     className="w-1 h-4 rounded-full inline-block"
// //                     style={{ background: departmentAccent[selectedJob.department] }}
// //                   />
// //                   What you&apos;ll do
// //                 </h3>
// //                 <ul className="space-y-2.5">
// //                   {selectedJob.responsibilities.map((r, i) => (
// //                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
// //                       <CheckCircle2
// //                         size={15}
// //                         className="mt-0.5 shrink-0"
// //                         style={{ color: departmentAccent[selectedJob.department] }}
// //                       />
// //                       {r}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>

// //               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
// //                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
// //                   <span
// //                     className="w-1 h-4 rounded-full inline-block"
// //                     style={{ background: departmentAccent[selectedJob.department] }}
// //                   />
// //                   What we&apos;re looking for
// //                 </h3>
// //                 <ul className="space-y-2.5">
// //                   {selectedJob.requirements.map((r, i) => (
// //                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
// //                       <CheckCircle2
// //                         size={15}
// //                         className="mt-0.5 shrink-0"
// //                         style={{ color: departmentAccent[selectedJob.department] }}
// //                       />
// //                       {r}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>

// //               <div className="pt-2 border-t" style={{ borderColor: "#f1f5f9" }}>
// //                 <div className="flex flex-col sm:flex-row gap-3 mt-6">
// //                   <a
// //                     href={waLink(selectedJob)}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
// //                     style={{ background: "#25D366", boxShadow: "0 8px 20px rgba(37,211,102,0.28)" }}
// //                   >
// //                     <MessageCircle size={16} /> Apply via WhatsApp
// //                   </a>
// //                   <a
// //                     href={mailLink(selectedJob)}
// //                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold no-underline transition-transform hover:-translate-y-0.5"
// //                     style={{ border: "1.5px solid #2A5DA8", color: "#2A5DA8" }}
// //                   >
// //                     <Mail size={16} /> Apply via Email
// //                   </a>
// //                 </div>

// //                 <p className="flex items-center justify-center gap-1.5 text-[12px] text-slate-400 mt-5">
// //                   <Phone size={12} />
// //                   Or call us directly at{" "}
// //                   <a href={`tel:+${APPLY_WHATSAPP_NUMBER}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
// //                     {APPLY_PHONE_DISPLAY}
// //                   </a>
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //           </div>
// //         </div>
// //       )}
// //       </main>
// //       <Footer />

// //       <style>{`
// //         @keyframes careersModalFade {
// //           from { opacity: 0; }
// //           to { opacity: 1; }
// //         }
// //         @keyframes careersModalScale {
// //           from { opacity: 0; transform: scale(0.94) translateY(8px); }
// //           to { opacity: 1; transform: scale(1) translateY(0); }
// //         }

// //         /* Fallback for the two-line summary clamp in case Tailwind's line-clamp
// //            utilities aren't enabled in this project's build. */
// //         .line-clamp-2 {
// //           display: -webkit-box;
// //           -webkit-line-clamp: 2;
// //           -webkit-box-orient: vertical;
// //           overflow: hidden;
// //         }

// //         /* Neutral scrollbar override — this page previously inherited a green
// //            scrollbar thumb from a global style; force it back to a plain gray. */
// //         .careers-page-scroll {
// //           scrollbar-color: #cbd5e1 transparent;
// //         }
// //         .careers-page-scroll::-webkit-scrollbar {
// //           width: 8px;
// //         }
// //         .careers-page-scroll::-webkit-scrollbar-track {
// //           background: transparent;
// //         }
// //         .careers-page-scroll::-webkit-scrollbar-thumb {
// //           background-color: #cbd5e1;
// //           border-radius: 8px;
// //         }
// //         .careers-page-scroll::-webkit-scrollbar-thumb:hover {
// //           background-color: #94a3b8;
// //         }

// //         /* Modal scroll container — scrolling stays functional, the scrollbar
// //            itself is just not shown so it doesn't poke out past the rounded corners. */
// //         .careers-modal-scroll {
// //           scrollbar-width: none; /* Firefox */
// //           -ms-overflow-style: none; /* old Edge/IE */
// //         }
// //         .careers-modal-scroll::-webkit-scrollbar {
// //           display: none; /* Chrome/Safari */
// //         }
// //       `}</style>
// //     </>
// //   );
// // }
// "use client";
// import { useState, useMemo } from "react";
// import { X, MapPin, Clock, Briefcase, ArrowRight, CheckCircle2, GraduationCap, MessageCircle, Mail, Phone } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// /* ────────────────────────────────────────────────────────────
//    JOB DATA
//    Replace / extend this array with real openings. Each entry
//    drives both the listing card and the detail panel — nothing
//    else needs to change when you add or remove a role.
//    ──────────────────────────────────────────────────────────── */
// type Job = {
//   id: string;
//   title: string;
//   department: "Aquaculture" | "Poultry" | "Cattle" | "Corporate";
//   location: string;
//   type: "Full-time" | "Part-time" | "Internship";
//   experience: string;
//   qualification?: string;
//   summary: string;
//   responsibilities: string[];
//   requirements: string[];
//   /** Short perks shown as checkmark chips in the "Key Highlights" section on the card. */
//   highlights?: string[];
//   /** Flyer / poster image for this role — shown on the listing card. */
//   image?: string;
//   /** Optional image shown instead of `image` inside the detail popup/modal. */
//   popupImage?: string;
// };

// const departmentAccent: Record<Job["department"], string> = {
//   Aquaculture: "#0ea5e9",
//   Poultry: "#f59e0b",
//   Cattle: "#22c55e",
//   Corporate: "#2A5DA8",
// };

// const departmentIcon: Record<Job["department"], string> = {
//   Aquaculture: "🦐",
//   Poultry: "🐔",
//   Cattle: "🐄",
//   Corporate: "🏢",
// };

// const jobs: Job[] = [
//   {
//     id: "area-sales-executive-aqua",
//     title: "Area Sales Executive",
//     department: "Aquaculture",
//     location: "Bhimavaram, Kaikaluru, Amalapuram, Kakinada",
//     type: "Full-time",
//     experience: "2-3 years (aqua medicine marketing experience preferred)",
//     qualification: "B.Sc / M.Sc in Fisheries Science or a related field",
//     summary:
//       "Drive sales of Innovare's aquaculture health products across the Bhimavaram–Kakinada belt, working directly with farmers and distributors to grow a loyal territory.",
//     image: "/images/job.jpeg",
//     popupImage: "/images/job-popup.jpg",
//     highlights: [
//       "Attractive Incentives",
//       "Career Growth",
//       "Fuel Allowance",
//       "Performance Bonus",
//       "Training Provided",
//     ],
//     responsibilities: [
//       "Promote and sell aquaculture health products across the assigned territory",
//       "Build and maintain relationships with farmers and distributors",
//       "Meet sales targets and report field activity regularly",
//       "Provide on-ground product guidance and support to farmers",
//     ],
//     requirements: [
//       "B.Sc / M.Sc in Fisheries Science or a related field",
//       "2-3 years of experience, aqua medicine marketing preferred",
//       "Willingness to travel across Bhimavaram, Kaikaluru, Amalapuram, and Kakinada",
//       "Strong communication skills in Telugu and English",
//     ],
//   },
// ];

// const departments = ["All", "Aquaculture"] as const;

// /* Contact details from the official job flyer */
// const APPLY_WHATSAPP_NUMBER = "917799872555"; // country code + number, no symbols
// const APPLY_EMAIL = "info@innovarebiopharma.com";
// const APPLY_PHONE_DISPLAY = "77998 72555";

// export default function CareersPage() {
//   const [activeDept, setActiveDept] = useState<(typeof departments)[number]>("All");
//   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

//   const filteredJobs = useMemo(
//     () => (activeDept === "All" ? jobs : jobs.filter((j) => j.department === activeDept)),
//     [activeDept]
//   );

//   const waLink = (job: Job) =>
//     `https://wa.me/${APPLY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
//       `Hi Innovare Biopharma, I'd like to apply for the ${job.title} role (${job.location}).`
//     )}`;

//   const mailLink = (job: Job) =>
//     `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
//       `Application: ${job.title}`
//     )}&body=${encodeURIComponent(
//       `Hi Innovare Biopharma team,\n\nI'd like to apply for the ${job.title} role (${job.location}).\n\nName:\nPhone:\nResume link:\n\n`
//     )}`;

//   return (
//     <>
//       <Navbar />
//       <main className="careers-page-scroll min-h-screen bg-white pt-16 sm:pt-[76px] lg:pt-[84px] xl:pt-[92px]">
//       {/* ── Hero ── */}
//       <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
//         {/* Background photo — drop your image at public/images/careers-hero.jpg.
//             Swap the src below if you want a different filename/path. */}
//         <img
//           src="/images/careers.png"
//           alt=""
//           aria-hidden="true"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         <div className="relative max-w-4xl mx-auto text-center">
//           <div
//             className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-[11px] sm:text-[12px] font-semibold tracking-wide"
//             style={{
//               color: "#7fd4ff",
//               border: "1px solid rgba(127,212,255,0.4)",
//               background: "rgba(7,23,38,0.55)",
//             }}
//           >
//             <span
//               className="inline-block w-2 h-2 rounded-full"
//               style={{ background: "#38bdf8" }}
//             />
//             WE&apos;RE HIRING
//           </div>

//           <h1
//             className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] mb-5"
//             style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}
//           >
//             Build the future of{" "}
//             <span
//               style={{
//                 background: "linear-gradient(90deg, #3b6ef0 0%, #8fc4ff 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               aquaculture health
//             </span>{" "}
//             with us
//           </h1>

//           <p
//             className="text-[14px] sm:text-[16px] text-white max-w-2xl mx-auto leading-relaxed"
//             style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55)" }}
//           >
//             From farm-level fieldwork to formulation science, every role at Innovare
//             connects back to healthier ponds, farms, and livelihoods. Here&apos;s what
//             we&apos;re hiring for right now.
//           </p>

//           <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-10 pt-8 border-t border-white/30">
//             {[
//               { label: "OPEN ROLES", value: String(jobs.length) },
//               { label: "DEPARTMENTS", value: String(new Set(jobs.map((j) => j.department)).size) },
//               { label: "FIELD + OFFICE", value: "Hybrid" },
//             ].map((s) => (
//               <div key={s.label} className="text-center">
//                 <div
//                   className="text-[22px] sm:text-[26px] font-bold text-white"
//                   style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
//                 >
//                   {s.value}
//                 </div>
//                 <div
//                   className="text-[10px] sm:text-[11px] tracking-[0.15em] text-white/90 mt-1"
//                   style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
//                 >
//                   {s.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Filters + listing ── */}
//       <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
//         <div className="flex flex-wrap gap-2 mb-10 justify-center">
//           {departments.map((d) => {
//             const active = activeDept === d;
//             return (
//               <button
//                 key={d}
//                 onClick={() => setActiveDept(d)}
//                 className="px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all"
//                 style={{
//                   background: active ? "#2A5DA8" : "#f1f5f9",
//                   color: active ? "#fff" : "#475569",
//                   border: active ? "1px solid #2A5DA8" : "1px solid #e2e8f0",
//                 }}
//               >
//                 {d}
//               </button>
//             );
//           })}
//         </div>

//         {filteredJobs.length === 0 ? (
//           <div className="text-center py-20">
//             <p className="text-[15px] text-slate-500">
//               No open roles in this department right now — check back soon, or reach out
//               anyway at{" "}
//               <a href={`mailto:${APPLY_EMAIL}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
//                 {APPLY_EMAIL}
//               </a>
//               .
//             </p>
//           </div>
//         ) : (
//           <div
//             className={
//               filteredJobs.length === 1
//                 ? "flex justify-center"
//                 : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
//             }
//           >
//             {filteredJobs.map((job) => {
//               const accent = departmentAccent[job.department];
//               const isSingle = filteredJobs.length === 1;

//               if (isSingle) {
//                 const metaItems = [
//                   { icon: MapPin, label: "Location", value: job.location },
//                   { icon: Briefcase, label: "Employment Type", value: job.type },
//                   { icon: Clock, label: "Experience", value: job.experience },
//                   ...(job.qualification
//                     ? [{ icon: GraduationCap, label: "Qualification", value: job.qualification }]
//                     : []),
//                 ];

//                 return (
//                   <div
//                     key={job.id}
//                     className="w-full max-w-4xl rounded-[22px] border bg-white overflow-hidden grid grid-cols-1 sm:grid-cols-[36%_1fr] transition-all duration-300 hover:-translate-y-1"
//                     style={{
//                       borderColor: "#e8edf5",
//                       boxShadow: "0 4px 18px rgba(15,41,66,0.06)",
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.boxShadow = `0 18px 40px ${accent}26`;
//                       e.currentTarget.style.borderColor = accent;
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.boxShadow = "0 4px 18px rgba(15,41,66,0.06)";
//                       e.currentTarget.style.borderColor = "#e8edf5";
//                     }}
//                   >
//                     {job.image && (
//                       <div className="relative shrink-0 bg-slate-50 overflow-hidden aspect-[3/4] sm:aspect-auto flex items-center justify-center p-3">
//                         <img
//                           src={job.image}
//                           alt={`${job.title} job opening`}
//                           className="w-full h-full object-contain"
//                         />
//                         <div
//                           className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10.5px] font-bold tracking-wide backdrop-blur-md"
//                           style={{ background: "rgba(255,255,255,0.92)", color: accent }}
//                         >
//                           <span className="text-[13px] leading-none">{departmentIcon[job.department]}</span>
//                           {job.department.toUpperCase()}
//                         </div>
//                       </div>
//                     )}

//                     <div className="flex flex-col p-7 sm:p-9 gap-5">
//                       <h3 className="text-[22px] sm:text-[26px] font-bold text-slate-800 leading-snug">
//                         {job.title}
//                       </h3>

//                       <p className="line-clamp-2 text-[13.5px] text-slate-500 leading-relaxed">
//                         {job.summary}
//                       </p>

//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                         {metaItems.map(({ icon: Icon, label, value }) => (
//                           <div
//                             key={label}
//                             className="flex items-start gap-2.5 rounded-xl border p-3.5"
//                             style={{ borderColor: "#eef1f6", background: "#f9fafb" }}
//                           >
//                             <span
//                               className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
//                               style={{ background: `${accent}14`, color: accent }}
//                             >
//                               <Icon size={15} />
//                             </span>
//                             <div className="min-w-0">
//                               <div className="text-[9.5px] font-bold tracking-wide text-slate-400 mb-0.5">
//                                 {label.toUpperCase()}
//                               </div>
//                               <div className="text-[12.5px] font-semibold text-slate-700 leading-snug">
//                                 {value}
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>

//                       {job.highlights && job.highlights.length > 0 && (
//                         <div>
//                           <div className="text-[11px] font-bold tracking-wide text-slate-400 mb-2.5">
//                             KEY HIGHLIGHTS
//                           </div>
//                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
//                             {job.highlights.map((h) => (
//                               <div key={h} className="flex items-center gap-2 text-[12.5px] font-medium text-slate-600">
//                                 <CheckCircle2 size={15} className="shrink-0" style={{ color: accent }} />
//                                 {h}
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       )}

//                       <div className="flex flex-col sm:flex-row gap-3 pt-1">
//                         <button
//                           onClick={() => setSelectedJob(job)}
//                           className="flex-1 flex items-center justify-center gap-1.5 rounded-xl py-3 text-[13px] font-bold transition-colors"
//                           style={{ border: `1.5px solid ${accent}`, color: accent, background: "transparent" }}
//                           onMouseEnter={(e) => (e.currentTarget.style.background = `${accent}0c`)}
//                           onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
//                         >
//                           View Details
//                         </button>
//                         <a
//                           href={waLink(job)}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex-1 flex items-center justify-center gap-1.5 rounded-xl py-3 text-[13px] font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
//                           style={{ background: accent, boxShadow: `0 8px 20px ${accent}33` }}
//                         >
//                           Apply Now <ArrowRight size={15} />
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               }

//               return (
//                 <button
//                   key={job.id}
//                   onClick={() => setSelectedJob(job)}
//                   className="text-left rounded-[26px] border transition-all duration-300 bg-white hover:-translate-y-1 overflow-hidden group flex flex-col h-full"
//                   style={{
//                     borderColor: "#e8edf5",
//                     boxShadow: "0 4px 18px rgba(15,41,66,0.06)",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.boxShadow = `0 18px 40px ${accent}26`;
//                     e.currentTarget.style.borderColor = accent;
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.boxShadow = "0 4px 18px rgba(15,41,66,0.06)";
//                     e.currentTarget.style.borderColor = "#e8edf5";
//                   }}
//                 >
//                   {job.image && (
//                     <div className="relative shrink-0 bg-slate-50 overflow-hidden w-full aspect-[3/4]">
//                       <img
//                         src={job.image}
//                         alt={`${job.title} job opening`}
//                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
//                         style={{ objectPosition: "top" }}
//                       />
//                       {/* soft fade at the bottom edge so the crop feels intentional, not abrupt */}
//                       <div
//                         className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
//                         style={{
//                           background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)",
//                         }}
//                       />
//                     </div>
//                   )}

//                   <div className="flex flex-col flex-1 p-6">
//                     <div className="flex items-center gap-2.5 mb-4">
//                       <span
//                         className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
//                         style={{ background: `${accent}14` }}
//                       >
//                         {departmentIcon[job.department]}
//                       </span>
//                       <span
//                         className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full"
//                         style={{ color: accent, background: `${accent}14` }}
//                       >
//                         {job.department.toUpperCase()}
//                       </span>
//                     </div>

//                     <h3 className="font-bold text-slate-800 mb-2.5 leading-snug text-[16px]">
//                       {job.title}
//                     </h3>
//                     <p className="text-slate-500 leading-relaxed text-[13px] mb-5 flex-1">
//                       {job.summary}
//                     </p>

//                     <div className="flex flex-wrap gap-2 mb-5">
//                       <span
//                         className="flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full"
//                         style={{ background: "#f8fafc", color: "#475569" }}
//                       >
//                         <MapPin size={12} className="shrink-0" />
//                         {job.location}
//                       </span>
//                       <span
//                         className="flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full"
//                         style={{ background: "#f8fafc", color: "#475569" }}
//                       >
//                         <Clock size={12} className="shrink-0" />
//                         {job.type} · {job.experience}
//                       </span>
//                     </div>

//                     <span
//                       className="inline-flex items-center justify-center gap-1.5 text-[13px] font-bold rounded-xl py-3 px-5 w-full sm:w-auto transition-colors mt-auto"
//                       style={{ background: accent, color: "#fff" }}
//                     >
//                       View Full Details <ArrowRight size={15} />
//                     </span>
//                   </div>
//                 </button>
//               );
//             })}
//           </div>
//         )}
//       </section>

//       {/* ── Detail modal ── */}
//       {selectedJob && (
//         <div
//           className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
//           style={{
//             background: "rgba(10,20,35,0.6)",
//             backdropFilter: "blur(3px)",
//             animation: "careersModalFade 0.22s ease-out",
//           }}
//           onClick={() => setSelectedJob(null)}
//         >
//           <div
//             className="bg-white w-full max-w-2xl rounded-[28px] max-h-[88vh] overflow-hidden shadow-2xl"
//             style={{ animation: "careersModalScale 0.28s cubic-bezier(0.16, 1, 0.3, 1)" }}
//             onClick={(e) => e.stopPropagation()}
//           >
//           <div className="careers-modal-scroll max-h-[88vh] overflow-y-auto">
//             {(selectedJob.popupImage || selectedJob.image) && (
//               <img
//                 src={selectedJob.popupImage || selectedJob.image}
//                 alt={`${selectedJob.title} job opening`}
//                 className="w-full h-[220px] sm:h-[300px] object-cover bg-slate-50"
//               />
//             )}

//             <div
//               className="sticky top-0 flex items-start justify-between gap-4 px-6 sm:px-8 py-5 sm:py-6 bg-white z-10"
//               style={{ borderBottom: "1px solid #f0f0f0" }}
//             >
//               <div className="min-w-0">
//                 <span
//                   className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full inline-block mb-3"
//                   style={{
//                     color: departmentAccent[selectedJob.department],
//                     background: `${departmentAccent[selectedJob.department]}14`,
//                   }}
//                 >
//                   {selectedJob.department.toUpperCase()}
//                 </span>
//                 <h2 className="text-[19px] sm:text-[23px] font-bold text-slate-800 leading-snug">
//                   {selectedJob.title}
//                 </h2>
//                 <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2.5 text-[12.5px] text-slate-500">
//                   <span className="flex items-center gap-1.5">
//                     <MapPin size={13} className="shrink-0" /> {selectedJob.location}
//                   </span>
//                   <span className="flex items-center gap-1.5">
//                     <Briefcase size={13} className="shrink-0" /> {selectedJob.type}
//                   </span>
//                   <span className="flex items-center gap-1.5">
//                     <Clock size={13} className="shrink-0" /> {selectedJob.experience}
//                   </span>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setSelectedJob(null)}
//                 className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
//                 style={{ background: "#f8fafc", color: "#64748b" }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = "#f1f5f9";
//                   e.currentTarget.style.color = "#334155";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = "#f8fafc";
//                   e.currentTarget.style.color = "#64748b";
//                 }}
//                 aria-label="Close"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             <div className="px-6 sm:px-8 py-6 sm:py-7 space-y-7">
//               <p className="text-[13.5px] text-slate-600 leading-relaxed">
//                 {selectedJob.summary}
//               </p>

//               {selectedJob.qualification && (
//                 <div
//                   className="flex items-start gap-3 rounded-2xl px-4 py-3.5"
//                   style={{ background: `${departmentAccent[selectedJob.department]}0c` }}
//                 >
//                   <GraduationCap
//                     size={17}
//                     className="mt-0.5 shrink-0"
//                     style={{ color: departmentAccent[selectedJob.department] }}
//                   />
//                   <p className="text-[13px] text-slate-600 leading-relaxed">
//                     <span className="font-bold text-slate-800">Qualification — </span>
//                     {selectedJob.qualification}
//                   </p>
//                 </div>
//               )}

//               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
//                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
//                   <span
//                     className="w-1 h-4 rounded-full inline-block"
//                     style={{ background: departmentAccent[selectedJob.department] }}
//                   />
//                   What you&apos;ll do
//                 </h3>
//                 <ul className="space-y-2.5">
//                   {selectedJob.responsibilities.map((r, i) => (
//                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
//                       <CheckCircle2
//                         size={15}
//                         className="mt-0.5 shrink-0"
//                         style={{ color: departmentAccent[selectedJob.department] }}
//                       />
//                       {r}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
//                 <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
//                   <span
//                     className="w-1 h-4 rounded-full inline-block"
//                     style={{ background: departmentAccent[selectedJob.department] }}
//                   />
//                   What we&apos;re looking for
//                 </h3>
//                 <ul className="space-y-2.5">
//                   {selectedJob.requirements.map((r, i) => (
//                     <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
//                       <CheckCircle2
//                         size={15}
//                         className="mt-0.5 shrink-0"
//                         style={{ color: departmentAccent[selectedJob.department] }}
//                       />
//                       {r}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="pt-2 border-t" style={{ borderColor: "#f1f5f9" }}>
//                 <div className="flex flex-col sm:flex-row gap-3 mt-6">
//                   <a
//                     href={waLink(selectedJob)}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
//                     style={{ background: "#25D366", boxShadow: "0 8px 20px rgba(37,211,102,0.28)" }}
//                   >
//                     <MessageCircle size={16} /> Apply via WhatsApp
//                   </a>
//                   <a
//                     href={mailLink(selectedJob)}
//                     className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold no-underline transition-transform hover:-translate-y-0.5"
//                     style={{ border: "1.5px solid #2A5DA8", color: "#2A5DA8" }}
//                   >
//                     <Mail size={16} /> Apply via Email
//                   </a>
//                 </div>

//                 <p className="flex items-center justify-center gap-1.5 text-[12px] text-slate-400 mt-5">
//                   <Phone size={12} />
//                   Or call us directly at{" "}
//                   <a href={`tel:+${APPLY_WHATSAPP_NUMBER}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
//                     {APPLY_PHONE_DISPLAY}
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//           </div>
//         </div>
//       )}
//       </main>
//       <Footer />

//       <style>{`
//         @keyframes careersModalFade {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes careersModalScale {
//           from { opacity: 0; transform: scale(0.94) translateY(8px); }
//           to { opacity: 1; transform: scale(1) translateY(0); }
//         }

//         /* Fallback for the two-line summary clamp in case Tailwind's line-clamp
//            utilities aren't enabled in this project's build. */
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         /* Neutral scrollbar override — this page previously inherited a green
//            scrollbar thumb from a global style; force it back to a plain gray. */
//         .careers-page-scroll {
//           scrollbar-color: #cbd5e1 transparent;
//         }
//         .careers-page-scroll::-webkit-scrollbar {
//           width: 8px;
//         }
//         .careers-page-scroll::-webkit-scrollbar-track {
//           background: transparent;
//         }
//         .careers-page-scroll::-webkit-scrollbar-thumb {
//           background-color: #cbd5e1;
//           border-radius: 8px;
//         }
//         .careers-page-scroll::-webkit-scrollbar-thumb:hover {
//           background-color: #94a3b8;
//         }

//         /* Modal scroll container — scrolling stays functional, the scrollbar
//            itself is just not shown so it doesn't poke out past the rounded corners. */
//         .careers-modal-scroll {
//           scrollbar-width: none; /* Firefox */
//           -ms-overflow-style: none; /* old Edge/IE */
//         }
//         .careers-modal-scroll::-webkit-scrollbar {
//           display: none; /* Chrome/Safari */
//         }
//       `}</style>
//     </>
//   );
// }
"use client";
import { useState, useMemo } from "react";
import { X, MapPin, Clock, Briefcase, ArrowRight, CheckCircle2, GraduationCap, MessageCircle, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ────────────────────────────────────────────────────────────
   JOB DATA
   Replace / extend this array with real openings. Each entry
   drives both the listing card and the detail panel — nothing
   else needs to change when you add or remove a role.
   ──────────────────────────────────────────────────────────── */
type Job = {
  id: string;
  title: string;
  department: "Aquaculture" | "Poultry" | "Cattle" | "Corporate";
  location: string;
  type: "Full-time" | "Part-time" | "Internship";
  experience: string;
  qualification?: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  /** Short perks shown as checkmark chips in the "Key Highlights" section on the card. */
  highlights?: string[];
  /** Flyer / poster image for this role — shown on the listing card. */
  image?: string;
  /** Optional image shown instead of `image` inside the detail popup/modal. */
  popupImage?: string;
};

const departmentAccent: Record<Job["department"], string> = {
  Aquaculture: "#0ea5e9",
  Poultry: "#f59e0b",
  Cattle: "#22c55e",
  Corporate: "#2A5DA8",
};

const departmentIcon: Record<Job["department"], string> = {
  Aquaculture: "🦐",
  Poultry: "🐔",
  Cattle: "🐄",
  Corporate: "🏢",
};

const jobs: Job[] = [
  {
    id: "area-sales-executive-aqua",
    title: "Area Sales Executive",
    department: "Aquaculture",
    location: "Bhimavaram, Kaikaluru, Amalapuram, Kakinada",
    type: "Full-time",
    experience: "2-3 years (aqua medicine marketing experience preferred)",
    qualification: "B.Sc / M.Sc in Fisheries Science or a related field",
    summary:
      "Drive sales of Innovare's aquaculture health products across the Bhimavaram–Kakinada belt, working directly with farmers and distributors to grow a loyal territory.",
    image: "/images/job.jpeg",
    popupImage: "/images/job-popup.jpg",
    highlights: [
      "Attractive Incentives",
      "Career Growth",
      "Fuel Allowance",
      "Performance Bonus",
      "Training Provided",
    ],
    responsibilities: [
      "Promote and sell aquaculture health products across the assigned territory",
      "Build and maintain relationships with farmers and distributors",
      "Meet sales targets and report field activity regularly",
      "Provide on-ground product guidance and support to farmers",
    ],
    requirements: [
      "B.Sc / M.Sc in Fisheries Science or a related field",
      "2-3 years of experience, aqua medicine marketing preferred",
      "Willingness to travel across Bhimavaram, Kaikaluru, Amalapuram, and Kakinada",
      "Strong communication skills in Telugu and English",
    ],
  },
];

const departments = ["All", "Aquaculture"] as const;

/* Contact details from the official job flyer */
const APPLY_WHATSAPP_NUMBER = "917799872555"; // country code + number, no symbols
const APPLY_EMAIL = "info@innovarebiopharma.com";
const APPLY_PHONE_DISPLAY = "77998 72555";

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState<(typeof departments)[number]>("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const filteredJobs = useMemo(
    () => (activeDept === "All" ? jobs : jobs.filter((j) => j.department === activeDept)),
    [activeDept]
  );

  const waLink = (job: Job) =>
    `https://wa.me/${APPLY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Hi Innovare Biopharma, I'd like to apply for the ${job.title} role (${job.location}).`
    )}`;

  const mailLink = (job: Job) =>
    `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
      `Application: ${job.title}`
    )}&body=${encodeURIComponent(
      `Hi Innovare Biopharma team,\n\nI'd like to apply for the ${job.title} role (${job.location}).\n\nName:\nPhone:\nResume link:\n\n`
    )}`;

  return (
    <>
      <Navbar />
      <main className="careers-page-scroll min-h-screen bg-white pt-16 sm:pt-[76px] lg:pt-[84px] xl:pt-[92px]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        {/* Background photo — drop your image at public/images/careers-hero.jpg.
            Swap the src below if you want a different filename/path. */}
        <img
          src="/images/careers.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-[11px] sm:text-[12px] font-semibold tracking-wide"
            style={{
              color: "#7fd4ff",
              border: "1px solid rgba(127,212,255,0.4)",
              background: "rgba(7,23,38,0.55)",
            }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: "#38bdf8" }}
            />
            WE&apos;RE HIRING
          </div>

          <h1
            className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] mb-5"
            style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}
          >
            Build the future of{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #4C7EE8 0%, #6E97EE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              aquaculture health
            </span>{" "}
            with us
          </h1>

          <p
            className="text-[14px] sm:text-[16px] text-white max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55)" }}
          >
            From farm-level fieldwork to formulation science, every role at Innovare
            connects back to healthier ponds, farms, and livelihoods. Here&apos;s what
            we&apos;re hiring for right now.
          </p>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-10 pt-8 border-t border-white/30">
            {[
              { label: "OPEN ROLES", value: String(jobs.length) },
              { label: "DEPARTMENTS", value: String(new Set(jobs.map((j) => j.department)).size) },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-[22px] sm:text-[26px] font-bold text-white"
                  style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[10px] sm:text-[11px] tracking-[0.15em] text-white/90 mt-1"
                  style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filters + listing ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {departments.map((d) => {
            const active = activeDept === d;
            return (
              <button
                key={d}
                onClick={() => setActiveDept(d)}
                className="px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all"
                style={{
                  background: active ? "#2A5DA8" : "#f1f5f9",
                  color: active ? "#fff" : "#475569",
                  border: active ? "1px solid #2A5DA8" : "1px solid #e2e8f0",
                }}
              >
                {d}
              </button>
            );
          })}
        </div>

        {filteredJobs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[15px] text-slate-500">
              No open roles in this department right now — check back soon, or reach out
              anyway at{" "}
              <a href={`mailto:${APPLY_EMAIL}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
                {APPLY_EMAIL}
              </a>
              .
            </p>
          </div>
        ) : (
          <div
            className={
              filteredJobs.length === 1
                ? "flex justify-center"
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            }
          >
            {filteredJobs.map((job) => {
              const accent = departmentAccent[job.department];
              const isSingle = filteredJobs.length === 1;

              if (isSingle) {
                const metaItems = [
                  { icon: MapPin, label: "Location", value: job.location },
                  { icon: Briefcase, label: "Employment Type", value: job.type },
                  { icon: Clock, label: "Experience", value: job.experience },
                  ...(job.qualification
                    ? [{ icon: GraduationCap, label: "Qualification", value: job.qualification }]
                    : []),
                ];

                return (
                  <div
                    key={job.id}
                    className="w-full max-w-4xl rounded-[22px] border bg-white overflow-hidden grid grid-cols-1 sm:grid-cols-[36%_1fr] transition-all duration-300 hover:-translate-y-1"
                    style={{
                      borderColor: "#e8edf5",
                      boxShadow: "0 4px 18px rgba(15,41,66,0.06)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 18px 40px ${accent}26`;
                      e.currentTarget.style.borderColor = accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 4px 18px rgba(15,41,66,0.06)";
                      e.currentTarget.style.borderColor = "#e8edf5";
                    }}
                  >
                    {job.image && (
                      <div className="relative shrink-0 bg-slate-50 overflow-hidden aspect-[3/4] sm:aspect-auto flex items-center justify-center p-3">
                        <img
                          src={job.image}
                          alt={`${job.title} job opening`}
                          className="w-full h-full object-contain"
                        />
                        <div
                          className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10.5px] font-bold tracking-wide backdrop-blur-md"
                          style={{ background: "rgba(255,255,255,0.92)", color: accent }}
                        >
                          <span className="text-[13px] leading-none">{departmentIcon[job.department]}</span>
                          {job.department.toUpperCase()}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col p-7 sm:p-9 gap-5">
                      <h3 className="text-[22px] sm:text-[26px] font-bold text-slate-800 leading-snug">
                        {job.title}
                      </h3>

                      <p className="line-clamp-2 text-[13.5px] text-slate-500 leading-relaxed">
                        {job.summary}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {metaItems.map(({ icon: Icon, label, value }) => (
                          <div
                            key={label}
                            className="flex items-start gap-2.5 rounded-xl border p-3.5"
                            style={{ borderColor: "#eef1f6", background: "#f9fafb" }}
                          >
                            <span
                              className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                              style={{ background: `${accent}14`, color: accent }}
                            >
                              <Icon size={15} />
                            </span>
                            <div className="min-w-0">
                              <div className="text-[9.5px] font-bold tracking-wide text-slate-400 mb-0.5">
                                {label.toUpperCase()}
                              </div>
                              <div className="text-[12.5px] font-semibold text-slate-700 leading-snug">
                                {value}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {job.highlights && job.highlights.length > 0 && (
                        <div>
                          <div className="text-[11px] font-bold tracking-wide text-slate-400 mb-2.5">
                            KEY HIGHLIGHTS
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                            {job.highlights.map((h) => (
                              <div key={h} className="flex items-center gap-2 text-[12.5px] font-medium text-slate-600">
                                <CheckCircle2 size={15} className="shrink-0" style={{ color: accent }} />
                                {h}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-3 pt-1">
                        <button
                          onClick={() => setSelectedJob(job)}
                          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl py-3 text-[13px] font-bold transition-colors"
                          style={{ border: `1.5px solid ${accent}`, color: accent, background: "transparent" }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = `${accent}0c`)}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                          View Details
                        </button>
                        <a
                          href={waLink(job)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl py-3 text-[13px] font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
                          style={{ background: accent, boxShadow: `0 8px 20px ${accent}33` }}
                        >
                          Apply Now <ArrowRight size={15} />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className="text-left rounded-[26px] border transition-all duration-300 bg-white hover:-translate-y-1 overflow-hidden group flex flex-col h-full"
                  style={{
                    borderColor: "#e8edf5",
                    boxShadow: "0 4px 18px rgba(15,41,66,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 18px 40px ${accent}26`;
                    e.currentTarget.style.borderColor = accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 18px rgba(15,41,66,0.06)";
                    e.currentTarget.style.borderColor = "#e8edf5";
                  }}
                >
                  {job.image && (
                    <div className="relative shrink-0 bg-slate-50 overflow-hidden w-full aspect-[3/4]">
                      <img
                        src={job.image}
                        alt={`${job.title} job opening`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        style={{ objectPosition: "top" }}
                      />
                      {/* soft fade at the bottom edge so the crop feels intentional, not abrupt */}
                      <div
                        className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                        style={{
                          background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)",
                        }}
                      />
                    </div>
                  )}

                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-2.5 mb-4">
                      <span
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
                        style={{ background: `${accent}14` }}
                      >
                        {departmentIcon[job.department]}
                      </span>
                      <span
                        className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full"
                        style={{ color: accent, background: `${accent}14` }}
                      >
                        {job.department.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-800 mb-2.5 leading-snug text-[16px]">
                      {job.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-[13px] mb-5 flex-1">
                      {job.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      <span
                        className="flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full"
                        style={{ background: "#f8fafc", color: "#475569" }}
                      >
                        <MapPin size={12} className="shrink-0" />
                        {job.location}
                      </span>
                      <span
                        className="flex items-center gap-1.5 text-[11.5px] font-medium px-3 py-1.5 rounded-full"
                        style={{ background: "#f8fafc", color: "#475569" }}
                      >
                        <Clock size={12} className="shrink-0" />
                        {job.type} · {job.experience}
                      </span>
                    </div>

                    <span
                      className="inline-flex items-center justify-center gap-1.5 text-[13px] font-bold rounded-xl py-3 px-5 w-full sm:w-auto transition-colors mt-auto"
                      style={{ background: accent, color: "#fff" }}
                    >
                      View Full Details <ArrowRight size={15} />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </section>

      {/* ── Detail modal ── */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          style={{
            background: "rgba(10,20,35,0.6)",
            backdropFilter: "blur(3px)",
            animation: "careersModalFade 0.22s ease-out",
          }}
          onClick={() => setSelectedJob(null)}
        >
          <div
            className="bg-white w-full max-w-2xl rounded-[28px] max-h-[88vh] overflow-hidden shadow-2xl"
            style={{ animation: "careersModalScale 0.28s cubic-bezier(0.16, 1, 0.3, 1)" }}
            onClick={(e) => e.stopPropagation()}
          >
          <div className="careers-modal-scroll max-h-[88vh] overflow-y-auto">
            {(selectedJob.popupImage || selectedJob.image) && (
              <img
                src={selectedJob.popupImage || selectedJob.image}
                alt={`${selectedJob.title} job opening`}
                className="w-full h-[220px] sm:h-[300px] object-cover bg-slate-50"
              />
            )}

            <div
              className="sticky top-0 flex items-start justify-between gap-4 px-6 sm:px-8 py-5 sm:py-6 bg-white z-10"
              style={{ borderBottom: "1px solid #f0f0f0" }}
            >
              <div className="min-w-0">
                <span
                  className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full inline-block mb-3"
                  style={{
                    color: departmentAccent[selectedJob.department],
                    background: `${departmentAccent[selectedJob.department]}14`,
                  }}
                >
                  {selectedJob.department.toUpperCase()}
                </span>
                <h2 className="text-[19px] sm:text-[23px] font-bold text-slate-800 leading-snug">
                  {selectedJob.title}
                </h2>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2.5 text-[12.5px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="shrink-0" /> {selectedJob.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={13} className="shrink-0" /> {selectedJob.type}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="shrink-0" /> {selectedJob.experience}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
                style={{ background: "#f8fafc", color: "#64748b" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f1f5f9";
                  e.currentTarget.style.color = "#334155";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f8fafc";
                  e.currentTarget.style.color = "#64748b";
                }}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 sm:px-8 py-6 sm:py-7 space-y-7">
              <p className="text-[13.5px] text-slate-600 leading-relaxed">
                {selectedJob.summary}
              </p>

              {selectedJob.qualification && (
                <div
                  className="flex items-start gap-3 rounded-2xl px-4 py-3.5"
                  style={{ background: `${departmentAccent[selectedJob.department]}0c` }}
                >
                  <GraduationCap
                    size={17}
                    className="mt-0.5 shrink-0"
                    style={{ color: departmentAccent[selectedJob.department] }}
                  />
                  <p className="text-[13px] text-slate-600 leading-relaxed">
                    <span className="font-bold text-slate-800">Qualification — </span>
                    {selectedJob.qualification}
                  </p>
                </div>
              )}

              <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
                <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
                  <span
                    className="w-1 h-4 rounded-full inline-block"
                    style={{ background: departmentAccent[selectedJob.department] }}
                  />
                  What you&apos;ll do
                </h3>
                <ul className="space-y-2.5">
                  {selectedJob.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0"
                        style={{ color: departmentAccent[selectedJob.department] }}
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-1 border-t" style={{ borderColor: "#f1f5f9" }}>
                <h3 className="text-[13px] font-bold text-slate-800 mb-3.5 mt-6 flex items-center gap-2">
                  <span
                    className="w-1 h-4 rounded-full inline-block"
                    style={{ background: departmentAccent[selectedJob.department] }}
                  />
                  What we&apos;re looking for
                </h3>
                <ul className="space-y-2.5">
                  {selectedJob.requirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0"
                        style={{ color: departmentAccent[selectedJob.department] }}
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t" style={{ borderColor: "#f1f5f9" }}>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a
                    href={waLink(selectedJob)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
                    style={{ background: "#25D366", boxShadow: "0 8px 20px rgba(37,211,102,0.28)" }}
                  >
                    <MessageCircle size={16} /> Apply via WhatsApp
                  </a>
                  <a
                    href={mailLink(selectedJob)}
                    className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold no-underline transition-transform hover:-translate-y-0.5"
                    style={{ border: "1.5px solid #2A5DA8", color: "#2A5DA8" }}
                  >
                    <Mail size={16} /> Apply via Email
                  </a>
                </div>

                <p className="flex items-center justify-center gap-1.5 text-[12px] text-slate-400 mt-5">
                  <Phone size={12} />
                  Or call us directly at{" "}
                  <a href={`tel:+${APPLY_WHATSAPP_NUMBER}`} className="font-semibold" style={{ color: "#2A5DA8" }}>
                    {APPLY_PHONE_DISPLAY}
                  </a>
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      )}
      </main>
      <Footer />

      <style>{`
        @keyframes careersModalFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes careersModalScale {
          from { opacity: 0; transform: scale(0.94) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* Fallback for the two-line summary clamp in case Tailwind's line-clamp
           utilities aren't enabled in this project's build. */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Neutral scrollbar override — this page previously inherited a green
           scrollbar thumb from a global style; force it back to a plain gray. */
        .careers-page-scroll {
          scrollbar-color: #cbd5e1 transparent;
        }
        .careers-page-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .careers-page-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .careers-page-scroll::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 8px;
        }
        .careers-page-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8;
        }

        /* Modal scroll container — scrolling stays functional, the scrollbar
           itself is just not shown so it doesn't poke out past the rounded corners. */
        .careers-modal-scroll {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* old Edge/IE */
        }
        .careers-modal-scroll::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }
      `}</style>
    </>
  );
}