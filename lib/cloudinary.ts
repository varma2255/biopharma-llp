// ─── Cloudinary config ────────────────────────────────────────────────────────
export const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;

// Folder structure in Cloudinary:
//  innovare/
//  ├── product-launch/
//  ├── annual-meet/
//  ├── aquaex-22/
//  ├── aquaex-23/
//  ├── aquaex-25/
//  └── tours/
//      ├── vietnam/
//      ├── thailand/
//      └── indonesia/

export type CloudinaryResource = {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  context?: { custom?: { caption?: string } };
};

// ─── URL builders ─────────────────────────────────────────────────────────────

/** Full-quality image (used in lightbox) */
export function cloudinaryUrl(publicId: string, transforms = ""): string {
  const base = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
  const t = transforms ? `${transforms}/` : "f_auto,q_auto/";
  return `${base}/${t}${publicId}`;
}

/** Card cover thumbnail — cropped square, fast */
export function coverUrl(publicId: string, w = 640, h = 420): string {
  return cloudinaryUrl(publicId, `c_fill,g_auto,w_${w},h_${h},f_auto,q_auto`);
}

/** Thumbnail strip in lightbox */
export function thumbUrl(publicId: string, w = 180): string {
  return cloudinaryUrl(publicId, `c_fill,g_auto,w_${w},h_120,f_auto,q_70`);
}

/** Blur placeholder (tiny, base64-able) */
export function blurUrl(publicId: string): string {
  return cloudinaryUrl(publicId, `w_32,h_21,f_auto,q_1,e_blur:1000`);
}

/** next/image compatible loader */
export function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  // src is just the public_id when using the loader
  return cloudinaryUrl(src, `w_${width},f_auto,q_${quality ?? 75}`);
}

// ─── Aspect ratio helper ──────────────────────────────────────────────────────
export function getAspectRatio(
  width: number,
  height: number
): "portrait" | "landscape" | "square" {
  const ratio = width / height;
  if (ratio > 1.1) return "landscape";
  if (ratio < 0.9) return "portrait";
  return "square";
}