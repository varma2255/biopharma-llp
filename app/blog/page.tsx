// // // // // // // // // // // // // const blogs = [
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     title: "How to Reduce Ammonia Levels in Shrimp Ponds",
// // // // // // // // // // // // //     description:
// // // // // // // // // // // // //       "Learn the causes, risks and practical management strategies for ammonia in shrimp farming.",
// // // // // // // // // // // // //     slug: "ammonia-control-shrimp-pond",
// // // // // // // // // // // // //     category: "Water Quality",
// // // // // // // // // // // // //     date: "August 2026",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     title: "Shrimp Pond Water Quality Management: Complete Guide",
// // // // // // // // // // // // //     description:
// // // // // // // // // // // // //       "Understand the key water parameters required for healthy and productive shrimp farming.",
// // // // // // // // // // // // //     slug: "shrimp-pond-water-quality",
// // // // // // // // // // // // //     category: "Water Quality",
// // // // // // // // // // // // //     date: "August 2026",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // // ];

// // // // // // // // // // // // // export default function BlogPage() {
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <main className="min-h-screen bg-white">
// // // // // // // // // // // // //       <section className="bg-blue-900 px-6 py-20 text-center text-white">
// // // // // // // // // // // // //         <h1 className="text-4xl font-bold md:text-5xl">
// // // // // // // // // // // // //           Aquaculture Insights
// // // // // // // // // // // // //         </h1>

// // // // // // // // // // // // //         <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
// // // // // // // // // // // // //           Expert insights on shrimp health, water quality, nutrition,
// // // // // // // // // // // // //           probiotics and modern aquaculture management.
// // // // // // // // // // // // //         </p>
// // // // // // // // // // // // //       </section>

// // // // // // // // // // // // //       {/* <section className="mx-auto max-w-7xl px-6 py-16">
// // // // // // // // // // // // //         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
// // // // // // // // // // // // //           {blogs.map((blog) => (
// // // // // // // // // // // // //             <article
// // // // // // // // // // // // //               key={blog.slug}
// // // // // // // // // // // // //               className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <div className="h-52 bg-gray-200" />

// // // // // // // // // // // // //               <div className="p-6">
// // // // // // // // // // // // //                 <p className="mb-3 text-sm font-semibold text-blue-700">
// // // // // // // // // // // // //                   {blog.category}
// // // // // // // // // // // // //                 </p>

// // // // // // // // // // // // //                 <h2 className="mb-3 text-xl font-bold text-gray-900">
// // // // // // // // // // // // //                   {blog.title}
// // // // // // // // // // // // //                 </h2>

// // // // // // // // // // // // //                 <p className="mb-4 text-gray-600">
// // // // // // // // // // // // //                   {blog.description}
// // // // // // // // // // // // //                 </p>

// // // // // // // // // // // // //                 <p className="mb-5 text-sm text-gray-500">
// // // // // // // // // // // // //                   {blog.date}
// // // // // // // // // // // // //                 </p>

// // // // // // // // // // // // //                 <a
// // // // // // // // // // // // //                   href={`/blog/${blog.slug}`}
// // // // // // // // // // // // //                   className="font-semibold text-blue-700 hover:underline"
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   Read More →
// // // // // // // // // // // // //                 </a>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //             </article>
// // // // // // // // // // // // //           ))}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </section> */}
// // // // // // // // // // // // //       <section
// // // // // // // // // // // // //   className="relative flex min-h-[520px] items-center bg-cover bg-center bg-no-repeat"
// // // // // // // // // // // // //   style={{
// // // // // // // // // // // // //     backgroundImage: "url('/images/bloghero.png')",
// // // // // // // // // // // // //   }}
// // // // // // // // // // // // // >
// // // // // // // // // // // // //   {/* Dark overlay */}
// // // // // // // // // // // // //   <div className="absolute inset-0 bg-black/45" />

// // // // // // // // // // // // //   {/* Hero Content */}
// // // // // // // // // // // // //   <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
// // // // // // // // // // // // //     <div className="max-w-2xl">

// // // // // // // // // // // // //       <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
// // // // // // // // // // // // //         Aquaculture Insights
// // // // // // // // // // // // //       </h1>

// // // // // // // // // // // // //       <div className="my-6 h-1 w-20 bg-blue-500" />

// // // // // // // // // // // // //       <h2 className="mb-5 text-2xl font-medium text-white md:text-3xl">
// // // // // // // // // // // // //         Expert knowledge. Better farming.
// // // // // // // // // // // // //         <br />
// // // // // // // // // // // // //         Stronger tomorrow.
// // // // // // // // // // // // //       </h2>

// // // // // // // // // // // // //       <p className="max-w-xl text-base leading-7 text-gray-200 md:text-lg">
// // // // // // // // // // // // //         Practical insights on shrimp health, water quality, nutrition,
// // // // // // // // // // // // //         probiotics and modern aquaculture management.
// // // // // // // // // // // // //       </p>

// // // // // // // // // // // // //       <a
// // // // // // // // // // // // //         href="#articles"
// // // // // // // // // // // // //         className="mt-8 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         Explore Articles
// // // // // // // // // // // // //         <span className="ml-3">→</span>
// // // // // // // // // // // // //       </a>

// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   </div>
// // // // // // // // // // // // // </section>
// // // // // // // // // // // // //     </main>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }
// // // // // // // // // // // // import Link from "next/link";
// // // // // // // // // // // // import { blogs } from "@/data/blogs";

// // // // // // // // // // // // const categories = [
// // // // // // // // // // // //   "All Articles",
// // // // // // // // // // // //   "Water Quality",
// // // // // // // // // // // //   "Shrimp Health",
// // // // // // // // // // // //   "Nutrition",
// // // // // // // // // // // //   "Probiotics",
// // // // // // // // // // // //   "Pond Management",
// // // // // // // // // // // // ];

// // // // // // // // // // // // export default function BlogPage() {
// // // // // // // // // // // //   const featuredBlog = blogs.find((blog) => blog.featured);
// // // // // // // // // // // //   const otherBlogs = blogs.filter((blog) => !blog.featured);

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <main className="bg-white">

// // // // // // // // // // // //       {/* ================= HERO ================= */}

// // // // // // // // // // // //       <section
// // // // // // // // // // // //         className="relative flex min-h-[560px] items-center bg-cover bg-center"
// // // // // // // // // // // //         style={{
// // // // // // // // // // // //           backgroundImage:
// // // // // // // // // // // //             "url('/images/blogheroframe.png')",
// // // // // // // // // // // //         }}
// // // // // // // // // // // //       >
// // // // // // // // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-[#041d3a]/95 via-[#063b70]/60 to-transparent" />

// // // // // // // // // // // //         <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
// // // // // // // // // // // //           <div className="max-w-2xl">

// // // // // // // // // // // //             <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300 pt-20">
// // // // // // // // // // // //               Innovare Knowledge Center
// // // // // // // // // // // //             </p>

// // // // // // // // // // // //             <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
// // // // // // // // // // // //               Aquaculture Insights
// // // // // // // // // // // //             </h1>

// // // // // // // // // // // //             <div className="my-6 h-1 w-20 bg-blue-500" />

// // // // // // // // // // // //             <h2 className="text-2xl font-medium text-white md:text-3xl">
// // // // // // // // // // // //               Expert knowledge. Better farming.
// // // // // // // // // // // //               <br />
// // // // // // // // // // // //               Stronger tomorrow.
// // // // // // // // // // // //             </h2>

// // // // // // // // // // // //             <p className="mt-6 max-w-xl text-lg leading-8 text-gray-200">
// // // // // // // // // // // //               Practical insights on shrimp health, water quality,
// // // // // // // // // // // //               nutrition, probiotics and modern aquaculture management.
// // // // // // // // // // // //             </p>

// // // // // // // // // // // //             <a
// // // // // // // // // // // //               href="#articles"
// // // // // // // // // // // //               className="mt-8 inline-flex items-center rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               Explore Articles
// // // // // // // // // // // //               <span className="ml-3">→</span>
// // // // // // // // // // // //             </a>

// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </section>


// // // // // // // // // // // //       {/* ================= INTRO ================= */}

// // // // // // // // // // // //       <section className="mx-auto max-w-7xl px-6 py-16 text-center">

// // // // // // // // // // // //         <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">
// // // // // // // // // // // //           Knowledge & Insights
// // // // // // // // // // // //         </p>

// // // // // // // // // // // //         <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
// // // // // // // // // // // //           Helping Aquaculture Businesses
// // // // // // // // // // // //           <br />
// // // // // // // // // // // //           Make Better Decisions
// // // // // // // // // // // //         </h2>

// // // // // // // // // // // //         <p className="mx-auto mt-5 max-w-3xl leading-7 text-gray-600">
// // // // // // // // // // // //           Explore practical knowledge, technical insights and aquaculture
// // // // // // // // // // // //           management strategies covering water quality, shrimp health,
// // // // // // // // // // // //           nutrition and sustainable farming practices.
// // // // // // // // // // // //         </p>

// // // // // // // // // // // //       </section>


// // // // // // // // // // // //       {/* ================= FEATURED ARTICLE ================= */}

// // // // // // // // // // // //       {featuredBlog && (
// // // // // // // // // // // //         <section className="mx-auto max-w-7xl px-6 pb-20">

// // // // // // // // // // // //           <div className="mb-8 flex items-center justify-between">

// // // // // // // // // // // //             <h2 className="text-2xl font-bold text-gray-900">
// // // // // // // // // // // //               Featured Insight
// // // // // // // // // // // //             </h2>

// // // // // // // // // // // //             <span className="text-sm text-gray-500">
// // // // // // // // // // // //               Editor's Pick
// // // // // // // // // // // //             </span>

// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           <div className="grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:grid-cols-2">

// // // // // // // // // // // //             {/* Image */}

// // // // // // // // // // // //             <div
// // // // // // // // // // // //               className="min-h-[350px] bg-cover bg-center"
// // // // // // // // // // // //               style={{
// // // // // // // // // // // //                 backgroundImage: `url('${featuredBlog.image}')`,
// // // // // // // // // // // //               }}
// // // // // // // // // // // //             />

// // // // // // // // // // // //             {/* Content */}

// // // // // // // // // // // //             <div className="flex flex-col justify-center p-8 md:p-12">

// // // // // // // // // // // //               <span className="mb-4 w-fit rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
// // // // // // // // // // // //                 {featuredBlog.category}
// // // // // // // // // // // //               </span>

// // // // // // // // // // // //               <h3 className="text-3xl font-bold leading-tight text-gray-900">
// // // // // // // // // // // //                 {featuredBlog.title}
// // // // // // // // // // // //               </h3>

// // // // // // // // // // // //               <p className="mt-5 leading-7 text-gray-600">
// // // // // // // // // // // //                 {featuredBlog.description}
// // // // // // // // // // // //               </p>

// // // // // // // // // // // //               <div className="mt-6 flex gap-4 text-sm text-gray-500">
// // // // // // // // // // // //                 <span>{featuredBlog.date}</span>
// // // // // // // // // // // //                 <span>•</span>
// // // // // // // // // // // //                 <span>{featuredBlog.readTime}</span>
// // // // // // // // // // // //               </div>

// // // // // // // // // // // //               <Link
// // // // // // // // // // // //                 href={`/blog/${featuredBlog.slug}`}
// // // // // // // // // // // //                 className="mt-8 inline-flex items-center font-semibold text-blue-700 transition hover:text-blue-900"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 Read Full Article
// // // // // // // // // // // //                 <span className="ml-2">→</span>
// // // // // // // // // // // //               </Link>

// // // // // // // // // // // //             </div>

// // // // // // // // // // // //           </div>

// // // // // // // // // // // //         </section>
// // // // // // // // // // // //       )}


// // // // // // // // // // // //       {/* ================= ALL ARTICLES ================= */}

// // // // // // // // // // // //       <section
// // // // // // // // // // // //         id="articles"
// // // // // // // // // // // //         className="bg-gray-50 py-20"
// // // // // // // // // // // //       >

// // // // // // // // // // // //         <div className="mx-auto max-w-7xl px-6">

// // // // // // // // // // // //           <div className="text-center">

// // // // // // // // // // // //             <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
// // // // // // // // // // // //               Explore
// // // // // // // // // // // //             </p>

// // // // // // // // // // // //             <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
// // // // // // // // // // // //               Latest Aquaculture Insights
// // // // // // // // // // // //             </h2>

// // // // // // // // // // // //             <p className="mx-auto mt-4 max-w-2xl text-gray-600">
// // // // // // // // // // // //               Explore our latest articles covering modern aquaculture
// // // // // // // // // // // //               challenges, technologies and management practices.
// // // // // // // // // // // //             </p>

// // // // // // // // // // // //           </div>


// // // // // // // // // // // //           {/* Categories */}

// // // // // // // // // // // //           <div className="mt-10 flex flex-wrap justify-center gap-3">

// // // // // // // // // // // //             {categories.map((category, index) => (
// // // // // // // // // // // //               <button
// // // // // // // // // // // //                 key={category}
// // // // // // // // // // // //                 className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
// // // // // // // // // // // //                   index === 0
// // // // // // // // // // // //                     ? "border-blue-700 bg-blue-700 text-white"
// // // // // // // // // // // //                     : "border-gray-300 bg-white text-gray-700 hover:border-blue-700 hover:text-blue-700"
// // // // // // // // // // // //                 }`}
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 {category}
// // // // // // // // // // // //               </button>
// // // // // // // // // // // //             ))}

// // // // // // // // // // // //           </div>


// // // // // // // // // // // //           {/* Blog Grid */}

// // // // // // // // // // // //           <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

// // // // // // // // // // // //             {otherBlogs.map((blog) => (

// // // // // // // // // // // //               <article
// // // // // // // // // // // //                 key={blog.id}
// // // // // // // // // // // //                 className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
// // // // // // // // // // // //               >

// // // // // // // // // // // //                 {/* Image */}

// // // // // // // // // // // //                 <div className="overflow-hidden">

// // // // // // // // // // // //                   <div
// // // // // // // // // // // //                     className="h-56 bg-cover bg-center transition duration-500 group-hover:scale-105"
// // // // // // // // // // // //                     style={{
// // // // // // // // // // // //                       backgroundImage: `url('${blog.image}')`,
// // // // // // // // // // // //                     }}
// // // // // // // // // // // //                   />

// // // // // // // // // // // //                 </div>


// // // // // // // // // // // //                 {/* Content */}

// // // // // // // // // // // //                 <div className="p-6">

// // // // // // // // // // // //                   <div className="mb-4 flex items-center justify-between">

// // // // // // // // // // // //                     <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
// // // // // // // // // // // //                       {blog.category}
// // // // // // // // // // // //                     </span>

// // // // // // // // // // // //                     <span className="text-xs text-gray-500">
// // // // // // // // // // // //                       {blog.readTime}
// // // // // // // // // // // //                     </span>

// // // // // // // // // // // //                   </div>


// // // // // // // // // // // //                   <h3 className="text-xl font-bold leading-snug text-gray-900 transition group-hover:text-blue-700">
// // // // // // // // // // // //                     {blog.title}
// // // // // // // // // // // //                   </h3>


// // // // // // // // // // // //                   <p className="mt-3 line-clamp-3 leading-6 text-gray-600">
// // // // // // // // // // // //                     {blog.description}
// // // // // // // // // // // //                   </p>


// // // // // // // // // // // //                   <div className="mt-6 border-t border-gray-100 pt-5">

// // // // // // // // // // // //                     <Link
// // // // // // // // // // // //                       href={`/blog/${blog.slug}`}
// // // // // // // // // // // //                       className="inline-flex items-center font-semibold text-blue-700"
// // // // // // // // // // // //                     >
// // // // // // // // // // // //                       Read Article

// // // // // // // // // // // //                       <span className="ml-2 transition-transform group-hover:translate-x-1">
// // // // // // // // // // // //                         →
// // // // // // // // // // // //                       </span>

// // // // // // // // // // // //                     </Link>

// // // // // // // // // // // //                   </div>

// // // // // // // // // // // //                 </div>

// // // // // // // // // // // //               </article>

// // // // // // // // // // // //             ))}

// // // // // // // // // // // //           </div>

// // // // // // // // // // // //         </div>

// // // // // // // // // // // //       </section>


// // // // // // // // // // // //       {/* ================= CTA ================= */}

// // // // // // // // // // // //       <section className="bg-[#052f5f] py-20">

// // // // // // // // // // // //         <div className="mx-auto max-w-4xl px-6 text-center">

// // // // // // // // // // // //           <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
// // // // // // // // // // // //             Innovare Biopharma
// // // // // // // // // // // //           </p>

// // // // // // // // // // // //           <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
// // // // // // // // // // // //             Looking for Aquaculture Solutions?
// // // // // // // // // // // //           </h2>

// // // // // // // // // // // //           <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
// // // // // // // // // // // //             Discover our range of solutions designed to support water
// // // // // // // // // // // //             quality, shrimp health, nutrition and modern aquaculture
// // // // // // // // // // // //             management.
// // // // // // // // // // // //           </p>

// // // // // // // // // // // //           <Link
// // // // // // // // // // // //             href="/products"
// // // // // // // // // // // //             className="mt-8 inline-flex rounded-lg bg-white px-7 py-3.5 font-semibold text-[#052f5f] transition hover:bg-gray-100"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             Explore Our Products →
// // // // // // // // // // // //           </Link>

// // // // // // // // // // // //         </div>

// // // // // // // // // // // //       </section>

// // // // // // // // // // // //     </main>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }
// // // // // // // // // // // import Image from "next/image";
// // // // // // // // // // // import Link from "next/link";
// // // // // // // // // // // import { blogs } from "@/data/blogs";

// // // // // // // // // // // const categories = [
// // // // // // // // // // //   "All Articles",
// // // // // // // // // // //   "Water Quality",
// // // // // // // // // // //   "Shrimp Health",
// // // // // // // // // // //   "Nutrition",
// // // // // // // // // // //   "Probiotics",
// // // // // // // // // // //   "Pond Management",
// // // // // // // // // // // ];

// // // // // // // // // // // const pillars = [
// // // // // // // // // // //   {
// // // // // // // // // // //     title: "Water Quality",
// // // // // // // // // // //     text: "Practical guidance on ammonia, dissolved oxygen, pH, alkalinity, salinity and pond stability.",
// // // // // // // // // // //     href: "#articles",
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     title: "Shrimp Health",
// // // // // // // // // // //     text: "Understand stress, performance, culture conditions and health-focused management strategies.",
// // // // // // // // // // //     href: "#articles",
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     title: "Microbial Management",
// // // // // // // // // // //     text: "Explore the role of beneficial microorganisms, pond biology and modern aquaculture practices.",
// // // // // // // // // // //     href: "#articles",
// // // // // // // // // // //   },
// // // // // // // // // // // ];

// // // // // // // // // // // export default function BlogPage() {
// // // // // // // // // // //   const featuredBlog = blogs.find((blog) => blog.featured);
// // // // // // // // // // //   const otherBlogs = blogs.filter((blog) => !blog.featured);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <main className="bg-white text-slate-900">

// // // // // // // // // // //       {/* =====================================================
// // // // // // // // // // //           HERO
// // // // // // // // // // //       ===================================================== */}

// // // // // // // // // // //       <section className="relative overflow-hidden bg-[#041d3a]">

// // // // // // // // // // //         <div className="mx-auto grid min-h-[640px] max-w-7xl lg:grid-cols-[0.92fr_1.08fr]">

// // // // // // // // // // //           {/* LEFT CONTENT */}

// // // // // // // // // // //           <div className="relative z-20 flex items-center px-6 py-20 lg:px-10">

// // // // // // // // // // //             <div className="max-w-xl">

// // // // // // // // // // //               <div className="flex items-center gap-3">

// // // // // // // // // // //                 <div className="relative h-11 w-11">

// // // // // // // // // // //                   <Image
// // // // // // // // // // //                     src="/images/brand/innovare-logo.png"
// // // // // // // // // // //                     alt="Innovare Biopharma"
// // // // // // // // // // //                     fill
// // // // // // // // // // //                     sizes="44px"
// // // // // // // // // // //                     className="object-contain"
// // // // // // // // // // //                     priority
// // // // // // // // // // //                   />

// // // // // // // // // // //                 </div>

// // // // // // // // // // //                 <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">
// // // // // // // // // // //                   Innovare Knowledge Center
// // // // // // // // // // //                 </p>

// // // // // // // // // // //               </div>


// // // // // // // // // // //               <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[68px]">
// // // // // // // // // // //                 Aquaculture
// // // // // // // // // // //                 <span className="block text-sky-300">
// // // // // // // // // // //                   Insights
// // // // // // // // // // //                 </span>
// // // // // // // // // // //               </h1>


// // // // // // // // // // //               <p className="mt-7 max-w-lg text-lg leading-8 text-blue-100">
// // // // // // // // // // //                 Practical knowledge for aquaculture businesses navigating
// // // // // // // // // // //                 water quality, shrimp health, nutrition, microbial management
// // // // // // // // // // //                 and modern pond operations.
// // // // // // // // // // //               </p>


// // // // // // // // // // //               <div className="mt-9 flex flex-wrap gap-4">

// // // // // // // // // // //                 <a
// // // // // // // // // // //                   href="#articles"
// // // // // // // // // // //                   className="inline-flex items-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#052f5f] transition hover:bg-blue-50"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Explore Insights
// // // // // // // // // // //                   <span className="ml-3">→</span>
// // // // // // // // // // //                 </a>

// // // // // // // // // // //                 <Link
// // // // // // // // // // //                   href="/products"
// // // // // // // // // // //                   className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Explore Solutions
// // // // // // // // // // //                 </Link>

// // // // // // // // // // //               </div>


// // // // // // // // // // //               <div className="mt-12 grid grid-cols-3 gap-5 border-t border-white/10 pt-7">

// // // // // // // // // // //                 <div>
// // // // // // // // // // //                   <p className="text-2xl font-bold text-white">
// // // // // // // // // // //                     01
// // // // // // // // // // //                   </p>
// // // // // // // // // // //                   <p className="mt-1 text-xs leading-5 text-blue-200">
// // // // // // // // // // //                     Technical insights
// // // // // // // // // // //                   </p>
// // // // // // // // // // //                 </div>

// // // // // // // // // // //                 <div>
// // // // // // // // // // //                   <p className="text-2xl font-bold text-white">
// // // // // // // // // // //                     02
// // // // // // // // // // //                   </p>
// // // // // // // // // // //                   <p className="mt-1 text-xs leading-5 text-blue-200">
// // // // // // // // // // //                     Practical management
// // // // // // // // // // //                   </p>
// // // // // // // // // // //                 </div>

// // // // // // // // // // //                 <div>
// // // // // // // // // // //                   <p className="text-2xl font-bold text-white">
// // // // // // // // // // //                     03
// // // // // // // // // // //                   </p>
// // // // // // // // // // //                   <p className="mt-1 text-xs leading-5 text-blue-200">
// // // // // // // // // // //                     Better decisions
// // // // // // // // // // //                   </p>
// // // // // // // // // // //                 </div>

// // // // // // // // // // //               </div>

// // // // // // // // // // //             </div>

// // // // // // // // // // //           </div>


// // // // // // // // // // //           {/* RIGHT IMAGE */}

// // // // // // // // // // //           <div className="relative min-h-[440px] lg:min-h-[640px]">

// // // // // // // // // // //             <Image
// // // // // // // // // // //               src="/images/blogheroframe.png"
// // // // // // // // // // //               alt="Modern commercial aquaculture pond with paddle-wheel aerators"
// // // // // // // // // // //               fill
// // // // // // // // // // //               priority
// // // // // // // // // // //               sizes="(max-width: 1024px) 100vw, 55vw"
// // // // // // // // // // //               className="object-cover"
// // // // // // // // // // //             />

// // // // // // // // // // //             <div className="absolute inset-0 bg-gradient-to-r from-[#041d3a] via-[#041d3a]/20 to-transparent lg:from-[#041d3a]/55 lg:via-transparent" />

// // // // // // // // // // //             <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#041d3a]/60 to-transparent" />

// // // // // // // // // // //           </div>

// // // // // // // // // // //         </div>

// // // // // // // // // // //       </section>


// // // // // // // // // // //       {/* =====================================================
// // // // // // // // // // //           TOPIC DISCOVERY BAR
// // // // // // // // // // //       ===================================================== */}

// // // // // // // // // // //       <section className="relative z-20 -mt-8 px-6">

// // // // // // // // // // //         <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/50">

// // // // // // // // // // //           <div className="flex flex-wrap items-center gap-2">

// // // // // // // // // // //             <span className="mr-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
// // // // // // // // // // //               Explore Topics
// // // // // // // // // // //             </span>

// // // // // // // // // // //             {categories.map((category, index) => (
// // // // // // // // // // //               <button
// // // // // // // // // // //                 key={category}
// // // // // // // // // // //                 className={`rounded-full px-4 py-2 text-sm font-medium transition ${
// // // // // // // // // // //                   index === 0
// // // // // // // // // // //                     ? "bg-[#0869bd] text-white"
// // // // // // // // // // //                     : "bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-[#0869bd]"
// // // // // // // // // // //                 }`}
// // // // // // // // // // //               >
// // // // // // // // // // //                 {category}
// // // // // // // // // // //               </button>
// // // // // // // // // // //             ))}

// // // // // // // // // // //           </div>

// // // // // // // // // // //         </div>

// // // // // // // // // // //       </section>


// // // // // // // // // // //       {/* =====================================================
// // // // // // // // // // //           INTRO / POSITIONING
// // // // // // // // // // //       ===================================================== */}

// // // // // // // // // // //       <section className="mx-auto max-w-7xl px-6 py-20">

// // // // // // // // // // //         <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">

// // // // // // // // // // //           <div>

// // // // // // // // // // //             <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0869bd]">
// // // // // // // // // // //               Knowledge for Modern Aquaculture
// // // // // // // // // // //             </p>

// // // // // // // // // // //             <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
// // // // // // // // // // //               Technical knowledge.
// // // // // // // // // // //               <br />
// // // // // // // // // // //               Practical decisions.
// // // // // // // // // // //             </h2>

// // // // // // // // // // //           </div>


// // // // // // // // // // //           <div>

// // // // // // // // // // //             <p className="max-w-3xl text-lg leading-8 text-slate-600">
// // // // // // // // // // //               Our knowledge center translates important aquaculture concepts
// // // // // // // // // // //               into clear, practical information for farmers, technicians,
// // // // // // // // // // //               distributors and businesses working across the shrimp production
// // // // // // // // // // //               cycle.
// // // // // // // // // // //             </p>

// // // // // // // // // // //           </div>

// // // // // // // // // // //         </div>

// // // // // // // // // // //       </section>


// // // // // // // // // // //       {/* =====================================================
// // // // // // // // // // //           FEATURED STORY
// // // // // // // // // // //       ===================================================== */}

// // // // // // // // // // //       {featuredBlog && (

// // // // // // // // // // //         <section className="mx-auto max-w-7xl px-6 pb-20">

// // // // // // // // // // //           <div className="mb-7 flex items-end justify-between">

// // // // // // // // // // //             <div>

// // // // // // // // // // //               <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0869bd]">
// // // // // // // // // // //                 Featured Insight
// // // // // // // // // // //               </p>

// // // // // // // // // // //               <h2 className="mt-2 text-3xl font-bold text-slate-900">
// // // // // // // // // // //                 Editor&apos;s Selection
// // // // // // // // // // //               </h2>

// // // // // // // // // // //             </div>


// // // // // // // // // // //             <span className="hidden text-sm text-slate-500 md:block">
// // // // // // // // // // //               Latest technical feature
// // // // // // // // // // //             </span>

// // // // // // // // // // //           </div>


// // // // // // // // // // //           <Link
// // // // // // // // // // //             href={`/blog/${featuredBlog.slug}`}
// // // // // // // // // // //             className="group block"
// // // // // // // // // // //           >

// // // // // // // // // // //             <article className="grid overflow-hidden rounded-[30px] bg-[#f3f8fc] lg:grid-cols-[1.18fr_0.82fr]">

// // // // // // // // // // //               {/* IMAGE */}

// // // // // // // // // // //               <div className="relative min-h-[430px] overflow-hidden">

// // // // // // // // // // //                 <Image
// // // // // // // // // // //                   src={featuredBlog.image}
// // // // // // // // // // //                   alt={featuredBlog.title}
// // // // // // // // // // //                   fill
// // // // // // // // // // //                   sizes="(max-width: 1024px) 100vw, 60vw"
// // // // // // // // // // //                   className="object-cover transition duration-700 group-hover:scale-[1.03]"
// // // // // // // // // // //                 />

// // // // // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

// // // // // // // // // // //                 <div className="absolute bottom-6 left-6">

// // // // // // // // // // //                   <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#0869bd] backdrop-blur">
// // // // // // // // // // //                     {featuredBlog.category}
// // // // // // // // // // //                   </span>

// // // // // // // // // // //                 </div>

// // // // // // // // // // //               </div>


// // // // // // // // // // //               {/* CONTENT */}

// // // // // // // // // // //               <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">

// // // // // // // // // // //                 <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0869bd]">
// // // // // // // // // // //                   Featured Article
// // // // // // // // // // //                 </p>


// // // // // // // // // // //                 <h3 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
// // // // // // // // // // //                   {featuredBlog.title}
// // // // // // // // // // //                 </h3>


// // // // // // // // // // //                 <p className="mt-5 leading-7 text-slate-600">
// // // // // // // // // // //                   {featuredBlog.description}
// // // // // // // // // // //                 </p>


// // // // // // // // // // //                 <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-500">

// // // // // // // // // // //                   <span>
// // // // // // // // // // //                     {featuredBlog.date}
// // // // // // // // // // //                   </span>

// // // // // // // // // // //                   <span>•</span>

// // // // // // // // // // //                   <span>
// // // // // // // // // // //                     {featuredBlog.readTime}
// // // // // // // // // // //                   </span>

// // // // // // // // // // //                 </div>


// // // // // // // // // // //                 <div className="mt-9">

// // // // // // // // // // //                   <span className="inline-flex items-center font-semibold text-[#0869bd]">

// // // // // // // // // // //                     Read Full Insight

// // // // // // // // // // //                     <span className="ml-3 transition-transform group-hover:translate-x-1">
// // // // // // // // // // //                       →
// // // // // // // // // // //                     </span>

// // // // // // // // // // //                   </span>

// // // // // // // // // // //                 </div>

// // // // // // // // // // //               </div>

// // // // // // // // // // //             </article>

// // // // // // // // // // //           </Link>

// // // // // // // // // // //         </section>

// // // // // // // // // // //       )}


// // // // // // // // // // //       {/* =====================================================
// // // // // // // // // // //           KNOWLEDGE PILLARS
// // // // // // // // // // //       ===================================================== */}

// // // // // // // // // // //       <section className="bg-[#f7fafc] py-20">

// // // // // // // // // // //         <div className="mx-auto max-w-7xl px-6">

// // // // // // // // // // //           <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

// // // // // // // // // // //             <div>

// // // // // // // // // // //               <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0869bd]">
// // // // // // // // // // //                 Knowledge Pillars
// // // // // // // // // // //               </p>

// // // // // // // // // // //               <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900">
// // // // // // // // // // //                 Explore the topics shaping
// // // // // // // // // // //                 modern aquaculture.
// // // // // // // // // // //               </h2>

// // // // // // // // // // //             </div>


// // // // // // // // // // //             <div className="grid gap-4 md:grid-cols-3">

// // // // // // // // // // //               {pillars.map((pillar, index) => (

// // // // // // // // // // //                 <a
// // // // // // // // // // //                   key={pillar.title}
// // // // // // // // // // //                   href={pillar.href}
// // // // // // // // // // //                   className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
// // // // // // // // // // //                 >

// // // // // // // // // // //                   <span className="text-sm font-bold text-[#0869bd]">
// // // // // // // // // // //                     0{index + 1}
// // // // // // // // // // //                   </span>

// // // // // // // // // // //                   <h3 className="mt-5 text-lg font-bold text-slate-900">
// // // // // // // // // // //                     {pillar.title}
// // // // // // // // // // //                   </h3>

// // // // // // // // // // //                   <p className="mt-3 text-sm leading-6 text-slate-600">
// // // // // // // // // // //                     {pillar.text}
// // // // // // // // // // //                   </p>

// // // // // // // // // // //                   <span className="mt-5 inline-flex text-sm font-semibold text-[#0869bd]">
// // // // // // // // // // //                     Explore
// // // // // // // // // // //                     <span className="ml-2 transition-transform group-hover:translate-x-1">
// // // // // // // // // // //                       →
// // // // // // // // // // //                     </span>
// // // // // // // // // // //                   </span>

// // // // // // // // // // //                 </a>

// // // // // // // // // // //               ))}

// // // // // // // // // // //             </div>

// // // // // // // // // // //           </div>

// // // // // // // // // // //         </div>

// // // // // // // // // // //       </section>


// // // // // // // // // // //       {/* =====================================================
// // // // // // // // // // //           ALL ARTICLES
// // // // // // // // // // //       ===================================================== */}

// // // // // // // // // // //       <section
// // // // // // // // // // //         id="articles"
// // // // // // // // // // //         className="py-20"
// // // // // // // // // // //       >

// // // // // // // // // // //         <div className="mx-auto max-w-7xl px-6">

// // // // // // // // // // //           <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

// // // // // // // // // // //             <div>

// // // // // // // // // // //               <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0869bd]">
// // // // // // // // // // //                 Latest Insights
// // // // // // // // // // //               </p>

// // // // // // // // // // //               <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
// // // // // // // // // // //                 Explore the Knowledge Library
// // // // // // // // // // //               </h2>

// // // // // // // // // // //             </div>


// // // // // // // // // // //             <p className="max-w-md text-sm leading-6 text-slate-500">
// // // // // // // // // // //               Practical articles covering aquaculture challenges,
// // // // // // // // // // //               water quality, shrimp performance and farm-management
// // // // // // // // // // //               decision making.
// // // // // // // // // // //             </p>

// // // // // // // // // // //           </div>


// // // // // // // // // // //           {/* ARTICLE GRID */}

// // // // // // // // // // //           <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-12">

// // // // // // // // // // //             {otherBlogs.map((blog, index) => {

// // // // // // // // // // //               const largeCard = index === 0 || index % 5 === 0;

// // // // // // // // // // //               return (

// // // // // // // // // // //                 <article
// // // // // // // // // // //                   key={blog.id}
// // // // // // // // // // //                   className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
// // // // // // // // // // //                     largeCard
// // // // // // // // // // //                       ? "lg:col-span-8"
// // // // // // // // // // //                       : "lg:col-span-4"
// // // // // // // // // // //                   }`}
// // // // // // // // // // //                 >

// // // // // // // // // // //                   <Link href={`/blog/${blog.slug}`}>

// // // // // // // // // // //                     <div
// // // // // // // // // // //                       className={`relative overflow-hidden ${
// // // // // // // // // // //                         largeCard
// // // // // // // // // // //                           ? "h-72"
// // // // // // // // // // //                           : "h-56"
// // // // // // // // // // //                       }`}
// // // // // // // // // // //                     >

// // // // // // // // // // //                       <Image
// // // // // // // // // // //                         src={blog.image}
// // // // // // // // // // //                         alt={blog.title}
// // // // // // // // // // //                         fill
// // // // // // // // // // //                         sizes={
// // // // // // // // // // //                           largeCard
// // // // // // // // // // //                             ? "(max-width: 1024px) 100vw, 65vw"
// // // // // // // // // // //                             : "(max-width: 1024px) 100vw, 35vw"
// // // // // // // // // // //                         }
// // // // // // // // // // //                         className="object-cover transition duration-700 group-hover:scale-105"
// // // // // // // // // // //                       />

// // // // // // // // // // //                     </div>


// // // // // // // // // // //                     <div className="p-6">

// // // // // // // // // // //                       <div className="flex items-center justify-between">

// // // // // // // // // // //                         <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0869bd]">
// // // // // // // // // // //                           {blog.category}
// // // // // // // // // // //                         </span>

// // // // // // // // // // //                         <span className="text-xs text-slate-400">
// // // // // // // // // // //                           {blog.readTime}
// // // // // // // // // // //                         </span>

// // // // // // // // // // //                       </div>


// // // // // // // // // // //                       <h3
// // // // // // // // // // //                         className={`mt-4 font-bold leading-snug text-slate-900 transition group-hover:text-[#0869bd] ${
// // // // // // // // // // //                           largeCard
// // // // // // // // // // //                             ? "text-2xl"
// // // // // // // // // // //                             : "text-xl"
// // // // // // // // // // //                         }`}
// // // // // // // // // // //                       >
// // // // // // // // // // //                         {blog.title}
// // // // // // // // // // //                       </h3>


// // // // // // // // // // //                       <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
// // // // // // // // // // //                         {blog.description}
// // // // // // // // // // //                       </p>


// // // // // // // // // // //                       <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

// // // // // // // // // // //                         <span className="text-xs text-slate-400">
// // // // // // // // // // //                           {blog.date}
// // // // // // // // // // //                         </span>

// // // // // // // // // // //                         <span className="font-semibold text-[#0869bd]">
// // // // // // // // // // //                           →
// // // // // // // // // // //                         </span>

// // // // // // // // // // //                       </div>

// // // // // // // // // // //                     </div>

// // // // // // // // // // //                   </Link>

// // // // // // // // // // //                 </article>

// // // // // // // // // // //               );
// // // // // // // // // // //             })}

// // // // // // // // // // //           </div>

// // // // // // // // // // //         </div>

// // // // // // // // // // //       </section>


// // // // // // // // // // //       {/* =====================================================
// // // // // // // // // // //           CTA
// // // // // // // // // // //       ===================================================== */}

// // // // // // // // // // //       <section className="px-6 pb-20">

// // // // // // // // // // //         <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#052f5f]">

// // // // // // // // // // //           <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

// // // // // // // // // // //             <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">

// // // // // // // // // // //               <div className="flex items-center gap-3">

// // // // // // // // // // //                 <div className="relative h-10 w-10">

// // // // // // // // // // //                   <Image
// // // // // // // // // // //                     src="/images/brand/innovare-logo.png"
// // // // // // // // // // //                     alt="Innovare Biopharma"
// // // // // // // // // // //                     fill
// // // // // // // // // // //                     sizes="40px"
// // // // // // // // // // //                     className="object-contain"
// // // // // // // // // // //                   />

// // // // // // // // // // //                 </div>

// // // // // // // // // // //                 <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
// // // // // // // // // // //                   Innovare Biopharma
// // // // // // // // // // //                 </p>

// // // // // // // // // // //               </div>


// // // // // // // // // // //               <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight text-white md:text-4xl">
// // // // // // // // // // //                 Turn knowledge into better
// // // // // // // // // // //                 aquaculture decisions.
// // // // // // // // // // //               </h2>


// // // // // // // // // // //               <p className="mt-5 max-w-xl leading-7 text-blue-100">
// // // // // // // // // // //                 Explore solutions designed to support water quality,
// // // // // // // // // // //                 shrimp health, nutrition and modern pond-management
// // // // // // // // // // //                 programs.
// // // // // // // // // // //               </p>


// // // // // // // // // // //               <div className="mt-8 flex flex-wrap gap-4">

// // // // // // // // // // //                 <Link
// // // // // // // // // // //                   href="/products"
// // // // // // // // // // //                   className="inline-flex rounded-full bg-white px-6 py-3 font-semibold text-[#052f5f] transition hover:bg-blue-50"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Explore Products →
// // // // // // // // // // //                 </Link>

// // // // // // // // // // //                 <Link
// // // // // // // // // // //                   href="/contact"
// // // // // // // // // // //                   className="inline-flex rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Contact Innovare
// // // // // // // // // // //                 </Link>

// // // // // // // // // // //               </div>

// // // // // // // // // // //             </div>


// // // // // // // // // // //             <div className="relative min-h-[360px]">

// // // // // // // // // // //               <Image
// // // // // // // // // // //                 src="/images/blog/preventive-water-management.webp"
// // // // // // // // // // //                 alt="Commercial aquaculture pond at sunset"
// // // // // // // // // // //                 fill
// // // // // // // // // // //                 sizes="(max-width: 1024px) 100vw, 40vw"
// // // // // // // // // // //                 className="object-cover"
// // // // // // // // // // //               />

// // // // // // // // // // //               <div className="absolute inset-0 bg-gradient-to-r from-[#052f5f] via-[#052f5f]/35 to-transparent lg:block" />

// // // // // // // // // // //             </div>

// // // // // // // // // // //           </div>

// // // // // // // // // // //         </div>

// // // // // // // // // // //       </section>

// // // // // // // // // // //     </main>
// // // // // // // // // // //   );
// // // // // // // // // // // }
// // // // // // // // // // import Image from "next/image";
// // // // // // // // // // import Link from "next/link";

// // // // // // // // // // import { blogs } from "@/data/blogs";

// // // // // // // // // // const categories = [
// // // // // // // // // //   "All Articles",
// // // // // // // // // //   "Water Quality",
// // // // // // // // // //   "Shrimp Health",
// // // // // // // // // //   "Nutrition",
// // // // // // // // // //   "Probiotics",
// // // // // // // // // //   "Pond Management",
// // // // // // // // // // ];

// // // // // // // // // // export default function BlogPage() {
// // // // // // // // // //   const featuredBlog =
// // // // // // // // // //     blogs.find((blog) => blog.featured) ?? blogs[0];

// // // // // // // // // //   const otherBlogs = blogs.filter(
// // // // // // // // // //     (blog) => blog.slug !== featuredBlog?.slug
// // // // // // // // // //   );

// // // // // // // // // //   return (
// // // // // // // // // //     <main className="min-h-screen overflow-hidden bg-white text-[#111827]">

// // // // // // // // // //       {/* =========================================================
// // // // // // // // // //           EDITORIAL HERO
// // // // // // // // // //       ========================================================= */}

// // // // // // // // // //       <section className="relative overflow-hidden bg-[#1267d6]">

// // // // // // // // // //         {/* Decorative background geometry */}

// // // // // // // // // //         <div
// // // // // // // // // //           aria-hidden="true"
// // // // // // // // // //           className="
// // // // // // // // // //             pointer-events-none
// // // // // // // // // //             absolute
// // // // // // // // // //             -left-[210px]
// // // // // // // // // //             -top-[310px]
// // // // // // // // // //             h-[620px]
// // // // // // // // // //             w-[620px]
// // // // // // // // // //             rounded-full
// // // // // // // // // //             border
// // // // // // // // // //             border-white/20
// // // // // // // // // //           "
// // // // // // // // // //         />

// // // // // // // // // //         <div
// // // // // // // // // //           aria-hidden="true"
// // // // // // // // // //           className="
// // // // // // // // // //             pointer-events-none
// // // // // // // // // //             absolute
// // // // // // // // // //             -left-[90px]
// // // // // // // // // //             -top-[360px]
// // // // // // // // // //             h-[690px]
// // // // // // // // // //             w-[690px]
// // // // // // // // // //             rounded-full
// // // // // // // // // //             border
// // // // // // // // // //             border-white/10
// // // // // // // // // //           "
// // // // // // // // // //         />

// // // // // // // // // //         <div
// // // // // // // // // //           aria-hidden="true"
// // // // // // // // // //           className="
// // // // // // // // // //             pointer-events-none
// // // // // // // // // //             absolute
// // // // // // // // // //             -right-[260px]
// // // // // // // // // //             -top-[330px]
// // // // // // // // // //             h-[700px]
// // // // // // // // // //             w-[700px]
// // // // // // // // // //             rounded-full
// // // // // // // // // //             border
// // // // // // // // // //             border-white/20
// // // // // // // // // //           "
// // // // // // // // // //         />

// // // // // // // // // //         <div
// // // // // // // // // //           aria-hidden="true"
// // // // // // // // // //           className="
// // // // // // // // // //             pointer-events-none
// // // // // // // // // //             absolute
// // // // // // // // // //             -right-[90px]
// // // // // // // // // //             -top-[430px]
// // // // // // // // // //             h-[780px]
// // // // // // // // // //             w-[780px]
// // // // // // // // // //             rounded-full
// // // // // // // // // //             border
// // // // // // // // // //             border-white/10
// // // // // // // // // //           "
// // // // // // // // // //         />


// // // // // // // // // //         {/* Subtle wave shape */}

// // // // // // // // // //         <div
// // // // // // // // // //           aria-hidden="true"
// // // // // // // // // //           className="
// // // // // // // // // //             pointer-events-none
// // // // // // // // // //             absolute
// // // // // // // // // //             bottom-[-120px]
// // // // // // // // // //             left-[-5%]
// // // // // // // // // //             h-[220px]
// // // // // // // // // //             w-[110%]
// // // // // // // // // //             rotate-[-2deg]
// // // // // // // // // //             rounded-[50%]
// // // // // // // // // //             bg-white/5
// // // // // // // // // //           "
// // // // // // // // // //         />


// // // // // // // // // //         {/* HERO CONTENT */}

// // // // // // // // // //         <div
// // // // // // // // // //           className="
// // // // // // // // // //             relative
// // // // // // // // // //             z-10
// // // // // // // // // //             mx-auto
// // // // // // // // // //             grid
// // // // // // // // // //             max-w-7xl
// // // // // // // // // //             gap-12
// // // // // // // // // //             px-5
// // // // // // // // // //             py-16
// // // // // // // // // //             sm:px-6
// // // // // // // // // //             sm:py-20
// // // // // // // // // //             md:px-8
// // // // // // // // // //             lg:min-h-[560px]
// // // // // // // // // //             lg:grid-cols-[1.25fr_0.75fr]
// // // // // // // // // //             lg:items-center
// // // // // // // // // //             lg:gap-20
// // // // // // // // // //             lg:px-10
// // // // // // // // // //             lg:py-24
// // // // // // // // // //           "
// // // // // // // // // //         >

// // // // // // // // // //           {/* LEFT */}

// // // // // // // // // //           <div className="min-w-0">

// // // // // // // // // //             <div className="flex items-center gap-3">

// // // // // // // // // //               <div className="relative h-11 w-11 shrink-0">

// // // // // // // // // //                 <Image
// // // // // // // // // //                   src="/images/brand/innovare-logo.png"
// // // // // // // // // //                   alt="Innovare Biopharma"
// // // // // // // // // //                   fill
// // // // // // // // // //                   priority
// // // // // // // // // //                   sizes="44px"
// // // // // // // // // //                   className="object-contain"
// // // // // // // // // //                 />

// // // // // // // // // //               </div>


// // // // // // // // // //               <div className="min-w-0">

// // // // // // // // // //                 <p
// // // // // // // // // //                   className="
// // // // // // // // // //                     text-[11px]
// // // // // // // // // //                     font-bold
// // // // // // // // // //                     uppercase
// // // // // // // // // //                     tracking-[0.2em]
// // // // // // // // // //                     text-blue-100
// // // // // // // // // //                   "
// // // // // // // // // //                 >
// // // // // // // // // //                   Innovare Biopharma
// // // // // // // // // //                 </p>

// // // // // // // // // //                 <p className="mt-0.5 text-xs text-blue-200">
// // // // // // // // // //                   Aquaculture Knowledge Journal
// // // // // // // // // //                 </p>

// // // // // // // // // //               </div>

// // // // // // // // // //             </div>


// // // // // // // // // //             <p
// // // // // // // // // //               className="
// // // // // // // // // //                 mt-10
// // // // // // // // // //                 text-xs
// // // // // // // // // //                 font-semibold
// // // // // // // // // //                 uppercase
// // // // // // // // // //                 tracking-[0.14em]
// // // // // // // // // //                 text-white/85
// // // // // // // // // //               "
// // // // // // // // // //             >
// // // // // // // // // //               Insights
// // // // // // // // // //             </p>


// // // // // // // // // //             <h1
// // // // // // // // // //               className="
// // // // // // // // // //                 mt-4
// // // // // // // // // //                 max-w-[820px]
// // // // // // // // // //                 break-words
// // // // // // // // // //                 text-[clamp(2.5rem,6vw,5.5rem)]
// // // // // // // // // //                 font-medium
// // // // // // // // // //                 leading-[0.98]
// // // // // // // // // //                 tracking-[-0.045em]
// // // // // // // // // //                 text-white
// // // // // // // // // //               "
// // // // // // // // // //             >
// // // // // // // // // //               Aquaculture science,
// // // // // // // // // //               practical knowledge
// // // // // // // // // //               and farm insights.
// // // // // // // // // //             </h1>


// // // // // // // // // //             <p
// // // // // // // // // //               className="
// // // // // // // // // //                 mt-7
// // // // // // // // // //                 max-w-[650px]
// // // // // // // // // //                 text-[clamp(1rem,1.3vw,1.15rem)]
// // // // // // // // // //                 leading-8
// // // // // // // // // //                 text-blue-100
// // // // // // // // // //               "
// // // // // // // // // //             >
// // // // // // // // // //               Research-informed articles covering water quality,
// // // // // // // // // //               shrimp health, nutrition, probiotics and practical
// // // // // // // // // //               management for modern aquaculture businesses.
// // // // // // // // // //             </p>


// // // // // // // // // //             {/* NEWSLETTER FORM */}

// // // // // // // // // //             <form
// // // // // // // // // //               action="#"
// // // // // // // // // //               className="
// // // // // // // // // //                 mt-9
// // // // // // // // // //                 flex
// // // // // // // // // //                 w-full
// // // // // // // // // //                 max-w-[580px]
// // // // // // // // // //                 flex-col
// // // // // // // // // //                 gap-2
// // // // // // // // // //                 rounded-xl
// // // // // // // // // //                 bg-white
// // // // // // // // // //                 p-1.5
// // // // // // // // // //                 shadow-[0_15px_40px_rgba(7,45,92,0.15)]
// // // // // // // // // //                 sm:flex-row
// // // // // // // // // //               "
// // // // // // // // // //             >

// // // // // // // // // //               <label
// // // // // // // // // //                 htmlFor="blog-subscribe-email"
// // // // // // // // // //                 className="sr-only"
// // // // // // // // // //               >
// // // // // // // // // //                 Email address
// // // // // // // // // //               </label>


// // // // // // // // // //               <input
// // // // // // // // // //                 id="blog-subscribe-email"
// // // // // // // // // //                 type="email"
// // // // // // // // // //                 placeholder="Enter your email"
// // // // // // // // // //                 className="
// // // // // // // // // //                   min-h-[50px]
// // // // // // // // // //                   min-w-0
// // // // // // // // // //                   flex-1
// // // // // // // // // //                   rounded-lg
// // // // // // // // // //                   border-0
// // // // // // // // // //                   bg-transparent
// // // // // // // // // //                   px-4
// // // // // // // // // //                   text-sm
// // // // // // // // // //                   text-slate-900
// // // // // // // // // //                   outline-none
// // // // // // // // // //                   placeholder:text-slate-400
// // // // // // // // // //                   focus:ring-0
// // // // // // // // // //                 "
// // // // // // // // // //               />


// // // // // // // // // //               <button
// // // // // // // // // //                 type="submit"
// // // // // // // // // //                 className="
// // // // // // // // // //                   min-h-[50px]
// // // // // // // // // //                   shrink-0
// // // // // // // // // //                   rounded-lg
// // // // // // // // // //                   bg-[#0b5ec9]
// // // // // // // // // //                   px-7
// // // // // // // // // //                   text-sm
// // // // // // // // // //                   font-semibold
// // // // // // // // // //                   text-white
// // // // // // // // // //                   transition
// // // // // // // // // //                   hover:bg-[#084fae]
// // // // // // // // // //                   focus:outline-none
// // // // // // // // // //                   focus:ring-2
// // // // // // // // // //                   focus:ring-blue-300
// // // // // // // // // //                   focus:ring-offset-2
// // // // // // // // // //                 "
// // // // // // // // // //               >
// // // // // // // // // //                 Subscribe
// // // // // // // // // //               </button>

// // // // // // // // // //             </form>

// // // // // // // // // //           </div>


// // // // // // // // // //           {/* RIGHT */}

// // // // // // // // // //           <div
// // // // // // // // // //             className="
// // // // // // // // // //               max-w-[460px]
// // // // // // // // // //               lg:justify-self-end
// // // // // // // // // //             "
// // // // // // // // // //           >

// // // // // // // // // //             <p
// // // // // // // // // //               className="
// // // // // // // // // //                 text-[clamp(1rem,1.5vw,1.25rem)]
// // // // // // // // // //                 leading-8
// // // // // // // // // //                 text-white
// // // // // // // // // //               "
// // // // // // // // // //             >
// // // // // // // // // //               Receive new technical articles, water-quality guidance
// // // // // // // // // //               and practical aquaculture updates from Innovare.
// // // // // // // // // //             </p>


// // // // // // // // // //             <div className="mt-8 h-px w-full bg-white/20" />


// // // // // // // // // //             <div className="mt-7 grid grid-cols-2 gap-6">

// // // // // // // // // //               <div>

// // // // // // // // // //                 <p className="text-2xl font-semibold text-white">
// // // // // // // // // //                   Science
// // // // // // // // // //                 </p>

// // // // // // // // // //                 <p className="mt-1 text-xs leading-5 text-blue-100">
// // // // // // // // // //                   Clear explanations of important aquaculture concepts.
// // // // // // // // // //                 </p>

// // // // // // // // // //               </div>


// // // // // // // // // //               <div>

// // // // // // // // // //                 <p className="text-2xl font-semibold text-white">
// // // // // // // // // //                   Practice
// // // // // // // // // //                 </p>

// // // // // // // // // //                 <p className="mt-1 text-xs leading-5 text-blue-100">
// // // // // // // // // //                   Useful management knowledge for real farm decisions.
// // // // // // // // // //                 </p>

// // // // // // // // // //               </div>

// // // // // // // // // //             </div>

// // // // // // // // // //           </div>

// // // // // // // // // //         </div>

// // // // // // // // // //       </section>


// // // // // // // // // //       {/* =========================================================
// // // // // // // // // //           JOURNAL INTRO
// // // // // // // // // //       ========================================================= */}

// // // // // // // // // //       <section
// // // // // // // // // //         id="articles"
// // // // // // // // // //         className="
// // // // // // // // // //           mx-auto
// // // // // // // // // //           max-w-7xl
// // // // // // // // // //           px-5
// // // // // // // // // //           pb-12
// // // // // // // // // //           pt-16
// // // // // // // // // //           sm:px-6
// // // // // // // // // //           md:px-8
// // // // // // // // // //           lg:px-10
// // // // // // // // // //           lg:pb-16
// // // // // // // // // //           lg:pt-24
// // // // // // // // // //         "
// // // // // // // // // //       >

// // // // // // // // // //         <div
// // // // // // // // // //           className="
// // // // // // // // // //             grid
// // // // // // // // // //             gap-8
// // // // // // // // // //             lg:grid-cols-[1fr_0.7fr]
// // // // // // // // // //             lg:items-end
// // // // // // // // // //           "
// // // // // // // // // //         >

// // // // // // // // // //           <div>

// // // // // // // // // //             <p
// // // // // // // // // //               className="
// // // // // // // // // //                 text-xs
// // // // // // // // // //                 font-semibold
// // // // // // // // // //                 uppercase
// // // // // // // // // //                 tracking-[0.18em]
// // // // // // // // // //                 text-[#1267d6]
// // // // // // // // // //               "
// // // // // // // // // //             >
// // // // // // // // // //               The Innovare Journal
// // // // // // // // // //             </p>


// // // // // // // // // //             <h2
// // // // // // // // // //               className="
// // // // // // // // // //                 mt-4
// // // // // // // // // //                 max-w-[760px]
// // // // // // // // // //                 text-[clamp(2rem,4vw,4.25rem)]
// // // // // // // // // //                 font-medium
// // // // // // // // // //                 leading-[1.02]
// // // // // // // // // //                 tracking-[-0.04em]
// // // // // // // // // //                 text-slate-950
// // // // // // // // // //               "
// // // // // // // // // //             >
// // // // // // // // // //               Knowledge for healthier,
// // // // // // // // // //               more productive aquaculture.
// // // // // // // // // //             </h2>

// // // // // // // // // //           </div>


// // // // // // // // // //           <p
// // // // // // // // // //             className="
// // // // // // // // // //               max-w-xl
// // // // // // // // // //               text-[15px]
// // // // // // // // // //               leading-7
// // // // // // // // // //               text-slate-600
// // // // // // // // // //             "
// // // // // // // // // //           >
// // // // // // // // // //             Browse technical perspectives and practical articles
// // // // // // // // // //             designed for aquaculture farmers, technicians,
// // // // // // // // // //             distributors and businesses.
// // // // // // // // // //           </p>

// // // // // // // // // //         </div>


// // // // // // // // // //         {/* FILTER PILLS */}

// // // // // // // // // //         <div
// // // // // // // // // //           className="
// // // // // // // // // //             mt-10
// // // // // // // // // //             flex
// // // // // // // // // //             gap-2
// // // // // // // // // //             overflow-x-auto
// // // // // // // // // //             pb-2
// // // // // // // // // //             sm:flex-wrap
// // // // // // // // // //           "
// // // // // // // // // //         >

// // // // // // // // // //           {categories.map((category, index) => (

// // // // // // // // // //             <button
// // // // // // // // // //               key={category}
// // // // // // // // // //               type="button"
// // // // // // // // // //               className={`
// // // // // // // // // //                 min-h-[38px]
// // // // // // // // // //                 shrink-0
// // // // // // // // // //                 rounded-full
// // // // // // // // // //                 border
// // // // // // // // // //                 px-4
// // // // // // // // // //                 text-xs
// // // // // // // // // //                 font-medium
// // // // // // // // // //                 transition
// // // // // // // // // //                 ${
// // // // // // // // // //                   index === 0
// // // // // // // // // //                     ? "border-[#1267d6] bg-[#1267d6] text-white"
// // // // // // // // // //                     : "border-slate-300 bg-white text-slate-700 hover:border-[#1267d6] hover:text-[#1267d6]"
// // // // // // // // // //                 }
// // // // // // // // // //               `}
// // // // // // // // // //             >
// // // // // // // // // //               {category}
// // // // // // // // // //             </button>

// // // // // // // // // //           ))}

// // // // // // // // // //         </div>

// // // // // // // // // //       </section>


// // // // // // // // // //       {/* =========================================================
// // // // // // // // // //           FEATURED ARTICLE
// // // // // // // // // //       ========================================================= */}

// // // // // // // // // //       {featuredBlog && (

// // // // // // // // // //         <section
// // // // // // // // // //           className="
// // // // // // // // // //             mx-auto
// // // // // // // // // //             max-w-7xl
// // // // // // // // // //             px-5
// // // // // // // // // //             pb-20
// // // // // // // // // //             sm:px-6
// // // // // // // // // //             md:px-8
// // // // // // // // // //             lg:px-10
// // // // // // // // // //           "
// // // // // // // // // //         >

// // // // // // // // // //           <Link
// // // // // // // // // //             href={`/blog/${featuredBlog.slug}`}
// // // // // // // // // //             className="group block"
// // // // // // // // // //           >

// // // // // // // // // //             <article
// // // // // // // // // //               className="
// // // // // // // // // //                 grid
// // // // // // // // // //                 gap-7
// // // // // // // // // //                 border-y
// // // // // // // // // //                 border-slate-200
// // // // // // // // // //                 py-8
// // // // // // // // // //                 lg:grid-cols-[1.15fr_0.85fr]
// // // // // // // // // //                 lg:gap-12
// // // // // // // // // //                 lg:py-10
// // // // // // // // // //               "
// // // // // // // // // //             >

// // // // // // // // // //               <div
// // // // // // // // // //                 className="
// // // // // // // // // //                   relative
// // // // // // // // // //                   aspect-[16/10]
// // // // // // // // // //                   overflow-hidden
// // // // // // // // // //                   bg-slate-100
// // // // // // // // // //                 "
// // // // // // // // // //               >

// // // // // // // // // //                 <Image
// // // // // // // // // //                   src={featuredBlog.image}
// // // // // // // // // //                   alt={featuredBlog.title}
// // // // // // // // // //                   fill
// // // // // // // // // //                   priority
// // // // // // // // // //                   sizes="
// // // // // // // // // //                     (max-width: 1024px) 100vw,
// // // // // // // // // //                     60vw
// // // // // // // // // //                   "
// // // // // // // // // //                   className="
// // // // // // // // // //                     object-cover
// // // // // // // // // //                     transition-transform
// // // // // // // // // //                     duration-700
// // // // // // // // // //                     group-hover:scale-[1.025]
// // // // // // // // // //                   "
// // // // // // // // // //                 />

// // // // // // // // // //               </div>


// // // // // // // // // //               <div
// // // // // // // // // //                 className="
// // // // // // // // // //                   flex
// // // // // // // // // //                   min-w-0
// // // // // // // // // //                   flex-col
// // // // // // // // // //                   justify-center
// // // // // // // // // //                 "
// // // // // // // // // //               >

// // // // // // // // // //                 <div
// // // // // // // // // //                   className="
// // // // // // // // // //                     flex
// // // // // // // // // //                     flex-wrap
// // // // // // // // // //                     items-center
// // // // // // // // // //                     gap-2
// // // // // // // // // //                     text-xs
// // // // // // // // // //                     text-slate-500
// // // // // // // // // //                   "
// // // // // // // // // //                 >

// // // // // // // // // //                   <span className="font-medium text-slate-700">
// // // // // // // // // //                     Innovare Technical Team
// // // // // // // // // //                   </span>

// // // // // // // // // //                   <span>•</span>

// // // // // // // // // //                   <span>{featuredBlog.date}</span>

// // // // // // // // // //                 </div>


// // // // // // // // // //                 <h2
// // // // // // // // // //                   className="
// // // // // // // // // //                     mt-4
// // // // // // // // // //                     break-words
// // // // // // // // // //                     text-[clamp(2rem,3.5vw,3.6rem)]
// // // // // // // // // //                     font-medium
// // // // // // // // // //                     leading-[1.04]
// // // // // // // // // //                     tracking-[-0.035em]
// // // // // // // // // //                     text-slate-950
// // // // // // // // // //                     transition
// // // // // // // // // //                     group-hover:text-[#1267d6]
// // // // // // // // // //                   "
// // // // // // // // // //                 >
// // // // // // // // // //                   {featuredBlog.title}
// // // // // // // // // //                 </h2>


// // // // // // // // // //                 <p
// // // // // // // // // //                   className="
// // // // // // // // // //                     mt-5
// // // // // // // // // //                     max-w-xl
// // // // // // // // // //                     text-[15px]
// // // // // // // // // //                     leading-7
// // // // // // // // // //                     text-slate-600
// // // // // // // // // //                   "
// // // // // // // // // //                 >
// // // // // // // // // //                   {featuredBlog.description}
// // // // // // // // // //                 </p>


// // // // // // // // // //                 <div className="mt-6 flex flex-wrap gap-2">

// // // // // // // // // //                   <span
// // // // // // // // // //                     className="
// // // // // // // // // //                       rounded-full
// // // // // // // // // //                       border
// // // // // // // // // //                       border-slate-400
// // // // // // // // // //                       px-3
// // // // // // // // // //                       py-1
// // // // // // // // // //                       text-[11px]
// // // // // // // // // //                       text-slate-600
// // // // // // // // // //                     "
// // // // // // // // // //                   >
// // // // // // // // // //                     {featuredBlog.category}
// // // // // // // // // //                   </span>

// // // // // // // // // //                   <span
// // // // // // // // // //                     className="
// // // // // // // // // //                       rounded-full
// // // // // // // // // //                       border
// // // // // // // // // //                       border-slate-400
// // // // // // // // // //                       px-3
// // // // // // // // // //                       py-1
// // // // // // // // // //                       text-[11px]
// // // // // // // // // //                       text-slate-600
// // // // // // // // // //                     "
// // // // // // // // // //                   >
// // // // // // // // // //                     {featuredBlog.readTime}
// // // // // // // // // //                   </span>

// // // // // // // // // //                   <span
// // // // // // // // // //                     className="
// // // // // // // // // //                       rounded-full
// // // // // // // // // //                       border
// // // // // // // // // //                       border-slate-400
// // // // // // // // // //                       px-3
// // // // // // // // // //                       py-1
// // // // // // // // // //                       text-[11px]
// // // // // // // // // //                       text-slate-600
// // // // // // // // // //                     "
// // // // // // // // // //                   >
// // // // // // // // // //                     Aquaculture
// // // // // // // // // //                   </span>

// // // // // // // // // //                 </div>


// // // // // // // // // //                 <span
// // // // // // // // // //                   className="
// // // // // // // // // //                     mt-8
// // // // // // // // // //                     inline-flex
// // // // // // // // // //                     items-center
// // // // // // // // // //                     text-sm
// // // // // // // // // //                     font-semibold
// // // // // // // // // //                     text-[#1267d6]
// // // // // // // // // //                   "
// // // // // // // // // //                 >
// // // // // // // // // //                   Read full article

// // // // // // // // // //                   <span
// // // // // // // // // //                     className="
// // // // // // // // // //                       ml-2
// // // // // // // // // //                       transition-transform
// // // // // // // // // //                       group-hover:translate-x-1
// // // // // // // // // //                     "
// // // // // // // // // //                   >
// // // // // // // // // //                     →
// // // // // // // // // //                   </span>

// // // // // // // // // //                 </span>

// // // // // // // // // //               </div>

// // // // // // // // // //             </article>

// // // // // // // // // //           </Link>

// // // // // // // // // //         </section>

// // // // // // // // // //       )}


// // // // // // // // // //       {/* =========================================================
// // // // // // // // // //           BLOG GRID
// // // // // // // // // //       ========================================================= */}

// // // // // // // // // //       <section
// // // // // // // // // //         className="
// // // // // // // // // //           mx-auto
// // // // // // // // // //           max-w-7xl
// // // // // // // // // //           px-5
// // // // // // // // // //           pb-20
// // // // // // // // // //           sm:px-6
// // // // // // // // // //           md:px-8
// // // // // // // // // //           lg:px-10
// // // // // // // // // //         "
// // // // // // // // // //       >

// // // // // // // // // //         <div
// // // // // // // // // //           className="
// // // // // // // // // //             grid
// // // // // // // // // //             gap-x-8
// // // // // // // // // //             gap-y-14
// // // // // // // // // //             md:grid-cols-2
// // // // // // // // // //             lg:grid-cols-3
// // // // // // // // // //           "
// // // // // // // // // //         >

// // // // // // // // // //           {otherBlogs.map((blog) => (

// // // // // // // // // //             <Link
// // // // // // // // // //               key={blog.id}
// // // // // // // // // //               href={`/blog/${blog.slug}`}
// // // // // // // // // //               className="group min-w-0"
// // // // // // // // // //             >

// // // // // // // // // //               <article className="min-w-0">

// // // // // // // // // //                 <div
// // // // // // // // // //                   className="
// // // // // // // // // //                     relative
// // // // // // // // // //                     aspect-[4/3]
// // // // // // // // // //                     overflow-hidden
// // // // // // // // // //                     bg-slate-100
// // // // // // // // // //                   "
// // // // // // // // // //                 >

// // // // // // // // // //                   <Image
// // // // // // // // // //                     src={blog.image}
// // // // // // // // // //                     alt={blog.title}
// // // // // // // // // //                     fill
// // // // // // // // // //                     sizes="
// // // // // // // // // //                       (max-width: 768px) 100vw,
// // // // // // // // // //                       (max-width: 1024px) 50vw,
// // // // // // // // // //                       33vw
// // // // // // // // // //                     "
// // // // // // // // // //                     className="
// // // // // // // // // //                       object-cover
// // // // // // // // // //                       transition-transform
// // // // // // // // // //                       duration-700
// // // // // // // // // //                       group-hover:scale-[1.03]
// // // // // // // // // //                     "
// // // // // // // // // //                   />

// // // // // // // // // //                 </div>


// // // // // // // // // //                 <div
// // // // // // // // // //                   className="
// // // // // // // // // //                     mt-5
// // // // // // // // // //                     flex
// // // // // // // // // //                     flex-wrap
// // // // // // // // // //                     items-center
// // // // // // // // // //                     gap-2
// // // // // // // // // //                     text-[11px]
// // // // // // // // // //                     text-slate-500
// // // // // // // // // //                   "
// // // // // // // // // //                 >

// // // // // // // // // //                   <span className="font-medium text-slate-700">
// // // // // // // // // //                     Innovare Technical Team
// // // // // // // // // //                   </span>

// // // // // // // // // //                   <span>•</span>

// // // // // // // // // //                   <span>{blog.date}</span>

// // // // // // // // // //                 </div>


// // // // // // // // // //                 <h3
// // // // // // // // // //                   className="
// // // // // // // // // //                     mt-3
// // // // // // // // // //                     break-words
// // // // // // // // // //                     text-[clamp(1.35rem,1.7vw,1.75rem)]
// // // // // // // // // //                     font-medium
// // // // // // // // // //                     leading-[1.12]
// // // // // // // // // //                     tracking-[-0.025em]
// // // // // // // // // //                     text-slate-950
// // // // // // // // // //                     transition-colors
// // // // // // // // // //                     group-hover:text-[#1267d6]
// // // // // // // // // //                   "
// // // // // // // // // //                 >
// // // // // // // // // //                   {blog.title}
// // // // // // // // // //                 </h3>


// // // // // // // // // //                 <p
// // // // // // // // // //                   className="
// // // // // // // // // //                     mt-3
// // // // // // // // // //                     line-clamp-3
// // // // // // // // // //                     break-words
// // // // // // // // // //                     text-sm
// // // // // // // // // //                     leading-6
// // // // // // // // // //                     text-slate-600
// // // // // // // // // //                   "
// // // // // // // // // //                 >
// // // // // // // // // //                   {blog.description}
// // // // // // // // // //                 </p>


// // // // // // // // // //                 <div className="mt-5 flex flex-wrap gap-2">

// // // // // // // // // //                   <span
// // // // // // // // // //                     className="
// // // // // // // // // //                       rounded-full
// // // // // // // // // //                       border
// // // // // // // // // //                       border-slate-400
// // // // // // // // // //                       px-3
// // // // // // // // // //                       py-1
// // // // // // // // // //                       text-[10px]
// // // // // // // // // //                       text-slate-600
// // // // // // // // // //                     "
// // // // // // // // // //                   >
// // // // // // // // // //                     {blog.category}
// // // // // // // // // //                   </span>


// // // // // // // // // //                   <span
// // // // // // // // // //                     className="
// // // // // // // // // //                       rounded-full
// // // // // // // // // //                       border
// // // // // // // // // //                       border-slate-400
// // // // // // // // // //                       px-3
// // // // // // // // // //                       py-1
// // // // // // // // // //                       text-[10px]
// // // // // // // // // //                       text-slate-600
// // // // // // // // // //                     "
// // // // // // // // // //                   >
// // // // // // // // // //                     {blog.readTime}
// // // // // // // // // //                   </span>

// // // // // // // // // //                 </div>

// // // // // // // // // //               </article>

// // // // // // // // // //             </Link>

// // // // // // // // // //           ))}

// // // // // // // // // //         </div>

// // // // // // // // // //       </section>


// // // // // // // // // //       {/* =========================================================
// // // // // // // // // //           PAGINATION
// // // // // // // // // //       ========================================================= */}

// // // // // // // // // //       <section
// // // // // // // // // //         className="
// // // // // // // // // //           mx-auto
// // // // // // // // // //           max-w-7xl
// // // // // // // // // //           px-5
// // // // // // // // // //           pb-20
// // // // // // // // // //           sm:px-6
// // // // // // // // // //           md:px-8
// // // // // // // // // //           lg:px-10
// // // // // // // // // //         "
// // // // // // // // // //       >

// // // // // // // // // //         <div
// // // // // // // // // //           className="
// // // // // // // // // //             grid
// // // // // // // // // //             grid-cols-[1fr_auto_1fr]
// // // // // // // // // //             items-center
// // // // // // // // // //             border-t
// // // // // // // // // //             border-slate-200
// // // // // // // // // //             pt-6
// // // // // // // // // //           "
// // // // // // // // // //         >

// // // // // // // // // //           <button
// // // // // // // // // //             type="button"
// // // // // // // // // //             disabled
// // // // // // // // // //             className="
// // // // // // // // // //               justify-self-start
// // // // // // // // // //               rounded-lg
// // // // // // // // // //               border
// // // // // // // // // //               border-slate-200
// // // // // // // // // //               px-4
// // // // // // // // // //               py-2.5
// // // // // // // // // //               text-sm
// // // // // // // // // //               text-slate-400
// // // // // // // // // //             "
// // // // // // // // // //           >
// // // // // // // // // //             ← Previous
// // // // // // // // // //           </button>


// // // // // // // // // //           <span
// // // // // // // // // //             className="
// // // // // // // // // //               px-3
// // // // // // // // // //               text-center
// // // // // // // // // //               text-xs
// // // // // // // // // //               text-slate-500
// // // // // // // // // //               sm:text-sm
// // // // // // // // // //             "
// // // // // // // // // //           >
// // // // // // // // // //             Page 1
// // // // // // // // // //           </span>


// // // // // // // // // //           <button
// // // // // // // // // //             type="button"
// // // // // // // // // //             className="
// // // // // // // // // //               justify-self-end
// // // // // // // // // //               rounded-lg
// // // // // // // // // //               border
// // // // // // // // // //               border-slate-300
// // // // // // // // // //               px-4
// // // // // // // // // //               py-2.5
// // // // // // // // // //               text-sm
// // // // // // // // // //               font-medium
// // // // // // // // // //               text-slate-700
// // // // // // // // // //               transition
// // // // // // // // // //               hover:border-[#1267d6]
// // // // // // // // // //               hover:text-[#1267d6]
// // // // // // // // // //             "
// // // // // // // // // //           >
// // // // // // // // // //             Next →
// // // // // // // // // //           </button>

// // // // // // // // // //         </div>

// // // // // // // // // //       </section>


// // // // // // // // // //       {/* =========================================================
// // // // // // // // // //           LARGE CTA / JOURNAL FOOTER
// // // // // // // // // //       ========================================================= */}

// // // // // // // // // //       <section
// // // // // // // // // //         className="
// // // // // // // // // //           px-4
// // // // // // // // // //           pb-6
// // // // // // // // // //           sm:px-6
// // // // // // // // // //           md:px-8
// // // // // // // // // //         "
// // // // // // // // // //       >

// // // // // // // // // //         <div
// // // // // // // // // //           className="
// // // // // // // // // //             mx-auto
// // // // // // // // // //             max-w-[1320px]
// // // // // // // // // //             overflow-hidden
// // // // // // // // // //             rounded-[28px]
// // // // // // // // // //             bg-[#1267d6]
// // // // // // // // // //             px-6
// // // // // // // // // //             py-14
// // // // // // // // // //             text-white
// // // // // // // // // //             sm:px-10
// // // // // // // // // //             md:rounded-[34px]
// // // // // // // // // //             md:px-14
// // // // // // // // // //             md:py-16
// // // // // // // // // //             lg:px-20
// // // // // // // // // //             lg:py-20
// // // // // // // // // //           "
// // // // // // // // // //         >

// // // // // // // // // //           {/* CTA TOP */}

// // // // // // // // // //           <div
// // // // // // // // // //             className="
// // // // // // // // // //               mx-auto
// // // // // // // // // //               max-w-[760px]
// // // // // // // // // //               text-center
// // // // // // // // // //             "
// // // // // // // // // //           >

// // // // // // // // // //             <h2
// // // // // // // // // //               className="
// // // // // // // // // //                 text-[clamp(2rem,4vw,4rem)]
// // // // // // // // // //                 font-semibold
// // // // // // // // // //                 leading-[1.04]
// // // // // // // // // //                 tracking-[-0.035em]
// // // // // // // // // //               "
// // // // // // // // // //             >
// // // // // // // // // //               Build stronger aquaculture
// // // // // // // // // //               decisions with Innovare.
// // // // // // // // // //             </h2>


// // // // // // // // // //             <p
// // // // // // // // // //               className="
// // // // // // // // // //                 mx-auto
// // // // // // // // // //                 mt-5
// // // // // // // // // //                 max-w-xl
// // // // // // // // // //                 text-[15px]
// // // // // // // // // //                 leading-7
// // // // // // // // // //                 text-blue-100
// // // // // // // // // //               "
// // // // // // // // // //             >
// // // // // // // // // //               Explore products and technical support designed for
// // // // // // // // // //               water quality, shrimp health, nutrition and modern
// // // // // // // // // //               pond-management programs.
// // // // // // // // // //             </p>


// // // // // // // // // //             <div
// // // // // // // // // //               className="
// // // // // // // // // //                 mt-8
// // // // // // // // // //                 flex
// // // // // // // // // //                 flex-col
// // // // // // // // // //                 items-center
// // // // // // // // // //                 justify-center
// // // // // // // // // //                 gap-3
// // // // // // // // // //                 sm:flex-row
// // // // // // // // // //               "
// // // // // // // // // //             >

// // // // // // // // // //               <Link
// // // // // // // // // //                 href="/products"
// // // // // // // // // //                 className="
// // // // // // // // // //                   inline-flex
// // // // // // // // // //                   min-h-[48px]
// // // // // // // // // //                   items-center
// // // // // // // // // //                   justify-center
// // // // // // // // // //                   rounded-lg
// // // // // // // // // //                   border
// // // // // // // // // //                   border-white/50
// // // // // // // // // //                   px-6
// // // // // // // // // //                   text-sm
// // // // // // // // // //                   font-semibold
// // // // // // // // // //                   transition
// // // // // // // // // //                   hover:bg-white
// // // // // // // // // //                   hover:text-[#1267d6]
// // // // // // // // // //                 "
// // // // // // // // // //               >
// // // // // // // // // //                 Explore Products
// // // // // // // // // //               </Link>


// // // // // // // // // //               <Link
// // // // // // // // // //                 href="/contact"
// // // // // // // // // //                 className="
// // // // // // // // // //                   inline-flex
// // // // // // // // // //                   min-h-[48px]
// // // // // // // // // //                   items-center
// // // // // // // // // //                   justify-center
// // // // // // // // // //                   rounded-lg
// // // // // // // // // //                   border
// // // // // // // // // //                   border-white/50
// // // // // // // // // //                   px-6
// // // // // // // // // //                   text-sm
// // // // // // // // // //                   font-semibold
// // // // // // // // // //                   transition
// // // // // // // // // //                   hover:bg-white
// // // // // // // // // //                   hover:text-[#1267d6]
// // // // // // // // // //                 "
// // // // // // // // // //               >
// // // // // // // // // //                 Contact Innovare
// // // // // // // // // //               </Link>

// // // // // // // // // //             </div>

// // // // // // // // // //           </div>


// // // // // // // // // //           {/* DIVIDER */}

// // // // // // // // // //           <div className="my-12 h-px bg-white/20" />


// // // // // // // // // //           {/* FOOTER AREA */}

// // // // // // // // // //           <div
// // // // // // // // // //             className="
// // // // // // // // // //               grid
// // // // // // // // // //               gap-10
// // // // // // // // // //               md:grid-cols-[1.2fr_0.8fr]
// // // // // // // // // //               md:items-end
// // // // // // // // // //             "
// // // // // // // // // //           >

// // // // // // // // // //             <div>

// // // // // // // // // //               <div className="flex items-center gap-3">

// // // // // // // // // //                 <div className="relative h-11 w-11">

// // // // // // // // // //                   <Image
// // // // // // // // // //                     src="/images/brand/innovare-logo.png"
// // // // // // // // // //                     alt="Innovare Biopharma"
// // // // // // // // // //                     fill
// // // // // // // // // //                     sizes="44px"
// // // // // // // // // //                     className="object-contain"
// // // // // // // // // //                   />

// // // // // // // // // //                 </div>


// // // // // // // // // //                 <p className="font-semibold">
// // // // // // // // // //                   Innovare Biopharma LLP
// // // // // // // // // //                 </p>

// // // // // // // // // //               </div>


// // // // // // // // // //               <p
// // // // // // // // // //                 className="
// // // // // // // // // //                   mt-5
// // // // // // // // // //                   max-w-md
// // // // // // // // // //                   text-sm
// // // // // // // // // //                   leading-6
// // // // // // // // // //                   text-blue-100
// // // // // // // // // //                 "
// // // // // // // // // //               >
// // // // // // // // // //                 Science-informed aquaculture knowledge and solutions
// // // // // // // // // //                 for healthier ponds and better-informed farm management.
// // // // // // // // // //               </p>


// // // // // // // // // //               <nav
// // // // // // // // // //                 className="
// // // // // // // // // //                   mt-7
// // // // // // // // // //                   flex
// // // // // // // // // //                   flex-wrap
// // // // // // // // // //                   gap-x-7
// // // // // // // // // //                   gap-y-3
// // // // // // // // // //                   text-sm
// // // // // // // // // //                   font-medium
// // // // // // // // // //                 "
// // // // // // // // // //               >

// // // // // // // // // //                 <Link href="/about">
// // // // // // // // // //                   About
// // // // // // // // // //                 </Link>

// // // // // // // // // //                 <Link href="/products">
// // // // // // // // // //                   Products
// // // // // // // // // //                 </Link>

// // // // // // // // // //                 <Link href="/blog">
// // // // // // // // // //                   Insights
// // // // // // // // // //                 </Link>

// // // // // // // // // //                 <Link href="/contact">
// // // // // // // // // //                   Contact
// // // // // // // // // //                 </Link>

// // // // // // // // // //               </nav>

// // // // // // // // // //             </div>


// // // // // // // // // //             <div className="md:text-right">

// // // // // // // // // //               <p className="text-sm font-semibold">
// // // // // // // // // //                 Aquaculture Knowledge Journal
// // // // // // // // // //               </p>

// // // // // // // // // //               <p className="mt-2 text-sm leading-6 text-blue-100">
// // // // // // // // // //                 Water Quality · Shrimp Health · Nutrition ·
// // // // // // // // // //                 Probiotics · Pond Management
// // // // // // // // // //               </p>

// // // // // // // // // //             </div>

// // // // // // // // // //           </div>

// // // // // // // // // //         </div>

// // // // // // // // // //       </section>

// // // // // // // // // //     </main>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // import type { Metadata } from "next";
// // // // // // // // // import { notFound } from "next/navigation";

// // // // // // // // // import {
// // // // // // // // //   blogs,
// // // // // // // // //   getBlogBySlug,
// // // // // // // // // } from "@/data/blogs";

// // // // // // // // // import BlogArticleClient from "./BlogArticleClient";

// // // // // // // // // type BlogPageProps = {
// // // // // // // // //   params: Promise<{
// // // // // // // // //     slug: string;
// // // // // // // // //   }>;
// // // // // // // // // };

// // // // // // // // // const SITE_URL =
// // // // // // // // //   "https://www.innovarebiopharma.com";

// // // // // // // // // /* =========================================================
// // // // // // // // //    STATIC PARAMS
// // // // // // // // // ========================================================= */

// // // // // // // // // export function generateStaticParams() {
// // // // // // // // //   return blogs.map((blog) => ({
// // // // // // // // //     slug: blog.slug,
// // // // // // // // //   }));
// // // // // // // // // }

// // // // // // // // // /* =========================================================
// // // // // // // // //    SEO METADATA
// // // // // // // // // ========================================================= */

// // // // // // // // // export async function generateMetadata({
// // // // // // // // //   params,
// // // // // // // // // }: BlogPageProps): Promise<Metadata> {
// // // // // // // // //   const { slug } = await params;

// // // // // // // // //   const post = getBlogBySlug(slug);

// // // // // // // // //   if (!post) {
// // // // // // // // //     return {
// // // // // // // // //       title:
// // // // // // // // //         "Aquaculture Insights | Innovare Biopharma",
// // // // // // // // //       description:
// // // // // // // // //         "Explore aquaculture insights on water quality, shrimp health, nutrition and pond management.",
// // // // // // // // //     };
// // // // // // // // //   }

// // // // // // // // //   const url =
// // // // // // // // //     `${SITE_URL}/blog/${post.slug}`;

// // // // // // // // //   const imageURL =
// // // // // // // // //     `${SITE_URL}${post.image}`;

// // // // // // // // //   return {
// // // // // // // // //     title: post.metaTitle,

// // // // // // // // //     description: post.description,

// // // // // // // // //     alternates: {
// // // // // // // // //       canonical: url,
// // // // // // // // //     },

// // // // // // // // //     robots: {
// // // // // // // // //       index: true,
// // // // // // // // //       follow: true,
// // // // // // // // //     },

// // // // // // // // //     openGraph: {
// // // // // // // // //       type: "article",

// // // // // // // // //       title: post.ogTitle,

// // // // // // // // //       description:
// // // // // // // // //         post.ogDescription,

// // // // // // // // //       url,

// // // // // // // // //       siteName:
// // // // // // // // //         "Innovare Biopharma",

// // // // // // // // //       locale: "en_US",

// // // // // // // // //       publishedTime:
// // // // // // // // //         post.dateISO,

// // // // // // // // //       modifiedTime:
// // // // // // // // //         post.modifiedISO,

// // // // // // // // //       images: [
// // // // // // // // //         {
// // // // // // // // //           url: imageURL,
// // // // // // // // //           width: 1200,
// // // // // // // // //           height: 630,
// // // // // // // // //           alt: post.imageAlt,
// // // // // // // // //         },
// // // // // // // // //       ],
// // // // // // // // //     },

// // // // // // // // //     twitter: {
// // // // // // // // //       card:
// // // // // // // // //         "summary_large_image",

// // // // // // // // //       title:
// // // // // // // // //         post.ogTitle,

// // // // // // // // //       description:
// // // // // // // // //         post.ogDescription,

// // // // // // // // //       images: [
// // // // // // // // //         imageURL,
// // // // // // // // //       ],
// // // // // // // // //     },
// // // // // // // // //   };
// // // // // // // // // }

// // // // // // // // // /* =========================================================
// // // // // // // // //    PAGE
// // // // // // // // // ========================================================= */

// // // // // // // // // export default async function BlogPage({
// // // // // // // // //   params,
// // // // // // // // // }: BlogPageProps) {
// // // // // // // // //   const { slug } = await params;

// // // // // // // // //   const post =
// // // // // // // // //     getBlogBySlug(slug);

// // // // // // // // //   if (!post) {
// // // // // // // // //     notFound();
// // // // // // // // //   }

// // // // // // // // //   const articleURL =
// // // // // // // // //     `${SITE_URL}/blog/${post.slug}`;

// // // // // // // // //   const relatedPosts = blogs
// // // // // // // // //     .filter(
// // // // // // // // //       (item) =>
// // // // // // // // //         item.slug !==
// // // // // // // // //           post.slug &&
// // // // // // // // //         (
// // // // // // // // //           item.category ===
// // // // // // // // //             post.category ||
// // // // // // // // //           item.tags.some((tag) =>
// // // // // // // // //             post.tags.includes(tag)
// // // // // // // // //           )
// // // // // // // // //         )
// // // // // // // // //     )
// // // // // // // // //     .slice(0, 3);

// // // // // // // // //   /* =======================================================
// // // // // // // // //      BLOG POSTING SCHEMA
// // // // // // // // //   ======================================================= */

// // // // // // // // //   const blogPostingSchema = {
// // // // // // // // //     "@context":
// // // // // // // // //       "https://schema.org",

// // // // // // // // //     "@type":
// // // // // // // // //       "BlogPosting",

// // // // // // // // //     headline:
// // // // // // // // //       post.title,

// // // // // // // // //     description:
// // // // // // // // //       post.description,

// // // // // // // // //     datePublished:
// // // // // // // // //       post.dateISO,

// // // // // // // // //     dateModified:
// // // // // // // // //       post.modifiedISO,

// // // // // // // // //     inLanguage:
// // // // // // // // //       post.language,

// // // // // // // // //     mainEntityOfPage: {
// // // // // // // // //       "@type":
// // // // // // // // //         "WebPage",

// // // // // // // // //       "@id":
// // // // // // // // //         articleURL,
// // // // // // // // //     },

// // // // // // // // //     image: [
// // // // // // // // //       `${SITE_URL}${post.image}`,
// // // // // // // // //     ],

// // // // // // // // //     author: {
// // // // // // // // //       "@type":
// // // // // // // // //         "Organization",

// // // // // // // // //       name:
// // // // // // // // //         post.author.name,

// // // // // // // // //       url:
// // // // // // // // //         SITE_URL,
// // // // // // // // //     },

// // // // // // // // //     publisher: {
// // // // // // // // //       "@type":
// // // // // // // // //         "Organization",

// // // // // // // // //       name:
// // // // // // // // //         "Innovare Biopharma LLP",

// // // // // // // // //       url:
// // // // // // // // //         SITE_URL,

// // // // // // // // //       logo: {
// // // // // // // // //         "@type":
// // // // // // // // //           "ImageObject",

// // // // // // // // //         url:
// // // // // // // // //           `${SITE_URL}${post.author.logo}`,
// // // // // // // // //       },
// // // // // // // // //     },

// // // // // // // // //     keywords:
// // // // // // // // //       post.tags.join(", "),
// // // // // // // // //   };

// // // // // // // // //   /* =======================================================
// // // // // // // // //      BREADCRUMB SCHEMA
// // // // // // // // //   ======================================================= */

// // // // // // // // //   const breadcrumbSchema = {
// // // // // // // // //     "@context":
// // // // // // // // //       "https://schema.org",

// // // // // // // // //     "@type":
// // // // // // // // //       "BreadcrumbList",

// // // // // // // // //     itemListElement: [
// // // // // // // // //       {
// // // // // // // // //         "@type":
// // // // // // // // //           "ListItem",

// // // // // // // // //         position: 1,

// // // // // // // // //         name: "Home",

// // // // // // // // //         item:
// // // // // // // // //           SITE_URL,
// // // // // // // // //       },

// // // // // // // // //       {
// // // // // // // // //         "@type":
// // // // // // // // //           "ListItem",

// // // // // // // // //         position: 2,

// // // // // // // // //         name: "Insights",

// // // // // // // // //         item:
// // // // // // // // //           `${SITE_URL}/blog`,
// // // // // // // // //       },

// // // // // // // // //       {
// // // // // // // // //         "@type":
// // // // // // // // //           "ListItem",

// // // // // // // // //         position: 3,

// // // // // // // // //         name:
// // // // // // // // //           post.category,

// // // // // // // // //         item:
// // // // // // // // //           `${SITE_URL}/blog`,
// // // // // // // // //       },

// // // // // // // // //       {
// // // // // // // // //         "@type":
// // // // // // // // //           "ListItem",

// // // // // // // // //         position: 4,

// // // // // // // // //         name:
// // // // // // // // //           post.title,

// // // // // // // // //         item:
// // // // // // // // //           articleURL,
// // // // // // // // //       },
// // // // // // // // //     ],
// // // // // // // // //   };

// // // // // // // // //   /* =======================================================
// // // // // // // // //      FAQ SCHEMA
// // // // // // // // //   ======================================================= */

// // // // // // // // //   const faqSchema = {
// // // // // // // // //     "@context":
// // // // // // // // //       "https://schema.org",

// // // // // // // // //     "@type":
// // // // // // // // //       "FAQPage",

// // // // // // // // //     mainEntity:
// // // // // // // // //       post.faq.map(
// // // // // // // // //         (faq) => ({
// // // // // // // // //           "@type":
// // // // // // // // //             "Question",

// // // // // // // // //           name:
// // // // // // // // //             faq.question,

// // // // // // // // //           acceptedAnswer: {
// // // // // // // // //             "@type":
// // // // // // // // //               "Answer",

// // // // // // // // //             text:
// // // // // // // // //               faq.answer,
// // // // // // // // //           },
// // // // // // // // //         })
// // // // // // // // //       ),
// // // // // // // // //   };

// // // // // // // // //   /* =======================================================
// // // // // // // // //      ORGANIZATION
// // // // // // // // //   ======================================================= */

// // // // // // // // //   const organizationSchema = {
// // // // // // // // //     "@context":
// // // // // // // // //       "https://schema.org",

// // // // // // // // //     "@type":
// // // // // // // // //       "Organization",

// // // // // // // // //     name:
// // // // // // // // //       "Innovare Biopharma LLP",

// // // // // // // // //     url:
// // // // // // // // //       SITE_URL,

// // // // // // // // //     logo:
// // // // // // // // //       `${SITE_URL}/images/brand/innovare-logo.png`,
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       <script
// // // // // // // // //         type="application/ld+json"
// // // // // // // // //         dangerouslySetInnerHTML={{
// // // // // // // // //           __html:
// // // // // // // // //             JSON.stringify(
// // // // // // // // //               blogPostingSchema
// // // // // // // // //             ),
// // // // // // // // //         }}
// // // // // // // // //       />

// // // // // // // // //       <script
// // // // // // // // //         type="application/ld+json"
// // // // // // // // //         dangerouslySetInnerHTML={{
// // // // // // // // //           __html:
// // // // // // // // //             JSON.stringify(
// // // // // // // // //               breadcrumbSchema
// // // // // // // // //             ),
// // // // // // // // //         }}
// // // // // // // // //       />

// // // // // // // // //       <script
// // // // // // // // //         type="application/ld+json"
// // // // // // // // //         dangerouslySetInnerHTML={{
// // // // // // // // //           __html:
// // // // // // // // //             JSON.stringify(
// // // // // // // // //               faqSchema
// // // // // // // // //             ),
// // // // // // // // //         }}
// // // // // // // // //       />

// // // // // // // // //       <script
// // // // // // // // //         type="application/ld+json"
// // // // // // // // //         dangerouslySetInnerHTML={{
// // // // // // // // //           __html:
// // // // // // // // //             JSON.stringify(
// // // // // // // // //               organizationSchema
// // // // // // // // //             ),
// // // // // // // // //         }}
// // // // // // // // //       />

// // // // // // // // //       <BlogArticleClient
// // // // // // // // //         post={post}
// // // // // // // // //         relatedPosts={
// // // // // // // // //           relatedPosts
// // // // // // // // //         }
// // // // // // // // //       />
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // import type { Metadata } from "next";
// // // // // // // // import { notFound } from "next/navigation";

// // // // // // // // import {
// // // // // // // //   blogs,
// // // // // // // //   getBlogBySlug,
// // // // // // // // } from "@/data/blogs";

// // // // // // // // import BlogArticleClient from "./[slug]/BlogArticleClient";

// // // // // // // // type BlogPageProps = {
// // // // // // // //   params: Promise<{
// // // // // // // //     slug: string;
// // // // // // // //   }>;
// // // // // // // // };

// // // // // // // // const SITE_URL =
// // // // // // // //   "https://www.innovarebiopharma.com";

// // // // // // // // /* =========================================================
// // // // // // // //    STATIC PARAMS
// // // // // // // // ========================================================= */

// // // // // // // // export function generateStaticParams() {
// // // // // // // //   return blogs.map((blog) => ({
// // // // // // // //     slug: blog.slug,
// // // // // // // //   }));
// // // // // // // // }

// // // // // // // // /* =========================================================
// // // // // // // //    SEO METADATA
// // // // // // // // ========================================================= */

// // // // // // // // export async function generateMetadata({
// // // // // // // //   params,
// // // // // // // // }: BlogPageProps): Promise<Metadata> {
// // // // // // // //   const { slug } = await params;

// // // // // // // //   const post = getBlogBySlug(slug);

// // // // // // // //   if (!post) {
// // // // // // // //     return {
// // // // // // // //       title:
// // // // // // // //         "Aquaculture Insights | Innovare Biopharma",
// // // // // // // //       description:
// // // // // // // //         "Explore aquaculture insights on water quality, shrimp health, nutrition and pond management.",
// // // // // // // //     };
// // // // // // // //   }

// // // // // // // //   const url =
// // // // // // // //     `${SITE_URL}/blog/${post.slug}`;

// // // // // // // //   const imageURL =
// // // // // // // //     `${SITE_URL}${post.image}`;

// // // // // // // //   return {
// // // // // // // //     title: post.metaTitle,

// // // // // // // //     description: post.description,

// // // // // // // //     alternates: {
// // // // // // // //       canonical: url,
// // // // // // // //     },

// // // // // // // //     robots: {
// // // // // // // //       index: true,
// // // // // // // //       follow: true,
// // // // // // // //     },

// // // // // // // //     openGraph: {
// // // // // // // //       type: "article",

// // // // // // // //       title: post.ogTitle,

// // // // // // // //       description:
// // // // // // // //         post.ogDescription,

// // // // // // // //       url,

// // // // // // // //       siteName:
// // // // // // // //         "Innovare Biopharma",

// // // // // // // //       locale: "en_US",

// // // // // // // //       publishedTime:
// // // // // // // //         post.dateISO,

// // // // // // // //       modifiedTime:
// // // // // // // //         post.modifiedISO,

// // // // // // // //       images: [
// // // // // // // //         {
// // // // // // // //           url: imageURL,
// // // // // // // //           width: 1200,
// // // // // // // //           height: 630,
// // // // // // // //           alt: post.imageAlt,
// // // // // // // //         },
// // // // // // // //       ],
// // // // // // // //     },

// // // // // // // //     twitter: {
// // // // // // // //       card:
// // // // // // // //         "summary_large_image",

// // // // // // // //       title:
// // // // // // // //         post.ogTitle,

// // // // // // // //       description:
// // // // // // // //         post.ogDescription,

// // // // // // // //       images: [
// // // // // // // //         imageURL,
// // // // // // // //       ],
// // // // // // // //     },
// // // // // // // //   };
// // // // // // // // }

// // // // // // // // /* =========================================================
// // // // // // // //    PAGE
// // // // // // // // ========================================================= */

// // // // // // // // export default async function BlogPage({
// // // // // // // //   params,
// // // // // // // // }: BlogPageProps) {
// // // // // // // //   const { slug } = await params;

// // // // // // // //   const post =
// // // // // // // //     getBlogBySlug(slug);

// // // // // // // //   if (!post) {
// // // // // // // //     notFound();
// // // // // // // //   }

// // // // // // // //   const articleURL =
// // // // // // // //     `${SITE_URL}/blog/${post.slug}`;

// // // // // // // //   const relatedPosts = blogs
// // // // // // // //     .filter(
// // // // // // // //       (item) =>
// // // // // // // //         item.slug !==
// // // // // // // //           post.slug &&
// // // // // // // //         (
// // // // // // // //           item.category ===
// // // // // // // //             post.category ||
// // // // // // // //           item.tags.some((tag) =>
// // // // // // // //             post.tags.includes(tag)
// // // // // // // //           )
// // // // // // // //         )
// // // // // // // //     )
// // // // // // // //     .slice(0, 3);

// // // // // // // //   /* =======================================================
// // // // // // // //      BLOG POSTING SCHEMA
// // // // // // // //   ======================================================= */

// // // // // // // //   const blogPostingSchema = {
// // // // // // // //     "@context":
// // // // // // // //       "https://schema.org",

// // // // // // // //     "@type":
// // // // // // // //       "BlogPosting",

// // // // // // // //     headline:
// // // // // // // //       post.title,

// // // // // // // //     description:
// // // // // // // //       post.description,

// // // // // // // //     datePublished:
// // // // // // // //       post.dateISO,

// // // // // // // //     dateModified:
// // // // // // // //       post.modifiedISO,

// // // // // // // //     inLanguage:
// // // // // // // //       post.language,

// // // // // // // //     mainEntityOfPage: {
// // // // // // // //       "@type":
// // // // // // // //         "WebPage",

// // // // // // // //       "@id":
// // // // // // // //         articleURL,
// // // // // // // //     },

// // // // // // // //     image: [
// // // // // // // //       `${SITE_URL}${post.image}`,
// // // // // // // //     ],

// // // // // // // //     author: {
// // // // // // // //       "@type":
// // // // // // // //         "Organization",

// // // // // // // //       name:
// // // // // // // //         post.author.name,

// // // // // // // //       url:
// // // // // // // //         SITE_URL,
// // // // // // // //     },

// // // // // // // //     publisher: {
// // // // // // // //       "@type":
// // // // // // // //         "Organization",

// // // // // // // //       name:
// // // // // // // //         "Innovare Biopharma LLP",

// // // // // // // //       url:
// // // // // // // //         SITE_URL,

// // // // // // // //       logo: {
// // // // // // // //         "@type":
// // // // // // // //           "ImageObject",

// // // // // // // //         url:
// // // // // // // //           `${SITE_URL}${post.author.logo}`,
// // // // // // // //       },
// // // // // // // //     },

// // // // // // // //     keywords:
// // // // // // // //       post.tags.join(", "),
// // // // // // // //   };

// // // // // // // //   /* =======================================================
// // // // // // // //      BREADCRUMB SCHEMA
// // // // // // // //   ======================================================= */

// // // // // // // //   const breadcrumbSchema = {
// // // // // // // //     "@context":
// // // // // // // //       "https://schema.org",

// // // // // // // //     "@type":
// // // // // // // //       "BreadcrumbList",

// // // // // // // //     itemListElement: [
// // // // // // // //       {
// // // // // // // //         "@type":
// // // // // // // //           "ListItem",

// // // // // // // //         position: 1,

// // // // // // // //         name: "Home",

// // // // // // // //         item:
// // // // // // // //           SITE_URL,
// // // // // // // //       },

// // // // // // // //       {
// // // // // // // //         "@type":
// // // // // // // //           "ListItem",

// // // // // // // //         position: 2,

// // // // // // // //         name: "Insights",

// // // // // // // //         item:
// // // // // // // //           `${SITE_URL}/blog`,
// // // // // // // //       },

// // // // // // // //       {
// // // // // // // //         "@type":
// // // // // // // //           "ListItem",

// // // // // // // //         position: 3,

// // // // // // // //         name:
// // // // // // // //           post.category,

// // // // // // // //         item:
// // // // // // // //           `${SITE_URL}/blog`,
// // // // // // // //       },

// // // // // // // //       {
// // // // // // // //         "@type":
// // // // // // // //           "ListItem",

// // // // // // // //         position: 4,

// // // // // // // //         name:
// // // // // // // //           post.title,

// // // // // // // //         item:
// // // // // // // //           articleURL,
// // // // // // // //       },
// // // // // // // //     ],
// // // // // // // //   };

// // // // // // // //   /* =======================================================
// // // // // // // //      FAQ SCHEMA
// // // // // // // //   ======================================================= */

// // // // // // // //   const faqSchema = {
// // // // // // // //     "@context":
// // // // // // // //       "https://schema.org",

// // // // // // // //     "@type":
// // // // // // // //       "FAQPage",

// // // // // // // //     mainEntity:
// // // // // // // //       post.faq.map(
// // // // // // // //         (faq) => ({
// // // // // // // //           "@type":
// // // // // // // //             "Question",

// // // // // // // //           name:
// // // // // // // //             faq.question,

// // // // // // // //           acceptedAnswer: {
// // // // // // // //             "@type":
// // // // // // // //               "Answer",

// // // // // // // //             text:
// // // // // // // //               faq.answer,
// // // // // // // //           },
// // // // // // // //         })
// // // // // // // //       ),
// // // // // // // //   };

// // // // // // // //   /* =======================================================
// // // // // // // //      ORGANIZATION
// // // // // // // //   ======================================================= */

// // // // // // // //   const organizationSchema = {
// // // // // // // //     "@context":
// // // // // // // //       "https://schema.org",

// // // // // // // //     "@type":
// // // // // // // //       "Organization",

// // // // // // // //     name:
// // // // // // // //       "Innovare Biopharma LLP",

// // // // // // // //     url:
// // // // // // // //       SITE_URL,

// // // // // // // //     logo:
// // // // // // // //       `${SITE_URL}/images/brand/innovare-logo.png`,
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       <script
// // // // // // // //         type="application/ld+json"
// // // // // // // //         dangerouslySetInnerHTML={{
// // // // // // // //           __html:
// // // // // // // //             JSON.stringify(
// // // // // // // //               blogPostingSchema
// // // // // // // //             ),
// // // // // // // //         }}
// // // // // // // //       />

// // // // // // // //       <script
// // // // // // // //         type="application/ld+json"
// // // // // // // //         dangerouslySetInnerHTML={{
// // // // // // // //           __html:
// // // // // // // //             JSON.stringify(
// // // // // // // //               breadcrumbSchema
// // // // // // // //             ),
// // // // // // // //         }}
// // // // // // // //       />

// // // // // // // //       <script
// // // // // // // //         type="application/ld+json"
// // // // // // // //         dangerouslySetInnerHTML={{
// // // // // // // //           __html:
// // // // // // // //             JSON.stringify(
// // // // // // // //               faqSchema
// // // // // // // //             ),
// // // // // // // //         }}
// // // // // // // //       />

// // // // // // // //       <script
// // // // // // // //         type="application/ld+json"
// // // // // // // //         dangerouslySetInnerHTML={{
// // // // // // // //           __html:
// // // // // // // //             JSON.stringify(
// // // // // // // //               organizationSchema
// // // // // // // //             ),
// // // // // // // //         }}
// // // // // // // //       />

// // // // // // // //       <BlogArticleClient
// // // // // // // //         post={post}
// // // // // // // //         relatedPosts={
// // // // // // // //           relatedPosts
// // // // // // // //         }
// // // // // // // //       />
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // import Link from "next/link";
// // // // // // // import { blogs } from "@/data/blogs";

// // // // // // // export default function BlogPage() {
// // // // // // //   return (
// // // // // // //     <main className="mx-auto max-w-7xl px-6 py-16">
// // // // // // //       <h1 className="text-4xl font-bold text-gray-900">
// // // // // // //         Aquaculture Insights
// // // // // // //       </h1>

// // // // // // //       <p className="mt-4 text-gray-600">
// // // // // // //         Explore the latest aquaculture articles from Innovare Biopharma.
// // // // // // //       </p>

// // // // // // //       <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// // // // // // //         {blogs.map((blog) => (
// // // // // // //           <article
// // // // // // //             key={blog.id}
// // // // // // //             className="rounded-xl border border-gray-200 p-6"
// // // // // // //           >
// // // // // // //             <p className="text-sm font-semibold text-blue-700">
// // // // // // //               {blog.category}
// // // // // // //             </p>

// // // // // // //             <h2 className="mt-3 text-xl font-bold">
// // // // // // //               {blog.title}
// // // // // // //             </h2>

// // // // // // //             <p className="mt-3 text-gray-600">
// // // // // // //               {blog.description}
// // // // // // //             </p>

// // // // // // //             <Link
// // // // // // //               href={`/blog/${blog.slug}`}
// // // // // // //               className="mt-5 inline-block font-semibold text-blue-700"
// // // // // // //             >
// // // // // // //               Read Article →
// // // // // // //             </Link>
// // // // // // //           </article>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     </main>
// // // // // // //   );
// // // // // // // }
// // // // // // import type { Metadata } from "next";
// // // // // // import Image from "next/image";
// // // // // // import Link from "next/link";

// // // // // // import { blogs } from "@/data/blogs";

// // // // // // export const metadata: Metadata = {
// // // // // //   title: "Aquaculture Insights | Innovare Biopharma",
// // // // // //   description:
// // // // // //     "Explore expert aquaculture insights on shrimp health, water quality, nutrition, probiotics and modern pond management.",
// // // // // //   alternates: {
// // // // // //     canonical: "https://www.innovarebiopharma.com/blog",
// // // // // //   },
// // // // // //   openGraph: {
// // // // // //     title: "Aquaculture Insights | Innovare Biopharma",
// // // // // //     description:
// // // // // //       "Practical knowledge for healthier shrimp, better water quality and stronger aquaculture performance.",
// // // // // //     url: "https://www.innovarebiopharma.com/blog",
// // // // // //     siteName: "Innovare Biopharma",
// // // // // //     type: "website",
// // // // // //     images: [
// // // // // //       {
// // // // // //         url: "https://www.innovarebiopharma.com/images/blog/bloghero.png",
// // // // // //         width: 1716,
// // // // // //         height: 910,
// // // // // //         alt: "Modern shrimp aquaculture pond with paddle-wheel aerators",
// // // // // //       },
// // // // // //     ],
// // // // // //   },
// // // // // //   twitter: {
// // // // // //     card: "summary_large_image",
// // // // // //     title: "Aquaculture Insights | Innovare Biopharma",
// // // // // //     description:
// // // // // //       "Practical knowledge for healthier shrimp, better water quality and stronger aquaculture performance.",
// // // // // //     images: ["https://www.innovarebiopharma.com/images/blog/bloghero.png"],
// // // // // //   },
// // // // // // };

// // // // // // const categories = [
// // // // // //   "All Insights",
// // // // // //   ...Array.from(new Set(blogs.map((blog) => blog.category))),
// // // // // // ];

// // // // // // export default function BlogPage() {
// // // // // //   const featuredPost = blogs[0];
// // // // // //   const remainingPosts = blogs.slice(1);
// // // // // //   const articlePosts = remainingPosts.length > 0 ? remainingPosts : blogs;

// // // // // //   return (
// // // // // //     <main className="min-h-screen bg-white text-slate-900">
// // // // // //       {/* HERO */}
// // // // // //       <section className="relative isolate min-h-[620px] overflow-hidden bg-[#062f5b] text-white md:min-h-[700px]">
// // // // // //         <Image
// // // // // //           src="/images/blog/bloghero.png"
// // // // // //           alt="Modern shrimp aquaculture pond with paddle-wheel aerators"
// // // // // //           fill
// // // // // //           priority
// // // // // //           sizes="100vw"
// // // // // //           className="object-cover object-center"
// // // // // //         />
// // // // // //         <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,33,68,0.96)_0%,rgba(4,47,88,0.82)_40%,rgba(3,40,73,0.28)_75%,rgba(3,32,61,0.12)_100%)]" />
// // // // // //         <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,30,57,0.48)_0%,transparent_58%)]" />

// // // // // //         <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20 md:min-h-[700px] lg:px-8">
// // // // // //           <div className="max-w-3xl">
// // // // // //             <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-sky-300">
// // // // // //               Innovare Knowledge Centre
// // // // // //             </p>

// // // // // //             <h1 className="text-5xl font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
// // // // // //               Aquaculture Insights
// // // // // //             </h1>

// // // // // //             <div className="mt-7 h-1 w-24 rounded-full bg-[#1684e8]" />

// // // // // //             <p className="mt-8 max-w-xl text-2xl font-semibold leading-snug text-white sm:text-3xl">
// // // // // //               Expert knowledge. Better farming. Stronger tomorrow.
// // // // // //             </p>

// // // // // //             <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
// // // // // //               Practical insights on shrimp health, water quality, nutrition,
// // // // // //               probiotics and modern aquaculture management.
// // // // // //             </p>

// // // // // //             <a
// // // // // //               href="#latest-insights"
// // // // // //               className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#1477d4] px-7 py-4 text-base font-bold text-white shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-[#0f68bc] focus:outline-none focus:ring-4 focus:ring-blue-300/50"
// // // // // //             >
// // // // // //               Explore Articles
// // // // // //               <span aria-hidden="true" className="text-2xl leading-none">
// // // // // //                 →
// // // // // //               </span>
// // // // // //             </a>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* INTRODUCTION */}
// // // // // //       <section className="border-b border-slate-200 bg-white">
// // // // // //         <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.72fr_1.28fr] lg:px-8 lg:py-20">
// // // // // //           <div>
// // // // // //             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0874cc]">
// // // // // //               Knowledge for better aquaculture
// // // // // //             </p>
// // // // // //             <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0a3765] sm:text-4xl">
// // // // // //               Practical thinking for healthier ponds
// // // // // //             </h2>
// // // // // //           </div>

// // // // // //           <p className="max-w-3xl text-lg leading-8 text-slate-600">
// // // // // //             Explore evidence-informed articles created for shrimp farmers,
// // // // // //             technicians and aquaculture businesses. From everyday pond
// // // // // //             decisions to long-term production planning, our insights turn
// // // // // //             technical knowledge into clear, useful action.
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* FEATURED ARTICLE */}
// // // // // //       {featuredPost && (
// // // // // //         <section className="bg-[#f5f9fd] py-16 sm:py-20">
// // // // // //           <div className="mx-auto max-w-7xl px-6 lg:px-8">
// // // // // //             <div className="mb-8 flex items-end justify-between gap-6">
// // // // // //               <div>
// // // // // //                 <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0874cc]">
// // // // // //                   Featured insight
// // // // // //                 </p>
// // // // // //                 <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a3765] sm:text-4xl">
// // // // // //                   Essential reading for modern shrimp farming
// // // // // //                 </h2>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <article className="group overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_18px_55px_rgba(15,64,110,0.10)]">
// // // // // //               <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
// // // // // //                 <Link
// // // // // //                   href={`/blog/${featuredPost.slug}`}
// // // // // //                   className="relative block min-h-[310px] overflow-hidden sm:min-h-[420px]"
// // // // // //                   aria-label={`Read ${featuredPost.title}`}
// // // // // //                 >
// // // // // //                   <Image
// // // // // //                     src={featuredPost.image}
// // // // // //                     alt={featuredPost.imageAlt || featuredPost.title}
// // // // // //                     fill
// // // // // //                     sizes="(max-width: 1024px) 100vw, 55vw"
// // // // // //                     className="object-cover transition duration-700 group-hover:scale-105"
// // // // // //                   />
// // // // // //                   <div className="absolute inset-0 bg-gradient-to-t from-[#062f5b]/25 to-transparent" />
// // // // // //                 </Link>

// // // // // //                 <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
// // // // // //                   <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
// // // // // //                     <span className="rounded-full bg-blue-50 px-4 py-2 text-[#0874cc]">
// // // // // //                       {featuredPost.category}
// // // // // //                     </span>
// // // // // //                     <span className="text-slate-500">{featuredPost.readTime}</span>
// // // // // //                   </div>

// // // // // //                   <h3 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#0a315a] sm:text-4xl">
// // // // // //                     <Link
// // // // // //                       href={`/blog/${featuredPost.slug}`}
// // // // // //                       className="transition hover:text-[#0874cc]"
// // // // // //                     >
// // // // // //                       {featuredPost.title}
// // // // // //                     </Link>
// // // // // //                   </h3>

// // // // // //                   <p className="mt-5 line-clamp-3 text-base leading-7 text-slate-600">
// // // // // //                     {featuredPost.description}
// // // // // //                   </p>

// // // // // //                   <div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-t border-slate-200 pt-6">
// // // // // //                     <span className="text-sm text-slate-500">{featuredPost.date}</span>
// // // // // //                     <Link
// // // // // //                       href={`/blog/${featuredPost.slug}`}
// // // // // //                       className="inline-flex items-center gap-2 font-bold text-[#0874cc] transition hover:gap-3"
// // // // // //                     >
// // // // // //                       Read full article <span aria-hidden="true">→</span>
// // // // // //                     </Link>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </article>
// // // // // //           </div>
// // // // // //         </section>
// // // // // //       )}

// // // // // //       {/* ARTICLE GRID */}
// // // // // //       <section id="latest-insights" className="scroll-mt-24 bg-white py-16 sm:py-20">
// // // // // //         <div className="mx-auto max-w-7xl px-6 lg:px-8">
// // // // // //           <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
// // // // // //             <div>
// // // // // //               <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0874cc]">
// // // // // //                 Knowledge library
// // // // // //               </p>
// // // // // //               <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a3765] sm:text-4xl">
// // // // // //                 Latest aquaculture insights
// // // // // //               </h2>
// // // // // //             </div>

// // // // // //             <div className="flex flex-wrap gap-2" aria-label="Available article categories">
// // // // // //               {categories.map((category, index) => (
// // // // // //                 <span
// // // // // //                   key={category}
// // // // // //                   className={
// // // // // //                     index === 0
// // // // // //                       ? "rounded-full bg-[#0874cc] px-4 py-2 text-sm font-semibold text-white"
// // // // // //                       : "rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600"
// // // // // //                   }
// // // // // //                 >
// // // // // //                   {category}
// // // // // //                 </span>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {articlePosts.length > 0 ? (
// // // // // //             <div className="mt-10 grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
// // // // // //               {articlePosts.map((blog) => (
// // // // // //                 <article key={blog.slug} className="group flex h-full flex-col">
// // // // // //                   <Link
// // // // // //                     href={`/blog/${blog.slug}`}
// // // // // //                     className="relative block aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100"
// // // // // //                     aria-label={`Read ${blog.title}`}
// // // // // //                   >
// // // // // //                     <Image
// // // // // //                       src={blog.image}
// // // // // //                       alt={blog.imageAlt || blog.title}
// // // // // //                       fill
// // // // // //                       sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
// // // // // //                       className="object-cover transition duration-700 group-hover:scale-105"
// // // // // //                     />
// // // // // //                     <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#0874cc] shadow-sm backdrop-blur">
// // // // // //                       {blog.category}
// // // // // //                     </span>
// // // // // //                   </Link>

// // // // // //                   <div className="flex flex-1 flex-col pt-5">
// // // // // //                     <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
// // // // // //                       <span>{blog.date}</span>
// // // // // //                       <span aria-hidden="true">•</span>
// // // // // //                       <span>{blog.readTime}</span>
// // // // // //                     </div>

// // // // // //                     <h3 className="mt-3 text-2xl font-bold leading-snug tracking-tight text-[#0a315a]">
// // // // // //                       <Link
// // // // // //                         href={`/blog/${blog.slug}`}
// // // // // //                         className="transition hover:text-[#0874cc]"
// // // // // //                       >
// // // // // //                         {blog.title}
// // // // // //                       </Link>
// // // // // //                     </h3>

// // // // // //                     <p className="mt-3 line-clamp-3 text-base leading-7 text-slate-600">
// // // // // //                       {blog.description}
// // // // // //                     </p>

// // // // // //                     <div className="mt-auto pt-5">
// // // // // //                       <Link
// // // // // //                         href={`/blog/${blog.slug}`}
// // // // // //                         className="inline-flex items-center gap-2 font-bold text-[#0874cc] transition hover:gap-3"
// // // // // //                       >
// // // // // //                         Read article <span aria-hidden="true">→</span>
// // // // // //                       </Link>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </article>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           ) : (
// // // // // //             <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-600">
// // // // // //               New aquaculture insights are coming soon.
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* NEWSLETTER CTA */}
// // // // // //       <section className="bg-white px-6 pb-20 pt-4 lg:px-8">
// // // // // //         <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#073c70] px-7 py-12 text-white shadow-xl sm:px-12 lg:px-16 lg:py-16">
// // // // // //           <div className="absolute -right-24 -top-40 h-96 w-96 rounded-full border border-sky-300/20" />
// // // // // //           <div className="absolute -right-6 -top-24 h-72 w-72 rounded-full border border-sky-300/20" />

// // // // // //           <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
// // // // // //             <div>
// // // // // //               <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
// // // // // //                 Stay informed
// // // // // //               </p>
// // // // // //               <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
// // // // // //                 Get practical aquaculture insights in your inbox
// // // // // //               </h2>
// // // // // //               <p className="mt-4 max-w-2xl leading-7 text-blue-100">
// // // // // //                 Receive new articles on shrimp health, pond management, water
// // // // // //                 quality and sustainable aquaculture practices.
// // // // // //               </p>
// // // // // //             </div>

// // // // // //             <form className="rounded-2xl bg-white p-2 shadow-lg" action="#" method="post">
// // // // // //               <div className="flex flex-col gap-2 sm:flex-row">
// // // // // //                 <label htmlFor="blog-email" className="sr-only">
// // // // // //                   Email address
// // // // // //                 </label>
// // // // // //                 <input
// // // // // //                   id="blog-email"
// // // // // //                   name="email"
// // // // // //                   type="email"
// // // // // //                   required
// // // // // //                   placeholder="Enter your email address"
// // // // // //                   className="min-h-12 flex-1 rounded-xl px-4 text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-400"
// // // // // //                 />
// // // // // //                 <button
// // // // // //                   type="submit"
// // // // // //                   className="min-h-12 rounded-xl bg-[#0874cc] px-6 font-bold text-white transition hover:bg-[#075fa8]"
// // // // // //                 >
// // // // // //                   Subscribe
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </form>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>
// // // // // //     </main>
// // // // // //   );
// // // // // // }
// // // // // import type { Metadata } from "next";
// // // // // import Image from "next/image";
// // // // // import Link from "next/link";

// // // // // import { blogs } from "@/data/blogs";

// // // // // const SITE_URL = "https://www.innovarebiopharma.com";
// // // // // const HERO_IMAGE = "/images/blog/aquaculture-insights-hero.png";

// // // // // export const metadata: Metadata = {
// // // // //   title: "Aquaculture Insights & Shrimp Farming Knowledge | Innovare Biopharma",
// // // // //   description:
// // // // //     "Expert aquaculture articles on shrimp health, pond water quality, nutrition, probiotics, biosecurity and responsible farm management.",
// // // // //   alternates: { canonical: `${SITE_URL}/blog` },
// // // // //   openGraph: {
// // // // //     title: "Aquaculture Insights | Innovare Biopharma",
// // // // //     description:
// // // // //       "Science-led knowledge for healthier shrimp, balanced ponds and stronger aquaculture performance.",
// // // // //     url: `${SITE_URL}/blog`,
// // // // //     siteName: "Innovare Biopharma",
// // // // //     type: "website",
// // // // //     images: [
// // // // //       {
// // // // //         url: `${SITE_URL}${HERO_IMAGE}`,
// // // // //         width: 1716,
// // // // //         height: 910,
// // // // //         alt: "Modern shrimp pond with paddlewheel aerators",
// // // // //       },
// // // // //     ],
// // // // //   },
// // // // //   twitter: {
// // // // //     card: "summary_large_image",
// // // // //     title: "Aquaculture Insights | Innovare Biopharma",
// // // // //     description:
// // // // //       "Science-led knowledge for healthier shrimp and stronger aquaculture performance.",
// // // // //     images: [`${SITE_URL}${HERO_IMAGE}`],
// // // // //   },
// // // // // };

// // // // // const categories = Array.from(
// // // // //   new Set(blogs.map((blog) => blog.category).filter(Boolean)),
// // // // // );

// // // // // export default function BlogPage() {
// // // // //   return (
// // // // //     <main className="min-h-screen bg-white text-slate-950">
// // // // //       <section className="relative isolate overflow-hidden bg-[#052f59] text-white">
// // // // //         <Image
// // // // //           src={HERO_IMAGE}
// // // // //           alt="Modern shrimp aquaculture pond at sunrise"
// // // // //           fill
// // // // //           priority
// // // // //           sizes="100vw"
// // // // //           className="object-cover object-center"
// // // // //         />
// // // // //         <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,28,55,0.98)_0%,rgba(3,41,75,0.91)_38%,rgba(3,45,77,0.40)_67%,rgba(3,33,60,0.18)_100%)]" />
// // // // //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_5%,rgba(44,170,225,0.24),transparent_28%),linear-gradient(0deg,rgba(2,23,43,0.52),transparent_46%)]" />

// // // // //         <div className="pointer-events-none absolute -left-36 -top-40 h-[520px] w-[520px] rounded-full border border-cyan-200/20" />
// // // // //         <div className="pointer-events-none absolute -left-14 -top-52 h-[520px] w-[520px] rounded-full border border-cyan-200/15" />

// // // // //         <div className="relative mx-auto flex min-h-[590px] max-w-7xl items-center px-6 py-20 lg:px-8 lg:py-24">
// // // // //           <div className="max-w-3xl">
// // // // //             <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
// // // // //               Innovare Knowledge Centre
// // // // //             </p>
// // // // //             <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
// // // // //               Aquaculture insights for healthier ponds
// // // // //             </h1>
// // // // //             <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-50/90 sm:text-xl">
// // // // //               Practical science, farm-ready guidance and industry perspectives
// // // // //               for sustainable shrimp production.
// // // // //             </p>

// // // // //             <form
// // // // //               action="#"
// // // // //               className="mt-9 flex max-w-xl flex-col rounded-2xl bg-white p-2 shadow-2xl shadow-slate-950/20 sm:flex-row"
// // // // //             >
// // // // //               <label htmlFor="blog-email" className="sr-only">
// // // // //                 Email address
// // // // //               </label>
// // // // //               <input
// // // // //                 id="blog-email"
// // // // //                 name="email"
// // // // //                 type="email"
// // // // //                 placeholder="Enter your email"
// // // // //                 className="min-w-0 flex-1 rounded-xl px-5 py-4 text-base text-slate-900 outline-none placeholder:text-slate-400"
// // // // //               />
// // // // //               <button
// // // // //                 type="submit"
// // // // //                 className="rounded-xl bg-[#0879cb] px-7 py-4 font-bold text-white transition hover:bg-[#0567ad] focus:outline-none focus:ring-4 focus:ring-cyan-300/40"
// // // // //               >
// // // // //                 Subscribe
// // // // //               </button>
// // // // //             </form>
// // // // //           </div>

// // // // //         </div>
// // // // //       </section>

// // // // //       <section id="latest-insights" className="scroll-mt-24 py-16 sm:py-20">
// // // // //         <div className="mx-auto max-w-7xl px-6 lg:px-8">
// // // // //           <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
// // // // //             <div>
// // // // //               <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0879cb]">
// // // // //                 From the field
// // // // //               </p>
// // // // //               <h2 className="mt-3 text-4xl font-semibold tracking-[-0.025em] text-[#07365f] sm:text-5xl">
// // // // //                 Latest aquaculture articles
// // // // //               </h2>
// // // // //             </div>
// // // // //             <div className="flex max-w-2xl flex-wrap gap-2" aria-label="Article categories">
// // // // //               <span className="rounded-full bg-[#073e70] px-4 py-2 text-sm font-semibold text-white">
// // // // //                 All insights
// // // // //               </span>
// // // // //               {categories.map((category) => (
// // // // //                 <span
// // // // //                   key={category}
// // // // //                   className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600"
// // // // //                 >
// // // // //                   {category}
// // // // //                 </span>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>

// // // // //           {blogs.length > 0 ? (
// // // // //             <div className="mt-11 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
// // // // //               {blogs.map((blog) => (
// // // // //                 <article key={blog.slug} className="group flex min-w-0 flex-col">
// // // // //                   <Link
// // // // //                     href={`/blog/${blog.slug}`}
// // // // //                     aria-label={`Read ${blog.title}`}
// // // // //                     className="relative block aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100"
// // // // //                   >
// // // // //                     <Image
// // // // //                       src={blog.image}
// // // // //                       alt={blog.imageAlt || blog.title}
// // // // //                       fill
// // // // //                       sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
// // // // //                       className="object-cover transition duration-700 group-hover:scale-105"
// // // // //                     />
// // // // //                     <div className="absolute inset-0 bg-gradient-to-t from-[#032c50]/35 via-transparent to-transparent opacity-70" />
// // // // //                     <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-2 text-xs font-bold text-[#0879cb] shadow-sm backdrop-blur">
// // // // //                       {blog.category}
// // // // //                     </span>
// // // // //                   </Link>

// // // // //                   <div className="flex flex-1 flex-col pt-5">
// // // // //                     <p className="text-sm font-medium text-slate-500">
// // // // //                       {blog.author?.name || "Innovare Biopharma"} · {blog.date}
// // // // //                     </p>
// // // // //                     <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-[-0.02em] text-[#082f52]">
// // // // //                       <Link
// // // // //                         href={`/blog/${blog.slug}`}
// // // // //                         className="transition-colors hover:text-[#0879cb]"
// // // // //                       >
// // // // //                         {blog.title}
// // // // //                       </Link>
// // // // //                     </h3>
// // // // //                     <p className="mt-3 line-clamp-3 text-base leading-7 text-slate-600">
// // // // //                       {blog.description}
// // // // //                     </p>

// // // // //                     <div className="mt-5 flex flex-wrap gap-2">
// // // // //                       {blog.tags?.slice(0, 3).map((tag) => (
// // // // //                         <span
// // // // //                           key={tag}
// // // // //                           className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600"
// // // // //                         >
// // // // //                           {tag}
// // // // //                         </span>
// // // // //                       ))}
// // // // //                     </div>

// // // // //                     <Link
// // // // //                       href={`/blog/${blog.slug}`}
// // // // //                       className="mt-6 inline-flex items-center gap-2 self-start font-bold text-[#0879cb] transition-all group-hover:gap-3"
// // // // //                     >
// // // // //                       Read article <span aria-hidden="true">→</span>
// // // // //                     </Link>
// // // // //                   </div>
// // // // //                 </article>
// // // // //               ))}
// // // // //             </div>
// // // // //           ) : (
// // // // //             <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center text-slate-600">
// // // // //               New aquaculture insights are coming soon.
// // // // //             </div>
// // // // //           )}

// // // // //           {blogs.length > 9 && (
// // // // //             <nav className="mt-16 flex items-center justify-between border-t border-slate-200 pt-6" aria-label="Blog pagination">
// // // // //               <button disabled className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-400">
// // // // //                 ← Previous
// // // // //               </button>
// // // // //               <p className="text-sm font-semibold text-slate-600">Page 1</p>
// // // // //               <button className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#0879cb] hover:text-[#0879cb]">
// // // // //                 Next →
// // // // //               </button>
// // // // //             </nav>
// // // // //           )}
// // // // //         </div>
// // // // //       </section>

// // // // //       <section className="px-6 pb-20 pt-3 lg:px-8">
// // // // //         <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#06365f_0%,#0879cb_62%,#10a5c8_100%)] px-7 py-14 text-white shadow-[0_24px_70px_rgba(4,61,107,0.22)] sm:px-12 lg:px-16 lg:py-20">
// // // // //           <div className="pointer-events-none absolute -right-24 -top-36 h-96 w-96 rounded-full border border-white/20" />
// // // // //           <div className="pointer-events-none absolute -right-4 -top-24 h-96 w-96 rounded-full border border-white/15" />
// // // // //           <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
// // // // //             <div className="max-w-3xl">
// // // // //               <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
// // // // //                 Better science. Better farming.
// // // // //               </p>
// // // // //               <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
// // // // //                 Build stronger aquaculture outcomes with Innovare
// // // // //               </h2>
// // // // //               <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">
// // // // //                 Explore science-led solutions designed for pond health, shrimp
// // // // //                 performance and responsible production.
// // // // //               </p>
// // // // //             </div>
// // // // //             <Link
// // // // //               href="/contact"
// // // // //               className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 font-bold text-[#075c9e] shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
// // // // //             >
// // // // //               Talk to our team&nbsp; →
// // // // //             </Link>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>
// // // // //     </main>
// // // // //   );
// // // // // }

// // // // import type { Metadata } from "next";
// // // // import Image from "next/image";
// // // // import Link from "next/link";

// // // // import { blogs } from "@/data/blogs";

// // // // const SITE_URL = "https://www.innovarebiopharma.com";
// // // // const HERO_IMAGE = "/images/blog/innovare-field-journal.png";

// // // // export const metadata: Metadata = {
// // // //   title: "Aquaculture Field Journal | Innovare Biopharma",
// // // //   description:
// // // //     "Practical aquaculture knowledge on pond health, shrimp performance, water quality, nutrition and responsible farm management.",
// // // //   alternates: { canonical: `${SITE_URL}/blog` },
// // // //   openGraph: {
// // // //     title: "Aquaculture Field Journal | Innovare Biopharma",
// // // //     description:
// // // //       "Evidence-led ideas and practical guidance for stronger aquaculture outcomes.",
// // // //     url: `${SITE_URL}/blog`,
// // // //     siteName: "Innovare Biopharma",
// // // //     type: "website",
// // // //     images: [
// // // //       {
// // // //         url: `${SITE_URL}${HERO_IMAGE}`,
// // // //         width: 1792,
// // // //         height: 896,
// // // //         alt: "Aquaculture professional inspecting a pond-water sample",
// // // //       },
// // // //     ],
// // // //   },
// // // //   twitter: {
// // // //     card: "summary_large_image",
// // // //     title: "Aquaculture Field Journal | Innovare Biopharma",
// // // //     description:
// // // //       "Evidence-led ideas and practical guidance for stronger aquaculture outcomes.",
// // // //     images: [`${SITE_URL}${HERO_IMAGE}`],
// // // //   },
// // // // };

// // // // const topics = Array.from(
// // // //   new Set(blogs.map((blog) => blog.category).filter(Boolean)),
// // // // );

// // // // function ArrowIcon() {
// // // //   return (
// // // //     <svg
// // // //       viewBox="0 0 24 24"
// // // //       fill="none"
// // // //       aria-hidden="true"
// // // //       className="h-5 w-5"
// // // //     >
// // // //       <path
// // // //         d="M5 12h14m-5-5 5 5-5 5"
// // // //         stroke="currentColor"
// // // //         strokeWidth="1.8"
// // // //         strokeLinecap="round"
// // // //         strokeLinejoin="round"
// // // //       />
// // // //     </svg>
// // // //   );
// // // // }

// // // // export default function BlogPage() {
// // // //   const [featuredPost, ...remainingPosts] = blogs;

// // // //   return (
// // // //     <main className="min-h-screen overflow-hidden bg-[#f5f7f3] text-[#102b2b]">
// // // //       <section className="relative bg-[#dcece7] px-4 pb-4 pt-4 sm:px-6 sm:pb-6 sm:pt-6 lg:px-8">
// // // //         <div className="relative mx-auto min-h-[640px] max-w-[1480px] overflow-hidden rounded-[1.75rem] bg-[#0b3637] sm:min-h-[680px] sm:rounded-[2.25rem]">
// // // //           <Image
// // // //             src={HERO_IMAGE}
// // // //             alt="Aquaculture professional inspecting pond water at sunrise"
// // // //             fill
// // // //             priority
// // // //             sizes="100vw"
// // // //             className="object-cover object-[66%_center]"
// // // //           />

// // // //           <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,35,36,0.96)_0%,rgba(5,42,43,0.88)_30%,rgba(6,44,44,0.46)_54%,rgba(6,32,34,0.10)_100%)]" />
// // // //           <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#082e2f]/60 to-transparent" />

// // // //           <div className="relative mx-auto flex min-h-[640px] max-w-7xl flex-col justify-between px-6 py-7 sm:min-h-[680px] sm:px-10 sm:py-10 lg:px-14 lg:py-12">
// // // //             <div className="flex items-center justify-between">
// // // //               <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
// // // //                 <span className="h-2 w-2 rounded-full bg-[#75ddad]" />
// // // //                 Innovare Field Journal
// // // //               </p>
// // // //               <Link
// // // //                 href="#journal"
// // // //                 className="hidden rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#123a39] sm:inline-flex"
// // // //               >
// // // //                 Explore the journal
// // // //               </Link>
// // // //             </div>

// // // //             <div className="max-w-3xl pb-8 sm:pb-12">
// // // //               <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#8ce5ba]">
// // // //                 Science in every pond
// // // //               </p>
// // // //               <h1 className="max-w-3xl text-[clamp(3.25rem,8vw,7.2rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-white">
// // // //                 Knowledge that works in the water.
// // // //               </h1>
// // // //               <p className="mt-7 max-w-xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
// // // //                 Field-tested thinking for healthier shrimp, balanced ponds and
// // // //                 more confident farm decisions.
// // // //               </p>
// // // //               <Link
// // // //                 href="#journal"
// // // //                 className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#a9efc9] px-6 py-3.5 text-sm font-bold text-[#123735] transition hover:bg-white"
// // // //               >
// // // //                 Read the latest insights <ArrowIcon />
// // // //               </Link>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       <section id="journal" className="scroll-mt-20 px-6 py-20 sm:py-28 lg:px-8">
// // // //         <div className="mx-auto max-w-7xl">
// // // //           <div className="grid gap-10 border-b border-[#bed0c8] pb-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
// // // //             <div>
// // // //               <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#147a68]">
// // // //                 The journal
// // // //               </p>
// // // //               <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#113737] sm:text-6xl">
// // // //                 Ideas for better farming
// // // //               </h2>
// // // //             </div>
// // // //             <div className="flex flex-wrap gap-2 lg:justify-end" aria-label="Blog topics">
// // // //               <span className="rounded-full bg-[#123b3a] px-4 py-2 text-sm font-semibold text-white">
// // // //                 All stories
// // // //               </span>
// // // //               {topics.map((topic) => (
// // // //                 <span
// // // //                   key={topic}
// // // //                   className="rounded-full border border-[#abc1b8] bg-white/50 px-4 py-2 text-sm font-semibold text-[#345652]"
// // // //                 >
// // // //                   {topic}
// // // //                 </span>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {featuredPost ? (
// // // //             <article className="group grid gap-7 border-b border-[#bed0c8] py-12 lg:grid-cols-[1.45fr_0.85fr] lg:items-center lg:gap-14 lg:py-16">
// // // //               <Link
// // // //                 href={`/blog/${featuredPost.slug}`}
// // // //                 className="relative block aspect-[16/10] overflow-hidden rounded-[1.75rem] bg-[#dbe6df]"
// // // //               >
// // // //                 <Image
// // // //                   src={featuredPost.image}
// // // //                   alt={featuredPost.imageAlt || featuredPost.title}
// // // //                   fill
// // // //                   sizes="(max-width: 1024px) 100vw, 62vw"
// // // //                   className="object-cover transition duration-700 group-hover:scale-[1.025]"
// // // //                 />
// // // //                 <span className="absolute left-5 top-5 rounded-full bg-[#eff8f1]/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#146958] backdrop-blur">
// // // //                   Featured insight
// // // //                 </span>
// // // //               </Link>

// // // //               <div>
// // // //                 <p className="text-sm font-semibold text-[#237767]">
// // // //                   {featuredPost.category} <span className="mx-2 text-[#87a59b]">/</span>{" "}
// // // //                   {featuredPost.date}
// // // //                 </p>
// // // //                 <h3 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#102f2f] sm:text-5xl">
// // // //                   <Link href={`/blog/${featuredPost.slug}`} className="hover:text-[#147a68]">
// // // //                     {featuredPost.title}
// // // //                   </Link>
// // // //                 </h3>
// // // //                 <p className="mt-6 text-lg leading-8 text-[#55706b]">
// // // //                   {featuredPost.description}
// // // //                 </p>
// // // //                 <Link
// // // //                   href={`/blog/${featuredPost.slug}`}
// // // //                   className="mt-8 inline-flex items-center gap-3 border-b border-[#123b3a] pb-2 text-sm font-bold text-[#123b3a] transition group-hover:gap-5"
// // // //                 >
// // // //                   Open field note <ArrowIcon />
// // // //                 </Link>
// // // //               </div>
// // // //             </article>
// // // //           ) : (
// // // //             <div className="my-12 rounded-[1.5rem] border border-dashed border-[#a9beb5] p-12 text-center text-[#55706b]">
// // // //               New aquaculture field notes are coming soon.
// // // //             </div>
// // // //           )}

// // // //           {remainingPosts.length > 0 && (
// // // //             <div className="grid gap-x-7 gap-y-12 pt-12 md:grid-cols-2 lg:grid-cols-3 lg:pt-16">
// // // //               {remainingPosts.map((blog, index) => (
// // // //                 <article
// // // //                   key={blog.slug}
// // // //                   className={`group flex flex-col ${index % 3 === 1 ? "lg:pt-12" : ""}`}
// // // //                 >
// // // //                   <Link
// // // //                     href={`/blog/${blog.slug}`}
// // // //                     className="relative block aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#dbe6df]"
// // // //                   >
// // // //                     <Image
// // // //                       src={blog.image}
// // // //                       alt={blog.imageAlt || blog.title}
// // // //                       fill
// // // //                       sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
// // // //                       className="object-cover transition duration-700 group-hover:scale-105"
// // // //                     />
// // // //                     <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3.5 py-2 text-xs font-bold text-[#176c5d] shadow-sm backdrop-blur">
// // // //                       {blog.category}
// // // //                     </span>
// // // //                   </Link>

// // // //                   <div className="flex flex-1 flex-col pt-5">
// // // //                     <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#789089]">
// // // //                       {blog.date} · {blog.author?.name || "Innovare Biopharma"}
// // // //                     </p>
// // // //                     <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#123534]">
// // // //                       <Link href={`/blog/${blog.slug}`} className="hover:text-[#147a68]">
// // // //                         {blog.title}
// // // //                       </Link>
// // // //                     </h3>
// // // //                     <p className="mt-3 line-clamp-3 text-base leading-7 text-[#607771]">
// // // //                       {blog.description}
// // // //                     </p>
// // // //                     <Link
// // // //                       href={`/blog/${blog.slug}`}
// // // //                       className="mt-5 inline-flex items-center gap-2 self-start text-sm font-bold text-[#176c5d] transition group-hover:gap-4"
// // // //                     >
// // // //                       Read insight <ArrowIcon />
// // // //                     </Link>
// // // //                   </div>
// // // //                 </article>
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </section>

// // // //       <section className="px-6 pb-8 lg:px-8">
// // // //         <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#123b3a] px-7 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
// // // //           <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[44px] border-[#1c5651]" />
// // // //           <div className="absolute bottom-0 right-36 h-24 w-24 rounded-full bg-[#93e5b8]/15" />
// // // //           <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
// // // //             <div className="max-w-3xl">
// // // //               <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8ee3b5]">
// // // //                 From evidence to action
// // // //               </p>
// // // //               <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
// // // //                 Let’s solve what is happening in your pond.
// // // //               </h2>
// // // //               <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
// // // //                 Connect with Innovare for science-led aquaculture support and
// // // //                 practical product guidance.
// // // //               </p>
// // // //             </div>
// // // //             <Link
// // // //               href="/contact"
// // // //               className="inline-flex items-center justify-center gap-3 rounded-full bg-[#a9efc9] px-6 py-3.5 text-sm font-bold text-[#123735] transition hover:bg-white"
// // // //             >
// // // //               Speak with our team <ArrowIcon />
// // // //             </Link>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </main>
// // // //   );
// // // // }

// // // // import type { Metadata } from "next";
// // // // import Image from "next/image";
// // // // import Link from "next/link";

// // // // import { blogs } from "@/data/blogs";

// // // // const SITE_URL = "https://www.innovarebiopharma.com";

// // // // export const metadata: Metadata = {
// // // //   title: "Aquaculture Resources and Insights | Innovare Biopharma",
// // // //   description:
// // // //     "Explore practical aquaculture insights on shrimp health, water quality, nutrition, probiotics and sustainable pond management.",
// // // //   alternates: { canonical: `${SITE_URL}/blog` },
// // // //   openGraph: {
// // // //     title: "Aquaculture Resources and Insights | Innovare Biopharma",
// // // //     description:
// // // //       "Expert knowledge for healthier shrimp, balanced ponds and better farming decisions.",
// // // //     url: `${SITE_URL}/blog`,
// // // //     siteName: "Innovare Biopharma",
// // // //     type: "website",
// // // //   },
// // // // };

// // // // function SearchIcon() {
// // // //   return (
// // // //     <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
// // // //       <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
// // // //       <path d="m16.5 16.5 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
// // // //     </svg>
// // // //   );
// // // // }

// // // // function ArrowIcon() {
// // // //   return (
// // // //     <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
// // // //       <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
// // // //     </svg>
// // // //   );
// // // // }

// // // // export default function BlogPage() {
// // // //   return (
// // // //     <main id="top" className="min-h-screen bg-white text-[#15263a]">
// // // //       <section className="relative isolate overflow-hidden bg-[#eef8fc] px-6 pb-44 pt-24 sm:pb-52 sm:pt-28 lg:pt-32">
// // // //         <div className="absolute inset-x-0 bottom-0 -z-10 h-48 overflow-hidden" aria-hidden="true">
// // // //           <div className="absolute -left-[8%] top-14 h-24 w-[116%] -rotate-[6deg] bg-[#cceef6]" />
// // // //           <div className="absolute -left-[8%] top-28 h-20 w-[116%] -rotate-[6deg] bg-[#9edce9]" />
// // // //           <div className="absolute -left-[8%] top-40 h-20 w-[116%] -rotate-[6deg] bg-white" />
// // // //         </div>

// // // //         <div className="mx-auto max-w-4xl text-center">
// // // //           <span className="inline-flex rounded-full bg-[#dff3f8] px-4 py-2 text-sm font-semibold text-[#087f9d]">
// // // //             Aquaculture knowledge hub
// // // //           </span>
// // // //           <h1 className="mt-6 text-4xl font-bold tracking-[-0.04em] text-[#123d62] sm:text-6xl">
// // // //             Resources and insights
// // // //           </h1>
// // // //           <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#466980] sm:text-xl">
// // // //             Practical knowledge on shrimp health, pond water, nutrition and responsible aquaculture.
// // // //           </p>

// // // //           <form action="/blog" method="get" role="search" className="relative mx-auto mt-9 h-14 max-w-md">
// // // //             <input
// // // //               type="search"
// // // //               name="search"
// // // //               aria-label="Search aquaculture articles"
// // // //               placeholder="Search articles"
// // // //               className="absolute inset-0 h-14 w-full rounded-lg border border-[#bed5df] bg-white pl-12 pr-4 text-base text-[#183b56] shadow-sm outline-none transition placeholder:text-[#7793a4] focus:border-[#168cac] focus:ring-4 focus:ring-[#168cac]/10"
// // // //             />
// // // //             <span className="pointer-events-none absolute left-4 top-4 z-10 text-[#6d8798]">
// // // //               <SearchIcon />
// // // //             </span>
// // // //           </form>
// // // //         </div>
// // // //       </section>

// // // //       <section className="relative z-10 -mt-24 px-5 pb-24 sm:px-7 lg:px-8">
// // // //         <div className="mx-auto max-w-7xl">
// // // //           <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
// // // //             {blogs.map((blog) => (
// // // //               <article
// // // //                 key={blog.slug}
// // // //                 className="group flex min-h-full flex-col bg-white p-5 shadow-[0_14px_40px_rgba(23,61,85,0.12)] ring-1 ring-[#dbe8ed] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(23,61,85,0.17)]"
// // // //               >
// // // //                 <Link href={`/blog/${blog.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-[#e7f2f5]">
// // // //                   <Image
// // // //                     src={blog.image}
// // // //                     alt={blog.imageAlt || blog.title}
// // // //                     fill
// // // //                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
// // // //                     className="object-cover transition duration-500 group-hover:scale-[1.035]"
// // // //                   />
// // // //                 </Link>

// // // //                 <div className="flex flex-1 flex-col px-1 pb-2 pt-6">
// // // //                   <p className="text-sm font-bold text-[#0788a6]">{blog.category}</p>
// // // //                   <h2 className="mt-3 flex items-start justify-between gap-4 text-2xl font-bold leading-tight tracking-[-0.025em] text-[#14283c]">
// // // //                     <Link href={`/blog/${blog.slug}`} className="transition hover:text-[#087f9d]">
// // // //                       {blog.title}
// // // //                     </Link>
// // // //                     <span className="mt-1 shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1">
// // // //                       <ArrowIcon />
// // // //                     </span>
// // // //                   </h2>
// // // //                   <p className="mt-4 line-clamp-3 text-base leading-7 text-[#61778a]">
// // // //                     {blog.description}
// // // //                   </p>

// // // //                   <div className="mt-auto flex items-center gap-3 pt-8">
// // // //                     <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e2f3f7] text-sm font-bold text-[#087f9d]">
// // // //                       IB
// // // //                     </div>
// // // //                     <div>
// // // //                       <p className="text-sm font-semibold text-[#1c3347]">
// // // //                         {blog.author?.name || "Innovare Biopharma"}
// // // //                       </p>
// // // //                       <p className="mt-0.5 text-sm text-[#718698]">{blog.date}</p>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </article>
// // // //             ))}
// // // //           </div>

// // // //           {blogs.length === 0 && (
// // // //             <div className="rounded-xl border border-dashed border-[#bad4de] bg-[#f4fafc] px-6 py-16 text-center text-[#5b7486]">
// // // //               New aquaculture articles are coming soon.
// // // //             </div>
// // // //           )}

// // // //           {blogs.length > 0 && (
// // // //             <div className="mt-14 text-center">
// // // //               <Link
// // // //                 href="#top"
// // // //                 className="inline-flex items-center gap-2 rounded-lg bg-[#edf8fb] px-5 py-3 text-sm font-bold text-[#087f9d] transition hover:bg-[#dff2f7]"
// // // //               >
// // // //                 Explore more insights <span aria-hidden="true">↓</span>
// // // //               </Link>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </section>
// // // //     </main>
// // // //   );
// // // // }
// // // import type { Metadata } from "next";
// // // import Image from "next/image";
// // // import Link from "next/link";

// // // import { blogs } from "@/data/blogs";

// // // const SITE_URL = "https://www.innovarebiopharma.com";

// // // export const metadata: Metadata = {
// // //   title: "Aquaculture Blog | Innovare Biopharma",
// // //   description:
// // //     "Explore aquaculture insights, shrimp health guidance, water management, probiotics, nutrition and sustainable farming practices from Innovare Biopharma.",
// // //   alternates: {
// // //     canonical: `${SITE_URL}/blog`,
// // //   },
// // //   openGraph: {
// // //     title: "Aquaculture Blog | Innovare Biopharma",
// // //     description:
// // //       "Practical aquaculture knowledge for healthier shrimp, stronger ponds and sustainable farming.",
// // //     url: `${SITE_URL}/blog`,
// // //     siteName: "Innovare Biopharma",
// // //     type: "website",
// // //   },
// // // };

// // // function ArrowIcon() {
// // //   return (
// // //     <svg
// // //       viewBox="0 0 24 24"
// // //       fill="none"
// // //       aria-hidden="true"
// // //       className="h-4 w-4"
// // //     >
// // //       <path
// // //         d="M5 12h14M13 6l6 6-6 6"
// // //         stroke="currentColor"
// // //         strokeWidth="1.8"
// // //         strokeLinecap="round"
// // //         strokeLinejoin="round"
// // //       />
// // //     </svg>
// // //   );
// // // }

// // // export default function BlogPage() {
// // //   return (
// // //     <main className="min-h-screen bg-white text-[#18364d]">
// // //       {/* =====================================================
// // //           HERO
// // //       ===================================================== */}
// // //       <section className="relative min-h-[520px] overflow-hidden md:min-h-[600px]">
// // //         <Image
// // //           src="/images/blog/aquaculture-blog-hero.jpg"
// // //           alt="Modern sustainable aquaculture shrimp farming"
// // //           fill
// // //           priority
// // //           sizes="100vw"
// // //           className="object-cover"
// // //         />

// // //         {/* Dark overlay */}
// // //         <div className="absolute inset-0 bg-gradient-to-r from-[#071e32]/90 via-[#123d62]/70 to-[#123d62]/25" />

// // //         {/* Brand tint */}
// // //         <div className="absolute inset-0 bg-[#087f9d]/10" />

// // //         <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-20 md:min-h-[600px] lg:px-8">
// // //           <div className="max-w-2xl">
// // //             <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#c9f4ff] backdrop-blur-sm">
// // //               Innovare Aquaculture Insights
// // //             </div>

// // //             <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-[64px]">
// // //               Better knowledge.
// // //               <br />
// // //               Healthier aquaculture.
// // //             </h1>

// // //             <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
// // //               Practical insights on shrimp health, pond management, nutrition,
// // //               probiotics and sustainable aquaculture for modern farmers.
// // //             </p>

// // //             <div className="mt-9 flex flex-wrap gap-4">
// // //               <a
// // //                 href="#latest-blogs"
// // //                 className="inline-flex items-center gap-2 rounded-md bg-[#0b91ad] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/10 transition hover:bg-[#087f9d]"
// // //               >
// // //                 Explore Articles
// // //                 <ArrowIcon />
// // //               </a>

// // //               <Link
// // //                 href="/contact"
// // //                 className="inline-flex items-center rounded-md border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#123d62]"
// // //               >
// // //                 Talk to our team
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Small bottom accent */}
// // //         <div className="absolute bottom-0 left-0 h-[5px] w-full bg-gradient-to-r from-[#0b91ad] via-[#64c9da] to-transparent" />
// // //       </section>

// // //       {/* =====================================================
// // //           BLOG INTRO
// // //       ===================================================== */}
// // //       <section
// // //         id="latest-blogs"
// // //         className="border-b border-[#e5edf1] bg-white px-6 pb-10 pt-14 text-center lg:px-8"
// // //       >
// // //         <div className="mx-auto max-w-3xl">
// // //           <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0788a6]">
// // //             Knowledge Center
// // //           </p>

// // //           <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[#123d62] sm:text-4xl">
// // //             Latest Blogs
// // //           </h2>

// // //           <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#718494] sm:text-base">
// // //             Discover practical aquaculture knowledge, industry insights and
// // //             useful guidance for healthier farms and smarter production.
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* =====================================================
// // //           BLOG CARDS
// // //       ===================================================== */}
// // //       <section className="bg-white px-6 py-12 lg:px-8 lg:py-16">
// // //         <div className="mx-auto max-w-7xl">
// // //           {blogs.length > 0 ? (
// // //             <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
// // //               {blogs.slice(0, 8).map((blog) => (
// // //                 <article key={blog.slug} className="group">
// // //                   {/* Image */}
// // //                   <Link
// // //                     href={`/blog/${blog.slug}`}
// // //                     className="relative block aspect-[1.55/1] overflow-hidden rounded-[7px] bg-[#edf5f7]"
// // //                   >
// // //                     <Image
// // //                       src={blog.image}
// // //                       alt={blog.imageAlt || blog.title}
// // //                       fill
// // //                       sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
// // //                       className="object-cover transition duration-500 group-hover:scale-105"
// // //                     />

// // //                     <div className="absolute inset-0 bg-[#123d62]/0 transition duration-300 group-hover:bg-[#123d62]/10" />
// // //                   </Link>

// // //                   {/* Content */}
// // //                   <div className="pt-5">
// // //                     <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0788a6]">
// // //                       {blog.category}
// // //                     </p>

// // //                     <h3 className="text-[17px] font-bold leading-[1.4] text-[#1a3348]">
// // //                       <Link
// // //                         href={`/blog/${blog.slug}`}
// // //                         className="transition hover:text-[#0788a6]"
// // //                       >
// // //                         {blog.title}
// // //                       </Link>
// // //                     </h3>

// // //                     <p className="mt-3 line-clamp-3 text-[13px] leading-6 text-[#778896]">
// // //                       {blog.description}
// // //                     </p>

// // //                     <Link
// // //                       href={`/blog/${blog.slug}`}
// // //                       className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-[#d94d96] transition hover:gap-2.5 hover:text-[#0788a6]"
// // //                     >
// // //                       Read More
// // //                       <span aria-hidden="true">→</span>
// // //                     </Link>
// // //                   </div>
// // //                 </article>
// // //               ))}
// // //             </div>
// // //           ) : (
// // //             <div className="border border-dashed border-[#bfd4dd] bg-[#f6fbfc] px-8 py-20 text-center">
// // //               <h3 className="text-xl font-bold text-[#123d62]">
// // //                 Aquaculture articles are coming soon
// // //               </h3>

// // //               <p className="mt-2 text-sm text-[#6e8493]">
// // //                 New technical insights and farming resources will be published
// // //                 here.
// // //               </p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </section>

// // //       {/* =====================================================
// // //           FEATURE / CTA BAND
// // //       ===================================================== */}
// // //       <section className="bg-[#eef8fb] px-6 py-16 lg:px-8">
// // //         <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-[#123d62] lg:grid-cols-[1.15fr_0.85fr]">
// // //           <div className="flex items-center px-8 py-12 sm:px-12 lg:px-14">
// // //             <div className="max-w-xl">
// // //               <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7bd2e0]">
// // //                 Aquaculture expertise
// // //               </p>

// // //               <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl">
// // //                 Smarter pond decisions begin with better information.
// // //               </h2>

// // //               <p className="mt-5 text-base leading-7 text-white/70">
// // //                 Stay informed about shrimp health, pond conditions, disease
// // //                 management, nutrition and sustainable aquaculture practices.
// // //               </p>

// // //               <Link
// // //                 href="/contact"
// // //                 className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#13a0bb] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0b8ba5]"
// // //               >
// // //                 Contact Innovare
// // //                 <ArrowIcon />
// // //               </Link>
// // //             </div>
// // //           </div>

// // //           <div className="relative min-h-[320px] lg:min-h-full">
// // //             <Image
// // //               src="/images/blog/aquaculture-pond-feature.jpg"
// // //               alt="Professional aquaculture pond farming"
// // //               fill
// // //               sizes="(max-width:1024px) 100vw, 40vw"
// // //               className="object-cover"
// // //             />

// // //             <div className="absolute inset-0 bg-gradient-to-r from-[#123d62]/50 to-transparent lg:from-[#123d62]/30" />
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </main>
// // //   );
// // // }
// // import type { Metadata } from "next";
// // import Image from "next/image";
// // import Link from "next/link";

// // import { blogs } from "@/data/blogs";

// // const SITE_URL = "https://www.innovarebiopharma.com";

// // export const metadata: Metadata = {
// //   title: "Aquaculture Blog: Shrimp Health & Pond Management",
// //   description:
// //     "Read practical aquaculture articles about shrimp health, pond water quality, probiotics, nutrition, disease prevention and sustainable shrimp farming.",
// //   keywords: [
// //     "aquaculture blog",
// //     "shrimp farming",
// //     "shrimp health",
// //     "pond water management",
// //     "aquaculture probiotics",
// //     "shrimp nutrition",
// //     "sustainable aquaculture",
// //     "shrimp disease prevention",
// //   ],
// //   alternates: {
// //     canonical: `${SITE_URL}/blog`,
// //   },
// //   openGraph: {
// //     title: "Aquaculture Blog | Innovare Biopharma",
// //     description:
// //       "Practical insights for healthier shrimp, balanced ponds and sustainable aquaculture.",
// //     url: `${SITE_URL}/blog`,
// //     siteName: "Innovare Biopharma",
// //     type: "website",
// //   },
// //   twitter: {
// //     card: "summary_large_image",
// //     title: "Aquaculture Blog | Innovare Biopharma",
// //     description:
// //       "Explore expert guidance on shrimp health, water quality, probiotics and sustainable aquaculture.",
// //   },
// // };

// // type BlogPageProps = {
// //   searchParams?: {
// //     search?: string;
// //   };
// // };

// // function SearchIcon() {
// //   return (
// //     <svg
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       aria-hidden="true"
// //       className="h-5 w-5"
// //     >
// //       <circle
// //         cx="11"
// //         cy="11"
// //         r="7"
// //         stroke="currentColor"
// //         strokeWidth="1.8"
// //       />
// //       <path
// //         d="m16.5 16.5 4 4"
// //         stroke="currentColor"
// //         strokeWidth="1.8"
// //         strokeLinecap="round"
// //       />
// //     </svg>
// //   );
// // }

// // function ArrowIcon() {
// //   return (
// //     <svg
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       aria-hidden="true"
// //       className="h-4 w-4"
// //     >
// //       <path
// //         d="M5 12h14M13 6l6 6-6 6"
// //         stroke="currentColor"
// //         strokeWidth="1.8"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //       />
// //     </svg>
// //   );
// // }

// // export default function BlogPage({ searchParams }: BlogPageProps) {
// //   const query = searchParams?.search?.trim().toLowerCase() || "";

// //   const filteredBlogs = blogs.filter((blog) => {
// //     if (!query) return true;

// //     return [
// //       blog.title,
// //       blog.description,
// //       blog.category,
// //       blog.author?.name,
// //     ]
// //       .filter(Boolean)
// //       .some((value) => value?.toLowerCase().includes(query));
// //   });

// //   const primaryBlogs = filteredBlogs.slice(0, 3);
// //   const featuredBlogs = filteredBlogs.slice(0, 3);
// //   const latestBlogs = filteredBlogs.slice(3, 5);

// //   const structuredData = {
// //     "@context": "https://schema.org",
// //     "@type": "Blog",
// //     name: "Innovare Biopharma Aquaculture Blog",
// //     description:
// //       "Aquaculture guidance covering shrimp health, pond management, nutrition, probiotics and sustainable farming.",
// //     url: `${SITE_URL}/blog`,
// //     publisher: {
// //       "@type": "Organization",
// //       name: "Innovare Biopharma",
// //       url: SITE_URL,
// //     },
// //     blogPost: blogs.map((blog) => ({
// //       "@type": "BlogPosting",
// //       headline: blog.title,
// //       description: blog.description,
// //       image: `${SITE_URL}${blog.image}`,
// //       datePublished: blog.date,
// //       url: `${SITE_URL}/blog/${blog.slug}`,
// //       author: {
// //         "@type": "Organization",
// //         name: blog.author?.name || "Innovare Biopharma",
// //       },
// //     })),
// //   };

// //   return (
// //     <main className="min-h-screen bg-white text-[#162d3e]">
// //       <script
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{
// //           __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
// //         }}
// //       />

// //       {/* =====================================================
// //           INTRODUCTION AND SEARCH
// //       ===================================================== */}
// //       <section className="border-b border-[#e5edf1] bg-[#f8fbfc] px-5 py-14 sm:px-7 sm:py-16 lg:px-8">
// //         <div className="mx-auto max-w-5xl text-center">
// //           <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0788a6]">
// //             Aquaculture knowledge hub
// //           </p>

// //           <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[#123d62] sm:text-5xl">
// //             Aquaculture insights and resources
// //           </h1>

// //           <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#60798a] sm:text-lg">
// //             Explore practical guidance on shrimp health, pond water quality,
// //             nutrition, probiotics, disease prevention and sustainable
// //             aquaculture management.
// //           </p>

// //           <form
// //             action="/blog"
// //             method="get"
// //             role="search"
// //             className="mx-auto mt-8 flex max-w-2xl gap-3"
// //           >
// //             <div className="relative min-w-0 flex-1">
// //               <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#78909f]">
// //                 <SearchIcon />
// //               </span>

// //               <input
// //                 type="search"
// //                 name="search"
// //                 defaultValue={searchParams?.search}
// //                 aria-label="Search aquaculture articles"
// //                 placeholder="Search shrimp health, water quality, nutrition..."
// //                 className="h-12 w-full rounded-lg border border-[#cbdde4] bg-white pl-12 pr-4 text-sm text-[#18384c] outline-none transition placeholder:text-[#8ba0ad] focus:border-[#0788a6] focus:ring-4 focus:ring-[#0788a6]/10"
// //               />
// //             </div>

// //             <button
// //               type="submit"
// //               className="h-12 shrink-0 rounded-lg bg-[#0788a6] px-6 text-sm font-bold text-white transition hover:bg-[#066f89]"
// //             >
// //               Search
// //             </button>
// //           </form>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           BLOG CONTENT
// //       ===================================================== */}
// //       <section className="px-5 py-14 sm:px-7 lg:px-8 lg:py-16">
// //         <div className="mx-auto max-w-7xl">
// //           {filteredBlogs.length > 0 ? (
// //             <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_310px]">
// //               {/* Main blog column */}
// //               <div>
// //                 <div className="mb-6 flex items-center gap-5">
// //                   <h2 className="shrink-0 text-2xl font-bold tracking-[-0.025em] text-[#123d62]">
// //                     {query ? "Search results" : "Latest insights"}
// //                   </h2>

// //                   <div className="h-px flex-1 bg-[#dfe9ed]" />
// //                 </div>

// //                 {/* Large image-overlay cards */}
// //                 <div className="grid gap-5 md:grid-cols-3">
// //                   {primaryBlogs.map((blog, index) => (
// //                     <article
// //                       key={blog.slug}
// //                       className={`group ${
// //                         index === 0 ? "md:col-span-1" : ""
// //                       }`}
// //                     >
// //                       <Link
// //                         href={`/blog/${blog.slug}`}
// //                         className="relative flex min-h-[390px] overflow-hidden rounded-xl bg-[#dfecef]"
// //                       >
// //                         <Image
// //                           src={blog.image}
// //                           alt={blog.imageAlt || blog.title}
// //                           fill
// //                           priority={index === 0 && !query}
// //                           sizes="(max-width:768px) 100vw, (max-width:1024px) 33vw, 25vw"
// //                           className="object-cover transition duration-700 group-hover:scale-105"
// //                         />

// //                         <div className="absolute inset-0 bg-gradient-to-t from-[#071d2d]/95 via-[#123d62]/30 to-transparent" />

// //                         <div className="relative z-10 mt-auto p-5 text-white sm:p-6">
// //                           <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#0788a6]">
// //                             {blog.category}
// //                           </span>

// //                           <h3 className="mt-4 text-xl font-bold leading-snug tracking-[-0.02em]">
// //                             {blog.title}
// //                           </h3>

// //                           <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/75">
// //                             {blog.description}
// //                           </p>

// //                           <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#9ee7f2]">
// //                             Read article
// //                             <ArrowIcon />
// //                           </span>
// //                         </div>
// //                       </Link>
// //                     </article>
// //                   ))}
// //                 </div>

// //                 {/* Remaining blog articles */}
// //                 {filteredBlogs.length > 3 && (
// //                   <div className="mt-12">
// //                     <div className="mb-6 flex items-center gap-5">
// //                       <h2 className="shrink-0 text-2xl font-bold tracking-[-0.025em] text-[#123d62]">
// //                         More aquaculture articles
// //                       </h2>

// //                       <div className="h-px flex-1 bg-[#dfe9ed]" />
// //                     </div>

// //                     <div className="grid gap-7 sm:grid-cols-2">
// //                       {filteredBlogs.slice(3).map((blog) => (
// //                         <article
// //                           key={blog.slug}
// //                           className="group grid gap-5 border-b border-[#e3ecef] pb-7 sm:grid-cols-[150px_1fr]"
// //                         >
// //                           <Link
// //                             href={`/blog/${blog.slug}`}
// //                             className="relative block aspect-[16/10] overflow-hidden rounded-lg bg-[#e7f1f4] sm:aspect-square"
// //                           >
// //                             <Image
// //                               src={blog.image}
// //                               alt={blog.imageAlt || blog.title}
// //                               fill
// //                               sizes="(max-width:640px) 100vw, 150px"
// //                               className="object-cover transition duration-500 group-hover:scale-105"
// //                             />
// //                           </Link>

// //                           <div>
// //                             <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#0788a6]">
// //                               {blog.category}
// //                             </p>

// //                             <h3 className="mt-2 text-lg font-bold leading-snug text-[#18364b]">
// //                               <Link
// //                                 href={`/blog/${blog.slug}`}
// //                                 className="transition hover:text-[#0788a6]"
// //                               >
// //                                 {blog.title}
// //                               </Link>
// //                             </h3>

// //                             <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#6f8492]">
// //                               {blog.description}
// //                             </p>

// //                             <Link
// //                               href={`/blog/${blog.slug}`}
// //                               className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#0788a6]"
// //                             >
// //                               Read more
// //                               <ArrowIcon />
// //                             </Link>
// //                           </div>
// //                         </article>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Sidebar */}
// //               <aside className="space-y-10">
// //                 <section aria-labelledby="featured-heading">
// //                   <div className="mb-5 flex items-center gap-4">
// //                     <h2
// //                       id="featured-heading"
// //                       className="text-xl font-bold text-[#123d62]"
// //                     >
// //                       Featured
// //                     </h2>

// //                     <div className="h-px flex-1 bg-[#dfe9ed]" />
// //                   </div>

// //                   <div className="space-y-5">
// //                     {featuredBlogs.map((blog) => (
// //                       <article
// //                         key={`featured-${blog.slug}`}
// //                         className="group grid grid-cols-[88px_1fr] gap-4"
// //                       >
// //                         <Link
// //                           href={`/blog/${blog.slug}`}
// //                           className="relative block h-[88px] overflow-hidden rounded-lg bg-[#e7f1f4]"
// //                         >
// //                           <Image
// //                             src={blog.image}
// //                             alt=""
// //                             fill
// //                             sizes="88px"
// //                             className="object-cover transition duration-500 group-hover:scale-105"
// //                           />
// //                         </Link>

// //                         <div className="min-w-0">
// //                           <p className="text-xs text-[#8396a2]">{blog.date}</p>

// //                           <h3 className="mt-1 line-clamp-3 text-sm font-bold leading-5 text-[#18364b]">
// //                             <Link
// //                               href={`/blog/${blog.slug}`}
// //                               className="transition hover:text-[#0788a6]"
// //                             >
// //                               {blog.title}
// //                             </Link>
// //                           </h3>
// //                         </div>
// //                       </article>
// //                     ))}
// //                   </div>
// //                 </section>

// //                 {latestBlogs.length > 0 && (
// //                   <section aria-labelledby="latest-heading">
// //                     <div className="mb-5 flex items-center gap-4">
// //                       <h2
// //                         id="latest-heading"
// //                         className="text-xl font-bold text-[#123d62]"
// //                       >
// //                         Latest
// //                       </h2>

// //                       <div className="h-px flex-1 bg-[#dfe9ed]" />
// //                     </div>

// //                     <div className="space-y-5">
// //                       {latestBlogs.map((blog) => (
// //                         <article
// //                           key={`latest-${blog.slug}`}
// //                           className="group grid grid-cols-[88px_1fr] gap-4"
// //                         >
// //                           <Link
// //                             href={`/blog/${blog.slug}`}
// //                             className="relative block h-[74px] overflow-hidden rounded-lg bg-[#e7f1f4]"
// //                           >
// //                             <Image
// //                               src={blog.image}
// //                               alt=""
// //                               fill
// //                               sizes="88px"
// //                               className="object-cover transition duration-500 group-hover:scale-105"
// //                             />
// //                           </Link>

// //                           <div>
// //                             <p className="text-xs text-[#8396a2]">{blog.date}</p>

// //                             <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-5 text-[#18364b]">
// //                               <Link
// //                                 href={`/blog/${blog.slug}`}
// //                                 className="transition hover:text-[#0788a6]"
// //                               >
// //                                 {blog.title}
// //                               </Link>
// //                             </h3>
// //                           </div>
// //                         </article>
// //                       ))}
// //                     </div>
// //                   </section>
// //                 )}
// //               </aside>
// //             </div>
// //           ) : (
// //             <div className="rounded-xl border border-dashed border-[#bfd4dd] bg-[#f7fbfc] px-6 py-20 text-center">
// //               <h2 className="text-2xl font-bold text-[#123d62]">
// //                 No articles found
// //               </h2>

// //               <p className="mt-3 text-sm text-[#6f8492]">
// //                 Try searching for shrimp health, pond water, nutrition or
// //                 probiotics.
// //               </p>

// //               <Link
// //                 href="/blog"
// //                 className="mt-6 inline-flex rounded-lg bg-[#0788a6] px-5 py-3 text-sm font-bold text-white"
// //               >
// //                 View all articles
// //               </Link>
// //             </div>
// //           )}
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }
// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";

// import { blogs } from "@/data/blogs";

// const SITE_URL = "https://www.innovarebiopharma.com";

// export const metadata: Metadata = {
//   title: "Aquaculture Blog: Shrimp Health & Pond Management",
//   description:
//     "Explore practical aquaculture articles about shrimp health, pond water quality, probiotics, nutrition, disease prevention and sustainable shrimp farming.",
//   keywords: [
//     "aquaculture blog",
//     "shrimp farming",
//     "shrimp health",
//     "pond water quality",
//     "aquaculture probiotics",
//     "shrimp nutrition",
//     "shrimp disease prevention",
//     "sustainable aquaculture",
//     "pond management",
//     "Innovare Biopharma",
//   ],
//   alternates: {
//     canonical: `${SITE_URL}/blog`,
//   },
//   openGraph: {
//     title: "Aquaculture Blog | Innovare Biopharma",
//     description:
//       "Practical aquaculture insights for healthier shrimp, balanced ponds and sustainable farming.",
//     url: `${SITE_URL}/blog`,
//     siteName: "Innovare Biopharma",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Aquaculture Blog | Innovare Biopharma",
//     description:
//       "Explore expert guidance on shrimp health, pond water quality, probiotics and sustainable aquaculture.",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//       "max-video-preview": -1,
//     },
//   },
// };

// type BlogPageProps = {
//   searchParams: Promise<{
//     search?: string;
//   }>;
// };

// function SearchIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//       className="h-5 w-5"
//     >
//       <circle
//         cx="11"
//         cy="11"
//         r="7"
//         stroke="currentColor"
//         strokeWidth="1.8"
//       />

//       <path
//         d="m16.5 16.5 4 4"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function ArrowIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//       className="h-5 w-5"
//     >
//       <path
//         d="M7 17 17 7M8 7h9v9"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function formatDate(date: string) {
//   const parsedDate = new Date(date);

//   if (Number.isNaN(parsedDate.getTime())) {
//     return date;
//   }

//   return parsedDate.toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// }

// export default async function BlogPage({
//   searchParams,
// }: BlogPageProps) {
//   const params = await searchParams;
//   const searchValue = params.search?.trim() || "";
//   const query = searchValue.toLowerCase();

//   const filteredBlogs = blogs.filter((blog) => {
//     if (!query) return true;

//     const searchableContent = [
//       blog.title,
//       blog.description,
//       blog.category,
//       blog.author?.name,
//     ]
//       .filter(Boolean)
//       .join(" ")
//       .toLowerCase();

//     return searchableContent.includes(query);
//   });

//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "Blog",
//     name: "Innovare Biopharma Aquaculture Blog",
//     description:
//       "Practical aquaculture insights covering shrimp health, pond water quality, nutrition, probiotics and sustainable farming.",
//     url: `${SITE_URL}/blog`,
//     publisher: {
//       "@type": "Organization",
//       name: "Innovare Biopharma",
//       url: SITE_URL,
//     },
//     blogPost: blogs.map((blog) => ({
//       "@type": "BlogPosting",
//       headline: blog.title,
//       description: blog.description,
//       image: `${SITE_URL}${blog.image}`,
//       datePublished: blog.date,
//       url: `${SITE_URL}/blog/${blog.slug}`,
//       mainEntityOfPage: {
//         "@type": "WebPage",
//         "@id": `${SITE_URL}/blog/${blog.slug}`,
//       },
//       author: {
//         "@type": "Organization",
//         name: blog.author?.name || "Innovare Biopharma",
//       },
//       publisher: {
//         "@type": "Organization",
//         name: "Innovare Biopharma",
//       },
//     })),
//   };

//   return (
//     <main className="min-h-screen overflow-hidden bg-white text-[#162d3e]">
//       {/* SEO structured data */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
//         }}
//       />

//       {/* =====================================================
//           BLOG INTRODUCTION
//       ===================================================== */}
//       <section className="relative overflow-hidden bg-[#f9f7ff] px-5 pb-36 pt-16 sm:px-7 sm:pb-40 sm:pt-20 lg:px-8">
//         {/* Decorative background shapes */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-x-0 bottom-0 h-40 overflow-hidden"
//         >
//           <div className="absolute -left-[8%] top-16 h-20 w-[116%] -rotate-[7deg] bg-[#e9dfff]" />

//           <div className="absolute -left-[8%] top-28 h-20 w-[116%] -rotate-[7deg] bg-[#d5bdff]" />
//         </div>

//         <div className="relative z-10 mx-auto max-w-4xl text-center">
//           <p className="inline-flex rounded-full bg-[#eee8ff] px-4 py-2 text-xs font-bold text-[#0788a6]">
//             Our aquaculture blog
//           </p>

//           <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-[#123d62] sm:text-5xl lg:text-[56px]">
//             Aquaculture resources and insights
//           </h1>

//           <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#60798a] sm:text-lg">
//             Practical guidance on shrimp health, pond water quality,
//             probiotics, nutrition, disease prevention and sustainable
//             aquaculture.
//           </p>

//           <form
//             action="/blog"
//             method="get"
//             role="search"
//             className="mx-auto mt-8 flex max-w-xl items-center gap-3"
//           >
//             <div className="relative min-w-0 flex-1">
//               <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#718798]">
//                 <SearchIcon />
//               </span>

//               <input
//                 type="search"
//                 name="search"
//                 defaultValue={searchValue}
//                 aria-label="Search aquaculture articles"
//                 placeholder="Search aquaculture articles"
//                 autoComplete="off"
//                 className="h-12 w-full rounded-lg border border-[#cbd8df] bg-white pl-12 pr-4 text-sm text-[#18384c] shadow-sm outline-none transition placeholder:text-[#8799a6] focus:border-[#0788a6] focus:ring-4 focus:ring-[#0788a6]/10"
//               />
//             </div>

//             <button
//               type="submit"
//               className="h-12 shrink-0 rounded-lg bg-[#0788a6] px-6 text-sm font-bold text-white shadow-sm transition hover:bg-[#066f89] focus:outline-none focus:ring-4 focus:ring-[#0788a6]/20"
//             >
//               Search
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* =====================================================
//           BLOG CARDS
//       ===================================================== */}
//       <section className="relative z-10 -mt-20 px-5 pb-24 sm:px-7 lg:px-8">
//         <div className="mx-auto max-w-7xl">
//           {query && (
//             <div className="mb-7 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-[#e2e9ed] bg-white px-5 py-4 shadow-sm">
//               <p className="text-sm text-[#65798a]">
//                 Showing{" "}
//                 <span className="font-bold text-[#123d62]">
//                   {filteredBlogs.length}
//                 </span>{" "}
//                 result{filteredBlogs.length !== 1 ? "s" : ""} for{" "}
//                 <span className="font-bold text-[#123d62]">
//                   “{searchValue}”
//                 </span>
//               </p>

//               <Link
//                 href="/blog"
//                 className="text-sm font-bold text-[#0788a6] transition hover:text-[#066f89] hover:underline"
//               >
//                 Clear search
//               </Link>
//             </div>
//           )}

//           {filteredBlogs.length > 0 ? (
//             <div className="grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
//               {filteredBlogs.map((blog, index) => (
//                 <article
//                   key={blog.slug}
//                   className="group flex min-h-full flex-col bg-white p-5 shadow-[0_12px_35px_rgba(18,61,98,0.10)] ring-1 ring-[#e5ecef] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(18,61,98,0.15)]"
//                 >
//                   {/* Article image */}
//                   <Link
//                     href={`/blog/${blog.slug}`}
//                     className="relative block aspect-[16/10] overflow-hidden bg-[#e8f1f4]"
//                   >
//                     <Image
//                       src={blog.image}
//                       alt={blog.imageAlt || blog.title}
//                       fill
//                       priority={index < 3 && !query}
//                       sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
//                       className="object-cover transition duration-500 group-hover:scale-[1.04]"
//                     />

//                     <div className="absolute inset-0 bg-[#123d62]/0 transition duration-300 group-hover:bg-[#123d62]/10" />
//                   </Link>

//                   {/* Article information */}
//                   <div className="flex flex-1 flex-col px-1 pb-2 pt-6">
//                     <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#0788a6]">
//                       {blog.category}
//                     </p>

//                     <div className="mt-3 flex items-start justify-between gap-4">
//                       <h2 className="text-xl font-bold leading-snug tracking-[-0.02em] text-[#162d3e] sm:text-[22px]">
//                         <Link
//                           href={`/blog/${blog.slug}`}
//                           className="transition hover:text-[#0788a6]"
//                         >
//                           {blog.title}
//                         </Link>
//                       </h2>

//                       <Link
//                         href={`/blog/${blog.slug}`}
//                         aria-label={`Read ${blog.title}`}
//                         className="mt-1 shrink-0 text-[#162d3e] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#0788a6]"
//                       >
//                         <ArrowIcon />
//                       </Link>
//                     </div>

//                     <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#65798a]">
//                       {blog.description}
//                     </p>

//                     {/* Author information */}
//                     <div className="mt-auto flex items-center gap-3 pt-8">
//                       <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#def2f6] text-xs font-bold text-[#0788a6]">
//                         IB
//                       </div>

//                       <div className="min-w-0">
//                         <p className="truncate text-sm font-semibold text-[#1d3446]">
//                           {blog.author?.name || "Innovare Biopharma"}
//                         </p>

//                         <time
//                           dateTime={blog.date}
//                           className="mt-0.5 block text-xs text-[#758999]"
//                         >
//                           {formatDate(blog.date)}
//                         </time>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           ) : (
//             <div className="border border-dashed border-[#bcd3dc] bg-white px-6 py-20 text-center shadow-sm">
//               <h2 className="text-2xl font-bold text-[#123d62]">
//                 No aquaculture articles found
//               </h2>

//               <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#6d8291]">
//                 We could not find an article matching “{searchValue}”. Try
//                 searching for shrimp health, water quality, pond management,
//                 nutrition or probiotics.
//               </p>

//               <Link
//                 href="/blog"
//                 className="mt-6 inline-flex rounded-lg bg-[#0788a6] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#066f89]"
//               >
//                 View all articles
//               </Link>
//             </div>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }
import type { Metadata } from "next";
import Link from "next/link";

// import { blogs } from "@/data/blogs";
import {blogs} from '@/data/blogs';

const SITE_URL = "https://www.innovarebiopharma.com";

export const metadata: Metadata = {
  title: "Aquaculture Blog | Shrimp Health & Pond Management",
  description:
    "Explore practical aquaculture articles about shrimp health, pond water quality, probiotics, nutrition, disease prevention and sustainable shrimp farming.",
  keywords: [
    "aquaculture blog",
    "shrimp farming",
    "shrimp health",
    "pond water quality",
    "shrimp probiotics",
    "shrimp nutrition",
    "shrimp disease prevention",
    "sustainable aquaculture",
    "pond management",
    "Innovare Biopharma",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Aquaculture Resources and Insights | Innovare Biopharma",
    description:
      "Practical knowledge for healthier shrimp, stable ponds and sustainable aquaculture.",
    url: `${SITE_URL}/blog`,
    siteName: "Innovare Biopharma",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aquaculture Resources and Insights",
    description:
      "Explore practical guidance on shrimp health, water quality, nutrition and sustainable aquaculture.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

type BlogPageProps = {
  searchParams: Promise<{
    search?: string;
  }>;
};

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <circle
        cx="11"
        cy="11"
        r="7"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="m16.5 16.5 4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function formatBlogDate(date: string) {
  const parsedDate = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default async function BlogPage({
  searchParams,
}: BlogPageProps) {
  const params = await searchParams;
  const searchValue = params.search?.trim() ?? "";
  const query = searchValue.toLowerCase();

  const filteredBlogs = blogs.filter((blog) => {
    if (!query) return true;

    const searchableText = [
      blog.title,
      blog.description,
      blog.category,
      blog.author.name,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(query);
  });

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Innovare Biopharma Aquaculture Blog",
    description:
      "Aquaculture articles covering shrimp health, pond water quality, probiotics, nutrition and sustainable farming.",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Innovare Biopharma",
      url: SITE_URL,
    },
    blogPost: blogs.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.description,
      image: blog.image,
      datePublished: blog.date,
      dateModified: blog.date,
      url: `${SITE_URL}/blog/${blog.slug}`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/blog/${blog.slug}`,
      },
      author: {
        "@type": "Organization",
        name: blog.author.name,
      },
      publisher: {
        "@type": "Organization",
        name: "Innovare Biopharma",
        url: SITE_URL,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-[#152f43]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* =====================================================
          REFERENCE-STYLE INTRODUCTION
          This begins directly after the existing navbar.
      ===================================================== */}
      <section className="relative isolate min-h-[520px] overflow-hidden border-b border-[#dce9ee] px-5 py-16 sm:px-7 sm:py-20 lg:px-8">
  {/* Aquaculture background */}
  <img
    src="/images/bloghero.png"
    alt=""
    aria-hidden="true"
    className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
  />
        {/* Subtle clean aquaculture background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
        >
          <div className="absolute -left-24 -top-32 h-80 w-80 rounded-full border border-[#d8eef2]" />

          <div className="absolute -left-10 -top-20 h-80 w-80 rounded-full border border-[#e6f4f6]" />

          <div className="absolute -bottom-40 -right-24 h-[420px] w-[420px] rounded-full border border-[#d8eef2]" />

          <div className="absolute -bottom-28 -right-10 h-[340px] w-[340px] rounded-full border border-[#e5f4f6]" />

          <div className="absolute left-[15%] top-10 h-24 w-24 rounded-full bg-[#edf9fa] blur-3xl" />

          <div className="absolute right-[18%] top-12 h-32 w-32 rounded-full bg-[#dff3f7] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center pt-20">
          <p className="inline-flex rounded-full bg-[#e7f5f8] px-4 py-2 text-xs font-bold text-[#0788a6]">
            Aquaculture blog
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-[-0.04em] text-[#123d62] sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
            Discover our latest aquaculture insights
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#617a8a] sm:text-lg">
            Practical knowledge on shrimp health, pond water quality,
            probiotics, nutrition and responsible aquaculture management.
          </p>

          <form
            action="/blog"
            method="get"
            role="search"
            className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row"
          >
            <div className="relative min-w-0 flex-1">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8195a2]">
                <SearchIcon />
              </span>

              <input
                type="search"
                name="search"
                defaultValue={searchValue}
                aria-label="Search aquaculture articles"
                placeholder="Search shrimp health, water quality or nutrition"
                autoComplete="off"
                className="h-12 w-full rounded-lg border border-[#ccdbe1] bg-white pl-12 pr-4 text-sm text-[#17384d] shadow-sm outline-none transition placeholder:text-[#8a9ba7] hover:border-[#9fc3ce] focus:border-[#0788a6] focus:ring-4 focus:ring-[#0788a6]/10"
              />
            </div>

            <button
              type="submit"
              className="h-12 rounded-lg bg-[#0788a6] px-7 text-sm font-bold text-white shadow-sm transition hover:bg-[#066f89] focus:outline-none focus:ring-4 focus:ring-[#0788a6]/20"
            >
              Find articles
            </button>
          </form>
        </div>
      </section>

      {/* =====================================================
          BLOG ARTICLE GRID
      ===================================================== */}
      <section className="bg-[#f7fafb] px-5 py-14 sm:px-7 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0788a6]">
                Knowledge centre
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-[-0.03em] text-[#123d62]">
                {query ? "Search results" : "Latest articles"}
              </h2>
            </div>

            {query && (
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-sm text-[#667d8c]">
                  {filteredBlogs.length} result
                  {filteredBlogs.length !== 1 ? "s" : ""} for{" "}
                  <span className="font-bold text-[#123d62]">
                    “{searchValue}”
                  </span>
                </p>

                <Link
                  href="/blog"
                  className="text-sm font-bold text-[#0788a6] hover:underline"
                >
                  Clear search
                </Link>
              </div>
            )}
          </div>

          {filteredBlogs.length > 0 ? (
            <div className="grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((blog, index) => (
                <article
                  key={blog.slug}
                  className="group flex min-h-full flex-col rounded-xl bg-white p-5 shadow-[0_10px_32px_rgba(23,57,77,0.08)] ring-1 ring-[#e1eaee] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(23,57,77,0.13)]"
                >
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="relative block aspect-[16/10] overflow-hidden rounded-lg bg-[#e5f0f3]"
                  >
                    <img
                      src={blog.image}
                      alt={blog.imageAlt}
                      loading={index < 3 && !query ? "eager" : "lazy"}
                      fetchPriority={index === 0 && !query ? "high" : "auto"}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#102f42]/15 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  </Link>

                  <div className="flex flex-1 flex-col px-1 pb-1 pt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.11em] text-[#0788a6]">
                      {blog.category}
                    </p>

                    <div className="mt-3 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold leading-snug tracking-[-0.02em] text-[#173247] sm:text-[22px]">
                        <Link
                          href={`/blog/${blog.slug}`}
                          className="transition hover:text-[#0788a6]"
                        >
                          {blog.title}
                        </Link>
                      </h3>

                      <Link
                        href={`/blog/${blog.slug}`}
                        aria-label={`Read ${blog.title}`}
                        className="mt-1 shrink-0 text-[#173247] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#0788a6]"
                      >
                        <ArrowIcon />
                      </Link>
                    </div>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#667c8b]">
                      {blog.description}
                    </p>

                    <div className="mt-auto flex items-center gap-3 pt-8">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#def2f6] text-xs font-bold text-[#0788a6]">
                        IB
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-[#1d374a]">
                          {blog.author.name}
                        </p>

                        <time
                          dateTime={blog.date}
                          className="mt-0.5 block text-xs text-[#788d9b]"
                        >
                          {formatBlogDate(blog.date)}
                        </time>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-[#b9d1da] bg-white px-6 py-20 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-[#123d62]">
                No aquaculture articles found
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#687e8d]">
                We could not find an article matching “{searchValue}”. Try
                searching for shrimp health, pond water, probiotics, nutrition
                or sustainable farming.
              </p>

              <Link
                href="/blog"
                className="mt-6 inline-flex rounded-lg bg-[#0788a6] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#066f89]"
              >
                View all articles
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}