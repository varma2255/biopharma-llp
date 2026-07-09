"use client";

import { CartProvider } from "@/components/cart-content";

export function Providers({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}