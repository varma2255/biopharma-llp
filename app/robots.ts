// import { MetadataRoute } from "next";

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: [
//       {
//         userAgent: "*",
//         allow: "/",
//       },
//     ],
//     sitemap: "https://innovarebiopharma.com/sitemap.xml",
//   };
// }
// // import { MetadataRoute } from "next";

// // export default function robots(): MetadataRoute.Robots {
// //   const baseUrl = "https://www.innovarebiopharma.com";

// //   return {
// //     rules: [
// //       {
// //         userAgent: "*",
// //         allow: "/",
// //         disallow: [
// //           "/api/",
// //           "/checkout",
// //           "/cart",
// //           "/orders",
// //           "/order-success",
// //         ],
// //       },
// //     ],
// //     sitemap: `${baseUrl}/sitemap.xml`,
// //     host: baseUrl,
// //   };
// // }
// // import { MetadataRoute } from "next";

// // export default function robots(): MetadataRoute.Robots {
// //   const baseUrl = "https://www.innovarebiopharma.com";

// //   return {
// //     rules: [
// //       {
// //         userAgent: "*",
// //         allow: "/",
// //         disallow: [
// //           "/api/",
// //           "/checkout",
// //           "/cart",
// //           "/orders",
// //           "/order-success",
// //         ],
// //       },
// //     ],
// //     sitemap: `${baseUrl}/sitemap.xml`,
// //     host: baseUrl,
// //   };
// // }
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.innovarebiopharma.com/sitemap.xml",
  };
}