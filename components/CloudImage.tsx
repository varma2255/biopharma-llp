// components/CloudImage.tsx
// Drop-in replacement for <img> that uses Cloudinary transformations
// + blur-up loading effect without next/image (works in /pages and /app)

"use client";

import { useState, useRef, useEffect } from "react";
import { cloudinaryUrl, blurUrl } from "@/lib/cloudinary";

interface CloudImageProps {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
  /** Cloudinary transform string, e.g. "c_fill,g_auto,w_640,h_420,f_auto,q_auto" */
  transform?: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  objectFit?: "cover" | "contain" | "fill";
  onLoad?: () => void;
}

export default function CloudImage({
  publicId,
  alt,
  width,
  height,
  transform,
  className,
  style,
  priority = false,
  objectFit = "cover",
  onLoad,
}: CloudImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Build URLs
  const src = transform
    ? cloudinaryUrl(publicId, transform)
    : cloudinaryUrl(publicId, `w_${width ?? 1200},f_auto,q_auto`);
  const placeholder = blurUrl(publicId);

  // If image is already cached (browser), mark as loaded immediately
  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
      onLoad?.();
    }
  }, [onLoad]);

  // Responsive srcSet — ask Cloudinary for multiple widths
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const base = `https://res.cloudinary.com/${cloudName}/image/upload`;
  const srcSet = [400, 640, 960, 1280, 1920]
    .map(w => `${base}/w_${w},f_auto,q_auto/${publicId} ${w}w`)
    .join(", ");

  return (
    <div
      style={{
        position: "relative",
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "100%",
        overflow: "hidden",
        ...style,
      }}
      className={className}
    >
      {/* Blur placeholder */}
      <img
        src={placeholder}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit,
          filter: "blur(20px)",
          transform: "scale(1.05)",
          opacity: loaded ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Real image */}
      <img
        ref={imgRef}
        src={src}
        srcSet={srcSet}
        sizes={width ? `${width}px` : "(max-width: 768px) 100vw, 50vw"}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => {
          setLoaded(true);
          onLoad?.();
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />
    </div>
  );
}

// ─── CloudImageFill ───────────────────────────────────────────────────────────
// Shorthand for position:absolute fill (used inside card containers)
export function CloudImageFill({
  publicId,
  alt,
  transform,
  priority,
}: Pick<CloudImageProps, "publicId" | "alt" | "transform" | "priority">) {
  return (
    <CloudImage
      publicId={publicId}
      alt={alt}
      transform={transform}
      priority={priority}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    />
  );
}