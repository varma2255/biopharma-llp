// // // // // // import type { Metadata } from "next";
// // // // // // import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
// // // // // // import "./globals.css";
// // // // // // import Navbar from "@/components/Navbar";


// // // // // // const playfair = Playfair_Display({
// // // // // //   subsets: ["latin"],
// // // // // //   variable: "--font-display",
// // // // // //   display: "swap",
// // // // // // });

// // // // // // const dmSans = DM_Sans({
// // // // // //   subsets: ["latin"],
// // // // // //   variable: "--font-body",
// // // // // //   display: "swap",
// // // // // // });

// // // // // // const dmMono = DM_Mono({
// // // // // //   subsets: ["latin"],
// // // // // //   weight: ["400", "500"],
// // // // // //   variable: "--font-mono",
// // // // // //   display: "swap",
// // // // // // });

// // // // // // export const metadata: Metadata = {
// // // // // //   title: "BioPharma LLP — Advanced Life Sciences Solutions",
// // // // // //   description:
// // // // // //     "Pioneering the future of pharmaceutical innovation with AI-driven research, precision medicine, and cutting-edge biotech solutions.",
// // // // // // };

// // // // // // export default function RootLayout({
// // // // // //   children,
// // // // // // }: Readonly<{
// // // // // //   children: React.ReactNode;
// // // // // // }>) {
// // // // // //   return (
// // // // // //     <html lang="en" className="scroll-smooth">
// // // // // //       <body
// // // // // //         className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} antialiased bg-[#080c0a] text-white`}
// // // // // //       >
// // // // // //         {children}
// // // // // //       </body>
// // // // // //     </html>
// // // // // //   );
// // // // // // }
// // // // // import type { Metadata } from "next";
// // // // // import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
// // // // // import "./globals.css";
// // // // // import Navbar from "@/components/Navbar";

// // // // // const playfair = Playfair_Display({
// // // // //   subsets: ["latin"],
// // // // //   variable: "--font-display",
// // // // //   display: "swap",
// // // // // });

// // // // // const dmSans = DM_Sans({
// // // // //   subsets: ["latin"],
// // // // //   variable: "--font-body",
// // // // //   display: "swap",
// // // // // });

// // // // // const dmMono = DM_Mono({
// // // // //   subsets: ["latin"],
// // // // //   weight: ["400", "500"],
// // // // //   variable: "--font-mono",
// // // // //   display: "swap",
// // // // // });

// // // // // export const metadata: Metadata = {
// // // // //   title: "BioPharma LLP — Advanced Life Sciences Solutions",
// // // // //   description:
// // // // //     "Pioneering the future of pharmaceutical innovation with AI-driven research, precision medicine, and cutting-edge biotech solutions.",
// // // // // };

// // // // // export default function RootLayout({
// // // // //   children,
// // // // // }: {
// // // // //   children: React.ReactNode;
// // // // // }) {
// // // // //   return (
// // // // //     <html lang="en" className="scroll-smooth">
// // // // //       <body
// // // // //         className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} antialiased bg-[#080c0a] text-white`}
// // // // //       >
// // // // //         {/* ✅ Navbar (same as before, just added globally) */}
// // // // //         <Navbar />

// // // // //         {/* ✅ Page Content */}
// // // // //         <main>{children}</main>
// // // // //       </body>
// // // // //     </html>
// // // // //   );
// // // // // }
// // // // import type { Metadata } from "next";
// // // // import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
// // // // import "./globals.css";
// // // // import Navbar from "@/components/Navbar";
// // // // // import { CartProvider } from "@/components/cart-content";
// // // // import { useCart } from "@/components/cart-content";
// // // // import { Providers } from "./providers";


// // // // const playfair = Playfair_Display({
// // // //   subsets: ["latin"],
// // // //   variable: "--font-display",
// // // //   display: "swap",
// // // // });

// // // // const dmSans = DM_Sans({
// // // //   subsets: ["latin"],
// // // //   variable: "--font-body",
// // // //   display: "swap",
// // // // });

// // // // const dmMono = DM_Mono({
// // // //   subsets: ["latin"],
// // // //   weight: ["400", "500"],
// // // //   variable: "--font-mono",
// // // //   display: "swap",
// // // // });

// // // // export const metadata: Metadata = {
// // // //   title: "BioPharma LLP — Advanced Life Sciences Solutions",
// // // //   description:
// // // //     "Pioneering the future of pharmaceutical innovation with AI-driven research, precision medicine, and cutting-edge biotech solutions.",
// // // // };

// // // // export default function RootLayout({
// // // //   children,
// // // // }: {
// // // //   children: React.ReactNode;
// // // // }) {
// // // //   return (
// // // //     <html lang="en" className="scroll-smooth">
// // // //       <body
// // // //         className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} antialiased bg-[#080c0a] text-white`}
// // // //       >
// // // //       <Providers>
        
// // // //           <Navbar />
// // // //           <main>{children}</main>
        
// // // //       </Providers>  
// // // //       </body>
// // // //     </html>
// // // //   );
// // // // }
// // // import type { Metadata } from "next";
// // // import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
// // // import "./globals.css";
// // // import Navbar from "@/components/Navbar";
// // // import { CartProvider } from "@/components/cart-content";
// // // import { useCart } from "@/components/cart-content";

// // // const playfair = Playfair_Display({
// // //   subsets: ["latin"],
// // //   variable: "--font-display",
// // //   display: "swap",
// // // });

// // // const dmSans = DM_Sans({
// // //   subsets: ["latin"],
// // //   variable: "--font-body",
// // //   display: "swap",
// // // });

// // // const dmMono = DM_Mono({
// // //   subsets: ["latin"],
// // //   weight: ["400", "500"],
// // //   variable: "--font-mono",
// // //   display: "swap",
// // // });

// // // export const metadata: Metadata = {
// // //   title: "BioPharma LLP — Advanced Life Sciences Solutions",
// // //   description:
// // //     "Pioneering the future of pharmaceutical innovation with AI-driven research, precision medicine, and cutting-edge biotech solutions.",
// // // };

// // // export default function RootLayout({
// // //   children,
// // // }: {
// // //   children: React.ReactNode;
// // // }) {
// // //   return (
// // //     <html lang="en" className="scroll-smooth">
// // //       <body
// // //         className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} antialiased bg-[#080c0a] text-white`}
// // //       >
// // //         <CartProvider>
// // //           <Navbar />
// // //           <main>{children}</main>
// // //         </CartProvider>
// // //       </body>
// // //     </html>
// // //   );
// // // }
// // import type { Metadata } from "next";
// // import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
// // import "./globals.css";
// // import Navbar from "@/components/Navbar";
// // import { CartProvider } from "@/components/cart-content";
// // // app/layout.tsx
// // <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />

// // const playfair = Playfair_Display({
// //   subsets: ["latin"],
// //   variable: "--font-display",
// //   display: "swap",
// // });

// // const dmSans = DM_Sans({
// //   subsets: ["latin"],
// //   variable: "--font-body",
// //   display: "swap",
// // });

// // const dmMono = DM_Mono({
// //   subsets: ["latin"],
// //   weight: ["400", "500"],
// //   variable: "--font-mono",
// //   display: "swap",
// // });

// // export const metadata: Metadata = {
// //   title: "Innovare Biopharma LLP — Aquaculture Health Solutions",
// //   description:
// //     "India's innovative manufacturer & exporter of aquaculture healthcare products. From hatchery to harvest.",
// // };

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <html lang="en" className="scroll-smooth">
// //       <body
// //         className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} antialiased`}
// //       >
// //         <CartProvider>
// //           <Navbar />
// //           <main>{children}</main>
// //         </CartProvider>
// //       </body>
// //     </html>
// //   );
// // }
// // import type { Metadata } from "next";
// // import Script from "next/script"; // ✅ add this
// // import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
// // // import "./globals.css";
// // import "./globals.css";
// // import Navbar from "@/components/Navbar";
// // import { CartProvider } from "@/components/cart-content";
// // // app/layout.tsx
// // <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />

// // const playfair = Playfair_Display({
// //   subsets: ["latin"],
// //   variable: "--font-display",
// //   display: "swap",
// // });

// // export const metadata = {
// //   icons: {
// //     icon: "/logo.png",
// //   },
// // };

// // const dmSans = DM_Sans({
// //   subsets: ["latin"],
// //   variable: "--font-body",
// //   display: "swap",
// // });

// // const dmMono = DM_Mono({
// //   subsets: ["latin"],
// //   weight: ["400", "500"],
// //   variable: "--font-mono",
// //   display: "swap",
// // });

// // export const metadata: Metadata = {
// //   title: "Innovare Biopharma LLP — Aquaculture Health Solutions",
// //   description:
// //     "India's innovative manufacturer & exporter of aquaculture healthcare products. From hatchery to harvest.",
// // };

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <html lang="en" className="scroll-smooth">
// //       <body
// //         className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} antialiased`}
// //       >
// //         {/* ✅ Razorpay script added properly */}
// //         <Script
// //           src="https://checkout.razorpay.com/v1/checkout.js"
// //           strategy="beforeInteractive"
// //         />

// //         <CartProvider>
// //           <Navbar />
// //           <main>{children}</main>
// //         </CartProvider>
// //       </body>
// //     </html>
// //   );
// // }
// import type { Metadata } from "next";
// import Script from "next/script";
// import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import { CartProvider } from "@/components/cart-content";
// import RouteLoader from "@/components/RouteLoader";
// import GlobalLoader from "@/components/GlobalLoader";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-display",
//   display: "swap",
// });

// const dmSans = DM_Sans({
//   subsets: ["latin"],
//   variable: "--font-body",
//   display: "swap",
// });

// const dmMono = DM_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-mono",
//   display: "swap",
// });

// /* ✅ SINGLE metadata export (merged properly) */
// export const metadata: Metadata = {
//   title: "Innovare Biopharma LLP — Aquaculture Health Solutions",
//   description:
//     "India's innovative manufacturer & exporter of aquaculture healthcare products. From hatchery to harvest.",
//   icons: {
//     src="/images/logo.png" // make sure this exists in /public
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body
//         className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} antialiased`}
//       >
//         {/* ✅ Razorpay script INSIDE component */}
//         <Script
//           src="https://checkout.razorpay.com/v1/checkout.js"
//           strategy="beforeInteractive"
//         />
// <GlobalLoader />
//         <CartProvider>
//           <Navbar />
//           <main>{children}</main>
//         </CartProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import GlobalLoader from "@/components/GlobalLoader";
import { CartProvider } from "@/components/cart-content";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Innovare Biopharma LLP — Aquaculture Health Solutions",
  description:
    "India's innovative manufacturer & exporter of aquaculture healthcare products.",

  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} antialiased`}
      >
        {/* Razorpay */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />

        {/* Global Page Loader */}
        <GlobalLoader />

        {/* Website */}
        <CartProvider>
          <Navbar />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}