// // // // // // // // // // // // // import Link from "next/link";
// // // // // // // // // // // // // import { notFound } from "next/navigation";
// // // // // // // // // // // // // import { getBlogBySlug } from "@/data/blogs";

// // // // // // // // // // // // // // const blogPosts = [
// // // // // // // // // // // // // //   {
// // // // // // // // // // // // // //     slug: "ammonia-control-shrimp-pond",
// // // // // // // // // // // // // //     title: "How to Reduce Ammonia Levels in Shrimp Ponds",
// // // // // // // // // // // // // //     category: "Water Quality",
// // // // // // // // // // // // // //     date: "August 8, 2026",
// // // // // // // // // // // // // //     readTime: "8 min read",
// // // // // // // // // // // // // //     description:
// // // // // // // // // // // // // //       "Learn the causes, risks and practical management strategies for ammonia in shrimp farming.",
// // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // ];

// // // // // // // // // // // // // export default async function BlogPostPage({
// // // // // // // // // // // // //   params,
// // // // // // // // // // // // // }: {
// // // // // // // // // // // // //   params: Promise<{ slug: string }>;
// // // // // // // // // // // // // }) {
// // // // // // // // // // // // //   const { slug } = await params;

// // // // // // // // // // // // //   const post = getBlogBySlug(slug);

// // // // // // // // // // // // //   if (!post) {
// // // // // // // // // // // // //     notFound();
// // // // // // // // // // // // //   }

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <main>
// // // // // // // // // // // // //       {/* your existing blog content */}
// // // // // // // // // // // // //     </main>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }


// // // // // // // // // // // // // // export default async function BlogPostPage({
// // // // // // // // // // // // // //   params,
// // // // // // // // // // // // // // }: {
// // // // // // // // // // // // // //   params: Promise<{ slug: string }>;
// // // // // // // // // // // // // // }) {
// // // // // // // // // // // // // //   const { slug } = await params;

// // // // // // // // // // // // // //   const post = blogPosts.find((blog) => blog.slug === slug);

// // // // // // // // // // // // // //   if (!post) {
// // // // // // // // // // // // // //     notFound();
// // // // // // // // // // // // // //   }

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <main className="bg-white">

// // // // // // // // // // // // // //       {/* ================= ARTICLE HERO ================= */}

// // // // // // // // // // // // // //       <section className="bg-[#052f5f] py-20 text-white">
// // // // // // // // // // // // // //         <div className="mx-auto max-w-5xl px-6">

// // // // // // // // // // // // // //           <Link
// // // // // // // // // // // // // //             href="/blog"
// // // // // // // // // // // // // //             className="text-sm text-blue-200 transition hover:text-white"
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             ← Back to Insights
// // // // // // // // // // // // // //           </Link>

// // // // // // // // // // // // // //           <div className="mt-8">

// // // // // // // // // // // // // //             <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-100">
// // // // // // // // // // // // // //               {post.category}
// // // // // // // // // // // // // //             </span>

// // // // // // // // // // // // // //             <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
// // // // // // // // // // // // // //               {post.title}
// // // // // // // // // // // // // //             </h1>

// // // // // // // // // // // // // //             <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
// // // // // // // // // // // // // //               {post.description}
// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //             <div className="mt-6 flex flex-wrap gap-3 text-sm text-blue-200">
// // // // // // // // // // // // // //               <span>{post.date}</span>
// // // // // // // // // // // // // //               <span>•</span>
// // // // // // // // // // // // // //               <span>{post.readTime}</span>
// // // // // // // // // // // // // //               <span>•</span>
// // // // // // // // // // // // // //               <span>Innovare Biopharma</span>
// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </section>


// // // // // // // // // // // // // //       {/* ================= ARTICLE ================= */}

// // // // // // // // // // // // // //       <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[280px_1fr]">

// // // // // // // // // // // // // //         {/* TABLE OF CONTENTS */}

// // // // // // // // // // // // // //         <aside className="hidden lg:block">

// // // // // // // // // // // // // //           <div className="sticky top-28 rounded-xl border border-gray-200 bg-gray-50 p-6">

// // // // // // // // // // // // // //             <h2 className="mb-5 font-bold text-gray-900">
// // // // // // // // // // // // // //               Table of Contents
// // // // // // // // // // // // // //             </h2>

// // // // // // // // // // // // // //             <nav className="space-y-3 text-sm text-gray-600">

// // // // // // // // // // // // // //               <a
// // // // // // // // // // // // // //                 href="#what-is-ammonia"
// // // // // // // // // // // // // //                 className="block hover:text-blue-700"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 What is ammonia?
// // // // // // // // // // // // // //               </a>

// // // // // // // // // // // // // //               <a
// // // // // // // // // // // // // //                 href="#causes"
// // // // // // // // // // // // // //                 className="block hover:text-blue-700"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 Causes of high ammonia
// // // // // // // // // // // // // //               </a>

// // // // // // // // // // // // // //               <a
// // // // // // // // // // // // // //                 href="#risks"
// // // // // // // // // // // // // //                 className="block hover:text-blue-700"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 Why ammonia is dangerous
// // // // // // // // // // // // // //               </a>

// // // // // // // // // // // // // //               <a
// // // // // // // // // // // // // //                 href="#ph-temperature"
// // // // // // // // // // // // // //                 className="block hover:text-blue-700"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 pH and temperature
// // // // // // // // // // // // // //               </a>

// // // // // // // // // // // // // //               <a
// // // // // // // // // // // // // //                 href="#management"
// // // // // // // // // // // // // //                 className="block hover:text-blue-700"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 Ammonia management
// // // // // // // // // // // // // //               </a>

// // // // // // // // // // // // // //               <a
// // // // // // // // // // // // // //                 href="#solutions"
// // // // // // // // // // // // // //                 className="block hover:text-blue-700"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 Water-quality solutions
// // // // // // // // // // // // // //               </a>

// // // // // // // // // // // // // //               <a
// // // // // // // // // // // // // //                 href="#faq"
// // // // // // // // // // // // // //                 className="block hover:text-blue-700"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 FAQs
// // // // // // // // // // // // // //               </a>

// // // // // // // // // // // // // //             </nav>

// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //         </aside>


// // // // // // // // // // // // // //         {/* ARTICLE CONTENT */}

// // // // // // // // // // // // // //         <article className="max-w-3xl">

// // // // // // // // // // // // // //           <p className="text-lg leading-8 text-gray-700">
// // // // // // // // // // // // // //             Maintaining stable water quality is one of the most important
// // // // // // // // // // // // // //             requirements for successful shrimp farming. Among the different
// // // // // // // // // // // // // //             water-quality challenges faced by aquaculture businesses,
// // // // // // // // // // // // // //             ammonia accumulation deserves particular attention.
// // // // // // // // // // // // // //           </p>


// // // // // // // // // // // // // //           <section id="what-is-ammonia" className="scroll-mt-28">

// // // // // // // // // // // // // //             <h2 className="mt-12 text-3xl font-bold text-gray-900">
// // // // // // // // // // // // // //               What Is Ammonia in a Shrimp Pond?
// // // // // // // // // // // // // //             </h2>

// // // // // // // // // // // // // //             <p className="mt-5 leading-8 text-gray-700">
// // // // // // // // // // // // // //               Ammonia in pond water occurs mainly in two forms:
// // // // // // // // // // // // // //               un-ionized ammonia (NH3) and ammonium (NH4+).
// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //             <p className="mt-4 leading-8 text-gray-700">
// // // // // // // // // // // // // //               The un-ionized NH3 form is more toxic to aquatic animals,
// // // // // // // // // // // // // //               making proper monitoring important in intensive shrimp culture.
// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //           </section>


// // // // // // // // // // // // // //           <section id="causes" className="scroll-mt-28">

// // // // // // // // // // // // // //             <h2 className="mt-12 text-3xl font-bold text-gray-900">
// // // // // // // // // // // // // //               What Causes High Ammonia in Shrimp Ponds?
// // // // // // // // // // // // // //             </h2>

// // // // // // // // // // // // // //             <h3 className="mt-8 text-xl font-bold text-gray-900">
// // // // // // // // // // // // // //               1. Excess Feed
// // // // // // // // // // // // // //             </h3>

// // // // // // // // // // // // // //             <p className="mt-3 leading-8 text-gray-700">
// // // // // // // // // // // // // //               Uneaten feed decomposes and contributes additional nitrogen
// // // // // // // // // // // // // //               compounds to the pond environment.
// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //             <h3 className="mt-8 text-xl font-bold text-gray-900">
// // // // // // // // // // // // // //               2. Shrimp Metabolic Waste
// // // // // // // // // // // // // //             </h3>

// // // // // // // // // // // // // //             <p className="mt-3 leading-8 text-gray-700">
// // // // // // // // // // // // // //               Shrimp naturally excrete nitrogenous waste. As biomass
// // // // // // // // // // // // // //               increases, the nitrogen load in the pond also increases.
// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //             <h3 className="mt-8 text-xl font-bold text-gray-900">
// // // // // // // // // // // // // //               3. Organic Matter Accumulation
// // // // // // // // // // // // // //             </h3>

// // // // // // // // // // // // // //             <p className="mt-3 leading-8 text-gray-700">
// // // // // // // // // // // // // //               Dead plankton, faecal matter and organic waste can accumulate
// // // // // // // // // // // // // //               on the pond bottom and contribute to ammonia production.
// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //           </section>


// // // // // // // // // // // // // //           <section id="risks" className="scroll-mt-28">

// // // // // // // // // // // // // //             <h2 className="mt-12 text-3xl font-bold text-gray-900">
// // // // // // // // // // // // // //               Why Is High Ammonia Dangerous?
// // // // // // // // // // // // // //             </h2>

// // // // // // // // // // // // // //             <p className="mt-5 leading-8 text-gray-700">
// // // // // // // // // // // // // //               Elevated ammonia can place shrimp under physiological stress.
// // // // // // // // // // // // // //               Prolonged exposure may contribute to reduced feed intake,
// // // // // // // // // // // // // //               slower growth and lower overall culture performance.
// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //             <ul className="mt-6 space-y-3 rounded-xl bg-gray-50 p-6 text-gray-700">
// // // // // // // // // // // // // //               <li>• Reduced feed intake</li>
// // // // // // // // // // // // // //               <li>• Poor growth performance</li>
// // // // // // // // // // // // // //               <li>• Increased environmental stress</li>
// // // // // // // // // // // // // //               <li>• Greater susceptibility to health challenges</li>
// // // // // // // // // // // // // //               <li>• Mortality under severe conditions</li>
// // // // // // // // // // // // // //             </ul>

// // // // // // // // // // // // // //           </section>


// // // // // // // // // // // // // //           <section id="ph-temperature" className="scroll-mt-28">

// // // // // // // // // // // // // //             <h2 className="mt-12 text-3xl font-bold text-gray-900">
// // // // // // // // // // // // // //               Ammonia, pH and Temperature
// // // // // // // // // // // // // //             </h2>

// // // // // // // // // // // // // //             <p className="mt-5 leading-8 text-gray-700">
// // // // // // // // // // // // // //               As pH and temperature increase, a greater proportion of total
// // // // // // // // // // // // // //               ammonia can occur in the more toxic un-ionized NH3 form.
// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //             <p className="mt-4 leading-8 text-gray-700">
// // // // // // // // // // // // // //               For this reason, ammonia readings should be interpreted
// // // // // // // // // // // // // //               together with pH, temperature and other water-quality
// // // // // // // // // // // // // //               parameters.
// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //           </section>


// // // // // // // // // // // // // //           <section id="management" className="scroll-mt-28">

// // // // // // // // // // // // // //             <h2 className="mt-12 text-3xl font-bold text-gray-900">
// // // // // // // // // // // // // //               How Can Aquaculture Businesses Manage Ammonia?
// // // // // // // // // // // // // //             </h2>

// // // // // // // // // // // // // //             <h3 className="mt-8 text-xl font-bold">
// // // // // // // // // // // // // //               Optimize Feeding Practices
// // // // // // // // // // // // // //             </h3>

// // // // // // // // // // // // // //             <p className="mt-3 leading-8 text-gray-700">
// // // // // // // // // // // // // //               Avoid excessive feeding and monitor actual feed consumption
// // // // // // // // // // // // // //               using trays, biomass estimates and feeding behaviour.
// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //             <h3 className="mt-8 text-xl font-bold">
// // // // // // // // // // // // // //               Maintain Adequate Dissolved Oxygen
// // // // // // // // // // // // // //             </h3>

// // // // // // // // // // // // // //             <p className="mt-3 leading-8 text-gray-700">
// // // // // // // // // // // // // //               Good aeration supports shrimp health as well as biological
// // // // // // // // // // // // // //               processes involved in maintaining stable pond conditions.
// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //             <h3 className="mt-8 text-xl font-bold">
// // // // // // // // // // // // // //               Manage Pond-Bottom Organic Matter
// // // // // // // // // // // // // //             </h3>

// // // // // // // // // // // // // //             <p className="mt-3 leading-8 text-gray-700">
// // // // // // // // // // // // // //               Good pond preparation and sludge management can help reduce
// // // // // // // // // // // // // //               excessive organic loading.
// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //             <h3 className="mt-8 text-xl font-bold">
// // // // // // // // // // // // // //               Monitor Water Quality Regularly
// // // // // // // // // // // // // //             </h3>

// // // // // // // // // // // // // //             <p className="mt-3 leading-8 text-gray-700">
// // // // // // // // // // // // // //               Routine monitoring can help aquaculture operators identify
// // // // // // // // // // // // // //               deteriorating pond conditions before larger production
// // // // // // // // // // // // // //               problems develop.
// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //           </section>


// // // // // // // // // // // // // //           {/* ================= CTA ================= */}

// // // // // // // // // // // // // //           <section
// // // // // // // // // // // // // //             id="solutions"
// // // // // // // // // // // // // //             className="my-14 rounded-2xl bg-[#052f5f] p-8 text-white md:p-10"
// // // // // // // // // // // // // //           >

// // // // // // // // // // // // // //             <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
// // // // // // // // // // // // // //               Innovare Biopharma
// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //             <h2 className="mt-3 text-2xl font-bold">
// // // // // // // // // // // // // //               Support Better Water-Quality Management
// // // // // // // // // // // // // //             </h2>

// // // // // // // // // // // // // //             <p className="mt-4 leading-7 text-blue-100">
// // // // // // // // // // // // // //               Explore Innovare Biopharma&apos;s range of aquaculture
// // // // // // // // // // // // // //               water-quality solutions designed to support modern pond
// // // // // // // // // // // // // //               management programs.
// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //             <Link
// // // // // // // // // // // // // //               href="/products"
// // // // // // // // // // // // // //               className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-[#052f5f]"
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               Explore Water Quality Solutions →
// // // // // // // // // // // // // //             </Link>

// // // // // // // // // // // // // //           </section>


// // // // // // // // // // // // // //           {/* ================= FAQ ================= */}

// // // // // // // // // // // // // //           <section id="faq" className="scroll-mt-28">

// // // // // // // // // // // // // //             <h2 className="text-3xl font-bold text-gray-900">
// // // // // // // // // // // // // //               Frequently Asked Questions
// // // // // // // // // // // // // //             </h2>

// // // // // // // // // // // // // //             <div className="mt-8 space-y-6">

// // // // // // // // // // // // // //               <div>
// // // // // // // // // // // // // //                 <h3 className="text-lg font-bold">
// // // // // // // // // // // // // //                   What causes ammonia to increase in shrimp ponds?
// // // // // // // // // // // // // //                 </h3>

// // // // // // // // // // // // // //                 <p className="mt-2 leading-7 text-gray-700">
// // // // // // // // // // // // // //                   Common causes include uneaten feed, shrimp metabolic
// // // // // // // // // // // // // //                   waste, organic matter accumulation and insufficient
// // // // // // // // // // // // // //                   biological conversion.
// // // // // // // // // // // // // //                 </p>
// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //               <div>
// // // // // // // // // // // // // //                 <h3 className="text-lg font-bold">
// // // // // // // // // // // // // //                   Why does pH affect ammonia toxicity?
// // // // // // // // // // // // // //                 </h3>

// // // // // // // // // // // // // //                 <p className="mt-2 leading-7 text-gray-700">
// // // // // // // // // // // // // //                   Higher pH can increase the proportion of ammonia present
// // // // // // // // // // // // // //                   in the more toxic un-ionized NH3 form.
// // // // // // // // // // // // // //                 </p>
// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //               <div>
// // // // // // // // // // // // // //                 <h3 className="text-lg font-bold">
// // // // // // // // // // // // // //                   Can probiotics help with ammonia management?
// // // // // // // // // // // // // //                 </h3>

// // // // // // // // // // // // // //                 <p className="mt-2 leading-7 text-gray-700">
// // // // // // // // // // // // // //                   Beneficial microorganisms may support organic-matter
// // // // // // // // // // // // // //                   degradation and nutrient cycling when used as part of an
// // // // // // // // // // // // // //                   overall pond-management program.
// // // // // // // // // // // // // //                 </p>
// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //           </section>


// // // // // // // // // // // // // //           {/* ================= BACK ================= */}

// // // // // // // // // // // // // //           <div className="mt-16 border-t border-gray-200 pt-8">

// // // // // // // // // // // // // //             <Link
// // // // // // // // // // // // // //               href="/blog"
// // // // // // // // // // // // // //               className="font-semibold text-blue-700 hover:text-blue-900"
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               ← View All Aquaculture Insights
// // // // // // // // // // // // // //             </Link>

// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //         </article>

// // // // // // // // // // // // // //       </section>

// // // // // // // // // // // // // //     </main>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // }
// // // // // // // // // // // // import { notFound } from "next/navigation";
// // // // // // // // // // // // import { getBlogBySlug } from "@/data/blogs";

// // // // // // // // // // // // export default async function BlogPostPage({
// // // // // // // // // // // //   params,
// // // // // // // // // // // // }: {
// // // // // // // // // // // //   params: Promise<{ slug: string }>;
// // // // // // // // // // // // }) {
// // // // // // // // // // // //   const { slug } = await params;

// // // // // // // // // // // //   const post = getBlogBySlug(slug);

// // // // // // // // // // // //   if (!post) {
// // // // // // // // // // // //     notFound();
// // // // // // // // // // // //   }

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <main className="min-h-screen bg-white px-6 py-20">
// // // // // // // // // // // //       <div className="mx-auto max-w-4xl">

// // // // // // // // // // // //         <p className="mb-4 text-sm font-semibold text-blue-700">
// // // // // // // // // // // //           {post.category}
// // // // // // // // // // // //         </p>

// // // // // // // // // // // //         <h1 className="text-4xl font-bold text-gray-900">
// // // // // // // // // // // //           {post.title}
// // // // // // // // // // // //         </h1>

// // // // // // // // // // // //         <p className="mt-5 text-lg leading-8 text-gray-600">
// // // // // // // // // // // //           {post.description}
// // // // // // // // // // // //         </p>

// // // // // // // // // // // //         <div className="mt-6 flex gap-3 text-sm text-gray-500">
// // // // // // // // // // // //           <span>{post.date}</span>
// // // // // // // // // // // //           <span>•</span>
// // // // // // // // // // // //           <span>{post.readTime}</span>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         <p className="mt-12 text-gray-700">
// // // // // // // // // // // //           The dynamic blog route is working correctly.
// // // // // // // // // // // //         </p>

// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </main>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }
// // // // // // // // // // // import type { Metadata } from "next";
// // // // // // // // // // // import Link from "next/link";
// // // // // // // // // // // import Image from "next/image";
// // // // // // // // // // // import { notFound } from "next/navigation";

// // // // // // // // // // // import { blogs, getBlogBySlug } from "@/data/blogs";

// // // // // // // // // // // type BlogPostPageProps = {
// // // // // // // // // // //   params: Promise<{
// // // // // // // // // // //     slug: string;
// // // // // // // // // // //   }>;
// // // // // // // // // // // };

// // // // // // // // // // // /* =========================
// // // // // // // // // // //    SEO METADATA
// // // // // // // // // // // ========================= */

// // // // // // // // // // // export async function generateMetadata({
// // // // // // // // // // //   params,
// // // // // // // // // // // }: BlogPostPageProps): Promise<Metadata> {
// // // // // // // // // // //   const { slug } = await params;

// // // // // // // // // // //   const post = getBlogBySlug(slug);

// // // // // // // // // // //   if (!post) {
// // // // // // // // // // //     return {
// // // // // // // // // // //       title: "Blog | Innovare Biopharma",
// // // // // // // // // // //       description:
// // // // // // // // // // //         "Explore aquaculture insights, water quality management, shrimp health, probiotics, nutrition and pond management.",
// // // // // // // // // // //     };
// // // // // // // // // // //   }

// // // // // // // // // // //   return {
// // // // // // // // // // //     title: `${post.title} | Innovare Biopharma`,

// // // // // // // // // // //     description: post.description,

// // // // // // // // // // //     openGraph: {
// // // // // // // // // // //       title: post.title,
// // // // // // // // // // //       description: post.description,
// // // // // // // // // // //       type: "article",
// // // // // // // // // // //       images: [
// // // // // // // // // // //         {
// // // // // // // // // // //           url: post.image,
// // // // // // // // // // //           alt: post.title,
// // // // // // // // // // //         },
// // // // // // // // // // //       ],
// // // // // // // // // // //     },

// // // // // // // // // // //     twitter: {
// // // // // // // // // // //       card: "summary_large_image",
// // // // // // // // // // //       title: post.title,
// // // // // // // // // // //       description: post.description,
// // // // // // // // // // //       images: [post.image],
// // // // // // // // // // //     },
// // // // // // // // // // //   };
// // // // // // // // // // // }

// // // // // // // // // // // /* =========================
// // // // // // // // // // //    BLOG PAGE
// // // // // // // // // // // ========================= */

// // // // // // // // // // // export default async function BlogPostPage({
// // // // // // // // // // //   params,
// // // // // // // // // // // }: BlogPostPageProps) {
// // // // // // // // // // //   const { slug } = await params;

// // // // // // // // // // //   const post = getBlogBySlug(slug);

// // // // // // // // // // //   if (!post) {
// // // // // // // // // // //     notFound();
// // // // // // // // // // //   }

// // // // // // // // // // //   /* =========================
// // // // // // // // // // //      RELATED BLOGS
// // // // // // // // // // //   ========================= */

// // // // // // // // // // //   const relatedPosts = blogs
// // // // // // // // // // //     .filter(
// // // // // // // // // // //       (blog) =>
// // // // // // // // // // //         blog.category === post.category &&
// // // // // // // // // // //         blog.slug !== post.slug
// // // // // // // // // // //     )
// // // // // // // // // // //     .slice(0, 3);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <main className="min-h-screen bg-white">

// // // // // // // // // // //       {/* =========================
// // // // // // // // // // //           ARTICLE HERO
// // // // // // // // // // //       ========================= */}

// // // // // // // // // // //       <section className="bg-[#052f5f] py-16 text-white md:py-24">

// // // // // // // // // // //         <div className="mx-auto max-w-5xl px-6">

// // // // // // // // // // //           <Link
// // // // // // // // // // //             href="/blog"
// // // // // // // // // // //             className="inline-flex items-center text-sm font-medium text-blue-200 transition hover:text-white"
// // // // // // // // // // //           >
// // // // // // // // // // //             ← Back to Aquaculture Insights
// // // // // // // // // // //           </Link>

// // // // // // // // // // //           <div className="mt-8">

// // // // // // // // // // //             <span className="inline-flex rounded-full bg-blue-400/15 px-4 py-2 text-sm font-semibold text-blue-100">
// // // // // // // // // // //               {post.category}
// // // // // // // // // // //             </span>

// // // // // // // // // // //             <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
// // // // // // // // // // //               {post.title}
// // // // // // // // // // //             </h1>

// // // // // // // // // // //             <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
// // // // // // // // // // //               {post.description}
// // // // // // // // // // //             </p>

// // // // // // // // // // //             <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-blue-200">

// // // // // // // // // // //               <span>{post.date}</span>

// // // // // // // // // // //               <span>•</span>

// // // // // // // // // // //               <span>{post.readTime}</span>

// // // // // // // // // // //               <span>•</span>

// // // // // // // // // // //               <span>Innovare Biopharma</span>

// // // // // // // // // // //             </div>

// // // // // // // // // // //           </div>

// // // // // // // // // // //         </div>

// // // // // // // // // // //       </section>


// // // // // // // // // // //       {/* =========================
// // // // // // // // // // //           ARTICLE IMAGE
// // // // // // // // // // //       ========================= */}

// // // // // // // // // // //       <section className="mx-auto max-w-6xl px-6">

// // // // // // // // // // //         <div className="-mt-8 overflow-hidden rounded-2xl bg-gray-100 shadow-lg md:-mt-12">

// // // // // // // // // // //           <div className="relative aspect-[16/8] w-full">

// // // // // // // // // // //             <Image
// // // // // // // // // // //               src={post.image}
// // // // // // // // // // //               alt={post.title}
// // // // // // // // // // //               fill
// // // // // // // // // // //               priority
// // // // // // // // // // //               className="object-cover"
// // // // // // // // // // //             />

// // // // // // // // // // //           </div>

// // // // // // // // // // //         </div>

// // // // // // // // // // //       </section>


// // // // // // // // // // //       {/* =========================
// // // // // // // // // // //           ARTICLE LAYOUT
// // // // // // // // // // //       ========================= */}

// // // // // // // // // // //       <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[280px_minmax(0,1fr)]">

// // // // // // // // // // //         {/* =========================
// // // // // // // // // // //             TABLE OF CONTENTS
// // // // // // // // // // //         ========================= */}

// // // // // // // // // // //         <aside className="hidden lg:block">

// // // // // // // // // // //           <div className="sticky top-28 rounded-2xl border border-gray-200 bg-gray-50 p-6">

// // // // // // // // // // //             <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-blue-700">
// // // // // // // // // // //               In This Article
// // // // // // // // // // //             </p>

// // // // // // // // // // //             <nav className="space-y-3">

// // // // // // // // // // //               {post.content.map((section, index) => (

// // // // // // // // // // //                 <a
// // // // // // // // // // //                   key={index}
// // // // // // // // // // //                   href={`#section-${index}`}
// // // // // // // // // // //                   className="block text-sm leading-6 text-gray-600 transition hover:text-blue-700"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   {section.heading}
// // // // // // // // // // //                 </a>

// // // // // // // // // // //               ))}

// // // // // // // // // // //               <a
// // // // // // // // // // //                 href="#faq"
// // // // // // // // // // //                 className="block text-sm leading-6 text-gray-600 transition hover:text-blue-700"
// // // // // // // // // // //               >
// // // // // // // // // // //                 Frequently Asked Questions
// // // // // // // // // // //               </a>

// // // // // // // // // // //             </nav>

// // // // // // // // // // //           </div>

// // // // // // // // // // //         </aside>


// // // // // // // // // // //         {/* =========================
// // // // // // // // // // //             MAIN ARTICLE
// // // // // // // // // // //         ========================= */}

// // // // // // // // // // //         <article className="min-w-0 max-w-4xl">

// // // // // // // // // // //           {/* Introduction */}

// // // // // // // // // // //           <div className="border-b border-gray-200 pb-10">

// // // // // // // // // // //             <p className="text-lg leading-8 text-gray-700">
// // // // // // // // // // //               Maintaining stable water quality is one of the most important
// // // // // // // // // // //               requirements for successful shrimp farming. Water-quality
// // // // // // // // // // //               problems can affect feeding behaviour, shrimp health and
// // // // // // // // // // //               overall culture performance.
// // // // // // // // // // //             </p>

// // // // // // // // // // //             <p className="mt-5 text-lg leading-8 text-gray-700">
// // // // // // // // // // //               This guide explains the key factors aquaculture businesses
// // // // // // // // // // //               should understand and the practical management approaches
// // // // // // // // // // //               that can support a healthier pond environment.
// // // // // // // // // // //             </p>

// // // // // // // // // // //           </div>


// // // // // // // // // // //           {/* =========================
// // // // // // // // // // //               DYNAMIC CONTENT
// // // // // // // // // // //           ========================= */}

// // // // // // // // // // //           {post.content.map((section, index) => (

// // // // // // // // // // //             <section
// // // // // // // // // // //               key={index}
// // // // // // // // // // //               id={`section-${index}`}
// // // // // // // // // // //               className="scroll-mt-28 pt-12"
// // // // // // // // // // //             >

// // // // // // // // // // //               <h2 className="text-3xl font-bold leading-tight text-gray-900">
// // // // // // // // // // //                 {section.heading}
// // // // // // // // // // //               </h2>

// // // // // // // // // // //               <div className="mt-5 space-y-5">

// // // // // // // // // // //                 {section.paragraphs.map(
// // // // // // // // // // //                   (paragraph, paragraphIndex) => (

// // // // // // // // // // //                     <p
// // // // // // // // // // //                       key={paragraphIndex}
// // // // // // // // // // //                       className="text-[17px] leading-8 text-gray-700"
// // // // // // // // // // //                     >
// // // // // // // // // // //                       {paragraph}
// // // // // // // // // // //                     </p>

// // // // // // // // // // //                   )
// // // // // // // // // // //                 )}

// // // // // // // // // // //               </div>

// // // // // // // // // // //             </section>

// // // // // // // // // // //           ))}


// // // // // // // // // // //           {/* =========================
// // // // // // // // // // //               INNOVARE CTA
// // // // // // // // // // //           ========================= */}

// // // // // // // // // // //           <section className="my-14 overflow-hidden rounded-2xl bg-[#052f5f] p-8 text-white md:p-10">

// // // // // // // // // // //             <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
// // // // // // // // // // //               Innovare Biopharma
// // // // // // // // // // //             </p>

// // // // // // // // // // //             <h2 className="mt-3 text-2xl font-bold md:text-3xl">
// // // // // // // // // // //               Looking for Better Water-Quality Management?
// // // // // // // // // // //             </h2>

// // // // // // // // // // //             <p className="mt-5 max-w-2xl leading-7 text-blue-100">
// // // // // // // // // // //               Explore Innovare Biopharma&apos;s range of aquaculture
// // // // // // // // // // //               water-quality solutions designed to support modern pond
// // // // // // // // // // //               management, microbial balance and overall culture
// // // // // // // // // // //               performance.
// // // // // // // // // // //             </p>

// // // // // // // // // // //             <Link
// // // // // // // // // // //               href="/products"
// // // // // // // // // // //               className="mt-7 inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-[#052f5f] transition hover:bg-gray-100"
// // // // // // // // // // //             >
// // // // // // // // // // //               Explore Water Quality Solutions

// // // // // // // // // // //               <span className="ml-2">
// // // // // // // // // // //                 →
// // // // // // // // // // //               </span>

// // // // // // // // // // //             </Link>

// // // // // // // // // // //           </section>


// // // // // // // // // // //           {/* =========================
// // // // // // // // // // //               FAQ
// // // // // // // // // // //           ========================= */}

// // // // // // // // // // //           <section
// // // // // // // // // // //             id="faq"
// // // // // // // // // // //             className="scroll-mt-28 pt-6"
// // // // // // // // // // //           >

// // // // // // // // // // //             <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
// // // // // // // // // // //               FAQ
// // // // // // // // // // //             </p>

// // // // // // // // // // //             <h2 className="mt-2 text-3xl font-bold text-gray-900">
// // // // // // // // // // //               Frequently Asked Questions
// // // // // // // // // // //             </h2>

// // // // // // // // // // //             <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200">

// // // // // // // // // // //               <div className="py-6">

// // // // // // // // // // //                 <h3 className="text-lg font-bold text-gray-900">
// // // // // // // // // // //                   What causes ammonia to increase in shrimp ponds?
// // // // // // // // // // //                 </h3>

// // // // // // // // // // //                 <p className="mt-3 leading-7 text-gray-700">
// // // // // // // // // // //                   Common contributors include uneaten feed, shrimp
// // // // // // // // // // //                   metabolic waste, dead plankton, accumulated organic
// // // // // // // // // // //                   matter and insufficient biological conversion.
// // // // // // // // // // //                 </p>

// // // // // // // // // // //               </div>


// // // // // // // // // // //               <div className="py-6">

// // // // // // // // // // //                 <h3 className="text-lg font-bold text-gray-900">
// // // // // // // // // // //                   Why does pH affect ammonia toxicity?
// // // // // // // // // // //                 </h3>

// // // // // // // // // // //                 <p className="mt-3 leading-7 text-gray-700">
// // // // // // // // // // //                   Higher pH can increase the proportion of ammonia present
// // // // // // // // // // //                   in the more toxic un-ionized NH3 form. Ammonia results
// // // // // // // // // // //                   should therefore be interpreted together with pH and
// // // // // // // // // // //                   temperature.
// // // // // // // // // // //                 </p>

// // // // // // // // // // //               </div>


// // // // // // // // // // //               <div className="py-6">

// // // // // // // // // // //                 <h3 className="text-lg font-bold text-gray-900">
// // // // // // // // // // //                   Can probiotics support ammonia management?
// // // // // // // // // // //                 </h3>

// // // // // // // // // // //                 <p className="mt-3 leading-7 text-gray-700">
// // // // // // // // // // //                   Selected beneficial microorganisms may support
// // // // // // // // // // //                   organic-matter degradation and nutrient cycling when
// // // // // // // // // // //                   they are used as part of a broader pond-management
// // // // // // // // // // //                   program.
// // // // // // // // // // //                 </p>

// // // // // // // // // // //               </div>


// // // // // // // // // // //               <div className="py-6">

// // // // // // // // // // //                 <h3 className="text-lg font-bold text-gray-900">
// // // // // // // // // // //                   Is ammonia the only water-quality parameter that should
// // // // // // // // // // //                   be monitored?
// // // // // // // // // // //                 </h3>

// // // // // // // // // // //                 <p className="mt-3 leading-7 text-gray-700">
// // // // // // // // // // //                   No. Aquaculture businesses should evaluate ammonia
// // // // // // // // // // //                   alongside parameters such as dissolved oxygen, pH,
// // // // // // // // // // //                   temperature, nitrite, alkalinity and salinity.
// // // // // // // // // // //                 </p>

// // // // // // // // // // //               </div>

// // // // // // // // // // //             </div>

// // // // // // // // // // //           </section>


// // // // // // // // // // //           {/* =========================
// // // // // // // // // // //               ARTICLE FOOTER
// // // // // // // // // // //           ========================= */}

// // // // // // // // // // //           <div className="mt-14 border-t border-gray-200 pt-8">

// // // // // // // // // // //             <p className="text-sm text-gray-500">
// // // // // // // // // // //               Published by Innovare Biopharma
// // // // // // // // // // //             </p>

// // // // // // // // // // //             <Link
// // // // // // // // // // //               href="/blog"
// // // // // // // // // // //               className="mt-4 inline-flex font-semibold text-blue-700 transition hover:text-blue-900"
// // // // // // // // // // //             >
// // // // // // // // // // //               ← View All Aquaculture Insights
// // // // // // // // // // //             </Link>

// // // // // // // // // // //           </div>

// // // // // // // // // // //         </article>

// // // // // // // // // // //       </section>


// // // // // // // // // // //       {/* =========================
// // // // // // // // // // //           RELATED ARTICLES
// // // // // // // // // // //       ========================= */}

// // // // // // // // // // //       {relatedPosts.length > 0 && (

// // // // // // // // // // //         <section className="bg-gray-50 py-20">

// // // // // // // // // // //           <div className="mx-auto max-w-7xl px-6">

// // // // // // // // // // //             <div className="mb-10">

// // // // // // // // // // //               <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
// // // // // // // // // // //                 Continue Reading
// // // // // // // // // // //               </p>

// // // // // // // // // // //               <h2 className="mt-2 text-3xl font-bold text-gray-900">
// // // // // // // // // // //                 Related Aquaculture Insights
// // // // // // // // // // //               </h2>

// // // // // // // // // // //             </div>


// // // // // // // // // // //             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

// // // // // // // // // // //               {relatedPosts.map((blog) => (

// // // // // // // // // // //                 <article
// // // // // // // // // // //                   key={blog.slug}
// // // // // // // // // // //                   className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
// // // // // // // // // // //                 >

// // // // // // // // // // //                   <div className="relative h-52 overflow-hidden">

// // // // // // // // // // //                     <Image
// // // // // // // // // // //                       src={blog.image}
// // // // // // // // // // //                       alt={blog.title}
// // // // // // // // // // //                       fill
// // // // // // // // // // //                       className="object-cover transition duration-500 group-hover:scale-105"
// // // // // // // // // // //                     />

// // // // // // // // // // //                   </div>


// // // // // // // // // // //                   <div className="p-6">

// // // // // // // // // // //                     <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
// // // // // // // // // // //                       {blog.category}
// // // // // // // // // // //                     </span>

// // // // // // // // // // //                     <h3 className="mt-4 text-xl font-bold leading-snug text-gray-900 transition group-hover:text-blue-700">
// // // // // // // // // // //                       {blog.title}
// // // // // // // // // // //                     </h3>

// // // // // // // // // // //                     <p className="mt-3 line-clamp-3 leading-6 text-gray-600">
// // // // // // // // // // //                       {blog.description}
// // // // // // // // // // //                     </p>

// // // // // // // // // // //                     <Link
// // // // // // // // // // //                       href={`/blog/${blog.slug}`}
// // // // // // // // // // //                       className="mt-6 inline-flex items-center font-semibold text-blue-700"
// // // // // // // // // // //                     >
// // // // // // // // // // //                       Read Article

// // // // // // // // // // //                       <span className="ml-2 transition group-hover:translate-x-1">
// // // // // // // // // // //                         →
// // // // // // // // // // //                       </span>

// // // // // // // // // // //                     </Link>

// // // // // // // // // // //                   </div>

// // // // // // // // // // //                 </article>

// // // // // // // // // // //               ))}

// // // // // // // // // // //             </div>

// // // // // // // // // // //           </div>

// // // // // // // // // // //         </section>

// // // // // // // // // // //       )}

// // // // // // // // // // //     </main>
// // // // // // // // // // //   );
// // // // // // // // // // // }
// // // // // // // // // // import type { Metadata } from "next";
// // // // // // // // // // import Link from "next/link";
// // // // // // // // // // import Image from "next/image";
// // // // // // // // // // import { notFound } from "next/navigation";

// // // // // // // // // // import { blogs, getBlogBySlug } from "@/data/blogs";

// // // // // // // // // // type BlogPostPageProps = {
// // // // // // // // // //   params: Promise<{
// // // // // // // // // //     slug: string;
// // // // // // // // // //   }>;
// // // // // // // // // // };

// // // // // // // // // // /* =========================
// // // // // // // // // //    SEO
// // // // // // // // // // ========================= */

// // // // // // // // // // export async function generateMetadata({
// // // // // // // // // //   params,
// // // // // // // // // // }: BlogPostPageProps): Promise<Metadata> {
// // // // // // // // // //   const { slug } = await params;

// // // // // // // // // //   const post = getBlogBySlug(slug);

// // // // // // // // // //   if (!post) {
// // // // // // // // // //     return {
// // // // // // // // // //       title: "Blog | Innovare Biopharma",
// // // // // // // // // //       description:
// // // // // // // // // //         "Explore aquaculture insights, water quality management, shrimp health, nutrition and pond management.",
// // // // // // // // // //     };
// // // // // // // // // //   }

// // // // // // // // // //   return {
// // // // // // // // // //     title: `${post.title} | Innovare Biopharma`,
// // // // // // // // // //     description: post.description,

// // // // // // // // // //     openGraph: {
// // // // // // // // // //       title: post.title,
// // // // // // // // // //       description: post.description,
// // // // // // // // // //       type: "article",
// // // // // // // // // //       images: [
// // // // // // // // // //         {
// // // // // // // // // //           url: post.image,
// // // // // // // // // //           alt: post.title,
// // // // // // // // // //         },
// // // // // // // // // //       ],
// // // // // // // // // //     },

// // // // // // // // // //     twitter: {
// // // // // // // // // //       card: "summary_large_image",
// // // // // // // // // //       title: post.title,
// // // // // // // // // //       description: post.description,
// // // // // // // // // //       images: [post.image],
// // // // // // // // // //     },
// // // // // // // // // //   };
// // // // // // // // // // }

// // // // // // // // // // /* =========================
// // // // // // // // // //    PAGE
// // // // // // // // // // ========================= */

// // // // // // // // // // export default async function BlogPostPage({
// // // // // // // // // //   params,
// // // // // // // // // // }: BlogPostPageProps) {
// // // // // // // // // //   const { slug } = await params;

// // // // // // // // // //   const post = getBlogBySlug(slug);

// // // // // // // // // //   if (!post) {
// // // // // // // // // //     notFound();
// // // // // // // // // //   }

// // // // // // // // // //   const relatedPosts = blogs
// // // // // // // // // //     .filter(
// // // // // // // // // //       (blog) =>
// // // // // // // // // //         blog.category === post.category &&
// // // // // // // // // //         blog.slug !== post.slug
// // // // // // // // // //     )
// // // // // // // // // //     .slice(0, 3);

// // // // // // // // // //   return (
// // // // // // // // // //     <main className="min-h-screen bg-white">

// // // // // // // // // //       {/* =========================
// // // // // // // // // //           HERO
// // // // // // // // // //       ========================= */}

// // // // // // // // // //       <section className="bg-[#07376d] text-white">

// // // // // // // // // //         <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

// // // // // // // // // //           <Link
// // // // // // // // // //             href="/blog"
// // // // // // // // // //             className="inline-flex items-center text-sm font-medium text-blue-200 transition hover:text-white"
// // // // // // // // // //           >
// // // // // // // // // //             ← Back to Aquaculture Insights
// // // // // // // // // //           </Link>

// // // // // // // // // //           <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

// // // // // // // // // //             {/* LEFT */}

// // // // // // // // // //             <div>

// // // // // // // // // //               <span className="inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-100">
// // // // // // // // // //                 {post.category}
// // // // // // // // // //               </span>

// // // // // // // // // //               <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
// // // // // // // // // //                 {post.title}
// // // // // // // // // //               </h1>

// // // // // // // // // //               <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
// // // // // // // // // //                 {post.description}
// // // // // // // // // //               </p>

// // // // // // // // // //               <div className="mt-7 flex flex-wrap gap-4 text-sm text-blue-200">
// // // // // // // // // //                 <span>{post.date}</span>
// // // // // // // // // //                 <span>•</span>
// // // // // // // // // //                 <span>{post.readTime}</span>
// // // // // // // // // //                 <span>•</span>
// // // // // // // // // //                 <span>Innovare Biopharma</span>
// // // // // // // // // //               </div>

// // // // // // // // // //             </div>

// // // // // // // // // //             {/* RIGHT IMAGE */}

// // // // // // // // // //             <div className="relative overflow-hidden rounded-2xl shadow-2xl">

// // // // // // // // // //               <div className="relative aspect-[16/10] w-full">

// // // // // // // // // //                 <Image
// // // // // // // // // //                   src={post.image}
// // // // // // // // // //                   alt={post.title}
// // // // // // // // // //                   fill
// // // // // // // // // //                   priority
// // // // // // // // // //                   className="object-cover"
// // // // // // // // // //                 />

// // // // // // // // // //               </div>

// // // // // // // // // //             </div>

// // // // // // // // // //           </div>

// // // // // // // // // //         </div>

// // // // // // // // // //       </section>


// // // // // // // // // //       {/* =========================
// // // // // // // // // //           KEY VISUAL CARDS
// // // // // // // // // //       ========================= */}

// // // // // // // // // //       <section className="border-b border-gray-100 bg-white">

// // // // // // // // // //         <div className="mx-auto max-w-7xl px-6 py-12">

// // // // // // // // // //           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

// // // // // // // // // //             <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

// // // // // // // // // //               <div className="relative h-40">

// // // // // // // // // //                 <Image
// // // // // // // // // //                   src="/images/blog/ammonia-water-quality.webp"
// // // // // // // // // //                   alt="Shrimp pond water quality"
// // // // // // // // // //                   fill
// // // // // // // // // //                   className="object-cover"
// // // // // // // // // //                 />

// // // // // // // // // //               </div>

// // // // // // // // // //               <div className="p-5">

// // // // // // // // // //                 <h3 className="font-bold text-gray-900">
// // // // // // // // // //                   Water Quality
// // // // // // // // // //                 </h3>

// // // // // // // // // //                 <p className="mt-2 text-sm leading-6 text-gray-600">
// // // // // // // // // //                   Maintain stable water parameters for healthier shrimp culture.
// // // // // // // // // //                 </p>

// // // // // // // // // //               </div>

// // // // // // // // // //             </div>


// // // // // // // // // //             <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

// // // // // // // // // //               <div className="relative h-40">

// // // // // // // // // //                 <Image
// // // // // // // // // //                   src="/images/blog/shrimp-health.webp"
// // // // // // // // // //                   alt="Healthy shrimp in aquaculture"
// // // // // // // // // //                   fill
// // // // // // // // // //                   className="object-cover"
// // // // // // // // // //                 />

// // // // // // // // // //               </div>

// // // // // // // // // //               <div className="p-5">

// // // // // // // // // //                 <h3 className="font-bold text-gray-900">
// // // // // // // // // //                   Shrimp Health
// // // // // // // // // //                 </h3>

// // // // // // // // // //                 <p className="mt-2 text-sm leading-6 text-gray-600">
// // // // // // // // // //                   Reduce environmental stress and support consistent performance.
// // // // // // // // // //                 </p>

// // // // // // // // // //               </div>

// // // // // // // // // //             </div>


// // // // // // // // // //             <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

// // // // // // // // // //               <div className="relative h-40">

// // // // // // // // // //                 <Image
// // // // // // // // // //                   src="/images/blog/water-testing.webp"
// // // // // // // // // //                   alt="Aquaculture water testing"
// // // // // // // // // //                   fill
// // // // // // // // // //                   className="object-cover"
// // // // // // // // // //                 />

// // // // // // // // // //               </div>

// // // // // // // // // //               <div className="p-5">

// // // // // // // // // //                 <h3 className="font-bold text-gray-900">
// // // // // // // // // //                   Testing & Monitoring
// // // // // // // // // //                 </h3>

// // // // // // // // // //                 <p className="mt-2 text-sm leading-6 text-gray-600">
// // // // // // // // // //                   Monitor ammonia, pH, temperature and dissolved oxygen regularly.
// // // // // // // // // //                 </p>

// // // // // // // // // //               </div>

// // // // // // // // // //             </div>


// // // // // // // // // //             <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

// // // // // // // // // //               <div className="relative h-40">

// // // // // // // // // //                 <Image
// // // // // // // // // //                   src="/images/blog/aeration.webp"
// // // // // // // // // //                   alt="Paddle wheel aerators in shrimp pond"
// // // // // // // // // //                   fill
// // // // // // // // // //                   className="object-cover"
// // // // // // // // // //                 />

// // // // // // // // // //               </div>

// // // // // // // // // //               <div className="p-5">

// // // // // // // // // //                 <h3 className="font-bold text-gray-900">
// // // // // // // // // //                   Better Management
// // // // // // // // // //                 </h3>

// // // // // // // // // //                 <p className="mt-2 text-sm leading-6 text-gray-600">
// // // // // // // // // //                   Improve aeration, feeding and pond-bottom management.
// // // // // // // // // //                 </p>

// // // // // // // // // //               </div>

// // // // // // // // // //             </div>

// // // // // // // // // //           </div>

// // // // // // // // // //         </div>

// // // // // // // // // //       </section>


// // // // // // // // // //       {/* =========================
// // // // // // // // // //           MAIN ARTICLE
// // // // // // // // // //       ========================= */}

// // // // // // // // // //       <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[280px_minmax(0,1fr)]">

// // // // // // // // // //         {/* =========================
// // // // // // // // // //             TOC
// // // // // // // // // //         ========================= */}

// // // // // // // // // //         <aside className="hidden lg:block">

// // // // // // // // // //           <div className="sticky top-28 rounded-2xl border border-gray-200 bg-gray-50 p-6">

// // // // // // // // // //             <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-blue-700">
// // // // // // // // // //               In This Article
// // // // // // // // // //             </p>

// // // // // // // // // //             <nav className="space-y-3">

// // // // // // // // // //               {post.content.map((section, index) => (
// // // // // // // // // //                 <a
// // // // // // // // // //                   key={index}
// // // // // // // // // //                   href={`#section-${index}`}
// // // // // // // // // //                   className="block text-sm leading-6 text-gray-600 transition hover:text-blue-700"
// // // // // // // // // //                 >
// // // // // // // // // //                   {section.heading}
// // // // // // // // // //                 </a>
// // // // // // // // // //               ))}

// // // // // // // // // //               <a
// // // // // // // // // //                 href="#faq"
// // // // // // // // // //                 className="block text-sm leading-6 text-gray-600 transition hover:text-blue-700"
// // // // // // // // // //               >
// // // // // // // // // //                 Frequently Asked Questions
// // // // // // // // // //               </a>

// // // // // // // // // //             </nav>

// // // // // // // // // //           </div>

// // // // // // // // // //         </aside>


// // // // // // // // // //         {/* =========================
// // // // // // // // // //             CONTENT
// // // // // // // // // //         ========================= */}

// // // // // // // // // //         <article className="min-w-0 max-w-4xl">

// // // // // // // // // //           {/* INTRODUCTION */}

// // // // // // // // // //           <div className="border-b border-gray-200 pb-10">

// // // // // // // // // //             <p className="text-lg leading-8 text-gray-700">
// // // // // // // // // //               Maintaining stable water quality is one of the most important
// // // // // // // // // //               requirements for successful shrimp farming. Water-quality
// // // // // // // // // //               problems can affect feeding behaviour, shrimp health and
// // // // // // // // // //               overall culture performance.
// // // // // // // // // //             </p>

// // // // // // // // // //             <p className="mt-5 text-lg leading-8 text-gray-700">
// // // // // // // // // //               This guide explains the key factors aquaculture businesses
// // // // // // // // // //               should understand and the practical management approaches
// // // // // // // // // //               that can support a healthier pond environment.
// // // // // // // // // //             </p>

// // // // // // // // // //           </div>


// // // // // // // // // //           {/* =========================
// // // // // // // // // //               DYNAMIC SECTIONS
// // // // // // // // // //           ========================= */}

// // // // // // // // // //           {post.content.map((section, index) => (

// // // // // // // // // //             <section
// // // // // // // // // //               key={index}
// // // // // // // // // //               id={`section-${index}`}
// // // // // // // // // //               className="scroll-mt-28 pt-14"
// // // // // // // // // //             >

// // // // // // // // // //               <h2 className="text-3xl font-bold leading-tight text-gray-900">
// // // // // // // // // //                 {section.heading}
// // // // // // // // // //               </h2>


// // // // // // // // // //               {/* OPTIONAL SECTION IMAGE */}

// // // // // // // // // //               {section.image && (

// // // // // // // // // //                 <div className="relative mt-7 aspect-[16/8] overflow-hidden rounded-2xl">

// // // // // // // // // //                   <Image
// // // // // // // // // //                     src={section.image}
// // // // // // // // // //                     alt={section.heading}
// // // // // // // // // //                     fill
// // // // // // // // // //                     className="object-cover"
// // // // // // // // // //                   />

// // // // // // // // // //                 </div>

// // // // // // // // // //               )}


// // // // // // // // // //               <div className="mt-6 space-y-5">

// // // // // // // // // //                 {section.paragraphs.map(
// // // // // // // // // //                   (paragraph, paragraphIndex) => (

// // // // // // // // // //                     <p
// // // // // // // // // //                       key={paragraphIndex}
// // // // // // // // // //                       className="text-[17px] leading-8 text-gray-700"
// // // // // // // // // //                     >
// // // // // // // // // //                       {paragraph}
// // // // // // // // // //                     </p>

// // // // // // // // // //                   )
// // // // // // // // // //                 )}

// // // // // // // // // //               </div>

// // // // // // // // // //             </section>

// // // // // // // // // //           ))}


// // // // // // // // // //           {/* =========================
// // // // // // // // // //               INFO VISUAL
// // // // // // // // // //           ========================= */}

// // // // // // // // // //           <section className="my-14 grid overflow-hidden rounded-2xl border border-blue-100 bg-blue-50 md:grid-cols-2">

// // // // // // // // // //             <div className="relative min-h-[280px]">

// // // // // // // // // //               <Image
// // // // // // // // // //                 src="/images/blog/ammonia-management.webp"
// // // // // // // // // //                 alt="Ammonia management in shrimp pond"
// // // // // // // // // //                 fill
// // // // // // // // // //                 className="object-cover"
// // // // // // // // // //               />

// // // // // // // // // //             </div>

// // // // // // // // // //             <div className="flex flex-col justify-center p-8">

// // // // // // // // // //               <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
// // // // // // // // // //                 Practical Management
// // // // // // // // // //               </p>

// // // // // // // // // //               <h2 className="mt-3 text-2xl font-bold text-gray-900">
// // // // // // // // // //                 Prevent Problems Before They Affect Production
// // // // // // // // // //               </h2>

// // // // // // // // // //               <p className="mt-4 leading-7 text-gray-700">
// // // // // // // // // //                 Regular monitoring, responsible feeding, adequate aeration
// // // // // // // // // //                 and pond-bottom management can help maintain more stable
// // // // // // // // // //                 culture conditions.
// // // // // // // // // //               </p>

// // // // // // // // // //             </div>

// // // // // // // // // //           </section>


// // // // // // // // // //           {/* =========================
// // // // // // // // // //               INNOVARE CTA
// // // // // // // // // //           ========================= */}

// // // // // // // // // //           <section className="my-14 overflow-hidden rounded-2xl bg-[#052f5f]">

// // // // // // // // // //             <div className="grid md:grid-cols-[1.15fr_0.85fr]">

// // // // // // // // // //               <div className="p-8 text-white md:p-10">

// // // // // // // // // //                 <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
// // // // // // // // // //                   Innovare Biopharma
// // // // // // // // // //                 </p>

// // // // // // // // // //                 <h2 className="mt-3 text-2xl font-bold md:text-3xl">
// // // // // // // // // //                   Looking for Better Water-Quality Management?
// // // // // // // // // //                 </h2>

// // // // // // // // // //                 <p className="mt-5 max-w-2xl leading-7 text-blue-100">
// // // // // // // // // //                   Explore Innovare Biopharma&apos;s aquaculture water-quality
// // // // // // // // // //                   solutions designed to support modern pond management,
// // // // // // // // // //                   microbial balance and overall culture performance.
// // // // // // // // // //                 </p>

// // // // // // // // // //                 <Link
// // // // // // // // // //                   href="/products"
// // // // // // // // // //                   className="mt-7 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-[#052f5f] transition hover:bg-gray-100"
// // // // // // // // // //                 >
// // // // // // // // // //                   Explore Water Quality Solutions →
// // // // // // // // // //                 </Link>

// // // // // // // // // //               </div>

// // // // // // // // // //               <div className="relative min-h-[280px]">

// // // // // // // // // //                 <Image
// // // // // // // // // //                   src="/images/blog/water-quality-solutions.webp"
// // // // // // // // // //                   alt="Aquaculture water quality solutions"
// // // // // // // // // //                   fill
// // // // // // // // // //                   className="object-cover"
// // // // // // // // // //                 />

// // // // // // // // // //               </div>

// // // // // // // // // //             </div>

// // // // // // // // // //           </section>


// // // // // // // // // //           {/* =========================
// // // // // // // // // //               FAQ
// // // // // // // // // //           ========================= */}

// // // // // // // // // //           <section
// // // // // // // // // //             id="faq"
// // // // // // // // // //             className="scroll-mt-28 pt-6"
// // // // // // // // // //           >

// // // // // // // // // //             <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
// // // // // // // // // //               FAQ
// // // // // // // // // //             </p>

// // // // // // // // // //             <h2 className="mt-2 text-3xl font-bold text-gray-900">
// // // // // // // // // //               Frequently Asked Questions
// // // // // // // // // //             </h2>

// // // // // // // // // //             <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200">

// // // // // // // // // //               <div className="py-6">

// // // // // // // // // //                 <h3 className="text-lg font-bold text-gray-900">
// // // // // // // // // //                   What causes ammonia to increase in shrimp ponds?
// // // // // // // // // //                 </h3>

// // // // // // // // // //                 <p className="mt-3 leading-7 text-gray-700">
// // // // // // // // // //                   Common contributors include uneaten feed, shrimp metabolic
// // // // // // // // // //                   waste, dead plankton and accumulated organic matter.
// // // // // // // // // //                 </p>

// // // // // // // // // //               </div>


// // // // // // // // // //               <div className="py-6">

// // // // // // // // // //                 <h3 className="text-lg font-bold text-gray-900">
// // // // // // // // // //                   Why does pH affect ammonia toxicity?
// // // // // // // // // //                 </h3>

// // // // // // // // // //                 <p className="mt-3 leading-7 text-gray-700">
// // // // // // // // // //                   Higher pH can increase the proportion of ammonia present
// // // // // // // // // //                   in the more toxic un-ionized NH3 form.
// // // // // // // // // //                 </p>

// // // // // // // // // //               </div>


// // // // // // // // // //               <div className="py-6">

// // // // // // // // // //                 <h3 className="text-lg font-bold text-gray-900">
// // // // // // // // // //                   Can probiotics support ammonia management?
// // // // // // // // // //                 </h3>

// // // // // // // // // //                 <p className="mt-3 leading-7 text-gray-700">
// // // // // // // // // //                   Selected beneficial microorganisms may support
// // // // // // // // // //                   organic-matter degradation and nutrient cycling as part
// // // // // // // // // //                   of a wider pond-management strategy.
// // // // // // // // // //                 </p>

// // // // // // // // // //               </div>

// // // // // // // // // //             </div>

// // // // // // // // // //           </section>


// // // // // // // // // //           {/* BACK */}

// // // // // // // // // //           <div className="mt-14 border-t border-gray-200 pt-8">

// // // // // // // // // //             <Link
// // // // // // // // // //               href="/blog"
// // // // // // // // // //               className="font-semibold text-blue-700 hover:text-blue-900"
// // // // // // // // // //             >
// // // // // // // // // //               ← View All Aquaculture Insights
// // // // // // // // // //             </Link>

// // // // // // // // // //           </div>

// // // // // // // // // //         </article>

// // // // // // // // // //       </section>


// // // // // // // // // //       {/* =========================
// // // // // // // // // //           RELATED ARTICLES
// // // // // // // // // //       ========================= */}

// // // // // // // // // //       {relatedPosts.length > 0 && (

// // // // // // // // // //         <section className="bg-gray-50 py-20">

// // // // // // // // // //           <div className="mx-auto max-w-7xl px-6">

// // // // // // // // // //             <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
// // // // // // // // // //               Continue Reading
// // // // // // // // // //             </p>

// // // // // // // // // //             <h2 className="mt-2 text-3xl font-bold text-gray-900">
// // // // // // // // // //               Related Aquaculture Insights
// // // // // // // // // //             </h2>


// // // // // // // // // //             <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

// // // // // // // // // //               {relatedPosts.map((blog) => (

// // // // // // // // // //                 <article
// // // // // // // // // //                   key={blog.slug}
// // // // // // // // // //                   className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
// // // // // // // // // //                 >

// // // // // // // // // //                   <div className="relative h-52">

// // // // // // // // // //                     <Image
// // // // // // // // // //                       src={blog.image}
// // // // // // // // // //                       alt={blog.title}
// // // // // // // // // //                       fill
// // // // // // // // // //                       className="object-cover transition duration-500 group-hover:scale-105"
// // // // // // // // // //                     />

// // // // // // // // // //                   </div>


// // // // // // // // // //                   <div className="p-6">

// // // // // // // // // //                     <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
// // // // // // // // // //                       {blog.category}
// // // // // // // // // //                     </span>

// // // // // // // // // //                     <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-blue-700">
// // // // // // // // // //                       {blog.title}
// // // // // // // // // //                     </h3>

// // // // // // // // // //                     <p className="mt-3 line-clamp-3 text-gray-600">
// // // // // // // // // //                       {blog.description}
// // // // // // // // // //                     </p>

// // // // // // // // // //                     <Link
// // // // // // // // // //                       href={`/blog/${blog.slug}`}
// // // // // // // // // //                       className="mt-6 inline-flex font-semibold text-blue-700"
// // // // // // // // // //                     >
// // // // // // // // // //                       Read Article →
// // // // // // // // // //                     </Link>

// // // // // // // // // //                   </div>

// // // // // // // // // //                 </article>

// // // // // // // // // //               ))}

// // // // // // // // // //             </div>

// // // // // // // // // //           </div>

// // // // // // // // // //         </section>

// // // // // // // // // //       )}

// // // // // // // // // //     </main>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // import type { Metadata } from "next";
// // // // // // // // // import Image from "next/image";
// // // // // // // // // import Link from "next/link";
// // // // // // // // // import { notFound } from "next/navigation";

// // // // // // // // // import { blogs, getBlogBySlug } from "@/data/blogs";

// // // // // // // // // type BlogPostPageProps = {
// // // // // // // // //   params: Promise<{
// // // // // // // // //     slug: string;
// // // // // // // // //   }>;
// // // // // // // // // };

// // // // // // // // // export async function generateMetadata({
// // // // // // // // //   params,
// // // // // // // // // }: BlogPostPageProps): Promise<Metadata> {
// // // // // // // // //   const { slug } = await params;

// // // // // // // // //   const post = getBlogBySlug(slug);

// // // // // // // // //   if (!post) {
// // // // // // // // //     return {
// // // // // // // // //       title: "Blog | Innovare Biopharma",
// // // // // // // // //       description: "Aquaculture insights from Innovare Biopharma.",
// // // // // // // // //     };
// // // // // // // // //   }

// // // // // // // // //   return {
// // // // // // // // //     title: `${post.title} | Innovare Biopharma`,
// // // // // // // // //     description: post.description,

// // // // // // // // //     openGraph: {
// // // // // // // // //       title: post.title,
// // // // // // // // //       description: post.description,
// // // // // // // // //       type: "article",
// // // // // // // // //       images: [
// // // // // // // // //         {
// // // // // // // // //           url: post.image,
// // // // // // // // //           alt: post.title,
// // // // // // // // //         },
// // // // // // // // //       ],
// // // // // // // // //     },
// // // // // // // // //   };
// // // // // // // // // }

// // // // // // // // // export default async function BlogPostPage({
// // // // // // // // //   params,
// // // // // // // // // }: BlogPostPageProps) {
// // // // // // // // //   const { slug } = await params;

// // // // // // // // //   const post = getBlogBySlug(slug);

// // // // // // // // //   if (!post) {
// // // // // // // // //     notFound();
// // // // // // // // //   }

// // // // // // // // //   const relatedPosts = blogs
// // // // // // // // //     .filter(
// // // // // // // // //       (blog) =>
// // // // // // // // //         blog.category === post.category &&
// // // // // // // // //         blog.slug !== post.slug
// // // // // // // // //     )
// // // // // // // // //     .slice(0, 3);

// // // // // // // // //   return (
// // // // // // // // //     <main className="bg-white text-slate-900">

// // // // // // // // //       {/* ==========================================
// // // // // // // // //           HERO
// // // // // // // // //       ========================================== */}

// // // // // // // // //       <section className="relative min-h-[620px] overflow-hidden">

// // // // // // // // //         <Image
// // // // // // // // //           src={post.image}
// // // // // // // // //           alt={post.title}
// // // // // // // // //           fill
// // // // // // // // //           priority
// // // // // // // // //           className="object-cover"
// // // // // // // // //         />

// // // // // // // // //         {/* Overlay */}

// // // // // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-[#041a33]/95 via-[#062f59]/80 to-[#062f59]/20" />

// // // // // // // // //         <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20">

// // // // // // // // //           <div className="max-w-3xl">

// // // // // // // // //             <Link
// // // // // // // // //               href="/blog"
// // // // // // // // //               className="mb-8 inline-flex text-sm font-medium text-blue-200 transition hover:text-white"
// // // // // // // // //             >
// // // // // // // // //               ← Aquaculture Insights
// // // // // // // // //             </Link>

// // // // // // // // //             <div>
// // // // // // // // //               <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur">
// // // // // // // // //                 {post.category}
// // // // // // // // //               </span>
// // // // // // // // //             </div>

// // // // // // // // //             <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-white md:text-5xl lg:text-6xl">
// // // // // // // // //               {post.title}
// // // // // // // // //             </h1>

// // // // // // // // //             <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
// // // // // // // // //               {post.description}
// // // // // // // // //             </p>

// // // // // // // // //             <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-blue-200">
// // // // // // // // //               <span>{post.date}</span>
// // // // // // // // //               <span className="opacity-50">•</span>
// // // // // // // // //               <span>{post.readTime}</span>
// // // // // // // // //               <span className="opacity-50">•</span>
// // // // // // // // //               <span>Innovare Biopharma</span>
// // // // // // // // //             </div>

// // // // // // // // //           </div>

// // // // // // // // //         </div>

// // // // // // // // //       </section>


// // // // // // // // //       {/* ==========================================
// // // // // // // // //           ARTICLE INTRO
// // // // // // // // //       ========================================== */}

// // // // // // // // //       <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[260px_minmax(0,1fr)]">

// // // // // // // // //         {/* TOC */}

// // // // // // // // //         <aside className="hidden lg:block">

// // // // // // // // //           <div className="sticky top-28">

// // // // // // // // //             <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
// // // // // // // // //               In this article
// // // // // // // // //             </p>

// // // // // // // // //             <div className="mt-5 h-px bg-gray-200" />

// // // // // // // // //             <nav className="mt-5 space-y-4">

// // // // // // // // //               {post.content.map((section, index) => (
// // // // // // // // //                 <a
// // // // // // // // //                   key={index}
// // // // // // // // //                   href={`#section-${index}`}
// // // // // // // // //                   className="block border-l-2 border-gray-200 pl-4 text-sm leading-6 text-gray-500 transition hover:border-blue-600 hover:text-blue-700"
// // // // // // // // //                 >
// // // // // // // // //                   {section.heading}
// // // // // // // // //                 </a>
// // // // // // // // //               ))}

// // // // // // // // //               <a
// // // // // // // // //                 href="#faq"
// // // // // // // // //                 className="block border-l-2 border-gray-200 pl-4 text-sm text-gray-500 transition hover:border-blue-600 hover:text-blue-700"
// // // // // // // // //               >
// // // // // // // // //                 Frequently Asked Questions
// // // // // // // // //               </a>

// // // // // // // // //             </nav>

// // // // // // // // //           </div>

// // // // // // // // //         </aside>


// // // // // // // // //         {/* MAIN ARTICLE */}

// // // // // // // // //         <article className="max-w-4xl">

// // // // // // // // //           {/* Intro */}

// // // // // // // // //           <div className="max-w-3xl">

// // // // // // // // //             <p className="text-xl leading-9 text-slate-700">
// // // // // // // // //               Maintaining stable water quality is one of the most important
// // // // // // // // //               requirements for successful shrimp farming.
// // // // // // // // //             </p>

// // // // // // // // //             <p className="mt-6 text-[17px] leading-8 text-slate-600">
// // // // // // // // //               Water-quality problems can influence feeding behaviour,
// // // // // // // // //               shrimp health and overall production performance.
// // // // // // // // //               Understanding how ammonia develops and how pond conditions
// // // // // // // // //               influence its behaviour is essential for effective management.
// // // // // // // // //             </p>

// // // // // // // // //           </div>


// // // // // // // // //           {/* KEY TAKEAWAY */}

// // // // // // // // //           <div className="mt-10 border-l-4 border-blue-600 bg-blue-50 px-7 py-6">

// // // // // // // // //             <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
// // // // // // // // //               Key takeaway
// // // // // // // // //             </p>

// // // // // // // // //             <p className="mt-3 text-lg leading-8 text-slate-800">
// // // // // // // // //               Ammonia management should combine regular monitoring,
// // // // // // // // //               responsible feeding, aeration, pond-bottom management and
// // // // // // // // //               appropriate microbial support.
// // // // // // // // //             </p>

// // // // // // // // //           </div>


// // // // // // // // //           {/* ==========================================
// // // // // // // // //               CONTENT SECTIONS
// // // // // // // // //           ========================================== */}

// // // // // // // // //           {post.content.map((section, index) => {

// // // // // // // // //             const reverse = index % 2 !== 0;

// // // // // // // // //             return (
// // // // // // // // //               <section
// // // // // // // // //                 key={index}
// // // // // // // // //                 id={`section-${index}`}
// // // // // // // // //                 className="scroll-mt-28 py-16"
// // // // // // // // //               >

// // // // // // // // //                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
// // // // // // // // //                   0{index + 1}
// // // // // // // // //                 </p>

// // // // // // // // //                 <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
// // // // // // // // //                   {section.heading}
// // // // // // // // //                 </h2>

// // // // // // // // //                 {section.image ? (

// // // // // // // // //                   <div
// // // // // // // // //                     className={`mt-10 grid items-center gap-10 lg:grid-cols-2 ${
// // // // // // // // //                       reverse ? "lg:[&>*:first-child]:order-2" : ""
// // // // // // // // //                     }`}
// // // // // // // // //                   >

// // // // // // // // //                     {/* IMAGE */}

// // // // // // // // //                     <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">

// // // // // // // // //                       <Image
// // // // // // // // //                         src={section.image}
// // // // // // // // //                         alt={section.heading}
// // // // // // // // //                         fill
// // // // // // // // //                         className="object-cover"
// // // // // // // // //                       />

// // // // // // // // //                     </div>


// // // // // // // // //                     {/* TEXT */}

// // // // // // // // //                     <div className="space-y-5">

// // // // // // // // //                       {section.paragraphs.map(
// // // // // // // // //                         (paragraph, paragraphIndex) => (
// // // // // // // // //                           <p
// // // // // // // // //                             key={paragraphIndex}
// // // // // // // // //                             className="text-[17px] leading-8 text-slate-600"
// // // // // // // // //                           >
// // // // // // // // //                             {paragraph}
// // // // // // // // //                           </p>
// // // // // // // // //                         )
// // // // // // // // //                       )}

// // // // // // // // //                     </div>

// // // // // // // // //                   </div>

// // // // // // // // //                 ) : (

// // // // // // // // //                   <div className="mt-7 max-w-3xl space-y-5">

// // // // // // // // //                     {section.paragraphs.map(
// // // // // // // // //                       (paragraph, paragraphIndex) => (
// // // // // // // // //                         <p
// // // // // // // // //                           key={paragraphIndex}
// // // // // // // // //                           className="text-[17px] leading-8 text-slate-600"
// // // // // // // // //                         >
// // // // // // // // //                           {paragraph}
// // // // // // // // //                         </p>
// // // // // // // // //                       )
// // // // // // // // //                     )}

// // // // // // // // //                   </div>

// // // // // // // // //                 )}

// // // // // // // // //               </section>
// // // // // // // // //             );
// // // // // // // // //           })}


// // // // // // // // //           {/* ==========================================
// // // // // // // // //               MANAGEMENT BAND
// // // // // // // // //           ========================================== */}

// // // // // // // // //           <section className="my-12 rounded-[28px] bg-[#eef6fb] p-8 md:p-10">

// // // // // // // // //             <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
// // // // // // // // //               Practical Management
// // // // // // // // //             </p>

// // // // // // // // //             <h2 className="mt-3 max-w-2xl text-3xl font-bold text-slate-900">
// // // // // // // // //               Focus on prevention, not only correction
// // // // // // // // //             </h2>

// // // // // // // // //             <div className="mt-10 grid gap-8 md:grid-cols-3">

// // // // // // // // //               <div>
// // // // // // // // //                 <span className="text-3xl font-bold text-blue-700">
// // // // // // // // //                   01
// // // // // // // // //                 </span>

// // // // // // // // //                 <h3 className="mt-3 font-bold text-slate-900">
// // // // // // // // //                   Monitor
// // // // // // // // //                 </h3>

// // // // // // // // //                 <p className="mt-2 text-sm leading-6 text-slate-600">
// // // // // // // // //                   Track ammonia together with pH, temperature,
// // // // // // // // //                   dissolved oxygen and related parameters.
// // // // // // // // //                 </p>
// // // // // // // // //               </div>

// // // // // // // // //               <div>
// // // // // // // // //                 <span className="text-3xl font-bold text-blue-700">
// // // // // // // // //                   02
// // // // // // // // //                 </span>

// // // // // // // // //                 <h3 className="mt-3 font-bold text-slate-900">
// // // // // // // // //                   Manage
// // // // // // // // //                 </h3>

// // // // // // // // //                 <p className="mt-2 text-sm leading-6 text-slate-600">
// // // // // // // // //                   Control feeding, aeration and pond-bottom
// // // // // // // // //                   organic loading consistently.
// // // // // // // // //                 </p>
// // // // // // // // //               </div>

// // // // // // // // //               <div>
// // // // // // // // //                 <span className="text-3xl font-bold text-blue-700">
// // // // // // // // //                   03
// // // // // // // // //                 </span>

// // // // // // // // //                 <h3 className="mt-3 font-bold text-slate-900">
// // // // // // // // //                   Prevent
// // // // // // // // //                 </h3>

// // // // // // // // //                 <p className="mt-2 text-sm leading-6 text-slate-600">
// // // // // // // // //                   Identify developing problems early before they
// // // // // // // // //                   affect shrimp performance.
// // // // // // // // //                 </p>
// // // // // // // // //               </div>

// // // // // // // // //             </div>

// // // // // // // // //           </section>


// // // // // // // // //           {/* ==========================================
// // // // // // // // //               INNOVARE CTA
// // // // // // // // //           ========================================== */}

// // // // // // // // //           <section className="my-20 overflow-hidden rounded-[30px] bg-[#052f5f]">

// // // // // // // // //             <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

// // // // // // // // //               <div className="flex flex-col justify-center p-8 text-white md:p-12">

// // // // // // // // //                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
// // // // // // // // //                   Innovare Biopharma
// // // // // // // // //                 </p>

// // // // // // // // //                 <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
// // // // // // // // //                   Supporting Better
// // // // // // // // //                   <br />
// // // // // // // // //                   Water-Quality Management
// // // // // // // // //                 </h2>

// // // // // // // // //                 <p className="mt-5 max-w-xl leading-7 text-blue-100">
// // // // // // // // //                   Explore Innovare Biopharma&apos;s aquaculture solutions
// // // // // // // // //                   designed to support modern pond management and
// // // // // // // // //                   water-quality programs.
// // // // // // // // //                 </p>

// // // // // // // // //                 <Link
// // // // // // // // //                   href="/products"
// // // // // // // // //                   className="mt-8 inline-flex w-fit items-center rounded-full bg-white px-7 py-3.5 font-semibold text-[#052f5f] transition hover:bg-blue-50"
// // // // // // // // //                 >
// // // // // // // // //                   Explore Solutions
// // // // // // // // //                   <span className="ml-3">→</span>
// // // // // // // // //                 </Link>

// // // // // // // // //               </div>


// // // // // // // // //               <div className="relative min-h-[340px]">

// // // // // // // // //                 <Image
// // // // // // // // //                   src="/images/blog/water-quality-solutions.webp"
// // // // // // // // //                   alt="Innovare aquaculture water quality solutions"
// // // // // // // // //                   fill
// // // // // // // // //                   className="object-cover"
// // // // // // // // //                 />

// // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-r from-[#052f5f]/40 to-transparent lg:hidden" />

// // // // // // // // //               </div>

// // // // // // // // //             </div>

// // // // // // // // //           </section>


// // // // // // // // //           {/* ==========================================
// // // // // // // // //               FAQ
// // // // // // // // //           ========================================== */}

// // // // // // // // //           <section
// // // // // // // // //             id="faq"
// // // // // // // // //             className="scroll-mt-28 py-10"
// // // // // // // // //           >

// // // // // // // // //             <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
// // // // // // // // //               Common Questions
// // // // // // // // //             </p>

// // // // // // // // //             <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
// // // // // // // // //               Frequently Asked Questions
// // // // // // // // //             </h2>

// // // // // // // // //             <div className="mt-10 space-y-4">

// // // // // // // // //               <details className="group rounded-2xl border border-gray-200 bg-white p-6">

// // // // // // // // //                 <summary className="cursor-pointer list-none font-semibold text-slate-900">
// // // // // // // // //                   What causes ammonia to increase in shrimp ponds?
// // // // // // // // //                 </summary>

// // // // // // // // //                 <p className="mt-4 leading-7 text-slate-600">
// // // // // // // // //                   Common contributors include uneaten feed,
// // // // // // // // //                   metabolic waste, decomposing plankton and
// // // // // // // // //                   accumulated organic matter.
// // // // // // // // //                 </p>

// // // // // // // // //               </details>


// // // // // // // // //               <details className="group rounded-2xl border border-gray-200 bg-white p-6">

// // // // // // // // //                 <summary className="cursor-pointer list-none font-semibold text-slate-900">
// // // // // // // // //                   Why does pH affect ammonia toxicity?
// // // // // // // // //                 </summary>

// // // // // // // // //                 <p className="mt-4 leading-7 text-slate-600">
// // // // // // // // //                   Higher pH can increase the proportion of ammonia
// // // // // // // // //                   present in the more toxic un-ionized NH3 form.
// // // // // // // // //                 </p>

// // // // // // // // //               </details>


// // // // // // // // //               <details className="group rounded-2xl border border-gray-200 bg-white p-6">

// // // // // // // // //                 <summary className="cursor-pointer list-none font-semibold text-slate-900">
// // // // // // // // //                   Can probiotics support ammonia management?
// // // // // // // // //                 </summary>

// // // // // // // // //                 <p className="mt-4 leading-7 text-slate-600">
// // // // // // // // //                   Selected beneficial microorganisms may support
// // // // // // // // //                   organic-matter degradation and nutrient cycling
// // // // // // // // //                   as part of a broader management program.
// // // // // // // // //                 </p>

// // // // // // // // //               </details>

// // // // // // // // //             </div>

// // // // // // // // //           </section>

// // // // // // // // //         </article>

// // // // // // // // //       </section>


// // // // // // // // //       {/* ==========================================
// // // // // // // // //           RELATED
// // // // // // // // //       ========================================== */}

// // // // // // // // //       {relatedPosts.length > 0 && (

// // // // // // // // //         <section className="border-t border-gray-100 bg-[#f7fafc] py-20">

// // // // // // // // //           <div className="mx-auto max-w-7xl px-6">

// // // // // // // // //             <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">

// // // // // // // // //               <div>
// // // // // // // // //                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
// // // // // // // // //                   Continue Learning
// // // // // // // // //                 </p>

// // // // // // // // //                 <h2 className="mt-3 text-3xl font-bold text-slate-900">
// // // // // // // // //                   Related Aquaculture Insights
// // // // // // // // //                 </h2>
// // // // // // // // //               </div>

// // // // // // // // //               <Link
// // // // // // // // //                 href="/blog"
// // // // // // // // //                 className="font-semibold text-blue-700"
// // // // // // // // //               >
// // // // // // // // //                 View all articles →
// // // // // // // // //               </Link>

// // // // // // // // //             </div>


// // // // // // // // //             <div className="mt-10 grid gap-8 md:grid-cols-3">

// // // // // // // // //               {relatedPosts.map((blog) => (

// // // // // // // // //                 <Link
// // // // // // // // //                   key={blog.slug}
// // // // // // // // //                   href={`/blog/${blog.slug}`}
// // // // // // // // //                   className="group"
// // // // // // // // //                 >

// // // // // // // // //                   <article>

// // // // // // // // //                     <div className="relative aspect-[16/10] overflow-hidden rounded-[20px]">

// // // // // // // // //                       <Image
// // // // // // // // //                         src={blog.image}
// // // // // // // // //                         alt={blog.title}
// // // // // // // // //                         fill
// // // // // // // // //                         className="object-cover transition duration-500 group-hover:scale-105"
// // // // // // // // //                       />

// // // // // // // // //                     </div>

// // // // // // // // //                     <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-blue-700">
// // // // // // // // //                       {blog.category}
// // // // // // // // //                     </p>

// // // // // // // // //                     <h3 className="mt-2 text-xl font-bold leading-snug text-slate-900 transition group-hover:text-blue-700">
// // // // // // // // //                       {blog.title}
// // // // // // // // //                     </h3>

// // // // // // // // //                     <p className="mt-3 text-sm leading-6 text-slate-600">
// // // // // // // // //                       {blog.description}
// // // // // // // // //                     </p>

// // // // // // // // //                   </article>

// // // // // // // // //                 </Link>

// // // // // // // // //               ))}

// // // // // // // // //             </div>

// // // // // // // // //           </div>

// // // // // // // // //         </section>

// // // // // // // // //       )}

// // // // // // // // //     </main>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // import type { Metadata } from "next";
// // // // // // // // import Image from "next/image";
// // // // // // // // import Link from "next/link";
// // // // // // // // import { notFound } from "next/navigation";

// // // // // // // // import { blogs, getBlogBySlug } from "@/data/blogs";

// // // // // // // // type BlogPostPageProps = {
// // // // // // // //   params: Promise<{
// // // // // // // //     slug: string;
// // // // // // // //   }>;
// // // // // // // // };

// // // // // // // // /* =====================================================
// // // // // // // //    SEO METADATA
// // // // // // // // ===================================================== */

// // // // // // // // export async function generateMetadata({
// // // // // // // //   params,
// // // // // // // // }: BlogPostPageProps): Promise<Metadata> {
// // // // // // // //   const { slug } = await params;

// // // // // // // //   const post = getBlogBySlug(slug);

// // // // // // // //   if (!post) {
// // // // // // // //     return {
// // // // // // // //       title: "Aquaculture Insights | Innovare Biopharma",
// // // // // // // //       description:
// // // // // // // //         "Explore aquaculture insights, shrimp health, water quality, nutrition and pond management from Innovare Biopharma.",
// // // // // // // //     };
// // // // // // // //   }

// // // // // // // //   const url = `https://www.innovarebiopharma.com/blog/${post.slug}`;

// // // // // // // //   return {
// // // // // // // //     title: post.metaTitle,
// // // // // // // //     description: post.description,

// // // // // // // //     alternates: {
// // // // // // // //       canonical: url,
// // // // // // // //     },

// // // // // // // //     openGraph: {
// // // // // // // //       title: post.metaTitle,
// // // // // // // //       description: post.description,
// // // // // // // //       url,
// // // // // // // //       type: "article",
// // // // // // // //       publishedTime: post.dateISO,
// // // // // // // //       modifiedTime: post.modifiedISO || post.dateISO,

// // // // // // // //       images: [
// // // // // // // //         {
// // // // // // // //           url: post.image,
// // // // // // // //           width: 1200,
// // // // // // // //           height: 630,
// // // // // // // //           alt: post.title,
// // // // // // // //         },
// // // // // // // //       ],
// // // // // // // //     },

// // // // // // // //     twitter: {
// // // // // // // //       card: "summary_large_image",
// // // // // // // //       title: post.metaTitle,
// // // // // // // //       description: post.description,
// // // // // // // //       images: [post.image],
// // // // // // // //     },
// // // // // // // //   };
// // // // // // // // }

// // // // // // // // /* =====================================================
// // // // // // // //    PAGE
// // // // // // // // ===================================================== */

// // // // // // // // export default async function BlogPostPage({
// // // // // // // //   params,
// // // // // // // // }: BlogPostPageProps) {
// // // // // // // //   const { slug } = await params;

// // // // // // // //   const post = getBlogBySlug(slug);

// // // // // // // //   if (!post) {
// // // // // // // //     notFound();
// // // // // // // //   }

// // // // // // // //   const currentURL = `https://www.innovarebiopharma.com/blog/${post.slug}`;

// // // // // // // //   const relatedPosts = blogs
// // // // // // // //     .filter(
// // // // // // // //       (blog) =>
// // // // // // // //         blog.category === post.category &&
// // // // // // // //         blog.slug !== post.slug
// // // // // // // //     )
// // // // // // // //     .slice(0, 3);

// // // // // // // //   /* =====================================================
// // // // // // // //      ARTICLE SCHEMA
// // // // // // // //   ===================================================== */

// // // // // // // //   const articleSchema = {
// // // // // // // //     "@context": "https://schema.org",
// // // // // // // //     "@type": "Article",

// // // // // // // //     headline: post.title,
// // // // // // // //     description: post.description,

// // // // // // // //     image: [
// // // // // // // //       `https://www.innovarebiopharma.com${post.image}`,
// // // // // // // //     ],

// // // // // // // //     datePublished: post.dateISO,

// // // // // // // //     dateModified:
// // // // // // // //       post.modifiedISO || post.dateISO,

// // // // // // // //     author: {
// // // // // // // //       "@type": "Organization",
// // // // // // // //       name: "Innovare Biopharma",
// // // // // // // //     },

// // // // // // // //     publisher: {
// // // // // // // //       "@type": "Organization",
// // // // // // // //       name: "Innovare Biopharma",
// // // // // // // //       url: "https://www.innovarebiopharma.com",
// // // // // // // //     },

// // // // // // // //     mainEntityOfPage: currentURL,
// // // // // // // //   };

// // // // // // // //   /* =====================================================
// // // // // // // //      FAQ SCHEMA
// // // // // // // //   ===================================================== */

// // // // // // // //   const faqSchema = {
// // // // // // // //     "@context": "https://schema.org",
// // // // // // // //     "@type": "FAQPage",

// // // // // // // //     mainEntity: (post.faq ?? []).map((item) => ({
// // // // // // // //   "@type": "Question",

// // // // // // // //   name: item.question,

// // // // // // // //   acceptedAnswer: {
// // // // // // // //     "@type": "Answer",
// // // // // // // //     text: item.answer,
// // // // // // // //   },
// // // // // // // // })),
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <main className="bg-white text-slate-900">

// // // // // // // //       {/* ==================================================
// // // // // // // //           STRUCTURED DATA
// // // // // // // //       ================================================== */}

// // // // // // // //       <script
// // // // // // // //         type="application/ld+json"
// // // // // // // //         dangerouslySetInnerHTML={{
// // // // // // // //           __html: JSON.stringify(articleSchema),
// // // // // // // //         }}
// // // // // // // //       />

// // // // // // // //       <script
// // // // // // // //         type="application/ld+json"
// // // // // // // //         dangerouslySetInnerHTML={{
// // // // // // // //           __html: JSON.stringify(faqSchema),
// // // // // // // //         }}
// // // // // // // //       />


// // // // // // // //       {/* ==================================================
// // // // // // // //           HERO SECTION
// // // // // // // //       ================================================== */}

// // // // // // // //       <header className="relative min-h-[620px] overflow-hidden lg:min-h-[680px]">

// // // // // // // //         <Image
// // // // // // // //           src={post.image}
// // // // // // // //           alt={post.title}
// // // // // // // //           fill
// // // // // // // //           priority
// // // // // // // //           sizes="100vw"
// // // // // // // //           className="object-cover"
// // // // // // // //         />

// // // // // // // //         {/* Gradient overlay */}

// // // // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-[#03192f] via-[#052f5f]/90 to-[#052f5f]/20" />

// // // // // // // //         <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20 lg:min-h-[680px]">

// // // // // // // //           <div className="max-w-[780px]">

// // // // // // // //             {/* Breadcrumb */}

// // // // // // // //             <nav
// // // // // // // //               aria-label="Breadcrumb"
// // // // // // // //               className="mb-9 flex flex-wrap items-center gap-2 text-sm text-blue-200"
// // // // // // // //             >
// // // // // // // //               <Link
// // // // // // // //                 href="/"
// // // // // // // //                 className="transition hover:text-white"
// // // // // // // //               >
// // // // // // // //                 Home
// // // // // // // //               </Link>

// // // // // // // //               <span>/</span>

// // // // // // // //               <Link
// // // // // // // //                 href="/blog"
// // // // // // // //                 className="transition hover:text-white"
// // // // // // // //               >
// // // // // // // //                 Insights
// // // // // // // //               </Link>

// // // // // // // //               <span>/</span>

// // // // // // // //               <span className="text-white">
// // // // // // // //                 {post.category}
// // // // // // // //               </span>
// // // // // // // //             </nav>


// // // // // // // //             {/* Category */}

// // // // // // // //             <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-blue-100 backdrop-blur-sm">
// // // // // // // //               {post.category}
// // // // // // // //             </span>


// // // // // // // //             {/* H1 */}

// // // // // // // //             <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[64px]">
// // // // // // // //               {post.title}
// // // // // // // //             </h1>


// // // // // // // //             {/* Description */}

// // // // // // // //             <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
// // // // // // // //               {post.description}
// // // // // // // //             </p>


// // // // // // // //             {/* Metadata */}

// // // // // // // //             <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-blue-200">

// // // // // // // //               <span>
// // // // // // // //                 {post.date}
// // // // // // // //               </span>

// // // // // // // //               <span className="opacity-50">
// // // // // // // //                 •
// // // // // // // //               </span>

// // // // // // // //               <span>
// // // // // // // //                 {post.readTime}
// // // // // // // //               </span>

// // // // // // // //               <span className="opacity-50">
// // // // // // // //                 •
// // // // // // // //               </span>

// // // // // // // //               <span>
// // // // // // // //                 Innovare Biopharma
// // // // // // // //               </span>

// // // // // // // //             </div>

// // // // // // // //           </div>

// // // // // // // //         </div>

// // // // // // // //       </header>


// // // // // // // //       {/* ==================================================
// // // // // // // //           ARTICLE WRAPPER
// // // // // // // //       ================================================== */}

// // // // // // // //       <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[250px_minmax(0,820px)] lg:justify-center lg:py-20">


// // // // // // // //         {/* ==================================================
// // // // // // // //             TABLE OF CONTENTS
// // // // // // // //         ================================================== */}

// // // // // // // //         <aside className="hidden lg:block">

// // // // // // // //           <div className="sticky top-28">

// // // // // // // //             <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0968c5]">
// // // // // // // //               In this article
// // // // // // // //             </p>

// // // // // // // //             <div className="mt-5 h-px bg-slate-200" />


// // // // // // // //             <nav className="mt-6 space-y-4">

// // // // // // // //               {post.sections.map((section) => (

// // // // // // // //                 <a
// // // // // // // //                   key={section.id}
// // // // // // // //                   href={`#${section.id}`}
// // // // // // // //                   className="block border-l-2 border-slate-200 pl-4 text-sm leading-6 text-slate-500 transition-all hover:border-[#0968c5] hover:text-[#0968c5]"
// // // // // // // //                 >
// // // // // // // //                   {section.heading}
// // // // // // // //                 </a>

// // // // // // // //               ))}


// // // // // // // //               <a
// // // // // // // //                 href="#faq"
// // // // // // // //                 className="block border-l-2 border-slate-200 pl-4 text-sm leading-6 text-slate-500 transition-all hover:border-[#0968c5] hover:text-[#0968c5]"
// // // // // // // //               >
// // // // // // // //                 Frequently Asked Questions
// // // // // // // //               </a>

// // // // // // // //             </nav>

// // // // // // // //           </div>

// // // // // // // //         </aside>


// // // // // // // //         {/* ==================================================
// // // // // // // //             MAIN ARTICLE
// // // // // // // //         ================================================== */}

// // // // // // // //         <article className="min-w-0">

// // // // // // // //           {/* ==================================================
// // // // // // // //               INTRODUCTION
// // // // // // // //           ================================================== */}

// // // // // // // //           <section>

// // // // // // // //             <p className="text-xl font-medium leading-9 text-slate-700 md:text-[21px]">
// // // // // // // //               {post.introduction[0]}
// // // // // // // //             </p>

// // // // // // // //             {post.introduction.slice(1).map(
// // // // // // // //               (paragraph, index) => (
// // // // // // // //                 <p
// // // // // // // //                   key={index}
// // // // // // // //                   className="mt-6 text-[17px] leading-8 text-slate-600"
// // // // // // // //                 >
// // // // // // // //                   {paragraph}
// // // // // // // //                 </p>
// // // // // // // //               )
// // // // // // // //             )}

// // // // // // // //           </section>


// // // // // // // //           {/* ==================================================
// // // // // // // //               KEY TAKEAWAY
// // // // // // // //           ================================================== */}

// // // // // // // //           <section className="my-12 overflow-hidden rounded-2xl border border-blue-100 bg-[#f2f8fd]">

// // // // // // // //             <div className="grid grid-cols-[6px_1fr]">

// // // // // // // //               <div className="bg-[#0b6fc6]" />

// // // // // // // //               <div className="p-7 md:p-8">

// // // // // // // //                 <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0968c5]">
// // // // // // // //                   Key Takeaway
// // // // // // // //                 </p>

// // // // // // // //                 <p className="mt-3 text-lg leading-8 text-slate-800">
// // // // // // // //                   Effective ammonia control in shrimp ponds
// // // // // // // //                   requires more than correcting a single test
// // // // // // // //                   result. Feed management, aeration, pond-bottom
// // // // // // // //                   management, water monitoring and biological
// // // // // // // //                   management should work together.
// // // // // // // //                 </p>

// // // // // // // //               </div>

// // // // // // // //             </div>

// // // // // // // //           </section>


// // // // // // // //           {/* ==================================================
// // // // // // // //               ARTICLE SECTIONS
// // // // // // // //           ================================================== */}

// // // // // // // //           {post.sections.map((section, index) => (

// // // // // // // //             <section
// // // // // // // //               key={section.id}
// // // // // // // //               id={section.id}
// // // // // // // //               className="scroll-mt-28 py-12"
// // // // // // // //             >

// // // // // // // //               {/* Section number */}

// // // // // // // //               <div className="flex items-center gap-4">

// // // // // // // //                 <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0872ce]">
// // // // // // // //                   {String(index + 1).padStart(2, "0")}
// // // // // // // //                 </span>

// // // // // // // //                 <div className="h-px flex-1 bg-slate-200" />

// // // // // // // //               </div>


// // // // // // // //               {/* Heading */}

// // // // // // // //               <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-[38px]">
// // // // // // // //                 {section.heading}
// // // // // // // //               </h2>


// // // // // // // //               {/* Image */}

// // // // // // // //               {section.image && (

// // // // // // // //                 <figure className="mt-8">

// // // // // // // //                   <div className="relative aspect-[16/9] overflow-hidden rounded-[22px] bg-slate-100">

// // // // // // // //                     <Image
// // // // // // // //                       src={section.image}
// // // // // // // //                       alt={
// // // // // // // //                         section.imageAlt ||
// // // // // // // //                         section.heading
// // // // // // // //                       }
// // // // // // // //                       fill
// // // // // // // //                       sizes="(max-width: 1024px) 100vw, 820px"
// // // // // // // //                       className="object-cover transition duration-500 hover:scale-[1.02]"
// // // // // // // //                     />

// // // // // // // //                   </div>


// // // // // // // //                   {section.imageAlt && (

// // // // // // // //                     <figcaption className="mt-3 text-sm leading-6 text-slate-500">
// // // // // // // //                       {section.imageAlt}
// // // // // // // //                     </figcaption>

// // // // // // // //                   )}

// // // // // // // //                 </figure>

// // // // // // // //               )}


// // // // // // // //               {/* Paragraphs */}

// // // // // // // //               <div className="mt-7 space-y-5">

// // // // // // // //                 {section.paragraphs.map(
// // // // // // // //                   (paragraph, paragraphIndex) => (

// // // // // // // //                     <p
// // // // // // // //                       key={paragraphIndex}
// // // // // // // //                       className="text-[17px] leading-[1.9] text-slate-600"
// // // // // // // //                     >
// // // // // // // //                       {paragraph}
// // // // // // // //                     </p>

// // // // // // // //                   )
// // // // // // // //                 )}

// // // // // // // //               </div>


// // // // // // // //               {/* Ammonia diagram */}

// // // // // // // //               {section.id === "what-is-ammonia" && (
// // // // // // // //                 <AmmoniaDiagram />
// // // // // // // //               )}


// // // // // // // //               {/* Causes visual */}

// // // // // // // //               {section.id === "causes-ammonia" && (
// // // // // // // //                 <CausesDiagram />
// // // // // // // //               )}


// // // // // // // //               {/* pH diagram */}

// // // // // // // //               {section.id === "ph-temperature" && (
// // // // // // // //                 <PHDiagram />
// // // // // // // //               )}


// // // // // // // //               {/* Monitoring visual */}

// // // // // // // //               {section.id === "monitoring" && (
// // // // // // // //                 <MonitoringDiagram />
// // // // // // // //               )}

// // // // // // // //             </section>

// // // // // // // //           ))}


// // // // // // // //           {/* ==================================================
// // // // // // // //               MANAGEMENT FRAMEWORK
// // // // // // // //           ================================================== */}

// // // // // // // //           <section className="my-14 rounded-[28px] bg-[#f1f7fb] p-8 md:p-10">

// // // // // // // //             <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0872ce]">
// // // // // // // //               Management Framework
// // // // // // // //             </span>


// // // // // // // //             <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-slate-900">
// // // // // // // //               A Prevention-First Approach to Shrimp Pond Water Quality
// // // // // // // //             </h2>


// // // // // // // //             <p className="mt-4 max-w-2xl leading-7 text-slate-600">
// // // // // // // //               Stable aquaculture production depends on identifying
// // // // // // // //               developing water-quality problems early and managing
// // // // // // // //               the factors contributing to them.
// // // // // // // //             </p>


// // // // // // // //             <div className="mt-10 grid gap-8 md:grid-cols-3">

// // // // // // // //               <ManagementItem
// // // // // // // //                 number="01"
// // // // // // // //                 title="Monitor"
// // // // // // // //                 text="Measure important pond parameters consistently and follow changes over time."
// // // // // // // //               />

// // // // // // // //               <ManagementItem
// // // // // // // //                 number="02"
// // // // // // // //                 title="Manage"
// // // // // // // //                 text="Control feeding, oxygen availability, organic loading and pond-bottom conditions."
// // // // // // // //               />

// // // // // // // //               <ManagementItem
// // // // // // // //                 number="03"
// // // // // // // //                 title="Respond"
// // // // // // // //                 text="Choose corrective actions according to actual pond measurements and culture conditions."
// // // // // // // //               />

// // // // // // // //             </div>

// // // // // // // //           </section>


// // // // // // // //           {/* ==================================================
// // // // // // // //               WATER QUALITY CTA
// // // // // // // //           ================================================== */}

// // // // // // // //           <section className="my-20 overflow-hidden rounded-[30px] bg-[#052f5f]">

// // // // // // // //             <div className="grid md:grid-cols-[1.15fr_0.85fr]">

// // // // // // // //               {/* Text */}

// // // // // // // //               <div className="flex flex-col justify-center p-8 md:p-11">

// // // // // // // //                 <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">
// // // // // // // //                   Innovare Biopharma
// // // // // // // //                 </span>


// // // // // // // //                 <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
// // // // // // // //                   Supporting Modern Water-Quality Management
// // // // // // // //                 </h2>


// // // // // // // //                 <p className="mt-5 max-w-xl leading-7 text-blue-100">
// // // // // // // //                   Explore Innovare Biopharma&apos;s aquaculture
// // // // // // // //                   solutions designed to support modern pond
// // // // // // // //                   management and water-quality programs.
// // // // // // // //                 </p>


// // // // // // // //                 <Link
// // // // // // // //                   href="/products"
// // // // // // // //                   className="mt-8 inline-flex w-fit items-center rounded-full bg-white px-7 py-3.5 font-semibold text-[#052f5f] transition hover:bg-blue-50"
// // // // // // // //                 >
// // // // // // // //                   Explore Water Quality Solutions

// // // // // // // //                   <span className="ml-3">
// // // // // // // //                     →
// // // // // // // //                   </span>
// // // // // // // //                 </Link>

// // // // // // // //               </div>


// // // // // // // //               {/* Image */}

// // // // // // // //               <div className="relative min-h-[300px] md:min-h-[360px]">

// // // // // // // //                 <Image
// // // // // // // //                   src="/images/blog/water-quality-solutions.webp"
// // // // // // // //                   alt="Innovare Biopharma aquaculture water quality solutions"
// // // // // // // //                   fill
// // // // // // // //                   sizes="(max-width: 768px) 100vw, 400px"
// // // // // // // //                   className="object-cover"
// // // // // // // //                 />

// // // // // // // //               </div>

// // // // // // // //             </div>

// // // // // // // //           </section>


// // // // // // // //           {/* ==================================================
// // // // // // // //               FAQ
// // // // // // // //           ================================================== */}

// // // // // // // //           <section
// // // // // // // //             id="faq"
// // // // // // // //             className="scroll-mt-28 py-12"
// // // // // // // //           >

// // // // // // // //             <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0872ce]">
// // // // // // // //               Frequently Asked Questions
// // // // // // // //             </span>


// // // // // // // //             <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-[38px]">
// // // // // // // //               Questions About Ammonia in Shrimp Farming
// // // // // // // //             </h2>


// // // // // // // //             <div className="mt-9 divide-y divide-slate-200 border-y border-slate-200">

// // // // // // // //              {(post.faq ?? []).map((item, index) => (

// // // // // // // //                 <details
// // // // // // // //                   key={index}
// // // // // // // //                   className="group py-6"
// // // // // // // //                 >

// // // // // // // //                   <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[17px] font-semibold text-slate-900">

// // // // // // // //                     <span>
// // // // // // // //                       {item.question}
// // // // // // // //                     </span>

// // // // // // // //                     <span className="text-2xl font-light text-[#0872ce] transition-transform group-open:rotate-45">
// // // // // // // //                       +
// // // // // // // //                     </span>

// // // // // // // //                   </summary>


// // // // // // // //                   <p className="mt-4 max-w-3xl leading-8 text-slate-600">
// // // // // // // //                     {item.answer}
// // // // // // // //                   </p>

// // // // // // // //                 </details>

// // // // // // // //               ))}

// // // // // // // //             </div>

// // // // // // // //           </section>


// // // // // // // //           {/* ==================================================
// // // // // // // //               DISCLAIMER / REFERENCES
// // // // // // // //           ================================================== */}

// // // // // // // //           <section className="mt-10 border-t border-slate-200 pt-8">

// // // // // // // //             <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
// // // // // // // //               Technical Note
// // // // // // // //             </p>


// // // // // // // //             <p className="mt-4 text-sm leading-7 text-slate-500">
// // // // // // // //               Water-quality decisions should be based on actual
// // // // // // // //               pond measurements, culture species, stocking density,
// // // // // // // //               culture stage and farm conditions. Product use should
// // // // // // // //               follow the relevant technical guidance and application
// // // // // // // //               recommendations.
// // // // // // // //             </p>

// // // // // // // //           </section>


// // // // // // // //           {/* Back */}

// // // // // // // //           <div className="mt-10">

// // // // // // // //             <Link
// // // // // // // //               href="/blog"
// // // // // // // //               className="inline-flex items-center font-semibold text-[#0872ce] transition hover:text-[#052f5f]"
// // // // // // // //             >
// // // // // // // //               ← View All Aquaculture Insights
// // // // // // // //             </Link>

// // // // // // // //           </div>

// // // // // // // //         </article>

// // // // // // // //       </div>


// // // // // // // //       {/* ==================================================
// // // // // // // //           RELATED ARTICLES
// // // // // // // //       ================================================== */}

// // // // // // // //       {relatedPosts.length > 0 && (

// // // // // // // //         <section className="border-t border-slate-100 bg-[#f7fafc] py-20">

// // // // // // // //           <div className="mx-auto max-w-7xl px-6">

// // // // // // // //             <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

// // // // // // // //               <div>

// // // // // // // //                 <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0872ce]">
// // // // // // // //                   Continue Learning
// // // // // // // //                 </span>

// // // // // // // //                 <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
// // // // // // // //                   Related Aquaculture Insights
// // // // // // // //                 </h2>

// // // // // // // //               </div>


// // // // // // // //               <Link
// // // // // // // //                 href="/blog"
// // // // // // // //                 className="font-semibold text-[#0872ce]"
// // // // // // // //               >
// // // // // // // //                 View All Insights →
// // // // // // // //               </Link>

// // // // // // // //             </div>


// // // // // // // //             <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

// // // // // // // //               {relatedPosts.map((blog) => (

// // // // // // // //                 <Link
// // // // // // // //                   href={`/blog/${blog.slug}`}
// // // // // // // //                   key={blog.slug}
// // // // // // // //                   className="group"
// // // // // // // //                 >

// // // // // // // //                   <article>

// // // // // // // //                     <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-slate-100">

// // // // // // // //                       <Image
// // // // // // // //                         src={blog.image}
// // // // // // // //                         alt={blog.title}
// // // // // // // //                         fill
// // // // // // // //                         sizes="(max-width: 768px) 100vw, 400px"
// // // // // // // //                         className="object-cover transition duration-500 group-hover:scale-105"
// // // // // // // //                       />

// // // // // // // //                     </div>


// // // // // // // //                     <span className="mt-5 block text-xs font-bold uppercase tracking-[0.15em] text-[#0872ce]">
// // // // // // // //                       {blog.category}
// // // // // // // //                     </span>


// // // // // // // //                     <h3 className="mt-2 text-xl font-bold leading-snug text-slate-900 transition group-hover:text-[#0872ce]">
// // // // // // // //                       {blog.title}
// // // // // // // //                     </h3>


// // // // // // // //                     <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
// // // // // // // //                       {blog.description}
// // // // // // // //                     </p>


// // // // // // // //                     <span className="mt-5 inline-flex items-center text-sm font-semibold text-[#0872ce]">
// // // // // // // //                       Read Article
// // // // // // // //                       <span className="ml-2 transition-transform group-hover:translate-x-1">
// // // // // // // //                         →
// // // // // // // //                       </span>
// // // // // // // //                     </span>

// // // // // // // //                   </article>

// // // // // // // //                 </Link>

// // // // // // // //               ))}

// // // // // // // //             </div>

// // // // // // // //           </div>

// // // // // // // //         </section>

// // // // // // // //       )}

// // // // // // // //     </main>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // // /* =====================================================
// // // // // // // //    AMMONIA DIAGRAM
// // // // // // // // ===================================================== */

// // // // // // // // function AmmoniaDiagram() {
// // // // // // // //   return (
// // // // // // // //     <div className="mt-10 rounded-[24px] border border-slate-200 bg-white p-7 md:p-9">

// // // // // // // //       <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

// // // // // // // //         <div>

// // // // // // // //           <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // // // // //             Understanding Ammonia
// // // // // // // //           </p>

// // // // // // // //           <h3 className="mt-2 text-2xl font-bold text-slate-900">
// // // // // // // //             Two Forms of Ammonia in Pond Water
// // // // // // // //           </h3>

// // // // // // // //           <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
// // // // // // // //             Total ammonia includes ionized ammonium and
// // // // // // // //             un-ionized ammonia.
// // // // // // // //           </p>

// // // // // // // //         </div>


// // // // // // // //         <div className="flex items-center gap-3 sm:gap-5">

// // // // // // // //           <div className="rounded-2xl bg-emerald-50 px-5 py-5 text-center sm:px-7">

// // // // // // // //             <span className="text-2xl font-bold text-emerald-700">
// // // // // // // //               NH₄⁺
// // // // // // // //             </span>

// // // // // // // //             <p className="mt-2 text-xs text-slate-500">
// // // // // // // //               Ammonium
// // // // // // // //             </p>

// // // // // // // //           </div>


// // // // // // // //           <span className="text-3xl text-slate-400">
// // // // // // // //             ⇌
// // // // // // // //           </span>


// // // // // // // //           <div className="rounded-2xl bg-amber-50 px-5 py-5 text-center sm:px-7">

// // // // // // // //             <span className="text-2xl font-bold text-amber-700">
// // // // // // // //               NH₃
// // // // // // // //             </span>

// // // // // // // //             <p className="mt-2 text-xs text-slate-500">
// // // // // // // //               Un-ionized
// // // // // // // //             </p>

// // // // // // // //           </div>

// // // // // // // //         </div>

// // // // // // // //       </div>


// // // // // // // //       <div className="mt-8 rounded-xl bg-slate-50 p-5">

// // // // // // // //         <p className="text-sm leading-6 text-slate-600">
// // // // // // // //           <strong className="text-slate-900">
// // // // // // // //             Important:
// // // // // // // //           </strong>{" "}
// // // // // // // //           Increasing pH and temperature can increase the
// // // // // // // //           proportion of total ammonia present as un-ionized NH₃.
// // // // // // // //         </p>

// // // // // // // //       </div>

// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // // /* =====================================================
// // // // // // // //    CAUSES DIAGRAM
// // // // // // // // ===================================================== */

// // // // // // // // function CausesDiagram() {
// // // // // // // //   const causes = [
// // // // // // // //     {
// // // // // // // //       number: "01",
// // // // // // // //       title: "Uneaten Feed",
// // // // // // // //       text: "Excess feed increases organic and nitrogen loading.",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       number: "02",
// // // // // // // //       title: "Metabolic Waste",
// // // // // // // //       text: "Shrimp naturally release nitrogen-containing waste.",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       number: "03",
// // // // // // // //       title: "Organic Matter",
// // // // // // // //       text: "Dead plankton and waste decompose in the pond.",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       number: "04",
// // // // // // // //       title: "High Biomass",
// // // // // // // //       text: "Greater biomass generally increases feeding and waste production.",
// // // // // // // //     },
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <div className="mt-10">

// // // // // // // //       <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // // // // //         Common Contributors
// // // // // // // //       </p>


// // // // // // // //       <div className="grid gap-4 sm:grid-cols-2">

// // // // // // // //         {causes.map((cause) => (

// // // // // // // //           <div
// // // // // // // //             key={cause.number}
// // // // // // // //             className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
// // // // // // // //           >

// // // // // // // //             <span className="text-sm font-bold text-[#0872ce]">
// // // // // // // //               {cause.number}
// // // // // // // //             </span>

// // // // // // // //             <h4 className="mt-3 text-lg font-bold text-slate-900">
// // // // // // // //               {cause.title}
// // // // // // // //             </h4>

// // // // // // // //             <p className="mt-2 text-sm leading-6 text-slate-600">
// // // // // // // //               {cause.text}
// // // // // // // //             </p>

// // // // // // // //           </div>

// // // // // // // //         ))}

// // // // // // // //       </div>

// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // // /* =====================================================
// // // // // // // //    PH / TEMPERATURE DIAGRAM
// // // // // // // // ===================================================== */

// // // // // // // // function PHDiagram() {
// // // // // // // //   return (
// // // // // // // //     <div className="mt-10 overflow-hidden rounded-[24px] bg-[#052f5f] p-7 text-white md:p-9">

// // // // // // // //       <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
// // // // // // // //         Ammonia Toxicity
// // // // // // // //       </p>


// // // // // // // //       <h3 className="mt-3 text-2xl font-bold">
// // // // // // // //         Why Pond Conditions Matter
// // // // // // // //       </h3>


// // // // // // // //       <div className="mt-8 grid gap-5 md:grid-cols-3">

// // // // // // // //         <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

// // // // // // // //           <span className="text-3xl">
// // // // // // // //             ↑
// // // // // // // //           </span>

// // // // // // // //           <h4 className="mt-4 font-semibold">
// // // // // // // //             Higher pH
// // // // // // // //           </h4>

// // // // // // // //           <p className="mt-2 text-sm leading-6 text-blue-100">
// // // // // // // //             Can increase the proportion of ammonia
// // // // // // // //             present as NH₃.
// // // // // // // //           </p>

// // // // // // // //         </div>


// // // // // // // //         <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

// // // // // // // //           <span className="text-3xl">
// // // // // // // //             ↑
// // // // // // // //           </span>

// // // // // // // //           <h4 className="mt-4 font-semibold">
// // // // // // // //             Higher Temperature
// // // // // // // //           </h4>

// // // // // // // //           <p className="mt-2 text-sm leading-6 text-blue-100">
// // // // // // // //             Also influences the NH₄⁺ and NH₃ balance.
// // // // // // // //           </p>

// // // // // // // //         </div>


// // // // // // // //         <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

// // // // // // // //           <span className="text-3xl">
// // // // // // // //             !
// // // // // // // //           </span>

// // // // // // // //           <h4 className="mt-4 font-semibold">
// // // // // // // //             Interpret Together
// // // // // // // //           </h4>

// // // // // // // //           <p className="mt-2 text-sm leading-6 text-blue-100">
// // // // // // // //             TAN results should be considered with
// // // // // // // //             pH and temperature.
// // // // // // // //           </p>

// // // // // // // //         </div>

// // // // // // // //       </div>

// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // // /* =====================================================
// // // // // // // //    MONITORING DIAGRAM
// // // // // // // // ===================================================== */

// // // // // // // // function MonitoringDiagram() {
// // // // // // // //   const parameters = [
// // // // // // // //     "Ammonia",
// // // // // // // //     "pH",
// // // // // // // //     "Temperature",
// // // // // // // //     "Dissolved Oxygen",
// // // // // // // //     "Nitrite",
// // // // // // // //     "Alkalinity",
// // // // // // // //     "Salinity",
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <div className="mt-10 rounded-[24px] border border-blue-100 bg-[#f2f8fd] p-7 md:p-9">

// // // // // // // //       <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // // // // //         Water Quality Monitoring
// // // // // // // //       </p>


// // // // // // // //       <h3 className="mt-3 max-w-xl text-2xl font-bold text-slate-900">
// // // // // // // //         Evaluate the Complete Pond Environment
// // // // // // // //       </h3>


// // // // // // // //       <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
// // // // // // // //         Ammonia should be interpreted alongside other
// // // // // // // //         parameters affecting shrimp and pond conditions.
// // // // // // // //       </p>


// // // // // // // //       <div className="mt-7 flex flex-wrap gap-3">

// // // // // // // //         {parameters.map((parameter) => (

// // // // // // // //           <span
// // // // // // // //             key={parameter}
// // // // // // // //             className="rounded-full border border-blue-100 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm"
// // // // // // // //           >
// // // // // // // //             {parameter}
// // // // // // // //           </span>

// // // // // // // //         ))}

// // // // // // // //       </div>

// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // // /* =====================================================
// // // // // // // //    MANAGEMENT ITEM
// // // // // // // // ===================================================== */

// // // // // // // // function ManagementItem({
// // // // // // // //   number,
// // // // // // // //   title,
// // // // // // // //   text,
// // // // // // // // }: {
// // // // // // // //   number: string;
// // // // // // // //   title: string;
// // // // // // // //   text: string;
// // // // // // // // }) {
// // // // // // // //   return (
// // // // // // // //     <div>

// // // // // // // //       <span className="text-3xl font-bold text-[#0b6fc6]">
// // // // // // // //         {number}
// // // // // // // //       </span>

// // // // // // // //       <h3 className="mt-3 text-lg font-bold text-slate-900">
// // // // // // // //         {title}
// // // // // // // //       </h3>

// // // // // // // //       <p className="mt-2 text-sm leading-6 text-slate-600">
// // // // // // // //         {text}
// // // // // // // //       </p>

// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // import type { Metadata } from "next";
// // // // // // // import Image from "next/image";
// // // // // // // import Link from "next/link";
// // // // // // // import { notFound } from "next/navigation";

// // // // // // // import {
// // // // // // //   blogs,
// // // // // // //   getBlogBySlug,
// // // // // // // } from "@/data/blogs";

// // // // // // // type BlogPostPageProps = {
// // // // // // //   params: Promise<{
// // // // // // //     slug: string;
// // // // // // //   }>;
// // // // // // // };

// // // // // // // /* ======================================================
// // // // // // //    SEO METADATA
// // // // // // // ====================================================== */

// // // // // // // export async function generateMetadata({
// // // // // // //   params,
// // // // // // // }: BlogPostPageProps): Promise<Metadata> {
// // // // // // //   const { slug } = await params;

// // // // // // //   const post = getBlogBySlug(slug);

// // // // // // //   if (!post) {
// // // // // // //     return {
// // // // // // //       title:
// // // // // // //         "Aquaculture Insights | Innovare Biopharma",

// // // // // // //       description:
// // // // // // //         "Explore aquaculture insights on shrimp health, water quality, probiotics, nutrition and pond management.",
// // // // // // //     };
// // // // // // //   }

// // // // // // //   const pageURL =
// // // // // // //     `https://www.innovarebiopharma.com/blog/${post.slug}`;

// // // // // // //   return {
// // // // // // //     title: post.metaTitle,

// // // // // // //     description: post.description,

// // // // // // //     alternates: {
// // // // // // //       canonical: pageURL,
// // // // // // //     },

// // // // // // //     openGraph: {
// // // // // // //       title: post.metaTitle,
// // // // // // //       description: post.description,
// // // // // // //       url: pageURL,

// // // // // // //       type: "article",

// // // // // // //       publishedTime: post.dateISO,

// // // // // // //       modifiedTime:
// // // // // // //         post.modifiedISO ||
// // // // // // //         post.dateISO,

// // // // // // //       images: [
// // // // // // //         {
// // // // // // //           url: post.image,
// // // // // // //           width: 1200,
// // // // // // //           height: 630,
// // // // // // //           alt: post.title,
// // // // // // //         },
// // // // // // //       ],
// // // // // // //     },

// // // // // // //     twitter: {
// // // // // // //       card: "summary_large_image",
// // // // // // //       title: post.metaTitle,
// // // // // // //       description: post.description,
// // // // // // //       images: [post.image],
// // // // // // //     },
// // // // // // //   };
// // // // // // // }

// // // // // // // /* ======================================================
// // // // // // //    PAGE
// // // // // // // ====================================================== */

// // // // // // // export default async function BlogPostPage({
// // // // // // //   params,
// // // // // // // }: BlogPostPageProps) {
// // // // // // //   const { slug } = await params;

// // // // // // //   const post = getBlogBySlug(slug);

// // // // // // //   if (!post) {
// // // // // // //     notFound();
// // // // // // //   }

// // // // // // //   const currentURL =
// // // // // // //     `https://www.innovarebiopharma.com/blog/${post.slug}`;

// // // // // // //   const relatedPosts = blogs
// // // // // // //     .filter(
// // // // // // //       (blog) =>
// // // // // // //         blog.category ===
// // // // // // //           post.category &&
// // // // // // //         blog.slug !== post.slug
// // // // // // //     )
// // // // // // //     .slice(0, 3);

// // // // // // //   /* ====================================================
// // // // // // //      ARTICLE SCHEMA
// // // // // // //   ==================================================== */

// // // // // // //   const articleSchema = {
// // // // // // //     "@context":
// // // // // // //       "https://schema.org",

// // // // // // //     "@type":
// // // // // // //       "Article",

// // // // // // //     headline:
// // // // // // //       post.title,

// // // // // // //     description:
// // // // // // //       post.description,

// // // // // // //     image: [
// // // // // // //       `https://www.innovarebiopharma.com${post.image}`,
// // // // // // //     ],

// // // // // // //     datePublished:
// // // // // // //       post.dateISO,

// // // // // // //     dateModified:
// // // // // // //       post.modifiedISO ||
// // // // // // //       post.dateISO,

// // // // // // //     author: {
// // // // // // //       "@type":
// // // // // // //         "Organization",

// // // // // // //       name:
// // // // // // //         post.author.name,
// // // // // // //     },

// // // // // // //     publisher: {
// // // // // // //       "@type":
// // // // // // //         "Organization",

// // // // // // //       name:
// // // // // // //         "Innovare Biopharma",

// // // // // // //       url:
// // // // // // //         "https://www.innovarebiopharma.com",
// // // // // // //     },

// // // // // // //     mainEntityOfPage:
// // // // // // //       currentURL,
// // // // // // //   };

// // // // // // //   /* ====================================================
// // // // // // //      FAQ SCHEMA
// // // // // // //   ==================================================== */

// // // // // // //   const faqSchema = {
// // // // // // //     "@context":
// // // // // // //       "https://schema.org",

// // // // // // //     "@type":
// // // // // // //       "FAQPage",

// // // // // // //     mainEntity:
// // // // // // //       post.faq.map(
// // // // // // //         (item) => ({
// // // // // // //           "@type":
// // // // // // //             "Question",

// // // // // // //           name:
// // // // // // //             item.question,

// // // // // // //           acceptedAnswer: {
// // // // // // //             "@type":
// // // // // // //               "Answer",

// // // // // // //             text:
// // // // // // //               item.answer,
// // // // // // //           },
// // // // // // //         })
// // // // // // //       ),
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <main className="bg-white text-slate-900">

// // // // // // //       {/* ================================================
// // // // // // //           STRUCTURED DATA
// // // // // // //       ================================================ */}

// // // // // // //       <script
// // // // // // //         type="application/ld+json"
// // // // // // //         dangerouslySetInnerHTML={{
// // // // // // //           __html:
// // // // // // //             JSON.stringify(
// // // // // // //               articleSchema
// // // // // // //             ),
// // // // // // //         }}
// // // // // // //       />

// // // // // // //       <script
// // // // // // //         type="application/ld+json"
// // // // // // //         dangerouslySetInnerHTML={{
// // // // // // //           __html:
// // // // // // //             JSON.stringify(
// // // // // // //               faqSchema
// // // // // // //             ),
// // // // // // //         }}
// // // // // // //       />


// // // // // // //       {/* ================================================
// // // // // // //           HERO
// // // // // // //       ================================================ */}

// // // // // // //       <header className="relative min-h-[650px] overflow-hidden">

// // // // // // //         <Image
// // // // // // //           src={post.image}
// // // // // // //           alt={post.title}
// // // // // // //           fill
// // // // // // //           priority
// // // // // // //           sizes="100vw"
// // // // // // //           className="object-cover"
// // // // // // //         />


// // // // // // //         {/* CORPORATE GRADIENT */}

// // // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-[#03182d] via-[#052f5f]/95 to-[#052f5f]/20" />


// // // // // // //         <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-20">

// // // // // // //           <div className="max-w-[790px]">


// // // // // // //             {/* BREADCRUMB */}

// // // // // // //             <nav
// // // // // // //               aria-label="Breadcrumb"
// // // // // // //               className="mb-10 flex flex-wrap items-center gap-2 text-sm text-blue-200"
// // // // // // //             >

// // // // // // //               <Link
// // // // // // //                 href="/"
// // // // // // //                 className="transition hover:text-white"
// // // // // // //               >
// // // // // // //                 Home
// // // // // // //               </Link>

// // // // // // //               <span>
// // // // // // //                 /
// // // // // // //               </span>

// // // // // // //               <Link
// // // // // // //                 href="/blog"
// // // // // // //                 className="transition hover:text-white"
// // // // // // //               >
// // // // // // //                 Insights
// // // // // // //               </Link>

// // // // // // //               <span>
// // // // // // //                 /
// // // // // // //               </span>

// // // // // // //               <span className="text-white">
// // // // // // //                 {post.category}
// // // // // // //               </span>

// // // // // // //             </nav>


// // // // // // //             {/* CATEGORY */}

// // // // // // //             <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100 backdrop-blur-sm">

// // // // // // //               {post.category}

// // // // // // //             </span>


// // // // // // //             {/* H1 */}

// // // // // // //             <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[64px]">

// // // // // // //               {post.title}

// // // // // // //             </h1>


// // // // // // //             {/* DESCRIPTION */}

// // // // // // //             <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">

// // // // // // //               {post.description}

// // // // // // //             </p>


// // // // // // //             {/* META */}

// // // // // // //             <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-blue-200">

// // // // // // //               <span>
// // // // // // //                 By {post.author.name}
// // // // // // //               </span>

// // // // // // //               <span className="opacity-50">
// // // // // // //                 •
// // // // // // //               </span>

// // // // // // //               <span>
// // // // // // //                 {post.date}
// // // // // // //               </span>

// // // // // // //               <span className="opacity-50">
// // // // // // //                 •
// // // // // // //               </span>

// // // // // // //               <span>
// // // // // // //                 {post.readTime}
// // // // // // //               </span>

// // // // // // //             </div>

// // // // // // //           </div>

// // // // // // //         </div>

// // // // // // //       </header>


// // // // // // //       {/* ================================================
// // // // // // //           ARTICLE CONTAINER
// // // // // // //       ================================================ */}

// // // // // // //       <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[250px_minmax(0,820px)] lg:justify-center lg:py-20">


// // // // // // //         {/* ================================================
// // // // // // //             TABLE OF CONTENTS
// // // // // // //         ================================================ */}

// // // // // // //         <aside className="hidden lg:block">

// // // // // // //           <div className="sticky top-28">

// // // // // // //             <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0872ce]">
// // // // // // //               In this article
// // // // // // //             </p>


// // // // // // //             <div className="mt-5 h-px bg-slate-200" />


// // // // // // //             <nav className="mt-6 space-y-4">

// // // // // // //               {post.sections.map(
// // // // // // //                 (section) => (

// // // // // // //                   <a
// // // // // // //                     key={
// // // // // // //                       section.id
// // // // // // //                     }
// // // // // // //                     href={`#${section.id}`}
// // // // // // //                     className="block border-l-2 border-slate-200 pl-4 text-sm leading-6 text-slate-500 transition hover:border-[#0872ce] hover:text-[#0872ce]"
// // // // // // //                   >

// // // // // // //                     {
// // // // // // //                       section.heading
// // // // // // //                     }

// // // // // // //                   </a>

// // // // // // //                 )
// // // // // // //               )}


// // // // // // //               <a
// // // // // // //                 href="#faq"
// // // // // // //                 className="block border-l-2 border-slate-200 pl-4 text-sm text-slate-500 transition hover:border-[#0872ce] hover:text-[#0872ce]"
// // // // // // //               >
// // // // // // //                 Frequently Asked Questions
// // // // // // //               </a>

// // // // // // //             </nav>

// // // // // // //           </div>

// // // // // // //         </aside>


// // // // // // //         {/* ================================================
// // // // // // //             MAIN ARTICLE
// // // // // // //         ================================================ */}

// // // // // // //         <article className="min-w-0">


// // // // // // //           {/* INTRO */}

// // // // // // //           <section>

// // // // // // //             <p className="text-xl font-medium leading-9 text-slate-700 md:text-[21px]">

// // // // // // //               {
// // // // // // //                 post
// // // // // // //                   .introduction[0]
// // // // // // //               }

// // // // // // //             </p>


// // // // // // //             {post.introduction
// // // // // // //               .slice(1)
// // // // // // //               .map(
// // // // // // //                 (
// // // // // // //                   paragraph,
// // // // // // //                   index
// // // // // // //                 ) => (

// // // // // // //                   <p
// // // // // // //                     key={
// // // // // // //                       index
// // // // // // //                     }
// // // // // // //                     className="mt-6 text-[17px] leading-8 text-slate-600"
// // // // // // //                   >
// // // // // // //                     {
// // // // // // //                       paragraph
// // // // // // //                     }
// // // // // // //                   </p>

// // // // // // //                 )
// // // // // // //               )}

// // // // // // //           </section>


// // // // // // //           {/* ==============================================
// // // // // // //               KEY TAKEAWAYS
// // // // // // //           ============================================== */}

// // // // // // //           <section className="my-12 overflow-hidden rounded-[24px] border border-blue-100 bg-[#f3f8fc]">

// // // // // // //             <div className="grid grid-cols-[6px_1fr]">

// // // // // // //               <div className="bg-[#0872ce]" />


// // // // // // //               <div className="p-7 md:p-9">

// // // // // // //                 <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // // // //                   Key Takeaways
// // // // // // //                 </span>


// // // // // // //                 <h2 className="mt-3 text-2xl font-bold text-slate-900">
// // // // // // //                   What Aquaculture Businesses Should Know
// // // // // // //                 </h2>


// // // // // // //                 <ul className="mt-6 space-y-4 text-[16px] leading-7 text-slate-700">

// // // // // // //                   <li className="flex gap-3">

// // // // // // //                     <span className="font-bold text-[#0872ce]">
// // // // // // //                       01
// // // // // // //                     </span>

// // // // // // //                     Ammonia exists mainly as NH4+ and NH3 in pond water.

// // // // // // //                   </li>


// // // // // // //                   <li className="flex gap-3">

// // // // // // //                     <span className="font-bold text-[#0872ce]">
// // // // // // //                       02
// // // // // // //                     </span>

// // // // // // //                     pH and temperature influence the proportion of toxic NH3.

// // // // // // //                   </li>


// // // // // // //                   <li className="flex gap-3">

// // // // // // //                     <span className="font-bold text-[#0872ce]">
// // // // // // //                       03
// // // // // // //                     </span>

// // // // // // //                     Feed, waste and organic matter can contribute to ammonia accumulation.

// // // // // // //                   </li>


// // // // // // //                   <li className="flex gap-3">

// // // // // // //                     <span className="font-bold text-[#0872ce]">
// // // // // // //                       04
// // // // // // //                     </span>

// // // // // // //                     Effective management combines monitoring, aeration, feeding and pond-bottom management.

// // // // // // //                   </li>

// // // // // // //                 </ul>

// // // // // // //               </div>

// // // // // // //             </div>

// // // // // // //           </section>


// // // // // // //           {/* ================================================
// // // // // // //               ARTICLE SECTIONS
// // // // // // //           ================================================ */}

// // // // // // //           {post.sections.map(
// // // // // // //             (
// // // // // // //               section,
// // // // // // //               index
// // // // // // //             ) => (

// // // // // // //               <section
// // // // // // //                 key={
// // // // // // //                   section.id
// // // // // // //                 }
// // // // // // //                 id={
// // // // // // //                   section.id
// // // // // // //                 }
// // // // // // //                 className="scroll-mt-28 py-12"
// // // // // // //               >

// // // // // // //                 {/* NUMBER */}

// // // // // // //                 <div className="flex items-center gap-4">

// // // // // // //                   <span className="text-xs font-bold tracking-[0.2em] text-[#0872ce]">

// // // // // // //                     {String(
// // // // // // //                       index +
// // // // // // //                         1
// // // // // // //                     ).padStart(
// // // // // // //                       2,
// // // // // // //                       "0"
// // // // // // //                     )}

// // // // // // //                   </span>


// // // // // // //                   <div className="h-px flex-1 bg-slate-200" />

// // // // // // //                 </div>


// // // // // // //                 {/* HEADING */}

// // // // // // //                 <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-[38px]">

// // // // // // //                   {
// // // // // // //                     section.heading
// // // // // // //                   }

// // // // // // //                 </h2>


// // // // // // //                 {/* IMAGE */}

// // // // // // //                 {section.image && (

// // // // // // //                   <figure className="mt-8">

// // // // // // //                     <div className="relative aspect-[16/9] overflow-hidden rounded-[22px] bg-slate-100">

// // // // // // //                       <Image
// // // // // // //                         src={
// // // // // // //                           section.image
// // // // // // //                         }
// // // // // // //                         alt={
// // // // // // //                           section.imageAlt ||
// // // // // // //                           section.heading
// // // // // // //                         }
// // // // // // //                         fill
// // // // // // //                         sizes="(max-width: 1024px) 100vw, 820px"
// // // // // // //                         className="object-cover"
// // // // // // //                       />

// // // // // // //                     </div>


// // // // // // //                     {section.imageAlt && (

// // // // // // //                       <figcaption className="mt-3 text-sm leading-6 text-slate-500">

// // // // // // //                         {
// // // // // // //                           section.imageAlt
// // // // // // //                         }

// // // // // // //                       </figcaption>

// // // // // // //                     )}

// // // // // // //                   </figure>

// // // // // // //                 )}


// // // // // // //                 {/* TEXT */}

// // // // // // //                 <div className="mt-7 space-y-5">

// // // // // // //                   {section.paragraphs.map(
// // // // // // //                     (
// // // // // // //                       paragraph,
// // // // // // //                       paragraphIndex
// // // // // // //                     ) => (

// // // // // // //                       <p
// // // // // // //                         key={
// // // // // // //                           paragraphIndex
// // // // // // //                         }
// // // // // // //                         className="text-[17px] leading-[1.9] text-slate-600"
// // // // // // //                       >

// // // // // // //                         {
// // // // // // //                           paragraph
// // // // // // //                         }

// // // // // // //                       </p>

// // // // // // //                     )
// // // // // // //                   )}

// // // // // // //                 </div>


// // // // // // //                 {/* SPECIAL VISUALS */}

// // // // // // //                 {section.id ===
// // // // // // //                   "what-is-ammonia" && (

// // // // // // //                   <AmmoniaDiagram />

// // // // // // //                 )}


// // // // // // //                 {section.id ===
// // // // // // //                   "causes-ammonia" && (

// // // // // // //                   <AmmoniaFormationDiagram />

// // // // // // //                 )}


// // // // // // //                 {section.id ===
// // // // // // //                   "ph-temperature" && (

// // // // // // //                   <PHRelationshipDiagram />

// // // // // // //                 )}


// // // // // // //                 {section.id ===
// // // // // // //                   "monitoring" && (

// // // // // // //                   <WaterQualityMatrix />

// // // // // // //                 )}


// // // // // // //                 {section.id ===
// // // // // // //                   "management" && (

// // // // // // //                   <ManagementFramework />

// // // // // // //                 )}

// // // // // // //               </section>

// // // // // // //             )
// // // // // // //           )}


// // // // // // //           {/* ================================================
// // // // // // //               INNOVARE CTA
// // // // // // //           ================================================ */}

// // // // // // //           <section className="my-20 overflow-hidden rounded-[30px] bg-[#052f5f]">

// // // // // // //             <div className="grid md:grid-cols-[1.15fr_0.85fr]">


// // // // // // //               <div className="flex flex-col justify-center p-8 md:p-11">

// // // // // // //                 <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">

// // // // // // //                   Innovare Biopharma

// // // // // // //                 </span>


// // // // // // //                 <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">

// // // // // // //                   Supporting Modern Water-Quality Management

// // // // // // //                 </h2>


// // // // // // //                 <p className="mt-5 max-w-xl leading-7 text-blue-100">

// // // // // // //                   Explore Innovare Biopharma&apos;s aquaculture solutions developed to support water-quality and pond-management programs.

// // // // // // //                 </p>


// // // // // // //                 <Link
// // // // // // //                   href="/products"
// // // // // // //                   className="mt-8 inline-flex w-fit items-center rounded-full bg-white px-7 py-3.5 font-semibold text-[#052f5f] transition hover:bg-blue-50"
// // // // // // //                 >

// // // // // // //                   Explore Water Quality Solutions

// // // // // // //                   <span className="ml-3">
// // // // // // //                     →
// // // // // // //                   </span>

// // // // // // //                 </Link>

// // // // // // //               </div>


// // // // // // //               <div className="relative min-h-[320px]">

// // // // // // //                 <Image
// // // // // // //                   src="/images/blog/water-quality-solutions.webp"
// // // // // // //                   alt="Innovare Biopharma aquaculture water quality solutions"
// // // // // // //                   fill
// // // // // // //                   sizes="(max-width: 768px) 100vw, 400px"
// // // // // // //                   className="object-cover"
// // // // // // //                 />

// // // // // // //               </div>

// // // // // // //             </div>

// // // // // // //           </section>


// // // // // // //           {/* ================================================
// // // // // // //               FAQ
// // // // // // //           ================================================ */}

// // // // // // //           <section
// // // // // // //             id="faq"
// // // // // // //             className="scroll-mt-28 py-12"
// // // // // // //           >

// // // // // // //             <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0872ce]">

// // // // // // //               Frequently Asked Questions

// // // // // // //             </span>


// // // // // // //             <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-[38px]">

// // // // // // //               Questions About Ammonia in Shrimp Farming

// // // // // // //             </h2>


// // // // // // //             <div className="mt-9 divide-y divide-slate-200 border-y border-slate-200">

// // // // // // //               {post.faq.map(
// // // // // // //                 (
// // // // // // //                   item,
// // // // // // //                   index
// // // // // // //                 ) => (

// // // // // // //                   <details
// // // // // // //                     key={
// // // // // // //                       index
// // // // // // //                     }
// // // // // // //                     className="group py-6"
// // // // // // //                   >

// // // // // // //                     <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-semibold text-slate-900">

// // // // // // //                       <span>
// // // // // // //                         {
// // // // // // //                           item.question
// // // // // // //                         }
// // // // // // //                       </span>


// // // // // // //                       <span className="text-2xl font-light text-[#0872ce] transition-transform group-open:rotate-45">
// // // // // // //                         +
// // // // // // //                       </span>

// // // // // // //                     </summary>


// // // // // // //                     <p className="mt-4 max-w-3xl leading-8 text-slate-600">

// // // // // // //                       {
// // // // // // //                         item.answer
// // // // // // //                       }

// // // // // // //                     </p>

// // // // // // //                   </details>

// // // // // // //                 )
// // // // // // //               )}

// // // // // // //             </div>

// // // // // // //           </section>


// // // // // // //           {/* ================================================
// // // // // // //               TECHNICAL NOTE
// // // // // // //           ================================================ */}

// // // // // // //           <section className="mt-10 border-t border-slate-200 pt-8">

// // // // // // //             <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
// // // // // // //               Technical Note
// // // // // // //             </span>


// // // // // // //             <p className="mt-4 text-sm leading-7 text-slate-500">

// // // // // // //               Water-quality decisions should be based on actual pond measurements, culture species, stocking density, biomass, culture stage and farm conditions. Aquaculture products should be used according to appropriate technical guidance and application recommendations.

// // // // // // //             </p>

// // // // // // //           </section>


// // // // // // //           {/* ================================================
// // // // // // //               AUTHOR
// // // // // // //           ================================================ */}

// // // // // // //           <section className="mt-16 border-t border-slate-200 pt-12">

// // // // // // //             <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // // // //               About the Author
// // // // // // //             </span>


// // // // // // //             <div className="mt-6 rounded-[24px] border border-slate-200 bg-[#f8fafc] p-7 md:p-9">

// // // // // // //               <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

// // // // // // //                 {/* LOGO STYLE AVATAR */}

// // // // // // //                 <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#052f5f] text-xl font-bold text-white">

// // // // // // //                   IB

// // // // // // //                 </div>


// // // // // // //                 <div>

// // // // // // //                   <h3 className="text-xl font-bold text-slate-900">

// // // // // // //                     {
// // // // // // //                       post.author
// // // // // // //                         .name
// // // // // // //                     }

// // // // // // //                   </h3>


// // // // // // //                   <p className="mt-1 text-sm font-semibold text-[#0872ce]">

// // // // // // //                     {
// // // // // // //                       post.author
// // // // // // //                         .role
// // // // // // //                     }

// // // // // // //                   </p>


// // // // // // //                   <p className="mt-4 max-w-3xl leading-7 text-slate-600">

// // // // // // //                     {
// // // // // // //                       post.author
// // // // // // //                         .bio
// // // // // // //                     }

// // // // // // //                   </p>

// // // // // // //                 </div>

// // // // // // //               </div>

// // // // // // //             </div>

// // // // // // //           </section>


// // // // // // //           {/* ================================================
// // // // // // //               PUBLISH INFORMATION
// // // // // // //           ================================================ */}

// // // // // // //           <section className="mt-10">

// // // // // // //             <p className="text-sm font-semibold text-slate-900">

// // // // // // //               Published on {post.date}

// // // // // // //             </p>


// // // // // // //             {post.modifiedDate && (

// // // // // // //               <p className="mt-1 text-sm text-slate-500">

// // // // // // //                 Last reviewed on {
// // // // // // //                   post.modifiedDate
// // // // // // //                 }

// // // // // // //               </p>

// // // // // // //             )}

// // // // // // //           </section>


// // // // // // //           {/* ================================================
// // // // // // //               TAGS
// // // // // // //           ================================================ */}

// // // // // // //           <section className="mt-10 border-t border-slate-200 pt-8">

// // // // // // //             <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
// // // // // // //               Topics
// // // // // // //             </span>


// // // // // // //             <div className="mt-4 flex flex-wrap gap-3">

// // // // // // //               {post.tags.map(
// // // // // // //                 (tag) => (

// // // // // // //                   <span
// // // // // // //                     key={
// // // // // // //                       tag
// // // // // // //                     }
// // // // // // //                     className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
// // // // // // //                   >

// // // // // // //                     {
// // // // // // //                       tag
// // // // // // //                     }

// // // // // // //                   </span>

// // // // // // //                 )
// // // // // // //               )}

// // // // // // //             </div>

// // // // // // //           </section>


// // // // // // //           {/* ================================================
// // // // // // //               SHARE
// // // // // // //           ================================================ */}

// // // // // // //           <section className="mt-10 border-t border-slate-200 pt-8">

// // // // // // //             <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

// // // // // // //               <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-700">

// // // // // // //                 Share Article

// // // // // // //               </span>


// // // // // // //               <div className="flex flex-wrap gap-3">


// // // // // // //                 <a
// // // // // // //                   href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
// // // // // // //                     currentURL
// // // // // // //                   )}`}
// // // // // // //                   target="_blank"
// // // // // // //                   rel="noopener noreferrer"
// // // // // // //                   className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#0872ce] hover:text-[#0872ce]"
// // // // // // //                 >
// // // // // // //                   LinkedIn
// // // // // // //                 </a>


// // // // // // //                 <a
// // // // // // //                   href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
// // // // // // //                     currentURL
// // // // // // //                   )}`}
// // // // // // //                   target="_blank"
// // // // // // //                   rel="noopener noreferrer"
// // // // // // //                   className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#0872ce] hover:text-[#0872ce]"
// // // // // // //                 >
// // // // // // //                   Facebook
// // // // // // //                 </a>


// // // // // // //                 <a
// // // // // // //                   href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
// // // // // // //                     currentURL
// // // // // // //                   )}&text=${encodeURIComponent(
// // // // // // //                     post.title
// // // // // // //                   )}`}
// // // // // // //                   target="_blank"
// // // // // // //                   rel="noopener noreferrer"
// // // // // // //                   className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#0872ce] hover:text-[#0872ce]"
// // // // // // //                 >
// // // // // // //                   X
// // // // // // //                 </a>


// // // // // // //                 <a
// // // // // // //                   href={`mailto:?subject=${encodeURIComponent(
// // // // // // //                     post.title
// // // // // // //                   )}&body=${encodeURIComponent(
// // // // // // //                     currentURL
// // // // // // //                   )}`}
// // // // // // //                   className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#0872ce] hover:text-[#0872ce]"
// // // // // // //                 >
// // // // // // //                   Email
// // // // // // //                 </a>

// // // // // // //               </div>

// // // // // // //             </div>

// // // // // // //           </section>


// // // // // // //           {/* BACK */}

// // // // // // //           <div className="mt-12">

// // // // // // //             <Link
// // // // // // //               href="/blog"
// // // // // // //               className="font-semibold text-[#0872ce] transition hover:text-[#052f5f]"
// // // // // // //             >
// // // // // // //               ← View All Aquaculture Insights
// // // // // // //             </Link>

// // // // // // //           </div>

// // // // // // //         </article>

// // // // // // //       </div>


// // // // // // //       {/* ================================================
// // // // // // //           RELATED POSTS
// // // // // // //       ================================================ */}

// // // // // // //       {relatedPosts.length >
// // // // // // //         0 && (

// // // // // // //         <section className="border-t border-slate-100 bg-[#f7fafc] py-20">

// // // // // // //           <div className="mx-auto max-w-7xl px-6">

// // // // // // //             <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

// // // // // // //               <div>

// // // // // // //                 <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0872ce]">

// // // // // // //                   Continue Learning

// // // // // // //                 </span>


// // // // // // //                 <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">

// // // // // // //                   Related Aquaculture Insights

// // // // // // //                 </h2>

// // // // // // //               </div>


// // // // // // //               <Link
// // // // // // //                 href="/blog"
// // // // // // //                 className="font-semibold text-[#0872ce]"
// // // // // // //               >
// // // // // // //                 View All Insights →
// // // // // // //               </Link>

// // // // // // //             </div>


// // // // // // //             <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

// // // // // // //               {relatedPosts.map(
// // // // // // //                 (blog) => (

// // // // // // //                   <Link
// // // // // // //                     href={`/blog/${blog.slug}`}
// // // // // // //                     key={
// // // // // // //                       blog.slug
// // // // // // //                     }
// // // // // // //                     className="group"
// // // // // // //                   >

// // // // // // //                     <article>

// // // // // // //                       <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-slate-100">

// // // // // // //                         <Image
// // // // // // //                           src={
// // // // // // //                             blog.image
// // // // // // //                           }
// // // // // // //                           alt={
// // // // // // //                             blog.title
// // // // // // //                           }
// // // // // // //                           fill
// // // // // // //                           sizes="(max-width: 768px) 100vw, 400px"
// // // // // // //                           className="object-cover transition duration-500 group-hover:scale-105"
// // // // // // //                         />

// // // // // // //                       </div>


// // // // // // //                       <span className="mt-5 block text-xs font-bold uppercase tracking-[0.15em] text-[#0872ce]">

// // // // // // //                         {
// // // // // // //                           blog.category
// // // // // // //                         }

// // // // // // //                       </span>


// // // // // // //                       <h3 className="mt-2 text-xl font-bold leading-snug text-slate-900 transition group-hover:text-[#0872ce]">

// // // // // // //                         {
// // // // // // //                           blog.title
// // // // // // //                         }

// // // // // // //                       </h3>


// // // // // // //                       <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">

// // // // // // //                         {
// // // // // // //                           blog.description
// // // // // // //                         }

// // // // // // //                       </p>


// // // // // // //                       <span className="mt-5 inline-flex text-sm font-semibold text-[#0872ce]">

// // // // // // //                         Read Article →

// // // // // // //                       </span>

// // // // // // //                     </article>

// // // // // // //                   </Link>

// // // // // // //                 )
// // // // // // //               )}

// // // // // // //             </div>

// // // // // // //           </div>

// // // // // // //         </section>

// // // // // // //       )}

// // // // // // //     </main>
// // // // // // //   );
// // // // // // // }


// // // // // // // /* ======================================================
// // // // // // //    AMMONIA CHEMISTRY DIAGRAM
// // // // // // // ====================================================== */

// // // // // // // function AmmoniaDiagram() {
// // // // // // //   return (
// // // // // // //     <div className="mt-10 rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm md:p-9">

// // // // // // //       <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0872ce]">

// // // // // // //         Ammonia Chemistry

// // // // // // //       </span>


// // // // // // //       <h3 className="mt-3 text-2xl font-bold text-slate-900">

// // // // // // //         NH₄⁺ and NH₃ Exist in Balance

// // // // // // //       </h3>


// // // // // // //       <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">

// // // // // // //         Total ammonia includes ionized ammonium and un-ionized ammonia.

// // // // // // //       </p>


// // // // // // //       <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row">


// // // // // // //         <div className="min-w-[180px] rounded-2xl bg-emerald-50 px-7 py-6 text-center">

// // // // // // //           <span className="text-3xl font-bold text-emerald-700">

// // // // // // //             NH₄⁺

// // // // // // //           </span>

// // // // // // //           <p className="mt-2 text-sm font-medium text-slate-700">

// // // // // // //             Ammonium

// // // // // // //           </p>

// // // // // // //           <p className="mt-1 text-xs text-slate-500">

// // // // // // //             Ionized form

// // // // // // //           </p>

// // // // // // //         </div>


// // // // // // //         <span className="text-4xl text-slate-400">

// // // // // // //           ⇌

// // // // // // //         </span>


// // // // // // //         <div className="min-w-[180px] rounded-2xl bg-amber-50 px-7 py-6 text-center">

// // // // // // //           <span className="text-3xl font-bold text-amber-700">

// // // // // // //             NH₃

// // // // // // //           </span>

// // // // // // //           <p className="mt-2 text-sm font-medium text-slate-700">

// // // // // // //             Ammonia

// // // // // // //           </p>

// // // // // // //           <p className="mt-1 text-xs text-slate-500">

// // // // // // //             Un-ionized form

// // // // // // //           </p>

// // // // // // //         </div>

// // // // // // //       </div>


// // // // // // //       <div className="mt-8 rounded-xl bg-[#f3f8fc] p-5">

// // // // // // //         <p className="text-sm leading-7 text-slate-700">

// // // // // // //           <strong>
// // // // // // //             Key relationship:
// // // // // // //           </strong>{" "}
// // // // // // //           Higher pH and temperature can increase the proportion of total ammonia present as un-ionized NH₃.

// // // // // // //         </p>

// // // // // // //       </div>

// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // // /* ======================================================
// // // // // // //    AMMONIA FORMATION FLOW
// // // // // // // ====================================================== */

// // // // // // // function AmmoniaFormationDiagram() {
// // // // // // //   const sources = [
// // // // // // //     "Uneaten Feed",
// // // // // // //     "Shrimp Waste",
// // // // // // //     "Dead Plankton",
// // // // // // //     "Organic Matter",
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <div className="mt-10 overflow-hidden rounded-[24px] bg-[#052f5f] p-7 md:p-9">

// // // // // // //       <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">

// // // // // // //         Ammonia Formation

// // // // // // //       </span>


// // // // // // //       <h3 className="mt-3 text-2xl font-bold text-white">

// // // // // // //         Where Can Pond Ammonia Come From?

// // // // // // //       </h3>


// // // // // // //       <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

// // // // // // //         {sources.map(
// // // // // // //           (
// // // // // // //             source,
// // // // // // //             index
// // // // // // //           ) => (

// // // // // // //             <div
// // // // // // //               key={
// // // // // // //                 source
// // // // // // //               }
// // // // // // //               className="rounded-2xl border border-white/10 bg-white/5 p-5"
// // // // // // //             >

// // // // // // //               <span className="text-xs font-bold text-sky-300">

// // // // // // //                 {String(
// // // // // // //                   index +
// // // // // // //                     1
// // // // // // //                 ).padStart(
// // // // // // //                   2,
// // // // // // //                   "0"
// // // // // // //                 )}

// // // // // // //               </span>


// // // // // // //               <p className="mt-3 font-semibold text-white">

// // // // // // //                 {
// // // // // // //                   source
// // // // // // //                 }

// // // // // // //               </p>

// // // // // // //             </div>

// // // // // // //           )
// // // // // // //         )}

// // // // // // //       </div>


// // // // // // //       {/* ARROW */}

// // // // // // //       <div className="my-6 text-center text-3xl text-sky-300">

// // // // // // //         ↓

// // // // // // //       </div>


// // // // // // //       <div className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center">

// // // // // // //         <p className="text-sm text-blue-100">

// // // // // // //           Microbial decomposition

// // // // // // //         </p>

// // // // // // //         <div className="my-3 text-2xl text-sky-300">

// // // // // // //           ↓

// // // // // // //         </div>

// // // // // // //         <p className="text-xl font-bold text-white">

// // // // // // //           Ammonia Load

// // // // // // //         </p>

// // // // // // //       </div>

// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // // /* ======================================================
// // // // // // //    PH / TEMPERATURE RELATIONSHIP
// // // // // // // ====================================================== */

// // // // // // // function PHRelationshipDiagram() {
// // // // // // //   return (
// // // // // // //     <div className="mt-10 rounded-[24px] border border-blue-100 bg-[#f3f8fc] p-7 md:p-9">

// // // // // // //       <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0872ce]">

// // // // // // //         Water Chemistry

// // // // // // //       </span>


// // // // // // //       <h3 className="mt-3 text-2xl font-bold text-slate-900">

// // // // // // //         Why Pond Conditions Change Ammonia Risk

// // // // // // //       </h3>


// // // // // // //       <div className="mt-8 grid gap-5 md:grid-cols-3">


// // // // // // //         <div className="rounded-2xl bg-white p-6 shadow-sm">

// // // // // // //           <span className="text-3xl font-bold text-[#0872ce]">

// // // // // // //             pH ↑

// // // // // // //           </span>

// // // // // // //           <h4 className="mt-4 font-bold text-slate-900">

// // // // // // //             Higher pH

// // // // // // //           </h4>

// // // // // // //           <p className="mt-2 text-sm leading-6 text-slate-600">

// // // // // // //             Can shift more total ammonia toward the NH₃ form.

// // // // // // //           </p>

// // // // // // //         </div>


// // // // // // //         <div className="rounded-2xl bg-white p-6 shadow-sm">

// // // // // // //           <span className="text-3xl font-bold text-[#0872ce]">

// // // // // // //             °C ↑

// // // // // // //           </span>

// // // // // // //           <h4 className="mt-4 font-bold text-slate-900">

// // // // // // //             Temperature

// // // // // // //           </h4>

// // // // // // //           <p className="mt-2 text-sm leading-6 text-slate-600">

// // // // // // //             Also influences the equilibrium between NH₄⁺ and NH₃.

// // // // // // //           </p>

// // // // // // //         </div>


// // // // // // //         <div className="rounded-2xl bg-[#052f5f] p-6">

// // // // // // //           <span className="text-3xl font-bold text-sky-300">

// // // // // // //             NH₃

// // // // // // //           </span>

// // // // // // //           <h4 className="mt-4 font-bold text-white">

// // // // // // //             Interpret Together

// // // // // // //           </h4>

// // // // // // //           <p className="mt-2 text-sm leading-6 text-blue-100">

// // // // // // //             TAN, pH and temperature should be considered together.

// // // // // // //           </p>

// // // // // // //         </div>

// // // // // // //       </div>

// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // // /* ======================================================
// // // // // // //    WATER QUALITY MATRIX
// // // // // // // ====================================================== */

// // // // // // // function WaterQualityMatrix() {
// // // // // // //   const parameters = [
// // // // // // //     {
// // // // // // //       name:
// // // // // // //         "Ammonia",
// // // // // // //       purpose:
// // // // // // //         "Evaluate nitrogen loading and ammonia conditions.",
// // // // // // //     },

// // // // // // //     {
// // // // // // //       name:
// // // // // // //         "pH",
// // // // // // //       purpose:
// // // // // // //         "Influences the proportion of un-ionized NH₃.",
// // // // // // //     },

// // // // // // //     {
// // // // // // //       name:
// // // // // // //         "Temperature",
// // // // // // //       purpose:
// // // // // // //         "Influences ammonia equilibrium and pond biology.",
// // // // // // //     },

// // // // // // //     {
// // // // // // //       name:
// // // // // // //         "Dissolved Oxygen",
// // // // // // //       purpose:
// // // // // // //         "Supports shrimp and important biological processes.",
// // // // // // //     },

// // // // // // //     {
// // // // // // //       name:
// // // // // // //         "Nitrite",
// // // // // // //       purpose:
// // // // // // //         "Important intermediate compound in the nitrogen cycle.",
// // // // // // //     },

// // // // // // //     {
// // // // // // //       name:
// // // // // // //         "Alkalinity",
// // // // // // //       purpose:
// // // // // // //         "Supports buffering capacity and pond stability.",
// // // // // // //     },

// // // // // // //     {
// // // // // // //       name:
// // // // // // //         "Salinity",
// // // // // // //       purpose:
// // // // // // //         "Important environmental parameter in shrimp culture.",
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <div className="mt-10 overflow-hidden rounded-[24px] border border-slate-200">

// // // // // // //       <div className="bg-[#052f5f] p-7 md:p-8">

// // // // // // //         <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">

// // // // // // //           Water Quality Monitoring

// // // // // // //         </span>


// // // // // // //         <h3 className="mt-3 text-2xl font-bold text-white">

// // // // // // //           Parameters to Evaluate Together

// // // // // // //         </h3>

// // // // // // //       </div>


// // // // // // //       <div className="divide-y divide-slate-100">

// // // // // // //         {parameters.map(
// // // // // // //           (
// // // // // // //             parameter,
// // // // // // //             index
// // // // // // //           ) => (

// // // // // // //             <div
// // // // // // //               key={
// // // // // // //                 parameter.name
// // // // // // //               }
// // // // // // //               className="grid gap-2 p-5 sm:grid-cols-[60px_180px_1fr] sm:items-center"
// // // // // // //             >

// // // // // // //               <span className="text-sm font-bold text-[#0872ce]">

// // // // // // //                 {String(
// // // // // // //                   index +
// // // // // // //                     1
// // // // // // //                 ).padStart(
// // // // // // //                   2,
// // // // // // //                   "0"
// // // // // // //                 )}

// // // // // // //               </span>


// // // // // // //               <span className="font-bold text-slate-900">

// // // // // // //                 {
// // // // // // //                   parameter.name
// // // // // // //                 }

// // // // // // //               </span>


// // // // // // //               <span className="text-sm leading-6 text-slate-600">

// // // // // // //                 {
// // // // // // //                   parameter.purpose
// // // // // // //                 }

// // // // // // //               </span>

// // // // // // //             </div>

// // // // // // //           )
// // // // // // //         )}

// // // // // // //       </div>

// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // // /* ======================================================
// // // // // // //    MANAGEMENT FRAMEWORK
// // // // // // // ====================================================== */

// // // // // // // function ManagementFramework() {
// // // // // // //   const steps = [
// // // // // // //     {
// // // // // // //       number: "01",
// // // // // // //       title: "Measure",
// // // // // // //       text:
// // // // // // //         "Monitor important water-quality parameters consistently.",
// // // // // // //     },

// // // // // // //     {
// // // // // // //       number: "02",
// // // // // // //       title: "Analyse",
// // // // // // //       text:
// // // // // // //         "Identify trends rather than relying only on isolated readings.",
// // // // // // //     },

// // // // // // //     {
// // // // // // //       number: "03",
// // // // // // //       title: "Manage",
// // // // // // //       text:
// // // // // // //         "Control feeding, aeration, organic loading and pond-bottom conditions.",
// // // // // // //     },

// // // // // // //     {
// // // // // // //       number: "04",
// // // // // // //       title: "Review",
// // // // // // //       text:
// // // // // // //         "Evaluate the response and continue monitoring pond conditions.",
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <div className="mt-10 rounded-[28px] bg-[#f2f7fb] p-7 md:p-10">

// // // // // // //       <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0872ce]">

// // // // // // //         Management Framework

// // // // // // //       </span>


// // // // // // //       <h3 className="mt-3 max-w-2xl text-2xl font-bold text-slate-900 md:text-3xl">

// // // // // // //         A Systematic Approach to Ammonia Management

// // // // // // //       </h3>


// // // // // // //       <div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

// // // // // // //         {steps.map(
// // // // // // //           (
// // // // // // //             step,
// // // // // // //             index
// // // // // // //           ) => (

// // // // // // //             <div
// // // // // // //               key={
// // // // // // //                 step.number
// // // // // // //               }
// // // // // // //               className="relative"
// // // // // // //             >

// // // // // // //               <span className="text-3xl font-bold text-[#0872ce]">

// // // // // // //                 {
// // // // // // //                   step.number
// // // // // // //                 }

// // // // // // //               </span>


// // // // // // //               <h4 className="mt-3 text-lg font-bold text-slate-900">

// // // // // // //                 {
// // // // // // //                   step.title
// // // // // // //                 }

// // // // // // //               </h4>


// // // // // // //               <p className="mt-2 text-sm leading-6 text-slate-600">

// // // // // // //                 {
// // // // // // //                   step.text
// // // // // // //                 }

// // // // // // //               </p>


// // // // // // //               {index <
// // // // // // //                 steps.length -
// // // // // // //                   1 && (

// // // // // // //                 <span className="absolute right-0 top-2 hidden text-xl text-slate-300 lg:block">

// // // // // // //                   →

// // // // // // //                 </span>

// // // // // // //               )}

// // // // // // //             </div>

// // // // // // //           )
// // // // // // //         )}

// // // // // // //       </div>

// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // import type { Metadata } from "next";
// // // // // // import Image from "next/image";
// // // // // // import Link from "next/link";
// // // // // // import { notFound } from "next/navigation";

// // // // // // import { blogs, getBlogBySlug } from "@/data/blogs";

// // // // // // type BlogPostPageProps = {
// // // // // //   params: Promise<{
// // // // // //     slug: string;
// // // // // //   }>;
// // // // // // };

// // // // // // /* =========================================================
// // // // // //    SEO
// // // // // // ========================================================= */

// // // // // // export async function generateMetadata({
// // // // // //   params,
// // // // // // }: BlogPostPageProps): Promise<Metadata> {
// // // // // //   const { slug } = await params;

// // // // // //   const post = getBlogBySlug(slug);

// // // // // //   if (!post) {
// // // // // //     return {
// // // // // //       title: "Aquaculture Insights | Innovare Biopharma",
// // // // // //     };
// // // // // //   }

// // // // // //   const pageURL = `https://www.innovarebiopharma.com/blog/${post.slug}`;

// // // // // //   return {
// // // // // //     title: post.metaTitle,
// // // // // //     description: post.description,

// // // // // //     alternates: {
// // // // // //       canonical: pageURL,
// // // // // //     },

// // // // // //     openGraph: {
// // // // // //       title: post.metaTitle,
// // // // // //       description: post.description,
// // // // // //       url: pageURL,
// // // // // //       type: "article",
// // // // // //       publishedTime: post.dateISO,
// // // // // //       modifiedTime: post.modifiedISO || post.dateISO,
// // // // // //       images: [
// // // // // //         {
// // // // // //           url: post.image,
// // // // // //           width: 1200,
// // // // // //           height: 630,
// // // // // //           alt: post.title,
// // // // // //         },
// // // // // //       ],
// // // // // //     },

// // // // // //     twitter: {
// // // // // //       card: "summary_large_image",
// // // // // //       title: post.metaTitle,
// // // // // //       description: post.description,
// // // // // //       images: [post.image],
// // // // // //     },
// // // // // //   };
// // // // // // }

// // // // // // /* =========================================================
// // // // // //    PAGE
// // // // // // ========================================================= */

// // // // // // export default async function BlogPostPage({
// // // // // //   params,
// // // // // // }: BlogPostPageProps) {
// // // // // //   const { slug } = await params;

// // // // // //   const post = getBlogBySlug(slug);

// // // // // //   if (!post) {
// // // // // //     notFound();
// // // // // //   }

// // // // // //   const currentURL = `https://www.innovarebiopharma.com/blog/${post.slug}`;

// // // // // //   const relatedPosts = blogs
// // // // // //     .filter(
// // // // // //       (blog) =>
// // // // // //         blog.category === post.category && blog.slug !== post.slug
// // // // // //     )
// // // // // //     .slice(0, 3);

// // // // // //   /* ================= SCHEMA ================= */

// // // // // //   const articleSchema = {
// // // // // //     "@context": "https://schema.org",
// // // // // //     "@type": "Article",

// // // // // //     headline: post.title,
// // // // // //     description: post.description,

// // // // // //     image: [
// // // // // //       `https://www.innovarebiopharma.com${post.image}`,
// // // // // //     ],

// // // // // //     datePublished: post.dateISO,
// // // // // //     dateModified: post.modifiedISO || post.dateISO,

// // // // // //     author: {
// // // // // //       "@type": "Organization",
// // // // // //       name: post.author.name,
// // // // // //     },

// // // // // //     publisher: {
// // // // // //       "@type": "Organization",
// // // // // //       name: "Innovare Biopharma",
// // // // // //       url: "https://www.innovarebiopharma.com",
// // // // // //     },

// // // // // //     mainEntityOfPage: currentURL,
// // // // // //   };

// // // // // //   const faqSchema = {
// // // // // //     "@context": "https://schema.org",
// // // // // //     "@type": "FAQPage",

// // // // // //     mainEntity: post.faq.map((item) => ({
// // // // // //       "@type": "Question",
// // // // // //       name: item.question,

// // // // // //       acceptedAnswer: {
// // // // // //         "@type": "Answer",
// // // // // //         text: item.answer,
// // // // // //       },
// // // // // //     })),
// // // // // //   };

// // // // // //   return (
// // // // // //     <main className="bg-white text-slate-900">

// // // // // //       {/* ===================================================
// // // // // //           SCHEMA
// // // // // //       =================================================== */}

// // // // // //       <script
// // // // // //         type="application/ld+json"
// // // // // //         dangerouslySetInnerHTML={{
// // // // // //           __html: JSON.stringify(articleSchema),
// // // // // //         }}
// // // // // //       />

// // // // // //       <script
// // // // // //         type="application/ld+json"
// // // // // //         dangerouslySetInnerHTML={{
// // // // // //           __html: JSON.stringify(faqSchema),
// // // // // //         }}
// // // // // //       />


// // // // // //       {/* ===================================================
// // // // // //           HERO
// // // // // //       =================================================== */}

// // // // // //       <header className="relative min-h-[520px] overflow-hidden lg:min-h-[560px]">

// // // // // //         <Image
// // // // // //           src={post.image}
// // // // // //           alt={post.title}
// // // // // //           fill
// // // // // //           priority
// // // // // //           sizes="100vw"
// // // // // //           className="object-cover"
// // // // // //         />

// // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-[#031b34]/95 via-[#07335d]/82 to-[#07335d]/20" />

// // // // // //         <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-16 lg:min-h-[560px]">

// // // // // //           <div className="max-w-[760px]">

// // // // // //             {/* Breadcrumb */}

// // // // // //             <nav
// // // // // //               aria-label="Breadcrumb"
// // // // // //               className="mb-7 flex flex-wrap items-center gap-2 text-xs text-blue-100"
// // // // // //             >
// // // // // //               <Link href="/" className="hover:text-white">
// // // // // //                 Home
// // // // // //               </Link>

// // // // // //               <span>›</span>

// // // // // //               <Link href="/blog" className="hover:text-white">
// // // // // //                 Insights
// // // // // //               </Link>

// // // // // //               <span>›</span>

// // // // // //               <span>{post.category}</span>

// // // // // //               <span>›</span>

// // // // // //               <span className="line-clamp-1 text-white">
// // // // // //                 {post.title}
// // // // // //               </span>
// // // // // //             </nav>


// // // // // //             {/* Category */}

// // // // // //             <div className="flex flex-wrap items-center gap-3">

// // // // // //               <span className="rounded-md bg-[#0d72c8] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
// // // // // //                 {post.category}
// // // // // //               </span>

// // // // // //               <span className="text-xs font-semibold uppercase tracking-wider text-blue-100">
// // // // // //                 • {post.readTime}
// // // // // //               </span>

// // // // // //             </div>


// // // // // //             {/* H1 */}

// // // // // //             <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[58px]">
// // // // // //               {post.title}
// // // // // //             </h1>


// // // // // //             <p className="mt-5 max-w-2xl text-base leading-7 text-blue-50 md:text-lg">
// // // // // //               {post.description}
// // // // // //             </p>


// // // // // //             {/* Author */}

// // // // // //             <div className="mt-7 flex items-center gap-4">

// // // // // //               <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white text-sm font-bold text-[#052f5f]">
// // // // // //                 IB
// // // // // //               </div>

// // // // // //               <div>
// // // // // //                 <p className="text-sm font-semibold text-white">
// // // // // //                   By {post.author.name}
// // // // // //                 </p>

// // // // // //                 <p className="mt-1 text-xs text-blue-100">
// // // // // //                   {post.date}
// // // // // //                   <span className="mx-2">•</span>
// // // // // //                   Last reviewed on {post.modifiedDate}
// // // // // //                 </p>
// // // // // //               </div>

// // // // // //             </div>

// // // // // //           </div>

// // // // // //         </div>

// // // // // //       </header>


// // // // // //       {/* ===================================================
// // // // // //           CONTENT AREA
// // // // // //       =================================================== */}

// // // // // //       <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[220px_minmax(0,1fr)]">

// // // // // //         {/* =================================================
// // // // // //             SIDEBAR
// // // // // //         ================================================= */}

// // // // // //         <aside className="hidden lg:block">

// // // // // //           <div className="sticky top-24">

// // // // // //             <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b65b5]">
// // // // // //               Contents
// // // // // //             </p>

// // // // // //             <nav className="mt-5 space-y-4">

// // // // // //               {post.sections.map((section, index) => (
// // // // // //                 <a
// // // // // //                   key={section.id}
// // // // // //                   href={`#${section.id}`}
// // // // // //                   className="grid grid-cols-[24px_1fr] gap-2 text-[12px] leading-5 text-slate-500 transition hover:text-[#0872ce]"
// // // // // //                 >
// // // // // //                   <span className="font-bold text-[#0872ce]">
// // // // // //                     {String(index + 1).padStart(2, "0")}
// // // // // //                   </span>

// // // // // //                   <span>
// // // // // //                     {section.heading}
// // // // // //                   </span>
// // // // // //                 </a>
// // // // // //               ))}

// // // // // //               <a
// // // // // //                 href="#faq"
// // // // // //                 className="grid grid-cols-[24px_1fr] gap-2 text-[12px] leading-5 text-slate-500 hover:text-[#0872ce]"
// // // // // //               >
// // // // // //                 <span />
// // // // // //                 FAQ
// // // // // //               </a>

// // // // // //               <a
// // // // // //                 href="#references"
// // // // // //                 className="grid grid-cols-[24px_1fr] gap-2 text-[12px] leading-5 text-slate-500 hover:text-[#0872ce]"
// // // // // //               >
// // // // // //                 <span />
// // // // // //                 References
// // // // // //               </a>

// // // // // //             </nav>


// // // // // //             {/* Sidebar quote */}

// // // // // //             <div className="mt-10 rounded-xl bg-[#eff6fd] p-5">

// // // // // //               <span className="text-3xl font-bold text-[#0872ce]">
// // // // // //                 “
// // // // // //               </span>

// // // // // //               <p className="mt-2 text-sm leading-6 text-slate-700">
// // // // // //                 Good water quality is not about perfect numbers; it&apos;s
// // // // // //                 about understanding trends and managing the pond
// // // // // //                 environment consistently.
// // // // // //               </p>

// // // // // //               <div className="mt-5 h-[3px] w-9 bg-[#0872ce]" />

// // // // // //             </div>

// // // // // //           </div>

// // // // // //         </aside>


// // // // // //         {/* =================================================
// // // // // //             ARTICLE
// // // // // //         ================================================= */}

// // // // // //         <article className="min-w-0 max-w-[950px]">

// // // // // //           {/* Intro */}

// // // // // //           <section className="max-w-4xl">

// // // // // //             <p className="text-[16px] leading-7 text-slate-700">
// // // // // //               {post.introduction[0]}
// // // // // //             </p>

// // // // // //             <p className="mt-4 text-[16px] leading-7 text-slate-700">
// // // // // //               {post.introduction[1]}
// // // // // //             </p>

// // // // // //           </section>


// // // // // //           {/* =================================================
// // // // // //               KEY TAKEAWAYS
// // // // // //           ================================================= */}

// // // // // //           <KeyTakeaways />


// // // // // //           {/* =================================================
// // // // // //               DYNAMIC ARTICLE SECTIONS
// // // // // //           ================================================= */}

// // // // // //           {post.sections.map((section, index) => (

// // // // // //             <section
// // // // // //               key={section.id}
// // // // // //               id={section.id}
// // // // // //               className="scroll-mt-24 py-8"
// // // // // //             >

// // // // // //               <div className="grid gap-7 xl:grid-cols-[minmax(0,1fr)_300px]">

// // // // // //                 {/* LEFT TEXT */}

// // // // // //                 <div>

// // // // // //                   <div className="flex items-start gap-3">

// // // // // //                     <span className="mt-1 text-lg font-bold text-[#0872ce]">
// // // // // //                       {String(index + 1).padStart(2, "0")}
// // // // // //                     </span>

// // // // // //                     <h2 className="text-xl font-bold leading-snug text-slate-900 md:text-[24px]">
// // // // // //                       {section.heading}
// // // // // //                     </h2>

// // // // // //                   </div>


// // // // // //                   <div className="mt-4 space-y-3">

// // // // // //                     {section.paragraphs.map(
// // // // // //                       (paragraph, paragraphIndex) => (
// // // // // //                         <p
// // // // // //                           key={paragraphIndex}
// // // // // //                           className="text-[15px] leading-7 text-slate-600"
// // // // // //                         >
// // // // // //                           {paragraph}
// // // // // //                         </p>
// // // // // //                       )
// // // // // //                     )}

// // // // // //                   </div>

// // // // // //                 </div>


// // // // // //                 {/* RIGHT CONTENT */}

// // // // // //                 <div>

// // // // // //                   {section.id === "what-is-ammonia" && (
// // // // // //                     <AmmoniaChemistry />
// // // // // //                   )}

// // // // // //                   {section.id === "causes-ammonia" && (
// // // // // //                     <AmmoniaPathway />
// // // // // //                   )}

// // // // // //                   {section.id === "ammonia-risks" &&
// // // // // //                     section.image && (
// // // // // //                       <SectionImage
// // // // // //                         src={section.image}
// // // // // //                         alt={
// // // // // //                           section.imageAlt ||
// // // // // //                           section.heading
// // // // // //                         }
// // // // // //                       />
// // // // // //                     )}

// // // // // //                   {section.id === "ph-temperature" && (
// // // // // //                     <RelationshipDiagram />
// // // // // //                   )}

// // // // // //                   {section.id === "monitoring" && (
// // // // // //                     <WaterParameterTable />
// // // // // //                   )}

// // // // // //                   {section.id === "management" && (
// // // // // //                     <ManagementMiniFramework />
// // // // // //                   )}

// // // // // //                   {section.id ===
// // // // // //                     "microbial-management" &&
// // // // // //                     section.image && (
// // // // // //                       <SectionImage
// // // // // //                         src={section.image}
// // // // // //                         alt={
// // // // // //                           section.imageAlt ||
// // // // // //                           section.heading
// // // // // //                         }
// // // // // //                       />
// // // // // //                     )}

// // // // // //                   {section.id ===
// // // // // //                     "preventive-strategy" &&
// // // // // //                     section.image && (
// // // // // //                       <SectionImage
// // // // // //                         src={section.image}
// // // // // //                         alt={
// // // // // //                           section.imageAlt ||
// // // // // //                           section.heading
// // // // // //                         }
// // // // // //                       />
// // // // // //                     )}

// // // // // //                 </div>

// // // // // //               </div>

// // // // // //             </section>

// // // // // //           ))}


// // // // // //           {/* =================================================
// // // // // //               CTA
// // // // // //           ================================================= */}

// // // // // //           <section className="my-10 overflow-hidden rounded-2xl bg-[#052f5f]">

// // // // // //             <div className="grid md:grid-cols-[1.2fr_0.8fr]">

// // // // // //               <div className="p-7 md:p-9">

// // // // // //                 <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
// // // // // //                   Innovare Biopharma
// // // // // //                 </span>

// // // // // //                 <h2 className="mt-3 text-2xl font-bold text-white">
// // // // // //                   Supporting Better Water-Quality Management
// // // // // //                 </h2>

// // // // // //                 <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100">
// // // // // //                   Explore aquaculture solutions designed to support
// // // // // //                   water-quality and pond-management programs.
// // // // // //                 </p>

// // // // // //                 <Link
// // // // // //                   href="/products"
// // // // // //                   className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#052f5f]"
// // // // // //                 >
// // // // // //                   Explore Water Quality Solutions →
// // // // // //                 </Link>

// // // // // //               </div>


// // // // // //               <div className="relative min-h-[230px]">

// // // // // //                 <Image
// // // // // //                   src="/images/blog/water-quality-solutions.webp"
// // // // // //                   alt="Innovare water quality management solutions"
// // // // // //                   fill
// // // // // //                   className="object-cover"
// // // // // //                 />

// // // // // //               </div>

// // // // // //             </div>

// // // // // //           </section>


// // // // // //           {/* =================================================
// // // // // //               FAQ
// // // // // //           ================================================= */}

// // // // // //           <section
// // // // // //             id="faq"
// // // // // //             className="scroll-mt-24 py-8"
// // // // // //           >

// // // // // //             <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // // //               Frequently Asked Questions
// // // // // //             </p>

// // // // // //             <div className="mt-4 grid gap-x-8 md:grid-cols-2">

// // // // // //               {post.faq.map((item, index) => (

// // // // // //                 <details
// // // // // //                   key={index}
// // // // // //                   className="group border-b border-slate-200 py-4"
// // // // // //                 >

// // // // // //                   <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-800">

// // // // // //                     {item.question}

// // // // // //                     <span className="text-lg text-[#0872ce] transition-transform group-open:rotate-45">
// // // // // //                       +
// // // // // //                     </span>

// // // // // //                   </summary>

// // // // // //                   <p className="mt-3 text-sm leading-6 text-slate-600">
// // // // // //                     {item.answer}
// // // // // //                   </p>

// // // // // //                 </details>

// // // // // //               ))}

// // // // // //             </div>

// // // // // //           </section>


// // // // // //           {/* =================================================
// // // // // //               REFERENCES
// // // // // //           ================================================= */}

// // // // // //           <section
// // // // // //             id="references"
// // // // // //             className="scroll-mt-24 border-t border-slate-200 py-7"
// // // // // //           >

// // // // // //             <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
// // // // // //               References
// // // // // //             </p>

// // // // // //             <ol className="mt-4 space-y-2">

// // // // // //               {post.references.map((reference, index) => (

// // // // // //                 <li
// // // // // //                   key={index}
// // // // // //                   className="text-xs leading-6 text-slate-500"
// // // // // //                 >
// // // // // //                   {index + 1}. {reference.title}
// // // // // //                   {reference.source
// // // // // //                     ? ` — ${reference.source}`
// // // // // //                     : ""}
// // // // // //                 </li>

// // // // // //               ))}

// // // // // //             </ol>

// // // // // //           </section>


// // // // // //           {/* =================================================
// // // // // //               AUTHOR + PUBLISH INFO
// // // // // //           ================================================= */}

// // // // // //           <section className="border-t border-slate-200 py-8">

// // // // // //             <div className="grid gap-5 md:grid-cols-[1.5fr_1fr]">

// // // // // //               {/* Author */}

// // // // // //               <div className="rounded-xl border border-slate-200 bg-[#fafcfe] p-6">

// // // // // //                 <div className="flex gap-4">

// // // // // //                   <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#052f5f] text-lg font-bold text-white">
// // // // // //                     IB
// // // // // //                   </div>

// // // // // //                   <div>

// // // // // //                     <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0872ce]">
// // // // // //                       About the Author
// // // // // //                     </p>

// // // // // //                     <h3 className="mt-2 text-base font-bold text-slate-900">
// // // // // //                       {post.author.name}
// // // // // //                     </h3>

// // // // // //                     <p className="mt-1 text-xs font-medium text-[#0872ce]">
// // // // // //                       {post.author.role}
// // // // // //                     </p>

// // // // // //                     <p className="mt-3 text-xs leading-6 text-slate-600">
// // // // // //                       {post.author.bio}
// // // // // //                     </p>

// // // // // //                   </div>

// // // // // //                 </div>

// // // // // //               </div>


// // // // // //               {/* Date */}

// // // // // //               <div className="rounded-xl border border-slate-200 p-6">

// // // // // //                 <p className="text-xs font-semibold text-slate-700">
// // // // // //                   Published on {post.date}
// // // // // //                 </p>

// // // // // //                 <p className="mt-2 text-xs text-slate-500">
// // // // // //                   Last reviewed on {post.modifiedDate}
// // // // // //                 </p>


// // // // // //                 <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
// // // // // //                   Topics
// // // // // //                 </p>

// // // // // //                 <div className="mt-3 flex flex-wrap gap-2">

// // // // // //                   {post.tags.map((tag) => (

// // // // // //                     <span
// // // // // //                       key={tag}
// // // // // //                       className="rounded border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-[#0872ce]"
// // // // // //                     >
// // // // // //                       {tag}
// // // // // //                     </span>

// // // // // //                   ))}

// // // // // //                 </div>

// // // // // //               </div>

// // // // // //             </div>

// // // // // //           </section>


// // // // // //           {/* =================================================
// // // // // //               SHARE
// // // // // //           ================================================= */}

// // // // // //           <section className="border-t border-slate-200 py-6">

// // // // // //             <div className="flex flex-wrap items-center gap-4">

// // // // // //               <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-700">
// // // // // //                 Share This Article
// // // // // //               </span>


// // // // // //               <ShareButton
// // // // // //                 href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
// // // // // //                   currentURL
// // // // // //                 )}`}
// // // // // //                 label="LinkedIn"
// // // // // //               />

// // // // // //               <ShareButton
// // // // // //                 href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
// // // // // //                   currentURL
// // // // // //                 )}`}
// // // // // //                 label="Facebook"
// // // // // //               />

// // // // // //               <ShareButton
// // // // // //                 href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
// // // // // //                   currentURL
// // // // // //                 )}&text=${encodeURIComponent(
// // // // // //                   post.title
// // // // // //                 )}`}
// // // // // //                 label="X"
// // // // // //               />

// // // // // //               <ShareButton
// // // // // //                 href={`mailto:?subject=${encodeURIComponent(
// // // // // //                   post.title
// // // // // //                 )}&body=${encodeURIComponent(
// // // // // //                   currentURL
// // // // // //                 )}`}
// // // // // //                 label="Email"
// // // // // //               />

// // // // // //             </div>

// // // // // //           </section>

// // // // // //         </article>

// // // // // //       </section>


// // // // // //       {/* ===================================================
// // // // // //           RELATED ARTICLES
// // // // // //       =================================================== */}

// // // // // //       {relatedPosts.length > 0 && (

// // // // // //         <section className="border-t border-slate-100 bg-[#f7fafc] py-16">

// // // // // //           <div className="mx-auto max-w-7xl px-6">

// // // // // //             <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // // //               Continue Learning
// // // // // //             </p>

// // // // // //             <h2 className="mt-2 text-3xl font-bold text-slate-900">
// // // // // //               Related Aquaculture Insights
// // // // // //             </h2>


// // // // // //             <div className="mt-8 grid gap-7 md:grid-cols-3">

// // // // // //               {relatedPosts.map((blog) => (

// // // // // //                 <Link
// // // // // //                   key={blog.slug}
// // // // // //                   href={`/blog/${blog.slug}`}
// // // // // //                   className="group"
// // // // // //                 >

// // // // // //                   <article>

// // // // // //                     <div className="relative aspect-[16/10] overflow-hidden rounded-xl">

// // // // // //                       <Image
// // // // // //                         src={blog.image}
// // // // // //                         alt={blog.title}
// // // // // //                         fill
// // // // // //                         className="object-cover transition duration-500 group-hover:scale-105"
// // // // // //                       />

// // // // // //                     </div>

// // // // // //                     <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0872ce]">
// // // // // //                       {blog.category}
// // // // // //                     </p>

// // // // // //                     <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-[#0872ce]">
// // // // // //                       {blog.title}
// // // // // //                     </h3>

// // // // // //                   </article>

// // // // // //                 </Link>

// // // // // //               ))}

// // // // // //             </div>

// // // // // //           </div>

// // // // // //         </section>

// // // // // //       )}

// // // // // //     </main>
// // // // // //   );
// // // // // // }


// // // // // // /* =========================================================
// // // // // //    SMALL COMPONENTS
// // // // // // ========================================================= */

// // // // // // function KeyTakeaways() {
// // // // // //   const items = [
// // // // // //     {
// // // // // //       icon: "NH₃",
// // // // // //       title: "Ammonia exists as NH₄⁺ and NH₃ in pond water.",
// // // // // //     },

// // // // // //     {
// // // // // //       icon: "°C",
// // // // // //       title: "pH and temperature influence the NH₃ proportion.",
// // // // // //     },

// // // // // //     {
// // // // // //       icon: "↘",
// // // // // //       title: "Feed, waste and organic matter contribute to ammonia load.",
// // // // // //     },

// // // // // //     {
// // // // // //       icon: "✓",
// // // // // //       title: "Management combines monitoring, aeration and pond care.",
// // // // // //     },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <section className="my-8 rounded-xl border border-[#dbe8d4] bg-[#f7faf5] p-6">

// // // // // //       <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#57923a]">
// // // // // //         Key Takeaways
// // // // // //       </p>

// // // // // //       <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

// // // // // //         {items.map((item) => (

// // // // // //           <div
// // // // // //             key={item.title}
// // // // // //             className="flex gap-3"
// // // // // //           >

// // // // // //             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#93bd79] text-xs font-bold text-[#57923a]">
// // // // // //               {item.icon}
// // // // // //             </div>

// // // // // //             <p className="text-xs font-medium leading-5 text-slate-700">
// // // // // //               {item.title}
// // // // // //             </p>

// // // // // //           </div>

// // // // // //         ))}

// // // // // //       </div>

// // // // // //     </section>
// // // // // //   );
// // // // // // }


// // // // // // function AmmoniaChemistry() {
// // // // // //   return (
// // // // // //     <div className="rounded-xl border border-slate-200 bg-white p-5">

// // // // // //       <p className="text-center text-[10px] font-bold uppercase tracking-[0.15em] text-[#0872ce]">
// // // // // //         Ammonia Chemistry
// // // // // //       </p>

// // // // // //       <div className="mt-4 flex items-center justify-center gap-3">

// // // // // //         <div className="rounded-lg bg-[#eef8e9] px-4 py-4 text-center">

// // // // // //           <p className="text-xl font-bold text-[#47903c]">
// // // // // //             NH₄⁺
// // // // // //           </p>

// // // // // //           <p className="mt-1 text-[10px] font-semibold text-slate-700">
// // // // // //             Ammonium
// // // // // //           </p>

// // // // // //           <p className="text-[9px] text-slate-500">
// // // // // //             Ionized form
// // // // // //           </p>

// // // // // //         </div>

// // // // // //         <span className="text-xl text-slate-500">
// // // // // //           ⇌
// // // // // //         </span>

// // // // // //         <div className="rounded-lg bg-[#fff3e9] px-4 py-4 text-center">

// // // // // //           <p className="text-xl font-bold text-[#cd7d31]">
// // // // // //             NH₃
// // // // // //           </p>

// // // // // //           <p className="mt-1 text-[10px] font-semibold text-slate-700">
// // // // // //             Ammonia
// // // // // //           </p>

// // // // // //           <p className="text-[9px] text-slate-500">
// // // // // //             Un-ionized form
// // // // // //           </p>

// // // // // //         </div>

// // // // // //       </div>

// // // // // //       <div className="mt-4 rounded-lg bg-[#eef5fc] p-3">

// // // // // //         <p className="text-center text-[10px] leading-4 text-slate-600">
// // // // // //           Higher pH and temperature can increase the proportion
// // // // // //           of total ammonia present as NH₃.
// // // // // //         </p>

// // // // // //       </div>

// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // // function AmmoniaPathway() {
// // // // // //   const sources = [
// // // // // //     "Uneaten Feed",
// // // // // //     "Shrimp Waste",
// // // // // //     "Dead Plankton",
// // // // // //     "Organic Matter",
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div className="rounded-xl border border-slate-200 bg-white p-5">

// // // // // //       <p className="text-center text-[10px] font-bold uppercase tracking-[0.15em] text-[#0872ce]">
// // // // // //         Ammonia Formation Pathway
// // // // // //       </p>

// // // // // //       <div className="mt-4 grid grid-cols-2 gap-2">

// // // // // //         {sources.map((source) => (

// // // // // //           <div
// // // // // //             key={source}
// // // // // //             className="rounded-lg bg-slate-50 p-3 text-center"
// // // // // //           >

// // // // // //             <p className="text-[10px] font-semibold text-slate-700">
// // // // // //               {source}
// // // // // //             </p>

// // // // // //           </div>

// // // // // //         ))}

// // // // // //       </div>

// // // // // //       <div className="my-3 text-center text-lg text-[#0872ce]">
// // // // // //         ↓
// // // // // //       </div>

// // // // // //       <div className="rounded-md bg-[#edf3f8] p-2 text-center">

// // // // // //         <p className="text-[10px] font-medium text-slate-600">
// // // // // //           Microbial Decomposition
// // // // // //         </p>

// // // // // //       </div>

// // // // // //       <div className="my-2 text-center text-lg text-[#0872ce]">
// // // // // //         ↓
// // // // // //       </div>

// // // // // //       <div className="rounded-md bg-[#dfeaf4] p-2 text-center">

// // // // // //         <p className="text-[10px] font-bold text-slate-700">
// // // // // //           Ammonia
// // // // // //         </p>

// // // // // //       </div>

// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // // function RelationshipDiagram() {
// // // // // //   return (
// // // // // //     <div className="rounded-xl border border-slate-200 bg-white p-5">

// // // // // //       <p className="text-center text-[10px] font-bold uppercase tracking-[0.15em] text-[#0872ce]">
// // // // // //         Relationship
// // // // // //       </p>

// // // // // //       <div className="relative mx-auto mt-5 h-[190px] max-w-[260px]">

// // // // // //         <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold text-[#0872ce]">
// // // // // //           pH
// // // // // //         </div>

// // // // // //         <div className="absolute bottom-0 left-0 rounded-lg bg-blue-50 px-3 py-2 text-[10px] font-semibold text-[#0872ce]">
// // // // // //           Temperature
// // // // // //         </div>

// // // // // //         <div className="absolute bottom-0 right-0 rounded-lg bg-blue-50 px-3 py-2 text-[10px] font-semibold text-[#0872ce]">
// // // // // //           Ammonia
// // // // // //         </div>

// // // // // //         <div className="absolute left-1/2 top-[70px] w-[130px] -translate-x-1/2 text-center">

// // // // // //           <p className="text-[10px] leading-4 text-slate-600">
// // // // // //             Higher pH and temperature influence the proportion
// // // // // //             of NH₃.
// // // // // //           </p>

// // // // // //         </div>


// // // // // //         <div className="absolute left-[60px] top-[50px] h-[80px] w-px rotate-[38deg] bg-[#0872ce]" />

// // // // // //         <div className="absolute right-[60px] top-[50px] h-[80px] w-px -rotate-[38deg] bg-[#0872ce]" />

// // // // // //       </div>

// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // // function WaterParameterTable() {
// // // // // //   const rows = [
// // // // // //     ["Ammonia", "Nitrogen loading and ammonia conditions"],
// // // // // //     ["pH", "Influences the NH₃ proportion"],
// // // // // //     ["Temperature", "Influences ammonia equilibrium"],
// // // // // //     ["Dissolved Oxygen", "Supports shrimp and biological processes"],
// // // // // //     ["Nitrite", "Important nitrogen-cycle intermediate"],
// // // // // //     ["Alkalinity", "Supports buffering and pond stability"],
// // // // // //     ["Salinity", "Important environmental parameter"],
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div className="overflow-hidden rounded-xl border border-slate-200">

// // // // // //       <div className="bg-[#0872ce] px-4 py-2">

// // // // // //         <p className="text-center text-[10px] font-bold uppercase tracking-[0.12em] text-white">
// // // // // //           Water-Quality Parameters
// // // // // //         </p>

// // // // // //       </div>

// // // // // //       <div>

// // // // // //         {rows.map(([parameter, reason], index) => (

// // // // // //           <div
// // // // // //             key={parameter}
// // // // // //             className={`grid grid-cols-[95px_1fr] gap-3 px-3 py-2 text-[9px] ${
// // // // // //               index % 2 === 0
// // // // // //                 ? "bg-blue-50"
// // // // // //                 : "bg-white"
// // // // // //             }`}
// // // // // //           >

// // // // // //             <span className="font-bold text-slate-700">
// // // // // //               {parameter}
// // // // // //             </span>

// // // // // //             <span className="leading-4 text-slate-500">
// // // // // //               {reason}
// // // // // //             </span>

// // // // // //           </div>

// // // // // //         ))}

// // // // // //       </div>

// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // // function ManagementMiniFramework() {
// // // // // //   const steps = [
// // // // // //     ["01", "Measure"],
// // // // // //     ["02", "Analyse"],
// // // // // //     ["03", "Manage"],
// // // // // //     ["04", "Review"],
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div className="rounded-xl border border-slate-200 bg-white p-5">

// // // // // //       <p className="text-center text-[10px] font-bold uppercase tracking-[0.15em] text-[#0872ce]">
// // // // // //         Management Framework
// // // // // //       </p>

// // // // // //       <div className="mt-5 grid grid-cols-4 gap-2">

// // // // // //         {steps.map(([number, title], index) => (

// // // // // //           <div
// // // // // //             key={title}
// // // // // //             className="relative text-center"
// // // // // //           >

// // // // // //             <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#0872ce] text-[9px] font-bold text-white">
// // // // // //               {number}
// // // // // //             </div>

// // // // // //             <p className="mt-2 text-[9px] font-bold text-slate-700">
// // // // // //               {title}
// // // // // //             </p>

// // // // // //             {index < steps.length - 1 && (
// // // // // //               <span className="absolute -right-[8px] top-[7px] text-xs text-[#0872ce]">
// // // // // //                 →
// // // // // //               </span>
// // // // // //             )}

// // // // // //           </div>

// // // // // //         ))}

// // // // // //       </div>

// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // // function SectionImage({
// // // // // //   src,
// // // // // //   alt,
// // // // // // }: {
// // // // // //   src: string;
// // // // // //   alt: string;
// // // // // // }) {
// // // // // //   return (
// // // // // //     <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200">

// // // // // //       <Image
// // // // // //         src={src}
// // // // // //         alt={alt}
// // // // // //         fill
// // // // // //         sizes="300px"
// // // // // //         className="object-cover"
// // // // // //       />

// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // // function ShareButton({
// // // // // //   href,
// // // // // //   label,
// // // // // // }: {
// // // // // //   href: string;
// // // // // //   label: string;
// // // // // // }) {
// // // // // //   return (
// // // // // //     <a
// // // // // //       href={href}
// // // // // //       target="_blank"
// // // // // //       rel="noopener noreferrer"
// // // // // //       className="text-xs font-semibold text-slate-600 transition hover:text-[#0872ce]"
// // // // // //     >
// // // // // //       {label}
// // // // // //     </a>
// // // // // //   );
// // // // // // }
// // // // // import type { Metadata } from "next";
// // // // // import Image from "next/image";
// // // // // import Link from "next/link";
// // // // // import { notFound } from "next/navigation";

// // // // // import { blogs, getBlogBySlug } from "@/data/blogs";

// // // // // type BlogPostPageProps = {
// // // // //   params: Promise<{
// // // // //     slug: string;
// // // // //   }>;
// // // // // };

// // // // // /* =========================================================
// // // // //    SEO METADATA
// // // // // ========================================================= */

// // // // // export async function generateMetadata({
// // // // //   params,
// // // // // }: BlogPostPageProps): Promise<Metadata> {
// // // // //   const { slug } = await params;

// // // // //   const post = getBlogBySlug(slug);

// // // // //   if (!post) {
// // // // //     return {
// // // // //       title: "Aquaculture Insights | Innovare Biopharma",

// // // // //       description:
// // // // //         "Explore aquaculture insights covering shrimp health, water quality, nutrition, probiotics and pond management.",
// // // // //     };
// // // // //   }

// // // // //   const pageURL = `https://www.innovarebiopharma.com/blog/${post.slug}`;

// // // // //   return {
// // // // //     title: post.metaTitle,

// // // // //     description: post.description,

// // // // //     alternates: {
// // // // //       canonical: pageURL,
// // // // //     },

// // // // //     openGraph: {
// // // // //       title: post.metaTitle,

// // // // //       description: post.description,

// // // // //       url: pageURL,

// // // // //       type: "article",

// // // // //       publishedTime: post.dateISO,

// // // // //       modifiedTime: post.modifiedISO || post.dateISO,

// // // // //       images: [
// // // // //         {
// // // // //           url: post.image,
// // // // //           width: 1200,
// // // // //           height: 630,
// // // // //           alt: post.title,
// // // // //         },
// // // // //       ],
// // // // //     },

// // // // //     twitter: {
// // // // //       card: "summary_large_image",

// // // // //       title: post.metaTitle,

// // // // //       description: post.description,

// // // // //       images: [post.image],
// // // // //     },
// // // // //   };
// // // // // }

// // // // // /* =========================================================
// // // // //    PAGE
// // // // // ========================================================= */

// // // // // export default async function BlogPostPage({
// // // // //   params,
// // // // // }: BlogPostPageProps) {
// // // // //   const { slug } = await params;

// // // // //   const post = getBlogBySlug(slug);

// // // // //   if (!post) {
// // // // //     notFound();
// // // // //   }

// // // // //   const currentURL = `https://www.innovarebiopharma.com/blog/${post.slug}`;

// // // // //   const relatedPosts = blogs
// // // // //     .filter(
// // // // //       (blog) =>
// // // // //         blog.category === post.category &&
// // // // //         blog.slug !== post.slug
// // // // //     )
// // // // //     .slice(0, 3);

// // // // //   /* =========================================================
// // // // //      ARTICLE SCHEMA
// // // // //   ========================================================= */

// // // // //   const articleSchema = {
// // // // //     "@context": "https://schema.org",

// // // // //     "@type": "Article",

// // // // //     headline: post.title,

// // // // //     description: post.description,

// // // // //     image: [
// // // // //       `https://www.innovarebiopharma.com${post.image}`,
// // // // //     ],

// // // // //     datePublished: post.dateISO,

// // // // //     dateModified: post.modifiedISO || post.dateISO,

// // // // //     author: {
// // // // //       "@type": "Organization",

// // // // //       name: post.author.name,
// // // // //     },

// // // // //     publisher: {
// // // // //       "@type": "Organization",

// // // // //       name: "Innovare Biopharma",

// // // // //       url: "https://www.innovarebiopharma.com",
// // // // //     },

// // // // //     mainEntityOfPage: currentURL,
// // // // //   };

// // // // //   /* =========================================================
// // // // //      FAQ SCHEMA
// // // // //   ========================================================= */

// // // // //   const faqSchema = {
// // // // //     "@context": "https://schema.org",

// // // // //     "@type": "FAQPage",

// // // // //     mainEntity: post.faq.map((item) => ({
// // // // //       "@type": "Question",

// // // // //       name: item.question,

// // // // //       acceptedAnswer: {
// // // // //         "@type": "Answer",

// // // // //         text: item.answer,
// // // // //       },
// // // // //     })),
// // // // //   };

// // // // //   return (
// // // // //     <main className="bg-white text-slate-900">

// // // // //       {/* =====================================================
// // // // //           STRUCTURED DATA
// // // // //       ===================================================== */}

// // // // //       <script
// // // // //         type="application/ld+json"
// // // // //         dangerouslySetInnerHTML={{
// // // // //           __html: JSON.stringify(articleSchema),
// // // // //         }}
// // // // //       />

// // // // //       <script
// // // // //         type="application/ld+json"
// // // // //         dangerouslySetInnerHTML={{
// // // // //           __html: JSON.stringify(faqSchema),
// // // // //         }}
// // // // //       />


// // // // //       {/* =====================================================
// // // // //           HERO
// // // // //       ===================================================== */}

// // // // //       <header className="relative min-h-[560px] overflow-hidden">

// // // // //         {/* HERO IMAGE */}

// // // // //         <Image
// // // // //           src={post.image}
// // // // //           alt={`${post.title} - shrimp aquaculture pond`}
// // // // //           fill
// // // // //           priority
// // // // //           sizes="100vw"
// // // // //           className="object-cover object-center"
// // // // //         />


// // // // //         {/* GENERAL DARK OVERLAY */}

// // // // //         <div className="absolute inset-0 bg-black/20" />


// // // // //         {/* LEFT CORPORATE GRADIENT */}

// // // // //         <div
// // // // //           className="
// // // // //             absolute inset-0
// // // // //             bg-gradient-to-r
// // // // //             from-[#03182f]/95
// // // // //             via-[#053664]/80
// // // // //             to-transparent
// // // // //           "
// // // // //         />


// // // // //         {/* BOTTOM GRADIENT */}

// // // // //         <div
// // // // //           className="
// // // // //             absolute inset-0
// // // // //             bg-gradient-to-t
// // // // //             from-[#03182f]/40
// // // // //             via-transparent
// // // // //             to-transparent
// // // // //           "
// // // // //         />


// // // // //         {/* HERO CONTENT */}

// // // // //         <div
// // // // //           className="
// // // // //             relative z-10
// // // // //             mx-auto
// // // // //             flex
// // // // //             min-h-[560px]
// // // // //             max-w-7xl
// // // // //             items-center
// // // // //             px-6
// // // // //             py-20
// // // // //             lg:px-8
// // // // //           "
// // // // //         >

// // // // //           <div className="max-w-[780px]">


// // // // //             {/* BREADCRUMB */}

// // // // //             <nav
// // // // //               aria-label="Breadcrumb"
// // // // //               className="mb-7 flex flex-wrap items-center gap-2 text-xs text-blue-100"
// // // // //             >

// // // // //               <Link
// // // // //                 href="/"
// // // // //                 className="transition hover:text-white"
// // // // //               >
// // // // //                 Home
// // // // //               </Link>

// // // // //               <span className="opacity-50">
// // // // //                 ›
// // // // //               </span>

// // // // //               <Link
// // // // //                 href="/blog"
// // // // //                 className="transition hover:text-white"
// // // // //               >
// // // // //                 Insights
// // // // //               </Link>

// // // // //               <span className="opacity-50">
// // // // //                 ›
// // // // //               </span>

// // // // //               <span>
// // // // //                 {post.category}
// // // // //               </span>

// // // // //             </nav>


// // // // //             {/* CATEGORY */}

// // // // //             <div className="flex flex-wrap items-center gap-3">

// // // // //               <span
// // // // //                 className="
// // // // //                   rounded-md
// // // // //                   bg-[#0872ce]
// // // // //                   px-3
// // // // //                   py-1.5
// // // // //                   text-[11px]
// // // // //                   font-bold
// // // // //                   uppercase
// // // // //                   tracking-[0.1em]
// // // // //                   text-white
// // // // //                 "
// // // // //               >
// // // // //                 {post.category}
// // // // //               </span>


// // // // //               <span className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-100">

// // // // //                 • {post.readTime}

// // // // //               </span>

// // // // //             </div>


// // // // //             {/* H1 */}

// // // // //             <h1
// // // // //               className="
// // // // //                 mt-5
// // // // //                 max-w-[760px]
// // // // //                 text-4xl
// // // // //                 font-bold
// // // // //                 leading-[1.08]
// // // // //                 tracking-tight
// // // // //                 text-white
// // // // //                 sm:text-5xl
// // // // //                 lg:text-[60px]
// // // // //               "
// // // // //             >
// // // // //               {post.title}
// // // // //             </h1>


// // // // //             {/* DESCRIPTION */}

// // // // //             <p
// // // // //               className="
// // // // //                 mt-6
// // // // //                 max-w-[680px]
// // // // //                 text-base
// // // // //                 leading-7
// // // // //                 text-blue-50
// // // // //                 md:text-lg
// // // // //               "
// // // // //             >
// // // // //               {post.description}
// // // // //             </p>


// // // // //             {/* AUTHOR INFORMATION */}

// // // // //             <div className="mt-8 flex items-center gap-4">

// // // // //               <div
// // // // //                 className="
// // // // //                   flex
// // // // //                   h-11
// // // // //                   w-11
// // // // //                   items-center
// // // // //                   justify-center
// // // // //                   rounded-full
// // // // //                   border-2
// // // // //                   border-white
// // // // //                   bg-white
// // // // //                   text-sm
// // // // //                   font-bold
// // // // //                   text-[#052f5f]
// // // // //                 "
// // // // //               >
// // // // //                 IB
// // // // //               </div>


// // // // //               <div>

// // // // //                 <p className="text-sm font-semibold text-white">

// // // // //                   By {post.author.name}

// // // // //                 </p>


// // // // //                 <p className="mt-1 text-xs text-blue-100">

// // // // //                   {post.date}

// // // // //                   <span className="mx-2">
// // // // //                     •
// // // // //                   </span>

// // // // //                   Last reviewed on {post.modifiedDate}

// // // // //                 </p>

// // // // //               </div>

// // // // //             </div>

// // // // //           </div>

// // // // //         </div>


// // // // //         {/* BLUE BOTTOM ACCENT */}

// // // // //         <div
// // // // //           className="
// // // // //             absolute
// // // // //             bottom-0
// // // // //             left-0
// // // // //             z-20
// // // // //             h-[4px]
// // // // //             w-full
// // // // //             bg-gradient-to-r
// // // // //             from-[#0872ce]
// // // // //             via-[#39a9ff]
// // // // //             to-transparent
// // // // //           "
// // // // //         />

// // // // //       </header>


// // // // //       {/* =====================================================
// // // // //           MAIN CONTENT
// // // // //       ===================================================== */}

// // // // //       <section
// // // // //         className="
// // // // //           mx-auto
// // // // //           grid
// // // // //           max-w-7xl
// // // // //           gap-10
// // // // //           px-6
// // // // //           py-12
// // // // //           lg:grid-cols-[220px_minmax(0,1fr)]
// // // // //           lg:px-8
// // // // //         "
// // // // //       >


// // // // //         {/* ===================================================
// // // // //             SIDEBAR
// // // // //         =================================================== */}

// // // // //         <aside className="hidden lg:block">

// // // // //           <div className="sticky top-24">


// // // // //             <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0872ce]">

// // // // //               Contents

// // // // //             </p>


// // // // //             <nav className="mt-5 space-y-4">

// // // // //               {post.sections.map((section, index) => (

// // // // //                 <a
// // // // //                   key={section.id}
// // // // //                   href={`#${section.id}`}
// // // // //                   className="
// // // // //                     grid
// // // // //                     grid-cols-[24px_1fr]
// // // // //                     gap-2
// // // // //                     text-[12px]
// // // // //                     leading-5
// // // // //                     text-slate-500
// // // // //                     transition
// // // // //                     hover:text-[#0872ce]
// // // // //                   "
// // // // //                 >

// // // // //                   <span className="font-bold text-[#0872ce]">

// // // // //                     {String(index + 1).padStart(2, "0")}

// // // // //                   </span>


// // // // //                   <span>

// // // // //                     {section.heading}

// // // // //                   </span>

// // // // //                 </a>

// // // // //               ))}


// // // // //               <a
// // // // //                 href="#faq"
// // // // //                 className="block text-[12px] text-slate-500 hover:text-[#0872ce]"
// // // // //               >
// // // // //                 FAQ
// // // // //               </a>


// // // // //               <a
// // // // //                 href="#references"
// // // // //                 className="block text-[12px] text-slate-500 hover:text-[#0872ce]"
// // // // //               >
// // // // //                 References
// // // // //               </a>

// // // // //             </nav>


// // // // //             {/* SIDEBAR QUOTE */}

// // // // //             <div className="mt-10 rounded-xl bg-[#eef6fd] p-5">

// // // // //               <span className="text-3xl font-bold text-[#0872ce]">
// // // // //                 “
// // // // //               </span>


// // // // //               <p className="mt-2 text-sm leading-6 text-slate-700">

// // // // //                 Good water quality is not about perfect numbers;
// // // // //                 it&apos;s about understanding trends and managing
// // // // //                 the pond environment consistently.

// // // // //               </p>


// // // // //               <div className="mt-5 h-[3px] w-9 bg-[#0872ce]" />

// // // // //             </div>

// // // // //           </div>

// // // // //         </aside>


// // // // //         {/* ===================================================
// // // // //             ARTICLE BODY
// // // // //         =================================================== */}

// // // // //         <article className="min-w-0 max-w-[960px]">


// // // // //           {/* INTRO */}

// // // // //           <section>

// // // // //             {post.introduction.map((paragraph, index) => (

// // // // //               <p
// // // // //                 key={index}
// // // // //                 className={`text-[16px] leading-7 text-slate-700 ${
// // // // //                   index > 0 ? "mt-4" : ""
// // // // //                 }`}
// // // // //               >
// // // // //                 {paragraph}
// // // // //               </p>

// // // // //             ))}

// // // // //           </section>


// // // // //           {/* =================================================
// // // // //               KEY TAKEAWAYS
// // // // //           ================================================= */}

// // // // //           <KeyTakeaways />


// // // // //           {/* =================================================
// // // // //               ARTICLE SECTIONS
// // // // //           ================================================= */}

// // // // //           {post.sections.map((section, index) => (

// // // // //             <section
// // // // //               key={section.id}
// // // // //               id={section.id}
// // // // //               className="scroll-mt-24 py-8"
// // // // //             >

// // // // //               <div
// // // // //                 className="
// // // // //                   grid
// // // // //                   gap-7
// // // // //                   xl:grid-cols-[minmax(0,1fr)_300px]
// // // // //                 "
// // // // //               >


// // // // //                 {/* LEFT TEXT */}

// // // // //                 <div>


// // // // //                   <div className="flex items-start gap-3">


// // // // //                     <span className="mt-1 text-lg font-bold text-[#0872ce]">

// // // // //                       {String(index + 1).padStart(2, "0")}

// // // // //                     </span>


// // // // //                     <h2 className="text-xl font-bold leading-snug text-slate-900 md:text-[24px]">

// // // // //                       {section.heading}

// // // // //                     </h2>

// // // // //                   </div>


// // // // //                   <div className="mt-4 space-y-3">

// // // // //                     {section.paragraphs.map(
// // // // //                       (paragraph, paragraphIndex) => (

// // // // //                         <p
// // // // //                           key={paragraphIndex}
// // // // //                           className="text-[15px] leading-7 text-slate-600"
// // // // //                         >

// // // // //                           {paragraph}

// // // // //                         </p>

// // // // //                       )
// // // // //                     )}

// // // // //                   </div>

// // // // //                 </div>


// // // // //                 {/* RIGHT VISUAL */}

// // // // //                 <div>


// // // // //                   {section.id === "what-is-ammonia" && (
// // // // //                     <AmmoniaChemistry />
// // // // //                   )}


// // // // //                   {section.id === "causes-ammonia" && (
// // // // //                     <AmmoniaPathway />
// // // // //                   )}


// // // // //                   {section.id === "ammonia-risks" &&
// // // // //                     section.image && (

// // // // //                       <SectionImage
// // // // //                         src={section.image}
// // // // //                         alt={
// // // // //                           section.imageAlt ||
// // // // //                           section.heading
// // // // //                         }
// // // // //                       />

// // // // //                     )}


// // // // //                   {section.id === "ph-temperature" && (
// // // // //                     <RelationshipDiagram />
// // // // //                   )}


// // // // //                   {section.id === "monitoring" && (
// // // // //                     <WaterParameterTable />
// // // // //                   )}


// // // // //                   {section.id === "management" && (
// // // // //                     <ManagementFramework />
// // // // //                   )}


// // // // //                   {section.id ===
// // // // //                     "microbial-management" &&
// // // // //                     section.image && (

// // // // //                       <SectionImage
// // // // //                         src={section.image}
// // // // //                         alt={
// // // // //                           section.imageAlt ||
// // // // //                           section.heading
// // // // //                         }
// // // // //                       />

// // // // //                     )}


// // // // //                   {section.id ===
// // // // //                     "preventive-strategy" &&
// // // // //                     section.image && (

// // // // //                       <SectionImage
// // // // //                         src={section.image}
// // // // //                         alt={
// // // // //                           section.imageAlt ||
// // // // //                           section.heading
// // // // //                         }
// // // // //                       />

// // // // //                     )}

// // // // //                 </div>

// // // // //               </div>

// // // // //             </section>

// // // // //           ))}


// // // // //           {/* =================================================
// // // // //               CTA
// // // // //           ================================================= */}

// // // // //           <section className="my-10 overflow-hidden rounded-2xl bg-[#052f5f]">

// // // // //             <div className="grid md:grid-cols-[1.15fr_0.85fr]">


// // // // //               <div className="p-7 md:p-9">

// // // // //                 <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">

// // // // //                   Innovare Biopharma

// // // // //                 </span>


// // // // //                 <h2 className="mt-3 text-2xl font-bold leading-tight text-white">

// // // // //                   Supporting Better Water-Quality Management

// // // // //                 </h2>


// // // // //                 <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100">

// // // // //                   Explore Innovare Biopharma&apos;s aquaculture
// // // // //                   solutions designed to support water-quality and
// // // // //                   pond-management programs.

// // // // //                 </p>


// // // // //                 <Link
// // // // //                   href="/products"
// // // // //                   className="
// // // // //                     mt-6
// // // // //                     inline-flex
// // // // //                     rounded-full
// // // // //                     bg-white
// // // // //                     px-5
// // // // //                     py-2.5
// // // // //                     text-sm
// // // // //                     font-semibold
// // // // //                     text-[#052f5f]
// // // // //                     transition
// // // // //                     hover:bg-blue-50
// // // // //                   "
// // // // //                 >
// // // // //                   Explore Water Quality Solutions →
// // // // //                 </Link>

// // // // //               </div>


// // // // //               <div className="relative min-h-[230px]">

// // // // //                 <Image
// // // // //                   src="/images/blog/water-quality-solutions.webp"
// // // // //                   alt="Innovare aquaculture water quality management solutions"
// // // // //                   fill
// // // // //                   sizes="(max-width: 768px) 100vw, 400px"
// // // // //                   className="object-cover"
// // // // //                 />

// // // // //               </div>

// // // // //             </div>

// // // // //           </section>


// // // // //           {/* =================================================
// // // // //               FAQ
// // // // //           ================================================= */}

// // // // //           <section
// // // // //             id="faq"
// // // // //             className="scroll-mt-24 py-8"
// // // // //           >

// // // // //             <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0872ce]">

// // // // //               Frequently Asked Questions

// // // // //             </p>


// // // // //             <h2 className="mt-3 text-2xl font-bold text-slate-900">

// // // // //               Questions About Ammonia in Shrimp Farming

// // // // //             </h2>


// // // // //             <div className="mt-5 grid gap-x-8 md:grid-cols-2">

// // // // //               {post.faq.map((item, index) => (

// // // // //                 <details
// // // // //                   key={index}
// // // // //                   className="group border-b border-slate-200 py-4"
// // // // //                 >

// // // // //                   <summary
// // // // //                     className="
// // // // //                       flex
// // // // //                       cursor-pointer
// // // // //                       list-none
// // // // //                       items-center
// // // // //                       justify-between
// // // // //                       gap-4
// // // // //                       text-sm
// // // // //                       font-semibold
// // // // //                       text-slate-800
// // // // //                     "
// // // // //                   >

// // // // //                     {item.question}


// // // // //                     <span className="text-lg text-[#0872ce] transition-transform group-open:rotate-45">

// // // // //                       +

// // // // //                     </span>

// // // // //                   </summary>


// // // // //                   <p className="mt-3 text-sm leading-6 text-slate-600">

// // // // //                     {item.answer}

// // // // //                   </p>

// // // // //                 </details>

// // // // //               ))}

// // // // //             </div>

// // // // //           </section>


// // // // //           {/* =================================================
// // // // //               REFERENCES
// // // // //           ================================================= */}

// // // // //           <section
// // // // //             id="references"
// // // // //             className="scroll-mt-24 border-t border-slate-200 py-7"
// // // // //           >

// // // // //             <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">

// // // // //               References & Technical Notes

// // // // //             </p>


// // // // //             <ol className="mt-4 space-y-2">

// // // // //               {post.references.map((reference, index) => (

// // // // //                 <li
// // // // //                   key={index}
// // // // //                   className="text-xs leading-6 text-slate-500"
// // // // //                 >

// // // // //                   {index + 1}. {reference.title}

// // // // //                   {reference.source
// // // // //                     ? ` — ${reference.source}`
// // // // //                     : ""}

// // // // //                 </li>

// // // // //               ))}

// // // // //             </ol>

// // // // //           </section>


// // // // //           {/* =================================================
// // // // //               AUTHOR + DATE
// // // // //           ================================================= */}

// // // // //           <section className="border-t border-slate-200 py-8">

// // // // //             <div className="grid gap-5 md:grid-cols-[1.5fr_1fr]">


// // // // //               {/* AUTHOR */}

// // // // //               <div className="rounded-xl border border-slate-200 bg-[#fafcfe] p-6">

// // // // //                 <div className="flex gap-4">


// // // // //                   <div
// // // // //                     className="
// // // // //                       flex
// // // // //                       h-14
// // // // //                       w-14
// // // // //                       shrink-0
// // // // //                       items-center
// // // // //                       justify-center
// // // // //                       rounded-full
// // // // //                       bg-[#052f5f]
// // // // //                       text-lg
// // // // //                       font-bold
// // // // //                       text-white
// // // // //                     "
// // // // //                   >
// // // // //                     IB
// // // // //                   </div>


// // // // //                   <div>

// // // // //                     <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0872ce]">

// // // // //                       About the Author

// // // // //                     </p>


// // // // //                     <h3 className="mt-2 text-base font-bold text-slate-900">

// // // // //                       {post.author.name}

// // // // //                     </h3>


// // // // //                     <p className="mt-1 text-xs font-medium text-[#0872ce]">

// // // // //                       {post.author.role}

// // // // //                     </p>


// // // // //                     <p className="mt-3 text-xs leading-6 text-slate-600">

// // // // //                       {post.author.bio}

// // // // //                     </p>

// // // // //                   </div>

// // // // //                 </div>

// // // // //               </div>


// // // // //               {/* DATE + TAGS */}

// // // // //               <div className="rounded-xl border border-slate-200 p-6">

// // // // //                 <p className="text-xs font-semibold text-slate-700">

// // // // //                   Published on {post.date}

// // // // //                 </p>


// // // // //                 {post.modifiedDate && (

// // // // //                   <p className="mt-2 text-xs text-slate-500">

// // // // //                     Last reviewed on {post.modifiedDate}

// // // // //                   </p>

// // // // //                 )}


// // // // //                 <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">

// // // // //                   Topics

// // // // //                 </p>


// // // // //                 <div className="mt-3 flex flex-wrap gap-2">

// // // // //                   {post.tags.map((tag) => (

// // // // //                     <span
// // // // //                       key={tag}
// // // // //                       className="
// // // // //                         rounded
// // // // //                         border
// // // // //                         border-blue-200
// // // // //                         bg-blue-50
// // // // //                         px-2.5
// // // // //                         py-1
// // // // //                         text-[10px]
// // // // //                         font-medium
// // // // //                         text-[#0872ce]
// // // // //                       "
// // // // //                     >

// // // // //                       {tag}

// // // // //                     </span>

// // // // //                   ))}

// // // // //                 </div>

// // // // //               </div>

// // // // //             </div>

// // // // //           </section>


// // // // //           {/* =================================================
// // // // //               SHARE
// // // // //           ================================================= */}

// // // // //           <section className="border-t border-slate-200 py-6">

// // // // //             <div className="flex flex-wrap items-center gap-5">

// // // // //               <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-700">

// // // // //                 Share This Article

// // // // //               </span>


// // // // //               <ShareButton
// // // // //                 href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
// // // // //                   currentURL
// // // // //                 )}`}
// // // // //                 label="LinkedIn"
// // // // //               />


// // // // //               <ShareButton
// // // // //                 href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
// // // // //                   currentURL
// // // // //                 )}`}
// // // // //                 label="Facebook"
// // // // //               />


// // // // //               <ShareButton
// // // // //                 href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
// // // // //                   currentURL
// // // // //                 )}&text=${encodeURIComponent(
// // // // //                   post.title
// // // // //                 )}`}
// // // // //                 label="X"
// // // // //               />


// // // // //               <ShareButton
// // // // //                 href={`mailto:?subject=${encodeURIComponent(
// // // // //                   post.title
// // // // //                 )}&body=${encodeURIComponent(
// // // // //                   currentURL
// // // // //                 )}`}
// // // // //                 label="Email"
// // // // //               />

// // // // //             </div>

// // // // //           </section>


// // // // //           {/* BACK */}

// // // // //           <div className="pb-8">

// // // // //             <Link
// // // // //               href="/blog"
// // // // //               className="text-sm font-semibold text-[#0872ce] hover:text-[#052f5f]"
// // // // //             >
// // // // //               ← View All Aquaculture Insights
// // // // //             </Link>

// // // // //           </div>

// // // // //         </article>

// // // // //       </section>


// // // // //       {/* =====================================================
// // // // //           RELATED POSTS
// // // // //       ===================================================== */}

// // // // //       {relatedPosts.length > 0 && (

// // // // //         <section className="border-t border-slate-100 bg-[#f7fafc] py-16">

// // // // //           <div className="mx-auto max-w-7xl px-6 lg:px-8">

// // // // //             <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0872ce]">

// // // // //               Continue Learning

// // // // //             </p>


// // // // //             <h2 className="mt-2 text-3xl font-bold text-slate-900">

// // // // //               Related Aquaculture Insights

// // // // //             </h2>


// // // // //             <div className="mt-8 grid gap-7 md:grid-cols-3">

// // // // //               {relatedPosts.map((blog) => (

// // // // //                 <Link
// // // // //                   key={blog.slug}
// // // // //                   href={`/blog/${blog.slug}`}
// // // // //                   className="group"
// // // // //                 >

// // // // //                   <article>


// // // // //                     <div className="relative aspect-[16/10] overflow-hidden rounded-xl">

// // // // //                       <Image
// // // // //                         src={blog.image}
// // // // //                         alt={blog.title}
// // // // //                         fill
// // // // //                         sizes="(max-width: 768px) 100vw, 400px"
// // // // //                         className="object-cover transition duration-500 group-hover:scale-105"
// // // // //                       />

// // // // //                     </div>


// // // // //                     <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0872ce]">

// // // // //                       {blog.category}

// // // // //                     </p>


// // // // //                     <h3 className="mt-2 text-lg font-bold text-slate-900 transition group-hover:text-[#0872ce]">

// // // // //                       {blog.title}

// // // // //                     </h3>


// // // // //                     <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">

// // // // //                       {blog.description}

// // // // //                     </p>

// // // // //                   </article>

// // // // //                 </Link>

// // // // //               ))}

// // // // //             </div>

// // // // //           </div>

// // // // //         </section>

// // // // //       )}

// // // // //     </main>
// // // // //   );
// // // // // }


// // // // // /* =========================================================
// // // // //    KEY TAKEAWAYS
// // // // // ========================================================= */

// // // // // function KeyTakeaways() {
// // // // //   const items = [
// // // // //     {
// // // // //       icon: "NH₃",

// // // // //       text:
// // // // //         "Ammonia exists mainly as NH₄⁺ and NH₃ in pond water.",
// // // // //     },

// // // // //     {
// // // // //       icon: "°C",

// // // // //       text:
// // // // //         "pH and temperature influence the proportion of un-ionized NH₃.",
// // // // //     },

// // // // //     {
// // // // //       icon: "↘",

// // // // //       text:
// // // // //         "Feed, waste and organic matter contribute to ammonia loading.",
// // // // //     },

// // // // //     {
// // // // //       icon: "✓",

// // // // //       text:
// // // // //         "Effective management combines monitoring, aeration and pond care.",
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <section className="my-8 rounded-xl border border-[#dbe8d4] bg-[#f7faf5] p-6">

// // // // //       <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#57923a]">

// // // // //         Key Takeaways

// // // // //       </p>


// // // // //       <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

// // // // //         {items.map((item) => (

// // // // //           <div
// // // // //             key={item.text}
// // // // //             className="flex gap-3"
// // // // //           >

// // // // //             <div
// // // // //               className="
// // // // //                 flex
// // // // //                 h-10
// // // // //                 w-10
// // // // //                 shrink-0
// // // // //                 items-center
// // // // //                 justify-center
// // // // //                 rounded-full
// // // // //                 border
// // // // //                 border-[#93bd79]
// // // // //                 text-xs
// // // // //                 font-bold
// // // // //                 text-[#57923a]
// // // // //               "
// // // // //             >

// // // // //               {item.icon}

// // // // //             </div>


// // // // //             <p className="text-xs font-medium leading-5 text-slate-700">

// // // // //               {item.text}

// // // // //             </p>

// // // // //           </div>

// // // // //         ))}

// // // // //       </div>

// // // // //     </section>
// // // // //   );
// // // // // }


// // // // // /* =========================================================
// // // // //    AMMONIA CHEMISTRY
// // // // // ========================================================= */

// // // // // function AmmoniaChemistry() {
// // // // //   return (
// // // // //     <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

// // // // //       <p className="text-center text-[10px] font-bold uppercase tracking-[0.15em] text-[#0872ce]">

// // // // //         Ammonia Chemistry

// // // // //       </p>


// // // // //       <div className="mt-4 flex items-center justify-center gap-3">


// // // // //         <div className="rounded-lg bg-[#eef8e9] px-4 py-4 text-center">

// // // // //           <p className="text-xl font-bold text-[#47903c]">
// // // // //             NH₄⁺
// // // // //           </p>

// // // // //           <p className="mt-1 text-[10px] font-semibold text-slate-700">
// // // // //             Ammonium
// // // // //           </p>

// // // // //           <p className="text-[9px] text-slate-500">
// // // // //             Ionized form
// // // // //           </p>

// // // // //         </div>


// // // // //         <span className="text-xl text-slate-500">
// // // // //           ⇌
// // // // //         </span>


// // // // //         <div className="rounded-lg bg-[#fff3e9] px-4 py-4 text-center">

// // // // //           <p className="text-xl font-bold text-[#cd7d31]">
// // // // //             NH₃
// // // // //           </p>

// // // // //           <p className="mt-1 text-[10px] font-semibold text-slate-700">
// // // // //             Ammonia
// // // // //           </p>

// // // // //           <p className="text-[9px] text-slate-500">
// // // // //             Un-ionized form
// // // // //           </p>

// // // // //         </div>

// // // // //       </div>


// // // // //       <div className="mt-4 rounded-lg bg-[#eef5fc] p-3">

// // // // //         <p className="text-center text-[10px] leading-4 text-slate-600">

// // // // //           Higher pH and temperature can increase the proportion
// // // // //           of total ammonia present as NH₃.

// // // // //         </p>

// // // // //       </div>

// // // // //     </div>
// // // // //   );
// // // // // }


// // // // // /* =========================================================
// // // // //    AMMONIA PATHWAY
// // // // // ========================================================= */

// // // // // function AmmoniaPathway() {
// // // // //   const sources = [
// // // // //     "Uneaten Feed",
// // // // //     "Shrimp Waste",
// // // // //     "Dead Plankton",
// // // // //     "Organic Matter",
// // // // //   ];

// // // // //   return (
// // // // //     <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

// // // // //       <p className="text-center text-[10px] font-bold uppercase tracking-[0.15em] text-[#0872ce]">

// // // // //         Ammonia Formation Pathway

// // // // //       </p>


// // // // //       <div className="mt-4 grid grid-cols-2 gap-2">

// // // // //         {sources.map((source) => (

// // // // //           <div
// // // // //             key={source}
// // // // //             className="rounded-lg bg-slate-50 p-3 text-center"
// // // // //           >

// // // // //             <p className="text-[10px] font-semibold text-slate-700">

// // // // //               {source}

// // // // //             </p>

// // // // //           </div>

// // // // //         ))}

// // // // //       </div>


// // // // //       <div className="my-3 text-center text-lg text-[#0872ce]">

// // // // //         ↓

// // // // //       </div>


// // // // //       <div className="rounded-md bg-[#edf3f8] p-2 text-center">

// // // // //         <p className="text-[10px] font-medium text-slate-600">

// // // // //           Microbial Decomposition

// // // // //         </p>

// // // // //       </div>


// // // // //       <div className="my-2 text-center text-lg text-[#0872ce]">

// // // // //         ↓

// // // // //       </div>


// // // // //       <div className="rounded-md bg-[#dfeaf4] p-2 text-center">

// // // // //         <p className="text-[10px] font-bold text-slate-700">

// // // // //           Ammonia Load

// // // // //         </p>

// // // // //       </div>

// // // // //     </div>
// // // // //   );
// // // // // }


// // // // // /* =========================================================
// // // // //    PH + TEMPERATURE RELATIONSHIP
// // // // // ========================================================= */

// // // // // function RelationshipDiagram() {
// // // // //   return (
// // // // //     <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

// // // // //       <p className="text-center text-[10px] font-bold uppercase tracking-[0.15em] text-[#0872ce]">

// // // // //         Relationship

// // // // //       </p>


// // // // //       <div className="relative mx-auto mt-5 h-[190px] max-w-[260px]">


// // // // //         <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold text-[#0872ce]">

// // // // //           pH

// // // // //         </div>


// // // // //         <div className="absolute bottom-0 left-0 rounded-lg bg-blue-50 px-3 py-2 text-[10px] font-semibold text-[#0872ce]">

// // // // //           Temperature

// // // // //         </div>


// // // // //         <div className="absolute bottom-0 right-0 rounded-lg bg-blue-50 px-3 py-2 text-[10px] font-semibold text-[#0872ce]">

// // // // //           Ammonia

// // // // //         </div>


// // // // //         <div className="absolute left-1/2 top-[70px] w-[130px] -translate-x-1/2 text-center">

// // // // //           <p className="text-[10px] leading-4 text-slate-600">

// // // // //             Higher pH and temperature influence the proportion
// // // // //             of un-ionized NH₃.

// // // // //           </p>

// // // // //         </div>


// // // // //         <div className="absolute left-[60px] top-[50px] h-[80px] w-px rotate-[38deg] bg-[#0872ce]" />

// // // // //         <div className="absolute right-[60px] top-[50px] h-[80px] w-px -rotate-[38deg] bg-[#0872ce]" />

// // // // //       </div>

// // // // //     </div>
// // // // //   );
// // // // // }


// // // // // /* =========================================================
// // // // //    WATER PARAMETER TABLE
// // // // // ========================================================= */

// // // // // function WaterParameterTable() {
// // // // //   const rows = [
// // // // //     [
// // // // //       "Ammonia",
// // // // //       "Evaluate nitrogen loading and ammonia conditions",
// // // // //     ],

// // // // //     [
// // // // //       "pH",
// // // // //       "Influences the proportion of un-ionized NH₃",
// // // // //     ],

// // // // //     [
// // // // //       "Temperature",
// // // // //       "Influences ammonia equilibrium and pond biology",
// // // // //     ],

// // // // //     [
// // // // //       "Dissolved Oxygen",
// // // // //       "Supports shrimp and important biological processes",
// // // // //     ],

// // // // //     [
// // // // //       "Nitrite",
// // // // //       "Important intermediate in the nitrogen cycle",
// // // // //     ],

// // // // //     [
// // // // //       "Alkalinity",
// // // // //       "Supports buffering capacity and pond stability",
// // // // //     ],

// // // // //     [
// // // // //       "Salinity",
// // // // //       "Important environmental parameter in shrimp culture",
// // // // //     ],
// // // // //   ];

// // // // //   return (
// // // // //     <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">

// // // // //       <div className="bg-[#0872ce] px-4 py-2">

// // // // //         <p className="text-center text-[10px] font-bold uppercase tracking-[0.12em] text-white">

// // // // //           Water-Quality Parameters

// // // // //         </p>

// // // // //       </div>


// // // // //       <div>

// // // // //         {rows.map(([parameter, reason], index) => (

// // // // //           <div
// // // // //             key={parameter}
// // // // //             className={`grid grid-cols-[95px_1fr] gap-3 px-3 py-2 text-[9px] ${
// // // // //               index % 2 === 0
// // // // //                 ? "bg-blue-50"
// // // // //                 : "bg-white"
// // // // //             }`}
// // // // //           >

// // // // //             <span className="font-bold text-slate-700">

// // // // //               {parameter}

// // // // //             </span>


// // // // //             <span className="leading-4 text-slate-500">

// // // // //               {reason}

// // // // //             </span>

// // // // //           </div>

// // // // //         ))}

// // // // //       </div>

// // // // //     </div>
// // // // //   );
// // // // // }


// // // // // /* =========================================================
// // // // //    MANAGEMENT FRAMEWORK
// // // // // ========================================================= */

// // // // // function ManagementFramework() {
// // // // //   const steps = [
// // // // //     ["01", "Measure"],
// // // // //     ["02", "Analyse"],
// // // // //     ["03", "Manage"],
// // // // //     ["04", "Review"],
// // // // //   ];

// // // // //   return (
// // // // //     <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

// // // // //       <p className="text-center text-[10px] font-bold uppercase tracking-[0.15em] text-[#0872ce]">

// // // // //         Management Framework

// // // // //       </p>


// // // // //       <div className="mt-5 grid grid-cols-4 gap-2">

// // // // //         {steps.map(([number, title], index) => (

// // // // //           <div
// // // // //             key={title}
// // // // //             className="relative text-center"
// // // // //           >

// // // // //             <div
// // // // //               className="
// // // // //                 mx-auto
// // // // //                 flex
// // // // //                 h-8
// // // // //                 w-8
// // // // //                 items-center
// // // // //                 justify-center
// // // // //                 rounded-full
// // // // //                 bg-[#0872ce]
// // // // //                 text-[9px]
// // // // //                 font-bold
// // // // //                 text-white
// // // // //               "
// // // // //             >

// // // // //               {number}

// // // // //             </div>


// // // // //             <p className="mt-2 text-[9px] font-bold text-slate-700">

// // // // //               {title}

// // // // //             </p>


// // // // //             {index < steps.length - 1 && (

// // // // //               <span className="absolute -right-[8px] top-[7px] text-xs text-[#0872ce]">

// // // // //                 →

// // // // //               </span>

// // // // //             )}

// // // // //           </div>

// // // // //         ))}

// // // // //       </div>

// // // // //     </div>
// // // // //   );
// // // // // }


// // // // // /* =========================================================
// // // // //    ARTICLE IMAGE
// // // // // ========================================================= */

// // // // // function SectionImage({
// // // // //   src,
// // // // //   alt,
// // // // // }: {
// // // // //   src: string;
// // // // //   alt: string;
// // // // // }) {
// // // // //   return (
// // // // //     <figure>

// // // // //       <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 bg-slate-100">

// // // // //         <Image
// // // // //           src={src}
// // // // //           alt={alt}
// // // // //           fill
// // // // //           sizes="300px"
// // // // //           className="object-cover"
// // // // //         />

// // // // //       </div>


// // // // //       <figcaption className="mt-2 text-[10px] leading-4 text-slate-500">

// // // // //         {alt}

// // // // //       </figcaption>

// // // // //     </figure>
// // // // //   );
// // // // // }


// // // // // /* =========================================================
// // // // //    SHARE BUTTON
// // // // // ========================================================= */

// // // // // function ShareButton({
// // // // //   href,
// // // // //   label,
// // // // // }: {
// // // // //   href: string;
// // // // //   label: string;
// // // // // }) {
// // // // //   return (
// // // // //     <a
// // // // //       href={href}
// // // // //       target="_blank"
// // // // //       rel="noopener noreferrer"
// // // // //       className="text-xs font-semibold text-slate-600 transition hover:text-[#0872ce]"
// // // // //     >
// // // // //       {label}
// // // // //     </a>
// // // // //   );
// // // // // }
// // // // import type { Metadata } from "next";
// // // // import Image from "next/image";
// // // // import Link from "next/link";
// // // // import { notFound } from "next/navigation";

// // // // import { blogs, getBlogBySlug } from "@/data/blogs";

// // // // type BlogPostPageProps = {
// // // //   params: Promise<{
// // // //     slug: string;
// // // //   }>;
// // // // };

// // // // /* =====================================================
// // // //    SEO
// // // // ===================================================== */

// // // // export async function generateMetadata({
// // // //   params,
// // // // }: BlogPostPageProps): Promise<Metadata> {
// // // //   const { slug } = await params;

// // // //   const post = getBlogBySlug(slug);

// // // //   if (!post) {
// // // //     return {
// // // //       title: "Aquaculture Insights | Innovare Biopharma",
// // // //     };
// // // //   }

// // // //   const pageURL =
// // // //     `https://www.innovarebiopharma.com/blog/${post.slug}`;

// // // //   return {
// // // //     title: post.metaTitle,
// // // //     description: post.description,

// // // //     alternates: {
// // // //       canonical: pageURL,
// // // //     },

// // // //     openGraph: {
// // // //       title: post.metaTitle,
// // // //       description: post.description,
// // // //       url: pageURL,
// // // //       type: "article",
// // // //       publishedTime: post.dateISO,
// // // //       modifiedTime: post.modifiedISO || post.dateISO,

// // // //       images: [
// // // //         {
// // // //           url: post.image,
// // // //           width: 1200,
// // // //           height: 630,
// // // //           alt: post.title,
// // // //         },
// // // //       ],
// // // //     },

// // // //     twitter: {
// // // //       card: "summary_large_image",
// // // //       title: post.metaTitle,
// // // //       description: post.description,
// // // //       images: [post.image],
// // // //     },
// // // //   };
// // // // }

// // // // /* =====================================================
// // // //    PAGE
// // // // ===================================================== */

// // // // export default async function BlogPostPage({
// // // //   params,
// // // // }: BlogPostPageProps) {
// // // //   const { slug } = await params;

// // // //   const post = getBlogBySlug(slug);

// // // //   if (!post) {
// // // //     notFound();
// // // //   }

// // // //   const currentURL =
// // // //     `https://www.innovarebiopharma.com/blog/${post.slug}`;

// // // //   const relatedPosts = blogs
// // // //     .filter(
// // // //       (blog) =>
// // // //         blog.category === post.category &&
// // // //         blog.slug !== post.slug
// // // //     )
// // // //     .slice(0, 3);

// // // //   const articleSchema = {
// // // //     "@context": "https://schema.org",
// // // //     "@type": "Article",

// // // //     headline: post.title,
// // // //     description: post.description,

// // // //     image: [
// // // //       `https://www.innovarebiopharma.com${post.image}`,
// // // //     ],

// // // //     datePublished: post.dateISO,
// // // //     dateModified: post.modifiedISO || post.dateISO,

// // // //     author: {
// // // //       "@type": "Organization",
// // // //       name: post.author.name,
// // // //     },

// // // //     publisher: {
// // // //       "@type": "Organization",
// // // //       name: "Innovare Biopharma",
// // // //       url: "https://www.innovarebiopharma.com",
// // // //     },

// // // //     mainEntityOfPage: currentURL,
// // // //   };

// // // //   const faqSchema = {
// // // //     "@context": "https://schema.org",
// // // //     "@type": "FAQPage",

// // // //     mainEntity: post.faq.map((item) => ({
// // // //       "@type": "Question",
// // // //       name: item.question,

// // // //       acceptedAnswer: {
// // // //         "@type": "Answer",
// // // //         text: item.answer,
// // // //       },
// // // //     })),
// // // //   };

// // // //   return (
// // // //     <main className="bg-white text-[#172033]">

// // // //       <script
// // // //         type="application/ld+json"
// // // //         dangerouslySetInnerHTML={{
// // // //           __html: JSON.stringify(articleSchema),
// // // //         }}
// // // //       />

// // // //       <script
// // // //         type="application/ld+json"
// // // //         dangerouslySetInnerHTML={{
// // // //           __html: JSON.stringify(faqSchema),
// // // //         }}
// // // //       />


// // // //       {/* ==================================================
// // // //           HERO
// // // //       ================================================== */}

// // // //       <header className="relative min-h-[520px] overflow-hidden">

// // // //         <Image
// // // //           src={post.image}
// // // //           alt={post.title}
// // // //           fill
// // // //           priority
// // // //           sizes="100vw"
// // // //           className="object-cover object-center"
// // // //         />

// // // //         <div className="absolute inset-0 bg-gradient-to-r from-[#031a30]/95 via-[#052e55]/80 to-transparent" />

// // // //         <div className="absolute inset-0 bg-gradient-to-t from-[#031a30]/30 to-transparent" />


// // // //         <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-14 lg:px-8">

// // // //           <div className="max-w-[740px]">

// // // //             <nav className="mb-7 flex flex-wrap items-center gap-2 text-[12px] text-blue-100">

// // // //               <Link href="/" className="hover:text-white">
// // // //                 Home
// // // //               </Link>

// // // //               <span>›</span>

// // // //               <Link href="/blog" className="hover:text-white">
// // // //                 Insights
// // // //               </Link>

// // // //               <span>›</span>

// // // //               <span>{post.category}</span>

// // // //               <span>›</span>

// // // //               <span className="line-clamp-1">
// // // //                 {post.title}
// // // //               </span>

// // // //             </nav>


// // // //             <div className="flex items-center gap-3">

// // // //               <span className="rounded bg-[#0869bd] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
// // // //                 {post.category}
// // // //               </span>

// // // //               <span className="text-[11px] font-semibold uppercase tracking-wider text-white">
// // // //                 • {post.readTime}
// // // //               </span>

// // // //             </div>


// // // //             <h1 className="mt-5 text-[40px] font-bold leading-[1.08] tracking-tight text-white sm:text-[48px] lg:text-[56px]">
// // // //               {post.title}
// // // //             </h1>


// // // //             <p className="mt-5 max-w-[620px] text-[16px] leading-7 text-blue-50">
// // // //               {post.description}
// // // //             </p>


// // // //             <div className="mt-7 flex items-center gap-4">

// // // //               <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white text-xs font-bold text-[#052f5f]">
// // // //                 IB
// // // //               </div>

// // // //               <div>

// // // //                 <p className="text-[12px] font-semibold text-white">
// // // //                   By {post.author.name}
// // // //                 </p>

// // // //                 <p className="mt-1 text-[11px] text-blue-100">

// // // //                   {post.date}

// // // //                   <span className="mx-2">
// // // //                     •
// // // //                   </span>

// // // //                   Last reviewed on {post.modifiedDate}

// // // //                 </p>

// // // //               </div>

// // // //             </div>

// // // //           </div>

// // // //         </div>

// // // //       </header>


// // // //       {/* ==================================================
// // // //           MAIN ARTICLE
// // // //       ================================================== */}

// // // //       <section className="mx-auto grid max-w-7xl gap-8 px-6 py-9 lg:grid-cols-[205px_minmax(0,1fr)] lg:px-8">

// // // //         {/* =================================================
// // // //             SIDEBAR
// // // //         ================================================= */}

// // // //         <aside className="hidden lg:block">

// // // //           <div className="sticky top-24">

// // // //             <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#0869bd]">
// // // //               Contents
// // // //             </p>


// // // //             <nav className="mt-5 space-y-4">

// // // //               {post.sections.map((section, index) => (

// // // //                 <a
// // // //                   key={section.id}
// // // //                   href={`#${section.id}`}
// // // //                   className="grid grid-cols-[22px_1fr] gap-2 text-[11px] leading-[1.5] text-[#526071] hover:text-[#0869bd]"
// // // //                 >

// // // //                   <span className="font-bold text-[#0869bd]">
// // // //                     {String(index + 1).padStart(2, "0")}
// // // //                   </span>

// // // //                   <span>{section.heading}</span>

// // // //                 </a>

// // // //               ))}


// // // //               <a
// // // //                 href="#faq"
// // // //                 className="block text-[11px] text-[#526071] hover:text-[#0869bd]"
// // // //               >
// // // //                 FAQ
// // // //               </a>

// // // //               <a
// // // //                 href="#references"
// // // //                 className="block text-[11px] text-[#526071] hover:text-[#0869bd]"
// // // //               >
// // // //                 References
// // // //               </a>

// // // //             </nav>


// // // //             <div className="mt-8 rounded-xl bg-[#eef6fd] p-4">

// // // //               <span className="text-2xl font-bold text-[#0869bd]">
// // // //                 “
// // // //               </span>

// // // //               <p className="mt-1 text-[12px] leading-6 text-[#3c4958]">
// // // //                 Good water quality is not about perfect numbers;
// // // //                 it&apos;s about understanding trends and managing
// // // //                 the pond environment consistently.
// // // //               </p>

// // // //               <div className="mt-4 h-[2px] w-8 bg-[#0869bd]" />

// // // //             </div>

// // // //           </div>

// // // //         </aside>


// // // //         {/* =================================================
// // // //             ARTICLE BODY
// // // //         ================================================= */}

// // // //         <article className="min-w-0 max-w-[960px]">

// // // //           <section>

// // // //             {post.introduction.map((paragraph, index) => (

// // // //               <p
// // // //                 key={index}
// // // //                 className={`text-[14px] leading-[1.75] text-[#39485b] ${
// // // //                   index ? "mt-3" : ""
// // // //                 }`}
// // // //               >
// // // //                 {paragraph}
// // // //               </p>

// // // //             ))}

// // // //           </section>


// // // //           {/* KEY TAKEAWAYS */}

// // // //           <KeyTakeaways />


// // // //           {/* SECTIONS */}

// // // //           {post.sections.map((section, index) => (

// // // //             <section
// // // //               key={section.id}
// // // //               id={section.id}
// // // //               className="scroll-mt-24 border-b border-[#edf0f3] py-6 last:border-b-0"
// // // //             >

// // // //               <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_285px]">

// // // //                 <div>

// // // //                   <div className="flex gap-3">

// // // //                     <span className="text-[17px] font-bold text-[#0869bd]">
// // // //                       {String(index + 1).padStart(2, "0")}
// // // //                     </span>

// // // //                     <h2 className="text-[18px] font-bold leading-[1.4] text-[#111827] md:text-[20px]">
// // // //                       {section.heading}
// // // //                     </h2>

// // // //                   </div>


// // // //                   <div className="mt-3 space-y-2.5">

// // // //                     {section.paragraphs.map(
// // // //                       (paragraph, paragraphIndex) => (

// // // //                         <p
// // // //                           key={paragraphIndex}
// // // //                           className="text-[13px] leading-[1.7] text-[#49576a]"
// // // //                         >
// // // //                           {paragraph}
// // // //                         </p>

// // // //                       )
// // // //                     )}

// // // //                   </div>

// // // //                 </div>


// // // //                 {/* RIGHT VISUAL */}

// // // //                 <div>

// // // //                   {section.id === "what-is-ammonia" && (
// // // //                     <AmmoniaChemistry />
// // // //                   )}

// // // //                   {section.id === "causes-ammonia" && (
// // // //                     <AmmoniaPathway />
// // // //                   )}

// // // //                   {section.id === "ammonia-risks" &&
// // // //                     section.image && (
// // // //                       <SectionImage
// // // //                         src={section.image}
// // // //                         alt={
// // // //                           section.imageAlt ||
// // // //                           section.heading
// // // //                         }
// // // //                       />
// // // //                     )}

// // // //                   {section.id === "ph-temperature" && (
// // // //                     <RelationshipDiagram />
// // // //                   )}

// // // //                   {section.id === "monitoring" && (
// // // //                     <WaterParameterTable />
// // // //                   )}

// // // //                   {section.id === "management" && (
// // // //                     <ManagementFramework />
// // // //                   )}

// // // //                   {section.id ===
// // // //                     "microbial-management" &&
// // // //                     section.image && (
// // // //                       <SectionImage
// // // //                         src={section.image}
// // // //                         alt={
// // // //                           section.imageAlt ||
// // // //                           section.heading
// // // //                         }
// // // //                       />
// // // //                     )}

// // // //                   {section.id ===
// // // //                     "preventive-strategy" &&
// // // //                     section.image && (
// // // //                       <SectionImage
// // // //                         src={section.image}
// // // //                         alt={
// // // //                           section.imageAlt ||
// // // //                           section.heading
// // // //                         }
// // // //                       />
// // // //                     )}

// // // //                 </div>

// // // //               </div>

// // // //             </section>

// // // //           ))}


// // // //           {/* CTA */}

// // // //           <section className="my-8 overflow-hidden rounded-xl bg-[#073562]">

// // // //             <div className="grid md:grid-cols-[1.15fr_0.85fr]">

// // // //               <div className="p-6">

// // // //                 <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-300">
// // // //                   Innovare Biopharma
// // // //                 </p>

// // // //                 <h2 className="mt-2 text-[22px] font-bold text-white">
// // // //                   Supporting Better Water-Quality Management
// // // //                 </h2>

// // // //                 <p className="mt-3 text-[13px] leading-6 text-blue-100">
// // // //                   Explore aquaculture solutions designed to support
// // // //                   modern water-quality and pond-management programs.
// // // //                 </p>

// // // //                 <Link
// // // //                   href="/products"
// // // //                   className="mt-5 inline-flex rounded-full bg-white px-5 py-2 text-[12px] font-semibold text-[#073562]"
// // // //                 >
// // // //                   Explore Water Quality Solutions →
// // // //                 </Link>

// // // //               </div>


// // // //               <div className="relative min-h-[200px]">

// // // //                 <Image
// // // //                   src="/images/blog/water-quality-solutions.webp"
// // // //                   alt="Innovare aquaculture water quality solutions"
// // // //                   fill
// // // //                   className="object-cover"
// // // //                 />

// // // //               </div>

// // // //             </div>

// // // //           </section>


// // // //           {/* FAQ */}

// // // //           <section
// // // //             id="faq"
// // // //             className="scroll-mt-24 rounded-xl border border-[#dbe5ef] bg-white p-4"
// // // //           >

// // // //             <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#0869bd]">
// // // //               Frequently Asked Questions
// // // //             </p>


// // // //             <div className="mt-3 grid gap-x-6 md:grid-cols-2">

// // // //               {post.faq.map((item, index) => (

// // // //                 <details
// // // //                   key={index}
// // // //                   className="group border-b border-[#e7edf3] py-2.5"
// // // //                 >

// // // //                   <summary className="flex cursor-pointer list-none justify-between gap-4 text-[11px] font-semibold text-[#263243]">

// // // //                     {item.question}

// // // //                     <span className="text-[#0869bd] group-open:rotate-45">
// // // //                       +
// // // //                     </span>

// // // //                   </summary>

// // // //                   <p className="mt-2 text-[11px] leading-5 text-[#526071]">
// // // //                     {item.answer}
// // // //                   </p>

// // // //                 </details>

// // // //               ))}

// // // //             </div>

// // // //           </section>


// // // //           {/* REFERENCES */}

// // // //           <section
// // // //             id="references"
// // // //             className="scroll-mt-24 py-5"
// // // //           >

// // // //             <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#556274]">
// // // //               References
// // // //             </p>

// // // //             <div className="mt-2 flex flex-wrap gap-x-3 text-[10px] leading-5 text-[#667386]">

// // // //               {post.references.map((reference, index) => (

// // // //                 <span key={index}>
// // // //                   {index + 1}. {reference.title}
// // // //                 </span>

// // // //               ))}

// // // //             </div>

// // // //           </section>


// // // //           {/* AUTHOR / DATE */}

// // // //           <section className="border-t border-[#e6ebf0] py-5">

// // // //             <div className="grid gap-4 md:grid-cols-[1.45fr_1fr]">

// // // //               <div className="rounded-xl border border-[#dfe6ed] bg-[#fafcfe] p-4">

// // // //                 <div className="flex gap-4">

// // // //                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#073562] text-sm font-bold text-white">
// // // //                     IB
// // // //                   </div>

// // // //                   <div>

// // // //                     <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-[#0869bd]">
// // // //                       About the Author
// // // //                     </p>

// // // //                     <h3 className="mt-1 text-[13px] font-bold text-[#172033]">
// // // //                       {post.author.name}
// // // //                     </h3>

// // // //                     <p className="text-[10px] font-semibold text-[#0869bd]">
// // // //                       {post.author.role}
// // // //                     </p>

// // // //                     <p className="mt-2 text-[10px] leading-5 text-[#566476]">
// // // //                       {post.author.bio}
// // // //                     </p>

// // // //                   </div>

// // // //                 </div>

// // // //               </div>


// // // //               <div className="rounded-xl border border-[#dfe6ed] p-4">

// // // //                 <p className="text-[10px] font-semibold text-[#344154]">
// // // //                   Published on {post.date}
// // // //                 </p>

// // // //                 <p className="mt-1 text-[10px] text-[#667386]">
// // // //                   Last reviewed on {post.modifiedDate}
// // // //                 </p>

// // // //                 <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.12em] text-[#526071]">
// // // //                   Topics
// // // //                 </p>

// // // //                 <div className="mt-2 flex flex-wrap gap-1.5">

// // // //                   {post.tags.map((tag) => (

// // // //                     <span
// // // //                       key={tag}
// // // //                       className="rounded border border-blue-200 bg-blue-50 px-2 py-1 text-[9px] font-medium text-[#0869bd]"
// // // //                     >
// // // //                       {tag}
// // // //                     </span>

// // // //                   ))}

// // // //                 </div>

// // // //               </div>

// // // //             </div>

// // // //           </section>


// // // //           {/* SHARE */}

// // // //           <section className="border-t border-[#e6ebf0] py-4">

// // // //             <div className="flex flex-wrap items-center justify-center gap-6">

// // // //               <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#263243]">
// // // //                 Share This Article
// // // //               </span>

// // // //               <ShareButton
// // // //                 href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
// // // //                   currentURL
// // // //                 )}`}
// // // //                 label="LinkedIn"
// // // //               />

// // // //               <ShareButton
// // // //                 href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
// // // //                   currentURL
// // // //                 )}`}
// // // //                 label="Facebook"
// // // //               />

// // // //               <ShareButton
// // // //                 href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
// // // //                   currentURL
// // // //                 )}&text=${encodeURIComponent(
// // // //                   post.title
// // // //                 )}`}
// // // //                 label="X (Twitter)"
// // // //               />

// // // //               <ShareButton
// // // //                 href={`mailto:?subject=${encodeURIComponent(
// // // //                   post.title
// // // //                 )}&body=${encodeURIComponent(
// // // //                   currentURL
// // // //                 )}`}
// // // //                 label="Email"
// // // //               />

// // // //             </div>

// // // //           </section>

// // // //         </article>

// // // //       </section>


// // // //       {/* RELATED */}

// // // //       {relatedPosts.length > 0 && (

// // // //         <section className="border-t border-[#e6ebf0] bg-[#f7fafc] py-12">

// // // //           <div className="mx-auto max-w-7xl px-6 lg:px-8">

// // // //             <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0869bd]">
// // // //               Continue Learning
// // // //             </p>

// // // //             <h2 className="mt-2 text-[26px] font-bold text-[#172033]">
// // // //               Related Aquaculture Insights
// // // //             </h2>


// // // //             <div className="mt-6 grid gap-6 md:grid-cols-3">

// // // //               {relatedPosts.map((blog) => (

// // // //                 <Link
// // // //                   key={blog.slug}
// // // //                   href={`/blog/${blog.slug}`}
// // // //                   className="group"
// // // //                 >

// // // //                   <article>

// // // //                     <div className="relative aspect-[16/10] overflow-hidden rounded-xl">

// // // //                       <Image
// // // //                         src={blog.image}
// // // //                         alt={blog.title}
// // // //                         fill
// // // //                         className="object-cover transition duration-500 group-hover:scale-105"
// // // //                       />

// // // //                     </div>

// // // //                     <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.12em] text-[#0869bd]">
// // // //                       {blog.category}
// // // //                     </p>

// // // //                     <h3 className="mt-1 text-[16px] font-bold text-[#172033] group-hover:text-[#0869bd]">
// // // //                       {blog.title}
// // // //                     </h3>

// // // //                   </article>

// // // //                 </Link>

// // // //               ))}

// // // //             </div>

// // // //           </div>

// // // //         </section>

// // // //       )}

// // // //     </main>
// // // //   );
// // // // }
// // // // function KeyTakeaways() {
// // // //   const items = [
// // // //     {
// // // //       icon: "NH₃",
// // // //       text: "Ammonia exists mainly as NH₄⁺ and NH₃ in pond water.",
// // // //     },
// // // //     {
// // // //       icon: "°C",
// // // //       text: "pH and temperature influence the proportion of toxic NH₃.",
// // // //     },
// // // //     {
// // // //       icon: "↘",
// // // //       text: "Feed, waste and organic matter contribute to ammonia accumulation.",
// // // //     },
// // // //     {
// // // //       icon: "✓",
// // // //       text: "Effective management combines monitoring, aeration, feeding and pond-bottom management.",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <section className="my-6 rounded-xl border border-[#d7e3c9] bg-[#f8fbf4] p-5">

// // // //       <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#4e8d37]">
// // // //         Key Takeaways
// // // //       </p>

// // // //       <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

// // // //         {items.map((item) => (
// // // //           <div key={item.text} className="flex gap-3">

// // // //             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#8cb975] text-[10px] font-bold text-[#4e8d37]">
// // // //               {item.icon}
// // // //             </div>

// // // //             <p className="text-[10px] font-medium leading-5 text-[#374151]">
// // // //               {item.text}
// // // //             </p>

// // // //           </div>
// // // //         ))}

// // // //       </div>

// // // //     </section>
// // // //   );
// // // // }


// // // // function AmmoniaChemistry() {
// // // //   return (
// // // //     <div className="rounded-xl border border-[#dce4eb] bg-white p-4">

// // // //       <p className="text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0869bd]">
// // // //         Ammonia Chemistry
// // // //       </p>

// // // //       <div className="mt-3 flex items-center justify-center gap-3">

// // // //         <div className="rounded-lg bg-[#eff8eb] px-4 py-3 text-center">

// // // //           <p className="text-[19px] font-bold text-[#348a3c]">
// // // //             NH₄⁺
// // // //           </p>

// // // //           <p className="text-[9px] font-semibold">
// // // //             Ammonium
// // // //           </p>

// // // //           <p className="text-[8px] text-[#667386]">
// // // //             Ionized form
// // // //           </p>

// // // //         </div>

// // // //         <span className="text-xl">
// // // //           ⇌
// // // //         </span>

// // // //         <div className="rounded-lg bg-[#fff4e9] px-4 py-3 text-center">

// // // //           <p className="text-[19px] font-bold text-[#bb702b]">
// // // //             NH₃
// // // //           </p>

// // // //           <p className="text-[9px] font-semibold">
// // // //             Ammonia
// // // //           </p>

// // // //           <p className="text-[8px] text-[#667386]">
// // // //             Un-ionized form
// // // //           </p>

// // // //         </div>

// // // //       </div>

// // // //       <div className="mt-3 rounded-lg bg-[#eef5fc] p-3">

// // // //         <p className="text-center text-[9px] leading-4 text-[#4c596b]">
// // // //           Higher pH and temperature can increase the proportion
// // // //           of total ammonia present as NH₃.
// // // //         </p>

// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }


// // // // function AmmoniaPathway() {
// // // //   const sources = [
// // // //     "Uneaten Feed",
// // // //     "Shrimp Waste",
// // // //     "Dead Plankton",
// // // //     "Organic Matter",
// // // //   ];

// // // //   return (
// // // //     <div className="rounded-xl border border-[#dce4eb] bg-white p-4">

// // // //       <p className="text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0869bd]">
// // // //         Ammonia Formation Pathway
// // // //       </p>

// // // //       <div className="mt-3 grid grid-cols-4 gap-1.5">

// // // //         {sources.map((source) => (
// // // //           <div
// // // //             key={source}
// // // //             className="rounded bg-[#f7f9fb] p-2 text-center"
// // // //           >
// // // //             <p className="text-[8px] font-semibold text-[#39485b]">
// // // //               {source}
// // // //             </p>
// // // //           </div>
// // // //         ))}

// // // //       </div>

// // // //       <div className="my-2 text-center text-[#0869bd]">
// // // //         ↓
// // // //       </div>

// // // //       <div className="rounded bg-[#eaf1f7] p-1.5 text-center">
// // // //         <p className="text-[8px] text-[#526071]">
// // // //           Microbial Decomposition
// // // //         </p>
// // // //       </div>

// // // //       <div className="my-1 text-center text-[#0869bd]">
// // // //         ↓
// // // //       </div>

// // // //       <div className="rounded bg-[#dbe7f2] p-1.5 text-center">
// // // //         <p className="text-[8px] font-bold">
// // // //           Ammonia
// // // //         </p>
// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }


// // // // function RelationshipDiagram() {
// // // //   return (
// // // //     <div className="rounded-xl border border-[#dce4eb] bg-white p-4">

// // // //       <p className="text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0869bd]">
// // // //         Relationship
// // // //       </p>

// // // //       <div className="relative mx-auto mt-3 h-[150px] max-w-[240px]">

// // // //         <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-blue-50 px-3 py-1 text-[9px] font-bold text-[#0869bd]">
// // // //           pH
// // // //         </div>

// // // //         <div className="absolute bottom-0 left-0 text-[9px] font-bold text-[#0869bd]">
// // // //           Temperature
// // // //         </div>

// // // //         <div className="absolute bottom-0 right-0 text-[9px] font-bold text-[#0869bd]">
// // // //           Ammonia
// // // //         </div>

// // // //         <p className="absolute left-1/2 top-[55px] w-[120px] -translate-x-1/2 text-center text-[8px] leading-4 text-[#4c596b]">
// // // //           Higher pH and temperature influence the proportion of NH₃.
// // // //         </p>

// // // //         <div className="absolute left-[55px] top-[40px] h-[70px] w-px rotate-[40deg] bg-[#0869bd]" />

// // // //         <div className="absolute right-[55px] top-[40px] h-[70px] w-px -rotate-[40deg] bg-[#0869bd]" />

// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }


// // // // function WaterParameterTable() {
// // // //   const rows = [
// // // //     ["Ammonia", "Evaluate nitrogen loading and ammonia conditions."],
// // // //     ["pH", "Influences the proportion of un-ionized NH₃."],
// // // //     ["Temperature", "Influences ammonia equilibrium."],
// // // //     ["Dissolved Oxygen", "Supports shrimp and biological processes."],
// // // //     ["Nitrite", "Important nitrogen-cycle intermediate."],
// // // //     ["Alkalinity", "Supports buffering and pond stability."],
// // // //     ["Salinity", "Important culture parameter."],
// // // //   ];

// // // //   return (
// // // //     <div className="overflow-hidden rounded-xl border border-[#dce4eb]">

// // // //       <div className="bg-[#0869bd] px-3 py-1.5">
// // // //         <p className="text-center text-[9px] font-bold uppercase tracking-[0.1em] text-white">
// // // //           Water-Quality Parameters
// // // //         </p>
// // // //       </div>

// // // //       {rows.map(([parameter, reason], index) => (
// // // //         <div
// // // //           key={parameter}
// // // //           className={`grid grid-cols-[80px_1fr] gap-2 px-2.5 py-1.5 text-[8px] ${
// // // //             index % 2 === 0
// // // //               ? "bg-[#edf5fc]"
// // // //               : "bg-white"
// // // //           }`}
// // // //         >

// // // //           <span className="font-bold text-[#374151]">
// // // //             {parameter}
// // // //           </span>

// // // //           <span className="leading-4 text-[#667386]">
// // // //             {reason}
// // // //           </span>

// // // //         </div>
// // // //       ))}

// // // //     </div>
// // // //   );
// // // // }


// // // // function ManagementFramework() {
// // // //   const steps = [
// // // //     ["01", "Measure"],
// // // //     ["02", "Analyse"],
// // // //     ["03", "Manage"],
// // // //     ["04", "Review"],
// // // //   ];

// // // //   return (
// // // //     <div className="rounded-xl border border-[#dce4eb] bg-white p-4">

// // // //       <p className="text-center text-[9px] font-bold uppercase tracking-[0.1em] text-[#0869bd]">
// // // //         Management Framework
// // // //       </p>

// // // //       <div className="mt-4 grid grid-cols-4 gap-1">

// // // //         {steps.map(([number, title], index) => (
// // // //           <div key={title} className="relative text-center">

// // // //             <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#0869bd] text-[8px] font-bold text-white">
// // // //               {number}
// // // //             </div>

// // // //             <p className="mt-1 text-[8px] font-bold text-[#374151]">
// // // //               {title}
// // // //             </p>

// // // //             {index < steps.length - 1 && (
// // // //               <span className="absolute -right-1 top-1.5 text-[#0869bd]">
// // // //                 →
// // // //               </span>
// // // //             )}

// // // //           </div>
// // // //         ))}

// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }


// // // // function SectionImage({
// // // //   src,
// // // //   alt,
// // // // }: {
// // // //   src: string;
// // // //   alt: string;
// // // // }) {
// // // //   return (
// // // //     <figure>

// // // //       <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#dce4eb]">

// // // //         <Image
// // // //           src={src}
// // // //           alt={alt}
// // // //           fill
// // // //           sizes="285px"
// // // //           className="object-cover"
// // // //         />

// // // //       </div>

// // // //     </figure>
// // // //   );
// // // // }


// // // // function ShareButton({
// // // //   href,
// // // //   label,
// // // // }: {
// // // //   href: string;
// // // //   label: string;
// // // // }) {
// // // //   return (
// // // //     <a
// // // //       href={href}
// // // //       target="_blank"
// // // //       rel="noopener noreferrer"
// // // //       className="text-[11px] font-semibold text-[#39485b] transition hover:text-[#0869bd]"
// // // //     >
// // // //       {label}
// // // //     </a>
// // // //   );
 
// // // import type { Metadata } from "next";
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import { notFound } from "next/navigation";

// // // import { blogs, getBlogBySlug } from "@/data/blogs";

// // // type BlogPostPageProps = {
// // //   params: Promise<{
// // //     slug: string;
// // //   }>;
// // // };

// // // /* =====================================================
// // //    SEO
// // // ===================================================== */

// // // export async function generateMetadata({
// // //   params,
// // // }: BlogPostPageProps): Promise<Metadata> {
// // //   const { slug } = await params;

// // //   const post = getBlogBySlug(slug);

// // //   if (!post) {
// // //     return {
// // //       title: "Aquaculture Insights | Innovare Biopharma",
// // //     };
// // //   }

// // //   const pageURL = `https://www.innovarebiopharma.com/blog/${post.slug}`;

// // //   return {
// // //     title: post.metaTitle,
// // //     description: post.description,

// // //     alternates: {
// // //       canonical: pageURL,
// // //     },

// // //     openGraph: {
// // //       title: post.metaTitle,
// // //       description: post.description,
// // //       url: pageURL,
// // //       type: "article",
// // //       publishedTime: post.dateISO,
// // //       modifiedTime: post.modifiedISO || post.dateISO,
// // //       images: [
// // //         {
// // //           url: post.image,
// // //           width: 1200,
// // //           height: 630,
// // //           alt: post.title,
// // //         },
// // //       ],
// // //     },

// // //     twitter: {
// // //       card: "summary_large_image",
// // //       title: post.metaTitle,
// // //       description: post.description,
// // //       images: [post.image],
// // //     },
// // //   };
// // // }

// // // /* =====================================================
// // //    PAGE
// // // ===================================================== */

// // // export default async function BlogPostPage({
// // //   params,
// // // }: BlogPostPageProps) {
// // //   const { slug } = await params;

// // //   const post = getBlogBySlug(slug);

// // //   if (!post) {
// // //     notFound();
// // //   }

// // //   const currentURL = `https://www.innovarebiopharma.com/blog/${post.slug}`;

// // //   const relatedPosts = blogs
// // //     .filter(
// // //       (blog) =>
// // //         blog.category === post.category &&
// // //         blog.slug !== post.slug
// // //     )
// // //     .slice(0, 3);

// // //   const articleSchema = {
// // //     "@context": "https://schema.org",
// // //     "@type": "Article",
// // //     headline: post.title,
// // //     description: post.description,
// // //     image: [
// // //       `https://www.innovarebiopharma.com${post.image}`,
// // //     ],
// // //     datePublished: post.dateISO,
// // //     dateModified: post.modifiedISO || post.dateISO,
// // //     author: {
// // //       "@type": "Organization",
// // //       name: post.author.name,
// // //     },
// // //     publisher: {
// // //       "@type": "Organization",
// // //       name: "Innovare Biopharma",
// // //       url: "https://www.innovarebiopharma.com",
// // //     },
// // //     mainEntityOfPage: currentURL,
// // //   };

// // //   const faqSchema = {
// // //     "@context": "https://schema.org",
// // //     "@type": "FAQPage",
// // //     mainEntity: post.faq.map((item) => ({
// // //       "@type": "Question",
// // //       name: item.question,
// // //       acceptedAnswer: {
// // //         "@type": "Answer",
// // //         text: item.answer,
// // //       },
// // //     })),
// // //   };

// // //   return (
// // //     <main className="bg-white text-[#172033]">

// // //       <script
// // //         type="application/ld+json"
// // //         dangerouslySetInnerHTML={{
// // //           __html: JSON.stringify(articleSchema),
// // //         }}
// // //       />

// // //       <script
// // //         type="application/ld+json"
// // //         dangerouslySetInnerHTML={{
// // //           __html: JSON.stringify(faqSchema),
// // //         }}
// // //       />

// // //       {/* ==================================================
// // //           HERO
// // //       ================================================== */}

// // //       <header className="relative min-h-[520px] overflow-hidden">

// // //         <Image
// // //           src={post.image}
// // //           alt={post.title}
// // //           fill
// // //           priority
// // //           sizes="100vw"
// // //           className="object-cover object-center"
// // //         />

// // //         <div className="absolute inset-0 bg-gradient-to-r from-[#031a30]/95 via-[#052e55]/80 to-transparent" />

// // //         <div className="absolute inset-0 bg-gradient-to-t from-[#031a30]/30 to-transparent" />

// // //         <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-14 lg:px-8">

// // //           <div className="max-w-[740px]">

// // //             <nav className="mb-7 flex flex-wrap items-center gap-2 text-[12px] text-blue-100">

// // //               <Link href="/" className="hover:text-white">
// // //                 Home
// // //               </Link>

// // //               <span>›</span>

// // //               <Link href="/blog" className="hover:text-white">
// // //                 Insights
// // //               </Link>

// // //               <span>›</span>

// // //               <span>{post.category}</span>

// // //               <span>›</span>

// // //               <span className="line-clamp-1">
// // //                 {post.title}
// // //               </span>

// // //             </nav>

// // //             <div className="flex items-center gap-3">

// // //               <span className="rounded bg-[#0869bd] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
// // //                 {post.category}
// // //               </span>

// // //               <span className="text-[11px] font-semibold uppercase tracking-wider text-white">
// // //                 • {post.readTime}
// // //               </span>

// // //             </div>

// // //             <h1 className="mt-5 text-[40px] font-bold leading-[1.08] tracking-tight text-white sm:text-[48px] lg:text-[56px]">
// // //               {post.title}
// // //             </h1>

// // //             <p className="mt-5 max-w-[620px] text-[16px] leading-7 text-blue-50">
// // //               {post.description}
// // //             </p>

// // //             <div className="mt-7 flex items-center gap-4">

// // //               <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white text-xs font-bold text-[#052f5f]">
// // //                 IB
// // //               </div>

// // //               <div>

// // //                 <p className="text-[12px] font-semibold text-white">
// // //                   By {post.author.name}
// // //                 </p>

// // //                 <p className="mt-1 text-[11px] text-blue-100">
// // //                   {post.date}
// // //                   <span className="mx-2">•</span>
// // //                   Last reviewed on {post.modifiedDate}
// // //                 </p>

// // //               </div>

// // //             </div>

// // //           </div>

// // //         </div>

// // //       </header>

// // //       {/* ==================================================
// // //           MAIN ARTICLE
// // //       ================================================== */}

// // //       <section className="mx-auto grid max-w-7xl gap-8 px-6 py-9 lg:grid-cols-[205px_minmax(0,1fr)] lg:px-8">

// // //         {/* SIDEBAR */}

// // //         <aside className="hidden lg:block">

// // //           <div className="sticky top-24">

// // //             <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#0869bd]">
// // //               Contents
// // //             </p>

// // //             <nav className="mt-5 space-y-4">

// // //               {post.sections.map((section, index) => (

// // //                 <a
// // //                   key={section.id}
// // //                   href={`#${section.id}`}
// // //                   className="grid grid-cols-[22px_1fr] gap-2 text-[11px] leading-[1.5] text-[#526071] hover:text-[#0869bd]"
// // //                 >

// // //                   <span className="font-bold text-[#0869bd]">
// // //                     {String(index + 1).padStart(2, "0")}
// // //                   </span>

// // //                   <span>{section.heading}</span>

// // //                 </a>

// // //               ))}

// // //               <a
// // //                 href="#faq"
// // //                 className="block text-[11px] text-[#526071] hover:text-[#0869bd]"
// // //               >
// // //                 FAQ
// // //               </a>

// // //               <a
// // //                 href="#references"
// // //                 className="block text-[11px] text-[#526071] hover:text-[#0869bd]"
// // //               >
// // //                 References
// // //               </a>

// // //             </nav>

// // //             <div className="mt-8 rounded-xl bg-[#eef6fd] p-4">

// // //               <span className="text-2xl font-bold text-[#0869bd]">
// // //                 “
// // //               </span>

// // //               <p className="mt-1 text-[12px] leading-6 text-[#3c4958]">
// // //                 Good water quality is not about perfect numbers;
// // //                 it&apos;s about understanding trends and managing
// // //                 the pond environment consistently.
// // //               </p>

// // //               <div className="mt-4 h-[2px] w-8 bg-[#0869bd]" />

// // //             </div>

// // //           </div>

// // //         </aside>

// // //         {/* ARTICLE */}

// // //         <article className="min-w-0 max-w-[960px]">

// // //           <section>

// // //             {post.introduction.map((paragraph, index) => (
// // //               <p
// // //                 key={index}
// // //                 className={`text-[14px] leading-[1.75] text-[#39485b] ${
// // //                   index ? "mt-3" : ""
// // //                 }`}
// // //               >
// // //                 {paragraph}
// // //               </p>
// // //             ))}

// // //           </section>

// // //           <KeyTakeaways />

// // //           {post.sections.map((section, index) => (

// // //             <section
// // //               key={section.id}
// // //               id={section.id}
// // //               className="scroll-mt-24 border-b border-[#edf0f3] py-6 last:border-b-0"
// // //             >

// // //               <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_285px]">

// // //                 <div>

// // //                   <div className="flex gap-3">

// // //                     <span className="text-[17px] font-bold text-[#0869bd]">
// // //                       {String(index + 1).padStart(2, "0")}
// // //                     </span>

// // //                     <h2 className="text-[18px] font-bold leading-[1.4] text-[#111827] md:text-[20px]">
// // //                       {section.heading}
// // //                     </h2>

// // //                   </div>

// // //                   <div className="mt-3 space-y-2.5">

// // //                     {section.paragraphs.map(
// // //                       (paragraph, paragraphIndex) => (
// // //                         <p
// // //                           key={paragraphIndex}
// // //                           className="text-[13px] leading-[1.7] text-[#49576a]"
// // //                         >
// // //                           {paragraph}
// // //                         </p>
// // //                       )
// // //                     )}

// // //                   </div>

// // //                 </div>

// // //                 <div>

// // //                   {section.id === "what-is-ammonia" && (
// // //                     <AmmoniaChemistry />
// // //                   )}

// // //                   {section.id === "causes-ammonia" && (
// // //                     <AmmoniaPathway />
// // //                   )}

// // //                   {section.id === "ammonia-risks" &&
// // //                     section.image && (
// // //                       <SectionImage
// // //                         src={section.image}
// // //                         alt={
// // //                           section.imageAlt ||
// // //                           section.heading
// // //                         }
// // //                       />
// // //                     )}

// // //                   {section.id === "ph-temperature" && (
// // //                     <RelationshipDiagram />
// // //                   )}

// // //                   {section.id === "monitoring" && (
// // //                     <WaterParameterTable />
// // //                   )}

// // //                   {section.id === "management" && (
// // //                     <ManagementFramework />
// // //                   )}

// // //                   {section.id ===
// // //                     "microbial-management" &&
// // //                     section.image && (
// // //                       <SectionImage
// // //                         src={section.image}
// // //                         alt={
// // //                           section.imageAlt ||
// // //                           section.heading
// // //                         }
// // //                       />
// // //                     )}

// // //                   {section.id ===
// // //                     "preventive-strategy" &&
// // //                     section.image && (
// // //                       <SectionImage
// // //                         src={section.image}
// // //                         alt={
// // //                           section.imageAlt ||
// // //                           section.heading
// // //                         }
// // //                       />
// // //                     )}

// // //                 </div>

// // //               </div>

// // //             </section>

// // //           ))}

// // //           {/* CTA */}

// // //           <section className="my-8 overflow-hidden rounded-xl bg-[#073562]">

// // //             <div className="grid md:grid-cols-[1.15fr_0.85fr]">

// // //               <div className="p-6">

// // //                 <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-300">
// // //                   Innovare Biopharma
// // //                 </p>

// // //                 <h2 className="mt-2 text-[22px] font-bold text-white">
// // //                   Supporting Better Water-Quality Management
// // //                 </h2>

// // //                 <p className="mt-3 text-[13px] leading-6 text-blue-100">
// // //                   Explore aquaculture solutions designed to support
// // //                   modern water-quality and pond-management programs.
// // //                 </p>

// // //                 <Link
// // //                   href="/products"
// // //                   className="mt-5 inline-flex rounded-full bg-white px-5 py-2 text-[12px] font-semibold text-[#073562]"
// // //                 >
// // //                   Explore Water Quality Solutions →
// // //                 </Link>

// // //               </div>

// // //               <div className="relative min-h-[200px]">

// // //                 <Image
// // //                   src="/images/products.png"
// // //                   alt="Innovare aquaculture water quality solutions"
// // //                   fill
// // //                   className="object-cover"
// // //                 />

// // //               </div>

// // //             </div>

// // //           </section>

// // //           {/* FAQ */}

// // //           <section
// // //             id="faq"
// // //             className="scroll-mt-24 rounded-xl border border-[#dbe5ef] bg-white p-4"
// // //           >

// // //             <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#0869bd]">
// // //               Frequently Asked Questions
// // //             </p>

// // //             <div className="mt-3 grid gap-x-6 md:grid-cols-2">

// // //               {post.faq.map((item, index) => (

// // //                 <details
// // //                   key={index}
// // //                   className="group border-b border-[#e7edf3] py-2.5"
// // //                 >

// // //                   <summary className="flex cursor-pointer list-none justify-between gap-4 text-[11px] font-semibold text-[#263243]">

// // //                     {item.question}

// // //                     <span className="text-[#0869bd] transition-transform group-open:rotate-45">
// // //                       +
// // //                     </span>

// // //                   </summary>

// // //                   <p className="mt-2 text-[11px] leading-5 text-[#526071]">
// // //                     {item.answer}
// // //                   </p>

// // //                 </details>

// // //               ))}

// // //             </div>

// // //           </section>

// // //           {/* REFERENCES */}

// // //           <section
// // //             id="references"
// // //             className="scroll-mt-24 py-5"
// // //           >

// // //             <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#556274]">
// // //               References
// // //             </p>

// // //             <div className="mt-2 flex flex-wrap gap-x-3 text-[10px] leading-5 text-[#667386]">

// // //               {post.references.map((reference, index) => (
// // //                 <span key={index}>
// // //                   {index + 1}. {reference.title}
// // //                 </span>
// // //               ))}

// // //             </div>

// // //           </section>

// // //           {/* AUTHOR */}

// // //           <section className="border-t border-[#e6ebf0] py-5">

// // //             <div className="grid gap-4 md:grid-cols-[1.45fr_1fr]">

// // //               <div className="rounded-xl border border-[#dfe6ed] bg-[#fafcfe] p-4">

// // //                 <div className="flex gap-4">

// // //                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#dfe6ed] bg-white">
// // //   <img
// // //     src="/images/logo.png"
// // //     alt="Company logo"
// // //     className="h-full w-full object-contain p-1.5"
// // //   />
// // // </div>

// // //                   <div>

// // //                     <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-[#0869bd]">
// // //                       About the Author
// // //                     </p>

// // //                     <h3 className="mt-1 text-[13px] font-bold text-[#172033]">
// // //                       {post.author.name}
// // //                     </h3>

// // //                     <p className="text-[10px] font-semibold text-[#0869bd]">
// // //                       {post.author.role}
// // //                     </p>

// // //                     <p className="mt-2 text-[10px] leading-5 text-[#566476]">
// // //                       {post.author.bio}
// // //                     </p>

// // //                   </div>

// // //                 </div>

// // //               </div>

// // //               <div className="rounded-xl border border-[#dfe6ed] p-4">

// // //                 <p className="text-[10px] font-semibold text-[#344154]">
// // //                   Published on {post.date}
// // //                 </p>

// // //                 <p className="mt-1 text-[10px] text-[#667386]">
// // //                   Last reviewed on {post.modifiedDate}
// // //                 </p>

// // //                 <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.12em] text-[#526071]">
// // //                   Topics
// // //                 </p>

// // //                 <div className="mt-2 flex flex-wrap gap-1.5">

// // //                   {post.tags.map((tag) => (

// // //                     <span
// // //                       key={tag}
// // //                       className="rounded border border-blue-200 bg-blue-50 px-2 py-1 text-[9px] font-medium text-[#0869bd]"
// // //                     >
// // //                       {tag}
// // //                     </span>

// // //                   ))}

// // //                 </div>

// // //               </div>

// // //             </div>

// // //           </section>

// // //           {/* SHARE */}

// // //           <section className="border-t border-[#e6ebf0] py-4">

// // //             <div className="flex flex-wrap items-center justify-center gap-6">

// // //               <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#263243]">
// // //                 Share This Article
// // //               </span>

// // //               <ShareButton
// // //                 href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
// // //                   currentURL
// // //                 )}`}
// // //                 label="LinkedIn"
// // //               />

// // //               <ShareButton
// // //                 href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
// // //                   currentURL
// // //                 )}`}
// // //                 label="Facebook"
// // //               />

// // //               <ShareButton
// // //                 href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
// // //                   currentURL
// // //                 )}&text=${encodeURIComponent(
// // //                   post.title
// // //                 )}`}
// // //                 label="X (Twitter)"
// // //               />

// // //               <ShareButton
// // //                 href={`mailto:?subject=${encodeURIComponent(
// // //                   post.title
// // //                 )}&body=${encodeURIComponent(
// // //                   currentURL
// // //                 )}`}
// // //                 label="Email"
// // //               />

// // //             </div>

// // //           </section>

// // //         </article>

// // //       </section>

// // //       {/* RELATED POSTS */}

// // //       {relatedPosts.length > 0 && (

// // //         <section className="border-t border-[#e6ebf0] bg-[#f7fafc] py-12">

// // //           <div className="mx-auto max-w-7xl px-6 lg:px-8">

// // //             <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0869bd]">
// // //               Continue Learning
// // //             </p>

// // //             <h2 className="mt-2 text-[26px] font-bold text-[#172033]">
// // //               Related Aquaculture Insights
// // //             </h2>

// // //             <div className="mt-6 grid gap-6 md:grid-cols-3">

// // //               {relatedPosts.map((blog) => (

// // //                 <Link
// // //                   key={blog.slug}
// // //                   href={`/blog/${blog.slug}`}
// // //                   className="group"
// // //                 >

// // //                   <article>

// // //                     <div className="relative aspect-[16/10] overflow-hidden rounded-xl">

// // //                       <Image
// // //                         src={blog.image}
// // //                         alt={blog.title}
// // //                         fill
// // //                         className="object-cover transition duration-500 group-hover:scale-105"
// // //                       />

// // //                     </div>

// // //                     <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.12em] text-[#0869bd]">
// // //                       {blog.category}
// // //                     </p>

// // //                     <h3 className="mt-1 text-[16px] font-bold text-[#172033] group-hover:text-[#0869bd]">
// // //                       {blog.title}
// // //                     </h3>

// // //                   </article>

// // //                 </Link>

// // //               ))}

// // //             </div>

// // //           </div>

// // //         </section>

// // //       )}

// // //     </main>
// // //   );
// // // }

// // // /* =====================================================
// // //    HELPERS
// // // ===================================================== */

// // // function KeyTakeaways() {
// // //   const items = [
// // //     {
// // //       icon: "NH₃",
// // //       text: "Ammonia exists mainly as NH₄⁺ and NH₃ in pond water.",
// // //     },
// // //     {
// // //       icon: "°C",
// // //       text: "pH and temperature influence the proportion of toxic NH₃.",
// // //     },
// // //     {
// // //       icon: "↘",
// // //       text: "Feed, waste and organic matter contribute to ammonia accumulation.",
// // //     },
// // //     {
// // //       icon: "✓",
// // //       text: "Effective management combines monitoring, aeration, feeding and pond-bottom management.",
// // //     },
// // //   ];

// // //   return (
// // //     <section className="my-6 rounded-xl border border-[#d7e3c9] bg-[#f8fbf4] p-5">

// // //       <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#4e8d37]">
// // //         Key Takeaways
// // //       </p>

// // //       <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

// // //         {items.map((item) => (
// // //           <div
// // //             key={item.text}
// // //             className="flex gap-3"
// // //           >

// // //             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#8cb975] text-[10px] font-bold text-[#4e8d37]">
// // //               {item.icon}
// // //             </div>

// // //             <p className="text-[10px] font-medium leading-5 text-[#374151]">
// // //               {item.text}
// // //             </p>

// // //           </div>
// // //         ))}

// // //       </div>

// // //     </section>
// // //   );
// // // }

// // // function AmmoniaChemistry() {
// // //   return (
// // //     <div className="rounded-xl border border-[#dce4eb] bg-white p-4">

// // //       <p className="text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0869bd]">
// // //         Ammonia Chemistry
// // //       </p>

// // //       <div className="mt-3 flex items-center justify-center gap-3">

// // //         <div className="rounded-lg bg-[#eff8eb] px-4 py-3 text-center">
// // //           <p className="text-[19px] font-bold text-[#348a3c]">
// // //             NH₄⁺
// // //           </p>
// // //           <p className="text-[9px] font-semibold">
// // //             Ammonium
// // //           </p>
// // //           <p className="text-[8px] text-[#667386]">
// // //             Ionized form
// // //           </p>
// // //         </div>

// // //         <span className="text-xl">
// // //           ⇌
// // //         </span>

// // //         <div className="rounded-lg bg-[#fff4e9] px-4 py-3 text-center">
// // //           <p className="text-[19px] font-bold text-[#bb702b]">
// // //             NH₃
// // //           </p>
// // //           <p className="text-[9px] font-semibold">
// // //             Ammonia
// // //           </p>
// // //           <p className="text-[8px] text-[#667386]">
// // //             Un-ionized form
// // //           </p>
// // //         </div>

// // //       </div>

// // //       <div className="mt-3 rounded-lg bg-[#eef5fc] p-3">
// // //         <p className="text-center text-[9px] leading-4 text-[#4c596b]">
// // //           Higher pH and temperature can increase the proportion
// // //           of total ammonia present as NH₃.
// // //         </p>
// // //       </div>

// // //     </div>
// // //   );
// // // }

// // // function AmmoniaPathway() {
// // //   const sources = [
// // //     "Uneaten Feed",
// // //     "Shrimp Waste",
// // //     "Dead Plankton",
// // //     "Organic Matter",
// // //   ];

// // //   return (
// // //     <div className="rounded-xl border border-[#dce4eb] bg-white p-4">

// // //       <p className="text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0869bd]">
// // //         Ammonia Formation Pathway
// // //       </p>

// // //       <div className="mt-3 grid grid-cols-4 gap-1.5">

// // //         {sources.map((source) => (
// // //           <div
// // //             key={source}
// // //             className="rounded bg-[#f7f9fb] p-2 text-center"
// // //           >
// // //             <p className="text-[8px] font-semibold text-[#39485b]">
// // //               {source}
// // //             </p>
// // //           </div>
// // //         ))}

// // //       </div>

// // //       <div className="my-2 text-center text-[#0869bd]">
// // //         ↓
// // //       </div>

// // //       <div className="rounded bg-[#eaf1f7] p-1.5 text-center">
// // //         <p className="text-[8px] text-[#526071]">
// // //           Microbial Decomposition
// // //         </p>
// // //       </div>

// // //       <div className="my-1 text-center text-[#0869bd]">
// // //         ↓
// // //       </div>

// // //       <div className="rounded bg-[#dbe7f2] p-1.5 text-center">
// // //         <p className="text-[8px] font-bold">
// // //           Ammonia
// // //         </p>
// // //       </div>

// // //     </div>
// // //   );
// // // }

// // // function RelationshipDiagram() {
// // //   return (
// // //     <div className="rounded-xl border border-[#dce4eb] bg-white p-4">

// // //       <p className="text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0869bd]">
// // //         Relationship
// // //       </p>

// // //       <div className="relative mx-auto mt-3 h-[150px] max-w-[240px]">

// // //         <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-blue-50 px-3 py-1 text-[9px] font-bold text-[#0869bd]">
// // //           pH
// // //         </div>

// // //         <div className="absolute bottom-0 left-0 text-[9px] font-bold text-[#0869bd]">
// // //           Temperature
// // //         </div>

// // //         <div className="absolute bottom-0 right-0 text-[9px] font-bold text-[#0869bd]">
// // //           Ammonia
// // //         </div>

// // //         <p className="absolute left-1/2 top-[55px] w-[120px] -translate-x-1/2 text-center text-[8px] leading-4 text-[#4c596b]">
// // //           Higher pH and temperature influence the proportion of NH₃.
// // //         </p>

// // //         <div className="absolute left-[55px] top-[40px] h-[70px] w-px rotate-[40deg] bg-[#0869bd]" />

// // //         <div className="absolute right-[55px] top-[40px] h-[70px] w-px -rotate-[40deg] bg-[#0869bd]" />

// // //       </div>

// // //     </div>
// // //   );
// // // }

// // // function WaterParameterTable() {
// // //   const rows = [
// // //     ["Ammonia", "Evaluate nitrogen loading and ammonia conditions."],
// // //     ["pH", "Influences the proportion of un-ionized NH₃."],
// // //     ["Temperature", "Influences ammonia equilibrium."],
// // //     ["Dissolved Oxygen", "Supports shrimp and biological processes."],
// // //     ["Nitrite", "Important nitrogen-cycle intermediate."],
// // //     ["Alkalinity", "Supports buffering and pond stability."],
// // //     ["Salinity", "Important culture parameter."],
// // //   ];

// // //   return (
// // //     <div className="overflow-hidden rounded-xl border border-[#dce4eb]">

// // //       <div className="bg-[#0869bd] px-3 py-1.5">
// // //         <p className="text-center text-[9px] font-bold uppercase tracking-[0.1em] text-white">
// // //           Water-Quality Parameters
// // //         </p>
// // //       </div>

// // //       {rows.map(([parameter, reason], index) => (
// // //         <div
// // //           key={parameter}
// // //           className={`grid grid-cols-[80px_1fr] gap-2 px-2.5 py-1.5 text-[8px] ${
// // //             index % 2 === 0
// // //               ? "bg-[#edf5fc]"
// // //               : "bg-white"
// // //           }`}
// // //         >
// // //           <span className="font-bold text-[#374151]">
// // //             {parameter}
// // //           </span>

// // //           <span className="leading-4 text-[#667386]">
// // //             {reason}
// // //           </span>
// // //         </div>
// // //       ))}

// // //     </div>
// // //   );
// // // }

// // // function ManagementFramework() {
// // //   const steps = [
// // //     ["01", "Measure"],
// // //     ["02", "Analyse"],
// // //     ["03", "Manage"],
// // //     ["04", "Review"],
// // //   ];

// // //   return (
// // //     <div className="rounded-xl border border-[#dce4eb] bg-white p-4">

// // //       <p className="text-center text-[9px] font-bold uppercase tracking-[0.1em] text-[#0869bd]">
// // //         Management Framework
// // //       </p>

// // //       <div className="mt-4 grid grid-cols-4 gap-1">

// // //         {steps.map(([number, title], index) => (
// // //           <div
// // //             key={title}
// // //             className="relative text-center"
// // //           >
// // //             <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#0869bd] text-[8px] font-bold text-white">
// // //               {number}
// // //             </div>

// // //             <p className="mt-1 text-[8px] font-bold text-[#374151]">
// // //               {title}
// // //             </p>

// // //             {index < steps.length - 1 && (
// // //               <span className="absolute -right-1 top-1.5 text-[#0869bd]">
// // //                 →
// // //               </span>
// // //             )}
// // //           </div>
// // //         ))}

// // //       </div>

// // //     </div>
// // //   );
// // // }

// // // function SectionImage({
// // //   src,
// // //   alt,
// // // }: {
// // //   src: string;
// // //   alt: string;
// // // }) {
// // //   return (
// // //     <figure>
// // //       <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#dce4eb]">
// // //         <Image
// // //           src={src}
// // //           alt={alt}
// // //           fill
// // //           sizes="285px"
// // //           className="object-cover"
// // //         />
// // //       </div>
// // //     </figure>
// // //   );
// // // }

// // // function ShareButton({
// // //   href,
// // //   label,
// // // }: {
// // //   href: string;
// // //   label: string;
// // // }) {
// // //   return (
// // //     <a
// // //       href={href}
// // //       target="_blank"
// // //       rel="noopener noreferrer"
// // //       className="text-[11px] font-semibold text-[#39485b] transition hover:text-[#0869bd]"
// // //     >
// // //       {label}
// // //     </a>
// // //   );
// // // }
// // import type { Metadata } from "next";
// // import { notFound } from "next/navigation";

// // import {
// //   blogs,
// //   getBlogBySlug,
// // } from "@/data/blogs";

// // import BlogArticleClient from "@/app/blog/[Slug]/BlogArticleClient";

// // // type BlogPageProps = {
// // //   params: Promise<{
// // //     slug: string;
// // //   }>;
// // // };

// // type BlogPageProps = {
// //   params: {
// //     slug: string;
// //   };
// // };
// // const SITE_URL =
// //   "https://www.innovarebiopharma.com";

// // /* =========================================================
// //    STATIC PARAMS
// // ========================================================= */

// // export function generateStaticParams() {
// //   return blogs.map((blog) => ({
// //     slug: blog.slug,
// //   }));
// // }

// // /* =========================================================
// //    SEO METADATA
// // ========================================================= */

// // // export async function generateMetadata({
// // //   params,
// // // }: BlogPageProps): Promise<Metadata> {
// // //   const { slug } = await params;

// // //   const post = getBlogBySlug(slug);

// // export function generateMetadata({
// //   params,
// // }: BlogPageProps): Metadata {
// //   const post = getBlogBySlug(params.slug);
  
// //   if (!post) {
// //     return {
// //       title:
// //         "Aquaculture Insights | Innovare Biopharma",
// //       description:
// //         "Explore aquaculture insights on water quality, shrimp health, nutrition and pond management.",
// //     };
// //   }

// //   const url =
// //     `${SITE_URL}/blog/${post.slug}`;

// //   const imageURL =
// //     `${SITE_URL}${post.image}`;

// //   return {
// //     title: post.metaTitle,

// //     description: post.description,

// //     alternates: {
// //       canonical: url,
// //     },

// //     robots: {
// //       index: true,
// //       follow: true,
// //     },

// //     openGraph: {
// //       type: "article",

// //       title: post.ogTitle,

// //       description:
// //         post.ogDescription,

// //       url,

// //       siteName:
// //         "Innovare Biopharma",

// //       locale: "en_US",

// //       publishedTime:
// //         post.dateISO,

// //       modifiedTime:
// //         post.modifiedISO,

// //       images: [
// //         {
// //           url: imageURL,
// //           width: 1200,
// //           height: 630,
// //           alt: post.imageAlt,
// //         },
// //       ],
// //     },

// //     twitter: {
// //       card:
// //         "summary_large_image",

// //       title:
// //         post.ogTitle,

// //       description:
// //         post.ogDescription,

// //       images: [
// //         imageURL,
// //       ],
// //     },
// //   };
// // }

// // /* =========================================================
// //    PAGE
// // ========================================================= */

// // export default async function BlogPage({
// //   params,
// // }: BlogPageProps) {
// //   const { slug } = await params;

// //   const post =
// //     getBlogBySlug(slug);

// //   if (!post) {
// //     notFound();
// //   }

// //   const articleURL =
// //     `${SITE_URL}/blog/${post.slug}`;

// //   const relatedPosts = blogs
// //     .filter(
// //       (item) =>
// //         item.slug !==
// //           post.slug &&
// //         (
// //           item.category ===
// //             post.category ||
// //           item.tags.some((tag) =>
// //             post.tags.includes(tag)
// //           )
// //         )
// //     )
// //     .slice(0, 3);

// //   /* =======================================================
// //      BLOG POSTING SCHEMA
// //   ======================================================= */

// //   const blogPostingSchema = {
// //     "@context":
// //       "https://schema.org",

// //     "@type":
// //       "BlogPosting",

// //     headline:
// //       post.title,

// //     description:
// //       post.description,

// //     datePublished:
// //       post.dateISO,

// //     dateModified:
// //       post.modifiedISO,

// //     inLanguage:
// //       post.language,

// //     mainEntityOfPage: {
// //       "@type":
// //         "WebPage",

// //       "@id":
// //         articleURL,
// //     },

// //     image: [
// //       `${SITE_URL}${post.image}`,
// //     ],

// //     author: {
// //       "@type":
// //         "Organization",

// //       name:
// //         post.author.name,

// //       url:
// //         SITE_URL,
// //     },

// //     publisher: {
// //       "@type":
// //         "Organization",

// //       name:
// //         "Innovare Biopharma LLP",

// //       url:
// //         SITE_URL,

// //       logo: {
// //         "@type":
// //           "ImageObject",

// //         url:
// //           `${SITE_URL}${post.author.logo}`,
// //       },
// //     },

// //     keywords:
// //       post.tags.join(", "),
// //   };

// //   /* =======================================================
// //      BREADCRUMB SCHEMA
// //   ======================================================= */

// //   const breadcrumbSchema = {
// //     "@context":
// //       "https://schema.org",

// //     "@type":
// //       "BreadcrumbList",

// //     itemListElement: [
// //       {
// //         "@type":
// //           "ListItem",

// //         position: 1,

// //         name: "Home",

// //         item:
// //           SITE_URL,
// //       },

// //       {
// //         "@type":
// //           "ListItem",

// //         position: 2,

// //         name: "Insights",

// //         item:
// //           `${SITE_URL}/blog`,
// //       },

// //       {
// //         "@type":
// //           "ListItem",

// //         position: 3,

// //         name:
// //           post.category,

// //         item:
// //           `${SITE_URL}/blog`,
// //       },

// //       {
// //         "@type":
// //           "ListItem",

// //         position: 4,

// //         name:
// //           post.title,

// //         item:
// //           articleURL,
// //       },
// //     ],
// //   };

// //   /* =======================================================
// //      FAQ SCHEMA
// //   ======================================================= */

// //   const faqSchema = {
// //     "@context":
// //       "https://schema.org",

// //     "@type":
// //       "FAQPage",

// //     mainEntity:
// //       post.faq.map(
// //         (faq) => ({
// //           "@type":
// //             "Question",

// //           name:
// //             faq.question,

// //           acceptedAnswer: {
// //             "@type":
// //               "Answer",

// //             text:
// //               faq.answer,
// //           },
// //         })
// //       ),
// //   };

// //   /* =======================================================
// //      ORGANIZATION
// //   ======================================================= */

// //   const organizationSchema = {
// //     "@context":
// //       "https://schema.org",

// //     "@type":
// //       "Organization",

// //     name:
// //       "Innovare Biopharma LLP",

// //     url:
// //       SITE_URL,

// //     logo:
// //       `${SITE_URL}/images/brand/innovare-logo.png`,
// //   };

// //   return (
// //     <>
// //       <script
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{
// //           __html:
// //             JSON.stringify(
// //               blogPostingSchema
// //             ),
// //         }}
// //       />

// //       <script
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{
// //           __html:
// //             JSON.stringify(
// //               breadcrumbSchema
// //             ),
// //         }}
// //       />

// //       <script
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{
// //           __html:
// //             JSON.stringify(
// //               faqSchema
// //             ),
// //         }}
// //       />

// //       <script
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{
// //           __html:
// //             JSON.stringify(
// //               organizationSchema
// //             ),
// //         }}
// //       />

// //       <BlogArticleClient
// //         post={post}
// //         relatedPosts={
// //           relatedPosts
// //         }
// //       />
// //     </>
// //   );
// // }
// import type { Metadata } from "next";
// import { notFound } from "next/navigation";

// import {
//   blogs,
//   getBlogBySlug,
// } from "@/data/blogs";

// import BlogArticleClient from "./BlogArticleClient";

// type BlogPageProps = {
//   params: {
//     slug: string;
//   };
// };

// const SITE_URL = "https://www.innovarebiopharma.com";

// /* =========================================================
//    STATIC PARAMS
// ========================================================= */

// export function generateStaticParams() {
//   return blogs.map((blog) => ({
//     slug: blog.slug,
//   }));
// }

// /* =========================================================
//    SEO METADATA
// ========================================================= */

// export function generateMetadata({
//   params,
// }: BlogPageProps): Metadata {
//   const post = getBlogBySlug(params.slug);

//   if (!post) {
//     return {
//       title:
//         "Aquaculture Insights | Innovare Biopharma",

//       description:
//         "Explore aquaculture insights on water quality, shrimp health, nutrition and pond management.",
//     };
//   }

//   const url =
//     `${SITE_URL}/blog/${post.slug}`;

//   const imageURL =
//     `${SITE_URL}${post.image}`;

//   return {
//     title:
//       post.metaTitle,

//     description:
//       post.description,

//     alternates: {
//       canonical: url,
//     },

//     robots: {
//       index: true,
//       follow: true,
//     },

//     openGraph: {
//       type: "article",

//       title:
//         post.ogTitle ||
//         post.title,

//       description:
//         post.ogDescription ||
//         post.description,

//       url,

//       siteName:
//         "Innovare Biopharma",

//       locale:
//         "en_US",

//       publishedTime:
//         post.dateISO,

//       modifiedTime:
//         post.modifiedISO,

//       images: [
//         {
//           url:
//             imageURL,

//           width:
//             1200,

//           height:
//             630,

//           alt:
//             post.imageAlt ||
//             post.title,
//         },
//       ],
//     },

//     twitter: {
//       card:
//         "summary_large_image",

//       title:
//         post.ogTitle ||
//         post.title,

//       description:
//         post.ogDescription ||
//         post.description,

//       images: [
//         imageURL,
//       ],
//     },
//   };
// }

// /* =========================================================
//    PAGE
// ========================================================= */

// export default function BlogPage({
//   params,
// }: BlogPageProps) {
//   const post =
//     getBlogBySlug(
//       params.slug
//     );

//   if (!post) {
//     notFound();
//   }

//   const articleURL =
//     `${SITE_URL}/blog/${post.slug}`;

//   const relatedPosts =
//     blogs
//       .filter(
//         (item) =>
//           item.slug !==
//             post.slug &&
//           (
//             item.category ===
//               post.category ||
//             item.tags?.some(
//               (tag) =>
//                 post.tags?.includes(
//                   tag
//                 )
//             )
//           )
//       )
//       .slice(0, 3);

//   /* =======================================================
//      BLOG POSTING SCHEMA
//   ======================================================= */

//   const blogPostingSchema = {
//     "@context":
//       "https://schema.org",

//     "@type":
//       "BlogPosting",

//     headline:
//       post.title,

//     description:
//       post.description,

//     datePublished:
//       post.dateISO,

//     dateModified:
//       post.modifiedISO,

//     inLanguage:
//       post.language ||
//       "en",

//     mainEntityOfPage: {
//       "@type":
//         "WebPage",

//       "@id":
//         articleURL,
//     },

//     image: [
//       `${SITE_URL}${post.image}`,
//     ],

//     author: {
//       "@type":
//         "Organization",

//       name:
//         post.author.name,

//       url:
//         SITE_URL,
//     },

//     publisher: {
//       "@type":
//         "Organization",

//       name:
//         "Innovare Biopharma LLP",

//       url:
//         SITE_URL,

//       logo: {
//         "@type":
//           "ImageObject",

//         url:
//           `${SITE_URL}${post.author.logo}`,
//       },
//     },

//     keywords:
//       post.tags?.join(", "),
//   };

//   /* =======================================================
//      BREADCRUMB SCHEMA
//   ======================================================= */

//   const breadcrumbSchema = {
//     "@context":
//       "https://schema.org",

//     "@type":
//       "BreadcrumbList",

//     itemListElement: [
//       {
//         "@type":
//           "ListItem",

//         position: 1,

//         name:
//           "Home",

//         item:
//           SITE_URL,
//       },

//       {
//         "@type":
//           "ListItem",

//         position: 2,

//         name:
//           "Insights",

//         item:
//           `${SITE_URL}/blog`,
//       },

//       {
//         "@type":
//           "ListItem",

//         position: 3,

//         name:
//           post.category,

//         item:
//           `${SITE_URL}/blog`,
//       },

//       {
//         "@type":
//           "ListItem",

//         position: 4,

//         name:
//           post.title,

//         item:
//           articleURL,
//       },
//     ],
//   };

//   /* =======================================================
//      FAQ SCHEMA
//   ======================================================= */

//   const faqSchema = {
//     "@context":
//       "https://schema.org",

//     "@type":
//       "FAQPage",

//     mainEntity:
//       post.faq?.map(
//         (faq) => ({
//           "@type":
//             "Question",

//           name:
//             faq.question,

//           acceptedAnswer: {
//             "@type":
//               "Answer",

//             text:
//               faq.answer,
//           },
//         })
//       ) ?? [],
//   };

//   /* =======================================================
//      ORGANIZATION SCHEMA
//   ======================================================= */

//   const organizationSchema = {
//     "@context":
//       "https://schema.org",

//     "@type":
//       "Organization",

//     name:
//       "Innovare Biopharma LLP",

//     url:
//       SITE_URL,

//     logo:
//       `${SITE_URL}/images/brand/innovare-logo.png`,
//   };

//   return (
//     <>
//       {/* BlogPosting Schema */}

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html:
//             JSON.stringify(
//               blogPostingSchema
//             ),
//         }}
//       />


//       {/* Breadcrumb Schema */}

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html:
//             JSON.stringify(
//               breadcrumbSchema
//             ),
//         }}
//       />


//       {/* FAQ Schema */}

//       {post.faq &&
//         post.faq.length > 0 && (
//           <script
//             type="application/ld+json"
//             dangerouslySetInnerHTML={{
//               __html:
//                 JSON.stringify(
//                   faqSchema
//                 ),
//             }}
//           />
//         )}


//       {/* Organization Schema */}

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html:
//             JSON.stringify(
//               organizationSchema
//             ),
//         }}
//       />


//       {/* Actual Article UI */}

//       <BlogArticleClient
//         post={post}
//         relatedPosts={
//           relatedPosts
//         }
//       />
//     </>
//   );
// }
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { blogs, getBlogBySlug } from "@/data/blogs";

import BlogArticleClient from "./BlogArticleClient";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL = "https://www.innovarebiopharma.com";

/* =========================================================
   STATIC PARAMS
========================================================= */

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

/* =========================================================
   SEO METADATA
========================================================= */

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Aquaculture Insights | Innovare Biopharma",
      description:
        "Explore aquaculture insights on water quality, shrimp health, nutrition and pond management.",
    };
  }

  const url = `${SITE_URL}/blog/${post.slug}`;

  const imageURL = `${SITE_URL}${post.image}`;

  return {
    title: post.metaTitle || post.title,

    description:
      post.metaDescription || post.description,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "article",

      title:
        post.ogTitle ||
        post.metaTitle ||
        post.title,

      description:
        post.ogDescription ||
        post.metaDescription ||
        post.description,

      url,

      siteName: "Innovare Biopharma",

      locale: "en_US",

      publishedTime:
        post.dateISO || post.date,

      modifiedTime:
        post.modifiedISO ||
        post.dateISO ||
        post.date,

      images: [
        {
          url: imageURL,
          width: 1200,
          height: 630,
          alt:
            post.imageAlt ||
            post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title:
        post.ogTitle ||
        post.metaTitle ||
        post.title,

      description:
        post.ogDescription ||
        post.metaDescription ||
        post.description,

      images: [imageURL],
    },
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function BlogPage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleURL =
    `${SITE_URL}/blog/${post.slug}`;

  const relatedPosts = blogs
    .filter((item) => {
      if (item.slug === post.slug) {
        return false;
      }

      const sameCategory =
        item.category === post.category;

      const matchingTag =
        item.tags?.some((tag) =>
          post.tags?.includes(tag)
        ) ?? false;

      return sameCategory || matchingTag;
    })
    .slice(0, 3);

  /* =======================================================
     BLOG POSTING SCHEMA
  ======================================================= */

  const blogPostingSchema = {
    "@context": "https://schema.org",

    "@type": "BlogPosting",

    headline: post.title,

    description:
      post.metaDescription ||
      post.description,

    datePublished:
      post.dateISO ||
      post.date,

    dateModified:
      post.modifiedISO ||
      post.dateISO ||
      post.date,

    inLanguage:
      post.language ||
      "en",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleURL,
    },

    image: [
      `${SITE_URL}${post.image}`,
    ],

    author: {
      "@type": "Organization",

      name:
        post.author?.name ||
        "Innovare Biopharma LLP",

      url: SITE_URL,
    },

    publisher: {
      "@type": "Organization",

      name:
        "Innovare Biopharma LLP",

      url: SITE_URL,

      logo: {
        "@type": "ImageObject",

        url:
          `${SITE_URL}/images/brand/innovare-logo.png`,
      },
    },

    keywords:
      post.tags?.join(", ") || "",
  };

  /* =======================================================
     BREADCRUMB SCHEMA
  ======================================================= */

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },

      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: `${SITE_URL}/blog`,
      },

      {
        "@type": "ListItem",
        position: 3,
        name: post.category,
        item: `${SITE_URL}/blog`,
      },

      {
        "@type": "ListItem",
        position: 4,
        name: post.title,
        item: articleURL,
      },
    ],
  };

  /* =======================================================
     FAQ SCHEMA
  ======================================================= */

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity:
      post.faq?.map((faq) => ({
        "@type": "Question",

        name: faq.question,

        acceptedAnswer: {
          "@type": "Answer",

          text: faq.answer,
        },
      })) ?? [],
  };

  /* =======================================================
     ORGANIZATION SCHEMA
  ======================================================= */

  const organizationSchema = {
    "@context": "https://schema.org",

    "@type": "Organization",

    name: "Innovare Biopharma LLP",

    url: SITE_URL,

    logo:
      `${SITE_URL}/images/brand/innovare-logo.png`,
  };

  return (
    <>
      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostingSchema
          ),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema
          ),
        }}
      />

      {/* FAQ Schema */}
      {post.faq &&
        post.faq.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                faqSchema
              ),
            }}
          />
        )}

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            organizationSchema
          ),
        }}
      />

      {/* Actual Article UI */}
      <BlogArticleClient
        post={post}
        relatedPosts={relatedPosts}
      />
    </>
  );
}