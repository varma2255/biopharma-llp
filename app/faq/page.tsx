// // // "use client";
// // // import Footer from "@/components/Footer";
// // // import { useState } from "react";

// // // const faqs = [
// // //   {
// // //     category: "Basics",
// // //     icon: "🐟",
// // //     items: [
// // //       {
// // //         q: "What is aquaculture?",
// // //         a: "Aquaculture is the controlled cultivation of aquatic organisms — fish, shellfish, crustaceans, algae, and plants — in freshwater, brackish, or marine environments. It is the aquatic equivalent of agriculture, where conditions such as water quality, feed, stocking density, and health management are actively controlled to optimize growth and yield.",
// // //       },
// // //       {
// // //         q: "What species are commonly farmed in aquaculture?",
// // //         a: "Commonly farmed species include Atlantic salmon, tilapia, catfish, shrimp (especially Pacific white shrimp), oysters, mussels, clams, carp, sea bass, sea bream, and seaweed. Each species has unique requirements for temperature, salinity, feed composition, and disease management.",
// // //       },
// // //       {
// // //         q: "What is the difference between capture fisheries and aquaculture?",
// // //         a: "Capture fisheries harvest wild aquatic organisms from oceans, rivers, and lakes without human intervention in their reproduction or growth. Aquaculture, by contrast, involves the deliberate breeding, rearing, and harvesting of aquatic species under controlled or semi-controlled conditions, making it more predictable and scalable.",
// // //       },
// // //     ],
// // //   },
// // //   {
// // //     category: "Water Quality",
// // //     icon: "💧",
// // //     items: [
// // //       {
// // //         q: "What water quality parameters are critical for fish farming?",
// // //         a: "Key parameters include dissolved oxygen (ideally >5 mg/L for most species), pH (6.5–9.0), ammonia and nitrite levels (kept near zero), temperature (species-specific), salinity, turbidity, and alkalinity. Monitoring these daily or continuously is essential for animal health and feed conversion efficiency.",
// // //       },
// // //       {
// // //         q: "How do I manage ammonia buildup in a recirculating aquaculture system (RAS)?",
// // //         a: "Ammonia is managed primarily through biological filtration — establishing nitrifying bacterial colonies (Nitrosomonas and Nitrobacter) that convert toxic ammonia → nitrite → nitrate. Mechanical filtration removes solid waste, while protein skimmers reduce dissolved organics. Regular partial water exchanges dilute nitrate accumulation.",
// // //       },
// // //       {
// // //         q: "What causes algae blooms in pond aquaculture and how can they be controlled?",
// // //         a: "Algal blooms are triggered by excess nutrients (phosphorus, nitrogen from feed waste and excretion), high sunlight exposure, and warm temperatures. Control strategies include reducing feed inputs, using mechanical aeration to destratify the water column, applying probiotics or competing beneficial microbes, and in severe cases, using approved algaecides at label rates.",
// // //       },
// // //     ],
// // //   },
// // //   {
// // //     category: "Feed & Nutrition",
// // //     icon: "🌾",
// // //     items: [
// // //       {
// // //         q: "What is feed conversion ratio (FCR) and why does it matter?",
// // //         a: "FCR is the weight of feed consumed divided by the weight of biomass gained. A FCR of 1.2 means 1.2 kg of feed produces 1 kg of fish. Lower FCR = better efficiency and lower cost. Industry benchmarks vary: salmon ~1.1–1.3, tilapia ~1.5–1.8, shrimp ~1.5–2.0. Improving FCR reduces both cost and environmental impact.",
// // //       },
// // //       {
// // //         q: "Can fish meal be replaced with plant-based proteins in aquafeeds?",
// // //         a: "Yes, partially or substantially. Soy protein concentrate, canola meal, insect meal (black soldier fly larvae), and single-cell proteins (algae, yeast) are increasingly used as fishmeal replacements. Carnivorous species like salmon require careful amino acid and omega-3 balancing when fishmeal is reduced, often supplemented with synthetic lysine, methionine, and algae-derived DHA/EPA.",
// // //       },
// // //       {
// // //         q: "How often should fish be fed and what feeding strategy is optimal?",
// // //         a: "Feeding frequency depends on species, size, and water temperature. Juveniles may require feeding 6–8 times/day while market-size fish are fed 1–2 times/day. Demand feeders and automatic feeders with camera-based waste monitoring allow satiation-based feeding, reducing waste and improving FCR. Feeding should be reduced or stopped during disease events, extreme temperatures, or dissolved oxygen dips.",
// // //       },
// // //     ],
// // //   },
// // //   {
// // //     category: "Disease Management",
// // //     icon: "🔬",
// // //     items: [
// // //       {
// // //         q: "What are the most common diseases in shrimp farming?",
// // //         a: "The most economically damaging shrimp diseases include White Spot Syndrome Virus (WSSV), Early Mortality Syndrome / Acute Hepatopancreatic Necrosis Disease (EMS/AHPND), Infectious Myonecrosis Virus (IMNV), and Enterocytozoon hepatopenaei (EHP). Prevention through biosecurity, PCR-screened SPF broodstock, and optimized pond management is far more cost-effective than treatment.",
// // //       },
// // //       {
// // //         q: "How is sea lice controlled in salmon aquaculture?",
// // //         a: "Sea lice (Lepeophtheirus salmonis and Caligus spp.) are managed through an integrated pest management approach: biological controls (wrasse cleaner fish), mechanical treatments (thermolicer, laser systems, snorkel barriers), medicinal treatments (hydrogen peroxide baths, azamethiphos, emamectin benzoate), synchronised fallowing, and coordinated area-management between farm sites.",
// // //       },
// // //       {
// // //         q: "What biosecurity measures should aquaculture farms implement?",
// // //         a: "Core biosecurity practices include sourcing certified disease-free stock, quarantining new animals, using footbaths and PPE in farm entry points, restricting visitor access, implementing all-in/all-out stocking and fallowing protocols, conducting regular PCR health screening, maintaining detailed mortality records, and disinfecting equipment between pond or tank use.",
// // //       },
// // //     ],
// // //   },
// // //   {
// // //     category: "Regulatory & Certification",
// // //     icon: "📋",
// // //     items: [
// // //       {
// // //         q: "What is Good Aquaculture Practice (GAP) certification?",
// // //         a: "GAP is a set of standards covering environmental responsibility, animal welfare, food safety, worker safety, and traceability. It is assessed through third-party audits. Leading certification schemes include ASC (Aquaculture Stewardship Council), BAP (Best Aquaculture Practices by the Global Seafood Alliance), and GlobalG.A.P. Certification opens access to premium retail markets and ESG-conscious buyers.",
// // //       },
// // //       {
// // //         q: "What environmental permits are typically required for aquaculture operations?",
// // //         a: "Requirements vary by country and production system but commonly include effluent discharge permits, environmental impact assessments (EIAs), site lease agreements (for coastal/marine operations), chemical and veterinary medicine use licenses, and water abstraction permits. Offshore or transboundary operations may involve additional international compliance obligations.",
// // //       },
// // //       {
// // //         q: "How does traceability work in modern aquaculture supply chains?",
// // //         a: "Traceability systems link harvest batches to feed lot numbers, health records, stocking dates, and farm GPS coordinates. This is enabled via electronic batch records, QR codes on packaging, blockchain ledgers (in premium supply chains), and global standards like GS1 EPCIS. Full chain-of-custody traceability supports recall management, market access, and consumer transparency.",
// // //       },
// // //     ],
// // //   },
// // //   {
// // //     category: "Sustainability",
// // //     icon: "🌊",
// // //     items: [
// // //       {
// // //         q: "How does aquaculture impact the environment?",
// // //         a: "Impacts vary by species and system. Potential negatives include nutrient loading, chemical discharge, introduction of non-native species, disease transmission to wild stocks, and coastal habitat alteration (e.g., mangrove loss for shrimp ponds). However, well-managed RAS systems, offshore cages, and integrated multi-trophic aquaculture (IMTA) can minimize footprint and even restore ecosystem services.",
// // //       },
// // //       {
// // //         q: "What is integrated multi-trophic aquaculture (IMTA)?",
// // //         a: "IMTA co-cultures species at different trophic levels so that the waste of one species becomes a nutrient input for another. A classic example: salmon produce nutrient-rich effluent → mussels filter feed on organic particles → sea urchins or abalone graze benthic algae. IMTA improves resource efficiency, reduces environmental impact, and can diversify farm revenue.",
// // //       },
// // //     ],
// // //   },
// // // ];

// // // const categoryColors = {
// // //   Basics: { bg: "#1a3a6b", accent: "#4fc3f7" },
// // //   "Water Quality": { bg: "#0d3d52", accent: "#26c6da" },
// // //   "Feed & Nutrition": { bg: "#1b4332", accent: "#69db7c" },
// // //   "Disease Management": { bg: "#4a1942", accent: "#f48fb1" },
// // //   "Regulatory & Certification": { bg: "#1a237e", accent: "#9fa8da" },
// // //   Sustainability: { bg: "#0a3d62", accent: "#80deea" },
// // // };

// // // export default function AquacultureFAQ() {
// // //   const [openItem, setOpenItem] = useState(null);
// // //   const [activeCategory, setActiveCategory] = useState("All");

// // //   const categories = ["All", ...faqs.map((f) => f.category)];

// // //   const filteredFaqs =
// // //     activeCategory === "All"
// // //       ? faqs
// // //       : faqs.filter((f) => f.category === activeCategory);

// // //   const toggle = (key) => setOpenItem(openItem === key ? null : key);

// // //   return (
// // //     <div
// // //       style={{
// // //         minHeight: "100vh",
// // //         background: "linear-gradient(160deg, #1a2f6e 0%, #1e3a8a 40%, #1a3a6b 70%, #0f2850 100%)",
// // //         fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
// // //         color: "#fff",
// // //         position: "relative",
// // //         overflow: "hidden",
// // //       }}
// // //     >
// // //       {/* Dot-grid background matching the theme */}
// // //       <div
// // //         style={{
// // //           position: "absolute",
// // //           inset: 0,
// // //           backgroundImage:
// // //             "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
// // //           backgroundSize: "28px 28px",
// // //           pointerEvents: "none",
// // //           zIndex: 0,
// // //         }}
// // //       />

// // //       {/* Subtle ambient glow blobs */}
// // //       <div
// // //         style={{
// // //           position: "absolute",
// // //           top: "-120px",
// // //           right: "-80px",
// // //           width: "500px",
// // //           height: "500px",
// // //           borderRadius: "50%",
// // //           background: "radial-gradient(circle, rgba(56,139,253,0.15) 0%, transparent 70%)",
// // //           pointerEvents: "none",
// // //           zIndex: 0,
// // //         }}
// // //       />
// // //       <div
// // //         style={{
// // //           position: "absolute",
// // //           bottom: "10%",
// // //           left: "-100px",
// // //           width: "400px",
// // //           height: "400px",
// // //           borderRadius: "50%",
// // //           background: "radial-gradient(circle, rgba(22,163,210,0.10) 0%, transparent 70%)",
// // //           pointerEvents: "none",
// // //           zIndex: 0,
// // //         }}
// // //       />

// // //       <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto", padding: "60px 24px 80px" }}>

// // //         {/* Badge — matching the reference image style */}
// // //         <div style={{ display: "flex", justifyContent: "center", marginBottom: "36px" }}>
// // //           <div
// // //             style={{
// // //               display: "inline-flex",
// // //               alignItems: "center",
// // //               gap: "8px",
// // //               border: "1.5px solid rgba(255,255,255,0.35)",
// // //               borderRadius: "999px",
// // //               padding: "8px 20px",
// // //               fontSize: "11px",
// // //               letterSpacing: "0.12em",
// // //               fontWeight: 600,
// // //               color: "rgba(255,255,255,0.9)",
// // //               backdropFilter: "blur(8px)",
// // //               background: "rgba(255,255,255,0.07)",
// // //             }}
// // //           >
// // //             <span style={{ fontSize: "14px" }}>🐠</span>
// // //             AQUACULTURE KNOWLEDGE BASE
// // //           </div>
// // //         </div>

// // //         {/* Hero heading */}
// // //         <h1
// // //           style={{
// // //             textAlign: "center",
// // //             fontSize: "clamp(32px, 5vw, 54px)",
// // //             fontWeight: 700,
// // //             lineHeight: 1.15,
// // //             letterSpacing: "-0.02em",
// // //             marginBottom: "18px",
// // //             background: "linear-gradient(135deg, #ffffff 0%, #a8d8f0 100%)",
// // //             WebkitBackgroundClip: "text",
// // //             WebkitTextFillColor: "transparent",
// // //             backgroundClip: "text",
// // //           }}
// // //         >
// // //           Frequently Asked Questions
// // //         </h1>
// // //         <p
// // //           style={{
// // //             textAlign: "center",
// // //             fontSize: "17px",
// // //             color: "rgba(255,255,255,0.6)",
// // //             maxWidth: "580px",
// // //             margin: "0 auto 48px",
// // //             lineHeight: 1.7,
// // //           }}
// // //         >
// // //           Expert answers on aquaculture fundamentals — from water quality and disease
// // //           management to feed nutrition, certification, and sustainability.
// // //         </p>

// // //         {/* Wave SVG divider */}
// // //         <div style={{ textAlign: "center", marginBottom: "40px", opacity: 0.35 }}>
// // //           <svg width="200" height="16" viewBox="0 0 200 16" fill="none">
// // //             <path d="M0 8 Q25 0 50 8 Q75 16 100 8 Q125 0 150 8 Q175 16 200 8" stroke="#7ec8e3" strokeWidth="2" fill="none" strokeLinecap="round"/>
// // //           </svg>
// // //         </div>

// // //         {/* Category filter pills */}
// // //         <div
// // //           style={{
// // //             display: "flex",
// // //             flexWrap: "wrap",
// // //             gap: "8px",
// // //             justifyContent: "center",
// // //             marginBottom: "48px",
// // //           }}
// // //         >
// // //           {categories.map((cat) => {
// // //             const isActive = activeCategory === cat;
// // //             const found = faqs.find((f) => f.category === cat);
// // //             return (
// // //               <button
// // //                 key={cat}
// // //                 onClick={() => setActiveCategory(cat)}
// // //                 style={{
// // //                   display: "inline-flex",
// // //                   alignItems: "center",
// // //                   gap: "6px",
// // //                   padding: "7px 16px",
// // //                   borderRadius: "999px",
// // //                   border: isActive
// // //                     ? "1.5px solid rgba(255,255,255,0.7)"
// // //                     : "1px solid rgba(255,255,255,0.2)",
// // //                   background: isActive
// // //                     ? "rgba(255,255,255,0.18)"
// // //                     : "rgba(255,255,255,0.06)",
// // //                   color: isActive ? "#ffffff" : "rgba(255,255,255,0.55)",
// // //                   fontSize: "13px",
// // //                   fontWeight: isActive ? 600 : 400,
// // //                   cursor: "pointer",
// // //                   transition: "all 0.2s ease",
// // //                   letterSpacing: "0.01em",
// // //                 }}
// // //               >
// // //                 {found && <span>{found.icon}</span>}
// // //                 {cat}
// // //               </button>
// // //             );
// // //           })}
// // //         </div>

// // //         {/* FAQ Sections */}
// // //         {filteredFaqs.map((section) => {
// // //           const colors = categoryColors[section.category];
// // //           return (
// // //             <div key={section.category} style={{ marginBottom: "48px" }}>
// // //               {/* Section header */}
// // //               <div
// // //                 style={{
// // //                   display: "flex",
// // //                   alignItems: "center",
// // //                   gap: "12px",
// // //                   marginBottom: "16px",
// // //                 }}
// // //               >
// // //                 <div
// // //                   style={{
// // //                     width: "40px",
// // //                     height: "40px",
// // //                     borderRadius: "10px",
// // //                     background: "rgba(255,255,255,0.1)",
// // //                     border: "1px solid rgba(255,255,255,0.15)",
// // //                     display: "flex",
// // //                     alignItems: "center",
// // //                     justifyContent: "center",
// // //                     fontSize: "20px",
// // //                   }}
// // //                 >
// // //                   {section.icon}
// // //                 </div>
// // //                 <h2
// // //                   style={{
// // //                     fontSize: "13px",
// // //                     letterSpacing: "0.1em",
// // //                     fontWeight: 600,
// // //                     color: colors.accent,
// // //                     margin: 0,
// // //                     textTransform: "uppercase",
// // //                   }}
// // //                 >
// // //                   {section.category}
// // //                 </h2>
// // //                 <div
// // //                   style={{
// // //                     flex: 1,
// // //                     height: "1px",
// // //                     background: `linear-gradient(to right, ${colors.accent}55, transparent)`,
// // //                   }}
// // //                 />
// // //               </div>

// // //               {/* FAQ items */}
// // //               <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
// // //                 {section.items.map((item, idx) => {
// // //                   const key = `${section.category}-${idx}`;
// // //                   const isOpen = openItem === key;
// // //                   return (
// // //                     <div
// // //                       key={key}
// // //                       style={{
// // //                         borderRadius: "14px",
// // //                         border: isOpen
// // //                           ? `1px solid ${colors.accent}55`
// // //                           : "1px solid rgba(255,255,255,0.1)",
// // //                         background: isOpen
// // //                           ? "rgba(255,255,255,0.08)"
// // //                           : "rgba(255,255,255,0.04)",
// // //                         overflow: "hidden",
// // //                         transition: "all 0.25s ease",
// // //                       }}
// // //                     >
// // //                       <button
// // //                         onClick={() => toggle(key)}
// // //                         style={{
// // //                           width: "100%",
// // //                           display: "flex",
// // //                           alignItems: "center",
// // //                           justifyContent: "space-between",
// // //                           gap: "16px",
// // //                           padding: "18px 22px",
// // //                           background: "transparent",
// // //                           border: "none",
// // //                           cursor: "pointer",
// // //                           color: "inherit",
// // //                           textAlign: "left",
// // //                         }}
// // //                       >
// // //                         <span
// // //                           style={{
// // //                             fontSize: "15px",
// // //                             fontWeight: 500,
// // //                             color: isOpen ? "#ffffff" : "rgba(255,255,255,0.85)",
// // //                             lineHeight: 1.5,
// // //                             flex: 1,
// // //                           }}
// // //                         >
// // //                           {item.q}
// // //                         </span>
// // //                         <div
// // //                           style={{
// // //                             width: "28px",
// // //                             height: "28px",
// // //                             borderRadius: "50%",
// // //                             border: `1px solid ${isOpen ? colors.accent : "rgba(255,255,255,0.25)"}`,
// // //                             display: "flex",
// // //                             alignItems: "center",
// // //                             justifyContent: "center",
// // //                             flexShrink: 0,
// // //                             transition: "all 0.25s ease",
// // //                             background: isOpen ? `${colors.accent}22` : "transparent",
// // //                           }}
// // //                         >
// // //                           <svg
// // //                             width="12"
// // //                             height="12"
// // //                             viewBox="0 0 12 12"
// // //                             fill="none"
// // //                             style={{
// // //                               transition: "transform 0.25s ease",
// // //                               transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
// // //                             }}
// // //                           >
// // //                             <path
// // //                               d="M2 4L6 8L10 4"
// // //                               stroke={isOpen ? colors.accent : "rgba(255,255,255,0.5)"}
// // //                               strokeWidth="1.5"
// // //                               strokeLinecap="round"
// // //                               strokeLinejoin="round"
// // //                             />
// // //                           </svg>
// // //                         </div>
// // //                       </button>

// // //                       {isOpen && (
// // //                         <div
// // //                           style={{
// // //                             padding: "0 22px 20px",
// // //                             fontSize: "14.5px",
// // //                             lineHeight: 1.75,
// // //                             color: "rgba(255,255,255,0.65)",
// // //                             borderTop: `1px solid ${colors.accent}33`,
// // //                             paddingTop: "16px",
// // //                           }}
// // //                         >
// // //                           {item.a}
// // //                         </div>
// // //                       )}
// // //                     </div>
// // //                   );
// // //                 })}
// // //               </div>
// // //             </div>
// // //           );
// // //         })}

// // //         {/* Bottom CTA */}
// // //         <div
// // //           style={{
// // //             marginTop: "64px",
// // //             textAlign: "center",
// // //             padding: "40px",
// // //             borderRadius: "20px",
// // //             border: "1px solid rgba(255,255,255,0.12)",
// // //             background: "rgba(255,255,255,0.04)",
// // //           }}
// // //         >
// // //           <div style={{ fontSize: "28px", marginBottom: "12px" }}>🌊</div>
// // //           <h3
// // //             style={{
// // //               fontSize: "20px",
// // //               fontWeight: 600,
// // //               color: "#fff",
// // //               marginBottom: "10px",
// // //             }}
// // //           >
// // //             Still have questions?
// // //           </h3>
// // //           <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", marginBottom: "24px" }}>
// // //             Connect with our aquaculture specialists for tailored guidance.
// // //           </p>
// // //           <a
// // //             href="#contact"
// // //             style={{
// // //               display: "inline-block",
// // //               padding: "12px 32px",
// // //               borderRadius: "999px",
// // //               border: "1.5px solid rgba(255,255,255,0.4)",
// // //               color: "#fff",
// // //               fontSize: "14px",
// // //               fontWeight: 500,
// // //               textDecoration: "none",
// // //               letterSpacing: "0.03em",
// // //               background: "rgba(255,255,255,0.1)",
// // //             }}
// // //           >
// // //             Contact our experts →
// // //           </a>
// // //         </div>
// // //       </div>
// // //       <Footer></Footer>
// // //     </div>
// // //   );
// // // }
// // "use client";
// // import { useState } from "react";

// // const DATA = [
// //   {cat:"Basics",icon:"🐟",accent:"#1e3a8a",light:"#eff6ff",border:"#bfdbfe",items:[
// //     {q:"What is aquaculture?",a:"Aquaculture is the controlled cultivation of aquatic organisms — fish, shellfish, crustaceans, algae, and plants — in freshwater, brackish, or marine environments. It is the aquatic equivalent of agriculture, where water quality, feed, stocking density, and health management are actively controlled to optimize growth and yield."},
// //     {q:"What species are commonly farmed in aquaculture?",a:"Commonly farmed species include Atlantic salmon, tilapia, catfish, shrimp (Pacific white shrimp), oysters, mussels, clams, carp, sea bass, sea bream, and seaweed. Each species has unique requirements for temperature, salinity, feed composition, and disease management."},
// //     {q:"What is the difference between capture fisheries and aquaculture?",a:"Capture fisheries harvest wild aquatic organisms without human intervention. Aquaculture involves the deliberate breeding, rearing, and harvesting of aquatic species under controlled conditions, making it more predictable and scalable than wild capture."},
// //   ]},
// //   {cat:"Water Quality",icon:"💧",accent:"#0369a1",light:"#f0f9ff",border:"#bae6fd",items:[
// //     {q:"What water quality parameters are critical for fish farming?",a:"Key parameters include dissolved oxygen (ideally >5 mg/L), pH (6.5–9.0), ammonia and nitrite levels (near zero), temperature, salinity, turbidity, and alkalinity. Daily or continuous monitoring is essential for animal health and feed conversion efficiency."},
// //     {q:"How do I manage ammonia buildup in a RAS system?",a:"Ammonia is managed through biological filtration — nitrifying bacterial colonies (Nitrosomonas and Nitrobacter) convert toxic ammonia → nitrite → nitrate. Mechanical filtration removes solid waste, protein skimmers reduce dissolved organics, and partial water exchanges dilute nitrate accumulation."},
// //     {q:"What causes algae blooms in pond aquaculture and how are they controlled?",a:"Algal blooms are triggered by excess nutrients, high sunlight, and warm temperatures. Control strategies include reducing feed inputs, mechanical aeration to destratify the water column, applying beneficial probiotics, and where necessary, approved algaecides at label rates."},
// //   ]},
// //   {cat:"Feed & Nutrition",icon:"🌾",accent:"#15803d",light:"#f0fdf4",border:"#bbf7d0",items:[
// //     {q:"What is feed conversion ratio (FCR) and why does it matter?",a:"FCR is the weight of feed consumed divided by the weight of biomass gained. Industry benchmarks: salmon ~1.1–1.3, tilapia ~1.5–1.8, shrimp ~1.5–2.0. Improving FCR directly reduces input costs and environmental footprint."},
// //     {q:"Can fish meal be replaced with plant-based proteins in aquafeeds?",a:"Yes, partially or substantially. Soy protein concentrate, canola meal, insect meal (black soldier fly larvae), and single-cell proteins are increasingly used as fishmeal replacements. Carnivorous species require careful amino acid and omega-3 supplementation when fishmeal is reduced."},
// //     {q:"How often should fish be fed and what is the optimal strategy?",a:"Juveniles may require 6–8 feedings/day while market-size fish are fed 1–2 times/day. Automatic feeders with camera-based waste monitoring enable satiation-based feeding, significantly reducing waste and improving FCR."},
// //   ]},
// //   {cat:"Disease",icon:"🔬",accent:"#9f1239",light:"#fff1f2",border:"#fecdd3",items:[
// //     {q:"What are the most common diseases in shrimp farming?",a:"The most economically damaging shrimp diseases include White Spot Syndrome Virus (WSSV), Early Mortality Syndrome (EMS/AHPND), Infectious Myonecrosis Virus (IMNV), and EHP. Prevention through biosecurity and PCR-screened SPF broodstock is far more cost-effective than treatment."},
// //     {q:"How is sea lice controlled in salmon aquaculture?",a:"Sea lice are managed through integrated pest management: biological controls (wrasse cleaner fish), mechanical treatments (thermolicer, laser systems), medicinal treatments (hydrogen peroxide baths, azamethiphos), synchronised fallowing, and coordinated area management between farm sites."},
// //     {q:"What biosecurity measures should aquaculture farms implement?",a:"Core biosecurity practices include sourcing certified disease-free stock, quarantining new animals, using footbaths and PPE at entry points, restricting visitor access, implementing all-in/all-out stocking protocols, and conducting regular PCR health screening."},
// //   ]},
// //   {cat:"Certification",icon:"📋",accent:"#6d28d9",light:"#faf5ff",border:"#ddd6fe",items:[
// //     {q:"What is Good Aquaculture Practice (GAP) certification?",a:"GAP is a set of standards covering environmental responsibility, animal welfare, food safety, worker safety, and traceability — assessed through third-party audits. Leading schemes include ASC, BAP (Best Aquaculture Practices), and GlobalG.A.P. Certification opens access to premium retail markets and ESG-conscious buyers."},
// //     {q:"What environmental permits are typically required for aquaculture operations?",a:"Requirements vary by country but commonly include effluent discharge permits, environmental impact assessments (EIAs), site lease agreements for coastal/marine operations, chemical and veterinary medicine use licenses, and water abstraction permits."},
// //     {q:"How does traceability work in modern aquaculture supply chains?",a:"Traceability systems link harvest batches to feed lot numbers, health records, stocking dates, and farm GPS coordinates via electronic batch records, QR codes, blockchain ledgers, and global standards like GS1 EPCIS for full chain-of-custody transparency."},
// //   ]},
// //   {cat:"Sustainability",icon:"🌊",accent:"#0f766e",light:"#f0fdfa",border:"#99f6e4",items:[
// //     {q:"How does aquaculture impact the environment?",a:"Impacts vary by system. Potential negatives include nutrient loading, chemical discharge, and habitat alteration. However, well-managed RAS systems, offshore cages, and integrated multi-trophic aquaculture (IMTA) can minimize environmental footprint and restore ecosystem services."},
// //     {q:"What is integrated multi-trophic aquaculture (IMTA)?",a:"IMTA co-cultures species at different trophic levels so that waste from one species becomes a nutrient input for another. Classic example: salmon effluent feeds mussels → mussels filter organics → sea urchins graze benthic algae. IMTA improves resource efficiency and diversifies farm revenue."},
// //   ]},
// // ];

// // const stats = [
// //   {num:"600+",label:"Species farmed globally"},
// //   {num:"90M t",label:"Annual aquaculture output"},
// //   {num:"580+",label:"ASC certified farms"},
// //   {num:"50%",label:"Of seafood from aquaculture"},
// // ];

// // export default function AquacultureFAQ() {
// //   const [openItem, setOpenItem] = useState(null);
// //   const [activeCategory, setActiveCategory] = useState("All");

// //   const categories = ["All", ...DATA.map((d) => d.cat)];
// //   const filtered = activeCategory === "All" ? DATA : DATA.filter((d) => d.cat === activeCategory);
// //   const toggle = (key) => setOpenItem(openItem === key ? null : key);

// //   return (
// //     <div style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: "#fff" }}>

// //       {/* HERO — Blue */}
// //       <div style={{
// //         background: "linear-gradient(160deg,#1a2f6e 0%,#1e3a8a 45%,#0f2850 100%)",
// //         position: "relative", overflow: "hidden", padding: "56px 24px 64px", textAlign: "center",marginTop:"10"
// //       }}>
// //         <div style={{ position:"absolute",inset:0,backgroundImage:"radial-gradient(rgba(255,255,255,0.12) 1px,transparent 1px)",backgroundSize:"28px 28px",pointerEvents:"none",zIndex:0 }} />
// //         <div style={{ position:"relative", zIndex:1, maxWidth:"720px", margin:"0 auto" }}>
// //           <div style={{ display:"inline-flex",alignItems:"center",gap:"8px",border:"1.5px solid rgba(255,255,255,0.32)",borderRadius:"999px",padding:"8px 20px",fontSize:"11px",letterSpacing:".12em",fontWeight:600,color:"rgba(255,255,255,0.88)",background:"rgba(255,255,255,0.07)",marginBottom:"28px",marginTop:"100px" }}>
// //             <span style={{fontSize:"15px"}}>🐠</span> AQUACULTURE KNOWLEDGE BASE
// //           </div>
// //           <h1 style={{ fontSize:"clamp(28px,5vw,48px)",fontWeight:700,lineHeight:1.15,letterSpacing:"-.02em",marginBottom:"16px",background:"linear-gradient(135deg,#fff 0%,#a8d8f0 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
// //             Frequently Asked Questions
// //           </h1>
// //           {/* <p style={{ fontSize:"16px",color:"rgba(255,255,255,0.58)",maxWidth:"540px",margin:"0 auto",lineHeight:1.7 }}> */}
// //             Expert answers on aquaculture fundamentals — from water quality and disease management to feed nutrition, certification, and sustainability.
// //           </p>
// //         </div>
// //       </div>

// //       {/* Wave */}
// //       <svg viewBox="0 0 1440 54" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:"block", background:"#fff", marginTop:"-2px" }}>
// //         <path d="M0 0 C240 54 480 54 720 27 C960 0 1200 0 1440 27 L1440 0 Z" fill="#1e3a8a"/>
// //       </svg>

// //       {/* WHITE BODY */}
// //       <div style={{ background:"#fff", padding:"0 24px 72px" }}>
// //         <div style={{ maxWidth:"860px", margin:"0 auto", paddingTop:"48px" }}>

// //           {/* Stats */}
// //           <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))", gap:"12px", marginBottom:"48px" }}>
// //             {stats.map((s) => (
// //               <div key={s.label} style={{ background:"#f0f5ff", borderRadius:"12px", padding:"16px", textAlign:"center" }}>
// //                 <div style={{ fontSize:"26px", fontWeight:700, color:"#1e3a8a", lineHeight:1 }}>{s.num}</div>
// //                 <div style={{ fontSize:"12px", color:"#64748b", marginTop:"4px" }}>{s.label}</div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Filters */}
// //           <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", justifyContent:"center", marginBottom:"44px" }}>
// //             {categories.map((cat) => {
// //               const sec = DATA.find((d) => d.cat === cat);
// //               const isActive = activeCategory === cat;
// //               return (
// //                 <button key={cat} onClick={() => { setActiveCategory(cat); setOpenItem(null); }} style={{ display:"inline-flex",alignItems:"center",gap:"5px",padding:"7px 15px",borderRadius:"999px",cursor:"pointer",fontSize:"13px",fontFamily:"inherit",fontWeight:isActive?600:400,border:isActive?"1.5px solid #1e3a8a":"1.5px solid #e2e8f0",background:isActive?"#1e3a8a":"#f8fafc",color:isActive?"#fff":"#64748b",transition:"all .2s" }}>
// //                   {sec ? <span>{sec.icon}</span> : "🐠"} {cat}
// //                 </button>
// //               );
// //             })}
// //           </div>

// //           {/* FAQs */}
// //           {filtered.map((sec) => (
// //             <div key={sec.cat} style={{ marginBottom:"44px" }}>
// //               <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"14px" }}>
// //                 <div style={{ width:"36px",height:"36px",borderRadius:"10px",background:sec.light,border:`1.5px solid ${sec.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"17px",flexShrink:0 }}>{sec.icon}</div>
// //                 <span style={{ fontSize:"11px",letterSpacing:".1em",fontWeight:700,textTransform:"uppercase",color:sec.accent }}>{sec.cat}</span>
// //                 <div style={{ flex:1,height:"1px",background:`linear-gradient(to right,${sec.border},transparent)` }} />
// //               </div>
// //               <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
// //                 {sec.items.map((item, idx) => {
// //                   const key = `${sec.cat}-${idx}`;
// //                   const isOpen = openItem === key;
// //                   return (
// //                     <div key={key} style={{ borderRadius:"12px",overflow:"hidden",border:isOpen?"1.5px solid transparent":`1.5px solid #e8edf5`,background:isOpen?sec.light:"#fafbfc",boxShadow:isOpen?"0 2px 16px rgba(30,58,138,0.09)":"none",transition:"all .22s" }}>
// //                       <button onClick={() => toggle(key)} style={{ width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px",padding:"16px 20px",background:"transparent",border:"none",cursor:"pointer",textAlign:"left",fontFamily:"inherit" }}>
// //                         <span style={{ fontSize:"14.5px",fontWeight:500,lineHeight:1.5,flex:1,color:isOpen?sec.accent:"#1e293b" }}>{item.q}</span>
// //                         <div style={{ width:"26px",height:"26px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:`1.5px solid ${isOpen?sec.accent:"#e2e8f0"}`,background:isOpen?sec.light:"transparent",transition:"all .22s" }}>
// //                           <svg style={{ transform:`rotate(${isOpen?180:0}deg)`,transition:"transform .22s" }} width="12" height="12" viewBox="0 0 12 12" fill="none">
// //                             <path d="M2 4L6 8L10 4" stroke={isOpen?sec.accent:"#94a3b8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// //                           </svg>
// //                         </div>
// //                       </button>
// //                       {isOpen && (
// //                         <div style={{ padding:"0 20px 18px",fontSize:"14px",lineHeight:1.78,color:"#475569",borderTop:`1px solid ${sec.border}`,paddingTop:"14px" }}>{item.a}</div>
// //                       )}
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </div>
// //           ))}

// //           {/* CTA */}
// //           <div style={{ marginTop:"56px",textAlign:"center",padding:"40px 32px",borderRadius:"20px",background:"linear-gradient(160deg,#1a2f6e,#1e3a8a)",position:"relative",overflow:"hidden" }}>
// //             <div style={{ position:"absolute",inset:0,backgroundImage:"radial-gradient(rgba(255,255,255,0.10) 1px,transparent 1px)",backgroundSize:"24px 24px",pointerEvents:"none" }} />
// //             <div style={{ position:"relative",zIndex:1 }}>
// //               <div style={{ fontSize:"26px",marginBottom:"10px" }}>🌊</div>
// //               <h3 style={{ fontSize:"20px",fontWeight:600,color:"#fff",marginBottom:"8px" }}>Still have questions?</h3>
// //               <p style={{ color:"rgba(255,255,255,0.55)",fontSize:"13.5px",marginBottom:"22px" }}>Connect with our aquaculture specialists for tailored guidance on your farming operation.</p>
// //               <button style={{ display:"inline-block",padding:"11px 30px",borderRadius:"999px",border:"1.5px solid rgba(255,255,255,0.4)",color:"#fff",fontSize:"13.5px",fontWeight:500,background:"rgba(255,255,255,0.12)",cursor:"pointer",fontFamily:"inherit" }}>Contact our experts →</button>
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import Footer from "@/components/Footer";
// import { useState, useEffect, useRef } from "react";

// const DATA = [
//   {cat:"Basics",icon:"🐟",accent:"#1e3a8a",light:"#eff6ff",border:"#bfdbfe",items:[
//     {q:"What is aquaculture?",a:"Aquaculture is the controlled cultivation of aquatic organisms — fish, shellfish, crustaceans, algae, and plants — in freshwater, brackish, or marine environments. It is the aquatic equivalent of agriculture, where water quality, feed, stocking density, and health management are actively controlled to optimize growth and yield."},
//     {q:"What species are commonly farmed in aquaculture?",a:"Commonly farmed species include Atlantic salmon, tilapia, catfish, shrimp (Pacific white shrimp), oysters, mussels, clams, carp, sea bass, sea bream, and seaweed. Each species has unique requirements for temperature, salinity, feed composition, and disease management."},
//     {q:"What is the difference between capture fisheries and aquaculture?",a:"Capture fisheries harvest wild aquatic organisms without human intervention. Aquaculture involves the deliberate breeding, rearing, and harvesting of aquatic species under controlled or semi-controlled conditions, making it more predictable and scalable."},
//   ]},
//   {cat:"Water Quality",icon:"💧",accent:"#0369a1",light:"#f0f9ff",border:"#bae6fd",items:[
//     {q:"What water quality parameters are critical for fish farming?",a:"Key parameters include dissolved oxygen (>5 mg/L), pH (6.5–9.0), ammonia and nitrite (near zero), temperature, salinity, turbidity, and alkalinity. Daily or continuous monitoring is essential for animal health and feed conversion efficiency."},
//     {q:"How do I manage ammonia buildup in a RAS system?",a:"Ammonia is managed through biological filtration — nitrifying bacteria (Nitrosomonas and Nitrobacter) convert toxic ammonia → nitrite → nitrate. Mechanical filtration removes solids, protein skimmers reduce organics, and partial water exchanges dilute nitrate."},
//     {q:"What causes algae blooms in pond aquaculture?",a:"Algal blooms are triggered by excess nutrients, high sunlight, and warm temperatures. Control strategies include reducing feed inputs, mechanical aeration, applying beneficial probiotics, and where necessary, approved algaecides at label rates."},
//   ]},
//   {cat:"Feed & Nutrition",icon:"🌾",accent:"#15803d",light:"#f0fdf4",border:"#bbf7d0",items:[
//     {q:"What is feed conversion ratio (FCR) and why does it matter?",a:"FCR is the weight of feed consumed divided by the weight of biomass gained. Industry benchmarks: salmon ~1.1–1.3, tilapia ~1.5–1.8, shrimp ~1.5–2.0. Improving FCR directly reduces input costs and environmental footprint."},
//     {q:"Can fish meal be replaced with plant-based proteins?",a:"Yes. Soy protein concentrate, canola meal, insect meal (black soldier fly larvae), and single-cell proteins are increasingly used as fishmeal replacements. Carnivorous species require careful amino acid and omega-3 supplementation when fishmeal is reduced."},
//     {q:"What is the optimal feeding strategy for fish farms?",a:"Juveniles may require 6–8 feedings/day while market-size fish are fed 1–2 times/day. Automatic feeders with camera-based waste monitoring enable satiation-based feeding, significantly reducing waste and improving FCR."},
//   ]},
//   {cat:"Disease",icon:"🔬",accent:"#9f1239",light:"#fff1f2",border:"#fecdd3",items:[
//     {q:"What are the most common diseases in shrimp farming?",a:"The most economically damaging diseases include White Spot Syndrome Virus (WSSV), Early Mortality Syndrome (EMS/AHPND), Infectious Myonecrosis Virus (IMNV), and EHP. Prevention through biosecurity and PCR-screened SPF broodstock is far more cost-effective than treatment."},
//     {q:"How is sea lice controlled in salmon aquaculture?",a:"Sea lice are managed through integrated pest management: biological controls (wrasse cleaner fish), mechanical treatments (thermolicer, laser systems), medicinal treatments (hydrogen peroxide baths, azamethiphos), synchronised fallowing, and coordinated area management."},
//     {q:"What biosecurity measures should farms implement?",a:"Core practices include sourcing certified disease-free stock, quarantining new animals, using footbaths and PPE at entry points, restricting visitor access, implementing all-in/all-out stocking protocols, and conducting regular PCR health screening."},
//   ]},
//   {cat:"Certification",icon:"📋",accent:"#6d28d9",light:"#faf5ff",border:"#ddd6fe",items:[
//     {q:"What is Good Aquaculture Practice (GAP) certification?",a:"GAP covers environmental responsibility, animal welfare, food safety, worker safety, and traceability — assessed through third-party audits. Leading schemes include ASC, BAP (Best Aquaculture Practices), and GlobalG.A.P., opening access to premium retail markets."},
//     {q:"What environmental permits are typically required?",a:"Requirements vary by country but commonly include effluent discharge permits, environmental impact assessments (EIAs), site lease agreements for coastal/marine operations, chemical and veterinary medicine use licenses, and water abstraction permits."},
//     {q:"How does traceability work in modern aquaculture supply chains?",a:"Traceability links harvest batches to feed lot numbers, health records, stocking dates, and farm GPS coordinates via electronic batch records, QR codes, blockchain ledgers, and global standards like GS1 EPCIS for full chain-of-custody transparency."},
//   ]},
//   {cat:"Sustainability",icon:"🌊",accent:"#0f766e",light:"#f0fdfa",border:"#99f6e4",items:[
//     {q:"How does aquaculture impact the environment?",a:"Impacts vary by system. Potential negatives include nutrient loading, chemical discharge, and habitat alteration. However, well-managed RAS systems, offshore cages, and integrated multi-trophic aquaculture (IMTA) can minimize environmental footprint and restore ecosystem services."},
//     {q:"What is integrated multi-trophic aquaculture (IMTA)?",a:"IMTA co-cultures species at different trophic levels so waste from one becomes nutrient input for another. Classic example: salmon effluent → mussels filter organics → sea urchins graze benthic algae. IMTA improves resource efficiency and diversifies farm revenue."},
//   ]},
// ];

// function useCountUp(target, duration = 1200) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     let start = 0;
//     const step = target / 60;
//     const id = setInterval(() => {
//       start = Math.min(start + step, target);
//       setCount(Math.round(start));
//       if (start >= target) clearInterval(id);
//     }, duration / 60);
//     return () => clearInterval(id);
//   }, [target, duration]);
//   return count;
// }

// export default function AquacultureFAQ() {
//   const [active, setActive] = useState("All");
//   const [open, setOpen] = useState(null);
//   const c1 = useCountUp(600);
//   const c2 = useCountUp(90);
//   const c3 = useCountUp(50);
//   const cats = ["All", ...DATA.map(d => d.cat)];
//   const filtered = active === "All" ? DATA : DATA.filter(d => d.cat === active);
//   const tog = key => setOpen(open === key ? null : key);

//   return (
//     <div style={{ fontFamily: "'DM Sans','Helvetica Neue',sans-serif", background: "#fff" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
//         @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
//         @keyframes bubbleRise{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-120px);opacity:0}}
//         @keyframes scanLine{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}
//         @keyframes fadeUp{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}
//         @keyframes scaleIn{0%{opacity:0;transform:scale(.92)}100%{opacity:1;transform:scale(1)}}
//         @keyframes pulseGlow{0%,100%{box-shadow:0 0 0 0 rgba(56,189,248,.3)}50%{box-shadow:0 0 0 8px rgba(56,189,248,0)}}
//         .hero-badge::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent);animation:scanLine 3s ease-in-out infinite;border-radius:999px;}
//         .stat-card-item:hover{transform:translateY(-4px)!important;box-shadow:0 12px 32px rgba(30,77,183,.14)!important;}
//         .faq-open-item::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:14px 0 0 14px;}
//         .pill-btn:hover{border-color:#b4c8f0!important;background:#f0f5ff!important;color:#1e3a8a!important;}
//         .cta-btn-main:hover{background:rgba(255,255,255,.22)!important;border-color:rgba(255,255,255,.6)!important;transform:translateY(-2px);}
//       `}</style>

//       {/* HERO */}
//       <div style={{ background: "linear-gradient(165deg,#0a1e5e 0%,#1a3275 35%,#0f2e7a 65%,#071640 100%)", position: "relative", overflow: "hidden", padding: "60px 24px 90px", textAlign: "center" }}>
//         <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.13) 1.5px,transparent 1.5px)", backgroundSize: "30px 30px", pointerEvents: "none" }} />
//         <div style={{ position: "absolute", top: -60, left: -80, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,rgba(30,77,183,.35) 0%,transparent 70%)", pointerEvents: "none" }} />
//         <div style={{ position: "absolute", top: -40, right: -60, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(56,189,248,.18) 0%,transparent 70%)", pointerEvents: "none" }} />
//         {[{l:"12%",s:6,d:0},{l:"25%",s:10,d:1},{l:"55%",s:4,d:.5},{l:"70%",s:8,d:2},{l:"85%",s:5,d:1.5}].map((b,i)=>(
//           <div key={i} style={{ position:"absolute", width:b.s, height:b.s, left:b.l, bottom:"8%", borderRadius:"50%", background:"rgba(255,255,255,.13)", animation:`bubbleRise ${4+i}s linear ${b.d}s infinite`, pointerEvents:"none" }} />
//         ))}

//         <div style={{ position: "relative", zIndex: 2, maxWidth: 740, margin: "0 auto",marginTop:'100px' }}>
//           <div className="hero-badge" style={{ display:"inline-flex", alignItems:"center", gap:8, border:"1.5px solid rgba(255,255,255,.3)", borderRadius:999, padding:"8px 22px", fontSize:11, letterSpacing:".13em", fontWeight:600, color:"rgba(255,255,255,.9)", background:"rgba(255,255,255,.08)", marginBottom:30, position:"relative", overflow:"hidden" }}>
//             🐠 AQUACULTURE KNOWLEDGE BASE
//           </div>
//           <h1 style={{ fontSize:"clamp(30px,5.5vw,52px)", fontWeight:700, lineHeight:1.1, letterSpacing:"-.025em", marginBottom:18, background:"linear-gradient(135deg,#fff 0%,#93c5fd 50%,#7dd3fc 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", animation:"fadeUp .8s ease both" }}>
//             Frequently Asked<br/>Questions
//           </h1>
//           <p style={{ fontSize:16, color:"rgba(255,255,255,.58)", maxWidth:560, margin:"0 auto", lineHeight:1.75, animation:"fadeUp .8s .15s ease both" }}>
//             Expert answers on aquaculture fundamentals — from water quality and disease management to feed nutrition, certification, and sustainability.
//           </p>
//           {/* <div style={{ display:"flex", justifyContent:"center", gap:32, marginTop:36, flexWrap:"wrap", animation:"fadeUp .8s .3s ease both" }}>
//             {[{n:`${c1}+`,l:"Species farmed"},{n:`${c2}M t`,l:"Annual output"},{n:`${c3}%`,l:"Of global seafood"}].map((s,i)=>(
//               <div key={i} style={{ textAlign:"center" }}>
//                 <div style={{ fontSize:22, fontWeight:700, color:"#fff" }}>{s.n}</div>
//                 <div style={{ fontSize:11, color:"rgba(255,255,255,.5)", marginTop:2, letterSpacing:".04em" }}>{s.l}</div>
//               </div>
//             ))}
//           </div> */}
//         </div>
//       </div>

//       {/* Animated wave */}
//       <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:"block", background:"#fff", marginTop:"-1px" }} height="80">
//         <path fill="#0f2e7a" d="M0 0 L1440 0 L1440 40 Q1080 80 720 50 Q360 20 0 60 Z">
//           <animate attributeName="d" values="M0 0 L1440 0 L1440 40 Q1080 80 720 50 Q360 20 0 60 Z;M0 0 L1440 0 L1440 55 Q1080 20 720 55 Q360 80 0 40 Z;M0 0 L1440 0 L1440 40 Q1080 80 720 50 Q360 20 0 60 Z" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1"/>
//         </path>
//         <path fill="rgba(56,189,248,.15)" d="M0 20 Q360 60 720 35 Q1080 10 1440 50 L1440 80 L0 80 Z">
//           <animate attributeName="d" values="M0 20 Q360 60 720 35 Q1080 10 1440 50 L1440 80 L0 80 Z;M0 40 Q360 10 720 45 Q1080 65 1440 30 L1440 80 L0 80 Z;M0 20 Q360 60 720 35 Q1080 10 1440 50 L1440 80 L0 80 Z" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1"/>
//         </path>
//       </svg>

//       {/* WHITE BODY */}
//       <div style={{ background:"#fff", padding:"0 24px 80px" }}>
//         <div style={{ maxWidth:880, margin:"0 auto", paddingTop:52 }}>

//           {/* Stats */}
//           {/* <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:14, marginBottom:48 }}>
//             {[{icon:"🐟",n:"600+",l:"Species farmed globally"},{icon:"🌊",n:"90M t",l:"Annual aquaculture output"},{icon:"📋",n:"580+",l:"ASC certified farms"},{icon:"🌏",n:"50%",l:"Of seafood from aquaculture"}].map((s,i)=>(
//               <div key={i} className="stat-card-item" style={{ background:"linear-gradient(135deg,#f0f5ff,#e8effd)", borderRadius:16, padding:"20px 16px", textAlign:"center", border:"1px solid #dbeafe", position:"relative", overflow:"hidden", transition:"transform .25s,box-shadow .25s", animation:`scaleIn .6s ${i*.07}s ease both` }}>
//                 <div style={{ fontSize:22, marginBottom:8 }}>{s.icon}</div>
//                 <div style={{ fontSize:28, fontWeight:700, color:"#1e3a8a", lineHeight:1, marginBottom:4 }}>{s.n}</div>
//                 <div style={{ fontSize:12, color:"#64748b", lineHeight:1.4 }}>{s.l}</div>
//               </div>
//             ))}
//           </div> */}

//           {/* Progress bar */}
//           <div style={{ height:6, background:"#f0f5ff", borderRadius:99, marginBottom:44, overflow:"hidden" }}>
//             <div style={{ height:"100%", width:"100%", background:"linear-gradient(90deg,#1e3a8a,#38bdf8,#1e3a8a)", borderRadius:99, backgroundSize:"200% 100%", position:"relative", overflow:"hidden" }}>
//               <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent)", animation:"scanLine 2s ease-in-out infinite" }} />
//             </div>
//           </div>

//           {/* Filter pills */}
//           <div style={{ display:"flex", flexWrap:"wrap", gap:8, justifyContent:"center", marginBottom:48 }}>
//             {cats.map(cat=>{
//               const sec=DATA.find(d=>d.cat===cat);
//               const isActive=active===cat;
//               return <button key={cat} className={isActive?'':'pill-btn'} onClick={()=>{setActive(cat);setOpen(null);}} style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"8px 16px", borderRadius:999, cursor:"pointer", fontSize:13, fontFamily:"inherit", fontWeight:isActive?600:400, border:isActive?"1.5px solid #1e3a8a":"1.5px solid #e2e8f0", background:isActive?"#1e3a8a":"#f8fafc", color:isActive?"#fff":"#64748b", transition:"all .22s", boxShadow:isActive?"0 4px 14px rgba(26,50,117,.22)":"none" }}>
//                 {sec?sec.icon:"🐠"} {cat}
//               </button>;
//             })}
//           </div>

//           {/* FAQ sections */}
//           {filtered.map((sec,si)=>(
//             <div key={sec.cat} style={{ marginBottom:48, animation:`fadeUp .5s ${si*.07}s ease both` }}>
//               <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
//                 <div style={{ width:38, height:38, borderRadius:10, background:sec.light, border:`1.5px solid ${sec.border}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, flexShrink:0, transition:"transform .3s", cursor:"default" }}>{sec.icon}</div>
//                 <span style={{ fontSize:11, letterSpacing:".11em", fontWeight:700, textTransform:"uppercase", color:sec.accent }}>{sec.cat}</span>
//                 <div style={{ flex:1, height:1, background:`linear-gradient(90deg,${sec.border},transparent)` }} />
//               </div>
//               <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
//                 {sec.items.map((item,i)=>{
//                   const key=`${sec.cat}-${i}`;
//                   const isOpen=open===key;
//                   return <div key={key} className={isOpen?"faq-open-item":""} style={{ borderRadius:14, overflow:"hidden", border:`1.5px solid ${isOpen?sec.border:"#e8edf5"}`, background:isOpen?sec.light:"#fafbfc", boxShadow:isOpen?"0 4px 24px rgba(30,58,138,.09)":"none", transition:"all .28s cubic-bezier(.4,0,.2,1)", position:"relative" }}>
//                     {isOpen && <div style={{ position:"absolute", left:0, top:0, bottom:0, width:3, background:sec.accent, borderRadius:"14px 0 0 14px" }} />}
//                     <button onClick={()=>tog(key)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:14, padding:"18px 20px", background:"transparent", border:"none", cursor:"pointer", textAlign:"left", fontFamily:"inherit" }}>
//                       <span style={{ fontSize:14.5, fontWeight:500, lineHeight:1.5, flex:1, color:isOpen?sec.accent:"#1e293b", transition:"color .2s" }}>{item.q}</span>
//                       <div style={{ width:28, height:28, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, border:`1.5px solid ${isOpen?sec.accent:"#e2e8f0"}`, background:isOpen?sec.light:"transparent", transition:"all .28s", animation:isOpen?"pulseGlow 2s ease-in-out infinite":"none" }}>
//                         <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ transform:`rotate(${isOpen?180:0}deg)`, transition:"transform .28s cubic-bezier(.4,0,.2,1)" }}>
//                           <path d="M2.5 4.5L6.5 8.5L10.5 4.5" stroke={isOpen?sec.accent:"#94a3b8"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                       </div>
//                     </button>
//                     {isOpen && <div style={{ padding:"0 20px 20px", paddingTop:14, fontSize:14, lineHeight:1.8, color:"#475569", borderTop:`1px solid ${sec.border}`, animation:"fadeUp .3s ease both" }}>{item.a}</div>}
//                   </div>;
//                 })}
//               </div>
//             </div>
//           ))}

//           {/* Animated wave line */}
//           <svg viewBox="0 0 880 60" style={{ width:"100%", opacity:.15, marginBottom:8, display:"block" }} xmlns="http://www.w3.org/2000/svg">
//             <path stroke="#1e3a8a" strokeWidth="1.5" fill="none" d="M0 30 Q110 10 220 30 Q330 50 440 30 Q550 10 660 30 Q770 50 880 30">
//               <animate attributeName="d" values="M0 30 Q110 10 220 30 Q330 50 440 30 Q550 10 660 30 Q770 50 880 30;M0 30 Q110 50 220 30 Q330 10 440 30 Q550 50 660 30 Q770 10 880 30;M0 30 Q110 10 220 30 Q330 50 440 30 Q550 10 660 30 Q770 50 880 30" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1"/>
//             </path>
//           </svg>

//           {/* CTA */}
//           <div style={{ textAlign:"center", padding:"48px 36px", borderRadius:24, background:"linear-gradient(155deg,#0a1e5e 0%,#1a3275 50%,#0f2e7a 100%)", position:"relative", overflow:"hidden" }}>
//             <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(255,255,255,.09) 1.5px,transparent 1.5px)", backgroundSize:"24px 24px", pointerEvents:"none" }} />
//             <div style={{ position:"relative", zIndex:1 }}>
//               <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:"rgba(56,189,248,.15)", border:"1px solid rgba(56,189,248,.3)", borderRadius:999, padding:"6px 14px", fontSize:11, color:"#7dd3fc", letterSpacing:".1em", fontWeight:600, marginBottom:16 }}>EXPERT SUPPORT</div>
//               <h3 style={{ fontSize:22, fontWeight:700, color:"#fff", marginBottom:10 }}>Still have questions?</h3>
//               <p style={{ color:"rgba(255,255,255,.5)", fontSize:14, marginBottom:26, lineHeight:1.7 }}>Connect with our aquaculture specialists for tailored guidance on your farming operation.</p>
//               <button className="cta-btn-main" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"13px 32px", borderRadius:999, border:"1.5px solid rgba(255,255,255,.35)", color:"#fff", fontSize:14, fontWeight:600, background:"rgba(255,255,255,.1)", cursor:"pointer", fontFamily:"inherit", transition:"all .22s", letterSpacing:".02em" }}>
//                 Contact our experts
//               </button>
//             </div>
//           </div>

//         </div>
        
//       </div>
//     </div>
    
//   );
// }
"use client";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const DATA = [
  {
    cat: "General",
    icon: "🐟",
    accent: "#1e3a8a",
    light: "#eff6ff",
    border: "#bfdbfe",
    items: [
      {
        q: "What is aquaculture?",
        a: "Aquaculture is the controlled farming of aquatic organisms — fish, shrimp, shellfish, crustaceans, seaweed, and algae — in freshwater, brackish, or marine environments. Water quality, feed, stocking density, and health management are actively controlled to optimize growth, survival, and yield.",
      },
      {
        q: "What species are commonly farmed in aquaculture?",
        a: "Commonly farmed species include vannamei shrimp (Pacific white shrimp), tilapia, catfish, Atlantic salmon, carp, sea bass, sea bream, rohu, milkfish, oysters, mussels, clams, and various seaweeds. Each species has unique requirements for temperature, salinity, stocking density, feed composition, and disease management.",
      },
      {
        q: "What is the difference between capture fisheries and aquaculture?",
        a: "Capture fisheries harvest wild aquatic organisms without human intervention, relying on natural stock abundance. Aquaculture involves deliberate breeding, rearing, and harvesting under controlled or semi-controlled conditions, making production more predictable, scalable, and traceable.",
      },
      {
        q: "What are the main types of aquaculture systems?",
        a: "Major system types include: Pond culture (earthen or lined ponds, most common globally), Cage/net pen culture (in lakes, rivers, or sea), Recirculating Aquaculture Systems (RAS, fully controlled indoor systems), flow-through or raceway systems, integrated rice-fish farming, and biofloc technology (BFT) systems.",
      },
      {
        q: "What is biofloc technology in aquaculture?",
        a: "Biofloc technology (BFT) uses dense microbial communities — bacteria, microalgae, and protozoa — suspended in the water column to convert toxic ammonia into microbial biomass that fish and shrimp can consume as a protein-rich feed supplement. BFT systems reduce water exchange requirements, cut feed costs, and improve biosecurity by minimizing pathogen introduction.",
      },
      {
        q: "What is Recirculating Aquaculture System (RAS)?",
        a: "RAS is a land-based, closed-loop aquaculture system where water is continuously filtered, treated, and recirculated rather than discharged. It uses mechanical filtration, biological filtration (nitrification), UV sterilization, degassing, and oxygenation to maintain optimal water quality. RAS enables year-round production independent of climate and dramatically reduces water consumption and environmental discharge.",
      },
      {
        q: "What is the global importance of aquaculture?",
        a: "Aquaculture now supplies over 50% of all fish and seafood consumed globally and is the fastest-growing food production sector. It plays a critical role in global food security, rural livelihoods, protein supply, and reducing pressure on wild capture fisheries, which are at or beyond sustainable limits for most major stocks.",
      },
    ],
  },
  {
    cat: "Water Quality",
    icon: "💧",
    accent: "#0369a1",
    light: "#f0f9ff",
    border: "#bae6fd",
    items: [
      {
        q: "What water quality parameters are critical for fish and shrimp farming?",
        a: "The most critical parameters are: Dissolved Oxygen (>5 mg/L, ideally >6 mg/L for shrimp), pH (6.5–9.0), temperature (species-specific), total ammonia nitrogen (TAN <1 mg/L), nitrite (<0.5 mg/L), nitrate (<100 mg/L for most species), salinity (species-specific), turbidity, total suspended solids (TSS), and alkalinity (>100 mg/L as CaCO₃). Daily monitoring is essential for health and feed conversion.",
      },
      {
        q: "How do I manage ammonia buildup in a pond or RAS?",
        a: "In ponds, ammonia is managed by reducing feed inputs, improving aeration, maintaining healthy phytoplankton blooms, applying beneficial bacteria (Nitrosomonas, Nitrobacter), and partial water exchanges. In RAS, biological filters (biofilters) housing nitrifying bacteria convert ammonia → nitrite → nitrate, supplemented by mechanical solids removal, protein skimmers, and controlled water exchange to dilute nitrate.",
      },
      {
        q: "Why does dissolved oxygen (DO) drop at night and what should I do?",
        a: "Phytoplankton and aquatic plants consume oxygen through respiration at night rather than producing it via photosynthesis. In high-density ponds, DO can crash to critically low levels before dawn. Prevention measures include running paddlewheel aerators continuously through the night, maintaining moderate phytoplankton density (Secchi disk 25–40 cm), reducing evening feed rations, and installing emergency aeration capacity for high-risk periods.",
      },
      {
        q: "What causes algae blooms in pond aquaculture and how are they controlled?",
        a: "Algal blooms — including harmful cyanobacteria (blue-green algae) — are triggered by excess dissolved nutrients (nitrogen, phosphorus), high sunlight intensity, and warm, stratified water. Control strategies include reducing feed input, increasing water exchange, mechanical aeration to disrupt stratification, applying beneficial Bacillus probiotics to compete with harmful algae, optimizing stocking density, and using approved algaecides at label rates only when necessary.",
      },
      {
        q: "What is the ideal pH for aquaculture ponds?",
        a: "Most freshwater species thrive at pH 6.5–9.0, with an optimal range of 7.5–8.5. Marine and brackishwater shrimp perform best at pH 7.8–8.5. In productive ponds, pH naturally swings higher during daytime photosynthesis. Wide daily swings (>1.0 pH unit) are stressful; liming with agricultural lime or calcium carbonate stabilizes pH and alkalinity.",
      },
      {
        q: "How does salinity affect shrimp farming?",
        a: "Pacific white shrimp (L. vannamei) are euryhaline, tolerating 0.5–45 ppt, with optimal growth at 15–25 ppt. Very low salinities (<5 ppt) require mineral supplementation (potassium, magnesium) to prevent osmotic stress and poor survival. Salinity also affects bacterial and viral pathogen viability, making it an important biosecurity variable.",
      },
    ],
  },
  {
    cat: "Feed & Nutrition",
    icon: "🌾",
    accent: "#15803d",
    light: "#f0fdf4",
    border: "#bbf7d0",
    items: [
      {
        q: "What is Feed Conversion Ratio (FCR) and why does it matter?",
        a: "FCR is the weight of feed given divided by the weight of biomass gained. Lower FCR means more efficient use of feed. Industry benchmarks: salmon ~1.1–1.3, tilapia ~1.5–1.8, shrimp ~1.5–2.0, catfish ~2.0–2.5. Improving FCR by even 0.1 units significantly reduces feed cost (the single largest input cost at 50–70% of total), reduces nutrient waste loading, and improves profitability.",
      },
      {
        q: "What are the key nutritional requirements for farmed shrimp?",
        a: "Shrimp require: crude protein 32–40% (higher for juveniles), lipids 6–8% (rich in phospholipids and HUFA), digestible carbohydrates as an energy-sparing source, essential amino acids (methionine, lysine, arginine), essential fatty acids (EPA, DHA), astaxanthin for coloration and antioxidant function, vitamins (C, E, B-complex), and minerals (calcium, phosphorus, magnesium). Feed particle size must match the developmental stage.",
      },
      {
        q: "What is the best feeding strategy for fish and shrimp?",
        a: "Juveniles require higher feeding frequency (6–8 times/day for early postlarvae) while grow-out animals are fed 2–4 times/day. Automatic feeders with camera-based feed waste monitoring enable satiation-based feeding, significantly improving FCR and water quality. Feed should be distributed evenly across the pond or cage. Feeding trays (anco trays) in shrimp ponds allow farmers to assess actual consumption versus formulated rations and adjust in real time.",
      },
      {
        q: "Can fishmeal be replaced in aquaculture feeds?",
        a: "Yes, substantial fishmeal replacement is now commercially viable. Alternatives include soy protein concentrate (SPC), fermented soybean meal, canola meal, black soldier fly larvae meal (BSFL), single-cell proteins (yeast, algae), and poultry by-product meal. Carnivorous species like salmon require careful supplementation of limiting amino acids (methionine, lysine) and omega-3 fatty acids (EPA, DHA) when fishmeal is reduced below 20%.",
      },
      {
        q: "What are probiotics and prebiotics in aquaculture feeds?",
        a: "Probiotics are live beneficial microorganisms (Bacillus, Lactobacillus, Saccharomyces) that improve gut microbiota, enhance nutrient digestion, stimulate immune responses, and competitively exclude pathogens. Prebiotics are non-digestible compounds (MOS, FOS, beta-glucans) that selectively feed beneficial gut bacteria. Both are widely used as antibiotic-free growth promoters and health enhancers in modern aquafeeds.",
      },
      {
        q: "What are feed supplements used for in aquaculture?",
        a: "Feed supplements serve multiple functions: growth promotion (amino acid and enzyme supplements), disease prevention (immunostimulants, organic acids, essential oils), gut health maintenance (probiotics, prebiotics, digestive enzymes), water quality improvement (phosphorus binders, enzyme phytase), stress reduction (vitamin C, electrolytes), and reproductive performance (vitamin E, astaxanthin for broodstock). They are a critical tool for intensified systems where natural nutrient sources are limited.",
      },
    ],
  },
  {
    cat: "Disease & Health",
    icon: "🔬",
    accent: "#9f1239",
    light: "#fff1f2",
    border: "#fecdd3",
    items: [
      {
        q: "What are the most common and economically damaging diseases in shrimp farming?",
        a: "The most damaging shrimp diseases include: White Spot Syndrome Virus (WSSV) — the most devastating viral disease globally, capable of 100% mortality in 3–10 days; Early Mortality Syndrome / Acute Hepatopancreatic Necrosis Disease (EMS/AHPND) caused by Vibrio parahaemolyticus carrying a specific plasmid; Enterocytozoon hepatopenaei (EHP) — a microsporidian causing poor and uneven growth; Infectious Myonecrosis Virus (IMNV); and Running Mortality Syndrome (RMS/NHP). Prevention through SPF broodstock, PCR screening, biosecurity, and probiotic programs is far more cost-effective than treatment.",
      },
      {
        q: "What are the major diseases in fish farming?",
        a: "Common fish diseases include: bacterial — Aeromonas (motile Aeromonas septicemia, MAS), Streptococcus (streptococcosis), columnaris (Flavobacterium), Edwardsiella (edwardsiellosis), Vibrio; viral — Koi Herpesvirus (KHV), Viral Hemorrhagic Septicemia (VHS), Infectious Hematopoietic Necrosis (IHN), Tilapia Lake Virus (TiLV); parasitic — Ichthyophthirius multifiliis (Ich/white spot), Trichodina, Dactylogyrus (gill flukes), Argulus (fish lice), sea lice (Lepeophtheirus salmonis) in salmon; and fungal — Saprolegnia (cotton mold).",
      },
      {
        q: "What biosecurity measures are essential on an aquaculture farm?",
        a: "Core biosecurity practices include: sourcing only certified SPF/SPR or disease-screened broodstock and postlarvae; strict quarantine protocols for new animals; footbaths, hand-washing stations, and PPE at all entry points; restricting and logging all visitor, equipment, and vehicle access; implementing all-in/all-out stocking protocols; preventing bird, crab, and rodent access; securing water intake with fine mesh screens; avoiding shared equipment between production units; and conducting regular PCR health monitoring throughout the crop cycle.",
      },
      {
        q: "What is White Spot Syndrome Virus (WSSV) and how is it managed?",
        a: "WSSV is a large dsDNA virus affecting all commercially farmed penaeid shrimp species, with no approved antiviral treatment and potential for complete crop loss within days. Management focuses entirely on prevention: use of SPF (Specific Pathogen Free) broodstock and postlarvae with PCR certification, pond preparation with thorough drying and disinfection, exclusion of WSSV-carrying wild crustacea and birds (reservoir hosts), strict biosecurity at all entry points, and early harvesting at first clinical signs of infection.",
      },
      {
        q: "How can Vibrio infections be controlled in shrimp ponds?",
        a: "Vibrio is ubiquitous in aquatic environments and becomes pathogenic under stress and poor water quality conditions. Control strategies include: maintaining optimal water quality (DO, pH, salinity, organic load), using probiotic Bacillus programs to competitively suppress Vibrio populations, avoiding overfeeding that creates organic-rich sediments, regular disinfection of incoming water, judicious use of approved disinfectants (DDAC, BKC, oxidants) during risk periods, and minimizing handling stress during the sensitive postlarval period.",
      },
      {
        q: "How is EHP (Enterocytozoon hepatopenaei) diagnosed and managed?",
        a: "EHP is a microsporidian parasite infecting shrimp hepatopancreatic tubule epithelial cells, causing growth retardation, high FCR, and size heterogeneity without significant mortality. Diagnosis requires PCR testing of hepatopancreas tissue — wet smear microscopy can detect spores but PCR is definitive. There is no approved treatment. Management relies entirely on prevention: PCR-screened broodstock, thorough pond preparation (drying, liming, disinfection), avoiding live feeds from unknown sources, and strict biosecurity.",
      },
      {
        q: "What role do water quality products and sanitizers play in disease prevention?",
        a: "Water quality products — including oxidants (KMNO₄, sodium percarbonate), probiotics (Bacillus spp.), and mineral amendments — maintain the stable, low-stress environment that prevents opportunistic pathogens from reaching infectious levels. Sanitizers (DDAC, BKC, iodophors, chlorine compounds) are used to disinfect pond infrastructure, equipment, water intake, and hands/footwear. When used correctly, these tools are front-line disease prevention tools that reduce reliance on antibiotics and chemotherapeutants.",
      },
    ],
  },
  {
    cat: "Products & Treatments",
    icon: "💊",
    accent: "#7c3aed",
    light: "#faf5ff",
    border: "#ddd6fe",
    items: [
      {
        q: "What types of aquaculture health products are available?",
        a: "The main categories are: Feed supplements (growth promoters, vitamins, minerals, amino acids, immunostimulants, probiotics, prebiotics, digestive enzymes); Water treatment products (beneficial bacteria/probiotics, oxidants, pH/alkalinity adjusters, mineral supplements); Sanitizers and disinfectants (for pond preparation, equipment, and water treatment); Gut health products (organic acids, yeast extracts, herbal extracts); and Specialty health products (immunostimulants, hepatoprotectants, molting regulators for crustaceans).",
      },
      {
        q: "What are gut probiotics and how do they benefit aquaculture animals?",
        a: "Gut probiotics are live Bacillus, Lactobacillus, or yeast-based preparations administered through feed or water. They colonize the digestive tract, produce digestive enzymes, synthesize vitamins, competitively exclude pathogenic bacteria, stimulate innate immune responses, and improve gut morphology (villus height and density). Benefits include improved FCR, better survival rates, reduced Vibrio load, and reduced need for antibiotic treatments.",
      },
      {
        q: "What water treatment probiotics do and how are they applied?",
        a: "Water-applied probiotics (typically Bacillus subtilis, B. licheniformis, B. megaterium blends) decompose organic sludge and uneaten feed on the pond bottom, reducing toxic hydrogen sulfide and methane production, mineralizing nutrients, maintaining aerobic conditions in the sediment layer, and suppressing pathogenic bacteria including Vibrio. They are applied directly to pond water, typically weekly or after each rain event, and work best when aeration is maintained to support their aerobic metabolism.",
      },
      {
        q: "How do growth promoters work in aquaculture?",
        a: "Growth promoters improve the efficiency with which animals convert feed into body mass. Mechanisms include: enzyme supplements (protease, lipase, phytase, amylase) that improve digestibility of feed ingredients; organic acids that lower gut pH and improve mineral absorption; immunostimulants that reduce subclinical disease burden; nucleotides that support rapid cell division during growth phases; and herbal extracts with anti-stress and digestive stimulant properties. They do not replace quality feed but optimize the extraction of nutritional value from it.",
      },
      {
        q: "What sanitizers are safe and effective for use in aquaculture?",
        a: "Commonly used aquaculture sanitizers include: Quaternary ammonium compounds (DDAC, BKC) — effective against bacteria, viruses, and fungi for equipment and water treatment; Iodophors (povidone-iodine) — used for hatchery disinfection and egg surface treatment; Sodium hypochlorite / chlorine — used for pond and equipment disinfection during fallowing; Potassium permanganate (KMnO₄) — treats external parasites and as a pond oxidant; Hydrogen peroxide — used in salmon farming for sea lice treatment and as a disinfectant. All must be used at label rates and with appropriate withdrawal periods.",
      },
      {
        q: "What vitamins and minerals are most important for farmed fish and shrimp?",
        a: "Key vitamins include: Vitamin C (ascorbic acid) — essential for collagen synthesis, wound healing, and immune function (cannot be synthesized by most fish); Vitamin E — antioxidant, reproductive performance; B-complex vitamins — energy metabolism; Vitamin D — calcium and phosphorus metabolism; fat-soluble vitamins A, K. Critical minerals include calcium, phosphorus, magnesium, potassium, sodium, iron, zinc, manganese, selenium, and iodine. Deficiencies manifest as poor growth, skeletal deformities, hemorrhage, and suppressed immune response.",
      },
    ],
  },
  {
    cat: "Sustainability",
    icon: "🌊",
    accent: "#0f766e",
    light: "#f0fdfa",
    border: "#99f6e4",
    items: [
      {
        q: "How does aquaculture impact the environment?",
        a: "Impacts vary widely by system and management quality. Potential negative impacts include nutrient loading (nitrogen, phosphorus) into receiving waters, antibiotic and chemical residues, escaped animals affecting wild genetics, habitat conversion (mangrove loss for shrimp ponds), and high water consumption. Well-managed systems — particularly RAS, offshore cages, and integrated multi-trophic aquaculture (IMTA) — can minimize these impacts, and responsible aquaculture produces protein with a significantly lower carbon and land footprint than most terrestrial livestock.",
      },
      {
        q: "What is integrated multi-trophic aquaculture (IMTA)?",
        a: "IMTA co-cultures species at different trophic levels so waste from one becomes input for another, improving overall resource efficiency. A classic example: salmon → mussels filter organic particles → sea urchins or abalone graze benthic algae → macroalgae absorb dissolved inorganic nutrients. IMTA reduces environmental loading, diversifies farm income, and can improve the sustainability credentials required by premium seafood markets.",
      },
      {
        q: "What certifications indicate sustainable aquaculture practice?",
        a: "Leading international certification schemes include: ASC (Aquaculture Stewardship Council) — covers environmental responsibility, animal welfare, community impact, and food safety; BAP (Best Aquaculture Practices, by GSA) — a multi-star scheme covering farms, hatcheries, feed mills, and processing; GlobalG.A.P. — widely recognized for food safety and good agricultural practice; and EU Organic Aquaculture standards. Certification opens access to premium retail markets in Europe, North America, and Japan.",
      },
      {
        q: "How can antibiotic use in aquaculture be reduced?",
        a: "Antibiotic reduction strategies include: implementing strict biosecurity to prevent disease introduction; using vaccines where available (salmon bacterial vaccines are highly effective); applying probiotic programs to support immune function and suppress pathogenic bacteria; optimizing water quality and stocking density to reduce stress; using immunostimulants to prime innate immunity; employing early-warning health monitoring to detect and address problems before clinical outbreaks; and adopting certified disease-free broodstock and postlarvae to start with healthy stock.",
      },
      {
        q: "What is the carbon footprint of farmed seafood compared to other proteins?",
        a: "Farmed seafood generally has a lower greenhouse gas (GHG) footprint than beef, pork, or chicken when measured in kg CO₂-equivalent per kg edible protein. Bivalves (oysters, mussels) and herbivorous fish (tilapia, carp, catfish) have among the lowest footprints of any animal protein. Salmonids and shrimp have a higher footprint due to feed input (fishmeal and fish oil), but remain substantially lower than beef. RAS systems have a higher energy footprint but compensate through land and water efficiency.",
      },
      {
        q: "What is responsible use of chemicals and medicines in aquaculture?",
        a: "Responsible chemical use follows a hierarchy: prevention first (biosecurity, water quality, nutrition, genetics), then supportive care (water treatment products, probiotics, immunostimulants), and pharmaceuticals only as a last resort under veterinary supervision. Key principles include using only approved compounds, respecting withdrawal periods before harvest, maintaining treatment records, avoiding compounds banned in target export markets, and not using antibiotics as prophylactics or growth promoters. This approach protects food safety, prevents antimicrobial resistance, and maintains market access.",
      },
    ],
  },
];

export default function AquacultureFAQ() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<string | null>(null);

  const cats = ["All", ...DATA.map(d => d.cat)];
  const filtered = active === "All" ? DATA : DATA.filter(d => d.cat === active);
  const tog = (key: string) => setOpen(open === key ? null : key);

  return (
    <div style={{ fontFamily: "'DM Sans','Helvetica Neue',sans-serif", background: "#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes bubbleRise{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-120px);opacity:0}}
        @keyframes scanLine{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}
        @keyframes fadeUp{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}
        @keyframes scaleIn{0%{opacity:0;transform:scale(.92)}100%{opacity:1;transform:scale(1)}}
        @keyframes pulseGlow{0%,100%{box-shadow:0 0 0 0 rgba(56,189,248,.3)}50%{box-shadow:0 0 0 8px rgba(56,189,248,0)}}
        .hero-badge::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent);animation:scanLine 3s ease-in-out infinite;border-radius:999px;}
        .pill-btn:hover{border-color:#b4c8f0!important;background:#f0f5ff!important;color:#1e3a8a!important;}
        .cta-btn-main:hover{background:rgba(255,255,255,.22)!important;border-color:rgba(255,255,255,.6)!important;transform:translateY(-2px);}
      `}</style>

      {/* HERO */}
      <div style={{ background: "linear-gradient(165deg,#0a1e5e 0%,#1a3275 35%,#0f2e7a 65%,#071640 100%)", position: "relative", overflow: "hidden", padding: "60px 24px 90px", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.13) 1.5px,transparent 1.5px)", backgroundSize: "30px 30px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -60, left: -80, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,rgba(30,77,183,.35) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -40, right: -60, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(56,189,248,.18) 0%,transparent 70%)", pointerEvents: "none" }} />
        {[{l:"12%",s:6,d:0},{l:"25%",s:10,d:1},{l:"55%",s:4,d:.5},{l:"70%",s:8,d:2},{l:"85%",s:5,d:1.5}].map((b,i)=>(
          <div key={i} style={{ position:"absolute", width:b.s, height:b.s, left:b.l, bottom:"8%", borderRadius:"50%", background:"rgba(255,255,255,.13)", animation:`bubbleRise ${4+i}s linear ${b.d}s infinite`, pointerEvents:"none" }} />
        ))}

        <div style={{ position: "relative", zIndex: 2, maxWidth: 740, margin: "0 auto", marginTop: "100px" }}>
          <div className="hero-badge" style={{ display:"inline-flex", alignItems:"center", gap:8, border:"1.5px solid rgba(255,255,255,.3)", borderRadius:999, padding:"8px 22px", fontSize:11, letterSpacing:".13em", fontWeight:600, color:"rgba(255,255,255,.9)", background:"rgba(255,255,255,.08)", marginBottom:30, position:"relative", overflow:"hidden" }}>
            🐠 AQUACULTURE KNOWLEDGE BASE
          </div>
          <h1 style={{ fontSize:"clamp(30px,5.5vw,52px)", fontWeight:700, lineHeight:1.1, letterSpacing:"-.025em", marginBottom:18, background:"linear-gradient(135deg,#fff 0%,#93c5fd 50%,#7dd3fc 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", animation:"fadeUp .8s ease both" }}>
            Frequently Asked<br/>Questions
          </h1>
          <p style={{ fontSize:16, color:"rgba(255,255,255,.58)", maxWidth:560, margin:"0 auto", lineHeight:1.75, animation:"fadeUp .8s .15s ease both" }}>
            Expert answers on aquaculture fundamentals — water quality, disease management, feed nutrition, health products, and sustainability.
          </p>
        </div>
      </div>

      {/* Animated wave */}
      <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:"block", background:"#fff", marginTop:"-1px" }} height="80">
        <path fill="#0f2e7a" d="M0 0 L1440 0 L1440 40 Q1080 80 720 50 Q360 20 0 60 Z">
          <animate attributeName="d" values="M0 0 L1440 0 L1440 40 Q1080 80 720 50 Q360 20 0 60 Z;M0 0 L1440 0 L1440 55 Q1080 20 720 55 Q360 80 0 40 Z;M0 0 L1440 0 L1440 40 Q1080 80 720 50 Q360 20 0 60 Z" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1"/>
        </path>
        <path fill="rgba(56,189,248,.15)" d="M0 20 Q360 60 720 35 Q1080 10 1440 50 L1440 80 L0 80 Z">
          <animate attributeName="d" values="M0 20 Q360 60 720 35 Q1080 10 1440 50 L1440 80 L0 80 Z;M0 40 Q360 10 720 45 Q1080 65 1440 30 L1440 80 L0 80 Z;M0 20 Q360 60 720 35 Q1080 10 1440 50 L1440 80 L0 80 Z" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1"/>
        </path>
      </svg>

      {/* WHITE BODY */}
      <div style={{ background:"#fff", padding:"0 24px 80px" }}>
        <div style={{ maxWidth:880, margin:"0 auto", paddingTop:52 }}>

          {/* Progress bar */}
          <div style={{ height:6, background:"#f0f5ff", borderRadius:99, marginBottom:44, overflow:"hidden" }}>
            <div style={{ height:"100%", width:"100%", background:"linear-gradient(90deg,#1e3a8a,#38bdf8,#1e3a8a)", borderRadius:99, backgroundSize:"200% 100%", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent)", animation:"scanLine 2s ease-in-out infinite" }} />
            </div>
          </div>

          {/* Filter pills */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:8, justifyContent:"center", marginBottom:48 }}>
            {cats.map(cat => {
              const sec = DATA.find(d => d.cat === cat);
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  className={isActive ? "" : "pill-btn"}
                  onClick={() => { setActive(cat); setOpen(null); }}
                  style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"8px 16px", borderRadius:999, cursor:"pointer", fontSize:13, fontFamily:"inherit", fontWeight:isActive?600:400, border:isActive?"1.5px solid #1e3a8a":"1.5px solid #e2e8f0", background:isActive?"#1e3a8a":"#f8fafc", color:isActive?"#fff":"#64748b", transition:"all .22s", boxShadow:isActive?"0 4px 14px rgba(26,50,117,.22)":"none" }}
                >
                  {sec ? sec.icon : "🐠"} {cat}
                </button>
              );
            })}
          </div>

          {/* FAQ sections */}
          {filtered.map((sec, si) => (
            <div key={sec.cat} style={{ marginBottom:48, animation:`fadeUp .5s ${si*.07}s ease both` }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
                <div style={{ width:38, height:38, borderRadius:10, background:sec.light, border:`1.5px solid ${sec.border}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, flexShrink:0 }}>{sec.icon}</div>
                <span style={{ fontSize:11, letterSpacing:".11em", fontWeight:700, textTransform:"uppercase", color:sec.accent }}>{sec.cat}</span>
                <div style={{ flex:1, height:1, background:`linear-gradient(90deg,${sec.border},transparent)` }} />
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
                {sec.items.map((item, i) => {
                  const key = `${sec.cat}-${i}`;
                  const isOpen = open === key;
                  return (
                    <div
                      key={key}
                      style={{ borderRadius:14, overflow:"hidden", border:`1.5px solid ${isOpen ? sec.border : "#e8edf5"}`, background:isOpen ? sec.light : "#fafbfc", boxShadow:isOpen ? "0 4px 24px rgba(30,58,138,.09)" : "none", transition:"all .28s cubic-bezier(.4,0,.2,1)", position:"relative" }}
                    >
                      {isOpen && <div style={{ position:"absolute", left:0, top:0, bottom:0, width:3, background:sec.accent, borderRadius:"14px 0 0 14px" }} />}
                      <button
                        onClick={() => tog(key)}
                        style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:14, padding:"18px 20px", background:"transparent", border:"none", cursor:"pointer", textAlign:"left", fontFamily:"inherit" }}
                      >
                        <span style={{ fontSize:14.5, fontWeight:500, lineHeight:1.5, flex:1, color:isOpen ? sec.accent : "#1e293b", transition:"color .2s" }}>{item.q}</span>
                        <div style={{ width:28, height:28, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, border:`1.5px solid ${isOpen ? sec.accent : "#e2e8f0"}`, background:isOpen ? sec.light : "transparent", transition:"all .28s", animation:isOpen ? "pulseGlow 2s ease-in-out infinite" : "none" }}>
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ transform:`rotate(${isOpen ? 180 : 0}deg)`, transition:"transform .28s cubic-bezier(.4,0,.2,1)" }}>
                            <path d="M2.5 4.5L6.5 8.5L10.5 4.5" stroke={isOpen ? sec.accent : "#94a3b8"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </button>
                      {isOpen && (
                        <div style={{ padding:"0 20px 20px", paddingTop:14, fontSize:14, lineHeight:1.8, color:"#475569", borderTop:`1px solid ${sec.border}`, animation:"fadeUp .3s ease both" }}>
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Animated wave line */}
          <svg viewBox="0 0 880 60" style={{ width:"100%", opacity:.15, marginBottom:8, display:"block" }} xmlns="http://www.w3.org/2000/svg">
            <path stroke="#1e3a8a" strokeWidth="1.5" fill="none" d="M0 30 Q110 10 220 30 Q330 50 440 30 Q550 10 660 30 Q770 50 880 30">
              <animate attributeName="d" values="M0 30 Q110 10 220 30 Q330 50 440 30 Q550 10 660 30 Q770 50 880 30;M0 30 Q110 50 220 30 Q330 10 440 30 Q550 50 660 30 Q770 10 880 30;M0 30 Q110 10 220 30 Q330 50 440 30 Q550 10 660 30 Q770 50 880 30" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1"/>
            </path>
          </svg>

        

        </div>
      </div>

      <Footer />
    </div>
  );
}