// // "use client"
// // import Navbar from "@/components/Navbar";
// // import Hero from "@/components/Hero";
// // import Partners from "@/components/Partners";
// // import Solutions from "@/components/Solutions";
// // import Features from "@/components/Features";
// // import Stats from "@/components/Stats";
// // import Pipeline from "@/components/Pipeline";
// // import Testimonials from "@/components/Testimonials";
// // import CTA from "@/components/CTA";
// // import Footer from "@/components/Footer";

// // export default function Home() {
// //   return (
// //     <main className="relative">
// //       <Navbar />
// //       <Hero />
// //       <Partners />
// //       <Solutions />
// //       <Stats />
// //       <Features />
// //       <Pipeline />
// //       <Testimonials />
// //       <CTA />
// //       <Footer />
// //     </main>
// //   );
// // }
// "use client";

// import Hero from "@/components/Hero";
// import PromoBar from "@/components/PromoBar";
// export default function Home() {
//   return (
//     <>
//       <PromoBar />
//       <Hero />
     
//     </>
//   );
// }
// "use client";

// import Hero from "@/components/Hero";
// import PromoBar from "@/components/PromoBar";
// import ProductLaunch from "@/components/ProductLaunch";

// export default function Home() {
//   return (
//     <>
//       <PromoBar />

//       <Hero />

//       {/* Product Launch - completely separate from Hero */}
//       <ProductLaunch />
//     </>
//   );
// }
"use client";

import Hero from "@/components/Hero";
import ProductLaunch from "@/components/ProductLaunch";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Product Launch - completely separate from Hero */}
      {/* <ProductLaunch /> */}
    </>
  );
}