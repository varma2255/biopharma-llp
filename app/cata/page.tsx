// // // // // // // // // "use client";

// // // // // // // // // import Footer from "@/components/Footer";
// // // // // // // // // import { useState, useRef } from "react";

// // // // // // // // // // ─── Types ────────────────────────────────────────────────────────────────────
// // // // // // // // // type Product = {
// // // // // // // // //   id: number;
// // // // // // // // //   name: string;
// // // // // // // // //   category: string;
// // // // // // // // //   type: string;
// // // // // // // // //   certificate: string;
// // // // // // // // //   composition: string;
// // // // // // // // //   benefits: string[];
// // // // // // // // //   dosage: { label: string; dose: string }[];
// // // // // // // // //   presentation: string;
// // // // // // // // //   form: string;
// // // // // // // // //   storage: string;
// // // // // // // // //   badge?: string;
// // // // // // // // //   tag?: string;
// // // // // // // // // };

// // // // // // // // // // ─── Data ─────────────────────────────────────────────────────────────────────
// // // // // // // // // const PRODUCTS: Product[] = [
// // // // // // // // //   {
// // // // // // // // //     id: 1,
// // // // // // // // //     name: "i.MINVARE PM",
// // // // // // // // //     category: "Pond Minerals",
// // // // // // // // //     type: "Minerals",
// // // // // // // // //     certificate: "CAA/JAN22/FA/03765",
// // // // // // // // //     composition:
// // // // // // // // //       "Innovative blend of essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Phosphorus, Copper, Sodium; Amino acids: DL-Methionine, L-Lysine; Probiotics: Bacillus subtilis 10B, Bacillus licheniformis 10B, Bacillus Coagulans 10B, Lactobacillus acidophilus 10B, Saccharomyces cervisiae 10B.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Improves F.C.R",
// // // // // // // // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // // // // // // // //       "Maintain pH of pond water",
// // // // // // // // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // // // // // // // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // // // // // // // //       "Helps for immune response and defence mechanism",
// // // // // // // // //       "Helps in uniform growth in shrimp and fish",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Shrimp/Prawn", dose: "10 kgs per Acre" },
// // // // // // // // //       { label: "Fish", dose: "3 kgs per Acre" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "10 Kg's Pouch",
// // // // // // // // //     form: "Powder",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 2,
// // // // // // // // //     name: "i.MINVARE AM",
// // // // // // // // //     category: "Pond Minerals",
// // // // // // // // //     type: "Minerals",
// // // // // // // // //     certificate: "",
// // // // // // // // //     composition:
// // // // // // // // //       "Innovative blend of essential Micro and Macro Minerals: Calcium, Dolomite, Sulphates containing Magnesium, Manganese, Zinc, Ferrous, Copper; Sodium Chlorides; Potassium; Phosphates: Di Calcium, Rock, Mono Sodium, Mono Potassium.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Improves F.C.R",
// // // // // // // // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // // // // // // // //       "Maintain pH of pond water",
// // // // // // // // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // // // // // // // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // // // // // // // //       "Helps for immune response and defence mechanism",
// // // // // // // // //       "Helps in uniform growth in shrimp and fish",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
// // // // // // // // //       { label: "Fish", dose: "5 Kgs per Acre" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "20 kg Bag",
// // // // // // // // //     form: "Powder",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 3,
// // // // // // // // //     name: "i.MINVARE WS",
// // // // // // // // //     category: "Pond Minerals",
// // // // // // // // //     type: "Minerals",
// // // // // // // // //     certificate: "CAA/APRIL 2025/MIN/07490",
// // // // // // // // //     composition:
// // // // // // // // //       "Innovative blend of essential Macro Minerals: Calcium, Dolomite, Zeolite; Sulphates: Magnesium, Manganese, Zinc, Ferrous, Copper; Chlorides: Potassium; Phosphates: Di Calcium, Rock, Sodium.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Improves F.C.R",
// // // // // // // // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // // // // // // // //       "Maintain pH of pond water",
// // // // // // // // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // // // // // // // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // // // // // // // //       "Helps for immune response and defence mechanism",
// // // // // // // // //       "Helps in uniform growth in shrimp and fish",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
// // // // // // // // //       { label: "Fish", dose: "5 Kgs per Acre" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "20 Kgs Bag",
// // // // // // // // //     form: "Powder",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 4,
// // // // // // // // //     name: "i.MINVARE FM",
// // // // // // // // //     category: "Feed Minerals",
// // // // // // // // //     type: "Minerals",
// // // // // // // // //     certificate: "CAA/JAN22/FA/03766",
// // // // // // // // //     composition:
// // // // // // // // //       "Essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Cobalt, Phosphorus, Copper, Selenium; Vitamins B2, B12, AD3, E; Amino acids: DL-Methionine, L-Lysine; Probiotics; Enzymes: Amylase, Protease, Cellulose, β.Galactose.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Improves F.C.R",
// // // // // // // // //       "Protects from shell and muscle related problems",
// // // // // // // // //       "Helps in moulting process and formation of exoskeleton in shrimp",
// // // // // // // // //       "Improves hormonal and enzymatic activities in shrimp",
// // // // // // // // //       "Protection from loose shell syndrome",
// // // // // // // // //       "Improves metabolism",
// // // // // // // // //       "Promotes fast body growth and gains more body weight",
// // // // // // // // //       "Improves effectively the digestive system",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Shrimp/Prawn", dose: "5–8 gm/kg feed" },
// // // // // // // // //       { label: "Fish", dose: "1–3 kgs per ton feed" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "1 Kg & 5 Kg's Pouch",
// // // // // // // // //     form: "Powder",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 5,
// // // // // // // // //     name: "i.MINVARE LiQ",
// // // // // // // // //     category: "Liquid Minerals",
// // // // // // // // //     type: "Minerals",
// // // // // // // // //     certificate: "",
// // // // // // // // //     composition:
// // // // // // // // //       "Innovative mixture of optimal liquid blend of balanced essential Macro and Trace element Aqua culture feed supplements minerals: Amino Protein 2g, Buffer phosphonic acid 2.5g, Calcium lactate 1.5g, Calcium phosphate monobasic 5.5g, Citric acid 2g, Di potassium phosphate 5.35g, Di sodium phosphate 3.25g, Magnesium citrate 750mg, Potassium chloride 1.5g, Sodium citrate 2.5g, Trace mineral complex (Glycinated) 2g, DM water Q.S.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Prevents and controls white muscle / soft shell syndrome and body cramping problem",
// // // // // // // // //       "Improves and enhances the development of phytoplankton and zooplankton",
// // // // // // // // //       "Regulates the moulting cycle and survival rate",
// // // // // // // // //       "Balances minerals deficiency in water, soil and shrimp",
// // // // // // // // //       "Improves metabolism, digestive system and FCR",
// // // // // // // // //       "Improves mineral absorption and pond water nutrition",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Pond Application", dose: "50 Ltrs/Acre (once every 10 days)" },
// // // // // // // // //       { label: "Feed Application", dose: "5–10 ml/kg feed (30 min before feeding)" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "1 Ltr Bottle",
// // // // // // // // //     form: "Liquid",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 6,
// // // // // // // // //     name: "i.PROPONDVARE",
// // // // // // // // //     category: "Water & Soil Probiotics",
// // // // // // // // //     type: "Probiotics",
// // // // // // // // //     certificate: "CAA/JAN22/PRO/03769",
// // // // // // // // //     composition:
// // // // // // // // //       "Bacillus subtilis, Bacillus megaterium, Bacillus licheniformis, Bacillus polymyxa, Bacillus pumilis, Saccharomyces cerevisiae, Cellulomanas cartae, p.pantotrophus, Nitrosomonas, Nitrobacter, Pseidomonas denitricans, l.plantarum, l.acidophilus, Rhodobacter sphaeroides, Thiobacillus thiooxidans & Thiobacillus ferroxidans.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Degradation of organic waste and maintains phytoplankton bloom",
// // // // // // // // //       "Improves water and soil quality and increases aquatic animal production",
// // // // // // // // //       "Stabilizes pond pH and maintains optimum alkalinity",
// // // // // // // // //       "Increases collagen synthesis and accelerates encrustation",
// // // // // // // // //       "Removes unwanted micro-organisms",
// // // // // // // // //       "Strengthens the immune system",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Initial booster (Shrimp/Prawn/Fish)", dose: "1.5 Kg/Ha" },
// // // // // // // // //       { label: "Maintenance", dose: "1 Kg/Ha every 7–10 days" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "1 kg Bottle",
// // // // // // // // //     form: "Powder",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 7,
// // // // // // // // //     name: "i.PROVARE GUT",
// // // // // // // // //     category: "Gut Probiotics",
// // // // // // // // //     type: "Probiotics",
// // // // // // // // //     certificate: "CAA/JAN22/PRO/03771",
// // // // // // // // //     composition:
// // // // // // // // //       "High strength GUT Probiotics: Lactobacillus plantarum, Lactobacillus acidophilus, Saccharomyces cervisiae; Enzymes: N Protease and Fungal phytase; Herbal extracts: Phyllanthus emblica Linn., Zingiber officinale and Trigonella foenum-graecum.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Improves digestion and feed intake while protecting GUT health",
// // // // // // // // //       "Prevents the occurrence of Mycosporidia infection",
// // // // // // // // //       "Prevents development of pathogenic bacteria and affects to maintain the GUT micro flora",
// // // // // // // // //       "Improves FCR and lower GUT pH",
// // // // // // // // //       "Support health, performance and growth of aquatic species",
// // // // // // // // //       "Prevents the onset of loose shell syndrome",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Shrimp", dose: "5–10 Grams per Kg feed" },
// // // // // // // // //       { label: "Fish", dose: "10–15 Grams per Kg feed" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "1 kg Bottle",
// // // // // // // // //     form: "Powder",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 8,
// // // // // // // // //     name: "i.VIBRIOVARE",
// // // // // // // // //     category: "Vibrio Control",
// // // // // // // // //     type: "Probiotics",
// // // // // // // // //     certificate: "CAA - Under Process",
// // // // // // // // //     composition:
// // // // // // // // //       "Bacillus magaterium (2.5B), Bacillus polymyxa (2.5B), Bacillus pumilus (2.5B), Paracoccus marginatus (0.5B), Paracoccus pantotropus (2B), Streptococcus thermophillus (2.5B), Bacillus amyloliquificans (1B), Bacillus mesentrices (0.5B), Enterococcus facium (2.5B), Lactobacillus rhamnosus (2B), Lactobacillus sporogenous (1B), Pediococcus Acidilactici (0.5B), Mannan Oligo Saccharide (MOS), Beta Glucins B 1-3, B 1-4, B 1-6, Alpha-Amylase (Banu) 250 IU, Lipase 250 IU, N protease 10000 IU, Phytase 200 IU, Xylanase 2000 IU, Maltodextrin (Malto), Starch Powder.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Highly prevents the Vibrio bacteria infections in Pond water",
// // // // // // // // //       "Controls the running mortality in Shrimp",
// // // // // // // // //       "Helps to maintain the microbial balance in the Shrimp intestine",
// // // // // // // // //       "Inhibit the communication of Vibrio Spp were presented",
// // // // // // // // //       "Increases the immune system and improves the FCR",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Before stocking", dose: "1 Kg of Tablets per acre; if Vibriosis: 250 Grams/Acre" },
// // // // // // // // //       { label: "Maintenance", dose: "500 Grams per Acre every 7–10 days for 15 days" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "500 g Bottle",
// // // // // // // // //     form: "Tablet",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 9,
// // // // // // // // //     name: "i.Bio'YEAST'vare",
// // // // // // // // //     category: "Yeast Probiotics",
// // // // // // // // //     type: "Probiotics",
// // // // // // // // //     certificate: "CAA/OCT22/PRO/04250",
// // // // // // // // //     composition:
// // // // // // // // //       "Unique combination of Saccharomyces cerevisiae, Bacillus Subtilis.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Stimulates feed digestion",
// // // // // // // // //       "Prevents and Controls Pathogenic Bacteria",
// // // // // // // // //       "Enhanced survival rate",
// // // // // // // // //       "Improves pond conditions with good plankton and beneficial bacterial density",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Feed supplement", dose: "2–3g/Kg feed" },
// // // // // // // // //       { label: "Fermentation", dose: "1 Kg along with 10 Kgs Rice Bran and 2 Kgs Jaggery" },
// // // // // // // // //       { label: "Pond application", dose: "1–2 Kg/Acre" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "1 kg Pouch",
// // // // // // // // //     form: "Powder",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 10,
// // // // // // // // //     name: "i.PSBVARE",
// // // // // // // // //     category: "Photosynthetic Bacteria",
// // // // // // // // //     type: "Probiotics",
// // // // // // // // //     certificate: "CAA/OCT22/PRO/04254",
// // // // // // // // //     composition: "Rhodopseudomonas palustris – 20 Billion CFU/gm.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Improves the quality of water in ponds",
// // // // // // // // //       "Helps decompose many toxic matters such as nitrous acid, organic materials, ammonia, pond sludge, and hydrogen sulphide",
// // // // // // // // //       "Decreasing diseases by restraining the pathogenic bacteria counts in the water",
// // // // // // // // //       "Removes black soil & H₂S formed mostly by anaerobic decomposition of organic matter",
// // // // // // // // //       "Improves the appetite of fish and shrimps and helps botanical plankton growth",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Initial regular use (Shrimp/Prawn/Fish)", dose: "250 Grms/Acre" },
// // // // // // // // //       { label: "Later stage (black soil & H₂S)", dose: "500 Grms/Acre" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "500 g Bottle",
// // // // // // // // //     form: "Powder",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 11,
// // // // // // // // //     name: "i.PROPONDVARE LiQ",
// // // // // // // // //     category: "Liquid Water & Soil Probiotics",
// // // // // // // // //     type: "Sanitizer",
// // // // // // // // //     certificate: "CAA - Under Process",
// // // // // // // // //     badge: "Sanitizer",
// // // // // // // // //     composition:
// // // // // // // // //       "Innovative mixture and optimal liquid multi-strain blend of 16 different essential formulation strains for soil & water probiotics: Bacillus amyloliquefaciens, Bacillus denitrificans, Bacillus licheniformis, Bacillus pumilus, Bacillus subtilis, Bafidiobacterium spp., Lactobacillus acidophilus, Lactobacillus plantarum, Lactobacillus rhamnosus, Nitrobacter spp., Paracoccus denitrificans, Paracoccus pentatrophus, Saccharomyces cerevisiae, Thiobacillus ferroxidans, Thiobacillus thioxidans, DM water Q.S.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Enhances gut health, improves feed conversation, growth & survival and boosts immunity",
// // // // // // // // //       "Strengthens gut micro-biota, improves digestion and enhances disease resistance",
// // // // // // // // //       "Converts toxic ammonia into nitrites (nitrification)",
// // // // // // // // //       "Reduces hydrogen sulfide and improves pond bottom conditions ecology and reduce sludge accumulation",
// // // // // // // // //       "Reduce disease outbreaks like White Spot Syndrome",
// // // // // // // // //       "Degrades organic waste, controls ammonia and suppresses Vibro spp",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Before stocking (Soil Application)", dose: "2 L/Acre (7 days before)" },
// // // // // // // // //       { label: "During stocking (Pond Application)", dose: "1 L/Acre (once in every 10 days)" },
// // // // // // // // //       { label: "DO DOC", dose: "1.5 L/Acre (once in every 10 days)" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "1 Ltr Bottle",
// // // // // // // // //     form: "Liquid",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 12,
// // // // // // // // //     name: "i.CEEVARE",
// // // // // // // // //     category: "Vitamin C",
// // // // // // // // //     type: "Vitamins & Nutrition",
// // // // // // // // //     certificate: "CAA/JAN22/FA/03767",
// // // // // // // // //     composition: "Ascorbic acid (coated Vitamin C) Coated.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Improves F.C.R and survival rate",
// // // // // // // // //       "Assists in shell formation and muscle development",
// // // // // // // // //       "Increases body weight by acceleration of growth",
// // // // // // // // //       "Accelerates growth and gives higher survival rate",
// // // // // // // // //       "Prevents vibrio loads attack on shrimps",
// // // // // // // // //       "Facilitates tissue repairs and wound healing",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Shrimp/Prawn (Normal Conditions)", dose: "2–3 g/1 kg feed at least twice a day" },
// // // // // // // // //       { label: "Under Stress condition", dose: "5g/1 kg feed or as directed by aqua consultant" },
// // // // // // // // //       { label: "Fish", dose: "2 g/1 kg of feed" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "1 Kg Bottle",
// // // // // // // // //     form: "Powder",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 13,
// // // // // // // // //     name: "i.PHYTOVARE",
// // // // // // // // //     category: "Phyto Extracts",
// // // // // // // // //     type: "Vitamins & Nutrition",
// // // // // // // // //     certificate: "USFDA & EU APPROVED",
// // // // // // // // //     badge: "Premium",
// // // // // // // // //     composition:
// // // // // // // // //       "Innovative blend of High Quality OREGANO (Oreganum Vulgare SSP. hirtum) essential plant extracts constituted of over 30 active ingredients of Carvacrol and Thymol etc.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Antimicrobial effects to maintain GUT health thereby reducing enteric diseases e.g. White Feces",
// // // // // // // // //       "Anti-oxidation to reduce stresses and protect liver",
// // // // // // // // //       "Increase growth rate and improve FCR",
// // // // // // // // //       "High-temperature (upto 120 Deg. C) stability and low disappearance rate in water",
// // // // // // // // //       "Increase survival rates and reduce disease occurrence",
// // // // // // // // //       "Enhances growth rate and feed efficiency improved reproductive success",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Prawn/Shrimp (Healthy condition)", dose: "10 Grams/Kg compound feed" },
// // // // // // // // //       { label: "Infected condition", dose: "20 Grams/Kg compound feed" },
// // // // // // // // //       { label: "Fish Feed", dose: "50 Grams/Ton compound feed" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "500g Bottle",
// // // // // // // // //     form: "Powder",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 14,
// // // // // // // // //     name: "i.LIVOVARE GEL",
// // // // // // // // //     category: "Liver Tonic",
// // // // // // // // //     type: "Vitamins & Nutrition",
// // // // // // // // //     certificate: "CAA/JAN22/FA/03770",
// // // // // // // // //     composition:
// // // // // // // // //       "Vitamins: Vitamin C, B2, E; Amino acids: DL-Methionine and L-Lysine, and Binding agents; Nano Minerals: Nano Magnesium, Nano Calcium, Nano Potassium, Nano Zinc, Nano Selenium, Nano Cobalt, Nano Ferrous, Nano Chromium, Nano Manganese, Nano Phosphorus, Nano Molybdenum; Probiotics: Saccharomyces spp and Lactobacillus spp.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Improves the functional efficiency of the liver and pancreas",
// // // // // // // // //       "Promotes digestibility and improves F.C.R",
// // // // // // // // //       "Increases nutrient utilisation and reduce fat deposition",
// // // // // // // // //       "Ensures Uniform growth and early harvesting",
// // // // // // // // //       "Increase mineral absorption",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Up to 10 weeks", dose: "10–15 ml per 1 kg feed" },
// // // // // // // // //       { label: "11 weeks and above", dose: "20–25 ml per 1 kg feed" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "20 Ltrs Barrel / 5 Ltrs Tin / 1 Ltr Bottle",
// // // // // // // // //     form: "Gel",
// // // // // // // // //     storage: "Keep in cool and dry place. *Shakewell before use.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 15,
// // // // // // // // //     name: "i.IMMUNOVARE",
// // // // // // // // //     category: "Immune Booster",
// // // // // // // // //     type: "Health & Immunity",
// // // // // // // // //     certificate: "CAA/APRIL 2025/FA/07489",
// // // // // // // // //     composition:
// // // // // // // // //       "Comprehensive blend of Macro Nutrients, Amino Acids, Vitamins, Minerals, Enzymes, Probiotics, Non-essential amino acids, Raw Materials and Vitamins as per detailed composition table.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Increase Nutrient Utilisation & Growth rate and reduce fat deposition",
// // // // // // // // //       "Improve resistance towards stress & diseases and also better resistance to environmental stressors in shrimp",
// // // // // // // // //       "Maintains correct Osmotic pressure and improves anti stress ability",
// // // // // // // // //       "Increase survival rates and reduce disease occurrence",
// // // // // // // // //       "Accelerate the detoxifying of deposited Toxins in Shrimp",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Prawn/Shrimp (at least one midday feeding)", dose: "3–5 Grams/Kg compound feed / 1–2 meal a day" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "500 g Bottle",
// // // // // // // // //     form: "Powder",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 16,
// // // // // // // // //     name: "i.HEPTOPANCVARE",
// // // // // // // // //     category: "Hepato-Pancreatic Support",
// // // // // // // // //     type: "Health & Immunity",
// // // // // // // // //     certificate: "CAA/ARPIL 2025/IMMU/07492",
// // // // // // // // //     composition:
// // // // // // // // //       "Detailed composition includes Amino Acids, Enzymes, Essential/Non-essential amino acids, Herbal Extracts, Raw Materials and Vitamins as per specification table.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Protect health of hepatopancreas and intestine, with bright and translucent body, clear white membrane, strong and health",
// // // // // // // // //       "Enhance growth performance, feed efficiency and product",
// // // // // // // // //       "Hepatopancreas (H.P) is the power house and vital organ in animal's survival and growth",
// // // // // // // // //       "Improve survival rate and immunity for reducing the risk of some vital disease outbreak",
// // // // // // // // //       "Relieve nutritional white feces, especially white feces caused by liver damage",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Prawn/Shrimp (preventive)", dose: "5 Grams/Kg compound feed with Gel / 1 meal a day (every 15 days for 5 days)" },
// // // // // // // // //       { label: "If problem persists", dose: "1 meal a day regularly" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "500 g Bottle",
// // // // // // // // //     form: "Powder",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 17,
// // // // // // // // //     name: "i.WFSVARE GEL",
// // // // // // // // //     category: "Feed Additive Gel",
// // // // // // // // //     type: "Health & Immunity",
// // // // // // // // //     certificate: "CAA/APRIL 2025/IMMU/07487",
// // // // // // // // //     composition:
// // // // // // // // //       "Active Probiotics, Vitamins blend, Amino Acids, Enzymes, Probiotics, Raw Materials, Vitamins as per detailed formulation (31 active ingredients).",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Ensures faster growth and weight gain",
// // // // // // // // //       "Improves feed conversion ratio (FCR)",
// // // // // // // // //       "Improves proper shell formation",
// // // // // // // // //       "Provides necessary binding for the supplemented feed additives preventing any Wastage",
// // // // // // // // //       "Maintains high and uniform growth",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "During Culture", dose: "20 ml per 1 kg of Compound Feed or as advised by Consultant" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "5 Ltr Tin",
// // // // // // // // //     form: "Gel",
// // // // // // // // //     storage: "Keep in cool and dry place. *Shakewell before use.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 18,
// // // // // // // // //     name: "i.VIRAHEALVARE",
// // // // // // // // //     category: "Antiviral / Sanitizer",
// // // // // // // // //     type: "Sanitizer",
// // // // // // // // //     certificate: "CAA/OCT22/DIS/04270",
// // // // // // // // //     badge: "Sanitizer",
// // // // // // // // //     composition:
// // // // // // // // //       "Triple Salt - 50% w/v (Containing Triple Salt - 50% w/v); Potassium monopersulphate, Potassium hydrogen sulphate, Potassium sulfate, Sodium Chloride, tartrazine yellow.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Multi-component and Multi-purpose oxidizing system with major physical and chemical components of pathogens and restrict their propagation thru this disinfectant",
// // // // // // // // //       "Highly effective to control eradicate bacteria, fungi, moulds and all viral families effecting fish and shrimp especially WSSV",
// // // // // // // // //       "High level of surfactancy with acidic and oxidising power providing superior destruction of bio films. An effective bactericidal and can control the vibrio in water",
// // // // // // // // //       "Effectively control black and brown gill even under extreme stress conditions",
// // // // // // // // //       "Product can be used in the pond and can also be applied on the surface and equipments",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Prawn/Shrimp (Prevention of Diseases)", dose: "500 gm to 2 Kg/ha — Apply once every fortnight according to pond water quality/condition" },
// // // // // // // // //       { label: "Treating Diseases", dose: "Apply once every 3–5 days or as advised by Aquaculture Consultant" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "1 Kg Bottle",
// // // // // // // // //     form: "Powder",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 19,
// // // // // // // // //     name: "i.SANVARE TD",
// // // // // // // // //     category: "Broad Spectrum Disinfectant",
// // // // // // // // //     type: "Sanitizer",
// // // // // // // // //     certificate: "CAA - Under Process",
// // // // // // // // //     badge: "Sanitizer",
// // // // // // // // //     composition:
// // // // // // // // //       "Benzalkonium Chloride 50% (BKC) - 10%, Glutaraldehyde 50% (C5H8O2) - 10%, Malachite Green (Aniline Green) - 3%, Formaldehyde 37% - 40%, Copper Sulphate - 2%, Ammonium Chloride (NH4Cl) - 2%, Alphox 200 (9.5 moles) (Ethylene Oxide) - 3%, Stabilizers and Surfactants - QS.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Highly effective against fungal, bacterial and viral disease",
// // // // // // // // //       "Kills bacteria including Gram-Positive, Ligeonella, Protozoan, viruses, algae and fungal spores",
// // // // // // // // //       "Broad Spectrum activity against 32 harmful bacteria, 62 virus, 7 fungi and 11 spores with no resistance developed",
// // // // // // // // //       "Prevents mite infestation in aqua Culture",
// // // // // // // // //       "Fights against pond bottom bacteria and reduce bacterial load in the ponds",
// // // // // // // // //       "High residual activity even in presence of organic matter",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Upto 3 feet depth", dose: "0.5 to 1 Ltrs per Acre" },
// // // // // // // // //       { label: "Above 3 feet depth", dose: "1–1.5 Ltr per Acre per 3 feet" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "5 Ltr Tins",
// // // // // // // // //     form: "Liquid",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 20,
// // // // // // // // //     name: "i.SILVARE NANO",
// // // // // // // // //     category: "Nano Silver",
// // // // // // // // //     type: "Sanitizer",
// // // // // // // // //     certificate: "CAA - Under Process",
// // // // // // // // //     badge: "Sanitizer",
// // // // // // // // //     composition:
// // // // // // // // //       "PVP 10.8 g, Glycerol 500 ml, Silver nitrate 1.08 g, Enzymes, Amino acids, DM water Q.S.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Inhibit the growth of harmful bacteria attack like Vibrio spp. and break down the cell membranes of pathogenic bacteria",
// // // // // // // // //       "Helps to reduce microbial load, improving overall pond hygiene and reducing stress on shrimp",
// // // // // // // // //       "Boost the innate immune system of shrimp, increasing resistance to infections",
// // // // // // // // //       "Controls viral loads and emphasizes antibiotic-resistant bacteria in aquaculture",
// // // // // // // // //       "Clean body, gill and removes dirty materials from Shrimp body",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Soil Application (Before stocking)", dose: "1 L/Acre with 1 m depth of water (5 days before)" },
// // // // // // // // //       { label: "Pond Application (Post stocking)", dose: "1 L/Acre during Vibriosis in pond water or as advised by Aquaculture Technician" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "1 Ltr Bottle",
// // // // // // // // //     form: "Liquid",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 21,
// // // // // // // // //     name: "i.OXYVARE",
// // // // // // // // //     category: "Oxygen Granules",
// // // // // // // // //     type: "Oxygen Products",
// // // // // // // // //     certificate: "CAA/JAN22/CHEM/03768",
// // // // // // // // //     badge: "Emergency Use",
// // // // // // // // //     composition:
// // // // // // // // //       "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity).",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
// // // // // // // // //       "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
// // // // // // // // //       "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
// // // // // // // // //       "Improves survival create during stocking in culture period and before harvesting",
// // // // // // // // //       "It helps in development of plankton to the required levels",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
// // // // // // // // //       { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "10 kgs Bucket",
// // // // // // // // //     form: "Granules",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 22,
// // // // // // // // //     name: "i.OXYVARE-T",
// // // // // // // // //     category: "Oxygen Tablets",
// // // // // // // // //     type: "Oxygen Products",
// // // // // // // // //     certificate: "CAA/APRIL 2025/CHEM/07488",
// // // // // // // // //     composition:
// // // // // // // // //       "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity) in a tablet form.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
// // // // // // // // //       "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
// // // // // // // // //       "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
// // // // // // // // //       "Improves survival create during stocking in culture period and before harvesting",
// // // // // // // // //       "It helps in development of plankton to the required levels",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
// // // // // // // // //       { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "10 Kgs Bucket",
// // // // // // // // //     form: "Tablet",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 23,
// // // // // // // // //     name: "i.GEOPROVARE G",
// // // // // // // // //     category: "Zeolite Granules (with Probiotics)",
// // // // // // // // //     type: "Zeolite Products",
// // // // // // // // //     certificate: "CAA - Not Required",
// // // // // // // // //     composition:
// // // // // // // // //       "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Highest Cation Exchange capacity & it controls obnoxious gases instantly",
// // // // // // // // //       "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
// // // // // // // // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // // // // // // // //       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
// // // // // // // // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // // // // // // // //       "Can maintain clean pond bottom",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Pond Preparation", dose: "50 Kgs/acre" },
// // // // // // // // //       { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "10 kg's Pouch",
// // // // // // // // //     form: "Granules",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 24,
// // // // // // // // //     name: "i.GEOPROVARE P",
// // // // // // // // //     category: "Zeolite Powder (with Probiotics)",
// // // // // // // // //     type: "Zeolite Products",
// // // // // // // // //     certificate: "CAA - Not Required",
// // // // // // // // //     composition:
// // // // // // // // //       "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Highest Cation Exchange capacity and it controls obnoxious gases instantly",
// // // // // // // // //       "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
// // // // // // // // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // // // // // // // //       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
// // // // // // // // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // // // // // // // //       "Can maintain clean pond bottom",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Pond Preparation", dose: "50 Kgs/acre" },
// // // // // // // // //       { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "10 kg's Pouch",
// // // // // // // // //     form: "Powder",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 25,
// // // // // // // // //     name: "i.GEOVARE P",
// // // // // // // // //     category: "Zeolite Powder Plain",
// // // // // // // // //     type: "Zeolite Products",
// // // // // // // // //     certificate: "CAA - Not Required",
// // // // // // // // //     composition:
// // // // // // // // //       "Silicon Dioxice (SiO2): 65–70%; Sodium: 1–3%; Iron (Fe): 1–2%; Magnesium: 0.5–1.0%; Calcium Oxide (Cal): 3–5%; Potassium: 0.5–1.0%; Aluminium: 20%; LOI: 5–8%.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Highest Cation Exchange capacity it controls obnoxious gases instantly",
// // // // // // // // //       "Quick and Efficient removal of obnoxious gases; Dissolved Oxygen level will be improved",
// // // // // // // // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // // // // // // // //       "Absorbs toxic gases like Ammonia (Nh3), Hydrogen Sulphide (H2S) and other liberated anions from pond water",
// // // // // // // // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // // // // // // // //       "Can maintain clean pond bottom",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Pond Preparation", dose: "50Kgs/acre" },
// // // // // // // // //       { label: "During Culture", dose: "Minimum 15Kgs/acre or as advised by aqua culture technician" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "25Kgs Bag",
// // // // // // // // //     form: "Powder",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 26,
// // // // // // // // //     name: "i.TOXIVARE",
// // // // // // // // //     category: "Yucca / Toxin Binder",
// // // // // // // // //     type: "Water Treatment",
// // // // // // // // //     certificate: "CAA/OCT22/FA/04255",
// // // // // // // // //     composition:
// // // // // // // // //       "Dry natural extract from the YUCCA schidigera plant, Ammonia binding agents and Probiotics.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Yucca is rich in glyco compounds that instantly binds with un-ionized ammonia thereby, reducing ammonia toxicity in the pond",
// // // // // // // // //       "Absorbs Nh₂, So₂, Ch₂, H₂S etc. of the pond bottom and cleans the toxic gases in the water",
// // // // // // // // //       "Reduced incidence of BOD and COD due to decrease of ammonia content in pond water",
// // // // // // // // //       "Deodorizes and purifies pond bottom wastage and water to improve the activity of the culture species",
// // // // // // // // //       "Increase the availability of dissolved oxygen in pond water",
// // // // // // // // //       "Reduce in gill irrigation",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Pond application", dose: "500 Gm per HA of 1 meter column" },
// // // // // // // // //       { label: "Feed application", dose: "2–5 Gm/Kg feed" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "1 Kg Pouch",
// // // // // // // // //     form: "Powder",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 27,
// // // // // // // // //     name: "i.ECOSOFTVARE",
// // // // // // // // //     category: "EDTA",
// // // // // // // // //     type: "Water Treatment",
// // // // // // // // //     certificate: "CAA - Not Required",
// // // // // // // // //     composition:
// // // // // // // // //       "Unique combination of Ethylene Diamine Tetra Acetic Acid (EDTA) formulated salt compounds.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Reduces the hardness levels to optimum lower levels there by stabilizing the alkalinity in the pond water completely prevents plankton crash",
// // // // // // // // //       "i.Ecosoftvare is used to improve water quality by reducing heavy metal concentrations",
// // // // // // // // //       "Stabilizes the total Ammonia levels there by minimise the free ammonia in the pond water",
// // // // // // // // //       "Helps to create toxic free environment",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "General application", dose: "Mix 1–2 kgs in 50 Ltrs of water and spray over 1 Acre evenly" },
// // // // // // // // //       { label: "Best practice", dose: "Apply in day light for better results or as advised by Aqua consultant" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "1 Kg / 5 kg Pouch",
// // // // // // // // //     form: "Powder",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 28,
// // // // // // // // //     name: "i.NITRONILVARE",
// // // // // // // // //     category: "Nitrite Control",
// // // // // // // // //     type: "Water Treatment",
// // // // // // // // //     certificate: "CAA/OCT22/PRO/04253",
// // // // // // // // //     composition:
// // // // // // // // //       "Nitrosomonas, Nitrobacter, Thiobacillus Thioxidans, Thiobacillus Ferroxidans, Thiobacillus Denitrificans, Paracoccus Denitrificans, N. Protease, Fungal Phytase, Fungal Alpha Amylase.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "It reduces nitrites (No2) content in water to safe level",
// // // // // // // // //       "i.NITRONILVARE is powerful water treatment additive for aquaculture pond",
// // // // // // // // //       "It prevents formation of black soil due to decay of organic pollutant Improves water quality and enhances survival rate",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "Prawn/Shrimp", dose: "1 Kg/acre once in every 10 days" },
// // // // // // // // //       { label: "Fish", dose: "1 Kg/acre once in every one month or advised by aqua consultant" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "1 Kg Bottle",
// // // // // // // // //     form: "Powder",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 29,
// // // // // // // // //     name: "Calcium Chloride (Fused)",
// // // // // // // // //     category: "Chloride Salts",
// // // // // // // // //     type: "Minerals",
// // // // // // // // //     certificate: "CAA/OCT22/CHEM/04252",
// // // // // // // // //     composition: "Calcium Chloride Fused.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Calcium has an important role in the biological processes of fish & shrimp. It is necessary for bone formation, blood clotting and their metabolic reactions",
// // // // // // // // //       "Sodium and potassium are the most important salts in fish & shrimp blood and are critical for normal heat, nerve and muscle function",
// // // // // // // // //       "Fish & shrimp can absorb calcium directly from the water of food",
// // // // // // // // //       "The re-absorption of salt can reduce the energy available for growth",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "General application", dose: "5 to 10 Kgs per acre" },
// // // // // // // // //       { label: "Best Practice", dose: "For best results apply in the evening hours" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "25 Kgs Drum (5 Kg x 5 Packs)",
// // // // // // // // //     form: "Fused",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 30,
// // // // // // // // //     name: "Magnesium Chloride (Crystal)",
// // // // // // // // //     category: "Chloride Salts",
// // // // // // // // //     type: "Minerals",
// // // // // // // // //     certificate: "CAA/OCT22/CHEM/04251",
// // // // // // // // //     composition: "Magnesium Chloride 97% ± 2%.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Covers the Magnesium balance of pond water",
// // // // // // // // //       "Protects from soft shell syndrome",
// // // // // // // // //       "Regularizes the moult cycle",
// // // // // // // // //       "Increase survival and body weight rate",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "General application", dose: "5 to 10 Kgs per acre" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
// // // // // // // // //     form: "Crystal",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 31,
// // // // // // // // //     name: "Potassium Chloride (Crystal)",
// // // // // // // // //     category: "Chloride Salts",
// // // // // // // // //     type: "Minerals",
// // // // // // // // //     certificate: "CAA/OCT22/CHEM/04256",
// // // // // // // // //     composition: "Potassium Chloride 97% ± 2%.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Protects from soft shell syndrome",
// // // // // // // // //       "Increase survival and body weight rate",
// // // // // // // // //       "Regularizes the moult cycles",
// // // // // // // // //       "Covers the Potassium balance of pond water",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "General application", dose: "5 to 8 Kgs per acre" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
// // // // // // // // //     form: "Crystal",
// // // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 32,
// // // // // // // // //     name: "i.FERRICCHLORIVARE",
// // // // // // // // //     category: "Ferric Chloride",
// // // // // // // // //     type: "Minerals",
// // // // // // // // //     certificate: "CAA/ARPIL 2025/CHEM/07491",
// // // // // // // // //     composition: "Ferric Chloride Anhydrous – 98% ± 2%. Assay: Min 98.0%.",
// // // // // // // // //     benefits: [
// // // // // // // // //       "Highly effective at removing suspended solids, Organic matter & Heavy metals from the Pond water",
// // // // // // // // //       "It helps to prevent the overgrowth of Algae in Pond water",
// // // // // // // // //       "Use as Iron supplement",
// // // // // // // // //       "Improves Pond water bottom quality",
// // // // // // // // //       "It helps to precipitate and inactive inorganic phosphorous in Pond water",
// // // // // // // // //     ],
// // // // // // // // //     dosage: [
// // // // // // // // //       { label: "General", dose: "Consult our field staff or your aquaculture specialist for specific usage and directions" },
// // // // // // // // //     ],
// // // // // // // // //     presentation: "50 Kgs Drum (5Kg x 10 Packs)",
// // // // // // // // //     form: "Crystal",
// // // // // // // // //     storage: "Keep in cool and dry place. Special Instruction: No liability accepted for accidents arising while handling or use.",
// // // // // // // // //   },
// // // // // // // // // ];

// // // // // // // // // // ─── Category & Color Config ──────────────────────────────────────────────────
// // // // // // // // // const CATEGORIES = [
// // // // // // // // //   "All",
// // // // // // // // //   "Minerals",
// // // // // // // // //   "Probiotics",
// // // // // // // // //   "Vitamins & Nutrition",
// // // // // // // // //   "Health & Immunity",
// // // // // // // // //   "Oxygen Products",
// // // // // // // // //   "Water Treatment",
// // // // // // // // //   "Zeolite Products",
// // // // // // // // //   "Sanitizer",
// // // // // // // // // ];

// // // // // // // // // // Per-type accent colors used in the PDF-style card headers
// // // // // // // // // const TYPE_ACCENT: Record<string, { header: string; label: string; dot: string }> = {
// // // // // // // // //   "Minerals":           { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" },
// // // // // // // // //   "Probiotics":         { header: "#006644", label: "#008855", dot: "#006644" },
// // // // // // // // //   "Vitamins & Nutrition":{ header: "#cc6600", label: "#dd7700", dot: "#cc6600" },
// // // // // // // // //   "Health & Immunity":  { header: "#7700aa", label: "#9911cc", dot: "#7700aa" },
// // // // // // // // //   "Oxygen Products":    { header: "#003399", label: "#0044bb", dot: "#003399" },
// // // // // // // // //   "Water Treatment":    { header: "#005566", label: "#007788", dot: "#005566" },
// // // // // // // // //   "Zeolite Products":   { header: "#664400", label: "#886600", dot: "#664400" },
// // // // // // // // //   "Sanitizer":          { header: "#aa0000", label: "#cc1111", dot: "#aa0000" },
// // // // // // // // // };

// // // // // // // // // const getAccent = (type: string) =>
// // // // // // // // //   TYPE_ACCENT[type] || { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" };

// // // // // // // // // // Badge pill used in the category filter bar
// // // // // // // // // const TYPE_COLORS: Record<string, string> = {
// // // // // // // // //   "Minerals":            "bg-amber-100 text-amber-800",
// // // // // // // // //   "Probiotics":          "bg-green-100 text-green-800",
// // // // // // // // //   "Vitamins & Nutrition":"bg-purple-100 text-purple-700",
// // // // // // // // //   "Health & Immunity":   "bg-red-100 text-red-700",
// // // // // // // // //   "Oxygen Products":     "bg-sky-100 text-sky-700",
// // // // // // // // //   "Water Treatment":     "bg-teal-100 text-teal-700",
// // // // // // // // //   "Zeolite Products":    "bg-stone-100 text-stone-700",
// // // // // // // // //   "Sanitizer":           "bg-emerald-100 text-emerald-700",
// // // // // // // // // };

// // // // // // // // // // ─── PDF-Style Product Card ───────────────────────────────────────────────────
// // // // // // // // // // Matches exactly: [HEX IMAGE | CATEGORY TITLE  CAA CODE  i.BRAND NAME]
// // // // // // // // // //                  [HEX IMAGE | Benefits        Composition  Dosage/Form/Storage]
// // // // // // // // // function PDFCard({ product }: { product: Product }) {
// // // // // // // // //   const ac = getAccent(product.type);

// // // // // // // // //   return (
// // // // // // // // //     <div
// // // // // // // // //       className="w-full bg-white rounded-xl overflow-hidden"
// // // // // // // // //       style={{
// // // // // // // // //         border: `2px solid ${ac.header}33`,
// // // // // // // // //         boxShadow: "0 2px 16px rgba(0,50,120,0.08)",
// // // // // // // // //       }}
// // // // // // // // //     >
// // // // // // // // //       {/* ── TOP HEADER: category title | CAA code | brand name ── */}
// // // // // // // // //       <div className="flex items-stretch" style={{ borderBottom: `2px solid ${ac.header}` }}>

// // // // // // // // //         {/* Left spacer matching image column width */}
// // // // // // // // //         <div style={{ width: 148, flexShrink: 0, background: "#f0f6ff", borderRight: `1px solid ${ac.header}33` }} />

// // // // // // // // //         {/* Category / product type title */}
// // // // // // // // //         <div
// // // // // // // // //           className="flex items-center px-5 py-2 flex-1"
// // // // // // // // //           style={{ background: "white" }}
// // // // // // // // //         >
// // // // // // // // //           <span
// // // // // // // // //             className="font-black uppercase tracking-wide"
// // // // // // // // //             style={{ color: ac.header, fontSize: 14, letterSpacing: 1, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // // // // // // // //           >
// // // // // // // // //             {product.category}
// // // // // // // // //           </span>
// // // // // // // // //         </div>

// // // // // // // // //         {/* CAA code — centre box */}
// // // // // // // // //         {product.certificate && (
// // // // // // // // //           <div
// // // // // // // // //             className="flex items-center px-4 py-2"
// // // // // // // // //             style={{
// // // // // // // // //               background: "#fff8f0",
// // // // // // // // //               borderLeft: `1px solid ${ac.header}44`,
// // // // // // // // //               borderRight: `1px solid ${ac.header}44`,
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             <span
// // // // // // // // //               className="font-bold"
// // // // // // // // //               style={{ color: "#cc3300", fontSize: 11, fontFamily: "monospace", whiteSpace: "nowrap" }}
// // // // // // // // //             >
// // // // // // // // //               {product.certificate}
// // // // // // // // //             </span>
// // // // // // // // //           </div>
// // // // // // // // //         )}

// // // // // // // // //         {/* Product brand name — right blue box */}
// // // // // // // // //         <div
// // // // // // // // //           className="flex items-center px-5 py-2"
// // // // // // // // //           style={{ background: ac.header, minWidth: 180 }}
// // // // // // // // //         >
// // // // // // // // //           <span
// // // // // // // // //             className="font-black text-white tracking-wide"
// // // // // // // // //             style={{ fontSize: 15, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // // // // // // // //           >
// // // // // // // // //             <em style={{ opacity: 0.8, fontStyle: "italic" }}>i</em>.{product.name.replace(/^i[.\-']/i, "")}
// // // // // // // // //           </span>
// // // // // // // // //           {product.badge && (
// // // // // // // // //             <span
// // // // // // // // //               className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
// // // // // // // // //               style={{ background: "rgba(255,255,255,0.2)", color: "white", whiteSpace: "nowrap" }}
// // // // // // // // //             >
// // // // // // // // //               {product.badge}
// // // // // // // // //             </span>
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* ── BODY ROW: hex image | benefits | composition | dosage block ── */}
// // // // // // // // //       <div className="flex" style={{ minHeight: 220 }}>

// // // // // // // // //         {/* ── COL 1: Hexagon product image (148px) ── */}
// // // // // // // // //         <div
// // // // // // // // //           className="flex-none flex items-center justify-center"
// // // // // // // // //           style={{
// // // // // // // // //             width: 148,
// // // // // // // // //             background: `linear-gradient(160deg, ${ac.header}15 0%, ${ac.header}08 100%)`,
// // // // // // // // //             borderRight: `1px solid ${ac.header}22`,
// // // // // // // // //             padding: "20px 14px",
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           {/* Outer hex border */}
// // // // // // // // //           <div
// // // // // // // // //             style={{
// // // // // // // // //               width: 110,
// // // // // // // // //               height: 120,
// // // // // // // // //               clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// // // // // // // // //               background: ac.header,
// // // // // // // // //               display: "flex",
// // // // // // // // //               alignItems: "center",
// // // // // // // // //               justifyContent: "center",
// // // // // // // // //               padding: 3,
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             {/* Inner hex fill */}
// // // // // // // // //             <div
// // // // // // // // //               style={{
// // // // // // // // //                 width: "100%",
// // // // // // // // //                 height: "100%",
// // // // // // // // //                 clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// // // // // // // // //                 background: `linear-gradient(145deg, ${ac.header}18, ${ac.header}30)`,
// // // // // // // // //                 display: "flex",
// // // // // // // // //                 flexDirection: "column",
// // // // // // // // //                 alignItems: "center",
// // // // // // // // //                 justifyContent: "center",
// // // // // // // // //                 padding: "10px 8px",
// // // // // // // // //                 gap: 2,
// // // // // // // // //               }}
// // // // // // // // //             >
// // // // // // // // //               <div
// // // // // // // // //                 style={{
// // // // // // // // //                   fontWeight: 900,
// // // // // // // // //                   fontSize: 11,
// // // // // // // // //                   color: ac.header,
// // // // // // // // //                   textAlign: "center",
// // // // // // // // //                   lineHeight: 1.2,
// // // // // // // // //                   letterSpacing: 0.3,
// // // // // // // // //                   fontFamily: "'Segoe UI', system-ui, sans-serif",
// // // // // // // // //                 }}
// // // // // // // // //               >
// // // // // // // // //                 {product.name}
// // // // // // // // //               </div>
// // // // // // // // //               <div
// // // // // // // // //                 style={{
// // // // // // // // //                   fontSize: 8,
// // // // // // // // //                   fontWeight: 700,
// // // // // // // // //                   color: ac.dot,
// // // // // // // // //                   opacity: 0.7,
// // // // // // // // //                   textTransform: "uppercase",
// // // // // // // // //                   letterSpacing: 0.5,
// // // // // // // // //                   marginTop: 4,
// // // // // // // // //                 }}
// // // // // // // // //               >
// // // // // // // // //                 {product.form}
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* ── COL 2: Benefits ── */}
// // // // // // // // //         <div
// // // // // // // // //           className="flex-1 p-4"
// // // // // // // // //           style={{ borderRight: `1px solid ${ac.header}22`, background: "white", minWidth: 0 }}
// // // // // // // // //         >
// // // // // // // // //           <div
// // // // // // // // //             className="font-bold mb-2 uppercase tracking-wide"
// // // // // // // // //             style={{ color: ac.header, fontSize: 11 }}
// // // // // // // // //           >
// // // // // // // // //             Benefits:
// // // // // // // // //           </div>
// // // // // // // // //           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
// // // // // // // // //             {product.benefits.map((b, i) => (
// // // // // // // // //               <li
// // // // // // // // //                 key={i}
// // // // // // // // //                 style={{
// // // // // // // // //                   fontSize: 11.5,
// // // // // // // // //                   color: "#1e2d3d",
// // // // // // // // //                   lineHeight: 1.6,
// // // // // // // // //                   paddingLeft: 14,
// // // // // // // // //                   paddingBottom: 3,
// // // // // // // // //                   position: "relative",
// // // // // // // // //                   fontFamily: "'Segoe UI', system-ui, sans-serif",
// // // // // // // // //                 }}
// // // // // // // // //               >
// // // // // // // // //                 <span
// // // // // // // // //                   style={{
// // // // // // // // //                     position: "absolute",
// // // // // // // // //                     left: 1,
// // // // // // // // //                     top: "0.15em",
// // // // // // // // //                     color: ac.header,
// // // // // // // // //                     fontSize: 13,
// // // // // // // // //                     lineHeight: 1,
// // // // // // // // //                   }}
// // // // // // // // //                 >
// // // // // // // // //                   •
// // // // // // // // //                 </span>
// // // // // // // // //                 {b}
// // // // // // // // //               </li>
// // // // // // // // //             ))}
// // // // // // // // //           </ul>
// // // // // // // // //         </div>

// // // // // // // // //         {/* ── COL 3: Composition ── */}
// // // // // // // // //         <div
// // // // // // // // //           className="p-4"
// // // // // // // // //           style={{
// // // // // // // // //             width: 240,
// // // // // // // // //             flexShrink: 0,
// // // // // // // // //             borderRight: `1px solid ${ac.header}22`,
// // // // // // // // //             background: "#fafeff",
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           <div
// // // // // // // // //             className="font-bold mb-2 uppercase tracking-wide"
// // // // // // // // //             style={{ color: ac.header, fontSize: 11 }}
// // // // // // // // //           >
// // // // // // // // //             Composition:
// // // // // // // // //           </div>
// // // // // // // // //           <p
// // // // // // // // //             style={{
// // // // // // // // //               fontSize: 11,
// // // // // // // // //               color: "#2a3c50",
// // // // // // // // //               lineHeight: 1.7,
// // // // // // // // //               textAlign: "justify",
// // // // // // // // //               hyphens: "auto",
// // // // // // // // //               fontFamily: "'Segoe UI', system-ui, sans-serif",
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             {product.composition}
// // // // // // // // //           </p>
// // // // // // // // //         </div>

// // // // // // // // //         {/* ── COL 4: Dosage + Presentation / Form / Storage ── */}
// // // // // // // // //         <div
// // // // // // // // //           className="p-4"
// // // // // // // // //           style={{
// // // // // // // // //             width: 200,
// // // // // // // // //             flexShrink: 0,
// // // // // // // // //             background: "#f7faff",
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           {/* Dosage */}
// // // // // // // // //           <div
// // // // // // // // //             className="font-bold mb-1.5 uppercase tracking-wide"
// // // // // // // // //             style={{ color: ac.header, fontSize: 11 }}
// // // // // // // // //           >
// // // // // // // // //             Dosage:
// // // // // // // // //           </div>
// // // // // // // // //           {product.dosage.map((d, i) => (
// // // // // // // // //             <div key={i} style={{ marginBottom: 6 }}>
// // // // // // // // //               <div
// // // // // // // // //                 style={{
// // // // // // // // //                   fontSize: 10,
// // // // // // // // //                   fontWeight: 700,
// // // // // // // // //                   color: ac.label,
// // // // // // // // //                   lineHeight: 1.3,
// // // // // // // // //                   marginBottom: 1,
// // // // // // // // //                 }}
// // // // // // // // //               >
// // // // // // // // //                 {d.label}:
// // // // // // // // //               </div>
// // // // // // // // //               <div style={{ fontSize: 10.5, color: "#1a2b3c", lineHeight: 1.55 }}>
// // // // // // // // //                 {d.dose}
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           ))}

// // // // // // // // //           {/* Divider */}
// // // // // // // // //           <div
// // // // // // // // //             style={{
// // // // // // // // //               borderTop: `1px solid ${ac.header}33`,
// // // // // // // // //               marginTop: 10,
// // // // // // // // //               paddingTop: 10,
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             {/* Presentation */}
// // // // // // // // //             <div
// // // // // // // // //               className="font-bold uppercase"
// // // // // // // // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // // // // // // // //             >
// // // // // // // // //               Presentation:
// // // // // // // // //             </div>
// // // // // // // // //             <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6, lineHeight: 1.4 }}>
// // // // // // // // //               {product.presentation}
// // // // // // // // //             </div>

// // // // // // // // //             {/* Form */}
// // // // // // // // //             <div
// // // // // // // // //               className="font-bold uppercase"
// // // // // // // // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // // // // // // // //             >
// // // // // // // // //               Form:
// // // // // // // // //             </div>
// // // // // // // // //             <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6 }}>
// // // // // // // // //               {product.form}
// // // // // // // // //             </div>

// // // // // // // // //             {/* Storage */}
// // // // // // // // //             <div
// // // // // // // // //               className="font-bold uppercase"
// // // // // // // // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // // // // // // // //             >
// // // // // // // // //               Storage &amp; Caution:
// // // // // // // // //             </div>
// // // // // // // // //             <div style={{ fontSize: 11, color: "#1a2b3c", lineHeight: 1.5 }}>
// // // // // // // // //               {product.storage}
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // // ─── Main Page ────────────────────────────────────────────────────────────────
// // // // // // // // // export default function CataloguePage() {
// // // // // // // // //   const [activeCategory, setActiveCategory] = useState("All");
// // // // // // // // //   const [search, setSearch] = useState("");
// // // // // // // // //   const gridRef = useRef<HTMLDivElement>(null);

// // // // // // // // //   const filtered = PRODUCTS.filter((p) => {
// // // // // // // // //     const matchCat =
// // // // // // // // //       activeCategory === "All" ||
// // // // // // // // //       p.type === activeCategory ||
// // // // // // // // //       (activeCategory === "Sanitizer" && p.badge === "Sanitizer");
// // // // // // // // //     const q = search.toLowerCase();
// // // // // // // // //     const matchSearch =
// // // // // // // // //       !q ||
// // // // // // // // //       p.name.toLowerCase().includes(q) ||
// // // // // // // // //       p.category.toLowerCase().includes(q) ||
// // // // // // // // //       p.composition.toLowerCase().includes(q) ||
// // // // // // // // //       p.benefits.some((b) => b.toLowerCase().includes(q));
// // // // // // // // //     return matchCat && matchSearch;
// // // // // // // // //   });

// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-[#eef3f9]" style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

// // // // // // // // //       {/* ══ HERO ════════════════════════════════════════════════════════════════ */}
// // // // // // // // //       <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2557] via-[#2A5DA8] to-[#0e7fc2]">
// // // // // // // // //         {/* Decorative rings */}
// // // // // // // // //         <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border-[80px] border-white/5 translate-x-48 -translate-y-48 pointer-events-none" />
// // // // // // // // //         <div className="absolute top-12 right-64 w-[300px] h-[300px] rounded-full border-[50px] border-white/5 pointer-events-none" />
// // // // // // // // //         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border-[60px] border-white/5 -translate-x-32 translate-y-32 pointer-events-none" />

// // // // // // // // //         {/* Hex grid bg */}
// // // // // // // // //         <div
// // // // // // // // //           className="absolute inset-0 opacity-5 pointer-events-none"
// // // // // // // // //           style={{
// // // // // // // // //             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,2 55,16 55,44 30,58 5,44 5,16' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
// // // // // // // // //             backgroundSize: "60px 60px",
// // // // // // // // //           }}
// // // // // // // // //         />

// // // // // // // // //         <div className="relative z-10 max-w-screen-2xl mx-auto px-8 py-14">
// // // // // // // // //           {/* Logo + title row */}
// // // // // // // // //           <div className="flex items-start justify-between gap-8 flex-wrap">
// // // // // // // // //             <div>
// // // // // // // // //               <div className="flex items-center gap-3 mb-5">
// // // // // // // // //                 <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center">
// // // // // // // // //                   <span className="text-white font-black text-xl italic">i</span>
// // // // // // // // //                 </div>
// // // // // // // // //                 <div>
// // // // // // // // //                   <p className="text-white/60 text-xs font-semibold uppercase tracking-widest">
// // // // // // // // //                     Innovare Biopharma LLP
// // // // // // // // //                   </p>
// // // // // // // // //                   <p className="text-white/40 text-[11px]">Solution to Aquaculture Health</p>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //               <h1 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
// // // // // // // // //                 Product
// // // // // // // // //                 <br />
// // // // // // // // //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
// // // // // // // // //                   Catalogue
// // // // // // // // //                 </span>
// // // // // // // // //               </h1>
// // // // // // // // //               <p className="mt-4 text-white/65 text-sm max-w-xl leading-relaxed">
// // // // // // // // //                 Complete reference guide — compositions, benefits, dosages and certifications for all Innovare Biopharma aquaculture solutions.
// // // // // // // // //               </p>
// // // // // // // // //               <div className="flex flex-wrap gap-3 mt-6">
// // // // // // // // //                 {[
// // // // // // // // //                   { value: `${PRODUCTS.length}+`, label: "Products" },
// // // // // // // // //                   { value: "ISO 9001:2015", label: "Certified" },
// // // // // // // // //                   { value: "GMP", label: "Quality Practice" },
// // // // // // // // //                   { value: "MSME", label: "Registered" },
// // // // // // // // //                 ].map((s) => (
// // // // // // // // //                   <div
// // // // // // // // //                     key={s.label}
// // // // // // // // //                     className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3"
// // // // // // // // //                   >
// // // // // // // // //                     <div className="text-white font-black text-lg leading-none">{s.value}</div>
// // // // // // // // //                     <div className="text-white/55 text-[11px] font-semibold mt-0.5">{s.label}</div>
// // // // // // // // //                   </div>
// // // // // // // // //                 ))}
// // // // // // // // //               </div>
// // // // // // // // //             </div>

// // // // // // // // //             {/* Search */}
// // // // // // // // //             <div className="flex flex-col gap-2 mt-2">
// // // // // // // // //               <div className="relative">
// // // // // // // // //                 <input
// // // // // // // // //                   type="text"
// // // // // // // // //                   placeholder="Search products, ingredients, benefits..."
// // // // // // // // //                   value={search}
// // // // // // // // //                   onChange={(e) => setSearch(e.target.value)}
// // // // // // // // //                   className="w-80 pl-10 pr-4 py-3 rounded-2xl border border-white/25 bg-white/10 text-white placeholder-white/40 text-sm outline-none focus:bg-white/20 focus:border-white/50 transition-all"
// // // // // // // // //                 />
// // // // // // // // //                 <svg
// // // // // // // // //                   className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
// // // // // // // // //                   width="16"
// // // // // // // // //                   height="16"
// // // // // // // // //                   viewBox="0 0 24 24"
// // // // // // // // //                   fill="none"
// // // // // // // // //                   stroke="currentColor"
// // // // // // // // //                   strokeWidth="2"
// // // // // // // // //                 >
// // // // // // // // //                   <circle cx="11" cy="11" r="8" />
// // // // // // // // //                   <path d="m21 21-4.35-4.35" />
// // // // // // // // //                 </svg>
// // // // // // // // //               </div>
// // // // // // // // //               <p className="text-white/40 text-xs text-right">
// // // // // // // // //                 Showing{" "}
// // // // // // // // //                 <span className="text-white/80 font-bold">{filtered.length}</span> of{" "}
// // // // // // // // //                 {PRODUCTS.length} products
// // // // // // // // //               </p>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* ── Category Filter Tabs ── */}
// // // // // // // // //           <div className="mt-8 flex flex-wrap gap-2">
// // // // // // // // //             {CATEGORIES.map((cat) => {
// // // // // // // // //               const active = activeCategory === cat;
// // // // // // // // //               const count =
// // // // // // // // //                 cat === "All"
// // // // // // // // //                   ? PRODUCTS.length
// // // // // // // // //                   : PRODUCTS.filter(
// // // // // // // // //                       (p) =>
// // // // // // // // //                         p.type === cat ||
// // // // // // // // //                         (cat === "Sanitizer" && p.badge === "Sanitizer")
// // // // // // // // //                     ).length;
// // // // // // // // //               return (
// // // // // // // // //                 <button
// // // // // // // // //                   key={cat}
// // // // // // // // //                   onClick={() => setActiveCategory(cat)}
// // // // // // // // //                   className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200"
// // // // // // // // //                   style={{
// // // // // // // // //                     background: active ? "white" : "rgba(255,255,255,0.1)",
// // // // // // // // //                     color: active ? "#0f2557" : "rgba(255,255,255,0.75)",
// // // // // // // // //                     border: active ? "none" : "1px solid rgba(255,255,255,0.2)",
// // // // // // // // //                     boxShadow: active ? "0 4px 14px rgba(0,0,0,0.15)" : "none",
// // // // // // // // //                   }}
// // // // // // // // //                 >
// // // // // // // // //                   {cat}
// // // // // // // // //                   <span
// // // // // // // // //                     className="rounded-full px-1.5 py-0.5"
// // // // // // // // //                     style={{
// // // // // // // // //                       background: active ? "#2A5DA8" : "rgba(255,255,255,0.15)",
// // // // // // // // //                       color: active ? "white" : "rgba(255,255,255,0.7)",
// // // // // // // // //                       fontSize: 9,
// // // // // // // // //                       fontWeight: 800,
// // // // // // // // //                     }}
// // // // // // // // //                   >
// // // // // // // // //                     {count}
// // // // // // // // //                   </span>
// // // // // // // // //                 </button>
// // // // // // // // //               );
// // // // // // // // //             })}
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* ══ PRODUCT LIST — PDF CARD STYLE ═══════════════════════════════════════ */}
// // // // // // // // //       <div className="max-w-screen-2xl mx-auto px-6 py-8" ref={gridRef}>
// // // // // // // // //         {filtered.length === 0 ? (
// // // // // // // // //           <div className="flex flex-col items-center py-32 text-gray-400">
// // // // // // // // //             <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
// // // // // // // // //               <svg
// // // // // // // // //                 width="32"
// // // // // // // // //                 height="32"
// // // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // // //                 fill="none"
// // // // // // // // //                 stroke="#9ca3af"
// // // // // // // // //                 strokeWidth="1.5"
// // // // // // // // //               >
// // // // // // // // //                 <circle cx="11" cy="11" r="8" />
// // // // // // // // //                 <path d="m21 21-4.35-4.35" />
// // // // // // // // //               </svg>
// // // // // // // // //             </div>
// // // // // // // // //             <p className="font-semibold text-base text-gray-500">No products found</p>
// // // // // // // // //             <button
// // // // // // // // //               onClick={() => {
// // // // // // // // //                 setSearch("");
// // // // // // // // //                 setActiveCategory("All");
// // // // // // // // //               }}
// // // // // // // // //               className="mt-4 px-5 py-2 rounded-xl bg-[#2A5DA8] text-white text-sm font-semibold"
// // // // // // // // //             >
// // // // // // // // //               Clear Filters
// // // // // // // // //             </button>
// // // // // // // // //           </div>
// // // // // // // // //         ) : (
// // // // // // // // //           <div className="flex flex-col gap-5">
// // // // // // // // //             {filtered.map((p) => (
// // // // // // // // //               <PDFCard key={p.id} product={p} />
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //       </div>

// // // // // // // // //       <Footer />
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // "use client";

// // // // // // // // import Footer from "@/components/Footer";
// // // // // // // // import Image from "next/image";
// // // // // // // // import { useState, useRef } from "react";

// // // // // // // // // ─── Types ────────────────────────────────────────────────────────────────────
// // // // // // // // type Product = {
// // // // // // // //   id: number;
// // // // // // // //   name: string;
// // // // // // // //   category: string;
// // // // // // // //   type: string;
// // // // // // // //   certificate: string;
// // // // // // // //   composition: string;
// // // // // // // //   benefits: string[];
// // // // // // // //   dosage: { label: string; dose: string }[];
// // // // // // // //   presentation: string;
// // // // // // // //   form: string;
// // // // // // // //   storage: string;
// // // // // // // //   badge?: string;
// // // // // // // //   tag?: string;
// // // // // // // // };

// // // // // // // // // ─── Data ─────────────────────────────────────────────────────────────────────
// // // // // // // // const PRODUCTS: Product[] = [
// // // // // // // //   {
// // // // // // // //     id: 1,
// // // // // // // //     name: "i.MINVARE PM",
// // // // // // // //     category: "Pond Minerals",
// // // // // // // //     type: "Minerals",
// // // // // // // //     certificate: "CAA/JAN22/FA/03765",
// // // // // // // //     composition:
// // // // // // // //       "Innovative blend of essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Phosphorus, Copper, Sodium; Amino acids: DL-Methionine, L-Lysine; Probiotics: Bacillus subtilis 10B, Bacillus licheniformis 10B, Bacillus Coagulans 10B, Lactobacillus acidophilus 10B, Saccharomyces cervisiae 10B.",
// // // // // // // //     benefits: [
// // // // // // // //       "Improves F.C.R",
// // // // // // // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // // // // // // //       "Maintain pH of pond water",
// // // // // // // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // // // // // // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // // // // // // //       "Helps for immune response and defence mechanism",
// // // // // // // //       "Helps in uniform growth in shrimp and fish",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Shrimp/Prawn", dose: "10 kgs per Acre" },
// // // // // // // //       { label: "Fish", dose: "3 kgs per Acre" },
// // // // // // // //     ],
// // // // // // // //     presentation: "10 Kg's Pouch",
// // // // // // // //     form: "Powder",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 2,
// // // // // // // //     name: "i.MINVARE AM",
// // // // // // // //     category: "Pond Minerals",
// // // // // // // //     type: "Minerals",
// // // // // // // //     certificate: "",
// // // // // // // //     composition:
// // // // // // // //       "Innovative blend of essential Micro and Macro Minerals: Calcium, Dolomite, Sulphates containing Magnesium, Manganese, Zinc, Ferrous, Copper; Sodium Chlorides; Potassium; Phosphates: Di Calcium, Rock, Mono Sodium, Mono Potassium.",
// // // // // // // //     benefits: [
// // // // // // // //       "Improves F.C.R",
// // // // // // // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // // // // // // //       "Maintain pH of pond water",
// // // // // // // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // // // // // // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // // // // // // //       "Helps for immune response and defence mechanism",
// // // // // // // //       "Helps in uniform growth in shrimp and fish",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
// // // // // // // //       { label: "Fish", dose: "5 Kgs per Acre" },
// // // // // // // //     ],
// // // // // // // //     presentation: "20 kg Bag",
// // // // // // // //     form: "Powder",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 3,
// // // // // // // //     name: "i.MINVARE WS",
// // // // // // // //     category: "Pond Minerals",
// // // // // // // //     type: "Minerals",
// // // // // // // //     certificate: "CAA/APRIL 2025/MIN/07490",
// // // // // // // //     composition:
// // // // // // // //       "Innovative blend of essential Macro Minerals: Calcium, Dolomite, Zeolite; Sulphates: Magnesium, Manganese, Zinc, Ferrous, Copper; Chlorides: Potassium; Phosphates: Di Calcium, Rock, Sodium.",
// // // // // // // //     benefits: [
// // // // // // // //       "Improves F.C.R",
// // // // // // // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // // // // // // //       "Maintain pH of pond water",
// // // // // // // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // // // // // // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // // // // // // //       "Helps for immune response and defence mechanism",
// // // // // // // //       "Helps in uniform growth in shrimp and fish",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
// // // // // // // //       { label: "Fish", dose: "5 Kgs per Acre" },
// // // // // // // //     ],
// // // // // // // //     presentation: "20 Kgs Bag",
// // // // // // // //     form: "Powder",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 4,
// // // // // // // //     name: "i.MINVARE FM",
// // // // // // // //     category: "Feed Minerals",
// // // // // // // //     type: "Minerals",
// // // // // // // //     certificate: "CAA/JAN22/FA/03766",
// // // // // // // //     composition:
// // // // // // // //       "Essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Cobalt, Phosphorus, Copper, Selenium; Vitamins B2, B12, AD3, E; Amino acids: DL-Methionine, L-Lysine; Probiotics; Enzymes: Amylase, Protease, Cellulose, β.Galactose.",
// // // // // // // //     benefits: [
// // // // // // // //       "Improves F.C.R",
// // // // // // // //       "Protects from shell and muscle related problems",
// // // // // // // //       "Helps in moulting process and formation of exoskeleton in shrimp",
// // // // // // // //       "Improves hormonal and enzymatic activities in shrimp",
// // // // // // // //       "Protection from loose shell syndrome",
// // // // // // // //       "Improves metabolism",
// // // // // // // //       "Promotes fast body growth and gains more body weight",
// // // // // // // //       "Improves effectively the digestive system",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Shrimp/Prawn", dose: "5–8 gm/kg feed" },
// // // // // // // //       { label: "Fish", dose: "1–3 kgs per ton feed" },
// // // // // // // //     ],
// // // // // // // //     presentation: "1 Kg & 5 Kg's Pouch",
// // // // // // // //     form: "Powder",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 5,
// // // // // // // //     name: "i.MINVARE LiQ",
// // // // // // // //     category: "Liquid Minerals",
// // // // // // // //     type: "Minerals",
// // // // // // // //     certificate: "",
// // // // // // // //     composition:
// // // // // // // //       "Innovative mixture of optimal liquid blend of balanced essential Macro and Trace element Aqua culture feed supplements minerals: Amino Protein 2g, Buffer phosphonic acid 2.5g, Calcium lactate 1.5g, Calcium phosphate monobasic 5.5g, Citric acid 2g, Di potassium phosphate 5.35g, Di sodium phosphate 3.25g, Magnesium citrate 750mg, Potassium chloride 1.5g, Sodium citrate 2.5g, Trace mineral complex (Glycinated) 2g, DM water Q.S.",
// // // // // // // //     benefits: [
// // // // // // // //       "Prevents and controls white muscle / soft shell syndrome and body cramping problem",
// // // // // // // //       "Improves and enhances the development of phytoplankton and zooplankton",
// // // // // // // //       "Regulates the moulting cycle and survival rate",
// // // // // // // //       "Balances minerals deficiency in water, soil and shrimp",
// // // // // // // //       "Improves metabolism, digestive system and FCR",
// // // // // // // //       "Improves mineral absorption and pond water nutrition",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Pond Application", dose: "50 Ltrs/Acre (once every 10 days)" },
// // // // // // // //       { label: "Feed Application", dose: "5–10 ml/kg feed (30 min before feeding)" },
// // // // // // // //     ],
// // // // // // // //     presentation: "1 Ltr Bottle",
// // // // // // // //     form: "Liquid",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 6,
// // // // // // // //     name: "i.PROPONDVARE",
// // // // // // // //     category: "Water & Soil Probiotics",
// // // // // // // //     type: "Probiotics",
// // // // // // // //     certificate: "CAA/JAN22/PRO/03769",
// // // // // // // //     composition:
// // // // // // // //       "Bacillus subtilis, Bacillus megaterium, Bacillus licheniformis, Bacillus polymyxa, Bacillus pumilis, Saccharomyces cerevisiae, Cellulomanas cartae, p.pantotrophus, Nitrosomonas, Nitrobacter, Pseidomonas denitricans, l.plantarum, l.acidophilus, Rhodobacter sphaeroides, Thiobacillus thiooxidans & Thiobacillus ferroxidans.",
// // // // // // // //     benefits: [
// // // // // // // //       "Degradation of organic waste and maintains phytoplankton bloom",
// // // // // // // //       "Improves water and soil quality and increases aquatic animal production",
// // // // // // // //       "Stabilizes pond pH and maintains optimum alkalinity",
// // // // // // // //       "Increases collagen synthesis and accelerates encrustation",
// // // // // // // //       "Removes unwanted micro-organisms",
// // // // // // // //       "Strengthens the immune system",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Initial booster (Shrimp/Prawn/Fish)", dose: "1.5 Kg/Ha" },
// // // // // // // //       { label: "Maintenance", dose: "1 Kg/Ha every 7–10 days" },
// // // // // // // //     ],
// // // // // // // //     presentation: "1 kg Bottle",
// // // // // // // //     form: "Powder",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 7,
// // // // // // // //     name: "i.PROVARE GUT",
// // // // // // // //     category: "Gut Probiotics",
// // // // // // // //     type: "Probiotics",
// // // // // // // //     certificate: "CAA/JAN22/PRO/03771",
// // // // // // // //     composition:
// // // // // // // //       "High strength GUT Probiotics: Lactobacillus plantarum, Lactobacillus acidophilus, Saccharomyces cervisiae; Enzymes: N Protease and Fungal phytase; Herbal extracts: Phyllanthus emblica Linn., Zingiber officinale and Trigonella foenum-graecum.",
// // // // // // // //     benefits: [
// // // // // // // //       "Improves digestion and feed intake while protecting GUT health",
// // // // // // // //       "Prevents the occurrence of Mycosporidia infection",
// // // // // // // //       "Prevents development of pathogenic bacteria and affects to maintain the GUT micro flora",
// // // // // // // //       "Improves FCR and lower GUT pH",
// // // // // // // //       "Support health, performance and growth of aquatic species",
// // // // // // // //       "Prevents the onset of loose shell syndrome",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Shrimp", dose: "5–10 Grams per Kg feed" },
// // // // // // // //       { label: "Fish", dose: "10–15 Grams per Kg feed" },
// // // // // // // //     ],
// // // // // // // //     presentation: "1 kg Bottle",
// // // // // // // //     form: "Powder",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 8,
// // // // // // // //     name: "i.VIBRIOVARE",
// // // // // // // //     category: "Vibrio Control",
// // // // // // // //     type: "Probiotics",
// // // // // // // //     certificate: "CAA - Under Process",
// // // // // // // //     composition:
// // // // // // // //       "Bacillus magaterium (2.5B), Bacillus polymyxa (2.5B), Bacillus pumilus (2.5B), Paracoccus marginatus (0.5B), Paracoccus pantotropus (2B), Streptococcus thermophillus (2.5B), Bacillus amyloliquificans (1B), Bacillus mesentrices (0.5B), Enterococcus facium (2.5B), Lactobacillus rhamnosus (2B), Lactobacillus sporogenous (1B), Pediococcus Acidilactici (0.5B), Mannan Oligo Saccharide (MOS), Beta Glucins B 1-3, B 1-4, B 1-6, Alpha-Amylase (Banu) 250 IU, Lipase 250 IU, N protease 10000 IU, Phytase 200 IU, Xylanase 2000 IU, Maltodextrin (Malto), Starch Powder.",
// // // // // // // //     benefits: [
// // // // // // // //       "Highly prevents the Vibrio bacteria infections in Pond water",
// // // // // // // //       "Controls the running mortality in Shrimp",
// // // // // // // //       "Helps to maintain the microbial balance in the Shrimp intestine",
// // // // // // // //       "Inhibit the communication of Vibrio Spp were presented",
// // // // // // // //       "Increases the immune system and improves the FCR",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Before stocking", dose: "1 Kg of Tablets per acre; if Vibriosis: 250 Grams/Acre" },
// // // // // // // //       { label: "Maintenance", dose: "500 Grams per Acre every 7–10 days for 15 days" },
// // // // // // // //     ],
// // // // // // // //     presentation: "500 g Bottle",
// // // // // // // //     form: "Tablet",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 9,
// // // // // // // //     name: "i.Bio'YEAST'vare",
// // // // // // // //     category: "Yeast Probiotics",
// // // // // // // //     type: "Probiotics",
// // // // // // // //     certificate: "CAA/OCT22/PRO/04250",
// // // // // // // //     composition:
// // // // // // // //       "Unique combination of Saccharomyces cerevisiae, Bacillus Subtilis.",
// // // // // // // //     benefits: [
// // // // // // // //       "Stimulates feed digestion",
// // // // // // // //       "Prevents and Controls Pathogenic Bacteria",
// // // // // // // //       "Enhanced survival rate",
// // // // // // // //       "Improves pond conditions with good plankton and beneficial bacterial density",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Feed supplement", dose: "2–3g/Kg feed" },
// // // // // // // //       { label: "Fermentation", dose: "1 Kg along with 10 Kgs Rice Bran and 2 Kgs Jaggery" },
// // // // // // // //       { label: "Pond application", dose: "1–2 Kg/Acre" },
// // // // // // // //     ],
// // // // // // // //     presentation: "1 kg Pouch",
// // // // // // // //     form: "Powder",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 10,
// // // // // // // //     name: "i.PSBVARE",
// // // // // // // //     category: "Photosynthetic Bacteria",
// // // // // // // //     type: "Probiotics",
// // // // // // // //     certificate: "CAA/OCT22/PRO/04254",
// // // // // // // //     composition: "Rhodopseudomonas palustris – 20 Billion CFU/gm.",
// // // // // // // //     benefits: [
// // // // // // // //       "Improves the quality of water in ponds",
// // // // // // // //       "Helps decompose many toxic matters such as nitrous acid, organic materials, ammonia, pond sludge, and hydrogen sulphide",
// // // // // // // //       "Decreasing diseases by restraining the pathogenic bacteria counts in the water",
// // // // // // // //       "Removes black soil & H₂S formed mostly by anaerobic decomposition of organic matter",
// // // // // // // //       "Improves the appetite of fish and shrimps and helps botanical plankton growth",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Initial regular use (Shrimp/Prawn/Fish)", dose: "250 Grms/Acre" },
// // // // // // // //       { label: "Later stage (black soil & H₂S)", dose: "500 Grms/Acre" },
// // // // // // // //     ],
// // // // // // // //     presentation: "500 g Bottle",
// // // // // // // //     form: "Powder",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 11,
// // // // // // // //     name: "i.PROPONDVARE LiQ",
// // // // // // // //     category: "Liquid Water & Soil Probiotics",
// // // // // // // //     type: "Sanitizer",
// // // // // // // //     certificate: "CAA - Under Process",
// // // // // // // //     badge: "Sanitizer",
// // // // // // // //     composition:
// // // // // // // //       "Innovative mixture and optimal liquid multi-strain blend of 16 different essential formulation strains for soil & water probiotics: Bacillus amyloliquefaciens, Bacillus denitrificans, Bacillus licheniformis, Bacillus pumilus, Bacillus subtilis, Bafidiobacterium spp., Lactobacillus acidophilus, Lactobacillus plantarum, Lactobacillus rhamnosus, Nitrobacter spp., Paracoccus denitrificans, Paracoccus pentatrophus, Saccharomyces cerevisiae, Thiobacillus ferroxidans, Thiobacillus thioxidans, DM water Q.S.",
// // // // // // // //     benefits: [
// // // // // // // //       "Enhances gut health, improves feed conversation, growth & survival and boosts immunity",
// // // // // // // //       "Strengthens gut micro-biota, improves digestion and enhances disease resistance",
// // // // // // // //       "Converts toxic ammonia into nitrites (nitrification)",
// // // // // // // //       "Reduces hydrogen sulfide and improves pond bottom conditions ecology and reduce sludge accumulation",
// // // // // // // //       "Reduce disease outbreaks like White Spot Syndrome",
// // // // // // // //       "Degrades organic waste, controls ammonia and suppresses Vibro spp",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Before stocking (Soil Application)", dose: "2 L/Acre (7 days before)" },
// // // // // // // //       { label: "During stocking (Pond Application)", dose: "1 L/Acre (once in every 10 days)" },
// // // // // // // //       { label: "DO DOC", dose: "1.5 L/Acre (once in every 10 days)" },
// // // // // // // //     ],
// // // // // // // //     presentation: "1 Ltr Bottle",
// // // // // // // //     form: "Liquid",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 12,
// // // // // // // //     name: "i.CEEVARE",
// // // // // // // //     category: "Vitamin C",
// // // // // // // //     type: "Vitamins & Nutrition",
// // // // // // // //     certificate: "CAA/JAN22/FA/03767",
// // // // // // // //     composition: "Ascorbic acid (coated Vitamin C) Coated.",
// // // // // // // //     benefits: [
// // // // // // // //       "Improves F.C.R and survival rate",
// // // // // // // //       "Assists in shell formation and muscle development",
// // // // // // // //       "Increases body weight by acceleration of growth",
// // // // // // // //       "Accelerates growth and gives higher survival rate",
// // // // // // // //       "Prevents vibrio loads attack on shrimps",
// // // // // // // //       "Facilitates tissue repairs and wound healing",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Shrimp/Prawn (Normal Conditions)", dose: "2–3 g/1 kg feed at least twice a day" },
// // // // // // // //       { label: "Under Stress condition", dose: "5g/1 kg feed or as directed by aqua consultant" },
// // // // // // // //       { label: "Fish", dose: "2 g/1 kg of feed" },
// // // // // // // //     ],
// // // // // // // //     presentation: "1 Kg Bottle",
// // // // // // // //     form: "Powder",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 13,
// // // // // // // //     name: "i.PHYTOVARE",
// // // // // // // //     category: "Phyto Extracts",
// // // // // // // //     type: "Vitamins & Nutrition",
// // // // // // // //     certificate: "USFDA & EU APPROVED",
// // // // // // // //     badge: "Premium",
// // // // // // // //     composition:
// // // // // // // //       "Innovative blend of High Quality OREGANO (Oreganum Vulgare SSP. hirtum) essential plant extracts constituted of over 30 active ingredients of Carvacrol and Thymol etc.",
// // // // // // // //     benefits: [
// // // // // // // //       "Antimicrobial effects to maintain GUT health thereby reducing enteric diseases e.g. White Feces",
// // // // // // // //       "Anti-oxidation to reduce stresses and protect liver",
// // // // // // // //       "Increase growth rate and improve FCR",
// // // // // // // //       "High-temperature (upto 120 Deg. C) stability and low disappearance rate in water",
// // // // // // // //       "Increase survival rates and reduce disease occurrence",
// // // // // // // //       "Enhances growth rate and feed efficiency improved reproductive success",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Prawn/Shrimp (Healthy condition)", dose: "10 Grams/Kg compound feed" },
// // // // // // // //       { label: "Infected condition", dose: "20 Grams/Kg compound feed" },
// // // // // // // //       { label: "Fish Feed", dose: "50 Grams/Ton compound feed" },
// // // // // // // //     ],
// // // // // // // //     presentation: "500g Bottle",
// // // // // // // //     form: "Powder",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 14,
// // // // // // // //     name: "i.LIVOVARE GEL",
// // // // // // // //     category: "Liver Tonic",
// // // // // // // //     type: "Vitamins & Nutrition",
// // // // // // // //     certificate: "CAA/JAN22/FA/03770",
// // // // // // // //     composition:
// // // // // // // //       "Vitamins: Vitamin C, B2, E; Amino acids: DL-Methionine and L-Lysine, and Binding agents; Nano Minerals: Nano Magnesium, Nano Calcium, Nano Potassium, Nano Zinc, Nano Selenium, Nano Cobalt, Nano Ferrous, Nano Chromium, Nano Manganese, Nano Phosphorus, Nano Molybdenum; Probiotics: Saccharomyces spp and Lactobacillus spp.",
// // // // // // // //     benefits: [
// // // // // // // //       "Improves the functional efficiency of the liver and pancreas",
// // // // // // // //       "Promotes digestibility and improves F.C.R",
// // // // // // // //       "Increases nutrient utilisation and reduce fat deposition",
// // // // // // // //       "Ensures Uniform growth and early harvesting",
// // // // // // // //       "Increase mineral absorption",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Up to 10 weeks", dose: "10–15 ml per 1 kg feed" },
// // // // // // // //       { label: "11 weeks and above", dose: "20–25 ml per 1 kg feed" },
// // // // // // // //     ],
// // // // // // // //     presentation: "20 Ltrs Barrel / 5 Ltrs Tin / 1 Ltr Bottle",
// // // // // // // //     form: "Gel",
// // // // // // // //     storage: "Keep in cool and dry place. *Shakewell before use.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 15,
// // // // // // // //     name: "i.IMMUNOVARE",
// // // // // // // //     category: "Immune Booster",
// // // // // // // //     type: "Health & Immunity",
// // // // // // // //     certificate: "CAA/APRIL 2025/FA/07489",
// // // // // // // //     composition:
// // // // // // // //       "Comprehensive blend of Macro Nutrients, Amino Acids, Vitamins, Minerals, Enzymes, Probiotics, Non-essential amino acids, Raw Materials and Vitamins as per detailed composition table.",
// // // // // // // //     benefits: [
// // // // // // // //       "Increase Nutrient Utilisation & Growth rate and reduce fat deposition",
// // // // // // // //       "Improve resistance towards stress & diseases and also better resistance to environmental stressors in shrimp",
// // // // // // // //       "Maintains correct Osmotic pressure and improves anti stress ability",
// // // // // // // //       "Increase survival rates and reduce disease occurrence",
// // // // // // // //       "Accelerate the detoxifying of deposited Toxins in Shrimp",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Prawn/Shrimp (at least one midday feeding)", dose: "3–5 Grams/Kg compound feed / 1–2 meal a day" },
// // // // // // // //     ],
// // // // // // // //     presentation: "500 g Bottle",
// // // // // // // //     form: "Powder",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 16,
// // // // // // // //     name: "i.HEPTOPANCVARE",
// // // // // // // //     category: "Hepato-Pancreatic Support",
// // // // // // // //     type: "Health & Immunity",
// // // // // // // //     certificate: "CAA/ARPIL 2025/IMMU/07492",
// // // // // // // //     composition:
// // // // // // // //       "Detailed composition includes Amino Acids, Enzymes, Essential/Non-essential amino acids, Herbal Extracts, Raw Materials and Vitamins as per specification table.",
// // // // // // // //     benefits: [
// // // // // // // //       "Protect health of hepatopancreas and intestine, with bright and translucent body, clear white membrane, strong and health",
// // // // // // // //       "Enhance growth performance, feed efficiency and product",
// // // // // // // //       "Hepatopancreas (H.P) is the power house and vital organ in animal's survival and growth",
// // // // // // // //       "Improve survival rate and immunity for reducing the risk of some vital disease outbreak",
// // // // // // // //       "Relieve nutritional white feces, especially white feces caused by liver damage",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Prawn/Shrimp (preventive)", dose: "5 Grams/Kg compound feed with Gel / 1 meal a day (every 15 days for 5 days)" },
// // // // // // // //       { label: "If problem persists", dose: "1 meal a day regularly" },
// // // // // // // //     ],
// // // // // // // //     presentation: "500 g Bottle",
// // // // // // // //     form: "Powder",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 17,
// // // // // // // //     name: "i.WFSVARE GEL",
// // // // // // // //     category: "Feed Additive Gel",
// // // // // // // //     type: "Health & Immunity",
// // // // // // // //     certificate: "CAA/APRIL 2025/IMMU/07487",
// // // // // // // //     composition:
// // // // // // // //       "Active Probiotics, Vitamins blend, Amino Acids, Enzymes, Probiotics, Raw Materials, Vitamins as per detailed formulation (31 active ingredients).",
// // // // // // // //     benefits: [
// // // // // // // //       "Ensures faster growth and weight gain",
// // // // // // // //       "Improves feed conversion ratio (FCR)",
// // // // // // // //       "Improves proper shell formation",
// // // // // // // //       "Provides necessary binding for the supplemented feed additives preventing any Wastage",
// // // // // // // //       "Maintains high and uniform growth",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "During Culture", dose: "20 ml per 1 kg of Compound Feed or as advised by Consultant" },
// // // // // // // //     ],
// // // // // // // //     presentation: "5 Ltr Tin",
// // // // // // // //     form: "Gel",
// // // // // // // //     storage: "Keep in cool and dry place. *Shakewell before use.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 18,
// // // // // // // //     name: "i.VIRAHEALVARE",
// // // // // // // //     category: "Antiviral / Sanitizer",
// // // // // // // //     type: "Sanitizer",
// // // // // // // //     certificate: "CAA/OCT22/DIS/04270",
// // // // // // // //     badge: "Sanitizer",
// // // // // // // //     composition:
// // // // // // // //       "Triple Salt - 50% w/v (Containing Triple Salt - 50% w/v); Potassium monopersulphate, Potassium hydrogen sulphate, Potassium sulfate, Sodium Chloride, tartrazine yellow.",
// // // // // // // //     benefits: [
// // // // // // // //       "Multi-component and Multi-purpose oxidizing system with major physical and chemical components of pathogens and restrict their propagation thru this disinfectant",
// // // // // // // //       "Highly effective to control eradicate bacteria, fungi, moulds and all viral families effecting fish and shrimp especially WSSV",
// // // // // // // //       "High level of surfactancy with acidic and oxidising power providing superior destruction of bio films. An effective bactericidal and can control the vibrio in water",
// // // // // // // //       "Effectively control black and brown gill even under extreme stress conditions",
// // // // // // // //       "Product can be used in the pond and can also be applied on the surface and equipments",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Prawn/Shrimp (Prevention of Diseases)", dose: "500 gm to 2 Kg/ha — Apply once every fortnight according to pond water quality/condition" },
// // // // // // // //       { label: "Treating Diseases", dose: "Apply once every 3–5 days or as advised by Aquaculture Consultant" },
// // // // // // // //     ],
// // // // // // // //     presentation: "1 Kg Bottle",
// // // // // // // //     form: "Powder",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 19,
// // // // // // // //     name: "i.SANVARE TD",
// // // // // // // //     category: "Broad Spectrum Disinfectant",
// // // // // // // //     type: "Sanitizer",
// // // // // // // //     certificate: "CAA - Under Process",
// // // // // // // //     badge: "Sanitizer",
// // // // // // // //     composition:
// // // // // // // //       "Benzalkonium Chloride 50% (BKC) - 10%, Glutaraldehyde 50% (C5H8O2) - 10%, Malachite Green (Aniline Green) - 3%, Formaldehyde 37% - 40%, Copper Sulphate - 2%, Ammonium Chloride (NH4Cl) - 2%, Alphox 200 (9.5 moles) (Ethylene Oxide) - 3%, Stabilizers and Surfactants - QS.",
// // // // // // // //     benefits: [
// // // // // // // //       "Highly effective against fungal, bacterial and viral disease",
// // // // // // // //       "Kills bacteria including Gram-Positive, Ligeonella, Protozoan, viruses, algae and fungal spores",
// // // // // // // //       "Broad Spectrum activity against 32 harmful bacteria, 62 virus, 7 fungi and 11 spores with no resistance developed",
// // // // // // // //       "Prevents mite infestation in aqua Culture",
// // // // // // // //       "Fights against pond bottom bacteria and reduce bacterial load in the ponds",
// // // // // // // //       "High residual activity even in presence of organic matter",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Upto 3 feet depth", dose: "0.5 to 1 Ltrs per Acre" },
// // // // // // // //       { label: "Above 3 feet depth", dose: "1–1.5 Ltr per Acre per 3 feet" },
// // // // // // // //     ],
// // // // // // // //     presentation: "5 Ltr Tins",
// // // // // // // //     form: "Liquid",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 20,
// // // // // // // //     name: "i.SILVARE NANO",
// // // // // // // //     category: "Nano Silver",
// // // // // // // //     type: "Sanitizer",
// // // // // // // //     certificate: "CAA - Under Process",
// // // // // // // //     badge: "Sanitizer",
// // // // // // // //     composition:
// // // // // // // //       "PVP 10.8 g, Glycerol 500 ml, Silver nitrate 1.08 g, Enzymes, Amino acids, DM water Q.S.",
// // // // // // // //     benefits: [
// // // // // // // //       "Inhibit the growth of harmful bacteria attack like Vibrio spp. and break down the cell membranes of pathogenic bacteria",
// // // // // // // //       "Helps to reduce microbial load, improving overall pond hygiene and reducing stress on shrimp",
// // // // // // // //       "Boost the innate immune system of shrimp, increasing resistance to infections",
// // // // // // // //       "Controls viral loads and emphasizes antibiotic-resistant bacteria in aquaculture",
// // // // // // // //       "Clean body, gill and removes dirty materials from Shrimp body",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Soil Application (Before stocking)", dose: "1 L/Acre with 1 m depth of water (5 days before)" },
// // // // // // // //       { label: "Pond Application (Post stocking)", dose: "1 L/Acre during Vibriosis in pond water or as advised by Aquaculture Technician" },
// // // // // // // //     ],
// // // // // // // //     presentation: "1 Ltr Bottle",
// // // // // // // //     form: "Liquid",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 21,
// // // // // // // //     name: "i.OXYVARE",
// // // // // // // //     category: "Oxygen Granules",
// // // // // // // //     type: "Oxygen Products",
// // // // // // // //     certificate: "CAA/JAN22/CHEM/03768",
// // // // // // // //     badge: "Emergency Use",
// // // // // // // //     composition:
// // // // // // // //       "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity).",
// // // // // // // //     benefits: [
// // // // // // // //       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
// // // // // // // //       "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
// // // // // // // //       "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
// // // // // // // //       "Improves survival create during stocking in culture period and before harvesting",
// // // // // // // //       "It helps in development of plankton to the required levels",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
// // // // // // // //       { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
// // // // // // // //     ],
// // // // // // // //     presentation: "10 kgs Bucket",
// // // // // // // //     form: "Granules",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 22,
// // // // // // // //     name: "i.OXYVARE-T",
// // // // // // // //     category: "Oxygen Tablets",
// // // // // // // //     type: "Oxygen Products",
// // // // // // // //     certificate: "CAA/APRIL 2025/CHEM/07488",
// // // // // // // //     composition:
// // // // // // // //       "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity) in a tablet form.",
// // // // // // // //     benefits: [
// // // // // // // //       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
// // // // // // // //       "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
// // // // // // // //       "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
// // // // // // // //       "Improves survival create during stocking in culture period and before harvesting",
// // // // // // // //       "It helps in development of plankton to the required levels",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
// // // // // // // //       { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
// // // // // // // //     ],
// // // // // // // //     presentation: "10 Kgs Bucket",
// // // // // // // //     form: "Tablet",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 23,
// // // // // // // //     name: "i.GEOPROVARE G",
// // // // // // // //     category: "Zeolite Granules (with Probiotics)",
// // // // // // // //     type: "Zeolite Products",
// // // // // // // //     certificate: "CAA - Not Required",
// // // // // // // //     composition:
// // // // // // // //       "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
// // // // // // // //     benefits: [
// // // // // // // //       "Highest Cation Exchange capacity & it controls obnoxious gases instantly",
// // // // // // // //       "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
// // // // // // // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // // // // // // //       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
// // // // // // // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // // // // // // //       "Can maintain clean pond bottom",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Pond Preparation", dose: "50 Kgs/acre" },
// // // // // // // //       { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
// // // // // // // //     ],
// // // // // // // //     presentation: "10 kg's Pouch",
// // // // // // // //     form: "Granules",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 24,
// // // // // // // //     name: "i.GEOPROVARE P",
// // // // // // // //     category: "Zeolite Powder (with Probiotics)",
// // // // // // // //     type: "Zeolite Products",
// // // // // // // //     certificate: "CAA - Not Required",
// // // // // // // //     composition:
// // // // // // // //       "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
// // // // // // // //     benefits: [
// // // // // // // //       "Highest Cation Exchange capacity and it controls obnoxious gases instantly",
// // // // // // // //       "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
// // // // // // // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // // // // // // //       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
// // // // // // // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // // // // // // //       "Can maintain clean pond bottom",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Pond Preparation", dose: "50 Kgs/acre" },
// // // // // // // //       { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
// // // // // // // //     ],
// // // // // // // //     presentation: "10 kg's Pouch",
// // // // // // // //     form: "Powder",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 25,
// // // // // // // //     name: "i.GEOVARE P",
// // // // // // // //     category: "Zeolite Powder Plain",
// // // // // // // //     type: "Zeolite Products",
// // // // // // // //     certificate: "CAA - Not Required",
// // // // // // // //     composition:
// // // // // // // //       "Silicon Dioxice (SiO2): 65–70%; Sodium: 1–3%; Iron (Fe): 1–2%; Magnesium: 0.5–1.0%; Calcium Oxide (Cal): 3–5%; Potassium: 0.5–1.0%; Aluminium: 20%; LOI: 5–8%.",
// // // // // // // //     benefits: [
// // // // // // // //       "Highest Cation Exchange capacity it controls obnoxious gases instantly",
// // // // // // // //       "Quick and Efficient removal of obnoxious gases; Dissolved Oxygen level will be improved",
// // // // // // // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // // // // // // //       "Absorbs toxic gases like Ammonia (Nh3), Hydrogen Sulphide (H2S) and other liberated anions from pond water",
// // // // // // // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // // // // // // //       "Can maintain clean pond bottom",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Pond Preparation", dose: "50Kgs/acre" },
// // // // // // // //       { label: "During Culture", dose: "Minimum 15Kgs/acre or as advised by aqua culture technician" },
// // // // // // // //     ],
// // // // // // // //     presentation: "25Kgs Bag",
// // // // // // // //     form: "Powder",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 26,
// // // // // // // //     name: "i.TOXIVARE",
// // // // // // // //     category: "Yucca / Toxin Binder",
// // // // // // // //     type: "Water Treatment",
// // // // // // // //     certificate: "CAA/OCT22/FA/04255",
// // // // // // // //     composition:
// // // // // // // //       "Dry natural extract from the YUCCA schidigera plant, Ammonia binding agents and Probiotics.",
// // // // // // // //     benefits: [
// // // // // // // //       "Yucca is rich in glyco compounds that instantly binds with un-ionized ammonia thereby, reducing ammonia toxicity in the pond",
// // // // // // // //       "Absorbs Nh₂, So₂, Ch₂, H₂S etc. of the pond bottom and cleans the toxic gases in the water",
// // // // // // // //       "Reduced incidence of BOD and COD due to decrease of ammonia content in pond water",
// // // // // // // //       "Deodorizes and purifies pond bottom wastage and water to improve the activity of the culture species",
// // // // // // // //       "Increase the availability of dissolved oxygen in pond water",
// // // // // // // //       "Reduce in gill irrigation",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Pond application", dose: "500 Gm per HA of 1 meter column" },
// // // // // // // //       { label: "Feed application", dose: "2–5 Gm/Kg feed" },
// // // // // // // //     ],
// // // // // // // //     presentation: "1 Kg Pouch",
// // // // // // // //     form: "Powder",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 27,
// // // // // // // //     name: "i.ECOSOFTVARE",
// // // // // // // //     category: "EDTA",
// // // // // // // //     type: "Water Treatment",
// // // // // // // //     certificate: "CAA - Not Required",
// // // // // // // //     composition:
// // // // // // // //       "Unique combination of Ethylene Diamine Tetra Acetic Acid (EDTA) formulated salt compounds.",
// // // // // // // //     benefits: [
// // // // // // // //       "Reduces the hardness levels to optimum lower levels there by stabilizing the alkalinity in the pond water completely prevents plankton crash",
// // // // // // // //       "i.Ecosoftvare is used to improve water quality by reducing heavy metal concentrations",
// // // // // // // //       "Stabilizes the total Ammonia levels there by minimise the free ammonia in the pond water",
// // // // // // // //       "Helps to create toxic free environment",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "General application", dose: "Mix 1–2 kgs in 50 Ltrs of water and spray over 1 Acre evenly" },
// // // // // // // //       { label: "Best practice", dose: "Apply in day light for better results or as advised by Aqua consultant" },
// // // // // // // //     ],
// // // // // // // //     presentation: "1 Kg / 5 kg Pouch",
// // // // // // // //     form: "Powder",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 28,
// // // // // // // //     name: "i.NITRONILVARE",
// // // // // // // //     category: "Nitrite Control",
// // // // // // // //     type: "Water Treatment",
// // // // // // // //     certificate: "CAA/OCT22/PRO/04253",
// // // // // // // //     composition:
// // // // // // // //       "Nitrosomonas, Nitrobacter, Thiobacillus Thioxidans, Thiobacillus Ferroxidans, Thiobacillus Denitrificans, Paracoccus Denitrificans, N. Protease, Fungal Phytase, Fungal Alpha Amylase.",
// // // // // // // //     benefits: [
// // // // // // // //       "It reduces nitrites (No2) content in water to safe level",
// // // // // // // //       "i.NITRONILVARE is powerful water treatment additive for aquaculture pond",
// // // // // // // //       "It prevents formation of black soil due to decay of organic pollutant Improves water quality and enhances survival rate",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "Prawn/Shrimp", dose: "1 Kg/acre once in every 10 days" },
// // // // // // // //       { label: "Fish", dose: "1 Kg/acre once in every one month or advised by aqua consultant" },
// // // // // // // //     ],
// // // // // // // //     presentation: "1 Kg Bottle",
// // // // // // // //     form: "Powder",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 29,
// // // // // // // //     name: "Calcium Chloride (Fused)",
// // // // // // // //     category: "Chloride Salts",
// // // // // // // //     type: "Minerals",
// // // // // // // //     certificate: "CAA/OCT22/CHEM/04252",
// // // // // // // //     composition: "Calcium Chloride Fused.",
// // // // // // // //     benefits: [
// // // // // // // //       "Calcium has an important role in the biological processes of fish & shrimp. It is necessary for bone formation, blood clotting and their metabolic reactions",
// // // // // // // //       "Sodium and potassium are the most important salts in fish & shrimp blood and are critical for normal heat, nerve and muscle function",
// // // // // // // //       "Fish & shrimp can absorb calcium directly from the water of food",
// // // // // // // //       "The re-absorption of salt can reduce the energy available for growth",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "General application", dose: "5 to 10 Kgs per acre" },
// // // // // // // //       { label: "Best Practice", dose: "For best results apply in the evening hours" },
// // // // // // // //     ],
// // // // // // // //     presentation: "25 Kgs Drum (5 Kg x 5 Packs)",
// // // // // // // //     form: "Fused",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 30,
// // // // // // // //     name: "Magnesium Chloride (Crystal)",
// // // // // // // //     category: "Chloride Salts",
// // // // // // // //     type: "Minerals",
// // // // // // // //     certificate: "CAA/OCT22/CHEM/04251",
// // // // // // // //     composition: "Magnesium Chloride 97% ± 2%.",
// // // // // // // //     benefits: [
// // // // // // // //       "Covers the Magnesium balance of pond water",
// // // // // // // //       "Protects from soft shell syndrome",
// // // // // // // //       "Regularizes the moult cycle",
// // // // // // // //       "Increase survival and body weight rate",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "General application", dose: "5 to 10 Kgs per acre" },
// // // // // // // //     ],
// // // // // // // //     presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
// // // // // // // //     form: "Crystal",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 31,
// // // // // // // //     name: "Potassium Chloride (Crystal)",
// // // // // // // //     category: "Chloride Salts",
// // // // // // // //     type: "Minerals",
// // // // // // // //     certificate: "CAA/OCT22/CHEM/04256",
// // // // // // // //     composition: "Potassium Chloride 97% ± 2%.",
// // // // // // // //     benefits: [
// // // // // // // //       "Protects from soft shell syndrome",
// // // // // // // //       "Increase survival and body weight rate",
// // // // // // // //       "Regularizes the moult cycles",
// // // // // // // //       "Covers the Potassium balance of pond water",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "General application", dose: "5 to 8 Kgs per acre" },
// // // // // // // //     ],
// // // // // // // //     presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
// // // // // // // //     form: "Crystal",
// // // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 32,
// // // // // // // //     name: "i.FERRICCHLORIVARE",
// // // // // // // //     category: "Ferric Chloride",
// // // // // // // //     type: "Minerals",
// // // // // // // //     certificate: "CAA/ARPIL 2025/CHEM/07491",
// // // // // // // //     composition: "Ferric Chloride Anhydrous – 98% ± 2%. Assay: Min 98.0%.",
// // // // // // // //     benefits: [
// // // // // // // //       "Highly effective at removing suspended solids, Organic matter & Heavy metals from the Pond water",
// // // // // // // //       "It helps to prevent the overgrowth of Algae in Pond water",
// // // // // // // //       "Use as Iron supplement",
// // // // // // // //       "Improves Pond water bottom quality",
// // // // // // // //       "It helps to precipitate and inactive inorganic phosphorous in Pond water",
// // // // // // // //     ],
// // // // // // // //     dosage: [
// // // // // // // //       { label: "General", dose: "Consult our field staff or your aquaculture specialist for specific usage and directions" },
// // // // // // // //     ],
// // // // // // // //     presentation: "50 Kgs Drum (5Kg x 10 Packs)",
// // // // // // // //     form: "Crystal",
// // // // // // // //     storage: "Keep in cool and dry place. Special Instruction: No liability accepted for accidents arising while handling or use.",
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // // ─── Category & Color Config ──────────────────────────────────────────────────
// // // // // // // // const CATEGORIES = [
// // // // // // // //   "All",
// // // // // // // //   "Minerals",
// // // // // // // //   "Probiotics",
// // // // // // // //   "Vitamins & Nutrition",
// // // // // // // //   "Health & Immunity",
// // // // // // // //   "Oxygen Products",
// // // // // // // //   "Water Treatment",
// // // // // // // //   "Zeolite Products",
// // // // // // // //   "Sanitizer",
// // // // // // // // ];

// // // // // // // // const TYPE_ACCENT: Record<string, { header: string; label: string; dot: string }> = {
// // // // // // // //   "Minerals":            { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" },
// // // // // // // //   "Probiotics":          { header: "#006644", label: "#008855", dot: "#006644" },
// // // // // // // //   "Vitamins & Nutrition":{ header: "#cc6600", label: "#dd7700", dot: "#cc6600" },
// // // // // // // //   "Health & Immunity":   { header: "#7700aa", label: "#9911cc", dot: "#7700aa" },
// // // // // // // //   "Oxygen Products":     { header: "#003399", label: "#0044bb", dot: "#003399" },
// // // // // // // //   "Water Treatment":     { header: "#005566", label: "#007788", dot: "#005566" },
// // // // // // // //   "Zeolite Products":    { header: "#664400", label: "#886600", dot: "#664400" },
// // // // // // // //   "Sanitizer":           { header: "#aa0000", label: "#cc1111", dot: "#aa0000" },
// // // // // // // // };

// // // // // // // // const getAccent = (type: string) =>
// // // // // // // //   TYPE_ACCENT[type] || { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" };

// // // // // // // // // ─── PDF-Style Product Card ───────────────────────────────────────────────────
// // // // // // // // function PDFCard({ product }: { product: Product }) {
// // // // // // // //   const ac = getAccent(product.type);
// // // // // // // //   const [imgError, setImgError] = useState(false);

// // // // // // // //   return (
// // // // // // // //     <div
// // // // // // // //       className="w-full bg-white rounded-xl overflow-hidden"
// // // // // // // //       style={{
// // // // // // // //         border: `2px solid ${ac.header}33`,
// // // // // // // //         boxShadow: "0 2px 16px rgba(0,50,120,0.08)",
// // // // // // // //       }}
// // // // // // // //     >
// // // // // // // //       {/* ── TOP HEADER ── */}
// // // // // // // //       <div className="flex items-stretch" style={{ borderBottom: `2px solid ${ac.header}` }}>
// // // // // // // //         <div
// // // // // // // //           style={{
// // // // // // // //             width: 148,
// // // // // // // //             flexShrink: 0,
// // // // // // // //             background: "#f0f6ff",
// // // // // // // //             borderRight: `1px solid ${ac.header}33`,
// // // // // // // //           }}
// // // // // // // //         />
// // // // // // // //         <div className="flex items-center px-5 py-2 flex-1" style={{ background: "white" }}>
// // // // // // // //           <span
// // // // // // // //             className="font-black uppercase tracking-wide"
// // // // // // // //             style={{ color: ac.header, fontSize: 14, letterSpacing: 1, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // // // // // // //           >
// // // // // // // //             {product.category}
// // // // // // // //           </span>
// // // // // // // //         </div>
// // // // // // // //         {product.certificate && (
// // // // // // // //           <div
// // // // // // // //             className="flex items-center px-4 py-2"
// // // // // // // //             style={{
// // // // // // // //               background: "#fff8f0",
// // // // // // // //               borderLeft: `1px solid ${ac.header}44`,
// // // // // // // //               borderRight: `1px solid ${ac.header}44`,
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             <span
// // // // // // // //               className="font-bold"
// // // // // // // //               style={{ color: "#cc3300", fontSize: 11, fontFamily: "monospace", whiteSpace: "nowrap" }}
// // // // // // // //             >
// // // // // // // //               {product.certificate}
// // // // // // // //             </span>
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //         <div
// // // // // // // //           className="flex items-center px-5 py-2"
// // // // // // // //           style={{ background: ac.header, minWidth: 180 }}
// // // // // // // //         >
// // // // // // // //           <span
// // // // // // // //             className="font-black text-white tracking-wide"
// // // // // // // //             style={{ fontSize: 15, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // // // // // // //           >
// // // // // // // //             <em style={{ opacity: 0.8, fontStyle: "italic" }}>i</em>
// // // // // // // //             {product.name.replace(/^i[.\-']/i, "")}
// // // // // // // //           </span>
// // // // // // // //           {product.badge && (
// // // // // // // //             <span
// // // // // // // //               className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
// // // // // // // //               style={{ background: "rgba(255,255,255,0.2)", color: "white", whiteSpace: "nowrap" }}
// // // // // // // //             >
// // // // // // // //               {product.badge}
// // // // // // // //             </span>
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* ── BODY ROW ── */}
// // // // // // // //       <div className="flex" style={{ minHeight: 220 }}>

// // // // // // // //         {/* ── COL 1: Hexagon with image ── */}
// // // // // // // //         <div
// // // // // // // //           className="flex-none flex items-center justify-center"
// // // // // // // //           style={{
// // // // // // // //             width: 148,
// // // // // // // //             background: `linear-gradient(160deg, ${ac.header}15 0%, ${ac.header}08 100%)`,
// // // // // // // //             borderRight: `1px solid ${ac.header}22`,
// // // // // // // //             padding: "20px 14px",
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           {/* Outer hex — acts as the colored border ring */}
// // // // // // // //           <div
// // // // // // // //             style={{
// // // // // // // //               width: 110,
// // // // // // // //               height: 120,
// // // // // // // //               clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// // // // // // // //               background: ac.header,
// // // // // // // //               display: "flex",
// // // // // // // //               alignItems: "center",
// // // // // // // //               justifyContent: "center",
// // // // // // // //               padding: 3,
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             {/* Inner hex — white bg, clips the image into hex shape */}
// // // // // // // //             <div
// // // // // // // //               style={{
// // // // // // // //                 width: "100%",
// // // // // // // //                 height: "100%",
// // // // // // // //                 clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// // // // // // // //                 background: "white",
// // // // // // // //                 display: "flex",
// // // // // // // //                 alignItems: "center",
// // // // // // // //                 justifyContent: "center",
// // // // // // // //                 overflow: "hidden",
// // // // // // // //                 position: "relative",
// // // // // // // //               }}
// // // // // // // //             >
// // // // // // // //               {/* Product image — place files at /public/products/{id}.webp */}
// // // // // // // //               {!imgError && (
// // // // // // // //                 <Image
// // // // // // // //                   src={`/products/${product.id}.webp`}
// // // // // // // //                   alt={product.name}
// // // // // // // //                   fill
// // // // // // // //                   style={{ objectFit: "cover", zIndex: 1 }}
// // // // // // // //                   onError={() => setImgError(true)}
// // // // // // // //                 />
// // // // // // // //               )}

// // // // // // // //               {/* Text fallback — shown when image is missing or errors */}
// // // // // // // //               <div
// // // // // // // //                 style={{
// // // // // // // //                   position: "absolute",
// // // // // // // //                   inset: 0,
// // // // // // // //                   display: "flex",
// // // // // // // //                   flexDirection: "column",
// // // // // // // //                   alignItems: "center",
// // // // // // // //                   justifyContent: "center",
// // // // // // // //                   padding: "10px 8px",
// // // // // // // //                   zIndex: 0,
// // // // // // // //                 }}
// // // // // // // //               >
// // // // // // // //                 <div
// // // // // // // //                   style={{
// // // // // // // //                     fontWeight: 900,
// // // // // // // //                     fontSize: 11,
// // // // // // // //                     color: ac.header,
// // // // // // // //                     textAlign: "center",
// // // // // // // //                     lineHeight: 1.2,
// // // // // // // //                     letterSpacing: 0.3,
// // // // // // // //                     fontFamily: "'Segoe UI', system-ui, sans-serif",
// // // // // // // //                   }}
// // // // // // // //                 >
// // // // // // // //                   {product.name}
// // // // // // // //                 </div>
// // // // // // // //                 <div
// // // // // // // //                   style={{
// // // // // // // //                     fontSize: 8,
// // // // // // // //                     fontWeight: 700,
// // // // // // // //                     color: ac.dot,
// // // // // // // //                     opacity: 0.7,
// // // // // // // //                     textTransform: "uppercase",
// // // // // // // //                     letterSpacing: 0.5,
// // // // // // // //                     marginTop: 4,
// // // // // // // //                   }}
// // // // // // // //                 >
// // // // // // // //                   {product.form}
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* ── COL 2: Benefits ── */}
// // // // // // // //         <div
// // // // // // // //           className="flex-1 p-4"
// // // // // // // //           style={{ borderRight: `1px solid ${ac.header}22`, background: "white", minWidth: 0 }}
// // // // // // // //         >
// // // // // // // //           <div
// // // // // // // //             className="font-bold mb-2 uppercase tracking-wide"
// // // // // // // //             style={{ color: ac.header, fontSize: 11 }}
// // // // // // // //           >
// // // // // // // //             Benefits:
// // // // // // // //           </div>
// // // // // // // //           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
// // // // // // // //             {product.benefits.map((b, i) => (
// // // // // // // //               <li
// // // // // // // //                 key={i}
// // // // // // // //                 style={{
// // // // // // // //                   fontSize: 11.5,
// // // // // // // //                   color: "#1e2d3d",
// // // // // // // //                   lineHeight: 1.6,
// // // // // // // //                   paddingLeft: 14,
// // // // // // // //                   paddingBottom: 3,
// // // // // // // //                   position: "relative",
// // // // // // // //                   fontFamily: "'Segoe UI', system-ui, sans-serif",
// // // // // // // //                 }}
// // // // // // // //               >
// // // // // // // //                 <span
// // // // // // // //                   style={{
// // // // // // // //                     position: "absolute",
// // // // // // // //                     left: 1,
// // // // // // // //                     top: "0.15em",
// // // // // // // //                     color: ac.header,
// // // // // // // //                     fontSize: 13,
// // // // // // // //                     lineHeight: 1,
// // // // // // // //                   }}
// // // // // // // //                 >
// // // // // // // //                   •
// // // // // // // //                 </span>
// // // // // // // //                 {b}
// // // // // // // //               </li>
// // // // // // // //             ))}
// // // // // // // //           </ul>
// // // // // // // //         </div>

// // // // // // // //         {/* ── COL 3: Composition ── */}
// // // // // // // //         <div
// // // // // // // //           className="p-4"
// // // // // // // //           style={{
// // // // // // // //             width: 240,
// // // // // // // //             flexShrink: 0,
// // // // // // // //             borderRight: `1px solid ${ac.header}22`,
// // // // // // // //             background: "#fafeff",
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           <div
// // // // // // // //             className="font-bold mb-2 uppercase tracking-wide"
// // // // // // // //             style={{ color: ac.header, fontSize: 11 }}
// // // // // // // //           >
// // // // // // // //             Composition:
// // // // // // // //           </div>
// // // // // // // //           <p
// // // // // // // //             style={{
// // // // // // // //               fontSize: 11,
// // // // // // // //               color: "#2a3c50",
// // // // // // // //               lineHeight: 1.7,
// // // // // // // //               textAlign: "justify",
// // // // // // // //               hyphens: "auto",
// // // // // // // //               fontFamily: "'Segoe UI', system-ui, sans-serif",
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             {product.composition}
// // // // // // // //           </p>
// // // // // // // //         </div>

// // // // // // // //         {/* ── COL 4: Dosage + Presentation / Form / Storage ── */}
// // // // // // // //         <div
// // // // // // // //           className="p-4"
// // // // // // // //           style={{
// // // // // // // //             width: 200,
// // // // // // // //             flexShrink: 0,
// // // // // // // //             background: "#f7faff",
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           <div
// // // // // // // //             className="font-bold mb-1.5 uppercase tracking-wide"
// // // // // // // //             style={{ color: ac.header, fontSize: 11 }}
// // // // // // // //           >
// // // // // // // //             Dosage:
// // // // // // // //           </div>
// // // // // // // //           {product.dosage.map((d, i) => (
// // // // // // // //             <div key={i} style={{ marginBottom: 6 }}>
// // // // // // // //               <div
// // // // // // // //                 style={{
// // // // // // // //                   fontSize: 10,
// // // // // // // //                   fontWeight: 700,
// // // // // // // //                   color: ac.label,
// // // // // // // //                   lineHeight: 1.3,
// // // // // // // //                   marginBottom: 1,
// // // // // // // //                 }}
// // // // // // // //               >
// // // // // // // //                 {d.label}:
// // // // // // // //               </div>
// // // // // // // //               <div style={{ fontSize: 10.5, color: "#1a2b3c", lineHeight: 1.55 }}>
// // // // // // // //                 {d.dose}
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           ))}

// // // // // // // //           <div
// // // // // // // //             style={{
// // // // // // // //               borderTop: `1px solid ${ac.header}33`,
// // // // // // // //               marginTop: 10,
// // // // // // // //               paddingTop: 10,
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             <div
// // // // // // // //               className="font-bold uppercase"
// // // // // // // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // // // // // // //             >
// // // // // // // //               Presentation:
// // // // // // // //             </div>
// // // // // // // //             <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6, lineHeight: 1.4 }}>
// // // // // // // //               {product.presentation}
// // // // // // // //             </div>

// // // // // // // //             <div
// // // // // // // //               className="font-bold uppercase"
// // // // // // // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // // // // // // //             >
// // // // // // // //               Form:
// // // // // // // //             </div>
// // // // // // // //             <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6 }}>
// // // // // // // //               {product.form}
// // // // // // // //             </div>

// // // // // // // //             <div
// // // // // // // //               className="font-bold uppercase"
// // // // // // // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // // // // // // //             >
// // // // // // // //               Storage &amp; Caution:
// // // // // // // //             </div>
// // // // // // // //             <div style={{ fontSize: 11, color: "#1a2b3c", lineHeight: 1.5 }}>
// // // // // // // //               {product.storage}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // // ─── Main Page ────────────────────────────────────────────────────────────────
// // // // // // // // export default function CataloguePage() {
// // // // // // // //   const [activeCategory, setActiveCategory] = useState("All");
// // // // // // // //   const [search, setSearch] = useState("");
// // // // // // // //   const gridRef = useRef<HTMLDivElement>(null);

// // // // // // // //   const filtered = PRODUCTS.filter((p) => {
// // // // // // // //     const matchCat =
// // // // // // // //       activeCategory === "All" ||
// // // // // // // //       p.type === activeCategory ||
// // // // // // // //       (activeCategory === "Sanitizer" && p.badge === "Sanitizer");
// // // // // // // //     const q = search.toLowerCase();
// // // // // // // //     const matchSearch =
// // // // // // // //       !q ||
// // // // // // // //       p.name.toLowerCase().includes(q) ||
// // // // // // // //       p.category.toLowerCase().includes(q) ||
// // // // // // // //       p.composition.toLowerCase().includes(q) ||
// // // // // // // //       p.benefits.some((b) => b.toLowerCase().includes(q));
// // // // // // // //     return matchCat && matchSearch;
// // // // // // // //   });

// // // // // // // //   return (
// // // // // // // //     <div
// // // // // // // //       className="min-h-screen bg-[#eef3f9]"
// // // // // // // //       style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // // // // // // //     >
// // // // // // // //       {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
// // // // // // // //       <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2557] via-[#2A5DA8] to-[#0e7fc2]">
// // // // // // // //         <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border-[80px] border-white/5 translate-x-48 -translate-y-48 pointer-events-none" />
// // // // // // // //         <div className="absolute top-12 right-64 w-[300px] h-[300px] rounded-full border-[50px] border-white/5 pointer-events-none" />
// // // // // // // //         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border-[60px] border-white/5 -translate-x-32 translate-y-32 pointer-events-none" />
// // // // // // // //         <div
// // // // // // // //           className="absolute inset-0 opacity-5 pointer-events-none"
// // // // // // // //           style={{
// // // // // // // //             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,2 55,16 55,44 30,58 5,44 5,16' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
// // // // // // // //             backgroundSize: "60px 60px",
// // // // // // // //           }}
// // // // // // // //         />

// // // // // // // //         <div className="relative z-10 max-w-screen-2xl mx-auto px-8 py-14">
// // // // // // // //           <div className="flex items-start justify-between gap-8 flex-wrap">
// // // // // // // //             <div>
// // // // // // // //               <div className="flex items-center gap-3 mb-5">
// // // // // // // //                 <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center">
// // // // // // // //                   <span className="text-white font-black text-xl italic">i</span>
// // // // // // // //                 </div>
// // // // // // // //                 <div>
// // // // // // // //                   <p className="text-white/60 text-xs font-semibold uppercase tracking-widest">
// // // // // // // //                     Innovare Biopharma LLP
// // // // // // // //                   </p>
// // // // // // // //                   <p className="text-white/40 text-[11px]">Solution to Aquaculture Health</p>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //               <h1 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
// // // // // // // //                 Product
// // // // // // // //                 <br />
// // // // // // // //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
// // // // // // // //                   Catalogue
// // // // // // // //                 </span>
// // // // // // // //               </h1>
// // // // // // // //               <p className="mt-4 text-white/65 text-sm max-w-xl leading-relaxed">
// // // // // // // //                 Complete reference guide — compositions, benefits, dosages and certifications for all Innovare Biopharma aquaculture solutions.
// // // // // // // //               </p>
// // // // // // // //               <div className="flex flex-wrap gap-3 mt-6">
// // // // // // // //                 {[
// // // // // // // //                   { value: `${PRODUCTS.length}+`, label: "Products" },
// // // // // // // //                   { value: "ISO 9001:2015", label: "Certified" },
// // // // // // // //                   { value: "GMP", label: "Quality Practice" },
// // // // // // // //                   { value: "MSME", label: "Registered" },
// // // // // // // //                 ].map((s) => (
// // // // // // // //                   <div
// // // // // // // //                     key={s.label}
// // // // // // // //                     className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3"
// // // // // // // //                   >
// // // // // // // //                     <div className="text-white font-black text-lg leading-none">{s.value}</div>
// // // // // // // //                     <div className="text-white/55 text-[11px] font-semibold mt-0.5">{s.label}</div>
// // // // // // // //                   </div>
// // // // // // // //                 ))}
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* Search */}
// // // // // // // //             <div className="flex flex-col gap-2 mt-2">
// // // // // // // //               <div className="relative">
// // // // // // // //                 <input
// // // // // // // //                   type="text"
// // // // // // // //                   placeholder="Search products, ingredients, benefits..."
// // // // // // // //                   value={search}
// // // // // // // //                   onChange={(e) => setSearch(e.target.value)}
// // // // // // // //                   className="w-80 pl-10 pr-4 py-3 rounded-2xl border border-white/25 bg-white/10 text-white placeholder-white/40 text-sm outline-none focus:bg-white/20 focus:border-white/50 transition-all"
// // // // // // // //                 />
// // // // // // // //                 <svg
// // // // // // // //                   className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
// // // // // // // //                   width="16"
// // // // // // // //                   height="16"
// // // // // // // //                   viewBox="0 0 24 24"
// // // // // // // //                   fill="none"
// // // // // // // //                   stroke="currentColor"
// // // // // // // //                   strokeWidth="2"
// // // // // // // //                 >
// // // // // // // //                   <circle cx="11" cy="11" r="8" />
// // // // // // // //                   <path d="m21 21-4.35-4.35" />
// // // // // // // //                 </svg>
// // // // // // // //               </div>
// // // // // // // //               <p className="text-white/40 text-xs text-right">
// // // // // // // //                 Showing{" "}
// // // // // // // //                 <span className="text-white/80 font-bold">{filtered.length}</span> of{" "}
// // // // // // // //                 {PRODUCTS.length} products
// // // // // // // //               </p>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* ── Category Filter Tabs ── */}
// // // // // // // //           <div className="mt-8 flex flex-wrap gap-2">
// // // // // // // //             {CATEGORIES.map((cat) => {
// // // // // // // //               const active = activeCategory === cat;
// // // // // // // //               const count =
// // // // // // // //                 cat === "All"
// // // // // // // //                   ? PRODUCTS.length
// // // // // // // //                   : PRODUCTS.filter(
// // // // // // // //                       (p) =>
// // // // // // // //                         p.type === cat ||
// // // // // // // //                         (cat === "Sanitizer" && p.badge === "Sanitizer")
// // // // // // // //                     ).length;
// // // // // // // //               return (
// // // // // // // //                 <button
// // // // // // // //                   key={cat}
// // // // // // // //                   onClick={() => setActiveCategory(cat)}
// // // // // // // //                   className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200"
// // // // // // // //                   style={{
// // // // // // // //                     background: active ? "white" : "rgba(255,255,255,0.1)",
// // // // // // // //                     color: active ? "#0f2557" : "rgba(255,255,255,0.75)",
// // // // // // // //                     border: active ? "none" : "1px solid rgba(255,255,255,0.2)",
// // // // // // // //                     boxShadow: active ? "0 4px 14px rgba(0,0,0,0.15)" : "none",
// // // // // // // //                   }}
// // // // // // // //                 >
// // // // // // // //                   {cat}
// // // // // // // //                   <span
// // // // // // // //                     className="rounded-full px-1.5 py-0.5"
// // // // // // // //                     style={{
// // // // // // // //                       background: active ? "#2A5DA8" : "rgba(255,255,255,0.15)",
// // // // // // // //                       color: active ? "white" : "rgba(255,255,255,0.7)",
// // // // // // // //                       fontSize: 9,
// // // // // // // //                       fontWeight: 800,
// // // // // // // //                     }}
// // // // // // // //                   >
// // // // // // // //                     {count}
// // // // // // // //                   </span>
// // // // // // // //                 </button>
// // // // // // // //               );
// // // // // // // //             })}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* ══ PRODUCT LIST ════════════════════════════════════════════════════════ */}
// // // // // // // //       <div className="max-w-screen-2xl mx-auto px-6 py-8" ref={gridRef}>
// // // // // // // //         {filtered.length === 0 ? (
// // // // // // // //           <div className="flex flex-col items-center py-32 text-gray-400">
// // // // // // // //             <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
// // // // // // // //               <svg
// // // // // // // //                 width="32"
// // // // // // // //                 height="32"
// // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // //                 fill="none"
// // // // // // // //                 stroke="#9ca3af"
// // // // // // // //                 strokeWidth="1.5"
// // // // // // // //               >
// // // // // // // //                 <circle cx="11" cy="11" r="8" />
// // // // // // // //                 <path d="m21 21-4.35-4.35" />
// // // // // // // //               </svg>
// // // // // // // //             </div>
// // // // // // // //             <p className="font-semibold text-base text-gray-500">No products found</p>
// // // // // // // //             <button
// // // // // // // //               onClick={() => {
// // // // // // // //                 setSearch("");
// // // // // // // //                 setActiveCategory("All");
// // // // // // // //               }}
// // // // // // // //               className="mt-4 px-5 py-2 rounded-xl bg-[#2A5DA8] text-white text-sm font-semibold"
// // // // // // // //             >
// // // // // // // //               Clear Filters
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         ) : (
// // // // // // // //           <div className="flex flex-col gap-5">
// // // // // // // //             {filtered.map((p) => (
// // // // // // // //               <PDFCard key={p.id} product={p} />
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </div>

// // // // // // // //       <Footer />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // "use client";

// // // // // // // import Footer from "@/components/Footer";
// // // // // // // import Image from "next/image";
// // // // // // // import { useState, useRef } from "react";

// // // // // // // // ─── Types ────────────────────────────────────────────────────────────────────
// // // // // // // type Product = {
// // // // // // //   id: number;
// // // // // // //   name: string;
// // // // // // //   category: string;
// // // // // // //   type: string;
// // // // // // //   certificate: string;
// // // // // // //   composition: string;
// // // // // // //   benefits: string[];
// // // // // // //   dosage: { label: string; dose: string }[];
// // // // // // //   presentation: string;
// // // // // // //   form: string;
// // // // // // //   storage: string;
// // // // // // //   badge?: string;
// // // // // // //   tag?: string;
// // // // // // // };

// // // // // // // // ─── Data ─────────────────────────────────────────────────────────────────────
// // // // // // // const PRODUCTS: Product[] = [
// // // // // // //   {
// // // // // // //     id: 1,
// // // // // // //     name: "i.MINVARE PM",
// // // // // // //     category: "Pond Minerals",
// // // // // // //     type: "Minerals",
// // // // // // //     certificate: "CAA/JAN22/FA/03765",
// // // // // // //     composition:
// // // // // // //       "Innovative blend of essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Phosphorus, Copper, Sodium; Amino acids: DL-Methionine, L-Lysine; Probiotics: Bacillus subtilis 10B, Bacillus licheniformis 10B, Bacillus Coagulans 10B, Lactobacillus acidophilus 10B, Saccharomyces cervisiae 10B.",
// // // // // // //     benefits: [
// // // // // // //       "Improves F.C.R",
// // // // // // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // // // // // //       "Maintain pH of pond water",
// // // // // // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // // // // // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // // // // // //       "Helps for immune response and defence mechanism",
// // // // // // //       "Helps in uniform growth in shrimp and fish",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Shrimp/Prawn", dose: "10 kgs per Acre" },
// // // // // // //       { label: "Fish", dose: "3 kgs per Acre" },
// // // // // // //     ],
// // // // // // //     presentation: "10 Kg's Pouch",
// // // // // // //     form: "Powder",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 2,
// // // // // // //     name: "i.MINVARE AM",
// // // // // // //     category: "Pond Minerals",
// // // // // // //     type: "Minerals",
// // // // // // //     certificate: "",
// // // // // // //     composition:
// // // // // // //       "Innovative blend of essential Micro and Macro Minerals: Calcium, Dolomite, Sulphates containing Magnesium, Manganese, Zinc, Ferrous, Copper; Sodium Chlorides; Potassium; Phosphates: Di Calcium, Rock, Mono Sodium, Mono Potassium.",
// // // // // // //     benefits: [
// // // // // // //       "Improves F.C.R",
// // // // // // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // // // // // //       "Maintain pH of pond water",
// // // // // // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // // // // // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // // // // // //       "Helps for immune response and defence mechanism",
// // // // // // //       "Helps in uniform growth in shrimp and fish",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
// // // // // // //       { label: "Fish", dose: "5 Kgs per Acre" },
// // // // // // //     ],
// // // // // // //     presentation: "20 kg Bag",
// // // // // // //     form: "Powder",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 3,
// // // // // // //     name: "i.MINVARE WS",
// // // // // // //     category: "Pond Minerals",
// // // // // // //     type: "Minerals",
// // // // // // //     certificate: "CAA/APRIL 2025/MIN/07490",
// // // // // // //     composition:
// // // // // // //       "Innovative blend of essential Macro Minerals: Calcium, Dolomite, Zeolite; Sulphates: Magnesium, Manganese, Zinc, Ferrous, Copper; Chlorides: Potassium; Phosphates: Di Calcium, Rock, Sodium.",
// // // // // // //     benefits: [
// // // // // // //       "Improves F.C.R",
// // // // // // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // // // // // //       "Maintain pH of pond water",
// // // // // // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // // // // // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // // // // // //       "Helps for immune response and defence mechanism",
// // // // // // //       "Helps in uniform growth in shrimp and fish",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
// // // // // // //       { label: "Fish", dose: "5 Kgs per Acre" },
// // // // // // //     ],
// // // // // // //     presentation: "20 Kgs Bag",
// // // // // // //     form: "Powder",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 4,
// // // // // // //     name: "i.MINVARE FM",
// // // // // // //     category: "Feed Minerals",
// // // // // // //     type: "Minerals",
// // // // // // //     certificate: "CAA/JAN22/FA/03766",
// // // // // // //     composition:
// // // // // // //       "Essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Cobalt, Phosphorus, Copper, Selenium; Vitamins B2, B12, AD3, E; Amino acids: DL-Methionine, L-Lysine; Probiotics; Enzymes: Amylase, Protease, Cellulose, β.Galactose.",
// // // // // // //     benefits: [
// // // // // // //       "Improves F.C.R",
// // // // // // //       "Protects from shell and muscle related problems",
// // // // // // //       "Helps in moulting process and formation of exoskeleton in shrimp",
// // // // // // //       "Improves hormonal and enzymatic activities in shrimp",
// // // // // // //       "Protection from loose shell syndrome",
// // // // // // //       "Improves metabolism",
// // // // // // //       "Promotes fast body growth and gains more body weight",
// // // // // // //       "Improves effectively the digestive system",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Shrimp/Prawn", dose: "5–8 gm/kg feed" },
// // // // // // //       { label: "Fish", dose: "1–3 kgs per ton feed" },
// // // // // // //     ],
// // // // // // //     presentation: "1 Kg & 5 Kg's Pouch",
// // // // // // //     form: "Powder",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 5,
// // // // // // //     name: "i.MINVARE LiQ",
// // // // // // //     category: "Liquid Minerals",
// // // // // // //     type: "Minerals",
// // // // // // //     certificate: "",
// // // // // // //     composition:
// // // // // // //       "Innovative mixture of optimal liquid blend of balanced essential Macro and Trace element Aqua culture feed supplements minerals: Amino Protein 2g, Buffer phosphonic acid 2.5g, Calcium lactate 1.5g, Calcium phosphate monobasic 5.5g, Citric acid 2g, Di potassium phosphate 5.35g, Di sodium phosphate 3.25g, Magnesium citrate 750mg, Potassium chloride 1.5g, Sodium citrate 2.5g, Trace mineral complex (Glycinated) 2g, DM water Q.S.",
// // // // // // //     benefits: [
// // // // // // //       "Prevents and controls white muscle / soft shell syndrome and body cramping problem",
// // // // // // //       "Improves and enhances the development of phytoplankton and zooplankton",
// // // // // // //       "Regulates the moulting cycle and survival rate",
// // // // // // //       "Balances minerals deficiency in water, soil and shrimp",
// // // // // // //       "Improves metabolism, digestive system and FCR",
// // // // // // //       "Improves mineral absorption and pond water nutrition",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Pond Application", dose: "50 Ltrs/Acre (once every 10 days)" },
// // // // // // //       { label: "Feed Application", dose: "5–10 ml/kg feed (30 min before feeding)" },
// // // // // // //     ],
// // // // // // //     presentation: "1 Ltr Bottle",
// // // // // // //     form: "Liquid",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 6,
// // // // // // //     name: "i.PROPONDVARE",
// // // // // // //     category: "Water & Soil Probiotics",
// // // // // // //     type: "Probiotics",
// // // // // // //     certificate: "CAA/JAN22/PRO/03769",
// // // // // // //     composition:
// // // // // // //       "Bacillus subtilis, Bacillus megaterium, Bacillus licheniformis, Bacillus polymyxa, Bacillus pumilis, Saccharomyces cerevisiae, Cellulomanas cartae, p.pantotrophus, Nitrosomonas, Nitrobacter, Pseidomonas denitricans, l.plantarum, l.acidophilus, Rhodobacter sphaeroides, Thiobacillus thiooxidans & Thiobacillus ferroxidans.",
// // // // // // //     benefits: [
// // // // // // //       "Degradation of organic waste and maintains phytoplankton bloom",
// // // // // // //       "Improves water and soil quality and increases aquatic animal production",
// // // // // // //       "Stabilizes pond pH and maintains optimum alkalinity",
// // // // // // //       "Increases collagen synthesis and accelerates encrustation",
// // // // // // //       "Removes unwanted micro-organisms",
// // // // // // //       "Strengthens the immune system",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Initial booster (Shrimp/Prawn/Fish)", dose: "1.5 Kg/Ha" },
// // // // // // //       { label: "Maintenance", dose: "1 Kg/Ha every 7–10 days" },
// // // // // // //     ],
// // // // // // //     presentation: "1 kg Bottle",
// // // // // // //     form: "Powder",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 7,
// // // // // // //     name: "i.PROVARE GUT",
// // // // // // //     category: "Gut Probiotics",
// // // // // // //     type: "Probiotics",
// // // // // // //     certificate: "CAA/JAN22/PRO/03771",
// // // // // // //     composition:
// // // // // // //       "High strength GUT Probiotics: Lactobacillus plantarum, Lactobacillus acidophilus, Saccharomyces cervisiae; Enzymes: N Protease and Fungal phytase; Herbal extracts: Phyllanthus emblica Linn., Zingiber officinale and Trigonella foenum-graecum.",
// // // // // // //     benefits: [
// // // // // // //       "Improves digestion and feed intake while protecting GUT health",
// // // // // // //       "Prevents the occurrence of Mycosporidia infection",
// // // // // // //       "Prevents development of pathogenic bacteria and affects to maintain the GUT micro flora",
// // // // // // //       "Improves FCR and lower GUT pH",
// // // // // // //       "Support health, performance and growth of aquatic species",
// // // // // // //       "Prevents the onset of loose shell syndrome",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Shrimp", dose: "5–10 Grams per Kg feed" },
// // // // // // //       { label: "Fish", dose: "10–15 Grams per Kg feed" },
// // // // // // //     ],
// // // // // // //     presentation: "1 kg Bottle",
// // // // // // //     form: "Powder",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 8,
// // // // // // //     name: "i.VIBRIOVARE",
// // // // // // //     category: "Vibrio Control",
// // // // // // //     type: "Probiotics",
// // // // // // //     certificate: "CAA - Under Process",
// // // // // // //     composition:
// // // // // // //       "Bacillus magaterium (2.5B), Bacillus polymyxa (2.5B), Bacillus pumilus (2.5B), Paracoccus marginatus (0.5B), Paracoccus pantotropus (2B), Streptococcus thermophillus (2.5B), Bacillus amyloliquificans (1B), Bacillus mesentrices (0.5B), Enterococcus facium (2.5B), Lactobacillus rhamnosus (2B), Lactobacillus sporogenous (1B), Pediococcus Acidilactici (0.5B), Mannan Oligo Saccharide (MOS), Beta Glucins B 1-3, B 1-4, B 1-6, Alpha-Amylase (Banu) 250 IU, Lipase 250 IU, N protease 10000 IU, Phytase 200 IU, Xylanase 2000 IU, Maltodextrin (Malto), Starch Powder.",
// // // // // // //     benefits: [
// // // // // // //       "Highly prevents the Vibrio bacteria infections in Pond water",
// // // // // // //       "Controls the running mortality in Shrimp",
// // // // // // //       "Helps to maintain the microbial balance in the Shrimp intestine",
// // // // // // //       "Inhibit the communication of Vibrio Spp were presented",
// // // // // // //       "Increases the immune system and improves the FCR",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Before stocking", dose: "1 Kg of Tablets per acre; if Vibriosis: 250 Grams/Acre" },
// // // // // // //       { label: "Maintenance", dose: "500 Grams per Acre every 7–10 days for 15 days" },
// // // // // // //     ],
// // // // // // //     presentation: "500 g Bottle",
// // // // // // //     form: "Tablet",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 9,
// // // // // // //     name: "i.Bio'YEAST'vare",
// // // // // // //     category: "Yeast Probiotics",
// // // // // // //     type: "Probiotics",
// // // // // // //     certificate: "CAA/OCT22/PRO/04250",
// // // // // // //     composition:
// // // // // // //       "Unique combination of Saccharomyces cerevisiae, Bacillus Subtilis.",
// // // // // // //     benefits: [
// // // // // // //       "Stimulates feed digestion",
// // // // // // //       "Prevents and Controls Pathogenic Bacteria",
// // // // // // //       "Enhanced survival rate",
// // // // // // //       "Improves pond conditions with good plankton and beneficial bacterial density",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Feed supplement", dose: "2–3g/Kg feed" },
// // // // // // //       { label: "Fermentation", dose: "1 Kg along with 10 Kgs Rice Bran and 2 Kgs Jaggery" },
// // // // // // //       { label: "Pond application", dose: "1–2 Kg/Acre" },
// // // // // // //     ],
// // // // // // //     presentation: "1 kg Pouch",
// // // // // // //     form: "Powder",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 10,
// // // // // // //     name: "i.PSBVARE",
// // // // // // //     category: "Photosynthetic Bacteria",
// // // // // // //     type: "Probiotics",
// // // // // // //     certificate: "CAA/OCT22/PRO/04254",
// // // // // // //     composition: "Rhodopseudomonas palustris – 20 Billion CFU/gm.",
// // // // // // //     benefits: [
// // // // // // //       "Improves the quality of water in ponds",
// // // // // // //       "Helps decompose many toxic matters such as nitrous acid, organic materials, ammonia, pond sludge, and hydrogen sulphide",
// // // // // // //       "Decreasing diseases by restraining the pathogenic bacteria counts in the water",
// // // // // // //       "Removes black soil & H₂S formed mostly by anaerobic decomposition of organic matter",
// // // // // // //       "Improves the appetite of fish and shrimps and helps botanical plankton growth",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Initial regular use (Shrimp/Prawn/Fish)", dose: "250 Grms/Acre" },
// // // // // // //       { label: "Later stage (black soil & H₂S)", dose: "500 Grms/Acre" },
// // // // // // //     ],
// // // // // // //     presentation: "500 g Bottle",
// // // // // // //     form: "Powder",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 11,
// // // // // // //     name: "i.PROPONDVARE LiQ",
// // // // // // //     category: "Liquid Water & Soil Probiotics",
// // // // // // //     type: "Sanitizer",
// // // // // // //     certificate: "CAA - Under Process",
// // // // // // //     badge: "Sanitizer",
// // // // // // //     composition:
// // // // // // //       "Innovative mixture and optimal liquid multi-strain blend of 16 different essential formulation strains for soil & water probiotics: Bacillus amyloliquefaciens, Bacillus denitrificans, Bacillus licheniformis, Bacillus pumilus, Bacillus subtilis, Bafidiobacterium spp., Lactobacillus acidophilus, Lactobacillus plantarum, Lactobacillus rhamnosus, Nitrobacter spp., Paracoccus denitrificans, Paracoccus pentatrophus, Saccharomyces cerevisiae, Thiobacillus ferroxidans, Thiobacillus thioxidans, DM water Q.S.",
// // // // // // //     benefits: [
// // // // // // //       "Enhances gut health, improves feed conversation, growth & survival and boosts immunity",
// // // // // // //       "Strengthens gut micro-biota, improves digestion and enhances disease resistance",
// // // // // // //       "Converts toxic ammonia into nitrites (nitrification)",
// // // // // // //       "Reduces hydrogen sulfide and improves pond bottom conditions ecology and reduce sludge accumulation",
// // // // // // //       "Reduce disease outbreaks like White Spot Syndrome",
// // // // // // //       "Degrades organic waste, controls ammonia and suppresses Vibro spp",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Before stocking (Soil Application)", dose: "2 L/Acre (7 days before)" },
// // // // // // //       { label: "During stocking (Pond Application)", dose: "1 L/Acre (once in every 10 days)" },
// // // // // // //       { label: "DO DOC", dose: "1.5 L/Acre (once in every 10 days)" },
// // // // // // //     ],
// // // // // // //     presentation: "1 Ltr Bottle",
// // // // // // //     form: "Liquid",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 12,
// // // // // // //     name: "i.CEEVARE",
// // // // // // //     category: "Vitamin C",
// // // // // // //     type: "Vitamins & Nutrition",
// // // // // // //     certificate: "CAA/JAN22/FA/03767",
// // // // // // //     composition: "Ascorbic acid (coated Vitamin C) Coated.",
// // // // // // //     benefits: [
// // // // // // //       "Improves F.C.R and survival rate",
// // // // // // //       "Assists in shell formation and muscle development",
// // // // // // //       "Increases body weight by acceleration of growth",
// // // // // // //       "Accelerates growth and gives higher survival rate",
// // // // // // //       "Prevents vibrio loads attack on shrimps",
// // // // // // //       "Facilitates tissue repairs and wound healing",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Shrimp/Prawn (Normal Conditions)", dose: "2–3 g/1 kg feed at least twice a day" },
// // // // // // //       { label: "Under Stress condition", dose: "5g/1 kg feed or as directed by aqua consultant" },
// // // // // // //       { label: "Fish", dose: "2 g/1 kg of feed" },
// // // // // // //     ],
// // // // // // //     presentation: "1 Kg Bottle",
// // // // // // //     form: "Powder",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 13,
// // // // // // //     name: "i.PHYTOVARE",
// // // // // // //     category: "Phyto Extracts",
// // // // // // //     type: "Vitamins & Nutrition",
// // // // // // //     certificate: "USFDA & EU APPROVED",
// // // // // // //     badge: "Premium",
// // // // // // //     composition:
// // // // // // //       "Innovative blend of High Quality OREGANO (Oreganum Vulgare SSP. hirtum) essential plant extracts constituted of over 30 active ingredients of Carvacrol and Thymol etc.",
// // // // // // //     benefits: [
// // // // // // //       "Antimicrobial effects to maintain GUT health thereby reducing enteric diseases e.g. White Feces",
// // // // // // //       "Anti-oxidation to reduce stresses and protect liver",
// // // // // // //       "Increase growth rate and improve FCR",
// // // // // // //       "High-temperature (upto 120 Deg. C) stability and low disappearance rate in water",
// // // // // // //       "Increase survival rates and reduce disease occurrence",
// // // // // // //       "Enhances growth rate and feed efficiency improved reproductive success",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Prawn/Shrimp (Healthy condition)", dose: "10 Grams/Kg compound feed" },
// // // // // // //       { label: "Infected condition", dose: "20 Grams/Kg compound feed" },
// // // // // // //       { label: "Fish Feed", dose: "50 Grams/Ton compound feed" },
// // // // // // //     ],
// // // // // // //     presentation: "500g Bottle",
// // // // // // //     form: "Powder",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 14,
// // // // // // //     name: "i.LIVOVARE GEL",
// // // // // // //     category: "Liver Tonic",
// // // // // // //     type: "Vitamins & Nutrition",
// // // // // // //     certificate: "CAA/JAN22/FA/03770",
// // // // // // //     composition:
// // // // // // //       "Vitamins: Vitamin C, B2, E; Amino acids: DL-Methionine and L-Lysine, and Binding agents; Nano Minerals: Nano Magnesium, Nano Calcium, Nano Potassium, Nano Zinc, Nano Selenium, Nano Cobalt, Nano Ferrous, Nano Chromium, Nano Manganese, Nano Phosphorus, Nano Molybdenum; Probiotics: Saccharomyces spp and Lactobacillus spp.",
// // // // // // //     benefits: [
// // // // // // //       "Improves the functional efficiency of the liver and pancreas",
// // // // // // //       "Promotes digestibility and improves F.C.R",
// // // // // // //       "Increases nutrient utilisation and reduce fat deposition",
// // // // // // //       "Ensures Uniform growth and early harvesting",
// // // // // // //       "Increase mineral absorption",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Up to 10 weeks", dose: "10–15 ml per 1 kg feed" },
// // // // // // //       { label: "11 weeks and above", dose: "20–25 ml per 1 kg feed" },
// // // // // // //     ],
// // // // // // //     presentation: "20 Ltrs Barrel / 5 Ltrs Tin / 1 Ltr Bottle",
// // // // // // //     form: "Gel",
// // // // // // //     storage: "Keep in cool and dry place. *Shakewell before use.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 15,
// // // // // // //     name: "i.IMMUNOVARE",
// // // // // // //     category: "Immune Booster",
// // // // // // //     type: "Health & Immunity",
// // // // // // //     certificate: "CAA/APRIL 2025/FA/07489",
// // // // // // //     composition:
// // // // // // //       "Comprehensive blend of Macro Nutrients, Amino Acids, Vitamins, Minerals, Enzymes, Probiotics, Non-essential amino acids, Raw Materials and Vitamins as per detailed composition table.",
// // // // // // //     benefits: [
// // // // // // //       "Increase Nutrient Utilisation & Growth rate and reduce fat deposition",
// // // // // // //       "Improve resistance towards stress & diseases and also better resistance to environmental stressors in shrimp",
// // // // // // //       "Maintains correct Osmotic pressure and improves anti stress ability",
// // // // // // //       "Increase survival rates and reduce disease occurrence",
// // // // // // //       "Accelerate the detoxifying of deposited Toxins in Shrimp",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Prawn/Shrimp (at least one midday feeding)", dose: "3–5 Grams/Kg compound feed / 1–2 meal a day" },
// // // // // // //     ],
// // // // // // //     presentation: "500 g Bottle",
// // // // // // //     form: "Powder",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 16,
// // // // // // //     name: "i.HEPTOPANCVARE",
// // // // // // //     category: "Hepato-Pancreatic Support",
// // // // // // //     type: "Health & Immunity",
// // // // // // //     certificate: "CAA/ARPIL 2025/IMMU/07492",
// // // // // // //     composition:
// // // // // // //       "Detailed composition includes Amino Acids, Enzymes, Essential/Non-essential amino acids, Herbal Extracts, Raw Materials and Vitamins as per specification table.",
// // // // // // //     benefits: [
// // // // // // //       "Protect health of hepatopancreas and intestine, with bright and translucent body, clear white membrane, strong and health",
// // // // // // //       "Enhance growth performance, feed efficiency and product",
// // // // // // //       "Hepatopancreas (H.P) is the power house and vital organ in animal's survival and growth",
// // // // // // //       "Improve survival rate and immunity for reducing the risk of some vital disease outbreak",
// // // // // // //       "Relieve nutritional white feces, especially white feces caused by liver damage",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Prawn/Shrimp (preventive)", dose: "5 Grams/Kg compound feed with Gel / 1 meal a day (every 15 days for 5 days)" },
// // // // // // //       { label: "If problem persists", dose: "1 meal a day regularly" },
// // // // // // //     ],
// // // // // // //     presentation: "500 g Bottle",
// // // // // // //     form: "Powder",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 17,
// // // // // // //     name: "i.WFSVARE GEL",
// // // // // // //     category: "Feed Additive Gel",
// // // // // // //     type: "Health & Immunity",
// // // // // // //     certificate: "CAA/APRIL 2025/IMMU/07487",
// // // // // // //     composition:
// // // // // // //       "Active Probiotics, Vitamins blend, Amino Acids, Enzymes, Probiotics, Raw Materials, Vitamins as per detailed formulation (31 active ingredients).",
// // // // // // //     benefits: [
// // // // // // //       "Ensures faster growth and weight gain",
// // // // // // //       "Improves feed conversion ratio (FCR)",
// // // // // // //       "Improves proper shell formation",
// // // // // // //       "Provides necessary binding for the supplemented feed additives preventing any Wastage",
// // // // // // //       "Maintains high and uniform growth",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "During Culture", dose: "20 ml per 1 kg of Compound Feed or as advised by Consultant" },
// // // // // // //     ],
// // // // // // //     presentation: "5 Ltr Tin",
// // // // // // //     form: "Gel",
// // // // // // //     storage: "Keep in cool and dry place. *Shakewell before use.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 18,
// // // // // // //     name: "i.VIRAHEALVARE",
// // // // // // //     category: "Antiviral / Sanitizer",
// // // // // // //     type: "Sanitizer",
// // // // // // //     certificate: "CAA/OCT22/DIS/04270",
// // // // // // //     badge: "Sanitizer",
// // // // // // //     composition:
// // // // // // //       "Triple Salt - 50% w/v (Containing Triple Salt - 50% w/v); Potassium monopersulphate, Potassium hydrogen sulphate, Potassium sulfate, Sodium Chloride, tartrazine yellow.",
// // // // // // //     benefits: [
// // // // // // //       "Multi-component and Multi-purpose oxidizing system with major physical and chemical components of pathogens and restrict their propagation thru this disinfectant",
// // // // // // //       "Highly effective to control eradicate bacteria, fungi, moulds and all viral families effecting fish and shrimp especially WSSV",
// // // // // // //       "High level of surfactancy with acidic and oxidising power providing superior destruction of bio films. An effective bactericidal and can control the vibrio in water",
// // // // // // //       "Effectively control black and brown gill even under extreme stress conditions",
// // // // // // //       "Product can be used in the pond and can also be applied on the surface and equipments",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Prawn/Shrimp (Prevention of Diseases)", dose: "500 gm to 2 Kg/ha — Apply once every fortnight according to pond water quality/condition" },
// // // // // // //       { label: "Treating Diseases", dose: "Apply once every 3–5 days or as advised by Aquaculture Consultant" },
// // // // // // //     ],
// // // // // // //     presentation: "1 Kg Bottle",
// // // // // // //     form: "Powder",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 19,
// // // // // // //     name: "i.SANVARE TD",
// // // // // // //     category: "Broad Spectrum Disinfectant",
// // // // // // //     type: "Sanitizer",
// // // // // // //     certificate: "CAA - Under Process",
// // // // // // //     badge: "Sanitizer",
// // // // // // //     composition:
// // // // // // //       "Benzalkonium Chloride 50% (BKC) - 10%, Glutaraldehyde 50% (C5H8O2) - 10%, Malachite Green (Aniline Green) - 3%, Formaldehyde 37% - 40%, Copper Sulphate - 2%, Ammonium Chloride (NH4Cl) - 2%, Alphox 200 (9.5 moles) (Ethylene Oxide) - 3%, Stabilizers and Surfactants - QS.",
// // // // // // //     benefits: [
// // // // // // //       "Highly effective against fungal, bacterial and viral disease",
// // // // // // //       "Kills bacteria including Gram-Positive, Ligeonella, Protozoan, viruses, algae and fungal spores",
// // // // // // //       "Broad Spectrum activity against 32 harmful bacteria, 62 virus, 7 fungi and 11 spores with no resistance developed",
// // // // // // //       "Prevents mite infestation in aqua Culture",
// // // // // // //       "Fights against pond bottom bacteria and reduce bacterial load in the ponds",
// // // // // // //       "High residual activity even in presence of organic matter",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Upto 3 feet depth", dose: "0.5 to 1 Ltrs per Acre" },
// // // // // // //       { label: "Above 3 feet depth", dose: "1–1.5 Ltr per Acre per 3 feet" },
// // // // // // //     ],
// // // // // // //     presentation: "5 Ltr Tins",
// // // // // // //     form: "Liquid",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 20,
// // // // // // //     name: "i.SILVARE NANO",
// // // // // // //     category: "Nano Silver",
// // // // // // //     type: "Sanitizer",
// // // // // // //     certificate: "CAA - Under Process",
// // // // // // //     badge: "Sanitizer",
// // // // // // //     composition:
// // // // // // //       "PVP 10.8 g, Glycerol 500 ml, Silver nitrate 1.08 g, Enzymes, Amino acids, DM water Q.S.",
// // // // // // //     benefits: [
// // // // // // //       "Inhibit the growth of harmful bacteria attack like Vibrio spp. and break down the cell membranes of pathogenic bacteria",
// // // // // // //       "Helps to reduce microbial load, improving overall pond hygiene and reducing stress on shrimp",
// // // // // // //       "Boost the innate immune system of shrimp, increasing resistance to infections",
// // // // // // //       "Controls viral loads and emphasizes antibiotic-resistant bacteria in aquaculture",
// // // // // // //       "Clean body, gill and removes dirty materials from Shrimp body",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Soil Application (Before stocking)", dose: "1 L/Acre with 1 m depth of water (5 days before)" },
// // // // // // //       { label: "Pond Application (Post stocking)", dose: "1 L/Acre during Vibriosis in pond water or as advised by Aquaculture Technician" },
// // // // // // //     ],
// // // // // // //     presentation: "1 Ltr Bottle",
// // // // // // //     form: "Liquid",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 21,
// // // // // // //     name: "i.OXYVARE",
// // // // // // //     category: "Oxygen Granules",
// // // // // // //     type: "Oxygen Products",
// // // // // // //     certificate: "CAA/JAN22/CHEM/03768",
// // // // // // //     badge: "Emergency Use",
// // // // // // //     composition:
// // // // // // //       "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity).",
// // // // // // //     benefits: [
// // // // // // //       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
// // // // // // //       "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
// // // // // // //       "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
// // // // // // //       "Improves survival create during stocking in culture period and before harvesting",
// // // // // // //       "It helps in development of plankton to the required levels",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
// // // // // // //       { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
// // // // // // //     ],
// // // // // // //     presentation: "10 kgs Bucket",
// // // // // // //     form: "Granules",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 22,
// // // // // // //     name: "i.OXYVARE-T",
// // // // // // //     category: "Oxygen Tablets",
// // // // // // //     type: "Oxygen Products",
// // // // // // //     certificate: "CAA/APRIL 2025/CHEM/07488",
// // // // // // //     composition:
// // // // // // //       "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity) in a tablet form.",
// // // // // // //     benefits: [
// // // // // // //       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
// // // // // // //       "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
// // // // // // //       "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
// // // // // // //       "Improves survival create during stocking in culture period and before harvesting",
// // // // // // //       "It helps in development of plankton to the required levels",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
// // // // // // //       { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
// // // // // // //     ],
// // // // // // //     presentation: "10 Kgs Bucket",
// // // // // // //     form: "Tablet",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 23,
// // // // // // //     name: "i.GEOPROVARE G",
// // // // // // //     category: "Zeolite Granules (with Probiotics)",
// // // // // // //     type: "Zeolite Products",
// // // // // // //     certificate: "CAA - Not Required",
// // // // // // //     composition:
// // // // // // //       "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
// // // // // // //     benefits: [
// // // // // // //       "Highest Cation Exchange capacity & it controls obnoxious gases instantly",
// // // // // // //       "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
// // // // // // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // // // // // //       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
// // // // // // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // // // // // //       "Can maintain clean pond bottom",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Pond Preparation", dose: "50 Kgs/acre" },
// // // // // // //       { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
// // // // // // //     ],
// // // // // // //     presentation: "10 kg's Pouch",
// // // // // // //     form: "Granules",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 24,
// // // // // // //     name: "i.GEOPROVARE P",
// // // // // // //     category: "Zeolite Powder (with Probiotics)",
// // // // // // //     type: "Zeolite Products",
// // // // // // //     certificate: "CAA - Not Required",
// // // // // // //     composition:
// // // // // // //       "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
// // // // // // //     benefits: [
// // // // // // //       "Highest Cation Exchange capacity and it controls obnoxious gases instantly",
// // // // // // //       "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
// // // // // // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // // // // // //       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
// // // // // // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // // // // // //       "Can maintain clean pond bottom",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Pond Preparation", dose: "50 Kgs/acre" },
// // // // // // //       { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
// // // // // // //     ],
// // // // // // //     presentation: "10 kg's Pouch",
// // // // // // //     form: "Powder",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 25,
// // // // // // //     name: "i.GEOVARE P",
// // // // // // //     category: "Zeolite Powder Plain",
// // // // // // //     type: "Zeolite Products",
// // // // // // //     certificate: "CAA - Not Required",
// // // // // // //     composition:
// // // // // // //       "Silicon Dioxice (SiO2): 65–70%; Sodium: 1–3%; Iron (Fe): 1–2%; Magnesium: 0.5–1.0%; Calcium Oxide (Cal): 3–5%; Potassium: 0.5–1.0%; Aluminium: 20%; LOI: 5–8%.",
// // // // // // //     benefits: [
// // // // // // //       "Highest Cation Exchange capacity it controls obnoxious gases instantly",
// // // // // // //       "Quick and Efficient removal of obnoxious gases; Dissolved Oxygen level will be improved",
// // // // // // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // // // // // //       "Absorbs toxic gases like Ammonia (Nh3), Hydrogen Sulphide (H2S) and other liberated anions from pond water",
// // // // // // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // // // // // //       "Can maintain clean pond bottom",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Pond Preparation", dose: "50Kgs/acre" },
// // // // // // //       { label: "During Culture", dose: "Minimum 15Kgs/acre or as advised by aqua culture technician" },
// // // // // // //     ],
// // // // // // //     presentation: "25Kgs Bag",
// // // // // // //     form: "Powder",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 26,
// // // // // // //     name: "i.TOXIVARE",
// // // // // // //     category: "Yucca / Toxin Binder",
// // // // // // //     type: "Water Treatment",
// // // // // // //     certificate: "CAA/OCT22/FA/04255",
// // // // // // //     composition:
// // // // // // //       "Dry natural extract from the YUCCA schidigera plant, Ammonia binding agents and Probiotics.",
// // // // // // //     benefits: [
// // // // // // //       "Yucca is rich in glyco compounds that instantly binds with un-ionized ammonia thereby, reducing ammonia toxicity in the pond",
// // // // // // //       "Absorbs Nh₂, So₂, Ch₂, H₂S etc. of the pond bottom and cleans the toxic gases in the water",
// // // // // // //       "Reduced incidence of BOD and COD due to decrease of ammonia content in pond water",
// // // // // // //       "Deodorizes and purifies pond bottom wastage and water to improve the activity of the culture species",
// // // // // // //       "Increase the availability of dissolved oxygen in pond water",
// // // // // // //       "Reduce in gill irrigation",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Pond application", dose: "500 Gm per HA of 1 meter column" },
// // // // // // //       { label: "Feed application", dose: "2–5 Gm/Kg feed" },
// // // // // // //     ],
// // // // // // //     presentation: "1 Kg Pouch",
// // // // // // //     form: "Powder",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 27,
// // // // // // //     name: "i.ECOSOFTVARE",
// // // // // // //     category: "EDTA",
// // // // // // //     type: "Water Treatment",
// // // // // // //     certificate: "CAA - Not Required",
// // // // // // //     composition:
// // // // // // //       "Unique combination of Ethylene Diamine Tetra Acetic Acid (EDTA) formulated salt compounds.",
// // // // // // //     benefits: [
// // // // // // //       "Reduces the hardness levels to optimum lower levels there by stabilizing the alkalinity in the pond water completely prevents plankton crash",
// // // // // // //       "i.Ecosoftvare is used to improve water quality by reducing heavy metal concentrations",
// // // // // // //       "Stabilizes the total Ammonia levels there by minimise the free ammonia in the pond water",
// // // // // // //       "Helps to create toxic free environment",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "General application", dose: "Mix 1–2 kgs in 50 Ltrs of water and spray over 1 Acre evenly" },
// // // // // // //       { label: "Best practice", dose: "Apply in day light for better results or as advised by Aqua consultant" },
// // // // // // //     ],
// // // // // // //     presentation: "1 Kg / 5 kg Pouch",
// // // // // // //     form: "Powder",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 28,
// // // // // // //     name: "i.NITRONILVARE",
// // // // // // //     category: "Nitrite Control",
// // // // // // //     type: "Water Treatment",
// // // // // // //     certificate: "CAA/OCT22/PRO/04253",
// // // // // // //     composition:
// // // // // // //       "Nitrosomonas, Nitrobacter, Thiobacillus Thioxidans, Thiobacillus Ferroxidans, Thiobacillus Denitrificans, Paracoccus Denitrificans, N. Protease, Fungal Phytase, Fungal Alpha Amylase.",
// // // // // // //     benefits: [
// // // // // // //       "It reduces nitrites (No2) content in water to safe level",
// // // // // // //       "i.NITRONILVARE is powerful water treatment additive for aquaculture pond",
// // // // // // //       "It prevents formation of black soil due to decay of organic pollutant Improves water quality and enhances survival rate",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "Prawn/Shrimp", dose: "1 Kg/acre once in every 10 days" },
// // // // // // //       { label: "Fish", dose: "1 Kg/acre once in every one month or advised by aqua consultant" },
// // // // // // //     ],
// // // // // // //     presentation: "1 Kg Bottle",
// // // // // // //     form: "Powder",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 29,
// // // // // // //     name: "Calcium Chloride (Fused)",
// // // // // // //     category: "Chloride Salts",
// // // // // // //     type: "Minerals",
// // // // // // //     certificate: "CAA/OCT22/CHEM/04252",
// // // // // // //     composition: "Calcium Chloride Fused.",
// // // // // // //     benefits: [
// // // // // // //       "Calcium has an important role in the biological processes of fish & shrimp. It is necessary for bone formation, blood clotting and their metabolic reactions",
// // // // // // //       "Sodium and potassium are the most important salts in fish & shrimp blood and are critical for normal heat, nerve and muscle function",
// // // // // // //       "Fish & shrimp can absorb calcium directly from the water of food",
// // // // // // //       "The re-absorption of salt can reduce the energy available for growth",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "General application", dose: "5 to 10 Kgs per acre" },
// // // // // // //       { label: "Best Practice", dose: "For best results apply in the evening hours" },
// // // // // // //     ],
// // // // // // //     presentation: "25 Kgs Drum (5 Kg x 5 Packs)",
// // // // // // //     form: "Fused",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 30,
// // // // // // //     name: "Magnesium Chloride (Crystal)",
// // // // // // //     category: "Chloride Salts",
// // // // // // //     type: "Minerals",
// // // // // // //     certificate: "CAA/OCT22/CHEM/04251",
// // // // // // //     composition: "Magnesium Chloride 97% ± 2%.",
// // // // // // //     benefits: [
// // // // // // //       "Covers the Magnesium balance of pond water",
// // // // // // //       "Protects from soft shell syndrome",
// // // // // // //       "Regularizes the moult cycle",
// // // // // // //       "Increase survival and body weight rate",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "General application", dose: "5 to 10 Kgs per acre" },
// // // // // // //     ],
// // // // // // //     presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
// // // // // // //     form: "Crystal",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 31,
// // // // // // //     name: "Potassium Chloride (Crystal)",
// // // // // // //     category: "Chloride Salts",
// // // // // // //     type: "Minerals",
// // // // // // //     certificate: "CAA/OCT22/CHEM/04256",
// // // // // // //     composition: "Potassium Chloride 97% ± 2%.",
// // // // // // //     benefits: [
// // // // // // //       "Protects from soft shell syndrome",
// // // // // // //       "Increase survival and body weight rate",
// // // // // // //       "Regularizes the moult cycles",
// // // // // // //       "Covers the Potassium balance of pond water",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "General application", dose: "5 to 8 Kgs per acre" },
// // // // // // //     ],
// // // // // // //     presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
// // // // // // //     form: "Crystal",
// // // // // // //     storage: "Keep in cool and dry place.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 32,
// // // // // // //     name: "i.FERRICCHLORIVARE",
// // // // // // //     category: "Ferric Chloride",
// // // // // // //     type: "Minerals",
// // // // // // //     certificate: "CAA/ARPIL 2025/CHEM/07491",
// // // // // // //     composition: "Ferric Chloride Anhydrous – 98% ± 2%. Assay: Min 98.0%.",
// // // // // // //     benefits: [
// // // // // // //       "Highly effective at removing suspended solids, Organic matter & Heavy metals from the Pond water",
// // // // // // //       "It helps to prevent the overgrowth of Algae in Pond water",
// // // // // // //       "Use as Iron supplement",
// // // // // // //       "Improves Pond water bottom quality",
// // // // // // //       "It helps to precipitate and inactive inorganic phosphorous in Pond water",
// // // // // // //     ],
// // // // // // //     dosage: [
// // // // // // //       { label: "General", dose: "Consult our field staff or your aquaculture specialist for specific usage and directions" },
// // // // // // //     ],
// // // // // // //     presentation: "50 Kgs Drum (5Kg x 10 Packs)",
// // // // // // //     form: "Crystal",
// // // // // // //     storage: "Keep in cool and dry place. Special Instruction: No liability accepted for accidents arising while handling or use.",
// // // // // // //   },
// // // // // // // ];

// // // // // // // // ─── Category & Color Config ──────────────────────────────────────────────────
// // // // // // // const CATEGORIES = [
// // // // // // //   "All",
// // // // // // //   "Minerals",
// // // // // // //   "Probiotics",
// // // // // // //   "Vitamins & Nutrition",
// // // // // // //   "Health & Immunity",
// // // // // // //   "Oxygen Products",
// // // // // // //   "Water Treatment",
// // // // // // //   "Zeolite Products",
// // // // // // //   "Sanitizer",
// // // // // // // ];

// // // // // // // const TYPE_ACCENT: Record<string, { header: string; label: string; dot: string }> = {
// // // // // // //   "Minerals":            { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" },
// // // // // // //   "Probiotics":          { header: "#006644", label: "#008855", dot: "#006644" },
// // // // // // //   "Vitamins & Nutrition":{ header: "#cc6600", label: "#dd7700", dot: "#cc6600" },
// // // // // // //   "Health & Immunity":   { header: "#7700aa", label: "#9911cc", dot: "#7700aa" },
// // // // // // //   "Oxygen Products":     { header: "#003399", label: "#0044bb", dot: "#003399" },
// // // // // // //   "Water Treatment":     { header: "#005566", label: "#007788", dot: "#005566" },
// // // // // // //   "Zeolite Products":    { header: "#664400", label: "#886600", dot: "#664400" },
// // // // // // //   "Sanitizer":           { header: "#aa0000", label: "#cc1111", dot: "#aa0000" },
// // // // // // // };

// // // // // // // const getAccent = (type: string) =>
// // // // // // //   TYPE_ACCENT[type] || { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" };

// // // // // // // // ─── SVG Placeholder (shown when no image available) ─────────────────────────
// // // // // // // function ProductPlaceholder({ color }: { color: string }) {
// // // // // // //   return (
// // // // // // //     <svg
// // // // // // //       width="56"
// // // // // // //       height="56"
// // // // // // //       viewBox="0 0 56 56"
// // // // // // //       fill="none"
// // // // // // //       xmlns="http://www.w3.org/2000/svg"
// // // // // // //       style={{ opacity: 0.22 }}
// // // // // // //     >
// // // // // // //       {/* Flask / bottle shape */}
// // // // // // //       <rect x="21" y="6" width="14" height="10" rx="2" fill={color} />
// // // // // // //       <path
// // // // // // //         d="M18 16h20l6 24a6 6 0 01-6 6H18a6 6 0 01-6-6l6-24z"
// // // // // // //         fill={color}
// // // // // // //       />
// // // // // // //       <ellipse cx="28" cy="34" rx="7" ry="5" fill="white" opacity="0.4" />
// // // // // // //       <rect x="24" y="8" width="3" height="8" rx="1" fill="white" opacity="0.5" />
// // // // // // //     </svg>
// // // // // // //   );
// // // // // // // }

// // // // // // // // ─── PDF-Style Product Card ───────────────────────────────────────────────────
// // // // // // // function PDFCard({ product }: { product: Product }) {
// // // // // // //   const ac = getAccent(product.type);
// // // // // // //   const [imgError, setImgError] = useState(false);

// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       className="w-full bg-white rounded-xl overflow-hidden"
// // // // // // //       style={{
// // // // // // //         border: `2px solid ${ac.header}33`,
// // // // // // //         boxShadow: "0 2px 16px rgba(0,50,120,0.08)",
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       {/* ── TOP HEADER ── */}
// // // // // // //       <div className="flex items-stretch" style={{ borderBottom: `2px solid ${ac.header}` }}>
// // // // // // //         {/* Blank spacer aligned with hex column */}
// // // // // // //         <div
// // // // // // //           style={{
// // // // // // //             width: 148,
// // // // // // //             flexShrink: 0,
// // // // // // //             background: "#f0f6ff",
// // // // // // //             borderRight: `1px solid ${ac.header}33`,
// // // // // // //           }}
// // // // // // //         />
// // // // // // //         {/* Category */}
// // // // // // //         <div className="flex items-center px-5 py-2 flex-1" style={{ background: "white" }}>
// // // // // // //           <span
// // // // // // //             className="font-black uppercase tracking-wide"
// // // // // // //             style={{ color: ac.header, fontSize: 14, letterSpacing: 1, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // // // // // //           >
// // // // // // //             {product.category}
// // // // // // //           </span>
// // // // // // //         </div>
// // // // // // //         {/* Certificate */}
// // // // // // //         {product.certificate && (
// // // // // // //           <div
// // // // // // //             className="flex items-center px-4 py-2"
// // // // // // //             style={{
// // // // // // //               background: "#fff8f0",
// // // // // // //               borderLeft: `1px solid ${ac.header}44`,
// // // // // // //               borderRight: `1px solid ${ac.header}44`,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <span
// // // // // // //               className="font-bold"
// // // // // // //               style={{ color: "#cc3300", fontSize: 11, fontFamily: "monospace", whiteSpace: "nowrap" }}
// // // // // // //             >
// // // // // // //               {product.certificate}
// // // // // // //             </span>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //         {/* Product name chip */}
// // // // // // //         <div
// // // // // // //           className="flex items-center px-5 py-2"
// // // // // // //           style={{ background: ac.header, minWidth: 180 }}
// // // // // // //         >
// // // // // // //           <span
// // // // // // //             className="font-black text-white tracking-wide"
// // // // // // //             style={{ fontSize: 15, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // // // // // //           >
// // // // // // //             <em style={{ opacity: 0.8, fontStyle: "italic" }}>i</em>
// // // // // // //             {product.name.replace(/^i[.\-']/i, "")}
// // // // // // //           </span>
// // // // // // //           {product.badge && (
// // // // // // //             <span
// // // // // // //               className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
// // // // // // //               style={{ background: "rgba(255,255,255,0.2)", color: "white", whiteSpace: "nowrap" }}
// // // // // // //             >
// // // // // // //               {product.badge}
// // // // // // //             </span>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* ── BODY ROW ── */}
// // // // // // //       <div className="flex" style={{ minHeight: 220 }}>

// // // // // // //         {/* ── COL 1: Hexagon with product image ── */}
// // // // // // //         <div
// // // // // // //           className="flex-none flex items-center justify-center"
// // // // // // //           style={{
// // // // // // //             width: 148,
// // // // // // //             background: `linear-gradient(160deg, ${ac.header}15 0%, ${ac.header}08 100%)`,
// // // // // // //             borderRight: `1px solid ${ac.header}22`,
// // // // // // //             padding: "20px 14px",
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           {/* Outer hex — colored border ring */}
// // // // // // //           <div
// // // // // // //             style={{
// // // // // // //               width: 110,
// // // // // // //               height: 120,
// // // // // // //               clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// // // // // // //               background: ac.header,
// // // // // // //               display: "flex",
// // // // // // //               alignItems: "center",
// // // // // // //               justifyContent: "center",
// // // // // // //               padding: 3,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             {/* Inner hex — clips image to hex shape */}
// // // // // // //             <div
// // // // // // //               style={{
// // // // // // //                 width: "100%",
// // // // // // //                 height: "100%",
// // // // // // //                 clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// // // // // // //                 background: "#EEF4FF",
// // // // // // //                 display: "flex",
// // // // // // //                 alignItems: "center",
// // // // // // //                 justifyContent: "center",
// // // // // // //                 overflow: "hidden",
// // // // // // //                 position: "relative",
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               {/* ── Actual product image ── */}
// // // // // // //               {!imgError ? (
// // // // // // //                 <Image
// // // // // // //                   src={`/products/${product.id}.webp`}
// // // // // // //                   alt={product.name}
// // // // // // //                   fill
// // // // // // //                   style={{ objectFit: "cover" }}
// // // // // // //                   onError={() => setImgError(true)}
// // // // // // //                 />
// // // // // // //               ) : (
// // // // // // //                 /* ── SVG placeholder when no image — NO text shown ── */
// // // // // // //                 <ProductPlaceholder color={ac.header} />
// // // // // // //               )}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* ── COL 2: Benefits ── */}
// // // // // // //         <div
// // // // // // //           className="flex-1 p-4"
// // // // // // //           style={{ borderRight: `1px solid ${ac.header}22`, background: "white", minWidth: 0 }}
// // // // // // //         >
// // // // // // //           <div
// // // // // // //             className="font-bold mb-2 uppercase tracking-wide"
// // // // // // //             style={{ color: ac.header, fontSize: 11 }}
// // // // // // //           >
// // // // // // //             Benefits:
// // // // // // //           </div>
// // // // // // //           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
// // // // // // //             {product.benefits.map((b, i) => (
// // // // // // //               <li
// // // // // // //                 key={i}
// // // // // // //                 style={{
// // // // // // //                   fontSize: 11.5,
// // // // // // //                   color: "#1e2d3d",
// // // // // // //                   lineHeight: 1.6,
// // // // // // //                   paddingLeft: 14,
// // // // // // //                   paddingBottom: 3,
// // // // // // //                   position: "relative",
// // // // // // //                   fontFamily: "'Segoe UI', system-ui, sans-serif",
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 <span
// // // // // // //                   style={{
// // // // // // //                     position: "absolute",
// // // // // // //                     left: 1,
// // // // // // //                     top: "0.15em",
// // // // // // //                     color: ac.header,
// // // // // // //                     fontSize: 13,
// // // // // // //                     lineHeight: 1,
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   •
// // // // // // //                 </span>
// // // // // // //                 {b}
// // // // // // //               </li>
// // // // // // //             ))}
// // // // // // //           </ul>
// // // // // // //         </div>

// // // // // // //         {/* ── COL 3: Composition ── */}
// // // // // // //         <div
// // // // // // //           className="p-4"
// // // // // // //           style={{
// // // // // // //             width: 240,
// // // // // // //             flexShrink: 0,
// // // // // // //             borderRight: `1px solid ${ac.header}22`,
// // // // // // //             background: "#fafeff",
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           <div
// // // // // // //             className="font-bold mb-2 uppercase tracking-wide"
// // // // // // //             style={{ color: ac.header, fontSize: 11 }}
// // // // // // //           >
// // // // // // //             Composition:
// // // // // // //           </div>
// // // // // // //           <p
// // // // // // //             style={{
// // // // // // //               fontSize: 11,
// // // // // // //               color: "#2a3c50",
// // // // // // //               lineHeight: 1.7,
// // // // // // //               textAlign: "justify",
// // // // // // //               hyphens: "auto",
// // // // // // //               fontFamily: "'Segoe UI', system-ui, sans-serif",
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             {product.composition}
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         {/* ── COL 4: Dosage + Presentation / Form / Storage ── */}
// // // // // // //         <div
// // // // // // //           className="p-4"
// // // // // // //           style={{
// // // // // // //             width: 200,
// // // // // // //             flexShrink: 0,
// // // // // // //             background: "#f7faff",
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           <div
// // // // // // //             className="font-bold mb-1.5 uppercase tracking-wide"
// // // // // // //             style={{ color: ac.header, fontSize: 11 }}
// // // // // // //           >
// // // // // // //             Dosage:
// // // // // // //           </div>
// // // // // // //           {product.dosage.map((d, i) => (
// // // // // // //             <div key={i} style={{ marginBottom: 6 }}>
// // // // // // //               <div
// // // // // // //                 style={{
// // // // // // //                   fontSize: 10,
// // // // // // //                   fontWeight: 700,
// // // // // // //                   color: ac.label,
// // // // // // //                   lineHeight: 1.3,
// // // // // // //                   marginBottom: 1,
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 {d.label}:
// // // // // // //               </div>
// // // // // // //               <div style={{ fontSize: 10.5, color: "#1a2b3c", lineHeight: 1.55 }}>
// // // // // // //                 {d.dose}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           ))}

// // // // // // //           <div
// // // // // // //             style={{
// // // // // // //               borderTop: `1px solid ${ac.header}33`,
// // // // // // //               marginTop: 10,
// // // // // // //               paddingTop: 10,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <div
// // // // // // //               className="font-bold uppercase"
// // // // // // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // // // // // //             >
// // // // // // //               Presentation:
// // // // // // //             </div>
// // // // // // //             <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6, lineHeight: 1.4 }}>
// // // // // // //               {product.presentation}
// // // // // // //             </div>

// // // // // // //             <div
// // // // // // //               className="font-bold uppercase"
// // // // // // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // // // // // //             >
// // // // // // //               Form:
// // // // // // //             </div>
// // // // // // //             <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6 }}>
// // // // // // //               {product.form}
// // // // // // //             </div>

// // // // // // //             <div
// // // // // // //               className="font-bold uppercase"
// // // // // // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // // // // // //             >
// // // // // // //               Storage &amp; Caution:
// // // // // // //             </div>
// // // // // // //             <div style={{ fontSize: 11, color: "#1a2b3c", lineHeight: 1.5 }}>
// // // // // // //               {product.storage}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // // ─── Main Page ────────────────────────────────────────────────────────────────
// // // // // // // export default function CataloguePage() {
// // // // // // //   const [activeCategory, setActiveCategory] = useState("All");
// // // // // // //   const [search, setSearch] = useState("");
// // // // // // //   const gridRef = useRef<HTMLDivElement>(null);

// // // // // // //   const filtered = PRODUCTS.filter((p) => {
// // // // // // //     const matchCat =
// // // // // // //       activeCategory === "All" ||
// // // // // // //       p.type === activeCategory ||
// // // // // // //       (activeCategory === "Sanitizer" && p.badge === "Sanitizer");
// // // // // // //     const q = search.toLowerCase();
// // // // // // //     const matchSearch =
// // // // // // //       !q ||
// // // // // // //       p.name.toLowerCase().includes(q) ||
// // // // // // //       p.category.toLowerCase().includes(q) ||
// // // // // // //       p.composition.toLowerCase().includes(q) ||
// // // // // // //       p.benefits.some((b) => b.toLowerCase().includes(q));
// // // // // // //     return matchCat && matchSearch;
// // // // // // //   });

// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       className="min-h-screen bg-[#eef3f9]"
// // // // // // //       style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // // // // // //     >
// // // // // // //       {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
// // // // // // //       <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2557] via-[#2A5DA8] to-[#0e7fc2]">
// // // // // // //         <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border-[80px] border-white/5 translate-x-48 -translate-y-48 pointer-events-none" />
// // // // // // //         <div className="absolute top-12 right-64 w-[300px] h-[300px] rounded-full border-[50px] border-white/5 pointer-events-none" />
// // // // // // //         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border-[60px] border-white/5 -translate-x-32 translate-y-32 pointer-events-none" />
// // // // // // //         <div
// // // // // // //           className="absolute inset-0 opacity-5 pointer-events-none"
// // // // // // //           style={{
// // // // // // //             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,2 55,16 55,44 30,58 5,44 5,16' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
// // // // // // //             backgroundSize: "60px 60px",
// // // // // // //           }}
// // // // // // //         />

// // // // // // //         <div className="relative z-10 max-w-screen-2xl mx-auto px-8 py-14">
// // // // // // //           <div className="flex items-start justify-between gap-8 flex-wrap">
// // // // // // //             <div>
// // // // // // //               {/* ── Logo / brand block — text aligned to left edge ── */}
// // // // // // //               <div className="flex items-center gap-3 mb-5">
// // // // // // //                 <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center flex-shrink-0">
// // // // // // //                   <span className="text-white font-black text-xl italic">i</span>
// // // // // // //                 </div>
// // // // // // //                 {/* items-start so both lines start at the same left edge */}
// // // // // // //                 <div className="flex flex-col items-start">
// // // // // // //                   <p className="text-white text-sm font-semibold leading-tight">
// // // // // // //                     Innovare Biopharma LLP
// // // // // // //                   </p>
// // // // // // //                   <p className="text-white/50 text-[11px] leading-tight">
// // // // // // //                     Solution to Aquaculture Health
// // // // // // //                   </p>
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               <h1 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
// // // // // // //                 Product
// // // // // // //                 <br />
// // // // // // //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
// // // // // // //                   Catalogue
// // // // // // //                 </span>
// // // // // // //               </h1>
// // // // // // //               <p className="mt-4 text-white/65 text-sm max-w-xl leading-relaxed">
// // // // // // //                 Complete reference guide — compositions, benefits, dosages and certifications for all Innovare Biopharma aquaculture solutions.
// // // // // // //               </p>
// // // // // // //               <div className="flex flex-wrap gap-3 mt-6">
// // // // // // //                 {[
// // // // // // //                   { value: `${PRODUCTS.length}+`, label: "Products" },
// // // // // // //                   { value: "ISO 9001:2015", label: "Certified" },
// // // // // // //                   { value: "GMP", label: "Quality Practice" },
// // // // // // //                   { value: "MSME", label: "Registered" },
// // // // // // //                 ].map((s) => (
// // // // // // //                   <div
// // // // // // //                     key={s.label}
// // // // // // //                     className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3"
// // // // // // //                   >
// // // // // // //                     <div className="text-white font-black text-lg leading-none">{s.value}</div>
// // // // // // //                     <div className="text-white/55 text-[11px] font-semibold mt-0.5">{s.label}</div>
// // // // // // //                   </div>
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* Search */}
// // // // // // //             <div className="flex flex-col gap-2 mt-2">
// // // // // // //               <div className="relative">
// // // // // // //                 <input
// // // // // // //                   type="text"
// // // // // // //                   placeholder="Search products, ingredients, benefits..."
// // // // // // //                   value={search}
// // // // // // //                   onChange={(e) => setSearch(e.target.value)}
// // // // // // //                   className="w-80 pl-10 pr-4 py-3 rounded-2xl border border-white/25 bg-white/10 text-white placeholder-white/40 text-sm outline-none focus:bg-white/20 focus:border-white/50 transition-all"
// // // // // // //                 />
// // // // // // //                 <svg
// // // // // // //                   className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
// // // // // // //                   width="16"
// // // // // // //                   height="16"
// // // // // // //                   viewBox="0 0 24 24"
// // // // // // //                   fill="none"
// // // // // // //                   stroke="currentColor"
// // // // // // //                   strokeWidth="2"
// // // // // // //                 >
// // // // // // //                   <circle cx="11" cy="11" r="8" />
// // // // // // //                   <path d="m21 21-4.35-4.35" />
// // // // // // //                 </svg>
// // // // // // //               </div>
// // // // // // //               <p className="text-white/40 text-xs text-right">
// // // // // // //                 Showing{" "}
// // // // // // //                 <span className="text-white/80 font-bold">{filtered.length}</span> of{" "}
// // // // // // //                 {PRODUCTS.length} products
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* ── Category Filter Tabs ── */}
// // // // // // //           <div className="mt-8 flex flex-wrap gap-2">
// // // // // // //             {CATEGORIES.map((cat) => {
// // // // // // //               const active = activeCategory === cat;
// // // // // // //               const count =
// // // // // // //                 cat === "All"
// // // // // // //                   ? PRODUCTS.length
// // // // // // //                   : PRODUCTS.filter(
// // // // // // //                       (p) =>
// // // // // // //                         p.type === cat ||
// // // // // // //                         (cat === "Sanitizer" && p.badge === "Sanitizer")
// // // // // // //                     ).length;
// // // // // // //               return (
// // // // // // //                 <button
// // // // // // //                   key={cat}
// // // // // // //                   onClick={() => setActiveCategory(cat)}
// // // // // // //                   className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200"
// // // // // // //                   style={{
// // // // // // //                     background: active ? "white" : "rgba(255,255,255,0.1)",
// // // // // // //                     color: active ? "#0f2557" : "rgba(255,255,255,0.75)",
// // // // // // //                     border: active ? "none" : "1px solid rgba(255,255,255,0.2)",
// // // // // // //                     boxShadow: active ? "0 4px 14px rgba(0,0,0,0.15)" : "none",
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   {cat}
// // // // // // //                   <span
// // // // // // //                     className="rounded-full px-1.5 py-0.5"
// // // // // // //                     style={{
// // // // // // //                       background: active ? "#2A5DA8" : "rgba(255,255,255,0.15)",
// // // // // // //                       color: active ? "white" : "rgba(255,255,255,0.7)",
// // // // // // //                       fontSize: 9,
// // // // // // //                       fontWeight: 800,
// // // // // // //                     }}
// // // // // // //                   >
// // // // // // //                     {count}
// // // // // // //                   </span>
// // // // // // //                 </button>
// // // // // // //               );
// // // // // // //             })}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* ══ PRODUCT LIST ════════════════════════════════════════════════════════ */}
// // // // // // //       <div className="max-w-screen-2xl mx-auto px-6 py-8" ref={gridRef}>
// // // // // // //         {filtered.length === 0 ? (
// // // // // // //           <div className="flex flex-col items-center py-32 text-gray-400">
// // // // // // //             <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
// // // // // // //               <svg
// // // // // // //                 width="32"
// // // // // // //                 height="32"
// // // // // // //                 viewBox="0 0 24 24"
// // // // // // //                 fill="none"
// // // // // // //                 stroke="#9ca3af"
// // // // // // //                 strokeWidth="1.5"
// // // // // // //               >
// // // // // // //                 <circle cx="11" cy="11" r="8" />
// // // // // // //                 <path d="m21 21-4.35-4.35" />
// // // // // // //               </svg>
// // // // // // //             </div>
// // // // // // //             <p className="font-semibold text-base text-gray-500">No products found</p>
// // // // // // //             <button
// // // // // // //               onClick={() => {
// // // // // // //                 setSearch("");
// // // // // // //                 setActiveCategory("All");
// // // // // // //               }}
// // // // // // //               className="mt-4 px-5 py-2 rounded-xl bg-[#2A5DA8] text-white text-sm font-semibold"
// // // // // // //             >
// // // // // // //               Clear Filters
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         ) : (
// // // // // // //           <div className="flex flex-col gap-5">
// // // // // // //             {filtered.map((p) => (
// // // // // // //               <PDFCard key={p.id} product={p} />
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>

// // // // // // //       <Footer />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // "use client";

// // // // // // import Footer from "@/components/Footer";
// // // // // // import Image from "next/image";
// // // // // // import { useState, useRef } from "react";

// // // // // // // ─── Types ────────────────────────────────────────────────────────────────────
// // // // // // type Product = {
// // // // // //   id: number;
// // // // // //   name: string;
// // // // // //   category: string;
// // // // // //   type: string;
// // // // // //   certificate: string;
// // // // // //   composition: string;
// // // // // //   benefits: string[];
// // // // // //   dosage: { label: string; dose: string }[];
// // // // // //   presentation: string;
// // // // // //   form: string;
// // // // // //   storage: string;
// // // // // //   badge?: string;
// // // // // //   tag?: string;
// // // // // // };

// // // // // // // ─── Data ─────────────────────────────────────────────────────────────────────
// // // // // // const PRODUCTS: Product[] = [
// // // // // //   {
// // // // // //     id: 1,
// // // // // //     name: "i.MINVARE PM",
// // // // // //     category: "Pond Minerals",
// // // // // //     type: "Minerals",
// // // // // //     certificate: "CAA/JAN22/FA/03765",
// // // // // //     composition:
// // // // // //       "Innovative blend of essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Phosphorus, Copper, Sodium; Amino acids: DL-Methionine, L-Lysine; Probiotics: Bacillus subtilis 10B, Bacillus licheniformis 10B, Bacillus Coagulans 10B, Lactobacillus acidophilus 10B, Saccharomyces cervisiae 10B.",
// // // // // //     benefits: [
// // // // // //       "Improves F.C.R",
// // // // // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // // // // //       "Maintain pH of pond water",
// // // // // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // // // // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // // // // //       "Helps for immune response and defence mechanism",
// // // // // //       "Helps in uniform growth in shrimp and fish",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Shrimp/Prawn", dose: "10 kgs per Acre" },
// // // // // //       { label: "Fish", dose: "3 kgs per Acre" },
// // // // // //     ],
// // // // // //     presentation: "10 Kg's Pouch",
// // // // // //     form: "Powder",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 2,
// // // // // //     name: "i.MINVARE AM",
// // // // // //     category: "Pond Minerals",
// // // // // //     type: "Minerals",
// // // // // //     certificate: "",
// // // // // //     composition:
// // // // // //       "Innovative blend of essential Micro and Macro Minerals: Calcium, Dolomite, Sulphates containing Magnesium, Manganese, Zinc, Ferrous, Copper; Sodium Chlorides; Potassium; Phosphates: Di Calcium, Rock, Mono Sodium, Mono Potassium.",
// // // // // //     benefits: [
// // // // // //       "Improves F.C.R",
// // // // // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // // // // //       "Maintain pH of pond water",
// // // // // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // // // // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // // // // //       "Helps for immune response and defence mechanism",
// // // // // //       "Helps in uniform growth in shrimp and fish",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
// // // // // //       { label: "Fish", dose: "5 Kgs per Acre" },
// // // // // //     ],
// // // // // //     presentation: "20 kg Bag",
// // // // // //     form: "Powder",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 3,
// // // // // //     name: "i.MINVARE WS",
// // // // // //     category: "Pond Minerals",
// // // // // //     type: "Minerals",
// // // // // //     certificate: "CAA/APRIL 2025/MIN/07490",
// // // // // //     composition:
// // // // // //       "Innovative blend of essential Macro Minerals: Calcium, Dolomite, Zeolite; Sulphates: Magnesium, Manganese, Zinc, Ferrous, Copper; Chlorides: Potassium; Phosphates: Di Calcium, Rock, Sodium.",
// // // // // //     benefits: [
// // // // // //       "Improves F.C.R",
// // // // // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // // // // //       "Maintain pH of pond water",
// // // // // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // // // // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // // // // //       "Helps for immune response and defence mechanism",
// // // // // //       "Helps in uniform growth in shrimp and fish",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
// // // // // //       { label: "Fish", dose: "5 Kgs per Acre" },
// // // // // //     ],
// // // // // //     presentation: "20 Kgs Bag",
// // // // // //     form: "Powder",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 4,
// // // // // //     name: "i.MINVARE FM",
// // // // // //     category: "Feed Minerals",
// // // // // //     type: "Minerals",
// // // // // //     certificate: "CAA/JAN22/FA/03766",
// // // // // //     composition:
// // // // // //       "Essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Cobalt, Phosphorus, Copper, Selenium; Vitamins B2, B12, AD3, E; Amino acids: DL-Methionine, L-Lysine; Probiotics; Enzymes: Amylase, Protease, Cellulose, β.Galactose.",
// // // // // //     benefits: [
// // // // // //       "Improves F.C.R",
// // // // // //       "Protects from shell and muscle related problems",
// // // // // //       "Helps in moulting process and formation of exoskeleton in shrimp",
// // // // // //       "Improves hormonal and enzymatic activities in shrimp",
// // // // // //       "Protection from loose shell syndrome",
// // // // // //       "Improves metabolism",
// // // // // //       "Promotes fast body growth and gains more body weight",
// // // // // //       "Improves effectively the digestive system",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Shrimp/Prawn", dose: "5–8 gm/kg feed" },
// // // // // //       { label: "Fish", dose: "1–3 kgs per ton feed" },
// // // // // //     ],
// // // // // //     presentation: "1 Kg & 5 Kg's Pouch",
// // // // // //     form: "Powder",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 5,
// // // // // //     name: "i.MINVARE LiQ",
// // // // // //     category: "Liquid Minerals",
// // // // // //     type: "Minerals",
// // // // // //     certificate: "",
// // // // // //     composition:
// // // // // //       "Innovative mixture of optimal liquid blend of balanced essential Macro and Trace element Aqua culture feed supplements minerals: Amino Protein 2g, Buffer phosphonic acid 2.5g, Calcium lactate 1.5g, Calcium phosphate monobasic 5.5g, Citric acid 2g, Di potassium phosphate 5.35g, Di sodium phosphate 3.25g, Magnesium citrate 750mg, Potassium chloride 1.5g, Sodium citrate 2.5g, Trace mineral complex (Glycinated) 2g, DM water Q.S.",
// // // // // //     benefits: [
// // // // // //       "Prevents and controls white muscle / soft shell syndrome and body cramping problem",
// // // // // //       "Improves and enhances the development of phytoplankton and zooplankton",
// // // // // //       "Regulates the moulting cycle and survival rate",
// // // // // //       "Balances minerals deficiency in water, soil and shrimp",
// // // // // //       "Improves metabolism, digestive system and FCR",
// // // // // //       "Improves mineral absorption and pond water nutrition",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Pond Application", dose: "50 Ltrs/Acre (once every 10 days)" },
// // // // // //       { label: "Feed Application", dose: "5–10 ml/kg feed (30 min before feeding)" },
// // // // // //     ],
// // // // // //     presentation: "1 Ltr Bottle",
// // // // // //     form: "Liquid",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 6,
// // // // // //     name: "i.PROPONDVARE",
// // // // // //     category: "Water & Soil Probiotics",
// // // // // //     type: "Probiotics",
// // // // // //     certificate: "CAA/JAN22/PRO/03769",
// // // // // //     composition:
// // // // // //       "Bacillus subtilis, Bacillus megaterium, Bacillus licheniformis, Bacillus polymyxa, Bacillus pumilis, Saccharomyces cerevisiae, Cellulomanas cartae, p.pantotrophus, Nitrosomonas, Nitrobacter, Pseidomonas denitricans, l.plantarum, l.acidophilus, Rhodobacter sphaeroides, Thiobacillus thiooxidans & Thiobacillus ferroxidans.",
// // // // // //     benefits: [
// // // // // //       "Degradation of organic waste and maintains phytoplankton bloom",
// // // // // //       "Improves water and soil quality and increases aquatic animal production",
// // // // // //       "Stabilizes pond pH and maintains optimum alkalinity",
// // // // // //       "Increases collagen synthesis and accelerates encrustation",
// // // // // //       "Removes unwanted micro-organisms",
// // // // // //       "Strengthens the immune system",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Initial booster (Shrimp/Prawn/Fish)", dose: "1.5 Kg/Ha" },
// // // // // //       { label: "Maintenance", dose: "1 Kg/Ha every 7–10 days" },
// // // // // //     ],
// // // // // //     presentation: "1 kg Bottle",
// // // // // //     form: "Powder",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 7,
// // // // // //     name: "i.PROVARE GUT",
// // // // // //     category: "Gut Probiotics",
// // // // // //     type: "Probiotics",
// // // // // //     certificate: "CAA/JAN22/PRO/03771",
// // // // // //     composition:
// // // // // //       "High strength GUT Probiotics: Lactobacillus plantarum, Lactobacillus acidophilus, Saccharomyces cervisiae; Enzymes: N Protease and Fungal phytase; Herbal extracts: Phyllanthus emblica Linn., Zingiber officinale and Trigonella foenum-graecum.",
// // // // // //     benefits: [
// // // // // //       "Improves digestion and feed intake while protecting GUT health",
// // // // // //       "Prevents the occurrence of Mycosporidia infection",
// // // // // //       "Prevents development of pathogenic bacteria and affects to maintain the GUT micro flora",
// // // // // //       "Improves FCR and lower GUT pH",
// // // // // //       "Support health, performance and growth of aquatic species",
// // // // // //       "Prevents the onset of loose shell syndrome",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Shrimp", dose: "5–10 Grams per Kg feed" },
// // // // // //       { label: "Fish", dose: "10–15 Grams per Kg feed" },
// // // // // //     ],
// // // // // //     presentation: "1 kg Bottle",
// // // // // //     form: "Powder",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 8,
// // // // // //     name: "i.VIBRIOVARE",
// // // // // //     category: "Vibrio Control",
// // // // // //     type: "Probiotics",
// // // // // //     certificate: "CAA - Under Process",
// // // // // //     composition:
// // // // // //       "Bacillus magaterium (2.5B), Bacillus polymyxa (2.5B), Bacillus pumilus (2.5B), Paracoccus marginatus (0.5B), Paracoccus pantotropus (2B), Streptococcus thermophillus (2.5B), Bacillus amyloliquificans (1B), Bacillus mesentrices (0.5B), Enterococcus facium (2.5B), Lactobacillus rhamnosus (2B), Lactobacillus sporogenous (1B), Pediococcus Acidilactici (0.5B), Mannan Oligo Saccharide (MOS), Beta Glucins B 1-3, B 1-4, B 1-6, Alpha-Amylase (Banu) 250 IU, Lipase 250 IU, N protease 10000 IU, Phytase 200 IU, Xylanase 2000 IU, Maltodextrin (Malto), Starch Powder.",
// // // // // //     benefits: [
// // // // // //       "Highly prevents the Vibrio bacteria infections in Pond water",
// // // // // //       "Controls the running mortality in Shrimp",
// // // // // //       "Helps to maintain the microbial balance in the Shrimp intestine",
// // // // // //       "Inhibit the communication of Vibrio Spp were presented",
// // // // // //       "Increases the immune system and improves the FCR",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Before stocking", dose: "1 Kg of Tablets per acre; if Vibriosis: 250 Grams/Acre" },
// // // // // //       { label: "Maintenance", dose: "500 Grams per Acre every 7–10 days for 15 days" },
// // // // // //     ],
// // // // // //     presentation: "500 g Bottle",
// // // // // //     form: "Tablet",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 9,
// // // // // //     name: "i.Bio'YEAST'vare",
// // // // // //     category: "Yeast Probiotics",
// // // // // //     type: "Probiotics",
// // // // // //     certificate: "CAA/OCT22/PRO/04250",
// // // // // //     composition:
// // // // // //       "Unique combination of Saccharomyces cerevisiae, Bacillus Subtilis.",
// // // // // //     benefits: [
// // // // // //       "Stimulates feed digestion",
// // // // // //       "Prevents and Controls Pathogenic Bacteria",
// // // // // //       "Enhanced survival rate",
// // // // // //       "Improves pond conditions with good plankton and beneficial bacterial density",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Feed supplement", dose: "2–3g/Kg feed" },
// // // // // //       { label: "Fermentation", dose: "1 Kg along with 10 Kgs Rice Bran and 2 Kgs Jaggery" },
// // // // // //       { label: "Pond application", dose: "1–2 Kg/Acre" },
// // // // // //     ],
// // // // // //     presentation: "1 kg Pouch",
// // // // // //     form: "Powder",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 10,
// // // // // //     name: "i.PSBVARE",
// // // // // //     category: "Photosynthetic Bacteria",
// // // // // //     type: "Probiotics",
// // // // // //     certificate: "CAA/OCT22/PRO/04254",
// // // // // //     composition: "Rhodopseudomonas palustris – 20 Billion CFU/gm.",
// // // // // //     benefits: [
// // // // // //       "Improves the quality of water in ponds",
// // // // // //       "Helps decompose many toxic matters such as nitrous acid, organic materials, ammonia, pond sludge, and hydrogen sulphide",
// // // // // //       "Decreasing diseases by restraining the pathogenic bacteria counts in the water",
// // // // // //       "Removes black soil & H₂S formed mostly by anaerobic decomposition of organic matter",
// // // // // //       "Improves the appetite of fish and shrimps and helps botanical plankton growth",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Initial regular use (Shrimp/Prawn/Fish)", dose: "250 Grms/Acre" },
// // // // // //       { label: "Later stage (black soil & H₂S)", dose: "500 Grms/Acre" },
// // // // // //     ],
// // // // // //     presentation: "500 g Bottle",
// // // // // //     form: "Powder",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 11,
// // // // // //     name: "i.PROPONDVARE LiQ",
// // // // // //     category: "Liquid Water & Soil Probiotics",
// // // // // //     type: "Sanitizer",
// // // // // //     certificate: "CAA - Under Process",
// // // // // //     badge: "Sanitizer",
// // // // // //     composition:
// // // // // //       "Innovative mixture and optimal liquid multi-strain blend of 16 different essential formulation strains for soil & water probiotics: Bacillus amyloliquefaciens, Bacillus denitrificans, Bacillus licheniformis, Bacillus pumilus, Bacillus subtilis, Bafidiobacterium spp., Lactobacillus acidophilus, Lactobacillus plantarum, Lactobacillus rhamnosus, Nitrobacter spp., Paracoccus denitrificans, Paracoccus pentatrophus, Saccharomyces cerevisiae, Thiobacillus ferroxidans, Thiobacillus thioxidans, DM water Q.S.",
// // // // // //     benefits: [
// // // // // //       "Enhances gut health, improves feed conversation, growth & survival and boosts immunity",
// // // // // //       "Strengthens gut micro-biota, improves digestion and enhances disease resistance",
// // // // // //       "Converts toxic ammonia into nitrites (nitrification)",
// // // // // //       "Reduces hydrogen sulfide and improves pond bottom conditions ecology and reduce sludge accumulation",
// // // // // //       "Reduce disease outbreaks like White Spot Syndrome",
// // // // // //       "Degrades organic waste, controls ammonia and suppresses Vibro spp",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Before stocking (Soil Application)", dose: "2 L/Acre (7 days before)" },
// // // // // //       { label: "During stocking (Pond Application)", dose: "1 L/Acre (once in every 10 days)" },
// // // // // //       { label: "DO DOC", dose: "1.5 L/Acre (once in every 10 days)" },
// // // // // //     ],
// // // // // //     presentation: "1 Ltr Bottle",
// // // // // //     form: "Liquid",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 12,
// // // // // //     name: "i.CEEVARE",
// // // // // //     category: "Vitamin C",
// // // // // //     type: "Vitamins & Nutrition",
// // // // // //     certificate: "CAA/JAN22/FA/03767",
// // // // // //     composition: "Ascorbic acid (coated Vitamin C) Coated.",
// // // // // //     benefits: [
// // // // // //       "Improves F.C.R and survival rate",
// // // // // //       "Assists in shell formation and muscle development",
// // // // // //       "Increases body weight by acceleration of growth",
// // // // // //       "Accelerates growth and gives higher survival rate",
// // // // // //       "Prevents vibrio loads attack on shrimps",
// // // // // //       "Facilitates tissue repairs and wound healing",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Shrimp/Prawn (Normal Conditions)", dose: "2–3 g/1 kg feed at least twice a day" },
// // // // // //       { label: "Under Stress condition", dose: "5g/1 kg feed or as directed by aqua consultant" },
// // // // // //       { label: "Fish", dose: "2 g/1 kg of feed" },
// // // // // //     ],
// // // // // //     presentation: "1 Kg Bottle",
// // // // // //     form: "Powder",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 13,
// // // // // //     name: "i.PHYTOVARE",
// // // // // //     category: "Phyto Extracts",
// // // // // //     type: "Vitamins & Nutrition",
// // // // // //     certificate: "USFDA & EU APPROVED",
// // // // // //     badge: "Premium",
// // // // // //     composition:
// // // // // //       "Innovative blend of High Quality OREGANO (Oreganum Vulgare SSP. hirtum) essential plant extracts constituted of over 30 active ingredients of Carvacrol and Thymol etc.",
// // // // // //     benefits: [
// // // // // //       "Antimicrobial effects to maintain GUT health thereby reducing enteric diseases e.g. White Feces",
// // // // // //       "Anti-oxidation to reduce stresses and protect liver",
// // // // // //       "Increase growth rate and improve FCR",
// // // // // //       "High-temperature (upto 120 Deg. C) stability and low disappearance rate in water",
// // // // // //       "Increase survival rates and reduce disease occurrence",
// // // // // //       "Enhances growth rate and feed efficiency improved reproductive success",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Prawn/Shrimp (Healthy condition)", dose: "10 Grams/Kg compound feed" },
// // // // // //       { label: "Infected condition", dose: "20 Grams/Kg compound feed" },
// // // // // //       { label: "Fish Feed", dose: "50 Grams/Ton compound feed" },
// // // // // //     ],
// // // // // //     presentation: "500g Bottle",
// // // // // //     form: "Powder",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 14,
// // // // // //     name: "i.LIVOVARE GEL",
// // // // // //     category: "Liver Tonic",
// // // // // //     type: "Vitamins & Nutrition",
// // // // // //     certificate: "CAA/JAN22/FA/03770",
// // // // // //     composition:
// // // // // //       "Vitamins: Vitamin C, B2, E; Amino acids: DL-Methionine and L-Lysine, and Binding agents; Nano Minerals: Nano Magnesium, Nano Calcium, Nano Potassium, Nano Zinc, Nano Selenium, Nano Cobalt, Nano Ferrous, Nano Chromium, Nano Manganese, Nano Phosphorus, Nano Molybdenum; Probiotics: Saccharomyces spp and Lactobacillus spp.",
// // // // // //     benefits: [
// // // // // //       "Improves the functional efficiency of the liver and pancreas",
// // // // // //       "Promotes digestibility and improves F.C.R",
// // // // // //       "Increases nutrient utilisation and reduce fat deposition",
// // // // // //       "Ensures Uniform growth and early harvesting",
// // // // // //       "Increase mineral absorption",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Up to 10 weeks", dose: "10–15 ml per 1 kg feed" },
// // // // // //       { label: "11 weeks and above", dose: "20–25 ml per 1 kg feed" },
// // // // // //     ],
// // // // // //     presentation: "20 Ltrs Barrel / 5 Ltrs Tin / 1 Ltr Bottle",
// // // // // //     form: "Gel",
// // // // // //     storage: "Keep in cool and dry place. *Shakewell before use.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 15,
// // // // // //     name: "i.IMMUNOVARE",
// // // // // //     category: "Immune Booster",
// // // // // //     type: "Health & Immunity",
// // // // // //     certificate: "CAA/APRIL 2025/FA/07489",
// // // // // //     composition:
// // // // // //       "Comprehensive blend of Macro Nutrients, Amino Acids, Vitamins, Minerals, Enzymes, Probiotics, Non-essential amino acids, Raw Materials and Vitamins as per detailed composition table.",
// // // // // //     benefits: [
// // // // // //       "Increase Nutrient Utilisation & Growth rate and reduce fat deposition",
// // // // // //       "Improve resistance towards stress & diseases and also better resistance to environmental stressors in shrimp",
// // // // // //       "Maintains correct Osmotic pressure and improves anti stress ability",
// // // // // //       "Increase survival rates and reduce disease occurrence",
// // // // // //       "Accelerate the detoxifying of deposited Toxins in Shrimp",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Prawn/Shrimp (at least one midday feeding)", dose: "3–5 Grams/Kg compound feed / 1–2 meal a day" },
// // // // // //     ],
// // // // // //     presentation: "500 g Bottle",
// // // // // //     form: "Powder",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 16,
// // // // // //     name: "i.HEPTOPANCVARE",
// // // // // //     category: "Hepato-Pancreatic Support",
// // // // // //     type: "Health & Immunity",
// // // // // //     certificate: "CAA/ARPIL 2025/IMMU/07492",
// // // // // //     composition:
// // // // // //       "Detailed composition includes Amino Acids, Enzymes, Essential/Non-essential amino acids, Herbal Extracts, Raw Materials and Vitamins as per specification table.",
// // // // // //     benefits: [
// // // // // //       "Protect health of hepatopancreas and intestine, with bright and translucent body, clear white membrane, strong and health",
// // // // // //       "Enhance growth performance, feed efficiency and product",
// // // // // //       "Hepatopancreas (H.P) is the power house and vital organ in animal's survival and growth",
// // // // // //       "Improve survival rate and immunity for reducing the risk of some vital disease outbreak",
// // // // // //       "Relieve nutritional white feces, especially white feces caused by liver damage",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Prawn/Shrimp (preventive)", dose: "5 Grams/Kg compound feed with Gel / 1 meal a day (every 15 days for 5 days)" },
// // // // // //       { label: "If problem persists", dose: "1 meal a day regularly" },
// // // // // //     ],
// // // // // //     presentation: "500 g Bottle",
// // // // // //     form: "Powder",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 17,
// // // // // //     name: "i.WFSVARE GEL",
// // // // // //     category: "Feed Additive Gel",
// // // // // //     type: "Health & Immunity",
// // // // // //     certificate: "CAA/APRIL 2025/IMMU/07487",
// // // // // //     composition:
// // // // // //       "Active Probiotics, Vitamins blend, Amino Acids, Enzymes, Probiotics, Raw Materials, Vitamins as per detailed formulation (31 active ingredients).",
// // // // // //     benefits: [
// // // // // //       "Ensures faster growth and weight gain",
// // // // // //       "Improves feed conversion ratio (FCR)",
// // // // // //       "Improves proper shell formation",
// // // // // //       "Provides necessary binding for the supplemented feed additives preventing any Wastage",
// // // // // //       "Maintains high and uniform growth",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "During Culture", dose: "20 ml per 1 kg of Compound Feed or as advised by Consultant" },
// // // // // //     ],
// // // // // //     presentation: "5 Ltr Tin",
// // // // // //     form: "Gel",
// // // // // //     storage: "Keep in cool and dry place. *Shakewell before use.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 18,
// // // // // //     name: "i.VIRAHEALVARE",
// // // // // //     category: "Antiviral / Sanitizer",
// // // // // //     type: "Sanitizer",
// // // // // //     certificate: "CAA/OCT22/DIS/04270",
// // // // // //     badge: "Sanitizer",
// // // // // //     composition:
// // // // // //       "Triple Salt - 50% w/v (Containing Triple Salt - 50% w/v); Potassium monopersulphate, Potassium hydrogen sulphate, Potassium sulfate, Sodium Chloride, tartrazine yellow.",
// // // // // //     benefits: [
// // // // // //       "Multi-component and Multi-purpose oxidizing system with major physical and chemical components of pathogens and restrict their propagation thru this disinfectant",
// // // // // //       "Highly effective to control eradicate bacteria, fungi, moulds and all viral families effecting fish and shrimp especially WSSV",
// // // // // //       "High level of surfactancy with acidic and oxidising power providing superior destruction of bio films. An effective bactericidal and can control the vibrio in water",
// // // // // //       "Effectively control black and brown gill even under extreme stress conditions",
// // // // // //       "Product can be used in the pond and can also be applied on the surface and equipments",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Prawn/Shrimp (Prevention of Diseases)", dose: "500 gm to 2 Kg/ha — Apply once every fortnight according to pond water quality/condition" },
// // // // // //       { label: "Treating Diseases", dose: "Apply once every 3–5 days or as advised by Aquaculture Consultant" },
// // // // // //     ],
// // // // // //     presentation: "1 Kg Bottle",
// // // // // //     form: "Powder",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 19,
// // // // // //     name: "i.SANVARE TD",
// // // // // //     category: "Broad Spectrum Disinfectant",
// // // // // //     type: "Sanitizer",
// // // // // //     certificate: "CAA - Under Process",
// // // // // //     badge: "Sanitizer",
// // // // // //     composition:
// // // // // //       "Benzalkonium Chloride 50% (BKC) - 10%, Glutaraldehyde 50% (C5H8O2) - 10%, Malachite Green (Aniline Green) - 3%, Formaldehyde 37% - 40%, Copper Sulphate - 2%, Ammonium Chloride (NH4Cl) - 2%, Alphox 200 (9.5 moles) (Ethylene Oxide) - 3%, Stabilizers and Surfactants - QS.",
// // // // // //     benefits: [
// // // // // //       "Highly effective against fungal, bacterial and viral disease",
// // // // // //       "Kills bacteria including Gram-Positive, Ligeonella, Protozoan, viruses, algae and fungal spores",
// // // // // //       "Broad Spectrum activity against 32 harmful bacteria, 62 virus, 7 fungi and 11 spores with no resistance developed",
// // // // // //       "Prevents mite infestation in aqua Culture",
// // // // // //       "Fights against pond bottom bacteria and reduce bacterial load in the ponds",
// // // // // //       "High residual activity even in presence of organic matter",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Upto 3 feet depth", dose: "0.5 to 1 Ltrs per Acre" },
// // // // // //       { label: "Above 3 feet depth", dose: "1–1.5 Ltr per Acre per 3 feet" },
// // // // // //     ],
// // // // // //     presentation: "5 Ltr Tins",
// // // // // //     form: "Liquid",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 20,
// // // // // //     name: "i.SILVARE NANO",
// // // // // //     category: "Nano Silver",
// // // // // //     type: "Sanitizer",
// // // // // //     certificate: "CAA - Under Process",
// // // // // //     badge: "Sanitizer",
// // // // // //     composition:
// // // // // //       "PVP 10.8 g, Glycerol 500 ml, Silver nitrate 1.08 g, Enzymes, Amino acids, DM water Q.S.",
// // // // // //     benefits: [
// // // // // //       "Inhibit the growth of harmful bacteria attack like Vibrio spp. and break down the cell membranes of pathogenic bacteria",
// // // // // //       "Helps to reduce microbial load, improving overall pond hygiene and reducing stress on shrimp",
// // // // // //       "Boost the innate immune system of shrimp, increasing resistance to infections",
// // // // // //       "Controls viral loads and emphasizes antibiotic-resistant bacteria in aquaculture",
// // // // // //       "Clean body, gill and removes dirty materials from Shrimp body",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Soil Application (Before stocking)", dose: "1 L/Acre with 1 m depth of water (5 days before)" },
// // // // // //       { label: "Pond Application (Post stocking)", dose: "1 L/Acre during Vibriosis in pond water or as advised by Aquaculture Technician" },
// // // // // //     ],
// // // // // //     presentation: "1 Ltr Bottle",
// // // // // //     form: "Liquid",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 21,
// // // // // //     name: "i.OXYVARE",
// // // // // //     category: "Oxygen Granules",
// // // // // //     type: "Oxygen Products",
// // // // // //     certificate: "CAA/JAN22/CHEM/03768",
// // // // // //     badge: "Emergency Use",
// // // // // //     composition:
// // // // // //       "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity).",
// // // // // //     benefits: [
// // // // // //       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
// // // // // //       "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
// // // // // //       "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
// // // // // //       "Improves survival create during stocking in culture period and before harvesting",
// // // // // //       "It helps in development of plankton to the required levels",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
// // // // // //       { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
// // // // // //     ],
// // // // // //     presentation: "10 kgs Bucket",
// // // // // //     form: "Granules",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 22,
// // // // // //     name: "i.OXYVARE-T",
// // // // // //     category: "Oxygen Tablets",
// // // // // //     type: "Oxygen Products",
// // // // // //     certificate: "CAA/APRIL 2025/CHEM/07488",
// // // // // //     composition:
// // // // // //       "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity) in a tablet form.",
// // // // // //     benefits: [
// // // // // //       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
// // // // // //       "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
// // // // // //       "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
// // // // // //       "Improves survival create during stocking in culture period and before harvesting",
// // // // // //       "It helps in development of plankton to the required levels",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
// // // // // //       { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
// // // // // //     ],
// // // // // //     presentation: "10 Kgs Bucket",
// // // // // //     form: "Tablet",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 23,
// // // // // //     name: "i.GEOPROVARE G",
// // // // // //     category: "Zeolite Granules (with Probiotics)",
// // // // // //     type: "Zeolite Products",
// // // // // //     certificate: "CAA - Not Required",
// // // // // //     composition:
// // // // // //       "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
// // // // // //     benefits: [
// // // // // //       "Highest Cation Exchange capacity & it controls obnoxious gases instantly",
// // // // // //       "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
// // // // // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // // // // //       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
// // // // // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // // // // //       "Can maintain clean pond bottom",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Pond Preparation", dose: "50 Kgs/acre" },
// // // // // //       { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
// // // // // //     ],
// // // // // //     presentation: "10 kg's Pouch",
// // // // // //     form: "Granules",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 24,
// // // // // //     name: "i.GEOPROVARE P",
// // // // // //     category: "Zeolite Powder (with Probiotics)",
// // // // // //     type: "Zeolite Products",
// // // // // //     certificate: "CAA - Not Required",
// // // // // //     composition:
// // // // // //       "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
// // // // // //     benefits: [
// // // // // //       "Highest Cation Exchange capacity and it controls obnoxious gases instantly",
// // // // // //       "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
// // // // // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // // // // //       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
// // // // // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // // // // //       "Can maintain clean pond bottom",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Pond Preparation", dose: "50 Kgs/acre" },
// // // // // //       { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
// // // // // //     ],
// // // // // //     presentation: "10 kg's Pouch",
// // // // // //     form: "Powder",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 25,
// // // // // //     name: "i.GEOVARE P",
// // // // // //     category: "Zeolite Powder Plain",
// // // // // //     type: "Zeolite Products",
// // // // // //     certificate: "CAA - Not Required",
// // // // // //     composition:
// // // // // //       "Silicon Dioxice (SiO2): 65–70%; Sodium: 1–3%; Iron (Fe): 1–2%; Magnesium: 0.5–1.0%; Calcium Oxide (Cal): 3–5%; Potassium: 0.5–1.0%; Aluminium: 20%; LOI: 5–8%.",
// // // // // //     benefits: [
// // // // // //       "Highest Cation Exchange capacity it controls obnoxious gases instantly",
// // // // // //       "Quick and Efficient removal of obnoxious gases; Dissolved Oxygen level will be improved",
// // // // // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // // // // //       "Absorbs toxic gases like Ammonia (Nh3), Hydrogen Sulphide (H2S) and other liberated anions from pond water",
// // // // // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // // // // //       "Can maintain clean pond bottom",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Pond Preparation", dose: "50Kgs/acre" },
// // // // // //       { label: "During Culture", dose: "Minimum 15Kgs/acre or as advised by aqua culture technician" },
// // // // // //     ],
// // // // // //     presentation: "25Kgs Bag",
// // // // // //     form: "Powder",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 26,
// // // // // //     name: "i.TOXIVARE",
// // // // // //     category: "Yucca / Toxin Binder",
// // // // // //     type: "Water Treatment",
// // // // // //     certificate: "CAA/OCT22/FA/04255",
// // // // // //     composition:
// // // // // //       "Dry natural extract from the YUCCA schidigera plant, Ammonia binding agents and Probiotics.",
// // // // // //     benefits: [
// // // // // //       "Yucca is rich in glyco compounds that instantly binds with un-ionized ammonia thereby, reducing ammonia toxicity in the pond",
// // // // // //       "Absorbs Nh₂, So₂, Ch₂, H₂S etc. of the pond bottom and cleans the toxic gases in the water",
// // // // // //       "Reduced incidence of BOD and COD due to decrease of ammonia content in pond water",
// // // // // //       "Deodorizes and purifies pond bottom wastage and water to improve the activity of the culture species",
// // // // // //       "Increase the availability of dissolved oxygen in pond water",
// // // // // //       "Reduce in gill irrigation",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Pond application", dose: "500 Gm per HA of 1 meter column" },
// // // // // //       { label: "Feed application", dose: "2–5 Gm/Kg feed" },
// // // // // //     ],
// // // // // //     presentation: "1 Kg Pouch",
// // // // // //     form: "Powder",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 27,
// // // // // //     name: "i.ECOSOFTVARE",
// // // // // //     category: "EDTA",
// // // // // //     type: "Water Treatment",
// // // // // //     certificate: "CAA - Not Required",
// // // // // //     composition:
// // // // // //       "Unique combination of Ethylene Diamine Tetra Acetic Acid (EDTA) formulated salt compounds.",
// // // // // //     benefits: [
// // // // // //       "Reduces the hardness levels to optimum lower levels there by stabilizing the alkalinity in the pond water completely prevents plankton crash",
// // // // // //       "i.Ecosoftvare is used to improve water quality by reducing heavy metal concentrations",
// // // // // //       "Stabilizes the total Ammonia levels there by minimise the free ammonia in the pond water",
// // // // // //       "Helps to create toxic free environment",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "General application", dose: "Mix 1–2 kgs in 50 Ltrs of water and spray over 1 Acre evenly" },
// // // // // //       { label: "Best practice", dose: "Apply in day light for better results or as advised by Aqua consultant" },
// // // // // //     ],
// // // // // //     presentation: "1 Kg / 5 kg Pouch",
// // // // // //     form: "Powder",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 28,
// // // // // //     name: "i.NITRONILVARE",
// // // // // //     category: "Nitrite Control",
// // // // // //     type: "Water Treatment",
// // // // // //     certificate: "CAA/OCT22/PRO/04253",
// // // // // //     composition:
// // // // // //       "Nitrosomonas, Nitrobacter, Thiobacillus Thioxidans, Thiobacillus Ferroxidans, Thiobacillus Denitrificans, Paracoccus Denitrificans, N. Protease, Fungal Phytase, Fungal Alpha Amylase.",
// // // // // //     benefits: [
// // // // // //       "It reduces nitrites (No2) content in water to safe level",
// // // // // //       "i.NITRONILVARE is powerful water treatment additive for aquaculture pond",
// // // // // //       "It prevents formation of black soil due to decay of organic pollutant Improves water quality and enhances survival rate",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "Prawn/Shrimp", dose: "1 Kg/acre once in every 10 days" },
// // // // // //       { label: "Fish", dose: "1 Kg/acre once in every one month or advised by aqua consultant" },
// // // // // //     ],
// // // // // //     presentation: "1 Kg Bottle",
// // // // // //     form: "Powder",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 29,
// // // // // //     name: "Calcium Chloride (Fused)",
// // // // // //     category: "Chloride Salts",
// // // // // //     type: "Minerals",
// // // // // //     certificate: "CAA/OCT22/CHEM/04252",
// // // // // //     composition: "Calcium Chloride Fused.",
// // // // // //     benefits: [
// // // // // //       "Calcium has an important role in the biological processes of fish & shrimp. It is necessary for bone formation, blood clotting and their metabolic reactions",
// // // // // //       "Sodium and potassium are the most important salts in fish & shrimp blood and are critical for normal heat, nerve and muscle function",
// // // // // //       "Fish & shrimp can absorb calcium directly from the water of food",
// // // // // //       "The re-absorption of salt can reduce the energy available for growth",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "General application", dose: "5 to 10 Kgs per acre" },
// // // // // //       { label: "Best Practice", dose: "For best results apply in the evening hours" },
// // // // // //     ],
// // // // // //     presentation: "25 Kgs Drum (5 Kg x 5 Packs)",
// // // // // //     form: "Fused",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 30,
// // // // // //     name: "Magnesium Chloride (Crystal)",
// // // // // //     category: "Chloride Salts",
// // // // // //     type: "Minerals",
// // // // // //     certificate: "CAA/OCT22/CHEM/04251",
// // // // // //     composition: "Magnesium Chloride 97% ± 2%.",
// // // // // //     benefits: [
// // // // // //       "Covers the Magnesium balance of pond water",
// // // // // //       "Protects from soft shell syndrome",
// // // // // //       "Regularizes the moult cycle",
// // // // // //       "Increase survival and body weight rate",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "General application", dose: "5 to 10 Kgs per acre" },
// // // // // //     ],
// // // // // //     presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
// // // // // //     form: "Crystal",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 31,
// // // // // //     name: "Potassium Chloride (Crystal)",
// // // // // //     category: "Chloride Salts",
// // // // // //     type: "Minerals",
// // // // // //     certificate: "CAA/OCT22/CHEM/04256",
// // // // // //     composition: "Potassium Chloride 97% ± 2%.",
// // // // // //     benefits: [
// // // // // //       "Protects from soft shell syndrome",
// // // // // //       "Increase survival and body weight rate",
// // // // // //       "Regularizes the moult cycles",
// // // // // //       "Covers the Potassium balance of pond water",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "General application", dose: "5 to 8 Kgs per acre" },
// // // // // //     ],
// // // // // //     presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
// // // // // //     form: "Crystal",
// // // // // //     storage: "Keep in cool and dry place.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 32,
// // // // // //     name: "i.FERRICCHLORIVARE",
// // // // // //     category: "Ferric Chloride",
// // // // // //     type: "Minerals",
// // // // // //     certificate: "CAA/ARPIL 2025/CHEM/07491",
// // // // // //     composition: "Ferric Chloride Anhydrous – 98% ± 2%. Assay: Min 98.0%.",
// // // // // //     benefits: [
// // // // // //       "Highly effective at removing suspended solids, Organic matter & Heavy metals from the Pond water",
// // // // // //       "It helps to prevent the overgrowth of Algae in Pond water",
// // // // // //       "Use as Iron supplement",
// // // // // //       "Improves Pond water bottom quality",
// // // // // //       "It helps to precipitate and inactive inorganic phosphorous in Pond water",
// // // // // //     ],
// // // // // //     dosage: [
// // // // // //       { label: "General", dose: "Consult our field staff or your aquaculture specialist for specific usage and directions" },
// // // // // //     ],
// // // // // //     presentation: "50 Kgs Drum (5Kg x 10 Packs)",
// // // // // //     form: "Crystal",
// // // // // //     storage: "Keep in cool and dry place. Special Instruction: No liability accepted for accidents arising while handling or use.",
// // // // // //   },
// // // // // // ];

// // // // // // // ─── Product Image Map ────────────────────────────────────────────────────────
// // // // // // // Maps product ID → actual filename in /public/images/
// // // // // // const PRODUCT_IMAGES: Record<number, string> = {
// // // // // //   1:  "minvare.png",           // i.MINVARE PM
// // // // // //   2:  "minare am (1).png",     // i.MINVARE AM
// // // // // //   3:  "minvare ws.png",        // i.MINVARE WS
// // // // // //   4:  "minvare fm 2.png",      // i.MINVARE FM
// // // // // //   5:  "minvare_liq.png",       // i.MINVARE LiQ
// // // // // //   6:  "propondvare 2.png",     // i.PROPONDVARE
// // // // // //   7:  "provare gut 2.png",     // i.PROVARE GUT
// // // // // //   8:  "vibriovare 2.png",      // i.VIBRIOVARE
// // // // // //   9:  "bio yeast.png",         // i.Bio'YEAST'vare
// // // // // //   10: "psbvare 2.png",         // i.PSBVARE
// // // // // //   11: "propondvare_liq.png",   // i.PROPONDVARE LiQ
// // // // // //   12: "ceevare 2.png",         // i.CEEVARE
// // // // // //   13: "phytovare 2.png",       // i.PHYTOVARE
// // // // // //   14: "livovare gel (1).png",  // i.LIVOVARE GEL
// // // // // //   15: "immunovare 2.png",      // i.IMMUNOVARE
// // // // // //   16: "heptopancvare.png",     // i.HEPTOPANCVARE
// // // // // //   17: "wfsvare gel 2.png",     // i.WFSVARE GEL
// // // // // //   18: "virahealvare 2.png",    // i.VIRAHEALVARE
// // // // // //   19: "sanvare_td 2.png",      // i.SANVARE TD
// // // // // //   20: "silvare_nano.png",      // i.SILVARE NANO
// // // // // //   21: "oxyvar 2.png",          // i.OXYVARE
// // // // // //   22: "oxyvare-t (1).png",     // i.OXYVARE-T
// // // // // //   23: "geoprovare.jpeg",       // i.GEOPROVARE G
// // // // // //   24: "geoprovare_p 2.png",    // i.GEOPROVARE P
// // // // // //   25: "geovare_p.png",         // i.GEOVARE P
// // // // // //   26: "nitronilvare.png",      // i.TOXIVARE  (closest match)
// // // // // //   27: "nitronilvare.png",      // i.ECOSOFTVARE (reuse until dedicated image added)
// // // // // //   28: "nitronilvare.png",      // i.NITRONILVARE
// // // // // //   29: "calcium chloride.png",  // Calcium Chloride
// // // // // //   30: "min.png",               // Magnesium Chloride
// // // // // //   31: "min.png",               // Potassium Chloride
// // // // // //   32: "ferric chloride 2.png", // i.FERRICCHLORIVARE
// // // // // // };

// // // // // // // ─── Category & Color Config ──────────────────────────────────────────────────
// // // // // // const CATEGORIES = [
// // // // // //   "All",
// // // // // //   "Minerals",
// // // // // //   "Probiotics",
// // // // // //   "Vitamins & Nutrition",
// // // // // //   "Health & Immunity",
// // // // // //   "Oxygen Products",
// // // // // //   "Water Treatment",
// // // // // //   "Zeolite Products",
// // // // // //   "Sanitizer",
// // // // // // ];

// // // // // // const TYPE_ACCENT: Record<string, { header: string; label: string; dot: string }> = {
// // // // // //   "Minerals":            { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" },
// // // // // //   "Probiotics":          { header: "#006644", label: "#008855", dot: "#006644" },
// // // // // //   "Vitamins & Nutrition":{ header: "#cc6600", label: "#dd7700", dot: "#cc6600" },
// // // // // //   "Health & Immunity":   { header: "#7700aa", label: "#9911cc", dot: "#7700aa" },
// // // // // //   "Oxygen Products":     { header: "#003399", label: "#0044bb", dot: "#003399" },
// // // // // //   "Water Treatment":     { header: "#005566", label: "#007788", dot: "#005566" },
// // // // // //   "Zeolite Products":    { header: "#664400", label: "#886600", dot: "#664400" },
// // // // // //   "Sanitizer":           { header: "#aa0000", label: "#cc1111", dot: "#aa0000" },
// // // // // // };

// // // // // // const getAccent = (type: string) =>
// // // // // //   TYPE_ACCENT[type] || { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" };

// // // // // // // ─── SVG Placeholder (shown when no image available) ─────────────────────────
// // // // // // function ProductPlaceholder({ color }: { color: string }) {
// // // // // //   return (
// // // // // //     <svg
// // // // // //       width="56"
// // // // // //       height="56"
// // // // // //       viewBox="0 0 56 56"
// // // // // //       fill="none"
// // // // // //       xmlns="http://www.w3.org/2000/svg"
// // // // // //       style={{ opacity: 0.22 }}
// // // // // //     >
// // // // // //       {/* Flask / bottle shape */}
// // // // // //       <rect x="21" y="6" width="14" height="10" rx="2" fill={color} />
// // // // // //       <path
// // // // // //         d="M18 16h20l6 24a6 6 0 01-6 6H18a6 6 0 01-6-6l6-24z"
// // // // // //         fill={color}
// // // // // //       />
// // // // // //       <ellipse cx="28" cy="34" rx="7" ry="5" fill="white" opacity="0.4" />
// // // // // //       <rect x="24" y="8" width="3" height="8" rx="1" fill="white" opacity="0.5" />
// // // // // //     </svg>
// // // // // //   );
// // // // // // }

// // // // // // // ─── PDF-Style Product Card ───────────────────────────────────────────────────
// // // // // // function PDFCard({ product }: { product: Product }) {
// // // // // //   const ac = getAccent(product.type);
// // // // // //   const [imgError, setImgError] = useState(false);
// // // // // //   const imgSrc = PRODUCT_IMAGES[product.id]
// // // // // //     ? `/images/${PRODUCT_IMAGES[product.id]}`
// // // // // //     : null;

// // // // // //   return (
// // // // // //     <div
// // // // // //       className="w-full bg-white rounded-xl overflow-hidden"
// // // // // //       style={{
// // // // // //         border: `2px solid ${ac.header}33`,
// // // // // //         boxShadow: "0 2px 16px rgba(0,50,120,0.08)",
// // // // // //       }}
// // // // // //     >
// // // // // //       {/* ── TOP HEADER ── */}
// // // // // //       <div className="flex items-stretch" style={{ borderBottom: `2px solid ${ac.header}` }}>
// // // // // //         {/* Blank spacer aligned with hex column */}
// // // // // //         <div
// // // // // //           style={{
// // // // // //             width: 148,
// // // // // //             flexShrink: 0,
// // // // // //             background: "#f0f6ff",
// // // // // //             borderRight: `1px solid ${ac.header}33`,
// // // // // //           }}
// // // // // //         />
// // // // // //         {/* Category */}
// // // // // //         <div className="flex items-center px-5 py-2 flex-1" style={{ background: "white" }}>
// // // // // //           <span
// // // // // //             className="font-black uppercase tracking-wide"
// // // // // //             style={{ color: ac.header, fontSize: 14, letterSpacing: 1, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // // // // //           >
// // // // // //             {product.category}
// // // // // //           </span>
// // // // // //         </div>
// // // // // //         {/* Certificate */}
// // // // // //         {product.certificate && (
// // // // // //           <div
// // // // // //             className="flex items-center px-4 py-2"
// // // // // //             style={{
// // // // // //               background: "#fff8f0",
// // // // // //               borderLeft: `1px solid ${ac.header}44`,
// // // // // //               borderRight: `1px solid ${ac.header}44`,
// // // // // //             }}
// // // // // //           >
// // // // // //             <span
// // // // // //               className="font-bold"
// // // // // //               style={{ color: "#cc3300", fontSize: 11, fontFamily: "monospace", whiteSpace: "nowrap" }}
// // // // // //             >
// // // // // //               {product.certificate}
// // // // // //             </span>
// // // // // //           </div>
// // // // // //         )}
// // // // // //         {/* Product name chip */}
// // // // // //         <div
// // // // // //           className="flex items-center px-5 py-2"
// // // // // //           style={{ background: ac.header, minWidth: 180 }}
// // // // // //         >
// // // // // //           <span
// // // // // //             className="font-black text-white tracking-wide"
// // // // // //             style={{ fontSize: 15, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // // // // //           >
// // // // // //             <em style={{ opacity: 0.8, fontStyle: "italic" }}>i</em>
// // // // // //             {product.name.replace(/^i[.\-']/i, "")}
// // // // // //           </span>
// // // // // //           {product.badge && (
// // // // // //             <span
// // // // // //               className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
// // // // // //               style={{ background: "rgba(255,255,255,0.2)", color: "white", whiteSpace: "nowrap" }}
// // // // // //             >
// // // // // //               {product.badge}
// // // // // //             </span>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* ── BODY ROW ── */}
// // // // // //       <div className="flex" style={{ minHeight: 220 }}>

// // // // // //         {/* ── COL 1: Hexagon with product image ── */}
// // // // // //         <div
// // // // // //           className="flex-none flex items-center justify-center"
// // // // // //           style={{
// // // // // //             width: 148,
// // // // // //             background: `linear-gradient(160deg, ${ac.header}15 0%, ${ac.header}08 100%)`,
// // // // // //             borderRight: `1px solid ${ac.header}22`,
// // // // // //             padding: "20px 14px",
// // // // // //           }}
// // // // // //         >
// // // // // //           {/* Outer hex — colored border ring */}
// // // // // //           <div
// // // // // //             style={{
// // // // // //               width: 110,
// // // // // //               height: 120,
// // // // // //               clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// // // // // //               background: ac.header,
// // // // // //               display: "flex",
// // // // // //               alignItems: "center",
// // // // // //               justifyContent: "center",
// // // // // //               padding: 3,
// // // // // //             }}
// // // // // //           >
// // // // // //             {/* Inner hex — clips image to hex shape */}
// // // // // //             <div
// // // // // //               style={{
// // // // // //                 width: "100%",
// // // // // //                 height: "100%",
// // // // // //                 clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// // // // // //                 background: "#EEF4FF",
// // // // // //                 display: "flex",
// // // // // //                 alignItems: "center",
// // // // // //                 justifyContent: "center",
// // // // // //                 overflow: "hidden",
// // // // // //                 position: "relative",
// // // // // //               }}
// // // // // //             >
// // // // // //               {/* ── Actual product image ── */}
// // // // // //               {imgSrc && !imgError ? (
// // // // // //                 <Image
// // // // // //                   src={imgSrc}
// // // // // //                   alt={product.name}
// // // // // //                   fill
// // // // // //                   style={{ objectFit: "cover" }}
// // // // // //                   onError={() => setImgError(true)}
// // // // // //                 />
// // // // // //               ) : (
// // // // // //                 /* ── SVG placeholder when no image — NO text shown ── */
// // // // // //                 <ProductPlaceholder color={ac.header} />
// // // // // //               )}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* ── COL 2: Benefits ── */}
// // // // // //         <div
// // // // // //           className="flex-1 p-4"
// // // // // //           style={{ borderRight: `1px solid ${ac.header}22`, background: "white", minWidth: 0 }}
// // // // // //         >
// // // // // //           <div
// // // // // //             className="font-bold mb-2 uppercase tracking-wide"
// // // // // //             style={{ color: ac.header, fontSize: 11 }}
// // // // // //           >
// // // // // //             Benefits:
// // // // // //           </div>
// // // // // //           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
// // // // // //             {product.benefits.map((b, i) => (
// // // // // //               <li
// // // // // //                 key={i}
// // // // // //                 style={{
// // // // // //                   fontSize: 11.5,
// // // // // //                   color: "#1e2d3d",
// // // // // //                   lineHeight: 1.6,
// // // // // //                   paddingLeft: 14,
// // // // // //                   paddingBottom: 3,
// // // // // //                   position: "relative",
// // // // // //                   fontFamily: "'Segoe UI', system-ui, sans-serif",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 <span
// // // // // //                   style={{
// // // // // //                     position: "absolute",
// // // // // //                     left: 1,
// // // // // //                     top: "0.15em",
// // // // // //                     color: ac.header,
// // // // // //                     fontSize: 13,
// // // // // //                     lineHeight: 1,
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   •
// // // // // //                 </span>
// // // // // //                 {b}
// // // // // //               </li>
// // // // // //             ))}
// // // // // //           </ul>
// // // // // //         </div>

// // // // // //         {/* ── COL 3: Composition ── */}
// // // // // //         <div
// // // // // //           className="p-4"
// // // // // //           style={{
// // // // // //             width: 240,
// // // // // //             flexShrink: 0,
// // // // // //             borderRight: `1px solid ${ac.header}22`,
// // // // // //             background: "#fafeff",
// // // // // //           }}
// // // // // //         >
// // // // // //           <div
// // // // // //             className="font-bold mb-2 uppercase tracking-wide"
// // // // // //             style={{ color: ac.header, fontSize: 11 }}
// // // // // //           >
// // // // // //             Composition:
// // // // // //           </div>
// // // // // //           <p
// // // // // //             style={{
// // // // // //               fontSize: 11,
// // // // // //               color: "#2a3c50",
// // // // // //               lineHeight: 1.7,
// // // // // //               textAlign: "justify",
// // // // // //               hyphens: "auto",
// // // // // //               fontFamily: "'Segoe UI', system-ui, sans-serif",
// // // // // //             }}
// // // // // //           >
// // // // // //             {product.composition}
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* ── COL 4: Dosage + Presentation / Form / Storage ── */}
// // // // // //         <div
// // // // // //           className="p-4"
// // // // // //           style={{
// // // // // //             width: 200,
// // // // // //             flexShrink: 0,
// // // // // //             background: "#f7faff",
// // // // // //           }}
// // // // // //         >
// // // // // //           <div
// // // // // //             className="font-bold mb-1.5 uppercase tracking-wide"
// // // // // //             style={{ color: ac.header, fontSize: 11 }}
// // // // // //           >
// // // // // //             Dosage:
// // // // // //           </div>
// // // // // //           {product.dosage.map((d, i) => (
// // // // // //             <div key={i} style={{ marginBottom: 6 }}>
// // // // // //               <div
// // // // // //                 style={{
// // // // // //                   fontSize: 10,
// // // // // //                   fontWeight: 700,
// // // // // //                   color: ac.label,
// // // // // //                   lineHeight: 1.3,
// // // // // //                   marginBottom: 1,
// // // // // //                 }}
// // // // // //               >
// // // // // //                 {d.label}:
// // // // // //               </div>
// // // // // //               <div style={{ fontSize: 10.5, color: "#1a2b3c", lineHeight: 1.55 }}>
// // // // // //                 {d.dose}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))}

// // // // // //           <div
// // // // // //             style={{
// // // // // //               borderTop: `1px solid ${ac.header}33`,
// // // // // //               marginTop: 10,
// // // // // //               paddingTop: 10,
// // // // // //             }}
// // // // // //           >
// // // // // //             <div
// // // // // //               className="font-bold uppercase"
// // // // // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // // // // //             >
// // // // // //               Presentation:
// // // // // //             </div>
// // // // // //             <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6, lineHeight: 1.4 }}>
// // // // // //               {product.presentation}
// // // // // //             </div>

// // // // // //             <div
// // // // // //               className="font-bold uppercase"
// // // // // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // // // // //             >
// // // // // //               Form:
// // // // // //             </div>
// // // // // //             <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6 }}>
// // // // // //               {product.form}
// // // // // //             </div>

// // // // // //             <div
// // // // // //               className="font-bold uppercase"
// // // // // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // // // // //             >
// // // // // //               Storage &amp; Caution:
// // // // // //             </div>
// // // // // //             <div style={{ fontSize: 11, color: "#1a2b3c", lineHeight: 1.5 }}>
// // // // // //               {product.storage}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // // ─── Main Page ────────────────────────────────────────────────────────────────
// // // // // // export default function CataloguePage() {
// // // // // //   const [activeCategory, setActiveCategory] = useState("All");
// // // // // //   const [search, setSearch] = useState("");
// // // // // //   const gridRef = useRef<HTMLDivElement>(null);

// // // // // //   const filtered = PRODUCTS.filter((p) => {
// // // // // //     const matchCat =
// // // // // //       activeCategory === "All" ||
// // // // // //       p.type === activeCategory ||
// // // // // //       (activeCategory === "Sanitizer" && p.badge === "Sanitizer");
// // // // // //     const q = search.toLowerCase();
// // // // // //     const matchSearch =
// // // // // //       !q ||
// // // // // //       p.name.toLowerCase().includes(q) ||
// // // // // //       p.category.toLowerCase().includes(q) ||
// // // // // //       p.composition.toLowerCase().includes(q) ||
// // // // // //       p.benefits.some((b) => b.toLowerCase().includes(q));
// // // // // //     return matchCat && matchSearch;
// // // // // //   });

// // // // // //   return (
// // // // // //     <div
// // // // // //       className="min-h-screen bg-[#eef3f9]"
// // // // // //       style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // // // // //     >
// // // // // //       {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
// // // // // //       <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2557] via-[#2A5DA8] to-[#0e7fc2]">
// // // // // //         <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border-[80px] border-white/5 translate-x-48 -translate-y-48 pointer-events-none" />
// // // // // //         <div className="absolute top-12 right-64 w-[300px] h-[300px] rounded-full border-[50px] border-white/5 pointer-events-none" />
// // // // // //         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border-[60px] border-white/5 -translate-x-32 translate-y-32 pointer-events-none" />
// // // // // //         <div
// // // // // //           className="absolute inset-0 opacity-5 pointer-events-none"
// // // // // //           style={{
// // // // // //             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,2 55,16 55,44 30,58 5,44 5,16' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
// // // // // //             backgroundSize: "60px 60px",
// // // // // //           }}
// // // // // //         />

// // // // // //         <div className="relative z-10 max-w-screen-2xl mx-auto px-8 py-14">
// // // // // //           <div className="flex items-start justify-between gap-8 flex-wrap">
// // // // // //             <div>
// // // // // //               {/* ── Logo / brand block — text aligned to left edge ── */}
// // // // // //               <div className="flex items-center gap-3 mb-5">
// // // // // //                 <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center flex-shrink-0">
// // // // // //                   <span className="text-white font-black text-xl italic">i</span>
// // // // // //                 </div>
// // // // // //                 {/* items-start so both lines start at the same left edge */}
// // // // // //                 <div className="flex flex-col items-start">
// // // // // //                   <p className="text-white text-sm font-semibold leading-tight">
// // // // // //                     Innovare Biopharma LLP
// // // // // //                   </p>
// // // // // //                   <p className="text-white/50 text-[11px] leading-tight">
// // // // // //                     Solution to Aquaculture Health
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               <h1 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
// // // // // //                 Product
// // // // // //                 <br />
// // // // // //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
// // // // // //                   Catalogue
// // // // // //                 </span>
// // // // // //               </h1>
// // // // // //               <p className="mt-4 text-white/65 text-sm max-w-xl leading-relaxed">
// // // // // //                 Complete reference guide — compositions, benefits, dosages and certifications for all Innovare Biopharma aquaculture solutions.
// // // // // //               </p>
// // // // // //               <div className="flex flex-wrap gap-3 mt-6">
// // // // // //                 {[
// // // // // //                   { value: `${PRODUCTS.length}+`, label: "Products" },
// // // // // //                   { value: "ISO 9001:2015", label: "Certified" },
// // // // // //                   { value: "GMP", label: "Quality Practice" },
// // // // // //                   { value: "MSME", label: "Registered" },
// // // // // //                 ].map((s) => (
// // // // // //                   <div
// // // // // //                     key={s.label}
// // // // // //                     className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3"
// // // // // //                   >
// // // // // //                     <div className="text-white font-black text-lg leading-none">{s.value}</div>
// // // // // //                     <div className="text-white/55 text-[11px] font-semibold mt-0.5">{s.label}</div>
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* Search */}
// // // // // //             <div className="flex flex-col gap-2 mt-2">
// // // // // //               <div className="relative">
// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   placeholder="Search products, ingredients, benefits..."
// // // // // //                   value={search}
// // // // // //                   onChange={(e) => setSearch(e.target.value)}
// // // // // //                   className="w-80 pl-10 pr-4 py-3 rounded-2xl border border-white/25 bg-white/10 text-white placeholder-white/40 text-sm outline-none focus:bg-white/20 focus:border-white/50 transition-all"
// // // // // //                 />
// // // // // //                 <svg
// // // // // //                   className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
// // // // // //                   width="16"
// // // // // //                   height="16"
// // // // // //                   viewBox="0 0 24 24"
// // // // // //                   fill="none"
// // // // // //                   stroke="currentColor"
// // // // // //                   strokeWidth="2"
// // // // // //                 >
// // // // // //                   <circle cx="11" cy="11" r="8" />
// // // // // //                   <path d="m21 21-4.35-4.35" />
// // // // // //                 </svg>
// // // // // //               </div>
// // // // // //               <p className="text-white/40 text-xs text-right">
// // // // // //                 Showing{" "}
// // // // // //                 <span className="text-white/80 font-bold">{filtered.length}</span> of{" "}
// // // // // //                 {PRODUCTS.length} products
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* ── Category Filter Tabs ── */}
// // // // // //           <div className="mt-8 flex flex-wrap gap-2">
// // // // // //             {CATEGORIES.map((cat) => {
// // // // // //               const active = activeCategory === cat;
// // // // // //               const count =
// // // // // //                 cat === "All"
// // // // // //                   ? PRODUCTS.length
// // // // // //                   : PRODUCTS.filter(
// // // // // //                       (p) =>
// // // // // //                         p.type === cat ||
// // // // // //                         (cat === "Sanitizer" && p.badge === "Sanitizer")
// // // // // //                     ).length;
// // // // // //               return (
// // // // // //                 <button
// // // // // //                   key={cat}
// // // // // //                   onClick={() => setActiveCategory(cat)}
// // // // // //                   className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200"
// // // // // //                   style={{
// // // // // //                     background: active ? "white" : "rgba(255,255,255,0.1)",
// // // // // //                     color: active ? "#0f2557" : "rgba(255,255,255,0.75)",
// // // // // //                     border: active ? "none" : "1px solid rgba(255,255,255,0.2)",
// // // // // //                     boxShadow: active ? "0 4px 14px rgba(0,0,0,0.15)" : "none",
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   {cat}
// // // // // //                   <span
// // // // // //                     className="rounded-full px-1.5 py-0.5"
// // // // // //                     style={{
// // // // // //                       background: active ? "#2A5DA8" : "rgba(255,255,255,0.15)",
// // // // // //                       color: active ? "white" : "rgba(255,255,255,0.7)",
// // // // // //                       fontSize: 9,
// // // // // //                       fontWeight: 800,
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     {count}
// // // // // //                   </span>
// // // // // //                 </button>
// // // // // //               );
// // // // // //             })}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* ══ PRODUCT LIST ════════════════════════════════════════════════════════ */}
// // // // // //       <div className="max-w-screen-2xl mx-auto px-6 py-8" ref={gridRef}>
// // // // // //         {filtered.length === 0 ? (
// // // // // //           <div className="flex flex-col items-center py-32 text-gray-400">
// // // // // //             <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
// // // // // //               <svg
// // // // // //                 width="32"
// // // // // //                 height="32"
// // // // // //                 viewBox="0 0 24 24"
// // // // // //                 fill="none"
// // // // // //                 stroke="#9ca3af"
// // // // // //                 strokeWidth="1.5"
// // // // // //               >
// // // // // //                 <circle cx="11" cy="11" r="8" />
// // // // // //                 <path d="m21 21-4.35-4.35" />
// // // // // //               </svg>
// // // // // //             </div>
// // // // // //             <p className="font-semibold text-base text-gray-500">No products found</p>
// // // // // //             <button
// // // // // //               onClick={() => {
// // // // // //                 setSearch("");
// // // // // //                 setActiveCategory("All");
// // // // // //               }}
// // // // // //               className="mt-4 px-5 py-2 rounded-xl bg-[#2A5DA8] text-white text-sm font-semibold"
// // // // // //             >
// // // // // //               Clear Filters
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         ) : (
// // // // // //           <div className="flex flex-col gap-5">
// // // // // //             {filtered.map((p) => (
// // // // // //               <PDFCard key={p.id} product={p} />
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>

// // // // // //       <Footer />
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // "use client";

// // // // // import Footer from "@/components/Footer";
// // // // // import Image from "next/image";
// // // // // import { useState, useRef } from "react";

// // // // // // ─── Types ────────────────────────────────────────────────────────────────────
// // // // // type Product = {
// // // // //   id: number;
// // // // //   name: string;
// // // // //   category: string;
// // // // //   type: string;
// // // // //   certificate: string;
// // // // //   composition: string;
// // // // //   benefits: string[];
// // // // //   dosage: { label: string; dose: string }[];
// // // // //   presentation: string;
// // // // //   form: string;
// // // // //   storage: string;
// // // // //   badge?: string;
// // // // //   tag?: string;
// // // // // };

// // // // // // ─── Data ─────────────────────────────────────────────────────────────────────
// // // // // const PRODUCTS: Product[] = [
// // // // //   {
// // // // //     id: 1,
// // // // //     name: "i.MINVARE PM",
// // // // //     category: "Pond Minerals",
// // // // //     type: "Minerals",
// // // // //     certificate: "CAA/JAN22/FA/03765",
// // // // //     composition:
// // // // //       "Innovative blend of essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Phosphorus, Copper, Sodium; Amino acids: DL-Methionine, L-Lysine; Probiotics: Bacillus subtilis 10B, Bacillus licheniformis 10B, Bacillus Coagulans 10B, Lactobacillus acidophilus 10B, Saccharomyces cervisiae 10B.",
// // // // //     benefits: [
// // // // //       "Improves F.C.R",
// // // // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // // // //       "Maintain pH of pond water",
// // // // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // // // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // // // //       "Helps for immune response and defence mechanism",
// // // // //       "Helps in uniform growth in shrimp and fish",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Shrimp/Prawn", dose: "10 kgs per Acre" },
// // // // //       { label: "Fish", dose: "3 kgs per Acre" },
// // // // //     ],
// // // // //     presentation: "10 Kg's Pouch",
// // // // //     form: "Powder",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 2,
// // // // //     name: "i.MINVARE AM",
// // // // //     category: "Pond Minerals",
// // // // //     type: "Minerals",
// // // // //     certificate: "",
// // // // //     composition:
// // // // //       "Innovative blend of essential Micro and Macro Minerals: Calcium, Dolomite, Sulphates containing Magnesium, Manganese, Zinc, Ferrous, Copper; Sodium Chlorides; Potassium; Phosphates: Di Calcium, Rock, Mono Sodium, Mono Potassium.",
// // // // //     benefits: [
// // // // //       "Improves F.C.R",
// // // // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // // // //       "Maintain pH of pond water",
// // // // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // // // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // // // //       "Helps for immune response and defence mechanism",
// // // // //       "Helps in uniform growth in shrimp and fish",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
// // // // //       { label: "Fish", dose: "5 Kgs per Acre" },
// // // // //     ],
// // // // //     presentation: "20 kg Bag",
// // // // //     form: "Powder",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 3,
// // // // //     name: "i.MINVARE WS",
// // // // //     category: "Pond Minerals",
// // // // //     type: "Minerals",
// // // // //     certificate: "CAA/APRIL 2025/MIN/07490",
// // // // //     composition:
// // // // //       "Innovative blend of essential Macro Minerals: Calcium, Dolomite, Zeolite; Sulphates: Magnesium, Manganese, Zinc, Ferrous, Copper; Chlorides: Potassium; Phosphates: Di Calcium, Rock, Sodium.",
// // // // //     benefits: [
// // // // //       "Improves F.C.R",
// // // // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // // // //       "Maintain pH of pond water",
// // // // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // // // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // // // //       "Helps for immune response and defence mechanism",
// // // // //       "Helps in uniform growth in shrimp and fish",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
// // // // //       { label: "Fish", dose: "5 Kgs per Acre" },
// // // // //     ],
// // // // //     presentation: "20 Kgs Bag",
// // // // //     form: "Powder",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 4,
// // // // //     name: "i.MINVARE FM",
// // // // //     category: "Feed Minerals",
// // // // //     type: "Minerals",
// // // // //     certificate: "CAA/JAN22/FA/03766",
// // // // //     composition:
// // // // //       "Essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Cobalt, Phosphorus, Copper, Selenium; Vitamins B2, B12, AD3, E; Amino acids: DL-Methionine, L-Lysine; Probiotics; Enzymes: Amylase, Protease, Cellulose, β.Galactose.",
// // // // //     benefits: [
// // // // //       "Improves F.C.R",
// // // // //       "Protects from shell and muscle related problems",
// // // // //       "Helps in moulting process and formation of exoskeleton in shrimp",
// // // // //       "Improves hormonal and enzymatic activities in shrimp",
// // // // //       "Protection from loose shell syndrome",
// // // // //       "Improves metabolism",
// // // // //       "Promotes fast body growth and gains more body weight",
// // // // //       "Improves effectively the digestive system",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Shrimp/Prawn", dose: "5–8 gm/kg feed" },
// // // // //       { label: "Fish", dose: "1–3 kgs per ton feed" },
// // // // //     ],
// // // // //     presentation: "1 Kg & 5 Kg's Pouch",
// // // // //     form: "Powder",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 5,
// // // // //     name: "i.MINVARE LiQ",
// // // // //     category: "Liquid Minerals",
// // // // //     type: "Minerals",
// // // // //     certificate: "",
// // // // //     composition:
// // // // //       "Innovative mixture of optimal liquid blend of balanced essential Macro and Trace element Aqua culture feed supplements minerals: Amino Protein 2g, Buffer phosphonic acid 2.5g, Calcium lactate 1.5g, Calcium phosphate monobasic 5.5g, Citric acid 2g, Di potassium phosphate 5.35g, Di sodium phosphate 3.25g, Magnesium citrate 750mg, Potassium chloride 1.5g, Sodium citrate 2.5g, Trace mineral complex (Glycinated) 2g, DM water Q.S.",
// // // // //     benefits: [
// // // // //       "Prevents and controls white muscle / soft shell syndrome and body cramping problem",
// // // // //       "Improves and enhances the development of phytoplankton and zooplankton",
// // // // //       "Regulates the moulting cycle and survival rate",
// // // // //       "Balances minerals deficiency in water, soil and shrimp",
// // // // //       "Improves metabolism, digestive system and FCR",
// // // // //       "Improves mineral absorption and pond water nutrition",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Pond Application", dose: "50 Ltrs/Acre (once every 10 days)" },
// // // // //       { label: "Feed Application", dose: "5–10 ml/kg feed (30 min before feeding)" },
// // // // //     ],
// // // // //     presentation: "1 Ltr Bottle",
// // // // //     form: "Liquid",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 6,
// // // // //     name: "i.PROPONDVARE",
// // // // //     category: "Water & Soil Probiotics",
// // // // //     type: "Probiotics",
// // // // //     certificate: "CAA/JAN22/PRO/03769",
// // // // //     composition:
// // // // //       "Bacillus subtilis, Bacillus megaterium, Bacillus licheniformis, Bacillus polymyxa, Bacillus pumilis, Saccharomyces cerevisiae, Cellulomanas cartae, p.pantotrophus, Nitrosomonas, Nitrobacter, Pseidomonas denitricans, l.plantarum, l.acidophilus, Rhodobacter sphaeroides, Thiobacillus thiooxidans & Thiobacillus ferroxidans.",
// // // // //     benefits: [
// // // // //       "Degradation of organic waste and maintains phytoplankton bloom",
// // // // //       "Improves water and soil quality and increases aquatic animal production",
// // // // //       "Stabilizes pond pH and maintains optimum alkalinity",
// // // // //       "Increases collagen synthesis and accelerates encrustation",
// // // // //       "Removes unwanted micro-organisms",
// // // // //       "Strengthens the immune system",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Initial booster (Shrimp/Prawn/Fish)", dose: "1.5 Kg/Ha" },
// // // // //       { label: "Maintenance", dose: "1 Kg/Ha every 7–10 days" },
// // // // //     ],
// // // // //     presentation: "1 kg Bottle",
// // // // //     form: "Powder",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 7,
// // // // //     name: "i.PROVARE GUT",
// // // // //     category: "Gut Probiotics",
// // // // //     type: "Probiotics",
// // // // //     certificate: "CAA/JAN22/PRO/03771",
// // // // //     composition:
// // // // //       "High strength GUT Probiotics: Lactobacillus plantarum, Lactobacillus acidophilus, Saccharomyces cervisiae; Enzymes: N Protease and Fungal phytase; Herbal extracts: Phyllanthus emblica Linn., Zingiber officinale and Trigonella foenum-graecum.",
// // // // //     benefits: [
// // // // //       "Improves digestion and feed intake while protecting GUT health",
// // // // //       "Prevents the occurrence of Mycosporidia infection",
// // // // //       "Prevents development of pathogenic bacteria and affects to maintain the GUT micro flora",
// // // // //       "Improves FCR and lower GUT pH",
// // // // //       "Support health, performance and growth of aquatic species",
// // // // //       "Prevents the onset of loose shell syndrome",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Shrimp", dose: "5–10 Grams per Kg feed" },
// // // // //       { label: "Fish", dose: "10–15 Grams per Kg feed" },
// // // // //     ],
// // // // //     presentation: "1 kg Bottle",
// // // // //     form: "Powder",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 8,
// // // // //     name: "i.VIBRIOVARE",
// // // // //     category: "Vibrio Control",
// // // // //     type: "Probiotics",
// // // // //     certificate: "CAA - Under Process",
// // // // //     composition:
// // // // //       "Bacillus magaterium (2.5B), Bacillus polymyxa (2.5B), Bacillus pumilus (2.5B), Paracoccus marginatus (0.5B), Paracoccus pantotropus (2B), Streptococcus thermophillus (2.5B), Bacillus amyloliquificans (1B), Bacillus mesentrices (0.5B), Enterococcus facium (2.5B), Lactobacillus rhamnosus (2B), Lactobacillus sporogenous (1B), Pediococcus Acidilactici (0.5B), Mannan Oligo Saccharide (MOS), Beta Glucins B 1-3, B 1-4, B 1-6, Alpha-Amylase (Banu) 250 IU, Lipase 250 IU, N protease 10000 IU, Phytase 200 IU, Xylanase 2000 IU, Maltodextrin (Malto), Starch Powder.",
// // // // //     benefits: [
// // // // //       "Highly prevents the Vibrio bacteria infections in Pond water",
// // // // //       "Controls the running mortality in Shrimp",
// // // // //       "Helps to maintain the microbial balance in the Shrimp intestine",
// // // // //       "Inhibit the communication of Vibrio Spp were presented",
// // // // //       "Increases the immune system and improves the FCR",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Before stocking", dose: "1 Kg of Tablets per acre; if Vibriosis: 250 Grams/Acre" },
// // // // //       { label: "Maintenance", dose: "500 Grams per Acre every 7–10 days for 15 days" },
// // // // //     ],
// // // // //     presentation: "500 g Bottle",
// // // // //     form: "Tablet",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 9,
// // // // //     name: "i.Bio'YEAST'vare",
// // // // //     category: "Yeast Probiotics",
// // // // //     type: "Probiotics",
// // // // //     certificate: "CAA/OCT22/PRO/04250",
// // // // //     composition:
// // // // //       "Unique combination of Saccharomyces cerevisiae, Bacillus Subtilis.",
// // // // //     benefits: [
// // // // //       "Stimulates feed digestion",
// // // // //       "Prevents and Controls Pathogenic Bacteria",
// // // // //       "Enhanced survival rate",
// // // // //       "Improves pond conditions with good plankton and beneficial bacterial density",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Feed supplement", dose: "2–3g/Kg feed" },
// // // // //       { label: "Fermentation", dose: "1 Kg along with 10 Kgs Rice Bran and 2 Kgs Jaggery" },
// // // // //       { label: "Pond application", dose: "1–2 Kg/Acre" },
// // // // //     ],
// // // // //     presentation: "1 kg Pouch",
// // // // //     form: "Powder",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 10,
// // // // //     name: "i.PSBVARE",
// // // // //     category: "Photosynthetic Bacteria",
// // // // //     type: "Probiotics",
// // // // //     certificate: "CAA/OCT22/PRO/04254",
// // // // //     composition: "Rhodopseudomonas palustris – 20 Billion CFU/gm.",
// // // // //     benefits: [
// // // // //       "Improves the quality of water in ponds",
// // // // //       "Helps decompose many toxic matters such as nitrous acid, organic materials, ammonia, pond sludge, and hydrogen sulphide",
// // // // //       "Decreasing diseases by restraining the pathogenic bacteria counts in the water",
// // // // //       "Removes black soil & H₂S formed mostly by anaerobic decomposition of organic matter",
// // // // //       "Improves the appetite of fish and shrimps and helps botanical plankton growth",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Initial regular use (Shrimp/Prawn/Fish)", dose: "250 Grms/Acre" },
// // // // //       { label: "Later stage (black soil & H₂S)", dose: "500 Grms/Acre" },
// // // // //     ],
// // // // //     presentation: "500 g Bottle",
// // // // //     form: "Powder",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 11,
// // // // //     name: "i.PROPONDVARE LiQ",
// // // // //     category: "Liquid Water & Soil Probiotics",
// // // // //     type: "Sanitizer",
// // // // //     certificate: "CAA - Under Process",
// // // // //     badge: "Sanitizer",
// // // // //     composition:
// // // // //       "Innovative mixture and optimal liquid multi-strain blend of 16 different essential formulation strains for soil & water probiotics: Bacillus amyloliquefaciens, Bacillus denitrificans, Bacillus licheniformis, Bacillus pumilus, Bacillus subtilis, Bafidiobacterium spp., Lactobacillus acidophilus, Lactobacillus plantarum, Lactobacillus rhamnosus, Nitrobacter spp., Paracoccus denitrificans, Paracoccus pentatrophus, Saccharomyces cerevisiae, Thiobacillus ferroxidans, Thiobacillus thioxidans, DM water Q.S.",
// // // // //     benefits: [
// // // // //       "Enhances gut health, improves feed conversation, growth & survival and boosts immunity",
// // // // //       "Strengthens gut micro-biota, improves digestion and enhances disease resistance",
// // // // //       "Converts toxic ammonia into nitrites (nitrification)",
// // // // //       "Reduces hydrogen sulfide and improves pond bottom conditions ecology and reduce sludge accumulation",
// // // // //       "Reduce disease outbreaks like White Spot Syndrome",
// // // // //       "Degrades organic waste, controls ammonia and suppresses Vibro spp",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Before stocking (Soil Application)", dose: "2 L/Acre (7 days before)" },
// // // // //       { label: "During stocking (Pond Application)", dose: "1 L/Acre (once in every 10 days)" },
// // // // //       { label: "DO DOC", dose: "1.5 L/Acre (once in every 10 days)" },
// // // // //     ],
// // // // //     presentation: "1 Ltr Bottle",
// // // // //     form: "Liquid",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 12,
// // // // //     name: "i.CEEVARE",
// // // // //     category: "Vitamin C",
// // // // //     type: "Vitamins & Nutrition",
// // // // //     certificate: "CAA/JAN22/FA/03767",
// // // // //     composition: "Ascorbic acid (coated Vitamin C) Coated.",
// // // // //     benefits: [
// // // // //       "Improves F.C.R and survival rate",
// // // // //       "Assists in shell formation and muscle development",
// // // // //       "Increases body weight by acceleration of growth",
// // // // //       "Accelerates growth and gives higher survival rate",
// // // // //       "Prevents vibrio loads attack on shrimps",
// // // // //       "Facilitates tissue repairs and wound healing",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Shrimp/Prawn (Normal Conditions)", dose: "2–3 g/1 kg feed at least twice a day" },
// // // // //       { label: "Under Stress condition", dose: "5g/1 kg feed or as directed by aqua consultant" },
// // // // //       { label: "Fish", dose: "2 g/1 kg of feed" },
// // // // //     ],
// // // // //     presentation: "1 Kg Bottle",
// // // // //     form: "Powder",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 13,
// // // // //     name: "i.PHYTOVARE",
// // // // //     category: "Phyto Extracts",
// // // // //     type: "Vitamins & Nutrition",
// // // // //     certificate: "USFDA & EU APPROVED",
// // // // //     badge: "Premium",
// // // // //     composition:
// // // // //       "Innovative blend of High Quality OREGANO (Oreganum Vulgare SSP. hirtum) essential plant extracts constituted of over 30 active ingredients of Carvacrol and Thymol etc.",
// // // // //     benefits: [
// // // // //       "Antimicrobial effects to maintain GUT health thereby reducing enteric diseases e.g. White Feces",
// // // // //       "Anti-oxidation to reduce stresses and protect liver",
// // // // //       "Increase growth rate and improve FCR",
// // // // //       "High-temperature (upto 120 Deg. C) stability and low disappearance rate in water",
// // // // //       "Increase survival rates and reduce disease occurrence",
// // // // //       "Enhances growth rate and feed efficiency improved reproductive success",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Prawn/Shrimp (Healthy condition)", dose: "10 Grams/Kg compound feed" },
// // // // //       { label: "Infected condition", dose: "20 Grams/Kg compound feed" },
// // // // //       { label: "Fish Feed", dose: "50 Grams/Ton compound feed" },
// // // // //     ],
// // // // //     presentation: "500g Bottle",
// // // // //     form: "Powder",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 14,
// // // // //     name: "i.LIVOVARE GEL",
// // // // //     category: "Liver Tonic",
// // // // //     type: "Vitamins & Nutrition",
// // // // //     certificate: "CAA/JAN22/FA/03770",
// // // // //     composition:
// // // // //       "Vitamins: Vitamin C, B2, E; Amino acids: DL-Methionine and L-Lysine, and Binding agents; Nano Minerals: Nano Magnesium, Nano Calcium, Nano Potassium, Nano Zinc, Nano Selenium, Nano Cobalt, Nano Ferrous, Nano Chromium, Nano Manganese, Nano Phosphorus, Nano Molybdenum; Probiotics: Saccharomyces spp and Lactobacillus spp.",
// // // // //     benefits: [
// // // // //       "Improves the functional efficiency of the liver and pancreas",
// // // // //       "Promotes digestibility and improves F.C.R",
// // // // //       "Increases nutrient utilisation and reduce fat deposition",
// // // // //       "Ensures Uniform growth and early harvesting",
// // // // //       "Increase mineral absorption",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Up to 10 weeks", dose: "10–15 ml per 1 kg feed" },
// // // // //       { label: "11 weeks and above", dose: "20–25 ml per 1 kg feed" },
// // // // //     ],
// // // // //     presentation: "20 Ltrs Barrel / 5 Ltrs Tin / 1 Ltr Bottle",
// // // // //     form: "Gel",
// // // // //     storage: "Keep in cool and dry place. *Shakewell before use.",
// // // // //   },
// // // // //   {
// // // // //     id: 15,
// // // // //     name: "i.IMMUNOVARE",
// // // // //     category: "Immune Booster",
// // // // //     type: "Health & Immunity",
// // // // //     certificate: "CAA/APRIL 2025/FA/07489",
// // // // //     composition:
// // // // //       "Comprehensive blend of Macro Nutrients, Amino Acids, Vitamins, Minerals, Enzymes, Probiotics, Non-essential amino acids, Raw Materials and Vitamins as per detailed composition table.",
// // // // //     benefits: [
// // // // //       "Increase Nutrient Utilisation & Growth rate and reduce fat deposition",
// // // // //       "Improve resistance towards stress & diseases and also better resistance to environmental stressors in shrimp",
// // // // //       "Maintains correct Osmotic pressure and improves anti stress ability",
// // // // //       "Increase survival rates and reduce disease occurrence",
// // // // //       "Accelerate the detoxifying of deposited Toxins in Shrimp",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Prawn/Shrimp (at least one midday feeding)", dose: "3–5 Grams/Kg compound feed / 1–2 meal a day" },
// // // // //     ],
// // // // //     presentation: "500 g Bottle",
// // // // //     form: "Powder",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 16,
// // // // //     name: "i.HEPTOPANCVARE",
// // // // //     category: "Hepato-Pancreatic Support",
// // // // //     type: "Health & Immunity",
// // // // //     certificate: "CAA/ARPIL 2025/IMMU/07492",
// // // // //     composition:
// // // // //       "Detailed composition includes Amino Acids, Enzymes, Essential/Non-essential amino acids, Herbal Extracts, Raw Materials and Vitamins as per specification table.",
// // // // //     benefits: [
// // // // //       "Protect health of hepatopancreas and intestine, with bright and translucent body, clear white membrane, strong and health",
// // // // //       "Enhance growth performance, feed efficiency and product",
// // // // //       "Hepatopancreas (H.P) is the power house and vital organ in animal's survival and growth",
// // // // //       "Improve survival rate and immunity for reducing the risk of some vital disease outbreak",
// // // // //       "Relieve nutritional white feces, especially white feces caused by liver damage",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Prawn/Shrimp (preventive)", dose: "5 Grams/Kg compound feed with Gel / 1 meal a day (every 15 days for 5 days)" },
// // // // //       { label: "If problem persists", dose: "1 meal a day regularly" },
// // // // //     ],
// // // // //     presentation: "500 g Bottle",
// // // // //     form: "Powder",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 17,
// // // // //     name: "i.WFSVARE GEL",
// // // // //     category: "Feed Additive Gel",
// // // // //     type: "Health & Immunity",
// // // // //     certificate: "CAA/APRIL 2025/IMMU/07487",
// // // // //     composition:
// // // // //       "Active Probiotics, Vitamins blend, Amino Acids, Enzymes, Probiotics, Raw Materials, Vitamins as per detailed formulation (31 active ingredients).",
// // // // //     benefits: [
// // // // //       "Ensures faster growth and weight gain",
// // // // //       "Improves feed conversion ratio (FCR)",
// // // // //       "Improves proper shell formation",
// // // // //       "Provides necessary binding for the supplemented feed additives preventing any Wastage",
// // // // //       "Maintains high and uniform growth",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "During Culture", dose: "20 ml per 1 kg of Compound Feed or as advised by Consultant" },
// // // // //     ],
// // // // //     presentation: "5 Ltr Tin",
// // // // //     form: "Gel",
// // // // //     storage: "Keep in cool and dry place. *Shakewell before use.",
// // // // //   },
// // // // //   {
// // // // //     id: 18,
// // // // //     name: "i.VIRAHEALVARE",
// // // // //     category: "Antiviral / Sanitizer",
// // // // //     type: "Sanitizer",
// // // // //     certificate: "CAA/OCT22/DIS/04270",
// // // // //     badge: "Sanitizer",
// // // // //     composition:
// // // // //       "Triple Salt - 50% w/v (Containing Triple Salt - 50% w/v); Potassium monopersulphate, Potassium hydrogen sulphate, Potassium sulfate, Sodium Chloride, tartrazine yellow.",
// // // // //     benefits: [
// // // // //       "Multi-component and Multi-purpose oxidizing system with major physical and chemical components of pathogens and restrict their propagation thru this disinfectant",
// // // // //       "Highly effective to control eradicate bacteria, fungi, moulds and all viral families effecting fish and shrimp especially WSSV",
// // // // //       "High level of surfactancy with acidic and oxidising power providing superior destruction of bio films. An effective bactericidal and can control the vibrio in water",
// // // // //       "Effectively control black and brown gill even under extreme stress conditions",
// // // // //       "Product can be used in the pond and can also be applied on the surface and equipments",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Prawn/Shrimp (Prevention of Diseases)", dose: "500 gm to 2 Kg/ha — Apply once every fortnight according to pond water quality/condition" },
// // // // //       { label: "Treating Diseases", dose: "Apply once every 3–5 days or as advised by Aquaculture Consultant" },
// // // // //     ],
// // // // //     presentation: "1 Kg Bottle",
// // // // //     form: "Powder",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 19,
// // // // //     name: "i.SANVARE TD",
// // // // //     category: "Broad Spectrum Disinfectant",
// // // // //     type: "Sanitizer",
// // // // //     certificate: "CAA - Under Process",
// // // // //     badge: "Sanitizer",
// // // // //     composition:
// // // // //       "Benzalkonium Chloride 50% (BKC) - 10%, Glutaraldehyde 50% (C5H8O2) - 10%, Malachite Green (Aniline Green) - 3%, Formaldehyde 37% - 40%, Copper Sulphate - 2%, Ammonium Chloride (NH4Cl) - 2%, Alphox 200 (9.5 moles) (Ethylene Oxide) - 3%, Stabilizers and Surfactants - QS.",
// // // // //     benefits: [
// // // // //       "Highly effective against fungal, bacterial and viral disease",
// // // // //       "Kills bacteria including Gram-Positive, Ligeonella, Protozoan, viruses, algae and fungal spores",
// // // // //       "Broad Spectrum activity against 32 harmful bacteria, 62 virus, 7 fungi and 11 spores with no resistance developed",
// // // // //       "Prevents mite infestation in aqua Culture",
// // // // //       "Fights against pond bottom bacteria and reduce bacterial load in the ponds",
// // // // //       "High residual activity even in presence of organic matter",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Upto 3 feet depth", dose: "0.5 to 1 Ltrs per Acre" },
// // // // //       { label: "Above 3 feet depth", dose: "1–1.5 Ltr per Acre per 3 feet" },
// // // // //     ],
// // // // //     presentation: "5 Ltr Tins",
// // // // //     form: "Liquid",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 20,
// // // // //     name: "i.SILVARE NANO",
// // // // //     category: "Nano Silver",
// // // // //     type: "Sanitizer",
// // // // //     certificate: "CAA - Under Process",
// // // // //     badge: "Sanitizer",
// // // // //     composition:
// // // // //       "PVP 10.8 g, Glycerol 500 ml, Silver nitrate 1.08 g, Enzymes, Amino acids, DM water Q.S.",
// // // // //     benefits: [
// // // // //       "Inhibit the growth of harmful bacteria attack like Vibrio spp. and break down the cell membranes of pathogenic bacteria",
// // // // //       "Helps to reduce microbial load, improving overall pond hygiene and reducing stress on shrimp",
// // // // //       "Boost the innate immune system of shrimp, increasing resistance to infections",
// // // // //       "Controls viral loads and emphasizes antibiotic-resistant bacteria in aquaculture",
// // // // //       "Clean body, gill and removes dirty materials from Shrimp body",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Soil Application (Before stocking)", dose: "1 L/Acre with 1 m depth of water (5 days before)" },
// // // // //       { label: "Pond Application (Post stocking)", dose: "1 L/Acre during Vibriosis in pond water or as advised by Aquaculture Technician" },
// // // // //     ],
// // // // //     presentation: "1 Ltr Bottle",
// // // // //     form: "Liquid",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 21,
// // // // //     name: "i.OXYVARE",
// // // // //     category: "Oxygen Granules",
// // // // //     type: "Oxygen Products",
// // // // //     certificate: "CAA/JAN22/CHEM/03768",
// // // // //     badge: "Emergency Use",
// // // // //     composition:
// // // // //       "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity).",
// // // // //     benefits: [
// // // // //       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
// // // // //       "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
// // // // //       "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
// // // // //       "Improves survival create during stocking in culture period and before harvesting",
// // // // //       "It helps in development of plankton to the required levels",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
// // // // //       { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
// // // // //     ],
// // // // //     presentation: "10 kgs Bucket",
// // // // //     form: "Granules",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 22,
// // // // //     name: "i.OXYVARE-T",
// // // // //     category: "Oxygen Tablets",
// // // // //     type: "Oxygen Products",
// // // // //     certificate: "CAA/APRIL 2025/CHEM/07488",
// // // // //     composition:
// // // // //       "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity) in a tablet form.",
// // // // //     benefits: [
// // // // //       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
// // // // //       "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
// // // // //       "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
// // // // //       "Improves survival create during stocking in culture period and before harvesting",
// // // // //       "It helps in development of plankton to the required levels",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
// // // // //       { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
// // // // //     ],
// // // // //     presentation: "10 Kgs Bucket",
// // // // //     form: "Tablet",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 23,
// // // // //     name: "i.GEOPROVARE G",
// // // // //     category: "Zeolite Granules (with Probiotics)",
// // // // //     type: "Zeolite Products",
// // // // //     certificate: "CAA - Not Required",
// // // // //     composition:
// // // // //       "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
// // // // //     benefits: [
// // // // //       "Highest Cation Exchange capacity & it controls obnoxious gases instantly",
// // // // //       "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
// // // // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // // // //       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
// // // // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // // // //       "Can maintain clean pond bottom",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Pond Preparation", dose: "50 Kgs/acre" },
// // // // //       { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
// // // // //     ],
// // // // //     presentation: "10 kg's Pouch",
// // // // //     form: "Granules",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 24,
// // // // //     name: "i.GEOPROVARE P",
// // // // //     category: "Zeolite Powder (with Probiotics)",
// // // // //     type: "Zeolite Products",
// // // // //     certificate: "CAA - Not Required",
// // // // //     composition:
// // // // //       "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
// // // // //     benefits: [
// // // // //       "Highest Cation Exchange capacity and it controls obnoxious gases instantly",
// // // // //       "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
// // // // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // // // //       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
// // // // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // // // //       "Can maintain clean pond bottom",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Pond Preparation", dose: "50 Kgs/acre" },
// // // // //       { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
// // // // //     ],
// // // // //     presentation: "10 kg's Pouch",
// // // // //     form: "Powder",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 25,
// // // // //     name: "i.GEOVARE P",
// // // // //     category: "Zeolite Powder Plain",
// // // // //     type: "Zeolite Products",
// // // // //     certificate: "CAA - Not Required",
// // // // //     composition:
// // // // //       "Silicon Dioxice (SiO2): 65–70%; Sodium: 1–3%; Iron (Fe): 1–2%; Magnesium: 0.5–1.0%; Calcium Oxide (Cal): 3–5%; Potassium: 0.5–1.0%; Aluminium: 20%; LOI: 5–8%.",
// // // // //     benefits: [
// // // // //       "Highest Cation Exchange capacity it controls obnoxious gases instantly",
// // // // //       "Quick and Efficient removal of obnoxious gases; Dissolved Oxygen level will be improved",
// // // // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // // // //       "Absorbs toxic gases like Ammonia (Nh3), Hydrogen Sulphide (H2S) and other liberated anions from pond water",
// // // // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // // // //       "Can maintain clean pond bottom",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Pond Preparation", dose: "50Kgs/acre" },
// // // // //       { label: "During Culture", dose: "Minimum 15Kgs/acre or as advised by aqua culture technician" },
// // // // //     ],
// // // // //     presentation: "25Kgs Bag",
// // // // //     form: "Powder",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 26,
// // // // //     name: "i.TOXIVARE",
// // // // //     category: "Yucca / Toxin Binder",
// // // // //     type: "Water Treatment",
// // // // //     certificate: "CAA/OCT22/FA/04255",
// // // // //     composition:
// // // // //       "Dry natural extract from the YUCCA schidigera plant, Ammonia binding agents and Probiotics.",
// // // // //     benefits: [
// // // // //       "Yucca is rich in glyco compounds that instantly binds with un-ionized ammonia thereby, reducing ammonia toxicity in the pond",
// // // // //       "Absorbs Nh₂, So₂, Ch₂, H₂S etc. of the pond bottom and cleans the toxic gases in the water",
// // // // //       "Reduced incidence of BOD and COD due to decrease of ammonia content in pond water",
// // // // //       "Deodorizes and purifies pond bottom wastage and water to improve the activity of the culture species",
// // // // //       "Increase the availability of dissolved oxygen in pond water",
// // // // //       "Reduce in gill irrigation",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Pond application", dose: "500 Gm per HA of 1 meter column" },
// // // // //       { label: "Feed application", dose: "2–5 Gm/Kg feed" },
// // // // //     ],
// // // // //     presentation: "1 Kg Pouch",
// // // // //     form: "Powder",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 27,
// // // // //     name: "i.ECOSOFTVARE",
// // // // //     category: "EDTA",
// // // // //     type: "Water Treatment",
// // // // //     certificate: "CAA - Not Required",
// // // // //     composition:
// // // // //       "Unique combination of Ethylene Diamine Tetra Acetic Acid (EDTA) formulated salt compounds.",
// // // // //     benefits: [
// // // // //       "Reduces the hardness levels to optimum lower levels there by stabilizing the alkalinity in the pond water completely prevents plankton crash",
// // // // //       "i.Ecosoftvare is used to improve water quality by reducing heavy metal concentrations",
// // // // //       "Stabilizes the total Ammonia levels there by minimise the free ammonia in the pond water",
// // // // //       "Helps to create toxic free environment",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "General application", dose: "Mix 1–2 kgs in 50 Ltrs of water and spray over 1 Acre evenly" },
// // // // //       { label: "Best practice", dose: "Apply in day light for better results or as advised by Aqua consultant" },
// // // // //     ],
// // // // //     presentation: "1 Kg / 5 kg Pouch",
// // // // //     form: "Powder",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 28,
// // // // //     name: "i.NITRONILVARE",
// // // // //     category: "Nitrite Control",
// // // // //     type: "Water Treatment",
// // // // //     certificate: "CAA/OCT22/PRO/04253",
// // // // //     composition:
// // // // //       "Nitrosomonas, Nitrobacter, Thiobacillus Thioxidans, Thiobacillus Ferroxidans, Thiobacillus Denitrificans, Paracoccus Denitrificans, N. Protease, Fungal Phytase, Fungal Alpha Amylase.",
// // // // //     benefits: [
// // // // //       "It reduces nitrites (No2) content in water to safe level",
// // // // //       "i.NITRONILVARE is powerful water treatment additive for aquaculture pond",
// // // // //       "It prevents formation of black soil due to decay of organic pollutant Improves water quality and enhances survival rate",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "Prawn/Shrimp", dose: "1 Kg/acre once in every 10 days" },
// // // // //       { label: "Fish", dose: "1 Kg/acre once in every one month or advised by aqua consultant" },
// // // // //     ],
// // // // //     presentation: "1 Kg Bottle",
// // // // //     form: "Powder",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 29,
// // // // //     name: "Calcium Chloride (Fused)",
// // // // //     category: "Chloride Salts",
// // // // //     type: "Minerals",
// // // // //     certificate: "CAA/OCT22/CHEM/04252",
// // // // //     composition: "Calcium Chloride Fused.",
// // // // //     benefits: [
// // // // //       "Calcium has an important role in the biological processes of fish & shrimp. It is necessary for bone formation, blood clotting and their metabolic reactions",
// // // // //       "Sodium and potassium are the most important salts in fish & shrimp blood and are critical for normal heat, nerve and muscle function",
// // // // //       "Fish & shrimp can absorb calcium directly from the water of food",
// // // // //       "The re-absorption of salt can reduce the energy available for growth",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "General application", dose: "5 to 10 Kgs per acre" },
// // // // //       { label: "Best Practice", dose: "For best results apply in the evening hours" },
// // // // //     ],
// // // // //     presentation: "25 Kgs Drum (5 Kg x 5 Packs)",
// // // // //     form: "Fused",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 30,
// // // // //     name: "Magnesium Chloride (Crystal)",
// // // // //     category: "Chloride Salts",
// // // // //     type: "Minerals",
// // // // //     certificate: "CAA/OCT22/CHEM/04251",
// // // // //     composition: "Magnesium Chloride 97% ± 2%.",
// // // // //     benefits: [
// // // // //       "Covers the Magnesium balance of pond water",
// // // // //       "Protects from soft shell syndrome",
// // // // //       "Regularizes the moult cycle",
// // // // //       "Increase survival and body weight rate",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "General application", dose: "5 to 10 Kgs per acre" },
// // // // //     ],
// // // // //     presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
// // // // //     form: "Crystal",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 31,
// // // // //     name: "Potassium Chloride (Crystal)",
// // // // //     category: "Chloride Salts",
// // // // //     type: "Minerals",
// // // // //     certificate: "CAA/OCT22/CHEM/04256",
// // // // //     composition: "Potassium Chloride 97% ± 2%.",
// // // // //     benefits: [
// // // // //       "Protects from soft shell syndrome",
// // // // //       "Increase survival and body weight rate",
// // // // //       "Regularizes the moult cycles",
// // // // //       "Covers the Potassium balance of pond water",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "General application", dose: "5 to 8 Kgs per acre" },
// // // // //     ],
// // // // //     presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
// // // // //     form: "Crystal",
// // // // //     storage: "Keep in cool and dry place.",
// // // // //   },
// // // // //   {
// // // // //     id: 32,
// // // // //     name: "i.FERRICCHLORIVARE",
// // // // //     category: "Ferric Chloride",
// // // // //     type: "Minerals",
// // // // //     certificate: "CAA/ARPIL 2025/CHEM/07491",
// // // // //     composition: "Ferric Chloride Anhydrous – 98% ± 2%. Assay: Min 98.0%.",
// // // // //     benefits: [
// // // // //       "Highly effective at removing suspended solids, Organic matter & Heavy metals from the Pond water",
// // // // //       "It helps to prevent the overgrowth of Algae in Pond water",
// // // // //       "Use as Iron supplement",
// // // // //       "Improves Pond water bottom quality",
// // // // //       "It helps to precipitate and inactive inorganic phosphorous in Pond water",
// // // // //     ],
// // // // //     dosage: [
// // // // //       { label: "General", dose: "Consult our field staff or your aquaculture specialist for specific usage and directions" },
// // // // //     ],
// // // // //     presentation: "50 Kgs Drum (5Kg x 10 Packs)",
// // // // //     form: "Crystal",
// // // // //     storage: "Keep in cool and dry place. Special Instruction: No liability accepted for accidents arising while handling or use.",
// // // // //   },
// // // // // ];

// // // // // // ─── Product Image Map ────────────────────────────────────────────────────────
// // // // // // Maps product ID → actual filename in /public/images/
// // // // // const PRODUCT_IMAGES: Record<number, string> = {
// // // // //   1:  "minvare.png",           // i.MINVARE PM
// // // // //   2:  "minare am (1).png",     // i.MINVARE AM
// // // // //   3:  "minvare ws.png",        // i.MINVARE WS
// // // // //   4:  "minvare fm 2.png",      // i.MINVARE FM
// // // // //   5:  "minvare_liq.png",       // i.MINVARE LiQ
// // // // //   6:  "propondvare 2.png",     // i.PROPONDVARE
// // // // //   7:  "provare gut 2.png",     // i.PROVARE GUT
// // // // //   8:  "vibriovare 2.png",      // i.VIBRIOVARE
// // // // //   9:  "bio yeast.png",         // i.Bio'YEAST'vare
// // // // //   10: "psbvare 2.png",         // i.PSBVARE
// // // // //   11: "propondvare_liq.png",   // i.PROPONDVARE LiQ
// // // // //   12: "ceevare 2.png",         // i.CEEVARE
// // // // //   13: "phytovare 2.png",       // i.PHYTOVARE
// // // // //   14: "livovare gel (1).png",  // i.LIVOVARE GEL
// // // // //   15: "immunovare 2.png",      // i.IMMUNOVARE
// // // // //   16: "heptopancvare.png",     // i.HEPTOPANCVARE
// // // // //   17: "wfsvare gel 2.png",     // i.WFSVARE GEL
// // // // //   18: "virahealvare 2.png",    // i.VIRAHEALVARE
// // // // //   19: "sanvare_td 2.png",      // i.SANVARE TD
// // // // //   20: "silvare_nano.png",      // i.SILVARE NANO
// // // // //   21: "oxyvar 2.png",          // i.OXYVARE
// // // // //   22: "oxyvare-t (1).png",     // i.OXYVARE-T
// // // // //   23: "geoprovare.jpeg",       // i.GEOPROVARE G
// // // // //   24: "geoprovare_p 2.png",    // i.GEOPROVARE P
// // // // //   25: "geovare_p.png",         // i.GEOVARE P
// // // // //   26: "nitronilvare.png",      // i.TOXIVARE  (closest match)
// // // // //   27: "nitronilvare.png",      // i.ECOSOFTVARE (reuse until dedicated image added)
// // // // //   28: "nitronilvare.png",      // i.NITRONILVARE
// // // // //   29: "calcium chloride.png",  // Calcium Chloride
// // // // //   30: "min.png",               // Magnesium Chloride
// // // // //   31: "min.png",               // Potassium Chloride
// // // // //   32: "ferric chloride 2.png", // i.FERRICCHLORIVARE
// // // // // };

// // // // // // ─── Category & Color Config ──────────────────────────────────────────────────
// // // // // const CATEGORIES = [
// // // // //   "All",
// // // // //   "Minerals",
// // // // //   "Probiotics",
// // // // //   "Vitamins & Nutrition",
// // // // //   "Health & Immunity",
// // // // //   "Oxygen Products",
// // // // //   "Water Treatment",
// // // // //   "Zeolite Products",
// // // // //   "Sanitizer",
// // // // // ];

// // // // // const TYPE_ACCENT: Record<string, { header: string; label: string; dot: string }> = {
// // // // //   "Minerals":            { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" },
// // // // //   "Probiotics":          { header: "#006644", label: "#008855", dot: "#006644" },
// // // // //   "Vitamins & Nutrition":{ header: "#cc6600", label: "#dd7700", dot: "#cc6600" },
// // // // //   "Health & Immunity":   { header: "#7700aa", label: "#9911cc", dot: "#7700aa" },
// // // // //   "Oxygen Products":     { header: "#003399", label: "#0044bb", dot: "#003399" },
// // // // //   "Water Treatment":     { header: "#005566", label: "#007788", dot: "#005566" },
// // // // //   "Zeolite Products":    { header: "#664400", label: "#886600", dot: "#664400" },
// // // // //   "Sanitizer":           { header: "#aa0000", label: "#cc1111", dot: "#aa0000" },
// // // // // };

// // // // // const getAccent = (type: string) =>
// // // // //   TYPE_ACCENT[type] || { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" };

// // // // // // ─── SVG Placeholder (shown when no image available) ─────────────────────────
// // // // // function ProductPlaceholder({ color }: { color: string }) {
// // // // //   return (
// // // // //     <svg
// // // // //       width="56"
// // // // //       height="56"
// // // // //       viewBox="0 0 56 56"
// // // // //       fill="none"
// // // // //       xmlns="http://www.w3.org/2000/svg"
// // // // //       style={{ opacity: 0.22 }}
// // // // //     >
// // // // //       {/* Flask / bottle shape */}
// // // // //       <rect x="21" y="6" width="14" height="10" rx="2" fill={color} />
// // // // //       <path
// // // // //         d="M18 16h20l6 24a6 6 0 01-6 6H18a6 6 0 01-6-6l6-24z"
// // // // //         fill={color}
// // // // //       />
// // // // //       <ellipse cx="28" cy="34" rx="7" ry="5" fill="white" opacity="0.4" />
// // // // //       <rect x="24" y="8" width="3" height="8" rx="1" fill="white" opacity="0.5" />
// // // // //     </svg>
// // // // //   );
// // // // // }

// // // // // // ─── PDF-Style Product Card ───────────────────────────────────────────────────
// // // // // function PDFCard({ product }: { product: Product }) {
// // // // //   const ac = getAccent(product.type);
// // // // //   const [imgError, setImgError] = useState(false);
// // // // //   const imgSrc = PRODUCT_IMAGES[product.id]
// // // // //     ? `/images/${PRODUCT_IMAGES[product.id]}`
// // // // //     : null;

// // // // //   return (
// // // // //     <div
// // // // //       className="w-full bg-white rounded-xl overflow-hidden"
// // // // //       style={{
// // // // //         border: `2px solid ${ac.header}33`,
// // // // //         boxShadow: "0 2px 16px rgba(0,50,120,0.08)",
// // // // //       }}
// // // // //     >
// // // // //       {/* ── TOP HEADER ── */}
// // // // //       <div className="flex items-stretch" style={{ borderBottom: `2px solid ${ac.header}` }}>
// // // // //         {/* Blank spacer aligned with hex column */}
// // // // //         <div
// // // // //           style={{
// // // // //             width: 148,
// // // // //             flexShrink: 0,
// // // // //             background: "#f0f6ff",
// // // // //             borderRight: `1px solid ${ac.header}33`,
// // // // //           }}
// // // // //         />
// // // // //         {/* Category */}
// // // // //         <div className="flex items-center px-5 py-2 flex-1" style={{ background: "white" }}>
// // // // //           <span
// // // // //             className="font-black uppercase tracking-wide"
// // // // //             style={{ color: ac.header, fontSize: 14, letterSpacing: 1, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // // // //           >
// // // // //             {product.category}
// // // // //           </span>
// // // // //         </div>
// // // // //         {/* Certificate */}
// // // // //         {product.certificate && (
// // // // //           <div
// // // // //             className="flex items-center px-4 py-2"
// // // // //             style={{
// // // // //               background: "#fff8f0",
// // // // //               borderLeft: `1px solid ${ac.header}44`,
// // // // //               borderRight: `1px solid ${ac.header}44`,
// // // // //             }}
// // // // //           >
// // // // //             <span
// // // // //               className="font-bold"
// // // // //               style={{ color: "#cc3300", fontSize: 11, fontFamily: "monospace", whiteSpace: "nowrap" }}
// // // // //             >
// // // // //               {product.certificate}
// // // // //             </span>
// // // // //           </div>
// // // // //         )}
// // // // //         {/* Product name chip */}
// // // // //         <div
// // // // //           className="flex items-center px-5 py-2"
// // // // //           style={{ background: ac.header, minWidth: 180 }}
// // // // //         >
// // // // //           <span
// // // // //             className="font-black text-white tracking-wide"
// // // // //             style={{ fontSize: 15, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // // // //           >
// // // // //             <em style={{ opacity: 0.8, fontStyle: "italic" }}>i</em>
// // // // //             {product.name.replace(/^i[.\-']/i, "")}
// // // // //           </span>
// // // // //           {product.badge && (
// // // // //             <span
// // // // //               className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
// // // // //               style={{ background: "rgba(255,255,255,0.2)", color: "white", whiteSpace: "nowrap" }}
// // // // //             >
// // // // //               {product.badge}
// // // // //             </span>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* ── BODY ROW ── */}
// // // // //       <div className="flex" style={{ minHeight: 220 }}>

// // // // //         {/* ── COL 1: Hexagon with product image ── */}
// // // // //         <div
// // // // //           className="flex-none flex items-center justify-center"
// // // // //           style={{
// // // // //             width: 148,
// // // // //             background: `linear-gradient(160deg, ${ac.header}15 0%, ${ac.header}08 100%)`,
// // // // //             borderRight: `1px solid ${ac.header}22`,
// // // // //             padding: "20px 14px",
// // // // //           }}
// // // // //         >
// // // // //           {/* Outer hex — colored border ring */}
// // // // //           <div
// // // // //             style={{
// // // // //               width: 110,
// // // // //               height: 120,
// // // // //               clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// // // // //               background: ac.header,
// // // // //               display: "flex",
// // // // //               alignItems: "center",
// // // // //               justifyContent: "center",
// // // // //               padding: 3,
// // // // //             }}
// // // // //           >
// // // // //             {/* Inner hex — clips image to hex shape */}
// // // // //             <div
// // // // //               style={{
// // // // //                 width: "100%",
// // // // //                 height: "100%",
// // // // //                 clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// // // // //                 background: "#EEF4FF",
// // // // //                 display: "flex",
// // // // //                 alignItems: "center",
// // // // //                 justifyContent: "center",
// // // // //                 overflow: "hidden",
// // // // //                 position: "relative",
// // // // //               }}
// // // // //             >
// // // // //               {/* ── Actual product image ── */}
// // // // //               {imgSrc && !imgError ? (
// // // // //                 <Image
// // // // //                   src={imgSrc}
// // // // //                   alt={product.name}
// // // // //                   fill
// // // // //                   style={{ objectFit: "contain", padding: "8px" }}
// // // // //                   onError={() => setImgError(true)}
// // // // //                 />
// // // // //               ) : (
// // // // //                 /* ── SVG placeholder when no image — NO text shown ── */
// // // // //                 <ProductPlaceholder color={ac.header} />
// // // // //               )}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* ── COL 2: Benefits ── */}
// // // // //         <div
// // // // //           className="flex-1 p-4"
// // // // //           style={{ borderRight: `1px solid ${ac.header}22`, background: "white", minWidth: 0 }}
// // // // //         >
// // // // //           <div
// // // // //             className="font-bold mb-2 uppercase tracking-wide"
// // // // //             style={{ color: ac.header, fontSize: 11 }}
// // // // //           >
// // // // //             Benefits:
// // // // //           </div>
// // // // //           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
// // // // //             {product.benefits.map((b, i) => (
// // // // //               <li
// // // // //                 key={i}
// // // // //                 style={{
// // // // //                   fontSize: 11.5,
// // // // //                   color: "#1e2d3d",
// // // // //                   lineHeight: 1.6,
// // // // //                   paddingLeft: 14,
// // // // //                   paddingBottom: 3,
// // // // //                   position: "relative",
// // // // //                   fontFamily: "'Segoe UI', system-ui, sans-serif",
// // // // //                 }}
// // // // //               >
// // // // //                 <span
// // // // //                   style={{
// // // // //                     position: "absolute",
// // // // //                     left: 1,
// // // // //                     top: "0.15em",
// // // // //                     color: ac.header,
// // // // //                     fontSize: 13,
// // // // //                     lineHeight: 1,
// // // // //                   }}
// // // // //                 >
// // // // //                   •
// // // // //                 </span>
// // // // //                 {b}
// // // // //               </li>
// // // // //             ))}
// // // // //           </ul>
// // // // //         </div>

// // // // //         {/* ── COL 3: Composition ── */}
// // // // //         <div
// // // // //           className="p-4"
// // // // //           style={{
// // // // //             width: 240,
// // // // //             flexShrink: 0,
// // // // //             borderRight: `1px solid ${ac.header}22`,
// // // // //             background: "#fafeff",
// // // // //           }}
// // // // //         >
// // // // //           <div
// // // // //             className="font-bold mb-2 uppercase tracking-wide"
// // // // //             style={{ color: ac.header, fontSize: 11 }}
// // // // //           >
// // // // //             Composition:
// // // // //           </div>
// // // // //           <p
// // // // //             style={{
// // // // //               fontSize: 11,
// // // // //               color: "#2a3c50",
// // // // //               lineHeight: 1.7,
// // // // //               textAlign: "justify",
// // // // //               hyphens: "auto",
// // // // //               fontFamily: "'Segoe UI', system-ui, sans-serif",
// // // // //             }}
// // // // //           >
// // // // //             {product.composition}
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* ── COL 4: Dosage + Presentation / Form / Storage ── */}
// // // // //         <div
// // // // //           className="p-4"
// // // // //           style={{
// // // // //             width: 200,
// // // // //             flexShrink: 0,
// // // // //             background: "#f7faff",
// // // // //           }}
// // // // //         >
// // // // //           <div
// // // // //             className="font-bold mb-1.5 uppercase tracking-wide"
// // // // //             style={{ color: ac.header, fontSize: 11 }}
// // // // //           >
// // // // //             Dosage:
// // // // //           </div>
// // // // //           {product.dosage.map((d, i) => (
// // // // //             <div key={i} style={{ marginBottom: 6 }}>
// // // // //               <div
// // // // //                 style={{
// // // // //                   fontSize: 10,
// // // // //                   fontWeight: 700,
// // // // //                   color: ac.label,
// // // // //                   lineHeight: 1.3,
// // // // //                   marginBottom: 1,
// // // // //                 }}
// // // // //               >
// // // // //                 {d.label}:
// // // // //               </div>
// // // // //               <div style={{ fontSize: 10.5, color: "#1a2b3c", lineHeight: 1.55 }}>
// // // // //                 {d.dose}
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}

// // // // //           <div
// // // // //             style={{
// // // // //               borderTop: `1px solid ${ac.header}33`,
// // // // //               marginTop: 10,
// // // // //               paddingTop: 10,
// // // // //             }}
// // // // //           >
// // // // //             <div
// // // // //               className="font-bold uppercase"
// // // // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // // // //             >
// // // // //               Presentation:
// // // // //             </div>
// // // // //             <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6, lineHeight: 1.4 }}>
// // // // //               {product.presentation}
// // // // //             </div>

// // // // //             <div
// // // // //               className="font-bold uppercase"
// // // // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // // // //             >
// // // // //               Form:
// // // // //             </div>
// // // // //             <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6 }}>
// // // // //               {product.form}
// // // // //             </div>

// // // // //             <div
// // // // //               className="font-bold uppercase"
// // // // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // // // //             >
// // // // //               Storage &amp; Caution:
// // // // //             </div>
// // // // //             <div style={{ fontSize: 11, color: "#1a2b3c", lineHeight: 1.5 }}>
// // // // //               {product.storage}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // // ─── Main Page ────────────────────────────────────────────────────────────────
// // // // // export default function CataloguePage() {
// // // // //   const [activeCategory, setActiveCategory] = useState("All");
// // // // //   const [search, setSearch] = useState("");
// // // // //   const gridRef = useRef<HTMLDivElement>(null);

// // // // //   const filtered = PRODUCTS.filter((p) => {
// // // // //     const matchCat =
// // // // //       activeCategory === "All" ||
// // // // //       p.type === activeCategory ||
// // // // //       (activeCategory === "Sanitizer" && p.badge === "Sanitizer");
// // // // //     const q = search.toLowerCase();
// // // // //     const matchSearch =
// // // // //       !q ||
// // // // //       p.name.toLowerCase().includes(q) ||
// // // // //       p.category.toLowerCase().includes(q) ||
// // // // //       p.composition.toLowerCase().includes(q) ||
// // // // //       p.benefits.some((b) => b.toLowerCase().includes(q));
// // // // //     return matchCat && matchSearch;
// // // // //   });

// // // // //   return (
// // // // //     <div
// // // // //       className="min-h-screen bg-[#eef3f9]"
// // // // //       style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // // // //     >
// // // // //       {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
// // // // //       <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2557] via-[#2A5DA8] to-[#0e7fc2]">
// // // // //         <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border-[80px] border-white/5 translate-x-48 -translate-y-48 pointer-events-none" />
// // // // //         <div className="absolute top-12 right-64 w-[300px] h-[300px] rounded-full border-[50px] border-white/5 pointer-events-none" />
// // // // //         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border-[60px] border-white/5 -translate-x-32 translate-y-32 pointer-events-none" />
// // // // //         <div
// // // // //           className="absolute inset-0 opacity-5 pointer-events-none"
// // // // //           style={{
// // // // //             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,2 55,16 55,44 30,58 5,44 5,16' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
// // // // //             backgroundSize: "60px 60px",
// // // // //           }}
// // // // //         />

// // // // //         <div className="relative z-10 max-w-screen-2xl mx-auto px-8 py-14">
// // // // //           <div className="flex items-start justify-between gap-8 flex-wrap">
// // // // //             <div>
// // // // //               {/* ── Logo / brand block — text aligned to left edge ── */}
// // // // //               <div className="flex items-center gap-3 mb-5">
// // // // //                 <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center flex-shrink-0">
// // // // //                   <span className="text-white font-black text-xl italic">i</span>
// // // // //                 </div>
// // // // //                 {/* items-start so both lines start at the same left edge */}
// // // // //                 <div className="flex flex-col items-start">
// // // // //                   <p className="text-white text-sm font-semibold leading-tight">
// // // // //                     Innovare Biopharma LLP
// // // // //                   </p>
// // // // //                   <p className="text-white/50 text-[11px] leading-tight">
// // // // //                     Solution to Aquaculture Health
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>

// // // // //               <h1 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
// // // // //                 Product
// // // // //                 <br />
// // // // //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
// // // // //                   Catalogue
// // // // //                 </span>
// // // // //               </h1>
// // // // //               <p className="mt-4 text-white/65 text-sm max-w-xl leading-relaxed">
// // // // //                 Complete reference guide — compositions, benefits, dosages and certifications for all Innovare Biopharma aquaculture solutions.
// // // // //               </p>
// // // // //               <div className="flex flex-wrap gap-3 mt-6">
// // // // //                 {[
// // // // //                   { value: `${PRODUCTS.length}+`, label: "Products" },
// // // // //                   { value: "ISO 9001:2015", label: "Certified" },
// // // // //                   { value: "GMP", label: "Quality Practice" },
// // // // //                   { value: "MSME", label: "Registered" },
// // // // //                 ].map((s) => (
// // // // //                   <div
// // // // //                     key={s.label}
// // // // //                     className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3"
// // // // //                   >
// // // // //                     <div className="text-white font-black text-lg leading-none">{s.value}</div>
// // // // //                     <div className="text-white/55 text-[11px] font-semibold mt-0.5">{s.label}</div>
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Search */}
// // // // //             <div className="flex flex-col gap-2 mt-2">
// // // // //               <div className="relative">
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   placeholder="Search products, ingredients, benefits..."
// // // // //                   value={search}
// // // // //                   onChange={(e) => setSearch(e.target.value)}
// // // // //                   className="w-80 pl-10 pr-4 py-3 rounded-2xl border border-white/25 bg-white/10 text-white placeholder-white/40 text-sm outline-none focus:bg-white/20 focus:border-white/50 transition-all"
// // // // //                 />
// // // // //                 <svg
// // // // //                   className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
// // // // //                   width="16"
// // // // //                   height="16"
// // // // //                   viewBox="0 0 24 24"
// // // // //                   fill="none"
// // // // //                   stroke="currentColor"
// // // // //                   strokeWidth="2"
// // // // //                 >
// // // // //                   <circle cx="11" cy="11" r="8" />
// // // // //                   <path d="m21 21-4.35-4.35" />
// // // // //                 </svg>
// // // // //               </div>
// // // // //               <p className="text-white/40 text-xs text-right">
// // // // //                 Showing{" "}
// // // // //                 <span className="text-white/80 font-bold">{filtered.length}</span> of{" "}
// // // // //                 {PRODUCTS.length} products
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* ── Category Filter Tabs ── */}
// // // // //           <div className="mt-8 flex flex-wrap gap-2">
// // // // //             {CATEGORIES.map((cat) => {
// // // // //               const active = activeCategory === cat;
// // // // //               const count =
// // // // //                 cat === "All"
// // // // //                   ? PRODUCTS.length
// // // // //                   : PRODUCTS.filter(
// // // // //                       (p) =>
// // // // //                         p.type === cat ||
// // // // //                         (cat === "Sanitizer" && p.badge === "Sanitizer")
// // // // //                     ).length;
// // // // //               return (
// // // // //                 <button
// // // // //                   key={cat}
// // // // //                   onClick={() => setActiveCategory(cat)}
// // // // //                   className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200"
// // // // //                   style={{
// // // // //                     background: active ? "white" : "rgba(255,255,255,0.1)",
// // // // //                     color: active ? "#0f2557" : "rgba(255,255,255,0.75)",
// // // // //                     border: active ? "none" : "1px solid rgba(255,255,255,0.2)",
// // // // //                     boxShadow: active ? "0 4px 14px rgba(0,0,0,0.15)" : "none",
// // // // //                   }}
// // // // //                 >
// // // // //                   {cat}
// // // // //                   <span
// // // // //                     className="rounded-full px-1.5 py-0.5"
// // // // //                     style={{
// // // // //                       background: active ? "#2A5DA8" : "rgba(255,255,255,0.15)",
// // // // //                       color: active ? "white" : "rgba(255,255,255,0.7)",
// // // // //                       fontSize: 9,
// // // // //                       fontWeight: 800,
// // // // //                     }}
// // // // //                   >
// // // // //                     {count}
// // // // //                   </span>
// // // // //                 </button>
// // // // //               );
// // // // //             })}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* ══ PRODUCT LIST ════════════════════════════════════════════════════════ */}
// // // // //       <div className="max-w-screen-2xl mx-auto px-6 py-8" ref={gridRef}>
// // // // //         {filtered.length === 0 ? (
// // // // //           <div className="flex flex-col items-center py-32 text-gray-400">
// // // // //             <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
// // // // //               <svg
// // // // //                 width="32"
// // // // //                 height="32"
// // // // //                 viewBox="0 0 24 24"
// // // // //                 fill="none"
// // // // //                 stroke="#9ca3af"
// // // // //                 strokeWidth="1.5"
// // // // //               >
// // // // //                 <circle cx="11" cy="11" r="8" />
// // // // //                 <path d="m21 21-4.35-4.35" />
// // // // //               </svg>
// // // // //             </div>
// // // // //             <p className="font-semibold text-base text-gray-500">No products found</p>
// // // // //             <button
// // // // //               onClick={() => {
// // // // //                 setSearch("");
// // // // //                 setActiveCategory("All");
// // // // //               }}
// // // // //               className="mt-4 px-5 py-2 rounded-xl bg-[#2A5DA8] text-white text-sm font-semibold"
// // // // //             >
// // // // //               Clear Filters
// // // // //             </button>
// // // // //           </div>
// // // // //         ) : (
// // // // //           <div className="flex flex-col gap-5">
// // // // //             {filtered.map((p) => (
// // // // //               <PDFCard key={p.id} product={p} />
// // // // //             ))}
// // // // //           </div>
// // // // //         )}
// // // // //       </div>

// // // // //       <Footer />
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // "use client";

// // // // import Footer from "@/components/Footer";
// // // // import Image from "next/image";
// // // // import { useState, useRef } from "react";

// // // // // ─── Types ────────────────────────────────────────────────────────────────────
// // // // type Product = {
// // // //   id: number;
// // // //   name: string;
// // // //   category: string;
// // // //   type: string;
// // // //   certificate: string;
// // // //   composition: string;
// // // //   benefits: string[];
// // // //   dosage: { label: string; dose: string }[];
// // // //   presentation: string;
// // // //   form: string;
// // // //   storage: string;
// // // //   badge?: string;
// // // //   tag?: string;
// // // // };

// // // // // ─── Data ─────────────────────────────────────────────────────────────────────
// // // // const PRODUCTS: Product[] = [
// // // //   {
// // // //     id: 1,
// // // //     name: "i.MINVARE PM",
// // // //     category: "Pond Minerals",
// // // //     type: "Minerals",
// // // //     certificate: "CAA/JAN22/FA/03765",
// // // //     composition:
// // // //       "Innovative blend of essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Phosphorus, Copper, Sodium; Amino acids: DL-Methionine, L-Lysine; Probiotics: Bacillus subtilis 10B, Bacillus licheniformis 10B, Bacillus Coagulans 10B, Lactobacillus acidophilus 10B, Saccharomyces cervisiae 10B.",
// // // //     benefits: [
// // // //       "Improves F.C.R",
// // // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // // //       "Maintain pH of pond water",
// // // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // // //       "Helps for immune response and defence mechanism",
// // // //       "Helps in uniform growth in shrimp and fish",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Shrimp/Prawn", dose: "10 kgs per Acre" },
// // // //       { label: "Fish", dose: "3 kgs per Acre" },
// // // //     ],
// // // //     presentation: "10 Kg's Pouch",
// // // //     form: "Powder",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     name: "i.MINVARE AM",
// // // //     category: "Pond Minerals",
// // // //     type: "Minerals",
// // // //     certificate: "",
// // // //     composition:
// // // //       "Innovative blend of essential Micro and Macro Minerals: Calcium, Dolomite, Sulphates containing Magnesium, Manganese, Zinc, Ferrous, Copper; Sodium Chlorides; Potassium; Phosphates: Di Calcium, Rock, Mono Sodium, Mono Potassium.",
// // // //     benefits: [
// // // //       "Improves F.C.R",
// // // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // // //       "Maintain pH of pond water",
// // // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // // //       "Helps for immune response and defence mechanism",
// // // //       "Helps in uniform growth in shrimp and fish",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
// // // //       { label: "Fish", dose: "5 Kgs per Acre" },
// // // //     ],
// // // //     presentation: "20 kg Bag",
// // // //     form: "Powder",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     name: "i.MINVARE WS",
// // // //     category: "Pond Minerals",
// // // //     type: "Minerals",
// // // //     certificate: "CAA/APRIL 2025/MIN/07490",
// // // //     composition:
// // // //       "Innovative blend of essential Macro Minerals: Calcium, Dolomite, Zeolite; Sulphates: Magnesium, Manganese, Zinc, Ferrous, Copper; Chlorides: Potassium; Phosphates: Di Calcium, Rock, Sodium.",
// // // //     benefits: [
// // // //       "Improves F.C.R",
// // // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // // //       "Maintain pH of pond water",
// // // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // // //       "Helps for immune response and defence mechanism",
// // // //       "Helps in uniform growth in shrimp and fish",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
// // // //       { label: "Fish", dose: "5 Kgs per Acre" },
// // // //     ],
// // // //     presentation: "20 Kgs Bag",
// // // //     form: "Powder",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     name: "i.MINVARE FM",
// // // //     category: "Feed Minerals",
// // // //     type: "Minerals",
// // // //     certificate: "CAA/JAN22/FA/03766",
// // // //     composition:
// // // //       "Essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Cobalt, Phosphorus, Copper, Selenium; Vitamins B2, B12, AD3, E; Amino acids: DL-Methionine, L-Lysine; Probiotics; Enzymes: Amylase, Protease, Cellulose, β.Galactose.",
// // // //     benefits: [
// // // //       "Improves F.C.R",
// // // //       "Protects from shell and muscle related problems",
// // // //       "Helps in moulting process and formation of exoskeleton in shrimp",
// // // //       "Improves hormonal and enzymatic activities in shrimp",
// // // //       "Protection from loose shell syndrome",
// // // //       "Improves metabolism",
// // // //       "Promotes fast body growth and gains more body weight",
// // // //       "Improves effectively the digestive system",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Shrimp/Prawn", dose: "5–8 gm/kg feed" },
// // // //       { label: "Fish", dose: "1–3 kgs per ton feed" },
// // // //     ],
// // // //     presentation: "1 Kg & 5 Kg's Pouch",
// // // //     form: "Powder",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     name: "i.MINVARE LiQ",
// // // //     category: "Liquid Minerals",
// // // //     type: "Minerals",
// // // //     certificate: "",
// // // //     composition:
// // // //       "Innovative mixture of optimal liquid blend of balanced essential Macro and Trace element Aqua culture feed supplements minerals: Amino Protein 2g, Buffer phosphonic acid 2.5g, Calcium lactate 1.5g, Calcium phosphate monobasic 5.5g, Citric acid 2g, Di potassium phosphate 5.35g, Di sodium phosphate 3.25g, Magnesium citrate 750mg, Potassium chloride 1.5g, Sodium citrate 2.5g, Trace mineral complex (Glycinated) 2g, DM water Q.S.",
// // // //     benefits: [
// // // //       "Prevents and controls white muscle / soft shell syndrome and body cramping problem",
// // // //       "Improves and enhances the development of phytoplankton and zooplankton",
// // // //       "Regulates the moulting cycle and survival rate",
// // // //       "Balances minerals deficiency in water, soil and shrimp",
// // // //       "Improves metabolism, digestive system and FCR",
// // // //       "Improves mineral absorption and pond water nutrition",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Pond Application", dose: "50 Ltrs/Acre (once every 10 days)" },
// // // //       { label: "Feed Application", dose: "5–10 ml/kg feed (30 min before feeding)" },
// // // //     ],
// // // //     presentation: "1 Ltr Bottle",
// // // //     form: "Liquid",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 6,
// // // //     name: "i.PROPONDVARE",
// // // //     category: "Water & Soil Probiotics",
// // // //     type: "Probiotics",
// // // //     certificate: "CAA/JAN22/PRO/03769",
// // // //     composition:
// // // //       "Bacillus subtilis, Bacillus megaterium, Bacillus licheniformis, Bacillus polymyxa, Bacillus pumilis, Saccharomyces cerevisiae, Cellulomanas cartae, p.pantotrophus, Nitrosomonas, Nitrobacter, Pseidomonas denitricans, l.plantarum, l.acidophilus, Rhodobacter sphaeroides, Thiobacillus thiooxidans & Thiobacillus ferroxidans.",
// // // //     benefits: [
// // // //       "Degradation of organic waste and maintains phytoplankton bloom",
// // // //       "Improves water and soil quality and increases aquatic animal production",
// // // //       "Stabilizes pond pH and maintains optimum alkalinity",
// // // //       "Increases collagen synthesis and accelerates encrustation",
// // // //       "Removes unwanted micro-organisms",
// // // //       "Strengthens the immune system",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Initial booster (Shrimp/Prawn/Fish)", dose: "1.5 Kg/Ha" },
// // // //       { label: "Maintenance", dose: "1 Kg/Ha every 7–10 days" },
// // // //     ],
// // // //     presentation: "1 kg Bottle",
// // // //     form: "Powder",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 7,
// // // //     name: "i.PROVARE GUT",
// // // //     category: "Gut Probiotics",
// // // //     type: "Probiotics",
// // // //     certificate: "CAA/JAN22/PRO/03771",
// // // //     composition:
// // // //       "High strength GUT Probiotics: Lactobacillus plantarum, Lactobacillus acidophilus, Saccharomyces cervisiae; Enzymes: N Protease and Fungal phytase; Herbal extracts: Phyllanthus emblica Linn., Zingiber officinale and Trigonella foenum-graecum.",
// // // //     benefits: [
// // // //       "Improves digestion and feed intake while protecting GUT health",
// // // //       "Prevents the occurrence of Mycosporidia infection",
// // // //       "Prevents development of pathogenic bacteria and affects to maintain the GUT micro flora",
// // // //       "Improves FCR and lower GUT pH",
// // // //       "Support health, performance and growth of aquatic species",
// // // //       "Prevents the onset of loose shell syndrome",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Shrimp", dose: "5–10 Grams per Kg feed" },
// // // //       { label: "Fish", dose: "10–15 Grams per Kg feed" },
// // // //     ],
// // // //     presentation: "1 kg Bottle",
// // // //     form: "Powder",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 8,
// // // //     name: "i.VIBRIOVARE",
// // // //     category: "Vibrio Control",
// // // //     type: "Probiotics",
// // // //     certificate: "CAA - Under Process",
// // // //     composition:
// // // //       "Bacillus magaterium (2.5B), Bacillus polymyxa (2.5B), Bacillus pumilus (2.5B), Paracoccus marginatus (0.5B), Paracoccus pantotropus (2B), Streptococcus thermophillus (2.5B), Bacillus amyloliquificans (1B), Bacillus mesentrices (0.5B), Enterococcus facium (2.5B), Lactobacillus rhamnosus (2B), Lactobacillus sporogenous (1B), Pediococcus Acidilactici (0.5B), Mannan Oligo Saccharide (MOS), Beta Glucins B 1-3, B 1-4, B 1-6, Alpha-Amylase (Banu) 250 IU, Lipase 250 IU, N protease 10000 IU, Phytase 200 IU, Xylanase 2000 IU, Maltodextrin (Malto), Starch Powder.",
// // // //     benefits: [
// // // //       "Highly prevents the Vibrio bacteria infections in Pond water",
// // // //       "Controls the running mortality in Shrimp",
// // // //       "Helps to maintain the microbial balance in the Shrimp intestine",
// // // //       "Inhibit the communication of Vibrio Spp were presented",
// // // //       "Increases the immune system and improves the FCR",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Before stocking", dose: "1 Kg of Tablets per acre; if Vibriosis: 250 Grams/Acre" },
// // // //       { label: "Maintenance", dose: "500 Grams per Acre every 7–10 days for 15 days" },
// // // //     ],
// // // //     presentation: "500 g Bottle",
// // // //     form: "Tablet",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 9,
// // // //     name: "i.Bio'YEAST'vare",
// // // //     category: "Yeast Probiotics",
// // // //     type: "Probiotics",
// // // //     certificate: "CAA/OCT22/PRO/04250",
// // // //     composition:
// // // //       "Unique combination of Saccharomyces cerevisiae, Bacillus Subtilis.",
// // // //     benefits: [
// // // //       "Stimulates feed digestion",
// // // //       "Prevents and Controls Pathogenic Bacteria",
// // // //       "Enhanced survival rate",
// // // //       "Improves pond conditions with good plankton and beneficial bacterial density",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Feed supplement", dose: "2–3g/Kg feed" },
// // // //       { label: "Fermentation", dose: "1 Kg along with 10 Kgs Rice Bran and 2 Kgs Jaggery" },
// // // //       { label: "Pond application", dose: "1–2 Kg/Acre" },
// // // //     ],
// // // //     presentation: "1 kg Pouch",
// // // //     form: "Powder",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 10,
// // // //     name: "i.PSBVARE",
// // // //     category: "Photosynthetic Bacteria",
// // // //     type: "Probiotics",
// // // //     certificate: "CAA/OCT22/PRO/04254",
// // // //     composition: "Rhodopseudomonas palustris – 20 Billion CFU/gm.",
// // // //     benefits: [
// // // //       "Improves the quality of water in ponds",
// // // //       "Helps decompose many toxic matters such as nitrous acid, organic materials, ammonia, pond sludge, and hydrogen sulphide",
// // // //       "Decreasing diseases by restraining the pathogenic bacteria counts in the water",
// // // //       "Removes black soil & H₂S formed mostly by anaerobic decomposition of organic matter",
// // // //       "Improves the appetite of fish and shrimps and helps botanical plankton growth",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Initial regular use (Shrimp/Prawn/Fish)", dose: "250 Grms/Acre" },
// // // //       { label: "Later stage (black soil & H₂S)", dose: "500 Grms/Acre" },
// // // //     ],
// // // //     presentation: "500 g Bottle",
// // // //     form: "Powder",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 11,
// // // //     name: "i.PROPONDVARE LiQ",
// // // //     category: "Liquid Water & Soil Probiotics",
// // // //     type: "Sanitizer",
// // // //     certificate: "CAA - Under Process",
// // // //     badge: "Sanitizer",
// // // //     composition:
// // // //       "Innovative mixture and optimal liquid multi-strain blend of 16 different essential formulation strains for soil & water probiotics: Bacillus amyloliquefaciens, Bacillus denitrificans, Bacillus licheniformis, Bacillus pumilus, Bacillus subtilis, Bafidiobacterium spp., Lactobacillus acidophilus, Lactobacillus plantarum, Lactobacillus rhamnosus, Nitrobacter spp., Paracoccus denitrificans, Paracoccus pentatrophus, Saccharomyces cerevisiae, Thiobacillus ferroxidans, Thiobacillus thioxidans, DM water Q.S.",
// // // //     benefits: [
// // // //       "Enhances gut health, improves feed conversation, growth & survival and boosts immunity",
// // // //       "Strengthens gut micro-biota, improves digestion and enhances disease resistance",
// // // //       "Converts toxic ammonia into nitrites (nitrification)",
// // // //       "Reduces hydrogen sulfide and improves pond bottom conditions ecology and reduce sludge accumulation",
// // // //       "Reduce disease outbreaks like White Spot Syndrome",
// // // //       "Degrades organic waste, controls ammonia and suppresses Vibro spp",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Before stocking (Soil Application)", dose: "2 L/Acre (7 days before)" },
// // // //       { label: "During stocking (Pond Application)", dose: "1 L/Acre (once in every 10 days)" },
// // // //       { label: "DO DOC", dose: "1.5 L/Acre (once in every 10 days)" },
// // // //     ],
// // // //     presentation: "1 Ltr Bottle",
// // // //     form: "Liquid",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 12,
// // // //     name: "i.CEEVARE",
// // // //     category: "Vitamin C",
// // // //     type: "Vitamins & Nutrition",
// // // //     certificate: "CAA/JAN22/FA/03767",
// // // //     composition: "Ascorbic acid (coated Vitamin C) Coated.",
// // // //     benefits: [
// // // //       "Improves F.C.R and survival rate",
// // // //       "Assists in shell formation and muscle development",
// // // //       "Increases body weight by acceleration of growth",
// // // //       "Accelerates growth and gives higher survival rate",
// // // //       "Prevents vibrio loads attack on shrimps",
// // // //       "Facilitates tissue repairs and wound healing",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Shrimp/Prawn (Normal Conditions)", dose: "2–3 g/1 kg feed at least twice a day" },
// // // //       { label: "Under Stress condition", dose: "5g/1 kg feed or as directed by aqua consultant" },
// // // //       { label: "Fish", dose: "2 g/1 kg of feed" },
// // // //     ],
// // // //     presentation: "1 Kg Bottle",
// // // //     form: "Powder",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 13,
// // // //     name: "i.PHYTOVARE",
// // // //     category: "Phyto Extracts",
// // // //     type: "Vitamins & Nutrition",
// // // //     certificate: "USFDA & EU APPROVED",
// // // //     badge: "Premium",
// // // //     composition:
// // // //       "Innovative blend of High Quality OREGANO (Oreganum Vulgare SSP. hirtum) essential plant extracts constituted of over 30 active ingredients of Carvacrol and Thymol etc.",
// // // //     benefits: [
// // // //       "Antimicrobial effects to maintain GUT health thereby reducing enteric diseases e.g. White Feces",
// // // //       "Anti-oxidation to reduce stresses and protect liver",
// // // //       "Increase growth rate and improve FCR",
// // // //       "High-temperature (upto 120 Deg. C) stability and low disappearance rate in water",
// // // //       "Increase survival rates and reduce disease occurrence",
// // // //       "Enhances growth rate and feed efficiency improved reproductive success",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Prawn/Shrimp (Healthy condition)", dose: "10 Grams/Kg compound feed" },
// // // //       { label: "Infected condition", dose: "20 Grams/Kg compound feed" },
// // // //       { label: "Fish Feed", dose: "50 Grams/Ton compound feed" },
// // // //     ],
// // // //     presentation: "500g Bottle",
// // // //     form: "Powder",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 14,
// // // //     name: "i.LIVOVARE GEL",
// // // //     category: "Liver Tonic",
// // // //     type: "Vitamins & Nutrition",
// // // //     certificate: "CAA/JAN22/FA/03770",
// // // //     composition:
// // // //       "Vitamins: Vitamin C, B2, E; Amino acids: DL-Methionine and L-Lysine, and Binding agents; Nano Minerals: Nano Magnesium, Nano Calcium, Nano Potassium, Nano Zinc, Nano Selenium, Nano Cobalt, Nano Ferrous, Nano Chromium, Nano Manganese, Nano Phosphorus, Nano Molybdenum; Probiotics: Saccharomyces spp and Lactobacillus spp.",
// // // //     benefits: [
// // // //       "Improves the functional efficiency of the liver and pancreas",
// // // //       "Promotes digestibility and improves F.C.R",
// // // //       "Increases nutrient utilisation and reduce fat deposition",
// // // //       "Ensures Uniform growth and early harvesting",
// // // //       "Increase mineral absorption",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Up to 10 weeks", dose: "10–15 ml per 1 kg feed" },
// // // //       { label: "11 weeks and above", dose: "20–25 ml per 1 kg feed" },
// // // //     ],
// // // //     presentation: "20 Ltrs Barrel / 5 Ltrs Tin / 1 Ltr Bottle",
// // // //     form: "Gel",
// // // //     storage: "Keep in cool and dry place. *Shakewell before use.",
// // // //   },
// // // //   {
// // // //     id: 15,
// // // //     name: "i.IMMUNOVARE",
// // // //     category: "Immune Booster",
// // // //     type: "Health & Immunity",
// // // //     certificate: "CAA/APRIL 2025/FA/07489",
// // // //     composition:
// // // //       "Comprehensive blend of Macro Nutrients, Amino Acids, Vitamins, Minerals, Enzymes, Probiotics, Non-essential amino acids, Raw Materials and Vitamins as per detailed composition table.",
// // // //     benefits: [
// // // //       "Increase Nutrient Utilisation & Growth rate and reduce fat deposition",
// // // //       "Improve resistance towards stress & diseases and also better resistance to environmental stressors in shrimp",
// // // //       "Maintains correct Osmotic pressure and improves anti stress ability",
// // // //       "Increase survival rates and reduce disease occurrence",
// // // //       "Accelerate the detoxifying of deposited Toxins in Shrimp",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Prawn/Shrimp (at least one midday feeding)", dose: "3–5 Grams/Kg compound feed / 1–2 meal a day" },
// // // //     ],
// // // //     presentation: "500 g Bottle",
// // // //     form: "Powder",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 16,
// // // //     name: "i.HEPTOPANCVARE",
// // // //     category: "Hepato-Pancreatic Support",
// // // //     type: "Health & Immunity",
// // // //     certificate: "CAA/ARPIL 2025/IMMU/07492",
// // // //     composition:
// // // //       "Detailed composition includes Amino Acids, Enzymes, Essential/Non-essential amino acids, Herbal Extracts, Raw Materials and Vitamins as per specification table.",
// // // //     benefits: [
// // // //       "Protect health of hepatopancreas and intestine, with bright and translucent body, clear white membrane, strong and health",
// // // //       "Enhance growth performance, feed efficiency and product",
// // // //       "Hepatopancreas (H.P) is the power house and vital organ in animal's survival and growth",
// // // //       "Improve survival rate and immunity for reducing the risk of some vital disease outbreak",
// // // //       "Relieve nutritional white feces, especially white feces caused by liver damage",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Prawn/Shrimp (preventive)", dose: "5 Grams/Kg compound feed with Gel / 1 meal a day (every 15 days for 5 days)" },
// // // //       { label: "If problem persists", dose: "1 meal a day regularly" },
// // // //     ],
// // // //     presentation: "500 g Bottle",
// // // //     form: "Powder",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 17,
// // // //     name: "i.WFSVARE GEL",
// // // //     category: "Feed Additive Gel",
// // // //     type: "Health & Immunity",
// // // //     certificate: "CAA/APRIL 2025/IMMU/07487",
// // // //     composition:
// // // //       "Active Probiotics, Vitamins blend, Amino Acids, Enzymes, Probiotics, Raw Materials, Vitamins as per detailed formulation (31 active ingredients).",
// // // //     benefits: [
// // // //       "Ensures faster growth and weight gain",
// // // //       "Improves feed conversion ratio (FCR)",
// // // //       "Improves proper shell formation",
// // // //       "Provides necessary binding for the supplemented feed additives preventing any Wastage",
// // // //       "Maintains high and uniform growth",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "During Culture", dose: "20 ml per 1 kg of Compound Feed or as advised by Consultant" },
// // // //     ],
// // // //     presentation: "5 Ltr Tin",
// // // //     form: "Gel",
// // // //     storage: "Keep in cool and dry place. *Shakewell before use.",
// // // //   },
// // // //   {
// // // //     id: 18,
// // // //     name: "i.VIRAHEALVARE",
// // // //     category: "Antiviral / Sanitizer",
// // // //     type: "Sanitizer",
// // // //     certificate: "CAA/OCT22/DIS/04270",
// // // //     badge: "Sanitizer",
// // // //     composition:
// // // //       "Triple Salt - 50% w/v (Containing Triple Salt - 50% w/v); Potassium monopersulphate, Potassium hydrogen sulphate, Potassium sulfate, Sodium Chloride, tartrazine yellow.",
// // // //     benefits: [
// // // //       "Multi-component and Multi-purpose oxidizing system with major physical and chemical components of pathogens and restrict their propagation thru this disinfectant",
// // // //       "Highly effective to control eradicate bacteria, fungi, moulds and all viral families effecting fish and shrimp especially WSSV",
// // // //       "High level of surfactancy with acidic and oxidising power providing superior destruction of bio films. An effective bactericidal and can control the vibrio in water",
// // // //       "Effectively control black and brown gill even under extreme stress conditions",
// // // //       "Product can be used in the pond and can also be applied on the surface and equipments",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Prawn/Shrimp (Prevention of Diseases)", dose: "500 gm to 2 Kg/ha — Apply once every fortnight according to pond water quality/condition" },
// // // //       { label: "Treating Diseases", dose: "Apply once every 3–5 days or as advised by Aquaculture Consultant" },
// // // //     ],
// // // //     presentation: "1 Kg Bottle",
// // // //     form: "Powder",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 19,
// // // //     name: "i.SANVARE TD",
// // // //     category: "Broad Spectrum Disinfectant",
// // // //     type: "Sanitizer",
// // // //     certificate: "CAA - Under Process",
// // // //     badge: "Sanitizer",
// // // //     composition:
// // // //       "Benzalkonium Chloride 50% (BKC) - 10%, Glutaraldehyde 50% (C5H8O2) - 10%, Malachite Green (Aniline Green) - 3%, Formaldehyde 37% - 40%, Copper Sulphate - 2%, Ammonium Chloride (NH4Cl) - 2%, Alphox 200 (9.5 moles) (Ethylene Oxide) - 3%, Stabilizers and Surfactants - QS.",
// // // //     benefits: [
// // // //       "Highly effective against fungal, bacterial and viral disease",
// // // //       "Kills bacteria including Gram-Positive, Ligeonella, Protozoan, viruses, algae and fungal spores",
// // // //       "Broad Spectrum activity against 32 harmful bacteria, 62 virus, 7 fungi and 11 spores with no resistance developed",
// // // //       "Prevents mite infestation in aqua Culture",
// // // //       "Fights against pond bottom bacteria and reduce bacterial load in the ponds",
// // // //       "High residual activity even in presence of organic matter",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Upto 3 feet depth", dose: "0.5 to 1 Ltrs per Acre" },
// // // //       { label: "Above 3 feet depth", dose: "1–1.5 Ltr per Acre per 3 feet" },
// // // //     ],
// // // //     presentation: "5 Ltr Tins",
// // // //     form: "Liquid",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 20,
// // // //     name: "i.SILVARE NANO",
// // // //     category: "Nano Silver",
// // // //     type: "Sanitizer",
// // // //     certificate: "CAA - Under Process",
// // // //     badge: "Sanitizer",
// // // //     composition:
// // // //       "PVP 10.8 g, Glycerol 500 ml, Silver nitrate 1.08 g, Enzymes, Amino acids, DM water Q.S.",
// // // //     benefits: [
// // // //       "Inhibit the growth of harmful bacteria attack like Vibrio spp. and break down the cell membranes of pathogenic bacteria",
// // // //       "Helps to reduce microbial load, improving overall pond hygiene and reducing stress on shrimp",
// // // //       "Boost the innate immune system of shrimp, increasing resistance to infections",
// // // //       "Controls viral loads and emphasizes antibiotic-resistant bacteria in aquaculture",
// // // //       "Clean body, gill and removes dirty materials from Shrimp body",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Soil Application (Before stocking)", dose: "1 L/Acre with 1 m depth of water (5 days before)" },
// // // //       { label: "Pond Application (Post stocking)", dose: "1 L/Acre during Vibriosis in pond water or as advised by Aquaculture Technician" },
// // // //     ],
// // // //     presentation: "1 Ltr Bottle",
// // // //     form: "Liquid",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 21,
// // // //     name: "i.OXYVARE",
// // // //     category: "Oxygen Granules",
// // // //     type: "Oxygen Products",
// // // //     certificate: "CAA/JAN22/CHEM/03768",
// // // //     badge: "Emergency Use",
// // // //     composition:
// // // //       "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity).",
// // // //     benefits: [
// // // //       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
// // // //       "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
// // // //       "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
// // // //       "Improves survival create during stocking in culture period and before harvesting",
// // // //       "It helps in development of plankton to the required levels",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
// // // //       { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
// // // //     ],
// // // //     presentation: "10 kgs Bucket",
// // // //     form: "Granules",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 22,
// // // //     name: "i.OXYVARE-T",
// // // //     category: "Oxygen Tablets",
// // // //     type: "Oxygen Products",
// // // //     certificate: "CAA/APRIL 2025/CHEM/07488",
// // // //     composition:
// // // //       "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity) in a tablet form.",
// // // //     benefits: [
// // // //       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
// // // //       "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
// // // //       "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
// // // //       "Improves survival create during stocking in culture period and before harvesting",
// // // //       "It helps in development of plankton to the required levels",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
// // // //       { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
// // // //     ],
// // // //     presentation: "10 Kgs Bucket",
// // // //     form: "Tablet",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 23,
// // // //     name: "i.GEOPROVARE G",
// // // //     category: "Zeolite Granules (with Probiotics)",
// // // //     type: "Zeolite Products",
// // // //     certificate: "CAA - Not Required",
// // // //     composition:
// // // //       "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
// // // //     benefits: [
// // // //       "Highest Cation Exchange capacity & it controls obnoxious gases instantly",
// // // //       "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
// // // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // // //       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
// // // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // // //       "Can maintain clean pond bottom",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Pond Preparation", dose: "50 Kgs/acre" },
// // // //       { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
// // // //     ],
// // // //     presentation: "10 kg's Pouch",
// // // //     form: "Granules",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 24,
// // // //     name: "i.GEOPROVARE P",
// // // //     category: "Zeolite Powder (with Probiotics)",
// // // //     type: "Zeolite Products",
// // // //     certificate: "CAA - Not Required",
// // // //     composition:
// // // //       "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
// // // //     benefits: [
// // // //       "Highest Cation Exchange capacity and it controls obnoxious gases instantly",
// // // //       "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
// // // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // // //       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
// // // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // // //       "Can maintain clean pond bottom",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Pond Preparation", dose: "50 Kgs/acre" },
// // // //       { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
// // // //     ],
// // // //     presentation: "10 kg's Pouch",
// // // //     form: "Powder",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 25,
// // // //     name: "i.GEOVARE P",
// // // //     category: "Zeolite Powder Plain",
// // // //     type: "Zeolite Products",
// // // //     certificate: "CAA - Not Required",
// // // //     composition:
// // // //       "Silicon Dioxice (SiO2): 65–70%; Sodium: 1–3%; Iron (Fe): 1–2%; Magnesium: 0.5–1.0%; Calcium Oxide (Cal): 3–5%; Potassium: 0.5–1.0%; Aluminium: 20%; LOI: 5–8%.",
// // // //     benefits: [
// // // //       "Highest Cation Exchange capacity it controls obnoxious gases instantly",
// // // //       "Quick and Efficient removal of obnoxious gases; Dissolved Oxygen level will be improved",
// // // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // // //       "Absorbs toxic gases like Ammonia (Nh3), Hydrogen Sulphide (H2S) and other liberated anions from pond water",
// // // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // // //       "Can maintain clean pond bottom",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Pond Preparation", dose: "50Kgs/acre" },
// // // //       { label: "During Culture", dose: "Minimum 15Kgs/acre or as advised by aqua culture technician" },
// // // //     ],
// // // //     presentation: "25Kgs Bag",
// // // //     form: "Powder",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 26,
// // // //     name: "i.TOXIVARE",
// // // //     category: "Yucca / Toxin Binder",
// // // //     type: "Water Treatment",
// // // //     certificate: "CAA/OCT22/FA/04255",
// // // //     composition:
// // // //       "Dry natural extract from the YUCCA schidigera plant, Ammonia binding agents and Probiotics.",
// // // //     benefits: [
// // // //       "Yucca is rich in glyco compounds that instantly binds with un-ionized ammonia thereby, reducing ammonia toxicity in the pond",
// // // //       "Absorbs Nh₂, So₂, Ch₂, H₂S etc. of the pond bottom and cleans the toxic gases in the water",
// // // //       "Reduced incidence of BOD and COD due to decrease of ammonia content in pond water",
// // // //       "Deodorizes and purifies pond bottom wastage and water to improve the activity of the culture species",
// // // //       "Increase the availability of dissolved oxygen in pond water",
// // // //       "Reduce in gill irrigation",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Pond application", dose: "500 Gm per HA of 1 meter column" },
// // // //       { label: "Feed application", dose: "2–5 Gm/Kg feed" },
// // // //     ],
// // // //     presentation: "1 Kg Pouch",
// // // //     form: "Powder",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 27,
// // // //     name: "i.ECOSOFTVARE",
// // // //     category: "EDTA",
// // // //     type: "Water Treatment",
// // // //     certificate: "CAA - Not Required",
// // // //     composition:
// // // //       "Unique combination of Ethylene Diamine Tetra Acetic Acid (EDTA) formulated salt compounds.",
// // // //     benefits: [
// // // //       "Reduces the hardness levels to optimum lower levels there by stabilizing the alkalinity in the pond water completely prevents plankton crash",
// // // //       "i.Ecosoftvare is used to improve water quality by reducing heavy metal concentrations",
// // // //       "Stabilizes the total Ammonia levels there by minimise the free ammonia in the pond water",
// // // //       "Helps to create toxic free environment",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "General application", dose: "Mix 1–2 kgs in 50 Ltrs of water and spray over 1 Acre evenly" },
// // // //       { label: "Best practice", dose: "Apply in day light for better results or as advised by Aqua consultant" },
// // // //     ],
// // // //     presentation: "1 Kg / 5 kg Pouch",
// // // //     form: "Powder",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 28,
// // // //     name: "i.NITRONILVARE",
// // // //     category: "Nitrite Control",
// // // //     type: "Water Treatment",
// // // //     certificate: "CAA/OCT22/PRO/04253",
// // // //     composition:
// // // //       "Nitrosomonas, Nitrobacter, Thiobacillus Thioxidans, Thiobacillus Ferroxidans, Thiobacillus Denitrificans, Paracoccus Denitrificans, N. Protease, Fungal Phytase, Fungal Alpha Amylase.",
// // // //     benefits: [
// // // //       "It reduces nitrites (No2) content in water to safe level",
// // // //       "i.NITRONILVARE is powerful water treatment additive for aquaculture pond",
// // // //       "It prevents formation of black soil due to decay of organic pollutant Improves water quality and enhances survival rate",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "Prawn/Shrimp", dose: "1 Kg/acre once in every 10 days" },
// // // //       { label: "Fish", dose: "1 Kg/acre once in every one month or advised by aqua consultant" },
// // // //     ],
// // // //     presentation: "1 Kg Bottle",
// // // //     form: "Powder",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 29,
// // // //     name: "Calcium Chloride (Fused)",
// // // //     category: "Chloride Salts",
// // // //     type: "Minerals",
// // // //     certificate: "CAA/OCT22/CHEM/04252",
// // // //     composition: "Calcium Chloride Fused.",
// // // //     benefits: [
// // // //       "Calcium has an important role in the biological processes of fish & shrimp. It is necessary for bone formation, blood clotting and their metabolic reactions",
// // // //       "Sodium and potassium are the most important salts in fish & shrimp blood and are critical for normal heat, nerve and muscle function",
// // // //       "Fish & shrimp can absorb calcium directly from the water of food",
// // // //       "The re-absorption of salt can reduce the energy available for growth",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "General application", dose: "5 to 10 Kgs per acre" },
// // // //       { label: "Best Practice", dose: "For best results apply in the evening hours" },
// // // //     ],
// // // //     presentation: "25 Kgs Drum (5 Kg x 5 Packs)",
// // // //     form: "Fused",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 30,
// // // //     name: "Magnesium Chloride (Crystal)",
// // // //     category: "Chloride Salts",
// // // //     type: "Minerals",
// // // //     certificate: "CAA/OCT22/CHEM/04251",
// // // //     composition: "Magnesium Chloride 97% ± 2%.",
// // // //     benefits: [
// // // //       "Covers the Magnesium balance of pond water",
// // // //       "Protects from soft shell syndrome",
// // // //       "Regularizes the moult cycle",
// // // //       "Increase survival and body weight rate",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "General application", dose: "5 to 10 Kgs per acre" },
// // // //     ],
// // // //     presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
// // // //     form: "Crystal",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 31,
// // // //     name: "Potassium Chloride (Crystal)",
// // // //     category: "Chloride Salts",
// // // //     type: "Minerals",
// // // //     certificate: "CAA/OCT22/CHEM/04256",
// // // //     composition: "Potassium Chloride 97% ± 2%.",
// // // //     benefits: [
// // // //       "Protects from soft shell syndrome",
// // // //       "Increase survival and body weight rate",
// // // //       "Regularizes the moult cycles",
// // // //       "Covers the Potassium balance of pond water",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "General application", dose: "5 to 8 Kgs per acre" },
// // // //     ],
// // // //     presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
// // // //     form: "Crystal",
// // // //     storage: "Keep in cool and dry place.",
// // // //   },
// // // //   {
// // // //     id: 32,
// // // //     name: "i.FERRICCHLORIVARE",
// // // //     category: "Ferric Chloride",
// // // //     type: "Minerals",
// // // //     certificate: "CAA/ARPIL 2025/CHEM/07491",
// // // //     composition: "Ferric Chloride Anhydrous – 98% ± 2%. Assay: Min 98.0%.",
// // // //     benefits: [
// // // //       "Highly effective at removing suspended solids, Organic matter & Heavy metals from the Pond water",
// // // //       "It helps to prevent the overgrowth of Algae in Pond water",
// // // //       "Use as Iron supplement",
// // // //       "Improves Pond water bottom quality",
// // // //       "It helps to precipitate and inactive inorganic phosphorous in Pond water",
// // // //     ],
// // // //     dosage: [
// // // //       { label: "General", dose: "Consult our field staff or your aquaculture specialist for specific usage and directions" },
// // // //     ],
// // // //     presentation: "50 Kgs Drum (5Kg x 10 Packs)",
// // // //     form: "Crystal",
// // // //     storage: "Keep in cool and dry place. Special Instruction: No liability accepted for accidents arising while handling or use.",
// // // //   },
// // // // ];

// // // // // ─── Product Image Map ────────────────────────────────────────────────────────
// // // // // Maps product ID → actual filename in /public/images/
// // // // const PRODUCT_IMAGES: Record<number, string> = {
// // // //   1:  "minvare.png",           // i.MINVARE PM
// // // //   2:  "minare am (1).png",     // i.MINVARE AM
// // // //   3:  "minvare ws.png",        // i.MINVARE WS
// // // //   4:  "minvare fm 2.png",      // i.MINVARE FM
// // // //   5:  "minvare_liq.png",       // i.MINVARE LiQ
// // // //   6:  "propondvare 2.png",     // i.PROPONDVARE
// // // //   7:  "provare gut 2.png",     // i.PROVARE GUT
// // // //   8:  "vibriovare 2.png",      // i.VIBRIOVARE
// // // //   9:  "bio yeast.png",         // i.Bio'YEAST'vare
// // // //   10: "psbvare 2.png",         // i.PSBVARE
// // // //   11: "propondvare_liq.png",   // i.PROPONDVARE LiQ
// // // //   12: "ceevare 2.png",         // i.CEEVARE
// // // //   13: "phytovare 2.png",       // i.PHYTOVARE
// // // //   14: "livovare gel (1).png",  // i.LIVOVARE GEL
// // // //   15: "immunovare 2.png",      // i.IMMUNOVARE
// // // //   16: "heptopancvare.png",     // i.HEPTOPANCVARE
// // // //   17: "wfsvare gel 2.png",     // i.WFSVARE GEL
// // // //   18: "virahealvare 2.png",    // i.VIRAHEALVARE
// // // //   19: "sanvare_td 2.png",      // i.SANVARE TD
// // // //   20: "silvare_nano.png",      // i.SILVARE NANO
// // // //   21: "oxyvar 2.png",          // i.OXYVARE
// // // //   22: "oxyvare-t (1).png",     // i.OXYVARE-T
// // // //   23: "geoprovare.jpeg",       // i.GEOPROVARE G
// // // //   24: "geoprovare_p 2.png",    // i.GEOPROVARE P
// // // //   25: "geovare_p.png",         // i.GEOVARE P
// // // //   26: "nitronilvare.png",      // i.TOXIVARE  (closest match)
// // // //   27: "nitronilvare.png",      // i.ECOSOFTVARE (reuse until dedicated image added)
// // // //   28: "nitronilvare.png",      // i.NITRONILVARE
// // // //   29: "calcium chloride.png",  // Calcium Chloride
// // // //   30: "min.png",               // Magnesium Chloride
// // // //   31: "min.png",               // Potassium Chloride
// // // //   32: "ferric chloride 2.png", // i.FERRICCHLORIVARE
// // // // };

// // // // // ─── Category & Color Config ──────────────────────────────────────────────────
// // // // const CATEGORIES = [
// // // //   "All",
// // // //   "Minerals",
// // // //   "Probiotics",
// // // //   "Vitamins & Nutrition",
// // // //   "Health & Immunity",
// // // //   "Oxygen Products",
// // // //   "Water Treatment",
// // // //   "Zeolite Products",
// // // //   "Sanitizer",
// // // // ];

// // // // const TYPE_ACCENT: Record<string, { header: string; label: string; dot: string }> = {
// // // //   "Minerals":            { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" },
// // // //   "Probiotics":          { header: "#006644", label: "#008855", dot: "#006644" },
// // // //   "Vitamins & Nutrition":{ header: "#cc6600", label: "#dd7700", dot: "#cc6600" },
// // // //   "Health & Immunity":   { header: "#7700aa", label: "#9911cc", dot: "#7700aa" },
// // // //   "Oxygen Products":     { header: "#003399", label: "#0044bb", dot: "#003399" },
// // // //   "Water Treatment":     { header: "#005566", label: "#007788", dot: "#005566" },
// // // //   "Zeolite Products":    { header: "#664400", label: "#886600", dot: "#664400" },
// // // //   "Sanitizer":           { header: "#aa0000", label: "#cc1111", dot: "#aa0000" },
// // // // };

// // // // const getAccent = (type: string) =>
// // // //   TYPE_ACCENT[type] || { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" };

// // // // // ─── SVG Placeholder (shown when no image available) ─────────────────────────
// // // // function ProductPlaceholder({ color }: { color: string }) {
// // // //   return (
// // // //     <svg
// // // //       width="56"
// // // //       height="56"
// // // //       viewBox="0 0 56 56"
// // // //       fill="none"
// // // //       xmlns="http://www.w3.org/2000/svg"
// // // //       style={{ opacity: 0.22 }}
// // // //     >
// // // //       {/* Flask / bottle shape */}
// // // //       <rect x="21" y="6" width="14" height="10" rx="2" fill={color} />
// // // //       <path
// // // //         d="M18 16h20l6 24a6 6 0 01-6 6H18a6 6 0 01-6-6l6-24z"
// // // //         fill={color}
// // // //       />
// // // //       <ellipse cx="28" cy="34" rx="7" ry="5" fill="white" opacity="0.4" />
// // // //       <rect x="24" y="8" width="3" height="8" rx="1" fill="white" opacity="0.5" />
// // // //     </svg>
// // // //   );
// // // // }

// // // // // ─── PDF-Style Product Card ───────────────────────────────────────────────────
// // // // function PDFCard({ product }: { product: Product }) {
// // // //   const ac = getAccent(product.type);
// // // //   const [imgError, setImgError] = useState(false);
// // // //   const imgSrc = PRODUCT_IMAGES[product.id]
// // // //     ? `/images/${PRODUCT_IMAGES[product.id]}`
// // // //     : null;

// // // //   return (
// // // //     <div
// // // //       className="w-full bg-white rounded-xl overflow-hidden"
// // // //       style={{
// // // //         border: `2px solid ${ac.header}33`,
// // // //         boxShadow: "0 2px 16px rgba(0,50,120,0.08)",
// // // //       }}
// // // //     >
// // // //       {/* ── TOP HEADER ── */}
// // // //       <div className="flex items-stretch" style={{ borderBottom: `2px solid ${ac.header}` }}>
// // // //         {/* Blank spacer aligned with hex column */}
// // // //         <div
// // // //           style={{
// // // //             width: 110,
// // // //             flexShrink: 0,
// // // //             background: "#f0f6ff",
// // // //             borderRight: `1px solid ${ac.header}33`,
// // // //           }}
// // // //         />
// // // //         {/* Category */}
// // // //         <div className="flex items-center px-5 py-2 flex-1" style={{ background: "white" }}>
// // // //           <span
// // // //             className="font-black uppercase tracking-wide"
// // // //             style={{ color: ac.header, fontSize: 14, letterSpacing: 1, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // // //           >
// // // //             {product.category}
// // // //           </span>
// // // //         </div>
// // // //         {/* Certificate */}
// // // //         {product.certificate && (
// // // //           <div
// // // //             className="flex items-center px-4 py-2"
// // // //             style={{
// // // //               background: "#fff8f0",
// // // //               borderLeft: `1px solid ${ac.header}44`,
// // // //               borderRight: `1px solid ${ac.header}44`,
// // // //             }}
// // // //           >
// // // //             <span
// // // //               className="font-bold"
// // // //               style={{ color: "#cc3300", fontSize: 11, fontFamily: "monospace", whiteSpace: "nowrap" }}
// // // //             >
// // // //               {product.certificate}
// // // //             </span>
// // // //           </div>
// // // //         )}
// // // //         {/* Product name chip */}
// // // //         <div
// // // //           className="flex items-center px-5 py-2"
// // // //           style={{ background: ac.header, minWidth: 180 }}
// // // //         >
// // // //           <span
// // // //             className="font-black text-white tracking-wide"
// // // //             style={{ fontSize: 15, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // // //           >
// // // //             <em style={{ opacity: 0.8, fontStyle: "italic" }}>i</em>
// // // //             {product.name.replace(/^i[.\-']/i, "")}
// // // //           </span>
// // // //           {product.badge && (
// // // //             <span
// // // //               className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
// // // //               style={{ background: "rgba(255,255,255,0.2)", color: "white", whiteSpace: "nowrap" }}
// // // //             >
// // // //               {product.badge}
// // // //             </span>
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {/* ── BODY ROW ── */}
// // // //       <div className="flex" style={{ minHeight: 220 }}>

// // // //         {/* ── COL 1: Hexagon with product image ── */}
// // // //         <div
// // // //           className="flex-none flex items-center justify-center"
// // // //           style={{
// // // //             width: 110,
// // // //             background: `linear-gradient(160deg, ${ac.header}15 0%, ${ac.header}08 100%)`,
// // // //             borderRight: `1px solid ${ac.header}22`,
// // // //             padding: "16px 10px",
// // // //           }}
// // // //         >
// // // //           {/* Outer hex — colored border ring */}
// // // //           <div
// // // //             style={{
// // // //               width: 78,
// // // //               height: 86,
// // // //               clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// // // //               background: ac.header,
// // // //               display: "flex",
// // // //               alignItems: "center",
// // // //               justifyContent: "center",
// // // //             }}
// // // //           >
// // // //             {/* Gap layer — white ring between border and image */}
// // // //             <div
// // // //               style={{
// // // //                 width: "calc(100% - 6px)",
// // // //                 height: "calc(100% - 6px)",
// // // //                 clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// // // //                 background: "white",
// // // //                 display: "flex",
// // // //                 alignItems: "center",
// // // //                 justifyContent: "center",
// // // //               }}
// // // //             >
// // // //               {/* Inner hex — clips image, with inset padding for gap */}
// // // //               <div
// // // //                 style={{
// // // //                   width: "calc(100% - 8px)",
// // // //                   height: "calc(100% - 8px)",
// // // //                   clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// // // //                   background: "#EEF4FF",
// // // //                   display: "flex",
// // // //                   alignItems: "center",
// // // //                   justifyContent: "center",
// // // //                   overflow: "hidden",
// // // //                   position: "relative",
// // // //                 }}
// // // //               >
// // // //               {/* ── Actual product image ── */}
// // // //               {imgSrc && !imgError ? (
// // // //                 <Image
// // // //                   src={imgSrc}
// // // //                   alt={product.name}
// // // //                   fill
// // // //                   style={{ objectFit: "contain", padding: "6px" }}
// // // //                   onError={() => setImgError(true)}
// // // //                 />
// // // //               ) : (
// // // //                 /* ── SVG placeholder when no image — NO text shown ── */
// // // //                 <ProductPlaceholder color={ac.header} />
// // // //               )}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* ── COL 2: Benefits ── */}
// // // //         <div
// // // //           className="flex-1 p-4"
// // // //           style={{ borderRight: `1px solid ${ac.header}22`, background: "white", minWidth: 0 }}
// // // //         >
// // // //           <div
// // // //             className="font-bold mb-2 uppercase tracking-wide"
// // // //             style={{ color: ac.header, fontSize: 11 }}
// // // //           >
// // // //             Benefits:
// // // //           </div>
// // // //           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
// // // //             {product.benefits.map((b, i) => (
// // // //               <li
// // // //                 key={i}
// // // //                 style={{
// // // //                   fontSize: 11.5,
// // // //                   color: "#1e2d3d",
// // // //                   lineHeight: 1.6,
// // // //                   paddingLeft: 14,
// // // //                   paddingBottom: 3,
// // // //                   position: "relative",
// // // //                   fontFamily: "'Segoe UI', system-ui, sans-serif",
// // // //                 }}
// // // //               >
// // // //                 <span
// // // //                   style={{
// // // //                     position: "absolute",
// // // //                     left: 1,
// // // //                     top: "0.15em",
// // // //                     color: ac.header,
// // // //                     fontSize: 13,
// // // //                     lineHeight: 1,
// // // //                   }}
// // // //                 >
// // // //                   •
// // // //                 </span>
// // // //                 {b}
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>

// // // //         {/* ── COL 3: Composition ── */}
// // // //         <div
// // // //           className="p-4"
// // // //           style={{
// // // //             width: 240,
// // // //             flexShrink: 0,
// // // //             borderRight: `1px solid ${ac.header}22`,
// // // //             background: "#fafeff",
// // // //           }}
// // // //         >
// // // //           <div
// // // //             className="font-bold mb-2 uppercase tracking-wide"
// // // //             style={{ color: ac.header, fontSize: 11 }}
// // // //           >
// // // //             Composition:
// // // //           </div>
// // // //           <p
// // // //             style={{
// // // //               fontSize: 11,
// // // //               color: "#2a3c50",
// // // //               lineHeight: 1.7,
// // // //               textAlign: "justify",
// // // //               hyphens: "auto",
// // // //               fontFamily: "'Segoe UI', system-ui, sans-serif",
// // // //             }}
// // // //           >
// // // //             {product.composition}
// // // //           </p>
// // // //         </div>

// // // //         {/* ── COL 4: Dosage + Presentation / Form / Storage ── */}
// // // //         <div
// // // //           className="p-4"
// // // //           style={{
// // // //             width: 200,
// // // //             flexShrink: 0,
// // // //             background: "#f7faff",
// // // //           }}
// // // //         >
// // // //           <div
// // // //             className="font-bold mb-1.5 uppercase tracking-wide"
// // // //             style={{ color: ac.header, fontSize: 11 }}
// // // //           >
// // // //             Dosage:
// // // //           </div>
// // // //           {product.dosage.map((d, i) => (
// // // //             <div key={i} style={{ marginBottom: 6 }}>
// // // //               <div
// // // //                 style={{
// // // //                   fontSize: 10,
// // // //                   fontWeight: 700,
// // // //                   color: ac.label,
// // // //                   lineHeight: 1.3,
// // // //                   marginBottom: 1,
// // // //                 }}
// // // //               >
// // // //                 {d.label}:
// // // //               </div>
// // // //               <div style={{ fontSize: 10.5, color: "#1a2b3c", lineHeight: 1.55 }}>
// // // //                 {d.dose}
// // // //               </div>
// // // //             </div>
// // // //           ))}

// // // //           <div
// // // //             style={{
// // // //               borderTop: `1px solid ${ac.header}33`,
// // // //               marginTop: 10,
// // // //               paddingTop: 10,
// // // //             }}
// // // //           >
// // // //             <div
// // // //               className="font-bold uppercase"
// // // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // // //             >
// // // //               Presentation:
// // // //             </div>
// // // //             <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6, lineHeight: 1.4 }}>
// // // //               {product.presentation}
// // // //             </div>

// // // //             <div
// // // //               className="font-bold uppercase"
// // // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // // //             >
// // // //               Form:
// // // //             </div>
// // // //             <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6 }}>
// // // //               {product.form}
// // // //             </div>

// // // //             <div
// // // //               className="font-bold uppercase"
// // // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // // //             >
// // // //               Storage &amp; Caution:
// // // //             </div>
// // // //             <div style={{ fontSize: 11, color: "#1a2b3c", lineHeight: 1.5 }}>
// // // //               {product.storage}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── Main Page ────────────────────────────────────────────────────────────────
// // // // export default function CataloguePage() {
// // // //   const [activeCategory, setActiveCategory] = useState("All");
// // // //   const [search, setSearch] = useState("");
// // // //   const gridRef = useRef<HTMLDivElement>(null);

// // // //   const filtered = PRODUCTS.filter((p) => {
// // // //     const matchCat =
// // // //       activeCategory === "All" ||
// // // //       p.type === activeCategory ||
// // // //       (activeCategory === "Sanitizer" && p.badge === "Sanitizer");
// // // //     const q = search.toLowerCase();
// // // //     const matchSearch =
// // // //       !q ||
// // // //       p.name.toLowerCase().includes(q) ||
// // // //       p.category.toLowerCase().includes(q) ||
// // // //       p.composition.toLowerCase().includes(q) ||
// // // //       p.benefits.some((b) => b.toLowerCase().includes(q));
// // // //     return matchCat && matchSearch;
// // // //   });

// // // //   return (
// // // //     <div
// // // //       className="min-h-screen bg-[#eef3f9]"
// // // //       style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // // //     >
// // // //       {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
// // // //       <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2557] via-[#2A5DA8] to-[#0e7fc2]">
// // // //         <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border-[80px] border-white/5 translate-x-48 -translate-y-48 pointer-events-none" />
// // // //         <div className="absolute top-12 right-64 w-[300px] h-[300px] rounded-full border-[50px] border-white/5 pointer-events-none" />
// // // //         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border-[60px] border-white/5 -translate-x-32 translate-y-32 pointer-events-none" />
// // // //         <div
// // // //           className="absolute inset-0 opacity-5 pointer-events-none"
// // // //           style={{
// // // //             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,2 55,16 55,44 30,58 5,44 5,16' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
// // // //             backgroundSize: "60px 60px",
// // // //           }}
// // // //         />

// // // //         <div className="relative z-10 max-w-screen-2xl mx-auto px-8 py-14">
// // // //           <div className="flex items-start justify-between gap-8 flex-wrap">
// // // //             <div>
// // // //               {/* ── Logo / brand block ── */}
// // // //               <div className="flex items-center gap-3 mb-5">
// // // //                 <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center flex-shrink-0">
// // // //                   <span className="text-white font-black text-xl italic">i</span>
// // // //                 </div>
// // // //                 <div className="flex flex-col items-start">
// // // //                   <p className="text-white text-sm font-semibold leading-tight">
// // // //                     Innovare Biopharma LLP
// // // //                   </p>
// // // //                   <p className="text-white/50 text-[11px] leading-tight">
// // // //                     Solution to Aquaculture Health
// // // //                   </p>
// // // //                 </div>
// // // //               </div>

// // // //               {/* ── Heading aligned to logo text left edge (w-12 icon + gap-3 = ~60px offset) ── */}
// // // //               <div className="pl-[60px]">
// // // //                 <h1 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
// // // //                   Product
// // // //                   <br />
// // // //                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
// // // //                     Catalogue
// // // //                   </span>
// // // //                 </h1>
// // // //                 <p className="mt-4 text-white/65 text-sm max-w-xl leading-relaxed">
// // // //                   Complete reference guide — compositions, benefits, dosages and certifications for all Innovare Biopharma aquaculture solutions.
// // // //                 </p>
// // // //                 <div className="flex flex-wrap gap-3 mt-6">
// // // //                   {[
// // // //                     { value: `${PRODUCTS.length}+`, label: "Products" },
// // // //                     { value: "ISO 9001:2015", label: "Certified" },
// // // //                     { value: "GMP", label: "Quality Practice" },
// // // //                     { value: "MSME", label: "Registered" },
// // // //                   ].map((s) => (
// // // //                     <div
// // // //                       key={s.label}
// // // //                       className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3"
// // // //                     >
// // // //                       <div className="text-white font-black text-lg leading-none">{s.value}</div>
// // // //                       <div className="text-white/55 text-[11px] font-semibold mt-0.5">{s.label}</div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Search */}
// // // //             <div className="flex flex-col gap-2 mt-2">
// // // //               <div className="relative">
// // // //                 <input
// // // //                   type="text"
// // // //                   placeholder="Search products, ingredients, benefits..."
// // // //                   value={search}
// // // //                   onChange={(e) => setSearch(e.target.value)}
// // // //                   className="w-80 pl-10 pr-4 py-3 rounded-2xl border border-white/25 bg-white/10 text-white placeholder-white/40 text-sm outline-none focus:bg-white/20 focus:border-white/50 transition-all"
// // // //                 />
// // // //                 <svg
// // // //                   className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
// // // //                   width="16"
// // // //                   height="16"
// // // //                   viewBox="0 0 24 24"
// // // //                   fill="none"
// // // //                   stroke="currentColor"
// // // //                   strokeWidth="2"
// // // //                 >
// // // //                   <circle cx="11" cy="11" r="8" />
// // // //                   <path d="m21 21-4.35-4.35" />
// // // //                 </svg>
// // // //               </div>
// // // //               <p className="text-white/40 text-xs text-right">
// // // //                 Showing{" "}
// // // //                 <span className="text-white/80 font-bold">{filtered.length}</span> of{" "}
// // // //                 {PRODUCTS.length} products
// // // //               </p>
// // // //             </div>
// // // //           </div>

// // // //           {/* ── Category Filter Tabs ── */}
// // // //           <div className="mt-8 flex flex-wrap gap-2">
// // // //             {CATEGORIES.map((cat) => {
// // // //               const active = activeCategory === cat;
// // // //               const count =
// // // //                 cat === "All"
// // // //                   ? PRODUCTS.length
// // // //                   : PRODUCTS.filter(
// // // //                       (p) =>
// // // //                         p.type === cat ||
// // // //                         (cat === "Sanitizer" && p.badge === "Sanitizer")
// // // //                     ).length;
// // // //               return (
// // // //                 <button
// // // //                   key={cat}
// // // //                   onClick={() => setActiveCategory(cat)}
// // // //                   className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200"
// // // //                   style={{
// // // //                     background: active ? "white" : "rgba(255,255,255,0.1)",
// // // //                     color: active ? "#0f2557" : "rgba(255,255,255,0.75)",
// // // //                     border: active ? "none" : "1px solid rgba(255,255,255,0.2)",
// // // //                     boxShadow: active ? "0 4px 14px rgba(0,0,0,0.15)" : "none",
// // // //                   }}
// // // //                 >
// // // //                   {cat}
// // // //                   <span
// // // //                     className="rounded-full px-1.5 py-0.5"
// // // //                     style={{
// // // //                       background: active ? "#2A5DA8" : "rgba(255,255,255,0.15)",
// // // //                       color: active ? "white" : "rgba(255,255,255,0.7)",
// // // //                       fontSize: 9,
// // // //                       fontWeight: 800,
// // // //                     }}
// // // //                   >
// // // //                     {count}
// // // //                   </span>
// // // //                 </button>
// // // //               );
// // // //             })}
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* ══ PRODUCT LIST ════════════════════════════════════════════════════════ */}
// // // //       <div className="max-w-screen-2xl mx-auto px-6 py-8" ref={gridRef}>
// // // //         {filtered.length === 0 ? (
// // // //           <div className="flex flex-col items-center py-32 text-gray-400">
// // // //             <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
// // // //               <svg
// // // //                 width="32"
// // // //                 height="32"
// // // //                 viewBox="0 0 24 24"
// // // //                 fill="none"
// // // //                 stroke="#9ca3af"
// // // //                 strokeWidth="1.5"
// // // //               >
// // // //                 <circle cx="11" cy="11" r="8" />
// // // //                 <path d="m21 21-4.35-4.35" />
// // // //               </svg>
// // // //             </div>
// // // //             <p className="font-semibold text-base text-gray-500">No products found</p>
// // // //             <button
// // // //               onClick={() => {
// // // //                 setSearch("");
// // // //                 setActiveCategory("All");
// // // //               }}
// // // //               className="mt-4 px-5 py-2 rounded-xl bg-[#2A5DA8] text-white text-sm font-semibold"
// // // //             >
// // // //               Clear Filters
// // // //             </button>
// // // //           </div>
// // // //         ) : (
// // // //           <div className="flex flex-col gap-5">
// // // //             {filtered.map((p) => (
// // // //               <PDFCard key={p.id} product={p} />
// // // //             ))}
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // }
// // // "use client";

// // // import Footer from "@/components/Footer";
// // // import Image from "next/image";
// // // import { useState, useRef } from "react";

// // // // ─── Types ────────────────────────────────────────────────────────────────────
// // // type Product = {
// // //   id: number;
// // //   name: string;
// // //   category: string;
// // //   type: string;
// // //   certificate: string;
// // //   composition: string;
// // //   benefits: string[];
// // //   dosage: { label: string; dose: string }[];
// // //   presentation: string;
// // //   form: string;
// // //   storage: string;
// // //   badge?: string;
// // //   tag?: string;
// // // };

// // // // ─── Data ─────────────────────────────────────────────────────────────────────
// // // const PRODUCTS: Product[] = [
// // //   {
// // //     id: 1,
// // //     name: "i.MINVARE PM",
// // //     category: "Pond Minerals",
// // //     type: "Minerals",
// // //     certificate: "CAA/JAN22/FA/03765",
// // //     composition:
// // //       "Innovative blend of essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Phosphorus, Copper, Sodium; Amino acids: DL-Methionine, L-Lysine; Probiotics: Bacillus subtilis 10B, Bacillus licheniformis 10B, Bacillus Coagulans 10B, Lactobacillus acidophilus 10B, Saccharomyces cervisiae 10B.",
// // //     benefits: [
// // //       "Improves F.C.R",
// // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // //       "Maintain pH of pond water",
// // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // //       "Helps for immune response and defence mechanism",
// // //       "Helps in uniform growth in shrimp and fish",
// // //     ],
// // //     dosage: [
// // //       { label: "Shrimp/Prawn", dose: "10 kgs per Acre" },
// // //       { label: "Fish", dose: "3 kgs per Acre" },
// // //     ],
// // //     presentation: "10 Kg's Pouch",
// // //     form: "Powder",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "i.MINVARE AM",
// // //     category: "Pond Minerals",
// // //     type: "Minerals",
// // //     certificate: "",
// // //     composition:
// // //       "Innovative blend of essential Micro and Macro Minerals: Calcium, Dolomite, Sulphates containing Magnesium, Manganese, Zinc, Ferrous, Copper; Sodium Chlorides; Potassium; Phosphates: Di Calcium, Rock, Mono Sodium, Mono Potassium.",
// // //     benefits: [
// // //       "Improves F.C.R",
// // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // //       "Maintain pH of pond water",
// // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // //       "Helps for immune response and defence mechanism",
// // //       "Helps in uniform growth in shrimp and fish",
// // //     ],
// // //     dosage: [
// // //       { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
// // //       { label: "Fish", dose: "5 Kgs per Acre" },
// // //     ],
// // //     presentation: "20 kg Bag",
// // //     form: "Powder",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "i.MINVARE WS",
// // //     category: "Pond Minerals",
// // //     type: "Minerals",
// // //     certificate: "CAA/APRIL 2025/MIN/07490",
// // //     composition:
// // //       "Innovative blend of essential Macro Minerals: Calcium, Dolomite, Zeolite; Sulphates: Magnesium, Manganese, Zinc, Ferrous, Copper; Chlorides: Potassium; Phosphates: Di Calcium, Rock, Sodium.",
// // //     benefits: [
// // //       "Improves F.C.R",
// // //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// // //       "Maintain pH of pond water",
// // //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// // //       "Improve Phytoplankton and Zooplankton in the pond water",
// // //       "Helps for immune response and defence mechanism",
// // //       "Helps in uniform growth in shrimp and fish",
// // //     ],
// // //     dosage: [
// // //       { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
// // //       { label: "Fish", dose: "5 Kgs per Acre" },
// // //     ],
// // //     presentation: "20 Kgs Bag",
// // //     form: "Powder",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 4,
// // //     name: "i.MINVARE FM",
// // //     category: "Feed Minerals",
// // //     type: "Minerals",
// // //     certificate: "CAA/JAN22/FA/03766",
// // //     composition:
// // //       "Essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Cobalt, Phosphorus, Copper, Selenium; Vitamins B2, B12, AD3, E; Amino acids: DL-Methionine, L-Lysine; Probiotics; Enzymes: Amylase, Protease, Cellulose, β.Galactose.",
// // //     benefits: [
// // //       "Improves F.C.R",
// // //       "Protects from shell and muscle related problems",
// // //       "Helps in moulting process and formation of exoskeleton in shrimp",
// // //       "Improves hormonal and enzymatic activities in shrimp",
// // //       "Protection from loose shell syndrome",
// // //       "Improves metabolism",
// // //       "Promotes fast body growth and gains more body weight",
// // //       "Improves effectively the digestive system",
// // //     ],
// // //     dosage: [
// // //       { label: "Shrimp/Prawn", dose: "5–8 gm/kg feed" },
// // //       { label: "Fish", dose: "1–3 kgs per ton feed" },
// // //     ],
// // //     presentation: "1 Kg & 5 Kg's Pouch",
// // //     form: "Powder",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 5,
// // //     name: "i.MINVARE LiQ",
// // //     category: "Liquid Minerals",
// // //     type: "Minerals",
// // //     certificate: "",
// // //     composition:
// // //       "Innovative mixture of optimal liquid blend of balanced essential Macro and Trace element Aqua culture feed supplements minerals: Amino Protein 2g, Buffer phosphonic acid 2.5g, Calcium lactate 1.5g, Calcium phosphate monobasic 5.5g, Citric acid 2g, Di potassium phosphate 5.35g, Di sodium phosphate 3.25g, Magnesium citrate 750mg, Potassium chloride 1.5g, Sodium citrate 2.5g, Trace mineral complex (Glycinated) 2g, DM water Q.S.",
// // //     benefits: [
// // //       "Prevents and controls white muscle / soft shell syndrome and body cramping problem",
// // //       "Improves and enhances the development of phytoplankton and zooplankton",
// // //       "Regulates the moulting cycle and survival rate",
// // //       "Balances minerals deficiency in water, soil and shrimp",
// // //       "Improves metabolism, digestive system and FCR",
// // //       "Improves mineral absorption and pond water nutrition",
// // //     ],
// // //     dosage: [
// // //       { label: "Pond Application", dose: "50 Ltrs/Acre (once every 10 days)" },
// // //       { label: "Feed Application", dose: "5–10 ml/kg feed (30 min before feeding)" },
// // //     ],
// // //     presentation: "1 Ltr Bottle",
// // //     form: "Liquid",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 6,
// // //     name: "i.PROPONDVARE",
// // //     category: "Water & Soil Probiotics",
// // //     type: "Probiotics",
// // //     certificate: "CAA/JAN22/PRO/03769",
// // //     composition:
// // //       "Bacillus subtilis, Bacillus megaterium, Bacillus licheniformis, Bacillus polymyxa, Bacillus pumilis, Saccharomyces cerevisiae, Cellulomanas cartae, p.pantotrophus, Nitrosomonas, Nitrobacter, Pseidomonas denitricans, l.plantarum, l.acidophilus, Rhodobacter sphaeroides, Thiobacillus thiooxidans & Thiobacillus ferroxidans.",
// // //     benefits: [
// // //       "Degradation of organic waste and maintains phytoplankton bloom",
// // //       "Improves water and soil quality and increases aquatic animal production",
// // //       "Stabilizes pond pH and maintains optimum alkalinity",
// // //       "Increases collagen synthesis and accelerates encrustation",
// // //       "Removes unwanted micro-organisms",
// // //       "Strengthens the immune system",
// // //     ],
// // //     dosage: [
// // //       { label: "Initial booster (Shrimp/Prawn/Fish)", dose: "1.5 Kg/Ha" },
// // //       { label: "Maintenance", dose: "1 Kg/Ha every 7–10 days" },
// // //     ],
// // //     presentation: "1 kg Bottle",
// // //     form: "Powder",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 7,
// // //     name: "i.PROVARE GUT",
// // //     category: "Gut Probiotics",
// // //     type: "Probiotics",
// // //     certificate: "CAA/JAN22/PRO/03771",
// // //     composition:
// // //       "High strength GUT Probiotics: Lactobacillus plantarum, Lactobacillus acidophilus, Saccharomyces cervisiae; Enzymes: N Protease and Fungal phytase; Herbal extracts: Phyllanthus emblica Linn., Zingiber officinale and Trigonella foenum-graecum.",
// // //     benefits: [
// // //       "Improves digestion and feed intake while protecting GUT health",
// // //       "Prevents the occurrence of Mycosporidia infection",
// // //       "Prevents development of pathogenic bacteria and affects to maintain the GUT micro flora",
// // //       "Improves FCR and lower GUT pH",
// // //       "Support health, performance and growth of aquatic species",
// // //       "Prevents the onset of loose shell syndrome",
// // //     ],
// // //     dosage: [
// // //       { label: "Shrimp", dose: "5–10 Grams per Kg feed" },
// // //       { label: "Fish", dose: "10–15 Grams per Kg feed" },
// // //     ],
// // //     presentation: "1 kg Bottle",
// // //     form: "Powder",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 8,
// // //     name: "i.VIBRIOVARE",
// // //     category: "Vibrio Control",
// // //     type: "Probiotics",
// // //     certificate: "CAA - Under Process",
// // //     composition:
// // //       "Bacillus magaterium (2.5B), Bacillus polymyxa (2.5B), Bacillus pumilus (2.5B), Paracoccus marginatus (0.5B), Paracoccus pantotropus (2B), Streptococcus thermophillus (2.5B), Bacillus amyloliquificans (1B), Bacillus mesentrices (0.5B), Enterococcus facium (2.5B), Lactobacillus rhamnosus (2B), Lactobacillus sporogenous (1B), Pediococcus Acidilactici (0.5B), Mannan Oligo Saccharide (MOS), Beta Glucins B 1-3, B 1-4, B 1-6, Alpha-Amylase (Banu) 250 IU, Lipase 250 IU, N protease 10000 IU, Phytase 200 IU, Xylanase 2000 IU, Maltodextrin (Malto), Starch Powder.",
// // //     benefits: [
// // //       "Highly prevents the Vibrio bacteria infections in Pond water",
// // //       "Controls the running mortality in Shrimp",
// // //       "Helps to maintain the microbial balance in the Shrimp intestine",
// // //       "Inhibit the communication of Vibrio Spp were presented",
// // //       "Increases the immune system and improves the FCR",
// // //     ],
// // //     dosage: [
// // //       { label: "Before stocking", dose: "1 Kg of Tablets per acre; if Vibriosis: 250 Grams/Acre" },
// // //       { label: "Maintenance", dose: "500 Grams per Acre every 7–10 days for 15 days" },
// // //     ],
// // //     presentation: "500 g Bottle",
// // //     form: "Tablet",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 9,
// // //     name: "i.Bio'YEAST'vare",
// // //     category: "Yeast Probiotics",
// // //     type: "Probiotics",
// // //     certificate: "CAA/OCT22/PRO/04250",
// // //     composition:
// // //       "Unique combination of Saccharomyces cerevisiae, Bacillus Subtilis.",
// // //     benefits: [
// // //       "Stimulates feed digestion",
// // //       "Prevents and Controls Pathogenic Bacteria",
// // //       "Enhanced survival rate",
// // //       "Improves pond conditions with good plankton and beneficial bacterial density",
// // //     ],
// // //     dosage: [
// // //       { label: "Feed supplement", dose: "2–3g/Kg feed" },
// // //       { label: "Fermentation", dose: "1 Kg along with 10 Kgs Rice Bran and 2 Kgs Jaggery" },
// // //       { label: "Pond application", dose: "1–2 Kg/Acre" },
// // //     ],
// // //     presentation: "1 kg Pouch",
// // //     form: "Powder",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 10,
// // //     name: "i.PSBVARE",
// // //     category: "Photosynthetic Bacteria",
// // //     type: "Probiotics",
// // //     certificate: "CAA/OCT22/PRO/04254",
// // //     composition: "Rhodopseudomonas palustris – 20 Billion CFU/gm.",
// // //     benefits: [
// // //       "Improves the quality of water in ponds",
// // //       "Helps decompose many toxic matters such as nitrous acid, organic materials, ammonia, pond sludge, and hydrogen sulphide",
// // //       "Decreasing diseases by restraining the pathogenic bacteria counts in the water",
// // //       "Removes black soil & H₂S formed mostly by anaerobic decomposition of organic matter",
// // //       "Improves the appetite of fish and shrimps and helps botanical plankton growth",
// // //     ],
// // //     dosage: [
// // //       { label: "Initial regular use (Shrimp/Prawn/Fish)", dose: "250 Grms/Acre" },
// // //       { label: "Later stage (black soil & H₂S)", dose: "500 Grms/Acre" },
// // //     ],
// // //     presentation: "500 g Bottle",
// // //     form: "Powder",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 11,
// // //     name: "i.PROPONDVARE LiQ",
// // //     category: "Liquid Water & Soil Probiotics",
// // //     type: "Sanitizer",
// // //     certificate: "CAA - Under Process",
// // //     badge: "Sanitizer",
// // //     composition:
// // //       "Innovative mixture and optimal liquid multi-strain blend of 16 different essential formulation strains for soil & water probiotics: Bacillus amyloliquefaciens, Bacillus denitrificans, Bacillus licheniformis, Bacillus pumilus, Bacillus subtilis, Bafidiobacterium spp., Lactobacillus acidophilus, Lactobacillus plantarum, Lactobacillus rhamnosus, Nitrobacter spp., Paracoccus denitrificans, Paracoccus pentatrophus, Saccharomyces cerevisiae, Thiobacillus ferroxidans, Thiobacillus thioxidans, DM water Q.S.",
// // //     benefits: [
// // //       "Enhances gut health, improves feed conversation, growth & survival and boosts immunity",
// // //       "Strengthens gut micro-biota, improves digestion and enhances disease resistance",
// // //       "Converts toxic ammonia into nitrites (nitrification)",
// // //       "Reduces hydrogen sulfide and improves pond bottom conditions ecology and reduce sludge accumulation",
// // //       "Reduce disease outbreaks like White Spot Syndrome",
// // //       "Degrades organic waste, controls ammonia and suppresses Vibro spp",
// // //     ],
// // //     dosage: [
// // //       { label: "Before stocking (Soil Application)", dose: "2 L/Acre (7 days before)" },
// // //       { label: "During stocking (Pond Application)", dose: "1 L/Acre (once in every 10 days)" },
// // //       { label: "DO DOC", dose: "1.5 L/Acre (once in every 10 days)" },
// // //     ],
// // //     presentation: "1 Ltr Bottle",
// // //     form: "Liquid",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 12,
// // //     name: "i.CEEVARE",
// // //     category: "Vitamin C",
// // //     type: "Vitamins & Nutrition",
// // //     certificate: "CAA/JAN22/FA/03767",
// // //     composition: "Ascorbic acid (coated Vitamin C) Coated.",
// // //     benefits: [
// // //       "Improves F.C.R and survival rate",
// // //       "Assists in shell formation and muscle development",
// // //       "Increases body weight by acceleration of growth",
// // //       "Accelerates growth and gives higher survival rate",
// // //       "Prevents vibrio loads attack on shrimps",
// // //       "Facilitates tissue repairs and wound healing",
// // //     ],
// // //     dosage: [
// // //       { label: "Shrimp/Prawn (Normal Conditions)", dose: "2–3 g/1 kg feed at least twice a day" },
// // //       { label: "Under Stress condition", dose: "5g/1 kg feed or as directed by aqua consultant" },
// // //       { label: "Fish", dose: "2 g/1 kg of feed" },
// // //     ],
// // //     presentation: "1 Kg Bottle",
// // //     form: "Powder",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 13,
// // //     name: "i.PHYTOVARE",
// // //     category: "Phyto Extracts",
// // //     type: "Vitamins & Nutrition",
// // //     certificate: "USFDA & EU APPROVED",
// // //     badge: "Premium",
// // //     composition:
// // //       "Innovative blend of High Quality OREGANO (Oreganum Vulgare SSP. hirtum) essential plant extracts constituted of over 30 active ingredients of Carvacrol and Thymol etc.",
// // //     benefits: [
// // //       "Antimicrobial effects to maintain GUT health thereby reducing enteric diseases e.g. White Feces",
// // //       "Anti-oxidation to reduce stresses and protect liver",
// // //       "Increase growth rate and improve FCR",
// // //       "High-temperature (upto 120 Deg. C) stability and low disappearance rate in water",
// // //       "Increase survival rates and reduce disease occurrence",
// // //       "Enhances growth rate and feed efficiency improved reproductive success",
// // //     ],
// // //     dosage: [
// // //       { label: "Prawn/Shrimp (Healthy condition)", dose: "10 Grams/Kg compound feed" },
// // //       { label: "Infected condition", dose: "20 Grams/Kg compound feed" },
// // //       { label: "Fish Feed", dose: "50 Grams/Ton compound feed" },
// // //     ],
// // //     presentation: "500g Bottle",
// // //     form: "Powder",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 14,
// // //     name: "i.LIVOVARE GEL",
// // //     category: "Liver Tonic",
// // //     type: "Vitamins & Nutrition",
// // //     certificate: "CAA/JAN22/FA/03770",
// // //     composition:
// // //       "Vitamins: Vitamin C, B2, E; Amino acids: DL-Methionine and L-Lysine, and Binding agents; Nano Minerals: Nano Magnesium, Nano Calcium, Nano Potassium, Nano Zinc, Nano Selenium, Nano Cobalt, Nano Ferrous, Nano Chromium, Nano Manganese, Nano Phosphorus, Nano Molybdenum; Probiotics: Saccharomyces spp and Lactobacillus spp.",
// // //     benefits: [
// // //       "Improves the functional efficiency of the liver and pancreas",
// // //       "Promotes digestibility and improves F.C.R",
// // //       "Increases nutrient utilisation and reduce fat deposition",
// // //       "Ensures Uniform growth and early harvesting",
// // //       "Increase mineral absorption",
// // //     ],
// // //     dosage: [
// // //       { label: "Up to 10 weeks", dose: "10–15 ml per 1 kg feed" },
// // //       { label: "11 weeks and above", dose: "20–25 ml per 1 kg feed" },
// // //     ],
// // //     presentation: "20 Ltrs Barrel / 5 Ltrs Tin / 1 Ltr Bottle",
// // //     form: "Gel",
// // //     storage: "Keep in cool and dry place. *Shakewell before use.",
// // //   },
// // //   {
// // //     id: 15,
// // //     name: "i.IMMUNOVARE",
// // //     category: "Immune Booster",
// // //     type: "Health & Immunity",
// // //     certificate: "CAA/APRIL 2025/FA/07489",
// // //     composition:
// // //       "Comprehensive blend of Macro Nutrients, Amino Acids, Vitamins, Minerals, Enzymes, Probiotics, Non-essential amino acids, Raw Materials and Vitamins as per detailed composition table.",
// // //     benefits: [
// // //       "Increase Nutrient Utilisation & Growth rate and reduce fat deposition",
// // //       "Improve resistance towards stress & diseases and also better resistance to environmental stressors in shrimp",
// // //       "Maintains correct Osmotic pressure and improves anti stress ability",
// // //       "Increase survival rates and reduce disease occurrence",
// // //       "Accelerate the detoxifying of deposited Toxins in Shrimp",
// // //     ],
// // //     dosage: [
// // //       { label: "Prawn/Shrimp (at least one midday feeding)", dose: "3–5 Grams/Kg compound feed / 1–2 meal a day" },
// // //     ],
// // //     presentation: "500 g Bottle",
// // //     form: "Powder",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 16,
// // //     name: "i.HEPTOPANCVARE",
// // //     category: "Hepato-Pancreatic Support",
// // //     type: "Health & Immunity",
// // //     certificate: "CAA/ARPIL 2025/IMMU/07492",
// // //     composition:
// // //       "Detailed composition includes Amino Acids, Enzymes, Essential/Non-essential amino acids, Herbal Extracts, Raw Materials and Vitamins as per specification table.",
// // //     benefits: [
// // //       "Protect health of hepatopancreas and intestine, with bright and translucent body, clear white membrane, strong and health",
// // //       "Enhance growth performance, feed efficiency and product",
// // //       "Hepatopancreas (H.P) is the power house and vital organ in animal's survival and growth",
// // //       "Improve survival rate and immunity for reducing the risk of some vital disease outbreak",
// // //       "Relieve nutritional white feces, especially white feces caused by liver damage",
// // //     ],
// // //     dosage: [
// // //       { label: "Prawn/Shrimp (preventive)", dose: "5 Grams/Kg compound feed with Gel / 1 meal a day (every 15 days for 5 days)" },
// // //       { label: "If problem persists", dose: "1 meal a day regularly" },
// // //     ],
// // //     presentation: "500 g Bottle",
// // //     form: "Powder",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 17,
// // //     name: "i.WFSVARE GEL",
// // //     category: "Feed Additive Gel",
// // //     type: "Health & Immunity",
// // //     certificate: "CAA/APRIL 2025/IMMU/07487",
// // //     composition:
// // //       "Active Probiotics, Vitamins blend, Amino Acids, Enzymes, Probiotics, Raw Materials, Vitamins as per detailed formulation (31 active ingredients).",
// // //     benefits: [
// // //       "Ensures faster growth and weight gain",
// // //       "Improves feed conversion ratio (FCR)",
// // //       "Improves proper shell formation",
// // //       "Provides necessary binding for the supplemented feed additives preventing any Wastage",
// // //       "Maintains high and uniform growth",
// // //     ],
// // //     dosage: [
// // //       { label: "During Culture", dose: "20 ml per 1 kg of Compound Feed or as advised by Consultant" },
// // //     ],
// // //     presentation: "5 Ltr Tin",
// // //     form: "Gel",
// // //     storage: "Keep in cool and dry place. *Shakewell before use.",
// // //   },
// // //   {
// // //     id: 18,
// // //     name: "i.VIRAHEALVARE",
// // //     category: "Antiviral / Sanitizer",
// // //     type: "Sanitizer",
// // //     certificate: "CAA/OCT22/DIS/04270",
// // //     badge: "Sanitizer",
// // //     composition:
// // //       "Triple Salt - 50% w/v (Containing Triple Salt - 50% w/v); Potassium monopersulphate, Potassium hydrogen sulphate, Potassium sulfate, Sodium Chloride, tartrazine yellow.",
// // //     benefits: [
// // //       "Multi-component and Multi-purpose oxidizing system with major physical and chemical components of pathogens and restrict their propagation thru this disinfectant",
// // //       "Highly effective to control eradicate bacteria, fungi, moulds and all viral families effecting fish and shrimp especially WSSV",
// // //       "High level of surfactancy with acidic and oxidising power providing superior destruction of bio films. An effective bactericidal and can control the vibrio in water",
// // //       "Effectively control black and brown gill even under extreme stress conditions",
// // //       "Product can be used in the pond and can also be applied on the surface and equipments",
// // //     ],
// // //     dosage: [
// // //       { label: "Prawn/Shrimp (Prevention of Diseases)", dose: "500 gm to 2 Kg/ha — Apply once every fortnight according to pond water quality/condition" },
// // //       { label: "Treating Diseases", dose: "Apply once every 3–5 days or as advised by Aquaculture Consultant" },
// // //     ],
// // //     presentation: "1 Kg Bottle",
// // //     form: "Powder",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 19,
// // //     name: "i.SANVARE TD",
// // //     category: "Broad Spectrum Disinfectant",
// // //     type: "Sanitizer",
// // //     certificate: "CAA - Under Process",
// // //     badge: "Sanitizer",
// // //     composition:
// // //       "Benzalkonium Chloride 50% (BKC) - 10%, Glutaraldehyde 50% (C5H8O2) - 10%, Malachite Green (Aniline Green) - 3%, Formaldehyde 37% - 40%, Copper Sulphate - 2%, Ammonium Chloride (NH4Cl) - 2%, Alphox 200 (9.5 moles) (Ethylene Oxide) - 3%, Stabilizers and Surfactants - QS.",
// // //     benefits: [
// // //       "Highly effective against fungal, bacterial and viral disease",
// // //       "Kills bacteria including Gram-Positive, Ligeonella, Protozoan, viruses, algae and fungal spores",
// // //       "Broad Spectrum activity against 32 harmful bacteria, 62 virus, 7 fungi and 11 spores with no resistance developed",
// // //       "Prevents mite infestation in aqua Culture",
// // //       "Fights against pond bottom bacteria and reduce bacterial load in the ponds",
// // //       "High residual activity even in presence of organic matter",
// // //     ],
// // //     dosage: [
// // //       { label: "Upto 3 feet depth", dose: "0.5 to 1 Ltrs per Acre" },
// // //       { label: "Above 3 feet depth", dose: "1–1.5 Ltr per Acre per 3 feet" },
// // //     ],
// // //     presentation: "5 Ltr Tins",
// // //     form: "Liquid",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 20,
// // //     name: "i.SILVARE NANO",
// // //     category: "Nano Silver",
// // //     type: "Sanitizer",
// // //     certificate: "CAA - Under Process",
// // //     badge: "Sanitizer",
// // //     composition:
// // //       "PVP 10.8 g, Glycerol 500 ml, Silver nitrate 1.08 g, Enzymes, Amino acids, DM water Q.S.",
// // //     benefits: [
// // //       "Inhibit the growth of harmful bacteria attack like Vibrio spp. and break down the cell membranes of pathogenic bacteria",
// // //       "Helps to reduce microbial load, improving overall pond hygiene and reducing stress on shrimp",
// // //       "Boost the innate immune system of shrimp, increasing resistance to infections",
// // //       "Controls viral loads and emphasizes antibiotic-resistant bacteria in aquaculture",
// // //       "Clean body, gill and removes dirty materials from Shrimp body",
// // //     ],
// // //     dosage: [
// // //       { label: "Soil Application (Before stocking)", dose: "1 L/Acre with 1 m depth of water (5 days before)" },
// // //       { label: "Pond Application (Post stocking)", dose: "1 L/Acre during Vibriosis in pond water or as advised by Aquaculture Technician" },
// // //     ],
// // //     presentation: "1 Ltr Bottle",
// // //     form: "Liquid",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 21,
// // //     name: "i.OXYVARE",
// // //     category: "Oxygen Granules",
// // //     type: "Oxygen Products",
// // //     certificate: "CAA/JAN22/CHEM/03768",
// // //     badge: "Emergency Use",
// // //     composition:
// // //       "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity).",
// // //     benefits: [
// // //       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
// // //       "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
// // //       "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
// // //       "Improves survival create during stocking in culture period and before harvesting",
// // //       "It helps in development of plankton to the required levels",
// // //     ],
// // //     dosage: [
// // //       { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
// // //       { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
// // //     ],
// // //     presentation: "10 kgs Bucket",
// // //     form: "Granules",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 22,
// // //     name: "i.OXYVARE-T",
// // //     category: "Oxygen Tablets",
// // //     type: "Oxygen Products",
// // //     certificate: "CAA/APRIL 2025/CHEM/07488",
// // //     composition:
// // //       "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity) in a tablet form.",
// // //     benefits: [
// // //       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
// // //       "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
// // //       "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
// // //       "Improves survival create during stocking in culture period and before harvesting",
// // //       "It helps in development of plankton to the required levels",
// // //     ],
// // //     dosage: [
// // //       { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
// // //       { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
// // //     ],
// // //     presentation: "10 Kgs Bucket",
// // //     form: "Tablet",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 23,
// // //     name: "i.GEOPROVARE G",
// // //     category: "Zeolite Granules (with Probiotics)",
// // //     type: "Zeolite Products",
// // //     certificate: "CAA - Not Required",
// // //     composition:
// // //       "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
// // //     benefits: [
// // //       "Highest Cation Exchange capacity & it controls obnoxious gases instantly",
// // //       "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
// // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // //       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
// // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // //       "Can maintain clean pond bottom",
// // //     ],
// // //     dosage: [
// // //       { label: "Pond Preparation", dose: "50 Kgs/acre" },
// // //       { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
// // //     ],
// // //     presentation: "10 kg's Pouch",
// // //     form: "Granules",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 24,
// // //     name: "i.GEOPROVARE P",
// // //     category: "Zeolite Powder (with Probiotics)",
// // //     type: "Zeolite Products",
// // //     certificate: "CAA - Not Required",
// // //     composition:
// // //       "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
// // //     benefits: [
// // //       "Highest Cation Exchange capacity and it controls obnoxious gases instantly",
// // //       "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
// // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // //       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
// // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // //       "Can maintain clean pond bottom",
// // //     ],
// // //     dosage: [
// // //       { label: "Pond Preparation", dose: "50 Kgs/acre" },
// // //       { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
// // //     ],
// // //     presentation: "10 kg's Pouch",
// // //     form: "Powder",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 25,
// // //     name: "i.GEOVARE P",
// // //     category: "Zeolite Powder Plain",
// // //     type: "Zeolite Products",
// // //     certificate: "CAA - Not Required",
// // //     composition:
// // //       "Silicon Dioxice (SiO2): 65–70%; Sodium: 1–3%; Iron (Fe): 1–2%; Magnesium: 0.5–1.0%; Calcium Oxide (Cal): 3–5%; Potassium: 0.5–1.0%; Aluminium: 20%; LOI: 5–8%.",
// // //     benefits: [
// // //       "Highest Cation Exchange capacity it controls obnoxious gases instantly",
// // //       "Quick and Efficient removal of obnoxious gases; Dissolved Oxygen level will be improved",
// // //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// // //       "Absorbs toxic gases like Ammonia (Nh3), Hydrogen Sulphide (H2S) and other liberated anions from pond water",
// // //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// // //       "Can maintain clean pond bottom",
// // //     ],
// // //     dosage: [
// // //       { label: "Pond Preparation", dose: "50Kgs/acre" },
// // //       { label: "During Culture", dose: "Minimum 15Kgs/acre or as advised by aqua culture technician" },
// // //     ],
// // //     presentation: "25Kgs Bag",
// // //     form: "Powder",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 26,
// // //     name: "i.TOXIVARE",
// // //     category: "Yucca / Toxin Binder",
// // //     type: "Water Treatment",
// // //     certificate: "CAA/OCT22/FA/04255",
// // //     composition:
// // //       "Dry natural extract from the YUCCA schidigera plant, Ammonia binding agents and Probiotics.",
// // //     benefits: [
// // //       "Yucca is rich in glyco compounds that instantly binds with un-ionized ammonia thereby, reducing ammonia toxicity in the pond",
// // //       "Absorbs Nh₂, So₂, Ch₂, H₂S etc. of the pond bottom and cleans the toxic gases in the water",
// // //       "Reduced incidence of BOD and COD due to decrease of ammonia content in pond water",
// // //       "Deodorizes and purifies pond bottom wastage and water to improve the activity of the culture species",
// // //       "Increase the availability of dissolved oxygen in pond water",
// // //       "Reduce in gill irrigation",
// // //     ],
// // //     dosage: [
// // //       { label: "Pond application", dose: "500 Gm per HA of 1 meter column" },
// // //       { label: "Feed application", dose: "2–5 Gm/Kg feed" },
// // //     ],
// // //     presentation: "1 Kg Pouch",
// // //     form: "Powder",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 27,
// // //     name: "i.ECOSOFTVARE",
// // //     category: "EDTA",
// // //     type: "Water Treatment",
// // //     certificate: "CAA - Not Required",
// // //     composition:
// // //       "Unique combination of Ethylene Diamine Tetra Acetic Acid (EDTA) formulated salt compounds.",
// // //     benefits: [
// // //       "Reduces the hardness levels to optimum lower levels there by stabilizing the alkalinity in the pond water completely prevents plankton crash",
// // //       "i.Ecosoftvare is used to improve water quality by reducing heavy metal concentrations",
// // //       "Stabilizes the total Ammonia levels there by minimise the free ammonia in the pond water",
// // //       "Helps to create toxic free environment",
// // //     ],
// // //     dosage: [
// // //       { label: "General application", dose: "Mix 1–2 kgs in 50 Ltrs of water and spray over 1 Acre evenly" },
// // //       { label: "Best practice", dose: "Apply in day light for better results or as advised by Aqua consultant" },
// // //     ],
// // //     presentation: "1 Kg / 5 kg Pouch",
// // //     form: "Powder",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 28,
// // //     name: "i.NITRONILVARE",
// // //     category: "Nitrite Control",
// // //     type: "Water Treatment",
// // //     certificate: "CAA/OCT22/PRO/04253",
// // //     composition:
// // //       "Nitrosomonas, Nitrobacter, Thiobacillus Thioxidans, Thiobacillus Ferroxidans, Thiobacillus Denitrificans, Paracoccus Denitrificans, N. Protease, Fungal Phytase, Fungal Alpha Amylase.",
// // //     benefits: [
// // //       "It reduces nitrites (No2) content in water to safe level",
// // //       "i.NITRONILVARE is powerful water treatment additive for aquaculture pond",
// // //       "It prevents formation of black soil due to decay of organic pollutant Improves water quality and enhances survival rate",
// // //     ],
// // //     dosage: [
// // //       { label: "Prawn/Shrimp", dose: "1 Kg/acre once in every 10 days" },
// // //       { label: "Fish", dose: "1 Kg/acre once in every one month or advised by aqua consultant" },
// // //     ],
// // //     presentation: "1 Kg Bottle",
// // //     form: "Powder",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 29,
// // //     name: "Calcium Chloride (Fused)",
// // //     category: "Chloride Salts",
// // //     type: "Minerals",
// // //     certificate: "CAA/OCT22/CHEM/04252",
// // //     composition: "Calcium Chloride Fused.",
// // //     benefits: [
// // //       "Calcium has an important role in the biological processes of fish & shrimp. It is necessary for bone formation, blood clotting and their metabolic reactions",
// // //       "Sodium and potassium are the most important salts in fish & shrimp blood and are critical for normal heat, nerve and muscle function",
// // //       "Fish & shrimp can absorb calcium directly from the water of food",
// // //       "The re-absorption of salt can reduce the energy available for growth",
// // //     ],
// // //     dosage: [
// // //       { label: "General application", dose: "5 to 10 Kgs per acre" },
// // //       { label: "Best Practice", dose: "For best results apply in the evening hours" },
// // //     ],
// // //     presentation: "25 Kgs Drum (5 Kg x 5 Packs)",
// // //     form: "Fused",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 30,
// // //     name: "Magnesium Chloride (Crystal)",
// // //     category: "Chloride Salts",
// // //     type: "Minerals",
// // //     certificate: "CAA/OCT22/CHEM/04251",
// // //     composition: "Magnesium Chloride 97% ± 2%.",
// // //     benefits: [
// // //       "Covers the Magnesium balance of pond water",
// // //       "Protects from soft shell syndrome",
// // //       "Regularizes the moult cycle",
// // //       "Increase survival and body weight rate",
// // //     ],
// // //     dosage: [
// // //       { label: "General application", dose: "5 to 10 Kgs per acre" },
// // //     ],
// // //     presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
// // //     form: "Crystal",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 31,
// // //     name: "Potassium Chloride (Crystal)",
// // //     category: "Chloride Salts",
// // //     type: "Minerals",
// // //     certificate: "CAA/OCT22/CHEM/04256",
// // //     composition: "Potassium Chloride 97% ± 2%.",
// // //     benefits: [
// // //       "Protects from soft shell syndrome",
// // //       "Increase survival and body weight rate",
// // //       "Regularizes the moult cycles",
// // //       "Covers the Potassium balance of pond water",
// // //     ],
// // //     dosage: [
// // //       { label: "General application", dose: "5 to 8 Kgs per acre" },
// // //     ],
// // //     presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
// // //     form: "Crystal",
// // //     storage: "Keep in cool and dry place.",
// // //   },
// // //   {
// // //     id: 32,
// // //     name: "i.FERRICCHLORIVARE",
// // //     category: "Ferric Chloride",
// // //     type: "Minerals",
// // //     certificate: "CAA/ARPIL 2025/CHEM/07491",
// // //     composition: "Ferric Chloride Anhydrous – 98% ± 2%. Assay: Min 98.0%.",
// // //     benefits: [
// // //       "Highly effective at removing suspended solids, Organic matter & Heavy metals from the Pond water",
// // //       "It helps to prevent the overgrowth of Algae in Pond water",
// // //       "Use as Iron supplement",
// // //       "Improves Pond water bottom quality",
// // //       "It helps to precipitate and inactive inorganic phosphorous in Pond water",
// // //     ],
// // //     dosage: [
// // //       { label: "General", dose: "Consult our field staff or your aquaculture specialist for specific usage and directions" },
// // //     ],
// // //     presentation: "50 Kgs Drum (5Kg x 10 Packs)",
// // //     form: "Crystal",
// // //     storage: "Keep in cool and dry place. Special Instruction: No liability accepted for accidents arising while handling or use.",
// // //   },
// // // ];

// // // // ─── Product Image Map ────────────────────────────────────────────────────────
// // // // Maps product ID → actual filename in /public/images/
// // // const PRODUCT_IMAGES: Record<number, string> = {
// // //   1:  "minvare.png",           // i.MINVARE PM
// // //   2:  "minare am (1).png",     // i.MINVARE AM
// // //   3:  "minvare ws.png",        // i.MINVARE WS
// // //   4:  "minvare fm 2.png",      // i.MINVARE FM
// // //   5:  "minvare_liq.png",       // i.MINVARE LiQ
// // //   6:  "propondvare 2.png",     // i.PROPONDVARE
// // //   7:  "provare gut 2.png",     // i.PROVARE GUT
// // //   8:  "vibriovare 2.png",      // i.VIBRIOVARE
// // //   9:  "bio yeast.png",         // i.Bio'YEAST'vare
// // //   10: "psbvare 2.png",         // i.PSBVARE
// // //   11: "propondvare_liq.png",   // i.PROPONDVARE LiQ
// // //   12: "ceevare 2.png",         // i.CEEVARE
// // //   13: "phytovare 2.png",       // i.PHYTOVARE
// // //   14: "livovare gel (1).png",  // i.LIVOVARE GEL
// // //   15: "immunovare 2.png",      // i.IMMUNOVARE
// // //   16: "heptopancvare.png",     // i.HEPTOPANCVARE
// // //   17: "wfsvare gel 2.png",     // i.WFSVARE GEL
// // //   18: "virahealvare 2.png",    // i.VIRAHEALVARE
// // //   19: "sanvare_td 2.png",      // i.SANVARE TD
// // //   20: "silvare_nano.png",      // i.SILVARE NANO
// // //   21: "oxyvar 2.png",          // i.OXYVARE
// // //   22: "oxyvare-t (1).png",     // i.OXYVARE-T
// // //   23: "geoprovare.jpeg",       // i.GEOPROVARE G
// // //   24: "geoprovare_p 2.png",    // i.GEOPROVARE P
// // //   25: "geovare_p.png",         // i.GEOVARE P
// // //   26: "nitronilvare.png",      // i.TOXIVARE  (closest match)
// // //   27: "nitronilvare.png",      // i.ECOSOFTVARE (reuse until dedicated image added)
// // //   28: "nitronilvare.png",      // i.NITRONILVARE
// // //   29: "calcium chloride.png",  // Calcium Chloride
// // //   30: "min.png",               // Magnesium Chloride
// // //   31: "min.png",               // Potassium Chloride
// // //   32: "ferric chloride 2.png", // i.FERRICCHLORIVARE
// // // };

// // // // ─── Category & Color Config ──────────────────────────────────────────────────
// // // const CATEGORIES = [
// // //   "All",
// // //   "Minerals",
// // //   "Probiotics",
// // //   "Vitamins & Nutrition",
// // //   "Health & Immunity",
// // //   "Oxygen Products",
// // //   "Water Treatment",
// // //   "Zeolite Products",
// // //   "Sanitizer",
// // // ];

// // // const TYPE_ACCENT: Record<string, { header: string; label: string; dot: string }> = {
// // //   "Minerals":            { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" },
// // //   "Probiotics":          { header: "#006644", label: "#008855", dot: "#006644" },
// // //   "Vitamins & Nutrition":{ header: "#cc6600", label: "#dd7700", dot: "#cc6600" },
// // //   "Health & Immunity":   { header: "#7700aa", label: "#9911cc", dot: "#7700aa" },
// // //   "Oxygen Products":     { header: "#003399", label: "#0044bb", dot: "#003399" },
// // //   "Water Treatment":     { header: "#005566", label: "#007788", dot: "#005566" },
// // //   "Zeolite Products":    { header: "#664400", label: "#886600", dot: "#664400" },
// // //   "Sanitizer":           { header: "#aa0000", label: "#cc1111", dot: "#aa0000" },
// // // };

// // // const getAccent = (type: string) =>
// // //   TYPE_ACCENT[type] || { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" };

// // // // ─── SVG Placeholder (shown when no image available) ─────────────────────────
// // // function ProductPlaceholder({ color }: { color: string }) {
// // //   return (
// // //     <svg
// // //       width="56"
// // //       height="56"
// // //       viewBox="0 0 56 56"
// // //       fill="none"
// // //       xmlns="http://www.w3.org/2000/svg"
// // //       style={{ opacity: 0.22 }}
// // //     >
// // //       {/* Flask / bottle shape */}
// // //       <rect x="21" y="6" width="14" height="10" rx="2" fill={color} />
// // //       <path
// // //         d="M18 16h20l6 24a6 6 0 01-6 6H18a6 6 0 01-6-6l6-24z"
// // //         fill={color}
// // //       />
// // //       <ellipse cx="28" cy="34" rx="7" ry="5" fill="white" opacity="0.4" />
// // //       <rect x="24" y="8" width="3" height="8" rx="1" fill="white" opacity="0.5" />
// // //     </svg>
// // //   );
// // // }

// // // // ─── PDF-Style Product Card ───────────────────────────────────────────────────
// // // function PDFCard({ product }: { product: Product }) {
// // //   const ac = getAccent(product.type);
// // //   const [imgError, setImgError] = useState(false);
// // //   const imgSrc = PRODUCT_IMAGES[product.id]
// // //     ? `/images/${PRODUCT_IMAGES[product.id]}`
// // //     : null;

// // //   return (
// // //     <div
// // //       className="w-full bg-white rounded-xl overflow-hidden"
// // //       style={{
// // //         border: `2px solid ${ac.header}33`,
// // //         boxShadow: "0 2px 16px rgba(0,50,120,0.08)",
// // //       }}
// // //     >
// // //       {/* ── TOP HEADER ── */}
// // //       <div className="flex items-stretch" style={{ borderBottom: `2px solid ${ac.header}` }}>
// // //         {/* Blank spacer aligned with hex column */}
// // //         <div
// // //           style={{
// // //             width: 140,
// // //             flexShrink: 0,
// // //             background: "#f0f6ff",
// // //             borderRight: `1px solid ${ac.header}33`,
// // //           }}
// // //         />
// // //         {/* Category */}
// // //         <div className="flex items-center px-5 py-2 flex-1" style={{ background: "white" }}>
// // //           <span
// // //             className="font-black uppercase tracking-wide"
// // //             style={{ color: ac.header, fontSize: 14, letterSpacing: 1, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // //           >
// // //             {product.category}
// // //           </span>
// // //         </div>
// // //         {/* Certificate */}
// // //         {product.certificate && (
// // //           <div
// // //             className="flex items-center px-4 py-2"
// // //             style={{
// // //               background: "#fff8f0",
// // //               borderLeft: `1px solid ${ac.header}44`,
// // //               borderRight: `1px solid ${ac.header}44`,
// // //             }}
// // //           >
// // //             <span
// // //               className="font-bold"
// // //               style={{ color: "#cc3300", fontSize: 11, fontFamily: "monospace", whiteSpace: "nowrap" }}
// // //             >
// // //               {product.certificate}
// // //             </span>
// // //           </div>
// // //         )}
// // //         {/* Product name chip */}
// // //         <div
// // //           className="flex items-center px-5 py-2"
// // //           style={{ background: ac.header, minWidth: 180 }}
// // //         >
// // //           <span
// // //             className="font-black text-white tracking-wide"
// // //             style={{ fontSize: 15, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // //           >
// // //             <em style={{ opacity: 0.8, fontStyle: "italic" }}>i</em>
// // //             {product.name.replace(/^i[.\-']/i, "")}
// // //           </span>
// // //           {product.badge && (
// // //             <span
// // //               className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
// // //               style={{ background: "rgba(255,255,255,0.2)", color: "white", whiteSpace: "nowrap" }}
// // //             >
// // //               {product.badge}
// // //             </span>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* ── BODY ROW ── */}
// // //       <div className="flex" style={{ minHeight: 220 }}>

// // //         {/* ── COL 1: Hexagon with product image ── */}
// // //         <div
// // //           className="flex-none flex items-center justify-center"
// // //           style={{
// // //             width: 140,
// // //             background: `linear-gradient(160deg, ${ac.header}15 0%, ${ac.header}08 100%)`,
// // //             borderRight: `1px solid ${ac.header}22`,
// // //             padding: "18px 14px",
// // //           }}
// // //         >
// // //           {/* Outer hex — thick colored border */}
// // //           <div
// // //             style={{
// // //               width: 100,
// // //               height: 110,
// // //               clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// // //               background: ac.header,
// // //               display: "flex",
// // //               alignItems: "center",
// // //               justifyContent: "center",
// // //             }}
// // //           >
// // //             {/* White gap ring */}
// // //             <div
// // //               style={{
// // //                 width: "calc(100% - 10px)",
// // //                 height: "calc(100% - 10px)",
// // //                 clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// // //                 background: "white",
// // //                 display: "flex",
// // //                 alignItems: "center",
// // //                 justifyContent: "center",
// // //               }}
// // //             >
// // //               {/* Inner image hex */}
// // //               <div
// // //                 style={{
// // //                   width: "calc(100% - 6px)",
// // //                   height: "calc(100% - 6px)",
// // //                   clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// // //                   background: "#EEF4FF",
// // //                   display: "flex",
// // //                   alignItems: "center",
// // //                   justifyContent: "center",
// // //                   overflow: "hidden",
// // //                   position: "relative",
// // //                 }}
// // //               >
// // //               {/* ── Actual product image ── */}
// // //               {imgSrc && !imgError ? (
// // //                 <Image
// // //                   src={imgSrc}
// // //                   alt={product.name}
// // //                   fill
// // //                   style={{ objectFit: "contain", padding: "8px" }}
// // //                   onError={() => setImgError(true)}
// // //                 />
// // //               ) : (
// // //                 /* ── SVG placeholder when no image — NO text shown ── */
// // //                 <ProductPlaceholder color={ac.header} />
// // //               )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* ── COL 2: Benefits ── */}
// // //         <div
// // //           className="flex-1 p-4"
// // //           style={{ borderRight: `1px solid ${ac.header}22`, background: "white", minWidth: 0 }}
// // //         >
// // //           <div
// // //             className="font-bold mb-2 uppercase tracking-wide"
// // //             style={{ color: ac.header, fontSize: 11 }}
// // //           >
// // //             Benefits:
// // //           </div>
// // //           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
// // //             {product.benefits.map((b, i) => (
// // //               <li
// // //                 key={i}
// // //                 style={{
// // //                   fontSize: 11.5,
// // //                   color: "#1e2d3d",
// // //                   lineHeight: 1.6,
// // //                   paddingLeft: 14,
// // //                   paddingBottom: 3,
// // //                   position: "relative",
// // //                   fontFamily: "'Segoe UI', system-ui, sans-serif",
// // //                 }}
// // //               >
// // //                 <span
// // //                   style={{
// // //                     position: "absolute",
// // //                     left: 1,
// // //                     top: "0.15em",
// // //                     color: ac.header,
// // //                     fontSize: 13,
// // //                     lineHeight: 1,
// // //                   }}
// // //                 >
// // //                   •
// // //                 </span>
// // //                 {b}
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </div>

// // //         {/* ── COL 3: Composition ── */}
// // //         <div
// // //           className="p-4"
// // //           style={{
// // //             width: 260,
// // //             flexShrink: 0,
// // //             borderRight: `1px solid ${ac.header}22`,
// // //             background: "#fafeff",
// // //           }}
// // //         >
// // //           <div
// // //             className="font-bold mb-2 uppercase tracking-wide"
// // //             style={{ color: ac.header, fontSize: 11 }}
// // //           >
// // //             Composition:
// // //           </div>
// // //           <p
// // //             style={{
// // //               fontSize: 11,
// // //               color: "#2a3c50",
// // //               lineHeight: 1.7,
// // //               textAlign: "justify",
// // //               hyphens: "auto",
// // //               fontFamily: "'Segoe UI', system-ui, sans-serif",
// // //             }}
// // //           >
// // //             {product.composition}
// // //           </p>
// // //         </div>

// // //         {/* ── COL 4: Dosage + Presentation / Form / Storage ── */}
// // //         <div
// // //           className="p-4"
// // //           style={{
// // //             width: 220,
// // //             flexShrink: 0,
// // //             background: "#f7faff",
// // //           }}
// // //         >
// // //           <div
// // //             className="font-bold mb-1.5 uppercase tracking-wide"
// // //             style={{ color: ac.header, fontSize: 11 }}
// // //           >
// // //             Dosage:
// // //           </div>
// // //           {product.dosage.map((d, i) => (
// // //             <div key={i} style={{ marginBottom: 6 }}>
// // //               <div
// // //                 style={{
// // //                   fontSize: 10,
// // //                   fontWeight: 700,
// // //                   color: ac.label,
// // //                   lineHeight: 1.3,
// // //                   marginBottom: 1,
// // //                 }}
// // //               >
// // //                 {d.label}:
// // //               </div>
// // //               <div style={{ fontSize: 10.5, color: "#1a2b3c", lineHeight: 1.55 }}>
// // //                 {d.dose}
// // //               </div>
// // //             </div>
// // //           ))}

// // //           <div
// // //             style={{
// // //               borderTop: `1px solid ${ac.header}33`,
// // //               marginTop: 10,
// // //               paddingTop: 10,
// // //             }}
// // //           >
// // //             <div
// // //               className="font-bold uppercase"
// // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // //             >
// // //               Presentation:
// // //             </div>
// // //             <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6, lineHeight: 1.4 }}>
// // //               {product.presentation}
// // //             </div>

// // //             <div
// // //               className="font-bold uppercase"
// // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // //             >
// // //               Form:
// // //             </div>
// // //             <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6 }}>
// // //               {product.form}
// // //             </div>

// // //             <div
// // //               className="font-bold uppercase"
// // //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// // //             >
// // //               Storage &amp; Caution:
// // //             </div>
// // //             <div style={{ fontSize: 11, color: "#1a2b3c", lineHeight: 1.5 }}>
// // //               {product.storage}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // // ─── Main Page ────────────────────────────────────────────────────────────────
// // // export default function CataloguePage() {
// // //   const [activeCategory, setActiveCategory] = useState("All");
// // //   const [search, setSearch] = useState("");
// // //   const gridRef = useRef<HTMLDivElement>(null);

// // //   const filtered = PRODUCTS.filter((p) => {
// // //     const matchCat =
// // //       activeCategory === "All" ||
// // //       p.type === activeCategory ||
// // //       (activeCategory === "Sanitizer" && p.badge === "Sanitizer");
// // //     const q = search.toLowerCase();
// // //     const matchSearch =
// // //       !q ||
// // //       p.name.toLowerCase().includes(q) ||
// // //       p.category.toLowerCase().includes(q) ||
// // //       p.composition.toLowerCase().includes(q) ||
// // //       p.benefits.some((b) => b.toLowerCase().includes(q));
// // //     return matchCat && matchSearch;
// // //   });

// // //   return (
// // //     <div
// // //       className="min-h-screen bg-[#eef3f9]"
// // //       style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// // //     >
// // //       {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
// // //       <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2557] via-[#2A5DA8] to-[#0e7fc2]">
// // //         <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border-[80px] border-white/5 translate-x-48 -translate-y-48 pointer-events-none" />
// // //         <div className="absolute top-12 right-64 w-[300px] h-[300px] rounded-full border-[50px] border-white/5 pointer-events-none" />
// // //         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border-[60px] border-white/5 -translate-x-32 translate-y-32 pointer-events-none" />
// // //         <div
// // //           className="absolute inset-0 opacity-5 pointer-events-none"
// // //           style={{
// // //             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,2 55,16 55,44 30,58 5,44 5,16' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
// // //             backgroundSize: "60px 60px",
// // //           }}
// // //         />

// // //         <div className="relative z-10 max-w-screen-2xl mx-auto px-8 py-14">
// // //           <div className="flex items-start justify-between gap-8 flex-wrap">
// // //             <div>
// // //               {/* ── Logo / brand block ── */}
// // //               <div className="flex items-center gap-3 mb-5">
// // //                 <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center flex-shrink-0">
// // //                   <span className="text-white font-black text-xl italic">i</span>
// // //                 </div>
// // //                 <div className="flex flex-col items-start">
// // //                   <p className="text-white text-sm font-semibold leading-tight">
// // //                     Innovare Biopharma LLP
// // //                   </p>
// // //                   <p className="text-white/50 text-[11px] leading-tight">
// // //                     Solution to Aquaculture Health
// // //                   </p>
// // //                 </div>
// // //               </div>

// // //               {/* ── Heading aligned to logo text left edge (w-12 icon + gap-3 = ~60px offset) ── */}
// // //               <div className="pl-[60px]">
// // //                 <h1 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
// // //                   Product
// // //                   <br />
// // //                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
// // //                     Catalogue
// // //                   </span>
// // //                 </h1>
// // //                 <p className="mt-4 text-white/65 text-sm max-w-xl leading-relaxed">
// // //                   Complete reference guide — compositions, benefits, dosages and certifications for all Innovare Biopharma aquaculture solutions.
// // //                 </p>
// // //                 <div className="flex flex-wrap gap-3 mt-6">
// // //                   {[
// // //                     { value: `${PRODUCTS.length}+`, label: "Products" },
// // //                     { value: "ISO 9001:2015", label: "Certified" },
// // //                     { value: "GMP", label: "Quality Practice" },
// // //                     { value: "MSME", label: "Registered" },
// // //                   ].map((s) => (
// // //                     <div
// // //                       key={s.label}
// // //                       className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3"
// // //                     >
// // //                       <div className="text-white font-black text-lg leading-none">{s.value}</div>
// // //                       <div className="text-white/55 text-[11px] font-semibold mt-0.5">{s.label}</div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Search */}
// // //             <div className="flex flex-col gap-2 mt-2">
// // //               <div className="relative">
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Search products, ingredients, benefits..."
// // //                   value={search}
// // //                   onChange={(e) => setSearch(e.target.value)}
// // //                   className="w-80 pl-10 pr-4 py-3 rounded-2xl border border-white/25 bg-white/10 text-white placeholder-white/40 text-sm outline-none focus:bg-white/20 focus:border-white/50 transition-all"
// // //                 />
// // //                 <svg
// // //                   className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
// // //                   width="16"
// // //                   height="16"
// // //                   viewBox="0 0 24 24"
// // //                   fill="none"
// // //                   stroke="currentColor"
// // //                   strokeWidth="2"
// // //                 >
// // //                   <circle cx="11" cy="11" r="8" />
// // //                   <path d="m21 21-4.35-4.35" />
// // //                 </svg>
// // //               </div>
// // //               <p className="text-white/40 text-xs text-right">
// // //                 Showing{" "}
// // //                 <span className="text-white/80 font-bold">{filtered.length}</span> of{" "}
// // //                 {PRODUCTS.length} products
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* ── Category Filter Tabs ── */}
// // //           <div className="mt-8 flex flex-wrap gap-2">
// // //             {CATEGORIES.map((cat) => {
// // //               const active = activeCategory === cat;
// // //               const count =
// // //                 cat === "All"
// // //                   ? PRODUCTS.length
// // //                   : PRODUCTS.filter(
// // //                       (p) =>
// // //                         p.type === cat ||
// // //                         (cat === "Sanitizer" && p.badge === "Sanitizer")
// // //                     ).length;
// // //               return (
// // //                 <button
// // //                   key={cat}
// // //                   onClick={() => setActiveCategory(cat)}
// // //                   className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200"
// // //                   style={{
// // //                     background: active ? "white" : "rgba(255,255,255,0.1)",
// // //                     color: active ? "#0f2557" : "rgba(255,255,255,0.75)",
// // //                     border: active ? "none" : "1px solid rgba(255,255,255,0.2)",
// // //                     boxShadow: active ? "0 4px 14px rgba(0,0,0,0.15)" : "none",
// // //                   }}
// // //                 >
// // //                   {cat}
// // //                   <span
// // //                     className="rounded-full px-1.5 py-0.5"
// // //                     style={{
// // //                       background: active ? "#2A5DA8" : "rgba(255,255,255,0.15)",
// // //                       color: active ? "white" : "rgba(255,255,255,0.7)",
// // //                       fontSize: 9,
// // //                       fontWeight: 800,
// // //                     }}
// // //                   >
// // //                     {count}
// // //                   </span>
// // //                 </button>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ══ PRODUCT LIST ════════════════════════════════════════════════════════ */}
// // //       <div className="max-w-screen-2xl mx-auto px-6 py-8" ref={gridRef}>
// // //         {filtered.length === 0 ? (
// // //           <div className="flex flex-col items-center py-32 text-gray-400">
// // //             <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
// // //               <svg
// // //                 width="32"
// // //                 height="32"
// // //                 viewBox="0 0 24 24"
// // //                 fill="none"
// // //                 stroke="#9ca3af"
// // //                 strokeWidth="1.5"
// // //               >
// // //                 <circle cx="11" cy="11" r="8" />
// // //                 <path d="m21 21-4.35-4.35" />
// // //               </svg>
// // //             </div>
// // //             <p className="font-semibold text-base text-gray-500">No products found</p>
// // //             <button
// // //               onClick={() => {
// // //                 setSearch("");
// // //                 setActiveCategory("All");
// // //               }}
// // //               className="mt-4 px-5 py-2 rounded-xl bg-[#2A5DA8] text-white text-sm font-semibold"
// // //             >
// // //               Clear Filters
// // //             </button>
// // //           </div>
// // //         ) : (
// // //           <div className="flex flex-col gap-5">
// // //             {filtered.map((p) => (
// // //               <PDFCard key={p.id} product={p} />
// // //             ))}
// // //           </div>
// // //         )}
// // //       </div>

// // //       <Footer />
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import Footer from "@/components/Footer";
// // import Image from "next/image";
// // import { useState, useRef } from "react";

// // // ─── Types ────────────────────────────────────────────────────────────────────
// // type Product = {
// //   id: number;
// //   name: string;
// //   category: string;
// //   type: string;
// //   certificate: string;
// //   composition: string;
// //   benefits: string[];
// //   dosage: { label: string; dose: string }[];
// //   presentation: string;
// //   form: string;
// //   storage: string;
// //   badge?: string;
// //   tag?: string;
// // };

// // // ─── Data ─────────────────────────────────────────────────────────────────────
// // const PRODUCTS: Product[] = [
// //   {
// //     id: 1,
// //     name: "i.MINVARE PM",
// //     category: "Pond Minerals",
// //     type: "Minerals",
// //     certificate: "CAA/JAN22/FA/03765",
// //     composition:
// //       "Innovative blend of essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Phosphorus, Copper, Sodium; Amino acids: DL-Methionine, L-Lysine; Probiotics: Bacillus subtilis 10B, Bacillus licheniformis 10B, Bacillus Coagulans 10B, Lactobacillus acidophilus 10B, Saccharomyces cervisiae 10B.",
// //     benefits: [
// //       "Improves F.C.R",
// //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// //       "Maintain pH of pond water",
// //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// //       "Improve Phytoplankton and Zooplankton in the pond water",
// //       "Helps for immune response and defence mechanism",
// //       "Helps in uniform growth in shrimp and fish",
// //     ],
// //     dosage: [
// //       { label: "Shrimp/Prawn", dose: "10 kgs per Acre" },
// //       { label: "Fish", dose: "3 kgs per Acre" },
// //     ],
// //     presentation: "10 Kg's Pouch",
// //     form: "Powder",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 2,
// //     name: "i.MINVARE AM",
// //     category: "Pond Minerals",
// //     type: "Minerals",
// //     certificate: "",
// //     composition:
// //       "Innovative blend of essential Micro and Macro Minerals: Calcium, Dolomite, Sulphates containing Magnesium, Manganese, Zinc, Ferrous, Copper; Sodium Chlorides; Potassium; Phosphates: Di Calcium, Rock, Mono Sodium, Mono Potassium.",
// //     benefits: [
// //       "Improves F.C.R",
// //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// //       "Maintain pH of pond water",
// //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// //       "Improve Phytoplankton and Zooplankton in the pond water",
// //       "Helps for immune response and defence mechanism",
// //       "Helps in uniform growth in shrimp and fish",
// //     ],
// //     dosage: [
// //       { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
// //       { label: "Fish", dose: "5 Kgs per Acre" },
// //     ],
// //     presentation: "20 kg Bag",
// //     form: "Powder",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 3,
// //     name: "i.MINVARE WS",
// //     category: "Pond Minerals",
// //     type: "Minerals",
// //     certificate: "CAA/APRIL 2025/MIN/07490",
// //     composition:
// //       "Innovative blend of essential Macro Minerals: Calcium, Dolomite, Zeolite; Sulphates: Magnesium, Manganese, Zinc, Ferrous, Copper; Chlorides: Potassium; Phosphates: Di Calcium, Rock, Sodium.",
// //     benefits: [
// //       "Improves F.C.R",
// //       "Helps in regular moulting and formation of exoskeleton in shrimp",
// //       "Maintain pH of pond water",
// //       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
// //       "Improve Phytoplankton and Zooplankton in the pond water",
// //       "Helps for immune response and defence mechanism",
// //       "Helps in uniform growth in shrimp and fish",
// //     ],
// //     dosage: [
// //       { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
// //       { label: "Fish", dose: "5 Kgs per Acre" },
// //     ],
// //     presentation: "20 Kgs Bag",
// //     form: "Powder",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 4,
// //     name: "i.MINVARE FM",
// //     category: "Feed Minerals",
// //     type: "Minerals",
// //     certificate: "CAA/JAN22/FA/03766",
// //     composition:
// //       "Essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Cobalt, Phosphorus, Copper, Selenium; Vitamins B2, B12, AD3, E; Amino acids: DL-Methionine, L-Lysine; Probiotics; Enzymes: Amylase, Protease, Cellulose, β.Galactose.",
// //     benefits: [
// //       "Improves F.C.R",
// //       "Protects from shell and muscle related problems",
// //       "Helps in moulting process and formation of exoskeleton in shrimp",
// //       "Improves hormonal and enzymatic activities in shrimp",
// //       "Protection from loose shell syndrome",
// //       "Improves metabolism",
// //       "Promotes fast body growth and gains more body weight",
// //       "Improves effectively the digestive system",
// //     ],
// //     dosage: [
// //       { label: "Shrimp/Prawn", dose: "5–8 gm/kg feed" },
// //       { label: "Fish", dose: "1–3 kgs per ton feed" },
// //     ],
// //     presentation: "1 Kg & 5 Kg's Pouch",
// //     form: "Powder",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 5,
// //     name: "i.MINVARE LiQ",
// //     category: "Liquid Minerals",
// //     type: "Minerals",
// //     certificate: "",
// //     composition:
// //       "Innovative mixture of optimal liquid blend of balanced essential Macro and Trace element Aqua culture feed supplements minerals: Amino Protein 2g, Buffer phosphonic acid 2.5g, Calcium lactate 1.5g, Calcium phosphate monobasic 5.5g, Citric acid 2g, Di potassium phosphate 5.35g, Di sodium phosphate 3.25g, Magnesium citrate 750mg, Potassium chloride 1.5g, Sodium citrate 2.5g, Trace mineral complex (Glycinated) 2g, DM water Q.S.",
// //     benefits: [
// //       "Prevents and controls white muscle / soft shell syndrome and body cramping problem",
// //       "Improves and enhances the development of phytoplankton and zooplankton",
// //       "Regulates the moulting cycle and survival rate",
// //       "Balances minerals deficiency in water, soil and shrimp",
// //       "Improves metabolism, digestive system and FCR",
// //       "Improves mineral absorption and pond water nutrition",
// //     ],
// //     dosage: [
// //       { label: "Pond Application", dose: "50 Ltrs/Acre (once every 10 days)" },
// //       { label: "Feed Application", dose: "5–10 ml/kg feed (30 min before feeding)" },
// //     ],
// //     presentation: "1 Ltr Bottle",
// //     form: "Liquid",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 6,
// //     name: "i.PROPONDVARE",
// //     category: "Water & Soil Probiotics",
// //     type: "Probiotics",
// //     certificate: "CAA/JAN22/PRO/03769",
// //     composition:
// //       "Bacillus subtilis, Bacillus megaterium, Bacillus licheniformis, Bacillus polymyxa, Bacillus pumilis, Saccharomyces cerevisiae, Cellulomanas cartae, p.pantotrophus, Nitrosomonas, Nitrobacter, Pseidomonas denitricans, l.plantarum, l.acidophilus, Rhodobacter sphaeroides, Thiobacillus thiooxidans & Thiobacillus ferroxidans.",
// //     benefits: [
// //       "Degradation of organic waste and maintains phytoplankton bloom",
// //       "Improves water and soil quality and increases aquatic animal production",
// //       "Stabilizes pond pH and maintains optimum alkalinity",
// //       "Increases collagen synthesis and accelerates encrustation",
// //       "Removes unwanted micro-organisms",
// //       "Strengthens the immune system",
// //     ],
// //     dosage: [
// //       { label: "Initial booster (Shrimp/Prawn/Fish)", dose: "1.5 Kg/Ha" },
// //       { label: "Maintenance", dose: "1 Kg/Ha every 7–10 days" },
// //     ],
// //     presentation: "1 kg Bottle",
// //     form: "Powder",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 7,
// //     name: "i.PROVARE GUT",
// //     category: "Gut Probiotics",
// //     type: "Probiotics",
// //     certificate: "CAA/JAN22/PRO/03771",
// //     composition:
// //       "High strength GUT Probiotics: Lactobacillus plantarum, Lactobacillus acidophilus, Saccharomyces cervisiae; Enzymes: N Protease and Fungal phytase; Herbal extracts: Phyllanthus emblica Linn., Zingiber officinale and Trigonella foenum-graecum.",
// //     benefits: [
// //       "Improves digestion and feed intake while protecting GUT health",
// //       "Prevents the occurrence of Mycosporidia infection",
// //       "Prevents development of pathogenic bacteria and affects to maintain the GUT micro flora",
// //       "Improves FCR and lower GUT pH",
// //       "Support health, performance and growth of aquatic species",
// //       "Prevents the onset of loose shell syndrome",
// //     ],
// //     dosage: [
// //       { label: "Shrimp", dose: "5–10 Grams per Kg feed" },
// //       { label: "Fish", dose: "10–15 Grams per Kg feed" },
// //     ],
// //     presentation: "1 kg Bottle",
// //     form: "Powder",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 8,
// //     name: "i.VIBRIOVARE",
// //     category: "Vibrio Control",
// //     type: "Probiotics",
// //     certificate: "CAA - Under Process",
// //     composition:
// //       "Bacillus magaterium (2.5B), Bacillus polymyxa (2.5B), Bacillus pumilus (2.5B), Paracoccus marginatus (0.5B), Paracoccus pantotropus (2B), Streptococcus thermophillus (2.5B), Bacillus amyloliquificans (1B), Bacillus mesentrices (0.5B), Enterococcus facium (2.5B), Lactobacillus rhamnosus (2B), Lactobacillus sporogenous (1B), Pediococcus Acidilactici (0.5B), Mannan Oligo Saccharide (MOS), Beta Glucins B 1-3, B 1-4, B 1-6, Alpha-Amylase (Banu) 250 IU, Lipase 250 IU, N protease 10000 IU, Phytase 200 IU, Xylanase 2000 IU, Maltodextrin (Malto), Starch Powder.",
// //     benefits: [
// //       "Highly prevents the Vibrio bacteria infections in Pond water",
// //       "Controls the running mortality in Shrimp",
// //       "Helps to maintain the microbial balance in the Shrimp intestine",
// //       "Inhibit the communication of Vibrio Spp were presented",
// //       "Increases the immune system and improves the FCR",
// //     ],
// //     dosage: [
// //       { label: "Before stocking", dose: "1 Kg of Tablets per acre; if Vibriosis: 250 Grams/Acre" },
// //       { label: "Maintenance", dose: "500 Grams per Acre every 7–10 days for 15 days" },
// //     ],
// //     presentation: "500 g Bottle",
// //     form: "Tablet",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 9,
// //     name: "i.Bio'YEAST'vare",
// //     category: "Yeast Probiotics",
// //     type: "Probiotics",
// //     certificate: "CAA/OCT22/PRO/04250",
// //     composition:
// //       "Unique combination of Saccharomyces cerevisiae, Bacillus Subtilis.",
// //     benefits: [
// //       "Stimulates feed digestion",
// //       "Prevents and Controls Pathogenic Bacteria",
// //       "Enhanced survival rate",
// //       "Improves pond conditions with good plankton and beneficial bacterial density",
// //     ],
// //     dosage: [
// //       { label: "Feed supplement", dose: "2–3g/Kg feed" },
// //       { label: "Fermentation", dose: "1 Kg along with 10 Kgs Rice Bran and 2 Kgs Jaggery" },
// //       { label: "Pond application", dose: "1–2 Kg/Acre" },
// //     ],
// //     presentation: "1 kg Pouch",
// //     form: "Powder",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 10,
// //     name: "i.PSBVARE",
// //     category: "Photosynthetic Bacteria",
// //     type: "Probiotics",
// //     certificate: "CAA/OCT22/PRO/04254",
// //     composition: "Rhodopseudomonas palustris – 20 Billion CFU/gm.",
// //     benefits: [
// //       "Improves the quality of water in ponds",
// //       "Helps decompose many toxic matters such as nitrous acid, organic materials, ammonia, pond sludge, and hydrogen sulphide",
// //       "Decreasing diseases by restraining the pathogenic bacteria counts in the water",
// //       "Removes black soil & H₂S formed mostly by anaerobic decomposition of organic matter",
// //       "Improves the appetite of fish and shrimps and helps botanical plankton growth",
// //     ],
// //     dosage: [
// //       { label: "Initial regular use (Shrimp/Prawn/Fish)", dose: "250 Grms/Acre" },
// //       { label: "Later stage (black soil & H₂S)", dose: "500 Grms/Acre" },
// //     ],
// //     presentation: "500 g Bottle",
// //     form: "Powder",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 11,
// //     name: "i.PROPONDVARE LiQ",
// //     category: "Liquid Water & Soil Probiotics",
// //     type: "Sanitizer",
// //     certificate: "CAA - Under Process",
// //     badge: "Sanitizer",
// //     composition:
// //       "Innovative mixture and optimal liquid multi-strain blend of 16 different essential formulation strains for soil & water probiotics: Bacillus amyloliquefaciens, Bacillus denitrificans, Bacillus licheniformis, Bacillus pumilus, Bacillus subtilis, Bafidiobacterium spp., Lactobacillus acidophilus, Lactobacillus plantarum, Lactobacillus rhamnosus, Nitrobacter spp., Paracoccus denitrificans, Paracoccus pentatrophus, Saccharomyces cerevisiae, Thiobacillus ferroxidans, Thiobacillus thioxidans, DM water Q.S.",
// //     benefits: [
// //       "Enhances gut health, improves feed conversation, growth & survival and boosts immunity",
// //       "Strengthens gut micro-biota, improves digestion and enhances disease resistance",
// //       "Converts toxic ammonia into nitrites (nitrification)",
// //       "Reduces hydrogen sulfide and improves pond bottom conditions ecology and reduce sludge accumulation",
// //       "Reduce disease outbreaks like White Spot Syndrome",
// //       "Degrades organic waste, controls ammonia and suppresses Vibro spp",
// //     ],
// //     dosage: [
// //       { label: "Before stocking (Soil Application)", dose: "2 L/Acre (7 days before)" },
// //       { label: "During stocking (Pond Application)", dose: "1 L/Acre (once in every 10 days)" },
// //       { label: "DO DOC", dose: "1.5 L/Acre (once in every 10 days)" },
// //     ],
// //     presentation: "1 Ltr Bottle",
// //     form: "Liquid",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 12,
// //     name: "i.CEEVARE",
// //     category: "Vitamin C",
// //     type: "Vitamins & Nutrition",
// //     certificate: "CAA/JAN22/FA/03767",
// //     composition: "Ascorbic acid (coated Vitamin C) Coated.",
// //     benefits: [
// //       "Improves F.C.R and survival rate",
// //       "Assists in shell formation and muscle development",
// //       "Increases body weight by acceleration of growth",
// //       "Accelerates growth and gives higher survival rate",
// //       "Prevents vibrio loads attack on shrimps",
// //       "Facilitates tissue repairs and wound healing",
// //     ],
// //     dosage: [
// //       { label: "Shrimp/Prawn (Normal Conditions)", dose: "2–3 g/1 kg feed at least twice a day" },
// //       { label: "Under Stress condition", dose: "5g/1 kg feed or as directed by aqua consultant" },
// //       { label: "Fish", dose: "2 g/1 kg of feed" },
// //     ],
// //     presentation: "1 Kg Bottle",
// //     form: "Powder",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 13,
// //     name: "i.PHYTOVARE",
// //     category: "Phyto Extracts",
// //     type: "Vitamins & Nutrition",
// //     certificate: "USFDA & EU APPROVED",
// //     badge: "Premium",
// //     composition:
// //       "Innovative blend of High Quality OREGANO (Oreganum Vulgare SSP. hirtum) essential plant extracts constituted of over 30 active ingredients of Carvacrol and Thymol etc.",
// //     benefits: [
// //       "Antimicrobial effects to maintain GUT health thereby reducing enteric diseases e.g. White Feces",
// //       "Anti-oxidation to reduce stresses and protect liver",
// //       "Increase growth rate and improve FCR",
// //       "High-temperature (upto 120 Deg. C) stability and low disappearance rate in water",
// //       "Increase survival rates and reduce disease occurrence",
// //       "Enhances growth rate and feed efficiency improved reproductive success",
// //     ],
// //     dosage: [
// //       { label: "Prawn/Shrimp (Healthy condition)", dose: "10 Grams/Kg compound feed" },
// //       { label: "Infected condition", dose: "20 Grams/Kg compound feed" },
// //       { label: "Fish Feed", dose: "50 Grams/Ton compound feed" },
// //     ],
// //     presentation: "500g Bottle",
// //     form: "Powder",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 14,
// //     name: "i.LIVOVARE GEL",
// //     category: "Liver Tonic",
// //     type: "Vitamins & Nutrition",
// //     certificate: "CAA/JAN22/FA/03770",
// //     composition:
// //       "Vitamins: Vitamin C, B2, E; Amino acids: DL-Methionine and L-Lysine, and Binding agents; Nano Minerals: Nano Magnesium, Nano Calcium, Nano Potassium, Nano Zinc, Nano Selenium, Nano Cobalt, Nano Ferrous, Nano Chromium, Nano Manganese, Nano Phosphorus, Nano Molybdenum; Probiotics: Saccharomyces spp and Lactobacillus spp.",
// //     benefits: [
// //       "Improves the functional efficiency of the liver and pancreas",
// //       "Promotes digestibility and improves F.C.R",
// //       "Increases nutrient utilisation and reduce fat deposition",
// //       "Ensures Uniform growth and early harvesting",
// //       "Increase mineral absorption",
// //     ],
// //     dosage: [
// //       { label: "Up to 10 weeks", dose: "10–15 ml per 1 kg feed" },
// //       { label: "11 weeks and above", dose: "20–25 ml per 1 kg feed" },
// //     ],
// //     presentation: "20 Ltrs Barrel / 5 Ltrs Tin / 1 Ltr Bottle",
// //     form: "Gel",
// //     storage: "Keep in cool and dry place. *Shakewell before use.",
// //   },
// //   {
// //     id: 15,
// //     name: "i.IMMUNOVARE",
// //     category: "Immune Booster",
// //     type: "Health & Immunity",
// //     certificate: "CAA/APRIL 2025/FA/07489",
// //     composition:
// //       "Comprehensive blend of Macro Nutrients, Amino Acids, Vitamins, Minerals, Enzymes, Probiotics, Non-essential amino acids, Raw Materials and Vitamins as per detailed composition table.",
// //     benefits: [
// //       "Increase Nutrient Utilisation & Growth rate and reduce fat deposition",
// //       "Improve resistance towards stress & diseases and also better resistance to environmental stressors in shrimp",
// //       "Maintains correct Osmotic pressure and improves anti stress ability",
// //       "Increase survival rates and reduce disease occurrence",
// //       "Accelerate the detoxifying of deposited Toxins in Shrimp",
// //     ],
// //     dosage: [
// //       { label: "Prawn/Shrimp (at least one midday feeding)", dose: "3–5 Grams/Kg compound feed / 1–2 meal a day" },
// //     ],
// //     presentation: "500 g Bottle",
// //     form: "Powder",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 16,
// //     name: "i.HEPTOPANCVARE",
// //     category: "Hepato-Pancreatic Support",
// //     type: "Health & Immunity",
// //     certificate: "CAA/ARPIL 2025/IMMU/07492",
// //     composition:
// //       "Detailed composition includes Amino Acids, Enzymes, Essential/Non-essential amino acids, Herbal Extracts, Raw Materials and Vitamins as per specification table.",
// //     benefits: [
// //       "Protect health of hepatopancreas and intestine, with bright and translucent body, clear white membrane, strong and health",
// //       "Enhance growth performance, feed efficiency and product",
// //       "Hepatopancreas (H.P) is the power house and vital organ in animal's survival and growth",
// //       "Improve survival rate and immunity for reducing the risk of some vital disease outbreak",
// //       "Relieve nutritional white feces, especially white feces caused by liver damage",
// //     ],
// //     dosage: [
// //       { label: "Prawn/Shrimp (preventive)", dose: "5 Grams/Kg compound feed with Gel / 1 meal a day (every 15 days for 5 days)" },
// //       { label: "If problem persists", dose: "1 meal a day regularly" },
// //     ],
// //     presentation: "500 g Bottle",
// //     form: "Powder",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 17,
// //     name: "i.WFSVARE GEL",
// //     category: "Feed Additive Gel",
// //     type: "Health & Immunity",
// //     certificate: "CAA/APRIL 2025/IMMU/07487",
// //     composition:
// //       "Active Probiotics, Vitamins blend, Amino Acids, Enzymes, Probiotics, Raw Materials, Vitamins as per detailed formulation (31 active ingredients).",
// //     benefits: [
// //       "Ensures faster growth and weight gain",
// //       "Improves feed conversion ratio (FCR)",
// //       "Improves proper shell formation",
// //       "Provides necessary binding for the supplemented feed additives preventing any Wastage",
// //       "Maintains high and uniform growth",
// //     ],
// //     dosage: [
// //       { label: "During Culture", dose: "20 ml per 1 kg of Compound Feed or as advised by Consultant" },
// //     ],
// //     presentation: "5 Ltr Tin",
// //     form: "Gel",
// //     storage: "Keep in cool and dry place. *Shakewell before use.",
// //   },
// //   {
// //     id: 18,
// //     name: "i.VIRAHEALVARE",
// //     category: "Antiviral / Sanitizer",
// //     type: "Sanitizer",
// //     certificate: "CAA/OCT22/DIS/04270",
// //     badge: "Sanitizer",
// //     composition:
// //       "Triple Salt - 50% w/v (Containing Triple Salt - 50% w/v); Potassium monopersulphate, Potassium hydrogen sulphate, Potassium sulfate, Sodium Chloride, tartrazine yellow.",
// //     benefits: [
// //       "Multi-component and Multi-purpose oxidizing system with major physical and chemical components of pathogens and restrict their propagation thru this disinfectant",
// //       "Highly effective to control eradicate bacteria, fungi, moulds and all viral families effecting fish and shrimp especially WSSV",
// //       "High level of surfactancy with acidic and oxidising power providing superior destruction of bio films. An effective bactericidal and can control the vibrio in water",
// //       "Effectively control black and brown gill even under extreme stress conditions",
// //       "Product can be used in the pond and can also be applied on the surface and equipments",
// //     ],
// //     dosage: [
// //       { label: "Prawn/Shrimp (Prevention of Diseases)", dose: "500 gm to 2 Kg/ha — Apply once every fortnight according to pond water quality/condition" },
// //       { label: "Treating Diseases", dose: "Apply once every 3–5 days or as advised by Aquaculture Consultant" },
// //     ],
// //     presentation: "1 Kg Bottle",
// //     form: "Powder",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 19,
// //     name: "i.SANVARE TD",
// //     category: "Broad Spectrum Disinfectant",
// //     type: "Sanitizer",
// //     certificate: "CAA - Under Process",
// //     badge: "Sanitizer",
// //     composition:
// //       "Benzalkonium Chloride 50% (BKC) - 10%, Glutaraldehyde 50% (C5H8O2) - 10%, Malachite Green (Aniline Green) - 3%, Formaldehyde 37% - 40%, Copper Sulphate - 2%, Ammonium Chloride (NH4Cl) - 2%, Alphox 200 (9.5 moles) (Ethylene Oxide) - 3%, Stabilizers and Surfactants - QS.",
// //     benefits: [
// //       "Highly effective against fungal, bacterial and viral disease",
// //       "Kills bacteria including Gram-Positive, Ligeonella, Protozoan, viruses, algae and fungal spores",
// //       "Broad Spectrum activity against 32 harmful bacteria, 62 virus, 7 fungi and 11 spores with no resistance developed",
// //       "Prevents mite infestation in aqua Culture",
// //       "Fights against pond bottom bacteria and reduce bacterial load in the ponds",
// //       "High residual activity even in presence of organic matter",
// //     ],
// //     dosage: [
// //       { label: "Upto 3 feet depth", dose: "0.5 to 1 Ltrs per Acre" },
// //       { label: "Above 3 feet depth", dose: "1–1.5 Ltr per Acre per 3 feet" },
// //     ],
// //     presentation: "5 Ltr Tins",
// //     form: "Liquid",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 20,
// //     name: "i.SILVARE NANO",
// //     category: "Nano Silver",
// //     type: "Sanitizer",
// //     certificate: "CAA - Under Process",
// //     badge: "Sanitizer",
// //     composition:
// //       "PVP 10.8 g, Glycerol 500 ml, Silver nitrate 1.08 g, Enzymes, Amino acids, DM water Q.S.",
// //     benefits: [
// //       "Inhibit the growth of harmful bacteria attack like Vibrio spp. and break down the cell membranes of pathogenic bacteria",
// //       "Helps to reduce microbial load, improving overall pond hygiene and reducing stress on shrimp",
// //       "Boost the innate immune system of shrimp, increasing resistance to infections",
// //       "Controls viral loads and emphasizes antibiotic-resistant bacteria in aquaculture",
// //       "Clean body, gill and removes dirty materials from Shrimp body",
// //     ],
// //     dosage: [
// //       { label: "Soil Application (Before stocking)", dose: "1 L/Acre with 1 m depth of water (5 days before)" },
// //       { label: "Pond Application (Post stocking)", dose: "1 L/Acre during Vibriosis in pond water or as advised by Aquaculture Technician" },
// //     ],
// //     presentation: "1 Ltr Bottle",
// //     form: "Liquid",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 21,
// //     name: "i.OXYVARE",
// //     category: "Oxygen Granules",
// //     type: "Oxygen Products",
// //     certificate: "CAA/JAN22/CHEM/03768",
// //     badge: "Emergency Use",
// //     composition:
// //       "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity).",
// //     benefits: [
// //       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
// //       "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
// //       "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
// //       "Improves survival create during stocking in culture period and before harvesting",
// //       "It helps in development of plankton to the required levels",
// //     ],
// //     dosage: [
// //       { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
// //       { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
// //     ],
// //     presentation: "10 kgs Bucket",
// //     form: "Granules",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 22,
// //     name: "i.OXYVARE-T",
// //     category: "Oxygen Tablets",
// //     type: "Oxygen Products",
// //     certificate: "CAA/APRIL 2025/CHEM/07488",
// //     composition:
// //       "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity) in a tablet form.",
// //     benefits: [
// //       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
// //       "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
// //       "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
// //       "Improves survival create during stocking in culture period and before harvesting",
// //       "It helps in development of plankton to the required levels",
// //     ],
// //     dosage: [
// //       { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
// //       { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
// //     ],
// //     presentation: "10 Kgs Bucket",
// //     form: "Tablet",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 23,
// //     name: "i.GEOPROVARE G",
// //     category: "Zeolite Granules (with Probiotics)",
// //     type: "Zeolite Products",
// //     certificate: "CAA - Not Required",
// //     composition:
// //       "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
// //     benefits: [
// //       "Highest Cation Exchange capacity & it controls obnoxious gases instantly",
// //       "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
// //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// //       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
// //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// //       "Can maintain clean pond bottom",
// //     ],
// //     dosage: [
// //       { label: "Pond Preparation", dose: "50 Kgs/acre" },
// //       { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
// //     ],
// //     presentation: "10 kg's Pouch",
// //     form: "Granules",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 24,
// //     name: "i.GEOPROVARE P",
// //     category: "Zeolite Powder (with Probiotics)",
// //     type: "Zeolite Products",
// //     certificate: "CAA - Not Required",
// //     composition:
// //       "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
// //     benefits: [
// //       "Highest Cation Exchange capacity and it controls obnoxious gases instantly",
// //       "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
// //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// //       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
// //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// //       "Can maintain clean pond bottom",
// //     ],
// //     dosage: [
// //       { label: "Pond Preparation", dose: "50 Kgs/acre" },
// //       { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
// //     ],
// //     presentation: "10 kg's Pouch",
// //     form: "Powder",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 25,
// //     name: "i.GEOVARE P",
// //     category: "Zeolite Powder Plain",
// //     type: "Zeolite Products",
// //     certificate: "CAA - Not Required",
// //     composition:
// //       "Silicon Dioxice (SiO2): 65–70%; Sodium: 1–3%; Iron (Fe): 1–2%; Magnesium: 0.5–1.0%; Calcium Oxide (Cal): 3–5%; Potassium: 0.5–1.0%; Aluminium: 20%; LOI: 5–8%.",
// //     benefits: [
// //       "Highest Cation Exchange capacity it controls obnoxious gases instantly",
// //       "Quick and Efficient removal of obnoxious gases; Dissolved Oxygen level will be improved",
// //       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
// //       "Absorbs toxic gases like Ammonia (Nh3), Hydrogen Sulphide (H2S) and other liberated anions from pond water",
// //       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
// //       "Can maintain clean pond bottom",
// //     ],
// //     dosage: [
// //       { label: "Pond Preparation", dose: "50Kgs/acre" },
// //       { label: "During Culture", dose: "Minimum 15Kgs/acre or as advised by aqua culture technician" },
// //     ],
// //     presentation: "25Kgs Bag",
// //     form: "Powder",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 26,
// //     name: "i.TOXIVARE",
// //     category: "Yucca / Toxin Binder",
// //     type: "Water Treatment",
// //     certificate: "CAA/OCT22/FA/04255",
// //     composition:
// //       "Dry natural extract from the YUCCA schidigera plant, Ammonia binding agents and Probiotics.",
// //     benefits: [
// //       "Yucca is rich in glyco compounds that instantly binds with un-ionized ammonia thereby, reducing ammonia toxicity in the pond",
// //       "Absorbs Nh₂, So₂, Ch₂, H₂S etc. of the pond bottom and cleans the toxic gases in the water",
// //       "Reduced incidence of BOD and COD due to decrease of ammonia content in pond water",
// //       "Deodorizes and purifies pond bottom wastage and water to improve the activity of the culture species",
// //       "Increase the availability of dissolved oxygen in pond water",
// //       "Reduce in gill irrigation",
// //     ],
// //     dosage: [
// //       { label: "Pond application", dose: "500 Gm per HA of 1 meter column" },
// //       { label: "Feed application", dose: "2–5 Gm/Kg feed" },
// //     ],
// //     presentation: "1 Kg Pouch",
// //     form: "Powder",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 27,
// //     name: "i.ECOSOFTVARE",
// //     category: "EDTA",
// //     type: "Water Treatment",
// //     certificate: "CAA - Not Required",
// //     composition:
// //       "Unique combination of Ethylene Diamine Tetra Acetic Acid (EDTA) formulated salt compounds.",
// //     benefits: [
// //       "Reduces the hardness levels to optimum lower levels there by stabilizing the alkalinity in the pond water completely prevents plankton crash",
// //       "i.Ecosoftvare is used to improve water quality by reducing heavy metal concentrations",
// //       "Stabilizes the total Ammonia levels there by minimise the free ammonia in the pond water",
// //       "Helps to create toxic free environment",
// //     ],
// //     dosage: [
// //       { label: "General application", dose: "Mix 1–2 kgs in 50 Ltrs of water and spray over 1 Acre evenly" },
// //       { label: "Best practice", dose: "Apply in day light for better results or as advised by Aqua consultant" },
// //     ],
// //     presentation: "1 Kg / 5 kg Pouch",
// //     form: "Powder",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 28,
// //     name: "i.NITRONILVARE",
// //     category: "Nitrite Control",
// //     type: "Water Treatment",
// //     certificate: "CAA/OCT22/PRO/04253",
// //     composition:
// //       "Nitrosomonas, Nitrobacter, Thiobacillus Thioxidans, Thiobacillus Ferroxidans, Thiobacillus Denitrificans, Paracoccus Denitrificans, N. Protease, Fungal Phytase, Fungal Alpha Amylase.",
// //     benefits: [
// //       "It reduces nitrites (No2) content in water to safe level",
// //       "i.NITRONILVARE is powerful water treatment additive for aquaculture pond",
// //       "It prevents formation of black soil due to decay of organic pollutant Improves water quality and enhances survival rate",
// //     ],
// //     dosage: [
// //       { label: "Prawn/Shrimp", dose: "1 Kg/acre once in every 10 days" },
// //       { label: "Fish", dose: "1 Kg/acre once in every one month or advised by aqua consultant" },
// //     ],
// //     presentation: "1 Kg Bottle",
// //     form: "Powder",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 29,
// //     name: "Calcium Chloride (Fused)",
// //     category: "Chloride Salts",
// //     type: "Minerals",
// //     certificate: "CAA/OCT22/CHEM/04252",
// //     composition: "Calcium Chloride Fused.",
// //     benefits: [
// //       "Calcium has an important role in the biological processes of fish & shrimp. It is necessary for bone formation, blood clotting and their metabolic reactions",
// //       "Sodium and potassium are the most important salts in fish & shrimp blood and are critical for normal heat, nerve and muscle function",
// //       "Fish & shrimp can absorb calcium directly from the water of food",
// //       "The re-absorption of salt can reduce the energy available for growth",
// //     ],
// //     dosage: [
// //       { label: "General application", dose: "5 to 10 Kgs per acre" },
// //       { label: "Best Practice", dose: "For best results apply in the evening hours" },
// //     ],
// //     presentation: "25 Kgs Drum (5 Kg x 5 Packs)",
// //     form: "Fused",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 30,
// //     name: "Magnesium Chloride (Crystal)",
// //     category: "Chloride Salts",
// //     type: "Minerals",
// //     certificate: "CAA/OCT22/CHEM/04251",
// //     composition: "Magnesium Chloride 97% ± 2%.",
// //     benefits: [
// //       "Covers the Magnesium balance of pond water",
// //       "Protects from soft shell syndrome",
// //       "Regularizes the moult cycle",
// //       "Increase survival and body weight rate",
// //     ],
// //     dosage: [
// //       { label: "General application", dose: "5 to 10 Kgs per acre" },
// //     ],
// //     presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
// //     form: "Crystal",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 31,
// //     name: "Potassium Chloride (Crystal)",
// //     category: "Chloride Salts",
// //     type: "Minerals",
// //     certificate: "CAA/OCT22/CHEM/04256",
// //     composition: "Potassium Chloride 97% ± 2%.",
// //     benefits: [
// //       "Protects from soft shell syndrome",
// //       "Increase survival and body weight rate",
// //       "Regularizes the moult cycles",
// //       "Covers the Potassium balance of pond water",
// //     ],
// //     dosage: [
// //       { label: "General application", dose: "5 to 8 Kgs per acre" },
// //     ],
// //     presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
// //     form: "Crystal",
// //     storage: "Keep in cool and dry place.",
// //   },
// //   {
// //     id: 32,
// //     name: "i.FERRICCHLORIVARE",
// //     category: "Ferric Chloride",
// //     type: "Minerals",
// //     certificate: "CAA/ARPIL 2025/CHEM/07491",
// //     composition: "Ferric Chloride Anhydrous – 98% ± 2%. Assay: Min 98.0%.",
// //     benefits: [
// //       "Highly effective at removing suspended solids, Organic matter & Heavy metals from the Pond water",
// //       "It helps to prevent the overgrowth of Algae in Pond water",
// //       "Use as Iron supplement",
// //       "Improves Pond water bottom quality",
// //       "It helps to precipitate and inactive inorganic phosphorous in Pond water",
// //     ],
// //     dosage: [
// //       { label: "General", dose: "Consult our field staff or your aquaculture specialist for specific usage and directions" },
// //     ],
// //     presentation: "50 Kgs Drum (5Kg x 10 Packs)",
// //     form: "Crystal",
// //     storage: "Keep in cool and dry place. Special Instruction: No liability accepted for accidents arising while handling or use.",
// //   },
// // ];

// // // ─── Product Image Map ────────────────────────────────────────────────────────
// // // Maps product ID → actual filename in /public/images/
// // const PRODUCT_IMAGES: Record<number, string> = {
// //   1:  "minvare.png",           // i.MINVARE PM
// //   2:  "minare am (1).png",     // i.MINVARE AM
// //   3:  "minvare ws.png",        // i.MINVARE WS
// //   4:  "minvare fm 2.png",      // i.MINVARE FM
// //   5:  "minvare_liq.png",       // i.MINVARE LiQ
// //   6:  "propondvare 2.png",     // i.PROPONDVARE
// //   7:  "provare gut 2.png",     // i.PROVARE GUT
// //   8:  "vibriovare 2.png",      // i.VIBRIOVARE
// //   9:  "bio yeast.png",         // i.Bio'YEAST'vare
// //   10: "psbvare 2.png",         // i.PSBVARE
// //   11: "propondvare_liq.png",   // i.PROPONDVARE LiQ
// //   12: "ceevare 2.png",         // i.CEEVARE
// //   13: "phytovare 2.png",       // i.PHYTOVARE
// //   14: "livovare gel (1).png",  // i.LIVOVARE GEL
// //   15: "immunovare 2.png",      // i.IMMUNOVARE
// //   16: "heptopancvare.png",     // i.HEPTOPANCVARE
// //   17: "wfsvare gel 2.png",     // i.WFSVARE GEL
// //   18: "virahealvare 2.png",    // i.VIRAHEALVARE
// //   19: "sanvare_td 2.png",      // i.SANVARE TD
// //   20: "silvare_nano.png",      // i.SILVARE NANO
// //   21: "oxyvar 2.png",          // i.OXYVARE
// //   22: "oxyvare-t (1).png",     // i.OXYVARE-T
// //   23: "geoprovare.jpeg",       // i.GEOPROVARE G
// //   24: "geoprovare_p 2.png",    // i.GEOPROVARE P
// //   25: "geovare_p.png",         // i.GEOVARE P
// //   26: "nitronilvare.png",      // i.TOXIVARE  (closest match)
// //   27: "nitronilvare.png",      // i.ECOSOFTVARE (reuse until dedicated image added)
// //   28: "nitronilvare.png",      // i.NITRONILVARE
// //   29: "calcium chloride.png",  // Calcium Chloride
// //   30: "min.png",               // Magnesium Chloride
// //   31: "min.png",               // Potassium Chloride
// //   32: "ferric chloride 2.png", // i.FERRICCHLORIVARE
// // };

// // // ─── Category & Color Config ──────────────────────────────────────────────────
// // const CATEGORIES = [
// //   "All",
// //   "Minerals",
// //   "Probiotics",
// //   "Vitamins & Nutrition",
// //   "Health & Immunity",
// //   "Oxygen Products",
// //   "Water Treatment",
// //   "Zeolite Products",
// //   "Sanitizer",
// // ];

// // const TYPE_ACCENT: Record<string, { header: string; label: string; dot: string }> = {
// //   "Minerals":            { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" },
// //   "Probiotics":          { header: "#006644", label: "#008855", dot: "#006644" },
// //   "Vitamins & Nutrition":{ header: "#cc6600", label: "#dd7700", dot: "#cc6600" },
// //   "Health & Immunity":   { header: "#7700aa", label: "#9911cc", dot: "#7700aa" },
// //   "Oxygen Products":     { header: "#003399", label: "#0044bb", dot: "#003399" },
// //   "Water Treatment":     { header: "#005566", label: "#007788", dot: "#005566" },
// //   "Zeolite Products":    { header: "#664400", label: "#886600", dot: "#664400" },
// //   "Sanitizer":           { header: "#aa0000", label: "#cc1111", dot: "#aa0000" },
// // };

// // const getAccent = (type: string) =>
// //   TYPE_ACCENT[type] || { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" };

// // // ─── SVG Placeholder (shown when no image available) ─────────────────────────
// // function ProductPlaceholder({ color }: { color: string }) {
// //   return (
// //     <svg
// //       width="56"
// //       height="56"
// //       viewBox="0 0 56 56"
// //       fill="none"
// //       xmlns="http://www.w3.org/2000/svg"
// //       style={{ opacity: 0.22 }}
// //     >
// //       {/* Flask / bottle shape */}
// //       <rect x="21" y="6" width="14" height="10" rx="2" fill={color} />
// //       <path
// //         d="M18 16h20l6 24a6 6 0 01-6 6H18a6 6 0 01-6-6l6-24z"
// //         fill={color}
// //       />
// //       <ellipse cx="28" cy="34" rx="7" ry="5" fill="white" opacity="0.4" />
// //       <rect x="24" y="8" width="3" height="8" rx="1" fill="white" opacity="0.5" />
// //     </svg>
// //   );
// // }

// // // ─── PDF-Style Product Card ───────────────────────────────────────────────────
// // function PDFCard({ product }: { product: Product }) {
// //   const ac = getAccent(product.type);
// //   const [imgError, setImgError] = useState(false);
// //   const imgSrc = PRODUCT_IMAGES[product.id]
// //     ? `/images/${PRODUCT_IMAGES[product.id]}`
// //     : null;

// //   return (
// //     <div
// //       className="w-full bg-white rounded-xl overflow-hidden"
// //       style={{
// //         border: `2px solid ${ac.header}33`,
// //         boxShadow: "0 2px 16px rgba(0,50,120,0.08)",
// //       }}
// //     >
// //       {/* ── TOP HEADER ── */}
// //       <div className="flex items-stretch" style={{ borderBottom: `2px solid ${ac.header}` }}>
// //         {/* Blank spacer aligned with hex column */}
// //         <div
// //           style={{
// //             width: 140,
// //             flexShrink: 0,
// //             background: "#f0f6ff",
// //             borderRight: `1px solid ${ac.header}33`,
// //           }}
// //         />
// //         {/* Category */}
// //         <div className="flex items-center px-5 py-2 flex-1" style={{ background: "white" }}>
// //           <span
// //             className="font-black uppercase tracking-wide"
// //             style={{ color: ac.header, fontSize: 14, letterSpacing: 1, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// //           >
// //             {product.category}
// //           </span>
// //         </div>
// //         {/* Certificate */}
// //         {product.certificate && (
// //           <div
// //             className="flex items-center px-4 py-2"
// //             style={{
// //               background: "#fff8f0",
// //               borderLeft: `1px solid ${ac.header}44`,
// //               borderRight: `1px solid ${ac.header}44`,
// //             }}
// //           >
// //             <span
// //               className="font-bold"
// //               style={{ color: "#cc3300", fontSize: 11, fontFamily: "monospace", whiteSpace: "nowrap" }}
// //             >
// //               {product.certificate}
// //             </span>
// //           </div>
// //         )}
// //         {/* Product name chip */}
// //         <div
// //           className="flex items-center px-5 py-2"
// //           style={{ background: ac.header, minWidth: 180 }}
// //         >
// //           <span
// //             className="font-black text-white tracking-wide"
// //             style={{ fontSize: 15, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// //           >
// //             <em style={{ opacity: 0.8, fontStyle: "italic" }}>i</em>
// //             {product.name.replace(/^i[.\-']/i, "")}
// //           </span>
// //           {product.badge && (
// //             <span
// //               className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
// //               style={{ background: "rgba(255,255,255,0.2)", color: "white", whiteSpace: "nowrap" }}
// //             >
// //               {product.badge}
// //             </span>
// //           )}
// //         </div>
// //       </div>

// //       {/* ── BODY ROW ── */}
// //       <div className="flex" style={{ minHeight: 220 }}>

// //         {/* ── COL 1: Hexagon with product image ── */}
// //         <div
// //           className="flex-none flex items-center justify-center"
// //           style={{
// //             width: 140,
// //             background: `linear-gradient(160deg, ${ac.header}15 0%, ${ac.header}08 100%)`,
// //             borderRight: `1px solid ${ac.header}22`,
// //             padding: "18px 14px",
// //           }}
// //         >
// //           {/* Outer hex — thick colored border */}
// //           <div
// //             style={{
// //               width: 100,
// //               height: 110,
// //               clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// //               background: ac.header,
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //             }}
// //           >
// //             {/* White gap ring */}
// //             <div
// //               style={{
// //                 width: "calc(100% - 10px)",
// //                 height: "calc(100% - 10px)",
// //                 clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// //                 background: "white",
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //               }}
// //             >
// //               {/* Inner image hex */}
// //               <div
// //                 style={{
// //                   width: "calc(100% - 6px)",
// //                   height: "calc(100% - 6px)",
// //                   clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
// //                   background: "#EEF4FF",
// //                   display: "flex",
// //                   alignItems: "center",
// //                   justifyContent: "center",
// //                   overflow: "hidden",
// //                   position: "relative",
// //                 }}
// //               >
// //               {/* ── Actual product image ── */}
// //               {imgSrc && !imgError ? (
// //                 <Image
// //                   src={imgSrc}
// //                   alt={product.name}
// //                   fill
// //                   style={{ objectFit: "contain", padding: "8px" }}
// //                   onError={() => setImgError(true)}
// //                 />
// //               ) : (
// //                 /* ── SVG placeholder when no image — NO text shown ── */
// //                 <ProductPlaceholder color={ac.header} />
// //               )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ── COL 2: Benefits ── */}
// //         <div
// //           className="flex-1 p-4"
// //           style={{ borderRight: `1px solid ${ac.header}22`, background: "white", minWidth: 0 }}
// //         >
// //           <div
// //             className="font-bold mb-2 uppercase tracking-wide"
// //             style={{ color: ac.header, fontSize: 11 }}
// //           >
// //             Benefits:
// //           </div>
// //           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
// //             {product.benefits.map((b, i) => (
// //               <li
// //                 key={i}
// //                 style={{
// //                   fontSize: 11.5,
// //                   color: "#1e2d3d",
// //                   lineHeight: 1.6,
// //                   paddingLeft: 14,
// //                   paddingBottom: 3,
// //                   position: "relative",
// //                   fontFamily: "'Segoe UI', system-ui, sans-serif",
// //                 }}
// //               >
// //                 <span
// //                   style={{
// //                     position: "absolute",
// //                     left: 1,
// //                     top: "0.15em",
// //                     color: ac.header,
// //                     fontSize: 13,
// //                     lineHeight: 1,
// //                   }}
// //                 >
// //                   •
// //                 </span>
// //                 {b}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* ── COL 3: Composition ── */}
// //         <div
// //           className="p-4"
// //           style={{
// //             width: 260,
// //             flexShrink: 0,
// //             borderRight: `1px solid ${ac.header}22`,
// //             background: "#fafeff",
// //           }}
// //         >
// //           <div
// //             className="font-bold mb-2 uppercase tracking-wide"
// //             style={{ color: ac.header, fontSize: 11 }}
// //           >
// //             Composition:
// //           </div>
// //           <p
// //             style={{
// //               fontSize: 11,
// //               color: "#2a3c50",
// //               lineHeight: 1.7,
// //               textAlign: "justify",
// //               hyphens: "auto",
// //               fontFamily: "'Segoe UI', system-ui, sans-serif",
// //             }}
// //           >
// //             {product.composition}
// //           </p>
// //         </div>

// //         {/* ── COL 4: Dosage + Presentation / Form / Storage ── */}
// //         <div
// //           className="p-4"
// //           style={{
// //             width: 220,
// //             flexShrink: 0,
// //             background: "#f7faff",
// //           }}
// //         >
// //           <div
// //             className="font-bold mb-1.5 uppercase tracking-wide"
// //             style={{ color: ac.header, fontSize: 11 }}
// //           >
// //             Dosage:
// //           </div>
// //           {product.dosage.map((d, i) => (
// //             <div key={i} style={{ marginBottom: 6 }}>
// //               <div
// //                 style={{
// //                   fontSize: 10,
// //                   fontWeight: 700,
// //                   color: ac.label,
// //                   lineHeight: 1.3,
// //                   marginBottom: 1,
// //                 }}
// //               >
// //                 {d.label}:
// //               </div>
// //               <div style={{ fontSize: 10.5, color: "#1a2b3c", lineHeight: 1.55 }}>
// //                 {d.dose}
// //               </div>
// //             </div>
// //           ))}

// //           <div
// //             style={{
// //               borderTop: `1px solid ${ac.header}33`,
// //               marginTop: 10,
// //               paddingTop: 10,
// //             }}
// //           >
// //             <div
// //               className="font-bold uppercase"
// //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// //             >
// //               Presentation:
// //             </div>
// //             <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6, lineHeight: 1.4 }}>
// //               {product.presentation}
// //             </div>

// //             <div
// //               className="font-bold uppercase"
// //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// //             >
// //               Form:
// //             </div>
// //             <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6 }}>
// //               {product.form}
// //             </div>

// //             <div
// //               className="font-bold uppercase"
// //               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
// //             >
// //               Storage &amp; Caution:
// //             </div>
// //             <div style={{ fontSize: 11, color: "#1a2b3c", lineHeight: 1.5 }}>
// //               {product.storage}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // ─── Main Page ────────────────────────────────────────────────────────────────
// // export default function CataloguePage() {
// //   const [activeCategory, setActiveCategory] = useState("All");
// //   const [search, setSearch] = useState("");
// //   const gridRef = useRef<HTMLDivElement>(null);

// //   const filtered = PRODUCTS.filter((p) => {
// //     const matchCat =
// //       activeCategory === "All" ||
// //       p.type === activeCategory ||
// //       (activeCategory === "Sanitizer" && p.badge === "Sanitizer");
// //     const q = search.toLowerCase();
// //     const matchSearch =
// //       !q ||
// //       p.name.toLowerCase().includes(q) ||
// //       p.category.toLowerCase().includes(q) ||
// //       p.composition.toLowerCase().includes(q) ||
// //       p.benefits.some((b) => b.toLowerCase().includes(q));
// //     return matchCat && matchSearch;
// //   });

// //   return (
// //     <div
// //       className="min-h-screen bg-[#eef3f9]"
// //       style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
// //     >
// //       {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
// //       <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2557] via-[#2A5DA8] to-[#0e7fc2]">
// //         <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border-[80px] border-white/5 translate-x-48 -translate-y-48 pointer-events-none" />
// //         <div className="absolute top-12 right-64 w-[300px] h-[300px] rounded-full border-[50px] border-white/5 pointer-events-none" />
// //         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border-[60px] border-white/5 -translate-x-32 translate-y-32 pointer-events-none" />
// //         <div
// //           className="absolute inset-0 opacity-5 pointer-events-none"
// //           style={{
// //             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,2 55,16 55,44 30,58 5,44 5,16' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
// //             backgroundSize: "60px 60px",
// //           }}
// //         />

// //         <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-14">
// //           <div className="flex items-start justify-between gap-8 flex-wrap">
// //             <div>
// //               {/* ── Logo / brand block ── */}
// //               <div className="flex items-center gap-3 mb-5">
// //                 <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center flex-shrink-0">
// //                   <span className="text-white font-black text-xl italic">i</span>
// //                 </div>
// //                 <div className="flex flex-col items-start">
// //                   <p className="text-white text-sm font-semibold leading-tight">
// //                     Innovare Biopharma LLP
// //                   </p>
// //                   <p className="text-white/50 text-[11px] leading-tight">
// //                     Solution to Aquaculture Health
// //                   </p>
// //                 </div>
// //               </div>

// //               {/* ── Heading aligned to logo text left edge ── */}
// //               <div className="pl-[60px]">
// //                 <h1 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
// //                   Product
// //                   <br />
// //                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
// //                     Catalogue
// //                   </span>
// //                 </h1>
// //                 <p className="mt-4 text-white/65 text-sm max-w-xl leading-relaxed">
// //                   Complete reference guide — compositions, benefits, dosages and certifications for all Innovare Biopharma aquaculture solutions.
// //                 </p>
// //                 <div className="flex flex-wrap gap-3 mt-6">
// //                   {[
// //                     { value: `${PRODUCTS.length}+`, label: "Products" },
// //                     { value: "ISO 9001:2015", label: "Certified" },
// //                     { value: "GMP", label: "Quality Practice" },
// //                     { value: "MSME", label: "Registered" },
// //                   ].map((s) => (
// //                     <div
// //                       key={s.label}
// //                       className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3"
// //                     >
// //                       <div className="text-white font-black text-lg leading-none">{s.value}</div>
// //                       <div className="text-white/55 text-[11px] font-semibold mt-0.5">{s.label}</div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Search */}
// //             <div className="flex flex-col gap-2 mt-2">
// //               <div className="relative">
// //                 <input
// //                   type="text"
// //                   placeholder="Search products, ingredients, benefits..."
// //                   value={search}
// //                   onChange={(e) => setSearch(e.target.value)}
// //                   className="w-80 pl-10 pr-4 py-3 rounded-2xl border border-white/25 bg-white/10 text-white placeholder-white/40 text-sm outline-none focus:bg-white/20 focus:border-white/50 transition-all"
// //                 />
// //                 <svg
// //                   className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
// //                   width="16"
// //                   height="16"
// //                   viewBox="0 0 24 24"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="2"
// //                 >
// //                   <circle cx="11" cy="11" r="8" />
// //                   <path d="m21 21-4.35-4.35" />
// //                 </svg>
// //               </div>
// //               <p className="text-white/40 text-xs text-right">
// //                 Showing{" "}
// //                 <span className="text-white/80 font-bold">{filtered.length}</span> of{" "}
// //                 {PRODUCTS.length} products
// //               </p>
// //             </div>
// //           </div>

// //           {/* ── Category Filter Tabs ── */}
// //           <div className="mt-8 pl-[60px] flex flex-wrap gap-2">
// //             {CATEGORIES.map((cat) => {
// //               const active = activeCategory === cat;
// //               const count =
// //                 cat === "All"
// //                   ? PRODUCTS.length
// //                   : PRODUCTS.filter(
// //                       (p) =>
// //                         p.type === cat ||
// //                         (cat === "Sanitizer" && p.badge === "Sanitizer")
// //                     ).length;
// //               return (
// //                 <button
// //                   key={cat}
// //                   onClick={() => setActiveCategory(cat)}
// //                   className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200"
// //                   style={{
// //                     background: active ? "white" : "rgba(255,255,255,0.1)",
// //                     color: active ? "#0f2557" : "rgba(255,255,255,0.75)",
// //                     border: active ? "none" : "1px solid rgba(255,255,255,0.2)",
// //                     boxShadow: active ? "0 4px 14px rgba(0,0,0,0.15)" : "none",
// //                   }}
// //                 >
// //                   {cat}
// //                   <span
// //                     className="rounded-full px-1.5 py-0.5"
// //                     style={{
// //                       background: active ? "#2A5DA8" : "rgba(255,255,255,0.15)",
// //                       color: active ? "white" : "rgba(255,255,255,0.7)",
// //                       fontSize: 9,
// //                       fontWeight: 800,
// //                     }}
// //                   >
// //                     {count}
// //                   </span>
// //                 </button>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </div>

// //       {/* ══ PRODUCT LIST ════════════════════════════════════════════════════════ */}
// //       <div className="w-full max-w-[1400px] mx-auto px-6 py-8" ref={gridRef}>
// //         {filtered.length === 0 ? (
// //           <div className="flex flex-col items-center py-32 text-gray-400">
// //             <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
// //               <svg
// //                 width="32"
// //                 height="32"
// //                 viewBox="0 0 24 24"
// //                 fill="none"
// //                 stroke="#9ca3af"
// //                 strokeWidth="1.5"
// //               >
// //                 <circle cx="11" cy="11" r="8" />
// //                 <path d="m21 21-4.35-4.35" />
// //               </svg>
// //             </div>
// //             <p className="font-semibold text-base text-gray-500">No products found</p>
// //             <button
// //               onClick={() => {
// //                 setSearch("");
// //                 setActiveCategory("All");
// //               }}
// //               className="mt-4 px-5 py-2 rounded-xl bg-[#2A5DA8] text-white text-sm font-semibold"
// //             >
// //               Clear Filters
// //             </button>
// //           </div>
// //         ) : (
// //           <div className="flex flex-col gap-5">
// //             {filtered.map((p) => (
// //               <PDFCard key={p.id} product={p} />
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       <Footer />
// //     </div>
// //   );
// // }
// "use client";

// import Footer from "@/components/Footer";
// import Image from "next/image";
// import { useState, useRef } from "react";

// // ─── Types ────────────────────────────────────────────────────────────────────
// type Product = {
//   id: number;
//   name: string;
//   category: string;
//   type: string;
//   certificate: string;
//   composition: string;
//   benefits: string[];
//   dosage: { label: string; dose: string }[];
//   presentation: string;
//   form: string;
//   storage: string;
//   badge?: string;
//   tag?: string;
// };

// // ─── Data ─────────────────────────────────────────────────────────────────────
// const PRODUCTS: Product[] = [
//   {
//     id: 1,
//     name: "i.MINVARE PM",
//     category: "Pond Minerals",
//     type: "Minerals",
//     certificate: "CAA/JAN22/FA/03765",
//     composition:
//       "Innovative blend of essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Phosphorus, Copper, Sodium; Amino acids: DL-Methionine, L-Lysine; Probiotics: Bacillus subtilis 10B, Bacillus licheniformis 10B, Bacillus Coagulans 10B, Lactobacillus acidophilus 10B, Saccharomyces cervisiae 10B.",
//     benefits: [
//       "Improves F.C.R",
//       "Helps in regular moulting and formation of exoskeleton in shrimp",
//       "Maintain pH of pond water",
//       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
//       "Improve Phytoplankton and Zooplankton in the pond water",
//       "Helps for immune response and defence mechanism",
//       "Helps in uniform growth in shrimp and fish",
//     ],
//     dosage: [
//       { label: "Shrimp/Prawn", dose: "10 kgs per Acre" },
//       { label: "Fish", dose: "3 kgs per Acre" },
//     ],
//     presentation: "10 Kg's Pouch",
//     form: "Powder",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 2,
//     name: "i.MINVARE AM",
//     category: "Pond Minerals",
//     type: "Minerals",
//     certificate: "",
//     composition:
//       "Innovative blend of essential Micro and Macro Minerals: Calcium, Dolomite, Sulphates containing Magnesium, Manganese, Zinc, Ferrous, Copper; Sodium Chlorides; Potassium; Phosphates: Di Calcium, Rock, Mono Sodium, Mono Potassium.",
//     benefits: [
//       "Improves F.C.R",
//       "Helps in regular moulting and formation of exoskeleton in shrimp",
//       "Maintain pH of pond water",
//       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
//       "Improve Phytoplankton and Zooplankton in the pond water",
//       "Helps for immune response and defence mechanism",
//       "Helps in uniform growth in shrimp and fish",
//     ],
//     dosage: [
//       { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
//       { label: "Fish", dose: "5 Kgs per Acre" },
//     ],
//     presentation: "20 kg Bag",
//     form: "Powder",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 3,
//     name: "i.MINVARE WS",
//     category: "Pond Minerals",
//     type: "Minerals",
//     certificate: "CAA/APRIL 2025/MIN/07490",
//     composition:
//       "Innovative blend of essential Macro Minerals: Calcium, Dolomite, Zeolite; Sulphates: Magnesium, Manganese, Zinc, Ferrous, Copper; Chlorides: Potassium; Phosphates: Di Calcium, Rock, Sodium.",
//     benefits: [
//       "Improves F.C.R",
//       "Helps in regular moulting and formation of exoskeleton in shrimp",
//       "Maintain pH of pond water",
//       "Reduce organic nutrient deficiency providing all major macro and trace minerals",
//       "Improve Phytoplankton and Zooplankton in the pond water",
//       "Helps for immune response and defence mechanism",
//       "Helps in uniform growth in shrimp and fish",
//     ],
//     dosage: [
//       { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
//       { label: "Fish", dose: "5 Kgs per Acre" },
//     ],
//     presentation: "20 Kgs Bag",
//     form: "Powder",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 4,
//     name: "i.MINVARE FM",
//     category: "Feed Minerals",
//     type: "Minerals",
//     certificate: "CAA/JAN22/FA/03766",
//     composition:
//       "Essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Cobalt, Phosphorus, Copper, Selenium; Vitamins B2, B12, AD3, E; Amino acids: DL-Methionine, L-Lysine; Probiotics; Enzymes: Amylase, Protease, Cellulose, β.Galactose.",
//     benefits: [
//       "Improves F.C.R",
//       "Protects from shell and muscle related problems",
//       "Helps in moulting process and formation of exoskeleton in shrimp",
//       "Improves hormonal and enzymatic activities in shrimp",
//       "Protection from loose shell syndrome",
//       "Improves metabolism",
//       "Promotes fast body growth and gains more body weight",
//       "Improves effectively the digestive system",
//     ],
//     dosage: [
//       { label: "Shrimp/Prawn", dose: "5–8 gm/kg feed" },
//       { label: "Fish", dose: "1–3 kgs per ton feed" },
//     ],
//     presentation: "1 Kg & 5 Kg's Pouch",
//     form: "Powder",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 5,
//     name: "i.MINVARE LiQ",
//     category: "Liquid Minerals",
//     type: "Minerals",
//     certificate: "",
//     composition:
//       "Innovative mixture of optimal liquid blend of balanced essential Macro and Trace element Aqua culture feed supplements minerals: Amino Protein 2g, Buffer phosphonic acid 2.5g, Calcium lactate 1.5g, Calcium phosphate monobasic 5.5g, Citric acid 2g, Di potassium phosphate 5.35g, Di sodium phosphate 3.25g, Magnesium citrate 750mg, Potassium chloride 1.5g, Sodium citrate 2.5g, Trace mineral complex (Glycinated) 2g, DM water Q.S.",
//     benefits: [
//       "Prevents and controls white muscle / soft shell syndrome and body cramping problem",
//       "Improves and enhances the development of phytoplankton and zooplankton",
//       "Regulates the moulting cycle and survival rate",
//       "Balances minerals deficiency in water, soil and shrimp",
//       "Improves metabolism, digestive system and FCR",
//       "Improves mineral absorption and pond water nutrition",
//     ],
//     dosage: [
//       { label: "Pond Application", dose: "50 Ltrs/Acre (once every 10 days)" },
//       { label: "Feed Application", dose: "5–10 ml/kg feed (30 min before feeding)" },
//     ],
//     presentation: "1 Ltr Bottle",
//     form: "Liquid",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 6,
//     name: "i.PROPONDVARE",
//     category: "Water & Soil Probiotics",
//     type: "Probiotics",
//     certificate: "CAA/JAN22/PRO/03769",
//     composition:
//       "Bacillus subtilis, Bacillus megaterium, Bacillus licheniformis, Bacillus polymyxa, Bacillus pumilis, Saccharomyces cerevisiae, Cellulomanas cartae, p.pantotrophus, Nitrosomonas, Nitrobacter, Pseidomonas denitricans, l.plantarum, l.acidophilus, Rhodobacter sphaeroides, Thiobacillus thiooxidans & Thiobacillus ferroxidans.",
//     benefits: [
//       "Degradation of organic waste and maintains phytoplankton bloom",
//       "Improves water and soil quality and increases aquatic animal production",
//       "Stabilizes pond pH and maintains optimum alkalinity",
//       "Increases collagen synthesis and accelerates encrustation",
//       "Removes unwanted micro-organisms",
//       "Strengthens the immune system",
//     ],
//     dosage: [
//       { label: "Initial booster (Shrimp/Prawn/Fish)", dose: "1.5 Kg/Ha" },
//       { label: "Maintenance", dose: "1 Kg/Ha every 7–10 days" },
//     ],
//     presentation: "1 kg Bottle",
//     form: "Powder",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 7,
//     name: "i.PROVARE GUT",
//     category: "Gut Probiotics",
//     type: "Probiotics",
//     certificate: "CAA/JAN22/PRO/03771",
//     composition:
//       "High strength GUT Probiotics: Lactobacillus plantarum, Lactobacillus acidophilus, Saccharomyces cervisiae; Enzymes: N Protease and Fungal phytase; Herbal extracts: Phyllanthus emblica Linn., Zingiber officinale and Trigonella foenum-graecum.",
//     benefits: [
//       "Improves digestion and feed intake while protecting GUT health",
//       "Prevents the occurrence of Mycosporidia infection",
//       "Prevents development of pathogenic bacteria and affects to maintain the GUT micro flora",
//       "Improves FCR and lower GUT pH",
//       "Support health, performance and growth of aquatic species",
//       "Prevents the onset of loose shell syndrome",
//     ],
//     dosage: [
//       { label: "Shrimp", dose: "5–10 Grams per Kg feed" },
//       { label: "Fish", dose: "10–15 Grams per Kg feed" },
//     ],
//     presentation: "1 kg Bottle",
//     form: "Powder",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 8,
//     name: "i.VIBRIOVARE",
//     category: "Vibrio Control",
//     type: "Probiotics",
//     certificate: "CAA - Under Process",
//     composition:
//       "Bacillus magaterium (2.5B), Bacillus polymyxa (2.5B), Bacillus pumilus (2.5B), Paracoccus marginatus (0.5B), Paracoccus pantotropus (2B), Streptococcus thermophillus (2.5B), Bacillus amyloliquificans (1B), Bacillus mesentrices (0.5B), Enterococcus facium (2.5B), Lactobacillus rhamnosus (2B), Lactobacillus sporogenous (1B), Pediococcus Acidilactici (0.5B), Mannan Oligo Saccharide (MOS), Beta Glucins B 1-3, B 1-4, B 1-6, Alpha-Amylase (Banu) 250 IU, Lipase 250 IU, N protease 10000 IU, Phytase 200 IU, Xylanase 2000 IU, Maltodextrin (Malto), Starch Powder.",
//     benefits: [
//       "Highly prevents the Vibrio bacteria infections in Pond water",
//       "Controls the running mortality in Shrimp",
//       "Helps to maintain the microbial balance in the Shrimp intestine",
//       "Inhibit the communication of Vibrio Spp were presented",
//       "Increases the immune system and improves the FCR",
//     ],
//     dosage: [
//       { label: "Before stocking", dose: "1 Kg of Tablets per acre; if Vibriosis: 250 Grams/Acre" },
//       { label: "Maintenance", dose: "500 Grams per Acre every 7–10 days for 15 days" },
//     ],
//     presentation: "500 g Bottle",
//     form: "Tablet",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 9,
//     name: "i.Bio'YEAST'vare",
//     category: "Yeast Probiotics",
//     type: "Probiotics",
//     certificate: "CAA/OCT22/PRO/04250",
//     composition:
//       "Unique combination of Saccharomyces cerevisiae, Bacillus Subtilis.",
//     benefits: [
//       "Stimulates feed digestion",
//       "Prevents and Controls Pathogenic Bacteria",
//       "Enhanced survival rate",
//       "Improves pond conditions with good plankton and beneficial bacterial density",
//     ],
//     dosage: [
//       { label: "Feed supplement", dose: "2–3g/Kg feed" },
//       { label: "Fermentation", dose: "1 Kg along with 10 Kgs Rice Bran and 2 Kgs Jaggery" },
//       { label: "Pond application", dose: "1–2 Kg/Acre" },
//     ],
//     presentation: "1 kg Pouch",
//     form: "Powder",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 10,
//     name: "i.PSBVARE",
//     category: "Photosynthetic Bacteria",
//     type: "Probiotics",
//     certificate: "CAA/OCT22/PRO/04254",
//     composition: "Rhodopseudomonas palustris – 20 Billion CFU/gm.",
//     benefits: [
//       "Improves the quality of water in ponds",
//       "Helps decompose many toxic matters such as nitrous acid, organic materials, ammonia, pond sludge, and hydrogen sulphide",
//       "Decreasing diseases by restraining the pathogenic bacteria counts in the water",
//       "Removes black soil & H₂S formed mostly by anaerobic decomposition of organic matter",
//       "Improves the appetite of fish and shrimps and helps botanical plankton growth",
//     ],
//     dosage: [
//       { label: "Initial regular use (Shrimp/Prawn/Fish)", dose: "250 Grms/Acre" },
//       { label: "Later stage (black soil & H₂S)", dose: "500 Grms/Acre" },
//     ],
//     presentation: "500 g Bottle",
//     form: "Powder",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 11,
//     name: "i.PROPONDVARE LiQ",
//     category: "Liquid Water & Soil Probiotics",
//     type: "Sanitizer",
//     certificate: "CAA - Under Process",
//     badge: "Sanitizer",
//     composition:
//       "Innovative mixture and optimal liquid multi-strain blend of 16 different essential formulation strains for soil & water probiotics: Bacillus amyloliquefaciens, Bacillus denitrificans, Bacillus licheniformis, Bacillus pumilus, Bacillus subtilis, Bafidiobacterium spp., Lactobacillus acidophilus, Lactobacillus plantarum, Lactobacillus rhamnosus, Nitrobacter spp., Paracoccus denitrificans, Paracoccus pentatrophus, Saccharomyces cerevisiae, Thiobacillus ferroxidans, Thiobacillus thioxidans, DM water Q.S.",
//     benefits: [
//       "Enhances gut health, improves feed conversation, growth & survival and boosts immunity",
//       "Strengthens gut micro-biota, improves digestion and enhances disease resistance",
//       "Converts toxic ammonia into nitrites (nitrification)",
//       "Reduces hydrogen sulfide and improves pond bottom conditions ecology and reduce sludge accumulation",
//       "Reduce disease outbreaks like White Spot Syndrome",
//       "Degrades organic waste, controls ammonia and suppresses Vibro spp",
//     ],
//     dosage: [
//       { label: "Before stocking (Soil Application)", dose: "2 L/Acre (7 days before)" },
//       { label: "During stocking (Pond Application)", dose: "1 L/Acre (once in every 10 days)" },
//       { label: "DO DOC", dose: "1.5 L/Acre (once in every 10 days)" },
//     ],
//     presentation: "1 Ltr Bottle",
//     form: "Liquid",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 12,
//     name: "i.CEEVARE",
//     category: "Vitamin C",
//     type: "Vitamins & Nutrition",
//     certificate: "CAA/JAN22/FA/03767",
//     composition: "Ascorbic acid (coated Vitamin C) Coated.",
//     benefits: [
//       "Improves F.C.R and survival rate",
//       "Assists in shell formation and muscle development",
//       "Increases body weight by acceleration of growth",
//       "Accelerates growth and gives higher survival rate",
//       "Prevents vibrio loads attack on shrimps",
//       "Facilitates tissue repairs and wound healing",
//     ],
//     dosage: [
//       { label: "Shrimp/Prawn (Normal Conditions)", dose: "2–3 g/1 kg feed at least twice a day" },
//       { label: "Under Stress condition", dose: "5g/1 kg feed or as directed by aqua consultant" },
//       { label: "Fish", dose: "2 g/1 kg of feed" },
//     ],
//     presentation: "1 Kg Bottle",
//     form: "Powder",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 13,
//     name: "i.PHYTOVARE",
//     category: "Phyto Extracts",
//     type: "Vitamins & Nutrition",
//     certificate: "USFDA & EU APPROVED",
//     badge: "Premium",
//     composition:
//       "Innovative blend of High Quality OREGANO (Oreganum Vulgare SSP. hirtum) essential plant extracts constituted of over 30 active ingredients of Carvacrol and Thymol etc.",
//     benefits: [
//       "Antimicrobial effects to maintain GUT health thereby reducing enteric diseases e.g. White Feces",
//       "Anti-oxidation to reduce stresses and protect liver",
//       "Increase growth rate and improve FCR",
//       "High-temperature (upto 120 Deg. C) stability and low disappearance rate in water",
//       "Increase survival rates and reduce disease occurrence",
//       "Enhances growth rate and feed efficiency improved reproductive success",
//     ],
//     dosage: [
//       { label: "Prawn/Shrimp (Healthy condition)", dose: "10 Grams/Kg compound feed" },
//       { label: "Infected condition", dose: "20 Grams/Kg compound feed" },
//       { label: "Fish Feed", dose: "50 Grams/Ton compound feed" },
//     ],
//     presentation: "500g Bottle",
//     form: "Powder",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 14,
//     name: "i.LIVOVARE GEL",
//     category: "Liver Tonic",
//     type: "Vitamins & Nutrition",
//     certificate: "CAA/JAN22/FA/03770",
//     composition:
//       "Vitamins: Vitamin C, B2, E; Amino acids: DL-Methionine and L-Lysine, and Binding agents; Nano Minerals: Nano Magnesium, Nano Calcium, Nano Potassium, Nano Zinc, Nano Selenium, Nano Cobalt, Nano Ferrous, Nano Chromium, Nano Manganese, Nano Phosphorus, Nano Molybdenum; Probiotics: Saccharomyces spp and Lactobacillus spp.",
//     benefits: [
//       "Improves the functional efficiency of the liver and pancreas",
//       "Promotes digestibility and improves F.C.R",
//       "Increases nutrient utilisation and reduce fat deposition",
//       "Ensures Uniform growth and early harvesting",
//       "Increase mineral absorption",
//     ],
//     dosage: [
//       { label: "Up to 10 weeks", dose: "10–15 ml per 1 kg feed" },
//       { label: "11 weeks and above", dose: "20–25 ml per 1 kg feed" },
//     ],
//     presentation: "20 Ltrs Barrel / 5 Ltrs Tin / 1 Ltr Bottle",
//     form: "Gel",
//     storage: "Keep in cool and dry place. *Shakewell before use.",
//   },
//   {
//     id: 15,
//     name: "i.IMMUNOVARE",
//     category: "Immune Booster",
//     type: "Health & Immunity",
//     certificate: "CAA/APRIL 2025/FA/07489",
//     composition:
//       "Comprehensive blend of Macro Nutrients, Amino Acids, Vitamins, Minerals, Enzymes, Probiotics, Non-essential amino acids, Raw Materials and Vitamins as per detailed composition table.",
//     benefits: [
//       "Increase Nutrient Utilisation & Growth rate and reduce fat deposition",
//       "Improve resistance towards stress & diseases and also better resistance to environmental stressors in shrimp",
//       "Maintains correct Osmotic pressure and improves anti stress ability",
//       "Increase survival rates and reduce disease occurrence",
//       "Accelerate the detoxifying of deposited Toxins in Shrimp",
//     ],
//     dosage: [
//       { label: "Prawn/Shrimp (at least one midday feeding)", dose: "3–5 Grams/Kg compound feed / 1–2 meal a day" },
//     ],
//     presentation: "500 g Bottle",
//     form: "Powder",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 16,
//     name: "i.HEPTOPANCVARE",
//     category: "Hepato-Pancreatic Support",
//     type: "Health & Immunity",
//     certificate: "CAA/ARPIL 2025/IMMU/07492",
//     composition:
//       "Detailed composition includes Amino Acids, Enzymes, Essential/Non-essential amino acids, Herbal Extracts, Raw Materials and Vitamins as per specification table.",
//     benefits: [
//       "Protect health of hepatopancreas and intestine, with bright and translucent body, clear white membrane, strong and health",
//       "Enhance growth performance, feed efficiency and product",
//       "Hepatopancreas (H.P) is the power house and vital organ in animal's survival and growth",
//       "Improve survival rate and immunity for reducing the risk of some vital disease outbreak",
//       "Relieve nutritional white feces, especially white feces caused by liver damage",
//     ],
//     dosage: [
//       { label: "Prawn/Shrimp (preventive)", dose: "5 Grams/Kg compound feed with Gel / 1 meal a day (every 15 days for 5 days)" },
//       { label: "If problem persists", dose: "1 meal a day regularly" },
//     ],
//     presentation: "500 g Bottle",
//     form: "Powder",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 17,
//     name: "i.WFSVARE GEL",
//     category: "Feed Additive Gel",
//     type: "Health & Immunity",
//     certificate: "CAA/APRIL 2025/IMMU/07487",
//     composition:
//       "Active Probiotics, Vitamins blend, Amino Acids, Enzymes, Probiotics, Raw Materials, Vitamins as per detailed formulation (31 active ingredients).",
//     benefits: [
//       "Ensures faster growth and weight gain",
//       "Improves feed conversion ratio (FCR)",
//       "Improves proper shell formation",
//       "Provides necessary binding for the supplemented feed additives preventing any Wastage",
//       "Maintains high and uniform growth",
//     ],
//     dosage: [
//       { label: "During Culture", dose: "20 ml per 1 kg of Compound Feed or as advised by Consultant" },
//     ],
//     presentation: "5 Ltr Tin",
//     form: "Gel",
//     storage: "Keep in cool and dry place. *Shakewell before use.",
//   },
//   {
//     id: 18,
//     name: "i.VIRAHEALVARE",
//     category: "Antiviral / Sanitizer",
//     type: "Sanitizer",
//     certificate: "CAA/OCT22/DIS/04270",
//     badge: "Sanitizer",
//     composition:
//       "Triple Salt - 50% w/v (Containing Triple Salt - 50% w/v); Potassium monopersulphate, Potassium hydrogen sulphate, Potassium sulfate, Sodium Chloride, tartrazine yellow.",
//     benefits: [
//       "Multi-component and Multi-purpose oxidizing system with major physical and chemical components of pathogens and restrict their propagation thru this disinfectant",
//       "Highly effective to control eradicate bacteria, fungi, moulds and all viral families effecting fish and shrimp especially WSSV",
//       "High level of surfactancy with acidic and oxidising power providing superior destruction of bio films. An effective bactericidal and can control the vibrio in water",
//       "Effectively control black and brown gill even under extreme stress conditions",
//       "Product can be used in the pond and can also be applied on the surface and equipments",
//     ],
//     dosage: [
//       { label: "Prawn/Shrimp (Prevention of Diseases)", dose: "500 gm to 2 Kg/ha — Apply once every fortnight according to pond water quality/condition" },
//       { label: "Treating Diseases", dose: "Apply once every 3–5 days or as advised by Aquaculture Consultant" },
//     ],
//     presentation: "1 Kg Bottle",
//     form: "Powder",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 19,
//     name: "i.SANVARE TD",
//     category: "Broad Spectrum Disinfectant",
//     type: "Sanitizer",
//     certificate: "CAA - Under Process",
//     badge: "Sanitizer",
//     composition:
//       "Benzalkonium Chloride 50% (BKC) - 10%, Glutaraldehyde 50% (C5H8O2) - 10%, Malachite Green (Aniline Green) - 3%, Formaldehyde 37% - 40%, Copper Sulphate - 2%, Ammonium Chloride (NH4Cl) - 2%, Alphox 200 (9.5 moles) (Ethylene Oxide) - 3%, Stabilizers and Surfactants - QS.",
//     benefits: [
//       "Highly effective against fungal, bacterial and viral disease",
//       "Kills bacteria including Gram-Positive, Ligeonella, Protozoan, viruses, algae and fungal spores",
//       "Broad Spectrum activity against 32 harmful bacteria, 62 virus, 7 fungi and 11 spores with no resistance developed",
//       "Prevents mite infestation in aqua Culture",
//       "Fights against pond bottom bacteria and reduce bacterial load in the ponds",
//       "High residual activity even in presence of organic matter",
//     ],
//     dosage: [
//       { label: "Upto 3 feet depth", dose: "0.5 to 1 Ltrs per Acre" },
//       { label: "Above 3 feet depth", dose: "1–1.5 Ltr per Acre per 3 feet" },
//     ],
//     presentation: "5 Ltr Tins",
//     form: "Liquid",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 20,
//     name: "i.SILVARE NANO",
//     category: "Nano Silver",
//     type: "Sanitizer",
//     certificate: "CAA - Under Process",
//     badge: "Sanitizer",
//     composition:
//       "PVP 10.8 g, Glycerol 500 ml, Silver nitrate 1.08 g, Enzymes, Amino acids, DM water Q.S.",
//     benefits: [
//       "Inhibit the growth of harmful bacteria attack like Vibrio spp. and break down the cell membranes of pathogenic bacteria",
//       "Helps to reduce microbial load, improving overall pond hygiene and reducing stress on shrimp",
//       "Boost the innate immune system of shrimp, increasing resistance to infections",
//       "Controls viral loads and emphasizes antibiotic-resistant bacteria in aquaculture",
//       "Clean body, gill and removes dirty materials from Shrimp body",
//     ],
//     dosage: [
//       { label: "Soil Application (Before stocking)", dose: "1 L/Acre with 1 m depth of water (5 days before)" },
//       { label: "Pond Application (Post stocking)", dose: "1 L/Acre during Vibriosis in pond water or as advised by Aquaculture Technician" },
//     ],
//     presentation: "1 Ltr Bottle",
//     form: "Liquid",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 21,
//     name: "i.OXYVARE",
//     category: "Oxygen Granules",
//     type: "Oxygen Products",
//     certificate: "CAA/JAN22/CHEM/03768",
//     badge: "Emergency Use",
//     composition:
//       "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity).",
//     benefits: [
//       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
//       "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
//       "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
//       "Improves survival create during stocking in culture period and before harvesting",
//       "It helps in development of plankton to the required levels",
//     ],
//     dosage: [
//       { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
//       { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
//     ],
//     presentation: "10 kgs Bucket",
//     form: "Granules",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 22,
//     name: "i.OXYVARE-T",
//     category: "Oxygen Tablets",
//     type: "Oxygen Products",
//     certificate: "CAA/APRIL 2025/CHEM/07488",
//     composition:
//       "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity) in a tablet form.",
//     benefits: [
//       "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
//       "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
//       "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
//       "Improves survival create during stocking in culture period and before harvesting",
//       "It helps in development of plankton to the required levels",
//     ],
//     dosage: [
//       { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
//       { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
//     ],
//     presentation: "10 Kgs Bucket",
//     form: "Tablet",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 23,
//     name: "i.GEOPROVARE G",
//     category: "Zeolite Granules (with Probiotics)",
//     type: "Zeolite Products",
//     certificate: "CAA - Not Required",
//     composition:
//       "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
//     benefits: [
//       "Highest Cation Exchange capacity & it controls obnoxious gases instantly",
//       "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
//       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
//       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
//       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
//       "Can maintain clean pond bottom",
//     ],
//     dosage: [
//       { label: "Pond Preparation", dose: "50 Kgs/acre" },
//       { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
//     ],
//     presentation: "10 kg's Pouch",
//     form: "Granules",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 24,
//     name: "i.GEOPROVARE P",
//     category: "Zeolite Powder (with Probiotics)",
//     type: "Zeolite Products",
//     certificate: "CAA - Not Required",
//     composition:
//       "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
//     benefits: [
//       "Highest Cation Exchange capacity and it controls obnoxious gases instantly",
//       "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
//       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
//       "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
//       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
//       "Can maintain clean pond bottom",
//     ],
//     dosage: [
//       { label: "Pond Preparation", dose: "50 Kgs/acre" },
//       { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
//     ],
//     presentation: "10 kg's Pouch",
//     form: "Powder",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 25,
//     name: "i.GEOVARE P",
//     category: "Zeolite Powder Plain",
//     type: "Zeolite Products",
//     certificate: "CAA - Not Required",
//     composition:
//       "Silicon Dioxice (SiO2): 65–70%; Sodium: 1–3%; Iron (Fe): 1–2%; Magnesium: 0.5–1.0%; Calcium Oxide (Cal): 3–5%; Potassium: 0.5–1.0%; Aluminium: 20%; LOI: 5–8%.",
//     benefits: [
//       "Highest Cation Exchange capacity it controls obnoxious gases instantly",
//       "Quick and Efficient removal of obnoxious gases; Dissolved Oxygen level will be improved",
//       "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
//       "Absorbs toxic gases like Ammonia (Nh3), Hydrogen Sulphide (H2S) and other liberated anions from pond water",
//       "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
//       "Can maintain clean pond bottom",
//     ],
//     dosage: [
//       { label: "Pond Preparation", dose: "50Kgs/acre" },
//       { label: "During Culture", dose: "Minimum 15Kgs/acre or as advised by aqua culture technician" },
//     ],
//     presentation: "25Kgs Bag",
//     form: "Powder",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 26,
//     name: "i.TOXIVARE",
//     category: "Yucca / Toxin Binder",
//     type: "Water Treatment",
//     certificate: "CAA/OCT22/FA/04255",
//     composition:
//       "Dry natural extract from the YUCCA schidigera plant, Ammonia binding agents and Probiotics.",
//     benefits: [
//       "Yucca is rich in glyco compounds that instantly binds with un-ionized ammonia thereby, reducing ammonia toxicity in the pond",
//       "Absorbs Nh₂, So₂, Ch₂, H₂S etc. of the pond bottom and cleans the toxic gases in the water",
//       "Reduced incidence of BOD and COD due to decrease of ammonia content in pond water",
//       "Deodorizes and purifies pond bottom wastage and water to improve the activity of the culture species",
//       "Increase the availability of dissolved oxygen in pond water",
//       "Reduce in gill irrigation",
//     ],
//     dosage: [
//       { label: "Pond application", dose: "500 Gm per HA of 1 meter column" },
//       { label: "Feed application", dose: "2–5 Gm/Kg feed" },
//     ],
//     presentation: "1 Kg Pouch",
//     form: "Powder",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 27,
//     name: "i.ECOSOFTVARE",
//     category: "EDTA",
//     type: "Water Treatment",
//     certificate: "CAA - Not Required",
//     composition:
//       "Unique combination of Ethylene Diamine Tetra Acetic Acid (EDTA) formulated salt compounds.",
//     benefits: [
//       "Reduces the hardness levels to optimum lower levels there by stabilizing the alkalinity in the pond water completely prevents plankton crash",
//       "i.Ecosoftvare is used to improve water quality by reducing heavy metal concentrations",
//       "Stabilizes the total Ammonia levels there by minimise the free ammonia in the pond water",
//       "Helps to create toxic free environment",
//     ],
//     dosage: [
//       { label: "General application", dose: "Mix 1–2 kgs in 50 Ltrs of water and spray over 1 Acre evenly" },
//       { label: "Best practice", dose: "Apply in day light for better results or as advised by Aqua consultant" },
//     ],
//     presentation: "1 Kg / 5 kg Pouch",
//     form: "Powder",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 28,
//     name: "i.NITRONILVARE",
//     category: "Nitrite Control",
//     type: "Water Treatment",
//     certificate: "CAA/OCT22/PRO/04253",
//     composition:
//       "Nitrosomonas, Nitrobacter, Thiobacillus Thioxidans, Thiobacillus Ferroxidans, Thiobacillus Denitrificans, Paracoccus Denitrificans, N. Protease, Fungal Phytase, Fungal Alpha Amylase.",
//     benefits: [
//       "It reduces nitrites (No2) content in water to safe level",
//       "i.NITRONILVARE is powerful water treatment additive for aquaculture pond",
//       "It prevents formation of black soil due to decay of organic pollutant Improves water quality and enhances survival rate",
//     ],
//     dosage: [
//       { label: "Prawn/Shrimp", dose: "1 Kg/acre once in every 10 days" },
//       { label: "Fish", dose: "1 Kg/acre once in every one month or advised by aqua consultant" },
//     ],
//     presentation: "1 Kg Bottle",
//     form: "Powder",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 29,
//     name: "Calcium Chloride (Fused)",
//     category: "Chloride Salts",
//     type: "Minerals",
//     certificate: "CAA/OCT22/CHEM/04252",
//     composition: "Calcium Chloride Fused.",
//     benefits: [
//       "Calcium has an important role in the biological processes of fish & shrimp. It is necessary for bone formation, blood clotting and their metabolic reactions",
//       "Sodium and potassium are the most important salts in fish & shrimp blood and are critical for normal heat, nerve and muscle function",
//       "Fish & shrimp can absorb calcium directly from the water of food",
//       "The re-absorption of salt can reduce the energy available for growth",
//     ],
//     dosage: [
//       { label: "General application", dose: "5 to 10 Kgs per acre" },
//       { label: "Best Practice", dose: "For best results apply in the evening hours" },
//     ],
//     presentation: "25 Kgs Drum (5 Kg x 5 Packs)",
//     form: "Fused",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 30,
//     name: "Magnesium Chloride (Crystal)",
//     category: "Chloride Salts",
//     type: "Minerals",
//     certificate: "CAA/OCT22/CHEM/04251",
//     composition: "Magnesium Chloride 97% ± 2%.",
//     benefits: [
//       "Covers the Magnesium balance of pond water",
//       "Protects from soft shell syndrome",
//       "Regularizes the moult cycle",
//       "Increase survival and body weight rate",
//     ],
//     dosage: [
//       { label: "General application", dose: "5 to 10 Kgs per acre" },
//     ],
//     presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
//     form: "Crystal",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 31,
//     name: "Potassium Chloride (Crystal)",
//     category: "Chloride Salts",
//     type: "Minerals",
//     certificate: "CAA/OCT22/CHEM/04256",
//     composition: "Potassium Chloride 97% ± 2%.",
//     benefits: [
//       "Protects from soft shell syndrome",
//       "Increase survival and body weight rate",
//       "Regularizes the moult cycles",
//       "Covers the Potassium balance of pond water",
//     ],
//     dosage: [
//       { label: "General application", dose: "5 to 8 Kgs per acre" },
//     ],
//     presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
//     form: "Crystal",
//     storage: "Keep in cool and dry place.",
//   },
//   {
//     id: 32,
//     name: "i.FERRICCHLORIVARE",
//     category: "Ferric Chloride",
//     type: "Minerals",
//     certificate: "CAA/ARPIL 2025/CHEM/07491",
//     composition: "Ferric Chloride Anhydrous – 98% ± 2%. Assay: Min 98.0%.",
//     benefits: [
//       "Highly effective at removing suspended solids, Organic matter & Heavy metals from the Pond water",
//       "It helps to prevent the overgrowth of Algae in Pond water",
//       "Use as Iron supplement",
//       "Improves Pond water bottom quality",
//       "It helps to precipitate and inactive inorganic phosphorous in Pond water",
//     ],
//     dosage: [
//       { label: "General", dose: "Consult our field staff or your aquaculture specialist for specific usage and directions" },
//     ],
//     presentation: "50 Kgs Drum (5Kg x 10 Packs)",
//     form: "Crystal",
//     storage: "Keep in cool and dry place. Special Instruction: No liability accepted for accidents arising while handling or use.",
//   },
// ];

// // ─── Product Image Map ────────────────────────────────────────────────────────
// // Maps product ID → actual filename in /public/images/
// const PRODUCT_IMAGES: Record<number, string> = {
//   1:  "minvare.png",           // i.MINVARE PM
//   2:  "minare am (1).png",     // i.MINVARE AM
//   3:  "minvare ws.png",        // i.MINVARE WS
//   4:  "minvare fm 2.png",      // i.MINVARE FM
//   5:  "minvare_liq.png",       // i.MINVARE LiQ
//   6:  "propondvare 2.png",     // i.PROPONDVARE
//   7:  "provare gut 2.png",     // i.PROVARE GUT
//   8:  "vibriovare 2.png",      // i.VIBRIOVARE
//   9:  "bio yeast.png",         // i.Bio'YEAST'vare
//   10: "psbvare 2.png",         // i.PSBVARE
//   11: "propondvare_liq.png",   // i.PROPONDVARE LiQ
//   12: "ceevare 2.png",         // i.CEEVARE
//   13: "phytovare 2.png",       // i.PHYTOVARE
//   14: "livovare gel (1).png",  // i.LIVOVARE GEL
//   15: "immunovare 2.png",      // i.IMMUNOVARE
//   16: "heptopancvare.png",     // i.HEPTOPANCVARE
//   17: "wfsvare gel 2.png",     // i.WFSVARE GEL
//   18: "virahealvare 2.png",    // i.VIRAHEALVARE
//   19: "sanvare_td 2.png",      // i.SANVARE TD
//   20: "silvare_nano.png",      // i.SILVARE NANO
//   21: "oxyvar 2.png",          // i.OXYVARE
//   22: "oxyvare-t (1).png",     // i.OXYVARE-T
//   23: "geoprovare.jpeg",       // i.GEOPROVARE G
//   24: "geoprovare_p 2.png",    // i.GEOPROVARE P
//   25: "geovare_p.png",         // i.GEOVARE P
//   26: "nitronilvare.png",      // i.TOXIVARE  (closest match)
//   27: "nitronilvare.png",      // i.ECOSOFTVARE (reuse until dedicated image added)
//   28: "nitronilvare.png",      // i.NITRONILVARE
//   29: "calcium chloride.png",  // Calcium Chloride
//   30: "min.png",               // Magnesium Chloride
//   31: "min.png",               // Potassium Chloride
//   32: "ferric chloride 2.png", // i.FERRICCHLORIVARE
// };

// // ─── Category & Color Config ──────────────────────────────────────────────────
// const CATEGORIES = [
//   "All",
//   "Minerals",
//   "Probiotics",
//   "Vitamins & Nutrition",
//   "Health & Immunity",
//   "Oxygen Products",
//   "Water Treatment",
//   "Zeolite Products",
//   "Sanitizer",
// ];

// const TYPE_ACCENT: Record<string, { header: string; label: string; dot: string }> = {
//   "Minerals":            { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" },
//   "Probiotics":          { header: "#006644", label: "#008855", dot: "#006644" },
//   "Vitamins & Nutrition":{ header: "#cc6600", label: "#dd7700", dot: "#cc6600" },
//   "Health & Immunity":   { header: "#7700aa", label: "#9911cc", dot: "#7700aa" },
//   "Oxygen Products":     { header: "#003399", label: "#0044bb", dot: "#003399" },
//   "Water Treatment":     { header: "#005566", label: "#007788", dot: "#005566" },
//   "Zeolite Products":    { header: "#664400", label: "#886600", dot: "#664400" },
//   "Sanitizer":           { header: "#aa0000", label: "#cc1111", dot: "#aa0000" },
// };

// const getAccent = (type: string) =>
//   TYPE_ACCENT[type] || { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" };

// // ─── SVG Placeholder (shown when no image available) ─────────────────────────
// function ProductPlaceholder({ color }: { color: string }) {
//   return (
//     <svg
//       width="56"
//       height="56"
//       viewBox="0 0 56 56"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       style={{ opacity: 0.22 }}
//     >
//       {/* Flask / bottle shape */}
//       <rect x="21" y="6" width="14" height="10" rx="2" fill={color} />
//       <path
//         d="M18 16h20l6 24a6 6 0 01-6 6H18a6 6 0 01-6-6l6-24z"
//         fill={color}
//       />
//       <ellipse cx="28" cy="34" rx="7" ry="5" fill="white" opacity="0.4" />
//       <rect x="24" y="8" width="3" height="8" rx="1" fill="white" opacity="0.5" />
//     </svg>
//   );
// }

// // ─── PDF-Style Product Card ───────────────────────────────────────────────────
// function PDFCard({ product }: { product: Product }) {
//   const ac = getAccent(product.type);
//   const [imgError, setImgError] = useState(false);
//   const imgSrc = PRODUCT_IMAGES[product.id]
//     ? `/images/${PRODUCT_IMAGES[product.id]}`
//     : null;

//   return (
//     <div
//       className="w-full bg-white rounded-xl overflow-hidden"
//       style={{
//         border: `2px solid ${ac.header}33`,
//         boxShadow: "0 2px 16px rgba(0,50,120,0.08)",
//       }}
//     >
//       {/* ── TOP HEADER ── */}
//       <div className="flex items-stretch" style={{ borderBottom: `2px solid ${ac.header}` }}>
//         {/* Blank spacer aligned with hex column */}
//         <div
//           style={{
//             width: 140,
//             flexShrink: 0,
//             background: "#f0f6ff",
//             borderRight: `1px solid ${ac.header}33`,
//           }}
//         />
//         {/* Category */}
//         <div className="flex items-center px-5 py-2 flex-1" style={{ background: "white" }}>
//           <span
//             className="font-black uppercase tracking-wide"
//             style={{ color: ac.header, fontSize: 14, letterSpacing: 1, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
//           >
//             {product.category}
//           </span>
//         </div>
//         {/* Certificate */}
//         {product.certificate && (
//           <div
//             className="flex items-center px-4 py-2"
//             style={{
//               background: "#fff8f0",
//               borderLeft: `1px solid ${ac.header}44`,
//               borderRight: `1px solid ${ac.header}44`,
//             }}
//           >
//             <span
//               className="font-bold"
//               style={{ color: "#cc3300", fontSize: 11, fontFamily: "monospace", whiteSpace: "nowrap" }}
//             >
//               {product.certificate}
//             </span>
//           </div>
//         )}
//         {/* Product name chip */}
//         <div
//           className="flex items-center px-5 py-2"
//           style={{ background: ac.header, minWidth: 180 }}
//         >
//           <span
//             className="font-black text-white tracking-wide"
//             style={{ fontSize: 15, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
//           >
//             <em style={{ opacity: 0.8, fontStyle: "italic" }}>i</em>
//             {product.name.replace(/^i[.\-']/i, "")}
//           </span>
//           {product.badge && (
//             <span
//               className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
//               style={{ background: "rgba(255,255,255,0.2)", color: "white", whiteSpace: "nowrap" }}
//             >
//               {product.badge}
//             </span>
//           )}
//         </div>
//       </div>

//       {/* ── BODY ROW ── */}
//       <div className="flex" style={{ minHeight: 220 }}>

//         {/* ── COL 1: Hexagon with product image ── */}
//         <div
//           className="flex-none flex items-center justify-center"
//           style={{
//             width: 140,
//             background: `linear-gradient(160deg, ${ac.header}15 0%, ${ac.header}08 100%)`,
//             borderRight: `1px solid ${ac.header}22`,
//             padding: "18px 14px",
//           }}
//         >
//           {/* Outer hex — thick colored border */}
//           <div
//             style={{
//               width: 100,
//               height: 110,
//               clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
//               background: ac.header,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             {/* White gap ring */}
//             <div
//               style={{
//                 width: "calc(100% - 10px)",
//                 height: "calc(100% - 10px)",
//                 clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
//                 background: "white",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               {/* Inner image hex */}
//               <div
//                 style={{
//                   width: "calc(100% - 6px)",
//                   height: "calc(100% - 6px)",
//                   clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
//                   background: "#EEF4FF",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   overflow: "hidden",
//                   position: "relative",
//                 }}
//               >
//               {/* ── Actual product image ── */}
//               {imgSrc && !imgError ? (
//                 <Image
//                   src={imgSrc}
//                   alt={product.name}
//                   fill
//                   style={{ objectFit: "contain", padding: "8px" }}
//                   onError={() => setImgError(true)}
//                 />
//               ) : (
//                 /* ── SVG placeholder when no image — NO text shown ── */
//                 <ProductPlaceholder color={ac.header} />
//               )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── COL 2: Benefits ── */}
//         <div
//           className="flex-1 p-4"
//           style={{ borderRight: `1px solid ${ac.header}22`, background: "white", minWidth: 0 }}
//         >
//           <div
//             className="font-bold mb-2 uppercase tracking-wide"
//             style={{ color: ac.header, fontSize: 11 }}
//           >
//             Benefits:
//           </div>
//           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//             {product.benefits.map((b, i) => (
//               <li
//                 key={i}
//                 style={{
//                   fontSize: 11.5,
//                   color: "#1e2d3d",
//                   lineHeight: 1.6,
//                   paddingLeft: 14,
//                   paddingBottom: 3,
//                   position: "relative",
//                   fontFamily: "'Segoe UI', system-ui, sans-serif",
//                 }}
//               >
//                 <span
//                   style={{
//                     position: "absolute",
//                     left: 1,
//                     top: "0.15em",
//                     color: ac.header,
//                     fontSize: 13,
//                     lineHeight: 1,
//                   }}
//                 >
//                   •
//                 </span>
//                 {b}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* ── COL 3: Composition ── */}
//         <div
//           className="p-4"
//           style={{
//             width: 260,
//             flexShrink: 0,
//             borderRight: `1px solid ${ac.header}22`,
//             background: "#fafeff",
//           }}
//         >
//           <div
//             className="font-bold mb-2 uppercase tracking-wide"
//             style={{ color: ac.header, fontSize: 11 }}
//           >
//             Composition:
//           </div>
//           <p
//             style={{
//               fontSize: 11,
//               color: "#2a3c50",
//               lineHeight: 1.7,
//               textAlign: "justify",
//               hyphens: "auto",
//               fontFamily: "'Segoe UI', system-ui, sans-serif",
//             }}
//           >
//             {product.composition}
//           </p>
//         </div>

//         {/* ── COL 4: Dosage + Presentation / Form / Storage ── */}
//         <div
//           className="p-4"
//           style={{
//             width: 220,
//             flexShrink: 0,
//             background: "#f7faff",
//           }}
//         >
//           <div
//             className="font-bold mb-1.5 uppercase tracking-wide"
//             style={{ color: ac.header, fontSize: 11 }}
//           >
//             Dosage:
//           </div>
//           {product.dosage.map((d, i) => (
//             <div key={i} style={{ marginBottom: 6 }}>
//               <div
//                 style={{
//                   fontSize: 10,
//                   fontWeight: 700,
//                   color: ac.label,
//                   lineHeight: 1.3,
//                   marginBottom: 1,
//                 }}
//               >
//                 {d.label}:
//               </div>
//               <div style={{ fontSize: 10.5, color: "#1a2b3c", lineHeight: 1.55 }}>
//                 {d.dose}
//               </div>
//             </div>
//           ))}

//           <div
//             style={{
//               borderTop: `1px solid ${ac.header}33`,
//               marginTop: 10,
//               paddingTop: 10,
//             }}
//           >
//             <div
//               className="font-bold uppercase"
//               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
//             >
//               Presentation:
//             </div>
//             <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6, lineHeight: 1.4 }}>
//               {product.presentation}
//             </div>

//             <div
//               className="font-bold uppercase"
//               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
//             >
//               Form:
//             </div>
//             <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6 }}>
//               {product.form}
//             </div>

//             <div
//               className="font-bold uppercase"
//               style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
//             >
//               Storage &amp; Caution:
//             </div>
//             <div style={{ fontSize: 11, color: "#1a2b3c", lineHeight: 1.5 }}>
//               {product.storage}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Main Page ────────────────────────────────────────────────────────────────
// export default function CataloguePage() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [search, setSearch] = useState("");
//   const gridRef = useRef<HTMLDivElement>(null);

//   const filtered = PRODUCTS.filter((p) => {
//     const matchCat =
//       activeCategory === "All" ||
//       p.type === activeCategory ||
//       (activeCategory === "Sanitizer" && p.badge === "Sanitizer");
//     const q = search.toLowerCase();
//     const matchSearch =
//       !q ||
//       p.name.toLowerCase().includes(q) ||
//       p.category.toLowerCase().includes(q) ||
//       p.composition.toLowerCase().includes(q) ||
//       p.benefits.some((b) => b.toLowerCase().includes(q));
//     return matchCat && matchSearch;
//   });

//   return (
//     <div
//       className="min-h-screen bg-[#eef3f9]"
//       style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
//     >
//       {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2557] via-[#2A5DA8] to-[#0e7fc2]">
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border-[80px] border-white/5 translate-x-48 -translate-y-48 pointer-events-none" />
//         <div className="absolute top-12 right-64 w-[300px] h-[300px] rounded-full border-[50px] border-white/5 pointer-events-none" />
//         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border-[60px] border-white/5 -translate-x-32 translate-y-32 pointer-events-none" />
//         <div
//           className="absolute inset-0 opacity-5 pointer-events-none"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,2 55,16 55,44 30,58 5,44 5,16' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
//             backgroundSize: "60px 60px",
//           }}
//         />

//         <div className="relative z-10 max-w-7xl mx-auto px-8 py-14">
//           <div className="flex items-start justify-between gap-8 flex-wrap">
//             <div>
//               {/* ── Logo / brand block ── */}
//               <div className="flex items-center gap-3 mb-5">
//                 <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center flex-shrink-0">
//                   <span className="text-white font-black text-xl italic">i</span>
//                 </div>
//                 <div className="flex flex-col items-start">
//                   <p className="text-white text-sm font-semibold leading-tight">
//                     Innovare Biopharma LLP
//                   </p>
//                   <p className="text-white/50 text-[11px] leading-tight">
//                     Solution to Aquaculture Health
//                   </p>
//                 </div>
//               </div>

//               {/* ── Heading aligned to logo text left edge ── */}
//               <div className="pl-[60px]">
//                 <h1 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
//                   Product
//                   <br />
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
//                     Catalogue
//                   </span>
//                 </h1>
//                 <p className="mt-4 text-white/65 text-sm max-w-xl leading-relaxed">
//                   Complete reference guide — compositions, benefits, dosages and certifications for all Innovare Biopharma aquaculture solutions.
//                 </p>
//                 <div className="flex flex-wrap gap-3 mt-6">
//                   {[
//                     { value: `${PRODUCTS.length}+`, label: "Products" },
//                     { value: "ISO 9001:2015", label: "Certified" },
//                     { value: "GMP", label: "Quality Practice" },
//                     { value: "MSME", label: "Registered" },
//                   ].map((s) => (
//                     <div
//                       key={s.label}
//                       className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3"
//                     >
//                       <div className="text-white font-black text-lg leading-none">{s.value}</div>
//                       <div className="text-white/55 text-[11px] font-semibold mt-0.5">{s.label}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Search */}
//             <div className="flex flex-col gap-2 mt-2">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search products, ingredients, benefits..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="w-80 pl-10 pr-4 py-3 rounded-2xl border border-white/25 bg-white/10 text-white placeholder-white/40 text-sm outline-none focus:bg-white/20 focus:border-white/50 transition-all"
//                 />
//                 <svg
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <circle cx="11" cy="11" r="8" />
//                   <path d="m21 21-4.35-4.35" />
//                 </svg>
//               </div>
//               <p className="text-white/40 text-xs text-right">
//                 Showing{" "}
//                 <span className="text-white/80 font-bold">{filtered.length}</span> of{" "}
//                 {PRODUCTS.length} products
//               </p>
//             </div>
//           </div>

//           {/* ── Category Filter Tabs ── */}
//           <div className="mt-8 pl-[60px] flex flex-wrap gap-2">
//             {CATEGORIES.map((cat) => {
//               const active = activeCategory === cat;
//               const count =
//                 cat === "All"
//                   ? PRODUCTS.length
//                   : PRODUCTS.filter(
//                       (p) =>
//                         p.type === cat ||
//                         (cat === "Sanitizer" && p.badge === "Sanitizer")
//                     ).length;
//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setActiveCategory(cat)}
//                   className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200"
//                   style={{
//                     background: active ? "white" : "rgba(255,255,255,0.1)",
//                     color: active ? "#0f2557" : "rgba(255,255,255,0.75)",
//                     border: active ? "none" : "1px solid rgba(255,255,255,0.2)",
//                     boxShadow: active ? "0 4px 14px rgba(0,0,0,0.15)" : "none",
//                   }}
//                 >
//                   {cat}
//                   <span
//                     className="rounded-full px-1.5 py-0.5"
//                     style={{
//                       background: active ? "#2A5DA8" : "rgba(255,255,255,0.15)",
//                       color: active ? "white" : "rgba(255,255,255,0.7)",
//                       fontSize: 9,
//                       fontWeight: 800,
//                     }}
//                   >
//                     {count}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ══ PRODUCT LIST ════════════════════════════════════════════════════════ */}
//       <div className="max-w-7xl mx-auto px-8 py-8" ref={gridRef}>
//         {filtered.length === 0 ? (
//           <div className="flex flex-col items-center py-32 text-gray-400">
//             <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
//               <svg
//                 width="32"
//                 height="32"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="#9ca3af"
//                 strokeWidth="1.5"
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <path d="m21 21-4.35-4.35" />
//               </svg>
//             </div>
//             <p className="font-semibold text-base text-gray-500">No products found</p>
//             <button
//               onClick={() => {
//                 setSearch("");
//                 setActiveCategory("All");
//               }}
//               className="mt-4 px-5 py-2 rounded-xl bg-[#2A5DA8] text-white text-sm font-semibold"
//             >
//               Clear Filters
//             </button>
//           </div>
//         ) : (
//           <div className="flex flex-col gap-5">
//             {filtered.map((p) => (
//               <PDFCard key={p.id} product={p} />
//             ))}
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// }
"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Product = {
  id: number;
  name: string;
  category: string;
  type: string;
  certificate: string;
  composition: string;
  benefits: string[];
  dosage: { label: string; dose: string }[];
  presentation: string;
  form: string;
  storage: string;
  badge?: string;
  tag?: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "i.MINVARE PM",
    category: "Pond Minerals",
    type: "Minerals",
    certificate: "CAA/JAN22/FA/03765",
    composition:
      "Innovative blend of essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Phosphorus, Copper, Sodium; Amino acids: DL-Methionine, L-Lysine; Probiotics: Bacillus subtilis 10B, Bacillus licheniformis 10B, Bacillus Coagulans 10B, Lactobacillus acidophilus 10B, Saccharomyces cervisiae 10B.",
    benefits: [
      "Improves F.C.R",
      "Helps in regular moulting and formation of exoskeleton in shrimp",
      "Maintain pH of pond water",
      "Reduce organic nutrient deficiency providing all major macro and trace minerals",
      "Improve Phytoplankton and Zooplankton in the pond water",
      "Helps for immune response and defence mechanism",
      "Helps in uniform growth in shrimp and fish",
    ],
    dosage: [
      { label: "Shrimp/Prawn", dose: "10 kgs per Acre" },
      { label: "Fish", dose: "3 kgs per Acre" },
    ],
    presentation: "10 Kg's Pouch",
    form: "Powder",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 2,
    name: "i.MINVARE AM",
    category: "Pond Minerals",
    type: "Minerals",
    certificate: "",
    composition:
      "Innovative blend of essential Micro and Macro Minerals: Calcium, Dolomite, Sulphates containing Magnesium, Manganese, Zinc, Ferrous, Copper; Sodium Chlorides; Potassium; Phosphates: Di Calcium, Rock, Mono Sodium, Mono Potassium.",
    benefits: [
      "Improves F.C.R",
      "Helps in regular moulting and formation of exoskeleton in shrimp",
      "Maintain pH of pond water",
      "Reduce organic nutrient deficiency providing all major macro and trace minerals",
      "Improve Phytoplankton and Zooplankton in the pond water",
      "Helps for immune response and defence mechanism",
      "Helps in uniform growth in shrimp and fish",
    ],
    dosage: [
      { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
      { label: "Fish", dose: "5 Kgs per Acre" },
    ],
    presentation: "20 kg Bag",
    form: "Powder",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 3,
    name: "i.MINVARE WS",
    category: "Pond Minerals",
    type: "Minerals",
    certificate: "CAA/APRIL 2025/MIN/07490",
    composition:
      "Innovative blend of essential Macro Minerals: Calcium, Dolomite, Zeolite; Sulphates: Magnesium, Manganese, Zinc, Ferrous, Copper; Chlorides: Potassium; Phosphates: Di Calcium, Rock, Sodium.",
    benefits: [
      "Improves F.C.R",
      "Helps in regular moulting and formation of exoskeleton in shrimp",
      "Maintain pH of pond water",
      "Reduce organic nutrient deficiency providing all major macro and trace minerals",
      "Improve Phytoplankton and Zooplankton in the pond water",
      "Helps for immune response and defence mechanism",
      "Helps in uniform growth in shrimp and fish",
    ],
    dosage: [
      { label: "Shrimp/Prawn", dose: "20 Kgs per Acre" },
      { label: "Fish", dose: "5 Kgs per Acre" },
    ],
    presentation: "20 Kgs Bag",
    form: "Powder",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 4,
    name: "i.MINVARE FM",
    category: "Feed Minerals",
    type: "Minerals",
    certificate: "CAA/JAN22/FA/03766",
    composition:
      "Essential Micro and Macro Minerals: Magnesium, Manganese, Calcium, Ferrous, Potassium, Zinc, Cobalt, Phosphorus, Copper, Selenium; Vitamins B2, B12, AD3, E; Amino acids: DL-Methionine, L-Lysine; Probiotics; Enzymes: Amylase, Protease, Cellulose, β.Galactose.",
    benefits: [
      "Improves F.C.R",
      "Protects from shell and muscle related problems",
      "Helps in moulting process and formation of exoskeleton in shrimp",
      "Improves hormonal and enzymatic activities in shrimp",
      "Protection from loose shell syndrome",
      "Improves metabolism",
      "Promotes fast body growth and gains more body weight",
      "Improves effectively the digestive system",
    ],
    dosage: [
      { label: "Shrimp/Prawn", dose: "5–8 gm/kg feed" },
      { label: "Fish", dose: "1–3 kgs per ton feed" },
    ],
    presentation: "1 Kg & 5 Kg's Pouch",
    form: "Powder",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 5,
    name: "i.MINVARE LiQ",
    category: "Liquid Minerals",
    type: "Minerals",
    certificate: "",
    composition:
      "Innovative mixture of optimal liquid blend of balanced essential Macro and Trace element Aqua culture feed supplements minerals: Amino Protein 2g, Buffer phosphonic acid 2.5g, Calcium lactate 1.5g, Calcium phosphate monobasic 5.5g, Citric acid 2g, Di potassium phosphate 5.35g, Di sodium phosphate 3.25g, Magnesium citrate 750mg, Potassium chloride 1.5g, Sodium citrate 2.5g, Trace mineral complex (Glycinated) 2g, DM water Q.S.",
    benefits: [
      "Prevents and controls white muscle / soft shell syndrome and body cramping problem",
      "Improves and enhances the development of phytoplankton and zooplankton",
      "Regulates the moulting cycle and survival rate",
      "Balances minerals deficiency in water, soil and shrimp",
      "Improves metabolism, digestive system and FCR",
      "Improves mineral absorption and pond water nutrition",
    ],
    dosage: [
      { label: "Pond Application", dose: "50 Ltrs/Acre (once every 10 days)" },
      { label: "Feed Application", dose: "5–10 ml/kg feed (30 min before feeding)" },
    ],
    presentation: "1 Ltr Bottle",
    form: "Liquid",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 6,
    name: "i.PROPONDVARE",
    category: "Water & Soil Probiotics",
    type: "Probiotics",
    certificate: "CAA/JAN22/PRO/03769",
    composition:
      "Bacillus subtilis, Bacillus megaterium, Bacillus licheniformis, Bacillus polymyxa, Bacillus pumilis, Saccharomyces cerevisiae, Cellulomanas cartae, p.pantotrophus, Nitrosomonas, Nitrobacter, Pseidomonas denitricans, l.plantarum, l.acidophilus, Rhodobacter sphaeroides, Thiobacillus thiooxidans & Thiobacillus ferroxidans.",
    benefits: [
      "Degradation of organic waste and maintains phytoplankton bloom",
      "Improves water and soil quality and increases aquatic animal production",
      "Stabilizes pond pH and maintains optimum alkalinity",
      "Increases collagen synthesis and accelerates encrustation",
      "Removes unwanted micro-organisms",
      "Strengthens the immune system",
    ],
    dosage: [
      { label: "Initial booster (Shrimp/Prawn/Fish)", dose: "1.5 Kg/Ha" },
      { label: "Maintenance", dose: "1 Kg/Ha every 7–10 days" },
    ],
    presentation: "1 kg Bottle",
    form: "Powder",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 7,
    name: "i.PROVARE GUT",
    category: "Gut Probiotics",
    type: "Probiotics",
    certificate: "CAA/JAN22/PRO/03771",
    composition:
      "High strength GUT Probiotics: Lactobacillus plantarum, Lactobacillus acidophilus, Saccharomyces cervisiae; Enzymes: N Protease and Fungal phytase; Herbal extracts: Phyllanthus emblica Linn., Zingiber officinale and Trigonella foenum-graecum.",
    benefits: [
      "Improves digestion and feed intake while protecting GUT health",
      "Prevents the occurrence of Mycosporidia infection",
      "Prevents development of pathogenic bacteria and affects to maintain the GUT micro flora",
      "Improves FCR and lower GUT pH",
      "Support health, performance and growth of aquatic species",
      "Prevents the onset of loose shell syndrome",
    ],
    dosage: [
      { label: "Shrimp", dose: "5–10 Grams per Kg feed" },
      { label: "Fish", dose: "10–15 Grams per Kg feed" },
    ],
    presentation: "1 kg Bottle",
    form: "Powder",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 8,
    name: "i.VIBRIOVARE",
    category: "Vibrio Control",
    type: "Probiotics",
    certificate: "CAA - Under Process",
    composition:
      "Bacillus magaterium (2.5B), Bacillus polymyxa (2.5B), Bacillus pumilus (2.5B), Paracoccus marginatus (0.5B), Paracoccus pantotropus (2B), Streptococcus thermophillus (2.5B), Bacillus amyloliquificans (1B), Bacillus mesentrices (0.5B), Enterococcus facium (2.5B), Lactobacillus rhamnosus (2B), Lactobacillus sporogenous (1B), Pediococcus Acidilactici (0.5B), Mannan Oligo Saccharide (MOS), Beta Glucins B 1-3, B 1-4, B 1-6, Alpha-Amylase (Banu) 250 IU, Lipase 250 IU, N protease 10000 IU, Phytase 200 IU, Xylanase 2000 IU, Maltodextrin (Malto), Starch Powder.",
    benefits: [
      "Highly prevents the Vibrio bacteria infections in Pond water",
      "Controls the running mortality in Shrimp",
      "Helps to maintain the microbial balance in the Shrimp intestine",
      "Inhibit the communication of Vibrio Spp were presented",
      "Increases the immune system and improves the FCR",
    ],
    dosage: [
      { label: "Before stocking", dose: "1 Kg of Tablets per acre; if Vibriosis: 250 Grams/Acre" },
      { label: "Maintenance", dose: "500 Grams per Acre every 7–10 days for 15 days" },
    ],
    presentation: "500 g Bottle",
    form: "Tablet",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 9,
    name: "i.Bio'YEAST'vare",
    category: "Yeast Probiotics",
    type: "Probiotics",
    certificate: "CAA/OCT22/PRO/04250",
    composition:
      "Unique combination of Saccharomyces cerevisiae, Bacillus Subtilis.",
    benefits: [
      "Stimulates feed digestion",
      "Prevents and Controls Pathogenic Bacteria",
      "Enhanced survival rate",
      "Improves pond conditions with good plankton and beneficial bacterial density",
    ],
    dosage: [
      { label: "Feed supplement", dose: "2–3g/Kg feed" },
      { label: "Fermentation", dose: "1 Kg along with 10 Kgs Rice Bran and 2 Kgs Jaggery" },
      { label: "Pond application", dose: "1–2 Kg/Acre" },
    ],
    presentation: "1 kg Pouch",
    form: "Powder",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 10,
    name: "i.PSBVARE",
    category: "Photosynthetic Bacteria",
    type: "Probiotics",
    certificate: "CAA/OCT22/PRO/04254",
    composition: "Rhodopseudomonas palustris – 20 Billion CFU/gm.",
    benefits: [
      "Improves the quality of water in ponds",
      "Helps decompose many toxic matters such as nitrous acid, organic materials, ammonia, pond sludge, and hydrogen sulphide",
      "Decreasing diseases by restraining the pathogenic bacteria counts in the water",
      "Removes black soil & H₂S formed mostly by anaerobic decomposition of organic matter",
      "Improves the appetite of fish and shrimps and helps botanical plankton growth",
    ],
    dosage: [
      { label: "Initial regular use (Shrimp/Prawn/Fish)", dose: "250 Grms/Acre" },
      { label: "Later stage (black soil & H₂S)", dose: "500 Grms/Acre" },
    ],
    presentation: "500 g Bottle",
    form: "Powder",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 11,
    name: "i.PROPONDVARE LiQ",
    category: "Liquid Water & Soil Probiotics",
    type: "Sanitizer",
    certificate: "CAA - Under Process",
    badge: "Sanitizer",
    composition:
      "Innovative mixture and optimal liquid multi-strain blend of 16 different essential formulation strains for soil & water probiotics: Bacillus amyloliquefaciens, Bacillus denitrificans, Bacillus licheniformis, Bacillus pumilus, Bacillus subtilis, Bafidiobacterium spp., Lactobacillus acidophilus, Lactobacillus plantarum, Lactobacillus rhamnosus, Nitrobacter spp., Paracoccus denitrificans, Paracoccus pentatrophus, Saccharomyces cerevisiae, Thiobacillus ferroxidans, Thiobacillus thioxidans, DM water Q.S.",
    benefits: [
      "Enhances gut health, improves feed conversation, growth & survival and boosts immunity",
      "Strengthens gut micro-biota, improves digestion and enhances disease resistance",
      "Converts toxic ammonia into nitrites (nitrification)",
      "Reduces hydrogen sulfide and improves pond bottom conditions ecology and reduce sludge accumulation",
      "Reduce disease outbreaks like White Spot Syndrome",
      "Degrades organic waste, controls ammonia and suppresses Vibro spp",
    ],
    dosage: [
      { label: "Before stocking (Soil Application)", dose: "2 L/Acre (7 days before)" },
      { label: "During stocking (Pond Application)", dose: "1 L/Acre (once in every 10 days)" },
      { label: "DO DOC", dose: "1.5 L/Acre (once in every 10 days)" },
    ],
    presentation: "1 Ltr Bottle",
    form: "Liquid",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 12,
    name: "i.CEEVARE",
    category: "Vitamin C",
    type: "Vitamins & Nutrition",
    certificate: "CAA/JAN22/FA/03767",
    composition: "Ascorbic acid (coated Vitamin C) Coated.",
    benefits: [
      "Improves F.C.R and survival rate",
      "Assists in shell formation and muscle development",
      "Increases body weight by acceleration of growth",
      "Accelerates growth and gives higher survival rate",
      "Prevents vibrio loads attack on shrimps",
      "Facilitates tissue repairs and wound healing",
    ],
    dosage: [
      { label: "Shrimp/Prawn (Normal Conditions)", dose: "2–3 g/1 kg feed at least twice a day" },
      { label: "Under Stress condition", dose: "5g/1 kg feed or as directed by aqua consultant" },
      { label: "Fish", dose: "2 g/1 kg of feed" },
    ],
    presentation: "1 Kg Bottle",
    form: "Powder",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 13,
    name: "i.PHYTOVARE",
    category: "Phyto Extracts",
    type: "Vitamins & Nutrition",
    certificate: "USFDA & EU APPROVED",
    badge: "Premium",
    composition:
      "Innovative blend of High Quality OREGANO (Oreganum Vulgare SSP. hirtum) essential plant extracts constituted of over 30 active ingredients of Carvacrol and Thymol etc.",
    benefits: [
      "Antimicrobial effects to maintain GUT health thereby reducing enteric diseases e.g. White Feces",
      "Anti-oxidation to reduce stresses and protect liver",
      "Increase growth rate and improve FCR",
      "High-temperature (upto 120 Deg. C) stability and low disappearance rate in water",
      "Increase survival rates and reduce disease occurrence",
      "Enhances growth rate and feed efficiency improved reproductive success",
    ],
    dosage: [
      { label: "Prawn/Shrimp (Healthy condition)", dose: "10 Grams/Kg compound feed" },
      { label: "Infected condition", dose: "20 Grams/Kg compound feed" },
      { label: "Fish Feed", dose: "50 Grams/Ton compound feed" },
    ],
    presentation: "500g Bottle",
    form: "Powder",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 14,
    name: "i.LIVOVARE GEL",
    category: "Liver Tonic",
    type: "Vitamins & Nutrition",
    certificate: "CAA/JAN22/FA/03770",
    composition:
      "Vitamins: Vitamin C, B2, E; Amino acids: DL-Methionine and L-Lysine, and Binding agents; Nano Minerals: Nano Magnesium, Nano Calcium, Nano Potassium, Nano Zinc, Nano Selenium, Nano Cobalt, Nano Ferrous, Nano Chromium, Nano Manganese, Nano Phosphorus, Nano Molybdenum; Probiotics: Saccharomyces spp and Lactobacillus spp.",
    benefits: [
      "Improves the functional efficiency of the liver and pancreas",
      "Promotes digestibility and improves F.C.R",
      "Increases nutrient utilisation and reduce fat deposition",
      "Ensures Uniform growth and early harvesting",
      "Increase mineral absorption",
    ],
    dosage: [
      { label: "Up to 10 weeks", dose: "10–15 ml per 1 kg feed" },
      { label: "11 weeks and above", dose: "20–25 ml per 1 kg feed" },
    ],
    presentation: "20 Ltrs Barrel / 5 Ltrs Tin / 1 Ltr Bottle",
    form: "Gel",
    storage: "Keep in cool and dry place. *Shakewell before use.",
  },
  {
    id: 15,
    name: "i.IMMUNOVARE",
    category: "Immune Booster",
    type: "Health & Immunity",
    certificate: "CAA/APRIL 2025/FA/07489",
    composition:
      "Comprehensive blend of Macro Nutrients, Amino Acids, Vitamins, Minerals, Enzymes, Probiotics, Non-essential amino acids, Raw Materials and Vitamins as per detailed composition table.",
    benefits: [
      "Increase Nutrient Utilisation & Growth rate and reduce fat deposition",
      "Improve resistance towards stress & diseases and also better resistance to environmental stressors in shrimp",
      "Maintains correct Osmotic pressure and improves anti stress ability",
      "Increase survival rates and reduce disease occurrence",
      "Accelerate the detoxifying of deposited Toxins in Shrimp",
    ],
    dosage: [
      { label: "Prawn/Shrimp (at least one midday feeding)", dose: "3–5 Grams/Kg compound feed / 1–2 meal a day" },
    ],
    presentation: "500 g Bottle",
    form: "Powder",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 16,
    name: "i.HEPTOPANCVARE",
    category: "Hepato-Pancreatic Support",
    type: "Health & Immunity",
    certificate: "CAA/ARPIL 2025/IMMU/07492",
    composition:
      "Detailed composition includes Amino Acids, Enzymes, Essential/Non-essential amino acids, Herbal Extracts, Raw Materials and Vitamins as per specification table.",
    benefits: [
      "Protect health of hepatopancreas and intestine, with bright and translucent body, clear white membrane, strong and health",
      "Enhance growth performance, feed efficiency and product",
      "Hepatopancreas (H.P) is the power house and vital organ in animal's survival and growth",
      "Improve survival rate and immunity for reducing the risk of some vital disease outbreak",
      "Relieve nutritional white feces, especially white feces caused by liver damage",
    ],
    dosage: [
      { label: "Prawn/Shrimp (preventive)", dose: "5 Grams/Kg compound feed with Gel / 1 meal a day (every 15 days for 5 days)" },
      { label: "If problem persists", dose: "1 meal a day regularly" },
    ],
    presentation: "500 g Bottle",
    form: "Powder",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 17,
    name: "i.WFSVARE GEL",
    category: "Feed Additive Gel",
    type: "Health & Immunity",
    certificate: "CAA/APRIL 2025/IMMU/07487",
    composition:
      "Active Probiotics, Vitamins blend, Amino Acids, Enzymes, Probiotics, Raw Materials, Vitamins as per detailed formulation (31 active ingredients).",
    benefits: [
      "Ensures faster growth and weight gain",
      "Improves feed conversion ratio (FCR)",
      "Improves proper shell formation",
      "Provides necessary binding for the supplemented feed additives preventing any Wastage",
      "Maintains high and uniform growth",
    ],
    dosage: [
      { label: "During Culture", dose: "20 ml per 1 kg of Compound Feed or as advised by Consultant" },
    ],
    presentation: "5 Ltr Tin",
    form: "Gel",
    storage: "Keep in cool and dry place. *Shakewell before use.",
  },
  {
    id: 18,
    name: "i.VIRAHEALVARE",
    category: "Antiviral / Sanitizer",
    type: "Sanitizer",
    certificate: "CAA/OCT22/DIS/04270",
    badge: "Sanitizer",
    composition:
      "Triple Salt - 50% w/v (Containing Triple Salt - 50% w/v); Potassium monopersulphate, Potassium hydrogen sulphate, Potassium sulfate, Sodium Chloride, tartrazine yellow.",
    benefits: [
      "Multi-component and Multi-purpose oxidizing system with major physical and chemical components of pathogens and restrict their propagation thru this disinfectant",
      "Highly effective to control eradicate bacteria, fungi, moulds and all viral families effecting fish and shrimp especially WSSV",
      "High level of surfactancy with acidic and oxidising power providing superior destruction of bio films. An effective bactericidal and can control the vibrio in water",
      "Effectively control black and brown gill even under extreme stress conditions",
      "Product can be used in the pond and can also be applied on the surface and equipments",
    ],
    dosage: [
      { label: "Prawn/Shrimp (Prevention of Diseases)", dose: "500 gm to 2 Kg/ha — Apply once every fortnight according to pond water quality/condition" },
      { label: "Treating Diseases", dose: "Apply once every 3–5 days or as advised by Aquaculture Consultant" },
    ],
    presentation: "1 Kg Bottle",
    form: "Powder",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 19,
    name: "i.SANVARE TD",
    category: "Broad Spectrum Disinfectant",
    type: "Sanitizer",
    certificate: "CAA - Under Process",
    badge: "Sanitizer",
    composition:
      "Benzalkonium Chloride 50% (BKC) - 10%, Glutaraldehyde 50% (C5H8O2) - 10%, Malachite Green (Aniline Green) - 3%, Formaldehyde 37% - 40%, Copper Sulphate - 2%, Ammonium Chloride (NH4Cl) - 2%, Alphox 200 (9.5 moles) (Ethylene Oxide) - 3%, Stabilizers and Surfactants - QS.",
    benefits: [
      "Highly effective against fungal, bacterial and viral disease",
      "Kills bacteria including Gram-Positive, Ligeonella, Protozoan, viruses, algae and fungal spores",
      "Broad Spectrum activity against 32 harmful bacteria, 62 virus, 7 fungi and 11 spores with no resistance developed",
      "Prevents mite infestation in aqua Culture",
      "Fights against pond bottom bacteria and reduce bacterial load in the ponds",
      "High residual activity even in presence of organic matter",
    ],
    dosage: [
      { label: "Upto 3 feet depth", dose: "0.5 to 1 Ltrs per Acre" },
      { label: "Above 3 feet depth", dose: "1–1.5 Ltr per Acre per 3 feet" },
    ],
    presentation: "5 Ltr Tins",
    form: "Liquid",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 20,
    name: "i.SILVARE NANO",
    category: "Nano Silver",
    type: "Sanitizer",
    certificate: "CAA - Under Process",
    badge: "Sanitizer",
    composition:
      "PVP 10.8 g, Glycerol 500 ml, Silver nitrate 1.08 g, Enzymes, Amino acids, DM water Q.S.",
    benefits: [
      "Inhibit the growth of harmful bacteria attack like Vibrio spp. and break down the cell membranes of pathogenic bacteria",
      "Helps to reduce microbial load, improving overall pond hygiene and reducing stress on shrimp",
      "Boost the innate immune system of shrimp, increasing resistance to infections",
      "Controls viral loads and emphasizes antibiotic-resistant bacteria in aquaculture",
      "Clean body, gill and removes dirty materials from Shrimp body",
    ],
    dosage: [
      { label: "Soil Application (Before stocking)", dose: "1 L/Acre with 1 m depth of water (5 days before)" },
      { label: "Pond Application (Post stocking)", dose: "1 L/Acre during Vibriosis in pond water or as advised by Aquaculture Technician" },
    ],
    presentation: "1 Ltr Bottle",
    form: "Liquid",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 21,
    name: "i.OXYVARE",
    category: "Oxygen Granules",
    type: "Oxygen Products",
    certificate: "CAA/JAN22/CHEM/03768",
    badge: "Emergency Use",
    composition:
      "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity).",
    benefits: [
      "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
      "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
      "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
      "Improves survival create during stocking in culture period and before harvesting",
      "It helps in development of plankton to the required levels",
    ],
    dosage: [
      { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
      { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
    ],
    presentation: "10 kgs Bucket",
    form: "Granules",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 22,
    name: "i.OXYVARE-T",
    category: "Oxygen Tablets",
    type: "Oxygen Products",
    certificate: "CAA/APRIL 2025/CHEM/07488",
    composition:
      "Sodium Percarbonate (Active releasing of Oxygen with minimum of 13.5% activity) in a tablet form.",
    benefits: [
      "Increases and maintains pond environmental conditions and water quality during low DO levels and reduce BOD & COD",
      "Provides active Oxygen to help immediate increase of dissolved Oxygen availability in the culture pond",
      "Absorb toxic gases like NH3, H2S, SO2, Co, etc., and provides better climate in Ponds",
      "Improves survival create during stocking in culture period and before harvesting",
      "It helps in development of plankton to the required levels",
    ],
    dosage: [
      { label: "Moulting Period", dose: "1–2 Kg's/Acre at 1 meter water depth" },
      { label: "D.O depletion time", dose: "2–3 Kg's/Acre at 1 meter water depth" },
    ],
    presentation: "10 Kgs Bucket",
    form: "Tablet",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 23,
    name: "i.GEOPROVARE G",
    category: "Zeolite Granules (with Probiotics)",
    type: "Zeolite Products",
    certificate: "CAA - Not Required",
    composition:
      "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
    benefits: [
      "Highest Cation Exchange capacity & it controls obnoxious gases instantly",
      "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
      "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
      "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
      "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
      "Can maintain clean pond bottom",
    ],
    dosage: [
      { label: "Pond Preparation", dose: "50 Kgs/acre" },
      { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
    ],
    presentation: "10 kg's Pouch",
    form: "Granules",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 24,
    name: "i.GEOPROVARE P",
    category: "Zeolite Powder (with Probiotics)",
    type: "Zeolite Products",
    certificate: "CAA - Not Required",
    composition:
      "Silicon Dioxide (SiO2): 65–70%; Aluminium: 20%; Iron (Fe): 1–2%; Sodium: 1–3%; Potassium: 0.5–1.0%; LOI: 5–8%; Probiotics: Bacillus Spp.",
    benefits: [
      "Highest Cation Exchange capacity and it controls obnoxious gases instantly",
      "Quick and Efficient removal of obnoxious gases; Dissolved oxygen level will be improved",
      "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
      "Absorbs toxic gases like Ammonia (NH2), Hydrogen sulphide (H2S), and other liberated anions from pond water",
      "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
      "Can maintain clean pond bottom",
    ],
    dosage: [
      { label: "Pond Preparation", dose: "50 Kgs/acre" },
      { label: "During culture", dose: "Minimum 15 Kgs/acre or as advised by aqua culture technician" },
    ],
    presentation: "10 kg's Pouch",
    form: "Powder",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 25,
    name: "i.GEOVARE P",
    category: "Zeolite Powder Plain",
    type: "Zeolite Products",
    certificate: "CAA - Not Required",
    composition:
      "Silicon Dioxice (SiO2): 65–70%; Sodium: 1–3%; Iron (Fe): 1–2%; Magnesium: 0.5–1.0%; Calcium Oxide (Cal): 3–5%; Potassium: 0.5–1.0%; Aluminium: 20%; LOI: 5–8%.",
    benefits: [
      "Highest Cation Exchange capacity it controls obnoxious gases instantly",
      "Quick and Efficient removal of obnoxious gases; Dissolved Oxygen level will be improved",
      "Maintain the pH rate and create a great water quality to provide plankton an excellent breeding environment",
      "Absorbs toxic gases like Ammonia (Nh3), Hydrogen Sulphide (H2S) and other liberated anions from pond water",
      "Neutralizing Ammonia removes bad odour from the pond and improves water quality",
      "Can maintain clean pond bottom",
    ],
    dosage: [
      { label: "Pond Preparation", dose: "50Kgs/acre" },
      { label: "During Culture", dose: "Minimum 15Kgs/acre or as advised by aqua culture technician" },
    ],
    presentation: "25Kgs Bag",
    form: "Powder",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 26,
    name: "i.TOXIVARE",
    category: "Yucca / Toxin Binder",
    type: "Water Treatment",
    certificate: "CAA/OCT22/FA/04255",
    composition:
      "Dry natural extract from the YUCCA schidigera plant, Ammonia binding agents and Probiotics.",
    benefits: [
      "Yucca is rich in glyco compounds that instantly binds with un-ionized ammonia thereby, reducing ammonia toxicity in the pond",
      "Absorbs Nh₂, So₂, Ch₂, H₂S etc. of the pond bottom and cleans the toxic gases in the water",
      "Reduced incidence of BOD and COD due to decrease of ammonia content in pond water",
      "Deodorizes and purifies pond bottom wastage and water to improve the activity of the culture species",
      "Increase the availability of dissolved oxygen in pond water",
      "Reduce in gill irrigation",
    ],
    dosage: [
      { label: "Pond application", dose: "500 Gm per HA of 1 meter column" },
      { label: "Feed application", dose: "2–5 Gm/Kg feed" },
    ],
    presentation: "1 Kg Pouch",
    form: "Powder",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 27,
    name: "i.ECOSOFTVARE",
    category: "EDTA",
    type: "Water Treatment",
    certificate: "CAA - Not Required",
    composition:
      "Unique combination of Ethylene Diamine Tetra Acetic Acid (EDTA) formulated salt compounds.",
    benefits: [
      "Reduces the hardness levels to optimum lower levels there by stabilizing the alkalinity in the pond water completely prevents plankton crash",
      "i.Ecosoftvare is used to improve water quality by reducing heavy metal concentrations",
      "Stabilizes the total Ammonia levels there by minimise the free ammonia in the pond water",
      "Helps to create toxic free environment",
    ],
    dosage: [
      { label: "General application", dose: "Mix 1–2 kgs in 50 Ltrs of water and spray over 1 Acre evenly" },
      { label: "Best practice", dose: "Apply in day light for better results or as advised by Aqua consultant" },
    ],
    presentation: "1 Kg / 5 kg Pouch",
    form: "Powder",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 28,
    name: "i.NITRONILVARE",
    category: "Nitrite Control",
    type: "Water Treatment",
    certificate: "CAA/OCT22/PRO/04253",
    composition:
      "Nitrosomonas, Nitrobacter, Thiobacillus Thioxidans, Thiobacillus Ferroxidans, Thiobacillus Denitrificans, Paracoccus Denitrificans, N. Protease, Fungal Phytase, Fungal Alpha Amylase.",
    benefits: [
      "It reduces nitrites (No2) content in water to safe level",
      "i.NITRONILVARE is powerful water treatment additive for aquaculture pond",
      "It prevents formation of black soil due to decay of organic pollutant Improves water quality and enhances survival rate",
    ],
    dosage: [
      { label: "Prawn/Shrimp", dose: "1 Kg/acre once in every 10 days" },
      { label: "Fish", dose: "1 Kg/acre once in every one month or advised by aqua consultant" },
    ],
    presentation: "1 Kg Bottle",
    form: "Powder",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 29,
    name: "Calcium Chloride (Fused)",
    category: "Chloride Salts",
    type: "Minerals",
    certificate: "CAA/OCT22/CHEM/04252",
    composition: "Calcium Chloride Fused.",
    benefits: [
      "Calcium has an important role in the biological processes of fish & shrimp. It is necessary for bone formation, blood clotting and their metabolic reactions",
      "Sodium and potassium are the most important salts in fish & shrimp blood and are critical for normal heat, nerve and muscle function",
      "Fish & shrimp can absorb calcium directly from the water of food",
      "The re-absorption of salt can reduce the energy available for growth",
    ],
    dosage: [
      { label: "General application", dose: "5 to 10 Kgs per acre" },
      { label: "Best Practice", dose: "For best results apply in the evening hours" },
    ],
    presentation: "25 Kgs Drum (5 Kg x 5 Packs)",
    form: "Fused",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 30,
    name: "Magnesium Chloride (Crystal)",
    category: "Chloride Salts",
    type: "Minerals",
    certificate: "CAA/OCT22/CHEM/04251",
    composition: "Magnesium Chloride 97% ± 2%.",
    benefits: [
      "Covers the Magnesium balance of pond water",
      "Protects from soft shell syndrome",
      "Regularizes the moult cycle",
      "Increase survival and body weight rate",
    ],
    dosage: [
      { label: "General application", dose: "5 to 10 Kgs per acre" },
    ],
    presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
    form: "Crystal",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 31,
    name: "Potassium Chloride (Crystal)",
    category: "Chloride Salts",
    type: "Minerals",
    certificate: "CAA/OCT22/CHEM/04256",
    composition: "Potassium Chloride 97% ± 2%.",
    benefits: [
      "Protects from soft shell syndrome",
      "Increase survival and body weight rate",
      "Regularizes the moult cycles",
      "Covers the Potassium balance of pond water",
    ],
    dosage: [
      { label: "General application", dose: "5 to 8 Kgs per acre" },
    ],
    presentation: "50 Kgs Drum (5 Kg x 10 Packs)",
    form: "Crystal",
    storage: "Keep in cool and dry place.",
  },
  {
    id: 32,
    name: "i.FERRICCHLORIVARE",
    category: "Ferric Chloride",
    type: "Minerals",
    certificate: "CAA/ARPIL 2025/CHEM/07491",
    composition: "Ferric Chloride Anhydrous – 98% ± 2%. Assay: Min 98.0%.",
    benefits: [
      "Highly effective at removing suspended solids, Organic matter & Heavy metals from the Pond water",
      "It helps to prevent the overgrowth of Algae in Pond water",
      "Use as Iron supplement",
      "Improves Pond water bottom quality",
      "It helps to precipitate and inactive inorganic phosphorous in Pond water",
    ],
    dosage: [
      { label: "General", dose: "Consult our field staff or your aquaculture specialist for specific usage and directions" },
    ],
    presentation: "50 Kgs Drum (5Kg x 10 Packs)",
    form: "Crystal",
    storage: "Keep in cool and dry place. Special Instruction: No liability accepted for accidents arising while handling or use.",
  },
];

// ─── Product Image Map ────────────────────────────────────────────────────────
// Maps product ID → actual filename in /public/images/
const PRODUCT_IMAGES: Record<number, string> = {
  1:  "minvare.png",           // i.MINVARE PM
  2:  "minare am (1).png",     // i.MINVARE AM
  3:  "minvare ws.png",        // i.MINVARE WS
  4:  "minvare fm 2.png",      // i.MINVARE FM
  5:  "minvare_liq.png",       // i.MINVARE LiQ
  6:  "propondvare 2.png",     // i.PROPONDVARE
  7:  "provare gut 2.png",     // i.PROVARE GUT
  8:  "vibriovare 2.png",      // i.VIBRIOVARE
  9:  "bio yeast.png",         // i.Bio'YEAST'vare
  10: "psbvare 2.png",         // i.PSBVARE
  11: "propondvare_liq.png",   // i.PROPONDVARE LiQ
  12: "ceevare 2.png",         // i.CEEVARE
  13: "phytovare 2.png",       // i.PHYTOVARE
  14: "livovare gel (1).png",  // i.LIVOVARE GEL
  15: "immunovare 2.png",      // i.IMMUNOVARE
  16: "heptopancvare.png",     // i.HEPTOPANCVARE
  17: "wfsvare gel 2.png",     // i.WFSVARE GEL
  18: "virahealvare 2.png",    // i.VIRAHEALVARE
  19: "sanvare_td 2.png",      // i.SANVARE TD
  20: "silvare_nano.png",      // i.SILVARE NANO
  21: "oxyvar 2.png",          // i.OXYVARE
  22: "oxyvare-t (1).png",     // i.OXYVARE-T
  23: "geoprovare.jpeg",       // i.GEOPROVARE G
  24: "geoprovare_p 2.png",    // i.GEOPROVARE P
  25: "geovare_p.png",         // i.GEOVARE P
  26: "nitronilvare.png",      // i.TOXIVARE  (closest match)
  27: "nitronilvare.png",      // i.ECOSOFTVARE (reuse until dedicated image added)
  28: "nitronilvare.png",      // i.NITRONILVARE
  29: "calcium chloride.png",  // Calcium Chloride
  30: "min.png",               // Magnesium Chloride
  31: "min.png",               // Potassium Chloride
  32: "ferric chloride 2.png", // i.FERRICCHLORIVARE
};

// ─── Category & Color Config ──────────────────────────────────────────────────
const CATEGORIES = [
  "All",
  "Minerals",
  "Probiotics",
  "Vitamins & Nutrition",
  "Health & Immunity",
  "Oxygen Products",
  "Water Treatment",
  "Zeolite Products",
  "Sanitizer",
];

const TYPE_ACCENT: Record<string, { header: string; label: string; dot: string }> = {
  "Minerals":            { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" },
  "Probiotics":          { header: "#006644", label: "#008855", dot: "#006644" },
  "Vitamins & Nutrition":{ header: "#cc6600", label: "#dd7700", dot: "#cc6600" },
  "Health & Immunity":   { header: "#7700aa", label: "#9911cc", dot: "#7700aa" },
  "Oxygen Products":     { header: "#003399", label: "#0044bb", dot: "#003399" },
  "Water Treatment":     { header: "#005566", label: "#007788", dot: "#005566" },
  "Zeolite Products":    { header: "#664400", label: "#886600", dot: "#664400" },
  "Sanitizer":           { header: "#aa0000", label: "#cc1111", dot: "#aa0000" },
};

const getAccent = (type: string) =>
  TYPE_ACCENT[type] || { header: "#0055a5", label: "#1a70cc", dot: "#0055a5" };

// ─── SVG Placeholder (shown when no image available) ─────────────────────────
function ProductPlaceholder({ color }: { color: string }) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.22 }}
    >
      {/* Flask / bottle shape */}
      <rect x="21" y="6" width="14" height="10" rx="2" fill={color} />
      <path
        d="M18 16h20l6 24a6 6 0 01-6 6H18a6 6 0 01-6-6l6-24z"
        fill={color}
      />
      <ellipse cx="28" cy="34" rx="7" ry="5" fill="white" opacity="0.4" />
      <rect x="24" y="8" width="3" height="8" rx="1" fill="white" opacity="0.5" />
    </svg>
  );
}

// ─── PDF-Style Product Card ───────────────────────────────────────────────────
function PDFCard({ product }: { product: Product }) {
  const ac = getAccent(product.type);
  const [imgError, setImgError] = useState(false);
  const imgSrc = PRODUCT_IMAGES[product.id]
    ? `/images/${PRODUCT_IMAGES[product.id]}`
    : null;

  return (
    <div
      className="w-full bg-white rounded-xl overflow-hidden"
      style={{
        border: `2px solid ${ac.header}33`,
        boxShadow: "0 2px 16px rgba(0,50,120,0.08)",
      }}
    >
      {/* ── TOP HEADER ── */}
      <div className="flex items-stretch" style={{ borderBottom: `2px solid ${ac.header}` }}>
        {/* Blank spacer aligned with hex column */}
        <div
          style={{
            width: 140,
            flexShrink: 0,
            background: "#f0f6ff",
            borderRight: `1px solid ${ac.header}33`,
          }}
        />
        {/* Category */}
        <div className="flex items-center px-5 py-2 flex-1" style={{ background: "white" }}>
          <span
            className="font-black uppercase tracking-wide"
            style={{ color: ac.header, fontSize: 14, letterSpacing: 1, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            {product.category}
          </span>
        </div>
        {/* Certificate */}
        {product.certificate && (
          <div
            className="flex items-center px-4 py-2"
            style={{
              background: "#fff8f0",
              borderLeft: `1px solid ${ac.header}44`,
              borderRight: `1px solid ${ac.header}44`,
            }}
          >
            <span
              className="font-bold"
              style={{ color: "#cc3300", fontSize: 11, fontFamily: "monospace", whiteSpace: "nowrap" }}
            >
              {product.certificate}
            </span>
          </div>
        )}
        {/* Product name chip */}
        <div
          className="flex items-center px-5 py-2"
          style={{ background: ac.header, minWidth: 180 }}
        >
          <span
            className="font-black text-white tracking-wide"
            style={{ fontSize: 15, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            <em style={{ opacity: 0.8, fontStyle: "italic" }}>i</em>
            {product.name.replace(/^i[.\-']/i, "")}
          </span>
          {product.badge && (
            <span
              className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.2)", color: "white", whiteSpace: "nowrap" }}
            >
              {product.badge}
            </span>
          )}
        </div>
      </div>

      {/* ── BODY ROW ── */}
      <div className="flex" style={{ minHeight: 220 }}>

        {/* ── COL 1: Hexagon with product image ── */}
        <div
          className="flex-none flex items-center justify-center"
          style={{
            width: 140,
            background: `linear-gradient(160deg, ${ac.header}15 0%, ${ac.header}08 100%)`,
            borderRight: `1px solid ${ac.header}22`,
            padding: "18px 14px",
          }}
        >
          {/* Outer hex — thick colored border */}
          <div
            style={{
              width: 100,
              height: 110,
              clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
              background: ac.header,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* White gap ring */}
            <div
              style={{
                width: "calc(100% - 10px)",
                height: "calc(100% - 10px)",
                clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Inner image hex */}
              <div
                style={{
                  width: "calc(100% - 6px)",
                  height: "calc(100% - 6px)",
                  clipPath: "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)",
                  background: "#EEF4FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
              {/* ── Actual product image ── */}
              {imgSrc && !imgError ? (
                <Image
                  src={imgSrc}
                  alt={product.name}
                  fill
                  style={{ objectFit: "contain", padding: "8px" }}
                  onError={() => setImgError(true)}
                />
              ) : (
                /* ── SVG placeholder when no image — NO text shown ── */
                <ProductPlaceholder color={ac.header} />
              )}
              </div>
            </div>
          </div>
        </div>

        {/* ── COL 2: Benefits ── */}
        <div
          className="flex-1 p-4"
          style={{ borderRight: `1px solid ${ac.header}22`, background: "white", minWidth: 0 }}
        >
          <div
            className="font-bold mb-2 uppercase tracking-wide"
            style={{ color: ac.header, fontSize: 11 }}
          >
            Benefits:
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {product.benefits.map((b, i) => (
              <li
                key={i}
                style={{
                  fontSize: 11.5,
                  color: "#1e2d3d",
                  lineHeight: 1.6,
                  paddingLeft: 14,
                  paddingBottom: 3,
                  position: "relative",
                  fontFamily: "'Segoe UI', system-ui, sans-serif",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 1,
                    top: "0.15em",
                    color: ac.header,
                    fontSize: 13,
                    lineHeight: 1,
                  }}
                >
                  •
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* ── COL 3: Composition ── */}
        <div
          className="p-4"
          style={{
            width: 260,
            flexShrink: 0,
            borderRight: `1px solid ${ac.header}22`,
            background: "#fafeff",
          }}
        >
          <div
            className="font-bold mb-2 uppercase tracking-wide"
            style={{ color: ac.header, fontSize: 11 }}
          >
            Composition:
          </div>
          <p
            style={{
              fontSize: 11,
              color: "#2a3c50",
              lineHeight: 1.7,
              textAlign: "justify",
              hyphens: "auto",
              fontFamily: "'Segoe UI', system-ui, sans-serif",
            }}
          >
            {product.composition}
          </p>
        </div>

        {/* ── COL 4: Dosage + Presentation / Form / Storage ── */}
        <div
          className="p-4"
          style={{
            width: 220,
            flexShrink: 0,
            background: "#f7faff",
          }}
        >
          <div
            className="font-bold mb-1.5 uppercase tracking-wide"
            style={{ color: ac.header, fontSize: 11 }}
          >
            Dosage:
          </div>
          {product.dosage.map((d, i) => (
            <div key={i} style={{ marginBottom: 6 }}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: ac.label,
                  lineHeight: 1.3,
                  marginBottom: 1,
                }}
              >
                {d.label}:
              </div>
              <div style={{ fontSize: 10.5, color: "#1a2b3c", lineHeight: 1.55 }}>
                {d.dose}
              </div>
            </div>
          ))}

          <div
            style={{
              borderTop: `1px solid ${ac.header}33`,
              marginTop: 10,
              paddingTop: 10,
            }}
          >
            <div
              className="font-bold uppercase"
              style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
            >
              Presentation:
            </div>
            <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6, lineHeight: 1.4 }}>
              {product.presentation}
            </div>

            <div
              className="font-bold uppercase"
              style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
            >
              Form:
            </div>
            <div style={{ fontSize: 11, color: "#1a2b3c", marginBottom: 6 }}>
              {product.form}
            </div>

            <div
              className="font-bold uppercase"
              style={{ color: ac.header, fontSize: 10.5, letterSpacing: 0.3 }}
            >
              Storage &amp; Caution:
            </div>
            <div style={{ fontSize: 11, color: "#1a2b3c", lineHeight: 1.5 }}>
              {product.storage}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function CataloguePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = PRODUCTS.filter((p) => {
    const matchCat =
      activeCategory === "All" ||
      p.type === activeCategory ||
      (activeCategory === "Sanitizer" && p.badge === "Sanitizer");
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.composition.toLowerCase().includes(q) ||
      p.benefits.some((b) => b.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  return (
    <div
      className="min-h-screen bg-[#eef3f9]"
      style={{ fontFamily: "'Segoe UI', system-ui, sans-serif",marginTop:"60px" }}
    >
      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2557] via-[#2A5DA8] to-[#0e7fc2]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border-[80px] border-white/5 translate-x-48 -translate-y-48 pointer-events-none" />
        <div className="absolute top-12 right-64 w-[300px] h-[300px] rounded-full border-[50px] border-white/5 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border-[60px] border-white/5 -translate-x-32 translate-y-32 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,2 55,16 55,44 30,58 5,44 5,16' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-14">
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div>
              {/* ── Logo / brand block ── */}
              {/* <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-xl italic">i</span>
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-white text-sm font-semibold leading-tight">
                    Innovare Biopharma LLP
                  </p>
                  <p className="text-white/50 text-[11px] leading-tight">
                    Solution to Aquaculture Health
                  </p>
                </div>
              </div> */}

              {/* ── Heading ── */}
              <h1 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
                Product
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
                  Catalogue
                </span>
              </h1>
              <p className="mt-4 text-white/65 text-sm max-w-xl leading-relaxed">
                Complete reference guide — compositions, benefits, dosages and certifications for all Innovare Biopharma aquaculture solutions.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  { value: `${PRODUCTS.length}+`, label: "Products" },
                  { value: "ISO 9001:2015", label: "Certified" },
                  { value: "GMP", label: "Quality Practice" },
                  { value: "MSME", label: "Registered" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3"
                  >
                    <div className="text-white font-black text-lg leading-none">{s.value}</div>
                    <div className="text-white/55 text-[11px] font-semibold mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Search — aligned to bottom of left column (items-end on parent) */}
            <div className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products, ingredients, benefits..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-80 pl-10 pr-4 py-3 rounded-2xl border border-white/25 bg-white/10 text-white placeholder-white/40 text-sm outline-none focus:bg-white/20 focus:border-white/50 transition-all"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <p className="text-white/40 text-xs text-right">
                Showing{" "}
                <span className="text-white/80 font-bold">{filtered.length}</span> of{" "}
                {PRODUCTS.length} products
              </p>
            </div>
          </div>

          {/* ── Category Filter Tabs ── */}
          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              const count =
                cat === "All"
                  ? PRODUCTS.length
                  : PRODUCTS.filter(
                      (p) =>
                        p.type === cat ||
                        (cat === "Sanitizer" && p.badge === "Sanitizer")
                    ).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200"
                  style={{
                    background: active ? "white" : "rgba(255,255,255,0.1)",
                    color: active ? "#0f2557" : "rgba(255,255,255,0.75)",
                    border: active ? "none" : "1px solid rgba(255,255,255,0.2)",
                    boxShadow: active ? "0 4px 14px rgba(0,0,0,0.15)" : "none",
                  }}
                >
                  {cat}
                  <span
                    className="rounded-full px-1.5 py-0.5"
                    style={{
                      background: active ? "#2A5DA8" : "rgba(255,255,255,0.15)",
                      color: active ? "white" : "rgba(255,255,255,0.7)",
                      fontSize: 9,
                      fontWeight: 800,
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══ PRODUCT LIST ════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-8 py-8" ref={gridRef}>
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center py-32 text-gray-400">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9ca3af"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <p className="font-semibold text-base text-gray-500">No products found</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-4 px-5 py-2 rounded-xl bg-[#2A5DA8] text-white text-sm font-semibold"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {filtered.map((p) => (
              <PDFCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}