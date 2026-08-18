// // // // // // "use client";

// // // // // // import {
// // // // // //   useEffect,
// // // // // //   useState,
// // // // // // } from "react";

// // // // // // import Image from "next/image";
// // // // // // import Link from "next/link";

// // // // // // import type {
// // // // // //   BlogPost,
// // // // // //   BlogSection,
// // // // // // } from "@/data/blogs";

// // // // // // type Props = {
// // // // // //   post: BlogPost;
// // // // // //   relatedPosts: BlogPost[];
// // // // // // };

// // // // // // export default function BlogArticleClient({
// // // // // //   post,
// // // // // //   relatedPosts,
// // // // // // }: Props) {
// // // // // //   const [progress, setProgress] =
// // // // // //     useState(0);

// // // // // //  const sections = post.sections ?? [];

// // // // // // const [activeSection, setActiveSection] = useState(
// // // // // //   sections[0]?.id ?? ""
// // // // // // );

// // // // // //   /* =====================================================
// // // // // //      READING PROGRESS
// // // // // //   ===================================================== */

// // // // // //   useEffect(() => {
// // // // // //     const updateProgress = () => {
// // // // // //       const scrollTop =
// // // // // //         window.scrollY;

// // // // // //       const total =
// // // // // //         document.documentElement
// // // // // //           .scrollHeight -
// // // // // //         window.innerHeight;

// // // // // //       const percentage =
// // // // // //         total > 0
// // // // // //           ? Math.min(
// // // // // //               100,
// // // // // //               Math.max(
// // // // // //                 0,
// // // // // //                 (scrollTop /
// // // // // //                   total) *
// // // // // //                   100
// // // // // //               )
// // // // // //             )
// // // // // //           : 0;

// // // // // //       setProgress(percentage);
// // // // // //     };

// // // // // //     updateProgress();

// // // // // //     window.addEventListener(
// // // // // //       "scroll",
// // // // // //       updateProgress,
// // // // // //       {
// // // // // //         passive: true,
// // // // // //       }
// // // // // //     );

// // // // // //     return () =>
// // // // // //       window.removeEventListener(
// // // // // //         "scroll",
// // // // // //         updateProgress
// // // // // //       );
// // // // // //   }, []);

// // // // // //   /* =====================================================
// // // // // //      ACTIVE TOC SECTION
// // // // // //   ===================================================== */

// // // // // //   useEffect(() => {
// // // // // //     const elements =
// // // // // //       post.sections
// // // // // //         .map((section) =>
// // // // // //           document.getElementById(
// // // // // //             section.id
// // // // // //           )
// // // // // //         )
// // // // // //         .filter(
// // // // // //           (
// // // // // //             element
// // // // // //           ): element is HTMLElement =>
// // // // // //             Boolean(element)
// // // // // //         );

// // // // // //     if (!elements.length) {
// // // // // //       return;
// // // // // //     }

// // // // // //     const observer =
// // // // // //       new IntersectionObserver(
// // // // // //         (entries) => {
// // // // // //           const visible =
// // // // // //             entries
// // // // // //               .filter(
// // // // // //                 (entry) =>
// // // // // //                   entry.isIntersecting
// // // // // //               )
// // // // // //               .sort(
// // // // // //                 (a, b) =>
// // // // // //                   b.intersectionRatio -
// // // // // //                   a.intersectionRatio
// // // // // //               );

// // // // // //           if (
// // // // // //             visible[0]
// // // // // //               ?.target.id
// // // // // //           ) {
// // // // // //             setActiveSection(
// // // // // //               visible[0]
// // // // // //                 .target.id
// // // // // //             );
// // // // // //           }
// // // // // //         },
// // // // // //         {
// // // // // //           rootMargin:
// // // // // //             "-20% 0px -65% 0px",

// // // // // //           threshold: [
// // // // // //             0.05,
// // // // // //             0.2,
// // // // // //             0.5,
// // // // // //           ],
// // // // // //         }
// // // // // //       );

// // // // // //     elements.forEach(
// // // // // //       (element) =>
// // // // // //         observer.observe(
// // // // // //           element
// // // // // //         )
// // // // // //     );

// // // // // //     return () =>
// // // // // //       observer.disconnect();
// // // // // //   }, [post.sections]);

// // // // // //   return (
// // // // // //     <main className="bg-white text-[#162235]">

// // // // // //       {/* =================================================
// // // // // //           READING PROGRESS
// // // // // //       ================================================= */}

// // // // // //       <div
// // // // // //         aria-hidden="true"
// // // // // //         className="fixed left-0 top-0 z-[100] h-[3px] w-full bg-transparent"
// // // // // //       >
// // // // // //         <div
// // // // // //           className="h-full bg-[#0872ce] transition-[width] duration-100"
// // // // // //           style={{
// // // // // //             width:
// // // // // //               `${progress}%`,
// // // // // //           }}
// // // // // //         />
// // // // // //       </div>


// // // // // //       {/* =================================================
// // // // // //           PUBLICATION BAR
// // // // // //       ================================================= */}

// // // // // //       <div className="border-b border-slate-200 bg-[#f8fafc]">

// // // // // //         <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-2.5 sm:px-6 lg:px-8">

// // // // // //           <p className="truncate text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
// // // // // //             Innovare Insights ·
// // // // // //             Aquaculture Knowledge ·
// // // // // //             Technical Expertise
// // // // // //           </p>

// // // // // //           <Link
// // // // // //             href="/blog"
// // // // // //             className="shrink-0 text-[11px] font-semibold text-[#0872ce] hover:underline"
// // // // // //           >
// // // // // //             All Insights
// // // // // //           </Link>

// // // // // //         </div>

// // // // // //       </div>


// // // // // //       {/* =================================================
// // // // // //           ARTICLE HERO
// // // // // //       ================================================= */}

// // // // // //       <header className="border-b border-slate-200">

// // // // // //         <div className="mx-auto max-w-7xl px-5 pb-10 pt-9 sm:px-6 md:pb-14 md:pt-12 lg:px-8 lg:pb-16">

// // // // // //           {/* Breadcrumb */}

// // // // // //           <nav
// // // // // //             aria-label="Breadcrumb"
// // // // // //             className="flex flex-wrap items-center gap-2 text-xs text-slate-500"
// // // // // //           >

// // // // // //             <Link
// // // // // //               href="/"
// // // // // //               className="transition hover:text-[#0872ce]"
// // // // // //             >
// // // // // //               Home
// // // // // //             </Link>

// // // // // //             <span>/</span>

// // // // // //             <Link
// // // // // //               href="/blog"
// // // // // //               className="transition hover:text-[#0872ce]"
// // // // // //             >
// // // // // //               Insights
// // // // // //             </Link>

// // // // // //             <span>/</span>

// // // // // //             <span>
// // // // // //               {post.category}
// // // // // //             </span>

// // // // // //           </nav>


// // // // // //           {/* Category */}

// // // // // //           <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // // //             {post.category}
// // // // // //           </p>


// // // // // //           {/* Heading */}

// // // // // //           <h1 className="mt-4 max-w-[1050px] text-[clamp(2.5rem,6vw,5.1rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#101c2d]">
// // // // // //             {post.title}
// // // // // //           </h1>


// // // // // //           {/* Deck */}

// // // // // //           <p className="mt-7 max-w-[820px] text-[clamp(1.05rem,1.7vw,1.35rem)] leading-[1.65] text-slate-600">
// // // // // //             {post.description}
// // // // // //           </p>


// // // // // //           {/* Meta */}

// // // // // //           <div className="mt-9 flex flex-col gap-6 border-t border-slate-200 pt-7 md:flex-row md:items-center md:justify-between">

// // // // // //             <div className="flex items-center gap-4">

// // // // // //               <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5">

// // // // // //                 <Image
// // // // // //                   src={
// // // // // //                     post.author
// // // // // //                       .logo
// // // // // //                   }
// // // // // //                   alt="Innovare Biopharma logo"
// // // // // //                   fill
// // // // // //                   sizes="56px"
// // // // // //                   className="object-contain p-1"
// // // // // //                 />

// // // // // //               </div>


// // // // // //               <div>

// // // // // //                 <p className="text-sm font-semibold text-[#172235]">
// // // // // //                   {
// // // // // //                     post.author
// // // // // //                       .name
// // // // // //                   }
// // // // // //                 </p>

// // // // // //                 <p className="mt-1 text-xs text-slate-500">
// // // // // //                   {
// // // // // //                     post.author
// // // // // //                       .role
// // // // // //                   }
// // // // // //                 </p>

// // // // // //               </div>

// // // // // //             </div>


// // // // // //             <div className="grid grid-cols-3 gap-x-7 gap-y-3 text-xs md:text-right">

// // // // // //               <MetaItem
// // // // // //                 label="Published"
// // // // // //                 value={
// // // // // //                   post.date
// // // // // //                 }
// // // // // //               />

// // // // // //               <MetaItem
// // // // // //                 label="Updated"
// // // // // //                 value={
// // // // // //                   post.modifiedDate
// // // // // //                 }
// // // // // //               />

// // // // // //               <MetaItem
// // // // // //                 label="Reading"
// // // // // //                 value={
// // // // // //                   post.readTime
// // // // // //                 }
// // // // // //               />

// // // // // //             </div>

// // // // // //           </div>

// // // // // //         </div>


// // // // // //         {/* Featured Image */}

// // // // // //         <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">

// // // // // //           <figure>

// // // // // //             <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 sm:rounded-2xl">

// // // // // //               <Image
// // // // // //                 src={post.image}
// // // // // //                 alt={
// // // // // //                   post.imageAlt
// // // // // //                 }
// // // // // //                 fill
// // // // // //                 priority
// // // // // //                 sizes="(max-width: 768px) 100vw, 1280px"
// // // // // //                 className="object-cover"
// // // // // //               />

// // // // // //             </div>

// // // // // //             <figcaption className="hidden px-1 pt-3 text-xs leading-5 text-slate-500 sm:block">
// // // // // //               {post.imageAlt}
// // // // // //             </figcaption>

// // // // // //           </figure>

// // // // // //         </div>

// // // // // //       </header>


// // // // // //       {/* =================================================
// // // // // //           MOBILE TABLE OF CONTENTS
// // // // // //       ================================================= */}

// // // // // //       <div className="mx-auto max-w-[860px] px-5 pt-8 lg:hidden">

// // // // // //         <details className="group rounded-xl border border-slate-200 bg-[#f8fafc]">

// // // // // //           <summary className="flex min-h-[54px] cursor-pointer list-none items-center justify-between px-5 text-sm font-semibold text-[#172235]">

// // // // // //             In this article

// // // // // //             <span className="text-xl text-[#0872ce] transition-transform group-open:rotate-45">
// // // // // //               +
// // // // // //             </span>

// // // // // //           </summary>

// // // // // //           <nav className="border-t border-slate-200 px-5 py-4">

// // // // // //             <ol className="space-y-3">

// // // // // //               {post.sections.map(
// // // // // //                 (
// // // // // //                   section,
// // // // // //                   index
// // // // // //                 ) => (
// // // // // //                   <li
// // // // // //                     key={
// // // // // //                       section.id
// // // // // //                     }
// // // // // //                   >
// // // // // //                     <a
// // // // // //                       href={`#${section.id}`}
// // // // // //                       className="flex gap-3 text-sm leading-5 text-slate-600"
// // // // // //                     >
// // // // // //                       <span className="font-semibold text-[#0872ce]">
// // // // // //                         {String(
// // // // // //                           index +
// // // // // //                             1
// // // // // //                         ).padStart(
// // // // // //                           2,
// // // // // //                           "0"
// // // // // //                         )}
// // // // // //                       </span>

// // // // // //                       {
// // // // // //                         section.heading
// // // // // //                       }
// // // // // //                     </a>
// // // // // //                   </li>
// // // // // //                 )
// // // // // //               )}

// // // // // //             </ol>

// // // // // //           </nav>

// // // // // //         </details>

// // // // // //       </div>


// // // // // //       {/* =================================================
// // // // // //           ARTICLE LAYOUT
// // // // // //       ================================================= */}

// // // // // //       <div className="mx-auto grid max-w-7xl gap-14 px-5 py-12 sm:px-6 md:py-16 lg:grid-cols-[220px_minmax(0,760px)] lg:justify-center lg:px-8">

// // // // // //         {/* ===============================================
// // // // // //             DESKTOP TOC
// // // // // //         =============================================== */}

// // // // // //         <aside className="hidden lg:block">

// // // // // //           <div className="sticky top-24">

// // // // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
// // // // // //               In this article
// // // // // //             </p>

// // // // // //             <div className="mt-4 h-px bg-slate-200" />

// // // // // //             <nav className="mt-5">

// // // // // //               <ol className="space-y-1">

// // // // // //                 {post.sections.map(
// // // // // //                   (
// // // // // //                     section,
// // // // // //                     index
// // // // // //                   ) => {

// // // // // //                     const active =
// // // // // //                       activeSection ===
// // // // // //                       section.id;

// // // // // //                     return (
// // // // // //                       <li
// // // // // //                         key={
// // // // // //                           section.id
// // // // // //                         }
// // // // // //                       >

// // // // // //                         <a
// // // // // //                           href={`#${section.id}`}
// // // // // //                           className={`
// // // // // //                             grid
// // // // // //                             grid-cols-[25px_1fr]
// // // // // //                             gap-2
// // // // // //                             border-l-2
// // // // // //                             py-2
// // // // // //                             pl-3
// // // // // //                             text-[11px]
// // // // // //                             leading-5
// // // // // //                             transition
// // // // // //                             ${
// // // // // //                               active
// // // // // //                                 ? "border-[#0872ce] font-semibold text-[#0872ce]"
// // // // // //                                 : "border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-900"
// // // // // //                             }
// // // // // //                           `}
// // // // // //                         >

// // // // // //                           <span>
// // // // // //                             {String(
// // // // // //                               index +
// // // // // //                                 1
// // // // // //                             ).padStart(
// // // // // //                               2,
// // // // // //                               "0"
// // // // // //                             )}
// // // // // //                           </span>

// // // // // //                           <span>
// // // // // //                             {
// // // // // //                               section.heading
// // // // // //                             }
// // // // // //                           </span>

// // // // // //                         </a>

// // // // // //                       </li>
// // // // // //                     );
// // // // // //                   }
// // // // // //                 )}

// // // // // //               </ol>

// // // // // //             </nav>

// // // // // //           </div>

// // // // // //         </aside>


// // // // // //         {/* ===============================================
// // // // // //             ARTICLE
// // // // // //         =============================================== */}

// // // // // //         <article className="min-w-0">

// // // // // //           {/* Introduction */}

// // // // // //           <section>

// // // // // //             {post.introduction.map(
// // // // // //               (
// // // // // //                 paragraph,
// // // // // //                 index
// // // // // //               ) => (

// // // // // //                 <p
// // // // // //                   key={index}
// // // // // //                   className={`
// // // // // //                     text-[clamp(1.05rem,1.2vw,1.16rem)]
// // // // // //                     leading-[1.85]
// // // // // //                     text-slate-700
// // // // // //                     ${
// // // // // //                       index
// // // // // //                         ? "mt-5"
// // // // // //                         : ""
// // // // // //                     }
// // // // // //                   `}
// // // // // //                 >
// // // // // //                   {paragraph}
// // // // // //                 </p>

// // // // // //               )
// // // // // //             )}

// // // // // //           </section>


// // // // // //           {/* ===============================================
// // // // // //               KEY TAKEAWAYS
// // // // // //           =============================================== */}

// // // // // //           <section className="my-12 border-y border-slate-200 py-8">

// // // // // //             <div className="flex items-center gap-3">

// // // // // //               <div className="relative h-8 w-8 shrink-0">

// // // // // //                 <Image
// // // // // //                   src={
// // // // // //                     post.author
// // // // // //                       .logo
// // // // // //                   }
// // // // // //                   alt=""
// // // // // //                   fill
// // // // // //                   sizes="32px"
// // // // // //                   className="object-contain"
// // // // // //                 />

// // // // // //               </div>

// // // // // //               <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // // //                 Key Takeaways
// // // // // //               </p>

// // // // // //             </div>


// // // // // //             <div className="mt-7 grid gap-6 sm:grid-cols-2">

// // // // // //               {post.keyTakeaways.map(
// // // // // //                 (
// // // // // //                   takeaway,
// // // // // //                   index
// // // // // //                 ) => (

// // // // // //                   <div
// // // // // //                     key={
// // // // // //                       takeaway
// // // // // //                     }
// // // // // //                     className="grid grid-cols-[32px_1fr] gap-3"
// // // // // //                   >

// // // // // //                     <span className="text-sm font-bold text-[#0872ce]">
// // // // // //                       {String(
// // // // // //                         index +
// // // // // //                           1
// // // // // //                       ).padStart(
// // // // // //                         2,
// // // // // //                         "0"
// // // // // //                       )}
// // // // // //                     </span>

// // // // // //                     <p className="text-[15px] leading-7 text-slate-700">
// // // // // //                       {takeaway}
// // // // // //                     </p>

// // // // // //                   </div>

// // // // // //                 )
// // // // // //               )}

// // // // // //             </div>

// // // // // //           </section>


// // // // // //           {/* ===============================================
// // // // // //               SECTIONS
// // // // // //           =============================================== */}

// // // // // //           {post.sections.map(
// // // // // //             (
// // // // // //               section,
// // // // // //               index
// // // // // //             ) => (

// // // // // //               <ArticleSection
// // // // // //                 key={
// // // // // //                   section.id
// // // // // //                 }
// // // // // //                 section={
// // // // // //                   section
// // // // // //                 }
// // // // // //                 index={
// // // // // //                   index
// // // // // //                 }
// // // // // //               />

// // // // // //             )
// // // // // //           )}


// // // // // //           {/* ===============================================
// // // // // //               INNOVARE INSIGHT
// // // // // //           =============================================== */}

// // // // // //           <section className="my-14 border-l-[3px] border-[#0872ce] bg-[#f6f9fc] px-6 py-7 sm:px-8">

// // // // // //             <div className="flex items-center gap-3">

// // // // // //               <div className="relative h-9 w-9">

// // // // // //                 <Image
// // // // // //                   src={
// // // // // //                     post.author
// // // // // //                       .logo
// // // // // //                   }
// // // // // //                   alt="Innovare Biopharma"
// // // // // //                   fill
// // // // // //                   sizes="36px"
// // // // // //                   className="object-contain"
// // // // // //                 />

// // // // // //               </div>

// // // // // //               <div>

// // // // // //                 <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0872ce]">
// // // // // //                   Innovare Technical Insight
// // // // // //                 </p>

// // // // // //                 <p className="mt-1 text-xs text-slate-500">
// // // // // //                   Water-quality management
// // // // // //                 </p>

// // // // // //               </div>

// // // // // //             </div>

// // // // // //             <p className="mt-5 text-[16px] leading-8 text-slate-700">
// // // // // //               Ammonia management works best as a system. Monitoring,
// // // // // //               feeding, dissolved oxygen, organic-load control and
// // // // // //               biological management should support one another rather
// // // // // //               than being treated as separate interventions.
// // // // // //             </p>

// // // // // //           </section>


// // // // // //           {/* ===============================================
// // // // // //               PRACTICAL CHECKLIST
// // // // // //           =============================================== */}

// // // // // //           <section className="my-14">

// // // // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // // //               Practical Checklist
// // // // // //             </p>

// // // // // //             <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
// // // // // //               When ammonia begins to rise
// // // // // //             </h2>

// // // // // //             <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">

// // // // // //               {[
// // // // // //                 "Recheck the ammonia result and record the time of sampling.",
// // // // // //                 "Review pond pH and temperature before interpreting the TAN value.",
// // // // // //                 "Check dissolved oxygen and current aeration capacity.",
// // // // // //                 "Review recent feeding rates and actual feed consumption.",
// // // // // //                 "Inspect pond-bottom and organic-loading conditions.",
// // // // // //                 "Record any management action and measure the response.",
// // // // // //               ].map(
// // // // // //                 (
// // // // // //                   item,
// // // // // //                   index
// // // // // //                 ) => (

// // // // // //                   <div
// // // // // //                     key={item}
// // // // // //                     className="grid grid-cols-[38px_1fr] gap-3 py-4"
// // // // // //                   >

// // // // // //                     <span className="text-sm font-bold text-[#0872ce]">
// // // // // //                       {String(
// // // // // //                         index +
// // // // // //                           1
// // // // // //                       ).padStart(
// // // // // //                         2,
// // // // // //                         "0"
// // // // // //                       )}
// // // // // //                     </span>

// // // // // //                     <p className="text-[15px] leading-7 text-slate-700">
// // // // // //                       {item}
// // // // // //                     </p>

// // // // // //                   </div>

// // // // // //                 )
// // // // // //               )}

// // // // // //             </div>

// // // // // //           </section>


// // // // // //           {/* ===============================================
// // // // // //               FAQ
// // // // // //           =============================================== */}

// // // // // //           <section
// // // // // //             id="faq"
// // // // // //             className="scroll-mt-24 py-14"
// // // // // //           >

// // // // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // // //               Frequently Asked Questions
// // // // // //             </p>

// // // // // //             <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold tracking-[-0.03em]">
// // // // // //               Common questions about pond ammonia
// // // // // //             </h2>

// // // // // //             <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">

// // // // // //               {post.faq.map(
// // // // // //                 (
// // // // // //                   item,
// // // // // //                   index
// // // // // //                 ) => (

// // // // // //                   <details
// // // // // //                     key={
// // // // // //                       index
// // // // // //                     }
// // // // // //                     className="group py-5"
// // // // // //                   >

// // // // // //                     <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[15px] font-semibold leading-6 text-[#172235]">

// // // // // //                       <span>
// // // // // //                         {
// // // // // //                           item.question
// // // // // //                         }
// // // // // //                       </span>

// // // // // //                       <span className="shrink-0 text-xl font-light text-[#0872ce] transition-transform group-open:rotate-45">
// // // // // //                         +
// // // // // //                       </span>

// // // // // //                     </summary>

// // // // // //                     <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600">
// // // // // //                       {
// // // // // //                         item.answer
// // // // // //                       }
// // // // // //                     </p>

// // // // // //                   </details>

// // // // // //                 )
// // // // // //               )}

// // // // // //             </div>

// // // // // //           </section>


// // // // // //           {/* ===============================================
// // // // // //               TECHNICAL NOTE
// // // // // //           =============================================== */}

// // // // // //           <section className="border-t border-slate-200 py-8">

// // // // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
// // // // // //               Technical Notes
// // // // // //             </p>

// // // // // //             <div className="mt-4 space-y-3">

// // // // // //               {post.references.map(
// // // // // //                 (
// // // // // //                   reference,
// // // // // //                   index
// // // // // //                 ) => (

// // // // // //                   <p
// // // // // //                     key={
// // // // // //                       index
// // // // // //                     }
// // // // // //                     className="text-xs leading-6 text-slate-500"
// // // // // //                   >
// // // // // //                     <strong className="font-semibold text-slate-700">
// // // // // //                       {
// // // // // //                         reference.label
// // // // // //                       }:
// // // // // //                     </strong>{" "}
// // // // // //                     {
// // // // // //                       reference.note
// // // // // //                     }
// // // // // //                   </p>

// // // // // //                 )
// // // // // //               )}

// // // // // //             </div>

// // // // // //           </section>


// // // // // //           {/* ===============================================
// // // // // //               AUTHOR PROFILE
// // // // // //           =============================================== */}

// // // // // //           <section className="border-t border-slate-200 py-10">

// // // // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // // //               About the Author
// // // // // //             </p>

// // // // // //             <div className="mt-6 grid gap-6 sm:grid-cols-[72px_1fr]">

// // // // // //               <div className="relative h-[72px] w-[72px] overflow-hidden rounded-2xl border border-slate-200 bg-white">

// // // // // //                 <Image
// // // // // //                   src={
// // // // // //                     post.author
// // // // // //                       .logo
// // // // // //                   }
// // // // // //                   alt="Innovare Biopharma logo"
// // // // // //                   fill
// // // // // //                   sizes="72px"
// // // // // //                   className="object-contain p-2"
// // // // // //                 />

// // // // // //               </div>

// // // // // //               <div>

// // // // // //                 <h3 className="text-lg font-semibold text-[#172235]">
// // // // // //                   {
// // // // // //                     post.author
// // // // // //                       .name
// // // // // //                   }
// // // // // //                 </h3>

// // // // // //                 <p className="mt-1 text-sm font-medium text-[#0872ce]">
// // // // // //                   {
// // // // // //                     post.author
// // // // // //                       .role
// // // // // //                   }
// // // // // //                 </p>

// // // // // //                 <p className="mt-4 text-[15px] leading-7 text-slate-600">
// // // // // //                   {
// // // // // //                     post.author
// // // // // //                       .bio
// // // // // //                   }
// // // // // //                 </p>

// // // // // //               </div>

// // // // // //             </div>

// // // // // //           </section>


// // // // // //           {/* ===============================================
// // // // // //               PUBLICATION INFO
// // // // // //           =============================================== */}

// // // // // //           <section className="border-y border-slate-200 py-7">

// // // // // //             <div className="grid gap-6 sm:grid-cols-3">

// // // // // //               <MetaItem
// // // // // //                 label="Published"
// // // // // //                 value={
// // // // // //                   post.date
// // // // // //                 }
// // // // // //               />

// // // // // //               <MetaItem
// // // // // //                 label="Last reviewed"
// // // // // //                 value={
// // // // // //                   post.modifiedDate
// // // // // //                 }
// // // // // //               />

// // // // // //               <MetaItem
// // // // // //                 label="Reading time"
// // // // // //                 value={
// // // // // //                   post.readTime
// // // // // //                 }
// // // // // //               />

// // // // // //             </div>


// // // // // //             <div className="mt-7 border-t border-slate-100 pt-6">

// // // // // //               <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
// // // // // //                 Topics
// // // // // //               </p>

// // // // // //               <div className="mt-3 flex flex-wrap gap-2">

// // // // // //                 {post.tags.map(
// // // // // //                   (tag) => (

// // // // // //                     <span
// // // // // //                       key={tag}
// // // // // //                       className="rounded-full border border-slate-300 px-3 py-1.5 text-[11px] text-slate-600"
// // // // // //                     >
// // // // // //                       {tag}
// // // // // //                     </span>

// // // // // //                   )
// // // // // //                 )}

// // // // // //               </div>

// // // // // //             </div>

// // // // // //           </section>

// // // // // //         </article>

// // // // // //       </div>


// // // // // //       {/* =================================================
// // // // // //           RELATED ARTICLES
// // // // // //       ================================================= */}

// // // // // //       {relatedPosts.length >
// // // // // //         0 && (

// // // // // //         <section className="border-t border-slate-200 bg-[#fafbfd] py-16">

// // // // // //           <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

// // // // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // // //               Continue Reading
// // // // // //             </p>

// // // // // //             <div className="mt-8 grid gap-9 md:grid-cols-3">

// // // // // //               {relatedPosts.map(
// // // // // //                 (blog) => (

// // // // // //                   <Link
// // // // // //                     key={
// // // // // //                       blog.slug
// // // // // //                     }
// // // // // //                     href={`/blog/${blog.slug}`}
// // // // // //                     className="group"
// // // // // //                   >

// // // // // //                     <article>

// // // // // //                       <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">

// // // // // //                         <Image
// // // // // //                           src={
// // // // // //                             blog.image
// // // // // //                           }
// // // // // //                           alt={
// // // // // //                             blog.imageAlt
// // // // // //                           }
// // // // // //                           fill
// // // // // //                           sizes="(max-width: 768px) 100vw, 33vw"
// // // // // //                           className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
// // // // // //                         />

// // // // // //                       </div>

// // // // // //                       <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0872ce]">
// // // // // //                         {
// // // // // //                           blog.category
// // // // // //                         }
// // // // // //                       </p>

// // // // // //                       <h3 className="mt-2 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#172235] transition group-hover:text-[#0872ce]">
// // // // // //                         {
// // // // // //                           blog.title
// // // // // //                         }
// // // // // //                       </h3>

// // // // // //                       <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
// // // // // //                         {
// // // // // //                           blog.description
// // // // // //                         }
// // // // // //                       </p>

// // // // // //                       <p className="mt-4 text-xs text-slate-400">
// // // // // //                         {
// // // // // //                           blog.readTime
// // // // // //                         }{" "}
// // // // // //                         ·{" "}
// // // // // //                         {
// // // // // //                           blog.date
// // // // // //                         }
// // // // // //                       </p>

// // // // // //                     </article>

// // // // // //                   </Link>

// // // // // //                 )
// // // // // //               )}

// // // // // //             </div>

// // // // // //           </div>

// // // // // //         </section>

// // // // // //       )}


// // // // // //       {/* =================================================
// // // // // //           COMPANY CTA
// // // // // //       ================================================= */}

// // // // // //       <section className="px-5 py-14 sm:px-6 md:py-20">

// // // // // //         <div className="mx-auto grid max-w-7xl overflow-hidden bg-[#072f59] lg:grid-cols-[1.1fr_0.9fr]">

// // // // // //           <div className="p-8 sm:p-10 md:p-14">

// // // // // //             <div className="relative h-11 w-11">

// // // // // //               <Image
// // // // // //                 src={
// // // // // //                   post.author.logo
// // // // // //                 }
// // // // // //                 alt="Innovare Biopharma"
// // // // // //                 fill
// // // // // //                 sizes="44px"
// // // // // //                 className="object-contain"
// // // // // //               />

// // // // // //             </div>

// // // // // //             <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">
// // // // // //               Innovare Biopharma
// // // // // //             </p>

// // // // // //             <h2 className="mt-3 max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
// // // // // //               Better water quality starts with better decisions.
// // // // // //             </h2>

// // // // // //             <p className="mt-5 max-w-xl text-[15px] leading-7 text-blue-100">
// // // // // //               Explore Innovare&apos;s aquaculture portfolio and
// // // // // //               technical solutions for water-quality and pond-management
// // // // // //               programs.
// // // // // //             </p>

// // // // // //             <div className="mt-8 flex flex-wrap gap-3">

// // // // // //               <Link
// // // // // //                 href="/products"
// // // // // //                 className="inline-flex min-h-[46px] items-center justify-center bg-white px-6 text-sm font-semibold text-[#072f59] transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-sky-300"
// // // // // //               >
// // // // // //                 Explore Products
// // // // // //               </Link>

// // // // // //               <Link
// // // // // //                 href="/contact"
// // // // // //                 className="inline-flex min-h-[46px] items-center justify-center border border-white/30 px-6 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-300"
// // // // // //               >
// // // // // //                 Contact Us
// // // // // //               </Link>

// // // // // //             </div>

// // // // // //           </div>


// // // // // //           <div className="relative min-h-[300px]">

// // // // // //             <Image
// // // // // //               src="/images/blog/water-quality-solutions.webp"
// // // // // //               alt="Innovare aquaculture water-quality solutions"
// // // // // //               fill
// // // // // //               sizes="(max-width: 1024px) 100vw, 45vw"
// // // // // //               className="object-cover"
// // // // // //             />

// // // // // //           </div>

// // // // // //         </div>

// // // // // //       </section>


// // // // // //       {/* =================================================
// // // // // //           NEWSLETTER
// // // // // //       ================================================= */}

// // // // // //       <section className="border-t border-slate-200 bg-[#f7f9fc]">

// // // // // //         <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-6 md:grid-cols-[1fr_0.9fr] md:items-center md:py-16 lg:px-8">

// // // // // //           <div>

// // // // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // // //               Stay Ahead
// // // // // //             </p>

// // // // // //             <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em]">
// // // // // //               Aquaculture knowledge delivered simply.
// // // // // //             </h2>

// // // // // //             <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
// // // // // //               Receive new technical insights and educational
// // // // // //               aquaculture resources from Innovare Biopharma.
// // // // // //             </p>

// // // // // //           </div>


// // // // // //           <form className="flex flex-col gap-2 sm:flex-row">

// // // // // //             <label
// // // // // //               htmlFor="article-email"
// // // // // //               className="sr-only"
// // // // // //             >
// // // // // //               Email address
// // // // // //             </label>

// // // // // //             <input
// // // // // //               id="article-email"
// // // // // //               type="email"
// // // // // //               placeholder="Email address"
// // // // // //               className="min-h-[48px] min-w-0 flex-1 border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-[#0872ce] focus:ring-2 focus:ring-blue-100"
// // // // // //             />

// // // // // //             <button
// // // // // //               type="submit"
// // // // // //               className="min-h-[48px] bg-[#0872ce] px-6 text-sm font-semibold text-white transition hover:bg-[#075fae] focus:outline-none focus:ring-2 focus:ring-blue-300"
// // // // // //             >
// // // // // //               Subscribe
// // // // // //             </button>

// // // // // //           </form>

// // // // // //         </div>

// // // // // //       </section>

// // // // // //     </main>
// // // // // //   );
// // // // // // }


// // // // // // /* =========================================================
// // // // // //    ARTICLE SECTION
// // // // // // ========================================================= */

// // // // // // function ArticleSection({
// // // // // //   section,
// // // // // //   index,
// // // // // // }: {
// // // // // //   section: BlogSection;
// // // // // //   index: number;
// // // // // // }) {
// // // // // //   return (
// // // // // //     <section
// // // // // //       id={section.id}
// // // // // //       className="scroll-mt-24 py-12 first:pt-4"
// // // // // //     >

// // // // // //       <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // // //         {String(
// // // // // //           index + 1
// // // // // //         ).padStart(
// // // // // //           2,
// // // // // //           "0"
// // // // // //         )}
// // // // // //       </p>


// // // // // //       <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.7rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-[#172235]">
// // // // // //         {section.heading}
// // // // // //       </h2>


// // // // // //       <div className="mt-6 space-y-5">

// // // // // //         {section.paragraphs.map(
// // // // // //           (
// // // // // //             paragraph,
// // // // // //             paragraphIndex
// // // // // //           ) => (

// // // // // //             <p
// // // // // //               key={
// // // // // //                 paragraphIndex
// // // // // //               }
// // // // // //               className="text-[17px] leading-[1.85] text-slate-700"
// // // // // //             >
// // // // // //               {paragraph}
// // // // // //             </p>

// // // // // //           )
// // // // // //         )}

// // // // // //       </div>


// // // // // //       {section.bullets && (

// // // // // //         <ul className="mt-7 space-y-3 border-l-2 border-blue-100 pl-6">

// // // // // //           {section.bullets.map(
// // // // // //             (bullet) => (

// // // // // //               <li
// // // // // //                 key={
// // // // // //                   bullet
// // // // // //                 }
// // // // // //                 className="text-[15px] leading-7 text-slate-700"
// // // // // //               >
// // // // // //                 {bullet}
// // // // // //               </li>

// // // // // //             )
// // // // // //           )}

// // // // // //         </ul>

// // // // // //       )}


// // // // // //       <SectionVisual
// // // // // //         section={
// // // // // //           section
// // // // // //         }
// // // // // //       />

// // // // // //     </section>
// // // // // //   );
// // // // // // }


// // // // // // /* =========================================================
// // // // // //    VISUALS
// // // // // // ========================================================= */

// // // // // // function SectionVisual({
// // // // // //   section,
// // // // // // }: {
// // // // // //   section: BlogSection;
// // // // // // }) {
// // // // // //   if (
// // // // // //     section.type ===
// // // // // //     "chemistry"
// // // // // //   ) {
// // // // // //     return (
// // // // // //       <AmmoniaChemistry />
// // // // // //     );
// // // // // //   }

// // // // // //   if (
// // // // // //     section.type ===
// // // // // //     "pathway"
// // // // // //   ) {
// // // // // //     return (
// // // // // //       <AmmoniaPathway />
// // // // // //     );
// // // // // //   }

// // // // // //   if (
// // // // // //     section.type ===
// // // // // //     "relationship"
// // // // // //   ) {
// // // // // //     return (
// // // // // //       <RelationshipGraphic />
// // // // // //     );
// // // // // //   }

// // // // // //   if (
// // // // // //     section.type ===
// // // // // //     "monitoring"
// // // // // //   ) {
// // // // // //     return (
// // // // // //       <MonitoringGrid />
// // // // // //     );
// // // // // //   }

// // // // // //   if (
// // // // // //     section.type ===
// // // // // //     "management"
// // // // // //   ) {
// // // // // //     return (
// // // // // //       <ManagementFramework />
// // // // // //     );
// // // // // //   }

// // // // // //   if (
// // // // // //     section.type ===
// // // // // //     "mistakes"
// // // // // //   ) {
// // // // // //     return (
// // // // // //       <MistakesCallout />
// // // // // //     );
// // // // // //   }

// // // // // //   if (section.image) {
// // // // // //     return (
// // // // // //       <figure className="mt-9">

// // // // // //         <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">

// // // // // //           <Image
// // // // // //             src={
// // // // // //               section.image
// // // // // //             }
// // // // // //             alt={
// // // // // //               section.imageAlt ||
// // // // // //               section.heading
// // // // // //             }
// // // // // //             fill
// // // // // //             sizes="(max-width: 1024px) 100vw, 760px"
// // // // // //             className="object-cover"
// // // // // //           />

// // // // // //         </div>

// // // // // //         {section.caption && (
// // // // // //           <figcaption className="mt-3 text-xs leading-5 text-slate-500">
// // // // // //             {
// // // // // //               section.caption
// // // // // //             }
// // // // // //           </figcaption>
// // // // // //         )}

// // // // // //       </figure>
// // // // // //     );
// // // // // //   }

// // // // // //   return null;
// // // // // // }


// // // // // // /* =========================================================
// // // // // //    CHEMISTRY VISUAL
// // // // // // ========================================================= */

// // // // // // function AmmoniaChemistry() {
// // // // // //   return (
// // // // // //     <div className="mt-9 border border-slate-200 bg-[#fafbfd] p-6 sm:p-8">

// // // // // //       <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0872ce]">
// // // // // //         Ammonia Chemistry
// // // // // //       </p>

// // // // // //       <div className="mt-8 grid items-center gap-5 sm:grid-cols-[1fr_auto_1fr]">

// // // // // //         <div className="border border-emerald-100 bg-emerald-50 p-6 text-center">

// // // // // //           <p className="text-4xl font-semibold text-emerald-700">
// // // // // //             NH₄⁺
// // // // // //           </p>

// // // // // //           <p className="mt-3 text-sm font-semibold text-slate-800">
// // // // // //             Ammonium
// // // // // //           </p>

// // // // // //           <p className="mt-1 text-xs text-slate-500">
// // // // // //             Ionized form
// // // // // //           </p>

// // // // // //         </div>


// // // // // //         <div className="text-center text-3xl text-slate-400">
// // // // // //           ⇌
// // // // // //         </div>


// // // // // //         <div className="border border-amber-100 bg-amber-50 p-6 text-center">

// // // // // //           <p className="text-4xl font-semibold text-amber-700">
// // // // // //             NH₃
// // // // // //           </p>

// // // // // //           <p className="mt-3 text-sm font-semibold text-slate-800">
// // // // // //             Un-ionized ammonia
// // // // // //           </p>

// // // // // //           <p className="mt-1 text-xs text-slate-500">
// // // // // //             More toxic form
// // // // // //           </p>

// // // // // //         </div>

// // // // // //       </div>

// // // // // //       <p className="mt-6 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600">
// // // // // //         Increasing pH and temperature can increase the proportion of
// // // // // //         total ammonia present as NH₃.
// // // // // //       </p>

// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // // /* =========================================================
// // // // // //    AMMONIA PATHWAY
// // // // // // ========================================================= */

// // // // // // function AmmoniaPathway() {
// // // // // //   const sources = [
// // // // // //     "Feed",
// // // // // //     "Shrimp waste",
// // // // // //     "Dead plankton",
// // // // // //     "Organic sludge",
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div className="mt-9 bg-[#072f59] p-6 text-white sm:p-8">

// // // // // //       <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-300">
// // // // // //         Ammonia Formation Pathway
// // // // // //       </p>

// // // // // //       <div className="mt-7 grid gap-3 sm:grid-cols-4">

// // // // // //         {sources.map(
// // // // // //           (
// // // // // //             item,
// // // // // //             index
// // // // // //           ) => (

// // // // // //             <div
// // // // // //               key={item}
// // // // // //               className="border border-white/15 p-4"
// // // // // //             >

// // // // // //               <p className="text-xs text-sky-300">
// // // // // //                 0
// // // // // //                 {index + 1}
// // // // // //               </p>

// // // // // //               <p className="mt-2 text-sm font-semibold">
// // // // // //                 {item}
// // // // // //               </p>

// // // // // //             </div>

// // // // // //           )
// // // // // //         )}

// // // // // //       </div>

// // // // // //       <div className="py-4 text-center text-sky-300">
// // // // // //         ↓
// // // // // //       </div>

// // // // // //       <div className="border border-white/15 bg-white/5 p-4 text-center text-sm">
// // // // // //         Microbial decomposition
// // // // // //       </div>

// // // // // //       <div className="py-4 text-center text-sky-300">
// // // // // //         ↓
// // // // // //       </div>

// // // // // //       <div className="bg-white p-4 text-center font-semibold text-[#072f59]">
// // // // // //         Ammonia / TAN
// // // // // //       </div>

// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // // /* =========================================================
// // // // // //    RELATIONSHIP
// // // // // // ========================================================= */

// // // // // // function RelationshipGraphic() {
// // // // // //   return (
// // // // // //     <div className="mt-9 border-y border-slate-200 py-8">

// // // // // //       <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0872ce]">
// // // // // //         Interpret Together
// // // // // //       </p>

// // // // // //       <div className="mt-7 grid gap-4 sm:grid-cols-3">

// // // // // //         <RelationshipItem
// // // // // //           title="pH"
// // // // // //           description="Changes the proportion of NH₃."
// // // // // //         />

// // // // // //         <RelationshipItem
// // // // // //           title="Temperature"
// // // // // //           description="Influences ammonia equilibrium."
// // // // // //         />

// // // // // //         <RelationshipItem
// // // // // //           title="TAN"
// // // // // //           description="Must be interpreted in context."
// // // // // //         />

// // // // // //       </div>

// // // // // //       <div className="mt-6 flex items-center justify-center">

// // // // // //         <div className="border border-blue-100 bg-blue-50 px-5 py-3 text-center text-sm font-semibold text-[#075fae]">
// // // // // //           pH + Temperature + TAN → Better interpretation
// // // // // //         </div>

// // // // // //       </div>

// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // // function RelationshipItem({
// // // // // //   title,
// // // // // //   description,
// // // // // // }: {
// // // // // //   title: string;
// // // // // //   description: string;
// // // // // // }) {
// // // // // //   return (
// // // // // //     <div className="border border-slate-200 p-5">

// // // // // //       <p className="text-xl font-semibold text-[#0872ce]">
// // // // // //         {title}
// // // // // //       </p>

// // // // // //       <p className="mt-2 text-sm leading-6 text-slate-600">
// // // // // //         {description}
// // // // // //       </p>

// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // // /* =========================================================
// // // // // //    MONITORING GRID
// // // // // // ========================================================= */

// // // // // // function MonitoringGrid() {
// // // // // //   const parameters = [
// // // // // //     [
// // // // // //       "Ammonia",
// // // // // //       "Nitrogen loading",
// // // // // //     ],
// // // // // //     [
// // // // // //       "pH",
// // // // // //       "NH₃ equilibrium",
// // // // // //     ],
// // // // // //     [
// // // // // //       "Temperature",
// // // // // //       "Water chemistry",
// // // // // //     ],
// // // // // //     [
// // // // // //       "Dissolved Oxygen",
// // // // // //       "Pond biology",
// // // // // //     ],
// // // // // //     [
// // // // // //       "Nitrite",
// // // // // //       "Nitrogen cycle",
// // // // // //     ],
// // // // // //     [
// // // // // //       "Alkalinity",
// // // // // //       "Buffering capacity",
// // // // // //     ],
// // // // // //     [
// // // // // //       "Salinity",
// // // // // //       "Culture environment",
// // // // // //     ],
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div className="mt-9">

// // // // // //       <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0872ce]">
// // // // // //         Monitor What Matters
// // // // // //       </p>

// // // // // //       <div className="mt-5 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">

// // // // // //         {parameters.map(
// // // // // //           ([
// // // // // //             parameter,
// // // // // //             reason,
// // // // // //           ]) => (

// // // // // //             <div
// // // // // //               key={
// // // // // //                 parameter
// // // // // //               }
// // // // // //               className="bg-white p-5"
// // // // // //             >

// // // // // //               <p className="font-semibold text-[#172235]">
// // // // // //                 {
// // // // // //                   parameter
// // // // // //                 }
// // // // // //               </p>

// // // // // //               <p className="mt-1 text-xs text-slate-500">
// // // // // //                 {reason}
// // // // // //               </p>

// // // // // //             </div>

// // // // // //           )
// // // // // //         )}

// // // // // //       </div>

// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // // /* =========================================================
// // // // // //    MANAGEMENT
// // // // // // ========================================================= */

// // // // // // function ManagementFramework() {
// // // // // //   const stages = [
// // // // // //     [
// // // // // //       "01",
// // // // // //       "Measure",
// // // // // //       "Monitor consistently",
// // // // // //     ],
// // // // // //     [
// // // // // //       "02",
// // // // // //       "Analyse",
// // // // // //       "Look for trends",
// // // // // //     ],
// // // // // //     [
// // // // // //       "03",
// // // // // //       "Manage",
// // // // // //       "Apply targeted actions",
// // // // // //     ],
// // // // // //     [
// // // // // //       "04",
// // // // // //       "Review",
// // // // // //       "Measure the response",
// // // // // //     ],
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div className="mt-9 bg-[#072f59] p-6 text-white sm:p-8">

// // // // // //       <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-300">
// // // // // //         Management Framework
// // // // // //       </p>

// // // // // //       <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

// // // // // //         {stages.map(
// // // // // //           ([
// // // // // //             number,
// // // // // //             title,
// // // // // //             description,
// // // // // //           ]) => (

// // // // // //             <div
// // // // // //               key={number}
// // // // // //             >

// // // // // //               <p className="text-xl font-semibold text-sky-300">
// // // // // //                 {number}
// // // // // //               </p>

// // // // // //               <h3 className="mt-3 font-semibold">
// // // // // //                 {title}
// // // // // //               </h3>

// // // // // //               <p className="mt-2 text-xs leading-5 text-blue-100">
// // // // // //                 {description}
// // // // // //               </p>

// // // // // //             </div>

// // // // // //           )
// // // // // //         )}

// // // // // //       </div>

// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // // /* =========================================================
// // // // // //    MISTAKES CALLOUT
// // // // // // ========================================================= */

// // // // // // function MistakesCallout() {
// // // // // //   return (
// // // // // //     <div className="mt-8 border-l-[3px] border-amber-500 bg-amber-50 px-6 py-5">

// // // // // //       <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-700">
// // // // // //         Important
// // // // // //       </p>

// // // // // //       <p className="mt-2 text-sm leading-6 text-slate-700">
// // // // // //         Avoid making major management decisions from a single ammonia
// // // // // //         reading without checking supporting water-quality parameters and
// // // // // //         recent farm-management conditions.
// // // // // //       </p>

// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // // /* =========================================================
// // // // // //    META ITEM
// // // // // // ========================================================= */

// // // // // // function MetaItem({
// // // // // //   label,
// // // // // //   value,
// // // // // // }: {
// // // // // //   label: string;
// // // // // //   value: string;
// // // // // // }) {
// // // // // //   return (
// // // // // //     <div>

// // // // // //       <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
// // // // // //         {label}
// // // // // //       </p>

// // // // // //       <p className="mt-1 text-xs font-medium text-slate-700">
// // // // // //         {value}
// // // // // //       </p>

// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // "use client";

// // // // // import {
// // // // //   useEffect,
// // // // //   useState,
// // // // // } from "react";

// // // // // import Image from "next/image";
// // // // // import Link from "next/link";

// // // // // import type {
// // // // //   BlogPost,
// // // // //   BlogSection,
// // // // // } from "@/data/blogs";

// // // // // type Props = {
// // // // //   post: BlogPost;
// // // // //   relatedPosts?: BlogPost[];
// // // // // };

// // // // // const EMPTY_SECTIONS: BlogSection[] = [];

// // // // // export default function BlogArticleClient({
// // // // //   post,
// // // // //   relatedPosts,
// // // // // }: Props) {
// // // // //   const [progress, setProgress] =
// // // // //     useState(0);

// // // // //   const sections = post.sections ?? EMPTY_SECTIONS;
// // // // //   const introduction = post.introduction ?? [post.description];
// // // // //   const keyTakeaways = post.keyTakeaways ?? [];
// // // // //   const faq = post.faq ?? [];
// // // // //   const references = post.references ?? [];
// // // // //   const tags = post.tags ?? [];
// // // // //   const safeRelatedPosts = relatedPosts ?? [];
// // // // //   const authorName = post.author?.name ?? "Innovare Biopharma";
// // // // //   const authorLogo = post.author?.logo;

// // // // // const [activeSection, setActiveSection] = useState(
// // // // //   sections[0]?.id ?? ""
// // // // // );

// // // // //   /* =====================================================
// // // // //      READING PROGRESS
// // // // //   ===================================================== */

// // // // //   useEffect(() => {
// // // // //     const updateProgress = () => {
// // // // //       const scrollTop =
// // // // //         window.scrollY;

// // // // //       const total =
// // // // //         document.documentElement
// // // // //           .scrollHeight -
// // // // //         window.innerHeight;

// // // // //       const percentage =
// // // // //         total > 0
// // // // //           ? Math.min(
// // // // //               100,
// // // // //               Math.max(
// // // // //                 0,
// // // // //                 (scrollTop /
// // // // //                   total) *
// // // // //                   100
// // // // //               )
// // // // //             )
// // // // //           : 0;

// // // // //       setProgress(percentage);
// // // // //     };

// // // // //     updateProgress();

// // // // //     window.addEventListener(
// // // // //       "scroll",
// // // // //       updateProgress,
// // // // //       {
// // // // //         passive: true,
// // // // //       }
// // // // //     );

// // // // //     return () =>
// // // // //       window.removeEventListener(
// // // // //         "scroll",
// // // // //         updateProgress
// // // // //       );
// // // // //   }, []);

// // // // //   /* =====================================================
// // // // //      ACTIVE TOC SECTION
// // // // //   ===================================================== */

// // // // //   useEffect(() => {
// // // // //     const elements =
// // // // //       sections
// // // // //         .map((section) =>
// // // // //           document.getElementById(
// // // // //             section.id
// // // // //           )
// // // // //         )
// // // // //         .filter(
// // // // //           (
// // // // //             element
// // // // //           ): element is HTMLElement =>
// // // // //             Boolean(element)
// // // // //         );

// // // // //     if (!elements.length) {
// // // // //       return;
// // // // //     }

// // // // //     const observer =
// // // // //       new IntersectionObserver(
// // // // //         (entries) => {
// // // // //           const visible =
// // // // //             entries
// // // // //               .filter(
// // // // //                 (entry) =>
// // // // //                   entry.isIntersecting
// // // // //               )
// // // // //               .sort(
// // // // //                 (a, b) =>
// // // // //                   b.intersectionRatio -
// // // // //                   a.intersectionRatio
// // // // //               );

// // // // //           if (
// // // // //             visible[0]
// // // // //               ?.target.id
// // // // //           ) {
// // // // //             setActiveSection(
// // // // //               visible[0]
// // // // //                 .target.id
// // // // //             );
// // // // //           }
// // // // //         },
// // // // //         {
// // // // //           rootMargin:
// // // // //             "-20% 0px -65% 0px",

// // // // //           threshold: [
// // // // //             0.05,
// // // // //             0.2,
// // // // //             0.5,
// // // // //           ],
// // // // //         }
// // // // //       );

// // // // //     elements.forEach(
// // // // //       (element) =>
// // // // //         observer.observe(
// // // // //           element
// // // // //         )
// // // // //     );

// // // // //     return () =>
// // // // //       observer.disconnect();
// // // // //   }, [sections]);

// // // // //   return (
// // // // //     <main className="bg-white text-[#162235]">

// // // // //       {/* =================================================
// // // // //           READING PROGRESS
// // // // //       ================================================= */}

// // // // //       <div
// // // // //         aria-hidden="true"
// // // // //         className="fixed left-0 top-0 z-[100] h-[3px] w-full bg-transparent"
// // // // //       >
// // // // //         <div
// // // // //           className="h-full bg-[#0872ce] transition-[width] duration-100"
// // // // //           style={{
// // // // //             width:
// // // // //               `${progress}%`,
// // // // //           }}
// // // // //         />
// // // // //       </div>


// // // // //       {/* =================================================
// // // // //           PUBLICATION BAR
// // // // //       ================================================= */}

// // // // //       <div className="border-b border-slate-200 bg-[#f8fafc]">

// // // // //         <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-2.5 sm:px-6 lg:px-8">

// // // // //           <p className="truncate text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
// // // // //             Innovare Insights ·
// // // // //             Aquaculture Knowledge ·
// // // // //             Technical Expertise
// // // // //           </p>

// // // // //           <Link
// // // // //             href="/blog"
// // // // //             className="shrink-0 text-[11px] font-semibold text-[#0872ce] hover:underline"
// // // // //           >
// // // // //             All Insights
// // // // //           </Link>

// // // // //         </div>

// // // // //       </div>


// // // // //       {/* =================================================
// // // // //           ARTICLE HERO
// // // // //       ================================================= */}

// // // // //       <header className="border-b border-slate-200">

// // // // //         <div className="mx-auto max-w-7xl px-5 pb-10 pt-9 sm:px-6 md:pb-14 md:pt-12 lg:px-8 lg:pb-16">

// // // // //           {/* Breadcrumb */}

// // // // //           <nav
// // // // //             aria-label="Breadcrumb"
// // // // //             className="flex flex-wrap items-center gap-2 text-xs text-slate-500"
// // // // //           >

// // // // //             <Link
// // // // //               href="/"
// // // // //               className="transition hover:text-[#0872ce]"
// // // // //             >
// // // // //               Home
// // // // //             </Link>

// // // // //             <span>/</span>

// // // // //             <Link
// // // // //               href="/blog"
// // // // //               className="transition hover:text-[#0872ce]"
// // // // //             >
// // // // //               Insights
// // // // //             </Link>

// // // // //             <span>/</span>

// // // // //             <span>
// // // // //               {post.category}
// // // // //             </span>

// // // // //           </nav>


// // // // //           {/* Category */}

// // // // //           <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // //             {post.category}
// // // // //           </p>


// // // // //           {/* Heading */}

// // // // //           <h1 className="mt-4 max-w-[1050px] text-[clamp(2.5rem,6vw,5.1rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#101c2d]">
// // // // //             {post.title}
// // // // //           </h1>


// // // // //           {/* Deck */}

// // // // //           <p className="mt-7 max-w-[820px] text-[clamp(1.05rem,1.7vw,1.35rem)] leading-[1.65] text-slate-600">
// // // // //             {post.description}
// // // // //           </p>


// // // // //           {/* Meta */}

// // // // //           <div className="mt-9 flex flex-col gap-6 border-t border-slate-200 pt-7 md:flex-row md:items-center md:justify-between">

// // // // //             <div className="flex items-center gap-4">

// // // // //               <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5">

// // // // //                 {authorLogo ? (
// // // // //                   <Image
// // // // //                     src={authorLogo}
// // // // //                     alt={`${authorName} logo`}
// // // // //                     fill
// // // // //                     sizes="56px"
// // // // //                     className="object-contain p-1"
// // // // //                   />
// // // // //                 ) : (
// // // // //                   <span className="flex h-full w-full items-center justify-center text-sm font-bold text-[#0872ce]">
// // // // //                     IB
// // // // //                   </span>
// // // // //                 )}

// // // // //               </div>


// // // // //               <div>

// // // // //                 <p className="text-sm font-semibold text-[#172235]">
// // // // //                   {
// // // // //                     authorName
// // // // //                   }
// // // // //                 </p>

// // // // //                 <p className="mt-1 text-xs text-slate-500">
// // // // //                   {
// // // // //                     post.author
// // // // //                       .role
// // // // //                   }
// // // // //                 </p>

// // // // //               </div>

// // // // //             </div>


// // // // //             <div className="grid grid-cols-3 gap-x-7 gap-y-3 text-xs md:text-right">

// // // // //               <MetaItem
// // // // //                 label="Published"
// // // // //                 value={
// // // // //                   post.date
// // // // //                 }
// // // // //               />

// // // // //               <MetaItem
// // // // //                 label="Updated"
// // // // //                 value={
// // // // //                   post.modifiedDate
// // // // //                 }
// // // // //               />

// // // // //               <MetaItem
// // // // //                 label="Reading"
// // // // //                 value={
// // // // //                   post.readTime
// // // // //                 }
// // // // //               />

// // // // //             </div>

// // // // //           </div>

// // // // //         </div>


// // // // //         {/* Featured Image */}

// // // // //         <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">

// // // // //           <figure>

// // // // //             <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 sm:rounded-2xl">

// // // // //               <Image
// // // // //                 src={post.image}
// // // // //                 alt={
// // // // //                   post.imageAlt
// // // // //                 }
// // // // //                 fill
// // // // //                 priority
// // // // //                 sizes="(max-width: 768px) 100vw, 1280px"
// // // // //                 className="object-cover"
// // // // //               />

// // // // //             </div>

// // // // //             <figcaption className="hidden px-1 pt-3 text-xs leading-5 text-slate-500 sm:block">
// // // // //               {post.imageAlt}
// // // // //             </figcaption>

// // // // //           </figure>

// // // // //         </div>

// // // // //       </header>


// // // // //       {/* =================================================
// // // // //           MOBILE TABLE OF CONTENTS
// // // // //       ================================================= */}

// // // // //       <div className="mx-auto max-w-[860px] px-5 pt-8 lg:hidden">

// // // // //         <details className="group rounded-xl border border-slate-200 bg-[#f8fafc]">

// // // // //           <summary className="flex min-h-[54px] cursor-pointer list-none items-center justify-between px-5 text-sm font-semibold text-[#172235]">

// // // // //             In this article

// // // // //             <span className="text-xl text-[#0872ce] transition-transform group-open:rotate-45">
// // // // //               +
// // // // //             </span>

// // // // //           </summary>

// // // // //           <nav className="border-t border-slate-200 px-5 py-4">

// // // // //             <ol className="space-y-3">

// // // // //               {sections.map(
// // // // //                 (
// // // // //                   section,
// // // // //                   index
// // // // //                 ) => (
// // // // //                   <li
// // // // //                     key={
// // // // //                       section.id
// // // // //                     }
// // // // //                   >
// // // // //                     <a
// // // // //                       href={`#${section.id}`}
// // // // //                       className="flex gap-3 text-sm leading-5 text-slate-600"
// // // // //                     >
// // // // //                       <span className="font-semibold text-[#0872ce]">
// // // // //                         {String(
// // // // //                           index +
// // // // //                             1
// // // // //                         ).padStart(
// // // // //                           2,
// // // // //                           "0"
// // // // //                         )}
// // // // //                       </span>

// // // // //                       {
// // // // //                         section.heading
// // // // //                       }
// // // // //                     </a>
// // // // //                   </li>
// // // // //                 )
// // // // //               )}

// // // // //             </ol>

// // // // //           </nav>

// // // // //         </details>

// // // // //       </div>


// // // // //       {/* =================================================
// // // // //           ARTICLE LAYOUT
// // // // //       ================================================= */}

// // // // //       <div className="mx-auto grid max-w-7xl gap-14 px-5 py-12 sm:px-6 md:py-16 lg:grid-cols-[220px_minmax(0,760px)] lg:justify-center lg:px-8">

// // // // //         {/* ===============================================
// // // // //             DESKTOP TOC
// // // // //         =============================================== */}

// // // // //         <aside className="hidden lg:block">

// // // // //           <div className="sticky top-24">

// // // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
// // // // //               In this article
// // // // //             </p>

// // // // //             <div className="mt-4 h-px bg-slate-200" />

// // // // //             <nav className="mt-5">

// // // // //               <ol className="space-y-1">

// // // // //                 {sections.map(
// // // // //                   (
// // // // //                     section,
// // // // //                     index
// // // // //                   ) => {

// // // // //                     const active =
// // // // //                       activeSection ===
// // // // //                       section.id;

// // // // //                     return (
// // // // //                       <li
// // // // //                         key={
// // // // //                           section.id
// // // // //                         }
// // // // //                       >

// // // // //                         <a
// // // // //                           href={`#${section.id}`}
// // // // //                           className={`
// // // // //                             grid
// // // // //                             grid-cols-[25px_1fr]
// // // // //                             gap-2
// // // // //                             border-l-2
// // // // //                             py-2
// // // // //                             pl-3
// // // // //                             text-[11px]
// // // // //                             leading-5
// // // // //                             transition
// // // // //                             ${
// // // // //                               active
// // // // //                                 ? "border-[#0872ce] font-semibold text-[#0872ce]"
// // // // //                                 : "border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-900"
// // // // //                             }
// // // // //                           `}
// // // // //                         >

// // // // //                           <span>
// // // // //                             {String(
// // // // //                               index +
// // // // //                                 1
// // // // //                             ).padStart(
// // // // //                               2,
// // // // //                               "0"
// // // // //                             )}
// // // // //                           </span>

// // // // //                           <span>
// // // // //                             {
// // // // //                               section.heading
// // // // //                             }
// // // // //                           </span>

// // // // //                         </a>

// // // // //                       </li>
// // // // //                     );
// // // // //                   }
// // // // //                 )}

// // // // //               </ol>

// // // // //             </nav>

// // // // //           </div>

// // // // //         </aside>


// // // // //         {/* ===============================================
// // // // //             ARTICLE
// // // // //         =============================================== */}

// // // // //         <article className="min-w-0">

// // // // //           {/* Introduction */}

// // // // //           <section>

// // // // //             {introduction.map(
// // // // //               (
// // // // //                 paragraph,
// // // // //                 index
// // // // //               ) => (

// // // // //                 <p
// // // // //                   key={index}
// // // // //                   className={`
// // // // //                     text-[clamp(1.05rem,1.2vw,1.16rem)]
// // // // //                     leading-[1.85]
// // // // //                     text-slate-700
// // // // //                     ${
// // // // //                       index
// // // // //                         ? "mt-5"
// // // // //                         : ""
// // // // //                     }
// // // // //                   `}
// // // // //                 >
// // // // //                   {paragraph}
// // // // //                 </p>

// // // // //               )
// // // // //             )}

// // // // //           </section>


// // // // //           {/* ===============================================
// // // // //               KEY TAKEAWAYS
// // // // //           =============================================== */}

// // // // //           <section className="my-12 border-y border-slate-200 py-8">

// // // // //             <div className="flex items-center gap-3">

// // // // //               <div className="relative h-8 w-8 shrink-0">

// // // // //                 {authorLogo ? (
// // // // //                   <Image
// // // // //                     src={authorLogo}
// // // // //                     alt=""
// // // // //                     fill
// // // // //                     sizes="32px"
// // // // //                     className="object-contain"
// // // // //                   />
// // // // //                 ) : (
// // // // //                   <span className="flex h-full w-full items-center justify-center rounded-full bg-blue-50 text-[10px] font-bold text-[#0872ce]">
// // // // //                     IB
// // // // //                   </span>
// // // // //                 )}

// // // // //               </div>

// // // // //               <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // //                 Key Takeaways
// // // // //               </p>

// // // // //             </div>


// // // // //             <div className="mt-7 grid gap-6 sm:grid-cols-2">

// // // // //               {keyTakeaways.map(
// // // // //                 (
// // // // //                   takeaway,
// // // // //                   index
// // // // //                 ) => (

// // // // //                   <div
// // // // //                     key={
// // // // //                       takeaway
// // // // //                     }
// // // // //                     className="grid grid-cols-[32px_1fr] gap-3"
// // // // //                   >

// // // // //                     <span className="text-sm font-bold text-[#0872ce]">
// // // // //                       {String(
// // // // //                         index +
// // // // //                           1
// // // // //                       ).padStart(
// // // // //                         2,
// // // // //                         "0"
// // // // //                       )}
// // // // //                     </span>

// // // // //                     <p className="text-[15px] leading-7 text-slate-700">
// // // // //                       {takeaway}
// // // // //                     </p>

// // // // //                   </div>

// // // // //                 )
// // // // //               )}

// // // // //             </div>

// // // // //           </section>


// // // // //           {/* ===============================================
// // // // //               SECTIONS
// // // // //           =============================================== */}

// // // // //           {sections.map(
// // // // //             (
// // // // //               section,
// // // // //               index
// // // // //             ) => (

// // // // //               <ArticleSection
// // // // //                 key={
// // // // //                   section.id
// // // // //                 }
// // // // //                 section={
// // // // //                   section
// // // // //                 }
// // // // //                 index={
// // // // //                   index
// // // // //                 }
// // // // //               />

// // // // //             )
// // // // //           )}


// // // // //           {/* ===============================================
// // // // //               INNOVARE INSIGHT
// // // // //           =============================================== */}

// // // // //           <section className="my-14 border-l-[3px] border-[#0872ce] bg-[#f6f9fc] px-6 py-7 sm:px-8">

// // // // //             <div className="flex items-center gap-3">

// // // // //               <div className="relative h-9 w-9">

// // // // //                 {authorLogo ? (
// // // // //                   <Image
// // // // //                     src={authorLogo}
// // // // //                     alt={authorName}
// // // // //                     fill
// // // // //                     sizes="36px"
// // // // //                     className="object-contain"
// // // // //                   />
// // // // //                 ) : (
// // // // //                   <span className="flex h-full w-full items-center justify-center rounded-full bg-blue-50 text-[10px] font-bold text-[#0872ce]">
// // // // //                     IB
// // // // //                   </span>
// // // // //                 )}

// // // // //               </div>

// // // // //               <div>

// // // // //                 <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0872ce]">
// // // // //                   Innovare Technical Insight
// // // // //                 </p>

// // // // //                 <p className="mt-1 text-xs text-slate-500">
// // // // //                   Water-quality management
// // // // //                 </p>

// // // // //               </div>

// // // // //             </div>

// // // // //             <p className="mt-5 text-[16px] leading-8 text-slate-700">
// // // // //               Ammonia management works best as a system. Monitoring,
// // // // //               feeding, dissolved oxygen, organic-load control and
// // // // //               biological management should support one another rather
// // // // //               than being treated as separate interventions.
// // // // //             </p>

// // // // //           </section>


// // // // //           {/* ===============================================
// // // // //               PRACTICAL CHECKLIST
// // // // //           =============================================== */}

// // // // //           <section className="my-14">

// // // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // //               Practical Checklist
// // // // //             </p>

// // // // //             <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
// // // // //               When ammonia begins to rise
// // // // //             </h2>

// // // // //             <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">

// // // // //               {[
// // // // //                 "Recheck the ammonia result and record the time of sampling.",
// // // // //                 "Review pond pH and temperature before interpreting the TAN value.",
// // // // //                 "Check dissolved oxygen and current aeration capacity.",
// // // // //                 "Review recent feeding rates and actual feed consumption.",
// // // // //                 "Inspect pond-bottom and organic-loading conditions.",
// // // // //                 "Record any management action and measure the response.",
// // // // //               ].map(
// // // // //                 (
// // // // //                   item,
// // // // //                   index
// // // // //                 ) => (

// // // // //                   <div
// // // // //                     key={item}
// // // // //                     className="grid grid-cols-[38px_1fr] gap-3 py-4"
// // // // //                   >

// // // // //                     <span className="text-sm font-bold text-[#0872ce]">
// // // // //                       {String(
// // // // //                         index +
// // // // //                           1
// // // // //                       ).padStart(
// // // // //                         2,
// // // // //                         "0"
// // // // //                       )}
// // // // //                     </span>

// // // // //                     <p className="text-[15px] leading-7 text-slate-700">
// // // // //                       {item}
// // // // //                     </p>

// // // // //                   </div>

// // // // //                 )
// // // // //               )}

// // // // //             </div>

// // // // //           </section>


// // // // //           {/* ===============================================
// // // // //               FAQ
// // // // //           =============================================== */}

// // // // //           <section
// // // // //             id="faq"
// // // // //             className="scroll-mt-24 py-14"
// // // // //           >

// // // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // //               Frequently Asked Questions
// // // // //             </p>

// // // // //             <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold tracking-[-0.03em]">
// // // // //               Common questions about pond ammonia
// // // // //             </h2>

// // // // //             <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">

// // // // //               {faq.map(
// // // // //                 (
// // // // //                   item,
// // // // //                   index
// // // // //                 ) => (

// // // // //                   <details
// // // // //                     key={
// // // // //                       index
// // // // //                     }
// // // // //                     className="group py-5"
// // // // //                   >

// // // // //                     <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[15px] font-semibold leading-6 text-[#172235]">

// // // // //                       <span>
// // // // //                         {
// // // // //                           item.question
// // // // //                         }
// // // // //                       </span>

// // // // //                       <span className="shrink-0 text-xl font-light text-[#0872ce] transition-transform group-open:rotate-45">
// // // // //                         +
// // // // //                       </span>

// // // // //                     </summary>

// // // // //                     <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600">
// // // // //                       {
// // // // //                         item.answer
// // // // //                       }
// // // // //                     </p>

// // // // //                   </details>

// // // // //                 )
// // // // //               )}

// // // // //             </div>

// // // // //           </section>


// // // // //           {/* ===============================================
// // // // //               TECHNICAL NOTE
// // // // //           =============================================== */}

// // // // //           <section className="border-t border-slate-200 py-8">

// // // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
// // // // //               Technical Notes
// // // // //             </p>

// // // // //             <div className="mt-4 space-y-3">

// // // // //               {references.map(
// // // // //                 (
// // // // //                   reference,
// // // // //                   index
// // // // //                 ) => (

// // // // //                   <p
// // // // //                     key={
// // // // //                       index
// // // // //                     }
// // // // //                     className="text-xs leading-6 text-slate-500"
// // // // //                   >
// // // // //                     <strong className="font-semibold text-slate-700">
// // // // //                       {
// // // // //                         reference.label
// // // // //                       }:
// // // // //                     </strong>{" "}
// // // // //                     {
// // // // //                       reference.note
// // // // //                     }
// // // // //                   </p>

// // // // //                 )
// // // // //               )}

// // // // //             </div>

// // // // //           </section>


// // // // //           {/* ===============================================
// // // // //               AUTHOR PROFILE
// // // // //           =============================================== */}

// // // // //           <section className="border-t border-slate-200 py-10">

// // // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // //               About the Author
// // // // //             </p>

// // // // //             <div className="mt-6 grid gap-6 sm:grid-cols-[72px_1fr]">

// // // // //               <div className="relative h-[72px] w-[72px] overflow-hidden rounded-2xl border border-slate-200 bg-white">

// // // // //                 {authorLogo ? (
// // // // //                   <Image
// // // // //                     src={authorLogo}
// // // // //                     alt={`${authorName} logo`}
// // // // //                     fill
// // // // //                     sizes="72px"
// // // // //                     className="object-contain p-2"
// // // // //                   />
// // // // //                 ) : (
// // // // //                   <span className="flex h-full w-full items-center justify-center text-lg font-bold text-[#0872ce]">
// // // // //                     IB
// // // // //                   </span>
// // // // //                 )}

// // // // //               </div>

// // // // //               <div>

// // // // //                 <h3 className="text-lg font-semibold text-[#172235]">
// // // // //                   {
// // // // //                     authorName
// // // // //                   }
// // // // //                 </h3>

// // // // //                 <p className="mt-1 text-sm font-medium text-[#0872ce]">
// // // // //                   {
// // // // //                     post.author
// // // // //                       .role
// // // // //                   }
// // // // //                 </p>

// // // // //                 <p className="mt-4 text-[15px] leading-7 text-slate-600">
// // // // //                   {
// // // // //                     post.author
// // // // //                       .bio
// // // // //                   }
// // // // //                 </p>

// // // // //               </div>

// // // // //             </div>

// // // // //           </section>


// // // // //           {/* ===============================================
// // // // //               PUBLICATION INFO
// // // // //           =============================================== */}

// // // // //           <section className="border-y border-slate-200 py-7">

// // // // //             <div className="grid gap-6 sm:grid-cols-3">

// // // // //               <MetaItem
// // // // //                 label="Published"
// // // // //                 value={
// // // // //                   post.date
// // // // //                 }
// // // // //               />

// // // // //               <MetaItem
// // // // //                 label="Last reviewed"
// // // // //                 value={
// // // // //                   post.modifiedDate
// // // // //                 }
// // // // //               />

// // // // //               <MetaItem
// // // // //                 label="Reading time"
// // // // //                 value={
// // // // //                   post.readTime
// // // // //                 }
// // // // //               />

// // // // //             </div>


// // // // //             <div className="mt-7 border-t border-slate-100 pt-6">

// // // // //               <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
// // // // //                 Topics
// // // // //               </p>

// // // // //               <div className="mt-3 flex flex-wrap gap-2">

// // // // //                 {tags.map(
// // // // //                   (tag) => (

// // // // //                     <span
// // // // //                       key={tag}
// // // // //                       className="rounded-full border border-slate-300 px-3 py-1.5 text-[11px] text-slate-600"
// // // // //                     >
// // // // //                       {tag}
// // // // //                     </span>

// // // // //                   )
// // // // //                 )}

// // // // //               </div>

// // // // //             </div>

// // // // //           </section>

// // // // //         </article>

// // // // //       </div>


// // // // //       {/* =================================================
// // // // //           RELATED ARTICLES
// // // // //       ================================================= */}

// // // // //       {safeRelatedPosts.length >
// // // // //         0 && (

// // // // //         <section className="border-t border-slate-200 bg-[#fafbfd] py-16">

// // // // //           <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

// // // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // //               Continue Reading
// // // // //             </p>

// // // // //             <div className="mt-8 grid gap-9 md:grid-cols-3">

// // // // //               {safeRelatedPosts.map(
// // // // //                 (blog) => (

// // // // //                   <Link
// // // // //                     key={
// // // // //                       blog.slug
// // // // //                     }
// // // // //                     href={`/blog/${blog.slug}`}
// // // // //                     className="group"
// // // // //                   >

// // // // //                     <article>

// // // // //                       <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">

// // // // //                         <Image
// // // // //                           src={
// // // // //                             blog.image
// // // // //                           }
// // // // //                           alt={
// // // // //                             blog.imageAlt
// // // // //                           }
// // // // //                           fill
// // // // //                           sizes="(max-width: 768px) 100vw, 33vw"
// // // // //                           className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
// // // // //                         />

// // // // //                       </div>

// // // // //                       <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0872ce]">
// // // // //                         {
// // // // //                           blog.category
// // // // //                         }
// // // // //                       </p>

// // // // //                       <h3 className="mt-2 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#172235] transition group-hover:text-[#0872ce]">
// // // // //                         {
// // // // //                           blog.title
// // // // //                         }
// // // // //                       </h3>

// // // // //                       <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
// // // // //                         {
// // // // //                           blog.description
// // // // //                         }
// // // // //                       </p>

// // // // //                       <p className="mt-4 text-xs text-slate-400">
// // // // //                         {
// // // // //                           blog.readTime
// // // // //                         }{" "}
// // // // //                         ·{" "}
// // // // //                         {
// // // // //                           blog.date
// // // // //                         }
// // // // //                       </p>

// // // // //                     </article>

// // // // //                   </Link>

// // // // //                 )
// // // // //               )}

// // // // //             </div>

// // // // //           </div>

// // // // //         </section>

// // // // //       )}


// // // // //       {/* =================================================
// // // // //           COMPANY CTA
// // // // //       ================================================= */}

// // // // //       <section className="px-5 py-14 sm:px-6 md:py-20">

// // // // //         <div className="mx-auto grid max-w-7xl overflow-hidden bg-[#072f59] lg:grid-cols-[1.1fr_0.9fr]">

// // // // //           <div className="p-8 sm:p-10 md:p-14">

// // // // //             <div className="relative h-11 w-11">

// // // // //               {authorLogo ? (
// // // // //                 <Image
// // // // //                   src={authorLogo}
// // // // //                   alt={authorName}
// // // // //                   fill
// // // // //                   sizes="44px"
// // // // //                   className="object-contain"
// // // // //                 />
// // // // //               ) : (
// // // // //                 <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-sm font-bold text-[#0872ce]">
// // // // //                   IB
// // // // //                 </span>
// // // // //               )}

// // // // //             </div>

// // // // //             <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">
// // // // //               Innovare Biopharma
// // // // //             </p>

// // // // //             <h2 className="mt-3 max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
// // // // //               Better water quality starts with better decisions.
// // // // //             </h2>

// // // // //             <p className="mt-5 max-w-xl text-[15px] leading-7 text-blue-100">
// // // // //               Explore Innovare&apos;s aquaculture portfolio and
// // // // //               technical solutions for water-quality and pond-management
// // // // //               programs.
// // // // //             </p>

// // // // //             <div className="mt-8 flex flex-wrap gap-3">

// // // // //               <Link
// // // // //                 href="/products"
// // // // //                 className="inline-flex min-h-[46px] items-center justify-center bg-white px-6 text-sm font-semibold text-[#072f59] transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-sky-300"
// // // // //               >
// // // // //                 Explore Products
// // // // //               </Link>

// // // // //               <Link
// // // // //                 href="/contact"
// // // // //                 className="inline-flex min-h-[46px] items-center justify-center border border-white/30 px-6 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-300"
// // // // //               >
// // // // //                 Contact Us
// // // // //               </Link>

// // // // //             </div>

// // // // //           </div>


// // // // //           <div className="relative min-h-[300px]">

// // // // //             <Image
// // // // //               src="/images/blog/water-quality-solutions.webp"
// // // // //               alt="Innovare aquaculture water-quality solutions"
// // // // //               fill
// // // // //               sizes="(max-width: 1024px) 100vw, 45vw"
// // // // //               className="object-cover"
// // // // //             />

// // // // //           </div>

// // // // //         </div>

// // // // //       </section>


// // // // //       {/* =================================================
// // // // //           NEWSLETTER
// // // // //       ================================================= */}

// // // // //       <section className="border-t border-slate-200 bg-[#f7f9fc]">

// // // // //         <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-6 md:grid-cols-[1fr_0.9fr] md:items-center md:py-16 lg:px-8">

// // // // //           <div>

// // // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // //               Stay Ahead
// // // // //             </p>

// // // // //             <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em]">
// // // // //               Aquaculture knowledge delivered simply.
// // // // //             </h2>

// // // // //             <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
// // // // //               Receive new technical insights and educational
// // // // //               aquaculture resources from Innovare Biopharma.
// // // // //             </p>

// // // // //           </div>


// // // // //           <form className="flex flex-col gap-2 sm:flex-row">

// // // // //             <label
// // // // //               htmlFor="article-email"
// // // // //               className="sr-only"
// // // // //             >
// // // // //               Email address
// // // // //             </label>

// // // // //             <input
// // // // //               id="article-email"
// // // // //               type="email"
// // // // //               placeholder="Email address"
// // // // //               className="min-h-[48px] min-w-0 flex-1 border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-[#0872ce] focus:ring-2 focus:ring-blue-100"
// // // // //             />

// // // // //             <button
// // // // //               type="submit"
// // // // //               className="min-h-[48px] bg-[#0872ce] px-6 text-sm font-semibold text-white transition hover:bg-[#075fae] focus:outline-none focus:ring-2 focus:ring-blue-300"
// // // // //             >
// // // // //               Subscribe
// // // // //             </button>

// // // // //           </form>

// // // // //         </div>

// // // // //       </section>

// // // // //     </main>
// // // // //   );
// // // // // }


// // // // // /* =========================================================
// // // // //    ARTICLE SECTION
// // // // // ========================================================= */

// // // // // function ArticleSection({
// // // // //   section,
// // // // //   index,
// // // // // }: {
// // // // //   section: BlogSection;
// // // // //   index: number;
// // // // // }) {
// // // // //   return (
// // // // //     <section
// // // // //       id={section.id}
// // // // //       className="scroll-mt-24 py-12 first:pt-4"
// // // // //     >

// // // // //       <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // // //         {String(
// // // // //           index + 1
// // // // //         ).padStart(
// // // // //           2,
// // // // //           "0"
// // // // //         )}
// // // // //       </p>


// // // // //       <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.7rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-[#172235]">
// // // // //         {section.heading}
// // // // //       </h2>


// // // // //       <div className="mt-6 space-y-5">

// // // // //         {section.paragraphs.map(
// // // // //           (
// // // // //             paragraph,
// // // // //             paragraphIndex
// // // // //           ) => (

// // // // //             <p
// // // // //               key={
// // // // //                 paragraphIndex
// // // // //               }
// // // // //               className="text-[17px] leading-[1.85] text-slate-700"
// // // // //             >
// // // // //               {paragraph}
// // // // //             </p>

// // // // //           )
// // // // //         )}

// // // // //       </div>


// // // // //       {section.bullets && (

// // // // //         <ul className="mt-7 space-y-3 border-l-2 border-blue-100 pl-6">

// // // // //           {section.bullets.map(
// // // // //             (bullet) => (

// // // // //               <li
// // // // //                 key={
// // // // //                   bullet
// // // // //                 }
// // // // //                 className="text-[15px] leading-7 text-slate-700"
// // // // //               >
// // // // //                 {bullet}
// // // // //               </li>

// // // // //             )
// // // // //           )}

// // // // //         </ul>

// // // // //       )}


// // // // //       <SectionVisual
// // // // //         section={
// // // // //           section
// // // // //         }
// // // // //       />

// // // // //     </section>
// // // // //   );
// // // // // }


// // // // // /* =========================================================
// // // // //    VISUALS
// // // // // ========================================================= */

// // // // // function SectionVisual({
// // // // //   section,
// // // // // }: {
// // // // //   section: BlogSection;
// // // // // }) {
// // // // //   if (
// // // // //     section.type ===
// // // // //     "chemistry"
// // // // //   ) {
// // // // //     return (
// // // // //       <AmmoniaChemistry />
// // // // //     );
// // // // //   }

// // // // //   if (
// // // // //     section.type ===
// // // // //     "pathway"
// // // // //   ) {
// // // // //     return (
// // // // //       <AmmoniaPathway />
// // // // //     );
// // // // //   }

// // // // //   if (
// // // // //     section.type ===
// // // // //     "relationship"
// // // // //   ) {
// // // // //     return (
// // // // //       <RelationshipGraphic />
// // // // //     );
// // // // //   }

// // // // //   if (
// // // // //     section.type ===
// // // // //     "monitoring"
// // // // //   ) {
// // // // //     return (
// // // // //       <MonitoringGrid />
// // // // //     );
// // // // //   }

// // // // //   if (
// // // // //     section.type ===
// // // // //     "management"
// // // // //   ) {
// // // // //     return (
// // // // //       <ManagementFramework />
// // // // //     );
// // // // //   }

// // // // //   if (
// // // // //     section.type ===
// // // // //     "mistakes"
// // // // //   ) {
// // // // //     return (
// // // // //       <MistakesCallout />
// // // // //     );
// // // // //   }

// // // // //   if (section.image) {
// // // // //     return (
// // // // //       <figure className="mt-9">

// // // // //         <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">

// // // // //           <Image
// // // // //             src={
// // // // //               section.image
// // // // //             }
// // // // //             alt={
// // // // //               section.imageAlt ||
// // // // //               section.heading
// // // // //             }
// // // // //             fill
// // // // //             sizes="(max-width: 1024px) 100vw, 760px"
// // // // //             className="object-cover"
// // // // //           />

// // // // //         </div>

// // // // //         {section.caption && (
// // // // //           <figcaption className="mt-3 text-xs leading-5 text-slate-500">
// // // // //             {
// // // // //               section.caption
// // // // //             }
// // // // //           </figcaption>
// // // // //         )}

// // // // //       </figure>
// // // // //     );
// // // // //   }

// // // // //   return null;
// // // // // }


// // // // // /* =========================================================
// // // // //    CHEMISTRY VISUAL
// // // // // ========================================================= */

// // // // // function AmmoniaChemistry() {
// // // // //   return (
// // // // //     <div className="mt-9 border border-slate-200 bg-[#fafbfd] p-6 sm:p-8">

// // // // //       <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0872ce]">
// // // // //         Ammonia Chemistry
// // // // //       </p>

// // // // //       <div className="mt-8 grid items-center gap-5 sm:grid-cols-[1fr_auto_1fr]">

// // // // //         <div className="border border-emerald-100 bg-emerald-50 p-6 text-center">

// // // // //           <p className="text-4xl font-semibold text-emerald-700">
// // // // //             NH₄⁺
// // // // //           </p>

// // // // //           <p className="mt-3 text-sm font-semibold text-slate-800">
// // // // //             Ammonium
// // // // //           </p>

// // // // //           <p className="mt-1 text-xs text-slate-500">
// // // // //             Ionized form
// // // // //           </p>

// // // // //         </div>


// // // // //         <div className="text-center text-3xl text-slate-400">
// // // // //           ⇌
// // // // //         </div>


// // // // //         <div className="border border-amber-100 bg-amber-50 p-6 text-center">

// // // // //           <p className="text-4xl font-semibold text-amber-700">
// // // // //             NH₃
// // // // //           </p>

// // // // //           <p className="mt-3 text-sm font-semibold text-slate-800">
// // // // //             Un-ionized ammonia
// // // // //           </p>

// // // // //           <p className="mt-1 text-xs text-slate-500">
// // // // //             More toxic form
// // // // //           </p>

// // // // //         </div>

// // // // //       </div>

// // // // //       <p className="mt-6 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600">
// // // // //         Increasing pH and temperature can increase the proportion of
// // // // //         total ammonia present as NH₃.
// // // // //       </p>

// // // // //     </div>
// // // // //   );
// // // // // }


// // // // // /* =========================================================
// // // // //    AMMONIA PATHWAY
// // // // // ========================================================= */

// // // // // function AmmoniaPathway() {
// // // // //   const sources = [
// // // // //     "Feed",
// // // // //     "Shrimp waste",
// // // // //     "Dead plankton",
// // // // //     "Organic sludge",
// // // // //   ];

// // // // //   return (
// // // // //     <div className="mt-9 bg-[#072f59] p-6 text-white sm:p-8">

// // // // //       <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-300">
// // // // //         Ammonia Formation Pathway
// // // // //       </p>

// // // // //       <div className="mt-7 grid gap-3 sm:grid-cols-4">

// // // // //         {sources.map(
// // // // //           (
// // // // //             item,
// // // // //             index
// // // // //           ) => (

// // // // //             <div
// // // // //               key={item}
// // // // //               className="border border-white/15 p-4"
// // // // //             >

// // // // //               <p className="text-xs text-sky-300">
// // // // //                 0
// // // // //                 {index + 1}
// // // // //               </p>

// // // // //               <p className="mt-2 text-sm font-semibold">
// // // // //                 {item}
// // // // //               </p>

// // // // //             </div>

// // // // //           )
// // // // //         )}

// // // // //       </div>

// // // // //       <div className="py-4 text-center text-sky-300">
// // // // //         ↓
// // // // //       </div>

// // // // //       <div className="border border-white/15 bg-white/5 p-4 text-center text-sm">
// // // // //         Microbial decomposition
// // // // //       </div>

// // // // //       <div className="py-4 text-center text-sky-300">
// // // // //         ↓
// // // // //       </div>

// // // // //       <div className="bg-white p-4 text-center font-semibold text-[#072f59]">
// // // // //         Ammonia / TAN
// // // // //       </div>

// // // // //     </div>
// // // // //   );
// // // // // }


// // // // // /* =========================================================
// // // // //    RELATIONSHIP
// // // // // ========================================================= */

// // // // // function RelationshipGraphic() {
// // // // //   return (
// // // // //     <div className="mt-9 border-y border-slate-200 py-8">

// // // // //       <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0872ce]">
// // // // //         Interpret Together
// // // // //       </p>

// // // // //       <div className="mt-7 grid gap-4 sm:grid-cols-3">

// // // // //         <RelationshipItem
// // // // //           title="pH"
// // // // //           description="Changes the proportion of NH₃."
// // // // //         />

// // // // //         <RelationshipItem
// // // // //           title="Temperature"
// // // // //           description="Influences ammonia equilibrium."
// // // // //         />

// // // // //         <RelationshipItem
// // // // //           title="TAN"
// // // // //           description="Must be interpreted in context."
// // // // //         />

// // // // //       </div>

// // // // //       <div className="mt-6 flex items-center justify-center">

// // // // //         <div className="border border-blue-100 bg-blue-50 px-5 py-3 text-center text-sm font-semibold text-[#075fae]">
// // // // //           pH + Temperature + TAN → Better interpretation
// // // // //         </div>

// // // // //       </div>

// // // // //     </div>
// // // // //   );
// // // // // }


// // // // // function RelationshipItem({
// // // // //   title,
// // // // //   description,
// // // // // }: {
// // // // //   title: string;
// // // // //   description: string;
// // // // // }) {
// // // // //   return (
// // // // //     <div className="border border-slate-200 p-5">

// // // // //       <p className="text-xl font-semibold text-[#0872ce]">
// // // // //         {title}
// // // // //       </p>

// // // // //       <p className="mt-2 text-sm leading-6 text-slate-600">
// // // // //         {description}
// // // // //       </p>

// // // // //     </div>
// // // // //   );
// // // // // }


// // // // // /* =========================================================
// // // // //    MONITORING GRID
// // // // // ========================================================= */

// // // // // function MonitoringGrid() {
// // // // //   const parameters = [
// // // // //     [
// // // // //       "Ammonia",
// // // // //       "Nitrogen loading",
// // // // //     ],
// // // // //     [
// // // // //       "pH",
// // // // //       "NH₃ equilibrium",
// // // // //     ],
// // // // //     [
// // // // //       "Temperature",
// // // // //       "Water chemistry",
// // // // //     ],
// // // // //     [
// // // // //       "Dissolved Oxygen",
// // // // //       "Pond biology",
// // // // //     ],
// // // // //     [
// // // // //       "Nitrite",
// // // // //       "Nitrogen cycle",
// // // // //     ],
// // // // //     [
// // // // //       "Alkalinity",
// // // // //       "Buffering capacity",
// // // // //     ],
// // // // //     [
// // // // //       "Salinity",
// // // // //       "Culture environment",
// // // // //     ],
// // // // //   ];

// // // // //   return (
// // // // //     <div className="mt-9">

// // // // //       <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0872ce]">
// // // // //         Monitor What Matters
// // // // //       </p>

// // // // //       <div className="mt-5 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">

// // // // //         {parameters.map(
// // // // //           ([
// // // // //             parameter,
// // // // //             reason,
// // // // //           ]) => (

// // // // //             <div
// // // // //               key={
// // // // //                 parameter
// // // // //               }
// // // // //               className="bg-white p-5"
// // // // //             >

// // // // //               <p className="font-semibold text-[#172235]">
// // // // //                 {
// // // // //                   parameter
// // // // //                 }
// // // // //               </p>

// // // // //               <p className="mt-1 text-xs text-slate-500">
// // // // //                 {reason}
// // // // //               </p>

// // // // //             </div>

// // // // //           )
// // // // //         )}

// // // // //       </div>

// // // // //     </div>
// // // // //   );
// // // // // }


// // // // // /* =========================================================
// // // // //    MANAGEMENT
// // // // // ========================================================= */

// // // // // function ManagementFramework() {
// // // // //   const stages = [
// // // // //     [
// // // // //       "01",
// // // // //       "Measure",
// // // // //       "Monitor consistently",
// // // // //     ],
// // // // //     [
// // // // //       "02",
// // // // //       "Analyse",
// // // // //       "Look for trends",
// // // // //     ],
// // // // //     [
// // // // //       "03",
// // // // //       "Manage",
// // // // //       "Apply targeted actions",
// // // // //     ],
// // // // //     [
// // // // //       "04",
// // // // //       "Review",
// // // // //       "Measure the response",
// // // // //     ],
// // // // //   ];

// // // // //   return (
// // // // //     <div className="mt-9 bg-[#072f59] p-6 text-white sm:p-8">

// // // // //       <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-300">
// // // // //         Management Framework
// // // // //       </p>

// // // // //       <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

// // // // //         {stages.map(
// // // // //           ([
// // // // //             number,
// // // // //             title,
// // // // //             description,
// // // // //           ]) => (

// // // // //             <div
// // // // //               key={number}
// // // // //             >

// // // // //               <p className="text-xl font-semibold text-sky-300">
// // // // //                 {number}
// // // // //               </p>

// // // // //               <h3 className="mt-3 font-semibold">
// // // // //                 {title}
// // // // //               </h3>

// // // // //               <p className="mt-2 text-xs leading-5 text-blue-100">
// // // // //                 {description}
// // // // //               </p>

// // // // //             </div>

// // // // //           )
// // // // //         )}

// // // // //       </div>

// // // // //     </div>
// // // // //   );
// // // // // }


// // // // // /* =========================================================
// // // // //    MISTAKES CALLOUT
// // // // // ========================================================= */

// // // // // function MistakesCallout() {
// // // // //   return (
// // // // //     <div className="mt-8 border-l-[3px] border-amber-500 bg-amber-50 px-6 py-5">

// // // // //       <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-700">
// // // // //         Important
// // // // //       </p>

// // // // //       <p className="mt-2 text-sm leading-6 text-slate-700">
// // // // //         Avoid making major management decisions from a single ammonia
// // // // //         reading without checking supporting water-quality parameters and
// // // // //         recent farm-management conditions.
// // // // //       </p>

// // // // //     </div>
// // // // //   );
// // // // // }


// // // // // /* =========================================================
// // // // //    META ITEM
// // // // // ========================================================= */

// // // // // function MetaItem({
// // // // //   label,
// // // // //   value,
// // // // // }: {
// // // // //   label: string;
// // // // //   value: string;
// // // // // }) {
// // // // //   return (
// // // // //     <div>

// // // // //       <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
// // // // //         {label}
// // // // //       </p>

// // // // //       <p className="mt-1 text-xs font-medium text-slate-700">
// // // // //         {value}
// // // // //       </p>

// // // // //     </div>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import {
// // // //   useEffect,
// // // //   useState,
// // // // } from "react";

// // // // import Image from "next/image";
// // // // import Link from "next/link";

// // // // import type {
// // // //   BlogPost,
// // // //   BlogSection,
// // // // } from "@/data/blogs";

// // // // type Props = {
// // // //   post: BlogPost;
// // // //   relatedPosts?: BlogPost[];
// // // // };

// // // // const EMPTY_SECTIONS: BlogSection[] = [];

// // // // export default function BlogArticleClient({
// // // //   post,
// // // //   relatedPosts,
// // // // }: Props) {
// // // //   const [progress, setProgress] =
// // // //     useState(0);

// // // //   const sections = post.sections ?? EMPTY_SECTIONS;
// // // //   const introduction = post.introduction ?? [post.description];
// // // //   const keyTakeaways = post.keyTakeaways ?? [];
// // // //   const faq = post.faq ?? [];
// // // //   const references = post.references ?? [];
// // // //   const tags = post.tags ?? [];
// // // //   const safeRelatedPosts = relatedPosts ?? [];
// // // //   const authorName = post.author?.name ?? "Innovare Biopharma";
// // // //   const authorLogo = post.author?.logo;

// // // // const [activeSection, setActiveSection] = useState(
// // // //   sections[0]?.id ?? ""
// // // // );

// // // //   /* =====================================================
// // // //      READING PROGRESS
// // // //   ===================================================== */

// // // //   useEffect(() => {
// // // //     const updateProgress = () => {
// // // //       const scrollTop =
// // // //         window.scrollY;

// // // //       const total =
// // // //         document.documentElement
// // // //           .scrollHeight -
// // // //         window.innerHeight;

// // // //       const percentage =
// // // //         total > 0
// // // //           ? Math.min(
// // // //               100,
// // // //               Math.max(
// // // //                 0,
// // // //                 (scrollTop /
// // // //                   total) *
// // // //                   100
// // // //               )
// // // //             )
// // // //           : 0;

// // // //       setProgress(percentage);
// // // //     };

// // // //     updateProgress();

// // // //     window.addEventListener(
// // // //       "scroll",
// // // //       updateProgress,
// // // //       {
// // // //         passive: true,
// // // //       }
// // // //     );

// // // //     return () =>
// // // //       window.removeEventListener(
// // // //         "scroll",
// // // //         updateProgress
// // // //       );
// // // //   }, []);

// // // //   /* =====================================================
// // // //      ACTIVE TOC SECTION
// // // //   ===================================================== */

// // // //   useEffect(() => {
// // // //     const elements =
// // // //       sections
// // // //         .map((section) =>
// // // //           document.getElementById(
// // // //             section.id
// // // //           )
// // // //         )
// // // //         .filter(
// // // //           (
// // // //             element
// // // //           ): element is HTMLElement =>
// // // //             Boolean(element)
// // // //         );

// // // //     if (!elements.length) {
// // // //       return;
// // // //     }

// // // //     const observer =
// // // //       new IntersectionObserver(
// // // //         (entries) => {
// // // //           const visible =
// // // //             entries
// // // //               .filter(
// // // //                 (entry) =>
// // // //                   entry.isIntersecting
// // // //               )
// // // //               .sort(
// // // //                 (a, b) =>
// // // //                   b.intersectionRatio -
// // // //                   a.intersectionRatio
// // // //               );

// // // //           if (
// // // //             visible[0]
// // // //               ?.target.id
// // // //           ) {
// // // //             setActiveSection(
// // // //               visible[0]
// // // //                 .target.id
// // // //             );
// // // //           }
// // // //         },
// // // //         {
// // // //           rootMargin:
// // // //             "-20% 0px -65% 0px",

// // // //           threshold: [
// // // //             0.05,
// // // //             0.2,
// // // //             0.5,
// // // //           ],
// // // //         }
// // // //       );

// // // //     elements.forEach(
// // // //       (element) =>
// // // //         observer.observe(
// // // //           element
// // // //         )
// // // //     );

// // // //     return () =>
// // // //       observer.disconnect();
// // // //   }, [sections]);

// // // //   return (
// // // //     <main className="bg-white text-[#162235]">

// // // //       {/* =================================================
// // // //           READING PROGRESS
// // // //       ================================================= */}

// // // //       <div
// // // //         aria-hidden="true"
// // // //         className="fixed left-0 top-0 z-[100] h-[3px] w-full bg-transparent"
// // // //       >
// // // //         <div
// // // //           className="h-full bg-[#0872ce] transition-[width] duration-100"
// // // //           style={{
// // // //             width:
// // // //               `${progress}%`,
// // // //           }}
// // // //         />
// // // //       </div>


// // // //       {/* =================================================
// // // //           PUBLICATION BAR
// // // //       ================================================= */}

// // // //       <div className="border-b border-slate-200 bg-[#f8fafc]">

// // // //         <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-2.5 sm:px-6 lg:px-8">

// // // //           <p className="truncate text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
// // // //             Innovare Insights ·
// // // //             Aquaculture Knowledge ·
// // // //             Technical Expertise
// // // //           </p>

// // // //           <Link
// // // //             href="/blog"
// // // //             className="shrink-0 text-[11px] font-semibold text-[#0872ce] hover:underline"
// // // //           >
// // // //             All Insights
// // // //           </Link>

// // // //         </div>

// // // //       </div>


// // // //       {/* =================================================
// // // //           ARTICLE HERO
// // // //       ================================================= */}

// // // //       <header className="border-b border-slate-200">

// // // //         <div className="mx-auto max-w-7xl px-5 pb-10 pt-9 sm:px-6 md:pb-14 md:pt-12 lg:px-8 lg:pb-16">

// // // //           {/* Breadcrumb */}

// // // //           <nav
// // // //             aria-label="Breadcrumb"
// // // //             className="flex flex-wrap items-center gap-2 text-xs text-slate-500"
// // // //           >

// // // //             <Link
// // // //               href="/"
// // // //               className="transition hover:text-[#0872ce]"
// // // //             >
// // // //               Home
// // // //             </Link>

// // // //             <span>/</span>

// // // //             <Link
// // // //               href="/blog"
// // // //               className="transition hover:text-[#0872ce]"
// // // //             >
// // // //               Insights
// // // //             </Link>

// // // //             <span>/</span>

// // // //             <span>
// // // //               {post.category}
// // // //             </span>

// // // //           </nav>


// // // //           {/* Category */}

// // // //           <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // //             {post.category}
// // // //           </p>


// // // //           {/* Heading */}

// // // //           <h1 className="mt-4 max-w-[1050px] text-[clamp(2.5rem,6vw,5.1rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#101c2d]">
// // // //             {post.title}
// // // //           </h1>


// // // //           {/* Deck */}

// // // //           <p className="mt-7 max-w-[820px] text-[clamp(1.05rem,1.7vw,1.35rem)] leading-[1.65] text-slate-600">
// // // //             {post.description}
// // // //           </p>


// // // //           {/* Meta */}

// // // //           <div className="mt-9 flex flex-col gap-6 border-t border-slate-200 pt-7 md:flex-row md:items-center md:justify-between">

// // // //             <div className="flex items-center gap-4">

// // // //               <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5">

// // // //                 {authorLogo ? (
// // // //                   <Image
// // // //                     src={authorLogo}
// // // //                     alt={`${authorName} logo`}
// // // //                     fill
// // // //                     sizes="56px"
// // // //                     className="object-contain p-1"
// // // //                   />
// // // //                 ) : (
// // // //                   <span className="flex h-full w-full items-center justify-center text-sm font-bold text-[#0872ce]">
// // // //                     IB
// // // //                   </span>
// // // //                 )}

// // // //               </div>


// // // //               <div>

// // // //                 <p className="text-sm font-semibold text-[#172235]">
// // // //                   {
// // // //                     authorName
// // // //                   }
// // // //                 </p>

// // // //                 <p className="mt-1 text-xs text-slate-500">
// // // //                   {
// // // //                     post.author
// // // //                       .role
// // // //                   }
// // // //                 </p>

// // // //               </div>

// // // //             </div>


// // // //             <div className="grid grid-cols-3 gap-x-7 gap-y-3 text-xs md:text-right">

// // // //               <MetaItem
// // // //                 label="Published"
// // // //                 value={
// // // //                   post.date
// // // //                 }
// // // //               />

// // // //               <MetaItem
// // // //                 label="Updated"
// // // //                 value={
// // // //                   post.modifiedDate
// // // //                 }
// // // //               />

// // // //               <MetaItem
// // // //                 label="Reading"
// // // //                 value={
// // // //                   post.readTime
// // // //                 }
// // // //               />

// // // //             </div>

// // // //           </div>

// // // //         </div>


// // // //         {/* Featured Image */}

// // // //         <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">

// // // //           <figure>

// // // //             <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 sm:rounded-2xl">

// // // //               <Image
// // // //                 src={post.image}
// // // //                 alt={
// // // //                   post.imageAlt
// // // //                 }
// // // //                 fill
// // // //                 priority
// // // //                 sizes="(max-width: 768px) 100vw, 1280px"
// // // //                 className="object-cover"
// // // //               />

// // // //             </div>

// // // //             <figcaption className="hidden px-1 pt-3 text-xs leading-5 text-slate-500 sm:block">
// // // //               {post.imageAlt}
// // // //             </figcaption>

// // // //           </figure>

// // // //         </div>

// // // //       </header>


// // // //       {/* =================================================
// // // //           MOBILE TABLE OF CONTENTS
// // // //       ================================================= */}

// // // //       <div className="mx-auto max-w-[860px] px-5 pt-8 lg:hidden">

// // // //         <details className="group rounded-xl border border-slate-200 bg-[#f8fafc]">

// // // //           <summary className="flex min-h-[54px] cursor-pointer list-none items-center justify-between px-5 text-sm font-semibold text-[#172235]">

// // // //             In this article

// // // //             <span className="text-xl text-[#0872ce] transition-transform group-open:rotate-45">
// // // //               +
// // // //             </span>

// // // //           </summary>

// // // //           <nav className="border-t border-slate-200 px-5 py-4">

// // // //             <ol className="space-y-3">

// // // //               {sections.map(
// // // //                 (
// // // //                   section,
// // // //                   index
// // // //                 ) => (
// // // //                   <li
// // // //                     key={
// // // //                       section.id
// // // //                     }
// // // //                   >
// // // //                     <a
// // // //                       href={`#${section.id}`}
// // // //                       className="flex gap-3 text-sm leading-5 text-slate-600"
// // // //                     >
// // // //                       <span className="font-semibold text-[#0872ce]">
// // // //                         {String(
// // // //                           index +
// // // //                             1
// // // //                         ).padStart(
// // // //                           2,
// // // //                           "0"
// // // //                         )}
// // // //                       </span>

// // // //                       {
// // // //                         section.heading
// // // //                       }
// // // //                     </a>
// // // //                   </li>
// // // //                 )
// // // //               )}

// // // //             </ol>

// // // //           </nav>

// // // //         </details>

// // // //       </div>


// // // //       {/* =================================================
// // // //           ARTICLE LAYOUT
// // // //       ================================================= */}

// // // //       <div className="mx-auto grid max-w-7xl gap-14 px-5 py-12 sm:px-6 md:py-16 lg:grid-cols-[220px_minmax(0,760px)] lg:justify-center lg:px-8">

// // // //         {/* ===============================================
// // // //             DESKTOP TOC
// // // //         =============================================== */}

// // // //         <aside className="hidden lg:block">

// // // //           <div className="sticky top-24">

// // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
// // // //               In this article
// // // //             </p>

// // // //             <div className="mt-4 h-px bg-slate-200" />

// // // //             <nav className="mt-5">

// // // //               <ol className="space-y-1">

// // // //                 {sections.map(
// // // //                   (
// // // //                     section,
// // // //                     index
// // // //                   ) => {

// // // //                     const active =
// // // //                       activeSection ===
// // // //                       section.id;

// // // //                     return (
// // // //                       <li
// // // //                         key={
// // // //                           section.id
// // // //                         }
// // // //                       >

// // // //                         <a
// // // //                           href={`#${section.id}`}
// // // //                           className={`
// // // //                             grid
// // // //                             grid-cols-[25px_1fr]
// // // //                             gap-2
// // // //                             border-l-2
// // // //                             py-2
// // // //                             pl-3
// // // //                             text-[11px]
// // // //                             leading-5
// // // //                             transition
// // // //                             ${
// // // //                               active
// // // //                                 ? "border-[#0872ce] font-semibold text-[#0872ce]"
// // // //                                 : "border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-900"
// // // //                             }
// // // //                           `}
// // // //                         >

// // // //                           <span>
// // // //                             {String(
// // // //                               index +
// // // //                                 1
// // // //                             ).padStart(
// // // //                               2,
// // // //                               "0"
// // // //                             )}
// // // //                           </span>

// // // //                           <span>
// // // //                             {
// // // //                               section.heading
// // // //                             }
// // // //                           </span>

// // // //                         </a>

// // // //                       </li>
// // // //                     );
// // // //                   }
// // // //                 )}

// // // //               </ol>

// // // //             </nav>

// // // //           </div>

// // // //         </aside>


// // // //         {/* ===============================================
// // // //             ARTICLE
// // // //         =============================================== */}

// // // //         <article className="min-w-0">

// // // //           {/* Introduction */}

// // // //           <section>

// // // //             {introduction.map(
// // // //               (
// // // //                 paragraph,
// // // //                 index
// // // //               ) => (

// // // //                 <p
// // // //                   key={index}
// // // //                   className={`
// // // //                     text-[clamp(1.05rem,1.2vw,1.16rem)]
// // // //                     leading-[1.85]
// // // //                     text-slate-700
// // // //                     ${
// // // //                       index
// // // //                         ? "mt-5"
// // // //                         : ""
// // // //                     }
// // // //                   `}
// // // //                 >
// // // //                   {paragraph}
// // // //                 </p>

// // // //               )
// // // //             )}

// // // //           </section>


// // // //           {/* ===============================================
// // // //               KEY TAKEAWAYS
// // // //           =============================================== */}

// // // //           <section className="my-12 border-y border-slate-200 py-8">

// // // //             <div className="flex items-center gap-3">

// // // //               <div className="relative h-8 w-8 shrink-0">

// // // //                 {authorLogo ? (
// // // //                   <Image
// // // //                     src={authorLogo}
// // // //                     alt=""
// // // //                     fill
// // // //                     sizes="32px"
// // // //                     className="object-contain"
// // // //                   />
// // // //                 ) : (
// // // //                   <span className="flex h-full w-full items-center justify-center rounded-full bg-blue-50 text-[10px] font-bold text-[#0872ce]">
// // // //                     IB
// // // //                   </span>
// // // //                 )}

// // // //               </div>

// // // //               <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // //                 Key Takeaways
// // // //               </p>

// // // //             </div>


// // // //             <div className="mt-7 grid gap-6 sm:grid-cols-2">

// // // //               {keyTakeaways.map(
// // // //                 (
// // // //                   takeaway,
// // // //                   index
// // // //                 ) => (

// // // //                   <div
// // // //                     key={
// // // //                       takeaway
// // // //                     }
// // // //                     className="grid grid-cols-[32px_1fr] gap-3"
// // // //                   >

// // // //                     <span className="text-sm font-bold text-[#0872ce]">
// // // //                       {String(
// // // //                         index +
// // // //                           1
// // // //                       ).padStart(
// // // //                         2,
// // // //                         "0"
// // // //                       )}
// // // //                     </span>

// // // //                     <p className="text-[15px] leading-7 text-slate-700">
// // // //                       {takeaway}
// // // //                     </p>

// // // //                   </div>

// // // //                 )
// // // //               )}

// // // //             </div>

// // // //           </section>


// // // //           {/* ===============================================
// // // //               SECTIONS
// // // //           =============================================== */}

// // // //           {sections.map(
// // // //             (
// // // //               section,
// // // //               index
// // // //             ) => (

// // // //               <ArticleSection
// // // //                 key={
// // // //                   section.id
// // // //                 }
// // // //                 section={
// // // //                   section
// // // //                 }
// // // //                 index={
// // // //                   index
// // // //                 }
// // // //               />

// // // //             )
// // // //           )}


// // // //           {/* ===============================================
// // // //               INNOVARE INSIGHT
// // // //           =============================================== */}

// // // //           <section className="my-14 border-l-[3px] border-[#0872ce] bg-[#f6f9fc] px-6 py-7 sm:px-8">

// // // //             <div className="flex items-center gap-3">

// // // //               <div className="relative h-9 w-9">

// // // //                 {authorLogo ? (
// // // //                   <Image
// // // //                     src={authorLogo}
// // // //                     alt={authorName}
// // // //                     fill
// // // //                     sizes="36px"
// // // //                     className="object-contain"
// // // //                   />
// // // //                 ) : (
// // // //                   <span className="flex h-full w-full items-center justify-center rounded-full bg-blue-50 text-[10px] font-bold text-[#0872ce]">
// // // //                     IB
// // // //                   </span>
// // // //                 )}

// // // //               </div>

// // // //               <div>

// // // //                 <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0872ce]">
// // // //                   Innovare Technical Insight
// // // //                 </p>

// // // //                 <p className="mt-1 text-xs text-slate-500">
// // // //                   Water-quality management
// // // //                 </p>

// // // //               </div>

// // // //             </div>

// // // //             <p className="mt-5 text-[16px] leading-8 text-slate-700">
// // // //               Ammonia management works best as a system. Monitoring,
// // // //               feeding, dissolved oxygen, organic-load control and
// // // //               biological management should support one another rather
// // // //               than being treated as separate interventions.
// // // //             </p>

// // // //           </section>


// // // //           {/* ===============================================
// // // //               PRACTICAL CHECKLIST
// // // //           =============================================== */}

// // // //           <section className="my-14">

// // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // //               Practical Checklist
// // // //             </p>

// // // //             <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
// // // //               When ammonia begins to rise
// // // //             </h2>

// // // //             <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">

// // // //               {[
// // // //                 "Recheck the ammonia result and record the time of sampling.",
// // // //                 "Review pond pH and temperature before interpreting the TAN value.",
// // // //                 "Check dissolved oxygen and current aeration capacity.",
// // // //                 "Review recent feeding rates and actual feed consumption.",
// // // //                 "Inspect pond-bottom and organic-loading conditions.",
// // // //                 "Record any management action and measure the response.",
// // // //               ].map(
// // // //                 (
// // // //                   item,
// // // //                   index
// // // //                 ) => (

// // // //                   <div
// // // //                     key={item}
// // // //                     className="grid grid-cols-[38px_1fr] gap-3 py-4"
// // // //                   >

// // // //                     <span className="text-sm font-bold text-[#0872ce]">
// // // //                       {String(
// // // //                         index +
// // // //                           1
// // // //                       ).padStart(
// // // //                         2,
// // // //                         "0"
// // // //                       )}
// // // //                     </span>

// // // //                     <p className="text-[15px] leading-7 text-slate-700">
// // // //                       {item}
// // // //                     </p>

// // // //                   </div>

// // // //                 )
// // // //               )}

// // // //             </div>

// // // //           </section>


// // // //           {/* ===============================================
// // // //               FAQ
// // // //           =============================================== */}

// // // //           <section
// // // //             id="faq"
// // // //             className="scroll-mt-24 py-14"
// // // //           >

// // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // //               Frequently Asked Questions
// // // //             </p>

// // // //             <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold tracking-[-0.03em]">
// // // //               Common questions about pond ammonia
// // // //             </h2>

// // // //             <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">

// // // //               {faq.map(
// // // //                 (
// // // //                   item,
// // // //                   index
// // // //                 ) => (

// // // //                   <details
// // // //                     key={
// // // //                       index
// // // //                     }
// // // //                     className="group py-5"
// // // //                   >

// // // //                     <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[15px] font-semibold leading-6 text-[#172235]">

// // // //                       <span>
// // // //                         {
// // // //                           item.question
// // // //                         }
// // // //                       </span>

// // // //                       <span className="shrink-0 text-xl font-light text-[#0872ce] transition-transform group-open:rotate-45">
// // // //                         +
// // // //                       </span>

// // // //                     </summary>

// // // //                     <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600">
// // // //                       {
// // // //                         item.answer
// // // //                       }
// // // //                     </p>

// // // //                   </details>

// // // //                 )
// // // //               )}

// // // //             </div>

// // // //           </section>


// // // //           {/* ===============================================
// // // //               TECHNICAL NOTE
// // // //           =============================================== */}

// // // //           <section className="border-t border-slate-200 py-8">

// // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
// // // //               Technical Notes
// // // //             </p>

// // // //             <div className="mt-4 space-y-3">

// // // //               {references.map(
// // // //                 (
// // // //                   reference,
// // // //                   index
// // // //                 ) => (

// // // //                   <p
// // // //                     key={
// // // //                       index
// // // //                     }
// // // //                     className="text-xs leading-6 text-slate-500"
// // // //                   >
// // // //                     <strong className="font-semibold text-slate-700">
// // // //                       {
// // // //                         reference.label
// // // //                       }:
// // // //                     </strong>{" "}
// // // //                     {
// // // //                       reference.note
// // // //                     }
// // // //                   </p>

// // // //                 )
// // // //               )}

// // // //             </div>

// // // //           </section>


// // // //           {/* ===============================================
// // // //               AUTHOR PROFILE
// // // //           =============================================== */}

// // // //           <section className="border-t border-slate-200 py-10">

// // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // //               About the Author
// // // //             </p>

// // // //             <div className="mt-6 grid gap-6 sm:grid-cols-[72px_1fr]">

// // // //               <div className="relative h-[72px] w-[72px] overflow-hidden rounded-2xl border border-slate-200 bg-white">

// // // //                 {authorLogo ? (
// // // //                   <Image
// // // //                     src={authorLogo}
// // // //                     alt={`${authorName} logo`}
// // // //                     fill
// // // //                     sizes="72px"
// // // //                     className="object-contain p-2"
// // // //                   />
// // // //                 ) : (
// // // //                   <span className="flex h-full w-full items-center justify-center text-lg font-bold text-[#0872ce]">
// // // //                     IB
// // // //                   </span>
// // // //                 )}

// // // //               </div>

// // // //               <div>

// // // //                 <h3 className="text-lg font-semibold text-[#172235]">
// // // //                   {
// // // //                     authorName
// // // //                   }
// // // //                 </h3>

// // // //                 <p className="mt-1 text-sm font-medium text-[#0872ce]">
// // // //                   {
// // // //                     post.author
// // // //                       .role
// // // //                   }
// // // //                 </p>

// // // //                 <p className="mt-4 text-[15px] leading-7 text-slate-600">
// // // //                   {
// // // //                     post.author
// // // //                       .bio
// // // //                   }
// // // //                 </p>

// // // //               </div>

// // // //             </div>

// // // //           </section>


// // // //           {/* ===============================================
// // // //               PUBLICATION INFO
// // // //           =============================================== */}

// // // //           <section className="border-y border-slate-200 py-7">

// // // //             <div className="grid gap-6 sm:grid-cols-3">

// // // //               <MetaItem
// // // //                 label="Published"
// // // //                 value={
// // // //                   post.date
// // // //                 }
// // // //               />

// // // //               <MetaItem
// // // //                 label="Last reviewed"
// // // //                 value={
// // // //                   post.modifiedDate
// // // //                 }
// // // //               />

// // // //               <MetaItem
// // // //                 label="Reading time"
// // // //                 value={
// // // //                   post.readTime
// // // //                 }
// // // //               />

// // // //             </div>


// // // //             <div className="mt-7 border-t border-slate-100 pt-6">

// // // //               <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
// // // //                 Topics
// // // //               </p>

// // // //               <div className="mt-3 flex flex-wrap gap-2">

// // // //                 {tags.map(
// // // //                   (tag) => (

// // // //                     <span
// // // //                       key={tag}
// // // //                       className="rounded-full border border-slate-300 px-3 py-1.5 text-[11px] text-slate-600"
// // // //                     >
// // // //                       {tag}
// // // //                     </span>

// // // //                   )
// // // //                 )}

// // // //               </div>

// // // //             </div>

// // // //           </section>

// // // //         </article>

// // // //       </div>


// // // //       {/* =================================================
// // // //           RELATED ARTICLES
// // // //       ================================================= */}

// // // //       {safeRelatedPosts.length >
// // // //         0 && (

// // // //         <section className="border-t border-slate-200 bg-[#fafbfd] py-16">

// // // //           <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

// // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // //               Continue Reading
// // // //             </p>

// // // //             <div className="mt-8 grid gap-9 md:grid-cols-3">

// // // //               {safeRelatedPosts.map(
// // // //                 (blog) => (

// // // //                   <Link
// // // //                     key={
// // // //                       blog.slug
// // // //                     }
// // // //                     href={`/blog/${blog.slug}`}
// // // //                     className="group"
// // // //                   >

// // // //                     <article>

// // // //                       <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">

// // // //                         <Image
// // // //                           src={
// // // //                             blog.image
// // // //                           }
// // // //                           alt={
// // // //                             blog.imageAlt
// // // //                           }
// // // //                           fill
// // // //                           sizes="(max-width: 768px) 100vw, 33vw"
// // // //                           className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
// // // //                         />

// // // //                       </div>

// // // //                       <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0872ce]">
// // // //                         {
// // // //                           blog.category
// // // //                         }
// // // //                       </p>

// // // //                       <h3 className="mt-2 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#172235] transition group-hover:text-[#0872ce]">
// // // //                         {
// // // //                           blog.title
// // // //                         }
// // // //                       </h3>

// // // //                       <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
// // // //                         {
// // // //                           blog.description
// // // //                         }
// // // //                       </p>

// // // //                       <p className="mt-4 text-xs text-slate-400">
// // // //                         {
// // // //                           blog.readTime
// // // //                         }{" "}
// // // //                         ·{" "}
// // // //                         {
// // // //                           blog.date
// // // //                         }
// // // //                       </p>

// // // //                     </article>

// // // //                   </Link>

// // // //                 )
// // // //               )}

// // // //             </div>

// // // //           </div>

// // // //         </section>

// // // //       )}


// // // //       {/* =================================================
// // // //           COMPANY CTA
// // // //       ================================================= */}

// // // //       <section className="px-5 py-14 sm:px-6 md:py-20">

// // // //         <div className="mx-auto grid max-w-7xl overflow-hidden bg-[#072f59] lg:grid-cols-[1.1fr_0.9fr]">

// // // //           <div className="p-8 sm:p-10 md:p-14">

// // // //             <div className="relative h-11 w-11">

// // // //               {authorLogo ? (
// // // //                 <Image
// // // //                   src={authorLogo}
// // // //                   alt={authorName}
// // // //                   fill
// // // //                   sizes="44px"
// // // //                   className="object-contain"
// // // //                 />
// // // //               ) : (
// // // //                 <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-sm font-bold text-[#0872ce]">
// // // //                   IB
// // // //                 </span>
// // // //               )}

// // // //             </div>

// // // //             <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">
// // // //               Innovare Biopharma
// // // //             </p>

// // // //             <h2 className="mt-3 max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
// // // //               Better water quality starts with better decisions.
// // // //             </h2>

// // // //             <p className="mt-5 max-w-xl text-[15px] leading-7 text-blue-100">
// // // //               Explore Innovare&apos;s aquaculture portfolio and
// // // //               technical solutions for water-quality and pond-management
// // // //               programs.
// // // //             </p>

// // // //             <div className="mt-8 flex flex-wrap gap-3">

// // // //               <Link
// // // //                 href="/products"
// // // //                 className="inline-flex min-h-[46px] items-center justify-center bg-white px-6 text-sm font-semibold text-[#072f59] transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-sky-300"
// // // //               >
// // // //                 Explore Products
// // // //               </Link>

// // // //               <Link
// // // //                 href="/contact"
// // // //                 className="inline-flex min-h-[46px] items-center justify-center border border-white/30 px-6 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-300"
// // // //               >
// // // //                 Contact Us
// // // //               </Link>

// // // //             </div>

// // // //           </div>


// // // //           <div className="relative min-h-[300px]">

// // // //             <Image
// // // //               src="/images/blog/water-quality-solutions.webp"
// // // //               alt="Innovare aquaculture water-quality solutions"
// // // //               fill
// // // //               sizes="(max-width: 1024px) 100vw, 45vw"
// // // //               className="object-cover"
// // // //             />

// // // //           </div>

// // // //         </div>

// // // //       </section>


// // // //       {/* =================================================
// // // //           NEWSLETTER
// // // //       ================================================= */}

// // // //       <section className="border-t border-slate-200 bg-[#f7f9fc]">

// // // //         <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-6 md:grid-cols-[1fr_0.9fr] md:items-center md:py-16 lg:px-8">

// // // //           <div>

// // // //             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // //               Stay Ahead
// // // //             </p>

// // // //             <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em]">
// // // //               Aquaculture knowledge delivered simply.
// // // //             </h2>

// // // //             <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
// // // //               Receive new technical insights and educational
// // // //               aquaculture resources from Innovare Biopharma.
// // // //             </p>

// // // //           </div>


// // // //           <form className="flex flex-col gap-2 sm:flex-row">

// // // //             <label
// // // //               htmlFor="article-email"
// // // //               className="sr-only"
// // // //             >
// // // //               Email address
// // // //             </label>

// // // //             <input
// // // //               id="article-email"
// // // //               type="email"
// // // //               placeholder="Email address"
// // // //               className="min-h-[48px] min-w-0 flex-1 border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-[#0872ce] focus:ring-2 focus:ring-blue-100"
// // // //             />

// // // //             <button
// // // //               type="submit"
// // // //               className="min-h-[48px] bg-[#0872ce] px-6 text-sm font-semibold text-white transition hover:bg-[#075fae] focus:outline-none focus:ring-2 focus:ring-blue-300"
// // // //             >
// // // //               Subscribe
// // // //             </button>

// // // //           </form>

// // // //         </div>

// // // //       </section>

// // // //     </main>
// // // //   );
// // // // }


// // // // /* =========================================================
// // // //    ARTICLE SECTION
// // // // ========================================================= */

// // // // function ArticleSection({
// // // //   section,
// // // //   index,
// // // // }: {
// // // //   section: BlogSection;
// // // //   index: number;
// // // // }) {
// // // //   return (
// // // //     <section
// // // //       id={section.id}
// // // //       className="scroll-mt-24 py-12 first:pt-4"
// // // //     >

// // // //       <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0872ce]">
// // // //         {String(
// // // //           index + 1
// // // //         ).padStart(
// // // //           2,
// // // //           "0"
// // // //         )}
// // // //       </p>


// // // //       <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.7rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-[#172235]">
// // // //         {section.heading}
// // // //       </h2>


// // // //       <div className="mt-6 space-y-5">

// // // //         {section.paragraphs.map(
// // // //           (
// // // //             paragraph,
// // // //             paragraphIndex
// // // //           ) => (

// // // //             <p
// // // //               key={
// // // //                 paragraphIndex
// // // //               }
// // // //               className="text-[17px] leading-[1.85] text-slate-700"
// // // //             >
// // // //               {paragraph}
// // // //             </p>

// // // //           )
// // // //         )}

// // // //       </div>


// // // //       {section.bullets && (

// // // //         <ul className="mt-7 space-y-3 border-l-2 border-blue-100 pl-6">

// // // //           {section.bullets.map(
// // // //             (bullet) => (

// // // //               <li
// // // //                 key={
// // // //                   bullet
// // // //                 }
// // // //                 className="text-[15px] leading-7 text-slate-700"
// // // //               >
// // // //                 {bullet}
// // // //               </li>

// // // //             )
// // // //           )}

// // // //         </ul>

// // // //       )}


// // // //       <SectionVisual
// // // //         section={
// // // //           section
// // // //         }
// // // //       />

// // // //     </section>
// // // //   );
// // // // }


// // // // /* =========================================================
// // // //    VISUALS
// // // // ========================================================= */

// // // // function SectionVisual({
// // // //   section,
// // // // }: {
// // // //   section: BlogSection;
// // // // }) {
// // // //   if (
// // // //     section.type ===
// // // //     "chemistry"
// // // //   ) {
// // // //     return (
// // // //       <AmmoniaChemistry />
// // // //     );
// // // //   }

// // // //   if (
// // // //     section.type ===
// // // //     "pathway"
// // // //   ) {
// // // //     return (
// // // //       <AmmoniaPathway />
// // // //     );
// // // //   }

// // // //   if (
// // // //     section.type ===
// // // //     "relationship"
// // // //   ) {
// // // //     return (
// // // //       <RelationshipGraphic />
// // // //     );
// // // //   }

// // // //   if (
// // // //     section.type ===
// // // //     "monitoring"
// // // //   ) {
// // // //     return (
// // // //       <MonitoringGrid />
// // // //     );
// // // //   }

// // // //   if (
// // // //     section.type ===
// // // //     "management"
// // // //   ) {
// // // //     return (
// // // //       <ManagementFramework />
// // // //     );
// // // //   }

// // // //   if (
// // // //     section.type ===
// // // //     "mistakes"
// // // //   ) {
// // // //     return (
// // // //       <MistakesCallout />
// // // //     );
// // // //   }

// // // //   if (section.image) {
// // // //     return (
// // // //       <figure className="mt-9">

// // // //         <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">

// // // //           <Image
// // // //             src={
// // // //               section.image
// // // //             }
// // // //             alt={
// // // //               section.imageAlt ||
// // // //               section.heading
// // // //             }
// // // //             fill
// // // //             sizes="(max-width: 1024px) 100vw, 760px"
// // // //             className="object-cover"
// // // //           />

// // // //         </div>

// // // //         {section.caption && (
// // // //           <figcaption className="mt-3 text-xs leading-5 text-slate-500">
// // // //             {
// // // //               section.caption
// // // //             }
// // // //           </figcaption>
// // // //         )}

// // // //       </figure>
// // // //     );
// // // //   }

// // // //   return null;
// // // // }


// // // // /* =========================================================
// // // //    CHEMISTRY VISUAL
// // // // ========================================================= */

// // // // function AmmoniaChemistry() {
// // // //   return (
// // // //     <div className="mt-9 border border-slate-200 bg-[#fafbfd] p-6 sm:p-8">

// // // //       <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0872ce]">
// // // //         Ammonia Chemistry
// // // //       </p>

// // // //       <div className="mt-8 grid items-center gap-5 sm:grid-cols-[1fr_auto_1fr]">

// // // //         <div className="border border-emerald-100 bg-emerald-50 p-6 text-center">

// // // //           <p className="text-4xl font-semibold text-emerald-700">
// // // //             NH₄⁺
// // // //           </p>

// // // //           <p className="mt-3 text-sm font-semibold text-slate-800">
// // // //             Ammonium
// // // //           </p>

// // // //           <p className="mt-1 text-xs text-slate-500">
// // // //             Ionized form
// // // //           </p>

// // // //         </div>


// // // //         <div className="text-center text-3xl text-slate-400">
// // // //           ⇌
// // // //         </div>


// // // //         <div className="border border-amber-100 bg-amber-50 p-6 text-center">

// // // //           <p className="text-4xl font-semibold text-amber-700">
// // // //             NH₃
// // // //           </p>

// // // //           <p className="mt-3 text-sm font-semibold text-slate-800">
// // // //             Un-ionized ammonia
// // // //           </p>

// // // //           <p className="mt-1 text-xs text-slate-500">
// // // //             More toxic form
// // // //           </p>

// // // //         </div>

// // // //       </div>

// // // //       <p className="mt-6 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600">
// // // //         Increasing pH and temperature can increase the proportion of
// // // //         total ammonia present as NH₃.
// // // //       </p>

// // // //     </div>
// // // //   );
// // // // }


// // // // /* =========================================================
// // // //    AMMONIA PATHWAY
// // // // ========================================================= */

// // // // function AmmoniaPathway() {
// // // //   const sources = [
// // // //     "Feed",
// // // //     "Shrimp waste",
// // // //     "Dead plankton",
// // // //     "Organic sludge",
// // // //   ];

// // // //   return (
// // // //     <div className="mt-9 bg-[#072f59] p-6 text-white sm:p-8">

// // // //       <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-300">
// // // //         Ammonia Formation Pathway
// // // //       </p>

// // // //       <div className="mt-7 grid gap-3 sm:grid-cols-4">

// // // //         {sources.map(
// // // //           (
// // // //             item,
// // // //             index
// // // //           ) => (

// // // //             <div
// // // //               key={item}
// // // //               className="border border-white/15 p-4"
// // // //             >

// // // //               <p className="text-xs text-sky-300">
// // // //                 0
// // // //                 {index + 1}
// // // //               </p>

// // // //               <p className="mt-2 text-sm font-semibold">
// // // //                 {item}
// // // //               </p>

// // // //             </div>

// // // //           )
// // // //         )}

// // // //       </div>

// // // //       <div className="py-4 text-center text-sky-300">
// // // //         ↓
// // // //       </div>

// // // //       <div className="border border-white/15 bg-white/5 p-4 text-center text-sm">
// // // //         Microbial decomposition
// // // //       </div>

// // // //       <div className="py-4 text-center text-sky-300">
// // // //         ↓
// // // //       </div>

// // // //       <div className="bg-white p-4 text-center font-semibold text-[#072f59]">
// // // //         Ammonia / TAN
// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }


// // // // /* =========================================================
// // // //    RELATIONSHIP
// // // // ========================================================= */

// // // // function RelationshipGraphic() {
// // // //   return (
// // // //     <div className="mt-9 border-y border-slate-200 py-8">

// // // //       <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0872ce]">
// // // //         Interpret Together
// // // //       </p>

// // // //       <div className="mt-7 grid gap-4 sm:grid-cols-3">

// // // //         <RelationshipItem
// // // //           title="pH"
// // // //           description="Changes the proportion of NH₃."
// // // //         />

// // // //         <RelationshipItem
// // // //           title="Temperature"
// // // //           description="Influences ammonia equilibrium."
// // // //         />

// // // //         <RelationshipItem
// // // //           title="TAN"
// // // //           description="Must be interpreted in context."
// // // //         />

// // // //       </div>

// // // //       <div className="mt-6 flex items-center justify-center">

// // // //         <div className="border border-blue-100 bg-blue-50 px-5 py-3 text-center text-sm font-semibold text-[#075fae]">
// // // //           pH + Temperature + TAN → Better interpretation
// // // //         </div>

// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }


// // // // function RelationshipItem({
// // // //   title,
// // // //   description,
// // // // }: {
// // // //   title: string;
// // // //   description: string;
// // // // }) {
// // // //   return (
// // // //     <div className="border border-slate-200 p-5">

// // // //       <p className="text-xl font-semibold text-[#0872ce]">
// // // //         {title}
// // // //       </p>

// // // //       <p className="mt-2 text-sm leading-6 text-slate-600">
// // // //         {description}
// // // //       </p>

// // // //     </div>
// // // //   );
// // // // }


// // // // /* =========================================================
// // // //    MONITORING GRID
// // // // ========================================================= */

// // // // function MonitoringGrid() {
// // // //   const parameters = [
// // // //     [
// // // //       "Ammonia",
// // // //       "Nitrogen loading",
// // // //     ],
// // // //     [
// // // //       "pH",
// // // //       "NH₃ equilibrium",
// // // //     ],
// // // //     [
// // // //       "Temperature",
// // // //       "Water chemistry",
// // // //     ],
// // // //     [
// // // //       "Dissolved Oxygen",
// // // //       "Pond biology",
// // // //     ],
// // // //     [
// // // //       "Nitrite",
// // // //       "Nitrogen cycle",
// // // //     ],
// // // //     [
// // // //       "Alkalinity",
// // // //       "Buffering capacity",
// // // //     ],
// // // //     [
// // // //       "Salinity",
// // // //       "Culture environment",
// // // //     ],
// // // //   ];

// // // //   return (
// // // //     <div className="mt-9">

// // // //       <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0872ce]">
// // // //         Monitor What Matters
// // // //       </p>

// // // //       <div className="mt-5 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">

// // // //         {parameters.map(
// // // //           ([
// // // //             parameter,
// // // //             reason,
// // // //           ]) => (

// // // //             <div
// // // //               key={
// // // //                 parameter
// // // //               }
// // // //               className="bg-white p-5"
// // // //             >

// // // //               <p className="font-semibold text-[#172235]">
// // // //                 {
// // // //                   parameter
// // // //                 }
// // // //               </p>

// // // //               <p className="mt-1 text-xs text-slate-500">
// // // //                 {reason}
// // // //               </p>

// // // //             </div>

// // // //           )
// // // //         )}

// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }


// // // // /* =========================================================
// // // //    MANAGEMENT
// // // // ========================================================= */

// // // // function ManagementFramework() {
// // // //   const stages = [
// // // //     [
// // // //       "01",
// // // //       "Measure",
// // // //       "Monitor consistently",
// // // //     ],
// // // //     [
// // // //       "02",
// // // //       "Analyse",
// // // //       "Look for trends",
// // // //     ],
// // // //     [
// // // //       "03",
// // // //       "Manage",
// // // //       "Apply targeted actions",
// // // //     ],
// // // //     [
// // // //       "04",
// // // //       "Review",
// // // //       "Measure the response",
// // // //     ],
// // // //   ];

// // // //   return (
// // // //     <div className="mt-9 bg-[#072f59] p-6 text-white sm:p-8">

// // // //       <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-300">
// // // //         Management Framework
// // // //       </p>

// // // //       <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

// // // //         {stages.map(
// // // //           ([
// // // //             number,
// // // //             title,
// // // //             description,
// // // //           ]) => (

// // // //             <div
// // // //               key={number}
// // // //             >

// // // //               <p className="text-xl font-semibold text-sky-300">
// // // //                 {number}
// // // //               </p>

// // // //               <h3 className="mt-3 font-semibold">
// // // //                 {title}
// // // //               </h3>

// // // //               <p className="mt-2 text-xs leading-5 text-blue-100">
// // // //                 {description}
// // // //               </p>

// // // //             </div>

// // // //           )
// // // //         )}

// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }


// // // // /* =========================================================
// // // //    MISTAKES CALLOUT
// // // // ========================================================= */

// // // // function MistakesCallout() {
// // // //   return (
// // // //     <div className="mt-8 border-l-[3px] border-amber-500 bg-amber-50 px-6 py-5">

// // // //       <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-700">
// // // //         Important
// // // //       </p>

// // // //       <p className="mt-2 text-sm leading-6 text-slate-700">
// // // //         Avoid making major management decisions from a single ammonia
// // // //         reading without checking supporting water-quality parameters and
// // // //         recent farm-management conditions.
// // // //       </p>

// // // //     </div>
// // // //   );
// // // // }


// // // // /* =========================================================
// // // //    META ITEM
// // // // ========================================================= */

// // // // function MetaItem({
// // // //   label,
// // // //   value,
// // // // }: {
// // // //   label: string;
// // // //   value: string;
// // // // }) {
// // // //   return (
// // // //     <div>

// // // //       <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
// // // //         {label}
// // // //       </p>

// // // //       <p className="mt-1 text-xs font-medium text-slate-700">
// // // //         {value}
// // // //       </p>

// // // //     </div>
// // // //   );
// // // // }

// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import type { ReactNode } from "react";
// // // import Image from "next/image";
// // // import Link from "next/link";

// // // import type { BlogPost, BlogSection } from "@/data/blogs";

// // // type Props = {
// // //   post: BlogPost;
// // //   relatedPosts?: BlogPost[];
// // // };

// // // const EMPTY_SECTIONS: BlogSection[] = [];

// // // export default function BlogArticleClient({ post }: Props) {
// // //   const sections = post.sections ?? EMPTY_SECTIONS;
// // //   const introduction = post.introduction ?? [post.description];
// // //   const takeaways = post.keyTakeaways ?? [];
// // //   const faq = post.faq ?? [];
// // //   const references = post.references ?? [];
// // //   const tags = post.tags ?? [];
// // //   const authorName = post.author?.name ?? "Innovare Biopharma Technical Team";
// // //   const authorLogo = post.author?.logo;

// // //   const [progress, setProgress] = useState(0);
// // //   const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

// // //   useEffect(() => {
// // //     const updateProgress = () => {
// // //       const available = document.documentElement.scrollHeight - window.innerHeight;
// // //       setProgress(available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0);
// // //     };

// // //     updateProgress();
// // //     window.addEventListener("scroll", updateProgress, { passive: true });
// // //     return () => window.removeEventListener("scroll", updateProgress);
// // //   }, []);

// // //   useEffect(() => {
// // //     const elements = sections
// // //       .map((section) => document.getElementById(section.id))
// // //       .filter((element): element is HTMLElement => Boolean(element));

// // //     if (!elements.length) return;

// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         const current = entries
// // //           .filter((entry) => entry.isIntersecting)
// // //           .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

// // //         if (current?.target.id) setActiveSection(current.target.id);
// // //       },
// // //       { rootMargin: "-18% 0px -68% 0px", threshold: [0.05, 0.25, 0.5] },
// // //     );

// // //     elements.forEach((element) => observer.observe(element));
// // //     return () => observer.disconnect();
// // //   }, [sections]);

// // //   return (
// // //     <main className="bg-white text-[#101d2e]">
// // //       <div className="fixed inset-x-0 top-0 z-[100] h-[3px] bg-white/10" aria-hidden="true">
// // //         <div className="h-full bg-[#0788a6]" style={{ width: `${progress}%` }} />
// // //       </div>

// // //       {/* IMAGE-LED ARTICLE HEADER */}
// // //       <header className="relative isolate min-h-[455px] overflow-hidden bg-[#08253b] text-white">
// // //         <Image
// // //           src={post.image}
// // //           alt={post.imageAlt}
// // //           fill
// // //           priority
// // //           sizes="100vw"
// // //           className="-z-20 object-cover object-center"
// // //         />
// // //         <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061a2c]/95 via-[#09283f]/78 to-[#09283f]/18" />
// // //         <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061827]/60 via-transparent to-[#061827]/25" />

// // //         <div className="mx-auto flex min-h-[455px] max-w-[1220px] flex-col px-5 pb-8 pt-5 sm:px-7 lg:px-8">
// // //           <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[11px] text-white/80">
// // //             <Link href="/" className="hover:text-white">Home</Link>
// // //             <span aria-hidden="true">›</span>
// // //             <Link href="/blog" className="hover:text-white">Insights</Link>
// // //             <span aria-hidden="true">›</span>
// // //             <span>{post.category}</span>
// // //             <span aria-hidden="true">›</span>
// // //             <span className="max-w-[360px] truncate">{post.title}</span>
// // //           </nav>

// // //           <div className="mt-auto max-w-[690px]">
// // //             <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.08em]">
// // //               <span className="rounded bg-[#0788a6] px-2.5 py-1 text-white">{post.category}</span>
// // //               <span className="h-1 w-1 rounded-full bg-white" />
// // //               <span>{post.readTime ?? "8 min read"}</span>
// // //             </div>

// // //             <h1 className="mt-4 text-[clamp(2.25rem,5vw,4.35rem)] font-bold leading-[1.02] tracking-[-0.045em]">
// // //               {post.title}
// // //             </h1>

// // //             <p className="mt-4 max-w-[600px] text-[15px] leading-7 text-white/85 sm:text-[17px]">
// // //               {post.description}
// // //             </p>

// // //             <div className="mt-6 flex items-center gap-3">
// // //               <AuthorMark logo={authorLogo} name={authorName} size="md" />
// // //               <div className="text-[11px] leading-5 text-white/80">
// // //                 <p className="font-semibold text-white">By {authorName}</p>
// // //                 <p>{post.date} <span className="px-1">•</span> Last reviewed on {post.modifiedDate ?? post.date}</p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </header>

// // //       {/* MOBILE CONTENTS */}
// // //       {sections.length > 0 && (
// // //         <div className="mx-auto max-w-[920px] px-5 pt-6 lg:hidden">
// // //           <details className="rounded-lg border border-[#dce5ea] bg-[#f7fafc]">
// // //             <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-bold text-[#123d62]">
// // //               Contents <span className="text-[#0788a6]">+</span>
// // //             </summary>
// // //             <ol className="space-y-2 border-t border-[#dce5ea] px-4 py-4">
// // //               {sections.map((section, index) => (
// // //                 <li key={section.id}>
// // //                   <a href={`#${section.id}`} className="grid grid-cols-[26px_1fr] text-xs leading-5 text-slate-600">
// // //                     <span className="font-bold text-[#0872ce]">{number(index)}</span>
// // //                     <span>{section.heading}</span>
// // //                   </a>
// // //                 </li>
// // //               ))}
// // //             </ol>
// // //           </details>
// // //         </div>
// // //       )}

// // //       {/* EDITORIAL BODY */}
// // //       <div className="mx-auto grid max-w-[1220px] gap-8 px-5 py-7 sm:px-7 lg:grid-cols-[205px_minmax(0,1fr)] lg:px-8">
// // //         {sections.length > 0 && (
// // //           <aside className="hidden border-r border-[#dfe7eb] pr-5 lg:block">
// // //             <div className="sticky top-20">
// // //               <p className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#0872ce]">Contents</p>
// // //               <ol className="mt-5 space-y-2.5">
// // //                 {sections.map((section, index) => (
// // //                   <li key={section.id}>
// // //                     <a
// // //                       href={`#${section.id}`}
// // //                       className={`grid grid-cols-[27px_1fr] gap-1 text-[10px] leading-[1.45] transition ${
// // //                         activeSection === section.id
// // //                           ? "font-bold text-[#0872ce]"
// // //                           : "text-[#42576a] hover:text-[#0872ce]"
// // //                       }`}
// // //                     >
// // //                       <span className="font-bold text-[#0872ce]">{number(index)}</span>
// // //                       <span>{section.heading}</span>
// // //                     </a>
// // //                   </li>
// // //                 ))}
// // //               </ol>

// // //               <div className="mt-8 rounded-md bg-gradient-to-br from-[#f1f7ff] to-[#e8f1fb] px-4 py-5">
// // //                 <span className="text-3xl font-bold leading-none text-[#0872ce]">“</span>
// // //                 <p className="mt-2 text-[11px] leading-5 text-[#243b4e]">
// // //                   Good water quality is not about perfect numbers; it is about understanding trends and managing the pond consistently.
// // //                 </p>
// // //                 <div className="mt-4 h-0.5 w-8 bg-[#6cb8de]" />
// // //               </div>
// // //             </div>
// // //           </aside>
// // //         )}

// // //         <article className="min-w-0">
// // //           <div className="space-y-3 text-[13px] leading-6 text-[#263746]">
// // //             {introduction.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
// // //           </div>

// // //           {takeaways.length > 0 && (
// // //             <section className="my-6 rounded-lg border border-[#cfe0c5] bg-gradient-to-r from-[#fbfdf7] to-[#f6faef] p-5">
// // //               <h2 className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.04em] text-[#4b873f]">
// // //                 <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#6da65f]">✓</span>
// // //                 Key takeaways
// // //               </h2>
// // //               <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
// // //                 {takeaways.slice(0, 4).map((takeaway, index) => (
// // //                   <div key={takeaway} className="grid grid-cols-[34px_1fr] gap-3">
// // //                     <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#76a965] text-xs font-bold text-[#4b873f]">{index + 1}</span>
// // //                     <p className="text-[10px] font-semibold leading-[1.55] text-[#263b2b]">{takeaway}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </section>
// // //           )}

// // //           <div className="divide-y divide-[#dfe6ea]">
// // //             {sections.map((section, index) => (
// // //               <ArticleSection key={section.id} section={section} index={index} />
// // //             ))}
// // //           </div>

// // //           {faq.length > 0 && (
// // //             <section id="faq" className="scroll-mt-24 border-t border-[#dce5ea] pt-6">
// // //               <h2 className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#0872ce]">Frequently asked questions</h2>
// // //               <div className="mt-3 grid gap-x-7 md:grid-cols-2">
// // //                 {faq.map((item, index) => (
// // //                   <details key={index} className="group border-b border-[#dce5ea] py-2.5">
// // //                     <summary className="flex cursor-pointer list-none justify-between gap-4 text-[11px] font-semibold text-[#18293a]">
// // //                       {item.question}<span className="text-[#0872ce] group-open:rotate-45">+</span>
// // //                     </summary>
// // //                     <p className="mt-2 text-[11px] leading-5 text-slate-600">{item.answer}</p>
// // //                   </details>
// // //                 ))}
// // //               </div>
// // //             </section>
// // //           )}

// // //           {references.length > 0 && (
// // //             <section className="border-b border-[#dce5ea] py-4 text-[9px] leading-5 text-slate-500">
// // //               <strong className="text-slate-700">References: </strong>
// // //               {references.map((reference, index) => (
// // //                 <span key={index}>{index + 1}. {reference.label}: {reference.note}{index < references.length - 1 ? "  " : ""}</span>
// // //               ))}
// // //             </section>
// // //           )}

// // //           <section className="mt-5 grid gap-5 rounded-lg border border-[#dce5ea] bg-gradient-to-r from-[#f7faff] to-white p-5 md:grid-cols-[1fr_320px]">
// // //             <div className="flex gap-4">
// // //               <AuthorMark logo={authorLogo} name={authorName} size="lg" />
// // //               <div>
// // //                 <p className="text-[9px] font-extrabold uppercase tracking-[0.08em] text-[#0872ce]">About the author</p>
// // //                 <h2 className="mt-1 text-[12px] font-bold text-[#123d62]">{authorName}</h2>
// // //                 <p className="text-[10px] font-medium text-[#466378]">{post.author?.role ?? "Aquaculture Technical & Product Knowledge Team"}</p>
// // //                 <p className="mt-2 max-w-xl text-[10px] leading-5 text-slate-600">
// // //                   {post.author?.bio ?? "The Innovare Biopharma technical team develops practical educational resources for shrimp health, aquaculture water quality and responsible pond-management strategies."}
// // //                 </p>
// // //               </div>
// // //             </div>
// // //             <div className="rounded-md border border-[#d8e5ed] bg-white p-4 text-[10px] leading-5 text-[#304a5e]">
// // //               <p>◷ Published on {post.date}</p>
// // //               <p>Last reviewed on {post.modifiedDate ?? post.date}</p>
// // //               {tags.length > 0 && (
// // //                 <div className="mt-3 flex flex-wrap gap-1.5">
// // //                   {tags.map((tag) => <span key={tag} className="rounded border border-[#9cc9de] px-2 py-0.5 text-[9px] text-[#0872ce]">{tag}</span>)}
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </section>

// // //           <div className="flex flex-wrap items-center justify-center gap-6 py-5 text-[10px] text-[#294358]">
// // //             <span className="font-bold uppercase tracking-[0.08em]">Share this article</span>
// // //             <a href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" rel="noreferrer" className="hover:text-[#0872ce]">LinkedIn</a>
// // //             <a href={`mailto:?subject=${encodeURIComponent(post.title)}`} className="hover:text-[#0872ce]">Email</a>
// // //           </div>
// // //         </article>
// // //       </div>
// // //     </main>
// // //   );
// // // }

// // // function ArticleSection({ section, index }: { section: BlogSection; index: number }) {
// // //   return (
// // //     <section id={section.id} className="scroll-mt-24 py-5">
// // //       <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_310px]">
// // //         <div>
// // //           <div className="flex items-baseline gap-3">
// // //             <span className="text-[13px] font-extrabold text-[#0872ce]">{number(index)}</span>
// // //             <h2 className="text-[15px] font-extrabold leading-6 tracking-[-0.015em] text-[#122638]">{section.heading}</h2>
// // //           </div>
// // //           <div className="mt-3 space-y-2.5">
// // //             {(section.paragraphs ?? []).map((paragraph, paragraphIndex) => (
// // //               <p key={paragraphIndex} className="text-[11px] leading-[1.65] text-[#283b4a]">{paragraph}</p>
// // //             ))}
// // //           </div>
// // //           {section.bullets?.length ? (
// // //             <ul className="mt-3 space-y-1.5 border-l-2 border-[#b9d9e8] pl-4">
// // //               {section.bullets.map((bullet) => <li key={bullet} className="text-[11px] leading-5 text-[#334b5c]">{bullet}</li>)}
// // //             </ul>
// // //           ) : null}
// // //         </div>
// // //         <SectionVisual section={section} />
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // function SectionVisual({ section }: { section: BlogSection }) {
// // //   if (section.type === "chemistry") return <ChemistryVisual />;
// // //   if (section.type === "pathway") return <PathwayVisual />;
// // //   if (section.type === "relationship") return <RelationshipVisual />;
// // //   if (section.type === "monitoring") return <MonitoringVisual />;
// // //   if (section.type === "management") return <ManagementVisual />;

// // //   if (section.image) {
// // //     return (
// // //       <figure className="overflow-hidden rounded-md border border-[#dce5ea] bg-[#f6f9fa]">
// // //         <div className="relative aspect-[16/10]">
// // //           <Image src={section.image} alt={section.imageAlt ?? section.heading} fill sizes="310px" className="object-cover" />
// // //         </div>
// // //         {section.caption && <figcaption className="px-3 py-2 text-[9px] leading-4 text-slate-500">{section.caption}</figcaption>}
// // //       </figure>
// // //     );
// // //   }

// // //   return null;
// // // }

// // // function ChemistryVisual() {
// // //   return (
// // //     <VisualCard title="Ammonia chemistry">
// // //       <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
// // //         <MiniBox title="NH₄⁺" text="Ammonium" tone="green" />
// // //         <span className="text-xl text-[#123d62]">⇌</span>
// // //         <MiniBox title="NH₃" text="Ammonia" tone="blue" />
// // //       </div>
// // //       <p className="mt-3 rounded bg-[#edf5fb] px-3 py-2 text-center text-[9px] leading-4 text-[#24455e]">Higher pH and temperature can increase the proportion of un-ionized NH₃.</p>
// // //     </VisualCard>
// // //   );
// // // }

// // // function PathwayVisual() {
// // //   return (
// // //     <VisualCard title="Ammonia formation pathway">
// // //       <div className="grid grid-cols-4 gap-1 text-center">
// // //         {["Uneaten feed", "Shrimp waste", "Dead plankton", "Organic matter"].map((item) => <div key={item} className="rounded bg-[#f5f7f8] p-2 text-[8px] leading-3">{item}</div>)}
// // //       </div>
// // //       <div className="my-2 text-center text-[#0872ce]">↓</div>
// // //       <div className="rounded bg-[#e8eff3] px-2 py-1.5 text-center text-[9px]">Microbial decomposition</div>
// // //       <div className="my-2 text-center text-[#0872ce]">↓</div>
// // //       <div className="rounded bg-[#dbe8ef] px-2 py-1.5 text-center text-[9px] font-bold">Ammonia (NH₃/NH₄⁺)</div>
// // //     </VisualCard>
// // //   );
// // // }

// // // function RelationshipVisual() {
// // //   return (
// // //     <VisualCard title="Relationship">
// // //       <div className="mx-auto flex h-32 max-w-[230px] flex-col items-center justify-between text-[10px] font-bold text-[#0872ce]">
// // //         <span className="rounded-full border border-[#8fc7de] bg-white px-3 py-1">pH</span>
// // //         <p className="max-w-[135px] text-center text-[8px] font-medium leading-3 text-[#263c4d]">Higher pH and temperature increase the proportion of NH₃</p>
// // //         <div className="flex w-full justify-between"><span>Temperature</span><span>Ammonia</span></div>
// // //       </div>
// // //     </VisualCard>
// // //   );
// // // }

// // // function MonitoringVisual() {
// // //   const rows = [
// // //     ["Ammonia", "Evaluate nitrogen loading"], ["pH", "Influences NH₃ proportion"],
// // //     ["Temperature", "Affects equilibrium"], ["Dissolved oxygen", "Supports biological processes"],
// // //     ["Nitrite", "Important nitrogen-cycle intermediate"], ["Alkalinity", "Supports buffering"],
// // //   ];
// // //   return (
// // //     <VisualCard title="Water-quality parameters">
// // //       <div className="divide-y divide-white overflow-hidden rounded text-[8px]">
// // //         {rows.map(([name, reason], index) => <div key={name} className={`grid grid-cols-[90px_1fr] gap-2 px-2 py-1.5 ${index % 2 ? "bg-[#edf4fa]" : "bg-[#f6f9fc]"}`}><b>{name}</b><span>{reason}</span></div>)}
// // //       </div>
// // //     </VisualCard>
// // //   );
// // // }

// // // function ManagementVisual() {
// // //   return (
// // //     <VisualCard title="Management framework">
// // //       <div className="grid grid-cols-4 gap-1">
// // //         {["Measure", "Analyse", "Manage", "Review"].map((item, index) => <div key={item} className="rounded bg-[#f4f8fb] p-2 text-center"><span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#0872ce] text-[9px] font-bold text-white">0{index + 1}</span><p className="mt-2 text-[8px] font-bold text-[#123d62]">{item}</p></div>)}
// // //       </div>
// // //     </VisualCard>
// // //   );
// // // }

// // // function VisualCard({ title, children }: { title: string; children: ReactNode }) {
// // //   return <div className="rounded-md border border-[#d8e3e8] bg-white p-3 shadow-[0_3px_12px_rgba(18,61,98,0.04)]"><p className="mb-3 text-center text-[9px] font-extrabold uppercase tracking-[0.04em] text-[#0872ce]">{title}</p>{children}</div>;
// // // }

// // // function MiniBox({ title, text, tone }: { title: string; text: string; tone: "green" | "blue" }) {
// // //   return <div className={`rounded p-3 text-center ${tone === "green" ? "bg-[#f0f8ed] text-[#28823c]" : "bg-[#eef4fb] text-[#0952a1]"}`}><p className="text-xl font-bold">{title}</p><p className="mt-1 text-[8px] font-semibold">{text}</p></div>;
// // // }

// // // function AuthorMark({ logo, name, size }: { logo?: string; name: string; size: "md" | "lg" }) {
// // //   const dimensions = size === "lg" ? "h-14 w-14" : "h-11 w-11";
// // //   return (
// // //     <div className={`relative shrink-0 overflow-hidden rounded-full border-2 border-white bg-[#0b426f] ${dimensions}`}>
// // //       {logo ? <Image src={logo} alt={`${name} logo`} fill sizes={size === "lg" ? "56px" : "44px"} className="object-contain p-1.5" /> : <span className="flex h-full w-full items-center justify-center text-sm font-bold text-white">IB</span>}
// // //     </div>
// // //   );
// // // }

// // // function number(index: number) {
// // //   return String(index + 1).padStart(2, "0");
// // // }

// // "use client";

// // import { useEffect, useState } from "react";
// // import type { ReactNode } from "react";
// // import Image from "next/image";
// // import Link from "next/link";

// // import type { BlogPost, BlogSection } from "@/data/blogs";

// // type Props = {
// //   post: BlogPost;
// //   relatedPosts?: BlogPost[];
// // };

// // const EMPTY_SECTIONS: BlogSection[] = [];

// // export default function BlogArticleClient({ post }: Props) {
// //   const sections = post.sections ?? EMPTY_SECTIONS;
// //   const introduction = post.introduction ?? [post.description];
// //   const takeaways = post.keyTakeaways ?? [];
// //   const faq = post.faq ?? [];
// //   const references = post.references ?? [];
// //   const tags = post.tags ?? [];
// //   const authorName = post.author?.name ?? "Innovare Biopharma Technical Team";
// //   const authorLogo = post.author?.logo;

// //   const [progress, setProgress] = useState(0);
// //   const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

// //   useEffect(() => {
// //     const updateProgress = () => {
// //       const available = document.documentElement.scrollHeight - window.innerHeight;
// //       setProgress(available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0);
// //     };

// //     updateProgress();
// //     window.addEventListener("scroll", updateProgress, { passive: true });
// //     return () => window.removeEventListener("scroll", updateProgress);
// //   }, []);

// //   useEffect(() => {
// //     const elements = sections
// //       .map((section) => document.getElementById(section.id))
// //       .filter((element): element is HTMLElement => Boolean(element));

// //     if (!elements.length) return;

// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         const current = entries
// //           .filter((entry) => entry.isIntersecting)
// //           .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

// //         if (current?.target.id) setActiveSection(current.target.id);
// //       },
// //       { rootMargin: "-18% 0px -68% 0px", threshold: [0.05, 0.25, 0.5] },
// //     );

// //     elements.forEach((element) => observer.observe(element));
// //     return () => observer.disconnect();
// //   }, [sections]);

// //   return (
// //     <main className="bg-white text-[#101d2e]">
// //       <div className="fixed inset-x-0 top-0 z-[100] h-[3px] bg-white/10" aria-hidden="true">
// //         <div className="h-full bg-[#0788a6]" style={{ width: `${progress}%` }} />
// //       </div>

// //       {/* IMAGE-LED ARTICLE HEADER */}
// //       <header className="relative isolate min-h-[455px] overflow-hidden bg-[#08253b] text-white">
// //         <Image
// //           src={post.image}
// //           alt={post.imageAlt}
// //           fill
// //           priority
// //           sizes="100vw"
// //           className="-z-20 object-cover object-center"
// //         />
// //         <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061a2c]/95 via-[#09283f]/78 to-[#09283f]/18" />
// //         <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061827]/60 via-transparent to-[#061827]/25" />

// //         <div className="mx-auto flex min-h-[455px] max-w-[1220px] flex-col px-5 pb-8 pt-5 sm:px-7 lg:px-8">
// //           <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[11px] text-white/80">
// //             <Link href="/" className="hover:text-white">Home</Link>
// //             <span aria-hidden="true">›</span>
// //             <Link href="/blog" className="hover:text-white">Insights</Link>
// //             <span aria-hidden="true">›</span>
// //             <span>{post.category}</span>
// //             <span aria-hidden="true">›</span>
// //             <span className="max-w-[360px] truncate">{post.title}</span>
// //           </nav>

// //           <div className="mt-auto max-w-[690px]">
// //             <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.08em]">
// //               <span className="rounded bg-[#0788a6] px-2.5 py-1 text-white">{post.category}</span>
// //               <span className="h-1 w-1 rounded-full bg-white" />
// //               <span>{post.readTime ?? "8 min read"}</span>
// //             </div>

// //             <h1 className="mt-4 text-[clamp(2.25rem,5vw,4.35rem)] font-bold leading-[1.02] tracking-[-0.045em]">
// //               {post.title}
// //             </h1>

// //             <p className="mt-4 max-w-[600px] text-[15px] leading-7 text-white/85 sm:text-[17px]">
// //               {post.description}
// //             </p>

// //             <div className="mt-6 flex items-center gap-3">
// //               <AuthorMark logo={authorLogo} name={authorName} size="md" />
// //               <div className="text-[11px] leading-5 text-white/80">
// //                 <p className="font-semibold text-white">By {authorName}</p>
// //                 <p>{post.date} <span className="px-1">•</span> Last reviewed on {post.modifiedDate ?? post.date}</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </header>

// //       {/* MOBILE CONTENTS */}
// //       {sections.length > 0 && (
// //         <div className="mx-auto max-w-[920px] px-5 pt-6 lg:hidden">
// //           <details className="rounded-lg border border-[#dce5ea] bg-[#f7fafc]">
// //             <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-bold text-[#123d62]">
// //               Contents <span className="text-[#0788a6]">+</span>
// //             </summary>
// //             <ol className="space-y-2 border-t border-[#dce5ea] px-4 py-4">
// //               {sections.map((section, index) => (
// //                 <li key={section.id}>
// //                   <a href={`#${section.id}`} className="grid grid-cols-[26px_1fr] text-xs leading-5 text-slate-600">
// //                     <span className="font-bold text-[#0872ce]">{number(index)}</span>
// //                     <span>{section.heading}</span>
// //                   </a>
// //                 </li>
// //               ))}
// //             </ol>
// //           </details>
// //         </div>
// //       )}

// //       {/* EDITORIAL BODY */}
// //       <div className="mx-auto grid max-w-[1220px] gap-8 px-5 py-7 sm:px-7 lg:grid-cols-[205px_minmax(0,1fr)] lg:px-8">
// //         {sections.length > 0 && (
// //           <aside className="hidden border-r border-[#dfe7eb] pr-5 lg:block">
// //             <div className="sticky top-20">
// //               <p className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#0872ce]">Contents</p>
// //               <ol className="mt-5 space-y-2.5">
// //                 {sections.map((section, index) => (
// //                   <li key={section.id}>
// //                     <a
// //                       href={`#${section.id}`}
// //                       className={`grid grid-cols-[27px_1fr] gap-1 text-[10px] leading-[1.45] transition ${
// //                         activeSection === section.id
// //                           ? "font-bold text-[#0872ce]"
// //                           : "text-[#42576a] hover:text-[#0872ce]"
// //                       }`}
// //                     >
// //                       <span className="font-bold text-[#0872ce]">{number(index)}</span>
// //                       <span>{section.heading}</span>
// //                     </a>
// //                   </li>
// //                 ))}
// //               </ol>

// //               <div className="mt-8 rounded-md bg-gradient-to-br from-[#f1f7ff] to-[#e8f1fb] px-4 py-5">
// //                 <span className="text-3xl font-bold leading-none text-[#0872ce]">“</span>
// //                 <p className="mt-2 text-[11px] leading-5 text-[#243b4e]">
// //                   Good water quality is not about perfect numbers; it is about understanding trends and managing the pond consistently.
// //                 </p>
// //                 <div className="mt-4 h-0.5 w-8 bg-[#6cb8de]" />
// //               </div>
// //             </div>
// //           </aside>
// //         )}

// //         <article className="min-w-0">
// //           <div className="space-y-3 text-[13px] leading-6 text-[#263746]">
// //             {introduction.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
// //           </div>

// //           {takeaways.length > 0 && (
// //             <section className="my-6 rounded-lg border border-[#cfe0c5] bg-gradient-to-r from-[#fbfdf7] to-[#f6faef] p-5">
// //               <h2 className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.04em] text-[#4b873f]">
// //                 <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#6da65f]">✓</span>
// //                 Key takeaways
// //               </h2>
// //               <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
// //                 {takeaways.slice(0, 4).map((takeaway, index) => (
// //                   <div key={takeaway} className="grid grid-cols-[34px_1fr] gap-3">
// //                     <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#76a965] text-xs font-bold text-[#4b873f]">{index + 1}</span>
// //                     <p className="text-[10px] font-semibold leading-[1.55] text-[#263b2b]">{takeaway}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </section>
// //           )}

// //           <div className="divide-y divide-[#dfe6ea]">
// //             {sections.map((section, index) => (
// //               <ArticleSection key={section.id} section={section} index={index} />
// //             ))}
// //           </div>

// //           {faq.length > 0 && (
// //             <section id="faq" className="scroll-mt-24 border-t border-[#dce5ea] pt-6">
// //               <h2 className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#0872ce]">Frequently asked questions</h2>
// //               <div className="mt-3 grid gap-x-7 md:grid-cols-2">
// //                 {faq.map((item, index) => (
// //                   <details key={index} className="group border-b border-[#dce5ea] py-2.5">
// //                     <summary className="flex cursor-pointer list-none justify-between gap-4 text-[11px] font-semibold text-[#18293a]">
// //                       {item.question}<span className="text-[#0872ce] group-open:rotate-45">+</span>
// //                     </summary>
// //                     <p className="mt-2 text-[11px] leading-5 text-slate-600">{item.answer}</p>
// //                   </details>
// //                 ))}
// //               </div>
// //             </section>
// //           )}

// //           {references.length > 0 && (
// //             <section className="border-b border-[#dce5ea] py-4 text-[9px] leading-5 text-slate-500">
// //               <strong className="text-slate-700">References: </strong>
// //               {references.map((reference, index) => (
// //                 <span key={index}>{index + 1}. {reference.label}: {reference.note}{index < references.length - 1 ? "  " : ""}</span>
// //               ))}
// //             </section>
// //           )}

// //           <section className="mt-5 grid gap-5 rounded-lg border border-[#dce5ea] bg-gradient-to-r from-[#f7faff] to-white p-5 md:grid-cols-[1fr_320px]">
// //             <div className="flex gap-4">
// //               <AuthorMark logo={authorLogo} name={authorName} size="lg" />
// //               <div>
// //                 <p className="text-[9px] font-extrabold uppercase tracking-[0.08em] text-[#0872ce]">About the author</p>
// //                 <h2 className="mt-1 text-[12px] font-bold text-[#123d62]">{authorName}</h2>
// //                 <p className="text-[10px] font-medium text-[#466378]">{post.author?.role ?? "Aquaculture Technical & Product Knowledge Team"}</p>
// //                 <p className="mt-2 max-w-xl text-[10px] leading-5 text-slate-600">
// //                   {post.author?.bio ?? "The Innovare Biopharma technical team develops practical educational resources for shrimp health, aquaculture water quality and responsible pond-management strategies."}
// //                 </p>
// //               </div>
// //             </div>
// //             <div className="rounded-md border border-[#d8e5ed] bg-white p-4 text-[10px] leading-5 text-[#304a5e]">
// //               <p>◷ Published on {post.date}</p>
// //               <p>Last reviewed on {post.modifiedDate ?? post.date}</p>
// //               {tags.length > 0 && (
// //                 <div className="mt-3 flex flex-wrap gap-1.5">
// //                   {tags.map((tag) => <span key={tag} className="rounded border border-[#9cc9de] px-2 py-0.5 text-[9px] text-[#0872ce]">{tag}</span>)}
// //                 </div>
// //               )}
// //             </div>
// //           </section>

// //           <div className="flex flex-wrap items-center justify-center gap-6 py-5 text-[10px] text-[#294358]">
// //             <span className="font-bold uppercase tracking-[0.08em]">Share this article</span>
// //             <a href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" rel="noreferrer" className="hover:text-[#0872ce]">LinkedIn</a>
// //             <a href={`mailto:?subject=${encodeURIComponent(post.title)}`} className="hover:text-[#0872ce]">Email</a>
// //           </div>
// //         </article>
// //       </div>
// //     </main>
// //   );
// // }

// // function ArticleSection({ section, index }: { section: BlogSection; index: number }) {
// //   return (
// //     <section id={section.id} className="scroll-mt-24 py-5">
// //       <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_310px]">
// //         <div>
// //           <div className="flex items-baseline gap-3">
// //             <span className="text-[13px] font-extrabold text-[#0872ce]">{number(index)}</span>
// //             <h2 className="text-[15px] font-extrabold leading-6 tracking-[-0.015em] text-[#122638]">{section.heading}</h2>
// //           </div>
// //           <div className="mt-3 space-y-2.5">
// //             {(section.paragraphs ?? []).map((paragraph, paragraphIndex) => (
// //               <p key={paragraphIndex} className="text-[11px] leading-[1.65] text-[#283b4a]">{paragraph}</p>
// //             ))}
// //           </div>
// //           {section.bullets?.length ? (
// //             <ul className="mt-3 space-y-1.5 border-l-2 border-[#b9d9e8] pl-4">
// //               {section.bullets.map((bullet) => <li key={bullet} className="text-[11px] leading-5 text-[#334b5c]">{bullet}</li>)}
// //             </ul>
// //           ) : null}
// //         </div>
// //         <SectionVisual section={section} />
// //       </div>
// //     </section>
// //   );
// // }

// // function SectionVisual({ section }: { section: BlogSection }) {
// //   if (section.type === "chemistry") return <ChemistryVisual />;
// //   if (section.type === "pathway") return <PathwayVisual />;
// //   if (section.type === "relationship") return <RelationshipVisual />;
// //   if (section.type === "monitoring") return <MonitoringVisual />;
// //   if (section.type === "management") return <ManagementVisual />;

// //   if (section.image) {
// //     return (
// //       <figure className="overflow-hidden rounded-md border border-[#dce5ea] bg-[#f6f9fa]">
// //         <div className="relative aspect-[16/10]">
// //           <Image src={section.image} alt={section.imageAlt ?? section.heading} fill sizes="310px" className="object-cover" />
// //         </div>
// //         {section.caption && <figcaption className="px-3 py-2 text-[9px] leading-4 text-slate-500">{section.caption}</figcaption>}
// //       </figure>
// //     );
// //   }

// //   return null;
// // }

// // function ChemistryVisual() {
// //   return (
// //     <VisualCard title="Ammonia chemistry">
// //       <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
// //         <MiniBox title="NH₄⁺" text="Ammonium" tone="green" />
// //         <span className="text-xl text-[#123d62]">⇌</span>
// //         <MiniBox title="NH₃" text="Ammonia" tone="blue" />
// //       </div>
// //       <p className="mt-3 rounded bg-[#edf5fb] px-3 py-2 text-center text-[9px] leading-4 text-[#24455e]">Higher pH and temperature can increase the proportion of un-ionized NH₃.</p>
// //     </VisualCard>
// //   );
// // }

// // function PathwayVisual() {
// //   return (
// //     <VisualCard title="Ammonia formation pathway">
// //       <div className="grid grid-cols-4 gap-1 text-center">
// //         {["Uneaten feed", "Shrimp waste", "Dead plankton", "Organic matter"].map((item) => <div key={item} className="rounded bg-[#f5f7f8] p-2 text-[8px] leading-3">{item}</div>)}
// //       </div>
// //       <div className="my-2 text-center text-[#0872ce]">↓</div>
// //       <div className="rounded bg-[#e8eff3] px-2 py-1.5 text-center text-[9px]">Microbial decomposition</div>
// //       <div className="my-2 text-center text-[#0872ce]">↓</div>
// //       <div className="rounded bg-[#dbe8ef] px-2 py-1.5 text-center text-[9px] font-bold">Ammonia (NH₃/NH₄⁺)</div>
// //     </VisualCard>
// //   );
// // }

// // function RelationshipVisual() {
// //   return (
// //     <VisualCard title="Relationship">
// //       <div className="mx-auto flex h-32 max-w-[230px] flex-col items-center justify-between text-[10px] font-bold text-[#0872ce]">
// //         <span className="rounded-full border border-[#8fc7de] bg-white px-3 py-1">pH</span>
// //         <p className="max-w-[135px] text-center text-[8px] font-medium leading-3 text-[#263c4d]">Higher pH and temperature increase the proportion of NH₃</p>
// //         <div className="flex w-full justify-between"><span>Temperature</span><span>Ammonia</span></div>
// //       </div>
// //     </VisualCard>
// //   );
// // }

// // function MonitoringVisual() {
// //   const rows = [
// //     ["Ammonia", "Evaluate nitrogen loading"], ["pH", "Influences NH₃ proportion"],
// //     ["Temperature", "Affects equilibrium"], ["Dissolved oxygen", "Supports biological processes"],
// //     ["Nitrite", "Important nitrogen-cycle intermediate"], ["Alkalinity", "Supports buffering"],
// //   ];
// //   return (
// //     <VisualCard title="Water-quality parameters">
// //       <div className="divide-y divide-white overflow-hidden rounded text-[8px]">
// //         {rows.map(([name, reason], index) => <div key={name} className={`grid grid-cols-[90px_1fr] gap-2 px-2 py-1.5 ${index % 2 ? "bg-[#edf4fa]" : "bg-[#f6f9fc]"}`}><b>{name}</b><span>{reason}</span></div>)}
// //       </div>
// //     </VisualCard>
// //   );
// // }

// // function ManagementVisual() {
// //   return (
// //     <VisualCard title="Management framework">
// //       <div className="grid grid-cols-4 gap-1">
// //         {["Measure", "Analyse", "Manage", "Review"].map((item, index) => <div key={item} className="rounded bg-[#f4f8fb] p-2 text-center"><span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#0872ce] text-[9px] font-bold text-white">0{index + 1}</span><p className="mt-2 text-[8px] font-bold text-[#123d62]">{item}</p></div>)}
// //       </div>
// //     </VisualCard>
// //   );
// // }

// // function VisualCard({ title, children }: { title: string; children: ReactNode }) {
// //   return <div className="rounded-md border border-[#d8e3e8] bg-white p-3 shadow-[0_3px_12px_rgba(18,61,98,0.04)]"><p className="mb-3 text-center text-[9px] font-extrabold uppercase tracking-[0.04em] text-[#0872ce]">{title}</p>{children}</div>;
// // }

// // function MiniBox({ title, text, tone }: { title: string; text: string; tone: "green" | "blue" }) {
// //   return <div className={`rounded p-3 text-center ${tone === "green" ? "bg-[#f0f8ed] text-[#28823c]" : "bg-[#eef4fb] text-[#0952a1]"}`}><p className="text-xl font-bold">{title}</p><p className="mt-1 text-[8px] font-semibold">{text}</p></div>;
// // }

// // function AuthorMark({ logo, name, size }: { logo?: string; name: string; size: "md" | "lg" }) {
// //   const dimensions = size === "lg" ? "h-14 w-14" : "h-11 w-11";
// //   return (
// //     <div className={`relative shrink-0 overflow-hidden rounded-full border-2 border-white bg-[#0b426f] ${dimensions}`}>
// //       {logo ? <Image src={logo} alt={`${name} logo`} fill sizes={size === "lg" ? "56px" : "44px"} className="object-contain p-1.5" /> : <span className="flex h-full w-full items-center justify-center text-sm font-bold text-white">IB</span>}
// //     </div>
// //   );
// // }

// // function number(index: number) {
// //   return String(index + 1).padStart(2, "0");
// // }
// "use client";

// import { useEffect, useState } from "react";
// import type { ReactNode } from "react";
// import Image from "next/image";
// import Link from "next/link";

// import type { BlogPost, BlogSection } from "@/data/blogs";

// type Props = {
//   post: BlogPost;
//   relatedPosts?: BlogPost[];
// };

// const EMPTY_SECTIONS: BlogSection[] = [];

// export default function BlogArticleClient({ post }: Props) {
//   const sections = post.sections ?? EMPTY_SECTIONS;
//   const introduction = post.introduction ?? [post.description];
//   const takeaways = post.keyTakeaways ?? [];
//   const faq = post.faq ?? [];
//   const references = post.references ?? [];
//   const tags = post.tags ?? [];
//   const authorName = post.author?.name ?? "Innovare Biopharma Technical Team";
//   const authorLogo = post.author?.logo;

//   const [progress, setProgress] = useState(0);
//   const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

//   useEffect(() => {
//     const updateProgress = () => {
//       const available = document.documentElement.scrollHeight - window.innerHeight;
//       setProgress(available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0);
//     };

//     updateProgress();
//     window.addEventListener("scroll", updateProgress, { passive: true });
//     return () => window.removeEventListener("scroll", updateProgress);
//   }, []);

//   useEffect(() => {
//     const elements = sections
//       .map((section) => document.getElementById(section.id))
//       .filter((element): element is HTMLElement => Boolean(element));

//     if (!elements.length) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const current = entries
//           .filter((entry) => entry.isIntersecting)
//           .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

//         if (current?.target.id) setActiveSection(current.target.id);
//       },
//       { rootMargin: "-18% 0px -68% 0px", threshold: [0.05, 0.25, 0.5] },
//     );

//     elements.forEach((element) => observer.observe(element));
//     return () => observer.disconnect();
//   }, [sections]);

//   return (
//     <main className="bg-white text-[#101d2e]">
//       <div className="fixed inset-x-0 top-0 z-[100] h-[3px] bg-white/10" aria-hidden="true">
//         <div className="h-full bg-[#0788a6]" style={{ width: `${progress}%` }} />
//       </div>

//       {/* IMAGE-LED ARTICLE HEADER */}
//       <header className="relative isolate overflow-hidden bg-[#08253b] text-white">
//         <Image
//           src={post.image}
//           alt={post.imageAlt}
//           fill
//           priority
//           sizes="100vw"
//           className="-z-20 object-cover object-center"
//         />
//         <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061a2c]/95 via-[#09283f]/78 to-[#09283f]/18" />
//         <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061827]/60 via-transparent to-[#061827]/25" />

//         <div className="mx-auto flex min-h-[560px] max-w-[1220px] flex-col px-5 pb-10 pt-10 sm:min-h-[590px] sm:px-7 sm:pt-12 lg:min-h-[620px] lg:px-8">
//           <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[11px] text-white/80">
//             <Link href="/" className="hover:text-white">Home</Link>
//             <span aria-hidden="true">›</span>
//             <Link href="/blog" className="hover:text-white">Insights</Link>
//             <span aria-hidden="true">›</span>
//             <span>{post.category}</span>
//             <span aria-hidden="true">›</span>
//             <span className="max-w-[360px] truncate">{post.title}</span>
//           </nav>

//           <div className="mt-auto max-w-[720px] pb-1">
//             <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.08em]">
//               <span className="rounded bg-[#0788a6] px-2.5 py-1 text-white">{post.category}</span>
//               <span className="h-1 w-1 rounded-full bg-white" />
//               <span>{post.readTime ?? "8 min read"}</span>
//             </div>

//             <h1 className="mt-4 text-[clamp(2.25rem,5vw,4.35rem)] font-bold leading-[1.02] tracking-[-0.045em]">
//               {post.title}
//             </h1>

//             <p className="mt-4 max-w-[600px] text-[15px] leading-7 text-white/85 sm:text-[17px]">
//               {post.description}
//             </p>

//             <div className="mt-6 flex items-center gap-3">
//               <AuthorMark logo={authorLogo} name={authorName} size="md" />
//               <div className="text-[11px] leading-5 text-white/80">
//                 <p className="font-semibold text-white">By {authorName}</p>
//                 <p>{post.date} <span className="px-1">•</span> Last reviewed on {post.modifiedDate ?? post.date}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* MOBILE CONTENTS */}
//       {sections.length > 0 && (
//         <div className="mx-auto max-w-[920px] px-5 pt-6 lg:hidden">
//           <details className="rounded-lg border border-[#dce5ea] bg-[#f7fafc]">
//             <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-bold text-[#123d62]">
//               Contents <span className="text-[#0788a6]">+</span>
//             </summary>
//             <ol className="space-y-2 border-t border-[#dce5ea] px-4 py-4">
//               {sections.map((section, index) => (
//                 <li key={section.id}>
//                   <a href={`#${section.id}`} className="grid grid-cols-[26px_1fr] text-xs leading-5 text-slate-600">
//                     <span className="font-bold text-[#0872ce]">{number(index)}</span>
//                     <span>{section.heading}</span>
//                   </a>
//                 </li>
//               ))}
//             </ol>
//           </details>
//         </div>
//       )}

//       {/* EDITORIAL BODY */}
//       <div
//         className={`mx-auto grid max-w-[1220px] gap-8 px-5 py-7 sm:px-7 lg:px-8 ${
//           sections.length > 0
//             ? "lg:grid-cols-[205px_minmax(0,1fr)]"
//             : "grid-cols-1"
//         }`}
//       >
//         {sections.length > 0 && (
//           <aside className="hidden border-r border-[#dfe7eb] pr-5 lg:block">
//             <div className="sticky top-20">
//               <p className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#0872ce]">Contents</p>
//               <ol className="mt-5 space-y-2.5">
//                 {sections.map((section, index) => (
//                   <li key={section.id}>
//                     <a
//                       href={`#${section.id}`}
//                       className={`grid grid-cols-[27px_1fr] gap-1 text-[10px] leading-[1.45] transition ${
//                         activeSection === section.id
//                           ? "font-bold text-[#0872ce]"
//                           : "text-[#42576a] hover:text-[#0872ce]"
//                       }`}
//                     >
//                       <span className="font-bold text-[#0872ce]">{number(index)}</span>
//                       <span>{section.heading}</span>
//                     </a>
//                   </li>
//                 ))}
//               </ol>

//               <div className="mt-8 rounded-md bg-gradient-to-br from-[#f1f7ff] to-[#e8f1fb] px-4 py-5">
//                 <span className="text-3xl font-bold leading-none text-[#0872ce]">“</span>
//                 <p className="mt-2 text-[11px] leading-5 text-[#243b4e]">
//                   Good water quality is not about perfect numbers; it is about understanding trends and managing the pond consistently.
//                 </p>
//                 <div className="mt-4 h-0.5 w-8 bg-[#6cb8de]" />
//               </div>
//             </div>
//           </aside>
//         )}

//         <article className={`min-w-0 ${sections.length === 0 ? "mx-auto w-full max-w-[920px]" : ""}`}>
//           <div className="space-y-3 text-[13px] leading-6 text-[#263746]">
//             {introduction.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
//           </div>

//           {sections.length === 0 && (
//             <section className="my-8 rounded-lg border border-[#d7e5eb] bg-[#f7fafb] px-5 py-6 sm:px-7">
//               <p className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#0872ce]">
//                 Article content required
//               </p>
//               <h2 className="mt-2 text-xl font-bold tracking-[-0.02em] text-[#123d62]">
//                 This article currently contains summary information only.
//               </h2>
//               <p className="mt-3 text-sm leading-6 text-[#526b7d]">
//                 Add introduction, keyTakeaways, sections, FAQ and references to this post in data/blogs.ts to display the complete technical article layout.
//               </p>
//             </section>
//           )}

//           {takeaways.length > 0 && (
//             <section className="my-6 rounded-lg border border-[#cfe0c5] bg-gradient-to-r from-[#fbfdf7] to-[#f6faef] p-5">
//               <h2 className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.04em] text-[#4b873f]">
//                 <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#6da65f]">✓</span>
//                 Key takeaways
//               </h2>
//               <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
//                 {takeaways.slice(0, 4).map((takeaway, index) => (
//                   <div key={takeaway} className="grid grid-cols-[34px_1fr] gap-3">
//                     <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#76a965] text-xs font-bold text-[#4b873f]">{index + 1}</span>
//                     <p className="text-[10px] font-semibold leading-[1.55] text-[#263b2b]">{takeaway}</p>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}

//           <div className="divide-y divide-[#dfe6ea]">
//             {sections.map((section, index) => (
//               <ArticleSection key={section.id} section={section} index={index} />
//             ))}
//           </div>

//           {faq.length > 0 && (
//             <section id="faq" className="scroll-mt-24 border-t border-[#dce5ea] pt-6">
//               <h2 className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#0872ce]">Frequently asked questions</h2>
//               <div className="mt-3 grid gap-x-7 md:grid-cols-2">
//                 {faq.map((item, index) => (
//                   <details key={index} className="group border-b border-[#dce5ea] py-2.5">
//                     <summary className="flex cursor-pointer list-none justify-between gap-4 text-[11px] font-semibold text-[#18293a]">
//                       {item.question}<span className="text-[#0872ce] group-open:rotate-45">+</span>
//                     </summary>
//                     <p className="mt-2 text-[11px] leading-5 text-slate-600">{item.answer}</p>
//                   </details>
//                 ))}
//               </div>
//             </section>
//           )}

//           {references.length > 0 && (
//             <section className="border-b border-[#dce5ea] py-4 text-[9px] leading-5 text-slate-500">
//               <strong className="text-slate-700">References: </strong>
//               {references.map((reference, index) => (
//                 <span key={index}>{index + 1}. {reference.label}: {reference.note}{index < references.length - 1 ? "  " : ""}</span>
//               ))}
//             </section>
//           )}

//           <section className="mt-5 grid gap-5 rounded-lg border border-[#dce5ea] bg-gradient-to-r from-[#f7faff] to-white p-5 md:grid-cols-[1fr_320px]">
//             <div className="flex gap-4">
//               <AuthorMark logo={authorLogo} name={authorName} size="lg" />
//               <div>
//                 <p className="text-[9px] font-extrabold uppercase tracking-[0.08em] text-[#0872ce]">About the author</p>
//                 <h2 className="mt-1 text-[12px] font-bold text-[#123d62]">{authorName}</h2>
//                 <p className="text-[10px] font-medium text-[#466378]">{post.author?.role ?? "Aquaculture Technical & Product Knowledge Team"}</p>
//                 <p className="mt-2 max-w-xl text-[10px] leading-5 text-slate-600">
//                   {post.author?.bio ?? "The Innovare Biopharma technical team develops practical educational resources for shrimp health, aquaculture water quality and responsible pond-management strategies."}
//                 </p>
//               </div>
//             </div>
//             <div className="rounded-md border border-[#d8e5ed] bg-white p-4 text-[10px] leading-5 text-[#304a5e]">
//               <p>◷ Published on {post.date}</p>
//               <p>Last reviewed on {post.modifiedDate ?? post.date}</p>
//               {tags.length > 0 && (
//                 <div className="mt-3 flex flex-wrap gap-1.5">
//                   {tags.map((tag) => <span key={tag} className="rounded border border-[#9cc9de] px-2 py-0.5 text-[9px] text-[#0872ce]">{tag}</span>)}
//                 </div>
//               )}
//             </div>
//           </section>

//           <div className="flex flex-wrap items-center justify-center gap-6 py-5 text-[10px] text-[#294358]">
//             <span className="font-bold uppercase tracking-[0.08em]">Share this article</span>
//             <a href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" rel="noreferrer" className="hover:text-[#0872ce]">LinkedIn</a>
//             <a href={`mailto:?subject=${encodeURIComponent(post.title)}`} className="hover:text-[#0872ce]">Email</a>
//           </div>
//         </article>
//       </div>
//     </main>
//   );
// }

// function ArticleSection({ section, index }: { section: BlogSection; index: number }) {
//   return (
//     <section id={section.id} className="scroll-mt-24 py-5">
//       <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_310px]">
//         <div>
//           <div className="flex items-baseline gap-3">
//             <span className="text-[13px] font-extrabold text-[#0872ce]">{number(index)}</span>
//             <h2 className="text-[15px] font-extrabold leading-6 tracking-[-0.015em] text-[#122638]">{section.heading}</h2>
//           </div>
//           <div className="mt-3 space-y-2.5">
//             {(section.paragraphs ?? []).map((paragraph, paragraphIndex) => (
//               <p key={paragraphIndex} className="text-[11px] leading-[1.65] text-[#283b4a]">{paragraph}</p>
//             ))}
//           </div>
//           {section.bullets?.length ? (
//             <ul className="mt-3 space-y-1.5 border-l-2 border-[#b9d9e8] pl-4">
//               {section.bullets.map((bullet) => <li key={bullet} className="text-[11px] leading-5 text-[#334b5c]">{bullet}</li>)}
//             </ul>
//           ) : null}
//         </div>
//         <SectionVisual section={section} />
//       </div>
//     </section>
//   );
// }

// function SectionVisual({ section }: { section: BlogSection }) {
//   if (section.type === "chemistry") return <ChemistryVisual />;
//   if (section.type === "pathway") return <PathwayVisual />;
//   if (section.type === "relationship") return <RelationshipVisual />;
//   if (section.type === "monitoring") return <MonitoringVisual />;
//   if (section.type === "management") return <ManagementVisual />;

//   if (section.image) {
//     return (
//       <figure className="overflow-hidden rounded-md border border-[#dce5ea] bg-[#f6f9fa]">
//         <div className="relative aspect-[16/10]">
//           <Image src={section.image} alt={section.imageAlt ?? section.heading} fill sizes="310px" className="object-cover" />
//         </div>
//         {section.caption && <figcaption className="px-3 py-2 text-[9px] leading-4 text-slate-500">{section.caption}</figcaption>}
//       </figure>
//     );
//   }

//   return null;
// }

// function ChemistryVisual() {
//   return (
//     <VisualCard title="Ammonia chemistry">
//       <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
//         <MiniBox title="NH₄⁺" text="Ammonium" tone="green" />
//         <span className="text-xl text-[#123d62]">⇌</span>
//         <MiniBox title="NH₃" text="Ammonia" tone="blue" />
//       </div>
//       <p className="mt-3 rounded bg-[#edf5fb] px-3 py-2 text-center text-[9px] leading-4 text-[#24455e]">Higher pH and temperature can increase the proportion of un-ionized NH₃.</p>
//     </VisualCard>
//   );
// }

// function PathwayVisual() {
//   return (
//     <VisualCard title="Ammonia formation pathway">
//       <div className="grid grid-cols-4 gap-1 text-center">
//         {["Uneaten feed", "Shrimp waste", "Dead plankton", "Organic matter"].map((item) => <div key={item} className="rounded bg-[#f5f7f8] p-2 text-[8px] leading-3">{item}</div>)}
//       </div>
//       <div className="my-2 text-center text-[#0872ce]">↓</div>
//       <div className="rounded bg-[#e8eff3] px-2 py-1.5 text-center text-[9px]">Microbial decomposition</div>
//       <div className="my-2 text-center text-[#0872ce]">↓</div>
//       <div className="rounded bg-[#dbe8ef] px-2 py-1.5 text-center text-[9px] font-bold">Ammonia (NH₃/NH₄⁺)</div>
//     </VisualCard>
//   );
// }

// function RelationshipVisual() {
//   return (
//     <VisualCard title="Relationship">
//       <div className="mx-auto flex h-32 max-w-[230px] flex-col items-center justify-between text-[10px] font-bold text-[#0872ce]">
//         <span className="rounded-full border border-[#8fc7de] bg-white px-3 py-1">pH</span>
//         <p className="max-w-[135px] text-center text-[8px] font-medium leading-3 text-[#263c4d]">Higher pH and temperature increase the proportion of NH₃</p>
//         <div className="flex w-full justify-between"><span>Temperature</span><span>Ammonia</span></div>
//       </div>
//     </VisualCard>
//   );
// }

// function MonitoringVisual() {
//   const rows = [
//     ["Ammonia", "Evaluate nitrogen loading"], ["pH", "Influences NH₃ proportion"],
//     ["Temperature", "Affects equilibrium"], ["Dissolved oxygen", "Supports biological processes"],
//     ["Nitrite", "Important nitrogen-cycle intermediate"], ["Alkalinity", "Supports buffering"],
//   ];
//   return (
//     <VisualCard title="Water-quality parameters">
//       <div className="divide-y divide-white overflow-hidden rounded text-[8px]">
//         {rows.map(([name, reason], index) => <div key={name} className={`grid grid-cols-[90px_1fr] gap-2 px-2 py-1.5 ${index % 2 ? "bg-[#edf4fa]" : "bg-[#f6f9fc]"}`}><b>{name}</b><span>{reason}</span></div>)}
//       </div>
//     </VisualCard>
//   );
// }

// function ManagementVisual() {
//   return (
//     <VisualCard title="Management framework">
//       <div className="grid grid-cols-4 gap-1">
//         {["Measure", "Analyse", "Manage", "Review"].map((item, index) => <div key={item} className="rounded bg-[#f4f8fb] p-2 text-center"><span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#0872ce] text-[9px] font-bold text-white">0{index + 1}</span><p className="mt-2 text-[8px] font-bold text-[#123d62]">{item}</p></div>)}
//       </div>
//     </VisualCard>
//   );
// }

// function VisualCard({ title, children }: { title: string; children: ReactNode }) {
//   return <div className="rounded-md border border-[#d8e3e8] bg-white p-3 shadow-[0_3px_12px_rgba(18,61,98,0.04)]"><p className="mb-3 text-center text-[9px] font-extrabold uppercase tracking-[0.04em] text-[#0872ce]">{title}</p>{children}</div>;
// }

// function MiniBox({ title, text, tone }: { title: string; text: string; tone: "green" | "blue" }) {
//   return <div className={`rounded p-3 text-center ${tone === "green" ? "bg-[#f0f8ed] text-[#28823c]" : "bg-[#eef4fb] text-[#0952a1]"}`}><p className="text-xl font-bold">{title}</p><p className="mt-1 text-[8px] font-semibold">{text}</p></div>;
// }

// function AuthorMark({ logo, name, size }: { logo?: string; name: string; size: "md" | "lg" }) {
//   const dimensions = size === "lg" ? "h-14 w-14" : "h-11 w-11";
//   return (
//     <div className={`relative shrink-0 overflow-hidden rounded-full border-2 border-white bg-[#0b426f] ${dimensions}`}>
//       {logo ? <Image src={logo} alt={`${name} logo`} fill sizes={size === "lg" ? "56px" : "44px"} className="object-contain p-1.5" /> : <span className="flex h-full w-full items-center justify-center text-sm font-bold text-white">IB</span>}
//     </div>
//   );
// }

// function number(index: number) {
//   return String(index + 1).padStart(2, "0");
// }
"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import type { BlogPost, BlogSection } from "@/data/blogs";

type Props = {
  post: BlogPost;
  relatedPosts?: BlogPost[];
};

const EMPTY_SECTIONS: BlogSection[] = [];

export default function BlogArticleClient({ post }: Props) {
  const sections = post.sections ?? EMPTY_SECTIONS;
  const introduction = post.introduction ?? [post.description];
  const takeaways = post.keyTakeaways ?? [];
  const faq = post.faq ?? [];
  const references = post.references ?? [];
  const tags = post.tags ?? [];
  const authorName = post.author?.name ?? "Innovare Biopharma Technical Team";
  const authorLogo = post.author?.logo;

  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (current?.target.id) setActiveSection(current.target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0.05, 0.25, 0.5] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <main className="bg-white text-[#101d2e]">
      <div className="fixed inset-x-0 top-0 z-[100] h-[3px] bg-white/10" aria-hidden="true">
        <div className="h-full bg-[#0788a6]" style={{ width: `${progress}%` }} />
      </div>

      {/* IMAGE-LED ARTICLE HEADER */}
      <header className="relative isolate overflow-hidden bg-[#08253b] text-white">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061a2c]/95 via-[#09283f]/78 to-[#09283f]/18" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061827]/60 via-transparent to-[#061827]/25" />

        <div className="mx-auto flex min-h-[560px] max-w-[1220px] flex-col px-5 pb-10 pt-10 sm:min-h-[590px] sm:px-7 sm:pt-12 lg:min-h-[620px] lg:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[11px] text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/blog" className="hover:text-white">Insights</Link>
            <span aria-hidden="true">›</span>
            <span>{post.category}</span>
            <span aria-hidden="true">›</span>
            <span className="max-w-[360px] truncate">{post.title}</span>
          </nav>

          <div className="mt-auto max-w-[720px] pb-1">
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.08em]">
              <span className="rounded bg-[#0788a6] px-2.5 py-1 text-white">{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-white" />
              <span>{post.readTime ?? "8 min read"}</span>
            </div>

            <h1 className="mt-4 text-[clamp(2.25rem,5vw,4.35rem)] font-bold leading-[1.02] tracking-[-0.045em]">
              {post.title}
            </h1>

            <p className="mt-4 max-w-[600px] text-[15px] leading-7 text-white/85 sm:text-[17px]">
              {post.description}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <AuthorMark logo={authorLogo} name={authorName} size="md" />
              <div className="text-[11px] leading-5 text-white/80">
                <p className="font-semibold text-white">By {authorName}</p>
                <p>{post.date} <span className="px-1">•</span> Last reviewed on {post.modifiedDate ?? post.date}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE CONTENTS */}
      {sections.length > 0 && (
        <div className="mx-auto max-w-[920px] px-5 pt-6 lg:hidden">
          <details className="rounded-lg border border-[#dce5ea] bg-[#f7fafc]">
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-bold text-[#123d62]">
              Contents <span className="text-[#0788a6]">+</span>
            </summary>
            <ol className="space-y-2 border-t border-[#dce5ea] px-4 py-4">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="grid grid-cols-[26px_1fr] text-xs leading-5 text-slate-600">
                    <span className="font-bold text-[#0872ce]">{number(index)}</span>
                    <span>{section.heading}</span>
                  </a>
                </li>
              ))}
            </ol>
          </details>
        </div>
      )}

      {/* EDITORIAL BODY */}
      <div
        className={`mx-auto grid max-w-[1220px] gap-8 px-5 py-7 sm:px-7 lg:px-8 ${
          sections.length > 0
            ? "lg:grid-cols-[205px_minmax(0,1fr)]"
            : "grid-cols-1"
        }`}
      >
        {sections.length > 0 && (
          <aside className="hidden border-r border-[#dfe7eb] pr-5 lg:block">
            <div className="sticky top-20">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#0872ce]">Contents</p>
              <ol className="mt-5 space-y-2.5">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`grid grid-cols-[27px_1fr] gap-1 text-[10px] leading-[1.45] transition ${
                        activeSection === section.id
                          ? "font-bold text-[#0872ce]"
                          : "text-[#42576a] hover:text-[#0872ce]"
                      }`}
                    >
                      <span className="font-bold text-[#0872ce]">{number(index)}</span>
                      <span>{section.heading}</span>
                    </a>
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-md bg-gradient-to-br from-[#f1f7ff] to-[#e8f1fb] px-4 py-5">
                <span className="text-3xl font-bold leading-none text-[#0872ce]">“</span>
                <p className="mt-2 text-[11px] leading-5 text-[#243b4e]">
                  Good water quality is not about perfect numbers; it is about understanding trends and managing the pond consistently.
                </p>
                <div className="mt-4 h-0.5 w-8 bg-[#6cb8de]" />
              </div>
            </div>
          </aside>
        )}

        <article className={`min-w-0 ${sections.length === 0 ? "mx-auto w-full max-w-[920px]" : ""}`}>
          <div className="space-y-3 text-[13px] leading-6 text-[#263746]">
            {introduction.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>

          {sections.length === 0 && (
            <section className="my-8 rounded-lg border border-[#d7e5eb] bg-[#f7fafb] px-5 py-6 sm:px-7">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#0872ce]">
                Article content required
              </p>
              <h2 className="mt-2 text-xl font-bold tracking-[-0.02em] text-[#123d62]">
                This article currently contains summary information only.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#526b7d]">
                Add introduction, keyTakeaways, sections, FAQ and references to this post in data/blogs.ts to display the complete technical article layout.
              </p>
            </section>
          )}

          {takeaways.length > 0 && (
            <section className="my-6 rounded-lg border border-[#cfe0c5] bg-gradient-to-r from-[#fbfdf7] to-[#f6faef] p-5">
              <h2 className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.04em] text-[#4b873f]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#6da65f]">✓</span>
                Key takeaways
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {takeaways.slice(0, 4).map((takeaway, index) => (
                  <div key={takeaway} className="grid grid-cols-[34px_1fr] gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#76a965] text-xs font-bold text-[#4b873f]">{index + 1}</span>
                    <p className="text-[10px] font-semibold leading-[1.55] text-[#263b2b]">{takeaway}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="divide-y divide-[#dfe6ea]">
            {sections.map((section, index) => (
              <ArticleSection key={section.id} section={section} index={index} />
            ))}
          </div>

          {faq.length > 0 && (
            <section id="faq" className="scroll-mt-24 border-t border-[#dce5ea] pt-6">
              <h2 className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#0872ce]">Frequently asked questions</h2>
              <div className="mt-3 grid gap-x-7 md:grid-cols-2">
                {faq.map((item, index) => (
                  <details key={index} className="group border-b border-[#dce5ea] py-2.5">
                    <summary className="flex cursor-pointer list-none justify-between gap-4 text-[11px] font-semibold text-[#18293a]">
                      {item.question}<span className="text-[#0872ce] group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-2 text-[11px] leading-5 text-slate-600">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {references.length > 0 && (
            <section className="border-b border-[#dce5ea] py-4 text-[9px] leading-5 text-slate-500">
              <strong className="text-slate-700">References: </strong>
              {references.map((reference, index) => (
                <span key={index}>{index + 1}. {reference.label}: {reference.note}{index < references.length - 1 ? "  " : ""}</span>
              ))}
            </section>
          )}

          <section className="mt-5 grid gap-5 rounded-lg border border-[#dce5ea] bg-gradient-to-r from-[#f7faff] to-white p-5 md:grid-cols-[1fr_320px]">
            <div className="flex gap-4">
              <AuthorMark logo={authorLogo} name={authorName} size="lg" />
              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.08em] text-[#0872ce]">About the author</p>
                <h2 className="mt-1 text-[12px] font-bold text-[#123d62]">{authorName}</h2>
                <p className="text-[10px] font-medium text-[#466378]">{post.author?.role ?? "Aquaculture Technical & Product Knowledge Team"}</p>
                <p className="mt-2 max-w-xl text-[10px] leading-5 text-slate-600">
                  {post.author?.bio ?? "The Innovare Biopharma technical team develops practical educational resources for shrimp health, aquaculture water quality and responsible pond-management strategies."}
                </p>
              </div>
            </div>
            <div className="rounded-md border border-[#d8e5ed] bg-white p-4 text-[10px] leading-5 text-[#304a5e]">
              <p>◷ Published on {post.date}</p>
              <p>Last reviewed on {post.modifiedDate ?? post.date}</p>
              {tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {tags.map((tag) => <span key={tag} className="rounded border border-[#9cc9de] px-2 py-0.5 text-[9px] text-[#0872ce]">{tag}</span>)}
                </div>
              )}
            </div>
          </section>

          <div className="flex flex-wrap items-center justify-center gap-6 py-5 text-[10px] text-[#294358]">
            <span className="font-bold uppercase tracking-[0.08em]">Share this article</span>
            <a href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" rel="noreferrer" className="hover:text-[#0872ce]">LinkedIn</a>
            <a href={`mailto:?subject=${encodeURIComponent(post.title)}`} className="hover:text-[#0872ce]">Email</a>
          </div>
        </article>
      </div>
    </main>
  );
}

function ArticleSection({ section, index }: { section: BlogSection; index: number }) {
  return (
    <section id={section.id} className="scroll-mt-24 py-5">
      <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_310px]">
        <div>
          <div className="flex items-baseline gap-3">
            <span className="text-[13px] font-extrabold text-[#0872ce]">{number(index)}</span>
            <h2 className="text-[15px] font-extrabold leading-6 tracking-[-0.015em] text-[#122638]">{section.heading}</h2>
          </div>
          <div className="mt-3 space-y-2.5">
            {(section.paragraphs ?? []).map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex} className="text-[11px] leading-[1.65] text-[#283b4a]">{paragraph}</p>
            ))}
          </div>
          {section.bullets?.length ? (
            <ul className="mt-3 space-y-1.5 border-l-2 border-[#b9d9e8] pl-4">
              {section.bullets.map((bullet) => <li key={bullet} className="text-[11px] leading-5 text-[#334b5c]">{bullet}</li>)}
            </ul>
          ) : null}
        </div>
        <SectionVisual section={section} />
      </div>
    </section>
  );
}

function SectionVisual({ section }: { section: BlogSection }) {
  if (section.id === "alkalinity-hardness") return <BufferingVisual />;
  if (section.id === "pond-ph") return <DailyPhVisual />;
  if (section.id === "ammonia-nitrite") return <NitrogenCycleVisual />;
  if (section.type === "chemistry") return <ChemistryVisual />;
  if (section.type === "pathway") return <PathwayVisual />;
  if (section.type === "relationship") return <RelationshipVisual />;
  if (section.type === "monitoring") return <MonitoringVisual />;
  if (section.type === "management") return <ManagementVisual />;

  if (section.image) {
    return (
      <figure className="overflow-hidden rounded-md border border-[#dce5ea] bg-[#f6f9fa]">
        <div className="relative aspect-[16/10]">
          <Image src={section.image} alt={section.imageAlt ?? section.heading} fill sizes="310px" className="object-cover" />
        </div>
        {section.caption && <figcaption className="px-3 py-2 text-[9px] leading-4 text-slate-500">{section.caption}</figcaption>}
      </figure>
    );
  }

  return null;
}

function ChemistryVisual() {
  return (
    <VisualCard title="Ammonia chemistry">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <MiniBox title="NH₄⁺" text="Ammonium" tone="green" />
        <span className="text-xl text-[#123d62]">⇌</span>
        <MiniBox title="NH₃" text="Ammonia" tone="blue" />
      </div>
      <p className="mt-3 rounded bg-[#edf5fb] px-3 py-2 text-center text-[9px] leading-4 text-[#24455e]">Higher pH and temperature can increase the proportion of un-ionized NH₃.</p>
    </VisualCard>
  );
}

function PathwayVisual() {
  return (
    <VisualCard title="Ammonia formation pathway">
      <div className="grid grid-cols-4 gap-1 text-center">
        {["Uneaten feed", "Shrimp waste", "Dead plankton", "Organic matter"].map((item) => <div key={item} className="rounded bg-[#f5f7f8] p-2 text-[8px] leading-3">{item}</div>)}
      </div>
      <div className="my-2 text-center text-[#0872ce]">↓</div>
      <div className="rounded bg-[#e8eff3] px-2 py-1.5 text-center text-[9px]">Microbial decomposition</div>
      <div className="my-2 text-center text-[#0872ce]">↓</div>
      <div className="rounded bg-[#dbe8ef] px-2 py-1.5 text-center text-[9px] font-bold">Ammonia (NH₃/NH₄⁺)</div>
    </VisualCard>
  );
}

function RelationshipVisual() {
  return (
    <VisualCard title="Relationship">
      <div className="mx-auto flex h-32 max-w-[230px] flex-col items-center justify-between text-[10px] font-bold text-[#0872ce]">
        <span className="rounded-full border border-[#8fc7de] bg-white px-3 py-1">pH</span>
        <p className="max-w-[135px] text-center text-[8px] font-medium leading-3 text-[#263c4d]">Higher pH and temperature increase the proportion of NH₃</p>
        <div className="flex w-full justify-between"><span>Temperature</span><span>Ammonia</span></div>
      </div>
    </VisualCard>
  );
}

function MonitoringVisual() {
  const rows = [
    ["Ammonia", "Evaluate nitrogen loading"], ["pH", "Influences NH₃ proportion"],
    ["Temperature", "Affects equilibrium"], ["Dissolved oxygen", "Supports biological processes"],
    ["Nitrite", "Important nitrogen-cycle intermediate"], ["Alkalinity", "Supports buffering"],
  ];
  return (
    <VisualCard title="Water-quality parameters">
      <div className="divide-y divide-white overflow-hidden rounded text-[8px]">
        {rows.map(([name, reason], index) => <div key={name} className={`grid grid-cols-[90px_1fr] gap-2 px-2 py-1.5 ${index % 2 ? "bg-[#edf4fa]" : "bg-[#f6f9fc]"}`}><b>{name}</b><span>{reason}</span></div>)}
      </div>
    </VisualCard>
  );
}

function ManagementVisual() {
  const steps = [
    { label: "Measure", note: "Collect reliable readings", icon: "⌁" },
    { label: "Interpret", note: "Compare trends", icon: "◔" },
    { label: "Act", note: "Apply a targeted response", icon: "✓" },
    { label: "Review", note: "Measure the outcome", icon: "↻" },
  ];
  return (
    <VisualCard title="Continuous monitoring cycle">
      <div className="relative grid grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-2">
        {steps.map((step, index) => (
          <div key={step.label} className="relative rounded-xl border border-[#d8e8ef] bg-gradient-to-br from-white to-[#eef7fa] p-3">
            <div className="flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0872ce] text-base font-bold text-white shadow-[0_6px_14px_rgba(8,114,206,.22)]">{step.icon}</span>
              <span className="text-[9px] font-extrabold text-[#78a6ba]">0{index + 1}</span>
            </div>
            <p className="mt-3 text-[10px] font-extrabold text-[#123d62]">{step.label}</p>
            <p className="mt-1 text-[8px] leading-3 text-[#5b7384]">{step.note}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#e6f4f7] px-3 py-2 text-[8px] font-bold text-[#0872ce]">
        <span>Record</span><span>→</span><span>Compare</span><span>→</span><span>Improve</span>
      </div>
    </VisualCard>
  );
}

function DailyPhVisual() {
  return (
    <VisualCard title="Daily pH rhythm">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0a3551] via-[#56bfd3] to-[#f6c867] px-4 pb-4 pt-5 text-white">
        <svg viewBox="0 0 300 118" className="h-auto w-full" role="img" aria-label="Typical daily pond pH curve rising from morning to afternoon">
          <defs><linearGradient id="phLine" x1="0" x2="1"><stop stopColor="#bdeffc"/><stop offset="1" stopColor="#fff3bd"/></linearGradient></defs>
          <path d="M12 96 C65 91 97 73 137 56 C185 35 226 30 288 18" fill="none" stroke="url(#phLine)" strokeWidth="5" strokeLinecap="round"/>
          <path d="M12 96 C65 91 97 73 137 56 C185 35 226 30 288 18 L288 110 L12 110 Z" fill="rgba(255,255,255,.12)"/>
          {[{x:18,y:94},{x:146,y:52},{x:282,y:20}].map((p,i)=><circle key={i} cx={p.x} cy={p.y} r="6" fill="white" stroke="#0872ce" strokeWidth="3"/>)}
          <text x="12" y="114" fill="white" fontSize="10">Dawn</text><text x="130" y="114" fill="white" fontSize="10">Midday</text><text x="253" y="114" fill="white" fontSize="10">Afternoon</text>
        </svg>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-[8px] leading-3">
        <div className="rounded-lg bg-[#edf7fb] p-2.5"><b className="block text-[#0872ce]">Morning</b><span className="text-[#506979]">Respiration leaves more CO₂, so pH is often lower.</span></div>
        <div className="rounded-lg bg-[#fff8e9] p-2.5"><b className="block text-[#a86c16]">Afternoon</b><span className="text-[#6d5a3b]">Photosynthesis removes CO₂, so pH may rise.</span></div>
      </div>
    </VisualCard>
  );
}

function BufferingVisual() {
  return (
    <VisualCard title="Pond buffering system">
      <div className="rounded-xl bg-gradient-to-br from-[#eef8fb] to-[#f7fbf3] p-3">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-center">
          <DiagramNode symbol="HCO₃⁻" label="Alkalinity" note="Buffers acids" tone="aqua" />
          <span className="text-xl font-bold text-[#6b9bad]">+</span>
          <DiagramNode symbol="Ca²⁺ Mg²⁺" label="Hardness" note="Mineral support" tone="green" />
        </div>
        <div className="my-3 flex justify-center"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0872ce] shadow">↓</span></div>
        <div className="rounded-xl bg-[#123d62] px-4 py-3 text-center text-white shadow-[0_8px_20px_rgba(18,61,98,.18)]">
          <p className="text-[10px] font-extrabold">More stable pond chemistry</p>
          <p className="mt-1 text-[8px] text-white/70">pH stability • mineral balance • biological activity</p>
        </div>
      </div>
      <p className="mt-3 text-center text-[8px] font-semibold text-[#617988]">Related—but not the same measurement.</p>
    </VisualCard>
  );
}

function NitrogenCycleVisual() {
  const sources = ["Feed", "Shrimp waste", "Dead plankton", "Sludge"];
  return (
    <VisualCard title="Nitrogen transformation pathway">
      <div className="grid grid-cols-4 gap-1.5">
        {sources.map((source, index) => <div key={source} className="rounded-lg bg-[#f3f7f9] px-1 py-2 text-center"><span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-[#dcecf2] text-[9px] font-bold text-[#0872ce]">{index + 1}</span><p className="mt-1.5 text-[7px] font-semibold text-[#344e60]">{source}</p></div>)}
      </div>
      <div className="my-2 text-center text-[#72b8cf]">↓ organic decomposition</div>
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-1 text-center">
        <CycleNode formula="NH₃/NH₄⁺" label="Ammonia" tone="amber" />
        <span className="text-[#0872ce]">→</span>
        <CycleNode formula="NO₂⁻" label="Nitrite" tone="red" />
        <span className="text-[#0872ce]">→</span>
        <CycleNode formula="NO₃⁻" label="Nitrate" tone="green" />
      </div>
      <div className="mt-3 rounded-lg border border-dashed border-[#a9ccda] bg-[#f6fbfc] px-3 py-2 text-center text-[8px] text-[#496677]">Adequate oxygen supports microbial conversion.</div>
    </VisualCard>
  );
}

function DiagramNode({ symbol, label, note, tone }: { symbol: string; label: string; note: string; tone: "aqua" | "green" }) {
  const style = tone === "aqua" ? "bg-[#e2f4f8] text-[#0872ce]" : "bg-[#eaf5e6] text-[#3e8740]";
  return <div className={`rounded-xl p-3 ${style}`}><p className="text-base font-extrabold">{symbol}</p><p className="mt-2 text-[9px] font-extrabold">{label}</p><p className="mt-1 text-[7px] opacity-75">{note}</p></div>;
}

function CycleNode({ formula, label, tone }: { formula: string; label: string; tone: "amber" | "red" | "green" }) {
  const styles = { amber: "bg-[#fff4d9] text-[#9b6412]", red: "bg-[#ffeded] text-[#a94343]", green: "bg-[#eaf6e8] text-[#3d8241]" };
  return <div className={`rounded-xl px-1 py-3 ${styles[tone]}`}><p className="text-[11px] font-extrabold">{formula}</p><p className="mt-1 text-[7px] font-semibold">{label}</p></div>;
}

function VisualCard({ title, children }: { title: string; children: ReactNode }) {
  return <div className="rounded-md border border-[#d8e3e8] bg-white p-3 shadow-[0_3px_12px_rgba(18,61,98,0.04)]"><p className="mb-3 text-center text-[9px] font-extrabold uppercase tracking-[0.04em] text-[#0872ce]">{title}</p>{children}</div>;
}

function MiniBox({ title, text, tone }: { title: string; text: string; tone: "green" | "blue" }) {
  return <div className={`rounded p-3 text-center ${tone === "green" ? "bg-[#f0f8ed] text-[#28823c]" : "bg-[#eef4fb] text-[#0952a1]"}`}><p className="text-xl font-bold">{title}</p><p className="mt-1 text-[8px] font-semibold">{text}</p></div>;
}

function AuthorMark({ logo, name, size }: { logo?: string; name: string; size: "md" | "lg" }) {
  const dimensions = size === "lg" ? "h-14 w-14" : "h-11 w-11";
  return (
    <div className={`relative shrink-0 overflow-hidden rounded-full border-2 border-white bg-[#0b426f] ${dimensions}`}>
      {logo ? <Image src={logo} alt={`${name} logo`} fill sizes={size === "lg" ? "56px" : "44px"} className="object-contain p-1.5" /> : <span className="flex h-full w-full items-center justify-center text-sm font-bold text-white">IB</span>}
    </div>
  );
}

function number(index: number) {
  return String(index + 1).padStart(2, "0");
}
