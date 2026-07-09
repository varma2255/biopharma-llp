// // // // // // // // app/layout.tsx
// // // // // // // import { CartProvider } from "@/app/context/cart-context";
// // // // // // // export default function RootLayout({ children }) {
// // // // // // //   return <html><body><CartProvider>{children}</CartProvider></body></html>;
// // // // // // // }
// // // // // // "use client";
// // // // // // import { createContext, useContext, useState, ReactNode } from "react";

// // // // // // export interface CartItem {
// // // // // //   id: number;
// // // // // //   name: string;
// // // // // //   type: string;
// // // // // //   price: number;
// // // // // //   image: string;
// // // // // //   qty: number;
// // // // // //   pack: string;
// // // // // // }

// // // // // // interface CartContextType {
// // // // // //   cartItems: CartItem[];
// // // // // //   setCartItems: (items: CartItem[]) => void;
// // // // // //   addToCart: (item: Omit<CartItem, "qty">, qty?: number) => void;
// // // // // //   removeFromCart: (id: number) => void;
// // // // // //   updateQty: (id: number, delta: number) => void;
// // // // // //   totalCartQty: number;
// // // // // //   totalPrice: number;
// // // // // //   clearCart: () => void;
// // // // // // }

// // // // // // const CartContext = createContext<CartContextType | null>(null);

// // // // // // export function CartProvider({ children }: { children: ReactNode }) {
// // // // // //   const [cartItems, setCartItems] = useState<CartItem[]>([]);

// // // // // //   function addToCart(item: Omit<CartItem, "qty">, qty = 1) {
// // // // // //     setCartItems(prev => {
// // // // // //       const existing = prev.find(i => i.id === item.id);
// // // // // //       if (existing) {
// // // // // //         return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + qty } : i);
// // // // // //       }
// // // // // //       return [...prev, { ...item, qty }];
// // // // // //     });
// // // // // //   }

// // // // // //   function removeFromCart(id: number) {
// // // // // //     setCartItems(prev => prev.filter(i => i.id !== id));
// // // // // //   }

// // // // // //   function updateQty(id: number, delta: number) {
// // // // // //     setCartItems(prev =>
// // // // // //       prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)
// // // // // //     );
// // // // // //   }

// // // // // //   function clearCart() {
// // // // // //     setCartItems([]);
// // // // // //   }

// // // // // //   const totalCartQty = cartItems.reduce((s, i) => s + i.qty, 0);
// // // // // //   const totalPrice = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

// // // // // //   return (
// // // // // //     <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart, updateQty, totalCartQty, totalPrice, clearCart }}>
// // // // // //       {children}
// // // // // //     </CartContext.Provider>
// // // // // //   );
// // // // // // }

// // // // // // export function useCart() {
// // // // // //   const ctx = useContext(CartContext);
// // // // // //   if (!ctx) throw new Error("useCart must be used within CartProvider");
// // // // // //   return ctx;
// // // // // // }
// // // // // "use client";
// // // // // import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// // // // // export interface CartItem {
// // // // //   id: number;
// // // // //   name: string;
// // // // //   type: string;
// // // // //   price: number;
// // // // //   image: string;
// // // // //   qty: number;
// // // // //   pack: string;
// // // // // }

// // // // // interface CartContextType {
// // // // //   cartItems: CartItem[];
// // // // //   setCartItems: (items: CartItem[]) => void;
// // // // //   addToCart: (item: Omit<CartItem, "qty">, qty?: number) => void;
// // // // //   removeFromCart: (id: number) => void;
// // // // //   updateQty: (id: number, delta: number) => void;
// // // // //   totalCartQty: number;
// // // // //   totalPrice: number;
// // // // //   clearCart: () => void;
// // // // // }

// // // // // const CartContext = createContext<CartContextType | null>(null);

// // // // // const STORAGE_KEY = "innovare_cart";

// // // // // export function CartProvider({ children }: { children: ReactNode }) {
// // // // //   const [cartItems, setCartItemsState] = useState<CartItem[]>([]);
// // // // //   const [hydrated, setHydrated] = useState(false);

// // // // //   // Load from localStorage on first mount
// // // // //   useEffect(() => {
// // // // //     try {
// // // // //       const stored = localStorage.getItem(STORAGE_KEY);
// // // // //       if (stored) {
// // // // //         setCartItemsState(JSON.parse(stored));
// // // // //       }
// // // // //     } catch (e) {}
// // // // //     setHydrated(true);
// // // // //   }, []);

// // // // //   // Save to localStorage whenever cart changes
// // // // //   useEffect(() => {
// // // // //     if (!hydrated) return;
// // // // //     try {
// // // // //       localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
// // // // //     } catch (e) {}
// // // // //   }, [cartItems, hydrated]);

// // // // //   function setCartItems(items: CartItem[]) {
// // // // //     setCartItemsState(items);
// // // // //   }

// // // // //   function addToCart(item: Omit<CartItem, "qty">, qty = 1) {
// // // // //     setCartItemsState(prev => {
// // // // //       const existing = prev.find(i => i.id === item.id);
// // // // //       if (existing) {
// // // // //         return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + qty } : i);
// // // // //       }
// // // // //       return [...prev, { ...item, qty }];
// // // // //     });
// // // // //   }

// // // // //   function removeFromCart(id: number) {
// // // // //     setCartItemsState(prev => prev.filter(i => i.id !== id));
// // // // //   }

// // // // //   function updateQty(id: number, delta: number) {
// // // // //     setCartItemsState(prev =>
// // // // //       prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)
// // // // //     );
// // // // //   }

// // // // //   function clearCart() {
// // // // //     setCartItemsState([]);
// // // // //     try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
// // // // //   }

// // // // //   const totalCartQty = cartItems.reduce((s, i) => s + i.qty, 0);
// // // // //   const totalPrice   = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

// // // // //   return (
// // // // //     <CartContext.Provider value={{
// // // // //       cartItems, setCartItems,
// // // // //       addToCart, removeFromCart, updateQty,
// // // // //       totalCartQty, totalPrice, clearCart,
// // // // //     }}>
// // // // //       {children}
// // // // //     </CartContext.Provider>
// // // // //   );
// // // // // }

// // // // // export function useCart() {
// // // // //   const ctx = useContext(CartContext);
// // // // //   if (!ctx) throw new Error("useCart must be used within CartProvider");
// // // // //   return ctx;
// // // // // }
// // // // "use client";
// // // // import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// // // // export interface CartItem {
// // // //   id: number;
// // // //   name: string;
// // // //   type: string;
// // // //   price: number;
// // // //   image: string;
// // // //   qty: number;
// // // //   pack: string;
// // // // }

// // // // interface CartContextType {
// // // //   cartItems: CartItem[];
// // // //   addToCart: (item: Omit<CartItem, "qty">, qty?: number) => void;
// // // //   removeFromCart: (id: number) => void;
// // // //   updateQty: (id: number, delta: number) => void;
// // // //   totalCartQty: number;
// // // //   totalPrice: number;
// // // //   clearCart: () => void;
// // // // }

// // // // const CartContext = createContext<CartContextType | null>(null);

// // // // export function CartProvider({ children }: { children: ReactNode }) {
// // // //   const [cartItems, setCartItems] = useState<CartItem[]>([]);
// // // //   const [ready, setReady] = useState(false);

// // // //   // Hydrate from localStorage once on mount
// // // //   useEffect(() => {
// // // //     try {
// // // //       const raw = localStorage.getItem("ibp_cart");
// // // //       if (raw) setCartItems(JSON.parse(raw));
// // // //     } catch {}
// // // //     setReady(true);
// // // //   }, []);

// // // //   // Persist to localStorage on every change
// // // //   useEffect(() => {
// // // //     if (!ready) return;
// // // //     try {
// // // //       localStorage.setItem("ibp_cart", JSON.stringify(cartItems));
// // // //     } catch {}
// // // //   }, [cartItems, ready]);

// // // //   function addToCart(item: Omit<CartItem, "qty">, qty = 1) {
// // // //     setCartItems(prev => {
// // // //       const found = prev.find(i => i.id === item.id);
// // // //       if (found) {
// // // //         return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + qty } : i);
// // // //       }
// // // //       return [...prev, { ...item, qty }];
// // // //     });
// // // //   }

// // // //   function removeFromCart(id: number) {
// // // //     setCartItems(prev => prev.filter(i => i.id !== id));
// // // //   }

// // // //   function updateQty(id: number, delta: number) {
// // // //     setCartItems(prev =>
// // // //       prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)
// // // //     );
// // // //   }

// // // //   function clearCart() {
// // // //     setCartItems([]);
// // // //     try { localStorage.removeItem("ibp_cart"); } catch {}
// // // //   }

// // // //   const totalCartQty = cartItems.reduce((s, i) => s + i.qty, 0);
// // // //   const totalPrice   = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

// // // //   return (
// // // //     <CartContext.Provider value={{
// // // //       cartItems, addToCart, removeFromCart,
// // // //       updateQty, totalCartQty, totalPrice, clearCart,
// // // //     }}>
// // // //       {children}
// // // //     </CartContext.Provider>
// // // //   );
// // // // }

// // // // export function useCart() {
// // // //   const ctx = useContext(CartContext);
// // // //   if (!ctx) throw new Error("useCart must be used within CartProvider");
// // // //   return ctx;
// // // // }
// // // "use client";
// // // import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// // // export interface CartItem {
// // //   id: number;
// // //   name: string;
// // //   type: string;
// // //   price: number;   // base price (ex-GST), straight from productsData
// // //   image: string;
// // //   qty: number;
// // //   pack: string;
// // //   gst: string;     // "Nil" | "5%" | "18%" — stored per item
// // // }

// // // interface CartContextType {
// // //   cartItems: CartItem[];
// // //   addToCart: (item: Omit<CartItem, "qty">, qty?: number) => void;
// // //   removeFromCart: (id: number, pack: string) => void;
// // //   updateQty: (id: number, pack: string, delta: number) => void;
// // //   totalCartQty: number;
// // //   subtotal: number;    // sum of base prices, no GST
// // //   totalGst: number;    // GST only for products that have a non-Nil rate
// // //   grandTotal: number;  // subtotal + totalGst
// // //   clearCart: () => void;
// // // }

// // // const CartContext = createContext<CartContextType | null>(null);

// // // /** "18%" → 18, "5%" → 5, "Nil" → 0 */
// // // function parseGstRate(gst: string): number {
// // //   if (!gst || gst === "Nil") return 0;
// // //   const n = parseFloat(gst);
// // //   return isNaN(n) ? 0 : n;
// // // }

// // // export function CartProvider({ children }: { children: ReactNode }) {
// // //   const [cartItems, setCartItems] = useState<CartItem[]>([]);
// // //   const [ready, setReady] = useState(false);

// // //   useEffect(() => {
// // //     try {
// // //       const raw = localStorage.getItem("ibp_cart");
// // //       if (raw) setCartItems(JSON.parse(raw));
// // //     } catch {}
// // //     setReady(true);
// // //   }, []);

// // //   useEffect(() => {
// // //     if (!ready) return;
// // //     try {
// // //       localStorage.setItem("ibp_cart", JSON.stringify(cartItems));
// // //     } catch {}
// // //   }, [cartItems, ready]);

// // //   function addToCart(item: Omit<CartItem, "qty">, qty = 1) {
// // //     setCartItems(prev => {
// // //       // Same product + same pack = merge qty; different pack = separate line
// // //       const found = prev.find(i => i.id === item.id && i.pack === item.pack);
// // //       if (found) {
// // //         return prev.map(i =>
// // //           i.id === item.id && i.pack === item.pack
// // //             ? { ...i, qty: i.qty + qty }
// // //             : i
// // //         );
// // //       }
// // //       return [...prev, { ...item, qty }];
// // //     });
// // //   }

// // //   function removeFromCart(id: number, pack: string) {
// // //     setCartItems(prev => prev.filter(i => !(i.id === id && i.pack === pack)));
// // //   }

// // //   function updateQty(id: number, pack: string, delta: number) {
// // //     setCartItems(prev =>
// // //       prev.map(i =>
// // //         i.id === id && i.pack === pack
// // //           ? { ...i, qty: Math.max(1, i.qty + delta) }
// // //           : i
// // //       )
// // //     );
// // //   }

// // //   function clearCart() {
// // //     setCartItems([]);
// // //     try { localStorage.removeItem("ibp_cart"); } catch {}
// // //   }

// // //   const totalCartQty = cartItems.reduce((s, i) => s + i.qty, 0);

// // //   // Base prices only — no GST
// // //   const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

// // //   // GST applied only to items that have a non-Nil gst rate
// // //   const totalGst = cartItems.reduce((s, i) => {
// // //     const rate = parseGstRate(i.gst);
// // //     if (rate === 0) return s;                          // "Nil" products → no GST
// // //     return s + (i.price * (rate / 100)) * i.qty;
// // //   }, 0);

// // //   const grandTotal = subtotal + totalGst;

// // //   return (
// // //     <CartContext.Provider value={{
// // //       cartItems, addToCart, removeFromCart,
// // //       updateQty, totalCartQty,
// // //       subtotal, totalGst, grandTotal,
// // //       clearCart,
// // //     }}>
// // //       {children}
// // //     </CartContext.Provider>
// // //   );
// // // }

// // // export function useCart() {
// // //   const ctx = useContext(CartContext);
// // //   if (!ctx) throw new Error("useCart must be used within CartProvider");
// // //   return ctx;
// // // }
// // "use client";
// // import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// // export interface CartItem {
// //   id: number;
// //   name: string;
// //   type: string;
// //   price: number;   // base price (ex-GST), straight from productsData
// //   image: string;
// //   qty: number;
// //   pack: string;
// //   gst: string;     // "Nil" | "5%" | "18%" — stored per item
// // }

// // interface CartContextType {
// //   cartItems: CartItem[];
// //   addToCart: (item: Omit<CartItem, "qty">, qty?: number) => void;
// //   removeFromCart: (id: number, pack: string) => void;
// //   updateQty: (id: number, pack: string, delta: number) => void;
// //   totalCartQty: number;
// //   subtotal: number;    // sum of base prices, no GST
// //   totalGst: number;    // GST only for products that have a non-Nil rate
// //   grandTotal: number;  // subtotal + totalGst
// //   clearCart: () => void;
// // }

// // const CartContext = createContext<CartContextType | null>(null);

// // /** "18%" → 18, "5%" → 5, "Nil" → 0 */
// // function parseGstRate(gst: string): number {
// //   if (!gst || gst === "Nil") return 0;
// //   const n = parseFloat(gst);
// //   return isNaN(n) ? 0 : n;
// // }

// // export function CartProvider({ children }: { children: ReactNode }) {
// //   const [cartItems, setCartItems] = useState<CartItem[]>([]);
// //   const [ready, setReady] = useState(false);

// //   useEffect(() => {
// //     try {
// //       const raw = localStorage.getItem("ibp_cart");
// //       if (raw) setCartItems(JSON.parse(raw));
// //     } catch {}
// //     setReady(true);
// //   }, []);

// //   useEffect(() => {
// //     if (!ready) return;
// //     try {
// //       localStorage.setItem("ibp_cart", JSON.stringify(cartItems));
// //     } catch {}
// //   }, [cartItems, ready]);

// //   function addToCart(item: Omit<CartItem, "qty">, qty = 1) {
// //     setCartItems(prev => {
// //       // Same product + same pack = merge qty; different pack = separate line
// //       const found = prev.find(i => i.id === item.id && i.pack === item.pack);
// //       if (found) {
// //         return prev.map(i =>
// //           i.id === item.id && i.pack === item.pack
// //             ? { ...i, qty: i.qty + qty }
// //             : i
// //         );
// //       }
// //       return [...prev, { ...item, qty }];
// //     });
// //   }

// //   function removeFromCart(id: number, pack: string) {
// //     setCartItems(prev => prev.filter(i => !(i.id === id && i.pack === pack)));
// //   }

// //   function updateQty(id: number, pack: string, delta: number) {
// //     setCartItems(prev =>
// //       prev.map(i =>
// //         i.id === id && i.pack === pack
// //           ? { ...i, qty: Math.max(1, i.qty + delta) }
// //           : i
// //       )
// //     );
// //   }

// //   function clearCart() {
// //     setCartItems([]);
// //     try { localStorage.removeItem("ibp_cart"); } catch {}
// //   }

// //   const totalCartQty = cartItems.reduce((s, i) => s + i.qty, 0);

// //   // Base prices only — no GST
// //   const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

// //   // GST applied only to items that have a non-Nil gst rate
// //   const totalGst = cartItems.reduce((s, i) => {
// //     const rate = parseGstRate(i.gst);
// //     if (rate === 0) return s;                          // "Nil" products → no GST
// //     return s + (i.price * (rate / 100)) * i.qty;
// //   }, 0);

// //   const grandTotal = subtotal + totalGst;

// //   return (
// //     <CartContext.Provider value={{
// //       cartItems, addToCart, removeFromCart,
// //       updateQty, totalCartQty,
// //       subtotal, totalGst, grandTotal,
// //       clearCart,
// //     }}>
// //       {children}
// //     </CartContext.Provider>
// //   );
// // }

// // export function useCart() {
// //   const ctx = useContext(CartContext);
// //   if (!ctx) throw new Error("useCart must be used within CartProvider");
// //   return ctx;
// // }
// "use client";
// import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// export interface CartItem {
//   id: number;
//   name: string;
//   type: string;
//   price: number;   // base price (ex-GST), straight from productsData
//   image: string;
//   qty: number;
//   pack: string;
//   gst: string;     // "Nil" | "5%" | "18%" — stored per item
// }

// interface CartContextType {
//   cartItems: CartItem[];
//   addToCart: (item: Omit<CartItem, "qty">, qty?: number) => void;
//   removeFromCart: (id: number, pack: string) => void;
//   updateQty: (id: number, pack: string, delta: number) => void;
//   totalCartQty: number;
//   subtotal: number;    // sum of base prices, no GST
//   totalGst: number;    // GST only for products that have a non-Nil rate
//   grandTotal: number;  // subtotal + totalGst
//   clearCart: () => void;
// }

// const CartContext = createContext<CartContextType | null>(null);

// /** "18%" → 18, "5%" → 5, "Nil" → 0 */
// function parseGstRate(gst: string): number {
//   if (!gst || gst === "Nil") return 0;
//   const n = parseFloat(gst);
//   return isNaN(n) ? 0 : n;
// }

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     try {
//       const raw = localStorage.getItem("ibp_cart");
//       if (raw) setCartItems(JSON.parse(raw));
//     } catch {}
//     setReady(true);
//   }, []);

//   useEffect(() => {
//     if (!ready) return;
//     try {
//       localStorage.setItem("ibp_cart", JSON.stringify(cartItems));
//     } catch {}
//   }, [cartItems, ready]);

//   function addToCart(item: Omit<CartItem, "qty">, qty = 1) {
//     setCartItems(prev => {
//       // Same product + same pack = merge qty; different pack = separate line
//       const found = prev.find(i => i.id === item.id && i.pack === item.pack);
//       if (found) {
//         return prev.map(i =>
//           i.id === item.id && i.pack === item.pack
//             ? { ...i, qty: i.qty + qty }
//             : i
//         );
//       }
//       return [...prev, { ...item, qty }];
//     });
//   }

//   function removeFromCart(id: number, pack: string) {
//     setCartItems(prev => prev.filter(i => !(i.id === id && i.pack === pack)));
//   }

//   function updateQty(id: number, pack: string, delta: number) {
//     setCartItems(prev =>
//       prev.map(i =>
//         i.id === id && i.pack === pack
//           ? { ...i, qty: Math.max(1, i.qty + delta) }
//           : i
//       )
//     );
//   }

//   function clearCart() {
//     setCartItems([]);
//     try { localStorage.removeItem("ibp_cart"); } catch {}
//   }

//   const totalCartQty = cartItems.reduce((s, i) => s + i.qty, 0);

//   // Base prices only — no GST
//   const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

//   // GST applied only to items that have a non-Nil gst rate
//   const totalGst = cartItems.reduce((s, i) => {
//     const rate = parseGstRate(i.gst);
//     if (rate === 0) return s;                          // "Nil" products → no GST
//     return s + (i.price * (rate / 100)) * i.qty;
//   }, 0);

//   const grandTotal = subtotal + totalGst;

//   return (
//     <CartContext.Provider value={{
//       cartItems, addToCart, removeFromCart,
//       updateQty, totalCartQty,
//       subtotal, totalGst, grandTotal,
//       clearCart,
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const ctx = useContext(CartContext);
//   if (!ctx) throw new Error("useCart must be used within CartProvider");
//   return ctx;
// }
"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
  id: number;
  name: string;
  type: string;
  price: number;   // base price (ex-GST), straight from productsData
  image: string;
  qty: number;
  pack: string;
  gst: string;     // "Nil" | "5%" | "18%" — stored per item
}

interface CartContextType {
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
  addToCart: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeFromCart: (id: number, pack: string) => void;
  updateQty: (id: number, pack: string, delta: number) => void;
  totalCartQty: number;
  subtotal: number;    // sum of base prices, no GST
  totalGst: number;    // GST only for products that have a non-Nil rate
  grandTotal: number;  // subtotal + totalGst
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "innovare_cart";

/** "18%" → 18, "5%" → 5, "Nil" → 0 */
function parseGstRate(gst: string): number {
  if (!gst || gst === "Nil") return 0;
  const n = parseFloat(gst);
  return isNaN(n) ? 0 : n;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItemsState] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage on first mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setCartItemsState(JSON.parse(stored));
      }
    } catch (e) {}
    setHydrated(true);
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {}
  }, [cartItems, hydrated]);

  function setCartItems(items: CartItem[]) {
    setCartItemsState(items);
  }

  function addToCart(item: Omit<CartItem, "qty">, qty = 1) {
    setCartItemsState(prev => {
      // Same product + same pack = merge qty; different pack = separate line
      const existing = prev.find(i => i.id === item.id && i.pack === item.pack);
      if (existing) {
        return prev.map(i =>
          i.id === item.id && i.pack === item.pack
            ? { ...i, qty: i.qty + qty }
            : i
        );
      }
      return [...prev, { ...item, qty }];
    });
  }

  function removeFromCart(id: number, pack: string) {
    setCartItemsState(prev => prev.filter(i => !(i.id === id && i.pack === pack)));
  }

  function updateQty(id: number, pack: string, delta: number) {
    setCartItemsState(prev =>
      prev.map(i =>
        i.id === id && i.pack === pack
          ? { ...i, qty: Math.max(1, i.qty + delta) }
          : i
      )
    );
  }

  function clearCart() {
    setCartItemsState([]);
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  }

  const totalCartQty = cartItems.reduce((s, i) => s + i.qty, 0);

  // Base prices only — no GST
  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

  // GST applied only to items that have a non-Nil gst rate
  const totalGst = cartItems.reduce((s, i) => {
    const rate = parseGstRate(i.gst);
    if (rate === 0) return s;                          // "Nil" products → no GST
    return s + (i.price * (rate / 100)) * i.qty;
  }, 0);

  const grandTotal = subtotal + totalGst;

  return (
    <CartContext.Provider value={{
      cartItems, setCartItems,
      addToCart, removeFromCart, updateQty,
      totalCartQty, subtotal, totalGst, grandTotal,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}