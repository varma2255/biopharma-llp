// import { MetadataRoute } from "next";

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = "https://innovarebiopharma.com";

//   return [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 1,
//     },
//     {
//       url: `${baseUrl}/about`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/our-solutions`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/products`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/sustainability`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/certifications`,
//       lastModified: new Date(),
//       changeFrequency: "yearly",
//       priority: 0.6,
//     },
//     {
//       url: `${baseUrl}/event`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/contact`,
//       lastModified: new Date(),
//       changeFrequency: "yearly",
//       priority: 0.8,
//     },
//   ];
// }
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.innovarebiopharma.com";
  const lastModified = new Date();

  // Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sustainability`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/certifications`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/event`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];

  // Dynamic Solution Pages
  const solutionPages = [
    "nutrition",
    // Add more solution slugs here
    // "health-management",
    // "water-quality",
    // "pond-management",
  ].map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Dynamic Product Pages
  const productPages = [
    // Example:
    // "probiotic-plus",
    // "aqua-mineral",
    // "vitamin-c",
  ].map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    ...staticPages,
    ...solutionPages,
    ...productPages,
  ];
}