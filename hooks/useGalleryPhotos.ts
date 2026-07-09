// hooks/useGalleryPhotos.ts
// Fetches photos from our Cloudinary API route with caching + loading states

import { useState, useEffect, useCallback } from "react";
import type { CloudinaryResource } from "@/lib/cloudinary";

type GalleryState = {
  photos: CloudinaryResource[];
  total: number;
  loading: boolean;
  error: string | null;
};

// Simple in-memory cache so navigating back doesn't re-fetch
const cache = new Map<string, CloudinaryResource[]>();

export function useGalleryPhotos(eventId: string | null) {
  const [state, setState] = useState<GalleryState>({
    photos: [],
    total: 0,
    loading: false,
    error: null,
  });

  const fetchPhotos = useCallback(async (id: string) => {
    // Cache hit
    if (cache.has(id)) {
      const photos = cache.get(id)!;
      setState({ photos, total: photos.length, loading: false, error: null });
      return;
    }

    setState(s => ({ ...s, loading: true, error: null }));

    try {
      const res = await fetch(`/api/gallery/${id}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      cache.set(id, data.resources);
      setState({ photos: data.resources, total: data.total, loading: false, error: null });
    } catch (err: any) {
      setState(s => ({ ...s, loading: false, error: err.message }));
    }
  }, []);

  useEffect(() => {
    if (!eventId) {
      setState({ photos: [], total: 0, loading: false, error: null });
      return;
    }
    fetchPhotos(eventId);
  }, [eventId, fetchPhotos]);

  return state;
}