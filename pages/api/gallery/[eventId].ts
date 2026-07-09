// // pages/api/gallery/[eventId].ts
// // OR app/api/gallery/[eventId]/route.ts (App Router version below)
// //
// // This fetches all photos from a Cloudinary folder for a given event.
// // Requires: CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

// import type { NextApiRequest, NextApiResponse } from "next";
// import { v2 as cloudinary } from "cloudinary";
// import type { CloudinaryResource } from "@/lib/cloudinary";

// cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Maps our event IDs to Cloudinary folder paths
// const EVENT_FOLDERS: Record<string, string> = {
//   "product-launch": "innovare/product-launch",
//   "annual-meet":    "innovare/annual-meet",
//   "aquaex-22":      "innovare/aquaex-22",
//   "aquaex-23":      "innovare/aquaex-23",
//   "aquaex-25":      "innovare/aquaex-25",
//   "tour-vietnam":   "innovare/tours/vietnam",
//   "tour-thailand":  "innovare/tours/thailand",
//   "tour-indonesia": "innovare/tours/indonesia",
// };

// export type GalleryApiResponse = {
//   resources: CloudinaryResource[];
//   total: number;
//   error?: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<GalleryApiResponse>
// ) {
//   if (req.method !== "GET") {
//     return res.status(405).json({ resources: [], total: 0, error: "Method not allowed" });
//   }

//   const { eventId } = req.query;
//   const folder = EVENT_FOLDERS[eventId as string];

//   if (!folder) {
//     return res.status(404).json({ resources: [], total: 0, error: "Event not found" });
//   }

//   try {
//     const result = await cloudinary.search
//       .expression(`folder:${folder}`)
//       .with_field("context")       // fetch caption metadata if set
//       .with_field("image_metadata")
//       .sort_by("filename", "asc")
//       .max_results(100)
//       .execute();

//     const resources: CloudinaryResource[] = result.resources.map((r: any) => ({
//       public_id: r.public_id,
//       secure_url: r.secure_url,
//       width: r.width,
//       height: r.height,
//       format: r.format,
//       context: r.context,
//     }));

//     // Cache for 60 seconds (ISR-friendly)
//     res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
//     return res.status(200).json({ resources, total: resources.length });
//   } catch (err: any) {
//     console.error("Cloudinary error:", err);
//     return res.status(500).json({ resources: [], total: 0, error: err.message });
//   }
// }

// // ─── App Router version (if using /app directory) ────────────────────────────
// // Save this separately as app/api/gallery/[eventId]/route.ts
// //
// // import { NextRequest, NextResponse } from "next/server";
// // import { v2 as cloudinary } from "cloudinary";
// //
// // export async function GET(req: NextRequest, { params }: { params: { eventId: string } }) {
// //   cloudinary.config({ ... });
// //   const folder = EVENT_FOLDERS[params.eventId];
// //   ...same logic as above...
// //   return NextResponse.json({ resources, total }, {
// //     headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" }
// //   });
// // }
// pages/api/gallery/[eventId].ts
// Reads photos directly from /public/product/ folder — no Cloudinary needed

import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

// Maps event IDs to the actual filenames in /public/product/
const EVENT_PHOTOS: Record<string, { src: string; caption: string }[]> = {
  "product-launch": [
    { src: "/product/4T2A9983.jpg",       caption: "Product range display — i-Minvare & i-Geoprovare lineup" },
    { src: "/product/4T2A9960 Full.jpg",  caption: "Product handover ceremony with chief guest" },
    { src: "/product/4T2A9996.jpg",       caption: "i-Minvare FM presented to distinguished guest" },
    { src: "/product/4T2A9952.jpg",       caption: "Product walkthrough and discussion with VIP guests" },
  ],
  "annual-meet": [
    { src: "/product/SRI04515.JPG", caption: "Annual Meet 2022 — Opening Ceremony" },
    { src: "/product/SRI04531.JPG", caption: "Annual Meet 2022 — Panel Discussion" },
    { src: "/product/SRI04534.JPG", caption: "Annual Meet 2022 — Networking Session" },
    { src: "/product/SRI04547.JPG", caption: "Annual Meet 2022 — Research Presentation" },
    { src: "/product/SRI04549.JPG", caption: "Annual Meet 2022 — Team Photo" },
    { src: "/product/SRI04550.JPG", caption: "Annual Meet 2022 — Guest Address" },
    { src: "/product/SRI04581.JPG", caption: "Annual Meet 2022 — Award Ceremony" },
    { src: "/product/SRI04607.JPG", caption: "Annual Meet 2022 — Group Discussion" },
    { src: "/product/SRI04637.JPG", caption: "Annual Meet 2022 — Keynote Speech" },
    { src: "/product/SRI04682.JPG", caption: "Annual Meet 2022 — Exhibition Stall" },
    { src: "/product/SRI04734.JPG", caption: "Annual Meet 2022 — Cultural Programme" },
    { src: "/product/SRI04751.JPG", caption: "Annual Meet 2022 — Felicitation" },
    { src: "/product/SRI04800.JPG", caption: "Annual Meet 2022 — Valedictory" },
    { src: "/product/SRI04805.JPG", caption: "Annual Meet 2022 — Group Photo" },
  ],
  "aquaex-22": [
    { src: "/product/aa.jpeg",     caption: "Aquaex 2022 — Exhibition Stall" },
    { src: "/product/avd.jpeg",    caption: "Aquaex 2022 — Product Display" },
    { src: "/product/bjh.jpeg",    caption: "Aquaex 2022 — Visitor Interaction" },
    { src: "/product/eight.jpeg",  caption: "Aquaex 2022 — Technical Discussion" },
    { src: "/product/eleven.jpeg", caption: "Aquaex 2022 — Demo Session" },
    { src: "/product/four.jpeg",   caption: "Aquaex 2022 — Product Brochures" },
    { src: "/product/jas.jpeg",    caption: "Aquaex 2022 — Product Walkthrough" },
    { src: "/product/seven.jpeg",  caption: "Aquaex 2022 — Product Close-up" },
    { src: "/product/six.jpeg",    caption: "Aquaex 2022 — Team Interaction" },
    { src: "/product/teh.jpeg",    caption: "Aquaex 2022 — Valedictory" },
    { src: "/product/ten.jpeg",    caption: "Aquaex 2022 — Group Selfie" },
    { src: "/product/three.jpeg",  caption: "Aquaex 2022 — Hall View" },
    { src: "/product/twelev.jpeg", caption: "Aquaex 2022 — Award Ceremony" },
    { src: "/product/two.jpeg",    caption: "Aquaex 2022 — Farmer Demo" },
    { src: "/product/uo.jpeg",     caption: "Aquaex 2022 — Final Day" },
    { src: "/product/vah.jpeg",    caption: "Aquaex 2022 — Wrap-up" },
  ],
  "aquaex-23": [
    { src: "/product/adfd.jpeg",  caption: "Aquaex 2025 — Team Gathering" },
    { src: "/product/df.jpeg",    caption: "Aquaex 2025 — Farmer Engagement" },
    { src: "/product/gad.jpeg",   caption: "Aquaex 2025 — Industry Networking" },
    { src: "/product/gxg.jpeg",   caption: "Aquaex 2025 — Team at Stall" },
    { src: "/product/hg.jpeg",    caption: "Aquaex 2025 — Opening Ceremony" },
    { src: "/product/hjkl.jpeg",  caption: "Aquaex 2025 — Guest Visit" },
    { src: "/product/hvg.jpeg",   caption: "Aquaex 2025 — Seminar Session" },
    { src: "/product/hw.jpeg",    caption: "Aquaex 2025 — Stall Overview" },
    { src: "/product/jj.jpeg",    caption: "Aquaex 2025 — Exhibitor Meeting" },
    { src: "/product/jkk.jpeg",   caption: "Aquaex 2025 — Stall Setup" },
    { src: "/product/jvs.jpeg",   caption: "Aquaex 2025 — Industry Leaders" },
    { src: "/product/kjk.jpeg",   caption: "Aquaex 2025 — Cover Shot" },
    { src: "/product/kl.jpeg",    caption: "Aquaex 2025 — Delegate Registration" },
    { src: "/product/mh.jpeg",    caption: "Aquaex 2025 — Morning Session" },
    { src: "/product/pkn.jpeg",   caption: "Aquaex 2025 — Closing Session" },
    { src: "/product/kp;.jpeg",   caption: "Aquaex 2025 — Panel Discussion" },
  ],
  "aquaex-25": [
    { src: "/product/jkk.jpeg",  caption: "Aquaex 2022 — Stall Setup" },
    { src: "/product/gvg.jpeg",  caption: "Aquaex 2022 — Group Photo" },
    { src: "/product/jnjm.jpeg", caption: "Aquaex 2022 — Visitors at Display" },
    { src: "/product/nine.jpeg", caption: "Aquaex 2022 — Networking" },
  ],
  "tour-vietnam":   [],
  "tour-thailand":  [],
  "tour-indonesia": [],
};

export type PhotoItem = {
  src: string;
  caption: string;
};

export type GalleryApiResponse = {
  photos: PhotoItem[];
  total: number;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GalleryApiResponse>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ photos: [], total: 0, error: "Method not allowed" });
  }

  const { eventId } = req.query;
  const photos = EVENT_PHOTOS[eventId as string];

  if (!photos) {
    return res.status(404).json({ photos: [], total: 0, error: "Event not found" });
  }

  // Optional: verify files actually exist on disk (dev safety check)
  const publicDir = path.join(process.cwd(), "public");
  const verified = photos.filter(p => {
    try {
      return fs.existsSync(path.join(publicDir, p.src));
    } catch {
      return true; // skip check if it fails, let browser 404 naturally
    }
  });

  res.setHeader("Cache-Control", "public, s-maxage=3600");
  return res.status(200).json({ photos: verified, total: verified.length });
}