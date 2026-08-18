// // // // // // // // export type BlogPost = {
// // // // // // // //   id: number;
// // // // // // // //   slug: string;
// // // // // // // //   title: string;
// // // // // // // //   description: string;
// // // // // // // //   category: string;
// // // // // // // //   date: string;
// // // // // // // //   readTime: string;
// // // // // // // //   image: string;
// // // // // // // //   featured?: boolean;
// // // // // // // // };

// // // // // // // // export const blogs: BlogPost[] = [
// // // // // // // //   {
// // // // // // // //     id: 1,
// // // // // // // //     slug: "ammonia-control-shrimp-pond",
// // // // // // // //     title: "How to Reduce Ammonia Levels in Shrimp Ponds",
// // // // // // // //     description:
// // // // // // // //       "Learn the causes, risks and practical management strategies for ammonia in shrimp farming.",
// // // // // // // //     category: "Water Quality",
// // // // // // // //     date: "August 8, 2026",
// // // // // // // //     readTime: "8 min read",
// // // // // // // //     image: "/images/blog/ammonia-control.webp",
// // // // // // // //     featured: true,
// // // // // // // //   },

// // // // // // // //   {
// // // // // // // //     id: 2,
// // // // // // // //     slug: "shrimp-pond-water-quality",
// // // // // // // //     title: "Shrimp Pond Water Quality Management: Complete Guide",
// // // // // // // //     description:
// // // // // // // //       "Understand the essential water-quality parameters required for healthy and productive shrimp farming.",
// // // // // // // //     category: "Water Quality",
// // // // // // // //     date: "August 2026",
// // // // // // // //     readTime: "10 min read",
// // // // // // // //     image: "/images/blog/water-quality.webp",
// // // // // // // //   },

// // // // // // // //   {
// // // // // // // //     id: 3,
// // // // // // // //     slug: "probiotics-shrimp-farming",
// // // // // // // //     title: "Probiotics for Shrimp Farming: Complete Guide",
// // // // // // // //     description:
// // // // // // // //       "Explore how beneficial microorganisms can support gut health, water quality and modern aquaculture management.",
// // // // // // // //     category: "Probiotics",
// // // // // // // //     date: "August 2026",
// // // // // // // //     readTime: "9 min read",
// // // // // // // //     image: "/images/blog/probiotics.webp",
// // // // // // // //   },

// // // // // // // //   {
// // // // // // // //     id: 4,
// // // // // // // //     slug: "nitrite-control-shrimp-pond",
// // // // // // // //     title: "How to Reduce Nitrite Levels in Shrimp Ponds",
// // // // // // // //     description:
// // // // // // // //       "Learn why nitrite accumulates and how good pond-management practices can support stable water conditions.",
// // // // // // // //     category: "Water Quality",
// // // // // // // //     date: "August 2026",
// // // // // // // //     readTime: "7 min read",
// // // // // // // //     image: "/images/blog/nitrite-control.webp",
// // // // // // // //   },

// // // // // // // //   {
// // // // // // // //     id: 5,
// // // // // // // //     slug: "improve-fcr-shrimp-farming",
// // // // // // // //     title: "How to Improve FCR in Shrimp Farming",
// // // // // // // //     description:
// // // // // // // //       "Learn practical approaches to feed management, gut health and pond conditions for better feed efficiency.",
// // // // // // // //     category: "Nutrition",
// // // // // // // //     date: "September 2026",
// // // // // // // //     readTime: "8 min read",
// // // // // // // //     image: "/images/blog/shrimp-fcr.webp",
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // export function getBlogBySlug(slug: string) {xq/
// // // // // // // //   return blogs.find((blog) => blog.slug === slug);
// // // // // // // // }
// // // // // // // export type BlogPost = {
// // // // // // //   id: number;
// // // // // // //   slug: string;
// // // // // // //   title: string;
// // // // // // //   description: string;
// // // // // // //   category: string;
// // // // // // //   date: string;
// // // // // // //   readTime: string;
// // // // // // //   image: string;
// // // // // // //   featured?: boolean;
// // // // // // // };

// // // // // // // export const blogs: BlogPost[] = [
// // // // // // //   {
// // // // // // //     id: 1,
// // // // // // //     slug: "ammonia-control-shrimp-pond",
// // // // // // //     title: "How to Reduce Ammonia Levels in Shrimp Ponds",
// // // // // // //     description:
// // // // // // //       "Learn the causes, risks and practical management strategies for ammonia in shrimp farming.",
// // // // // // //     category: "Water Quality",
// // // // // // //     date: "August 8, 2026",
// // // // // // //     readTime: "8 min read",
// // // // // // //     image: "/images/blog/ammonia-control.webp",
// // // // // // //     featured: true,
// // // // // // //   },
// // // // // // // ];

// // // // // // // export function getBlogBySlug(slug: string) {
// // // // // // //   return blogs.find((blog) => blog.slug === slug);
// // // // // // // }
// // // // // // export type BlogSection = {
// // // // // //   heading: string;
// // // // // //   paragraphs?: string[];
// // // // // //   points?: string[];
// // // // // // };

// // // // // // export type BlogPost = {
// // // // // //   id: number;
// // // // // //   slug: string;
// // // // // //   title: string;
// // // // // //   description: string;
// // // // // //   category: string;
// // // // // //   date: string;
// // // // // //   readTime: string;
// // // // // //   image: string;
// // // // // //   featured?: boolean;
// // // // // //   content: {
// // // // // //   heading: string;
// // // // // //   paragraphs: string[];
// // // // // //   image?: string;
// // // // // // }[];
  
// // // // // // };


// // // // // // // export const blogs: BlogPost[] = [
// // // // // // //   {
// // // // // // //     id: 1,
// // // // // // //     slug: "ammonia-control-shrimp-pond",
// // // // // // //     title: "How to Reduce Ammonia Levels in Shrimp Ponds",
// // // // // // //     description:
// // // // // // //       "Learn the causes, risks and practical management strategies for ammonia in shrimp farming.",
// // // // // // //     category: "Water Quality",
// // // // // // //     date: "August 8, 2026",
// // // // // // //     readTime: "8 min read",
// // // // // // //     image: "/images/blog/ammonia-control.webp",
// // // // // // //     featured: true,

// // // // // // //     sections: [
// // // // // // //       {
// // // // // // //         heading: "Introduction",
// // // // // // //         paragraphs: [
// // // // // // //           "Maintaining stable water quality is one of the most important requirements for successful shrimp farming.",
// // // // // // //           "Among the different water-quality challenges faced by aquaculture businesses, ammonia accumulation deserves particular attention.",
// // // // // // //         ],
// // // // // // //       },

// // // // // // //       {
// // // // // // //         heading: "What Is Ammonia in a Shrimp Pond?",
// // // // // // //         paragraphs: [
// // // // // // //           "Ammonia in pond water mainly occurs as un-ionized ammonia (NH3) and ammonium (NH4+).",
// // // // // // //           "The un-ionized NH3 form is more toxic to aquatic animals and requires careful monitoring in intensive shrimp farming.",
// // // // // // //         ],
// // // // // // //       },

// // // // // // //       {
// // // // // // //         heading: "What Causes High Ammonia in Shrimp Ponds?",
// // // // // // //         paragraphs: [
// // // // // // //           "High ammonia usually results from several pond-management factors working together.",
// // // // // // //         ],
// // // // // // //         points: [
// // // // // // //           "Excess or uneaten feed",
// // // // // // //           "Shrimp metabolic waste",
// // // // // // //           "Accumulation of organic matter",
// // // // // // //           "Dead plankton and faecal matter",
// // // // // // //           "Insufficient biological conversion",
// // // // // // //           "Poor dissolved oxygen conditions",
// // // // // // //         ],
// // // // // // //       },

// // // // // // //       {
// // // // // // //         heading: "Why Is High Ammonia Dangerous?",
// // // // // // //         paragraphs: [
// // // // // // //           "Elevated ammonia can place shrimp under physiological stress and reduce overall culture performance.",
// // // // // // //         ],
// // // // // // //         points: [
// // // // // // //           "Reduced feed intake",
// // // // // // //           "Poor growth",
// // // // // // //           "Increased environmental stress",
// // // // // // //           "Reduced culture performance",
// // // // // // //           "Greater susceptibility to health challenges",
// // // // // // //           "Mortality under severe conditions",
// // // // // // //         ],
// // // // // // //       },

// // // // // // //       {
// // // // // // //         heading: "Ammonia, pH and Temperature",
// // // // // // //         paragraphs: [
// // // // // // //           "The toxicity of ammonia changes with pond conditions.",
// // // // // // //           "As pH and temperature increase, a greater proportion of total ammonia can occur in the more toxic un-ionized NH3 form.",
// // // // // // //           "For this reason, ammonia should be interpreted together with pH, temperature and other water-quality parameters.",
// // // // // // //         ],
// // // // // // //       },

// // // // // // //       {
// // // // // // //         heading: "How Can Aquaculture Businesses Manage Ammonia?",
// // // // // // //         paragraphs: [
// // // // // // //           "Effective ammonia management should focus on prevention rather than waiting until pond conditions become critical.",
// // // // // // //         ],
// // // // // // //         points: [
// // // // // // //           "Optimize feeding practices",
// // // // // // //           "Maintain adequate dissolved oxygen",
// // // // // // //           "Manage pond-bottom organic matter",
// // // // // // //           "Support a stable microbial environment",
// // // // // // //           "Monitor water quality regularly",
// // // // // // //         ],
// // // // // // //       },

// // // // // // //       {
// // // // // // //         heading: "Role of Water-Quality Solutions",
// // // // // // //         paragraphs: [
// // // // // // //           "Modern aquaculture operations often combine monitoring, aeration, feeding management, pond-bottom management and microbial approaches.",
// // // // // // //           "Water-quality products should support good aquaculture practices rather than replace them.",
// // // // // // //         ],
// // // // // // //       },

// // // // // // //       {
// // // // // // //         heading: "Conclusion",
// // // // // // //         paragraphs: [
// // // // // // //           "Ammonia management is an important part of successful shrimp production.",
// // // // // // //           "A preventive strategy combining regular monitoring, responsible feeding, aeration, pond-bottom management and microbial management can help maintain stable pond conditions.",
// // // // // // //         ],
// // // // // // //       },
// // // // // // //     ],
// // // // // // //   },
// // // // // // // ];
// // // // // // // export const blogs: BlogPost[] = [
// // // // // // //   {
// // // // // // //     id: 1,
// // // // // // //     slug: "ammonia-control-shrimp-pond",
// // // // // // //     title: "How to Reduce Ammonia Levels in Shrimp Ponds",
// // // // // // //     description:
// // // // // // //       "Learn the causes, risks and practical management strategies for ammonia in shrimp farming.",
// // // // // // //     category: "Water Quality",
// // // // // // //     date: "August 8, 2026",
// // // // // // //     readTime: "8 min read",
// // // // // // //     image: "/images/blog/ammonia-control.webp",
// // // // // // //     featured: true,

// // // // // // //     content: [
// // // // // // //       {
// // // // // // //         heading: "What Is Ammonia in a Shrimp Pond?",
// // // // // // //         paragraphs: [
// // // // // // //           "Ammonia in pond water occurs mainly in two forms: un-ionized ammonia (NH3) and ammonium (NH4+).",
// // // // // // //           "The un-ionized NH3 form is more toxic to aquatic animals and requires careful monitoring in intensive shrimp culture.",
// // // // // // //         ],
// // // // // // //       },
// // // // // // //       {
// // // // // // //         heading: "What Causes High Ammonia in Shrimp Ponds?",
// // // // // // //         paragraphs: [
// // // // // // //           "Ammonia can increase because of uneaten feed, shrimp metabolic waste, dead plankton and accumulated organic matter.",
// // // // // // //           "As shrimp biomass and feeding rates increase, the nitrogen load in the pond also increases.",
// // // // // // //         ],
// // // // // // //       },
// // // // // // //       {
// // // // // // //         heading: "Why Is High Ammonia Dangerous?",
// // // // // // //         paragraphs: [
// // // // // // //           "Elevated ammonia can place shrimp under physiological stress.",
// // // // // // //           "Prolonged exposure may contribute to reduced feed intake, slower growth and lower culture performance.",
// // // // // // //         ],
// // // // // // //       },
// // // // // // //       {
// // // // // // //         heading: "How Can Aquaculture Businesses Manage Ammonia?",
// // // // // // //         paragraphs: [
// // // // // // //           "Effective ammonia management starts with good feeding practices, adequate aeration, pond-bottom management and regular water-quality monitoring.",
// // // // // // //           "Beneficial microbial formulations may also support organic-matter degradation and nutrient cycling when used as part of a broader pond-management strategy.",
// // // // // // //         ],
// // // // // // //       },
// // // // // // //     ],
// // // // // // //   },
// // // // // // // ];
// // // // // // export const blogs = [
// // // // // //   {
// // // // // //     id: 1,

// // // // // //     slug: "ammonia-control-shrimp-pond",

// // // // // //     title: "How to Reduce Ammonia Levels in Shrimp Ponds",

// // // // // //     metaTitle:
// // // // // //       "Ammonia Control in Shrimp Ponds: Causes & Management | Innovare",

// // // // // //     description:
// // // // // //       "Learn what causes ammonia in shrimp ponds, how pH and temperature influence ammonia toxicity, and practical management strategies for shrimp farming.",

// // // // // //     category: "Water Quality",

// // // // // //     date: "August 8, 2026",

// // // // // //     dateISO: "2026-08-08",

// // // // // //     modifiedISO: "2026-08-08",

// // // // // //     readTime: "9 min read",

// // // // // //     image: "/images/blog/ammonia-control.webp",

// // // // // //     featured: true,

// // // // // //     introduction: [
// // // // // //       "Maintaining stable shrimp pond water quality is fundamental to successful aquaculture production. Among the nitrogen compounds that require close attention, ammonia is particularly important because its more toxic un-ionized form can negatively affect shrimp under unsuitable pond conditions.",

// // // // // //       "Effective ammonia control in shrimp ponds is not based on one treatment alone. It requires an integrated approach combining water-quality monitoring, responsible feeding, sufficient aeration, pond-bottom management and appropriate biological management.",
// // // // // //     ],

// // // // // //     sections: [
// // // // // //       {
// // // // // //         id: "what-is-ammonia",

// // // // // //         heading: "What Is Ammonia in a Shrimp Pond?",

// // // // // //         image: "/images/blog/ammonia-water.webp",

// // // // // //         imageAlt:
// // // // // //           "Shrimp pond water quality monitoring",

// // // // // //         paragraphs: [
// // // // // //           "Ammonia in aquaculture water occurs mainly as un-ionized ammonia (NH3) and ionized ammonium (NH4+).",

// // // // // //           "The un-ionized NH3 form is more toxic to aquatic animals. Pond pH and temperature should therefore be considered when interpreting ammonia measurements.",
// // // // // //         ],
// // // // // //       },

// // // // // //       {
// // // // // //         id: "causes-ammonia",

// // // // // //         heading: "What Causes High Ammonia in Shrimp Ponds?",

// // // // // //         image: "/images/blog/pond-organic-load.webp",

// // // // // //         imageAlt:
// // // // // //           "Organic loading in a shrimp aquaculture pond",

// // // // // //         paragraphs: [
// // // // // //           "Ammonia can be generated through shrimp metabolism and the microbial decomposition of nitrogen-containing organic material.",

// // // // // //           "Uneaten feed, faecal matter, dead plankton and other organic residues can increase the nitrogen load of the pond.",
// // // // // //         ],
// // // // // //       },

// // // // // //       {
// // // // // //         id: "ammonia-risks",

// // // // // //         heading: "How Can High Ammonia Affect Shrimp?",

// // // // // //         image: "/images/blog/shrimp-health.webp",

// // // // // //         imageAlt:
// // // // // //           "Healthy shrimp in aquaculture",

// // // // // //         paragraphs: [
// // // // // //           "Exposure to unsuitable ammonia concentrations can create physiological stress and may negatively influence shrimp performance.",

// // // // // //           "The impact depends on concentration, exposure duration, species, life stage and surrounding water conditions.",
// // // // // //         ],
// // // // // //       },

// // // // // //       {
// // // // // //         id: "ph-temperature",

// // // // // //         heading:
// // // // // //           "Why pH and Temperature Matter for Ammonia Toxicity",

// // // // // //         image: "/images/blog/water-testing.webp",

// // // // // //         imageAlt:
// // // // // //           "Aquaculture water quality testing",

// // // // // //         paragraphs: [
// // // // // //           "As pH increases, a greater proportion of Total Ammonia Nitrogen can occur as the more toxic un-ionized NH3 form.",

// // // // // //           "Temperature also influences this balance, which is why ammonia should not be interpreted independently from other pond parameters.",
// // // // // //         ],
// // // // // //       },

// // // // // //       {
// // // // // //         id: "monitoring",

// // // // // //         heading:
// // // // // //           "What Water-Quality Parameters Should Be Monitored?",

// // // // // //         paragraphs: [
// // // // // //           "Ammonia should be evaluated as part of a broader shrimp pond water-quality monitoring program.",

// // // // // //           "Important parameters include pH, temperature, dissolved oxygen, nitrite, alkalinity and salinity.",
// // // // // //         ],
// // // // // //       },

// // // // // //       {
// // // // // //         id: "management",

// // // // // //         heading:
// // // // // //           "How to Manage Ammonia in Shrimp Farming",

// // // // // //         image: "/images/blog/shrimp-pond-aeration.webp",

// // // // // //         imageAlt:
// // // // // //           "Paddle wheel aerators in a commercial shrimp pond",

// // // // // //         paragraphs: [
// // // // // //           "Effective ammonia management starts with reducing unnecessary organic loading through responsible feeding practices.",

// // // // // //           "Adequate aeration, pond-bottom management and regular monitoring can help maintain more stable culture conditions.",
// // // // // //         ],
// // // // // //       },

// // // // // //       {
// // // // // //         id: "microbial-management",

// // // // // //         heading:
// // // // // //           "Role of Beneficial Microorganisms in Water-Quality Management",

// // // // // //         image:
// // // // // //           "/images/blog/biological-water-management.webp",

// // // // // //         imageAlt:
// // // // // //           "Biological water quality management in aquaculture",

// // // // // //         paragraphs: [
// // // // // //           "Selected beneficial microorganisms may support organic-matter degradation and nutrient transformation under suitable pond conditions.",

// // // // // //           "They should complement feeding control, aeration and regular monitoring rather than replace these management practices.",
// // // // // //         ],
// // // // // //       },

// // // // // //       {
// // // // // //         id: "preventive-strategy",

// // // // // //         heading:
// // // // // //           "Building a Preventive Ammonia Management Strategy",

// // // // // //         paragraphs: [
// // // // // //           "A preventive strategy focuses on controlling the conditions that allow ammonia to accumulate rather than relying only on corrective action.",

// // // // // //           "Regular monitoring, feeding management, aeration, organic-waste control and timely intervention can support more stable pond conditions.",
// // // // // //         ],
// // // // // //       },
// // // // // //     ],

// // // // // //     faq: [
// // // // // //       {
// // // // // //         question:
// // // // // //           "What causes ammonia to increase in shrimp ponds?",

// // // // // //         answer:
// // // // // //           "Ammonia can increase because of shrimp metabolic waste and the decomposition of uneaten feed, faecal material, dead plankton and other organic matter.",
// // // // // //       },

// // // // // //       {
// // // // // //         question:
// // // // // //           "Why does pH affect ammonia toxicity?",

// // // // // //         answer:
// // // // // //           "Higher pH can increase the proportion of ammonia present as un-ionized NH3, which is the more toxic form.",
// // // // // //       },

// // // // // //       {
// // // // // //         question:
// // // // // //           "Does temperature affect ammonia toxicity?",

// // // // // //         answer:
// // // // // //           "Yes. Temperature influences the balance between ammonium and un-ionized ammonia, so ammonia measurements should be interpreted together with temperature and pH.",
// // // // // //       },

// // // // // //       {
// // // // // //         question:
// // // // // //           "Can probiotics help manage ammonia?",

// // // // // //         answer:
// // // // // //           "Selected beneficial microorganisms may support organic-matter degradation and nutrient transformation when used as part of a broader water-quality management program.",
// // // // // //       },

// // // // // //       {
// // // // // //         question:
// // // // // //           "What parameters should be monitored along with ammonia?",

// // // // // //         answer:
// // // // // //           "Aquaculture operators commonly evaluate ammonia together with pH, temperature, dissolved oxygen, nitrite, alkalinity and salinity.",
// // // // // //       },
// // // // // //     ],
// // // // // //   },
// // // // // // ];

// // // // // // export function getBlogBySlug(slug: string) {
// // // // // //   return blogs.find((blog) => blog.slug === slug);
// // // // // // }

// // // // // export type BlogSection = {
// // // // //   id: string;
// // // // //   heading: string;
// // // // //   paragraphs: string[];
// // // // //   image?: string;
// // // // //   imageAlt?: string;
// // // // // };

// // // // // export type BlogFAQ = {
// // // // //   question: string;
// // // // //   answer: string;
// // // // // };

// // // // // export type BlogAuthor = {
// // // // //   name: string;
// // // // //   role: string;
// // // // //   bio: string;
// // // // // };

// // // // // export type BlogPost = {
// // // // //   id: number;
// // // // //   slug: string;

// // // // //   title: string;
// // // // //   metaTitle: string;
// // // // //   description: string;

// // // // //   category: string;

// // // // //   date: string;
// // // // //   dateISO: string;

// // // // //   modifiedDate?: string;
// // // // //   modifiedISO?: string;

// // // // //   readTime: string;

// // // // //   image: string;

// // // // //   featured?: boolean;

// // // // //   introduction: string[];

// // // // //   sections: BlogSection[];

// // // // //   faq: BlogFAQ[];

// // // // //   author: BlogAuthor;

// // // // //   tags: string[];
// // // // // };

// // // // // export const blogs: BlogPost[] = [
// // // // //   {
// // // // //     id: 1,

// // // // //     slug: "ammonia-control-shrimp-pond",

// // // // //     title:
// // // // //       "How to Reduce Ammonia Levels in Shrimp Ponds",

// // // // //     metaTitle:
// // // // //       "Ammonia Control in Shrimp Ponds | Innovare Biopharma",

// // // // //     description:
// // // // //       "Learn what causes ammonia in shrimp ponds, how pH and temperature influence ammonia toxicity, and practical strategies for effective shrimp pond water-quality management.",

// // // // //     category: "Water Quality",

// // // // //     date: "August 10, 2026",

// // // // //     dateISO: "2026-08-10",

// // // // //     modifiedDate: "August 10, 2026",

// // // // //     modifiedISO: "2026-08-10",

// // // // //     readTime: "9 min read",

// // // // //     image: "/images/blog/ammonia-control.webp",

// // // // //     featured: true,

// // // // //     introduction: [
// // // // //       "Maintaining stable shrimp pond water quality is fundamental to successful aquaculture production. Among the nitrogen compounds that require close attention, ammonia is particularly important because its more toxic un-ionized form can negatively affect shrimp under unsuitable pond conditions.",

// // // // //       "Effective ammonia control in shrimp ponds should not depend on one corrective treatment alone. A stronger approach combines water-quality monitoring, responsible feeding, adequate aeration, pond-bottom management, organic-load control and appropriate biological management.",
// // // // //     ],

// // // // //     sections: [
// // // // //       {
// // // // //         id: "what-is-ammonia",

// // // // //         heading:
// // // // //           "What Is Ammonia in a Shrimp Pond?",

// // // // //         image:
// // // // //           "/images/blog/ammonia-water.webp",

// // // // //         imageAlt:
// // // // //           "Water-quality monitoring in a commercial shrimp aquaculture pond",

// // // // //         paragraphs: [
// // // // //           "Ammonia in aquaculture water exists mainly in two forms: ionized ammonium (NH4+) and un-ionized ammonia (NH3). Together, these forms contribute to Total Ammonia Nitrogen, commonly referred to as TAN.",

// // // // //           "The distinction is important because un-ionized NH3 is considerably more toxic to aquatic animals than the ionized ammonium form.",

// // // // //           "For this reason, an ammonia reading should not be interpreted independently. Pond pH and temperature influence the balance between NH4+ and NH3 and should be evaluated alongside ammonia results.",
// // // // //         ],
// // // // //       },

// // // // //       {
// // // // //         id: "causes-ammonia",

// // // // //         heading:
// // // // //           "What Causes High Ammonia in Shrimp Ponds?",

// // // // //         image:
// // // // //           "/images/blog/pond-organic-load.webp",

// // // // //         imageAlt:
// // // // //           "Commercial shrimp pond illustrating feed input and organic loading",

// // // // //         paragraphs: [
// // // // //           "Ammonia is produced naturally through shrimp metabolism and through the microbial decomposition of nitrogen-containing organic matter in the culture environment.",

// // // // //           "Uneaten feed, faecal material, dead plankton and accumulated organic residues can contribute to the nitrogen load of the pond.",

// // // // //           "As shrimp biomass increases during the production cycle, feed input and waste production may also increase. If ammonia production exceeds the biological capacity of the pond to transform nitrogen efficiently, ammonia can accumulate.",
// // // // //         ],
// // // // //       },

// // // // //       {
// // // // //         id: "ammonia-risks",

// // // // //         heading:
// // // // //           "How Can High Ammonia Affect Shrimp?",

// // // // //         image:
// // // // //           "/images/blog/shrimp-health.webp",

// // // // //         imageAlt:
// // // // //           "Healthy Vannamei shrimp representing effective aquaculture water-quality management",

// // // // //         paragraphs: [
// // // // //           "Exposure to unsuitable ammonia concentrations can create physiological stress and may negatively influence shrimp performance.",

// // // // //           "Potential effects can include changes in feeding behaviour, impaired growth and greater sensitivity to additional environmental challenges.",

// // // // //           "The actual impact depends on ammonia concentration, duration of exposure, shrimp species, life stage and surrounding water conditions. Commercial farms should therefore focus on identifying deteriorating conditions before they develop into larger production problems.",
// // // // //         ],
// // // // //       },

// // // // //       {
// // // // //         id: "ph-temperature",

// // // // //         heading:
// // // // //           "Why pH and Temperature Matter for Ammonia Toxicity",

// // // // //         image:
// // // // //           "/images/blog/water-testing.webp",

// // // // //         imageAlt:
// // // // //           "Aquaculture technician testing shrimp pond water quality",

// // // // //         paragraphs: [
// // // // //           "The relationship between ammonia, pH and temperature is one of the most important concepts in shrimp pond ammonia management.",

// // // // //           "As pH increases, a greater proportion of Total Ammonia Nitrogen can occur as un-ionized NH3. Temperature also influences this chemical balance.",

// // // // //           "This means that the same TAN measurement may represent different levels of concern under different pond conditions. Ammonia results should therefore be interpreted together with pH and temperature rather than in isolation.",
// // // // //         ],
// // // // //       },

// // // // //       {
// // // // //         id: "monitoring",

// // // // //         heading:
// // // // //           "What Water-Quality Parameters Should Be Monitored?",

// // // // //         paragraphs: [
// // // // //           "Ammonia should be evaluated as part of a broader shrimp pond water-quality monitoring program.",

// // // // //           "Important parameters commonly considered alongside ammonia include pH, temperature, dissolved oxygen, nitrite, alkalinity and salinity.",

// // // // //           "Maintaining consistent records can help farm managers identify trends and respond to changing pond conditions before they significantly affect shrimp production.",
// // // // //         ],
// // // // //       },

// // // // //       {
// // // // //         id: "management",

// // // // //         heading:
// // // // //           "How to Manage Ammonia in Shrimp Farming",

// // // // //         image:
// // // // //           "/images/blog/shrimp-pond-aeration.webp",

// // // // //         imageAlt:
// // // // //           "Paddle-wheel aerators operating in a commercial shrimp farming pond",

// // // // //         paragraphs: [
// // // // //           "Effective ammonia management begins with prevention. Feeding practices should be adjusted according to shrimp biomass, appetite, culture stage and actual feed consumption.",

// // // // //           "Adequate dissolved oxygen is important for shrimp and for biological processes involved in maintaining pond stability. Aeration requirements may increase as biomass and feed input rise.",

// // // // //           "Pond-bottom management is also important because accumulated sludge and organic matter can contribute to deteriorating water and sediment conditions.",

// // // // //           "Corrective actions should be selected according to actual water-quality measurements and farm conditions rather than applying the same treatment to every pond.",
// // // // //         ],
// // // // //       },

// // // // //       {
// // // // //         id: "microbial-management",

// // // // //         heading:
// // // // //           "Role of Beneficial Microorganisms in Water-Quality Management",

// // // // //         image:
// // // // //           "/images/blog/biological-water-management.webp",

// // // // //         imageAlt:
// // // // //           "Scientific representation of biological and microbial water-quality management in aquaculture",

// // // // //         paragraphs: [
// // // // //           "Microbial management is commonly incorporated into modern aquaculture water-quality programs. Selected beneficial microorganisms may support organic-matter degradation and nutrient transformation when environmental conditions are suitable.",

// // // // //           "Their performance can depend on factors such as microbial strains, product quality, oxygen availability, organic load, pond conditions and application practices.",

// // // // //           "Microbial products should therefore complement good feeding practices, aeration, pond management and routine monitoring rather than replacing those management fundamentals.",
// // // // //         ],
// // // // //       },

// // // // //       {
// // // // //         id: "preventive-strategy",

// // // // //         heading:
// // // // //           "Building a Preventive Ammonia Management Strategy",

// // // // //         paragraphs: [
// // // // //           "A stronger long-term strategy focuses on managing the conditions that allow ammonia to accumulate instead of relying only on corrective action after ammonia has already increased.",

// // // // //           "A prevention-first program combines regular measurement, trend analysis, feed management, adequate aeration, organic-load control, biological management and timely intervention.",

// // // // //           "For commercial aquaculture businesses, maintaining reliable records and making farm-specific decisions can support more stable culture conditions throughout the production cycle.",
// // // // //         ],
// // // // //       },
// // // // //     ],

// // // // //     faq: [
// // // // //       {
// // // // //         question:
// // // // //           "What causes ammonia to increase in shrimp ponds?",

// // // // //         answer:
// // // // //           "Ammonia can increase because of shrimp metabolic waste and the decomposition of uneaten feed, faecal material, dead plankton and other nitrogen-containing organic matter.",
// // // // //       },

// // // // //       {
// // // // //         question:
// // // // //           "Why does pH affect ammonia toxicity?",

// // // // //         answer:
// // // // //           "Higher pH can increase the proportion of Total Ammonia Nitrogen present as un-ionized NH3, which is the more toxic ammonia form for aquatic animals.",
// // // // //       },

// // // // //       {
// // // // //         question:
// // // // //           "Does temperature affect ammonia in shrimp ponds?",

// // // // //         answer:
// // // // //           "Yes. Temperature influences the balance between ionized ammonium and un-ionized ammonia. Ammonia measurements should therefore be interpreted together with both temperature and pH.",
// // // // //       },

// // // // //       {
// // // // //         question:
// // // // //           "Can probiotics help with ammonia management?",

// // // // //         answer:
// // // // //           "Selected beneficial microorganisms may support organic-matter degradation and nutrient transformation under suitable conditions. They should form part of an integrated water-quality management strategy rather than replacing aeration, feed management or monitoring.",
// // // // //       },

// // // // //       {
// // // // //         question:
// // // // //           "Which parameters should be monitored together with ammonia?",

// // // // //         answer:
// // // // //           "Aquaculture operators commonly evaluate ammonia together with pH, temperature, dissolved oxygen, nitrite, alkalinity and salinity to understand the wider pond environment.",
// // // // //       },
// // // // //     ],

// // // // //     author: {
// // // // //       name:
// // // // //         "Innovare Biopharma Technical Team",

// // // // //       role:
// // // // //         "Aquaculture Technical & Product Knowledge Team",

// // // // //       bio:
// // // // //         "The Innovare Biopharma Technical Team develops educational resources covering shrimp health, aquaculture water quality, nutrition, microbial management and practical pond-management strategies for aquaculture businesses.",
// // // // //     },

// // // // //     tags: [
// // // // //       "Ammonia Control",
// // // // //       "Shrimp Farming",
// // // // //       "Water Quality",
// // // // //       "Aquaculture",
// // // // //       "Vannamei Shrimp",
// // // // //     ],
// // // // //   },
// // // // // ];

// // // // // export function getBlogBySlug(
// // // // //   slug: string
// // // // // ) {
// // // // //   return blogs.find(
// // // // //     (blog) => blog.slug === slug
// // // // //   );
// // // // // }
// // // // export type BlogSection = {
// // // //   id: string;
// // // //   heading: string;
// // // //   paragraphs: string[];
// // // //   image?: string;
// // // //   imageAlt?: string;
// // // // };

// // // // export type BlogFAQ = {
// // // //   question: string;
// // // //   answer: string;
// // // // };

// // // // export type BlogAuthor = {
// // // //   name: string;
// // // //   role: string;
// // // //   bio: string;
// // // // };

// // // // export type BlogReference = {
// // // //   title: string;
// // // //   source?: string;
// // // // };

// // // // export type BlogPost = {
// // // //   id: number;
// // // //   slug: string;

// // // //   title: string;
// // // //   metaTitle: string;
// // // //   description: string;

// // // //   category: string;

// // // //   date: string;
// // // //   dateISO: string;

// // // //   modifiedDate?: string;
// // // //   modifiedISO?: string;

// // // //   readTime: string;

// // // //   image: string;

// // // //   featured?: boolean;

// // // //   introduction: string[];

// // // //   sections: BlogSection[];

// // // //   faq: BlogFAQ[];

// // // //   author: BlogAuthor;

// // // //   tags: string[];

// // // //   references: BlogReference[];
// // // // };

// // // // export const blogs: BlogPost[] = [
// // // //   {
// // // //     id: 1,

// // // //     slug: "ammonia-control-shrimp-pond",

// // // //     title: "How to Reduce Ammonia Levels in Shrimp Ponds",

// // // //     metaTitle:
// // // //       "How to Reduce Ammonia in Shrimp Ponds | Innovare Biopharma",

// // // //     description:
// // // //       "Evidence-informed guidance on ammonia formation, shrimp pond water-quality monitoring and practical ammonia management for commercial shrimp farming.",

// // // //     category: "Water Quality",

// // // //     date: "10 August 2026",

// // // //     dateISO: "2026-08-10",

// // // //     modifiedDate: "10 August 2026",

// // // //     modifiedISO: "2026-08-10",

// // // //     readTime: "9 min read",

// // // //     image: "/images/blog/ammonia-control.webp",

// // // //     featured: true,

// // // //     introduction: [
// // // //       "Maintaining stable shrimp pond water quality is fundamental to successful aquaculture production. Among the nitrogen compounds that require close attention, ammonia is particularly important because its more toxic un-ionized form can negatively affect shrimp under unsuitable pond conditions.",

// // // //       "Effective ammonia control in shrimp ponds should not depend on one corrective treatment alone. A stronger approach combines water-quality monitoring, responsible feeding, adequate aeration, pond-bottom management, organic-load control and appropriate biological management.",
// // // //     ],

// // // //     sections: [
// // // //       {
// // // //         id: "what-is-ammonia",

// // // //         heading: "What Is Ammonia in a Shrimp Pond?",

// // // //         paragraphs: [
// // // //           "Ammonia in aquaculture water exists mainly in two forms: ionized ammonium (NH₄⁺) and un-ionized ammonia (NH₃). Together, these forms contribute to Total Ammonia Nitrogen, commonly referred to as TAN.",

// // // //           "The distinction is important because un-ionized NH₃ is considerably more toxic to aquatic animals than the ionized ammonium form.",

// // // //           "For this reason, an ammonia reading should not be interpreted independently. Pond pH and temperature influence the balance between NH₄⁺ and NH₃ and should be evaluated alongside ammonia results.",
// // // //         ],
// // // //       },

// // // //       {
// // // //         id: "causes-ammonia",

// // // //         heading: "What Causes High Ammonia in Shrimp Ponds?",

// // // //         paragraphs: [
// // // //           "Ammonia is produced naturally through shrimp metabolism and through the microbial decomposition of nitrogen-containing organic matter in the culture environment.",

// // // //           "Uneaten feed, faecal material, dead plankton and accumulated organic residues can contribute to the nitrogen load of the pond.",

// // // //           "As shrimp biomass increases during the production cycle, feed input and waste production may also increase. If ammonia production exceeds the biological capacity of the pond to transform nitrogen efficiently, ammonia can accumulate.",
// // // //         ],
// // // //       },

// // // //       {
// // // //         id: "ammonia-risks",

// // // //         heading: "How Can High Ammonia Affect Shrimp?",

// // // //         image: "/images/blog/shrimp-health.webp",

// // // //         imageAlt:
// // // //           "Healthy shrimp used to illustrate effective water-quality management in aquaculture",

// // // //         paragraphs: [
// // // //           "Exposure to unsuitable ammonia concentrations can create physiological stress and may negatively influence shrimp performance.",

// // // //           "Potential effects can include changes in feeding behaviour, impaired growth and greater sensitivity to additional environmental challenges.",

// // // //           "The actual impact depends on ammonia concentration, duration of exposure, shrimp species, life stage and surrounding water conditions.",
// // // //         ],
// // // //       },

// // // //       {
// // // //         id: "ph-temperature",

// // // //         heading: "Why pH and Temperature Matter for Ammonia Toxicity",

// // // //         paragraphs: [
// // // //           "The relationship between ammonia, pH and temperature is one of the most important concepts in shrimp pond ammonia management.",

// // // //           "As pH increases, a greater proportion of Total Ammonia Nitrogen can occur as un-ionized NH₃. Temperature also influences this chemical balance.",

// // // //           "The same TAN measurement may therefore represent different levels of concern under different pond conditions. TAN, pH and temperature should be interpreted together.",
// // // //         ],
// // // //       },

// // // //       {
// // // //         id: "monitoring",

// // // //         heading: "What Water-Quality Parameters Should Be Monitored?",

// // // //         paragraphs: [
// // // //           "Ammonia should be evaluated as part of a broader shrimp pond water-quality monitoring program.",

// // // //           "Important parameters commonly considered alongside ammonia include pH, temperature, dissolved oxygen, nitrite, alkalinity and salinity.",

// // // //           "Maintaining consistent records can help farm managers identify trends and respond to changing pond conditions before they significantly affect shrimp production.",
// // // //         ],
// // // //       },

// // // //       {
// // // //         id: "management",

// // // //         heading: "How to Manage Ammonia in Shrimp Farming",

// // // //         paragraphs: [
// // // //           "Effective ammonia management begins with prevention. Feeding practices should be adjusted according to shrimp biomass, appetite, culture stage and actual feed consumption.",

// // // //           "Adequate dissolved oxygen is important for shrimp and for biological processes involved in maintaining pond stability. Aeration requirements may increase as biomass and feed input rise.",

// // // //           "Pond-bottom management is also important because accumulated sludge and organic matter can contribute to deteriorating water and sediment conditions.",

// // // //           "Corrective actions should be selected according to actual water-quality measurements and farm conditions rather than applying the same treatment to every pond.",
// // // //         ],
// // // //       },

// // // //       {
// // // //         id: "microbial-management",

// // // //         heading:
// // // //           "Role of Beneficial Microorganisms in Water-Quality Management",

// // // //         image: "/images/blog/biological-water-management.webp",

// // // //         imageAlt:
// // // //           "Scientific illustration representing beneficial microorganisms used in aquaculture water-quality management",

// // // //         paragraphs: [
// // // //           "Microbial management is commonly incorporated into modern aquaculture water-quality programs. Selected beneficial microorganisms may support organic-matter degradation and nutrient transformation when environmental conditions are suitable.",

// // // //           "Their performance can depend on microbial strains, product quality, oxygen availability, organic load, pond conditions and application practices.",

// // // //           "Microbial products should complement good feeding practices, aeration, pond management and routine monitoring rather than replacing these management fundamentals.",
// // // //         ],
// // // //       },

// // // //       {
// // // //         id: "preventive-strategy",

// // // //         heading: "Building a Preventive Ammonia Management Strategy",

// // // //         image: "/images/blog/preventive-water-management.webp",

// // // //         imageAlt:
// // // //           "Commercial shrimp pond illustrating preventive water-quality management",

// // // //         paragraphs: [
// // // //           "A stronger long-term strategy focuses on managing the conditions that allow ammonia to accumulate instead of relying only on corrective action after ammonia has already increased.",

// // // //           "A prevention-first program combines regular measurement, trend analysis, feed management, adequate aeration, organic-load control, biological management and timely intervention.",

// // // //           "For commercial aquaculture businesses, maintaining reliable records and making farm-specific decisions can support more stable culture conditions throughout the production cycle.",
// // // //         ],
// // // //       },
// // // //     ],

// // // //     faq: [
// // // //       {
// // // //         question: "What causes ammonia to increase in shrimp ponds?",
// // // //         answer:
// // // //           "Ammonia can increase because of shrimp metabolic waste and the decomposition of uneaten feed, faecal material, dead plankton and other nitrogen-containing organic matter.",
// // // //       },

// // // //       {
// // // //         question: "Why does pH affect ammonia toxicity?",
// // // //         answer:
// // // //           "Higher pH can increase the proportion of Total Ammonia Nitrogen present as un-ionized NH₃, which is the more toxic ammonia form for aquatic animals.",
// // // //       },

// // // //       {
// // // //         question: "Does temperature affect ammonia in shrimp ponds?",
// // // //         answer:
// // // //           "Yes. Temperature influences the balance between ionized ammonium and un-ionized ammonia. Ammonia measurements should therefore be interpreted together with both temperature and pH.",
// // // //       },

// // // //       {
// // // //         question: "Can probiotics help with ammonia management?",
// // // //         answer:
// // // //           "Selected beneficial microorganisms may support organic-matter degradation and nutrient transformation under suitable conditions. They should form part of an integrated water-quality management strategy rather than replacing aeration, feed management or monitoring.",
// // // //       },

// // // //       {
// // // //         question:
// // // //           "Which parameters should be monitored together with ammonia?",
// // // //         answer:
// // // //           "Aquaculture operators commonly evaluate ammonia together with pH, temperature, dissolved oxygen, nitrite, alkalinity and salinity to understand the wider pond environment.",
// // // //       },
// // // //     ],

// // // //     author: {
// // // //       name: "Innovare Biopharma Technical Team",
// // // //       role: "Aquaculture Technical & Product Knowledge Team",
// // // //       bio:
// // // //         "The Innovare Biopharma Technical Team develops educational resources covering shrimp health, aquaculture water quality, nutrition, microbial management and practical pond-management strategies for aquaculture businesses.",
// // // //     },

// // // //     tags: [
// // // //       "Ammonia Control",
// // // //       "Shrimp Farming",
// // // //       "Water Quality",
// // // //       "Aquaculture",
// // // //       "Vannamei Shrimp",
// // // //     ],

// // // //     references: [
// // // //       {
// // // //         title:
// // // //           "FAO aquaculture guidance on ammonia, water quality and shrimp culture.",
// // // //         source: "Food and Agriculture Organization",
// // // //       },
// // // //       {
// // // //         title:
// // // //           "Published aquaculture research on ammonia management and microbial water-quality approaches.",
// // // //         source: "Aquaculture literature",
// // // //       },
// // // //       {
// // // //         title:
// // // //           "Farm-specific decisions should always consider actual pond measurements and local technical guidance.",
// // // //         source: "Technical practice note",
// // // //       },
// // // //     ],
// // // //   },
// // // // ];

// // // // export function getBlogBySlug(slug: string) {
// // // //   return blogs.find((blog) => blog.slug === slug);
// // // // }
// // // export type BlogSection = {
// // //   id: string;
// // //   heading: string;
// // //   paragraphs: string[];
// // //   image?: string;
// // //   imageAlt?: string;
// // // };

// // // export type BlogFAQ = {
// // //   question: string;
// // //   answer: string;
// // // };

// // // export type BlogAuthor = {
// // //   name: string;
// // //   role: string;
// // //   bio: string;
// // // };

// // // export type BlogReference = {
// // //   title: string;
// // //   source?: string;
// // // };

// // // export type BlogPost = {
// // //   id: number;
// // //   slug: string;

// // //   title: string;
// // //   metaTitle: string;
// // //   description: string;

// // //   category: string;

// // //   date: string;
// // //   dateISO: string;

// // //   modifiedDate?: string;
// // //   modifiedISO?: string;

// // //   readTime: string;

// // //   image: string;

// // //   featured?: boolean;

// // //   introduction: string[];

// // //   sections: BlogSection[];

// // //   faq: BlogFAQ[];

// // //   author: BlogAuthor;

// // //   tags: string[];

// // //   references: BlogReference[];
// // // };

// // // export const blogs: BlogPost[] = [
// // //   {
// // //     id: 1,

// // //     slug: "ammonia-control-shrimp-pond",

// // //     title: "How to Reduce Ammonia Levels in Shrimp Ponds",

// // //     metaTitle:
// // //       "How to Reduce Ammonia in Shrimp Ponds | Innovare Biopharma",

// // //     description:
// // //       "Evidence-informed guidance on ammonia formation, shrimp pond water-quality monitoring and practical ammonia management for commercial shrimp farming.",

// // //     category: "Water Quality",

// // //     date: "10 August 2026",

// // //     dateISO: "2026-08-10",

// // //     modifiedDate: "10 August 2026",

// // //     modifiedISO: "2026-08-10",

// // //     readTime: "9 min read",

// // //     // HERO BACKGROUND IMAGE
// // //     image: "/images/blog/ammonia-control.webp",

// // //     featured: true,

// // //     introduction: [
// // //       "Maintaining stable shrimp pond water quality is fundamental to successful aquaculture production. Among the nitrogen compounds that require close attention, ammonia is particularly important because its more toxic un-ionized form can negatively affect shrimp under unsuitable pond conditions.",

// // //       "Effective ammonia control in shrimp ponds should not depend on one corrective treatment alone. A stronger approach combines water-quality monitoring, responsible feeding, adequate aeration, pond-bottom management, organic-load control and appropriate biological management.",
// // //     ],

// // //     sections: [
// // //       {
// // //         id: "what-is-ammonia",

// // //         heading: "What Is Ammonia in a Shrimp Pond?",

// // //         paragraphs: [
// // //           "Ammonia in aquaculture water exists mainly in two forms: ionized ammonium (NH₄⁺) and un-ionized ammonia (NH₃). Together, these forms contribute to Total Ammonia Nitrogen, commonly referred to as TAN.",

// // //           "The distinction is important because un-ionized NH₃ is considerably more toxic to aquatic animals than the ionized ammonium form.",

// // //           "For this reason, an ammonia reading should not be interpreted independently. Pond pH and temperature influence the balance between NH₄⁺ and NH₃ and should be evaluated alongside ammonia results.",
// // //         ],
// // //       },

// // //       {
// // //         id: "causes-ammonia",

// // //         heading: "What Causes High Ammonia in Shrimp Ponds?",

// // //         paragraphs: [
// // //           "Ammonia is produced naturally through shrimp metabolism and through the microbial decomposition of nitrogen-containing organic matter in the culture environment.",

// // //           "Uneaten feed, faecal material, dead plankton and accumulated organic residues can contribute to the nitrogen load of the pond.",

// // //           "As shrimp biomass increases during the production cycle, feed input and waste production may also increase. If ammonia production exceeds the biological capacity of the pond to transform nitrogen efficiently, ammonia can accumulate.",
// // //         ],
// // //       },

// // //       {
// // //         id: "ammonia-risks",

// // //         heading: "How Can High Ammonia Affect Shrimp?",

// // //         image: "/images/blog/shrimp-health.webp",

// // //         imageAlt:
// // //           "Healthy shrimp illustrating aquaculture water-quality management",

// // //         paragraphs: [
// // //           "Exposure to unsuitable ammonia concentrations can create physiological stress and may negatively influence shrimp performance.",

// // //           "Potential effects can include changes in feeding behaviour, impaired growth and greater sensitivity to additional environmental challenges.",

// // //           "The actual impact depends on ammonia concentration, duration of exposure, shrimp species, life stage and surrounding water conditions.",
// // //         ],
// // //       },

// // //       {
// // //         id: "ph-temperature",

// // //         heading: "Why pH and Temperature Matter for Ammonia Toxicity",

// // //         paragraphs: [
// // //           "The relationship between ammonia, pH and temperature is one of the most important concepts in shrimp pond ammonia management.",

// // //           "As pH increases, a greater proportion of Total Ammonia Nitrogen can occur as un-ionized NH₃. Temperature also influences this chemical balance.",

// // //           "The same TAN measurement may therefore represent different levels of concern under different pond conditions. TAN, pH and temperature should be interpreted together.",
// // //         ],
// // //       },

// // //       {
// // //         id: "monitoring",

// // //         heading: "What Water-Quality Parameters Should Be Monitored?",

// // //         paragraphs: [
// // //           "Ammonia should be evaluated as part of a broader shrimp pond water-quality monitoring program.",

// // //           "Important parameters commonly considered alongside ammonia include pH, temperature, dissolved oxygen, nitrite, alkalinity and salinity.",

// // //           "Maintaining consistent records can help farm managers identify trends and respond to changing pond conditions before they significantly affect shrimp production.",
// // //         ],
// // //       },

// // //       {
// // //         id: "management",

// // //         heading: "How to Manage Ammonia in Shrimp Farming",

// // //         paragraphs: [
// // //           "Effective ammonia management begins with prevention. Feeding practices should be adjusted according to shrimp biomass, appetite, culture stage and actual feed consumption.",

// // //           "Adequate dissolved oxygen is important for shrimp and for biological processes involved in maintaining pond stability. Aeration requirements may increase as biomass and feed input rise.",

// // //           "Pond-bottom management is also important because accumulated sludge and organic matter can contribute to deteriorating water and sediment conditions.",

// // //           "Corrective actions should be selected according to actual water-quality measurements and farm conditions rather than applying the same treatment to every pond.",
// // //         ],
// // //       },

// // //       {
// // //         id: "microbial-management",

// // //         heading:
// // //           "Role of Beneficial Microorganisms in Water-Quality Management",

// // //         image: "/images/blog/biological-water-management.webp",

// // //         imageAlt:
// // //           "Scientific illustration representing beneficial microorganisms in aquaculture",

// // //         paragraphs: [
// // //           "Microbial management is commonly incorporated into modern aquaculture water-quality programs. Selected beneficial microorganisms may support organic-matter degradation and nutrient transformation when environmental conditions are suitable.",

// // //           "Their performance can depend on microbial strains, product quality, oxygen availability, organic load, pond conditions and application practices.",

// // //           "Microbial products should complement good feeding practices, aeration, pond management and routine monitoring rather than replacing these management fundamentals.",
// // //         ],
// // //       },

// // //       {
// // //         id: "preventive-strategy",

// // //         heading: "Building a Preventive Ammonia Management Strategy",

// // //         image: "/images/blog/preventive-water-management.webp",

// // //         imageAlt:
// // //           "Commercial shrimp pond illustrating preventive aquaculture water-quality management",

// // //         paragraphs: [
// // //           "A stronger long-term strategy focuses on managing the conditions that allow ammonia to accumulate instead of relying only on corrective action after ammonia has already increased.",

// // //           "A prevention-first program combines regular measurement, trend analysis, feed management, adequate aeration, organic-load control, biological management and timely intervention.",

// // //           "For commercial aquaculture businesses, maintaining reliable records and making farm-specific decisions can support more stable culture conditions throughout the production cycle.",
// // //         ],
// // //       },
// // //     ],

// // //     faq: [
// // //       {
// // //         question: "What causes ammonia to increase in shrimp ponds?",

// // //         answer:
// // //           "Ammonia can increase because of shrimp metabolic waste and the decomposition of uneaten feed, faecal material, dead plankton and other nitrogen-containing organic matter.",
// // //       },

// // //       {
// // //         question: "Why does pH affect ammonia toxicity?",

// // //         answer:
// // //           "Higher pH can increase the proportion of Total Ammonia Nitrogen present as un-ionized NH₃, which is the more toxic ammonia form for aquatic animals.",
// // //       },

// // //       {
// // //         question: "Does temperature affect ammonia in shrimp ponds?",

// // //         answer:
// // //           "Yes. Temperature influences the balance between ionized ammonium and un-ionized ammonia. Ammonia measurements should therefore be interpreted together with both temperature and pH.",
// // //       },

// // //       {
// // //         question: "Can probiotics help with ammonia management?",

// // //         answer:
// // //           "Selected beneficial microorganisms may support organic-matter degradation and nutrient transformation under suitable conditions. They should form part of an integrated water-quality management strategy rather than replacing aeration, feed management or monitoring.",
// // //       },

// // //       {
// // //         question:
// // //           "Which parameters should be monitored together with ammonia?",

// // //         answer:
// // //           "Aquaculture operators commonly evaluate ammonia together with pH, temperature, dissolved oxygen, nitrite, alkalinity and salinity to understand the wider pond environment.",
// // //       },
// // //     ],

// // //     author: {
// // //       name: "Innovare Biopharma Technical Team",

// // //       role: "Aquaculture Technical & Product Knowledge Team",

// // //       bio:
// // //         "The Innovare Biopharma Technical Team develops educational resources covering shrimp health, aquaculture water quality, nutrition, microbial management and practical pond-management strategies for aquaculture businesses.",
// // //     },

// // //     tags: [
// // //       "Ammonia Control",
// // //       "Shrimp Farming",
// // //       "Water Quality",
// // //       "Aquaculture",
// // //       "Vannamei Shrimp",
// // //     ],

// // //     references: [
// // //       {
// // //         title:
// // //           "Aquaculture guidance covering ammonia, water quality and shrimp culture.",

// // //         source: "Food and Agriculture Organization",
// // //       },

// // //       {
// // //         title:
// // //           "Published aquaculture research relating to ammonia management and microbial water-quality approaches.",

// // //         source: "Aquaculture literature",
// // //       },

// // //       {
// // //         title:
// // //           "Farm-specific decisions should consider actual pond measurements, culture conditions and technical guidance.",

// // //         source: "Technical practice note",
// // //       },
// // //     ],
// // //   },
// // // ];

// // // export function getBlogBySlug(slug: string) {
// // //   return blogs.find((blog) => blog.slug === slug);
// // // }
// // export type BlogSection = {
// //   id: string;
// //   heading: string;
// //   paragraphs: string[];
// //   image?: string;
// //   imageAlt?: string;
// // };

// // export type BlogFAQ = {
// //   question: string;
// //   answer: string;
// // };

// // export type BlogAuthor = {
// //   name: string;
// //   role: string;
// //   bio: string;
// // };

// // export type BlogReference = {
// //   title: string;
// //   source?: string;
// // };

// // export type BlogPost = {
// //   id: number;
// //   slug: string;

// //   title: string;
// //   metaTitle: string;
// //   description: string;

// //   category: string;

// //   date: string;
// //   dateISO: string;

// //   modifiedDate?: string;
// //   modifiedISO?: string;

// //   readTime: string;

// //   image: string;

// //   featured?: boolean;

// //   introduction: string[];

// //   sections: BlogSection[];

// //   faq: BlogFAQ[];

// //   author: BlogAuthor;

// //   tags: string[];

// //   references: BlogReference[];
// // };

// // export const blogs: BlogPost[] = [
// //   {
// //     id: 1,

// //     slug: "ammonia-control-shrimp-pond",

// //     title: "How to Reduce Ammonia Levels in Shrimp Ponds",

// //     metaTitle:
// //       "How to Reduce Ammonia in Shrimp Ponds | Innovare Biopharma",

// //     description:
// //       "Evidence-informed guidance on ammonia formation, water-quality monitoring and practical management for commercial shrimp farming.",

// //     category: "Water Quality",

// //     date: "10 August 2026",
// //     dateISO: "2026-08-10",

// //     modifiedDate: "10 August 2026",
// //     modifiedISO: "2026-08-10",

// //     readTime: "9 min read",

// //     image: "/images/blogone.png",

// //     featured: true,

// //     introduction: [
// //       "Maintaining stable shrimp pond water quality is fundamental to successful aquaculture production. Among the nitrogen compounds that require close attention, ammonia is particularly important because its more toxic un-ionized form can negatively affect shrimp under unsuitable pond conditions.",

// //       "Effective ammonia control in shrimp ponds should not depend on one corrective treatment alone. A stronger approach combines water-quality monitoring, responsible feeding, adequate aeration, pond-bottom management, organic-load control and appropriate biological management.",
// //     ],

// //     sections: [
// //       {
// //         id: "what-is-ammonia",

// //         heading: "What Is Ammonia in a Shrimp Pond?",

// //         paragraphs: [
// //           "Ammonia in aquaculture water exists mainly in two forms: ionized ammonium (NH₄⁺) and un-ionized ammonia (NH₃). Together, these forms contribute to Total Ammonia Nitrogen, commonly referred to as TAN.",

// //           "The distinction is important because un-ionized NH₃ is considerably more toxic to aquatic animals than the ionized ammonium form.",

// //           "For this reason, an ammonia reading should not be interpreted independently. Pond pH and temperature influence the balance between NH₄⁺ and NH₃ and should be evaluated alongside ammonia results.",
// //         ],
// //       },

// //       {
// //         id: "causes-ammonia",

// //         heading: "What Causes High Ammonia in Shrimp Ponds?",

// //         paragraphs: [
// //           "Ammonia is produced naturally through shrimp metabolism and through the microbial decomposition of nitrogen-containing organic matter in the culture environment.",

// //           "Uneaten feed, faecal material, dead plankton and accumulated organic residues can contribute to the nitrogen load of the pond.",

// //           "As shrimp biomass increases during the production cycle, feed input and waste production may also increase. If ammonia production exceeds the biological capacity of the pond to transform nitrogen efficiently, ammonia can accumulate.",
// //         ],
// //       },

// //       {
// //         id: "ammonia-risks",

// //         heading: "How Can High Ammonia Affect Shrimp?",

// //         image: "/images/shrimp.png",

// //         imageAlt:
// //           "Healthy shrimp illustrating effective aquaculture water-quality management",

// //         paragraphs: [
// //           "Exposure to unsuitable ammonia concentrations can create physiological stress and may negatively influence shrimp performance.",

// //           "Potential effects can include changes in feeding behaviour, impaired growth and greater sensitivity to additional environmental challenges.",

// //           "The actual impact depends on ammonia concentration, duration of exposure, shrimp species, life stage and surrounding water conditions.",
// //         ],
// //       },

// //       {
// //         id: "ph-temperature",

// //         heading: "Why pH and Temperature Matter for Ammonia Toxicity",

// //         paragraphs: [
// //           "The relationship between ammonia, pH and temperature is one of the most important concepts in shrimp pond ammonia management.",

// //           "As pH increases, a greater proportion of Total Ammonia Nitrogen can occur as un-ionized NH₃. Temperature also influences this chemical balance.",

// //           "The same TAN measurement may therefore represent different levels of concern under different pond conditions. TAN, pH and temperature should be interpreted together.",
// //         ],
// //       },

// //       {
// //         id: "monitoring",

// //         heading: "What Water-Quality Parameters Should Be Monitored?",

// //         paragraphs: [
// //           "Ammonia should be evaluated as part of a broader shrimp pond water-quality monitoring program.",

// //           "Important parameters commonly considered alongside ammonia include pH, temperature, dissolved oxygen, nitrite, alkalinity and salinity.",

// //           "Maintaining consistent records can help farm managers identify trends and respond to changing pond conditions before they significantly affect shrimp production.",
// //         ],
// //       },

// //       {
// //         id: "management",

// //         heading: "How to Manage Ammonia in Shrimp Farming",

// //         paragraphs: [
// //           "Effective ammonia management begins with prevention. Feeding practices should be adjusted according to shrimp biomass, appetite, culture stage and actual feed consumption.",

// //           "Adequate dissolved oxygen is important for shrimp and for biological processes involved in maintaining pond stability. Aeration requirements may increase as biomass and feed input rise.",

// //           "Pond-bottom management is also important because accumulated sludge and organic matter can contribute to deteriorating water and sediment conditions.",

// //           "Corrective actions should be selected according to actual water-quality measurements and farm conditions rather than applying the same treatment to every pond.",
// //         ],
// //       },

// //       {
// //         id: "microbial-management",

// //         heading:
// //           "Role of Beneficial Microorganisms in Water-Quality Management",

// //         image: "/images/cells.png",

// //         imageAlt:
// //           "Beneficial microorganisms used to illustrate biological aquaculture water-quality management",

// //         paragraphs: [
// //           "Microbial management is commonly incorporated into modern aquaculture water-quality programs. Selected beneficial microorganisms may support organic-matter degradation and nutrient transformation when environmental conditions are suitable.",

// //           "Their performance can depend on microbial strains, product quality, oxygen availability, organic load, pond conditions and application practices.",

// //           "Microbial products should complement good feeding practices, aeration, pond management and routine monitoring rather than replacing these management fundamentals.",
// //         ],
// //       },

// //       {
// //         id: "preventive-strategy",

// //         heading: "Building a Preventive Ammonia Management Strategy",

// //         image: "/images/natiure.png",

// //         imageAlt:
// //           "Commercial shrimp pond illustrating preventive water-quality management",

// //         paragraphs: [
// //           "A stronger long-term strategy focuses on managing the conditions that allow ammonia to accumulate instead of relying only on corrective action after ammonia has already increased.",

// //           "A prevention-first program combines regular measurement, trend analysis, feed management, adequate aeration, organic-load control, biological management and timely intervention.",

// //           "For commercial aquaculture businesses, maintaining reliable records and making farm-specific decisions can support more stable culture conditions throughout the production cycle.",
// //         ],
// //       },
// //     ],

// //     faq: [
// //       {
// //         question: "What causes ammonia to increase in shrimp ponds?",
// //         answer:
// //           "Ammonia can increase because of shrimp metabolic waste and the decomposition of uneaten feed, faecal material, dead plankton and other nitrogen-containing organic matter.",
// //       },

// //       {
// //         question: "Why does pH affect ammonia toxicity?",
// //         answer:
// //           "Higher pH can increase the proportion of Total Ammonia Nitrogen present as un-ionized NH₃, which is the more toxic ammonia form for aquatic animals.",
// //       },

// //       {
// //         question: "Does temperature affect ammonia in shrimp ponds?",
// //         answer:
// //           "Yes. Temperature influences the balance between ionized ammonium and un-ionized ammonia. Ammonia measurements should therefore be interpreted together with both temperature and pH.",
// //       },

// //       {
// //         question: "Can probiotics help with ammonia management?",
// //         answer:
// //           "Selected beneficial microorganisms may support organic-matter degradation and nutrient transformation under suitable conditions. They should form part of an integrated water-quality management strategy rather than replacing aeration, feed management or monitoring.",
// //       },

// //       {
// //         question:
// //           "Which parameters should be monitored together with ammonia?",
// //         answer:
// //           "Aquaculture operators commonly evaluate ammonia together with pH, temperature, dissolved oxygen, nitrite, alkalinity and salinity to understand the wider pond environment.",
// //       },
// //     ],

// //     author: {
// //       name: "Innovare Biopharma Technical Team",
// //       role: "Aquaculture Technical & Product Knowledge Team",
// //       bio:
// //         "The Innovare Biopharma Technical Team develops educational resources covering shrimp health, aquaculture water quality, nutrition, microbial management and practical pond-management strategies for aquaculture businesses.",
// //     },

// //     tags: [
// //       "Ammonia Control",
// //       "Shrimp Farming",
// //       "Water Quality",
// //       "Aquaculture",
// //       "Vannamei Shrimp",
// //     ],

// //     references: [
// //       {
// //         title:
// //           "Aquaculture guidance covering ammonia, water quality and shrimp culture.",
// //         source: "Food and Agriculture Organization",
// //       },
// //       {
// //         title:
// //           "Published research relating to ammonia management and biological water-quality management.",
// //         source: "Aquaculture literature",
// //       },
// //       {
// //         title:
// //           "Farm-specific decisions should consider actual pond measurements and technical guidance.",
// //         source: "Technical practice note",
// //       },
// //     ],
// //   },
// // ];

// // export function getBlogBySlug(slug: string) {
// //   return blogs.find((blog) => blog.slug === slug);
// // }
// export type BlogSection = {
//   id: string;
//   heading: string;
//   paragraphs: string[];
//   bullets?: string[];
//   image?: string;
//   imageAlt?: string;
//   caption?: string;
//   type?:
//     | "standard"
//     | "chemistry"
//     | "pathway"
//     | "shrimp-health"
//     | "relationship"
//     | "monitoring"
//     | "management"
//     | "microbial"
//     | "prevention"
//     | "mistakes";
// };

// export type BlogFAQ = {
//   question: string;
//   answer: string;
// };

// export type BlogAuthor = {
//   name: string;
//   role: string;
//   bio: string;
//   logo: string;
// };

// export type BlogReference = {
//   label: string;
//   note: string;
// };

// export type BlogPost = {
//   id: number;
//   slug: string;

//   title: string;
//   metaTitle: string;
//   description: string;
//   ogTitle: string;
//   ogDescription: string;

//   category: string;
//   language: string;

//   date: string;
//   dateISO: string;

//   modifiedDate: string;
//   modifiedISO: string;

//   readTime: string;
//   image: string;
//   imageAlt: string;

//   featured?: boolean;

//   introduction: string[];

//   keyTakeaways: string[];

//   sections: BlogSection[];

//   faq: BlogFAQ[];

//   author: BlogAuthor;

//   tags: string[];

//   references: BlogReference[];
// };

// export const blogs: BlogPost[] = [
//   {
//     id: 1,

//     slug: "ammonia-control-shrimp-pond",

//     title: "How to Reduce Ammonia Levels in Shrimp Ponds",

//     metaTitle:
//       "How to Reduce Ammonia in Shrimp Ponds | Innovare",

//     description:
//       "Learn what causes ammonia in shrimp ponds, how pH and temperature affect ammonia risk, and practical ways to monitor, prevent and manage pond ammonia.",

//     ogTitle:
//       "How to Reduce Ammonia Levels in Shrimp Ponds",

//     ogDescription:
//       "A practical guide to ammonia formation, pond monitoring and prevention-first water-quality management in shrimp farming.",

//     category: "Water Quality",

//     language: "en",

//     date: "12 August 2026",
//     dateISO: "2026-08-12",

//     modifiedDate: "12 August 2026",
//     modifiedISO: "2026-08-12",

//     readTime: "10 min read",

//     image: "/images/blog/ammonia-control.webp",

//     imageAlt:
//       "Commercial shrimp aquaculture pond operating multiple paddle-wheel aerators",

//     featured: true,

//     introduction: [
//       "Ammonia is a normal part of the nitrogen cycle in shrimp ponds, but accumulation can become a serious water-quality concern when production, organic loading and pond conditions move out of balance.",

//       "For commercial shrimp farms, effective ammonia management is less about reacting to one test result and more about understanding how feeding, organic matter, dissolved oxygen, pH, temperature and biological processes interact throughout the production cycle.",
//     ],

//     keyTakeaways: [
//       "Ammonia occurs mainly as ionized ammonium (NH₄⁺) and un-ionized ammonia (NH₃).",
//       "The proportion of the more toxic NH₃ form is influenced strongly by pH and temperature.",
//       "Uneaten feed, shrimp waste, dead plankton and other organic matter can contribute to ammonia loading.",
//       "Consistent monitoring, sensible feeding, aeration and pond-bottom management form the foundation of ammonia control.",
//     ],

//     sections: [
//       {
//         id: "what-is-ammonia",
//         heading: "What Is Ammonia in a Shrimp Pond?",
//         type: "chemistry",

//         paragraphs: [
//           "In aquaculture water, ammonia exists mainly as ionized ammonium (NH₄⁺) and un-ionized ammonia (NH₃). Together, these forms are commonly considered when evaluating Total Ammonia Nitrogen, or TAN.",

//           "The distinction matters because un-ionized NH₃ is the more toxic form for aquatic animals. A TAN value therefore needs context rather than being interpreted as an isolated number.",

//           "Pond pH and temperature influence the chemical balance between NH₄⁺ and NH₃. This is why ammonia monitoring should be evaluated together with the surrounding pond conditions.",
//         ],
//       },

//       {
//         id: "causes-ammonia",
//         heading: "What Causes High Ammonia in Shrimp Ponds?",
//         type: "pathway",

//         paragraphs: [
//           "Ammonia enters the pond nitrogen cycle through both shrimp metabolism and the decomposition of nitrogen-containing organic matter.",

//           "As biomass and feeding increase, so can the amount of waste entering the culture environment. When organic loading exceeds the pond's capacity to process it efficiently, ammonia can begin to accumulate.",
//         ],

//         bullets: [
//           "Uneaten or poorly utilised feed",
//           "Shrimp metabolic waste",
//           "Faecal material",
//           "Dead plankton and algae",
//           "Organic sludge accumulating on the pond bottom",
//         ],
//       },

//       {
//         id: "effects-on-shrimp",
//         heading: "How Can High Ammonia Affect Shrimp?",
//         type: "shrimp-health",

//         image: "/images/blog/shrimp-health.webp",

//         imageAlt:
//           "Healthy shrimp held for visual inspection during aquaculture production",

//         caption:
//           "Regular observation of shrimp behaviour and pond conditions should complement routine water-quality measurements.",

//         paragraphs: [
//           "Unsuitable ammonia conditions can create physiological stress and may negatively affect shrimp performance.",

//           "Depending on concentration, exposure duration, life stage and environmental conditions, ammonia stress may be associated with reduced feeding activity, impaired growth and greater sensitivity to other culture challenges.",

//           "Commercial farms should therefore treat ammonia as part of the overall pond environment rather than focusing on a single parameter in isolation.",
//         ],
//       },

//       {
//         id: "ph-temperature",
//         heading: "Why pH and Temperature Matter",
//         type: "relationship",

//         paragraphs: [
//           "The balance between NH₄⁺ and NH₃ changes with water chemistry. As pH increases, a larger proportion of total ammonia can occur as un-ionized NH₃.",

//           "Temperature also influences this equilibrium. This means two ponds with the same TAN reading may not represent the same ammonia risk if their pH and temperature differ.",

//           "For practical interpretation, TAN, pH and temperature should be reviewed together.",
//         ],
//       },

//       {
//         id: "monitoring",
//         heading: "What Water-Quality Parameters Should Be Monitored?",
//         type: "monitoring",

//         paragraphs: [
//           "Ammonia monitoring is most useful when it sits inside a broader water-quality program. Trends across several parameters provide far more information than one isolated reading.",

//           "Farm teams should maintain consistent records and compare results with feeding, biomass, weather, aeration and observable pond conditions.",
//         ],

//         bullets: [
//           "Total Ammonia Nitrogen / ammonia",
//           "pH",
//           "Water temperature",
//           "Dissolved oxygen",
//           "Nitrite",
//           "Alkalinity",
//           "Salinity",
//         ],
//       },

//       {
//         id: "management",
//         heading: "How to Manage Ammonia in Shrimp Farming",
//         type: "management",

//         paragraphs: [
//           "Effective ammonia control begins with reducing avoidable organic loading and maintaining pond conditions that support biological processing.",

//           "Feeding should reflect actual shrimp appetite, biomass and culture stage. Excess feed does not simply increase cost; it can also add unnecessary organic material to the pond.",

//           "Adequate aeration supports shrimp while also helping maintain conditions required by important biological processes. Pond-bottom management becomes increasingly important as the culture cycle progresses.",
//         ],
//       },

//       {
//         id: "common-mistakes",
//         heading: "Common Ammonia-Management Mistakes",
//         type: "mistakes",

//         paragraphs: [
//           "Ammonia problems are often made harder to manage when farms react to a single reading without considering the wider pond environment.",
//         ],

//         bullets: [
//           "Interpreting TAN without checking pH and temperature",
//           "Increasing treatments while continuing excessive feeding",
//           "Ignoring sludge and pond-bottom organic accumulation",
//           "Waiting for visible shrimp stress before increasing monitoring",
//           "Making large management changes without measuring the response",
//         ],
//       },

//       {
//         id: "microbial-management",
//         heading:
//           "Role of Beneficial Microorganisms in Water-Quality Management",
//         type: "microbial",

//         image:
//           "/images/blog/biological-water-management.webp",

//         imageAlt:
//           "Scientific visualisation of beneficial microorganisms relevant to aquaculture water-quality management",

//         paragraphs: [
//           "Microbial management is commonly included in modern aquaculture water-quality programs because microorganisms play important roles in organic-matter decomposition and nutrient transformation.",

//           "The effectiveness of biological products can depend on the microorganisms used, product quality, oxygen availability, organic loading and overall pond conditions.",

//           "These products should therefore complement sound feeding, aeration and pond-management practices rather than replace them.",
//         ],
//       },

//       {
//         id: "preventive-strategy",
//         heading: "Build a Prevention-First Ammonia Strategy",
//         type: "prevention",

//         image:
//           "/images/blog/preventive-water-management.webp",

//         imageAlt:
//           "Shrimp aquaculture pond with active aeration during preventive water-quality management",

//         paragraphs: [
//           "The most reliable approach to ammonia management is to control the conditions that allow it to accumulate before a major corrective response becomes necessary.",

//           "A prevention-first system connects monitoring, trend analysis, feeding decisions, aeration, organic-load management and follow-up measurements into one repeatable management process.",
//         ],
//       },
//     ],

//     faq: [
//       {
//         question:
//           "What causes ammonia to rise in shrimp ponds?",
//         answer:
//           "Ammonia can rise through shrimp metabolic waste and the decomposition of uneaten feed, faeces, dead plankton and other nitrogen-containing organic matter.",
//       },

//       {
//         question:
//           "Why does pH affect ammonia toxicity?",
//         answer:
//           "As pH increases, a greater proportion of total ammonia can occur as un-ionized NH₃, the more toxic ammonia form for aquatic animals.",
//       },

//       {
//         question:
//           "Does water temperature affect ammonia risk?",
//         answer:
//           "Yes. Temperature influences the equilibrium between ammonium and un-ionized ammonia, so TAN should be interpreted together with pH and temperature.",
//       },

//       {
//         question:
//           "Can beneficial microorganisms help manage pond water quality?",
//         answer:
//           "Selected beneficial microorganisms may support organic-matter degradation and nutrient transformation under suitable conditions, but they should complement good feeding, aeration and pond-management practices.",
//       },

//       {
//         question:
//           "What should be monitored alongside ammonia?",
//         answer:
//           "Useful supporting parameters include pH, temperature, dissolved oxygen, nitrite, alkalinity and salinity, together with feeding, biomass and observable pond conditions.",
//       },
//     ],

//     author: {
//       name: "Innovare Biopharma Technical Team",

//       role: "Aquaculture Technical & Product Knowledge",

//       bio:
//         "The Innovare Biopharma Technical Team develops educational resources covering aquaculture water quality, shrimp health, nutrition, microbial management and practical pond-management strategies.",

//       logo: "/images/brand/innovare-logo.png",
//     },

//     tags: [
//       "Ammonia Control",
//       "Shrimp Farming",
//       "Water Quality",
//       "Aquaculture",
//       "Vannamei Shrimp",
//     ],

//     references: [
//       {
//         label: "Technical interpretation",
//         note:
//           "Ammonia measurements should be evaluated together with pond pH, temperature and other water-quality conditions.",
//       },
//       {
//         label: "Farm management",
//         note:
//           "Management decisions should consider species, life stage, biomass, stocking conditions and actual pond measurements.",
//       },
//     ],
//   },
//   {
//   slug: "pond-water-quality-parameters-shrimp-farming",
//   title: "Essential Pond Water Parameters for Healthy Shrimp",
//   description:
//     "Understand the ideal ranges for dissolved oxygen, pH, alkalinity, salinity and temperature—and learn how regular monitoring supports healthier shrimp.",
//   category: "Water Quality",
//   date: "2026-08-12",
//   image: "/images/blog/pond-water-quality-monitoring.jpg",
//   imageAlt:
//     "Aquaculture professional testing pond water quality at a shrimp farm",
//   author: {
//     name: "Innovare Biopharma",
//   },
// },
// ];

// // export function getBlogBySlug(slug: string) {
// //   return blogs.find((blog) => blog.slug === slug);
// // }
// export function getBlogBySlug(slug: string) {
//   return blogs.find((blog) => blog.slug === slug);
// }
// export type Blog = {
//   slug: string;
//   title: string;
//   description: string;
//   category: string;
//   date: string;
//   image: string;
//   imageAlt: string;
//   author: {
//     name: string;
//   };
// };

// export const blogs: Blog[] = [
//   {
//     slug: "reduce-ammonia-levels-shrimp-ponds",
//     title: "How to Reduce Ammonia Levels in Shrimp Ponds",
//     description:
//       "Learn what causes ammonia in shrimp ponds, how pH and temperature affect ammonia risk, and practical ways to maintain safer pond conditions.",
//     category: "Water Quality",
//     date: "2026-08-12",
//     image:
//       "/images/shrimph_pond.jpeg",
//     imageAlt:
//       "Fish swimming in clean water representing aquaculture water quality",
//     author: {
//       name: "Innovare Biopharma",
//     },
//   },
//   {
//     slug: "pond-water-quality-parameters-shrimp-farming",
//     title: "Essential Pond Water Parameters for Healthy Shrimp",
//     description:
//       "Understand dissolved oxygen, pH, alkalinity, salinity and temperature ranges that support healthier shrimp and stable pond conditions.",
//     category: "Water Quality",
//     date: "2026-08-11",
//     image:
//       "/images/paramters.png",
//     imageAlt:
//       "Clear blue water representing healthy aquaculture pond conditions",
//     author: {
//       name: "Innovare Biopharma",
//     },
//   },
//   {
//     slug: "early-warning-signs-shrimp-stress",
//     title: "7 Early Warning Signs of Stress in Farmed Shrimp",
//     description:
//       "Identify changes in feeding, swimming, colour and pond behaviour that may indicate shrimp stress before it becomes a serious farm problem.",
//     category: "Shrimp Health",
//     date: "2026-08-10",
//     image:
//       "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=1200&q=85",
//     imageAlt:
//       "Shrimp representing health monitoring in aquaculture farming",
//     author: {
//       name: "Innovare Biopharma",
//     },
//   },
//   {
//     slug: "probiotics-sustainable-shrimp-farming",
//     title: "Why Probiotics Matter in Sustainable Shrimp Farming",
//     description:
//       "Discover how carefully selected probiotics can support pond stability, digestion, nutrient utilisation and responsible shrimp production.",
//     category: "Probiotics",
//     date: "2026-08-09",
//     image:
//       "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1200&q=85",
//     imageAlt:
//       "Healthy underwater ecosystem representing sustainable aquaculture",
//     author: {
//       name: "Innovare Biopharma",
//     },
//   },
//   {
//     slug: "improve-shrimp-feed-efficiency",
//     title: "Practical Ways to Improve Shrimp Feed Efficiency",
//     description:
//       "Learn how feed quality, feeding schedules, pond observation and water conditions influence consumption, growth and farm performance.",
//     category: "Nutrition",
//     date: "2026-08-08",
//     image:
//       "https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1200&q=85",
//     imageAlt:
//       "Underwater marine life representing shrimp nutrition and growth",
//     author: {
//       name: "Innovare Biopharma",
//     },
//   },
//   {
//     slug: "prepare-shrimp-pond-before-stocking",
//     title: "How to Prepare a Shrimp Pond Before Stocking",
//     description:
//       "Follow the essential steps for pond drying, soil preparation, water treatment and plankton development before introducing shrimp seed.",
//     category: "Pond Management",
//     date: "2026-08-07",
//     image:
//       "https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&w=1200&q=85",
//     imageAlt:
//       "Aquaculture pond surrounded by natural vegetation",
//     author: {
//       name: "Innovare Biopharma",
//     },
//   },
// ];


// export function getBlogBySlug(slug: string) {
//   return blogs.find((blog) => blog.slug === slug);
// }
export type BlogSectionType =
  | "chemistry"
  | "pathway"
  | "relationship"
  | "monitoring"
  | "management"
  | "mistakes"
  | "image";

export type BlogSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  type?: BlogSectionType;
  image?: string;
  imageAlt?: string;
  caption?: string;
};

export type BlogFAQ = {
  question: string;
  answer: string;
};

export type BlogReference = {
  label: string;
  note: string;
};

export type BlogAuthor = {
  name: string;
  role?: string;
  bio?: string;
  logo?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  modifiedDate?: string;
  readTime?: string;
  image: string;
  imageAlt: string;
  author: BlogAuthor;
  introduction?: string[];
  keyTakeaways?: string[];
  sections?: BlogSection[];
  faq?: BlogFAQ[];
  references?: BlogReference[];
  tags?: string[];
  metaTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  dateISO?: string;
  modifiedISO?: string;
  language?: string;
};

// Keeps compatibility with components that still import `Blog`.
export type Blog = BlogPost;

const innovareAuthor: BlogAuthor = {
  name: "Innovare Biopharma Technical Team",
  role: "Aquaculture Technical & Product Knowledge Team",
  bio: "The Innovare Biopharma Technical Team develops practical educational resources covering shrimp health, aquaculture water quality, nutrition, microbial management and responsible pond-management strategies.",
  logo: "/images/logo.png",
};

export const blogs: BlogPost[] = [
  {
    slug: "reduce-ammonia-levels-shrimp-ponds",
    title: "How to Reduce Ammonia Levels in Shrimp Ponds",
    description:
      "Evidence-informed guidance on ammonia formation, water-quality monitoring and practical management for commercial shrimp farming.",
    category: "Water Quality",
    date: "2026-08-12",
    modifiedDate: "2026-08-12",
    readTime: "9 min read",
    image: "/images/shrimph_pond.jpeg",
    imageAlt:
      "Commercial shrimp pond with paddlewheel aerators maintaining water quality",
    author: innovareAuthor,
    introduction: [
      "Maintaining stable shrimp pond water quality is fundamental to successful aquaculture production. Among the nitrogen compounds that require close attention, ammonia is particularly important because its more toxic un-ionized form can negatively affect shrimp under unsuitable pond conditions.",
      "Effective ammonia control in shrimp ponds should not depend on one corrective treatment alone. A stronger approach combines water-quality monitoring, responsible feeding, adequate aeration, pond-bottom management, organic-load control and appropriate biological management.",
    ],
    keyTakeaways: [
      "Ammonia exists mainly as ammonium and un-ionized ammonia in pond water.",
      "Pond pH and temperature influence the proportion of toxic un-ionized ammonia.",
      "Feed waste, shrimp excretion and decomposing organic matter contribute to ammonia accumulation.",
      "Effective control combines monitoring, aeration, feeding management and pond-bottom management.",
    ],
    sections: [
      {
        id: "what-is-ammonia",
        heading: "What Is Ammonia in a Shrimp Pond?",
        type: "chemistry",
        paragraphs: [
          "Ammonia in aquaculture water exists mainly in two forms: ionized ammonium (NH₄⁺) and un-ionized ammonia (NH₃). Together, these forms contribute to Total Ammonia Nitrogen, commonly referred to as TAN.",
          "The distinction is important because un-ionized NH₃ is considerably more toxic to aquatic animals than the ionized ammonium form.",
          "An ammonia result should therefore not be interpreted independently. Pond pH and temperature influence the balance between NH₄⁺ and NH₃ and should be evaluated alongside ammonia results.",
        ],
      },
      {
        id: "causes-of-high-ammonia",
        heading: "What Causes High Ammonia in Shrimp Ponds?",
        type: "pathway",
        paragraphs: [
          "Ammonia is produced naturally through shrimp metabolism and the microbial decomposition of nitrogen-containing organic matter in the culture environment.",
          "Uneaten feed, faecal material, dead plankton and accumulated organic residues can contribute to the nitrogen load of the pond.",
          "As shrimp biomass increases during the production cycle, feed input and waste production may also increase. If ammonia production exceeds the biological capacity of the pond to transform nitrogen efficiently, ammonia can accumulate.",
        ],
      },
      {
        id: "effects-on-shrimp",
        heading: "How Can High Ammonia Affect Shrimp?",
        image: "/images/shrimp.png",
        imageAlt: "Farmed shrimp being inspected for environmental stress",
        caption:
          "Shrimp behaviour and appearance should be monitored together with pond-water measurements.",
        paragraphs: [
          "Exposure to unsuitable ammonia concentrations can create physiological stress and may negatively influence shrimp performance.",
          "Potential effects can include changes in feeding behaviour, impaired growth and greater sensitivity to additional environmental challenges.",
          "The actual impact depends on ammonia concentration, duration of exposure, shrimp species, life stage and surrounding water conditions.",
        ],
      },
      {
        id: "ph-temperature-toxicity",
        heading: "Why pH and Temperature Matter for Ammonia Toxicity",
        type: "relationship",
        paragraphs: [
          "The relationship between ammonia, pH and temperature is one of the most important concepts in shrimp pond ammonia management.",
          "As pH increases, a greater proportion of Total Ammonia Nitrogen can occur as un-ionized NH₃. Temperature also influences this chemical balance.",
          "The same TAN measurement may represent different levels of concern under different pond conditions. Results should be interpreted together with pH and temperature.",
        ],
      },
      {
        id: "water-quality-parameters",
        heading: "What Water-Quality Parameters Should Be Monitored?",
        type: "monitoring",
        paragraphs: [
          "Ammonia should be evaluated as part of a broader shrimp pond water-quality monitoring programme.",
          "Important parameters commonly considered alongside ammonia include pH, temperature, dissolved oxygen, nitrite, alkalinity and salinity.",
          "Consistent monitoring records help farm managers identify trends and respond before changing pond conditions significantly affect production.",
        ],
      },
      {
        id: "manage-ammonia",
        heading: "How to Manage Ammonia in Shrimp Farming",
        type: "management",
        paragraphs: [
          "Effective ammonia management begins with prevention. Feeding practices should be adjusted according to shrimp biomass, appetite, culture stage and actual feed consumption.",
          "Adequate dissolved oxygen is important for shrimp and for biological processes involved in maintaining pond stability. Aeration requirements may increase as biomass and feed input rise.",
          "Pond-bottom management is important because accumulated sludge and organic matter can contribute to deteriorating water and sediment conditions.",
          "Corrective actions should be selected according to actual water-quality measurements and farm conditions rather than applying the same treatment to every pond.",
        ],
        bullets: [
          "Measure ammonia, pH, temperature and dissolved oxygen consistently.",
          "Review feeding rates and actual feed consumption.",
          "Maintain sufficient aeration for the pond biomass.",
          "Monitor sludge and accumulated organic matter.",
          "Record management actions and evaluate the pond response.",
        ],
      },
      {
        id: "beneficial-microorganisms",
        heading:
          "Role of Beneficial Microorganisms in Water-Quality Management",
        image: "/images/beneficial.png",
        imageAlt:
          "Beneficial microorganisms used in aquaculture water-quality management",
        paragraphs: [
          "Microbial management is commonly incorporated into modern aquaculture water-quality programmes.",
          "Selected beneficial microorganisms may support organic-matter degradation and nutrient transformation when environmental conditions are suitable.",
          "Performance can depend on microbial strains, product quality, oxygen availability, organic load, pond conditions and application practices.",
          "Microbial products should complement good feeding practices, aeration, pond management and routine monitoring rather than replacing these fundamentals.",
        ],
      },
      {
        id: "preventive-strategy",
        heading: "Building a Preventive Ammonia Management Strategy",
        image: "/images/Preventive.png",
        imageAlt: "Well-managed shrimp pond using paddlewheel aerators",
        paragraphs: [
          "A stronger long-term strategy focuses on managing the conditions that allow ammonia to accumulate instead of relying only on corrective action after ammonia has increased.",
          "A prevention-first programme combines regular measurement, trend analysis, feed management, adequate aeration, organic-load control, biological management and timely intervention.",
          "Reliable records and farm-specific decisions can support more stable culture conditions throughout the production cycle.",
        ],
      },
    ],
    faq: [
      {
        question: "What causes ammonia to increase in shrimp ponds?",
        answer:
          "Common contributors include uneaten feed, shrimp waste, decomposing plankton, accumulated organic matter, increasing biomass and insufficient biological conversion of nitrogen compounds.",
      },
      {
        question: "Why does pH affect ammonia toxicity?",
        answer:
          "As pond pH increases, a greater proportion of Total Ammonia Nitrogen may occur as un-ionized ammonia, which is the more toxic form.",
      },
      {
        question: "Does temperature affect ammonia in shrimp ponds?",
        answer:
          "Yes. Temperature influences the balance between ionized ammonium and un-ionized ammonia, so it should be considered when interpreting results.",
      },
      {
        question: "Can probiotics help with ammonia management?",
        answer:
          "Selected beneficial microorganisms may support organic-matter degradation and nutrient transformation, but they should complement feeding, aeration and pond-bottom management.",
      },
      {
        question: "Which parameters should be monitored with ammonia?",
        answer:
          "Pond pH, temperature, dissolved oxygen, nitrite, alkalinity and salinity are commonly considered alongside ammonia results.",
      },
    ],
    references: [
      {
        label: "Water-quality principles",
        note: "Standard aquaculture guidance relating to ammonia chemistry, pond monitoring and nitrogen management.",
      },
      {
        label: "Industry practice",
        note: "Commercial shrimp-farming practices relating to feeding, aeration, pond-bottom management and production monitoring.",
      },
      {
        label: "Technical review",
        note: "Educational content that should be adapted to farm-specific measurements and professional guidance.",
      },
    ],
    tags: [
      "Ammonia Control",
      "Shrimp Farming",
      "Water Quality",
      "Aquaculture",
      "Vannamei Shrimp",
    ],
  },
  // {
  //   slug: "pond-water-quality-parameters-shrimp-farming",
  //   title: "Essential Pond Water Parameters for Healthy Shrimp",
  //   description:
  //     "Understand dissolved oxygen, pH, alkalinity, salinity and temperature ranges that support healthier shrimp and stable pond conditions.",
  //   category: "Water Quality",
  //   date: "2026-08-11",
  //   image: "/images/paramters.png",
  //   imageAlt: "Aquaculture water-quality parameters for shrimp ponds",
  //   author: innovareAuthor,
  // },
  {
  slug: "pond-water-quality-parameters-shrimp-farming",
  title: "Essential Pond Water Parameters for Healthy Shrimp",
  description:
    "Learn how dissolved oxygen, pH, temperature, salinity, alkalinity, ammonia and other water-quality parameters work together in commercial shrimp ponds.",
  category: "Water Quality",
  date: "2026-08-13",
  modifiedDate: "2026-08-13",
  readTime: "10 min read",
  image: "/images/paramters.png",
  imageAlt:
    "Aquaculture technician testing water-quality parameters in a commercial shrimp pond",
  author: innovareAuthor,

  introduction: [
    "Water quality is the environment in which shrimp feed, breathe, grow and respond to stress. A pond may appear normal at the surface while important changes are developing in dissolved oxygen, pH, temperature, salinity, alkalinity or nitrogen compounds.",
    "Successful monitoring therefore depends on more than checking one value. Farmers need consistent measurements, correct sampling times, reliable records and an understanding of how parameters influence one another.",
    "The reference ranges in this article are general management guides. Farm-specific targets should account for shrimp species, life stage, stocking density, salinity, pond design, weather, feeding intensity and advice from a qualified aquaculture professional.",
  ],

  keyTakeaways: [
    "Dissolved oxygen should be checked near dawn because that is commonly when pond oxygen is lowest.",
    "pH should be interpreted as a daily trend; large morning-to-afternoon changes can signal unstable pond biology.",
    "Temperature and salinity changes should be gradual because sudden shifts may stress shrimp.",
    "Ammonia, nitrite and alkalinity must be interpreted together with pH, temperature, oxygen and feeding conditions.",
  ],

  sections: [
    {
      id: "dissolved-oxygen",
      heading: "Dissolved Oxygen: The First Parameter to Protect",
      type: "monitoring",
      paragraphs: [
        "Dissolved oxygen supports shrimp respiration, feed utilisation and the beneficial biological processes that transform organic waste and nitrogen compounds.",
        "Oxygen normally changes throughout the day. Photosynthesis can increase oxygen during daylight, while shrimp, plankton and microorganisms continue consuming oxygen at night. For this reason, the lowest concentration is often observed close to sunrise.",
        "A commonly used management objective is to keep dissolved oxygen near or above 5 mg/L, but the correct response should consider biomass, temperature, feeding rate, weather and pond conditions.",
      ],
      bullets: [
        "Measure before sunrise and again during the afternoon.",
        "Check multiple pond locations and depths when possible.",
        "Increase aeration when biomass, feeding or organic load rises.",
        "Treat reduced feeding or unusual surface behaviour as warning signs.",
      ],
    },
    {
      id: "pond-ph",
      heading: "Pond pH and Daily Stability",
      type: "relationship",
      paragraphs: [
        "pH influences shrimp physiology, pond productivity and the toxicity of compounds such as ammonia. FAO shrimp guidance commonly describes approximately pH 7.5 to 9.0 as suitable, while narrower farm targets may be used according to the culture system.",
        "A single pH result is less informative than the daily pattern. Morning pH is generally lower after overnight respiration, while afternoon pH may rise as photosynthesis removes carbon dioxide.",
        "Large daily swings may indicate excessive plankton activity, limited buffering or unstable pond conditions. Management should focus on the cause of instability rather than reacting to one isolated reading.",
      ],
      bullets: [
        "Measure at consistent morning and afternoon times.",
        "Track the daily difference as well as the absolute value.",
        "Interpret pH together with alkalinity, plankton condition and ammonia.",
      ],
    },
    {
      id: "water-temperature",
      heading: "Water Temperature and Shrimp Metabolism",
      image: "/images/tem.png",
      imageAlt:
        "Digital temperature probe measuring water in a commercial shrimp pond",
      paragraphs: [
        "Temperature influences shrimp metabolism, appetite, oxygen demand, growth and the chemical balance between ammonium and un-ionized ammonia.",
        "Published shrimp-farm guidance often cites approximately 28 to 33°C as a useful reference range, but the appropriate target depends on species, life stage, acclimation and local production conditions.",
        "Warm water holds less dissolved oxygen while biological oxygen demand may increase. Sudden cooling after heavy rain can also change pond mixing and shrimp behaviour.",
      ],
      bullets: [
        "Measure at a consistent depth and location.",
        "Record morning and afternoon temperatures.",
        "Avoid sudden temperature changes during water exchange.",
      ],
    },
    {
      id: "salinity",
      heading: "Salinity and the Importance of Gradual Change",
      image: "/images/sali.png",
      imageAlt:
        "Aquaculture refractometer used to check salinity in shrimp pond water",
      paragraphs: [
        "Vannamei shrimp can be cultured across a broad salinity range when properly acclimated, but rapid salinity change can create osmotic stress even when the final value would normally be tolerated.",
        "Some traditional shrimp-farm guidance lists approximately 15 to 35 ppt as a reference range. Modern Vannamei farms may operate outside this range, so a universal target should not be applied without considering local water chemistry and acclimation.",
        "Rainfall, evaporation, source-water changes and water exchange can shift pond salinity. The rate of change is often as important as the measured value.",
      ],
      bullets: [
        "Measure source water and pond water before exchange.",
        "Check salinity after heavy rainfall or prolonged hot weather.",
        "Make changes gradually and maintain acclimation records.",
      ],
    },
    {
      id: "alkalinity-hardness",
      heading: "Alkalinity, Hardness and Pond Buffering",
      type: "chemistry",
      paragraphs: [
        "Total alkalinity represents the water's capacity to neutralise acids and resist sudden pH change. It supports pH stability and biological processes involved in pond productivity and nitrification.",
        "Hardness describes dissolved calcium and magnesium and is not the same as alkalinity. Both can matter in low-salinity culture, mineral balance and shrimp moulting management.",
        "Required levels vary by production system and source-water chemistry. Results should be reviewed as trends and interpreted alongside pH, salinity and mineral composition before corrective products are selected.",
      ],
      bullets: [
        "Do not treat alkalinity and hardness as identical measurements.",
        "Use laboratory or field-kit results to guide mineral management.",
        "Avoid large, unverified corrective applications.",
      ],
    },
    {
      id: "ammonia-nitrite",
      heading: "Ammonia and Nitrite: Key Nitrogen Risks",
      type: "pathway",
      paragraphs: [
        "Feed, shrimp waste, dead plankton and organic sludge contribute nitrogen to the pond. Microorganisms transform these materials through a cycle that includes ammonia, nitrite and nitrate.",
        "The toxicity of ammonia depends strongly on pH and temperature because these conditions influence the proportion present as un-ionized NH₃. A TAN result should never be interpreted by itself.",
        "Nitrite can interfere with oxygen transport and may become more concerning under low-chloride conditions. The correct response depends on concentration, salinity, chloride, oxygen, feeding and pond biology.",
      ],
      bullets: [
        "Review feeding and organic loading when nitrogen compounds rise.",
        "Interpret TAN with pH and temperature.",
        "Interpret nitrite with salinity or chloride conditions.",
        "Maintain aeration to support biological nitrogen conversion.",
      ],
    },
    {
      id: "transparency-plankton",
      heading: "Transparency, Plankton and Pond Colour",
      image: "/images/Pond Colour.png",
      imageAlt:
        "Secchi disc used to assess transparency and plankton density in a shrimp pond",
      paragraphs: [
        "Transparency provides a practical indication of suspended particles and plankton density. Traditional shrimp guidance commonly references Secchi-disc visibility around 25 to 45 cm, but interpretation depends on pond depth, soil particles, plankton type and culture intensity.",
        "Very dense plankton can produce high afternoon oxygen and pH but also consume substantial oxygen overnight. Sudden colour loss may indicate a plankton crash and increased organic decomposition.",
        "Pond colour should be assessed together with Secchi depth, dissolved oxygen, pH trend and microscopic or laboratory observations when available.",
      ],
    },
    {
      id: "monitoring-plan",
      heading: "Build a Consistent Pond Monitoring Plan",
      type: "management",
      paragraphs: [
        "Useful monitoring is consistent, comparable and connected to management decisions. Measure at the same locations, depths and times whenever possible, and record weather, feeding, aeration and shrimp behaviour alongside numerical results.",
        "Parameters that can change quickly, such as dissolved oxygen, temperature and pH, generally require more frequent checking than slower-changing parameters. Monitoring frequency should increase during high biomass, unstable weather, plankton changes or disease-risk periods.",
        "Meters and test kits should be maintained, calibrated and used according to the manufacturer's instructions. A questionable result should be checked before a major corrective action is taken.",
      ],
      bullets: [
        "Before sunrise: dissolved oxygen, temperature and shrimp behaviour.",
        "Afternoon: dissolved oxygen, temperature and pH.",
        "Routine schedule: salinity, alkalinity, ammonia, nitrite and transparency.",
        "After rain or water exchange: recheck temperature, pH and salinity.",
        "Record every intervention and measure the pond response.",
      ],
    },
  ],

  faq: [
    {
      question: "What is the most important water-quality parameter in a shrimp pond?",
      answer:
        "Dissolved oxygen is often the first parameter to protect because shrimp and beneficial pond processes depend on it. However, water quality must be managed as an interacting system rather than by one value alone.",
    },
    {
      question: "When should dissolved oxygen be measured?",
      answer:
        "Measure near sunrise, when oxygen is commonly lowest, and again during the afternoon. High-density or unstable ponds may require additional night-time checks.",
    },
    {
      question: "What pH is suitable for shrimp ponds?",
      answer:
        "FAO shrimp guidance commonly describes approximately pH 7.5 to 9.0 as suitable. Farm targets should also consider daily fluctuation, alkalinity, plankton condition and ammonia.",
    },
    {
      question: "Which parameters should be checked after heavy rain?",
      answer:
        "Check dissolved oxygen, temperature, pH and salinity first. Also observe pond mixing, shrimp behaviour, water colour and the need for additional aeration.",
    },
    {
      question: "Can one target range be used for every shrimp farm?",
      answer:
        "No. Suitable ranges and action thresholds vary with species, life stage, salinity, stocking density, production system, weather and local water chemistry.",
    },
  ],

  references: [
    {
      label: "FAO Water Quality Management",
      note:
        "Shrimp-production guidance covering pond pH, dissolved oxygen, temperature, transparency and water-quality management.",
    },
    {
      label: "FAO Shrimp Farm Guidelines",
      note:
        "Reference ranges and monitoring guidance for temperature, pH, dissolved oxygen, salinity, alkalinity and nitrogen compounds.",
    },
    {
      label: "Farm-specific interpretation",
      note:
        "Final targets and interventions should be based on reliable measurements, local production conditions and qualified technical guidance.",
    },
  ],

  tags: [
    "Water Quality",
    "Shrimp Farming",
    "Dissolved Oxygen",
    "Pond pH",
    "Salinity",
    "Ammonia",
    "Vannamei Shrimp",
  ],
},
  // {
  //   slug: "early-warning-signs-shrimp-stress",
  //   title: "7 Early Warning Signs of Stress in Farmed Shrimp",
  //   description:
  //     "Identify changes in feeding, swimming, colour and pond behaviour that may indicate shrimp stress before it becomes a serious farm problem.",
  //   category: "Shrimp Health",
  //   date: "2026-08-10",
  //   image:
  //     "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=1200&q=85",
  //   imageAlt: "Shrimp representing health monitoring in aquaculture farming",
  //   author: innovareAuthor,
  // },
  // {
  //   slug: "probiotics-sustainable-shrimp-farming",
  //   title: "Why Probiotics Matter in Sustainable Shrimp Farming",
  //   description:
  //     "Discover how carefully selected probiotics can support pond stability, digestion, nutrient utilisation and responsible shrimp production.",
  //   category: "Probiotics",
  //   date: "2026-08-09",
  //   image:
  //     "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1200&q=85",
  //   imageAlt: "Healthy underwater ecosystem representing sustainable aquaculture",
  //   author: innovareAuthor,
  // },
  // {
  //   slug: "improve-shrimp-feed-efficiency",
  //   title: "Practical Ways to Improve Shrimp Feed Efficiency",
  //   description:
  //     "Learn how feed quality, feeding schedules, pond observation and water conditions influence consumption, growth and farm performance.",
  //   category: "Nutrition",
  //   date: "2026-08-08",
  //   image:
  //     "https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1200&q=85",
  //   imageAlt: "Underwater marine life representing shrimp nutrition and growth",
  //   author: innovareAuthor,
  // },
  // {
  //   slug: "prepare-shrimp-pond-before-stocking",
  //   title: "How to Prepare a Shrimp Pond Before Stocking",
  //   description:
  //     "Follow the essential steps for pond drying, soil preparation, water treatment and plankton development before introducing shrimp seed.",
  //   category: "Pond Management",
  //   date: "2026-08-07",
  //   image:
  //     "https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&w=1200&q=85",
  //   imageAlt: "Aquaculture pond surrounded by natural vegetation",
  //   author: innovareAuthor,
  // },
];

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}